#!/usr/bin/env node

import inquirer from 'inquirer'
import {
  assertCwdIsRoot,
  cmd,
  confirm,
  fetch,
  getPackages,
  readFile,
  readJson,
  writeFile,
  writeJson,
} from './utils.js'

const validTypes = [
  'major',
  'minor',
  'patch',
  'premajor',
  'preminor',
  'prepatch',
]
const validPreIds = ['alpha', 'beta', 'rc']

/**
 * Make sure the docs site builds - no missing links etc that'll stop the deploy
 */
const assertDocsSiteBuilds = async () => {
  console.info('Making sure the docs site builds')

  const output = await cmd('cd docs && yarn build')

  if (output.code) {
    console.error(
      `Docs site failed to build. You may need to run \`yarn\` in the docs directory. Output: ${output}`
    )
    process.exit(1)
  }
}

/**
 * Make sure the working tree is clean. This step is necessary since running
 * `npm version` with the `--no-git-tag-version` doesn't check this for us.
 */
const assertNoChanges = async () => {
  console.info('Making sure the working tree is clean')

  const gitStatus = await cmd('git status')

  if (!gitStatus.stdout.includes('nothing to commit, working tree clean')) {
    console.error('Working tree must be clean before releasing a new version')
    process.exit(1)
  }
}

/**
 * Make sure the user is authorized with npm e.g. via `npm login` in this repo.
 */
const assertNpmIsAuthed = async () => {
  console.info("Making sure you're authed with npm")

  const output = await cmd(
    'npm_config_registry=https://registry.npmjs.org/ npm whoami'
  )

  if (output.code) {
    console.error(`Npm auth check failed. Output: ${output}`)
    process.exit(1)
  }
}

/**
 * Make sure the GitHub token supplied via the GITHUB_TOKEN env variable is
 * valid and not expired.
 */
const assertTokenIsValid = async (email, token) => {
  console.info('Making sure GitHub token is valid')

  try {
    const response = await fetch(
      'https://api.github.com/repos/omnistac/zedux/commits?per_page=1',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': encodeURIComponent(email),
        },
      }
    )

    if (response.body.length !== 1) throw 'unexpected response'
  } catch (err) {
    console.error('GitHub request failed. Token is likely invalid. Error:', err)
    process.exit(1)
  }
}

/**
 * Validate script arguments
 */
const assertValidArgs = (type, preId) => {
  console.info('Validating arguments')

  if (!validTypes.includes(type)) {
    console.error(
      `Expected first argument to be one of "${validTypes.join('", "')}"`
    )
    process.exit(1)
  }

  if (type.startsWith('pre') && !validPreIds.includes(preId)) {
    console.error(
      `Expected second argument to be one of "${validPreIds.join('", "')}"`
    )
    process.exit(1)
  }
}

/**
 * Commit the package.json and CHANGELOG.md changes and tag the commit
 */
const commitChanges = async tagName => {
  await confirm(
    'Versions updated and changelog generated. Review changes. Proceed?'
  )

  console.info(
    `Switching to branch "release/${tagName}" and committing changes`
  )

  const commitOutput = await cmd(
    `git checkout -b release/${tagName} && git add . && git commit -m "${tagName}" && git push -u origin release/${tagName}`
  )

  if (commitOutput.code) {
    console.error(`Failed to commit and push changes. Output: ${commitOutput}`)
    process.exit(1)
  }
}

/**
 * Create GitHub release using the tagged commit
 */
const createRelease = async (
  email,
  token,
  tagName,
  changelogBody,
  isPrerelease
) => {
  console.info('Creating GitHub Release')

  try {
    const result = await fetch(
      'https://api.github.com/repos/omnistac/zedux/releases',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': encodeURIComponent(email),
        },
        method: 'POST',
      },
      {
        body: changelogBody,
        name: tagName,
        prerelease: isPrerelease,
        tag_name: tagName,
      }
    )

    if (!result.body.html_url) {
      console.info(
        'GitHub release creation response has no url. Response:',
        result
      )
      throw 'no url in body'
    }

    console.info(
      `Successfully created GitHub release at ${result.body.html_url}`
    )
  } catch (err) {
    console.error('Failed to create GitHub release. Error:', err)
    await confirm(`\nCreate the release for ${tagName} manually. Is it done?`)
  }
}

/**
 * Receives a list of `{ affectedPackages: string[]; isBreaking: boolean;
 * message: string }` objects and turns it into a markdown unordered list.
 */
const formatList = (header, list) => {
  if (!list.length) return ''

  const formattedList = list
    .sort((a, b) => {
      if (a.isBreaking !== b.isBreaking) return a.isBreaking ? -1 : 1

      const aLength = a.affectedPackages.length
      const bLength = b.affectedPackages.length

      if (aLength !== bLength) return aLength - bLength

      const [firstPackageA] = a.affectedPackages
      const [firstPackageB] = b.affectedPackages

      if (firstPackageA !== firstPackageB) {
        return firstPackageA.localeCompare(firstPackageB)
      }

      return a.message.localeCompare(b.message)
    })
    .map(
      ({ affectedPackages, isBreaking, message }) =>
        `- ${isBreaking ? '**Breaking Change** ' : ''}${
          affectedPackages.length
            ? `\`${affectedPackages.join('`, `')}\`: `
            : ''
        }${message}`
    )

  return `### ${header}:\n\n${formattedList.join('\n')}`
}

/**
 * Read all commits since the last tag and group the `feat`, `fix`, and `chore`
 * commits. Prompt for any additional notes. Accentuate any breaking changes.
 *
 * Output markdown at the beginning of the CHANGELOG.md file
 */
const generateChangelog = async (type, tagName) => {
  const [day, month, year] = new Date().toUTCString().split(' ').slice(1, 4)
  const date = `${month} ${day.replace(/^0/, '')}, ${year}`
  const file = 'CHANGELOG.md'

  const changelog = await readFile(file).catch(() => '')
  const commits = await cmd(
    'git log $(git describe --tags --abbrev=0)..HEAD --pretty="%H"'
  )

  let hasBreakingChanges = false
  const chores = []
  const features = []
  const fixes = []

  const promises = commits.stdout
    .split('\n')
    .filter(Boolean)
    .map(async id => {
      const { stdout } = await cmd(`git show ${id} --pretty="%B" -s`)
      const message = stdout.trim()
      const colonIndex = message.indexOf(':')
      const isBreaking = message[colonIndex - 1] === '!'
      const shortMessage = message.slice(colonIndex + 2, stdout.indexOf('\n'))

      if (isBreaking) hasBreakingChanges = true

      const affectedPackages =
        message.match(/^\w+\((.*?)\)!?:/)?.slice(1, 2) ||
        message.match(/^@affects (.*)?/m)?.[1].split(', ') ||
        []

      const item = { affectedPackages, isBreaking, message: shortMessage }

      if (/^feat[(!:]/.test(message)) {
        features.push(item)
      } else if (/^fix[(!:]/.test(message)) {
        fixes.push(item)
      } else if (/^chore(\(.+?\))?!:/.test(message)) {
        // only include breaking chores
        item.message = `Chore: ${shortMessage}`
        chores.push(item)
      }
    })

  await Promise.all(promises)

  if (hasBreakingChanges && !['major', 'premajor'].includes(type)) {
    await confirm(
      'Breaking changes detected. A major version or a premajor is recommended. Proceed anyway?',
      false
    )
  }

  if (
    features.length &&
    !['major', 'minor', 'premajor', 'preminor'].includes(type)
  ) {
    await confirm(
      'New features detected. A major, minor, premajor, or preminor is recommended. Proceed anyway?',
      false
    )
  }

  const header = `## ${tagName} (${date})`
  const featuresStr = formatList('New Features', features)
  const fixesStr = formatList('Fixes', fixes)
  const choresStr = formatList('Auxiliary Changes', chores)

  const { notes } = await inquirer.prompt([
    {
      message: 'Any additional notes for the changelog?\n',
      name: 'notes',
    },
  ])

  if (!notes.trim() && !chores.length && !features.length && !fixes.length) {
    console.error(
      '\nNo fixes, features, or chores since last release and no notes given. Exiting.\n'
    )
    process.exit(1)
  }

  const body = [notes.trim(), featuresStr, fixesStr, choresStr]
    .filter(Boolean)
    .join('\n\n')

  const changelogEntry = `${header}\n\n${body}`

  const newChangelog = `${changelogEntry}\n${changelog ? '\n' : ''}${changelog}`

  await writeFile(file, newChangelog)

  return body
}

/**
 * Make sure the current branch is one that can publish packages (`master`,
 * `v*.x`, or `next/v*.x`) and that the version type is valid for the current
 * branch.
 *
 * Return the branch name.
 */
const getBranch = async type => {
  console.info(
    'Making sure the current branch is `master`, `v*.x`, or `next/v*.x`'
  )

  const { stdout } = await cmd('git branch --show-current')
  const branch = stdout.trim()
  const isSupportBranch = /^v\d+\.x$/.test(branch)
  const isNextBranch = /^next\/v\d+\.x$/.test(branch)
  const isValid = branch === 'master' || isSupportBranch || isNextBranch

  if (!isValid) {
    console.error(
      'Releases can only be cut from `master`, `v*.x`, or `next/v*.x` branches'
    )
    process.exit(1)
  }

  if (
    isSupportBranch &&
    !['minor', 'patch', 'preminor', 'prepatch'].includes(type)
  ) {
    console.error(
      'Support branches can only publish minor, patch, preminor, and prepatch versions.'
    )
    process.exit(1)
  }

  if (isNextBranch && type !== 'premajor') {
    console.error('Next branches can only publish premajor versions.')
    process.exit(1)
  }

  return branch
}

/**
 * Make sure user has their git email configured for this repo and return it
 */
const getEmail = async () => {
  console.info('Reading configured git email')

  const { stdout } = await cmd('git config user.email')

  if (!stdout) {
    console.error(
      'You must have your git email configured for this repo. Set it via `git config user.email "<email>"`'
    )
    process.exit(1)
  }

  return stdout
}

/**
 * Make sure there's a GITHUB_TOKEN env variable set for GitHub API requests and
 * return it
 */
const getToken = async () => {
  console.info('Reading configured GITHUB_TOKEN env variable')

  const token = process.env.GITHUB_TOKEN

  try {
    const contents = (await readFile('.env')).toString()

    const { GITHUB_TOKEN } = contents
      .split('\n')
      .filter(Boolean)
      .reduce((obj, field) => {
        const [key, ...val] = field.split('=')
        obj[key] = val.join('=')
        return obj
      }, {})

    if (!token && !GITHUB_TOKEN) {
      throw 'not set'
    }

    return token || GITHUB_TOKEN
  } catch (err) {
    console.error(
      "Couldn't find a GITHUB_TOKEN in the current environment. Either set the env variable before invoking this script or set it in a local (gitignored) .env file in the repo root"
    )
    process.exit(1)
  }
}

/**
 * Increment version in all package.json files including repo root
 *
 * Increment @zedux/* deps/devDeps/peerDeps in all package package.json files
 */
const incrementVersion = async (packages, type, preId) => {
  console.info('Incrementing package versions')

  const npmVersionOutput = await cmd(
    `npm version --no-git-tag-version ${type}${
      preId ? ` --preid=${preId}` : ''
    }`
  )

  if (npmVersionOutput.code) {
    console.error(
      `Failed to increment npm version. Output: ${npmVersionOutput}`
    )
    process.exit(1)
  }

  const tagName = npmVersionOutput.stdout.trim()
  const version = tagName.slice(1) // slice the "v" off the tagName

  await confirm(`Publishing version ${version}. Proceed?`)

  const promises = packages.map(async dir => {
    const file = `packages/${dir}/package.json`
    const packageJson = await readJson(file)

    packageJson.version = version

    for (const key of ['dependencies', 'devDependencies', 'peerDependencies']) {
      Object.keys(packageJson[key] || {}).forEach(dep => {
        if (!dep.startsWith('@zedux/')) return

        packageJson[key][dep] = `^${version}`
      })
    }

    await writeJson(file, packageJson)
  })

  await Promise.all(promises)

  return tagName
}

/**
 * Log npm links for easily checking the new releases.
 */
const logPackageLinks = packages => {
  console.info('Success! Published the following npm packages:\n')

  for (const packageName of packages) {
    console.info(`  https://www.npmjs.com/package/@zedux/${packageName}`)
  }

  console.info('\n')
}

/**
 * Make a GitHub PR for the release. We'll wait for this to merge then proceed
 * with tagging the merge commit and publishing the new packages.
 */
const makePullRequest = async (email, token, branch, tagName) => {
  try {
    const result = await fetch(
      'https://api.github.com/repos/omnistac/zedux/pulls',
      {
        headers: {
          Accept: 'application/vnd.github+json',
          Authorization: `Bearer ${token}`,
          'X-GitHub-Api-Version': '2022-11-28',
          'User-Agent': encodeURIComponent(email),
        },
        method: 'POST',
      },
      {
        base: branch,
        body: `## Description\n\nIncrement monorepo package versions and update the CHANGELOG for version ${tagName.slice(
          1
        )}.\n\nThis PR was generated by the release script at https://github.com/Omnistac/zedux/tree/${branch}/scripts/release.js\n\nThe packages will be published to npm and a GitHub release will be created after this PR merges.`,
        head: `release/${tagName}`,
        title: `release: ${tagName}`,
      }
    )

    if (!result.body.html_url) {
      console.info(
        'GitHub pull request creation response has no url. Response:',
        result
      )
      throw 'no url in body'
    }

    console.info(
      `\n  Successfully created GitHub PR at ${result.body.html_url}\n`
    )

    await confirm('Squash and merge the above PR. Is it done?')
  } catch (err) {
    console.error('Failed to create GitHub Pull Request. Error:', err)
    await confirm(
      `\nCreate and merge the PR manually from branch "release/${tagName}". Is it done?`
    )
  }
}

/**
 * Publish each package to npm. If there are any successes, we proceed with the
 * release. User has to fix and publish failed packages manually
 */
const npmPublish = async packages => {
  console.info('Publishing packages')

  let proceed = true

  // publish packages one-by-one (there seemed to be some Nx race condition)
  for (const dir of packages) {
    const output = await cmd(
      `cd packages/${dir} && npm_config_registry=https://registry.npmjs.org/ npm publish --access=public`
    )

    if (output.code) {
      proceed = false
      console.error(`Failed to publish package "${dir}". Output: ${output}`)
    } else {
      console.info(`Published "${dir}" package successfully`)
    }
  }

  if (!proceed) {
    console.error('Some packages failed to publish')
    await confirm(
      '\nInvestigate the problem(s) and publish packages manually. Are they all published?'
    )
  }
}

/**
 * Fetch git tags so we can determine changes since last release.
 */
const pullTags = async () => {
  const output = await cmd('git pull && git fetch --all --tags')

  if (output.code) {
    console.error(`Failed to fetch tags: ${output}`)
    process.exit(1)
  }
}

/**
 * Now that the PR is merged, go back to the original branch and add the tag
 */
const returnToBranch = async (branch, tagName) => {
  console.info(`Returning to branch "${branch}" and pulling`)

  const checkoutOutput = await cmd(`git checkout ${branch} && git pull`)

  if (checkoutOutput.code) {
    console.info(
      `Failed to checkout original branch and/or pull changes. Output: ${checkoutOutput}`
    )
    await confirm(
      `\nInvestigate the problem. Ensure the current branch is "${branch}" and up-to-date. Is that done?`
    )
  }

  const lastCommitOutput = await cmd('git show --pretty="%s" -s')

  // the merge commit should have the PR # appended to it, so only check if
  // startsWith:
  if (!lastCommitOutput.stdout.trim().startsWith(tagName)) {
    console.error('Last commit on target branch does not match the pushed tag')
    await confirm(
      "\nInvestigate the problem. Perhaps the PR didn't merge successfully. Is it resolved?"
    )
  }

  console.info('Tagging release commit')

  const tagOutput = await cmd(
    `git tag -a ${tagName} -m "${tagName}" && git push origin ${tagName}`
  )

  if (tagOutput.code) {
    console.error(`Failed to add and push git tag. Output: ${tagOutput}`)
    await confirm('\nInvestigate the problem. Is it resolved?')
  }
}

/**
 * type is the `npm version ____` release type - can be 'major', 'minor',
 * 'patch', or 'pre<major|minor|patch>'
 *
 * If type is 'pre<major|minor|patch>', also pass a preId of 'alpha', 'beta', or
 * 'rc'
 */
const run = async (type, preId) => {
  assertValidArgs(type, preId)

  // we don't need to assert that tests pass or that packages build - the
  // release PR CI will do that. TODO: Move docs site build check to a CI job
  // for `release/*` branch PRs
  await Promise.all([
    assertCwdIsRoot(),
    assertNoChanges(),
    assertDocsSiteBuilds(),
  ])

  await pullTags()

  const [branch, email, packages, token] = await Promise.all([
    getBranch(type),
    getEmail(),
    getPackages(),
    getToken(),
  ])

  await Promise.all([assertNpmIsAuthed(), assertTokenIsValid(email, token)])

  // start modifying things
  const tagName = await incrementVersion(packages, type, preId)
  const changelogBody = await generateChangelog(type, tagName)

  await commitChanges(tagName)

  // Now we're at the point of no return. Stop exiting on errors and instead
  // prompt the user to manually fix any encountered problems.
  await makePullRequest(email, token, branch, tagName)
  await returnToBranch(branch, tagName)

  await npmPublish(packages)
  await createRelease(
    email,
    token,
    tagName,
    changelogBody,
    type.startsWith('pre')
  )

  logPackageLinks(packages)
}

run(...process.argv.slice(2))

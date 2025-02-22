const PREFIX = '@@zedux/'

export const internalTypes = {
  batch: `${PREFIX}batch`,
  delegate: `${PREFIX}delegate`,
  hydrate: `${PREFIX}hydrate`,
  ignore: `${PREFIX}ignore`, // for use with atoms in the @zedux/react package
  inherit: `${PREFIX}inherit`,
  merge: `${PREFIX}merge`,
  prime: `${PREFIX}prime`,
}

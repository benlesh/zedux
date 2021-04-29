import { Job, JobType } from './types'

let scheduledJobs: Job[] = []

const insertJob = (jobs: Job[], newJob: Job) => {
  if (newJob.type !== JobType.EvaluateAtom) return jobs.push(newJob)

  let targetIndex = jobs.length
  for (let i = 0; i < jobs.length; i++) {
    const job = jobs[i]
    if (job.type !== JobType.EvaluateAtom) continue

    // if that job depends on the new job, targetIndex is just before that job
    if (job.dependencies[newJob.key]) {
      targetIndex = i
      break
    }

    // if the new job depends on that job, targetIndex will be (at least) after that job
    if (newJob.dependencies[job.key]) {
      targetIndex = i + 1
    }
  }

  // jobs lower down may now need to be moved up
  for (let i = targetIndex + 1; i < jobs.length; i++) {
    const job = jobs[i]
    if (job.type !== JobType.EvaluateAtom) continue

    // if the new job depends on that job, move that job above the new job
    if (newJob.dependencies[job.key]) {
      jobs.splice(i, 1)
      jobs.splice(targetIndex, 0, job)
      targetIndex += 1
    }
  }

  jobs.splice(targetIndex, 0, newJob)
}

export const scheduleJob = (newJob: Job) => {
  const shouldSetTimeout = scheduledJobs.length === 0
  insertJob(scheduledJobs, newJob)

  // we just pushed the first job onto the queue
  if (shouldSetTimeout) {
    setTimeout(() => {
      while (scheduledJobs.length) {
        const job = scheduledJobs.shift() as Job
        job.task()
      }
    })
  }

  return () => {
    scheduledJobs = scheduledJobs.filter(job => job !== newJob)
  }
}

import { Job, Scheduler as SchedulerInterface } from '@zedux/core'
import { Ecosystem } from './Ecosystem'

export class Scheduler implements SchedulerInterface {
  /**
   * We set this to true internally when the scheduler starts flushing. We also
   * set it to true when batching updates, to prevent anything from flushing.
   */
  public _isRunning?: boolean
  public _isRunningNows?: boolean

  // private _runStartTime?: number

  /**
   * The dynamic list of "full" jobs to run. Full jobs are:
   *
   * - EvaluateGraphNode (2)
   * - UpdateExternalDependent (3)
   * - RunEffect (4)
   */
  private jobs: Job[] = []

  /**
   * The dynamic list of "now" jobs to run. Now jobs are:
   *
   * - UpdateStore (0)
   * - InformSubscribers(1)
   */
  private nows: Job[] = []
  private _handle?: ReturnType<typeof setTimeout>
  private _runAfterNows?: boolean

  constructor(private readonly ecosystem: Ecosystem) {}

  /**
   * Kill any current timeout and run all jobs immediately.
   *
   * IMPORTANT: Setting and clearing timeouts is expensive. We need to always
   * pass `shouldSetTimeout: false` to scheduler.schedule() when we're going
   * to immediately flush
   */
  public flush() {
    if (this._isRunning) return // already flushing
    if (this._handle) {
      clearTimeout(this._handle)
      this._handle = undefined
    }

    this.runJobs()
  }

  /**
   * Insert a job into the queue. Insertion point depends on job's type and
   * weight.
   *
   * IMPORTANT: Setting and clearing timeouts is expensive. We need to always
   * pass `shouldSetTimeout: false` when we're going to immediately flush
   */
  public schedule(newJob: Job, shouldSetTimeout = true) {
    if (newJob.type === 4) {
      // RunEffect (4) jobs run in any order, after everything else
      this.jobs.push(newJob)
    } else {
      this.insertJob(newJob)
    }

    // we just pushed the first job onto the queue
    if (shouldSetTimeout && this.jobs.length === 1) {
      this.setTimeout()
    }
  }

  /**
   * UpdateStore (0) jobs must run immediately but also need the scheduler to be
   * running all "now" jobs.
   *
   * InformSubscriber (1) jobs must run immediately after the current task.
   */
  public scheduleNow(newJob: Job) {
    if (this._isRunningNows && newJob.type === 0) return newJob.task()

    this.nows[newJob.type === 1 ? 'push' : 'unshift'](newJob)

    this.runJobs(true)
  }

  public unschedule(task: () => void) {
    const index = this.jobs.findIndex(job => job.task === task)

    if (index !== -1) this.jobs.splice(index, 1)
  }

  public wipe() {
    // allow external jobs to proceed. TODO: should we flush here?
    this.jobs = this.jobs.filter(
      job => job.type === 3 // UpdateExternalDependent (3)
    )
  }

  // An O(log n) replacement for this.jobs.findIndex()
  private findIndex(
    cb: (job: Job) => number,
    index = Math.ceil(this.jobs.length / 2) - 1,
    iteration = 1
  ): number {
    const job = this.jobs[index]
    if (job == null) return index

    const direction = cb(job)
    if (!direction) return index

    const divisor = 2 ** iteration
    const isDone = divisor > this.jobs.length

    if (isDone) {
      return index + (direction === 1 ? 1 : 0)
    }

    const effectualSize = Math.round(this.jobs.length / divisor)
    const newIndex = Math.min(
      this.jobs.length - 1,
      Math.max(0, index + Math.ceil(effectualSize / 2) * direction)
    )

    return this.findIndex(cb, newIndex, iteration + 1)
  }

  /**
   * Schedule an EvaluateGraphNode (2) or UpdateExternalDependent (3) job
   */
  private insertJob(newJob: Job) {
    const { nodes } = this.ecosystem._graph
    const flags = newJob.flags ?? 0
    const weight = newJob.id ? nodes[newJob.id].weight : 0

    const index = this.findIndex(job => {
      if (job.type !== newJob.type) return +(newJob.type - job.type > 0) || -1 // 1 or -1

      // EvaluateGraphNode (2) jobs use weight comparison
      if (job.id) {
        const jobWeight = nodes[job.id].weight

        return weight < jobWeight ? -1 : +(weight > jobWeight) // + = 0 or 1
      }

      // UpdateExternalDependent (3) jobs use flags comparison
      return flags < (job.flags as number)
        ? -1
        : +(flags > (job.flags as number))
    })

    if (index === -1) {
      this.jobs.push(newJob)
    } else {
      this.jobs.splice(index, 0, newJob)
    }
  }

  /**
   * Run either all "full" jobs or all "now" jobs. Since the jobs are split, we
   * can essentially have two schedulers running at once. "Now" jobs must always
   * run before any "full" jobs, so the "full" jobs runner has to flush any "now"s that come up while it's flushing "full"s.
   *
   * Don't run "full" jobs while "now"s are running. It leads to "now"s being deferred until after "full"s finish. This is backwards and can lead to reevaluation loops.
   */
  private runJobs(isNows?: boolean) {
    // we prevent this function from running at all if no "full" jobs are
    // scheduled
    if (this._isRunningNows) {
      // schedule a "full" jobs run after "now"s finish
      this._runAfterNows = !isNows
      return
    }

    const jobs = isNows ? this.nows : this.jobs
    const runningKey: keyof Pick<this, '_isRunning' | '_isRunningNows'> = isNows
      ? '_isRunningNows'
      : '_isRunning'

    const nows = this.nows
    // this._runStartTime = performance.now()
    // let counter = 0

    this[runningKey] = true
    try {
      while (jobs.length) {
        const job = (nows.length ? nows : jobs).shift() as Job
        job.task()

        // this "break" idea could only break for "full" jobs, not "now" jobs
        // if (!(++counter % 20) && performance.now() - this._runStartTime >= 100) {
        //   setTimeout(() => this.runJobs())
        //   break
        // }
      }
    } finally {
      this[runningKey] = false
    }

    if (this._runAfterNows) {
      this._runAfterNows = false
      this.runJobs()
    }
  }

  private setTimeout() {
    if (this._isRunning) return

    this._handle = setTimeout(() => {
      this._handle = undefined
      this.runJobs()
    })
  }
}

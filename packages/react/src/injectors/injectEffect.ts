import { createInjector } from '../factories'
import { EffectCallback, InjectorDeps } from '../types'
import { haveDepsChanged, InjectorDescriptor, prefix } from '../utils'

interface EffectInjectorDescriptor extends InjectorDescriptor<undefined> {
  deps: InjectorDeps
}

const getTask = (
  effect: EffectCallback,
  descriptor: EffectInjectorDescriptor
) => {
  const task = () => {
    const cleanup = effect()

    // now that the task has run, there's no need for the scheduler cleanup
    // function; replace it with the cleanup logic returned from the effect
    // (if any). If a promise was returned, ignore it.
    descriptor.cleanup = typeof cleanup === 'function' ? cleanup : undefined
  }

  return task
}

/**
 * Runs a deferred side effect. This is just like React's `useEffect`. When
 * `deps` change on a subsequent reevaluation, the previous effect will be
 * cleaned up and the effect will rerun.
 *
 * Return a cleanup function to clean up resources when the effect reruns or the
 * current atom instance is destroyed.
 *
 * Unlike `useEffect`, you can return a promise from `injectEffect` (e.g. by
 * passing an async function). This is only for convenience in cases where you
 * don't have anything to cleanup, as you'll be unable to clean up resources if
 * you return a promise.
 */
export const injectEffect = createInjector(
  'injectEffect',
  (
    instance,
    effect: EffectCallback,
    deps?: InjectorDeps,
    config?: { synchronous?: boolean }
  ) => {
    const descriptor: EffectInjectorDescriptor = {
      deps,
      type: `${prefix}/effect`,
    }

    if (!instance.ecosystem.ssr) {
      const task = getTask(effect, descriptor)
      descriptor.cleanup = () => {
        instance.ecosystem._scheduler.unschedule(task)
        descriptor.cleanup = undefined
      }

      if (config?.synchronous) {
        task()
      } else {
        instance.ecosystem._scheduler.schedule({
          task,
          type: 4, // RunEffect (4)
        })
      }
    }

    return descriptor
  },
  (
    prevDescriptor,
    instance,
    effect: EffectCallback,
    deps?: InjectorDeps,
    config?: { synchronous?: boolean }
  ) => {
    if (instance.ecosystem.ssr) return prevDescriptor

    const depsHaveChanged = haveDepsChanged(prevDescriptor?.deps, deps)

    if (!depsHaveChanged) return prevDescriptor

    prevDescriptor.cleanup?.()

    const task = getTask(effect, prevDescriptor)
    // this cleanup should be unnecessary since effects run immediately every
    // time except init. Leave this though in case we add a way to update an
    // atom instance without flushing the scheduler
    prevDescriptor.cleanup = () => {
      instance.ecosystem._scheduler.unschedule(task)
      prevDescriptor.cleanup = undefined
    }
    prevDescriptor.deps = deps

    if (config?.synchronous) {
      task()
    } else {
      instance.ecosystem._scheduler.schedule({
        task,
        type: 4, // RunEffect (4)
      })
    }

    return prevDescriptor
  }
)

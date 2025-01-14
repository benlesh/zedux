import {
  AtomConfig,
  AtomValueOrFactory,
  AtomGenerics,
} from '@zedux/react/types'
import { Ecosystem } from '../Ecosystem'
import { AtomInstance } from '../instances/AtomInstance'

export abstract class AtomTemplateBase<
  G extends AtomGenerics,
  InstanceType extends AtomInstance<G>
> {
  public readonly dehydrate?: AtomConfig<G['State']>['dehydrate']
  public readonly flags?: string[]
  public readonly hydrate?: AtomConfig<G['State']>['hydrate']
  public readonly manualHydration?: boolean
  public readonly ttl?: number

  /**
   * Set this to true when this atom template is a known override of another
   * atom template with the same key.
   *
   * This has no built-in functionality, but it allows plugins to identify
   * potentially problematic duplicate atom keys e.g. by hooking into the
   * `instanceReused` mod and logging a warning if the templates don't match and
   * neither is an override.
   */
  public _isOverride?: boolean

  constructor(
    public readonly key: string,
    public readonly _value: AtomValueOrFactory<G>,
    protected readonly _config?: AtomConfig<G['State']>
  ) {
    Object.assign(this, _config)

    // const map = new WeakMap();
    // map.set(newAtomInstance, true);
    // map.set({ control: true }, true);
    // console.log({ key: atom.key, map });
  }

  public abstract _createInstance(
    ecosystem: Ecosystem,
    id: string,
    params: G['Params']
  ): InstanceType

  public abstract getInstanceId(
    ecosystem: Ecosystem,
    params?: G['Params']
  ): string
}

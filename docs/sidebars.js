module.exports = {
  react: {
    About: [
      'about/introduction',
      'about/overview',
      'about/redux-comparison',
      'about/react-query-comparison',
    ],
    Walkthrough: [
      'walkthrough/quick-start',
      'walkthrough/creating-atoms',
      'walkthrough/using-atoms',
      'walkthrough/ecosystems',
      'walkthrough/dependency-injection',
      'walkthrough/stores',
      'walkthrough/side-effects',
      'walkthrough/state-machines',
      'walkthrough/context',
      'walkthrough/suspense',
    ],
    API: [
      {
        type: 'category',
        label: 'Classes',
        items: [
          'api/classes/Atom',
          'api/classes/AtomApi',
          'api/classes/AtomInstance',
          'api/classes/Ecosystem',
          'api/classes/Ion',
          'api/classes/LocalAtom',
          'api/classes/Store',
        ],
      },
      {
        type: 'category',
        label: 'Components',
        items: [
          'api/components/EcosystemProvider',
          'api/components/AtomInstanceProvider',
        ],
      },
      {
        type: 'category',
        label: 'Constants',
        items: ['api/constants/metaTypes', 'api/constants/zeduxGlobalStore'],
      },
      {
        type: 'category',
        label: 'Factories',
        items: [
          'api/factories/api',
          'api/factories/atom',
          'api/factories/createActor',
          'api/factories/createAsyncStore',
          'api/factories/createReducer',
          'api/factories/createStore',
          'api/factories/ecosystem',
          'api/factories/ion',
          'api/factories/localAtom',
        ],
      },
      {
        type: 'category',
        label: 'Hooks',
        items: [
          'api/hooks/useAtomConsumer',
          'api/hooks/useAtomInstance',
          'api/hooks/useAtomSelector',
          'api/hooks/useAtomState',
          'api/hooks/useAtomValue',
          'api/hooks/useEcosystem',
          'api/hooks/useGetInstance',
        ],
      },
      {
        type: 'category',
        label: 'Injectors',
        items: [
          'api/injectors/injectAsyncEffect',
          'api/injectors/injectAtomInstance',
          'api/injectors/injectAtomSelector',
          'api/injectors/injectAtomState',
          'api/injectors/injectAtomValue',
          'api/injectors/injectCallback',
          'api/injectors/injectEcosystem',
          'api/injectors/injectEffect',
          'api/injectors/injectGet',
          'api/injectors/injectGetInstance',
          'api/injectors/injectInvalidate',
          'api/injectors/injectMemo',
          'api/injectors/injectRef',
          'api/injectors/injectStore',
          'api/injectors/injectWhy',
        ],
      },
      {
        type: 'category',
        label: 'Types',
        items: [
          'api/types/Action',
          'api/types/ActionChain',
          'api/types/Actor',
          'api/types/AsyncStore',
          'api/types/AtomConfig',
          'api/types/AtomInstanceTtl',
          'api/types/DispatchInterceptor',
          'api/types/EcosystemConfig',
          'api/types/EvaluationReason',
          'api/types/GetterUtils',
          'api/types/HierarchyDescriptor',
          'api/types/Reducer',
          'api/types/SetStateInterceptor',
          'api/types/Settable',
          'api/types/SetterUtils',
          'api/types/Subscriber',
          'api/types/Subscription',
        ],
      },
      'api/glossary',
    ],
  },
}

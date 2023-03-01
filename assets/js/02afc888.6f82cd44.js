"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[9723],{307:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'injectMachineStore\',title:\'injectMachineStore\'};var contentTitle=undefined;var metadata={"unversionedId":"api/injectors/injectMachineStore","id":"api/injectors/injectMachineStore","title":"injectMachineStore","description":"An injector that creates and configures a MachineStore.","source":"@site/docs/api/injectors/injectMachineStore.mdx","sourceDirName":"api/injectors","slug":"/api/injectors/injectMachineStore","permalink":"/zedux/docs/api/injectors/injectMachineStore","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/injectors/injectMachineStore.mdx","tags":[],"version":"current","frontMatter":{"id":"injectMachineStore","title":"injectMachineStore"},"sidebar":"react","previous":{"title":"injectInvalidate","permalink":"/zedux/docs/api/injectors/injectInvalidate"},"next":{"title":"injectMemo","permalink":"/zedux/docs/api/injectors/injectMemo"}};var assets={};var toc=[{value:\'Example\',id:\'example\',level:2},{value:\'Signature\',id:\'signature\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { injectMachineStore } from \'@zedux/react\'\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../glossary#injector"},"injector")," that creates and configures a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/MachineStore"},"MachineStore"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accepts a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"statesFactory")," function, optional initial context state, and an optional config object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const cyclingStore = injectMachineStore(stateFactory, initialContext, {\\n  guard,\\n  onTransition,\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux state machines are only designed for simple use cases where the high-level API and automatic TypeScript types can give quick gains. If you need more power, use XState."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"example"},"Example"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=injectMachineStore/example resultVar=Theme","live":true,"ecosystemId":"injectMachineStore/example","resultVar":"Theme"},"const themeAtom = atom(\'theme\', () => {\\n  const store = injectMachineStore(\\n    state => [\\n      state(\'light\').on(\'toggle\', \'dark\'),\\n      state(\'dark\').on(\'toggle\', \'light\'),\\n    ],\\n    { count: 0 },\\n    {\\n      onTransition: machine =>\\n        machine.setContext(context => ({ count: context.count + 1 })),\\n    }\\n  )\\n\\n  return api(store).setExports({ send: store.send })\\n})\\n\\nfunction Theme() {\\n  const [{ context, value }, { send }] = useAtomState(themeAtom)\\n\\n  return (\\n    <div style={value === \'dark\' ? { background: \'#444\', color: \'#fff\' } : {}}>\\n      <label>\\n        <input\\n          checked={value === \'dark\'}\\n          onChange={() => send(\'toggle\')}\\n          type=\\"checkbox\\"\\n        />\\n        <span>{value} mode</span>\\n      </label>\\n      <div>Toggle Count: {context.count}</div>\\n    </div>\\n  )\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"signature"},"Signature"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("injectMachineStore = (statesFactory, initialContext?, config?) => machineStore"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("declare const injectMachineStore: <\\n  States extends MachineState[],\\n  Context extends Record<string, any> | undefined = undefined\\n>(\\n  statesFactory: (\\n    state: <Name extends string>(stateName: Name) => MachineState<Context, Name>\\n  ) => [...States],\\n\\n  initialContext?: Context,\\n\\n  config?: MachineStoreConfig<\\n    MapStatesToStateNames<States, Context>,\\n    MapStatesToEvents<States, Context>,\\n    Context\\n  >\\n): MachineStore<\\n  MapStatesToStateNames<States, Context>,\\n  MapStatesToEvents<States, Context>,\\n  Context\\n>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"statesFactory",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Required. A function that returns an array of \\"states\\". States are created using the received ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"createState")," factory function. Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("statesFactory = (createState) => stateList"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("statesFactory: (\\n  createState: <Name extends string>(stateName: Name) => MachineState<Context, Name>\\n) => [...States]")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"createState",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A function that accepts a single string - the name of the state. Returns a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../types/MachineState",mdxType:"Link"},"MachineState"),". This function is often abbreviated as simply ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"state")," or even",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"s"),":"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"injectMachineStore(state => [state(\'a\'), state(\'b\')])\\ninjectMachineStore(s => [s(\'a\'), s(\'b\')])")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An array of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../types/MachineState",mdxType:"Link"},"MachineStates"),\' \',"created using the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"createState")," factory function."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The first state in this list will become the initial state of the machine."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"injectMachineStore(state => [state(\'initial\'), state(\'other\')])")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"initialContext",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. An object or ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"undefined")," if no context."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If set, this will become the initial value of the MachineStore\'s",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context")," state property."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"const store = injectMachineStore(stateFactory, { foo: \'bar\' })\\nstore.getContext() // { foo: \'bar\' }")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"config",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. An object with the following optional properties:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"{ guard, onTransition }"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"guard",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. A function that receives the MachineStore\'s current",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context")," value and should return a boolean."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("guard = (context) => boolean"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("guard?: (\\n  currentState: MachineStateType<StateNames, Context>,\\n  nextState: StateNames\\n) => boolean")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This function is called every time the state receives an event that will transition the machine to a new state."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Return true to allow the transition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Return false (or any falsy value) to prevent the transition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"const store = injectMachineStore(statesFactory, initialContext, {\\n  guard: (currentState, nextValue) => !currentState.context.isPaused\\n})")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"onTransition",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. A function that receives the MachineStore and the",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../types/StoreEffect",mdxType:"Link"},"StoreEffect")," of the action responsible for the transition."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("onTransition = (currentState, nextState) => void"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("onTransition?: MachineHook<StateNames, EventNames, Context>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This function is called every time the MachineStore transitions to a new state (after the transition has finished)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"const store = injectMachineStore(statesFactory, initialContext, {\\n  onTransition: (machineStore, storeEffect) => console.log(storeEffect)\\n})")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/MachineStore",mdxType:"Link"},"MachineStore"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This store\'s initial ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".value")," will be set to the first state returned from the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"statesFactory"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This store\'s initial ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context")," will be set to the passed",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"initialContext")," (if any)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"injectMachineStore()")," will also register all guards and listeners on all individual states as well as the universal guard and",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"onTransition")," listener."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If returning this store from a state factory, you may also want to export some of the MachineStore\'s properties like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".send"),",",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".is"),", and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".setContext")))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/state-machines"},"The State Machines walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../classes/MachineStore"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"MachineStore")," class")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../types/MachineState"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"MachineState")," type"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNKLHNFQUNFLGdHQUFpQyw0R0FDcUMsR0FBRyxDQUN6RSx3RkFBeUIsY0FDdkIsQ0FDSiw4TEFFNkMsaUZBQWtCLEtBQUUsR0FBRyxDQUNsRSwrRUFBZ0IsVUFBTSx1RkFBd0IsQ0FDNUMsQ0FDQyxDQUNJLENBQ1QsbUVBQ0UsSUFBSSxDQUFFLFVBQVUsYUFDRSxDQUNwQix1RUFDRSxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSxrQ0FBa0MsbUNBQ0gsQ0FBSyxDQUNoRCxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSx5QkFBeUIsU0FDeEIsMkVBQVksVUFBVSxDQUFDLEdBQUcsaUJBQThCLFVBQWMsQ0FBSyxDQUN4RixtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSx1QkFBdUIsU0FDdEIsMkVBQVksVUFBVSxDQUFDLEdBQUcsaUJBQThCLFNBQWEsQ0FBSyxDQUNwRixDQUNPLENBQ2hCLENBQ0EsQ0FDQU0sVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FwaS9pbmplY3RvcnMvaW5qZWN0TWFjaGluZVN0b3JlLm1keD82NWEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdpbmplY3RNYWNoaW5lU3RvcmUnLFxuXHR0aXRsZTogJ2luamVjdE1hY2hpbmVTdG9yZSdcbn07XG5leHBvcnQgY29uc3QgY29udGVudFRpdGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICBcInVudmVyc2lvbmVkSWRcIjogXCJhcGkvaW5qZWN0b3JzL2luamVjdE1hY2hpbmVTdG9yZVwiLFxuICBcImlkXCI6IFwiYXBpL2luamVjdG9ycy9pbmplY3RNYWNoaW5lU3RvcmVcIixcbiAgXCJ0aXRsZVwiOiBcImluamVjdE1hY2hpbmVTdG9yZVwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQW4gaW5qZWN0b3IgdGhhdCBjcmVhdGVzIGFuZCBjb25maWd1cmVzIGEgTWFjaGluZVN0b3JlLlwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RNYWNoaW5lU3RvcmUubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFwaS9pbmplY3RvcnNcIixcbiAgXCJzbHVnXCI6IFwiL2FwaS9pbmplY3RvcnMvaW5qZWN0TWFjaGluZVN0b3JlXCIsXG4gIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RNYWNoaW5lU3RvcmVcIixcbiAgXCJkcmFmdFwiOiBmYWxzZSxcbiAgXCJlZGl0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09tbmlzdGFjL3plZHV4L3RyZWUvbWFzdGVyL2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RNYWNoaW5lU3RvcmUubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwiaW5qZWN0TWFjaGluZVN0b3JlXCIsXG4gICAgXCJ0aXRsZVwiOiBcImluamVjdE1hY2hpbmVTdG9yZVwiXG4gIH0sXG4gIFwic2lkZWJhclwiOiBcInJlYWN0XCIsXG4gIFwicHJldmlvdXNcIjoge1xuICAgIFwidGl0bGVcIjogXCJpbmplY3RJbnZhbGlkYXRlXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdEludmFsaWRhdGVcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJpbmplY3RNZW1vXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdE1lbW9cIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuaW1wb3J0IHsgTGVnZW5kLCBJdGVtLCBMaW5rLCBUYWJzLCBUcywgdGFiMSwgdGFiMiB9IGZyb20gJ0BzaXRlL3NyYy9hbGwnXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdFeGFtcGxlJyxcbiAgaWQ6ICdleGFtcGxlJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdTaWduYXR1cmUnLFxuICBpZDogJ3NpZ25hdHVyZScsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2VlIEFsc28nLFxuICBpZDogJ3NlZS1hbHNvJyxcbiAgbGV2ZWw6IDJcbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgaW5qZWN0TWFjaGluZVN0b3JlIH0gZnJvbSAnQHplZHV4L3JlYWN0J1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBbiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiLi4vZ2xvc3NhcnkjaW5qZWN0b3JcIlxuICAgICAgfX0+e2BpbmplY3RvcmB9PC9hPntgIHRoYXQgY3JlYXRlcyBhbmQgY29uZmlndXJlcyBhIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL01hY2hpbmVTdG9yZVwiXG4gICAgICB9fT57YE1hY2hpbmVTdG9yZWB9PC9hPntgLmB9PC9wPlxuICAgIDxwPntgQWNjZXB0cyBhIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHN0YXRlc0ZhY3RvcnlgfTwvaW5saW5lQ29kZT57YCBmdW5jdGlvbiwgb3B0aW9uYWwgaW5pdGlhbCBjb250ZXh0IHN0YXRlLCBhbmQgYW4gb3B0aW9uYWwgY29uZmlnIG9iamVjdC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgY29uc3QgY3ljbGluZ1N0b3JlID0gaW5qZWN0TWFjaGluZVN0b3JlKHN0YXRlRmFjdG9yeSwgaW5pdGlhbENvbnRleHQsIHtcbiAgZ3VhcmQsXG4gIG9uVHJhbnNpdGlvbixcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFplZHV4IHN0YXRlIG1hY2hpbmVzIGFyZSBvbmx5IGRlc2lnbmVkIGZvciBzaW1wbGUgdXNlIGNhc2VzIHdoZXJlIHRoZSBoaWdoLWxldmVsIEFQSSBhbmQgYXV0b21hdGljIFR5cGVTY3JpcHQgdHlwZXMgY2FuIGdpdmUgcXVpY2sgZ2FpbnMuIElmIHlvdSBuZWVkIG1vcmUgcG93ZXIsIHVzZSBYU3RhdGUuYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZXhhbXBsZVwiXG4gICAgfX0+e2BFeGFtcGxlYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCIsXG4gICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmUgZWNvc3lzdGVtSWQ9aW5qZWN0TWFjaGluZVN0b3JlL2V4YW1wbGUgcmVzdWx0VmFyPVRoZW1lXCIsXG4gICAgICAgIFwibGl2ZVwiOiB0cnVlLFxuICAgICAgICBcImVjb3N5c3RlbUlkXCI6IFwiaW5qZWN0TWFjaGluZVN0b3JlL2V4YW1wbGVcIixcbiAgICAgICAgXCJyZXN1bHRWYXJcIjogXCJUaGVtZVwiXG4gICAgICB9fT57YGNvbnN0IHRoZW1lQXRvbSA9IGF0b20oJ3RoZW1lJywgKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGluamVjdE1hY2hpbmVTdG9yZShcbiAgICBzdGF0ZSA9PiBbXG4gICAgICBzdGF0ZSgnbGlnaHQnKS5vbigndG9nZ2xlJywgJ2RhcmsnKSxcbiAgICAgIHN0YXRlKCdkYXJrJykub24oJ3RvZ2dsZScsICdsaWdodCcpLFxuICAgIF0sXG4gICAgeyBjb3VudDogMCB9LFxuICAgIHtcbiAgICAgIG9uVHJhbnNpdGlvbjogbWFjaGluZSA9PlxuICAgICAgICBtYWNoaW5lLnNldENvbnRleHQoY29udGV4dCA9PiAoeyBjb3VudDogY29udGV4dC5jb3VudCArIDEgfSkpLFxuICAgIH1cbiAgKVxuXG4gIHJldHVybiBhcGkoc3RvcmUpLnNldEV4cG9ydHMoeyBzZW5kOiBzdG9yZS5zZW5kIH0pXG59KVxuXG5mdW5jdGlvbiBUaGVtZSgpIHtcbiAgY29uc3QgW3sgY29udGV4dCwgdmFsdWUgfSwgeyBzZW5kIH1dID0gdXNlQXRvbVN0YXRlKHRoZW1lQXRvbSlcblxuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ZhbHVlID09PSAnZGFyaycgPyB7IGJhY2tncm91bmQ6ICcjNDQ0JywgY29sb3I6ICcjZmZmJyB9IDoge319PlxuICAgICAgPGxhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBjaGVja2VkPXt2YWx1ZSA9PT0gJ2RhcmsnfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBzZW5kKCd0b2dnbGUnKX1cbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj57dmFsdWV9IG1vZGU8L3NwYW4+XG4gICAgICA8L2xhYmVsPlxuICAgICAgPGRpdj5Ub2dnbGUgQ291bnQ6IHtjb250ZXh0LmNvdW50fTwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzaWduYXR1cmVcIlxuICAgIH19PntgU2lnbmF0dXJlYH08L2gyPlxuICAgIDxUYWJzIG1keFR5cGU9XCJUYWJzXCI+XG4gIHt0YWIxKGBpbmplY3RNYWNoaW5lU3RvcmUgPSAoc3RhdGVzRmFjdG9yeSwgaW5pdGlhbENvbnRleHQ/LCBjb25maWc/KSA9PiBtYWNoaW5lU3RvcmVgKX1cbiAge3RhYjIoYGRlY2xhcmUgY29uc3QgaW5qZWN0TWFjaGluZVN0b3JlOiA8XG4gIFN0YXRlcyBleHRlbmRzIE1hY2hpbmVTdGF0ZVtdLFxuICBDb250ZXh0IGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZCA9IHVuZGVmaW5lZFxuPihcbiAgc3RhdGVzRmFjdG9yeTogKFxuICAgIHN0YXRlOiA8TmFtZSBleHRlbmRzIHN0cmluZz4oc3RhdGVOYW1lOiBOYW1lKSA9PiBNYWNoaW5lU3RhdGU8Q29udGV4dCwgTmFtZT5cbiAgKSA9PiBbLi4uU3RhdGVzXSxcXG5cbiAgaW5pdGlhbENvbnRleHQ/OiBDb250ZXh0LFxcblxuICBjb25maWc/OiBNYWNoaW5lU3RvcmVDb25maWc8XG4gICAgTWFwU3RhdGVzVG9TdGF0ZU5hbWVzPFN0YXRlcywgQ29udGV4dD4sXG4gICAgTWFwU3RhdGVzVG9FdmVudHM8U3RhdGVzLCBDb250ZXh0PixcbiAgICBDb250ZXh0XG4gID5cbik6IE1hY2hpbmVTdG9yZTxcbiAgTWFwU3RhdGVzVG9TdGF0ZU5hbWVzPFN0YXRlcywgQ29udGV4dD4sXG4gIE1hcFN0YXRlc1RvRXZlbnRzPFN0YXRlcywgQ29udGV4dD4sXG4gIENvbnRleHRcbj5gKX1cbiAgICA8L1RhYnM+XG4gICAgPExlZ2VuZCBtZHhUeXBlPVwiTGVnZW5kXCI+XG4gIDxJdGVtIG5hbWU9XCJzdGF0ZXNGYWN0b3J5XCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIFJlcXVpcmVkLiBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBhcnJheSBvZiBcInN0YXRlc1wiLiBTdGF0ZXMgYXJlIGNyZWF0ZWRcbiAgICAgIHVzaW5nIHRoZSByZWNlaXZlZCA8Y29kZT5jcmVhdGVTdGF0ZTwvY29kZT4gZmFjdG9yeSBmdW5jdGlvbi4gU2lnbmF0dXJlOlxuICAgIDwvcD5cbiAgICA8VGFicyBtZHhUeXBlPVwiVGFic1wiPlxuICAgICAge3RhYjEoYHN0YXRlc0ZhY3RvcnkgPSAoY3JlYXRlU3RhdGUpID0+IHN0YXRlTGlzdGApfVxuICAgICAge3RhYjIoYHN0YXRlc0ZhY3Rvcnk6IChcbiAgY3JlYXRlU3RhdGU6IDxOYW1lIGV4dGVuZHMgc3RyaW5nPihzdGF0ZU5hbWU6IE5hbWUpID0+IE1hY2hpbmVTdGF0ZTxDb250ZXh0LCBOYW1lPlxuKSA9PiBbLi4uU3RhdGVzXWApfVxuICAgIDwvVGFicz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgICAgIDxJdGVtIG5hbWU9XCJjcmVhdGVTdGF0ZVwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIEEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIGEgc2luZ2xlIHN0cmluZyAtIHRoZSBuYW1lIG9mIHRoZSBzdGF0ZS5cbiAgICAgICAgICBSZXR1cm5zIGEgPExpbmsgdG89XCIuLi90eXBlcy9NYWNoaW5lU3RhdGVcIiBtZHhUeXBlPVwiTGlua1wiPk1hY2hpbmVTdGF0ZTwvTGluaz4uIFRoaXNcbiAgICAgICAgICBmdW5jdGlvbiBpcyBvZnRlbiBhYmJyZXZpYXRlZCBhcyBzaW1wbHkgPGNvZGU+c3RhdGU8L2NvZGU+IG9yIGV2ZW57JyAnfVxuICAgICAgICAgIDxjb2RlPnM8L2NvZGU+OlxuICAgICAgICA8L3A+XG4gICAgICAgIDxUcyBtZHhUeXBlPVwiVHNcIj57YGluamVjdE1hY2hpbmVTdG9yZShzdGF0ZSA9PiBbc3RhdGUoJ2EnKSwgc3RhdGUoJ2InKV0pXG5pbmplY3RNYWNoaW5lU3RvcmUocyA9PiBbcygnYScpLCBzKCdiJyldKWB9PC9Ucz5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtIG5hbWU9XCJSZXR1cm5zXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgQW4gYXJyYXkgb2YgPExpbmsgdG89XCIuLi90eXBlcy9NYWNoaW5lU3RhdGVcIiBtZHhUeXBlPVwiTGlua1wiPk1hY2hpbmVTdGF0ZXM8L0xpbms+eycgJ31cbiAgICAgICAgICBjcmVhdGVkIHVzaW5nIHRoZSA8Y29kZT5jcmVhdGVTdGF0ZTwvY29kZT4gZmFjdG9yeSBmdW5jdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGUgZmlyc3Qgc3RhdGUgaW4gdGhpcyBsaXN0IHdpbGwgYmVjb21lIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZVxuICAgICAgICAgIG1hY2hpbmUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPFRzIG1keFR5cGU9XCJUc1wiPntgaW5qZWN0TWFjaGluZVN0b3JlKHN0YXRlID0+IFtzdGF0ZSgnaW5pdGlhbCcpLCBzdGF0ZSgnb3RoZXInKV0pYH08L1RzPlxuICAgICAgPC9JdGVtPlxuICAgIDwvTGVnZW5kPlxuICA8L0l0ZW0+XG4gIDxJdGVtIG5hbWU9XCJpbml0aWFsQ29udGV4dFwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBPcHRpb25hbC4gQW4gb2JqZWN0IG9yIDxjb2RlPnVuZGVmaW5lZDwvY29kZT4gaWYgbm8gY29udGV4dC5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBJZiBzZXQsIHRoaXMgd2lsbCBiZWNvbWUgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIE1hY2hpbmVTdG9yZSdzeycgJ31cbiAgICAgIDxjb2RlPi5jb250ZXh0PC9jb2RlPiBzdGF0ZSBwcm9wZXJ0eS5cbiAgICA8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgY29uc3Qgc3RvcmUgPSBpbmplY3RNYWNoaW5lU3RvcmUoc3RhdGVGYWN0b3J5LCB7IGZvbzogJ2JhcicgfSlcbnN0b3JlLmdldENvbnRleHQoKSAvLyB7IGZvbzogJ2JhcicgfWB9PC9Ucz5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwiY29uZmlnXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5PcHRpb25hbC4gQW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBvcHRpb25hbCBwcm9wZXJ0aWVzOjwvcD5cbiAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2B7IGd1YXJkLCBvblRyYW5zaXRpb24gfWB9PC9Ucz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgICAgIDxJdGVtIG5hbWU9XCJndWFyZFwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9wdGlvbmFsLiBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIE1hY2hpbmVTdG9yZSdzIGN1cnJlbnR7JyAnfVxuICAgICAgICAgIDxjb2RlPi5jb250ZXh0PC9jb2RlPiB2YWx1ZSBhbmQgc2hvdWxkIHJldHVybiBhIGJvb2xlYW4uXG4gICAgICAgIDwvcD5cbiAgICAgICAgPFRhYnMgbWR4VHlwZT1cIlRhYnNcIj5cbiAgICAgICAgICB7dGFiMShgZ3VhcmQgPSAoY29udGV4dCkgPT4gYm9vbGVhbmApfVxuICAgICAgICAgIHt0YWIyKGBndWFyZD86IChcbiAgY3VycmVudFN0YXRlOiBNYWNoaW5lU3RhdGVUeXBlPFN0YXRlTmFtZXMsIENvbnRleHQ+LFxuICBuZXh0U3RhdGU6IFN0YXRlTmFtZXNcbikgPT4gYm9vbGVhbmApfVxuICAgICAgICA8L1RhYnM+XG4gICAgICAgIDxwPlxuICAgICAgICAgIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHN0YXRlIHJlY2VpdmVzIGFuIGV2ZW50IHRoYXRcbiAgICAgICAgICB3aWxsIHRyYW5zaXRpb24gdGhlIG1hY2hpbmUgdG8gYSBuZXcgc3RhdGUuXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+UmV0dXJuIHRydWUgdG8gYWxsb3cgdGhlIHRyYW5zaXRpb248L3A+XG4gICAgICAgIDxwPlJldHVybiBmYWxzZSAob3IgYW55IGZhbHN5IHZhbHVlKSB0byBwcmV2ZW50IHRoZSB0cmFuc2l0aW9uPC9wPlxuICAgICAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2Bjb25zdCBzdG9yZSA9IGluamVjdE1hY2hpbmVTdG9yZShzdGF0ZXNGYWN0b3J5LCBpbml0aWFsQ29udGV4dCwge1xuICBndWFyZDogKGN1cnJlbnRTdGF0ZSwgbmV4dFZhbHVlKSA9PiAhY3VycmVudFN0YXRlLmNvbnRleHQuaXNQYXVzZWRcbn0pYH08L1RzPlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gbmFtZT1cIm9uVHJhbnNpdGlvblwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIDxwPlxuICAgICAgICAgIE9wdGlvbmFsLiBBIGZ1bmN0aW9uIHRoYXQgcmVjZWl2ZXMgdGhlIE1hY2hpbmVTdG9yZSBhbmQgdGhleycgJ31cbiAgICAgICAgICA8TGluayB0bz1cIi4uL3R5cGVzL1N0b3JlRWZmZWN0XCIgbWR4VHlwZT1cIkxpbmtcIj5TdG9yZUVmZmVjdDwvTGluaz4gb2YgdGhlIGFjdGlvblxuICAgICAgICAgIHJlc3BvbnNpYmxlIGZvciB0aGUgdHJhbnNpdGlvbi5cbiAgICAgICAgPC9wPlxuICAgICAgICA8VGFicyBtZHhUeXBlPVwiVGFic1wiPlxuICAgICAgICAgIHt0YWIxKGBvblRyYW5zaXRpb24gPSAoY3VycmVudFN0YXRlLCBuZXh0U3RhdGUpID0+IHZvaWRgKX1cbiAgICAgICAgICB7dGFiMihgb25UcmFuc2l0aW9uPzogTWFjaGluZUhvb2s8U3RhdGVOYW1lcywgRXZlbnROYW1lcywgQ29udGV4dD5gKX1cbiAgICAgICAgPC9UYWJzPlxuICAgICAgICA8cD5cbiAgICAgICAgICBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCBldmVyeSB0aW1lIHRoZSBNYWNoaW5lU3RvcmUgdHJhbnNpdGlvbnMgdG8gYVxuICAgICAgICAgIG5ldyBzdGF0ZSAoYWZ0ZXIgdGhlIHRyYW5zaXRpb24gaGFzIGZpbmlzaGVkKS5cbiAgICAgICAgPC9wPlxuICAgICAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2Bjb25zdCBzdG9yZSA9IGluamVjdE1hY2hpbmVTdG9yZShzdGF0ZXNGYWN0b3J5LCBpbml0aWFsQ29udGV4dCwge1xuICBvblRyYW5zaXRpb246IChtYWNoaW5lU3RvcmUsIHN0b3JlRWZmZWN0KSA9PiBjb25zb2xlLmxvZyhzdG9yZUVmZmVjdClcbn0pYH08L1RzPlxuICAgICAgPC9JdGVtPlxuICAgIDwvTGVnZW5kPlxuICA8L0l0ZW0+XG4gIDxJdGVtIG5hbWU9XCJSZXR1cm5zXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIEEgPExpbmsgdG89XCIuLi9jbGFzc2VzL01hY2hpbmVTdG9yZVwiIG1keFR5cGU9XCJMaW5rXCI+TWFjaGluZVN0b3JlPC9MaW5rPi5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBUaGlzIHN0b3JlJ3MgaW5pdGlhbCA8Y29kZT4udmFsdWU8L2NvZGU+IHdpbGwgYmUgc2V0IHRvIHRoZSBmaXJzdCBzdGF0ZVxuICAgICAgcmV0dXJuZWQgZnJvbSB0aGUgPGNvZGU+c3RhdGVzRmFjdG9yeTwvY29kZT4uXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgVGhpcyBzdG9yZSdzIGluaXRpYWwgPGNvZGU+LmNvbnRleHQ8L2NvZGU+IHdpbGwgYmUgc2V0IHRvIHRoZSBwYXNzZWR7JyAnfVxuICAgICAgPGNvZGU+aW5pdGlhbENvbnRleHQ8L2NvZGU+IChpZiBhbnkpLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIDxjb2RlPmluamVjdE1hY2hpbmVTdG9yZSgpPC9jb2RlPiB3aWxsIGFsc28gcmVnaXN0ZXIgYWxsIGd1YXJkcyBhbmRcbiAgICAgIGxpc3RlbmVycyBvbiBhbGwgaW5kaXZpZHVhbCBzdGF0ZXMgYXMgd2VsbCBhcyB0aGUgdW5pdmVyc2FsIGd1YXJkIGFuZHsnICd9XG4gICAgICA8Y29kZT5vblRyYW5zaXRpb248L2NvZGU+IGxpc3RlbmVyLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIElmIHJldHVybmluZyB0aGlzIHN0b3JlIGZyb20gYSBzdGF0ZSBmYWN0b3J5LCB5b3UgbWF5IGFsc28gd2FudCB0byBleHBvcnRcbiAgICAgIHNvbWUgb2YgdGhlIE1hY2hpbmVTdG9yZSdzIHByb3BlcnRpZXMgbGlrZSA8Y29kZT4uc2VuZDwvY29kZT4seycgJ31cbiAgICAgIDxjb2RlPi5pczwvY29kZT4sIGFuZCA8Y29kZT4uc2V0Q29udGV4dDwvY29kZT5cbiAgICA8L3A+XG4gIDwvSXRlbT5cbiAgICA8L0xlZ2VuZD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzZWUtYWxzb1wiXG4gICAgfX0+e2BTZWUgQWxzb2B9PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi8uLi93YWxrdGhyb3VnaC9zdGF0ZS1tYWNoaW5lc1wiXG4gICAgICAgIH19PntgVGhlIFN0YXRlIE1hY2hpbmVzIHdhbGt0aHJvdWdoYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uL2NsYXNzZXMvTWFjaGluZVN0b3JlXCJcbiAgICAgICAgfX0+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgTWFjaGluZVN0b3JlYH08L2lubGluZUNvZGU+e2AgY2xhc3NgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vdHlwZXMvTWFjaGluZVN0YXRlXCJcbiAgICAgICAgfX0+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgTWFjaGluZVN0YXRlYH08L2lubGluZUNvZGU+e2AgdHlwZWB9PC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwiTGVnZW5kIiwiSXRlbSIsIkxpbmsiLCJUYWJzIiwiVHMiLCJ0YWIxIiwidGFiMiIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///307\n')}}]);
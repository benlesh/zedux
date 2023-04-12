"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[4579],{7395:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'MachineStore\',title:\'MachineStore\'};var contentTitle=undefined;var metadata={"unversionedId":"api/classes/MachineStore","id":"api/classes/MachineStore","title":"MachineStore","description":"Extends Store. injectMachineStore() returns an instance of this class.","source":"@site/docs/api/classes/MachineStore.mdx","sourceDirName":"api/classes","slug":"/api/classes/MachineStore","permalink":"/zedux/docs/api/classes/MachineStore","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/classes/MachineStore.mdx","tags":[],"version":"current","frontMatter":{"id":"MachineStore","title":"MachineStore"},"sidebar":"react","previous":{"title":"IonTemplate","permalink":"/zedux/docs/api/classes/IonTemplate"},"next":{"title":"SelectorCache","permalink":"/zedux/docs/api/classes/SelectorCache"}};var assets={};var toc=[{value:\'State Shape\',id:\'state-shape\',level:2},{value:\'Creation\',id:\'creation\',level:2},{value:\'Methods\',id:\'methods\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Extends ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"Store"},"Store"),". ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../injectors/injectMachineStore"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectMachineStore()"))," returns an instance of this class."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This class controls the store\'s state shape and exposes simple methods for working with the state machine. It is recommended to only use these methods to manipulate the state of the store, rather than using ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"Store#setstate"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"machineStore.setState()"))," or ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"Store#setstatedeep"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"machineStore.setStateDeep()")),". You can dispatch actions to the store via ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"Store#dispatch"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"machineStore.dispatch()")),", but the only use for that is to use the store as a message bus."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"These state machines have relative type safety. Type generics must be passed manually for full TS support, so it\'s recommended to use a higher-level factory (like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectMachineStore()"),") that does that for you to instantiate this class."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"MachineStore state machines are very simple. We\'re probably not going to support any advanced state machine features. Use XState or a similar lib if more power is needed.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"state-shape"},"State Shape"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"All machine stores store an object with the following properties:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"{ context, value }"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"strong"},"context"))," can be either ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"undefined")," or an object containing anything. This object is used to hold extra state related to the state machine."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"strong"},"value"))," is a string. This is the actual state the machine is currently in."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"creation"},"Creation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Create using ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../injectors/injectMachineStore"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectMachineStore()")),". It is so not recommended to instantiate this class yourself that we\'re not even documenting it here \\uD83D\\uDE1B"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"methods"},"Methods"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"getContext",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Returns the current state of the machine store\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context"),\' \',"property."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"// these 2 lines are equivalent:\\nmachineStore.getContext()\\nmachineStore.getState().context")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"getValue",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Returns the string state that the machine is currently in. This is the value of the machine store\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".value")," property."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"// these 2 lines are equivalent:\\nmachineStore.getValue()\\nmachineStore.getState().value")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"is",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Checks if the machine store\'s current ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".value")," matches a given string"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"is = (stateName) => boolean"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accepts a single string and returns true if the machine store is currently in that state."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"// these 2 lines are equivalent:\\nmachineStore.getValue() === \'some-state\'\\nmachineStore.is(\'some-state\')")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"send",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This is how you transition the machine to a new state."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"send = (eventName, meta?) => newState"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"eventName",mdxType:"Item"},"Required. A string. This must be one of the recognized event names of the store."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"meta",mdxType:"Item"},"Optional. Can be anything, including the special",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../utils/internalTypes#ignore",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"ignore")),\' \',"meta type."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},"The new state of the store (an object with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"context")," and",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"value")," properties), or the existing state if there was no valid transition for the passed event."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"setContext",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Replaces the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context")," of the store with the passed object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"setContext = (contextOrFactory, meta?) => newState"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"contextOrFactory",mdxType:"Item"},"Either the new context or a function that accepts the current context and returns a new context object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"meta",mdxType:"Item"},"Optional. Can be anything, including the special",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../utils/internalTypes#ignore",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"ignore")),\' \',"meta type."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},"The new state of the store (an object with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"context")," and",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"value")," properties).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Examples:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"// these 2 lines are equivalent:\\nmachineStore.setState(state => ({ ...state, context: { key: \'val\' } }))\\nmachineStore.setContext({ key: \'val\' })\\n// and these 2 lines are equivalent:\\nmachineStore.setState(state => ({ ...state, context: { ...state.context, key: \'val\' } }))\\nmachineStore.setContext(context => ({ ...context, key: \'val\' }))")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"setContextDeep",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Deeply merges an object into the existing ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".context")," of the store."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This cannot be used to delete keys, only to add/update. Use",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"#setcontext",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,".setContext()")),\' \',"to delete."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"setContextDeep = (contextOrFactory, meta?) => newState"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"contextOrFactory",mdxType:"Item"},"Either the new deep-partial context or a function that accepts the current context and returns a deep-partial context object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"meta",mdxType:"Item"},"Optional. Can be anything, including the special",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../utils/internalTypes#ignore",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"ignore")),\' \',"meta type."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},"The new state of the store (an object with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"context")," and",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"value")," properties).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Examples:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"// these 2 lines are equivalent:\\nmachineStore.setStateDeep({ context: { key: \'val\' } })\\nmachineStore.setContextDeep({ key: \'val\' })\\n// and these 2 lines are equivalent:\\nmachineStore.setStateDeep(state => ({ context: { key: state.key + 1 } }))\\nmachineStore.setContext(context => ({ key: state.key + 1 }))"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../injectors/injectMachineStore"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectMachineStore()"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/state-machines"},"The State Machines walkthrough"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSx5VEFLK0MsQ0FDMUQsQ0FDSSxDQUNULG1FQUNFLElBQUksQ0FBRSxVQUFVLGFBQ0UsQ0FDcEIsdUVBQ0UsbUVBQUksVUFBVSxDQUFDLElBQUksRUFBQyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUUsaUNBQWlDLEVBQ3hDLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLHlCQUFzQyxDQUFJLENBQUssQ0FDOUUsbUVBQUksVUFBVSxDQUFDLElBQUksRUFBQyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUUsa0NBQWtDLG1DQUNILENBQUssQ0FDN0MsQ0FDTyxDQUNoQixDQUNBLENBQ0FELFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hcGkvY2xhc3Nlcy9NYWNoaW5lU3RvcmUubWR4P2E0OTYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ01hY2hpbmVTdG9yZScsXG5cdHRpdGxlOiAnTWFjaGluZVN0b3JlJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFwaS9jbGFzc2VzL01hY2hpbmVTdG9yZVwiLFxuICBcImlkXCI6IFwiYXBpL2NsYXNzZXMvTWFjaGluZVN0b3JlXCIsXG4gIFwidGl0bGVcIjogXCJNYWNoaW5lU3RvcmVcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkV4dGVuZHMgU3RvcmUuIGluamVjdE1hY2hpbmVTdG9yZSgpIHJldHVybnMgYW4gaW5zdGFuY2Ugb2YgdGhpcyBjbGFzcy5cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS9jbGFzc2VzL01hY2hpbmVTdG9yZS5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYXBpL2NsYXNzZXNcIixcbiAgXCJzbHVnXCI6IFwiL2FwaS9jbGFzc2VzL01hY2hpbmVTdG9yZVwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9jbGFzc2VzL01hY2hpbmVTdG9yZVwiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvY2xhc3Nlcy9NYWNoaW5lU3RvcmUubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwiTWFjaGluZVN0b3JlXCIsXG4gICAgXCJ0aXRsZVwiOiBcIk1hY2hpbmVTdG9yZVwiXG4gIH0sXG4gIFwic2lkZWJhclwiOiBcInJlYWN0XCIsXG4gIFwicHJldmlvdXNcIjoge1xuICAgIFwidGl0bGVcIjogXCJJb25UZW1wbGF0ZVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2NsYXNzZXMvSW9uVGVtcGxhdGVcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJTZWxlY3RvckNhY2hlXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvY2xhc3Nlcy9TZWxlY3RvckNhY2hlXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cbmltcG9ydCB7IExlZ2VuZCwgSXRlbSwgTGluaywgVGFicywgVHMsIHRhYjEsIHRhYjIgfSBmcm9tICdAc2l0ZS9zcmMvYWxsJ1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnU3RhdGUgU2hhcGUnLFxuICBpZDogJ3N0YXRlLXNoYXBlJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdDcmVhdGlvbicsXG4gIGlkOiAnY3JlYXRpb24nLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ01ldGhvZHMnLFxuICBpZDogJ21ldGhvZHMnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHA+e2BFeHRlbmRzIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJTdG9yZVwiXG4gICAgICB9fT57YFN0b3JlYH08L2E+e2AuIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9pbmplY3RvcnMvaW5qZWN0TWFjaGluZVN0b3JlXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RNYWNoaW5lU3RvcmUoKWB9PC9pbmxpbmVDb2RlPjwvYT57YCByZXR1cm5zIGFuIGluc3RhbmNlIG9mIHRoaXMgY2xhc3MuYH08L3A+XG4gICAgPHA+e2BUaGlzIGNsYXNzIGNvbnRyb2xzIHRoZSBzdG9yZSdzIHN0YXRlIHNoYXBlIGFuZCBleHBvc2VzIHNpbXBsZSBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggdGhlIHN0YXRlIG1hY2hpbmUuIEl0IGlzIHJlY29tbWVuZGVkIHRvIG9ubHkgdXNlIHRoZXNlIG1ldGhvZHMgdG8gbWFuaXB1bGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHN0b3JlLCByYXRoZXIgdGhhbiB1c2luZyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiU3RvcmUjc2V0c3RhdGVcIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YG1hY2hpbmVTdG9yZS5zZXRTdGF0ZSgpYH08L2lubGluZUNvZGU+PC9hPntgIG9yIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJTdG9yZSNzZXRzdGF0ZWRlZXBcIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YG1hY2hpbmVTdG9yZS5zZXRTdGF0ZURlZXAoKWB9PC9pbmxpbmVDb2RlPjwvYT57YC4gWW91IGNhbiBkaXNwYXRjaCBhY3Rpb25zIHRvIHRoZSBzdG9yZSB2aWEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIlN0b3JlI2Rpc3BhdGNoXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BtYWNoaW5lU3RvcmUuZGlzcGF0Y2goKWB9PC9pbmxpbmVDb2RlPjwvYT57YCwgYnV0IHRoZSBvbmx5IHVzZSBmb3IgdGhhdCBpcyB0byB1c2UgdGhlIHN0b3JlIGFzIGEgbWVzc2FnZSBidXMuYH08L3A+XG4gICAgPHA+e2BUaGVzZSBzdGF0ZSBtYWNoaW5lcyBoYXZlIHJlbGF0aXZlIHR5cGUgc2FmZXR5LiBUeXBlIGdlbmVyaWNzIG11c3QgYmUgcGFzc2VkIG1hbnVhbGx5IGZvciBmdWxsIFRTIHN1cHBvcnQsIHNvIGl0J3MgcmVjb21tZW5kZWQgdG8gdXNlIGEgaGlnaGVyLWxldmVsIGZhY3RvcnkgKGxpa2UgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0TWFjaGluZVN0b3JlKClgfTwvaW5saW5lQ29kZT57YCkgdGhhdCBkb2VzIHRoYXQgZm9yIHlvdSB0byBpbnN0YW50aWF0ZSB0aGlzIGNsYXNzLmB9PC9wPlxuICAgIDxhZG1vbml0aW9uIHsuLi57XG4gICAgICBcInR5cGVcIjogXCJ0aXBcIlxuICAgIH19PjxwIHBhcmVudE5hbWU9XCJhZG1vbml0aW9uXCI+e2BNYWNoaW5lU3RvcmUgc3RhdGUgbWFjaGluZXMgYXJlIHZlcnkgc2ltcGxlLiBXZSdyZSBwcm9iYWJseSBub3QgZ29pbmcgdG8gc3VwcG9ydCBhbnkgYWR2YW5jZWQgc3RhdGUgbWFjaGluZSBmZWF0dXJlcy4gVXNlIFhTdGF0ZSBvciBhIHNpbWlsYXIgbGliIGlmIG1vcmUgcG93ZXIgaXMgbmVlZGVkLmB9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzdGF0ZS1zaGFwZVwiXG4gICAgfX0+e2BTdGF0ZSBTaGFwZWB9PC9oMj5cbiAgICA8cD57YEFsbCBtYWNoaW5lIHN0b3JlcyBzdG9yZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6YH08L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgeyBjb250ZXh0LCB2YWx1ZSB9YH08L1RzPlxuICAgIDxwPjxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwic3Ryb25nXCI+e2Bjb250ZXh0YH08L2lubGluZUNvZGU+PC9zdHJvbmc+e2AgY2FuIGJlIGVpdGhlciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1bmRlZmluZWRgfTwvaW5saW5lQ29kZT57YCBvciBhbiBvYmplY3QgY29udGFpbmluZyBhbnl0aGluZy4gVGhpcyBvYmplY3QgaXMgdXNlZCB0byBob2xkIGV4dHJhIHN0YXRlIHJlbGF0ZWQgdG8gdGhlIHN0YXRlIG1hY2hpbmUuYH08L3A+XG4gICAgPHA+PHN0cm9uZyBwYXJlbnROYW1lPVwicFwiPjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJzdHJvbmdcIj57YHZhbHVlYH08L2lubGluZUNvZGU+PC9zdHJvbmc+e2AgaXMgYSBzdHJpbmcuIFRoaXMgaXMgdGhlIGFjdHVhbCBzdGF0ZSB0aGUgbWFjaGluZSBpcyBjdXJyZW50bHkgaW4uYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiY3JlYXRpb25cIlxuICAgIH19PntgQ3JlYXRpb25gfTwvaDI+XG4gICAgPHA+e2BDcmVhdGUgdXNpbmcgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2luamVjdG9ycy9pbmplY3RNYWNoaW5lU3RvcmVcIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGluamVjdE1hY2hpbmVTdG9yZSgpYH08L2lubGluZUNvZGU+PC9hPntgLiBJdCBpcyBzbyBub3QgcmVjb21tZW5kZWQgdG8gaW5zdGFudGlhdGUgdGhpcyBjbGFzcyB5b3Vyc2VsZiB0aGF0IHdlJ3JlIG5vdCBldmVuIGRvY3VtZW50aW5nIGl0IGhlcmUg8J+Ym2B9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcIm1ldGhvZHNcIlxuICAgIH19PntgTWV0aG9kc2B9PC9oMj5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgPEl0ZW0gbmFtZT1cImdldENvbnRleHRcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgUmV0dXJucyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgbWFjaGluZSBzdG9yZSdzIDxjb2RlPi5jb250ZXh0PC9jb2RlPnsnICd9XG4gICAgICBwcm9wZXJ0eS5cbiAgICA8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgLy8gdGhlc2UgMiBsaW5lcyBhcmUgZXF1aXZhbGVudDpcbm1hY2hpbmVTdG9yZS5nZXRDb250ZXh0KClcbm1hY2hpbmVTdG9yZS5nZXRTdGF0ZSgpLmNvbnRleHRgfTwvVHM+XG4gIDwvSXRlbT5cbiAgPEl0ZW0gbmFtZT1cImdldFZhbHVlXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIFJldHVybnMgdGhlIHN0cmluZyBzdGF0ZSB0aGF0IHRoZSBtYWNoaW5lIGlzIGN1cnJlbnRseSBpbi4gVGhpcyBpcyB0aGVcbiAgICAgIHZhbHVlIG9mIHRoZSBtYWNoaW5lIHN0b3JlJ3MgPGNvZGU+LnZhbHVlPC9jb2RlPiBwcm9wZXJ0eS5cbiAgICA8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgLy8gdGhlc2UgMiBsaW5lcyBhcmUgZXF1aXZhbGVudDpcbm1hY2hpbmVTdG9yZS5nZXRWYWx1ZSgpXG5tYWNoaW5lU3RvcmUuZ2V0U3RhdGUoKS52YWx1ZWB9PC9Ucz5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwiaXNcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgQ2hlY2tzIGlmIHRoZSBtYWNoaW5lIHN0b3JlJ3MgY3VycmVudCA8Y29kZT4udmFsdWU8L2NvZGU+IG1hdGNoZXMgYSBnaXZlblxuICAgICAgc3RyaW5nXG4gICAgPC9wPlxuICAgIDxwPlNpZ25hdHVyZTo8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgaXMgPSAoc3RhdGVOYW1lKSA9PiBib29sZWFuYH08L1RzPlxuICAgIDxwPlxuICAgICAgQWNjZXB0cyBhIHNpbmdsZSBzdHJpbmcgYW5kIHJldHVybnMgdHJ1ZSBpZiB0aGUgbWFjaGluZSBzdG9yZSBpcyBjdXJyZW50bHlcbiAgICAgIGluIHRoYXQgc3RhdGUuXG4gICAgPC9wPlxuICAgIDxUcyBtZHhUeXBlPVwiVHNcIj57YC8vIHRoZXNlIDIgbGluZXMgYXJlIGVxdWl2YWxlbnQ6XG5tYWNoaW5lU3RvcmUuZ2V0VmFsdWUoKSA9PT0gJ3NvbWUtc3RhdGUnXG5tYWNoaW5lU3RvcmUuaXMoJ3NvbWUtc3RhdGUnKWB9PC9Ucz5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwic2VuZFwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+VGhpcyBpcyBob3cgeW91IHRyYW5zaXRpb24gdGhlIG1hY2hpbmUgdG8gYSBuZXcgc3RhdGUuPC9wPlxuICAgIDxwPlNpZ25hdHVyZTo8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgc2VuZCA9IChldmVudE5hbWUsIG1ldGE/KSA9PiBuZXdTdGF0ZWB9PC9Ucz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgICAgIDxJdGVtIG5hbWU9XCJldmVudE5hbWVcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgICBSZXF1aXJlZC4gQSBzdHJpbmcuIFRoaXMgbXVzdCBiZSBvbmUgb2YgdGhlIHJlY29nbml6ZWQgZXZlbnQgbmFtZXMgb2ZcbiAgICAgICAgdGhlIHN0b3JlLlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gbmFtZT1cIm1ldGFcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgICBPcHRpb25hbC4gQ2FuIGJlIGFueXRoaW5nLCBpbmNsdWRpbmcgdGhlIHNwZWNpYWx7JyAnfVxuICAgICAgICA8TGluayB0bz1cIi4uL3V0aWxzL2ludGVybmFsVHlwZXMjaWdub3JlXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgICA8Y29kZT5pZ25vcmU8L2NvZGU+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICBtZXRhIHR5cGUuXG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbSBuYW1lPVwiUmV0dXJuc1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIFRoZSBuZXcgc3RhdGUgb2YgdGhlIHN0b3JlIChhbiBvYmplY3Qgd2l0aCA8Y29kZT5jb250ZXh0PC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICA8Y29kZT52YWx1ZTwvY29kZT4gcHJvcGVydGllcyksIG9yIHRoZSBleGlzdGluZyBzdGF0ZSBpZiB0aGVyZSB3YXMgbm9cbiAgICAgICAgdmFsaWQgdHJhbnNpdGlvbiBmb3IgdGhlIHBhc3NlZCBldmVudC5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xlZ2VuZD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwic2V0Q29udGV4dFwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBSZXBsYWNlcyB0aGUgPGNvZGU+LmNvbnRleHQ8L2NvZGU+IG9mIHRoZSBzdG9yZSB3aXRoIHRoZSBwYXNzZWQgb2JqZWN0LlxuICAgIDwvcD5cbiAgICA8cD5TaWduYXR1cmU6PC9wPlxuICAgIDxUcyBtZHhUeXBlPVwiVHNcIj57YHNldENvbnRleHQgPSAoY29udGV4dE9yRmFjdG9yeSwgbWV0YT8pID0+IG5ld1N0YXRlYH08L1RzPlxuICAgIDxMZWdlbmQgbWR4VHlwZT1cIkxlZ2VuZFwiPlxuICAgICAgPEl0ZW0gbmFtZT1cImNvbnRleHRPckZhY3RvcnlcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgICBFaXRoZXIgdGhlIG5ldyBjb250ZXh0IG9yIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzIHRoZSBjdXJyZW50IGNvbnRleHRcbiAgICAgICAgYW5kIHJldHVybnMgYSBuZXcgY29udGV4dCBvYmplY3QuXG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbSBuYW1lPVwibWV0YVwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIE9wdGlvbmFsLiBDYW4gYmUgYW55dGhpbmcsIGluY2x1ZGluZyB0aGUgc3BlY2lhbHsnICd9XG4gICAgICAgIDxMaW5rIHRvPVwiLi4vdXRpbHMvaW50ZXJuYWxUeXBlcyNpZ25vcmVcIiBtZHhUeXBlPVwiTGlua1wiPlxuICAgICAgICAgIDxjb2RlPmlnbm9yZTwvY29kZT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIG1ldGEgdHlwZS5cbiAgICAgIDwvSXRlbT5cbiAgICAgIDxJdGVtIG5hbWU9XCJSZXR1cm5zXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICAgICAgVGhlIG5ldyBzdGF0ZSBvZiB0aGUgc3RvcmUgKGFuIG9iamVjdCB3aXRoIDxjb2RlPmNvbnRleHQ8L2NvZGU+IGFuZHsnICd9XG4gICAgICAgIDxjb2RlPnZhbHVlPC9jb2RlPiBwcm9wZXJ0aWVzKS5cbiAgICAgIDwvSXRlbT5cbiAgICA8L0xlZ2VuZD5cbiAgICA8cD5FeGFtcGxlczo8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgLy8gdGhlc2UgMiBsaW5lcyBhcmUgZXF1aXZhbGVudDpcbm1hY2hpbmVTdG9yZS5zZXRTdGF0ZShzdGF0ZSA9PiAoeyAuLi5zdGF0ZSwgY29udGV4dDogeyBrZXk6ICd2YWwnIH0gfSkpXG5tYWNoaW5lU3RvcmUuc2V0Q29udGV4dCh7IGtleTogJ3ZhbCcgfSlcbi8vIGFuZCB0aGVzZSAyIGxpbmVzIGFyZSBlcXVpdmFsZW50OlxubWFjaGluZVN0b3JlLnNldFN0YXRlKHN0YXRlID0+ICh7IC4uLnN0YXRlLCBjb250ZXh0OiB7IC4uLnN0YXRlLmNvbnRleHQsIGtleTogJ3ZhbCcgfSB9KSlcbm1hY2hpbmVTdG9yZS5zZXRDb250ZXh0KGNvbnRleHQgPT4gKHsgLi4uY29udGV4dCwga2V5OiAndmFsJyB9KSlgfTwvVHM+XG4gIDwvSXRlbT5cbiAgPEl0ZW0gbmFtZT1cInNldENvbnRleHREZWVwXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIERlZXBseSBtZXJnZXMgYW4gb2JqZWN0IGludG8gdGhlIGV4aXN0aW5nIDxjb2RlPi5jb250ZXh0PC9jb2RlPiBvZiB0aGVcbiAgICAgIHN0b3JlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRoaXMgY2Fubm90IGJlIHVzZWQgdG8gZGVsZXRlIGtleXMsIG9ubHkgdG8gYWRkL3VwZGF0ZS4gVXNleycgJ31cbiAgICAgIDxMaW5rIHRvPVwiI3NldGNvbnRleHRcIiBtZHhUeXBlPVwiTGlua1wiPlxuICAgICAgICA8Y29kZT4uc2V0Q29udGV4dCgpPC9jb2RlPlxuICAgICAgPC9MaW5rPnsnICd9XG4gICAgICB0byBkZWxldGUuXG4gICAgPC9wPlxuICAgIDxwPlNpZ25hdHVyZTo8L3A+XG4gICAgPFRzIG1keFR5cGU9XCJUc1wiPntgc2V0Q29udGV4dERlZXAgPSAoY29udGV4dE9yRmFjdG9yeSwgbWV0YT8pID0+IG5ld1N0YXRlYH08L1RzPlxuICAgIDxMZWdlbmQgbWR4VHlwZT1cIkxlZ2VuZFwiPlxuICAgICAgPEl0ZW0gbmFtZT1cImNvbnRleHRPckZhY3RvcnlcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgICBFaXRoZXIgdGhlIG5ldyBkZWVwLXBhcnRpYWwgY29udGV4dCBvciBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0cyB0aGVcbiAgICAgICAgY3VycmVudCBjb250ZXh0IGFuZCByZXR1cm5zIGEgZGVlcC1wYXJ0aWFsIGNvbnRleHQgb2JqZWN0LlxuICAgICAgPC9JdGVtPlxuICAgICAgPEl0ZW0gbmFtZT1cIm1ldGFcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgICBPcHRpb25hbC4gQ2FuIGJlIGFueXRoaW5nLCBpbmNsdWRpbmcgdGhlIHNwZWNpYWx7JyAnfVxuICAgICAgICA8TGluayB0bz1cIi4uL3V0aWxzL2ludGVybmFsVHlwZXMjaWdub3JlXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgICA8Y29kZT5pZ25vcmU8L2NvZGU+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICBtZXRhIHR5cGUuXG4gICAgICA8L0l0ZW0+XG4gICAgICA8SXRlbSBuYW1lPVwiUmV0dXJuc1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICAgIFRoZSBuZXcgc3RhdGUgb2YgdGhlIHN0b3JlIChhbiBvYmplY3Qgd2l0aCA8Y29kZT5jb250ZXh0PC9jb2RlPiBhbmR7JyAnfVxuICAgICAgICA8Y29kZT52YWx1ZTwvY29kZT4gcHJvcGVydGllcykuXG4gICAgICA8L0l0ZW0+XG4gICAgPC9MZWdlbmQ+XG4gICAgPHA+RXhhbXBsZXM6PC9wPlxuICAgIDxUcyBtZHhUeXBlPVwiVHNcIj57YC8vIHRoZXNlIDIgbGluZXMgYXJlIGVxdWl2YWxlbnQ6XG5tYWNoaW5lU3RvcmUuc2V0U3RhdGVEZWVwKHsgY29udGV4dDogeyBrZXk6ICd2YWwnIH0gfSlcbm1hY2hpbmVTdG9yZS5zZXRDb250ZXh0RGVlcCh7IGtleTogJ3ZhbCcgfSlcbi8vIGFuZCB0aGVzZSAyIGxpbmVzIGFyZSBlcXVpdmFsZW50OlxubWFjaGluZVN0b3JlLnNldFN0YXRlRGVlcChzdGF0ZSA9PiAoeyBjb250ZXh0OiB7IGtleTogc3RhdGUua2V5ICsgMSB9IH0pKVxubWFjaGluZVN0b3JlLnNldENvbnRleHQoY29udGV4dCA9PiAoeyBrZXk6IHN0YXRlLmtleSArIDEgfSkpYH08L1RzPlxuICA8L0l0ZW0+XG4gICAgPC9MZWdlbmQ+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic2VlLWFsc29cIlxuICAgIH19PntgU2VlIEFsc29gfTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vaW5qZWN0b3JzL2luamVjdE1hY2hpbmVTdG9yZVwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RNYWNoaW5lU3RvcmUoKWB9PC9pbmxpbmVDb2RlPjwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vLi4vd2Fsa3Rocm91Z2gvc3RhdGUtbWFjaGluZXNcIlxuICAgICAgICB9fT57YFRoZSBTdGF0ZSBNYWNoaW5lcyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwiTGVnZW5kIiwiSXRlbSIsIkxpbmsiLCJUYWJzIiwiVHMiLCJ0YWIxIiwidGFiMiIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///7395\n')}}]);
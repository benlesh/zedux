"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[123],{7244:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "InjectAtomStateLegend": function() { return /* binding */ InjectAtomStateLegend; },\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'injectAtomState\',title:\'injectAtomState\'};var contentTitle=undefined;var metadata={"unversionedId":"api/injectors/injectAtomState","id":"api/injectors/injectAtomState","title":"injectAtomState","description":"An injector that accepts an atom and its params and registers a dynamic graph dependency on the resolved atom instance. Returns a tuple of the instance\'s store\'s current value and an export-infused state setter function.","source":"@site/docs/api/injectors/injectAtomState.mdx","sourceDirName":"api/injectors","slug":"/api/injectors/injectAtomState","permalink":"/zedux/docs/api/injectors/injectAtomState","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/injectors/injectAtomState.mdx","tags":[],"version":"current","frontMatter":{"id":"injectAtomState","title":"injectAtomState"},"sidebar":"react","previous":{"title":"injectAtomSelector","permalink":"/zedux/docs/api/injectors/injectAtomSelector"},"next":{"title":"injectAtomValue","permalink":"/zedux/docs/api/injectors/injectAtomValue"}};var assets={};var toc=[{value:\'Example\',id:\'example\',level:2},{value:\'Signature\',id:\'signature\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var InjectAtomStateLegend=function InjectAtomStateLegend(_ref){var _ref$name=_ref.name,name=_ref$name===void 0?\'injectAtomState\':_ref$name,_ref$type=_ref.type,type=_ref$type===void 0?\'injector\':_ref$type;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"atomOrInstance",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Required. An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/Atom",mdxType:"Link"},"Atom")," or",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/AtomInstance",mdxType:"Link"},"atom instance"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If an atom is passed, you must also pass any required params of the atom."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If an atom instance is passed, the params are ignored. In this case, the returned state value will be the current value of this atom instance. The returned state setter will have all the exports of the given instance attached."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In all cases, ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,name,"()")," adds a dynamic dependency on the resolved instance.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"params",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Required if the passed atom takes required params. Optional if not."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Don\'t pass this or pass an empty array if the atom does not take params or if passing an atom instance.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"[state, setState]")," tuple:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"state")," - The current value of the resolved atom instance\'s store."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"setState")," - An export-infused state setter function.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Uses the passed atom + params combo to find an existing atom instance. If no instance is found, creates one."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The returned state setter is a direct wrapper around",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/AtomInstance#setstate",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"instance.setState()")),". It accepts either the full new state or a function that receives the current state and returns the new state."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Note that this is not a deep setter like",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/Store#setstatedeep",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"store.setStateDeep()")),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The returned state setter is \\"export-infused\\" meaning it has all the exports of the resolved atom instance spread onto it (yes, onto the function itself)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"const [state, setState] = "+name+"(myAtom)\\nconst { export1, export2 } = setState\\n// or simply:\\nconst [state, { export1, export2 }] = "+name+"(myAtom)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Yes, this means that if your exports have name collisions with the function\'s own properties, the exports will overwrite stuff on the function. TS users will see this, as the types correctly indicate this."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If this feels janky or hacky to you, just remember that this ",type," is provided for convenience. You don\'t have to use it if it inconveniences you. There are other ways to accomplish everything this ",type," does. For example:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"const instance = "+(type===\'hook\'?\'use\':\'inject\')+"AtomInstance(myAtom)\\nconst state = "+(type===\'hook\'?\'use\':\'inject\')+"AtomValue(instance)\\nconst { setState } = instance\\nconst { export1, export2 } = instance.exports")));};var layoutProps={toc:toc,InjectAtomStateLegend:InjectAtomStateLegend};var MDXLayout="wrapper";function MDXContent(_ref2){var components=_ref2.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref2,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { injectAtomState } from \'@zedux/react\'\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../glossary#injector"},"injector")," that accepts an atom and its params and registers a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../glossary#dynamic-graph-dependency"},"dynamic graph dependency")," on the resolved atom instance. Returns a tuple of the instance\'s store\'s current value and an export-infused state setter function."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This injector\'s return type is very similar to React\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"useState()")," hook."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const [val, setVal] = useState()\\n// compare:\\nconst [state, setState] = injectAtomState(myAtom, [...params])\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The atom instance that uses this injector will reevaluate whenever the resolved atom instance\'s state changes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The returned state setter function has all the atom instance\'s exports attached to it. This facilitates using exports to update the atom\'s state, rather than updating the state directly."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"example"},"Example"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=injectAtomState/example resultVar=Seconds","live":true,"ecosystemId":"injectAtomState/example","resultVar":"Seconds"},"const secondsAtom = atom(\'seconds\', () => {\\n  const store = injectStore(0)\\n\\n  injectEffect(() => {\\n    const intervalId = setInterval(() => store.setState(val => val + 1), 1000)\\n\\n    return () => clearInterval(intervalId)\\n  }, [])\\n\\n  return store\\n})\\n\\nconst wrapperAtom = atom(\'wrapper\', () => {\\n  const [seconds, setSeconds] = injectAtomState(secondsAtom)\\n\\n  return api(seconds).setExports({\\n    increment: () => setSeconds(val => val + 1),\\n  })\\n})\\n\\nfunction Seconds() {\\n  const state = useAtomValue(wrapperAtom)\\n  const { increment } = useAtomInstance(wrapperAtom).exports\\n\\n  return (\\n    <>\\n      <div>Seconds: {state}</div>\\n      <button onClick={increment}>Increment</button>\\n    </>\\n  )\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Destructuring the exports from the state setter:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { api, atom, injectAtomState } from \'@zedux/react\'\\n\\nconst passwordAtom = atom(\'password\', () => {\\n  const store = injectStore(\'\')\\n\\n  return api(store).setExports({\\n    clear: () => store.setState(\'\'),\\n    setPassword: (newPassword: string) => store.setState(newPassword),\\n  })\\n})\\n\\nconst formAtom = atom(\'form\', () => {\\n  // destructure the exports directly off the state setter:\\n  const [password, { clear, setPassword }] = injectAtomState(passwordAtom)\\n  // this is a convenient alternative to the following:\\n  const passwordInstance = injectAtomInstance(passwordAtom)\\n  const password = injectAtomValue(passwordInstance)\\n  const { clear, setPassword } = passwordInstance.exports\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Miscellaneous:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const [state, setState] = injectAtomState(myAtom)\\nconst withParams = injectAtomState(myAtom, [\'param 1\', \'param 2\'])\\nconst fromInstance = injectAtomState(myAtomInstance)\\nconst [, setterOnly] = injectAtomState(myAtom)\\nconst [, { exports, only }] = injectAtomState(myAtom)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"signature"},"Signature"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("injectAtomState = (atomOrInstance, params?) => [state, setState]"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("declare const injectAtomState: {\\n  <A extends AtomBase<any, [], any, any, any, any>>(atom: A): StateHookTuple<AtomStateType<A>, AtomExportsType<A>>;\\n  <A extends AtomBase<any, [...any], any, any, any, any>>(atom: A, params: AtomParamsType<A>): StateHookTuple<AtomStateType<A>, AtomExportsType<A>>;\\n  <AI extends AtomInstance<any, [...any], any, any, any>>(instance: AI): StateHookTuple<AtomInstanceStateType<AI>, AtomInstanceExportsType<AI>>;\\n}")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(InjectAtomStateLegend,{mdxType:"InjectAtomStateLegend"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../hooks/useAtomState"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"useAtomState()"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectAtomValue"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomValue()"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/atom-apis"},"The Atom APIs walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../classes/AtomInstance#setstate"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"instance.setState()")))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFLGtDQUFrQyxFQUN6QywyRUFBWSxVQUFVLENBQUMsR0FBRyx3QkFBcUMsQ0FBSSxDQUFLLENBQzFFLENBQ08sQ0FDaEIsQ0FDQSxDQUNBUyxVQUFVLENBQUNHLGNBQWMsQ0FBRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVkdXgtZG9jcy8uL2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RBdG9tU3RhdGUubWR4P2IyNmUiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ2luamVjdEF0b21TdGF0ZScsXG5cdHRpdGxlOiAnaW5qZWN0QXRvbVN0YXRlJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFwaS9pbmplY3RvcnMvaW5qZWN0QXRvbVN0YXRlXCIsXG4gIFwiaWRcIjogXCJhcGkvaW5qZWN0b3JzL2luamVjdEF0b21TdGF0ZVwiLFxuICBcInRpdGxlXCI6IFwiaW5qZWN0QXRvbVN0YXRlXCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBpbmplY3RvciB0aGF0IGFjY2VwdHMgYW4gYXRvbSBhbmQgaXRzIHBhcmFtcyBhbmQgcmVnaXN0ZXJzIGEgZHluYW1pYyBncmFwaCBkZXBlbmRlbmN5IG9uIHRoZSByZXNvbHZlZCBhdG9tIGluc3RhbmNlLiBSZXR1cm5zIGEgdHVwbGUgb2YgdGhlIGluc3RhbmNlJ3Mgc3RvcmUncyBjdXJyZW50IHZhbHVlIGFuZCBhbiBleHBvcnQtaW5mdXNlZCBzdGF0ZSBzZXR0ZXIgZnVuY3Rpb24uXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdEF0b21TdGF0ZS5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYXBpL2luamVjdG9yc1wiLFxuICBcInNsdWdcIjogXCIvYXBpL2luamVjdG9ycy9pbmplY3RBdG9tU3RhdGVcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdEF0b21TdGF0ZVwiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdEF0b21TdGF0ZS5tZHhcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJpbmplY3RBdG9tU3RhdGVcIixcbiAgICBcInRpdGxlXCI6IFwiaW5qZWN0QXRvbVN0YXRlXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImluamVjdEF0b21TZWxlY3RvclwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RBdG9tU2VsZWN0b3JcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJpbmplY3RBdG9tVmFsdWVcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9pbmplY3RvcnMvaW5qZWN0QXRvbVZhbHVlXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cbmltcG9ydCB7IExlZ2VuZCwgSXRlbSwgTGluaywgVGFicywgVHMsIHRhYjEsIHRhYjIgfSBmcm9tICdAc2l0ZS9zcmMvYWxsJ1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnRXhhbXBsZScsXG4gIGlkOiAnZXhhbXBsZScsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2lnbmF0dXJlJyxcbiAgaWQ6ICdzaWduYXR1cmUnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcbmV4cG9ydCBjb25zdCBJbmplY3RBdG9tU3RhdGVMZWdlbmQgPSAoe1xuICBuYW1lID0gJ2luamVjdEF0b21TdGF0ZScsXG4gIHR5cGUgPSAnaW5qZWN0b3InXG59KSA9PiA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgICA8SXRlbSBuYW1lPVwiYXRvbU9ySW5zdGFuY2VcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgICAgPHA+XG4gICAgICAgIFJlcXVpcmVkLiBBbiA8TGluayB0bz1cIi4uL2NsYXNzZXMvQXRvbVwiIG1keFR5cGU9XCJMaW5rXCI+QXRvbTwvTGluaz4gb3J7JyAnfVxuICAgICAgICA8TGluayB0bz1cIi4uL2NsYXNzZXMvQXRvbUluc3RhbmNlXCIgbWR4VHlwZT1cIkxpbmtcIj5hdG9tIGluc3RhbmNlPC9MaW5rPi5cbiAgICAgIDwvcD5cbiAgICAgIDxwPlxuICAgICAgICBJZiBhbiBhdG9tIGlzIHBhc3NlZCwgeW91IG11c3QgYWxzbyBwYXNzIGFueSByZXF1aXJlZCBwYXJhbXMgb2YgdGhlXG4gICAgICAgIGF0b20uXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgSWYgYW4gYXRvbSBpbnN0YW5jZSBpcyBwYXNzZWQsIHRoZSBwYXJhbXMgYXJlIGlnbm9yZWQuIEluIHRoaXMgY2FzZSwgdGhlXG4gICAgICAgIHJldHVybmVkIHN0YXRlIHZhbHVlIHdpbGwgYmUgdGhlIGN1cnJlbnQgdmFsdWUgb2YgdGhpcyBhdG9tIGluc3RhbmNlLlxuICAgICAgICBUaGUgcmV0dXJuZWQgc3RhdGUgc2V0dGVyIHdpbGwgaGF2ZSBhbGwgdGhlIGV4cG9ydHMgb2YgdGhlIGdpdmVuXG4gICAgICAgIGluc3RhbmNlIGF0dGFjaGVkLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIEluIGFsbCBjYXNlcywgPGNvZGU+e25hbWV9KCk8L2NvZGU+IGFkZHMgYSBkeW5hbWljIGRlcGVuZGVuY3kgb24gdGhlXG4gICAgICAgIHJlc29sdmVkIGluc3RhbmNlLlxuICAgICAgPC9wPlxuICAgIDwvSXRlbT5cbiAgICA8SXRlbSBuYW1lPVwicGFyYW1zXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICAgIDxwPlJlcXVpcmVkIGlmIHRoZSBwYXNzZWQgYXRvbSB0YWtlcyByZXF1aXJlZCBwYXJhbXMuIE9wdGlvbmFsIGlmIG5vdC48L3A+XG4gICAgICA8cD5cbiAgICAgICAgRG9uJ3QgcGFzcyB0aGlzIG9yIHBhc3MgYW4gZW1wdHkgYXJyYXkgaWYgdGhlIGF0b20gZG9lcyBub3QgdGFrZSBwYXJhbXNcbiAgICAgICAgb3IgaWYgcGFzc2luZyBhbiBhdG9tIGluc3RhbmNlLlxuICAgICAgPC9wPlxuICAgIDwvSXRlbT5cbiAgICA8SXRlbSBuYW1lPVwiUmV0dXJuc1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgICA8cD5cbiAgICAgICAgQSA8Y29kZT5bc3RhdGUsIHNldFN0YXRlXTwvY29kZT4gdHVwbGU6XG4gICAgICA8L3A+XG4gICAgICA8dWw+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8Y29kZT5zdGF0ZTwvY29kZT4gLSBUaGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgcmVzb2x2ZWQgYXRvbSBpbnN0YW5jZSdzXG4gICAgICAgICAgc3RvcmUuXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8Y29kZT5zZXRTdGF0ZTwvY29kZT4gLSBBbiBleHBvcnQtaW5mdXNlZCBzdGF0ZSBzZXR0ZXIgZnVuY3Rpb24uXG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHA+XG4gICAgICAgIFVzZXMgdGhlIHBhc3NlZCBhdG9tICsgcGFyYW1zIGNvbWJvIHRvIGZpbmQgYW4gZXhpc3RpbmcgYXRvbSBpbnN0YW5jZS5cbiAgICAgICAgSWYgbm8gaW5zdGFuY2UgaXMgZm91bmQsIGNyZWF0ZXMgb25lLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIFRoZSByZXR1cm5lZCBzdGF0ZSBzZXR0ZXIgaXMgYSBkaXJlY3Qgd3JhcHBlciBhcm91bmR7JyAnfVxuICAgICAgICA8TGluayB0bz1cIi4uL2NsYXNzZXMvQXRvbUluc3RhbmNlI3NldHN0YXRlXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgICA8Y29kZT5pbnN0YW5jZS5zZXRTdGF0ZSgpPC9jb2RlPlxuICAgICAgICA8L0xpbms+XG4gICAgICAgIC4gSXQgYWNjZXB0cyBlaXRoZXIgdGhlIGZ1bGwgbmV3IHN0YXRlIG9yIGEgZnVuY3Rpb24gdGhhdCByZWNlaXZlcyB0aGUgY3VycmVudFxuICAgICAgICBzdGF0ZSBhbmQgcmV0dXJucyB0aGUgbmV3IHN0YXRlLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIE5vdGUgdGhhdCB0aGlzIGlzIG5vdCBhIGRlZXAgc2V0dGVyIGxpa2V7JyAnfVxuICAgICAgICA8TGluayB0bz1cIi4uL2NsYXNzZXMvU3RvcmUjc2V0c3RhdGVkZWVwXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgICA8Y29kZT5zdG9yZS5zZXRTdGF0ZURlZXAoKTwvY29kZT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICAuXG4gICAgICA8L3A+XG4gICAgICA8cD5cbiAgICAgICAgVGhlIHJldHVybmVkIHN0YXRlIHNldHRlciBpcyBcImV4cG9ydC1pbmZ1c2VkXCIgbWVhbmluZyBpdCBoYXMgYWxsIHRoZVxuICAgICAgICBleHBvcnRzIG9mIHRoZSByZXNvbHZlZCBhdG9tIGluc3RhbmNlIHNwcmVhZCBvbnRvIGl0ICh5ZXMsIG9udG8gdGhlXG4gICAgICAgIGZ1bmN0aW9uIGl0c2VsZikuXG4gICAgICA8L3A+XG4gICAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2Bjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9ICR7bmFtZX0obXlBdG9tKVxuY29uc3QgeyBleHBvcnQxLCBleHBvcnQyIH0gPSBzZXRTdGF0ZVxuLy8gb3Igc2ltcGx5OlxuY29uc3QgW3N0YXRlLCB7IGV4cG9ydDEsIGV4cG9ydDIgfV0gPSAke25hbWV9KG15QXRvbSlgfTwvVHM+XG4gICAgICA8cD5cbiAgICAgICAgWWVzLCB0aGlzIG1lYW5zIHRoYXQgaWYgeW91ciBleHBvcnRzIGhhdmUgbmFtZSBjb2xsaXNpb25zIHdpdGggdGhlXG4gICAgICAgIGZ1bmN0aW9uJ3Mgb3duIHByb3BlcnRpZXMsIHRoZSBleHBvcnRzIHdpbGwgb3ZlcndyaXRlIHN0dWZmIG9uIHRoZVxuICAgICAgICBmdW5jdGlvbi4gVFMgdXNlcnMgd2lsbCBzZWUgdGhpcywgYXMgdGhlIHR5cGVzIGNvcnJlY3RseSBpbmRpY2F0ZSB0aGlzLlxuICAgICAgPC9wPlxuICAgICAgPHA+XG4gICAgICAgIElmIHRoaXMgZmVlbHMgamFua3kgb3IgaGFja3kgdG8geW91LCBqdXN0IHJlbWVtYmVyIHRoYXQgdGhpcyB7dHlwZX0gaXNcbiAgICAgICAgcHJvdmlkZWQgZm9yIGNvbnZlbmllbmNlLiBZb3UgZG9uJ3QgaGF2ZSB0byB1c2UgaXQgaWYgaXQgaW5jb252ZW5pZW5jZXNcbiAgICAgICAgeW91LiBUaGVyZSBhcmUgb3RoZXIgd2F5cyB0byBhY2NvbXBsaXNoIGV2ZXJ5dGhpbmcgdGhpcyB7dHlwZX0gZG9lcy4gRm9yXG4gICAgICAgIGV4YW1wbGU6XG4gICAgICA8L3A+XG4gICAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2Bjb25zdCBpbnN0YW5jZSA9ICR7dHlwZSA9PT0gJ2hvb2snID8gJ3VzZScgOiAnaW5qZWN0J31BdG9tSW5zdGFuY2UobXlBdG9tKVxuY29uc3Qgc3RhdGUgPSAke3R5cGUgPT09ICdob29rJyA/ICd1c2UnIDogJ2luamVjdCd9QXRvbVZhbHVlKGluc3RhbmNlKVxuY29uc3QgeyBzZXRTdGF0ZSB9ID0gaW5zdGFuY2VcbmNvbnN0IHsgZXhwb3J0MSwgZXhwb3J0MiB9ID0gaW5zdGFuY2UuZXhwb3J0c2B9PC9Ucz5cbiAgICA8L0l0ZW0+XG4gIDwvTGVnZW5kPjtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvYyxcbkluamVjdEF0b21TdGF0ZUxlZ2VuZFxufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGltcG9ydCB7IGluamVjdEF0b21TdGF0ZSB9IGZyb20gJ0B6ZWR1eC9yZWFjdCdcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQW4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2dsb3NzYXJ5I2luamVjdG9yXCJcbiAgICAgIH19PntgaW5qZWN0b3JgfTwvYT57YCB0aGF0IGFjY2VwdHMgYW4gYXRvbSBhbmQgaXRzIHBhcmFtcyBhbmQgcmVnaXN0ZXJzIGEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2dsb3NzYXJ5I2R5bmFtaWMtZ3JhcGgtZGVwZW5kZW5jeVwiXG4gICAgICB9fT57YGR5bmFtaWMgZ3JhcGggZGVwZW5kZW5jeWB9PC9hPntgIG9uIHRoZSByZXNvbHZlZCBhdG9tIGluc3RhbmNlLiBSZXR1cm5zIGEgdHVwbGUgb2YgdGhlIGluc3RhbmNlJ3Mgc3RvcmUncyBjdXJyZW50IHZhbHVlIGFuZCBhbiBleHBvcnQtaW5mdXNlZCBzdGF0ZSBzZXR0ZXIgZnVuY3Rpb24uYH08L3A+XG4gICAgPHA+e2BUaGlzIGluamVjdG9yJ3MgcmV0dXJuIHR5cGUgaXMgdmVyeSBzaW1pbGFyIHRvIFJlYWN0J3MgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlU3RhdGUoKWB9PC9pbmxpbmVDb2RlPntgIGhvb2suYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IFt2YWwsIHNldFZhbF0gPSB1c2VTdGF0ZSgpXG4vLyBjb21wYXJlOlxuY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBpbmplY3RBdG9tU3RhdGUobXlBdG9tLCBbLi4ucGFyYW1zXSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgVGhlIGF0b20gaW5zdGFuY2UgdGhhdCB1c2VzIHRoaXMgaW5qZWN0b3Igd2lsbCByZWV2YWx1YXRlIHdoZW5ldmVyIHRoZSByZXNvbHZlZCBhdG9tIGluc3RhbmNlJ3Mgc3RhdGUgY2hhbmdlcy5gfTwvcD5cbiAgICA8cD57YFRoZSByZXR1cm5lZCBzdGF0ZSBzZXR0ZXIgZnVuY3Rpb24gaGFzIGFsbCB0aGUgYXRvbSBpbnN0YW5jZSdzIGV4cG9ydHMgYXR0YWNoZWQgdG8gaXQuIFRoaXMgZmFjaWxpdGF0ZXMgdXNpbmcgZXhwb3J0cyB0byB1cGRhdGUgdGhlIGF0b20ncyBzdGF0ZSwgcmF0aGVyIHRoYW4gdXBkYXRpbmcgdGhlIHN0YXRlIGRpcmVjdGx5LmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImV4YW1wbGVcIlxuICAgIH19PntgRXhhbXBsZWB9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIGVjb3N5c3RlbUlkPWluamVjdEF0b21TdGF0ZS9leGFtcGxlIHJlc3VsdFZhcj1TZWNvbmRzXCIsXG4gICAgICAgIFwibGl2ZVwiOiB0cnVlLFxuICAgICAgICBcImVjb3N5c3RlbUlkXCI6IFwiaW5qZWN0QXRvbVN0YXRlL2V4YW1wbGVcIixcbiAgICAgICAgXCJyZXN1bHRWYXJcIjogXCJTZWNvbmRzXCJcbiAgICAgIH19PntgY29uc3Qgc2Vjb25kc0F0b20gPSBhdG9tKCdzZWNvbmRzJywgKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGluamVjdFN0b3JlKDApXG5cbiAgaW5qZWN0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gc3RvcmUuc2V0U3RhdGUodmFsID0+IHZhbCArIDEpLCAxMDAwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHN0b3JlXG59KVxuXG5jb25zdCB3cmFwcGVyQXRvbSA9IGF0b20oJ3dyYXBwZXInLCAoKSA9PiB7XG4gIGNvbnN0IFtzZWNvbmRzLCBzZXRTZWNvbmRzXSA9IGluamVjdEF0b21TdGF0ZShzZWNvbmRzQXRvbSlcblxuICByZXR1cm4gYXBpKHNlY29uZHMpLnNldEV4cG9ydHMoe1xuICAgIGluY3JlbWVudDogKCkgPT4gc2V0U2Vjb25kcyh2YWwgPT4gdmFsICsgMSksXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBTZWNvbmRzKCkge1xuICBjb25zdCBzdGF0ZSA9IHVzZUF0b21WYWx1ZSh3cmFwcGVyQXRvbSlcbiAgY29uc3QgeyBpbmNyZW1lbnQgfSA9IHVzZUF0b21JbnN0YW5jZSh3cmFwcGVyQXRvbSkuZXhwb3J0c1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXY+U2Vjb25kczoge3N0YXRlfTwvZGl2PlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnR9PkluY3JlbWVudDwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YERlc3RydWN0dXJpbmcgdGhlIGV4cG9ydHMgZnJvbSB0aGUgc3RhdGUgc2V0dGVyOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBhcGksIGF0b20sIGluamVjdEF0b21TdGF0ZSB9IGZyb20gJ0B6ZWR1eC9yZWFjdCdcblxuY29uc3QgcGFzc3dvcmRBdG9tID0gYXRvbSgncGFzc3dvcmQnLCAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gaW5qZWN0U3RvcmUoJycpXG5cbiAgcmV0dXJuIGFwaShzdG9yZSkuc2V0RXhwb3J0cyh7XG4gICAgY2xlYXI6ICgpID0+IHN0b3JlLnNldFN0YXRlKCcnKSxcbiAgICBzZXRQYXNzd29yZDogKG5ld1Bhc3N3b3JkOiBzdHJpbmcpID0+IHN0b3JlLnNldFN0YXRlKG5ld1Bhc3N3b3JkKSxcbiAgfSlcbn0pXG5cbmNvbnN0IGZvcm1BdG9tID0gYXRvbSgnZm9ybScsICgpID0+IHtcbiAgLy8gZGVzdHJ1Y3R1cmUgdGhlIGV4cG9ydHMgZGlyZWN0bHkgb2ZmIHRoZSBzdGF0ZSBzZXR0ZXI6XG4gIGNvbnN0IFtwYXNzd29yZCwgeyBjbGVhciwgc2V0UGFzc3dvcmQgfV0gPSBpbmplY3RBdG9tU3RhdGUocGFzc3dvcmRBdG9tKVxuICAvLyB0aGlzIGlzIGEgY29udmVuaWVudCBhbHRlcm5hdGl2ZSB0byB0aGUgZm9sbG93aW5nOlxuICBjb25zdCBwYXNzd29yZEluc3RhbmNlID0gaW5qZWN0QXRvbUluc3RhbmNlKHBhc3N3b3JkQXRvbSlcbiAgY29uc3QgcGFzc3dvcmQgPSBpbmplY3RBdG9tVmFsdWUocGFzc3dvcmRJbnN0YW5jZSlcbiAgY29uc3QgeyBjbGVhciwgc2V0UGFzc3dvcmQgfSA9IHBhc3N3b3JkSW5zdGFuY2UuZXhwb3J0c1xufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTWlzY2VsbGFuZW91czpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSBpbmplY3RBdG9tU3RhdGUobXlBdG9tKVxuY29uc3Qgd2l0aFBhcmFtcyA9IGluamVjdEF0b21TdGF0ZShteUF0b20sIFsncGFyYW0gMScsICdwYXJhbSAyJ10pXG5jb25zdCBmcm9tSW5zdGFuY2UgPSBpbmplY3RBdG9tU3RhdGUobXlBdG9tSW5zdGFuY2UpXG5jb25zdCBbLCBzZXR0ZXJPbmx5XSA9IGluamVjdEF0b21TdGF0ZShteUF0b20pXG5jb25zdCBbLCB7IGV4cG9ydHMsIG9ubHkgfV0gPSBpbmplY3RBdG9tU3RhdGUobXlBdG9tKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic2lnbmF0dXJlXCJcbiAgICB9fT57YFNpZ25hdHVyZWB9PC9oMj5cbiAgICA8VGFicyBtZHhUeXBlPVwiVGFic1wiPlxuICB7dGFiMShgaW5qZWN0QXRvbVN0YXRlID0gKGF0b21Pckluc3RhbmNlLCBwYXJhbXM/KSA9PiBbc3RhdGUsIHNldFN0YXRlXWApfVxuICB7dGFiMihgZGVjbGFyZSBjb25zdCBpbmplY3RBdG9tU3RhdGU6IHtcbiAgPEEgZXh0ZW5kcyBBdG9tQmFzZTxhbnksIFtdLCBhbnksIGFueSwgYW55LCBhbnk+PihhdG9tOiBBKTogU3RhdGVIb29rVHVwbGU8QXRvbVN0YXRlVHlwZTxBPiwgQXRvbUV4cG9ydHNUeXBlPEE+PjtcbiAgPEEgZXh0ZW5kcyBBdG9tQmFzZTxhbnksIFsuLi5hbnldLCBhbnksIGFueSwgYW55LCBhbnk+PihhdG9tOiBBLCBwYXJhbXM6IEF0b21QYXJhbXNUeXBlPEE+KTogU3RhdGVIb29rVHVwbGU8QXRvbVN0YXRlVHlwZTxBPiwgQXRvbUV4cG9ydHNUeXBlPEE+PjtcbiAgPEFJIGV4dGVuZHMgQXRvbUluc3RhbmNlPGFueSwgWy4uLmFueV0sIGFueSwgYW55LCBhbnk+PihpbnN0YW5jZTogQUkpOiBTdGF0ZUhvb2tUdXBsZTxBdG9tSW5zdGFuY2VTdGF0ZVR5cGU8QUk+LCBBdG9tSW5zdGFuY2VFeHBvcnRzVHlwZTxBST4+O1xufWApfVxuICAgIDwvVGFicz5cblxuICAgIDxJbmplY3RBdG9tU3RhdGVMZWdlbmQgbWR4VHlwZT1cIkluamVjdEF0b21TdGF0ZUxlZ2VuZFwiIC8+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic2VlLWFsc29cIlxuICAgIH19PntgU2VlIEFsc29gfTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vaG9va3MvdXNlQXRvbVN0YXRlXCJcbiAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YHVzZUF0b21TdGF0ZSgpYH08L2lubGluZUNvZGU+PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJpbmplY3RBdG9tVmFsdWVcIlxuICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgaW5qZWN0QXRvbVZhbHVlKClgfTwvaW5saW5lQ29kZT48L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uLy4uL3dhbGt0aHJvdWdoL2F0b20tYXBpc1wiXG4gICAgICAgIH19PntgVGhlIEF0b20gQVBJcyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0F0b21JbnN0YW5jZSNzZXRzdGF0ZVwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbnN0YW5jZS5zZXRTdGF0ZSgpYH08L2lubGluZUNvZGU+PC9hPjwvbGk+XG4gICAgPC91bD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwiTGVnZW5kIiwiSXRlbSIsIkxpbmsiLCJUYWJzIiwiVHMiLCJ0YWIxIiwidGFiMiIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJJbmplY3RBdG9tU3RhdGVMZWdlbmQiLCJuYW1lIiwidHlwZSIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7244\n')}}]);
"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[7641],{4965:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'useEcosystem\',title:\'useEcosystem\'};var contentTitle=undefined;var metadata={"unversionedId":"api/hooks/useEcosystem","id":"api/hooks/useEcosystem","title":"useEcosystem","description":"A React hook that returns a reference to the nearest ecosystem that\'s been provided over React context via ``. If no ecosystem has been provided, Zedux will return the global ecosystem. If the global ecosystem hasn\'t been created yet, Zedux will create it.","source":"@site/docs/api/hooks/useEcosystem.mdx","sourceDirName":"api/hooks","slug":"/api/hooks/useEcosystem","permalink":"/zedux/docs/api/hooks/useEcosystem","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/hooks/useEcosystem.mdx","tags":[],"version":"current","frontMatter":{"id":"useEcosystem","title":"useEcosystem"},"sidebar":"react","previous":{"title":"useAtomValue","permalink":"/zedux/docs/api/hooks/useAtomValue"},"next":{"title":"injectAtomGetters","permalink":"/zedux/docs/api/injectors/injectAtomGetters"}};var assets={};var toc=[{value:\'Examples\',id:\'examples\',level:2},{value:\'Signature\',id:\'signature\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { useEcosystem } from \'@zedux/react\'\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A React hook that returns a reference to the nearest ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Ecosystem"},"ecosystem")," that\'s been provided over React context via ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../components/EcosystemProvider"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"<EcosystemProvider>")),". If no ecosystem has been provided, Zedux will return the global ecosystem. If the global ecosystem hasn\'t been created yet, Zedux will create it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../../walkthrough/ecosystems"},"The ecosystems walkthrough")," details when Zedux uses which ecosystem."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=useEcosystem/simple-example resultVar=Seconds","live":true,"ecosystemId":"useEcosystem/simple-example","resultVar":"Seconds"},"const secondsAtom = atom(\'seconds\', () => {\\n  const store = injectStore(0)\\n\\n  injectEffect(() => {\\n    const intervalId = setInterval(() => store.setState(val => val + 1), 1000)\\n\\n    return () => clearInterval(intervalId)\\n  }, [])\\n\\n  return store\\n})\\n\\nfunction Seconds() {\\n  const ecosystem = useEcosystem()\\n  const instance = ecosystem.getInstance(secondsAtom)\\n  const state = useAtomValue(instance)\\n\\n  return <div>Seconds: {state}</div>\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=useEcosystem/counters-example resultVar=App","live":true,"ecosystemId":"useEcosystem/counters-example","resultVar":"App"},"const secondsAtom = atom(\'seconds\', (startingNumber: number) => {\\n  const store = injectStore(startingNumber)\\n\\n  injectEffect(() => {\\n    const intervalId = setInterval(() => store.setState(val => val + 1), 1000)\\n\\n    return () => clearInterval(intervalId)\\n  }, [])\\n\\n  return store\\n})\\n\\nfunction First() {\\n  const seconds = useAtomValue(secondsAtom, [0])\\n\\n  return <div>First State: {seconds}</div>\\n}\\n\\nfunction Second() {\\n  const seconds = useAtomValue(secondsAtom, [10])\\n\\n  return <div>Second State: {seconds}</div>\\n}\\n\\nfunction App() {\\n  const [isStarted, setIsStarted] = useState(false)\\n  const [isFirst, setIsFirst] = useState(true)\\n  const ecosystem = useEcosystem()\\n\\n  const start = () => {\\n    setIsStarted(true)\\n\\n    // preload both counters, so they start at the same time:\\n    ecosystem.getInstance(secondsAtom, [0])\\n    ecosystem.getInstance(secondsAtom, [10])\\n  }\\n\\n  return (\\n    <>\\n      {!isStarted ? (\\n        <button onClick={start}>Start Counting!</button>\\n      ) : (\\n        <>\\n          {isFirst ? <First /> : <Second />}\\n          <button onClick={() => setIsFirst(val => !val)}>Toggle View</button>\\n        </>\\n      )}\\n    </>\\n  )\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Global and custom ecosystems:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"function Child() {\\n  const ecosystem = useEcosystem() // { id: \'root\', ... }\\n  ...\\n}\\n\\nfunction App() {\\n  const ecosystem = useEcosystem() // { id: \'@@global\' ... }\\n\\n  return (\\n    <EcosystemProvider id=\\"root\\">\\n      <Child />\\n    </EcosystemProvider>\\n  )\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"signature"},"Signature"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("useEcosystem = () => ecosystem"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("declare const useEcosystem: () => Ecosystem<any>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/Ecosystem",mdxType:"Link"},"ecosystem")," object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This is the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"global")," ecosystem if no ecosystem has been provided above this component via an",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../components/EcosystemProvider",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"<EcosystemProvider>")),". If an ecosystem has been provided, this is a reference to that ecosystem."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../injectors/injectAtomGetters"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomGetters()"))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/ecosystems"},"The Ecosystems walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../components/EcosystemProvider"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"<EcosystemProvider>")," component")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../classes/Ecosystem"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"Ecosystem")," class"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLElBQUksQ0FDbEMsTUFBTSxDQUFFLHNCQUFzQixTQUNyQiwyRUFBWSxVQUFVLENBQUMsR0FBRyxjQUEyQixVQUFjLENBQUssQ0FDbEYsQ0FDTyxDQUNoQixDQUNBLENBQ0FNLFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hcGkvaG9va3MvdXNlRWNvc3lzdGVtLm1keD85YjFhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICd1c2VFY29zeXN0ZW0nLFxuXHR0aXRsZTogJ3VzZUVjb3N5c3RlbSdcbn07XG5leHBvcnQgY29uc3QgY29udGVudFRpdGxlID0gdW5kZWZpbmVkO1xuZXhwb3J0IGNvbnN0IG1ldGFkYXRhID0ge1xuICBcInVudmVyc2lvbmVkSWRcIjogXCJhcGkvaG9va3MvdXNlRWNvc3lzdGVtXCIsXG4gIFwiaWRcIjogXCJhcGkvaG9va3MvdXNlRWNvc3lzdGVtXCIsXG4gIFwidGl0bGVcIjogXCJ1c2VFY29zeXN0ZW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgUmVhY3QgaG9vayB0aGF0IHJldHVybnMgYSByZWZlcmVuY2UgdG8gdGhlIG5lYXJlc3QgZWNvc3lzdGVtIHRoYXQncyBiZWVuIHByb3ZpZGVkIG92ZXIgUmVhY3QgY29udGV4dCB2aWEgYGAuIElmIG5vIGVjb3N5c3RlbSBoYXMgYmVlbiBwcm92aWRlZCwgWmVkdXggd2lsbCByZXR1cm4gdGhlIGdsb2JhbCBlY29zeXN0ZW0uIElmIHRoZSBnbG9iYWwgZWNvc3lzdGVtIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0LCBaZWR1eCB3aWxsIGNyZWF0ZSBpdC5cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS9ob29rcy91c2VFY29zeXN0ZW0ubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFwaS9ob29rc1wiLFxuICBcInNsdWdcIjogXCIvYXBpL2hvb2tzL3VzZUVjb3N5c3RlbVwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9ob29rcy91c2VFY29zeXN0ZW1cIixcbiAgXCJkcmFmdFwiOiBmYWxzZSxcbiAgXCJlZGl0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09tbmlzdGFjL3plZHV4L3RyZWUvbWFzdGVyL2RvY3MvYXBpL2hvb2tzL3VzZUVjb3N5c3RlbS5tZHhcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJ1c2VFY29zeXN0ZW1cIixcbiAgICBcInRpdGxlXCI6IFwidXNlRWNvc3lzdGVtXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcInVzZUF0b21WYWx1ZVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2hvb2tzL3VzZUF0b21WYWx1ZVwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImluamVjdEF0b21HZXR0ZXJzXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvaW5qZWN0b3JzL2luamVjdEF0b21HZXR0ZXJzXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cbmltcG9ydCB7IExlZ2VuZCwgSXRlbSwgTGluaywgVGFicywgVHMsIHRhYjEsIHRhYjIgfSBmcm9tICdAc2l0ZS9zcmMvYWxsJ1xuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnRXhhbXBsZXMnLFxuICBpZDogJ2V4YW1wbGVzJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdTaWduYXR1cmUnLFxuICBpZDogJ3NpZ25hdHVyZScsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2VlIEFsc28nLFxuICBpZDogJ3NlZS1hbHNvJyxcbiAgbGV2ZWw6IDJcbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgdXNlRWNvc3lzdGVtIH0gZnJvbSAnQHplZHV4L3JlYWN0J1xuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBIFJlYWN0IGhvb2sgdGhhdCByZXR1cm5zIGEgcmVmZXJlbmNlIHRvIHRoZSBuZWFyZXN0IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0Vjb3N5c3RlbVwiXG4gICAgICB9fT57YGVjb3N5c3RlbWB9PC9hPntgIHRoYXQncyBiZWVuIHByb3ZpZGVkIG92ZXIgUmVhY3QgY29udGV4dCB2aWEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2NvbXBvbmVudHMvRWNvc3lzdGVtUHJvdmlkZXJcIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YDxFY29zeXN0ZW1Qcm92aWRlcj5gfTwvaW5saW5lQ29kZT48L2E+e2AuIElmIG5vIGVjb3N5c3RlbSBoYXMgYmVlbiBwcm92aWRlZCwgWmVkdXggd2lsbCByZXR1cm4gdGhlIGdsb2JhbCBlY29zeXN0ZW0uIElmIHRoZSBnbG9iYWwgZWNvc3lzdGVtIGhhc24ndCBiZWVuIGNyZWF0ZWQgeWV0LCBaZWR1eCB3aWxsIGNyZWF0ZSBpdC5gfTwvcD5cbiAgICA8cD48YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uLy4uL3dhbGt0aHJvdWdoL2Vjb3N5c3RlbXNcIlxuICAgICAgfX0+e2BUaGUgZWNvc3lzdGVtcyB3YWxrdGhyb3VnaGB9PC9hPntgIGRldGFpbHMgd2hlbiBaZWR1eCB1c2VzIHdoaWNoIGVjb3N5c3RlbS5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJleGFtcGxlc1wiXG4gICAgfX0+e2BFeGFtcGxlc2B9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIGVjb3N5c3RlbUlkPXVzZUVjb3N5c3RlbS9zaW1wbGUtZXhhbXBsZSByZXN1bHRWYXI9U2Vjb25kc1wiLFxuICAgICAgICBcImxpdmVcIjogdHJ1ZSxcbiAgICAgICAgXCJlY29zeXN0ZW1JZFwiOiBcInVzZUVjb3N5c3RlbS9zaW1wbGUtZXhhbXBsZVwiLFxuICAgICAgICBcInJlc3VsdFZhclwiOiBcIlNlY29uZHNcIlxuICAgICAgfX0+e2Bjb25zdCBzZWNvbmRzQXRvbSA9IGF0b20oJ3NlY29uZHMnLCAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gaW5qZWN0U3RvcmUoMClcblxuICBpbmplY3RFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCgoKSA9PiBzdG9yZS5zZXRTdGF0ZSh2YWwgPT4gdmFsICsgMSksIDEwMDApXG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKVxuICB9LCBbXSlcblxuICByZXR1cm4gc3RvcmVcbn0pXG5cbmZ1bmN0aW9uIFNlY29uZHMoKSB7XG4gIGNvbnN0IGVjb3N5c3RlbSA9IHVzZUVjb3N5c3RlbSgpXG4gIGNvbnN0IGluc3RhbmNlID0gZWNvc3lzdGVtLmdldEluc3RhbmNlKHNlY29uZHNBdG9tKVxuICBjb25zdCBzdGF0ZSA9IHVzZUF0b21WYWx1ZShpbnN0YW5jZSlcblxuICByZXR1cm4gPGRpdj5TZWNvbmRzOiB7c3RhdGV9PC9kaXY+XG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIGVjb3N5c3RlbUlkPXVzZUVjb3N5c3RlbS9jb3VudGVycy1leGFtcGxlIHJlc3VsdFZhcj1BcHBcIixcbiAgICAgICAgXCJsaXZlXCI6IHRydWUsXG4gICAgICAgIFwiZWNvc3lzdGVtSWRcIjogXCJ1c2VFY29zeXN0ZW0vY291bnRlcnMtZXhhbXBsZVwiLFxuICAgICAgICBcInJlc3VsdFZhclwiOiBcIkFwcFwiXG4gICAgICB9fT57YGNvbnN0IHNlY29uZHNBdG9tID0gYXRvbSgnc2Vjb25kcycsIChzdGFydGluZ051bWJlcjogbnVtYmVyKSA9PiB7XG4gIGNvbnN0IHN0b3JlID0gaW5qZWN0U3RvcmUoc3RhcnRpbmdOdW1iZXIpXG5cbiAgaW5qZWN0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4gc3RvcmUuc2V0U3RhdGUodmFsID0+IHZhbCArIDEpLCAxMDAwKVxuXG4gICAgcmV0dXJuICgpID0+IGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIHN0b3JlXG59KVxuXG5mdW5jdGlvbiBGaXJzdCgpIHtcbiAgY29uc3Qgc2Vjb25kcyA9IHVzZUF0b21WYWx1ZShzZWNvbmRzQXRvbSwgWzBdKVxuXG4gIHJldHVybiA8ZGl2PkZpcnN0IFN0YXRlOiB7c2Vjb25kc308L2Rpdj5cbn1cblxuZnVuY3Rpb24gU2Vjb25kKCkge1xuICBjb25zdCBzZWNvbmRzID0gdXNlQXRvbVZhbHVlKHNlY29uZHNBdG9tLCBbMTBdKVxuXG4gIHJldHVybiA8ZGl2PlNlY29uZCBTdGF0ZToge3NlY29uZHN9PC9kaXY+XG59XG5cbmZ1bmN0aW9uIEFwcCgpIHtcbiAgY29uc3QgW2lzU3RhcnRlZCwgc2V0SXNTdGFydGVkXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbaXNGaXJzdCwgc2V0SXNGaXJzdF0gPSB1c2VTdGF0ZSh0cnVlKVxuICBjb25zdCBlY29zeXN0ZW0gPSB1c2VFY29zeXN0ZW0oKVxuXG4gIGNvbnN0IHN0YXJ0ID0gKCkgPT4ge1xuICAgIHNldElzU3RhcnRlZCh0cnVlKVxuXG4gICAgLy8gcHJlbG9hZCBib3RoIGNvdW50ZXJzLCBzbyB0aGV5IHN0YXJ0IGF0IHRoZSBzYW1lIHRpbWU6XG4gICAgZWNvc3lzdGVtLmdldEluc3RhbmNlKHNlY29uZHNBdG9tLCBbMF0pXG4gICAgZWNvc3lzdGVtLmdldEluc3RhbmNlKHNlY29uZHNBdG9tLCBbMTBdKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgeyFpc1N0YXJ0ZWQgPyAoXG4gICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnR9PlN0YXJ0IENvdW50aW5nITwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPD5cbiAgICAgICAgICB7aXNGaXJzdCA/IDxGaXJzdCAvPiA6IDxTZWNvbmQgLz59XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzZXRJc0ZpcnN0KHZhbCA9PiAhdmFsKX0+VG9nZ2xlIFZpZXc8L2J1dHRvbj5cbiAgICAgICAgPC8+XG4gICAgICApfVxuICAgIDwvPlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YEdsb2JhbCBhbmQgY3VzdG9tIGVjb3N5c3RlbXM6YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c3hcIlxuICAgICAgfX0+e2BmdW5jdGlvbiBDaGlsZCgpIHtcbiAgY29uc3QgZWNvc3lzdGVtID0gdXNlRWNvc3lzdGVtKCkgLy8geyBpZDogJ3Jvb3QnLCAuLi4gfVxuICAuLi5cbn1cblxuZnVuY3Rpb24gQXBwKCkge1xuICBjb25zdCBlY29zeXN0ZW0gPSB1c2VFY29zeXN0ZW0oKSAvLyB7IGlkOiAnQEBnbG9iYWwnIC4uLiB9XG5cbiAgcmV0dXJuIChcbiAgICA8RWNvc3lzdGVtUHJvdmlkZXIgaWQ9XCJyb290XCI+XG4gICAgICA8Q2hpbGQgLz5cbiAgICA8L0Vjb3N5c3RlbVByb3ZpZGVyPlxuICApXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzaWduYXR1cmVcIlxuICAgIH19PntgU2lnbmF0dXJlYH08L2gyPlxuICAgIDxUYWJzIG1keFR5cGU9XCJUYWJzXCI+XG4gIHt0YWIxKGB1c2VFY29zeXN0ZW0gPSAoKSA9PiBlY29zeXN0ZW1gKX1cbiAge3RhYjIoYGRlY2xhcmUgY29uc3QgdXNlRWNvc3lzdGVtOiAoKSA9PiBFY29zeXN0ZW08YW55PmApfVxuICAgIDwvVGFicz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgPEl0ZW0gbmFtZT1cIlJldHVybnNcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgQW4gPExpbmsgdG89XCIuLi9jbGFzc2VzL0Vjb3N5c3RlbVwiIG1keFR5cGU9XCJMaW5rXCI+ZWNvc3lzdGVtPC9MaW5rPiBvYmplY3QuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgVGhpcyBpcyB0aGUgPGNvZGU+Z2xvYmFsPC9jb2RlPiBlY29zeXN0ZW0gaWYgbm8gZWNvc3lzdGVtIGhhcyBiZWVuXG4gICAgICBwcm92aWRlZCBhYm92ZSB0aGlzIGNvbXBvbmVudCB2aWEgYW57JyAnfVxuICAgICAgPExpbmsgdG89XCIuLi9jb21wb25lbnRzL0Vjb3N5c3RlbVByb3ZpZGVyXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgPGNvZGU+Jmx0O0Vjb3N5c3RlbVByb3ZpZGVyJmd0OzwvY29kZT5cbiAgICAgIDwvTGluaz5cbiAgICAgIC4gSWYgYW4gZWNvc3lzdGVtIGhhcyBiZWVuIHByb3ZpZGVkLCB0aGlzIGlzIGEgcmVmZXJlbmNlIHRvIHRoYXQgZWNvc3lzdGVtLlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICAgIDwvTGVnZW5kPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlZS1hbHNvXCJcbiAgICB9fT57YFNlZSBBbHNvYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uL2luamVjdG9ycy9pbmplY3RBdG9tR2V0dGVyc1wiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RBdG9tR2V0dGVycygpYH08L2lubGluZUNvZGU+PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi8uLi93YWxrdGhyb3VnaC9lY29zeXN0ZW1zXCJcbiAgICAgICAgfX0+e2BUaGUgRWNvc3lzdGVtcyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9jb21wb25lbnRzL0Vjb3N5c3RlbVByb3ZpZGVyXCJcbiAgICAgICAgfX0+e2BUaGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgPEVjb3N5c3RlbVByb3ZpZGVyPmB9PC9pbmxpbmVDb2RlPntgIGNvbXBvbmVudGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0Vjb3N5c3RlbVwiXG4gICAgICAgIH19PntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YEVjb3N5c3RlbWB9PC9pbmxpbmVDb2RlPntgIGNsYXNzYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJMZWdlbmQiLCJJdGVtIiwiTGluayIsIlRhYnMiLCJUcyIsInRhYjEiLCJ0YWIyIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4965\n')}}]);
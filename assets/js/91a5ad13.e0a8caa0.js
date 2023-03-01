"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[4559],{6098:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'AtomSelectorConfig\',title:\'AtomSelectorConfig\'};var contentTitle=undefined;var metadata={"unversionedId":"api/types/AtomSelectorConfig","id":"api/types/AtomSelectorConfig","title":"AtomSelectorConfig","description":"Everywhere Zedux accepts an AtomSelector, it also accepts an AtomSelectorConfig object. This object has a required selector field and a few optional fields used to configure the selector.","source":"@site/docs/api/types/AtomSelectorConfig.mdx","sourceDirName":"api/types","slug":"/api/types/AtomSelectorConfig","permalink":"/zedux/docs/api/types/AtomSelectorConfig","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/types/AtomSelectorConfig.mdx","tags":[],"version":"current","frontMatter":{"id":"AtomSelectorConfig","title":"AtomSelectorConfig"},"sidebar":"react","previous":{"title":"AtomSelector","permalink":"/zedux/docs/api/types/AtomSelector"},"next":{"title":"DependentCallback","permalink":"/zedux/docs/api/types/DependentCallback"}};var assets={};var toc=[{value:\'Examples\',id:\'examples\',level:2},{value:\'Definition\',id:\'definition\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Everywhere Zedux accepts an AtomSelector, it also accepts an AtomSelectorConfig object. This object has a required ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"selector")," field and a few optional fields used to configure the selector."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"It is recommended to set the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"name")," field for optimal debugging when viewing the atom graph since Zedux can\'t derive a useful name from AtomSelectorConfig objects like it can with named AtomSelector functions. You can also make the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"selector")," field a named function instead of using an anonymous function."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=AtomSelector/example resultVar=CountBy5","live":true,"ecosystemId":"AtomSelector/example","resultVar":"CountBy5"},"const counterAtom = atom(\'counter\', 0)\\n\\nfunction CountBy5() {\\n  const { setState } = useAtomInstance(counterAtom)\\n  const counter = useAtomSelector({\\n    name: \'getCounter\',\\n    resultsComparator: newCount => newCount % 5,\\n    selector: ({ get }) => get(counterAtom),\\n  })\\n\\n  return (\\n    <>\\n      <div>Value: {counter}</div>\\n      <button onClick={() => setState(state => state + 1)}>\\n        Increment (click me 5 times)\\n      </button>\\n    </>\\n  )\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"AtomSelectors sometimes have config that\'s inherent to how they operate. Rather than exporting the selector function and requiring consumers to specify the config, export the config object itself (tightly coupling the selector to its mandatory config):")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// instead of:\\nexport const getUserSnapshot = ({ get }: AtomGetters) => get(currentUserAtom)\\n...\\nselect({\\n  resultsComparator: (a, b) => a.id === b.id,\\n  selector: getUserSnapshot,\\n})\\n\\n// do:\\nexport const getUserSnapshot = {\\n  name: \'getUserSnapshot\', // recommended if using an anonymous function\\n  resultsComparator: (a, b) => a.id === b.id,\\n  selector: ({ get }) => get(currentUserAtom)\\n}\\n...\\nselect(getUserSnapshot)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Miscellaneous:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// Inline:\\nuseAtomSelector({\\n  argsComparator: (newVal, oldVal) => Math.abs(newVal - oldVal) > 5,\\n  name: \'timesTwo\',\\n  selector: ({ get }: AtomGetters) => get(myAtom) * 2,\\n})\\n\\n// Extracted:\\nconst timesTwo = {\\n  argsComparator: (newVal, oldVal) => Math.abs(newVal - oldVal) > 5,\\n  name: \'timesTwo\',\\n  selector: ({ get }) => get(myAtom) * 2,\\n}\\nuseAtomSelector(timesTwo)\\n\\n// With arguments:\\nconst timesTwoPlusWhatever = {\\n  argsComparator: (newVal, oldVal) => Math.abs(newVal - oldVal) > 5,\\n  name: \'timesTwo\',\\n  selector: ({ get }, whatever: number) => get(myAtom) * 2 + whatever,\\n}\\nuseAtomSelector(timesTwoPlusWhatever, 3)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"definition"},"Definition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("atomSelectorConfig = { argsComparator?, name?, resultsComparator?, selector }"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("interface AtomSelectorConfig<T = any, Args extends any[] = []> {\\n  argsComparator?: (newArgs: Args, oldArgs: Args) => boolean\\n  name?: string\\n  resultsComparator?: (newResult: T, oldResult: T) => boolean\\n  selector: AtomSelector<T, Args>\\n}")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"argsComparator",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("b",null,"Important!")," This config option is only respected in",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../hooks/useAtomSelector",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"useAtomSelector()")),". It is ignored in all other AtomSelector-related APIs. This is because selectors are given completely different cache entries when different args are passed. However ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"useAtomSelector()")," does some special optimizations. Regardless, because of this limitation, this config option is rarely useful."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. A function. Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"(newArgs, oldArgs) => areEqual"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accepts two arrays - the list of arguments most recently passed and the list of arguments passed previously."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Return true if ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"useAtomSelector()")," should consider both lists the \\"same\\", preventing the selector from reevaluating. Return false to force the selector to reevaluate."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This function is only called after the selector has already run once (otherwise there wouldn\'t be any ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"oldArgs"),").")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"name",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. A string."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"It is highly recommended to pass this when passing an anonymous function as the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"selector"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux uses this name to create the node\'s key in the graph. For your debugging pleasure, always try to make sure selectors are named functions or specify this config option.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"resultsComparator",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. A function. Signature:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__.Ts,{mdxType:"Ts"},"(newResult, oldResult) => areEqual"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Accepts the previously-cached result of running this selector and the new result that Zedux is about to cache."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Return true if Zedux should consider both results equal, preventing the cache from updating and all dependents from reevaluating. Return false to force all dependents to reevaluate."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This function is only called after the selector has already run once (otherwise there wouldn\'t be any ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"oldResult"),").")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"selector",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Required. The actual ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"AtomSelector",mdxType:"Link"},"AtomSelector")," function you\'re configuring."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If passing an anonymous function, it\'s recommended to also specify the",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"name")," property."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/selectors"},"The Selectors walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"AtomSelector"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"AtomSelector")," type"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSw2QkFBNkIsOEJBQ0gsQ0FBSyxDQUMzQyxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSxjQUFjLFNBQ2IsMkVBQVksVUFBVSxDQUFDLEdBQUcsaUJBQThCLFNBQWEsQ0FBSyxDQUNwRixDQUNPLENBQ2hCLENBQ0EsQ0FDQU0sVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FwaS90eXBlcy9BdG9tU2VsZWN0b3JDb25maWcubWR4PzA0MmQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ0F0b21TZWxlY3RvckNvbmZpZycsXG5cdHRpdGxlOiAnQXRvbVNlbGVjdG9yQ29uZmlnJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFwaS90eXBlcy9BdG9tU2VsZWN0b3JDb25maWdcIixcbiAgXCJpZFwiOiBcImFwaS90eXBlcy9BdG9tU2VsZWN0b3JDb25maWdcIixcbiAgXCJ0aXRsZVwiOiBcIkF0b21TZWxlY3RvckNvbmZpZ1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiRXZlcnl3aGVyZSBaZWR1eCBhY2NlcHRzIGFuIEF0b21TZWxlY3RvciwgaXQgYWxzbyBhY2NlcHRzIGFuIEF0b21TZWxlY3RvckNvbmZpZyBvYmplY3QuIFRoaXMgb2JqZWN0IGhhcyBhIHJlcXVpcmVkIHNlbGVjdG9yIGZpZWxkIGFuZCBhIGZldyBvcHRpb25hbCBmaWVsZHMgdXNlZCB0byBjb25maWd1cmUgdGhlIHNlbGVjdG9yLlwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYXBpL3R5cGVzL0F0b21TZWxlY3RvckNvbmZpZy5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYXBpL3R5cGVzXCIsXG4gIFwic2x1Z1wiOiBcIi9hcGkvdHlwZXMvQXRvbVNlbGVjdG9yQ29uZmlnXCIsXG4gIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL3R5cGVzL0F0b21TZWxlY3RvckNvbmZpZ1wiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvdHlwZXMvQXRvbVNlbGVjdG9yQ29uZmlnLm1keFwiLFxuICBcInRhZ3NcIjogW10sXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJmcm9udE1hdHRlclwiOiB7XG4gICAgXCJpZFwiOiBcIkF0b21TZWxlY3RvckNvbmZpZ1wiLFxuICAgIFwidGl0bGVcIjogXCJBdG9tU2VsZWN0b3JDb25maWdcIlxuICB9LFxuICBcInNpZGViYXJcIjogXCJyZWFjdFwiLFxuICBcInByZXZpb3VzXCI6IHtcbiAgICBcInRpdGxlXCI6IFwiQXRvbVNlbGVjdG9yXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdHlwZXMvQXRvbVNlbGVjdG9yXCJcbiAgfSxcbiAgXCJuZXh0XCI6IHtcbiAgICBcInRpdGxlXCI6IFwiRGVwZW5kZW50Q2FsbGJhY2tcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS90eXBlcy9EZXBlbmRlbnRDYWxsYmFja1wiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgYXNzZXRzID0ge1xuXG59O1xuXG5pbXBvcnQgeyBMZWdlbmQsIEl0ZW0sIExpbmssIFRhYnMsIFRzLCB0YWIxLCB0YWIyIH0gZnJvbSAnQHNpdGUvc3JjL2FsbCdcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0V4YW1wbGVzJyxcbiAgaWQ6ICdleGFtcGxlcycsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnRGVmaW5pdGlvbicsXG4gIGlkOiAnZGVmaW5pdGlvbicsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2VlIEFsc28nLFxuICBpZDogJ3NlZS1hbHNvJyxcbiAgbGV2ZWw6IDJcbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG5cbiAgICA8cD57YEV2ZXJ5d2hlcmUgWmVkdXggYWNjZXB0cyBhbiBBdG9tU2VsZWN0b3IsIGl0IGFsc28gYWNjZXB0cyBhbiBBdG9tU2VsZWN0b3JDb25maWcgb2JqZWN0LiBUaGlzIG9iamVjdCBoYXMgYSByZXF1aXJlZCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzZWxlY3RvcmB9PC9pbmxpbmVDb2RlPntgIGZpZWxkIGFuZCBhIGZldyBvcHRpb25hbCBmaWVsZHMgdXNlZCB0byBjb25maWd1cmUgdGhlIHNlbGVjdG9yLmB9PC9wPlxuICAgIDxwPntgSXQgaXMgcmVjb21tZW5kZWQgdG8gc2V0IHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BuYW1lYH08L2lubGluZUNvZGU+e2AgZmllbGQgZm9yIG9wdGltYWwgZGVidWdnaW5nIHdoZW4gdmlld2luZyB0aGUgYXRvbSBncmFwaCBzaW5jZSBaZWR1eCBjYW4ndCBkZXJpdmUgYSB1c2VmdWwgbmFtZSBmcm9tIEF0b21TZWxlY3RvckNvbmZpZyBvYmplY3RzIGxpa2UgaXQgY2FuIHdpdGggbmFtZWQgQXRvbVNlbGVjdG9yIGZ1bmN0aW9ucy4gWW91IGNhbiBhbHNvIG1ha2UgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHNlbGVjdG9yYH08L2lubGluZUNvZGU+e2AgZmllbGQgYSBuYW1lZCBmdW5jdGlvbiBpbnN0ZWFkIG9mIHVzaW5nIGFuIGFub255bW91cyBmdW5jdGlvbi5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJleGFtcGxlc1wiXG4gICAgfX0+e2BFeGFtcGxlc2B9PC9oMj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzeFwiLFxuICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIGVjb3N5c3RlbUlkPUF0b21TZWxlY3Rvci9leGFtcGxlIHJlc3VsdFZhcj1Db3VudEJ5NVwiLFxuICAgICAgICBcImxpdmVcIjogdHJ1ZSxcbiAgICAgICAgXCJlY29zeXN0ZW1JZFwiOiBcIkF0b21TZWxlY3Rvci9leGFtcGxlXCIsXG4gICAgICAgIFwicmVzdWx0VmFyXCI6IFwiQ291bnRCeTVcIlxuICAgICAgfX0+e2Bjb25zdCBjb3VudGVyQXRvbSA9IGF0b20oJ2NvdW50ZXInLCAwKVxuXG5mdW5jdGlvbiBDb3VudEJ5NSgpIHtcbiAgY29uc3QgeyBzZXRTdGF0ZSB9ID0gdXNlQXRvbUluc3RhbmNlKGNvdW50ZXJBdG9tKVxuICBjb25zdCBjb3VudGVyID0gdXNlQXRvbVNlbGVjdG9yKHtcbiAgICBuYW1lOiAnZ2V0Q291bnRlcicsXG4gICAgcmVzdWx0c0NvbXBhcmF0b3I6IG5ld0NvdW50ID0+IG5ld0NvdW50ICUgNSxcbiAgICBzZWxlY3RvcjogKHsgZ2V0IH0pID0+IGdldChjb3VudGVyQXRvbSksXG4gIH0pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdj5WYWx1ZToge2NvdW50ZXJ9PC9kaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFN0YXRlKHN0YXRlID0+IHN0YXRlICsgMSl9PlxuICAgICAgICBJbmNyZW1lbnQgKGNsaWNrIG1lIDUgdGltZXMpXG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGFkbW9uaXRpb24gey4uLntcbiAgICAgIFwidHlwZVwiOiBcInRpcFwiXG4gICAgfX0+PHAgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj57YEF0b21TZWxlY3RvcnMgc29tZXRpbWVzIGhhdmUgY29uZmlnIHRoYXQncyBpbmhlcmVudCB0byBob3cgdGhleSBvcGVyYXRlLiBSYXRoZXIgdGhhbiBleHBvcnRpbmcgdGhlIHNlbGVjdG9yIGZ1bmN0aW9uIGFuZCByZXF1aXJpbmcgY29uc3VtZXJzIHRvIHNwZWNpZnkgdGhlIGNvbmZpZywgZXhwb3J0IHRoZSBjb25maWcgb2JqZWN0IGl0c2VsZiAodGlnaHRseSBjb3VwbGluZyB0aGUgc2VsZWN0b3IgdG8gaXRzIG1hbmRhdG9yeSBjb25maWcpOmB9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgLy8gaW5zdGVhZCBvZjpcbmV4cG9ydCBjb25zdCBnZXRVc2VyU25hcHNob3QgPSAoeyBnZXQgfTogQXRvbUdldHRlcnMpID0+IGdldChjdXJyZW50VXNlckF0b20pXG4uLi5cbnNlbGVjdCh7XG4gIHJlc3VsdHNDb21wYXJhdG9yOiAoYSwgYikgPT4gYS5pZCA9PT0gYi5pZCxcbiAgc2VsZWN0b3I6IGdldFVzZXJTbmFwc2hvdCxcbn0pXG5cbi8vIGRvOlxuZXhwb3J0IGNvbnN0IGdldFVzZXJTbmFwc2hvdCA9IHtcbiAgbmFtZTogJ2dldFVzZXJTbmFwc2hvdCcsIC8vIHJlY29tbWVuZGVkIGlmIHVzaW5nIGFuIGFub255bW91cyBmdW5jdGlvblxuICByZXN1bHRzQ29tcGFyYXRvcjogKGEsIGIpID0+IGEuaWQgPT09IGIuaWQsXG4gIHNlbGVjdG9yOiAoeyBnZXQgfSkgPT4gZ2V0KGN1cnJlbnRVc2VyQXRvbSlcbn1cbi4uLlxuc2VsZWN0KGdldFVzZXJTbmFwc2hvdClcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTWlzY2VsbGFuZW91czpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgLy8gSW5saW5lOlxudXNlQXRvbVNlbGVjdG9yKHtcbiAgYXJnc0NvbXBhcmF0b3I6IChuZXdWYWwsIG9sZFZhbCkgPT4gTWF0aC5hYnMobmV3VmFsIC0gb2xkVmFsKSA+IDUsXG4gIG5hbWU6ICd0aW1lc1R3bycsXG4gIHNlbGVjdG9yOiAoeyBnZXQgfTogQXRvbUdldHRlcnMpID0+IGdldChteUF0b20pICogMixcbn0pXG5cbi8vIEV4dHJhY3RlZDpcbmNvbnN0IHRpbWVzVHdvID0ge1xuICBhcmdzQ29tcGFyYXRvcjogKG5ld1ZhbCwgb2xkVmFsKSA9PiBNYXRoLmFicyhuZXdWYWwgLSBvbGRWYWwpID4gNSxcbiAgbmFtZTogJ3RpbWVzVHdvJyxcbiAgc2VsZWN0b3I6ICh7IGdldCB9KSA9PiBnZXQobXlBdG9tKSAqIDIsXG59XG51c2VBdG9tU2VsZWN0b3IodGltZXNUd28pXG5cbi8vIFdpdGggYXJndW1lbnRzOlxuY29uc3QgdGltZXNUd29QbHVzV2hhdGV2ZXIgPSB7XG4gIGFyZ3NDb21wYXJhdG9yOiAobmV3VmFsLCBvbGRWYWwpID0+IE1hdGguYWJzKG5ld1ZhbCAtIG9sZFZhbCkgPiA1LFxuICBuYW1lOiAndGltZXNUd28nLFxuICBzZWxlY3RvcjogKHsgZ2V0IH0sIHdoYXRldmVyOiBudW1iZXIpID0+IGdldChteUF0b20pICogMiArIHdoYXRldmVyLFxufVxudXNlQXRvbVNlbGVjdG9yKHRpbWVzVHdvUGx1c1doYXRldmVyLCAzKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZGVmaW5pdGlvblwiXG4gICAgfX0+e2BEZWZpbml0aW9uYH08L2gyPlxuICAgIDxUYWJzIG1keFR5cGU9XCJUYWJzXCI+XG4gIHt0YWIxKGBhdG9tU2VsZWN0b3JDb25maWcgPSB7IGFyZ3NDb21wYXJhdG9yPywgbmFtZT8sIHJlc3VsdHNDb21wYXJhdG9yPywgc2VsZWN0b3IgfWApfVxuICB7dGFiMihgaW50ZXJmYWNlIEF0b21TZWxlY3RvckNvbmZpZzxUID0gYW55LCBBcmdzIGV4dGVuZHMgYW55W10gPSBbXT4ge1xuICBhcmdzQ29tcGFyYXRvcj86IChuZXdBcmdzOiBBcmdzLCBvbGRBcmdzOiBBcmdzKSA9PiBib29sZWFuXG4gIG5hbWU/OiBzdHJpbmdcbiAgcmVzdWx0c0NvbXBhcmF0b3I/OiAobmV3UmVzdWx0OiBULCBvbGRSZXN1bHQ6IFQpID0+IGJvb2xlYW5cbiAgc2VsZWN0b3I6IEF0b21TZWxlY3RvcjxULCBBcmdzPlxufWApfVxuICAgIDwvVGFicz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgPEl0ZW0gbmFtZT1cImFyZ3NDb21wYXJhdG9yXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIDxiPkltcG9ydGFudCE8L2I+IFRoaXMgY29uZmlnIG9wdGlvbiBpcyBvbmx5IHJlc3BlY3RlZCBpbnsnICd9XG4gICAgICA8TGluayB0bz1cIi4uL2hvb2tzL3VzZUF0b21TZWxlY3RvclwiIG1keFR5cGU9XCJMaW5rXCI+XG4gICAgICAgIDxjb2RlPnVzZUF0b21TZWxlY3RvcigpPC9jb2RlPlxuICAgICAgPC9MaW5rPlxuICAgICAgLiBJdCBpcyBpZ25vcmVkIGluIGFsbCBvdGhlciBBdG9tU2VsZWN0b3ItcmVsYXRlZCBBUElzLiBUaGlzIGlzIGJlY2F1c2Ugc2VsZWN0b3JzXG4gICAgICBhcmUgZ2l2ZW4gY29tcGxldGVseSBkaWZmZXJlbnQgY2FjaGUgZW50cmllcyB3aGVuIGRpZmZlcmVudCBhcmdzIGFyZSBwYXNzZWQuXG4gICAgICBIb3dldmVyIDxjb2RlPnVzZUF0b21TZWxlY3RvcigpPC9jb2RlPiBkb2VzIHNvbWUgc3BlY2lhbCBvcHRpbWl6YXRpb25zLiBSZWdhcmRsZXNzLFxuICAgICAgYmVjYXVzZSBvZiB0aGlzIGxpbWl0YXRpb24sIHRoaXMgY29uZmlnIG9wdGlvbiBpcyByYXJlbHkgdXNlZnVsLlxuICAgIDwvcD5cbiAgICA8cD5PcHRpb25hbC4gQSBmdW5jdGlvbi4gU2lnbmF0dXJlOjwvcD5cbiAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2AobmV3QXJncywgb2xkQXJncykgPT4gYXJlRXF1YWxgfTwvVHM+XG4gICAgPHA+XG4gICAgICBBY2NlcHRzIHR3byBhcnJheXMgLSB0aGUgbGlzdCBvZiBhcmd1bWVudHMgbW9zdCByZWNlbnRseSBwYXNzZWQgYW5kIHRoZVxuICAgICAgbGlzdCBvZiBhcmd1bWVudHMgcGFzc2VkIHByZXZpb3VzbHkuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgUmV0dXJuIHRydWUgaWYgPGNvZGU+dXNlQXRvbVNlbGVjdG9yKCk8L2NvZGU+IHNob3VsZCBjb25zaWRlciBib3RoIGxpc3RzXG4gICAgICB0aGUgXCJzYW1lXCIsIHByZXZlbnRpbmcgdGhlIHNlbGVjdG9yIGZyb20gcmVldmFsdWF0aW5nLiBSZXR1cm4gZmFsc2UgdG9cbiAgICAgIGZvcmNlIHRoZSBzZWxlY3RvciB0byByZWV2YWx1YXRlLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRoaXMgZnVuY3Rpb24gaXMgb25seSBjYWxsZWQgYWZ0ZXIgdGhlIHNlbGVjdG9yIGhhcyBhbHJlYWR5IHJ1biBvbmNlXG4gICAgICAob3RoZXJ3aXNlIHRoZXJlIHdvdWxkbid0IGJlIGFueSA8Y29kZT5vbGRBcmdzPC9jb2RlPikuXG4gICAgPC9wPlxuICA8L0l0ZW0+XG4gIDxJdGVtIG5hbWU9XCJuYW1lXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5PcHRpb25hbC4gQSBzdHJpbmcuPC9wPlxuICAgIDxwPlxuICAgICAgSXQgaXMgaGlnaGx5IHJlY29tbWVuZGVkIHRvIHBhc3MgdGhpcyB3aGVuIHBhc3NpbmcgYW4gYW5vbnltb3VzIGZ1bmN0aW9uXG4gICAgICBhcyB0aGUgPGNvZGU+c2VsZWN0b3I8L2NvZGU+LlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFplZHV4IHVzZXMgdGhpcyBuYW1lIHRvIGNyZWF0ZSB0aGUgbm9kZSdzIGtleSBpbiB0aGUgZ3JhcGguIEZvciB5b3VyXG4gICAgICBkZWJ1Z2dpbmcgcGxlYXN1cmUsIGFsd2F5cyB0cnkgdG8gbWFrZSBzdXJlIHNlbGVjdG9ycyBhcmUgbmFtZWQgZnVuY3Rpb25zXG4gICAgICBvciBzcGVjaWZ5IHRoaXMgY29uZmlnIG9wdGlvbi5cbiAgICA8L3A+XG4gIDwvSXRlbT5cbiAgPEl0ZW0gbmFtZT1cInJlc3VsdHNDb21wYXJhdG9yXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5PcHRpb25hbC4gQSBmdW5jdGlvbi4gU2lnbmF0dXJlOjwvcD5cbiAgICA8VHMgbWR4VHlwZT1cIlRzXCI+e2AobmV3UmVzdWx0LCBvbGRSZXN1bHQpID0+IGFyZUVxdWFsYH08L1RzPlxuICAgIDxwPlxuICAgICAgQWNjZXB0cyB0aGUgcHJldmlvdXNseS1jYWNoZWQgcmVzdWx0IG9mIHJ1bm5pbmcgdGhpcyBzZWxlY3RvciBhbmQgdGhlIG5ld1xuICAgICAgcmVzdWx0IHRoYXQgWmVkdXggaXMgYWJvdXQgdG8gY2FjaGUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgUmV0dXJuIHRydWUgaWYgWmVkdXggc2hvdWxkIGNvbnNpZGVyIGJvdGggcmVzdWx0cyBlcXVhbCwgcHJldmVudGluZyB0aGVcbiAgICAgIGNhY2hlIGZyb20gdXBkYXRpbmcgYW5kIGFsbCBkZXBlbmRlbnRzIGZyb20gcmVldmFsdWF0aW5nLiBSZXR1cm4gZmFsc2UgdG9cbiAgICAgIGZvcmNlIGFsbCBkZXBlbmRlbnRzIHRvIHJlZXZhbHVhdGUuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgVGhpcyBmdW5jdGlvbiBpcyBvbmx5IGNhbGxlZCBhZnRlciB0aGUgc2VsZWN0b3IgaGFzIGFscmVhZHkgcnVuIG9uY2VcbiAgICAgIChvdGhlcndpc2UgdGhlcmUgd291bGRuJ3QgYmUgYW55IDxjb2RlPm9sZFJlc3VsdDwvY29kZT4pLlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwic2VsZWN0b3JcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgUmVxdWlyZWQuIFRoZSBhY3R1YWwgPExpbmsgdG89XCJBdG9tU2VsZWN0b3JcIiBtZHhUeXBlPVwiTGlua1wiPkF0b21TZWxlY3RvcjwvTGluaz4gZnVuY3Rpb25cbiAgICAgIHlvdSdyZSBjb25maWd1cmluZy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBJZiBwYXNzaW5nIGFuIGFub255bW91cyBmdW5jdGlvbiwgaXQncyByZWNvbW1lbmRlZCB0byBhbHNvIHNwZWNpZnkgdGhleycgJ31cbiAgICAgIDxjb2RlPm5hbWU8L2NvZGU+IHByb3BlcnR5LlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICAgIDwvTGVnZW5kPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlZS1hbHNvXCJcbiAgICB9fT57YFNlZSBBbHNvYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uLy4uL3dhbGt0aHJvdWdoL3NlbGVjdG9yc1wiXG4gICAgICAgIH19PntgVGhlIFNlbGVjdG9ycyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJBdG9tU2VsZWN0b3JcIlxuICAgICAgICB9fT57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BBdG9tU2VsZWN0b3JgfTwvaW5saW5lQ29kZT57YCB0eXBlYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJMZWdlbmQiLCJJdGVtIiwiTGluayIsIlRhYnMiLCJUcyIsInRhYjEiLCJ0YWIyIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///6098\n')}}]);
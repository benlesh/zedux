"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[1056],{3811:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'custom-injectors\',title:\'Custom Injectors\'};var contentTitle=undefined;var metadata={"unversionedId":"walkthrough/custom-injectors","id":"walkthrough/custom-injectors","title":"Custom Injectors","description":"If you use React, you\'ve probably written custom hooks. These are functions whose names start with use and that compose other hooks.","source":"@site/docs/walkthrough/custom-injectors.mdx","sourceDirName":"walkthrough","slug":"/walkthrough/custom-injectors","permalink":"/zedux/docs/walkthrough/custom-injectors","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/walkthrough/custom-injectors.mdx","tags":[],"version":"current","frontMatter":{"id":"custom-injectors","title":"Custom Injectors"},"sidebar":"react","previous":{"title":"Side Effects","permalink":"/zedux/docs/walkthrough/side-effects"},"next":{"title":"Resets","permalink":"/zedux/docs/walkthrough/resets"}};var assets={};var toc=[{value:\'Rules\',id:\'rules\',level:2},{value:\'An Example\',id:\'an-example\',level:2},{value:\'Using Atom APIs\',id:\'using-atom-apis\',level:2},{value:\'Recap\',id:\'recap\',level:2},{value:\'Next Steps\',id:\'next-steps\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If you use React, you\'ve probably written custom hooks. These are functions whose names start with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"use")," and that compose other hooks."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In Zedux, we have the same thing but for injectors. Custom injectors are just functions whose names start with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"inject")," and that compose other injectors."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"you will learn","type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"How to create, compose, and use custom injectors")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"rules"},"Rules"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Custom injectors can do almost anything you want. They\'re Just JavaScript. Remember these rules:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Injectors should start with the word \\"inject\\" - e.g. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"injectUserStream")," or ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"injectFetchUser"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Injectors contain calls to other injectors. Those can be built-in injectors or other custom ones. If the function doesn\'t call other injectors, it isn\'t an injector."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Injectors are composable. Your injector should be able to be used by other injectors. You\'ll probably never need to worry about this; most logic you might put in an injector should be fine.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"an-example"},"An Example"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"quick-start"},"quick start"),", we referenced a theoretical custom ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectFetch")," injector. Let\'s create it for real:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const injectFetch = (url: string) => {\\n  const store = injectStore({ status: \'loading\' })\\n\\n  injectEffect(async () => {\\n    try {\\n      const result = await fetch(url)\\n      const data = await result.json()\\n\\n      store.setState({ data, status: \'success\' })\\n    } catch (err) {\\n      store.setState({ error: err, status: \'error\' })\\n    }\\n  }, [url])\\n\\n  return api(store).setPromise(promise)\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Now we can use this injector to fetch data in any other atom:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const usersAtom = atom(\'users\', () => {\\n  const { store } = injectFetch(\'/api/users\')\\n\\n  return store\\n})\\n\\nconst friendsAtom = atom(\'friends\', () => {\\n  return injectFetch(\'/api/friends\')\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Notice that in ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"usersAtom")," we returned only the store, while in ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"friendsAtom")," we returned the entire Atom API from ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectFetch"),". Let\'s take a closer look at this flexibility afforded by Atom APIs:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"using-atom-apis"},"Using Atom APIs"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Atom instances have 3 \\"meta data types\\" that you\'ll find yourself working with a lot in your state factories and custom injectors:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"State (usually inside stores)"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Exports"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Promises")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"atom-apis"},"Atom API")," is a standard way to pass these 3 things around."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// This Atom API is essentially a container for the 3 meta data types:\\nconst myApi = api(myStore).setExports(myExports).setPromise(myPromise)\\n\\n// we can access all 3 easily:\\nconst { exports, promise, store } = myApi\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Atom APIs are designed to be passed around between injectors and ultimately composed together into a single Atom API that gets returned from your state factory. You can of course pass stuff around however you want, but the Atom API is a useful standard for this."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../api/injectors/injectPromise"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectPromise()"))," itself uses this pattern - returning an Atom API with a store and promise attached.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"recap"},"Recap"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Custom injectors can encapsulate any logic you want"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Atom APIs are a convenient standard for passing stores, exports, and promises around")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"next-steps"},"Next Steps"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Custom injectors have many uses. Let\'s look at using them to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"resets"},"reset atoms"),"."));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bUVBQ0UsSUFBSSxDQUFFLFlBQVksZUFDRSxDQUN0QixzSUFBb0Usa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDakYsTUFBTSxDQUFFLFFBQVEsZ0JBQ0ksS0FBUyxDQUNyQixDQUNoQixDQUNBLENBQ0FELFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy93YWxrdGhyb3VnaC9jdXN0b20taW5qZWN0b3JzLm1keD9hYWE5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdjdXN0b20taW5qZWN0b3JzJyxcblx0dGl0bGU6ICdDdXN0b20gSW5qZWN0b3JzJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcIndhbGt0aHJvdWdoL2N1c3RvbS1pbmplY3RvcnNcIixcbiAgXCJpZFwiOiBcIndhbGt0aHJvdWdoL2N1c3RvbS1pbmplY3RvcnNcIixcbiAgXCJ0aXRsZVwiOiBcIkN1c3RvbSBJbmplY3RvcnNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIklmIHlvdSB1c2UgUmVhY3QsIHlvdSd2ZSBwcm9iYWJseSB3cml0dGVuIGN1c3RvbSBob29rcy4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB3aG9zZSBuYW1lcyBzdGFydCB3aXRoIHVzZSBhbmQgdGhhdCBjb21wb3NlIG90aGVyIGhvb2tzLlwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3Mvd2Fsa3Rocm91Z2gvY3VzdG9tLWluamVjdG9ycy5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwid2Fsa3Rocm91Z2hcIixcbiAgXCJzbHVnXCI6IFwiL3dhbGt0aHJvdWdoL2N1c3RvbS1pbmplY3RvcnNcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy93YWxrdGhyb3VnaC9jdXN0b20taW5qZWN0b3JzXCIsXG4gIFwiZHJhZnRcIjogZmFsc2UsXG4gIFwiZWRpdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9PbW5pc3RhYy96ZWR1eC90cmVlL21hc3Rlci9kb2NzL3dhbGt0aHJvdWdoL2N1c3RvbS1pbmplY3RvcnMubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwiY3VzdG9tLWluamVjdG9yc1wiLFxuICAgIFwidGl0bGVcIjogXCJDdXN0b20gSW5qZWN0b3JzXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlNpZGUgRWZmZWN0c1wiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3Mvd2Fsa3Rocm91Z2gvc2lkZS1lZmZlY3RzXCJcbiAgfSxcbiAgXCJuZXh0XCI6IHtcbiAgICBcInRpdGxlXCI6IFwiUmVzZXRzXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy93YWxrdGhyb3VnaC9yZXNldHNcIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdSdWxlcycsXG4gIGlkOiAncnVsZXMnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ0FuIEV4YW1wbGUnLFxuICBpZDogJ2FuLWV4YW1wbGUnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1VzaW5nIEF0b20gQVBJcycsXG4gIGlkOiAndXNpbmctYXRvbS1hcGlzJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdSZWNhcCcsXG4gIGlkOiAncmVjYXAnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ05leHQgU3RlcHMnLFxuICBpZDogJ25leHQtc3RlcHMnLFxuICBsZXZlbDogMlxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8cD57YElmIHlvdSB1c2UgUmVhY3QsIHlvdSd2ZSBwcm9iYWJseSB3cml0dGVuIGN1c3RvbSBob29rcy4gVGhlc2UgYXJlIGZ1bmN0aW9ucyB3aG9zZSBuYW1lcyBzdGFydCB3aXRoIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHVzZWB9PC9pbmxpbmVDb2RlPntgIGFuZCB0aGF0IGNvbXBvc2Ugb3RoZXIgaG9va3MuYH08L3A+XG4gICAgPHA+e2BJbiBaZWR1eCwgd2UgaGF2ZSB0aGUgc2FtZSB0aGluZyBidXQgZm9yIGluamVjdG9ycy4gQ3VzdG9tIGluamVjdG9ycyBhcmUganVzdCBmdW5jdGlvbnMgd2hvc2UgbmFtZXMgc3RhcnQgd2l0aCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmplY3RgfTwvaW5saW5lQ29kZT57YCBhbmQgdGhhdCBjb21wb3NlIG90aGVyIGluamVjdG9ycy5gfTwvcD5cbiAgICA8YWRtb25pdGlvbiB7Li4ue1xuICAgICAgXCJ0aXRsZVwiOiBcInlvdSB3aWxsIGxlYXJuXCIsXG4gICAgICBcInR5cGVcIjogXCJ0aXBcIlxuICAgIH19PjxwIHBhcmVudE5hbWU9XCJhZG1vbml0aW9uXCI+e2BIb3cgdG8gY3JlYXRlLCBjb21wb3NlLCBhbmQgdXNlIGN1c3RvbSBpbmplY3RvcnNgfTwvcD48L2FkbW9uaXRpb24+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwicnVsZXNcIlxuICAgIH19PntgUnVsZXNgfTwvaDI+XG4gICAgPHA+e2BDdXN0b20gaW5qZWN0b3JzIGNhbiBkbyBhbG1vc3QgYW55dGhpbmcgeW91IHdhbnQuIFRoZXkncmUgSnVzdCBKYXZhU2NyaXB0LiBSZW1lbWJlciB0aGVzZSBydWxlczpgfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BJbmplY3RvcnMgc2hvdWxkIHN0YXJ0IHdpdGggdGhlIHdvcmQgXCJpbmplY3RcIiAtIGUuZy4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGluamVjdFVzZXJTdHJlYW1gfTwvaW5saW5lQ29kZT57YCBvciBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgaW5qZWN0RmV0Y2hVc2VyYH08L2lubGluZUNvZGU+e2AuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgSW5qZWN0b3JzIGNvbnRhaW4gY2FsbHMgdG8gb3RoZXIgaW5qZWN0b3JzLiBUaG9zZSBjYW4gYmUgYnVpbHQtaW4gaW5qZWN0b3JzIG9yIG90aGVyIGN1c3RvbSBvbmVzLiBJZiB0aGUgZnVuY3Rpb24gZG9lc24ndCBjYWxsIG90aGVyIGluamVjdG9ycywgaXQgaXNuJ3QgYW4gaW5qZWN0b3IuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgSW5qZWN0b3JzIGFyZSBjb21wb3NhYmxlLiBZb3VyIGluamVjdG9yIHNob3VsZCBiZSBhYmxlIHRvIGJlIHVzZWQgYnkgb3RoZXIgaW5qZWN0b3JzLiBZb3UnbGwgcHJvYmFibHkgbmV2ZXIgbmVlZCB0byB3b3JyeSBhYm91dCB0aGlzOyBtb3N0IGxvZ2ljIHlvdSBtaWdodCBwdXQgaW4gYW4gaW5qZWN0b3Igc2hvdWxkIGJlIGZpbmUuYH08L2xpPlxuICAgIDwvdWw+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiYW4tZXhhbXBsZVwiXG4gICAgfX0+e2BBbiBFeGFtcGxlYH08L2gyPlxuICAgIDxwPntgSW4gdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJxdWljay1zdGFydFwiXG4gICAgICB9fT57YHF1aWNrIHN0YXJ0YH08L2E+e2AsIHdlIHJlZmVyZW5jZWQgYSB0aGVvcmV0aWNhbCBjdXN0b20gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0RmV0Y2hgfTwvaW5saW5lQ29kZT57YCBpbmplY3Rvci4gTGV0J3MgY3JlYXRlIGl0IGZvciByZWFsOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2Bjb25zdCBpbmplY3RGZXRjaCA9ICh1cmw6IHN0cmluZykgPT4ge1xuICBjb25zdCBzdG9yZSA9IGluamVjdFN0b3JlKHsgc3RhdHVzOiAnbG9hZGluZycgfSlcblxuICBpbmplY3RFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzdWx0Lmpzb24oKVxuXG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGRhdGEsIHN0YXR1czogJ3N1Y2Nlc3MnIH0pXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzdG9yZS5zZXRTdGF0ZSh7IGVycm9yOiBlcnIsIHN0YXR1czogJ2Vycm9yJyB9KVxuICAgIH1cbiAgfSwgW3VybF0pXG5cbiAgcmV0dXJuIGFwaShzdG9yZSkuc2V0UHJvbWlzZShwcm9taXNlKVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BOb3cgd2UgY2FuIHVzZSB0aGlzIGluamVjdG9yIHRvIGZldGNoIGRhdGEgaW4gYW55IG90aGVyIGF0b206YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IHVzZXJzQXRvbSA9IGF0b20oJ3VzZXJzJywgKCkgPT4ge1xuICBjb25zdCB7IHN0b3JlIH0gPSBpbmplY3RGZXRjaCgnL2FwaS91c2VycycpXG5cbiAgcmV0dXJuIHN0b3JlXG59KVxuXG5jb25zdCBmcmllbmRzQXRvbSA9IGF0b20oJ2ZyaWVuZHMnLCAoKSA9PiB7XG4gIHJldHVybiBpbmplY3RGZXRjaCgnL2FwaS9mcmllbmRzJylcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YE5vdGljZSB0aGF0IGluIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHVzZXJzQXRvbWB9PC9pbmxpbmVDb2RlPntgIHdlIHJldHVybmVkIG9ubHkgdGhlIHN0b3JlLCB3aGlsZSBpbiBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BmcmllbmRzQXRvbWB9PC9pbmxpbmVDb2RlPntgIHdlIHJldHVybmVkIHRoZSBlbnRpcmUgQXRvbSBBUEkgZnJvbSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmplY3RGZXRjaGB9PC9pbmxpbmVDb2RlPntgLiBMZXQncyB0YWtlIGEgY2xvc2VyIGxvb2sgYXQgdGhpcyBmbGV4aWJpbGl0eSBhZmZvcmRlZCBieSBBdG9tIEFQSXM6YH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXNpbmctYXRvbS1hcGlzXCJcbiAgICB9fT57YFVzaW5nIEF0b20gQVBJc2B9PC9oMj5cbiAgICA8cD57YEF0b20gaW5zdGFuY2VzIGhhdmUgMyBcIm1ldGEgZGF0YSB0eXBlc1wiIHRoYXQgeW91J2xsIGZpbmQgeW91cnNlbGYgd29ya2luZyB3aXRoIGEgbG90IGluIHlvdXIgc3RhdGUgZmFjdG9yaWVzIGFuZCBjdXN0b20gaW5qZWN0b3JzOmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFN0YXRlICh1c3VhbGx5IGluc2lkZSBzdG9yZXMpYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgRXhwb3J0c2B9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFByb21pc2VzYH08L2xpPlxuICAgIDwvdWw+XG4gICAgPHA+e2BUaGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcImF0b20tYXBpc1wiXG4gICAgICB9fT57YEF0b20gQVBJYH08L2E+e2AgaXMgYSBzdGFuZGFyZCB3YXkgdG8gcGFzcyB0aGVzZSAzIHRoaW5ncyBhcm91bmQuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YC8vIFRoaXMgQXRvbSBBUEkgaXMgZXNzZW50aWFsbHkgYSBjb250YWluZXIgZm9yIHRoZSAzIG1ldGEgZGF0YSB0eXBlczpcbmNvbnN0IG15QXBpID0gYXBpKG15U3RvcmUpLnNldEV4cG9ydHMobXlFeHBvcnRzKS5zZXRQcm9taXNlKG15UHJvbWlzZSlcblxuLy8gd2UgY2FuIGFjY2VzcyBhbGwgMyBlYXNpbHk6XG5jb25zdCB7IGV4cG9ydHMsIHByb21pc2UsIHN0b3JlIH0gPSBteUFwaVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BBdG9tIEFQSXMgYXJlIGRlc2lnbmVkIHRvIGJlIHBhc3NlZCBhcm91bmQgYmV0d2VlbiBpbmplY3RvcnMgYW5kIHVsdGltYXRlbHkgY29tcG9zZWQgdG9nZXRoZXIgaW50byBhIHNpbmdsZSBBdG9tIEFQSSB0aGF0IGdldHMgcmV0dXJuZWQgZnJvbSB5b3VyIHN0YXRlIGZhY3RvcnkuIFlvdSBjYW4gb2YgY291cnNlIHBhc3Mgc3R1ZmYgYXJvdW5kIGhvd2V2ZXIgeW91IHdhbnQsIGJ1dCB0aGUgQXRvbSBBUEkgaXMgYSB1c2VmdWwgc3RhbmRhcmQgZm9yIHRoaXMuYH08L3A+XG4gICAgPGFkbW9uaXRpb24gey4uLntcbiAgICAgIFwidHlwZVwiOiBcInRpcFwiXG4gICAgfX0+PHAgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj48YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vYXBpL2luamVjdG9ycy9pbmplY3RQcm9taXNlXCJcbiAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGluamVjdFByb21pc2UoKWB9PC9pbmxpbmVDb2RlPjwvYT57YCBpdHNlbGYgdXNlcyB0aGlzIHBhdHRlcm4gLSByZXR1cm5pbmcgYW4gQXRvbSBBUEkgd2l0aCBhIHN0b3JlIGFuZCBwcm9taXNlIGF0dGFjaGVkLmB9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJyZWNhcFwiXG4gICAgfX0+e2BSZWNhcGB9PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BDdXN0b20gaW5qZWN0b3JzIGNhbiBlbmNhcHN1bGF0ZSBhbnkgbG9naWMgeW91IHdhbnRgfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BBdG9tIEFQSXMgYXJlIGEgY29udmVuaWVudCBzdGFuZGFyZCBmb3IgcGFzc2luZyBzdG9yZXMsIGV4cG9ydHMsIGFuZCBwcm9taXNlcyBhcm91bmRgfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJuZXh0LXN0ZXBzXCJcbiAgICB9fT57YE5leHQgU3RlcHNgfTwvaDI+XG4gICAgPHA+e2BDdXN0b20gaW5qZWN0b3JzIGhhdmUgbWFueSB1c2VzLiBMZXQncyBsb29rIGF0IHVzaW5nIHRoZW0gdG8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcInJlc2V0c1wiXG4gICAgICB9fT57YHJlc2V0IGF0b21zYH08L2E+e2AuYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZHgiLCJmcm9udE1hdHRlciIsImlkIiwidGl0bGUiLCJjb250ZW50VGl0bGUiLCJ1bmRlZmluZWQiLCJtZXRhZGF0YSIsImFzc2V0cyIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3811\n')}}]);
"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[7089],{499:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'AtomInstanceTtl\',title:\'AtomInstanceTtl\'};var contentTitle=undefined;var metadata={"unversionedId":"api/types/AtomInstanceTtl","id":"api/types/AtomInstanceTtl","title":"AtomInstanceTtl","description":"Ttl (Time To Live) can be set at the ecosystem, atom, or atom instance levels. Setting a ttl at the atom instance level is the most flexible. You can do so using an AtomApi.","source":"@site/docs/api/types/AtomInstanceTtl.mdx","sourceDirName":"api/types","slug":"/api/types/AtomInstanceTtl","permalink":"/zedux/docs/api/types/AtomInstanceTtl","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/types/AtomInstanceTtl.mdx","tags":[],"version":"current","frontMatter":{"id":"AtomInstanceTtl","title":"AtomInstanceTtl"},"sidebar":"react","previous":{"title":"AtomGetters","permalink":"/zedux/docs/api/types/AtomGetters"},"next":{"title":"AtomSelector","permalink":"/zedux/docs/api/types/AtomSelector"}};var assets={};var toc=[{value:\'Definition\',id:\'definition\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Ttl (Time To Live) can be set at the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Ecosystem#defaultttl"},"ecosystem"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Atom#ttl"},"atom"),", or ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/AtomApi#setttl"},"atom instance")," levels. Setting a ttl at the atom instance level is the most flexible. You can do so using an ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/AtomApi#setttl"},"AtomApi"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A ttl set on an atom instance overrides any ttl on its atom or ecosystem. A ttl set on an atom overrides any defaultTtl on the ecosystem."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"definition"},"Definition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"type AtomInstanceTtl = number | Promise<any> | Observable<any>\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Note that the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/AtomApi#ttl"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},".ttl")," property of an AtomApi")," can also be a function that returns any of these."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This is far more flexible than ecosystem- and atom-level ttl, which can only be a number."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"When a number is set, Zedux will set a timeout for ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"<ttl>")," milliseconds. When that timeout times out, Zedux will clean up the atom instance. A ttl of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"0")," will skip the timeout and clean up immediately."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"When a promise is set, Zedux will wait for that promise to resolve before cleaning up the atom instance."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"When an observable is set, Zedux will wait for that observable to emit before cleaning up the atom instance.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In all cases, if the atom instance is used again while Zedux is awaiting the ok for cleanup, cleanup will be cancelled."));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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P2RlOGQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ0F0b21JbnN0YW5jZVR0bCcsXG5cdHRpdGxlOiAnQXRvbUluc3RhbmNlVHRsJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFwaS90eXBlcy9BdG9tSW5zdGFuY2VUdGxcIixcbiAgXCJpZFwiOiBcImFwaS90eXBlcy9BdG9tSW5zdGFuY2VUdGxcIixcbiAgXCJ0aXRsZVwiOiBcIkF0b21JbnN0YW5jZVR0bFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVHRsIChUaW1lIFRvIExpdmUpIGNhbiBiZSBzZXQgYXQgdGhlIGVjb3N5c3RlbSwgYXRvbSwgb3IgYXRvbSBpbnN0YW5jZSBsZXZlbHMuIFNldHRpbmcgYSB0dGwgYXQgdGhlIGF0b20gaW5zdGFuY2UgbGV2ZWwgaXMgdGhlIG1vc3QgZmxleGlibGUuIFlvdSBjYW4gZG8gc28gdXNpbmcgYW4gQXRvbUFwaS5cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS90eXBlcy9BdG9tSW5zdGFuY2VUdGwubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFwaS90eXBlc1wiLFxuICBcInNsdWdcIjogXCIvYXBpL3R5cGVzL0F0b21JbnN0YW5jZVR0bFwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS90eXBlcy9BdG9tSW5zdGFuY2VUdGxcIixcbiAgXCJkcmFmdFwiOiBmYWxzZSxcbiAgXCJlZGl0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09tbmlzdGFjL3plZHV4L3RyZWUvbWFzdGVyL2RvY3MvYXBpL3R5cGVzL0F0b21JbnN0YW5jZVR0bC5tZHhcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJBdG9tSW5zdGFuY2VUdGxcIixcbiAgICBcInRpdGxlXCI6IFwiQXRvbUluc3RhbmNlVHRsXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkF0b21HZXR0ZXJzXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdHlwZXMvQXRvbUdldHRlcnNcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJBdG9tU2VsZWN0b3JcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS90eXBlcy9BdG9tU2VsZWN0b3JcIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdEZWZpbml0aW9uJyxcbiAgaWQ6ICdkZWZpbml0aW9uJyxcbiAgbGV2ZWw6IDJcbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPHA+e2BUdGwgKFRpbWUgVG8gTGl2ZSkgY2FuIGJlIHNldCBhdCB0aGUgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2NsYXNzZXMvRWNvc3lzdGVtI2RlZmF1bHR0dGxcIlxuICAgICAgfX0+e2BlY29zeXN0ZW1gfTwvYT57YCwgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2NsYXNzZXMvQXRvbSN0dGxcIlxuICAgICAgfX0+e2BhdG9tYH08L2E+e2AsIG9yIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0F0b21BcGkjc2V0dHRsXCJcbiAgICAgIH19PntgYXRvbSBpbnN0YW5jZWB9PC9hPntgIGxldmVscy4gU2V0dGluZyBhIHR0bCBhdCB0aGUgYXRvbSBpbnN0YW5jZSBsZXZlbCBpcyB0aGUgbW9zdCBmbGV4aWJsZS4gWW91IGNhbiBkbyBzbyB1c2luZyBhbiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiLi4vY2xhc3Nlcy9BdG9tQXBpI3NldHR0bFwiXG4gICAgICB9fT57YEF0b21BcGlgfTwvYT57YC5gfTwvcD5cbiAgICA8cD57YEEgdHRsIHNldCBvbiBhbiBhdG9tIGluc3RhbmNlIG92ZXJyaWRlcyBhbnkgdHRsIG9uIGl0cyBhdG9tIG9yIGVjb3N5c3RlbS4gQSB0dGwgc2V0IG9uIGFuIGF0b20gb3ZlcnJpZGVzIGFueSBkZWZhdWx0VHRsIG9uIHRoZSBlY29zeXN0ZW0uYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZGVmaW5pdGlvblwiXG4gICAgfX0+e2BEZWZpbml0aW9uYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2B0eXBlIEF0b21JbnN0YW5jZVR0bCA9IG51bWJlciB8IFByb21pc2U8YW55PiB8IE9ic2VydmFibGU8YW55PlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BOb3RlIHRoYXQgdGhlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0F0b21BcGkjdHRsXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2AudHRsYH08L2lubGluZUNvZGU+e2AgcHJvcGVydHkgb2YgYW4gQXRvbUFwaWB9PC9hPntgIGNhbiBhbHNvIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGFueSBvZiB0aGVzZS5gfTwvcD5cbiAgICA8cD57YFRoaXMgaXMgZmFyIG1vcmUgZmxleGlibGUgdGhhbiBlY29zeXN0ZW0tIGFuZCBhdG9tLWxldmVsIHR0bCwgd2hpY2ggY2FuIG9ubHkgYmUgYSBudW1iZXIuYH08L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgV2hlbiBhIG51bWJlciBpcyBzZXQsIFplZHV4IHdpbGwgc2V0IGEgdGltZW91dCBmb3IgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YDx0dGw+YH08L2lubGluZUNvZGU+e2AgbWlsbGlzZWNvbmRzLiBXaGVuIHRoYXQgdGltZW91dCB0aW1lcyBvdXQsIFplZHV4IHdpbGwgY2xlYW4gdXAgdGhlIGF0b20gaW5zdGFuY2UuIEEgdHRsIG9mIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2AwYH08L2lubGluZUNvZGU+e2Agd2lsbCBza2lwIHRoZSB0aW1lb3V0IGFuZCBjbGVhbiB1cCBpbW1lZGlhdGVseS5gfTwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BXaGVuIGEgcHJvbWlzZSBpcyBzZXQsIFplZHV4IHdpbGwgd2FpdCBmb3IgdGhhdCBwcm9taXNlIHRvIHJlc29sdmUgYmVmb3JlIGNsZWFuaW5nIHVwIHRoZSBhdG9tIGluc3RhbmNlLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YFdoZW4gYW4gb2JzZXJ2YWJsZSBpcyBzZXQsIFplZHV4IHdpbGwgd2FpdCBmb3IgdGhhdCBvYnNlcnZhYmxlIHRvIGVtaXQgYmVmb3JlIGNsZWFuaW5nIHVwIHRoZSBhdG9tIGluc3RhbmNlLmB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPntgSW4gYWxsIGNhc2VzLCBpZiB0aGUgYXRvbSBpbnN0YW5jZSBpcyB1c2VkIGFnYWluIHdoaWxlIFplZHV4IGlzIGF3YWl0aW5nIHRoZSBvayBmb3IgY2xlYW51cCwgY2xlYW51cCB3aWxsIGJlIGNhbmNlbGxlZC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///499\n')}}]);
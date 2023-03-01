"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[188],{2100:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'createEcosystem\',title:\'createEcosystem\'};var contentTitle=undefined;var metadata={"unversionedId":"api/factories/createEcosystem","id":"api/factories/createEcosystem","title":"createEcosystem","description":"Creates an atom ecosystem.","source":"@site/docs/api/factories/createEcosystem.mdx","sourceDirName":"api/factories","slug":"/api/factories/createEcosystem","permalink":"/zedux/docs/api/factories/createEcosystem","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/factories/createEcosystem.mdx","tags":[],"version":"current","frontMatter":{"id":"createEcosystem","title":"createEcosystem"},"sidebar":"react","previous":{"title":"atom","permalink":"/zedux/docs/api/factories/atom"},"next":{"title":"createReducer","permalink":"/zedux/docs/api/factories/createReducer"}};var assets={};var toc=[{value:\'Examples\',id:\'examples\',level:2},{value:\'Signature\',id:\'signature\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { createEcosystem } from \'@zedux/react\'\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Creates an ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Ecosystem"},"atom ecosystem"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { createEcosystem } from \'@zedux/react\'\\n\\nconst rootEcosystem = createEcosystem({ id: \'root\' })\\n\\nconst withOverrides = createEcosystem({\\n  id: \'withOverrides\',\\n  overrides: [atomA, atomB],\\n})\\n\\nconst withOnReadyFn = createEcosystem({\\n  id: \'withOnReadyFn\',\\n  onReady: ecosystem => {\\n    // `onReady` is passed a reference to the ecosystem\\n    ecosystem.getInstance(myAtom) // preload myAtom\\n  },\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"signature"},"Signature"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("createEcosystem = (config?) => Ecosystem"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("declare const createEcosystem: <Context extends Record<string, any> | undefined = any>(config?: EcosystemConfig<Context>) => Ecosystem<any> | Ecosystem<Context>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"config",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../types/EcosystemConfig",mdxType:"Link"},"EcosystemConfig"),\' \',"object."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"While all fields are optional, it\'s recommended to at least pass an",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"id"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/Ecosystem",mdxType:"Link"},"Ecosystem")," instance, configured with the passed ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"config"),"."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/ecosystems"},"The Ecosystems walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../classes/Ecosystem"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"Ecosystem")," class"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMjEwMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs2QkFFQSwwQkFDQSxlQUNBLDZCQU1PLEdBQU1FLFlBQVcsQ0FBRyxDQUMxQkMsRUFBRSxDQUFFLGlCQUFpQixDQUNyQkMsS0FBSyxDQUFFLGlCQUNSLENBQUMsQ0FDTSxHQUFNQyxhQUFZLENBQUdDLFNBQVMsQ0FDOUIsR0FBTUMsU0FBUSxDQUFHLENBQ3RCLGVBQWUsQ0FBRSwrQkFBK0IsQ0FDaEQsSUFBSSxDQUFFLCtCQUErQixDQUNyQyxPQUFPLENBQUUsaUJBQWlCLENBQzFCLGFBQWEsQ0FBRSw0QkFBNEIsQ0FDM0MsUUFBUSxDQUFFLDhDQUE4QyxDQUN4RCxlQUFlLENBQUUsZUFBZSxDQUNoQyxNQUFNLENBQUUsZ0NBQWdDLENBQ3hDLFdBQVcsQ0FBRSwyQ0FBMkMsQ0FDeEQsT0FBTyxDQUFFLEtBQUssQ0FDZCxTQUFTLENBQUUsc0ZBQXNGLENBQ2pHLE1BQU0sQ0FBRSxFQUFFLENBQ1YsU0FBUyxDQUFFLFNBQVMsQ0FDcEIsYUFBYSxDQUFFLENBQ2IsSUFBSSxDQUFFLGlCQUFpQixDQUN2QixPQUFPLENBQUUsaUJBQ1gsQ0FBQyxDQUNELFNBQVMsQ0FBRSxPQUFPLENBQ2xCLFVBQVUsQ0FBRSxDQUNWLE9BQU8sQ0FBRSxNQUFNLENBQ2YsV0FBVyxDQUFFLGdDQUNmLENBQUMsQ0FDRCxNQUFNLENBQUUsQ0FDTixPQUFPLENBQUUsZUFBZSxDQUN4QixXQUFXLENBQUUseUNBQ2YsQ0FDRixDQUFDLENBQ00sR0FBTUMsT0FBTSxDQUFHLENBRXRCLENBQUMsQ0FHTSxHQUFNUSxJQUFHLENBQUcsQ0FBQyxDQUNsQkMsS0FBSyxDQUFFLFVBQVUsQ0FDakJkLEVBQUUsQ0FBRSxVQUFVLENBQ2RlLEtBQUssQ0FBRSxDQUNULENBQUMsQ0FBRSxDQUNERCxLQUFLLENBQUUsV0FBVyxDQUNsQmQsRUFBRSxDQUFFLFdBQVcsQ0FDZmUsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSxVQUFVLENBQ2pCZCxFQUFFLENBQUUsVUFBVSxDQUNkZSxLQUFLLENBQUUsQ0FDVCxDQUFDLENBQUMsQ0FFRixHQUFNQyxZQUFXLENBQUcsQ0FDbEJILEdBQUcsQ0FBSEEsR0FDRixDQUFDLENBQ0QsR0FBTUksVUFBUyxDQUFHLFNBQVMsQ0FDWixRQUFTQyxXQUFVLE1BRy9CLElBRkRDLFdBQVUsTUFBVkEsVUFBVSxDQUNQQyxLQUFLLHNMQUVSLE1BQU8sOERBQUMsU0FBUyxvSkFBS0osV0FBVyxDQUFNSSxLQUFLLEVBQUUsVUFBVSxDQUFFRCxVQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FHdkYsd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGFBQWEscURBRXpCLENBQU0sQ0FDWCxvRkFBa0Isa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDL0IsTUFBTSxDQUFFLHNCQUFzQixtQkFDUCxLQUFTLENBQ3BDLG1FQUNFLElBQUksQ0FBRSxVQUFVLGFBQ0UsQ0FDcEIsd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGFBQWEseWFBaUJ6QixDQUFNLENBQ1gsbUVBQ0UsSUFBSSxDQUFFLFdBQVcsY0FDRSxDQUNyQiw2REFBQyx5REFBSSxFQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ3JCUiw2REFBSSw0Q0FBNEMsQ0FDaERDLDZEQUFJLG9LQUFvSyxDQUNoSyxDQUNQLDZEQUFDLDJEQUFNLEVBQUMsT0FBTyxDQUFDLFFBQVEsRUFDMUIsNkRBQUMseURBQUksRUFBQyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ2hDLHNGQUNlLDZEQUFDLHlEQUFJLEVBQUMsRUFBRSxDQUFDLDBCQUEwQixDQUFDLE9BQU8sQ0FBQyxNQUFNLG9CQUF1QixDQUFDLEdBQUcsV0FFeEYsQ0FDSiw0SUFDc0UsR0FBRyxDQUN2RSw4RUFBZSxLQUNiLENBQ0MsQ0FDUCw2REFBQyx5REFBSSxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDakMsNEVBQ0ssNkRBQUMseURBQUksRUFBQyxFQUFFLENBQUMsc0JBQXNCLENBQUMsT0FBTyxDQUFDLE1BQU0sY0FBaUIsMENBQ2xELGtGQUFtQixLQUNqQyxDQUNDLENBQ0ksQ0FDVCxtRUFDRSxJQUFJLENBQUUsVUFBVSxhQUNFLENBQ3BCLHVFQUNFLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFFLDhCQUE4QiwrQkFDSCxDQUFLLENBQzVDLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFFLHNCQUFzQixTQUNyQiwyRUFBWSxVQUFVLENBQUMsR0FBRyxjQUEyQixVQUFjLENBQUssQ0FDbEYsQ0FDTyxDQUNoQixDQUNBLENBQ0FNLFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZUVjb3N5c3RlbS5tZHg/MjVhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLyogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuLyogQGpzeCBtZHggKi9cbi8qIEBqc3hGcmFnIFJlYWN0LkZyYWdtZW50ICovXG5cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtZHggfSBmcm9tICdAbWR4LWpzL3JlYWN0JztcblxuXG5leHBvcnQgY29uc3QgZnJvbnRNYXR0ZXIgPSB7XG5cdGlkOiAnY3JlYXRlRWNvc3lzdGVtJyxcblx0dGl0bGU6ICdjcmVhdGVFY29zeXN0ZW0nXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYXBpL2ZhY3Rvcmllcy9jcmVhdGVFY29zeXN0ZW1cIixcbiAgXCJpZFwiOiBcImFwaS9mYWN0b3JpZXMvY3JlYXRlRWNvc3lzdGVtXCIsXG4gIFwidGl0bGVcIjogXCJjcmVhdGVFY29zeXN0ZW1cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNyZWF0ZXMgYW4gYXRvbSBlY29zeXN0ZW0uXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZUVjb3N5c3RlbS5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYXBpL2ZhY3Rvcmllc1wiLFxuICBcInNsdWdcIjogXCIvYXBpL2ZhY3Rvcmllcy9jcmVhdGVFY29zeXN0ZW1cIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZUVjb3N5c3RlbVwiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZUVjb3N5c3RlbS5tZHhcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJjcmVhdGVFY29zeXN0ZW1cIixcbiAgICBcInRpdGxlXCI6IFwiY3JlYXRlRWNvc3lzdGVtXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImF0b21cIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9mYWN0b3JpZXMvYXRvbVwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImNyZWF0ZVJlZHVjZXJcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9mYWN0b3JpZXMvY3JlYXRlUmVkdWNlclwiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgYXNzZXRzID0ge1xuXG59O1xuXG5pbXBvcnQgeyBMZWdlbmQsIEl0ZW0sIExpbmssIFRhYnMsIFRzLCB0YWIxLCB0YWIyIH0gZnJvbSAnQHNpdGUvc3JjL2FsbCdcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0V4YW1wbGVzJyxcbiAgaWQ6ICdleGFtcGxlcycsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2lnbmF0dXJlJyxcbiAgaWQ6ICdzaWduYXR1cmUnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGltcG9ydCB7IGNyZWF0ZUVjb3N5c3RlbSB9IGZyb20gJ0B6ZWR1eC9yZWFjdCdcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQ3JlYXRlcyBhbiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiLi4vY2xhc3Nlcy9FY29zeXN0ZW1cIlxuICAgICAgfX0+e2BhdG9tIGVjb3N5c3RlbWB9PC9hPntgLmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcImV4YW1wbGVzXCJcbiAgICB9fT57YEV4YW1wbGVzYH08L2gyPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2BpbXBvcnQgeyBjcmVhdGVFY29zeXN0ZW0gfSBmcm9tICdAemVkdXgvcmVhY3QnXG5cbmNvbnN0IHJvb3RFY29zeXN0ZW0gPSBjcmVhdGVFY29zeXN0ZW0oeyBpZDogJ3Jvb3QnIH0pXG5cbmNvbnN0IHdpdGhPdmVycmlkZXMgPSBjcmVhdGVFY29zeXN0ZW0oe1xuICBpZDogJ3dpdGhPdmVycmlkZXMnLFxuICBvdmVycmlkZXM6IFthdG9tQSwgYXRvbUJdLFxufSlcblxuY29uc3Qgd2l0aE9uUmVhZHlGbiA9IGNyZWF0ZUVjb3N5c3RlbSh7XG4gIGlkOiAnd2l0aE9uUmVhZHlGbicsXG4gIG9uUmVhZHk6IGVjb3N5c3RlbSA9PiB7XG4gICAgLy8gXFxgb25SZWFkeVxcYCBpcyBwYXNzZWQgYSByZWZlcmVuY2UgdG8gdGhlIGVjb3N5c3RlbVxuICAgIGVjb3N5c3RlbS5nZXRJbnN0YW5jZShteUF0b20pIC8vIHByZWxvYWQgbXlBdG9tXG4gIH0sXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic2lnbmF0dXJlXCJcbiAgICB9fT57YFNpZ25hdHVyZWB9PC9oMj5cbiAgICA8VGFicyBtZHhUeXBlPVwiVGFic1wiPlxuICB7dGFiMShgY3JlYXRlRWNvc3lzdGVtID0gKGNvbmZpZz8pID0+IEVjb3N5c3RlbWApfVxuICB7dGFiMihgZGVjbGFyZSBjb25zdCBjcmVhdGVFY29zeXN0ZW06IDxDb250ZXh0IGV4dGVuZHMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZCA9IGFueT4oY29uZmlnPzogRWNvc3lzdGVtQ29uZmlnPENvbnRleHQ+KSA9PiBFY29zeXN0ZW08YW55PiB8IEVjb3N5c3RlbTxDb250ZXh0PmApfVxuICAgIDwvVGFicz5cbiAgICA8TGVnZW5kIG1keFR5cGU9XCJMZWdlbmRcIj5cbiAgPEl0ZW0gbmFtZT1cImNvbmZpZ1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBPcHRpb25hbC4gQW4gPExpbmsgdG89XCIuLi90eXBlcy9FY29zeXN0ZW1Db25maWdcIiBtZHhUeXBlPVwiTGlua1wiPkVjb3N5c3RlbUNvbmZpZzwvTGluaz57JyAnfVxuICAgICAgb2JqZWN0LlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFdoaWxlIGFsbCBmaWVsZHMgYXJlIG9wdGlvbmFsLCBpdCdzIHJlY29tbWVuZGVkIHRvIGF0IGxlYXN0IHBhc3MgYW57JyAnfVxuICAgICAgPGNvZGU+aWQ8L2NvZGU+LlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwiUmV0dXJuc1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBBbiA8TGluayB0bz1cIi4uL2NsYXNzZXMvRWNvc3lzdGVtXCIgbWR4VHlwZT1cIkxpbmtcIj5FY29zeXN0ZW08L0xpbms+IGluc3RhbmNlLCBjb25maWd1cmVkXG4gICAgICB3aXRoIHRoZSBwYXNzZWQgPGNvZGU+Y29uZmlnPC9jb2RlPi5cbiAgICA8L3A+XG4gIDwvSXRlbT5cbiAgICA8L0xlZ2VuZD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzZWUtYWxzb1wiXG4gICAgfX0+e2BTZWUgQWxzb2B9PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi8uLi93YWxrdGhyb3VnaC9lY29zeXN0ZW1zXCJcbiAgICAgICAgfX0+e2BUaGUgRWNvc3lzdGVtcyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL0Vjb3N5c3RlbVwiXG4gICAgICAgIH19PntgVGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YEVjb3N5c3RlbWB9PC9pbmxpbmVDb2RlPntgIGNsYXNzYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJMZWdlbmQiLCJJdGVtIiwiTGluayIsIlRhYnMiLCJUcyIsInRhYjEiLCJ0YWIyIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2100\n')}}]);
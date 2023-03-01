"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[3099],{7228:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'createReducer\',title:\'createReducer\'};var contentTitle=undefined;var metadata={"unversionedId":"api/factories/createReducer","id":"api/factories/createReducer","title":"createReducer","description":"A factory for creating Redux-style reducers. These reducers can then be passed to createStore() or used directly in React\'s useReducer() hooks.","source":"@site/docs/api/factories/createReducer.mdx","sourceDirName":"api/factories","slug":"/api/factories/createReducer","permalink":"/zedux/docs/api/factories/createReducer","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/factories/createReducer.mdx","tags":[],"version":"current","frontMatter":{"id":"createReducer","title":"createReducer"},"sidebar":"react","previous":{"title":"createEcosystem","permalink":"/zedux/docs/api/factories/createEcosystem"},"next":{"title":"createStore","permalink":"/zedux/docs/api/factories/createStore"}};var assets={};var toc=[{value:\'Examples\',id:\'examples\',level:2},{value:\'Signature\',id:\'signature\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A factory for creating Redux-style ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../types/Reducer"},"reducers"),". These reducers can then be passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"createStore"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"createStore()"))," or used directly in React\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"useReducer()")," hooks."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { actionFactory, createReducer } from \'@zedux/react\'\\n\\nconst withInitialState = createReducer(\'initial state\')\\nconst withoutInitialState = createReducer()\\n\\nconst withStringActionTypes = createReducer([]).reduce(\\n  \'todos/add\',\\n  (state, newTodo) => [...state, newTodo]\\n)\\n\\nconst multipleActions = createReducer([]).reduce(\\n  [\'todos/reset\', \'todos/clear\'],\\n  () => []\\n)\\n\\nconst addTodo = actionFactory<Todo>(\'todos/add\')\\nconst removeTodo = actionFactory<Todo>(\'todos/add\')\\nconst withActionFactories = createReducer([])\\n  .reduce(addTodo, (state, newTodo) => [...state, newTodo])\\n  .reduce(removeTodo, (state, id) => state.filter(todo => todo.id !== id))\\n\\nconst clear = actionFactory(\'todos/clear\')\\nconst mixed = createReducer([])\\n  .reduce(addTodo, (state, newTodo) => [...state, newTodo])\\n  .reduce(\'todos/remove\', (state, id) => state.filter(todo => todo.id !== id))\\n  .reduce([\'todos/reset\', clear], () => [])\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"signature"},"Signature"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Tabs */ .mQ,{mdxType:"Tabs"},(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab1 */ .x_)("createReducer = (initialState) => reducerBuilder"),(0,_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .tab2 */ .s2)("declare const createReducer: <State = any>(initialState?: State | undefined) => ReducerBuilder<State>")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"initialState",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Optional. Can be anything. Default ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"undefined"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This will be set as the initial state of the reducer the first time it runs, e.g. as part of a store creation/hierarchy change.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"Returns",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../types/ReducerBuilder",mdxType:"Link"},"ReducerBuilder"),"."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/stores"},"The Stores walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../types/ReducerBuilder"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"ReducerBuilder")," type"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMseUJBQXlCLENBQUMsT0FBTyxDQUFDLE1BQU0sbUJBQXNCLEtBQ3ZFLENBQ0MsQ0FDSSxDQUNULG1FQUNFLElBQUksQ0FBRSxVQUFVLGFBQ0UsQ0FDcEIsdUVBQ0UsbUVBQUksVUFBVSxDQUFDLElBQUksRUFBQyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUUsMEJBQTBCLDJCQUNILENBQUssQ0FDeEMsbUVBQUksVUFBVSxDQUFDLElBQUksRUFBQyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUNsQyxNQUFNLENBQUUseUJBQXlCLFNBQ3hCLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLG1CQUFnQyxTQUFhLENBQUssQ0FDdEYsQ0FDTyxDQUNoQixDQUNBLENBQ0FNLFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZVJlZHVjZXIubWR4P2E3NzQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ2NyZWF0ZVJlZHVjZXInLFxuXHR0aXRsZTogJ2NyZWF0ZVJlZHVjZXInXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYXBpL2ZhY3Rvcmllcy9jcmVhdGVSZWR1Y2VyXCIsXG4gIFwiaWRcIjogXCJhcGkvZmFjdG9yaWVzL2NyZWF0ZVJlZHVjZXJcIixcbiAgXCJ0aXRsZVwiOiBcImNyZWF0ZVJlZHVjZXJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkEgZmFjdG9yeSBmb3IgY3JlYXRpbmcgUmVkdXgtc3R5bGUgcmVkdWNlcnMuIFRoZXNlIHJlZHVjZXJzIGNhbiB0aGVuIGJlIHBhc3NlZCB0byBjcmVhdGVTdG9yZSgpIG9yIHVzZWQgZGlyZWN0bHkgaW4gUmVhY3QncyB1c2VSZWR1Y2VyKCkgaG9va3MuXCIsXG4gIFwic291cmNlXCI6IFwiQHNpdGUvZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZVJlZHVjZXIubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFwaS9mYWN0b3JpZXNcIixcbiAgXCJzbHVnXCI6IFwiL2FwaS9mYWN0b3JpZXMvY3JlYXRlUmVkdWNlclwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9mYWN0b3JpZXMvY3JlYXRlUmVkdWNlclwiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvZmFjdG9yaWVzL2NyZWF0ZVJlZHVjZXIubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwiY3JlYXRlUmVkdWNlclwiLFxuICAgIFwidGl0bGVcIjogXCJjcmVhdGVSZWR1Y2VyXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImNyZWF0ZUVjb3N5c3RlbVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2ZhY3Rvcmllcy9jcmVhdGVFY29zeXN0ZW1cIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJjcmVhdGVTdG9yZVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2ZhY3Rvcmllcy9jcmVhdGVTdG9yZVwiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgYXNzZXRzID0ge1xuXG59O1xuXG5pbXBvcnQgeyBMZWdlbmQsIEl0ZW0sIExpbmssIFRhYnMsIFRzLCB0YWIxLCB0YWIyIH0gZnJvbSAnQHNpdGUvc3JjL2FsbCdcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0V4YW1wbGVzJyxcbiAgaWQ6ICdleGFtcGxlcycsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnU2lnbmF0dXJlJyxcbiAgaWQ6ICdzaWduYXR1cmUnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHA+e2BBIGZhY3RvcnkgZm9yIGNyZWF0aW5nIFJlZHV4LXN0eWxlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi90eXBlcy9SZWR1Y2VyXCJcbiAgICAgIH19PntgcmVkdWNlcnNgfTwvYT57YC4gVGhlc2UgcmVkdWNlcnMgY2FuIHRoZW4gYmUgcGFzc2VkIHRvIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJjcmVhdGVTdG9yZVwiXG4gICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgY3JlYXRlU3RvcmUoKWB9PC9pbmxpbmVDb2RlPjwvYT57YCBvciB1c2VkIGRpcmVjdGx5IGluIFJlYWN0J3MgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlUmVkdWNlcigpYH08L2lubGluZUNvZGU+e2AgaG9va3MuYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZXhhbXBsZXNcIlxuICAgIH19PntgRXhhbXBsZXNgfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGltcG9ydCB7IGFjdGlvbkZhY3RvcnksIGNyZWF0ZVJlZHVjZXIgfSBmcm9tICdAemVkdXgvcmVhY3QnXG5cbmNvbnN0IHdpdGhJbml0aWFsU3RhdGUgPSBjcmVhdGVSZWR1Y2VyKCdpbml0aWFsIHN0YXRlJylcbmNvbnN0IHdpdGhvdXRJbml0aWFsU3RhdGUgPSBjcmVhdGVSZWR1Y2VyKClcblxuY29uc3Qgd2l0aFN0cmluZ0FjdGlvblR5cGVzID0gY3JlYXRlUmVkdWNlcihbXSkucmVkdWNlKFxuICAndG9kb3MvYWRkJyxcbiAgKHN0YXRlLCBuZXdUb2RvKSA9PiBbLi4uc3RhdGUsIG5ld1RvZG9dXG4pXG5cbmNvbnN0IG11bHRpcGxlQWN0aW9ucyA9IGNyZWF0ZVJlZHVjZXIoW10pLnJlZHVjZShcbiAgWyd0b2Rvcy9yZXNldCcsICd0b2Rvcy9jbGVhciddLFxuICAoKSA9PiBbXVxuKVxuXG5jb25zdCBhZGRUb2RvID0gYWN0aW9uRmFjdG9yeTxUb2RvPigndG9kb3MvYWRkJylcbmNvbnN0IHJlbW92ZVRvZG8gPSBhY3Rpb25GYWN0b3J5PFRvZG8+KCd0b2Rvcy9hZGQnKVxuY29uc3Qgd2l0aEFjdGlvbkZhY3RvcmllcyA9IGNyZWF0ZVJlZHVjZXIoW10pXG4gIC5yZWR1Y2UoYWRkVG9kbywgKHN0YXRlLCBuZXdUb2RvKSA9PiBbLi4uc3RhdGUsIG5ld1RvZG9dKVxuICAucmVkdWNlKHJlbW92ZVRvZG8sIChzdGF0ZSwgaWQpID0+IHN0YXRlLmZpbHRlcih0b2RvID0+IHRvZG8uaWQgIT09IGlkKSlcblxuY29uc3QgY2xlYXIgPSBhY3Rpb25GYWN0b3J5KCd0b2Rvcy9jbGVhcicpXG5jb25zdCBtaXhlZCA9IGNyZWF0ZVJlZHVjZXIoW10pXG4gIC5yZWR1Y2UoYWRkVG9kbywgKHN0YXRlLCBuZXdUb2RvKSA9PiBbLi4uc3RhdGUsIG5ld1RvZG9dKVxuICAucmVkdWNlKCd0b2Rvcy9yZW1vdmUnLCAoc3RhdGUsIGlkKSA9PiBzdGF0ZS5maWx0ZXIodG9kbyA9PiB0b2RvLmlkICE9PSBpZCkpXG4gIC5yZWR1Y2UoWyd0b2Rvcy9yZXNldCcsIGNsZWFyXSwgKCkgPT4gW10pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzaWduYXR1cmVcIlxuICAgIH19PntgU2lnbmF0dXJlYH08L2gyPlxuICAgIDxUYWJzIG1keFR5cGU9XCJUYWJzXCI+XG4gIHt0YWIxKGBjcmVhdGVSZWR1Y2VyID0gKGluaXRpYWxTdGF0ZSkgPT4gcmVkdWNlckJ1aWxkZXJgKX1cbiAge3RhYjIoYGRlY2xhcmUgY29uc3QgY3JlYXRlUmVkdWNlcjogPFN0YXRlID0gYW55Pihpbml0aWFsU3RhdGU/OiBTdGF0ZSB8IHVuZGVmaW5lZCkgPT4gUmVkdWNlckJ1aWxkZXI8U3RhdGU+YCl9XG4gICAgPC9UYWJzPlxuICAgIDxMZWdlbmQgbWR4VHlwZT1cIkxlZ2VuZFwiPlxuICA8SXRlbSBuYW1lPVwiaW5pdGlhbFN0YXRlXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIE9wdGlvbmFsLiBDYW4gYmUgYW55dGhpbmcuIERlZmF1bHQgPGNvZGU+dW5kZWZpbmVkPC9jb2RlPi5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBUaGlzIHdpbGwgYmUgc2V0IGFzIHRoZSBpbml0aWFsIHN0YXRlIG9mIHRoZSByZWR1Y2VyIHRoZSBmaXJzdCB0aW1lIGl0XG4gICAgICBydW5zLCBlLmcuIGFzIHBhcnQgb2YgYSBzdG9yZSBjcmVhdGlvbi9oaWVyYXJjaHkgY2hhbmdlLlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwiUmV0dXJuc1wiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBBIDxMaW5rIHRvPVwiLi4vdHlwZXMvUmVkdWNlckJ1aWxkZXJcIiBtZHhUeXBlPVwiTGlua1wiPlJlZHVjZXJCdWlsZGVyPC9MaW5rPi5cbiAgICA8L3A+XG4gIDwvSXRlbT5cbiAgICA8L0xlZ2VuZD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzZWUtYWxzb1wiXG4gICAgfX0+e2BTZWUgQWxzb2B9PC9oMj5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi8uLi93YWxrdGhyb3VnaC9zdG9yZXNcIlxuICAgICAgICB9fT57YFRoZSBTdG9yZXMgd2Fsa3Rocm91Z2hgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vdHlwZXMvUmVkdWNlckJ1aWxkZXJcIlxuICAgICAgICB9fT57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BSZWR1Y2VyQnVpbGRlcmB9PC9pbmxpbmVDb2RlPntgIHR5cGVgfTwvYT48L2xpPlxuICAgIDwvdWw+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZHgiLCJmcm9udE1hdHRlciIsImlkIiwidGl0bGUiLCJjb250ZW50VGl0bGUiLCJ1bmRlZmluZWQiLCJtZXRhZGF0YSIsImFzc2V0cyIsIkxlZ2VuZCIsIkl0ZW0iLCJMaW5rIiwiVGFicyIsIlRzIiwidGFiMSIsInRhYjIiLCJ0b2MiLCJ2YWx1ZSIsImxldmVsIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///7228\n')}}]);
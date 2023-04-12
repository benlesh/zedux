"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[2289],{4812:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\n/* harmony import */ var _site_src_all__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9441);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'StoreEffect\',title:\'StoreEffect\'};var contentTitle=undefined;var metadata={"unversionedId":"api/types/StoreEffect","id":"api/types/StoreEffect","title":"StoreEffect","description":"An object that describes a state change in a store. Zedux creates one of these every time a store\'s state changes. This is the object passed to effects subscribers and state machine listeners.","source":"@site/docs/api/types/StoreEffect.mdx","sourceDirName":"api/types","slug":"/api/types/StoreEffect","permalink":"/zedux/docs/api/types/StoreEffect","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/types/StoreEffect.mdx","tags":[],"version":"current","frontMatter":{"id":"StoreEffect","title":"StoreEffect"},"sidebar":"react","previous":{"title":"Settable","permalink":"/zedux/docs/api/types/Settable"},"next":{"title":"Subscriber","permalink":"/zedux/docs/api/types/Subscriber"}};var assets={};var toc=[{value:\'Definition\',id:\'definition\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An object that describes a state change in a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Store"},"store"),". Zedux creates one of these every time a store\'s state changes. This is the object passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"Subscriber#effects"},"effects subscribers")," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"MachineState#onenter"},"state machine listeners"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"definition"},"Definition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"interface StoreEffect<State = any, S extends Store<State> = Store<State>> {\\n  action: ActionChain\\n  error?: unknown\\n  newState: State\\n  oldState?: State\\n  store: S\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Legend */ .De,{mdxType:"Legend"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"action",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A reference to the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"Action",mdxType:"Link"},"action")," (or",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"ActionChain",mdxType:"Link"},"ActionChain"),") object that triggered the state change or that caused the error."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Every state update in Zedux is triggered by an action. Even",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Link */ .rU,{to:"../classes/Store#setstate",mdxType:"Link"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"store.setState()")),\' \',"and similar APIs always generate \\"psuedo actions\\" representing the change.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"error",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If the dispatch call errored, this will be a reference to the error that was thrown."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This only applies to errors thrown in reducers due to a call to",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"store.dispatch()"),". If a function passed to",\' \',(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"store.setState()")," and similar methods throws an error, that error will be thrown back to the caller and subscribers won\'t be notified.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"newState",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The store\'s new state after passing the action through this store\'s reducer layer and to all child stores."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Effects subscribers run after the state has been completely updated, so this value will be exactly equal to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",null,"store.getState()"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"oldState",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The state of the store before this action changed it. Can be undefined if this is the first time this store\'s state has ever been set.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(_site_src_all__WEBPACK_IMPORTED_MODULE_2__/* .Item */ .ck,{name:"store",mdxType:"Item"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A reference to the store itself. Useful when external or general-purpose effects subscribers are registered without having a reference to the store they were registered in."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/stores"},"The Stores walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../classes/Store"},"The ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"Store")," class"))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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R0ksQ0FDSix3SUFDa0UsR0FBRyxDQUNuRSw0RkFBNkIsNkJBQTBCLEdBQUcsQ0FDMUQsNEZBQTZCLHlIQUUzQixDQUNDLENBQ1AsNkRBQUMseURBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ2xDLG1MQUdJLENBQ0oscUxBRXNDLDRGQUE2QixLQUMvRCxDQUNDLENBQ1AsNkRBQUMseURBQUksRUFBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQ2xDLCtNQUdJLENBQ0MsQ0FDUCw2REFBQyx5REFBSSxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFDL0IscVBBSUksQ0FDQyxDQUNJLENBQ1QsbUVBQ0UsSUFBSSxDQUFFLFVBQVUsYUFDRSxDQUNwQix1RUFDRSxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSwwQkFBMEIsMkJBQ0gsQ0FBSyxDQUN4QyxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSxrQkFBa0IsU0FDakIsMkVBQVksVUFBVSxDQUFDLEdBQUcsVUFBdUIsVUFBYyxDQUFLLENBQzlFLENBQ08sQ0FDaEIsQ0FDQSxDQUNBRCxVQUFVLENBQUNHLGNBQWMsQ0FBRyxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vemVkdXgtZG9jcy8uL2RvY3MvYXBpL3R5cGVzL1N0b3JlRWZmZWN0Lm1keD82ZTUwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdTdG9yZUVmZmVjdCcsXG5cdHRpdGxlOiAnU3RvcmVFZmZlY3QnXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYXBpL3R5cGVzL1N0b3JlRWZmZWN0XCIsXG4gIFwiaWRcIjogXCJhcGkvdHlwZXMvU3RvcmVFZmZlY3RcIixcbiAgXCJ0aXRsZVwiOiBcIlN0b3JlRWZmZWN0XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJBbiBvYmplY3QgdGhhdCBkZXNjcmliZXMgYSBzdGF0ZSBjaGFuZ2UgaW4gYSBzdG9yZS4gWmVkdXggY3JlYXRlcyBvbmUgb2YgdGhlc2UgZXZlcnkgdGltZSBhIHN0b3JlJ3Mgc3RhdGUgY2hhbmdlcy4gVGhpcyBpcyB0aGUgb2JqZWN0IHBhc3NlZCB0byBlZmZlY3RzIHN1YnNjcmliZXJzIGFuZCBzdGF0ZSBtYWNoaW5lIGxpc3RlbmVycy5cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS90eXBlcy9TdG9yZUVmZmVjdC5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYXBpL3R5cGVzXCIsXG4gIFwic2x1Z1wiOiBcIi9hcGkvdHlwZXMvU3RvcmVFZmZlY3RcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdHlwZXMvU3RvcmVFZmZlY3RcIixcbiAgXCJkcmFmdFwiOiBmYWxzZSxcbiAgXCJlZGl0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09tbmlzdGFjL3plZHV4L3RyZWUvbWFzdGVyL2RvY3MvYXBpL3R5cGVzL1N0b3JlRWZmZWN0Lm1keFwiLFxuICBcInRhZ3NcIjogW10sXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJmcm9udE1hdHRlclwiOiB7XG4gICAgXCJpZFwiOiBcIlN0b3JlRWZmZWN0XCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0b3JlRWZmZWN0XCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlNldHRhYmxlXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdHlwZXMvU2V0dGFibGVcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJTdWJzY3JpYmVyXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdHlwZXMvU3Vic2NyaWJlclwiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgYXNzZXRzID0ge1xuXG59O1xuXG5pbXBvcnQgeyBMZWdlbmQsIEl0ZW0sIExpbmssIFRhYnMsIFRzLCB0YWIxLCB0YWIyIH0gZnJvbSAnQHNpdGUvc3JjL2FsbCdcbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJ0RlZmluaXRpb24nLFxuICBpZDogJ2RlZmluaXRpb24nLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuXG4gICAgPHA+e2BBbiBvYmplY3QgdGhhdCBkZXNjcmliZXMgYSBzdGF0ZSBjaGFuZ2UgaW4gYSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiLi4vY2xhc3Nlcy9TdG9yZVwiXG4gICAgICB9fT57YHN0b3JlYH08L2E+e2AuIFplZHV4IGNyZWF0ZXMgb25lIG9mIHRoZXNlIGV2ZXJ5IHRpbWUgYSBzdG9yZSdzIHN0YXRlIGNoYW5nZXMuIFRoaXMgaXMgdGhlIG9iamVjdCBwYXNzZWQgdG8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIlN1YnNjcmliZXIjZWZmZWN0c1wiXG4gICAgICB9fT57YGVmZmVjdHMgc3Vic2NyaWJlcnNgfTwvYT57YCBhbmQgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIk1hY2hpbmVTdGF0ZSNvbmVudGVyXCJcbiAgICAgIH19Pntgc3RhdGUgbWFjaGluZSBsaXN0ZW5lcnNgfTwvYT57YC5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJkZWZpbml0aW9uXCJcbiAgICB9fT57YERlZmluaXRpb25gfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGludGVyZmFjZSBTdG9yZUVmZmVjdDxTdGF0ZSA9IGFueSwgUyBleHRlbmRzIFN0b3JlPFN0YXRlPiA9IFN0b3JlPFN0YXRlPj4ge1xuICBhY3Rpb246IEFjdGlvbkNoYWluXG4gIGVycm9yPzogdW5rbm93blxuICBuZXdTdGF0ZTogU3RhdGVcbiAgb2xkU3RhdGU/OiBTdGF0ZVxuICBzdG9yZTogU1xufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPExlZ2VuZCBtZHhUeXBlPVwiTGVnZW5kXCI+XG4gIDxJdGVtIG5hbWU9XCJhY3Rpb25cIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgQSByZWZlcmVuY2UgdG8gdGhlIDxMaW5rIHRvPVwiQWN0aW9uXCIgbWR4VHlwZT1cIkxpbmtcIj5hY3Rpb248L0xpbms+IChvcnsnICd9XG4gICAgICA8TGluayB0bz1cIkFjdGlvbkNoYWluXCIgbWR4VHlwZT1cIkxpbmtcIj5BY3Rpb25DaGFpbjwvTGluaz4pIG9iamVjdCB0aGF0IHRyaWdnZXJlZCB0aGUgc3RhdGVcbiAgICAgIGNoYW5nZSBvciB0aGF0IGNhdXNlZCB0aGUgZXJyb3IuXG4gICAgPC9wPlxuICAgIDxwPlxuICAgICAgRXZlcnkgc3RhdGUgdXBkYXRlIGluIFplZHV4IGlzIHRyaWdnZXJlZCBieSBhbiBhY3Rpb24uIEV2ZW57JyAnfVxuICAgICAgPExpbmsgdG89XCIuLi9jbGFzc2VzL1N0b3JlI3NldHN0YXRlXCIgbWR4VHlwZT1cIkxpbmtcIj5cbiAgICAgICAgPGNvZGU+c3RvcmUuc2V0U3RhdGUoKTwvY29kZT5cbiAgICAgIDwvTGluaz57JyAnfVxuICAgICAgYW5kIHNpbWlsYXIgQVBJcyBhbHdheXMgZ2VuZXJhdGUgXCJwc3VlZG8gYWN0aW9uc1wiIHJlcHJlc2VudGluZyB0aGUgY2hhbmdlLlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwiZXJyb3JcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgSWYgdGhlIGRpc3BhdGNoIGNhbGwgZXJyb3JlZCwgdGhpcyB3aWxsIGJlIGEgcmVmZXJlbmNlIHRvIHRoZSBlcnJvciB0aGF0XG4gICAgICB3YXMgdGhyb3duLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIFRoaXMgb25seSBhcHBsaWVzIHRvIGVycm9ycyB0aHJvd24gaW4gcmVkdWNlcnMgZHVlIHRvIGEgY2FsbCB0b3snICd9XG4gICAgICA8Y29kZT5zdG9yZS5kaXNwYXRjaCgpPC9jb2RlPi4gSWYgYSBmdW5jdGlvbiBwYXNzZWQgdG97JyAnfVxuICAgICAgPGNvZGU+c3RvcmUuc2V0U3RhdGUoKTwvY29kZT4gYW5kIHNpbWlsYXIgbWV0aG9kcyB0aHJvd3MgYW4gZXJyb3IsIHRoYXRcbiAgICAgIGVycm9yIHdpbGwgYmUgdGhyb3duIGJhY2sgdG8gdGhlIGNhbGxlciBhbmQgc3Vic2NyaWJlcnMgd29uJ3QgYmUgbm90aWZpZWQuXG4gICAgPC9wPlxuICA8L0l0ZW0+XG4gIDxJdGVtIG5hbWU9XCJuZXdTdGF0ZVwiIG1keFR5cGU9XCJJdGVtXCI+XG4gICAgPHA+XG4gICAgICBUaGUgc3RvcmUncyBuZXcgc3RhdGUgYWZ0ZXIgcGFzc2luZyB0aGUgYWN0aW9uIHRocm91Z2ggdGhpcyBzdG9yZSdzXG4gICAgICByZWR1Y2VyIGxheWVyIGFuZCB0byBhbGwgY2hpbGQgc3RvcmVzLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIEVmZmVjdHMgc3Vic2NyaWJlcnMgcnVuIGFmdGVyIHRoZSBzdGF0ZSBoYXMgYmVlbiBjb21wbGV0ZWx5IHVwZGF0ZWQsIHNvXG4gICAgICB0aGlzIHZhbHVlIHdpbGwgYmUgZXhhY3RseSBlcXVhbCB0byA8Y29kZT5zdG9yZS5nZXRTdGF0ZSgpPC9jb2RlPi5cbiAgICA8L3A+XG4gIDwvSXRlbT5cbiAgPEl0ZW0gbmFtZT1cIm9sZFN0YXRlXCIgbWR4VHlwZT1cIkl0ZW1cIj5cbiAgICA8cD5cbiAgICAgIFRoZSBzdGF0ZSBvZiB0aGUgc3RvcmUgYmVmb3JlIHRoaXMgYWN0aW9uIGNoYW5nZWQgaXQuIENhbiBiZSB1bmRlZmluZWQgaWZcbiAgICAgIHRoaXMgaXMgdGhlIGZpcnN0IHRpbWUgdGhpcyBzdG9yZSdzIHN0YXRlIGhhcyBldmVyIGJlZW4gc2V0LlxuICAgIDwvcD5cbiAgPC9JdGVtPlxuICA8SXRlbSBuYW1lPVwic3RvcmVcIiBtZHhUeXBlPVwiSXRlbVwiPlxuICAgIDxwPlxuICAgICAgQSByZWZlcmVuY2UgdG8gdGhlIHN0b3JlIGl0c2VsZi4gVXNlZnVsIHdoZW4gZXh0ZXJuYWwgb3IgZ2VuZXJhbC1wdXJwb3NlXG4gICAgICBlZmZlY3RzIHN1YnNjcmliZXJzIGFyZSByZWdpc3RlcmVkIHdpdGhvdXQgaGF2aW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBzdG9yZVxuICAgICAgdGhleSB3ZXJlIHJlZ2lzdGVyZWQgaW4uXG4gICAgPC9wPlxuICA8L0l0ZW0+XG4gICAgPC9MZWdlbmQ+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwic2VlLWFsc29cIlxuICAgIH19PntgU2VlIEFsc29gfTwvaDI+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPjxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vLi4vd2Fsa3Rocm91Z2gvc3RvcmVzXCJcbiAgICAgICAgfX0+e2BUaGUgU3RvcmVzIHdhbGt0aHJvdWdoYH08L2E+PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uL2NsYXNzZXMvU3RvcmVcIlxuICAgICAgICB9fT57YFRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BTdG9yZWB9PC9pbmxpbmVDb2RlPntgIGNsYXNzYH08L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJMZWdlbmQiLCJJdGVtIiwiTGluayIsIlRhYnMiLCJUcyIsInRhYjEiLCJ0YWIyIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///4812\n')}}]);
"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[525],{1738:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'glossary\',title:\'Glossary\'};var contentTitle=undefined;var metadata={"unversionedId":"api/glossary","id":"api/glossary","title":"Glossary","description":"Dynamic Graph Dependency","source":"@site/docs/api/glossary.md","sourceDirName":"api","slug":"/api/glossary","permalink":"/zedux/docs/api/glossary","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/glossary.md","tags":[],"version":"current","frontMatter":{"id":"glossary","title":"Glossary"},"sidebar":"react","previous":{"title":"internalTypes","permalink":"/zedux/docs/api/utils/internalTypes"},"next":{"title":"@zedux/immer","permalink":"/zedux/docs/packages/immer"}};var assets={};var toc=[{value:\'Dynamic Graph Dependency\',id:\'dynamic-graph-dependency\',level:3},{value:\'Graph Edge\',id:\'graph-edge\',level:3},{value:\'Graph Node\',id:\'graph-node\',level:3},{value:\'Injector\',id:\'injector\',level:3},{value:\'Pseudo Action\',id:\'pseudo-action\',level:3},{value:\'State Factory\',id:\'state-factory\',level:3},{value:\'Static Graph Dependency\',id:\'static-graph-dependency\',level:3},{value:\'Unrestricted Injector\',id:\'unrestricted-injector\',level:3}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"dynamic-graph-dependency"},"Dynamic Graph Dependency"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"When one ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#graph-node"},"graph node")," depends on another, Zedux draws an edge between those two nodes in its internal graph algorithm."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A \\"dynamic\\" dependency is a dependency that will trigger updates in the dependent node when the dependency node\'s state updates. Contrast this to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#static-graph-dependency"},"static dependencies"),", which do not trigger updates."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If the dependent is a React component, it will rerender when the dependency atom instance\'s state changes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"If the dependent is another atom instance, it will reevaluate when the dependency atom instance\'s state changes."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"graph-edge"},"Graph Edge"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The edges between ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#graph-node"},"graph nodes"),". These edges can have several properties, depending on how the edge was created and how it should behave."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Edges can be static or dynamic, internal or external, and async or synchronous. They can be identified by an \\"operation\\" string that helps when debugging."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"graph-node"},"Graph Node"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux builds an internal graph to manage atom dependencies and propagate updates in an optimal way. There are two types of nodes in this graph:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"classes/AtomInstance"},"Atom instances")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"types/AtomSelector"},"AtomSelectors")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"External dependents (usually React components).")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"injector"},"Injector"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Injectors are the \\"hooks\\" of Atoms. Zedux exports several injectors."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"There are 3 basic types of injectors:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"React-hook equivalents, like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectEffect"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectEffect")),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectMemo"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectMemo")),", and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectRef"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectRef")),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Dependency injectors, like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectAtomValue"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomValue"))," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectAtomInstance"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomInstance")),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Utility or dev X injectors, such as ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectAtomGetters"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomGetters"))," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"injectors/injectWhy"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectWhy")),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Injectors should only be used at the top level of ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#state-factory"},"atom state factories"),". Don\'t use them in loops or conditional statements."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Injectors can be used any number of times throughout an atom state factory. For certain one-off operations like setting an atom instance\'s exports or setting a suspense promise, use an ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"classes/AtomApi"},"AtomApi"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Like hooks, you can create custom injectors that compose other injectors. The convention is to start all injectors with the word \\"inject\\", just like we use the word \\"use\\" with React hooks."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"pseudo-action"},"Pseudo Action"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An action created by Zedux to represent a state change. The key to time travel debugging is tracking all actions that modify state. But zero config stores typically use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"classes/Store#setstate"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},".setState()"))," to update their state. Parent and child stores can also cause the state of a store to change."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux translates all of these state updating operations into \\"pseudo-actions\\" - action objects with metadata containing all the info needed to reproduce the state change."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"state-factory"},"State Factory"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A function passed to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"factories/atom"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"atom()"))," (or other atom factory functions like ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"factories/ion"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"ion()")),"). This function is called to produce the initial value of the atom instance. It also runs every time an atom instance reevaluates."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"These are similar to render functions in React. Except of course they return state instead of UI."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"static-graph-dependency"},"Static Graph Dependency"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"When one ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#graph-node"},"graph node")," depends on another, Zedux draws an edge between those two nodes in its internal graph algorithm."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A \\"static\\" dependency is a dependency that does not trigger updates in the dependent node when the dependency node\'s state updates. Contrast this to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#dynamic-graph-dependency"},"dynamic dependencies"),", which do trigger updates."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"While they don\'t trigger updates, static dependencies are still useful for informing Zedux that an atom instance is in use. Zedux won\'t try to clean up atom instances that still have dependents."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"unrestricted-injector"},"Unrestricted Injector"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"#injector"},"injector")," whose use isn\'t restricted like normal injectors. An unrestricted injector still must be used inside an atom state factory (called synchronously during evaluation). However, unlike normal injectors, unrestricted injectors can be used in control flow statements (",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"if"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"for"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"while"),") or after early returns."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You usually won\'t need to worry about this distinction. Just use them like normal injectors and you\'ll be fine."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Examples of unrestricted injectors include ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"injectors/injectAtomGetters"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectAtomGetters()")),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"injectors/injectInvalidate"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectInvalidate()")),", and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"injectors/injectWhy"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectWhy()")),"."));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTczOC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzZCQUVBLDBCQUNBLGVBQ0EsNkJBTU8sR0FBTUUsWUFBVyxDQUFHLENBQzFCQyxFQUFFLENBQUUsVUFBVSxDQUNkQyxLQUFLLENBQUUsVUFDUixDQUFDLENBQ00sR0FBTUMsYUFBWSxDQUFHQyxTQUFTLENBQzlCLEdBQU1DLFNBQVEsQ0FBRyxDQUN0QixlQUFlLENBQUUsY0FBYyxDQUMvQixJQUFJLENBQUUsY0FBYyxDQUNwQixPQUFPLENBQUUsVUFBVSxDQUNuQixhQUFhLENBQUUsMEJBQTBCLENBQ3pDLFFBQVEsQ0FBRSw0QkFBNEIsQ0FDdEMsZUFBZSxDQUFFLEtBQUssQ0FDdEIsTUFBTSxDQUFFLGVBQWUsQ0FDdkIsV0FBVyxDQUFFLDBCQUEwQixDQUN2QyxPQUFPLENBQUUsS0FBSyxDQUNkLFNBQVMsQ0FBRSxvRUFBb0UsQ0FDL0UsTUFBTSxDQUFFLEVBQUUsQ0FDVixTQUFTLENBQUUsU0FBUyxDQUNwQixhQUFhLENBQUUsQ0FDYixJQUFJLENBQUUsVUFBVSxDQUNoQixPQUFPLENBQUUsVUFDWCxDQUFDLENBQ0QsU0FBUyxDQUFFLE9BQU8sQ0FDbEIsVUFBVSxDQUFFLENBQ1YsT0FBTyxDQUFFLGVBQWUsQ0FDeEIsV0FBVyxDQUFFLHFDQUNmLENBQUMsQ0FDRCxNQUFNLENBQUUsQ0FDTixPQUFPLENBQUUsY0FBYyxDQUN2QixXQUFXLENBQUUsNEJBQ2YsQ0FDRixDQUFDLENBQ00sR0FBTUMsT0FBTSxDQUFHLENBRXRCLENBQUMsQ0FHTSxHQUFNQyxJQUFHLENBQUcsQ0FBQyxDQUNsQkMsS0FBSyxDQUFFLDBCQUEwQixDQUNqQ1AsRUFBRSxDQUFFLDBCQUEwQixDQUM5QlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSxZQUFZLENBQ25CUCxFQUFFLENBQUUsWUFBWSxDQUNoQlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSxZQUFZLENBQ25CUCxFQUFFLENBQUUsWUFBWSxDQUNoQlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSxVQUFVLENBQ2pCUCxFQUFFLENBQUUsVUFBVSxDQUNkUSxLQUFLLENBQUUsQ0FDVCxDQUFDLENBQUUsQ0FDREQsS0FBSyxDQUFFLGVBQWUsQ0FDdEJQLEVBQUUsQ0FBRSxlQUFlLENBQ25CUSxLQUFLLENBQUUsQ0FDVCxDQUFDLENBQUUsQ0FDREQsS0FBSyxDQUFFLGVBQWUsQ0FDdEJQLEVBQUUsQ0FBRSxlQUFlLENBQ25CUSxLQUFLLENBQUUsQ0FDVCxDQUFDLENBQUUsQ0FDREQsS0FBSyxDQUFFLHlCQUF5QixDQUNoQ1AsRUFBRSxDQUFFLHlCQUF5QixDQUM3QlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSx1QkFBdUIsQ0FDOUJQLEVBQUUsQ0FBRSx1QkFBdUIsQ0FDM0JRLEtBQUssQ0FBRSxDQUNULENBQUMsQ0FBQyxDQUVGLEdBQU1DLFlBQVcsQ0FBRyxDQUNsQkgsR0FBRyxDQUFIQSxHQUNGLENBQUMsQ0FDRCxHQUFNSSxVQUFTLENBQUcsU0FBUyxDQUNaLFFBQVNDLFdBQVUsTUFHL0IsSUFGREMsV0FBVSxNQUFWQSxVQUFVLENBQ1BDLEtBQUssc0xBRVIsTUFBTyw4REFBQyxTQUFTLG9KQUFLSixXQUFXLENBQU1JLEtBQUssRUFBRSxVQUFVLENBQUVELFVBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxHQUV2RixtRUFDRSxJQUFJLENBQUUsMEJBQTBCLDZCQUNFLENBQ3BDLGtGQUFnQixrRUFBRyxVQUFVLENBQUMsR0FBRyxDQUM3QixNQUFNLENBQUUsYUFBYSxlQUNGLHFHQUF5RyxDQUNoSSw2TkFBeUosa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDdEssTUFBTSxDQUFFLDBCQUEwQix3QkFDTixtQ0FBdUMsQ0FDdkUsbUxBQXFILENBQ3JILHlMQUEySCxDQUMzSCxtRUFDRSxJQUFJLENBQUUsWUFBWSxlQUNFLENBQ3RCLDJGQUF5QixrRUFBRyxVQUFVLENBQUMsR0FBRyxDQUN0QyxNQUFNLENBQUUsYUFBYSxnQkFDRCw4R0FBa0gsQ0FDMUkscU9BQXFLLENBQ3JLLG1FQUNFLElBQUksQ0FBRSxZQUFZLGVBQ0UsQ0FDdEIsd05BQTBKLENBQzFKLHVFQUNFLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFFLHNCQUFzQixtQkFDUCxDQUFLLENBQ2hDLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLEVBQUMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDbEMsTUFBTSxDQUFFLG9CQUFvQixrQkFDTixDQUFLLENBQy9CLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLG9EQUF5RCxDQUN6RSxDQUNMLG1FQUNFLElBQUksQ0FBRSxVQUFVLGFBQ0UsQ0FDcEIsK0lBQStFLENBQy9FLDhHQUFnRCxDQUNoRCx1RUFDRSxtRUFBSSxVQUFVLENBQUMsSUFBSSxrQ0FBa0Msa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDbkUsTUFBTSxDQUFFLHdCQUF3QixFQUMvQiwyRUFBWSxVQUFVLENBQUMsR0FBRyxpQkFBOEIsQ0FBSSxNQUFNLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ3JGLE1BQU0sQ0FBRSxzQkFBc0IsRUFDN0IsMkVBQVksVUFBVSxDQUFDLEdBQUcsZUFBNEIsQ0FBSSxVQUFVLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ3ZGLE1BQU0sQ0FBRSxxQkFBcUIsRUFDNUIsMkVBQVksVUFBVSxDQUFDLEdBQUcsY0FBMkIsQ0FBSSxLQUFVLENBQ3hFLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLGdDQUFnQyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUNqRSxNQUFNLENBQUUsMkJBQTJCLEVBQ2xDLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLG9CQUFpQyxDQUFJLFNBQVMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDM0YsTUFBTSxDQUFFLDhCQUE4QixFQUNyQywyRUFBWSxVQUFVLENBQUMsR0FBRyx1QkFBb0MsQ0FBSSxLQUFVLENBQ2pGLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLHlDQUF5QyxrRUFBRyxVQUFVLENBQUMsSUFBSSxDQUMxRSxNQUFNLENBQUUsNkJBQTZCLEVBQ3BDLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLHNCQUFtQyxDQUFJLFNBQVMsa0VBQUcsVUFBVSxDQUFDLElBQUksQ0FDN0YsTUFBTSxDQUFFLHFCQUFxQixFQUM1QiwyRUFBWSxVQUFVLENBQUMsR0FBRyxjQUEyQixDQUFJLEtBQVUsQ0FDckUsQ0FDTCwySEFBeUQsa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDdEUsTUFBTSxDQUFFLGdCQUFnQix5QkFDSyx3REFBNEQsQ0FDN0Ysa1FBQWdNLGtFQUFHLFVBQVUsQ0FBQyxHQUFHLENBQzdNLE1BQU0sQ0FBRSxpQkFBaUIsWUFDVCxLQUFTLENBQzdCLHlRQUF1TSxDQUN2TSxtRUFDRSxJQUFJLENBQUUsZUFBZSxrQkFDRSxDQUN6QixrUEFBZ0wsa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDN0wsTUFBTSxDQUFFLHdCQUF3QixFQUMvQiwyRUFBWSxVQUFVLENBQUMsR0FBRyxnQkFBNkIsQ0FBSSxrR0FBc0csQ0FDdEsscVBBQXFMLENBQ3JMLG1FQUNFLElBQUksQ0FBRSxlQUFlLGtCQUNFLENBQ3pCLDhGQUE0QixrRUFBRyxVQUFVLENBQUMsR0FBRyxDQUN6QyxNQUFNLENBQUUsZ0JBQWdCLEVBQ3ZCLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLFdBQXdCLENBQUksMkNBQTJDLGtFQUFHLFVBQVUsQ0FBQyxHQUFHLENBQ25ILE1BQU0sQ0FBRSxlQUFlLEVBQ3RCLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLFVBQXVCLENBQUksdUlBQTJJLENBQ3JNLDBLQUE0RyxDQUM1RyxtRUFDRSxJQUFJLENBQUUseUJBQXlCLDRCQUNFLENBQ25DLGtGQUFnQixrRUFBRyxVQUFVLENBQUMsR0FBRyxDQUM3QixNQUFNLENBQUUsYUFBYSxlQUNGLHFHQUF5RyxDQUNoSSxnT0FBNEosa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDekssTUFBTSxDQUFFLDJCQUEyQix5QkFDTiwrQkFBbUMsQ0FDcEUsMlFBQTZNLENBQzdNLG1FQUNFLElBQUksQ0FBRSx1QkFBdUIsMEJBQ0UsQ0FDakMsNEVBQVUsa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDdkIsTUFBTSxDQUFFLFdBQVcsYUFDRiwyUUFBMlEsMkVBQVksVUFBVSxDQUFDLEdBQUcsT0FBb0IsTUFBTSwyRUFBWSxVQUFVLENBQUMsR0FBRyxRQUFxQixNQUFNLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLFVBQXVCLDZCQUFpQyxDQUMzZCx3TEFBMEgsQ0FDMUgsb0hBQWtELGtFQUFHLFVBQVUsQ0FBQyxHQUFHLENBQy9ELE1BQU0sQ0FBRSw2QkFBNkIsRUFDcEMsMkVBQVksVUFBVSxDQUFDLEdBQUcsd0JBQXFDLENBQUksTUFBTSxrRUFBRyxVQUFVLENBQUMsR0FBRyxDQUMzRixNQUFNLENBQUUsNEJBQTRCLEVBQ25DLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLHVCQUFvQyxDQUFJLFVBQVUsa0VBQUcsVUFBVSxDQUFDLEdBQUcsQ0FDOUYsTUFBTSxDQUFFLHFCQUFxQixFQUM1QiwyRUFBWSxVQUFVLENBQUMsR0FBRyxnQkFBNkIsQ0FBSSxLQUFTLENBQzdELENBQ2hCLENBQ0EsQ0FDQUQsVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FwaS9nbG9zc2FyeS5tZD8xMTNhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdnbG9zc2FyeScsXG5cdHRpdGxlOiAnR2xvc3NhcnknXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYXBpL2dsb3NzYXJ5XCIsXG4gIFwiaWRcIjogXCJhcGkvZ2xvc3NhcnlcIixcbiAgXCJ0aXRsZVwiOiBcIkdsb3NzYXJ5XCIsXG4gIFwiZGVzY3JpcHRpb25cIjogXCJEeW5hbWljIEdyYXBoIERlcGVuZGVuY3lcIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS9nbG9zc2FyeS5tZFwiLFxuICBcInNvdXJjZURpck5hbWVcIjogXCJhcGlcIixcbiAgXCJzbHVnXCI6IFwiL2FwaS9nbG9zc2FyeVwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9nbG9zc2FyeVwiLFxuICBcImRyYWZ0XCI6IGZhbHNlLFxuICBcImVkaXRVcmxcIjogXCJodHRwczovL2dpdGh1Yi5jb20vT21uaXN0YWMvemVkdXgvdHJlZS9tYXN0ZXIvZG9jcy9hcGkvZ2xvc3NhcnkubWRcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJnbG9zc2FyeVwiLFxuICAgIFwidGl0bGVcIjogXCJHbG9zc2FyeVwiXG4gIH0sXG4gIFwic2lkZWJhclwiOiBcInJlYWN0XCIsXG4gIFwicHJldmlvdXNcIjoge1xuICAgIFwidGl0bGVcIjogXCJpbnRlcm5hbFR5cGVzXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hcGkvdXRpbHMvaW50ZXJuYWxUeXBlc1wiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkB6ZWR1eC9pbW1lclwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvcGFja2FnZXMvaW1tZXJcIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdEeW5hbWljIEdyYXBoIERlcGVuZGVuY3knLFxuICBpZDogJ2R5bmFtaWMtZ3JhcGgtZGVwZW5kZW5jeScsXG4gIGxldmVsOiAzXG59LCB7XG4gIHZhbHVlOiAnR3JhcGggRWRnZScsXG4gIGlkOiAnZ3JhcGgtZWRnZScsXG4gIGxldmVsOiAzXG59LCB7XG4gIHZhbHVlOiAnR3JhcGggTm9kZScsXG4gIGlkOiAnZ3JhcGgtbm9kZScsXG4gIGxldmVsOiAzXG59LCB7XG4gIHZhbHVlOiAnSW5qZWN0b3InLFxuICBpZDogJ2luamVjdG9yJyxcbiAgbGV2ZWw6IDNcbn0sIHtcbiAgdmFsdWU6ICdQc2V1ZG8gQWN0aW9uJyxcbiAgaWQ6ICdwc2V1ZG8tYWN0aW9uJyxcbiAgbGV2ZWw6IDNcbn0sIHtcbiAgdmFsdWU6ICdTdGF0ZSBGYWN0b3J5JyxcbiAgaWQ6ICdzdGF0ZS1mYWN0b3J5JyxcbiAgbGV2ZWw6IDNcbn0sIHtcbiAgdmFsdWU6ICdTdGF0aWMgR3JhcGggRGVwZW5kZW5jeScsXG4gIGlkOiAnc3RhdGljLWdyYXBoLWRlcGVuZGVuY3knLFxuICBsZXZlbDogM1xufSwge1xuICB2YWx1ZTogJ1VucmVzdHJpY3RlZCBJbmplY3RvcicsXG4gIGlkOiAndW5yZXN0cmljdGVkLWluamVjdG9yJyxcbiAgbGV2ZWw6IDNcbn1dO1xuXG5jb25zdCBsYXlvdXRQcm9wcyA9IHtcbiAgdG9jXG59O1xuY29uc3QgTURYTGF5b3V0ID0gXCJ3cmFwcGVyXCJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1EWENvbnRlbnQoe1xuICBjb21wb25lbnRzLFxuICAuLi5wcm9wc1xufSkge1xuICByZXR1cm4gPE1EWExheW91dCB7Li4ubGF5b3V0UHJvcHN9IHsuLi5wcm9wc30gY29tcG9uZW50cz17Y29tcG9uZW50c30gbWR4VHlwZT1cIk1EWExheW91dFwiPlxuXG4gICAgPGgzIHsuLi57XG4gICAgICBcImlkXCI6IFwiZHluYW1pYy1ncmFwaC1kZXBlbmRlbmN5XCJcbiAgICB9fT57YER5bmFtaWMgR3JhcGggRGVwZW5kZW5jeWB9PC9oMz5cbiAgICA8cD57YFdoZW4gb25lIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjZ3JhcGgtbm9kZVwiXG4gICAgICB9fT57YGdyYXBoIG5vZGVgfTwvYT57YCBkZXBlbmRzIG9uIGFub3RoZXIsIFplZHV4IGRyYXdzIGFuIGVkZ2UgYmV0d2VlbiB0aG9zZSB0d28gbm9kZXMgaW4gaXRzIGludGVybmFsIGdyYXBoIGFsZ29yaXRobS5gfTwvcD5cbiAgICA8cD57YEEgXCJkeW5hbWljXCIgZGVwZW5kZW5jeSBpcyBhIGRlcGVuZGVuY3kgdGhhdCB3aWxsIHRyaWdnZXIgdXBkYXRlcyBpbiB0aGUgZGVwZW5kZW50IG5vZGUgd2hlbiB0aGUgZGVwZW5kZW5jeSBub2RlJ3Mgc3RhdGUgdXBkYXRlcy4gQ29udHJhc3QgdGhpcyB0byBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI3N0YXRpYy1ncmFwaC1kZXBlbmRlbmN5XCJcbiAgICAgIH19Pntgc3RhdGljIGRlcGVuZGVuY2llc2B9PC9hPntgLCB3aGljaCBkbyBub3QgdHJpZ2dlciB1cGRhdGVzLmB9PC9wPlxuICAgIDxwPntgSWYgdGhlIGRlcGVuZGVudCBpcyBhIFJlYWN0IGNvbXBvbmVudCwgaXQgd2lsbCByZXJlbmRlciB3aGVuIHRoZSBkZXBlbmRlbmN5IGF0b20gaW5zdGFuY2UncyBzdGF0ZSBjaGFuZ2VzLmB9PC9wPlxuICAgIDxwPntgSWYgdGhlIGRlcGVuZGVudCBpcyBhbm90aGVyIGF0b20gaW5zdGFuY2UsIGl0IHdpbGwgcmVldmFsdWF0ZSB3aGVuIHRoZSBkZXBlbmRlbmN5IGF0b20gaW5zdGFuY2UncyBzdGF0ZSBjaGFuZ2VzLmB9PC9wPlxuICAgIDxoMyB7Li4ue1xuICAgICAgXCJpZFwiOiBcImdyYXBoLWVkZ2VcIlxuICAgIH19PntgR3JhcGggRWRnZWB9PC9oMz5cbiAgICA8cD57YFRoZSBlZGdlcyBiZXR3ZWVuIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIjZ3JhcGgtbm9kZVwiXG4gICAgICB9fT57YGdyYXBoIG5vZGVzYH08L2E+e2AuIFRoZXNlIGVkZ2VzIGNhbiBoYXZlIHNldmVyYWwgcHJvcGVydGllcywgZGVwZW5kaW5nIG9uIGhvdyB0aGUgZWRnZSB3YXMgY3JlYXRlZCBhbmQgaG93IGl0IHNob3VsZCBiZWhhdmUuYH08L3A+XG4gICAgPHA+e2BFZGdlcyBjYW4gYmUgc3RhdGljIG9yIGR5bmFtaWMsIGludGVybmFsIG9yIGV4dGVybmFsLCBhbmQgYXN5bmMgb3Igc3luY2hyb25vdXMuIFRoZXkgY2FuIGJlIGlkZW50aWZpZWQgYnkgYW4gXCJvcGVyYXRpb25cIiBzdHJpbmcgdGhhdCBoZWxwcyB3aGVuIGRlYnVnZ2luZy5gfTwvcD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJncmFwaC1ub2RlXCJcbiAgICB9fT57YEdyYXBoIE5vZGVgfTwvaDM+XG4gICAgPHA+e2BaZWR1eCBidWlsZHMgYW4gaW50ZXJuYWwgZ3JhcGggdG8gbWFuYWdlIGF0b20gZGVwZW5kZW5jaWVzIGFuZCBwcm9wYWdhdGUgdXBkYXRlcyBpbiBhbiBvcHRpbWFsIHdheS4gVGhlcmUgYXJlIHR3byB0eXBlcyBvZiBub2RlcyBpbiB0aGlzIGdyYXBoOmB9PC9wPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImNsYXNzZXMvQXRvbUluc3RhbmNlXCJcbiAgICAgICAgfX0+e2BBdG9tIGluc3RhbmNlc2B9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJ0eXBlcy9BdG9tU2VsZWN0b3JcIlxuICAgICAgICB9fT57YEF0b21TZWxlY3RvcnNgfTwvYT48L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgRXh0ZXJuYWwgZGVwZW5kZW50cyAodXN1YWxseSBSZWFjdCBjb21wb25lbnRzKS5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJpbmplY3RvclwiXG4gICAgfX0+e2BJbmplY3RvcmB9PC9oMz5cbiAgICA8cD57YEluamVjdG9ycyBhcmUgdGhlIFwiaG9va3NcIiBvZiBBdG9tcy4gWmVkdXggZXhwb3J0cyBzZXZlcmFsIGluamVjdG9ycy5gfTwvcD5cbiAgICA8cD57YFRoZXJlIGFyZSAzIGJhc2ljIHR5cGVzIG9mIGluamVjdG9yczpgfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BSZWFjdC1ob29rIGVxdWl2YWxlbnRzLCBsaWtlIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCJpbmplY3RvcnMvaW5qZWN0RWZmZWN0XCJcbiAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGluamVjdEVmZmVjdGB9PC9pbmxpbmVDb2RlPjwvYT57YCwgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImluamVjdG9ycy9pbmplY3RNZW1vXCJcbiAgICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGluamVjdE1lbW9gfTwvaW5saW5lQ29kZT48L2E+e2AsIGFuZCBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaW5qZWN0b3JzL2luamVjdFJlZlwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RSZWZgfTwvaW5saW5lQ29kZT48L2E+e2AuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgRGVwZW5kZW5jeSBpbmplY3RvcnMsIGxpa2UgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImluamVjdG9ycy9pbmplY3RBdG9tVmFsdWVcIlxuICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgaW5qZWN0QXRvbVZhbHVlYH08L2lubGluZUNvZGU+PC9hPntgIGFuZCBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiaW5qZWN0b3JzL2luamVjdEF0b21JbnN0YW5jZVwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RBdG9tSW5zdGFuY2VgfTwvaW5saW5lQ29kZT48L2E+e2AuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgVXRpbGl0eSBvciBkZXYgWCBpbmplY3RvcnMsIHN1Y2ggYXMgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImluamVjdG9ycy9pbmplY3RBdG9tR2V0dGVyc1wiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RBdG9tR2V0dGVyc2B9PC9pbmxpbmVDb2RlPjwvYT57YCBhbmQgYH08YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcImluamVjdG9ycy9pbmplY3RXaHlcIlxuICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgaW5qZWN0V2h5YH08L2lubGluZUNvZGU+PC9hPntgLmB9PC9saT5cbiAgICA8L3VsPlxuICAgIDxwPntgSW5qZWN0b3JzIHNob3VsZCBvbmx5IGJlIHVzZWQgYXQgdGhlIHRvcCBsZXZlbCBvZiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI3N0YXRlLWZhY3RvcnlcIlxuICAgICAgfX0+e2BhdG9tIHN0YXRlIGZhY3Rvcmllc2B9PC9hPntgLiBEb24ndCB1c2UgdGhlbSBpbiBsb29wcyBvciBjb25kaXRpb25hbCBzdGF0ZW1lbnRzLmB9PC9wPlxuICAgIDxwPntgSW5qZWN0b3JzIGNhbiBiZSB1c2VkIGFueSBudW1iZXIgb2YgdGltZXMgdGhyb3VnaG91dCBhbiBhdG9tIHN0YXRlIGZhY3RvcnkuIEZvciBjZXJ0YWluIG9uZS1vZmYgb3BlcmF0aW9ucyBsaWtlIHNldHRpbmcgYW4gYXRvbSBpbnN0YW5jZSdzIGV4cG9ydHMgb3Igc2V0dGluZyBhIHN1c3BlbnNlIHByb21pc2UsIHVzZSBhbiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiY2xhc3Nlcy9BdG9tQXBpXCJcbiAgICAgIH19PntgQXRvbUFwaWB9PC9hPntgLmB9PC9wPlxuICAgIDxwPntgTGlrZSBob29rcywgeW91IGNhbiBjcmVhdGUgY3VzdG9tIGluamVjdG9ycyB0aGF0IGNvbXBvc2Ugb3RoZXIgaW5qZWN0b3JzLiBUaGUgY29udmVudGlvbiBpcyB0byBzdGFydCBhbGwgaW5qZWN0b3JzIHdpdGggdGhlIHdvcmQgXCJpbmplY3RcIiwganVzdCBsaWtlIHdlIHVzZSB0aGUgd29yZCBcInVzZVwiIHdpdGggUmVhY3QgaG9va3MuYH08L3A+XG4gICAgPGgzIHsuLi57XG4gICAgICBcImlkXCI6IFwicHNldWRvLWFjdGlvblwiXG4gICAgfX0+e2BQc2V1ZG8gQWN0aW9uYH08L2gzPlxuICAgIDxwPntgQW4gYWN0aW9uIGNyZWF0ZWQgYnkgWmVkdXggdG8gcmVwcmVzZW50IGEgc3RhdGUgY2hhbmdlLiBUaGUga2V5IHRvIHRpbWUgdHJhdmVsIGRlYnVnZ2luZyBpcyB0cmFja2luZyBhbGwgYWN0aW9ucyB0aGF0IG1vZGlmeSBzdGF0ZS4gQnV0IHplcm8gY29uZmlnIHN0b3JlcyB0eXBpY2FsbHkgdXNlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJjbGFzc2VzL1N0b3JlI3NldHN0YXRlXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2Auc2V0U3RhdGUoKWB9PC9pbmxpbmVDb2RlPjwvYT57YCB0byB1cGRhdGUgdGhlaXIgc3RhdGUuIFBhcmVudCBhbmQgY2hpbGQgc3RvcmVzIGNhbiBhbHNvIGNhdXNlIHRoZSBzdGF0ZSBvZiBhIHN0b3JlIHRvIGNoYW5nZS5gfTwvcD5cbiAgICA8cD57YFplZHV4IHRyYW5zbGF0ZXMgYWxsIG9mIHRoZXNlIHN0YXRlIHVwZGF0aW5nIG9wZXJhdGlvbnMgaW50byBcInBzZXVkby1hY3Rpb25zXCIgLSBhY3Rpb24gb2JqZWN0cyB3aXRoIG1ldGFkYXRhIGNvbnRhaW5pbmcgYWxsIHRoZSBpbmZvIG5lZWRlZCB0byByZXByb2R1Y2UgdGhlIHN0YXRlIGNoYW5nZS5gfTwvcD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJzdGF0ZS1mYWN0b3J5XCJcbiAgICB9fT57YFN0YXRlIEZhY3RvcnlgfTwvaDM+XG4gICAgPHA+e2BBIGZ1bmN0aW9uIHBhc3NlZCB0byBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiZmFjdG9yaWVzL2F0b21cIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGF0b20oKWB9PC9pbmxpbmVDb2RlPjwvYT57YCAob3Igb3RoZXIgYXRvbSBmYWN0b3J5IGZ1bmN0aW9ucyBsaWtlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJmYWN0b3JpZXMvaW9uXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2Bpb24oKWB9PC9pbmxpbmVDb2RlPjwvYT57YCkuIFRoaXMgZnVuY3Rpb24gaXMgY2FsbGVkIHRvIHByb2R1Y2UgdGhlIGluaXRpYWwgdmFsdWUgb2YgdGhlIGF0b20gaW5zdGFuY2UuIEl0IGFsc28gcnVucyBldmVyeSB0aW1lIGFuIGF0b20gaW5zdGFuY2UgcmVldmFsdWF0ZXMuYH08L3A+XG4gICAgPHA+e2BUaGVzZSBhcmUgc2ltaWxhciB0byByZW5kZXIgZnVuY3Rpb25zIGluIFJlYWN0LiBFeGNlcHQgb2YgY291cnNlIHRoZXkgcmV0dXJuIHN0YXRlIGluc3RlYWQgb2YgVUkuYH08L3A+XG4gICAgPGgzIHsuLi57XG4gICAgICBcImlkXCI6IFwic3RhdGljLWdyYXBoLWRlcGVuZGVuY3lcIlxuICAgIH19PntgU3RhdGljIEdyYXBoIERlcGVuZGVuY3lgfTwvaDM+XG4gICAgPHA+e2BXaGVuIG9uZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI2dyYXBoLW5vZGVcIlxuICAgICAgfX0+e2BncmFwaCBub2RlYH08L2E+e2AgZGVwZW5kcyBvbiBhbm90aGVyLCBaZWR1eCBkcmF3cyBhbiBlZGdlIGJldHdlZW4gdGhvc2UgdHdvIG5vZGVzIGluIGl0cyBpbnRlcm5hbCBncmFwaCBhbGdvcml0aG0uYH08L3A+XG4gICAgPHA+e2BBIFwic3RhdGljXCIgZGVwZW5kZW5jeSBpcyBhIGRlcGVuZGVuY3kgdGhhdCBkb2VzIG5vdCB0cmlnZ2VyIHVwZGF0ZXMgaW4gdGhlIGRlcGVuZGVudCBub2RlIHdoZW4gdGhlIGRlcGVuZGVuY3kgbm9kZSdzIHN0YXRlIHVwZGF0ZXMuIENvbnRyYXN0IHRoaXMgdG8gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIiNkeW5hbWljLWdyYXBoLWRlcGVuZGVuY3lcIlxuICAgICAgfX0+e2BkeW5hbWljIGRlcGVuZGVuY2llc2B9PC9hPntgLCB3aGljaCBkbyB0cmlnZ2VyIHVwZGF0ZXMuYH08L3A+XG4gICAgPHA+e2BXaGlsZSB0aGV5IGRvbid0IHRyaWdnZXIgdXBkYXRlcywgc3RhdGljIGRlcGVuZGVuY2llcyBhcmUgc3RpbGwgdXNlZnVsIGZvciBpbmZvcm1pbmcgWmVkdXggdGhhdCBhbiBhdG9tIGluc3RhbmNlIGlzIGluIHVzZS4gWmVkdXggd29uJ3QgdHJ5IHRvIGNsZWFuIHVwIGF0b20gaW5zdGFuY2VzIHRoYXQgc3RpbGwgaGF2ZSBkZXBlbmRlbnRzLmB9PC9wPlxuICAgIDxoMyB7Li4ue1xuICAgICAgXCJpZFwiOiBcInVucmVzdHJpY3RlZC1pbmplY3RvclwiXG4gICAgfX0+e2BVbnJlc3RyaWN0ZWQgSW5qZWN0b3JgfTwvaDM+XG4gICAgPHA+e2BBbiBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiI2luamVjdG9yXCJcbiAgICAgIH19PntgaW5qZWN0b3JgfTwvYT57YCB3aG9zZSB1c2UgaXNuJ3QgcmVzdHJpY3RlZCBsaWtlIG5vcm1hbCBpbmplY3RvcnMuIEFuIHVucmVzdHJpY3RlZCBpbmplY3RvciBzdGlsbCBtdXN0IGJlIHVzZWQgaW5zaWRlIGFuIGF0b20gc3RhdGUgZmFjdG9yeSAoY2FsbGVkIHN5bmNocm9ub3VzbHkgZHVyaW5nIGV2YWx1YXRpb24pLiBIb3dldmVyLCB1bmxpa2Ugbm9ybWFsIGluamVjdG9ycywgdW5yZXN0cmljdGVkIGluamVjdG9ycyBjYW4gYmUgdXNlZCBpbiBjb250cm9sIGZsb3cgc3RhdGVtZW50cyAoYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaWZgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgZm9yYH08L2lubGluZUNvZGU+e2AsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YHdoaWxlYH08L2lubGluZUNvZGU+e2ApIG9yIGFmdGVyIGVhcmx5IHJldHVybnMuYH08L3A+XG4gICAgPHA+e2BZb3UgdXN1YWxseSB3b24ndCBuZWVkIHRvIHdvcnJ5IGFib3V0IHRoaXMgZGlzdGluY3Rpb24uIEp1c3QgdXNlIHRoZW0gbGlrZSBub3JtYWwgaW5qZWN0b3JzIGFuZCB5b3UnbGwgYmUgZmluZS5gfTwvcD5cbiAgICA8cD57YEV4YW1wbGVzIG9mIHVucmVzdHJpY3RlZCBpbmplY3RvcnMgaW5jbHVkZSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaW5qZWN0b3JzL2luamVjdEF0b21HZXR0ZXJzXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RBdG9tR2V0dGVycygpYH08L2lubGluZUNvZGU+PC9hPntgLCBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaW5qZWN0b3JzL2luamVjdEludmFsaWRhdGVcIlxuICAgICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImFcIj57YGluamVjdEludmFsaWRhdGUoKWB9PC9pbmxpbmVDb2RlPjwvYT57YCwgYW5kIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJpbmplY3RvcnMvaW5qZWN0V2h5XCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbmplY3RXaHkoKWB9PC9pbmxpbmVDb2RlPjwvYT57YC5gfTwvcD5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwidG9jIiwidmFsdWUiLCJsZXZlbCIsImxheW91dFByb3BzIiwiTURYTGF5b3V0IiwiTURYQ29udGVudCIsImNvbXBvbmVudHMiLCJwcm9wcyIsImlzTURYQ29tcG9uZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1738\n')}}]);
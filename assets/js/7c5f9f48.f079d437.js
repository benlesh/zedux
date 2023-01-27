"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[6793],{3905:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },\n/* harmony export */   "kt": function() { return /* binding */ createElement; }\n/* harmony export */ });\n/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nvar isFunction = function isFunction(obj) {\n  return typeof obj === \'function\';\n};\n\nvar MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\nvar withMDXComponents = function withMDXComponents(Component) {\n  return function (props) {\n    var allComponents = useMDXComponents(props.components);\n    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {\n      components: allComponents\n    }));\n  };\n};\nvar useMDXComponents = function useMDXComponents(components) {\n  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);\n  var allComponents = contextComponents;\n\n  if (components) {\n    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);\n  }\n\n  return allComponents;\n};\nvar MDXProvider = function MDXProvider(props) {\n  var allComponents = useMDXComponents(props.components);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {\n    value: allComponents\n  }, props.children);\n};\n\nvar TYPE_PROP_NAME = \'mdxType\';\nvar DEFAULTS = {\n  inlineCode: \'code\',\n  wrapper: function wrapper(_ref) {\n    var children = _ref.children;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);\n  }\n};\nvar MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {\n  var propComponents = props.components,\n      mdxType = props.mdxType,\n      originalType = props.originalType,\n      parentName = props.parentName,\n      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);\n\n  var components = useMDXComponents(propComponents);\n  var type = mdxType;\n  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;\n\n  if (propComponents) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({\n      ref: ref\n    }, etc), {}, {\n      components: propComponents\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({\n    ref: ref\n  }, etc));\n});\nMDXCreateElement.displayName = \'MDXCreateElement\';\nfunction createElement (type, props) {\n  var args = arguments;\n  var mdxType = props && props.mdxType;\n\n  if (typeof type === \'string\' || mdxType) {\n    var argsLength = args.length;\n    var createElementArgArray = new Array(argsLength);\n    createElementArgArray[0] = MDXCreateElement;\n    var newProps = {};\n\n    for (var key in props) {\n      if (hasOwnProperty.call(props, key)) {\n        newProps[key] = props[key];\n      }\n    }\n\n    newProps.originalType = type;\n    newProps[TYPE_PROP_NAME] = typeof type === \'string\' ? type : mdxType;\n    createElementArgArray[1] = newProps;\n\n    for (var i = 2; i < argsLength; i++) {\n      createElementArgArray[i] = args[i];\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkwNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixnREFBbUIsR0FBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFnQjtBQUMxQzs7QUFFQTtBQUNBLDZHQUE2RztBQUM3Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUIsQ0FBQywyQ0FBYyxJQUFJO0FBQzlEO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBLEtBQUssVUFBVTtBQUNmO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBOztBQUVBLFdBQVcsc0RBQXlCO0FBQ3BDOztBQUVBLFNBQVMsc0RBQXlCO0FBQ2xDOztBQUU4RiIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcz8wY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3905\n')},6140:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'Action\',title:\'Action\'};var contentTitle=undefined;var metadata={"unversionedId":"api/types/Action","id":"api/types/Action","title":"Action","description":"The objects ultimately dispatched to Zedux stores.","source":"@site/docs/api/types/Action.mdx","sourceDirName":"api/types","slug":"/api/types/Action","permalink":"/zedux/docs/api/types/Action","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/api/types/Action.mdx","tags":[],"version":"current","frontMatter":{"id":"Action","title":"Action"},"sidebar":"react","previous":{"title":"injectWhy","permalink":"/zedux/docs/api/injectors/injectWhy"},"next":{"title":"ActionChain","permalink":"/zedux/docs/api/types/ActionChain"}};var assets={};var toc=[{value:\'Definition\',id:\'definition\',level:2},{value:\'Examples\',id:\'examples\',level:2},{value:\'Creation\',id:\'creation\',level:2},{value:\'See Also\',id:\'see-also\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"The objects ultimately dispatched to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../classes/Store"},"Zedux stores"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Actions can also be wrapped in ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"ActionChain"},"ActionChains"),", which can contain additional metadata. Zedux uses this pattern internally for its ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"/not-done"},"store composition model"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"definition"},"Definition"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"export interface Action<\\n  Payload = any,\\n  Type extends string = string,\\n  Meta = any\\n> {\\n  meta?: Meta\\n  payload?: Payload\\n  type: Type\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux actions must contain a string ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"type")," property and may contain optional ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"meta")," and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"payload")," properties."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"examples"},"Examples"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const normalAction: Action = {\\n  type: \'todos/add\',\\n  payload: { text: \'be awesome\' },\\n}\\n\\nconst withMeta: Action = {\\n  type: \'todos/add\',\\n  meta: {\\n    dispatchedFrom: \'MyComponent\',\\n  },\\n}\\n\\nconst typeOnly: Action = {\\n  type: \'dropdown/toggle\',\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"creation"},"Creation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"You don\'t need to create action objects manually. Zedux provides a high-level ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../factories/actionFactory"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"actionFactory()"))," \\"factory factory\\" for action creation:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { actionFactory } from \'@zedux/react\'\\n\\nconst test = actionFactory(\'test\')\\ntest(\'payload\') // { type: \'test\', payload: \'payload\' }\\n\\nconst addTodo = actionFactory<Todo>(\'todos/add\')\\n\\nstore.dispatch(addTodo({ text: \'be awesome\' }))\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"see-also"},"See Also"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../../walkthrough/stores"},"The Stores walkthrough")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../factories/actionFactory"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"actionFactory()")))));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQ2xHLE1BQU0sQ0FBRSw0QkFBNEIsRUFDbkMsMkVBQVksVUFBVSxDQUFDLEdBQUcsb0JBQWlDLENBQUksNkNBQStDLENBQ25ILHdFQUFLLHFFQUFNLFVBQVUsQ0FBQyxLQUFLLENBQ3ZCLFdBQVcsQ0FBRSxhQUFhLHlQQVN6QixDQUFNLENBQ1gsbUVBQ0UsSUFBSSxDQUFFLFVBQVUsYUFDRSxDQUNwQix1RUFDRSxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSwwQkFBMEIsMkJBQ0gsQ0FBSyxDQUN4QyxtRUFBSSxVQUFVLENBQUMsSUFBSSxFQUFDLGtFQUFHLFVBQVUsQ0FBQyxJQUFJLENBQ2xDLE1BQU0sQ0FBRSw0QkFBNEIsRUFDbkMsMkVBQVksVUFBVSxDQUFDLEdBQUcsb0JBQWlDLENBQUksQ0FBSyxDQUN0RSxDQUNPLENBQ2hCLENBQ0EsQ0FDQUQsVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FwaS90eXBlcy9BY3Rpb24ubWR4PzQ2ZTEiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbi8qIEBqc3ggbWR4ICovXG4vKiBAanN4RnJhZyBSZWFjdC5GcmFnbWVudCAqL1xuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbWR4IH0gZnJvbSAnQG1keC1qcy9yZWFjdCc7XG5cblxuZXhwb3J0IGNvbnN0IGZyb250TWF0dGVyID0ge1xuXHRpZDogJ0FjdGlvbicsXG5cdHRpdGxlOiAnQWN0aW9uJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFwaS90eXBlcy9BY3Rpb25cIixcbiAgXCJpZFwiOiBcImFwaS90eXBlcy9BY3Rpb25cIixcbiAgXCJ0aXRsZVwiOiBcIkFjdGlvblwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiVGhlIG9iamVjdHMgdWx0aW1hdGVseSBkaXNwYXRjaGVkIHRvIFplZHV4IHN0b3Jlcy5cIixcbiAgXCJzb3VyY2VcIjogXCJAc2l0ZS9kb2NzL2FwaS90eXBlcy9BY3Rpb24ubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFwaS90eXBlc1wiLFxuICBcInNsdWdcIjogXCIvYXBpL3R5cGVzL0FjdGlvblwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS90eXBlcy9BY3Rpb25cIixcbiAgXCJkcmFmdFwiOiBmYWxzZSxcbiAgXCJlZGl0VXJsXCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL09tbmlzdGFjL3plZHV4L3RyZWUvbWFzdGVyL2RvY3MvYXBpL3R5cGVzL0FjdGlvbi5tZHhcIixcbiAgXCJ0YWdzXCI6IFtdLFxuICBcInZlcnNpb25cIjogXCJjdXJyZW50XCIsXG4gIFwiZnJvbnRNYXR0ZXJcIjoge1xuICAgIFwiaWRcIjogXCJBY3Rpb25cIixcbiAgICBcInRpdGxlXCI6IFwiQWN0aW9uXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcImluamVjdFdoeVwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL2luamVjdG9ycy9pbmplY3RXaHlcIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJBY3Rpb25DaGFpblwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3MvYXBpL3R5cGVzL0FjdGlvbkNoYWluXCJcbiAgfVxufTtcbmV4cG9ydCBjb25zdCBhc3NldHMgPSB7XG5cbn07XG5cblxuZXhwb3J0IGNvbnN0IHRvYyA9IFt7XG4gIHZhbHVlOiAnRGVmaW5pdGlvbicsXG4gIGlkOiAnZGVmaW5pdGlvbicsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnRXhhbXBsZXMnLFxuICBpZDogJ2V4YW1wbGVzJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdDcmVhdGlvbicsXG4gIGlkOiAnY3JlYXRpb24nLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1NlZSBBbHNvJyxcbiAgaWQ6ICdzZWUtYWxzbycsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxwPntgVGhlIG9iamVjdHMgdWx0aW1hdGVseSBkaXNwYXRjaGVkIHRvIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9jbGFzc2VzL1N0b3JlXCJcbiAgICAgIH19PntgWmVkdXggc3RvcmVzYH08L2E+e2AuYH08L3A+XG4gICAgPHA+e2BBY3Rpb25zIGNhbiBhbHNvIGJlIHdyYXBwZWQgaW4gYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIkFjdGlvbkNoYWluXCJcbiAgICAgIH19PntgQWN0aW9uQ2hhaW5zYH08L2E+e2AsIHdoaWNoIGNhbiBjb250YWluIGFkZGl0aW9uYWwgbWV0YWRhdGEuIFplZHV4IHVzZXMgdGhpcyBwYXR0ZXJuIGludGVybmFsbHkgZm9yIGl0cyBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiL25vdC1kb25lXCJcbiAgICAgIH19Pntgc3RvcmUgY29tcG9zaXRpb24gbW9kZWxgfTwvYT57YC5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJkZWZpbml0aW9uXCJcbiAgICB9fT57YERlZmluaXRpb25gfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uPFxuICBQYXlsb2FkID0gYW55LFxuICBUeXBlIGV4dGVuZHMgc3RyaW5nID0gc3RyaW5nLFxuICBNZXRhID0gYW55XG4+IHtcbiAgbWV0YT86IE1ldGFcbiAgcGF5bG9hZD86IFBheWxvYWRcbiAgdHlwZTogVHlwZVxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BaZWR1eCBhY3Rpb25zIG11c3QgY29udGFpbiBhIHN0cmluZyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B0eXBlYH08L2lubGluZUNvZGU+e2AgcHJvcGVydHkgYW5kIG1heSBjb250YWluIG9wdGlvbmFsIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YG1ldGFgfTwvaW5saW5lQ29kZT57YCBhbmQgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcGF5bG9hZGB9PC9pbmxpbmVDb2RlPntgIHByb3BlcnRpZXMuYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZXhhbXBsZXNcIlxuICAgIH19PntgRXhhbXBsZXNgfTwvaDI+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IG5vcm1hbEFjdGlvbjogQWN0aW9uID0ge1xuICB0eXBlOiAndG9kb3MvYWRkJyxcbiAgcGF5bG9hZDogeyB0ZXh0OiAnYmUgYXdlc29tZScgfSxcbn1cblxuY29uc3Qgd2l0aE1ldGE6IEFjdGlvbiA9IHtcbiAgdHlwZTogJ3RvZG9zL2FkZCcsXG4gIG1ldGE6IHtcbiAgICBkaXNwYXRjaGVkRnJvbTogJ015Q29tcG9uZW50JyxcbiAgfSxcbn1cblxuY29uc3QgdHlwZU9ubHk6IEFjdGlvbiA9IHtcbiAgdHlwZTogJ2Ryb3Bkb3duL3RvZ2dsZScsXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJjcmVhdGlvblwiXG4gICAgfX0+e2BDcmVhdGlvbmB9PC9oMj5cbiAgICA8cD57YFlvdSBkb24ndCBuZWVkIHRvIGNyZWF0ZSBhY3Rpb24gb2JqZWN0cyBtYW51YWxseS4gWmVkdXggcHJvdmlkZXMgYSBoaWdoLWxldmVsIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9mYWN0b3JpZXMvYWN0aW9uRmFjdG9yeVwiXG4gICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgYWN0aW9uRmFjdG9yeSgpYH08L2lubGluZUNvZGU+PC9hPntgIFwiZmFjdG9yeSBmYWN0b3J5XCIgZm9yIGFjdGlvbiBjcmVhdGlvbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgYWN0aW9uRmFjdG9yeSB9IGZyb20gJ0B6ZWR1eC9yZWFjdCdcblxuY29uc3QgdGVzdCA9IGFjdGlvbkZhY3RvcnkoJ3Rlc3QnKVxudGVzdCgncGF5bG9hZCcpIC8vIHsgdHlwZTogJ3Rlc3QnLCBwYXlsb2FkOiAncGF5bG9hZCcgfVxuXG5jb25zdCBhZGRUb2RvID0gYWN0aW9uRmFjdG9yeTxUb2RvPigndG9kb3MvYWRkJylcblxuc3RvcmUuZGlzcGF0Y2goYWRkVG9kbyh7IHRleHQ6ICdiZSBhd2Vzb21lJyB9KSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInNlZS1hbHNvXCJcbiAgICB9fT57YFNlZSBBbHNvYH08L2gyPlxuICAgIDx1bD5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj48YSBwYXJlbnROYW1lPVwibGlcIiB7Li4ue1xuICAgICAgICAgIFwiaHJlZlwiOiBcIi4uLy4uL3dhbGt0aHJvdWdoL3N0b3Jlc1wiXG4gICAgICAgIH19PntgVGhlIFN0b3JlcyB3YWxrdGhyb3VnaGB9PC9hPjwvbGk+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9mYWN0b3JpZXMvYWN0aW9uRmFjdG9yeVwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BhY3Rpb25GYWN0b3J5KClgfTwvaW5saW5lQ29kZT48L2E+PC9saT5cbiAgICA8L3VsPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJ0b2MiLCJ2YWx1ZSIsImxldmVsIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6140\n')}}]);
"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[9641],{3905:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },\n/* harmony export */   "kt": function() { return /* binding */ createElement; }\n/* harmony export */ });\n/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nvar isFunction = function isFunction(obj) {\n  return typeof obj === \'function\';\n};\n\nvar MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\nvar withMDXComponents = function withMDXComponents(Component) {\n  return function (props) {\n    var allComponents = useMDXComponents(props.components);\n    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {\n      components: allComponents\n    }));\n  };\n};\nvar useMDXComponents = function useMDXComponents(components) {\n  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);\n  var allComponents = contextComponents;\n\n  if (components) {\n    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);\n  }\n\n  return allComponents;\n};\nvar MDXProvider = function MDXProvider(props) {\n  var allComponents = useMDXComponents(props.components);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {\n    value: allComponents\n  }, props.children);\n};\n\nvar TYPE_PROP_NAME = \'mdxType\';\nvar DEFAULTS = {\n  inlineCode: \'code\',\n  wrapper: function wrapper(_ref) {\n    var children = _ref.children;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);\n  }\n};\nvar MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {\n  var propComponents = props.components,\n      mdxType = props.mdxType,\n      originalType = props.originalType,\n      parentName = props.parentName,\n      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);\n\n  var components = useMDXComponents(propComponents);\n  var type = mdxType;\n  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;\n\n  if (propComponents) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({\n      ref: ref\n    }, etc), {}, {\n      components: propComponents\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({\n    ref: ref\n  }, etc));\n});\nMDXCreateElement.displayName = \'MDXCreateElement\';\nfunction createElement (type, props) {\n  var args = arguments;\n  var mdxType = props && props.mdxType;\n\n  if (typeof type === \'string\' || mdxType) {\n    var argsLength = args.length;\n    var createElementArgArray = new Array(argsLength);\n    createElementArgArray[0] = MDXCreateElement;\n    var newProps = {};\n\n    for (var key in props) {\n      if (hasOwnProperty.call(props, key)) {\n        newProps[key] = props[key];\n      }\n    }\n\n    newProps.originalType = type;\n    newProps[TYPE_PROP_NAME] = typeof type === \'string\' ? type : mdxType;\n    createElementArgArray[1] = newProps;\n\n    for (var i = 2; i < argsLength; i++) {\n      createElementArgArray[i] = args[i];\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkwNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixnREFBbUIsR0FBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFnQjtBQUMxQzs7QUFFQTtBQUNBLDZHQUE2RztBQUM3Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUIsQ0FBQywyQ0FBYyxJQUFJO0FBQzlEO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBLEtBQUssVUFBVTtBQUNmO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBOztBQUVBLFdBQVcsc0RBQXlCO0FBQ3BDOztBQUVBLFNBQVMsc0RBQXlCO0FBQ2xDOztBQUU4RiIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcz8wY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3905\n')},1630:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'complex-params\',title:\'Complex Params\'};var contentTitle=undefined;var metadata={"unversionedId":"advanced/complex-params","id":"advanced/complex-params","title":"Complex Params","description":"Atom params and Atom Selector params must be serializable (with the exception of atom instances). Though it isn\'t recommended, you can disable this requirement.","source":"@site/docs/advanced/complex-params.mdx","sourceDirName":"advanced","slug":"/advanced/complex-params","permalink":"/zedux/docs/advanced/complex-params","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/advanced/complex-params.mdx","tags":[],"version":"current","frontMatter":{"id":"complex-params","title":"Complex Params"},"sidebar":"react","previous":{"title":"State Machines","permalink":"/zedux/docs/walkthrough/state-machines"},"next":{"title":"Time Travel","permalink":"/zedux/docs/advanced/time-travel"}};var assets={};var toc=[{value:\'<code>complexAtomParams</code>\',id:\'complexatomparams\',level:2},{value:\'Referential Equality\',id:\'referential-equality\',level:3},{value:\'<code>complexSelectorParams</code>\',id:\'complexselectorparams\',level:2},{value:\'Why not?\',id:\'why-not\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Atom params and Atom Selector params must be serializable (with the exception of atom instances). Though it isn\'t recommended, you can disable this requirement."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"you will learn","type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"How to make Zedux map non-serializable objects to serializable ids when creating atom instance and Atom Selector cache keys")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"complexatomparams"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},"complexAtomParams")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This ecosystem config option turns on param mapping for atom params."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"const ecosystem = createEcosystem({\\n  complexAtomParams: true,\\n  id: \'root\',\\n})\\n// or\\n<EcosystemProvider complexAtomParams id=\\"root\\">\\n  {children}\\n</EcosystemProvider>\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"An example passing a filter function as an atom param:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts","metastring":"live resultVar=output","live":true,"resultVar":"output"},"const numbers = Array(10)\\n  .fill()\\n  .map((_, i) => i)\\n\\nconst numbersAtom = atom(\'numbers\', filter => numbers.filter(filter))\\n\\nconst ecosystem = createEcosystem({\\n  complexAtomParams: true,\\n  id: \'atom-params-example\',\\n})\\n\\nconst evenNumbersInstance = ecosystem.getInstance(numbersAtom, [\\n  num => !(num % 2),\\n])\\n\\nconst oddNumbersInstance = ecosystem.getInstance(numbersAtom, [num => num % 2])\\n\\nconst output = {\\n  evenNumbers: evenNumbersInstance.getState(),\\n  oddNumbers: oddNumbersInstance.getState(),\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"referential-equality"},"Referential Equality"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Typically you should extract the complex param into a separate variable so it can be shared across usages:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// these calls create different instances since the function reference changes:\\ngetInstance(numbersAtom, [num => num % 2])\\ngetInstance(numbersAtom, [num => num % 2])\\n\\n// declare the function separately so it can be reused:\\nconst getEvenNumbers = num => num % 2\\n\\n// now these calls reuse the same instance:\\ngetInstance(numbersAtom, [getEvenNumbers])\\ngetInstance(numbersAtom, [getEvenNumbers])\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"complexselectorparams"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"h2"},"complexSelectorParams")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This ecosystem config option turns on param mapping for atom selector params."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx"},"const ecosystem = createEcosystem({\\n  complexSelectorParams: true,\\n  id: \'root\',\\n})\\n// or\\n<EcosystemProvider complexSelectorParams id=\\"root\\">\\n  {children}\\n</EcosystemProvider>\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"important"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"As with atom params, when passing non-serializable params to Atom Selectors, make sure the object references are stable so Zedux can recognize them.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=blues resultVar=App","live":true,"ecosystemId":"blues","resultVar":"App"},"const colorsAtom = atom(\'colors\', () => [\\n  { name: \'azure\', base: \'blue\' },\\n  { name: \'navy\', base: \'blue\' },\\n  { name: \'burgundy\', base: \'red\' },\\n])\\n\\n// an Atom Selector:\\nconst getByFilter = ({ get }, filter) => get(colorsAtom).filter(filter)\\n\\n// a nice helper function we made\\nconst filterByBlues = item => item.base === \'blue\'\\n\\nfunction Blues() {\\n  // the `filterByBlues` param isn\'t serializable but we can pass it now thanks\\n  // to `complexSelectorParams`:\\n  const blues = useAtomSelector(getByFilter, filterByBlues)\\n\\n  return (\\n    <ul>\\n      {blues.map(item => (\\n        <li key={item.name}>{item.name}</li>\\n      ))}\\n    </ul>\\n  )\\n}\\n\\nconst App = () => (\\n  <EcosystemProvider complexSelectorParams id=\\"blues\\">\\n    <Blues />\\n  </EcosystemProvider>\\n)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Try clicking ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"Log > Graph")," to see that Zedux generated an id for the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"getByFilter")," Atom Selector node\'s param."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"why-not"},"Why not?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Using complex params is not recommended because the ids that Zedux generates can make your atom graph more difficult to read and debug. When working with multiple windows or realms of any sort, it also requires more work on your part to share object references across the realms so Zedux can recognize them."));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTYzMC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzZCQUVBLDBCQUNBLGVBQ0EsNkJBTU8sR0FBTUUsWUFBVyxDQUFHLENBQzFCQyxFQUFFLENBQUUsZ0JBQWdCLENBQ3BCQyxLQUFLLENBQUUsZ0JBQ1IsQ0FBQyxDQUNNLEdBQU1DLGFBQVksQ0FBR0MsU0FBUyxDQUM5QixHQUFNQyxTQUFRLENBQUcsQ0FDdEIsZUFBZSxDQUFFLHlCQUF5QixDQUMxQyxJQUFJLENBQUUseUJBQXlCLENBQy9CLE9BQU8sQ0FBRSxnQkFBZ0IsQ0FDekIsYUFBYSxDQUFFLGtLQUFrSyxDQUNqTCxRQUFRLENBQUUsd0NBQXdDLENBQ2xELGVBQWUsQ0FBRSxVQUFVLENBQzNCLE1BQU0sQ0FBRSwwQkFBMEIsQ0FDbEMsV0FBVyxDQUFFLHFDQUFxQyxDQUNsRCxPQUFPLENBQUUsS0FBSyxDQUNkLFNBQVMsQ0FBRSxnRkFBZ0YsQ0FDM0YsTUFBTSxDQUFFLEVBQUUsQ0FDVixTQUFTLENBQUUsU0FBUyxDQUNwQixhQUFhLENBQUUsQ0FDYixJQUFJLENBQUUsZ0JBQWdCLENBQ3RCLE9BQU8sQ0FBRSxnQkFDWCxDQUFDLENBQ0QsU0FBUyxDQUFFLE9BQU8sQ0FDbEIsVUFBVSxDQUFFLENBQ1YsT0FBTyxDQUFFLGdCQUFnQixDQUN6QixXQUFXLENBQUUsd0NBQ2YsQ0FBQyxDQUNELE1BQU0sQ0FBRSxDQUNOLE9BQU8sQ0FBRSxhQUFhLENBQ3RCLFdBQVcsQ0FBRSxrQ0FDZixDQUNGLENBQUMsQ0FDTSxHQUFNQyxPQUFNLENBQUcsQ0FFdEIsQ0FBQyxDQUdNLEdBQU1DLElBQUcsQ0FBRyxDQUFDLENBQ2xCQyxLQUFLLENBQUUsZ0NBQWdDLENBQ3ZDUCxFQUFFLENBQUUsbUJBQW1CLENBQ3ZCUSxLQUFLLENBQUUsQ0FDVCxDQUFDLENBQUUsQ0FDREQsS0FBSyxDQUFFLHNCQUFzQixDQUM3QlAsRUFBRSxDQUFFLHNCQUFzQixDQUMxQlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFFLENBQ0RELEtBQUssQ0FBRSxvQ0FBb0MsQ0FDM0NQLEVBQUUsQ0FBRSx1QkFBdUIsQ0FDM0JRLEtBQUssQ0FBRSxDQUNULENBQUMsQ0FBRSxDQUNERCxLQUFLLENBQUUsVUFBVSxDQUNqQlAsRUFBRSxDQUFFLFNBQVMsQ0FDYlEsS0FBSyxDQUFFLENBQ1QsQ0FBQyxDQUFDLENBRUYsR0FBTUMsWUFBVyxDQUFHLENBQ2xCSCxHQUFHLENBQUhBLEdBQ0YsQ0FBQyxDQUNELEdBQU1JLFVBQVMsQ0FBRyxTQUFTLENBQ1osUUFBU0MsV0FBVSxNQUcvQixJQUZEQyxXQUFVLE1BQVZBLFVBQVUsQ0FDUEMsS0FBSyxzTEFFUixNQUFPLDhEQUFDLFNBQVMsb0pBQUtKLFdBQVcsQ0FBTUksS0FBSyxFQUFFLFVBQVUsQ0FBRUQsVUFBVyxDQUFDLE9BQU8sQ0FBQyxXQUFXLEdBRXZGLHlPQUEySyxDQUMzSywyRUFDRSxPQUFPLENBQUUsZ0JBQWdCLENBQ3pCLE1BQU0sQ0FBRSxLQUFLLEVBQ1osa0VBQUcsVUFBVSxDQUFDLFlBQVksZ0lBQW9JLENBQWEsQ0FDOUssbUVBQ0UsSUFBSSxDQUFFLG1CQUFtQixFQUN4QiwyRUFBWSxVQUFVLENBQUMsSUFBSSxzQkFBbUMsQ0FBSyxDQUN0RSw2SUFBK0UsQ0FDL0Usd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGNBQWMsdUxBUzFCLENBQU0sQ0FDWCwrSEFBaUUsQ0FDakUsd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGFBQWEsQ0FDMUIsWUFBWSxDQUFFLHVCQUF1QixDQUNyQyxNQUFNLENBQUUsSUFBSSxDQUNaLFdBQVcsQ0FBRSxRQUFRLG9oQkFzQnBCLENBQU0sQ0FDWCxtRUFDRSxJQUFJLENBQUUsc0JBQXNCLHlCQUNFLENBQ2hDLG1MQUFxSCxDQUNySCx3RUFBSyxxRUFBTSxVQUFVLENBQUMsS0FBSyxDQUN2QixXQUFXLENBQUUsYUFBYSx1WkFXekIsQ0FBTSxDQUNYLG1FQUNFLElBQUksQ0FBRSx1QkFBdUIsRUFDNUIsMkVBQVksVUFBVSxDQUFDLElBQUksMEJBQXVDLENBQUssQ0FDMUUsc0pBQXdGLENBQ3hGLHdFQUFLLHFFQUFNLFVBQVUsQ0FBQyxLQUFLLENBQ3ZCLFdBQVcsQ0FBRSxjQUFjLCtMQVMxQixDQUFNLENBQ1gsMkVBQ0UsTUFBTSxDQUFFLFdBQVcsRUFDbEIsa0VBQUcsVUFBVSxDQUFDLFlBQVkseUpBQTZKLENBQWEsQ0FDdk0sd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGNBQWMsQ0FDM0IsWUFBWSxDQUFFLHNDQUFzQyxDQUNwRCxNQUFNLENBQUUsSUFBSSxDQUNaLGFBQWEsQ0FBRSxPQUFPLENBQ3RCLFdBQVcsQ0FBRSxLQUFLLDR4QkFnQ2pCLENBQU0sQ0FDWCxzRkFBb0IsMkVBQVksVUFBVSxDQUFDLEdBQUcsZ0JBQTZCLCtDQUErQywyRUFBWSxVQUFVLENBQUMsR0FBRyxnQkFBNkIsZ0NBQW9DLENBQ3JOLG1FQUNFLElBQUksQ0FBRSxTQUFTLGFBQ0csQ0FDcEIsNFhBQThULENBQ2xULENBQ2hCLENBQ0EsQ0FDQUQsVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FkdmFuY2VkL2NvbXBsZXgtcGFyYW1zLm1keD9mNDEyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdjb21wbGV4LXBhcmFtcycsXG5cdHRpdGxlOiAnQ29tcGxleCBQYXJhbXMnXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYWR2YW5jZWQvY29tcGxleC1wYXJhbXNcIixcbiAgXCJpZFwiOiBcImFkdmFuY2VkL2NvbXBsZXgtcGFyYW1zXCIsXG4gIFwidGl0bGVcIjogXCJDb21wbGV4IFBhcmFtc1wiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiQXRvbSBwYXJhbXMgYW5kIEF0b20gU2VsZWN0b3IgcGFyYW1zIG11c3QgYmUgc2VyaWFsaXphYmxlICh3aXRoIHRoZSBleGNlcHRpb24gb2YgYXRvbSBpbnN0YW5jZXMpLiBUaG91Z2ggaXQgaXNuJ3QgcmVjb21tZW5kZWQsIHlvdSBjYW4gZGlzYWJsZSB0aGlzIHJlcXVpcmVtZW50LlwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYWR2YW5jZWQvY29tcGxleC1wYXJhbXMubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFkdmFuY2VkXCIsXG4gIFwic2x1Z1wiOiBcIi9hZHZhbmNlZC9jb21wbGV4LXBhcmFtc1wiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FkdmFuY2VkL2NvbXBsZXgtcGFyYW1zXCIsXG4gIFwiZHJhZnRcIjogZmFsc2UsXG4gIFwiZWRpdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9PbW5pc3RhYy96ZWR1eC90cmVlL21hc3Rlci9kb2NzL2FkdmFuY2VkL2NvbXBsZXgtcGFyYW1zLm1keFwiLFxuICBcInRhZ3NcIjogW10sXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJmcm9udE1hdHRlclwiOiB7XG4gICAgXCJpZFwiOiBcImNvbXBsZXgtcGFyYW1zXCIsXG4gICAgXCJ0aXRsZVwiOiBcIkNvbXBsZXggUGFyYW1zXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlN0YXRlIE1hY2hpbmVzXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy93YWxrdGhyb3VnaC9zdGF0ZS1tYWNoaW5lc1wiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlRpbWUgVHJhdmVsXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hZHZhbmNlZC90aW1lLXRyYXZlbFwiXG4gIH1cbn07XG5leHBvcnQgY29uc3QgYXNzZXRzID0ge1xuXG59O1xuXG5cbmV4cG9ydCBjb25zdCB0b2MgPSBbe1xuICB2YWx1ZTogJzxjb2RlPmNvbXBsZXhBdG9tUGFyYW1zPC9jb2RlPicsXG4gIGlkOiAnY29tcGxleGF0b21wYXJhbXMnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1JlZmVyZW50aWFsIEVxdWFsaXR5JyxcbiAgaWQ6ICdyZWZlcmVudGlhbC1lcXVhbGl0eScsXG4gIGxldmVsOiAzXG59LCB7XG4gIHZhbHVlOiAnPGNvZGU+Y29tcGxleFNlbGVjdG9yUGFyYW1zPC9jb2RlPicsXG4gIGlkOiAnY29tcGxleHNlbGVjdG9ycGFyYW1zJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdXaHkgbm90PycsXG4gIGlkOiAnd2h5LW5vdCcsXG4gIGxldmVsOiAyXG59XTtcblxuY29uc3QgbGF5b3V0UHJvcHMgPSB7XG4gIHRvY1xufTtcbmNvbnN0IE1EWExheW91dCA9IFwid3JhcHBlclwiXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNRFhDb250ZW50KHtcbiAgY29tcG9uZW50cyxcbiAgLi4ucHJvcHNcbn0pIHtcbiAgcmV0dXJuIDxNRFhMYXlvdXQgey4uLmxheW91dFByb3BzfSB7Li4ucHJvcHN9IGNvbXBvbmVudHM9e2NvbXBvbmVudHN9IG1keFR5cGU9XCJNRFhMYXlvdXRcIj5cblxuICAgIDxwPntgQXRvbSBwYXJhbXMgYW5kIEF0b20gU2VsZWN0b3IgcGFyYW1zIG11c3QgYmUgc2VyaWFsaXphYmxlICh3aXRoIHRoZSBleGNlcHRpb24gb2YgYXRvbSBpbnN0YW5jZXMpLiBUaG91Z2ggaXQgaXNuJ3QgcmVjb21tZW5kZWQsIHlvdSBjYW4gZGlzYWJsZSB0aGlzIHJlcXVpcmVtZW50LmB9PC9wPlxuICAgIDxhZG1vbml0aW9uIHsuLi57XG4gICAgICBcInRpdGxlXCI6IFwieW91IHdpbGwgbGVhcm5cIixcbiAgICAgIFwidHlwZVwiOiBcInRpcFwiXG4gICAgfX0+PHAgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj57YEhvdyB0byBtYWtlIFplZHV4IG1hcCBub24tc2VyaWFsaXphYmxlIG9iamVjdHMgdG8gc2VyaWFsaXphYmxlIGlkcyB3aGVuIGNyZWF0aW5nIGF0b20gaW5zdGFuY2UgYW5kIEF0b20gU2VsZWN0b3IgY2FjaGUga2V5c2B9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJjb21wbGV4YXRvbXBhcmFtc1wiXG4gICAgfX0+PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImgyXCI+e2Bjb21wbGV4QXRvbVBhcmFtc2B9PC9pbmxpbmVDb2RlPjwvaDI+XG4gICAgPHA+e2BUaGlzIGVjb3N5c3RlbSBjb25maWcgb3B0aW9uIHR1cm5zIG9uIHBhcmFtIG1hcHBpbmcgZm9yIGF0b20gcGFyYW1zLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgY29uc3QgZWNvc3lzdGVtID0gY3JlYXRlRWNvc3lzdGVtKHtcbiAgY29tcGxleEF0b21QYXJhbXM6IHRydWUsXG4gIGlkOiAncm9vdCcsXG59KVxuLy8gb3JcbjxFY29zeXN0ZW1Qcm92aWRlciBjb21wbGV4QXRvbVBhcmFtcyBpZD1cInJvb3RcIj5cbiAge2NoaWxkcmVufVxuPC9FY29zeXN0ZW1Qcm92aWRlcj5cbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQW4gZXhhbXBsZSBwYXNzaW5nIGEgZmlsdGVyIGZ1bmN0aW9uIGFzIGFuIGF0b20gcGFyYW06YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiLFxuICAgICAgICBcIm1ldGFzdHJpbmdcIjogXCJsaXZlIHJlc3VsdFZhcj1vdXRwdXRcIixcbiAgICAgICAgXCJsaXZlXCI6IHRydWUsXG4gICAgICAgIFwicmVzdWx0VmFyXCI6IFwib3V0cHV0XCJcbiAgICAgIH19PntgY29uc3QgbnVtYmVycyA9IEFycmF5KDEwKVxuICAuZmlsbCgpXG4gIC5tYXAoKF8sIGkpID0+IGkpXG5cbmNvbnN0IG51bWJlcnNBdG9tID0gYXRvbSgnbnVtYmVycycsIGZpbHRlciA9PiBudW1iZXJzLmZpbHRlcihmaWx0ZXIpKVxuXG5jb25zdCBlY29zeXN0ZW0gPSBjcmVhdGVFY29zeXN0ZW0oe1xuICBjb21wbGV4QXRvbVBhcmFtczogdHJ1ZSxcbiAgaWQ6ICdhdG9tLXBhcmFtcy1leGFtcGxlJyxcbn0pXG5cbmNvbnN0IGV2ZW5OdW1iZXJzSW5zdGFuY2UgPSBlY29zeXN0ZW0uZ2V0SW5zdGFuY2UobnVtYmVyc0F0b20sIFtcbiAgbnVtID0+ICEobnVtICUgMiksXG5dKVxuXG5jb25zdCBvZGROdW1iZXJzSW5zdGFuY2UgPSBlY29zeXN0ZW0uZ2V0SW5zdGFuY2UobnVtYmVyc0F0b20sIFtudW0gPT4gbnVtICUgMl0pXG5cbmNvbnN0IG91dHB1dCA9IHtcbiAgZXZlbk51bWJlcnM6IGV2ZW5OdW1iZXJzSW5zdGFuY2UuZ2V0U3RhdGUoKSxcbiAgb2RkTnVtYmVyczogb2RkTnVtYmVyc0luc3RhbmNlLmdldFN0YXRlKCksXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJyZWZlcmVudGlhbC1lcXVhbGl0eVwiXG4gICAgfX0+e2BSZWZlcmVudGlhbCBFcXVhbGl0eWB9PC9oMz5cbiAgICA8cD57YFR5cGljYWxseSB5b3Ugc2hvdWxkIGV4dHJhY3QgdGhlIGNvbXBsZXggcGFyYW0gaW50byBhIHNlcGFyYXRlIHZhcmlhYmxlIHNvIGl0IGNhbiBiZSBzaGFyZWQgYWNyb3NzIHVzYWdlczpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgLy8gdGhlc2UgY2FsbHMgY3JlYXRlIGRpZmZlcmVudCBpbnN0YW5jZXMgc2luY2UgdGhlIGZ1bmN0aW9uIHJlZmVyZW5jZSBjaGFuZ2VzOlxuZ2V0SW5zdGFuY2UobnVtYmVyc0F0b20sIFtudW0gPT4gbnVtICUgMl0pXG5nZXRJbnN0YW5jZShudW1iZXJzQXRvbSwgW251bSA9PiBudW0gJSAyXSlcblxuLy8gZGVjbGFyZSB0aGUgZnVuY3Rpb24gc2VwYXJhdGVseSBzbyBpdCBjYW4gYmUgcmV1c2VkOlxuY29uc3QgZ2V0RXZlbk51bWJlcnMgPSBudW0gPT4gbnVtICUgMlxuXG4vLyBub3cgdGhlc2UgY2FsbHMgcmV1c2UgdGhlIHNhbWUgaW5zdGFuY2U6XG5nZXRJbnN0YW5jZShudW1iZXJzQXRvbSwgW2dldEV2ZW5OdW1iZXJzXSlcbmdldEluc3RhbmNlKG51bWJlcnNBdG9tLCBbZ2V0RXZlbk51bWJlcnNdKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiY29tcGxleHNlbGVjdG9ycGFyYW1zXCJcbiAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiaDJcIj57YGNvbXBsZXhTZWxlY3RvclBhcmFtc2B9PC9pbmxpbmVDb2RlPjwvaDI+XG4gICAgPHA+e2BUaGlzIGVjb3N5c3RlbSBjb25maWcgb3B0aW9uIHR1cm5zIG9uIHBhcmFtIG1hcHBpbmcgZm9yIGF0b20gc2VsZWN0b3IgcGFyYW1zLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCJcbiAgICAgIH19PntgY29uc3QgZWNvc3lzdGVtID0gY3JlYXRlRWNvc3lzdGVtKHtcbiAgY29tcGxleFNlbGVjdG9yUGFyYW1zOiB0cnVlLFxuICBpZDogJ3Jvb3QnLFxufSlcbi8vIG9yXG48RWNvc3lzdGVtUHJvdmlkZXIgY29tcGxleFNlbGVjdG9yUGFyYW1zIGlkPVwicm9vdFwiPlxuICB7Y2hpbGRyZW59XG48L0Vjb3N5c3RlbVByb3ZpZGVyPlxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGFkbW9uaXRpb24gey4uLntcbiAgICAgIFwidHlwZVwiOiBcImltcG9ydGFudFwiXG4gICAgfX0+PHAgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj57YEFzIHdpdGggYXRvbSBwYXJhbXMsIHdoZW4gcGFzc2luZyBub24tc2VyaWFsaXphYmxlIHBhcmFtcyB0byBBdG9tIFNlbGVjdG9ycywgbWFrZSBzdXJlIHRoZSBvYmplY3QgcmVmZXJlbmNlcyBhcmUgc3RhYmxlIHNvIFplZHV4IGNhbiByZWNvZ25pemUgdGhlbS5gfTwvcD48L2FkbW9uaXRpb24+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c3hcIixcbiAgICAgICAgXCJtZXRhc3RyaW5nXCI6IFwibGl2ZSBlY29zeXN0ZW1JZD1ibHVlcyByZXN1bHRWYXI9QXBwXCIsXG4gICAgICAgIFwibGl2ZVwiOiB0cnVlLFxuICAgICAgICBcImVjb3N5c3RlbUlkXCI6IFwiYmx1ZXNcIixcbiAgICAgICAgXCJyZXN1bHRWYXJcIjogXCJBcHBcIlxuICAgICAgfX0+e2Bjb25zdCBjb2xvcnNBdG9tID0gYXRvbSgnY29sb3JzJywgKCkgPT4gW1xuICB7IG5hbWU6ICdhenVyZScsIGJhc2U6ICdibHVlJyB9LFxuICB7IG5hbWU6ICduYXZ5JywgYmFzZTogJ2JsdWUnIH0sXG4gIHsgbmFtZTogJ2J1cmd1bmR5JywgYmFzZTogJ3JlZCcgfSxcbl0pXG5cbi8vIGFuIEF0b20gU2VsZWN0b3I6XG5jb25zdCBnZXRCeUZpbHRlciA9ICh7IGdldCB9LCBmaWx0ZXIpID0+IGdldChjb2xvcnNBdG9tKS5maWx0ZXIoZmlsdGVyKVxuXG4vLyBhIG5pY2UgaGVscGVyIGZ1bmN0aW9uIHdlIG1hZGVcbmNvbnN0IGZpbHRlckJ5Qmx1ZXMgPSBpdGVtID0+IGl0ZW0uYmFzZSA9PT0gJ2JsdWUnXG5cbmZ1bmN0aW9uIEJsdWVzKCkge1xuICAvLyB0aGUgXFxgZmlsdGVyQnlCbHVlc1xcYCBwYXJhbSBpc24ndCBzZXJpYWxpemFibGUgYnV0IHdlIGNhbiBwYXNzIGl0IG5vdyB0aGFua3NcbiAgLy8gdG8gXFxgY29tcGxleFNlbGVjdG9yUGFyYW1zXFxgOlxuICBjb25zdCBibHVlcyA9IHVzZUF0b21TZWxlY3RvcihnZXRCeUZpbHRlciwgZmlsdGVyQnlCbHVlcylcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtibHVlcy5tYXAoaXRlbSA9PiAoXG4gICAgICAgIDxsaSBrZXk9e2l0ZW0ubmFtZX0+e2l0ZW0ubmFtZX08L2xpPlxuICAgICAgKSl9XG4gICAgPC91bD5cbiAgKVxufVxuXG5jb25zdCBBcHAgPSAoKSA9PiAoXG4gIDxFY29zeXN0ZW1Qcm92aWRlciBjb21wbGV4U2VsZWN0b3JQYXJhbXMgaWQ9XCJibHVlc1wiPlxuICAgIDxCbHVlcyAvPlxuICA8L0Vjb3N5c3RlbVByb3ZpZGVyPlxuKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BUcnkgY2xpY2tpbmcgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgTG9nID4gR3JhcGhgfTwvaW5saW5lQ29kZT57YCB0byBzZWUgdGhhdCBaZWR1eCBnZW5lcmF0ZWQgYW4gaWQgZm9yIHRoZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BnZXRCeUZpbHRlcmB9PC9pbmxpbmVDb2RlPntgIEF0b20gU2VsZWN0b3Igbm9kZSdzIHBhcmFtLmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcIndoeS1ub3RcIlxuICAgIH19PntgV2h5IG5vdD9gfTwvaDI+XG4gICAgPHA+e2BVc2luZyBjb21wbGV4IHBhcmFtcyBpcyBub3QgcmVjb21tZW5kZWQgYmVjYXVzZSB0aGUgaWRzIHRoYXQgWmVkdXggZ2VuZXJhdGVzIGNhbiBtYWtlIHlvdXIgYXRvbSBncmFwaCBtb3JlIGRpZmZpY3VsdCB0byByZWFkIGFuZCBkZWJ1Zy4gV2hlbiB3b3JraW5nIHdpdGggbXVsdGlwbGUgd2luZG93cyBvciByZWFsbXMgb2YgYW55IHNvcnQsIGl0IGFsc28gcmVxdWlyZXMgbW9yZSB3b3JrIG9uIHlvdXIgcGFydCB0byBzaGFyZSBvYmplY3QgcmVmZXJlbmNlcyBhY3Jvc3MgdGhlIHJlYWxtcyBzbyBaZWR1eCBjYW4gcmVjb2duaXplIHRoZW0uYH08L3A+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZHgiLCJmcm9udE1hdHRlciIsImlkIiwidGl0bGUiLCJjb250ZW50VGl0bGUiLCJ1bmRlZmluZWQiLCJtZXRhZGF0YSIsImFzc2V0cyIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///1630\n')}}]);
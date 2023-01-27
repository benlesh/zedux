"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[5565],{3905:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "Zo": function() { return /* binding */ MDXProvider; },\n/* harmony export */   "kt": function() { return /* binding */ createElement; }\n/* harmony export */ });\n/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _extends() {\n  _extends = Object.assign || function (target) {\n    for (var i = 1; i < arguments.length; i++) {\n      var source = arguments[i];\n\n      for (var key in source) {\n        if (Object.prototype.hasOwnProperty.call(source, key)) {\n          target[key] = source[key];\n        }\n      }\n    }\n\n    return target;\n  };\n\n  return _extends.apply(this, arguments);\n}\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n    if (enumerableOnly) symbols = symbols.filter(function (sym) {\n      return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n    });\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n  if (source == null) return {};\n  var target = {};\n  var sourceKeys = Object.keys(source);\n  var key, i;\n\n  for (i = 0; i < sourceKeys.length; i++) {\n    key = sourceKeys[i];\n    if (excluded.indexOf(key) >= 0) continue;\n    target[key] = source[key];\n  }\n\n  return target;\n}\n\nfunction _objectWithoutProperties(source, excluded) {\n  if (source == null) return {};\n\n  var target = _objectWithoutPropertiesLoose(source, excluded);\n\n  var key, i;\n\n  if (Object.getOwnPropertySymbols) {\n    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n\n    for (i = 0; i < sourceSymbolKeys.length; i++) {\n      key = sourceSymbolKeys[i];\n      if (excluded.indexOf(key) >= 0) continue;\n      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n      target[key] = source[key];\n    }\n  }\n\n  return target;\n}\n\nvar isFunction = function isFunction(obj) {\n  return typeof obj === \'function\';\n};\n\nvar MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});\nvar withMDXComponents = function withMDXComponents(Component) {\n  return function (props) {\n    var allComponents = useMDXComponents(props.components);\n    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {\n      components: allComponents\n    }));\n  };\n};\nvar useMDXComponents = function useMDXComponents(components) {\n  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);\n  var allComponents = contextComponents;\n\n  if (components) {\n    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);\n  }\n\n  return allComponents;\n};\nvar MDXProvider = function MDXProvider(props) {\n  var allComponents = useMDXComponents(props.components);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {\n    value: allComponents\n  }, props.children);\n};\n\nvar TYPE_PROP_NAME = \'mdxType\';\nvar DEFAULTS = {\n  inlineCode: \'code\',\n  wrapper: function wrapper(_ref) {\n    var children = _ref.children;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);\n  }\n};\nvar MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {\n  var propComponents = props.components,\n      mdxType = props.mdxType,\n      originalType = props.originalType,\n      parentName = props.parentName,\n      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);\n\n  var components = useMDXComponents(propComponents);\n  var type = mdxType;\n  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;\n\n  if (propComponents) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({\n      ref: ref\n    }, etc), {}, {\n      components: propComponents\n    }));\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({\n    ref: ref\n  }, etc));\n});\nMDXCreateElement.displayName = \'MDXCreateElement\';\nfunction createElement (type, props) {\n  var args = arguments;\n  var mdxType = props && props.mdxType;\n\n  if (typeof type === \'string\' || mdxType) {\n    var argsLength = args.length;\n    var createElementArgArray = new Array(argsLength);\n    createElementArgArray[0] = MDXCreateElement;\n    var newProps = {};\n\n    for (var key in props) {\n      if (hasOwnProperty.call(props, key)) {\n        newProps[key] = props[key];\n      }\n    }\n\n    newProps.originalType = type;\n    newProps[TYPE_PROP_NAME] = typeof type === \'string\' ? type : mdxType;\n    createElementArgArray[1] = newProps;\n\n    for (var i = 2; i < argsLength; i++) {\n      createElementArgArray[i] = args[i];\n    }\n\n    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);\n  }\n\n  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzkwNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBMEI7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixzQkFBc0I7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWMsdUJBQXVCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGdCQUFnQiw2QkFBNkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixnREFBbUIsR0FBRztBQUNwRDtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDZDQUFnQjtBQUMxQzs7QUFFQTtBQUNBLDZHQUE2RztBQUM3Rzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBbUIsQ0FBQywyQ0FBYyxJQUFJO0FBQzlEO0FBQ0E7QUFDQSxvQ0FBb0MsNkNBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLGdEQUFtQjtBQUMzQztBQUNBLEtBQUssVUFBVTtBQUNmO0FBQ0EsS0FBSztBQUNMOztBQUVBLHNCQUFzQixnREFBbUI7QUFDekM7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBOztBQUVBLFdBQVcsc0RBQXlCO0FBQ3BDOztBQUVBLFNBQVMsc0RBQXlCO0FBQ2xDOztBQUU4RiIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9ub2RlX21vZHVsZXMvQG1keC1qcy9yZWFjdC9kaXN0L2VzbS5qcz8wY2M1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpO1xuXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7XG4gICAgaWYgKGVudW1lcmFibGVPbmx5KSBzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkge1xuICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgfSk7XG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xuICB9XG5cbiAgcmV0dXJuIGtleXM7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV0gIT0gbnVsbCA/IGFyZ3VtZW50c1tpXSA6IHt9O1xuXG4gICAgaWYgKGkgJSAyKSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpLCB0cnVlKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGtleSwgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG5cbiAgdmFyIHRhcmdldCA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpO1xuXG4gIHZhciBrZXksIGk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc291cmNlU3ltYm9sS2V5cyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzb3VyY2VTeW1ib2xLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBrZXkgPSBzb3VyY2VTeW1ib2xLZXlzW2ldO1xuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcbiAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHNvdXJjZSwga2V5KSkgY29udGludWU7XG4gICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBpc0Z1bmN0aW9uID0gZnVuY3Rpb24gaXNGdW5jdGlvbihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59O1xuXG52YXIgTURYQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHt9KTtcbnZhciB3aXRoTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHdpdGhNRFhDb21wb25lbnRzKENvbXBvbmVudCkge1xuICByZXR1cm4gZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgY29tcG9uZW50czogYWxsQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfTtcbn07XG52YXIgdXNlTURYQ29tcG9uZW50cyA9IGZ1bmN0aW9uIHVzZU1EWENvbXBvbmVudHMoY29tcG9uZW50cykge1xuICB2YXIgY29udGV4dENvbXBvbmVudHMgPSBSZWFjdC51c2VDb250ZXh0KE1EWENvbnRleHQpO1xuICB2YXIgYWxsQ29tcG9uZW50cyA9IGNvbnRleHRDb21wb25lbnRzO1xuXG4gIGlmIChjb21wb25lbnRzKSB7XG4gICAgYWxsQ29tcG9uZW50cyA9IGlzRnVuY3Rpb24oY29tcG9uZW50cykgPyBjb21wb25lbnRzKGNvbnRleHRDb21wb25lbnRzKSA6IF9vYmplY3RTcHJlYWQyKF9vYmplY3RTcHJlYWQyKHt9LCBjb250ZXh0Q29tcG9uZW50cyksIGNvbXBvbmVudHMpO1xuICB9XG5cbiAgcmV0dXJuIGFsbENvbXBvbmVudHM7XG59O1xudmFyIE1EWFByb3ZpZGVyID0gZnVuY3Rpb24gTURYUHJvdmlkZXIocHJvcHMpIHtcbiAgdmFyIGFsbENvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BzLmNvbXBvbmVudHMpO1xuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoTURYQ29udGV4dC5Qcm92aWRlciwge1xuICAgIHZhbHVlOiBhbGxDb21wb25lbnRzXG4gIH0sIHByb3BzLmNoaWxkcmVuKTtcbn07XG5cbnZhciBUWVBFX1BST1BfTkFNRSA9ICdtZHhUeXBlJztcbnZhciBERUZBVUxUUyA9IHtcbiAgaW5saW5lQ29kZTogJ2NvZGUnLFxuICB3cmFwcGVyOiBmdW5jdGlvbiB3cmFwcGVyKF9yZWYpIHtcbiAgICB2YXIgY2hpbGRyZW4gPSBfcmVmLmNoaWxkcmVuO1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIGNoaWxkcmVuKTtcbiAgfVxufTtcbnZhciBNRFhDcmVhdGVFbGVtZW50ID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgdmFyIHByb3BDb21wb25lbnRzID0gcHJvcHMuY29tcG9uZW50cyxcbiAgICAgIG1keFR5cGUgPSBwcm9wcy5tZHhUeXBlLFxuICAgICAgb3JpZ2luYWxUeXBlID0gcHJvcHMub3JpZ2luYWxUeXBlLFxuICAgICAgcGFyZW50TmFtZSA9IHByb3BzLnBhcmVudE5hbWUsXG4gICAgICBldGMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNvbXBvbmVudHNcIiwgXCJtZHhUeXBlXCIsIFwib3JpZ2luYWxUeXBlXCIsIFwicGFyZW50TmFtZVwiXSk7XG5cbiAgdmFyIGNvbXBvbmVudHMgPSB1c2VNRFhDb21wb25lbnRzKHByb3BDb21wb25lbnRzKTtcbiAgdmFyIHR5cGUgPSBtZHhUeXBlO1xuICB2YXIgQ29tcG9uZW50ID0gY29tcG9uZW50c1tcIlwiLmNvbmNhdChwYXJlbnROYW1lLCBcIi5cIikuY29uY2F0KHR5cGUpXSB8fCBjb21wb25lbnRzW3R5cGVdIHx8IERFRkFVTFRTW3R5cGVdIHx8IG9yaWdpbmFsVHlwZTtcblxuICBpZiAocHJvcENvbXBvbmVudHMpIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfb2JqZWN0U3ByZWFkMihfb2JqZWN0U3ByZWFkMih7XG4gICAgICByZWY6IHJlZlxuICAgIH0sIGV0YyksIHt9LCB7XG4gICAgICBjb21wb25lbnRzOiBwcm9wQ29tcG9uZW50c1xuICAgIH0pKTtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9vYmplY3RTcHJlYWQyKHtcbiAgICByZWY6IHJlZlxuICB9LCBldGMpKTtcbn0pO1xuTURYQ3JlYXRlRWxlbWVudC5kaXNwbGF5TmFtZSA9ICdNRFhDcmVhdGVFbGVtZW50JztcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHR5cGUsIHByb3BzKSB7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICB2YXIgbWR4VHlwZSA9IHByb3BzICYmIHByb3BzLm1keFR5cGU7XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCBtZHhUeXBlKSB7XG4gICAgdmFyIGFyZ3NMZW5ndGggPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgY3JlYXRlRWxlbWVudEFyZ0FycmF5ID0gbmV3IEFycmF5KGFyZ3NMZW5ndGgpO1xuICAgIGNyZWF0ZUVsZW1lbnRBcmdBcnJheVswXSA9IE1EWENyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIG5ld1Byb3BzID0ge307XG5cbiAgICBmb3IgKHZhciBrZXkgaW4gcHJvcHMpIHtcbiAgICAgIGlmIChoYXNPd25Qcm9wZXJ0eS5jYWxsKHByb3BzLCBrZXkpKSB7XG4gICAgICAgIG5ld1Byb3BzW2tleV0gPSBwcm9wc1trZXldO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5ld1Byb3BzLm9yaWdpbmFsVHlwZSA9IHR5cGU7XG4gICAgbmV3UHJvcHNbVFlQRV9QUk9QX05BTUVdID0gdHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnID8gdHlwZSA6IG1keFR5cGU7XG4gICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5WzFdID0gbmV3UHJvcHM7XG5cbiAgICBmb3IgKHZhciBpID0gMjsgaSA8IGFyZ3NMZW5ndGg7IGkrKykge1xuICAgICAgY3JlYXRlRWxlbWVudEFyZ0FycmF5W2ldID0gYXJnc1tpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudC5hcHBseShudWxsLCBjcmVhdGVFbGVtZW50QXJnQXJyYXkpO1xuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQuYXBwbHkobnVsbCwgYXJncyk7XG59XG5cbmV4cG9ydCB7IE1EWENvbnRleHQsIE1EWFByb3ZpZGVyLCBjcmVhdGVFbGVtZW50IGFzIG1keCwgdXNlTURYQ29tcG9uZW50cywgd2l0aE1EWENvbXBvbmVudHMgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3905\n')},3960:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'time-travel\',title:\'Time Travel\'};var contentTitle=undefined;var metadata={"unversionedId":"advanced/time-travel","id":"advanced/time-travel","title":"Time Travel","description":"One of the great patterns that Redux popularized is the ability to undo and redo state updates in your app. Earlier flux models didn\'t have this capability because they split state up across multiple stores. Well Zedux reintroduces the concept of multiple stores, so does that mean it loses out on time travel?","source":"@site/docs/advanced/time-travel.mdx","sourceDirName":"advanced","slug":"/advanced/time-travel","permalink":"/zedux/docs/advanced/time-travel","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/advanced/time-travel.mdx","tags":[],"version":"current","frontMatter":{"id":"time-travel","title":"Time Travel"},"sidebar":"react","previous":{"title":"Complex Params","permalink":"/zedux/docs/advanced/complex-params"},"next":{"title":"Plugins","permalink":"/zedux/docs/advanced/plugins"}};var assets={};var toc=[];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"One of the great patterns that Redux popularized is the ability to undo and redo state updates in your app. Earlier flux models didn\'t have this capability because they split state up across multiple stores. Well Zedux reintroduces the concept of multiple stores, so does that mean it loses out on time travel?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux also introduces the concept of zero-config stores. In Redux, the boilerplate-heavy action-reducer model is central to its time traveling ability. Surely zero-config Zedux stores can\'t time travel... Can they?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"As you can probably guess by the existence of this walkthrough page, the answer is that Zedux fully supports time travel. Let\'s Learn Everything."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"you will learn:","type":"tip"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",{parentName:"admonition"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"How Zedux\' powerful store composition model enables time travel."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"How to implement undo/redo for individual stores, atoms, or an entire ecosystem."))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"\\uD83D\\uDEA7 This page is under construction")));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzk2MC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OzZCQUVBLDBCQUNBLGVBQ0EsNkJBTU8sR0FBTUUsWUFBVyxDQUFHLENBQzFCQyxFQUFFLENBQUUsYUFBYSxDQUNqQkMsS0FBSyxDQUFFLGFBQ1IsQ0FBQyxDQUNNLEdBQU1DLGFBQVksQ0FBR0MsU0FBUyxDQUM5QixHQUFNQyxTQUFRLENBQUcsQ0FDdEIsZUFBZSxDQUFFLHNCQUFzQixDQUN2QyxJQUFJLENBQUUsc0JBQXNCLENBQzVCLE9BQU8sQ0FBRSxhQUFhLENBQ3RCLGFBQWEsQ0FBRSx3VEFBd1QsQ0FDdlUsUUFBUSxDQUFFLHFDQUFxQyxDQUMvQyxlQUFlLENBQUUsVUFBVSxDQUMzQixNQUFNLENBQUUsdUJBQXVCLENBQy9CLFdBQVcsQ0FBRSxrQ0FBa0MsQ0FDL0MsT0FBTyxDQUFFLEtBQUssQ0FDZCxTQUFTLENBQUUsNkVBQTZFLENBQ3hGLE1BQU0sQ0FBRSxFQUFFLENBQ1YsU0FBUyxDQUFFLFNBQVMsQ0FDcEIsYUFBYSxDQUFFLENBQ2IsSUFBSSxDQUFFLGFBQWEsQ0FDbkIsT0FBTyxDQUFFLGFBQ1gsQ0FBQyxDQUNELFNBQVMsQ0FBRSxPQUFPLENBQ2xCLFVBQVUsQ0FBRSxDQUNWLE9BQU8sQ0FBRSxnQkFBZ0IsQ0FDekIsV0FBVyxDQUFFLHFDQUNmLENBQUMsQ0FDRCxNQUFNLENBQUUsQ0FDTixPQUFPLENBQUUsU0FBUyxDQUNsQixXQUFXLENBQUUsOEJBQ2YsQ0FDRixDQUFDLENBQ00sR0FBTUMsT0FBTSxDQUFHLENBRXRCLENBQUMsQ0FHTSxHQUFNQyxJQUFHLENBQUcsRUFBRSxDQUVyQixHQUFNQyxZQUFXLENBQUcsQ0FDbEJELEdBQUcsQ0FBSEEsR0FDRixDQUFDLENBQ0QsR0FBTUUsVUFBUyxDQUFHLFNBQVMsQ0FDWixRQUFTQyxXQUFVLE1BRy9CLElBRkRDLFdBQVUsTUFBVkEsVUFBVSxDQUNQQyxLQUFLLHNMQUVSLE1BQU8sOERBQUMsU0FBUyxvSkFBS0osV0FBVyxDQUFNSSxLQUFLLEVBQUUsVUFBVSxDQUFFRCxVQUFXLENBQUMsT0FBTyxDQUFDLFdBQVcsR0FFdkYsK1hBQWlVLENBQ2pVLCtSQUFpTyxDQUNqTywwTkFBNEosQ0FDNUosMkVBQ0UsT0FBTyxDQUFFLGlCQUFpQixDQUMxQixNQUFNLENBQUUsS0FBSyxFQUNaLG1FQUFJLFVBQVUsQ0FBQyxZQUFZLEVBQzFCLG1FQUFJLFVBQVUsQ0FBQyxJQUFJLHFFQUEwRSxDQUM3RixtRUFBSSxVQUFVLENBQUMsSUFBSSxxRkFBMEYsQ0FDMUcsQ0FBYSxDQUNwQiwyRUFDRSxNQUFNLENBQUUsTUFBTSxFQUNiLGtFQUFHLFVBQVUsQ0FBQyxZQUFZLGlEQUEyQyxDQUFhLENBQ3pFLENBQ2hCLENBQ0EsQ0FDQUQsVUFBVSxDQUFDRyxjQUFjLENBQUcsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3plZHV4LWRvY3MvLi9kb2NzL2FkdmFuY2VkL3RpbWUtdHJhdmVsLm1keD9mYjMwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICd0aW1lLXRyYXZlbCcsXG5cdHRpdGxlOiAnVGltZSBUcmF2ZWwnXG59O1xuZXhwb3J0IGNvbnN0IGNvbnRlbnRUaXRsZSA9IHVuZGVmaW5lZDtcbmV4cG9ydCBjb25zdCBtZXRhZGF0YSA9IHtcbiAgXCJ1bnZlcnNpb25lZElkXCI6IFwiYWR2YW5jZWQvdGltZS10cmF2ZWxcIixcbiAgXCJpZFwiOiBcImFkdmFuY2VkL3RpbWUtdHJhdmVsXCIsXG4gIFwidGl0bGVcIjogXCJUaW1lIFRyYXZlbFwiLFxuICBcImRlc2NyaXB0aW9uXCI6IFwiT25lIG9mIHRoZSBncmVhdCBwYXR0ZXJucyB0aGF0IFJlZHV4IHBvcHVsYXJpemVkIGlzIHRoZSBhYmlsaXR5IHRvIHVuZG8gYW5kIHJlZG8gc3RhdGUgdXBkYXRlcyBpbiB5b3VyIGFwcC4gRWFybGllciBmbHV4IG1vZGVscyBkaWRuJ3QgaGF2ZSB0aGlzIGNhcGFiaWxpdHkgYmVjYXVzZSB0aGV5IHNwbGl0IHN0YXRlIHVwIGFjcm9zcyBtdWx0aXBsZSBzdG9yZXMuIFdlbGwgWmVkdXggcmVpbnRyb2R1Y2VzIHRoZSBjb25jZXB0IG9mIG11bHRpcGxlIHN0b3Jlcywgc28gZG9lcyB0aGF0IG1lYW4gaXQgbG9zZXMgb3V0IG9uIHRpbWUgdHJhdmVsP1wiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYWR2YW5jZWQvdGltZS10cmF2ZWwubWR4XCIsXG4gIFwic291cmNlRGlyTmFtZVwiOiBcImFkdmFuY2VkXCIsXG4gIFwic2x1Z1wiOiBcIi9hZHZhbmNlZC90aW1lLXRyYXZlbFwiLFxuICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FkdmFuY2VkL3RpbWUtdHJhdmVsXCIsXG4gIFwiZHJhZnRcIjogZmFsc2UsXG4gIFwiZWRpdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9PbW5pc3RhYy96ZWR1eC90cmVlL21hc3Rlci9kb2NzL2FkdmFuY2VkL3RpbWUtdHJhdmVsLm1keFwiLFxuICBcInRhZ3NcIjogW10sXG4gIFwidmVyc2lvblwiOiBcImN1cnJlbnRcIixcbiAgXCJmcm9udE1hdHRlclwiOiB7XG4gICAgXCJpZFwiOiBcInRpbWUtdHJhdmVsXCIsXG4gICAgXCJ0aXRsZVwiOiBcIlRpbWUgVHJhdmVsXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkNvbXBsZXggUGFyYW1zXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hZHZhbmNlZC9jb21wbGV4LXBhcmFtc1wiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlBsdWdpbnNcIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FkdmFuY2VkL3BsdWdpbnNcIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW107XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8cD57YE9uZSBvZiB0aGUgZ3JlYXQgcGF0dGVybnMgdGhhdCBSZWR1eCBwb3B1bGFyaXplZCBpcyB0aGUgYWJpbGl0eSB0byB1bmRvIGFuZCByZWRvIHN0YXRlIHVwZGF0ZXMgaW4geW91ciBhcHAuIEVhcmxpZXIgZmx1eCBtb2RlbHMgZGlkbid0IGhhdmUgdGhpcyBjYXBhYmlsaXR5IGJlY2F1c2UgdGhleSBzcGxpdCBzdGF0ZSB1cCBhY3Jvc3MgbXVsdGlwbGUgc3RvcmVzLiBXZWxsIFplZHV4IHJlaW50cm9kdWNlcyB0aGUgY29uY2VwdCBvZiBtdWx0aXBsZSBzdG9yZXMsIHNvIGRvZXMgdGhhdCBtZWFuIGl0IGxvc2VzIG91dCBvbiB0aW1lIHRyYXZlbD9gfTwvcD5cbiAgICA8cD57YFplZHV4IGFsc28gaW50cm9kdWNlcyB0aGUgY29uY2VwdCBvZiB6ZXJvLWNvbmZpZyBzdG9yZXMuIEluIFJlZHV4LCB0aGUgYm9pbGVycGxhdGUtaGVhdnkgYWN0aW9uLXJlZHVjZXIgbW9kZWwgaXMgY2VudHJhbCB0byBpdHMgdGltZSB0cmF2ZWxpbmcgYWJpbGl0eS4gU3VyZWx5IHplcm8tY29uZmlnIFplZHV4IHN0b3JlcyBjYW4ndCB0aW1lIHRyYXZlbC4uLiBDYW4gdGhleT9gfTwvcD5cbiAgICA8cD57YEFzIHlvdSBjYW4gcHJvYmFibHkgZ3Vlc3MgYnkgdGhlIGV4aXN0ZW5jZSBvZiB0aGlzIHdhbGt0aHJvdWdoIHBhZ2UsIHRoZSBhbnN3ZXIgaXMgdGhhdCBaZWR1eCBmdWxseSBzdXBwb3J0cyB0aW1lIHRyYXZlbC4gTGV0J3MgTGVhcm4gRXZlcnl0aGluZy5gfTwvcD5cbiAgICA8YWRtb25pdGlvbiB7Li4ue1xuICAgICAgXCJ0aXRsZVwiOiBcInlvdSB3aWxsIGxlYXJuOlwiLFxuICAgICAgXCJ0eXBlXCI6IFwidGlwXCJcbiAgICB9fT48dWwgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgSG93IFplZHV4JyBwb3dlcmZ1bCBzdG9yZSBjb21wb3NpdGlvbiBtb2RlbCBlbmFibGVzIHRpbWUgdHJhdmVsLmB9PC9saT5cbiAgICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgSG93IHRvIGltcGxlbWVudCB1bmRvL3JlZG8gZm9yIGluZGl2aWR1YWwgc3RvcmVzLCBhdG9tcywgb3IgYW4gZW50aXJlIGVjb3N5c3RlbS5gfTwvbGk+XG4gICAgICA8L3VsPjwvYWRtb25pdGlvbj5cbiAgICA8YWRtb25pdGlvbiB7Li4ue1xuICAgICAgXCJ0eXBlXCI6IFwibm90ZVwiXG4gICAgfX0+PHAgcGFyZW50TmFtZT1cImFkbW9uaXRpb25cIj57YPCfmqcgVGhpcyBwYWdlIGlzIHVuZGVyIGNvbnN0cnVjdGlvbmB9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8L01EWExheW91dD47XG59XG47XG5NRFhDb250ZW50LmlzTURYQ29tcG9uZW50ID0gdHJ1ZTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIm1keCIsImZyb250TWF0dGVyIiwiaWQiLCJ0aXRsZSIsImNvbnRlbnRUaXRsZSIsInVuZGVmaW5lZCIsIm1ldGFkYXRhIiwiYXNzZXRzIiwidG9jIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///3960\n')}}]);
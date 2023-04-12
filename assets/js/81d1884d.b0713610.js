"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[3249],{6229:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'react-query-comparison\',title:\'React Query Comparison\'};var contentTitle=undefined;var metadata={"unversionedId":"about/react-query-comparison","id":"about/react-query-comparison","title":"React Query Comparison","description":"While Zedux doesn\'t (yet!) provide helpers for query operations (infinite scrolling, pagination, etc), Zedux is currently patterned after React Query more than any other library (yes, more than Redux or Recoil). React Query\'s cache management is unparalleled. So Zedux\'s atomic model borrows a lot of ideas from it.","source":"@site/docs/about/react-query-comparison.mdx","sourceDirName":"about","slug":"/about/react-query-comparison","permalink":"/zedux/docs/about/react-query-comparison","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/about/react-query-comparison.mdx","tags":[],"version":"current","frontMatter":{"id":"react-query-comparison","title":"React Query Comparison"},"sidebar":"react","previous":{"title":"Redux Comparison","permalink":"/zedux/docs/about/redux-comparison"},"next":{"title":"Quick Start","permalink":"/zedux/docs/walkthrough/quick-start"}};var assets={};var toc=[{value:\'Queries\',id:\'queries\',level:2},{value:\'Dependent Queries\',id:\'dependent-queries\',level:2},{value:\'Mutations\',id:\'mutations\',level:2},{value:\'Invalidation\',id:\'invalidation\',level:2},{value:\'QueryClient\',id:\'queryclient\',level:2},{value:\'Stream Support\',id:\'stream-support\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"While Zedux doesn\'t (yet!) provide helpers for query operations (infinite scrolling, pagination, etc), Zedux is currently patterned after React Query more than any other library (yes, more than Redux or Recoil). React Query\'s cache management is unparalleled. So Zedux\'s atomic model borrows a lot of ideas from it."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"However, the purpose of Zedux is very different from React Query. React Query is designed around promises - managing their state, side effects, and result caches. Zedux is designed to manage both application state (a la Redux/Recoil) and cached server data. Zedux has ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"some")," special features for handling promises, but currently very little compared React Query."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"queries"},"Queries"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Structurally, Zedux ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../api/classes/AtomInstance"},"atoms")," are very similar to React Query ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://react-query.tanstack.com/guides/queries"},"queries"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Query keys and atom keys are constructed from a \\"deterministic\\" hash of their parameters."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"For destroying stale instances: Atoms have ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../api/classes/AtomTemplate#ttl"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"ttl")),". Queries have ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"cacheTime"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"For suspense: Atoms have ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../api/classes/AtomApi#setpromise"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},".setPromise()")),". Queries have ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"suspense"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"For tracking promise state: Zedux has query atoms and ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"li","href":"../api/injectors/injectPromise"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"injectPromise()")),". Queries track promise state by default.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"A side-by-side comparison, using suspense:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"// React Query:\\nfunction usePosts() {\\n  return useQuery(\\n    \'posts\',\\n    async () => {\\n      const { data } = await axios.get(\'/posts\')\\n      return data\\n    },\\n    { suspense: true }\\n  )\\n}\\n// ... in a component:\\nconst { data } = usePosts()\\n\\n// Zedux:\\nconst postsAtom = atom(\'posts\', () => {\\n  const fetchPosts = async () => {\\n    const { data } = await axios.get(\'/posts\')\\n    return data\\n  }\\n\\n  // `return api(promise)` is how you make query atoms in Zedux\\n  return api(fetchPosts())\\n})\\n// ... in a component:\\nconst { data } = useAtomValue(postsAtom)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Note that atom state factories can\'t be asynchronous functions. This is because the function body is used to dynamically inject dependencies, building Zedux\'s DI graph."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"dependent-queries"},"Dependent Queries"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In React Query, it\'s up to components to specify query dependencies by passing the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"enabled")," option to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"useQuery"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const { data: user } = useQuery([\'user\', email], getUserByEmail)\\n\\nconst userId = user?.id\\n\\nconst { isIdle, data: projects } = useQuery(\\n  [\'projects\', userId],\\n  getProjectsByUser,\\n  { enabled: !!userId }\\n)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"In Zedux, atoms are more autonomous. They specify their own dependencies."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const userProjectsAtom = atom(\'userProjects\', (email: string) => {\\n  const user = injectAtomValue(userByEmail, [email])\\n\\n  const userId = user?.id\\n\\n  return injectPromise(() => getProjectsByUser(userId), [userId])\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux doesn\'t have an ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"idle")," state (currently). The above example would be ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"success")," until ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"userByEmail")," updates with a value. If you need an ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"idle")," state, open an issue and let\'s discuss!"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"mutations"},"Mutations"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux doesn\'t have a concept of mutations. Mutation functions are typically exported from atoms, but many approaches are possible. Here\'s an example grouping query and mutation operations together in a single atom:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const usersAtom = atom(\'users\', () => {\\n  // a \\"query\\"\\n  const fetchUsers = async () => {\\n    const { data } = await axios.get(\'/users\')\\n    return data\\n  }\\n\\n  const promiseApi = injectPromise(fetchUsers, [])\\n\\n  // a \\"mutation\\"\\n  const updateUser = (id: string, user: User) => {\\n    // we could also easily add an optimistic update right here\\n    await axios.post(`/users/${id}`, user)\\n\\n    // we can do a full refetch (this mimics React Query most closely):\\n    promiseApi.store.setState(await fetchUsers()) // essentially an invalidation\\n    // or just update the record we know changed:\\n    promiseApi.store.setStateDeep({ [id]: user })\\n    // moving that above the .post() is all it takes to do an optimistic update\\n  }\\n\\n  // The query controls the state of this atom. The mutation is exported:\\n  return promiseApi.addExports({ updateUser })\\n})\\n// ... in a component:\\nconst [{ data }, { updateUser }] = useAtomState(usersAtom)\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"invalidation"},"Invalidation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Because of the mutation differences, Zedux and React Query also have very different concepts of invalidation. React Query is designed around invalidating caches manually with ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"invalidateQueries()"),", especially after mutations."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux allows manual invalidation via ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../api/classes/AtomInstance#invalidate"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"a"},"instance.invalidate()")),", but use cases for it are rare. Instead, the two approaches demonstrated in the above ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"usersAtom")," example are common ways to go about it:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Precisely update state and let updates cascade through the atom graph, automatically rerunning atom state factories/",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"injectEffect")," effects."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("li",{parentName:"ul"},"Manually rerun \\"query\\" functions like in the above ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"fetchUsers")," example and directly \\"invalidate\\" state via ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"li"},"store.setState()"),".")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"queryclient"},"QueryClient"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../api/classes/Ecosystem"},"ecosystems")," are patterned after React Query\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"https://react-query.tanstack.com/reference/QueryClient"},"QueryClient"),". They both create autonomous environments for managing ","[atoms|queries]"," that can be used outside React and are especially useful for testing."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"stream-support"},"Stream Support"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"React Query can work with sockets without too much hassle. But React Query is designed for promises. Zedux atoms are designed to support any asynchronous architecture."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This means that (for now) Zedux doesn\'t provide any promise-specific helpers like React Query\'s ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"onSuccess"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"refetchOnWindowFocus"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"retryDelay"),", etc. The upside is, working with sockets/data streaming paradigms is more natural with Zedux."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import { atom, injectAtomValue, injectEffect, injectStore } from \'@zedux/react\'\\nimport { io } from \'socket.io-client\'\\n\\nconst socketAtom = atom(\'socket\', () => io())\\n\\nconst messagesAtom = atom(\'messages\', () => {\\n  const socket = injectAtomValue(socketAtom)\\n  const store = injectStore([])\\n\\n  injectEffect(() => {\\n    const handler = message => {\\n      store.setState(messages => [...messages, message])\\n    }\\n\\n    socket.on(\'message\', handler)\\n\\n    return () => socket.off(\'message\', handler)\\n  }, [socket])\\n\\n  return store\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This is more flexible, but can require more boilerplate for promises. Most functionality can be abstracted, of course. We may provide a ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"@zedux/query")," package someday that provides a full suite of tools for handling promises."));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hYm91dC9yZWFjdC1xdWVyeS1jb21wYXJpc29uLm1keD9mY2M3Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdyZWFjdC1xdWVyeS1jb21wYXJpc29uJyxcblx0dGl0bGU6ICdSZWFjdCBRdWVyeSBDb21wYXJpc29uJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFib3V0L3JlYWN0LXF1ZXJ5LWNvbXBhcmlzb25cIixcbiAgXCJpZFwiOiBcImFib3V0L3JlYWN0LXF1ZXJ5LWNvbXBhcmlzb25cIixcbiAgXCJ0aXRsZVwiOiBcIlJlYWN0IFF1ZXJ5IENvbXBhcmlzb25cIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIldoaWxlIFplZHV4IGRvZXNuJ3QgKHlldCEpIHByb3ZpZGUgaGVscGVycyBmb3IgcXVlcnkgb3BlcmF0aW9ucyAoaW5maW5pdGUgc2Nyb2xsaW5nLCBwYWdpbmF0aW9uLCBldGMpLCBaZWR1eCBpcyBjdXJyZW50bHkgcGF0dGVybmVkIGFmdGVyIFJlYWN0IFF1ZXJ5IG1vcmUgdGhhbiBhbnkgb3RoZXIgbGlicmFyeSAoeWVzLCBtb3JlIHRoYW4gUmVkdXggb3IgUmVjb2lsKS4gUmVhY3QgUXVlcnkncyBjYWNoZSBtYW5hZ2VtZW50IGlzIHVucGFyYWxsZWxlZC4gU28gWmVkdXgncyBhdG9taWMgbW9kZWwgYm9ycm93cyBhIGxvdCBvZiBpZGVhcyBmcm9tIGl0LlwiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYWJvdXQvcmVhY3QtcXVlcnktY29tcGFyaXNvbi5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYWJvdXRcIixcbiAgXCJzbHVnXCI6IFwiL2Fib3V0L3JlYWN0LXF1ZXJ5LWNvbXBhcmlzb25cIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hYm91dC9yZWFjdC1xdWVyeS1jb21wYXJpc29uXCIsXG4gIFwiZHJhZnRcIjogZmFsc2UsXG4gIFwiZWRpdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9PbW5pc3RhYy96ZWR1eC90cmVlL21hc3Rlci9kb2NzL2Fib3V0L3JlYWN0LXF1ZXJ5LWNvbXBhcmlzb24ubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwicmVhY3QtcXVlcnktY29tcGFyaXNvblwiLFxuICAgIFwidGl0bGVcIjogXCJSZWFjdCBRdWVyeSBDb21wYXJpc29uXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlJlZHV4IENvbXBhcmlzb25cIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2Fib3V0L3JlZHV4LWNvbXBhcmlzb25cIlxuICB9LFxuICBcIm5leHRcIjoge1xuICAgIFwidGl0bGVcIjogXCJRdWljayBTdGFydFwiLFxuICAgIFwicGVybWFsaW5rXCI6IFwiL3plZHV4L2RvY3Mvd2Fsa3Rocm91Z2gvcXVpY2stc3RhcnRcIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdRdWVyaWVzJyxcbiAgaWQ6ICdxdWVyaWVzJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdEZXBlbmRlbnQgUXVlcmllcycsXG4gIGlkOiAnZGVwZW5kZW50LXF1ZXJpZXMnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ011dGF0aW9ucycsXG4gIGlkOiAnbXV0YXRpb25zJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdJbnZhbGlkYXRpb24nLFxuICBpZDogJ2ludmFsaWRhdGlvbicsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnUXVlcnlDbGllbnQnLFxuICBpZDogJ3F1ZXJ5Y2xpZW50JyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdTdHJlYW0gU3VwcG9ydCcsXG4gIGlkOiAnc3RyZWFtLXN1cHBvcnQnLFxuICBsZXZlbDogMlxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8cD57YFdoaWxlIFplZHV4IGRvZXNuJ3QgKHlldCEpIHByb3ZpZGUgaGVscGVycyBmb3IgcXVlcnkgb3BlcmF0aW9ucyAoaW5maW5pdGUgc2Nyb2xsaW5nLCBwYWdpbmF0aW9uLCBldGMpLCBaZWR1eCBpcyBjdXJyZW50bHkgcGF0dGVybmVkIGFmdGVyIFJlYWN0IFF1ZXJ5IG1vcmUgdGhhbiBhbnkgb3RoZXIgbGlicmFyeSAoeWVzLCBtb3JlIHRoYW4gUmVkdXggb3IgUmVjb2lsKS4gUmVhY3QgUXVlcnkncyBjYWNoZSBtYW5hZ2VtZW50IGlzIHVucGFyYWxsZWxlZC4gU28gWmVkdXgncyBhdG9taWMgbW9kZWwgYm9ycm93cyBhIGxvdCBvZiBpZGVhcyBmcm9tIGl0LmB9PC9wPlxuICAgIDxwPntgSG93ZXZlciwgdGhlIHB1cnBvc2Ugb2YgWmVkdXggaXMgdmVyeSBkaWZmZXJlbnQgZnJvbSBSZWFjdCBRdWVyeS4gUmVhY3QgUXVlcnkgaXMgZGVzaWduZWQgYXJvdW5kIHByb21pc2VzIC0gbWFuYWdpbmcgdGhlaXIgc3RhdGUsIHNpZGUgZWZmZWN0cywgYW5kIHJlc3VsdCBjYWNoZXMuIFplZHV4IGlzIGRlc2lnbmVkIHRvIG1hbmFnZSBib3RoIGFwcGxpY2F0aW9uIHN0YXRlIChhIGxhIFJlZHV4L1JlY29pbCkgYW5kIGNhY2hlZCBzZXJ2ZXIgZGF0YS4gWmVkdXggaGFzIGB9PGVtIHBhcmVudE5hbWU9XCJwXCI+e2Bzb21lYH08L2VtPntgIHNwZWNpYWwgZmVhdHVyZXMgZm9yIGhhbmRsaW5nIHByb21pc2VzLCBidXQgY3VycmVudGx5IHZlcnkgbGl0dGxlIGNvbXBhcmVkIFJlYWN0IFF1ZXJ5LmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInF1ZXJpZXNcIlxuICAgIH19PntgUXVlcmllc2B9PC9oMj5cbiAgICA8cD57YFN0cnVjdHVyYWxseSwgWmVkdXggYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2FwaS9jbGFzc2VzL0F0b21JbnN0YW5jZVwiXG4gICAgICB9fT57YGF0b21zYH08L2E+e2AgYXJlIHZlcnkgc2ltaWxhciB0byBSZWFjdCBRdWVyeSBgfTxhIHBhcmVudE5hbWU9XCJwXCIgey4uLntcbiAgICAgICAgXCJocmVmXCI6IFwiaHR0cHM6Ly9yZWFjdC1xdWVyeS50YW5zdGFjay5jb20vZ3VpZGVzL3F1ZXJpZXNcIlxuICAgICAgfX0+e2BxdWVyaWVzYH08L2E+e2AuYH08L3A+XG4gICAgPHVsPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgUXVlcnkga2V5cyBhbmQgYXRvbSBrZXlzIGFyZSBjb25zdHJ1Y3RlZCBmcm9tIGEgXCJkZXRlcm1pbmlzdGljXCIgaGFzaCBvZiB0aGVpciBwYXJhbWV0ZXJzLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEZvciBkZXN0cm95aW5nIHN0YWxlIGluc3RhbmNlczogQXRvbXMgaGF2ZSBgfTxhIHBhcmVudE5hbWU9XCJsaVwiIHsuLi57XG4gICAgICAgICAgXCJocmVmXCI6IFwiLi4vYXBpL2NsYXNzZXMvQXRvbVRlbXBsYXRlI3R0bFwiXG4gICAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2B0dGxgfTwvaW5saW5lQ29kZT48L2E+e2AuIFF1ZXJpZXMgaGF2ZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJsaVwiPntgY2FjaGVUaW1lYH08L2lubGluZUNvZGU+e2AuYH08L2xpPlxuICAgICAgPGxpIHBhcmVudE5hbWU9XCJ1bFwiPntgRm9yIHN1c3BlbnNlOiBBdG9tcyBoYXZlIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9hcGkvY2xhc3Nlcy9BdG9tQXBpI3NldHByb21pc2VcIlxuICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgLnNldFByb21pc2UoKWB9PC9pbmxpbmVDb2RlPjwvYT57YC4gUXVlcmllcyBoYXZlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BzdXNwZW5zZWB9PC9pbmxpbmVDb2RlPntgLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YEZvciB0cmFja2luZyBwcm9taXNlIHN0YXRlOiBaZWR1eCBoYXMgcXVlcnkgYXRvbXMgYW5kIGB9PGEgcGFyZW50TmFtZT1cImxpXCIgey4uLntcbiAgICAgICAgICBcImhyZWZcIjogXCIuLi9hcGkvaW5qZWN0b3JzL2luamVjdFByb21pc2VcIlxuICAgICAgICB9fT48aW5saW5lQ29kZSBwYXJlbnROYW1lPVwiYVwiPntgaW5qZWN0UHJvbWlzZSgpYH08L2lubGluZUNvZGU+PC9hPntgLiBRdWVyaWVzIHRyYWNrIHByb21pc2Ugc3RhdGUgYnkgZGVmYXVsdC5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8cD57YEEgc2lkZS1ieS1zaWRlIGNvbXBhcmlzb24sIHVzaW5nIHN1c3BlbnNlOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2AvLyBSZWFjdCBRdWVyeTpcbmZ1bmN0aW9uIHVzZVBvc3RzKCkge1xuICByZXR1cm4gdXNlUXVlcnkoXG4gICAgJ3Bvc3RzJyxcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGF4aW9zLmdldCgnL3Bvc3RzJylcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSxcbiAgICB7IHN1c3BlbnNlOiB0cnVlIH1cbiAgKVxufVxuLy8gLi4uIGluIGEgY29tcG9uZW50OlxuY29uc3QgeyBkYXRhIH0gPSB1c2VQb3N0cygpXG5cbi8vIFplZHV4OlxuY29uc3QgcG9zdHNBdG9tID0gYXRvbSgncG9zdHMnLCAoKSA9PiB7XG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJy9wb3N0cycpXG4gICAgcmV0dXJuIGRhdGFcbiAgfVxuXG4gIC8vIFxcYHJldHVybiBhcGkocHJvbWlzZSlcXGAgaXMgaG93IHlvdSBtYWtlIHF1ZXJ5IGF0b21zIGluIFplZHV4XG4gIHJldHVybiBhcGkoZmV0Y2hQb3N0cygpKVxufSlcbi8vIC4uLiBpbiBhIGNvbXBvbmVudDpcbmNvbnN0IHsgZGF0YSB9ID0gdXNlQXRvbVZhbHVlKHBvc3RzQXRvbSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgTm90ZSB0aGF0IGF0b20gc3RhdGUgZmFjdG9yaWVzIGNhbid0IGJlIGFzeW5jaHJvbm91cyBmdW5jdGlvbnMuIFRoaXMgaXMgYmVjYXVzZSB0aGUgZnVuY3Rpb24gYm9keSBpcyB1c2VkIHRvIGR5bmFtaWNhbGx5IGluamVjdCBkZXBlbmRlbmNpZXMsIGJ1aWxkaW5nIFplZHV4J3MgREkgZ3JhcGguYH08L3A+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwiZGVwZW5kZW50LXF1ZXJpZXNcIlxuICAgIH19PntgRGVwZW5kZW50IFF1ZXJpZXNgfTwvaDI+XG4gICAgPHA+e2BJbiBSZWFjdCBRdWVyeSwgaXQncyB1cCB0byBjb21wb25lbnRzIHRvIHNwZWNpZnkgcXVlcnkgZGVwZW5kZW5jaWVzIGJ5IHBhc3NpbmcgdGhlIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGVuYWJsZWRgfTwvaW5saW5lQ29kZT57YCBvcHRpb24gdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlUXVlcnlgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgY29uc3QgeyBkYXRhOiB1c2VyIH0gPSB1c2VRdWVyeShbJ3VzZXInLCBlbWFpbF0sIGdldFVzZXJCeUVtYWlsKVxuXG5jb25zdCB1c2VySWQgPSB1c2VyPy5pZFxuXG5jb25zdCB7IGlzSWRsZSwgZGF0YTogcHJvamVjdHMgfSA9IHVzZVF1ZXJ5KFxuICBbJ3Byb2plY3RzJywgdXNlcklkXSxcbiAgZ2V0UHJvamVjdHNCeVVzZXIsXG4gIHsgZW5hYmxlZDogISF1c2VySWQgfVxuKVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BJbiBaZWR1eCwgYXRvbXMgYXJlIG1vcmUgYXV0b25vbW91cy4gVGhleSBzcGVjaWZ5IHRoZWlyIG93biBkZXBlbmRlbmNpZXMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IHVzZXJQcm9qZWN0c0F0b20gPSBhdG9tKCd1c2VyUHJvamVjdHMnLCAoZW1haWw6IHN0cmluZykgPT4ge1xuICBjb25zdCB1c2VyID0gaW5qZWN0QXRvbVZhbHVlKHVzZXJCeUVtYWlsLCBbZW1haWxdKVxuXG4gIGNvbnN0IHVzZXJJZCA9IHVzZXI/LmlkXG5cbiAgcmV0dXJuIGluamVjdFByb21pc2UoKCkgPT4gZ2V0UHJvamVjdHNCeVVzZXIodXNlcklkKSwgW3VzZXJJZF0pXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPHA+e2BaZWR1eCBkb2Vzbid0IGhhdmUgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaWRsZWB9PC9pbmxpbmVDb2RlPntgIHN0YXRlIChjdXJyZW50bHkpLiBUaGUgYWJvdmUgZXhhbXBsZSB3b3VsZCBiZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BzdWNjZXNzYH08L2lubGluZUNvZGU+e2AgdW50aWwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgdXNlckJ5RW1haWxgfTwvaW5saW5lQ29kZT57YCB1cGRhdGVzIHdpdGggYSB2YWx1ZS4gSWYgeW91IG5lZWQgYW4gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaWRsZWB9PC9pbmxpbmVDb2RlPntgIHN0YXRlLCBvcGVuIGFuIGlzc3VlIGFuZCBsZXQncyBkaXNjdXNzIWB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcIm11dGF0aW9uc1wiXG4gICAgfX0+e2BNdXRhdGlvbnNgfTwvaDI+XG4gICAgPHA+e2BaZWR1eCBkb2Vzbid0IGhhdmUgYSBjb25jZXB0IG9mIG11dGF0aW9ucy4gTXV0YXRpb24gZnVuY3Rpb25zIGFyZSB0eXBpY2FsbHkgZXhwb3J0ZWQgZnJvbSBhdG9tcywgYnV0IG1hbnkgYXBwcm9hY2hlcyBhcmUgcG9zc2libGUuIEhlcmUncyBhbiBleGFtcGxlIGdyb3VwaW5nIHF1ZXJ5IGFuZCBtdXRhdGlvbiBvcGVyYXRpb25zIHRvZ2V0aGVyIGluIGEgc2luZ2xlIGF0b206YH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IHVzZXJzQXRvbSA9IGF0b20oJ3VzZXJzJywgKCkgPT4ge1xuICAvLyBhIFwicXVlcnlcIlxuICBjb25zdCBmZXRjaFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KCcvdXNlcnMnKVxuICAgIHJldHVybiBkYXRhXG4gIH1cblxuICBjb25zdCBwcm9taXNlQXBpID0gaW5qZWN0UHJvbWlzZShmZXRjaFVzZXJzLCBbXSlcblxuICAvLyBhIFwibXV0YXRpb25cIlxuICBjb25zdCB1cGRhdGVVc2VyID0gKGlkOiBzdHJpbmcsIHVzZXI6IFVzZXIpID0+IHtcbiAgICAvLyB3ZSBjb3VsZCBhbHNvIGVhc2lseSBhZGQgYW4gb3B0aW1pc3RpYyB1cGRhdGUgcmlnaHQgaGVyZVxuICAgIGF3YWl0IGF4aW9zLnBvc3QoXFxgL3VzZXJzL1xcJHtpZH1cXGAsIHVzZXIpXG5cbiAgICAvLyB3ZSBjYW4gZG8gYSBmdWxsIHJlZmV0Y2ggKHRoaXMgbWltaWNzIFJlYWN0IFF1ZXJ5IG1vc3QgY2xvc2VseSk6XG4gICAgcHJvbWlzZUFwaS5zdG9yZS5zZXRTdGF0ZShhd2FpdCBmZXRjaFVzZXJzKCkpIC8vIGVzc2VudGlhbGx5IGFuIGludmFsaWRhdGlvblxuICAgIC8vIG9yIGp1c3QgdXBkYXRlIHRoZSByZWNvcmQgd2Uga25vdyBjaGFuZ2VkOlxuICAgIHByb21pc2VBcGkuc3RvcmUuc2V0U3RhdGVEZWVwKHsgW2lkXTogdXNlciB9KVxuICAgIC8vIG1vdmluZyB0aGF0IGFib3ZlIHRoZSAucG9zdCgpIGlzIGFsbCBpdCB0YWtlcyB0byBkbyBhbiBvcHRpbWlzdGljIHVwZGF0ZVxuICB9XG5cbiAgLy8gVGhlIHF1ZXJ5IGNvbnRyb2xzIHRoZSBzdGF0ZSBvZiB0aGlzIGF0b20uIFRoZSBtdXRhdGlvbiBpcyBleHBvcnRlZDpcbiAgcmV0dXJuIHByb21pc2VBcGkuYWRkRXhwb3J0cyh7IHVwZGF0ZVVzZXIgfSlcbn0pXG4vLyAuLi4gaW4gYSBjb21wb25lbnQ6XG5jb25zdCBbeyBkYXRhIH0sIHsgdXBkYXRlVXNlciB9XSA9IHVzZUF0b21TdGF0ZSh1c2Vyc0F0b20pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJpbnZhbGlkYXRpb25cIlxuICAgIH19PntgSW52YWxpZGF0aW9uYH08L2gyPlxuICAgIDxwPntgQmVjYXVzZSBvZiB0aGUgbXV0YXRpb24gZGlmZmVyZW5jZXMsIFplZHV4IGFuZCBSZWFjdCBRdWVyeSBhbHNvIGhhdmUgdmVyeSBkaWZmZXJlbnQgY29uY2VwdHMgb2YgaW52YWxpZGF0aW9uLiBSZWFjdCBRdWVyeSBpcyBkZXNpZ25lZCBhcm91bmQgaW52YWxpZGF0aW5nIGNhY2hlcyBtYW51YWxseSB3aXRoIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGludmFsaWRhdGVRdWVyaWVzKClgfTwvaW5saW5lQ29kZT57YCwgZXNwZWNpYWxseSBhZnRlciBtdXRhdGlvbnMuYH08L3A+XG4gICAgPHA+e2BaZWR1eCBhbGxvd3MgbWFudWFsIGludmFsaWRhdGlvbiB2aWEgYH08YSBwYXJlbnROYW1lPVwicFwiIHsuLi57XG4gICAgICAgIFwiaHJlZlwiOiBcIi4uL2FwaS9jbGFzc2VzL0F0b21JbnN0YW5jZSNpbnZhbGlkYXRlXCJcbiAgICAgIH19PjxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJhXCI+e2BpbnN0YW5jZS5pbnZhbGlkYXRlKClgfTwvaW5saW5lQ29kZT48L2E+e2AsIGJ1dCB1c2UgY2FzZXMgZm9yIGl0IGFyZSByYXJlLiBJbnN0ZWFkLCB0aGUgdHdvIGFwcHJvYWNoZXMgZGVtb25zdHJhdGVkIGluIHRoZSBhYm92ZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2B1c2Vyc0F0b21gfTwvaW5saW5lQ29kZT57YCBleGFtcGxlIGFyZSBjb21tb24gd2F5cyB0byBnbyBhYm91dCBpdDpgfTwvcD5cbiAgICA8dWw+XG4gICAgICA8bGkgcGFyZW50TmFtZT1cInVsXCI+e2BQcmVjaXNlbHkgdXBkYXRlIHN0YXRlIGFuZCBsZXQgdXBkYXRlcyBjYXNjYWRlIHRocm91Z2ggdGhlIGF0b20gZ3JhcGgsIGF1dG9tYXRpY2FsbHkgcmVydW5uaW5nIGF0b20gc3RhdGUgZmFjdG9yaWVzL2B9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cImxpXCI+e2BpbmplY3RFZmZlY3RgfTwvaW5saW5lQ29kZT57YCBlZmZlY3RzLmB9PC9saT5cbiAgICAgIDxsaSBwYXJlbnROYW1lPVwidWxcIj57YE1hbnVhbGx5IHJlcnVuIFwicXVlcnlcIiBmdW5jdGlvbnMgbGlrZSBpbiB0aGUgYWJvdmUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YGZldGNoVXNlcnNgfTwvaW5saW5lQ29kZT57YCBleGFtcGxlIGFuZCBkaXJlY3RseSBcImludmFsaWRhdGVcIiBzdGF0ZSB2aWEgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwibGlcIj57YHN0b3JlLnNldFN0YXRlKClgfTwvaW5saW5lQ29kZT57YC5gfTwvbGk+XG4gICAgPC91bD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJxdWVyeWNsaWVudFwiXG4gICAgfX0+e2BRdWVyeUNsaWVudGB9PC9oMj5cbiAgICA8cD57YFplZHV4IGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi9hcGkvY2xhc3Nlcy9FY29zeXN0ZW1cIlxuICAgICAgfX0+e2BlY29zeXN0ZW1zYH08L2E+e2AgYXJlIHBhdHRlcm5lZCBhZnRlciBSZWFjdCBRdWVyeSdzIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCJodHRwczovL3JlYWN0LXF1ZXJ5LnRhbnN0YWNrLmNvbS9yZWZlcmVuY2UvUXVlcnlDbGllbnRcIlxuICAgICAgfX0+e2BRdWVyeUNsaWVudGB9PC9hPntgLiBUaGV5IGJvdGggY3JlYXRlIGF1dG9ub21vdXMgZW52aXJvbm1lbnRzIGZvciBtYW5hZ2luZyBgfXtgW2F0b21zfHF1ZXJpZXNdYH17YCB0aGF0IGNhbiBiZSB1c2VkIG91dHNpZGUgUmVhY3QgYW5kIGFyZSBlc3BlY2lhbGx5IHVzZWZ1bCBmb3IgdGVzdGluZy5gfTwvcD5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJzdHJlYW0tc3VwcG9ydFwiXG4gICAgfX0+e2BTdHJlYW0gU3VwcG9ydGB9PC9oMj5cbiAgICA8cD57YFJlYWN0IFF1ZXJ5IGNhbiB3b3JrIHdpdGggc29ja2V0cyB3aXRob3V0IHRvbyBtdWNoIGhhc3NsZS4gQnV0IFJlYWN0IFF1ZXJ5IGlzIGRlc2lnbmVkIGZvciBwcm9taXNlcy4gWmVkdXggYXRvbXMgYXJlIGRlc2lnbmVkIHRvIHN1cHBvcnQgYW55IGFzeW5jaHJvbm91cyBhcmNoaXRlY3R1cmUuYH08L3A+XG4gICAgPHA+e2BUaGlzIG1lYW5zIHRoYXQgKGZvciBub3cpIFplZHV4IGRvZXNuJ3QgcHJvdmlkZSBhbnkgcHJvbWlzZS1zcGVjaWZpYyBoZWxwZXJzIGxpa2UgUmVhY3QgUXVlcnkncyBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BvblN1Y2Nlc3NgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmVmZXRjaE9uV2luZG93Rm9jdXNgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgcmV0cnlEZWxheWB9PC9pbmxpbmVDb2RlPntgLCBldGMuIFRoZSB1cHNpZGUgaXMsIHdvcmtpbmcgd2l0aCBzb2NrZXRzL2RhdGEgc3RyZWFtaW5nIHBhcmFkaWdtcyBpcyBtb3JlIG5hdHVyYWwgd2l0aCBaZWR1eC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgaW1wb3J0IHsgYXRvbSwgaW5qZWN0QXRvbVZhbHVlLCBpbmplY3RFZmZlY3QsIGluamVjdFN0b3JlIH0gZnJvbSAnQHplZHV4L3JlYWN0J1xuaW1wb3J0IHsgaW8gfSBmcm9tICdzb2NrZXQuaW8tY2xpZW50J1xuXG5jb25zdCBzb2NrZXRBdG9tID0gYXRvbSgnc29ja2V0JywgKCkgPT4gaW8oKSlcblxuY29uc3QgbWVzc2FnZXNBdG9tID0gYXRvbSgnbWVzc2FnZXMnLCAoKSA9PiB7XG4gIGNvbnN0IHNvY2tldCA9IGluamVjdEF0b21WYWx1ZShzb2NrZXRBdG9tKVxuICBjb25zdCBzdG9yZSA9IGluamVjdFN0b3JlKFtdKVxuXG4gIGluamVjdEVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaGFuZGxlciA9IG1lc3NhZ2UgPT4ge1xuICAgICAgc3RvcmUuc2V0U3RhdGUobWVzc2FnZXMgPT4gWy4uLm1lc3NhZ2VzLCBtZXNzYWdlXSlcbiAgICB9XG5cbiAgICBzb2NrZXQub24oJ21lc3NhZ2UnLCBoYW5kbGVyKVxuXG4gICAgcmV0dXJuICgpID0+IHNvY2tldC5vZmYoJ21lc3NhZ2UnLCBoYW5kbGVyKVxuICB9LCBbc29ja2V0XSlcblxuICByZXR1cm4gc3RvcmVcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YFRoaXMgaXMgbW9yZSBmbGV4aWJsZSwgYnV0IGNhbiByZXF1aXJlIG1vcmUgYm9pbGVycGxhdGUgZm9yIHByb21pc2VzLiBNb3N0IGZ1bmN0aW9uYWxpdHkgY2FuIGJlIGFic3RyYWN0ZWQsIG9mIGNvdXJzZS4gV2UgbWF5IHByb3ZpZGUgYSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BAemVkdXgvcXVlcnlgfTwvaW5saW5lQ29kZT57YCBwYWNrYWdlIHNvbWVkYXkgdGhhdCBwcm92aWRlcyBhIGZ1bGwgc3VpdGUgb2YgdG9vbHMgZm9yIGhhbmRsaW5nIHByb21pc2VzLmB9PC9wPlxuICAgIDwvTURYTGF5b3V0Pjtcbn1cbjtcbk1EWENvbnRlbnQuaXNNRFhDb21wb25lbnQgPSB0cnVlO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwibWR4IiwiZnJvbnRNYXR0ZXIiLCJpZCIsInRpdGxlIiwiY29udGVudFRpdGxlIiwidW5kZWZpbmVkIiwibWV0YWRhdGEiLCJhc3NldHMiLCJ0b2MiLCJ2YWx1ZSIsImxldmVsIiwibGF5b3V0UHJvcHMiLCJNRFhMYXlvdXQiLCJNRFhDb250ZW50IiwiY29tcG9uZW50cyIsInByb3BzIiwiaXNNRFhDb21wb25lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6229\n')}}]);
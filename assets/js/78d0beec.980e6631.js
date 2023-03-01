"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[1431],{216:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "assets": function() { return /* binding */ assets; },\n/* harmony export */   "contentTitle": function() { return /* binding */ contentTitle; },\n/* harmony export */   "default": function() { return /* binding */ MDXContent; },\n/* harmony export */   "frontMatter": function() { return /* binding */ frontMatter; },\n/* harmony export */   "metadata": function() { return /* binding */ metadata; },\n/* harmony export */   "toc": function() { return /* binding */ toc; }\n/* harmony export */ });\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7462);\n/* harmony import */ var _Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3366);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);\n/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3905);\nvar _excluded=["components"];/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag React.Fragment */var frontMatter={id:\'more-patterns\',title:\'More Patterns\'};var contentTitle=undefined;var metadata={"unversionedId":"advanced/more-patterns","id":"advanced/more-patterns","title":"More Patterns","description":"Circular Dependencies","source":"@site/docs/advanced/more-patterns.mdx","sourceDirName":"advanced","slug":"/advanced/more-patterns","permalink":"/zedux/docs/advanced/more-patterns","draft":false,"editUrl":"https://github.com/Omnistac/zedux/tree/master/docs/advanced/more-patterns.mdx","tags":[],"version":"current","frontMatter":{"id":"more-patterns","title":"More Patterns"},"sidebar":"react","previous":{"title":"Store Composition","permalink":"/zedux/docs/advanced/store-composition"},"next":{"title":"Atom","permalink":"/zedux/docs/api/classes/Atom"}};var assets={};var toc=[{value:\'Circular Dependencies\',id:\'circular-dependencies\',level:2},{value:\'Workaround 1\',id:\'workaround-1\',level:3},{value:\'Workaround 2\',id:\'workaround-2\',level:3},{value:\'Atom Instance Factories\',id:\'atom-instance-factories\',level:2},{value:\'Recursive Atoms\',id:\'recursive-atoms\',level:2},{value:\'Params Are Constant\',id:\'params-are-constant\',level:2},{value:\'Updating other atoms during evaluation\',id:\'updating-other-atoms-during-evaluation\',level:2}];var layoutProps={toc:toc};var MDXLayout="wrapper";function MDXContent(_ref){var components=_ref.components,props=(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_objectWithoutPropertiesLoose_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref,_excluded);return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)(MDXLayout,(0,_Users_joshuaclaunch_code_oss_zedux_docs_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"circular-dependencies"},"Circular Dependencies"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"It is always possible to design an atom graph without any circular dependencies. That said, sometimes it can be very hard to do so - requirements change, the new guy comes in, or sometimes the state is just very complex."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux\' atomic model can\'t support circular dependencies ... or can it?"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Alright, strictly speaking, direct circular dependencies are not allowed:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const atomA = atom(\'a\', () => {\\n  injectAtomValue(atomB)\\n})\\n\\nconst atomB = atom(\'b\', () => {\\n  injectAtomValue(atomA) // <- circular dep! This will always break everything\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"But there are a couple workarounds. The basic idea for all of them is: Create one of the dependencies asynchronously"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"workaround-1"},"Workaround 1"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Only make one dependency, e.g. ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"a -> b")," (a depends on b). Load the other atom when needed, e.g. (in b) ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"get(atomA)"),"."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"import {\\n  api,\\n  atom,\\n  injectAtomGetters,\\n  injectAtomInstance,\\n  injectStore,\\n} from \'@zedux/react\'\\n\\nconst connectionAtom = atom(\'connection\', () => {\\n  const { getInstance } = injectAtomGetters()\\n\\n  // instead of calling getInstance during atom evaluation like this:\\n  // const login = getInstance(loginAtom)\\n  // we call it only when we need to (inside an exported callback):\\n  // highlight-next-line\\n  const logout = () => getInstance(loginAtom).exports.reset()\\n\\n  const post = (url: string, data: any) =>\\n    fetch(url, { body: JSON.stringify(data), method: \'POST\' }).then(data =>\\n      data.json()\\n    )\\n\\n  return api().setExports({ logout, post })\\n})\\n\\nconst loginAtom = atom(\'login\', () => {\\n  // highlight-next-line\\n  const { post } = injectAtomInstance(connectionAtom).exports\\n  const store = injectStore({ email: \'\', password: \'\' })\\n\\n  const reset = () => store.setState({ email: \'\', password: \'\' })\\n  const setEmail = (email: string) => store.setStateDeep({ email })\\n  const setPassword = (password: string) => store.setStateDeep({ password })\\n  const submit = () => post(\'/login\', store.getState())\\n\\n  return api(store).setExports({ reset, setEmail, setPassword, submit })\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"(Note that the better solution here is to move the ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"logout")," function somewhere else - e.g. inside ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"loginAtom")," - completely avoiding the circular dependency in the first place)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h3",{"id":"workaround-2"},"Workaround 2"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Use ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("a",{parentName:"p","href":"../walkthrough/destruction#manual-graphing"},"manual graphing")," to add a dependency later."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const atomA = atom(\'a\', () => {\\n  const b = injectAtomValue(atomB)\\n\\n  return \'a\' + b\\n})\\n\\nconst atomB = atom(\'b\', () => {\\n  const { getInstance } = injectAtomGetters\\n  const store = injectStore(\'b\')\\n\\n  injectEffect(() => {\\n    const a = getInstance(atomA)\\n    const cleanup = a.addDependent()\\n    store.setState(a)\\n\\n    return cleanup // this is insufficient; see Important Note below\\n  }, [])\\n\\n  return store\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("admonition",{"title":"Important Note below","type":"note"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",{parentName:"admonition"},"In this case, these two atoms have real dependencies on each other. As such, they prevent each other from being cleaned up, so this ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectEffect")," cleanup will never run. You\'ll need to account for that by destroying the manually created edge yourself or force destroying either instance if destruction is needed.")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"atom-instance-factories"},"Atom Instance Factories"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux creates atom instances dynamically whenever they\'re first used. This is very convenient but takes some control out of your hands. Pro Tip: You can use Atom Selectors to get that control back."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Remember that Atom Selectors can return absolutely anything. Well, that means they can also return atom instances. Also remember that atoms can export anything. Well, that means they can also export something that indicates if the atom instance was just created or is missing some ref value or ... anything!"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const formFieldAtom = atom(\'formField\', (fieldName: string) => {\\n  const store = injectStore(\'\')\\n  const isValidRef = injectRef()\\n\\n  return api(store).setExports({ isValidRef })\\n})\\n\\nconst getFormFieldInstance = (\\n  { getInstance }: AtomGetters,\\n  fieldName: string,\\n  isValid: (val: string) => boolean\\n) => {\\n  const instance = getInstance(formFieldAtom, [fieldName])\\n\\n  // if the formField doesn\'t have its validator set yet, set it\\n  if (!instance.exports.isValidRef) {\\n    instance.exports.isValidRef.current = isValid\\n  }\\n\\n  return instance\\n}\\n\\nfunction Form() {\\n  // now instead of `useAtomInstance(formFieldAtom, \'email\')`, do:\\n  const emailFieldInstance = useAtomSelector(\\n    getFormFieldInstance,\\n    \'email\',\\n    isValidEmail\\n  )\\n\\n  // and instead of `useAtomInstance(formFieldAtom, \'password\')`, do:\\n  const passwordFieldInstance = useAtomSelector(\\n    getFormFieldInstance,\\n    \'password\',\\n    isValidPassword\\n  )\\n  ...\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"(Note that this is a contrived example. There are certainly better ways to do per-field form validation)."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"recursive-atoms"},"Recursive Atoms"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Zedux doesn\'t directly have a concept of \\"recursive atoms\\" or \\"atoms-in-atoms\\". However, Zedux\' APIs are so powerful that setting up recursive atoms is easy. Here\'s just one of many ways to go about it:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-tsx","metastring":"live ecosystemId=more-patterns/recursive-atoms resultVar=App","live":true,"ecosystemId":"more-patterns/recursive-atoms","resultVar":"App"},"const idGeneratorAtom = atom(\'idGenerator\', () =>\\n  api().setExports({ idCounter: injectRef(0) })\\n)\\n\\nconst nodeAtom = atom(\'node\', (id: number) => {\\n  const idGenerator = injectAtomInstance(idGeneratorAtom)\\n\\n  const store = injectStore({\\n    children: [],\\n    id,\\n  })\\n\\n  const addChild = () => {\\n    store.setStateDeep(state => ({\\n      children: [...state.children, idGenerator.exports.idCounter.current++],\\n    }))\\n  }\\n\\n  const removeChild = (targetId: number) => {\\n    store.setStateDeep(state => ({\\n      children: state.children.filter(childId => childId !== targetId),\\n    }))\\n  }\\n\\n  return api(store).setExports({ addChild, removeChild })\\n})\\n\\nfunction Node({\\n  id,\\n  onDelete,\\n}: {\\n  id: number\\n  onDelete?: (id: number) => void\\n}) {\\n  const [{ children }, { addChild, removeChild }] = useAtomState(nodeAtom, [id])\\n\\n  return (\\n    <div>\\n      <div>\\n        Node Id: {id} {onDelete && <button onClick={onDelete}>Delete</button>}\\n      </div>\\n      <ul>\\n        {children.map(id => (\\n          <li key={id}>\\n            <Node id={id} onDelete={() => removeChild(id)} />\\n          </li>\\n        ))}\\n        <li>\\n          <button onClick={addChild}>+ Add Child</button>\\n        </li>\\n      </ul>\\n    </div>\\n  )\\n}\\n\\nfunction App() {\\n  const idGenerator = useAtomInstance(idGeneratorAtom)\\n  const rootId = useMemo(() => idGenerator.exports.idCounter.current++, [])\\n\\n  return <Node id={rootId} />\\n}\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"params-are-constant"},"Params Are Constant"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"Since Zedux creates a different atom instance if it detects different atom params, params are essentially constant; the params received by an atom instance can never change for the entire lifetime of that instance."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"This means you ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("em",{parentName:"p"},"can")," conditionally add/remove injectors based on params. We definitely don\'t recommend doing this, especially if you\'re new to Zedux. But we have found some situations where it\'s convenient."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"It also means that you don\'t need to pass params as deps to ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectMemo"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectEffect"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectCallback"),", ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("inlineCode",{parentName:"p"},"injectPromise"),", and similar injectors."),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const requestAtom = atom(\'request\', (endpoint: string) => {\\n  let prefix = \'\'\\n\\n  if (!endpoint.startsWith(\'http\')) {\\n    prefix = injectAtomValue(protocolAtom) // technically fine\\n  }\\n\\n  injectEffect(() => {\\n    fetch(`${prefix}${endpoint}`).then(...)\\n  }, [prefix]) // <- don\'t need to pass endpoint\\n})\\n")),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("h2",{"id":"updating-other-atoms-during-evaluation"},"Updating other atoms during evaluation"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("p",null,"There shouldn\'t be a need for this, but it is actually fine to update other atom instances during atom evaluation ",(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("strong",{parentName:"p"},"if")," this is not the first evaluation:"),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("pre",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .kt)("code",{parentName:"pre","className":"language-ts"},"const rogueAtom = atom(\'rogue\', () => {\\n  const reasons = injectWhy()\\n  const victimInstance = injectAtomInstance(victimAtom)\\n\\n  victimInstance.setState(\'sadness\') // <- Bad! Don\'t do this\\n\\n  // use injectWhy to determine if this is the initial evaluation (reasons is\\n  // empty if it is):\\n  if (reasons.length) {\\n    victimInstance.setState(\'mwahahaha\') // <- fine... but still probably don\'t\\n  }\\n  ...\\n})\\n")));};MDXContent.isMDXComponent=true;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixNQUFNLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLG1CQUFnQyxNQUFNLDJFQUFZLFVBQVUsQ0FBQyxHQUFHLGtCQUErQiw0QkFBZ0MsQ0FDdFYsd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGFBQWEsZ1VBWXpCLENBQU0sQ0FDWCxtRUFDRSxJQUFJLENBQUUsd0NBQXdDLDJDQUNFLENBQ2xELDJMQUF5SCx1RUFBUSxVQUFVLENBQUMsR0FBRyxPQUFnQixzQ0FBMEMsQ0FDek0sd0VBQUsscUVBQU0sVUFBVSxDQUFDLEtBQUssQ0FDdkIsV0FBVyxDQUFFLGFBQWEseWFBY3pCLENBQU0sQ0FDQyxDQUNoQixDQUNBLENBQ0FELFVBQVUsQ0FBQ0csY0FBYyxDQUFHLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly96ZWR1eC1kb2NzLy4vZG9jcy9hZHZhbmNlZC9tb3JlLXBhdHRlcm5zLm1keD83MjI2Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiBAanN4IG1keCAqL1xuLyogQGpzeEZyYWcgUmVhY3QuRnJhZ21lbnQgKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1keCB9IGZyb20gJ0BtZHgtanMvcmVhY3QnO1xuXG5cbmV4cG9ydCBjb25zdCBmcm9udE1hdHRlciA9IHtcblx0aWQ6ICdtb3JlLXBhdHRlcm5zJyxcblx0dGl0bGU6ICdNb3JlIFBhdHRlcm5zJ1xufTtcbmV4cG9ydCBjb25zdCBjb250ZW50VGl0bGUgPSB1bmRlZmluZWQ7XG5leHBvcnQgY29uc3QgbWV0YWRhdGEgPSB7XG4gIFwidW52ZXJzaW9uZWRJZFwiOiBcImFkdmFuY2VkL21vcmUtcGF0dGVybnNcIixcbiAgXCJpZFwiOiBcImFkdmFuY2VkL21vcmUtcGF0dGVybnNcIixcbiAgXCJ0aXRsZVwiOiBcIk1vcmUgUGF0dGVybnNcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIkNpcmN1bGFyIERlcGVuZGVuY2llc1wiLFxuICBcInNvdXJjZVwiOiBcIkBzaXRlL2RvY3MvYWR2YW5jZWQvbW9yZS1wYXR0ZXJucy5tZHhcIixcbiAgXCJzb3VyY2VEaXJOYW1lXCI6IFwiYWR2YW5jZWRcIixcbiAgXCJzbHVnXCI6IFwiL2FkdmFuY2VkL21vcmUtcGF0dGVybnNcIixcbiAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hZHZhbmNlZC9tb3JlLXBhdHRlcm5zXCIsXG4gIFwiZHJhZnRcIjogZmFsc2UsXG4gIFwiZWRpdFVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9PbW5pc3RhYy96ZWR1eC90cmVlL21hc3Rlci9kb2NzL2FkdmFuY2VkL21vcmUtcGF0dGVybnMubWR4XCIsXG4gIFwidGFnc1wiOiBbXSxcbiAgXCJ2ZXJzaW9uXCI6IFwiY3VycmVudFwiLFxuICBcImZyb250TWF0dGVyXCI6IHtcbiAgICBcImlkXCI6IFwibW9yZS1wYXR0ZXJuc1wiLFxuICAgIFwidGl0bGVcIjogXCJNb3JlIFBhdHRlcm5zXCJcbiAgfSxcbiAgXCJzaWRlYmFyXCI6IFwicmVhY3RcIixcbiAgXCJwcmV2aW91c1wiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIlN0b3JlIENvbXBvc2l0aW9uXCIsXG4gICAgXCJwZXJtYWxpbmtcIjogXCIvemVkdXgvZG9jcy9hZHZhbmNlZC9zdG9yZS1jb21wb3NpdGlvblwiXG4gIH0sXG4gIFwibmV4dFwiOiB7XG4gICAgXCJ0aXRsZVwiOiBcIkF0b21cIixcbiAgICBcInBlcm1hbGlua1wiOiBcIi96ZWR1eC9kb2NzL2FwaS9jbGFzc2VzL0F0b21cIlxuICB9XG59O1xuZXhwb3J0IGNvbnN0IGFzc2V0cyA9IHtcblxufTtcblxuXG5leHBvcnQgY29uc3QgdG9jID0gW3tcbiAgdmFsdWU6ICdDaXJjdWxhciBEZXBlbmRlbmNpZXMnLFxuICBpZDogJ2NpcmN1bGFyLWRlcGVuZGVuY2llcycsXG4gIGxldmVsOiAyXG59LCB7XG4gIHZhbHVlOiAnV29ya2Fyb3VuZCAxJyxcbiAgaWQ6ICd3b3JrYXJvdW5kLTEnLFxuICBsZXZlbDogM1xufSwge1xuICB2YWx1ZTogJ1dvcmthcm91bmQgMicsXG4gIGlkOiAnd29ya2Fyb3VuZC0yJyxcbiAgbGV2ZWw6IDNcbn0sIHtcbiAgdmFsdWU6ICdBdG9tIEluc3RhbmNlIEZhY3RvcmllcycsXG4gIGlkOiAnYXRvbS1pbnN0YW5jZS1mYWN0b3JpZXMnLFxuICBsZXZlbDogMlxufSwge1xuICB2YWx1ZTogJ1JlY3Vyc2l2ZSBBdG9tcycsXG4gIGlkOiAncmVjdXJzaXZlLWF0b21zJyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdQYXJhbXMgQXJlIENvbnN0YW50JyxcbiAgaWQ6ICdwYXJhbXMtYXJlLWNvbnN0YW50JyxcbiAgbGV2ZWw6IDJcbn0sIHtcbiAgdmFsdWU6ICdVcGRhdGluZyBvdGhlciBhdG9tcyBkdXJpbmcgZXZhbHVhdGlvbicsXG4gIGlkOiAndXBkYXRpbmctb3RoZXItYXRvbXMtZHVyaW5nLWV2YWx1YXRpb24nLFxuICBsZXZlbDogMlxufV07XG5cbmNvbnN0IGxheW91dFByb3BzID0ge1xuICB0b2Ncbn07XG5jb25zdCBNRFhMYXlvdXQgPSBcIndyYXBwZXJcIlxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTURYQ29udGVudCh7XG4gIGNvbXBvbmVudHMsXG4gIC4uLnByb3BzXG59KSB7XG4gIHJldHVybiA8TURYTGF5b3V0IHsuLi5sYXlvdXRQcm9wc30gey4uLnByb3BzfSBjb21wb25lbnRzPXtjb21wb25lbnRzfSBtZHhUeXBlPVwiTURYTGF5b3V0XCI+XG5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJjaXJjdWxhci1kZXBlbmRlbmNpZXNcIlxuICAgIH19PntgQ2lyY3VsYXIgRGVwZW5kZW5jaWVzYH08L2gyPlxuICAgIDxwPntgSXQgaXMgYWx3YXlzIHBvc3NpYmxlIHRvIGRlc2lnbiBhbiBhdG9tIGdyYXBoIHdpdGhvdXQgYW55IGNpcmN1bGFyIGRlcGVuZGVuY2llcy4gVGhhdCBzYWlkLCBzb21ldGltZXMgaXQgY2FuIGJlIHZlcnkgaGFyZCB0byBkbyBzbyAtIHJlcXVpcmVtZW50cyBjaGFuZ2UsIHRoZSBuZXcgZ3V5IGNvbWVzIGluLCBvciBzb21ldGltZXMgdGhlIHN0YXRlIGlzIGp1c3QgdmVyeSBjb21wbGV4LmB9PC9wPlxuICAgIDxwPntgWmVkdXgnIGF0b21pYyBtb2RlbCBjYW4ndCBzdXBwb3J0IGNpcmN1bGFyIGRlcGVuZGVuY2llcyAuLi4gb3IgY2FuIGl0P2B9PC9wPlxuICAgIDxwPntgQWxyaWdodCwgc3RyaWN0bHkgc3BlYWtpbmcsIGRpcmVjdCBjaXJjdWxhciBkZXBlbmRlbmNpZXMgYXJlIG5vdCBhbGxvd2VkOmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2Bjb25zdCBhdG9tQSA9IGF0b20oJ2EnLCAoKSA9PiB7XG4gIGluamVjdEF0b21WYWx1ZShhdG9tQilcbn0pXG5cbmNvbnN0IGF0b21CID0gYXRvbSgnYicsICgpID0+IHtcbiAgaW5qZWN0QXRvbVZhbHVlKGF0b21BKSAvLyA8LSBjaXJjdWxhciBkZXAhIFRoaXMgd2lsbCBhbHdheXMgYnJlYWsgZXZlcnl0aGluZ1xufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgQnV0IHRoZXJlIGFyZSBhIGNvdXBsZSB3b3JrYXJvdW5kcy4gVGhlIGJhc2ljIGlkZWEgZm9yIGFsbCBvZiB0aGVtIGlzOiBDcmVhdGUgb25lIG9mIHRoZSBkZXBlbmRlbmNpZXMgYXN5bmNocm9ub3VzbHlgfTwvcD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJ3b3JrYXJvdW5kLTFcIlxuICAgIH19PntgV29ya2Fyb3VuZCAxYH08L2gzPlxuICAgIDxwPntgT25seSBtYWtlIG9uZSBkZXBlbmRlbmN5LCBlLmcuIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGEgLT4gYmB9PC9pbmxpbmVDb2RlPntgIChhIGRlcGVuZHMgb24gYikuIExvYWQgdGhlIG90aGVyIGF0b20gd2hlbiBuZWVkZWQsIGUuZy4gKGluIGIpIGB9PGlubGluZUNvZGUgcGFyZW50TmFtZT1cInBcIj57YGdldChhdG9tQSlgfTwvaW5saW5lQ29kZT57YC5gfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgaW1wb3J0IHtcbiAgYXBpLFxuICBhdG9tLFxuICBpbmplY3RBdG9tR2V0dGVycyxcbiAgaW5qZWN0QXRvbUluc3RhbmNlLFxuICBpbmplY3RTdG9yZSxcbn0gZnJvbSAnQHplZHV4L3JlYWN0J1xuXG5jb25zdCBjb25uZWN0aW9uQXRvbSA9IGF0b20oJ2Nvbm5lY3Rpb24nLCAoKSA9PiB7XG4gIGNvbnN0IHsgZ2V0SW5zdGFuY2UgfSA9IGluamVjdEF0b21HZXR0ZXJzKClcblxuICAvLyBpbnN0ZWFkIG9mIGNhbGxpbmcgZ2V0SW5zdGFuY2UgZHVyaW5nIGF0b20gZXZhbHVhdGlvbiBsaWtlIHRoaXM6XG4gIC8vIGNvbnN0IGxvZ2luID0gZ2V0SW5zdGFuY2UobG9naW5BdG9tKVxuICAvLyB3ZSBjYWxsIGl0IG9ubHkgd2hlbiB3ZSBuZWVkIHRvIChpbnNpZGUgYW4gZXhwb3J0ZWQgY2FsbGJhY2spOlxuICAvLyBoaWdobGlnaHQtbmV4dC1saW5lXG4gIGNvbnN0IGxvZ291dCA9ICgpID0+IGdldEluc3RhbmNlKGxvZ2luQXRvbSkuZXhwb3J0cy5yZXNldCgpXG5cbiAgY29uc3QgcG9zdCA9ICh1cmw6IHN0cmluZywgZGF0YTogYW55KSA9PlxuICAgIGZldGNoKHVybCwgeyBib2R5OiBKU09OLnN0cmluZ2lmeShkYXRhKSwgbWV0aG9kOiAnUE9TVCcgfSkudGhlbihkYXRhID0+XG4gICAgICBkYXRhLmpzb24oKVxuICAgIClcblxuICByZXR1cm4gYXBpKCkuc2V0RXhwb3J0cyh7IGxvZ291dCwgcG9zdCB9KVxufSlcblxuY29uc3QgbG9naW5BdG9tID0gYXRvbSgnbG9naW4nLCAoKSA9PiB7XG4gIC8vIGhpZ2hsaWdodC1uZXh0LWxpbmVcbiAgY29uc3QgeyBwb3N0IH0gPSBpbmplY3RBdG9tSW5zdGFuY2UoY29ubmVjdGlvbkF0b20pLmV4cG9ydHNcbiAgY29uc3Qgc3RvcmUgPSBpbmplY3RTdG9yZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pXG5cbiAgY29uc3QgcmVzZXQgPSAoKSA9PiBzdG9yZS5zZXRTdGF0ZSh7IGVtYWlsOiAnJywgcGFzc3dvcmQ6ICcnIH0pXG4gIGNvbnN0IHNldEVtYWlsID0gKGVtYWlsOiBzdHJpbmcpID0+IHN0b3JlLnNldFN0YXRlRGVlcCh7IGVtYWlsIH0pXG4gIGNvbnN0IHNldFBhc3N3b3JkID0gKHBhc3N3b3JkOiBzdHJpbmcpID0+IHN0b3JlLnNldFN0YXRlRGVlcCh7IHBhc3N3b3JkIH0pXG4gIGNvbnN0IHN1Ym1pdCA9ICgpID0+IHBvc3QoJy9sb2dpbicsIHN0b3JlLmdldFN0YXRlKCkpXG5cbiAgcmV0dXJuIGFwaShzdG9yZSkuc2V0RXhwb3J0cyh7IHJlc2V0LCBzZXRFbWFpbCwgc2V0UGFzc3dvcmQsIHN1Ym1pdCB9KVxufSlcbmB9PC9jb2RlPjwvcHJlPlxuICAgIDxwPntgKE5vdGUgdGhhdCB0aGUgYmV0dGVyIHNvbHV0aW9uIGhlcmUgaXMgdG8gbW92ZSB0aGUgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgbG9nb3V0YH08L2lubGluZUNvZGU+e2AgZnVuY3Rpb24gc29tZXdoZXJlIGVsc2UgLSBlLmcuIGluc2lkZSBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2Bsb2dpbkF0b21gfTwvaW5saW5lQ29kZT57YCAtIGNvbXBsZXRlbHkgYXZvaWRpbmcgdGhlIGNpcmN1bGFyIGRlcGVuZGVuY3kgaW4gdGhlIGZpcnN0IHBsYWNlKS5gfTwvcD5cbiAgICA8aDMgey4uLntcbiAgICAgIFwiaWRcIjogXCJ3b3JrYXJvdW5kLTJcIlxuICAgIH19PntgV29ya2Fyb3VuZCAyYH08L2gzPlxuICAgIDxwPntgVXNlIGB9PGEgcGFyZW50TmFtZT1cInBcIiB7Li4ue1xuICAgICAgICBcImhyZWZcIjogXCIuLi93YWxrdGhyb3VnaC9kZXN0cnVjdGlvbiNtYW51YWwtZ3JhcGhpbmdcIlxuICAgICAgfX0+e2BtYW51YWwgZ3JhcGhpbmdgfTwvYT57YCB0byBhZGQgYSBkZXBlbmRlbmN5IGxhdGVyLmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHNcIlxuICAgICAgfX0+e2Bjb25zdCBhdG9tQSA9IGF0b20oJ2EnLCAoKSA9PiB7XG4gIGNvbnN0IGIgPSBpbmplY3RBdG9tVmFsdWUoYXRvbUIpXG5cbiAgcmV0dXJuICdhJyArIGJcbn0pXG5cbmNvbnN0IGF0b21CID0gYXRvbSgnYicsICgpID0+IHtcbiAgY29uc3QgeyBnZXRJbnN0YW5jZSB9ID0gaW5qZWN0QXRvbUdldHRlcnNcbiAgY29uc3Qgc3RvcmUgPSBpbmplY3RTdG9yZSgnYicpXG5cbiAgaW5qZWN0RWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBhID0gZ2V0SW5zdGFuY2UoYXRvbUEpXG4gICAgY29uc3QgY2xlYW51cCA9IGEuYWRkRGVwZW5kZW50KClcbiAgICBzdG9yZS5zZXRTdGF0ZShhKVxuXG4gICAgcmV0dXJuIGNsZWFudXAgLy8gdGhpcyBpcyBpbnN1ZmZpY2llbnQ7IHNlZSBJbXBvcnRhbnQgTm90ZSBiZWxvd1xuICB9LCBbXSlcblxuICByZXR1cm4gc3RvcmVcbn0pXG5gfTwvY29kZT48L3ByZT5cbiAgICA8YWRtb25pdGlvbiB7Li4ue1xuICAgICAgXCJ0aXRsZVwiOiBcIkltcG9ydGFudCBOb3RlIGJlbG93XCIsXG4gICAgICBcInR5cGVcIjogXCJub3RlXCJcbiAgICB9fT48cCBwYXJlbnROYW1lPVwiYWRtb25pdGlvblwiPntgSW4gdGhpcyBjYXNlLCB0aGVzZSB0d28gYXRvbXMgaGF2ZSByZWFsIGRlcGVuZGVuY2llcyBvbiBlYWNoIG90aGVyLiBBcyBzdWNoLCB0aGV5IHByZXZlbnQgZWFjaCBvdGhlciBmcm9tIGJlaW5nIGNsZWFuZWQgdXAsIHNvIHRoaXMgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0RWZmZWN0YH08L2lubGluZUNvZGU+e2AgY2xlYW51cCB3aWxsIG5ldmVyIHJ1bi4gWW91J2xsIG5lZWQgdG8gYWNjb3VudCBmb3IgdGhhdCBieSBkZXN0cm95aW5nIHRoZSBtYW51YWxseSBjcmVhdGVkIGVkZ2UgeW91cnNlbGYgb3IgZm9yY2UgZGVzdHJveWluZyBlaXRoZXIgaW5zdGFuY2UgaWYgZGVzdHJ1Y3Rpb24gaXMgbmVlZGVkLmB9PC9wPjwvYWRtb25pdGlvbj5cbiAgICA8aDIgey4uLntcbiAgICAgIFwiaWRcIjogXCJhdG9tLWluc3RhbmNlLWZhY3Rvcmllc1wiXG4gICAgfX0+e2BBdG9tIEluc3RhbmNlIEZhY3Rvcmllc2B9PC9oMj5cbiAgICA8cD57YFplZHV4IGNyZWF0ZXMgYXRvbSBpbnN0YW5jZXMgZHluYW1pY2FsbHkgd2hlbmV2ZXIgdGhleSdyZSBmaXJzdCB1c2VkLiBUaGlzIGlzIHZlcnkgY29udmVuaWVudCBidXQgdGFrZXMgc29tZSBjb250cm9sIG91dCBvZiB5b3VyIGhhbmRzLiBQcm8gVGlwOiBZb3UgY2FuIHVzZSBBdG9tIFNlbGVjdG9ycyB0byBnZXQgdGhhdCBjb250cm9sIGJhY2suYH08L3A+XG4gICAgPHA+e2BSZW1lbWJlciB0aGF0IEF0b20gU2VsZWN0b3JzIGNhbiByZXR1cm4gYWJzb2x1dGVseSBhbnl0aGluZy4gV2VsbCwgdGhhdCBtZWFucyB0aGV5IGNhbiBhbHNvIHJldHVybiBhdG9tIGluc3RhbmNlcy4gQWxzbyByZW1lbWJlciB0aGF0IGF0b21zIGNhbiBleHBvcnQgYW55dGhpbmcuIFdlbGwsIHRoYXQgbWVhbnMgdGhleSBjYW4gYWxzbyBleHBvcnQgc29tZXRoaW5nIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBhdG9tIGluc3RhbmNlIHdhcyBqdXN0IGNyZWF0ZWQgb3IgaXMgbWlzc2luZyBzb21lIHJlZiB2YWx1ZSBvciAuLi4gYW55dGhpbmchYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IGZvcm1GaWVsZEF0b20gPSBhdG9tKCdmb3JtRmllbGQnLCAoZmllbGROYW1lOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc3RvcmUgPSBpbmplY3RTdG9yZSgnJylcbiAgY29uc3QgaXNWYWxpZFJlZiA9IGluamVjdFJlZigpXG5cbiAgcmV0dXJuIGFwaShzdG9yZSkuc2V0RXhwb3J0cyh7IGlzVmFsaWRSZWYgfSlcbn0pXG5cbmNvbnN0IGdldEZvcm1GaWVsZEluc3RhbmNlID0gKFxuICB7IGdldEluc3RhbmNlIH06IEF0b21HZXR0ZXJzLFxuICBmaWVsZE5hbWU6IHN0cmluZyxcbiAgaXNWYWxpZDogKHZhbDogc3RyaW5nKSA9PiBib29sZWFuXG4pID0+IHtcbiAgY29uc3QgaW5zdGFuY2UgPSBnZXRJbnN0YW5jZShmb3JtRmllbGRBdG9tLCBbZmllbGROYW1lXSlcblxuICAvLyBpZiB0aGUgZm9ybUZpZWxkIGRvZXNuJ3QgaGF2ZSBpdHMgdmFsaWRhdG9yIHNldCB5ZXQsIHNldCBpdFxuICBpZiAoIWluc3RhbmNlLmV4cG9ydHMuaXNWYWxpZFJlZikge1xuICAgIGluc3RhbmNlLmV4cG9ydHMuaXNWYWxpZFJlZi5jdXJyZW50ID0gaXNWYWxpZFxuICB9XG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG5cbmZ1bmN0aW9uIEZvcm0oKSB7XG4gIC8vIG5vdyBpbnN0ZWFkIG9mIFxcYHVzZUF0b21JbnN0YW5jZShmb3JtRmllbGRBdG9tLCAnZW1haWwnKVxcYCwgZG86XG4gIGNvbnN0IGVtYWlsRmllbGRJbnN0YW5jZSA9IHVzZUF0b21TZWxlY3RvcihcbiAgICBnZXRGb3JtRmllbGRJbnN0YW5jZSxcbiAgICAnZW1haWwnLFxuICAgIGlzVmFsaWRFbWFpbFxuICApXG5cbiAgLy8gYW5kIGluc3RlYWQgb2YgXFxgdXNlQXRvbUluc3RhbmNlKGZvcm1GaWVsZEF0b20sICdwYXNzd29yZCcpXFxgLCBkbzpcbiAgY29uc3QgcGFzc3dvcmRGaWVsZEluc3RhbmNlID0gdXNlQXRvbVNlbGVjdG9yKFxuICAgIGdldEZvcm1GaWVsZEluc3RhbmNlLFxuICAgICdwYXNzd29yZCcsXG4gICAgaXNWYWxpZFBhc3N3b3JkXG4gIClcbiAgLi4uXG59XG5gfTwvY29kZT48L3ByZT5cbiAgICA8cD57YChOb3RlIHRoYXQgdGhpcyBpcyBhIGNvbnRyaXZlZCBleGFtcGxlLiBUaGVyZSBhcmUgY2VydGFpbmx5IGJldHRlciB3YXlzIHRvIGRvIHBlci1maWVsZCBmb3JtIHZhbGlkYXRpb24pLmB9PC9wPlxuICAgIDxoMiB7Li4ue1xuICAgICAgXCJpZFwiOiBcInJlY3Vyc2l2ZS1hdG9tc1wiXG4gICAgfX0+e2BSZWN1cnNpdmUgQXRvbXNgfTwvaDI+XG4gICAgPHA+e2BaZWR1eCBkb2Vzbid0IGRpcmVjdGx5IGhhdmUgYSBjb25jZXB0IG9mIFwicmVjdXJzaXZlIGF0b21zXCIgb3IgXCJhdG9tcy1pbi1hdG9tc1wiLiBIb3dldmVyLCBaZWR1eCcgQVBJcyBhcmUgc28gcG93ZXJmdWwgdGhhdCBzZXR0aW5nIHVwIHJlY3Vyc2l2ZSBhdG9tcyBpcyBlYXN5LiBIZXJlJ3MganVzdCBvbmUgb2YgbWFueSB3YXlzIHRvIGdvIGFib3V0IGl0OmB9PC9wPlxuICAgIDxwcmU+PGNvZGUgcGFyZW50TmFtZT1cInByZVwiIHsuLi57XG4gICAgICAgIFwiY2xhc3NOYW1lXCI6IFwibGFuZ3VhZ2UtdHN4XCIsXG4gICAgICAgIFwibWV0YXN0cmluZ1wiOiBcImxpdmUgZWNvc3lzdGVtSWQ9bW9yZS1wYXR0ZXJucy9yZWN1cnNpdmUtYXRvbXMgcmVzdWx0VmFyPUFwcFwiLFxuICAgICAgICBcImxpdmVcIjogdHJ1ZSxcbiAgICAgICAgXCJlY29zeXN0ZW1JZFwiOiBcIm1vcmUtcGF0dGVybnMvcmVjdXJzaXZlLWF0b21zXCIsXG4gICAgICAgIFwicmVzdWx0VmFyXCI6IFwiQXBwXCJcbiAgICAgIH19PntgY29uc3QgaWRHZW5lcmF0b3JBdG9tID0gYXRvbSgnaWRHZW5lcmF0b3InLCAoKSA9PlxuICBhcGkoKS5zZXRFeHBvcnRzKHsgaWRDb3VudGVyOiBpbmplY3RSZWYoMCkgfSlcbilcblxuY29uc3Qgbm9kZUF0b20gPSBhdG9tKCdub2RlJywgKGlkOiBudW1iZXIpID0+IHtcbiAgY29uc3QgaWRHZW5lcmF0b3IgPSBpbmplY3RBdG9tSW5zdGFuY2UoaWRHZW5lcmF0b3JBdG9tKVxuXG4gIGNvbnN0IHN0b3JlID0gaW5qZWN0U3RvcmUoe1xuICAgIGNoaWxkcmVuOiBbXSxcbiAgICBpZCxcbiAgfSlcblxuICBjb25zdCBhZGRDaGlsZCA9ICgpID0+IHtcbiAgICBzdG9yZS5zZXRTdGF0ZURlZXAoc3RhdGUgPT4gKHtcbiAgICAgIGNoaWxkcmVuOiBbLi4uc3RhdGUuY2hpbGRyZW4sIGlkR2VuZXJhdG9yLmV4cG9ydHMuaWRDb3VudGVyLmN1cnJlbnQrK10sXG4gICAgfSkpXG4gIH1cblxuICBjb25zdCByZW1vdmVDaGlsZCA9ICh0YXJnZXRJZDogbnVtYmVyKSA9PiB7XG4gICAgc3RvcmUuc2V0U3RhdGVEZWVwKHN0YXRlID0+ICh7XG4gICAgICBjaGlsZHJlbjogc3RhdGUuY2hpbGRyZW4uZmlsdGVyKGNoaWxkSWQgPT4gY2hpbGRJZCAhPT0gdGFyZ2V0SWQpLFxuICAgIH0pKVxuICB9XG5cbiAgcmV0dXJuIGFwaShzdG9yZSkuc2V0RXhwb3J0cyh7IGFkZENoaWxkLCByZW1vdmVDaGlsZCB9KVxufSlcblxuZnVuY3Rpb24gTm9kZSh7XG4gIGlkLFxuICBvbkRlbGV0ZSxcbn06IHtcbiAgaWQ6IG51bWJlclxuICBvbkRlbGV0ZT86IChpZDogbnVtYmVyKSA9PiB2b2lkXG59KSB7XG4gIGNvbnN0IFt7IGNoaWxkcmVuIH0sIHsgYWRkQ2hpbGQsIHJlbW92ZUNoaWxkIH1dID0gdXNlQXRvbVN0YXRlKG5vZGVBdG9tLCBbaWRdKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIE5vZGUgSWQ6IHtpZH0ge29uRGVsZXRlICYmIDxidXR0b24gb25DbGljaz17b25EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPn1cbiAgICAgIDwvZGl2PlxuICAgICAgPHVsPlxuICAgICAgICB7Y2hpbGRyZW4ubWFwKGlkID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpZH0+XG4gICAgICAgICAgICA8Tm9kZSBpZD17aWR9IG9uRGVsZXRlPXsoKSA9PiByZW1vdmVDaGlsZChpZCl9IC8+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICAgIDxsaT5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZENoaWxkfT4rIEFkZCBDaGlsZDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5mdW5jdGlvbiBBcHAoKSB7XG4gIGNvbnN0IGlkR2VuZXJhdG9yID0gdXNlQXRvbUluc3RhbmNlKGlkR2VuZXJhdG9yQXRvbSlcbiAgY29uc3Qgcm9vdElkID0gdXNlTWVtbygoKSA9PiBpZEdlbmVyYXRvci5leHBvcnRzLmlkQ291bnRlci5jdXJyZW50KyssIFtdKVxuXG4gIHJldHVybiA8Tm9kZSBpZD17cm9vdElkfSAvPlxufVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwicGFyYW1zLWFyZS1jb25zdGFudFwiXG4gICAgfX0+e2BQYXJhbXMgQXJlIENvbnN0YW50YH08L2gyPlxuICAgIDxwPntgU2luY2UgWmVkdXggY3JlYXRlcyBhIGRpZmZlcmVudCBhdG9tIGluc3RhbmNlIGlmIGl0IGRldGVjdHMgZGlmZmVyZW50IGF0b20gcGFyYW1zLCBwYXJhbXMgYXJlIGVzc2VudGlhbGx5IGNvbnN0YW50OyB0aGUgcGFyYW1zIHJlY2VpdmVkIGJ5IGFuIGF0b20gaW5zdGFuY2UgY2FuIG5ldmVyIGNoYW5nZSBmb3IgdGhlIGVudGlyZSBsaWZldGltZSBvZiB0aGF0IGluc3RhbmNlLmB9PC9wPlxuICAgIDxwPntgVGhpcyBtZWFucyB5b3UgYH08ZW0gcGFyZW50TmFtZT1cInBcIj57YGNhbmB9PC9lbT57YCBjb25kaXRpb25hbGx5IGFkZC9yZW1vdmUgaW5qZWN0b3JzIGJhc2VkIG9uIHBhcmFtcy4gV2UgZGVmaW5pdGVseSBkb24ndCByZWNvbW1lbmQgZG9pbmcgdGhpcywgZXNwZWNpYWxseSBpZiB5b3UncmUgbmV3IHRvIFplZHV4LiBCdXQgd2UgaGF2ZSBmb3VuZCBzb21lIHNpdHVhdGlvbnMgd2hlcmUgaXQncyBjb252ZW5pZW50LmB9PC9wPlxuICAgIDxwPntgSXQgYWxzbyBtZWFucyB0aGF0IHlvdSBkb24ndCBuZWVkIHRvIHBhc3MgcGFyYW1zIGFzIGRlcHMgdG8gYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0TWVtb2B9PC9pbmxpbmVDb2RlPntgLCBgfTxpbmxpbmVDb2RlIHBhcmVudE5hbWU9XCJwXCI+e2BpbmplY3RFZmZlY3RgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0Q2FsbGJhY2tgfTwvaW5saW5lQ29kZT57YCwgYH08aW5saW5lQ29kZSBwYXJlbnROYW1lPVwicFwiPntgaW5qZWN0UHJvbWlzZWB9PC9pbmxpbmVDb2RlPntgLCBhbmQgc2ltaWxhciBpbmplY3RvcnMuYH08L3A+XG4gICAgPHByZT48Y29kZSBwYXJlbnROYW1lPVwicHJlXCIgey4uLntcbiAgICAgICAgXCJjbGFzc05hbWVcIjogXCJsYW5ndWFnZS10c1wiXG4gICAgICB9fT57YGNvbnN0IHJlcXVlc3RBdG9tID0gYXRvbSgncmVxdWVzdCcsIChlbmRwb2ludDogc3RyaW5nKSA9PiB7XG4gIGxldCBwcmVmaXggPSAnJ1xuXG4gIGlmICghZW5kcG9pbnQuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgcHJlZml4ID0gaW5qZWN0QXRvbVZhbHVlKHByb3RvY29sQXRvbSkgLy8gdGVjaG5pY2FsbHkgZmluZVxuICB9XG5cbiAgaW5qZWN0RWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaChcXGBcXCR7cHJlZml4fVxcJHtlbmRwb2ludH1cXGApLnRoZW4oLi4uKVxuICB9LCBbcHJlZml4XSkgLy8gPC0gZG9uJ3QgbmVlZCB0byBwYXNzIGVuZHBvaW50XG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPGgyIHsuLi57XG4gICAgICBcImlkXCI6IFwidXBkYXRpbmctb3RoZXItYXRvbXMtZHVyaW5nLWV2YWx1YXRpb25cIlxuICAgIH19PntgVXBkYXRpbmcgb3RoZXIgYXRvbXMgZHVyaW5nIGV2YWx1YXRpb25gfTwvaDI+XG4gICAgPHA+e2BUaGVyZSBzaG91bGRuJ3QgYmUgYSBuZWVkIGZvciB0aGlzLCBidXQgaXQgaXMgYWN0dWFsbHkgZmluZSB0byB1cGRhdGUgb3RoZXIgYXRvbSBpbnN0YW5jZXMgZHVyaW5nIGF0b20gZXZhbHVhdGlvbiBgfTxzdHJvbmcgcGFyZW50TmFtZT1cInBcIj57YGlmYH08L3N0cm9uZz57YCB0aGlzIGlzIG5vdCB0aGUgZmlyc3QgZXZhbHVhdGlvbjpgfTwvcD5cbiAgICA8cHJlPjxjb2RlIHBhcmVudE5hbWU9XCJwcmVcIiB7Li4ue1xuICAgICAgICBcImNsYXNzTmFtZVwiOiBcImxhbmd1YWdlLXRzXCJcbiAgICAgIH19PntgY29uc3Qgcm9ndWVBdG9tID0gYXRvbSgncm9ndWUnLCAoKSA9PiB7XG4gIGNvbnN0IHJlYXNvbnMgPSBpbmplY3RXaHkoKVxuICBjb25zdCB2aWN0aW1JbnN0YW5jZSA9IGluamVjdEF0b21JbnN0YW5jZSh2aWN0aW1BdG9tKVxuXG4gIHZpY3RpbUluc3RhbmNlLnNldFN0YXRlKCdzYWRuZXNzJykgLy8gPC0gQmFkISBEb24ndCBkbyB0aGlzXG5cbiAgLy8gdXNlIGluamVjdFdoeSB0byBkZXRlcm1pbmUgaWYgdGhpcyBpcyB0aGUgaW5pdGlhbCBldmFsdWF0aW9uIChyZWFzb25zIGlzXG4gIC8vIGVtcHR5IGlmIGl0IGlzKTpcbiAgaWYgKHJlYXNvbnMubGVuZ3RoKSB7XG4gICAgdmljdGltSW5zdGFuY2Uuc2V0U3RhdGUoJ213YWhhaGFoYScpIC8vIDwtIGZpbmUuLi4gYnV0IHN0aWxsIHByb2JhYmx5IGRvbid0XG4gIH1cbiAgLi4uXG59KVxuYH08L2NvZGU+PC9wcmU+XG4gICAgPC9NRFhMYXlvdXQ+O1xufVxuO1xuTURYQ29udGVudC5pc01EWENvbXBvbmVudCA9IHRydWU7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJtZHgiLCJmcm9udE1hdHRlciIsImlkIiwidGl0bGUiLCJjb250ZW50VGl0bGUiLCJ1bmRlZmluZWQiLCJtZXRhZGF0YSIsImFzc2V0cyIsInRvYyIsInZhbHVlIiwibGV2ZWwiLCJsYXlvdXRQcm9wcyIsIk1EWExheW91dCIsIk1EWENvbnRlbnQiLCJjb21wb25lbnRzIiwicHJvcHMiLCJpc01EWENvbXBvbmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///216\n')}}]);
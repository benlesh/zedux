"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[2753],{2469:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var a=n(3117),i=n(102),r=(n(7294),n(3905)),o=n(3052),c=["components"],s={id:"injectRef",title:"injectRef"},l=void 0,u={unversionedId:"api/injectors/injectRef",id:"api/injectors/injectRef",isDocsHomePage:!1,title:"injectRef",description:"An injector that returns a stable, mutable Ref object. The injector equivalent of React's useRef hook.",source:"@site/docs/api/injectors/injectRef.mdx",sourceDirName:"api/injectors",slug:"/api/injectors/injectRef",permalink:"/zedux/docs/api/injectors/injectRef",editUrl:"https://github.com/Omnistac/zedux/tree/master/docs/api/injectors/injectRef.mdx",tags:[],version:"current",frontMatter:{id:"injectRef",title:"injectRef"},sidebar:"react",previous:{title:"injectMemo",permalink:"/zedux/docs/api/injectors/injectMemo"},next:{title:"injectStore",permalink:"/zedux/docs/api/injectors/injectStore"}},d=[{value:"Examples",id:"examples",children:[],level:2},{value:"Signature",id:"signature",children:[{value:"<code>initialValue</code>",id:"initialvalue",children:[],level:3}],level:2}],p={toc:d};function f(e){var t=e.components,n=(0,i.Z)(e,c);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { injectRef } from '@zedux/react'\n")),(0,r.kt)("p",null,"An ",(0,r.kt)("a",{parentName:"p",href:"../glossary#injector"},"injector")," that returns a stable, mutable Ref object. The injector equivalent of ",(0,r.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#useref"},"React's ",(0,r.kt)("inlineCode",{parentName:"a"},"useRef")," hook"),"."),(0,r.kt)("p",null,"The returned Ref object has a ",(0,r.kt)("inlineCode",{parentName:"p"},".current")," property that is set initially to the passed value."),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)(o.u,{resultVar:"Seconds",mdxType:"LiveEditor"},"\nconst secondsAtom = atom('seconds', () => {\n  const ref = injectRef(0)\n\n  injectEffect(() => {\n    const intervalId = setInterval(\n      () => ref.current++, // doesn't trigger an update\n      1000\n    )\n\n    return () => clearInterval(intervalId)\n  }, [])\n\n  return ref.current\n})\n\nfunction Seconds() {\n  const seconds = useAtomValue(secondsAtom)\n  const instance = useAtomInstance(secondsAtom)\n\n  return (\n    <>\n      <div>Unchanging Seconds: {seconds}</div>\n      <button onClick={() => instance.invalidate()}>Force Update</button>\n    </>\n  )\n}\n"),(0,r.kt)("p",null,"Miscellaneous:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const ref = injectRef('initial value')\nref.current // 'initial value'\nref.current = { something: 'else' }\n\nconst noValRef = injectRef()\nnoValRef.current // undefined\n")),(0,r.kt)("p",null,"Exporting a Ref:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { api, atom, injectRef } from '@zedux/react'\n\nconst tableAtom = atom('table', () => {\n  const tableRef = injectRef(null)\n\n  return api().setExports({ tableRef })\n})\n\nfunction Table() {\n  const { tableRef } = useAtomInstance(tableAtom).exports\n\n  return <BigExternalTableComponent ref={tableRef} />\n}\n")),(0,r.kt)("h2",{id:"signature"},"Signature"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"injectRef(initialValue?) => MutableRefObject\n")),(0,r.kt)("h3",{id:"initialvalue"},(0,r.kt)("inlineCode",{parentName:"h3"},"initialValue")),(0,r.kt)("p",null,"Optional. Can be absolutely anything. The returned Ref object will have its ",(0,r.kt)("inlineCode",{parentName:"p"},".current")," property set to this value initially. Will be ignored on subsequent evaluations."))}f.isMDXComponent=!0}}]);
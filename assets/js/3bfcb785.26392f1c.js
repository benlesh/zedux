"use strict";(self.webpackChunkzedux_docs=self.webpackChunkzedux_docs||[]).push([[8483],{4360:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var n=a(3117),s=a(102),r=(a(7294),a(3905)),i=["components"],o={id:"Settable",title:"Settable"},p=void 0,c={unversionedId:"api/types/Settable",id:"api/types/Settable",isDocsHomePage:!1,title:"Settable",description:"The value passed to store.setState(), thus also the value passed to instance.setState() and to SetStateInterceptors and ion setters.",source:"@site/docs/api/types/Settable.mdx",sourceDirName:"api/types",slug:"/api/types/Settable",permalink:"/zedux/docs/api/types/Settable",editUrl:"https://github.com/Omnistac/zedux/tree/master/docs/api/types/Settable.mdx",tags:[],version:"current",frontMatter:{id:"Settable",title:"Settable"},sidebar:"react",previous:{title:"SetStateInterceptor",permalink:"/zedux/docs/api/types/SetStateInterceptor"},next:{title:"Subscriber",permalink:"/zedux/docs/api/types/Subscriber"}},l=[{value:"Definition",id:"definition",children:[],level:2}],u={toc:l};function d(t){var e=t.components,a=(0,s.Z)(t,i);return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The value passed to ",(0,r.kt)("a",{parentName:"p",href:"../classes/Store#setstate"},(0,r.kt)("inlineCode",{parentName:"a"},"store.setState()")),", thus also the value passed to ",(0,r.kt)("a",{parentName:"p",href:"../classes/AtomInstance#setstate"},(0,r.kt)("inlineCode",{parentName:"a"},"instance.setState()"))," and to ",(0,r.kt)("a",{parentName:"p",href:"SetStateInterceptor"},"SetStateInterceptors")," and ",(0,r.kt)("a",{parentName:"p",href:"../factories/ion#set"},"ion setters"),"."),(0,r.kt)("h2",{id:"definition"},"Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Settable<State = any> = ((state: State) => State) | State\n")),(0,r.kt)("p",null,"Can be either the state straight-up or a function that receives the current state and returns the new state"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const store = createStore(null, 'initial state')\n\nstore.setState('new state')\nstore.setState(currentState => `${currentState} and then some`)\nstore.getState() // 'new state and then some'\n")))}d.isMDXComponent=!0}}]);
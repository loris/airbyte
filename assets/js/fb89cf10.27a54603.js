"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[50671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="Omnisend",l={unversionedId:"integrations/sources/omnisend",id:"integrations/sources/omnisend",title:"Omnisend",description:"Sync overview",source:"@site/../docs/integrations/sources/omnisend.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/omnisend",permalink:"/integrations/sources/omnisend",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/omnisend.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Okta",permalink:"/integrations/sources/okta"},next:{title:"OneSignal",permalink:"/integrations/sources/onesignal"}},s={},c=[{value:"Sync overview",id:"sync-overview",level:2},{value:"This Source Supports the Following Streams",id:"this-source-supports-the-following-streams",level:2},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Changelog",id:"changelog",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"omnisend"},"Omnisend"),(0,a.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,a.kt)("p",null,"This source can sync data from the ",(0,a.kt)("a",{parentName:"p",href:"https://api-docs.omnisend.com/reference/intro"},"Omnisend API"),". At present this connector only supports full refresh syncs meaning that each time you use the connector it will sync all available records from scratch. Please use cautiously if you expect your API to have a lot of records."),(0,a.kt)("h2",{id:"this-source-supports-the-following-streams"},"This Source Supports the Following Streams"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"contacts"),(0,a.kt)("li",{parentName:"ul"},"campaigns"),(0,a.kt)("li",{parentName:"ul"},"carts"),(0,a.kt)("li",{parentName:"ul"},"orders"),(0,a.kt)("li",{parentName:"ul"},"products")),(0,a.kt)("h3",{id:"features"},"Features"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,a.kt)("td",{parentName:"tr",align:"left"},"No"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,a.kt)("p",null,"The connector has a rate limit of 400 requests per 1 minute."),(0,a.kt)("h2",{id:"getting-started"},"Getting started"),(0,a.kt)("h3",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Omnisend API Key")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-10-25"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18577"},"18577")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial commit")))))}p.isMDXComponent=!0}}]);
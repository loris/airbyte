"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[29178],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||l;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},93738:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const l={},o="Babelforce",i={unversionedId:"integrations/sources/babelforce",id:"integrations/sources/babelforce",title:"Babelforce",description:"Overview",source:"@site/../docs/integrations/sources/babelforce.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/babelforce",permalink:"/integrations/sources/babelforce",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/babelforce.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Azure Table Storage",permalink:"/integrations/sources/azure-table"},next:{title:"Bamboo HR",permalink:"/integrations/sources/bamboo-hr"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Performance considerations",id:"performance-considerations",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"CHANGELOG",id:"changelog",level:2}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"babelforce"},"Babelforce"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Babelforce source supports ",(0,n.kt)("em",{parentName:"p"},"Full Refresh")," as well as ",(0,n.kt)("em",{parentName:"p"},"Incremental")," syncs. "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Full Refresh")," sync means every time a sync is run, Airbyte will copy all rows in the tables and columns you set up for replication into the destination in a new table.\n",(0,n.kt)("em",{parentName:"p"},"Incremental")," syn means only changed resources are copied from Babelformce. For the first run, it will be a Full Refresh sync."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"Several output streams are available from this source:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://api.babelforce.com/#af7a6b6e-b262-487f-aabd-c59e6fe7ba41"},"Calls"))),(0,n.kt)("p",null,"If there are more endpoints you'd like Airbyte to support, please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/new/choose"},"create an issue.")),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Replicate Incremental Deletes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Coming soon")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SSL connection"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"There are no performance consideration in the current version."),(0,n.kt)("h2",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Region/environment as listed in the ",(0,n.kt)("inlineCode",{parentName:"li"},"Regions & environments")," section ",(0,n.kt)("a",{parentName:"li",href:"https://api.babelforce.com/#intro"},"here")),(0,n.kt)("li",{parentName:"ul"},"Babelforce access key ID "),(0,n.kt)("li",{parentName:"ul"},"Babelforce access token"),(0,n.kt)("li",{parentName:"ul"},"(Optional) start date from when the import starts in epoch Unix timestamp")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"Generate a API access key ID and token using the ",(0,n.kt)("a",{parentName:"p",href:"https://help.babelforce.com/hc/en-us/articles/360035622132-API-documentation-and-endpoints-an-introduction"},"Babelforce documentation")),(0,n.kt)("h2",{id:"changelog"},"CHANGELOG"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-09"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12700"},"12700")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Introduce Babelforce source")))))}u.isMDXComponent=!0}}]);
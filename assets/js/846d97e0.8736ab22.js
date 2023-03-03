"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[81552],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27090:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="Zenefits",s={unversionedId:"integrations/sources/zenefits",id:"integrations/sources/zenefits",title:"Zenefits",description:"This page contains the setup guide and reference information for the Zenefits source connector.",source:"@site/../docs/integrations/sources/zenefits.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/zenefits",permalink:"/integrations/sources/zenefits",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/zenefits.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Zendesk Talk",permalink:"/integrations/sources/zendesk-talk"},next:{title:"Zenloop",permalink:"/integrations/sources/zenloop"}},l={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set up Zenefits as a source in Airbyte",id:"set-up-zenefits-as-a-source-in-airbyte",level:2},{value:"For Airbyte OSS",id:"for-airbyte-oss",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Data type mapping",id:"data-type-mapping",level:2},{value:"Changelog",id:"changelog",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zenefits"},"Zenefits"),(0,a.kt)("p",null,"This page contains the setup guide and reference information for the Zenefits source connector."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A Zenefits ",(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/v1.0/docs/auth"},"token"))),(0,a.kt)("h2",{id:"set-up-zenefits-as-a-source-in-airbyte"},"Set up Zenefits as a source in Airbyte"),(0,a.kt)("h3",{id:"for-airbyte-oss"},"For Airbyte OSS"),(0,a.kt)("p",null,"To set up Zenefits as a source in Airbyte Cloud:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,a.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,a.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,a.kt)("strong",{parentName:"li"},"Zenefits")," from the ",(0,a.kt)("strong",{parentName:"li"},"Source type")," dropdown."),(0,a.kt)("li",{parentName:"ol"},"For Name, enter a name for the Zenefits connector."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"Token"),", enter the token you have got from ",(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/v1.0/docs/auth"},"Authentication")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The Zenefits source connector supports the following sync modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite"))),(0,a.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,a.kt)("p",null,"You can replicate the following tables using the Zenefits connector:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/people"},"People")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/employment"},"Employments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/vacation-requests"},"Vacation_requests")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/vacation-types"},"Vacation_types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/time-durations"},"Time_durations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/department"},"Departments")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/location"},"Locations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/labor-groups"},"Labor_groups")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/labor-group-types"},"Labor_group_types")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/custom-fields"},"Custom_fields")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developers.zenefits.com/docs/custom-field-values"},"Custom_field_values"))),(0,a.kt)("h2",{id:"data-type-mapping"},"Data type mapping"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Integration Type"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Airbyte Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"string"),(0,a.kt)("td",{parentName:"tr",align:"center"},"string")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"number"),(0,a.kt)("td",{parentName:"tr",align:"center"},"number")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"array"),(0,a.kt)("td",{parentName:"tr",align:"center"},"array")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"object"),(0,a.kt)("td",{parentName:"tr",align:"center"},"object")))),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,a.kt)("td",{parentName:"tr",align:"left"},"2022-08-24"),(0,a.kt)("td",{parentName:"tr",align:"left"},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14809"},"14809")),(0,a.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}u.isMDXComponent=!0}}]);
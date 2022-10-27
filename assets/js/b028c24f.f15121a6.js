"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[2520],{85245:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(83117),a=(r(67294),r(3905));const o={},i="Airbyte Source Connector for Adjust",s={unversionedId:"integrations/sources/adjust",id:"integrations/sources/adjust",title:"Airbyte Source Connector for Adjust",description:"This is a setup guide for the Adjust source connector which ingests data from the reports API.",source:"@site/../docs/integrations/sources/adjust.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/adjust",permalink:"/integrations/sources/adjust",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/adjust.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"ActiveCampaign",permalink:"/integrations/sources/activecampaign"},next:{title:"Airtable",permalink:"/integrations/sources/airtable"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Full Metrics Listing",id:"full-metrics-listing",level:3},{value:"Set up the Adjust source connector",id:"set-up-the-adjust-source-connector",level:2},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Changelog",id:"changelog",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"airbyte-source-connector-for-adjust"},"Airbyte Source Connector for Adjust"),(0,a.kt)("p",null,"This is a setup guide for the Adjust source connector which ingests data from the reports API."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"An API token is required to get hold of reports from the Adjust reporting API. See the ",(0,a.kt)("a",{parentName:"p",href:"https://help.adjust.com/en/article/report-service-api-authentication"},"Adjust API authentication help article")," on how to obtain a key."),(0,a.kt)("p",null,"As Adjust allows you to setup custom events etc that are specific to your apps, only a subset of available metrics are made pre-selectable. To list all metrics that are available, query the filters data endpoint. Information about available metrics are available in the ",(0,a.kt)("a",{parentName:"p",href:"https://help.adjust.com/en/article/datascape-metrics-glossary"},"Datascape metrics glossary"),"."),(0,a.kt)("h3",{id:"full-metrics-listing"},"Full Metrics Listing"),(0,a.kt)("p",null,"Take a look at the ",(0,a.kt)("a",{parentName:"p",href:"https://help.adjust.com/en/article/filters-data-endpoint"},"filters data endpoint documentation")," to see available filters. The example below shows how to obtain the events that are defined for your apps (replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"API_KEY")," with the key obtained in the previous step):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl --header 'Authorization: Bearer API_KEY' 'https://dash.adjust.com/control-center/reports-service/filters_data?required_filters=event_metrics' | jq\n")),(0,a.kt)("h2",{id:"set-up-the-adjust-source-connector"},"Set up the Adjust source connector"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Sources")," and then click ",(0,a.kt)("strong",{parentName:"li"},"+ New source"),"."),(0,a.kt)("li",{parentName:"ol"},"On the Set up the source page, select ",(0,a.kt)("strong",{parentName:"li"},"Adjust")," from the Source type dropdown."),(0,a.kt)("li",{parentName:"ol"},"Enter a name for your new source."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"API Token"),", enter your API key obtained in the previous step."),(0,a.kt)("li",{parentName:"ol"},"For ",(0,a.kt)("strong",{parentName:"li"},"Ingestion Start Date"),", enter a date in YYYY-MM-DD format (UTC timezone is assumed). Data starting from this date will be replicated."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Metrics to Ingest")," field, select the metrics of interest to query."),(0,a.kt)("li",{parentName:"ol"},"Enter any additional, custom metrics, to query in the ",(0,a.kt)("strong",{parentName:"li"},"Additional Metrics")," box. Available metrics can be listed as described in the Prerequisites section. These selected metrics are assumed to be decimal values."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Dimensions")," field, select the dimensions to group metrics by."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,a.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,a.kt)("p",null,"The source connector supports the following ",(0,a.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"},"sync modes"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Full Refresh"),(0,a.kt)("li",{parentName:"ul"},"Incremental")),(0,a.kt)("h2",{id:"changelog"},"Changelog"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Version"),(0,a.kt)("th",{parentName:"tr",align:null},"Date"),(0,a.kt)("th",{parentName:"tr",align:null},"Pull Request"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0.1.0"),(0,a.kt)("td",{parentName:"tr",align:null},"2022-08-26"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16051"},"16051")),(0,a.kt)("td",{parentName:"tr",align:null},"Initial version.")))))}p.isMDXComponent=!0},3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},u),{},{components:r})):n.createElement(h,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);
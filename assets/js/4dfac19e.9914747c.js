"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[86125],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>c});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),s=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=s(a),c=n,u=k["".concat(o,".").concat(c)]||k[c]||d[c]||i;return a?r.createElement(u,l(l({ref:e},m),{},{components:a})):r.createElement(u,l({ref:e},m))}));function c(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},623:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l="Snapchat Marketing",p={unversionedId:"integrations/sources/snapchat-marketing",id:"integrations/sources/snapchat-marketing",title:"Snapchat Marketing",description:"This page guides you through the process of setting up the Snapchat Marketing source connector.",source:"@site/../docs/integrations/sources/snapchat-marketing.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/snapchat-marketing",permalink:"/integrations/sources/snapchat-marketing",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/snapchat-marketing.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Smartsheets",permalink:"/integrations/sources/smartsheets"},next:{title:"Snowflake",permalink:"/integrations/sources/snowflake"}},o={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up Snapchat",id:"step-1-set-up-snapchat",level:3},{value:"Step 2: Set up the source connector in Airbyte",id:"step-2-set-up-the-source-connector-in-airbyte",level:3},{value:"Supported streams and sync modes",id:"supported-streams-and-sync-modes",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s};function d(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"snapchat-marketing"},"Snapchat Marketing"),(0,n.kt)("p",null,"This page guides you through the process of setting up the Snapchat Marketing source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A Snapchat Marketing account with permission to access data from accounts you want to sync")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"client_id"),(0,n.kt)("li",{parentName:"ul"},"client_secret"),(0,n.kt)("li",{parentName:"ul"},"refresh_token"),(0,n.kt)("li",{parentName:"ul"},"start_date")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-snapchat"},"Step 1: Set up Snapchat"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://businesshelp.snapchat.com/s/article/get-started?language=en_US"},"Set up Snapchat Business account"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://businesshelp.snapchat.com/s/article/api-apply?language=en_US"},"Activate Access to the Snapchat Marketing API"),"  "),(0,n.kt)("li",{parentName:"ol"},"Add the OAuth2 app:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Adding the OAuth2 app requires the ",(0,n.kt)("inlineCode",{parentName:"li"},"redirect_url")," parameter.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"If you have the API endpoint that will handle next OAuth process - write it to this parameter."),(0,n.kt)("li",{parentName:"ul"},"If not - just use some valid url. Here's the discussion about it: ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/Snap-Kit/bitmoji-sample/issues/3"},"Snapchat Redirect URL - Clarity in documentation please")))),(0,n.kt)("li",{parentName:"ul"},"save ",(0,n.kt)("strong",{parentName:"li"},"Client ID")," and ",(0,n.kt)("strong",{parentName:"li"},"Client Secret")))),(0,n.kt)("li",{parentName:"ol"},"Get refresh token using OAuth2 authentication workflow:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Open the authorize link in a browser: ",(0,n.kt)("a",{parentName:"li",href:"https://accounts.snapchat.com/login/oauth2/authorize?response_type=code&client_id=%7Bclient_id%7D&redirect_uri=%7Bredirect_uri%7D&scope=snapchat-marketing-api&state=wmKkg0TWgppW8PTBZ20sldUmF7hwvU"},"https://accounts.snapchat.com/login/oauth2/authorize?response","_","type=code&client","_","id={client","_","id}&redirect","_","uri={redirect","_","uri}&scope=snapchat-marketing-api&state=wmKkg0TWgppW8PTBZ20sldUmF7hwvU")),(0,n.kt)("li",{parentName:"ul"},"Login & Authorize via UI"),(0,n.kt)("li",{parentName:"ul"},'Locate "code" query parameter in the redirect'),(0,n.kt)("li",{parentName:"ul"},"Exchange code for access token + refresh token",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'  ```text\n  curl -X POST \\  \n  -d "code={one_time_use_code}" \\  \n  -d "client_id={client_id}" \\  \n  -d "client_secret={client_secret}"  \\  \n  -d "grant_type=authorization_code"  \\  \n  -d "redirect_uri=redirect_uri"  \n  https://accounts.snapchat.com/login/oauth2/access_token\n  ```\n')),"You will receive the API key and refresh token in response. Use this refresh token in the connector specifications.",(0,n.kt)("br",{parentName:"li"}),"The useful link to Authentication process is ",(0,n.kt)("a",{parentName:"li",href:"https://marketingapi.snapchat.com/docs/#authentication"},"here"))))),(0,n.kt)("h3",{id:"step-2-set-up-the-source-connector-in-airbyte"},"Step 2: Set up the source connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Snapchat Marketing")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"lick ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your account"),"."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the Snapchat account"),(0,n.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,n.kt)("li",{parentName:"ol"},"click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to local Airbyte page."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"Snapchat Marketing")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Add ",(0,n.kt)("strong",{parentName:"li"},"Client ID"),", ",(0,n.kt)("strong",{parentName:"li"},"Client Secret"),", ",(0,n.kt)("strong",{parentName:"li"},"Refresh Token")),(0,n.kt)("li",{parentName:"ol"},"Choose required Start date"),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Set up source"),".")),(0,n.kt)("h2",{id:"supported-streams-and-sync-modes"},"Supported streams and sync modes"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Stream"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Incremental"),(0,n.kt)("th",{parentName:"tr",align:null},"Key"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Adaccounts"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Ads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Adsquads"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Campaigns"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Creatives"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Media"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Organizations"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Segments"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'"id"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdaccountsStatsHourly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdaccountsStatsDaily"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdaccountsStatsLifetime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsStatsHourly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsStatsDaily"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsStatsLifetime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsquadsStatsHourly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsquadsStatsDaily"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AdsquadsStatsLifetime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CampaignsStatsHourly"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CampaignsStatsDaily"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity", "start_time"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CampaignsStatsLifetime"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:null},'["id", "granularity"]')))),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Hourly streams can be slowly because they generate a lot of records."),(0,n.kt)("p",null,"Snapchat Marketing API has limitations to 1000 items per page."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.15"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-03-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22869"},"22869")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.14"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22808"},"22808")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Enable default ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.13"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22023"},"22023")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21267"},"21267")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix parse empty error response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20865"},"20865")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Handle 403 permission error")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20537"},"20537")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Run on CDK 0.15.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20498"},"20498")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix output state when no records are read")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17596"},"17596")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Retry 429 and 5xx errors when refreshing access token")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14924"},"14924")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove ",(0,n.kt)("inlineCode",{parentName:"td"},"additionalProperties")," field from specs")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-07-13"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/14577"},"14577")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Added stats streams hourly, daily, lifetime")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8429"},"8429")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update titles and descriptions")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7811"},"7811")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add oauth2.0, fix stream_state")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-29"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/5072"},"5072")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix bug with incorrect stream","_","state value")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4843"},"4843")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial release supporting the Snapchat Marketing API")))))}d.isMDXComponent=!0}}]);
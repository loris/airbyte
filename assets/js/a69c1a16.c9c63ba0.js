"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[58678],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=s(a),u=n,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||i;return a?r.createElement(g,l(l({ref:t},d),{},{components:a})):r.createElement(g,l({ref:t},d))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},69647:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l="Exchange Rates API",p={unversionedId:"integrations/sources/exchange-rates",id:"integrations/sources/exchange-rates",title:"Exchange Rates API",description:"Overview",source:"@site/../docs/integrations/sources/exchange-rates.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/exchange-rates",permalink:"/integrations/sources/exchange-rates",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/exchange-rates.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"EmailOctopus",permalink:"/integrations/sources/emailoctopus"},next:{title:"Facebook Marketing",permalink:"/integrations/sources/facebook-marketing"}},o={},s=[{value:"Overview",id:"overview",level:2},{value:"Output schema",id:"output-schema",level:4},{value:"Data type mapping",id:"data-type-mapping",level:4},{value:"Features",id:"features",level:4},{value:"Getting started",id:"getting-started",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Setup guide",id:"setup-guide",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"exchange-rates-api"},"Exchange Rates API"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The exchange rates integration is a toy integration to demonstrate how Airbyte works with a very simple source."),(0,n.kt)("p",null,"It pulls all its data from ",(0,n.kt)("a",{parentName:"p",href:"https://exchangeratesapi.io"},"https://exchangeratesapi.io")),(0,n.kt)("h4",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,"It contains one stream: ",(0,n.kt)("inlineCode",{parentName:"p"},"exchange_rates")),(0,n.kt)("p",null,"Each record in the stream contains many fields:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The date of the record"),(0,n.kt)("li",{parentName:"ul"},"One field for every supported ",(0,n.kt)("a",{parentName:"li",href:"https://www.ecb.europa.eu/stats/policy_and_exchange_rates/euro_reference_exchange_rates/html/index.en.html"},"currency")," which contain the value of that currency on that date.")),(0,n.kt)("h4",{id:"data-type-mapping"},"Data type mapping"),(0,n.kt)("p",null,"Currencies are ",(0,n.kt)("inlineCode",{parentName:"p"},"number")," and the date is a ",(0,n.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,n.kt)("h4",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental - Append Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No")))),(0,n.kt)("h3",{id:"getting-started"},"Getting started"),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API Access Key")),(0,n.kt)("h3",{id:"setup-guide"},"Setup guide"),(0,n.kt)("p",null,"In order to get an ",(0,n.kt)("inlineCode",{parentName:"p"},"API Access Key")," please go to ",(0,n.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/signup/free"},"this")," page and enter needed info. After registration and login you will see your ",(0,n.kt)("inlineCode",{parentName:"p"},"API Access Key"),", also you may find it ",(0,n.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/dashboard"},"here"),"."),(0,n.kt)("p",null,"If you have ",(0,n.kt)("inlineCode",{parentName:"p"},"free")," subscription plan ","(","you may check it ",(0,n.kt)("a",{parentName:"p",href:"https://manage.exchangeratesapi.io/plan"},"here"),")"," this means that you will have 2 limitations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"1000 API calls per month."),(0,n.kt)("li",{parentName:"ol"},"You won't be able to specify the ",(0,n.kt)("inlineCode",{parentName:"li"},"base")," parameter, meaning that you will be dealing only with default base value which is EUR.")),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23000"},"23000")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-31"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18726"},"18726")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix handling error during check connection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-08-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/15884"},"15884")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Migrated to new API Layer endpoint")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/12230"},"12230")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector to use a ",(0,n.kt)("inlineCode",{parentName:"td"},"spec.yaml"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7936"},"7936")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ignore_weekends boolean option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-11-08"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7499"},"7499")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remove base-python dependencies")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-06-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3973"},"3973")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"AIRBYTE_ENTRYPOINT")," for kubernetes support")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3677"},"3677")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Adding clearer error message when a currency isn't supported. access_key field in spec.json was marked as sensitive")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-05-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/3566"},"3566")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Move from ",(0,n.kt)("inlineCode",{parentName:"td"},"api.ratesapi.io/")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"api.exchangeratesapi.io/"),". Add required field ",(0,n.kt)("inlineCode",{parentName:"td"},"access_key")," to ",(0,n.kt)("inlineCode",{parentName:"td"},"config.json"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-04-19"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/2942"},"2942")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Implement Exchange API using the CDK")))))}m.isMDXComponent=!0}}]);
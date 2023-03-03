"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[83933],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),p=o,y=d["".concat(l,".").concat(p)]||d[p]||h[p]||i;return a?n.createElement(y,r(r({ref:t},u),{},{components:a})):n.createElement(y,r({ref:t},u))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},83531:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const i={},r="Data Loading",s={unversionedId:"archive/faq/data-loading",id:"archive/faq/data-loading",title:"Data Loading",description:"Why don\u2019t I see any data in my destination yet?",source:"@site/../docs/archive/faq/data-loading.md",sourceDirName:"archive/faq",slug:"/archive/faq/data-loading",permalink:"/archive/faq/data-loading",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/archive/faq/data-loading.md",tags:[],version:"current",frontMatter:{}},l={},c=[{value:"<strong>Why don\u2019t I see any data in my destination yet?</strong>",id:"why-dont-i-see-any-data-in-my-destination-yet",level:2},{value:"<strong>Why my final tables are being recreated everytime?</strong>",id:"why-my-final-tables-are-being-recreated-everytime",level:2},{value:"<strong>What happens if a sync fails?</strong>",id:"what-happens-if-a-sync-fails",level:2},{value:"<strong>Can Airbyte support 2-way sync i.e. changes from A go to B and changes from B go to A?</strong>",id:"can-airbyte-support-2-way-sync-ie-changes-from-a-go-to-b-and-changes-from-b-go-to-a",level:2},{value:"<strong>What happens to data in the pipeline if the destination gets disconnected? Could I lose data, or wind up with duplicate data when the pipeline is reconnected?</strong>",id:"what-happens-to-data-in-the-pipeline-if-the-destination-gets-disconnected-could-i-lose-data-or-wind-up-with-duplicate-data-when-the-pipeline-is-reconnected",level:2},{value:"<strong>How frequently can Airbyte sync data?</strong>",id:"how-frequently-can-airbyte-sync-data",level:2},{value:"<strong>Why wouldn\u2019t I choose to load all of my data more frequently?</strong>",id:"why-wouldnt-i-choose-to-load-all-of-my-data-more-frequently",level:2},{value:"<strong>Is there a way to know the estimated time to completion for the first historic sync?</strong>",id:"is-there-a-way-to-know-the-estimated-time-to-completion-for-the-first-historic-sync",level:2},{value:"<strong>Do you support change data capture (CDC) or logical replication for databases?</strong>",id:"do-you-support-change-data-capture-cdc-or-logical-replication-for-databases",level:2},{value:"Using incremental sync, is it possible to add more fields when some new columns are added to a source table, or when a new table is added?",id:"using-incremental-sync-is-it-possible-to-add-more-fields-when-some-new-columns-are-added-to-a-source-table-or-when-a-new-table-is-added",level:2},{value:"There is a limit of how many tables one connection can handle?",id:"there-is-a-limit-of-how-many-tables-one-connection-can-handle",level:2},{value:"Help, Airbyte is hanging/taking a long time to discover my source&#39;s schema!",id:"help-airbyte-is-hangingtaking-a-long-time-to-discover-my-sources-schema",level:2},{value:"<strong>I see you support a lot of connectors \u2013 what about connectors Airbyte doesn\u2019t support yet?</strong>",id:"i-see-you-support-a-lot-of-connectors--what-about-connectors-airbyte-doesnt-support-yet",level:2},{value:"<strong>What kind of notifications do I get?</strong>",id:"what-kind-of-notifications-do-i-get",level:2}],u={toc:c};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-loading"},"Data Loading"),(0,o.kt)("h2",{id:"why-dont-i-see-any-data-in-my-destination-yet"},(0,o.kt)("strong",{parentName:"h2"},"Why don\u2019t I see any data in my destination yet?")),(0,o.kt)("p",null,"It can take a while for Airbyte to load data into your destination. Some sources have restrictive API limits which constrain how much\ndata we can sync in a given time. Large amounts of data in your source can also make the initial sync take longer. You can check your\nsync status in your connection detail page that you can access through the destination detail page or the source one."),(0,o.kt)("h2",{id:"why-my-final-tables-are-being-recreated-everytime"},(0,o.kt)("strong",{parentName:"h2"},"Why my final tables are being recreated everytime?")),(0,o.kt)("p",null,"Airbyte ingests data into raw tables and applies the process of normalization if you selected it in the connection page.\nThe normalization runs a full refresh each sync and for some destinations like Snowflake, Redshift, Bigquery this may incur more\nresource consumption and more costs. You need to pay attention to the frequency that you're retrieving your data to avoid issues.\nFor example, if you create a connection to sync every 5 minutes with incremental sync on, it will only retrieve new records into the raw tables but will apply normalization\nto ",(0,o.kt)("em",{parentName:"p"},"all")," the data in every sync! If you have tons of data, this may not be the right sync frequency for you."),(0,o.kt)("p",null,"There is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4286"},"Github issue")," to implement normalization using incremental, which will reduce\ncosts and resources in your destination."),(0,o.kt)("h2",{id:"what-happens-if-a-sync-fails"},(0,o.kt)("strong",{parentName:"h2"},"What happens if a sync fails?")),(0,o.kt)("p",null,"You won't lose data when a sync fails, however, no data will be added or updated in your destination."),(0,o.kt)("p",null,"Airbyte will automatically attempt to replicate data 3 times. You can see and export the logs for those attempts in the connection\ndetail page. You can access this page through the Source or Destination detail page."),(0,o.kt)("p",null,"You can configure a Slack webhook to warn you when a sync fails."),(0,o.kt)("p",null,"In the future you will be able to configure other notification method (email, Sentry) and an option to create a\nGitHub issue with the logs. We\u2019re still working on it, and the purpose would be to help the community and the Airbyte team to fix the\nissue as soon as possible, especially if it is a connector issue."),(0,o.kt)("p",null,"Until Airbyte has this system in place, here is what you can do:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"File a GitHub issue: go ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=type%2Fbug&template=bug-report.md&title="},"here"),"\nand file an issue with the detailed logs copied in the issue\u2019s description. The team will be notified about your issue and will update\nit for any progress or comment on it.  "),(0,o.kt)("li",{parentName:"ul"},"Fix the issue yourself: Airbyte is open source so you don\u2019t need to wait for anybody to fix your issue if it is important to you.\nTo do so, just fork the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"GitHub project")," and fix the piece of code that need fixing. If you\u2019re okay\nwith contributing your fix to the community, you can submit a pull request. We will review it ASAP."),(0,o.kt)("li",{parentName:"ul"},"Ask on Slack: don\u2019t hesitate to ping the team on ",(0,o.kt)("a",{parentName:"li",href:"https://slack.airbyte.io"},"Slack"),".")),(0,o.kt)("p",null,"Once all this is done, Airbyte resumes your sync from where it left off."),(0,o.kt)("p",null,"We truly appreciate any contribution you make to help the community. Airbyte will become the open-source standard only if everybody participates."),(0,o.kt)("h2",{id:"can-airbyte-support-2-way-sync-ie-changes-from-a-go-to-b-and-changes-from-b-go-to-a"},(0,o.kt)("strong",{parentName:"h2"},"Can Airbyte support 2-way sync i.e. changes from A go to B and changes from B go to A?")),(0,o.kt)("p",null,"Airbyte actually does not support this right now. There are some details around how we handle schema and tables names that isn't going to\nwork for you in the current iteration.\nIf you attempt to do a circular dependency between source and destination, you'll end up with the following\nA.public.table_foo writes to B.public.public_table_foo to A.public.public_public_table_foo. You won't be writing into your original table,\nwhich I think is your intention."),(0,o.kt)("h2",{id:"what-happens-to-data-in-the-pipeline-if-the-destination-gets-disconnected-could-i-lose-data-or-wind-up-with-duplicate-data-when-the-pipeline-is-reconnected"},(0,o.kt)("strong",{parentName:"h2"},"What happens to data in the pipeline if the destination gets disconnected? Could I lose data, or wind up with duplicate data when the pipeline is reconnected?")),(0,o.kt)("p",null,"Airbyte is architected to prevent data loss or duplication. Airbyte will display a failure for the sync, and re-attempt it at the next syncing,\naccording to the frequency you set."),(0,o.kt)("h2",{id:"how-frequently-can-airbyte-sync-data"},(0,o.kt)("strong",{parentName:"h2"},"How frequently can Airbyte sync data?")),(0,o.kt)("p",null,"You can adjust the load time to run as frequent as every hour or as infrequent as once a year using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/managing-airbyte-cloud/edit-stream-configuration"},"Cron expressions"),". "),(0,o.kt)("h2",{id:"why-wouldnt-i-choose-to-load-all-of-my-data-more-frequently"},(0,o.kt)("strong",{parentName:"h2"},"Why wouldn\u2019t I choose to load all of my data more frequently?")),(0,o.kt)("p",null,"While frequent data loads will give you more up-to-date data, there are a few reasons you wouldn\u2019t want to load your too frequently, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Higher API usage may cause you to hit a limit that could impact other systems that rely on that API."),(0,o.kt)("li",{parentName:"ul"},"Higher cost of loading data into your warehouse."),(0,o.kt)("li",{parentName:"ul"},"More frequent delays, resulting in increased delay notification emails. For instance, if the data source generally takes several hours to\nupdate but you wanted five-minute increments, you may receive a delay notification every sync.")),(0,o.kt)("p",null,"Generally is recommended setting the incremental loads to every hour to help limit API calls."),(0,o.kt)("h2",{id:"is-there-a-way-to-know-the-estimated-time-to-completion-for-the-first-historic-sync"},(0,o.kt)("strong",{parentName:"h2"},"Is there a way to know the estimated time to completion for the first historic sync?")),(0,o.kt)("p",null,"Unfortunately not yet."),(0,o.kt)("h2",{id:"do-you-support-change-data-capture-cdc-or-logical-replication-for-databases"},(0,o.kt)("strong",{parentName:"h2"},"Do you support change data capture ","(","CDC",")"," or logical replication for databases?")),(0,o.kt)("p",null,"Airbyte currently supports ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/cdc"},"CDC for Postgres and Mysql"),". Airbyte is adding support for a few other\ndatabases you can check in the roadmap."),(0,o.kt)("h2",{id:"using-incremental-sync-is-it-possible-to-add-more-fields-when-some-new-columns-are-added-to-a-source-table-or-when-a-new-table-is-added"},"Using incremental sync, is it possible to add more fields when some new columns are added to a source table, or when a new table is added?"),(0,o.kt)("p",null,"For the moment, incremental sync doesn't support schema changes, so you would need to perform a full refresh whenever that happens.\nHere\u2019s a related ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/1601"},"Github issue"),"."),(0,o.kt)("h2",{id:"there-is-a-limit-of-how-many-tables-one-connection-can-handle"},"There is a limit of how many tables one connection can handle?"),(0,o.kt)("p",null,"Yes, for more than 6000 thousand tables could be a problem to load the information on UI."),(0,o.kt)("p",null,"There are two Github issues about this limitation: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3942"},"Issue #3942"),"\nand ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/3943"},"Issue #3943"),"."),(0,o.kt)("h2",{id:"help-airbyte-is-hangingtaking-a-long-time-to-discover-my-sources-schema"},"Help, Airbyte is hanging/taking a long time to discover my source's schema!"),(0,o.kt)("p",null,"This usually happens for database sources that contain a lot of tables. This should resolve itself in half an hour or so."),(0,o.kt)("p",null,"If the source contains more than 6k tables, see the ",(0,o.kt)("a",{parentName:"p",href:"#there-is-a-limit-of-how-many-tables-one-connection-can-handle"},"above question"),"."),(0,o.kt)("p",null,"There is a known issue with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4944"},"Oracle databases"),"."),(0,o.kt)("h2",{id:"i-see-you-support-a-lot-of-connectors--what-about-connectors-airbyte-doesnt-support-yet"},(0,o.kt)("strong",{parentName:"h2"},"I see you support a lot of connectors \u2013 what about connectors Airbyte doesn\u2019t support yet?")),(0,o.kt)("p",null,"You can either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Submit a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte/issues/new?assignees=&labels=area%2Fintegration%2C+new-integration&template=new-integration-request.md&title="},"connector request")," on our Github project, and be notified once we or the community build a connector for it. "),(0,o.kt)("li",{parentName:"ul"},"Build a connector yourself by forking our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},"GitHub project")," and submitting a pull request. Here\nare the ",(0,o.kt)("a",{parentName:"li",href:"/contributing-to-airbyte/"},"instructions how to build a connector"),"."),(0,o.kt)("li",{parentName:"ul"},"Ask on Slack: don\u2019t hesitate to ping the team on ",(0,o.kt)("a",{parentName:"li",href:"https://slack.airbyte.io"},"Slack"),".")),(0,o.kt)("h2",{id:"what-kind-of-notifications-do-i-get"},(0,o.kt)("strong",{parentName:"h2"},"What kind of notifications do I get?")),(0,o.kt)("p",null,"For the moment, the UI will only display one kind of notification: when a sync fails, Airbyte will display the failure at the source/destination\nlevel in the list of sources/destinations, and in the connection detail page along with the logs."),(0,o.kt)("p",null,"However, there are other types of notifications:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"When a connector that you use is no longer up to date"),(0,o.kt)("li",{parentName:"ul"},"When your connections fails"),(0,o.kt)("li",{parentName:"ul"},"When core isn't up to date")))}h.isMDXComponent=!0}}]);
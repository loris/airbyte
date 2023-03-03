"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[79028],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var r=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,o=function(t,e){if(null==t)return{};var a,r,o={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var l=r.createContext({}),p=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(a),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||n;return a?r.createElement(h,i(i({ref:e},c),{},{components:a})):r.createElement(h,i({ref:e},c))}));function m(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=a.length,i=new Array(n);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,i[1]=s;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5272:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const n={},i="Transformations with Airbyte (Part 3/3)",s={unversionedId:"operator-guides/transformation-and-normalization/transformations-with-airbyte",id:"operator-guides/transformation-and-normalization/transformations-with-airbyte",title:"Transformations with Airbyte (Part 3/3)",description:"Overview",source:"@site/../docs/operator-guides/transformation-and-normalization/transformations-with-airbyte.md",sourceDirName:"operator-guides/transformation-and-normalization",slug:"/operator-guides/transformation-and-normalization/transformations-with-airbyte",permalink:"/operator-guides/transformation-and-normalization/transformations-with-airbyte",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/operator-guides/transformation-and-normalization/transformations-with-airbyte.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Transformations with dbt (Part 2/3)",permalink:"/operator-guides/transformation-and-normalization/transformations-with-dbt"},next:{title:"Configuring Airbyte",permalink:"/operator-guides/configuring-airbyte"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Transformations with Airbyte",id:"transformations-with-airbyte",level:2},{value:"Public Git repository",id:"public-git-repository",level:2},{value:"Private Git repository",id:"private-git-repository",level:2},{value:"Example of a private git repo used as transformations",id:"example-of-a-private-git-repo-used-as-transformations",level:3},{value:"How-to use custom dbt tips",id:"how-to-use-custom-dbt-tips",level:2},{value:"Allows &quot;chained&quot; dbt transformations",id:"allows-chained-dbt-transformations",level:3},{value:"Refresh models partially",id:"refresh-models-partially",level:3},{value:"Using a custom run with variables",id:"using-a-custom-run-with-variables",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"transformations-with-airbyte-part-33"},"Transformations with Airbyte (Part 3/3)"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"This tutorial will describe how to push a custom dbt transformation project back to Airbyte to use during syncs."),(0,o.kt)("p",null,"This guide is the last part of the tutorial series on transformations, following ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-sql"},"Transformations with SQL")," and ",(0,o.kt)("a",{parentName:"p",href:"/operator-guides/transformation-and-normalization/transformations-with-dbt"},"connecting EL with T using dbt"),"."),(0,o.kt)("p",null,"(","Example outputs are updated with Airbyte version 0.23.0-alpha from May 2021",")"),(0,o.kt)("h2",{id:"transformations-with-airbyte"},"Transformations with Airbyte"),(0,o.kt)("p",null,"After replication of data from a source connector ","(","Extract",")"," to a destination connector ","(","Load",")",", multiple optional transformation steps can now be applied as part of an Airbyte Sync. Possible workflows are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Basic normalization transformations as automatically generated by Airbyte dbt code generator."),(0,o.kt)("li",{parentName:"ol"},"Customized normalization transformations as edited by the user ","(","the default generated normalization one should therefore be disabled",")"),(0,o.kt)("li",{parentName:"ol"},"Customized business transformations as specified by the user.")),(0,o.kt)("h2",{id:"public-git-repository"},"Public Git repository"),(0,o.kt)("p",null,"In the connection settings page, I can add new Transformations steps to apply after ",(0,o.kt)("a",{parentName:"p",href:"/understanding-airbyte/basic-normalization"},"normalization"),". For example, I want to run my custom dbt project jaffle_shop, whenever my sync is done replicating and normalizing my data."),(0,o.kt)("p",null,"You can find the jaffle shop test repository by clicking ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/dbt-labs/jaffle_shop"},"here"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(60734).Z,width:"1114",height:"452"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(12576).Z,width:"1128",height:"357"})),(0,o.kt)("h2",{id:"private-git-repository"},"Private Git repository"),(0,o.kt)("p",null,"Now, let's connect my mono-repo Business Intelligence project stored in a private git repository to update the related tables and dashboards when my Airbyte syncs complete."),(0,o.kt)("p",null,"Note that if you need to connect to a private git repository, the recommended way to do so is to generate a ",(0,o.kt)("inlineCode",{parentName:"p"},"Personal Access Token")," that can be used instead of a password. Then, you'll be able to include the credentials in the git repository url:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub - Personal Access Tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"Gitlab - Personal Access Tokens")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/devops/organizations/accounts/use-personal-access-tokens-to-authenticate"},"Azure DevOps - Personal Access Tokens"))),(0,o.kt)("p",null,"And then use it for cloning:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"git clone https://username:token@github.com/user/repo\n")),(0,o.kt)("p",null,"Where ",(0,o.kt)("inlineCode",{parentName:"p"},"https://username:token@github.com/user/repo")," is the git repository url."),(0,o.kt)("h3",{id:"example-of-a-private-git-repo-used-as-transformations"},"Example of a private git repo used as transformations"),(0,o.kt)("p",null,"As an example, I go through my GitHub account to generate a Personal Access Token to use in Airbyte with permissions to clone my private repositories:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(13930).Z,width:"1442",height:"755"})),(0,o.kt)("p",null,"This provides me with a token to use:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(79619).Z,width:"1459",height:"356"})),(0,o.kt)("p",null,"In Airbyte, I can use the git url as: ",(0,o.kt)("inlineCode",{parentName:"p"},"https://airbyteuser:ghp_***********ShLrG2yXGYF@github.com/airbyteuser/private-datawarehouse.git")),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(34807).Z,width:"1112",height:"451"})),(0,o.kt)("h2",{id:"how-to-use-custom-dbt-tips"},"How-to use custom dbt tips"),(0,o.kt)("h3",{id:"allows-chained-dbt-transformations"},'Allows "chained" dbt transformations'),(0,o.kt)("p",null,"Since every transformation leave in his own Docker container, at this moment I can't rely on packages installed using ",(0,o.kt)("inlineCode",{parentName:"p"},"dbt deps")," for the next transformations.\nAccording to the dbt documentation, I can configure the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.getdbt.com/reference/project-configs/packages-install-path"},"packages folder")," outside of the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# dbt_project.yml\npackages-install-path: '../dbt_packages'\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If I want to chain ",(0,o.kt)("strong",{parentName:"p"},"dbt deps")," and ",(0,o.kt)("strong",{parentName:"p"},"dbt run"),", I may use ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.getdbt.com/reference/commands/build"},"dbt build"))," instead, which is not equivalent to the two previous commands, but will remove the need to alter the configuration of dbt.")),(0,o.kt)("h3",{id:"refresh-models-partially"},"Refresh models partially"),(0,o.kt)("p",null,"Since I am using a mono-repo from my organization, other team members or departments may also contribute their dbt models to this centralized location. This will give us many dbt models and sources to build our complete data warehouse..."),(0,o.kt)("p",null,"The whole warehouse is scheduled for full refresh on a different orchestration tool, or as part of the git repository CI. However, here, I want to partially refresh some small relevant tables when attaching this operation to a specific Airbyte sync, in this case, the Covid dataset."),(0,o.kt)("p",null,'Therefore, I can restrict the execution of models to a particular tag or folder by specifying in the dbt cli arguments, in this case whatever is related to "covid',"_",'api":'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"run --models tag:covid_api opendata.base.*\n")),(0,o.kt)("p",null,"Now, when replications syncs are triggered by Airbyte, my custom transformations from my private git repository are also run at the end!"),(0,o.kt)("h3",{id:"using-a-custom-run-with-variables"},"Using a custom run with variables"),(0,o.kt)("p",null,"If you want to use a custom run and pass variables you need to use the follow syntax:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'run --vars \'{"table_name":"sample","schema_name":"other_value"}\'\n')),(0,o.kt)("p",null,"This string must have no space. There is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues/4348"},"Github issue")," to improve this. If you want to contribute to Airbyte, this is a good opportunity!"))}u.isMDXComponent=!0},79619:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/copy-personal-token-241b9ab1b2f7dc853f08117d37daf76f.png"},60734:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/custom-dbt-transformations-seed-7462c6c15e9ef604db7581bba92cee10.png"},12576:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/custom-dbt-transformations-5490c1edd287961acd47375957288af7.png"},13930:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/new-personal-token-5cb2ca495919d1aee221dff31594ca72.png"},34807:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/setup-custom-transformation-d684dd61ea0757fcf3fb2e8dd72b74fb.png"}}]);
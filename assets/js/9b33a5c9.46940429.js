"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[12619],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>h});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),y=c(o),h=i,m=y["".concat(l,".").concat(h)]||y[h]||d[h]||r;return o?n.createElement(m,a(a({ref:t},u),{},{components:o})):n.createElement(m,a({ref:t},u))}));function h(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=y;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<r;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}y.displayName="MDXCreateElement"},743:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=o(87462),i=(o(67294),o(3905));const r={},a="License FAQ",s={unversionedId:"project-overview/licenses/license-faq",id:"project-overview/licenses/license-faq",title:"License FAQ",description:"Airbyte Licensing Overview",source:"@site/../docs/project-overview/licenses/license-faq.md",sourceDirName:"project-overview/licenses",slug:"/project-overview/licenses/license-faq",permalink:"/project-overview/licenses/license-faq",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/project-overview/licenses/license-faq.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Licenses",permalink:"/project-overview/licenses/"},next:{title:"ELv2",permalink:"/project-overview/licenses/elv2-license"}},l={},c=[{value:"Airbyte Licensing Overview",id:"airbyte-licensing-overview",level:2},{value:"About Elastic License 2.0 (ELv2)",id:"about-elastic-license-20-elv2",level:2},{value:"FAQ",id:"faq",level:2},{value:"What limitations does ELv2 impose on my use of Airbyte?",id:"what-limitations-does-elv2-impose-on-my-use-of-airbyte",level:3},{value:"Why did Airbyte adopt ELv2?",id:"why-did-airbyte-adopt-elv2",level:3},{value:"Will Airbyte connectors continue to be open source?",id:"will-airbyte-connectors-continue-to-be-open-source",level:3},{value:"How do I continue to contribute to Airbyte under ELv2?",id:"how-do-i-continue-to-contribute-to-airbyte-under-elv2",level:3},{value:"When will ELv2 be effective?",id:"when-will-elv2-be-effective",level:3},{value:"What is the \u201cmanaged service\u201d use case that is not allowed under ELv2?",id:"what-is-the-managed-service-use-case-that-is-not-allowed-under-elv2",level:3},{value:"My company has a policy against using code that restricts commercial use \u2013 can I still use Airbyte under ELv2?",id:"my-company-has-a-policy-against-using-code-that-restricts-commercial-use--can-i-still-use-airbyte-under-elv2",level:3},{value:"As a Data Agency, I currently use Airbyte to fulfill my customer needs. How does ELv2 affect me?",id:"as-a-data-agency-i-currently-use-airbyte-to-fulfill-my-customer-needs-how-does-elv2-affect-me",level:3},{value:"I started to use Airbyte to ingest my customer\u2019s data. What should I do?",id:"i-started-to-use-airbyte-to-ingest-my-customers-data-what-should-i-do",level:3},{value:"Can I customize ELv2 software?",id:"can-i-customize-elv2-software",level:3},{value:"Why didn\u2019t you use a closed-source license for Airbyte Core?",id:"why-didnt-you-use-a-closed-source-license-for-airbyte-core",level:3},{value:"Is there any revenue sharing for those who create Airbyte connectors?",id:"is-there-any-revenue-sharing-for-those-who-create-airbyte-connectors",level:3}],u={toc:c};function d(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"license-faq"},"License FAQ"),(0,i.kt)("h2",{id:"airbyte-licensing-overview"},"Airbyte Licensing Overview"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airbyte Connectors")," are open sourced and available under the MIT License."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airbyte Protocol")," is open sourced and available under the MIT License."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airbyte CDK")," (Connector Development Kit) is open sourced and available under the MIT License."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airbyte Core")," is licensed under the Elastic License 2.0 (ELv2)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Airbyte Cloud & Airbyte Enterprise")," are both closed source and require a commercial license from Airbyte.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Diagram of license structure",src:o(30222).Z,width:"1260",height:"798"})),(0,i.kt)("h2",{id:"about-elastic-license-20-elv2"},"About Elastic License 2.0 (ELv2)"),(0,i.kt)("p",null,"ELv2 is a simple, non-copyleft license, allowing for the right to \u201cuse, copy, distribute, make available, and prepare derivative works of the software\u201d. Anyone can use Airbyte, free of charge. You can run the software at scale on your infrastructure. There are only three high-level limitations. You cannot:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide the products to others as a managed service (",(0,i.kt)("a",{parentName:"li",href:"#what-is-the-managed-service-use-case-that-is-not-allowed-under-elv2"},"read more"),");"),(0,i.kt)("li",{parentName:"ol"},"Circumvent the license key functionality or remove/obscure features protected by license keys; or"),(0,i.kt)("li",{parentName:"ol"},"Remove or obscure any licensing, copyright, or other notices.")),(0,i.kt)("p",null,"In case you want to work with Airbyte without these limitations, we offer alternative licenses. These licenses include maintenance, support, and customary commercial terms. If you need a different license, please get in touch with us at: ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@airbyte.io"},"contact@airbyte.io"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/project-overview/licenses/elv2-license"},"View License")),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"what-limitations-does-elv2-impose-on-my-use-of-airbyte"},"What limitations does ELv2 impose on my use of Airbyte?"),(0,i.kt)("p",null,"If you are an Airbyte Cloud customer, nothing changes for you."),(0,i.kt)("p",null,"For open-source users, everyone can continue to use Airbyte as they are doing today: no limitations on volume, number of users, number of connections\u2026"),(0,i.kt)("p",null,"There are only a few high-level limitations. You cannot:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provide the products to others as a managed service. For example, you cannot sell a cloud service that provides users with direct access to Airbyte. You can sell access to applications built and run using Airbyte (",(0,i.kt)("a",{parentName:"li",href:"#what-is-the-managed-service-use-case-that-is-not-allowed-under-elv2"},"read more"),")."),(0,i.kt)("li",{parentName:"ol"},"Circumvent the license key functionality or remove/obscure features protected by license keys. For example, our code may contain watermarks or keys to unlock proprietary functionality. Those elements of our code will be marked in our source code. You can\u2019t remove or change them.")),(0,i.kt)("h3",{id:"why-did-airbyte-adopt-elv2"},"Why did Airbyte adopt ELv2?"),(0,i.kt)("p",null,"We are releasing Airbyte Cloud, a managed version of Airbyte that will offer alternatives to how our users operate Airbyte, including additional features and new execution models. We want to find a great way to execute our mission to commoditize data integration with open source and our ambition to create a sustainable business."),(0,i.kt)("p",null,"ELv2 gives us the best of both worlds. "),(0,i.kt)("p",null,"On one hand, our users can continue to use Airbyte freely, and on the other hand, we can safely create a sustainable business and continue to invest in our community, project and product. We don\u2019t have to worry about other large companies taking the product to monetize it for themselves, thus hurting our community."),(0,i.kt)("h3",{id:"will-airbyte-connectors-continue-to-be-open-source"},"Will Airbyte connectors continue to be open source?"),(0,i.kt)("p",null,"Our own connectors remain open-source, and our contributors can also develop their own connectors and continue to choose whichever license they prefer. This is our way to accomplish Airbyte\u2019s vision of commoditizing data integration: access to data shouldn\u2019t be behind a paywall. Also, we want Airbyte\u2019s licensing to work well with applications that are integrated using connectors."),(0,i.kt)("p",null,"We are continuously investing in Airbyte's data protocol and all the tooling around it. The Connector Development Kit (CDK), which helps our community and our team build and maintain connectors at scale, is a cornerstone of our commoditization strategy and also remains open-source."),(0,i.kt)("h3",{id:"how-do-i-continue-to-contribute-to-airbyte-under-elv2"},"How do I continue to contribute to Airbyte under ELv2?"),(0,i.kt)("p",null,"Airbyte\u2019s projects are available here. Anyone can contribute to any of these projects (including those licensed with ELv2). We are introducing a Contributor License Agreement that you will have to sign with your first contribution."),(0,i.kt)("h3",{id:"when-will-elv2-be-effective"},"When will ELv2 be effective?"),(0,i.kt)("p",null,"ELv2 will apply from the following Airbyte core version as of September 27, 2021: version 0.30.0."),(0,i.kt)("h3",{id:"what-is-the-managed-service-use-case-that-is-not-allowed-under-elv2"},"What is the \u201cmanaged service\u201d use case that is not allowed under ELv2?"),(0,i.kt)("p",null,"We chose ELv2 because it is very permissive with what you can do with the software. "),(0,i.kt)("p",null,"You can basically build ANY product on top of Airbyte as long as you don\u2019t:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Host Airbyte yourself and sell it as an ELT/ETL tool, or a replacement for the Airbyte solution."),(0,i.kt)("li",{parentName:"ul"},"Sell a product that directly exposes Airbyte\u2019s UI or API.")),(0,i.kt)("p",null,"Here is a non-exhaustive list of what you can do (without providing your customers direct access to Airbyte functionality):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"I am creating an analytics platform and I want to use Airbyte to bring data in on behalf of my customers."),(0,i.kt)("li",{parentName:"ul"},"I am building my internal data stack and I want my team to be able to interact with Airbyte to configure the pipelines through the UI or the API."),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h3",{id:"my-company-has-a-policy-against-using-code-that-restricts-commercial-use--can-i-still-use-airbyte-under-elv2"},"My company has a policy against using code that restricts commercial use \u2013 can I still use Airbyte under ELv2?"),(0,i.kt)("p",null,"You can use software under ELv2 for your commercial business, you simply cannot offer it as a managed service. "),(0,i.kt)("h3",{id:"as-a-data-agency-i-currently-use-airbyte-to-fulfill-my-customer-needs-how-does-elv2-affect-me"},"As a Data Agency, I currently use Airbyte to fulfill my customer needs. How does ELv2 affect me?"),(0,i.kt)("p",null,"You can continue to use Airbyte, as long as you don\u2019t offer it as a managed service."),(0,i.kt)("h3",{id:"i-started-to-use-airbyte-to-ingest-my-customers-data-what-should-i-do"},"I started to use Airbyte to ingest my customer\u2019s data. What should I do?"),(0,i.kt)("p",null,"You can continue to use Airbyte, as long as you don\u2019t offer it as a managed service."),(0,i.kt)("h3",{id:"can-i-customize-elv2-software"},"Can I customize ELv2 software?"),(0,i.kt)("p",null,"Yes, you can customize ELv2 software. ELv2 is similar in this sense to permissive open-source licenses. You can modify the software, integrate the variant into your application, and operate the modified application, as long as you don\u2019t go against any of the limitations."),(0,i.kt)("h3",{id:"why-didnt-you-use-a-closed-source-license-for-airbyte-core"},"Why didn\u2019t you use a closed-source license for Airbyte Core?"),(0,i.kt)("p",null,"We want to provide developers with free access to our Airbyte Core source code \u2014 including rights to modify it. Since this wouldn\u2019t be possible with a closed-source license, we decided to use the more permissive ELv2."),(0,i.kt)("h3",{id:"is-there-any-revenue-sharing-for-those-who-create-airbyte-connectors"},"Is there any revenue sharing for those who create Airbyte connectors?"),(0,i.kt)("p",null,"We will be introducing a new participative model in the next few months. There are still a lot of details to figure out, but the general idea is that maintainers of connectors would have the option to obtain a share of revenue when the connectors are being used in the paid version of Airbyte. In exchange, maintainers would be responsible for SLAs, new features, and bug fixes for the said connector."))}d.isMDXComponent=!0},30222:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/license_faq_diagram-837b8dd942c08db856e20deb91845d1c.png"}}]);
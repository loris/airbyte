"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[949],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var m=r.createContext({}),o=function(t){var e=r.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},d=function(t){var e=o(t.components);return r.createElement(m.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,m=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),c=o(a),u=n,k=c["".concat(m,".").concat(u)]||c[u]||s[u]||i;return a?r.createElement(k,l(l({ref:e},d),{},{components:a})):r.createElement(k,l({ref:e},d))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=c;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p.mdxType="string"==typeof t?t:n,l[1]=p;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},890:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={},l="Faker",p={unversionedId:"integrations/sources/faker",id:"integrations/sources/faker",title:"Faker",description:"Sync overview",source:"@site/../docs/integrations/sources/faker.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/faker",permalink:"/integrations/sources/faker",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/faker.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Facebook Pages",permalink:"/integrations/sources/facebook-pages"},next:{title:"Fastbill",permalink:"/integrations/sources/fastbill"}},m={},o=[{value:"Sync overview",id:"sync-overview",level:2},{value:"Output schema",id:"output-schema",level:3},{value:"Features",id:"features",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Changelog",id:"changelog",level:2}],d={toc:o};function s(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"faker"},"Faker"),(0,n.kt)("h2",{id:"sync-overview"},"Sync overview"),(0,n.kt)("p",null,"The Sample Data (Faker) source generates sample data using the python ",(0,n.kt)("a",{parentName:"p",href:"https://mimesis.name/en/master/"},(0,n.kt)("inlineCode",{parentName:"a"},"mimesis"))," package."),(0,n.kt)("h3",{id:"output-schema"},"Output schema"),(0,n.kt)("p",null,'This source will generate an "e-commerce-like" dataset with users, products, and purchases. Here\'s what is produced at a Postgres destination connected to this source:'),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-sql"},'CREATE TABLE "public"."users" (\n    "id" float8,\n    "age" int8,\n    "name" text,\n    "email" text,\n    "title" text,\n    "gender" text,\n    "height" text,\n    "weight" int8,\n    "language" text,\n    "telephone" text,\n    "blood_type" text,\n    "created_at" timestamptz,\n    "occupation" text,\n    "updated_at" timestamptz,\n    "nationality" text,\n    "academic_degree" text,\n    -- "_airbyte_ab_id" varchar,\n    -- "_airbyte_emitted_at" timestamptz,\n    -- "_airbyte_normalized_at" timestamptz,\n    -- "_airbyte_dev_users_hashid" text,\n    -- "_airbyte_unique_key" text\n);\n\nCREATE TABLE "public"."products" (\n    "id" float8,\n    "make" text,\n    "year" float8,\n    "model" text,\n    "price" float8,\n    "created_at" timestamptz,\n    -- "_airbyte_ab_id" varchar,\n    -- "_airbyte_emitted_at" timestamptz,\n    -- "_airbyte_normalized_at" timestamptz,\n    -- "_airbyte_dev_products_hashid" text,\n    -- "_airbyte_unique_key" text\n);\n\nCREATE TABLE "public"."purchases" (\n    "id" float8,\n    "user_id" float8,\n    "product_id" float8,\n    "returned_at" timestamptz,\n    "purchased_at" timestamptz,\n    "added_to_cart_at" timestamptz,\n    -- "_airbyte_ab_id" varchar,\n    -- "_airbyte_emitted_at" timestamptz,\n    -- "_airbyte_normalized_at" timestamptz,\n    -- "_airbyte_dev_purchases_hashid" text,\n    -- "_airbyte_unique_key" text\n);\n\n')),(0,n.kt)("h3",{id:"features"},"Features"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Feature"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported?","(","Yes/No",")"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Notes"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Full Refresh Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Incremental Sync"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,n.kt)("td",{parentName:"tr",align:"left"})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Namespaces"),(0,n.kt)("td",{parentName:"tr",align:"left"},"No"),(0,n.kt)("td",{parentName:"tr",align:"left"})))),(0,n.kt)("p",null,"Of note, if you choose ",(0,n.kt)("inlineCode",{parentName:"p"},"Incremental Sync"),", state will be maintained between syncs, and once you hit ",(0,n.kt)("inlineCode",{parentName:"p"},"count")," records, no new records will be added."),(0,n.kt)("p",null,"You can choose a specific ",(0,n.kt)("inlineCode",{parentName:"p"},"seed")," (integer) as an option for this connector which will guarantee that the same fake records are generated each time. Otherwise, random data will be created on each subsequent sync."),(0,n.kt)("h3",{id:"requirements"},"Requirements"),(0,n.kt)("p",null,"None!"),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23259"},"23259")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bump to test publication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-02-20"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/23259"},"23259")),(0,n.kt)("td",{parentName:"tr",align:"left"},"bump to test publication")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-01-30"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22117"},"22117")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"source-faker")," goes beta")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"2.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20492"},"20492")," and ",(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20741"},"20741")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Decouple stream states for better parallelism")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-11-28"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19490"},"19490")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Faker uses the CDK; rename streams to be lower-case (breaking), add determinism to random purchases, and rename")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19197"},"19197")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emit ",(0,n.kt)("inlineCode",{parentName:"td"},"AirbyteEstimateTraceMessage"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.2.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/18021"},"18021")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Move to mimesis for speed!")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17889"},"17889")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bump to test publish command (2)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-10-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/17848"},"17848")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bump to test publish command")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-09-07"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/16418"},"16418")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Log start of each stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-10"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13695"},"13695")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Emit timestamps in the proper ISO format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13298"},"13298")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Test publication flow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13248"},"13248")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add options for records_per_sync and page_size")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13293"},"13248")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Test publication flow")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-26"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13235"},"13235")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Publish for AMD and ARM (M1 Macs) & remove User.birthdate")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-04-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11738"},"11738")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The Faker Source is created")))))}s.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[34366],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=o,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var a=n(87462),o=(n(67294),n(3905));const r={},i="Developing Locally",l={unversionedId:"contributing-to-airbyte/developing-locally",id:"contributing-to-airbyte/developing-locally",title:"Developing Locally",description:"The following technologies are required to build Airbyte locally.",source:"@site/../docs/contributing-to-airbyte/developing-locally.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/developing-locally",permalink:"/contributing-to-airbyte/developing-locally",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/developing-locally.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Maintainer Code of Conduct",permalink:"/contributing-to-airbyte/maintainer-code-of-conduct"},next:{title:"Developing on Docker",permalink:"/contributing-to-airbyte/developing-on-docker"}},p={},s=[{value:"Build with <code>gradle</code>",id:"build-with-gradle",level:2},{value:"Run in <code>dev</code> mode with <code>docker-compose</code>",id:"run-in-dev-mode-with-docker-compose",level:2},{value:"Add a connector under development to Airbyte",id:"add-a-connector-under-development-to-airbyte",level:2},{value:"Run platform acceptance tests",id:"run-platform-acceptance-tests",level:2},{value:"Run formatting automation/tests",id:"run-formatting-automationtests",level:2},{value:"Platform",id:"platform",level:3},{value:"Connector",id:"connector",level:3},{value:"Connector Infrastructure",id:"connector-infrastructure",level:3},{value:"Develop on <code>airbyte-webapp</code>",id:"develop-on-airbyte-webapp",level:3},{value:"Using a custom version of the CDK declarative manifest schema for the connector builder UI",id:"using-a-custom-version-of-the-cdk-declarative-manifest-schema-for-the-connector-builder-ui",level:4},{value:"Connector Specification Caching",id:"connector-specification-caching",level:3},{value:"Resetting the Airbyte developer environment",id:"resetting-the-airbyte-developer-environment",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"<code>gradlew Could not target platform: &#39;Java SE 14&#39; using tool chain: &#39;JDK 8 (1.8)&#39;.</code>",id:"gradlew-could-not-target-platform-java-se-14-using-tool-chain-jdk-8-18",level:3},{value:"Inspecting the messages passed between connectors",id:"inspecting-the-messages-passed-between-connectors",level:3}],c={toc:s};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"developing-locally"},"Developing Locally"),(0,o.kt)("p",null,"The following technologies are required to build Airbyte locally."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://jdk.java.net/archive/"},(0,o.kt)("inlineCode",{parentName:"a"},"Java 17"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Node 16")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Python 3.9")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Docker")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"Jq"))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Manually switching between different language versions can get hairy. We recommend using a version manager such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},(0,o.kt)("inlineCode",{parentName:"a"},"pyenv"))," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jenv/jenv"},(0,o.kt)("inlineCode",{parentName:"a"},"jenv")),".")),(0,o.kt)("p",null,"To start contributing:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://docs.github.com/en/github/getting-started-with-github/fork-a-repo"},"Fork")," the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte"},(0,o.kt)("inlineCode",{parentName:"a"},"airbyte"))," repository to develop connectors or the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/airbytehq/airbyte-platform"}," ",(0,o.kt)("inlineCode",{parentName:"a"},"airbyte-platform"))," repository to develop the Airbyte platform. "),(0,o.kt)("li",{parentName:"ol"},"Clone the fork on your workstation:")),(0,o.kt)("p",null,"If developing connectors, you can work on connectors locally but additionally start the platform independently locally using :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:{YOUR_USERNAME}/airbyte.git\ncd airbyte\n./run-ab-platform.sh\n")),(0,o.kt)("p",null,"If developing platform:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:{YOUR_USERNAME}/airbyte-platform.git\ncd airbyte-platform\ndocker compose up\n")),(0,o.kt)("h2",{id:"build-with-gradle"},"Build with ",(0,o.kt)("inlineCode",{parentName:"h2"},"gradle")),(0,o.kt)("p",null,"To compile and build the platform, run the following command in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=PLATFORM ./gradlew build\n")),(0,o.kt)("p",null,"This will build all the code and run all the unit tests."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew build")," creates all the necessary artifacts ","(","Webapp, Jars and Docker images",")"," so that you can run Airbyte locally. Since this builds everything, it can take some time."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Optionally, you may pass a ",(0,o.kt)("inlineCode",{parentName:"p"},"VERSION")," environment variable to the gradle build command. If present, gradle will use this value as a tag for all created artifacts (both Jars and Docker images)."),(0,o.kt)("p",{parentName:"admonition"},"If unset, gradle will default to using the current VERSION in ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," for Jars, and ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," as the Docker image tag.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Gradle will use all CPU cores by default. If Gradle uses too much/too little CPU, tuning the number of CPU cores it uses to better suit a dev's need can help."),(0,o.kt)("p",{parentName:"admonition"},"Adjust this by either, 1. Setting an env var: ",(0,o.kt)("inlineCode",{parentName:"p"},'export GRADLE_OPTS="-Dorg.gradle.workers.max=3"'),". 2. Setting a cli option: ",(0,o.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew build --max-workers 3")," 3. Setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"org.gradle.workers.max")," property in the ",(0,o.kt)("inlineCode",{parentName:"p"},"gradle.properties")," file."),(0,o.kt)("p",{parentName:"admonition"},"A good rule of thumb is to set this to ","(","#"," of cores - 1",")",".")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"On Mac, if you run into an error while compiling openssl ","(","this happens when running pip install",")",", you may need to explicitly add these flags to your bash profile so that the C compiler can find the appropriate libraries."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'export LDFLAGS="-L/usr/local/opt/openssl/lib"\nexport CPPFLAGS="-I/usr/local/opt/openssl/include"\n'))),(0,o.kt)("h2",{id:"run-in-dev-mode-with-docker-compose"},"Run in ",(0,o.kt)("inlineCode",{parentName:"h2"},"dev")," mode with ",(0,o.kt)("inlineCode",{parentName:"h2"},"docker-compose")),(0,o.kt)("p",null,"These instructions explain how to run a version of Airbyte Platform that you are developing on (e.g. has not been released yet)."),(0,o.kt)("p",null,"In your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository, run the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=PLATFORM ./gradlew build\nVERSION=dev docker compose up\n")),(0,o.kt)("p",null,"The build will take a few minutes. Once it completes, Airbyte compiled at current git revision will be running in ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," mode in your environment."),(0,o.kt)("p",null,"If you are running just connectors, you don't need the first step:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=dev docker compose up\n")),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},"dev")," mode, all data will be persisted in ",(0,o.kt)("inlineCode",{parentName:"p"},"/tmp/dev_root"),"."),(0,o.kt)("h2",{id:"add-a-connector-under-development-to-airbyte"},"Add a connector under development to Airbyte"),(0,o.kt)("p",null,"These instructions explain how to run a version of an Airbyte connector that you are developing on (e.g. has not been released yet)."),(0,o.kt)("p",null,"In your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte")," repository, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"./run-ab-platform\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Then, build the connector image:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker build ./airbyte-integrations/connectors/<connector-name> -t airbyte/<connector-name>:dev\n")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"The above connector image is tagged with ",(0,o.kt)("inlineCode",{parentName:"p"},"dev"),". You can change this to use another tag if you'd like.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"In your browser, visit ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:8000/"},"http://localhost:8000/")),(0,o.kt)("li",{parentName:"ul"},"Log in with the default user ",(0,o.kt)("inlineCode",{parentName:"li"},"airbyte")," and default password ",(0,o.kt)("inlineCode",{parentName:"li"},"password")),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Settings")," (gear icon in lower left corner) "),(0,o.kt)("li",{parentName:"ul"},"Go to ",(0,o.kt)("inlineCode",{parentName:"li"},"Sources")," or ",(0,o.kt)("inlineCode",{parentName:"li"},"Destinations")," (depending on which connector you are testing)"),(0,o.kt)("li",{parentName:"ul"},"Update the version number to use your docker image tag (default is ",(0,o.kt)("inlineCode",{parentName:"li"},"dev"),")"),(0,o.kt)("li",{parentName:"ul"},"Click ",(0,o.kt)("inlineCode",{parentName:"li"},"Change")," to save the changes")),(0,o.kt)("p",null,"Now when you run a sync with that connector, it will use your local docker image"),(0,o.kt)("h2",{id:"run-platform-acceptance-tests"},"Run platform acceptance tests"),(0,o.kt)("p",null,"In your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository, run the following commands to run acceptance ","(","end-to-end",")"," tests for the platform:"),(0,o.kt)("p",null,"SUB_BUILD=PLATFORM ./gradlew clean build\nSUB_BUILD=PLATFORM ./gradlew :airbyte-tests:acceptanceTests"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nTest containers start Airbyte locally, run the tests, and shutdown Airbyte after running the tests. If you want to run acceptance tests against local Airbyte that is not managed by the test containers, you need to set `USE_EXTERNAL_DEPLOYMENT` environment variable to true:\n\n```bash\nUSE_EXTERNAL_DEPLOYMENT=true SUB_BUILD=PLATFORM ./gradlew :airbyte-tests:acceptanceTests\n")),(0,o.kt)("h2",{id:"run-formatting-automationtests"},"Run formatting automation/tests"),(0,o.kt)("p",null,"Airbyte runs a code formatter as part of the build to enforce code styles. You should run the formatter yourself before submitting a PR (otherwise the build will fail)."),(0,o.kt)("p",null,"The command to run formatting varies slightly depending on which part of the codebase you are working in."),(0,o.kt)("h3",{id:"platform"},"Platform"),(0,o.kt)("p",null,"If you are working in the platform run ",(0,o.kt)("inlineCode",{parentName:"p"},"SUB_BUILD=PLATFORM ./gradlew format")," from the root of the ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository."),(0,o.kt)("h3",{id:"connector"},"Connector"),(0,o.kt)("p",null,"To format an individual connector in python, run the following command in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"}," ./gradlew :airbyte-integrations:connectors:<connector_name>:airbytePythonFormat\n")),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"./gradlew :airbyte-integrations:connectors:source-s3:airbytePythonFormat\n")),(0,o.kt)("p",null,"To format connectors in java, run ",(0,o.kt)("inlineCode",{parentName:"p"},"./gradlew format")),(0,o.kt)("h3",{id:"connector-infrastructure"},"Connector Infrastructure"),(0,o.kt)("p",null,"Finally, if you are working in any module in ",(0,o.kt)("inlineCode",{parentName:"p"},":airbyte-integrations:bases")," or ",(0,o.kt)("inlineCode",{parentName:"p"},":airbyte-cdk:python"),", run the following command in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte")," repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"SUB_BUILD=CONNECTORS_BASE ./gradlew format\n")),(0,o.kt)("p",null,"Note: If you are contributing a Python file without imports or function definitions, place the following comment at the top of your file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'"""\n[FILENAME] includes [INSERT DESCRIPTION OF CONTENTS HERE]\n"""\n')),(0,o.kt)("h3",{id:"develop-on-airbyte-webapp"},"Develop on ",(0,o.kt)("inlineCode",{parentName:"h3"},"airbyte-webapp")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Spin up Airbyte locally in your local ",(0,o.kt)("inlineCode",{parentName:"li"},"airbyte-platform")," repository so the UI can make requests against the local API.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'BASIC_AUTH_USERNAME="" BASIC_AUTH_PASSWORD="" docker compose up\n')),(0,o.kt)("p",null,"Note: ",(0,o.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/operator-guides/security#network-security"},"basic auth")," must be disabled by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"BASIC_AUTH_USERNAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"BASIC_AUTH_PASSWORD")," to empty values, otherwise requests from the development server will fail against the local API."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/nvm-sh/nvm"},(0,o.kt)("inlineCode",{parentName:"a"},"nvm"))," (Node Version Manager) if not installed"),(0,o.kt)("li",{parentName:"ul"},"Use ",(0,o.kt)("inlineCode",{parentName:"li"},"nvm")," to install the required node version:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd airbyte-webapp\nnvm install\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Install the ",(0,o.kt)("inlineCode",{parentName:"li"},"pnpm")," package manager in the required version:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# <version> must be the exact version from airbyte-webapp/package.json > engines.pnpm\nnpm install -g pnpm@<version>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Start up the react app.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pnpm install\npnpm start\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Happy Hacking!")),(0,o.kt)("h4",{id:"using-a-custom-version-of-the-cdk-declarative-manifest-schema-for-the-connector-builder-ui"},"Using a custom version of the CDK declarative manifest schema for the connector builder UI"),(0,o.kt)("p",null,"When working on the connector builder UI and doing changes to the CDK and the webapp at the same time, you can start the dev server with ",(0,o.kt)("inlineCode",{parentName:"p"},"CDK_MANIFEST_PATH")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"CDK_VERSION")," environment variables set to have the correct Typescript types built. If ",(0,o.kt)("inlineCode",{parentName:"p"},"CDK_VERSION")," is set, it's loading the specified version of the CDK from pypi instead of the default one, if ",(0,o.kt)("inlineCode",{parentName:"p"},"CDK_MANIFEST_PATH")," is set, it's copying the schema file locally."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"CDK_MANIFEST_PATH=../../airbyte/airbyte-cdk/python/airbyte_cdk/sources/declarative/declarative_component_schema.yaml pnpm start\n")),(0,o.kt)("h3",{id:"connector-specification-caching"},"Connector Specification Caching"),(0,o.kt)("p",null,"The Configuration API caches connector specifications. This is done to avoid needing to run Docker everytime one is needed in the UI. Without this caching, the UI crawls. If you update the specification of a connector and need to clear this cache so the API / UI picks up the change, you have two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the Admin page in the UI and update the version of the connector. Updating to any version, including the one you're already on, will trigger clearing the cache."),(0,o.kt)("li",{parentName:"ol"},"From your local ",(0,o.kt)("inlineCode",{parentName:"li"},"airbyte-platform")," repository, restart the server by running the following commands:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"VERSION=dev docker compose down -v\nVERSION=dev docker compose up\n")),(0,o.kt)("h3",{id:"resetting-the-airbyte-developer-environment"},"Resetting the Airbyte developer environment"),(0,o.kt)("p",null,"Sometimes you'll want to reset the data in your local environment. One common case for this is if you are updating an connector's entry in the database ","(",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-config/init/src/main/resources/config"),")",", often the easiest thing to do, is wipe the local database and start it from scratch. To reset your data back to a clean install of Airbyte, follow these steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Make sure you are in your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Delete the datastore volumes in docker"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  VERSION=dev docker compose down -v\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Remove the data on disk"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"  rm -rf /tmp/dev_root\n  rm -rf /tmp/airbyte_local\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Rebuild the project"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"}," SUB_BUILD=PLATFORM ./gradlew clean build\n VERSION=dev docker compose up -V\n")))),(0,o.kt)("p",null,"While not as common as the above steps, you may also get into a position where want to erase all of the data on your local docker server. This is useful if you've been modifying image tags while developing."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker system prune -a\ndocker volume prune\n")),(0,o.kt)("p",null,"If you are working on python connectors, you may also need to reset the ",(0,o.kt)("inlineCode",{parentName:"p"},"virtualenv")," and re-install the connector's dependencies."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'# Assuming you have a virtualenv loaded into your shell\ndeactivate\n\n# From the connector\'s directory\n# remove the venv directory entirely\nrm -rf .venv\n\n# make and activate a new venv\npython3 -m venv .venv\nsource .venv/bin/activate\npip install -e ".[dev]"\n')),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h3",{id:"gradlew-could-not-target-platform-java-se-14-using-tool-chain-jdk-8-18"},(0,o.kt)("inlineCode",{parentName:"h3"},"gradlew Could not target platform: 'Java SE 14' using tool chain: 'JDK 8 (1.8)'.")),(0,o.kt)("p",null,"Somehow gradle didn't pick up the right java version for some reason. Find the install version and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment to point to the JDK folder."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"env JAVA_HOME=/usr/lib/jvm/java-14-openjdk ./gradlew  :airbyte-integrations:connectors:your-connector-dir:build\n")),(0,o.kt)("h3",{id:"inspecting-the-messages-passed-between-connectors"},"Inspecting the messages passed between connectors"),(0,o.kt)("p",null,"From your local ",(0,o.kt)("inlineCode",{parentName:"p"},"airbyte-platform")," repository, you can enable ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_CONNECTOR_MESSAGES=true")," to log the messages the Airbyte platform receives from the source and destination when debugging locally. e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"LOG_CONNECTOR_MESSAGES=true VERSION=dev docker compose up")))}d.isMDXComponent=!0}}]);
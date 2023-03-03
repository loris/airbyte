"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[41798],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var l=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(n),y=r,h=d["".concat(u,".").concat(y)]||d[y]||c[y]||a;return n?l.createElement(h,o(o({ref:t},p),{},{components:n})):l.createElement(h,o({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<a;s++)o[s]=n[s];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78199:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var l=n(87462),r=(n(67294),n(3905));const a={},o="Deploy Airbyte on Plural",i={unversionedId:"deploying-airbyte/on-plural",id:"deploying-airbyte/on-plural",title:"Deploy Airbyte on Plural",description:"If you'd prefer to follow along with a video, check out the Plural Airbyte deployment guide video here",source:"@site/../docs/deploying-airbyte/on-plural.md",sourceDirName:"deploying-airbyte",slug:"/deploying-airbyte/on-plural",permalink:"/deploying-airbyte/on-plural",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/deploying-airbyte/on-plural.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"On Restack",permalink:"/deploying-airbyte/on-restack"},next:{title:"Deploy Airbyte on Oracle Cloud",permalink:"/deploying-airbyte/on-oci-vm"}},u={},s=[{value:"Getting started",id:"getting-started",level:2},{value:"Installing Airbyte",id:"installing-airbyte",level:2},{value:"Adding the Plural Console",id:"adding-the-plural-console",level:2},{value:"Accessing your Airbyte Installation",id:"accessing-your-airbyte-installation",level:2},{value:"Accessing your Console Installation",id:"accessing-your-console-installation",level:2},{value:"Advanced Use Cases",id:"advanced-use-cases",level:2},{value:"Running with External Airflow",id:"running-with-external-airflow",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Further Reading",id:"further-reading",level:2}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deploy-airbyte-on-plural"},"Deploy Airbyte on Plural"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"If you'd prefer to follow along with a video, check out the Plural Airbyte deployment guide video ",(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/suvTJyJ6PzI"},"here"))),(0,r.kt)("h2",{id:"getting-started"},"Getting started"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create an account on ",(0,r.kt)("a",{parentName:"li",href:"https://app.plural.sh"},"https://app.plural.sh"),".  "),(0,r.kt)("li",{parentName:"ol"},"Install the Plural CLI by following steps 1, 2, and 3 of the instructions ",(0,r.kt)("a",{parentName:"li",href:"https://docs.plural.sh/getting-started"},"here"),". Through this, you will also configure your cloud provider and the domain name under which your application will be deployed to.")),(0,r.kt)("p",null,"We now need a Git repository to store your Plural configuration in. This will also contain the Helm and Terraform files that Plural will autogenerate for you."),(0,r.kt)("p",null,"You have two options:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run ",(0,r.kt)("inlineCode",{parentName:"li"},"plural init")," in any directory to let Plural initiate an OAuth workflow to create a Git repo for you."),(0,r.kt)("li",{parentName:"ul"},"Create a Git repo manually, clone it, and run ",(0,r.kt)("inlineCode",{parentName:"li"},"plural init")," inside it.")),(0,r.kt)("p",null,"Running ",(0,r.kt)("inlineCode",{parentName:"p"},"plural init")," will configure your installation and cloud provider for the repo. "),(0,r.kt)("h2",{id:"installing-airbyte"},"Installing Airbyte"),(0,r.kt)("p",null,"To install Airbyte on your Plural repo, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle install airbyte $CONSOLE_BUNDLE_NAME\n")),(0,r.kt)("p",null,"To find the console bundle name for your cloud provider, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle list airbyte\n")),(0,r.kt)("p",null,"For example, this is what it looks like for AWS:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"plural bundle install airbyte airbyte-aws\n")),(0,r.kt)("p",null,"Plural's Airbyte distribution currently has support for AWS, GCP and Azure. Select the Cloud that best fits your infrastructure."),(0,r.kt)("p",null,"The CLI prompts you to choose whether or not you want to use Plural OIDC. ",(0,r.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OIDC")," allows you to login to the applications you host on Plural with your login to ",(0,r.kt)("a",{parentName:"p",href:"https://app.plural.sh"},"app.plural.sh"),", acting as an SSO provider."),(0,r.kt)("p",null,"After this, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'plural build\nplural deploy --commit "deploying airbyte"\n')),(0,r.kt)("h2",{id:"adding-the-plural-console"},"Adding the Plural Console"),(0,r.kt)("p",null,"To make management of your installation as simple as possible, we recommend installing the Plural Console.  The console provides tools to manage resource scaling, receiving automated upgrades, dashboards tailored to your Airbyte installation, and log aggregation. Run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'plural bundle install console console-aws\nplural build\nplural deploy --commit "deploying the console too"\n')),(0,r.kt)("h2",{id:"accessing-your-airbyte-installation"},"Accessing your Airbyte Installation"),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("inlineCode",{parentName:"p"},"airbyte.SUBDOMAIN_NAME.onplural.sh")," to access the Airbyte UI."),(0,r.kt)("h2",{id:"accessing-your-console-installation"},"Accessing your Console Installation"),(0,r.kt)("p",null,"To monitor and manage your Airbyte installation, navigate to the Plural Console at ",(0,r.kt)("inlineCode",{parentName:"p"},"console.YOUR_ORGANIZATION.onplural.sh")," (or whichever subdomain you chose)."),(0,r.kt)("h2",{id:"advanced-use-cases"},"Advanced Use Cases"),(0,r.kt)("h3",{id:"running-with-external-airflow"},"Running with External Airflow"),(0,r.kt)("p",null,"If you have an Airflow instance external to the Plural Kubernetes cluster with your Airbyte installation, you can still have Airflow manage the Airbyte installation. This happens because Basic Auth setup is required for external authentication - Plural OIDC is not sufficient here."),(0,r.kt)("p",null,"In your ",(0,r.kt)("inlineCode",{parentName:"p"},"context.yaml")," file located at the root of your Plural installation, create a user with Basic Auth for Airbyte. Then on your Airbyte Airflow connector, use the following URL template:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"https://username:password@airbytedomain\n")),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("p",null,"If you have any issues with installing Airbyte on Plural, join Plural's ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/bEBAMXV64s"},"Discord Community"),"."),(0,r.kt)("p",null,"If you'd like to request any new features for our Airbyte installation, open an issue or PR at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/pluralsh/plural-artifacts"},"https://github.com/pluralsh/plural-artifacts"),"."),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,"To learn more about Plural, refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.plural.sh"},"Plural documentation")))}c.isMDXComponent=!0}}]);
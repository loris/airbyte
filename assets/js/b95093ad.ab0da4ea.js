"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[17617],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),u=a,k=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?o.createElement(k,r(r({ref:t},p),{},{components:n})):o.createElement(k,r({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(87462),a=(n(67294),n(3905));const i={},r="Code Style",l={unversionedId:"contributing-to-airbyte/code-style",id:"contributing-to-airbyte/code-style",title:"Code Style",description:"Configure Java Style for IntelliJ",source:"@site/../docs/contributing-to-airbyte/code-style.md",sourceDirName:"contributing-to-airbyte",slug:"/contributing-to-airbyte/code-style",permalink:"/contributing-to-airbyte/code-style",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/contributing-to-airbyte/code-style.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Monorepo Python Development",permalink:"/contributing-to-airbyte/python-gradle-setup"},next:{title:"Issues & Pull Requests",permalink:"/contributing-to-airbyte/issues-and-pull-requests"}},s={},c=[{value:"Configure Java Style for IntelliJ",id:"configure-java-style-for-intellij",level:2},{value:"Source code comments",id:"source-code-comments",level:2}],p={toc:c};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-style"},"Code Style"),(0,a.kt)("h2",{id:"configure-java-style-for-intellij"},"Configure Java Style for IntelliJ"),(0,a.kt)("p",null,"First, download the style configuration."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"curl https://raw.githubusercontent.com/google/styleguide/gh-pages/intellij-java-google-style.xml -o ~/Downloads/intellij-java-google-style.xml\n")),(0,a.kt)("p",null,"Install it in IntelliJ:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Editor > Code Style")),(0,a.kt)("li",{parentName:"ol"},"Press the little cog:",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Import Scheme > IntelliJ IDEA code style XML")),(0,a.kt)("li",{parentName:"ol"},"Select the file we just downloaded"))),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("inlineCode",{parentName:"li"},"GoogleStyle")," in the dropdown"),(0,a.kt)("li",{parentName:"ol"},"Change default ",(0,a.kt)("inlineCode",{parentName:"li"},"Hard wrap at")," in ",(0,a.kt)("inlineCode",{parentName:"li"},"Wrapping and Braces")," tab to ",(0,a.kt)("strong",{parentName:"li"},"150")),(0,a.kt)("li",{parentName:"ol"},"Use explicit imports ",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Code Style > Java > Imports"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"Class count to use import with '*'")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"9999")," "),(0,a.kt)("li",{parentName:"ol"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"Names count to use static import with '*'")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"9999")))),(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Code Style > Kotlin > Imports"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"Top Level Symbols")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Use single name import")),(0,a.kt)("li",{parentName:"ol"},"change ",(0,a.kt)("inlineCode",{parentName:"li"},"Java Statics and Enum Members")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Use single name import")))))),(0,a.kt)("li",{parentName:"ol"},"Add the ",(0,a.kt)("inlineCode",{parentName:"li"},"final")," keyword wherever possible. You can either set this as the default for your IDE or you can set it just for the Airbyte project(s) that you are using",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Turn on the inspection. Go into ",(0,a.kt)("inlineCode",{parentName:"li"},"Preferences > Editor > Inspections"),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Search ",(0,a.kt)("inlineCode",{parentName:"li"},"\"Field may be 'final'\"")," > check the box"),(0,a.kt)("li",{parentName:"ol"},"Search ",(0,a.kt)("inlineCode",{parentName:"li"},"\"local variable or parameter can be 'final'\"")," > check the box"),(0,a.kt)("li",{parentName:"ol"},"Apply the changes"))),(0,a.kt)("li",{parentName:"ol"},"Turn on the auto add final. Go into IntelliJ Preferences",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Plugins - install Save Actions if not already installed"),(0,a.kt)("li",{parentName:"ol"},"Go to Save Actions in the preferences ",(0,a.kt)("a",{target:"_blank",href:n(57681).Z},"left navigation column")," (NOT Tools > Actions on Save -- that is a different tool)",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Activate save actions on save")," > check the box"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Active save actions on shortcut")," > check the box"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Activate save actions on batch")," > check the box"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Add final modifier to field")," > check the box"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"Add final modifier to local variable or parameter")," > check the box"),(0,a.kt)("li",{parentName:"ol"},"Apply the changes"))))))),(0,a.kt)("li",{parentName:"ol"},"You're done!")),(0,a.kt)("h2",{id:"source-code-comments"},"Source code comments"),(0,a.kt)("p",null,"It's hard to pin down exactly what to do around source code comments, but there are two ","(","very subjective",")"," and rough guidelines:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If something is not obvious, write it down"),". Examples include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"non-trivial class definitions should have docstrings"),(0,a.kt)("li",{parentName:"ul"},"magic variables should have comments explaining why those values are used ","(","e.g: if using a page size of 10 in a connector, describe why if possible. If there is no reason, that's also fine, just mention in a comment",")","."),(0,a.kt)("li",{parentName:"ul"},"Complicated subroutines/logic which cannot be refactored should have comments explaining what they are doing and why")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"If something is obvious, don't write it down")," since it's probably more likely to go out of date. For example, a comment like ",(0,a.kt)("inlineCode",{parentName:"p"},"x = 42; // sets x to 42")," is not adding any new information and is therefore better omitted."))}m.isMDXComponent=!0},57681:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/save_actions_settings-c73c059b6c04d4d26b90bf3b85b158ae.png"}}]);
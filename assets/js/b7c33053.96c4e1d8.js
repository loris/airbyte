"use strict";(self.webpackChunkdocu=self.webpackChunkdocu||[]).push([[41999],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>u});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var p=r.createContext({}),s=function(t){var e=r.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},m=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=s(a),u=n,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||i;return a?r.createElement(k,l(l({ref:e},m),{},{components:a})):r.createElement(k,l({ref:e},m))}));function u(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2558:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={},l="GitLab",o={unversionedId:"integrations/sources/gitlab",id:"integrations/sources/gitlab",title:"GitLab",description:"This page contains the setup guide and reference information for the Gitlab Source connector.",source:"@site/../docs/integrations/sources/gitlab.md",sourceDirName:"integrations/sources",slug:"/integrations/sources/gitlab",permalink:"/integrations/sources/gitlab",draft:!1,editUrl:"https://github.com/airbytehq/airbyte/blob/master/docs/../docs/integrations/sources/gitlab.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"GitHub",permalink:"/integrations/sources/github"},next:{title:"Glassfrog",permalink:"/integrations/sources/glassfrog"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setup guide",id:"setup-guide",level:2},{value:"Step 1: Set up GitLab",id:"step-1-set-up-gitlab",level:3},{value:"Step 2: Set up the GitLab connector in Airbyte",id:"step-2-set-up-the-gitlab-connector-in-airbyte",level:3},{value:"Supported sync modes",id:"supported-sync-modes",level:2},{value:"Supported Streams",id:"supported-streams",level:2},{value:"Additional information",id:"additional-information",level:2},{value:"Performance considerations",id:"performance-considerations",level:2},{value:"Changelog",id:"changelog",level:2}],m={toc:s};function c(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"gitlab"},"GitLab"),(0,n.kt)("p",null,"This page contains the setup guide and reference information for the Gitlab Source connector."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Gitlab instance or an account at ",(0,n.kt)("a",{parentName:"li",href:"https://gitlab.com"},"Gitlab")),(0,n.kt)("li",{parentName:"ul"},"Start date"),(0,n.kt)("li",{parentName:"ul"},"GitLab Groups (Optional)"),(0,n.kt)("li",{parentName:"ul"},"GitLab Projects (Optional)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Personal Access Token (see ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"personal access token"),")"),(0,n.kt)("li",{parentName:"ul"},"OAuth")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Personal Access Token (see ",(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"personal access token"),")")),(0,n.kt)("h2",{id:"setup-guide"},"Setup guide"),(0,n.kt)("h3",{id:"step-1-set-up-gitlab"},"Step 1: Set up GitLab"),(0,n.kt)("p",null,"Create a ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab Account")," or set up a local instance of GitLab."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Airbyte Open Source additional setup steps")),(0,n.kt)("p",null,"Log into ",(0,n.kt)("a",{parentName:"p",href:"https://gitlab.com"},"GitLab")," and then generate a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html"},"personal access token"),". Your token should have the ",(0,n.kt)("inlineCode",{parentName:"p"},"read_api")," scope, that Grants read access to the API, including all groups and projects, the container registry, and the package registry."),(0,n.kt)("h3",{id:"step-2-set-up-the-gitlab-connector-in-airbyte"},"Step 2: Set up the GitLab connector in Airbyte"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Cloud:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.airbyte.io/workspaces"},"Log into your Airbyte Cloud")," account."),(0,n.kt)("li",{parentName:"ol"},"In the left navigation bar, click ",(0,n.kt)("strong",{parentName:"li"},"Sources"),". In the top-right corner, click ",(0,n.kt)("strong",{parentName:"li"},"+ new source"),"."),(0,n.kt)("li",{parentName:"ol"},"On the source setup page, select ",(0,n.kt)("strong",{parentName:"li"},"GitLab")," from the Source type dropdown and enter a name for this connector."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Authenticate your GitLab account")," by selecting Oauth or Personal Access Token for Authentication."),(0,n.kt)("li",{parentName:"ol"},"Log in and Authorize to the GitLab account."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Start date")," - The date from which you'd like to replicate data for streams."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"API URL")," - The URL to access you self-hosted GitLab instance or ",(0,n.kt)("inlineCode",{parentName:"li"},"gitlab.com")," (default)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Groups (Optional)")," - Space-delimited list of GitLab group IDs, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"airbytehq")," for single group, ",(0,n.kt)("inlineCode",{parentName:"li"},"airbytehq another-repo")," for multiple groups."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Projects (Optional)")," - Space-delimited list of GitLab projects to pull data for, e.g. ",(0,n.kt)("inlineCode",{parentName:"li"},"airbytehq/airbyte"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Set up source"),".")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note:")," You can specify either Group IDs or Project IDs in the source configuration. If both fields are blank, the connector will retrieve a list of all the groups that are accessible to the configured token and ingest as normal."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"For Airbyte Open Source:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Authenticate with ",(0,n.kt)("strong",{parentName:"li"},"Personal Access Token"),".")),(0,n.kt)("h2",{id:"supported-sync-modes"},"Supported sync modes"),(0,n.kt)("p",null,"The Gitlab Source connector supports the following ",(0,n.kt)("a",{parentName:"p",href:"https://docs.airbyte.com/cloud/core-concepts#connection-sync-modes"}," sync modes"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/glossary#full-refresh-sync"},"Full Refresh - Overwrite")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/full-refresh-append"},"Full Refresh - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-append"},"Incremental - Append")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.airbyte.com/understanding-airbyte/connections/incremental-deduped-history"},"Incremental - Deduped History"))),(0,n.kt)("h2",{id:"supported-streams"},"Supported Streams"),(0,n.kt)("p",null,"This connector outputs the following streams:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/branches.html"},"Branches")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/commits.html"},"Commits")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/issues.html"},"Issues")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_boards.html"},"Group Issue Boards")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/pipelines.html"},"Pipelines")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/jobs.html"},"Jobs")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/projects.html"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/milestones.html"},"Project Milestones")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/merge_requests.html"},"Project Merge Requests")," ","(","Incremental",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/users.html"},"Users")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/groups.html"},"Groups")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_milestones.html"},"Group Milestones")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/members.html"},"Group and Project members")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/tags.html"},"Tags")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/releases/index.html"},"Releases")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/group_labels.html"},"Group Labels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/labels.html"},"Project Labels")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/epics.html"},"Epics")," ","(","only available for GitLab Ultimate and GitLab.com Gold accounts",")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.gitlab.com/ee/api/epic_issues.html"},"Epic Issues")," ","(","only available for GitLab Ultimate and GitLab.com Gold accounts",")")),(0,n.kt)("h2",{id:"additional-information"},"Additional information"),(0,n.kt)("p",null,"GitLab source works with GitLab API v4. It can also work with self-hosted GitLab API v4."),(0,n.kt)("h2",{id:"performance-considerations"},"Performance considerations"),(0,n.kt)("p",null,"Gitlab has the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.gitlab.com/ee/user/gitlab_com/index.html#gitlabcom-specific-rate-limits"},"rate limits"),", but the Gitlab connector should not run into Gitlab API limitations under normal usage. Please ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/airbytehq/airbyte/issues"},"create an issue")," if you see any rate limit issues that are not automatically retried successfully."),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Version"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Date"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Pull Request"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Subject"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-02-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22992"},"22992")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specified date formatting in specification")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-27"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/22001"},"22001")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Set ",(0,n.kt)("inlineCode",{parentName:"td"},"AvailabilityStrategy")," for streams explicitly to ",(0,n.kt)("inlineCode",{parentName:"td"},"None"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2023-01-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/21713"},"21713")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix missing data issue")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"1.0.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-05"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7506"},"7506")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add ",(0,n.kt)("inlineCode",{parentName:"td"},"OAuth2.0")," authentication option")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.12"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-15"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20542"},"20542")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Revert HttpAvailability changes, run on cdk 0.15.0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.11"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-14"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20479"},"20479")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use HttpAvailabilityStrategy + add unit tests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.10"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20384"},"20384")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fetch groups along with their subgroups")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-11"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20348"},"20348")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix 403 error when syncing ",(0,n.kt)("inlineCode",{parentName:"td"},"EpicIssues")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.8"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/20023"},"20023")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix duplicated records issue for ",(0,n.kt)("inlineCode",{parentName:"td"},"Projects")," stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.7"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-12-01"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/19986"},"19986")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix ",(0,n.kt)("inlineCode",{parentName:"td"},"GroupMilestones")," stream schema")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.6"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-06-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/13252"},"13252")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Add GroupIssueBoards stream")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.5"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-05-02"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11907"},"11907")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix null projects param and ",(0,n.kt)("inlineCode",{parentName:"td"},"container_expiration_policy"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.4"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2022-03-23"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/11140"},"11140")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Ingest All Accessible Groups if not Specified in Config")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.3"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-12-21"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/8991"},"8991")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Update connector fields title/description")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.2"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-18"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/7108"},"7108")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Allow all domains to be used as ",(0,n.kt)("inlineCode",{parentName:"td"},"api_url"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.1"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-10-12"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/6932"},"6932")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Fix pattern field in spec file, remove unused fields from config files, use cache from CDK")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"0.1.0"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2021-07-06"),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("a",{parentName:"td",href:"https://github.com/airbytehq/airbyte/pull/4174"},"4174")),(0,n.kt)("td",{parentName:"tr",align:"left"},"Initial Release")))))}c.isMDXComponent=!0}}]);
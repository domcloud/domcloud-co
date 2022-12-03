"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8117],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2070:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={slug:"producing-cost-effective-service",title:"Producing a Cost-Effective Service",authors:["willnode"],tags:["service","update"]},i=void 0,s={permalink:"/blog/producing-cost-effective-service",source:"@site/blog/2022-12-03-producing-cost-effective-service/index.md",title:"Producing a Cost-Effective Service",description:"Hi, long time I haven't do some updates. I want to point out some statistics and key actions on what to do next for DOM Cloud.",date:"2022-12-03T00:00:00.000Z",formattedDate:"December 3, 2022",tags:[{label:"service",permalink:"/blog/tags/service"},{label:"update",permalink:"/blog/tags/update"}],readingTime:2.07,hasTruncateMarker:!1,authors:[{name:"Wildan Mubarok",title:"Creator of DOM Cloud",url:"https://github.com/willnode",imageURL:"https://github.com/willnode.png",key:"willnode"}],frontMatter:{slug:"producing-cost-effective-service",title:"Producing a Cost-Effective Service",authors:["willnode"],tags:["service","update"]},nextItem:{title:"Preparing for spike because of Heroku",permalink:"/blog/preparing-for-spike-of-heroku"}},l={authorsImageUrls:[void 0]},c=[{value:"Change in Plans",id:"change-in-plans",level:2},{value:"Free Plan",id:"free-plan",level:3},{value:"Lite Plan",id:"lite-plan",level:3},{value:"The Enforcing of Limits",id:"the-enforcing-of-limits",level:2},{value:"Upcoming new Features",id:"upcoming-new-features",level:2}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hi, long time I haven't do some updates. I want to point out some statistics and key actions on what to do next for DOM Cloud."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"stat.png",src:n(7229).Z,width:"990",height:"535"})),(0,a.kt)("p",null,"By number of statistics, our platform usage are steadily increasing. We also gotten some feedback from users, and guided with data and some reasoning, we would like to bring some changes to our plans:"),(0,a.kt)("h2",{id:"change-in-plans"},"Change in Plans"),(0,a.kt)("h3",{id:"free-plan"},"Free Plan"),(0,a.kt)("p",null,"The free plan storage cap is increased from ",(0,a.kt)("strong",{parentName:"p"},"1 GB")," to ",(0,a.kt)("strong",{parentName:"p"},"1.5 GB"),", while total of website is reduced from ",(0,a.kt)("strong",{parentName:"p"},"4")," to ",(0,a.kt)("strong",{parentName:"p"},"3"),". I think this is a fair tradeoff, because most websites nowadays are quite heavy with depedencies, and storage is quite cheap compared to computing power."),(0,a.kt)("h3",{id:"lite-plan"},"Lite Plan"),(0,a.kt)("p",null,"Due to high processing fees, I think it's make sense to increase the price from ",(0,a.kt)("strong",{parentName:"p"},"2 USD")," to ",(0,a.kt)("strong",{parentName:"p"},"3 USD")," a month. With that in mind, these limits are increased:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Storage cap is increased from ",(0,a.kt)("strong",{parentName:"li"},"2 GB")," to ",(0,a.kt)("strong",{parentName:"li"},"3 GB"),"."),(0,a.kt)("li",{parentName:"ul"},"Data transfer is increased from ",(0,a.kt)("strong",{parentName:"li"},"2 GB")," to ",(0,a.kt)("strong",{parentName:"li"},"5 GB"),"."),(0,a.kt)("li",{parentName:"ul"},"Total of website is increased from ",(0,a.kt)("strong",{parentName:"li"},"5")," to ",(0,a.kt)("strong",{parentName:"li"},"6"),".")),(0,a.kt)("h2",{id:"the-enforcing-of-limits"},"The Enforcing of Limits"),(0,a.kt)("p",null,"Limits in the past is not enforced because how little the users was and support was very limited. Now with more users, I think it's time to enforce the limits so I can keep the platform stay on good performance."),(0,a.kt)("p",null,"Here's how it works:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If storage or data cap is reached, all website will be instantly disabled and the user will be notified with email. Current option is to upgrade the plan or delete some files (only works if the storage cap reached)."),(0,a.kt)("li",{parentName:"ul"},"If paid user has exceeded the expiry date, it will return back to free plan automatically."),(0,a.kt)("li",{parentName:"ul"},"Free user also has expiry date too, but it's 30 days after the last login. If the user has not logged in for 30 days, all website will be disabled and the user is notified before all website data is erased permanently within 2 weeks."),(0,a.kt)("li",{parentName:"ul"},"If free user's website has used a noticeable data cap (it means getting enough traffic), that user doesn't need to login for another 30 days (the expiration date is extended automatically, as a thank you because it means free marketing for us too).")),(0,a.kt)("h2",{id:"upcoming-new-features"},"Upcoming new Features"),(0,a.kt)("p",null,"There maybe not a lot of new features upcoming, because I will focus on providing good documentation."),(0,a.kt)("p",null,"Nonetheless, there maybe some minor new features or UI improvements in this month. Check back later!"))}u.isMDXComponent=!0},7229:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stat-f51a4d37a16d2ae3a9e8eac13b2644d7.png"}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4013],{1460:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),n=a(6010),r=a(5096),s=a(7524),i=a(9960),c=a(5999),m=a(6550),o=a(8596);function u(e){const{pathname:t}=(0,m.TH)();return(0,l.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,o.Mg)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function g(e){let{sidebar:t}=e;const a=u(t.items);return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(d.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(d.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(d.sidebarItemList,"clean-list")},a.map((e=>l.createElement("li",{key:e.permalink,className:d.sidebarItem},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title)))))))}var b=a(3102);function p(e){let{sidebar:t}=e;const a=u(t.items);return l.createElement("ul",{className:"menu__list"},a.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function E(e){return l.createElement(b.Zo,{component:p,props:e})}function k(e){let{sidebar:t}=e;const a=(0,s.i)();return t?.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(g,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,c=t&&t.items.length>0;return l.createElement(r.Z,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(k,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var l=a(7294),n=a(6010),r=a(5999);const s=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var i=a(1944),c=a(5281),m=a(1460),o=a(3008),u=a(2503);const d={tag:"tag_Nnez"};function g(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement(u.Z,{as:"h2",id:t.letter},t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:d.tag},l.createElement(o.Z,e))))),l.createElement("hr",null))}function b(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(g,{key:e.letter,letterEntry:e}))))}var p=a(197);function E(e){let{tags:t,sidebar:a}=e;const r=s();return l.createElement(i.FG,{className:(0,n.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},l.createElement(i.d,{title:r}),l.createElement(p.Z,{tag:"blog_tags_list"}),l.createElement(m.Z,{sidebar:a},l.createElement(u.Z,{as:"h1"},r),l.createElement(b,{tags:t})))}},3008:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010),r=a(9960);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}}}]);
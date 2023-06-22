/*! For license information please see 4dd6c91c.25dfeb70.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2631],{1062:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=t(5893),n=t(1151);const r={title:"Database Daemon"},o="Databases",i={unversionedId:"features/database",id:"features/database",title:"Database Daemon",description:"Database is an integral part of any application. DOM Cloud provides a free, opt-in MariaDB and PostgreSQL database for every website in every tier.",source:"@site/docs/features/database.mdx",sourceDirName:"features",slug:"/features/database",permalink:"/docs/features/database",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/features/database.mdx",tags:[],version:"current",frontMatter:{title:"Database Daemon"},sidebar:"tutorialSidebar",previous:{title:"NGINX and App Daemon",permalink:"/docs/features/nginx"},next:{title:"DNS Daemon",permalink:"/docs/features/dns"}},d={},c=[{value:"Using the Database",id:"using-the-database",level:3},{value:"Remote Access",id:"remote-access",level:3},{value:"Timestamp",id:"timestamp",level:3}];function l(e){const a=Object.assign({h1:"h1",p:"p",code:"code",em:"em",a:"a",admonition:"admonition",h3:"h3",ul:"ul",li:"li"},(0,n.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.h1,{id:"databases",children:"Databases"}),"\n",(0,s.jsxs)(a.p,{children:["Database is an integral part of any application. DOM Cloud provides a free, opt-in ",(0,s.jsx)(a.code,{children:"MariaDB"})," and ",(0,s.jsx)(a.code,{children:"PostgreSQL"})," database for every website in every tier."]}),"\n",(0,s.jsxs)(a.p,{children:["Use the ",(0,s.jsx)(a.em,{children:"runner"})," to add and use a database. See the section for enabling ",(0,s.jsx)(a.a,{href:"/docs/features/deploy#mysql",children:"MariaDB"})," or ",(0,s.jsx)(a.a,{href:"/docs/features/deploy#postgresql",children:"PostgreSQL"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"To view and edit the database using online tools, use PhpMyAdmin or PhpPgAdmin. Both available from manage tab."}),"\n",(0,s.jsx)(a.admonition,{type:"caution",children:(0,s.jsx)(a.p,{children:"You can't create or drop database from PhpMyAdmin or PhpPgAdmin. You have to do that from webmin or runner."})}),"\n",(0,s.jsx)(a.h3,{id:"using-the-database",children:"Using the Database"}),"\n",(0,s.jsx)(a.p,{children:"After enabling MySQL/Postgres from the runner. You can provide the database credentials like below:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Hostname: ",(0,s.jsx)(a.code,{children:"localhost"})," (because the database always live in the same server)"]}),"\n",(0,s.jsx)(a.li,{children:"Username: Same username with server (see from manage tab)"}),"\n",(0,s.jsx)(a.li,{children:"Password: Same password with server (see from manage tab)"}),"\n",(0,s.jsxs)(a.li,{children:["Database name: Usually username + ",(0,s.jsx)(a.code,{children:"_db"})," unless you've create another DB"]}),"\n"]}),"\n",(0,s.jsx)(a.h3,{id:"remote-access",children:"Remote Access"}),"\n",(0,s.jsx)(a.p,{children:"Remote Access is used to manage databases using your local software -- such as DBeaver, HeidiSQL or TablePlus."}),"\n",(0,s.jsx)(a.p,{children:"PostgreSQL permits remote access by default."}),"\n",(0,s.jsxs)(a.p,{children:["MySQL is more grained and doesn't allow remote access by default. You need to change it by go to the Webmin -> Databases -> Remote access then add ",(0,s.jsx)(a.code,{children:"%.%.%.%"})," and ",(0,s.jsx)(a.code,{children:"%:%:%"})," (next line above ",(0,s.jsx)(a.code,{children:"localhost"}),") to allowed hosts list."]}),"\n",(0,s.jsx)(a.h3,{id:"timestamp",children:"Timestamp"}),"\n",(0,s.jsxs)(a.p,{children:["The whole server always sets the clock in ",(0,s.jsx)(a.code,{children:"UTC"}),"."]}),"\n",(0,s.jsx)(a.p,{children:"A good idea to handle timezone is done by client processing (Javascript), both after getting the data from database/AJAX and before sending data/Posts to server."}),"\n",(0,s.jsxs)(a.p,{children:["If you don't care about timezone and you think it's safe to assume that your website is only accessed in one timezone, you can set the timezone in the backend using ",(0,s.jsx)(a.a,{href:"https://www.php.net/manual/en/function.date-default-timezone-set.php",children:"date_default_timezone_set"})," for PHP or ",(0,s.jsxs)(a.a,{href:"https://medium.com/developer-rants/time-zones-in-node-js-fc5a5b51906a",children:[(0,s.jsx)(a.code,{children:"TZ"})," env"]})," for non-PHP (set it to passenger's ",(0,s.jsx)(a.code,{children:"env_var_list"}),")."]})]})}const h=function(e={}){const{wrapper:a}=Object.assign({},(0,n.ah)(),e.components);return a?(0,s.jsx)(a,Object.assign({},e,{children:(0,s.jsx)(l,e)})):l(e)}},5251:(e,a,t)=>{t(7418);var s=t(7294),n=60103;if(a.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;n=r("react.element"),a.Fragment=r("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,a,t){var s,r={},c=null,l=null;for(s in void 0!==t&&(c=""+t),void 0!==a.key&&(c=""+a.key),void 0!==a.ref&&(l=a.ref),a)i.call(a,s)&&!d.hasOwnProperty(s)&&(r[s]=a[s]);if(e&&e.defaultProps)for(s in a=e.defaultProps)void 0===r[s]&&(r[s]=a[s]);return{$$typeof:n,type:e,key:c,ref:l,props:r,_owner:o.current}}a.jsx=c,a.jsxs=c},5893:(e,a,t)=>{e.exports=t(5251)},1151:(e,a,t)=>{t.d(a,{Zo:()=>i,ah:()=>r});var s=t(7294);const n=s.createContext({});function r(e){const a=s.useContext(n);return s.useMemo((()=>"function"==typeof e?e(a):{...a,...e}),[a,e])}const o={};function i({components:e,children:a,disableParentContext:t}){let i;return i=t?"function"==typeof e?e({}):e||o:r(e),s.createElement(n.Provider,{value:i},a)}}}]);
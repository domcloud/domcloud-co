/*! For license information please see 480e9142.f31bdb63.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8427],{7484:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var o=s(5893),t=s(1151);const r={title:"CMS",format:"mdx"},a="Deploy Popular CMS Apps",i={unversionedId:"deployment/cms",id:"deployment/cms",title:"CMS",description:"CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps.",source:"@site/docs/deployment/cms.md",sourceDirName:"deployment",slug:"/deployment/cms",permalink:"/docs/deployment/cms",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/cms.md",tags:[],version:"current",frontMatter:{title:"CMS",format:"mdx"},sidebar:"tutorialSidebar",previous:{title:"Deno",permalink:"/docs/deployment/deno"},next:{title:"Features",permalink:"/docs/features/"}},c={},l=[{value:"WordPress",id:"wordpress",level:2},{value:"Strapi",id:"strapi",level:2},{value:"Ghost",id:"ghost",level:2}];function p(e){const n=Object.assign({p:"p",h1:"h1",h2:"h2",a:"a",tabs:"tabs",tabitem:"tabitem",pre:"pre",code:"code"},(0,t.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,o.jsx)(n.h1,{id:"deploy-popular-cms-apps",children:"Deploy Popular CMS Apps"}),"\n",(0,o.jsx)(n.p,{children:"CMS (Content Management System) is a software that allows you to create and manage content on a website without or with minimal coding experience. DOM Cloud supports many popular CMS apps."}),"\n",(0,o.jsx)(n.h2,{id:"wordpress",children:(0,o.jsx)(n.a,{href:"https://wordpress.org",children:"WordPress"})}),"\n",(0,o.jsxs)(n.tabs,{children:["\n  ",(0,o.jsxs)(n.tabitem,{value:"wordpress-recipe",label:"Recipe",default:!0,children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'source: https://wordpress.org/latest.zip\ndirectory: wordpress\nfeatures:\n- mysql\nnginx:\n  fastcgi: on\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\n  - match: ~ /xmlrpc\\.php$\n    deny: all\ncommands:\n- cp wp-config-sample.php wp-config.php\n- sed -i "s/database_name_here/${DATABASE}/g" wp-config.php\n- sed -i "s/username_here/${USERNAME}/g" wp-config.php\n- sed -i "s/password_here/${PASSWORD}/g" wp-config.php\n- sed -i "s/utf8/utf8mb4/g" wp-config.php\n'})}),"\n",(0,o.jsxs)(n.p,{children:["The script above downloads and extracts WordPress and setup the database.\nAlso blocks ",(0,o.jsx)(n.code,{children:"/xmlrpc.php"})," because it's a common DoS attack."]}),"\n",(0,o.jsxs)(n.p,{children:["To install ",(0,o.jsx)(n.code,{children:"wp-cli"}),", a WordPress command line tool:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"commands:\n- curl -O https://raw.githubusercontent.com/wp-cli/builds/gh-pages/phar/wp-cli.phar\n- chmod +x wp-cli.phar\n- mkdir -p ~/.local/bin/\n- mv wp-cli.phar ~/.local/bin/wp\n"})}),"\n  "]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"strapi",children:(0,o.jsx)(n.a,{href:"https://strapi.io",children:"Strapi"})}),"\n",(0,o.jsxs)(n.tabs,{children:["\n  ",(0,o.jsxs)(n.tabitem,{value:"strapi-recipe",label:"Recipe",default:!0,children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"source: clear\nfeatures:\n- ssl\n- node lts\nnginx:\n  root: public_html/public\n  passenger:\n    enabled: 'on'\n    app_env: development\n    app_start_command: env PORT=$PORT yarn develop\n  locations:\n    - match: /admin/\n      alias: public_html/build/\ncommands:\n- yarn create strapi-app . --quickstart --no-run\n- echo JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` > .env\n- echo APP_KEYS=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo ADMIN_JWT_SECRET=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo API_TOKEN_SALT=`node -e \"console.log(crypto.randomBytes(16).toString('base64'))\"` >> .env\n- echo STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} >> .env\n- STRAPI_ADMIN_BACKEND_URL=//${DOMAIN} yarn build\n"})}),"\n  "]}),"\n  ",(0,o.jsxs)(n.tabitem,{value:"strapi-prod",label:"Production Config",default:!0,children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  root: public_html/public\n  passenger:\n    enabled: 'on'\n    app_start_command: env PORT=$PORT yarn start\n  locations:\n    - match: /admin/\n      alias: public_html/build/\n"})}),"\n  "]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"ghost",children:(0,o.jsx)(n.a,{href:"https://ghost.org",children:"Ghost"})}),"\n",(0,o.jsxs)(n.tabs,{children:["\n  ",(0,o.jsxs)(n.tabitem,{value:"ghost-recipe",label:"Recipe",default:!0,children:["\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'\nsource: https://github.com/TryGhost/Ghost/releases/download/v4.4.0/Ghost-4.4.0.zip\nroot: public_html/public\nnginx:\n  ssl: enforce\n  fastcgi: off\n  passenger:\n    enabled: on\nfeatures:\n- mysql\n- ssl\ncommands:\n- echo export PATH="$HOME/public_html/node_modules/.bin:$PATH" > ~/.bash_profile\n- source ~/.bash_profile\n- mkdir public\n- echo "require(\'./index.js\');" > app.js\n- wget -q -O config.production.json https://gist.githubusercontent.com/willnode/45e722be156736ea3a08f29d37ad997c/raw/93dbbecc209ac9e6b9eb0a9d22ece1f14ab54e67/ghost-production-config.json\n- \'sed -ri "s/username_here/${USERNAME}/g" config.production.json\'\n- \'sed -ri "s/password_here/${PASSWORD}/g" config.production.json\'\n- \'sed -ri "s/database_here/${DATABASE}/g" config.production.json\'\n- \'sed -ri "s/url_here/https:\\/\\/${DOMAIN}/g" config.production.json\'\n- yarn install --production --no-progress\n- knex-migrator init\n'})}),"\n"]}),"\n"]})]})}const d=function(e={}){const{wrapper:n}=Object.assign({},(0,t.ah)(),e.components);return n?(0,o.jsx)(n,Object.assign({},e,{children:(0,o.jsx)(p,e)})):p(e)}},5251:(e,n,s)=>{s(7418);var o=s(7294),t=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var r=Symbol.for;t=r("react.element"),n.Fragment=r("react.fragment")}var a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i=Object.prototype.hasOwnProperty,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var o,r={},l=null,p=null;for(o in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(p=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:p,props:r,_owner:a.current}}n.jsx=l,n.jsxs=l},5893:(e,n,s)=>{e.exports=s(5251)},1151:(e,n,s)=>{s.d(n,{Zo:()=>i,ah:()=>r});var o=s(7294);const t=o.createContext({});function r(e){const n=o.useContext(t);return o.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const a={};function i({components:e,children:n,disableParentContext:s}){let i;return i=s?"function"==typeof e?e({}):e||a:r(e),o.createElement(t.Provider,{value:i},n)}}}]);
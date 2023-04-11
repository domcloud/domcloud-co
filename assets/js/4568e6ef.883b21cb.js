"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6537],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),u=s(n),c=i,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(7462),i=(n(7294),n(3905));const o={layout:"docs",title:"The System Runner"},l="The Runner",r={unversionedId:"features/runner",id:"features/runner",title:"The System Runner",description:"The runner is the core feature in DOM Cloud. It let's you to perform automatic configuration all by convenience of a single script. It's also a CI (Continous Integration) tool that perform some tasks inside your website.",source:"@site/docs/features/runner.md",sourceDirName:"features",slug:"/features/runner",permalink:"/docs/features/runner",draft:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/features/runner.md",tags:[],version:"current",frontMatter:{layout:"docs",title:"The System Runner"},sidebar:"tutorialSidebar",previous:{title:"NGINX and App Daemon",permalink:"/docs/features/nginx"},next:{title:"Linux Utilities",permalink:"/docs/features/service"}},p={},s=[{value:"<code>source</code>",id:"source",level:2},{value:"<code>url</code>",id:"url",level:3},{value:"<code>type</code>",id:"type",level:3},{value:"<code>directory</code> (<code>type: extract</code> only)",id:"directory-type-extract-only",level:3},{value:"<code>branch</code> (<code>type: clone</code> only)",id:"branch-type-clone-only",level:3},{value:"<code>shallow</code> (<code>type: clone</code> only)",id:"shallow-type-clone-only",level:3},{value:"<code>submodules</code> (<code>type: clone</code> only)",id:"submodules-type-clone-only",level:3},{value:"<code>features</code>",id:"features",level:2},{value:"<code>mysql</code>",id:"mysql",level:3},{value:"<code>postgresql</code>",id:"postgresql",level:3},{value:"<code>dns</code>",id:"dns",level:3},{value:"<code>firewall</code>",id:"firewall",level:3},{value:"<code>ssl</code>",id:"ssl",level:3},{value:"<code>root</code>",id:"root",level:3},{value:"<code>php</code>",id:"php",level:3},{value:"<code>node</code>",id:"node",level:3},{value:"<code>python</code>",id:"python",level:3},{value:"<code>ruby</code>",id:"ruby",level:3},{value:"<code>deno</code>",id:"deno",level:3},{value:"<code>go</code>",id:"go",level:3},{value:"<code>rust</code>",id:"rust",level:3},{value:"<code>nginx</code>",id:"nginx",level:2},{value:"<code>ssl</code>",id:"ssl-1",level:3},{value:"<code>fastcgi</code>",id:"fastcgi",level:3},{value:"<code>error_pages</code>",id:"error_pages",level:3},{value:"<code>passenger</code>",id:"passenger",level:2},{value:"<code>locations</code>",id:"locations",level:2},{value:"<code>commands</code>",id:"commands",level:2},{value:"Builtin envar for commands",id:"builtin-envar-for-commands",level:4},{value:"Builtin Git Credentials",id:"builtin-git-credentials",level:4},{value:"Time limit",id:"time-limit",level:4},{value:"<code>subdomains</code> and <code>subdomain</code>",id:"subdomains-and-subdomain",level:2}],d={toc:s};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-runner"},"The Runner"),(0,i.kt)("p",null,"The runner is the core feature in DOM Cloud. It let's you to perform automatic configuration all by convenience of a single script. It's also a CI (Continous Integration) tool that perform some tasks inside your website."),(0,i.kt)("p",null,"For common script deployments, you don't have to write it yourself. You can start from existing recipes from ",(0,i.kt)("a",{parentName:"p",href:"/docs/deployment/"},"the deployment page")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/domcloud/recipes"},"recipe repository"),"."),(0,i.kt)("p",null,"We make it as simple as possible to understand. We also make our runner script ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/domcloud/bridge"},"open sourced")," so you take a better view of how it works if you want that."),(0,i.kt)("p",null,"The script runner is in YAML format. For example to create a new WordPress instance:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'source:\n  url: https://wordpress.org/latest.zip\n  directory: wordpress\nfeatures: [mysql, ssl]\nnginx:\n  ssl: enforce\n  fastcgi: on\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\ncommands:\n- cp wp-config-sample.php wp-config.php\n- sed -i "s/database_name_here/${DATABASE}/g" wp-config.php\n- sed -i "s/username_here/${USERNAME}/g" wp-config.php\n- sed -i "s/password_here/${PASSWORD}/g" wp-config.php\n- sed -i "s/utf8/utf8mb4/g" wp-config.php\n')),(0,i.kt)("p",null,"With a quick look, you can tell that it will download ",(0,i.kt)("inlineCode",{parentName:"p"},"https://wordpress.org/latest.zip")," extracting and moving it out of ",(0,i.kt)("inlineCode",{parentName:"p"},"wordpress")," directory, then creating a mysql database and signing SSL certificate, also configuring the correct NGINX record for WordPress and perform quick ",(0,i.kt)("inlineCode",{parentName:"p"},"sed")," operations to inject database credentials directly to the config files."),(0,i.kt)("p",null,"Actually you don't have to understand them right now. If you used some popular software or framework, you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/domcloud/dom-templates"},"template repository"),"."),(0,i.kt)("p",null,"Here's what you can configure:"),(0,i.kt)("h2",{id:"source"},(0,i.kt)("inlineCode",{parentName:"h2"},"source")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". If it a string, it will be the ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"."),(0,i.kt)("p",null,"If this value is set, it will download contents inside the host. The content can be either a ZIP file or a Git repository (to perform clone)."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"CAUTION: This action will always ",(0,i.kt)("strong",{parentName:"p"},"overwrite")," all contents inside the host.")),(0,i.kt)("h3",{id:"url"},(0,i.kt)("inlineCode",{parentName:"h3"},"url")),(0,i.kt)("p",null,"The zip (or clone) URL to download. Required."),(0,i.kt)("h3",{id:"type"},(0,i.kt)("inlineCode",{parentName:"h3"},"type")),(0,i.kt)("p",null,"To ",(0,i.kt)("inlineCode",{parentName:"p"},"extract")," a ZIP file or ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," a repo. If omitted, it autodetects whether it is a ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"gitlab.com")," URL and perform ",(0,i.kt)("inlineCode",{parentName:"p"},"clone")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"extract"),"."),(0,i.kt)("h3",{id:"directory-type-extract-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"directory")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: extract")," only)"),(0,i.kt)("p",null,"Specify the folder name to move out of ZIP file after extraction. This also can be specified from ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"'s hash. If omitted, no move operation performed."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For legacy reason, a ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," in root config will works too, it will be converted as ",(0,i.kt)("inlineCode",{parentName:"p"},"source.directory"),".")),(0,i.kt)("h3",{id:"branch-type-clone-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"branch")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: clone")," only)"),(0,i.kt)("p",null,"Specify the clone branch to get checked out. This also can be specified from directory or ",(0,i.kt)("inlineCode",{parentName:"p"},"url"),"'s hash. If omitted, the default branch is checked out."),(0,i.kt)("h3",{id:"shallow-type-clone-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"shallow")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: clone")," only)"),(0,i.kt)("p",null,"Do shallow clone? Default to ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),". It is recommended to leave it that way to keep ",(0,i.kt)("inlineCode",{parentName:"p"},".git")," internal size low."),(0,i.kt)("h3",{id:"submodules-type-clone-only"},(0,i.kt)("inlineCode",{parentName:"h3"},"submodules")," (",(0,i.kt)("inlineCode",{parentName:"h3"},"type: clone")," only)"),(0,i.kt)("p",null,"Do Recursive clone of submodules? Default to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"features"},(0,i.kt)("inlineCode",{parentName:"h2"},"features")),(0,i.kt)("p",null,"Type: Array of ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),". If one item is a string, it will be converted to object (.e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql on")," become ",(0,i.kt)("inlineCode",{parentName:"p"},"{ mysql: on }"),")."),(0,i.kt)("p",null,"This configures all features available for the host in DOM Cloud."),(0,i.kt)("h3",{id:"mysql"},(0,i.kt)("inlineCode",{parentName:"h3"},"mysql")),(0,i.kt)("p",null,"Configure MariaDB (MySQL) Database Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql on")," Enable MariaDB and create default DB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql create <dbname>")," Create a new database with ",(0,i.kt)("inlineCode",{parentName:"li"},"<dbname>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql drop <dbname>")," Drop a database with ",(0,i.kt)("inlineCode",{parentName:"li"},"<dbname>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mysql off"),". Disables ",(0,i.kt)("inlineCode",{parentName:"li"},"mysql")," feature. ",(0,i.kt)("strong",{parentName:"li"},"Caution: Also drop all DB  permanently"),".")),(0,i.kt)("h3",{id:"postgresql"},(0,i.kt)("inlineCode",{parentName:"h3"},"postgresql")),(0,i.kt)("p",null,"Configure PostgreSQL Database Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgresql")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"postgresql on")," Enable PostgreSQL and create default DB."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgresql create <dbname>")," Create a new database with ",(0,i.kt)("inlineCode",{parentName:"li"},"<dbname>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgresql drop <dbname>")," Drop a database with ",(0,i.kt)("inlineCode",{parentName:"li"},"<dbname>"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"postgresql off"),". Disables ",(0,i.kt)("inlineCode",{parentName:"li"},"postgresql")," feature. ",(0,i.kt)("strong",{parentName:"li"},"Caution: Also drop all DB permanently"),".")),(0,i.kt)("h3",{id:"dns"},(0,i.kt)("inlineCode",{parentName:"h3"},"dns")),(0,i.kt)("p",null,"Configure BIND DNS Server."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"dns on")," Enable DNS server."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns add <type> <value>")," Add a record."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns rem <type> <value>")," Deletes a record."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dns off"),". Disables ",(0,i.kt)("inlineCode",{parentName:"li"},"dns")," feature. ",(0,i.kt)("strong",{parentName:"li"},"Caution: Also clears all DNS records"),".")),(0,i.kt)("p",null,"You can add multiple records with lists. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"features:\n- dns:\n  - add a sub-a 1.2.3.4\n  - add aaaa sub-a 1.2.3.4\n  - add cname sub-b example.net.\n  - add cname sub-c example.net.\n")),(0,i.kt)("p",null,"DNS records for child server is handled automatically."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When applying CNAME, looks out for the trailing dot (",(0,i.kt)("inlineCode",{parentName:"p"},"."),") at the end of CNAME values. "),(0,i.kt)("p",{parentName:"admonition"},"It is required to specify the root domain, otherwise it will be appended with the parent domain.")),(0,i.kt)("h3",{id:"firewall"},(0,i.kt)("inlineCode",{parentName:"h3"},"firewall")),(0,i.kt)("p",null,"Configure Whitelist Firewall."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firewall on")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"firewall")," Enable firewall."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"firewall off")," Disable firewall.")),(0,i.kt)("p",null,"Firewall is an additional protection to make sure the host won't send any outgoing request not defined ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/domcloud/bridge/blob/main/src/whitelist/sites.conf"},"in the whitelist"),". "),(0,i.kt)("p",null,"It's intended for use of hosts with ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/domcloud/domcloud/issues/10"},"low security measures"),". It's recommended for any host who doesn't use any third-party API."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Please note due to obvious PHP weakness in security, it's mandatory to turn on this feature for WordPress or any weakly protected PHP server.")),(0,i.kt)("h3",{id:"ssl"},(0,i.kt)("inlineCode",{parentName:"h3"},"ssl")),(0,i.kt)("p",null,"Attempt to renew SSL certificate with Let's Encrypt."),(0,i.kt)("h3",{id:"root"},(0,i.kt)("inlineCode",{parentName:"h3"},"root")),(0,i.kt)("p",null,"Set directory root path. This also changes the ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," directive in NGINX config."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Because of legacy reason, this is also available in root config.")),(0,i.kt)("h3",{id:"php"},(0,i.kt)("inlineCode",{parentName:"h3"},"php")),(0,i.kt)("p",null,"Set PHP (FastCGI) version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"php 7.4")," (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"php 8.0")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"php 8.1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"php 8.2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"php latest"))),(0,i.kt)("p",null,"Remember that ",(0,i.kt)("inlineCode",{parentName:"p"},"php 8.x")," is an active release. "),(0,i.kt)("p",null,"This also sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"php")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"composer"),") to the right version in CLI/SSH. "),(0,i.kt)("p",null,"PHP files that served through NginX are served with ",(0,i.kt)("inlineCode",{parentName:"p"},"php-fpm")," (FastCGI Process Manager)."),(0,i.kt)("h3",{id:"node"},(0,i.kt)("inlineCode",{parentName:"h3"},"node")),(0,i.kt)("p",null,"Install specific NodeJS version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"node lts")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node beta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node x.y.z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node off"))),(0,i.kt)("p",null,"By default it's Node 16.x provided from system."),(0,i.kt)("p",null,"This also sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"yarn"),", etc.) to the right version in CLI/SSH. This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://webinstall.dev/node"},"webi"),"."),(0,i.kt)("h3",{id:"python"},(0,i.kt)("inlineCode",{parentName:"h3"},"python")),(0,i.kt)("p",null,"Install specific Python version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"python latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python x.y")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python x.y.z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python off"))),(0,i.kt)("p",null,"By default it's Python 3.9 provided from system."),(0,i.kt)("p",null,"This also sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"python")," (and ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),") to the right version in CLI/SSH. This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pyenv/pyenv"},"pyenv"),"."),(0,i.kt)("h3",{id:"ruby"},(0,i.kt)("inlineCode",{parentName:"h3"},"ruby")),(0,i.kt)("p",null,"Install specific Ruby version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ruby")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"ruby latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ruby x.y.z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ruby off"))),(0,i.kt)("p",null,"By default it's Ruby 3.0 provided from system. This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://rvm.io"},"rvm"),"."),(0,i.kt)("h3",{id:"deno"},(0,i.kt)("inlineCode",{parentName:"h3"},"deno")),(0,i.kt)("p",null,"Install specific Deno version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deno")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"deno latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deno beta")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deno x.y.z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"deno off"))),(0,i.kt)("p",null,"There's no default Deno version provided from system."),(0,i.kt)("p",null,"This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://webinstall.dev/deno"},"webi"),"."),(0,i.kt)("h3",{id:"go"},(0,i.kt)("inlineCode",{parentName:"h3"},"go")),(0,i.kt)("p",null,"Install specific Go version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"go latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go x.y.z"),"  "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"go off"))),(0,i.kt)("p",null,"There's no default Go version provided from system."),(0,i.kt)("p",null,"This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://webinstall.dev/golang"},"webi"),"."),(0,i.kt)("h3",{id:"rust"},(0,i.kt)("inlineCode",{parentName:"h3"},"rust")),(0,i.kt)("p",null,"Install specific Rust version. Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rust")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"rust latest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rust x.y.z")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rust off"))),(0,i.kt)("p",null,"There's no default Rust version provided from system."),(0,i.kt)("p",null,"This installation is powered by ",(0,i.kt)("a",{parentName:"p",href:"https://rustup.rs"},"rustup"),"."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"nginx"},(0,i.kt)("inlineCode",{parentName:"h2"},"nginx")),(0,i.kt)("p",null,"Type: ",(0,i.kt)("inlineCode",{parentName:"p"},"object"),"."),(0,i.kt)("p",null,"This is the NGINX configuration for a given host."),(0,i.kt)("p",null,"All configurations below are not preserved at each config update. It's recommended to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"NGINX")," tab in the dashboard to reconfigure NGINX."),(0,i.kt)("h3",{id:"ssl-1"},(0,i.kt)("inlineCode",{parentName:"h3"},"ssl")),(0,i.kt)("p",null,"HTTPS options: ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," (default), ",(0,i.kt)("inlineCode",{parentName:"p"},"always")," (always redirect HTTP to HTTPS), ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," (not recommended)."),(0,i.kt)("h3",{id:"fastcgi"},(0,i.kt)("inlineCode",{parentName:"h3"},"fastcgi")),(0,i.kt)("p",null,"Whether to enable or not enable PHP file execution: ",(0,i.kt)("inlineCode",{parentName:"p"},"on")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"off"),". If omitted, ",(0,i.kt)("inlineCode",{parentName:"p"},"off")," is the default."),(0,i.kt)("p",null,"You can override PHP settings via the ",(0,i.kt)("inlineCode",{parentName:"p"},".user.ini")," file in the document root. Once changed it will not change immediately due to cache, but usually takes no more than 5 minutes."),(0,i.kt)("h3",{id:"error_pages"},(0,i.kt)("inlineCode",{parentName:"h3"},"error_pages")),(0,i.kt)("p",null,"List of error pages command. It's particularly useful for static websites. Read on ",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#error_page"},"the NGINX docs"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"404 /404.html"),": Show ",(0,i.kt)("inlineCode",{parentName:"li"},"404")," error page as ",(0,i.kt)("inlineCode",{parentName:"li"},"404.html"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"404 =200 /200.html"),": Assume ",(0,i.kt)("inlineCode",{parentName:"li"},"404")," error as 200 OK and show ",(0,i.kt)("inlineCode",{parentName:"li"},"200.html")," (SPA)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"500 502 503 504 /50x.html"),": Show ",(0,i.kt)("inlineCode",{parentName:"li"},"50x")," error as ",(0,i.kt)("inlineCode",{parentName:"li"},"50x.html"),".")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"passenger"},(0,i.kt)("inlineCode",{parentName:"h2"},"passenger")),(0,i.kt)("p",null,"If you want to run Non-PHP apps, you need to setup with ",(0,i.kt)("a",{parentName:"p",href:"https://www.phusionpassenger.com/"},"Passenger Phusion"),". Passenger is an additional layer on top of NGINX to run any non-PHP apps."),(0,i.kt)("p",null,"To enable non-PHP apps, at minimum you need these configuration:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"root: public_html/public\nnginx:\n  passenger:\n    enabled: on\n    app_start_command: node server.js --port=$PORT\n")),(0,i.kt)("p",null,"The configuration above will execute ",(0,i.kt)("inlineCode",{parentName:"p"},"node server.js --port=$PORT")," in the parent of root folder (in this case, ",(0,i.kt)("inlineCode",{parentName:"p"},"~/public_html"),"). Note that you always need to pass the ",(0,i.kt)("inlineCode",{parentName:"p"},"$PORT")," and use that as the port where your app is listening to. If your app accept port from environment instead you can use env like ",(0,i.kt)("inlineCode",{parentName:"p"},"env PORT=$PORT node server.js"),"."),(0,i.kt)("p",null,"For custom environment values you can leverage ",(0,i.kt)("inlineCode",{parentName:"p"},"app_env")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"env_var_list"),"."),(0,i.kt)("p",null,"To restart a non-PHP apps you can execute ",(0,i.kt)("inlineCode",{parentName:"p"},"passenger-config restart-app /")," in CLI/SSH. You can also make it ",(0,i.kt)("a",{parentName:"p",href:"https://www.phusionpassenger.com/library/admin/apache/restart_app.html#restart-txt"},"always restart")," if you have to."),(0,i.kt)("p",null,"Available options:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_enabled"},(0,i.kt)("inlineCode",{parentName:"a"},"enabled")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"on")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"off")," (default)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_env"},(0,i.kt)("inlineCode",{parentName:"a"},"app_env")),": environment setup. Either ",(0,i.kt)("inlineCode",{parentName:"li"},"production")," (default) or ",(0,i.kt)("inlineCode",{parentName:"li"},"development"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_env_var"},(0,i.kt)("inlineCode",{parentName:"a"},"env_var_list")),": array of environment values in the format of ",(0,i.kt)("inlineCode",{parentName:"li"},"KEY=VALUE"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_start_command"},(0,i.kt)("inlineCode",{parentName:"a"},"app_start_command")),": ",(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/advanced_guides/gls/"},"Passenger GLS")," command to start the app with ",(0,i.kt)("inlineCode",{parentName:"li"},"$PORT")," as the port where your app is listening to."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_friendly_error_pages"},(0,i.kt)("inlineCode",{parentName:"a"},"friendly_error_pages")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"on")," (default) or ",(0,i.kt)("inlineCode",{parentName:"li"},"off")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_base_uri"},(0,i.kt)("inlineCode",{parentName:"a"},"base_uri")),": base URL for the app (default is ",(0,i.kt)("inlineCode",{parentName:"li"},"/"),")."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_sticky_sessions"},(0,i.kt)("inlineCode",{parentName:"a"},"sticky_sessions")),": ",(0,i.kt)("inlineCode",{parentName:"li"},"on")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"off")," (default). Enable this for websocket support."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_document_root"},(0,i.kt)("inlineCode",{parentName:"a"},"document_root")),": path to public document root (default is ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"). This value is relative to the user ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME")," folder."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.phusionpassenger.com/docs/references/config_reference/nginx/#passenger_app_root"},(0,i.kt)("inlineCode",{parentName:"a"},"app_root")),": path to app root (default is parent of ",(0,i.kt)("inlineCode",{parentName:"li"},"root"),"). This value is relative to the user ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME")," folder.")),(0,i.kt)("p",null,"For non-GLS these options are available too:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"app_type"),": Type of App"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startup_file"),": Startup filename"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ruby"),": Ruby path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodejs"),": Nodejs path"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"python"),": Python path "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"meteor_app_settings"),": Meteor path")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("a",{parentName:"p",href:"https://www.phusionpassenger.com/passenger6"},"GLS (Generic Language Support)")," is a cool concept where you can run any language or binaries within NGINX with the help of Passenger. It's recommended to use GLS instead of the non-GLS options.")),(0,i.kt)("h2",{id:"locations"},(0,i.kt)("inlineCode",{parentName:"h2"},"locations")),(0,i.kt)("p",null,"Array objects which one or more of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"match"),": Matching URL location (required)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root"),": Root path (relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"alias"),": Alias path (relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"$HOME"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"rewrite"),": Rewrite URL directive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"try_files"),": Try files URL directive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"return"),": Return code directive"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fastcgi"),": (same as above)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"passenger"),": (same as above)")),(0,i.kt)("p",null,"Please read ",(0,i.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/http/ngx_http_core_module.html#location"},"NGINX Location directive")," for more information."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"proxy_pass"),", although it's popular, we're not supporting it because it's not a good practice to use it in a shared servers. You must use ",(0,i.kt)("inlineCode",{parentName:"p"},"passenger")," instead.")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"commands"},(0,i.kt)("inlineCode",{parentName:"h2"},"commands")),(0,i.kt)("p",null,"Type: array of ",(0,i.kt)("inlineCode",{parentName:"p"},"string"),"."),(0,i.kt)("p",null,"List of SSH commands in sequence. The starting directory is always ",(0,i.kt)("inlineCode",{parentName:"p"},"~/public_html"),". If any exit code detected to be not zero, the execution chain stop."),(0,i.kt)("p",null,"This is where all the things you usually put after the execution of ",(0,i.kt)("inlineCode",{parentName:"p"},"source"),". Things like installing depedencies, bundling frontend or injecting database credential."),(0,i.kt)("p",null,"The list of commands is always executed after the ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," and before ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"root")," list."),(0,i.kt)("h4",{id:"builtin-envar-for-commands"},"Builtin envar for commands"),(0,i.kt)("p",null,"Aside with the usual SSH commands, it does have an additional envar to help with scripting:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$USERNAME"),": The username."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$DATABASE"),": The database name (usually ",(0,i.kt)("inlineCode",{parentName:"li"},"${USERNAME}_db")," but can be changed if new database name is supplied before)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$PASSWORD"),": The user login password."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"$DOMAIN"),": The domain name.")),(0,i.kt)("p",null,"These envars also will be set:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CI=true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CONTINUOUS_INTEGRATION=true")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DEBIAN_FRONTEND=noninteractive")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LANG=en_US.UTF-8 LC_ALL=en_US.UTF-8"))),(0,i.kt)("h4",{id:"builtin-git-credentials"},"Builtin Git Credentials"),(0,i.kt)("p",null,"If you have logged in with GitHub with repo access, an envar ",(0,i.kt)("inlineCode",{parentName:"p"},"$GITHUB_TOKEN")," will be available for you to use. Together with Git Credentials API, it will grant the access to your private repos along with all ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," commands run from the Runner."),(0,i.kt)("p",null,"This is useful for cloning or pulling private repos after a webhook is received, for example."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This does have security implication and we have taken some security measures to prevent leaks. For example, since it's provided within envar, you ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," commands will break if run within SSH. That's because its doesn't saved anywhere in the server."),(0,i.kt)("p",{parentName:"admonition"},"We doesn't prevent you, for example to run ",(0,i.kt)("inlineCode",{parentName:"p"},"echo $GITHUB_TOKEN")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"commands")," list and use it as the token used for SSH session. But we do recommend you to not do that.")),(0,i.kt)("h4",{id:"time-limit"},"Time limit"),(0,i.kt)("p",null,"The time limit for overall script in single run is 10 minutes. If it's exceeded, the execution chain will automatically stop."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"subdomains-and-subdomain"},(0,i.kt)("inlineCode",{parentName:"h2"},"subdomains")," and ",(0,i.kt)("inlineCode",{parentName:"h2"},"subdomain")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"subdomains")," is used to run specific commands for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"subdomain")," name. It's an array of objects with ",(0,i.kt)("inlineCode",{parentName:"p"},"subdomain"),", some of the ",(0,i.kt)("inlineCode",{parentName:"p"},"features")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"commands")," keys."))}m.isMDXComponent=!0}}]);
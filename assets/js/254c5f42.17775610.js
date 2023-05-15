/*! For license information please see 254c5f42.17775610.js.LICENSE.txt */
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5398],{5970:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var s=i(5893),o=i(1151);const t={title:"PHP",sidebar_position:2,format:"mdx"},r="Deploy PHP Apps",a={unversionedId:"deployment/php",id:"deployment/php",title:"PHP",description:"PHP is a popular programming language for web development. PHP is served in production server using PHP-FPM.",source:"@site/docs/deployment/php.md",sourceDirName:"deployment",slug:"/deployment/php",permalink:"/docs/deployment/php",draft:!1,unlisted:!1,editUrl:"https://github.com/domcloud/domcloud-co/tree/master/docs/deployment/php.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"PHP",sidebar_position:2,format:"mdx"},sidebar:"tutorialSidebar",previous:{title:"Static Sites",permalink:"/docs/deployment/static-site"},next:{title:"Node.js",permalink:"/docs/deployment/node"}},l={},d=[{value:"Recipes",id:"recipes",level:2},{value:"Development Mode",id:"development-mode",level:3},{value:"Init in Development Mode",id:"init-in-development-mode",level:3},{value:"Switch to Production Mode",id:"switch-to-production-mode",level:3},{value:"Init in Development Mode",id:"init-in-development-mode-1",level:3},{value:"Enable Laravel UI",id:"enable-laravel-ui",level:3},{value:"Switch to Production Mode",id:"switch-to-production-mode-1",level:3},{value:"NGINX Setup",id:"nginx-setup",level:2},{value:"<code>fastcgi</code> Options",id:"fastcgi-options",level:3},{value:"<code>fastcgi</code> Options <code>off</code>",id:"fastcgi-options-off",level:4},{value:"<code>fastcgi</code> Options <code>on</code>",id:"fastcgi-options-on",level:4},{value:"<code>fastcgi</code> Options <code>always</code>",id:"fastcgi-options-always",level:4},{value:"Multiple Directory Setup",id:"multiple-directory-setup",level:3},{value:"Rewrite root directory",id:"rewrite-root-directory",level:3},{value:"Reroute index.php",id:"reroute-indexphp",level:3},{value:"Multiple website in a domain",id:"multiple-website-in-a-domain",level:3},{value:"PHP environment setup",id:"php-environment-setup",level:2},{value:"Composer install",id:"composer-install",level:2},{value:"Clearing composer cache",id:"clearing-composer-cache",level:3},{value:"PHP INI configuration",id:"php-ini-configuration",level:2},{value:"PHP Error Logging",id:"php-error-logging",level:2},{value:"Restarting PHP",id:"restarting-php",level:2}];function c(e){const n=Object.assign({p:"p",h1:"h1",a:"a",h2:"h2",tabs:"tabs",tabitem:"tabitem",h3:"h3",pre:"pre",code:"code",admonition:"admonition",hr:"hr",h4:"h4",ol:"ol",li:"li",ul:"ul"},(0,o.ah)(),e.components);return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"import Tabs from '@theme/Tabs';\nimport TabItem from '@theme/TabItem';"}),"\n",(0,s.jsx)(n.h1,{id:"deploy-php-apps",children:"Deploy PHP Apps"}),"\n",(0,s.jsx)(n.p,{children:"PHP is a popular programming language for web development. PHP is served in production server using PHP-FPM."}),"\n",(0,s.jsxs)(n.p,{children:["Popular PHP recipes is ",(0,s.jsx)(n.a,{href:"https://codeigniter.com/",children:"CodeIgniter"})," and ",(0,s.jsx)(n.a,{href:"https://laravel.com/",children:"Laravel"}),". Please read our ",(0,s.jsx)(n.a,{href:"/docs/features/runner",children:"Runner's Guide"})," first if you haven't."]}),"\n",(0,s.jsx)(n.h2,{id:"recipes",children:"Recipes"}),"\n",(0,s.jsxs)(n.tabs,{children:["\n  ",(0,s.jsxs)(n.tabitem,{value:"simple",label:"General PHP",default:!0,children:["\n",(0,s.jsx)(n.h3,{id:"development-mode",children:"Development Mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'source: clear\nnginx:\n  fastcgi: on\ncommands:\n- echo "<h1>Hello, World!</h1>" > index.php\n- echo "<?php phpinfo(15);" > phpinfo.php\n- echo "display_errors = On" > .user.ini\n- echo "display_startup_errors = On" >> .user.ini\n'})}),"\n",(0,s.jsx)(n.p,{children:'This creates a simple PHP that outputs "Hello, World!" and load some useful development features.'}),"\n  "]}),"\n  ",(0,s.jsxs)(n.tabitem,{value:"codeigniter",label:"CodeIgniter",children:["\n",(0,s.jsx)(n.h3,{id:"init-in-development-mode",children:"Init in Development Mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n- mysql\nnginx:\n  root: public_html/public\n  fastcgi: on\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\ncommands:\n- composer create-project codeigniter4/appstarter .\n- cp env .env\n- sed -ri "s/.*database.default.database.*/database.default.database = ${DATABASE}/g" .env\n- sed -ri "s/.*database.default.username.*/database.default.username = ${USERNAME}/g" .env\n- sed -ri "s/.*database.default.password.*/database.default.password = ${PASSWORD}/g" .env\n- sed -ri "s/.*app.baseURL.*/app.baseURL = https:\\/\\/${DOMAIN}/g" .env\n- composer install\n'})}),"\n",(0,s.jsx)(n.p,{children:"This set up a fresh CodeIgniter project in development mode with a database initialized."}),"\n",(0,s.jsx)(n.h3,{id:"switch-to-production-mode",children:"Switch to Production Mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"commands:\n- 'sed -ri \"s/# CI_ENVIRONMENT = production/CI_ENVIRONMENT = production/g\" .env'\n- composer install --no-dev --optimize-autoloader\n"})}),"\n",(0,s.jsx)(n.p,{children:"This sets up CodeIgniter in production mode."}),"\n  "]}),"\n  ",(0,s.jsxs)(n.tabitem,{value:"laravel",label:"Laravel",children:["\n",(0,s.jsx)(n.h3,{id:"init-in-development-mode-1",children:"Init in Development Mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'source: clear\nfeatures:\n- php latest\n- mysql\nnginx:\n  root: public_html/public\n  fastcgi: on\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\ncommands:\n- composer create-project laravel/laravel .\n- cp .env.example .env\n- sed -i "s/DB_HOST=127.0.0.1/DB_HOST=localhost/g" .env\n- sed -ri "s/DB_DATABASE=.*/DB_DATABASE=${DATABASE}/g" .env\n- sed -ri "s/DB_USERNAME=.*/DB_USERNAME=${USERNAME}/g" .env\n- sed -ri "s/DB_PASSWORD=.*/DB_PASSWORD=${PASSWORD}/g" .env\n- sed -ri "s/APP_URL=.*/APP_URL=http:\\/\\/${DOMAIN}/g" .env\n- composer install\n- php artisan migrate:fresh\n- php artisan key:generate\n- php artisan storage:link\n'})}),"\n",(0,s.jsx)(n.p,{children:"This set up a fresh Laravel project in development mode with a database initialized."}),"\n",(0,s.jsx)(n.h3,{id:"enable-laravel-ui",children:"Enable Laravel UI"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"commands:\n- composer require laravel/ui\n- php artisan ui bootstrap \u2013-auth\n- npm install\n- npm run build\n"})}),"\n",(0,s.jsx)(n.p,{children:"This enables Laravel UI with Bootstrap and authentication."}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsx)(n.p,{children:"If you wish to enable development mode with Laravel UI, specify the host IP address and random ephemeral ports. Run this in CLI/SSH:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'npm run dev -- --host `hostname -I | cut -d " " -f1` --port `shuf -n 1 -i 49152-65535`\n'})}),(0,s.jsxs)(n.p,{children:["Note: this doesn't work with HTTPS, only run it in development mode. You might need to set the ",(0,s.jsx)(n.code,{children:"APP_URL"})," to ",(0,s.jsx)(n.code,{children:"http://..."})," in ",(0,s.jsx)(n.code,{children:".env"}),"."]})]}),"\n",(0,s.jsx)(n.h3,{id:"switch-to-production-mode-1",children:"Switch to Production Mode"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'features:\n- ssl\ncommands:\n- sed -ri "s/APP_DEBUG=true/APP_DEBUG=false/g" .env\n- sed -ri "s/http:\\/\\//https:\\/\\//g" .env\n- composer install --optimize-autoloader\n- npm run build\n'})}),"\n",(0,s.jsx)(n.p,{children:"This switches Laravel to production mode."}),"\n  "]}),"\n"]}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.p,{children:"Let's extract those recipes meaning individually."}),"\n",(0,s.jsx)(n.h2,{id:"nginx-setup",children:"NGINX Setup"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/features/nginx",children:"NGINX"})," can be configured to serve PHP files. PHP files are served by the PHP-FPM server. This works by writing ",(0,s.jsx)(n.code,{children:"fastcgi_pass"})," directive in the NGINX configuration, which points to underlying PHP-FPM server proxy for given host."]}),"\n",(0,s.jsx)(n.p,{children:"The minimum configuration to enable PHP is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  fastcgi: on\n"})}),"\n",(0,s.jsxs)(n.h3,{id:"fastcgi-options",children:[(0,s.jsx)(n.code,{children:"fastcgi"})," Options"]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/features/runner#fastcgi",children:(0,s.jsx)(n.code,{children:"fastcgi"})})," option has three options: ",(0,s.jsx)(n.code,{children:"on"}),", ",(0,s.jsx)(n.code,{children:"off"}),", ",(0,s.jsx)(n.code,{children:"always"}),". The difference between three options:"]}),"\n",(0,s.jsxs)(n.h4,{id:"fastcgi-options-off",children:[(0,s.jsx)(n.code,{children:"fastcgi"})," Options ",(0,s.jsx)(n.code,{children:"off"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"location ~ \\.php$ {\n    return 404;\n    fastcgi_pass ....;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This essentially disables PHP support in NGINX because it directly return 404 without being forwarded to ",(0,s.jsx)(n.code,{children:"fastcgi"}),". This is the default value for ",(0,s.jsx)(n.code,{children:"fastcgi"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"fastcgi-options-on",children:[(0,s.jsx)(n.code,{children:"fastcgi"})," Options ",(0,s.jsx)(n.code,{children:"on"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"location ~ \\.php$ {\n    try_files $uri =404;\n    fastcgi_pass ......;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This detects all URLs that ends with ",(0,s.jsx)(n.code,{children:".php"})," and forwards it to the PHP-FPM server. However, if the file is not found, it will return 404 without being forwarded to ",(0,s.jsx)(n.code,{children:"fastcgi"}),"."]}),"\n",(0,s.jsxs)(n.h4,{id:"fastcgi-options-always",children:[(0,s.jsx)(n.code,{children:"fastcgi"})," Options ",(0,s.jsx)(n.code,{children:"always"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"location ~ \\.php(/|$) {\n    fastcgi_pass ......;\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This detects all URLs that ends with ",(0,s.jsx)(n.code,{children:".php"})," or contains ",(0,s.jsx)(n.code,{children:".php"})," in the path and forwards it to the PHP-FPM server. The path after ",(0,s.jsx)(n.code,{children:".php"})," is sent as additional path in ",(0,s.jsx)(n.a,{href:"https://www.php.net/manual/en/reserved.variables.server.php#:~:text=the%20authentication%20type.-,%27PATH_INFO%27,-Contains%20any%20client",children:"$_SERVER['PATH_INFO']"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"multiple-directory-setup",children:"Multiple Directory Setup"}),"\n",(0,s.jsxs)(n.p,{children:["If you have multiple directory setup, it's important to write ",(0,s.jsx)(n.code,{children:"fastcgi: on"}),"\nwhere the directory should also serve PHP files, for example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  fastcgi: on\n  locations:\n  - match: /admin/\n    root: public_app/public\n    fastcgi: on\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The second ",(0,s.jsx)(n.code,{children:"fastcgi: on"})," will make sure PHP files inside ",(0,s.jsx)(n.code,{children:"/admin/"})," directory are also served by PHP-FPM."]}),"\n",(0,s.jsx)(n.h3,{id:"rewrite-root-directory",children:"Rewrite root directory"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  root: public_html/public\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default root directory is ",(0,s.jsx)(n.code,{children:"public_html"}),", where app files are extracted from recipes.\nSome modern frameworks like Laravel and CodeIgniter put static files inside ",(0,s.jsx)(n.code,{children:"public"})," folder to avoid leaking bare ",(0,s.jsx)(n.code,{children:"*.php"})," files be accessed maliciously and creates RCE attack."]}),"\n",(0,s.jsxs)(n.p,{children:["So when your app requires this behavior, you need to change the root folder to ",(0,s.jsx)(n.code,{children:"public_html/public"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Not to be confused with ",(0,s.jsx)(n.code,{children:"root:"})," inside ",(0,s.jsx)(n.code,{children:"nginx:"}),", this setting is placed outside of ",(0,s.jsx)(n.code,{children:"nginx:"}),"\nbecause it will also tell Virtualmin to use this folder as e.g. SSL verification requests."]})}),"\n",(0,s.jsx)(n.h3,{id:"reroute-indexphp",children:"Reroute index.php"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"nginx:\n  locations:\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\n  fastcgi: on\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you use frameworks, they also likes to handle custom routes. The ",(0,s.jsx)(n.code,{children:"try_files:"})," configuration\nhere is to instruct NGINX to try to serve the root ",(0,s.jsx)(n.code,{children:"/index.php"})," file in case no static files found\nin the given request URL."]}),"\n",(0,s.jsx)(n.h3,{id:"multiple-website-in-a-domain",children:"Multiple website in a domain"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"root: public_html\nnginx:\n  locations:\n  - match: ~ ^/(app|auth|api|web)/\n    root: public_app/public\n    fastcgi: on\n    try_files: $uri $uri/ /index.php$is_args$args\n  - match: /uploads/\n    alias: public_app/storage/app/public/\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\n  fastcgi: on\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The example setup above is a typical setup for combining a WordPress (the landing page) in ",(0,s.jsx)(n.code,{children:"~/public_html"}),"\nand a Laravel app in ",(0,s.jsx)(n.code,{children:"~/public_app"}),". Let's see what happens when we do requests from browser:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_html/index.php"})," and loads the landing page at ",(0,s.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/about"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_html/index.php"})," and loads the landing page at ",(0,s.jsx)(n.code,{children:"/about"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/api/oauth"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/index.php"})," and loads the Laravel app at ",(0,s.jsx)(n.code,{children:"/api/oauth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/web/login"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/index.php"})," and loads the Laravel app at ",(0,s.jsx)(n.code,{children:"/web/login"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/uploads/image.png"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/storage/app/public/image.png"})," and loads the image (if exist)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Let's see another approach to combine multiple websites in a domain."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'root: public_html\nnginx:\n  locations:\n  - match: /app/\n    alias: public_app/public\n    fastcgi: on\n    try_files: $uri $uri/ @app\n  - match: "@app"\n    /app/(.*)$ /app/index.php last\n  - match: /uploads/\n    alias: public_app/storage/app/public/\n  - match: /\n    try_files: $uri $uri/ /index.php$is_args$args\n  fastcgi: on\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The example above puts the whole laravel app inside ",(0,s.jsx)(n.code,{children:"/app/"})," subfolder. Let's see how it works:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_html/index.php"})," and loads the landing page at ",(0,s.jsx)(n.code,{children:"/"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/about"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_html/index.php"})," and loads the landing page at ",(0,s.jsx)(n.code,{children:"/about"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/app/api/oauth"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/index.php"})," and loads the Laravel app at ",(0,s.jsx)(n.code,{children:"/api/oauth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/app/web/login"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/index.php"})," and loads the Laravel app at ",(0,s.jsx)(n.code,{children:"/web/login"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/web/login"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_html/index.php"})," and loads the landing page at ",(0,s.jsx)(n.code,{children:"/web/login"})," (404 error)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/uploads/image.png"}),": Resolves to ",(0,s.jsx)(n.code,{children:"/public_app/storage/app/public/image.png"})," and loads the image (if exist)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can read more about putting Laravel in subfolder using NGINX in this ",(0,s.jsx)(n.a,{href:"https://stackoverflow.com/a/62965174/3908409",children:"StackOverflow answer"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"php-environment-setup",children:"PHP environment setup"}),"\n",(0,s.jsxs)(n.p,{children:["The default PHP version is ",(0,s.jsx)(n.code,{children:"7.4"}),", which is the default provided from the OS."]}),"\n",(0,s.jsx)(n.p,{children:"To change PHP version used in PHP-FPM to the latest one, put this in runner:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"features:\n- php latest\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can also use a fixed PHP version: ",(0,s.jsx)(n.code,{children:"php 7.4"}),", ",(0,s.jsx)(n.code,{children:"php 8.0"}),", ",(0,s.jsx)(n.code,{children:"php 8.1"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Unfortunately you can't use custom PHP version other than provided because it's tied to system daemon.\nWe always update the list to the latest supported version or latest major version starting from PHP 7.4."}),"\n",(0,s.jsx)(n.p,{children:"Support for PHP extensions is varies but you can request a ticket to be included, provided the extension is provided officially by PHP."}),"\n",(0,s.jsxs)(n.p,{children:["When PHP version is changed, it's also changing the ",(0,s.jsx)(n.code,{children:"php"})," and ",(0,s.jsx)(n.code,{children:"composer"})," version it used."]}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively, you can call the alternative ",(0,s.jsx)(n.code,{children:"php"})," version using ",(0,s.jsx)(n.code,{children:"php81"}),", ",(0,s.jsx)(n.code,{children:"php80"}),", ",(0,s.jsx)(n.code,{children:"php56"}),", etc."]}),"\n",(0,s.jsxs)(n.p,{children:["You can also do this for composer, e.g. ",(0,s.jsx)(n.code,{children:"php81 `which composer` install"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"composer-install",children:"Composer install"}),"\n",(0,s.jsx)(n.p,{children:"Composer is installed automatically. The good recommendation to install packages is with:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"composer install --no-dev --no-progress --optimize-autoloader\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-dev"})," to skip development packages (things like PHPUnit), to save space."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--no-progress"})," to skip the progress bar, because it's problematic when used inside runner."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"--optimize-autoloader"})," to speed up the package resolution in production."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"clearing-composer-cache",children:"Clearing composer cache"}),"\n",(0,s.jsx)(n.p,{children:"If your development is stable enough, you can clear the cache to save space by calling:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"composer clear-cache\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The composer cache locates in ",(0,s.jsx)(n.code,{children:"~/.composer/cache/"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"php-ini-configuration",children:"PHP INI configuration"}),"\n",(0,s.jsxs)(n.p,{children:["The PHP INI configuration is useful to tweak the PHP behavior such at upload size limits.\nWhile you can't directly change the PHP INI located in system files, you can create ",(0,s.jsx)(n.code,{children:".user.ini"}),"\ninto PHP root folder (typically ",(0,s.jsx)(n.code,{children:"~/public_html/.user.ini"}),") and tweak the config there."]}),"\n",(0,s.jsx)(n.p,{children:"An example of PHP INI configuration is:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:'title="~/public_html/.user.ini"',children:"upload_max_filesize = 32M\npost_max_size = 32M\n"})}),"\n",(0,s.jsxs)(n.p,{children:["See the list of available PHP INI configuration ",(0,s.jsx)(n.a,{href:"https://www.php.net/manual/en/ini.list.php",children:"in official PHP documentation"}),".\nTo see default values or if your change has been in effect, use ",(0,s.jsx)(n.code,{children:"phpinfo()"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["PHP INI doesn't work? You may need to wait until the PHP process is restarted, which typically about 5 minutes without traffic or after about 500 requests.\nNote that you can't change configs with ",(0,s.jsx)(n.code,{children:"PHP_INI_SYSTEM"})," level because it's only changeable in the main system INI files."]})}),"\n",(0,s.jsx)(n.h2,{id:"php-error-logging",children:"PHP Error Logging"}),"\n",(0,s.jsxs)(n.p,{children:["The error logs can be seen in ",(0,s.jsx)(n.code,{children:"NGINX Error Logs"})," in Virtualmin web UI.\nYou won't see error details in your website because we use production default settings."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to see the error details in website (not recommended!), change this setting in ",(0,s.jsx)(n.code,{children:".user.ini"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ini",metastring:'title="~/public_html/.user.ini"',children:"display_errors = On\ndisplay_startup_errors = On\n"})}),"\n",(0,s.jsx)(n.h2,{id:"restarting-php",children:"Restarting PHP"}),"\n",(0,s.jsx)(n.p,{children:"PHP doesn't need restart. Changing PHP files instantly changes the running server code."}),"\n",(0,s.jsxs)(n.p,{children:["The PHP-FPM instance itself is running as ",(0,s.jsx)(n.code,{children:"ondemand"})," and goes inactive after 5 minutes of no traffic."]})]})}const p=function(e={}){const{wrapper:n}=Object.assign({},(0,o.ah)(),e.components);return n?(0,s.jsx)(n,Object.assign({},e,{children:(0,s.jsx)(c,e)})):c(e)}},5251:(e,n,i)=>{i(7418);var s=i(7294),o=60103;if(n.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var t=Symbol.for;o=t("react.element"),n.Fragment=t("react.fragment")}var r=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var s,t={},d=null,c=null;for(s in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(t[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===t[s]&&(t[s]=n[s]);return{$$typeof:o,type:e,key:d,ref:c,props:t,_owner:r.current}}n.jsx=d,n.jsxs=d},5893:(e,n,i)=>{e.exports=i(5251)},1151:(e,n,i)=>{i.d(n,{Zo:()=>a,ah:()=>t});var s=i(7294);const o=s.createContext({});function t(e){const n=s.useContext(o);return s.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function a({components:e,children:n,disableParentContext:i}){let a;return a=i?"function"==typeof e?e({}):e||r:t(e),s.createElement(o.Provider,{value:a},n)}}}]);
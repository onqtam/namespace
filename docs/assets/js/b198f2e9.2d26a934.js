"use strict";(self.webpackChunkheadjack=self.webpackChunkheadjack||[]).push([[4754],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,d=p["".concat(s,".").concat(f)]||p[f]||u[f]||r;return n?o.createElement(d,i(i({ref:t},h),{},{components:n})):o.createElement(d,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2607:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(7462),a=(n(7294),n(3905));const r={},i="The host-centric web",c={unversionedId:"why/host_centric",id:"why/host_centric",title:"The host-centric web",description:"One major problem of the current host-centric internet architecture is that documents are host-certified - we refer to data by location instead of contents, but that leads to link rot & content drift. Information is fragile without an ecosystem of identity, reputation, references, context & liability - our digital history lacks a solid foundation. We can't expect everyone to be like @balajis - linking to articles from the Internet Archive (Example",source:"@site/docs/why/host_centric.md",sourceDirName:"why",slug:"/why/host_centric",permalink:"/docs/why/host_centric",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[],h={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-host-centric-web"},"The host-centric web"),(0,a.kt)("h1",{id:"the-host-centric-web--its-decay"},"The host-centric web & its decay"),(0,a.kt)("p",null,"One major problem of the current ",(0,a.kt)("a",{parentName:"p",href:"host_vs_data_centric.md#todays-web-host-centric"},"host-centric")," internet architecture is that documents are host-certified - we refer to data by location instead of contents, but that leads to link rot & content drift. Information is fragile without an ecosystem of identity, reputation, references, context & liability - our digital history lacks a solid foundation. We can't expect everyone to be like ",(0,a.kt)("a",{parentName:"p",href:"https://twitter.com/balajis"},"@balajis")," - linking to articles from the Internet Archive (",(0,a.kt)("a",{parentName:"p",href:"https://balajis.com/synthesis/"},"Example"),": look what ",(0,a.kt)("inlineCode",{parentName:"p"},'"Prussian"')," in that text is ",(0,a.kt)("a",{parentName:"p",href:"https://archive.ph/O2D45"},"pointing to"),") - this doesn't scale, data is still not self-authenticating and is reliant on a central point of failure. The internet is a ",(0,a.kt)("a",{parentName:"p",href:"https://cyber.harvard.edu/sites/default/files/2019-06/2019-06_zittrainIP.pdf"},"collective hallucination")," and is rotting. It's as permanent as a ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Sand_mandala"},"sand mandala")," and its just a matter of time for it to go away. Some great quotes:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"More than 98% of the information on the web is lost within 20 years" - ',(0,a.kt)("a",{parentName:"p",href:"https://a16z.com/2020/07/13/a16z-podcast-preserving-digital-history-how-to-close-the-webs-memory-hole/"},"a16z Podcast"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\"The problem is that the foundations are shifting sands, and we need something that has significantly more integrity at the bottom layer, we can't just bolt ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Uniform_Resource_Name"},"URNs"),' on as an afterthought. Some organizations are able to maintain persistent data over time, but it is in spite of the technology, not because of it." - ',(0,a.kt)("a",{parentName:"p",href:"https://news.ycombinator.com/item?id=27691442"},"tgbugs"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"Society can\u2019t understand itself if it can\u2019t be honest with itself, and it can\u2019t be honest with itself if it can only live in the present moment." - ',(0,a.kt)("a",{parentName:"p",href:"https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/"},"source"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"People tend to overlook the decay of the modern web, when in fact these numbers are extraordinary\u2014they represent a comprehensive breakdown in the chain of custody for facts." - ',(0,a.kt)("a",{parentName:"p",href:"https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/"},"source"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"If a Pulitzer-finalist 34-part series of investigative journalism can vanish from the web, anything can." - ',(0,a.kt)("a",{parentName:"p",href:"https://www.theatlantic.com/technology/archive/2015/10/raiders-of-the-lost-web/409210/"},"source"))),(0,a.kt)("h1",{id:"lack-of-authenticity"},"Lack of authenticity"),(0,a.kt)("p",null,"Using screenshots of tweets in case the originals get deleted does not constitute evidence. The lack of authenticity is being routinely exploited - ",(0,a.kt)("a",{parentName:"p",href:"https://today.law.harvard.edu/shedding-light-on-fraudulent-takedown-notices/"},'"Shedding light on fraudulent takedown notices"'),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'"For example, thanks to the site\u2019s record-keeping both of deletions and of the source and text of demands for removals, the law professor Eugene Volokh was able to identify a number of removal requests made with fraudulent documentation\u2014nearly 200 out of 700 \u201ccourt orders\u201d submitted to Google that he reviewed turned out to have been apparently Photoshopped from whole cloth. The Texas attorney general has since sued a company for routinely submitting these falsified court orders to Google for the purpose of forcing content removals." - ',(0,a.kt)("a",{parentName:"p",href:"https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/"},"source"))))}u.isMDXComponent=!0}}]);
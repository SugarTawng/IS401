import je from"./Ba6EhFot.js";import{_ as Ce}from"./B78dre8K.js";import Ne from"./UEL7mprB.js";import We from"./xmMfvLTi.js";import $e from"./CCanKzlm.js";import{_ as me}from"./By_UlTV1.js";import{o as m,c as F,b as S,w as k,a as s,t as W,m as ee,g as _,k as te,h as b,y as et,_ as tt,s as Oe,z as Pe,f as lt,r as H,A as Q,F as $,B as ce,l as Fe,d as Ee,C as ot,D as rt,p as nt,e as at}from"./DaYTUSRu.js";import Me from"./D4F2i1V9.js";import ct from"./DZPVy99e.js";import{u as ge}from"./WSTKsw6M.js";import{c as st}from"./CBeCEV4t.js";import it from"./C0LKiM39.js";import dt from"./DgNzPO1Y.js";import"./EMNlt2xj.js";import"./Bk9-WN6G.js";import"./BvNob-ru.js";import"./DCxbjcdO.js";import"./DqBT-TTB.js";import"./DgsDTnHf.js";import"./o9EcI8hj.js";import"./BOSphvzY.js";import"./DzPs5bSl.js";const ut={class:"flex items-center gap-3"},ft={__name:"AboutCard",props:["data"],setup(v){return(A,w)=>{const d=je,n=We;return m(),F("div",ut,[S(n,{size:"large",shape:"circle"},{default:k(()=>[S(d,{name:v.data.icon,class:"text-[#10b981]"},null,8,["name"])]),_:1}),s("span",null,W(v.data.title),1)])}}},pt={class:"flex flex-col justify-center items-center gap-6"},vt={class:"font-bold text-xl text-center"},gt={class:"text-center"},mt={__name:"ServiceCard",props:["data"],setup(v){const{data:A}=v,w=A.action.goto.external,d=w==!0?{hash:A.action.goto.path}:A.action.goto.path;return(n,a)=>{const i=me,g=Me,u=Ce,f=ee("motion-pop-visible");return m(),_(u,{to:b(d),external:b(w),class:"transition hover:scale-105"},{default:k(()=>[te((m(),_(g,{class:"w-[350px]"},{title:k(()=>{var y,O;return[s("div",pt,[S(i,{src:(y=v.data)==null?void 0:y.image},null,8,["src"]),s("span",vt,W((O=v.data)==null?void 0:O.title),1)])]}),content:k(()=>{var y;return[s("p",gt,W((y=v.data)==null?void 0:y.content),1)]}),_:1})),[[f]])]),_:1},8,["to","external"])}}},ht={class:"capitalize font-semibold"},bt={class:"flex flex-col gap-1"},St={class:"flex justify-between items-center"},xt=s("span",null,"Type:",-1),yt={class:"flex justify-between items-center"},kt=s("span",null,"Progress:",-1),wt={__name:"ProjectCard",props:["data"],setup(v){const{data:A}=v,{setCurrentProject:w,setCurrentProjectID:d}=ge(),n=et(),a=()=>{w({...A}),d(A.id),n.push(`/project_details/${A.id}`)};return(i,g)=>{const u=me,f=ct,y=Ne,O=Me,E=ee("motion-slide-visible-left");return te((m(),_(O,{class:"w-[350px] lg:w-[250px] overflow-hidden"},{header:k(()=>{var x;return[((x=v.data)==null?void 0:x.type)=="land"?(m(),_(u,{key:0,class:"w-full h-[150px]",src:"/images/the_manhattan_glory.jpg"})):(m(),_(u,{key:1,class:"w-full h-[150px]",src:"/images/glory_heights.jpg"}))]}),title:k(()=>{var x;return[s("span",ht,W((x=v.data)==null?void 0:x.name),1)]}),subtitle:k(()=>{var x,L;return[S(f,{severity:((x=v.data)==null?void 0:x.activated)=="true"?"success":"danger",value:((L=v.data)==null?void 0:L.activated)=="true"?"Activated":"Not Activated"},null,8,["severity","value"])]}),content:k(()=>{var x,L;return[s("div",bt,[s("div",St,[xt,s("span",null,W(("capitalize"in i?i.capitalize:b(st))((x=v.data)==null?void 0:x.type)),1)]),s("div",yt,[kt,s("span",null,W((L=v.data)==null?void 0:L.project_progress)+"%",1)])])]}),footer:k(()=>[S(y,{link:"",size:"small",label:"View More",onClick:a})]),_:1})),[[E]])}}};var Tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Be={exports:{}};(function(v,A){(function(d,n){v.exports=n()})(Tt,function(){return function(w){var d={};function n(a){if(d[a])return d[a].exports;var i=d[a]={i:a,l:!1,exports:{}};return w[a].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=w,n.c=d,n.d=function(a,i,g){n.o(a,i)||Object.defineProperty(a,i,{enumerable:!0,get:g})},n.r=function(a){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},n.t=function(a,i){if(i&1&&(a=n(a)),i&8||i&4&&typeof a=="object"&&a&&a.__esModule)return a;var g=Object.create(null);if(n.r(g),Object.defineProperty(g,"default",{enumerable:!0,value:a}),i&2&&typeof a!="string")for(var u in a)n.d(g,u,(function(f){return a[f]}).bind(null,u));return g},n.n=function(a){var i=a&&a.__esModule?function(){return a.default}:function(){return a};return n.d(i,"a",i),i},n.o=function(a,i){return Object.prototype.hasOwnProperty.call(a,i)},n.p="",n(n.s=0)}([function(w,d,n){n.r(d);var a=function(e){return Array.isArray(e)?e:[e]},i=function(e){return e instanceof Node},g=function(e){return e instanceof NodeList},u=function(e,t){if(e&&t){e=g(e)?e:[e];for(var o=0;o<e.length&&t(e[o],o,e.length)!==!0;o++);}},f=function(e){return console.error("[scroll-lock] ".concat(e))},y=function(e){if(Array.isArray(e)){var t=e.join(", ");return t}},O=function(e){var t=[];return u(e,function(o){return t.push(o)}),t},E=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:document;if(o&&O(r.querySelectorAll(t)).indexOf(e)!==-1)return e;for(;(e=e.parentElement)&&O(r.querySelectorAll(t)).indexOf(e)===-1;);return e},x=function(e,t){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:document,r=O(o.querySelectorAll(t)).indexOf(e)!==-1;return r},L=function(e){if(e){var t=getComputedStyle(e),o=t.overflow==="hidden";return o}},K=function(e){if(e){if(L(e))return!0;var t=e.scrollTop;return t<=0}},V=function(e){if(e){if(L(e))return!0;var t=e.scrollTop,o=e.scrollHeight,r=t+e.offsetHeight;return r>=o}},M=function(e){if(e){if(L(e))return!0;var t=e.scrollLeft;return t<=0}},B=function(e){if(e){if(L(e))return!0;var t=e.scrollLeft,o=e.scrollWidth,r=t+e.offsetWidth;return r>=o}},le=function(e){var t='textarea, [contenteditable="true"]';return x(e,t)},I=function(e){var t='input[type="range"]';return x(e,t)};n.d(d,"disablePageScroll",function(){return z}),n.d(d,"enablePageScroll",function(){return Y}),n.d(d,"getScrollState",function(){return G}),n.d(d,"clearQueueScrollLocks",function(){return Z}),n.d(d,"getTargetScrollBarWidth",function(){return C}),n.d(d,"getCurrentTargetScrollBarWidth",function(){return U}),n.d(d,"getPageScrollBarWidth",function(){return q}),n.d(d,"getCurrentPageScrollBarWidth",function(){return D}),n.d(d,"addScrollableTarget",function(){return p}),n.d(d,"removeScrollableTarget",function(){return ie}),n.d(d,"addScrollableSelector",function(){return he}),n.d(d,"removeScrollableSelector",function(){return be}),n.d(d,"addLockableTarget",function(){return Se}),n.d(d,"addLockableSelector",function(){return xe}),n.d(d,"setFillGapMethod",function(){return ye}),n.d(d,"addFillGapTarget",function(){return de}),n.d(d,"removeFillGapTarget",function(){return ke}),n.d(d,"addFillGapSelector",function(){return oe}),n.d(d,"removeFillGapSelector",function(){return we}),n.d(d,"refillGaps",function(){return re});function J(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable}))),o.forEach(function(r){se(l,r,t[r])})}return l}function se(l,e,t){return e in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}var X=["padding","margin","width","max-width","none"],R=3,c={scroll:!0,queue:0,scrollableSelectors:["[data-scroll-lock-scrollable]"],lockableSelectors:["body","[data-scroll-lock-lockable]"],fillGapSelectors:["body","[data-scroll-lock-fill-gap]","[data-scroll-lock-lockable]"],fillGapMethod:X[0],startTouchY:0,startTouchX:0},z=function(e){c.queue<=0&&(c.scroll=!1,ue(),Te()),p(e),c.queue++},Y=function(e){c.queue>0&&c.queue--,c.queue<=0&&(c.scroll=!0,Ie(),De()),ie(e)},G=function(){return c.scroll},Z=function(){c.queue=0},C=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i(e)){var o=e.style.overflowY;t?G()||(e.style.overflowY=e.getAttribute("data-scroll-lock-saved-overflow-y-property")):e.style.overflowY="scroll";var r=U(e);return e.style.overflowY=o,r}else return 0},U=function(e){if(i(e))if(e===document.body){var t=document.documentElement.clientWidth,o=window.innerWidth,r=o-t;return r}else{var P=e.style.borderLeftWidth,N=e.style.borderRightWidth;e.style.borderLeftWidth="0px",e.style.borderRightWidth="0px";var j=e.offsetWidth-e.clientWidth;return e.style.borderLeftWidth=P,e.style.borderRightWidth=N,j}else return 0},q=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return C(document.body,e)},D=function(){return U(document.body)},p=function(e){if(e){var t=a(e);t.map(function(o){u(o,function(r){i(r)?r.setAttribute("data-scroll-lock-scrollable",""):f('"'.concat(r,'" is not a Element.'))})})}},ie=function(e){if(e){var t=a(e);t.map(function(o){u(o,function(r){i(r)?r.removeAttribute("data-scroll-lock-scrollable"):f('"'.concat(r,'" is not a Element.'))})})}},he=function(e){if(e){var t=a(e);t.map(function(o){c.scrollableSelectors.push(o)})}},be=function(e){if(e){var t=a(e);t.map(function(o){c.scrollableSelectors=c.scrollableSelectors.filter(function(r){return r!==o})})}},Se=function(e){if(e){var t=a(e);t.map(function(o){u(o,function(r){i(r)?r.setAttribute("data-scroll-lock-lockable",""):f('"'.concat(r,'" is not a Element.'))})}),G()||ue()}},xe=function(e){if(e){var t=a(e);t.map(function(o){c.lockableSelectors.push(o)}),G()||ue(),oe(e)}},ye=function(e){if(e)if(X.indexOf(e)!==-1)c.fillGapMethod=e,re();else{var t=X.join(", ");f('"'.concat(e,`" method is not available!
Available fill gap methods: `).concat(t,"."))}},de=function(e){if(e){var t=a(e);t.map(function(o){u(o,function(r){i(r)?(r.setAttribute("data-scroll-lock-fill-gap",""),c.scroll||Le(r)):f('"'.concat(r,'" is not a Element.'))})})}},ke=function(e){if(e){var t=a(e);t.map(function(o){u(o,function(r){i(r)?(r.removeAttribute("data-scroll-lock-fill-gap"),c.scroll||fe(r)):f('"'.concat(r,'" is not a Element.'))})})}},oe=function(e){if(e){var t=a(e);t.map(function(o){c.fillGapSelectors.indexOf(o)===-1&&(c.fillGapSelectors.push(o),c.scroll||Ae(o))})}},we=function(e){if(e){var t=a(e);t.map(function(o){c.fillGapSelectors=c.fillGapSelectors.filter(function(r){return r!==o}),c.scroll||Ge(o)})}},re=function(){c.scroll||Te()},ue=function(){var e=y(c.lockableSelectors);Re(e)},Ie=function(){var e=y(c.lockableSelectors);ze(e)},Re=function(e){var t=document.querySelectorAll(e);u(t,function(o){Ye(o)})},ze=function(e){var t=document.querySelectorAll(e);u(t,function(o){Ue(o)})},Ye=function(e){if(i(e)&&e.getAttribute("data-scroll-lock-locked")!=="true"){var t=window.getComputedStyle(e);e.setAttribute("data-scroll-lock-saved-overflow-y-property",t.overflowY),e.setAttribute("data-scroll-lock-saved-inline-overflow-property",e.style.overflow),e.setAttribute("data-scroll-lock-saved-inline-overflow-y-property",e.style.overflowY),e.style.overflow="hidden",e.setAttribute("data-scroll-lock-locked","true")}},Ue=function(e){i(e)&&e.getAttribute("data-scroll-lock-locked")==="true"&&(e.style.overflow=e.getAttribute("data-scroll-lock-saved-inline-overflow-property"),e.style.overflowY=e.getAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-saved-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-property"),e.removeAttribute("data-scroll-lock-saved-inline-overflow-y-property"),e.removeAttribute("data-scroll-lock-locked"))},Te=function(){c.fillGapSelectors.map(function(e){Ae(e)})},De=function(){c.fillGapSelectors.map(function(e){Ge(e)})},Ae=function(e){var t=document.querySelectorAll(e),o=c.lockableSelectors.indexOf(e)!==-1;u(t,function(r){Le(r,o)})},Le=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(i(e)){var o;if(e.getAttribute("data-scroll-lock-lockable")===""||t)o=C(e,!0);else{var r=E(e,y(c.lockableSelectors));o=C(r,!0)}e.getAttribute("data-scroll-lock-filled-gap")==="true"&&fe(e);var P=window.getComputedStyle(e);if(e.setAttribute("data-scroll-lock-filled-gap","true"),e.setAttribute("data-scroll-lock-current-fill-gap-method",c.fillGapMethod),c.fillGapMethod==="margin"){var N=parseFloat(P.marginRight);e.style.marginRight="".concat(N+o,"px")}else if(c.fillGapMethod==="width")e.style.width="calc(100% - ".concat(o,"px)");else if(c.fillGapMethod==="max-width")e.style.maxWidth="calc(100% - ".concat(o,"px)");else if(c.fillGapMethod==="padding"){var j=parseFloat(P.paddingRight);e.style.paddingRight="".concat(j+o,"px")}}},Ge=function(e){var t=document.querySelectorAll(e);u(t,function(o){fe(o)})},fe=function(e){if(i(e)&&e.getAttribute("data-scroll-lock-filled-gap")==="true"){var t=e.getAttribute("data-scroll-lock-current-fill-gap-method");e.removeAttribute("data-scroll-lock-filled-gap"),e.removeAttribute("data-scroll-lock-current-fill-gap-method"),t==="margin"?e.style.marginRight="":t==="width"?e.style.width="":t==="max-width"?e.style.maxWidth="":t==="padding"&&(e.style.paddingRight="")}},He=function(e){re()},Qe=function(e){c.scroll||(c.startTouchY=e.touches[0].clientY,c.startTouchX=e.touches[0].clientX)},Ke=function(e){if(!c.scroll){var t=c.startTouchY,o=c.startTouchX,r=e.touches[0].clientY,P=e.touches[0].clientX;if(e.touches.length<2){var N=y(c.scrollableSelectors),j={up:t<r,down:t>r,left:o<P,right:o>P},ne={up:t+R<r,down:t-R>r,left:o+R<P,right:o-R>P},Ze=function _e(h){var qe=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(h){var pe=E(h,N,!1);if(I(h))return!1;if(qe||le(h)&&E(h,N)||x(h,N)){var ae=!1;M(h)&&B(h)?(j.up&&K(h)||j.down&&V(h))&&(ae=!0):K(h)&&V(h)?(j.left&&M(h)||j.right&&B(h))&&(ae=!0):(ne.up&&K(h)||ne.down&&V(h)||ne.left&&M(h)||ne.right&&B(h))&&(ae=!0),ae&&(pe?_e(pe,!0):e.cancelable&&e.preventDefault())}else _e(pe)}else e.cancelable&&e.preventDefault()};Ze(e.target)}}},Ve=function(e){c.scroll||(c.startTouchY=0,c.startTouchX=0)};typeof window<"u"&&window.addEventListener("resize",He),typeof document<"u"&&(document.addEventListener("touchstart",Qe),document.addEventListener("touchmove",Ke,{passive:!1}),document.addEventListener("touchend",Ve));var Je={hide:function(e){f(`"hide" is deprecated! Use "disablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget`),z(e)},show:function(e){f(`"show" is deprecated! Use "enablePageScroll" instead. 
 https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget`),Y(e)},toggle:function(e){f('"toggle" is deprecated! Do not use it.'),G()?z():Y(e)},getState:function(){return f(`"getState" is deprecated! Use "getScrollState" instead. 
 https://github.com/FL3NKEY/scroll-lock#getscrollstate`),G()},getWidth:function(){return f(`"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth`),q()},getCurrentWidth:function(){return f(`"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. 
 https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth`),D()},setScrollableTargets:function(e){f(`"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget`),p(e)},setFillGapSelectors:function(e){f(`"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector`),oe(e)},setFillGapTargets:function(e){f(`"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. 
 https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget`),de(e)},clearQueue:function(){f(`"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. 
 https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks`),Z()}},Xe=J({disablePageScroll:z,enablePageScroll:Y,getScrollState:G,clearQueueScrollLocks:Z,getTargetScrollBarWidth:C,getCurrentTargetScrollBarWidth:U,getPageScrollBarWidth:q,getCurrentPageScrollBarWidth:D,addScrollableSelector:he,removeScrollableSelector:be,addScrollableTarget:p,removeScrollableTarget:ie,addLockableSelector:xe,addLockableTarget:Se,addFillGapSelector:oe,removeFillGapSelector:we,addFillGapTarget:de,removeFillGapTarget:ke,setFillGapMethod:ye,refillGaps:re,_state:c},Je);d.default=Xe}]).default})})(Be);var ve=Be.exports;const T=v=>(nt("data-v-cb030e77"),v=v(),at(),v),At={class:"flex justify-center items-center px-4 lg:px-7 xl:px-10 max-lg:py-4"},Lt=T(()=>s("span",{class:"font-bold text-xl text-[#10b981]"}," Propertier ",-1)),Gt={class:"ml-auto flex gap-6"},_t={class:"lg:hidden"},Ot=T(()=>s("section",{id:"home",class:"relative lg:pt-[100px] w-full px-4 h-fit flex flex-col items-center gap-12 brightness-50"},null,-1)),Pt={id:"about",class:"relative pt-[100px] px-4 h-fit grid grid-cols-1 lg:grid-cols-2 gap-12 overflow-hidden"},Ft={class:"flex justify-end items-center"},Et={class:"flex flex-col justify-center lg:justify-start items-center lg:items-start gap-6 w-full lg:w-4/5"},jt=T(()=>s("span",{class:"text-4xl font-bold p-2 border-b"},"About Us",-1)),Ct=T(()=>s("span",{class:"text-2xl font-semibold"},"Provide service to manage real estate",-1)),Nt={class:"grid grid-cols-2 gap-6"},Wt=T(()=>s("span",{class:"text-bold"}," Our Services ",-1)),Mt={id:"services",class:"relative pt-[100px] px-4 h-fit flex flex-col items-center gap-12"},Bt=T(()=>s("span",{class:"text-4xl font-bold p-2 border-b"},"Our Services",-1)),It={class:"flex justify-center items-center gap-6 flex-wrap"},Rt={id:"projects",class:"relative pt-[100px] px-4 h-fit flex flex-col items-center gap-12"},zt=T(()=>s("span",{class:"text-4xl font-bold p-2 border-b"},"Available Projects",-1)),Yt={class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},Ut={id:"contact",class:"relative py-[100px] px-4 h-screen flex flex-col items-center gap-12"},Dt=T(()=>s("span",{class:"text-4xl font-bold p-2 border-b"},"Send Us Message",-1)),Ht={class:"flex flex-col w-full lg:w-1/2 gap-4"},Qt={class:"flex flex-1 flex-col gap-2"},Kt=T(()=>s("label",{for:"fullName"},"Full Name",-1)),Vt={class:"flex flex-1 flex-col gap-2"},Jt=T(()=>s("label",{for:"email"},"Email",-1)),Xt={class:"flex flex-1 flex-col gap-2"},Zt=T(()=>s("label",{for:"email"},"Phone Number",-1)),qt={class:"flex flex-1 flex-col gap-2"},$t=T(()=>s("label",{for:"message"},"Message",-1)),el={class:"flex flex-1"},tl=T(()=>s("footer",{class:"w-full bg-[#131313] h-[120px] p-4 flex justify-center items-center"},[s("span",{class:"text-white"},"© Copyrights. All Rights Reserved")],-1)),ll=700,ol={__name:"index",async setup(v){let A,w;const{projects:d}=Oe(ge()),{getProjects:n}=ge(),{authenticated:a}=Oe(Pe()),{logUserOut:i}=Pe();[A,w]=lt(()=>n()),await A,w();const g=H(!1),u=H(!1),f=H([{title:"Home",to:"/",external:!1},{title:"About",to:"about",external:!0},{title:"Services",to:"services",external:!0},{title:"Projects",to:"projects",external:!0},{title:"Contact",to:"contact",external:!0},{title:"Login",to:"/login",external:!1,onlyMobile:!0}]),y=H(),O=H([{label:"Logout",command:()=>i()}]),E=H({});E.value=JSON.parse(localStorage.getItem("user"))??{};const x=()=>{u.value?(u.value=!1,ve.enablePageScroll()):(u.value=!0,ve.disablePageScroll())},L=()=>{u.value&&(ve.enablePageScroll(),u.value=!1)},K=M=>{y.value.toggle(M)},V=()=>{window.scrollY>=ll?g.value=!0:g.value=!1};return window.addEventListener("scroll",V),(M,B)=>{var D;const le=je,I=Ce,J=Ne,se=We,X=$e,R=me,c=ft,z=mt,Y=wt,G=it,Z=dt,C=ee("motion-slide-visible-left"),U=ee("motion-slide-visible-right"),q=ee("motion-pop-visible");return m(),F($,null,[s("div",{class:Q(`fixed top-0 left-0 w-full z-50 ${b(g)?"backdrop-blur-xl border-b":""} ${b(u)?"backdrop-blur-xl":""}`)},[s("div",At,[S(I,{to:"/",class:"flex justify-center items-center gap-1"},{default:k(()=>[S(le,{name:"line-md:home-simple",class:"text-2xl text-[#10b981]"}),Lt]),_:1}),s("div",{class:Q(`${b(u)?"flex":"hidden"} fixed w-full top-[4rem] left-0 right-0 bottom-0 lg:static lg:flex lg:mx-auto`)},[s("div",{class:Q(`relative w-full z-50 flex flex-col items-center justify-center m-auto lg:flex-row text-white ${b(u)?"backdrop-blur-xl":""}`)},[(m(!0),F($,null,ce(b(f),p=>(m(),_(I,{key:p.title,to:p.external?{hash:p.to}:p.to,external:p.external,onClick:L,class:Q(`font-semibold hover:scale-150 hover:-translate-x-6 transition duration-500 ease-in-out block relative uppercase px-6 py-6 md:py-8 lg:-mr-0.25 lg:leading-5 xl:px-12 ${p.onlyMobile?"lg:hidden":""}  ${b(g)?"text-black":"text-white"}`)},{default:k(()=>[Ee(W(p.title),1)]),_:2},1032,["to","external","class"]))),128))],2)],2),b(a)?Fe("",!0):(m(),_(J,{key:0,outlined:"",severity:"secondary",class:Q(`hidden lg:flex font-semibold ${b(g)?"text-black":"text-white"}`)},{default:k(()=>[S(I,{to:"/login"},{default:k(()=>[Ee(" Login ")]),_:1})]),_:1},8,["class"])),s("div",Gt,[b(a)?(m(),_(se,{key:0,shape:"square",label:(D=b(E).display_name)==null?void 0:D.substring(0,3),onClick:B[0]||(B[0]=p=>K(p))},null,8,["label"])):Fe("",!0),S(X,{ref_key:"option",ref:y,model:b(O),popup:!0,class:"hidden lg:block"},null,8,["model"]),s("div",_t,[S(le,{name:"line-md:menu",class:Q(`cursor-pointer text-2xl ${b(g)?"text-black":"text-white"}`),onClick:x},null,8,["class"])])])])],2),Ot,s("section",Pt,[te((m(),F("div",Ft,[S(R,{src:"/images/about_banner.png",class:"shadow-md rounded-lg"})])),[[C]]),te((m(),F("div",Et,[jt,Ct,s("div",Nt,[(m(!0),F($,null,ce(b(ot),p=>(m(),_(c,{key:p.title,data:p},null,8,["data"]))),128))]),S(I,{to:{hash:"services"},external:!0},{default:k(()=>[S(J,{size:"large"},{default:k(()=>[Wt]),_:1})]),_:1})])),[[U]])]),s("section",Mt,[Bt,s("div",It,[(m(!0),F($,null,ce(b(rt),p=>(m(),_(z,{key:p.title,data:p},null,8,["data"]))),128))])]),s("section",Rt,[zt,s("div",Yt,[(m(!0),F($,null,ce(b(d),p=>(m(),_(Y,{key:p.id,data:p},null,8,["data"]))),128))])]),s("section",Ut,[Dt,te((m(),F("div",Ht,[s("div",Qt,[Kt,S(G,{id:"fullName",size:"large"})]),s("div",Vt,[Jt,S(G,{id:"email",size:"large"})]),s("div",Xt,[Zt,S(G,{id:"phoneNumber",size:"large"})]),s("div",qt,[$t,S(Z,{rows:"5",cols:"30"})]),s("div",el,[S(J,{class:"flex-1",label:"Submit"})])])),[[q]])]),tl],64)}}},Ll=tt(ol,[["__scopeId","data-v-cb030e77"]]);export{Ll as default};

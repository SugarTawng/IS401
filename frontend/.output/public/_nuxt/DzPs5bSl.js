import{S as R,aC as m,r as P,aD as j,at as B,aE as M,aF as S,ao as H,aG as T,aH as L,h as U,as as V,aI as $,j as z,aJ as h,aK as K,aL as q,aM as x}from"./DaYTUSRu.js";const I=s=>s==="defer"||s===!1;function G(...s){var g;const n=typeof s[s.length-1]=="string"?s.pop():void 0;typeof s[0]!="string"&&s.unshift(n);let[t,i,a={}]=s;if(typeof t!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof i!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");const e=R(),u=i,p=()=>m.value,b=()=>e.isHydrating?e.payload.data[t]:e.static.data[t];a.server=a.server??!0,a.default=a.default??p,a.getCachedData=a.getCachedData??b,a.lazy=a.lazy??!1,a.immediate=a.immediate??!0,a.deep=a.deep??m.deep,a.dedupe=a.dedupe??"cancel";const D=()=>a.getCachedData(t,e)!=null;if(!e._asyncData[t]||!a.immediate){(g=e.payload._errors)[t]??(g[t]=m.errorValue);const c=a.deep?P:j;e._asyncData[t]={data:c(a.getCachedData(t,e)??a.default()),pending:P(!D()),error:B(e.payload._errors,t),status:P("idle"),_default:a.default}}const r={...e._asyncData[t]};delete r._default,r.refresh=r.execute=(c={})=>{if(e._asyncDataPromises[t]){if(I(c.dedupe??a.dedupe))return e._asyncDataPromises[t];e._asyncDataPromises[t].cancelled=!0}if((c._initial||e.isHydrating&&c._initial!==!1)&&D())return Promise.resolve(a.getCachedData(t,e));r.pending.value=!0,r.status.value="pending";const f=new Promise((l,o)=>{try{l(u(e))}catch(y){o(y)}}).then(async l=>{if(f.cancelled)return e._asyncDataPromises[t];let o=l;a.transform&&(o=await a.transform(l)),a.pick&&(o=J(o,a.pick)),e.payload.data[t]=o,r.data.value=o,r.error.value=m.errorValue,r.status.value="success"}).catch(l=>{if(f.cancelled)return e._asyncDataPromises[t];r.error.value=L(l),r.data.value=U(a.default()),r.status.value="error"}).finally(()=>{f.cancelled||(r.pending.value=!1,delete e._asyncDataPromises[t])});return e._asyncDataPromises[t]=f,e._asyncDataPromises[t]},r.clear=()=>N(e,t);const v=()=>r.refresh({_initial:!0}),w=a.server!==!1&&e.payload.serverRendered;{const c=V();if(c&&!c._nuxtOnBeforeMountCbs){c._nuxtOnBeforeMountCbs=[];const o=c._nuxtOnBeforeMountCbs;M(()=>{o.forEach(y=>{y()}),o.splice(0,o.length)}),S(()=>o.splice(0,o.length))}w&&e.isHydrating&&(r.error.value||D())?(r.pending.value=!1,r.status.value=r.error.value?"error":"success"):c&&(e.payload.serverRendered&&e.isHydrating||a.lazy)&&a.immediate?c._nuxtOnBeforeMountCbs.push(v):a.immediate&&v();const f=$();if(a.watch){const o=H(a.watch,()=>r.refresh());f&&T(o)}const l=e.hook("app:data:refresh",async o=>{(!o||o.includes(t))&&await r.refresh()});f&&T(l)}const _=Promise.resolve(e._asyncDataPromises[t]).then(()=>r);return Object.assign(_,r),_}function N(s,n){n in s.payload.data&&(s.payload.data[n]=void 0),n in s.payload._errors&&(s.payload._errors[n]=m.errorValue),s._asyncData[n]&&(s._asyncData[n].data.value=void 0,s._asyncData[n].error.value=m.errorValue,s._asyncData[n].pending.value=!1,s._asyncData[n].status.value="idle"),n in s._asyncDataPromises&&(s._asyncDataPromises[n].cancelled=!0,s._asyncDataPromises[n]=void 0)}function J(s,n){const t={};for(const i of n)t[i]=s[i];return t}function Z(s,n,t){const[i={},a]=typeof n=="string"?[{},n]:[n,t],e=z(()=>h(s)),u=i.key||K([a,typeof e.value=="string"?e.value:"",...Q(i)]);if(!u||typeof u!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+u);if(!s)throw new Error("[nuxt] [useFetch] request is missing.");const p=u===a?"$f"+u:u;if(!i.baseURL&&typeof e.value=="string"&&e.value[0]==="/"&&e.value[1]==="/")throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:b,lazy:D,default:r,transform:v,pick:w,watch:_,immediate:g,getCachedData:c,deep:f,dedupe:l,...o}=i,y=q({...x,...o,cache:typeof i.cache=="boolean"?void 0:i.cache}),F={server:b,lazy:D,default:r,transform:v,pick:w,immediate:g,getCachedData:c,deep:f,dedupe:l,watch:_===!1?[]:[y,e,..._||[]]};let d;return G(p,()=>{var E;(E=d==null?void 0:d.abort)==null||E.call(d),d=typeof AbortController<"u"?new AbortController:{};const O=h(i.timeout);let C;return O&&(C=setTimeout(()=>d.abort(),O),d.signal.onabort=()=>clearTimeout(C)),(i.$fetch||globalThis.$fetch)(e.value,{signal:d.signal,...y}).finally(()=>{clearTimeout(C)})},F)}function Q(s){var t;const n=[((t=h(s.method))==null?void 0:t.toUpperCase())||"GET",h(s.baseURL)];for(const i of[s.params||s.query]){const a=h(i);if(!a)continue;const e={};for(const[u,p]of Object.entries(a))e[h(u)]=h(p);n.push(e)}return n}export{Z as u};

var e=Object.defineProperty,t=(t,n)=>{let r={};for(var i in t)e(r,i,{get:t[i],enumerable:!0});return n||e(r,Symbol.toStringTag,{value:`Module`}),r};(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var n=Array.isArray,r=Array.prototype.indexOf,i=Array.prototype.includes,a=Array.from,o=Object.defineProperty,s=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyDescriptors,l=Object.prototype,u=Array.prototype,d=Object.getPrototypeOf,f=Object.isExtensible,p=()=>{};function m(e){return e()}function h(e){for(var t=0;t<e.length;t++)e[t]()}function g(){var e,t;return{promise:new Promise((n,r)=>{e=n,t=r}),resolve:e,reject:t}}var _=1024,v=2048,y=4096,b=8192,x=16384,S=32768,ee=1<<25,C=65536,te=1<<18,w=1<<19,ne=1<<20,re=1<<25,ie=65536,ae=1<<21,oe=1<<22,se=1<<23,T=Symbol(`$state`),ce=Symbol(`component`),le=Symbol(`legacy props`),ue=Symbol(``),de=Symbol(`attributes`),fe=Symbol(`class`),pe=Symbol(`style`),me=Symbol(`text`),he=Symbol(`form reset`),ge=new class extends Error{name=`StaleReactionError`;message="The reaction that called `getAbortSignal()` was re-run or destroyed"},_e=!!globalThis.document?.contentType&&globalThis.document.contentType.includes(`xml`),ve={},E=Symbol(`uninitialized`),ye=`http://www.w3.org/1999/xhtml`,be=`http://www.w3.org/2000/svg`,xe=`http://www.w3.org/1998/Math/MathML`;function Se(){console.warn(`https://svelte.dev/e/derived_inert`)}function Ce(e){console.warn(`https://svelte.dev/e/hydration_mismatch`)}function we(){console.warn(`https://svelte.dev/e/select_multiple_invalid_value`)}function Te(){console.warn(`https://svelte.dev/e/svelte_boundary_reset_noop`)}var D=!1;function Ee(e){D=e}var O;function De(e){if(e===null)throw Ce(),ve;return O=e}function Oe(){return De(xn(O))}function k(e){if(D){if(xn(O)!==null)throw Ce(),ve;O=e}}function ke(e=1){if(D){for(var t=e,n=O;t--;)n=xn(n);O=n}}function Ae(e=!0){for(var t=0,n=O;;){if(n.nodeType===8){var r=n.data;if(r===`]`){if(t===0)return n;--t}else(r===`[`||r===`[!`||r[0]===`[`&&!isNaN(Number(r.slice(1))))&&(t+=1)}var i=xn(n);e&&n.remove(),n=i}}function je(e){if(!e||e.nodeType!==8)throw Ce(),ve;return e.data}function Me(e){return e===this.v}function Ne(e,t){return e==e?e!==t||typeof e==`object`&&!!e||typeof e==`function`:t==t}function Pe(e){return!Ne(e,this.v)}function Fe(e){throw Error(`https://svelte.dev/e/lifecycle_outside_component`)}function Ie(){throw Error(`https://svelte.dev/e/async_derived_orphan`)}function Le(e,t,n){throw Error(`https://svelte.dev/e/each_key_duplicate`)}function Re(e){throw Error(`https://svelte.dev/e/effect_in_teardown`)}function ze(){throw Error(`https://svelte.dev/e/effect_in_unowned_derived`)}function Be(e){throw Error(`https://svelte.dev/e/effect_orphan`)}function Ve(){throw Error(`https://svelte.dev/e/effect_update_depth_exceeded`)}function He(e){throw Error(`https://svelte.dev/e/props_invalid_value`)}function Ue(){throw Error(`https://svelte.dev/e/state_descriptors_fixed`)}function We(){throw Error(`https://svelte.dev/e/state_prototype_fixed`)}function Ge(){throw Error(`https://svelte.dev/e/state_unsafe_mutation`)}function Ke(){throw Error(`https://svelte.dev/e/svelte_boundary_reset_onerror`)}var qe=!1;function Je(){qe=!0}var A=null;function Ye(e){A=e}function Xe(e,t=!1,n){A={p:A,i:!1,c:null,e:null,s:e,x:null,r:B,l:qe&&!t?{s:null,u:null,$:[]}:null}}function Ze(e){var t=A,n=t.e;if(n!==null){t.e=null;for(var r of n)Fn(r)}return e!==void 0&&(t.x=e),t.i=!0,A=t.p,Qe(e)}function Qe(e={}){return o(e,ce,{value:!0}),e}function $e(){return!qe||A!==null&&A.l===null}var et=[];function tt(){var e=et;et=[],h(e)}function nt(e){if(et.length===0&&!Bt){var t=et;queueMicrotask(()=>{t===et&&tt()})}et.push(e)}function rt(){for(;et.length>0;)tt()}var it=~(v|y|_);function j(e,t){e.f=e.f&it|t}function at(e){e.f&512||e.deps===null?j(e,_):j(e,y)}function ot(e){if(e!==null)for(let t of e)t.f&2&&t.f&65536&&(t.f^=ie,ot(t.deps))}function st(e,t,n){e.f&2048?t.add(e):e.f&4096&&n.add(e),ot(e.deps),j(e,_)}function ct(e,t,n){if(e==null)return t(void 0),n&&n(void 0),p;let r=H(()=>e.subscribe(t,n));return r.unsubscribe?()=>r.unsubscribe():r}var lt=[];function ut(e,t=p){let n=null,r=new Set;function i(t){if(Ne(e,t)&&(e=t,n)){let t=!lt.length;for(let t of r)t[1](),lt.push(t,e);if(t){for(let e=0;e<lt.length;e+=2)lt[e][0](lt[e+1]);lt.length=0}}}function a(t){i(t(e))}function o(o,s=p){let c=[o,s];return r.add(c),r.size===1&&(n=t(i,a)||p),o(e),()=>{r.delete(c),r.size===0&&n&&(n(),n=null)}}return{set:i,update:a,subscribe:o}}function dt(e){let t;return ct(e,e=>t=e)(),t}var ft=!1,pt=Symbol(`unmounted`);function mt(e,t,n){let r=n[t]??={store:null,source:N(void 0),unsubscribe:p};if(r.store!==e&&!(pt in n)){if(r.unsubscribe(),r.store=e??null,e==null)r.source.v=void 0,r.unsubscribe=p;else{var i=!0;r.unsubscribe=ct(e,e=>{i?r.source.v=e:P(r.source,e)}),i=!1}}return e&&pt in n?dt(e):V(r.source)}function ht(){let e={};function t(){Nn(()=>{for(var t in e)e[t].unsubscribe();o(e,pt,{enumerable:!1,value:!0})})}return[e,t]}function gt(e){var t=ft;try{return ft=!1,[e(),ft]}finally{ft=t}}function _t(e){D&&bn(e)!==null&&Cn(e)}var vt=!1;function yt(){vt||(vt=!0,document.addEventListener(`reset`,e=>{Promise.resolve().then(()=>{if(!e.defaultPrevented)for(let t of e.target.elements)t[he]?.()})},{capture:!0}))}function bt(e){var t=z,n=B;sr(null),cr(null);try{return e()}finally{sr(t),cr(n)}}function xt(e,t,n,r=n){e.addEventListener(t,()=>bt(n));let i=e[he];e[he]=i?()=>{i(),r(!0)}:()=>r(!0),yt()}function St(e,t,n,r){let i=$e()?Et:At;var a=e.filter(e=>!e.settled),o=t.map(i);if(n.length===0&&a.length===0){r(o);return}var s=B,c=Ct(),l=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(e=>e.promise)):null;function u(e){if(!(s.f&16384)){c();try{r([...o,...e])}catch(e){On(e,s)}wt()}}var d=Tt();if(n.length===0){l.then(()=>u([])).finally(d);return}function f(){Promise.all(n.map(e=>Ot(e))).then(u).catch(e=>On(e,s)).finally(d)}l?l.then(()=>{c(),f(),wt()}):f()}function Ct(){var e=B,t=z,n=A,r=M;return function(i=!0){cr(e),sr(t),Ye(n),i&&!(e.f&16384)&&(r?.activate(),r?.apply())}}function wt(e=!0){cr(null),sr(null),Ye(null),e&&M?.deactivate()}function Tt(){var e=B,t=e.b,n=M,r=!!t?.is_rendered();return t?.update_pending_count(1,n),n.increment(r,e),()=>{t?.update_pending_count(-1,n),n.decrement(r,e)}}function Et(e){var t=2|v;return B!==null&&(B.f|=w),{ctx:A,deps:null,effects:null,equals:Me,f:t,fn:e,reactions:null,rv:0,v:E,wv:0,parent:B,ac:null}}var Dt=Symbol(`obsolete`);function Ot(e,t,n){let r=B;r===null&&Ie();var i=void 0,a=rn(E),o=!z,s=new Set;return Vn(()=>{var t=B,n=g();i=n.promise;try{Promise.resolve(e()).then(n.resolve,e=>{e!==ge&&n.reject(e)}).finally(wt)}catch(e){n.reject(e),wt()}var c=M;if(o){if(t.f&32768)var l=Tt();if(r.b?.is_rendered())c.async_deriveds.get(t)?.reject(Dt);else for(let e of s.values())e.reject(Dt);s.add(n),c.async_deriveds.set(t,n)}let u=(e,t=void 0)=>{l?.(),s.delete(n),t!==Dt&&(c.activate(),t?(a.f|=se,on(a,t)):(a.f&8388608&&(a.f^=se),on(a,e)),c.deactivate())};n.promise.then(u,e=>u(null,e||`unknown`))}),Nn(()=>{for(let e of s)e.reject(Dt)}),new Promise(e=>{function t(n){function r(){n===i?e(a):t(i)}n.then(r,r)}t(i)})}function kt(e){let t=Et(e);return ur(t),t}function At(e){let t=Et(e);return t.equals=Pe,t}function jt(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Jn(t[n])}}function Mt(e){var t,n=B,r=e.parent;if(!ir&&r!==null&&e.v!==E&&r.f&24576)return Se(),e.v;cr(r);try{e.f&=~ie,jt(e),t=Sr(e)}finally{cr(n)}return t}function Nt(e){var t=Mt(e);if(!e.equals(t)&&(e.wv=yr(),(!M?.is_fork||e.deps===null)&&(M===null?e.v=t:(M.capture(e,t,!0),Lt?.capture(e,t,!0)),e.deps===null))){j(e,_);return}ir||(Rt===null?at(e):(Mn()||M?.is_fork)&&Rt.set(e,t))}function Pt(e){if(e.effects!==null)for(let t of e.effects)(t.teardown||t.ac)&&(t.teardown?.(),t.ac!==null&&bt(()=>{t.ac.abort(ge),t.ac=null}),t.fn!==null&&(t.teardown=p),Tr(t,0),Kn(t))}function Ft(e){if(e.effects!==null)for(let t of e.effects)t.teardown&&t.fn!==null&&Er(t)}var It=null,M=null,Lt=null,Rt=null,zt=null,Bt=!1,Vt=!1,Ht=null,Ut=null,Wt=0,Gt=1,Kt=class e{id=Gt++;#e=!1;linked=!0;#t=null;#n=null;async_deriveds=new Map;current=new Map;previous=new Map;#r=new Set;#i=new Set;#a=0;#o=new Map;#s=null;#c=[];#l=[];#u=new Set;#d=new Set;#f=new Map;#p=new Set;is_fork=!1;#m=!1;constructor(){It===null?It=this:(It.#n=this,this.#t=It),It=this}#h(){if(this.is_fork)return!0;for(let n of this.#o.keys()){for(var e=n,t=!1;e.parent!==null;){if(this.#f.has(e)){t=!0;break}e=e.parent}if(!t)return!0}return!1}skip_effect(e){this.#f.has(e)||this.#f.set(e,{d:[],m:[]}),this.#p.delete(e)}unskip_effect(e,t=e=>this.schedule(e)){var n=this.#f.get(e);if(n){this.#f.delete(e);for(var r of n.d)j(r,v),t(r);for(r of n.m)j(r,y),t(r)}this.#p.add(e)}#g(){this.#e=!0,Wt++>1e3&&(this.#x(),Jt());for(let e of this.#u)this.#d.delete(e),j(e,v),this.schedule(e);for(let e of this.#d)j(e,y),this.schedule(e);let t=this.#c;this.#c=[],this.apply();var n=Ht=[],r=[],i=Ut=[];for(let e of t)try{this.#_(e,n,r)}catch(t){throw $t(e),this.#h()||this.discard(),t}if(M=null,i.length>0){var a=e.ensure();for(let e of i)a.schedule(e)}if(Ht=null,Ut=null,this.#h()){this.#b(r),this.#b(n);for(let[e,t]of this.#f)Qt(e,t);i.length>0&&M.#g();return}let o=this.#v();if(o){this.#b(r),this.#b(n),o.#y(this);return}this.#u.clear(),this.#d.clear();for(let e of this.#r)e(this);this.#r.clear(),Lt=this,Xt(r),Xt(n),Lt=null,this.#s?.resolve();var s=M;if(this.#a===0&&(this.#c.length===0||s!==null)&&this.#x(),this.#c.length>0){if(s!==null){let e=s;e.#c.push(...this.#c.filter(t=>!e.#c.includes(t)))}else s=this}s!==null&&(tn.clear(),s.#g())}#_(e,t,n){e.f^=_;for(var r=e.first;r!==null;){var i=r.f,a=!!(i&96);if(!(a&&i&1024||i&8192||this.#f.has(r))&&r.fn!==null){a?r.f^=_:i&4?t.push(r):br(r)&&(i&16&&this.#d.add(r),Er(r));var o=r.first;if(o!==null){r=o;continue}}for(;r!==null;){var s=r.next;if(s!==null){r=s;break}r=r.parent}}}#v(){for(var e=this.#t;e!==null;){if(!e.is_fork){for(let[t,[,n]]of this.current)if(e.current.has(t)&&!n)return e}e=e.#t}return null}#y(e){for(let[t,n]of e.current)!this.previous.has(t)&&e.previous.has(t)&&this.previous.set(t,e.previous.get(t)),this.current.set(t,n);for(let[t,n]of e.async_deriveds){let e=this.async_deriveds.get(t);e&&n.promise.then(e.resolve).catch(e.reject)}e.async_deriveds.clear(),this.transfer_effects(e.#u,e.#d);let t=e=>{var n=e.reactions;if(n!==null&&!(e.f&2&&!(e.f&6144)))for(let e of n){var r=e.f;if(r&2)t(e);else{var i=e;r&4194320&&!this.async_deriveds.has(i)&&(this.#d.delete(i),j(i,v),this.schedule(i))}}};for(let e of this.current.keys())t(e);this.oncommit(()=>e.discard()),e.#x(),M=this,this.#g()}#b(e){for(var t=0;t<e.length;t+=1)st(e[t],this.#u,this.#d)}capture(e,t,n=!1){e.v!==E&&!this.previous.has(e)&&this.previous.set(e,e.v),e.f&8388608||(this.current.set(e,[t,n]),Rt?.set(e,t)),this.is_fork||(e.v=t)}activate(){M=this}deactivate(){M=null,Rt=null}flush(){try{Vt=!0,M=this,this.#g()}finally{Wt=0,zt=null,Ht=null,Ut=null,Vt=!1,M=null,Rt=null,tn.clear()}}discard(){for(let e of this.#i)e(this);this.#i.clear();for(let e of this.async_deriveds.values())e.reject(Dt);this.#x(),this.#s?.resolve()}register_created_effect(e){this.#l.push(e)}increment(e,t){if(this.#a+=1,e){let e=this.#o.get(t)??0;this.#o.set(t,e+1)}}decrement(e,t){if(--this.#a,e){let e=this.#o.get(t)??0;e===1?this.#o.delete(t):this.#o.set(t,e-1)}this.#m||(this.#m=!0,nt(()=>{this.#m=!1,this.linked&&this.flush()}))}transfer_effects(e,t){for(let t of e)this.#u.add(t);for(let e of t)this.#d.add(e);e.clear(),t.clear()}oncommit(e){this.#r.add(e)}ondiscard(e){this.#i.add(e)}settled(){return(this.#s??=g()).promise}static ensure(){if(M===null){let t=M=new e;!Vt&&!Bt&&nt(()=>{t.#e||t.flush()})}return M}apply(){Rt=null}schedule(e){if(zt=e,e.b?.is_pending&&e.f&16777228&&!(e.f&32768)){e.b.defer_effect(e);return}for(var t=e;t.parent!==null;){t=t.parent;var n=t.f;if(Ht!==null&&t===B&&(z===null||!(z.f&2)))return;if(n&96){if(!(n&1024))return;t.f^=_}}this.#c.push(t)}#x(){if(this.linked){var e=this.#t,t=this.#n;e===null||(e.#n=t),t===null?It=e:t.#t=e,this.linked=!1}}};function qt(e){var t=Bt;Bt=!0;try{var n;for(e&&(M!==null&&!M.is_fork&&M.flush(),n=e());;){if(rt(),M===null)return n;M.flush()}}finally{Bt=t}}function Jt(){try{Ve()}catch(e){On(e,zt)}}var Yt=null;function Xt(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if(!(r.f&24576)&&br(r)&&(Yt=new Set,Er(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Xn(r),Yt?.size>0)){tn.clear();for(let e of Yt){if(e.f&24576)continue;let t=[e],n=e.parent;for(;n!==null;)Yt.has(n)&&(Yt.delete(n),t.push(n)),n=n.parent;for(let e=t.length-1;e>=0;e--){let n=t[e];n.f&24576||Er(n)}}Yt.clear()}}Yt=null}}function Zt(e){M.schedule(e)}function Qt(e,t){if(!(e.f&32&&e.f&1024)){e.f&2048?t.d.push(e):e.f&4096&&t.m.push(e),j(e,_);for(var n=e.first;n!==null;)Qt(n,t),n=n.next}}function $t(e){j(e,_);for(var t=e.first;t!==null;)$t(t),t=t.next}var en=new Set,tn=new Map,nn=!1;function rn(e,t){return{f:0,v:e,reactions:null,equals:Me,rv:0,wv:0}}function an(e,t){let n=rn(e,t);return ur(n),n}function N(e,t=!1,n=!0){let r=rn(e);return t||(r.equals=Pe),qe&&n&&A!==null&&A.l!==null&&(A.l.s??=[]).push(r),r}function P(e,t,n=!1){return z!==null&&(!or||z.f&131072)&&$e()&&z.f&4325394&&(lr===null||!lr.has(e))&&Ge(),on(e,n?un(t):t,Ut)}function on(e,t,n=null){if(!e.equals(t)){ir?tn.set(e,t):tn.has(e)||tn.set(e,e.v);var r=Kt.ensure();if(r.capture(e,t),e.f&2){let t=e;e.f&2048&&Mt(t),Rt===null&&at(t)}e.wv=yr(),ln(e,v,n),$e()&&B!==null&&B.f&1024&&!(B.f&96)&&(pr===null?mr([e]):pr.push(e)),!r.is_fork&&en.size>0&&!nn&&sn()}return t}function sn(){nn=!1;for(let e of en){e.f&1024&&j(e,y);let t;try{t=br(e)}catch{t=!0}t&&Er(e)}en.clear()}function cn(e){P(e,e.v+1)}function ln(e,t,n){var r=e.reactions;if(r!==null)for(var i=$e(),a=r.length,o=0;o<a;o++){var s=r[o],c=s.f;if(i||s!==B){var l=(c&v)===0;if(l&&j(s,t),c&131072)en.add(s);else if(c&2){var u=s;Rt?.delete(u),c&65536||(c&512&&(B===null||!(B.f&2097152))&&(s.f|=ie),ln(u,y,n))}else if(l){var d=s;c&16&&Yt!==null&&Yt.add(d),n===null?Zt(d):n.push(d)}}}}function un(e){if(typeof e!=`object`||!e||T in e||ce in e)return e;let t=d(e);if(t!==l&&t!==u)return e;var r=new Map,i=n(e),a=an(0),o=null,c=_r,f=e=>{if(_r===c)return e();var t=z,n=_r;sr(null),vr(c);var r=e();return sr(t),vr(n),r};return i&&r.set(`length`,an(e.length,o)),new Proxy(e,{defineProperty(e,t,n){(!(`value`in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Ue();var i=r.get(t);return i===void 0?f(()=>{var e=an(n.value,o);return r.set(t,e),e}):P(i,n.value,!0),!0},deleteProperty(e,t){var n=r.get(t);if(n===void 0){if(t in e){let e=f(()=>an(E,o));r.set(t,e),cn(a)}}else P(n,E),cn(a);return!0},get(t,n,i){if(n===T)return e;var a=r.get(n),c=n in t;if(a===void 0&&(!c||s(t,n)?.writable)&&(a=f(()=>an(un(c?t[n]:E),o)),r.set(n,a)),a!==void 0){var l=V(a);return l===E?void 0:l}return Reflect.get(t,n,i)},getOwnPropertyDescriptor(e,t){var n=Reflect.getOwnPropertyDescriptor(e,t);if(n&&`value`in n){var i=r.get(t);i&&(n.value=V(i))}else if(n===void 0){var a=r.get(t),o=a?.v;if(a!==void 0&&o!==E)return{enumerable:!0,configurable:!0,value:o,writable:!0}}return n},has(e,t){if(t===T)return!0;var n=r.get(t),i=n!==void 0&&n.v!==E||Reflect.has(e,t);return(n!==void 0||B!==null&&(!i||s(e,t)?.writable))&&(n===void 0&&(n=f(()=>an(i?un(e[t]):E,o)),r.set(t,n)),V(n)===E)?!1:i},set(e,t,n,c){var l=r.get(t),u=t in e;if(i&&t===`length`)for(var d=n;d<l.v;d+=1){var p=r.get(d+``);p===void 0?d in e&&(p=f(()=>an(E,o)),r.set(d+``,p)):P(p,E)}if(l===void 0)(!u||s(e,t)?.writable)&&(l=f(()=>an(void 0,o)),P(l,un(n)),r.set(t,l));else{u=l.v!==E;var m=f(()=>un(n));P(l,m)}var h=Reflect.getOwnPropertyDescriptor(e,t);if(h?.set&&h.set.call(c,n),!u){if(i&&typeof t==`string`){var g=r.get(`length`),_=Number(t);Number.isInteger(_)&&_>=g.v&&P(g,_+1)}cn(a)}return!0},ownKeys(e){V(a);var t=Reflect.ownKeys(e).filter(e=>{var t=r.get(e);return t===void 0||t.v!==E});for(var[n,i]of r)i.v!==E&&!(n in e)&&t.push(n);return t},setPrototypeOf(){We()}})}function dn(e){try{if(typeof e==`object`&&e&&T in e)return e[T]}catch{}return e}function fn(e,t){return Object.is(dn(e),dn(t))}var pn,mn,hn,gn,_n;function vn(){if(pn===void 0){pn=window,mn=document,hn=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;gn=s(t,`firstChild`).get,_n=s(t,`nextSibling`).get,f(e)&&(e[fe]=void 0,e[de]=null,e[pe]=void 0,e.__e=void 0),f(n)&&(n[me]=void 0)}}function yn(e=``){return document.createTextNode(e)}function bn(e){return gn.call(e)}function xn(e){return _n.call(e)}function F(e,t){if(!D)return bn(e);var n=bn(O);if(n===null)n=O.appendChild(yn());else if(t&&n.nodeType!==3){var r=yn();return n?.before(r),De(r),r}return t&&En(n),De(n),n}function Sn(e,t=!1){if(!D){var n=bn(e);return n instanceof Comment&&n.data===``?xn(n):n}if(t){if(O?.nodeType!==3){var r=yn();return O?.before(r),De(r),r}En(O)}return O}function I(e,t=!1){if(!D)return bn(e);var n=F(e,t);return k(e),n}function L(e,t=1,n=!1){let r=D?O:e;for(var i;t--;)i=r,r=xn(r);if(!D)return r;if(n){if(r?.nodeType!==3){var a=yn();return r===null?i?.after(a):r.before(a),De(a),a}En(r)}return De(r),r}function Cn(e){e.textContent=``}function wn(){return!1}function Tn(e,t,n){return t==null||t===`http://www.w3.org/1999/xhtml`?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function En(e){if(e.nodeValue.length<65536)return;let t=e.nextSibling;for(;t!==null&&t.nodeType===3;)t.remove(),e.nodeValue+=t.nodeValue,t=e.nextSibling}function Dn(e){var t=B;if(t===null)return z.f|=se,e;if(!(t.f&32768)&&!(t.f&4))throw e;On(e,t)}function On(e,t){if(!(t!==null&&t.f&16384)){for(;t!==null;){if(t.f&128&&!(t.f&33570816)){if(!(t.f&32768))throw e;try{t.b.error(e);return}catch(t){e=t}}t=t.parent}throw e}}function kn(e){B===null&&(z===null&&Be(e),ze()),ir&&Re(e)}function An(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function jn(e,t){var n=B;n!==null&&n.f&8192&&(e|=b);var r={ctx:A,deps:null,nodes:null,f:e|v|512,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};M?.register_created_effect(r);var i=r;if(e&4)Ht===null?Kt.ensure().schedule(r):Ht.push(r);else if(t!==null){try{Er(r)}catch(e){throw Jn(r),e}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&!(i.f&524288)&&(i=i.first,e&16&&e&65536&&i!==null&&(i.f|=C))}if(i!==null&&(i.parent=n,n!==null&&An(i,n),z!==null&&z.f&2&&!(e&64))){var a=z;(a.effects??=[]).push(i)}return r}function Mn(){return z!==null&&!or}function Nn(e){let t=jn(8,null);return j(t,_),t.teardown=e,t}function Pn(e){kn(`$effect`);var t=B.f;if(!z&&t&32&&A!==null&&!A.i){var n=A;(n.e??=[]).push(e)}else return Fn(e)}function Fn(e){return jn(4|ne,e)}function In(e){return kn(`$effect.pre`),jn(8|ne,e)}function Ln(e){Kt.ensure();let t=jn(64|w,e);return(e={})=>new Promise(n=>{e.outro?Zn(t,()=>{Jn(t),n(void 0)}):(Jn(t),n(void 0))})}function Rn(e){return jn(4,e)}function zn(e,t){var n=A,r={effect:null,ran:!1,deps:e};n.l.$.push(r),r.effect=Hn(()=>{if(e(),!r.ran){r.ran=!0;var n=B;try{cr(n.parent),H(t)}finally{cr(n)}}})}function Bn(){var e=A;Hn(()=>{for(var t of e.l.$){t.deps();var n=t.effect;n.f&1024&&n.deps!==null&&j(n,y),br(n)&&Er(n),t.ran=!1}})}function Vn(e){return jn(oe|w,e)}function Hn(e,t=0){return jn(8|t,e)}function R(e,t=[],n=[],r=[]){St(r,t,n,t=>{jn(8,()=>{e(...t.map(V))})})}function Un(e,t=0){return jn(16|t,e)}function Wn(e){return jn(32|w,e)}function Gn(e){var t=e.teardown;if(t!==null){let n=ir,r=z;ar(!0),sr(null);try{t.call(null)}catch(t){On(t,e.parent)}finally{ar(n),sr(r)}}}function Kn(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){let e=n.ac;e!==null&&bt(()=>{e.abort(ge)});var r=n.next;n.f&64?n.parent=null:Jn(n,t),n=r}}function qn(e){for(var t=e.first;t!==null;){var n=t.next;t.f&32||Jn(t),t=n}}function Jn(e,t=!0){var n=!1;(t||e.f&262144)&&e.nodes!==null&&e.nodes.end!==null&&(Yn(e.nodes.start,e.nodes.end),n=!0),e.f|=ee,Kn(e,t&&!n),Tr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)e.stop();Gn(e),e.f^=ee,e.f|=x;var i=e.parent;i!==null&&i.first!==null&&Xn(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Yn(e,t){for(;e!==null;){var n=e===t?null:xn(e);e.remove(),e=n}}function Xn(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Zn(e,t,n=!0){var r=[];e.f|=256,Qn(e,r,!0);var i=()=>{n&&Jn(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||i();for(var s of r)s.out(o)}else i()}function Qn(e,t,n){if(!(e.f&8192)){e.f^=b;var r=e.nodes&&e.nodes.t;if(r!==null)for(let e of r)(e.is_global||n)&&t.push(e);for(var i=e.first;i!==null;){var a=i.next;if(!(i.f&64)){var o=!!(i.f&65536)||!!(i.f&32)&&!!(e.f&16);Qn(i,t,o?n:!1)}i=a}}}function $n(e){e.f&=-257,er(e,!0)}function er(e,t){if(!(e.f&256)&&e.f&8192){e.f^=b,e.f&1024||(j(e,v),Kt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=!!(n.f&65536)||!!(n.f&32);er(n,i?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(let e of a)(e.is_global||t)&&e.in()}}function tr(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:xn(n);t.append(n),n=i}}var nr=null,rr=!1,ir=!1;function ar(e){ir=e}var z=null,or=!1;function sr(e){z=e}var B=null;function cr(e){B=e}var lr=null;function ur(e){z!==null&&(lr??=new Set).add(e)}var dr=null,fr=0,pr=null;function mr(e){pr=e}var hr=1,gr=0,_r=gr;function vr(e){_r=e}function yr(){return++hr}function br(e){var t=e.f;if(t&2048)return!0;if(t&2&&(e.f&=~ie),t&4096){for(var n=e.deps,r=n.length,i=0;i<r;i++){var a=n[i];if(br(a)&&Nt(a),a.wv>e.wv)return!0}t&512&&Rt===null&&j(e,_)}return!1}function xr(e,t,n=!0){var r=e.reactions;if(r!==null&&!(lr!==null&&lr.has(e)))for(var i=0;i<r.length;i++){var a=r[i];a.f&2?xr(a,t,!1):t===a&&(n?j(a,v):a.f&1024&&j(a,y),Zt(a))}}function Sr(e){var t=dr,n=fr,r=pr,i=z,a=lr,o=A,s=or,c=_r,l=e.f;dr=null,fr=0,pr=null,z=l&96?null:e,lr=null,Ye(e.ctx),or=!1,_r=++gr,e.ac!==null&&(bt(()=>{e.ac.abort(ge)}),e.ac=null);try{e.f|=ae;var u=e.fn,d=u();e.f|=S;var f=Cr(e);if($e()&&pr!==null&&!or&&f!==null&&!(e.f&6146))for(var p=0;p<pr.length;p++)xr(pr[p],e);if(i!==null&&i!==e){if(gr++,i.deps!==null)for(let e=0;e<n;e+=1)i.deps[e].rv=gr;if(t!==null)for(let e of t)e.rv=gr;pr!==null&&(r===null?r=pr:r.push(...pr))}return e.f&8388608&&(e.f^=se),d}catch(t){return Cr(e),Dn(t)}finally{e.f^=ae,dr=t,fr=n,pr=r,z=i,lr=a,Ye(o),or=s,_r=c}}function Cr(e){var t=e.deps,n=M?.is_fork;if(dr!==null){var r;if(n||Tr(e,fr),t!==null&&fr>0)for(t.length=fr+dr.length,r=0;r<dr.length;r++)t[fr+r]=dr[r];else e.deps=t=dr;if(Mn()&&e.f&512)for(r=fr;r<t.length;r++)(t[r].reactions??=[]).push(e)}else!n&&t!==null&&fr<t.length&&(Tr(e,fr),t.length=fr);return t}function wr(e,t){let n=t.reactions;if(n!==null){var a=r.call(n,e);if(a!==-1){var o=n.length-1;o===0?n=t.reactions=null:(n[a]=n[o],n.pop())}}if(n===null&&t.f&2&&(dr===null||!i.call(dr,t))){var s=t;s.f&512&&(s.f^=512,s.f&=~ie),s.v!==E&&at(s),s.ac!==null&&bt(()=>{s.ac.abort(ge),s.ac=null,j(s,v)}),Pt(s),Tr(s,0)}}function Tr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)wr(e,n[r])}function Er(e){var t=e.f;if(!(t&16384)){j(e,_);var n=B,r=rr;B=e,rr=!(t&96);try{t&16777232?qn(e):Kn(e),Gn(e);var i=Sr(e);e.teardown=typeof i==`function`?i:null,e.wv=hr}finally{rr=r,B=n}}}async function Dr(){await Promise.resolve(),qt()}function V(e){var t=!!(e.f&2);if(nr?.add(e),z!==null&&!or&&!(B!==null&&B.f&16384)&&(lr===null||!lr.has(e))){var n=z.deps;if(z.f&2097152)e.rv<gr&&(e.rv=gr,dr===null&&n!==null&&n[fr]===e?fr++:dr===null?dr=[e]:dr.push(e));else{z.deps??=[],i.call(z.deps,e)||z.deps.push(e);var r=e.reactions;r===null?e.reactions=[z]:i.call(r,z)||r.push(z)}}if(ir&&tn.has(e))return tn.get(e);if(t){var a=e;if(ir){var o=a.v;return(!(a.f&1024)&&a.reactions!==null||kr(a))&&(o=Mt(a)),tn.set(a,o),o}var s=!(a.f&512)&&!or&&z!==null&&(rr||!!(z.f&512)),c=(a.f&S)===0;br(a)&&(s&&(a.f|=512),Nt(a)),s&&!c&&(Ft(a),Or(a))}if(Rt?.has(e))return Rt.get(e);if(e.f&8388608)throw e.v;return e.v}function Or(e){if(e.f|=512,e.deps!==null)for(let t of e.deps)(t.reactions??=[]).push(e),t.f&2&&!(t.f&512)&&(Ft(t),Or(t))}function kr(e){if(e.v===E)return!0;if(e.deps===null)return!1;for(let t of e.deps)if(tn.has(t)||t.f&2&&kr(t))return!0;return!1}function H(e){var t=or;try{return or=!0,e()}finally{or=t}}function U(e){if(!(typeof e!=`object`||!e||e instanceof EventTarget)){if(T in e)Ar(e);else if(!Array.isArray(e))for(let t in e){let n=e[t];typeof n==`object`&&n&&T in n&&Ar(n)}}}function Ar(e,t=new Set){if(typeof e==`object`&&e&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let n in e)try{Ar(e[n],t)}catch{}let n=d(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){let t=c(n);for(let n in t){let r=t[n].get;if(r)try{r.call(e)}catch{}}}}}[...`allowfullscreen.async.autofocus.autoplay.checked.controls.default.disabled.formnovalidate.indeterminate.inert.ismap.loop.multiple.muted.nomodule.novalidate.open.playsinline.readonly.required.reversed.seamless.selected.webkitdirectory.defer.disablepictureinpicture.disableremoteplayback`.split(`.`)];var jr=[`touchstart`,`touchmove`];function Mr(e){return jr.includes(e)}var Nr=Symbol(`events`),Pr=new Set,Fr=new Set;function Ir(e,t,n,r={}){function i(e){if(r.capture||Vr.call(t,e),!e.cancelBubble)return bt(()=>n?.call(this,e))}return e.startsWith(`pointer`)||e.startsWith(`touch`)||e===`wheel`?nt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function W(e,t,n,r,i){var a={capture:r,passive:i},o=Ir(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Nn(()=>{t.removeEventListener(e,o,a)})}function Lr(e,t,n){(t[Nr]??={})[e]=n}function Rr(e){for(var t=0;t<e.length;t++)Pr.add(e[t]);for(var n of Fr)n(e)}var zr=null,Br=!1;function Vr(e){var t=this,n=t.ownerDocument,r=e.type,i=e.composedPath?.()||[],a=i[0]||e.target;zr=e,Br||(Br=!0,setTimeout(()=>{Br=!1,zr=null}));var s=0,c=zr===e&&e[Nr];if(c){var l=i.indexOf(c);if(l!==-1&&(t===document||t===window)){e[Nr]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(s=l)}if(a=i[s]||e.target,a!==t){o(e,`currentTarget`,{configurable:!0,get(){return a||n}});var d=z,f=B;sr(null),cr(null);try{for(var p,m=[];a!==null&&a!==t;){try{var h=a[Nr]?.[r];h!=null&&(!a.disabled||e.target===a)&&h.call(a,e)}catch(e){p?m.push(e):p=e}if(e.cancelBubble)break;s++,a=s<i.length?i[s]:null}if(p){for(let e of m)queueMicrotask(()=>{throw e});throw p}}finally{e[Nr]=t,delete e.currentTarget,sr(d),cr(f)}}}var Hr=globalThis?.window?.trustedTypes&&globalThis.window.trustedTypes.createPolicy(`svelte-trusted-html`,{createHTML:e=>e});function Ur(e){return Hr?.createHTML(e)??e}function Wr(e){var t=Tn(`template`);return t.innerHTML=Ur(e.replaceAll(`<!>`,`<!---->`)),t.content}function Gr(e,t){var n=B;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function G(e,t){var n=!!(t&1),r=!!(t&2),i,a=!e.startsWith(`<!>`);return()=>{if(D)return Gr(O,null),O;i===void 0&&(i=Wr(a?e:`<!>`+e),n||(i=bn(i)));var t=r||hn?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=bn(t),s=t.lastChild;Gr(o,s)}else Gr(t,t);return t}}function Kr(e,t,n=`svg`){var r=!e.startsWith(`<!>`),i=!!(t&1),a=`<${n}>${r?e:`<!>`+e}</${n}>`,o;return()=>{if(D)return Gr(O,null),O;if(!o){var e=bn(Wr(a));if(i)for(o=document.createDocumentFragment();bn(e);)o.appendChild(bn(e));else o=bn(e)}var t=o.cloneNode(!0);if(i){var n=bn(t),r=t.lastChild;Gr(n,r)}else Gr(t,t);return t}}function qr(e,t){return Kr(e,t,`svg`)}function Jr(){if(D)return Gr(O,null),O;var e=document.createDocumentFragment(),t=document.createComment(``),n=yn();return e.append(t,n),Gr(t,n),e}function K(e,t){if(D){var n=B;(!(n.f&32768)||n.nodes.end===null)&&(n.nodes.end=O),Oe();return}e!==null&&e.before(t)}function Yr(e){let t=0,n=rn(0),r;return()=>{Mn()&&(V(n),Hn(()=>(t===0&&(r=H(()=>e(()=>cn(n)))),t+=1,()=>{nt(()=>{--t,t===0&&(r?.(),r=void 0,cn(n))})})))}}var Xr=C|w;function Zr(e,t,n,r){new Qr(e,t,n,r)}var Qr=class{parent;is_pending=!1;transform_error;#e;#t=D?O:null;#n;#r;#i;#a=null;#o=null;#s=null;#c=null;#l=0;#u=0;#d=!1;#f=new Set;#p=new Set;#m=null;#h=Yr(()=>(this.#m=rn(this.#l),()=>{this.#m=null}));constructor(e,t,n,r){this.#e=e,this.#n=t,this.#r=e=>{var t=B;t.b=this,t.f|=128,n(e)},this.parent=B.b,this.transform_error=r??this.parent?.transform_error??(e=>e),this.#i=Un(()=>{if(D){let e=this.#t;Oe();let t=e.data===`[!`;if(e.data.startsWith(`[?`)){let t=JSON.parse(e.data.slice(2));this.#_(t)}else t?this.#y():this.#g()}else this.#b()},Xr),D&&(this.#e=O)}#g(){try{this.#a=Wn(()=>this.#r(this.#e))}catch(e){this.error(e)}}#_(e){let t=this.#n.failed,{reset:n,invoke_onerror:r}=this.#v(e);nt(r),t&&(this.#s=Wn(()=>{t(this.#e,()=>e,()=>n)}))}#v(e){var t=!1,n=!1;let r=()=>{if(t){Te();return}t=!0,n&&Ke(),this.#s!==null&&Zn(this.#s,()=>{this.#s=null}),this.#S(()=>{this.#b()})};return{reset:r,invoke_onerror:()=>{try{n=!0,this.#n.onerror?.(e,r),n=!1}catch(e){On(e,this.#i&&this.#i.parent)}}}}#y(){let e=this.#n.pending;e&&(this.is_pending=!0,this.#o=Wn(()=>e(this.#e)),nt(()=>{var e=this.#c=document.createDocumentFragment(),t=yn(),n=!1;if(e.append(t),this.#a=this.#S(()=>{try{return Wn(()=>this.#r(t))}catch(e){try{this.error(e),n=!0}catch(e){On(e,this.#i.parent)}return null}}),this.#a===null){this.#c=null,n&&this.#x(M);return}this.#u===0&&(this.#e.before(e),this.#c=null,Zn(this.#o,()=>{this.#o=null}),this.#x(M))}))}#b(){try{if(this.is_pending=this.has_pending_snippet(),this.#u=0,this.#l=0,this.#a=Wn(()=>{this.#r(this.#e)}),this.#u>0){var e=this.#c=document.createDocumentFragment();tr(this.#a,e);let t=this.#n.pending;this.#o=Wn(()=>t(this.#e))}else this.#x(M)}catch(e){this.error(e)}}#x(e){this.is_pending=!1,e.transfer_effects(this.#f,this.#p)}defer_effect(e){st(e,this.#f,this.#p)}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!this.#n.pending}#S(e){var t=B,n=z,r=A;cr(this.#i),sr(this.#i),Ye(this.#i.ctx);try{return Kt.ensure(),e()}finally{cr(t),sr(n),Ye(r)}}#C(e,t){if(!this.has_pending_snippet()){this.parent&&this.parent.#C(e,t);return}this.#u+=e,this.#u===0&&(this.#x(t),this.#o&&Zn(this.#o,()=>{this.#o=null}),this.#c&&=(this.#e.before(this.#c),null))}update_pending_count(e,t){this.#C(e,t),this.#l+=e,!(!this.#m||this.#d)&&(this.#d=!0,nt(()=>{this.#d=!1,this.#m&&on(this.#m,this.#l)}))}get_effect_pending(){return this.#h(),V(this.#m)}error(e){if(!this.#n.onerror&&!this.#n.failed)throw e;M?.is_fork?(this.#a&&M.skip_effect(this.#a),this.#o&&M.skip_effect(this.#o),this.#s&&M.skip_effect(this.#s),M.oncommit(()=>{this.#w(e)})):this.#w(e)}#w(e){this.#a&&=(Jn(this.#a),null),this.#o&&=(Jn(this.#o),null),this.#s&&=(Jn(this.#s),null),D&&(De(this.#t),ke(),De(Ae()));let t=this.#n.failed,n=e=>{let{reset:n,invoke_onerror:r}=this.#v(e);r(),t&&(this.#s=this.#S(()=>{try{return Wn(()=>{var r=B;r.b=this,r.f|=128,t(this.#e,()=>e,()=>n)})}catch(e){return On(e,this.#i.parent),null}}))};nt(()=>{var t;try{t=this.transform_error(e)}catch(e){On(e,this.#i&&this.#i.parent);return}typeof t==`object`&&t&&typeof t.then==`function`?t.then(n,e=>On(e,this.#i&&this.#i.parent)):n(t)})}};function q(e,t){var n=t==null?``:typeof t==`object`?`${t}`:t;n!==(e[me]??=e.nodeValue)&&(e[me]=n,e.nodeValue=`${n}`)}function $r(e,t){return ti(e,t)}var ei=new Map;function ti(e,{target:t,anchor:n,props:r={},events:i,context:o,intro:s=!0,transformError:c}){vn();var l=void 0,u=Ln(()=>{var s=n??t.appendChild(yn());Zr(s,{pending:()=>{}},t=>{Xe({});var n=A;if(o&&(n.c=o),i&&(r.$$events=i),D&&Gr(t,null),l=e(t,r)||Qe(),D&&(B.nodes.end=O,O===null||O.nodeType!==8||O.data!==`]`))throw Ce(),ve;Ze()},c);var u=new Set,d=e=>{for(var n=0;n<e.length;n++){var r=e[n];if(!u.has(r)){u.add(r);var i=Mr(r);for(let e of[t,document]){var a=ei.get(e);a===void 0&&(a=new Map,ei.set(e,a));var o=a.get(r);o===void 0?(e.addEventListener(r,Vr,{passive:i}),a.set(r,1)):a.set(r,o+1)}}}};return d(a(Pr)),Fr.add(d),()=>{for(var e of u)for(let n of[t,document]){var r=ei.get(n),i=r.get(e);--i==0?(n.removeEventListener(e,Vr),r.delete(e),r.size===0&&ei.delete(n)):r.set(e,i)}Fr.delete(d),s!==n&&s.parentNode?.removeChild(s)}});return ni.set(l,u),l}var ni=new WeakMap,ri=class{anchor;#e=new Map;#t=new Map;#n=new Map;#r=new Set;#i=!0;constructor(e,t=!0){this.anchor=e,this.#i=t}#a=e=>{if(this.#e.has(e)){var t=this.#e.get(e),n=this.#t.get(t);if(n)$n(n),this.#r.delete(t);else{var r=this.#n.get(t);r&&($n(r.effect),this.#t.set(t,r.effect),this.#n.delete(t),r.fragment.lastChild.remove(),this.anchor.before(r.fragment),n=r.effect)}for(let[t,n]of this.#e){if(this.#e.delete(t),t===e)break;let r=this.#n.get(n);r&&(Jn(r.effect),this.#n.delete(n))}for(let[e,r]of this.#t){if(e===t||this.#r.has(e))continue;let i=()=>{if(Array.from(this.#e.values()).includes(e)){var t=document.createDocumentFragment();tr(r,t),t.append(yn()),this.#n.set(e,{effect:r,fragment:t})}else Jn(r);this.#r.delete(e),this.#t.delete(e)};this.#i||!n?(this.#r.add(e),Zn(r,i,!1)):i()}}};#o=e=>{this.#e.delete(e);let t=Array.from(this.#e.values());for(let[e,n]of this.#n)t.includes(e)||(Jn(n.effect),this.#n.delete(e))};ensure(e,t){var n=M,r=wn();if(t&&!this.#t.has(e)&&!this.#n.has(e)){if(r){var i=document.createDocumentFragment(),a=yn();i.append(a),this.#n.set(e,{effect:Wn(()=>t(a)),fragment:i})}else this.#t.set(e,Wn(()=>t(this.anchor)))}if(this.#e.set(n,e),r){for(let[t,r]of this.#t)t===e?n.unskip_effect(r):n.skip_effect(r);for(let[t,r]of this.#n)t===e?n.unskip_effect(r.effect):n.skip_effect(r.effect);n.oncommit(this.#a),n.ondiscard(this.#o)}else D&&(this.anchor=O),this.#a(n)}};function J(e,t,n=!1){var r;D&&(r=O,Oe());var i=new ri(e),a=n?C:0;function o(e,t){if(D){var n=je(r);if(e!==parseInt(n.substring(1))){var a=Ae();De(a),i.anchor=a,Ee(!1),i.ensure(e,t),Ee(!0);return}}i.ensure(e,t)}Un(()=>{var e=!1;t((t,n=0)=>{e=!0,o(n,t)}),e||o(-1,null)},a)}function ii(e,t){return t}function ai(e,t,n){for(var r=[],i=t.length,o,s=t.length,c=0;c<i;c++){let n=t[c];Zn(n,()=>{if(o){if(o.pending.delete(n),o.done.add(n),o.pending.size===0){var t=e.outrogroups;oi(e,a(o.done)),t.delete(o),t.size===0&&(e.outrogroups=null)}}else--s},!1)}if(s===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,d=u.parentNode;Cn(d),d.append(u),e.items.clear()}oi(e,t,!l)}else o={pending:new Set(t),done:new Set},(e.outrogroups??=new Set).add(o)}function oi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(let t of e.pending.values())for(let n of t)r.add(e.items.get(n).e)}for(var i=0;i<t.length;i++){var a=t[i];r?.has(a)?(a.f|=re,tr(a,document.createDocumentFragment())):Jn(t[i],n)}}var si;function ci(e,t,r,i,o,s=null){var c=e,l=new Map;if(t&4){var u=e;c=D?De(bn(u)):u.appendChild(yn())}D&&Oe();var d=null,f=At(()=>{var e=r();return n(e)?e:e==null?[]:a(e)}),p,m=new Map,h=!0;function g(e){v.effect.f&16384||(v.pending.delete(e),v.fallback=d,ui(v,p,c,t,i),d!==null&&(p.length===0?d.f&33554432?(d.f^=re,fi(d,null,c)):$n(d):Zn(d,()=>{d=null})))}function _(e){v.pending.delete(e)}var v={effect:Un(()=>{p=V(f);var e=p.length;let n=!1;D&&je(c)===`[!`!=(e===0)&&(c=Ae(),De(c),Ee(!1),n=!0);for(var a=new Set,u=M,v=wn(),y=0;y<e;y+=1){D&&O.nodeType===8&&O.data===`]`&&(c=O,n=!0,Ee(!1));var b=p[y],x=i(b,y),S=h?null:l.get(x);S?(S.v&&on(S.v,b),S.i&&on(S.i,y),v&&u.unskip_effect(S.e)):(S=di(l,h?c:si??=yn(),b,x,y,o,t,r),h||(S.e.f|=re),l.set(x,S)),a.add(x)}if(e===0&&s&&!d&&(h?d=Wn(()=>s(c)):(d=Wn(()=>s(si??=yn())),d.f|=re)),e>a.size&&Le(``,``,``),D&&e>0&&De(Ae()),!h){if(m.set(u,a),v){for(let[e,t]of l)a.has(e)||u.skip_effect(t.e);u.oncommit(g),u.ondiscard(_)}else g(u)}n&&Ee(!0),V(f)}),flags:t,items:l,pending:m,outrogroups:null,fallback:d};h=!1,D&&(c=O)}function li(e){for(;e!==null&&!(e.f&32);)e=e.next;return e}function ui(e,t,n,r,i){var o=!!(r&8),s=t.length,c=e.items,l=li(e.effect.first),u,d=null,f,p=[],m=[],h,g,_,v;if(o)for(v=0;v<s;v+=1)h=t[v],g=i(h,v),_=c.get(g).e,_.f&33554432||(_.nodes?.a?.measure(),(f??=new Set).add(_));for(v=0;v<s;v+=1){if(h=t[v],g=i(h,v),_=c.get(g).e,e.outrogroups!==null)for(let t of e.outrogroups)t.pending.delete(_),t.done.delete(_);if(_.f&8192&&($n(_),o&&(_.nodes?.a?.unfix(),(f??=new Set).delete(_))),_.f&33554432){if(_.f^=re,_===l)fi(_,null,n);else{var y=d?d.next:l;_===e.effect.last&&(e.effect.last=_.prev),_.prev&&(_.prev.next=_.next),_.next&&(_.next.prev=_.prev),pi(e,d,_),pi(e,_,y),fi(_,y,n),d=_,p=[],m=[],l=li(d.next);continue}}if(_!==l){if(u!==void 0&&u.has(_)){if(p.length<m.length){var b=m[0],x;d=b.prev;var S=p[0],ee=p[p.length-1];for(x=0;x<p.length;x+=1)fi(p[x],b,n);for(x=0;x<m.length;x+=1)u.delete(m[x]);pi(e,S.prev,ee.next),pi(e,d,S),pi(e,ee,b),l=b,d=ee,--v,p=[],m=[]}else u.delete(_),fi(_,l,n),pi(e,_.prev,_.next),pi(e,_,d===null?e.effect.first:d.next),pi(e,d,_),d=_;continue}for(p=[],m=[];l!==null&&l!==_;)(u??=new Set).add(l),m.push(l),l=li(l.next);if(l===null)continue}_.f&33554432||p.push(_),d=_,l=li(_.next)}if(e.outrogroups!==null){for(let t of e.outrogroups)t.pending.size===0&&(oi(e,a(t.done)),e.outrogroups?.delete(t));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var C=[];if(u!==void 0)for(_ of u)_.f&8192||C.push(_);for(;l!==null;)!(l.f&8192)&&l!==e.fallback&&C.push(l),l=li(l.next);var te=C.length;if(te>0){var w=r&4&&s===0?n:null;if(o){for(v=0;v<te;v+=1)C[v].nodes?.a?.measure();for(v=0;v<te;v+=1)C[v].nodes?.a?.fix()}ai(e,C,w)}}o&&nt(()=>{if(f!==void 0)for(_ of f)_.nodes?.a?.apply()})}function di(e,t,n,r,i,a,o,s){var c=o&1?o&16?rn(n):N(n,!1,!1):null,l=o&2?rn(i):null;return{v:c,i:l,e:Wn(()=>(a(t,c??n,l??i,s),()=>{e.delete(r)}))}}function fi(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,a=t&&!(t.f&33554432)?t.nodes.start:n;r!==null;){var o=xn(r);if(a.before(r),r===i)return;r=o}}function pi(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function mi(e,t,n=!1,r=!1,i=!1,a=!1){var o=e,s=``;if(n){var c=e;D&&(o=De(bn(c)))}R(()=>{var e=B;if(s===(s=t()??``)){D&&Oe();return}if(n&&!D){e.nodes=null,c.innerHTML=s,s!==``&&Gr(bn(c),c.lastChild);return}if(e.nodes!==null&&(Yn(e.nodes.start,e.nodes.end),e.nodes=null),s!==``){if(D){for(var a=O.data,l=Oe(),u=l;l!==null&&(l.nodeType!==8||l.data!==``);)u=l,l=xn(l);if(l===null)throw Ce(),ve;Gr(O,u),o=De(l);return}var d=Tn(r?`svg`:i?`math`:`template`,r?be:i?xe:void 0);d.innerHTML=s;var f=r||i?d:d.content;if(Gr(bn(f),f.lastChild),r||i)for(;bn(f);)o.before(bn(f));else o.before(f)}})}function hi(e,t,n){var r;D&&(r=O,Oe());var i=new ri(e);Un(()=>{var e=t()??null;if(D&&je(r)===`[`!=(e!==null)){var a=Ae();De(a),i.anchor=a,Ee(!1),i.ensure(e,e&&(t=>n(t,e))),Ee(!0);return}i.ensure(e,e&&(t=>n(t,e)))},C)}function gi(e,t){let n=null,r=D;var i;if(D){n=O;for(var a=bn(document.head);a!==null&&(a.nodeType!==8||a.data!==e);)a=xn(a);if(a===null)Ee(!1);else{var o=xn(a);a.remove(),De(o)}}D||(i=document.head.appendChild(yn()));try{Un(()=>{var e=Wn(()=>t(i));e.f|=te,D||(e.nodes===null?e.nodes={start:i,end:i,a:null,t:null}:e.nodes.end=i)})}finally{r&&(Ee(!0),De(n))}}function _i(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`){if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_i(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n)}return r}function vi(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_i(e))&&(r&&(r+=` `),r+=t);return r}function yi(e){return typeof e==`object`?vi(e):e??``}var bi=[...` 	
\r\f\xA0\v﻿`];function xi(e,t,n){var r=e==null?``:``+e;if(t&&(r=r?r+` `+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+` `+i:i;else if(r.length)for(var a=i.length,o=0;(o=r.indexOf(i,o))>=0;){var s=o+a;(o===0||bi.includes(r[o-1]))&&(s===r.length||bi.includes(r[s]))?r=(o===0?``:r.substring(0,o))+r.substring(s+1):o=s}}return r===``?null:r}function Y(e,t,n,r,i,a){var o=e[fe];if(D||o!==n||o===void 0){var s=xi(n,r,a);(!D||s!==e.getAttribute(`class`))&&(s==null?e.removeAttribute(`class`):t?e.className=s:e.setAttribute(`class`,s)),e[fe]=n}else if(a&&i!==a)for(var c in a){var l=!!a[c];(i==null||l!==!!i[c])&&e.classList.toggle(c,l)}return a}function Si(e,t){t?e.hasAttribute(`selected`)||e.setAttribute(`selected`,``):e.removeAttribute(`selected`)}function Ci(e,t){var r=e.__defaultValue,i=e.multiple,a=i?r??[]:null;if(!i||n(a)){var o=e.selectedIndex,s=t&&i?new Set(e.selectedOptions):null;for(var c of e.options){var l=Di(c);Si(c,i?a.includes(l):fn(l,r))}if(t){if(s!==null)for(c of e.options){var u=s.has(c);c.selected!==u&&(c.selected=u)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}}function wi(e,t,r=!1){if(e.multiple){if(t==null)return;if(!n(t))return we();for(var i of e.options)i.selected=t.includes(Di(i));return}for(i of e.options)if(fn(Di(i),t)){i.selected=!0;return}(!r||t!==void 0)&&(e.selectedIndex=-1)}function Ti(e){var t=new MutationObserver(t=>{t.every(Oi)||(`__defaultValue`in e&&Ci(e,!1),`__value`in e&&wi(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:[`value`]}),Nn(()=>{t.disconnect()})}function Ei(e,t,n=t){var r=new WeakSet,i=!0;xt(e,`change`,t=>{var i=t?`[selected]`:`:checked`,a;if(e.multiple)a=[].map.call(e.querySelectorAll(i),Di);else{var o=e.querySelector(i)??e.querySelector(`option:not([disabled])`);a=o&&Di(o)}n(a),e.__value=a,M!==null&&r.add(M)}),Rn(()=>{var a=t();if(e===document.activeElement){var o=M;if(r.has(o))return}if(wi(e,a,i),i&&a===void 0){var s=e.querySelector(`:checked`);s!==null&&(a=Di(s),n(a))}e.__value=a,i=!1})}function Di(e){return`__value`in e?e.__value:e.value}function Oi(e){if(e.target.closest(`selectedcontent`)!==null)return!0;if(e.type===`childList`){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(e=>e.nodeName===`SELECTEDCONTENT`)}return!1}var ki=Symbol(`is custom element`),Ai=Symbol(`is html`),ji=_e?`link`:`LINK`;function Mi(e){if(D){var t=!1,n=()=>{if(!t){if(t=!0,e.hasAttribute(`value`)){var n=e.value;Ni(e,`value`,null),e.value=n}if(e.hasAttribute(`checked`)){var r=e.checked;Ni(e,`checked`,null),e.checked=r}}};e[he]=n,nt(n),yt()}}function Ni(e,t,n,r){var i=Pi(e);D&&(i[t]=e.getAttribute(t),t===`src`||t===`srcset`||t===`href`&&e.nodeName===ji)||i[t]!==(i[t]=n)&&(t===`loading`&&(e[ue]=n),n==null?e.removeAttribute(t):typeof n!=`string`&&Ii(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Pi(e){return e[de]??={[ki]:e.nodeName.includes(`-`),[Ai]:e.namespaceURI===ye}}var Fi=new Map;function Ii(e){var t=e.getAttribute(`is`)||e.nodeName,n=Fi.get(t);if(n)return n;Fi.set(t,n=new Set);for(var r,i=e,a=Element.prototype;a!==i;){for(var o in r=c(i),r)r[o].set&&o!==`innerHTML`&&o!==`textContent`&&o!==`innerText`&&n.add(o);i=d(i)}return n}function Li(e,t,n=t){var r=new WeakSet;xt(e,`input`,async i=>{var a=i?e.defaultValue:e.value;if(a=Ri(e)?zi(a):a,n(a),M!==null&&r.add(M),await Dr(),a!==(a=t())){var o=e.selectionStart,s=e.selectionEnd,c=e.value.length;if(e.value=a??``,s!==null){var l=e.value.length;o===s&&s===c&&l>c?(e.selectionStart=l,e.selectionEnd=l):(e.selectionStart=o,e.selectionEnd=Math.min(s,l))}}}),(D&&e.defaultValue!==e.value||H(t)==null&&e.value)&&(n(Ri(e)?zi(e.value):e.value),M!==null&&r.add(M)),Hn(()=>{var n=t();if(e===document.activeElement){var i=M;if(r.has(i))return}Ri(e)&&n===zi(e.value)||(e.type!==`date`||n||e.value)&&n!==e.value&&(e.value=n??``)})}function Ri(e){var t=e.type;return t===`number`||t===`range`}function zi(e){return e===``?null:+e}function Bi(e,t){return e===t||e?.[T]===t}function Vi(e=Qe(),t,n,r){var i=A.r,a=B;return Rn(()=>{var o,s;return Hn(()=>{o=s,s=r?.()||[],H(()=>{Bi(n(...s),e)||(t(e,...s),o&&Bi(n(...o),e)&&t(null,...o))})}),()=>{let r=a;for(;r!==i&&r.parent!==null&&r.parent.f&33554432;)r=r.parent;let o=()=>{s&&Bi(n(...s),e)&&t(null,...s)},c=r.teardown;r.teardown=()=>{o(),c?.()}}}),e}function Hi(e){return function(...t){return t[0].preventDefault(),e?.apply(this,t)}}function Ui(e=!1){let t=A,n=t.l.u;if(!n)return;let r=()=>U(t.s);if(e){let e=0,n={},i=Et(()=>{let r=!1,i=t.s;for(let e in i)i[e]!==n[e]&&(n[e]=i[e],r=!0);return r&&e++,e});r=()=>V(i)}n.b.length&&In(()=>{Wi(t,r),h(n.b)}),Pn(()=>{let e=H(()=>n.m.map(m));return()=>{for(let t of e)typeof t==`function`&&t()}}),n.a.length&&Pn(()=>{Wi(t,r),h(n.a)})}function Wi(e,t){if(e.l.s)for(let t of e.l.s)V(t);t()}function Gi(e,t,n,r){var i=!qe||!!(n&2),a=!!(n&8),o=!!(n&16),c=r,l=!0,u=void 0,d=()=>o&&i?(u??=Et(r),V(u)):(l&&(l=!1,c=o?H(r):r),c);let f;if(a){var p=T in e||le in e;f=s(e,t)?.set??(p&&t in e?n=>e[t]=n:void 0)}var m,h=!1;a?[m,h]=gt(()=>e[t]):m=e[t],m===void 0&&r!==void 0&&(m=d(),f&&(i&&He(t),f(m)));var g=i?()=>{var n=e[t];return n===void 0?d():(l=!0,n)}:()=>{var n=e[t];return n!==void 0&&(c=void 0),n===void 0?c:n};if(i&&!(n&4))return g;if(f){var _=e.$$legacy;return(function(e,t){return arguments.length>0?((!i||!t||_||h)&&f(t?g():e),e):g()})}var v=!1,y=(n&1?Et:At)(()=>(v=!1,g()));a&&V(y);var b=B;return(function(e,t){if(arguments.length>0){let n=t?V(y):i&&a?un(e):e;return P(y,n),v=!0,c!==void 0&&(c=n),e}return ir&&v||b.f&16384?y.v:V(y)})}function Ki(e){A===null&&Fe(`onMount`),qe&&A.l!==null?qi(A).m.push(e):Pn(()=>{let t=H(e);if(typeof t==`function`)return t})}function qi(e){var t=e.l;return t.u??={a:[],b:[],m:[]}}typeof window<`u`&&((window.__svelte??={}).v??=new Set).add(`5`),Je();var Ji=typeof localStorage<`u`&&localStorage.getItem(`language`)||`fr`,Yi=`dia.delicacy@gmail.com`,Xi=`+41 227 34 11 22`,Zi=ut(Ji);typeof localStorage<`u`&&Zi.subscribe(e=>{localStorage.setItem(`language`,e)});var Qi={en:{nav:{home:`Home`,menu:`Menu`,about:`About Us`,gallery:`Gallery`,contact:`Contact`,highlights:`Highlights`,reservation:`Reservation`},menu:{today:`Today`,notAvailable:`Menu not available for this date.`,loading:`Loading menu...`,breakfast:`Breakfast`,lunchDinner:`Lunch & Dinner`},reservation:{type:`Reservation Type`,standard:`Dine-in`,takeaway:`Takeaway`,specialDishPickup:`Special Dish Pickup`,private:`Private Event`,portions:`Portions`,title:`Make a Reservation`,manageTitle:`Manage Your Reservation`,name:`Your Name`,email:`Email`,phone:`Phone Number`,phoneHint:`Ex: 0761234567, 0041761234567`,date:`Date`,time:`Time`,openingHours:`Opening hours:`,guests:`Number of Guests`,message:`Special Requests`,submit:`Reserve Table`,update:`Update Reservation`,cancel:`Cancel Reservation`,success:`Reservation request received! We will send you an email once it is confirmed.`,updateSuccess:`Reservation updated successfully!`,cancelSuccess:`Reservation cancelled successfully.`,new:`Book another table`,notFound:`Reservation not found.`,loading:`Loading your reservation...`,errors:{DB_ERROR:`We encountered a technical issue saving your reservation. Please contact us directly at `+Yi+` or `+Xi+` to finalize your booking.`,EMAIL_SEND_ERROR:`Your reservation has been received! However, we were unable to send the confirmation email. Don't worry—our team will reach out to you manually. You can also contact us at `+Yi+`.`,NO_AVAILABILITY:`We're sorry, there are no seats available for the selected date.`,GENERIC:`An unexpected error occurred. Please try again or contact us at `+Yi+`.`,FIELD_REQUIRED:`Please fill in the required field.`,NOT_FOUND:`Reservation not found.`,UNAUTHORIZED:`Unauthorized access.`,SPECIAL_DISH_NOT_SELECTED:`Please select a special dish.`,LOAD_FAILED:`Failed to load reservation.`,INVALID_EMAIL_FORMAT:`Invalid email format.`,INVALID_PHONE_FORMAT:`Invalid phone number.`,INVALID_DATE_PAST:`Date must be today or in the future.`,PROCESS_FAILED:`Failed to process reservation. Please contact us at `+Yi+` if this persists.`,CONNECTION_FAILED:`Connection error. Please try again or contact us at `+Yi+`.`,INVALID_JSON:`Invalid request format.`,INVALID_TIME_RANGE:`Time must be between {start} and {end}.`,NAME_TOO_LONG:`Name is too long.`,EMAIL_TOO_LONG:`Email is too long.`,NOTES_TOO_LONG:`Notes are too long.`,INVALID_PARTY_SIZE:`Invalid party size.`}},footer:{rights:`All rights reserved`},contact:{hours:`Opening Hours`,email:`Email`,phone:`Phone`,address:`Address`,location:`Location`,hoursDetails:`Monday - Sunday: 11:00 AM - 10:00 PM`,follow:`Follow Us`},gallery:{scrollHint:`Swipe to explore`}},fr:{nav:{home:`Accueil`,menu:`Menu`,about:`À Propos`,gallery:`Galerie`,contact:`Contact`,highlights:`Faits Saillants`,reservation:`Réservation`},menu:{today:`Aujourd'hui`,notAvailable:`Menu non disponible pour cette date.`,loading:`Chargement du menu...`,breakfast:`Petit-déjeuner`,lunchDinner:`Déjeuner & Dîner`},reservation:{type:`Type de réservation`,standard:`Sur place`,takeaway:`À emporter`,specialDishPickup:`Plat spécial à emporter`,private:`Événement privé`,title:`Faire une Réservation`,manageTitle:`Gérer votre réservation`,name:`Votre Nom`,email:`Email`,phone:`Numéro de Téléphone`,phoneHint:`Ex: 0761234567, 0041761234567`,date:`Date`,time:`Heure`,timeHint:`Ex: 19:00`,openingHours:`Heures d'ouverture :`,guests:`Nombre de Couverts`,portions:`Nombre de portions`,message:`Demandes Spéciales`,selectSpecialDish:`Sélectionner un plat spécial`,noSpecialDishesAvailable:`Aucun plat spécial disponible pour le moment.`,submit:`Réserver`,update:`Modifier la réservation`,cancel:`Annuler la réservation`,success:`Demande de réservation reçue ! Nous vous enverrons un e-mail dès qu'elle sera confirmée.`,updateSuccess:`Réservation mise à jour avec succès !`,cancelSuccess:`Réservation annulée avec succès.`,new:`Réserver une autre table`,notFound:`Réservation introuvable.`,loading:`Chargement de votre réservation...`,errors:{DB_ERROR:`Nous avons rencontré un problème technique lors de l'enregistrement de votre réservation. Veuillez nous contacter directement à `+Yi+` ou au `+Xi+` pour finaliser votre réservation.`,EMAIL_SEND_ERROR:`Votre demande a été enregistrée, mais un ou plusieurs e-mails de notification n’ont pas pu être envoyés. Veuillez nous contacter à `+Yi+` ou au `+Xi+` pour confirmer votre réservation. Merci de ne pas soumettre à nouveau votre demande.`,NO_AVAILABILITY:`Désolé, aucune place n'est disponible pour la date sélectionnée.`,GENERIC:`Une erreur inattendue est survenue. Veuillez réessayer ou nous contacter à `+Yi+`.`,FIELD_REQUIRED:`Veuillez remplir le champ obligatoire.`,NOT_FOUND:`Réservation introuvable.`,UNAUTHORIZED:`Accès non autorisé.`,SPECIAL_DISH_NOT_SELECTED:`Veuillez sélectionner un plat spécial.`,LOAD_FAILED:`Échec du chargement de la réservation.`,INVALID_EMAIL_FORMAT:`Format d'email invalide.`,INVALID_PHONE_FORMAT:`Numéro de téléphone invalide.`,INVALID_DATE_PAST:`La date doit être aujourd'hui ou dans le futur.`,PROCESS_FAILED:`Échec du traitement de la réservation. Veuillez nous contacter à `+Yi+` si le problème persiste.`,CONNECTION_FAILED:`Erreur de connexion. Veuillez réessayer ou nous contacter à `+Yi+`.`,INVALID_JSON:`Format de requête invalide.`,INVALID_TIME_RANGE:`L'heure doit être comprise entre {start} et {end}.`,NAME_TOO_LONG:`Le nom est trop long.`,EMAIL_TOO_LONG:`L'email est trop long.`,NOTES_TOO_LONG:`Les notes sont trop longues.`,INVALID_PARTY_SIZE:`Nombre de personnes invalide.`}},footer:{rights:`Tous droits réservés`},contact:{hours:`Horaires d'ouverture`,email:`Email`,phone:`Téléphone`,address:`Adresse`,location:`Emplacement`,hoursDetails:`Lundi - Dimanche: 11h00 - 22h00`,follow:`Suivez-nous`},gallery:{scrollHint:`Glissez pour explorer`}}};function X(e,t){let n=e.split(`.`),r=Qi[t];for(let e of n)r=r?.[e];return r||e}var $i=`/favicon.svg`,ea=G(`<a href="/" class="flex items-center text-xl px-2 gap-2"><img alt="Dia's Delicacy" class="h-8 md:h-10 w-auto"/> <h4 class="!text-primary font-bold !m-0">Dia's Delicacy</h4></a>`);function ta(e){var t=ea(),n=F(t);ke(2),k(t),R(()=>Ni(n,`src`,$i)),K(e,t)}var na=G(`<li class="!mb-0"><a> </a></li>`);function ra(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=[`home`,`about`,`highlights`,`contact`];a.splice(1,0,`menu`);{let e=a.indexOf(`highlights`);a.splice(e+1,0,`gallery`)}function o(){typeof document<`u`&&(document.querySelectorAll(`details[open]`).forEach(e=>{e.open=!1}),document.activeElement&&document.activeElement.blur())}Ui();var s=Jr();ci(Sn(s),1,()=>a,ii,(e,t)=>{var r=na(),i=F(r),a=I(i,!0);k(r),R(e=>{Ni(i,`href`,`#${V(t)??``}`),q(a,e)},[()=>X(`nav.${V(t)}`,n())]),W(`click`,i,o),K(e,r)}),K(e,s),Ze(),i()}var ia=qr(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"></path></svg>`),aa=qr(`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 shrink-0 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"></path></svg>`),oa=G(`<button class="btn btn-ghost btn-circle grid place-items-center p-0 h-10 w-10 min-h-0 border-none hover:bg-base-200 transition-all duration-300" aria-label="Toggle Theme"><!></button>`);function sa(e,t){Xe(t,!0);let n=an(`dark`);Pn(()=>{let e=localStorage.getItem(`theme`)||(window.matchMedia(`(prefers-color-scheme: dark)`).matches?`dark`:`light`);P(n,e,!0),document.documentElement.setAttribute(`data-theme`,V(n))});function r(){P(n,V(n)===`light`?`dark`:`light`,!0),document.documentElement.setAttribute(`data-theme`,V(n)),localStorage.setItem(`theme`,V(n))}var i=oa(),a=F(i),o=e=>{K(e,ia())},s=e=>{K(e,aa())};J(a,e=>{V(n)===`light`?e(o):e(s,-1)}),k(i),Lr(`click`,i,r),K(e,i),Ze()}Rr([`click`]);var ca=G(`<header class="navbar svelte-oiwvqb"><div class="navbar-start"><details class="dropdown lg:hidden"><summary class="btn btn-ghost p-2 list-none svelte-oiwvqb"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16"></path></svg></summary> <ul class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"><!></ul></details> <!></div> <div class="navbar-center hidden lg:flex"><ul class="menu menu-horizontal px-1 font-semibold !m-0"><!></ul></div> <div class="navbar-end pr-2"><div class="flex items-center mr-1"><button class="btn btn-sm btn-ghost px-2 font-bold flex flex-col gap-0 h-auto min-h-0 leading-tight py-1" title="Switch Language"><span>FR</span> <div class="w-5 h-[1px] bg-base-content/20 my-[2px]"></div> <span>EN</span></button></div> <div><!></div></div></header>`);function la(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht();Ui();var a=ca(),o=F(a),s=F(o),c=L(F(s),2);ra(F(c),{}),k(c),k(s),ta(L(s,2),{}),k(o);var l=L(o,2),u=F(l);ra(F(u),{}),k(u),k(l);var d=L(l,2),f=F(d),p=F(f),m=F(p),h=L(m,4);k(p),k(f);var g=L(f,2);sa(F(g),{}),k(g),k(d),k(a),R(()=>{Y(m,1,`text-[12px] ${n()===`fr`?`text-primary`:`opacity-100`}`),Y(h,1,`text-[12px] ${n()===`en`?`text-primary`:`opacity-100`}`)}),W(`click`,p,()=>Zi.set(n()===`en`?`fr`:`en`)),K(e,a),Ze(),i()}var ua=`Dia's Delicacy was born from a woman’s heartfelt dream to revive the treasured flavors of her childhood. Today, that vision has flourished into a culinary destination — an homage to India’s rich and diverse food heritage.

Founded by Chef **Dia Patel**, our kitchen in the heart of Geneva brings you the very best of Indian cuisine. Inspired by the country’s vibrant street food culture and the slow-cooked comfort dishes of home kitchens, every creation at **Dia's Delicacy** is a blend of authentic spices, layered textures, and soulful flavors.

Here, each plate tells a story — a story of tradition, passion, and the joy of sharing food. We invite you to savor India’s culinary legacy with us, one unforgettable bite at a time.

Every ingredient is carefully selected, and every dish is crafted with precision and love, ensuring a memorable dining experience for every guest.   `,da=`<!-- show: true -->
### Holiday Notice
We will be closed on 10 and 11 September for Jeûne genevois.
`,fa=`## Breakfast Menu ☀️

### **Sweet Treats**
|  |  |
| :--- | ---: |
| **Nutella Chapati** 🌱 - Choice of plain or with banana | **5 / 7 CHF** |
| **Mini Paratha** 🌱Ⓥ - With peanut butter & apple sugar / + fruits | **6 / 8 CHF** |
| **Millet Shira** 🌱 - Prepared with sweet mango puree & crunchy pistachio | **7 CHF** |

### **Indian Egg Specials**
|  |  |
| :--- | ---: |
| **2-Egg Omelette** - Served with chapati or bread / Gluten-Free bread | **12 / 14 CHF** |
| **Egg Paratha** - Spiced egg cooked inside a flaky paratha flatbread | **10 CHF** |
| **2-Egg Bhurji** - Indian scrambled egg, served with bread or chapati | **14 CHF** |
| **Croissant Omelette Sandwich** - Flaky croissant filled with a spiced omelette | **8 CHF** |
| **Masala Avocado Croissant** - Croissant filled with spiced avocado mash | **8 CHF** |

### **Indian Breads**
|  |  |
| :--- | ---: |
| **Aloo Paratha** 🌱 - Potato-stuffed flatbread served with boondi raita | **10 CHF** |
| **Methi Onion Garlic Paratha** 🌱Ⓥ - Flatbread with fenugreek, onions, and garlic | **5 CHF** |
| **Chili Garlic Paratha** 🌱Ⓥ - Aromatic flatbread infused with chili and garlic | **5 CHF** |
| **Plain Paratha** 🌱Ⓥ - Classic flaky, layered whole wheat flatbread | **3 CHF** |
| **Chapati** 🌱Ⓥ - Soft, thin traditional Indian flatbread | **2 CHF** |

### **Sides**
|  |  |
| :--- | ---: |
| **Gluten-Free Chocolate Bread** 🌱 - Freshly baked cocoa bread (Gluten-Free) | **5 CHF** |
| **Vegan Croissant** 🌱Ⓥ - Plant-based crispy croissant | **3.90 CHF** |
| **Standard Croissant** 🌱 - Classic buttery, flaky croissant | **2.90 CHF** |

### **Beverages**
|  |  |
| :--- | ---: |
| **Masala Chai** - Spiced tea brewed with milk / Black / Vegan option | **4 CHF** |
| **Mango Lassi** 🌱 - Traditional yogurt drink blended with sweet mango | **5 CHF** |
| **Fresh Juice** 🌱Ⓥ - Freshly squeezed orange juice or zesty green juice | **6 CHF** |
| **Coffee or Espresso / Cappuccino** - Freshly brewed coffee / cappuccino | **3.50 / 5.90 CHF** |
| **Chocolate Milk / Vegan Option** - Chocolate milk / vegan option | **5 / 6 CHF** |
`,pa=`📍 Address: **Rue Schaub 11, 1202 Genève**

📞 Phone: **[+41 227 34 11 22](tel:+41227341122)**

📮 Email: **[dia.delicacy@gmail.com](mailto:dia.delicacy@gmail.com)**

---
`,ma=`## Welcome to Dia's Delicacy

Experience culinary excellence in an intimate, elegant setting.
`,ha=`<!-- tab: Party & Catering -->
<!--show: true-->

At **Dia’s Delicacy**, we pride ourselves on creating unforgettable experiences for life’s special moments. Whether you’re planning an intimate gathering or a grand celebration, our party and catering services are designed to suit your needs. Host your event at our venue or let us bring the flavors to you.

### Our Offerings

- **Traditional Treats**: Homemade Indian Cuisine  
- **Baked Delights**: Cakes, Pastries, Muffins & Other Oven Treats  
- **Decadent Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Special Requests

We’re delighted to accommodate your preferences with **Vegan**, **Gluten-Free**, and **Lactose-Free** options — ensuring every bite is perfect.

Have any other special requests? Let’s discuss them with you to make your event truly unforgettable.   `,ga=`<!-- tab: Materials -->
<!--show: false-->

### Authentic Spices & Fresh Ingredients
We believe that the secret to great Indian food lies in the quality of the ingredients.

*   **Hand-picked Spices**: Imported directly from the best regions in India.
*   **Local Produce**: We partner with local farmers for fresh vegetables and meats.
*   **Traditional Methods**: We use traditional clay ovens (Tandoors) for that authentic smoky flavor.
`,_a=`<!-- tab: Partners -->
<!--show: false-->

### Growing Together
We are proud to collaborate with brands that share our commitment to quality and excellence.

*   **Local Suppliers**: Fresh dairy and meats from Geneva's finest producers.
*   **Spice Importers**: Exclusive partnerships for rare and high-quality Indian spices.
*   **Event Organizers**: Working with the best planners to deliver seamless events.
`,va=`<!-- tab: What We Do -->
<!--show: false-->

### Culinary Excellence
We bring the authentic taste of India to your doorstep. From intimate dinners to large corporate events, our catering service is tailored to your needs.

*   **Custom Menus**: Personalized to your preferences.
*   **Professional Staff**: Experienced servers and chefs.
*   **On-site Cooking**: Freshly prepared dishes at your venue.
`,ya=`# Today's Special - Saturday

### Appetizers
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Main Course
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,ba=`# 10 May, Sunday

### Appetizers
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Main Course
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,xa=`
# 11 May, Monday

* ### **Prawns in Green Curry:**
    Served with aromatic peas pulao and a fresh farm salad.

* ### **Fresh Farm Palak Curry:**
Farm-fresh spinach cooked with peanuts and Gram dal, served alongside a hearty peas pulao, and salad.
 
`,Sa=`
# 12 May, Tuesday

* ### **Chicken Bhuna:**
    Served with two flaky parathas or rice, accompanied by a crisp Navet beetroot salad.

* ### **Whole Moong Curry:**
Nutritious whole moong beans simmered in a savory spice blend, served with fluffy rice and a refreshing Navet beetroot salad.
`,Ca=`
# 13 May, Wednesday

* ### **Chicken Kheema:** 🍗
    Savory minced chicken sautéed with traditional spices, served with steamed rice and a side of seasonal fennel vegetables.

* ### **Rajma Curry:** 🌱Ⓥ
A comforting and hearty red kidney bean curry served alongside steamed rice and délicieux fennel legumes.
`,wa=`## 18 May, Monday

* ### **Chicken Lababdar :** 🍗
    Tender chicken simmered in a rich and creamy tomato-based curry, served with steamed rice and sautéed zucchini.

* ### **Paneer Lababdar :** 🌱
    Soft paneer cooked in a smooth and flavourful tomato gravy with Indian spices, served with rice and sautéed zucchini.`,Ta=`## 19 May, Tuesday

* ### **Chicken Lababdar :** 🍗
    Tender chicken simmered in a rich and creamy tomato-based curry, served with steamed rice and sautéed zucchini.

* ### **Vangi Bhat :** 🌱Ⓥ
    Maharashtrian-style spiced aubergine rice served with coconut Sol Kadhi and broad bean cabbage vegetables.`,Ea=`## 20 May, Wednesday

* ### **Chicken Kofta Curry :** 🍗
    Tender chicken koftas simmered in a creamy and aromatic Indian curry sauce.

* ### **Malai Kofta / Tofu Curry :** 🌱
    Soft vegetable and paneer dumplings in a rich creamy gravy, or tofu cooked in a fragrant Indian curry.`,Da=`## 21 May, Thursday

* ### **Achari Salmon :** 🐟
    Salmon cooked with tangy achari pickling spices, served with rice and legumes.

* ### **Mushroom Tofu Curry :** 🌱Ⓥ
    Mushrooms and tofu simmered in a flavourful Indian curry with aromatic spices.
`,Oa=`## 22 May, Friday

* ### **Chicken Tandoori :** 🍗
    Tandoori-spiced grilled chicken served with spinach rice and refreshing beetroot raita.

* ### **Aloo Dosa & Mixed Vegetable Dosa:** 🌱
    Crispy South Indian crepes stuffed with spiced potatoes or assorted vegetables, served with traditional sambhar (lentil vegetable stew) and coconut chutney.`,ka=`## 25 May, Monday

* ### **Public Holiday :** 🏛️
    We are closed today for Whit Monday. See you tomorrow!
`,Aa=`## 26 May, Tuesday

* ### **Chicken Achari :** 🍗
    Tender chicken cooked in a tangy and aromatic pickling-spiced gravy, served with steamed rice and a fresh salad.

* ### **Valachi Usal with Rice & Chapati :** 🌱Ⓥ
    Sprouted field beans (val) simmered in a spiced coconut-onion gravy, served with rice, seasonal veggies, and soft chapati.
`,ja=`## 27 May, Wednesday

* ### **Lamb Kheema Pao :** 🥩
    Spiced minced lamb curry served with soft bread rolls (pao), a side of crunchy onion & radish salad, and refreshing cucumber raita.

* ### **Dal Rice with Veggies & Chapati :** 🌱Ⓥ
    Comforting yellow lentil curry (dal) served with steamed rice, seasonal vegetables, and soft chapati.
`,Ma=`## 28 May, Thursday

* ### **Lamb Kheema Pao :** 🥩
    Spiced minced lamb curry served with soft bread rolls (pao), a side of crunchy onion & radish salad, and refreshing cucumber raita.

* ### **Paneer Matar with Rice & Veggies :** 🌱
    Soft Indian cottage cheese (paneer) and green peas simmered in a spiced tomato-onion gravy, served with steamed rice and seasonal vegetables.
`,Na=`## 29 May, Friday

* ### **Chicken Biryani :** 🍗
    Fragrant Basmati rice layered with juicy spiced chicken, saffron, and aromatic herbs, served with a cooling raita.

* ### **Dosa :** 🌱Ⓥ
    Crispy fermented rice and lentil crepe, served with a warm, flavorful lentil stew (sambar) and fresh coconut chutney.
`,Pa=`### 18 June, Thursday

* ### **Paneer / Tofu Butter Masala :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cheese or tofu (vegan option) in a rich, creamy tomato butter sauce, serverd with rice and vegetables.

* ### **Chicken Butter Masala :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Grilled chicken tikka simmered in a rich, velvety tomato and butter sauce, served with rice.
`,Fa=`## 01 June, Monday

* ### **Chicken Dhansak with Rice & Veggies :** 🍗
    Tender chicken cooked with a flavorful blend of lentils and vegetables in a spiced gravy, served with rice and seasonal veggies.

* ### **Whole Masoor Dal with Rice & Veggies :** 🌱Ⓥ
    Nourishing whole brown lentils simmered in aromatic spices, served with steamed rice and seasonal vegetables.
`,Ia=`## 02 June, Tuesday

* ### **Boneless Chicken Karahi with Rice :** 🍗
    Tender boneless chicken stir-fried in a traditional wok with fresh tomatoes, ginger, garlic, and freshly ground spices, served with steamed rice.

* ### **Paneer Kadhai :** 🌱
    Cubes of cottage cheese cooked with bell peppers, onions, and tomatoes in a fragrant, freshly ground spice blend.
`,La=`## 03 June, Wednesday

* ### **Boneless Chicken Karahi with Rice :** 🍗
    Tender boneless chicken stir-fried in a traditional wok with fresh tomatoes, ginger, garlic, and freshly ground spices, served with steamed rice.

* ### **Chole Bhatura with Salad & Raita :** 🌱
    Spiced chickpea curry (chole) served with fluffy fried bread (bhatura), a side of fresh onion salad, and cooling raita.
`,Ra=`## 04 June, Thursday

* ### **Kerala-Style Nadan Chicken Curry with Rice :** 🍗
    Traditional Kerala chicken curry prepared in coconut milk and aromatic spices, served with rice and seasonal vegetables.

* ### **Chole Bhatura with Salad & Raita :** 🌱
    Spiced chickpea curry (chole) served with fluffy fried bread (bhatura), a side of fresh onion salad, and cooling raita.
`,za=`## 05 June, Friday

* ### **Chicken Tandoori :** 🍗
    Tandoori-spiced grilled chicken served with aromatic seasoned rice and a fresh side salad.

* ### **Dosa with Aloo & Paneer Bhurji :** 🌱
    Crispy fermented rice and lentil crepe stuffed with spiced potatoes and scrambled paneer cottage cheese, served with sambar and coconut chutney.
`,Ba=`### 08 June, Monday

* ### **Chicken Leek Curry with Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a savory leek and spice sauce, served with rice.

* ### **Dal Rice with Aloo Gobi & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Comforting yellow lentils (dal) served with spiced potatoes and cauliflower (aloo gobi), rice, and a chapati.
`,Va=`### 09 June, Tuesday

* ### **Dahi Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken marinated and cooked in a creamy yogurt-based sauce with aromatic spices, served with rice.

* ### **Methi Malai Mutter Paneer Curry :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes of paneer and green peas in a rich, creamy sauce flavored with fenugreek leaves (methi), served with rice.
`,Ha=`### 10 June, Wednesday

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a smooth, spiced spinach gravy, served with rice.
    
* ### **Dahi Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken marinated and cooked in a creamy yogurt-based sauce with aromatic spices, served with rice.

* ### **Palak Paneer / Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes of paneer cheese or tofu served in a velvety spinach and aromatic spice sauce, accompanied by rice.
`,Ua=`### 11 June, Thursday

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken pieces simmered in a smooth, spiced spinach gravy, served with rice.

* ### **Chawlichi Usal with Rice, Salad & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    A flavorful black-eyed pea curry prepared with traditional spices, served with rice, a fresh salad, and a chapati.
`,Wa=`### 12 June, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant Basmati rice layered with juicy spiced chicken, saffron, and aromatic herbs, served with a cooling raita.

* ### **Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crispy fermented rice and lentil crepe, served with a warm, flavorful lentil stew (sambar) and fresh coconut chutney.
`,Ga=`### 15 June, Monday

* ### **Moong Dal Palak :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Green moong lentils cooked with fresh spinach, served with rice, seasonal vegetables, and a traditional chapati.

* ### **Palak Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a creamy spiced spinach sauce, served with rice and a side salad.
`,Ka=`### 16 June, Tuesday

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.
`,qa=`### 17 June, Wednesday

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.

* ### **Soya Chilli & Indo-Chinese Fried Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.`,Ja=`### 18 June, Thursday 

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.

* ### **Soya Chilli & Indo-Chinese Fried Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.

* ### **Mughlai Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.
`,Ya=`### 19 June, Friday

* ### **Tandoori Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Yogurt and tandoori-spiced marinated grilled chicken, served with carrot rice and a green salad with edamame beans.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe, filled with spiced potato mash (Masala) or egg, served with warm sambar and chutney.
`,Xa=`### 22 June, Monday

* ### **Dal & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional Indian dal served with fresh chapati, rice, and seasonal zucchini.

* ### **Methi Grilled Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fenugreek-marinated grilled chicken served with tomato rice and seasonal vegetables.
`,Za=`### 23 June, Tuesday

* ### **Coconut Moong Poke Bowl (Tofu / Paneer) :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Coconut moong and carrot salad, quinoa with broad beans, and tofu or paneer tossed in garlic tomato sauce, served poke bowl style.

* ### **Methi Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender fenugreek chicken served with seasonal accompaniments.
`,Qa=`### 24 June, Wednesday

* ### **Kerala Style Tofu Coconut Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tofu simmered in a Kerala-style coconut curry, served with rice and vegetables or fresh salad.

* ### **Chicken Mappas Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked in a mild South Indian coconut curry, served with rice.
`,$a=`### 25 June, Thursday

* ### **Paneer Kadhai :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cooked with peppers, onions, and traditional kadhai spices, served with rice and vegetables.

* ### **Chicken Kadhai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken cooked with peppers and onions in an aromatic kadhai sauce, served with rice and vegetables.
`,eo=`### 26 June, Friday

* ### **Kadhai Chicken or Chicken Mappas Curry:** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Served with rice and vegetables.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.
`,to=`### June 29, Monday

* ### **Sprouted Moong Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts. / *Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes.*

* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken curry served with rice and seasonal zucchini. / *Curry de poulet savoureux servi avec du riz et des courgettes de saison.*
`,no=`### June 30, Tuesday

* ### **Sprouted Moong Curry :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts. / *Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes.*

* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Classic chicken curry served with rice and a fresh cucumber salad. / *Curry de poulet classique servi avec du riz et une salade de concombre fraîche.*
`,ro=`### July 01, Wednesday

* ### **Baingan Bharta & Dahi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Smoked eggplant mash (Baingan Bharta) served with yogurt (dahi), veggies, and chapati. / *Caviar d'aubergines grillées (Baingan Bharta) servi avec du yaourt (dahi), des légumes et un chapati.*

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Tender slow-cooked lamb curry, served with rice and side vegetables. / *Curry d'agneau tendrement mijoté, servi avec du riz et des légumes d'accompagnement.*
    
* ### **Chicken Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Classic chicken curry served with rice and a fresh cucumber salad. / *Curry de poulet classique servi avec du riz et une salade de concombre fraîche.*`,io=`### July 02, Thursday

* ### **Maharashtrian Style Baingan Bharta :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Eggplant mash prepared in Maharashtrian style, served with chapati, rice, and veggies. / *Caviar d'aubergines préparé à la mode de Maharashtra, servi avec chapati, riz et légumes.*

* ### **Lamb Curry :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Flavorful lamb curry served with rice and seasonal vegetables. / *Curry d'agneau riche en saveurs, servi avec du riz et des légumes de saison.*
`,ao=`### July 03, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita. / *Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.
`,oo=`### July 06, Monday

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional creamy black lentils served with rice and Swiss chard. Available for vegans with vegan cream upon request. 🌱Ⓥ / *Lentilles noires crémeuses traditionnelles servies avec du riz et des côtes de blettes. Disponible en version végétalienne avec de la crème végane sur demande.*

* ### **Thecha Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken sautéed with Thecha (green chili and peanut paste), served with jowar bhakri (sorghum flatbread) and salad. <br>⚠️ **Contains peanuts.** *Chicken: Origin Switzerland.* / *Poulet sautéed au Thecha (pâte de piment vert et cacahuètes), servi avec du pain jowar bhakri (sorgho) et une salade. ⚠️ **Contient des cacahuètes.** Poulet : Origine Suisse.*
`,so=`### July 07, Tuesday

* ### **Chawli Vangi Batata Rassa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional curry with black-eyed beans, farm-fresh aubergines, and potatoes, served with rice, chapati, and salad. <br>⚠️ **Contains peanuts.** / *Curry traditionnel aux haricots à œil noir, aubergines fraîches du marché et pommes de terre, servi avec du riz, un chapati et une salade. ⚠️ **Contient des cacahuètes.***

* ### **Thecha Chicken with Ragi Bhakri :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Flavorful Thecha chicken served with ragi bhakri (finger millet flatbread) and salad. <br>⚠️ **Contains peanuts.** *Chicken: Origin Switzerland.* / *Poulet savoureux au Thecha servi avec du pain ragi bhakri (millet) et une salade. ⚠️ **Contient des cacahuètes.** Poulet : Origine Suisse.*
`,co=`### July 08, Wednesday

* ### **Closed :** 🗓️
    The restaurant is closed today. / *Fermé : Le restaurant est fermé aujourd'hui.*
`,lo=`### July 09, Thursday

* ### **Kerala Style Fish Curry :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Kerala-style fish curry simmered with coconut and spices, served with mixed vegetables. / *Curry de poisson parfumé à la noix de coco et aux épices du Kerala, servi avec un assortiment de légumes.*
`,uo=`### July 10, Friday

* ### **Chicken Tandoori & Spinach Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Spiced marinated grilled chicken tandoori, served with aromatic spinach rice and a vibrant beetroot raita. *Chicken: Origin Switzerland.* / *Poulet mariné aux épices tandoori et grillé, servi avec un riz aux épinards et un raïta de betterave rouge. Poulet : Origine Suisse.*

* ### **Masala Dosa & Egg Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepes: one filled with spiced potato mash (Masala) and one layered with egg, served with chutney and sambar. / *Crêpes de lentilles et riz fermentés croustillantes : une garnie de pommes de terre épicées (Masala) et une préparée avec un œuf, servies avec chutney et sambar.*
`,fo=`### July 13, Monday

* ### **Chicken Lazeez :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken simmered in a rich, aromatic gravy, served with rice and salad. *Chicken: Origin Switzerland.* / *Poulet mijoté dans une sauce riche et aromatique, servi avec du riz et une salade. Poulet : Origine NL.*

* ### **Palak Paneer or Palak Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) or tofu cooked in a smooth, vibrant spinach sauce, served with rice and raita. Vegan option with tofu upon request. 🌱Ⓥ / *Fromage indien fait maison (Paneer) ou tofu préparé dans une sauce onctueuse aux épinards frais, servi avec du riz et un raïta. Option végétalienne avec tofu sur demande.*
`,po=`### July 14, Tuesday

* ### **Chicken Lazeez :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken simmered in a rich, aromatic gravy, served with rice and salad. *Chicken: Origin Switzerland.* / *Poulet mijoté dans une sauce riche et aromatique, servi avec du riz et une salade. Poulet : Origine NL.*

* ### **Dahi Baingan Curry :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Flavorful eggplants cooked in a spiced yogurt (Dahi) gravy, served with rice and a cucumber peanut salad. <br>⚠️ **Contains peanuts.** / *Curry de Dahi Baingan : Aubergines savoureuses cuisinées dans une sauce au yaourt épicée (Dahi), servies avec du riz et une salade de concombre aux cacahuètes. ⚠️ **Contient des cacahuètes.***
`,mo=`### July 15, Wednesday

* ### **Trout Curry :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fresh trout curry prepared with delicate spices, served with rice and side vegetables. / *Curry de truite fraîche préparé avec des épices douces, servi avec du riz et des légumes.*

* ### **Dahi Baingan Curry :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Flavorful eggplants cooked in a spiced yogurt (Dahi) gravy, served with rice and a fresh cucumber salad. / *Curry de Dahi Baingan : Aubergines savoureuses cuisinées dans une sauce au yaourt épicée (Dahi), servies avec du riz et une salade de concombre fraîche.*
`,ho=`### July 16, Thursday

* ### **Trout Curry :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fresh trout curry prepared with delicate spices, served with rice and side vegetables. / *Curry de truite fraîche préparé avec des épices douces, servi avec du riz et des légumes.*

* ### **Shahi Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) cooked in a royal, creamy cashew sauce with mild spices, served with rice and veggies. / *Shahi Paneer : Fromage indien fait maison (Paneer) préparé dans une sauce royale et crémeuse aux noix de cajou et épices douces, servi avec du riz et des légumes.*
`,go=`### July 17, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita. *Chicken: Origin Switzerland.* / *Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta. Poulet : Origine Suisse.*

* ### **Palak Paneer Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepe filled with spiced Paneer and spinach, served with chutney and sambar. / *Palak Paneer Dosa : Crêpe de lentilles et riz fermentés croustillante, garnie de fromage Paneer et d'épinards aux épices douces, servie avec chutney et sambar.*
`,_o=`### August 17, Monday

* ### **Chicken Madras :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken simmered in an aromatic spiced Madras curry sauce, served with rice and salad. *Chicken: Origin Switzerland.* / *Poulet mijoté dans une sauce aromatique épicée au curry de Madras, servi avec du riz et une salade. Poulet : Origine Suisse.*

* ### **Dal, Cabbage Chana Dal & Chapati :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional Indian lentils (Dal) served with sautéed cabbage and yellow split peas (Cabbage Chana Dal), rice, and a fresh chapati. Vegan option available upon request. 🌱Ⓥ / *Lentilles indiennes traditionnelles (Dal) servies avec du chou sauté aux pois chiches jaunes (Cabbage Chana Dal), du riz et un chapati frais. Option végétalienne sur demande.*
`,vo=`### August 18, Tuesday

* ### **Chicken Madras :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken simmered in an aromatic spiced Madras curry sauce, served with rice and salad. *Chicken: Origin Switzerland.* / *Poulet mijoté dans une sauce aromatique épicée au curry de Madras, servi avec du riz et une salade. Poulet : Origine Suisse.*

* ### **Dal, Cabbage Chana Dal & Chapati :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Traditional Indian lentils (Dal) served with sautéed cabbage and yellow split peas (Cabbage Chana Dal), rice, and a fresh chapati. Vegan option available upon request. 🌱Ⓥ / *Lentilles indiennes traditionnelles (Dal) servies avec du chou sauté aux pois chiches jaunes (Cabbage Chana Dal), du riz et un chapati frais. Option végétalienne sur demande.*
`,yo=`### August 19, Wednesday

* ### **Methi Garlic Chicken & Lemon Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken sautéed with garlic and fenugreek (methi), served with fragrant lemon rice and seasonal zucchini. *Chicken: Origin Switzerland.* / *Poulet sauté à l'ail et au fenugrec (methi), servi avec un riz parfumé au citron et des courgettes de saison. Poulet : Origine Suisse.*

* ### **Methi Malai Matar Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) and green peas cooked in a rich, creamy fenugreek sauce, served with rice and veggies. / *Fromage indien fait maison (Paneer) et petits pois cuisinés dans une sauce onctueuse aux feuilles de fenugrec et à la crème, servis avec du riz et des légumes.*
`,bo=`### August 20, Thursday

* ### **Methi Garlic Chicken & Lemon Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken sautéed with garlic and fenugreek (methi), served with fragrant lemon rice and seasonal zucchini. *Chicken: Origin Switzerland.* / *Poulet sauté à l'ail et au fenugrec (methi), servi avec un riz parfumé au citron et des courgettes de saison. Poulet : Origine Suisse.*

* ### **Methi Malai Matar Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) and green peas cooked in a rich, creamy fenugreek sauce, served with rice and veggies. / *Fromage indien fait maison (Paneer) et petits pois cuisinés dans une sauce onctueuse aux feuilles de fenugrec et à la crème, servis avec du riz et des légumes.*
`,xo=`### August 21, Friday

* ### **Chicken Dosa :** 🍗 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepe filled with spiced chicken, served with chutneys, sambar, and salad. *Chicken: Origin Switzerland.* / *Crêpe croustillante de riz et lentilles fermentés, garnie de poulet épicé, servie avec chutneys, sambar et salade. Poulet : Origine Suisse.*

* ### **Paneer or Tofu Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepe filled with spiced Paneer or Tofu, served with chutneys, sambar, and salad. Vegan option with tofu upon request. 🌱Ⓥ / *Crêpe croustillante de riz et lentilles fermentés, garnie de fromage Paneer ou de Tofu aux épices, servie avec chutneys, sambar et salade. Option végétalienne avec tofu sur demande.*
`,So=`### August 24, Monday

* ### **Baingan Bharta & Dal Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Smoked spiced eggplant mash (Baingan Bharta), served with traditional dal and basmati rice. / *Caviar d'aubergines grillées aux épices (Baingan Bharta), servi avec du dal traditionnel et du riz basmati.*

* ### **Butter Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a rich tomato, butter, and mild spice sauce, served with rice and grilled bell peppers. *Chicken: Origin Switzerland.* / *Poulet tendre mijoté dans une sauce onctueuse aux tomates, beurre et épices douces, servi avec du riz et des poivrons grillés. Poulet : Origine Suisse.*
`,Co=`### August 25, Tuesday

* ### **Baingan Bharta & Dal Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Smoked spiced eggplant mash (Baingan Bharta), served with traditional dal and basmati rice. / *Caviar d'aubergines grillées aux épices (Baingan Bharta), servi avec du dal traditionnel et du riz basmati.*

* ### **Butter Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a rich tomato, butter, and mild spice sauce, served with rice and grilled bell peppers. *Chicken: Origin Switzerland.* / *Poulet tendre mijoté dans une sauce onctueuse aux tomates, beurre et épices douces, servi avec du riz et des poivrons grillés. Poulet : Origine Suisse.*
`,wo=`### August 26, Wednesday

* ### **Kerala Prawns Curry :** 🦐 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Succulent prawns simmered in a coconut, turmeric, and Kerala spice curry, served with rice and seasonal vegetables. / *Crevettes mijotées dans un curry parfumé à la noix de coco, au curcuma et aux épices du Kerala, servies avec du riz et des légumes de saison.*

* ### **Paneer Butter Masala :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) cooked in a rich, creamy tomato and cashew sauce, served with rice and vegetables. / *Fromage indien fait maison (Paneer) cuisiné dans une sauce crémeuse et riche à la tomate et aux cajous, servi avec du riz et des légumes.*
`,To=`### August 27, Thursday

* ### **Fish Curry :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fresh fish cooked in an aromatic, spiced Indian gravy, served with rice and seasonal vegetables. / *Poisson frais cuisiné dans une sauce piquante et aromatique aux épices indiennes, servi avec du riz et des légumes de saison.*

* ### **Paneer Butter Masala :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Homemade Indian cheese (Paneer) cooked in a rich, creamy tomato and cashew sauce, served with rice and vegetables. / *Fromage indien fait maison (Paneer) cuisiné dans une sauce crémeuse et riche à la tomate et aux cajous, servi avec du riz et des légumes.*
`,Eo=`### August 28, Friday

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant basmati rice layered with marinated chicken and traditional spices, served with beetroot raita. *Chicken: Origin Switzerland.* / *Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec un raïta de betterave rouge. Poulet : Origine Suisse.*

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepe layered with spiced egg, served with chutneys and sambar. / *Crêpe croustillante de riz et lentilles fermentés, nappe d'œuf épicé, servie avec chutneys et sambar.*

* ### **Masala Dosa or Tofu Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy fermented rice and lentil crepe filled with spiced potato mash (Masala) or tofu, served with chutneys and sambar. Vegan option with tofu. 🌱Ⓥ / *Crêpe croustillante de riz et lentilles fermentés, garnie de pommes de terre épicées (Masala) ou de tofu, servie avec chutneys et sambar. Option végétalienne avec tofu.*
`,Do=`### August 31, Monday

* ### **Chole Bhature & Salad :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Spiced chickpeas served with fluffy bhature and fresh salad. / *Pois chiches épicés servis avec des bhature gonflés et une salade fraîche.*

* ### **Chicken Korma, Rice & Kale :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a mild creamy curry, served with basmati rice and kale. *Chicken: Origin Switzerland.* / *Poulet tendre mijoté dans un curry doux et crémeux, servi avec du riz basmati et du chou kale. Poulet : Origine Suisse.*
`,Oo=`### September 1, Tuesday

* ### **Chole Bhature & Salad :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Spiced chickpeas served with fluffy bhature and fresh salad. / *Pois chiches épicés servis avec des bhature gonflés et une salade fraîche.*

* ### **Chicken Korma, Rice & Kale :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tender chicken simmered in a mild creamy curry, served with basmati rice and kale. *Chicken: Origin Switzerland.* / *Poulet tendre mijoté dans un curry doux et crémeux, servi avec du riz basmati et du chou kale. Poulet : Origine Suisse.*
`,ko=`### September 2, Wednesday

* ### **Paneer Lababdar & Rice :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cooked in a rich, creamy tomato and spice gravy, served with rice. / *Paneer cuisiné dans une sauce riche et crémeuse à la tomate et aux épices, servi avec du riz.*

* ### **Perch Curry, Rice & Salad :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Perch fillet cooked in a light aromatic curry, served with rice and fresh salad. / *Filet de perche cuisiné dans un curry léger et parfumé, servi avec du riz et une salade fraîche.*
`,Ao=`### September 3, Thursday

* ### **Paneer Lababdar, Rice & Veggies :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cooked in a rich tomato and spice gravy, served with rice and vegetables. / *Paneer cuisiné dans une sauce riche à la tomate et aux épices, servi avec du riz et des légumes.*

* ### **Salmon Curry, Rice & Brinjal-Potato Veggies :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Salmon simmered in a delicately spiced curry, served with rice and brinjal-potato vegetables. / *Saumon mijoté dans un curry délicatement épicé, servi avec du riz, des aubergines et des pommes de terre.*
`,jo=`### September 4, Friday

* ### **Chicken Tandoori, Veg Pulao & Cucumber Raita :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Spice-marinated tandoori chicken, served with vegetable pulao and cucumber raita. *Chicken: Origin Switzerland.* / *Poulet mariné aux épices et grillé façon tandoori, servi avec pulao aux légumes et raïta au concombre. Poulet : Origine Suisse.*

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy dosa with egg, served with sambar, coconut chutney and salad. / *Dosa croustillant garni d'œuf, servi avec sambar, chutney coco et salade.*

* ### **Palak Paneer Dosa / Tofu Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Spinach dosa filled with paneer or tofu, served with sambar, coconut chutney and salad. Vegan option with tofu. 🌱Ⓥ / *Dosa aux épinards garni de paneer ou de tofu, servi avec sambar, chutney coco et salade. Option végétalienne avec tofu.*

* ### **Masala Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy dosa filled with spiced potatoes, served with sambar, coconut chutney and salad. / *Dosa croustillant garni de pommes de terre épicées, servi avec sambar, chutney coco et salade.*
`,Mo=`### September 7, Monday

* ### **Chilka Moong Dal, Rice, Chapati & Aloo Gobi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Split green moong dal simmered with spices, served with rice, chapati and aloo gobi. / *Dal de mung vert décortiqué mijoté aux épices, servi avec du riz, chapati et aloo gobi.*

* ### **Peanut Butter Chicken, Rice & Purple Cabbage Salad :** 🍗🥜 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Chicken simmered in a creamy peanut butter sauce, served with rice and purple cabbage salad. / *Poulet mijoté dans une sauce crémeuse au beurre de cacahuète, servi avec du riz et une salade de chou violet.*
`,No=`### September 8, Tuesday

* ### **Rajma Chawal & French Beans :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Kidney bean curry served with rice and French beans. / *Curry de haricots rouges servi avec du riz et des haricots verts.*

* ### **Chicken Curry, Rice & Fresh Salad :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Home-style chicken curry served with rice and fresh salad. / *Curry de poulet maison servi avec du riz et une salade fraîche.*
`,Po=`### September 9, Wednesday

* ### **Soya Chaap Curry, Rice & Seasonal Vegetables :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Soya chaap curry served with rice and seasonal vegetables. *Suitable for vegans. Contains gluten.* / *Soya chaap mijoté dans un curry épicé, servi avec du riz et des légumes de saison. Convient aux véganes. Contient du gluten.*

* ### **Lamb & Beef Kofta Curry, Rice & Fresh Salad :** 🥩 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lamb and beef kofta curry served with rice and fresh salad. / *Boulettes d'agneau et de bœuf mijotées dans un curry parfumé, servies avec du riz et une salade fraîche.*
`,Fo=`### September 10, Thursday

* ### **Lamb & Beef Kofta Curry, Rice & Fresh Salad :** 🥩 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lamb and beef kofta curry served with rice and fresh salad. / *Boulettes d'agneau et de bœuf mijotées dans un curry parfumé, servies avec du riz et une salade fraîche.*

* ### **Soya Chaap Curry, Rice & Seasonal Vegetables :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Soya chaap curry served with rice and seasonal vegetables. *Suitable for vegans. Contains gluten.* / *Soya chaap mijoté dans un curry épicé, servi avec du riz et des légumes de saison. Convient aux véganes. Contient du gluten.*
`,Io=`### September 11, Friday

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy egg dosa served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa. / *Dosa croustillant à l'œuf, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa.*

* ### **Aloo Masala Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy dosa filled with spiced potato masala, served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa. / *Dosa croustillant garni de pommes de terre épicées, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa.*

* ### **Tofu Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crispy tofu dosa served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa. *Vegan option.* / *Dosa croustillant garni de tofu, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa. Option végétalienne.*

* ### **Chicken Biryani :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fragrant basmati rice cooked with chicken and aromatic spices. / *Riz basmati parfumé cuisiné avec du poulet et des épices aromatiques.*
`,Lo=`| | | |
| :--- | :--- | :--- |
| **Drinks** | Mango Lassi <br/> Kombucha <br/> Super Bock | 5 CHF |
| | Cafe BIO <br/> Chai | 3.50 |
| | Indian Beer <br/> Gluten Free Beer | 7 CHF |
| **Dessert** | Millet Banana Shira <br/> Choc. Biscoff Cake | 5 CHF |
| **Extras** | Butter Naan <br/> Sev Puri <br/> Methi Paratha | 5 CHF |
| | Cheese Naan <br/> Garlic Naan | 6 CHF |
| | Amritsari Naan | 8 CHF |
`,Ro=`
### Appetizers

#### Bruschetta Trio
Fresh tomatoes, basil, garlic, and balsamic vinegar on crispy bread

#### Shrimp Saganaki
Succulent shrimp in a rich feta cheese sauce

### Main Courses

#### Pan-Seared Branzino
Mediterranean sea bass with seasonal vegetables and lemon beurre blanc

#### Beef Tenderloin
Prime cut with truffle jus and roasted potatoes

### Desserts

#### Tiramisu
Classic Italian dessert with mascarpone and espresso

#### Chocolate Flourless Cake
Rich, decadent chocolate with raspberry coulis
`,zo=`
####
Opening Hours:  <br/><b>Monday - Friday: 7:45 AM - 8:00 PM</b>`,Bo=`At **Dia’s Delicacy**, we pride ourselves on creating unforgettable experiences for life’s special moments. Whether you’re planning an intimate gathering or a grand celebration, our party and catering services are designed to suit your needs. Host your event at our venue or let us bring the flavors to you.

### Our Offerings

- **Traditional Treats**: Homemade Indian Cuisine  
- **Baked Delights**: Cakes, Pastries, Muffins & Other Oven Treats  
- **Decadent Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Special Requests

We’re delighted to accommodate your preferences with **Vegan**, **Gluten-Free**, and **Lactose-Free** options — ensuring every bite is perfect.

Have any other special requests? Let’s discuss them with you to make your event truly unforgettable.   `,Vo=`Dia's Delicacy est née du rêve sincère d’une femme de faire revivre les saveurs précieuses de son enfance. Aujourd’hui, cette vision s’est épanouie en une véritable destination culinaire — un hommage à la richesse et à la diversité du patrimoine gastronomique indien.

Fondée par la Cheffe **Dia Patel**, notre cuisine au cœur de Genève vous propose le meilleur de la cuisine indienne. Inspirée par la culture vibrante de la street food indienne ainsi que par les plats mijotés réconfortants des cuisines familiales, chaque création de **Dia's Delicacy** marie des épices authentiques, des textures raffinées et des saveurs pleines d’âme.

Ici, chaque assiette raconte une histoire — une histoire de tradition, de passion et du plaisir de partager un bon repas. Nous vous invitons à savourer avec nous l’héritage culinaire de l’Inde, une bouchée inoubliable à la fois.

Chaque ingrédient est soigneusement sélectionné, et chaque plat est préparé avec précision et amour, afin d’offrir à chaque convive une expérience gastronomique mémorable.`,Ho=`<!-- show: true -->
### Avis de Fermeture
Nous serons fermés le 10 et 11 septembre à l'occasion du Jeûne genevois.

`,Uo=`## Menu du Petit-Déjeuner ☀️

### **Douceurs Sucrées**
|  |  |
| :--- | ---: |
| **Chapati au Nutella** 🌱 - Nature / avec Banane | **5 / 7 CHF** |
| **Mini Paratha** 🌱Ⓥ - Beurre de cacahuète & sucre de pomme / avec fruits | **6 / 8 CHF** |
| **Shira de Millet** 🌱 - Avec purée de mangue & pistaches | **7 CHF** |

### **Spécialités Indiennes aux Œufs**
|  |  |
| :--- | ---: |
| **Omelette de 2 Œufs** - Servie avec chapati ou pain / Pain sans gluten | **12 / 14 CHF** |
| **Paratha aux Œufs** - Pain plat feuilleté farci d'œufs épicés | **10 CHF** |
| **Bhurji de 2 Œufs** - Œufs brouillés indiens servis avec pain ou chapati | **14 CHF** |
| **Sandwich Croissant Omelette** - Croissant croustillant avec omelette épicée | **8 CHF** |
| **Croissant à l'Avocat & Masala** - Croissant avec purée d'avocat aux épices masala | **8 CHF** |

### **Pains Indiens**
|  |  |
| :--- | ---: |
| **Aloo Paratha** 🌱 - Farci de pommes de terre épicées, servi avec raïta boondi | **10 CHF** |
| **Paratha Fenugrec (Methi), Oignon & Ail** 🌱Ⓥ - Pain plat au fenugrec, oignons et ail | **5 CHF** |
| **Paratha Piment & Ail** 🌱Ⓥ - Pain plat relevé au piment et à l'ail | **5 CHF** |
| **Paratha Nature** 🌱Ⓥ - Pain plat feuilleté de blé entier | **3 CHF** |
| **Chapati** 🌱Ⓥ - Pain plat indien traditionnel, fin et moelleux | **2 CHF** |

### **Accompagnements**
|  |  |
| :--- | ---: |
| **Pain au Chocolat Sans Gluten** 🌱 - Pain au chocolat sans gluten fraîchement cuit | **5 CHF** |
| **Croissant Végétalien (Vegan)** 🌱Ⓥ - Croissant croustillant 100% végétal | **3.90 CHF** |
| **Croissant Standard** 🌱 - Croissant classique au beurre | **2.90 CHF** |

### **Boissons**
|  |  |
| :--- | ---: |
| **Tchaï Masala** - Infusé au lait / Noir / Option végétalienne | **4 CHF** |
| **Lassi à la Mangue** 🌱 - Yaourt mixé avec de la mangue douce | **5 CHF** |
| **Jus de Fruits Frais** 🌱Ⓥ - Jus d'orange ou jus vert tonique | **6 CHF** |
| **Café ou Espresso / Cappuccino** - Café fraîchement infusé / cappuccino | **3.50 / 5.90 CHF** |
| **Lait au Chocolat / Option Végétalienne** - Lait au chocolat / option lait végétal | **5 / 6 CHF** |
`,Wo=`📍 Adresse: **Rue Schaub 11, 1202 Genève**

📞 Téléphone: **[+41 227 34 11 22](tel:+41227341122)**

📮 Email: **[dia.delicacy@gmail.com](mailto:dia.delicacy@gmail.com)**

---
`,Go=`## Bienvenue chez Dia's Delicacy

Découvrez l'excellence culinaire dans un cadre intime et élégant.
`,Ko=`<!-- tab: Fêtes & Traiteur -->

Chez **Dia’s Delicacy**, nous mettons un point d’honneur à transformer chaque moment de votre vie en une expérience inoubliable. Que vous organisiez un rassemblement intime ou une grande célébration, nos services de traiteur sont pensés pour répondre à toutes vos attentes. Recevez vos invités dans notre salle ou laissez-nous apporter nos saveurs directement chez vous.

### Nos Spécialités

- **Cuisine Indienne Faite Maison**
- **Pâtisseries & Friandises** : Gâteaux, Pâtisseries, Muffins & autres douceurs    
- **Desserts**: Ras Malai, Kulfi, Gulab Jamun & more

### Requests Spéciaux

Nous sommes ravis de répondre à vos envies avec des options **véganes**, **sans gluten** et **sans lactose** — pour que chaque bouchée soit parfaite.

Une autre demande particulière ? Parlons-en ensemble pour rendre votre événement vraiment inoubliable.   `,qo=`<!-- tab: Nos Matériaux -->
<!--show: false-->

### Épices Authentiques et Ingrédients Frais
Nous pensons que le secret d'une excellente cuisine indienne réside dans la qualité des ingrédients.

*   **Épices Sélectionnées à la Main**: Importées directement des meilleures régions d'Inde.
*   **Produits Locaux**: Nous travaillons avec des agriculteurs locaux pour des légumes et des viandes frais.
*   **Méthodes Traditionnelles**: Nous utilisons des fours à argile traditionnels (Tandoors) pour ce goût fumé authentique.
`,Jo=`<!-- tab: Nos Partenaires -->
<!--show: false-->

### Grandir Ensemble
Nous sommes fiers de collaborer avec des marques qui partagent notre engagement envers la qualité et l'excellence.

*   **Fournisseurs Locaux**: Produits laitiers et viandes frais des meilleurs producteurs de Genève.
*   **Importateurs d'Épices**: Partenariats exclusifs pour des épices indiennes rares et de haute qualité.
*   **Organisateurs d'Événements**: Collaboration avec les meilleurs planificateurs pour des événements sans faille.
`,Yo=`<!-- tab: Ce que nous faisons -->
<!--show: false-->

### Excellence Culinaire
Nous apportons le goût authentique de l'Inde à votre porte. Des dîners intimes aux grands événements d'entreprise, notre service traiteur est adapté à vos besoins.

*   **Menus Personnalisés**: Adaptés à vos préférences.
*   **Personnel Professionnel**: Serveurs et chefs expérimentés.
*   **Cuisine sur Place**: Plats fraîchement préparés sur votre lieu d'événement.
`,Xo=`# Spécial du Jour - Samedi

### Entrées
* **Samosa Chaat** - Samossas croustillants nappés de chutneys acidulés et de yaourt.
* **Paneer Tikka** - Fromage frais mariné et grillé à la perfection.

### Plats Principaux
* **Poulet au Beurre** - Poulet tendre dans une sauce crémeuse à la tomate.
* **Dal Makhani** - Lentilles noires mijotées avec du beurre et de la crème.

### Dessert
* **Gulab Jamun** - Boulettes de lait tièdes dans un sirop de rose.
`,Zo=`# 10 Mai, Dimanche

### Entrées
* **Samosa Chaat** - Crispy samosas topped with tangy chutneys and yogurt.
* **Paneer Tikka** - Marinated cottage cheese grilled to perfection.

### Plat Principal
* **Butter Chicken** - Tender chicken in a rich, creamy tomato gravy.
* **Dal Makhani** - Slow-cooked black lentils with butter and cream.

### Dessert
* **Gulab Jamun** - Warm milk dumplings in rose syrup.
`,Qo=`# Lundi 11 mai

* ### **Crevettes au curry vert :**

  Servies avec un pulao aux petits pois parfumé et une salade fraîche du domaine.

* ### **Curry de palak frais du domaine :**

  Épinards frais du jardin cuisinés aux cacahuètes et au dal de pois chiches (Gram dal), accompagnés d'un savoureux pulao aux petits pois et d'une salade.`,$o=`
# 12 Mai, Mardi

* ### **Poulet Bhuna:**
    Servi avec deux parathas croustillants ou du riz, accompagné d’une salade de navets et betteraves croquante.

* ### **Curry de Mungo(Lentilles) Entier:**
Des haricots mungo entiers nutritifs mijotés dans un mélange d'épices savoureux, servis avec du riz léger et une salade de navets et betteraves rafraîchissante.
`,es=`
# 13 Mai, Mercredi

* ### **Kheema de Poulet :** 🍗
    Du poulet haché savoureux sauté avec des épices traditionnelles, servi avec du riz à la vapeur et un accompagnement de fenouil de saison.

* ### **Curry de Rajma :** 🌱Ⓥ
Un curry de haricots rouges réconfortant et copieux, servi avec du riz à la vapeur et de délicieux légumes au fenouil.

`,ts=`## 18 Mai, Lundi

* ### **Poulet Lababdar :** 🍗
    Un curry de poulet riche et crémeux à base de tomates et d’épices douces, servi avec du riz parfumé et des courgettes sautées.

* ### **Paneer Lababdar :** 🌱
    Du paneer fondant mijoté dans une sauce onctueuse aux tomates et aux épices indiennes, accompagné de riz et de courgettes sautées.
`,ns=`## 19 Mai, Mardi

* ### **Poulet Lababdar :** 🍗
    Un curry de poulet riche et crémeux à base de tomates et d’épices douces, servi avec du riz parfumé et des courgettes sautées.

* ### **Vangi Bhat :** 🌱Ⓥ
    Riz épicé aux aubergines à la façon du Maharashtra, accompagné de Sol Kadhi à la noix de coco et de légumes aux fèves et chou.
`,rs=`## 20 Mai, Mercredi

* ### **Curry de Kofta de Poulet :** 🍗
    De tendres boulettes de poulet mijotées dans une sauce indienne crémeuse et parfumée.

* ### **Malai Kofta / Curry de Tofu :** 🌱
    Boulettes de légumes et fromage frais dans une sauce douce et crémeuse, ou tofu mijoté dans un curry parfumé aux épices.`,is=`## 21 Mai, Jeudi

* ### **Saumon Achari :** 🐟
    Saumon cuisiné avec des épices marinées style achari, servi avec du riz parfumé et légumes.

* ### **Curry de Champignons et Tofu :** 🌱Ⓥ
    Champignons et tofu mijotés dans une sauce indienne savoureuse aux épices douces.
`,as=`## 22 Mai, Vendredi

* ### **Poulet Tandoori :** 🍗
    Poulet mariné aux épices tandoori et grillé, servi avec du riz aux épinards et un raita de betterave rafraîchissant.

* ### **Dosa Aloo & Dosa Légumes Mixtes :** 🌱
    Crêpes croustillantes du sud de l’Inde garnies de pommes de terre épicées ou de légumes variés, servies avec du sambhar (ragoût de lentilles et légumes) et un chutney de noix de coco.`,os=`## 25 Mai, Lundi

* ### **Jour férié :** 🏛️
    Nous sommes fermés aujourd'hui pour le Lundi de Pentecôte. À demain !
`,ss=`## 26 Mai, Mardi

* ### **Poulet Achari :** 🍗
    Poulet tendre mijoté dans une sauce acidulée et aromatique aux épices d'achari (cornichons indiens), servi avec du riz cuit à la vapeur et une salade fraîche.

* ### **Valachi Usal avec Riz & Chapati :** 🌱Ⓥ
    Haricots de Lima germés (val) mijotés dans une sauce épicée à la noix de coco et aux oignons, servis avec du riz, des légumes et un chapati moelleux.
`,cs=`## 27 Mai, Mercredi

* ### **Lamb Kheema Pao :** 🥩
    Curry d'agneau haché épicé servi avec des petits pains moelleux (pao), accompagné d'une salade d'oignons et radis, et d'une raïta de concombre rafraîchissante.

* ### **Dal Rice avec Légumes & Chapati :** 🌱Ⓥ
    Curry de lentilles jaunes (dal) réconfortant servi avec du riz cuit à la vapeur, des légumes de saison et un chapati moelleux.
`,ls=`## 28 Mai, Jeudi

* ### **Lamb Kheema Pao :** 🥩 <span class="prix">24 CHF</span>
    Curry d'agneau haché épicé servi avec des petits pains moelleux (pao), accompagné d'une salade d'oignons et radis, et d'une raïta de concombre rafraîchissante.

* ### **Paneer Matar avec Riz & Légumes :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dés de fromage frais indien (paneer) et petits pois mijotés dans une sauce épicée aux oignons et tomates, servis avec du riz cuit à la vapeur et des légumes de saison.
  
* ### **Dal Rice avec Légumes & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de lentilles jaunes (dal) réconfortant servi avec du riz cuit à la vapeur, des légumes de saison et un chapati moelleux.
`,us=`## 29 Mai, Vendredi

* ### **Biryani au Poulet :** 🍗
    Riz Basmati parfumé disposé en couches avec du poulet tendre mariné aux épices, du safran et des herbes fraîches, servi avec une raïta fraîche.

* ### **Dosa :** 🌱Ⓥ
    Crêpe fine et croustillante à base de riz fermenté et de lentilles, servie avec un ragoût de lentilles et légumes (sambar) et un chutney de noix de coco frais.
`,ds=`### 18 Juin, Jeudi

* ### **Paneer / Tofu Butter Masala :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage paneer ou tofu (option végétalienne) dans une sauce crémeuse et onctueuse à la tomate et au beurre, servi avec du riz et des légumes. / *Paneer cheese or tofu (vegan option) in a rich, creamy tomato butter sauce, served with rice and vegetables.*

* ### **Chicken Butter Masala :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tikka grillé mijoté dans une sauce riche, veloutée et parfumée à la tomate et au beurre, servi avec du riz. / *Grilled chicken tikka simmered in a rich, velvety tomato and butter sauce, served with rice.*
`,fs=`## 01 Juin, Lundi

* ### **Poulet Dhansak avec Riz & Légumes :** 🍗
    Poulet tendre cuit lentement avec un mélange savoureux de lentilles et de légumes dans une sauce épicée, servi avec du riz et des légumes.

* ### **Dal de Masoor Entier avec Riz & Légumes :** 🌱Ⓥ
    Lentilles brunes entières et nutritives mijotées dans des épices aromatiques, servies avec du riz cuit à la vapeur et des légumes de saison.
`,ps=`## 02 Juin, Mardi

* ### **Poulet Karahi Désossé avec Riz :** 🍗
    Tendres morceaux de poulet désossés sautés dans un wok traditionnel avec des tomates fraîches, du gingembre, de l'ail et des épices moulues, servis avec du riz.

* ### **Paneer Kadhai :** 🌱
    Cubes de fromage paneer frais cuisinés avec des poivrons, des oignons et des tomates dans un mélange d'épices fraîches et parfumées.
`,ms=`## 03 Juin, Mercredi

* ### **Poulet Karahi Désossé avec Riz :** 🍗
    Tendres morceaux de poulet désossés sautés dans un wok traditionnel avec des tomates fraîches, du gingembre, de l'ail et des épices moulues, servis avec du riz.

* ### **Chole Bhatura avec Salade & Raïta :** 🌱
    Curry de pois chiches épicé (chole) servi avec de grands pains frits et gonflés (bhatura), accompagné d'une salade d'oignons frais et d'une raïta.
`,hs=`## 04 Juin, Jeudi

* ### **Curry de Poulet Nadan du Kerala avec Riz :** 🍗
    Curry de poulet traditionnel du Kerala cuisiné dans du lait de coco et des épices aromatiques, servi avec riz et des légumes.

* ### **Chole Bhatura avec Salade & Raïta :** 🌱
    Curry de pois chiches épicé (chole) servi avec de grands pains frits et gonflés (bhatura), accompagné d'une salade d'oignons frais et d'une raïta.
`,gs=`## 05 Juin, Vendredi

* ### **Poulet Tandoori :** 🍗
    Poulet grillé mariné aux épices tandoori, servi avec du riz aromatique assaisonné et une salade fraîche.

* ### **Dosa avec Aloo & Paneer Bhurji :** 🌱
    Crêpe de riz et lentilles croustillante farcie de pommes de terre épicées et de paneer râpé et sauté, servie avec du sambar et un chutney à la noix de coco.
`,_s=`### 08 Juin, Lundi

* ### **Curry de Poulet aux Poireaux avec Riz :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce savoureuse aux poireaux et épices, servis avec du riz.

* ### **Dal Rice avec Aloo Gobi & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles jaunes (dal) réconfortantes accompagnées de pommes de terre et chou-fleur épicés (aloo gobi), servies avec du riz et un chapati.
`,vs=`### 09 Juin, Mardi

* ### **Curry de Poulet au Yaourt (Dahi Chicken) :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mariné et cuit dans une sauce onctueuse au yaourt et aux épices aromatiques, servi avec du riz.

* ### **Curry de Paneer au Fenugrec (Methi Malai Mutter Paneer) :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dés de fromage paneer et petits pois dans une sauce crémeuse parfumée aux feuilles de fenugrec (methi), servi avec du riz.
`,ys=`### 10 Juin, Mercredi

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce onctueuse aux épinards frais et aux épices, servis avec du riz.

* ### **Curry de Poulet au Yaourt (Dahi Chicken) :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mariné et cuit dans une sauce onctueuse au yaourt et aux épices aromatiques, servi avec du riz.

* ### **Palak Paneer / Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Cubes de fromage paneer ou de tofu servis dans une sauce veloutée aux épinards et épices aromatiques, accompagnés de riz.
`,bs=`### 11 Juin, Jeudi

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tendres morceaux de poulet mijotés dans une sauce onctueuse aux épinards frais et aux épices, servis avec du riz.

* ### **Chawlichi Usal avec Riz, Salade & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Un curry savoureux de haricots cornilles (black-eyed peas) préparé avec des épices traditionnelles, servi avec du riz, une salade fraîche et un chapati.
`,xs=`### 12 Juin, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Riz Basmati parfumé disposé en couches avec du poulet tendre mariné aux épices, du safran et des herbes fraîches, servi avec une raïta fraîche.

* ### **Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine et croustillante à base de riz fermenté et de lentilles, servie avec un ragoût de lentilles et légumes (sambar) et un chutney de noix de coco frais.
`,Ss=`### 15 Juin, Lundi

* ### **Moong Dal Palak :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles moong vertes aux épinards frais, servies avec du riz, des légumes de saison et un pain chapati traditionnel. / *Grren moong lentils cooked with fresh spinach, served with rice, seasonal vegetables, and a traditional chapati.*

* ### **Poulet Palak :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans une sauce onctueuse aux épinards et aux épices, servi avec du riz et une salade. / *Tender chicken simmered in a creamy spiced spinach sauce, served with rice and a side salad.*
`,Cs=`### 16 Juin, Mardi

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*
`,ws=`### 17 Juin, Mercredi

* ### **Curry d’Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Agneau mijoté lentement dans une sauce aux épices aromatiques, servi avec du riz et une salade de concombre fraîche. / *Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.*

* ### **Soya Chilli & Riz Frit Indo-Chinois :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Bouchées de soja sautées dans une sauce épicée et piquante, accompagnées de riz frit de style indo-chinois. / *Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.*

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*`,Ts=`### 18 Juin, Jeudi 

* ### **Curry d’Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Agneau mijoté lentement dans une sauce aux épices aromatiques, servi avec du riz et une salade de concombre fraîche. / *Slow-cooked lamb in an aromatic spiced gravy, served with rice and a fresh cucumber salad.*

* ### **Soya Chilli & Riz Frit Indo-Chinois :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Bouchées de soja sautées dans une sauce épicée et piquante, accompagnées de riz frit de style indo-chinois. / *Sautéed soy chunks in a spicy, tangy sauce, served with Indo-Chinese style fried rice.*

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires mijotées lentement avec du beurre et de la crème, servies avec un pain paratha croustillant, du riz et une salade fraîche. / *Slow-cooked black lentils with butter and cream, served with one crispy paratha, rice, and a fresh salad.*

* ### **Poulet Mughlai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet préparé dans une sauce royale riche et crémeuse aux noix, servie avec du riz et des légumes de saison. / *Chicken cooked in a rich, creamy, and nutty royal Mughlai gravy, served with rice and seasonal vegetables.*
`,Es=`### 19 Juin, Vendredi

* ### **Poulet Tandoori :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mariné au yaourt et aux épices tandoori traditionnelles puis grillé, servi avec du riz aux carottes et une salade verte aux fèves d'edamame. / *Yogurt and tandoori-spiced marinated grilled chicken, served with carrot rice and a green salad with edamame beans.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées (Masala) ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe, filled with spiced potato mash (Masala) or egg, served with warm sambar and chutney.*
`,Ds=`### 22 Juin, Lundi

* ### **Dal & Chapati :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dal indien traditionnel servi avec un chapati frais, du riz et des courgettes de saison. / *Traditional Indian dal served with fresh chapati, rice, and seasonal zucchini.*

* ### **Poulet Grillé au Methi :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet grillé mariné au fenugrec (methi), servi avec du riz à la tomate et des légumes de saison. / *Fenugreek-marinated grilled chicken served with tomato rice and seasonal vegetables.*
`,Os=`### 23 Juin, Mardi

* ### **Bol Poké Tofu / Paneer à la Noix de Coco :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Salade de carottes et lentilles moong à la noix de coco, quinoa aux fèves, tofu ou paneer sauté dans une sauce tomate à l’ail, servi façon bol poké. / *Coconut moong and carrot salad, quinoa with broad beans, and tofu or paneer tossed in garlic tomato sauce, served poke bowl style.*

* ### **Poulet au Methi :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre au fenugrec (methi), accompagné de garnitures fraîches de saison. / *Tender fenugreek chicken served with seasonal accompaniments.*
`,ks=`### 24 Juin, Mercredi

* ### **Curry de Tofu à la Kérala :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Tofu mijoté dans une sauce crémeuse à la noix de coco façon Kerala, servi avec du riz et des légumes ou une salade fraîche. / *Tofu simmered in a Kerala-style coconut curry, served with rice and vegetables or fresh salad.*

* ### **Poulet Mappas Curry :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce douce à la noix de coco aux épices du sud de l’Inde, accompagné de riz. / *Chicken cooked in a mild South Indian coconut curry, served with rice.*
`,As=`### 25 Juin, Jeudi

* ### **Paneer Kadhai :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cuisiné avec poivrons, oignons et épices kadhai traditionnelles, servi avec du riz et des légumes. / *Paneer cooked with peppers, onions, and traditional kadhai spices, served with rice and vegetables.*

* ### **Poulet Kadhai :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté avec poivrons et oignons dans une sauce kadhai parfumée, servi avec du riz et des légumes. / *Chicken cooked with peppers and onions in an aromatic kadhai sauce, served with rice and vegetables.*
`,js=`### 26 Juin, Vendredi

*  ### **Poulet Kadhai ou Poulet Mappas Curry:** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Servi avec du riz et des légumes.

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.*
`,Ms=`### 29 Juin, Lundi

* ### **Curry de Moong Germé :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes. / *Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts.*

* ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet savoureux servi avec du riz et des courgettes de saison. / *Chicken curry served with rice and seasonal zucchini.*
`,Ns=`### 30 Juin, Mardi

* ### **Curry de Moong Germé :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de haricots moong germés, servi avec du quinoa coloré ou du riz, et une salade de concombre aux cacahuètes. / *Sprouted moong curry, served with colored quinoa or rice, and a cucumber salad with peanuts.*

* ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet classique servi avec du riz et une salade de concombre fraîche. / *Classic chicken curry served with rice and a fresh cucumber salad.*
`,Ps=`### 01 Juillet, Mercredi

* ### **Baingan Bharta & Dahi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines grillées (Baingan Bharta) servi avec du yaourt (dahi), des légumes et un chapati. / *Smoked eggplant mash (Baingan Bharta) served with yogurt (dahi), veggies, and chapati.*

* ### **Curry d'Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Curry d'agneau tendrement mijoté, servi avec du riz et des légumes d'accompagnement. / *Tender slow-cooked lamb curry, served with rice and side vegetables.*
    
    * ### **Curry de Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet classique servi avec du riz et une salade de concombre fraîche. / *Classic chicken curry served with rice and a fresh cucumber salad.*
`,Fs=`### 02 Juillet, Jeudi

* ### **Baingan Bharta Style Maharashtrian :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines préparé à la mode de Maharashtra, servi avec chapati, riz et légumes. / *Eggplant mash prepared in Maharashtrian style, served with chapati, rice, and veggies.*

* ### **Curry d'Agneau :** 🥩 <span class="prix">24 CHF🍽️ / 24 CHF🥡</span>
    Curry d'agneau riche en saveurs, servi avec du riz et des légumes de saison. / *Flavorful lamb curry served with rice and seasonal vegetables.*
`,Is=`### 03 Juillet, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta. / *Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita.*

* ### **Masala Dosa / Egg Dosa :** 🌱🥚 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crêpe fine de riz et lentilles fermentées, garnie d'une farce de pommes de terre épicées ou d'un œuf, servie avec sambar et chutney. / *Thin fermented rice and lentil crepe filled with spiced potatoes or egg, served with sambar and chutney.*
`,Ls=`### 06 Juillet, Lundi

* ### **Dal Makhani :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles noires crémeuses traditionnelles servies avec du riz et des côtes de blettes. *Disponible en version végétalienne avec de la crème végane sur demande.* / *Traditional creamy black lentils served with rice and Swiss chard. Available for vegans with vegan cream upon request.* 🌱Ⓥ

* ### **Poulet au Thecha :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté au Thecha (pâte de piment vert et cacahuètes), servi avec du pain jowar bhakri (sorgho) et une salade. <br>⚠️ **Contient des cacahuètes.** *Poulet : Origine Suisse.* / *Chicken sautéed with Thecha (green chili and peanut paste), served with jowar bhakri (sorghum flatbread) and salad. ⚠️ **Contains peanuts.** Chicken: Origin Switzerland.*
`,Rs=`### 07 Juillet, Mardi

* ### **Chawli Vangi Batata Rassa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry traditionnel aux haricots à œil noir, aubergines fraîches du marché et pommes de terre, servi avec du riz, un chapati et une salade. <br>⚠️ **Contient des cacahuètes.** / *Traditional curry with black-eyed beans, farm-fresh aubergines, and potatoes, served with rice, chapati, and salad. ⚠️ **Contains peanuts.***

* ### **Poulet au Thecha & Ragi Bhakri :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet savoureux au Thecha servi avec du pain ragi bhakri (millet) et une salade. <br>⚠️ **Contient des cacahuètes.** *Poulet : Origine Suisse.* / *Flavorful Thecha chicken served with ragi bhakri (finger millet flatbread) and salad. ⚠️ **Contains peanuts.** Chicken: Origin Switzerland.*
`,zs=`### 08 Juillet, Mercredi

* ### **Fermé :** 🗓️
    Le restaurant est fermé aujourd'hui. / *The restaurant is closed today.*
`,Bs=`### 09 Juillet, Jeudi

* ### **Curry de Poisson Style Kerala :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poisson parfumé à la noix de coco et aux épices du Kerala, servi avec un assortiment de légumes. / *Fragrant Kerala-style fish curry simmered with coconut and spices, served with mixed vegetables.*
`,Vs=`### 10 Juillet, Vendredi

* ### **Poulet Tandoori & Riz aux Épinards :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mariné aux épices tandoori et grillé, servi avec un riz aux épinards et un raïta de betterave rouge. *Poulet : Origine Suisse.* / *Spiced marinated grilled chicken tandoori, served with aromatic spinach rice and a vibrant beetroot raita. Chicken: Origin Switzerland.*

* ### **Masala Dosa & Egg Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpes de lentilles et riz fermentés croustillantes : une garnie de pommes de terre épicées (Masala) et une préparée avec un œuf, servies avec chutney et sambar. / *Crispy fermented rice and lentil crepes: one filled with spiced potato mash (Masala) and one layered with egg, served with chutney and sambar.*
`,Hs=`### 13 Juillet, Lundi

* ### **Poulet Lazeez :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce riche et aromatique, servi avec du riz et une salade. *Poulet : Origine Suisse.* / *Chicken simmered in a rich, aromatic gravy, served with rice and salad. Chicken: Origin NL.*

* ### **Palak Paneer ou Palak Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien fait maison (Paneer) ou tofu préparé dans une sauce onctueuse aux épinards frais, servi avec du riz et un raïta. *Option végétalienne avec tofu sur demande.* 🌱Ⓥ / *Homemade Indian cheese (Paneer) or tofu cooked in a smooth, vibrant spinach sauce, served with rice and raita. Vegan option with tofu upon request.*
`,Us=`### 14 Juillet, Mardi

* ### **Poulet Lazeez :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce riche et aromatique, servi avec du riz et une salade. *Poulet : Origine Suisse.* / *Chicken simmered in a rich, aromatic gravy, served with rice and salad. Chicken: Origin NL.*

* ### **Curry de Dahi Baingan :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Aubergines savoureuses cuisinées dans une sauce au yaourt épicée (Dahi), servies avec du riz et une salade de concombre aux cacahuètes. <br>⚠️ **Contient des cacahuètes.** / *Flavorful eggplants cooked in a spiced yogurt (Dahi) gravy, served with rice and a cucumber peanut salad. ⚠️ **Contains peanuts.***
`,Ws=`### 15 Juillet, Mercredi

* ### **Curry de Truite :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de truite fraîche préparé avec des épices douces, servi avec du riz et des légumes. / *Fresh trout curry prepared with delicate spices, served with rice and side vegetables.*

* ### **Curry de Dahi Baingan :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Aubergines savoureuses cuisinées dans une sauce au yaourt épicée (Dahi), servies avec du riz et une salade de concombre fraîche. / *Flavorful eggplants cooked in a spiced yogurt (Dahi) gravy, served with rice and a fresh cucumber salad.*
`,Gs=`### 16 Juillet, Jeudi

* ### **Curry de Truite :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de truite fraîche préparé avec des épices douces, servi avec du riz et des légumes. / *Fresh trout curry prepared with delicate spices, served with rice and side vegetables.*

* ### **Shahi Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien (Paneer) préparé dans une sauce royale et crémeuse aux noix de cajou et épices douces, servi avec du riz et des légumes. / *Indian cheese (Paneer) cooked in a royal, creamy cashew sauce with mild spices, served with rice and veggies.*
`,Ks=`### 17 Juillet, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec raïta. *Poulet : Origine Suisse.* / *Fragrant basmati rice layered with marinated chicken and traditional spices, served with raita. Chicken: Origin Switzerland.*

* ### **Paneer Dosa Ou Egg Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpe de lentilles et riz fermentés croustillante, garnie de fromage Paneer aux épices douces ou une préparée avec un œuf, servie avec chutney et sambar. / *Crispy fermented rice and lentil crepe filled with spiced Paneer Or eggs, served with chutney and sambar.*
`,qs=`### 17 Août, Lundi

* ### **Poulet Madras :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce aromatique épicée au curry de Madras, servi avec du riz et une salade. *Poulet : Origine Suisse.* / *Chicken simmered in an aromatic spiced Madras curry sauce, served with rice and salad. Chicken: Origin Switzerland.*

* ### **Dal, Cabbage Chana Dal & Chapati :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles indiennes traditionnelles (Dal) servies avec du chou sauté aux pois chiches jaunes (Cabbage Chana Dal), du riz et un chapati frais. *Option végétalienne sur demande.* 🌱Ⓥ / *Traditional Indian lentils (Dal) served with sautéed cabbage and yellow split peas (Cabbage Chana Dal), rice, and a fresh chapati. Vegan option available upon request.*
`,Js=`### 18 Août, Mardi

* ### **Poulet Madras :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce aromatique épicée au curry de Madras, servi avec du riz et une salade. *Poulet : Origine Suisse.* / *Chicken simmered in an aromatic spiced Madras curry sauce, served with rice and salad. Chicken: Origin Switzerland.*

* ### **Dal, Cabbage Chana Dal & Chapati :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Lentilles indiennes traditionnelles (Dal) servies avec du chou sauté aux pois chiches jaunes (Cabbage Chana Dal), du riz et un chapati frais. *Option végétalienne sur demande.* 🌱Ⓥ / *Traditional Indian lentils (Dal) served with sautéed cabbage and yellow split peas (Cabbage Chana Dal), rice, and a fresh chapati. Vegan option available upon request.*
`,Ys=`### 19 Août, Mercredi

* ### **Methi Garlic Chicken & Lemon Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté à l'ail et au fenugrec (methi), servi avec un riz parfumé au citron et des courgettes de saison. *Poulet : Origine Suisse.* / *Chicken sautéed with garlic and fenugreek (methi), served with fragrant lemon rice and seasonal zucchini. Chicken: Origin Switzerland.*

* ### **Methi Malai Matar Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien fait maison (Paneer) et petits pois cuisinés dans une sauce onctueuse aux feuilles de fenugrec et à la crème, servis avec du riz et des légumes. / *Homemade Indian cheese (Paneer) and green peas cooked in a rich, creamy fenugreek sauce, served with rice and veggies.*
`,Xs=`### 20 Août, Jeudi

* ### **Methi Garlic Chicken & Lemon Rice :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet sauté à l'ail et au fenugrec (methi), servi avec un riz parfumé au citron et des courgettes de saison. *Poulet : Origine Suisse.* / *Chicken sautéed with garlic and fenugreek (methi), served with fragrant lemon rice and seasonal zucchini. Chicken: Origin Switzerland.*

* ### **Methi Malai Matar Paneer :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien fait maison (Paneer) et petits pois cuisinés dans une sauce onctueuse aux feuilles de fenugrec et à la crème, servis avec du riz et des légumes. / *Homemade Indian cheese (Paneer) and green peas cooked in a rich, creamy fenugreek sauce, served with rice and veggies.*
`,Zs=`### 21 Août, Vendredi

* ### **Dosa au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpe croustillante de riz et lentilles fermentés, garnie de poulet épicé, servie avec chutneys, sambar et salade. *Poulet : Origine Suisse.* / *Crispy fermented rice and lentil crepe filled with spiced chicken, served with chutneys, sambar, and salad. Chicken: Origin Switzerland.*

* ### **Dosa au Paneer ou Tofu :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpe croustillante de riz et lentilles fermentés, garnie de fromage Paneer ou de Tofu aux épices, servie avec chutneys, sambar et salade. *Option végétalienne avec tofu sur demande.* 🌱Ⓥ / *Crispy fermented rice and lentil crepe filled with spiced Paneer or Tofu, served with chutneys, sambar, and salad. Vegan option with tofu upon request.*
`,Qs=`### 24 Août, Lundi

* ### **Baingan Bharta & Dal Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines grillées aux épices (Baingan Bharta), servi avec du dal traditionnel et du riz basmati. / *Smoked spiced eggplant mash (Baingan Bharta), served with traditional dal and basmati rice.*

* ### **Butter Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans une sauce onctueuse aux tomates, beurre et épices douces, servi avec du riz et des poivrons grillés. *Poulet : Origine Slovénie* / *Tender chicken simmered in a rich tomato, butter, and mild spice sauce, served with rice and grilled bell peppers. Chicken: Origin Slovenia.*
`,$s=`### 25 Août, Mardi

* ### **Baingan Bharta & Dal Rice :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Caviar d'aubergines grillées aux épices (Baingan Bharta), servi avec du dal traditionnel et du riz basmati. / *Smoked spiced eggplant mash (Baingan Bharta), served with traditional dal and basmati rice.*

* ### **Butter Chicken :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans une sauce onctueuse aux tomates, beurre et épices douces, servi avec du riz et des poivrons grillés. *Poulet : Origine Slovénie.* / *Tender chicken simmered in a rich tomato, butter, and mild spice sauce, served with rice and grilled bell peppers. Chicken: Origin Slovenia.*
`,ec=`### 26 Août, Mercredi

* ### **Curry de Crevettes Style Kerala :** 🦐 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Crevettes mijotées dans un curry parfumé à la noix de coco, au curcuma et aux épices du Kerala, servies avec du riz et des légumes de saison. / *Succulent prawns simmered in a coconut, turmeric, and Kerala spice curry, served with rice and seasonal vegetables.*

* ### **Paneer Butter Masala :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien fait maison (Paneer) cuisiné dans une sauce crémeuse et riche à la tomate et aux cajous, servi avec du riz et des légumes. / *Homemade Indian cheese (Paneer) cooked in a rich, creamy tomato and cashew sauce, served with rice and vegetables.*
`,tc=`### 27 Août, Jeudi

* ### **Curry de Poisson :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poisson frais cuisiné dans une sauce piquante et aromatique aux épices indiennes, servi avec du riz et des légumes de saison. / *Fresh fish cooked in an aromatic, spiced Indian gravy, served with rice and seasonal vegetables.*

* ### **Paneer Butter Masala :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Fromage indien fait maison (Paneer) cuisiné dans une sauce crémeuse et riche à la tomate et aux cajous, servi avec du riz et des légumes. / *Homemade Indian cheese (Paneer) cooked in a rich, creamy tomato and cashew sauce, served with rice and vegetables.*
`,nc=`### 28 Août, Vendredi

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Plat de riz basmati parfumé et mijoté avec du poulet mariné et des épices traditionnelles, servi avec un raïta de betterave rouge. *Poulet : Origine Suisse.* / *Fragrant basmati rice layered with marinated chicken and traditional spices, served with beetroot raita. Chicken: Origin Switzerland.*

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpe croustillante de riz et lentilles fermentés, nappe d'œuf épicé, servie avec chutneys et sambar. / *Crispy fermented rice and lentil crepe layered with spiced egg, served with chutneys and sambar.*

* ### **Masala Dosa ou Tofu Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Crêpe croustillante de riz et lentilles fermentés, garnie de pommes de terre épicées (Masala) ou de tofu, servie avec chutneys et sambar. *Option végétalienne avec tofu.* 🌱Ⓥ / *Crispy fermented rice and lentil crepe filled with spiced potato mash (Masala) or tofu, served with chutneys and sambar. Vegan option with tofu.*
`,rc=`### 31 Août, Lundi

* ### **Chole Bhature & Salade :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Pois chiches épicés servis avec des bhature gonflés et une salade fraîche. / *Spiced chickpeas served with fluffy bhature and fresh salad.*

* ### **Poulet Korma, Riz & Chou Kale :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans un curry doux et crémeux, servi avec du riz basmati et du chou kale. *Poulet : Origine Suisse.* / *Tender chicken simmered in a mild creamy curry, served with basmati rice and kale. Chicken: Origin Switzerland.*
`,ic=`### 1 Septembre, Mardi

* ### **Chole Bhature & Salade :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Pois chiches épicés servis avec des bhature gonflés et une salade fraîche. / *Spiced chickpeas served with fluffy bhature and fresh salad.*

* ### **Poulet Korma, Riz & Chou Kale :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet tendre mijoté dans un curry doux et crémeux, servi avec du riz basmati et du chou kale. *Poulet : Origine Suisse.* / *Tender chicken simmered in a mild creamy curry, served with basmati rice and kale. Chicken: Origin Switzerland.*
`,ac=`### 2 Septembre, Mercredi

* ### **Paneer Lababdar & Riz :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cuisiné dans une sauce riche et crémeuse à la tomate et aux épices, servi avec du riz. / *Paneer cooked in a rich, creamy tomato and spice gravy, served with rice.*

* ### **Curry de Perche, Riz & Salade :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Filet de perche cuisiné dans un curry léger et parfumé, servi avec du riz et une salade fraîche. / *Perch fillet cooked in a light aromatic curry, served with rice and fresh salad.*
`,oc=`### 3 Septembre, Jeudi

* ### **Paneer Lababdar, Riz & Légumes :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Paneer cuisiné dans une sauce riche à la tomate et aux épices, servi avec du riz et des légumes. / *Paneer cooked in a rich tomato and spice gravy, served with rice and vegetables.*

* ### **Curry de Saumon, Riz & Aubergines-Pommes de Terre :** 🐟 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Saumon mijoté dans un curry délicatement épicé, servi avec du riz, des aubergines et des pommes de terre. / *Salmon simmered in a delicately spiced curry, served with rice and brinjal-potato vegetables.*
`,sc=`### 4 Septembre, Vendredi

* ### **Poulet Tandoori, Pulao aux Légumes & Raïta au Concombre :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mariné aux épices et grillé façon tandoori, servi avec pulao aux légumes et raïta au concombre. *Poulet : Origine Suisse.* / *Spice-marinated tandoori chicken, served with vegetable pulao and cucumber raita. Chicken: Origin Switzerland.*

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa croustillant garni d'œuf, servi avec sambar, chutney coco et salade. / *Crispy dosa with egg, served with sambar, coconut chutney and salad.*

* ### **Palak Paneer Dosa / Tofu Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa aux épinards garni de paneer ou de tofu, servi avec sambar, chutney coco et salade. *Option végétalienne avec tofu.* 🌱Ⓥ / *Spinach dosa filled with paneer or tofu, served with sambar, coconut chutney and salad. Vegan option with tofu.*

* ### **Masala Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa croustillant garni de pommes de terre épicées, servi avec sambar, chutney coco et salade. / *Crispy dosa filled with spiced potatoes, served with sambar, coconut chutney and salad.*
`,cc=`### 7 Septembre, Lundi

* ### **Chilka Moong Dal, Riz, Chapati & Aloo Gobi :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Dal de mung vert décortiqué mijoté aux épices, servi avec du riz, chapati et aloo gobi. / *Split green moong dal simmered with spices, served with rice, chapati and aloo gobi.*

* ### **Poulet au Beurre de Cacahuète, Riz & Salade de Chou Violet :** 🍗🥜 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Poulet mijoté dans une sauce crémeuse au beurre de cacahuète, servi avec du riz et une salade de chou violet. / *Chicken simmered in a creamy peanut butter sauce, served with rice and purple cabbage salad.*
`,lc=`### 8 Septembre, Mardi

* ### **Rajma Chawal & Haricots Verts :** 🌱 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de haricots rouges servi avec du riz et des haricots verts. / *Kidney bean curry served with rice and French beans.*

* ### **Curry de Poulet, Riz & Salade :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Curry de poulet maison servi avec du riz et une salade fraîche. / *Home-style chicken curry served with rice and fresh salad.*
`,uc=`### 9 Septembre, Mercredi

* ### **Curry de Soya Chaap, Riz & Légumes de Saison :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Soya chaap mijoté dans un curry épicé, servi avec du riz et des légumes de saison. *Convient aux véganes. Contient du gluten.* / *Soya chaap curry served with rice and seasonal vegetables. Suitable for vegans. Contains gluten.*

* ### **Curry de Kofta Agneau & Bœuf, Riz & Salade :** 🥩 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Boulettes d'agneau et de bœuf mijotées dans un curry parfumé, servies avec du riz et une salade fraîche. / *Lamb and beef kofta curry served with rice and fresh salad.*
`,dc=`### 10 Septembre, Jeudi

* ### **Curry de Kofta Agneau & Bœuf, Riz & Salade :** 🥩 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Boulettes d'agneau et de bœuf mijotées dans un curry parfumé, servies avec du riz et une salade fraîche. / *Lamb and beef kofta curry served with rice and fresh salad.*

* ### **Curry de Soya Chaap, Riz & Légumes de Saison :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Soya chaap mijoté dans un curry épicé, servi avec du riz et des légumes de saison. *Convient aux véganes. Contient du gluten.* / *Soya chaap curry served with rice and seasonal vegetables. Suitable for vegans. Contains gluten.*
`,fc=`### 11 Septembre, Vendredi

* ### **Egg Dosa :** 🥚 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa croustillant à l'œuf, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa. / *Crispy egg dosa served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa.*

* ### **Aloo Masala Dosa :** 🌱 <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa croustillant garni de pommes de terre épicées, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa. / *Crispy dosa filled with spiced potato masala, served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa.*

* ### **Tofu Dosa :** 🌱Ⓥ <span class="prix">22 CHF🍽️ / 22 CHF🥡</span>
    Dosa croustillant garni de tofu, servi avec chutney et sambar. Pâte préparée à base de riz, urad dal, farine de ragi et quinoa. *Option végétalienne.* / *Crispy tofu dosa served with chutney and sambar. Batter made from rice, urad dal, ragi flour and quinoa. Vegan option.*

* ### **Biryani au Poulet :** 🍗 <span class="prix">22 CHF🍽️ / 20 CHF🥡</span>
    Riz basmati parfumé cuisiné avec du poulet et des épices aromatiques. / *Fragrant basmati rice cooked with chicken and aromatic spices.*
`,pc=`| | | |
| :--- | :--- | :--- |
| **Boissons** | Mango Lassi <br/> Kombucha <br/> Super Bock | 6 CHF |
| | Café BIO <br/> Chai | 4.2 4.50 |
| | Bière Indienne <br/> Bière Sans Gluten | 7 CHF |
| **Dessert** | Millet Banana Shira <br/> Gâteau Choc. Biscoff | 5 CHF |
| **Suppléments** | Sev Puri <br/> Paratha Methi | 5 CHF |
| | Naan au Beurre | 6  CHF |
| | Naan au Fromage <br/> Naan à l'Ail | 7  CHF |
| | Naan Amritsari | 8 CHF |
`,mc=`### Entrées

#### Trio de Bruschetta
Tomates fraîches, basilic, ail et vinaigre balsamique sur pain croustillant

#### Crevettes Saganaki
Crevettes succulentes dans une riche sauce au fromage feta

### Plats Principaux

#### Branzino à la Poêle
Bar de mer méditerranéen avec légumes de saison et beurre blanc au citron

#### Filet de Boeuf
Morceau de premier choix avec jus de truffe et pommes de terre rôties

### Desserts

#### Tiramisu
Dessert italien classique avec mascarpone et espresso

#### Gâteau au Chocolat Sans Farine
Chocolat riche et décadent avec coulis de framboise
`,hc=`
####
Horaires d'ouverture: <br/><b>Lundi - Vendredi: 07h45 - 20h00</b>`;function gc(){return{async:!1,breaks:!1,extensions:null,gfm:!0,hooks:null,pedantic:!1,renderer:null,silent:!1,tokenizer:null,walkTokens:null}}var _c=gc();function vc(e){_c=e}var yc={exec:()=>null};function bc(e){let t=[];return n=>{let r=Math.max(0,Math.min(3,n-1)),i=t[r];return i||(i=e(r),t[r]=i),i}}function Z(e,t=``){let n=typeof e==`string`?e:e.source,r={replace:(e,t)=>{let i=typeof t==`string`?t:t.source;return i=i.replace(Sc.caret,`$1`),n=n.replace(e,i),r},getRegex:()=>new RegExp(n,t)};return r}var xc=((e=``)=>{try{return!!RegExp(`(?<=1)(?<!1)`+e)}catch{return!1}})(),Sc={codeRemoveIndent:/^(?: {1,4}| {0,3}\t)/gm,outputLinkReplace:/\\([\[\]])/g,indentCodeCompensation:/^(\s+)(?:```)/,beginningSpace:/^\s+/,endingHash:/#$/,startingSpaceChar:/^ /,endingSpaceChar:/ $/,endingSpaceTabChar:/[ \t]$/,nonSpaceChar:/[^ ]/,newLineCharGlobal:/\n/g,tabCharGlobal:/\t/g,multipleSpaceGlobal:/\s+/g,blankLine:/^[ \t]*$/,doubleBlankLine:/\n[ \t]*\n[ \t]*$/,blockquoteStart:/^ {0,3}>/,blockquoteSetextReplace:/\n {0,3}((?:=+|-+) *)(?=\n|$)/g,blockquoteSetextReplace2:/^ {0,3}>[ \t]?/gm,listReplaceNesting:/^ {1,4}(?=( {4})*[^ ])/g,listIsTask:/^\[[ xX]\] +\S/,listReplaceTask:/^\[[ xX]\] +/,listTaskCheckbox:/\[[ xX]\]/,anyLine:/\n.*\n/,hrefBrackets:/^<(.*)>$/,tableDelimiter:/[:|]/,tableAlignChars:/^\||\| *$/g,tableRowBlankLine:/\n[ \t]*$/,tableAlignRight:/^ *-+: *$/,tableAlignCenter:/^ *:-+: *$/,tableAlignLeft:/^ *:-+ *$/,startATag:/^<a /i,endATag:/^<\/a>/i,startPreScriptTag:/^<(pre|code|kbd|script)(\s|>)/i,endPreScriptTag:/^<\/(pre|code|kbd|script)(\s|>)/i,startAngleBracket:/^</,endAngleBracket:/>$/,pedanticHrefTitle:/^([^'"]*[^\s])\s+(['"])(.*)\2/,unicodeAlphaNumeric:/[\p{L}\p{N}]/u,escapeTest:/[&<>"']/,escapeReplace:/[&<>"']/g,escapeTestNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,escapeReplaceNoEncode:/[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/g,caret:/(^|[^\[])\^/g,percentDecode:/%25/g,findPipe:/\|/g,splitPipe:/ \|/,slashPipe:/\\\|/g,carriageReturn:/\r\n|\r/g,spaceLine:/^ +$/gm,notSpaceStart:/^\S*/,endingNewline:/\n$/,listItemRegex:e=>RegExp(`^( {0,3}${e})((?:[	 ][^\\n]*)?(?:\\n|$))`),nextBulletRegex:bc(e=>RegExp(`^ {0,${e}}(?:[*+-]|\\d{1,9}[.)])((?:[ 	][^\\n]*)?(?:\\n|$))`)),hrRegex:bc(e=>RegExp(`^ {0,${e}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`)),fencesBeginRegex:bc(e=>RegExp(`^ {0,${e}}(?:\`\`\`|~~~)`)),headingBeginRegex:bc(e=>RegExp(`^ {0,${e}}#`)),htmlBeginRegex:bc(e=>RegExp(`^ {0,${e}}<(?:[a-z].*>|!--)`,`i`)),blockquoteBeginRegex:bc(e=>RegExp(`^ {0,${e}}>`))},Cc=/^(?:[ \t]*(?:\n|$))+/,wc=/^((?: {4}| {0,3}\t)[^\n]+(?:\n(?:[ \t]*(?:\n|$))*)?)+/,Tc=/^ {0,3}(`{3,}(?=[^`\n]*(?:\n|$))|~{3,})([^\n]*)(?:\n|$)(?:|([\s\S]*?)(?:\n|$))(?: {0,3}\1[~`]* *(?=\n|$)|$)/,Ec=/^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,Dc=/^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,Oc=/ {0,3}(?:[*+-]|\d{1,9}[.)])/,kc=/^(?!bull |blockCode|fences|blockquote|heading|html|table)((?:.|\n(?!\s*?\n|bull |blockCode|fences|blockquote|heading|html|table))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,Ac=Z(kc).replace(/bull/g,Oc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/\|table/g,``).getRegex(),jc=Z(kc).replace(/bull/g,Oc).replace(/blockCode/g,/(?: {4}| {0,3}\t)/).replace(/fences/g,/ {0,3}(?:`{3,}|~{3,})/).replace(/blockquote/g,/ {0,3}>/).replace(/heading/g,/ {0,3}#{1,6}(?:\s|$)/).replace(/html/g,/ {0,3}<[^\n>]+>\n/).replace(/table/g,/ {0,3}\|?(?:[:\- ]*\|)+[\:\- ]*\n/).getRegex(),Mc=/^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table|[ \t]+\n)[^\n]+)*)/,Nc=/^[^\n]+/,Pc=/(?!\s*\])(?:\\[\s\S]|[^\[\]\\])+/,Fc=Z(/^ {0,3}\[(label)\]: *(?:\n[ \t]*)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n[ \t]*)?| *\n[ \t]*)(title))? *(?:\n+|$)/).replace(`label`,Pc).replace(`title`,/(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/).getRegex(),Ic=Z(/^(bull)([ \t][^\n]*?)?(?:\n|$)/).replace(/bull/g,Oc).getRegex(),Lc=`address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|search|section|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul`,Rc=/<!--(?:-?>|[\s\S]*?(?:-->|$))/,zc=Z(`^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n*|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>[^\\n]*\\n*|$)|<![A-Z][\\s\\S]*?(?:>[^\\n]*\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>[^\\n]*\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|<(?!script|pre|style|textarea)([a-z][a-z0-9-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$)|</(?!script|pre|style|textarea)[a-z][a-z0-9-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n[ 	]*)+\\n|$))`,`i`).replace(`comment`,Rc).replace(`tag`,Lc).replace(`attribute`,/ +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(),Bc=e=>Z(Mc).replace(`hr`,Ec).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,e).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Lc).getRegex(),Vc=Bc(/ {0,3}(?:[*+-]|1[.)])[ \t]+[^ \t\n]/),Hc=Bc(/ {0,3}(?:[*+-]|\d{1,9}[.)])(?:[ \t]|\n|$)/),Uc={blockquote:Z(/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/).replace(`paragraph`,Hc).getRegex(),code:wc,def:Fc,fences:Tc,heading:Dc,hr:Ec,html:zc,lheading:Ac,list:Ic,newline:Cc,paragraph:Vc,table:yc,text:Nc},Wc=Z(`^ *([^\\n ].*)\\n {0,3}((?:\\| *)?:?-+:? *(?:\\| *:?-+:? *)*(?:\\| *)?)(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)`).replace(`hr`,Ec).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`blockquote`,` {0,3}>`).replace(`code`,`(?: {4}| {0,3}	)[^\\n]`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Lc).getRegex(),Gc={...Uc,lheading:jc,table:Wc,paragraph:Z(Mc).replace(`hr`,Ec).replace(`heading`,` {0,3}#{1,6}(?:\\s|$)`).replace(`|lheading`,``).replace(`table`,Wc).replace(`blockquote`,` {0,3}>`).replace(`fences`," {0,3}(?:`{3,}(?=[^`\\n]*(?:\\n|$))|~~~)[^\\n]*(?:\\n|$)").replace(`list`,` {0,3}(?:[*+-]|1[.)])[ \\t]+[^ \\t\\n]`).replace(`html`,`</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)`).replace(`tag`,Lc).getRegex()},Kc={...Uc,html:Z(`^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|'[^']*'|\\s[^'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))`).replace(`comment`,Rc).replace(/tag/g,`(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b`).getRegex(),def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,heading:/^(#{1,6})(.*)(?:\n+|$)/,fences:yc,lheading:/^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,paragraph:Z(Mc).replace(`hr`,Ec).replace(`heading`,` *#{1,6} *[^
]`).replace(`lheading`,Ac).replace(`|table`,``).replace(`blockquote`,` {0,3}>`).replace(`|fences`,``).replace(`|list`,``).replace(`|html`,``).replace(`|tag`,``).getRegex()},qc=/^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,Jc=/^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,Yc=/^( {2,}|\\)\n(?!\s*$)/,Xc=/^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,Zc=/[\p{P}\p{S}]/u,Qc=/[\s\p{P}\p{S}]/u,$c=/[^\s\p{P}\p{S}]/u,el=Z(/^((?![*_])punctSpace)/,`u`).replace(/punctSpace/g,Qc).getRegex(),tl=/[\p{Pi}\p{Ps}"']/u,nl=/(?!~)[\p{P}\p{S}]/u,rl=/(?!~)[\s\p{P}\p{S}]/u,il=/(?:[^\s\p{P}\p{S}]|~)/u,al=Z(/link|precode-code|html/,`g`).replace(`link`,/\[(?:[^\[\]`]|(?<a>`+)[^`]+\k<a>(?!`))*?\]\((?:\\[\s\S]|[^\\\(\)]|\((?:\\[\s\S]|[^\\\(\)])*\))*\)/).replace(`precode-`,xc?"(?<!`)()":"(^^|[^`])").replace(`code`,/(?<b>`+)[^`]+\k<b>(?!`)/).replace(`html`,/<(?! )[^<>]*?>/).getRegex(),ol=/^(?:\*+(?:((?!\*)punct)|([^\s*]))?)|^_+(?:((?!_)punct)|([^\s_]))?/,sl=Z(ol,`u`).replace(/punct/g,Zc).getRegex(),cl=Z(ol,`u`).replace(/punct/g,nl).getRegex(),ll=Z(/^(?:\*+(?:((?!\*)(?!openQuote)punct)|([^\s*]))?)|^_+(?:((?!_)(?!openQuote)punct)|([^\s_]))?/,`u`).replace(/openQuote/g,tl).replace(/punct/g,Zc).getRegex(),ul=`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)punctSpace(\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|notPunctSpace(\\*+)(?=notPunctSpace)`,dl=Z(ul,`gu`).replace(/notPunctSpace/g,$c).replace(/punctSpace/g,Qc).replace(/punct/g,Zc).getRegex(),fl=Z(ul,`gu`).replace(/notPunctSpace/g,il).replace(/punctSpace/g,rl).replace(/punct/g,nl).getRegex(),pl=Z(`^[^_*]*?__[^_*]*?\\*[^_*]*?(?=__)|[^*]+(?=[^*])|(?!\\*)punct(\\*+)(?=[\\s]|$)|notPunctSpace(\\*+)(?!\\*)(?=punctSpace|$)|(?!\\*)[\\s](\\*+)(?=notPunctSpace)|[\\s](\\*+)(?!\\*)(?=punct)|(?!\\*)punct(\\*+)(?!\\*)(?=punct)|(?:(?!\\*)punct|notPunctSpace)(\\*+)(?!\\*)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$c).replace(/punctSpace/g,Qc).replace(/punct/g,Zc).getRegex(),ml=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)punctSpace(_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)`,`gu`).replace(/notPunctSpace/g,$c).replace(/punctSpace/g,Qc).replace(/punct/g,Zc).getRegex(),hl=Z(`^[^_*]*?\\*\\*[^_*]*?_[^_*]*?(?=\\*\\*)|[^_]+(?=[^_])|(?!_)punct(_+)(?=[\\s]|$)|notPunctSpace(_+)(?!_)(?=punctSpace|$)|(?!_)[\\s](_+)(?=notPunctSpace)|[\\s](_+)(?!_)(?=punct)|(?!_)punct(_+)(?!_)(?=punct)|(?:(?!_)punct|notPunctSpace)(_+)(?!_)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$c).replace(/punctSpace/g,Qc).replace(/punct/g,Zc).getRegex(),gl=Z(/^~~?(?:((?!~)punct)|[^\s~])/,`u`).replace(/punct/g,Zc).getRegex(),_l=Z(`^[^~]+(?=[^~])|(?!~)punct(~~?)(?=[\\s]|$)|notPunctSpace(~~?)(?!~)(?=punctSpace|$)|(?!~)punctSpace(~~?)(?=notPunctSpace)|[\\s](~~?)(?!~)(?=punct)|(?!~)punct(~~?)(?!~)(?=punct)|notPunctSpace(~~?)(?=notPunctSpace)`,`gu`).replace(/notPunctSpace/g,$c).replace(/punctSpace/g,Qc).replace(/punct/g,Zc).getRegex(),vl=Z(/\\(punct)/,`gu`).replace(/punct/g,Zc).getRegex(),yl=Z(/^<(scheme:[^\s\x00-\x1f<>]*|email)>/).replace(`scheme`,/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/).replace(`email`,/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/).getRegex(),bl=Z(Rc).replace(`(?:-->|$)`,`-->`).getRegex(),xl=Z(`^comment|^</[a-zA-Z][a-zA-Z0-9-]*\\s*>|^<[a-zA-Z][a-zA-Z0-9-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>`).replace(`comment`,bl).replace(`attribute`,/\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/).getRegex(),Sl=Z(/(?:\[(?:brackets|\\[\s\S]|[^\[\]\\])*\]|\\[\s\S]|`+(?!`)[^`]*?`+(?!`)|``+(?=\])|[^\[\]\\`])*?/).replace(`brackets`,/\[(?:\\[\s\S]|[^\[\]\\])*\]/).getRegex(),Cl=Z(/^!?\[(label)\]\(\s*(href)(?:(?:[ \t]+(?:\n[ \t]*)?|\n[ \t]*)(title))?\s*\)/).replace(`label`,Sl).replace(`href`,/<(?:\\.|[^\n<>\\])+>|[^ \t\n\x00-\x1f]+|(?=\))/).replace(`title`,/"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/).getRegex(),wl=Z(/^!?\[(label)\]\[(ref)\]/).replace(`label`,Sl).replace(`ref`,Pc).getRegex(),Tl=Z(/^!?\[(ref)\](?:\[\])?/).replace(`ref`,Pc).getRegex(),El=Z(`reflink|nolink(?!\\()`,`g`).replace(`reflink`,wl).replace(`nolink`,Tl).getRegex(),Dl=/[hH][tT][tT][pP][sS]?|[fF][tT][pP]/,Ol={_backpedal:yc,anyPunctuation:vl,autolink:yl,blockSkip:al,br:Yc,code:Jc,del:yc,delLDelim:yc,delRDelim:yc,emStrongLDelim:sl,emStrongRDelimAst:dl,emStrongRDelimUnd:ml,escape:qc,link:Cl,nolink:Tl,punctuation:el,reflink:wl,reflinkSearch:El,tag:xl,text:Xc,url:yc},kl={...Ol,emStrongLDelim:ll,emStrongRDelimAst:pl,emStrongRDelimUnd:hl,link:Z(/^!?\[(label)\]\((.*?)\)/).replace(`label`,Sl).getRegex(),reflink:Z(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace(`label`,Sl).getRegex()},Al={...Ol,emStrongRDelimAst:fl,emStrongLDelim:cl,delLDelim:gl,delRDelim:_l,url:Z(/^((?:protocol):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace(`protocol`,Dl).replace(`email`,/[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![\w-])/).getRegex(),_backpedal:/(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,del:/^(~~?)(?=[^\s~])((?:\\[\s\S]|[^\\])*?(?:\\[\s\S]|[^\s~\\]))\1(?=[^~]|$)/,text:Z(/^(`+|~+|[^`~])(?:(?=[`~])|(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|protocol:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/).replace(`protocol`,Dl).getRegex()},jl={...Al,br:Z(Yc).replace(`{2,}`,`*`).getRegex(),text:Z(Al.text).replace(`\\b_`,`\\b_| {2,}\\n`).replace(/\{2,\}/g,`*`).getRegex()},Ml={normal:Uc,gfm:Gc,pedantic:Kc},Nl={normal:Ol,gfm:Al,breaks:jl,pedantic:kl},Pl={"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`},Fl=e=>Pl[e];function Il(e,t){if(t){if(Sc.escapeTest.test(e))return e.replace(Sc.escapeReplace,Fl)}else if(Sc.escapeTestNoEncode.test(e))return e.replace(Sc.escapeReplaceNoEncode,Fl);return e}function Ll(e){try{e=encodeURI(e).replace(Sc.percentDecode,`%`)}catch{return null}return e}function Rl(e,t){let n=e.replace(Sc.findPipe,(e,t,n)=>{let r=!1,i=t;for(;--i>=0&&n[i]===`\\`;)r=!r;return r?`|`:` |`}).split(Sc.splitPipe),r=0;if(n[0].trim()||n.shift(),n.length>0&&!n.at(-1)?.trim()&&n.pop(),t){if(n.length>t)n.splice(t);else for(;n.length<t;)n.push(``)}for(;r<n.length;r++)n[r]=n[r].trim().replace(Sc.slashPipe,`|`);return n}function zl(e,t,n){let r=e.length;if(r===0)return``;let i=0;for(;i<r;){let a=e.charAt(r-i-1);if(a===t&&!n)i++;else if(a!==t&&n)i++;else break}return e.slice(0,r-i)}function Bl(e){let t=e.split(`
`),n=t.length-1;for(;n>=0&&Sc.blankLine.test(t[n]);)n--;return t.length-n<=2?e:t.slice(0,n+1).join(`
`)}function Vl(e,t){if(e.indexOf(t[1])===-1)return-1;let n=0;for(let r=0;r<e.length;r++)if(e[r]===`\\`)r++;else if(e[r]===t[0])n++;else if(e[r]===t[1]&&(n--,n<0))return r;return n>0?-2:-1}function Hl(e,t=0){let n=t,r=``;for(let t of e)if(t===`	`){let e=4-n%4;r+=` `.repeat(e),n+=e}else r+=t,n++;return r}function Ul(e,t,n,r,i){let a=t.href,o=t.title||null,s=e[1].replace(i.other.outputLinkReplace,`$1`),c=e[0].charAt(0)===`!`;r.state.inLink=!0;let l=r.state.linkEmitted,u=r.state.inRawBlock;r.state.linkEmitted=!1;let d=r.inlineTokens(s),f=r.state.linkEmitted;if(r.state.linkEmitted=l,r.state.inLink=!1,!c){if(f){r.state.inRawBlock=u;return}r.state.linkEmitted=!0}return{type:c?`image`:`link`,raw:n,href:a,title:o,text:s,tokens:d}}function Wl(e,t,n){let r=e.match(n.other.indentCodeCompensation);if(r===null)return t;let i=r[1];return t.split(`
`).map(e=>{let t=e.match(n.other.beginningSpace);if(t===null)return e;let[r]=t;return e.slice(Math.min(r.length,i.length))}).join(`
`)}var Gl=class{options;rules;lexer;constructor(e){this.options=e||_c}space(e){let t=this.rules.block.newline.exec(e);if(t&&t[0].length>0)return{type:`space`,raw:t[0]}}code(e){let t=this.rules.block.code.exec(e);if(t){let e=this.options.pedantic?t[0]:Bl(t[0]);return{type:`code`,raw:e,codeBlockStyle:`indented`,text:e.replace(this.rules.other.codeRemoveIndent,``)}}}fences(e){let t=this.rules.block.fences.exec(e);if(t){let e=t[0],n=Wl(e,t[3]||``,this.rules);return{type:`code`,raw:e,lang:t[2]?t[2].trim().replace(this.rules.inline.anyPunctuation,`$1`):t[2],text:n}}}heading(e){let t=this.rules.block.heading.exec(e);if(t){let e=t[2].trim();if(this.rules.other.endingHash.test(e)){let t=zl(e,`#`);(this.options.pedantic||!t||this.rules.other.endingSpaceTabChar.test(t))&&(e=t.trim())}return{type:`heading`,raw:zl(t[0],`
`),depth:t[1].length,text:e,tokens:this.lexer.inline(e)}}}hr(e){let t=this.rules.block.hr.exec(e);if(t)return{type:`hr`,raw:zl(t[0],`
`)}}blockquote(e){let t=this.rules.block.blockquote.exec(e);if(t){let e=zl(t[0],`
`).split(`
`),n=``,r=``,i=[];for(;e.length>0;){let t=!1,a=[],o=0;for(;o<e.length;o++)if(this.rules.other.blockquoteStart.test(e[o]))a.push(e[o]),t=!0;else if(!t)a.push(e[o]);else break;e=e.slice(o);let s=a.join(`
`),c=s.replace(this.rules.other.blockquoteSetextReplace,`
    $1`).replace(this.rules.other.blockquoteSetextReplace2,``);n=n?`${n}
${s}`:s,r=r?`${r}
${c}`:c;let l=this.lexer.state.top;if(this.lexer.state.top=!0,this.lexer.blockTokens(c,i,!0),this.lexer.state.top=l,e.length===0)break;let u=i.at(-1);if(u?.type===`code`)break;if(u?.type===`blockquote`){let t=u,a=e.join(`
`),o=t.raw+`
`+a.replace(this.rules.other.blockquoteSetextReplace2,``),s=this.blockquote(o);i[i.length-1]=s,n=`${n}
${a}`,r=r.substring(0,r.length-t.text.length)+s.text;break}if(u?.type===`list`){let t=u,a=t.raw+`
`+e.join(`
`),o=this.list(a);i[i.length-1]=o,n=n.substring(0,n.length-u.raw.length)+o.raw,r=r.substring(0,r.length-t.raw.length)+o.raw,e=a.substring(i.at(-1).raw.length).split(`
`);continue}}return{type:`blockquote`,raw:n,tokens:i,text:r}}}list(e){let t=this.rules.block.list.exec(e);if(t){let n=t[1].trim(),r=n.length>1,i={type:`list`,raw:``,ordered:r,start:r?+n.slice(0,-1):``,loose:!1,items:[]};n=r?`\\d{1,9}\\${n.slice(-1)}`:`\\${n}`,this.options.pedantic&&(n=r?n:`[*+-]`);let a=this.rules.other.listItemRegex(n),o=!1;for(;e;){let n=!1,r=``,s=``;if(!(t=a.exec(e))||this.rules.block.hr.test(e))break;r=t[0],e=e.substring(r.length);let c=Hl(t[2].split(`
`,1)[0],t[1].length),l=e.split(`
`,1)[0],u=!c.trim(),d=0;if(this.options.pedantic?(d=2,s=c.trimStart()):u?d=t[1].length+1:(d=c.search(this.rules.other.nonSpaceChar),d=d>4?1:d,s=c.slice(d),d+=t[1].length),u&&this.rules.other.blankLine.test(l)&&(r+=l+`
`,e=e.substring(l.length+1),n=!0),!n){let t=this.rules.other.nextBulletRegex(d),n=this.rules.other.hrRegex(d),i=this.rules.other.fencesBeginRegex(d),a=this.rules.other.headingBeginRegex(d),o=this.rules.other.htmlBeginRegex(d),f=this.rules.other.blockquoteBeginRegex(d);for(;e;){let p=e.split(`
`,1)[0],m;if(l=p,this.options.pedantic?(l=l.replace(this.rules.other.listReplaceNesting,`  `),m=l):m=l.replace(this.rules.other.tabCharGlobal,`    `),i.test(l)||a.test(l)||o.test(l)||f.test(l)||t.test(l)||n.test(l))break;if(m.search(this.rules.other.nonSpaceChar)>=d||!l.trim())s+=`
`+m.slice(d);else{if(u||c.replace(this.rules.other.tabCharGlobal,`    `).search(this.rules.other.nonSpaceChar)>=4||i.test(c)||a.test(c)||n.test(c))break;s+=`
`+l}u=!l.trim(),r+=p+`
`,e=e.substring(p.length+1),c=m.slice(d)}}i.loose||(o?i.loose=!0:this.rules.other.doubleBlankLine.test(r)&&(o=!0)),i.items.push({type:`list_item`,raw:r,task:!!this.options.gfm&&this.rules.other.listIsTask.test(s),loose:!1,text:s,tokens:[]}),i.raw+=r}let s=i.items.at(-1);if(s)s.raw=s.raw.trimEnd(),s.text=s.text.trimEnd();else return;i.raw=i.raw.trimEnd();for(let e of i.items)if(this.lexer.state.top=!1,e.tokens=this.lexer.blockTokens(e.text,[]),!i.loose){let t=e.tokens.filter(e=>e.type===`space`);i.loose=t.length>0&&t.some(e=>this.rules.other.anyLine.test(e.raw))}for(let e of i.items){let t=e.tokens[0];if(e.task&&(t?.type===`text`||t?.type===`paragraph`)){e.text=e.text.replace(this.rules.other.listReplaceTask,``),t.raw=t.raw.replace(this.rules.other.listReplaceTask,``),t.text=t.text.replace(this.rules.other.listReplaceTask,``);for(let e=this.lexer.inlineQueue.length-1;e>=0;e--)if(this.rules.other.listIsTask.test(this.lexer.inlineQueue[e].src)){this.lexer.inlineQueue[e].src=this.lexer.inlineQueue[e].src.replace(this.rules.other.listReplaceTask,``);break}let n=this.rules.other.listTaskCheckbox.exec(e.raw);if(n){let t={type:`checkbox`,raw:n[0]+` `,checked:n[0]!==`[ ]`};e.checked=t.checked,i.loose?e.tokens[0]&&[`paragraph`,`text`].includes(e.tokens[0].type)&&`tokens`in e.tokens[0]&&e.tokens[0].tokens?(e.tokens[0].raw=t.raw+e.tokens[0].raw,e.tokens[0].text=t.raw+e.tokens[0].text,e.tokens[0].tokens.unshift(t)):e.tokens.unshift({type:`paragraph`,raw:t.raw,text:t.raw,tokens:[t]}):e.tokens.unshift(t)}}else e.task&&=!1}if(i.loose)for(let e of i.items){e.loose=!0;for(let t of e.tokens)t.type===`text`&&(t.type=`paragraph`)}return i}}html(e){let t=this.rules.block.html.exec(e);if(t){let e=Bl(t[0]);return{type:`html`,block:!0,raw:e,pre:t[1]===`pre`||t[1]===`script`||t[1]===`style`,text:e}}}def(e){let t=this.rules.block.def.exec(e);if(t){let e=t[1].toLowerCase().replace(this.rules.other.multipleSpaceGlobal,` `),n=t[2]?t[2].replace(this.rules.other.hrefBrackets,`$1`).replace(this.rules.inline.anyPunctuation,`$1`):``,r=t[3]?t[3].substring(1,t[3].length-1).replace(this.rules.inline.anyPunctuation,`$1`):t[3];return{type:`def`,tag:e,raw:zl(t[0],`
`),href:n,title:r}}}table(e){let t=this.rules.block.table.exec(e);if(!t||!this.rules.other.tableDelimiter.test(t[2]))return;let n=Rl(t[1]),r=t[2].replace(this.rules.other.tableAlignChars,``).split(`|`),i=t[3]?.trim()?t[3].replace(this.rules.other.tableRowBlankLine,``).split(`
`):[],a={type:`table`,raw:zl(t[0],`
`),header:[],align:[],rows:[]};if(n.length===r.length){for(let e of r)this.rules.other.tableAlignRight.test(e)?a.align.push(`right`):this.rules.other.tableAlignCenter.test(e)?a.align.push(`center`):this.rules.other.tableAlignLeft.test(e)?a.align.push(`left`):a.align.push(null);for(let e=0;e<n.length;e++)a.header.push({text:n[e],tokens:this.lexer.inline(n[e]),header:!0,align:a.align[e]});for(let e of i)a.rows.push(Rl(e,a.header.length).map((e,t)=>({text:e,tokens:this.lexer.inline(e),header:!1,align:a.align[t]})));return a}}lheading(e){let t=this.rules.block.lheading.exec(e);if(t){let e=t[1].trim();return{type:`heading`,raw:zl(t[0],`
`),depth:t[2].charAt(0)===`=`?1:2,text:e,tokens:this.lexer.inline(e)}}}paragraph(e){let t=this.rules.block.paragraph.exec(e);if(t){let e=t[1].charAt(t[1].length-1)===`
`?t[1].slice(0,-1):t[1];return{type:`paragraph`,raw:t[0],text:e,tokens:this.lexer.inline(e)}}}text(e){let t=this.rules.block.text.exec(e);if(t)return{type:`text`,raw:t[0],text:t[0],tokens:this.lexer.inline(t[0])}}escape(e){let t=this.rules.inline.escape.exec(e);if(t)return{type:`escape`,raw:t[0],text:t[1]}}tag(e){let t=this.rules.inline.tag.exec(e);if(t)return!this.lexer.state.inLink&&this.rules.other.startATag.test(t[0])?this.lexer.state.inLink=!0:this.lexer.state.inLink&&this.rules.other.endATag.test(t[0])&&(this.lexer.state.inLink=!1),!this.lexer.state.inRawBlock&&this.rules.other.startPreScriptTag.test(t[0])?this.lexer.state.inRawBlock=!0:this.lexer.state.inRawBlock&&this.rules.other.endPreScriptTag.test(t[0])&&(this.lexer.state.inRawBlock=!1),{type:`html`,raw:t[0],inLink:this.lexer.state.inLink,inRawBlock:this.lexer.state.inRawBlock,block:!1,text:t[0]}}link(e){let t=this.rules.inline.link.exec(e);if(t){let e=t[2].trim();if(!this.options.pedantic&&this.rules.other.startAngleBracket.test(e)){if(!this.rules.other.endAngleBracket.test(e))return;let t=zl(e.slice(0,-1),`\\`);if((e.length-t.length)%2==0)return}else{let e=Vl(t[2],`()`);if(e===-2)return;if(e>-1){let n=(t[0].indexOf(`!`)===0?5:4)+t[1].length+e;t[2]=t[2].substring(0,e),t[0]=t[0].substring(0,n).trim(),t[3]=``}}let n=t[2],r=``;if(this.options.pedantic){let e=this.rules.other.pedanticHrefTitle.exec(n);e&&(n=e[1],r=e[3])}else r=t[3]?t[3].slice(1,-1):``;return n=n.trim(),this.rules.other.startAngleBracket.test(n)&&(n=this.options.pedantic&&!this.rules.other.endAngleBracket.test(e)?n.slice(1):n.slice(1,-1)),Ul(t,{href:n&&n.replace(this.rules.inline.anyPunctuation,`$1`),title:r&&r.replace(this.rules.inline.anyPunctuation,`$1`)},t[0],this.lexer,this.rules)}}reflink(e,t){let n;if((n=this.rules.inline.reflink.exec(e))||(n=this.rules.inline.nolink.exec(e))){let e=t[(n[2]||n[1]).replace(this.rules.other.multipleSpaceGlobal,` `).toLowerCase()];if(!e){let e=n[0].charAt(0);return{type:`text`,raw:e,text:e}}return Ul(n,e,n[0],this.lexer,this.rules)}}emStrong(e,t,n=``){let r=this.rules.inline.emStrongLDelim.exec(e);if(!(!r||!r[1]&&!r[2]&&!r[3]&&!r[4]||r[4]&&n.match(this.rules.other.unicodeAlphaNumeric))&&(!(r[1]||r[3])||!n||this.rules.inline.punctuation.exec(n))){let i=[...r[0]].length-1,a,o,s=i,c=0,l=r[0][0],u=n===l,d=l===`*`?this.rules.inline.emStrongRDelimAst:this.rules.inline.emStrongRDelimUnd;for(d.lastIndex=0,t=t.slice(-1*e.length+i);(r=d.exec(t))!==null;){if(a=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!a)continue;if(o=[...a].length,r[3]||r[4]){s+=o;continue}if(r[5]||r[6]){if(i%3&&!((i+o)%3)){c+=o;continue}if(u)break}if(s-=o,s>0)continue;o=Math.min(o,o+s+c);let t=[...r[0]][0].length,n=e.slice(0,i+r.index+t+o);if(Math.min(i,o)%2){let e=n.slice(1,-1);return{type:`em`,raw:n,text:e,tokens:this.lexer.inlineTokens(e)}}let l=n.slice(2,-2);return{type:`strong`,raw:n,text:l,tokens:this.lexer.inlineTokens(l)}}}}codespan(e){let t=this.rules.inline.code.exec(e);if(t){let e=t[2].replace(this.rules.other.newLineCharGlobal,` `),n=this.rules.other.nonSpaceChar.test(e),r=this.rules.other.startingSpaceChar.test(e)&&this.rules.other.endingSpaceChar.test(e);return n&&r&&(e=e.substring(1,e.length-1)),{type:`codespan`,raw:t[0],text:e}}}br(e){let t=this.rules.inline.br.exec(e);if(t)return{type:`br`,raw:t[0]}}del(e,t,n=``){let r=this.rules.inline.delLDelim.exec(e);if(r&&(!r[1]||!n||this.rules.inline.punctuation.exec(n))){let n=[...r[0]].length-1,i,a,o=n,s=this.rules.inline.delRDelim;for(s.lastIndex=0,t=t.slice(-1*e.length+n);(r=s.exec(t))!==null;){if(i=r[1]||r[2]||r[3]||r[4]||r[5]||r[6],!i||(a=[...i].length,a!==n))continue;if(r[3]||r[4]){o+=a;continue}if(o-=a,o>0)continue;a=Math.min(a,a+o);let t=[...r[0]][0].length,s=e.slice(0,n+r.index+t+a),c=s.slice(n,-n);return{type:`del`,raw:s,text:c,tokens:this.lexer.inlineTokens(c)}}}}autolink(e){let t=this.rules.inline.autolink.exec(e);if(t){let e,n;return t[2]===`@`?(e=t[1],n=`mailto:`+e):(e=t[1],n=e),{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}url(e){let t;if(t=this.rules.inline.url.exec(e)){let e,n;if(t[2]===`@`)e=t[0],n=`mailto:`+e;else{let r;do r=t[0],t[0]=this.rules.inline._backpedal.exec(t[0])?.[0]??``;while(r!==t[0]);e=t[0],n=t[1]===`www.`?`http://`+t[0]:t[0]}return{type:`link`,raw:t[0],text:e,href:n,autolink:!0,tokens:[{type:`text`,raw:e,text:e}]}}}inlineText(e){let t=this.rules.inline.text.exec(e);if(t){let e=this.lexer.state.inRawBlock;return{type:`text`,raw:t[0],text:t[0],escaped:e}}}},Kl=class e{tokens;options;state;inlineQueue;tokenizer;constructor(e){this.tokens=[],this.tokens.links=Object.create(null),this.options=e||_c,this.options.tokenizer=this.options.tokenizer||new Gl,this.tokenizer=this.options.tokenizer,this.tokenizer.options=this.options,this.tokenizer.lexer=this,this.inlineQueue=[],this.state={inLink:!1,inRawBlock:!1,linkEmitted:!1,top:!0};let t={other:Sc,block:Ml.normal,inline:Nl.normal};this.options.pedantic?(t.block=Ml.pedantic,t.inline=Nl.pedantic):this.options.gfm&&(t.block=Ml.gfm,t.inline=this.options.breaks?Nl.breaks:Nl.gfm),this.tokenizer.rules=t}static get rules(){return{block:Ml,inline:Nl}}static lex(t,n){return new e(n).lex(t)}static lexInline(t,n){return new e(n).inlineTokens(t)}lex(e){e=e.replace(Sc.carriageReturn,`
`),this.blockTokens(e,this.tokens);for(let e=0;e<this.inlineQueue.length;e++){let t=this.inlineQueue[e];this.inlineTokens(t.src,t.tokens)}return this.inlineQueue=[],this.tokens}blockTokens(e,t=[],n=!1){this.tokenizer.lexer=this,this.options.pedantic&&(e=e.replace(Sc.tabCharGlobal,`    `).replace(Sc.spaceLine,``));let r=1/0;for(;e;){if(e.length<r)r=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}let i;if(this.options.extensions?.block?.some(n=>(i=n.call({lexer:this},e,t))?(e=e.substring(i.raw.length),t.push(i),!0):!1))continue;if(i=this.tokenizer.space(e)){e=e.substring(i.raw.length);let n=t.at(-1);i.raw.length===1&&n!==void 0?n.raw+=`
`:t.push(i);continue}if(i=this.tokenizer.code(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(i=this.tokenizer.fences(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.heading(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.hr(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.blockquote(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.list(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.html(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.def(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`paragraph`||n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.raw,this.inlineQueue.at(-1).src=n.text):this.tokens.links[i.tag]||(this.tokens.links[i.tag]={href:i.href,title:i.title},t.push(i));continue}if(i=this.tokenizer.table(e)){e=e.substring(i.raw.length),t.push(i);continue}if(i=this.tokenizer.lheading(e)){e=e.substring(i.raw.length),t.push(i);continue}let a=e;if(this.options.extensions?.startBlock){let t=1/0,n=e.slice(1),r;this.options.extensions.startBlock.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(a=e.substring(0,t+1))}if(this.state.top&&(i=this.tokenizer.paragraph(a))){let r=t.at(-1);n&&r?.type===`paragraph`?(r.raw+=(r.raw.endsWith(`
`)?``:`
`)+i.raw,r.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=r.text):t.push(i),n=a.length!==e.length,e=e.substring(i.raw.length);continue}if(i=this.tokenizer.text(e)){e=e.substring(i.raw.length);let n=t.at(-1);n?.type===`text`?(n.raw+=(n.raw.endsWith(`
`)?``:`
`)+i.raw,n.text+=`
`+i.text,this.inlineQueue.pop(),this.inlineQueue.at(-1).src=n.text):t.push(i);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return this.state.top=!0,t}inline(e,t=[]){return this.inlineQueue.push({src:e,tokens:t}),t}linkInText(e){if(!e.includes(`[`))return!1;let t=this.tokenizer.rules.inline.link;for(let n of e.matchAll(this.tokenizer.rules.inline.blockSkip))if(t.test(n[0])&&e.charAt(n.index-1)!==`!`)return!0;for(let t of e.matchAll(this.tokenizer.rules.inline.reflinkSearch)){let e=t[0],n=e.lastIndexOf(`[`);if(e.charAt(0)!==`!`&&Object.hasOwn(this.tokens.links,e.slice(n+1,-1))&&!(n>1&&this.linkInText(e.slice(1,n-1))))return!0}return!1}inlineTokens(e,t=[]){this.tokenizer.lexer=this;let n=e;if(this.tokens.links&&e.includes(`[`)){let e=this.tokenizer.rules.inline.reflinkSearch,t=n=>{let r=n.lastIndexOf(`[`);if(!Object.hasOwn(this.tokens.links,n.slice(r+1,-1)))return n;if(r>1&&n.charAt(0)!==`!`){let i=n.slice(1,r-1);if(this.linkInText(i))return`[`+i.replace(e,t)+`][`+`a`.repeat(n.length-r-2)+`]`}return`[`+`a`.repeat(n.length-2)+`]`};n=n.replace(e,t)}n=n.replace(this.tokenizer.rules.inline.anyPunctuation,e=>`+`.repeat(e.length)),n=n.replace(this.tokenizer.rules.inline.blockSkip,(e,t,n)=>{let r=n?n.length:0;return e.slice(0,r)+`[`+`a`.repeat(e.length-r-2)+`]`}),n=this.options.hooks?.emStrongMask?.call({lexer:this},n)??n;let r=!1,i=``,a=1/0;for(;e;){if(e.length<a)a=e.length;else{this.infiniteLoopError(e.charCodeAt(0));break}r||(i=``),r=!1;let o;if(this.options.extensions?.inline?.some(n=>(o=n.call({lexer:this},e,t))?(e=e.substring(o.raw.length),t.push(o),!0):!1))continue;if(o=this.tokenizer.escape(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.tag(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.link(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.reflink(e,this.tokens.links)){e=e.substring(o.raw.length);let n=t.at(-1);o.type===`text`&&n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(o=this.tokenizer.emStrong(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.codespan(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.br(e)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.del(e,n,i)){e=e.substring(o.raw.length),t.push(o);continue}if(o=this.tokenizer.autolink(e)){e=e.substring(o.raw.length),t.push(o);continue}if(!this.state.inLink&&(o=this.tokenizer.url(e))){e=e.substring(o.raw.length),t.push(o);continue}let s=e;if(this.options.extensions?.startInline){let t=1/0,n=e.slice(1),r;this.options.extensions.startInline.forEach(e=>{r=e.call({lexer:this},n),typeof r==`number`&&r>=0&&(t=Math.min(t,r))}),t<1/0&&t>=0&&(s=e.substring(0,t+1))}if(o=this.tokenizer.inlineText(s)){e=e.substring(o.raw.length),o.raw.slice(-1)!==`_`&&(i=o.raw.slice(-1)),r=!0;let n=t.at(-1);n?.type===`text`?(n.raw+=o.raw,n.text+=o.text):t.push(o);continue}if(e){this.infiniteLoopError(e.charCodeAt(0));break}}return t}infiniteLoopError(e){let t=`Infinite loop on byte: `+e;if(this.options.silent)console.error(t);else throw Error(t)}},ql=class{options;parser;constructor(e){this.options=e||_c}space(e){return``}code({text:e,lang:t,escaped:n}){let r=(t||``).match(Sc.notSpaceStart)?.[0],i=e?e.replace(Sc.endingNewline,``)+`
`:``;return r?`<pre><code class="language-`+Il(r)+`">`+(n?i:Il(i,!0))+`</code></pre>
`:`<pre><code>`+(n?i:Il(i,!0))+`</code></pre>
`}blockquote({tokens:e}){return`<blockquote>
${this.parser.parse(e)}</blockquote>
`}html({text:e}){return e}def(e){return``}heading({tokens:e,depth:t}){return`<h${t}>${this.parser.parseInline(e)}</h${t}>
`}hr(e){return`<hr>
`}list(e){let t=e.ordered,n=e.start,r=``;for(let t=0;t<e.items.length;t++){let n=e.items[t];r+=this.listitem(n)}let i=t?`ol`:`ul`,a=t&&n!==1?` start="`+n+`"`:``;return`<`+i+a+`>
`+r+`</`+i+`>
`}listitem(e){return`<li>${this.parser.parse(e.tokens)}</li>
`}checkbox({checked:e}){return`<input `+(e?`checked="" `:``)+`disabled="" type="checkbox"> `}paragraph({tokens:e}){return`<p>${this.parser.parseInline(e)}</p>
`}table(e){let t=``,n=``;for(let t=0;t<e.header.length;t++)n+=this.tablecell(e.header[t]);t+=this.tablerow({text:n});let r=``;for(let t=0;t<e.rows.length;t++){let i=e.rows[t];n=``;for(let e=0;e<i.length;e++)n+=this.tablecell(i[e]);r+=this.tablerow({text:n})}return r&&=`<tbody>${r}</tbody>`,`<table>
<thead>
`+t+`</thead>
`+r+`</table>
`}tablerow({text:e}){return`<tr>
${e}</tr>
`}tablecell(e){let t=this.parser.parseInline(e.tokens),n=e.header?`th`:`td`;return(e.align?`<${n} align="${e.align}">`:`<${n}>`)+t+`</${n}>
`}strong({tokens:e}){return`<strong>${this.parser.parseInline(e)}</strong>`}em({tokens:e}){return`<em>${this.parser.parseInline(e)}</em>`}codespan({text:e}){return`<code>${Il(e,!0)}</code>`}br(e){return`<br>`}del({tokens:e}){return`<del>${this.parser.parseInline(e)}</del>`}link({href:e,title:t,text:n,tokens:r,autolink:i}){let a=i?Il(n,!0):this.parser.parseInline(r),o=Ll(e);if(o===null)return a;e=Il(o,i);let s=`<a href="`+e+`"`;return t&&(s+=` title="`+Il(t)+`"`),s+=`>`+a+`</a>`,s}image({href:e,title:t,text:n,tokens:r}){r&&(n=this.parser.parseInline(r,this.parser.textRenderer));let i=Ll(e);if(i===null)return Il(n);e=i;let a=`<img src="${Il(e)}" alt="${Il(n)}"`;return t&&(a+=` title="${Il(t)}"`),a+=`>`,a}text(e){return`tokens`in e&&e.tokens?this.parser.parseInline(e.tokens):`escaped`in e&&e.escaped?e.text:Il(e.text)}},Jl=class{strong({text:e}){return e}em({text:e}){return e}codespan({text:e}){return e}del({text:e}){return e}html({text:e}){return e}text({text:e}){return e}link({text:e}){return``+e}image({text:e}){return``+e}br(){return``}checkbox({raw:e}){return e}},Yl=class e{options;renderer;textRenderer;constructor(e){this.options=e||_c,this.options.renderer=this.options.renderer||new ql,this.renderer=this.options.renderer,this.renderer.options=this.options,this.renderer.parser=this,this.textRenderer=new Jl}static parse(t,n){return new e(n).parse(t)}static parseInline(t,n){return new e(n).parseInline(t)}parse(e){this.renderer.parser=this;let t=``;for(let n=0;n<e.length;n++){let r=e[n];if(this.options.extensions?.renderers?.[r.type]){let e=r,n=this.options.extensions.renderers[e.type].call({parser:this},e);if(n!==!1||![`space`,`hr`,`heading`,`code`,`table`,`blockquote`,`list`,`checkbox`,`html`,`def`,`paragraph`,`text`].includes(e.type)){t+=n||``;continue}}let i=r;switch(i.type){case`space`:t+=this.renderer.space(i);break;case`hr`:t+=this.renderer.hr(i);break;case`heading`:t+=this.renderer.heading(i);break;case`code`:t+=this.renderer.code(i);break;case`table`:t+=this.renderer.table(i);break;case`blockquote`:t+=this.renderer.blockquote(i);break;case`list`:t+=this.renderer.list(i);break;case`checkbox`:t+=this.renderer.checkbox(i);break;case`html`:t+=this.renderer.html(i);break;case`def`:t+=this.renderer.def(i);break;case`paragraph`:t+=this.renderer.paragraph(i);break;case`text`:t+=this.renderer.text(i);break;default:{let e=`Token with "`+i.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return t}parseInline(e,t=this.renderer){this.renderer.parser=this;let n=``;for(let r=0;r<e.length;r++){let i=e[r];if(this.options.extensions?.renderers?.[i.type]){let e=this.options.extensions.renderers[i.type].call({parser:this},i);if(e!==!1||![`escape`,`html`,`link`,`image`,`checkbox`,`strong`,`em`,`codespan`,`br`,`del`,`text`].includes(i.type)){n+=e||``;continue}}let a=i;switch(a.type){case`escape`:n+=t.text(a);break;case`html`:n+=t.html(a);break;case`link`:n+=t.link(a);break;case`image`:n+=t.image(a);break;case`checkbox`:n+=t.checkbox(a);break;case`strong`:n+=t.strong(a);break;case`em`:n+=t.em(a);break;case`codespan`:n+=t.codespan(a);break;case`br`:n+=t.br(a);break;case`del`:n+=t.del(a);break;case`text`:n+=t.text(a);break;default:{let e=`Token with "`+a.type+`" type was not found.`;if(this.options.silent)return console.error(e),``;throw Error(e)}}}return n}},Xl=class{options;block;constructor(e){this.options=e||_c}static passThroughHooks=new Set([`preprocess`,`postprocess`,`processAllTokens`,`emStrongMask`]);static passThroughHooksRespectAsync=new Set([`preprocess`,`postprocess`,`processAllTokens`]);preprocess(e){return e}postprocess(e){return e}processAllTokens(e){return e}emStrongMask(e){return e}provideLexer(e=this.block){return e?Kl.lex:Kl.lexInline}provideParser(e=this.block){return e?Yl.parse:Yl.parseInline}},Zl=new class{defaults=gc();options=this.setOptions;parse=this.parseMarkdown(!0);parseInline=this.parseMarkdown(!1);Parser=Yl;Renderer=ql;TextRenderer=Jl;Lexer=Kl;Tokenizer=Gl;Hooks=Xl;constructor(...e){this.use(...e)}walkTokens(e,t){let n=[];for(let r of e)switch(n=n.concat(t.call(this,r)),r.type){case`table`:{let e=r;for(let r of e.header)n=n.concat(this.walkTokens(r.tokens,t));for(let r of e.rows)for(let e of r)n=n.concat(this.walkTokens(e.tokens,t));break}case`list`:{let e=r;n=n.concat(this.walkTokens(e.items,t));break}default:{let e=r;this.defaults.extensions?.childTokens?.[e.type]?this.defaults.extensions.childTokens[e.type].forEach(r=>{let i=e[r].flat(1/0);n=n.concat(this.walkTokens(i,t))}):e.tokens&&(n=n.concat(this.walkTokens(e.tokens,t)))}}return n}use(...e){let t=this.defaults.extensions||{renderers:{},childTokens:{}};return e.forEach(e=>{let n={...e};if(n.async=this.defaults.async||n.async||!1,e.extensions&&(e.extensions.forEach(e=>{if(!e.name)throw Error(`extension name required`);if(`renderer`in e){let n=t.renderers[e.name];n?t.renderers[e.name]=function(...t){let r=e.renderer.apply(this,t);return r===!1&&(r=n.apply(this,t)),r}:t.renderers[e.name]=e.renderer}if(`tokenizer`in e){if(!e.level||e.level!==`block`&&e.level!==`inline`)throw Error(`extension level must be 'block' or 'inline'`);let n=t[e.level];n?n.unshift(e.tokenizer):t[e.level]=[e.tokenizer],e.start&&(e.level===`block`?t.startBlock?t.startBlock.push(e.start):t.startBlock=[e.start]:e.level===`inline`&&(t.startInline?t.startInline.push(e.start):t.startInline=[e.start]))}`childTokens`in e&&e.childTokens&&(t.childTokens[e.name]=e.childTokens)}),n.extensions=t),e.renderer){let t=this.defaults.renderer||new ql(this.defaults);for(let n in e.renderer){if(!(n in t))throw Error(`renderer '${n}' does not exist`);if([`options`,`parser`].includes(n))continue;let r=n,i=e.renderer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n||``}}n.renderer=t}if(e.tokenizer){let t=this.defaults.tokenizer||new Gl(this.defaults);for(let n in e.tokenizer){if(!(n in t))throw Error(`tokenizer '${n}' does not exist`);if([`options`,`rules`,`lexer`].includes(n))continue;let r=n,i=e.tokenizer[r],a=t[r];t[r]=(...e)=>{let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.tokenizer=t}if(e.hooks){let t=this.defaults.hooks||new Xl;for(let n in e.hooks){if(!(n in t))throw Error(`hook '${n}' does not exist`);if([`options`,`block`].includes(n))continue;let r=n,i=e.hooks[r],a=t[r];t[r]=Xl.passThroughHooks.has(n)?e=>{if(this.defaults.async&&Xl.passThroughHooksRespectAsync.has(n))return(async()=>{let n=await i.call(t,e);return a.call(t,n)})();let r=i.call(t,e);return a.call(t,r)}:(...e)=>{if(this.defaults.async)return(async()=>{let n=await i.apply(t,e);return n===!1&&(n=await a.apply(t,e)),n})();let n=i.apply(t,e);return n===!1&&(n=a.apply(t,e)),n}}n.hooks=t}if(e.walkTokens){let t=this.defaults.walkTokens,r=e.walkTokens;n.walkTokens=function(e){let n=[];return n.push(r.call(this,e)),t&&(n=n.concat(t.call(this,e))),n}}this.defaults={...this.defaults,...n}}),this}setOptions(e){return this.defaults={...this.defaults,...e},this}lexer(e,t){return Kl.lex(e,t??this.defaults)}parser(e,t){return Yl.parse(e,t??this.defaults)}parseMarkdown(e){return(t,n)=>{let r={...n},i={...this.defaults,...r},a=this.onError(!!i.silent,!!i.async);if(this.defaults.async===!0&&r.async===!1)return a(Error(`marked(): The async option was set to true by an extension. Remove async: false from the parse options object to return a Promise.`));if(typeof t>`u`||t===null)return a(Error(`marked(): input parameter is undefined or null`));if(typeof t!=`string`)return a(Error(`marked(): input parameter is of type `+Object.prototype.toString.call(t)+`, string expected`));if(i.hooks&&(i.hooks.options=i,i.hooks.block=e),i.async)return(async()=>{let n=i.hooks?await i.hooks.preprocess(t):t,r=await(i.hooks?await i.hooks.provideLexer(e):e?Kl.lex:Kl.lexInline)(n,i),a=i.hooks?await i.hooks.processAllTokens(r):r;i.walkTokens&&await Promise.all(this.walkTokens(a,i.walkTokens));let o=await(i.hooks?await i.hooks.provideParser(e):e?Yl.parse:Yl.parseInline)(a,i);return i.hooks?await i.hooks.postprocess(o):o})().catch(a);try{i.hooks&&(t=i.hooks.preprocess(t));let n=(i.hooks?i.hooks.provideLexer(e):e?Kl.lex:Kl.lexInline)(t,i);i.hooks&&(n=i.hooks.processAllTokens(n)),i.walkTokens&&this.walkTokens(n,i.walkTokens);let r=(i.hooks?i.hooks.provideParser(e):e?Yl.parse:Yl.parseInline)(n,i);return i.hooks&&(r=i.hooks.postprocess(r)),r}catch(e){return a(e)}}}onError(e,t){return n=>{if(n.message+=`
Please report this to https://github.com/markedjs/marked.`,e){let e=`<p>An error occurred:</p><pre>`+Il(n.message+``,!0)+`</pre>`;return t?Promise.resolve(e):e}if(t)return Promise.reject(n);throw n}}};function Q(e,t){return Zl.parse(e,t)}Q.options=Q.setOptions=function(e){return Zl.setOptions(e),Q.defaults=Zl.defaults,vc(Q.defaults),Q},Q.getDefaults=gc,Q.defaults=_c;function Ql(...e){return Zl.use(...e),Q.defaults=Zl.defaults,vc(Q.defaults),Q}Q.use=Ql,Q.walkTokens=function(e,t){return Zl.walkTokens(e,t)},Q.parseInline=Zl.parseInline,Q.Parser=Yl,Q.parser=Yl.parse,Q.Renderer=ql,Q.TextRenderer=Jl,Q.Lexer=Kl,Q.lexer=Kl.lex,Q.Tokenizer=Gl,Q.Hooks=Xl,Q.parse=Q,Q.options,Q.setOptions,Q.walkTokens,Q.parseInline,Yl.parse,Kl.lex;var $l=Object.assign({"/src/content/en/about.md":ua,"/src/content/en/announcement.md":da,"/src/content/en/breakfast.md":fa,"/src/content/en/contact.md":pa,"/src/content/en/hero.md":ma,"/src/content/en/highlights-PartyAndCatering.md":ha,"/src/content/en/highlights-materials.md":ga,"/src/content/en/highlights-partners.md":_a,"/src/content/en/highlights-what-we-do.md":va,"/src/content/en/menu-2026-05-09.md":ya,"/src/content/en/menu-2026-05-10.md":ba,"/src/content/en/menu-2026-05-11.md":xa,"/src/content/en/menu-2026-05-12.md":Sa,"/src/content/en/menu-2026-05-13.md":Ca,"/src/content/en/menu-2026-05-18.md":wa,"/src/content/en/menu-2026-05-19.md":Ta,"/src/content/en/menu-2026-05-20.md":Ea,"/src/content/en/menu-2026-05-21.md":Da,"/src/content/en/menu-2026-05-22.md":Oa,"/src/content/en/menu-2026-05-25.md":ka,"/src/content/en/menu-2026-05-26.md":Aa,"/src/content/en/menu-2026-05-27.md":ja,"/src/content/en/menu-2026-05-28.md":Ma,"/src/content/en/menu-2026-05-29.md":Na,"/src/content/en/menu-2026-06---18-not-used.md":Pa,"/src/content/en/menu-2026-06-01.md":Fa,"/src/content/en/menu-2026-06-02.md":Ia,"/src/content/en/menu-2026-06-03.md":La,"/src/content/en/menu-2026-06-04.md":Ra,"/src/content/en/menu-2026-06-05.md":za,"/src/content/en/menu-2026-06-08.md":Ba,"/src/content/en/menu-2026-06-09.md":Va,"/src/content/en/menu-2026-06-10.md":Ha,"/src/content/en/menu-2026-06-11.md":Ua,"/src/content/en/menu-2026-06-12.md":Wa,"/src/content/en/menu-2026-06-15.md":Ga,"/src/content/en/menu-2026-06-16.md":Ka,"/src/content/en/menu-2026-06-17.md":qa,"/src/content/en/menu-2026-06-18.md":Ja,"/src/content/en/menu-2026-06-19.md":Ya,"/src/content/en/menu-2026-06-22.md":Xa,"/src/content/en/menu-2026-06-23.md":Za,"/src/content/en/menu-2026-06-24.md":Qa,"/src/content/en/menu-2026-06-25.md":$a,"/src/content/en/menu-2026-06-26.md":eo,"/src/content/en/menu-2026-06-29.md":to,"/src/content/en/menu-2026-06-30.md":no,"/src/content/en/menu-2026-07-01.md":ro,"/src/content/en/menu-2026-07-02.md":io,"/src/content/en/menu-2026-07-03.md":ao,"/src/content/en/menu-2026-07-06.md":oo,"/src/content/en/menu-2026-07-07.md":so,"/src/content/en/menu-2026-07-08.md":co,"/src/content/en/menu-2026-07-09.md":lo,"/src/content/en/menu-2026-07-10.md":uo,"/src/content/en/menu-2026-07-13.md":fo,"/src/content/en/menu-2026-07-14.md":po,"/src/content/en/menu-2026-07-15.md":mo,"/src/content/en/menu-2026-07-16.md":ho,"/src/content/en/menu-2026-07-17.md":go,"/src/content/en/menu-2026-08-17.md":_o,"/src/content/en/menu-2026-08-18.md":vo,"/src/content/en/menu-2026-08-19.md":yo,"/src/content/en/menu-2026-08-20.md":bo,"/src/content/en/menu-2026-08-21.md":xo,"/src/content/en/menu-2026-08-24.md":So,"/src/content/en/menu-2026-08-25.md":Co,"/src/content/en/menu-2026-08-26.md":wo,"/src/content/en/menu-2026-08-27.md":To,"/src/content/en/menu-2026-08-28.md":Eo,"/src/content/en/menu-2026-08-31.md":Do,"/src/content/en/menu-2026-09-01.md":Oo,"/src/content/en/menu-2026-09-02.md":ko,"/src/content/en/menu-2026-09-03.md":Ao,"/src/content/en/menu-2026-09-04.md":jo,"/src/content/en/menu-2026-09-07.md":Mo,"/src/content/en/menu-2026-09-08.md":No,"/src/content/en/menu-2026-09-09.md":Po,"/src/content/en/menu-2026-09-10.md":Fo,"/src/content/en/menu-2026-09-11.md":Io,"/src/content/en/menu-fixed.md":Lo,"/src/content/en/menu.md":Ro,"/src/content/en/openingHours.md":zo,"/src/content/en/ourServices.md":Bo,"/src/content/fr/about.md":Vo,"/src/content/fr/announcement.md":Ho,"/src/content/fr/breakfast.md":Uo,"/src/content/fr/contact.md":Wo,"/src/content/fr/hero.md":Go,"/src/content/fr/highlights-PartyAndCatering.md":Ko,"/src/content/fr/highlights-materials.md":qo,"/src/content/fr/highlights-partners.md":Jo,"/src/content/fr/highlights-what-we-do.md":Yo,"/src/content/fr/menu-2026-05-09.md":Xo,"/src/content/fr/menu-2026-05-10.md":Zo,"/src/content/fr/menu-2026-05-11.md":Qo,"/src/content/fr/menu-2026-05-12.md":$o,"/src/content/fr/menu-2026-05-13.md":es,"/src/content/fr/menu-2026-05-18.md":ts,"/src/content/fr/menu-2026-05-19.md":ns,"/src/content/fr/menu-2026-05-20.md":rs,"/src/content/fr/menu-2026-05-21.md":is,"/src/content/fr/menu-2026-05-22.md":as,"/src/content/fr/menu-2026-05-25.md":os,"/src/content/fr/menu-2026-05-26.md":ss,"/src/content/fr/menu-2026-05-27.md":cs,"/src/content/fr/menu-2026-05-28.md":ls,"/src/content/fr/menu-2026-05-29.md":us,"/src/content/fr/menu-2026-06---18-not-used.md":ds,"/src/content/fr/menu-2026-06-01.md":fs,"/src/content/fr/menu-2026-06-02.md":ps,"/src/content/fr/menu-2026-06-03.md":ms,"/src/content/fr/menu-2026-06-04.md":hs,"/src/content/fr/menu-2026-06-05.md":gs,"/src/content/fr/menu-2026-06-08.md":_s,"/src/content/fr/menu-2026-06-09.md":vs,"/src/content/fr/menu-2026-06-10.md":ys,"/src/content/fr/menu-2026-06-11.md":bs,"/src/content/fr/menu-2026-06-12.md":xs,"/src/content/fr/menu-2026-06-15.md":Ss,"/src/content/fr/menu-2026-06-16.md":Cs,"/src/content/fr/menu-2026-06-17.md":ws,"/src/content/fr/menu-2026-06-18.md":Ts,"/src/content/fr/menu-2026-06-19.md":Es,"/src/content/fr/menu-2026-06-22.md":Ds,"/src/content/fr/menu-2026-06-23.md":Os,"/src/content/fr/menu-2026-06-24.md":ks,"/src/content/fr/menu-2026-06-25.md":As,"/src/content/fr/menu-2026-06-26.md":js,"/src/content/fr/menu-2026-06-29.md":Ms,"/src/content/fr/menu-2026-06-30.md":Ns,"/src/content/fr/menu-2026-07-01.md":Ps,"/src/content/fr/menu-2026-07-02.md":Fs,"/src/content/fr/menu-2026-07-03.md":Is,"/src/content/fr/menu-2026-07-06.md":Ls,"/src/content/fr/menu-2026-07-07.md":Rs,"/src/content/fr/menu-2026-07-08.md":zs,"/src/content/fr/menu-2026-07-09.md":Bs,"/src/content/fr/menu-2026-07-10.md":Vs,"/src/content/fr/menu-2026-07-13.md":Hs,"/src/content/fr/menu-2026-07-14.md":Us,"/src/content/fr/menu-2026-07-15.md":Ws,"/src/content/fr/menu-2026-07-16.md":Gs,"/src/content/fr/menu-2026-07-17.md":Ks,"/src/content/fr/menu-2026-08-17.md":qs,"/src/content/fr/menu-2026-08-18.md":Js,"/src/content/fr/menu-2026-08-19.md":Ys,"/src/content/fr/menu-2026-08-20.md":Xs,"/src/content/fr/menu-2026-08-21.md":Zs,"/src/content/fr/menu-2026-08-24.md":Qs,"/src/content/fr/menu-2026-08-25.md":$s,"/src/content/fr/menu-2026-08-26.md":ec,"/src/content/fr/menu-2026-08-27.md":tc,"/src/content/fr/menu-2026-08-28.md":nc,"/src/content/fr/menu-2026-08-31.md":rc,"/src/content/fr/menu-2026-09-01.md":ic,"/src/content/fr/menu-2026-09-02.md":ac,"/src/content/fr/menu-2026-09-03.md":oc,"/src/content/fr/menu-2026-09-04.md":sc,"/src/content/fr/menu-2026-09-07.md":cc,"/src/content/fr/menu-2026-09-08.md":lc,"/src/content/fr/menu-2026-09-09.md":uc,"/src/content/fr/menu-2026-09-10.md":dc,"/src/content/fr/menu-2026-09-11.md":fc,"/src/content/fr/menu-fixed.md":pc,"/src/content/fr/menu.md":mc,"/src/content/fr/openingHours.md":hc});async function eu(e,t){let n=$l[`/src/content/${e}/${t}.md`];return n?Q(n):`<p>Error loading content (404)</p>`}var tu=`/assets/cafe-photo-v5lvKbvt.webp`,nu=G(`<div></div>`);function ru(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(``);Ki(async()=>{P(a,await eu(n(),`openingHours`))}),zn(()=>(n(),eu),()=>{n()&&eu(n(),`openingHours`).then(e=>P(a,e))}),Bn(),Ui();var o=nu();mi(o,()=>V(a),!0),k(o),K(e,o),Ze(),i()}var iu=G(`<section id="home" class="hero min-h-fit"><div class="hero-content flex-col lg:flex-row-reverse gap-8 px-4 w-full max-w-6xl"><img alt="Cafe background" class="max-w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl rounded-3xl shadow-2xl object-cover transition-transform duration-700 hover:scale-[1.02]"/> <div class="text-left flex-1"><div class="prose prose-lg lg:prose-xl"></div> <!> <!></div></div></section>`);function au(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(``);Ki(async()=>{P(a,await eu(n(),`hero`))}),zn(()=>(n(),eu),()=>{n()&&eu(n(),`hero`).then(e=>P(a,e))}),Bn(),Ui();var o=iu(),s=F(o),c=F(s),l=L(c,2),u=F(l);mi(u,()=>V(a),!0),k(u);var d=L(u,2);ru(d,{}),J(L(d,2),e=>{}),k(l),k(s),k(o),R(()=>Ni(c,`src`,tu)),K(e,o),Ze(),i()}var ou=`/assets/2026-09-07-BFVufTwR.jpeg`,su=`/assets/2026-09-08-CUjzlz9t.jpeg`,cu=`/assets/2026-09-09-12jMxj1M.jpeg`,lu=`/assets/2026-09-10-DBFt-asl.jpeg`,uu=`/assets/2026-09-11-BXErG3vw.jpeg`;function du(e){let t=new Intl.DateTimeFormat(`en-US`,{timeZone:`Europe/Zurich`,year:`numeric`,month:`2-digit`,day:`2-digit`}).formatToParts(e),n={};for(let e of t)n[e.type]=e.value;return`${n.year}-${n.month}-${n.day}`}async function fu(){try{let e=(await fetch(window.location.href,{method:`HEAD`,cache:`no-store`})).headers.get(`Date`);if(e)return new Date(e)}catch(e){console.warn(`Failed to fetch server date, falling back to local client time:`,e)}return new Date}var pu=G(`<h2 class="text-4xl md:text-5xl font-bold text-center mb-12"> </h2>`);function mu(e,t){let n=Gi(t,`title`,8,``);var r=pu(),i=I(r,!0);R(()=>q(i,n())),K(e,r)}var hu=G(`<button> </button>`),gu=G(`<div class="flex flex-wrap justify-center gap-2 mb-2"></div>`),_u=G(`<div class="alert alert-info border-primary/50 bg-base-100"><span> </span></div>`),vu=G(`<p class="p-4"> </p>`),yu=G(`<iframe class="pamphlet-pdf svelte-1qo109d"></iframe>`),bu=G(`<img class="block h-auto w-full svelte-1qo109d"/>`),xu=G(`<div class="pamphlet-card overflow-hidden rounded-xl border border-primary/20 bg-base-100 shadow-lg svelte-1qo109d"><!> <div class="pamphlet-actions p-3 text-center svelte-1qo109d"><a class="btn btn-sm btn-outline" target="_blank" rel="noopener noreferrer"> </a></div></div>`),Su=G(`<section id="menu"><div><div class="menu-header svelte-1qo109d"><!> <div class="flex justify-center gap-4 mb-8"><button> </button> <button> </button></div> <!></div> <div class="pamphlet-content min-h-[300px] space-y-6 svelte-1qo109d" aria-live="polite"><!> <!></div></div></section>`);function Cu(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(),o=N(),s=N(),c=N(),l=Object.assign({"/src/content/menu/2026-09-07.jpeg":ou,"/src/content/menu/2026-09-08.jpeg":su,"/src/content/menu/2026-09-09.jpeg":cu,"/src/content/menu/2026-09-10.jpeg":lu,"/src/content/menu/2026-09-11.jpeg":uu}),u=Gi(t,`tvMode`,8,!1),d=N(`lunchDinner`),f=N([]),p=N([]);function m(e,t){for(let n of[`pdf`,`png`,`jpg`,`jpeg`,`webp`]){let r=l[`/src/content/${e}/${t}.${n}`];if(r)return{url:r,isPdf:n===`pdf`}}let n=t.replace(/^menu-(?=\d{4}-\d{2}-\d{2}$)/,``);for(let e of new Set([t,n]))for(let t of[`pdf`,`png`,`jpg`,`jpeg`,`webp`]){let n=l[`/src/content/menu/${e}.${t}`];if(n)return{url:n,isPdf:t===`pdf`}}return null}let h=du(new Date),g=N(h);function _(e){let[t,n,r]=du(e).split(`-`).map(Number);return Array.from({length:7},(e,i)=>{let a=new Date(Date.UTC(t,n-1,r+i,12,0,0));return{iso:du(a),raw:a}})}let v=N(_(new Date));async function y(){let e=await fu();h=du(e),P(g,h),P(v,_(e))}function b(e,t){P(f,t.filter(t=>m(e,`menu-${t.iso}`))),!V(f).length&&m(e,`menu`)&&P(f,[{iso:`default`,raw:new Date}]),V(f).some(e=>e.iso===V(g))||P(g,V(f)[0]?.iso??``)}function x(e,t){if(du(e)===h)return X(`menu.today`,t);let n=t===`fr`?`fr-CH`:`en-US`;return new Intl.DateTimeFormat(n,{weekday:`short`,day:`numeric`,month:`short`,timeZone:`Europe/Zurich`}).format(e)}Ki(()=>{y()}),zn(()=>(n(),V(v)),()=>{b(n(),V(v))}),zn(()=>(n(),U(u()),V(d),V(g)),()=>{P(a,m(n(),!u()&&V(d)===`breakfast`?`breakfast`:V(g)==="default"?`menu`:`menu-${V(g)}`))}),zn(()=>(U(u()),V(d),n()),()=>{P(o,!u()&&V(d)===`lunchDinner`?m(n(),`menu-fixed`):null)}),zn(()=>(V(a),V(o)),()=>{P(s,[V(a),V(o)].filter(Boolean))}),zn(()=>n(),()=>{P(c,n()===`fr`?`Ouvrir le menu`:`Open menu`)}),Bn(),Ui();var S=Su();let ee;var C=F(S),te=F(C),w=F(te);{let e=At(()=>(U(X),n(),H(()=>X(`nav.menu`,n()))));mu(w,{get title(){return V(e)}})}var ne=L(w,2),re=F(ne),ie=I(re,!0),ae=L(re,2),oe=I(ae,!0);k(ne);var se=L(ne,2),T=e=>{var t=gu();ci(t,5,()=>V(f),ii,(e,t)=>{var r=hu(),i=I(r,!0);R(e=>{Y(r,1,`btn btn-sm md:btn-md transition-all duration-300 ${V(g),V(t),H(()=>V(g)===V(t).iso?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`)??``}`),q(i,e)},[()=>(V(t),n(),H(()=>x(V(t).raw,n())))]),W(`click`,r,()=>P(g,V(t).iso)),K(e,r)}),k(t),K(e,t)};J(se,e=>{V(d),V(f),V(g),H(()=>V(d)===`lunchDinner`&&V(f).length>0&&V(g)!=="default")&&e(T)}),k(te);var ce=L(te,2),le=F(ce),ue=e=>{var t=_u(),r=I(F(t),!0);k(t),R(e=>q(r,e),[()=>(U(X),n(),H(()=>X(`menu.notAvailable`,n())))]),K(e,t)};J(le,e=>{V(a)||e(ue)}),ci(L(le,2),1,()=>V(s),e=>e.url,(e,t)=>{var r=xu(),i=F(r),a=e=>{var t=vu(),r=I(t,!0);R(e=>q(r,e),[()=>(U(X),n(),H(()=>X(`menu.notAvailable`,n())))]),K(e,t)},o=kt(()=>(V(p),V(t),H(()=>V(p).includes(V(t).url)))),s=e=>{var r=yu();R(e=>{Ni(r,`src`,(V(t),H(()=>V(t).url))),Ni(r,`title`,e)},[()=>(U(X),n(),H(()=>X(`nav.menu`,n())))]),W(`error`,r,()=>P(p,[...V(p),V(t).url])),K(e,r)},l=e=>{var r=bu();R(e=>{Ni(r,`src`,(V(t),H(()=>V(t).url))),Ni(r,`alt`,e)},[()=>(U(X),n(),H(()=>X(`nav.menu`,n())))]),W(`error`,r,()=>P(p,[...V(p),V(t).url])),K(e,r)};J(i,e=>{V(o)?e(a):(V(t),H(()=>V(t).isPdf)?e(s,1):e(l,-1))});var u=L(i,2),d=F(u),f=I(d,!0);k(u),k(r),R(()=>{Ni(d,`href`,(V(t),H(()=>V(t).url))),q(f,V(c))}),K(e,r)}),k(ce),k(C),k(S),R((e,t)=>{ee=Y(S,1,`py-20 px-4 svelte-1qo109d`,null,ee,{"tv-menu":u()}),Y(C,1,yi(u()?`tv-frame`:`max-w-4xl mx-auto`),`svelte-1qo109d`),Y(re,1,`btn btn-sm md:btn-md transition-all duration-300 ${V(d)===`breakfast`?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`}`),q(ie,e),Y(ae,1,`btn btn-sm md:btn-md transition-all duration-300 ${V(d)===`lunchDinner`?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`}`),q(oe,t)},[()=>(U(X),n(),H(()=>X(`menu.breakfast`,n()))),()=>(U(X),n(),H(()=>X(`menu.lunchDinner`,n())))]),W(`click`,re,()=>P(d,`breakfast`)),W(`click`,ae,()=>P(d,`lunchDinner`)),K(e,S),Ze(),i()}var wu=`/assets/dia-chef-pic-D6G6pAyG.webp`,Tu=G(`<section id="about" class="py-20 px-4"><div class="max-w-4xl mx-auto"><!> <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12"><div class="flex-shrink-0"><img alt="Chef Dia Patel" class="w-full md:w-80 h-auto rounded-xl shadow-lg transition-transform hover:scale-105"/></div> <div class="prose prose-lg"></div></div></div></section>`);function Eu(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(``);Ki(async()=>{P(a,await eu(n(),`about`))}),zn(()=>(n(),eu),()=>{n()&&eu(n(),`about`).then(e=>P(a,e))}),Bn(),Ui();var o=Tu(),s=F(o),c=F(s);{let e=At(()=>(U(X),n(),H(()=>X(`nav.about`,n()))));mu(c,{get title(){return V(e)}})}var l=L(c,2),u=F(l),d=I(u),f=L(u,2);mi(f,()=>V(a),!0),k(f),k(l),k(s),k(o),R(()=>Ni(d,`src`,wu)),K(e,o),Ze(),i()}var Du=G(`<button> </button>`),Ou=G(`<div class="flex flex-wrap justify-center gap-2 mb-12"></div>`),ku=G(`<div class="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-base-100/50 backdrop-blur-sm z-10 rounded-3xl"><span class="loading loading-spinner loading-lg text-primary"></span></div>`),Au=G(`<p class="text-center opacity-50 italic py-12"> </p>`),ju=G(`<section id="highlights" class="py-20 px-4"><div class="max-w-4xl mx-auto"><!> <!> <div class="relative min-h-[300px] bg-base-300 p-8 rounded-3xl shadow-inner border border-primary/50"><!> <div><!></div></div></div></section>`);function Mu(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(!0),o=N(``),s=N([]),c=N(``),l=Object.assign({"/src/content/en/highlights-PartyAndCatering.md":ha,"/src/content/en/highlights-materials.md":ga,"/src/content/en/highlights-partners.md":_a,"/src/content/en/highlights-what-we-do.md":va,"/src/content/fr/highlights-PartyAndCatering.md":Ko,"/src/content/fr/highlights-materials.md":qo,"/src/content/fr/highlights-partners.md":Jo,"/src/content/fr/highlights-what-we-do.md":Yo});function u(e){P(a,!0);let t=[],n=`/src/content/${e}/highlights-`;Object.entries(l).forEach(([e,r])=>{if(e.startsWith(n)){let i=e.replace(n,``).replace(`.md`,``);if(!d(r))return;let a=r.match(/<!--\s*tab:\s*(.*?)\s*-->/),o=a?a[1]:i.replace(/-/g,` `);t.push({id:i,label:o,rawContent:r})}}),P(s,t.sort((e,t)=>e.id.localeCompare(t.id))),V(s).length>0?(!V(o)||!V(s).find(e=>e.id===V(o)))&&P(o,V(s)[0].id):P(o,``),f(),P(a,!1)}function d(e){let t=e.match(/<!--\s*show:\s*(true|false)\s*-->/i);return!t||t[1].toLowerCase()!==`false`}function f(){let e=V(s).find(e=>e.id===V(o));if(e){let t=e.rawContent.replace(/<!--\s*tab:.*?\s*-->/,``);P(c,Q(t))}else P(c,``)}Ki(()=>{u(n())}),zn(()=>n(),()=>{n()&&u(n())}),zn(()=>V(o),()=>{V(o)&&f()}),Bn(),Ui();var p=ju(),m=F(p),h=F(m);{let e=At(()=>(U(X),n(),H(()=>X(`nav.highlights`,n()))));mu(h,{get title(){return V(e)}})}var g=L(h,2),_=e=>{var t=Ou();ci(t,5,()=>V(s),ii,(e,t)=>{var n=Du(),r=I(n,!0);R(()=>{Y(n,1,`btn btn-sm md:btn-md transition-all duration-300 ${V(o),V(t),H(()=>V(o)===V(t).id?`btn-primary shadow-primary scale-105`:`btn-ghost border-primary/50 hover:border-primary`)??``}`),q(r,(V(t),H(()=>V(t).label)))}),W(`click`,n,()=>P(o,V(t).id)),K(e,n)}),k(t),K(e,t)};J(g,e=>{V(s),H(()=>V(s).length>0)&&e(_)});var v=L(g,2),y=F(v),b=e=>{K(e,ku())};J(y,e=>{V(a)&&e(b)});var x=L(y,2),S=F(x),ee=e=>{var t=Jr();mi(Sn(t),()=>V(c)),K(e,t)},C=e=>{var t=Au(),r=I(t);R(()=>q(r,`No highlight files found in src/content/${n()??``}/highlights-*.md`)),K(e,t)};J(S,e=>{V(s),H(()=>V(s).length>0)?e(ee):e(C,-1)}),k(x),k(v),k(m),k(p),R(()=>Y(x,1,`prose prose-lg max-w-none transition-opacity duration-300 ${V(a)?`opacity-20`:`opacity-100`}`)),K(e,p),Ze(),i()}var Nu=ut(!1),Pu=`https://your-worker.workers.dev`;async function Fu(e){return await fetch(`${Pu}/api/reservations`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify(e)})}async function Iu(e){let t=await fetch(`${Pu}/api/reservations/${e}`);return t.ok?await t.json():null}async function Lu(e,t){return await fetch(`${Pu}/api/reservations/${e}`,{method:`PATCH`,headers:{"Content-Type":`application/json`},body:JSON.stringify(t)})}var $={reservation:{openHours:{start:`08:00`,end:`20:00`},partySize:{min:1,max:20},phoneLength:{min:6,max:20},slotDurationMinutes:60,types:[{id:`standard`,labelKey:`reservation.standard`},{id:`takeaway`,labelKey:`reservation.takeaway`},{id:`private`,labelKey:`reservation.private`},{id:`special_takeaway`,labelKey:`reservation.specialDishPickup`}]}},Ru=G(`<button type="button"> </button>`),zu=G(`<option disabled="" selected=""> </option>`),Bu=G(`<option> </option>`),Vu=G(`<option disabled="" selected=""> </option> <!>`,1),Hu=G(`<div class="card bg-base-100 shadow-md"><div class="card-body"><h3 class="card-title"> </h3> <div class="prose"></div></div></div>`),Uu=G(`<div class="form-control"><label class="label"><span class="label-text"> </span></label> <select class="select select-bordered w-full focus:border-primary" required=""><!></select></div> <!>`,1),Wu=G(`<label class="label"><span class="label-text-alt text-error"> </span></label>`),Gu=G(`<span class="label-text-alt text-error"> </span>`),Ku=G(`<div class="alert alert-error mb-4 shadow-lg border-error/20 bg-base-100 svelte-5i288w"><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 svelte-5i288w" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span class="whitespace-pre-wrap"> </span></div>`),qu=G(`<span class="loading loading-spinner"></span>`),Ju=G(`<button type="button" class="btn btn-outline btn-error w-full"><!> </button>`),Yu=G(`<form class="space-y-4"><div class="form-control"><label class="label"><span class="label-text"> </span></label> <div class="grid grid-cols-2 md:grid-cols-4 gap-2 w-full"></div></div> <div class="form-control svelte-5i288w"><label class="label svelte-5i288w"><span class="label-text"> </span></label> <input type="text" class="input input-bordered w-full focus:border-primary svelte-5i288w" required=""/></div> <!> <div class="form-control svelte-5i288w"><label class="label svelte-5i288w"><span class="label-text"> </span></label> <input type="email" required=""/> <!></div> <div class="form-control svelte-5i288w"><label class="label svelte-5i288w"><span class="label-text"> </span></label> <input type="tel" required=""/> <label class="label"><span class="label-text-alt opacity-70"> </span> <!></label></div> <div class="grid grid-cols-2 gap-4"><div class="form-control svelte-5i288w"><label class="label svelte-5i288w"><span class="label-text"> </span></label> <input type="date" required=""/> <!></div> <div class="form-control svelte-5i288w"><label class="label svelte-5i288w"><span class="label-text"> </span></label> <input type="time" required=""/> <label class="label"><span class="label-text-alt opacity-70"> </span> <!></label></div></div> <div class="form-control"><label class="label"><span class="label-text"> </span></label> <select class="select select-bordered w-full focus:border-primary"></select></div> <div class="form-control"><label class="label"><span class="label-text"> </span></label> <textarea class="textarea textarea-bordered w-full h-24 focus:border-primary"></textarea></div> <div class="flex flex-col gap-2 pt-4"><!> <button type="submit" class="btn btn-primary w-full shadow-lg"><!> </button> <!></div></form>`),Xu=G(`<div class="flex flex-col gap-4 items-center"><div><svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 svelte-5i288w" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span> </span></div> <button class="btn btn-primary w-full"> </button></div>`),Zu=G(`<section id="reservation" class="py-20 px-4" translate="no"><div class="max-w-md mx-auto"><!> <!></div></section>`);function Qu(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(null),o=N(`standard`),s=N(``),c=N(``),l=N(``),u=N(``),d=N(``),f=N(`2`),p=N(``),m=N(!1),h=N(!1),g=N(!1),_=N(!0),v=N(``),y=N(``),b=N(``),x=N(``),S=N(``),ee=N(``),C=N([]),te=N(``),w=N(null);async function ne(){try{let e=await fetch(`${Pu}/api/special-dishes`);if(e.ok){let t=await e.json();P(C,t.data)}else console.error(`Failed to fetch special dishes:`,e.statusText)}catch(e){console.error(`Error fetching special dishes:`,e)}}Ki(async()=>{await ne();let e=new URLSearchParams(window.location.search).get(`id`);if(e){P(a,e),P(m,!0);try{let t=await Iu(e);t?(P(o,t.type||`standard`),P(s,t.name||``),P(c,t.email||``),P(l,t.phone||``),P(u,t.date||``),P(d,t.start_time||t.time||``),P(f,String(t.party_size||t.guests||`2`)),P(p,t.notes||t.message||``),P(te,t.special_dish_id||``)):(P(y,X(`reservation.errors.LOAD_FAILED`,n())),P(a,null))}catch{P(y,X(`reservation.errors.GENERIC`,n())),P(a,null)}finally{P(m,!1)}}});async function re(){let e=n()===`fr`?`Êtes-vous sûr de vouloir annuler ?`:`Are you sure you want to cancel?`;if(confirm(e)){P(m,!0),P(y,``);try{let e=await Lu(V(a),{status:`cancelled`}),t=await e.json();e.ok?(P(h,!0),P(_,!1),P(g,!!t.warning),P(v,t.warning||X(`reservation.cancelSuccess`,n())),P(a,null),ie()):P(y,t.message||t.error||X(`reservation.errors.PROCESS_FAILED`,n()))}catch{P(y,X(`reservation.errors.GENERIC`,n()))}finally{P(m,!1)}}}function ie(){P(s,P(c,P(l,P(u,P(d,P(p,``)))))),P(o,`standard`),P(f,`2`),P(b,P(x,P(S,P(ee,``)))),P(te,``),P(w,null)}async function ae(){P(m,!0),P(y,``),P(h,!1),P(g,!1),P(b,P(x,P(S,P(ee,``))));let e=!1;/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(V(c))||(P(b,X(`reservation.errors.INVALID_EMAIL_FORMAT`,n())),e=!0);let t=V(l).replace(/[\s\-\(\)\+]/g,``);(!/^\d+$/.test(t)||t.length<$.reservation.phoneLength.min||t.length>$.reservation.phoneLength.max)&&(P(x,X(`reservation.errors.INVALID_PHONE_FORMAT`,n())),e=!0);let r=new Date().toLocaleDateString(`en-CA`,{timeZone:`Europe/Zurich`});if(V(u)<r&&(P(S,X(`reservation.errors.INVALID_DATE_PAST`,n())),e=!0),(V(d)<$.reservation.openHours.start||V(d)>$.reservation.openHours.end)&&(P(ee,X(`reservation.errors.INVALID_TIME_RANGE`,n()).replace(`{start}`,$.reservation.openHours.start).replace(`{end}`,$.reservation.openHours.end)),e=!0),V(o)===`special_takeaway`&&!V(te)&&(P(y,X(`reservation.errors.SPECIAL_DISH_NOT_SELECTED`,n())),e=!0),e){P(m,!1),document.querySelector(`.alert-error`)?.scrollIntoView({behavior:`smooth`});return}let i={type:V(o),name:V(s),email:V(c),phone:V(l),date:V(u),start_time:V(d),party_size:Number(V(f)),notes:V(p),language:n(),...V(o)===`special_takeaway`&&{special_dish_id:V(te)}};try{let e;e=V(a)?await Lu(V(a),i):await Fu(i);let t=await e.json();if(e.ok)P(h,!0),P(_,!1),P(g,!!t.warning),t.warning===`EMAIL_SEND_ERROR`?(P(h,!0),P(g,!0),P(v,X(`reservation.errors.EMAIL_SEND_ERROR`,n()))):t.warning?P(v,t.warning):P(v,V(a)?X(`reservation.updateSuccess`,n()):X(`reservation.success`,n())),V(a)||ie();else{let e=`reservation.errors.${t.error||`PROCESS_FAILED`}`;P(y,X(e,n()))}}catch{P(y,X(`reservation.errors.CONNECTION_FAILED`,n()))}finally{P(m,!1)}}zn(()=>(V(m),V(h),V(y)),()=>{Nu.set(V(m)||V(h)||V(y)!==``)}),zn(()=>(V(te),V(C)),()=>{V(te)&&V(C).length>0?P(w,V(C).find(e=>e.id===V(te))):P(w,null)}),Bn(),Ui();var oe=Zu(),se=F(oe),T=F(se);{let e=At(()=>(V(a),U(X),n(),H(()=>V(a)?X(`reservation.manageTitle`,n()):X(`reservation.title`,n()))));mu(T,{get title(){return V(e)}})}var ce=L(T,2),le=e=>{var t=Yu(),r=F(t),i=F(r),h=I(F(i),!0);k(i);var g=L(i,2);ci(g,5,()=>(U($),H(()=>$.reservation.types)),ii,(e,t)=>{var r=Ru(),i=I(r,!0);R(e=>{Y(r,1,`px-4 py-3 rounded-lg border text-sm font-medium transition-all text-center
        ${V(o),V(t),H(()=>V(o)===V(t).id?`border-primary bg-primary/10 text-primary ring-2 ring-primary/20`:`border-base-300 bg-base-100 text-base-content hover:bg-base-200`)??``}`),q(i,e)},[()=>(U(X),V(t),n(),H(()=>X(V(t).labelKey,n())))]),W(`click`,r,()=>{P(o,V(t).id),P(te,``)}),K(e,r)}),k(g),k(r);var _=L(r,2),v=F(_),ne=I(F(v),!0);k(v);var ie=L(v,2);Mi(ie),k(_);var oe=L(_,2),se=e=>{var t=Uu(),r=Sn(t),i=F(r),a=I(F(i),!0);k(i);var o=L(i,2),s=F(o),c=e=>{var t=zu(),r=I(t,!0);t.value=t.__value=``,R(e=>q(r,e),[()=>(U(X),n(),H(()=>X(`reservation.noSpecialDishesAvailable`,n())))]),K(e,t)},l=e=>{var t=Vu(),r=Sn(t),i=I(r);r.value=r.__value=``,ci(L(r,2),1,()=>V(C),e=>e.id,(e,t)=>{var n=Bu(),r=I(n,!0),i={};R(()=>{q(r,(V(t),H(()=>V(t).name))),i!==(i=(V(t),H(()=>V(t).id)))&&(n.value=(n.__value=i)??``)}),K(e,n)}),R(e=>q(i,`-- ${e??``} --`),[()=>(U(X),n(),H(()=>X(`reservation.selectSpecialDish`,n())))]),K(e,t)};J(s,e=>{V(C),H(()=>V(C).length===0)?e(c):e(l,-1)}),k(o),Ti(o),k(r);var u=L(r,2),d=e=>{var t=Hu(),n=F(t),r=F(n),i=I(r,!0),a=L(r,2);k(n),k(t),R(()=>q(i,(V(w),H(()=>V(w).name)))),W(`mount`,a,e=>e.target.innerHTML=Q(V(w).description)),K(e,t)};J(u,e=>{V(w),H(()=>V(w)&&V(w).description)&&e(d)}),R(e=>q(a,e),[()=>(U(X),n(),H(()=>X(`reservation.selectSpecialDish`,n())))]),Ei(o,()=>V(te),e=>P(te,e)),K(e,t)};J(oe,e=>{V(o)===`special_takeaway`&&e(se)});var T=L(oe,2),ce=F(T),le=I(F(ce),!0);k(ce);var ue=L(ce,2);Mi(ue);var de=L(ue,2),fe=e=>{var t=Wu(),n=I(F(t),!0);k(t),R(()=>q(n,V(b))),K(e,t)};J(de,e=>{V(b)&&e(fe)}),k(T);var pe=L(T,2),me=F(pe),he=I(F(me),!0);k(me);var ge=L(me,2);Mi(ge);var _e=L(ge,2),ve=F(_e),E=I(ve,!0),ye=L(ve,2),be=e=>{var t=Gu(),n=I(t,!0);R(()=>q(n,V(x))),K(e,t)};J(ye,e=>{V(x)&&e(be)}),k(_e),k(pe);var xe=L(pe,2),Se=F(xe),Ce=F(Se),we=I(F(Ce),!0);k(Ce);var Te=L(Ce,2);Mi(Te);var D=L(Te,2),Ee=e=>{var t=Wu(),n=I(F(t),!0);k(t),R(()=>q(n,V(S))),K(e,t)};J(D,e=>{V(S)&&e(Ee)}),k(Se);var O=L(Se,2),De=F(O),Oe=I(F(De),!0);k(De);var ke=L(De,2);Mi(ke);var Ae=L(ke,2),je=F(Ae),Me=I(je),Ne=L(je,2),Pe=e=>{var t=Gu(),n=I(t,!0);R(()=>q(n,V(ee))),K(e,t)};J(Ne,e=>{V(ee)&&e(Pe)}),k(Ae),k(O),k(xe);var Fe=L(xe,2),Ie=F(Fe),Le=I(F(Ie),!0);k(Ie);var Re=L(Ie,2);ci(Re,5,()=>(U($),H(()=>Array.from({length:$.reservation.partySize.max},(e,t)=>t+1))),ii,(e,t)=>{var r=Bu(),i=I(r),a={};R((e,n)=>{q(i,`${V(t)??``}
              ${e??``}`),a!==(a=n)&&(r.value=(r.__value=a)??``)},[()=>(V(o),U(X),n(),H(()=>V(o)===`takeaway`||V(o)===`special_takeaway`?X(`reservation.portions`,n()):X(`reservation.guests`,n()))),()=>(V(t),H(()=>String(V(t))))]),K(e,r)}),k(Re),Ti(Re),k(Fe);var ze=L(Fe,2),Be=F(ze),Ve=I(F(Be),!0);k(Be);var He=L(Be,2);_t(He),k(ze);var Ue=L(ze,2),We=F(Ue),Ge=e=>{var t=Ku(),n=I(L(F(t),2),!0);k(t),R(()=>q(n,V(y))),K(e,t)};J(We,e=>{V(y)&&e(Ge)});var Ke=L(We,2),qe=F(Ke),Je=e=>{K(e,qu())};J(qe,e=>{V(m)&&e(Je)});var A=L(qe);k(Ke);var Ye=L(Ke,2),Xe=e=>{var t=Ju(),r=F(t),i=e=>{K(e,qu())};J(r,e=>{V(m)&&e(i)});var a=L(r);k(t),R(e=>{t.disabled=V(m),q(a,` ${e??``}`)},[()=>(U(X),n(),H(()=>X(`reservation.cancel`,n())))]),W(`click`,t,re),K(e,t)};J(Ye,e=>{V(a)&&e(Xe)}),k(Ue),k(t),R((e,t,n,r,i,a,o,s,c,l,u,d,f,p,g,_)=>{q(h,e),q(ne,t),Ni(ie,`placeholder`,n),q(le,r),Ni(ue,`placeholder`,i),Y(ue,1,`input input-bordered w-full focus:border-primary ${V(b)?`input-error`:``}`,`svelte-5i288w`),q(he,a),Ni(ge,`placeholder`,o),Y(ge,1,`input input-bordered w-full focus:border-primary ${V(x)?`input-error`:``}`,`svelte-5i288w`),q(E,s),q(we,c),Y(Te,1,`input input-bordered w-full focus:border-primary ${V(S)?`input-error`:``}`,`svelte-5i288w`),Ni(Te,`min`,l),q(Oe,u),Y(ke,1,`input input-bordered w-full focus:border-primary ${V(ee)?`input-error`:``}`,`svelte-5i288w`),Ni(ke,`min`,(U($),H(()=>$.reservation.openHours.start))),Ni(ke,`max`,(U($),H(()=>$.reservation.openHours.end))),q(Me,`${d??``} ${U($),H(()=>$.reservation.openHours.start)??``} - ${U($),H(()=>$.reservation.openHours.end)??``}`),q(Le,f),q(Ve,p),Ni(He,`placeholder`,g),Ke.disabled=V(m),q(A,` ${_??``}`)},[()=>(U(X),n(),H(()=>X(`reservation.type`,n()))),()=>(U(X),n(),H(()=>X(`reservation.name`,n()))),()=>(U(X),n(),H(()=>X(`reservation.name`,n()))),()=>(U(X),n(),H(()=>X(`reservation.email`,n()))),()=>(U(X),n(),H(()=>X(`reservation.email`,n()))),()=>(U(X),n(),H(()=>X(`reservation.phone`,n()))),()=>(U(X),n(),H(()=>X(`reservation.phone`,n()))),()=>(U(X),n(),H(()=>X(`reservation.phoneHint`,n()))),()=>(U(X),n(),H(()=>X(`reservation.date`,n()))),()=>H(()=>new Date().toLocaleDateString(`en-CA`,{timeZone:`Europe/Zurich`})),()=>(U(X),n(),H(()=>X(`reservation.time`,n()))),()=>(U(X),n(),H(()=>X(`reservation.openingHours`,n()))),()=>(V(o),U(X),n(),H(()=>V(o)===`takeaway`||V(o)===`special_takeaway`?X(`reservation.portions`,n()):X(`reservation.guests`,n()))),()=>(U(X),n(),H(()=>X(`reservation.message`,n()))),()=>(U(X),n(),H(()=>X(`reservation.message`,n()))),()=>(V(a),U(X),n(),H(()=>V(a)?X(`reservation.update`,n()):X(`reservation.submit`,n())))]),Li(ie,()=>V(s),e=>P(s,e)),Li(ue,()=>V(c),e=>P(c,e)),Li(ge,()=>V(l),e=>P(l,e)),Li(Te,()=>V(u),e=>P(u,e)),Li(ke,()=>V(d),e=>P(d,e)),Ei(Re,()=>V(f),e=>P(f,e)),Li(He,()=>V(p),e=>P(p,e)),W(`submit`,t,Hi(ae)),K(e,t)},ue=e=>{var t=Xu(),r=F(t),i=I(L(F(r),2),!0);k(r);var a=L(r,2),o=I(a,!0);k(t),R(e=>{Y(r,1,`alert ${V(g)?`alert-warning`:`alert-success`} mb-4 shadow-lg border-primary/20 bg-base-100`,`svelte-5i288w`),q(i,V(v)),q(o,e)},[()=>(U(X),n(),H(()=>X(`reservation.new`,n())))]),W(`click`,a,()=>{P(_,!0),P(h,!1),ie()}),K(e,t)};J(ce,e=>{V(_)?e(le):e(ue,-1)}),k(se),k(oe),K(e,oe),Ze(),i()}var $u=G(`<footer id="contact" class="bg-base-100 py-2 px-4"><div class="py-10 mt-12"><div class="footer footer-center max-w-6xl mx-auto flex flex-col gap-6"><ul class="menu menu-horizontal px-1 font-semibold !m-0"><!></ul> <div class="text-sm opacity-80"> </div> <div class="text-[10px] opacity-20 font-mono select-none"> </div></div></div></footer>`);function ed(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht();Ui();var a=$u(),o=F(a),s=F(o),c=F(s);ra(F(c),{}),k(c);var l=L(c,2),u=I(l),d=I(L(l,2),!0);k(s),k(o),k(a),R(e=>{q(u,`© 2026 Dia's Delicacy. ${e??``}`),q(d,`dev`)},[()=>X(`footer.rights`,n())]),K(e,a),Ze(),i()}var td=G(`<section id="contact" class="py-20 px-4"><div class="max-w-6xl mx-auto px-4 pb-12"><!> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mt-12"><div class="flex flex-col gap-y-6 items-center"><div class="prose prose-lg max-w-none bg-base-200 p-8 rounded-2xl shadow-lg border-l-4 border-primary"><!> <!> <hr/> <div class="flex items-center gap-6 mt-4"> <div class="flex gap-4"><a href="https://www.facebook.com/dia.delicacy/" target="_blank" rel="noopener" class="text-primary hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a> <a href="https://www.instagram.com/dia.delicacy/" target="_blank" rel="noopener" class="text-primary hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="!fill-none"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a></div></div></div></div> <div class="flex flex-col h-full rounded-2xl shadow-2xl overflow-hidden w-full aspect-video border-4 border-base-100"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.8951221416446!2d6.134216599999999!3d46.2125413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65c2f3568c37%3A0x48faab26e433a4c0!2sDia%E2%80%99s%20Delicacy!5e0!3m2!1sde!2sde!4v1755112344883!5m2!1sde!2sde" width="100%" height="100%" class="block" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps location for Dia's Delicacy"></iframe></div></div></div></section>`);function nd(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(``);Ki(async()=>{P(a,await eu(n(),`contact`))}),zn(()=>(n(),eu),()=>{n()&&eu(n(),`contact`).then(e=>P(a,e))}),Bn(),Ui();var o=td(),s=F(o),c=F(s);{let e=At(()=>(U(X),n(),H(()=>X(`nav.contact`,n()))));mu(c,{get title(){return V(e)}})}var l=L(c,2),u=F(l),d=F(u),f=F(d);mi(f,()=>V(a));var p=L(f,2);ru(p,{});var m=L(p,4),h=F(m);ke(),k(m),k(d),k(u),ke(2),k(l),k(s),k(o),R(e=>q(h,`${e??``}: `),[()=>(U(X),n(),H(()=>X(`contact.follow`,n())))]),K(e,o),Ze(),i()}var rd=t({default:()=>id}),id=`/assets/food_baking_cake1-DsXplmpc.webp`,ad=t({default:()=>od}),od=`/assets/food_baking_cake2-RBk0Evzd.webp`,sd=t({default:()=>cd}),cd=`/assets/food_baking_pastry1-DRYz8jji.webp`,ld=t({default:()=>ud}),ud=`/assets/food_biryani-BYo6W1CV.webp`,dd=t({default:()=>fd}),fd=`/assets/food_butter_chicken-DPoJOzpD.webp`,pd=t({default:()=>md}),md=`/assets/food_catering1-CKWoQZrI.webp`,hd=t({default:()=>gd}),gd=`/assets/food_catering3-CQQ0qqJ4.webp`,_d=t({default:()=>vd}),vd=`/assets/food_kheemapav-BdJ4x7mM.webp`,yd=t({default:()=>bd}),bd=`/assets/food_naanwich-3YYvtfYD.webp`,xd=t({default:()=>Sd}),Sd=`/assets/food_rasmalai-jziXLQkh.webp`,Cd=t({default:()=>wd}),wd=`/assets/food_sabudana_vada-QXZZpi2z.webp`,Td=t({default:()=>Ed}),Ed=`/assets/food_samosa-ZRmpHNlu.webp`,Dd=t({default:()=>Od}),Od=`/assets/food_thali-DXAcNTqN.webp`,kd=t({default:()=>Ad}),Ad=`/assets/food_thali2-BhVhG-kb.webp`,jd=t({default:()=>Md}),Md=`/assets/food_vadapav-C4wjXWG4.webp`,Nd=G(`<div class="flex-none w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-center relative overflow-hidden rounded-2xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 group bg-base-100"><img class="w-full h-72 sm:h-80 lg:h-96 object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy"/> <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6"><p class="text-white font-medium text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"> </p></div></div>`),Pd=G(`<section id="gallery" class="py-20 px-4 overflow-hidden"><div class="max-w-7xl mx-auto relative"><!> <div class="relative group"><button class="btn btn-circle btn-sm sm:btn-md bg-white/95 hover:bg-white border-none shadow-2xl absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all text-gray-900" aria-label="Previous"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" stroke="var(--primary-content)" d="M15 19l-7-7 7-7"></path></svg></button> <button class="btn btn-circle btn-sm sm:btn-md bg-white/95 hover:bg-white border-none shadow-2xl absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 hover:scale-110 transition-all text-gray-900" aria-label="Next"><svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 sm:h-8 sm:w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="fill: none;"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"></path></svg></button> <div class="flex overflow-x-auto gap-6 scroll-smooth snap-x snap-mandatory no-scrollbar py-12 px-2 svelte-1ocen1q"></div></div></div></section>`);function Fd(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=Object.entries(Object.assign({"../assets/images/gallery/food_baking_cake1.webp":rd,"../assets/images/gallery/food_baking_cake2.webp":ad,"../assets/images/gallery/food_baking_pastry1.webp":sd,"../assets/images/gallery/food_biryani.webp":ld,"../assets/images/gallery/food_butter_chicken.webp":dd,"../assets/images/gallery/food_catering1.webp":pd,"../assets/images/gallery/food_catering3.webp":hd,"../assets/images/gallery/food_kheemapav.webp":_d,"../assets/images/gallery/food_naanwich.webp":yd,"../assets/images/gallery/food_rasmalai.webp":xd,"../assets/images/gallery/food_sabudana_vada.webp":Cd,"../assets/images/gallery/food_samosa.webp":Td,"../assets/images/gallery/food_thali.webp":Dd,"../assets/images/gallery/food_thali2.webp":kd,"../assets/images/gallery/food_vadapav.webp":jd})).map(([e,t])=>{let n=e.split(`/`).pop().split(`.`)[0].split(`_`).map(e=>e.charAt(0).toUpperCase()+e.slice(1)).join(` `);return{src:t.default,alt:n}}),o=N();function s(e){if(V(o)){let t=V(o).clientWidth*.8;V(o).scrollBy({left:e*t,behavior:`smooth`})}}Ui();var c=Pd(),l=F(c),u=F(l);{let e=At(()=>X(`nav.gallery`,n()));mu(u,{get title(){return V(e)}})}var d=L(u,2),f=F(d),p=L(f,2),m=L(p,2);ci(m,5,()=>a,ii,(e,t)=>{var n=Nd(),r=F(n),i=L(r,2),a=I(F(i),!0);k(i),k(n),R(()=>{Ni(r,`src`,V(t).src),Ni(r,`alt`,V(t).alt),q(a,V(t).alt)}),K(e,n)}),k(m),Vi(m,e=>P(o,e),()=>V(o)),k(d),k(l),k(c),W(`click`,f,()=>s(-1)),W(`click`,p,()=>s(1)),K(e,c),Ze(),i()}var Id=G(`<div class="bg-primary text-white py-3 px-4 relative z-[100] shadow-lg animate-in slide-in-from-top duration-500"><div class="max-w-6xl mx-auto flex items-center justify-between gap-4"><div class="flex-1 flex items-center gap-3"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <div class="prose prose-sm prose-invert max-w-none banner-content"></div></div> <button class="btn btn-circle btn-ghost btn-xs text-white hover:bg-white/20" aria-label="Close announcement"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div></div>`);function Ld(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(``),o=N(!1),s=N(!1),c=Object.assign({"/src/content/en/announcement.md":da,"/src/content/fr/announcement.md":Ho});function l(e){let t=e.match(/<!--\s*show:\s*(true|false)\s*-->/i);return!t||t[1].toLowerCase()!==`false`}function u(e){let t=`/src/content/${e}/announcement.md`,n=c[t];if(n){if(P(o,l(n)),V(o)){let e=n.replace(/<!--\s*show:.*?\s*-->/gi,``);P(a,Q(e))}}else P(o,!1)}Ki(()=>{u(n())}),zn(()=>n(),()=>{n()&&u(n())}),Bn(),Ui();var d=Jr(),f=Sn(d),p=e=>{var t=Id(),n=F(t),r=F(n),i=L(F(r),2);mi(i,()=>V(a),!0),k(i),k(r);var o=L(r,2);k(n),k(t),W(`click`,o,()=>P(s,!0)),K(e,t)};J(f,e=>{V(o)&&!V(s)&&e(p)}),K(e,d),Ze(),i()}var Rd=``;async function zd(e,t=``,n=``,r=``){let i=new URL(`${Rd}/api/admin/reservations`);t&&i.searchParams.append(`status`,t),n&&n!==`all`&&i.searchParams.append(`date`,n),r&&r!==`all`&&i.searchParams.append(`type`,r);let a=await fetch(i,{headers:{Authorization:`Bearer ${e}`,Accept:`application/json`},credentials:`include`});if(a.status===401)throw Error(`Unauthorized`);if(!a.ok)throw Error(`Server Error`);return await a.json()}async function Bd(e,t){let n=await fetch(`${Rd}/api/admin/approve/${e}`,{method:`GET`,headers:{Authorization:`Bearer ${t}`,Accept:`application/json`},credentials:`include`});if(!n.ok)throw Error(`Failed to approve`);return await n.json()}async function Vd(e,t,n){let r=await fetch(`${Rd}/api/admin/reject/${e}`,{method:`POST`,headers:{Authorization:`Bearer ${t}`,"Content-Type":`application/json`,Accept:`application/json`},body:JSON.stringify({reason:n}),credentials:`include`});if(!r.ok)throw Error(`Failed to reject`);return await r.json()}var Hd=G(`<span class="loading loading-spinner"></span>`),Ud=G(`<div class="mt-4 p-3 bg-error/10 text-error rounded-lg text-sm font-medium border border-error/20"> </div>`),Wd=G(`<div class="flex flex-col items-center justify-center min-h-screen px-4"><div class="mb-8 scale-150"><!></div> <div class="max-w-md w-full p-8 bg-base-100 rounded-2xl shadow-2xl border border-primary/10 text-center"><h1 class="text-3xl font-bold mb-2 text-primary">Admin Access</h1> <p class="text-sm opacity-60 mb-8">Enter your secret token to manage reservations</p> <div class="form-control w-full"><input type="password" class="input input-bordered w-full text-center text-lg focus:border-primary" placeholder="••••••••••••"/></div> <button class="btn btn-primary w-full mt-6 shadow-lg h-14 text-lg"><!> Login to Dashboard</button> <!></div></div>`),Gd=G(`<option> </option>`),Kd=G(`<div class="flex flex-col items-center justify-center p-32 gap-4"><span class="loading loading-infinity loading-lg text-primary"></span> <p class="text-sm opacity-50 font-medium">Fetching bookings...</p></div>`),qd=G(`<p class="mt-2 text-xs italic bg-base-200 p-2 rounded-lg border border-base-300"> </p>`),Jd=G(`<button class="btn btn-success btn-sm md:btn-md flex-1">Approve</button> <button class="btn btn-ghost btn-sm md:btn-md flex-1 border border-error/20 text-error hover:bg-error hover:text-white">Reject</button>`,1),Yd=G(`<button class="btn btn-outline btn-error btn-sm">Cancel Booking</button>`),Xd=G(`<button class="btn btn-outline btn-success btn-sm">Restore</button>`),Zd=G(`<div class="bg-base-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-base-200 overflow-hidden"><div class="flex flex-col md:flex-row md:items-center"><div></div> <div class="p-5 flex-1 flex flex-col md:flex-row md:items-center gap-6"><div class="flex-1"><div class="flex items-center gap-2 mb-1"><span class="text-xl font-bold"> </span> <span> </span></div> <div class="flex flex-wrap gap-x-4 gap-y-1 text-sm opacity-60"><span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> </span> <span class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg> </span></div> <!></div> <div class="flex items-center gap-8 md:px-8 md:border-x border-base-200"><div class="text-center"><div class="text-xs uppercase font-black opacity-30 mb-1">Date</div> <div class="font-bold whitespace-nowrap"> </div> <div class="text-sm font-medium opacity-60"> </div></div> <div class="text-center"><div class="text-xs uppercase font-black opacity-30 mb-1">Party</div> <div class="text-2xl font-black text-primary"> </div></div></div> <div class="flex md:flex-col gap-2"><!></div></div></div></div>`),Qd=G(`<div class="text-center py-20 bg-base-100 rounded-2xl border-2 border-dashed border-base-300"><div class="text-5xl mb-4 opacity-20">📭</div> <p class="text-lg font-bold opacity-40">No reservations found.</p> <p class="text-sm opacity-30">Try changing your filter or check back later.</p></div>`),$d=G(`<div class="grid gap-4"><!> <!></div>`),ef=G(`<div class="max-w-6xl mx-auto p-4 md:p-8"><header class="mb-6"><div class="flex flex-row justify-between items-center bg-base-100 p-2 px-4 rounded-xl shadow-sm border border-base-200 mb-4 gap-2"><div class="flex items-center gap-3"><div class="scale-90"><!></div> <div class="hidden md:flex flex-row items-center gap-2"><h1 class="text-xl font-black tracking-tight text-primary">Reservations</h1> <div class="h-4 w-px bg-base-300"></div> <p class="text-xs uppercase tracking-widest font-bold opacity-40">Management Console</p></div></div> <button class="btn btn-outline btn-error btn-[10px] h-6 min-h-0">Exit</button></div> <div class="flex flex-wrap items-end justify-center gap-3 bg-base-100 p-4 rounded-xl shadow-sm border border-base-200"><div class="flex flex-col gap-0.5"><label class="text-[10px] font-bold uppercase opacity-50 px-1">Status</label> <div class="join shadow-sm border border-base-200"><button>All</button> <button>Pending</button> <button>Confirmed</button></div></div> <div class="flex flex-col gap-0.5"><label class="text-[10px] font-bold uppercase opacity-50 px-1">Date</label> <div class="join shadow-sm border border-base-200"><button>All</button> <button>Today</button> <input type="date" class="input input-xs join-item border-base-200 w-32"/></div></div> <div class="flex flex-col gap-0.5"><label class="text-[10px] font-bold uppercase opacity-50 px-1">Type</label> <select class="select select-xs select-bordered"><option>All</option><!></select></div> <button class="btn btn-circle btn-ghost btn-xs mt-4" title="Refresh"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg></button></div></header> <!></div>`),tf=G(`<input type="text" class="input input-bordered w-full mt-2" placeholder="Enter custom reason"/>`),nf=G(`<div class="min-h-screen bg-base-300 font-sans"><!></div> <dialog id="reject_modal" class="modal"><div class="modal-box"><h3 class="font-bold text-lg">Select Reason for Rejection</h3> <select class="select select-bordered w-full mt-4"></select> <!> <div class="modal-action"><button class="btn">Cancel</button> <button class="btn btn-error"><!> Reject Reservation</button></div></div></dialog>`,1);function rf(e,t){Xe(t,!1);let n=()=>mt(Zi,`$currentLanguage`,r),[r,i]=ht(),a=N(),o=N(sessionStorage.getItem(`admin_token`)||``),s=N(!1),c=N([]),l=N(!1),u=N(``),d=N(``),f=N(`all`),p=N(`all`),m=new Date().toLocaleDateString(`en-CA`);async function h(){if(V(o)){P(l,!0),P(u,``);try{P(c,await zd(V(o))),P(s,!0),sessionStorage.setItem(`admin_token`,V(o))}catch{P(u,`Invalid Token or Server Error`),P(s,!1),sessionStorage.removeItem(`admin_token`)}finally{P(l,!1)}}}async function g(){if(V(s)){P(l,!0);try{P(c,await zd(V(o),V(d),V(f)===`all`?``:V(f)===`today`?m:V(f),V(p)===`all`?``:V(p)))}catch{P(u,`Failed to fetch reservations`)}finally{P(l,!1)}}}async function _(e){if(confirm(`Approve this reservation?`))try{let t=await Bd(e,V(o));alert(`Reservation approved. `+t.message),await g()}catch{alert(`Error approving`)}}let v=N(`fullyBooked`),y=N(``),b=null,x=N(!1),S=[{key:`fullyBooked`,label:`Fully Booked`},{key:`closed`,label:`Restaurant Closed`},{key:`custom`,label:`Custom Reason`}];async function ee(e){b=e,document.getElementById(`reject_modal`).showModal()}async function C(){if(!V(v)){alert(`Please select a reason.`);return}if(V(v)===`custom`&&!V(y)){alert(`Please provide a custom reason.`);return}P(x,!0);try{let e=await Vd(b,V(o),{reasonKey:V(v),customReason:V(y)});alert(`Reservation cancelled. `+e.message),document.getElementById(`reject_modal`).close(),await g()}catch{alert(`Error rejecting`)}finally{P(x,!1)}}function te(){sessionStorage.removeItem(`admin_token`),P(s,!1),P(o,``),P(c,[])}Ki(()=>{V(o)&&h()}),zn(()=>V(c),()=>{P(a,[...V(c)].sort((e,t)=>{let n=`${e.date} ${e.start_time}`,r=`${t.date} ${t.start_time}`;return n.localeCompare(r)}))}),zn(()=>(V(s),V(d),V(f),V(p)),()=>{V(s)&&V(d)!==void 0&&V(f)!==void 0&&V(p)!==void 0&&g()}),Bn(),Ui();var w=nf(),ne=Sn(w),re=F(ne),ie=e=>{var t=Wd(),n=F(t);ta(F(n),{}),k(n);var r=L(n,2),i=L(F(r),4),a=F(i);Mi(a),k(i);var s=L(i,2),c=F(s),d=e=>{K(e,Hd())};J(c,e=>{V(l)&&e(d)}),ke(),k(s);var f=L(s,2),p=e=>{var t=Ud(),n=I(t,!0);R(()=>q(n,V(u))),K(e,t)};J(f,e=>{V(u)&&e(p)}),k(r),k(t),R(()=>s.disabled=V(l)),Li(a,()=>V(o),e=>P(o,e)),W(`keydown`,a,e=>e.key===`Enter`&&h()),W(`click`,s,h),K(e,t)},ae=e=>{var t=ef(),r=F(t),i=F(r),o=F(i),s=F(o);ta(F(s),{}),k(s),ke(2),k(o);var u=L(o,2);k(i);var m=L(i,2),h=F(m),v=L(F(h),2),y=F(v),b=L(y,2),x=L(b,2);k(v),k(h);var S=L(h,2),C=L(F(S),2),w=F(C),ne=L(w,2),re=L(ne,2);Mi(re),k(C),k(S);var ie=L(S,2),ae=L(F(ie),2),oe=F(ae);oe.value=oe.__value=`all`,ci(L(oe),1,()=>(U($),H(()=>$.reservation.types)),ii,(e,t)=>{var r=Gd(),i=I(r,!0),a={};R(e=>{q(i,e),a!==(a=(V(t),H(()=>V(t).id)))&&(r.value=(r.__value=a)??``)},[()=>(U(X),V(t),n(),H(()=>X(V(t).labelKey,n())))]),K(e,r)}),k(ae),Ti(ae),k(ie);var se=L(ie,2);k(m),k(r);var T=L(r,2),ce=e=>{K(e,Kd())},le=e=>{var t=$d(),n=F(t);ci(n,1,()=>V(a),ii,(e,t)=>{var n=Zd(),r=F(n),i=F(r),a=L(i,2),o=F(a),s=F(o),c=F(s),l=I(c,!0),u=L(c,2),d=I(u,!0);k(s);var f=L(s,2),p=F(f),m=L(F(p));k(p);var h=L(p,2),g=L(F(h));k(h),k(f);var v=L(f,2),y=e=>{var n=qd(),r=I(n);R(()=>q(r,`"${V(t),H(()=>V(t).notes)??``}"`)),K(e,n)};J(v,e=>{V(t),H(()=>V(t).notes)&&e(y)}),k(o);var b=L(o,2),x=F(b),S=L(F(x),2),C=I(S,!0),te=I(L(S,2),!0);k(x);var w=L(x,2),ne=I(L(F(w),2),!0);k(w),k(b);var re=L(b,2),ie=F(re),ae=e=>{var n=Jd(),r=Sn(n),i=L(r,2);W(`click`,r,()=>_(V(t).id)),W(`click`,i,()=>ee(V(t).id)),K(e,n)},oe=e=>{var n=Yd();W(`click`,n,()=>ee(V(t).id)),K(e,n)},se=e=>{var n=Xd();W(`click`,n,()=>_(V(t).id)),K(e,n)};J(ie,e=>{V(t),H(()=>V(t).status===`pending`)?e(ae):(V(t),H(()=>V(t).status===`confirmed`)?e(oe,1):e(se,-1))}),k(re),k(a),k(r),k(n),R(()=>{Y(i,1,`w-full md:w-2 h-2 md:h-auto
                  ${V(t),H(()=>V(t).status===`confirmed`?`bg-success`:``)??``}
                  ${V(t),H(()=>V(t).status===`pending`?`bg-warning`:``)??``}
                  ${V(t),H(()=>V(t).status===`cancelled`?`bg-error`:``)??``}`),q(l,(V(t),H(()=>V(t).name))),Y(u,1,`badge badge-sm font-bold ${V(t),H(()=>V(t).status===`confirmed`?`badge-success`:V(t).status===`pending`?`badge-warning`:`badge-error`)??``}`),q(d,(V(t),H(()=>V(t).status))),q(m,` ${V(t),H(()=>V(t).email)??``}`),q(g,` ${V(t),H(()=>V(t).phone)??``}`),q(C,(V(t),H(()=>V(t).date))),q(te,(V(t),H(()=>V(t).start_time))),q(ne,(V(t),H(()=>V(t).party_size)))}),K(e,n)});var r=L(n,2),i=e=>{K(e,Qd())};J(r,e=>{V(c),H(()=>V(c).length===0)&&e(i)}),k(t),K(e,t)};J(T,e=>{V(l),V(c),H(()=>V(l)&&V(c).length===0)?e(ce):e(le,-1)}),k(t),R(()=>{Y(y,1,`btn btn-xs join-item ${V(d)===``?`btn-primary`:`btn-ghost`}`),Y(b,1,`btn btn-xs join-item ${V(d)===`pending`?`btn-primary`:`btn-ghost`}`),Y(x,1,`btn btn-xs join-item ${V(d)===`confirmed`?`btn-primary`:`btn-ghost`}`),Y(w,1,`btn btn-xs join-item ${V(f)===`all`?`btn-primary`:`btn-ghost`}`),Y(ne,1,`btn btn-xs join-item ${V(f)===`today`?`btn-primary`:`btn-ghost`}`)}),W(`click`,u,te),W(`click`,y,()=>P(d,``)),W(`click`,b,()=>P(d,`pending`)),W(`click`,x,()=>P(d,`confirmed`)),W(`click`,w,()=>P(f,`all`)),W(`click`,ne,()=>P(f,`today`)),Li(re,()=>V(f),e=>P(f,e)),Ei(ae,()=>V(p),e=>P(p,e)),W(`click`,se,g),K(e,t)};J(re,e=>{V(s)?e(ae,-1):e(ie)}),k(ne);var oe=L(ne,2),se=F(oe),T=L(F(se),2);ci(T,5,()=>S,ii,(e,t)=>{var n=Gd(),r=I(n,!0),i={};R(()=>{q(r,(V(t),H(()=>V(t).label))),i!==(i=(V(t),H(()=>V(t).key)))&&(n.value=(n.__value=i)??``)}),K(e,n)}),k(T),Ti(T);var ce=L(T,2),le=e=>{var t=tf();Mi(t),Li(t,()=>V(y),e=>P(y,e)),K(e,t)};J(ce,e=>{V(v)===`custom`&&e(le)});var ue=L(ce,2),de=F(ue),fe=L(de,2),pe=F(fe),me=e=>{K(e,Hd())};J(pe,e=>{V(x)&&e(me)}),ke(),k(fe),k(ue),k(se),k(oe),R(()=>fe.disabled=V(x)),Ei(T,()=>V(v),e=>P(v,e)),W(`click`,de,()=>document.getElementById(`reject_modal`).close()),W(`click`,fe,C),K(e,w),Ze(),i()}var af=G(`<meta name="viewport" content="width=1920, initial-scale=1.0"/>`),of=G(`<meta name="viewport" content="width=device-width, initial-scale=1.0"/>`),sf=G(`<meta name="description" content="A modern Dia's Delicacy website"/> <!>`,1),cf=G(`<div class="standalone-view svelte-1n46o8q"><header class="p-6 flex items-center gap-4 bg-base-100 shadow-sm"><!></header> <!></div>`),lf=G(`<div class="standalone-view tv-view svelte-1n46o8q"><!></div>`),uf=G(`<div><!></div>`),df=G(`<!> <!> <!> <!>`,1),ff=G(`<main><!></main>`);function pf(e,t){Xe(t,!1);let n=()=>mt(Nu,`$isFormBusy`,r),[r,i]=ht(),a=N(),o=N(),s=N(`/`),c=N(!1);Ki(()=>{let e=du(new Date),t=async()=>{e=du(await fu())},r=async()=>{du(await fu())!==e&&!n()&&window.location.reload()},i=()=>{let e=new URL(window.location.href),t=e.searchParams.get(`lang`);t&&[`en`,`fr`].includes(t)&&Zi.set(t);let n=e.searchParams.get(`theme`);n&&(document.documentElement.setAttribute(`data-theme`,n),localStorage.setItem(`theme`,n));let r=e.pathname.replace(/\/$/,``)||`/`;e.hash.startsWith(`#/`)&&(r=e.hash.replace(`#`,``)),P(s,r);let i=e.searchParams.get(`rt`);P(c,i===`p`||r===`/tv`),V(c)?document.body.style.overflow=`hidden`:document.body.style.overflow=``};i(),window.addEventListener(`popstate`,i),window.addEventListener(`hashchange`,i),t();let a=setInterval(r,9e5),o=()=>{document.visibilityState===`visible`&&r()},l=()=>{r()};return document.addEventListener(`visibilitychange`,o),window.addEventListener(`focus`,l),()=>{window.removeEventListener(`popstate`,i),window.removeEventListener(`hashchange`,i),clearInterval(a),document.removeEventListener(`visibilitychange`,o),window.removeEventListener(`focus`,l)}});let l=[{id:`hero`,component:au,show:!0},{id:`menu`,component:Cu,show:!0},{id:`about`,component:Eu,show:!0},{id:`highlights`,component:Mu,show:!0},{id:`gallery`,component:Fd,show:!0},{id:`contact`,component:nd,show:!0},{id:`reservation`,component:Qu,show:!1}];zn(()=>{},()=>{P(a,l.filter(e=>e.show))}),zn(()=>V(s),()=>{P(o,[`/menu`,`/gallery`,`/highlights`,`/tv`,`/admin`].includes(V(s)))}),Bn(),Ui();var u=ff();gi(`1n46o8q`,e=>{var t=sf(),n=L(Sn(t),2),r=e=>{K(e,af())},i=e=>{K(e,of())};J(n,e=>{V(c)?e(r):e(i,-1)}),Rn(()=>{mn.title=`Dia's Delicacy`}),K(e,t)});var d=F(u),f=e=>{rf(e,{})},p=e=>{var t=cf(),n=F(t);ta(F(n),{}),k(n),Cu(L(n,2),{}),k(t),K(e,t)},m=e=>{var t=cf(),n=F(t);ta(F(n),{}),k(n),Fd(L(n,2),{}),k(t),K(e,t)},h=e=>{var t=cf(),n=F(t);ta(F(n),{}),k(n),Mu(L(n,2),{}),k(t),K(e,t)},g=e=>{var t=lf();Cu(F(t),{tvMode:!0}),k(t),K(e,t)},_=e=>{var t=df(),n=Sn(t);Ld(n,{});var r=L(n,2);la(r,{});var i=L(r,2);ci(i,1,()=>V(a),ii,(e,t,n)=>{var r=uf();Y(r,1,yi(n%2==0?`bg-base-200 jqSec`:`bg-base-100 jqSec`)),hi(F(r),()=>V(t).component,(e,t)=>{t(e,{})}),k(r),K(e,r)}),ed(L(i,2),{}),K(e,t)};J(d,e=>{V(s)===`/admin`?e(f):V(s)===`/menu`?e(p,1):V(s)===`/gallery`?e(m,2):V(s)===`/highlights`?e(h,3):V(s)===`/tv`?e(g,4):e(_,-1)}),k(u),R(()=>Y(u,1,yi(V(c)?`rotate-portrait`:``))),K(e,u),Ze(),i()}$r(pf,{target:document.getElementById(`app`)});
import{k as mt,l as Xt,o as te,w as ee,c as ae,a as P,t as U,e as K,s as ie}from"../chunks/CuIn7ALo.js";import{i as Rt}from"../chunks/D_AAF-Xw.js";import{M as re,N as bt,O as _t,Y as se,_ as gt,ar as ne,au as oe,as as le,V as ce,al as fe,aE as ue,I as pt,P as de,aO as ve,aP as he,z as me,b as be,aQ as _e,af as ge,a1 as Q,aR as pe,aS as ye,aT as xe,ai as yt,aj as xt,ak as we,aU as ut,aM as dt,aV as Te,p as Ct,s as c,d as V,e as ke,f as zt,g as Mt,m as L,k as f,i as M,h as H,r as N,j as et,t as J}from"../chunks/CiK-ySIN.js";import{g as Se,p as Oe,e as Ee,c as Ae,b as Y,h as wt,a as Ie}from"../chunks/7kPUXyfL.js";import{l as Re,p,i as X,s as Ce,b as Tt}from"../chunks/B00tGAOs.js";function kt(e,t,a,r,o){var s=e,i="",l;re(()=>{if(i===(i=t()??"")){bt&&_t();return}l!==void 0&&(ue(l),l=void 0),i!==""&&(l=se(()=>{if(bt){gt.data;for(var n=_t(),m=n;n!==null&&(n.nodeType!==8||n.data!=="");)m=n,n=ne(n);if(n===null)throw oe(),le;mt(gt,m),s=ce(n);return}var d=i+"",u=Xt(d);mt(fe(u),u.lastChild),s.before(u)}))})}const ze=()=>performance.now(),j={tick:e=>requestAnimationFrame(e),now:()=>ze(),tasks:new Set};function Dt(){const e=j.now();j.tasks.forEach(t=>{t.c(e)||(j.tasks.delete(t),t.f())}),j.tasks.size!==0&&j.tick(Dt)}function Me(e){let t;return j.tasks.size===0&&j.tick(Dt),{promise:new Promise(a=>{j.tasks.add(t={c:e,f:a})}),abort(){j.tasks.delete(t)}}}function tt(e,t){ee(()=>{e.dispatchEvent(new CustomEvent(t))})}function De(e){if(e==="float")return"cssFloat";if(e==="offset")return"cssOffset";if(e.startsWith("--"))return e;const t=e.split("-");return t.length===1?t[0]:t[0]+t.slice(1).map(a=>a[0].toUpperCase()+a.slice(1)).join("")}function St(e){const t={},a=e.split(";");for(const r of a){const[o,s]=r.split(":");if(!o||s===void 0)break;const i=De(o.trim());t[i]=s.trim()}return t}const Fe=e=>e;function je(e,t,a){var r=Se,o,s,i,l=null;r.a??(r.a={element:e,measure(){o=this.element.getBoundingClientRect()},apply(){if(i==null||i.abort(),s=this.element.getBoundingClientRect(),o.left!==s.left||o.right!==s.right||o.top!==s.top||o.bottom!==s.bottom){const n=t()(this.element,{from:o,to:s},a==null?void 0:a());i=at(this.element,n,void 0,1,()=>{i==null||i.abort(),i=void 0})}},fix(){if(!e.getAnimations().length){var{position:n,width:m,height:d}=getComputedStyle(e);if(n!=="absolute"&&n!=="fixed"){var u=e.style;l={position:u.position,width:u.width,height:u.height,transform:u.transform},u.position="absolute",u.width=m,u.height=d;var v=e.getBoundingClientRect();if(o.left!==v.left||o.top!==v.top){var h=`translate(${o.left-v.left}px, ${o.top-v.top}px)`;u.transform=u.transform?`${u.transform} ${h}`:h}}}},unfix(){if(l){var n=e.style;n.position=l.position,n.width=l.width,n.height=l.height,n.transform=l.transform}}}),r.a.element=e}function Ot(e,t,a,r){var o=(e&ye)!==0,s=(e&xe)!==0,i=o&&s,l=(e&pe)!==0,n=i?"both":o?"in":"out",m,d=t.inert,u=t.style.overflow,v,h;function w(){var b=we,D=pt;yt(null),xt(null);try{return m??(m=a()(t,(r==null?void 0:r())??{},{direction:n}))}finally{yt(b),xt(D)}}var _={is_global:l,in(){var b;if(t.inert=d,!o){h==null||h.abort(),(b=h==null?void 0:h.reset)==null||b.call(h);return}s||v==null||v.abort(),tt(t,"introstart"),v=at(t,w(),h,1,()=>{tt(t,"introend"),v==null||v.abort(),v=m=void 0,t.style.overflow=u})},out(b){if(!s){b==null||b(),m=void 0;return}t.inert=!0,tt(t,"outrostart"),h=at(t,w(),v,0,()=>{tt(t,"outroend"),b==null||b()})},stop:()=>{v==null||v.abort(),h==null||h.abort()}},y=pt;if((y.transitions??(y.transitions=[])).push(_),o&&te){var x=l;if(!x){for(var g=y.parent;g&&(g.f&de)!==0;)for(;(g=g.parent)&&(g.f&ve)===0;);x=!g||(g.f&he)!==0}x&&me(()=>{be(()=>_.in())})}}function at(e,t,a,r,o){var s=r===1;if(_e(t)){var i,l=!1;return ge(()=>{if(!l){var y=t({direction:s?"in":"out"});i=at(e,y,a,r,o)}}),{abort:()=>{l=!0,i==null||i.abort()},deactivate:()=>i.deactivate(),reset:()=>i.reset(),t:()=>i.t()}}if(a==null||a.deactivate(),!(t!=null&&t.duration))return o(),{abort:Q,deactivate:Q,reset:Q,t:()=>r};const{delay:n=0,css:m,tick:d,easing:u=Fe}=t;var v=[];if(s&&a===void 0&&(d&&d(0,1),m)){var h=St(m(0,1));v.push(h,h)}var w=()=>1-r,_=e.animate(v,{duration:n});return _.onfinish=()=>{var y=(a==null?void 0:a.t())??1-r;a==null||a.abort();var x=r-y,g=t.duration*Math.abs(x),b=[];if(g>0){var D=!1;if(m)for(var $=Math.ceil(g/16.666666666666668),E=0;E<=$;E+=1){var F=y+x*u(E/$),W=St(m(F,1-F));b.push(W),D||(D=W.overflow==="hidden")}D&&(e.style.overflow="hidden"),w=()=>{var A=_.currentTime;return y+x*u(A/g)},d&&Me(()=>{if(_.playState!=="running")return!1;var A=w();return d(A,1-A),!0})}_=e.animate(b,{duration:g,fill:"forwards"}),_.onfinish=()=>{w=()=>r,d==null||d(r,1-r),o()}},{abort:()=>{_&&(_.cancel(),_.effect=null,_.onfinish=Q)},deactivate:()=>{o=Q},reset:()=>{r===0&&(d==null||d(1,0))},t:()=>w()}}const Le=!0,ha=Object.freeze(Object.defineProperty({__proto__:null,prerender:Le},Symbol.toStringTag,{value:"Module"})),Ne="drawerStore";function Pe(){const e=$e();return ut(Ne,e)}function $e(){const{subscribe:e,set:t,update:a}=dt({});return{subscribe:e,set:t,update:a,open:r=>a(()=>({open:!0,...r})),close:()=>a(r=>(r.open=!1,r))}}const Be="modalStore";function He(){const e=Ue();return ut(Be,e)}function Ue(){const{subscribe:e,set:t,update:a}=dt([]);return{subscribe:e,set:t,update:a,trigger:r=>a(o=>(o.push(r),o)),close:()=>a(r=>(r.length>0&&r.shift(),r)),clear:()=>t([])}}const We={message:"Missing Toast Message",autohide:!0,timeout:5e3},Ft="toastStore";function qe(){const e=Te(Ft);if(!e)throw new Error("toastStore is not initialized. Please ensure that `initializeStores()` is invoked in the root layout file of this app!");return e}function Ye(){const e=Qe();return ut(Ft,e)}function Ke(){const e=Math.random();return Number(e).toString(32)}function Qe(){const{subscribe:e,set:t,update:a}=dt([]),r=s=>a(i=>{if(i.length>0){const l=i.findIndex(m=>m.id===s),n=i[l];n&&(n.callback&&n.callback({id:s,status:"closed"}),n.timeoutId&&clearTimeout(n.timeoutId),i.splice(l,1))}return i});function o(s){if(s.autohide===!0)return setTimeout(()=>{r(s.id)},s.timeout)}return{subscribe:e,close:r,trigger:s=>{const i=Ke();return a(l=>{s&&s.callback&&s.callback({id:i,status:"queued"}),s.hideDismiss&&(s.autohide=!0);const n={...We,...s,id:i};return n.timeoutId=o(n),l.push(n),l}),i},freeze:s=>a(i=>(i.length>0&&clearTimeout(i[s].timeoutId),i)),unfreeze:s=>a(i=>(i.length>0&&(i[s].timeoutId=o(i[s])),i)),clear:()=>t([])}}function Ve(){He(),Ye(),Pe()}function Ze(e){const t=e-1;return t*t*t+1}function Et(e){const t=typeof e=="string"&&e.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return t?[parseFloat(t[1]),t[2]||"px"]:[e,"px"]}function At(e,{delay:t=0,duration:a=400,easing:r=Ze,x:o=0,y:s=0,opacity:i=0}={}){const l=getComputedStyle(e),n=+l.opacity,m=l.transform==="none"?"":l.transform,d=n*(1-i),[u,v]=Et(o),[h,w]=Et(s);return{delay:t,duration:a,easing:r,css:(_,y)=>`
			transform: ${m} translate(${(1-_)*u}${v}, ${(1-_)*h}${w});
			opacity: ${n-d*y}`}}function It(e,t){const{transition:a,params:r,enabled:o}=t;return o?a(e,r):"duration"in r?a(e,{duration:0}):{duration:0}}function Ge(e){const t=e-1;return t*t*t+1}function Je(e,{from:t,to:a},r={}){var{delay:o=0,duration:s=E=>Math.sqrt(E)*120,easing:i=Ge}=r,l=getComputedStyle(e),n=l.transform==="none"?"":l.transform,[m,d]=l.transformOrigin.split(" ").map(parseFloat);m/=e.clientWidth,d/=e.clientHeight;var u=Xe(e),v=e.clientWidth/a.width/u,h=e.clientHeight/a.height/u,w=t.left+t.width*m,_=t.top+t.height*d,y=a.left+a.width*m,x=a.top+a.height*d,g=(w-y)*v,b=(_-x)*h,D=t.width/a.width,$=t.height/a.height;return{delay:o,duration:typeof s=="function"?s(Math.sqrt(g*g+b*b)):s,easing:i,css:(E,F)=>{var W=F*g,A=F*b,it=E+F*D,rt=E+F*$;return`transform: ${n} translate(${W}px, ${A}px) scale(${it}, ${rt});`}}}function Xe(e){if("currentCSSZoom"in e)return e.currentCSSZoom;for(var t=e,a=1;t!==null;)a*=+getComputedStyle(t).zoom,t=t.parentElement;return a}var ta=U("<button><!></button>"),ea=U('<button aria-label="Dismiss toast"> </button>'),aa=U("<div><!> <!></div>"),ia=U('<div aria-live="polite"><div data-testid="toast"><div class="text-base"><!></div> <!></div></div>'),ra=U('<div data-testid="snackbar-wrapper"><div></div></div>');function sa(e,t){const a=Re(t,["children","$$slots","$$events","$$legacy"]);Ct(t,!1);const[r,o]=Ce(),s=()=>Tt(Oe,"$prefersReducedMotionStore",r),i=()=>Tt(u,"$toastStore",r),l=L(),n=L(),m=L(),d=L(),u=qe();let v=p(t,"position",8,"b"),h=p(t,"max",8,3),w=p(t,"background",8,"variant-filled-secondary"),_=p(t,"width",8,"max-w-[640px]"),y=p(t,"color",8,""),x=p(t,"padding",8,"p-4"),g=p(t,"spacing",8,"space-x-4"),b=p(t,"rounded",8,"rounded-container-token"),D=p(t,"shadow",8,"shadow-lg"),$=p(t,"zIndex",8,"z-[888]"),E=p(t,"buttonAction",8,"btn variant-filled"),F=p(t,"buttonDismiss",8,"btn-icon btn-icon-sm variant-filled"),W=p(t,"buttonDismissLabel",8,"✕"),A=p(t,"transitions",24,()=>!s()),it=p(t,"transitionIn",8,At),rt=p(t,"transitionInParams",24,()=>({duration:250})),jt=p(t,"transitionOut",8,At),Lt=p(t,"transitionOutParams",24,()=>({duration:250}));const Nt="flex fixed top-0 left-0 right-0 bottom-0 pointer-events-none",Pt="flex flex-col gap-y-2",$t="flex justify-between items-center pointer-events-auto",Bt="flex items-center space-x-2";let I=L(),R=L(),k=L({x:0,y:0});switch(v()){case"t":c(I,"justify-center items-start"),c(R,"items-center"),c(k,{x:0,y:-100});break;case"b":c(I,"justify-center items-end"),c(R,"items-center"),c(k,{x:0,y:100});break;case"l":c(I,"justify-start items-center"),c(R,"items-start"),c(k,{x:-100,y:0});break;case"r":c(I,"justify-end items-center"),c(R,"items-end"),c(k,{x:100,y:0});break;case"tl":c(I,"justify-start items-start"),c(R,"items-start"),c(k,{x:-100,y:0});break;case"tr":c(I,"justify-end items-start"),c(R,"items-end"),c(k,{x:100,y:0});break;case"bl":c(I,"justify-start items-end"),c(R,"items-start"),c(k,{x:-100,y:0});break;case"br":c(I,"justify-end items-end"),c(R,"items-end"),c(k,{x:100,y:0});break}function Ht(S){var T,q;(q=(T=i()[S])==null?void 0:T.action)==null||q.response(),u.close(i()[S].id)}function Ut(S){var T;(T=i()[S])!=null&&T.hoverable&&(u.freeze(S),c(n,f(n)+" scale-[105%]"))}function Wt(S){var T;(T=i()[S])!=null&&T.hoverable&&(u.unfreeze(S),c(n,f(n).replace(" scale-[105%]","")))}let st=L(!1);V(()=>(f(I),M($()),M(a)),()=>{c(l,`${Nt} ${f(I)} ${$()} ${a.class||""}`)}),V(()=>(f(R),M(x())),()=>{c(n,`${Pt} ${f(R)} ${x()}`)}),V(()=>(M(_()),M(y()),M(x()),M(g()),M(b()),M(D())),()=>{c(m,`${$t} ${_()} ${y()} ${x()} ${g()} ${b()} ${D()}`)}),V(()=>(i(),M(h())),()=>{c(d,Array.from(i()).slice(0,h()))}),V(()=>f(d),()=>{f(d).length&&c(st,!0)}),ke(),Rt();var vt=ae(),qt=zt(vt);{var Yt=S=>{var T=ra(),q=H(T);Ee(q,15,()=>f(d),nt=>nt,(nt,C,ot)=>{var z=ia(),lt=H(z),ct=H(lt),Kt=H(ct);kt(Kt,()=>f(C).message),N(ct);var Qt=et(ct,2);{var Vt=Z=>{var G=aa();Y(G,1,`toast-actions ${Bt}`);var ht=H(G);{var Zt=B=>{var O=ta(),ft=H(O);kt(ft,()=>f(C).action.label),N(O),J(()=>Y(O,1,wt(E()))),K("click",O,()=>Ht(f(ot))),P(B,O)};X(ht,B=>{f(C).action&&B(Zt)})}var Gt=et(ht,2);{var Jt=B=>{var O=ea(),ft=H(O,!0);N(O),J(()=>{Y(O,1,wt(F())),ie(ft,W())}),K("click",O,()=>u.close(f(C).id)),P(B,O)};X(Gt,B=>{f(C).hideDismiss||B(Jt)})}N(G),P(Z,G)};X(Qt,Z=>{(f(C).action||!f(C).hideDismiss)&&Z(Vt)})}N(lt),N(z),J(()=>{Ae(z,"role",f(C).hideDismiss?"alert":"alertdialog"),Y(lt,1,`toast ${f(m)??""} ${f(C).background??w()??""} ${f(C).classes??""}`)}),je(z,()=>Je,()=>({duration:A()?250:0})),Ot(5,z,()=>It,()=>({transition:it(),params:{x:f(k).x,y:f(k).y,...rt()},enabled:A()})),Ot(6,z,()=>It,()=>({transition:jt(),params:{x:f(k).x,y:f(k).y,...Lt()},enabled:A()})),K("outroend",z,()=>{f(d).length===0&&c(st,!1)}),K("mouseenter",z,()=>Ut(f(ot))),K("mouseleave",z,()=>Wt(f(ot))),P(nt,z)}),N(q),N(T),J(()=>{Y(T,1,`snackbar-wrapper ${f(l)??""}`),Y(q,1,`snackbar ${f(n)??""}`)}),P(S,T)};X(qt,S=>{(f(d).length>0||f(st))&&S(Yt)})}P(e,vt),Mt(),o()}var na=U('<main><footer class="mt-14 bg-[#1e73ae] p-6 shadow-md"><div class="flex items-start gap-16"><img src="/images/ieee-mb-white.png" alt="ieee-mb-white" class="h-32 justify-self-start pr-8"> <ul class="flex flex-col space-y-2 text-lg font-medium text-white"><li><a href="/" class="hover:underline">HOME</a></li> <li><a href="/calendar" class="hover:underline">CALENDAR</a></li> <li><a href="/officers" class="hover:underline">OFFICERS</a></li> <li><a href="/about" class="hover:underline">ABOUT</a></li> <li><a href="/membership" class="hover:underline">MEMBERSHIP</a></li></ul> <ul class="flex flex-col space-y-0 text-lg font-medium text-white"><li class="pb-8">CONTACT</li> <li>250 Brent Lane</li> <li>Pensacola, FL 32503</li> <li>(123) 146-7890</li> <li>email@email.com</li></ul> <ul class="flex flex-col space-y-2 text-lg font-medium text-white"><li class="pb-8">SOCIAL MEDIA</li> <li><div class="flex flex-row space-x-4"><i class="fa-brands fa-discord"></i> <i class="fa-brands fa-instagram"></i></div></li> <li></li></ul></div> <p class="mt-6 w-full text-center text-sm text-white">&copy; 2025 PLACEHOLDER – All rights reserved.</p></footer></main>');function oa(e){var t=na();P(e,t)}var la=U("<!> <!> <!>",1);function ma(e,t){Ct(t,!1),Ve(),Rt();var a=la(),r=zt(a);sa(r,{});var o=et(r,2);Ie(o,t,"default",{});var s=et(o,2);oa(s),P(e,a),Mt()}export{ma as component,ha as universal};

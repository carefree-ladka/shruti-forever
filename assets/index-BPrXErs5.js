(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const f of u.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function s(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var ah={exports:{}},Lo={};var Fg;function YS(){if(Fg)return Lo;Fg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(s,l,u){var f=null;if(u!==void 0&&(f=""+u),l.key!==void 0&&(f=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:r,type:s,key:f,ref:l!==void 0?l:null,props:u}}return Lo.Fragment=t,Lo.jsx=i,Lo.jsxs=i,Lo}var Bg;function jS(){return Bg||(Bg=1,ah.exports=YS()),ah.exports}var yt=jS(),sh={exports:{}},oe={};var Hg;function ZS(){if(Hg)return oe;Hg=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),f=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),x=Symbol.iterator;function y(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var b={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,M={};function S(D,J,vt){this.props=D,this.context=J,this.refs=M,this.updater=vt||b}S.prototype.isReactComponent={},S.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},S.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function P(){}P.prototype=S.prototype;function N(D,J,vt){this.props=D,this.context=J,this.refs=M,this.updater=vt||b}var U=N.prototype=new P;U.constructor=N,C(U,S.prototype),U.isPureReactComponent=!0;var F=Array.isArray;function H(){}var I={H:null,A:null,T:null,S:null},Q=Object.prototype.hasOwnProperty;function R(D,J,vt){var At=vt.ref;return{$$typeof:r,type:D,key:J,ref:At!==void 0?At:null,props:vt}}function w(D,J){return R(D.type,J,D.props)}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===r}function nt(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(vt){return J[vt]})}var st=/\/+/g;function mt(D,J){return typeof D=="object"&&D!==null&&D.key!=null?nt(""+D.key):J.toString(36)}function ct(D){switch(D.status){case"fulfilled":return D.value;case"rejected":throw D.reason;default:switch(typeof D.status=="string"?D.then(H,H):(D.status="pending",D.then(function(J){D.status==="pending"&&(D.status="fulfilled",D.value=J)},function(J){D.status==="pending"&&(D.status="rejected",D.reason=J)})),D.status){case"fulfilled":return D.value;case"rejected":throw D.reason}}throw D}function z(D,J,vt,At,Ft){var et=typeof D;(et==="undefined"||et==="boolean")&&(D=null);var lt=!1;if(D===null)lt=!0;else switch(et){case"bigint":case"string":case"number":lt=!0;break;case"object":switch(D.$$typeof){case r:case t:lt=!0;break;case v:return lt=D._init,z(lt(D._payload),J,vt,At,Ft)}}if(lt)return Ft=Ft(D),lt=At===""?"."+mt(D,0):At,F(Ft)?(vt="",lt!=null&&(vt=lt.replace(st,"$&/")+"/"),z(Ft,J,vt,"",function(Rt){return Rt})):Ft!=null&&(k(Ft)&&(Ft=w(Ft,vt+(Ft.key==null||D&&D.key===Ft.key?"":(""+Ft.key).replace(st,"$&/")+"/")+lt)),J.push(Ft)),1;lt=0;var wt=At===""?".":At+":";if(F(D))for(var Gt=0;Gt<D.length;Gt++)At=D[Gt],et=wt+mt(At,Gt),lt+=z(At,J,vt,et,Ft);else if(Gt=y(D),typeof Gt=="function")for(D=Gt.call(D),Gt=0;!(At=D.next()).done;)At=At.value,et=wt+mt(At,Gt++),lt+=z(At,J,vt,et,Ft);else if(et==="object"){if(typeof D.then=="function")return z(ct(D),J,vt,At,Ft);throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return lt}function O(D,J,vt){if(D==null)return D;var At=[],Ft=0;return z(D,At,"","",function(et){return J.call(vt,et,Ft++)}),At}function j(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(vt){(D._status===0||D._status===-1)&&(D._status=1,D._result=vt)},function(vt){(D._status===0||D._status===-1)&&(D._status=2,D._result=vt)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var dt=typeof reportError=="function"?reportError:function(D){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof D=="object"&&D!==null&&typeof D.message=="string"?String(D.message):String(D),error:D});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",D);return}console.error(D)},ft={map:O,forEach:function(D,J,vt){O(D,function(){J.apply(this,arguments)},vt)},count:function(D){var J=0;return O(D,function(){J++}),J},toArray:function(D){return O(D,function(J){return J})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}};return oe.Activity=g,oe.Children=ft,oe.Component=S,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=N,oe.StrictMode=s,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,oe.__COMPILER_RUNTIME={__proto__:null,c:function(D){return I.H.useMemoCache(D)}},oe.cache=function(D){return function(){return D.apply(null,arguments)}},oe.cacheSignal=function(){return null},oe.cloneElement=function(D,J,vt){if(D==null)throw Error("The argument must be a React element, but you passed "+D+".");var At=C({},D.props),Ft=D.key;if(J!=null)for(et in J.key!==void 0&&(Ft=""+J.key),J)!Q.call(J,et)||et==="key"||et==="__self"||et==="__source"||et==="ref"&&J.ref===void 0||(At[et]=J[et]);var et=arguments.length-2;if(et===1)At.children=vt;else if(1<et){for(var lt=Array(et),wt=0;wt<et;wt++)lt[wt]=arguments[wt+2];At.children=lt}return R(D.type,Ft,At)},oe.createContext=function(D){return D={$$typeof:f,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null},D.Provider=D,D.Consumer={$$typeof:u,_context:D},D},oe.createElement=function(D,J,vt){var At,Ft={},et=null;if(J!=null)for(At in J.key!==void 0&&(et=""+J.key),J)Q.call(J,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(Ft[At]=J[At]);var lt=arguments.length-2;if(lt===1)Ft.children=vt;else if(1<lt){for(var wt=Array(lt),Gt=0;Gt<lt;Gt++)wt[Gt]=arguments[Gt+2];Ft.children=wt}if(D&&D.defaultProps)for(At in lt=D.defaultProps,lt)Ft[At]===void 0&&(Ft[At]=lt[At]);return R(D,et,Ft)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(D){return{$$typeof:d,render:D}},oe.isValidElement=k,oe.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:j}},oe.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},oe.startTransition=function(D){var J=I.T,vt={};I.T=vt;try{var At=D(),Ft=I.S;Ft!==null&&Ft(vt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(H,dt)}catch(et){dt(et)}finally{J!==null&&vt.types!==null&&(J.types=vt.types),I.T=J}},oe.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},oe.use=function(D){return I.H.use(D)},oe.useActionState=function(D,J,vt){return I.H.useActionState(D,J,vt)},oe.useCallback=function(D,J){return I.H.useCallback(D,J)},oe.useContext=function(D){return I.H.useContext(D)},oe.useDebugValue=function(){},oe.useDeferredValue=function(D,J){return I.H.useDeferredValue(D,J)},oe.useEffect=function(D,J){return I.H.useEffect(D,J)},oe.useEffectEvent=function(D){return I.H.useEffectEvent(D)},oe.useId=function(){return I.H.useId()},oe.useImperativeHandle=function(D,J,vt){return I.H.useImperativeHandle(D,J,vt)},oe.useInsertionEffect=function(D,J){return I.H.useInsertionEffect(D,J)},oe.useLayoutEffect=function(D,J){return I.H.useLayoutEffect(D,J)},oe.useMemo=function(D,J){return I.H.useMemo(D,J)},oe.useOptimistic=function(D,J){return I.H.useOptimistic(D,J)},oe.useReducer=function(D,J,vt){return I.H.useReducer(D,J,vt)},oe.useRef=function(D){return I.H.useRef(D)},oe.useState=function(D){return I.H.useState(D)},oe.useSyncExternalStore=function(D,J,vt){return I.H.useSyncExternalStore(D,J,vt)},oe.useTransition=function(){return I.H.useTransition()},oe.version="19.2.4",oe}var Gg;function kd(){return Gg||(Gg=1,sh.exports=ZS()),sh.exports}var hn=kd(),rh={exports:{}},Oo={},oh={exports:{}},lh={};var Vg;function KS(){return Vg||(Vg=1,(function(r){function t(z,O){var j=z.length;z.push(O);t:for(;0<j;){var dt=j-1>>>1,ft=z[dt];if(0<l(ft,O))z[dt]=O,z[j]=ft,j=dt;else break t}}function i(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var O=z[0],j=z.pop();if(j!==O){z[0]=j;t:for(var dt=0,ft=z.length,D=ft>>>1;dt<D;){var J=2*(dt+1)-1,vt=z[J],At=J+1,Ft=z[At];if(0>l(vt,j))At<ft&&0>l(Ft,vt)?(z[dt]=Ft,z[At]=j,dt=At):(z[dt]=vt,z[J]=j,dt=J);else if(At<ft&&0>l(Ft,j))z[dt]=Ft,z[At]=j,dt=At;else break t}}return O}function l(z,O){var j=z.sortIndex-O.sortIndex;return j!==0?j:z.id-O.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;r.unstable_now=function(){return u.now()}}else{var f=Date,d=f.now();r.unstable_now=function(){return f.now()-d}}var m=[],p=[],v=1,g=null,x=3,y=!1,b=!1,C=!1,M=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;function U(z){for(var O=i(p);O!==null;){if(O.callback===null)s(p);else if(O.startTime<=z)s(p),O.sortIndex=O.expirationTime,t(m,O);else break;O=i(p)}}function F(z){if(C=!1,U(z),!b)if(i(m)!==null)b=!0,H||(H=!0,nt());else{var O=i(p);O!==null&&ct(F,O.startTime-z)}}var H=!1,I=-1,Q=5,R=-1;function w(){return M?!0:!(r.unstable_now()-R<Q)}function k(){if(M=!1,H){var z=r.unstable_now();R=z;var O=!0;try{t:{b=!1,C&&(C=!1,P(I),I=-1),y=!0;var j=x;try{e:{for(U(z),g=i(m);g!==null&&!(g.expirationTime>z&&w());){var dt=g.callback;if(typeof dt=="function"){g.callback=null,x=g.priorityLevel;var ft=dt(g.expirationTime<=z);if(z=r.unstable_now(),typeof ft=="function"){g.callback=ft,U(z),O=!0;break e}g===i(m)&&s(m),U(z)}else s(m);g=i(m)}if(g!==null)O=!0;else{var D=i(p);D!==null&&ct(F,D.startTime-z),O=!1}}break t}finally{g=null,x=j,y=!1}O=void 0}}finally{O?nt():H=!1}}}var nt;if(typeof N=="function")nt=function(){N(k)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,mt=st.port2;st.port1.onmessage=k,nt=function(){mt.postMessage(null)}}else nt=function(){S(k,0)};function ct(z,O){I=S(function(){z(r.unstable_now())},O)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return x},r.unstable_next=function(z){switch(x){case 1:case 2:case 3:var O=3;break;default:O=x}var j=x;x=O;try{return z()}finally{x=j}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(z,O){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var j=x;x=z;try{return O()}finally{x=j}},r.unstable_scheduleCallback=function(z,O,j){var dt=r.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?dt+j:dt):j=dt,z){case 1:var ft=-1;break;case 2:ft=250;break;case 5:ft=1073741823;break;case 4:ft=1e4;break;default:ft=5e3}return ft=j+ft,z={id:v++,callback:O,priorityLevel:z,startTime:j,expirationTime:ft,sortIndex:-1},j>dt?(z.sortIndex=j,t(p,z),i(m)===null&&z===i(p)&&(C?(P(I),I=-1):C=!0,ct(F,j-dt))):(z.sortIndex=ft,t(m,z),b||y||(b=!0,H||(H=!0,nt()))),z},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(z){var O=x;return function(){var j=x;x=O;try{return z.apply(this,arguments)}finally{x=j}}}})(lh)),lh}var kg;function QS(){return kg||(kg=1,oh.exports=KS()),oh.exports}var uh={exports:{}},Un={};var Xg;function JS(){if(Xg)return Un;Xg=1;var r=kd();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)p+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,v){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:v}}var f=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Un.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Un.createPortal=function(m,p){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,v)},Un.flushSync=function(m){var p=f.T,v=s.p;try{if(f.T=null,s.p=2,m)return m()}finally{f.T=p,s.p=v,s.d.f()}},Un.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,s.d.C(m,p))},Un.prefetchDNS=function(m){typeof m=="string"&&s.d.D(m)},Un.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,y=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;v==="style"?s.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:y}):v==="script"&&s.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:y,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Un.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var v=d(p.as,p.crossOrigin);s.d.M(m,{crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&s.d.M(m)},Un.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var v=p.as,g=d(v,p.crossOrigin);s.d.L(m,v,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Un.preloadModule=function(m,p){if(typeof m=="string")if(p){var v=d(p.as,p.crossOrigin);s.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:v,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else s.d.m(m)},Un.requestFormReset=function(m){s.d.r(m)},Un.unstable_batchedUpdates=function(m,p){return m(p)},Un.useFormState=function(m,p,v){return f.H.useFormState(m,p,v)},Un.useFormStatus=function(){return f.H.useHostTransitionStatus()},Un.version="19.2.4",Un}var Wg;function $S(){if(Wg)return uh.exports;Wg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),uh.exports=JS(),uh.exports}var qg;function ty(){if(qg)return Oo;qg=1;var r=QS(),t=kd(),i=$S();function s(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function u(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function f(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function d(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(u(e)!==e)throw Error(s(188))}function p(e){var n=e.alternate;if(!n){if(n=u(e),n===null)throw Error(s(188));return n!==e?null:e}for(var a=e,o=n;;){var c=a.return;if(c===null)break;var h=c.alternate;if(h===null){if(o=c.return,o!==null){a=o;continue}break}if(c.child===h.child){for(h=c.child;h;){if(h===a)return m(c),e;if(h===o)return m(c),n;h=h.sibling}throw Error(s(188))}if(a.return!==o.return)a=c,o=h;else{for(var _=!1,T=c.child;T;){if(T===a){_=!0,a=c,o=h;break}if(T===o){_=!0,o=c,a=h;break}T=T.sibling}if(!_){for(T=h.child;T;){if(T===a){_=!0,a=h,o=c;break}if(T===o){_=!0,o=h,a=c;break}T=T.sibling}if(!_)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?e:n}function v(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=v(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,x=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),b=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),S=Symbol.for("react.profiler"),P=Symbol.for("react.consumer"),N=Symbol.for("react.context"),U=Symbol.for("react.forward_ref"),F=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),R=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function nt(e){return e===null||typeof e!="object"?null:(e=k&&e[k]||e["@@iterator"],typeof e=="function"?e:null)}var st=Symbol.for("react.client.reference");function mt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===st?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case C:return"Fragment";case S:return"Profiler";case M:return"StrictMode";case F:return"Suspense";case H:return"SuspenseList";case R:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case b:return"Portal";case N:return e.displayName||"Context";case P:return(e._context.displayName||"Context")+".Consumer";case U:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return n=e.displayName||null,n!==null?n:mt(e.type)||"Memo";case Q:n=e._payload,e=e._init;try{return mt(e(n))}catch{}}return null}var ct=Array.isArray,z=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,j={pending:!1,data:null,method:null,action:null},dt=[],ft=-1;function D(e){return{current:e}}function J(e){0>ft||(e.current=dt[ft],dt[ft]=null,ft--)}function vt(e,n){ft++,dt[ft]=e.current,e.current=n}var At=D(null),Ft=D(null),et=D(null),lt=D(null);function wt(e,n){switch(vt(et,n),vt(Ft,e),vt(At,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?og(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=og(n),e=lg(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(At),vt(At,e)}function Gt(){J(At),J(Ft),J(et)}function Rt(e){e.memoizedState!==null&&vt(lt,e);var n=At.current,a=lg(n,e.type);n!==a&&(vt(Ft,e),vt(At,a))}function pe(e){Ft.current===e&&(J(At),J(Ft)),lt.current===e&&(J(lt),wo._currentValue=j)}var Ye,ie;function me(e){if(Ye===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Ye=n&&n[1]||"",ie=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ye+e+ie}var Ce=!1;function le(e,n){if(!e||Ce)return"";Ce=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ot){var at=ot}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ot){at=ot}e.call(_t.prototype)}}else{try{throw Error()}catch(ot){at=ot}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ot){if(ot&&at&&typeof ot.stack=="string")return[ot.stack,at.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var h=o.DetermineComponentFrameRoot(),_=h[0],T=h[1];if(_&&T){var B=_.split(`
`),tt=T.split(`
`);for(c=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;c<tt.length&&!tt[c].includes("DetermineComponentFrameRoot");)c++;if(o===B.length||c===tt.length)for(o=B.length-1,c=tt.length-1;1<=o&&0<=c&&B[o]!==tt[c];)c--;for(;1<=o&&0<=c;o--,c--)if(B[o]!==tt[c]){if(o!==1||c!==1)do if(o--,c--,0>c||B[o]!==tt[c]){var ht=`
`+B[o].replace(" at new "," at ");return e.displayName&&ht.includes("<anonymous>")&&(ht=ht.replace("<anonymous>",e.displayName)),ht}while(1<=o&&0<=c);break}}}finally{Ce=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?me(a):""}function $e(e,n){switch(e.tag){case 26:case 27:case 5:return me(e.type);case 16:return me("Lazy");case 13:return e.child!==n&&n!==null?me("Suspense Fallback"):me("Suspense");case 19:return me("SuspenseList");case 0:case 15:return le(e.type,!1);case 11:return le(e.type.render,!1);case 1:return le(e.type,!0);case 31:return me("Activity");default:return""}}function G(e){try{var n="",a=null;do n+=$e(e,a),a=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var je=Object.prototype.hasOwnProperty,Me=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,Yt=r.unstable_shouldYield,L=r.unstable_requestPaint,E=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ut=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,Dt=r.unstable_IdlePriority,Xt=r.log,ne=r.unstable_setDisableYieldValue,Et=null,bt=null;function Bt(e){if(typeof Xt=="function"&&ne(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var zt=Math.clz32?Math.clz32:X,Ut=Math.log,ce=Math.LN2;function X(e){return e>>>=0,e===0?32:31-(Ut(e)/ce|0)|0}var Lt=256,Tt=262144,It=4194304;function Mt(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function xt(e,n,a){var o=e.pendingLanes;if(o===0)return 0;var c=0,h=e.suspendedLanes,_=e.pingedLanes;e=e.warmLanes;var T=o&134217727;return T!==0?(o=T&~h,o!==0?c=Mt(o):(_&=T,_!==0?c=Mt(_):a||(a=T&~e,a!==0&&(c=Mt(a))))):(T=o&~h,T!==0?c=Mt(T):_!==0?c=Mt(_):a||(a=o&~e,a!==0&&(c=Mt(a)))),c===0?0:n!==0&&n!==c&&(n&h)===0&&(h=c&-c,a=n&-n,h>=a||h===32&&(a&4194048)!==0)?n:c}function Ct(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function ae(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pe(){var e=It;return It<<=1,(It&62914560)===0&&(It=4194304),e}function Ee(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function Dn(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function vi(e,n,a,o,c,h){var _=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var T=e.entanglements,B=e.expirationTimes,tt=e.hiddenUpdates;for(a=_&~a;0<a;){var ht=31-zt(a),_t=1<<ht;T[ht]=0,B[ht]=-1;var at=tt[ht];if(at!==null)for(tt[ht]=null,ht=0;ht<at.length;ht++){var ot=at[ht];ot!==null&&(ot.lane&=-536870913)}a&=~_t}o!==0&&sl(e,o,0),h!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=h&~(_&~n))}function sl(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-zt(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|a&261930}function Hr(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var o=31-zt(a),c=1<<o;c&n|e[o]&n&&(e[o]|=n),a&=~c}}function Ls(e,n){var a=n&-n;return a=(a&42)!==0?1:Gr(a),(a&(e.suspendedLanes|n))!==0?0:a}function Gr(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Os(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Vr(){var e=O.p;return e!==0?e:(e=window.event,e===void 0?32:Ug(e.type))}function Ci(e,n){var a=O.p;try{return O.p=e,n()}finally{O.p=a}}var ai=Math.random().toString(36).slice(2),rn="__reactFiber$"+ai,xn="__reactProps$"+ai,_i="__reactContainer$"+ai,Ps="__reactEvents$"+ai,zs="__reactListeners$"+ai,rl="__reactHandles$"+ai,kr="__reactResources$"+ai,ns="__reactMarker$"+ai;function Xr(e){delete e[rn],delete e[xn],delete e[Ps],delete e[zs],delete e[rl]}function ya(e){var n=e[rn];if(n)return n;for(var a=e.parentNode;a;){if(n=a[_i]||a[rn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=mg(e);e!==null;){if(a=e[rn])return a;e=mg(e)}return n}e=a,a=e.parentNode}return null}function Ma(e){if(e=e[rn]||e[_i]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function is(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(s(33))}function Ea(e){var n=e[kr];return n||(n=e[kr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(e){e[ns]=!0}var q=new Set,rt={};function it(e,n){Z(e,n),Z(e+"Capture",n)}function Z(e,n){for(rt[e]=n,e=0;e<n.length;e++)q.add(n[e])}var Nt=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ht={},Ot={};function Vt(e){return je.call(Ot,e)?!0:je.call(Ht,e)?!1:Nt.test(e)?Ot[e]=!0:(Ht[e]=!0,!1)}function Wt(e,n,a){if(Vt(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function $t(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function qt(e,n,a,o){if(o===null)e.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+o)}}function te(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function we(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Ze(e,n,a){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var c=o.get,h=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(_){a=""+_,h.call(this,_)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function Xe(e){if(!e._valueTracker){var n=we(e)?"checked":"value";e._valueTracker=Ze(e,n,""+e[n])}}function Le(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return e&&(o=we(e)?e.checked?"true":"false":e.value),e=o,e!==a?(n.setValue(e),!0):!1}function Kt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var De=/[\n"\\]/g;function se(e){return e.replace(De,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Sn(e,n,a,o,c,h,_,T){e.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?e.type=_:e.removeAttribute("type"),n!=null?_==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+te(n)):e.value!==""+te(n)&&(e.value=""+te(n)):_!=="submit"&&_!=="reset"||e.removeAttribute("value"),n!=null?yn(e,_,te(n)):a!=null?yn(e,_,te(a)):o!=null&&e.removeAttribute("value"),c==null&&h!=null&&(e.defaultChecked=!!h),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?e.name=""+te(T):e.removeAttribute("name")}function qi(e,n,a,o,c,h,_,T){if(h!=null&&typeof h!="function"&&typeof h!="symbol"&&typeof h!="boolean"&&(e.type=h),n!=null||a!=null){if(!(h!=="submit"&&h!=="reset"||n!=null)){Xe(e);return}a=a!=null?""+te(a):"",n=n!=null?""+te(n):a,T||n===e.value||(e.value=n),e.defaultValue=n}o=o??c,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=T?e.checked:!!o,e.defaultChecked=!!o,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(e.name=_),Xe(e)}function yn(e,n,a){n==="number"&&Kt(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function si(e,n,a,o){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&o&&(e[a].defaultSelected=!0)}else{for(a=""+te(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,o&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function ze(e,n,a){if(n!=null&&(n=""+te(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+te(a):""}function Mn(e,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(ct(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=te(n),e.defaultValue=a,o=e.textContent,o===a&&o!==""&&o!==null&&(e.value=o),Xe(e)}function dn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var En=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bn(e,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,a):typeof a!="number"||a===0||En.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function Is(e,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(e=e.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var c in n)o=n[c],n.hasOwnProperty(c)&&a[c]!==o&&bn(e,c,o)}else for(var h in n)n.hasOwnProperty(h)&&bn(e,h,n[h])}function xi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var k_=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),X_=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ol(e){return X_.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Yi(){}var tc=null;function ec(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Fs=null,Bs=null;function rp(e){var n=Ma(e);if(n&&(e=n.stateNode)){var a=e[xn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Sn(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+se(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==e&&o.form===e.form){var c=o[xn]||null;if(!c)throw Error(s(90));Sn(o,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===e.form&&Le(o)}break t;case"textarea":ze(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&si(e,!!a.multiple,n,!1)}}}var nc=!1;function op(e,n,a){if(nc)return e(n,a);nc=!0;try{var o=e(n);return o}finally{if(nc=!1,(Fs!==null||Bs!==null)&&(jl(),Fs&&(n=Fs,e=Bs,Bs=Fs=null,rp(n),e)))for(n=0;n<e.length;n++)rp(e[n])}}function Wr(e,n){var a=e.stateNode;if(a===null)return null;var o=a[xn]||null;if(o===null)return null;a=o[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ji=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ic=!1;if(ji)try{var qr={};Object.defineProperty(qr,"passive",{get:function(){ic=!0}}),window.addEventListener("test",qr,qr),window.removeEventListener("test",qr,qr)}catch{ic=!1}var ba=null,ac=null,ll=null;function lp(){if(ll)return ll;var e,n=ac,a=n.length,o,c="value"in ba?ba.value:ba.textContent,h=c.length;for(e=0;e<a&&n[e]===c[e];e++);var _=a-e;for(o=1;o<=_&&n[a-o]===c[h-o];o++);return ll=c.slice(e,1<o?1-o:void 0)}function ul(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function cl(){return!0}function up(){return!1}function Fn(e){function n(a,o,c,h,_){this._reactName=a,this._targetInst=c,this.type=o,this.nativeEvent=h,this.target=_,this.currentTarget=null;for(var T in e)e.hasOwnProperty(T)&&(a=e[T],this[T]=a?a(h):h[T]);return this.isDefaultPrevented=(h.defaultPrevented!=null?h.defaultPrevented:h.returnValue===!1)?cl:up,this.isPropagationStopped=up,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=cl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=cl)},persist:function(){},isPersistent:cl}),n}var as={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fl=Fn(as),Yr=g({},as,{view:0,detail:0}),W_=Fn(Yr),sc,rc,jr,hl=g({},Yr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==jr&&(jr&&e.type==="mousemove"?(sc=e.screenX-jr.screenX,rc=e.screenY-jr.screenY):rc=sc=0,jr=e),sc)},movementY:function(e){return"movementY"in e?e.movementY:rc}}),cp=Fn(hl),q_=g({},hl,{dataTransfer:0}),Y_=Fn(q_),j_=g({},Yr,{relatedTarget:0}),oc=Fn(j_),Z_=g({},as,{animationName:0,elapsedTime:0,pseudoElement:0}),K_=Fn(Z_),Q_=g({},as,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),J_=Fn(Q_),$_=g({},as,{data:0}),fp=Fn($_),tx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ix(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=nx[e])?!!n[e]:!1}function lc(){return ix}var ax=g({},Yr,{key:function(e){if(e.key){var n=tx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=ul(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ex[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(e){return e.type==="keypress"?ul(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ul(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),sx=Fn(ax),rx=g({},hl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hp=Fn(rx),ox=g({},Yr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),lx=Fn(ox),ux=g({},as,{propertyName:0,elapsedTime:0,pseudoElement:0}),cx=Fn(ux),fx=g({},hl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),hx=Fn(fx),dx=g({},as,{newState:0,oldState:0}),px=Fn(dx),mx=[9,13,27,32],uc=ji&&"CompositionEvent"in window,Zr=null;ji&&"documentMode"in document&&(Zr=document.documentMode);var gx=ji&&"TextEvent"in window&&!Zr,dp=ji&&(!uc||Zr&&8<Zr&&11>=Zr),pp=" ",mp=!1;function gp(e,n){switch(e){case"keyup":return mx.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Hs=!1;function vx(e,n){switch(e){case"compositionend":return vp(n);case"keypress":return n.which!==32?null:(mp=!0,pp);case"textInput":return e=n.data,e===pp&&mp?null:e;default:return null}}function _x(e,n){if(Hs)return e==="compositionend"||!uc&&gp(e,n)?(e=lp(),ll=ac=ba=null,Hs=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dp&&n.locale!=="ko"?null:n.data;default:return null}}var xx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function _p(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!xx[e.type]:n==="textarea"}function xp(e,n,a,o){Fs?Bs?Bs.push(o):Bs=[o]:Fs=o,n=eu(n,"onChange"),0<n.length&&(a=new fl("onChange","change",null,a,o),e.push({event:a,listeners:n}))}var Kr=null,Qr=null;function Sx(e){eg(e,0)}function dl(e){var n=is(e);if(Le(n))return e}function Sp(e,n){if(e==="change")return n}var yp=!1;if(ji){var cc;if(ji){var fc="oninput"in document;if(!fc){var Mp=document.createElement("div");Mp.setAttribute("oninput","return;"),fc=typeof Mp.oninput=="function"}cc=fc}else cc=!1;yp=cc&&(!document.documentMode||9<document.documentMode)}function Ep(){Kr&&(Kr.detachEvent("onpropertychange",bp),Qr=Kr=null)}function bp(e){if(e.propertyName==="value"&&dl(Qr)){var n=[];xp(n,Qr,e,ec(e)),op(Sx,n)}}function yx(e,n,a){e==="focusin"?(Ep(),Kr=n,Qr=a,Kr.attachEvent("onpropertychange",bp)):e==="focusout"&&Ep()}function Mx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return dl(Qr)}function Ex(e,n){if(e==="click")return dl(n)}function bx(e,n){if(e==="input"||e==="change")return dl(n)}function Tx(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Yn=typeof Object.is=="function"?Object.is:Tx;function Jr(e,n){if(Yn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var c=a[o];if(!je.call(n,c)||!Yn(e[c],n[c]))return!1}return!0}function Tp(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ap(e,n){var a=Tp(e);e=0;for(var o;a;){if(a.nodeType===3){if(o=e+a.textContent.length,e<=n&&o>=n)return{node:a,offset:n-e};e=o}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Tp(a)}}function Rp(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?Rp(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Cp(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=Kt(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=Kt(e.document)}return n}function hc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var Ax=ji&&"documentMode"in document&&11>=document.documentMode,Gs=null,dc=null,$r=null,pc=!1;function wp(e,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||Gs==null||Gs!==Kt(o)||(o=Gs,"selectionStart"in o&&hc(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),$r&&Jr($r,o)||($r=o,o=eu(dc,"onSelect"),0<o.length&&(n=new fl("onSelect","select",null,n,a),e.push({event:n,listeners:o}),n.target=Gs)))}function ss(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Vs={animationend:ss("Animation","AnimationEnd"),animationiteration:ss("Animation","AnimationIteration"),animationstart:ss("Animation","AnimationStart"),transitionrun:ss("Transition","TransitionRun"),transitionstart:ss("Transition","TransitionStart"),transitioncancel:ss("Transition","TransitionCancel"),transitionend:ss("Transition","TransitionEnd")},mc={},Dp={};ji&&(Dp=document.createElement("div").style,"AnimationEvent"in window||(delete Vs.animationend.animation,delete Vs.animationiteration.animation,delete Vs.animationstart.animation),"TransitionEvent"in window||delete Vs.transitionend.transition);function rs(e){if(mc[e])return mc[e];if(!Vs[e])return e;var n=Vs[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dp)return mc[e]=n[a];return e}var Up=rs("animationend"),Np=rs("animationiteration"),Lp=rs("animationstart"),Rx=rs("transitionrun"),Cx=rs("transitionstart"),wx=rs("transitioncancel"),Op=rs("transitionend"),Pp=new Map,gc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");gc.push("scrollEnd");function Si(e,n){Pp.set(e,n),it(n,[e])}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ri=[],ks=0,vc=0;function ml(){for(var e=ks,n=vc=ks=0;n<e;){var a=ri[n];ri[n++]=null;var o=ri[n];ri[n++]=null;var c=ri[n];ri[n++]=null;var h=ri[n];if(ri[n++]=null,o!==null&&c!==null){var _=o.pending;_===null?c.next=c:(c.next=_.next,_.next=c),o.pending=c}h!==0&&zp(a,c,h)}}function gl(e,n,a,o){ri[ks++]=e,ri[ks++]=n,ri[ks++]=a,ri[ks++]=o,vc|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function _c(e,n,a,o){return gl(e,n,a,o),vl(e)}function os(e,n){return gl(e,null,null,n),vl(e)}function zp(e,n,a){e.lanes|=a;var o=e.alternate;o!==null&&(o.lanes|=a);for(var c=!1,h=e.return;h!==null;)h.childLanes|=a,o=h.alternate,o!==null&&(o.childLanes|=a),h.tag===22&&(e=h.stateNode,e===null||e._visibility&1||(c=!0)),e=h,h=h.return;return e.tag===3?(h=e.stateNode,c&&n!==null&&(c=31-zt(a),e=h.hiddenUpdates,o=e[c],o===null?e[c]=[n]:o.push(n),n.lane=a|536870912),h):null}function vl(e){if(50<Mo)throw Mo=0,Cf=null,Error(s(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Xs={};function Dx(e,n,a,o){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function jn(e,n,a,o){return new Dx(e,n,a,o)}function xc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zi(e,n){var a=e.alternate;return a===null?(a=jn(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Ip(e,n){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function _l(e,n,a,o,c,h){var _=0;if(o=e,typeof e=="function")xc(e)&&(_=1);else if(typeof e=="string")_=PS(e,a,At.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case R:return e=jn(31,a,n,c),e.elementType=R,e.lanes=h,e;case C:return ls(a.children,c,h,n);case M:_=8,c|=24;break;case S:return e=jn(12,a,n,c|2),e.elementType=S,e.lanes=h,e;case F:return e=jn(13,a,n,c),e.elementType=F,e.lanes=h,e;case H:return e=jn(19,a,n,c),e.elementType=H,e.lanes=h,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case N:_=10;break t;case P:_=9;break t;case U:_=11;break t;case I:_=14;break t;case Q:_=16,o=null;break t}_=29,a=Error(s(130,e===null?"null":typeof e,"")),o=null}return n=jn(_,a,n,c),n.elementType=e,n.type=o,n.lanes=h,n}function ls(e,n,a,o){return e=jn(7,e,o,n),e.lanes=a,e}function Sc(e,n,a){return e=jn(6,e,null,n),e.lanes=a,e}function Fp(e){var n=jn(18,null,null,0);return n.stateNode=e,n}function yc(e,n,a){return n=jn(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Bp=new WeakMap;function oi(e,n){if(typeof e=="object"&&e!==null){var a=Bp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:G(n)},Bp.set(e,n),n)}return{value:e,source:n,stack:G(n)}}var Ws=[],qs=0,xl=null,to=0,li=[],ui=0,Ta=null,wi=1,Di="";function Ki(e,n){Ws[qs++]=to,Ws[qs++]=xl,xl=e,to=n}function Hp(e,n,a){li[ui++]=wi,li[ui++]=Di,li[ui++]=Ta,Ta=e;var o=wi;e=Di;var c=32-zt(o)-1;o&=~(1<<c),a+=1;var h=32-zt(n)+c;if(30<h){var _=c-c%5;h=(o&(1<<_)-1).toString(32),o>>=_,c-=_,wi=1<<32-zt(n)+c|a<<c|o,Di=h+e}else wi=1<<h|a<<c|o,Di=e}function Mc(e){e.return!==null&&(Ki(e,1),Hp(e,1,0))}function Ec(e){for(;e===xl;)xl=Ws[--qs],Ws[qs]=null,to=Ws[--qs],Ws[qs]=null;for(;e===Ta;)Ta=li[--ui],li[ui]=null,Di=li[--ui],li[ui]=null,wi=li[--ui],li[ui]=null}function Gp(e,n){li[ui++]=wi,li[ui++]=Di,li[ui++]=Ta,wi=n.id,Di=n.overflow,Ta=e}var Tn=null,We=null,ye=!1,Aa=null,ci=!1,bc=Error(s(519));function Ra(e){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw eo(oi(n,e)),bc}function Vp(e){var n=e.stateNode,a=e.type,o=e.memoizedProps;switch(n[rn]=e,n[xn]=o,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<bo.length;a++)ve(bo[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),qi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),Mn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||sg(n.textContent,a)?(o.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),o.onScroll!=null&&ve("scroll",n),o.onScrollEnd!=null&&ve("scrollend",n),o.onClick!=null&&(n.onclick=Yi),n=!0):n=!1,n||Ra(e,!0)}function kp(e){for(Tn=e.return;Tn;)switch(Tn.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:Tn=Tn.return}}function Ys(e){if(e!==Tn)return!1;if(!ye)return kp(e),ye=!0,!1;var n=e.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||kf(e.type,e.memoizedProps)),a=!a),a&&We&&Ra(e),kp(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=pg(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));We=pg(e)}else n===27?(n=We,Ga(e.type)?(e=jf,jf=null,We=e):We=n):We=Tn?hi(e.stateNode.nextSibling):null;return!0}function us(){We=Tn=null,ye=!1}function Tc(){var e=Aa;return e!==null&&(Vn===null?Vn=e:Vn.push.apply(Vn,e),Aa=null),e}function eo(e){Aa===null?Aa=[e]:Aa.push(e)}var Ac=D(null),cs=null,Qi=null;function Ca(e,n,a){vt(Ac,n._currentValue),n._currentValue=a}function Ji(e){e._currentValue=Ac.current,J(Ac)}function Rc(e,n,a){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===a)break;e=e.return}}function Cc(e,n,a,o){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var h=c.dependencies;if(h!==null){var _=c.child;h=h.firstContext;t:for(;h!==null;){var T=h;h=c;for(var B=0;B<n.length;B++)if(T.context===n[B]){h.lanes|=a,T=h.alternate,T!==null&&(T.lanes|=a),Rc(h.return,a,e),o||(_=null);break t}h=T.next}}else if(c.tag===18){if(_=c.return,_===null)throw Error(s(341));_.lanes|=a,h=_.alternate,h!==null&&(h.lanes|=a),Rc(_,a,e),_=null}else _=c.child;if(_!==null)_.return=c;else for(_=c;_!==null;){if(_===e){_=null;break}if(c=_.sibling,c!==null){c.return=_.return,_=c;break}_=_.return}c=_}}function js(e,n,a,o){e=null;for(var c=n,h=!1;c!==null;){if(!h){if((c.flags&524288)!==0)h=!0;else if((c.flags&262144)!==0)break}if(c.tag===10){var _=c.alternate;if(_===null)throw Error(s(387));if(_=_.memoizedProps,_!==null){var T=c.type;Yn(c.pendingProps.value,_.value)||(e!==null?e.push(T):e=[T])}}else if(c===lt.current){if(_=c.alternate,_===null)throw Error(s(387));_.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(wo):e=[wo])}c=c.return}e!==null&&Cc(n,e,a,o),n.flags|=262144}function Sl(e){for(e=e.firstContext;e!==null;){if(!Yn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function fs(e){cs=e,Qi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function An(e){return Xp(cs,e)}function yl(e,n){return cs===null&&fs(e),Xp(e,n)}function Xp(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Qi===null){if(e===null)throw Error(s(308));Qi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Qi=Qi.next=n;return a}var Ux=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},Nx=r.unstable_scheduleCallback,Lx=r.unstable_NormalPriority,on={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function wc(){return{controller:new Ux,data:new Map,refCount:0}}function no(e){e.refCount--,e.refCount===0&&Nx(Lx,function(){e.controller.abort()})}var io=null,Dc=0,Zs=0,Ks=null;function Ox(e,n){if(io===null){var a=io=[];Dc=0,Zs=Of(),Ks={status:"pending",value:void 0,then:function(o){a.push(o)}}}return Dc++,n.then(Wp,Wp),n}function Wp(){if(--Dc===0&&io!==null){Ks!==null&&(Ks.status="fulfilled");var e=io;io=null,Zs=0,Ks=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function Px(e,n){var a=[],o={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(o.status="rejected",o.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),o}var qp=z.S;z.S=function(e,n){w0=E(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Ox(e,n),qp!==null&&qp(e,n)};var hs=D(null);function Uc(){var e=hs.current;return e!==null?e:ke.pooledCache}function Ml(e,n){n===null?vt(hs,hs.current):vt(hs,n.pool)}function Yp(){var e=Uc();return e===null?null:{parent:on._currentValue,pool:e}}var Qs=Error(s(460)),Nc=Error(s(474)),El=Error(s(542)),bl={then:function(){}};function jp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(Yi,Yi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e;default:if(typeof n.status=="string")n.then(Yi,Yi);else{if(e=ke,e!==null&&100<e.shellSuspendCounter)throw Error(s(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=o}},function(o){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,Qp(e),e}throw ps=n,Qs}}function ds(e){try{var n=e._init;return n(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ps=a,Qs):a}}var ps=null;function Kp(){if(ps===null)throw Error(s(459));var e=ps;return ps=null,e}function Qp(e){if(e===Qs||e===El)throw Error(s(483))}var Js=null,ao=0;function Tl(e){var n=ao;return ao+=1,Js===null&&(Js=[]),Zp(Js,e,n)}function so(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Al(e,n){throw n.$$typeof===x?Error(s(525)):(e=Object.prototype.toString.call(n),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function Jp(e){function n(Y,V){if(e){var $=Y.deletions;$===null?(Y.deletions=[V],Y.flags|=16):$.push(V)}}function a(Y,V){if(!e)return null;for(;V!==null;)n(Y,V),V=V.sibling;return null}function o(Y){for(var V=new Map;Y!==null;)Y.key!==null?V.set(Y.key,Y):V.set(Y.index,Y),Y=Y.sibling;return V}function c(Y,V){return Y=Zi(Y,V),Y.index=0,Y.sibling=null,Y}function h(Y,V,$){return Y.index=$,e?($=Y.alternate,$!==null?($=$.index,$<V?(Y.flags|=67108866,V):$):(Y.flags|=67108866,V)):(Y.flags|=1048576,V)}function _(Y){return e&&Y.alternate===null&&(Y.flags|=67108866),Y}function T(Y,V,$,gt){return V===null||V.tag!==6?(V=Sc($,Y.mode,gt),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function B(Y,V,$,gt){var Jt=$.type;return Jt===C?ht(Y,V,$.props.children,gt,$.key):V!==null&&(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&ds(Jt)===V.type)?(V=c(V,$.props),so(V,$),V.return=Y,V):(V=_l($.type,$.key,$.props,null,Y.mode,gt),so(V,$),V.return=Y,V)}function tt(Y,V,$,gt){return V===null||V.tag!==4||V.stateNode.containerInfo!==$.containerInfo||V.stateNode.implementation!==$.implementation?(V=yc($,Y.mode,gt),V.return=Y,V):(V=c(V,$.children||[]),V.return=Y,V)}function ht(Y,V,$,gt,Jt){return V===null||V.tag!==7?(V=ls($,Y.mode,gt,Jt),V.return=Y,V):(V=c(V,$),V.return=Y,V)}function _t(Y,V,$){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Sc(""+V,Y.mode,$),V.return=Y,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return $=_l(V.type,V.key,V.props,null,Y.mode,$),so($,V),$.return=Y,$;case b:return V=yc(V,Y.mode,$),V.return=Y,V;case Q:return V=ds(V),_t(Y,V,$)}if(ct(V)||nt(V))return V=ls(V,Y.mode,$,null),V.return=Y,V;if(typeof V.then=="function")return _t(Y,Tl(V),$);if(V.$$typeof===N)return _t(Y,yl(Y,V),$);Al(Y,V)}return null}function at(Y,V,$,gt){var Jt=V!==null?V.key:null;if(typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint")return Jt!==null?null:T(Y,V,""+$,gt);if(typeof $=="object"&&$!==null){switch($.$$typeof){case y:return $.key===Jt?B(Y,V,$,gt):null;case b:return $.key===Jt?tt(Y,V,$,gt):null;case Q:return $=ds($),at(Y,V,$,gt)}if(ct($)||nt($))return Jt!==null?null:ht(Y,V,$,gt,null);if(typeof $.then=="function")return at(Y,V,Tl($),gt);if($.$$typeof===N)return at(Y,V,yl(Y,$),gt);Al(Y,$)}return null}function ot(Y,V,$,gt,Jt){if(typeof gt=="string"&&gt!==""||typeof gt=="number"||typeof gt=="bigint")return Y=Y.get($)||null,T(V,Y,""+gt,Jt);if(typeof gt=="object"&&gt!==null){switch(gt.$$typeof){case y:return Y=Y.get(gt.key===null?$:gt.key)||null,B(V,Y,gt,Jt);case b:return Y=Y.get(gt.key===null?$:gt.key)||null,tt(V,Y,gt,Jt);case Q:return gt=ds(gt),ot(Y,V,$,gt,Jt)}if(ct(gt)||nt(gt))return Y=Y.get($)||null,ht(V,Y,gt,Jt,null);if(typeof gt.then=="function")return ot(Y,V,$,Tl(gt),Jt);if(gt.$$typeof===N)return ot(Y,V,$,yl(V,gt),Jt);Al(V,gt)}return null}function kt(Y,V,$,gt){for(var Jt=null,Te=null,jt=V,fe=V=0,Se=null;jt!==null&&fe<$.length;fe++){jt.index>fe?(Se=jt,jt=null):Se=jt.sibling;var Ae=at(Y,jt,$[fe],gt);if(Ae===null){jt===null&&(jt=Se);break}e&&jt&&Ae.alternate===null&&n(Y,jt),V=h(Ae,V,fe),Te===null?Jt=Ae:Te.sibling=Ae,Te=Ae,jt=Se}if(fe===$.length)return a(Y,jt),ye&&Ki(Y,fe),Jt;if(jt===null){for(;fe<$.length;fe++)jt=_t(Y,$[fe],gt),jt!==null&&(V=h(jt,V,fe),Te===null?Jt=jt:Te.sibling=jt,Te=jt);return ye&&Ki(Y,fe),Jt}for(jt=o(jt);fe<$.length;fe++)Se=ot(jt,Y,fe,$[fe],gt),Se!==null&&(e&&Se.alternate!==null&&jt.delete(Se.key===null?fe:Se.key),V=h(Se,V,fe),Te===null?Jt=Se:Te.sibling=Se,Te=Se);return e&&jt.forEach(function(qa){return n(Y,qa)}),ye&&Ki(Y,fe),Jt}function ee(Y,V,$,gt){if($==null)throw Error(s(151));for(var Jt=null,Te=null,jt=V,fe=V=0,Se=null,Ae=$.next();jt!==null&&!Ae.done;fe++,Ae=$.next()){jt.index>fe?(Se=jt,jt=null):Se=jt.sibling;var qa=at(Y,jt,Ae.value,gt);if(qa===null){jt===null&&(jt=Se);break}e&&jt&&qa.alternate===null&&n(Y,jt),V=h(qa,V,fe),Te===null?Jt=qa:Te.sibling=qa,Te=qa,jt=Se}if(Ae.done)return a(Y,jt),ye&&Ki(Y,fe),Jt;if(jt===null){for(;!Ae.done;fe++,Ae=$.next())Ae=_t(Y,Ae.value,gt),Ae!==null&&(V=h(Ae,V,fe),Te===null?Jt=Ae:Te.sibling=Ae,Te=Ae);return ye&&Ki(Y,fe),Jt}for(jt=o(jt);!Ae.done;fe++,Ae=$.next())Ae=ot(jt,Y,fe,Ae.value,gt),Ae!==null&&(e&&Ae.alternate!==null&&jt.delete(Ae.key===null?fe:Ae.key),V=h(Ae,V,fe),Te===null?Jt=Ae:Te.sibling=Ae,Te=Ae);return e&&jt.forEach(function(qS){return n(Y,qS)}),ye&&Ki(Y,fe),Jt}function Ve(Y,V,$,gt){if(typeof $=="object"&&$!==null&&$.type===C&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case y:t:{for(var Jt=$.key;V!==null;){if(V.key===Jt){if(Jt=$.type,Jt===C){if(V.tag===7){a(Y,V.sibling),gt=c(V,$.props.children),gt.return=Y,Y=gt;break t}}else if(V.elementType===Jt||typeof Jt=="object"&&Jt!==null&&Jt.$$typeof===Q&&ds(Jt)===V.type){a(Y,V.sibling),gt=c(V,$.props),so(gt,$),gt.return=Y,Y=gt;break t}a(Y,V);break}else n(Y,V);V=V.sibling}$.type===C?(gt=ls($.props.children,Y.mode,gt,$.key),gt.return=Y,Y=gt):(gt=_l($.type,$.key,$.props,null,Y.mode,gt),so(gt,$),gt.return=Y,Y=gt)}return _(Y);case b:t:{for(Jt=$.key;V!==null;){if(V.key===Jt)if(V.tag===4&&V.stateNode.containerInfo===$.containerInfo&&V.stateNode.implementation===$.implementation){a(Y,V.sibling),gt=c(V,$.children||[]),gt.return=Y,Y=gt;break t}else{a(Y,V);break}else n(Y,V);V=V.sibling}gt=yc($,Y.mode,gt),gt.return=Y,Y=gt}return _(Y);case Q:return $=ds($),Ve(Y,V,$,gt)}if(ct($))return kt(Y,V,$,gt);if(nt($)){if(Jt=nt($),typeof Jt!="function")throw Error(s(150));return $=Jt.call($),ee(Y,V,$,gt)}if(typeof $.then=="function")return Ve(Y,V,Tl($),gt);if($.$$typeof===N)return Ve(Y,V,yl(Y,$),gt);Al(Y,$)}return typeof $=="string"&&$!==""||typeof $=="number"||typeof $=="bigint"?($=""+$,V!==null&&V.tag===6?(a(Y,V.sibling),gt=c(V,$),gt.return=Y,Y=gt):(a(Y,V),gt=Sc($,Y.mode,gt),gt.return=Y,Y=gt),_(Y)):a(Y,V)}return function(Y,V,$,gt){try{ao=0;var Jt=Ve(Y,V,$,gt);return Js=null,Jt}catch(jt){if(jt===Qs||jt===El)throw jt;var Te=jn(29,jt,null,Y.mode);return Te.lanes=gt,Te.return=Y,Te}}}var ms=Jp(!0),$p=Jp(!1),wa=!1;function Lc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Oc(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function Da(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ua(e,n,a){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(Ue&2)!==0){var c=o.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),o.pending=n,n=vl(e),zp(e,null,a),n}return gl(e,o,n,a),vl(e)}function ro(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hr(e,a)}}function Pc(e,n){var a=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var c=null,h=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};h===null?c=h=_:h=h.next=_,a=a.next}while(a!==null);h===null?c=h=n:h=h.next=n}else c=h=n;a={baseState:o.baseState,firstBaseUpdate:c,lastBaseUpdate:h,shared:o.shared,callbacks:o.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var zc=!1;function oo(){if(zc){var e=Ks;if(e!==null)throw e}}function lo(e,n,a,o){zc=!1;var c=e.updateQueue;wa=!1;var h=c.firstBaseUpdate,_=c.lastBaseUpdate,T=c.shared.pending;if(T!==null){c.shared.pending=null;var B=T,tt=B.next;B.next=null,_===null?h=tt:_.next=tt,_=B;var ht=e.alternate;ht!==null&&(ht=ht.updateQueue,T=ht.lastBaseUpdate,T!==_&&(T===null?ht.firstBaseUpdate=tt:T.next=tt,ht.lastBaseUpdate=B))}if(h!==null){var _t=c.baseState;_=0,ht=tt=B=null,T=h;do{var at=T.lane&-536870913,ot=at!==T.lane;if(ot?(xe&at)===at:(o&at)===at){at!==0&&at===Zs&&(zc=!0),ht!==null&&(ht=ht.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});t:{var kt=e,ee=T;at=n;var Ve=a;switch(ee.tag){case 1:if(kt=ee.payload,typeof kt=="function"){_t=kt.call(Ve,_t,at);break t}_t=kt;break t;case 3:kt.flags=kt.flags&-65537|128;case 0:if(kt=ee.payload,at=typeof kt=="function"?kt.call(Ve,_t,at):kt,at==null)break t;_t=g({},_t,at);break t;case 2:wa=!0}}at=T.callback,at!==null&&(e.flags|=64,ot&&(e.flags|=8192),ot=c.callbacks,ot===null?c.callbacks=[at]:ot.push(at))}else ot={lane:at,tag:T.tag,payload:T.payload,callback:T.callback,next:null},ht===null?(tt=ht=ot,B=_t):ht=ht.next=ot,_|=at;if(T=T.next,T===null){if(T=c.shared.pending,T===null)break;ot=T,T=ot.next,ot.next=null,c.lastBaseUpdate=ot,c.shared.pending=null}}while(!0);ht===null&&(B=_t),c.baseState=B,c.firstBaseUpdate=tt,c.lastBaseUpdate=ht,h===null&&(c.shared.lanes=0),za|=_,e.lanes=_,e.memoizedState=_t}}function tm(e,n){if(typeof e!="function")throw Error(s(191,e));e.call(n)}function em(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)tm(a[e],n)}var $s=D(null),Rl=D(0);function nm(e,n){e=oa,vt(Rl,e),vt($s,n),oa=e|n.baseLanes}function Ic(){vt(Rl,oa),vt($s,$s.current)}function Fc(){oa=Rl.current,J($s),J(Rl)}var Zn=D(null),fi=null;function Na(e){var n=e.alternate;vt(an,an.current&1),vt(Zn,e),fi===null&&(n===null||$s.current!==null||n.memoizedState!==null)&&(fi=e)}function Bc(e){vt(an,an.current),vt(Zn,e),fi===null&&(fi=e)}function im(e){e.tag===22?(vt(an,an.current),vt(Zn,e),fi===null&&(fi=e)):La()}function La(){vt(an,an.current),vt(Zn,Zn.current)}function Kn(e){J(Zn),fi===e&&(fi=null),J(an)}var an=D(0);function Cl(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||qf(a)||Yf(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var $i=0,ue=null,He=null,ln=null,wl=!1,tr=!1,gs=!1,Dl=0,uo=0,er=null,zx=0;function tn(){throw Error(s(321))}function Hc(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Yn(e[a],n[a]))return!1;return!0}function Gc(e,n,a,o,c,h){return $i=h,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,z.H=e===null||e.memoizedState===null?Hm:nf,gs=!1,h=a(o,c),gs=!1,tr&&(h=sm(n,a,o,c)),am(e),h}function am(e){z.H=ho;var n=He!==null&&He.next!==null;if($i=0,ln=He=ue=null,wl=!1,uo=0,er=null,n)throw Error(s(300));e===null||un||(e=e.dependencies,e!==null&&Sl(e)&&(un=!0))}function sm(e,n,a,o){ue=e;var c=0;do{if(tr&&(er=null),uo=0,tr=!1,25<=c)throw Error(s(301));if(c+=1,ln=He=null,e.updateQueue!=null){var h=e.updateQueue;h.lastEffect=null,h.events=null,h.stores=null,h.memoCache!=null&&(h.memoCache.index=0)}z.H=Gm,h=n(a,o)}while(tr);return h}function Ix(){var e=z.H,n=e.useState()[0];return n=typeof n.then=="function"?co(n):n,e=e.useState()[0],(He!==null?He.memoizedState:null)!==e&&(ue.flags|=1024),n}function Vc(){var e=Dl!==0;return Dl=0,e}function kc(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function Xc(e){if(wl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}wl=!1}$i=0,ln=He=ue=null,tr=!1,uo=Dl=0,er=null}function Pn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ln===null?ue.memoizedState=ln=e:ln=ln.next=e,ln}function sn(){if(He===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var n=ln===null?ue.memoizedState:ln.next;if(n!==null)ln=n,He=e;else{if(e===null)throw ue.alternate===null?Error(s(467)):Error(s(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},ln===null?ue.memoizedState=ln=e:ln=ln.next=e}return ln}function Ul(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function co(e){var n=uo;return uo+=1,er===null&&(er=[]),e=Zp(er,e,n),n=ue,(ln===null?n.memoizedState:ln.next)===null&&(n=n.alternate,z.H=n===null||n.memoizedState===null?Hm:nf),e}function Nl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return co(e);if(e.$$typeof===N)return An(e)}throw Error(s(438,String(e)))}function Wc(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=ue.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ul(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),o=0;o<e;o++)a[o]=w;return n.index++,a}function ta(e,n){return typeof n=="function"?n(e):n}function Ll(e){var n=sn();return qc(n,He,e)}function qc(e,n,a){var o=e.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var c=e.baseQueue,h=o.pending;if(h!==null){if(c!==null){var _=c.next;c.next=h.next,h.next=_}n.baseQueue=c=h,o.pending=null}if(h=e.baseState,c===null)e.memoizedState=h;else{n=c.next;var T=_=null,B=null,tt=n,ht=!1;do{var _t=tt.lane&-536870913;if(_t!==tt.lane?(xe&_t)===_t:($i&_t)===_t){var at=tt.revertLane;if(at===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null}),_t===Zs&&(ht=!0);else if(($i&at)===at){tt=tt.next,at===Zs&&(ht=!0);continue}else _t={lane:0,revertLane:tt.revertLane,gesture:null,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=_t,_=h):B=B.next=_t,ue.lanes|=at,za|=at;_t=tt.action,gs&&a(h,_t),h=tt.hasEagerState?tt.eagerState:a(h,_t)}else at={lane:_t,revertLane:tt.revertLane,gesture:tt.gesture,action:tt.action,hasEagerState:tt.hasEagerState,eagerState:tt.eagerState,next:null},B===null?(T=B=at,_=h):B=B.next=at,ue.lanes|=_t,za|=_t;tt=tt.next}while(tt!==null&&tt!==n);if(B===null?_=h:B.next=T,!Yn(h,e.memoizedState)&&(un=!0,ht&&(a=Ks,a!==null)))throw a;e.memoizedState=h,e.baseState=_,e.baseQueue=B,o.lastRenderedState=h}return c===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function Yc(e){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=e;var o=a.dispatch,c=a.pending,h=n.memoizedState;if(c!==null){a.pending=null;var _=c=c.next;do h=e(h,_.action),_=_.next;while(_!==c);Yn(h,n.memoizedState)||(un=!0),n.memoizedState=h,n.baseQueue===null&&(n.baseState=h),a.lastRenderedState=h}return[h,o]}function rm(e,n,a){var o=ue,c=sn(),h=ye;if(h){if(a===void 0)throw Error(s(407));a=a()}else a=n();var _=!Yn((He||c).memoizedState,a);if(_&&(c.memoizedState=a,un=!0),c=c.queue,Kc(um.bind(null,o,c,e),[e]),c.getSnapshot!==n||_||ln!==null&&ln.memoizedState.tag&1){if(o.flags|=2048,nr(9,{destroy:void 0},lm.bind(null,o,c,a,n),null),ke===null)throw Error(s(349));h||($i&127)!==0||om(o,n,a)}return a}function om(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=Ul(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function lm(e,n,a,o){n.value=a,n.getSnapshot=o,cm(n)&&fm(e)}function um(e,n,a){return a(function(){cm(n)&&fm(e)})}function cm(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Yn(e,a)}catch{return!0}}function fm(e){var n=os(e,2);n!==null&&kn(n,e,2)}function jc(e){var n=Pn();if(typeof e=="function"){var a=e;if(e=a(),gs){Bt(!0);try{a()}finally{Bt(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:e},n}function hm(e,n,a,o){return e.baseState=a,qc(e,He,typeof o=="function"?o:ta)}function Fx(e,n,a,o,c){if(zl(e))throw Error(s(485));if(e=n.action,e!==null){var h={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){h.listeners.push(_)}};z.T!==null?a(!0):h.isTransition=!1,o(h),a=n.pending,a===null?(h.next=n.pending=h,dm(n,h)):(h.next=a.next,n.pending=a.next=h)}}function dm(e,n){var a=n.action,o=n.payload,c=e.state;if(n.isTransition){var h=z.T,_={};z.T=_;try{var T=a(c,o),B=z.S;B!==null&&B(_,T),pm(e,n,T)}catch(tt){Zc(e,n,tt)}finally{h!==null&&_.types!==null&&(h.types=_.types),z.T=h}}else try{h=a(c,o),pm(e,n,h)}catch(tt){Zc(e,n,tt)}}function pm(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){mm(e,n,o)},function(o){return Zc(e,n,o)}):mm(e,n,a)}function mm(e,n,a){n.status="fulfilled",n.value=a,gm(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,dm(e,a)))}function Zc(e,n,a){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,gm(n),n=n.next;while(n!==o)}e.action=null}function gm(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vm(e,n){return n}function _m(e,n){if(ye){var a=ke.formState;if(a!==null){t:{var o=ue;if(ye){if(We){e:{for(var c=We,h=ci;c.nodeType!==8;){if(!h){c=null;break e}if(c=hi(c.nextSibling),c===null){c=null;break e}}h=c.data,c=h==="F!"||h==="F"?c:null}if(c){We=hi(c.nextSibling),o=c.data==="F!";break t}}Ra(o)}o=!1}o&&(n=a[0])}}return a=Pn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vm,lastRenderedState:n},a.queue=o,a=Im.bind(null,ue,o),o.dispatch=a,o=jc(!1),h=ef.bind(null,ue,!1,o.queue),o=Pn(),c={state:n,dispatch:null,action:e,pending:null},o.queue=c,a=Fx.bind(null,ue,c,h,a),c.dispatch=a,o.memoizedState=e,[n,a,!1]}function xm(e){var n=sn();return Sm(n,He,e)}function Sm(e,n,a){if(n=qc(e,n,vm)[0],e=Ll(ta)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=co(n)}catch(_){throw _===Qs?El:_}else o=n;n=sn();var c=n.queue,h=c.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,nr(9,{destroy:void 0},Bx.bind(null,c,a),null)),[o,h,e]}function Bx(e,n){e.action=n}function ym(e){var n=sn(),a=He;if(a!==null)return Sm(n,a,e);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=e,[n,o,!1]}function nr(e,n,a,o){return e={tag:e,create:a,deps:o,inst:n,next:null},n=ue.updateQueue,n===null&&(n=Ul(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(o=a.next,a.next=e,e.next=o,n.lastEffect=e),e}function Mm(){return sn().memoizedState}function Ol(e,n,a,o){var c=Pn();ue.flags|=e,c.memoizedState=nr(1|n,{destroy:void 0},a,o===void 0?null:o)}function Pl(e,n,a,o){var c=sn();o=o===void 0?null:o;var h=c.memoizedState.inst;He!==null&&o!==null&&Hc(o,He.memoizedState.deps)?c.memoizedState=nr(n,h,a,o):(ue.flags|=e,c.memoizedState=nr(1|n,h,a,o))}function Em(e,n){Ol(8390656,8,e,n)}function Kc(e,n){Pl(2048,8,e,n)}function Hx(e){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=Ul(),ue.updateQueue=n,n.events=[e];else{var a=n.events;a===null?n.events=[e]:a.push(e)}}function bm(e){var n=sn().memoizedState;return Hx({ref:n,nextImpl:e}),function(){if((Ue&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Tm(e,n){return Pl(4,2,e,n)}function Am(e,n){return Pl(4,4,e,n)}function Rm(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Cm(e,n,a){a=a!=null?a.concat([e]):null,Pl(4,4,Rm.bind(null,n,e),a)}function Qc(){}function wm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&Hc(n,o[1])?o[0]:(a.memoizedState=[e,n],e)}function Dm(e,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&Hc(n,o[1]))return o[0];if(o=e(),gs){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o}function Jc(e,n,a){return a===void 0||($i&1073741824)!==0&&(xe&261930)===0?e.memoizedState=n:(e.memoizedState=a,e=U0(),ue.lanes|=e,za|=e,a)}function Um(e,n,a,o){return Yn(a,n)?a:$s.current!==null?(e=Jc(e,a,o),Yn(e,n)||(un=!0),e):($i&42)===0||($i&1073741824)!==0&&(xe&261930)===0?(un=!0,e.memoizedState=a):(e=U0(),ue.lanes|=e,za|=e,n)}function Nm(e,n,a,o,c){var h=O.p;O.p=h!==0&&8>h?h:8;var _=z.T,T={};z.T=T,ef(e,!1,n,a);try{var B=c(),tt=z.S;if(tt!==null&&tt(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ht=Px(B,o);fo(e,n,ht,$n(e))}else fo(e,n,o,$n(e))}catch(_t){fo(e,n,{then:function(){},status:"rejected",reason:_t},$n())}finally{O.p=h,_!==null&&T.types!==null&&(_.types=T.types),z.T=_}}function Gx(){}function $c(e,n,a,o){if(e.tag!==5)throw Error(s(476));var c=Lm(e).queue;Nm(e,c,n,j,a===null?Gx:function(){return Om(e),a(o)})}function Lm(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:j,baseState:j,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:j},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ta,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Om(e){var n=Lm(e);n.next===null&&(n=e.alternate.memoizedState),fo(e,n.next.queue,{},$n())}function tf(){return An(wo)}function Pm(){return sn().memoizedState}function zm(){return sn().memoizedState}function Vx(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=$n();e=Da(a);var o=Ua(n,e,a);o!==null&&(kn(o,n,a),ro(o,n,a)),n={cache:wc()},e.payload=n;return}n=n.return}}function kx(e,n,a){var o=$n();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},zl(e)?Fm(n,a):(a=_c(e,n,a,o),a!==null&&(kn(a,e,o),Bm(a,n,o)))}function Im(e,n,a){var o=$n();fo(e,n,a,o)}function fo(e,n,a,o){var c={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(zl(e))Fm(n,c);else{var h=e.alternate;if(e.lanes===0&&(h===null||h.lanes===0)&&(h=n.lastRenderedReducer,h!==null))try{var _=n.lastRenderedState,T=h(_,a);if(c.hasEagerState=!0,c.eagerState=T,Yn(T,_))return gl(e,n,c,0),ke===null&&ml(),!1}catch{}if(a=_c(e,n,c,o),a!==null)return kn(a,e,o),Bm(a,n,o),!0}return!1}function ef(e,n,a,o){if(o={lane:2,revertLane:Of(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},zl(e)){if(n)throw Error(s(479))}else n=_c(e,a,o,2),n!==null&&kn(n,e,2)}function zl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Fm(e,n){tr=wl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Bm(e,n,a){if((a&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,a|=o,n.lanes=a,Hr(e,a)}}var ho={readContext:An,use:Nl,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};ho.useEffectEvent=tn;var Hm={readContext:An,use:Nl,useCallback:function(e,n){return Pn().memoizedState=[e,n===void 0?null:n],e},useContext:An,useEffect:Em,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,Ol(4194308,4,Rm.bind(null,n,e),a)},useLayoutEffect:function(e,n){return Ol(4194308,4,e,n)},useInsertionEffect:function(e,n){Ol(4,2,e,n)},useMemo:function(e,n){var a=Pn();n=n===void 0?null:n;var o=e();if(gs){Bt(!0);try{e()}finally{Bt(!1)}}return a.memoizedState=[o,n],o},useReducer:function(e,n,a){var o=Pn();if(a!==void 0){var c=a(n);if(gs){Bt(!0);try{a(n)}finally{Bt(!1)}}}else c=n;return o.memoizedState=o.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},o.queue=e,e=e.dispatch=kx.bind(null,ue,e),[o.memoizedState,e]},useRef:function(e){var n=Pn();return e={current:e},n.memoizedState=e},useState:function(e){e=jc(e);var n=e.queue,a=Im.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:Qc,useDeferredValue:function(e,n){var a=Pn();return Jc(a,e,n)},useTransition:function(){var e=jc(!1);return e=Nm.bind(null,ue,e.queue,!0,!1),Pn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var o=ue,c=Pn();if(ye){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(xe&127)!==0||om(o,n,a)}c.memoizedState=a;var h={value:a,getSnapshot:n};return c.queue=h,Em(um.bind(null,o,h,e),[e]),o.flags|=2048,nr(9,{destroy:void 0},lm.bind(null,o,h,a,n),null),a},useId:function(){var e=Pn(),n=ke.identifierPrefix;if(ye){var a=Di,o=wi;a=(o&~(1<<32-zt(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Dl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=zx++,n="_"+n+"r_"+a.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:tf,useFormState:_m,useActionState:_m,useOptimistic:function(e){var n=Pn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=ef.bind(null,ue,!0,a),a.dispatch=n,[e,n]},useMemoCache:Wc,useCacheRefresh:function(){return Pn().memoizedState=Vx.bind(null,ue)},useEffectEvent:function(e){var n=Pn(),a={impl:e};return n.memoizedState=a,function(){if((Ue&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},nf={readContext:An,use:Nl,useCallback:wm,useContext:An,useEffect:Kc,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Ll,useRef:Mm,useState:function(){return Ll(ta)},useDebugValue:Qc,useDeferredValue:function(e,n){var a=sn();return Um(a,He.memoizedState,e,n)},useTransition:function(){var e=Ll(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:tf,useFormState:xm,useActionState:xm,useOptimistic:function(e,n){var a=sn();return hm(a,He,e,n)},useMemoCache:Wc,useCacheRefresh:zm};nf.useEffectEvent=bm;var Gm={readContext:An,use:Nl,useCallback:wm,useContext:An,useEffect:Kc,useImperativeHandle:Cm,useInsertionEffect:Tm,useLayoutEffect:Am,useMemo:Dm,useReducer:Yc,useRef:Mm,useState:function(){return Yc(ta)},useDebugValue:Qc,useDeferredValue:function(e,n){var a=sn();return He===null?Jc(a,e,n):Um(a,He.memoizedState,e,n)},useTransition:function(){var e=Yc(ta)[0],n=sn().memoizedState;return[typeof e=="boolean"?e:co(e),n]},useSyncExternalStore:rm,useId:Pm,useHostTransitionStatus:tf,useFormState:ym,useActionState:ym,useOptimistic:function(e,n){var a=sn();return He!==null?hm(a,He,e,n):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Wc,useCacheRefresh:zm};Gm.useEffectEvent=bm;function af(e,n,a,o){n=e.memoizedState,a=a(o,n),a=a==null?n:g({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var sf={enqueueSetState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Da(o);c.payload=n,a!=null&&(c.callback=a),n=Ua(e,c,o),n!==null&&(kn(n,e,o),ro(n,e,o))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var o=$n(),c=Da(o);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=Ua(e,c,o),n!==null&&(kn(n,e,o),ro(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=$n(),o=Da(a);o.tag=2,n!=null&&(o.callback=n),n=Ua(e,o,a),n!==null&&(kn(n,e,a),ro(n,e,a))}};function Vm(e,n,a,o,c,h,_){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,h,_):n.prototype&&n.prototype.isPureReactComponent?!Jr(a,o)||!Jr(c,h):!0}function km(e,n,a,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==e&&sf.enqueueReplaceState(n,n.state,null)}function vs(e,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(e=e.defaultProps){a===n&&(a=g({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}function Xm(e){pl(e)}function Wm(e){console.error(e)}function qm(e){pl(e)}function Il(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Ym(e,n,a){try{var o=e.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function rf(e,n,a){return a=Da(a),a.tag=3,a.payload={element:null},a.callback=function(){Il(e,n)},a}function jm(e){return e=Da(e),e.tag=3,e}function Zm(e,n,a,o){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var h=o.value;e.payload=function(){return c(h)},e.callback=function(){Ym(n,a,o)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(e.callback=function(){Ym(n,a,o),typeof c!="function"&&(Ia===null?Ia=new Set([this]):Ia.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function Xx(e,n,a,o,c){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&js(n,a,c,!0),a=Zn.current,a!==null){switch(a.tag){case 31:case 13:return fi===null?Zl():a.alternate===null&&en===0&&(en=3),a.flags&=-257,a.flags|=65536,a.lanes=c,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),Uf(e,o,c)),!1;case 22:return a.flags|=65536,o===bl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),Uf(e,o,c)),!1}throw Error(s(435,a.tag))}return Uf(e,o,c),Zl(),!1}if(ye)return n=Zn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=c,o!==bc&&(e=Error(s(422),{cause:o}),eo(oi(e,a)))):(o!==bc&&(n=Error(s(423),{cause:o}),eo(oi(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,o=oi(o,a),c=rf(e.stateNode,o,c),Pc(e,c),en!==4&&(en=2)),!1;var h=Error(s(520),{cause:o});if(h=oi(h,a),yo===null?yo=[h]:yo.push(h),en!==4&&(en=2),n===null)return!0;o=oi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=rf(a.stateNode,o,e),Pc(a,e),!1;case 1:if(n=a.type,h=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Ia===null||!Ia.has(h))))return a.flags|=65536,c&=-c,a.lanes|=c,c=jm(c),Zm(c,e,a,o),Pc(a,c),!1}a=a.return}while(a!==null);return!1}var of=Error(s(461)),un=!1;function Rn(e,n,a,o){n.child=e===null?$p(n,null,a,o):ms(n,e.child,a,o)}function Km(e,n,a,o,c){a=a.render;var h=n.ref;if("ref"in o){var _={};for(var T in o)T!=="ref"&&(_[T]=o[T])}else _=o;return fs(n),o=Gc(e,n,a,_,h,c),T=Vc(),e!==null&&!un?(kc(e,n,c),ea(e,n,c)):(ye&&T&&Mc(n),n.flags|=1,Rn(e,n,o,c),n.child)}function Qm(e,n,a,o,c){if(e===null){var h=a.type;return typeof h=="function"&&!xc(h)&&h.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=h,Jm(e,n,h,o,c)):(e=_l(a.type,null,o,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(h=e.child,!mf(e,c)){var _=h.memoizedProps;if(a=a.compare,a=a!==null?a:Jr,a(_,o)&&e.ref===n.ref)return ea(e,n,c)}return n.flags|=1,e=Zi(h,o),e.ref=n.ref,e.return=n,n.child=e}function Jm(e,n,a,o,c){if(e!==null){var h=e.memoizedProps;if(Jr(h,o)&&e.ref===n.ref)if(un=!1,n.pendingProps=o=h,mf(e,c))(e.flags&131072)!==0&&(un=!0);else return n.lanes=e.lanes,ea(e,n,c)}return lf(e,n,a,o,c)}function $m(e,n,a,o){var c=o.children,h=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(h=h!==null?h.baseLanes|a:a,e!==null){for(o=n.child=e.child,c=0;o!==null;)c=c|o.lanes|o.childLanes,o=o.sibling;o=c&~h}else o=0,n.child=null;return t0(e,n,h,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Ml(n,h!==null?h.cachePool:null),h!==null?nm(n,h):Ic(),im(n);else return o=n.lanes=536870912,t0(e,n,h!==null?h.baseLanes|a:a,a,o)}else h!==null?(Ml(n,h.cachePool),nm(n,h),La(),n.memoizedState=null):(e!==null&&Ml(n,null),Ic(),La());return Rn(e,n,c,a),n.child}function po(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function t0(e,n,a,o,c){var h=Uc();return h=h===null?null:{parent:on._currentValue,pool:h},n.memoizedState={baseLanes:a,cachePool:h},e!==null&&Ml(n,null),Ic(),im(n),e!==null&&js(e,n,o,!0),n.childLanes=c,null}function Fl(e,n){return n=Hl({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function e0(e,n,a){return ms(n,e.child,null,a),e=Fl(n,n.pendingProps),e.flags|=2,Kn(n),n.memoizedState=null,e}function Wx(e,n,a){var o=n.pendingProps,c=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(ye){if(o.mode==="hidden")return e=Fl(n,o),n.lanes=536870912,po(null,e);if(Bc(n),(e=We)?(e=dg(e,ci),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Ra(n);return n.lanes=536870912,null}return Fl(n,o)}var h=e.memoizedState;if(h!==null){var _=h.dehydrated;if(Bc(n),c)if(n.flags&256)n.flags&=-257,n=e0(e,n,a);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(s(558));else if(un||js(e,n,a,!1),c=(a&e.childLanes)!==0,un||c){if(o=ke,o!==null&&(_=Ls(o,a),_!==0&&_!==h.retryLane))throw h.retryLane=_,os(e,_),kn(o,e,_),of;Zl(),n=e0(e,n,a)}else e=h.treeContext,We=hi(_.nextSibling),Tn=n,ye=!0,Aa=null,ci=!1,e!==null&&Gp(n,e),n=Fl(n,o),n.flags|=4096;return n}return e=Zi(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function Bl(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(e===null||e.ref!==a)&&(n.flags|=4194816)}}function lf(e,n,a,o,c){return fs(n),a=Gc(e,n,a,o,void 0,c),o=Vc(),e!==null&&!un?(kc(e,n,c),ea(e,n,c)):(ye&&o&&Mc(n),n.flags|=1,Rn(e,n,a,c),n.child)}function n0(e,n,a,o,c,h){return fs(n),n.updateQueue=null,a=sm(n,o,a,c),am(e),o=Vc(),e!==null&&!un?(kc(e,n,h),ea(e,n,h)):(ye&&o&&Mc(n),n.flags|=1,Rn(e,n,a,h),n.child)}function i0(e,n,a,o,c){if(fs(n),n.stateNode===null){var h=Xs,_=a.contextType;typeof _=="object"&&_!==null&&(h=An(_)),h=new a(o,h),n.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,h.updater=sf,n.stateNode=h,h._reactInternals=n,h=n.stateNode,h.props=o,h.state=n.memoizedState,h.refs={},Lc(n),_=a.contextType,h.context=typeof _=="object"&&_!==null?An(_):Xs,h.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(af(n,a,_,o),h.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(_=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),_!==h.state&&sf.enqueueReplaceState(h,h.state,null),lo(n,o,h,c),oo(),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){h=n.stateNode;var T=n.memoizedProps,B=vs(a,T);h.props=B;var tt=h.context,ht=a.contextType;_=Xs,typeof ht=="object"&&ht!==null&&(_=An(ht));var _t=a.getDerivedStateFromProps;ht=typeof _t=="function"||typeof h.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,ht||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(T||tt!==_)&&km(n,h,o,_),wa=!1;var at=n.memoizedState;h.state=at,lo(n,o,h,c),oo(),tt=n.memoizedState,T||at!==tt||wa?(typeof _t=="function"&&(af(n,a,_t,o),tt=n.memoizedState),(B=wa||Vm(n,a,B,o,at,tt,_))?(ht||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(n.flags|=4194308)):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=tt),h.props=o,h.state=tt,h.context=_,o=B):(typeof h.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{h=n.stateNode,Oc(e,n),_=n.memoizedProps,ht=vs(a,_),h.props=ht,_t=n.pendingProps,at=h.context,tt=a.contextType,B=Xs,typeof tt=="object"&&tt!==null&&(B=An(tt)),T=a.getDerivedStateFromProps,(tt=typeof T=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(_!==_t||at!==B)&&km(n,h,o,B),wa=!1,at=n.memoizedState,h.state=at,lo(n,o,h,c),oo();var ot=n.memoizedState;_!==_t||at!==ot||wa||e!==null&&e.dependencies!==null&&Sl(e.dependencies)?(typeof T=="function"&&(af(n,a,T,o),ot=n.memoizedState),(ht=wa||Vm(n,a,ht,o,at,ot,B)||e!==null&&e.dependencies!==null&&Sl(e.dependencies))?(tt||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(o,ot,B),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(o,ot,B)),typeof h.componentDidUpdate=="function"&&(n.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=ot),h.props=o,h.state=ot,h.context=B,o=ht):(typeof h.componentDidUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||_===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),o=!1)}return h=o,Bl(e,n),o=(n.flags&128)!==0,h||o?(h=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:h.render(),n.flags|=1,e!==null&&o?(n.child=ms(n,e.child,null,c),n.child=ms(n,null,a,c)):Rn(e,n,a,c),n.memoizedState=h.state,e=n.child):e=ea(e,n,c),e}function a0(e,n,a,o){return us(),n.flags|=256,Rn(e,n,a,o),n.child}var uf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cf(e){return{baseLanes:e,cachePool:Yp()}}function ff(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=Jn),e}function s0(e,n,a){var o=n.pendingProps,c=!1,h=(n.flags&128)!==0,_;if((_=h)||(_=e!==null&&e.memoizedState===null?!1:(an.current&2)!==0),_&&(c=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,e===null){if(ye){if(c?Na(n):La(),(e=We)?(e=dg(e,ci),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Ta!==null?{id:wi,overflow:Di}:null,retryLane:536870912,hydrationErrors:null},a=Fp(e),a.return=n,n.child=a,Tn=n,We=null)):e=null,e===null)throw Ra(n);return Yf(e)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,c?(La(),c=n.mode,T=Hl({mode:"hidden",children:T},c),o=ls(o,c,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=cf(a),o.childLanes=ff(e,_,a),n.memoizedState=uf,po(null,o)):(Na(n),hf(n,T))}var B=e.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(h)n.flags&256?(Na(n),n.flags&=-257,n=df(e,n,a)):n.memoizedState!==null?(La(),n.child=e.child,n.flags|=128,n=null):(La(),T=o.fallback,c=n.mode,o=Hl({mode:"visible",children:o.children},c),T=ls(T,c,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,ms(n,e.child,null,a),o=n.child,o.memoizedState=cf(a),o.childLanes=ff(e,_,a),n.memoizedState=uf,n=po(null,o));else if(Na(n),Yf(T)){if(_=T.nextSibling&&T.nextSibling.dataset,_)var tt=_.dgst;_=tt,o=Error(s(419)),o.stack="",o.digest=_,eo({value:o,source:null,stack:null}),n=df(e,n,a)}else if(un||js(e,n,a,!1),_=(a&e.childLanes)!==0,un||_){if(_=ke,_!==null&&(o=Ls(_,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,os(e,o),kn(_,e,o),of;qf(T)||Zl(),n=df(e,n,a)}else qf(T)?(n.flags|=192,n.child=e.child,n=null):(e=B.treeContext,We=hi(T.nextSibling),Tn=n,ye=!0,Aa=null,ci=!1,e!==null&&Gp(n,e),n=hf(n,o.children),n.flags|=4096);return n}return c?(La(),T=o.fallback,c=n.mode,B=e.child,tt=B.sibling,o=Zi(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,tt!==null?T=Zi(tt,T):(T=ls(T,c,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,po(null,o),o=n.child,T=e.child.memoizedState,T===null?T=cf(a):(c=T.cachePool,c!==null?(B=on._currentValue,c=c.parent!==B?{parent:B,pool:B}:c):c=Yp(),T={baseLanes:T.baseLanes|a,cachePool:c}),o.memoizedState=T,o.childLanes=ff(e,_,a),n.memoizedState=uf,po(e.child,o)):(Na(n),a=e.child,e=a.sibling,a=Zi(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,e!==null&&(_=n.deletions,_===null?(n.deletions=[e],n.flags|=16):_.push(e)),n.child=a,n.memoizedState=null,a)}function hf(e,n){return n=Hl({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Hl(e,n){return e=jn(22,e,null,n),e.lanes=0,e}function df(e,n,a){return ms(n,e.child,null,a),e=hf(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function r0(e,n,a){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Rc(e.return,n,a)}function pf(e,n,a,o,c,h){var _=e.memoizedState;_===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:c,treeForkCount:h}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=o,_.tail=a,_.tailMode=c,_.treeForkCount=h)}function o0(e,n,a){var o=n.pendingProps,c=o.revealOrder,h=o.tail;o=o.children;var _=an.current,T=(_&2)!==0;if(T?(_=_&1|2,n.flags|=128):_&=1,vt(an,_),Rn(e,n,o,a),o=ye?to:0,!T&&e!==null&&(e.flags&128)!==0)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&r0(e,a,n);else if(e.tag===19)r0(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&Cl(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),pf(n,!1,c,a,h,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&Cl(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}pf(n,!0,a,null,h,o);break;case"together":pf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ea(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),za|=n.lanes,(a&n.childLanes)===0)if(e!==null){if(js(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(s(153));if(n.child!==null){for(e=n.child,a=Zi(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Zi(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function mf(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Sl(e)))}function qx(e,n,a){switch(n.tag){case 3:wt(n,n.stateNode.containerInfo),Ca(n,on,e.memoizedState.cache),us();break;case 27:case 5:Rt(n);break;case 4:wt(n,n.stateNode.containerInfo);break;case 10:Ca(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Bc(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Na(n),n.flags|=128,null):(a&n.child.childLanes)!==0?s0(e,n,a):(Na(n),e=ea(e,n,a),e!==null?e.sibling:null);Na(n);break;case 19:var c=(e.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(js(e,n,a,!1),o=(a&n.childLanes)!==0),c){if(o)return o0(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),vt(an,an.current),o)break;return null;case 22:return n.lanes=0,$m(e,n,a,n.pendingProps);case 24:Ca(n,on,e.memoizedState.cache)}return ea(e,n,a)}function l0(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!mf(e,a)&&(n.flags&128)===0)return un=!1,qx(e,n,a);un=(e.flags&131072)!==0}else un=!1,ye&&(n.flags&1048576)!==0&&Hp(n,to,n.index);switch(n.lanes=0,n.tag){case 16:t:{var o=n.pendingProps;if(e=ds(n.elementType),n.type=e,typeof e=="function")xc(e)?(o=vs(e,o),n.tag=1,n=i0(null,n,e,o,a)):(n.tag=0,n=lf(null,n,e,o,a));else{if(e!=null){var c=e.$$typeof;if(c===U){n.tag=11,n=Km(null,n,e,o,a);break t}else if(c===I){n.tag=14,n=Qm(null,n,e,o,a);break t}}throw n=mt(e)||e,Error(s(306,n,""))}}return n;case 0:return lf(e,n,n.type,n.pendingProps,a);case 1:return o=n.type,c=vs(o,n.pendingProps),i0(e,n,o,c,a);case 3:t:{if(wt(n,n.stateNode.containerInfo),e===null)throw Error(s(387));o=n.pendingProps;var h=n.memoizedState;c=h.element,Oc(e,n),lo(n,o,null,a);var _=n.memoizedState;if(o=_.cache,Ca(n,on,o),o!==h.cache&&Cc(n,[on],a,!0),oo(),o=_.element,h.isDehydrated)if(h={element:o,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=h,n.memoizedState=h,n.flags&256){n=a0(e,n,o,a);break t}else if(o!==c){c=oi(Error(s(424)),n),eo(c),n=a0(e,n,o,a);break t}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,We=hi(e.firstChild),Tn=n,ye=!0,Aa=null,ci=!0,a=$p(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(us(),o===c){n=ea(e,n,a);break t}Rn(e,n,o,a)}n=n.child}return n;case 26:return Bl(e,n),e===null?(a=xg(n.type,null,n.pendingProps,null))?n.memoizedState=a:ye||(a=n.type,e=n.pendingProps,o=nu(et.current).createElement(a),o[rn]=n,o[xn]=e,Cn(o,a,e),A(o),n.stateNode=o):n.memoizedState=xg(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return Rt(n),e===null&&ye&&(o=n.stateNode=gg(n.type,n.pendingProps,et.current),Tn=n,ci=!0,c=We,Ga(n.type)?(jf=c,We=hi(o.firstChild)):We=c),Rn(e,n,n.pendingProps.children,a),Bl(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&ye&&((c=o=We)&&(o=MS(o,n.type,n.pendingProps,ci),o!==null?(n.stateNode=o,Tn=n,We=hi(o.firstChild),ci=!1,c=!0):c=!1),c||Ra(n)),Rt(n),c=n.type,h=n.pendingProps,_=e!==null?e.memoizedProps:null,o=h.children,kf(c,h)?o=null:_!==null&&kf(c,_)&&(n.flags|=32),n.memoizedState!==null&&(c=Gc(e,n,Ix,null,null,a),wo._currentValue=c),Bl(e,n),Rn(e,n,o,a),n.child;case 6:return e===null&&ye&&((e=a=We)&&(a=ES(a,n.pendingProps,ci),a!==null?(n.stateNode=a,Tn=n,We=null,e=!0):e=!1),e||Ra(n)),null;case 13:return s0(e,n,a);case 4:return wt(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=ms(n,null,o,a):Rn(e,n,o,a),n.child;case 11:return Km(e,n,n.type,n.pendingProps,a);case 7:return Rn(e,n,n.pendingProps,a),n.child;case 8:return Rn(e,n,n.pendingProps.children,a),n.child;case 12:return Rn(e,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Ca(n,n.type,o.value),Rn(e,n,o.children,a),n.child;case 9:return c=n.type._context,o=n.pendingProps.children,fs(n),c=An(c),o=o(c),n.flags|=1,Rn(e,n,o,a),n.child;case 14:return Qm(e,n,n.type,n.pendingProps,a);case 15:return Jm(e,n,n.type,n.pendingProps,a);case 19:return o0(e,n,a);case 31:return Wx(e,n,a);case 22:return $m(e,n,a,n.pendingProps);case 24:return fs(n),o=An(on),e===null?(c=Uc(),c===null&&(c=ke,h=wc(),c.pooledCache=h,h.refCount++,h!==null&&(c.pooledCacheLanes|=a),c=h),n.memoizedState={parent:o,cache:c},Lc(n),Ca(n,on,c)):((e.lanes&a)!==0&&(Oc(e,n),lo(n,null,null,a),oo()),c=e.memoizedState,h=n.memoizedState,c.parent!==o?(c={parent:o,cache:o},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),Ca(n,on,o)):(o=h.cache,Ca(n,on,o),o!==c.cache&&Cc(n,[on],a,!0))),Rn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function na(e){e.flags|=4}function gf(e,n,a,o,c){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(c&335544128)===c)if(e.stateNode.complete)e.flags|=8192;else if(P0())e.flags|=8192;else throw ps=bl,Nc}else e.flags&=-16777217}function u0(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!bg(n))if(P0())e.flags|=8192;else throw ps=bl,Nc}function Gl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Pe():536870912,e.lanes|=n,rr|=n)}function mo(e,n){if(!ye)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function qe(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,o=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags&65011712,o|=c.flags&65011712,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,o|=c.subtreeFlags,o|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=o,e.childLanes=a,n}function Yx(e,n,a){var o=n.pendingProps;switch(Ec(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(n),null;case 1:return qe(n),null;case 3:return a=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Ji(on),Gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ys(n)?na(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Tc())),qe(n),null;case 26:var c=n.type,h=n.memoizedState;return e===null?(na(n),h!==null?(qe(n),u0(n,h)):(qe(n),gf(n,c,null,o,a))):h?h!==e.memoizedState?(na(n),qe(n),u0(n,h)):(qe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&na(n),qe(n),gf(n,c,e,o,a)),null;case 27:if(pe(n),a=et.current,c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}e=At.current,Ys(n)?Vp(n):(e=gg(c,o,a),n.stateNode=e,na(n))}return qe(n),null;case 5:if(pe(n),c=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return qe(n),null}if(h=At.current,Ys(n))Vp(n);else{var _=nu(et.current);switch(h){case 1:h=_.createElementNS("http://www.w3.org/2000/svg",c);break;case 2:h=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;default:switch(c){case"svg":h=_.createElementNS("http://www.w3.org/2000/svg",c);break;case"math":h=_.createElementNS("http://www.w3.org/1998/Math/MathML",c);break;case"script":h=_.createElement("div"),h.innerHTML="<script><\/script>",h=h.removeChild(h.firstChild);break;case"select":h=typeof o.is=="string"?_.createElement("select",{is:o.is}):_.createElement("select"),o.multiple?h.multiple=!0:o.size&&(h.size=o.size);break;default:h=typeof o.is=="string"?_.createElement(c,{is:o.is}):_.createElement(c)}}h[rn]=n,h[xn]=o;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)h.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=h;t:switch(Cn(h,c,o),c){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break t;case"img":o=!0;break t;default:o=!1}o&&na(n)}}return qe(n),gf(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,a),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&na(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(e=et.current,Ys(n)){if(e=n.stateNode,a=n.memoizedProps,o=null,c=Tn,c!==null)switch(c.tag){case 27:case 5:o=c.memoizedProps}e[rn]=n,e=!!(e.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||sg(e.nodeValue,a)),e||Ra(n,!0)}else e=nu(e).createTextNode(o),e[rn]=n,n.stateNode=e}return qe(n),null;case 31:if(a=n.memoizedState,e===null||e.memoizedState!==null){if(o=Ys(n),a!==null){if(e===null){if(!o)throw Error(s(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(557));e[rn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),e=!1}else a=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return n.flags&256?(Kn(n),n):(Kn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return qe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Ys(n),o!==null&&o.dehydrated!==null){if(e===null){if(!c)throw Error(s(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(s(317));c[rn]=n}else us(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;qe(n),c=!1}else c=Tc(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=c),c=!0;if(!c)return n.flags&256?(Kn(n),n):(Kn(n),null)}return Kn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,e=e!==null&&e.memoizedState!==null,a&&(o=n.child,c=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(c=o.alternate.memoizedState.cachePool.pool),h=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(h=o.memoizedState.cachePool.pool),h!==c&&(o.flags|=2048)),a!==e&&a&&(n.child.flags|=8192),Gl(n,n.updateQueue),qe(n),null);case 4:return Gt(),e===null&&Ff(n.stateNode.containerInfo),qe(n),null;case 10:return Ji(n.type),qe(n),null;case 19:if(J(an),o=n.memoizedState,o===null)return qe(n),null;if(c=(n.flags&128)!==0,h=o.rendering,h===null)if(c)mo(o,!1);else{if(en!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(h=Cl(e),h!==null){for(n.flags|=128,mo(o,!1),e=h.updateQueue,n.updateQueue=e,Gl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Ip(a,e),a=a.sibling;return vt(an,an.current&1|2),ye&&Ki(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&E()>ql&&(n.flags|=128,c=!0,mo(o,!1),n.lanes=4194304)}else{if(!c)if(e=Cl(h),e!==null){if(n.flags|=128,c=!0,e=e.updateQueue,n.updateQueue=e,Gl(n,e),mo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!h.alternate&&!ye)return qe(n),null}else 2*E()-o.renderingStartTime>ql&&a!==536870912&&(n.flags|=128,c=!0,mo(o,!1),n.lanes=4194304);o.isBackwards?(h.sibling=n.child,n.child=h):(e=o.last,e!==null?e.sibling=h:n.child=h,o.last=h)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=E(),e.sibling=null,a=an.current,vt(an,c?a&1|2:a&1),ye&&Ki(n,o.treeForkCount),e):(qe(n),null);case 22:case 23:return Kn(n),Fc(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(qe(n),n.subtreeFlags&6&&(n.flags|=8192)):qe(n),a=n.updateQueue,a!==null&&Gl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),e!==null&&J(hs),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ji(on),qe(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function jx(e,n){switch(Ec(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ji(on),Gt(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return pe(n),null;case 31:if(n.memoizedState!==null){if(Kn(n),n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Kn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(s(340));us()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return J(an),null;case 4:return Gt(),null;case 10:return Ji(n.type),null;case 22:case 23:return Kn(n),Fc(),e!==null&&J(hs),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ji(on),null;case 25:return null;default:return null}}function c0(e,n){switch(Ec(n),n.tag){case 3:Ji(on),Gt();break;case 26:case 27:case 5:pe(n);break;case 4:Gt();break;case 31:n.memoizedState!==null&&Kn(n);break;case 13:Kn(n);break;case 19:J(an);break;case 10:Ji(n.type);break;case 22:case 23:Kn(n),Fc(),e!==null&&J(hs);break;case 24:Ji(on)}}function go(e,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var c=o.next;a=c;do{if((a.tag&e)===e){o=void 0;var h=a.create,_=a.inst;o=h(),_.destroy=o}a=a.next}while(a!==c)}}catch(T){Fe(n,n.return,T)}}function Oa(e,n,a){try{var o=n.updateQueue,c=o!==null?o.lastEffect:null;if(c!==null){var h=c.next;o=h;do{if((o.tag&e)===e){var _=o.inst,T=_.destroy;if(T!==void 0){_.destroy=void 0,c=n;var B=a,tt=T;try{tt()}catch(ht){Fe(c,B,ht)}}}o=o.next}while(o!==h)}}catch(ht){Fe(n,n.return,ht)}}function f0(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{em(n,a)}catch(o){Fe(e,e.return,o)}}}function h0(e,n,a){a.props=vs(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(o){Fe(e,n,o)}}function vo(e,n){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof a=="function"?e.refCleanup=a(o):a.current=o}}catch(c){Fe(e,n,c)}}function Ui(e,n){var a=e.ref,o=e.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(c){Fe(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){Fe(e,n,c)}else a.current=null}function d0(e){var n=e.type,a=e.memoizedProps,o=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break t;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(c){Fe(e,e.return,c)}}function vf(e,n,a){try{var o=e.stateNode;gS(o,e.type,a,n),o[xn]=n}catch(c){Fe(e,e.return,c)}}function p0(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ga(e.type)||e.tag===4}function _f(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||p0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ga(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function xf(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(e),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Yi));else if(o!==4&&(o===27&&Ga(e.type)&&(a=e.stateNode,n=null),e=e.child,e!==null))for(xf(e,n,a),e=e.sibling;e!==null;)xf(e,n,a),e=e.sibling}function Vl(e,n,a){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(o!==4&&(o===27&&Ga(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(Vl(e,n,a),e=e.sibling;e!==null;)Vl(e,n,a),e=e.sibling}function m0(e){var n=e.stateNode,a=e.memoizedProps;try{for(var o=e.type,c=n.attributes;c.length;)n.removeAttributeNode(c[0]);Cn(n,o,a),n[rn]=e,n[xn]=a}catch(h){Fe(e,e.return,h)}}var ia=!1,cn=!1,Sf=!1,g0=typeof WeakSet=="function"?WeakSet:Set,vn=null;function Zx(e,n){if(e=e.containerInfo,Gf=uu,e=Cp(e),hc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var c=o.anchorOffset,h=o.focusNode;o=o.focusOffset;try{a.nodeType,h.nodeType}catch{a=null;break t}var _=0,T=-1,B=-1,tt=0,ht=0,_t=e,at=null;e:for(;;){for(var ot;_t!==a||c!==0&&_t.nodeType!==3||(T=_+c),_t!==h||o!==0&&_t.nodeType!==3||(B=_+o),_t.nodeType===3&&(_+=_t.nodeValue.length),(ot=_t.firstChild)!==null;)at=_t,_t=ot;for(;;){if(_t===e)break e;if(at===a&&++tt===c&&(T=_),at===h&&++ht===o&&(B=_),(ot=_t.nextSibling)!==null)break;_t=at,at=_t.parentNode}_t=ot}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(Vf={focusedElem:e,selectionRange:a},uu=!1,vn=n;vn!==null;)if(n=vn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,vn=e;else for(;vn!==null;){switch(n=vn,h=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)c=e[a],c.ref.impl=c.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&h!==null){e=void 0,a=n,c=h.memoizedProps,h=h.memoizedState,o=a.stateNode;try{var kt=vs(a.type,c);e=o.getSnapshotBeforeUpdate(kt,h),o.__reactInternalSnapshotBeforeUpdate=e}catch(ee){Fe(a,a.return,ee)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Wf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Wf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(s(163))}if(e=n.sibling,e!==null){e.return=n.return,vn=e;break}vn=n.return}}function v0(e,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:sa(e,a),o&4&&go(5,a);break;case 1:if(sa(e,a),o&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(_){Fe(a,a.return,_)}else{var c=vs(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(_){Fe(a,a.return,_)}}o&64&&f0(a),o&512&&vo(a,a.return);break;case 3:if(sa(e,a),o&64&&(e=a.updateQueue,e!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{em(e,n)}catch(_){Fe(a,a.return,_)}}break;case 27:n===null&&o&4&&m0(a);case 26:case 5:sa(e,a),n===null&&o&4&&d0(a),o&512&&vo(a,a.return);break;case 12:sa(e,a);break;case 31:sa(e,a),o&4&&S0(e,a);break;case 13:sa(e,a),o&4&&y0(e,a),o&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=aS.bind(null,a),bS(e,a))));break;case 22:if(o=a.memoizedState!==null||ia,!o){n=n!==null&&n.memoizedState!==null||cn,c=ia;var h=cn;ia=o,(cn=n)&&!h?ra(e,a,(a.subtreeFlags&8772)!==0):sa(e,a),ia=c,cn=h}break;case 30:break;default:sa(e,a)}}function _0(e){var n=e.alternate;n!==null&&(e.alternate=null,_0(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Xr(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Ke=null,Bn=!1;function aa(e,n,a){for(a=a.child;a!==null;)x0(e,n,a),a=a.sibling}function x0(e,n,a){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 26:cn||Ui(a,n),aa(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:cn||Ui(a,n);var o=Ke,c=Bn;Ga(a.type)&&(Ke=a.stateNode,Bn=!1),aa(e,n,a),Ao(a.stateNode),Ke=o,Bn=c;break;case 5:cn||Ui(a,n);case 6:if(o=Ke,c=Bn,Ke=null,aa(e,n,a),Ke=o,Bn=c,Ke!==null)if(Bn)try{(Ke.nodeType===9?Ke.body:Ke.nodeName==="HTML"?Ke.ownerDocument.body:Ke).removeChild(a.stateNode)}catch(h){Fe(a,n,h)}else try{Ke.removeChild(a.stateNode)}catch(h){Fe(a,n,h)}break;case 18:Ke!==null&&(Bn?(e=Ke,fg(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),pr(e)):fg(Ke,a.stateNode));break;case 4:o=Ke,c=Bn,Ke=a.stateNode.containerInfo,Bn=!0,aa(e,n,a),Ke=o,Bn=c;break;case 0:case 11:case 14:case 15:Oa(2,a,n),cn||Oa(4,a,n),aa(e,n,a);break;case 1:cn||(Ui(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&h0(a,n,o)),aa(e,n,a);break;case 21:aa(e,n,a);break;case 22:cn=(o=cn)||a.memoizedState!==null,aa(e,n,a),cn=o;break;default:aa(e,n,a)}}function S0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{pr(e)}catch(a){Fe(n,n.return,a)}}}function y0(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{pr(e)}catch(a){Fe(n,n.return,a)}}function Kx(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new g0),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new g0),n;default:throw Error(s(435,e.tag))}}function kl(e,n){var a=Kx(e);n.forEach(function(o){if(!a.has(o)){a.add(o);var c=sS.bind(null,e,o);o.then(c,c)}})}function Hn(e,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var c=a[o],h=e,_=n,T=_;t:for(;T!==null;){switch(T.tag){case 27:if(Ga(T.type)){Ke=T.stateNode,Bn=!1;break t}break;case 5:Ke=T.stateNode,Bn=!1;break t;case 3:case 4:Ke=T.stateNode.containerInfo,Bn=!0;break t}T=T.return}if(Ke===null)throw Error(s(160));x0(h,_,c),Ke=null,Bn=!1,h=c.alternate,h!==null&&(h.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)M0(n,e),n=n.sibling}var yi=null;function M0(e,n){var a=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Hn(n,e),Gn(e),o&4&&(Oa(3,e,e.return),go(3,e),Oa(5,e,e.return));break;case 1:Hn(n,e),Gn(e),o&512&&(cn||a===null||Ui(a,a.return)),o&64&&ia&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var c=yi;if(Hn(n,e),Gn(e),o&512&&(cn||a===null||Ui(a,a.return)),o&4){var h=a!==null?a.memoizedState:null;if(o=e.memoizedState,a===null)if(o===null)if(e.stateNode===null){t:{o=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(o){case"title":h=c.getElementsByTagName("title")[0],(!h||h[ns]||h[rn]||h.namespaceURI==="http://www.w3.org/2000/svg"||h.hasAttribute("itemprop"))&&(h=c.createElement(o),c.head.insertBefore(h,c.querySelector("head > title"))),Cn(h,o,a),h[rn]=e,A(h),o=h;break t;case"link":var _=Mg("link","href",c).get(o+(a.href||""));if(_){for(var T=0;T<_.length;T++)if(h=_[T],h.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&h.getAttribute("rel")===(a.rel==null?null:a.rel)&&h.getAttribute("title")===(a.title==null?null:a.title)&&h.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(T,1);break e}}h=c.createElement(o),Cn(h,o,a),c.head.appendChild(h);break;case"meta":if(_=Mg("meta","content",c).get(o+(a.content||""))){for(T=0;T<_.length;T++)if(h=_[T],h.getAttribute("content")===(a.content==null?null:""+a.content)&&h.getAttribute("name")===(a.name==null?null:a.name)&&h.getAttribute("property")===(a.property==null?null:a.property)&&h.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&h.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(T,1);break e}}h=c.createElement(o),Cn(h,o,a),c.head.appendChild(h);break;default:throw Error(s(468,o))}h[rn]=e,A(h),o=h}e.stateNode=o}else Eg(c,e.type,e.stateNode);else e.stateNode=yg(c,o,e.memoizedProps);else h!==o?(h===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):h.count--,o===null?Eg(c,e.type,e.stateNode):yg(c,o,e.memoizedProps)):o===null&&e.stateNode!==null&&vf(e,e.memoizedProps,a.memoizedProps)}break;case 27:Hn(n,e),Gn(e),o&512&&(cn||a===null||Ui(a,a.return)),a!==null&&o&4&&vf(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Hn(n,e),Gn(e),o&512&&(cn||a===null||Ui(a,a.return)),e.flags&32){c=e.stateNode;try{dn(c,"")}catch(kt){Fe(e,e.return,kt)}}o&4&&e.stateNode!=null&&(c=e.memoizedProps,vf(e,c,a!==null?a.memoizedProps:c)),o&1024&&(Sf=!0);break;case 6:if(Hn(n,e),Gn(e),o&4){if(e.stateNode===null)throw Error(s(162));o=e.memoizedProps,a=e.stateNode;try{a.nodeValue=o}catch(kt){Fe(e,e.return,kt)}}break;case 3:if(su=null,c=yi,yi=iu(n.containerInfo),Hn(n,e),yi=c,Gn(e),o&4&&a!==null&&a.memoizedState.isDehydrated)try{pr(n.containerInfo)}catch(kt){Fe(e,e.return,kt)}Sf&&(Sf=!1,E0(e));break;case 4:o=yi,yi=iu(e.stateNode.containerInfo),Hn(n,e),Gn(e),yi=o;break;case 12:Hn(n,e),Gn(e);break;case 31:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 13:Hn(n,e),Gn(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Wl=E()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 22:c=e.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,tt=ia,ht=cn;if(ia=tt||c,cn=ht||B,Hn(n,e),cn=ht,ia=tt,Gn(e),o&8192)t:for(n=e.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,c&&(a===null||B||ia||cn||_s(e)),a=null,n=e;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(h=B.stateNode,c)_=h.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{T=B.stateNode;var _t=B.memoizedProps.style,at=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;T.style.display=at==null||typeof at=="boolean"?"":(""+at).trim()}}catch(kt){Fe(B,B.return,kt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=c?"":B.memoizedProps}catch(kt){Fe(B,B.return,kt)}}}else if(n.tag===18){if(a===null){B=n;try{var ot=B.stateNode;c?hg(ot,!0):hg(B.stateNode,!1)}catch(kt){Fe(B,B.return,kt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,kl(e,a))));break;case 19:Hn(n,e),Gn(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,kl(e,o)));break;case 30:break;case 21:break;default:Hn(n,e),Gn(e)}}function Gn(e){var n=e.flags;if(n&2){try{for(var a,o=e.return;o!==null;){if(p0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var c=a.stateNode,h=_f(e);Vl(e,h,c);break;case 5:var _=a.stateNode;a.flags&32&&(dn(_,""),a.flags&=-33);var T=_f(e);Vl(e,T,_);break;case 3:case 4:var B=a.stateNode.containerInfo,tt=_f(e);xf(e,tt,B);break;default:throw Error(s(161))}}catch(ht){Fe(e,e.return,ht)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function E0(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;E0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function sa(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)v0(e,n.alternate,n),n=n.sibling}function _s(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:Oa(4,n,n.return),_s(n);break;case 1:Ui(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&h0(n,n.return,a),_s(n);break;case 27:Ao(n.stateNode);case 26:case 5:Ui(n,n.return),_s(n);break;case 22:n.memoizedState===null&&_s(n);break;case 30:_s(n);break;default:_s(n)}e=e.sibling}}function ra(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,c=e,h=n,_=h.flags;switch(h.tag){case 0:case 11:case 15:ra(c,h,a),go(4,h);break;case 1:if(ra(c,h,a),o=h,c=o.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(tt){Fe(o,o.return,tt)}if(o=h,c=o.updateQueue,c!==null){var T=o.stateNode;try{var B=c.shared.hiddenCallbacks;if(B!==null)for(c.shared.hiddenCallbacks=null,c=0;c<B.length;c++)tm(B[c],T)}catch(tt){Fe(o,o.return,tt)}}a&&_&64&&f0(h),vo(h,h.return);break;case 27:m0(h);case 26:case 5:ra(c,h,a),a&&o===null&&_&4&&d0(h),vo(h,h.return);break;case 12:ra(c,h,a);break;case 31:ra(c,h,a),a&&_&4&&S0(c,h);break;case 13:ra(c,h,a),a&&_&4&&y0(c,h);break;case 22:h.memoizedState===null&&ra(c,h,a),vo(h,h.return);break;case 30:break;default:ra(c,h,a)}n=n.sibling}}function yf(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&no(a))}function Mf(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e))}function Mi(e,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)b0(e,n,a,o),n=n.sibling}function b0(e,n,a,o){var c=n.flags;switch(n.tag){case 0:case 11:case 15:Mi(e,n,a,o),c&2048&&go(9,n);break;case 1:Mi(e,n,a,o);break;case 3:Mi(e,n,a,o),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&no(e)));break;case 12:if(c&2048){Mi(e,n,a,o),e=n.stateNode;try{var h=n.memoizedProps,_=h.id,T=h.onPostCommit;typeof T=="function"&&T(_,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(B){Fe(n,n.return,B)}}else Mi(e,n,a,o);break;case 31:Mi(e,n,a,o);break;case 13:Mi(e,n,a,o);break;case 23:break;case 22:h=n.stateNode,_=n.alternate,n.memoizedState!==null?h._visibility&2?Mi(e,n,a,o):_o(e,n):h._visibility&2?Mi(e,n,a,o):(h._visibility|=2,ir(e,n,a,o,(n.subtreeFlags&10256)!==0||!1)),c&2048&&yf(_,n);break;case 24:Mi(e,n,a,o),c&2048&&Mf(n.alternate,n);break;default:Mi(e,n,a,o)}}function ir(e,n,a,o,c){for(c=c&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var h=e,_=n,T=a,B=o,tt=_.flags;switch(_.tag){case 0:case 11:case 15:ir(h,_,T,B,c),go(8,_);break;case 23:break;case 22:var ht=_.stateNode;_.memoizedState!==null?ht._visibility&2?ir(h,_,T,B,c):_o(h,_):(ht._visibility|=2,ir(h,_,T,B,c)),c&&tt&2048&&yf(_.alternate,_);break;case 24:ir(h,_,T,B,c),c&&tt&2048&&Mf(_.alternate,_);break;default:ir(h,_,T,B,c)}n=n.sibling}}function _o(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,o=n,c=o.flags;switch(o.tag){case 22:_o(a,o),c&2048&&yf(o.alternate,o);break;case 24:_o(a,o),c&2048&&Mf(o.alternate,o);break;default:_o(a,o)}n=n.sibling}}var xo=8192;function ar(e,n,a){if(e.subtreeFlags&xo)for(e=e.child;e!==null;)T0(e,n,a),e=e.sibling}function T0(e,n,a){switch(e.tag){case 26:ar(e,n,a),e.flags&xo&&e.memoizedState!==null&&zS(a,yi,e.memoizedState,e.memoizedProps);break;case 5:ar(e,n,a);break;case 3:case 4:var o=yi;yi=iu(e.stateNode.containerInfo),ar(e,n,a),yi=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=xo,xo=16777216,ar(e,n,a),xo=o):ar(e,n,a));break;default:ar(e,n,a)}}function A0(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function So(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,C0(o,e)}A0(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)R0(e),e=e.sibling}function R0(e){switch(e.tag){case 0:case 11:case 15:So(e),e.flags&2048&&Oa(9,e,e.return);break;case 3:So(e);break;case 12:So(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,Xl(e)):So(e);break;default:So(e)}}function Xl(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];vn=o,C0(o,e)}A0(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:Oa(8,n,n.return),Xl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Xl(n));break;default:Xl(n)}e=e.sibling}}function C0(e,n){for(;vn!==null;){var a=vn;switch(a.tag){case 0:case 11:case 15:Oa(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:no(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,vn=o;else t:for(a=e;vn!==null;){o=vn;var c=o.sibling,h=o.return;if(_0(o),o===a){vn=null;break t}if(c!==null){c.return=h,vn=c;break t}vn=h}}}var Qx={getCacheForType:function(e){var n=An(on),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a},cacheSignal:function(){return An(on).controller.signal}},Jx=typeof WeakMap=="function"?WeakMap:Map,Ue=0,ke=null,ge=null,xe=0,Ie=0,Qn=null,Pa=!1,sr=!1,Ef=!1,oa=0,en=0,za=0,xs=0,bf=0,Jn=0,rr=0,yo=null,Vn=null,Tf=!1,Wl=0,w0=0,ql=1/0,Yl=null,Ia=null,pn=0,Fa=null,or=null,la=0,Af=0,Rf=null,D0=null,Mo=0,Cf=null;function $n(){return(Ue&2)!==0&&xe!==0?xe&-xe:z.T!==null?Of():Vr()}function U0(){if(Jn===0)if((xe&536870912)===0||ye){var e=Tt;Tt<<=1,(Tt&3932160)===0&&(Tt=262144),Jn=e}else Jn=536870912;return e=Zn.current,e!==null&&(e.flags|=32),Jn}function kn(e,n,a){(e===ke&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(lr(e,0),Ba(e,xe,Jn,!1)),Dn(e,a),((Ue&2)===0||e!==ke)&&(e===ke&&((Ue&2)===0&&(xs|=a),en===4&&Ba(e,xe,Jn,!1)),Ni(e))}function N0(e,n,a){if((Ue&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&e.expiredLanes)===0||Ct(e,n),c=o?eS(e,n):Df(e,n,!0),h=o;do{if(c===0){sr&&!o&&Ba(e,n,0,!1);break}else{if(a=e.current.alternate,h&&!$x(a)){c=Df(e,n,!1),h=!1;continue}if(c===2){if(h=n,e.errorRecoveryDisabledLanes&h)var _=0;else _=e.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var T=e;c=yo;var B=T.current.memoizedState.isDehydrated;if(B&&(lr(T,_).flags|=256),_=Df(T,_,!1),_!==2){if(Ef&&!B){T.errorRecoveryDisabledLanes|=h,xs|=h,c=4;break t}h=Vn,Vn=c,h!==null&&(Vn===null?Vn=h:Vn.push.apply(Vn,h))}c=_}if(h=!1,c!==2)continue}}if(c===1){lr(e,0),Ba(e,n,0,!0);break}t:{switch(o=e,h=c,h){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Ba(o,n,Jn,!Pa);break t;case 2:Vn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(c=Wl+300-E(),10<c)){if(Ba(o,n,Jn,!Pa),xt(o,0,!0)!==0)break t;la=n,o.timeoutHandle=ug(L0.bind(null,o,a,Vn,Yl,Tf,n,Jn,xs,rr,Pa,h,"Throttled",-0,0),c);break t}L0(o,a,Vn,Yl,Tf,n,Jn,xs,rr,Pa,h,null,-0,0)}}break}while(!0);Ni(e)}function L0(e,n,a,o,c,h,_,T,B,tt,ht,_t,at,ot){if(e.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Yi},T0(n,h,_t);var kt=(h&62914560)===h?Wl-E():(h&4194048)===h?w0-E():0;if(kt=IS(_t,kt),kt!==null){la=h,e.cancelPendingCommit=kt(G0.bind(null,e,n,h,a,o,c,_,T,B,ht,_t,null,at,ot)),Ba(e,h,_,!tt);return}}G0(e,n,h,a,o,c,_,T,B)}function $x(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var c=a[o],h=c.getSnapshot;c=c.value;try{if(!Yn(h(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Ba(e,n,a,o){n&=~bf,n&=~xs,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var c=n;0<c;){var h=31-zt(c),_=1<<h;o[h]=-1,c&=~_}a!==0&&sl(e,a,n)}function jl(){return(Ue&6)===0?(Eo(0),!1):!0}function wf(){if(ge!==null){if(Ie===0)var e=ge.return;else e=ge,Qi=cs=null,Xc(e),Js=null,ao=0,e=ge;for(;e!==null;)c0(e.alternate,e),e=e.return;ge=null}}function lr(e,n){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,xS(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),la=0,wf(),ke=e,ge=a=Zi(e.current,null),xe=n,Ie=0,Qn=null,Pa=!1,sr=Ct(e,n),Ef=!1,rr=Jn=bf=xs=za=en=0,Vn=yo=null,Tf=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var c=31-zt(o),h=1<<c;n|=e[c],o&=~h}return oa=n,ml(),a}function O0(e,n){ue=null,z.H=ho,n===Qs||n===El?(n=Kp(),Ie=3):n===Nc?(n=Kp(),Ie=4):Ie=n===of?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Qn=n,ge===null&&(en=1,Il(e,oi(n,e.current)))}function P0(){var e=Zn.current;return e===null?!0:(xe&4194048)===xe?fi===null:(xe&62914560)===xe||(xe&536870912)!==0?e===fi:!1}function z0(){var e=z.H;return z.H=ho,e===null?ho:e}function I0(){var e=z.A;return z.A=Qx,e}function Zl(){en=4,Pa||(xe&4194048)!==xe&&Zn.current!==null||(sr=!0),(za&134217727)===0&&(xs&134217727)===0||ke===null||Ba(ke,xe,Jn,!1)}function Df(e,n,a){var o=Ue;Ue|=2;var c=z0(),h=I0();(ke!==e||xe!==n)&&(Yl=null,lr(e,n)),n=!1;var _=en;t:do try{if(Ie!==0&&ge!==null){var T=ge,B=Qn;switch(Ie){case 8:wf(),_=6;break t;case 3:case 2:case 9:case 6:Zn.current===null&&(n=!0);var tt=Ie;if(Ie=0,Qn=null,ur(e,T,B,tt),a&&sr){_=0;break t}break;default:tt=Ie,Ie=0,Qn=null,ur(e,T,B,tt)}}tS(),_=en;break}catch(ht){O0(e,ht)}while(!0);return n&&e.shellSuspendCounter++,Qi=cs=null,Ue=o,z.H=c,z.A=h,ge===null&&(ke=null,xe=0,ml()),_}function tS(){for(;ge!==null;)F0(ge)}function eS(e,n){var a=Ue;Ue|=2;var o=z0(),c=I0();ke!==e||xe!==n?(Yl=null,ql=E()+500,lr(e,n)):sr=Ct(e,n);t:do try{if(Ie!==0&&ge!==null){n=ge;var h=Qn;e:switch(Ie){case 1:Ie=0,Qn=null,ur(e,n,h,1);break;case 2:case 9:if(jp(h)){Ie=0,Qn=null,B0(n);break}n=function(){Ie!==2&&Ie!==9||ke!==e||(Ie=7),Ni(e)},h.then(n,n);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:jp(h)?(Ie=0,Qn=null,B0(n)):(Ie=0,Qn=null,ur(e,n,h,7));break;case 5:var _=null;switch(ge.tag){case 26:_=ge.memoizedState;case 5:case 27:var T=ge;if(_?bg(_):T.stateNode.complete){Ie=0,Qn=null;var B=T.sibling;if(B!==null)ge=B;else{var tt=T.return;tt!==null?(ge=tt,Kl(tt)):ge=null}break e}}Ie=0,Qn=null,ur(e,n,h,5);break;case 6:Ie=0,Qn=null,ur(e,n,h,6);break;case 8:wf(),en=6;break t;default:throw Error(s(462))}}nS();break}catch(ht){O0(e,ht)}while(!0);return Qi=cs=null,z.H=o,z.A=c,Ue=a,ge!==null?0:(ke=null,xe=0,ml(),en)}function nS(){for(;ge!==null&&!Yt();)F0(ge)}function F0(e){var n=l0(e.alternate,e,oa);e.memoizedProps=e.pendingProps,n===null?Kl(e):ge=n}function B0(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=n0(a,n,n.pendingProps,n.type,void 0,xe);break;case 11:n=n0(a,n,n.pendingProps,n.type.render,n.ref,xe);break;case 5:Xc(n);default:c0(a,n),n=ge=Ip(n,oa),n=l0(a,n,oa)}e.memoizedProps=e.pendingProps,n===null?Kl(e):ge=n}function ur(e,n,a,o){Qi=cs=null,Xc(n),Js=null,ao=0;var c=n.return;try{if(Xx(e,c,n,a,xe)){en=1,Il(e,oi(a,e.current)),ge=null;return}}catch(h){if(c!==null)throw ge=c,h;en=1,Il(e,oi(a,e.current)),ge=null;return}n.flags&32768?(ye||o===1?e=!0:sr||(xe&536870912)!==0?e=!1:(Pa=e=!0,(o===2||o===9||o===3||o===6)&&(o=Zn.current,o!==null&&o.tag===13&&(o.flags|=16384))),H0(n,e)):Kl(n)}function Kl(e){var n=e;do{if((n.flags&32768)!==0){H0(n,Pa);return}e=n.return;var a=Yx(n.alternate,n,oa);if(a!==null){ge=a;return}if(n=n.sibling,n!==null){ge=n;return}ge=n=e}while(n!==null);en===0&&(en=5)}function H0(e,n){do{var a=jx(e.alternate,e);if(a!==null){a.flags&=32767,ge=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){ge=e;return}ge=e=a}while(e!==null);en=6,ge=null}function G0(e,n,a,o,c,h,_,T,B){e.cancelPendingCommit=null;do Ql();while(pn!==0);if((Ue&6)!==0)throw Error(s(327));if(n!==null){if(n===e.current)throw Error(s(177));if(h=n.lanes|n.childLanes,h|=vc,vi(e,a,h,_,T,B),e===ke&&(ge=ke=null,xe=0),or=n,Fa=e,la=a,Af=h,Rf=c,D0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,rS(ut,function(){return q0(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=z.T,z.T=null,c=O.p,O.p=2,_=Ue,Ue|=4;try{Zx(e,n,a)}finally{Ue=_,O.p=c,z.T=o}}pn=1,V0(),k0(),X0()}}function V0(){if(pn===1){pn=0;var e=Fa,n=or,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=z.T,z.T=null;var o=O.p;O.p=2;var c=Ue;Ue|=4;try{M0(n,e);var h=Vf,_=Cp(e.containerInfo),T=h.focusedElem,B=h.selectionRange;if(_!==T&&T&&T.ownerDocument&&Rp(T.ownerDocument.documentElement,T)){if(B!==null&&hc(T)){var tt=B.start,ht=B.end;if(ht===void 0&&(ht=tt),"selectionStart"in T)T.selectionStart=tt,T.selectionEnd=Math.min(ht,T.value.length);else{var _t=T.ownerDocument||document,at=_t&&_t.defaultView||window;if(at.getSelection){var ot=at.getSelection(),kt=T.textContent.length,ee=Math.min(B.start,kt),Ve=B.end===void 0?ee:Math.min(B.end,kt);!ot.extend&&ee>Ve&&(_=Ve,Ve=ee,ee=_);var Y=Ap(T,ee),V=Ap(T,Ve);if(Y&&V&&(ot.rangeCount!==1||ot.anchorNode!==Y.node||ot.anchorOffset!==Y.offset||ot.focusNode!==V.node||ot.focusOffset!==V.offset)){var $=_t.createRange();$.setStart(Y.node,Y.offset),ot.removeAllRanges(),ee>Ve?(ot.addRange($),ot.extend(V.node,V.offset)):($.setEnd(V.node,V.offset),ot.addRange($))}}}}for(_t=[],ot=T;ot=ot.parentNode;)ot.nodeType===1&&_t.push({element:ot,left:ot.scrollLeft,top:ot.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<_t.length;T++){var gt=_t[T];gt.element.scrollLeft=gt.left,gt.element.scrollTop=gt.top}}uu=!!Gf,Vf=Gf=null}finally{Ue=c,O.p=o,z.T=a}}e.current=n,pn=2}}function k0(){if(pn===2){pn=0;var e=Fa,n=or,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=z.T,z.T=null;var o=O.p;O.p=2;var c=Ue;Ue|=4;try{v0(e,n.alternate,n)}finally{Ue=c,O.p=o,z.T=a}}pn=3}}function X0(){if(pn===4||pn===3){pn=0,L();var e=Fa,n=or,a=la,o=D0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?pn=5:(pn=0,or=Fa=null,W0(e,e.pendingLanes));var c=e.pendingLanes;if(c===0&&(Ia=null),Os(a),n=n.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=z.T,c=O.p,O.p=2,z.T=null;try{for(var h=e.onRecoverableError,_=0;_<o.length;_++){var T=o[_];h(T.value,{componentStack:T.stack})}}finally{z.T=n,O.p=c}}(la&3)!==0&&Ql(),Ni(e),c=e.pendingLanes,(a&261930)!==0&&(c&42)!==0?e===Cf?Mo++:(Mo=0,Cf=e):Mo=0,Eo(0)}}function W0(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,no(n)))}function Ql(){return V0(),k0(),X0(),q0()}function q0(){if(pn!==5)return!1;var e=Fa,n=Af;Af=0;var a=Os(la),o=z.T,c=O.p;try{O.p=32>a?32:a,z.T=null,a=Rf,Rf=null;var h=Fa,_=la;if(pn=0,or=Fa=null,la=0,(Ue&6)!==0)throw Error(s(331));var T=Ue;if(Ue|=4,R0(h.current),b0(h,h.current,_,a),Ue=T,Eo(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,h)}catch{}return!0}finally{O.p=c,z.T=o,W0(e,n)}}function Y0(e,n,a){n=oi(a,n),n=rf(e.stateNode,n,2),e=Ua(e,n,2),e!==null&&(Dn(e,2),Ni(e))}function Fe(e,n,a){if(e.tag===3)Y0(e,e,a);else for(;n!==null;){if(n.tag===3){Y0(n,e,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ia===null||!Ia.has(o))){e=oi(a,e),a=jm(2),o=Ua(n,a,2),o!==null&&(Zm(a,o,n,e),Dn(o,2),Ni(o));break}}n=n.return}}function Uf(e,n,a){var o=e.pingCache;if(o===null){o=e.pingCache=new Jx;var c=new Set;o.set(n,c)}else c=o.get(n),c===void 0&&(c=new Set,o.set(n,c));c.has(a)||(Ef=!0,c.add(a),e=iS.bind(null,e,n,a),n.then(e,e))}function iS(e,n,a){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,ke===e&&(xe&a)===a&&(en===4||en===3&&(xe&62914560)===xe&&300>E()-Wl?(Ue&2)===0&&lr(e,0):bf|=a,rr===xe&&(rr=0)),Ni(e)}function j0(e,n){n===0&&(n=Pe()),e=os(e,n),e!==null&&(Dn(e,n),Ni(e))}function aS(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),j0(e,a)}function sS(e,n){var a=0;switch(e.tag){case 31:case 13:var o=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),j0(e,a)}function rS(e,n){return Me(e,n)}var Jl=null,cr=null,Nf=!1,$l=!1,Lf=!1,Ha=0;function Ni(e){e!==cr&&e.next===null&&(cr===null?Jl=cr=e:cr=cr.next=e),$l=!0,Nf||(Nf=!0,lS())}function Eo(e,n){if(!Lf&&$l){Lf=!0;do for(var a=!1,o=Jl;o!==null;){if(e!==0){var c=o.pendingLanes;if(c===0)var h=0;else{var _=o.suspendedLanes,T=o.pingedLanes;h=(1<<31-zt(42|e)+1)-1,h&=c&~(_&~T),h=h&201326741?h&201326741|1:h?h|2:0}h!==0&&(a=!0,J0(o,h))}else h=xe,h=xt(o,o===ke?h:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(h&3)===0||Ct(o,h)||(a=!0,J0(o,h));o=o.next}while(a);Lf=!1}}function oS(){Z0()}function Z0(){$l=Nf=!1;var e=0;Ha!==0&&_S()&&(e=Ha);for(var n=E(),a=null,o=Jl;o!==null;){var c=o.next,h=K0(o,n);h===0?(o.next=null,a===null?Jl=c:a.next=c,c===null&&(cr=a)):(a=o,(e!==0||(h&3)!==0)&&($l=!0)),o=c}pn!==0&&pn!==5||Eo(e),Ha!==0&&(Ha=0)}function K0(e,n){for(var a=e.suspendedLanes,o=e.pingedLanes,c=e.expirationTimes,h=e.pendingLanes&-62914561;0<h;){var _=31-zt(h),T=1<<_,B=c[_];B===-1?((T&a)===0||(T&o)!==0)&&(c[_]=ae(T,n)):B<=n&&(e.expiredLanes|=T),h&=~T}if(n=ke,a=xe,a=xt(e,e===n?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,a===0||e===n&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&Ne(o),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ct(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(o!==null&&Ne(o),Os(a)){case 2:case 8:a=St;break;case 32:a=ut;break;case 268435456:a=Dt;break;default:a=ut}return o=Q0.bind(null,e),a=Me(a,o),e.callbackPriority=n,e.callbackNode=a,n}return o!==null&&o!==null&&Ne(o),e.callbackPriority=2,e.callbackNode=null,2}function Q0(e,n){if(pn!==0&&pn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Ql()&&e.callbackNode!==a)return null;var o=xe;return o=xt(e,e===ke?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(N0(e,o,n),K0(e,E()),e.callbackNode!=null&&e.callbackNode===a?Q0.bind(null,e):null)}function J0(e,n){if(Ql())return null;N0(e,n,!0)}function lS(){SS(function(){(Ue&6)!==0?Me(pt,oS):Z0()})}function Of(){if(Ha===0){var e=Zs;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),Ha=e}return Ha}function $0(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:ol(""+e)}function tg(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function uS(e,n,a,o,c){if(n==="submit"&&a&&a.stateNode===c){var h=$0((c[xn]||null).action),_=o.submitter;_&&(n=(n=_[xn]||null)?$0(n.formAction):_.getAttribute("formAction"),n!==null&&(h=n,_=null));var T=new fl("action","action",null,o,c);e.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Ha!==0){var B=_?tg(c,_):new FormData(c);$c(a,{pending:!0,data:B,method:c.method,action:h},null,B)}}else typeof h=="function"&&(T.preventDefault(),B=_?tg(c,_):new FormData(c),$c(a,{pending:!0,data:B,method:c.method,action:h},h,B))},currentTarget:c}]})}}for(var Pf=0;Pf<gc.length;Pf++){var zf=gc[Pf],cS=zf.toLowerCase(),fS=zf[0].toUpperCase()+zf.slice(1);Si(cS,"on"+fS)}Si(Up,"onAnimationEnd"),Si(Np,"onAnimationIteration"),Si(Lp,"onAnimationStart"),Si("dblclick","onDoubleClick"),Si("focusin","onFocus"),Si("focusout","onBlur"),Si(Rx,"onTransitionRun"),Si(Cx,"onTransitionStart"),Si(wx,"onTransitionCancel"),Si(Op,"onTransitionEnd"),Z("onMouseEnter",["mouseout","mouseover"]),Z("onMouseLeave",["mouseout","mouseover"]),Z("onPointerEnter",["pointerout","pointerover"]),Z("onPointerLeave",["pointerout","pointerover"]),it("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),it("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),it("onBeforeInput",["compositionend","keypress","textInput","paste"]),it("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),it("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var bo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),hS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(bo));function eg(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var o=e[a],c=o.event;o=o.listeners;t:{var h=void 0;if(n)for(var _=o.length-1;0<=_;_--){var T=o[_],B=T.instance,tt=T.currentTarget;if(T=T.listener,B!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=tt;try{h(c)}catch(ht){pl(ht)}c.currentTarget=null,h=B}else for(_=0;_<o.length;_++){if(T=o[_],B=T.instance,tt=T.currentTarget,T=T.listener,B!==h&&c.isPropagationStopped())break t;h=T,c.currentTarget=tt;try{h(c)}catch(ht){pl(ht)}c.currentTarget=null,h=B}}}}function ve(e,n){var a=n[Ps];a===void 0&&(a=n[Ps]=new Set);var o=e+"__bubble";a.has(o)||(ng(n,e,2,!1),a.add(o))}function If(e,n,a){var o=0;n&&(o|=4),ng(a,e,o,n)}var tu="_reactListening"+Math.random().toString(36).slice(2);function Ff(e){if(!e[tu]){e[tu]=!0,q.forEach(function(a){a!=="selectionchange"&&(hS.has(a)||If(a,!1,e),If(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[tu]||(n[tu]=!0,If("selectionchange",!1,n))}}function ng(e,n,a,o){switch(Ug(n)){case 2:var c=HS;break;case 8:c=GS;break;default:c=$f}a=c.bind(null,n,a,e),c=void 0,!ic||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),o?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function Bf(e,n,a,o,c){var h=o;if((n&1)===0&&(n&2)===0&&o!==null)t:for(;;){if(o===null)return;var _=o.tag;if(_===3||_===4){var T=o.stateNode.containerInfo;if(T===c)break;if(_===4)for(_=o.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===c)return;_=_.return}for(;T!==null;){if(_=ya(T),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){o=h=_;continue t}T=T.parentNode}}o=o.return}op(function(){var tt=h,ht=ec(a),_t=[];t:{var at=Pp.get(e);if(at!==void 0){var ot=fl,kt=e;switch(e){case"keypress":if(ul(a)===0)break t;case"keydown":case"keyup":ot=sx;break;case"focusin":kt="focus",ot=oc;break;case"focusout":kt="blur",ot=oc;break;case"beforeblur":case"afterblur":ot=oc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ot=cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ot=Y_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ot=lx;break;case Up:case Np:case Lp:ot=K_;break;case Op:ot=cx;break;case"scroll":case"scrollend":ot=W_;break;case"wheel":ot=hx;break;case"copy":case"cut":case"paste":ot=J_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ot=hp;break;case"toggle":case"beforetoggle":ot=px}var ee=(n&4)!==0,Ve=!ee&&(e==="scroll"||e==="scrollend"),Y=ee?at!==null?at+"Capture":null:at;ee=[];for(var V=tt,$;V!==null;){var gt=V;if($=gt.stateNode,gt=gt.tag,gt!==5&&gt!==26&&gt!==27||$===null||Y===null||(gt=Wr(V,Y),gt!=null&&ee.push(To(V,gt,$))),Ve)break;V=V.return}0<ee.length&&(at=new ot(at,kt,null,a,ht),_t.push({event:at,listeners:ee}))}}if((n&7)===0){t:{if(at=e==="mouseover"||e==="pointerover",ot=e==="mouseout"||e==="pointerout",at&&a!==tc&&(kt=a.relatedTarget||a.fromElement)&&(ya(kt)||kt[_i]))break t;if((ot||at)&&(at=ht.window===ht?ht:(at=ht.ownerDocument)?at.defaultView||at.parentWindow:window,ot?(kt=a.relatedTarget||a.toElement,ot=tt,kt=kt?ya(kt):null,kt!==null&&(Ve=u(kt),ee=kt.tag,kt!==Ve||ee!==5&&ee!==27&&ee!==6)&&(kt=null)):(ot=null,kt=tt),ot!==kt)){if(ee=cp,gt="onMouseLeave",Y="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ee=hp,gt="onPointerLeave",Y="onPointerEnter",V="pointer"),Ve=ot==null?at:is(ot),$=kt==null?at:is(kt),at=new ee(gt,V+"leave",ot,a,ht),at.target=Ve,at.relatedTarget=$,gt=null,ya(ht)===tt&&(ee=new ee(Y,V+"enter",kt,a,ht),ee.target=$,ee.relatedTarget=Ve,gt=ee),Ve=gt,ot&&kt)e:{for(ee=dS,Y=ot,V=kt,$=0,gt=Y;gt;gt=ee(gt))$++;gt=0;for(var Jt=V;Jt;Jt=ee(Jt))gt++;for(;0<$-gt;)Y=ee(Y),$--;for(;0<gt-$;)V=ee(V),gt--;for(;$--;){if(Y===V||V!==null&&Y===V.alternate){ee=Y;break e}Y=ee(Y),V=ee(V)}ee=null}else ee=null;ot!==null&&ig(_t,at,ot,ee,!1),kt!==null&&Ve!==null&&ig(_t,Ve,kt,ee,!0)}}t:{if(at=tt?is(tt):window,ot=at.nodeName&&at.nodeName.toLowerCase(),ot==="select"||ot==="input"&&at.type==="file")var Te=Sp;else if(_p(at))if(yp)Te=bx;else{Te=Mx;var jt=yx}else ot=at.nodeName,!ot||ot.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?tt&&xi(tt.elementType)&&(Te=Sp):Te=Ex;if(Te&&(Te=Te(e,tt))){xp(_t,Te,a,ht);break t}jt&&jt(e,at,tt),e==="focusout"&&tt&&at.type==="number"&&tt.memoizedProps.value!=null&&yn(at,"number",at.value)}switch(jt=tt?is(tt):window,e){case"focusin":(_p(jt)||jt.contentEditable==="true")&&(Gs=jt,dc=tt,$r=null);break;case"focusout":$r=dc=Gs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,wp(_t,a,ht);break;case"selectionchange":if(Ax)break;case"keydown":case"keyup":wp(_t,a,ht)}var fe;if(uc)t:{switch(e){case"compositionstart":var Se="onCompositionStart";break t;case"compositionend":Se="onCompositionEnd";break t;case"compositionupdate":Se="onCompositionUpdate";break t}Se=void 0}else Hs?gp(e,a)&&(Se="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Se="onCompositionStart");Se&&(dp&&a.locale!=="ko"&&(Hs||Se!=="onCompositionStart"?Se==="onCompositionEnd"&&Hs&&(fe=lp()):(ba=ht,ac="value"in ba?ba.value:ba.textContent,Hs=!0)),jt=eu(tt,Se),0<jt.length&&(Se=new fp(Se,e,null,a,ht),_t.push({event:Se,listeners:jt}),fe?Se.data=fe:(fe=vp(a),fe!==null&&(Se.data=fe)))),(fe=gx?vx(e,a):_x(e,a))&&(Se=eu(tt,"onBeforeInput"),0<Se.length&&(jt=new fp("onBeforeInput","beforeinput",null,a,ht),_t.push({event:jt,listeners:Se}),jt.data=fe)),uS(_t,e,tt,a,ht)}eg(_t,n)})}function To(e,n,a){return{instance:e,listener:n,currentTarget:a}}function eu(e,n){for(var a=n+"Capture",o=[];e!==null;){var c=e,h=c.stateNode;if(c=c.tag,c!==5&&c!==26&&c!==27||h===null||(c=Wr(e,a),c!=null&&o.unshift(To(e,c,h)),c=Wr(e,n),c!=null&&o.push(To(e,c,h))),e.tag===3)return o;e=e.return}return[]}function dS(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function ig(e,n,a,o,c){for(var h=n._reactName,_=[];a!==null&&a!==o;){var T=a,B=T.alternate,tt=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||tt===null||(B=tt,c?(tt=Wr(a,h),tt!=null&&_.unshift(To(a,tt,B))):c||(tt=Wr(a,h),tt!=null&&_.push(To(a,tt,B)))),a=a.return}_.length!==0&&e.push({event:n,listeners:_})}var pS=/\r\n?/g,mS=/\u0000|\uFFFD/g;function ag(e){return(typeof e=="string"?e:""+e).replace(pS,`
`).replace(mS,"")}function sg(e,n){return n=ag(n),ag(e)===n}function Ge(e,n,a,o,c,h){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||dn(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&dn(e,""+o);break;case"className":$t(e,"class",o);break;case"tabIndex":$t(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":$t(e,a,o);break;case"style":Is(e,o,h);break;case"data":if(n!=="object"){$t(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof h=="function"&&(a==="formAction"?(n!=="input"&&Ge(e,n,"name",c.name,c,null),Ge(e,n,"formEncType",c.formEncType,c,null),Ge(e,n,"formMethod",c.formMethod,c,null),Ge(e,n,"formTarget",c.formTarget,c,null)):(Ge(e,n,"encType",c.encType,c,null),Ge(e,n,"method",c.method,c,null),Ge(e,n,"target",c.target,c,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(a);break}o=ol(""+o),e.setAttribute(a,o);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}a=ol(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""+o):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":o===!0?e.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(a,o):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(a,o):e.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(a):e.setAttribute(a,o);break;case"popover":ve("beforetoggle",e),ve("toggle",e),Wt(e,"popover",o);break;case"xlinkActuate":qt(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":qt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":qt(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":qt(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":qt(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":qt(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":qt(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":qt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":qt(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":Wt(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=k_.get(a)||a,Wt(e,a,o))}}function Hf(e,n,a,o,c,h){switch(a){case"style":Is(e,o,h);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(c.children!=null)throw Error(s(60));e.innerHTML=a}}break;case"children":typeof o=="string"?dn(e,o):(typeof o=="number"||typeof o=="bigint")&&dn(e,""+o);break;case"onScroll":o!=null&&ve("scroll",e);break;case"onScrollEnd":o!=null&&ve("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Yi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),h=e[xn]||null,h=h!=null?h[a]:null,typeof h=="function"&&e.removeEventListener(n,h,c),typeof o=="function")){typeof h!="function"&&h!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,o,c);break t}a in e?e[a]=o:o===!0?e.setAttribute(a,""):Wt(e,a,o)}}}function Cn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",e),ve("load",e);var o=!1,c=!1,h;for(h in a)if(a.hasOwnProperty(h)){var _=a[h];if(_!=null)switch(h){case"src":o=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,h,_,a,null)}}c&&Ge(e,n,"srcSet",a.srcSet,a,null),o&&Ge(e,n,"src",a.src,a,null);return;case"input":ve("invalid",e);var T=h=_=c=null,B=null,tt=null;for(o in a)if(a.hasOwnProperty(o)){var ht=a[o];if(ht!=null)switch(o){case"name":c=ht;break;case"type":_=ht;break;case"checked":B=ht;break;case"defaultChecked":tt=ht;break;case"value":h=ht;break;case"defaultValue":T=ht;break;case"children":case"dangerouslySetInnerHTML":if(ht!=null)throw Error(s(137,n));break;default:Ge(e,n,o,ht,a,null)}}qi(e,h,T,B,tt,_,c,!1);return;case"select":ve("invalid",e),o=_=h=null;for(c in a)if(a.hasOwnProperty(c)&&(T=a[c],T!=null))switch(c){case"value":h=T;break;case"defaultValue":_=T;break;case"multiple":o=T;default:Ge(e,n,c,T,a,null)}n=h,a=_,e.multiple=!!o,n!=null?si(e,!!o,n,!1):a!=null&&si(e,!!o,a,!0);return;case"textarea":ve("invalid",e),h=c=o=null;for(_ in a)if(a.hasOwnProperty(_)&&(T=a[_],T!=null))switch(_){case"value":o=T;break;case"defaultValue":c=T;break;case"children":h=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Ge(e,n,_,T,a,null)}Mn(e,o,c,h);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,B,o,a,null));return;case"dialog":ve("beforetoggle",e),ve("toggle",e),ve("cancel",e),ve("close",e);break;case"iframe":case"object":ve("load",e);break;case"video":case"audio":for(o=0;o<bo.length;o++)ve(bo[o],e);break;case"image":ve("error",e),ve("load",e);break;case"details":ve("toggle",e);break;case"embed":case"source":case"link":ve("error",e),ve("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(tt in a)if(a.hasOwnProperty(tt)&&(o=a[tt],o!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Ge(e,n,tt,o,a,null)}return;default:if(xi(n)){for(ht in a)a.hasOwnProperty(ht)&&(o=a[ht],o!==void 0&&Hf(e,n,ht,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Ge(e,n,T,o,a,null))}function gS(e,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,h=null,_=null,T=null,B=null,tt=null,ht=null;for(ot in a){var _t=a[ot];if(a.hasOwnProperty(ot)&&_t!=null)switch(ot){case"checked":break;case"value":break;case"defaultValue":B=_t;default:o.hasOwnProperty(ot)||Ge(e,n,ot,null,o,_t)}}for(var at in o){var ot=o[at];if(_t=a[at],o.hasOwnProperty(at)&&(ot!=null||_t!=null))switch(at){case"type":h=ot;break;case"name":c=ot;break;case"checked":tt=ot;break;case"defaultChecked":ht=ot;break;case"value":_=ot;break;case"defaultValue":T=ot;break;case"children":case"dangerouslySetInnerHTML":if(ot!=null)throw Error(s(137,n));break;default:ot!==_t&&Ge(e,n,at,ot,o,_t)}}Sn(e,_,T,B,tt,ht,h,c);return;case"select":ot=_=T=at=null;for(h in a)if(B=a[h],a.hasOwnProperty(h)&&B!=null)switch(h){case"value":break;case"multiple":ot=B;default:o.hasOwnProperty(h)||Ge(e,n,h,null,o,B)}for(c in o)if(h=o[c],B=a[c],o.hasOwnProperty(c)&&(h!=null||B!=null))switch(c){case"value":at=h;break;case"defaultValue":T=h;break;case"multiple":_=h;default:h!==B&&Ge(e,n,c,h,o,B)}n=T,a=_,o=ot,at!=null?si(e,!!a,at,!1):!!o!=!!a&&(n!=null?si(e,!!a,n,!0):si(e,!!a,a?[]:"",!1));return;case"textarea":ot=at=null;for(T in a)if(c=a[T],a.hasOwnProperty(T)&&c!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Ge(e,n,T,null,o,c)}for(_ in o)if(c=o[_],h=a[_],o.hasOwnProperty(_)&&(c!=null||h!=null))switch(_){case"value":at=c;break;case"defaultValue":ot=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(s(91));break;default:c!==h&&Ge(e,n,_,c,o,h)}ze(e,at,ot);return;case"option":for(var kt in a)at=a[kt],a.hasOwnProperty(kt)&&at!=null&&!o.hasOwnProperty(kt)&&(kt==="selected"?e.selected=!1:Ge(e,n,kt,null,o,at));for(B in o)at=o[B],ot=a[B],o.hasOwnProperty(B)&&at!==ot&&(at!=null||ot!=null)&&(B==="selected"?e.selected=at&&typeof at!="function"&&typeof at!="symbol":Ge(e,n,B,at,o,ot));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ee in a)at=a[ee],a.hasOwnProperty(ee)&&at!=null&&!o.hasOwnProperty(ee)&&Ge(e,n,ee,null,o,at);for(tt in o)if(at=o[tt],ot=a[tt],o.hasOwnProperty(tt)&&at!==ot&&(at!=null||ot!=null))switch(tt){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(s(137,n));break;default:Ge(e,n,tt,at,o,ot)}return;default:if(xi(n)){for(var Ve in a)at=a[Ve],a.hasOwnProperty(Ve)&&at!==void 0&&!o.hasOwnProperty(Ve)&&Hf(e,n,Ve,void 0,o,at);for(ht in o)at=o[ht],ot=a[ht],!o.hasOwnProperty(ht)||at===ot||at===void 0&&ot===void 0||Hf(e,n,ht,at,o,ot);return}}for(var Y in a)at=a[Y],a.hasOwnProperty(Y)&&at!=null&&!o.hasOwnProperty(Y)&&Ge(e,n,Y,null,o,at);for(_t in o)at=o[_t],ot=a[_t],!o.hasOwnProperty(_t)||at===ot||at==null&&ot==null||Ge(e,n,_t,at,o,ot)}function rg(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var c=a[o],h=c.transferSize,_=c.initiatorType,T=c.duration;if(h&&T&&rg(_)){for(_=0,T=c.responseEnd,o+=1;o<a.length;o++){var B=a[o],tt=B.startTime;if(tt>T)break;var ht=B.transferSize,_t=B.initiatorType;ht&&rg(_t)&&(B=B.responseEnd,_+=ht*(B<T?1:(T-tt)/(B-tt)))}if(--o,n+=8*(h+_)/(c.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gf=null,Vf=null;function nu(e){return e.nodeType===9?e:e.ownerDocument}function og(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function lg(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function kf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Xf=null;function _S(){var e=window.event;return e&&e.type==="popstate"?e===Xf?!1:(Xf=e,!0):(Xf=null,!1)}var ug=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,cg=typeof Promise=="function"?Promise:void 0,SS=typeof queueMicrotask=="function"?queueMicrotask:typeof cg<"u"?function(e){return cg.resolve(null).then(e).catch(yS)}:ug;function yS(e){setTimeout(function(){throw e})}function Ga(e){return e==="head"}function fg(e,n){var a=n,o=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"||a==="/&"){if(o===0){e.removeChild(c),pr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Ao(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,Ao(a);for(var h=a.firstChild;h;){var _=h.nextSibling,T=h.nodeName;h[ns]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&h.rel.toLowerCase()==="stylesheet"||a.removeChild(h),h=_}}else a==="body"&&Ao(e.ownerDocument.body);a=c}while(a);pr(n)}function hg(e,n){var a=e;e=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=o}while(a)}function Wf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Wf(a),Xr(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function MS(e,n,a,o){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[ns])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(h=e.getAttribute("rel"),h==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(h!==c.rel||e.getAttribute("href")!==(c.href==null||c.href===""?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(h=e.getAttribute("src"),(h!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&h&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var h=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===h)return e}else return e;if(e=hi(e.nextSibling),e===null)break}return null}function ES(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=hi(e.nextSibling),e===null))return null;return e}function dg(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=hi(e.nextSibling),e===null))return null;return e}function qf(e){return e.data==="$?"||e.data==="$~"}function Yf(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function bS(e,n){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function hi(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var jf=null;function pg(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(n===0)return hi(e.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}e=e.nextSibling}return null}function mg(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return e;n--}else a!=="/$"&&a!=="/&"||n++}e=e.previousSibling}return null}function gg(e,n,a){switch(n=nu(a),e){case"html":if(e=n.documentElement,!e)throw Error(s(452));return e;case"head":if(e=n.head,!e)throw Error(s(453));return e;case"body":if(e=n.body,!e)throw Error(s(454));return e;default:throw Error(s(451))}}function Ao(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Xr(e)}var di=new Map,vg=new Set;function iu(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var ua=O.d;O.d={f:TS,r:AS,D:RS,C:CS,L:wS,m:DS,X:NS,S:US,M:LS};function TS(){var e=ua.f(),n=jl();return e||n}function AS(e){var n=Ma(e);n!==null&&n.tag===5&&n.type==="form"?Om(n):ua.r(e)}var fr=typeof document>"u"?null:document;function _g(e,n,a){var o=fr;if(o&&typeof n=="string"&&n){var c=se(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),vg.has(c)||(vg.add(c),e={rel:e,crossOrigin:a,href:n},o.querySelector(c)===null&&(n=o.createElement("link"),Cn(n,"link",e),A(n),o.head.appendChild(n)))}}function RS(e){ua.D(e),_g("dns-prefetch",e,null)}function CS(e,n){ua.C(e,n),_g("preconnect",e,n)}function wS(e,n,a){ua.L(e,n,a);var o=fr;if(o&&e&&n){var c='link[rel="preload"][as="'+se(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+se(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+se(a.imageSizes)+'"]')):c+='[href="'+se(e)+'"]';var h=c;switch(n){case"style":h=hr(e);break;case"script":h=dr(e)}di.has(h)||(e=g({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),di.set(h,e),o.querySelector(c)!==null||n==="style"&&o.querySelector(Ro(h))||n==="script"&&o.querySelector(Co(h))||(n=o.createElement("link"),Cn(n,"link",e),A(n),o.head.appendChild(n)))}}function DS(e,n){ua.m(e,n);var a=fr;if(a&&e){var o=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+se(o)+'"][href="'+se(e)+'"]',h=c;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":h=dr(e)}if(!di.has(h)&&(e=g({rel:"modulepreload",href:e},n),di.set(h,e),a.querySelector(c)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(Co(h)))return}o=a.createElement("link"),Cn(o,"link",e),A(o),a.head.appendChild(o)}}}function US(e,n,a){ua.S(e,n,a);var o=fr;if(o&&e){var c=Ea(o).hoistableStyles,h=hr(e);n=n||"default";var _=c.get(h);if(!_){var T={loading:0,preload:null};if(_=o.querySelector(Ro(h)))T.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},a),(a=di.get(h))&&Zf(e,a);var B=_=o.createElement("link");A(B),Cn(B,"link",e),B._p=new Promise(function(tt,ht){B.onload=tt,B.onerror=ht}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,au(_,n,o)}_={type:"stylesheet",instance:_,count:1,state:T},c.set(h,_)}}}function NS(e,n){ua.X(e,n);var a=fr;if(a&&e){var o=Ea(a).hoistableScripts,c=dr(e),h=o.get(c);h||(h=a.querySelector(Co(c)),h||(e=g({src:e,async:!0},n),(n=di.get(c))&&Kf(e,n),h=a.createElement("script"),A(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function LS(e,n){ua.M(e,n);var a=fr;if(a&&e){var o=Ea(a).hoistableScripts,c=dr(e),h=o.get(c);h||(h=a.querySelector(Co(c)),h||(e=g({src:e,async:!0,type:"module"},n),(n=di.get(c))&&Kf(e,n),h=a.createElement("script"),A(h),Cn(h,"link",e),a.head.appendChild(h)),h={type:"script",instance:h,count:1,state:null},o.set(c,h))}}function xg(e,n,a,o){var c=(c=et.current)?iu(c):null;if(!c)throw Error(s(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=hr(a.href),a=Ea(c).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=hr(a.href);var h=Ea(c).hoistableStyles,_=h.get(e);if(_||(c=c.ownerDocument||c,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},h.set(e,_),(h=c.querySelector(Ro(e)))&&!h._p&&(_.instance=h,_.state.loading=5),di.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},di.set(e,a),h||OS(c,e,a,_.state))),n&&o===null)throw Error(s(528,""));return _}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=dr(a),a=Ea(c).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,e))}}function hr(e){return'href="'+se(e)+'"'}function Ro(e){return'link[rel="stylesheet"]['+e+"]"}function Sg(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function OS(e,n,a,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Cn(n,"link",a),A(n),e.head.appendChild(n))}function dr(e){return'[src="'+se(e)+'"]'}function Co(e){return"script[async]"+e}function yg(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+se(a.href)+'"]');if(o)return n.instance=o,A(o),o;var c=g({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),A(o),Cn(o,"style",c),au(o,a.precedence,e),n.instance=o;case"stylesheet":c=hr(a.href);var h=e.querySelector(Ro(c));if(h)return n.state.loading|=4,n.instance=h,A(h),h;o=Sg(a),(c=di.get(c))&&Zf(o,c),h=(e.ownerDocument||e).createElement("link"),A(h);var _=h;return _._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(h,"link",o),n.state.loading|=4,au(h,a.precedence,e),n.instance=h;case"script":return h=dr(a.src),(c=e.querySelector(Co(h)))?(n.instance=c,A(c),c):(o=a,(c=di.get(h))&&(o=g({},a),Kf(o,c)),e=e.ownerDocument||e,c=e.createElement("script"),A(c),Cn(c,"link",o),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,au(o,a.precedence,e));return n.instance}function au(e,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=o.length?o[o.length-1]:null,h=c,_=0;_<o.length;_++){var T=o[_];if(T.dataset.precedence===n)h=T;else if(h!==c)break}h?h.parentNode.insertBefore(e,h.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function Zf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Kf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var su=null;function Mg(e,n,a){if(su===null){var o=new Map,c=su=new Map;c.set(a,o)}else c=su,o=c.get(a),o||(o=new Map,c.set(a,o));if(o.has(e))return o;for(o.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var h=a[c];if(!(h[ns]||h[rn]||e==="link"&&h.getAttribute("rel")==="stylesheet")&&h.namespaceURI!=="http://www.w3.org/2000/svg"){var _=h.getAttribute(n)||"";_=e+_;var T=o.get(_);T?T.push(h):o.set(_,[h])}}return o}function Eg(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function PS(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function bg(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function zS(e,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var c=hr(o.href),h=n.querySelector(Ro(c));if(h){n=h._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=ru.bind(e),n.then(e,e)),a.state.loading|=4,a.instance=h,A(h);return}h=n.ownerDocument||n,o=Sg(o),(c=di.get(c))&&Zf(o,c),h=h.createElement("link"),A(h);var _=h;_._p=new Promise(function(T,B){_.onload=T,_.onerror=B}),Cn(h,"link",o),a.instance=h}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=ru.bind(e),n.addEventListener("load",a),n.addEventListener("error",a))}}var Qf=0;function IS(e,n){return e.stylesheets&&e.count===0&&lu(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var o=setTimeout(function(){if(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend){var h=e.unsuspend;e.unsuspend=null,h()}},6e4+n);0<e.imgBytes&&Qf===0&&(Qf=62500*vS());var c=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&lu(e,e.stylesheets),e.unsuspend)){var h=e.unsuspend;e.unsuspend=null,h()}},(e.imgBytes>Qf?50:800)+n);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(c)}}:null}function ru(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)lu(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ou=null;function lu(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ou=new Map,n.forEach(FS,e),ou=null,ru.call(e))}function FS(e,n){if(!(n.state.loading&4)){var a=ou.get(e);if(a)var o=a.get(null);else{a=new Map,ou.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),h=0;h<c.length;h++){var _=c[h];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),o=_)}o&&a.set(null,o)}c=n.instance,_=c.getAttribute("data-precedence"),h=a.get(_)||o,h===o&&a.set(null,c),a.set(_,c),this.count++,o=ru.bind(this),c.addEventListener("load",o),c.addEventListener("error",o),h?h.parentNode.insertBefore(c,h.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var wo={$$typeof:N,Provider:null,Consumer:null,_currentValue:j,_currentValue2:j,_threadCount:0};function BS(e,n,a,o,c,h,_,T,B){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=o,this.onUncaughtError=c,this.onCaughtError=h,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Tg(e,n,a,o,c,h,_,T,B,tt,ht,_t){return e=new BS(e,n,a,_,B,tt,ht,_t,T),n=1,h===!0&&(n|=24),h=jn(3,null,null,n),e.current=h,h.stateNode=e,n=wc(),n.refCount++,e.pooledCache=n,n.refCount++,h.memoizedState={element:o,isDehydrated:a,cache:n},Lc(h),e}function Ag(e){return e?(e=Xs,e):Xs}function Rg(e,n,a,o,c,h){c=Ag(c),o.context===null?o.context=c:o.pendingContext=c,o=Da(n),o.payload={element:a},h=h===void 0?null:h,h!==null&&(o.callback=h),a=Ua(e,o,n),a!==null&&(kn(a,e,n),ro(a,e,n))}function Cg(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Jf(e,n){Cg(e,n),(e=e.alternate)&&Cg(e,n)}function wg(e){if(e.tag===13||e.tag===31){var n=os(e,67108864);n!==null&&kn(n,e,67108864),Jf(e,67108864)}}function Dg(e){if(e.tag===13||e.tag===31){var n=$n();n=Gr(n);var a=os(e,n);a!==null&&kn(a,e,n),Jf(e,n)}}var uu=!0;function HS(e,n,a,o){var c=z.T;z.T=null;var h=O.p;try{O.p=2,$f(e,n,a,o)}finally{O.p=h,z.T=c}}function GS(e,n,a,o){var c=z.T;z.T=null;var h=O.p;try{O.p=8,$f(e,n,a,o)}finally{O.p=h,z.T=c}}function $f(e,n,a,o){if(uu){var c=th(o);if(c===null)Bf(e,n,o,cu,a),Ng(e,o);else if(kS(c,e,n,a,o))o.stopPropagation();else if(Ng(e,o),n&4&&-1<VS.indexOf(e)){for(;c!==null;){var h=Ma(c);if(h!==null)switch(h.tag){case 3:if(h=h.stateNode,h.current.memoizedState.isDehydrated){var _=Mt(h.pendingLanes);if(_!==0){var T=h;for(T.pendingLanes|=2,T.entangledLanes|=2;_;){var B=1<<31-zt(_);T.entanglements[1]|=B,_&=~B}Ni(h),(Ue&6)===0&&(ql=E()+500,Eo(0))}}break;case 31:case 13:T=os(h,2),T!==null&&kn(T,h,2),jl(),Jf(h,2)}if(h=th(o),h===null&&Bf(e,n,o,cu,a),h===c)break;c=h}c!==null&&o.stopPropagation()}else Bf(e,n,o,null,a)}}function th(e){return e=ec(e),eh(e)}var cu=null;function eh(e){if(cu=null,e=ya(e),e!==null){var n=u(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=f(n),e!==null)return e;e=null}else if(a===31){if(e=d(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return cu=e,null}function Ug(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case pt:return 2;case St:return 8;case ut:case Zt:return 32;case Dt:return 268435456;default:return 32}default:return 32}}var nh=!1,Va=null,ka=null,Xa=null,Do=new Map,Uo=new Map,Wa=[],VS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Ng(e,n){switch(e){case"focusin":case"focusout":Va=null;break;case"dragenter":case"dragleave":ka=null;break;case"mouseover":case"mouseout":Xa=null;break;case"pointerover":case"pointerout":Do.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Uo.delete(n.pointerId)}}function No(e,n,a,o,c,h){return e===null||e.nativeEvent!==h?(e={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:h,targetContainers:[c]},n!==null&&(n=Ma(n),n!==null&&wg(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function kS(e,n,a,o,c){switch(n){case"focusin":return Va=No(Va,e,n,a,o,c),!0;case"dragenter":return ka=No(ka,e,n,a,o,c),!0;case"mouseover":return Xa=No(Xa,e,n,a,o,c),!0;case"pointerover":var h=c.pointerId;return Do.set(h,No(Do.get(h)||null,e,n,a,o,c)),!0;case"gotpointercapture":return h=c.pointerId,Uo.set(h,No(Uo.get(h)||null,e,n,a,o,c)),!0}return!1}function Lg(e){var n=ya(e.target);if(n!==null){var a=u(n);if(a!==null){if(n=a.tag,n===13){if(n=f(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){Dg(a)});return}}else if(n===31){if(n=d(a),n!==null){e.blockedOn=n,Ci(e.priority,function(){Dg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function fu(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=th(e.nativeEvent);if(a===null){a=e.nativeEvent;var o=new a.constructor(a.type,a);tc=o,a.target.dispatchEvent(o),tc=null}else return n=Ma(a),n!==null&&wg(n),e.blockedOn=a,!1;n.shift()}return!0}function Og(e,n,a){fu(e)&&a.delete(n)}function XS(){nh=!1,Va!==null&&fu(Va)&&(Va=null),ka!==null&&fu(ka)&&(ka=null),Xa!==null&&fu(Xa)&&(Xa=null),Do.forEach(Og),Uo.forEach(Og)}function hu(e,n){e.blockedOn===n&&(e.blockedOn=null,nh||(nh=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,XS)))}var du=null;function Pg(e){du!==e&&(du=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){du===e&&(du=null);for(var n=0;n<e.length;n+=3){var a=e[n],o=e[n+1],c=e[n+2];if(typeof o!="function"){if(eh(o||a)===null)continue;break}var h=Ma(a);h!==null&&(e.splice(n,3),n-=3,$c(h,{pending:!0,data:c,method:a.method,action:o},o,c))}}))}function pr(e){function n(B){return hu(B,e)}Va!==null&&hu(Va,e),ka!==null&&hu(ka,e),Xa!==null&&hu(Xa,e),Do.forEach(n),Uo.forEach(n);for(var a=0;a<Wa.length;a++){var o=Wa[a];o.blockedOn===e&&(o.blockedOn=null)}for(;0<Wa.length&&(a=Wa[0],a.blockedOn===null);)Lg(a),a.blockedOn===null&&Wa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var c=a[o],h=a[o+1],_=c[xn]||null;if(typeof h=="function")_||Pg(a);else if(_){var T=null;if(h&&h.hasAttribute("formAction")){if(c=h,_=h[xn]||null)T=_.formAction;else if(eh(c)!==null)continue}else T=_.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Pg(a)}}}function zg(){function e(h){h.canIntercept&&h.info==="react-transition"&&h.intercept({handler:function(){return new Promise(function(_){return c=_})},focusReset:"manual",scroll:"manual"})}function n(){c!==null&&(c(),c=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var h=navigation.currentEntry;h&&h.url!=null&&navigation.navigate(h.url,{state:h.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,c=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),c!==null&&(c(),c=null)}}}function ih(e){this._internalRoot=e}pu.prototype.render=ih.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=$n();Rg(a,o,e,n,null,null)},pu.prototype.unmount=ih.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;Rg(e.current,2,null,e,null,null),jl(),n[_i]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var n=Vr();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Wa.length&&n!==0&&n<Wa[a].priority;a++);Wa.splice(a,0,e),a===0&&Lg(e)}};var Ig=t.version;if(Ig!=="19.2.4")throw Error(s(527,Ig,"19.2.4"));O.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=p(n),e=e!==null?v(e):null,e=e===null?null:e.stateNode,e};var WS={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:z,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var mu=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!mu.isDisabled&&mu.supportsFiber)try{Et=mu.inject(WS),bt=mu}catch{}}return Oo.createRoot=function(e,n){if(!l(e))throw Error(s(299));var a=!1,o="",c=Xm,h=Wm,_=qm;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(h=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=Tg(e,1,!1,null,null,a,o,null,c,h,_,zg),e[_i]=n.current,Ff(e),new ih(n)},Oo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(s(299));var o=!1,c="",h=Xm,_=Wm,T=qm,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Tg(e,1,!0,n,a??null,o,c,B,h,_,T,zg),n.context=Ag(null),a=n.current,o=$n(),o=Gr(o),c=Da(o),c.callback=null,Ua(a,c,o),a=o,n.current.lanes=a,Dn(n,a),Ni(n),e[_i]=n.current,Ff(e),new pu(n)},Oo.version="19.2.4",Oo}var Yg;function ey(){if(Yg)return rh.exports;Yg=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),rh.exports=ty(),rh.exports}var ny=ey();const Xd="182",iy=0,jg=1,ay=2,Hu=1,sy=2,ko=3,es=0,Wn=1,Pi=2,ga=0,wr=1,Zg=2,Kg=3,Qg=4,ry=5,Rs=100,oy=101,ly=102,uy=103,cy=104,fy=200,hy=201,dy=202,py=203,Yh=204,jh=205,my=206,gy=207,vy=208,_y=209,xy=210,Sy=211,yy=212,My=213,Ey=214,Zh=0,Kh=1,Qh=2,Ur=3,Jh=4,$h=5,td=6,ed=7,t_=0,by=1,Ty=2,Fi=0,e_=1,n_=2,i_=3,a_=4,s_=5,r_=6,o_=7,l_=300,Us=301,Nr=302,nd=303,id=304,Zu=306,ad=1e3,ma=1001,sd=1002,wn=1003,Ay=1004,gu=1005,On=1006,ch=1007,ws=1008,ii=1009,u_=1010,c_=1011,Zo=1012,Wd=1013,Gi=1014,zi=1015,_a=1016,qd=1017,Yd=1018,Ko=1020,f_=35902,h_=35899,d_=1021,p_=1022,Ri=1023,xa=1026,Ds=1027,m_=1028,jd=1029,Lr=1030,Zd=1031,Kd=1033,Gu=33776,Vu=33777,ku=33778,Xu=33779,rd=35840,od=35841,ld=35842,ud=35843,cd=36196,fd=37492,hd=37496,dd=37488,pd=37489,md=37490,gd=37491,vd=37808,_d=37809,xd=37810,Sd=37811,yd=37812,Md=37813,Ed=37814,bd=37815,Td=37816,Ad=37817,Rd=37818,Cd=37819,wd=37820,Dd=37821,Ud=36492,Nd=36494,Ld=36495,Od=36283,Pd=36284,zd=36285,Id=36286,Ry=3200,Cy=0,wy=1,$a="",mi="srgb",Or="srgb-linear",qu="linear",Be="srgb",mr=7680,Jg=519,Dy=512,Uy=513,Ny=514,Qd=515,Ly=516,Oy=517,Jd=518,Py=519,$g=35044,tv="300 es",Ii=2e3,Yu=2001;function g_(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function ju(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function zy(){const r=ju("canvas");return r.style.display="block",r}const ev={};function nv(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Re(...r){const t="THREE."+r.shift();console.error(t,...r)}function Qo(...r){const t=r.join(" ");t in ev||(ev[t]=!0,re(...r))}function Iy(r,t,i){return new Promise(function(s,l){function u(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:s()}}setTimeout(u,i)})}class Ir{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[t]===void 0&&(s[t]=[]),s[t].indexOf(i)===-1&&s[t].push(i)}hasEventListener(t,i){const s=this._listeners;return s===void 0?!1:s[t]!==void 0&&s[t].indexOf(i)!==-1}removeEventListener(t,i){const s=this._listeners;if(s===void 0)return;const l=s[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const s=i[t.type];if(s!==void 0){t.target=this;const l=s.slice(0);for(let u=0,f=l.length;u<f;u++)l[u].call(this,t);t.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fh=Math.PI/180,Fd=180/Math.PI;function Fr(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]+"-"+Nn[t&255]+Nn[t>>8&255]+"-"+Nn[t>>16&15|64]+Nn[t>>24&255]+"-"+Nn[i&63|128]+Nn[i>>8&255]+"-"+Nn[i>>16&255]+Nn[i>>24&255]+Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]).toLowerCase()}function _e(r,t,i){return Math.max(t,Math.min(i,r))}function Fy(r,t){return(r%t+t)%t}function hh(r,t,i){return(1-i)*r+i*t}function Po(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Xn(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Qt{constructor(t=0,i=0){Qt.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,s=this.y,l=t.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y;return i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const s=Math.cos(i),l=Math.sin(i),u=this.x-t.x,f=this.y-t.y;return this.x=u*s-f*l+t.x,this.y=u*l+f*s+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class nl{constructor(t=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=s,this._w=l}static slerpFlat(t,i,s,l,u,f,d){let m=s[l+0],p=s[l+1],v=s[l+2],g=s[l+3],x=u[f+0],y=u[f+1],b=u[f+2],C=u[f+3];if(d<=0){t[i+0]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g;return}if(d>=1){t[i+0]=x,t[i+1]=y,t[i+2]=b,t[i+3]=C;return}if(g!==C||m!==x||p!==y||v!==b){let M=m*x+p*y+v*b+g*C;M<0&&(x=-x,y=-y,b=-b,C=-C,M=-M);let S=1-d;if(M<.9995){const P=Math.acos(M),N=Math.sin(P);S=Math.sin(S*P)/N,d=Math.sin(d*P)/N,m=m*S+x*d,p=p*S+y*d,v=v*S+b*d,g=g*S+C*d}else{m=m*S+x*d,p=p*S+y*d,v=v*S+b*d,g=g*S+C*d;const P=1/Math.sqrt(m*m+p*p+v*v+g*g);m*=P,p*=P,v*=P,g*=P}}t[i]=m,t[i+1]=p,t[i+2]=v,t[i+3]=g}static multiplyQuaternionsFlat(t,i,s,l,u,f){const d=s[l],m=s[l+1],p=s[l+2],v=s[l+3],g=u[f],x=u[f+1],y=u[f+2],b=u[f+3];return t[i]=d*b+v*g+m*y-p*x,t[i+1]=m*b+v*x+p*g-d*y,t[i+2]=p*b+v*y+d*x-m*g,t[i+3]=v*b-d*g-m*x-p*y,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,s,l){return this._x=t,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const s=t._x,l=t._y,u=t._z,f=t._order,d=Math.cos,m=Math.sin,p=d(s/2),v=d(l/2),g=d(u/2),x=m(s/2),y=m(l/2),b=m(u/2);switch(f){case"XYZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"YXZ":this._x=x*v*g+p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"ZXY":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g-x*y*b;break;case"ZYX":this._x=x*v*g-p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g+x*y*b;break;case"YZX":this._x=x*v*g+p*y*b,this._y=p*y*g+x*v*b,this._z=p*v*b-x*y*g,this._w=p*v*g-x*y*b;break;case"XZY":this._x=x*v*g-p*y*b,this._y=p*y*g-x*v*b,this._z=p*v*b+x*y*g,this._w=p*v*g+x*y*b;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+f)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const s=i/2,l=Math.sin(s);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,s=i[0],l=i[4],u=i[8],f=i[1],d=i[5],m=i[9],p=i[2],v=i[6],g=i[10],x=s+d+g;if(x>0){const y=.5/Math.sqrt(x+1);this._w=.25/y,this._x=(v-m)*y,this._y=(u-p)*y,this._z=(f-l)*y}else if(s>d&&s>g){const y=2*Math.sqrt(1+s-d-g);this._w=(v-m)/y,this._x=.25*y,this._y=(l+f)/y,this._z=(u+p)/y}else if(d>g){const y=2*Math.sqrt(1+d-s-g);this._w=(u-p)/y,this._x=(l+f)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+g-s-d);this._w=(f-l)/y,this._x=(u+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let s=t.dot(i)+1;return s<1e-8?(s=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=s):(this._x=0,this._y=-t.z,this._z=t.y,this._w=s)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=s),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(_e(this.dot(t),-1,1)))}rotateTowards(t,i){const s=this.angleTo(t);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const s=t._x,l=t._y,u=t._z,f=t._w,d=i._x,m=i._y,p=i._z,v=i._w;return this._x=s*v+f*d+l*p-u*m,this._y=l*v+f*m+u*d-s*p,this._z=u*v+f*p+s*m-l*d,this._w=f*v-s*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i<=0)return this;if(i>=1)return this.copy(t);let s=t._x,l=t._y,u=t._z,f=t._w,d=this.dot(t);d<0&&(s=-s,l=-l,u=-u,f=-f,d=-d);let m=1-i;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,i=Math.sin(i*p)/v,this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this._onChangeCallback()}else this._x=this._x*m+s*i,this._y=this._y*m+l*i,this._z=this._z*m+u*i,this._w=this._w*m+f*i,this.normalize();return this}slerpQuaternions(t,i,s){return this.copy(t).slerp(i,s)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),u=Math.sqrt(s);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(t=0,i=0,s=0){K.prototype.isVector3=!0,this.x=t,this.y=i,this.z=s}set(t,i,s){return s===void 0&&(s=this.z),this.x=t,this.y=i,this.z=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(iv.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(iv.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*s+u[6]*l,this.y=u[1]*i+u[4]*s+u[7]*l,this.z=u[2]*i+u[5]*s+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=t.elements,f=1/(u[3]*i+u[7]*s+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*s+u[8]*l+u[12])*f,this.y=(u[1]*i+u[5]*s+u[9]*l+u[13])*f,this.z=(u[2]*i+u[6]*s+u[10]*l+u[14])*f,this}applyQuaternion(t){const i=this.x,s=this.y,l=this.z,u=t.x,f=t.y,d=t.z,m=t.w,p=2*(f*l-d*s),v=2*(d*i-u*l),g=2*(u*s-f*i);return this.x=i+m*p+f*g-d*v,this.y=s+m*v+d*p-u*g,this.z=l+m*g+u*v-f*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,s=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*s+u[8]*l,this.y=u[1]*i+u[5]*s+u[9]*l,this.z=u[2]*i+u[6]*s+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const s=t.x,l=t.y,u=t.z,f=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*f-s*m,this.z=s*d-l*f,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const s=t.dot(this)/i;return this.copy(t).multiplyScalar(s)}projectOnPlane(t){return dh.copy(this).projectOnVector(t),this.sub(dh)}reflect(t){return this.sub(dh.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(t)/i;return Math.acos(_e(s,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,s=this.y-t.y,l=this.z-t.z;return i*i+s*s+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,s){const l=Math.sin(i)*t;return this.x=l*Math.sin(s),this.y=Math.cos(i)*t,this.z=l*Math.cos(s),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,s){return this.x=t*Math.sin(i),this.y=s,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),s=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(t),this.y=i,this.z=s*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const dh=new K,iv=new nl;class he{constructor(t,i,s,l,u,f,d,m,p){he.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,m,p)}set(t,i,s,l,u,f,d,m,p){const v=this.elements;return v[0]=t,v[1]=l,v[2]=d,v[3]=i,v[4]=u,v[5]=m,v[6]=s,v[7]=f,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(t,i,s){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[3],m=s[6],p=s[1],v=s[4],g=s[7],x=s[2],y=s[5],b=s[8],C=l[0],M=l[3],S=l[6],P=l[1],N=l[4],U=l[7],F=l[2],H=l[5],I=l[8];return u[0]=f*C+d*P+m*F,u[3]=f*M+d*N+m*H,u[6]=f*S+d*U+m*I,u[1]=p*C+v*P+g*F,u[4]=p*M+v*N+g*H,u[7]=p*S+v*U+g*I,u[2]=x*C+y*P+b*F,u[5]=x*M+y*N+b*H,u[8]=x*S+y*U+b*I,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8];return i*f*v-i*d*p-s*u*v+s*d*m+l*u*p-l*f*m}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=v*f-d*p,x=d*m-v*u,y=p*u-f*m,b=i*g+s*x+l*y;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=g*C,t[1]=(l*p-v*s)*C,t[2]=(d*s-l*f)*C,t[3]=x*C,t[4]=(v*i-l*m)*C,t[5]=(l*u-d*i)*C,t[6]=y*C,t[7]=(s*m-p*i)*C,t[8]=(f*i-s*u)*C,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,s,l,u,f,d){const m=Math.cos(u),p=Math.sin(u);return this.set(s*m,s*p,-s*(m*f+p*d)+f+t,-l*p,l*m,-l*(-p*f+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(ph.makeScale(t,i)),this}rotate(t){return this.premultiply(ph.makeRotation(-t)),this}translate(t,i){return this.premultiply(ph.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<9;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ph=new he,av=new he().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sv=new he().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function By(){const r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(l,u,f){return this.enabled===!1||u===f||!u||!f||(this.spaces[u].transfer===Be&&(l.r=va(l.r),l.g=va(l.g),l.b=va(l.b)),this.spaces[u].primaries!==this.spaces[f].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[f].fromXYZ)),this.spaces[f].transfer===Be&&(l.r=Dr(l.r),l.g=Dr(l.g),l.b=Dr(l.b))),l},workingToColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},colorSpaceToWorking:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===$a?qu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,f){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[f].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,u){return Qo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,u)},toWorkingColorSpace:function(l,u){return Qo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,u)}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Or]:{primaries:t,whitePoint:s,transfer:qu,toXYZ:av,fromXYZ:sv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:t,whitePoint:s,transfer:Be,toXYZ:av,fromXYZ:sv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),r}const be=By();function va(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Dr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let gr;class Hy{static getDataURL(t,i="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let s;if(t instanceof HTMLCanvasElement)s=t;else{gr===void 0&&(gr=ju("canvas")),gr.width=t.width,gr.height=t.height;const l=gr.getContext("2d");t instanceof ImageData?l.putImageData(t,0,0):l.drawImage(t,0,0,t.width,t.height),s=gr}return s.toDataURL(i)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=ju("canvas");i.width=t.width,i.height=t.height;const s=i.getContext("2d");s.drawImage(t,0,0,t.width,t.height);const l=s.getImageData(0,0,t.width,t.height),u=l.data;for(let f=0;f<u.length;f++)u[f]=va(u[f]/255)*255;return s.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(va(i[s]/255)*255):i[s]=va(i[s]);return{data:i,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Gy=0;class $d{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Fr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?t.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?t.set(i.displayHeight,i.displayWidth,0):i!==null?t.set(i.width,i.height,i.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let f=0,d=l.length;f<d;f++)l[f].isDataTexture?u.push(mh(l[f].image)):u.push(mh(l[f]))}else u=mh(l);s.url=u}return i||(t.images[this.uuid]=s),s}}function mh(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Hy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let Vy=0;const gh=new K;class In extends Ir{constructor(t=In.DEFAULT_IMAGE,i=In.DEFAULT_MAPPING,s=ma,l=ma,u=On,f=ws,d=Ri,m=ii,p=In.DEFAULT_ANISOTROPY,v=$a){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Fr(),this.name="",this.source=new $d(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=u,this.minFilter=f,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new he,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gh).x}get height(){return this.source.getSize(gh).y}get depth(){return this.source.getSize(gh).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const i in t){const s=t[i];if(s===void 0){re(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(t.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==l_)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ad:t.x=t.x-Math.floor(t.x);break;case ma:t.x=t.x<0?0:1;break;case sd:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ad:t.y=t.y-Math.floor(t.y);break;case ma:t.y=t.y<0?0:1;break;case sd:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=l_;In.DEFAULT_ANISOTROPY=1;class nn{constructor(t=0,i=0,s=0,l=1){nn.prototype.isVector4=!0,this.x=t,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,s,l){return this.x=t,this.y=i,this.z=s,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,s=this.y,l=this.z,u=this.w,f=t.elements;return this.x=f[0]*i+f[4]*s+f[8]*l+f[12]*u,this.y=f[1]*i+f[5]*s+f[9]*l+f[13]*u,this.z=f[2]*i+f[6]*s+f[10]*l+f[14]*u,this.w=f[3]*i+f[7]*s+f[11]*l+f[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,s,l,u;const m=t.elements,p=m[0],v=m[4],g=m[8],x=m[1],y=m[5],b=m[9],C=m[2],M=m[6],S=m[10];if(Math.abs(v-x)<.01&&Math.abs(g-C)<.01&&Math.abs(b-M)<.01){if(Math.abs(v+x)<.1&&Math.abs(g+C)<.1&&Math.abs(b+M)<.1&&Math.abs(p+y+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const N=(p+1)/2,U=(y+1)/2,F=(S+1)/2,H=(v+x)/4,I=(g+C)/4,Q=(b+M)/4;return N>U&&N>F?N<.01?(s=0,l=.707106781,u=.707106781):(s=Math.sqrt(N),l=H/s,u=I/s):U>F?U<.01?(s=.707106781,l=0,u=.707106781):(l=Math.sqrt(U),s=H/l,u=Q/l):F<.01?(s=.707106781,l=.707106781,u=0):(u=Math.sqrt(F),s=I/u,l=Q/u),this.set(s,l,u,i),this}let P=Math.sqrt((M-b)*(M-b)+(g-C)*(g-C)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(M-b)/P,this.y=(g-C)/P,this.z=(x-v)/P,this.w=Math.acos((p+y+S-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=_e(this.x,t.x,i.x),this.y=_e(this.y,t.y,i.y),this.z=_e(this.z,t.z,i.z),this.w=_e(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=_e(this.x,t,i),this.y=_e(this.y,t,i),this.z=_e(this.z,t,i),this.w=_e(this.w,t,i),this}clampLength(t,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_e(s,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,s){return this.x=t.x+(i.x-t.x)*s,this.y=t.y+(i.y-t.y)*s,this.z=t.z+(i.z-t.z)*s,this.w=t.w+(i.w-t.w)*s,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ky extends Ir{constructor(t=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=s.depth,this.scissor=new nn(0,0,t,i),this.scissorTest=!1,this.viewport=new nn(0,0,t,i);const l={width:t,height:i,depth:s.depth},u=new In(l);this.textures=[];const f=s.count;for(let d=0;d<f;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(t={}){const i={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(i.mapping=t.mapping),t.wrapS!==void 0&&(i.wrapS=t.wrapS),t.wrapT!==void 0&&(i.wrapT=t.wrapT),t.wrapR!==void 0&&(i.wrapR=t.wrapR),t.magFilter!==void 0&&(i.magFilter=t.magFilter),t.minFilter!==void 0&&(i.minFilter=t.minFilter),t.format!==void 0&&(i.format=t.format),t.type!==void 0&&(i.type=t.type),t.anisotropy!==void 0&&(i.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(i.colorSpace=t.colorSpace),t.flipY!==void 0&&(i.flipY=t.flipY),t.generateMipmaps!==void 0&&(i.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(i.internalFormat=t.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,s=1){if(this.width!==t||this.height!==i||this.depth!==s){this.width=t,this.height=i,this.depth=s;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++){this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},t.textures[i].image);this.textures[i].source=new $d(l)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bi extends ky{constructor(t=1,i=1,s={}){super(t,i,s),this.isWebGLRenderTarget=!0}}class v_ extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xy extends In{constructor(t=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:s,depth:l},this.magFilter=wn,this.minFilter=wn,this.wrapR=ma,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class il{constructor(t=new K(1/0,1/0,1/0),i=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i+=3)this.expandByPoint(Ei.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,s=t.count;i<s;i++)this.expandByPoint(Ei.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,s=t.length;i<s;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const s=Ei.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(s),this.max.copy(t).add(s),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const s=t.geometry;if(s!==void 0){const u=s.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let f=0,d=u.count;f<d;f++)t.isMesh===!0?t.getVertexPosition(f,Ei):Ei.fromBufferAttribute(u,f),Ei.applyMatrix4(t.matrixWorld),this.expandByPoint(Ei);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),vu.copy(t.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),vu.copy(s.boundingBox)),vu.applyMatrix4(t.matrixWorld),this.union(vu)}const l=t.children;for(let u=0,f=l.length;u<f;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ei),Ei.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,s;return t.normal.x>0?(i=t.normal.x*this.min.x,s=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,s=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,s+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,s+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,s+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,s+=t.normal.z*this.min.z),i<=-t.constant&&s>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zo),_u.subVectors(this.max,zo),vr.subVectors(t.a,zo),_r.subVectors(t.b,zo),xr.subVectors(t.c,zo),Ya.subVectors(_r,vr),ja.subVectors(xr,_r),Ss.subVectors(vr,xr);let i=[0,-Ya.z,Ya.y,0,-ja.z,ja.y,0,-Ss.z,Ss.y,Ya.z,0,-Ya.x,ja.z,0,-ja.x,Ss.z,0,-Ss.x,-Ya.y,Ya.x,0,-ja.y,ja.x,0,-Ss.y,Ss.x,0];return!vh(i,vr,_r,xr,_u)||(i=[1,0,0,0,1,0,0,0,1],!vh(i,vr,_r,xr,_u))?!1:(xu.crossVectors(Ya,ja),i=[xu.x,xu.y,xu.z],vh(i,vr,_r,xr,_u))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ei).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ei).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ca[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ca[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ca[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ca[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ca[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ca[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ca[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ca[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ca),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const ca=[new K,new K,new K,new K,new K,new K,new K,new K],Ei=new K,vu=new il,vr=new K,_r=new K,xr=new K,Ya=new K,ja=new K,Ss=new K,zo=new K,_u=new K,xu=new K,ys=new K;function vh(r,t,i,s,l){for(let u=0,f=r.length-3;u<=f;u+=3){ys.fromArray(r,u);const d=l.x*Math.abs(ys.x)+l.y*Math.abs(ys.y)+l.z*Math.abs(ys.z),m=t.dot(ys),p=i.dot(ys),v=s.dot(ys);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const Wy=new il,Io=new K,_h=new K;class tp{constructor(t=new K,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const s=this.center;i!==void 0?s.copy(i):Wy.setFromPoints(t).getCenter(s);let l=0;for(let u=0,f=t.length;u<f;u++)l=Math.max(l,s.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const s=this.center.distanceToSquared(t);return i.copy(t),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Io.subVectors(t,this.center);const i=Io.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(Io,l/s),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(_h.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Io.copy(t.center).add(_h)),this.expandByPoint(Io.copy(t.center).sub(_h))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const fa=new K,xh=new K,Su=new K,Za=new K,Sh=new K,yu=new K,yh=new K;class qy{constructor(t=new K,i=new K(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fa)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=fa.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(fa.copy(this.origin).addScaledVector(this.direction,i),fa.distanceToSquared(t))}distanceSqToSegment(t,i,s,l){xh.copy(t).add(i).multiplyScalar(.5),Su.copy(i).sub(t).normalize(),Za.copy(this.origin).sub(xh);const u=t.distanceTo(i)*.5,f=-this.direction.dot(Su),d=Za.dot(this.direction),m=-Za.dot(Su),p=Za.lengthSq(),v=Math.abs(1-f*f);let g,x,y,b;if(v>0)if(g=f*m-d,x=f*d-m,b=u*v,g>=0)if(x>=-b)if(x<=b){const C=1/v;g*=C,x*=C,y=g*(g+f*x+2*d)+x*(f*g+x+2*m)+p}else x=u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;else x<=-b?(g=Math.max(0,-(-f*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p):x<=b?(g=0,x=Math.min(Math.max(-u,-m),u),y=x*(x+2*m)+p):(g=Math.max(0,-(f*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),y=-g*g+x*(x+2*m)+p);else x=f>0?-u:u,g=Math.max(0,-(f*x+d)),y=-g*g+x*(x+2*m)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(xh).addScaledVector(Su,x),y}intersectSphere(t,i){fa.subVectors(t.center,this.origin);const s=fa.dot(this.direction),l=fa.dot(fa)-s*s,u=t.radius*t.radius;if(l>u)return null;const f=Math.sqrt(u-l),d=s-f,m=s+f;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(t.normal)+t.constant)/i;return s>=0?s:null}intersectPlane(t,i){const s=this.distanceToPlane(t);return s===null?null:this.at(s,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let s,l,u,f,d,m;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(s=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(s=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),v>=0?(u=(t.min.y-x.y)*v,f=(t.max.y-x.y)*v):(u=(t.max.y-x.y)*v,f=(t.min.y-x.y)*v),s>f||u>l||((u>s||isNaN(s))&&(s=u),(f<l||isNaN(l))&&(l=f),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),s>m||d>l)||((d>s||s!==s)&&(s=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(t){return this.intersectBox(t,fa)!==null}intersectTriangle(t,i,s,l,u){Sh.subVectors(i,t),yu.subVectors(s,t),yh.crossVectors(Sh,yu);let f=this.direction.dot(yh),d;if(f>0){if(l)return null;d=1}else if(f<0)d=-1,f=-f;else return null;Za.subVectors(this.origin,t);const m=d*this.direction.dot(yu.crossVectors(Za,yu));if(m<0)return null;const p=d*this.direction.dot(Sh.cross(Za));if(p<0||m+p>f)return null;const v=-d*Za.dot(yh);return v<0?null:this.at(v/f,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Je{constructor(t,i,s,l,u,f,d,m,p,v,g,x,y,b,C,M){Je.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,s,l,u,f,d,m,p,v,g,x,y,b,C,M)}set(t,i,s,l,u,f,d,m,p,v,g,x,y,b,C,M){const S=this.elements;return S[0]=t,S[4]=i,S[8]=s,S[12]=l,S[1]=u,S[5]=f,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=g,S[14]=x,S[3]=y,S[7]=b,S[11]=C,S[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Je().fromArray(this.elements)}copy(t){const i=this.elements,s=t.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(t){const i=this.elements,s=t.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,s){return this.determinant()===0?(t.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(t,i,s){return this.set(t.x,i.x,s.x,0,t.y,i.y,s.y,0,t.z,i.z,s.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const i=this.elements,s=t.elements,l=1/Sr.setFromMatrixColumn(t,0).length(),u=1/Sr.setFromMatrixColumn(t,1).length(),f=1/Sr.setFromMatrixColumn(t,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*u,i[5]=s[5]*u,i[6]=s[6]*u,i[7]=0,i[8]=s[8]*f,i[9]=s[9]*f,i[10]=s[10]*f,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,s=t.x,l=t.y,u=t.z,f=Math.cos(s),d=Math.sin(s),m=Math.cos(l),p=Math.sin(l),v=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=f*v,y=f*g,b=d*v,C=d*g;i[0]=m*v,i[4]=-m*g,i[8]=p,i[1]=y+b*p,i[5]=x-C*p,i[9]=-d*m,i[2]=C-x*p,i[6]=b+y*p,i[10]=f*m}else if(t.order==="YXZ"){const x=m*v,y=m*g,b=p*v,C=p*g;i[0]=x+C*d,i[4]=b*d-y,i[8]=f*p,i[1]=f*g,i[5]=f*v,i[9]=-d,i[2]=y*d-b,i[6]=C+x*d,i[10]=f*m}else if(t.order==="ZXY"){const x=m*v,y=m*g,b=p*v,C=p*g;i[0]=x-C*d,i[4]=-f*g,i[8]=b+y*d,i[1]=y+b*d,i[5]=f*v,i[9]=C-x*d,i[2]=-f*p,i[6]=d,i[10]=f*m}else if(t.order==="ZYX"){const x=f*v,y=f*g,b=d*v,C=d*g;i[0]=m*v,i[4]=b*p-y,i[8]=x*p+C,i[1]=m*g,i[5]=C*p+x,i[9]=y*p-b,i[2]=-p,i[6]=d*m,i[10]=f*m}else if(t.order==="YZX"){const x=f*m,y=f*p,b=d*m,C=d*p;i[0]=m*v,i[4]=C-x*g,i[8]=b*g+y,i[1]=g,i[5]=f*v,i[9]=-d*v,i[2]=-p*v,i[6]=y*g+b,i[10]=x-C*g}else if(t.order==="XZY"){const x=f*m,y=f*p,b=d*m,C=d*p;i[0]=m*v,i[4]=-g,i[8]=p*v,i[1]=x*g+C,i[5]=f*v,i[9]=y*g-b,i[2]=b*g-y,i[6]=d*v,i[10]=C*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Yy,t,jy)}lookAt(t,i,s){const l=this.elements;return ti.subVectors(t,i),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ka.crossVectors(s,ti),Ka.lengthSq()===0&&(Math.abs(s.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ka.crossVectors(s,ti)),Ka.normalize(),Mu.crossVectors(ti,Ka),l[0]=Ka.x,l[4]=Mu.x,l[8]=ti.x,l[1]=Ka.y,l[5]=Mu.y,l[9]=ti.y,l[2]=Ka.z,l[6]=Mu.z,l[10]=ti.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const s=t.elements,l=i.elements,u=this.elements,f=s[0],d=s[4],m=s[8],p=s[12],v=s[1],g=s[5],x=s[9],y=s[13],b=s[2],C=s[6],M=s[10],S=s[14],P=s[3],N=s[7],U=s[11],F=s[15],H=l[0],I=l[4],Q=l[8],R=l[12],w=l[1],k=l[5],nt=l[9],st=l[13],mt=l[2],ct=l[6],z=l[10],O=l[14],j=l[3],dt=l[7],ft=l[11],D=l[15];return u[0]=f*H+d*w+m*mt+p*j,u[4]=f*I+d*k+m*ct+p*dt,u[8]=f*Q+d*nt+m*z+p*ft,u[12]=f*R+d*st+m*O+p*D,u[1]=v*H+g*w+x*mt+y*j,u[5]=v*I+g*k+x*ct+y*dt,u[9]=v*Q+g*nt+x*z+y*ft,u[13]=v*R+g*st+x*O+y*D,u[2]=b*H+C*w+M*mt+S*j,u[6]=b*I+C*k+M*ct+S*dt,u[10]=b*Q+C*nt+M*z+S*ft,u[14]=b*R+C*st+M*O+S*D,u[3]=P*H+N*w+U*mt+F*j,u[7]=P*I+N*k+U*ct+F*dt,u[11]=P*Q+N*nt+U*z+F*ft,u[15]=P*R+N*st+U*O+F*D,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],s=t[4],l=t[8],u=t[12],f=t[1],d=t[5],m=t[9],p=t[13],v=t[2],g=t[6],x=t[10],y=t[14],b=t[3],C=t[7],M=t[11],S=t[15],P=m*y-p*x,N=d*y-p*g,U=d*x-m*g,F=f*y-p*v,H=f*x-m*v,I=f*g-d*v;return i*(C*P-M*N+S*U)-s*(b*P-M*F+S*H)+l*(b*N-C*F+S*I)-u*(b*U-C*H+M*I)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,s){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=s),this}invert(){const t=this.elements,i=t[0],s=t[1],l=t[2],u=t[3],f=t[4],d=t[5],m=t[6],p=t[7],v=t[8],g=t[9],x=t[10],y=t[11],b=t[12],C=t[13],M=t[14],S=t[15],P=g*M*p-C*x*p+C*m*y-d*M*y-g*m*S+d*x*S,N=b*x*p-v*M*p-b*m*y+f*M*y+v*m*S-f*x*S,U=v*C*p-b*g*p+b*d*y-f*C*y-v*d*S+f*g*S,F=b*g*m-v*C*m-b*d*x+f*C*x+v*d*M-f*g*M,H=i*P+s*N+l*U+u*F;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/H;return t[0]=P*I,t[1]=(C*x*u-g*M*u-C*l*y+s*M*y+g*l*S-s*x*S)*I,t[2]=(d*M*u-C*m*u+C*l*p-s*M*p-d*l*S+s*m*S)*I,t[3]=(g*m*u-d*x*u-g*l*p+s*x*p+d*l*y-s*m*y)*I,t[4]=N*I,t[5]=(v*M*u-b*x*u+b*l*y-i*M*y-v*l*S+i*x*S)*I,t[6]=(b*m*u-f*M*u-b*l*p+i*M*p+f*l*S-i*m*S)*I,t[7]=(f*x*u-v*m*u+v*l*p-i*x*p-f*l*y+i*m*y)*I,t[8]=U*I,t[9]=(b*g*u-v*C*u-b*s*y+i*C*y+v*s*S-i*g*S)*I,t[10]=(f*C*u-b*d*u+b*s*p-i*C*p-f*s*S+i*d*S)*I,t[11]=(v*d*u-f*g*u-v*s*p+i*g*p+f*s*y-i*d*y)*I,t[12]=F*I,t[13]=(v*C*l-b*g*l+b*s*x-i*C*x-v*s*M+i*g*M)*I,t[14]=(b*d*l-f*C*l-b*s*m+i*C*m+f*s*M-i*d*M)*I,t[15]=(f*g*l-v*d*l+v*s*m-i*g*m-f*s*x+i*d*x)*I,this}scale(t){const i=this.elements,s=t.x,l=t.y,u=t.z;return i[0]*=s,i[4]*=l,i[8]*=u,i[1]*=s,i[5]*=l,i[9]*=u,i[2]*=s,i[6]*=l,i[10]*=u,i[3]*=s,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],s=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(t,i,s){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),s=Math.sin(t);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),s=Math.sin(t);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const s=Math.cos(i),l=Math.sin(i),u=1-s,f=t.x,d=t.y,m=t.z,p=u*f,v=u*d;return this.set(p*f+s,p*d-l*m,p*m+l*d,0,p*d+l*m,v*d+s,v*m-l*f,0,p*m-l*d,v*m+l*f,u*m*m+s,0,0,0,0,1),this}makeScale(t,i,s){return this.set(t,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(t,i,s,l,u,f){return this.set(1,s,u,0,t,1,f,0,i,l,1,0,0,0,0,1),this}compose(t,i,s){const l=this.elements,u=i._x,f=i._y,d=i._z,m=i._w,p=u+u,v=f+f,g=d+d,x=u*p,y=u*v,b=u*g,C=f*v,M=f*g,S=d*g,P=m*p,N=m*v,U=m*g,F=s.x,H=s.y,I=s.z;return l[0]=(1-(C+S))*F,l[1]=(y+U)*F,l[2]=(b-N)*F,l[3]=0,l[4]=(y-U)*H,l[5]=(1-(x+S))*H,l[6]=(M+P)*H,l[7]=0,l[8]=(b+N)*I,l[9]=(M-P)*I,l[10]=(1-(x+C))*I,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,s){const l=this.elements;if(t.x=l[12],t.y=l[13],t.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let u=Sr.set(l[0],l[1],l[2]).length();const f=Sr.set(l[4],l[5],l[6]).length(),d=Sr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),bi.copy(this);const p=1/u,v=1/f,g=1/d;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=g,bi.elements[9]*=g,bi.elements[10]*=g,i.setFromRotationMatrix(bi),s.x=u,s.y=f,s.z=d,this}makePerspective(t,i,s,l,u,f,d=Ii,m=!1){const p=this.elements,v=2*u/(i-t),g=2*u/(s-l),x=(i+t)/(i-t),y=(s+l)/(s-l);let b,C;if(m)b=u/(f-u),C=f*u/(f-u);else if(d===Ii)b=-(f+u)/(f-u),C=-2*f*u/(f-u);else if(d===Yu)b=-f/(f-u),C=-f*u/(f-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=x,p[12]=0,p[1]=0,p[5]=g,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(t,i,s,l,u,f,d=Ii,m=!1){const p=this.elements,v=2/(i-t),g=2/(s-l),x=-(i+t)/(i-t),y=-(s+l)/(s-l);let b,C;if(m)b=1/(f-u),C=f/(f-u);else if(d===Ii)b=-2/(f-u),C=-(f+u)/(f-u);else if(d===Yu)b=-1/(f-u),C=-u/(f-u);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=x,p[1]=0,p[5]=g,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=b,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(t){const i=this.elements,s=t.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(t,i=0){for(let s=0;s<16;s++)this.elements[s]=t[s+i];return this}toArray(t=[],i=0){const s=this.elements;return t[i]=s[0],t[i+1]=s[1],t[i+2]=s[2],t[i+3]=s[3],t[i+4]=s[4],t[i+5]=s[5],t[i+6]=s[6],t[i+7]=s[7],t[i+8]=s[8],t[i+9]=s[9],t[i+10]=s[10],t[i+11]=s[11],t[i+12]=s[12],t[i+13]=s[13],t[i+14]=s[14],t[i+15]=s[15],t}}const Sr=new K,bi=new Je,Yy=new K(0,0,0),jy=new K(1,1,1),Ka=new K,Mu=new K,ti=new K,rv=new Je,ov=new nl;class Sa{constructor(t=0,i=0,s=0,l=Sa.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,s,l=this._order){return this._x=t,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,s=!0){const l=t.elements,u=l[0],f=l[4],d=l[8],m=l[1],p=l[5],v=l[9],g=l[2],x=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_e(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-f,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-_e(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(_e(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,y),this._z=Math.atan2(-f,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-_e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,y),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-f,p));break;case"YZX":this._z=Math.asin(_e(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_e(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-v,y),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,s){return rv.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rv,i,s)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return ov.setFromEuler(this),this.setFromQuaternion(ov,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Sa.DEFAULT_ORDER="XYZ";class __{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Zy=0;const lv=new K,yr=new nl,ha=new Je,Eu=new K,Fo=new K,Ky=new K,Qy=new nl,uv=new K(1,0,0),cv=new K(0,1,0),fv=new K(0,0,1),hv={type:"added"},Jy={type:"removed"},Mr={type:"childadded",child:null},Mh={type:"childremoved",child:null};class qn extends Ir{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zy++}),this.uuid=Fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qn.DEFAULT_UP.clone();const t=new K,i=new Sa,s=new nl,l=new K(1,1,1);function u(){s.setFromEuler(i,!1)}function f(){i.setFromQuaternion(s,void 0,!1)}i._onChange(u),s._onChange(f),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Je},normalMatrix:{value:new he}}),this.matrix=new Je,this.matrixWorld=new Je,this.matrixAutoUpdate=qn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new __,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.multiply(yr),this}rotateOnWorldAxis(t,i){return yr.setFromAxisAngle(t,i),this.quaternion.premultiply(yr),this}rotateX(t){return this.rotateOnAxis(uv,t)}rotateY(t){return this.rotateOnAxis(cv,t)}rotateZ(t){return this.rotateOnAxis(fv,t)}translateOnAxis(t,i){return lv.copy(t).applyQuaternion(this.quaternion),this.position.add(lv.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(uv,t)}translateY(t){return this.translateOnAxis(cv,t)}translateZ(t){return this.translateOnAxis(fv,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ha.copy(this.matrixWorld).invert())}lookAt(t,i,s){t.isVector3?Eu.copy(t):Eu.set(t,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),Fo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ha.lookAt(Fo,Eu,this.up):ha.lookAt(Eu,Fo,this.up),this.quaternion.setFromRotationMatrix(ha),l&&(ha.extractRotation(l.matrixWorld),yr.setFromRotationMatrix(ha),this.quaternion.premultiply(yr.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(Re("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hv),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null):Re("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(Jy),Mh.child=t,this.dispatchEvent(Mh),Mh.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),ha.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ha.multiply(t.parent.matrixWorld)),t.applyMatrix4(ha),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hv),Mr.child=t,this.dispatchEvent(Mr),Mr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const f=this.children[s].getObjectByProperty(t,i);if(f!==void 0)return f}}getObjectsByProperty(t,i,s=[]){this[t]===i&&s.push(this);const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].getObjectsByProperty(t,i,s);return s}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,t,Ky),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fo,Qy,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(t)}updateWorldMatrix(t,i){const s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",s={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(t),l.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=f(t.geometries),m=f(t.materials),p=f(t.textures),v=f(t.images),g=f(t.shapes),x=f(t.skeletons),y=f(t.animations),b=f(t.nodes);d.length>0&&(s.geometries=d),m.length>0&&(s.materials=m),p.length>0&&(s.textures=p),v.length>0&&(s.images=v),g.length>0&&(s.shapes=g),x.length>0&&(s.skeletons=x),y.length>0&&(s.animations=y),b.length>0&&(s.nodes=b)}return s.object=l,s;function f(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let s=0;s<t.children.length;s++){const l=t.children[s];this.add(l.clone())}return this}}qn.DEFAULT_UP=new K(0,1,0);qn.DEFAULT_MATRIX_AUTO_UPDATE=!0;qn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ti=new K,da=new K,Eh=new K,pa=new K,Er=new K,br=new K,dv=new K,bh=new K,Th=new K,Ah=new K,Rh=new nn,Ch=new nn,wh=new nn;class Ai{constructor(t=new K,i=new K,s=new K){this.a=t,this.b=i,this.c=s}static getNormal(t,i,s,l){l.subVectors(s,i),Ti.subVectors(t,i),l.cross(Ti);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,s,l,u){Ti.subVectors(l,i),da.subVectors(s,i),Eh.subVectors(t,i);const f=Ti.dot(Ti),d=Ti.dot(da),m=Ti.dot(Eh),p=da.dot(da),v=da.dot(Eh),g=f*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,y=(p*m-d*v)*x,b=(f*v-d*m)*x;return u.set(1-y-b,b,y)}static containsPoint(t,i,s,l){return this.getBarycoord(t,i,s,l,pa)===null?!1:pa.x>=0&&pa.y>=0&&pa.x+pa.y<=1}static getInterpolation(t,i,s,l,u,f,d,m){return this.getBarycoord(t,i,s,l,pa)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,pa.x),m.addScaledVector(f,pa.y),m.addScaledVector(d,pa.z),m)}static getInterpolatedAttribute(t,i,s,l,u,f){return Rh.setScalar(0),Ch.setScalar(0),wh.setScalar(0),Rh.fromBufferAttribute(t,i),Ch.fromBufferAttribute(t,s),wh.fromBufferAttribute(t,l),f.setScalar(0),f.addScaledVector(Rh,u.x),f.addScaledVector(Ch,u.y),f.addScaledVector(wh,u.z),f}static isFrontFacing(t,i,s,l){return Ti.subVectors(s,i),da.subVectors(t,i),Ti.cross(da).dot(l)<0}set(t,i,s){return this.a.copy(t),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(t,i,s,l){return this.a.copy(t[i]),this.b.copy(t[s]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,s,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,s),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ti.subVectors(this.c,this.b),da.subVectors(this.a,this.b),Ti.cross(da).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ai.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return Ai.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,s,l,u){return Ai.getInterpolation(t,this.a,this.b,this.c,i,s,l,u)}containsPoint(t){return Ai.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ai.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const s=this.a,l=this.b,u=this.c;let f,d;Er.subVectors(l,s),br.subVectors(u,s),bh.subVectors(t,s);const m=Er.dot(bh),p=br.dot(bh);if(m<=0&&p<=0)return i.copy(s);Th.subVectors(t,l);const v=Er.dot(Th),g=br.dot(Th);if(v>=0&&g<=v)return i.copy(l);const x=m*g-v*p;if(x<=0&&m>=0&&v<=0)return f=m/(m-v),i.copy(s).addScaledVector(Er,f);Ah.subVectors(t,u);const y=Er.dot(Ah),b=br.dot(Ah);if(b>=0&&y<=b)return i.copy(u);const C=y*p-m*b;if(C<=0&&p>=0&&b<=0)return d=p/(p-b),i.copy(s).addScaledVector(br,d);const M=v*b-y*g;if(M<=0&&g-v>=0&&y-b>=0)return dv.subVectors(u,l),d=(g-v)/(g-v+(y-b)),i.copy(l).addScaledVector(dv,d);const S=1/(M+C+x);return f=C*S,d=x*S,i.copy(s).addScaledVector(Er,f).addScaledVector(br,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const x_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qa={h:0,s:0,l:0},bu={h:0,s:0,l:0};function Dh(r,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(t-r)*6*i:i<1/2?t:i<2/3?r+(t-r)*6*(2/3-i):r}class Oe{constructor(t,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,s)}set(t,i,s){if(i===void 0&&s===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,s);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=mi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,i),this}setRGB(t,i,s,l=be.workingColorSpace){return this.r=t,this.g=i,this.b=s,be.colorSpaceToWorking(this,l),this}setHSL(t,i,s,l=be.workingColorSpace){if(t=Fy(t,1),i=_e(i,0,1),s=_e(s,0,1),i===0)this.r=this.g=this.b=s;else{const u=s<=.5?s*(1+i):s+i-s*i,f=2*s-u;this.r=Dh(f,u,t+1/3),this.g=Dh(f,u,t),this.b=Dh(f,u,t-1/3)}return be.colorSpaceToWorking(this,l),this}setStyle(t,i=mi){function s(u){u!==void 0&&parseFloat(u)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const f=l[1],d=l[2];switch(f){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:re("Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],f=u.length;if(f===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(f===6)return this.setHex(parseInt(u,16),i);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=mi){const s=x_[t.toLowerCase()];return s!==void 0?this.setHex(s,i):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=va(t.r),this.g=va(t.g),this.b=va(t.b),this}copyLinearToSRGB(t){return this.r=Dr(t.r),this.g=Dr(t.g),this.b=Dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=mi){return be.workingToColorSpace(Ln.copy(this),t),Math.round(_e(Ln.r*255,0,255))*65536+Math.round(_e(Ln.g*255,0,255))*256+Math.round(_e(Ln.b*255,0,255))}getHexString(t=mi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=be.workingColorSpace){be.workingToColorSpace(Ln.copy(this),i);const s=Ln.r,l=Ln.g,u=Ln.b,f=Math.max(s,l,u),d=Math.min(s,l,u);let m,p;const v=(d+f)/2;if(d===f)m=0,p=0;else{const g=f-d;switch(p=v<=.5?g/(f+d):g/(2-f-d),f){case s:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-s)/g+2;break;case u:m=(s-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=v,t}getRGB(t,i=be.workingColorSpace){return be.workingToColorSpace(Ln.copy(this),i),t.r=Ln.r,t.g=Ln.g,t.b=Ln.b,t}getStyle(t=mi){be.workingToColorSpace(Ln.copy(this),t);const i=Ln.r,s=Ln.g,l=Ln.b;return t!==mi?`color(${t} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(t,i,s){return this.getHSL(Qa),this.setHSL(Qa.h+t,Qa.s+i,Qa.l+s)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,s){return this.r=t.r+(i.r-t.r)*s,this.g=t.g+(i.g-t.g)*s,this.b=t.b+(i.b-t.b)*s,this}lerpHSL(t,i){this.getHSL(Qa),t.getHSL(bu);const s=hh(Qa.h,bu.h,i),l=hh(Qa.s,bu.s,i),u=hh(Qa.l,bu.l,i);return this.setHSL(s,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,s=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*s+u[6]*l,this.g=u[1]*i+u[4]*s+u[7]*l,this.b=u[2]*i+u[5]*s+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ln=new Oe;Oe.NAMES=x_;let $y=0;class Ku extends Ir{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Fr(),this.name="",this.type="Material",this.blending=wr,this.side=es,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yh,this.blendDst=jh,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Oe(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const s=t[i];if(s===void 0){re(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){re(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(t).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(t).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(t).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(t).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(t).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==wr&&(s.blending=this.blending),this.side!==es&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Yh&&(s.blendSrc=this.blendSrc),this.blendDst!==jh&&(s.blendDst=this.blendDst),this.blendEquation!==Rs&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jg&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==mr&&(s.stencilFail=this.stencilFail),this.stencilZFail!==mr&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==mr&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(u){const f=[];for(const d in u){const m=u[d];delete m.metadata,f.push(m)}return f}if(i){const u=l(t.textures),f=l(t.images);u.length>0&&(s.textures=u),f.length>0&&(s.images=f)}return s}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let u=0;u!==l;++u)s[u]=i[u].clone()}return this.clippingPlanes=s,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ep extends Ku{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Oe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Sa,this.combine=t_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fn=new K,Tu=new Qt;let tM=0;class Hi{constructor(t,i,s=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tM++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=s,this.usage=$g,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,s){t*=this.itemSize,s*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[s+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Tu.fromBufferAttribute(this,i),Tu.applyMatrix3(t),this.setXY(i,Tu.x,Tu.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix3(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyMatrix4(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyMatrix4(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.applyNormalMatrix(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let i=0,s=this.count;i<s;i++)fn.fromBufferAttribute(this,i),fn.transformDirection(t),this.setXYZ(i,fn.x,fn.y,fn.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let s=this.array[t*this.itemSize+i];return this.normalized&&(s=Po(s,this.array)),s}setComponent(t,i,s){return this.normalized&&(s=Xn(s,this.array)),this.array[t*this.itemSize+i]=s,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Po(i,this.array)),i}setX(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Po(i,this.array)),i}setY(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Po(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Po(i,this.array)),i}setW(t,i){return this.normalized&&(i=Xn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,s){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array)),this.array[t+0]=i,this.array[t+1]=s,this}setXYZ(t,i,s,l){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this}setXYZW(t,i,s,l,u){return t*=this.itemSize,this.normalized&&(i=Xn(i,this.array),s=Xn(s,this.array),l=Xn(l,this.array),u=Xn(u,this.array)),this.array[t+0]=i,this.array[t+1]=s,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$g&&(t.usage=this.usage),t}}class S_ extends Hi{constructor(t,i,s){super(new Uint16Array(t),i,s)}}class y_ extends Hi{constructor(t,i,s){super(new Uint32Array(t),i,s)}}class gi extends Hi{constructor(t,i,s){super(new Float32Array(t),i,s)}}let eM=0;const pi=new Je,Uh=new qn,Tr=new K,ei=new il,Bo=new il,_n=new K;class Xi extends Ir{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Fr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(g_(t)?y_:S_)(t,1):this.index=t,this}setIndirect(t,i=0){return this.indirect=t,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,s=0){this.groups.push({start:t,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const u=new he().getNormalMatrix(t);s.applyNormalMatrix(u),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return pi.makeRotationFromQuaternion(t),this.applyMatrix4(pi),this}rotateX(t){return pi.makeRotationX(t),this.applyMatrix4(pi),this}rotateY(t){return pi.makeRotationY(t),this.applyMatrix4(pi),this}rotateZ(t){return pi.makeRotationZ(t),this.applyMatrix4(pi),this}translate(t,i,s){return pi.makeTranslation(t,i,s),this.applyMatrix4(pi),this}scale(t,i,s){return pi.makeScale(t,i,s),this.applyMatrix4(pi),this}lookAt(t){return Uh.lookAt(t),Uh.updateMatrix(),this.applyMatrix4(Uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Tr).negate(),this.translate(Tr.x,Tr.y,Tr.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,u=t.length;l<u;l++){const f=t[l];s.push(f.x,f.y,f.z||0)}this.setAttribute("position",new gi(s,3))}else{const s=Math.min(t.length,i.count);for(let l=0;l<s;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new il);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let s=0,l=i.length;s<l;s++){const u=i[s];ei.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ei.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ei.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ei.min),this.boundingBox.expandByPoint(ei.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Re('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tp);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Re("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new K,1/0);return}if(t){const s=this.boundingSphere.center;if(ei.setFromBufferAttribute(t),i)for(let u=0,f=i.length;u<f;u++){const d=i[u];Bo.setFromBufferAttribute(d),this.morphTargetsRelative?(_n.addVectors(ei.min,Bo.min),ei.expandByPoint(_n),_n.addVectors(ei.max,Bo.max),ei.expandByPoint(_n)):(ei.expandByPoint(Bo.min),ei.expandByPoint(Bo.max))}ei.getCenter(s);let l=0;for(let u=0,f=t.count;u<f;u++)_n.fromBufferAttribute(t,u),l=Math.max(l,s.distanceToSquared(_n));if(i)for(let u=0,f=i.length;u<f;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)_n.fromBufferAttribute(d,p),m&&(Tr.fromBufferAttribute(t,p),_n.add(Tr)),l=Math.max(l,s.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Re('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){Re("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Hi(new Float32Array(4*s.count),4));const f=this.getAttribute("tangent"),d=[],m=[];for(let Q=0;Q<s.count;Q++)d[Q]=new K,m[Q]=new K;const p=new K,v=new K,g=new K,x=new Qt,y=new Qt,b=new Qt,C=new K,M=new K;function S(Q,R,w){p.fromBufferAttribute(s,Q),v.fromBufferAttribute(s,R),g.fromBufferAttribute(s,w),x.fromBufferAttribute(u,Q),y.fromBufferAttribute(u,R),b.fromBufferAttribute(u,w),v.sub(p),g.sub(p),y.sub(x),b.sub(x);const k=1/(y.x*b.y-b.x*y.y);isFinite(k)&&(C.copy(v).multiplyScalar(b.y).addScaledVector(g,-y.y).multiplyScalar(k),M.copy(g).multiplyScalar(y.x).addScaledVector(v,-b.x).multiplyScalar(k),d[Q].add(C),d[R].add(C),d[w].add(C),m[Q].add(M),m[R].add(M),m[w].add(M))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let Q=0,R=P.length;Q<R;++Q){const w=P[Q],k=w.start,nt=w.count;for(let st=k,mt=k+nt;st<mt;st+=3)S(t.getX(st+0),t.getX(st+1),t.getX(st+2))}const N=new K,U=new K,F=new K,H=new K;function I(Q){F.fromBufferAttribute(l,Q),H.copy(F);const R=d[Q];N.copy(R),N.sub(F.multiplyScalar(F.dot(R))).normalize(),U.crossVectors(H,R);const k=U.dot(m[Q])<0?-1:1;f.setXYZW(Q,N.x,N.y,N.z,k)}for(let Q=0,R=P.length;Q<R;++Q){const w=P[Q],k=w.start,nt=w.count;for(let st=k,mt=k+nt;st<mt;st+=3)I(t.getX(st+0)),I(t.getX(st+1)),I(t.getX(st+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Hi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,y=s.count;x<y;x++)s.setXYZ(x,0,0,0);const l=new K,u=new K,f=new K,d=new K,m=new K,p=new K,v=new K,g=new K;if(t)for(let x=0,y=t.count;x<y;x+=3){const b=t.getX(x+0),C=t.getX(x+1),M=t.getX(x+2);l.fromBufferAttribute(i,b),u.fromBufferAttribute(i,C),f.fromBufferAttribute(i,M),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,C),p.fromBufferAttribute(s,M),d.add(v),m.add(v),p.add(v),s.setXYZ(b,d.x,d.y,d.z),s.setXYZ(C,m.x,m.y,m.z),s.setXYZ(M,p.x,p.y,p.z)}else for(let x=0,y=i.count;x<y;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),f.fromBufferAttribute(i,x+2),v.subVectors(f,u),g.subVectors(l,u),v.cross(g),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,s=t.count;i<s;i++)_n.fromBufferAttribute(t,i),_n.normalize(),t.setXYZ(i,_n.x,_n.y,_n.z)}toNonIndexed(){function t(d,m){const p=d.array,v=d.itemSize,g=d.normalized,x=new p.constructor(m.length*v);let y=0,b=0;for(let C=0,M=m.length;C<M;C++){d.isInterleavedBufferAttribute?y=m[C]*d.data.stride+d.offset:y=m[C]*v;for(let S=0;S<v;S++)x[b++]=p[y++]}return new Hi(x,v,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Xi,s=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,s);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let v=0,g=p.length;v<g;v++){const x=p[v],y=t(x,s);m.push(y)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const f=this.groups;for(let d=0,m=f.length;d<m;d++){const p=f[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const m in s){const p=s[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let g=0,x=p.length;g<x;g++){const y=p[g];v.push(y.toJSON(t.data))}v.length>0&&(l[m]=v,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const f=this.groups;f.length>0&&(t.data.groups=JSON.parse(JSON.stringify(f)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere=d.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const s=t.index;s!==null&&this.setIndex(s.clone());const l=t.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(i))}const u=t.morphAttributes;for(const p in u){const v=[],g=u[p];for(let x=0,y=g.length;x<y;x++)v.push(g[x].clone(i));this.morphAttributes[p]=v}this.morphTargetsRelative=t.morphTargetsRelative;const f=t.groups;for(let p=0,v=f.length;p<v;p++){const g=f[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const pv=new Je,Ms=new qy,Au=new tp,mv=new K,Ru=new K,Cu=new K,wu=new K,Nh=new K,Du=new K,gv=new K,Uu=new K;class Vi extends qn{constructor(t=new Xi,i=new ep){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,f=l.length;u<f;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const s=this.geometry,l=s.attributes.position,u=s.morphAttributes.position,f=s.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){Du.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const v=d[m],g=u[m];v!==0&&(Nh.fromBufferAttribute(g,t),f?Du.addScaledVector(Nh,v):Du.addScaledVector(Nh.sub(i),v))}i.add(Du)}return i}raycast(t,i){const s=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Au.copy(s.boundingSphere),Au.applyMatrix4(u),Ms.copy(t.ray).recast(t.near),!(Au.containsPoint(Ms.origin)===!1&&(Ms.intersectSphere(Au,mv)===null||Ms.origin.distanceToSquared(mv)>(t.far-t.near)**2))&&(pv.copy(u).invert(),Ms.copy(t.ray).applyMatrix4(pv),!(s.boundingBox!==null&&Ms.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(t,i,Ms)))}_computeIntersections(t,i,s){let l;const u=this.geometry,f=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,v=u.attributes.uv1,g=u.attributes.normal,x=u.groups,y=u.drawRange;if(d!==null)if(Array.isArray(f))for(let b=0,C=x.length;b<C;b++){const M=x[b],S=f[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,F=N;U<F;U+=3){const H=d.getX(U),I=d.getX(U+1),Q=d.getX(U+2);l=Nu(this,S,t,s,p,v,g,H,I,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(d.count,y.start+y.count);for(let M=b,S=C;M<S;M+=3){const P=d.getX(M),N=d.getX(M+1),U=d.getX(M+2);l=Nu(this,f,t,s,p,v,g,P,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(f))for(let b=0,C=x.length;b<C;b++){const M=x[b],S=f[M.materialIndex],P=Math.max(M.start,y.start),N=Math.min(m.count,Math.min(M.start+M.count,y.start+y.count));for(let U=P,F=N;U<F;U+=3){const H=U,I=U+1,Q=U+2;l=Nu(this,S,t,s,p,v,g,H,I,Q),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const b=Math.max(0,y.start),C=Math.min(m.count,y.start+y.count);for(let M=b,S=C;M<S;M+=3){const P=M,N=M+1,U=M+2;l=Nu(this,f,t,s,p,v,g,P,N,U),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function nM(r,t,i,s,l,u,f,d){let m;if(t.side===Wn?m=s.intersectTriangle(f,u,l,!0,d):m=s.intersectTriangle(l,u,f,t.side===es,d),m===null)return null;Uu.copy(d),Uu.applyMatrix4(r.matrixWorld);const p=i.ray.origin.distanceTo(Uu);return p<i.near||p>i.far?null:{distance:p,point:Uu.clone(),object:r}}function Nu(r,t,i,s,l,u,f,d,m,p){r.getVertexPosition(d,Ru),r.getVertexPosition(m,Cu),r.getVertexPosition(p,wu);const v=nM(r,t,i,s,Ru,Cu,wu,gv);if(v){const g=new K;Ai.getBarycoord(gv,Ru,Cu,wu,g),l&&(v.uv=Ai.getInterpolatedAttribute(l,d,m,p,g,new Qt)),u&&(v.uv1=Ai.getInterpolatedAttribute(u,d,m,p,g,new Qt)),f&&(v.normal=Ai.getInterpolatedAttribute(f,d,m,p,g,new K),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new K,materialIndex:0};Ai.getNormal(Ru,Cu,wu,x.normal),v.face=x,v.barycoord=g}return v}class al extends Xi{constructor(t=1,i=1,s=1,l=1,u=1,f=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:s,widthSegments:l,heightSegments:u,depthSegments:f};const d=this;l=Math.floor(l),u=Math.floor(u),f=Math.floor(f);const m=[],p=[],v=[],g=[];let x=0,y=0;b("z","y","x",-1,-1,s,i,t,f,u,0),b("z","y","x",1,-1,s,i,-t,f,u,1),b("x","z","y",1,1,t,s,i,l,f,2),b("x","z","y",1,-1,t,s,-i,l,f,3),b("x","y","z",1,-1,t,i,s,l,u,4),b("x","y","z",-1,-1,t,i,-s,l,u,5),this.setIndex(m),this.setAttribute("position",new gi(p,3)),this.setAttribute("normal",new gi(v,3)),this.setAttribute("uv",new gi(g,2));function b(C,M,S,P,N,U,F,H,I,Q,R){const w=U/I,k=F/Q,nt=U/2,st=F/2,mt=H/2,ct=I+1,z=Q+1;let O=0,j=0;const dt=new K;for(let ft=0;ft<z;ft++){const D=ft*k-st;for(let J=0;J<ct;J++){const vt=J*w-nt;dt[C]=vt*P,dt[M]=D*N,dt[S]=mt,p.push(dt.x,dt.y,dt.z),dt[C]=0,dt[M]=0,dt[S]=H>0?1:-1,v.push(dt.x,dt.y,dt.z),g.push(J/I),g.push(1-ft/Q),O+=1}}for(let ft=0;ft<Q;ft++)for(let D=0;D<I;D++){const J=x+D+ct*ft,vt=x+D+ct*(ft+1),At=x+(D+1)+ct*(ft+1),Ft=x+(D+1)+ct*ft;m.push(J,vt,Ft),m.push(vt,At,Ft),j+=6}d.addGroup(y,j,R),y+=j,x+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new al(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Pr(r){const t={};for(const i in r){t[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][s]=null):t[i][s]=l.clone():Array.isArray(l)?t[i][s]=l.slice():t[i][s]=l}}return t}function zn(r){const t={};for(let i=0;i<r.length;i++){const s=Pr(r[i]);for(const l in s)t[l]=s[l]}return t}function iM(r){const t=[];for(let i=0;i<r.length;i++)t.push(r[i].clone());return t}function M_(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const aM={clone:Pr,merge:zn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ki extends Ku{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=rM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Pr(t.uniforms),this.uniformsGroups=iM(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const f=this.uniforms[l].value;f&&f.isTexture?i.uniforms[l]={type:"t",value:f.toJSON(t).uuid}:f&&f.isColor?i.uniforms[l]={type:"c",value:f.getHex()}:f&&f.isVector2?i.uniforms[l]={type:"v2",value:f.toArray()}:f&&f.isVector3?i.uniforms[l]={type:"v3",value:f.toArray()}:f&&f.isVector4?i.uniforms[l]={type:"v4",value:f.toArray()}:f&&f.isMatrix3?i.uniforms[l]={type:"m3",value:f.toArray()}:f&&f.isMatrix4?i.uniforms[l]={type:"m4",value:f.toArray()}:i.uniforms[l]={value:f}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class E_ extends qn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Je,this.projectionMatrix=new Je,this.projectionMatrixInverse=new Je,this.coordinateSystem=Ii,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ja=new K,vv=new Qt,_v=new Qt;class ni extends E_{constructor(t=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=Fd*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fh*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Fd*2*Math.atan(Math.tan(fh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,s){Ja.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z),Ja.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Ja.x,Ja.y).multiplyScalar(-t/Ja.z)}getViewSize(t,i){return this.getViewBounds(t,vv,_v),i.subVectors(_v,vv)}setViewOffset(t,i,s,l,u,f){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(fh*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,u=-.5*l;const f=this.view;if(this.view!==null&&this.view.enabled){const m=f.fullWidth,p=f.fullHeight;u+=f.offsetX*l/m,i-=f.offsetY*s/p,l*=f.width/m,s*=f.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-s,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Ar=-90,Rr=1;class oM extends qn{constructor(t,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ni(Ar,Rr,t,i);l.layers=this.layers,this.add(l);const u=new ni(Ar,Rr,t,i);u.layers=this.layers,this.add(u);const f=new ni(Ar,Rr,t,i);f.layers=this.layers,this.add(f);const d=new ni(Ar,Rr,t,i);d.layers=this.layers,this.add(d);const m=new ni(Ar,Rr,t,i);m.layers=this.layers,this.add(m);const p=new ni(Ar,Rr,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[s,l,u,f,d,m]=i;for(const p of i)this.remove(p);if(t===Ii)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),f.up.set(0,0,1),f.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Yu)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),f.up.set(0,0,-1),f.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,f,d,m,p,v]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),y=t.getActiveMipmapLevel(),b=t.xr.enabled;t.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,t.setRenderTarget(s,0,l),t.render(i,u),t.setRenderTarget(s,1,l),t.render(i,f),t.setRenderTarget(s,2,l),t.render(i,d),t.setRenderTarget(s,3,l),t.render(i,m),t.setRenderTarget(s,4,l),t.render(i,p),s.texture.generateMipmaps=C,t.setRenderTarget(s,5,l),t.render(i,v),t.setRenderTarget(g,x,y),t.xr.enabled=b,s.texture.needsPMREMUpdate=!0}}class b_ extends In{constructor(t=[],i=Us,s,l,u,f,d,m,p,v){super(t,i,s,l,u,f,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class T_ extends Bi{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const s={width:t,height:t,depth:1},l=[s,s,s,s,s,s];this.texture=new b_(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new al(5,5,5),u=new ki({name:"CubemapFromEquirect",uniforms:Pr(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Wn,blending:ga});u.uniforms.tEquirect.value=i;const f=new Vi(l,u),d=i.minFilter;return i.minFilter===ws&&(i.minFilter=On),new oM(1,10,this).update(t,f),i.minFilter=d,f.geometry.dispose(),f.material.dispose(),this}clear(t,i=!0,s=!0,l=!0){const u=t.getRenderTarget();for(let f=0;f<6;f++)t.setRenderTarget(this,f),t.clear(i,s,l);t.setRenderTarget(u)}}class Lu extends qn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lM={type:"move"};class Lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Lu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Lu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Lu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const s of t.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,s){let l=null,u=null,f=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){f=!0;for(const C of t.hand.values()){const M=i.getJointPose(C,s),S=this._getHandJoint(p,C);M!==null&&(S.matrix.fromArray(M.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=M.radius),S.visible=M!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=v.position.distanceTo(g.position),y=.02,b=.005;p.inputState.pinching&&x>y+b?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=y-b&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,s),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,s),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lM)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=f!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const s=new Lu;s.matrixAutoUpdate=!1,s.visible=!1,t.joints[i.jointName]=s,t.add(s)}return t.joints[i.jointName]}}class uM extends qn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Sa,this.environmentIntensity=1,this.environmentRotation=new Sa,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class cM extends In{constructor(t=null,i=1,s=1,l,u,f,d,m,p=wn,v=wn,g,x){super(null,f,d,m,p,v,l,u,g,x),this.isDataTexture=!0,this.image={data:t,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Oh=new K,fM=new K,hM=new he;class As{constructor(t=new K(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,s,l){return this.normal.set(t,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,s){const l=Oh.subVectors(s,i).cross(fM.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const s=t.delta(Oh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(s,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),s=this.distanceToPoint(t.end);return i<0&&s>0||s<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const s=i||hM.getNormalMatrix(t),l=this.coplanarPoint(Oh).applyMatrix4(t),u=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Es=new tp,dM=new Qt(.5,.5),Ou=new K;class np{constructor(t=new As,i=new As,s=new As,l=new As,u=new As,f=new As){this.planes=[t,i,s,l,u,f]}set(t,i,s,l,u,f){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(u),d[5].copy(f),this}copy(t){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(t.planes[s]);return this}setFromProjectionMatrix(t,i=Ii,s=!1){const l=this.planes,u=t.elements,f=u[0],d=u[1],m=u[2],p=u[3],v=u[4],g=u[5],x=u[6],y=u[7],b=u[8],C=u[9],M=u[10],S=u[11],P=u[12],N=u[13],U=u[14],F=u[15];if(l[0].setComponents(p-f,y-v,S-b,F-P).normalize(),l[1].setComponents(p+f,y+v,S+b,F+P).normalize(),l[2].setComponents(p+d,y+g,S+C,F+N).normalize(),l[3].setComponents(p-d,y-g,S-C,F-N).normalize(),s)l[4].setComponents(m,x,M,U).normalize(),l[5].setComponents(p-m,y-x,S-M,F-U).normalize();else if(l[4].setComponents(p-m,y-x,S-M,F-U).normalize(),i===Ii)l[5].setComponents(p+m,y+x,S+M,F+U).normalize();else if(i===Yu)l[5].setComponents(m,x,M,U).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Es.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Es)}intersectsSprite(t){Es.center.set(0,0,0);const i=dM.distanceTo(t.center);return Es.radius=.7071067811865476+i,Es.applyMatrix4(t.matrixWorld),this.intersectsSphere(Es)}intersectsSphere(t){const i=this.planes,s=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(s)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(Ou.x=l.normal.x>0?t.max.x:t.min.x,Ou.y=l.normal.y>0?t.max.y:t.min.y,Ou.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jo extends In{constructor(t,i,s=Gi,l,u,f,d=wn,m=wn,p,v=xa,g=1){if(v!==xa&&v!==Ds)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const x={width:t,height:i,depth:g};super(x,l,u,f,d,m,v,s,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new $d(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class pM extends Jo{constructor(t,i=Gi,s=Us,l,u,f=wn,d=wn,m,p=xa){const v={width:t,height:t,depth:1},g=[v,v,v,v,v,v];super(t,t,i,s,l,u,f,d,m,p),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class A_ extends In{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Wi{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){re("Curve: .getPoint() not implemented.")}getPointAt(t,i){const s=this.getUtoTmapping(t);return this.getPoint(s,i)}getPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return i}getSpacedPoints(t=5){const i=[];for(let s=0;s<=t;s++)i.push(this.getPointAt(s/t));return i}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const i=[];let s,l=this.getPoint(0),u=0;i.push(0);for(let f=1;f<=t;f++)s=this.getPoint(f/t),u+=s.distanceTo(l),i.push(u),l=s;return this.cacheArcLengths=i,i}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,i=null){const s=this.getLengths();let l=0;const u=s.length;let f;i?f=i:f=t*s[u-1];let d=0,m=u-1,p;for(;d<=m;)if(l=Math.floor(d+(m-d)/2),p=s[l]-f,p<0)d=l+1;else if(p>0)m=l-1;else{m=l;break}if(l=m,s[l]===f)return l/(u-1);const v=s[l],x=s[l+1]-v,y=(f-v)/x;return(l+y)/(u-1)}getTangent(t,i){let l=t-1e-4,u=t+1e-4;l<0&&(l=0),u>1&&(u=1);const f=this.getPoint(l),d=this.getPoint(u),m=i||(f.isVector2?new Qt:new K);return m.copy(d).sub(f).normalize(),m}getTangentAt(t,i){const s=this.getUtoTmapping(t);return this.getTangent(s,i)}computeFrenetFrames(t,i=!1){const s=new K,l=[],u=[],f=[],d=new K,m=new Je;for(let y=0;y<=t;y++){const b=y/t;l[y]=this.getTangentAt(b,new K)}u[0]=new K,f[0]=new K;let p=Number.MAX_VALUE;const v=Math.abs(l[0].x),g=Math.abs(l[0].y),x=Math.abs(l[0].z);v<=p&&(p=v,s.set(1,0,0)),g<=p&&(p=g,s.set(0,1,0)),x<=p&&s.set(0,0,1),d.crossVectors(l[0],s).normalize(),u[0].crossVectors(l[0],d),f[0].crossVectors(l[0],u[0]);for(let y=1;y<=t;y++){if(u[y]=u[y-1].clone(),f[y]=f[y-1].clone(),d.crossVectors(l[y-1],l[y]),d.length()>Number.EPSILON){d.normalize();const b=Math.acos(_e(l[y-1].dot(l[y]),-1,1));u[y].applyMatrix4(m.makeRotationAxis(d,b))}f[y].crossVectors(l[y],u[y])}if(i===!0){let y=Math.acos(_e(u[0].dot(u[t]),-1,1));y/=t,l[0].dot(d.crossVectors(u[0],u[t]))>0&&(y=-y);for(let b=1;b<=t;b++)u[b].applyMatrix4(m.makeRotationAxis(l[b],y*b)),f[b].crossVectors(l[b],u[b])}return{tangents:l,normals:u,binormals:f}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ip extends Wi{constructor(t=0,i=0,s=1,l=1,u=0,f=Math.PI*2,d=!1,m=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=i,this.xRadius=s,this.yRadius=l,this.aStartAngle=u,this.aEndAngle=f,this.aClockwise=d,this.aRotation=m}getPoint(t,i=new Qt){const s=i,l=Math.PI*2;let u=this.aEndAngle-this.aStartAngle;const f=Math.abs(u)<Number.EPSILON;for(;u<0;)u+=l;for(;u>l;)u-=l;u<Number.EPSILON&&(f?u=0:u=l),this.aClockwise===!0&&!f&&(u===l?u=-l:u=u-l);const d=this.aStartAngle+t*u;let m=this.aX+this.xRadius*Math.cos(d),p=this.aY+this.yRadius*Math.sin(d);if(this.aRotation!==0){const v=Math.cos(this.aRotation),g=Math.sin(this.aRotation),x=m-this.aX,y=p-this.aY;m=x*v-y*g+this.aX,p=x*g+y*v+this.aY}return s.set(m,p)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class mM extends ip{constructor(t,i,s,l,u,f){super(t,i,s,s,l,u,f),this.isArcCurve=!0,this.type="ArcCurve"}}function ap(){let r=0,t=0,i=0,s=0;function l(u,f,d,m){r=u,t=d,i=-3*u+3*f-2*d-m,s=2*u-2*f+d+m}return{initCatmullRom:function(u,f,d,m,p){l(f,d,p*(d-u),p*(m-f))},initNonuniformCatmullRom:function(u,f,d,m,p,v,g){let x=(f-u)/p-(d-u)/(p+v)+(d-f)/v,y=(d-f)/v-(m-f)/(v+g)+(m-d)/g;x*=v,y*=v,l(f,d,x,y)},calc:function(u){const f=u*u,d=f*u;return r+t*u+i*f+s*d}}}const Pu=new K,Ph=new ap,zh=new ap,Ih=new ap;class gM extends Wi{constructor(t=[],i=!1,s="centripetal",l=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=i,this.curveType=s,this.tension=l}getPoint(t,i=new K){const s=i,l=this.points,u=l.length,f=(u-(this.closed?0:1))*t;let d=Math.floor(f),m=f-d;this.closed?d+=d>0?0:(Math.floor(Math.abs(d)/u)+1)*u:m===0&&d===u-1&&(d=u-2,m=1);let p,v;this.closed||d>0?p=l[(d-1)%u]:(Pu.subVectors(l[0],l[1]).add(l[0]),p=Pu);const g=l[d%u],x=l[(d+1)%u];if(this.closed||d+2<u?v=l[(d+2)%u]:(Pu.subVectors(l[u-1],l[u-2]).add(l[u-1]),v=Pu),this.curveType==="centripetal"||this.curveType==="chordal"){const y=this.curveType==="chordal"?.5:.25;let b=Math.pow(p.distanceToSquared(g),y),C=Math.pow(g.distanceToSquared(x),y),M=Math.pow(x.distanceToSquared(v),y);C<1e-4&&(C=1),b<1e-4&&(b=C),M<1e-4&&(M=C),Ph.initNonuniformCatmullRom(p.x,g.x,x.x,v.x,b,C,M),zh.initNonuniformCatmullRom(p.y,g.y,x.y,v.y,b,C,M),Ih.initNonuniformCatmullRom(p.z,g.z,x.z,v.z,b,C,M)}else this.curveType==="catmullrom"&&(Ph.initCatmullRom(p.x,g.x,x.x,v.x,this.tension),zh.initCatmullRom(p.y,g.y,x.y,v.y,this.tension),Ih.initCatmullRom(p.z,g.z,x.z,v.z,this.tension));return s.set(Ph.calc(m),zh.calc(m),Ih.calc(m)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new K().fromArray(l))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function xv(r,t,i,s,l){const u=(s-t)*.5,f=(l-i)*.5,d=r*r,m=r*d;return(2*i-2*s+u+f)*m+(-3*i+3*s-2*u-f)*d+u*r+i}function vM(r,t){const i=1-r;return i*i*t}function _M(r,t){return 2*(1-r)*r*t}function xM(r,t){return r*r*t}function qo(r,t,i,s){return vM(r,t)+_M(r,i)+xM(r,s)}function SM(r,t){const i=1-r;return i*i*i*t}function yM(r,t){const i=1-r;return 3*i*i*r*t}function MM(r,t){return 3*(1-r)*r*r*t}function EM(r,t){return r*r*r*t}function Yo(r,t,i,s,l){return SM(r,t)+yM(r,i)+MM(r,s)+EM(r,l)}class R_ extends Wi{constructor(t=new Qt,i=new Qt,s=new Qt,l=new Qt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new Qt){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Yo(t,l.x,u.x,f.x,d.x),Yo(t,l.y,u.y,f.y,d.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bM extends Wi{constructor(t=new K,i=new K,s=new K,l=new K){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=i,this.v2=s,this.v3=l}getPoint(t,i=new K){const s=i,l=this.v0,u=this.v1,f=this.v2,d=this.v3;return s.set(Yo(t,l.x,u.x,f.x,d.x),Yo(t,l.y,u.y,f.y,d.y),Yo(t,l.z,u.z,f.z,d.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class C_ extends Wi{constructor(t=new Qt,i=new Qt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=i}getPoint(t,i=new Qt){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new Qt){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class TM extends Wi{constructor(t=new K,i=new K){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=i}getPoint(t,i=new K){const s=i;return t===1?s.copy(this.v2):(s.copy(this.v2).sub(this.v1),s.multiplyScalar(t).add(this.v1)),s}getPointAt(t,i){return this.getPoint(t,i)}getTangent(t,i=new K){return i.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,i){return this.getTangent(t,i)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class w_ extends Wi{constructor(t=new Qt,i=new Qt,s=new Qt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new Qt){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(qo(t,l.x,u.x,f.x),qo(t,l.y,u.y,f.y)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class AM extends Wi{constructor(t=new K,i=new K,s=new K){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=i,this.v2=s}getPoint(t,i=new K){const s=i,l=this.v0,u=this.v1,f=this.v2;return s.set(qo(t,l.x,u.x,f.x),qo(t,l.y,u.y,f.y),qo(t,l.z,u.z,f.z)),s}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class D_ extends Wi{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,i=new Qt){const s=i,l=this.points,u=(l.length-1)*t,f=Math.floor(u),d=u-f,m=l[f===0?f:f-1],p=l[f],v=l[f>l.length-2?l.length-1:f+1],g=l[f>l.length-3?l.length-1:f+2];return s.set(xv(d,m.x,p.x,v.x,g.x),xv(d,m.y,p.y,v.y,g.y)),s}copy(t){super.copy(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let i=0,s=this.points.length;i<s;i++){const l=this.points[i];t.points.push(l.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let i=0,s=t.points.length;i<s;i++){const l=t.points[i];this.points.push(new Qt().fromArray(l))}return this}}var Sv=Object.freeze({__proto__:null,ArcCurve:mM,CatmullRomCurve3:gM,CubicBezierCurve:R_,CubicBezierCurve3:bM,EllipseCurve:ip,LineCurve:C_,LineCurve3:TM,QuadraticBezierCurve:w_,QuadraticBezierCurve3:AM,SplineCurve:D_});class RM extends Wi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),i=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(i)){const s=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Sv[s](i,t))}return this}getPoint(t,i){const s=t*this.getLength(),l=this.getCurveLengths();let u=0;for(;u<l.length;){if(l[u]>=s){const f=l[u]-s,d=this.curves[u],m=d.getLength(),p=m===0?0:1-f/m;return d.getPointAt(p,i)}u++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let i=0;for(let s=0,l=this.curves.length;s<l;s++)i+=this.curves[s].getLength(),t.push(i);return this.cacheLengths=t,t}getSpacedPoints(t=40){const i=[];for(let s=0;s<=t;s++)i.push(this.getPoint(s/t));return this.autoClose&&i.push(i[0]),i}getPoints(t=12){const i=[];let s;for(let l=0,u=this.curves;l<u.length;l++){const f=u[l],d=f.isEllipseCurve?t*2:f.isLineCurve||f.isLineCurve3?1:f.isSplineCurve?t*f.points.length:t,m=f.getPoints(d);for(let p=0;p<m.length;p++){const v=m[p];s&&s.equals(v)||(i.push(v),s=v)}}return this.autoClose&&i.length>1&&!i[i.length-1].equals(i[0])&&i.push(i[0]),i}copy(t){super.copy(t),this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(l.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let i=0,s=this.curves.length;i<s;i++){const l=this.curves[i];t.curves.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let i=0,s=t.curves.length;i<s;i++){const l=t.curves[i];this.curves.push(new Sv[l.type]().fromJSON(l))}return this}}class yv extends RM{constructor(t){super(),this.type="Path",this.currentPoint=new Qt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let i=1,s=t.length;i<s;i++)this.lineTo(t[i].x,t[i].y);return this}moveTo(t,i){return this.currentPoint.set(t,i),this}lineTo(t,i){const s=new C_(this.currentPoint.clone(),new Qt(t,i));return this.curves.push(s),this.currentPoint.set(t,i),this}quadraticCurveTo(t,i,s,l){const u=new w_(this.currentPoint.clone(),new Qt(t,i),new Qt(s,l));return this.curves.push(u),this.currentPoint.set(s,l),this}bezierCurveTo(t,i,s,l,u,f){const d=new R_(this.currentPoint.clone(),new Qt(t,i),new Qt(s,l),new Qt(u,f));return this.curves.push(d),this.currentPoint.set(u,f),this}splineThru(t){const i=[this.currentPoint.clone()].concat(t),s=new D_(i);return this.curves.push(s),this.currentPoint.copy(t[t.length-1]),this}arc(t,i,s,l,u,f){const d=this.currentPoint.x,m=this.currentPoint.y;return this.absarc(t+d,i+m,s,l,u,f),this}absarc(t,i,s,l,u,f){return this.absellipse(t,i,s,s,l,u,f),this}ellipse(t,i,s,l,u,f,d,m){const p=this.currentPoint.x,v=this.currentPoint.y;return this.absellipse(t+p,i+v,s,l,u,f,d,m),this}absellipse(t,i,s,l,u,f,d,m){const p=new ip(t,i,s,l,u,f,d,m);if(this.curves.length>0){const g=p.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(p);const v=p.getPoint(1);return this.currentPoint.copy(v),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class U_ extends yv{constructor(t){super(t),this.uuid=Fr(),this.type="Shape",this.holes=[]}getPointsHoles(t){const i=[];for(let s=0,l=this.holes.length;s<l;s++)i[s]=this.holes[s].getPoints(t);return i}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(l.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let i=0,s=this.holes.length;i<s;i++){const l=this.holes[i];t.holes.push(l.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let i=0,s=t.holes.length;i<s;i++){const l=t.holes[i];this.holes.push(new yv().fromJSON(l))}return this}}function CM(r,t,i=2){const s=t&&t.length,l=s?t[0]*i:r.length;let u=N_(r,0,l,i,!0);const f=[];if(!u||u.next===u.prev)return f;let d,m,p;if(s&&(u=LM(r,t,u,i)),r.length>80*i){d=r[0],m=r[1];let v=d,g=m;for(let x=i;x<l;x+=i){const y=r[x],b=r[x+1];y<d&&(d=y),b<m&&(m=b),y>v&&(v=y),b>g&&(g=b)}p=Math.max(v-d,g-m),p=p!==0?32767/p:0}return $o(u,f,i,d,m,p,0),f}function N_(r,t,i,s,l){let u;if(l===XM(r,t,i,s)>0)for(let f=t;f<i;f+=s)u=Mv(f/s|0,r[f],r[f+1],u);else for(let f=i-s;f>=t;f-=s)u=Mv(f/s|0,r[f],r[f+1],u);return u&&zr(u,u.next)&&(el(u),u=u.next),u}function Ns(r,t){if(!r)return r;t||(t=r);let i=r,s;do if(s=!1,!i.steiner&&(zr(i,i.next)||Qe(i.prev,i,i.next)===0)){if(el(i),i=t=i.prev,i===i.next)break;s=!0}else i=i.next;while(s||i!==t);return t}function $o(r,t,i,s,l,u,f){if(!r)return;!f&&u&&FM(r,s,l,u);let d=r;for(;r.prev!==r.next;){const m=r.prev,p=r.next;if(u?DM(r,s,l,u):wM(r)){t.push(m.i,r.i,p.i),el(r),r=p.next,d=p.next;continue}if(r=p,r===d){f?f===1?(r=UM(Ns(r),t),$o(r,t,i,s,l,u,2)):f===2&&NM(r,t,i,s,l,u):$o(Ns(r),t,i,s,l,u,1);break}}}function wM(r){const t=r.prev,i=r,s=r.next;if(Qe(t,i,s)>=0)return!1;const l=t.x,u=i.x,f=s.x,d=t.y,m=i.y,p=s.y,v=Math.min(l,u,f),g=Math.min(d,m,p),x=Math.max(l,u,f),y=Math.max(d,m,p);let b=s.next;for(;b!==t;){if(b.x>=v&&b.x<=x&&b.y>=g&&b.y<=y&&Xo(l,d,u,m,f,p,b.x,b.y)&&Qe(b.prev,b,b.next)>=0)return!1;b=b.next}return!0}function DM(r,t,i,s){const l=r.prev,u=r,f=r.next;if(Qe(l,u,f)>=0)return!1;const d=l.x,m=u.x,p=f.x,v=l.y,g=u.y,x=f.y,y=Math.min(d,m,p),b=Math.min(v,g,x),C=Math.max(d,m,p),M=Math.max(v,g,x),S=Bd(y,b,t,i,s),P=Bd(C,M,t,i,s);let N=r.prevZ,U=r.nextZ;for(;N&&N.z>=S&&U&&U.z<=P;){if(N.x>=y&&N.x<=C&&N.y>=b&&N.y<=M&&N!==l&&N!==f&&Xo(d,v,m,g,p,x,N.x,N.y)&&Qe(N.prev,N,N.next)>=0||(N=N.prevZ,U.x>=y&&U.x<=C&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&Xo(d,v,m,g,p,x,U.x,U.y)&&Qe(U.prev,U,U.next)>=0))return!1;U=U.nextZ}for(;N&&N.z>=S;){if(N.x>=y&&N.x<=C&&N.y>=b&&N.y<=M&&N!==l&&N!==f&&Xo(d,v,m,g,p,x,N.x,N.y)&&Qe(N.prev,N,N.next)>=0)return!1;N=N.prevZ}for(;U&&U.z<=P;){if(U.x>=y&&U.x<=C&&U.y>=b&&U.y<=M&&U!==l&&U!==f&&Xo(d,v,m,g,p,x,U.x,U.y)&&Qe(U.prev,U,U.next)>=0)return!1;U=U.nextZ}return!0}function UM(r,t){let i=r;do{const s=i.prev,l=i.next.next;!zr(s,l)&&O_(s,i,i.next,l)&&tl(s,l)&&tl(l,s)&&(t.push(s.i,i.i,l.i),el(i),el(i.next),i=r=l),i=i.next}while(i!==r);return Ns(i)}function NM(r,t,i,s,l,u){let f=r;do{let d=f.next.next;for(;d!==f.prev;){if(f.i!==d.i&&GM(f,d)){let m=P_(f,d);f=Ns(f,f.next),m=Ns(m,m.next),$o(f,t,i,s,l,u,0),$o(m,t,i,s,l,u,0);return}d=d.next}f=f.next}while(f!==r)}function LM(r,t,i,s){const l=[];for(let u=0,f=t.length;u<f;u++){const d=t[u]*s,m=u<f-1?t[u+1]*s:r.length,p=N_(r,d,m,s,!1);p===p.next&&(p.steiner=!0),l.push(HM(p))}l.sort(OM);for(let u=0;u<l.length;u++)i=PM(l[u],i);return i}function OM(r,t){let i=r.x-t.x;if(i===0&&(i=r.y-t.y,i===0)){const s=(r.next.y-r.y)/(r.next.x-r.x),l=(t.next.y-t.y)/(t.next.x-t.x);i=s-l}return i}function PM(r,t){const i=zM(r,t);if(!i)return t;const s=P_(i,r);return Ns(s,s.next),Ns(i,i.next)}function zM(r,t){let i=t;const s=r.x,l=r.y;let u=-1/0,f;if(zr(r,i))return i;do{if(zr(r,i.next))return i.next;if(l<=i.y&&l>=i.next.y&&i.next.y!==i.y){const g=i.x+(l-i.y)*(i.next.x-i.x)/(i.next.y-i.y);if(g<=s&&g>u&&(u=g,f=i.x<i.next.x?i:i.next,g===s))return f}i=i.next}while(i!==t);if(!f)return null;const d=f,m=f.x,p=f.y;let v=1/0;i=f;do{if(s>=i.x&&i.x>=m&&s!==i.x&&L_(l<p?s:u,l,m,p,l<p?u:s,l,i.x,i.y)){const g=Math.abs(l-i.y)/(s-i.x);tl(i,r)&&(g<v||g===v&&(i.x>f.x||i.x===f.x&&IM(f,i)))&&(f=i,v=g)}i=i.next}while(i!==d);return f}function IM(r,t){return Qe(r.prev,r,t.prev)<0&&Qe(t.next,r,r.next)<0}function FM(r,t,i,s){let l=r;do l.z===0&&(l.z=Bd(l.x,l.y,t,i,s)),l.prevZ=l.prev,l.nextZ=l.next,l=l.next;while(l!==r);l.prevZ.nextZ=null,l.prevZ=null,BM(l)}function BM(r){let t,i=1;do{let s=r,l;r=null;let u=null;for(t=0;s;){t++;let f=s,d=0;for(let p=0;p<i&&(d++,f=f.nextZ,!!f);p++);let m=i;for(;d>0||m>0&&f;)d!==0&&(m===0||!f||s.z<=f.z)?(l=s,s=s.nextZ,d--):(l=f,f=f.nextZ,m--),u?u.nextZ=l:r=l,l.prevZ=u,u=l;s=f}u.nextZ=null,i*=2}while(t>1);return r}function Bd(r,t,i,s,l){return r=(r-i)*l|0,t=(t-s)*l|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,r|t<<1}function HM(r){let t=r,i=r;do(t.x<i.x||t.x===i.x&&t.y<i.y)&&(i=t),t=t.next;while(t!==r);return i}function L_(r,t,i,s,l,u,f,d){return(l-f)*(t-d)>=(r-f)*(u-d)&&(r-f)*(s-d)>=(i-f)*(t-d)&&(i-f)*(u-d)>=(l-f)*(s-d)}function Xo(r,t,i,s,l,u,f,d){return!(r===f&&t===d)&&L_(r,t,i,s,l,u,f,d)}function GM(r,t){return r.next.i!==t.i&&r.prev.i!==t.i&&!VM(r,t)&&(tl(r,t)&&tl(t,r)&&kM(r,t)&&(Qe(r.prev,r,t.prev)||Qe(r,t.prev,t))||zr(r,t)&&Qe(r.prev,r,r.next)>0&&Qe(t.prev,t,t.next)>0)}function Qe(r,t,i){return(t.y-r.y)*(i.x-t.x)-(t.x-r.x)*(i.y-t.y)}function zr(r,t){return r.x===t.x&&r.y===t.y}function O_(r,t,i,s){const l=Iu(Qe(r,t,i)),u=Iu(Qe(r,t,s)),f=Iu(Qe(i,s,r)),d=Iu(Qe(i,s,t));return!!(l!==u&&f!==d||l===0&&zu(r,i,t)||u===0&&zu(r,s,t)||f===0&&zu(i,r,s)||d===0&&zu(i,t,s))}function zu(r,t,i){return t.x<=Math.max(r.x,i.x)&&t.x>=Math.min(r.x,i.x)&&t.y<=Math.max(r.y,i.y)&&t.y>=Math.min(r.y,i.y)}function Iu(r){return r>0?1:r<0?-1:0}function VM(r,t){let i=r;do{if(i.i!==r.i&&i.next.i!==r.i&&i.i!==t.i&&i.next.i!==t.i&&O_(i,i.next,r,t))return!0;i=i.next}while(i!==r);return!1}function tl(r,t){return Qe(r.prev,r,r.next)<0?Qe(r,t,r.next)>=0&&Qe(r,r.prev,t)>=0:Qe(r,t,r.prev)<0||Qe(r,r.next,t)<0}function kM(r,t){let i=r,s=!1;const l=(r.x+t.x)/2,u=(r.y+t.y)/2;do i.y>u!=i.next.y>u&&i.next.y!==i.y&&l<(i.next.x-i.x)*(u-i.y)/(i.next.y-i.y)+i.x&&(s=!s),i=i.next;while(i!==r);return s}function P_(r,t){const i=Hd(r.i,r.x,r.y),s=Hd(t.i,t.x,t.y),l=r.next,u=t.prev;return r.next=t,t.prev=r,i.next=l,l.prev=i,s.next=i,i.prev=s,u.next=s,s.prev=u,s}function Mv(r,t,i,s){const l=Hd(r,t,i);return s?(l.next=s.next,l.prev=s,s.next.prev=l,s.next=l):(l.prev=l,l.next=l),l}function el(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function Hd(r,t,i){return{i:r,x:t,y:i,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function XM(r,t,i,s){let l=0;for(let u=t,f=i-s;u<i;u+=s)l+=(r[f]-r[u])*(r[u+1]+r[f+1]),f=u;return l}class WM{static triangulate(t,i,s=2){return CM(t,i,s)}}class jo{static area(t){const i=t.length;let s=0;for(let l=i-1,u=0;u<i;l=u++)s+=t[l].x*t[u].y-t[u].x*t[l].y;return s*.5}static isClockWise(t){return jo.area(t)<0}static triangulateShape(t,i){const s=[],l=[],u=[];Ev(t),bv(s,t);let f=t.length;i.forEach(Ev);for(let m=0;m<i.length;m++)l.push(f),f+=i[m].length,bv(s,i[m]);const d=WM.triangulate(s,l);for(let m=0;m<d.length;m+=3)u.push(d.slice(m,m+3));return u}}function Ev(r){const t=r.length;t>2&&r[t-1].equals(r[0])&&r.pop()}function bv(r,t){for(let i=0;i<t.length;i++)r.push(t[i].x),r.push(t[i].y)}class Qu extends Xi{constructor(t=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:s,heightSegments:l};const u=t/2,f=i/2,d=Math.floor(s),m=Math.floor(l),p=d+1,v=m+1,g=t/d,x=i/m,y=[],b=[],C=[],M=[];for(let S=0;S<v;S++){const P=S*x-f;for(let N=0;N<p;N++){const U=N*g-u;b.push(U,-P,0),C.push(0,0,1),M.push(N/d),M.push(1-S/m)}}for(let S=0;S<m;S++)for(let P=0;P<d;P++){const N=P+p*S,U=P+p*(S+1),F=P+1+p*(S+1),H=P+1+p*S;y.push(N,U,H),y.push(U,F,H)}this.setIndex(y),this.setAttribute("position",new gi(b,3)),this.setAttribute("normal",new gi(C,3)),this.setAttribute("uv",new gi(M,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qu(t.width,t.height,t.widthSegments,t.heightSegments)}}class sp extends Xi{constructor(t=new U_([new Qt(0,.5),new Qt(-.5,-.5),new Qt(.5,-.5)]),i=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:i};const s=[],l=[],u=[],f=[];let d=0,m=0;if(Array.isArray(t)===!1)p(t);else for(let v=0;v<t.length;v++)p(t[v]),this.addGroup(d,m,v),d+=m,m=0;this.setIndex(s),this.setAttribute("position",new gi(l,3)),this.setAttribute("normal",new gi(u,3)),this.setAttribute("uv",new gi(f,2));function p(v){const g=l.length/3,x=v.extractPoints(i);let y=x.shape;const b=x.holes;jo.isClockWise(y)===!1&&(y=y.reverse());for(let M=0,S=b.length;M<S;M++){const P=b[M];jo.isClockWise(P)===!0&&(b[M]=P.reverse())}const C=jo.triangulateShape(y,b);for(let M=0,S=b.length;M<S;M++){const P=b[M];y=y.concat(P)}for(let M=0,S=y.length;M<S;M++){const P=y[M];l.push(P.x,P.y,0),u.push(0,0,1),f.push(P.x,P.y)}for(let M=0,S=C.length;M<S;M++){const P=C[M],N=P[0]+g,U=P[1]+g,F=P[2]+g;s.push(N,U,F),m+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),i=this.parameters.shapes;return qM(i,t)}static fromJSON(t,i){const s=[];for(let l=0,u=t.shapes.length;l<u;l++){const f=i[t.shapes[l]];s.push(f)}return new sp(s,t.curveSegments)}}function qM(r,t){if(t.shapes=[],Array.isArray(r))for(let i=0,s=r.length;i<s;i++){const l=r[i];t.shapes.push(l.uuid)}else t.shapes.push(r.uuid);return t}class YM extends ki{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class jM extends Ku{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ry,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ZM extends Ku{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class z_ extends qn{constructor(t,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Oe(t),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,i){return super.copy(t,i),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const i=super.toJSON(t);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const Fh=new Je,Tv=new K,Av=new K;class KM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=ii,this.map=null,this.mapPass=null,this.matrix=new Je,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new np,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const i=this.camera,s=this.matrix;Tv.setFromMatrixPosition(t.matrixWorld),i.position.copy(Tv),Av.setFromMatrixPosition(t.target.matrixWorld),i.lookAt(Av),i.updateMatrixWorld(),Fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Fh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class QM extends KM{constructor(){super(new ni(90,1,.5,500)),this.isPointLightShadow=!0}}class Rv extends z_{constructor(t,i,s=0,l=2){super(t,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new QM}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,i){return super.copy(t,i),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){const i=super.toJSON(t);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class I_ extends E_{constructor(t=-1,i=1,s=1,l=-1,u=.1,f=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=s,this.bottom=l,this.near=u,this.far=f,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,s,l,u,f){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=u,this.view.height=f,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=s-t,f=s+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,f=u+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(u,f,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class JM extends z_{constructor(t,i){super(t,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class $M extends ni{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Cv(r,t,i,s){const l=tE(s);switch(i){case d_:return r*t;case m_:return r*t/l.components*l.byteLength;case jd:return r*t/l.components*l.byteLength;case Lr:return r*t*2/l.components*l.byteLength;case Zd:return r*t*2/l.components*l.byteLength;case p_:return r*t*3/l.components*l.byteLength;case Ri:return r*t*4/l.components*l.byteLength;case Kd:return r*t*4/l.components*l.byteLength;case Gu:case Vu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ku:case Xu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case od:case ud:return Math.max(r,16)*Math.max(t,8)/4;case rd:case ld:return Math.max(r,8)*Math.max(t,8)/2;case cd:case fd:case dd:case pd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case hd:case md:case gd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case vd:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case _d:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case xd:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Sd:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case yd:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Md:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Ed:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case bd:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Td:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Ad:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Rd:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Cd:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case wd:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Dd:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Ud:case Nd:case Ld:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Od:case Pd:return Math.ceil(r/4)*Math.ceil(t/4)*8;case zd:case Id:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function tE(r){switch(r){case ii:case u_:return{byteLength:1,components:1};case Zo:case c_:case _a:return{byteLength:2,components:1};case qd:case Yd:return{byteLength:2,components:4};case Gi:case Wd:case zi:return{byteLength:4,components:1};case f_:case h_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xd}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xd);function F_(){let r=null,t=!1,i=null,s=null;function l(u,f){i(u,f),s=r.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(s=r.requestAnimationFrame(l),t=!0)},stop:function(){r.cancelAnimationFrame(s),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){r=u}}}function eE(r){const t=new WeakMap;function i(d,m){const p=d.array,v=d.usage,g=p.byteLength,x=r.createBuffer();r.bindBuffer(m,x),r.bufferData(m,p,v),d.onUploadCallback();let y;if(p instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=r.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=r.SHORT;else if(p instanceof Uint32Array)y=r.UNSIGNED_INT;else if(p instanceof Int32Array)y=r.INT;else if(p instanceof Int8Array)y=r.BYTE;else if(p instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function s(d,m,p){const v=m.array,g=m.updateRanges;if(r.bindBuffer(p,d),g.length===0)r.bufferSubData(p,0,v);else{g.sort((y,b)=>y.start-b.start);let x=0;for(let y=1;y<g.length;y++){const b=g[x],C=g[y];C.start<=b.start+b.count+1?b.count=Math.max(b.count,C.start+C.count-b.start):(++x,g[x]=C)}g.length=x+1;for(let y=0,b=g.length;y<b;y++){const C=g[y];r.bufferSubData(p,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(r.deleteBuffer(m.buffer),t.delete(d))}function f(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=t.get(d);(!v||v.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:f}}var nE=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iE=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,aE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,rE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,oE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,lE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,cE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,hE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,pE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,mE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,_E=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,xE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,SE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ME=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,EE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,TE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,AE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,RE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,CE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,DE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,UE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,NE="gl_FragColor = linearToOutputTexel( gl_FragColor );",LE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,OE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,zE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,IE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,BE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,HE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,GE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,VE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,kE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,XE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,WE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,YE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,jE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ZE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,KE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,QE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,JE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$E=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,eb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,nb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ib=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,sb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,lb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,cb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,fb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,db=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,pb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,mb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,_b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Sb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Mb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ab=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Db=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ub=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Lb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Pb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ib=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Fb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Bb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Hb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,kb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Wb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Yb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kb=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Qb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Jb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$b=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const eT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aT=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,oT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lT=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uT=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,cT=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,fT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,hT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dT=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mT=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vT=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,_T=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ST=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,MT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ET=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,AT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,UT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,de={alphahash_fragment:nE,alphahash_pars_fragment:iE,alphamap_fragment:aE,alphamap_pars_fragment:sE,alphatest_fragment:rE,alphatest_pars_fragment:oE,aomap_fragment:lE,aomap_pars_fragment:uE,batching_pars_vertex:cE,batching_vertex:fE,begin_vertex:hE,beginnormal_vertex:dE,bsdfs:pE,iridescence_fragment:mE,bumpmap_pars_fragment:gE,clipping_planes_fragment:vE,clipping_planes_pars_fragment:_E,clipping_planes_pars_vertex:xE,clipping_planes_vertex:SE,color_fragment:yE,color_pars_fragment:ME,color_pars_vertex:EE,color_vertex:bE,common:TE,cube_uv_reflection_fragment:AE,defaultnormal_vertex:RE,displacementmap_pars_vertex:CE,displacementmap_vertex:wE,emissivemap_fragment:DE,emissivemap_pars_fragment:UE,colorspace_fragment:NE,colorspace_pars_fragment:LE,envmap_fragment:OE,envmap_common_pars_fragment:PE,envmap_pars_fragment:zE,envmap_pars_vertex:IE,envmap_physical_pars_fragment:jE,envmap_vertex:FE,fog_vertex:BE,fog_pars_vertex:HE,fog_fragment:GE,fog_pars_fragment:VE,gradientmap_pars_fragment:kE,lightmap_pars_fragment:XE,lights_lambert_fragment:WE,lights_lambert_pars_fragment:qE,lights_pars_begin:YE,lights_toon_fragment:ZE,lights_toon_pars_fragment:KE,lights_phong_fragment:QE,lights_phong_pars_fragment:JE,lights_physical_fragment:$E,lights_physical_pars_fragment:tb,lights_fragment_begin:eb,lights_fragment_maps:nb,lights_fragment_end:ib,logdepthbuf_fragment:ab,logdepthbuf_pars_fragment:sb,logdepthbuf_pars_vertex:rb,logdepthbuf_vertex:ob,map_fragment:lb,map_pars_fragment:ub,map_particle_fragment:cb,map_particle_pars_fragment:fb,metalnessmap_fragment:hb,metalnessmap_pars_fragment:db,morphinstance_vertex:pb,morphcolor_vertex:mb,morphnormal_vertex:gb,morphtarget_pars_vertex:vb,morphtarget_vertex:_b,normal_fragment_begin:xb,normal_fragment_maps:Sb,normal_pars_fragment:yb,normal_pars_vertex:Mb,normal_vertex:Eb,normalmap_pars_fragment:bb,clearcoat_normal_fragment_begin:Tb,clearcoat_normal_fragment_maps:Ab,clearcoat_pars_fragment:Rb,iridescence_pars_fragment:Cb,opaque_fragment:wb,packing:Db,premultiplied_alpha_fragment:Ub,project_vertex:Nb,dithering_fragment:Lb,dithering_pars_fragment:Ob,roughnessmap_fragment:Pb,roughnessmap_pars_fragment:zb,shadowmap_pars_fragment:Ib,shadowmap_pars_vertex:Fb,shadowmap_vertex:Bb,shadowmask_pars_fragment:Hb,skinbase_vertex:Gb,skinning_pars_vertex:Vb,skinning_vertex:kb,skinnormal_vertex:Xb,specularmap_fragment:Wb,specularmap_pars_fragment:qb,tonemapping_fragment:Yb,tonemapping_pars_fragment:jb,transmission_fragment:Zb,transmission_pars_fragment:Kb,uv_pars_fragment:Qb,uv_pars_vertex:Jb,uv_vertex:$b,worldpos_vertex:tT,background_vert:eT,background_frag:nT,backgroundCube_vert:iT,backgroundCube_frag:aT,cube_vert:sT,cube_frag:rT,depth_vert:oT,depth_frag:lT,distance_vert:uT,distance_frag:cT,equirect_vert:fT,equirect_frag:hT,linedashed_vert:dT,linedashed_frag:pT,meshbasic_vert:mT,meshbasic_frag:gT,meshlambert_vert:vT,meshlambert_frag:_T,meshmatcap_vert:xT,meshmatcap_frag:ST,meshnormal_vert:yT,meshnormal_frag:MT,meshphong_vert:ET,meshphong_frag:bT,meshphysical_vert:TT,meshphysical_frag:AT,meshtoon_vert:RT,meshtoon_frag:CT,points_vert:wT,points_frag:DT,shadow_vert:UT,shadow_frag:NT,sprite_vert:LT,sprite_frag:OT},Pt={common:{diffuse:{value:new Oe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new he}},envmap:{envMap:{value:null},envMapRotation:{value:new he},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new he}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new he}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new he},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new he},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new he},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new he}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new he}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new he}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Oe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Oe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0},uvTransform:{value:new he}},sprite:{diffuse:{value:new Oe(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new he},alphaMap:{value:null},alphaMapTransform:{value:new he},alphaTest:{value:0}}},Oi={basic:{uniforms:zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.fog]),vertexShader:de.meshbasic_vert,fragmentShader:de.meshbasic_frag},lambert:{uniforms:zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshlambert_vert,fragmentShader:de.meshlambert_frag},phong:{uniforms:zn([Pt.common,Pt.specularmap,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,Pt.lights,{emissive:{value:new Oe(0)},specular:{value:new Oe(1118481)},shininess:{value:30}}]),vertexShader:de.meshphong_vert,fragmentShader:de.meshphong_frag},standard:{uniforms:zn([Pt.common,Pt.envmap,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.roughnessmap,Pt.metalnessmap,Pt.fog,Pt.lights,{emissive:{value:new Oe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag},toon:{uniforms:zn([Pt.common,Pt.aomap,Pt.lightmap,Pt.emissivemap,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.gradientmap,Pt.fog,Pt.lights,{emissive:{value:new Oe(0)}}]),vertexShader:de.meshtoon_vert,fragmentShader:de.meshtoon_frag},matcap:{uniforms:zn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,Pt.fog,{matcap:{value:null}}]),vertexShader:de.meshmatcap_vert,fragmentShader:de.meshmatcap_frag},points:{uniforms:zn([Pt.points,Pt.fog]),vertexShader:de.points_vert,fragmentShader:de.points_frag},dashed:{uniforms:zn([Pt.common,Pt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:de.linedashed_vert,fragmentShader:de.linedashed_frag},depth:{uniforms:zn([Pt.common,Pt.displacementmap]),vertexShader:de.depth_vert,fragmentShader:de.depth_frag},normal:{uniforms:zn([Pt.common,Pt.bumpmap,Pt.normalmap,Pt.displacementmap,{opacity:{value:1}}]),vertexShader:de.meshnormal_vert,fragmentShader:de.meshnormal_frag},sprite:{uniforms:zn([Pt.sprite,Pt.fog]),vertexShader:de.sprite_vert,fragmentShader:de.sprite_frag},background:{uniforms:{uvTransform:{value:new he},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:de.background_vert,fragmentShader:de.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new he}},vertexShader:de.backgroundCube_vert,fragmentShader:de.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:de.cube_vert,fragmentShader:de.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:de.equirect_vert,fragmentShader:de.equirect_frag},distance:{uniforms:zn([Pt.common,Pt.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:de.distance_vert,fragmentShader:de.distance_frag},shadow:{uniforms:zn([Pt.lights,Pt.fog,{color:{value:new Oe(0)},opacity:{value:1}}]),vertexShader:de.shadow_vert,fragmentShader:de.shadow_frag}};Oi.physical={uniforms:zn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new he},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new he},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new he},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new he},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new he},sheen:{value:0},sheenColor:{value:new Oe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new he},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new he},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new he},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new he},attenuationDistance:{value:0},attenuationColor:{value:new Oe(0)},specularColor:{value:new Oe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new he},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new he},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new he}}]),vertexShader:de.meshphysical_vert,fragmentShader:de.meshphysical_frag};const Fu={r:0,b:0,g:0},bs=new Sa,PT=new Je;function zT(r,t,i,s,l,u,f){const d=new Oe(0);let m=u===!0?0:1,p,v,g=null,x=0,y=null;function b(N){let U=N.isScene===!0?N.background:null;return U&&U.isTexture&&(U=(N.backgroundBlurriness>0?i:t).get(U)),U}function C(N){let U=!1;const F=b(N);F===null?S(d,m):F&&F.isColor&&(S(F,1),U=!0);const H=r.xr.getEnvironmentBlendMode();H==="additive"?s.buffers.color.setClear(0,0,0,1,f):H==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,f),(r.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(N,U){const F=b(U);F&&(F.isCubeTexture||F.mapping===Zu)?(v===void 0&&(v=new Vi(new al(1,1,1),new ki({name:"BackgroundCubeMaterial",uniforms:Pr(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Wn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(H,I,Q){this.matrixWorld.copyPosition(Q.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),bs.copy(U.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,F.isCubeTexture&&F.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),v.material.uniforms.envMap.value=F,v.material.uniforms.flipEnvMap.value=F.isCubeTexture&&F.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(PT.makeRotationFromEuler(bs)),v.material.toneMapped=be.getTransfer(F.colorSpace)!==Be,(g!==F||x!==F.version||y!==r.toneMapping)&&(v.material.needsUpdate=!0,g=F,x=F.version,y=r.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):F&&F.isTexture&&(p===void 0&&(p=new Vi(new Qu(2,2),new ki({name:"BackgroundMaterial",uniforms:Pr(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:es,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=F,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.toneMapped=be.getTransfer(F.colorSpace)!==Be,F.matrixAutoUpdate===!0&&F.updateMatrix(),p.material.uniforms.uvTransform.value.copy(F.matrix),(g!==F||x!==F.version||y!==r.toneMapping)&&(p.material.needsUpdate=!0,g=F,x=F.version,y=r.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function S(N,U){N.getRGB(Fu,M_(r)),s.buffers.color.setClear(Fu.r,Fu.g,Fu.b,U,f)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,U=1){d.set(N),m=U,S(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(N){m=N,S(d,m)},render:C,addToRenderList:M,dispose:P}}function IT(r,t){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=x(null);let u=l,f=!1;function d(w,k,nt,st,mt){let ct=!1;const z=g(st,nt,k);u!==z&&(u=z,p(u.object)),ct=y(w,st,nt,mt),ct&&b(w,st,nt,mt),mt!==null&&t.update(mt,r.ELEMENT_ARRAY_BUFFER),(ct||f)&&(f=!1,U(w,k,nt,st),mt!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(mt).buffer))}function m(){return r.createVertexArray()}function p(w){return r.bindVertexArray(w)}function v(w){return r.deleteVertexArray(w)}function g(w,k,nt){const st=nt.wireframe===!0;let mt=s[w.id];mt===void 0&&(mt={},s[w.id]=mt);let ct=mt[k.id];ct===void 0&&(ct={},mt[k.id]=ct);let z=ct[st];return z===void 0&&(z=x(m()),ct[st]=z),z}function x(w){const k=[],nt=[],st=[];for(let mt=0;mt<i;mt++)k[mt]=0,nt[mt]=0,st[mt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:nt,attributeDivisors:st,object:w,attributes:{},index:null}}function y(w,k,nt,st){const mt=u.attributes,ct=k.attributes;let z=0;const O=nt.getAttributes();for(const j in O)if(O[j].location>=0){const ft=mt[j];let D=ct[j];if(D===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(D=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(D=w.instanceColor)),ft===void 0||ft.attribute!==D||D&&ft.data!==D.data)return!0;z++}return u.attributesNum!==z||u.index!==st}function b(w,k,nt,st){const mt={},ct=k.attributes;let z=0;const O=nt.getAttributes();for(const j in O)if(O[j].location>=0){let ft=ct[j];ft===void 0&&(j==="instanceMatrix"&&w.instanceMatrix&&(ft=w.instanceMatrix),j==="instanceColor"&&w.instanceColor&&(ft=w.instanceColor));const D={};D.attribute=ft,ft&&ft.data&&(D.data=ft.data),mt[j]=D,z++}u.attributes=mt,u.attributesNum=z,u.index=st}function C(){const w=u.newAttributes;for(let k=0,nt=w.length;k<nt;k++)w[k]=0}function M(w){S(w,0)}function S(w,k){const nt=u.newAttributes,st=u.enabledAttributes,mt=u.attributeDivisors;nt[w]=1,st[w]===0&&(r.enableVertexAttribArray(w),st[w]=1),mt[w]!==k&&(r.vertexAttribDivisor(w,k),mt[w]=k)}function P(){const w=u.newAttributes,k=u.enabledAttributes;for(let nt=0,st=k.length;nt<st;nt++)k[nt]!==w[nt]&&(r.disableVertexAttribArray(nt),k[nt]=0)}function N(w,k,nt,st,mt,ct,z){z===!0?r.vertexAttribIPointer(w,k,nt,mt,ct):r.vertexAttribPointer(w,k,nt,st,mt,ct)}function U(w,k,nt,st){C();const mt=st.attributes,ct=nt.getAttributes(),z=k.defaultAttributeValues;for(const O in ct){const j=ct[O];if(j.location>=0){let dt=mt[O];if(dt===void 0&&(O==="instanceMatrix"&&w.instanceMatrix&&(dt=w.instanceMatrix),O==="instanceColor"&&w.instanceColor&&(dt=w.instanceColor)),dt!==void 0){const ft=dt.normalized,D=dt.itemSize,J=t.get(dt);if(J===void 0)continue;const vt=J.buffer,At=J.type,Ft=J.bytesPerElement,et=At===r.INT||At===r.UNSIGNED_INT||dt.gpuType===Wd;if(dt.isInterleavedBufferAttribute){const lt=dt.data,wt=lt.stride,Gt=dt.offset;if(lt.isInstancedInterleavedBuffer){for(let Rt=0;Rt<j.locationSize;Rt++)S(j.location+Rt,lt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Rt=0;Rt<j.locationSize;Rt++)M(j.location+Rt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let Rt=0;Rt<j.locationSize;Rt++)N(j.location+Rt,D/j.locationSize,At,ft,wt*Ft,(Gt+D/j.locationSize*Rt)*Ft,et)}else{if(dt.isInstancedBufferAttribute){for(let lt=0;lt<j.locationSize;lt++)S(j.location+lt,dt.meshPerAttribute);w.isInstancedMesh!==!0&&st._maxInstanceCount===void 0&&(st._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let lt=0;lt<j.locationSize;lt++)M(j.location+lt);r.bindBuffer(r.ARRAY_BUFFER,vt);for(let lt=0;lt<j.locationSize;lt++)N(j.location+lt,D/j.locationSize,At,ft,D*Ft,D/j.locationSize*lt*Ft,et)}}else if(z!==void 0){const ft=z[O];if(ft!==void 0)switch(ft.length){case 2:r.vertexAttrib2fv(j.location,ft);break;case 3:r.vertexAttrib3fv(j.location,ft);break;case 4:r.vertexAttrib4fv(j.location,ft);break;default:r.vertexAttrib1fv(j.location,ft)}}}}P()}function F(){Q();for(const w in s){const k=s[w];for(const nt in k){const st=k[nt];for(const mt in st)v(st[mt].object),delete st[mt];delete k[nt]}delete s[w]}}function H(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const nt in k){const st=k[nt];for(const mt in st)v(st[mt].object),delete st[mt];delete k[nt]}delete s[w.id]}function I(w){for(const k in s){const nt=s[k];if(nt[w.id]===void 0)continue;const st=nt[w.id];for(const mt in st)v(st[mt].object),delete st[mt];delete nt[w.id]}}function Q(){R(),f=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:Q,resetDefaultState:R,dispose:F,releaseStatesOfGeometry:H,releaseStatesOfProgram:I,initAttributes:C,enableAttribute:M,disableUnusedAttributes:P}}function FT(r,t,i){let s;function l(p){s=p}function u(p,v){r.drawArrays(s,p,v),i.update(v,s,1)}function f(p,v,g){g!==0&&(r.drawArraysInstanced(s,p,v,g),i.update(v,s,g))}function d(p,v,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,v,0,g);let y=0;for(let b=0;b<g;b++)y+=v[b];i.update(y,s,1)}function m(p,v,g,x){if(g===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let b=0;b<p.length;b++)f(p[b],v[b],x[b]);else{y.multiDrawArraysInstancedWEBGL(s,p,0,v,0,x,0,g);let b=0;for(let C=0;C<g;C++)b+=v[C]*x[C];i.update(b,s,1)}}this.setMode=l,this.render=u,this.renderInstances=f,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function BT(r,t,i,s){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const I=t.get("EXT_texture_filter_anisotropic");l=r.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function f(I){return!(I!==Ri&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const Q=I===_a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(I!==ii&&s.convert(I)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==zi&&!Q)}function m(I){if(I==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const v=m(p);v!==p&&(re("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=i.logarithmicDepthBuffer===!0,x=i.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),b=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),S=r.getParameter(r.MAX_VERTEX_ATTRIBS),P=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),N=r.getParameter(r.MAX_VARYING_VECTORS),U=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),F=r.getParameter(r.MAX_SAMPLES),H=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:f,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reversedDepthBuffer:x,maxTextures:y,maxVertexTextures:b,maxTextureSize:C,maxCubemapSize:M,maxAttributes:S,maxVertexUniforms:P,maxVaryings:N,maxFragmentUniforms:U,maxSamples:F,samples:H}}function HT(r){const t=this;let i=null,s=0,l=!1,u=!1;const f=new As,d=new he,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const y=g.length!==0||x||s!==0||l;return l=x,s=g.length,y},this.beginShadows=function(){u=!0,v(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=v(g,x,0)},this.setState=function(g,x,y){const b=g.clippingPlanes,C=g.clipIntersection,M=g.clipShadows,S=r.get(g);if(!l||b===null||b.length===0||u&&!M)u?v(null):p();else{const P=u?0:s,N=P*4;let U=S.clippingState||null;m.value=U,U=v(b,x,N,y);for(let F=0;F!==N;++F)U[F]=i[F];S.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=s>0),t.numPlanes=s,t.numIntersection=0}function v(g,x,y,b){const C=g!==null?g.length:0;let M=null;if(C!==0){if(M=m.value,b!==!0||M===null){const S=y+C*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(M===null||M.length<S)&&(M=new Float32Array(S));for(let N=0,U=y;N!==C;++N,U+=4)f.copy(g[N]).applyMatrix4(P,d),f.normal.toArray(M,U),M[U+3]=f.constant}m.value=M,m.needsUpdate=!0}return t.numPlanes=C,t.numIntersection=0,M}}function GT(r){let t=new WeakMap;function i(f,d){return d===nd?f.mapping=Us:d===id&&(f.mapping=Nr),f}function s(f){if(f&&f.isTexture){const d=f.mapping;if(d===nd||d===id)if(t.has(f)){const m=t.get(f).texture;return i(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const p=new T_(m.height);return p.fromEquirectangularTexture(r,f),t.set(f,p),f.addEventListener("dispose",l),i(p.texture,f.mapping)}else return null}}return f}function l(f){const d=f.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:s,dispose:u}}const ts=4,wv=[.125,.215,.35,.446,.526,.582],Cs=20,VT=256,Ho=new I_,Dv=new Oe;let Bh=null,Hh=0,Gh=0,Vh=!1;const kT=new K;class Uv{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,i=0,s=.1,l=100,u={}){const{size:f=256,position:d=kT}=u;Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(f);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(t,s,l,m,d),i>0&&this._blur(m,0,0,i),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ov(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Bh,Hh,Gh),this._renderer.xr.enabled=Vh,t.scissorTest=!1,Cr(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===Us||t.mapping===Nr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Bh=this._renderer.getRenderTarget(),Hh=this._renderer.getActiveCubeFace(),Gh=this._renderer.getActiveMipmapLevel(),Vh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(t,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:On,minFilter:On,generateMipmaps:!1,type:_a,format:Ri,colorSpace:Or,depthBuffer:!1},l=Nv(t,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nv(t,i,s);const{_lodMax:u}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XT(u)),this._blurMaterial=qT(u,t,i),this._ggxMaterial=WT(u,t,i)}return l}_compileMaterial(t){const i=new Vi(new Xi,t);this._renderer.compile(i,Ho)}_sceneToCubeUV(t,i,s,l,u){const m=new ni(90,1,i,s),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],g=this._renderer,x=g.autoClear,y=g.toneMapping;g.getClearColor(Dv),g.toneMapping=Fi,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(l),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Vi(new al,new ep({name:"PMREM.Background",side:Wn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,M=C.material;let S=!1;const P=t.background;P?P.isColor&&(M.color.copy(P),t.background=null,S=!0):(M.color.copy(Dv),S=!0);for(let N=0;N<6;N++){const U=N%3;U===0?(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x+v[N],u.y,u.z)):U===1?(m.up.set(0,0,p[N]),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y+v[N],u.z)):(m.up.set(0,p[N],0),m.position.set(u.x,u.y,u.z),m.lookAt(u.x,u.y,u.z+v[N]));const F=this._cubeSize;Cr(l,U*F,N>2?F:0,F,F),g.setRenderTarget(l),S&&g.render(C,m),g.render(t,m)}g.toneMapping=y,g.autoClear=x,t.background=P}_textureToCubeUV(t,i){const s=this._renderer,l=t.mapping===Us||t.mapping===Nr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ov()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lv());const u=l?this._cubemapMaterial:this._equirectMaterial,f=this._lodMeshes[0];f.material=u;const d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;Cr(i,0,0,3*m,2*m),s.setRenderTarget(i),s.render(f,Ho)}_applyPMREM(t){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let u=1;u<l;u++)this._applyGGXFilter(t,u-1,u);i.autoClear=s}_applyGGXFilter(t,i,s){const l=this._renderer,u=this._pingPongRenderTarget,f=this._ggxMaterial,d=this._lodMeshes[s];d.material=f;const m=f.uniforms,p=s/(this._lodMeshes.length-1),v=i/(this._lodMeshes.length-1),g=Math.sqrt(p*p-v*v),x=0+p*1.25,y=g*x,{_lodMax:b}=this,C=this._sizeLods[s],M=3*C*(s>b-ts?s-b+ts:0),S=4*(this._cubeSize-C);m.envMap.value=t.texture,m.roughness.value=y,m.mipInt.value=b-i,Cr(u,M,S,3*C,2*C),l.setRenderTarget(u),l.render(d,Ho),m.envMap.value=u.texture,m.roughness.value=0,m.mipInt.value=b-s,Cr(t,M,S,3*C,2*C),l.setRenderTarget(t),l.render(d,Ho)}_blur(t,i,s,l,u){const f=this._pingPongRenderTarget;this._halfBlur(t,f,i,s,l,"latitudinal",u),this._halfBlur(f,t,s,s,l,"longitudinal",u)}_halfBlur(t,i,s,l,u,f,d){const m=this._renderer,p=this._blurMaterial;f!=="latitudinal"&&f!=="longitudinal"&&Re("blur direction must be either latitudinal or longitudinal!");const v=3,g=this._lodMeshes[l];g.material=p;const x=p.uniforms,y=this._sizeLods[s]-1,b=isFinite(u)?Math.PI/(2*y):2*Math.PI/(2*Cs-1),C=u/b,M=isFinite(u)?1+Math.floor(v*C):Cs;M>Cs&&re(`sigmaRadians, ${u}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Cs}`);const S=[];let P=0;for(let I=0;I<Cs;++I){const Q=I/C,R=Math.exp(-Q*Q/2);S.push(R),I===0?P+=R:I<M&&(P+=2*R)}for(let I=0;I<S.length;I++)S[I]=S[I]/P;x.envMap.value=t.texture,x.samples.value=M,x.weights.value=S,x.latitudinal.value=f==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:N}=this;x.dTheta.value=b,x.mipInt.value=N-s;const U=this._sizeLods[l],F=3*U*(l>N-ts?l-N+ts:0),H=4*(this._cubeSize-U);Cr(i,F,H,3*U,2*U),m.setRenderTarget(i),m.render(g,Ho)}}function XT(r){const t=[],i=[],s=[];let l=r;const u=r-ts+1+wv.length;for(let f=0;f<u;f++){const d=Math.pow(2,l);t.push(d);let m=1/d;f>r-ts?m=wv[f-r+ts-1]:f===0&&(m=0),i.push(m);const p=1/(d-2),v=-p,g=1+p,x=[v,v,g,v,g,g,v,v,g,g,v,g],y=6,b=6,C=3,M=2,S=1,P=new Float32Array(C*b*y),N=new Float32Array(M*b*y),U=new Float32Array(S*b*y);for(let H=0;H<y;H++){const I=H%3*2/3-1,Q=H>2?0:-1,R=[I,Q,0,I+2/3,Q,0,I+2/3,Q+1,0,I,Q,0,I+2/3,Q+1,0,I,Q+1,0];P.set(R,C*b*H),N.set(x,M*b*H);const w=[H,H,H,H,H,H];U.set(w,S*b*H)}const F=new Xi;F.setAttribute("position",new Hi(P,C)),F.setAttribute("uv",new Hi(N,M)),F.setAttribute("faceIndex",new Hi(U,S)),s.push(new Vi(F,null)),l>ts&&l--}return{lodMeshes:s,sizeLods:t,sigmas:i}}function Nv(r,t,i){const s=new Bi(r,t,i);return s.texture.mapping=Zu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Cr(r,t,i,s,l){r.viewport.set(t,i,s,l),r.scissor.set(t,i,s,l)}function WT(r,t,i){return new ki({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:VT,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ju(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function qT(r,t,i){const s=new Float32Array(Cs),l=new K(0,1,0);return new ki({name:"SphericalGaussianBlur",defines:{n:Cs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Lv(){return new ki({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Ov(){return new ki({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ju(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ga,depthTest:!1,depthWrite:!1})}function Ju(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YT(r){let t=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const m=d.mapping,p=m===nd||m===id,v=m===Us||m===Nr;if(p||v){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Uv(r)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const y=d.image;return p&&y&&y.height>0||v&&y&&l(y)?(i===null&&(i=new Uv(r)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function f(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:f}}function jT(r){const t={};function i(s){if(t[s]!==void 0)return t[s];const l=r.getExtension(s);return t[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Qo("WebGLRenderer: "+s+" extension not supported."),l}}}function ZT(r,t,i,s){const l={},u=new WeakMap;function f(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const b in x.attributes)t.remove(x.attributes[b]);x.removeEventListener("dispose",f),delete l[x.id];const y=u.get(x);y&&(t.remove(y),u.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",f),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const y in x)t.update(x[y],r.ARRAY_BUFFER)}function p(g){const x=[],y=g.index,b=g.attributes.position;let C=0;if(y!==null){const P=y.array;C=y.version;for(let N=0,U=P.length;N<U;N+=3){const F=P[N+0],H=P[N+1],I=P[N+2];x.push(F,H,H,I,I,F)}}else if(b!==void 0){const P=b.array;C=b.version;for(let N=0,U=P.length/3-1;N<U;N+=3){const F=N+0,H=N+1,I=N+2;x.push(F,H,H,I,I,F)}}else return;const M=new(g_(x)?y_:S_)(x,1);M.version=C;const S=u.get(g);S&&t.remove(S),u.set(g,M)}function v(g){const x=u.get(g);if(x){const y=g.index;y!==null&&x.version<y.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:v}}function KT(r,t,i){let s;function l(x){s=x}let u,f;function d(x){u=x.type,f=x.bytesPerElement}function m(x,y){r.drawElements(s,y,u,x*f),i.update(y,s,1)}function p(x,y,b){b!==0&&(r.drawElementsInstanced(s,y,u,x*f,b),i.update(y,s,b))}function v(x,y,b){if(b===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,u,x,0,b);let M=0;for(let S=0;S<b;S++)M+=y[S];i.update(M,s,1)}function g(x,y,b,C){if(b===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let S=0;S<x.length;S++)p(x[S]/f,y[S],C[S]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,u,x,0,C,0,b);let S=0;for(let P=0;P<b;P++)S+=y[P]*C[P];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function QT(r){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(u,f,d){switch(i.calls++,f){case r.TRIANGLES:i.triangles+=d*(u/3);break;case r.LINES:i.lines+=d*(u/2);break;case r.LINE_STRIP:i.lines+=d*(u-1);break;case r.LINE_LOOP:i.lines+=d*u;break;case r.POINTS:i.points+=d*u;break;default:Re("WebGLInfo: Unknown draw mode:",f);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:s}}function JT(r,t,i){const s=new WeakMap,l=new nn;function u(f,d,m){const p=f.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==g){let w=function(){Q.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;x!==void 0&&x.texture.dispose();const b=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let U=0;b===!0&&(U=1),C===!0&&(U=2),M===!0&&(U=3);let F=d.attributes.position.count*U,H=1;F>t.maxTextureSize&&(H=Math.ceil(F/t.maxTextureSize),F=t.maxTextureSize);const I=new Float32Array(F*H*4*g),Q=new v_(I,F,H,g);Q.type=zi,Q.needsUpdate=!0;const R=U*4;for(let k=0;k<g;k++){const nt=S[k],st=P[k],mt=N[k],ct=F*H*4*k;for(let z=0;z<nt.count;z++){const O=z*R;b===!0&&(l.fromBufferAttribute(nt,z),I[ct+O+0]=l.x,I[ct+O+1]=l.y,I[ct+O+2]=l.z,I[ct+O+3]=0),C===!0&&(l.fromBufferAttribute(st,z),I[ct+O+4]=l.x,I[ct+O+5]=l.y,I[ct+O+6]=l.z,I[ct+O+7]=0),M===!0&&(l.fromBufferAttribute(mt,z),I[ct+O+8]=l.x,I[ct+O+9]=l.y,I[ct+O+10]=l.z,I[ct+O+11]=mt.itemSize===4?l.w:1)}}x={count:g,texture:Q,size:new Qt(F,H)},s.set(d,x),d.addEventListener("dispose",w)}if(f.isInstancedMesh===!0&&f.morphTexture!==null)m.getUniforms().setValue(r,"morphTexture",f.morphTexture,i);else{let b=0;for(let M=0;M<p.length;M++)b+=p[M];const C=d.morphTargetsRelative?1:1-b;m.getUniforms().setValue(r,"morphTargetBaseInfluence",C),m.getUniforms().setValue(r,"morphTargetInfluences",p)}m.getUniforms().setValue(r,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(r,"morphTargetsTextureSize",x.size)}return{update:u}}function $T(r,t,i,s){let l=new WeakMap;function u(m){const p=s.render.frame,v=m.geometry,g=t.get(m,v);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,r.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,r.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function f(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:f}}const t1={[e_]:"LINEAR_TONE_MAPPING",[n_]:"REINHARD_TONE_MAPPING",[i_]:"CINEON_TONE_MAPPING",[a_]:"ACES_FILMIC_TONE_MAPPING",[r_]:"AGX_TONE_MAPPING",[o_]:"NEUTRAL_TONE_MAPPING",[s_]:"CUSTOM_TONE_MAPPING"};function e1(r,t,i,s,l){const u=new Bi(t,i,{type:r,depthBuffer:s,stencilBuffer:l}),f=new Bi(t,i,{type:_a,depthBuffer:!1,stencilBuffer:!1}),d=new Xi;d.setAttribute("position",new gi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new gi([0,2,0,0,2,0],2));const m=new YM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Vi(d,m),v=new I_(-1,1,1,-1,0,1);let g=null,x=null,y=!1,b,C=null,M=[],S=!1;this.setSize=function(P,N){u.setSize(P,N),f.setSize(P,N);for(let U=0;U<M.length;U++){const F=M[U];F.setSize&&F.setSize(P,N)}},this.setEffects=function(P){M=P,S=M.length>0&&M[0].isRenderPass===!0;const N=u.width,U=u.height;for(let F=0;F<M.length;F++){const H=M[F];H.setSize&&H.setSize(N,U)}},this.begin=function(P,N){if(y||P.toneMapping===Fi&&M.length===0)return!1;if(C=N,N!==null){const U=N.width,F=N.height;(u.width!==U||u.height!==F)&&this.setSize(U,F)}return S===!1&&P.setRenderTarget(u),b=P.toneMapping,P.toneMapping=Fi,!0},this.hasRenderPass=function(){return S},this.end=function(P,N){P.toneMapping=b,y=!0;let U=u,F=f;for(let H=0;H<M.length;H++){const I=M[H];if(I.enabled!==!1&&(I.render(P,F,U,N),I.needsSwap!==!1)){const Q=U;U=F,F=Q}}if(g!==P.outputColorSpace||x!==P.toneMapping){g=P.outputColorSpace,x=P.toneMapping,m.defines={},be.getTransfer(g)===Be&&(m.defines.SRGB_TRANSFER="");const H=t1[x];H&&(m.defines[H]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=U.texture,P.setRenderTarget(C),P.render(p,v),C=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){u.dispose(),f.dispose(),d.dispose(),m.dispose()}}const B_=new In,Gd=new Jo(1,1),H_=new v_,G_=new Xy,V_=new b_,Pv=[],zv=[],Iv=new Float32Array(16),Fv=new Float32Array(9),Bv=new Float32Array(4);function Br(r,t,i){const s=r[0];if(s<=0||s>0)return r;const l=t*i;let u=Pv[l];if(u===void 0&&(u=new Float32Array(l),Pv[l]=u),t!==0){s.toArray(u,0);for(let f=1,d=0;f!==t;++f)d+=i,r[f].toArray(u,d)}return u}function mn(r,t){if(r.length!==t.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==t[i])return!1;return!0}function gn(r,t){for(let i=0,s=t.length;i<s;i++)r[i]=t[i]}function $u(r,t){let i=zv[t];i===void 0&&(i=new Int32Array(t),zv[t]=i);for(let s=0;s!==t;++s)i[s]=r.allocateTextureUnit();return i}function n1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1f(this.addr,t),i[0]=t)}function i1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2fv(this.addr,t),gn(i,t)}}function a1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(mn(i,t))return;r.uniform3fv(this.addr,t),gn(i,t)}}function s1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4fv(this.addr,t),gn(i,t)}}function r1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix2fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Bv.set(s),r.uniformMatrix2fv(this.addr,!1,Bv),gn(i,s)}}function o1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix3fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Fv.set(s),r.uniformMatrix3fv(this.addr,!1,Fv),gn(i,s)}}function l1(r,t){const i=this.cache,s=t.elements;if(s===void 0){if(mn(i,t))return;r.uniformMatrix4fv(this.addr,!1,t),gn(i,t)}else{if(mn(i,s))return;Iv.set(s),r.uniformMatrix4fv(this.addr,!1,Iv),gn(i,s)}}function u1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1i(this.addr,t),i[0]=t)}function c1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2iv(this.addr,t),gn(i,t)}}function f1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3iv(this.addr,t),gn(i,t)}}function h1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4iv(this.addr,t),gn(i,t)}}function d1(r,t){const i=this.cache;i[0]!==t&&(r.uniform1ui(this.addr,t),i[0]=t)}function p1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(mn(i,t))return;r.uniform2uiv(this.addr,t),gn(i,t)}}function m1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(mn(i,t))return;r.uniform3uiv(this.addr,t),gn(i,t)}}function g1(r,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(mn(i,t))return;r.uniform4uiv(this.addr,t),gn(i,t)}}function v1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let u;this.type===r.SAMPLER_2D_SHADOW?(Gd.compareFunction=i.isReversedDepthBuffer()?Jd:Qd,u=Gd):u=B_,i.setTexture2D(t||u,l)}function _1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(t||G_,l)}function x1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(t||V_,l)}function S1(r,t,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(t||H_,l)}function y1(r){switch(r){case 5126:return n1;case 35664:return i1;case 35665:return a1;case 35666:return s1;case 35674:return r1;case 35675:return o1;case 35676:return l1;case 5124:case 35670:return u1;case 35667:case 35671:return c1;case 35668:case 35672:return f1;case 35669:case 35673:return h1;case 5125:return d1;case 36294:return p1;case 36295:return m1;case 36296:return g1;case 35678:case 36198:case 36298:case 36306:case 35682:return v1;case 35679:case 36299:case 36307:return _1;case 35680:case 36300:case 36308:case 36293:return x1;case 36289:case 36303:case 36311:case 36292:return S1}}function M1(r,t){r.uniform1fv(this.addr,t)}function E1(r,t){const i=Br(t,this.size,2);r.uniform2fv(this.addr,i)}function b1(r,t){const i=Br(t,this.size,3);r.uniform3fv(this.addr,i)}function T1(r,t){const i=Br(t,this.size,4);r.uniform4fv(this.addr,i)}function A1(r,t){const i=Br(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function R1(r,t){const i=Br(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function C1(r,t){const i=Br(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function w1(r,t){r.uniform1iv(this.addr,t)}function D1(r,t){r.uniform2iv(this.addr,t)}function U1(r,t){r.uniform3iv(this.addr,t)}function N1(r,t){r.uniform4iv(this.addr,t)}function L1(r,t){r.uniform1uiv(this.addr,t)}function O1(r,t){r.uniform2uiv(this.addr,t)}function P1(r,t){r.uniform3uiv(this.addr,t)}function z1(r,t){r.uniform4uiv(this.addr,t)}function I1(r,t,i){const s=this.cache,l=t.length,u=$u(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));let f;this.type===r.SAMPLER_2D_SHADOW?f=Gd:f=B_;for(let d=0;d!==l;++d)i.setTexture2D(t[d]||f,u[d])}function F1(r,t,i){const s=this.cache,l=t.length,u=$u(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTexture3D(t[f]||G_,u[f])}function B1(r,t,i){const s=this.cache,l=t.length,u=$u(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTextureCube(t[f]||V_,u[f])}function H1(r,t,i){const s=this.cache,l=t.length,u=$u(i,l);mn(s,u)||(r.uniform1iv(this.addr,u),gn(s,u));for(let f=0;f!==l;++f)i.setTexture2DArray(t[f]||H_,u[f])}function G1(r){switch(r){case 5126:return M1;case 35664:return E1;case 35665:return b1;case 35666:return T1;case 35674:return A1;case 35675:return R1;case 35676:return C1;case 5124:case 35670:return w1;case 35667:case 35671:return D1;case 35668:case 35672:return U1;case 35669:case 35673:return N1;case 5125:return L1;case 36294:return O1;case 36295:return P1;case 36296:return z1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return F1;case 35680:case 36300:case 36308:case 36293:return B1;case 36289:case 36303:case 36311:case 36292:return H1}}class V1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.setValue=y1(i.type)}}class k1{constructor(t,i,s){this.id=t,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=G1(i.type)}}class X1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,s){const l=this.seq;for(let u=0,f=l.length;u!==f;++u){const d=l[u];d.setValue(t,i[d.id],s)}}}const kh=/(\w+)(\])?(\[|\.)?/g;function Hv(r,t){r.seq.push(t),r.map[t.id]=t}function W1(r,t,i){const s=r.name,l=s.length;for(kh.lastIndex=0;;){const u=kh.exec(s),f=kh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&f+2===l){Hv(i,p===void 0?new V1(d,r,t):new k1(d,r,t));break}else{let g=i.map[d];g===void 0&&(g=new X1(d),Hv(i,g)),i=g}}}class Wu{constructor(t,i){this.seq=[],this.map={};const s=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let f=0;f<s;++f){const d=t.getActiveUniform(i,f),m=t.getUniformLocation(i,d.name);W1(d,m,this)}const l=[],u=[];for(const f of this.seq)f.type===t.SAMPLER_2D_SHADOW||f.type===t.SAMPLER_CUBE_SHADOW||f.type===t.SAMPLER_2D_ARRAY_SHADOW?l.push(f):u.push(f);l.length>0&&(this.seq=l.concat(u))}setValue(t,i,s,l){const u=this.map[i];u!==void 0&&u.setValue(t,s,l)}setOptional(t,i,s){const l=i[s];l!==void 0&&this.setValue(t,s,l)}static upload(t,i,s,l){for(let u=0,f=i.length;u!==f;++u){const d=i[u],m=s[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const s=[];for(let l=0,u=t.length;l!==u;++l){const f=t[l];f.id in i&&s.push(f)}return s}}function Gv(r,t,i){const s=r.createShader(t);return r.shaderSource(s,i),r.compileShader(s),s}const q1=37297;let Y1=0;function j1(r,t){const i=r.split(`
`),s=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let f=l;f<u;f++){const d=f+1;s.push(`${d===t?">":" "} ${d}: ${i[f]}`)}return s.join(`
`)}const Vv=new he;function Z1(r){be._getMatrix(Vv,be.workingColorSpace,r);const t=`mat3( ${Vv.elements.map(i=>i.toFixed(4))} )`;switch(be.getTransfer(r)){case qu:return[t,"LinearTransferOETF"];case Be:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function kv(r,t,i){const s=r.getShaderParameter(t,r.COMPILE_STATUS),u=(r.getShaderInfoLog(t)||"").trim();if(s&&u==="")return"";const f=/ERROR: 0:(\d+)/.exec(u);if(f){const d=parseInt(f[1]);return i.toUpperCase()+`

`+u+`

`+j1(r.getShaderSource(t),d)}else return u}function K1(r,t){const i=Z1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const Q1={[e_]:"Linear",[n_]:"Reinhard",[i_]:"Cineon",[a_]:"ACESFilmic",[r_]:"AgX",[o_]:"Neutral",[s_]:"Custom"};function J1(r,t){const i=Q1[t];return i===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const Bu=new K;function $1(){be.getLuminanceCoefficients(Bu);const r=Bu.x.toFixed(4),t=Bu.y.toFixed(4),i=Bu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function tA(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function eA(r){const t=[];for(const i in r){const s=r[i];s!==!1&&t.push("#define "+i+" "+s)}return t.join(`
`)}function nA(r,t){const i={},s=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const u=r.getActiveAttrib(t,l),f=u.name;let d=1;u.type===r.FLOAT_MAT2&&(d=2),u.type===r.FLOAT_MAT3&&(d=3),u.type===r.FLOAT_MAT4&&(d=4),i[f]={type:u.type,location:r.getAttribLocation(t,f),locationSize:d}}return i}function Wo(r){return r!==""}function Xv(r,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wv(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const iA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vd(r){return r.replace(iA,sA)}const aA=new Map;function sA(r,t){let i=de[t];if(i===void 0){const s=aA.get(t);if(s!==void 0)i=de[s],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,s);else throw new Error("Can not resolve #include <"+t+">")}return Vd(i)}const rA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(r){return r.replace(rA,oA)}function oA(r,t,i,s){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Yv(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const lA={[Hu]:"SHADOWMAP_TYPE_PCF",[ko]:"SHADOWMAP_TYPE_VSM"};function uA(r){return lA[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const cA={[Us]:"ENVMAP_TYPE_CUBE",[Nr]:"ENVMAP_TYPE_CUBE",[Zu]:"ENVMAP_TYPE_CUBE_UV"};function fA(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":cA[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const hA={[Nr]:"ENVMAP_MODE_REFRACTION"};function dA(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":hA[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const pA={[t_]:"ENVMAP_BLENDING_MULTIPLY",[by]:"ENVMAP_BLENDING_MIX",[Ty]:"ENVMAP_BLENDING_ADD"};function mA(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":pA[r.combine]||"ENVMAP_BLENDING_NONE"}function gA(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,s=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function vA(r,t,i,s){const l=r.getContext(),u=i.defines;let f=i.vertexShader,d=i.fragmentShader;const m=uA(i),p=fA(i),v=dA(i),g=mA(i),x=gA(i),y=tA(i),b=eA(u),C=l.createProgram();let M,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),M.length>0&&(M+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b].filter(Wo).join(`
`),S.length>0&&(S+=`
`)):(M=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),S=[Yv(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,b,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+v:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Fi?"#define TONE_MAPPING":"",i.toneMapping!==Fi?de.tonemapping_pars_fragment:"",i.toneMapping!==Fi?J1("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",de.colorspace_pars_fragment,K1("linearToOutputTexel",i.outputColorSpace),$1(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Wo).join(`
`)),f=Vd(f),f=Xv(f,i),f=Wv(f,i),d=Vd(d),d=Xv(d,i),d=Wv(d,i),f=qv(f),d=qv(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,S=["#define varying in",i.glslVersion===tv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const N=P+M+f,U=P+S+d,F=Gv(l,l.VERTEX_SHADER,N),H=Gv(l,l.FRAGMENT_SHADER,U);l.attachShader(C,F),l.attachShader(C,H),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function I(k){if(r.debug.checkShaderErrors){const nt=l.getProgramInfoLog(C)||"",st=l.getShaderInfoLog(F)||"",mt=l.getShaderInfoLog(H)||"",ct=nt.trim(),z=st.trim(),O=mt.trim();let j=!0,dt=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(j=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,C,F,H);else{const ft=kv(l,F,"vertex"),D=kv(l,H,"fragment");Re("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+ct+`
`+ft+`
`+D)}else ct!==""?re("WebGLProgram: Program Info Log:",ct):(z===""||O==="")&&(dt=!1);dt&&(k.diagnostics={runnable:j,programLog:ct,vertexShader:{log:z,prefix:M},fragmentShader:{log:O,prefix:S}})}l.deleteShader(F),l.deleteShader(H),Q=new Wu(l,C),R=nA(l,C)}let Q;this.getUniforms=function(){return Q===void 0&&I(this),Q};let R;this.getAttributes=function(){return R===void 0&&I(this),R};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(C,q1)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=Y1++,this.cacheKey=t,this.usedTimes=1,this.program=C,this.vertexShader=F,this.fragmentShader=H,this}let _A=0;class xA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,s=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(s),f=this._getShaderCacheForMaterial(t);return f.has(l)===!1&&(f.add(l),l.usedTimes++),f.has(u)===!1&&(f.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let s=i.get(t);return s===void 0&&(s=new Set,i.set(t,s)),s}_getShaderStage(t){const i=this.shaderCache;let s=i.get(t);return s===void 0&&(s=new SA(t),i.set(t,s)),s}}class SA{constructor(t){this.id=_A++,this.code=t,this.usedTimes=0}}function yA(r,t,i,s,l,u,f){const d=new __,m=new xA,p=new Set,v=[],g=new Map,x=l.logarithmicDepthBuffer;let y=l.precision;const b={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(R){return p.add(R),R===0?"uv":`uv${R}`}function M(R,w,k,nt,st){const mt=nt.fog,ct=st.geometry,z=R.isMeshStandardMaterial?nt.environment:null,O=(R.isMeshStandardMaterial?i:t).get(R.envMap||z),j=O&&O.mapping===Zu?O.image.height:null,dt=b[R.type];R.precision!==null&&(y=l.getMaxPrecision(R.precision),y!==R.precision&&re("WebGLProgram.getParameters:",R.precision,"not supported, using",y,"instead."));const ft=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,D=ft!==void 0?ft.length:0;let J=0;ct.morphAttributes.position!==void 0&&(J=1),ct.morphAttributes.normal!==void 0&&(J=2),ct.morphAttributes.color!==void 0&&(J=3);let vt,At,Ft,et;if(dt){const Ee=Oi[dt];vt=Ee.vertexShader,At=Ee.fragmentShader}else vt=R.vertexShader,At=R.fragmentShader,m.update(R),Ft=m.getVertexShaderID(R),et=m.getFragmentShaderID(R);const lt=r.getRenderTarget(),wt=r.state.buffers.depth.getReversed(),Gt=st.isInstancedMesh===!0,Rt=st.isBatchedMesh===!0,pe=!!R.map,Ye=!!R.matcap,ie=!!O,me=!!R.aoMap,Ce=!!R.lightMap,le=!!R.bumpMap,$e=!!R.normalMap,G=!!R.displacementMap,je=!!R.emissiveMap,Me=!!R.metalnessMap,Ne=!!R.roughnessMap,Yt=R.anisotropy>0,L=R.clearcoat>0,E=R.dispersion>0,W=R.iridescence>0,pt=R.sheen>0,St=R.transmission>0,ut=Yt&&!!R.anisotropyMap,Zt=L&&!!R.clearcoatMap,Dt=L&&!!R.clearcoatNormalMap,Xt=L&&!!R.clearcoatRoughnessMap,ne=W&&!!R.iridescenceMap,Et=W&&!!R.iridescenceThicknessMap,bt=pt&&!!R.sheenColorMap,Bt=pt&&!!R.sheenRoughnessMap,zt=!!R.specularMap,Ut=!!R.specularColorMap,ce=!!R.specularIntensityMap,X=St&&!!R.transmissionMap,Lt=St&&!!R.thicknessMap,Tt=!!R.gradientMap,It=!!R.alphaMap,Mt=R.alphaTest>0,xt=!!R.alphaHash,Ct=!!R.extensions;let ae=Fi;R.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(ae=r.toneMapping);const Pe={shaderID:dt,shaderType:R.type,shaderName:R.name,vertexShader:vt,fragmentShader:At,defines:R.defines,customVertexShaderID:Ft,customFragmentShaderID:et,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:y,batching:Rt,batchingColor:Rt&&st._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&st.instanceColor!==null,instancingMorph:Gt&&st.morphTexture!==null,outputColorSpace:lt===null?r.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Or,alphaToCoverage:!!R.alphaToCoverage,map:pe,matcap:Ye,envMap:ie,envMapMode:ie&&O.mapping,envMapCubeUVHeight:j,aoMap:me,lightMap:Ce,bumpMap:le,normalMap:$e,displacementMap:G,emissiveMap:je,normalMapObjectSpace:$e&&R.normalMapType===wy,normalMapTangentSpace:$e&&R.normalMapType===Cy,metalnessMap:Me,roughnessMap:Ne,anisotropy:Yt,anisotropyMap:ut,clearcoat:L,clearcoatMap:Zt,clearcoatNormalMap:Dt,clearcoatRoughnessMap:Xt,dispersion:E,iridescence:W,iridescenceMap:ne,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:Bt,specularMap:zt,specularColorMap:Ut,specularIntensityMap:ce,transmission:St,transmissionMap:X,thicknessMap:Lt,gradientMap:Tt,opaque:R.transparent===!1&&R.blending===wr&&R.alphaToCoverage===!1,alphaMap:It,alphaTest:Mt,alphaHash:xt,combine:R.combine,mapUv:pe&&C(R.map.channel),aoMapUv:me&&C(R.aoMap.channel),lightMapUv:Ce&&C(R.lightMap.channel),bumpMapUv:le&&C(R.bumpMap.channel),normalMapUv:$e&&C(R.normalMap.channel),displacementMapUv:G&&C(R.displacementMap.channel),emissiveMapUv:je&&C(R.emissiveMap.channel),metalnessMapUv:Me&&C(R.metalnessMap.channel),roughnessMapUv:Ne&&C(R.roughnessMap.channel),anisotropyMapUv:ut&&C(R.anisotropyMap.channel),clearcoatMapUv:Zt&&C(R.clearcoatMap.channel),clearcoatNormalMapUv:Dt&&C(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xt&&C(R.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&C(R.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&C(R.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&C(R.sheenColorMap.channel),sheenRoughnessMapUv:Bt&&C(R.sheenRoughnessMap.channel),specularMapUv:zt&&C(R.specularMap.channel),specularColorMapUv:Ut&&C(R.specularColorMap.channel),specularIntensityMapUv:ce&&C(R.specularIntensityMap.channel),transmissionMapUv:X&&C(R.transmissionMap.channel),thicknessMapUv:Lt&&C(R.thicknessMap.channel),alphaMapUv:It&&C(R.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&($e||Yt),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:st.isPoints===!0&&!!ct.attributes.uv&&(pe||It),fog:!!mt,useFog:R.fog===!0,fogExp2:!!mt&&mt.isFogExp2,flatShading:R.flatShading===!0&&R.wireframe===!1,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:wt,skinning:st.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:D,morphTextureStride:J,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:f.numPlanes,numClipIntersection:f.numIntersection,dithering:R.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:ae,decodeVideoTexture:pe&&R.map.isVideoTexture===!0&&be.getTransfer(R.map.colorSpace)===Be,decodeVideoTextureEmissive:je&&R.emissiveMap.isVideoTexture===!0&&be.getTransfer(R.emissiveMap.colorSpace)===Be,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===Pi,flipSided:R.side===Wn,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:Ct&&R.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ct&&R.extensions.multiDraw===!0||Rt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return Pe.vertexUv1s=p.has(1),Pe.vertexUv2s=p.has(2),Pe.vertexUv3s=p.has(3),p.clear(),Pe}function S(R){const w=[];if(R.shaderID?w.push(R.shaderID):(w.push(R.customVertexShaderID),w.push(R.customFragmentShaderID)),R.defines!==void 0)for(const k in R.defines)w.push(k),w.push(R.defines[k]);return R.isRawShaderMaterial===!1&&(P(w,R),N(w,R),w.push(r.outputColorSpace)),w.push(R.customProgramCacheKey),w.join()}function P(R,w){R.push(w.precision),R.push(w.outputColorSpace),R.push(w.envMapMode),R.push(w.envMapCubeUVHeight),R.push(w.mapUv),R.push(w.alphaMapUv),R.push(w.lightMapUv),R.push(w.aoMapUv),R.push(w.bumpMapUv),R.push(w.normalMapUv),R.push(w.displacementMapUv),R.push(w.emissiveMapUv),R.push(w.metalnessMapUv),R.push(w.roughnessMapUv),R.push(w.anisotropyMapUv),R.push(w.clearcoatMapUv),R.push(w.clearcoatNormalMapUv),R.push(w.clearcoatRoughnessMapUv),R.push(w.iridescenceMapUv),R.push(w.iridescenceThicknessMapUv),R.push(w.sheenColorMapUv),R.push(w.sheenRoughnessMapUv),R.push(w.specularMapUv),R.push(w.specularColorMapUv),R.push(w.specularIntensityMapUv),R.push(w.transmissionMapUv),R.push(w.thicknessMapUv),R.push(w.combine),R.push(w.fogExp2),R.push(w.sizeAttenuation),R.push(w.morphTargetsCount),R.push(w.morphAttributeCount),R.push(w.numDirLights),R.push(w.numPointLights),R.push(w.numSpotLights),R.push(w.numSpotLightMaps),R.push(w.numHemiLights),R.push(w.numRectAreaLights),R.push(w.numDirLightShadows),R.push(w.numPointLightShadows),R.push(w.numSpotLightShadows),R.push(w.numSpotLightShadowsWithMaps),R.push(w.numLightProbes),R.push(w.shadowMapType),R.push(w.toneMapping),R.push(w.numClippingPlanes),R.push(w.numClipIntersection),R.push(w.depthPacking)}function N(R,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),R.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),R.push(d.mask)}function U(R){const w=b[R.type];let k;if(w){const nt=Oi[w];k=aM.clone(nt.uniforms)}else k=R.uniforms;return k}function F(R,w){let k=g.get(w);return k!==void 0?++k.usedTimes:(k=new vA(r,w,R,u),v.push(k),g.set(w,k)),k}function H(R){if(--R.usedTimes===0){const w=v.indexOf(R);v[w]=v[v.length-1],v.pop(),g.delete(R.cacheKey),R.destroy()}}function I(R){m.remove(R)}function Q(){m.dispose()}return{getParameters:M,getProgramCacheKey:S,getUniforms:U,acquireProgram:F,releaseProgram:H,releaseShaderCache:I,programs:v,dispose:Q}}function MA(){let r=new WeakMap;function t(f){return r.has(f)}function i(f){let d=r.get(f);return d===void 0&&(d={},r.set(f,d)),d}function s(f){r.delete(f)}function l(f,d,m){r.get(f)[d]=m}function u(){r=new WeakMap}return{has:t,get:i,remove:s,update:l,dispose:u}}function EA(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function jv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Zv(){const r=[];let t=0;const i=[],s=[],l=[];function u(){t=0,i.length=0,s.length=0,l.length=0}function f(g,x,y,b,C,M){let S=r[t];return S===void 0?(S={id:g.id,object:g,geometry:x,material:y,groupOrder:b,renderOrder:g.renderOrder,z:C,group:M},r[t]=S):(S.id=g.id,S.object=g,S.geometry=x,S.material=y,S.groupOrder=b,S.renderOrder=g.renderOrder,S.z=C,S.group=M),t++,S}function d(g,x,y,b,C,M){const S=f(g,x,y,b,C,M);y.transmission>0?s.push(S):y.transparent===!0?l.push(S):i.push(S)}function m(g,x,y,b,C,M){const S=f(g,x,y,b,C,M);y.transmission>0?s.unshift(S):y.transparent===!0?l.unshift(S):i.unshift(S)}function p(g,x){i.length>1&&i.sort(g||EA),s.length>1&&s.sort(x||jv),l.length>1&&l.sort(x||jv)}function v(){for(let g=t,x=r.length;g<x;g++){const y=r[g];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:u,push:d,unshift:m,finish:v,sort:p}}function bA(){let r=new WeakMap;function t(s,l){const u=r.get(s);let f;return u===void 0?(f=new Zv,r.set(s,[f])):l>=u.length?(f=new Zv,u.push(f)):f=u[l],f}function i(){r=new WeakMap}return{get:t,dispose:i}}function TA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new K,color:new Oe};break;case"SpotLight":i={position:new K,direction:new K,color:new Oe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new K,color:new Oe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new K,skyColor:new Oe,groundColor:new Oe};break;case"RectAreaLight":i={color:new Oe,position:new K,halfWidth:new K,halfHeight:new K};break}return r[t.id]=i,i}}}function AA(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=i,i}}}let RA=0;function CA(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function wA(r){const t=new TA,i=AA(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new K);const l=new K,u=new Je,f=new Je;function d(p){let v=0,g=0,x=0;for(let R=0;R<9;R++)s.probe[R].set(0,0,0);let y=0,b=0,C=0,M=0,S=0,P=0,N=0,U=0,F=0,H=0,I=0;p.sort(CA);for(let R=0,w=p.length;R<w;R++){const k=p[R],nt=k.color,st=k.intensity,mt=k.distance;let ct=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Lr?ct=k.shadow.map.texture:ct=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)v+=nt.r*st,g+=nt.g*st,x+=nt.b*st;else if(k.isLightProbe){for(let z=0;z<9;z++)s.probe[z].addScaledVector(k.sh.coefficients[z],st);I++}else if(k.isDirectionalLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const O=k.shadow,j=i.get(k);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,s.directionalShadow[y]=j,s.directionalShadowMap[y]=ct,s.directionalShadowMatrix[y]=k.shadow.matrix,P++}s.directional[y]=z,y++}else if(k.isSpotLight){const z=t.get(k);z.position.setFromMatrixPosition(k.matrixWorld),z.color.copy(nt).multiplyScalar(st),z.distance=mt,z.coneCos=Math.cos(k.angle),z.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),z.decay=k.decay,s.spot[C]=z;const O=k.shadow;if(k.map&&(s.spotLightMap[F]=k.map,F++,O.updateMatrices(k),k.castShadow&&H++),s.spotLightMatrix[C]=O.matrix,k.castShadow){const j=i.get(k);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,s.spotShadow[C]=j,s.spotShadowMap[C]=ct,U++}C++}else if(k.isRectAreaLight){const z=t.get(k);z.color.copy(nt).multiplyScalar(st),z.halfWidth.set(k.width*.5,0,0),z.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=z,M++}else if(k.isPointLight){const z=t.get(k);if(z.color.copy(k.color).multiplyScalar(k.intensity),z.distance=k.distance,z.decay=k.decay,k.castShadow){const O=k.shadow,j=i.get(k);j.shadowIntensity=O.intensity,j.shadowBias=O.bias,j.shadowNormalBias=O.normalBias,j.shadowRadius=O.radius,j.shadowMapSize=O.mapSize,j.shadowCameraNear=O.camera.near,j.shadowCameraFar=O.camera.far,s.pointShadow[b]=j,s.pointShadowMap[b]=ct,s.pointShadowMatrix[b]=k.shadow.matrix,N++}s.point[b]=z,b++}else if(k.isHemisphereLight){const z=t.get(k);z.skyColor.copy(k.color).multiplyScalar(st),z.groundColor.copy(k.groundColor).multiplyScalar(st),s.hemi[S]=z,S++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pt.LTC_FLOAT_1,s.rectAreaLTC2=Pt.LTC_FLOAT_2):(s.rectAreaLTC1=Pt.LTC_HALF_1,s.rectAreaLTC2=Pt.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=g,s.ambient[2]=x;const Q=s.hash;(Q.directionalLength!==y||Q.pointLength!==b||Q.spotLength!==C||Q.rectAreaLength!==M||Q.hemiLength!==S||Q.numDirectionalShadows!==P||Q.numPointShadows!==N||Q.numSpotShadows!==U||Q.numSpotMaps!==F||Q.numLightProbes!==I)&&(s.directional.length=y,s.spot.length=C,s.rectArea.length=M,s.point.length=b,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=N,s.pointShadowMap.length=N,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=N,s.spotLightMatrix.length=U+F-H,s.spotLightMap.length=F,s.numSpotLightShadowsWithMaps=H,s.numLightProbes=I,Q.directionalLength=y,Q.pointLength=b,Q.spotLength=C,Q.rectAreaLength=M,Q.hemiLength=S,Q.numDirectionalShadows=P,Q.numPointShadows=N,Q.numSpotShadows=U,Q.numSpotMaps=F,Q.numLightProbes=I,s.version=RA++)}function m(p,v){let g=0,x=0,y=0,b=0,C=0;const M=v.matrixWorldInverse;for(let S=0,P=p.length;S<P;S++){const N=p[S];if(N.isDirectionalLight){const U=s.directional[g];U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),g++}else if(N.isSpotLight){const U=s.spot[y];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),U.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(M),y++}else if(N.isRectAreaLight){const U=s.rectArea[b];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),f.identity(),u.copy(N.matrixWorld),u.premultiply(M),f.extractRotation(u),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),U.halfWidth.applyMatrix4(f),U.halfHeight.applyMatrix4(f),b++}else if(N.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(N.matrixWorld),U.position.applyMatrix4(M),x++}else if(N.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(N.matrixWorld),U.direction.transformDirection(M),C++}}}return{setup:d,setupView:m,state:s}}function Kv(r){const t=new wA(r),i=[],s=[];function l(v){p.camera=v,i.length=0,s.length=0}function u(v){i.push(v)}function f(v){s.push(v)}function d(){t.setup(i)}function m(v){t.setupView(i,v)}const p={lightsArray:i,shadowsArray:s,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:f}}function DA(r){let t=new WeakMap;function i(l,u=0){const f=t.get(l);let d;return f===void 0?(d=new Kv(r),t.set(l,[d])):u>=f.length?(d=new Kv(r),f.push(d)):d=f[u],d}function s(){t=new WeakMap}return{get:i,dispose:s}}const UA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,NA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,LA=[new K(1,0,0),new K(-1,0,0),new K(0,1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1)],OA=[new K(0,-1,0),new K(0,-1,0),new K(0,0,1),new K(0,0,-1),new K(0,-1,0),new K(0,-1,0)],Qv=new Je,Go=new K,Xh=new K;function PA(r,t,i){let s=new np;const l=new Qt,u=new Qt,f=new nn,d=new jM,m=new ZM,p={},v=i.maxTextureSize,g={[es]:Wn,[Wn]:es,[Pi]:Pi},x=new ki({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:UA,fragmentShader:NA}),y=x.clone();y.defines.HORIZONTAL_PASS=1;const b=new Xi;b.setAttribute("position",new Hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Vi(b,x),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hu;let S=this.type;this.render=function(H,I,Q){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||H.length===0)return;H.type===sy&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),H.type=Hu);const R=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),nt=r.state;nt.setBlending(ga),nt.buffers.depth.getReversed()===!0?nt.buffers.color.setClear(0,0,0,0):nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const st=S!==this.type;st&&I.traverse(function(mt){mt.material&&(Array.isArray(mt.material)?mt.material.forEach(ct=>ct.needsUpdate=!0):mt.material.needsUpdate=!0)});for(let mt=0,ct=H.length;mt<ct;mt++){const z=H[mt],O=z.shadow;if(O===void 0){re("WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const j=O.getFrameExtents();if(l.multiply(j),u.copy(O.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(u.x=Math.floor(v/j.x),l.x=u.x*j.x,O.mapSize.x=u.x),l.y>v&&(u.y=Math.floor(v/j.y),l.y=u.y*j.y,O.mapSize.y=u.y)),O.map===null||st===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ko){if(z.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Bi(l.x,l.y,{format:Lr,type:_a,minFilter:On,magFilter:On,generateMipmaps:!1}),O.map.texture.name=z.name+".shadowMap",O.map.depthTexture=new Jo(l.x,l.y,zi),O.map.depthTexture.name=z.name+".shadowMapDepth",O.map.depthTexture.format=xa,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn}else{z.isPointLight?(O.map=new T_(l.x),O.map.depthTexture=new pM(l.x,Gi)):(O.map=new Bi(l.x,l.y),O.map.depthTexture=new Jo(l.x,l.y,Gi)),O.map.depthTexture.name=z.name+".shadowMap",O.map.depthTexture.format=xa;const ft=r.state.buffers.depth.getReversed();this.type===Hu?(O.map.depthTexture.compareFunction=ft?Jd:Qd,O.map.depthTexture.minFilter=On,O.map.depthTexture.magFilter=On):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=wn,O.map.depthTexture.magFilter=wn)}O.camera.updateProjectionMatrix()}const dt=O.map.isWebGLCubeRenderTarget?6:1;for(let ft=0;ft<dt;ft++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,ft),r.clear();else{ft===0&&(r.setRenderTarget(O.map),r.clear());const D=O.getViewport(ft);f.set(u.x*D.x,u.y*D.y,u.x*D.z,u.y*D.w),nt.viewport(f)}if(z.isPointLight){const D=O.camera,J=O.matrix,vt=z.distance||D.far;vt!==D.far&&(D.far=vt,D.updateProjectionMatrix()),Go.setFromMatrixPosition(z.matrixWorld),D.position.copy(Go),Xh.copy(D.position),Xh.add(LA[ft]),D.up.copy(OA[ft]),D.lookAt(Xh),D.updateMatrixWorld(),J.makeTranslation(-Go.x,-Go.y,-Go.z),Qv.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Qv,D.coordinateSystem,D.reversedDepth)}else O.updateMatrices(z);s=O.getFrustum(),U(I,Q,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===ko&&P(O,Q),O.needsUpdate=!1}S=this.type,M.needsUpdate=!1,r.setRenderTarget(R,w,k)};function P(H,I){const Q=t.update(C);x.defines.VSM_SAMPLES!==H.blurSamples&&(x.defines.VSM_SAMPLES=H.blurSamples,y.defines.VSM_SAMPLES=H.blurSamples,x.needsUpdate=!0,y.needsUpdate=!0),H.mapPass===null&&(H.mapPass=new Bi(l.x,l.y,{format:Lr,type:_a})),x.uniforms.shadow_pass.value=H.map.depthTexture,x.uniforms.resolution.value=H.mapSize,x.uniforms.radius.value=H.radius,r.setRenderTarget(H.mapPass),r.clear(),r.renderBufferDirect(I,null,Q,x,C,null),y.uniforms.shadow_pass.value=H.mapPass.texture,y.uniforms.resolution.value=H.mapSize,y.uniforms.radius.value=H.radius,r.setRenderTarget(H.map),r.clear(),r.renderBufferDirect(I,null,Q,y,C,null)}function N(H,I,Q,R){let w=null;const k=Q.isPointLight===!0?H.customDistanceMaterial:H.customDepthMaterial;if(k!==void 0)w=k;else if(w=Q.isPointLight===!0?m:d,r.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const nt=w.uuid,st=I.uuid;let mt=p[nt];mt===void 0&&(mt={},p[nt]=mt);let ct=mt[st];ct===void 0&&(ct=w.clone(),mt[st]=ct,I.addEventListener("dispose",F)),w=ct}if(w.visible=I.visible,w.wireframe=I.wireframe,R===ko?w.side=I.shadowSide!==null?I.shadowSide:I.side:w.side=I.shadowSide!==null?I.shadowSide:g[I.side],w.alphaMap=I.alphaMap,w.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,w.map=I.map,w.clipShadows=I.clipShadows,w.clippingPlanes=I.clippingPlanes,w.clipIntersection=I.clipIntersection,w.displacementMap=I.displacementMap,w.displacementScale=I.displacementScale,w.displacementBias=I.displacementBias,w.wireframeLinewidth=I.wireframeLinewidth,w.linewidth=I.linewidth,Q.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const nt=r.properties.get(w);nt.light=Q}return w}function U(H,I,Q,R,w){if(H.visible===!1)return;if(H.layers.test(I.layers)&&(H.isMesh||H.isLine||H.isPoints)&&(H.castShadow||H.receiveShadow&&w===ko)&&(!H.frustumCulled||s.intersectsObject(H))){H.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,H.matrixWorld);const st=t.update(H),mt=H.material;if(Array.isArray(mt)){const ct=st.groups;for(let z=0,O=ct.length;z<O;z++){const j=ct[z],dt=mt[j.materialIndex];if(dt&&dt.visible){const ft=N(H,dt,R,w);H.onBeforeShadow(r,H,I,Q,st,ft,j),r.renderBufferDirect(Q,null,st,ft,H,j),H.onAfterShadow(r,H,I,Q,st,ft,j)}}}else if(mt.visible){const ct=N(H,mt,R,w);H.onBeforeShadow(r,H,I,Q,st,ct,null),r.renderBufferDirect(Q,null,st,ct,H,null),H.onAfterShadow(r,H,I,Q,st,ct,null)}}const nt=H.children;for(let st=0,mt=nt.length;st<mt;st++)U(nt[st],I,Q,R,w)}function F(H){H.target.removeEventListener("dispose",F);for(const Q in p){const R=p[Q],w=H.target.uuid;w in R&&(R[w].dispose(),delete R[w])}}}const zA={[Zh]:Kh,[Qh]:td,[Jh]:ed,[Ur]:$h,[Kh]:Zh,[td]:Qh,[ed]:Jh,[$h]:Ur};function IA(r,t){function i(){let X=!1;const Lt=new nn;let Tt=null;const It=new nn(0,0,0,0);return{setMask:function(Mt){Tt!==Mt&&!X&&(r.colorMask(Mt,Mt,Mt,Mt),Tt=Mt)},setLocked:function(Mt){X=Mt},setClear:function(Mt,xt,Ct,ae,Pe){Pe===!0&&(Mt*=ae,xt*=ae,Ct*=ae),Lt.set(Mt,xt,Ct,ae),It.equals(Lt)===!1&&(r.clearColor(Mt,xt,Ct,ae),It.copy(Lt))},reset:function(){X=!1,Tt=null,It.set(-1,0,0,0)}}}function s(){let X=!1,Lt=!1,Tt=null,It=null,Mt=null;return{setReversed:function(xt){if(Lt!==xt){const Ct=t.get("EXT_clip_control");xt?Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.ZERO_TO_ONE_EXT):Ct.clipControlEXT(Ct.LOWER_LEFT_EXT,Ct.NEGATIVE_ONE_TO_ONE_EXT),Lt=xt;const ae=Mt;Mt=null,this.setClear(ae)}},getReversed:function(){return Lt},setTest:function(xt){xt?lt(r.DEPTH_TEST):wt(r.DEPTH_TEST)},setMask:function(xt){Tt!==xt&&!X&&(r.depthMask(xt),Tt=xt)},setFunc:function(xt){if(Lt&&(xt=zA[xt]),It!==xt){switch(xt){case Zh:r.depthFunc(r.NEVER);break;case Kh:r.depthFunc(r.ALWAYS);break;case Qh:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case Jh:r.depthFunc(r.EQUAL);break;case $h:r.depthFunc(r.GEQUAL);break;case td:r.depthFunc(r.GREATER);break;case ed:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}It=xt}},setLocked:function(xt){X=xt},setClear:function(xt){Mt!==xt&&(Lt&&(xt=1-xt),r.clearDepth(xt),Mt=xt)},reset:function(){X=!1,Tt=null,It=null,Mt=null,Lt=!1}}}function l(){let X=!1,Lt=null,Tt=null,It=null,Mt=null,xt=null,Ct=null,ae=null,Pe=null;return{setTest:function(Ee){X||(Ee?lt(r.STENCIL_TEST):wt(r.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!X&&(r.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,Dn,vi){(Tt!==Ee||It!==Dn||Mt!==vi)&&(r.stencilFunc(Ee,Dn,vi),Tt=Ee,It=Dn,Mt=vi)},setOp:function(Ee,Dn,vi){(xt!==Ee||Ct!==Dn||ae!==vi)&&(r.stencilOp(Ee,Dn,vi),xt=Ee,Ct=Dn,ae=vi)},setLocked:function(Ee){X=Ee},setClear:function(Ee){Pe!==Ee&&(r.clearStencil(Ee),Pe=Ee)},reset:function(){X=!1,Lt=null,Tt=null,It=null,Mt=null,xt=null,Ct=null,ae=null,Pe=null}}}const u=new i,f=new s,d=new l,m=new WeakMap,p=new WeakMap;let v={},g={},x=new WeakMap,y=[],b=null,C=!1,M=null,S=null,P=null,N=null,U=null,F=null,H=null,I=new Oe(0,0,0),Q=0,R=!1,w=null,k=null,nt=null,st=null,mt=null;const ct=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,O=0;const j=r.getParameter(r.VERSION);j.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(j)[1]),z=O>=1):j.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),z=O>=2);let dt=null,ft={};const D=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),vt=new nn().fromArray(D),At=new nn().fromArray(J);function Ft(X,Lt,Tt,It){const Mt=new Uint8Array(4),xt=r.createTexture();r.bindTexture(X,xt),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ct=0;Ct<Tt;Ct++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,It,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Lt+Ct,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return xt}const et={};et[r.TEXTURE_2D]=Ft(r.TEXTURE_2D,r.TEXTURE_2D,1),et[r.TEXTURE_CUBE_MAP]=Ft(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),et[r.TEXTURE_2D_ARRAY]=Ft(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),et[r.TEXTURE_3D]=Ft(r.TEXTURE_3D,r.TEXTURE_3D,1,1),u.setClear(0,0,0,1),f.setClear(1),d.setClear(0),lt(r.DEPTH_TEST),f.setFunc(Ur),le(!1),$e(jg),lt(r.CULL_FACE),me(ga);function lt(X){v[X]!==!0&&(r.enable(X),v[X]=!0)}function wt(X){v[X]!==!1&&(r.disable(X),v[X]=!1)}function Gt(X,Lt){return g[X]!==Lt?(r.bindFramebuffer(X,Lt),g[X]=Lt,X===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Lt),X===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Rt(X,Lt){let Tt=y,It=!1;if(X){Tt=x.get(Lt),Tt===void 0&&(Tt=[],x.set(Lt,Tt));const Mt=X.textures;if(Tt.length!==Mt.length||Tt[0]!==r.COLOR_ATTACHMENT0){for(let xt=0,Ct=Mt.length;xt<Ct;xt++)Tt[xt]=r.COLOR_ATTACHMENT0+xt;Tt.length=Mt.length,It=!0}}else Tt[0]!==r.BACK&&(Tt[0]=r.BACK,It=!0);It&&r.drawBuffers(Tt)}function pe(X){return b!==X?(r.useProgram(X),b=X,!0):!1}const Ye={[Rs]:r.FUNC_ADD,[oy]:r.FUNC_SUBTRACT,[ly]:r.FUNC_REVERSE_SUBTRACT};Ye[uy]=r.MIN,Ye[cy]=r.MAX;const ie={[fy]:r.ZERO,[hy]:r.ONE,[dy]:r.SRC_COLOR,[Yh]:r.SRC_ALPHA,[xy]:r.SRC_ALPHA_SATURATE,[vy]:r.DST_COLOR,[my]:r.DST_ALPHA,[py]:r.ONE_MINUS_SRC_COLOR,[jh]:r.ONE_MINUS_SRC_ALPHA,[_y]:r.ONE_MINUS_DST_COLOR,[gy]:r.ONE_MINUS_DST_ALPHA,[Sy]:r.CONSTANT_COLOR,[yy]:r.ONE_MINUS_CONSTANT_COLOR,[My]:r.CONSTANT_ALPHA,[Ey]:r.ONE_MINUS_CONSTANT_ALPHA};function me(X,Lt,Tt,It,Mt,xt,Ct,ae,Pe,Ee){if(X===ga){C===!0&&(wt(r.BLEND),C=!1);return}if(C===!1&&(lt(r.BLEND),C=!0),X!==ry){if(X!==M||Ee!==R){if((S!==Rs||U!==Rs)&&(r.blendEquation(r.FUNC_ADD),S=Rs,U=Rs),Ee)switch(X){case wr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zg:r.blendFunc(r.ONE,r.ONE);break;case Kg:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Qg:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Re("WebGLState: Invalid blending: ",X);break}else switch(X){case wr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zg:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kg:Re("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qg:Re("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Re("WebGLState: Invalid blending: ",X);break}P=null,N=null,F=null,H=null,I.set(0,0,0),Q=0,M=X,R=Ee}return}Mt=Mt||Lt,xt=xt||Tt,Ct=Ct||It,(Lt!==S||Mt!==U)&&(r.blendEquationSeparate(Ye[Lt],Ye[Mt]),S=Lt,U=Mt),(Tt!==P||It!==N||xt!==F||Ct!==H)&&(r.blendFuncSeparate(ie[Tt],ie[It],ie[xt],ie[Ct]),P=Tt,N=It,F=xt,H=Ct),(ae.equals(I)===!1||Pe!==Q)&&(r.blendColor(ae.r,ae.g,ae.b,Pe),I.copy(ae),Q=Pe),M=X,R=!1}function Ce(X,Lt){X.side===Pi?wt(r.CULL_FACE):lt(r.CULL_FACE);let Tt=X.side===Wn;Lt&&(Tt=!Tt),le(Tt),X.blending===wr&&X.transparent===!1?me(ga):me(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),f.setFunc(X.depthFunc),f.setTest(X.depthTest),f.setMask(X.depthWrite),u.setMask(X.colorWrite);const It=X.stencilWrite;d.setTest(It),It&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),je(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?lt(r.SAMPLE_ALPHA_TO_COVERAGE):wt(r.SAMPLE_ALPHA_TO_COVERAGE)}function le(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function $e(X){X!==iy?(lt(r.CULL_FACE),X!==k&&(X===jg?r.cullFace(r.BACK):X===ay?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):wt(r.CULL_FACE),k=X}function G(X){X!==nt&&(z&&r.lineWidth(X),nt=X)}function je(X,Lt,Tt){X?(lt(r.POLYGON_OFFSET_FILL),(st!==Lt||mt!==Tt)&&(r.polygonOffset(Lt,Tt),st=Lt,mt=Tt)):wt(r.POLYGON_OFFSET_FILL)}function Me(X){X?lt(r.SCISSOR_TEST):wt(r.SCISSOR_TEST)}function Ne(X){X===void 0&&(X=r.TEXTURE0+ct-1),dt!==X&&(r.activeTexture(X),dt=X)}function Yt(X,Lt,Tt){Tt===void 0&&(dt===null?Tt=r.TEXTURE0+ct-1:Tt=dt);let It=ft[Tt];It===void 0&&(It={type:void 0,texture:void 0},ft[Tt]=It),(It.type!==X||It.texture!==Lt)&&(dt!==Tt&&(r.activeTexture(Tt),dt=Tt),r.bindTexture(X,Lt||et[X]),It.type=X,It.texture=Lt)}function L(){const X=ft[dt];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function pt(){try{r.texSubImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function St(){try{r.texSubImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function ut(){try{r.compressedTexSubImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function Dt(){try{r.texStorage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function Xt(){try{r.texStorage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function ne(){try{r.texImage2D(...arguments)}catch(X){Re("WebGLState:",X)}}function Et(){try{r.texImage3D(...arguments)}catch(X){Re("WebGLState:",X)}}function bt(X){vt.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),vt.copy(X))}function Bt(X){At.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),At.copy(X))}function zt(X,Lt){let Tt=p.get(Lt);Tt===void 0&&(Tt=new WeakMap,p.set(Lt,Tt));let It=Tt.get(X);It===void 0&&(It=r.getUniformBlockIndex(Lt,X.name),Tt.set(X,It))}function Ut(X,Lt){const It=p.get(Lt).get(X);m.get(Lt)!==It&&(r.uniformBlockBinding(Lt,It,X.__bindingPointIndex),m.set(Lt,It))}function ce(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),f.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),v={},dt=null,ft={},g={},x=new WeakMap,y=[],b=null,C=!1,M=null,S=null,P=null,N=null,U=null,F=null,H=null,I=new Oe(0,0,0),Q=0,R=!1,w=null,k=null,nt=null,st=null,mt=null,vt.set(0,0,r.canvas.width,r.canvas.height),At.set(0,0,r.canvas.width,r.canvas.height),u.reset(),f.reset(),d.reset()}return{buffers:{color:u,depth:f,stencil:d},enable:lt,disable:wt,bindFramebuffer:Gt,drawBuffers:Rt,useProgram:pe,setBlending:me,setMaterial:Ce,setFlipSided:le,setCullFace:$e,setLineWidth:G,setPolygonOffset:je,setScissorTest:Me,activeTexture:Ne,bindTexture:Yt,unbindTexture:L,compressedTexImage2D:E,compressedTexImage3D:W,texImage2D:ne,texImage3D:Et,updateUBOMapping:zt,uniformBlockBinding:Ut,texStorage2D:Dt,texStorage3D:Xt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ut,compressedTexSubImage3D:Zt,scissor:bt,viewport:Bt,reset:ce}}function FA(r,t,i,s,l,u,f){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Qt,v=new WeakMap;let g;const x=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(L,E){return y?new OffscreenCanvas(L,E):ju("canvas")}function C(L,E,W){let pt=1;const St=Yt(L);if((St.width>W||St.height>W)&&(pt=W/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const ut=Math.floor(pt*St.width),Zt=Math.floor(pt*St.height);g===void 0&&(g=b(ut,Zt));const Dt=E?b(ut,Zt):g;return Dt.width=ut,Dt.height=Zt,Dt.getContext("2d").drawImage(L,0,0,ut,Zt),re("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ut+"x"+Zt+")."),Dt}else return"data"in L&&re("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function M(L){return L.generateMipmaps}function S(L){r.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?r.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function N(L,E,W,pt,St=!1){if(L!==null){if(r[L]!==void 0)return r[L];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let ut=E;if(E===r.RED&&(W===r.FLOAT&&(ut=r.R32F),W===r.HALF_FLOAT&&(ut=r.R16F),W===r.UNSIGNED_BYTE&&(ut=r.R8)),E===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.R8UI),W===r.UNSIGNED_SHORT&&(ut=r.R16UI),W===r.UNSIGNED_INT&&(ut=r.R32UI),W===r.BYTE&&(ut=r.R8I),W===r.SHORT&&(ut=r.R16I),W===r.INT&&(ut=r.R32I)),E===r.RG&&(W===r.FLOAT&&(ut=r.RG32F),W===r.HALF_FLOAT&&(ut=r.RG16F),W===r.UNSIGNED_BYTE&&(ut=r.RG8)),E===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RG8UI),W===r.UNSIGNED_SHORT&&(ut=r.RG16UI),W===r.UNSIGNED_INT&&(ut=r.RG32UI),W===r.BYTE&&(ut=r.RG8I),W===r.SHORT&&(ut=r.RG16I),W===r.INT&&(ut=r.RG32I)),E===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGB16UI),W===r.UNSIGNED_INT&&(ut=r.RGB32UI),W===r.BYTE&&(ut=r.RGB8I),W===r.SHORT&&(ut=r.RGB16I),W===r.INT&&(ut=r.RGB32I)),E===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ut=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ut=r.RGBA16UI),W===r.UNSIGNED_INT&&(ut=r.RGBA32UI),W===r.BYTE&&(ut=r.RGBA8I),W===r.SHORT&&(ut=r.RGBA16I),W===r.INT&&(ut=r.RGBA32I)),E===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ut=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ut=r.R11F_G11F_B10F)),E===r.RGBA){const Zt=St?qu:be.getTransfer(pt);W===r.FLOAT&&(ut=r.RGBA32F),W===r.HALF_FLOAT&&(ut=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ut=Zt===Be?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ut=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ut=r.RGB5_A1)}return(ut===r.R16F||ut===r.R32F||ut===r.RG16F||ut===r.RG32F||ut===r.RGBA16F||ut===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ut}function U(L,E){let W;return L?E===null||E===Gi||E===Ko?W=r.DEPTH24_STENCIL8:E===zi?W=r.DEPTH32F_STENCIL8:E===Zo&&(W=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Gi||E===Ko?W=r.DEPTH_COMPONENT24:E===zi?W=r.DEPTH_COMPONENT32F:E===Zo&&(W=r.DEPTH_COMPONENT16),W}function F(L,E){return M(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function H(L){const E=L.target;E.removeEventListener("dispose",H),Q(E),E.isVideoTexture&&v.delete(E)}function I(L){const E=L.target;E.removeEventListener("dispose",I),w(E)}function Q(L){const E=s.get(L);if(E.__webglInit===void 0)return;const W=L.source,pt=x.get(W);if(pt){const St=pt[E.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(L),Object.keys(pt).length===0&&x.delete(W)}s.remove(L)}function R(L){const E=s.get(L);r.deleteTexture(E.__webglTexture);const W=L.source,pt=x.get(W);delete pt[E.__cacheKey],f.memory.textures--}function w(L){const E=s.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),s.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(E.__webglFramebuffer[pt]))for(let St=0;St<E.__webglFramebuffer[pt].length;St++)r.deleteFramebuffer(E.__webglFramebuffer[pt][St]);else r.deleteFramebuffer(E.__webglFramebuffer[pt]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[pt])}else{if(Array.isArray(E.__webglFramebuffer))for(let pt=0;pt<E.__webglFramebuffer.length;pt++)r.deleteFramebuffer(E.__webglFramebuffer[pt]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let pt=0;pt<E.__webglColorRenderbuffer.length;pt++)E.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[pt]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const W=L.textures;for(let pt=0,St=W.length;pt<St;pt++){const ut=s.get(W[pt]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),f.memory.textures--),s.remove(W[pt])}s.remove(L)}let k=0;function nt(){k=0}function st(){const L=k;return L>=l.maxTextures&&re("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),k+=1,L}function mt(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function ct(L,E){const W=s.get(L);if(L.isVideoTexture&&Me(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&W.__version!==L.version){const pt=L.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{et(W,L,E);return}}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+E)}function z(L,E){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){et(W,L,E);return}else L.isExternalTexture&&(W.__webglTexture=L.sourceTexture?L.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+E)}function O(L,E){const W=s.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&W.__version!==L.version){et(W,L,E);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+E)}function j(L,E){const W=s.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&W.__version!==L.version){lt(W,L,E);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+E)}const dt={[ad]:r.REPEAT,[ma]:r.CLAMP_TO_EDGE,[sd]:r.MIRRORED_REPEAT},ft={[wn]:r.NEAREST,[Ay]:r.NEAREST_MIPMAP_NEAREST,[gu]:r.NEAREST_MIPMAP_LINEAR,[On]:r.LINEAR,[ch]:r.LINEAR_MIPMAP_NEAREST,[ws]:r.LINEAR_MIPMAP_LINEAR},D={[Dy]:r.NEVER,[Py]:r.ALWAYS,[Uy]:r.LESS,[Qd]:r.LEQUAL,[Ny]:r.EQUAL,[Jd]:r.GEQUAL,[Ly]:r.GREATER,[Oy]:r.NOTEQUAL};function J(L,E){if(E.type===zi&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===ch||E.magFilter===gu||E.magFilter===ws||E.minFilter===On||E.minFilter===ch||E.minFilter===gu||E.minFilter===ws)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(L,r.TEXTURE_WRAP_S,dt[E.wrapS]),r.texParameteri(L,r.TEXTURE_WRAP_T,dt[E.wrapT]),(L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY)&&r.texParameteri(L,r.TEXTURE_WRAP_R,dt[E.wrapR]),r.texParameteri(L,r.TEXTURE_MAG_FILTER,ft[E.magFilter]),r.texParameteri(L,r.TEXTURE_MIN_FILTER,ft[E.minFilter]),E.compareFunction&&(r.texParameteri(L,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(L,r.TEXTURE_COMPARE_FUNC,D[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==gu&&E.minFilter!==ws||E.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const W=t.get("EXT_texture_filter_anisotropic");r.texParameterf(L,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,l.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function vt(L,E){let W=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",H));const pt=E.source;let St=x.get(pt);St===void 0&&(St={},x.set(pt,St));const ut=mt(E);if(ut!==L.__cacheKey){St[ut]===void 0&&(St[ut]={texture:r.createTexture(),usedTimes:0},f.memory.textures++,W=!0),St[ut].usedTimes++;const Zt=St[L.__cacheKey];Zt!==void 0&&(St[L.__cacheKey].usedTimes--,Zt.usedTimes===0&&R(E)),L.__cacheKey=ut,L.__webglTexture=St[ut].texture}return W}function At(L,E,W){return Math.floor(Math.floor(L/W)/E)}function Ft(L,E,W,pt){const ut=L.updateRanges;if(ut.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,W,pt,E.data);else{ut.sort((Et,bt)=>Et.start-bt.start);let Zt=0;for(let Et=1;Et<ut.length;Et++){const bt=ut[Zt],Bt=ut[Et],zt=bt.start+bt.count,Ut=At(Bt.start,E.width,4),ce=At(bt.start,E.width,4);Bt.start<=zt+1&&Ut===ce&&At(Bt.start+Bt.count-1,E.width,4)===Ut?bt.count=Math.max(bt.count,Bt.start+Bt.count-bt.start):(++Zt,ut[Zt]=Bt)}ut.length=Zt+1;const Dt=r.getParameter(r.UNPACK_ROW_LENGTH),Xt=r.getParameter(r.UNPACK_SKIP_PIXELS),ne=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Et=0,bt=ut.length;Et<bt;Et++){const Bt=ut[Et],zt=Math.floor(Bt.start/4),Ut=Math.ceil(Bt.count/4),ce=zt%E.width,X=Math.floor(zt/E.width),Lt=Ut,Tt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ce),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ce,X,Lt,Tt,W,pt,E.data)}L.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Dt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Xt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ne)}}function et(L,E,W){let pt=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(pt=r.TEXTURE_3D);const St=vt(L,E),ut=E.source;i.bindTexture(pt,L.__webglTexture,r.TEXTURE0+W);const Zt=s.get(ut);if(ut.version!==Zt.__version||St===!0){i.activeTexture(r.TEXTURE0+W);const Dt=be.getPrimaries(be.workingColorSpace),Xt=E.colorSpace===$a?null:be.getPrimaries(E.colorSpace),ne=E.colorSpace===$a||Dt===Xt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let Et=C(E.image,!1,l.maxTextureSize);Et=Ne(E,Et);const bt=u.convert(E.format,E.colorSpace),Bt=u.convert(E.type);let zt=N(E.internalFormat,bt,Bt,E.colorSpace,E.isVideoTexture);J(pt,E);let Ut;const ce=E.mipmaps,X=E.isVideoTexture!==!0,Lt=Zt.__version===void 0||St===!0,Tt=ut.dataReady,It=F(E,Et);if(E.isDepthTexture)zt=U(E.format===Ds,E.type),Lt&&(X?i.texStorage2D(r.TEXTURE_2D,1,zt,Et.width,Et.height):i.texImage2D(r.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Bt,null));else if(E.isDataTexture)if(ce.length>0){X&&Lt&&i.texStorage2D(r.TEXTURE_2D,It,zt,ce[0].width,ce[0].height);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Ut=ce[Mt],X?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,bt,Bt,Ut.data);E.generateMipmaps=!1}else X?(Lt&&i.texStorage2D(r.TEXTURE_2D,It,zt,Et.width,Et.height),Tt&&Ft(E,Et,bt,Bt)):i.texImage2D(r.TEXTURE_2D,0,zt,Et.width,Et.height,0,bt,Bt,Et.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){X&&Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,zt,ce[0].width,ce[0].height,Et.depth);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)if(Ut=ce[Mt],E.format!==Ri)if(bt!==null)if(X){if(Tt)if(E.layerUpdates.size>0){const Ct=Cv(Ut.width,Ut.height,E.format,E.type);for(const ae of E.layerUpdates){const Pe=Ut.data.subarray(ae*Ct/Ut.data.BYTES_PER_ELEMENT,(ae+1)*Ct/Ut.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ae,Ut.width,Ut.height,1,bt,Pe)}E.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,bt,Ut.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,Et.depth,0,Ut.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Tt&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Ut.width,Ut.height,Et.depth,bt,Bt,Ut.data):i.texImage3D(r.TEXTURE_2D_ARRAY,Mt,zt,Ut.width,Ut.height,Et.depth,0,bt,Bt,Ut.data)}else{X&&Lt&&i.texStorage2D(r.TEXTURE_2D,It,zt,ce[0].width,ce[0].height);for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Ut=ce[Mt],E.format!==Ri?bt!==null?X?Tt&&i.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Ut.data):i.compressedTexImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,Ut.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Ut.width,Ut.height,bt,Bt,Ut.data):i.texImage2D(r.TEXTURE_2D,Mt,zt,Ut.width,Ut.height,0,bt,Bt,Ut.data)}else if(E.isDataArrayTexture)if(X){if(Lt&&i.texStorage3D(r.TEXTURE_2D_ARRAY,It,zt,Et.width,Et.height,Et.depth),Tt)if(E.layerUpdates.size>0){const Mt=Cv(Et.width,Et.height,E.format,E.type);for(const xt of E.layerUpdates){const Ct=Et.data.subarray(xt*Mt/Et.data.BYTES_PER_ELEMENT,(xt+1)*Mt/Et.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,xt,Et.width,Et.height,1,bt,Bt,Ct)}E.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,zt,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(E.isData3DTexture)X?(Lt&&i.texStorage3D(r.TEXTURE_3D,It,zt,Et.width,Et.height,Et.depth),Tt&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,Bt,Et.data)):i.texImage3D(r.TEXTURE_3D,0,zt,Et.width,Et.height,Et.depth,0,bt,Bt,Et.data);else if(E.isFramebufferTexture){if(Lt)if(X)i.texStorage2D(r.TEXTURE_2D,It,zt,Et.width,Et.height);else{let Mt=Et.width,xt=Et.height;for(let Ct=0;Ct<It;Ct++)i.texImage2D(r.TEXTURE_2D,Ct,zt,Mt,xt,0,bt,Bt,null),Mt>>=1,xt>>=1}}else if(ce.length>0){if(X&&Lt){const Mt=Yt(ce[0]);i.texStorage2D(r.TEXTURE_2D,It,zt,Mt.width,Mt.height)}for(let Mt=0,xt=ce.length;Mt<xt;Mt++)Ut=ce[Mt],X?Tt&&i.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,Bt,Ut):i.texImage2D(r.TEXTURE_2D,Mt,zt,bt,Bt,Ut);E.generateMipmaps=!1}else if(X){if(Lt){const Mt=Yt(Et);i.texStorage2D(r.TEXTURE_2D,It,zt,Mt.width,Mt.height)}Tt&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,Bt,Et)}else i.texImage2D(r.TEXTURE_2D,0,zt,bt,Bt,Et);M(E)&&S(pt),Zt.__version=ut.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function lt(L,E,W){if(E.image.length!==6)return;const pt=vt(L,E),St=E.source;i.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+W);const ut=s.get(St);if(St.version!==ut.__version||pt===!0){i.activeTexture(r.TEXTURE0+W);const Zt=be.getPrimaries(be.workingColorSpace),Dt=E.colorSpace===$a?null:be.getPrimaries(E.colorSpace),Xt=E.colorSpace===$a||Zt===Dt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);const ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Et=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let xt=0;xt<6;xt++)!ne&&!Et?bt[xt]=C(E.image[xt],!0,l.maxCubemapSize):bt[xt]=Et?E.image[xt].image:E.image[xt],bt[xt]=Ne(E,bt[xt]);const Bt=bt[0],zt=u.convert(E.format,E.colorSpace),Ut=u.convert(E.type),ce=N(E.internalFormat,zt,Ut,E.colorSpace),X=E.isVideoTexture!==!0,Lt=ut.__version===void 0||pt===!0,Tt=St.dataReady;let It=F(E,Bt);J(r.TEXTURE_CUBE_MAP,E);let Mt;if(ne){X&&Lt&&i.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,Bt.width,Bt.height);for(let xt=0;xt<6;xt++){Mt=bt[xt].mipmaps;for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];E.format!==Ri?zt!==null?X?Tt&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,ae.width,ae.height,zt,ae.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ce,ae.width,ae.height,0,ae.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,0,0,ae.width,ae.height,zt,Ut,ae.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct,ce,ae.width,ae.height,0,zt,Ut,ae.data)}}}else{if(Mt=E.mipmaps,X&&Lt){Mt.length>0&&It++;const xt=Yt(bt[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,It,ce,xt.width,xt.height)}for(let xt=0;xt<6;xt++)if(Et){X?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,bt[xt].width,bt[xt].height,zt,Ut,bt[xt].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,bt[xt].width,bt[xt].height,0,zt,Ut,bt[xt].data);for(let Ct=0;Ct<Mt.length;Ct++){const Pe=Mt[Ct].image[xt].image;X?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,Pe.width,Pe.height,zt,Ut,Pe.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ce,Pe.width,Pe.height,0,zt,Ut,Pe.data)}}else{X?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,0,0,zt,Ut,bt[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,0,ce,zt,Ut,bt[xt]);for(let Ct=0;Ct<Mt.length;Ct++){const ae=Mt[Ct];X?Tt&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,0,0,zt,Ut,ae.image[xt]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+xt,Ct+1,ce,zt,Ut,ae.image[xt])}}}M(E)&&S(r.TEXTURE_CUBE_MAP),ut.__version=St.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,W,pt,St,ut){const Zt=u.convert(W.format,W.colorSpace),Dt=u.convert(W.type),Xt=N(W.internalFormat,Zt,Dt,W.colorSpace),ne=s.get(E),Et=s.get(W);if(Et.__renderTarget=E,!ne.__hasExternalTextures){const bt=Math.max(1,E.width>>ut),Bt=Math.max(1,E.height>>ut);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?i.texImage3D(St,ut,Xt,bt,Bt,E.depth,0,Zt,Dt,null):i.texImage2D(St,ut,Xt,bt,Bt,0,Zt,Dt,null)}i.bindFramebuffer(r.FRAMEBUFFER,L),je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,St,Et.__webglTexture,0,G(E)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,St,Et.__webglTexture,ut),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Gt(L,E,W){if(r.bindRenderbuffer(r.RENDERBUFFER,L),E.depthBuffer){const pt=E.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ut=U(E.stencilBuffer,St),Zt=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),ut,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),ut,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ut,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,L)}else{const pt=E.textures;for(let St=0;St<pt.length;St++){const ut=pt[St],Zt=u.convert(ut.format,ut.colorSpace),Dt=u.convert(ut.type),Xt=N(ut.internalFormat,Zt,Dt,ut.colorSpace);je(E)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(E),Xt,E.width,E.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(E),Xt,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Xt,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Rt(L,E,W){const pt=E.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=s.get(E.depthTexture);if(St.__renderTarget=E,(!St.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,E.depthTexture.addEventListener("dispose",H)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),J(r.TEXTURE_CUBE_MAP,E.depthTexture);const ne=u.convert(E.depthTexture.format),Et=u.convert(E.depthTexture.type);let bt;E.depthTexture.format===xa?bt=r.DEPTH_COMPONENT24:E.depthTexture.format===Ds&&(bt=r.DEPTH24_STENCIL8);for(let Bt=0;Bt<6;Bt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Bt,0,bt,E.width,E.height,0,ne,Et,null)}}else ct(E.depthTexture,0);const ut=St.__webglTexture,Zt=G(E),Dt=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,Xt=E.depthTexture.format===Ds?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===xa)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ut,0);else if(E.depthTexture.format===Ds)je(E)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Xt,Dt,ut,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,Xt,Dt,ut,0);else throw new Error("Unknown depthTexture format")}function pe(L){const E=s.get(L),W=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const pt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),pt){const St=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),E.__depthDisposeCallback=St}E.__boundDepthTexture=pt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer)if(W)for(let pt=0;pt<6;pt++)Rt(E.__webglFramebuffer[pt],L,pt);else{const pt=L.texture.mipmaps;pt&&pt.length>0?Rt(E.__webglFramebuffer[0],L,0):Rt(E.__webglFramebuffer,L,0)}else if(W){E.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[pt]),E.__webglDepthbuffer[pt]===void 0)E.__webglDepthbuffer[pt]=r.createRenderbuffer(),Gt(E.__webglDepthbuffer[pt],L,!1);else{const St=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}else{const pt=L.texture.mipmaps;if(pt&&pt.length>0?i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Gt(E.__webglDepthbuffer,L,!1);else{const St=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ut)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Ye(L,E,W){const pt=s.get(L);E!==void 0&&wt(pt.__webglFramebuffer,L,L.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&pe(L)}function ie(L){const E=L.texture,W=s.get(L),pt=s.get(E);L.addEventListener("dispose",I);const St=L.textures,ut=L.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=E.version,f.memory.textures++),ut){W.__webglFramebuffer=[];for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer[Dt]=[];for(let Xt=0;Xt<E.mipmaps.length;Xt++)W.__webglFramebuffer[Dt][Xt]=r.createFramebuffer()}else W.__webglFramebuffer[Dt]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){W.__webglFramebuffer=[];for(let Dt=0;Dt<E.mipmaps.length;Dt++)W.__webglFramebuffer[Dt]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let Dt=0,Xt=St.length;Dt<Xt;Dt++){const ne=s.get(St[Dt]);ne.__webglTexture===void 0&&(ne.__webglTexture=r.createTexture(),f.memory.textures++)}if(L.samples>0&&je(L)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Dt=0;Dt<St.length;Dt++){const Xt=St[Dt];W.__webglColorRenderbuffer[Dt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[Dt]);const ne=u.convert(Xt.format,Xt.colorSpace),Et=u.convert(Xt.type),bt=N(Xt.internalFormat,ne,Et,Xt.colorSpace,L.isXRRenderTarget===!0),Bt=G(L);r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt,bt,L.width,L.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Dt,r.RENDERBUFFER,W.__webglColorRenderbuffer[Dt])}r.bindRenderbuffer(r.RENDERBUFFER,null),L.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Gt(W.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){i.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),J(r.TEXTURE_CUBE_MAP,E);for(let Dt=0;Dt<6;Dt++)if(E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Dt][Xt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,Xt);else wt(W.__webglFramebuffer[Dt],L,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Dt,0);M(E)&&S(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Zt){for(let Dt=0,Xt=St.length;Dt<Xt;Dt++){const ne=St[Dt],Et=s.get(ne);let bt=r.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(bt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(bt,Et.__webglTexture),J(bt,ne),wt(W.__webglFramebuffer,L,ne,r.COLOR_ATTACHMENT0+Dt,bt,0),M(ne)&&S(bt)}i.unbindTexture()}else{let Dt=r.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Dt=L.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Dt,pt.__webglTexture),J(Dt,E),E.mipmaps&&E.mipmaps.length>0)for(let Xt=0;Xt<E.mipmaps.length;Xt++)wt(W.__webglFramebuffer[Xt],L,E,r.COLOR_ATTACHMENT0,Dt,Xt);else wt(W.__webglFramebuffer,L,E,r.COLOR_ATTACHMENT0,Dt,0);M(E)&&S(Dt),i.unbindTexture()}L.depthBuffer&&pe(L)}function me(L){const E=L.textures;for(let W=0,pt=E.length;W<pt;W++){const St=E[W];if(M(St)){const ut=P(L),Zt=s.get(St).__webglTexture;i.bindTexture(ut,Zt),S(ut),i.unbindTexture()}}}const Ce=[],le=[];function $e(L){if(L.samples>0){if(je(L)===!1){const E=L.textures,W=L.width,pt=L.height;let St=r.COLOR_BUFFER_BIT;const ut=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=s.get(L),Dt=E.length>1;if(Dt)for(let ne=0;ne<E.length;ne++)i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const Xt=L.texture.mipmaps;Xt&&Xt.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ne=0;ne<E.length;ne++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),Dt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const Et=s.get(E[ne]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,W,pt,0,0,W,pt,St,r.NEAREST),m===!0&&(Ce.length=0,le.length=0,Ce.push(r.COLOR_ATTACHMENT0+ne),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Ce.push(ut),le.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,le)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ce))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Dt)for(let ne=0;ne<E.length;ne++){i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ne]);const Et=s.get(E[ne]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ne,r.TEXTURE_2D,Et,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const E=L.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function G(L){return Math.min(l.maxSamples,L.samples)}function je(L){const E=s.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Me(L){const E=f.render.frame;v.get(L)!==E&&(v.set(L,E),L.update())}function Ne(L,E){const W=L.colorSpace,pt=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||W!==Or&&W!==$a&&(be.getTransfer(W)===Be?(pt!==Ri||St!==ii)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Re("WebGLTextures: Unsupported texture color space:",W)),E}function Yt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=st,this.resetTextureUnits=nt,this.setTexture2D=ct,this.setTexture2DArray=z,this.setTexture3D=O,this.setTextureCube=j,this.rebindTextures=Ye,this.setupRenderTarget=ie,this.updateRenderTargetMipmap=me,this.updateMultisampleRenderTarget=$e,this.setupDepthRenderbuffer=pe,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=je,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function BA(r,t){function i(s,l=$a){let u;const f=be.getTransfer(l);if(s===ii)return r.UNSIGNED_BYTE;if(s===qd)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Yd)return r.UNSIGNED_SHORT_5_5_5_1;if(s===f_)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===h_)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===u_)return r.BYTE;if(s===c_)return r.SHORT;if(s===Zo)return r.UNSIGNED_SHORT;if(s===Wd)return r.INT;if(s===Gi)return r.UNSIGNED_INT;if(s===zi)return r.FLOAT;if(s===_a)return r.HALF_FLOAT;if(s===d_)return r.ALPHA;if(s===p_)return r.RGB;if(s===Ri)return r.RGBA;if(s===xa)return r.DEPTH_COMPONENT;if(s===Ds)return r.DEPTH_STENCIL;if(s===m_)return r.RED;if(s===jd)return r.RED_INTEGER;if(s===Lr)return r.RG;if(s===Zd)return r.RG_INTEGER;if(s===Kd)return r.RGBA_INTEGER;if(s===Gu||s===Vu||s===ku||s===Xu)if(f===Be)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(s===Gu)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Vu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ku)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Xu)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(s===Gu)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Vu)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ku)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Xu)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rd||s===od||s===ld||s===ud)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(s===rd)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===od)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ld)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ud)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cd||s===fd||s===hd||s===dd||s===pd||s===md||s===gd)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(s===cd||s===fd)return f===Be?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(s===hd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC;if(s===dd)return u.COMPRESSED_R11_EAC;if(s===pd)return u.COMPRESSED_SIGNED_R11_EAC;if(s===md)return u.COMPRESSED_RG11_EAC;if(s===gd)return u.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===vd||s===_d||s===xd||s===Sd||s===yd||s===Md||s===Ed||s===bd||s===Td||s===Ad||s===Rd||s===Cd||s===wd||s===Dd)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(s===vd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_d)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===xd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===yd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Md)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ed)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===bd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Td)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ad)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Rd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Cd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Dd)return f===Be?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ud||s===Nd||s===Ld)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(s===Ud)return f===Be?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Nd)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Ld)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Od||s===Pd||s===zd||s===Id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(s===Od)return u.COMPRESSED_RED_RGTC1_EXT;if(s===Pd)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ko?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const HA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,GA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class VA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i){if(this.texture===null){const s=new A_(t.texture);(t.depthNear!==i.depthNear||t.depthFar!==i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,s=new ki({vertexShader:HA,fragmentShader:GA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Vi(new Qu(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends Ir{constructor(t,i){super();const s=this;let l=null,u=1,f=null,d="local-floor",m=1,p=null,v=null,g=null,x=null,y=null,b=null;const C=typeof XRWebGLBinding<"u",M=new VA,S={},P=i.getContextAttributes();let N=null,U=null;const F=[],H=[],I=new Qt;let Q=null;const R=new ni;R.viewport=new nn;const w=new ni;w.viewport=new nn;const k=[R,w],nt=new $M;let st=null,mt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let lt=F[et];return lt===void 0&&(lt=new Lh,F[et]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(et){let lt=F[et];return lt===void 0&&(lt=new Lh,F[et]=lt),lt.getGripSpace()},this.getHand=function(et){let lt=F[et];return lt===void 0&&(lt=new Lh,F[et]=lt),lt.getHandSpace()};function ct(et){const lt=H.indexOf(et.inputSource);if(lt===-1)return;const wt=F[lt];wt!==void 0&&(wt.update(et.inputSource,et.frame,p||f),wt.dispatchEvent({type:et.type,data:et.inputSource}))}function z(){l.removeEventListener("select",ct),l.removeEventListener("selectstart",ct),l.removeEventListener("selectend",ct),l.removeEventListener("squeeze",ct),l.removeEventListener("squeezestart",ct),l.removeEventListener("squeezeend",ct),l.removeEventListener("end",z),l.removeEventListener("inputsourceschange",O);for(let et=0;et<F.length;et++){const lt=H[et];lt!==null&&(H[et]=null,F[et].disconnect(lt))}st=null,mt=null,M.reset();for(const et in S)delete S[et];t.setRenderTarget(N),y=null,x=null,g=null,l=null,U=null,Ft.stop(),s.isPresenting=!1,t.setPixelRatio(Q),t.setSize(I.width,I.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){u=et,s.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){d=et,s.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||f},this.setReferenceSpace=function(et){p=et},this.getBaseLayer=function(){return x!==null?x:y},this.getBinding=function(){return g===null&&C&&(g=new XRWebGLBinding(l,i)),g},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(et){if(l=et,l!==null){if(N=t.getRenderTarget(),l.addEventListener("select",ct),l.addEventListener("selectstart",ct),l.addEventListener("selectend",ct),l.addEventListener("squeeze",ct),l.addEventListener("squeezestart",ct),l.addEventListener("squeezeend",ct),l.addEventListener("end",z),l.addEventListener("inputsourceschange",O),P.xrCompatible!==!0&&await i.makeXRCompatible(),Q=t.getPixelRatio(),t.getSize(I),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Gt=null,Rt=null;P.depth&&(Rt=P.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,wt=P.stencil?Ds:xa,Gt=P.stencil?Ko:Gi);const pe={colorFormat:i.RGBA8,depthFormat:Rt,scaleFactor:u};g=this.getBinding(),x=g.createProjectionLayer(pe),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),U=new Bi(x.textureWidth,x.textureHeight,{format:Ri,type:ii,depthTexture:new Jo(x.textureWidth,x.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:P.stencil,colorSpace:t.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const wt={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:u};y=new XRWebGLLayer(l,i,wt),l.updateRenderState({baseLayer:y}),t.setPixelRatio(1),t.setSize(y.framebufferWidth,y.framebufferHeight,!1),U=new Bi(y.framebufferWidth,y.framebufferHeight,{format:Ri,type:ii,colorSpace:t.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(m),p=null,f=await l.requestReferenceSpace(d),Ft.setContext(l),Ft.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function O(et){for(let lt=0;lt<et.removed.length;lt++){const wt=et.removed[lt],Gt=H.indexOf(wt);Gt>=0&&(H[Gt]=null,F[Gt].disconnect(wt))}for(let lt=0;lt<et.added.length;lt++){const wt=et.added[lt];let Gt=H.indexOf(wt);if(Gt===-1){for(let pe=0;pe<F.length;pe++)if(pe>=H.length){H.push(wt),Gt=pe;break}else if(H[pe]===null){H[pe]=wt,Gt=pe;break}if(Gt===-1)break}const Rt=F[Gt];Rt&&Rt.connect(wt)}}const j=new K,dt=new K;function ft(et,lt,wt){j.setFromMatrixPosition(lt.matrixWorld),dt.setFromMatrixPosition(wt.matrixWorld);const Gt=j.distanceTo(dt),Rt=lt.projectionMatrix.elements,pe=wt.projectionMatrix.elements,Ye=Rt[14]/(Rt[10]-1),ie=Rt[14]/(Rt[10]+1),me=(Rt[9]+1)/Rt[5],Ce=(Rt[9]-1)/Rt[5],le=(Rt[8]-1)/Rt[0],$e=(pe[8]+1)/pe[0],G=Ye*le,je=Ye*$e,Me=Gt/(-le+$e),Ne=Me*-le;if(lt.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(Ne),et.translateZ(Me),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),Rt[10]===-1)et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const Yt=Ye+Me,L=ie+Me,E=G-Ne,W=je+(Gt-Ne),pt=me*ie/L*Yt,St=Ce*ie/L*Yt;et.projectionMatrix.makePerspective(E,W,pt,St,Yt,L),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function D(et,lt){lt===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(lt.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(l===null)return;let lt=et.near,wt=et.far;M.texture!==null&&(M.depthNear>0&&(lt=M.depthNear),M.depthFar>0&&(wt=M.depthFar)),nt.near=w.near=R.near=lt,nt.far=w.far=R.far=wt,(st!==nt.near||mt!==nt.far)&&(l.updateRenderState({depthNear:nt.near,depthFar:nt.far}),st=nt.near,mt=nt.far),nt.layers.mask=et.layers.mask|6,R.layers.mask=nt.layers.mask&3,w.layers.mask=nt.layers.mask&5;const Gt=et.parent,Rt=nt.cameras;D(nt,Gt);for(let pe=0;pe<Rt.length;pe++)D(Rt[pe],Gt);Rt.length===2?ft(nt,R,w):nt.projectionMatrix.copy(R.projectionMatrix),J(et,nt,Gt)};function J(et,lt,wt){wt===null?et.matrix.copy(lt.matrixWorld):(et.matrix.copy(wt.matrixWorld),et.matrix.invert(),et.matrix.multiply(lt.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(lt.projectionMatrix),et.projectionMatrixInverse.copy(lt.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=Fd*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return nt},this.getFoveation=function(){if(!(x===null&&y===null))return m},this.setFoveation=function(et){m=et,x!==null&&(x.fixedFoveation=et),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=et)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(nt)},this.getCameraTexture=function(et){return S[et]};let vt=null;function At(et,lt){if(v=lt.getViewerPose(p||f),b=lt,v!==null){const wt=v.views;y!==null&&(t.setRenderTargetFramebuffer(U,y.framebuffer),t.setRenderTarget(U));let Gt=!1;wt.length!==nt.cameras.length&&(nt.cameras.length=0,Gt=!0);for(let ie=0;ie<wt.length;ie++){const me=wt[ie];let Ce=null;if(y!==null)Ce=y.getViewport(me);else{const $e=g.getViewSubImage(x,me);Ce=$e.viewport,ie===0&&(t.setRenderTargetTextures(U,$e.colorTexture,$e.depthStencilTexture),t.setRenderTarget(U))}let le=k[ie];le===void 0&&(le=new ni,le.layers.enable(ie),le.viewport=new nn,k[ie]=le),le.matrix.fromArray(me.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(me.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),ie===0&&(nt.matrix.copy(le.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale)),Gt===!0&&nt.cameras.push(le)}const Rt=l.enabledFeatures;if(Rt&&Rt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&C){g=s.getBinding();const ie=g.getDepthInformation(wt[0]);ie&&ie.isValid&&ie.texture&&M.init(ie,l.renderState)}if(Rt&&Rt.includes("camera-access")&&C){t.state.unbindTexture(),g=s.getBinding();for(let ie=0;ie<wt.length;ie++){const me=wt[ie].camera;if(me){let Ce=S[me];Ce||(Ce=new A_,S[me]=Ce);const le=g.getCameraImage(me);Ce.sourceTexture=le}}}}for(let wt=0;wt<F.length;wt++){const Gt=H[wt],Rt=F[wt];Gt!==null&&Rt!==void 0&&Rt.update(Gt,lt,p||f)}vt&&vt(et,lt),lt.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:lt}),b=null}const Ft=new F_;Ft.setAnimationLoop(At),this.setAnimationLoop=function(et){vt=et},this.dispose=function(){}}}const Ts=new Sa,XA=new Je;function WA(r,t){function i(M,S){M.matrixAutoUpdate===!0&&M.updateMatrix(),S.value.copy(M.matrix)}function s(M,S){S.color.getRGB(M.fogColor.value,M_(r)),S.isFog?(M.fogNear.value=S.near,M.fogFar.value=S.far):S.isFogExp2&&(M.fogDensity.value=S.density)}function l(M,S,P,N,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?u(M,S):S.isMeshToonMaterial?(u(M,S),g(M,S)):S.isMeshPhongMaterial?(u(M,S),v(M,S)):S.isMeshStandardMaterial?(u(M,S),x(M,S),S.isMeshPhysicalMaterial&&y(M,S,U)):S.isMeshMatcapMaterial?(u(M,S),b(M,S)):S.isMeshDepthMaterial?u(M,S):S.isMeshDistanceMaterial?(u(M,S),C(M,S)):S.isMeshNormalMaterial?u(M,S):S.isLineBasicMaterial?(f(M,S),S.isLineDashedMaterial&&d(M,S)):S.isPointsMaterial?m(M,S,P,N):S.isSpriteMaterial?p(M,S):S.isShadowMaterial?(M.color.value.copy(S.color),M.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function u(M,S){M.opacity.value=S.opacity,S.color&&M.diffuse.value.copy(S.color),S.emissive&&M.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.bumpMap&&(M.bumpMap.value=S.bumpMap,i(S.bumpMap,M.bumpMapTransform),M.bumpScale.value=S.bumpScale,S.side===Wn&&(M.bumpScale.value*=-1)),S.normalMap&&(M.normalMap.value=S.normalMap,i(S.normalMap,M.normalMapTransform),M.normalScale.value.copy(S.normalScale),S.side===Wn&&M.normalScale.value.negate()),S.displacementMap&&(M.displacementMap.value=S.displacementMap,i(S.displacementMap,M.displacementMapTransform),M.displacementScale.value=S.displacementScale,M.displacementBias.value=S.displacementBias),S.emissiveMap&&(M.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,M.emissiveMapTransform)),S.specularMap&&(M.specularMap.value=S.specularMap,i(S.specularMap,M.specularMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest);const P=t.get(S),N=P.envMap,U=P.envMapRotation;N&&(M.envMap.value=N,Ts.copy(U),Ts.x*=-1,Ts.y*=-1,Ts.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(Ts.y*=-1,Ts.z*=-1),M.envMapRotation.value.setFromMatrix4(XA.makeRotationFromEuler(Ts)),M.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=S.reflectivity,M.ior.value=S.ior,M.refractionRatio.value=S.refractionRatio),S.lightMap&&(M.lightMap.value=S.lightMap,M.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,M.lightMapTransform)),S.aoMap&&(M.aoMap.value=S.aoMap,M.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,M.aoMapTransform))}function f(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform))}function d(M,S){M.dashSize.value=S.dashSize,M.totalSize.value=S.dashSize+S.gapSize,M.scale.value=S.scale}function m(M,S,P,N){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.size.value=S.size*P,M.scale.value=N*.5,S.map&&(M.map.value=S.map,i(S.map,M.uvTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function p(M,S){M.diffuse.value.copy(S.color),M.opacity.value=S.opacity,M.rotation.value=S.rotation,S.map&&(M.map.value=S.map,i(S.map,M.mapTransform)),S.alphaMap&&(M.alphaMap.value=S.alphaMap,i(S.alphaMap,M.alphaMapTransform)),S.alphaTest>0&&(M.alphaTest.value=S.alphaTest)}function v(M,S){M.specular.value.copy(S.specular),M.shininess.value=Math.max(S.shininess,1e-4)}function g(M,S){S.gradientMap&&(M.gradientMap.value=S.gradientMap)}function x(M,S){M.metalness.value=S.metalness,S.metalnessMap&&(M.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,M.metalnessMapTransform)),M.roughness.value=S.roughness,S.roughnessMap&&(M.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,M.roughnessMapTransform)),S.envMap&&(M.envMapIntensity.value=S.envMapIntensity)}function y(M,S,P){M.ior.value=S.ior,S.sheen>0&&(M.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),M.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(M.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,M.sheenColorMapTransform)),S.sheenRoughnessMap&&(M.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,M.sheenRoughnessMapTransform))),S.clearcoat>0&&(M.clearcoat.value=S.clearcoat,M.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(M.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,M.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(M.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Wn&&M.clearcoatNormalScale.value.negate())),S.dispersion>0&&(M.dispersion.value=S.dispersion),S.iridescence>0&&(M.iridescence.value=S.iridescence,M.iridescenceIOR.value=S.iridescenceIOR,M.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(M.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,M.iridescenceMapTransform)),S.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),S.transmission>0&&(M.transmission.value=S.transmission,M.transmissionSamplerMap.value=P.texture,M.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(M.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,M.transmissionMapTransform)),M.thickness.value=S.thickness,S.thicknessMap&&(M.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=S.attenuationDistance,M.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(M.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(M.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=S.specularIntensity,M.specularColor.value.copy(S.specularColor),S.specularColorMap&&(M.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,M.specularColorMapTransform)),S.specularIntensityMap&&(M.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,M.specularIntensityMapTransform))}function b(M,S){S.matcap&&(M.matcap.value=S.matcap)}function C(M,S){const P=t.get(S).light;M.referencePosition.value.setFromMatrixPosition(P.matrixWorld),M.nearDistance.value=P.shadow.camera.near,M.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function qA(r,t,i,s){let l={},u={},f=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,N){const U=N.program;s.uniformBlockBinding(P,U)}function p(P,N){let U=l[P.id];U===void 0&&(b(P),U=v(P),l[P.id]=U,P.addEventListener("dispose",M));const F=N.program;s.updateUBOMapping(P,F);const H=t.render.frame;u[P.id]!==H&&(x(P),u[P.id]=H)}function v(P){const N=g();P.__bindingPointIndex=N;const U=r.createBuffer(),F=P.__size,H=P.usage;return r.bindBuffer(r.UNIFORM_BUFFER,U),r.bufferData(r.UNIFORM_BUFFER,F,H),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,N,U),U}function g(){for(let P=0;P<d;P++)if(f.indexOf(P)===-1)return f.push(P),P;return Re("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const N=l[P.id],U=P.uniforms,F=P.__cache;r.bindBuffer(r.UNIFORM_BUFFER,N);for(let H=0,I=U.length;H<I;H++){const Q=Array.isArray(U[H])?U[H]:[U[H]];for(let R=0,w=Q.length;R<w;R++){const k=Q[R];if(y(k,H,R,F)===!0){const nt=k.__offset,st=Array.isArray(k.value)?k.value:[k.value];let mt=0;for(let ct=0;ct<st.length;ct++){const z=st[ct],O=C(z);typeof z=="number"||typeof z=="boolean"?(k.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,nt+mt,k.__data)):z.isMatrix3?(k.__data[0]=z.elements[0],k.__data[1]=z.elements[1],k.__data[2]=z.elements[2],k.__data[3]=0,k.__data[4]=z.elements[3],k.__data[5]=z.elements[4],k.__data[6]=z.elements[5],k.__data[7]=0,k.__data[8]=z.elements[6],k.__data[9]=z.elements[7],k.__data[10]=z.elements[8],k.__data[11]=0):(z.toArray(k.__data,mt),mt+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,nt,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(P,N,U,F){const H=P.value,I=N+"_"+U;if(F[I]===void 0)return typeof H=="number"||typeof H=="boolean"?F[I]=H:F[I]=H.clone(),!0;{const Q=F[I];if(typeof H=="number"||typeof H=="boolean"){if(Q!==H)return F[I]=H,!0}else if(Q.equals(H)===!1)return Q.copy(H),!0}return!1}function b(P){const N=P.uniforms;let U=0;const F=16;for(let I=0,Q=N.length;I<Q;I++){const R=Array.isArray(N[I])?N[I]:[N[I]];for(let w=0,k=R.length;w<k;w++){const nt=R[w],st=Array.isArray(nt.value)?nt.value:[nt.value];for(let mt=0,ct=st.length;mt<ct;mt++){const z=st[mt],O=C(z),j=U%F,dt=j%O.boundary,ft=j+dt;U+=dt,ft!==0&&F-ft<O.storage&&(U+=F-ft),nt.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=U,U+=O.storage}}}const H=U%F;return H>0&&(U+=F-H),P.__size=U,P.__cache={},this}function C(P){const N={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(N.boundary=4,N.storage=4):P.isVector2?(N.boundary=8,N.storage=8):P.isVector3||P.isColor?(N.boundary=16,N.storage=12):P.isVector4?(N.boundary=16,N.storage=16):P.isMatrix3?(N.boundary=48,N.storage=48):P.isMatrix4?(N.boundary=64,N.storage=64):P.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",P),N}function M(P){const N=P.target;N.removeEventListener("dispose",M);const U=f.indexOf(N.__bindingPointIndex);f.splice(U,1),r.deleteBuffer(l[N.id]),delete l[N.id],delete u[N.id]}function S(){for(const P in l)r.deleteBuffer(l[P]);f=[],l={},u={}}return{bind:m,update:p,dispose:S}}const YA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Li=null;function jA(){return Li===null&&(Li=new cM(YA,16,16,Lr,_a),Li.name="DFG_LUT",Li.minFilter=On,Li.magFilter=On,Li.wrapS=ma,Li.wrapT=ma,Li.generateMipmaps=!1,Li.needsUpdate=!0),Li}class ZA{constructor(t={}){const{canvas:i=zy(),context:s=null,depth:l=!0,stencil:u=!1,alpha:f=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:x=!1,outputBufferType:y=ii}=t;this.isWebGLRenderer=!0;let b;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=s.getContextAttributes().alpha}else b=f;const C=y,M=new Set([Kd,Zd,jd]),S=new Set([ii,Gi,Zo,Ko,qd,Yd]),P=new Uint32Array(4),N=new Int32Array(4);let U=null,F=null;const H=[],I=[];let Q=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let w=!1;this._outputColorSpace=mi;let k=0,nt=0,st=null,mt=-1,ct=null;const z=new nn,O=new nn;let j=null;const dt=new Oe(0);let ft=0,D=i.width,J=i.height,vt=1,At=null,Ft=null;const et=new nn(0,0,D,J),lt=new nn(0,0,D,J);let wt=!1;const Gt=new np;let Rt=!1,pe=!1;const Ye=new Je,ie=new K,me=new nn,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let le=!1;function $e(){return st===null?vt:1}let G=s;function je(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Xd}`),i.addEventListener("webglcontextlost",ae,!1),i.addEventListener("webglcontextrestored",Pe,!1),i.addEventListener("webglcontextcreationerror",Ee,!1),G===null){const q="webgl2";if(G=je(q,A),G===null)throw je(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Re("WebGLRenderer: "+A.message),A}let Me,Ne,Yt,L,E,W,pt,St,ut,Zt,Dt,Xt,ne,Et,bt,Bt,zt,Ut,ce,X,Lt,Tt,It,Mt;function xt(){Me=new jT(G),Me.init(),Tt=new BA(G,Me),Ne=new BT(G,Me,t,Tt),Yt=new IA(G,Me),Ne.reversedDepthBuffer&&x&&Yt.buffers.depth.setReversed(!0),L=new QT(G),E=new MA,W=new FA(G,Me,Yt,E,Ne,Tt,L),pt=new GT(R),St=new YT(R),ut=new eE(G),It=new IT(G,ut),Zt=new ZT(G,ut,L,It),Dt=new $T(G,Zt,ut,L),ce=new JT(G,Ne,W),Bt=new HT(E),Xt=new yA(R,pt,St,Me,Ne,It,Bt),ne=new WA(R,E),Et=new bA,bt=new DA(Me),Ut=new zT(R,pt,St,Yt,Dt,b,m),zt=new PA(R,Dt,Ne),Mt=new qA(G,L,Ne,Yt),X=new FT(G,Me,L),Lt=new KT(G,Me,L),L.programs=Xt.programs,R.capabilities=Ne,R.extensions=Me,R.properties=E,R.renderLists=Et,R.shadowMap=zt,R.state=Yt,R.info=L}xt(),C!==ii&&(Q=new e1(C,i.width,i.height,l,u));const Ct=new kA(R,G);this.xr=Ct,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Me.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Me.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return vt},this.setPixelRatio=function(A){A!==void 0&&(vt=A,this.setSize(D,J,!1))},this.getSize=function(A){return A.set(D,J)},this.setSize=function(A,q,rt=!0){if(Ct.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}D=A,J=q,i.width=Math.floor(A*vt),i.height=Math.floor(q*vt),rt===!0&&(i.style.width=A+"px",i.style.height=q+"px"),Q!==null&&Q.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(D*vt,J*vt).floor()},this.setDrawingBufferSize=function(A,q,rt){D=A,J=q,vt=rt,i.width=Math.floor(A*rt),i.height=Math.floor(q*rt),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ii){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}Q.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(z)},this.getViewport=function(A){return A.copy(et)},this.setViewport=function(A,q,rt,it){A.isVector4?et.set(A.x,A.y,A.z,A.w):et.set(A,q,rt,it),Yt.viewport(z.copy(et).multiplyScalar(vt).round())},this.getScissor=function(A){return A.copy(lt)},this.setScissor=function(A,q,rt,it){A.isVector4?lt.set(A.x,A.y,A.z,A.w):lt.set(A,q,rt,it),Yt.scissor(O.copy(lt).multiplyScalar(vt).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(A){Yt.setScissorTest(wt=A)},this.setOpaqueSort=function(A){At=A},this.setTransparentSort=function(A){Ft=A},this.getClearColor=function(A){return A.copy(Ut.getClearColor())},this.setClearColor=function(){Ut.setClearColor(...arguments)},this.getClearAlpha=function(){return Ut.getClearAlpha()},this.setClearAlpha=function(){Ut.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,rt=!0){let it=0;if(A){let Z=!1;if(st!==null){const Nt=st.texture.format;Z=M.has(Nt)}if(Z){const Nt=st.texture.type,Ht=S.has(Nt),Ot=Ut.getClearColor(),Vt=Ut.getClearAlpha(),Wt=Ot.r,$t=Ot.g,qt=Ot.b;Ht?(P[0]=Wt,P[1]=$t,P[2]=qt,P[3]=Vt,G.clearBufferuiv(G.COLOR,0,P)):(N[0]=Wt,N[1]=$t,N[2]=qt,N[3]=Vt,G.clearBufferiv(G.COLOR,0,N))}else it|=G.COLOR_BUFFER_BIT}q&&(it|=G.DEPTH_BUFFER_BIT),rt&&(it|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",ae,!1),i.removeEventListener("webglcontextrestored",Pe,!1),i.removeEventListener("webglcontextcreationerror",Ee,!1),Ut.dispose(),Et.dispose(),bt.dispose(),E.dispose(),pt.dispose(),St.dispose(),Dt.dispose(),It.dispose(),Mt.dispose(),Xt.dispose(),Ct.dispose(),Ct.removeEventListener("sessionstart",Os),Ct.removeEventListener("sessionend",Vr),Ci.stop()};function ae(A){A.preventDefault(),nv("WebGLRenderer: Context Lost."),w=!0}function Pe(){nv("WebGLRenderer: Context Restored."),w=!1;const A=L.autoReset,q=zt.enabled,rt=zt.autoUpdate,it=zt.needsUpdate,Z=zt.type;xt(),L.autoReset=A,zt.enabled=q,zt.autoUpdate=rt,zt.needsUpdate=it,zt.type=Z}function Ee(A){Re("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dn(A){const q=A.target;q.removeEventListener("dispose",Dn),vi(q)}function vi(A){sl(A),E.remove(A)}function sl(A){const q=E.get(A).programs;q!==void 0&&(q.forEach(function(rt){Xt.releaseProgram(rt)}),A.isShaderMaterial&&Xt.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,rt,it,Z,Nt){q===null&&(q=Ce);const Ht=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=ns(A,q,rt,it,Z);Yt.setMaterial(it,Ht);let Vt=rt.index,Wt=1;if(it.wireframe===!0){if(Vt=Zt.getWireframeAttribute(rt),Vt===void 0)return;Wt=2}const $t=rt.drawRange,qt=rt.attributes.position;let te=$t.start*Wt,we=($t.start+$t.count)*Wt;Nt!==null&&(te=Math.max(te,Nt.start*Wt),we=Math.min(we,(Nt.start+Nt.count)*Wt)),Vt!==null?(te=Math.max(te,0),we=Math.min(we,Vt.count)):qt!=null&&(te=Math.max(te,0),we=Math.min(we,qt.count));const Ze=we-te;if(Ze<0||Ze===1/0)return;It.setup(Z,it,Ot,rt,Vt);let Xe,Le=X;if(Vt!==null&&(Xe=ut.get(Vt),Le=Lt,Le.setIndex(Xe)),Z.isMesh)it.wireframe===!0?(Yt.setLineWidth(it.wireframeLinewidth*$e()),Le.setMode(G.LINES)):Le.setMode(G.TRIANGLES);else if(Z.isLine){let Kt=it.linewidth;Kt===void 0&&(Kt=1),Yt.setLineWidth(Kt*$e()),Z.isLineSegments?Le.setMode(G.LINES):Z.isLineLoop?Le.setMode(G.LINE_LOOP):Le.setMode(G.LINE_STRIP)}else Z.isPoints?Le.setMode(G.POINTS):Z.isSprite&&Le.setMode(G.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)Qo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Le.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(Me.get("WEBGL_multi_draw"))Le.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Kt=Z._multiDrawStarts,De=Z._multiDrawCounts,se=Z._multiDrawCount,Sn=Vt?ut.get(Vt).bytesPerElement:1,qi=E.get(it).currentProgram.getUniforms();for(let yn=0;yn<se;yn++)qi.setValue(G,"_gl_DrawID",yn),Le.render(Kt[yn]/Sn,De[yn])}else if(Z.isInstancedMesh)Le.renderInstances(te,Ze,Z.count);else if(rt.isInstancedBufferGeometry){const Kt=rt._maxInstanceCount!==void 0?rt._maxInstanceCount:1/0,De=Math.min(rt.instanceCount,Kt);Le.renderInstances(te,Ze,De)}else Le.render(te,Ze)};function Hr(A,q,rt){A.transparent===!0&&A.side===Pi&&A.forceSinglePass===!1?(A.side=Wn,A.needsUpdate=!0,zs(A,q,rt),A.side=es,A.needsUpdate=!0,zs(A,q,rt),A.side=Pi):zs(A,q,rt)}this.compile=function(A,q,rt=null){rt===null&&(rt=A),F=bt.get(rt),F.init(q),I.push(F),rt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),A!==rt&&A.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(F.pushLight(Z),Z.castShadow&&F.pushShadow(Z))}),F.setupLights();const it=new Set;return A.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Nt=Z.material;if(Nt)if(Array.isArray(Nt))for(let Ht=0;Ht<Nt.length;Ht++){const Ot=Nt[Ht];Hr(Ot,rt,Z),it.add(Ot)}else Hr(Nt,rt,Z),it.add(Nt)}),F=I.pop(),it},this.compileAsync=function(A,q,rt=null){const it=this.compile(A,q,rt);return new Promise(Z=>{function Nt(){if(it.forEach(function(Ht){E.get(Ht).currentProgram.isReady()&&it.delete(Ht)}),it.size===0){Z(A);return}setTimeout(Nt,10)}Me.get("KHR_parallel_shader_compile")!==null?Nt():setTimeout(Nt,10)})};let Ls=null;function Gr(A){Ls&&Ls(A)}function Os(){Ci.stop()}function Vr(){Ci.start()}const Ci=new F_;Ci.setAnimationLoop(Gr),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(A){Ls=A,Ct.setAnimationLoop(A),A===null?Ci.stop():Ci.start()},Ct.addEventListener("sessionstart",Os),Ct.addEventListener("sessionend",Vr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Re("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const rt=Ct.enabled===!0&&Ct.isPresenting===!0,it=Q!==null&&(st===null||rt)&&Q.begin(R,st);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ct.enabled===!0&&Ct.isPresenting===!0&&(Q===null||Q.isCompositing()===!1)&&(Ct.cameraAutoUpdate===!0&&Ct.updateCamera(q),q=Ct.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,q,st),F=bt.get(A,I.length),F.init(q),I.push(F),Ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Gt.setFromProjectionMatrix(Ye,Ii,q.reversedDepth),pe=this.localClippingEnabled,Rt=Bt.init(this.clippingPlanes,pe),U=Et.get(A,H.length),U.init(),H.push(U),Ct.enabled===!0&&Ct.isPresenting===!0){const Ht=R.xr.getDepthSensingMesh();Ht!==null&&ai(Ht,q,-1/0,R.sortObjects)}ai(A,q,0,R.sortObjects),U.finish(),R.sortObjects===!0&&U.sort(At,Ft),le=Ct.enabled===!1||Ct.isPresenting===!1||Ct.hasDepthSensing()===!1,le&&Ut.addToRenderList(U,A),this.info.render.frame++,Rt===!0&&Bt.beginShadows();const Z=F.state.shadowsArray;if(zt.render(Z,A,q),Rt===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(it&&Q.hasRenderPass())===!1){const Ht=U.opaque,Ot=U.transmissive;if(F.setupLights(),q.isArrayCamera){const Vt=q.cameras;if(Ot.length>0)for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const qt=Vt[Wt];xn(Ht,Ot,A,qt)}le&&Ut.render(A);for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const qt=Vt[Wt];rn(U,A,qt,qt.viewport)}}else Ot.length>0&&xn(Ht,Ot,A,q),le&&Ut.render(A),rn(U,A,q)}st!==null&&nt===0&&(W.updateMultisampleRenderTarget(st),W.updateRenderTargetMipmap(st)),it&&Q.end(R),A.isScene===!0&&A.onAfterRender(R,A,q),It.resetDefaultState(),mt=-1,ct=null,I.pop(),I.length>0?(F=I[I.length-1],Rt===!0&&Bt.setGlobalState(R.clippingPlanes,F.state.camera)):F=null,H.pop(),H.length>0?U=H[H.length-1]:U=null};function ai(A,q,rt,it){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)rt=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)F.pushLight(A),A.castShadow&&F.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Gt.intersectsSprite(A)){it&&me.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ye);const Ht=Dt.update(A),Ot=A.material;Ot.visible&&U.push(A,Ht,Ot,rt,me.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Gt.intersectsObject(A))){const Ht=Dt.update(A),Ot=A.material;if(it&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),me.copy(A.boundingSphere.center)):(Ht.boundingSphere===null&&Ht.computeBoundingSphere(),me.copy(Ht.boundingSphere.center)),me.applyMatrix4(A.matrixWorld).applyMatrix4(Ye)),Array.isArray(Ot)){const Vt=Ht.groups;for(let Wt=0,$t=Vt.length;Wt<$t;Wt++){const qt=Vt[Wt],te=Ot[qt.materialIndex];te&&te.visible&&U.push(A,Ht,te,rt,me.z,qt)}}else Ot.visible&&U.push(A,Ht,Ot,rt,me.z,null)}}const Nt=A.children;for(let Ht=0,Ot=Nt.length;Ht<Ot;Ht++)ai(Nt[Ht],q,rt,it)}function rn(A,q,rt,it){const{opaque:Z,transmissive:Nt,transparent:Ht}=A;F.setupLightsView(rt),Rt===!0&&Bt.setGlobalState(R.clippingPlanes,rt),it&&Yt.viewport(z.copy(it)),Z.length>0&&_i(Z,q,rt),Nt.length>0&&_i(Nt,q,rt),Ht.length>0&&_i(Ht,q,rt),Yt.buffers.depth.setTest(!0),Yt.buffers.depth.setMask(!0),Yt.buffers.color.setMask(!0),Yt.setPolygonOffset(!1)}function xn(A,q,rt,it){if((rt.isScene===!0?rt.overrideMaterial:null)!==null)return;if(F.state.transmissionRenderTarget[it.id]===void 0){const te=Me.has("EXT_color_buffer_half_float")||Me.has("EXT_color_buffer_float");F.state.transmissionRenderTarget[it.id]=new Bi(1,1,{generateMipmaps:!0,type:te?_a:ii,minFilter:ws,samples:Ne.samples,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Nt=F.state.transmissionRenderTarget[it.id],Ht=it.viewport||z;Nt.setSize(Ht.z*R.transmissionResolutionScale,Ht.w*R.transmissionResolutionScale);const Ot=R.getRenderTarget(),Vt=R.getActiveCubeFace(),Wt=R.getActiveMipmapLevel();R.setRenderTarget(Nt),R.getClearColor(dt),ft=R.getClearAlpha(),ft<1&&R.setClearColor(16777215,.5),R.clear(),le&&Ut.render(rt);const $t=R.toneMapping;R.toneMapping=Fi;const qt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),F.setupLightsView(it),Rt===!0&&Bt.setGlobalState(R.clippingPlanes,it),_i(A,rt,it),W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt),Me.has("WEBGL_multisampled_render_to_texture")===!1){let te=!1;for(let we=0,Ze=q.length;we<Ze;we++){const Xe=q[we],{object:Le,geometry:Kt,material:De,group:se}=Xe;if(De.side===Pi&&Le.layers.test(it.layers)){const Sn=De.side;De.side=Wn,De.needsUpdate=!0,Ps(Le,rt,it,Kt,De,se),De.side=Sn,De.needsUpdate=!0,te=!0}}te===!0&&(W.updateMultisampleRenderTarget(Nt),W.updateRenderTargetMipmap(Nt))}R.setRenderTarget(Ot,Vt,Wt),R.setClearColor(dt,ft),qt!==void 0&&(it.viewport=qt),R.toneMapping=$t}function _i(A,q,rt){const it=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Nt=A.length;Z<Nt;Z++){const Ht=A[Z],{object:Ot,geometry:Vt,group:Wt}=Ht;let $t=Ht.material;$t.allowOverride===!0&&it!==null&&($t=it),Ot.layers.test(rt.layers)&&Ps(Ot,q,rt,Vt,$t,Wt)}}function Ps(A,q,rt,it,Z,Nt){A.onBeforeRender(R,q,rt,it,Z,Nt),A.modelViewMatrix.multiplyMatrices(rt.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Z.onBeforeRender(R,q,rt,it,A,Nt),Z.transparent===!0&&Z.side===Pi&&Z.forceSinglePass===!1?(Z.side=Wn,Z.needsUpdate=!0,R.renderBufferDirect(rt,q,it,Z,A,Nt),Z.side=es,Z.needsUpdate=!0,R.renderBufferDirect(rt,q,it,Z,A,Nt),Z.side=Pi):R.renderBufferDirect(rt,q,it,Z,A,Nt),A.onAfterRender(R,q,rt,it,Z,Nt)}function zs(A,q,rt){q.isScene!==!0&&(q=Ce);const it=E.get(A),Z=F.state.lights,Nt=F.state.shadowsArray,Ht=Z.state.version,Ot=Xt.getParameters(A,Z.state,Nt,q,rt),Vt=Xt.getProgramCacheKey(Ot);let Wt=it.programs;it.environment=A.isMeshStandardMaterial?q.environment:null,it.fog=q.fog,it.envMap=(A.isMeshStandardMaterial?St:pt).get(A.envMap||it.environment),it.envMapRotation=it.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",Dn),Wt=new Map,it.programs=Wt);let $t=Wt.get(Vt);if($t!==void 0){if(it.currentProgram===$t&&it.lightsStateVersion===Ht)return kr(A,Ot),$t}else Ot.uniforms=Xt.getUniforms(A),A.onBeforeCompile(Ot,R),$t=Xt.acquireProgram(Ot,Vt),Wt.set(Vt,$t),it.uniforms=Ot.uniforms;const qt=it.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(qt.clippingPlanes=Bt.uniform),kr(A,Ot),it.needsLights=ya(A),it.lightsStateVersion=Ht,it.needsLights&&(qt.ambientLightColor.value=Z.state.ambient,qt.lightProbe.value=Z.state.probe,qt.directionalLights.value=Z.state.directional,qt.directionalLightShadows.value=Z.state.directionalShadow,qt.spotLights.value=Z.state.spot,qt.spotLightShadows.value=Z.state.spotShadow,qt.rectAreaLights.value=Z.state.rectArea,qt.ltc_1.value=Z.state.rectAreaLTC1,qt.ltc_2.value=Z.state.rectAreaLTC2,qt.pointLights.value=Z.state.point,qt.pointLightShadows.value=Z.state.pointShadow,qt.hemisphereLights.value=Z.state.hemi,qt.directionalShadowMap.value=Z.state.directionalShadowMap,qt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,qt.spotShadowMap.value=Z.state.spotShadowMap,qt.spotLightMatrix.value=Z.state.spotLightMatrix,qt.spotLightMap.value=Z.state.spotLightMap,qt.pointShadowMap.value=Z.state.pointShadowMap,qt.pointShadowMatrix.value=Z.state.pointShadowMatrix),it.currentProgram=$t,it.uniformsList=null,$t}function rl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=Wu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function kr(A,q){const rt=E.get(A);rt.outputColorSpace=q.outputColorSpace,rt.batching=q.batching,rt.batchingColor=q.batchingColor,rt.instancing=q.instancing,rt.instancingColor=q.instancingColor,rt.instancingMorph=q.instancingMorph,rt.skinning=q.skinning,rt.morphTargets=q.morphTargets,rt.morphNormals=q.morphNormals,rt.morphColors=q.morphColors,rt.morphTargetsCount=q.morphTargetsCount,rt.numClippingPlanes=q.numClippingPlanes,rt.numIntersection=q.numClipIntersection,rt.vertexAlphas=q.vertexAlphas,rt.vertexTangents=q.vertexTangents,rt.toneMapping=q.toneMapping}function ns(A,q,rt,it,Z){q.isScene!==!0&&(q=Ce),W.resetTextureUnits();const Nt=q.fog,Ht=it.isMeshStandardMaterial?q.environment:null,Ot=st===null?R.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Or,Vt=(it.isMeshStandardMaterial?St:pt).get(it.envMap||Ht),Wt=it.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,$t=!!rt.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),qt=!!rt.morphAttributes.position,te=!!rt.morphAttributes.normal,we=!!rt.morphAttributes.color;let Ze=Fi;it.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ze=R.toneMapping);const Xe=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,Le=Xe!==void 0?Xe.length:0,Kt=E.get(it),De=F.state.lights;if(Rt===!0&&(pe===!0||A!==ct)){const En=A===ct&&it.id===mt;Bt.setState(it,A,En)}let se=!1;it.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==De.state.version||Kt.outputColorSpace!==Ot||Z.isBatchedMesh&&Kt.batching===!1||!Z.isBatchedMesh&&Kt.batching===!0||Z.isBatchedMesh&&Kt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Kt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Kt.instancing===!1||!Z.isInstancedMesh&&Kt.instancing===!0||Z.isSkinnedMesh&&Kt.skinning===!1||!Z.isSkinnedMesh&&Kt.skinning===!0||Z.isInstancedMesh&&Kt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Kt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Kt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Kt.instancingMorph===!1&&Z.morphTexture!==null||Kt.envMap!==Vt||it.fog===!0&&Kt.fog!==Nt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==Bt.numPlanes||Kt.numIntersection!==Bt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==$t||Kt.morphTargets!==qt||Kt.morphNormals!==te||Kt.morphColors!==we||Kt.toneMapping!==Ze||Kt.morphTargetsCount!==Le)&&(se=!0):(se=!0,Kt.__version=it.version);let Sn=Kt.currentProgram;se===!0&&(Sn=zs(it,q,Z));let qi=!1,yn=!1,si=!1;const ze=Sn.getUniforms(),Mn=Kt.uniforms;if(Yt.useProgram(Sn.program)&&(qi=!0,yn=!0,si=!0),it.id!==mt&&(mt=it.id,yn=!0),qi||ct!==A){Yt.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ze.setValue(G,"projectionMatrix",A.projectionMatrix),ze.setValue(G,"viewMatrix",A.matrixWorldInverse);const bn=ze.map.cameraPosition;bn!==void 0&&bn.setValue(G,ie.setFromMatrixPosition(A.matrixWorld)),Ne.logarithmicDepthBuffer&&ze.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&ze.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),ct!==A&&(ct=A,yn=!0,si=!0)}if(Kt.needsLights&&(De.state.directionalShadowMap.length>0&&ze.setValue(G,"directionalShadowMap",De.state.directionalShadowMap,W),De.state.spotShadowMap.length>0&&ze.setValue(G,"spotShadowMap",De.state.spotShadowMap,W),De.state.pointShadowMap.length>0&&ze.setValue(G,"pointShadowMap",De.state.pointShadowMap,W)),Z.isSkinnedMesh){ze.setOptional(G,Z,"bindMatrix"),ze.setOptional(G,Z,"bindMatrixInverse");const En=Z.skeleton;En&&(En.boneTexture===null&&En.computeBoneTexture(),ze.setValue(G,"boneTexture",En.boneTexture,W))}Z.isBatchedMesh&&(ze.setOptional(G,Z,"batchingTexture"),ze.setValue(G,"batchingTexture",Z._matricesTexture,W),ze.setOptional(G,Z,"batchingIdTexture"),ze.setValue(G,"batchingIdTexture",Z._indirectTexture,W),ze.setOptional(G,Z,"batchingColorTexture"),Z._colorsTexture!==null&&ze.setValue(G,"batchingColorTexture",Z._colorsTexture,W));const dn=rt.morphAttributes;if((dn.position!==void 0||dn.normal!==void 0||dn.color!==void 0)&&ce.update(Z,rt,Sn),(yn||Kt.receiveShadow!==Z.receiveShadow)&&(Kt.receiveShadow=Z.receiveShadow,ze.setValue(G,"receiveShadow",Z.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(Mn.envMap.value=Vt,Mn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&q.environment!==null&&(Mn.envMapIntensity.value=q.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=jA()),yn&&(ze.setValue(G,"toneMappingExposure",R.toneMappingExposure),Kt.needsLights&&Xr(Mn,si),Nt&&it.fog===!0&&ne.refreshFogUniforms(Mn,Nt),ne.refreshMaterialUniforms(Mn,it,vt,J,F.state.transmissionRenderTarget[A.id]),Wu.upload(G,rl(Kt),Mn,W)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(Wu.upload(G,rl(Kt),Mn,W),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&ze.setValue(G,"center",Z.center),ze.setValue(G,"modelViewMatrix",Z.modelViewMatrix),ze.setValue(G,"normalMatrix",Z.normalMatrix),ze.setValue(G,"modelMatrix",Z.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const En=it.uniformsGroups;for(let bn=0,Is=En.length;bn<Is;bn++){const xi=En[bn];Mt.update(xi,Sn),Mt.bind(xi,Sn)}}return Sn}function Xr(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function ya(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return nt},this.getRenderTarget=function(){return st},this.setRenderTargetTextures=function(A,q,rt){const it=E.get(A);it.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,it.__autoAllocateDepthBuffer===!1&&(it.__useRenderToTexture=!1),E.get(A.texture).__webglTexture=q,E.get(A.depthTexture).__webglTexture=it.__autoAllocateDepthBuffer?void 0:rt,it.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const rt=E.get(A);rt.__webglFramebuffer=q,rt.__useDefaultFramebuffer=q===void 0};const Ma=G.createFramebuffer();this.setRenderTarget=function(A,q=0,rt=0){st=A,k=q,nt=rt;let it=null,Z=!1,Nt=!1;if(A){const Ot=E.get(A);if(Ot.__useDefaultFramebuffer!==void 0){Yt.bindFramebuffer(G.FRAMEBUFFER,Ot.__webglFramebuffer),z.copy(A.viewport),O.copy(A.scissor),j=A.scissorTest,Yt.viewport(z),Yt.scissor(O),Yt.setScissorTest(j),mt=-1;return}else if(Ot.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Ot.__hasExternalTextures)W.rebindTextures(A,E.get(A.texture).__webglTexture,E.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const $t=A.depthTexture;if(Ot.__boundDepthTexture!==$t){if($t!==null&&E.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Vt=A.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Nt=!0);const Wt=E.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Wt[q])?it=Wt[q][rt]:it=Wt[q],Z=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?it=E.get(A).__webglMultisampledFramebuffer:Array.isArray(Wt)?it=Wt[rt]:it=Wt,z.copy(A.viewport),O.copy(A.scissor),j=A.scissorTest}else z.copy(et).multiplyScalar(vt).floor(),O.copy(lt).multiplyScalar(vt).floor(),j=wt;if(rt!==0&&(it=Ma),Yt.bindFramebuffer(G.FRAMEBUFFER,it)&&Yt.drawBuffers(A,it),Yt.viewport(z),Yt.scissor(O),Yt.setScissorTest(j),Z){const Ot=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Ot.__webglTexture,rt)}else if(Nt){const Ot=q;for(let Vt=0;Vt<A.textures.length;Vt++){const Wt=E.get(A.textures[Vt]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Vt,Wt.__webglTexture,rt,Ot)}}else if(A!==null&&rt!==0){const Ot=E.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Ot.__webglTexture,rt)}mt=-1},this.readRenderTargetPixels=function(A,q,rt,it,Z,Nt,Ht,Ot=0){if(!(A&&A.isWebGLRenderTarget)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);try{const Wt=A.textures[Ot],$t=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable($t)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(qt)){Re("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-it&&rt>=0&&rt<=A.height-Z&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(q,rt,it,Z,Tt.convert($t),Tt.convert(qt),Nt))}finally{const Wt=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,Wt)}}},this.readRenderTargetPixelsAsync=async function(A,q,rt,it,Z,Nt,Ht,Ot=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=E.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ht!==void 0&&(Vt=Vt[Ht]),Vt)if(q>=0&&q<=A.width-it&&rt>=0&&rt<=A.height-Z){Yt.bindFramebuffer(G.FRAMEBUFFER,Vt);const Wt=A.textures[Ot],$t=Wt.format,qt=Wt.type;if(!Ne.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const te=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.bufferData(G.PIXEL_PACK_BUFFER,Nt.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Ot),G.readPixels(q,rt,it,Z,Tt.convert($t),Tt.convert(qt),0);const we=st!==null?E.get(st).__webglFramebuffer:null;Yt.bindFramebuffer(G.FRAMEBUFFER,we);const Ze=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Iy(G,Ze,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,te),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Nt),G.deleteBuffer(te),G.deleteSync(Ze),Nt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,rt=0){const it=Math.pow(2,-rt),Z=Math.floor(A.image.width*it),Nt=Math.floor(A.image.height*it),Ht=q!==null?q.x:0,Ot=q!==null?q.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,rt,0,0,Ht,Ot,Z,Nt),Yt.unbindTexture()};const is=G.createFramebuffer(),Ea=G.createFramebuffer();this.copyTextureToTexture=function(A,q,rt=null,it=null,Z=0,Nt=null){Nt===null&&(Z!==0?(Qo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Nt=Z,Z=0):Nt=0);let Ht,Ot,Vt,Wt,$t,qt,te,we,Ze;const Xe=A.isCompressedTexture?A.mipmaps[Nt]:A.image;if(rt!==null)Ht=rt.max.x-rt.min.x,Ot=rt.max.y-rt.min.y,Vt=rt.isBox3?rt.max.z-rt.min.z:1,Wt=rt.min.x,$t=rt.min.y,qt=rt.isBox3?rt.min.z:0;else{const dn=Math.pow(2,-Z);Ht=Math.floor(Xe.width*dn),Ot=Math.floor(Xe.height*dn),A.isDataArrayTexture?Vt=Xe.depth:A.isData3DTexture?Vt=Math.floor(Xe.depth*dn):Vt=1,Wt=0,$t=0,qt=0}it!==null?(te=it.x,we=it.y,Ze=it.z):(te=0,we=0,Ze=0);const Le=Tt.convert(q.format),Kt=Tt.convert(q.type);let De;q.isData3DTexture?(W.setTexture3D(q,0),De=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),De=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),De=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const se=G.getParameter(G.UNPACK_ROW_LENGTH),Sn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),qi=G.getParameter(G.UNPACK_SKIP_PIXELS),yn=G.getParameter(G.UNPACK_SKIP_ROWS),si=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Xe.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Xe.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Wt),G.pixelStorei(G.UNPACK_SKIP_ROWS,$t),G.pixelStorei(G.UNPACK_SKIP_IMAGES,qt);const ze=A.isDataArrayTexture||A.isData3DTexture,Mn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const dn=E.get(A),En=E.get(q),bn=E.get(dn.__renderTarget),Is=E.get(En.__renderTarget);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,bn.__webglFramebuffer),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Is.__webglFramebuffer);for(let xi=0;xi<Vt;xi++)ze&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(A).__webglTexture,Z,qt+xi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,E.get(q).__webglTexture,Nt,Ze+xi)),G.blitFramebuffer(Wt,$t,Ht,Ot,te,we,Ht,Ot,G.DEPTH_BUFFER_BIT,G.NEAREST);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Z!==0||A.isRenderTargetTexture||E.has(A)){const dn=E.get(A),En=E.get(q);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,is),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ea);for(let bn=0;bn<Vt;bn++)ze?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,dn.__webglTexture,Z,qt+bn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,dn.__webglTexture,Z),Mn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,En.__webglTexture,Nt,Ze+bn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,En.__webglTexture,Nt),Z!==0?G.blitFramebuffer(Wt,$t,Ht,Ot,te,we,Ht,Ot,G.COLOR_BUFFER_BIT,G.NEAREST):Mn?G.copyTexSubImage3D(De,Nt,te,we,Ze+bn,Wt,$t,Ht,Ot):G.copyTexSubImage2D(De,Nt,te,we,Wt,$t,Ht,Ot);Yt.bindFramebuffer(G.READ_FRAMEBUFFER,null),Yt.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Mn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(De,Nt,te,we,Ze,Ht,Ot,Vt,Le,Kt,Xe.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(De,Nt,te,we,Ze,Ht,Ot,Vt,Le,Xe.data):G.texSubImage3D(De,Nt,te,we,Ze,Ht,Ot,Vt,Le,Kt,Xe):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Nt,te,we,Ht,Ot,Le,Kt,Xe.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Nt,te,we,Xe.width,Xe.height,Le,Xe.data):G.texSubImage2D(G.TEXTURE_2D,Nt,te,we,Ht,Ot,Le,Kt,Xe);G.pixelStorei(G.UNPACK_ROW_LENGTH,se),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Sn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qi),G.pixelStorei(G.UNPACK_SKIP_ROWS,yn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,si),Nt===0&&q.generateMipmaps&&G.generateMipmap(De),Yt.unbindTexture()},this.initRenderTarget=function(A){E.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Yt.unbindTexture()},this.resetState=function(){k=0,nt=0,st=null,Yt.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),i.unpackColorSpace=be._getUnpackColorSpace()}}const KA="/shruti-forever/assets/AUD-20260130-WA0014-Bo14GGQK.mp3",Wh=({isBirthday:r,timeUntilBirthday:t})=>r?yt.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-600 via-purple-600 to-rose-600 text-white py-6 shadow-2xl animate-pulse",children:yt.jsxs("div",{className:"text-center",children:[yt.jsx("div",{className:"flex justify-center gap-4 mb-2 text-4xl",children:"🎂 🎉 🎈 🎊 🎁"}),yt.jsx("h2",{className:"text-4xl font-bold mb-2",children:"🎉 HAPPY BIRTHDAY, SHRUTIIIIIIIIIII! 🎉"}),yt.jsx("p",{className:"text-xl",children:"Today is YOUR special day! You deserve all the happiness in the world! 💕"}),yt.jsx("p",{className:"text-lg mt-2 italic",children:"And I can't wait to celebrate many more birthdays with you... ✨"})]})}):t?yt.jsx("div",{className:"fixed top-0 left-0 right-0 z-50 bg-linear-to-r from-pink-500 via-rose-500 to-purple-500 text-white py-4 shadow-lg",children:yt.jsxs("div",{className:"text-center",children:[yt.jsx("p",{className:"text-sm font-semibold mb-2",children:"🎂 Countdown to Shrutiiiiiiiiiii's Special Day 🎂"}),yt.jsxs("div",{className:"flex justify-center gap-4 text-2xl font-bold",children:[yt.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20",children:[yt.jsx("div",{children:t.days}),yt.jsx("div",{className:"text-xs font-normal",children:"Days"})]}),yt.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20",children:[yt.jsx("div",{children:t.hours}),yt.jsx("div",{className:"text-xs font-normal",children:"Hours"})]}),yt.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20",children:[yt.jsx("div",{children:t.minutes}),yt.jsx("div",{className:"text-xs font-normal",children:"Minutes"})]}),yt.jsxs("div",{className:"bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2 min-w-20",children:[yt.jsx("div",{children:t.seconds}),yt.jsx("div",{className:"text-xs font-normal",children:"Seconds"})]})]}),yt.jsx("p",{className:"text-sm mt-2 italic",children:"Until March 29th - The day an angel was born 👑"})]})}):null,Vo=[{title:"Hey Shrutiiiiiiiiiii... 🌹",question:"From the moment I met you, something shifted in my universe. Your smile became my sunrise, your laugh became my favorite sound. I know I've made mistakes, but my heart has never stopped beating for you. Can I share what's truly in my heart?",yesText:"I'm listening...",noText:"No",emoji:"💐",detail:"Every single day without you, Shruti, has taught me something precious: how much you mean to me, how empty life feels without your presence, and how deeply I want to make things right."},{title:"The Moments I Cherish 💫",question:"Remember our late-night conversations, Shruti? The way we could talk for hours about everything and nothing? I miss the way you understand me like no one else ever has. I miss being your person, and I miss you being mine. Those weren't just moments—they were the happiest chapters of my life.",yesText:"I remember too...",noText:"Not sure",emoji:"✨",detail:"I've replayed every laugh, every inside joke, every comfortable silence in my mind a thousand times. These memories aren't just the past—they're the blueprint of the future I want to build with you, Shrutiiiiiiiiiii."},{title:"What I've Learned 💭",question:"I've spent so much time reflecting on us, on me, on what went wrong. I've learned that loving someone means growing with them, not taking them for granted. I've learned that you deserve someone who shows up every single day. I want to be that person for you, Shruti—not the person I was, but the person I'm becoming for you.",yesText:"Tell me more...",noText:"I don't know",emoji:"🌱",detail:"Time apart has given me clarity. I see now where I fell short, where I could have loved you better. Growth isn't just words—I've changed, and I'm ready to prove it to you every day."},{title:"My Deepest Truth, Shrutiiiiiiiiiii 💕",question:"You're not just someone I love—you're the person I want to choose every single day for the rest of my life. I want to be there for your victories and hold you through your struggles. I want to build dreams with you, laugh until we cry, and create a love story that's uniquely ours. My heart has always been yours, Shruti.",yesText:"This means so much...",noText:"Maybe not",emoji:"💖",detail:"Love isn't perfect, but it's real. And what we have—what we HAD—is worth fighting for. I'm not asking you to forget the past. I'm asking you to let me be part of your future."},{title:"A Promise From My Soul 🌟",question:"If you give me another chance, Shruti, I promise to love you intentionally. To communicate better. To prioritize us. To show you every day that choosing me wasn't a mistake. I'm not perfect, but I'm perfectly certain about you. Will you let me love you the way you've always deserved?",yesText:"I need to think...",noText:"Still no",emoji:"🙏",detail:"I'm laying my heart completely bare here, Shrutiiiiiiiiiii. No games, no pretense—just raw, honest love. You are my person, and I want to spend forever proving that to you."},{title:"This Is Everything 💝",question:"I'm standing here, vulnerable and hopeful, asking you to take a chance on us again, Shruti. On the love that made us both better. On the connection that nothing else has ever matched. I believe in us. Do you? Will you be mine again—not just for today, but for all our tomorrows?",yesText:"YES, I will! 💕",noText:"Nope",emoji:"🌹",detail:"This isn't just about romance—it's about partnership, friendship, and choosing each other through everything. You're my always, Shrutiiiiiiiiiii, and I'm ready to be yours."}],qh=[{title:"Our First Conversation 💬",text:"I still remember exactly how it felt talking to you for the first time, Shruti. Something just clicked.",icon:"✨"},{title:"That Perfect Day 🌅",text:"When we spent the whole day together and time just disappeared. I never wanted it to end, Shrutiiiiiiiiiii.",icon:"⏰"},{title:"Your Laugh 😊",text:"The first time I made you laugh so hard you couldn't breathe, Shruti—I knew I wanted to hear that sound forever.",icon:"🎵"},{title:"Midnight Talks 🌙",text:"Those 3 AM conversations where we shared our dreams, fears, and everything in between. You truly saw me, Shruti.",icon:"💫"},{title:"The Little Things 🌸",text:"How you'd smile at me across the room, Shrutiiiiiiiiiii. Your hand in mine. The way you said my name. Everything mattered.",icon:"💗"},{title:"Our Song 🎶",text:"Every time I hear it, I'm transported back to us, Shruti. Dancing in your room, the world fading away.",icon:"🎧"},{title:"The Way You Looked at Me 👀",text:"That moment when our eyes met and everything else disappeared, Shrutiiiiiiiiiii. I felt truly seen.",icon:"💞"},{title:"Rainy Day Together ☔",text:"Stuck inside, just us, talking about everything. That's when I knew you were special, Shruti.",icon:"🌧️"},{title:"Your Comfort 🤗",text:"When I was at my lowest, you were there, Shrutiiiiiiiiiii. Your presence was my safe haven.",icon:"🏠"},{title:"Silly Moments 🤪",text:"All those goofy times, inside jokes only we understood, Shruti. We were perfectly weird together.",icon:"😂"}],Jv=["No","Are you absolutely sure?","Really, Shruti?? 🥺","Please think about us...","Don't give up on us, Shrutiiiiiiiiiii 💐","I'm pouring my heart out!","Give me one more chance, Shruti 😰","You're my everything 💔","I've changed, I promise 🌹","I'm literally on my knees, Shrutiiiiiiiiiii! 🙏","My heart is breaking 😢","Please, I'm begging you, Shruti...","I can't lose you again 💔","You're worth fighting for, Shrutiiiiiiiiiii! 🌟","Just hear me out, Shruti 💝","This could be our second chance 🌈","Don't let us end like this 🥀","I'm not giving up on us 💪","You mean the world to me, Shrutiiiiiiiiiii 🌍","Please don't walk away 🚶","I'll wait forever if I have to ⏳","My love for you is real, Shruti 💯","Can't we try again? 🔄","You're my soulmate, Shrutiiiiiiiiiii 👫","I'm lost without you 🧭","Give love another chance 💘","I'll prove myself to you, Shruti 📝","We belong together 🧩","My heart only beats for you, Shrutiiiiiiiiiii 💓","Please reconsider 🤔"],QA=r=>{const[t,i]=hn.useState(null),[s,l]=hn.useState(!1);return hn.useEffect(()=>{const u=()=>{const d=new Date,m=d.getFullYear();let p=new Date(m,2,29);if(d>p&&(p=new Date(m+1,2,29)),d.getDate()===29&&d.getMonth()===2)return l(!0),r(),null;l(!1);const g=p.getTime()-d.getTime(),x=Math.floor(g/(1e3*60*60*24)),y=Math.floor(g%(1e3*60*60*24)/(1e3*60*60)),b=Math.floor(g%(1e3*60*60)/(1e3*60)),C=Math.floor(g%(1e3*60)/1e3);return{days:x,hours:y,minutes:b,seconds:C}},f=setInterval(()=>{const d=u();i(d)},1e3);return()=>clearInterval(f)},[r]),{timeUntilBirthday:t,isBirthday:s}},$v=r=>Array.from({length:r},(t,i)=>({id:i,left:Math.random()*100,delay:Math.random()*3,duration:3+Math.random()*2,rotation:Math.random()*360,color:["#FF69B4","#FF1493","#FFB6C1","#FFC0CB","#FF6347","#FFD700","#9370DB","#BA55D3"][Math.floor(Math.random()*8)],shape:["●","■","▲","★","♥"][Math.floor(Math.random()*5)]})),JA=()=>{const[r,t]=hn.useState(!1),[i,s]=hn.useState(!1),[l,u]=hn.useState(Array(14).fill(!0)),[f,d]=hn.useState(0),[m,p]=hn.useState({x:0,y:0}),[v,g]=hn.useState(1),[x,y]=hn.useState(0),[b,C]=hn.useState([]),[M,S]=hn.useState(!1),[P,N]=hn.useState(!1),[U,F]=hn.useState(0),[H,I]=hn.useState([]),Q=hn.useRef(null),R=hn.useRef(null),w=hn.useCallback(()=>{const O=$v(150);I(O);const j=setInterval(()=>{const dt=$v(50).map((ft,D)=>({...ft,id:Date.now()+D,delay:0}));I(ft=>[...ft,...dt]),setTimeout(()=>{I(ft=>ft.filter(D=>!dt.find(J=>J.id===D.id)))},5e3)},2e3);setTimeout(()=>clearInterval(j),6e4)},[]),{timeUntilBirthday:k,isBirthday:nt}=QA(w),st=async()=>{s(!0);const O=new Audio(KA);O.volume=.15,O.loop=!0,O.play().catch(dt=>console.log("Audio play failed:",dt));try{await document.documentElement.requestFullscreen()}catch{console.log("Fullscreen not supported")}[0,13,1,12,2,11,3,10,4,9,5,8,6,7].forEach((dt,ft)=>{setTimeout(()=>{u(D=>{const J=[...D];return J[dt]=!1,J})},800+ft*150)}),setTimeout(()=>{s(!1),t(!0)},3e3)};hn.useEffect(()=>{if(!Q.current)return;const O=Q.current,j=new uM,dt=new ni(75,window.innerWidth/window.innerHeight,.1,1e3),ft=new ZA({alpha:!0,antialias:!0});ft.setSize(window.innerWidth,window.innerHeight),ft.setClearColor(0,0),O.appendChild(ft.domElement);const D=new U_;D.moveTo(0,0),D.quadraticCurveTo(.5,.5,.3,1),D.quadraticCurveTo(0,.8,-.3,1),D.quadraticCurveTo(-.5,.5,0,0);const J=new sp(D),vt=[];for(let Rt=0;Rt<60;Rt++){const pe=Math.random()<.7?.95+Math.random()*.05:.85,Ye=new ep({color:new Oe().setHSL(pe,.8,.5),side:Pi,transparent:!0,opacity:.6+Math.random()*.3}),ie=new Vi(J,Ye);ie.position.x=(Math.random()-.5)*30,ie.position.y=(Math.random()-.5)*30,ie.position.z=(Math.random()-.5)*30,ie.rotation.x=Math.random()*Math.PI,ie.rotation.y=Math.random()*Math.PI,ie.rotation.z=Math.random()*Math.PI,ie.scale.set(.5+Math.random()*.5,.5+Math.random()*.5,1),ie.userData={speedY:Math.random()*.02+.005,speedRotationX:(Math.random()-.5)*.03,speedRotationY:(Math.random()-.5)*.03,speedRotationZ:(Math.random()-.5)*.03,amplitude:Math.random()*2,frequency:Math.random()*.02,offset:Math.random()*Math.PI*2},j.add(ie),vt.push(ie)}const At=new JM(16777215,.4);j.add(At);const Ft=new Rv(16738740,1.5,100);Ft.position.set(5,5,10),j.add(Ft);const et=new Rv(16716947,1,100);et.position.set(-5,-5,10),j.add(et),dt.position.z=15,R.current={scene:j,camera:dt,renderer:ft,petals:vt};let lt=0;const wt=()=>{requestAnimationFrame(wt),lt+=.01,vt.forEach(Rt=>{Rt.position.y+=Rt.userData.speedY,Rt.position.x+=Math.sin(lt*Rt.userData.frequency+Rt.userData.offset)*Rt.userData.amplitude*.02,Rt.rotation.x+=Rt.userData.speedRotationX,Rt.rotation.y+=Rt.userData.speedRotationY,Rt.rotation.z+=Rt.userData.speedRotationZ,Rt.position.y>15&&(Rt.position.y=-15,Rt.position.x=(Math.random()-.5)*30)}),ft.render(j,dt)};wt();const Gt=()=>{dt.aspect=window.innerWidth/window.innerHeight,dt.updateProjectionMatrix(),ft.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Gt),()=>{window.removeEventListener("resize",Gt),O.removeChild(ft.domElement)}},[]);const mt=()=>{if(f<Vo.length-1){U<qh.length?(N(!0),setTimeout(()=>{N(!1),d(f+1),F(U+1)},3e3)):d(f+1),g(v+.2),p({x:0,y:0}),y(0);const O=Array.from({length:15},(j,dt)=>({id:Date.now()+dt,left:Math.random()*100,delay:dt*.06}));C(j=>[...j,...O]),setTimeout(()=>{C(j=>j.filter(dt=>!O.find(ft=>ft.id===dt.id)))},3e3)}else d(f+1),S(!0)},ct=()=>{y(x+1);const O=(Math.random()-.5)*300,j=(Math.random()-.5)*300;p({x:O,y:j});const dt=Array.from({length:3},(ft,D)=>({id:Date.now()+D+1e3,left:45+Math.random()*10,delay:D*.1}));C(ft=>[...ft,...dt]),setTimeout(()=>{C(ft=>ft.filter(D=>!dt.find(J=>J.id===D.id)))},2e3)};if(i){const O=["#ff0066","#ff1a75","#ff3384","#ff4d94","#ff66a3","#ff80b2","#ff99c2","#ffb3d1","#ffcce0","#e6005c","#cc0052","#b30047","#99003d","#800033"];return yt.jsx("div",{className:"fixed inset-0 flex items-center justify-center bg-black overflow-hidden",children:yt.jsx("div",{className:"flex gap-1 h-screen items-center",children:l.map((j,dt)=>j&&yt.jsx("div",{className:"h-full flex items-center justify-center text-white font-bold text-4xl",style:{backgroundColor:O[dt],width:"calc(100vw / 14)",writingMode:"vertical-rl",textOrientation:"upright"},children:"I LOVE YOU SHRUTI"},dt))})})}if(!r)return yt.jsx("div",{className:"min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4",children:yt.jsxs("div",{className:"text-center",children:[yt.jsx("div",{className:"text-8xl mb-8 animate-bounce",children:"💝"}),yt.jsx("button",{onClick:st,className:"px-12 py-6 bg-linear-to-r from-pink-500 to-purple-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:scale-110 transition-transform",children:"Click to Start"})]})});if(P&&U<qh.length){const O=qh[U];return yt.jsxs("div",{className:"min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4",children:[yt.jsx(Wh,{isBirthday:nt,timeUntilBirthday:k}),yt.jsx("div",{ref:Q,className:"fixed inset-0 pointer-events-none"}),yt.jsxs("div",{className:"bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 max-w-2xl text-center transform animate-fadeIn border-4 border-pink-200",style:{marginTop:nt?"120px":"80px"},children:[yt.jsx("div",{className:"text-7xl mb-6 animate-bounce",children:O.icon}),yt.jsx("h2",{className:"text-4xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 to-purple-600 mb-4",children:O.title}),yt.jsxs("p",{className:"text-xl text-gray-700 leading-relaxed italic",children:['"',O.text,'"']}),yt.jsx("div",{className:"mt-8 text-pink-500",children:yt.jsxs("div",{className:"flex justify-center gap-2",children:[yt.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-pulse"}),yt.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-pulse",style:{animationDelay:"0.2s"}}),yt.jsx("div",{className:"w-2 h-2 bg-pink-500 rounded-full animate-pulse",style:{animationDelay:"0.4s"}})]})})]})]})}if(f>=Vo.length)return yt.jsxs("div",{className:"min-h-screen bg-linear-to-br from-pink-100 via-rose-100 to-purple-100 flex flex-col items-center justify-center p-4 overflow-hidden relative",children:[yt.jsx(Wh,{isBirthday:nt,timeUntilBirthday:k}),yt.jsx("div",{ref:Q,className:"fixed inset-0 pointer-events-none"}),M&&yt.jsxs(yt.Fragment,{children:[yt.jsx("div",{className:"firework",style:{left:"20%",top:"20%"}}),yt.jsx("div",{className:"firework",style:{left:"80%",top:"30%"}}),yt.jsx("div",{className:"firework",style:{left:"50%",top:"40%"}}),yt.jsx("div",{className:"firework",style:{left:"30%",top:"60%"}}),yt.jsx("div",{className:"firework",style:{left:"70%",top:"70%"}})]}),H.map(O=>yt.jsx("div",{className:"confetti-piece",style:{left:`${O.left}%`,animationDelay:`${O.delay}s`,animationDuration:`${O.duration}s`,transform:`rotate(${O.rotation}deg)`,color:O.color},children:O.shape},O.id)),yt.jsxs("div",{className:"text-center space-y-8 animate-fadeIn max-w-4xl z-10",style:{marginTop:nt?"100px":"60px"},children:[yt.jsx("div",{className:"text-9xl animate-bounce mb-4",children:"💍✨"}),yt.jsx("h1",{className:"text-7xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-6 animate-pulse",children:"Shrutiiiiiiiiiii Said YES! 🎉"}),yt.jsxs("div",{className:"bg-white/80 backdrop-blur-lg rounded-3xl p-12 shadow-2xl border-4 border-pink-300",children:[yt.jsx("p",{className:"text-3xl text-gray-800 mb-6 font-semibold",children:"You just made me the happiest person alive, Shruti! 💕"}),yt.jsx("p",{className:"text-2xl text-gray-700 mb-6",children:"I promise to love you with everything I have, every single day, Shrutiiiiiiiiiii."}),yt.jsx("p",{className:"text-xl text-gray-600 italic",children:"Thank you for giving us another chance. I won't let you down. 🌹"}),nt&&yt.jsxs("div",{className:"mt-8 p-6 bg-linear-to-r from-pink-200 via-purple-200 to-rose-200 rounded-2xl border-2 border-pink-400",children:[yt.jsx("p",{className:"text-2xl text-gray-800 font-bold mb-2",children:"🎂 And Happy Birthday, Shrutiiiiiiiiiii! 🎂"}),yt.jsx("p",{className:"text-lg text-gray-700",children:"What a perfect day to start our new journey together! 🎉"})]})]}),yt.jsxs("div",{className:"flex justify-center gap-6 text-6xl my-8",children:[yt.jsx("span",{className:"animate-bounce",children:"🌹"}),yt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.1s"},children:"💐"}),yt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.2s"},children:"🌺"}),yt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.3s"},children:"💝"}),yt.jsx("span",{className:"animate-bounce",style:{animationDelay:"0.4s"},children:"🌸"})]}),yt.jsx("p",{className:"text-2xl text-purple-700 font-bold animate-pulse",children:"This is just the beginning of our beautiful forever, Shrutiiiiiiiiiii... ✨"}),yt.jsxs("div",{className:"mt-8 p-6 bg-linear-to-r from-pink-200 to-purple-200 rounded-2xl",children:[yt.jsx("p",{className:"text-lg text-gray-800 mb-2",children:`"Love is not about how many days, months, or years you've been together.`}),yt.jsx("p",{className:"text-lg text-gray-800",children:`It's about how much you love each other every single day."`}),yt.jsx("p",{className:"text-md text-gray-600 mt-4 italic",children:"- And I choose to love you, today and always, Shruti 💕"})]})]}),b.map(O=>yt.jsx("div",{className:"falling-petal",style:{left:`${O.left}%`,animationDelay:`${O.delay}s`},children:"🌹"},O.id))]});const z=Vo[f];return yt.jsxs("div",{className:"min-h-screen bg-linear-to-br from-rose-50 via-pink-50 to-purple-50 flex items-center justify-center p-4 overflow-hidden relative",children:[yt.jsx(Wh,{isBirthday:nt,timeUntilBirthday:k}),yt.jsx("div",{ref:Q,className:"fixed inset-0 pointer-events-none z-0"}),yt.jsx("div",{className:"stars"}),yt.jsx("div",{className:"stars2"}),yt.jsx("div",{className:"stars3"}),H.map(O=>yt.jsx("div",{className:"confetti-piece",style:{left:`${O.left}%`,animationDelay:`${O.delay}s`,animationDuration:`${O.duration}s`,transform:`rotate(${O.rotation}deg)`,color:O.color},children:O.shape},O.id)),b.map(O=>yt.jsx("div",{className:"falling-petal",style:{left:`${O.left}%`,animationDelay:`${O.delay}s`},children:"🌹"},O.id)),yt.jsxs("div",{className:"max-w-4xl w-full z-10",style:{marginTop:nt?"100px":"60px"},children:[yt.jsxs("div",{className:"text-center mb-12",children:[yt.jsx("div",{className:"text-8xl mb-6 animate-float",children:z.emoji}),yt.jsx("h1",{className:"text-6xl font-bold text-transparent bg-clip-text bg-linear-to-r from-pink-600 via-rose-600 to-purple-600 mb-8 animate-pulse drop-shadow-lg",children:z.title})]}),yt.jsxs("div",{className:"bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-12 mb-12 border-4 border-pink-200 transform hover:scale-105 transition-transform duration-300",children:[yt.jsx("p",{className:"text-2xl text-gray-800 mb-8 leading-relaxed text-center font-medium",children:z.question}),z.detail&&yt.jsx("div",{className:"mt-6 p-6 bg-linear-to-r from-pink-100 to-purple-100 rounded-2xl border-2 border-pink-300",children:yt.jsx("p",{className:"text-lg text-gray-700 italic leading-relaxed",children:z.detail})}),yt.jsxs("div",{className:"flex gap-6 mt-10 justify-center flex-wrap",children:[yt.jsxs("button",{onClick:mt,className:"px-12 py-6 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full text-2xl font-bold hover:from-pink-600 hover:to-rose-600 transform hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-pink-500/50 flex items-center gap-3",style:{transform:`scale(${v})`},children:[z.yesText," 💖"]}),yt.jsx("button",{onClick:ct,className:"px-10 py-6 bg-gray-300 text-gray-700 rounded-full text-xl font-bold hover:bg-gray-400 transform transition-all duration-200 shadow-lg relative",style:{transform:`translate(${m.x}px, ${m.y}px)`,transition:"transform 0.3s ease-out"},children:Jv[Math.min(x,Jv.length-1)]})]}),x>5&&yt.jsx("div",{className:"mt-8 text-center",children:yt.jsx("p",{className:"text-xl text-pink-600 font-bold animate-pulse",children:"Please, Shrutiiiiiiiiiii... I'm being completely honest with you 💔"})})]}),yt.jsx("div",{className:"flex justify-center gap-4 mb-8",children:Vo.map((O,j)=>yt.jsx("div",{className:`h-3 rounded-full transition-all duration-500 ${j===f?"w-16 bg-linear-to-r from-pink-500 to-rose-500 shadow-lg":j<f?"w-10 bg-pink-400":"w-10 bg-gray-300"}`},j))}),yt.jsxs("div",{className:"text-center mb-8",children:[yt.jsxs("p",{className:"text-lg text-gray-600",children:["Step ",f+1," of ",Vo.length]}),yt.jsx("p",{className:"text-sm text-pink-600 mt-2 italic",children:"Each step brings us closer to our forever, Shruti ✨"})]})]}),yt.jsx("div",{className:"fixed top-24 left-8 text-6xl animate-float opacity-70",children:"🌹"}),yt.jsx("div",{className:"fixed top-24 right-8 text-6xl animate-float opacity-70",style:{animationDelay:"1s"},children:"🌹"}),yt.jsx("div",{className:"fixed bottom-8 left-8 text-6xl animate-float opacity-70",style:{animationDelay:"2s"},children:"💐"}),yt.jsx("div",{className:"fixed bottom-8 right-8 text-6xl animate-float opacity-70",style:{animationDelay:"1.5s"},children:"💐"})]})};ny.createRoot(document.getElementById("root")).render(yt.jsx(hn.StrictMode,{children:yt.jsx(JA,{})}));

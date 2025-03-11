(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const d of l)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&s(f)}).observe(document,{childList:!0,subtree:!0});function o(l){const d={};return l.integrity&&(d.integrity=l.integrity),l.referrerPolicy&&(d.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?d.credentials="include":l.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function s(l){if(l.ep)return;l.ep=!0;const d=o(l);fetch(l.href,d)}})();function Cm(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Iu={exports:{}},pi={},zu={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jp;function v0(){if(Jp)return me;Jp=1;var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),f=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),g=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),E=Symbol.iterator;function T(k){return k===null||typeof k!="object"?null:(k=E&&k[E]||k["@@iterator"],typeof k=="function"?k:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function S(k,M,ce){this.props=k,this.context=M,this.refs=b,this.updater=ce||N}S.prototype.isReactComponent={},S.prototype.setState=function(k,M){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,M,"setState")},S.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function I(){}I.prototype=S.prototype;function H(k,M,ce){this.props=k,this.context=M,this.refs=b,this.updater=ce||N}var L=H.prototype=new I;L.constructor=H,w(L,S.prototype),L.isPureReactComponent=!0;var z=Array.isArray,R=Object.prototype.hasOwnProperty,B={current:null},W={key:!0,ref:!0,__self:!0,__source:!0};function te(k,M,ce){var de,pe={},he=null,Se=null;if(M!=null)for(de in M.ref!==void 0&&(Se=M.ref),M.key!==void 0&&(he=""+M.key),M)R.call(M,de)&&!W.hasOwnProperty(de)&&(pe[de]=M[de]);var be=arguments.length-2;if(be===1)pe.children=ce;else if(1<be){for(var Ce=Array(be),rt=0;rt<be;rt++)Ce[rt]=arguments[rt+2];pe.children=Ce}if(k&&k.defaultProps)for(de in be=k.defaultProps,be)pe[de]===void 0&&(pe[de]=be[de]);return{$$typeof:r,type:k,key:he,ref:Se,props:pe,_owner:B.current}}function se(k,M){return{$$typeof:r,type:k.type,key:M,ref:k.ref,props:k.props,_owner:k._owner}}function J(k){return typeof k=="object"&&k!==null&&k.$$typeof===r}function le(k){var M={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return M[ce]})}var ye=/\/+/g;function ve(k,M){return typeof k=="object"&&k!==null&&k.key!=null?le(""+k.key):M.toString(36)}function Pe(k,M,ce,de,pe){var he=typeof k;(he==="undefined"||he==="boolean")&&(k=null);var Se=!1;if(k===null)Se=!0;else switch(he){case"string":case"number":Se=!0;break;case"object":switch(k.$$typeof){case r:case n:Se=!0}}if(Se)return Se=k,pe=pe(Se),k=de===""?"."+ve(Se,0):de,z(pe)?(ce="",k!=null&&(ce=k.replace(ye,"$&/")+"/"),Pe(pe,M,ce,"",function(rt){return rt})):pe!=null&&(J(pe)&&(pe=se(pe,ce+(!pe.key||Se&&Se.key===pe.key?"":(""+pe.key).replace(ye,"$&/")+"/")+k)),M.push(pe)),1;if(Se=0,de=de===""?".":de+":",z(k))for(var be=0;be<k.length;be++){he=k[be];var Ce=de+ve(he,be);Se+=Pe(he,M,ce,Ce,pe)}else if(Ce=T(k),typeof Ce=="function")for(k=Ce.call(k),be=0;!(he=k.next()).done;)he=he.value,Ce=de+ve(he,be++),Se+=Pe(he,M,ce,Ce,pe);else if(he==="object")throw M=String(k),Error("Objects are not valid as a React child (found: "+(M==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":M)+"). If you meant to render a collection of children, use an array instead.");return Se}function je(k,M,ce){if(k==null)return k;var de=[],pe=0;return Pe(k,de,"","",function(he){return M.call(ce,he,pe++)}),de}function Te(k){if(k._status===-1){var M=k._result;M=M(),M.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=M)}if(k._status===1)return k._result.default;throw k._result}var Ee={current:null},q={transition:null},ne={ReactCurrentDispatcher:Ee,ReactCurrentBatchConfig:q,ReactCurrentOwner:B};function K(){throw Error("act(...) is not supported in production builds of React.")}return me.Children={map:je,forEach:function(k,M,ce){je(k,function(){M.apply(this,arguments)},ce)},count:function(k){var M=0;return je(k,function(){M++}),M},toArray:function(k){return je(k,function(M){return M})||[]},only:function(k){if(!J(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},me.Component=S,me.Fragment=o,me.Profiler=l,me.PureComponent=H,me.StrictMode=s,me.Suspense=g,me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ne,me.act=K,me.cloneElement=function(k,M,ce){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var de=w({},k.props),pe=k.key,he=k.ref,Se=k._owner;if(M!=null){if(M.ref!==void 0&&(he=M.ref,Se=B.current),M.key!==void 0&&(pe=""+M.key),k.type&&k.type.defaultProps)var be=k.type.defaultProps;for(Ce in M)R.call(M,Ce)&&!W.hasOwnProperty(Ce)&&(de[Ce]=M[Ce]===void 0&&be!==void 0?be[Ce]:M[Ce])}var Ce=arguments.length-2;if(Ce===1)de.children=ce;else if(1<Ce){be=Array(Ce);for(var rt=0;rt<Ce;rt++)be[rt]=arguments[rt+2];de.children=be}return{$$typeof:r,type:k.type,key:pe,ref:he,props:de,_owner:Se}},me.createContext=function(k){return k={$$typeof:f,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:d,_context:k},k.Consumer=k},me.createElement=te,me.createFactory=function(k){var M=te.bind(null,k);return M.type=k,M},me.createRef=function(){return{current:null}},me.forwardRef=function(k){return{$$typeof:p,render:k}},me.isValidElement=J,me.lazy=function(k){return{$$typeof:m,_payload:{_status:-1,_result:k},_init:Te}},me.memo=function(k,M){return{$$typeof:y,type:k,compare:M===void 0?null:M}},me.startTransition=function(k){var M=q.transition;q.transition={};try{k()}finally{q.transition=M}},me.unstable_act=K,me.useCallback=function(k,M){return Ee.current.useCallback(k,M)},me.useContext=function(k){return Ee.current.useContext(k)},me.useDebugValue=function(){},me.useDeferredValue=function(k){return Ee.current.useDeferredValue(k)},me.useEffect=function(k,M){return Ee.current.useEffect(k,M)},me.useId=function(){return Ee.current.useId()},me.useImperativeHandle=function(k,M,ce){return Ee.current.useImperativeHandle(k,M,ce)},me.useInsertionEffect=function(k,M){return Ee.current.useInsertionEffect(k,M)},me.useLayoutEffect=function(k,M){return Ee.current.useLayoutEffect(k,M)},me.useMemo=function(k,M){return Ee.current.useMemo(k,M)},me.useReducer=function(k,M,ce){return Ee.current.useReducer(k,M,ce)},me.useRef=function(k){return Ee.current.useRef(k)},me.useState=function(k){return Ee.current.useState(k)},me.useSyncExternalStore=function(k,M,ce){return Ee.current.useSyncExternalStore(k,M,ce)},me.useTransition=function(){return Ee.current.useTransition()},me.version="18.3.1",me}var Zp;function As(){return Zp||(Zp=1,zu.exports=v0()),zu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var eh;function b0(){if(eh)return pi;eh=1;var r=As(),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function f(p,g,y){var m,E={},T=null,N=null;y!==void 0&&(T=""+y),g.key!==void 0&&(T=""+g.key),g.ref!==void 0&&(N=g.ref);for(m in g)s.call(g,m)&&!d.hasOwnProperty(m)&&(E[m]=g[m]);if(p&&p.defaultProps)for(m in g=p.defaultProps,g)E[m]===void 0&&(E[m]=g[m]);return{$$typeof:n,type:p,key:T,ref:N,props:E,_owner:l.current}}return pi.Fragment=o,pi.jsx=f,pi.jsxs=f,pi}var th;function _0(){return th||(th=1,Iu.exports=b0()),Iu.exports}var A=_0(),Ya={},ju={exports:{}},pt={},$u={exports:{}},Fu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nh;function E0(){return nh||(nh=1,function(r){function n(q,ne){var K=q.length;q.push(ne);e:for(;0<K;){var k=K-1>>>1,M=q[k];if(0<l(M,ne))q[k]=ne,q[K]=M,K=k;else break e}}function o(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var ne=q[0],K=q.pop();if(K!==ne){q[0]=K;e:for(var k=0,M=q.length,ce=M>>>1;k<ce;){var de=2*(k+1)-1,pe=q[de],he=de+1,Se=q[he];if(0>l(pe,K))he<M&&0>l(Se,pe)?(q[k]=Se,q[he]=K,k=he):(q[k]=pe,q[de]=K,k=de);else if(he<M&&0>l(Se,K))q[k]=Se,q[he]=K,k=he;else break e}}return ne}function l(q,ne){var K=q.sortIndex-ne.sortIndex;return K!==0?K:q.id-ne.id}if(typeof performance=="object"&&typeof performance.now=="function"){var d=performance;r.unstable_now=function(){return d.now()}}else{var f=Date,p=f.now();r.unstable_now=function(){return f.now()-p}}var g=[],y=[],m=1,E=null,T=3,N=!1,w=!1,b=!1,S=typeof setTimeout=="function"?setTimeout:null,I=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(q){for(var ne=o(y);ne!==null;){if(ne.callback===null)s(y);else if(ne.startTime<=q)s(y),ne.sortIndex=ne.expirationTime,n(g,ne);else break;ne=o(y)}}function z(q){if(b=!1,L(q),!w)if(o(g)!==null)w=!0,Te(R);else{var ne=o(y);ne!==null&&Ee(z,ne.startTime-q)}}function R(q,ne){w=!1,b&&(b=!1,I(te),te=-1),N=!0;var K=T;try{for(L(ne),E=o(g);E!==null&&(!(E.expirationTime>ne)||q&&!le());){var k=E.callback;if(typeof k=="function"){E.callback=null,T=E.priorityLevel;var M=k(E.expirationTime<=ne);ne=r.unstable_now(),typeof M=="function"?E.callback=M:E===o(g)&&s(g),L(ne)}else s(g);E=o(g)}if(E!==null)var ce=!0;else{var de=o(y);de!==null&&Ee(z,de.startTime-ne),ce=!1}return ce}finally{E=null,T=K,N=!1}}var B=!1,W=null,te=-1,se=5,J=-1;function le(){return!(r.unstable_now()-J<se)}function ye(){if(W!==null){var q=r.unstable_now();J=q;var ne=!0;try{ne=W(!0,q)}finally{ne?ve():(B=!1,W=null)}}else B=!1}var ve;if(typeof H=="function")ve=function(){H(ye)};else if(typeof MessageChannel<"u"){var Pe=new MessageChannel,je=Pe.port2;Pe.port1.onmessage=ye,ve=function(){je.postMessage(null)}}else ve=function(){S(ye,0)};function Te(q){W=q,B||(B=!0,ve())}function Ee(q,ne){te=S(function(){q(r.unstable_now())},ne)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(q){q.callback=null},r.unstable_continueExecution=function(){w||N||(w=!0,Te(R))},r.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):se=0<q?Math.floor(1e3/q):5},r.unstable_getCurrentPriorityLevel=function(){return T},r.unstable_getFirstCallbackNode=function(){return o(g)},r.unstable_next=function(q){switch(T){case 1:case 2:case 3:var ne=3;break;default:ne=T}var K=T;T=ne;try{return q()}finally{T=K}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(q,ne){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var K=T;T=q;try{return ne()}finally{T=K}},r.unstable_scheduleCallback=function(q,ne,K){var k=r.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?k+K:k):K=k,q){case 1:var M=-1;break;case 2:M=250;break;case 5:M=1073741823;break;case 4:M=1e4;break;default:M=5e3}return M=K+M,q={id:m++,callback:ne,priorityLevel:q,startTime:K,expirationTime:M,sortIndex:-1},K>k?(q.sortIndex=K,n(y,q),o(g)===null&&q===o(y)&&(b?(I(te),te=-1):b=!0,Ee(z,K-k))):(q.sortIndex=M,n(g,q),w||N||(w=!0,Te(R))),q},r.unstable_shouldYield=le,r.unstable_wrapCallback=function(q){var ne=T;return function(){var K=T;T=ne;try{return q.apply(this,arguments)}finally{T=K}}}}(Fu)),Fu}var rh;function w0(){return rh||(rh=1,$u.exports=E0()),$u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var oh;function x0(){if(oh)return pt;oh=1;var r=As(),n=w0();function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,i=1;i<arguments.length;i++)t+="&args[]="+encodeURIComponent(arguments[i]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,l={};function d(e,t){f(e,t),f(e+"Capture",t)}function f(e,t){for(l[e]=t,e=0;e<t.length;e++)s.add(t[e])}var p=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),g=Object.prototype.hasOwnProperty,y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},E={};function T(e){return g.call(E,e)?!0:g.call(m,e)?!1:y.test(e)?E[e]=!0:(m[e]=!0,!1)}function N(e,t,i,a){if(i!==null&&i.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:i!==null?!i.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function w(e,t,i,a){if(t===null||typeof t>"u"||N(e,t,i,a))return!0;if(a)return!1;if(i!==null)switch(i.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function b(e,t,i,a,u,c,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=u,this.mustUseProperty=i,this.propertyName=e,this.type=t,this.sanitizeURL=c,this.removeEmptyString=h}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){S[e]=new b(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];S[t]=new b(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){S[e]=new b(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){S[e]=new b(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){S[e]=new b(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){S[e]=new b(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){S[e]=new b(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){S[e]=new b(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){S[e]=new b(e,5,!1,e.toLowerCase(),null,!1,!1)});var I=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(I,H);S[t]=new b(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(I,H);S[t]=new b(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(I,H);S[t]=new b(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){S[e]=new b(e,1,!1,e.toLowerCase(),null,!1,!1)}),S.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){S[e]=new b(e,1,!1,e.toLowerCase(),null,!0,!0)});function L(e,t,i,a){var u=S.hasOwnProperty(t)?S[t]:null;(u!==null?u.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(w(t,i,u,a)&&(i=null),a||u===null?T(t)&&(i===null?e.removeAttribute(t):e.setAttribute(t,""+i)):u.mustUseProperty?e[u.propertyName]=i===null?u.type===3?!1:"":i:(t=u.attributeName,a=u.attributeNamespace,i===null?e.removeAttribute(t):(u=u.type,i=u===3||u===4&&i===!0?"":""+i,a?e.setAttributeNS(a,t,i):e.setAttribute(t,i))))}var z=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,R=Symbol.for("react.element"),B=Symbol.for("react.portal"),W=Symbol.for("react.fragment"),te=Symbol.for("react.strict_mode"),se=Symbol.for("react.profiler"),J=Symbol.for("react.provider"),le=Symbol.for("react.context"),ye=Symbol.for("react.forward_ref"),ve=Symbol.for("react.suspense"),Pe=Symbol.for("react.suspense_list"),je=Symbol.for("react.memo"),Te=Symbol.for("react.lazy"),Ee=Symbol.for("react.offscreen"),q=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=q&&e[q]||e["@@iterator"],typeof e=="function"?e:null)}var K=Object.assign,k;function M(e){if(k===void 0)try{throw Error()}catch(i){var t=i.stack.trim().match(/\n( *(at )?)/);k=t&&t[1]||""}return`
`+k+e}var ce=!1;function de(e,t){if(!e||ce)return"";ce=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(P){var a=P}Reflect.construct(e,[],t)}else{try{t.call()}catch(P){a=P}e.call(t.prototype)}else{try{throw Error()}catch(P){a=P}e()}}catch(P){if(P&&a&&typeof P.stack=="string"){for(var u=P.stack.split(`
`),c=a.stack.split(`
`),h=u.length-1,v=c.length-1;1<=h&&0<=v&&u[h]!==c[v];)v--;for(;1<=h&&0<=v;h--,v--)if(u[h]!==c[v]){if(h!==1||v!==1)do if(h--,v--,0>v||u[h]!==c[v]){var _=`
`+u[h].replace(" at new "," at ");return e.displayName&&_.includes("<anonymous>")&&(_=_.replace("<anonymous>",e.displayName)),_}while(1<=h&&0<=v);break}}}finally{ce=!1,Error.prepareStackTrace=i}return(e=e?e.displayName||e.name:"")?M(e):""}function pe(e){switch(e.tag){case 5:return M(e.type);case 16:return M("Lazy");case 13:return M("Suspense");case 19:return M("SuspenseList");case 0:case 2:case 15:return e=de(e.type,!1),e;case 11:return e=de(e.type.render,!1),e;case 1:return e=de(e.type,!0),e;default:return""}}function he(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case W:return"Fragment";case B:return"Portal";case se:return"Profiler";case te:return"StrictMode";case ve:return"Suspense";case Pe:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case le:return(e.displayName||"Context")+".Consumer";case J:return(e._context.displayName||"Context")+".Provider";case ye:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case je:return t=e.displayName||null,t!==null?t:he(e.type)||"Memo";case Te:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function Se(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(t);case 8:return t===te?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function be(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function rt(e){var t=Ce(e)?"checked":"value",i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var u=i.get,c=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return u.call(this)},set:function(h){a=""+h,c.call(this,h)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kn(e){e._valueTracker||(e._valueTracker=rt(e))}function ji(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var i=t.getValue(),a="";return e&&(a=Ce(e)?e.checked?"true":"false":e.value),e=a,e!==i?(t.setValue(e),!0):!1}function er(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function xo(e,t){var i=t.checked;return K({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:i??e._wrapperState.initialChecked})}function $i(e,t){var i=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;i=be(t.value!=null?t.value:i),e._wrapperState={initialChecked:a,initialValue:i,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function So(e,t){t=t.checked,t!=null&&L(e,"checked",t,!1)}function Cr(e,t){So(e,t);var i=be(t.value),a=t.type;if(i!=null)a==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+i):e.value!==""+i&&(e.value=""+i);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ko(e,t.type,i):t.hasOwnProperty("defaultValue")&&ko(e,t.type,be(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Fi(e,t,i){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,i||t===e.value||(e.value=t),e.defaultValue=t}i=e.name,i!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,i!==""&&(e.name=i)}function ko(e,t,i){(t!=="number"||er(e.ownerDocument)!==e)&&(i==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+i&&(e.defaultValue=""+i))}var gt=Array.isArray;function Ft(e,t,i,a){if(e=e.options,t){t={};for(var u=0;u<i.length;u++)t["$"+i[u]]=!0;for(i=0;i<e.length;i++)u=t.hasOwnProperty("$"+e[i].value),e[i].selected!==u&&(e[i].selected=u),u&&a&&(e[i].defaultSelected=!0)}else{for(i=""+be(i),t=null,u=0;u<e.length;u++){if(e[u].value===i){e[u].selected=!0,a&&(e[u].defaultSelected=!0);return}t!==null||e[u].disabled||(t=e[u])}t!==null&&(t.selected=!0)}}function Ar(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(o(91));return K({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Oo(e,t){var i=t.value;if(i==null){if(i=t.children,t=t.defaultValue,i!=null){if(t!=null)throw Error(o(92));if(gt(i)){if(1<i.length)throw Error(o(93));i=i[0]}t=i}t==null&&(t=""),i=t}e._wrapperState={initialValue:be(i)}}function Pr(e,t){var i=be(t.value),a=be(t.defaultValue);i!=null&&(i=""+i,i!==e.value&&(e.value=i),t.defaultValue==null&&e.defaultValue!==i&&(e.defaultValue=i)),a!=null&&(e.defaultValue=""+a)}function To(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Co(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nr(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Co(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var tr,dd=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,i,a,u){MSApp.execUnsafeLocalFunction(function(){return e(t,i,a,u)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(tr=tr||document.createElement("div"),tr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=tr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ao(e,t){if(t){var i=e.firstChild;if(i&&i===e.lastChild&&i.nodeType===3){i.nodeValue=t;return}}e.textContent=t}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xy=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(e){xy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Po[t]=Po[e]})});function fd(e,t,i){return t==null||typeof t=="boolean"||t===""?"":i||typeof t!="number"||t===0||Po.hasOwnProperty(e)&&Po[e]?(""+t).trim():t+"px"}function pd(e,t){e=e.style;for(var i in t)if(t.hasOwnProperty(i)){var a=i.indexOf("--")===0,u=fd(i,t[i],a);i==="float"&&(i="cssFloat"),a?e.setProperty(i,u):e[i]=u}}var Sy=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ys(e,t){if(t){if(Sy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(o(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(o(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(t.style!=null&&typeof t.style!="object")throw Error(o(62))}}function Qs(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xs=null;function Gs(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Js=null,Dr=null,Rr=null;function hd(e){if(e=Jo(e)){if(typeof Js!="function")throw Error(o(280));var t=e.stateNode;t&&(t=ua(t),Js(e.stateNode,e.type,t))}}function md(e){Dr?Rr?Rr.push(e):Rr=[e]:Dr=e}function gd(){if(Dr){var e=Dr,t=Rr;if(Rr=Dr=null,hd(e),t)for(e=0;e<t.length;e++)hd(t[e])}}function yd(e,t){return e(t)}function vd(){}var Zs=!1;function bd(e,t,i){if(Zs)return e(t,i);Zs=!0;try{return yd(e,t,i)}finally{Zs=!1,(Dr!==null||Rr!==null)&&(vd(),gd())}}function No(e,t){var i=e.stateNode;if(i===null)return null;var a=ua(i);if(a===null)return null;i=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(i&&typeof i!="function")throw Error(o(231,t,typeof i));return i}var el=!1;if(p)try{var Do={};Object.defineProperty(Do,"passive",{get:function(){el=!0}}),window.addEventListener("test",Do,Do),window.removeEventListener("test",Do,Do)}catch{el=!1}function ky(e,t,i,a,u,c,h,v,_){var P=Array.prototype.slice.call(arguments,3);try{t.apply(i,P)}catch($){this.onError($)}}var Ro=!1,Ui=null,Hi=!1,tl=null,Oy={onError:function(e){Ro=!0,Ui=e}};function Ty(e,t,i,a,u,c,h,v,_){Ro=!1,Ui=null,ky.apply(Oy,arguments)}function Cy(e,t,i,a,u,c,h,v,_){if(Ty.apply(this,arguments),Ro){if(Ro){var P=Ui;Ro=!1,Ui=null}else throw Error(o(198));Hi||(Hi=!0,tl=P)}}function nr(e){var t=e,i=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(i=t.return),e=t.return;while(e)}return t.tag===3?i:null}function _d(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ed(e){if(nr(e)!==e)throw Error(o(188))}function Ay(e){var t=e.alternate;if(!t){if(t=nr(e),t===null)throw Error(o(188));return t!==e?null:e}for(var i=e,a=t;;){var u=i.return;if(u===null)break;var c=u.alternate;if(c===null){if(a=u.return,a!==null){i=a;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===i)return Ed(u),e;if(c===a)return Ed(u),t;c=c.sibling}throw Error(o(188))}if(i.return!==a.return)i=u,a=c;else{for(var h=!1,v=u.child;v;){if(v===i){h=!0,i=u,a=c;break}if(v===a){h=!0,a=u,i=c;break}v=v.sibling}if(!h){for(v=c.child;v;){if(v===i){h=!0,i=c,a=u;break}if(v===a){h=!0,a=c,i=u;break}v=v.sibling}if(!h)throw Error(o(189))}}if(i.alternate!==a)throw Error(o(190))}if(i.tag!==3)throw Error(o(188));return i.stateNode.current===i?e:t}function wd(e){return e=Ay(e),e!==null?xd(e):null}function xd(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xd(e);if(t!==null)return t;e=e.sibling}return null}var Sd=n.unstable_scheduleCallback,kd=n.unstable_cancelCallback,Py=n.unstable_shouldYield,Ny=n.unstable_requestPaint,Fe=n.unstable_now,Dy=n.unstable_getCurrentPriorityLevel,nl=n.unstable_ImmediatePriority,Od=n.unstable_UserBlockingPriority,Bi=n.unstable_NormalPriority,Ry=n.unstable_LowPriority,Td=n.unstable_IdlePriority,Vi=null,Zt=null;function Ly(e){if(Zt&&typeof Zt.onCommitFiberRoot=="function")try{Zt.onCommitFiberRoot(Vi,e,void 0,(e.current.flags&128)===128)}catch{}}var Ut=Math.clz32?Math.clz32:zy,My=Math.log,Iy=Math.LN2;function zy(e){return e>>>=0,e===0?32:31-(My(e)/Iy|0)|0}var qi=64,Wi=4194304;function Lo(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ki(e,t){var i=e.pendingLanes;if(i===0)return 0;var a=0,u=e.suspendedLanes,c=e.pingedLanes,h=i&268435455;if(h!==0){var v=h&~u;v!==0?a=Lo(v):(c&=h,c!==0&&(a=Lo(c)))}else h=i&~u,h!==0?a=Lo(h):c!==0&&(a=Lo(c));if(a===0)return 0;if(t!==0&&t!==a&&!(t&u)&&(u=a&-a,c=t&-t,u>=c||u===16&&(c&4194240)!==0))return t;if(a&4&&(a|=i&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)i=31-Ut(t),u=1<<i,a|=e[i],t&=~u;return a}function jy(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $y(e,t){for(var i=e.suspendedLanes,a=e.pingedLanes,u=e.expirationTimes,c=e.pendingLanes;0<c;){var h=31-Ut(c),v=1<<h,_=u[h];_===-1?(!(v&i)||v&a)&&(u[h]=jy(v,t)):_<=t&&(e.expiredLanes|=v),c&=~v}}function rl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Cd(){var e=qi;return qi<<=1,!(qi&4194240)&&(qi=64),e}function ol(e){for(var t=[],i=0;31>i;i++)t.push(e);return t}function Mo(e,t,i){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ut(t),e[t]=i}function Fy(e,t){var i=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<i;){var u=31-Ut(i),c=1<<u;t[u]=0,a[u]=-1,e[u]=-1,i&=~c}}function il(e,t){var i=e.entangledLanes|=t;for(e=e.entanglements;i;){var a=31-Ut(i),u=1<<a;u&t|e[a]&t&&(e[a]|=t),i&=~u}}var Oe=0;function Ad(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Pd,al,Nd,Dd,Rd,sl=!1,Yi=[],On=null,Tn=null,Cn=null,Io=new Map,zo=new Map,An=[],Uy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ld(e,t){switch(e){case"focusin":case"focusout":On=null;break;case"dragenter":case"dragleave":Tn=null;break;case"mouseover":case"mouseout":Cn=null;break;case"pointerover":case"pointerout":Io.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zo.delete(t.pointerId)}}function jo(e,t,i,a,u,c){return e===null||e.nativeEvent!==c?(e={blockedOn:t,domEventName:i,eventSystemFlags:a,nativeEvent:c,targetContainers:[u]},t!==null&&(t=Jo(t),t!==null&&al(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,u!==null&&t.indexOf(u)===-1&&t.push(u),e)}function Hy(e,t,i,a,u){switch(t){case"focusin":return On=jo(On,e,t,i,a,u),!0;case"dragenter":return Tn=jo(Tn,e,t,i,a,u),!0;case"mouseover":return Cn=jo(Cn,e,t,i,a,u),!0;case"pointerover":var c=u.pointerId;return Io.set(c,jo(Io.get(c)||null,e,t,i,a,u)),!0;case"gotpointercapture":return c=u.pointerId,zo.set(c,jo(zo.get(c)||null,e,t,i,a,u)),!0}return!1}function Md(e){var t=rr(e.target);if(t!==null){var i=nr(t);if(i!==null){if(t=i.tag,t===13){if(t=_d(i),t!==null){e.blockedOn=t,Rd(e.priority,function(){Nd(i)});return}}else if(t===3&&i.stateNode.current.memoizedState.isDehydrated){e.blockedOn=i.tag===3?i.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Qi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var i=ul(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(i===null){i=e.nativeEvent;var a=new i.constructor(i.type,i);Xs=a,i.target.dispatchEvent(a),Xs=null}else return t=Jo(i),t!==null&&al(t),e.blockedOn=i,!1;t.shift()}return!0}function Id(e,t,i){Qi(e)&&i.delete(t)}function By(){sl=!1,On!==null&&Qi(On)&&(On=null),Tn!==null&&Qi(Tn)&&(Tn=null),Cn!==null&&Qi(Cn)&&(Cn=null),Io.forEach(Id),zo.forEach(Id)}function $o(e,t){e.blockedOn===t&&(e.blockedOn=null,sl||(sl=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,By)))}function Fo(e){function t(u){return $o(u,e)}if(0<Yi.length){$o(Yi[0],e);for(var i=1;i<Yi.length;i++){var a=Yi[i];a.blockedOn===e&&(a.blockedOn=null)}}for(On!==null&&$o(On,e),Tn!==null&&$o(Tn,e),Cn!==null&&$o(Cn,e),Io.forEach(t),zo.forEach(t),i=0;i<An.length;i++)a=An[i],a.blockedOn===e&&(a.blockedOn=null);for(;0<An.length&&(i=An[0],i.blockedOn===null);)Md(i),i.blockedOn===null&&An.shift()}var Lr=z.ReactCurrentBatchConfig,Xi=!0;function Vy(e,t,i,a){var u=Oe,c=Lr.transition;Lr.transition=null;try{Oe=1,ll(e,t,i,a)}finally{Oe=u,Lr.transition=c}}function qy(e,t,i,a){var u=Oe,c=Lr.transition;Lr.transition=null;try{Oe=4,ll(e,t,i,a)}finally{Oe=u,Lr.transition=c}}function ll(e,t,i,a){if(Xi){var u=ul(e,t,i,a);if(u===null)Ol(e,t,a,Gi,i),Ld(e,a);else if(Hy(u,e,t,i,a))a.stopPropagation();else if(Ld(e,a),t&4&&-1<Uy.indexOf(e)){for(;u!==null;){var c=Jo(u);if(c!==null&&Pd(c),c=ul(e,t,i,a),c===null&&Ol(e,t,a,Gi,i),c===u)break;u=c}u!==null&&a.stopPropagation()}else Ol(e,t,a,null,i)}}var Gi=null;function ul(e,t,i,a){if(Gi=null,e=Gs(a),e=rr(e),e!==null)if(t=nr(e),t===null)e=null;else if(i=t.tag,i===13){if(e=_d(t),e!==null)return e;e=null}else if(i===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gi=e,null}function zd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Dy()){case nl:return 1;case Od:return 4;case Bi:case Ry:return 16;case Td:return 536870912;default:return 16}default:return 16}}var Pn=null,cl=null,Ji=null;function jd(){if(Ji)return Ji;var e,t=cl,i=t.length,a,u="value"in Pn?Pn.value:Pn.textContent,c=u.length;for(e=0;e<i&&t[e]===u[e];e++);var h=i-e;for(a=1;a<=h&&t[i-a]===u[c-a];a++);return Ji=u.slice(e,1<a?1-a:void 0)}function Zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ea(){return!0}function $d(){return!1}function yt(e){function t(i,a,u,c,h){this._reactName=i,this._targetInst=u,this.type=a,this.nativeEvent=c,this.target=h,this.currentTarget=null;for(var v in e)e.hasOwnProperty(v)&&(i=e[v],this[v]=i?i(c):c[v]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?ea:$d,this.isPropagationStopped=$d,this}return K(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var i=this.nativeEvent;i&&(i.preventDefault?i.preventDefault():typeof i.returnValue!="unknown"&&(i.returnValue=!1),this.isDefaultPrevented=ea)},stopPropagation:function(){var i=this.nativeEvent;i&&(i.stopPropagation?i.stopPropagation():typeof i.cancelBubble!="unknown"&&(i.cancelBubble=!0),this.isPropagationStopped=ea)},persist:function(){},isPersistent:ea}),t}var Mr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},dl=yt(Mr),Uo=K({},Mr,{view:0,detail:0}),Wy=yt(Uo),fl,pl,Ho,ta=K({},Uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ml,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ho&&(Ho&&e.type==="mousemove"?(fl=e.screenX-Ho.screenX,pl=e.screenY-Ho.screenY):pl=fl=0,Ho=e),fl)},movementY:function(e){return"movementY"in e?e.movementY:pl}}),Fd=yt(ta),Ky=K({},ta,{dataTransfer:0}),Yy=yt(Ky),Qy=K({},Uo,{relatedTarget:0}),hl=yt(Qy),Xy=K({},Mr,{animationName:0,elapsedTime:0,pseudoElement:0}),Gy=yt(Xy),Jy=K({},Mr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Zy=yt(Jy),ev=K({},Mr,{data:0}),Ud=yt(ev),tv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},nv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},rv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ov(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=rv[e])?!!t[e]:!1}function ml(){return ov}var iv=K({},Uo,{key:function(e){if(e.key){var t=tv[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?nv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ml,charCode:function(e){return e.type==="keypress"?Zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),av=yt(iv),sv=K({},ta,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hd=yt(sv),lv=K({},Uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ml}),uv=yt(lv),cv=K({},Mr,{propertyName:0,elapsedTime:0,pseudoElement:0}),dv=yt(cv),fv=K({},ta,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),pv=yt(fv),hv=[9,13,27,32],gl=p&&"CompositionEvent"in window,Bo=null;p&&"documentMode"in document&&(Bo=document.documentMode);var mv=p&&"TextEvent"in window&&!Bo,Bd=p&&(!gl||Bo&&8<Bo&&11>=Bo),Vd=" ",qd=!1;function Wd(e,t){switch(e){case"keyup":return hv.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Kd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ir=!1;function gv(e,t){switch(e){case"compositionend":return Kd(t);case"keypress":return t.which!==32?null:(qd=!0,Vd);case"textInput":return e=t.data,e===Vd&&qd?null:e;default:return null}}function yv(e,t){if(Ir)return e==="compositionend"||!gl&&Wd(e,t)?(e=jd(),Ji=cl=Pn=null,Ir=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bd&&t.locale!=="ko"?null:t.data;default:return null}}var vv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Yd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!vv[e.type]:t==="textarea"}function Qd(e,t,i,a){md(a),t=aa(t,"onChange"),0<t.length&&(i=new dl("onChange","change",null,i,a),e.push({event:i,listeners:t}))}var Vo=null,qo=null;function bv(e){hf(e,0)}function na(e){var t=Ur(e);if(ji(t))return e}function _v(e,t){if(e==="change")return t}var Xd=!1;if(p){var yl;if(p){var vl="oninput"in document;if(!vl){var Gd=document.createElement("div");Gd.setAttribute("oninput","return;"),vl=typeof Gd.oninput=="function"}yl=vl}else yl=!1;Xd=yl&&(!document.documentMode||9<document.documentMode)}function Jd(){Vo&&(Vo.detachEvent("onpropertychange",Zd),qo=Vo=null)}function Zd(e){if(e.propertyName==="value"&&na(qo)){var t=[];Qd(t,qo,e,Gs(e)),bd(bv,t)}}function Ev(e,t,i){e==="focusin"?(Jd(),Vo=t,qo=i,Vo.attachEvent("onpropertychange",Zd)):e==="focusout"&&Jd()}function wv(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return na(qo)}function xv(e,t){if(e==="click")return na(t)}function Sv(e,t){if(e==="input"||e==="change")return na(t)}function kv(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ht=typeof Object.is=="function"?Object.is:kv;function Wo(e,t){if(Ht(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(a=0;a<i.length;a++){var u=i[a];if(!g.call(t,u)||!Ht(e[u],t[u]))return!1}return!0}function ef(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function tf(e,t){var i=ef(e);e=0;for(var a;i;){if(i.nodeType===3){if(a=e+i.textContent.length,e<=t&&a>=t)return{node:i,offset:t-e};e=a}e:{for(;i;){if(i.nextSibling){i=i.nextSibling;break e}i=i.parentNode}i=void 0}i=ef(i)}}function nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function rf(){for(var e=window,t=er();t instanceof e.HTMLIFrameElement;){try{var i=typeof t.contentWindow.location.href=="string"}catch{i=!1}if(i)e=t.contentWindow;else break;t=er(e.document)}return t}function bl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Ov(e){var t=rf(),i=e.focusedElem,a=e.selectionRange;if(t!==i&&i&&i.ownerDocument&&nf(i.ownerDocument.documentElement,i)){if(a!==null&&bl(i)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in i)i.selectionStart=t,i.selectionEnd=Math.min(e,i.value.length);else if(e=(t=i.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var u=i.textContent.length,c=Math.min(a.start,u);a=a.end===void 0?c:Math.min(a.end,u),!e.extend&&c>a&&(u=a,a=c,c=u),u=tf(i,c);var h=tf(i,a);u&&h&&(e.rangeCount!==1||e.anchorNode!==u.node||e.anchorOffset!==u.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(u.node,u.offset),e.removeAllRanges(),c>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=i;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof i.focus=="function"&&i.focus(),i=0;i<t.length;i++)e=t[i],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Tv=p&&"documentMode"in document&&11>=document.documentMode,zr=null,_l=null,Ko=null,El=!1;function of(e,t,i){var a=i.window===i?i.document:i.nodeType===9?i:i.ownerDocument;El||zr==null||zr!==er(a)||(a=zr,"selectionStart"in a&&bl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Ko&&Wo(Ko,a)||(Ko=a,a=aa(_l,"onSelect"),0<a.length&&(t=new dl("onSelect","select",null,t,i),e.push({event:t,listeners:a}),t.target=zr)))}function ra(e,t){var i={};return i[e.toLowerCase()]=t.toLowerCase(),i["Webkit"+e]="webkit"+t,i["Moz"+e]="moz"+t,i}var jr={animationend:ra("Animation","AnimationEnd"),animationiteration:ra("Animation","AnimationIteration"),animationstart:ra("Animation","AnimationStart"),transitionend:ra("Transition","TransitionEnd")},wl={},af={};p&&(af=document.createElement("div").style,"AnimationEvent"in window||(delete jr.animationend.animation,delete jr.animationiteration.animation,delete jr.animationstart.animation),"TransitionEvent"in window||delete jr.transitionend.transition);function oa(e){if(wl[e])return wl[e];if(!jr[e])return e;var t=jr[e],i;for(i in t)if(t.hasOwnProperty(i)&&i in af)return wl[e]=t[i];return e}var sf=oa("animationend"),lf=oa("animationiteration"),uf=oa("animationstart"),cf=oa("transitionend"),df=new Map,ff="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Nn(e,t){df.set(e,t),d(t,[e])}for(var xl=0;xl<ff.length;xl++){var Sl=ff[xl],Cv=Sl.toLowerCase(),Av=Sl[0].toUpperCase()+Sl.slice(1);Nn(Cv,"on"+Av)}Nn(sf,"onAnimationEnd"),Nn(lf,"onAnimationIteration"),Nn(uf,"onAnimationStart"),Nn("dblclick","onDoubleClick"),Nn("focusin","onFocus"),Nn("focusout","onBlur"),Nn(cf,"onTransitionEnd"),f("onMouseEnter",["mouseout","mouseover"]),f("onMouseLeave",["mouseout","mouseover"]),f("onPointerEnter",["pointerout","pointerover"]),f("onPointerLeave",["pointerout","pointerover"]),d("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),d("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),d("onBeforeInput",["compositionend","keypress","textInput","paste"]),d("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),d("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Pv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Yo));function pf(e,t,i){var a=e.type||"unknown-event";e.currentTarget=i,Cy(a,t,void 0,e),e.currentTarget=null}function hf(e,t){t=(t&4)!==0;for(var i=0;i<e.length;i++){var a=e[i],u=a.event;a=a.listeners;e:{var c=void 0;if(t)for(var h=a.length-1;0<=h;h--){var v=a[h],_=v.instance,P=v.currentTarget;if(v=v.listener,_!==c&&u.isPropagationStopped())break e;pf(u,v,P),c=_}else for(h=0;h<a.length;h++){if(v=a[h],_=v.instance,P=v.currentTarget,v=v.listener,_!==c&&u.isPropagationStopped())break e;pf(u,v,P),c=_}}}if(Hi)throw e=tl,Hi=!1,tl=null,e}function De(e,t){var i=t[Dl];i===void 0&&(i=t[Dl]=new Set);var a=e+"__bubble";i.has(a)||(mf(t,e,2,!1),i.add(a))}function kl(e,t,i){var a=0;t&&(a|=4),mf(i,e,a,t)}var ia="_reactListening"+Math.random().toString(36).slice(2);function Qo(e){if(!e[ia]){e[ia]=!0,s.forEach(function(i){i!=="selectionchange"&&(Pv.has(i)||kl(i,!1,e),kl(i,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ia]||(t[ia]=!0,kl("selectionchange",!1,t))}}function mf(e,t,i,a){switch(zd(t)){case 1:var u=Vy;break;case 4:u=qy;break;default:u=ll}i=u.bind(null,t,i,e),u=void 0,!el||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(u=!0),a?u!==void 0?e.addEventListener(t,i,{capture:!0,passive:u}):e.addEventListener(t,i,!0):u!==void 0?e.addEventListener(t,i,{passive:u}):e.addEventListener(t,i,!1)}function Ol(e,t,i,a,u){var c=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var v=a.stateNode.containerInfo;if(v===u||v.nodeType===8&&v.parentNode===u)break;if(h===4)for(h=a.return;h!==null;){var _=h.tag;if((_===3||_===4)&&(_=h.stateNode.containerInfo,_===u||_.nodeType===8&&_.parentNode===u))return;h=h.return}for(;v!==null;){if(h=rr(v),h===null)return;if(_=h.tag,_===5||_===6){a=c=h;continue e}v=v.parentNode}}a=a.return}bd(function(){var P=c,$=Gs(i),U=[];e:{var j=df.get(e);if(j!==void 0){var Y=dl,X=e;switch(e){case"keypress":if(Zi(i)===0)break e;case"keydown":case"keyup":Y=av;break;case"focusin":X="focus",Y=hl;break;case"focusout":X="blur",Y=hl;break;case"beforeblur":case"afterblur":Y=hl;break;case"click":if(i.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Fd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=Yy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=uv;break;case sf:case lf:case uf:Y=Gy;break;case cf:Y=dv;break;case"scroll":Y=Wy;break;case"wheel":Y=pv;break;case"copy":case"cut":case"paste":Y=Zy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=Hd}var G=(t&4)!==0,Ue=!G&&e==="scroll",O=G?j!==null?j+"Capture":null:j;G=[];for(var x=P,C;x!==null;){C=x;var V=C.stateNode;if(C.tag===5&&V!==null&&(C=V,O!==null&&(V=No(x,O),V!=null&&G.push(Xo(x,V,C)))),Ue)break;x=x.return}0<G.length&&(j=new Y(j,X,null,i,$),U.push({event:j,listeners:G}))}}if(!(t&7)){e:{if(j=e==="mouseover"||e==="pointerover",Y=e==="mouseout"||e==="pointerout",j&&i!==Xs&&(X=i.relatedTarget||i.fromElement)&&(rr(X)||X[un]))break e;if((Y||j)&&(j=$.window===$?$:(j=$.ownerDocument)?j.defaultView||j.parentWindow:window,Y?(X=i.relatedTarget||i.toElement,Y=P,X=X?rr(X):null,X!==null&&(Ue=nr(X),X!==Ue||X.tag!==5&&X.tag!==6)&&(X=null)):(Y=null,X=P),Y!==X)){if(G=Fd,V="onMouseLeave",O="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(G=Hd,V="onPointerLeave",O="onPointerEnter",x="pointer"),Ue=Y==null?j:Ur(Y),C=X==null?j:Ur(X),j=new G(V,x+"leave",Y,i,$),j.target=Ue,j.relatedTarget=C,V=null,rr($)===P&&(G=new G(O,x+"enter",X,i,$),G.target=C,G.relatedTarget=Ue,V=G),Ue=V,Y&&X)t:{for(G=Y,O=X,x=0,C=G;C;C=$r(C))x++;for(C=0,V=O;V;V=$r(V))C++;for(;0<x-C;)G=$r(G),x--;for(;0<C-x;)O=$r(O),C--;for(;x--;){if(G===O||O!==null&&G===O.alternate)break t;G=$r(G),O=$r(O)}G=null}else G=null;Y!==null&&gf(U,j,Y,G,!1),X!==null&&Ue!==null&&gf(U,Ue,X,G,!0)}}e:{if(j=P?Ur(P):window,Y=j.nodeName&&j.nodeName.toLowerCase(),Y==="select"||Y==="input"&&j.type==="file")var ee=_v;else if(Yd(j))if(Xd)ee=Sv;else{ee=wv;var oe=Ev}else(Y=j.nodeName)&&Y.toLowerCase()==="input"&&(j.type==="checkbox"||j.type==="radio")&&(ee=xv);if(ee&&(ee=ee(e,P))){Qd(U,ee,i,$);break e}oe&&oe(e,j,P),e==="focusout"&&(oe=j._wrapperState)&&oe.controlled&&j.type==="number"&&ko(j,"number",j.value)}switch(oe=P?Ur(P):window,e){case"focusin":(Yd(oe)||oe.contentEditable==="true")&&(zr=oe,_l=P,Ko=null);break;case"focusout":Ko=_l=zr=null;break;case"mousedown":El=!0;break;case"contextmenu":case"mouseup":case"dragend":El=!1,of(U,i,$);break;case"selectionchange":if(Tv)break;case"keydown":case"keyup":of(U,i,$)}var ie;if(gl)e:{switch(e){case"compositionstart":var ue="onCompositionStart";break e;case"compositionend":ue="onCompositionEnd";break e;case"compositionupdate":ue="onCompositionUpdate";break e}ue=void 0}else Ir?Wd(e,i)&&(ue="onCompositionEnd"):e==="keydown"&&i.keyCode===229&&(ue="onCompositionStart");ue&&(Bd&&i.locale!=="ko"&&(Ir||ue!=="onCompositionStart"?ue==="onCompositionEnd"&&Ir&&(ie=jd()):(Pn=$,cl="value"in Pn?Pn.value:Pn.textContent,Ir=!0)),oe=aa(P,ue),0<oe.length&&(ue=new Ud(ue,e,null,i,$),U.push({event:ue,listeners:oe}),ie?ue.data=ie:(ie=Kd(i),ie!==null&&(ue.data=ie)))),(ie=mv?gv(e,i):yv(e,i))&&(P=aa(P,"onBeforeInput"),0<P.length&&($=new Ud("onBeforeInput","beforeinput",null,i,$),U.push({event:$,listeners:P}),$.data=ie))}hf(U,t)})}function Xo(e,t,i){return{instance:e,listener:t,currentTarget:i}}function aa(e,t){for(var i=t+"Capture",a=[];e!==null;){var u=e,c=u.stateNode;u.tag===5&&c!==null&&(u=c,c=No(e,i),c!=null&&a.unshift(Xo(e,c,u)),c=No(e,t),c!=null&&a.push(Xo(e,c,u))),e=e.return}return a}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function gf(e,t,i,a,u){for(var c=t._reactName,h=[];i!==null&&i!==a;){var v=i,_=v.alternate,P=v.stateNode;if(_!==null&&_===a)break;v.tag===5&&P!==null&&(v=P,u?(_=No(i,c),_!=null&&h.unshift(Xo(i,_,v))):u||(_=No(i,c),_!=null&&h.push(Xo(i,_,v)))),i=i.return}h.length!==0&&e.push({event:t,listeners:h})}var Nv=/\r\n?/g,Dv=/\u0000|\uFFFD/g;function yf(e){return(typeof e=="string"?e:""+e).replace(Nv,`
`).replace(Dv,"")}function sa(e,t,i){if(t=yf(t),yf(e)!==t&&i)throw Error(o(425))}function la(){}var Tl=null,Cl=null;function Al(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Pl=typeof setTimeout=="function"?setTimeout:void 0,Rv=typeof clearTimeout=="function"?clearTimeout:void 0,vf=typeof Promise=="function"?Promise:void 0,Lv=typeof queueMicrotask=="function"?queueMicrotask:typeof vf<"u"?function(e){return vf.resolve(null).then(e).catch(Mv)}:Pl;function Mv(e){setTimeout(function(){throw e})}function Nl(e,t){var i=t,a=0;do{var u=i.nextSibling;if(e.removeChild(i),u&&u.nodeType===8)if(i=u.data,i==="/$"){if(a===0){e.removeChild(u),Fo(t);return}a--}else i!=="$"&&i!=="$?"&&i!=="$!"||a++;i=u}while(i);Fo(t)}function Dn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function bf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="$"||i==="$!"||i==="$?"){if(t===0)return e;t--}else i==="/$"&&t++}e=e.previousSibling}return null}var Fr=Math.random().toString(36).slice(2),en="__reactFiber$"+Fr,Go="__reactProps$"+Fr,un="__reactContainer$"+Fr,Dl="__reactEvents$"+Fr,Iv="__reactListeners$"+Fr,zv="__reactHandles$"+Fr;function rr(e){var t=e[en];if(t)return t;for(var i=e.parentNode;i;){if(t=i[un]||i[en]){if(i=t.alternate,t.child!==null||i!==null&&i.child!==null)for(e=bf(e);e!==null;){if(i=e[en])return i;e=bf(e)}return t}e=i,i=e.parentNode}return null}function Jo(e){return e=e[en]||e[un],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Ur(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(o(33))}function ua(e){return e[Go]||null}var Rl=[],Hr=-1;function Rn(e){return{current:e}}function Re(e){0>Hr||(e.current=Rl[Hr],Rl[Hr]=null,Hr--)}function Ne(e,t){Hr++,Rl[Hr]=e.current,e.current=t}var Ln={},Je=Rn(Ln),lt=Rn(!1),or=Ln;function Br(e,t){var i=e.type.contextTypes;if(!i)return Ln;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var u={},c;for(c in i)u[c]=t[c];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=u),u}function ut(e){return e=e.childContextTypes,e!=null}function ca(){Re(lt),Re(Je)}function _f(e,t,i){if(Je.current!==Ln)throw Error(o(168));Ne(Je,t),Ne(lt,i)}function Ef(e,t,i){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return i;a=a.getChildContext();for(var u in a)if(!(u in t))throw Error(o(108,Se(e)||"Unknown",u));return K({},i,a)}function da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Ln,or=Je.current,Ne(Je,e),Ne(lt,lt.current),!0}function wf(e,t,i){var a=e.stateNode;if(!a)throw Error(o(169));i?(e=Ef(e,t,or),a.__reactInternalMemoizedMergedChildContext=e,Re(lt),Re(Je),Ne(Je,e)):Re(lt),Ne(lt,i)}var cn=null,fa=!1,Ll=!1;function xf(e){cn===null?cn=[e]:cn.push(e)}function jv(e){fa=!0,xf(e)}function Mn(){if(!Ll&&cn!==null){Ll=!0;var e=0,t=Oe;try{var i=cn;for(Oe=1;e<i.length;e++){var a=i[e];do a=a(!0);while(a!==null)}cn=null,fa=!1}catch(u){throw cn!==null&&(cn=cn.slice(e+1)),Sd(nl,Mn),u}finally{Oe=t,Ll=!1}}return null}var Vr=[],qr=0,pa=null,ha=0,Ct=[],At=0,ir=null,dn=1,fn="";function ar(e,t){Vr[qr++]=ha,Vr[qr++]=pa,pa=e,ha=t}function Sf(e,t,i){Ct[At++]=dn,Ct[At++]=fn,Ct[At++]=ir,ir=e;var a=dn;e=fn;var u=32-Ut(a)-1;a&=~(1<<u),i+=1;var c=32-Ut(t)+u;if(30<c){var h=u-u%5;c=(a&(1<<h)-1).toString(32),a>>=h,u-=h,dn=1<<32-Ut(t)+u|i<<u|a,fn=c+e}else dn=1<<c|i<<u|a,fn=e}function Ml(e){e.return!==null&&(ar(e,1),Sf(e,1,0))}function Il(e){for(;e===pa;)pa=Vr[--qr],Vr[qr]=null,ha=Vr[--qr],Vr[qr]=null;for(;e===ir;)ir=Ct[--At],Ct[At]=null,fn=Ct[--At],Ct[At]=null,dn=Ct[--At],Ct[At]=null}var vt=null,bt=null,Le=!1,Bt=null;function kf(e,t){var i=Rt(5,null,null,0);i.elementType="DELETED",i.stateNode=t,i.return=e,t=e.deletions,t===null?(e.deletions=[i],e.flags|=16):t.push(i)}function Of(e,t){switch(e.tag){case 5:var i=e.type;return t=t.nodeType!==1||i.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vt=e,bt=Dn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vt=e,bt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(i=ir!==null?{id:dn,overflow:fn}:null,e.memoizedState={dehydrated:t,treeContext:i,retryLane:1073741824},i=Rt(18,null,null,0),i.stateNode=t,i.return=e,e.child=i,vt=e,bt=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function jl(e){if(Le){var t=bt;if(t){var i=t;if(!Of(e,t)){if(zl(e))throw Error(o(418));t=Dn(i.nextSibling);var a=vt;t&&Of(e,t)?kf(a,i):(e.flags=e.flags&-4097|2,Le=!1,vt=e)}}else{if(zl(e))throw Error(o(418));e.flags=e.flags&-4097|2,Le=!1,vt=e}}}function Tf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vt=e}function ma(e){if(e!==vt)return!1;if(!Le)return Tf(e),Le=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Al(e.type,e.memoizedProps)),t&&(t=bt)){if(zl(e))throw Cf(),Error(o(418));for(;t;)kf(e,t),t=Dn(t.nextSibling)}if(Tf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var i=e.data;if(i==="/$"){if(t===0){bt=Dn(e.nextSibling);break e}t--}else i!=="$"&&i!=="$!"&&i!=="$?"||t++}e=e.nextSibling}bt=null}}else bt=vt?Dn(e.stateNode.nextSibling):null;return!0}function Cf(){for(var e=bt;e;)e=Dn(e.nextSibling)}function Wr(){bt=vt=null,Le=!1}function $l(e){Bt===null?Bt=[e]:Bt.push(e)}var $v=z.ReactCurrentBatchConfig;function Zo(e,t,i){if(e=i.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(i._owner){if(i=i._owner,i){if(i.tag!==1)throw Error(o(309));var a=i.stateNode}if(!a)throw Error(o(147,e));var u=a,c=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===c?t.ref:(t=function(h){var v=u.refs;h===null?delete v[c]:v[c]=h},t._stringRef=c,t)}if(typeof e!="string")throw Error(o(284));if(!i._owner)throw Error(o(290,e))}return e}function ga(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Af(e){var t=e._init;return t(e._payload)}function Pf(e){function t(O,x){if(e){var C=O.deletions;C===null?(O.deletions=[x],O.flags|=16):C.push(x)}}function i(O,x){if(!e)return null;for(;x!==null;)t(O,x),x=x.sibling;return null}function a(O,x){for(O=new Map;x!==null;)x.key!==null?O.set(x.key,x):O.set(x.index,x),x=x.sibling;return O}function u(O,x){return O=Bn(O,x),O.index=0,O.sibling=null,O}function c(O,x,C){return O.index=C,e?(C=O.alternate,C!==null?(C=C.index,C<x?(O.flags|=2,x):C):(O.flags|=2,x)):(O.flags|=1048576,x)}function h(O){return e&&O.alternate===null&&(O.flags|=2),O}function v(O,x,C,V){return x===null||x.tag!==6?(x=Pu(C,O.mode,V),x.return=O,x):(x=u(x,C),x.return=O,x)}function _(O,x,C,V){var ee=C.type;return ee===W?$(O,x,C.props.children,V,C.key):x!==null&&(x.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Te&&Af(ee)===x.type)?(V=u(x,C.props),V.ref=Zo(O,x,C),V.return=O,V):(V=Fa(C.type,C.key,C.props,null,O.mode,V),V.ref=Zo(O,x,C),V.return=O,V)}function P(O,x,C,V){return x===null||x.tag!==4||x.stateNode.containerInfo!==C.containerInfo||x.stateNode.implementation!==C.implementation?(x=Nu(C,O.mode,V),x.return=O,x):(x=u(x,C.children||[]),x.return=O,x)}function $(O,x,C,V,ee){return x===null||x.tag!==7?(x=hr(C,O.mode,V,ee),x.return=O,x):(x=u(x,C),x.return=O,x)}function U(O,x,C){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Pu(""+x,O.mode,C),x.return=O,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case R:return C=Fa(x.type,x.key,x.props,null,O.mode,C),C.ref=Zo(O,null,x),C.return=O,C;case B:return x=Nu(x,O.mode,C),x.return=O,x;case Te:var V=x._init;return U(O,V(x._payload),C)}if(gt(x)||ne(x))return x=hr(x,O.mode,C,null),x.return=O,x;ga(O,x)}return null}function j(O,x,C,V){var ee=x!==null?x.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return ee!==null?null:v(O,x,""+C,V);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case R:return C.key===ee?_(O,x,C,V):null;case B:return C.key===ee?P(O,x,C,V):null;case Te:return ee=C._init,j(O,x,ee(C._payload),V)}if(gt(C)||ne(C))return ee!==null?null:$(O,x,C,V,null);ga(O,C)}return null}function Y(O,x,C,V,ee){if(typeof V=="string"&&V!==""||typeof V=="number")return O=O.get(C)||null,v(x,O,""+V,ee);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case R:return O=O.get(V.key===null?C:V.key)||null,_(x,O,V,ee);case B:return O=O.get(V.key===null?C:V.key)||null,P(x,O,V,ee);case Te:var oe=V._init;return Y(O,x,C,oe(V._payload),ee)}if(gt(V)||ne(V))return O=O.get(C)||null,$(x,O,V,ee,null);ga(x,V)}return null}function X(O,x,C,V){for(var ee=null,oe=null,ie=x,ue=x=0,Ye=null;ie!==null&&ue<C.length;ue++){ie.index>ue?(Ye=ie,ie=null):Ye=ie.sibling;var xe=j(O,ie,C[ue],V);if(xe===null){ie===null&&(ie=Ye);break}e&&ie&&xe.alternate===null&&t(O,ie),x=c(xe,x,ue),oe===null?ee=xe:oe.sibling=xe,oe=xe,ie=Ye}if(ue===C.length)return i(O,ie),Le&&ar(O,ue),ee;if(ie===null){for(;ue<C.length;ue++)ie=U(O,C[ue],V),ie!==null&&(x=c(ie,x,ue),oe===null?ee=ie:oe.sibling=ie,oe=ie);return Le&&ar(O,ue),ee}for(ie=a(O,ie);ue<C.length;ue++)Ye=Y(ie,O,ue,C[ue],V),Ye!==null&&(e&&Ye.alternate!==null&&ie.delete(Ye.key===null?ue:Ye.key),x=c(Ye,x,ue),oe===null?ee=Ye:oe.sibling=Ye,oe=Ye);return e&&ie.forEach(function(Vn){return t(O,Vn)}),Le&&ar(O,ue),ee}function G(O,x,C,V){var ee=ne(C);if(typeof ee!="function")throw Error(o(150));if(C=ee.call(C),C==null)throw Error(o(151));for(var oe=ee=null,ie=x,ue=x=0,Ye=null,xe=C.next();ie!==null&&!xe.done;ue++,xe=C.next()){ie.index>ue?(Ye=ie,ie=null):Ye=ie.sibling;var Vn=j(O,ie,xe.value,V);if(Vn===null){ie===null&&(ie=Ye);break}e&&ie&&Vn.alternate===null&&t(O,ie),x=c(Vn,x,ue),oe===null?ee=Vn:oe.sibling=Vn,oe=Vn,ie=Ye}if(xe.done)return i(O,ie),Le&&ar(O,ue),ee;if(ie===null){for(;!xe.done;ue++,xe=C.next())xe=U(O,xe.value,V),xe!==null&&(x=c(xe,x,ue),oe===null?ee=xe:oe.sibling=xe,oe=xe);return Le&&ar(O,ue),ee}for(ie=a(O,ie);!xe.done;ue++,xe=C.next())xe=Y(ie,O,ue,xe.value,V),xe!==null&&(e&&xe.alternate!==null&&ie.delete(xe.key===null?ue:xe.key),x=c(xe,x,ue),oe===null?ee=xe:oe.sibling=xe,oe=xe);return e&&ie.forEach(function(y0){return t(O,y0)}),Le&&ar(O,ue),ee}function Ue(O,x,C,V){if(typeof C=="object"&&C!==null&&C.type===W&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case R:e:{for(var ee=C.key,oe=x;oe!==null;){if(oe.key===ee){if(ee=C.type,ee===W){if(oe.tag===7){i(O,oe.sibling),x=u(oe,C.props.children),x.return=O,O=x;break e}}else if(oe.elementType===ee||typeof ee=="object"&&ee!==null&&ee.$$typeof===Te&&Af(ee)===oe.type){i(O,oe.sibling),x=u(oe,C.props),x.ref=Zo(O,oe,C),x.return=O,O=x;break e}i(O,oe);break}else t(O,oe);oe=oe.sibling}C.type===W?(x=hr(C.props.children,O.mode,V,C.key),x.return=O,O=x):(V=Fa(C.type,C.key,C.props,null,O.mode,V),V.ref=Zo(O,x,C),V.return=O,O=V)}return h(O);case B:e:{for(oe=C.key;x!==null;){if(x.key===oe)if(x.tag===4&&x.stateNode.containerInfo===C.containerInfo&&x.stateNode.implementation===C.implementation){i(O,x.sibling),x=u(x,C.children||[]),x.return=O,O=x;break e}else{i(O,x);break}else t(O,x);x=x.sibling}x=Nu(C,O.mode,V),x.return=O,O=x}return h(O);case Te:return oe=C._init,Ue(O,x,oe(C._payload),V)}if(gt(C))return X(O,x,C,V);if(ne(C))return G(O,x,C,V);ga(O,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,x!==null&&x.tag===6?(i(O,x.sibling),x=u(x,C),x.return=O,O=x):(i(O,x),x=Pu(C,O.mode,V),x.return=O,O=x),h(O)):i(O,x)}return Ue}var Kr=Pf(!0),Nf=Pf(!1),ya=Rn(null),va=null,Yr=null,Fl=null;function Ul(){Fl=Yr=va=null}function Hl(e){var t=ya.current;Re(ya),e._currentValue=t}function Bl(e,t,i){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===i)break;e=e.return}}function Qr(e,t){va=e,Fl=Yr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ct=!0),e.firstContext=null)}function Pt(e){var t=e._currentValue;if(Fl!==e)if(e={context:e,memoizedValue:t,next:null},Yr===null){if(va===null)throw Error(o(308));Yr=e,va.dependencies={lanes:0,firstContext:e}}else Yr=Yr.next=e;return t}var sr=null;function Vl(e){sr===null?sr=[e]:sr.push(e)}function Df(e,t,i,a){var u=t.interleaved;return u===null?(i.next=i,Vl(t)):(i.next=u.next,u.next=i),t.interleaved=i,pn(e,a)}function pn(e,t){e.lanes|=t;var i=e.alternate;for(i!==null&&(i.lanes|=t),i=e,e=e.return;e!==null;)e.childLanes|=t,i=e.alternate,i!==null&&(i.childLanes|=t),i=e,e=e.return;return i.tag===3?i.stateNode:null}var In=!1;function ql(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function hn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zn(e,t,i){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,we&2){var u=a.pending;return u===null?t.next=t:(t.next=u.next,u.next=t),a.pending=t,pn(e,i)}return u=a.interleaved,u===null?(t.next=t,Vl(a)):(t.next=u.next,u.next=t),a.interleaved=t,pn(e,i)}function ba(e,t,i){if(t=t.updateQueue,t!==null&&(t=t.shared,(i&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,il(e,i)}}function Lf(e,t){var i=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,i===a)){var u=null,c=null;if(i=i.firstBaseUpdate,i!==null){do{var h={eventTime:i.eventTime,lane:i.lane,tag:i.tag,payload:i.payload,callback:i.callback,next:null};c===null?u=c=h:c=c.next=h,i=i.next}while(i!==null);c===null?u=c=t:c=c.next=t}else u=c=t;i={baseState:a.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:a.shared,effects:a.effects},e.updateQueue=i;return}e=i.lastBaseUpdate,e===null?i.firstBaseUpdate=t:e.next=t,i.lastBaseUpdate=t}function _a(e,t,i,a){var u=e.updateQueue;In=!1;var c=u.firstBaseUpdate,h=u.lastBaseUpdate,v=u.shared.pending;if(v!==null){u.shared.pending=null;var _=v,P=_.next;_.next=null,h===null?c=P:h.next=P,h=_;var $=e.alternate;$!==null&&($=$.updateQueue,v=$.lastBaseUpdate,v!==h&&(v===null?$.firstBaseUpdate=P:v.next=P,$.lastBaseUpdate=_))}if(c!==null){var U=u.baseState;h=0,$=P=_=null,v=c;do{var j=v.lane,Y=v.eventTime;if((a&j)===j){$!==null&&($=$.next={eventTime:Y,lane:0,tag:v.tag,payload:v.payload,callback:v.callback,next:null});e:{var X=e,G=v;switch(j=t,Y=i,G.tag){case 1:if(X=G.payload,typeof X=="function"){U=X.call(Y,U,j);break e}U=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=G.payload,j=typeof X=="function"?X.call(Y,U,j):X,j==null)break e;U=K({},U,j);break e;case 2:In=!0}}v.callback!==null&&v.lane!==0&&(e.flags|=64,j=u.effects,j===null?u.effects=[v]:j.push(v))}else Y={eventTime:Y,lane:j,tag:v.tag,payload:v.payload,callback:v.callback,next:null},$===null?(P=$=Y,_=U):$=$.next=Y,h|=j;if(v=v.next,v===null){if(v=u.shared.pending,v===null)break;j=v,v=j.next,j.next=null,u.lastBaseUpdate=j,u.shared.pending=null}}while(!0);if($===null&&(_=U),u.baseState=_,u.firstBaseUpdate=P,u.lastBaseUpdate=$,t=u.shared.interleaved,t!==null){u=t;do h|=u.lane,u=u.next;while(u!==t)}else c===null&&(u.shared.lanes=0);cr|=h,e.lanes=h,e.memoizedState=U}}function Mf(e,t,i){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],u=a.callback;if(u!==null){if(a.callback=null,a=i,typeof u!="function")throw Error(o(191,u));u.call(a)}}}var ei={},tn=Rn(ei),ti=Rn(ei),ni=Rn(ei);function lr(e){if(e===ei)throw Error(o(174));return e}function Wl(e,t){switch(Ne(ni,t),Ne(ti,e),Ne(tn,ei),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nr(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nr(t,e)}Re(tn),Ne(tn,t)}function Xr(){Re(tn),Re(ti),Re(ni)}function If(e){lr(ni.current);var t=lr(tn.current),i=Nr(t,e.type);t!==i&&(Ne(ti,e),Ne(tn,i))}function Kl(e){ti.current===e&&(Re(tn),Re(ti))}var Ie=Rn(0);function Ea(e){for(var t=e;t!==null;){if(t.tag===13){var i=t.memoizedState;if(i!==null&&(i=i.dehydrated,i===null||i.data==="$?"||i.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Yl=[];function Ql(){for(var e=0;e<Yl.length;e++)Yl[e]._workInProgressVersionPrimary=null;Yl.length=0}var wa=z.ReactCurrentDispatcher,Xl=z.ReactCurrentBatchConfig,ur=0,ze=null,Be=null,We=null,xa=!1,ri=!1,oi=0,Fv=0;function Ze(){throw Error(o(321))}function Gl(e,t){if(t===null)return!1;for(var i=0;i<t.length&&i<e.length;i++)if(!Ht(e[i],t[i]))return!1;return!0}function Jl(e,t,i,a,u,c){if(ur=c,ze=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,wa.current=e===null||e.memoizedState===null?Vv:qv,e=i(a,u),ri){c=0;do{if(ri=!1,oi=0,25<=c)throw Error(o(301));c+=1,We=Be=null,t.updateQueue=null,wa.current=Wv,e=i(a,u)}while(ri)}if(wa.current=Oa,t=Be!==null&&Be.next!==null,ur=0,We=Be=ze=null,xa=!1,t)throw Error(o(300));return e}function Zl(){var e=oi!==0;return oi=0,e}function nn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return We===null?ze.memoizedState=We=e:We=We.next=e,We}function Nt(){if(Be===null){var e=ze.alternate;e=e!==null?e.memoizedState:null}else e=Be.next;var t=We===null?ze.memoizedState:We.next;if(t!==null)We=t,Be=e;else{if(e===null)throw Error(o(310));Be=e,e={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},We===null?ze.memoizedState=We=e:We=We.next=e}return We}function ii(e,t){return typeof t=="function"?t(e):t}function eu(e){var t=Nt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=Be,u=a.baseQueue,c=i.pending;if(c!==null){if(u!==null){var h=u.next;u.next=c.next,c.next=h}a.baseQueue=u=c,i.pending=null}if(u!==null){c=u.next,a=a.baseState;var v=h=null,_=null,P=c;do{var $=P.lane;if((ur&$)===$)_!==null&&(_=_.next={lane:0,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null}),a=P.hasEagerState?P.eagerState:e(a,P.action);else{var U={lane:$,action:P.action,hasEagerState:P.hasEagerState,eagerState:P.eagerState,next:null};_===null?(v=_=U,h=a):_=_.next=U,ze.lanes|=$,cr|=$}P=P.next}while(P!==null&&P!==c);_===null?h=a:_.next=v,Ht(a,t.memoizedState)||(ct=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=_,i.lastRenderedState=a}if(e=i.interleaved,e!==null){u=e;do c=u.lane,ze.lanes|=c,cr|=c,u=u.next;while(u!==e)}else u===null&&(i.lanes=0);return[t.memoizedState,i.dispatch]}function tu(e){var t=Nt(),i=t.queue;if(i===null)throw Error(o(311));i.lastRenderedReducer=e;var a=i.dispatch,u=i.pending,c=t.memoizedState;if(u!==null){i.pending=null;var h=u=u.next;do c=e(c,h.action),h=h.next;while(h!==u);Ht(c,t.memoizedState)||(ct=!0),t.memoizedState=c,t.baseQueue===null&&(t.baseState=c),i.lastRenderedState=c}return[c,a]}function zf(){}function jf(e,t){var i=ze,a=Nt(),u=t(),c=!Ht(a.memoizedState,u);if(c&&(a.memoizedState=u,ct=!0),a=a.queue,nu(Uf.bind(null,i,a,e),[e]),a.getSnapshot!==t||c||We!==null&&We.memoizedState.tag&1){if(i.flags|=2048,ai(9,Ff.bind(null,i,a,u,t),void 0,null),Ke===null)throw Error(o(349));ur&30||$f(i,t,u)}return u}function $f(e,t,i){e.flags|=16384,e={getSnapshot:t,value:i},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.stores=[e]):(i=t.stores,i===null?t.stores=[e]:i.push(e))}function Ff(e,t,i,a){t.value=i,t.getSnapshot=a,Hf(t)&&Bf(e)}function Uf(e,t,i){return i(function(){Hf(t)&&Bf(e)})}function Hf(e){var t=e.getSnapshot;e=e.value;try{var i=t();return!Ht(e,i)}catch{return!0}}function Bf(e){var t=pn(e,1);t!==null&&Kt(t,e,1,-1)}function Vf(e){var t=nn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ii,lastRenderedState:e},t.queue=e,e=e.dispatch=Bv.bind(null,ze,e),[t.memoizedState,e]}function ai(e,t,i,a){return e={tag:e,create:t,destroy:i,deps:a,next:null},t=ze.updateQueue,t===null?(t={lastEffect:null,stores:null},ze.updateQueue=t,t.lastEffect=e.next=e):(i=t.lastEffect,i===null?t.lastEffect=e.next=e:(a=i.next,i.next=e,e.next=a,t.lastEffect=e)),e}function qf(){return Nt().memoizedState}function Sa(e,t,i,a){var u=nn();ze.flags|=e,u.memoizedState=ai(1|t,i,void 0,a===void 0?null:a)}function ka(e,t,i,a){var u=Nt();a=a===void 0?null:a;var c=void 0;if(Be!==null){var h=Be.memoizedState;if(c=h.destroy,a!==null&&Gl(a,h.deps)){u.memoizedState=ai(t,i,c,a);return}}ze.flags|=e,u.memoizedState=ai(1|t,i,c,a)}function Wf(e,t){return Sa(8390656,8,e,t)}function nu(e,t){return ka(2048,8,e,t)}function Kf(e,t){return ka(4,2,e,t)}function Yf(e,t){return ka(4,4,e,t)}function Qf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Xf(e,t,i){return i=i!=null?i.concat([e]):null,ka(4,4,Qf.bind(null,t,e),i)}function ru(){}function Gf(e,t){var i=Nt();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Gl(t,a[1])?a[0]:(i.memoizedState=[e,t],e)}function Jf(e,t){var i=Nt();t=t===void 0?null:t;var a=i.memoizedState;return a!==null&&t!==null&&Gl(t,a[1])?a[0]:(e=e(),i.memoizedState=[e,t],e)}function Zf(e,t,i){return ur&21?(Ht(i,t)||(i=Cd(),ze.lanes|=i,cr|=i,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ct=!0),e.memoizedState=i)}function Uv(e,t){var i=Oe;Oe=i!==0&&4>i?i:4,e(!0);var a=Xl.transition;Xl.transition={};try{e(!1),t()}finally{Oe=i,Xl.transition=a}}function ep(){return Nt().memoizedState}function Hv(e,t,i){var a=Un(e);if(i={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null},tp(e))np(t,i);else if(i=Df(e,t,i,a),i!==null){var u=it();Kt(i,e,a,u),rp(i,t,a)}}function Bv(e,t,i){var a=Un(e),u={lane:a,action:i,hasEagerState:!1,eagerState:null,next:null};if(tp(e))np(t,u);else{var c=e.alternate;if(e.lanes===0&&(c===null||c.lanes===0)&&(c=t.lastRenderedReducer,c!==null))try{var h=t.lastRenderedState,v=c(h,i);if(u.hasEagerState=!0,u.eagerState=v,Ht(v,h)){var _=t.interleaved;_===null?(u.next=u,Vl(t)):(u.next=_.next,_.next=u),t.interleaved=u;return}}catch{}finally{}i=Df(e,t,u,a),i!==null&&(u=it(),Kt(i,e,a,u),rp(i,t,a))}}function tp(e){var t=e.alternate;return e===ze||t!==null&&t===ze}function np(e,t){ri=xa=!0;var i=e.pending;i===null?t.next=t:(t.next=i.next,i.next=t),e.pending=t}function rp(e,t,i){if(i&4194240){var a=t.lanes;a&=e.pendingLanes,i|=a,t.lanes=i,il(e,i)}}var Oa={readContext:Pt,useCallback:Ze,useContext:Ze,useEffect:Ze,useImperativeHandle:Ze,useInsertionEffect:Ze,useLayoutEffect:Ze,useMemo:Ze,useReducer:Ze,useRef:Ze,useState:Ze,useDebugValue:Ze,useDeferredValue:Ze,useTransition:Ze,useMutableSource:Ze,useSyncExternalStore:Ze,useId:Ze,unstable_isNewReconciler:!1},Vv={readContext:Pt,useCallback:function(e,t){return nn().memoizedState=[e,t===void 0?null:t],e},useContext:Pt,useEffect:Wf,useImperativeHandle:function(e,t,i){return i=i!=null?i.concat([e]):null,Sa(4194308,4,Qf.bind(null,t,e),i)},useLayoutEffect:function(e,t){return Sa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Sa(4,2,e,t)},useMemo:function(e,t){var i=nn();return t=t===void 0?null:t,e=e(),i.memoizedState=[e,t],e},useReducer:function(e,t,i){var a=nn();return t=i!==void 0?i(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Hv.bind(null,ze,e),[a.memoizedState,e]},useRef:function(e){var t=nn();return e={current:e},t.memoizedState=e},useState:Vf,useDebugValue:ru,useDeferredValue:function(e){return nn().memoizedState=e},useTransition:function(){var e=Vf(!1),t=e[0];return e=Uv.bind(null,e[1]),nn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,i){var a=ze,u=nn();if(Le){if(i===void 0)throw Error(o(407));i=i()}else{if(i=t(),Ke===null)throw Error(o(349));ur&30||$f(a,t,i)}u.memoizedState=i;var c={value:i,getSnapshot:t};return u.queue=c,Wf(Uf.bind(null,a,c,e),[e]),a.flags|=2048,ai(9,Ff.bind(null,a,c,i,t),void 0,null),i},useId:function(){var e=nn(),t=Ke.identifierPrefix;if(Le){var i=fn,a=dn;i=(a&~(1<<32-Ut(a)-1)).toString(32)+i,t=":"+t+"R"+i,i=oi++,0<i&&(t+="H"+i.toString(32)),t+=":"}else i=Fv++,t=":"+t+"r"+i.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},qv={readContext:Pt,useCallback:Gf,useContext:Pt,useEffect:nu,useImperativeHandle:Xf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:Jf,useReducer:eu,useRef:qf,useState:function(){return eu(ii)},useDebugValue:ru,useDeferredValue:function(e){var t=Nt();return Zf(t,Be.memoizedState,e)},useTransition:function(){var e=eu(ii)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:jf,useId:ep,unstable_isNewReconciler:!1},Wv={readContext:Pt,useCallback:Gf,useContext:Pt,useEffect:nu,useImperativeHandle:Xf,useInsertionEffect:Kf,useLayoutEffect:Yf,useMemo:Jf,useReducer:tu,useRef:qf,useState:function(){return tu(ii)},useDebugValue:ru,useDeferredValue:function(e){var t=Nt();return Be===null?t.memoizedState=e:Zf(t,Be.memoizedState,e)},useTransition:function(){var e=tu(ii)[0],t=Nt().memoizedState;return[e,t]},useMutableSource:zf,useSyncExternalStore:jf,useId:ep,unstable_isNewReconciler:!1};function Vt(e,t){if(e&&e.defaultProps){t=K({},t),e=e.defaultProps;for(var i in e)t[i]===void 0&&(t[i]=e[i]);return t}return t}function ou(e,t,i,a){t=e.memoizedState,i=i(a,t),i=i==null?t:K({},t,i),e.memoizedState=i,e.lanes===0&&(e.updateQueue.baseState=i)}var Ta={isMounted:function(e){return(e=e._reactInternals)?nr(e)===e:!1},enqueueSetState:function(e,t,i){e=e._reactInternals;var a=it(),u=Un(e),c=hn(a,u);c.payload=t,i!=null&&(c.callback=i),t=zn(e,c,u),t!==null&&(Kt(t,e,u,a),ba(t,e,u))},enqueueReplaceState:function(e,t,i){e=e._reactInternals;var a=it(),u=Un(e),c=hn(a,u);c.tag=1,c.payload=t,i!=null&&(c.callback=i),t=zn(e,c,u),t!==null&&(Kt(t,e,u,a),ba(t,e,u))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var i=it(),a=Un(e),u=hn(i,a);u.tag=2,t!=null&&(u.callback=t),t=zn(e,u,a),t!==null&&(Kt(t,e,a,i),ba(t,e,a))}};function op(e,t,i,a,u,c,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,c,h):t.prototype&&t.prototype.isPureReactComponent?!Wo(i,a)||!Wo(u,c):!0}function ip(e,t,i){var a=!1,u=Ln,c=t.contextType;return typeof c=="object"&&c!==null?c=Pt(c):(u=ut(t)?or:Je.current,a=t.contextTypes,c=(a=a!=null)?Br(e,u):Ln),t=new t(i,c),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ta,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=u,e.__reactInternalMemoizedMaskedChildContext=c),t}function ap(e,t,i,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(i,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(i,a),t.state!==e&&Ta.enqueueReplaceState(t,t.state,null)}function iu(e,t,i,a){var u=e.stateNode;u.props=i,u.state=e.memoizedState,u.refs={},ql(e);var c=t.contextType;typeof c=="object"&&c!==null?u.context=Pt(c):(c=ut(t)?or:Je.current,u.context=Br(e,c)),u.state=e.memoizedState,c=t.getDerivedStateFromProps,typeof c=="function"&&(ou(e,t,c,i),u.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof u.getSnapshotBeforeUpdate=="function"||typeof u.UNSAFE_componentWillMount!="function"&&typeof u.componentWillMount!="function"||(t=u.state,typeof u.componentWillMount=="function"&&u.componentWillMount(),typeof u.UNSAFE_componentWillMount=="function"&&u.UNSAFE_componentWillMount(),t!==u.state&&Ta.enqueueReplaceState(u,u.state,null),_a(e,i,u,a),u.state=e.memoizedState),typeof u.componentDidMount=="function"&&(e.flags|=4194308)}function Gr(e,t){try{var i="",a=t;do i+=pe(a),a=a.return;while(a);var u=i}catch(c){u=`
Error generating stack: `+c.message+`
`+c.stack}return{value:e,source:t,stack:u,digest:null}}function au(e,t,i){return{value:e,source:null,stack:i??null,digest:t??null}}function su(e,t){try{console.error(t.value)}catch(i){setTimeout(function(){throw i})}}var Kv=typeof WeakMap=="function"?WeakMap:Map;function sp(e,t,i){i=hn(-1,i),i.tag=3,i.payload={element:null};var a=t.value;return i.callback=function(){La||(La=!0,wu=a),su(e,t)},i}function lp(e,t,i){i=hn(-1,i),i.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var u=t.value;i.payload=function(){return a(u)},i.callback=function(){su(e,t)}}var c=e.stateNode;return c!==null&&typeof c.componentDidCatch=="function"&&(i.callback=function(){su(e,t),typeof a!="function"&&($n===null?$n=new Set([this]):$n.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),i}function up(e,t,i){var a=e.pingCache;if(a===null){a=e.pingCache=new Kv;var u=new Set;a.set(t,u)}else u=a.get(t),u===void 0&&(u=new Set,a.set(t,u));u.has(i)||(u.add(i),e=s0.bind(null,e,t,i),t.then(e,e))}function cp(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function dp(e,t,i,a,u){return e.mode&1?(e.flags|=65536,e.lanes=u,e):(e===t?e.flags|=65536:(e.flags|=128,i.flags|=131072,i.flags&=-52805,i.tag===1&&(i.alternate===null?i.tag=17:(t=hn(-1,1),t.tag=2,zn(i,t,1))),i.lanes|=1),e)}var Yv=z.ReactCurrentOwner,ct=!1;function ot(e,t,i,a){t.child=e===null?Nf(t,null,i,a):Kr(t,e.child,i,a)}function fp(e,t,i,a,u){i=i.render;var c=t.ref;return Qr(t,u),a=Jl(e,t,i,a,c,u),i=Zl(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,mn(e,t,u)):(Le&&i&&Ml(t),t.flags|=1,ot(e,t,a,u),t.child)}function pp(e,t,i,a,u){if(e===null){var c=i.type;return typeof c=="function"&&!Au(c)&&c.defaultProps===void 0&&i.compare===null&&i.defaultProps===void 0?(t.tag=15,t.type=c,hp(e,t,c,a,u)):(e=Fa(i.type,null,a,t,t.mode,u),e.ref=t.ref,e.return=t,t.child=e)}if(c=e.child,!(e.lanes&u)){var h=c.memoizedProps;if(i=i.compare,i=i!==null?i:Wo,i(h,a)&&e.ref===t.ref)return mn(e,t,u)}return t.flags|=1,e=Bn(c,a),e.ref=t.ref,e.return=t,t.child=e}function hp(e,t,i,a,u){if(e!==null){var c=e.memoizedProps;if(Wo(c,a)&&e.ref===t.ref)if(ct=!1,t.pendingProps=a=c,(e.lanes&u)!==0)e.flags&131072&&(ct=!0);else return t.lanes=e.lanes,mn(e,t,u)}return lu(e,t,i,a,u)}function mp(e,t,i){var a=t.pendingProps,u=a.children,c=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ne(Zr,_t),_t|=i;else{if(!(i&1073741824))return e=c!==null?c.baseLanes|i:i,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ne(Zr,_t),_t|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=c!==null?c.baseLanes:i,Ne(Zr,_t),_t|=a}else c!==null?(a=c.baseLanes|i,t.memoizedState=null):a=i,Ne(Zr,_t),_t|=a;return ot(e,t,u,i),t.child}function gp(e,t){var i=t.ref;(e===null&&i!==null||e!==null&&e.ref!==i)&&(t.flags|=512,t.flags|=2097152)}function lu(e,t,i,a,u){var c=ut(i)?or:Je.current;return c=Br(t,c),Qr(t,u),i=Jl(e,t,i,a,c,u),a=Zl(),e!==null&&!ct?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~u,mn(e,t,u)):(Le&&a&&Ml(t),t.flags|=1,ot(e,t,i,u),t.child)}function yp(e,t,i,a,u){if(ut(i)){var c=!0;da(t)}else c=!1;if(Qr(t,u),t.stateNode===null)Aa(e,t),ip(t,i,a),iu(t,i,a,u),a=!0;else if(e===null){var h=t.stateNode,v=t.memoizedProps;h.props=v;var _=h.context,P=i.contextType;typeof P=="object"&&P!==null?P=Pt(P):(P=ut(i)?or:Je.current,P=Br(t,P));var $=i.getDerivedStateFromProps,U=typeof $=="function"||typeof h.getSnapshotBeforeUpdate=="function";U||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==a||_!==P)&&ap(t,h,a,P),In=!1;var j=t.memoizedState;h.state=j,_a(t,a,h,u),_=t.memoizedState,v!==a||j!==_||lt.current||In?(typeof $=="function"&&(ou(t,i,$,a),_=t.memoizedState),(v=In||op(t,i,v,a,j,_,P))?(U||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=_),h.props=a,h.state=_,h.context=P,a=v):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,Rf(e,t),v=t.memoizedProps,P=t.type===t.elementType?v:Vt(t.type,v),h.props=P,U=t.pendingProps,j=h.context,_=i.contextType,typeof _=="object"&&_!==null?_=Pt(_):(_=ut(i)?or:Je.current,_=Br(t,_));var Y=i.getDerivedStateFromProps;($=typeof Y=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(v!==U||j!==_)&&ap(t,h,a,_),In=!1,j=t.memoizedState,h.state=j,_a(t,a,h,u);var X=t.memoizedState;v!==U||j!==X||lt.current||In?(typeof Y=="function"&&(ou(t,i,Y,a),X=t.memoizedState),(P=In||op(t,i,P,a,j,X,_)||!1)?($||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,X,_),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,X,_)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=X),h.props=a,h.state=X,h.context=_,a=P):(typeof h.componentDidUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||v===e.memoizedProps&&j===e.memoizedState||(t.flags|=1024),a=!1)}return uu(e,t,i,a,c,u)}function uu(e,t,i,a,u,c){gp(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return u&&wf(t,i,!1),mn(e,t,c);a=t.stateNode,Yv.current=t;var v=h&&typeof i.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=Kr(t,e.child,null,c),t.child=Kr(t,null,v,c)):ot(e,t,v,c),t.memoizedState=a.state,u&&wf(t,i,!0),t.child}function vp(e){var t=e.stateNode;t.pendingContext?_f(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_f(e,t.context,!1),Wl(e,t.containerInfo)}function bp(e,t,i,a,u){return Wr(),$l(u),t.flags|=256,ot(e,t,i,a),t.child}var cu={dehydrated:null,treeContext:null,retryLane:0};function du(e){return{baseLanes:e,cachePool:null,transitions:null}}function _p(e,t,i){var a=t.pendingProps,u=Ie.current,c=!1,h=(t.flags&128)!==0,v;if((v=h)||(v=e!==null&&e.memoizedState===null?!1:(u&2)!==0),v?(c=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(u|=1),Ne(Ie,u&1),e===null)return jl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(h=a.children,e=a.fallback,c?(a=t.mode,c=t.child,h={mode:"hidden",children:h},!(a&1)&&c!==null?(c.childLanes=0,c.pendingProps=h):c=Ua(h,a,0,null),e=hr(e,a,i,null),c.return=t,e.return=t,c.sibling=e,t.child=c,t.child.memoizedState=du(i),t.memoizedState=cu,e):fu(t,h));if(u=e.memoizedState,u!==null&&(v=u.dehydrated,v!==null))return Qv(e,t,h,a,v,u,i);if(c){c=a.fallback,h=t.mode,u=e.child,v=u.sibling;var _={mode:"hidden",children:a.children};return!(h&1)&&t.child!==u?(a=t.child,a.childLanes=0,a.pendingProps=_,t.deletions=null):(a=Bn(u,_),a.subtreeFlags=u.subtreeFlags&14680064),v!==null?c=Bn(v,c):(c=hr(c,h,i,null),c.flags|=2),c.return=t,a.return=t,a.sibling=c,t.child=a,a=c,c=t.child,h=e.child.memoizedState,h=h===null?du(i):{baseLanes:h.baseLanes|i,cachePool:null,transitions:h.transitions},c.memoizedState=h,c.childLanes=e.childLanes&~i,t.memoizedState=cu,a}return c=e.child,e=c.sibling,a=Bn(c,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=i),a.return=t,a.sibling=null,e!==null&&(i=t.deletions,i===null?(t.deletions=[e],t.flags|=16):i.push(e)),t.child=a,t.memoizedState=null,a}function fu(e,t){return t=Ua({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ca(e,t,i,a){return a!==null&&$l(a),Kr(t,e.child,null,i),e=fu(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Qv(e,t,i,a,u,c,h){if(i)return t.flags&256?(t.flags&=-257,a=au(Error(o(422))),Ca(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(c=a.fallback,u=t.mode,a=Ua({mode:"visible",children:a.children},u,0,null),c=hr(c,u,h,null),c.flags|=2,a.return=t,c.return=t,a.sibling=c,t.child=a,t.mode&1&&Kr(t,e.child,null,h),t.child.memoizedState=du(h),t.memoizedState=cu,c);if(!(t.mode&1))return Ca(e,t,h,null);if(u.data==="$!"){if(a=u.nextSibling&&u.nextSibling.dataset,a)var v=a.dgst;return a=v,c=Error(o(419)),a=au(c,a,void 0),Ca(e,t,h,a)}if(v=(h&e.childLanes)!==0,ct||v){if(a=Ke,a!==null){switch(h&-h){case 4:u=2;break;case 16:u=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:u=32;break;case 536870912:u=268435456;break;default:u=0}u=u&(a.suspendedLanes|h)?0:u,u!==0&&u!==c.retryLane&&(c.retryLane=u,pn(e,u),Kt(a,e,u,-1))}return Cu(),a=au(Error(o(421))),Ca(e,t,h,a)}return u.data==="$?"?(t.flags|=128,t.child=e.child,t=l0.bind(null,e),u._reactRetry=t,null):(e=c.treeContext,bt=Dn(u.nextSibling),vt=t,Le=!0,Bt=null,e!==null&&(Ct[At++]=dn,Ct[At++]=fn,Ct[At++]=ir,dn=e.id,fn=e.overflow,ir=t),t=fu(t,a.children),t.flags|=4096,t)}function Ep(e,t,i){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Bl(e.return,t,i)}function pu(e,t,i,a,u){var c=e.memoizedState;c===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:i,tailMode:u}:(c.isBackwards=t,c.rendering=null,c.renderingStartTime=0,c.last=a,c.tail=i,c.tailMode=u)}function wp(e,t,i){var a=t.pendingProps,u=a.revealOrder,c=a.tail;if(ot(e,t,a.children,i),a=Ie.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ep(e,i,t);else if(e.tag===19)Ep(e,i,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(Ne(Ie,a),!(t.mode&1))t.memoizedState=null;else switch(u){case"forwards":for(i=t.child,u=null;i!==null;)e=i.alternate,e!==null&&Ea(e)===null&&(u=i),i=i.sibling;i=u,i===null?(u=t.child,t.child=null):(u=i.sibling,i.sibling=null),pu(t,!1,u,i,c);break;case"backwards":for(i=null,u=t.child,t.child=null;u!==null;){if(e=u.alternate,e!==null&&Ea(e)===null){t.child=u;break}e=u.sibling,u.sibling=i,i=u,u=e}pu(t,!0,i,null,c);break;case"together":pu(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Aa(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function mn(e,t,i){if(e!==null&&(t.dependencies=e.dependencies),cr|=t.lanes,!(i&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(o(153));if(t.child!==null){for(e=t.child,i=Bn(e,e.pendingProps),t.child=i,i.return=t;e.sibling!==null;)e=e.sibling,i=i.sibling=Bn(e,e.pendingProps),i.return=t;i.sibling=null}return t.child}function Xv(e,t,i){switch(t.tag){case 3:vp(t),Wr();break;case 5:If(t);break;case 1:ut(t.type)&&da(t);break;case 4:Wl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,u=t.memoizedProps.value;Ne(ya,a._currentValue),a._currentValue=u;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(Ne(Ie,Ie.current&1),t.flags|=128,null):i&t.child.childLanes?_p(e,t,i):(Ne(Ie,Ie.current&1),e=mn(e,t,i),e!==null?e.sibling:null);Ne(Ie,Ie.current&1);break;case 19:if(a=(i&t.childLanes)!==0,e.flags&128){if(a)return wp(e,t,i);t.flags|=128}if(u=t.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Ne(Ie,Ie.current),a)break;return null;case 22:case 23:return t.lanes=0,mp(e,t,i)}return mn(e,t,i)}var xp,hu,Sp,kp;xp=function(e,t){for(var i=t.child;i!==null;){if(i.tag===5||i.tag===6)e.appendChild(i.stateNode);else if(i.tag!==4&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return;i=i.return}i.sibling.return=i.return,i=i.sibling}},hu=function(){},Sp=function(e,t,i,a){var u=e.memoizedProps;if(u!==a){e=t.stateNode,lr(tn.current);var c=null;switch(i){case"input":u=xo(e,u),a=xo(e,a),c=[];break;case"select":u=K({},u,{value:void 0}),a=K({},a,{value:void 0}),c=[];break;case"textarea":u=Ar(e,u),a=Ar(e,a),c=[];break;default:typeof u.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=la)}Ys(i,a);var h;i=null;for(P in u)if(!a.hasOwnProperty(P)&&u.hasOwnProperty(P)&&u[P]!=null)if(P==="style"){var v=u[P];for(h in v)v.hasOwnProperty(h)&&(i||(i={}),i[h]="")}else P!=="dangerouslySetInnerHTML"&&P!=="children"&&P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&P!=="autoFocus"&&(l.hasOwnProperty(P)?c||(c=[]):(c=c||[]).push(P,null));for(P in a){var _=a[P];if(v=u!=null?u[P]:void 0,a.hasOwnProperty(P)&&_!==v&&(_!=null||v!=null))if(P==="style")if(v){for(h in v)!v.hasOwnProperty(h)||_&&_.hasOwnProperty(h)||(i||(i={}),i[h]="");for(h in _)_.hasOwnProperty(h)&&v[h]!==_[h]&&(i||(i={}),i[h]=_[h])}else i||(c||(c=[]),c.push(P,i)),i=_;else P==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,v=v?v.__html:void 0,_!=null&&v!==_&&(c=c||[]).push(P,_)):P==="children"?typeof _!="string"&&typeof _!="number"||(c=c||[]).push(P,""+_):P!=="suppressContentEditableWarning"&&P!=="suppressHydrationWarning"&&(l.hasOwnProperty(P)?(_!=null&&P==="onScroll"&&De("scroll",e),c||v===_||(c=[])):(c=c||[]).push(P,_))}i&&(c=c||[]).push("style",i);var P=c;(t.updateQueue=P)&&(t.flags|=4)}},kp=function(e,t,i,a){i!==a&&(t.flags|=4)};function si(e,t){if(!Le)switch(e.tailMode){case"hidden":t=e.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e.tail=null:i.sibling=null;break;case"collapsed":i=e.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,i=0,a=0;if(t)for(var u=e.child;u!==null;)i|=u.lanes|u.childLanes,a|=u.subtreeFlags&14680064,a|=u.flags&14680064,u.return=e,u=u.sibling;else for(u=e.child;u!==null;)i|=u.lanes|u.childLanes,a|=u.subtreeFlags,a|=u.flags,u.return=e,u=u.sibling;return e.subtreeFlags|=a,e.childLanes=i,t}function Gv(e,t,i){var a=t.pendingProps;switch(Il(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return ut(t.type)&&ca(),et(t),null;case 3:return a=t.stateNode,Xr(),Re(lt),Re(Je),Ql(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ma(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bt!==null&&(ku(Bt),Bt=null))),hu(e,t),et(t),null;case 5:Kl(t);var u=lr(ni.current);if(i=t.type,e!==null&&t.stateNode!=null)Sp(e,t,i,a,u),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(o(166));return et(t),null}if(e=lr(tn.current),ma(t)){a=t.stateNode,i=t.type;var c=t.memoizedProps;switch(a[en]=t,a[Go]=c,e=(t.mode&1)!==0,i){case"dialog":De("cancel",a),De("close",a);break;case"iframe":case"object":case"embed":De("load",a);break;case"video":case"audio":for(u=0;u<Yo.length;u++)De(Yo[u],a);break;case"source":De("error",a);break;case"img":case"image":case"link":De("error",a),De("load",a);break;case"details":De("toggle",a);break;case"input":$i(a,c),De("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!c.multiple},De("invalid",a);break;case"textarea":Oo(a,c),De("invalid",a)}Ys(i,c),u=null;for(var h in c)if(c.hasOwnProperty(h)){var v=c[h];h==="children"?typeof v=="string"?a.textContent!==v&&(c.suppressHydrationWarning!==!0&&sa(a.textContent,v,e),u=["children",v]):typeof v=="number"&&a.textContent!==""+v&&(c.suppressHydrationWarning!==!0&&sa(a.textContent,v,e),u=["children",""+v]):l.hasOwnProperty(h)&&v!=null&&h==="onScroll"&&De("scroll",a)}switch(i){case"input":kn(a),Fi(a,c,!0);break;case"textarea":kn(a),To(a);break;case"select":case"option":break;default:typeof c.onClick=="function"&&(a.onclick=la)}a=u,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=u.nodeType===9?u:u.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Co(i)),e==="http://www.w3.org/1999/xhtml"?i==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(i,{is:a.is}):(e=h.createElement(i),i==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,i),e[en]=t,e[Go]=a,xp(e,t,!1,!1),t.stateNode=e;e:{switch(h=Qs(i,a),i){case"dialog":De("cancel",e),De("close",e),u=a;break;case"iframe":case"object":case"embed":De("load",e),u=a;break;case"video":case"audio":for(u=0;u<Yo.length;u++)De(Yo[u],e);u=a;break;case"source":De("error",e),u=a;break;case"img":case"image":case"link":De("error",e),De("load",e),u=a;break;case"details":De("toggle",e),u=a;break;case"input":$i(e,a),u=xo(e,a),De("invalid",e);break;case"option":u=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},u=K({},a,{value:void 0}),De("invalid",e);break;case"textarea":Oo(e,a),u=Ar(e,a),De("invalid",e);break;default:u=a}Ys(i,u),v=u;for(c in v)if(v.hasOwnProperty(c)){var _=v[c];c==="style"?pd(e,_):c==="dangerouslySetInnerHTML"?(_=_?_.__html:void 0,_!=null&&dd(e,_)):c==="children"?typeof _=="string"?(i!=="textarea"||_!=="")&&Ao(e,_):typeof _=="number"&&Ao(e,""+_):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(l.hasOwnProperty(c)?_!=null&&c==="onScroll"&&De("scroll",e):_!=null&&L(e,c,_,h))}switch(i){case"input":kn(e),Fi(e,a,!1);break;case"textarea":kn(e),To(e);break;case"option":a.value!=null&&e.setAttribute("value",""+be(a.value));break;case"select":e.multiple=!!a.multiple,c=a.value,c!=null?Ft(e,!!a.multiple,c,!1):a.defaultValue!=null&&Ft(e,!!a.multiple,a.defaultValue,!0);break;default:typeof u.onClick=="function"&&(e.onclick=la)}switch(i){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)kp(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(o(166));if(i=lr(ni.current),lr(tn.current),ma(t)){if(a=t.stateNode,i=t.memoizedProps,a[en]=t,(c=a.nodeValue!==i)&&(e=vt,e!==null))switch(e.tag){case 3:sa(a.nodeValue,i,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&sa(a.nodeValue,i,(e.mode&1)!==0)}c&&(t.flags|=4)}else a=(i.nodeType===9?i:i.ownerDocument).createTextNode(a),a[en]=t,t.stateNode=a}return et(t),null;case 13:if(Re(Ie),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Le&&bt!==null&&t.mode&1&&!(t.flags&128))Cf(),Wr(),t.flags|=98560,c=!1;else if(c=ma(t),a!==null&&a.dehydrated!==null){if(e===null){if(!c)throw Error(o(318));if(c=t.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(o(317));c[en]=t}else Wr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),c=!1}else Bt!==null&&(ku(Bt),Bt=null),c=!0;if(!c)return t.flags&65536?t:null}return t.flags&128?(t.lanes=i,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||Ie.current&1?Ve===0&&(Ve=3):Cu())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Xr(),hu(e,t),e===null&&Qo(t.stateNode.containerInfo),et(t),null;case 10:return Hl(t.type._context),et(t),null;case 17:return ut(t.type)&&ca(),et(t),null;case 19:if(Re(Ie),c=t.memoizedState,c===null)return et(t),null;if(a=(t.flags&128)!==0,h=c.rendering,h===null)if(a)si(c,!1);else{if(Ve!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(h=Ea(e),h!==null){for(t.flags|=128,si(c,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=i,i=t.child;i!==null;)c=i,e=a,c.flags&=14680066,h=c.alternate,h===null?(c.childLanes=0,c.lanes=e,c.child=null,c.subtreeFlags=0,c.memoizedProps=null,c.memoizedState=null,c.updateQueue=null,c.dependencies=null,c.stateNode=null):(c.childLanes=h.childLanes,c.lanes=h.lanes,c.child=h.child,c.subtreeFlags=0,c.deletions=null,c.memoizedProps=h.memoizedProps,c.memoizedState=h.memoizedState,c.updateQueue=h.updateQueue,c.type=h.type,e=h.dependencies,c.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),i=i.sibling;return Ne(Ie,Ie.current&1|2),t.child}e=e.sibling}c.tail!==null&&Fe()>eo&&(t.flags|=128,a=!0,si(c,!1),t.lanes=4194304)}else{if(!a)if(e=Ea(h),e!==null){if(t.flags|=128,a=!0,i=e.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),si(c,!0),c.tail===null&&c.tailMode==="hidden"&&!h.alternate&&!Le)return et(t),null}else 2*Fe()-c.renderingStartTime>eo&&i!==1073741824&&(t.flags|=128,a=!0,si(c,!1),t.lanes=4194304);c.isBackwards?(h.sibling=t.child,t.child=h):(i=c.last,i!==null?i.sibling=h:t.child=h,c.last=h)}return c.tail!==null?(t=c.tail,c.rendering=t,c.tail=t.sibling,c.renderingStartTime=Fe(),t.sibling=null,i=Ie.current,Ne(Ie,a?i&1|2:i&1),t):(et(t),null);case 22:case 23:return Tu(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?_t&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(o(156,t.tag))}function Jv(e,t){switch(Il(t),t.tag){case 1:return ut(t.type)&&ca(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Xr(),Re(lt),Re(Je),Ql(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Kl(t),null;case 13:if(Re(Ie),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(o(340));Wr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Re(Ie),null;case 4:return Xr(),null;case 10:return Hl(t.type._context),null;case 22:case 23:return Tu(),null;case 24:return null;default:return null}}var Pa=!1,tt=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,Q=null;function Jr(e,t){var i=e.ref;if(i!==null)if(typeof i=="function")try{i(null)}catch(a){$e(e,t,a)}else i.current=null}function mu(e,t,i){try{i()}catch(a){$e(e,t,a)}}var Op=!1;function e0(e,t){if(Tl=Xi,e=rf(),bl(e)){if("selectionStart"in e)var i={start:e.selectionStart,end:e.selectionEnd};else e:{i=(i=e.ownerDocument)&&i.defaultView||window;var a=i.getSelection&&i.getSelection();if(a&&a.rangeCount!==0){i=a.anchorNode;var u=a.anchorOffset,c=a.focusNode;a=a.focusOffset;try{i.nodeType,c.nodeType}catch{i=null;break e}var h=0,v=-1,_=-1,P=0,$=0,U=e,j=null;t:for(;;){for(var Y;U!==i||u!==0&&U.nodeType!==3||(v=h+u),U!==c||a!==0&&U.nodeType!==3||(_=h+a),U.nodeType===3&&(h+=U.nodeValue.length),(Y=U.firstChild)!==null;)j=U,U=Y;for(;;){if(U===e)break t;if(j===i&&++P===u&&(v=h),j===c&&++$===a&&(_=h),(Y=U.nextSibling)!==null)break;U=j,j=U.parentNode}U=Y}i=v===-1||_===-1?null:{start:v,end:_}}else i=null}i=i||{start:0,end:0}}else i=null;for(Cl={focusedElem:e,selectionRange:i},Xi=!1,Q=t;Q!==null;)if(t=Q,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Q=e;else for(;Q!==null;){t=Q;try{var X=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(X!==null){var G=X.memoizedProps,Ue=X.memoizedState,O=t.stateNode,x=O.getSnapshotBeforeUpdate(t.elementType===t.type?G:Vt(t.type,G),Ue);O.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(o(163))}}catch(V){$e(t,t.return,V)}if(e=t.sibling,e!==null){e.return=t.return,Q=e;break}Q=t.return}return X=Op,Op=!1,X}function li(e,t,i){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var u=a=a.next;do{if((u.tag&e)===e){var c=u.destroy;u.destroy=void 0,c!==void 0&&mu(t,i,c)}u=u.next}while(u!==a)}}function Na(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var i=t=t.next;do{if((i.tag&e)===e){var a=i.create;i.destroy=a()}i=i.next}while(i!==t)}}function gu(e){var t=e.ref;if(t!==null){var i=e.stateNode;switch(e.tag){case 5:e=i;break;default:e=i}typeof t=="function"?t(e):t.current=e}}function Tp(e){var t=e.alternate;t!==null&&(e.alternate=null,Tp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[en],delete t[Go],delete t[Dl],delete t[Iv],delete t[zv])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Cp(e){return e.tag===5||e.tag===3||e.tag===4}function Ap(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Cp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function yu(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.nodeType===8?i.parentNode.insertBefore(e,t):i.insertBefore(e,t):(i.nodeType===8?(t=i.parentNode,t.insertBefore(e,i)):(t=i,t.appendChild(e)),i=i._reactRootContainer,i!=null||t.onclick!==null||(t.onclick=la));else if(a!==4&&(e=e.child,e!==null))for(yu(e,t,i),e=e.sibling;e!==null;)yu(e,t,i),e=e.sibling}function vu(e,t,i){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?i.insertBefore(e,t):i.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(vu(e,t,i),e=e.sibling;e!==null;)vu(e,t,i),e=e.sibling}var Qe=null,qt=!1;function jn(e,t,i){for(i=i.child;i!==null;)Pp(e,t,i),i=i.sibling}function Pp(e,t,i){if(Zt&&typeof Zt.onCommitFiberUnmount=="function")try{Zt.onCommitFiberUnmount(Vi,i)}catch{}switch(i.tag){case 5:tt||Jr(i,t);case 6:var a=Qe,u=qt;Qe=null,jn(e,t,i),Qe=a,qt=u,Qe!==null&&(qt?(e=Qe,i=i.stateNode,e.nodeType===8?e.parentNode.removeChild(i):e.removeChild(i)):Qe.removeChild(i.stateNode));break;case 18:Qe!==null&&(qt?(e=Qe,i=i.stateNode,e.nodeType===8?Nl(e.parentNode,i):e.nodeType===1&&Nl(e,i),Fo(e)):Nl(Qe,i.stateNode));break;case 4:a=Qe,u=qt,Qe=i.stateNode.containerInfo,qt=!0,jn(e,t,i),Qe=a,qt=u;break;case 0:case 11:case 14:case 15:if(!tt&&(a=i.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){u=a=a.next;do{var c=u,h=c.destroy;c=c.tag,h!==void 0&&(c&2||c&4)&&mu(i,t,h),u=u.next}while(u!==a)}jn(e,t,i);break;case 1:if(!tt&&(Jr(i,t),a=i.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=i.memoizedProps,a.state=i.memoizedState,a.componentWillUnmount()}catch(v){$e(i,t,v)}jn(e,t,i);break;case 21:jn(e,t,i);break;case 22:i.mode&1?(tt=(a=tt)||i.memoizedState!==null,jn(e,t,i),tt=a):jn(e,t,i);break;default:jn(e,t,i)}}function Np(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var i=e.stateNode;i===null&&(i=e.stateNode=new Zv),t.forEach(function(a){var u=u0.bind(null,e,a);i.has(a)||(i.add(a),a.then(u,u))})}}function Wt(e,t){var i=t.deletions;if(i!==null)for(var a=0;a<i.length;a++){var u=i[a];try{var c=e,h=t,v=h;e:for(;v!==null;){switch(v.tag){case 5:Qe=v.stateNode,qt=!1;break e;case 3:Qe=v.stateNode.containerInfo,qt=!0;break e;case 4:Qe=v.stateNode.containerInfo,qt=!0;break e}v=v.return}if(Qe===null)throw Error(o(160));Pp(c,h,u),Qe=null,qt=!1;var _=u.alternate;_!==null&&(_.return=null),u.return=null}catch(P){$e(u,t,P)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dp(t,e),t=t.sibling}function Dp(e,t){var i=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),rn(e),a&4){try{li(3,e,e.return),Na(3,e)}catch(G){$e(e,e.return,G)}try{li(5,e,e.return)}catch(G){$e(e,e.return,G)}}break;case 1:Wt(t,e),rn(e),a&512&&i!==null&&Jr(i,i.return);break;case 5:if(Wt(t,e),rn(e),a&512&&i!==null&&Jr(i,i.return),e.flags&32){var u=e.stateNode;try{Ao(u,"")}catch(G){$e(e,e.return,G)}}if(a&4&&(u=e.stateNode,u!=null)){var c=e.memoizedProps,h=i!==null?i.memoizedProps:c,v=e.type,_=e.updateQueue;if(e.updateQueue=null,_!==null)try{v==="input"&&c.type==="radio"&&c.name!=null&&So(u,c),Qs(v,h);var P=Qs(v,c);for(h=0;h<_.length;h+=2){var $=_[h],U=_[h+1];$==="style"?pd(u,U):$==="dangerouslySetInnerHTML"?dd(u,U):$==="children"?Ao(u,U):L(u,$,U,P)}switch(v){case"input":Cr(u,c);break;case"textarea":Pr(u,c);break;case"select":var j=u._wrapperState.wasMultiple;u._wrapperState.wasMultiple=!!c.multiple;var Y=c.value;Y!=null?Ft(u,!!c.multiple,Y,!1):j!==!!c.multiple&&(c.defaultValue!=null?Ft(u,!!c.multiple,c.defaultValue,!0):Ft(u,!!c.multiple,c.multiple?[]:"",!1))}u[Go]=c}catch(G){$e(e,e.return,G)}}break;case 6:if(Wt(t,e),rn(e),a&4){if(e.stateNode===null)throw Error(o(162));u=e.stateNode,c=e.memoizedProps;try{u.nodeValue=c}catch(G){$e(e,e.return,G)}}break;case 3:if(Wt(t,e),rn(e),a&4&&i!==null&&i.memoizedState.isDehydrated)try{Fo(t.containerInfo)}catch(G){$e(e,e.return,G)}break;case 4:Wt(t,e),rn(e);break;case 13:Wt(t,e),rn(e),u=e.child,u.flags&8192&&(c=u.memoizedState!==null,u.stateNode.isHidden=c,!c||u.alternate!==null&&u.alternate.memoizedState!==null||(Eu=Fe())),a&4&&Np(e);break;case 22:if($=i!==null&&i.memoizedState!==null,e.mode&1?(tt=(P=tt)||$,Wt(t,e),tt=P):Wt(t,e),rn(e),a&8192){if(P=e.memoizedState!==null,(e.stateNode.isHidden=P)&&!$&&e.mode&1)for(Q=e,$=e.child;$!==null;){for(U=Q=$;Q!==null;){switch(j=Q,Y=j.child,j.tag){case 0:case 11:case 14:case 15:li(4,j,j.return);break;case 1:Jr(j,j.return);var X=j.stateNode;if(typeof X.componentWillUnmount=="function"){a=j,i=j.return;try{t=a,X.props=t.memoizedProps,X.state=t.memoizedState,X.componentWillUnmount()}catch(G){$e(a,i,G)}}break;case 5:Jr(j,j.return);break;case 22:if(j.memoizedState!==null){Mp(U);continue}}Y!==null?(Y.return=j,Q=Y):Mp(U)}$=$.sibling}e:for($=null,U=e;;){if(U.tag===5){if($===null){$=U;try{u=U.stateNode,P?(c=u.style,typeof c.setProperty=="function"?c.setProperty("display","none","important"):c.display="none"):(v=U.stateNode,_=U.memoizedProps.style,h=_!=null&&_.hasOwnProperty("display")?_.display:null,v.style.display=fd("display",h))}catch(G){$e(e,e.return,G)}}}else if(U.tag===6){if($===null)try{U.stateNode.nodeValue=P?"":U.memoizedProps}catch(G){$e(e,e.return,G)}}else if((U.tag!==22&&U.tag!==23||U.memoizedState===null||U===e)&&U.child!==null){U.child.return=U,U=U.child;continue}if(U===e)break e;for(;U.sibling===null;){if(U.return===null||U.return===e)break e;$===U&&($=null),U=U.return}$===U&&($=null),U.sibling.return=U.return,U=U.sibling}}break;case 19:Wt(t,e),rn(e),a&4&&Np(e);break;case 21:break;default:Wt(t,e),rn(e)}}function rn(e){var t=e.flags;if(t&2){try{e:{for(var i=e.return;i!==null;){if(Cp(i)){var a=i;break e}i=i.return}throw Error(o(160))}switch(a.tag){case 5:var u=a.stateNode;a.flags&32&&(Ao(u,""),a.flags&=-33);var c=Ap(e);vu(e,c,u);break;case 3:case 4:var h=a.stateNode.containerInfo,v=Ap(e);yu(e,v,h);break;default:throw Error(o(161))}}catch(_){$e(e,e.return,_)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function t0(e,t,i){Q=e,Rp(e)}function Rp(e,t,i){for(var a=(e.mode&1)!==0;Q!==null;){var u=Q,c=u.child;if(u.tag===22&&a){var h=u.memoizedState!==null||Pa;if(!h){var v=u.alternate,_=v!==null&&v.memoizedState!==null||tt;v=Pa;var P=tt;if(Pa=h,(tt=_)&&!P)for(Q=u;Q!==null;)h=Q,_=h.child,h.tag===22&&h.memoizedState!==null?Ip(u):_!==null?(_.return=h,Q=_):Ip(u);for(;c!==null;)Q=c,Rp(c),c=c.sibling;Q=u,Pa=v,tt=P}Lp(e)}else u.subtreeFlags&8772&&c!==null?(c.return=u,Q=c):Lp(e)}}function Lp(e){for(;Q!==null;){var t=Q;if(t.flags&8772){var i=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Na(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!tt)if(i===null)a.componentDidMount();else{var u=t.elementType===t.type?i.memoizedProps:Vt(t.type,i.memoizedProps);a.componentDidUpdate(u,i.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var c=t.updateQueue;c!==null&&Mf(t,c,a);break;case 3:var h=t.updateQueue;if(h!==null){if(i=null,t.child!==null)switch(t.child.tag){case 5:i=t.child.stateNode;break;case 1:i=t.child.stateNode}Mf(t,h,i)}break;case 5:var v=t.stateNode;if(i===null&&t.flags&4){i=v;var _=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":_.autoFocus&&i.focus();break;case"img":_.src&&(i.src=_.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var P=t.alternate;if(P!==null){var $=P.memoizedState;if($!==null){var U=$.dehydrated;U!==null&&Fo(U)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(o(163))}tt||t.flags&512&&gu(t)}catch(j){$e(t,t.return,j)}}if(t===e){Q=null;break}if(i=t.sibling,i!==null){i.return=t.return,Q=i;break}Q=t.return}}function Mp(e){for(;Q!==null;){var t=Q;if(t===e){Q=null;break}var i=t.sibling;if(i!==null){i.return=t.return,Q=i;break}Q=t.return}}function Ip(e){for(;Q!==null;){var t=Q;try{switch(t.tag){case 0:case 11:case 15:var i=t.return;try{Na(4,t)}catch(_){$e(t,i,_)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var u=t.return;try{a.componentDidMount()}catch(_){$e(t,u,_)}}var c=t.return;try{gu(t)}catch(_){$e(t,c,_)}break;case 5:var h=t.return;try{gu(t)}catch(_){$e(t,h,_)}}}catch(_){$e(t,t.return,_)}if(t===e){Q=null;break}var v=t.sibling;if(v!==null){v.return=t.return,Q=v;break}Q=t.return}}var n0=Math.ceil,Da=z.ReactCurrentDispatcher,bu=z.ReactCurrentOwner,Dt=z.ReactCurrentBatchConfig,we=0,Ke=null,He=null,Xe=0,_t=0,Zr=Rn(0),Ve=0,ui=null,cr=0,Ra=0,_u=0,ci=null,dt=null,Eu=0,eo=1/0,gn=null,La=!1,wu=null,$n=null,Ma=!1,Fn=null,Ia=0,di=0,xu=null,za=-1,ja=0;function it(){return we&6?Fe():za!==-1?za:za=Fe()}function Un(e){return e.mode&1?we&2&&Xe!==0?Xe&-Xe:$v.transition!==null?(ja===0&&(ja=Cd()),ja):(e=Oe,e!==0||(e=window.event,e=e===void 0?16:zd(e.type)),e):1}function Kt(e,t,i,a){if(50<di)throw di=0,xu=null,Error(o(185));Mo(e,i,a),(!(we&2)||e!==Ke)&&(e===Ke&&(!(we&2)&&(Ra|=i),Ve===4&&Hn(e,Xe)),ft(e,a),i===1&&we===0&&!(t.mode&1)&&(eo=Fe()+500,fa&&Mn()))}function ft(e,t){var i=e.callbackNode;$y(e,t);var a=Ki(e,e===Ke?Xe:0);if(a===0)i!==null&&kd(i),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(i!=null&&kd(i),t===1)e.tag===0?jv(jp.bind(null,e)):xf(jp.bind(null,e)),Lv(function(){!(we&6)&&Mn()}),i=null;else{switch(Ad(a)){case 1:i=nl;break;case 4:i=Od;break;case 16:i=Bi;break;case 536870912:i=Td;break;default:i=Bi}i=Wp(i,zp.bind(null,e))}e.callbackPriority=t,e.callbackNode=i}}function zp(e,t){if(za=-1,ja=0,we&6)throw Error(o(327));var i=e.callbackNode;if(to()&&e.callbackNode!==i)return null;var a=Ki(e,e===Ke?Xe:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=$a(e,a);else{t=a;var u=we;we|=2;var c=Fp();(Ke!==e||Xe!==t)&&(gn=null,eo=Fe()+500,fr(e,t));do try{i0();break}catch(v){$p(e,v)}while(!0);Ul(),Da.current=c,we=u,He!==null?t=0:(Ke=null,Xe=0,t=Ve)}if(t!==0){if(t===2&&(u=rl(e),u!==0&&(a=u,t=Su(e,u))),t===1)throw i=ui,fr(e,0),Hn(e,a),ft(e,Fe()),i;if(t===6)Hn(e,a);else{if(u=e.current.alternate,!(a&30)&&!r0(u)&&(t=$a(e,a),t===2&&(c=rl(e),c!==0&&(a=c,t=Su(e,c))),t===1))throw i=ui,fr(e,0),Hn(e,a),ft(e,Fe()),i;switch(e.finishedWork=u,e.finishedLanes=a,t){case 0:case 1:throw Error(o(345));case 2:pr(e,dt,gn);break;case 3:if(Hn(e,a),(a&130023424)===a&&(t=Eu+500-Fe(),10<t)){if(Ki(e,0)!==0)break;if(u=e.suspendedLanes,(u&a)!==a){it(),e.pingedLanes|=e.suspendedLanes&u;break}e.timeoutHandle=Pl(pr.bind(null,e,dt,gn),t);break}pr(e,dt,gn);break;case 4:if(Hn(e,a),(a&4194240)===a)break;for(t=e.eventTimes,u=-1;0<a;){var h=31-Ut(a);c=1<<h,h=t[h],h>u&&(u=h),a&=~c}if(a=u,a=Fe()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*n0(a/1960))-a,10<a){e.timeoutHandle=Pl(pr.bind(null,e,dt,gn),a);break}pr(e,dt,gn);break;case 5:pr(e,dt,gn);break;default:throw Error(o(329))}}}return ft(e,Fe()),e.callbackNode===i?zp.bind(null,e):null}function Su(e,t){var i=ci;return e.current.memoizedState.isDehydrated&&(fr(e,t).flags|=256),e=$a(e,t),e!==2&&(t=dt,dt=i,t!==null&&ku(t)),e}function ku(e){dt===null?dt=e:dt.push.apply(dt,e)}function r0(e){for(var t=e;;){if(t.flags&16384){var i=t.updateQueue;if(i!==null&&(i=i.stores,i!==null))for(var a=0;a<i.length;a++){var u=i[a],c=u.getSnapshot;u=u.value;try{if(!Ht(c(),u))return!1}catch{return!1}}}if(i=t.child,t.subtreeFlags&16384&&i!==null)i.return=t,t=i;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Hn(e,t){for(t&=~_u,t&=~Ra,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var i=31-Ut(t),a=1<<i;e[i]=-1,t&=~a}}function jp(e){if(we&6)throw Error(o(327));to();var t=Ki(e,0);if(!(t&1))return ft(e,Fe()),null;var i=$a(e,t);if(e.tag!==0&&i===2){var a=rl(e);a!==0&&(t=a,i=Su(e,a))}if(i===1)throw i=ui,fr(e,0),Hn(e,t),ft(e,Fe()),i;if(i===6)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,pr(e,dt,gn),ft(e,Fe()),null}function Ou(e,t){var i=we;we|=1;try{return e(t)}finally{we=i,we===0&&(eo=Fe()+500,fa&&Mn())}}function dr(e){Fn!==null&&Fn.tag===0&&!(we&6)&&to();var t=we;we|=1;var i=Dt.transition,a=Oe;try{if(Dt.transition=null,Oe=1,e)return e()}finally{Oe=a,Dt.transition=i,we=t,!(we&6)&&Mn()}}function Tu(){_t=Zr.current,Re(Zr)}function fr(e,t){e.finishedWork=null,e.finishedLanes=0;var i=e.timeoutHandle;if(i!==-1&&(e.timeoutHandle=-1,Rv(i)),He!==null)for(i=He.return;i!==null;){var a=i;switch(Il(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&ca();break;case 3:Xr(),Re(lt),Re(Je),Ql();break;case 5:Kl(a);break;case 4:Xr();break;case 13:Re(Ie);break;case 19:Re(Ie);break;case 10:Hl(a.type._context);break;case 22:case 23:Tu()}i=i.return}if(Ke=e,He=e=Bn(e.current,null),Xe=_t=t,Ve=0,ui=null,_u=Ra=cr=0,dt=ci=null,sr!==null){for(t=0;t<sr.length;t++)if(i=sr[t],a=i.interleaved,a!==null){i.interleaved=null;var u=a.next,c=i.pending;if(c!==null){var h=c.next;c.next=u,a.next=h}i.pending=a}sr=null}return e}function $p(e,t){do{var i=He;try{if(Ul(),wa.current=Oa,xa){for(var a=ze.memoizedState;a!==null;){var u=a.queue;u!==null&&(u.pending=null),a=a.next}xa=!1}if(ur=0,We=Be=ze=null,ri=!1,oi=0,bu.current=null,i===null||i.return===null){Ve=1,ui=t,He=null;break}e:{var c=e,h=i.return,v=i,_=t;if(t=Xe,v.flags|=32768,_!==null&&typeof _=="object"&&typeof _.then=="function"){var P=_,$=v,U=$.tag;if(!($.mode&1)&&(U===0||U===11||U===15)){var j=$.alternate;j?($.updateQueue=j.updateQueue,$.memoizedState=j.memoizedState,$.lanes=j.lanes):($.updateQueue=null,$.memoizedState=null)}var Y=cp(h);if(Y!==null){Y.flags&=-257,dp(Y,h,v,c,t),Y.mode&1&&up(c,P,t),t=Y,_=P;var X=t.updateQueue;if(X===null){var G=new Set;G.add(_),t.updateQueue=G}else X.add(_);break e}else{if(!(t&1)){up(c,P,t),Cu();break e}_=Error(o(426))}}else if(Le&&v.mode&1){var Ue=cp(h);if(Ue!==null){!(Ue.flags&65536)&&(Ue.flags|=256),dp(Ue,h,v,c,t),$l(Gr(_,v));break e}}c=_=Gr(_,v),Ve!==4&&(Ve=2),ci===null?ci=[c]:ci.push(c),c=h;do{switch(c.tag){case 3:c.flags|=65536,t&=-t,c.lanes|=t;var O=sp(c,_,t);Lf(c,O);break e;case 1:v=_;var x=c.type,C=c.stateNode;if(!(c.flags&128)&&(typeof x.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&($n===null||!$n.has(C)))){c.flags|=65536,t&=-t,c.lanes|=t;var V=lp(c,v,t);Lf(c,V);break e}}c=c.return}while(c!==null)}Hp(i)}catch(ee){t=ee,He===i&&i!==null&&(He=i=i.return);continue}break}while(!0)}function Fp(){var e=Da.current;return Da.current=Oa,e===null?Oa:e}function Cu(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ke===null||!(cr&268435455)&&!(Ra&268435455)||Hn(Ke,Xe)}function $a(e,t){var i=we;we|=2;var a=Fp();(Ke!==e||Xe!==t)&&(gn=null,fr(e,t));do try{o0();break}catch(u){$p(e,u)}while(!0);if(Ul(),we=i,Da.current=a,He!==null)throw Error(o(261));return Ke=null,Xe=0,Ve}function o0(){for(;He!==null;)Up(He)}function i0(){for(;He!==null&&!Py();)Up(He)}function Up(e){var t=qp(e.alternate,e,_t);e.memoizedProps=e.pendingProps,t===null?Hp(e):He=t,bu.current=null}function Hp(e){var t=e;do{var i=t.alternate;if(e=t.return,t.flags&32768){if(i=Jv(i,t),i!==null){i.flags&=32767,He=i;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ve=6,He=null;return}}else if(i=Gv(i,t,_t),i!==null){He=i;return}if(t=t.sibling,t!==null){He=t;return}He=t=e}while(t!==null);Ve===0&&(Ve=5)}function pr(e,t,i){var a=Oe,u=Dt.transition;try{Dt.transition=null,Oe=1,a0(e,t,i,a)}finally{Dt.transition=u,Oe=a}return null}function a0(e,t,i,a){do to();while(Fn!==null);if(we&6)throw Error(o(327));i=e.finishedWork;var u=e.finishedLanes;if(i===null)return null;if(e.finishedWork=null,e.finishedLanes=0,i===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var c=i.lanes|i.childLanes;if(Fy(e,c),e===Ke&&(He=Ke=null,Xe=0),!(i.subtreeFlags&2064)&&!(i.flags&2064)||Ma||(Ma=!0,Wp(Bi,function(){return to(),null})),c=(i.flags&15990)!==0,i.subtreeFlags&15990||c){c=Dt.transition,Dt.transition=null;var h=Oe;Oe=1;var v=we;we|=4,bu.current=null,e0(e,i),Dp(i,e),Ov(Cl),Xi=!!Tl,Cl=Tl=null,e.current=i,t0(i),Ny(),we=v,Oe=h,Dt.transition=c}else e.current=i;if(Ma&&(Ma=!1,Fn=e,Ia=u),c=e.pendingLanes,c===0&&($n=null),Ly(i.stateNode),ft(e,Fe()),t!==null)for(a=e.onRecoverableError,i=0;i<t.length;i++)u=t[i],a(u.value,{componentStack:u.stack,digest:u.digest});if(La)throw La=!1,e=wu,wu=null,e;return Ia&1&&e.tag!==0&&to(),c=e.pendingLanes,c&1?e===xu?di++:(di=0,xu=e):di=0,Mn(),null}function to(){if(Fn!==null){var e=Ad(Ia),t=Dt.transition,i=Oe;try{if(Dt.transition=null,Oe=16>e?16:e,Fn===null)var a=!1;else{if(e=Fn,Fn=null,Ia=0,we&6)throw Error(o(331));var u=we;for(we|=4,Q=e.current;Q!==null;){var c=Q,h=c.child;if(Q.flags&16){var v=c.deletions;if(v!==null){for(var _=0;_<v.length;_++){var P=v[_];for(Q=P;Q!==null;){var $=Q;switch($.tag){case 0:case 11:case 15:li(8,$,c)}var U=$.child;if(U!==null)U.return=$,Q=U;else for(;Q!==null;){$=Q;var j=$.sibling,Y=$.return;if(Tp($),$===P){Q=null;break}if(j!==null){j.return=Y,Q=j;break}Q=Y}}}var X=c.alternate;if(X!==null){var G=X.child;if(G!==null){X.child=null;do{var Ue=G.sibling;G.sibling=null,G=Ue}while(G!==null)}}Q=c}}if(c.subtreeFlags&2064&&h!==null)h.return=c,Q=h;else e:for(;Q!==null;){if(c=Q,c.flags&2048)switch(c.tag){case 0:case 11:case 15:li(9,c,c.return)}var O=c.sibling;if(O!==null){O.return=c.return,Q=O;break e}Q=c.return}}var x=e.current;for(Q=x;Q!==null;){h=Q;var C=h.child;if(h.subtreeFlags&2064&&C!==null)C.return=h,Q=C;else e:for(h=x;Q!==null;){if(v=Q,v.flags&2048)try{switch(v.tag){case 0:case 11:case 15:Na(9,v)}}catch(ee){$e(v,v.return,ee)}if(v===h){Q=null;break e}var V=v.sibling;if(V!==null){V.return=v.return,Q=V;break e}Q=v.return}}if(we=u,Mn(),Zt&&typeof Zt.onPostCommitFiberRoot=="function")try{Zt.onPostCommitFiberRoot(Vi,e)}catch{}a=!0}return a}finally{Oe=i,Dt.transition=t}}return!1}function Bp(e,t,i){t=Gr(i,t),t=sp(e,t,1),e=zn(e,t,1),t=it(),e!==null&&(Mo(e,1,t),ft(e,t))}function $e(e,t,i){if(e.tag===3)Bp(e,e,i);else for(;t!==null;){if(t.tag===3){Bp(t,e,i);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&($n===null||!$n.has(a))){e=Gr(i,e),e=lp(t,e,1),t=zn(t,e,1),e=it(),t!==null&&(Mo(t,1,e),ft(t,e));break}}t=t.return}}function s0(e,t,i){var a=e.pingCache;a!==null&&a.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&i,Ke===e&&(Xe&i)===i&&(Ve===4||Ve===3&&(Xe&130023424)===Xe&&500>Fe()-Eu?fr(e,0):_u|=i),ft(e,t)}function Vp(e,t){t===0&&(e.mode&1?(t=Wi,Wi<<=1,!(Wi&130023424)&&(Wi=4194304)):t=1);var i=it();e=pn(e,t),e!==null&&(Mo(e,t,i),ft(e,i))}function l0(e){var t=e.memoizedState,i=0;t!==null&&(i=t.retryLane),Vp(e,i)}function u0(e,t){var i=0;switch(e.tag){case 13:var a=e.stateNode,u=e.memoizedState;u!==null&&(i=u.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(o(314))}a!==null&&a.delete(t),Vp(e,i)}var qp;qp=function(e,t,i){if(e!==null)if(e.memoizedProps!==t.pendingProps||lt.current)ct=!0;else{if(!(e.lanes&i)&&!(t.flags&128))return ct=!1,Xv(e,t,i);ct=!!(e.flags&131072)}else ct=!1,Le&&t.flags&1048576&&Sf(t,ha,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;Aa(e,t),e=t.pendingProps;var u=Br(t,Je.current);Qr(t,i),u=Jl(null,t,a,e,u,i);var c=Zl();return t.flags|=1,typeof u=="object"&&u!==null&&typeof u.render=="function"&&u.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ut(a)?(c=!0,da(t)):c=!1,t.memoizedState=u.state!==null&&u.state!==void 0?u.state:null,ql(t),u.updater=Ta,t.stateNode=u,u._reactInternals=t,iu(t,a,e,i),t=uu(null,t,a,!0,c,i)):(t.tag=0,Le&&c&&Ml(t),ot(null,t,u,i),t=t.child),t;case 16:a=t.elementType;e:{switch(Aa(e,t),e=t.pendingProps,u=a._init,a=u(a._payload),t.type=a,u=t.tag=d0(a),e=Vt(a,e),u){case 0:t=lu(null,t,a,e,i);break e;case 1:t=yp(null,t,a,e,i);break e;case 11:t=fp(null,t,a,e,i);break e;case 14:t=pp(null,t,a,Vt(a.type,e),i);break e}throw Error(o(306,a,""))}return t;case 0:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Vt(a,u),lu(e,t,a,u,i);case 1:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Vt(a,u),yp(e,t,a,u,i);case 3:e:{if(vp(t),e===null)throw Error(o(387));a=t.pendingProps,c=t.memoizedState,u=c.element,Rf(e,t),_a(t,a,null,i);var h=t.memoizedState;if(a=h.element,c.isDehydrated)if(c={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=c,t.memoizedState=c,t.flags&256){u=Gr(Error(o(423)),t),t=bp(e,t,a,i,u);break e}else if(a!==u){u=Gr(Error(o(424)),t),t=bp(e,t,a,i,u);break e}else for(bt=Dn(t.stateNode.containerInfo.firstChild),vt=t,Le=!0,Bt=null,i=Nf(t,null,a,i),t.child=i;i;)i.flags=i.flags&-3|4096,i=i.sibling;else{if(Wr(),a===u){t=mn(e,t,i);break e}ot(e,t,a,i)}t=t.child}return t;case 5:return If(t),e===null&&jl(t),a=t.type,u=t.pendingProps,c=e!==null?e.memoizedProps:null,h=u.children,Al(a,u)?h=null:c!==null&&Al(a,c)&&(t.flags|=32),gp(e,t),ot(e,t,h,i),t.child;case 6:return e===null&&jl(t),null;case 13:return _p(e,t,i);case 4:return Wl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=Kr(t,null,a,i):ot(e,t,a,i),t.child;case 11:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Vt(a,u),fp(e,t,a,u,i);case 7:return ot(e,t,t.pendingProps,i),t.child;case 8:return ot(e,t,t.pendingProps.children,i),t.child;case 12:return ot(e,t,t.pendingProps.children,i),t.child;case 10:e:{if(a=t.type._context,u=t.pendingProps,c=t.memoizedProps,h=u.value,Ne(ya,a._currentValue),a._currentValue=h,c!==null)if(Ht(c.value,h)){if(c.children===u.children&&!lt.current){t=mn(e,t,i);break e}}else for(c=t.child,c!==null&&(c.return=t);c!==null;){var v=c.dependencies;if(v!==null){h=c.child;for(var _=v.firstContext;_!==null;){if(_.context===a){if(c.tag===1){_=hn(-1,i&-i),_.tag=2;var P=c.updateQueue;if(P!==null){P=P.shared;var $=P.pending;$===null?_.next=_:(_.next=$.next,$.next=_),P.pending=_}}c.lanes|=i,_=c.alternate,_!==null&&(_.lanes|=i),Bl(c.return,i,t),v.lanes|=i;break}_=_.next}}else if(c.tag===10)h=c.type===t.type?null:c.child;else if(c.tag===18){if(h=c.return,h===null)throw Error(o(341));h.lanes|=i,v=h.alternate,v!==null&&(v.lanes|=i),Bl(h,i,t),h=c.sibling}else h=c.child;if(h!==null)h.return=c;else for(h=c;h!==null;){if(h===t){h=null;break}if(c=h.sibling,c!==null){c.return=h.return,h=c;break}h=h.return}c=h}ot(e,t,u.children,i),t=t.child}return t;case 9:return u=t.type,a=t.pendingProps.children,Qr(t,i),u=Pt(u),a=a(u),t.flags|=1,ot(e,t,a,i),t.child;case 14:return a=t.type,u=Vt(a,t.pendingProps),u=Vt(a.type,u),pp(e,t,a,u,i);case 15:return hp(e,t,t.type,t.pendingProps,i);case 17:return a=t.type,u=t.pendingProps,u=t.elementType===a?u:Vt(a,u),Aa(e,t),t.tag=1,ut(a)?(e=!0,da(t)):e=!1,Qr(t,i),ip(t,a,u),iu(t,a,u,i),uu(null,t,a,!0,e,i);case 19:return wp(e,t,i);case 22:return mp(e,t,i)}throw Error(o(156,t.tag))};function Wp(e,t){return Sd(e,t)}function c0(e,t,i,a){this.tag=e,this.key=i,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rt(e,t,i,a){return new c0(e,t,i,a)}function Au(e){return e=e.prototype,!(!e||!e.isReactComponent)}function d0(e){if(typeof e=="function")return Au(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ye)return 11;if(e===je)return 14}return 2}function Bn(e,t){var i=e.alternate;return i===null?(i=Rt(e.tag,t,e.key,e.mode),i.elementType=e.elementType,i.type=e.type,i.stateNode=e.stateNode,i.alternate=e,e.alternate=i):(i.pendingProps=t,i.type=e.type,i.flags=0,i.subtreeFlags=0,i.deletions=null),i.flags=e.flags&14680064,i.childLanes=e.childLanes,i.lanes=e.lanes,i.child=e.child,i.memoizedProps=e.memoizedProps,i.memoizedState=e.memoizedState,i.updateQueue=e.updateQueue,t=e.dependencies,i.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},i.sibling=e.sibling,i.index=e.index,i.ref=e.ref,i}function Fa(e,t,i,a,u,c){var h=2;if(a=e,typeof e=="function")Au(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case W:return hr(i.children,u,c,t);case te:h=8,u|=8;break;case se:return e=Rt(12,i,t,u|2),e.elementType=se,e.lanes=c,e;case ve:return e=Rt(13,i,t,u),e.elementType=ve,e.lanes=c,e;case Pe:return e=Rt(19,i,t,u),e.elementType=Pe,e.lanes=c,e;case Ee:return Ua(i,u,c,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case J:h=10;break e;case le:h=9;break e;case ye:h=11;break e;case je:h=14;break e;case Te:h=16,a=null;break e}throw Error(o(130,e==null?e:typeof e,""))}return t=Rt(h,i,t,u),t.elementType=e,t.type=a,t.lanes=c,t}function hr(e,t,i,a){return e=Rt(7,e,a,t),e.lanes=i,e}function Ua(e,t,i,a){return e=Rt(22,e,a,t),e.elementType=Ee,e.lanes=i,e.stateNode={isHidden:!1},e}function Pu(e,t,i){return e=Rt(6,e,null,t),e.lanes=i,e}function Nu(e,t,i){return t=Rt(4,e.children!==null?e.children:[],e.key,t),t.lanes=i,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function f0(e,t,i,a,u){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ol(0),this.expirationTimes=ol(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ol(0),this.identifierPrefix=a,this.onRecoverableError=u,this.mutableSourceEagerHydrationData=null}function Du(e,t,i,a,u,c,h,v,_){return e=new f0(e,t,i,v,_),t===1?(t=1,c===!0&&(t|=8)):t=0,c=Rt(3,null,null,t),e.current=c,c.stateNode=e,c.memoizedState={element:a,isDehydrated:i,cache:null,transitions:null,pendingSuspenseBoundaries:null},ql(c),e}function p0(e,t,i){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:a==null?null:""+a,children:e,containerInfo:t,implementation:i}}function Kp(e){if(!e)return Ln;e=e._reactInternals;e:{if(nr(e)!==e||e.tag!==1)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ut(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(o(171))}if(e.tag===1){var i=e.type;if(ut(i))return Ef(e,i,t)}return t}function Yp(e,t,i,a,u,c,h,v,_){return e=Du(i,a,!0,e,u,c,h,v,_),e.context=Kp(null),i=e.current,a=it(),u=Un(i),c=hn(a,u),c.callback=t??null,zn(i,c,u),e.current.lanes=u,Mo(e,u,a),ft(e,a),e}function Ha(e,t,i,a){var u=t.current,c=it(),h=Un(u);return i=Kp(i),t.context===null?t.context=i:t.pendingContext=i,t=hn(c,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=zn(u,t,h),e!==null&&(Kt(e,u,h,c),ba(e,u,h)),h}function Ba(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Qp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var i=e.retryLane;e.retryLane=i!==0&&i<t?i:t}}function Ru(e,t){Qp(e,t),(e=e.alternate)&&Qp(e,t)}var Xp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Lu(e){this._internalRoot=e}Va.prototype.render=Lu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(o(409));Ha(e,t,null,null)},Va.prototype.unmount=Lu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;dr(function(){Ha(null,e,null,null)}),t[un]=null}};function Va(e){this._internalRoot=e}Va.prototype.unstable_scheduleHydration=function(e){if(e){var t=Dd();e={blockedOn:null,target:e,priority:t};for(var i=0;i<An.length&&t!==0&&t<An[i].priority;i++);An.splice(i,0,e),i===0&&Md(e)}};function Mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function qa(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Gp(){}function h0(e,t,i,a,u){if(u){if(typeof a=="function"){var c=a;a=function(){var P=Ba(h);c.call(P)}}var h=Yp(t,a,e,0,null,!1,!1,"",Gp);return e._reactRootContainer=h,e[un]=h.current,Qo(e.nodeType===8?e.parentNode:e),dr(),h}for(;u=e.lastChild;)e.removeChild(u);if(typeof a=="function"){var v=a;a=function(){var P=Ba(_);v.call(P)}}var _=Du(e,0,!1,null,null,!1,!1,"",Gp);return e._reactRootContainer=_,e[un]=_.current,Qo(e.nodeType===8?e.parentNode:e),dr(function(){Ha(t,_,i,a)}),_}function Wa(e,t,i,a,u){var c=i._reactRootContainer;if(c){var h=c;if(typeof u=="function"){var v=u;u=function(){var _=Ba(h);v.call(_)}}Ha(t,h,e,u)}else h=h0(i,t,e,u,a);return Ba(h)}Pd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var i=Lo(t.pendingLanes);i!==0&&(il(t,i|1),ft(t,Fe()),!(we&6)&&(eo=Fe()+500,Mn()))}break;case 13:dr(function(){var a=pn(e,1);if(a!==null){var u=it();Kt(a,e,1,u)}}),Ru(e,1)}},al=function(e){if(e.tag===13){var t=pn(e,134217728);if(t!==null){var i=it();Kt(t,e,134217728,i)}Ru(e,134217728)}},Nd=function(e){if(e.tag===13){var t=Un(e),i=pn(e,t);if(i!==null){var a=it();Kt(i,e,t,a)}Ru(e,t)}},Dd=function(){return Oe},Rd=function(e,t){var i=Oe;try{return Oe=e,t()}finally{Oe=i}},Js=function(e,t,i){switch(t){case"input":if(Cr(e,i),t=i.name,i.type==="radio"&&t!=null){for(i=e;i.parentNode;)i=i.parentNode;for(i=i.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<i.length;t++){var a=i[t];if(a!==e&&a.form===e.form){var u=ua(a);if(!u)throw Error(o(90));ji(a),Cr(a,u)}}}break;case"textarea":Pr(e,i);break;case"select":t=i.value,t!=null&&Ft(e,!!i.multiple,t,!1)}},yd=Ou,vd=dr;var m0={usingClientEntryPoint:!1,Events:[Jo,Ur,ua,md,gd,Ou]},fi={findFiberByHostInstance:rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},g0={bundleType:fi.bundleType,version:fi.version,rendererPackageName:fi.rendererPackageName,rendererConfig:fi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=wd(e),e===null?null:e.stateNode},findFiberByHostInstance:fi.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ka=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ka.isDisabled&&Ka.supportsFiber)try{Vi=Ka.inject(g0),Zt=Ka}catch{}}return pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m0,pt.createPortal=function(e,t){var i=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Mu(t))throw Error(o(200));return p0(e,t,null,i)},pt.createRoot=function(e,t){if(!Mu(e))throw Error(o(299));var i=!1,a="",u=Xp;return t!=null&&(t.unstable_strictMode===!0&&(i=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(u=t.onRecoverableError)),t=Du(e,1,!1,null,null,i,!1,a,u),e[un]=t.current,Qo(e.nodeType===8?e.parentNode:e),new Lu(t)},pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(o(188)):(e=Object.keys(e).join(","),Error(o(268,e)));return e=wd(t),e=e===null?null:e.stateNode,e},pt.flushSync=function(e){return dr(e)},pt.hydrate=function(e,t,i){if(!qa(t))throw Error(o(200));return Wa(null,e,t,!0,i)},pt.hydrateRoot=function(e,t,i){if(!Mu(e))throw Error(o(405));var a=i!=null&&i.hydratedSources||null,u=!1,c="",h=Xp;if(i!=null&&(i.unstable_strictMode===!0&&(u=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),t=Yp(t,null,e,1,i??null,u,!1,c,h),e[un]=t.current,Qo(e),a)for(e=0;e<a.length;e++)i=a[e],u=i._getVersion,u=u(i._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[i,u]:t.mutableSourceEagerHydrationData.push(i,u);return new Va(t)},pt.render=function(e,t,i){if(!qa(t))throw Error(o(200));return Wa(null,e,t,!1,i)},pt.unmountComponentAtNode=function(e){if(!qa(e))throw Error(o(40));return e._reactRootContainer?(dr(function(){Wa(null,null,e,!1,function(){e._reactRootContainer=null,e[un]=null})}),!0):!1},pt.unstable_batchedUpdates=Ou,pt.unstable_renderSubtreeIntoContainer=function(e,t,i,a){if(!qa(i))throw Error(o(200));if(e==null||e._reactInternals===void 0)throw Error(o(38));return Wa(e,t,i,!1,a)},pt.version="18.3.1-next-f1338f8080-20240426",pt}var ih;function S0(){if(ih)return ju.exports;ih=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(n){console.error(n)}}return r(),ju.exports=x0(),ju.exports}var ah;function k0(){if(ah)return Ya;ah=1;var r=S0();return Ya.createRoot=r.createRoot,Ya.hydrateRoot=r.hydrateRoot,Ya}var O0=k0(),ge=As();const Ae=Cm(ge);function Am(r,n){return function(){return r.apply(n,arguments)}}const{toString:T0}=Object.prototype,{getPrototypeOf:$c}=Object,Ps=(r=>n=>{const o=T0.call(n);return r[o]||(r[o]=o.slice(8,-1).toLowerCase())})(Object.create(null)),Gt=r=>(r=r.toLowerCase(),n=>Ps(n)===r),Ns=r=>n=>typeof n===r,{isArray:yo}=Array,wi=Ns("undefined");function C0(r){return r!==null&&!wi(r)&&r.constructor!==null&&!wi(r.constructor)&&wt(r.constructor.isBuffer)&&r.constructor.isBuffer(r)}const Pm=Gt("ArrayBuffer");function A0(r){let n;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?n=ArrayBuffer.isView(r):n=r&&r.buffer&&Pm(r.buffer),n}const P0=Ns("string"),wt=Ns("function"),Nm=Ns("number"),Ds=r=>r!==null&&typeof r=="object",N0=r=>r===!0||r===!1,cs=r=>{if(Ps(r)!=="object")return!1;const n=$c(r);return(n===null||n===Object.prototype||Object.getPrototypeOf(n)===null)&&!(Symbol.toStringTag in r)&&!(Symbol.iterator in r)},D0=Gt("Date"),R0=Gt("File"),L0=Gt("Blob"),M0=Gt("FileList"),I0=r=>Ds(r)&&wt(r.pipe),z0=r=>{let n;return r&&(typeof FormData=="function"&&r instanceof FormData||wt(r.append)&&((n=Ps(r))==="formdata"||n==="object"&&wt(r.toString)&&r.toString()==="[object FormData]"))},j0=Gt("URLSearchParams"),[$0,F0,U0,H0]=["ReadableStream","Request","Response","Headers"].map(Gt),B0=r=>r.trim?r.trim():r.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Oi(r,n,{allOwnKeys:o=!1}={}){if(r===null||typeof r>"u")return;let s,l;if(typeof r!="object"&&(r=[r]),yo(r))for(s=0,l=r.length;s<l;s++)n.call(null,r[s],s,r);else{const d=o?Object.getOwnPropertyNames(r):Object.keys(r),f=d.length;let p;for(s=0;s<f;s++)p=d[s],n.call(null,r[p],p,r)}}function Dm(r,n){n=n.toLowerCase();const o=Object.keys(r);let s=o.length,l;for(;s-- >0;)if(l=o[s],n===l.toLowerCase())return l;return null}const gr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Rm=r=>!wi(r)&&r!==gr;function bc(){const{caseless:r}=Rm(this)&&this||{},n={},o=(s,l)=>{const d=r&&Dm(n,l)||l;cs(n[d])&&cs(s)?n[d]=bc(n[d],s):cs(s)?n[d]=bc({},s):yo(s)?n[d]=s.slice():n[d]=s};for(let s=0,l=arguments.length;s<l;s++)arguments[s]&&Oi(arguments[s],o);return n}const V0=(r,n,o,{allOwnKeys:s}={})=>(Oi(n,(l,d)=>{o&&wt(l)?r[d]=Am(l,o):r[d]=l},{allOwnKeys:s}),r),q0=r=>(r.charCodeAt(0)===65279&&(r=r.slice(1)),r),W0=(r,n,o,s)=>{r.prototype=Object.create(n.prototype,s),r.prototype.constructor=r,Object.defineProperty(r,"super",{value:n.prototype}),o&&Object.assign(r.prototype,o)},K0=(r,n,o,s)=>{let l,d,f;const p={};if(n=n||{},r==null)return n;do{for(l=Object.getOwnPropertyNames(r),d=l.length;d-- >0;)f=l[d],(!s||s(f,r,n))&&!p[f]&&(n[f]=r[f],p[f]=!0);r=o!==!1&&$c(r)}while(r&&(!o||o(r,n))&&r!==Object.prototype);return n},Y0=(r,n,o)=>{r=String(r),(o===void 0||o>r.length)&&(o=r.length),o-=n.length;const s=r.indexOf(n,o);return s!==-1&&s===o},Q0=r=>{if(!r)return null;if(yo(r))return r;let n=r.length;if(!Nm(n))return null;const o=new Array(n);for(;n-- >0;)o[n]=r[n];return o},X0=(r=>n=>r&&n instanceof r)(typeof Uint8Array<"u"&&$c(Uint8Array)),G0=(r,n)=>{const s=(r&&r[Symbol.iterator]).call(r);let l;for(;(l=s.next())&&!l.done;){const d=l.value;n.call(r,d[0],d[1])}},J0=(r,n)=>{let o;const s=[];for(;(o=r.exec(n))!==null;)s.push(o);return s},Z0=Gt("HTMLFormElement"),eb=r=>r.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(o,s,l){return s.toUpperCase()+l}),sh=(({hasOwnProperty:r})=>(n,o)=>r.call(n,o))(Object.prototype),tb=Gt("RegExp"),Lm=(r,n)=>{const o=Object.getOwnPropertyDescriptors(r),s={};Oi(o,(l,d)=>{let f;(f=n(l,d,r))!==!1&&(s[d]=f||l)}),Object.defineProperties(r,s)},nb=r=>{Lm(r,(n,o)=>{if(wt(r)&&["arguments","caller","callee"].indexOf(o)!==-1)return!1;const s=r[o];if(wt(s)){if(n.enumerable=!1,"writable"in n){n.writable=!1;return}n.set||(n.set=()=>{throw Error("Can not rewrite read-only method '"+o+"'")})}})},rb=(r,n)=>{const o={},s=l=>{l.forEach(d=>{o[d]=!0})};return yo(r)?s(r):s(String(r).split(n)),o},ob=()=>{},ib=(r,n)=>r!=null&&Number.isFinite(r=+r)?r:n,Uu="abcdefghijklmnopqrstuvwxyz",lh="0123456789",Mm={DIGIT:lh,ALPHA:Uu,ALPHA_DIGIT:Uu+Uu.toUpperCase()+lh},ab=(r=16,n=Mm.ALPHA_DIGIT)=>{let o="";const{length:s}=n;for(;r--;)o+=n[Math.random()*s|0];return o};function sb(r){return!!(r&&wt(r.append)&&r[Symbol.toStringTag]==="FormData"&&r[Symbol.iterator])}const lb=r=>{const n=new Array(10),o=(s,l)=>{if(Ds(s)){if(n.indexOf(s)>=0)return;if(!("toJSON"in s)){n[l]=s;const d=yo(s)?[]:{};return Oi(s,(f,p)=>{const g=o(f,l+1);!wi(g)&&(d[p]=g)}),n[l]=void 0,d}}return s};return o(r,0)},ub=Gt("AsyncFunction"),cb=r=>r&&(Ds(r)||wt(r))&&wt(r.then)&&wt(r.catch),Im=((r,n)=>r?setImmediate:n?((o,s)=>(gr.addEventListener("message",({source:l,data:d})=>{l===gr&&d===o&&s.length&&s.shift()()},!1),l=>{s.push(l),gr.postMessage(o,"*")}))(`axios@${Math.random()}`,[]):o=>setTimeout(o))(typeof setImmediate=="function",wt(gr.postMessage)),db=typeof queueMicrotask<"u"?queueMicrotask.bind(gr):typeof process<"u"&&process.nextTick||Im,D={isArray:yo,isArrayBuffer:Pm,isBuffer:C0,isFormData:z0,isArrayBufferView:A0,isString:P0,isNumber:Nm,isBoolean:N0,isObject:Ds,isPlainObject:cs,isReadableStream:$0,isRequest:F0,isResponse:U0,isHeaders:H0,isUndefined:wi,isDate:D0,isFile:R0,isBlob:L0,isRegExp:tb,isFunction:wt,isStream:I0,isURLSearchParams:j0,isTypedArray:X0,isFileList:M0,forEach:Oi,merge:bc,extend:V0,trim:B0,stripBOM:q0,inherits:W0,toFlatObject:K0,kindOf:Ps,kindOfTest:Gt,endsWith:Y0,toArray:Q0,forEachEntry:G0,matchAll:J0,isHTMLForm:Z0,hasOwnProperty:sh,hasOwnProp:sh,reduceDescriptors:Lm,freezeMethods:nb,toObjectSet:rb,toCamelCase:eb,noop:ob,toFiniteNumber:ib,findKey:Dm,global:gr,isContextDefined:Rm,ALPHABET:Mm,generateString:ab,isSpecCompliantForm:sb,toJSONObject:lb,isAsyncFn:ub,isThenable:cb,setImmediate:Im,asap:db};function fe(r,n,o,s,l){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=r,this.name="AxiosError",n&&(this.code=n),o&&(this.config=o),s&&(this.request=s),l&&(this.response=l,this.status=l.status?l.status:null)}D.inherits(fe,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:D.toJSONObject(this.config),code:this.code,status:this.status}}});const zm=fe.prototype,jm={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(r=>{jm[r]={value:r}});Object.defineProperties(fe,jm);Object.defineProperty(zm,"isAxiosError",{value:!0});fe.from=(r,n,o,s,l,d)=>{const f=Object.create(zm);return D.toFlatObject(r,f,function(g){return g!==Error.prototype},p=>p!=="isAxiosError"),fe.call(f,r.message,n,o,s,l),f.cause=r,f.name=r.name,d&&Object.assign(f,d),f};const fb=null;function _c(r){return D.isPlainObject(r)||D.isArray(r)}function $m(r){return D.endsWith(r,"[]")?r.slice(0,-2):r}function uh(r,n,o){return r?r.concat(n).map(function(l,d){return l=$m(l),!o&&d?"["+l+"]":l}).join(o?".":""):n}function pb(r){return D.isArray(r)&&!r.some(_c)}const hb=D.toFlatObject(D,{},null,function(n){return/^is[A-Z]/.test(n)});function Rs(r,n,o){if(!D.isObject(r))throw new TypeError("target must be an object");n=n||new FormData,o=D.toFlatObject(o,{metaTokens:!0,dots:!1,indexes:!1},!1,function(b,S){return!D.isUndefined(S[b])});const s=o.metaTokens,l=o.visitor||m,d=o.dots,f=o.indexes,g=(o.Blob||typeof Blob<"u"&&Blob)&&D.isSpecCompliantForm(n);if(!D.isFunction(l))throw new TypeError("visitor must be a function");function y(w){if(w===null)return"";if(D.isDate(w))return w.toISOString();if(!g&&D.isBlob(w))throw new fe("Blob is not supported. Use a Buffer instead.");return D.isArrayBuffer(w)||D.isTypedArray(w)?g&&typeof Blob=="function"?new Blob([w]):Buffer.from(w):w}function m(w,b,S){let I=w;if(w&&!S&&typeof w=="object"){if(D.endsWith(b,"{}"))b=s?b:b.slice(0,-2),w=JSON.stringify(w);else if(D.isArray(w)&&pb(w)||(D.isFileList(w)||D.endsWith(b,"[]"))&&(I=D.toArray(w)))return b=$m(b),I.forEach(function(L,z){!(D.isUndefined(L)||L===null)&&n.append(f===!0?uh([b],z,d):f===null?b:b+"[]",y(L))}),!1}return _c(w)?!0:(n.append(uh(S,b,d),y(w)),!1)}const E=[],T=Object.assign(hb,{defaultVisitor:m,convertValue:y,isVisitable:_c});function N(w,b){if(!D.isUndefined(w)){if(E.indexOf(w)!==-1)throw Error("Circular reference detected in "+b.join("."));E.push(w),D.forEach(w,function(I,H){(!(D.isUndefined(I)||I===null)&&l.call(n,I,D.isString(H)?H.trim():H,b,T))===!0&&N(I,b?b.concat(H):[H])}),E.pop()}}if(!D.isObject(r))throw new TypeError("data must be an object");return N(r),n}function ch(r){const n={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(r).replace(/[!'()~]|%20|%00/g,function(s){return n[s]})}function Fc(r,n){this._pairs=[],r&&Rs(r,this,n)}const Fm=Fc.prototype;Fm.append=function(n,o){this._pairs.push([n,o])};Fm.toString=function(n){const o=n?function(s){return n.call(this,s,ch)}:ch;return this._pairs.map(function(l){return o(l[0])+"="+o(l[1])},"").join("&")};function mb(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Um(r,n,o){if(!n)return r;const s=o&&o.encode||mb;D.isFunction(o)&&(o={serialize:o});const l=o&&o.serialize;let d;if(l?d=l(n,o):d=D.isURLSearchParams(n)?n.toString():new Fc(n,o).toString(s),d){const f=r.indexOf("#");f!==-1&&(r=r.slice(0,f)),r+=(r.indexOf("?")===-1?"?":"&")+d}return r}class dh{constructor(){this.handlers=[]}use(n,o,s){return this.handlers.push({fulfilled:n,rejected:o,synchronous:s?s.synchronous:!1,runWhen:s?s.runWhen:null}),this.handlers.length-1}eject(n){this.handlers[n]&&(this.handlers[n]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(n){D.forEach(this.handlers,function(s){s!==null&&n(s)})}}const Hm={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},gb=typeof URLSearchParams<"u"?URLSearchParams:Fc,yb=typeof FormData<"u"?FormData:null,vb=typeof Blob<"u"?Blob:null,bb={isBrowser:!0,classes:{URLSearchParams:gb,FormData:yb,Blob:vb},protocols:["http","https","file","blob","url","data"]},Uc=typeof window<"u"&&typeof document<"u",Ec=typeof navigator=="object"&&navigator||void 0,_b=Uc&&(!Ec||["ReactNative","NativeScript","NS"].indexOf(Ec.product)<0),Eb=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",wb=Uc&&window.location.href||"http://localhost",xb=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Uc,hasStandardBrowserEnv:_b,hasStandardBrowserWebWorkerEnv:Eb,navigator:Ec,origin:wb},Symbol.toStringTag,{value:"Module"})),nt={...xb,...bb};function Sb(r,n){return Rs(r,new nt.classes.URLSearchParams,Object.assign({visitor:function(o,s,l,d){return nt.isNode&&D.isBuffer(o)?(this.append(s,o.toString("base64")),!1):d.defaultVisitor.apply(this,arguments)}},n))}function kb(r){return D.matchAll(/\w+|\[(\w*)]/g,r).map(n=>n[0]==="[]"?"":n[1]||n[0])}function Ob(r){const n={},o=Object.keys(r);let s;const l=o.length;let d;for(s=0;s<l;s++)d=o[s],n[d]=r[d];return n}function Bm(r){function n(o,s,l,d){let f=o[d++];if(f==="__proto__")return!0;const p=Number.isFinite(+f),g=d>=o.length;return f=!f&&D.isArray(l)?l.length:f,g?(D.hasOwnProp(l,f)?l[f]=[l[f],s]:l[f]=s,!p):((!l[f]||!D.isObject(l[f]))&&(l[f]=[]),n(o,s,l[f],d)&&D.isArray(l[f])&&(l[f]=Ob(l[f])),!p)}if(D.isFormData(r)&&D.isFunction(r.entries)){const o={};return D.forEachEntry(r,(s,l)=>{n(kb(s),l,o,0)}),o}return null}function Tb(r,n,o){if(D.isString(r))try{return(n||JSON.parse)(r),D.trim(r)}catch(s){if(s.name!=="SyntaxError")throw s}return(0,JSON.stringify)(r)}const Ti={transitional:Hm,adapter:["xhr","http","fetch"],transformRequest:[function(n,o){const s=o.getContentType()||"",l=s.indexOf("application/json")>-1,d=D.isObject(n);if(d&&D.isHTMLForm(n)&&(n=new FormData(n)),D.isFormData(n))return l?JSON.stringify(Bm(n)):n;if(D.isArrayBuffer(n)||D.isBuffer(n)||D.isStream(n)||D.isFile(n)||D.isBlob(n)||D.isReadableStream(n))return n;if(D.isArrayBufferView(n))return n.buffer;if(D.isURLSearchParams(n))return o.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),n.toString();let p;if(d){if(s.indexOf("application/x-www-form-urlencoded")>-1)return Sb(n,this.formSerializer).toString();if((p=D.isFileList(n))||s.indexOf("multipart/form-data")>-1){const g=this.env&&this.env.FormData;return Rs(p?{"files[]":n}:n,g&&new g,this.formSerializer)}}return d||l?(o.setContentType("application/json",!1),Tb(n)):n}],transformResponse:[function(n){const o=this.transitional||Ti.transitional,s=o&&o.forcedJSONParsing,l=this.responseType==="json";if(D.isResponse(n)||D.isReadableStream(n))return n;if(n&&D.isString(n)&&(s&&!this.responseType||l)){const f=!(o&&o.silentJSONParsing)&&l;try{return JSON.parse(n)}catch(p){if(f)throw p.name==="SyntaxError"?fe.from(p,fe.ERR_BAD_RESPONSE,this,null,this.response):p}}return n}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:nt.classes.FormData,Blob:nt.classes.Blob},validateStatus:function(n){return n>=200&&n<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};D.forEach(["delete","get","head","post","put","patch"],r=>{Ti.headers[r]={}});const Cb=D.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Ab=r=>{const n={};let o,s,l;return r&&r.split(`
`).forEach(function(f){l=f.indexOf(":"),o=f.substring(0,l).trim().toLowerCase(),s=f.substring(l+1).trim(),!(!o||n[o]&&Cb[o])&&(o==="set-cookie"?n[o]?n[o].push(s):n[o]=[s]:n[o]=n[o]?n[o]+", "+s:s)}),n},fh=Symbol("internals");function hi(r){return r&&String(r).trim().toLowerCase()}function ds(r){return r===!1||r==null?r:D.isArray(r)?r.map(ds):String(r)}function Pb(r){const n=Object.create(null),o=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let s;for(;s=o.exec(r);)n[s[1]]=s[2];return n}const Nb=r=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(r.trim());function Hu(r,n,o,s,l){if(D.isFunction(s))return s.call(this,n,o);if(l&&(n=o),!!D.isString(n)){if(D.isString(s))return n.indexOf(s)!==-1;if(D.isRegExp(s))return s.test(n)}}function Db(r){return r.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(n,o,s)=>o.toUpperCase()+s)}function Rb(r,n){const o=D.toCamelCase(" "+n);["get","set","has"].forEach(s=>{Object.defineProperty(r,s+o,{value:function(l,d,f){return this[s].call(this,n,l,d,f)},configurable:!0})})}class mt{constructor(n){n&&this.set(n)}set(n,o,s){const l=this;function d(p,g,y){const m=hi(g);if(!m)throw new Error("header name must be a non-empty string");const E=D.findKey(l,m);(!E||l[E]===void 0||y===!0||y===void 0&&l[E]!==!1)&&(l[E||g]=ds(p))}const f=(p,g)=>D.forEach(p,(y,m)=>d(y,m,g));if(D.isPlainObject(n)||n instanceof this.constructor)f(n,o);else if(D.isString(n)&&(n=n.trim())&&!Nb(n))f(Ab(n),o);else if(D.isHeaders(n))for(const[p,g]of n.entries())d(g,p,s);else n!=null&&d(o,n,s);return this}get(n,o){if(n=hi(n),n){const s=D.findKey(this,n);if(s){const l=this[s];if(!o)return l;if(o===!0)return Pb(l);if(D.isFunction(o))return o.call(this,l,s);if(D.isRegExp(o))return o.exec(l);throw new TypeError("parser must be boolean|regexp|function")}}}has(n,o){if(n=hi(n),n){const s=D.findKey(this,n);return!!(s&&this[s]!==void 0&&(!o||Hu(this,this[s],s,o)))}return!1}delete(n,o){const s=this;let l=!1;function d(f){if(f=hi(f),f){const p=D.findKey(s,f);p&&(!o||Hu(s,s[p],p,o))&&(delete s[p],l=!0)}}return D.isArray(n)?n.forEach(d):d(n),l}clear(n){const o=Object.keys(this);let s=o.length,l=!1;for(;s--;){const d=o[s];(!n||Hu(this,this[d],d,n,!0))&&(delete this[d],l=!0)}return l}normalize(n){const o=this,s={};return D.forEach(this,(l,d)=>{const f=D.findKey(s,d);if(f){o[f]=ds(l),delete o[d];return}const p=n?Db(d):String(d).trim();p!==d&&delete o[d],o[p]=ds(l),s[p]=!0}),this}concat(...n){return this.constructor.concat(this,...n)}toJSON(n){const o=Object.create(null);return D.forEach(this,(s,l)=>{s!=null&&s!==!1&&(o[l]=n&&D.isArray(s)?s.join(", "):s)}),o}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([n,o])=>n+": "+o).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(n){return n instanceof this?n:new this(n)}static concat(n,...o){const s=new this(n);return o.forEach(l=>s.set(l)),s}static accessor(n){const s=(this[fh]=this[fh]={accessors:{}}).accessors,l=this.prototype;function d(f){const p=hi(f);s[p]||(Rb(l,f),s[p]=!0)}return D.isArray(n)?n.forEach(d):d(n),this}}mt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);D.reduceDescriptors(mt.prototype,({value:r},n)=>{let o=n[0].toUpperCase()+n.slice(1);return{get:()=>r,set(s){this[o]=s}}});D.freezeMethods(mt);function Bu(r,n){const o=this||Ti,s=n||o,l=mt.from(s.headers);let d=s.data;return D.forEach(r,function(p){d=p.call(o,d,l.normalize(),n?n.status:void 0)}),l.normalize(),d}function Vm(r){return!!(r&&r.__CANCEL__)}function vo(r,n,o){fe.call(this,r??"canceled",fe.ERR_CANCELED,n,o),this.name="CanceledError"}D.inherits(vo,fe,{__CANCEL__:!0});function qm(r,n,o){const s=o.config.validateStatus;!o.status||!s||s(o.status)?r(o):n(new fe("Request failed with status code "+o.status,[fe.ERR_BAD_REQUEST,fe.ERR_BAD_RESPONSE][Math.floor(o.status/100)-4],o.config,o.request,o))}function Lb(r){const n=/^([-+\w]{1,25})(:?\/\/|:)/.exec(r);return n&&n[1]||""}function Mb(r,n){r=r||10;const o=new Array(r),s=new Array(r);let l=0,d=0,f;return n=n!==void 0?n:1e3,function(g){const y=Date.now(),m=s[d];f||(f=y),o[l]=g,s[l]=y;let E=d,T=0;for(;E!==l;)T+=o[E++],E=E%r;if(l=(l+1)%r,l===d&&(d=(d+1)%r),y-f<n)return;const N=m&&y-m;return N?Math.round(T*1e3/N):void 0}}function Ib(r,n){let o=0,s=1e3/n,l,d;const f=(y,m=Date.now())=>{o=m,l=null,d&&(clearTimeout(d),d=null),r.apply(null,y)};return[(...y)=>{const m=Date.now(),E=m-o;E>=s?f(y,m):(l=y,d||(d=setTimeout(()=>{d=null,f(l)},s-E)))},()=>l&&f(l)]}const gs=(r,n,o=3)=>{let s=0;const l=Mb(50,250);return Ib(d=>{const f=d.loaded,p=d.lengthComputable?d.total:void 0,g=f-s,y=l(g),m=f<=p;s=f;const E={loaded:f,total:p,progress:p?f/p:void 0,bytes:g,rate:y||void 0,estimated:y&&p&&m?(p-f)/y:void 0,event:d,lengthComputable:p!=null,[n?"download":"upload"]:!0};r(E)},o)},ph=(r,n)=>{const o=r!=null;return[s=>n[0]({lengthComputable:o,total:r,loaded:s}),n[1]]},hh=r=>(...n)=>D.asap(()=>r(...n)),zb=nt.hasStandardBrowserEnv?((r,n)=>o=>(o=new URL(o,nt.origin),r.protocol===o.protocol&&r.host===o.host&&(n||r.port===o.port)))(new URL(nt.origin),nt.navigator&&/(msie|trident)/i.test(nt.navigator.userAgent)):()=>!0,jb=nt.hasStandardBrowserEnv?{write(r,n,o,s,l,d){const f=[r+"="+encodeURIComponent(n)];D.isNumber(o)&&f.push("expires="+new Date(o).toGMTString()),D.isString(s)&&f.push("path="+s),D.isString(l)&&f.push("domain="+l),d===!0&&f.push("secure"),document.cookie=f.join("; ")},read(r){const n=document.cookie.match(new RegExp("(^|;\\s*)("+r+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove(r){this.write(r,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function $b(r){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(r)}function Fb(r,n){return n?r.replace(/\/?\/$/,"")+"/"+n.replace(/^\/+/,""):r}function Wm(r,n){return r&&!$b(n)?Fb(r,n):n}const mh=r=>r instanceof mt?{...r}:r;function Er(r,n){n=n||{};const o={};function s(y,m,E,T){return D.isPlainObject(y)&&D.isPlainObject(m)?D.merge.call({caseless:T},y,m):D.isPlainObject(m)?D.merge({},m):D.isArray(m)?m.slice():m}function l(y,m,E,T){if(D.isUndefined(m)){if(!D.isUndefined(y))return s(void 0,y,E,T)}else return s(y,m,E,T)}function d(y,m){if(!D.isUndefined(m))return s(void 0,m)}function f(y,m){if(D.isUndefined(m)){if(!D.isUndefined(y))return s(void 0,y)}else return s(void 0,m)}function p(y,m,E){if(E in n)return s(y,m);if(E in r)return s(void 0,y)}const g={url:d,method:d,data:d,baseURL:f,transformRequest:f,transformResponse:f,paramsSerializer:f,timeout:f,timeoutMessage:f,withCredentials:f,withXSRFToken:f,adapter:f,responseType:f,xsrfCookieName:f,xsrfHeaderName:f,onUploadProgress:f,onDownloadProgress:f,decompress:f,maxContentLength:f,maxBodyLength:f,beforeRedirect:f,transport:f,httpAgent:f,httpsAgent:f,cancelToken:f,socketPath:f,responseEncoding:f,validateStatus:p,headers:(y,m,E)=>l(mh(y),mh(m),E,!0)};return D.forEach(Object.keys(Object.assign({},r,n)),function(m){const E=g[m]||l,T=E(r[m],n[m],m);D.isUndefined(T)&&E!==p||(o[m]=T)}),o}const Km=r=>{const n=Er({},r);let{data:o,withXSRFToken:s,xsrfHeaderName:l,xsrfCookieName:d,headers:f,auth:p}=n;n.headers=f=mt.from(f),n.url=Um(Wm(n.baseURL,n.url),r.params,r.paramsSerializer),p&&f.set("Authorization","Basic "+btoa((p.username||"")+":"+(p.password?unescape(encodeURIComponent(p.password)):"")));let g;if(D.isFormData(o)){if(nt.hasStandardBrowserEnv||nt.hasStandardBrowserWebWorkerEnv)f.setContentType(void 0);else if((g=f.getContentType())!==!1){const[y,...m]=g?g.split(";").map(E=>E.trim()).filter(Boolean):[];f.setContentType([y||"multipart/form-data",...m].join("; "))}}if(nt.hasStandardBrowserEnv&&(s&&D.isFunction(s)&&(s=s(n)),s||s!==!1&&zb(n.url))){const y=l&&d&&jb.read(d);y&&f.set(l,y)}return n},Ub=typeof XMLHttpRequest<"u",Hb=Ub&&function(r){return new Promise(function(o,s){const l=Km(r);let d=l.data;const f=mt.from(l.headers).normalize();let{responseType:p,onUploadProgress:g,onDownloadProgress:y}=l,m,E,T,N,w;function b(){N&&N(),w&&w(),l.cancelToken&&l.cancelToken.unsubscribe(m),l.signal&&l.signal.removeEventListener("abort",m)}let S=new XMLHttpRequest;S.open(l.method.toUpperCase(),l.url,!0),S.timeout=l.timeout;function I(){if(!S)return;const L=mt.from("getAllResponseHeaders"in S&&S.getAllResponseHeaders()),R={data:!p||p==="text"||p==="json"?S.responseText:S.response,status:S.status,statusText:S.statusText,headers:L,config:r,request:S};qm(function(W){o(W),b()},function(W){s(W),b()},R),S=null}"onloadend"in S?S.onloadend=I:S.onreadystatechange=function(){!S||S.readyState!==4||S.status===0&&!(S.responseURL&&S.responseURL.indexOf("file:")===0)||setTimeout(I)},S.onabort=function(){S&&(s(new fe("Request aborted",fe.ECONNABORTED,r,S)),S=null)},S.onerror=function(){s(new fe("Network Error",fe.ERR_NETWORK,r,S)),S=null},S.ontimeout=function(){let z=l.timeout?"timeout of "+l.timeout+"ms exceeded":"timeout exceeded";const R=l.transitional||Hm;l.timeoutErrorMessage&&(z=l.timeoutErrorMessage),s(new fe(z,R.clarifyTimeoutError?fe.ETIMEDOUT:fe.ECONNABORTED,r,S)),S=null},d===void 0&&f.setContentType(null),"setRequestHeader"in S&&D.forEach(f.toJSON(),function(z,R){S.setRequestHeader(R,z)}),D.isUndefined(l.withCredentials)||(S.withCredentials=!!l.withCredentials),p&&p!=="json"&&(S.responseType=l.responseType),y&&([T,w]=gs(y,!0),S.addEventListener("progress",T)),g&&S.upload&&([E,N]=gs(g),S.upload.addEventListener("progress",E),S.upload.addEventListener("loadend",N)),(l.cancelToken||l.signal)&&(m=L=>{S&&(s(!L||L.type?new vo(null,r,S):L),S.abort(),S=null)},l.cancelToken&&l.cancelToken.subscribe(m),l.signal&&(l.signal.aborted?m():l.signal.addEventListener("abort",m)));const H=Lb(l.url);if(H&&nt.protocols.indexOf(H)===-1){s(new fe("Unsupported protocol "+H+":",fe.ERR_BAD_REQUEST,r));return}S.send(d||null)})},Bb=(r,n)=>{const{length:o}=r=r?r.filter(Boolean):[];if(n||o){let s=new AbortController,l;const d=function(y){if(!l){l=!0,p();const m=y instanceof Error?y:this.reason;s.abort(m instanceof fe?m:new vo(m instanceof Error?m.message:m))}};let f=n&&setTimeout(()=>{f=null,d(new fe(`timeout ${n} of ms exceeded`,fe.ETIMEDOUT))},n);const p=()=>{r&&(f&&clearTimeout(f),f=null,r.forEach(y=>{y.unsubscribe?y.unsubscribe(d):y.removeEventListener("abort",d)}),r=null)};r.forEach(y=>y.addEventListener("abort",d));const{signal:g}=s;return g.unsubscribe=()=>D.asap(p),g}},Vb=function*(r,n){let o=r.byteLength;if(o<n){yield r;return}let s=0,l;for(;s<o;)l=s+n,yield r.slice(s,l),s=l},qb=async function*(r,n){for await(const o of Wb(r))yield*Vb(o,n)},Wb=async function*(r){if(r[Symbol.asyncIterator]){yield*r;return}const n=r.getReader();try{for(;;){const{done:o,value:s}=await n.read();if(o)break;yield s}}finally{await n.cancel()}},gh=(r,n,o,s)=>{const l=qb(r,n);let d=0,f,p=g=>{f||(f=!0,s&&s(g))};return new ReadableStream({async pull(g){try{const{done:y,value:m}=await l.next();if(y){p(),g.close();return}let E=m.byteLength;if(o){let T=d+=E;o(T)}g.enqueue(new Uint8Array(m))}catch(y){throw p(y),y}},cancel(g){return p(g),l.return()}},{highWaterMark:2})},Ls=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Ym=Ls&&typeof ReadableStream=="function",Kb=Ls&&(typeof TextEncoder=="function"?(r=>n=>r.encode(n))(new TextEncoder):async r=>new Uint8Array(await new Response(r).arrayBuffer())),Qm=(r,...n)=>{try{return!!r(...n)}catch{return!1}},Yb=Ym&&Qm(()=>{let r=!1;const n=new Request(nt.origin,{body:new ReadableStream,method:"POST",get duplex(){return r=!0,"half"}}).headers.has("Content-Type");return r&&!n}),yh=64*1024,wc=Ym&&Qm(()=>D.isReadableStream(new Response("").body)),ys={stream:wc&&(r=>r.body)};Ls&&(r=>{["text","arrayBuffer","blob","formData","stream"].forEach(n=>{!ys[n]&&(ys[n]=D.isFunction(r[n])?o=>o[n]():(o,s)=>{throw new fe(`Response type '${n}' is not supported`,fe.ERR_NOT_SUPPORT,s)})})})(new Response);const Qb=async r=>{if(r==null)return 0;if(D.isBlob(r))return r.size;if(D.isSpecCompliantForm(r))return(await new Request(nt.origin,{method:"POST",body:r}).arrayBuffer()).byteLength;if(D.isArrayBufferView(r)||D.isArrayBuffer(r))return r.byteLength;if(D.isURLSearchParams(r)&&(r=r+""),D.isString(r))return(await Kb(r)).byteLength},Xb=async(r,n)=>{const o=D.toFiniteNumber(r.getContentLength());return o??Qb(n)},Gb=Ls&&(async r=>{let{url:n,method:o,data:s,signal:l,cancelToken:d,timeout:f,onDownloadProgress:p,onUploadProgress:g,responseType:y,headers:m,withCredentials:E="same-origin",fetchOptions:T}=Km(r);y=y?(y+"").toLowerCase():"text";let N=Bb([l,d&&d.toAbortSignal()],f),w;const b=N&&N.unsubscribe&&(()=>{N.unsubscribe()});let S;try{if(g&&Yb&&o!=="get"&&o!=="head"&&(S=await Xb(m,s))!==0){let R=new Request(n,{method:"POST",body:s,duplex:"half"}),B;if(D.isFormData(s)&&(B=R.headers.get("content-type"))&&m.setContentType(B),R.body){const[W,te]=ph(S,gs(hh(g)));s=gh(R.body,yh,W,te)}}D.isString(E)||(E=E?"include":"omit");const I="credentials"in Request.prototype;w=new Request(n,{...T,signal:N,method:o.toUpperCase(),headers:m.normalize().toJSON(),body:s,duplex:"half",credentials:I?E:void 0});let H=await fetch(w);const L=wc&&(y==="stream"||y==="response");if(wc&&(p||L&&b)){const R={};["status","statusText","headers"].forEach(se=>{R[se]=H[se]});const B=D.toFiniteNumber(H.headers.get("content-length")),[W,te]=p&&ph(B,gs(hh(p),!0))||[];H=new Response(gh(H.body,yh,W,()=>{te&&te(),b&&b()}),R)}y=y||"text";let z=await ys[D.findKey(ys,y)||"text"](H,r);return!L&&b&&b(),await new Promise((R,B)=>{qm(R,B,{data:z,headers:mt.from(H.headers),status:H.status,statusText:H.statusText,config:r,request:w})})}catch(I){throw b&&b(),I&&I.name==="TypeError"&&/fetch/i.test(I.message)?Object.assign(new fe("Network Error",fe.ERR_NETWORK,r,w),{cause:I.cause||I}):fe.from(I,I&&I.code,r,w)}}),xc={http:fb,xhr:Hb,fetch:Gb};D.forEach(xc,(r,n)=>{if(r){try{Object.defineProperty(r,"name",{value:n})}catch{}Object.defineProperty(r,"adapterName",{value:n})}});const vh=r=>`- ${r}`,Jb=r=>D.isFunction(r)||r===null||r===!1,Xm={getAdapter:r=>{r=D.isArray(r)?r:[r];const{length:n}=r;let o,s;const l={};for(let d=0;d<n;d++){o=r[d];let f;if(s=o,!Jb(o)&&(s=xc[(f=String(o)).toLowerCase()],s===void 0))throw new fe(`Unknown adapter '${f}'`);if(s)break;l[f||"#"+d]=s}if(!s){const d=Object.entries(l).map(([p,g])=>`adapter ${p} `+(g===!1?"is not supported by the environment":"is not available in the build"));let f=n?d.length>1?`since :
`+d.map(vh).join(`
`):" "+vh(d[0]):"as no adapter specified";throw new fe("There is no suitable adapter to dispatch the request "+f,"ERR_NOT_SUPPORT")}return s},adapters:xc};function Vu(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new vo(null,r)}function bh(r){return Vu(r),r.headers=mt.from(r.headers),r.data=Bu.call(r,r.transformRequest),["post","put","patch"].indexOf(r.method)!==-1&&r.headers.setContentType("application/x-www-form-urlencoded",!1),Xm.getAdapter(r.adapter||Ti.adapter)(r).then(function(s){return Vu(r),s.data=Bu.call(r,r.transformResponse,s),s.headers=mt.from(s.headers),s},function(s){return Vm(s)||(Vu(r),s&&s.response&&(s.response.data=Bu.call(r,r.transformResponse,s.response),s.response.headers=mt.from(s.response.headers))),Promise.reject(s)})}const Gm="1.7.9",Ms={};["object","boolean","number","function","string","symbol"].forEach((r,n)=>{Ms[r]=function(s){return typeof s===r||"a"+(n<1?"n ":" ")+r}});const _h={};Ms.transitional=function(n,o,s){function l(d,f){return"[Axios v"+Gm+"] Transitional option '"+d+"'"+f+(s?". "+s:"")}return(d,f,p)=>{if(n===!1)throw new fe(l(f," has been removed"+(o?" in "+o:"")),fe.ERR_DEPRECATED);return o&&!_h[f]&&(_h[f]=!0,console.warn(l(f," has been deprecated since v"+o+" and will be removed in the near future"))),n?n(d,f,p):!0}};Ms.spelling=function(n){return(o,s)=>(console.warn(`${s} is likely a misspelling of ${n}`),!0)};function Zb(r,n,o){if(typeof r!="object")throw new fe("options must be an object",fe.ERR_BAD_OPTION_VALUE);const s=Object.keys(r);let l=s.length;for(;l-- >0;){const d=s[l],f=n[d];if(f){const p=r[d],g=p===void 0||f(p,d,r);if(g!==!0)throw new fe("option "+d+" must be "+g,fe.ERR_BAD_OPTION_VALUE);continue}if(o!==!0)throw new fe("Unknown option "+d,fe.ERR_BAD_OPTION)}}const fs={assertOptions:Zb,validators:Ms},on=fs.validators;class br{constructor(n){this.defaults=n,this.interceptors={request:new dh,response:new dh}}async request(n,o){try{return await this._request(n,o)}catch(s){if(s instanceof Error){let l={};Error.captureStackTrace?Error.captureStackTrace(l):l=new Error;const d=l.stack?l.stack.replace(/^.+\n/,""):"";try{s.stack?d&&!String(s.stack).endsWith(d.replace(/^.+\n.+\n/,""))&&(s.stack+=`
`+d):s.stack=d}catch{}}throw s}}_request(n,o){typeof n=="string"?(o=o||{},o.url=n):o=n||{},o=Er(this.defaults,o);const{transitional:s,paramsSerializer:l,headers:d}=o;s!==void 0&&fs.assertOptions(s,{silentJSONParsing:on.transitional(on.boolean),forcedJSONParsing:on.transitional(on.boolean),clarifyTimeoutError:on.transitional(on.boolean)},!1),l!=null&&(D.isFunction(l)?o.paramsSerializer={serialize:l}:fs.assertOptions(l,{encode:on.function,serialize:on.function},!0)),fs.assertOptions(o,{baseUrl:on.spelling("baseURL"),withXsrfToken:on.spelling("withXSRFToken")},!0),o.method=(o.method||this.defaults.method||"get").toLowerCase();let f=d&&D.merge(d.common,d[o.method]);d&&D.forEach(["delete","get","head","post","put","patch","common"],w=>{delete d[w]}),o.headers=mt.concat(f,d);const p=[];let g=!0;this.interceptors.request.forEach(function(b){typeof b.runWhen=="function"&&b.runWhen(o)===!1||(g=g&&b.synchronous,p.unshift(b.fulfilled,b.rejected))});const y=[];this.interceptors.response.forEach(function(b){y.push(b.fulfilled,b.rejected)});let m,E=0,T;if(!g){const w=[bh.bind(this),void 0];for(w.unshift.apply(w,p),w.push.apply(w,y),T=w.length,m=Promise.resolve(o);E<T;)m=m.then(w[E++],w[E++]);return m}T=p.length;let N=o;for(E=0;E<T;){const w=p[E++],b=p[E++];try{N=w(N)}catch(S){b.call(this,S);break}}try{m=bh.call(this,N)}catch(w){return Promise.reject(w)}for(E=0,T=y.length;E<T;)m=m.then(y[E++],y[E++]);return m}getUri(n){n=Er(this.defaults,n);const o=Wm(n.baseURL,n.url);return Um(o,n.params,n.paramsSerializer)}}D.forEach(["delete","get","head","options"],function(n){br.prototype[n]=function(o,s){return this.request(Er(s||{},{method:n,url:o,data:(s||{}).data}))}});D.forEach(["post","put","patch"],function(n){function o(s){return function(d,f,p){return this.request(Er(p||{},{method:n,headers:s?{"Content-Type":"multipart/form-data"}:{},url:d,data:f}))}}br.prototype[n]=o(),br.prototype[n+"Form"]=o(!0)});class Hc{constructor(n){if(typeof n!="function")throw new TypeError("executor must be a function.");let o;this.promise=new Promise(function(d){o=d});const s=this;this.promise.then(l=>{if(!s._listeners)return;let d=s._listeners.length;for(;d-- >0;)s._listeners[d](l);s._listeners=null}),this.promise.then=l=>{let d;const f=new Promise(p=>{s.subscribe(p),d=p}).then(l);return f.cancel=function(){s.unsubscribe(d)},f},n(function(d,f,p){s.reason||(s.reason=new vo(d,f,p),o(s.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(n){if(this.reason){n(this.reason);return}this._listeners?this._listeners.push(n):this._listeners=[n]}unsubscribe(n){if(!this._listeners)return;const o=this._listeners.indexOf(n);o!==-1&&this._listeners.splice(o,1)}toAbortSignal(){const n=new AbortController,o=s=>{n.abort(s)};return this.subscribe(o),n.signal.unsubscribe=()=>this.unsubscribe(o),n.signal}static source(){let n;return{token:new Hc(function(l){n=l}),cancel:n}}}function e1(r){return function(o){return r.apply(null,o)}}function t1(r){return D.isObject(r)&&r.isAxiosError===!0}const Sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sc).forEach(([r,n])=>{Sc[n]=r});function Jm(r){const n=new br(r),o=Am(br.prototype.request,n);return D.extend(o,br.prototype,n,{allOwnKeys:!0}),D.extend(o,n,null,{allOwnKeys:!0}),o.create=function(l){return Jm(Er(r,l))},o}const ke=Jm(Ti);ke.Axios=br;ke.CanceledError=vo;ke.CancelToken=Hc;ke.isCancel=Vm;ke.VERSION=Gm;ke.toFormData=Rs;ke.AxiosError=fe;ke.Cancel=ke.CanceledError;ke.all=function(n){return Promise.all(n)};ke.spread=e1;ke.isAxiosError=t1;ke.mergeConfig=Er;ke.AxiosHeaders=mt;ke.formToJSON=r=>Bm(D.isHTMLForm(r)?new FormData(r):r);ke.getAdapter=Xm.getAdapter;ke.HttpStatusCode=Sc;ke.default=ke;var qu={exports:{}},Wu,Eh;function n1(){if(Eh)return Wu;Eh=1;var r="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Wu=r,Wu}var Ku,wh;function r1(){if(wh)return Ku;wh=1;var r=n1();function n(){}function o(){}return o.resetWarningCache=n,Ku=function(){function s(f,p,g,y,m,E){if(E!==r){var T=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw T.name="Invariant Violation",T}}s.isRequired=s;function l(){return s}var d={array:s,bigint:s,bool:s,func:s,number:s,object:s,string:s,symbol:s,any:s,arrayOf:l,element:s,elementType:s,instanceOf:l,node:s,objectOf:l,oneOf:l,oneOfType:l,shape:l,exact:l,checkPropTypes:o,resetWarningCache:n};return d.PropTypes=d,d},Ku}var xh;function o1(){return xh||(xh=1,qu.exports=r1()()),qu.exports}var i1=o1();const ae=Cm(i1);var Yu={exports:{}},Qu={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sh;function a1(){if(Sh)return Qu;Sh=1;var r=As();function n(g,y){return g===y&&(g!==0||1/g===1/y)||g!==g&&y!==y}var o=typeof Object.is=="function"?Object.is:n,s=r.useSyncExternalStore,l=r.useRef,d=r.useEffect,f=r.useMemo,p=r.useDebugValue;return Qu.useSyncExternalStoreWithSelector=function(g,y,m,E,T){var N=l(null);if(N.current===null){var w={hasValue:!1,value:null};N.current=w}else w=N.current;N=f(function(){function S(R){if(!I){if(I=!0,H=R,R=E(R),T!==void 0&&w.hasValue){var B=w.value;if(T(B,R))return L=B}return L=R}if(B=L,o(H,R))return B;var W=E(R);return T!==void 0&&T(B,W)?(H=R,B):(H=R,L=W)}var I=!1,H,L,z=m===void 0?null:m;return[function(){return S(y())},z===null?void 0:function(){return S(z())}]},[y,m,E,T]);var b=s(g,N[0],N[1]);return d(function(){w.hasValue=!0,w.value=b},[b]),p(b),b},Qu}var kh;function s1(){return kh||(kh=1,Yu.exports=a1()),Yu.exports}var l1=s1();function u1(r){r()}function c1(){let r=null,n=null;return{clear(){r=null,n=null},notify(){u1(()=>{let o=r;for(;o;)o.callback(),o=o.next})},get(){const o=[];let s=r;for(;s;)o.push(s),s=s.next;return o},subscribe(o){let s=!0;const l=n={callback:o,next:null,prev:n};return l.prev?l.prev.next=l:r=l,function(){!s||r===null||(s=!1,l.next?l.next.prev=l.prev:n=l.prev,l.prev?l.prev.next=l.next:r=l.next)}}}}var Oh={notify(){},get:()=>[]};function d1(r,n){let o,s=Oh,l=0,d=!1;function f(b){m();const S=s.subscribe(b);let I=!1;return()=>{I||(I=!0,S(),E())}}function p(){s.notify()}function g(){w.onStateChange&&w.onStateChange()}function y(){return d}function m(){l++,o||(o=r.subscribe(g),s=c1())}function E(){l--,o&&l===0&&(o(),o=void 0,s.clear(),s=Oh)}function T(){d||(d=!0,m())}function N(){d&&(d=!1,E())}const w={addNestedSub:f,notifyNestedSubs:p,handleChangeWrapper:g,isSubscribed:y,trySubscribe:T,tryUnsubscribe:N,getListeners:()=>s};return w}var f1=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",p1=f1(),h1=()=>typeof navigator<"u"&&navigator.product==="ReactNative",m1=h1(),g1=()=>p1||m1?ge.useLayoutEffect:ge.useEffect,y1=g1(),Xu=Symbol.for("react-redux-context"),Gu=typeof globalThis<"u"?globalThis:{};function v1(){if(!ge.createContext)return{};const r=Gu[Xu]??(Gu[Xu]=new Map);let n=r.get(ge.createContext);return n||(n=ge.createContext(null),r.set(ge.createContext,n)),n}var Kn=v1();function b1(r){const{children:n,context:o,serverState:s,store:l}=r,d=ge.useMemo(()=>{const g=d1(l);return{store:l,subscription:g,getServerState:s?()=>s:void 0}},[l,s]),f=ge.useMemo(()=>l.getState(),[l]);y1(()=>{const{subscription:g}=d;return g.onStateChange=g.notifyNestedSubs,g.trySubscribe(),f!==l.getState()&&g.notifyNestedSubs(),()=>{g.tryUnsubscribe(),g.onStateChange=void 0}},[d,f]);const p=o||Kn;return ge.createElement(p.Provider,{value:d},n)}var _1=b1;function Bc(r=Kn){return function(){return ge.useContext(r)}}var Zm=Bc();function eg(r=Kn){const n=r===Kn?Zm:Bc(r),o=()=>{const{store:s}=n();return s};return Object.assign(o,{withTypes:()=>o}),o}var E1=eg();function w1(r=Kn){const n=r===Kn?E1:eg(r),o=()=>n().dispatch;return Object.assign(o,{withTypes:()=>o}),o}var Ci=w1(),x1=(r,n)=>r===n;function S1(r=Kn){const n=r===Kn?Zm:Bc(r),o=(s,l={})=>{const{equalityFn:d=x1}=typeof l=="function"?{equalityFn:l}:l,f=n(),{store:p,subscription:g,getServerState:y}=f;ge.useRef(!0);const m=ge.useCallback({[s.name](T){return s(T)}}[s.name],[s]),E=l1.useSyncExternalStoreWithSelector(g.addNestedSub,p.getState,y||p.getState,m,d);return ge.useDebugValue(E),E};return Object.assign(o,{withTypes:()=>o}),o}var k1=S1();function Ge(r){return`Minified Redux error #${r}; visit https://redux.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}var O1=typeof Symbol=="function"&&Symbol.observable||"@@observable",Th=O1,Ju=()=>Math.random().toString(36).substring(7).split("").join("."),T1={INIT:`@@redux/INIT${Ju()}`,REPLACE:`@@redux/REPLACE${Ju()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Ju()}`},vs=T1;function Vc(r){if(typeof r!="object"||r===null)return!1;let n=r;for(;Object.getPrototypeOf(n)!==null;)n=Object.getPrototypeOf(n);return Object.getPrototypeOf(r)===n||Object.getPrototypeOf(r)===null}function tg(r,n,o){if(typeof r!="function")throw new Error(Ge(2));if(typeof n=="function"&&typeof o=="function"||typeof o=="function"&&typeof arguments[3]=="function")throw new Error(Ge(0));if(typeof n=="function"&&typeof o>"u"&&(o=n,n=void 0),typeof o<"u"){if(typeof o!="function")throw new Error(Ge(1));return o(tg)(r,n)}let s=r,l=n,d=new Map,f=d,p=0,g=!1;function y(){f===d&&(f=new Map,d.forEach((S,I)=>{f.set(I,S)}))}function m(){if(g)throw new Error(Ge(3));return l}function E(S){if(typeof S!="function")throw new Error(Ge(4));if(g)throw new Error(Ge(5));let I=!0;y();const H=p++;return f.set(H,S),function(){if(I){if(g)throw new Error(Ge(6));I=!1,y(),f.delete(H),d=null}}}function T(S){if(!Vc(S))throw new Error(Ge(7));if(typeof S.type>"u")throw new Error(Ge(8));if(typeof S.type!="string")throw new Error(Ge(17));if(g)throw new Error(Ge(9));try{g=!0,l=s(l,S)}finally{g=!1}return(d=f).forEach(H=>{H()}),S}function N(S){if(typeof S!="function")throw new Error(Ge(10));s=S,T({type:vs.REPLACE})}function w(){const S=E;return{subscribe(I){if(typeof I!="object"||I===null)throw new Error(Ge(11));function H(){const z=I;z.next&&z.next(m())}return H(),{unsubscribe:S(H)}},[Th](){return this}}}return T({type:vs.INIT}),{dispatch:T,subscribe:E,getState:m,replaceReducer:N,[Th]:w}}function C1(r){Object.keys(r).forEach(n=>{const o=r[n];if(typeof o(void 0,{type:vs.INIT})>"u")throw new Error(Ge(12));if(typeof o(void 0,{type:vs.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(Ge(13))})}function A1(r){const n=Object.keys(r),o={};for(let d=0;d<n.length;d++){const f=n[d];typeof r[f]=="function"&&(o[f]=r[f])}const s=Object.keys(o);let l;try{C1(o)}catch(d){l=d}return function(f={},p){if(l)throw l;let g=!1;const y={};for(let m=0;m<s.length;m++){const E=s[m],T=o[E],N=f[E],w=T(N,p);if(typeof w>"u")throw p&&p.type,new Error(Ge(14));y[E]=w,g=g||w!==N}return g=g||s.length!==Object.keys(f).length,g?y:f}}function bs(...r){return r.length===0?n=>n:r.length===1?r[0]:r.reduce((n,o)=>(...s)=>n(o(...s)))}function P1(...r){return n=>(o,s)=>{const l=n(o,s);let d=()=>{throw new Error(Ge(15))};const f={getState:l.getState,dispatch:(g,...y)=>d(g,...y)},p=r.map(g=>g(f));return d=bs(...p)(l.dispatch),{...l,dispatch:d}}}function N1(r){return Vc(r)&&"type"in r&&typeof r.type=="string"}var ng=Symbol.for("immer-nothing"),Ch=Symbol.for("immer-draftable"),xt=Symbol.for("immer-state");function Qt(r,...n){throw new Error(`[Immer] minified error nr: ${r}. Full error at: https://bit.ly/3cXEKWf`)}var uo=Object.getPrototypeOf;function wr(r){return!!r&&!!r[xt]}function wn(r){var n;return r?rg(r)||Array.isArray(r)||!!r[Ch]||!!((n=r.constructor)!=null&&n[Ch])||zs(r)||js(r):!1}var D1=Object.prototype.constructor.toString();function rg(r){if(!r||typeof r!="object")return!1;const n=uo(r);if(n===null)return!0;const o=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return o===Object?!0:typeof o=="function"&&Function.toString.call(o)===D1}function _s(r,n){Is(r)===0?Reflect.ownKeys(r).forEach(o=>{n(o,r[o],r)}):r.forEach((o,s)=>n(s,o,r))}function Is(r){const n=r[xt];return n?n.type_:Array.isArray(r)?1:zs(r)?2:js(r)?3:0}function kc(r,n){return Is(r)===2?r.has(n):Object.prototype.hasOwnProperty.call(r,n)}function og(r,n,o){const s=Is(r);s===2?r.set(n,o):s===3?r.add(o):r[n]=o}function R1(r,n){return r===n?r!==0||1/r===1/n:r!==r&&n!==n}function zs(r){return r instanceof Map}function js(r){return r instanceof Set}function mr(r){return r.copy_||r.base_}function Oc(r,n){if(zs(r))return new Map(r);if(js(r))return new Set(r);if(Array.isArray(r))return Array.prototype.slice.call(r);const o=rg(r);if(n===!0||n==="class_only"&&!o){const s=Object.getOwnPropertyDescriptors(r);delete s[xt];let l=Reflect.ownKeys(s);for(let d=0;d<l.length;d++){const f=l[d],p=s[f];p.writable===!1&&(p.writable=!0,p.configurable=!0),(p.get||p.set)&&(s[f]={configurable:!0,writable:!0,enumerable:p.enumerable,value:r[f]})}return Object.create(uo(r),s)}else{const s=uo(r);if(s!==null&&o)return{...r};const l=Object.create(s);return Object.assign(l,r)}}function qc(r,n=!1){return $s(r)||wr(r)||!wn(r)||(Is(r)>1&&(r.set=r.add=r.clear=r.delete=L1),Object.freeze(r),n&&Object.entries(r).forEach(([o,s])=>qc(s,!0))),r}function L1(){Qt(2)}function $s(r){return Object.isFrozen(r)}var M1={};function xr(r){const n=M1[r];return n||Qt(0,r),n}var xi;function ig(){return xi}function I1(r,n){return{drafts_:[],parent_:r,immer_:n,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function Ah(r,n){n&&(xr("Patches"),r.patches_=[],r.inversePatches_=[],r.patchListener_=n)}function Tc(r){Cc(r),r.drafts_.forEach(z1),r.drafts_=null}function Cc(r){r===xi&&(xi=r.parent_)}function Ph(r){return xi=I1(xi,r)}function z1(r){const n=r[xt];n.type_===0||n.type_===1?n.revoke_():n.revoked_=!0}function Nh(r,n){n.unfinalizedDrafts_=n.drafts_.length;const o=n.drafts_[0];return r!==void 0&&r!==o?(o[xt].modified_&&(Tc(n),Qt(4)),wn(r)&&(r=Es(n,r),n.parent_||ws(n,r)),n.patches_&&xr("Patches").generateReplacementPatches_(o[xt].base_,r,n.patches_,n.inversePatches_)):r=Es(n,o,[]),Tc(n),n.patches_&&n.patchListener_(n.patches_,n.inversePatches_),r!==ng?r:void 0}function Es(r,n,o){if($s(n))return n;const s=n[xt];if(!s)return _s(n,(l,d)=>Dh(r,s,n,l,d,o)),n;if(s.scope_!==r)return n;if(!s.modified_)return ws(r,s.base_,!0),s.base_;if(!s.finalized_){s.finalized_=!0,s.scope_.unfinalizedDrafts_--;const l=s.copy_;let d=l,f=!1;s.type_===3&&(d=new Set(l),l.clear(),f=!0),_s(d,(p,g)=>Dh(r,s,l,p,g,o,f)),ws(r,l,!1),o&&r.patches_&&xr("Patches").generatePatches_(s,o,r.patches_,r.inversePatches_)}return s.copy_}function Dh(r,n,o,s,l,d,f){if(wr(l)){const p=d&&n&&n.type_!==3&&!kc(n.assigned_,s)?d.concat(s):void 0,g=Es(r,l,p);if(og(o,s,g),wr(g))r.canAutoFreeze_=!1;else return}else f&&o.add(l);if(wn(l)&&!$s(l)){if(!r.immer_.autoFreeze_&&r.unfinalizedDrafts_<1)return;Es(r,l),(!n||!n.scope_.parent_)&&typeof s!="symbol"&&Object.prototype.propertyIsEnumerable.call(o,s)&&ws(r,l)}}function ws(r,n,o=!1){!r.parent_&&r.immer_.autoFreeze_&&r.canAutoFreeze_&&qc(n,o)}function j1(r,n){const o=Array.isArray(r),s={type_:o?1:0,scope_:n?n.scope_:ig(),modified_:!1,finalized_:!1,assigned_:{},parent_:n,base_:r,draft_:null,copy_:null,revoke_:null,isManual_:!1};let l=s,d=Wc;o&&(l=[s],d=Si);const{revoke:f,proxy:p}=Proxy.revocable(l,d);return s.draft_=p,s.revoke_=f,p}var Wc={get(r,n){if(n===xt)return r;const o=mr(r);if(!kc(o,n))return $1(r,o,n);const s=o[n];return r.finalized_||!wn(s)?s:s===Zu(r.base_,n)?(ec(r),r.copy_[n]=Pc(s,r)):s},has(r,n){return n in mr(r)},ownKeys(r){return Reflect.ownKeys(mr(r))},set(r,n,o){const s=ag(mr(r),n);if(s!=null&&s.set)return s.set.call(r.draft_,o),!0;if(!r.modified_){const l=Zu(mr(r),n),d=l==null?void 0:l[xt];if(d&&d.base_===o)return r.copy_[n]=o,r.assigned_[n]=!1,!0;if(R1(o,l)&&(o!==void 0||kc(r.base_,n)))return!0;ec(r),Ac(r)}return r.copy_[n]===o&&(o!==void 0||n in r.copy_)||Number.isNaN(o)&&Number.isNaN(r.copy_[n])||(r.copy_[n]=o,r.assigned_[n]=!0),!0},deleteProperty(r,n){return Zu(r.base_,n)!==void 0||n in r.base_?(r.assigned_[n]=!1,ec(r),Ac(r)):delete r.assigned_[n],r.copy_&&delete r.copy_[n],!0},getOwnPropertyDescriptor(r,n){const o=mr(r),s=Reflect.getOwnPropertyDescriptor(o,n);return s&&{writable:!0,configurable:r.type_!==1||n!=="length",enumerable:s.enumerable,value:o[n]}},defineProperty(){Qt(11)},getPrototypeOf(r){return uo(r.base_)},setPrototypeOf(){Qt(12)}},Si={};_s(Wc,(r,n)=>{Si[r]=function(){return arguments[0]=arguments[0][0],n.apply(this,arguments)}});Si.deleteProperty=function(r,n){return Si.set.call(this,r,n,void 0)};Si.set=function(r,n,o){return Wc.set.call(this,r[0],n,o,r[0])};function Zu(r,n){const o=r[xt];return(o?mr(o):r)[n]}function $1(r,n,o){var l;const s=ag(n,o);return s?"value"in s?s.value:(l=s.get)==null?void 0:l.call(r.draft_):void 0}function ag(r,n){if(!(n in r))return;let o=uo(r);for(;o;){const s=Object.getOwnPropertyDescriptor(o,n);if(s)return s;o=uo(o)}}function Ac(r){r.modified_||(r.modified_=!0,r.parent_&&Ac(r.parent_))}function ec(r){r.copy_||(r.copy_=Oc(r.base_,r.scope_.immer_.useStrictShallowCopy_))}var F1=class{constructor(r){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(n,o,s)=>{if(typeof n=="function"&&typeof o!="function"){const d=o;o=n;const f=this;return function(g=d,...y){return f.produce(g,m=>o.call(this,m,...y))}}typeof o!="function"&&Qt(6),s!==void 0&&typeof s!="function"&&Qt(7);let l;if(wn(n)){const d=Ph(this),f=Pc(n,void 0);let p=!0;try{l=o(f),p=!1}finally{p?Tc(d):Cc(d)}return Ah(d,s),Nh(l,d)}else if(!n||typeof n!="object"){if(l=o(n),l===void 0&&(l=n),l===ng&&(l=void 0),this.autoFreeze_&&qc(l,!0),s){const d=[],f=[];xr("Patches").generateReplacementPatches_(n,l,d,f),s(d,f)}return l}else Qt(1,n)},this.produceWithPatches=(n,o)=>{if(typeof n=="function")return(f,...p)=>this.produceWithPatches(f,g=>n(g,...p));let s,l;return[this.produce(n,o,(f,p)=>{s=f,l=p}),s,l]},typeof(r==null?void 0:r.autoFreeze)=="boolean"&&this.setAutoFreeze(r.autoFreeze),typeof(r==null?void 0:r.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(r.useStrictShallowCopy)}createDraft(r){wn(r)||Qt(8),wr(r)&&(r=U1(r));const n=Ph(this),o=Pc(r,void 0);return o[xt].isManual_=!0,Cc(n),o}finishDraft(r,n){const o=r&&r[xt];(!o||!o.isManual_)&&Qt(9);const{scope_:s}=o;return Ah(s,n),Nh(void 0,s)}setAutoFreeze(r){this.autoFreeze_=r}setUseStrictShallowCopy(r){this.useStrictShallowCopy_=r}applyPatches(r,n){let o;for(o=n.length-1;o>=0;o--){const l=n[o];if(l.path.length===0&&l.op==="replace"){r=l.value;break}}o>-1&&(n=n.slice(o+1));const s=xr("Patches").applyPatches_;return wr(r)?s(r,n):this.produce(r,l=>s(l,n))}};function Pc(r,n){const o=zs(r)?xr("MapSet").proxyMap_(r,n):js(r)?xr("MapSet").proxySet_(r,n):j1(r,n);return(n?n.scope_:ig()).drafts_.push(o),o}function U1(r){return wr(r)||Qt(10,r),sg(r)}function sg(r){if(!wn(r)||$s(r))return r;const n=r[xt];let o;if(n){if(!n.modified_)return n.base_;n.finalized_=!0,o=Oc(r,n.scope_.immer_.useStrictShallowCopy_)}else o=Oc(r,!0);return _s(o,(s,l)=>{og(o,s,sg(l))}),n&&(n.finalized_=!1),o}var St=new F1,lg=St.produce;St.produceWithPatches.bind(St);St.setAutoFreeze.bind(St);St.setUseStrictShallowCopy.bind(St);St.applyPatches.bind(St);St.createDraft.bind(St);St.finishDraft.bind(St);function ug(r){return({dispatch:o,getState:s})=>l=>d=>typeof d=="function"?d(o,s,r):l(d)}var H1=ug(),B1=ug,V1=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?bs:bs.apply(null,arguments)};function Rh(r,n){function o(...s){if(n){let l=n(...s);if(!l)throw new Error(bn(0));return{type:r,payload:l.payload,..."meta"in l&&{meta:l.meta},..."error"in l&&{error:l.error}}}return{type:r,payload:s[0]}}return o.toString=()=>`${r}`,o.type=r,o.match=s=>N1(s)&&s.type===r,o}var cg=class vi extends Array{constructor(...n){super(...n),Object.setPrototypeOf(this,vi.prototype)}static get[Symbol.species](){return vi}concat(...n){return super.concat.apply(this,n)}prepend(...n){return n.length===1&&Array.isArray(n[0])?new vi(...n[0].concat(this)):new vi(...n.concat(this))}};function Lh(r){return wn(r)?lg(r,()=>{}):r}function Mh(r,n,o){return r.has(n)?r.get(n):r.set(n,o(n)).get(n)}function q1(r){return typeof r=="boolean"}var W1=()=>function(n){const{thunk:o=!0,immutableCheck:s=!0,serializableCheck:l=!0,actionCreatorCheck:d=!0}=n??{};let f=new cg;return o&&(q1(o)?f.push(H1):f.push(B1(o.extraArgument))),f},K1="RTK_autoBatch",Ih=r=>n=>{setTimeout(n,r)},Y1=(r={type:"raf"})=>n=>(...o)=>{const s=n(...o);let l=!0,d=!1,f=!1;const p=new Set,g=r.type==="tick"?queueMicrotask:r.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?window.requestAnimationFrame:Ih(10):r.type==="callback"?r.queueNotification:Ih(r.timeout),y=()=>{f=!1,d&&(d=!1,p.forEach(m=>m()))};return Object.assign({},s,{subscribe(m){const E=()=>l&&m(),T=s.subscribe(E);return p.add(m),()=>{T(),p.delete(m)}},dispatch(m){var E;try{return l=!((E=m==null?void 0:m.meta)!=null&&E[K1]),d=!l,d&&(f||(f=!0,g(y))),s.dispatch(m)}finally{l=!0}}})},Q1=r=>function(o){const{autoBatch:s=!0}=o??{};let l=new cg(r);return s&&l.push(Y1(typeof s=="object"?s:void 0)),l};function X1(r){const n=W1(),{reducer:o=void 0,middleware:s,devTools:l=!0,preloadedState:d=void 0,enhancers:f=void 0}=r;let p;if(typeof o=="function")p=o;else if(Vc(o))p=A1(o);else throw new Error(bn(1));let g;typeof s=="function"?g=s(n):g=n();let y=bs;l&&(y=V1({trace:!1,...typeof l=="object"&&l}));const m=P1(...g),E=Q1(m);let T=typeof f=="function"?f(E):E();const N=y(...T);return tg(p,d,N)}function dg(r){const n={},o=[];let s;const l={addCase(d,f){const p=typeof d=="string"?d:d.type;if(!p)throw new Error(bn(28));if(p in n)throw new Error(bn(29));return n[p]=f,l},addMatcher(d,f){return o.push({matcher:d,reducer:f}),l},addDefaultCase(d){return s=d,l}};return r(l),[n,o,s]}function G1(r){return typeof r=="function"}function J1(r,n){let[o,s,l]=dg(n),d;if(G1(r))d=()=>Lh(r());else{const p=Lh(r);d=()=>p}function f(p=d(),g){let y=[o[g.type],...s.filter(({matcher:m})=>m(g)).map(({reducer:m})=>m)];return y.filter(m=>!!m).length===0&&(y=[l]),y.reduce((m,E)=>{if(E)if(wr(m)){const N=E(m,g);return N===void 0?m:N}else{if(wn(m))return lg(m,T=>E(T,g));{const T=E(m,g);if(T===void 0){if(m===null)return m;throw Error("A case reducer on a non-draftable value must not return undefined")}return T}}return m},p)}return f.getInitialState=d,f}var Z1=Symbol.for("rtk-slice-createasyncthunk");function e_(r,n){return`${r}/${n}`}function t_({creators:r}={}){var o;const n=(o=r==null?void 0:r.asyncThunk)==null?void 0:o[Z1];return function(l){const{name:d,reducerPath:f=d}=l;if(!d)throw new Error(bn(11));const p=(typeof l.reducers=="function"?l.reducers(o_()):l.reducers)||{},g=Object.keys(p),y={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},m={addCase(L,z){const R=typeof L=="string"?L:L.type;if(!R)throw new Error(bn(12));if(R in y.sliceCaseReducersByType)throw new Error(bn(13));return y.sliceCaseReducersByType[R]=z,m},addMatcher(L,z){return y.sliceMatchers.push({matcher:L,reducer:z}),m},exposeAction(L,z){return y.actionCreators[L]=z,m},exposeCaseReducer(L,z){return y.sliceCaseReducersByName[L]=z,m}};g.forEach(L=>{const z=p[L],R={reducerName:L,type:e_(d,L),createNotation:typeof l.reducers=="function"};a_(z)?l_(R,z,m,n):i_(R,z,m)});function E(){const[L={},z=[],R=void 0]=typeof l.extraReducers=="function"?dg(l.extraReducers):[l.extraReducers],B={...L,...y.sliceCaseReducersByType};return J1(l.initialState,W=>{for(let te in B)W.addCase(te,B[te]);for(let te of y.sliceMatchers)W.addMatcher(te.matcher,te.reducer);for(let te of z)W.addMatcher(te.matcher,te.reducer);R&&W.addDefaultCase(R)})}const T=L=>L,N=new Map;let w;function b(L,z){return w||(w=E()),w(L,z)}function S(){return w||(w=E()),w.getInitialState()}function I(L,z=!1){function R(W){let te=W[L];return typeof te>"u"&&z&&(te=S()),te}function B(W=T){const te=Mh(N,z,()=>new WeakMap);return Mh(te,W,()=>{const se={};for(const[J,le]of Object.entries(l.selectors??{}))se[J]=n_(le,W,S,z);return se})}return{reducerPath:L,getSelectors:B,get selectors(){return B(R)},selectSlice:R}}const H={name:d,reducer:b,actions:y.actionCreators,caseReducers:y.sliceCaseReducersByName,getInitialState:S,...I(f),injectInto(L,{reducerPath:z,...R}={}){const B=z??f;return L.inject({reducerPath:B,reducer:b},R),{...H,...I(B,!0)}}};return H}}function n_(r,n,o,s){function l(d,...f){let p=n(d);return typeof p>"u"&&s&&(p=o()),r(p,...f)}return l.unwrapped=r,l}var r_=t_();function o_(){function r(n,o){return{_reducerDefinitionType:"asyncThunk",payloadCreator:n,...o}}return r.withTypes=()=>r,{reducer(n){return Object.assign({[n.name](...o){return n(...o)}}[n.name],{_reducerDefinitionType:"reducer"})},preparedReducer(n,o){return{_reducerDefinitionType:"reducerWithPrepare",prepare:n,reducer:o}},asyncThunk:r}}function i_({type:r,reducerName:n,createNotation:o},s,l){let d,f;if("reducer"in s){if(o&&!s_(s))throw new Error(bn(17));d=s.reducer,f=s.prepare}else d=s;l.addCase(r,d).exposeCaseReducer(n,d).exposeAction(n,f?Rh(r,f):Rh(r))}function a_(r){return r._reducerDefinitionType==="asyncThunk"}function s_(r){return r._reducerDefinitionType==="reducerWithPrepare"}function l_({type:r,reducerName:n},o,s,l){if(!l)throw new Error(bn(18));const{payloadCreator:d,fulfilled:f,pending:p,rejected:g,settled:y,options:m}=o,E=l(r,d,m);s.exposeAction(n,E),f&&s.addCase(E.fulfilled,f),p&&s.addCase(E.pending,p),g&&s.addCase(E.rejected,g),y&&s.addMatcher(E.settled,y),s.exposeCaseReducer(n,{fulfilled:f||Qa,pending:p||Qa,rejected:g||Qa,settled:y||Qa})}function Qa(){}function bn(r){return`Minified Redux Toolkit error #${r}; visit https://redux-toolkit.js.org/Errors?code=${r} for the full message or use the non-minified dev environment for full errors. `}const u_={messages:[]},fg=r_({name:"toast",initialState:u_,reducers:{pushMessage:(r,n)=>{const{text:o,status:s}=n.payload,l=Date.now();r.messages.push({id:l,text:o,status:s})},removeMessage:(r,n)=>{const o=n.payload;r.messages=r.messages.filter(s=>s.id!==o)}}}),{pushMessage:Lt,removeMessage:zh}=fg.actions,c_=fg.reducer;function qe(r,n){n===void 0&&(n={});var o=n.insertAt;if(r&&typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css",o==="top"&&s.firstChild?s.insertBefore(l,s.firstChild):s.appendChild(l),l.styleSheet?l.styleSheet.cssText=r:l.appendChild(document.createTextNode(r))}}qe(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var _e=function(){return _e=Object.assign||function(r){for(var n,o=1,s=arguments.length;o<s;o++)for(var l in n=arguments[o])Object.prototype.hasOwnProperty.call(n,l)&&(r[l]=n[l]);return r},_e.apply(this,arguments)};function xs(r){return xs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},xs(r)}var d_=/^\s+/,f_=/\s+$/;function Z(r,n){if(n=n||{},(r=r||"")instanceof Z)return r;if(!(this instanceof Z))return new Z(r,n);var o=function(s){var l={r:0,g:0,b:0},d=1,f=null,p=null,g=null,y=!1,m=!1;typeof s=="string"&&(s=function(w){w=w.replace(d_,"").replace(f_,"").toLowerCase();var b,S=!1;if(Nc[w])w=Nc[w],S=!0;else if(w=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(b=Yt.rgb.exec(w))?{r:b[1],g:b[2],b:b[3]}:(b=Yt.rgba.exec(w))?{r:b[1],g:b[2],b:b[3],a:b[4]}:(b=Yt.hsl.exec(w))?{h:b[1],s:b[2],l:b[3]}:(b=Yt.hsla.exec(w))?{h:b[1],s:b[2],l:b[3],a:b[4]}:(b=Yt.hsv.exec(w))?{h:b[1],s:b[2],v:b[3]}:(b=Yt.hsva.exec(w))?{h:b[1],s:b[2],v:b[3],a:b[4]}:(b=Yt.hex8.exec(w))?{r:Et(b[1]),g:Et(b[2]),b:Et(b[3]),a:Bh(b[4]),format:S?"name":"hex8"}:(b=Yt.hex6.exec(w))?{r:Et(b[1]),g:Et(b[2]),b:Et(b[3]),format:S?"name":"hex"}:(b=Yt.hex4.exec(w))?{r:Et(b[1]+""+b[1]),g:Et(b[2]+""+b[2]),b:Et(b[3]+""+b[3]),a:Bh(b[4]+""+b[4]),format:S?"name":"hex8"}:(b=Yt.hex3.exec(w))?{r:Et(b[1]+""+b[1]),g:Et(b[2]+""+b[2]),b:Et(b[3]+""+b[3]),format:S?"name":"hex"}:!1}(s)),xs(s)=="object"&&(yn(s.r)&&yn(s.g)&&yn(s.b)?(E=s.r,T=s.g,N=s.b,l={r:255*Me(E,255),g:255*Me(T,255),b:255*Me(N,255)},y=!0,m=String(s.r).substr(-1)==="%"?"prgb":"rgb"):yn(s.h)&&yn(s.s)&&yn(s.v)?(f=bi(s.s),p=bi(s.v),l=function(w,b,S){w=6*Me(w,360),b=Me(b,100),S=Me(S,100);var I=Math.floor(w),H=w-I,L=S*(1-b),z=S*(1-H*b),R=S*(1-(1-H)*b),B=I%6,W=[S,z,L,L,R,S][B],te=[R,S,S,z,L,L][B],se=[L,L,R,S,S,z][B];return{r:255*W,g:255*te,b:255*se}}(s.h,f,p),y=!0,m="hsv"):yn(s.h)&&yn(s.s)&&yn(s.l)&&(f=bi(s.s),g=bi(s.l),l=function(w,b,S){var I,H,L;function z(W,te,se){return se<0&&(se+=1),se>1&&(se-=1),se<1/6?W+6*(te-W)*se:se<.5?te:se<2/3?W+(te-W)*(2/3-se)*6:W}if(w=Me(w,360),b=Me(b,100),S=Me(S,100),b===0)I=H=L=S;else{var R=S<.5?S*(1+b):S+b-S*b,B=2*S-R;I=z(B,R,w+1/3),H=z(B,R,w),L=z(B,R,w-1/3)}return{r:255*I,g:255*H,b:255*L}}(s.h,f,g),y=!0,m="hsl"),s.hasOwnProperty("a")&&(d=s.a));var E,T,N;return d=pg(d),{ok:y,format:s.format||m,r:Math.min(255,Math.max(l.r,0)),g:Math.min(255,Math.max(l.g,0)),b:Math.min(255,Math.max(l.b,0)),a:d}}(r);this._originalInput=r,this._r=o.r,this._g=o.g,this._b=o.b,this._a=o.a,this._roundA=Math.round(100*this._a)/100,this._format=n.format||o.format,this._gradientType=n.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=o.ok}function jh(r,n,o){r=Me(r,255),n=Me(n,255),o=Me(o,255);var s,l,d=Math.max(r,n,o),f=Math.min(r,n,o),p=(d+f)/2;if(d==f)s=l=0;else{var g=d-f;switch(l=p>.5?g/(2-d-f):g/(d+f),d){case r:s=(n-o)/g+(n<o?6:0);break;case n:s=(o-r)/g+2;break;case o:s=(r-n)/g+4}s/=6}return{h:s,s:l,l:p}}function $h(r,n,o){r=Me(r,255),n=Me(n,255),o=Me(o,255);var s,l,d=Math.max(r,n,o),f=Math.min(r,n,o),p=d,g=d-f;if(l=d===0?0:g/d,d==f)s=0;else{switch(d){case r:s=(n-o)/g+(n<o?6:0);break;case n:s=(o-r)/g+2;break;case o:s=(r-n)/g+4}s/=6}return{h:s,s:l,v:p}}function Fh(r,n,o,s){var l=[Xt(Math.round(r).toString(16)),Xt(Math.round(n).toString(16)),Xt(Math.round(o).toString(16))];return s&&l[0].charAt(0)==l[0].charAt(1)&&l[1].charAt(0)==l[1].charAt(1)&&l[2].charAt(0)==l[2].charAt(1)?l[0].charAt(0)+l[1].charAt(0)+l[2].charAt(0):l.join("")}function Uh(r,n,o,s){return[Xt(hg(s)),Xt(Math.round(r).toString(16)),Xt(Math.round(n).toString(16)),Xt(Math.round(o).toString(16))].join("")}function p_(r,n){n=n===0?0:n||10;var o=Z(r).toHsl();return o.s-=n/100,o.s=Fs(o.s),Z(o)}function h_(r,n){n=n===0?0:n||10;var o=Z(r).toHsl();return o.s+=n/100,o.s=Fs(o.s),Z(o)}function m_(r){return Z(r).desaturate(100)}function g_(r,n){n=n===0?0:n||10;var o=Z(r).toHsl();return o.l+=n/100,o.l=Fs(o.l),Z(o)}function y_(r,n){n=n===0?0:n||10;var o=Z(r).toRgb();return o.r=Math.max(0,Math.min(255,o.r-Math.round(-n/100*255))),o.g=Math.max(0,Math.min(255,o.g-Math.round(-n/100*255))),o.b=Math.max(0,Math.min(255,o.b-Math.round(-n/100*255))),Z(o)}function v_(r,n){n=n===0?0:n||10;var o=Z(r).toHsl();return o.l-=n/100,o.l=Fs(o.l),Z(o)}function b_(r,n){var o=Z(r).toHsl(),s=(o.h+n)%360;return o.h=s<0?360+s:s,Z(o)}function __(r){var n=Z(r).toHsl();return n.h=(n.h+180)%360,Z(n)}function Hh(r,n){if(isNaN(n)||n<=0)throw new Error("Argument to polyad must be a positive number");for(var o=Z(r).toHsl(),s=[Z(r)],l=360/n,d=1;d<n;d++)s.push(Z({h:(o.h+d*l)%360,s:o.s,l:o.l}));return s}function E_(r){var n=Z(r).toHsl(),o=n.h;return[Z(r),Z({h:(o+72)%360,s:n.s,l:n.l}),Z({h:(o+216)%360,s:n.s,l:n.l})]}function w_(r,n,o){n=n||6,o=o||30;var s=Z(r).toHsl(),l=360/o,d=[Z(r)];for(s.h=(s.h-(l*n>>1)+720)%360;--n;)s.h=(s.h+l)%360,d.push(Z(s));return d}function x_(r,n){n=n||6;for(var o=Z(r).toHsv(),s=o.h,l=o.s,d=o.v,f=[],p=1/n;n--;)f.push(Z({h:s,s:l,v:d})),d=(d+p)%1;return f}Z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,n,o,s=this.toRgb();return r=s.r/255,n=s.g/255,o=s.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))+.0722*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))},setAlpha:function(r){return this._a=pg(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=$h(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=$h(this._r,this._g,this._b),n=Math.round(360*r.h),o=Math.round(100*r.s),s=Math.round(100*r.v);return this._a==1?"hsv("+n+", "+o+"%, "+s+"%)":"hsva("+n+", "+o+"%, "+s+"%, "+this._roundA+")"},toHsl:function(){var r=jh(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=jh(this._r,this._g,this._b),n=Math.round(360*r.h),o=Math.round(100*r.s),s=Math.round(100*r.l);return this._a==1?"hsl("+n+", "+o+"%, "+s+"%)":"hsla("+n+", "+o+"%, "+s+"%, "+this._roundA+")"},toHex:function(r){return Fh(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(n,o,s,l,d){var f=[Xt(Math.round(n).toString(16)),Xt(Math.round(o).toString(16)),Xt(Math.round(s).toString(16)),Xt(hg(l))];return d&&f[0].charAt(0)==f[0].charAt(1)&&f[1].charAt(0)==f[1].charAt(1)&&f[2].charAt(0)==f[2].charAt(1)&&f[3].charAt(0)==f[3].charAt(1)?f[0].charAt(0)+f[1].charAt(0)+f[2].charAt(0)+f[3].charAt(0):f.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Me(this._r,255))+"%",g:Math.round(100*Me(this._g,255))+"%",b:Math.round(100*Me(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Me(this._r,255))+"%, "+Math.round(100*Me(this._g,255))+"%, "+Math.round(100*Me(this._b,255))+"%)":"rgba("+Math.round(100*Me(this._r,255))+"%, "+Math.round(100*Me(this._g,255))+"%, "+Math.round(100*Me(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(S_[Fh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var n="#"+Uh(this._r,this._g,this._b,this._a),o=n,s=this._gradientType?"GradientType = 1, ":"";if(r){var l=Z(r);o="#"+Uh(l._r,l._g,l._b,l._a)}return"progid:DXImageTransform.Microsoft.gradient("+s+"startColorstr="+n+",endColorstr="+o+")"},toString:function(r){var n=!!r;r=r||this._format;var o=!1,s=this._a<1&&this._a>=0;return n||!s||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(o=this.toRgbString()),r==="prgb"&&(o=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(o=this.toHexString()),r==="hex3"&&(o=this.toHexString(!0)),r==="hex4"&&(o=this.toHex8String(!0)),r==="hex8"&&(o=this.toHex8String()),r==="name"&&(o=this.toName()),r==="hsl"&&(o=this.toHslString()),r==="hsv"&&(o=this.toHsvString()),o||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Z(this.toString())},_applyModification:function(r,n){var o=r.apply(null,[this].concat([].slice.call(n)));return this._r=o._r,this._g=o._g,this._b=o._b,this.setAlpha(o._a),this},lighten:function(){return this._applyModification(g_,arguments)},brighten:function(){return this._applyModification(y_,arguments)},darken:function(){return this._applyModification(v_,arguments)},desaturate:function(){return this._applyModification(p_,arguments)},saturate:function(){return this._applyModification(h_,arguments)},greyscale:function(){return this._applyModification(m_,arguments)},spin:function(){return this._applyModification(b_,arguments)},_applyCombination:function(r,n){return r.apply(null,[this].concat([].slice.call(n)))},analogous:function(){return this._applyCombination(w_,arguments)},complement:function(){return this._applyCombination(__,arguments)},monochromatic:function(){return this._applyCombination(x_,arguments)},splitcomplement:function(){return this._applyCombination(E_,arguments)},triad:function(){return this._applyCombination(Hh,[3])},tetrad:function(){return this._applyCombination(Hh,[4])}},Z.fromRatio=function(r,n){if(xs(r)=="object"){var o={};for(var s in r)r.hasOwnProperty(s)&&(o[s]=s==="a"?r[s]:bi(r[s]));r=o}return Z(r,n)},Z.equals=function(r,n){return!(!r||!n)&&Z(r).toRgbString()==Z(n).toRgbString()},Z.random=function(){return Z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Z.mix=function(r,n,o){o=o===0?0:o||50;var s=Z(r).toRgb(),l=Z(n).toRgb(),d=o/100;return Z({r:(l.r-s.r)*d+s.r,g:(l.g-s.g)*d+s.g,b:(l.b-s.b)*d+s.b,a:(l.a-s.a)*d+s.a})},Z.readability=function(r,n){var o=Z(r),s=Z(n);return(Math.max(o.getLuminance(),s.getLuminance())+.05)/(Math.min(o.getLuminance(),s.getLuminance())+.05)},Z.isReadable=function(r,n,o){var s,l,d=Z.readability(r,n);switch(l=!1,(s=function(f){var p,g;return p=((f=f||{level:"AA",size:"small"}).level||"AA").toUpperCase(),g=(f.size||"small").toLowerCase(),p!=="AA"&&p!=="AAA"&&(p="AA"),g!=="small"&&g!=="large"&&(g="small"),{level:p,size:g}}(o)).level+s.size){case"AAsmall":case"AAAlarge":l=d>=4.5;break;case"AAlarge":l=d>=3;break;case"AAAsmall":l=d>=7}return l},Z.mostReadable=function(r,n,o){var s,l,d,f,p=null,g=0;l=(o=o||{}).includeFallbackColors,d=o.level,f=o.size;for(var y=0;y<n.length;y++)(s=Z.readability(r,n[y]))>g&&(g=s,p=Z(n[y]));return Z.isReadable(r,p,{level:d,size:f})||!l?p:(o.includeFallbackColors=!1,Z.mostReadable(r,["#fff","#000"],o))};var Nc=Z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},S_=Z.hexNames=function(r){var n={};for(var o in r)r.hasOwnProperty(o)&&(n[r[o]]=o);return n}(Nc);function pg(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Me(r,n){(function(s){return typeof s=="string"&&s.indexOf(".")!=-1&&parseFloat(s)===1})(r)&&(r="100%");var o=function(s){return typeof s=="string"&&s.indexOf("%")!=-1}(r);return r=Math.min(n,Math.max(0,parseFloat(r))),o&&(r=parseInt(r*n,10)/100),Math.abs(r-n)<1e-6?1:r%n/parseFloat(n)}function Fs(r){return Math.min(1,Math.max(0,r))}function Et(r){return parseInt(r,16)}function Xt(r){return r.length==1?"0"+r:""+r}function bi(r){return r<=1&&(r=100*r+"%"),r}function hg(r){return Math.round(255*parseFloat(r)).toString(16)}function Bh(r){return Et(r)/255}var qn,Xa,Ga,Yt=(Xa="[\\s|\\(]+("+(qn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")\\s*\\)?",Ga="[\\s|\\(]+("+qn+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")\\s*\\)?",{CSS_UNIT:new RegExp(qn),rgb:new RegExp("rgb"+Xa),rgba:new RegExp("rgba"+Ga),hsl:new RegExp("hsl"+Xa),hsla:new RegExp("hsla"+Ga),hsv:new RegExp("hsv"+Xa),hsva:new RegExp("hsva"+Ga),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function yn(r){return!!Yt.CSS_UNIT.exec(r)}var Ai=function(r,n){var o=(typeof r=="string"?parseInt(r):r)||0;if(o>=-5&&o<=5){var s=o,l=parseFloat(n),d=l+s*(l/5)*-1;return(d==0||d<=Number.EPSILON)&&(d=.1),{animationPeriod:d+"s"}}return{animationPeriod:n}},Pi=function(r,n){var o=r||{},s="";switch(n){case"small":s="12px";break;case"medium":s="16px";break;case"large":s="20px";break;default:s=void 0}var l={};if(o.fontSize){var d=o.fontSize;l=function(f,p){var g={};for(var y in f)Object.prototype.hasOwnProperty.call(f,y)&&p.indexOf(y)<0&&(g[y]=f[y]);if(f!=null&&typeof Object.getOwnPropertySymbols=="function"){var m=0;for(y=Object.getOwnPropertySymbols(f);m<y.length;m++)p.indexOf(y[m])<0&&Object.prototype.propertyIsEnumerable.call(f,y[m])&&(g[y[m]]=f[y[m]])}return g}(o,["fontSize"]),s=d}return{fontSize:s,styles:l}},k_={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Ni=function(r){var n=r.className,o=r.text,s=r.textColor,l=r.staticText,d=r.style;return o?Ae.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(n||"").trim(),style:_e(_e(_e({},l&&k_),s&&{color:s,mixBlendMode:"unset"}),d&&d)},typeof o=="string"&&o.length?o:"loading"):null},vn="rgb(50, 205, 50)";function Di(r,n){n===void 0&&(n=0);var o=[];return function s(l,d){return d===void 0&&(d=0),o.push.apply(o,l),o.length<d&&s(o,d),o.slice(0,d)}(r,n)}qe(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Z(vn).toRgb();Array.from({length:4},function(r,n){return"--atom-phase".concat(n+1,"-rgb")});qe(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--commet-phase".concat(n+1,"-color")});qe(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);var Ja=Array.from({length:4},function(r,n){return"--OP-annulus-phase".concat(n+1,"-color")}),O_=function(r){var n,o=Pi(r==null?void 0:r.style,r==null?void 0:r.size),s=o.styles,l=o.fontSize,d=r==null?void 0:r.easing,f=Ai(r==null?void 0:r.speedPlus,"1.5s").animationPeriod,p=function(y){var m={},E=Ja.length;if(y instanceof Array){for(var T=Di(y,E),N=0;N<T.length&&!(N>=4);N++)m[Ja[N]]=T[N];return m}try{if(typeof y!="string")throw new Error("Color String expected");for(var w=0;w<E;w++)m[Ja[w]]=y}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof y,'" instead with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y),' received in <OrbitProgress variant="disc" /> indicator cannot be processed. Using default instead!')),w=0;w<E;w++)m[Ja[w]]=vn}return m}((n=r==null?void 0:r.color)!==null&&n!==void 0?n:""),g=r!=null&&r.dense?4.3:2.9;return Ae.createElement("span",{className:"rli-d-i-b OP-annulus-rli-bounding-box",style:_e(_e(_e(_e(_e({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),p),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b OP-annulus-indicator"},Ae.createElement("svg",{className:"whirl",viewBox:"25 25 50 50"},Ae.createElement("circle",{className:"path",cx:"50",cy:"50",r:"20",fill:"none",strokeWidth:g,strokeMiterlimit:"10"})),Ae.createElement(Ni,{className:"OP-annulus-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};function tc(r){return r&&r.Math===Math&&r}qe(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);var no=tc(typeof window=="object"&&window)||tc(typeof self=="object"&&self)||tc(typeof global=="object"&&global)||function(){return this}()||Function("return this")();function mg(){var r,n;return!((r=no==null?void 0:no.crypto)===null||r===void 0)&&r.randomUUID?no.crypto.randomUUID():!((n=no==null?void 0:no.btoa)===null||n===void 0)&&n.name?no.btoa(new Date(Math.ceil(1e13*Math.random())).getTime()+""):Date.now().toString(36)+Math.random().toString(36).substring(0)}var Za=Array.from({length:4},function(r,n){return"--OP-dotted-phase".concat(n+1,"-color")}),T_=function(r){var n,o=Pi(r==null?void 0:r.style,r==null?void 0:r.size),s=o.styles,l=o.fontSize,d=r==null?void 0:r.easing,f=Ai(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,p=function(y){var m={},E=Za.length;if(y instanceof Array){for(var T=Di(y,E),N=0;N<T.length&&!(N>=4);N++)m[Za[N]]=T[N];return m}try{if(typeof y!="string")throw new Error("Color String expected");for(var w=0;w<E;w++)m[Za[w]]=y}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof y,'" with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y),' received in <OrbitProgress variant="dotted" /> indicator cannot be processed. Using default instead!')),w=0;w<E;w++)m[Za[w]]=vn}return m}((n=r==null?void 0:r.color)!==null&&n!==void 0?n:""),g=r!=null&&r.dense?16:12;return Ae.createElement("span",{className:"rli-d-i-b OP-dotted-rli-bounding-box",style:_e(_e(_e(_e(_e({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),p),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b OP-dotted-indicator"},Array.from({length:g}).map(function(y,m){var E=function(w,b,S){if(b===16){var I=360*w/b,H=b-w,L=Number.parseFloat(S)/b*H*-1;return{transform:"rotate(".concat(I,"deg)"),animationDelay:"".concat(L,"s")}}return{transform:"",animationDelay:""}}(m,g,f),T=E.animationDelay,N=E.transform;return Ae.createElement("span",{key:mg(),className:"rli-d-i-b dot-shape-holder",style:N?{transform:N}:void 0},Ae.createElement("span",{className:"dot",style:T?{animationDelay:T}:void 0}))}),Ae.createElement(Ni,{className:"OP-dotted-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};qe(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);var es=Array.from({length:4},function(r,n){return"--OP-spokes-phase".concat(n+1,"-color")}),C_=function(r){var n,o=Pi(r==null?void 0:r.style,r==null?void 0:r.size),s=o.styles,l=o.fontSize,d=r==null?void 0:r.easing,f=Ai(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,p=function(y){var m={},E=es.length;if(y instanceof Array){for(var T=Di(y,E),N=0;N<T.length&&!(N>=4);N++)m[es[N]]=T[N];return m}try{if(typeof y!="string")throw new Error("Color String expected");for(var w=0;w<E;w++)m[es[w]]=y}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof y,'" instead with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y),' received in <OrbitProgress variant="spokes" /> indicator cannot be processed. Using default instead!')),w=0;w<E;w++)m[es[w]]=vn}return m}((n=r==null?void 0:r.color)!==null&&n!==void 0?n:""),g=r!=null&&r.dense?16:12;return Ae.createElement("span",{className:"rli-d-i-b OP-spokes-rli-bounding-box",style:_e(_e(_e(_e(_e({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),p),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b OP-spokes-indicator"},Array.from({length:g},function(y,m){return Ae.createElement("span",{key:mg(),className:"rli-d-i-b spoke",style:A_(m,g,f)})})),Ae.createElement(Ni,{text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor}))};function A_(r,n,o){if(n===16){var s=n-r,l=Number.parseFloat(o)/n;return{transform:"rotate(".concat(360*r/n,"deg) translate(-50%, ").concat("-1.56em",")"),animationDelay:"".concat((s-1)*l*-1,"s")}}}qe(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);var ts=Array.from({length:4},function(r,n){return"--OP-annulus-dual-sectors-phase".concat(n+1,"-color")}),P_=function(r){var n,o=Pi(r==null?void 0:r.style,r==null?void 0:r.size),s=o.styles,l=o.fontSize,d=r==null?void 0:r.easing,f=Ai(r==null?void 0:r.speedPlus,"1.2s").animationPeriod,p=function(y){var m={},E=ts.length;if(y instanceof Array){for(var T=Di(y,E),N=0;N<T.length&&!(N>=4);N++)m[ts[N]]=T[N];return m}try{if(typeof y!="string")throw new Error("Color String expected");for(var w=0;w<E;w++)m[ts[w]]=y}catch(b){for(b instanceof Error?console.warn("[".concat(b.message,']: Received "').concat(typeof y,'" with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y),' received in <OrbitProgress variant="annulus-splits" /> indicator cannot be processed. Using default instead!')),w=0;w<E;w++)m[ts[w]]=vn}return m}((n=r==null?void 0:r.color)!==null&&n!==void 0?n:""),g=r.dense?"0.45em":"";return Ae.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-rli-bounding-box",style:_e(_e(_e(_e(_e({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),p),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b OP-annulus-dual-sectors-indicator"},Ae.createElement("span",{className:"rli-d-i-b annulus-sectors",style:_e({},g&&{borderWidth:g})}),Ae.createElement(Ni,{className:"OP-annulus-dual-sectors-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};qe(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);var mi=Array.from({length:4},function(r,n){return["--OP-annulus-track-phase".concat(n+1,"-color"),"--OP-annulus-sector-phase".concat(n+1,"-color")]}),ns=function(r){return r===void 0&&(r=1),.25*r},N_=function(r){var n,o=Pi(r==null?void 0:r.style,r==null?void 0:r.size),s=o.styles,l=o.fontSize,d=r==null?void 0:r.easing,f=Ai(r==null?void 0:r.speedPlus,"1s").animationPeriod,p=function(y){var m={},E=mi.length;if(y instanceof Array){for(var T=Di(y,E),N=0;N<T.length&&!(N>=4);N++){var w=mi[N];try{if(!(I=Z(T[N])).isValid())throw new Error("Invalid Color: ".concat(I.getOriginalInput()));var b=I.setAlpha(ns(I.getAlpha())).toRgbString(),S=T[N];m[w[0]]=b,m[w[1]]=S}catch{S=vn,b=(I=Z(vn)).setAlpha(ns(I.getAlpha())).toRgbString(),m[w[0]]=b,m[w[1]]=S}}return m}try{var I=Z(y);if(typeof y!="string")throw new Error("Color String expected");if(!I.isValid())throw new Error("Invalid Color: ".concat(I.getOriginalInput()));S=y,b=I.setAlpha(ns(I.getAlpha())).toRgbString();for(var H=0;H<E;H++)m[(w=mi[H])[0]]=b,m[w[1]]=S}catch(L){for(L instanceof Error?console.warn("[".concat(L.message,']: Received "').concat(typeof y,'" with value, ').concat(JSON.stringify(y))):console.warn("".concat(JSON.stringify(y),' received in <OrbitProgress variant="annulus-track" /> indicator cannot be processed. Using default instead!')),S=vn,b=(I=Z(vn)).setAlpha(ns(I.getAlpha())).toRgbString(),H=0;H<mi.length;H++)m[(w=mi[H])[0]]=b,m[w[1]]=S}return m}((n=r==null?void 0:r.color)!==null&&n!==void 0?n:""),g=r.dense?"0.45em":"";return Ae.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-rli-bounding-box",style:_e(_e(_e(_e(_e({},l&&{fontSize:l}),f&&{"--rli-animation-duration":f}),d&&{"--rli-animation-function":d}),p),s),role:"status","aria-live":"polite","aria-label":"Loading"},Ae.createElement("span",{className:"rli-d-i-b OP-annulus-sector-track-indicator"},Ae.createElement("span",{className:"rli-d-i-b annulus-track-ring",style:_e({},g&&{borderWidth:g})}),Ae.createElement(Ni,{className:"OP-annulus-sector-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))},gg=function(r){var n=Object(r).variant,o=n===void 0?"disc":n;return o==="dotted"?Ae.createElement(T_,_e({},r)):o==="spokes"?Ae.createElement(C_,_e({},r)):o==="disc"?Ae.createElement(O_,_e({},r)):o==="split-disc"?Ae.createElement(P_,_e({},r)):o==="track-disc"?Ae.createElement(N_,_e({},r)):null};qe(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--four-square-phase".concat(n+1,"-color")});qe(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--mosaic-phase".concat(n+1,"-color")});qe(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--riple-phase".concat(n+1,"-color")});qe(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--TD-pulsate-phase".concat(n+1,"-color")});qe(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--TD-brick-stack-phase".concat(n+1,"-color")});qe(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--TD-bob-phase".concat(n+1,"-color")});qe(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--TD-bounce-phase".concat(n+1,"-color")});qe(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--shape-phase".concat(n+1,"-color")});qe(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--trophySpin-phase".concat(n+1,"-color")});qe(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--slab-phase".concat(n+1,"-color")});qe(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(r,n){return"--life-line-phase".concat(n+1,"-color")});const Vh="https://ec-course-api.hexschool.io/v2",yg=({setIsAuth:r})=>{const n=Ci(),[o,s]=ge.useState(!1),[l,d]=ge.useState({username:"",password:""}),f=y=>{const{id:m,value:E}=y.target;d({...l,[m]:E})},p=async y=>{y.preventDefault(),s(!0);try{const m=await ke.post(`${Vh}/admin/signin`,l),{expired:E,token:T}=m.data;document.cookie=`hexToken=${T}; expires=${new Date(E)}`,ke.defaults.headers.common.Authorization=T,r(!0)}catch(m){const{message:E}=m.response.data;n(Lt({text:E,status:"failure"}))}finally{s(!1)}},g=async()=>{try{await ke.post(`${Vh}/api/user/check`),r(!0)}catch(y){r(!1);const{message:m}=y.response.data;n(Lt({text:m,status:"failure"}))}};return ge.useEffect(()=>{const y=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");if(!y){r(!1);return}ke.defaults.headers.common.Authorization=y,g()},[]),A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"container login",children:[A.jsxs("div",{className:"row justify-content-center",children:[A.jsx("h1",{className:"h3 mb-3 font-weight-normal",children:"請先登入"}),A.jsx("div",{className:"col-8",children:A.jsxs("form",{id:"form",className:"form-signin",onSubmit:p,children:[A.jsxs("div",{className:"form-floating mb-3",children:[A.jsx("input",{type:"email",className:"form-control",id:"username",placeholder:"name@example.com",value:l.username,onChange:f,required:!0,autoFocus:!0}),A.jsx("label",{htmlFor:"username",children:"Email address"})]}),A.jsxs("div",{className:"form-floating",children:[A.jsx("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",value:l.password,onChange:f,required:!0}),A.jsx("label",{htmlFor:"password",children:"Password"})]}),A.jsx("button",{className:"btn btn-lg btn-primary w-100 mt-3",type:"submit",children:"登入"})]})})]}),A.jsx("p",{className:"mt-5 mb-3 text-muted",children:"© 2024~∞ - 六角學院"})]}),o&&A.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{position:"fixed",inset:0,backgroundColor:"rgba(255,255,255,0.9)",zIndex:999},children:A.jsx(gg,{dense:!0,color:"#1c211c",size:"medium",text:"",textColor:""})})]})};yg.propTypes={setIsAuth:ae.func.isRequired};const vg=({pageInfo:r,handleProductsPageChange:n})=>A.jsx(A.Fragment,{children:A.jsx("div",{className:"d-flex justify-content-center",children:A.jsx("nav",{children:A.jsxs("ul",{className:"pagination",children:[A.jsx("li",{className:`page-item ${!r.has_pre&&"disabled"}`,children:A.jsx("button",{type:"button",onClick:o=>n(o,r.current_page-1),className:"page-link",children:"上一頁"})}),Array.from({length:r.total_pages}).map((o,s)=>A.jsx("li",{"data-key":s+1,className:`page-item ${r.current_page===s+1&&"active"}`,children:A.jsx("button",{type:"button",onClick:l=>n(l,s+1),className:"page-link",children:s+1})},s)),A.jsx("li",{className:`page-item ${!r.has_next&&"disabled"}`,children:A.jsx("button",{type:"button",onClick:o=>n(o,r.current_page+1),className:"page-link",children:"下一頁"})})]})})})});vg.propTypes={handleProductsPageChange:ae.func,pageInfo:ae.shape({has_pre:ae.bool,has_next:ae.bool,current_page:ae.number,total_pages:ae.number})};var at="top",kt="bottom",Ot="right",st="left",Us="auto",bo=[at,kt,Ot,st],Sr="start",co="end",bg="clippingParents",Kc="viewport",io="popper",_g="reference",Dc=bo.reduce(function(r,n){return r.concat([n+"-"+Sr,n+"-"+co])},[]),Yc=[].concat(bo,[Us]).reduce(function(r,n){return r.concat([n,n+"-"+Sr,n+"-"+co])},[]),Eg="beforeRead",wg="read",xg="afterRead",Sg="beforeMain",kg="main",Og="afterMain",Tg="beforeWrite",Cg="write",Ag="afterWrite",Pg=[Eg,wg,xg,Sg,kg,Og,Tg,Cg,Ag];function ln(r){return r?(r.nodeName||"").toLowerCase():null}function Tt(r){if(r==null)return window;if(r.toString()!=="[object Window]"){var n=r.ownerDocument;return n&&n.defaultView||window}return r}function kr(r){var n=Tt(r).Element;return r instanceof n||r instanceof Element}function Mt(r){var n=Tt(r).HTMLElement;return r instanceof n||r instanceof HTMLElement}function Qc(r){if(typeof ShadowRoot>"u")return!1;var n=Tt(r).ShadowRoot;return r instanceof n||r instanceof ShadowRoot}function D_(r){var n=r.state;Object.keys(n.elements).forEach(function(o){var s=n.styles[o]||{},l=n.attributes[o]||{},d=n.elements[o];!Mt(d)||!ln(d)||(Object.assign(d.style,s),Object.keys(l).forEach(function(f){var p=l[f];p===!1?d.removeAttribute(f):d.setAttribute(f,p===!0?"":p)}))})}function R_(r){var n=r.state,o={popper:{position:n.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(n.elements.popper.style,o.popper),n.styles=o,n.elements.arrow&&Object.assign(n.elements.arrow.style,o.arrow),function(){Object.keys(n.elements).forEach(function(s){var l=n.elements[s],d=n.attributes[s]||{},f=Object.keys(n.styles.hasOwnProperty(s)?n.styles[s]:o[s]),p=f.reduce(function(g,y){return g[y]="",g},{});!Mt(l)||!ln(l)||(Object.assign(l.style,p),Object.keys(d).forEach(function(g){l.removeAttribute(g)}))})}}const Xc={name:"applyStyles",enabled:!0,phase:"write",fn:D_,effect:R_,requires:["computeStyles"]};function an(r){return r.split("-")[0]}var _r=Math.max,Ss=Math.min,fo=Math.round;function Rc(){var r=navigator.userAgentData;return r!=null&&r.brands&&Array.isArray(r.brands)?r.brands.map(function(n){return n.brand+"/"+n.version}).join(" "):navigator.userAgent}function Ng(){return!/^((?!chrome|android).)*safari/i.test(Rc())}function po(r,n,o){n===void 0&&(n=!1),o===void 0&&(o=!1);var s=r.getBoundingClientRect(),l=1,d=1;n&&Mt(r)&&(l=r.offsetWidth>0&&fo(s.width)/r.offsetWidth||1,d=r.offsetHeight>0&&fo(s.height)/r.offsetHeight||1);var f=kr(r)?Tt(r):window,p=f.visualViewport,g=!Ng()&&o,y=(s.left+(g&&p?p.offsetLeft:0))/l,m=(s.top+(g&&p?p.offsetTop:0))/d,E=s.width/l,T=s.height/d;return{width:E,height:T,top:m,right:y+E,bottom:m+T,left:y,x:y,y:m}}function Gc(r){var n=po(r),o=r.offsetWidth,s=r.offsetHeight;return Math.abs(n.width-o)<=1&&(o=n.width),Math.abs(n.height-s)<=1&&(s=n.height),{x:r.offsetLeft,y:r.offsetTop,width:o,height:s}}function Dg(r,n){var o=n.getRootNode&&n.getRootNode();if(r.contains(n))return!0;if(o&&Qc(o)){var s=n;do{if(s&&r.isSameNode(s))return!0;s=s.parentNode||s.host}while(s)}return!1}function xn(r){return Tt(r).getComputedStyle(r)}function L_(r){return["table","td","th"].indexOf(ln(r))>=0}function Gn(r){return((kr(r)?r.ownerDocument:r.document)||window.document).documentElement}function Hs(r){return ln(r)==="html"?r:r.assignedSlot||r.parentNode||(Qc(r)?r.host:null)||Gn(r)}function qh(r){return!Mt(r)||xn(r).position==="fixed"?null:r.offsetParent}function M_(r){var n=/firefox/i.test(Rc()),o=/Trident/i.test(Rc());if(o&&Mt(r)){var s=xn(r);if(s.position==="fixed")return null}var l=Hs(r);for(Qc(l)&&(l=l.host);Mt(l)&&["html","body"].indexOf(ln(l))<0;){var d=xn(l);if(d.transform!=="none"||d.perspective!=="none"||d.contain==="paint"||["transform","perspective"].indexOf(d.willChange)!==-1||n&&d.willChange==="filter"||n&&d.filter&&d.filter!=="none")return l;l=l.parentNode}return null}function Ri(r){for(var n=Tt(r),o=qh(r);o&&L_(o)&&xn(o).position==="static";)o=qh(o);return o&&(ln(o)==="html"||ln(o)==="body"&&xn(o).position==="static")?n:o||M_(r)||n}function Jc(r){return["top","bottom"].indexOf(r)>=0?"x":"y"}function _i(r,n,o){return _r(r,Ss(n,o))}function I_(r,n,o){var s=_i(r,n,o);return s>o?o:s}function Rg(){return{top:0,right:0,bottom:0,left:0}}function Lg(r){return Object.assign({},Rg(),r)}function Mg(r,n){return n.reduce(function(o,s){return o[s]=r,o},{})}var z_=function(n,o){return n=typeof n=="function"?n(Object.assign({},o.rects,{placement:o.placement})):n,Lg(typeof n!="number"?n:Mg(n,bo))};function j_(r){var n,o=r.state,s=r.name,l=r.options,d=o.elements.arrow,f=o.modifiersData.popperOffsets,p=an(o.placement),g=Jc(p),y=[st,Ot].indexOf(p)>=0,m=y?"height":"width";if(!(!d||!f)){var E=z_(l.padding,o),T=Gc(d),N=g==="y"?at:st,w=g==="y"?kt:Ot,b=o.rects.reference[m]+o.rects.reference[g]-f[g]-o.rects.popper[m],S=f[g]-o.rects.reference[g],I=Ri(d),H=I?g==="y"?I.clientHeight||0:I.clientWidth||0:0,L=b/2-S/2,z=E[N],R=H-T[m]-E[w],B=H/2-T[m]/2+L,W=_i(z,B,R),te=g;o.modifiersData[s]=(n={},n[te]=W,n.centerOffset=W-B,n)}}function $_(r){var n=r.state,o=r.options,s=o.element,l=s===void 0?"[data-popper-arrow]":s;l!=null&&(typeof l=="string"&&(l=n.elements.popper.querySelector(l),!l)||Dg(n.elements.popper,l)&&(n.elements.arrow=l))}const Ig={name:"arrow",enabled:!0,phase:"main",fn:j_,effect:$_,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function ho(r){return r.split("-")[1]}var F_={top:"auto",right:"auto",bottom:"auto",left:"auto"};function U_(r,n){var o=r.x,s=r.y,l=n.devicePixelRatio||1;return{x:fo(o*l)/l||0,y:fo(s*l)/l||0}}function Wh(r){var n,o=r.popper,s=r.popperRect,l=r.placement,d=r.variation,f=r.offsets,p=r.position,g=r.gpuAcceleration,y=r.adaptive,m=r.roundOffsets,E=r.isFixed,T=f.x,N=T===void 0?0:T,w=f.y,b=w===void 0?0:w,S=typeof m=="function"?m({x:N,y:b}):{x:N,y:b};N=S.x,b=S.y;var I=f.hasOwnProperty("x"),H=f.hasOwnProperty("y"),L=st,z=at,R=window;if(y){var B=Ri(o),W="clientHeight",te="clientWidth";if(B===Tt(o)&&(B=Gn(o),xn(B).position!=="static"&&p==="absolute"&&(W="scrollHeight",te="scrollWidth")),B=B,l===at||(l===st||l===Ot)&&d===co){z=kt;var se=E&&B===R&&R.visualViewport?R.visualViewport.height:B[W];b-=se-s.height,b*=g?1:-1}if(l===st||(l===at||l===kt)&&d===co){L=Ot;var J=E&&B===R&&R.visualViewport?R.visualViewport.width:B[te];N-=J-s.width,N*=g?1:-1}}var le=Object.assign({position:p},y&&F_),ye=m===!0?U_({x:N,y:b},Tt(o)):{x:N,y:b};if(N=ye.x,b=ye.y,g){var ve;return Object.assign({},le,(ve={},ve[z]=H?"0":"",ve[L]=I?"0":"",ve.transform=(R.devicePixelRatio||1)<=1?"translate("+N+"px, "+b+"px)":"translate3d("+N+"px, "+b+"px, 0)",ve))}return Object.assign({},le,(n={},n[z]=H?b+"px":"",n[L]=I?N+"px":"",n.transform="",n))}function H_(r){var n=r.state,o=r.options,s=o.gpuAcceleration,l=s===void 0?!0:s,d=o.adaptive,f=d===void 0?!0:d,p=o.roundOffsets,g=p===void 0?!0:p,y={placement:an(n.placement),variation:ho(n.placement),popper:n.elements.popper,popperRect:n.rects.popper,gpuAcceleration:l,isFixed:n.options.strategy==="fixed"};n.modifiersData.popperOffsets!=null&&(n.styles.popper=Object.assign({},n.styles.popper,Wh(Object.assign({},y,{offsets:n.modifiersData.popperOffsets,position:n.options.strategy,adaptive:f,roundOffsets:g})))),n.modifiersData.arrow!=null&&(n.styles.arrow=Object.assign({},n.styles.arrow,Wh(Object.assign({},y,{offsets:n.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:g})))),n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-placement":n.placement})}const Zc={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:H_,data:{}};var rs={passive:!0};function B_(r){var n=r.state,o=r.instance,s=r.options,l=s.scroll,d=l===void 0?!0:l,f=s.resize,p=f===void 0?!0:f,g=Tt(n.elements.popper),y=[].concat(n.scrollParents.reference,n.scrollParents.popper);return d&&y.forEach(function(m){m.addEventListener("scroll",o.update,rs)}),p&&g.addEventListener("resize",o.update,rs),function(){d&&y.forEach(function(m){m.removeEventListener("scroll",o.update,rs)}),p&&g.removeEventListener("resize",o.update,rs)}}const ed={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:B_,data:{}};var V_={left:"right",right:"left",bottom:"top",top:"bottom"};function ps(r){return r.replace(/left|right|bottom|top/g,function(n){return V_[n]})}var q_={start:"end",end:"start"};function Kh(r){return r.replace(/start|end/g,function(n){return q_[n]})}function td(r){var n=Tt(r),o=n.pageXOffset,s=n.pageYOffset;return{scrollLeft:o,scrollTop:s}}function nd(r){return po(Gn(r)).left+td(r).scrollLeft}function W_(r,n){var o=Tt(r),s=Gn(r),l=o.visualViewport,d=s.clientWidth,f=s.clientHeight,p=0,g=0;if(l){d=l.width,f=l.height;var y=Ng();(y||!y&&n==="fixed")&&(p=l.offsetLeft,g=l.offsetTop)}return{width:d,height:f,x:p+nd(r),y:g}}function K_(r){var n,o=Gn(r),s=td(r),l=(n=r.ownerDocument)==null?void 0:n.body,d=_r(o.scrollWidth,o.clientWidth,l?l.scrollWidth:0,l?l.clientWidth:0),f=_r(o.scrollHeight,o.clientHeight,l?l.scrollHeight:0,l?l.clientHeight:0),p=-s.scrollLeft+nd(r),g=-s.scrollTop;return xn(l||o).direction==="rtl"&&(p+=_r(o.clientWidth,l?l.clientWidth:0)-d),{width:d,height:f,x:p,y:g}}function rd(r){var n=xn(r),o=n.overflow,s=n.overflowX,l=n.overflowY;return/auto|scroll|overlay|hidden/.test(o+l+s)}function zg(r){return["html","body","#document"].indexOf(ln(r))>=0?r.ownerDocument.body:Mt(r)&&rd(r)?r:zg(Hs(r))}function Ei(r,n){var o;n===void 0&&(n=[]);var s=zg(r),l=s===((o=r.ownerDocument)==null?void 0:o.body),d=Tt(s),f=l?[d].concat(d.visualViewport||[],rd(s)?s:[]):s,p=n.concat(f);return l?p:p.concat(Ei(Hs(f)))}function Lc(r){return Object.assign({},r,{left:r.x,top:r.y,right:r.x+r.width,bottom:r.y+r.height})}function Y_(r,n){var o=po(r,!1,n==="fixed");return o.top=o.top+r.clientTop,o.left=o.left+r.clientLeft,o.bottom=o.top+r.clientHeight,o.right=o.left+r.clientWidth,o.width=r.clientWidth,o.height=r.clientHeight,o.x=o.left,o.y=o.top,o}function Yh(r,n,o){return n===Kc?Lc(W_(r,o)):kr(n)?Y_(n,o):Lc(K_(Gn(r)))}function Q_(r){var n=Ei(Hs(r)),o=["absolute","fixed"].indexOf(xn(r).position)>=0,s=o&&Mt(r)?Ri(r):r;return kr(s)?n.filter(function(l){return kr(l)&&Dg(l,s)&&ln(l)!=="body"}):[]}function X_(r,n,o,s){var l=n==="clippingParents"?Q_(r):[].concat(n),d=[].concat(l,[o]),f=d[0],p=d.reduce(function(g,y){var m=Yh(r,y,s);return g.top=_r(m.top,g.top),g.right=Ss(m.right,g.right),g.bottom=Ss(m.bottom,g.bottom),g.left=_r(m.left,g.left),g},Yh(r,f,s));return p.width=p.right-p.left,p.height=p.bottom-p.top,p.x=p.left,p.y=p.top,p}function jg(r){var n=r.reference,o=r.element,s=r.placement,l=s?an(s):null,d=s?ho(s):null,f=n.x+n.width/2-o.width/2,p=n.y+n.height/2-o.height/2,g;switch(l){case at:g={x:f,y:n.y-o.height};break;case kt:g={x:f,y:n.y+n.height};break;case Ot:g={x:n.x+n.width,y:p};break;case st:g={x:n.x-o.width,y:p};break;default:g={x:n.x,y:n.y}}var y=l?Jc(l):null;if(y!=null){var m=y==="y"?"height":"width";switch(d){case Sr:g[y]=g[y]-(n[m]/2-o[m]/2);break;case co:g[y]=g[y]+(n[m]/2-o[m]/2);break}}return g}function mo(r,n){n===void 0&&(n={});var o=n,s=o.placement,l=s===void 0?r.placement:s,d=o.strategy,f=d===void 0?r.strategy:d,p=o.boundary,g=p===void 0?bg:p,y=o.rootBoundary,m=y===void 0?Kc:y,E=o.elementContext,T=E===void 0?io:E,N=o.altBoundary,w=N===void 0?!1:N,b=o.padding,S=b===void 0?0:b,I=Lg(typeof S!="number"?S:Mg(S,bo)),H=T===io?_g:io,L=r.rects.popper,z=r.elements[w?H:T],R=X_(kr(z)?z:z.contextElement||Gn(r.elements.popper),g,m,f),B=po(r.elements.reference),W=jg({reference:B,element:L,strategy:"absolute",placement:l}),te=Lc(Object.assign({},L,W)),se=T===io?te:B,J={top:R.top-se.top+I.top,bottom:se.bottom-R.bottom+I.bottom,left:R.left-se.left+I.left,right:se.right-R.right+I.right},le=r.modifiersData.offset;if(T===io&&le){var ye=le[l];Object.keys(J).forEach(function(ve){var Pe=[Ot,kt].indexOf(ve)>=0?1:-1,je=[at,kt].indexOf(ve)>=0?"y":"x";J[ve]+=ye[je]*Pe})}return J}function G_(r,n){n===void 0&&(n={});var o=n,s=o.placement,l=o.boundary,d=o.rootBoundary,f=o.padding,p=o.flipVariations,g=o.allowedAutoPlacements,y=g===void 0?Yc:g,m=ho(s),E=m?p?Dc:Dc.filter(function(w){return ho(w)===m}):bo,T=E.filter(function(w){return y.indexOf(w)>=0});T.length===0&&(T=E);var N=T.reduce(function(w,b){return w[b]=mo(r,{placement:b,boundary:l,rootBoundary:d,padding:f})[an(b)],w},{});return Object.keys(N).sort(function(w,b){return N[w]-N[b]})}function J_(r){if(an(r)===Us)return[];var n=ps(r);return[Kh(r),n,Kh(n)]}function Z_(r){var n=r.state,o=r.options,s=r.name;if(!n.modifiersData[s]._skip){for(var l=o.mainAxis,d=l===void 0?!0:l,f=o.altAxis,p=f===void 0?!0:f,g=o.fallbackPlacements,y=o.padding,m=o.boundary,E=o.rootBoundary,T=o.altBoundary,N=o.flipVariations,w=N===void 0?!0:N,b=o.allowedAutoPlacements,S=n.options.placement,I=an(S),H=I===S,L=g||(H||!w?[ps(S)]:J_(S)),z=[S].concat(L).reduce(function(de,pe){return de.concat(an(pe)===Us?G_(n,{placement:pe,boundary:m,rootBoundary:E,padding:y,flipVariations:w,allowedAutoPlacements:b}):pe)},[]),R=n.rects.reference,B=n.rects.popper,W=new Map,te=!0,se=z[0],J=0;J<z.length;J++){var le=z[J],ye=an(le),ve=ho(le)===Sr,Pe=[at,kt].indexOf(ye)>=0,je=Pe?"width":"height",Te=mo(n,{placement:le,boundary:m,rootBoundary:E,altBoundary:T,padding:y}),Ee=Pe?ve?Ot:st:ve?kt:at;R[je]>B[je]&&(Ee=ps(Ee));var q=ps(Ee),ne=[];if(d&&ne.push(Te[ye]<=0),p&&ne.push(Te[Ee]<=0,Te[q]<=0),ne.every(function(de){return de})){se=le,te=!1;break}W.set(le,ne)}if(te)for(var K=w?3:1,k=function(pe){var he=z.find(function(Se){var be=W.get(Se);if(be)return be.slice(0,pe).every(function(Ce){return Ce})});if(he)return se=he,"break"},M=K;M>0;M--){var ce=k(M);if(ce==="break")break}n.placement!==se&&(n.modifiersData[s]._skip=!0,n.placement=se,n.reset=!0)}}const $g={name:"flip",enabled:!0,phase:"main",fn:Z_,requiresIfExists:["offset"],data:{_skip:!1}};function Qh(r,n,o){return o===void 0&&(o={x:0,y:0}),{top:r.top-n.height-o.y,right:r.right-n.width+o.x,bottom:r.bottom-n.height+o.y,left:r.left-n.width-o.x}}function Xh(r){return[at,Ot,kt,st].some(function(n){return r[n]>=0})}function eE(r){var n=r.state,o=r.name,s=n.rects.reference,l=n.rects.popper,d=n.modifiersData.preventOverflow,f=mo(n,{elementContext:"reference"}),p=mo(n,{altBoundary:!0}),g=Qh(f,s),y=Qh(p,l,d),m=Xh(g),E=Xh(y);n.modifiersData[o]={referenceClippingOffsets:g,popperEscapeOffsets:y,isReferenceHidden:m,hasPopperEscaped:E},n.attributes.popper=Object.assign({},n.attributes.popper,{"data-popper-reference-hidden":m,"data-popper-escaped":E})}const Fg={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:eE};function tE(r,n,o){var s=an(r),l=[st,at].indexOf(s)>=0?-1:1,d=typeof o=="function"?o(Object.assign({},n,{placement:r})):o,f=d[0],p=d[1];return f=f||0,p=(p||0)*l,[st,Ot].indexOf(s)>=0?{x:p,y:f}:{x:f,y:p}}function nE(r){var n=r.state,o=r.options,s=r.name,l=o.offset,d=l===void 0?[0,0]:l,f=Yc.reduce(function(m,E){return m[E]=tE(E,n.rects,d),m},{}),p=f[n.placement],g=p.x,y=p.y;n.modifiersData.popperOffsets!=null&&(n.modifiersData.popperOffsets.x+=g,n.modifiersData.popperOffsets.y+=y),n.modifiersData[s]=f}const Ug={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:nE};function rE(r){var n=r.state,o=r.name;n.modifiersData[o]=jg({reference:n.rects.reference,element:n.rects.popper,strategy:"absolute",placement:n.placement})}const od={name:"popperOffsets",enabled:!0,phase:"read",fn:rE,data:{}};function oE(r){return r==="x"?"y":"x"}function iE(r){var n=r.state,o=r.options,s=r.name,l=o.mainAxis,d=l===void 0?!0:l,f=o.altAxis,p=f===void 0?!1:f,g=o.boundary,y=o.rootBoundary,m=o.altBoundary,E=o.padding,T=o.tether,N=T===void 0?!0:T,w=o.tetherOffset,b=w===void 0?0:w,S=mo(n,{boundary:g,rootBoundary:y,padding:E,altBoundary:m}),I=an(n.placement),H=ho(n.placement),L=!H,z=Jc(I),R=oE(z),B=n.modifiersData.popperOffsets,W=n.rects.reference,te=n.rects.popper,se=typeof b=="function"?b(Object.assign({},n.rects,{placement:n.placement})):b,J=typeof se=="number"?{mainAxis:se,altAxis:se}:Object.assign({mainAxis:0,altAxis:0},se),le=n.modifiersData.offset?n.modifiersData.offset[n.placement]:null,ye={x:0,y:0};if(B){if(d){var ve,Pe=z==="y"?at:st,je=z==="y"?kt:Ot,Te=z==="y"?"height":"width",Ee=B[z],q=Ee+S[Pe],ne=Ee-S[je],K=N?-te[Te]/2:0,k=H===Sr?W[Te]:te[Te],M=H===Sr?-te[Te]:-W[Te],ce=n.elements.arrow,de=N&&ce?Gc(ce):{width:0,height:0},pe=n.modifiersData["arrow#persistent"]?n.modifiersData["arrow#persistent"].padding:Rg(),he=pe[Pe],Se=pe[je],be=_i(0,W[Te],de[Te]),Ce=L?W[Te]/2-K-be-he-J.mainAxis:k-be-he-J.mainAxis,rt=L?-W[Te]/2+K+be+Se+J.mainAxis:M+be+Se+J.mainAxis,kn=n.elements.arrow&&Ri(n.elements.arrow),ji=kn?z==="y"?kn.clientTop||0:kn.clientLeft||0:0,er=(ve=le==null?void 0:le[z])!=null?ve:0,xo=Ee+Ce-er-ji,$i=Ee+rt-er,So=_i(N?Ss(q,xo):q,Ee,N?_r(ne,$i):ne);B[z]=So,ye[z]=So-Ee}if(p){var Cr,Fi=z==="x"?at:st,ko=z==="x"?kt:Ot,gt=B[R],Ft=R==="y"?"height":"width",Ar=gt+S[Fi],Oo=gt-S[ko],Pr=[at,st].indexOf(I)!==-1,To=(Cr=le==null?void 0:le[R])!=null?Cr:0,Co=Pr?Ar:gt-W[Ft]-te[Ft]-To+J.altAxis,Nr=Pr?gt+W[Ft]+te[Ft]-To-J.altAxis:Oo,tr=N&&Pr?I_(Co,gt,Nr):_i(N?Co:Ar,gt,N?Nr:Oo);B[R]=tr,ye[R]=tr-gt}n.modifiersData[s]=ye}}const Hg={name:"preventOverflow",enabled:!0,phase:"main",fn:iE,requiresIfExists:["offset"]};function aE(r){return{scrollLeft:r.scrollLeft,scrollTop:r.scrollTop}}function sE(r){return r===Tt(r)||!Mt(r)?td(r):aE(r)}function lE(r){var n=r.getBoundingClientRect(),o=fo(n.width)/r.offsetWidth||1,s=fo(n.height)/r.offsetHeight||1;return o!==1||s!==1}function uE(r,n,o){o===void 0&&(o=!1);var s=Mt(n),l=Mt(n)&&lE(n),d=Gn(n),f=po(r,l,o),p={scrollLeft:0,scrollTop:0},g={x:0,y:0};return(s||!s&&!o)&&((ln(n)!=="body"||rd(d))&&(p=sE(n)),Mt(n)?(g=po(n,!0),g.x+=n.clientLeft,g.y+=n.clientTop):d&&(g.x=nd(d))),{x:f.left+p.scrollLeft-g.x,y:f.top+p.scrollTop-g.y,width:f.width,height:f.height}}function cE(r){var n=new Map,o=new Set,s=[];r.forEach(function(d){n.set(d.name,d)});function l(d){o.add(d.name);var f=[].concat(d.requires||[],d.requiresIfExists||[]);f.forEach(function(p){if(!o.has(p)){var g=n.get(p);g&&l(g)}}),s.push(d)}return r.forEach(function(d){o.has(d.name)||l(d)}),s}function dE(r){var n=cE(r);return Pg.reduce(function(o,s){return o.concat(n.filter(function(l){return l.phase===s}))},[])}function fE(r){var n;return function(){return n||(n=new Promise(function(o){Promise.resolve().then(function(){n=void 0,o(r())})})),n}}function pE(r){var n=r.reduce(function(o,s){var l=o[s.name];return o[s.name]=l?Object.assign({},l,s,{options:Object.assign({},l.options,s.options),data:Object.assign({},l.data,s.data)}):s,o},{});return Object.keys(n).map(function(o){return n[o]})}var Gh={placement:"bottom",modifiers:[],strategy:"absolute"};function Jh(){for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return!n.some(function(s){return!(s&&typeof s.getBoundingClientRect=="function")})}function Bs(r){r===void 0&&(r={});var n=r,o=n.defaultModifiers,s=o===void 0?[]:o,l=n.defaultOptions,d=l===void 0?Gh:l;return function(p,g,y){y===void 0&&(y=d);var m={placement:"bottom",orderedModifiers:[],options:Object.assign({},Gh,d),modifiersData:{},elements:{reference:p,popper:g},attributes:{},styles:{}},E=[],T=!1,N={state:m,setOptions:function(I){var H=typeof I=="function"?I(m.options):I;b(),m.options=Object.assign({},d,m.options,H),m.scrollParents={reference:kr(p)?Ei(p):p.contextElement?Ei(p.contextElement):[],popper:Ei(g)};var L=dE(pE([].concat(s,m.options.modifiers)));return m.orderedModifiers=L.filter(function(z){return z.enabled}),w(),N.update()},forceUpdate:function(){if(!T){var I=m.elements,H=I.reference,L=I.popper;if(Jh(H,L)){m.rects={reference:uE(H,Ri(L),m.options.strategy==="fixed"),popper:Gc(L)},m.reset=!1,m.placement=m.options.placement,m.orderedModifiers.forEach(function(J){return m.modifiersData[J.name]=Object.assign({},J.data)});for(var z=0;z<m.orderedModifiers.length;z++){if(m.reset===!0){m.reset=!1,z=-1;continue}var R=m.orderedModifiers[z],B=R.fn,W=R.options,te=W===void 0?{}:W,se=R.name;typeof B=="function"&&(m=B({state:m,options:te,name:se,instance:N})||m)}}}},update:fE(function(){return new Promise(function(S){N.forceUpdate(),S(m)})}),destroy:function(){b(),T=!0}};if(!Jh(p,g))return N;N.setOptions(y).then(function(S){!T&&y.onFirstUpdate&&y.onFirstUpdate(S)});function w(){m.orderedModifiers.forEach(function(S){var I=S.name,H=S.options,L=H===void 0?{}:H,z=S.effect;if(typeof z=="function"){var R=z({state:m,name:I,instance:N,options:L}),B=function(){};E.push(R||B)}})}function b(){E.forEach(function(S){return S()}),E=[]}return N}}var hE=Bs(),mE=[ed,od,Zc,Xc],gE=Bs({defaultModifiers:mE}),yE=[ed,od,Zc,Xc,Ug,$g,Hg,Ig,Fg],id=Bs({defaultModifiers:yE});const Bg=Object.freeze(Object.defineProperty({__proto__:null,afterMain:Og,afterRead:xg,afterWrite:Ag,applyStyles:Xc,arrow:Ig,auto:Us,basePlacements:bo,beforeMain:Sg,beforeRead:Eg,beforeWrite:Tg,bottom:kt,clippingParents:bg,computeStyles:Zc,createPopper:id,createPopperBase:hE,createPopperLite:gE,detectOverflow:mo,end:co,eventListeners:ed,flip:$g,hide:Fg,left:st,main:kg,modifierPhases:Pg,offset:Ug,placements:Yc,popper:io,popperGenerator:Bs,popperOffsets:od,preventOverflow:Hg,read:wg,reference:_g,right:Ot,start:Sr,top:at,variationPlacements:Dc,viewport:Kc,write:Cg},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Wn=new Map,nc={set(r,n,o){Wn.has(r)||Wn.set(r,new Map);const s=Wn.get(r);if(!s.has(n)&&s.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s.keys())[0]}.`);return}s.set(n,o)},get(r,n){return Wn.has(r)&&Wn.get(r).get(n)||null},remove(r,n){if(!Wn.has(r))return;const o=Wn.get(r);o.delete(n),o.size===0&&Wn.delete(r)}},vE=1e6,bE=1e3,Mc="transitionend",Vg=r=>(r&&window.CSS&&window.CSS.escape&&(r=r.replace(/#([^\s"#']+)/g,(n,o)=>`#${CSS.escape(o)}`)),r),_E=r=>r==null?`${r}`:Object.prototype.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase(),EE=r=>{do r+=Math.floor(Math.random()*vE);while(document.getElementById(r));return r},wE=r=>{if(!r)return 0;let{transitionDuration:n,transitionDelay:o}=window.getComputedStyle(r);const s=Number.parseFloat(n),l=Number.parseFloat(o);return!s&&!l?0:(n=n.split(",")[0],o=o.split(",")[0],(Number.parseFloat(n)+Number.parseFloat(o))*bE)},qg=r=>{r.dispatchEvent(new Event(Mc))},_n=r=>!r||typeof r!="object"?!1:(typeof r.jquery<"u"&&(r=r[0]),typeof r.nodeType<"u"),Yn=r=>_n(r)?r.jquery?r[0]:r:typeof r=="string"&&r.length>0?document.querySelector(Vg(r)):null,_o=r=>{if(!_n(r)||r.getClientRects().length===0)return!1;const n=getComputedStyle(r).getPropertyValue("visibility")==="visible",o=r.closest("details:not([open])");if(!o)return n;if(o!==r){const s=r.closest("summary");if(s&&s.parentNode!==o||s===null)return!1}return n},Qn=r=>!r||r.nodeType!==Node.ELEMENT_NODE||r.classList.contains("disabled")?!0:typeof r.disabled<"u"?r.disabled:r.hasAttribute("disabled")&&r.getAttribute("disabled")!=="false",Wg=r=>{if(!document.documentElement.attachShadow)return null;if(typeof r.getRootNode=="function"){const n=r.getRootNode();return n instanceof ShadowRoot?n:null}return r instanceof ShadowRoot?r:r.parentNode?Wg(r.parentNode):null},ks=()=>{},Li=r=>{r.offsetHeight},Kg=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,rc=[],xE=r=>{document.readyState==="loading"?(rc.length||document.addEventListener("DOMContentLoaded",()=>{for(const n of rc)n()}),rc.push(r)):r()},zt=()=>document.documentElement.dir==="rtl",$t=r=>{xE(()=>{const n=Kg();if(n){const o=r.NAME,s=n.fn[o];n.fn[o]=r.jQueryInterface,n.fn[o].Constructor=r,n.fn[o].noConflict=()=>(n.fn[o]=s,r.jQueryInterface)}})},ht=(r,n=[],o=r)=>typeof r=="function"?r(...n):o,Yg=(r,n,o=!0)=>{if(!o){ht(r);return}const l=wE(n)+5;let d=!1;const f=({target:p})=>{p===n&&(d=!0,n.removeEventListener(Mc,f),ht(r))};n.addEventListener(Mc,f),setTimeout(()=>{d||qg(n)},l)},ad=(r,n,o,s)=>{const l=r.length;let d=r.indexOf(n);return d===-1?!o&&s?r[l-1]:r[0]:(d+=o?1:-1,s&&(d=(d+l)%l),r[Math.max(0,Math.min(d,l-1))])},SE=/[^.]*(?=\..*)\.|.*/,kE=/\..*/,OE=/::\d+$/,oc={};let Zh=1;const Qg={mouseenter:"mouseover",mouseleave:"mouseout"},TE=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function Xg(r,n){return n&&`${n}::${Zh++}`||r.uidEvent||Zh++}function Gg(r){const n=Xg(r);return r.uidEvent=n,oc[n]=oc[n]||{},oc[n]}function CE(r,n){return function o(s){return sd(s,{delegateTarget:r}),o.oneOff&&F.off(r,s.type,n),n.apply(r,[s])}}function AE(r,n,o){return function s(l){const d=r.querySelectorAll(n);for(let{target:f}=l;f&&f!==this;f=f.parentNode)for(const p of d)if(p===f)return sd(l,{delegateTarget:f}),s.oneOff&&F.off(r,l.type,n,o),o.apply(f,[l])}}function Jg(r,n,o=null){return Object.values(r).find(s=>s.callable===n&&s.delegationSelector===o)}function Zg(r,n,o){const s=typeof n=="string",l=s?o:n||o;let d=ey(r);return TE.has(d)||(d=r),[s,l,d]}function em(r,n,o,s,l){if(typeof n!="string"||!r)return;let[d,f,p]=Zg(n,o,s);n in Qg&&(f=(w=>function(b){if(!b.relatedTarget||b.relatedTarget!==b.delegateTarget&&!b.delegateTarget.contains(b.relatedTarget))return w.call(this,b)})(f));const g=Gg(r),y=g[p]||(g[p]={}),m=Jg(y,f,d?o:null);if(m){m.oneOff=m.oneOff&&l;return}const E=Xg(f,n.replace(SE,"")),T=d?AE(r,o,f):CE(r,f);T.delegationSelector=d?o:null,T.callable=f,T.oneOff=l,T.uidEvent=E,y[E]=T,r.addEventListener(p,T,d)}function Ic(r,n,o,s,l){const d=Jg(n[o],s,l);d&&(r.removeEventListener(o,d,!!l),delete n[o][d.uidEvent])}function PE(r,n,o,s){const l=n[o]||{};for(const[d,f]of Object.entries(l))d.includes(s)&&Ic(r,n,o,f.callable,f.delegationSelector)}function ey(r){return r=r.replace(kE,""),Qg[r]||r}const F={on(r,n,o,s){em(r,n,o,s,!1)},one(r,n,o,s){em(r,n,o,s,!0)},off(r,n,o,s){if(typeof n!="string"||!r)return;const[l,d,f]=Zg(n,o,s),p=f!==n,g=Gg(r),y=g[f]||{},m=n.startsWith(".");if(typeof d<"u"){if(!Object.keys(y).length)return;Ic(r,g,f,d,l?o:null);return}if(m)for(const E of Object.keys(g))PE(r,g,E,n.slice(1));for(const[E,T]of Object.entries(y)){const N=E.replace(OE,"");(!p||n.includes(N))&&Ic(r,g,f,T.callable,T.delegationSelector)}},trigger(r,n,o){if(typeof n!="string"||!r)return null;const s=Kg(),l=ey(n),d=n!==l;let f=null,p=!0,g=!0,y=!1;d&&s&&(f=s.Event(n,o),s(r).trigger(f),p=!f.isPropagationStopped(),g=!f.isImmediatePropagationStopped(),y=f.isDefaultPrevented());const m=sd(new Event(n,{bubbles:p,cancelable:!0}),o);return y&&m.preventDefault(),g&&r.dispatchEvent(m),m.defaultPrevented&&f&&f.preventDefault(),m}};function sd(r,n={}){for(const[o,s]of Object.entries(n))try{r[o]=s}catch{Object.defineProperty(r,o,{configurable:!0,get(){return s}})}return r}function tm(r){if(r==="true")return!0;if(r==="false")return!1;if(r===Number(r).toString())return Number(r);if(r===""||r==="null")return null;if(typeof r!="string")return r;try{return JSON.parse(decodeURIComponent(r))}catch{return r}}function ic(r){return r.replace(/[A-Z]/g,n=>`-${n.toLowerCase()}`)}const En={setDataAttribute(r,n,o){r.setAttribute(`data-bs-${ic(n)}`,o)},removeDataAttribute(r,n){r.removeAttribute(`data-bs-${ic(n)}`)},getDataAttributes(r){if(!r)return{};const n={},o=Object.keys(r.dataset).filter(s=>s.startsWith("bs")&&!s.startsWith("bsConfig"));for(const s of o){let l=s.replace(/^bs/,"");l=l.charAt(0).toLowerCase()+l.slice(1,l.length),n[l]=tm(r.dataset[s])}return n},getDataAttribute(r,n){return tm(r.getAttribute(`data-bs-${ic(n)}`))}};class Mi{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(n){return n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n}_mergeConfigObj(n,o){const s=_n(o)?En.getDataAttribute(o,"config"):{};return{...this.constructor.Default,...typeof s=="object"?s:{},..._n(o)?En.getDataAttributes(o):{},...typeof n=="object"?n:{}}}_typeCheckConfig(n,o=this.constructor.DefaultType){for(const[s,l]of Object.entries(o)){const d=n[s],f=_n(d)?"element":_E(d);if(!new RegExp(l).test(f))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${s}" provided type "${f}" but expected type "${l}".`)}}}const NE="5.3.3";class Jt extends Mi{constructor(n,o){super(),n=Yn(n),n&&(this._element=n,this._config=this._getConfig(o),nc.set(this._element,this.constructor.DATA_KEY,this))}dispose(){nc.remove(this._element,this.constructor.DATA_KEY),F.off(this._element,this.constructor.EVENT_KEY);for(const n of Object.getOwnPropertyNames(this))this[n]=null}_queueCallback(n,o,s=!0){Yg(n,o,s)}_getConfig(n){return n=this._mergeConfigObj(n,this._element),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}static getInstance(n){return nc.get(Yn(n),this.DATA_KEY)}static getOrCreateInstance(n,o={}){return this.getInstance(n)||new this(n,typeof o=="object"?o:null)}static get VERSION(){return NE}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(n){return`${n}${this.EVENT_KEY}`}}const ac=r=>{let n=r.getAttribute("data-bs-target");if(!n||n==="#"){let o=r.getAttribute("href");if(!o||!o.includes("#")&&!o.startsWith("."))return null;o.includes("#")&&!o.startsWith("#")&&(o=`#${o.split("#")[1]}`),n=o&&o!=="#"?o.trim():null}return n?n.split(",").map(o=>Vg(o)).join(","):null},re={find(r,n=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(n,r))},findOne(r,n=document.documentElement){return Element.prototype.querySelector.call(n,r)},children(r,n){return[].concat(...r.children).filter(o=>o.matches(n))},parents(r,n){const o=[];let s=r.parentNode.closest(n);for(;s;)o.push(s),s=s.parentNode.closest(n);return o},prev(r,n){let o=r.previousElementSibling;for(;o;){if(o.matches(n))return[o];o=o.previousElementSibling}return[]},next(r,n){let o=r.nextElementSibling;for(;o;){if(o.matches(n))return[o];o=o.nextElementSibling}return[]},focusableChildren(r){const n=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(o=>`${o}:not([tabindex^="-"])`).join(",");return this.find(n,r).filter(o=>!Qn(o)&&_o(o))},getSelectorFromElement(r){const n=ac(r);return n&&re.findOne(n)?n:null},getElementFromSelector(r){const n=ac(r);return n?re.findOne(n):null},getMultipleElementsFromSelector(r){const n=ac(r);return n?re.find(n):[]}},Vs=(r,n="hide")=>{const o=`click.dismiss${r.EVENT_KEY}`,s=r.NAME;F.on(document,o,`[data-bs-dismiss="${s}"]`,function(l){if(["A","AREA"].includes(this.tagName)&&l.preventDefault(),Qn(this))return;const d=re.getElementFromSelector(this)||this.closest(`.${s}`);r.getOrCreateInstance(d)[n]()})},DE="alert",RE="bs.alert",ty=`.${RE}`,LE=`close${ty}`,ME=`closed${ty}`,IE="fade",zE="show";class qs extends Jt{static get NAME(){return DE}close(){if(F.trigger(this._element,LE).defaultPrevented)return;this._element.classList.remove(zE);const o=this._element.classList.contains(IE);this._queueCallback(()=>this._destroyElement(),this._element,o)}_destroyElement(){this._element.remove(),F.trigger(this._element,ME),this.dispose()}static jQueryInterface(n){return this.each(function(){const o=qs.getOrCreateInstance(this);if(typeof n=="string"){if(o[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);o[n](this)}})}}Vs(qs,"close");$t(qs);const jE="button",$E="bs.button",FE=`.${$E}`,UE=".data-api",HE="active",nm='[data-bs-toggle="button"]',BE=`click${FE}${UE}`;class Ws extends Jt{static get NAME(){return jE}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(HE))}static jQueryInterface(n){return this.each(function(){const o=Ws.getOrCreateInstance(this);n==="toggle"&&o[n]()})}}F.on(document,BE,nm,r=>{r.preventDefault();const n=r.target.closest(nm);Ws.getOrCreateInstance(n).toggle()});$t(Ws);const VE="swipe",Eo=".bs.swipe",qE=`touchstart${Eo}`,WE=`touchmove${Eo}`,KE=`touchend${Eo}`,YE=`pointerdown${Eo}`,QE=`pointerup${Eo}`,XE="touch",GE="pen",JE="pointer-event",ZE=40,ew={endCallback:null,leftCallback:null,rightCallback:null},tw={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class Os extends Mi{constructor(n,o){super(),this._element=n,!(!n||!Os.isSupported())&&(this._config=this._getConfig(o),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return ew}static get DefaultType(){return tw}static get NAME(){return VE}dispose(){F.off(this._element,Eo)}_start(n){if(!this._supportPointerEvents){this._deltaX=n.touches[0].clientX;return}this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX)}_end(n){this._eventIsPointerPenTouch(n)&&(this._deltaX=n.clientX-this._deltaX),this._handleSwipe(),ht(this._config.endCallback)}_move(n){this._deltaX=n.touches&&n.touches.length>1?0:n.touches[0].clientX-this._deltaX}_handleSwipe(){const n=Math.abs(this._deltaX);if(n<=ZE)return;const o=n/this._deltaX;this._deltaX=0,o&&ht(o>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(F.on(this._element,YE,n=>this._start(n)),F.on(this._element,QE,n=>this._end(n)),this._element.classList.add(JE)):(F.on(this._element,qE,n=>this._start(n)),F.on(this._element,WE,n=>this._move(n)),F.on(this._element,KE,n=>this._end(n)))}_eventIsPointerPenTouch(n){return this._supportPointerEvents&&(n.pointerType===GE||n.pointerType===XE)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const nw="carousel",rw="bs.carousel",Jn=`.${rw}`,ny=".data-api",ow="ArrowLeft",iw="ArrowRight",aw=500,gi="next",ro="prev",ao="left",hs="right",sw=`slide${Jn}`,sc=`slid${Jn}`,lw=`keydown${Jn}`,uw=`mouseenter${Jn}`,cw=`mouseleave${Jn}`,dw=`dragstart${Jn}`,fw=`load${Jn}${ny}`,pw=`click${Jn}${ny}`,ry="carousel",os="active",hw="slide",mw="carousel-item-end",gw="carousel-item-start",yw="carousel-item-next",vw="carousel-item-prev",oy=".active",iy=".carousel-item",bw=oy+iy,_w=".carousel-item img",Ew=".carousel-indicators",ww="[data-bs-slide], [data-bs-slide-to]",xw='[data-bs-ride="carousel"]',Sw={[ow]:hs,[iw]:ao},kw={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},Ow={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ii extends Jt{constructor(n,o){super(n,o),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=re.findOne(Ew,this._element),this._addEventListeners(),this._config.ride===ry&&this.cycle()}static get Default(){return kw}static get DefaultType(){return Ow}static get NAME(){return nw}next(){this._slide(gi)}nextWhenVisible(){!document.hidden&&_o(this._element)&&this.next()}prev(){this._slide(ro)}pause(){this._isSliding&&qg(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){F.one(this._element,sc,()=>this.cycle());return}this.cycle()}}to(n){const o=this._getItems();if(n>o.length-1||n<0)return;if(this._isSliding){F.one(this._element,sc,()=>this.to(n));return}const s=this._getItemIndex(this._getActive());if(s===n)return;const l=n>s?gi:ro;this._slide(l,o[n])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(n){return n.defaultInterval=n.interval,n}_addEventListeners(){this._config.keyboard&&F.on(this._element,lw,n=>this._keydown(n)),this._config.pause==="hover"&&(F.on(this._element,uw,()=>this.pause()),F.on(this._element,cw,()=>this._maybeEnableCycle())),this._config.touch&&Os.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const s of re.find(_w,this._element))F.on(s,dw,l=>l.preventDefault());const o={leftCallback:()=>this._slide(this._directionToOrder(ao)),rightCallback:()=>this._slide(this._directionToOrder(hs)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),aw+this._config.interval))}};this._swipeHelper=new Os(this._element,o)}_keydown(n){if(/input|textarea/i.test(n.target.tagName))return;const o=Sw[n.key];o&&(n.preventDefault(),this._slide(this._directionToOrder(o)))}_getItemIndex(n){return this._getItems().indexOf(n)}_setActiveIndicatorElement(n){if(!this._indicatorsElement)return;const o=re.findOne(oy,this._indicatorsElement);o.classList.remove(os),o.removeAttribute("aria-current");const s=re.findOne(`[data-bs-slide-to="${n}"]`,this._indicatorsElement);s&&(s.classList.add(os),s.setAttribute("aria-current","true"))}_updateInterval(){const n=this._activeElement||this._getActive();if(!n)return;const o=Number.parseInt(n.getAttribute("data-bs-interval"),10);this._config.interval=o||this._config.defaultInterval}_slide(n,o=null){if(this._isSliding)return;const s=this._getActive(),l=n===gi,d=o||ad(this._getItems(),s,l,this._config.wrap);if(d===s)return;const f=this._getItemIndex(d),p=N=>F.trigger(this._element,N,{relatedTarget:d,direction:this._orderToDirection(n),from:this._getItemIndex(s),to:f});if(p(sw).defaultPrevented||!s||!d)return;const y=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(f),this._activeElement=d;const m=l?gw:mw,E=l?yw:vw;d.classList.add(E),Li(d),s.classList.add(m),d.classList.add(m);const T=()=>{d.classList.remove(m,E),d.classList.add(os),s.classList.remove(os,E,m),this._isSliding=!1,p(sc)};this._queueCallback(T,s,this._isAnimated()),y&&this.cycle()}_isAnimated(){return this._element.classList.contains(hw)}_getActive(){return re.findOne(bw,this._element)}_getItems(){return re.find(iy,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(n){return zt()?n===ao?ro:gi:n===ao?gi:ro}_orderToDirection(n){return zt()?n===ro?ao:hs:n===ro?hs:ao}static jQueryInterface(n){return this.each(function(){const o=Ii.getOrCreateInstance(this,n);if(typeof n=="number"){o.to(n);return}if(typeof n=="string"){if(o[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);o[n]()}})}}F.on(document,pw,ww,function(r){const n=re.getElementFromSelector(this);if(!n||!n.classList.contains(ry))return;r.preventDefault();const o=Ii.getOrCreateInstance(n),s=this.getAttribute("data-bs-slide-to");if(s){o.to(s),o._maybeEnableCycle();return}if(En.getDataAttribute(this,"slide")==="next"){o.next(),o._maybeEnableCycle();return}o.prev(),o._maybeEnableCycle()});F.on(window,fw,()=>{const r=re.find(xw);for(const n of r)Ii.getOrCreateInstance(n)});$t(Ii);const Tw="collapse",Cw="bs.collapse",zi=`.${Cw}`,Aw=".data-api",Pw=`show${zi}`,Nw=`shown${zi}`,Dw=`hide${zi}`,Rw=`hidden${zi}`,Lw=`click${zi}${Aw}`,lc="show",lo="collapse",is="collapsing",Mw="collapsed",Iw=`:scope .${lo} .${lo}`,zw="collapse-horizontal",jw="width",$w="height",Fw=".collapse.show, .collapse.collapsing",zc='[data-bs-toggle="collapse"]',Uw={parent:null,toggle:!0},Hw={parent:"(null|element)",toggle:"boolean"};class ki extends Jt{constructor(n,o){super(n,o),this._isTransitioning=!1,this._triggerArray=[];const s=re.find(zc);for(const l of s){const d=re.getSelectorFromElement(l),f=re.find(d).filter(p=>p===this._element);d!==null&&f.length&&this._triggerArray.push(l)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Uw}static get DefaultType(){return Hw}static get NAME(){return Tw}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let n=[];if(this._config.parent&&(n=this._getFirstLevelChildren(Fw).filter(p=>p!==this._element).map(p=>ki.getOrCreateInstance(p,{toggle:!1}))),n.length&&n[0]._isTransitioning||F.trigger(this._element,Pw).defaultPrevented)return;for(const p of n)p.hide();const s=this._getDimension();this._element.classList.remove(lo),this._element.classList.add(is),this._element.style[s]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const l=()=>{this._isTransitioning=!1,this._element.classList.remove(is),this._element.classList.add(lo,lc),this._element.style[s]="",F.trigger(this._element,Nw)},f=`scroll${s[0].toUpperCase()+s.slice(1)}`;this._queueCallback(l,this._element,!0),this._element.style[s]=`${this._element[f]}px`}hide(){if(this._isTransitioning||!this._isShown()||F.trigger(this._element,Dw).defaultPrevented)return;const o=this._getDimension();this._element.style[o]=`${this._element.getBoundingClientRect()[o]}px`,Li(this._element),this._element.classList.add(is),this._element.classList.remove(lo,lc);for(const l of this._triggerArray){const d=re.getElementFromSelector(l);d&&!this._isShown(d)&&this._addAriaAndCollapsedClass([l],!1)}this._isTransitioning=!0;const s=()=>{this._isTransitioning=!1,this._element.classList.remove(is),this._element.classList.add(lo),F.trigger(this._element,Rw)};this._element.style[o]="",this._queueCallback(s,this._element,!0)}_isShown(n=this._element){return n.classList.contains(lc)}_configAfterMerge(n){return n.toggle=!!n.toggle,n.parent=Yn(n.parent),n}_getDimension(){return this._element.classList.contains(zw)?jw:$w}_initializeChildren(){if(!this._config.parent)return;const n=this._getFirstLevelChildren(zc);for(const o of n){const s=re.getElementFromSelector(o);s&&this._addAriaAndCollapsedClass([o],this._isShown(s))}}_getFirstLevelChildren(n){const o=re.find(Iw,this._config.parent);return re.find(n,this._config.parent).filter(s=>!o.includes(s))}_addAriaAndCollapsedClass(n,o){if(n.length)for(const s of n)s.classList.toggle(Mw,!o),s.setAttribute("aria-expanded",o)}static jQueryInterface(n){const o={};return typeof n=="string"&&/show|hide/.test(n)&&(o.toggle=!1),this.each(function(){const s=ki.getOrCreateInstance(this,o);if(typeof n=="string"){if(typeof s[n]>"u")throw new TypeError(`No method named "${n}"`);s[n]()}})}}F.on(document,Lw,zc,function(r){(r.target.tagName==="A"||r.delegateTarget&&r.delegateTarget.tagName==="A")&&r.preventDefault();for(const n of re.getMultipleElementsFromSelector(this))ki.getOrCreateInstance(n,{toggle:!1}).toggle()});$t(ki);const rm="dropdown",Bw="bs.dropdown",Or=`.${Bw}`,ld=".data-api",Vw="Escape",om="Tab",qw="ArrowUp",im="ArrowDown",Ww=2,Kw=`hide${Or}`,Yw=`hidden${Or}`,Qw=`show${Or}`,Xw=`shown${Or}`,ay=`click${Or}${ld}`,sy=`keydown${Or}${ld}`,Gw=`keyup${Or}${ld}`,so="show",Jw="dropup",Zw="dropend",ex="dropstart",tx="dropup-center",nx="dropdown-center",yr='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',rx=`${yr}.${so}`,ms=".dropdown-menu",ox=".navbar",ix=".navbar-nav",ax=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",sx=zt()?"top-end":"top-start",lx=zt()?"top-start":"top-end",ux=zt()?"bottom-end":"bottom-start",cx=zt()?"bottom-start":"bottom-end",dx=zt()?"left-start":"right-start",fx=zt()?"right-start":"left-start",px="top",hx="bottom",mx={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},gx={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class sn extends Jt{constructor(n,o){super(n,o),this._popper=null,this._parent=this._element.parentNode,this._menu=re.next(this._element,ms)[0]||re.prev(this._element,ms)[0]||re.findOne(ms,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return mx}static get DefaultType(){return gx}static get NAME(){return rm}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Qn(this._element)||this._isShown())return;const n={relatedTarget:this._element};if(!F.trigger(this._element,Qw,n).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(ix))for(const s of[].concat(...document.body.children))F.on(s,"mouseover",ks);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(so),this._element.classList.add(so),F.trigger(this._element,Xw,n)}}hide(){if(Qn(this._element)||!this._isShown())return;const n={relatedTarget:this._element};this._completeHide(n)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(n){if(!F.trigger(this._element,Kw,n).defaultPrevented){if("ontouchstart"in document.documentElement)for(const s of[].concat(...document.body.children))F.off(s,"mouseover",ks);this._popper&&this._popper.destroy(),this._menu.classList.remove(so),this._element.classList.remove(so),this._element.setAttribute("aria-expanded","false"),En.removeDataAttribute(this._menu,"popper"),F.trigger(this._element,Yw,n)}}_getConfig(n){if(n=super._getConfig(n),typeof n.reference=="object"&&!_n(n.reference)&&typeof n.reference.getBoundingClientRect!="function")throw new TypeError(`${rm.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return n}_createPopper(){if(typeof Bg>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let n=this._element;this._config.reference==="parent"?n=this._parent:_n(this._config.reference)?n=Yn(this._config.reference):typeof this._config.reference=="object"&&(n=this._config.reference);const o=this._getPopperConfig();this._popper=id(n,this._menu,o)}_isShown(){return this._menu.classList.contains(so)}_getPlacement(){const n=this._parent;if(n.classList.contains(Zw))return dx;if(n.classList.contains(ex))return fx;if(n.classList.contains(tx))return px;if(n.classList.contains(nx))return hx;const o=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return n.classList.contains(Jw)?o?lx:sx:o?cx:ux}_detectNavbar(){return this._element.closest(ox)!==null}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(o=>Number.parseInt(o,10)):typeof n=="function"?o=>n(o,this._element):n}_getPopperConfig(){const n={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(En.setDataAttribute(this._menu,"popper","static"),n.modifiers=[{name:"applyStyles",enabled:!1}]),{...n,...ht(this._config.popperConfig,[n])}}_selectMenuItem({key:n,target:o}){const s=re.find(ax,this._menu).filter(l=>_o(l));s.length&&ad(s,o,n===im,!s.includes(o)).focus()}static jQueryInterface(n){return this.each(function(){const o=sn.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof o[n]>"u")throw new TypeError(`No method named "${n}"`);o[n]()}})}static clearMenus(n){if(n.button===Ww||n.type==="keyup"&&n.key!==om)return;const o=re.find(rx);for(const s of o){const l=sn.getInstance(s);if(!l||l._config.autoClose===!1)continue;const d=n.composedPath(),f=d.includes(l._menu);if(d.includes(l._element)||l._config.autoClose==="inside"&&!f||l._config.autoClose==="outside"&&f||l._menu.contains(n.target)&&(n.type==="keyup"&&n.key===om||/input|select|option|textarea|form/i.test(n.target.tagName)))continue;const p={relatedTarget:l._element};n.type==="click"&&(p.clickEvent=n),l._completeHide(p)}}static dataApiKeydownHandler(n){const o=/input|textarea/i.test(n.target.tagName),s=n.key===Vw,l=[qw,im].includes(n.key);if(!l&&!s||o&&!s)return;n.preventDefault();const d=this.matches(yr)?this:re.prev(this,yr)[0]||re.next(this,yr)[0]||re.findOne(yr,n.delegateTarget.parentNode),f=sn.getOrCreateInstance(d);if(l){n.stopPropagation(),f.show(),f._selectMenuItem(n);return}f._isShown()&&(n.stopPropagation(),f.hide(),d.focus())}}F.on(document,sy,yr,sn.dataApiKeydownHandler);F.on(document,sy,ms,sn.dataApiKeydownHandler);F.on(document,ay,sn.clearMenus);F.on(document,Gw,sn.clearMenus);F.on(document,ay,yr,function(r){r.preventDefault(),sn.getOrCreateInstance(this).toggle()});$t(sn);const ly="backdrop",yx="fade",am="show",sm=`mousedown.bs.${ly}`,vx={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},bx={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class uy extends Mi{constructor(n){super(),this._config=this._getConfig(n),this._isAppended=!1,this._element=null}static get Default(){return vx}static get DefaultType(){return bx}static get NAME(){return ly}show(n){if(!this._config.isVisible){ht(n);return}this._append();const o=this._getElement();this._config.isAnimated&&Li(o),o.classList.add(am),this._emulateAnimation(()=>{ht(n)})}hide(n){if(!this._config.isVisible){ht(n);return}this._getElement().classList.remove(am),this._emulateAnimation(()=>{this.dispose(),ht(n)})}dispose(){this._isAppended&&(F.off(this._element,sm),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const n=document.createElement("div");n.className=this._config.className,this._config.isAnimated&&n.classList.add(yx),this._element=n}return this._element}_configAfterMerge(n){return n.rootElement=Yn(n.rootElement),n}_append(){if(this._isAppended)return;const n=this._getElement();this._config.rootElement.append(n),F.on(n,sm,()=>{ht(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(n){Yg(n,this._getElement(),this._config.isAnimated)}}const _x="focustrap",Ex="bs.focustrap",Ts=`.${Ex}`,wx=`focusin${Ts}`,xx=`keydown.tab${Ts}`,Sx="Tab",kx="forward",lm="backward",Ox={autofocus:!0,trapElement:null},Tx={autofocus:"boolean",trapElement:"element"};class cy extends Mi{constructor(n){super(),this._config=this._getConfig(n),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return Ox}static get DefaultType(){return Tx}static get NAME(){return _x}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),F.off(document,Ts),F.on(document,wx,n=>this._handleFocusin(n)),F.on(document,xx,n=>this._handleKeydown(n)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,F.off(document,Ts))}_handleFocusin(n){const{trapElement:o}=this._config;if(n.target===document||n.target===o||o.contains(n.target))return;const s=re.focusableChildren(o);s.length===0?o.focus():this._lastTabNavDirection===lm?s[s.length-1].focus():s[0].focus()}_handleKeydown(n){n.key===Sx&&(this._lastTabNavDirection=n.shiftKey?lm:kx)}}const um=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",cm=".sticky-top",as="padding-right",dm="margin-right";class jc{constructor(){this._element=document.body}getWidth(){const n=document.documentElement.clientWidth;return Math.abs(window.innerWidth-n)}hide(){const n=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,as,o=>o+n),this._setElementAttributes(um,as,o=>o+n),this._setElementAttributes(cm,dm,o=>o-n)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,as),this._resetElementAttributes(um,as),this._resetElementAttributes(cm,dm)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(n,o,s){const l=this.getWidth(),d=f=>{if(f!==this._element&&window.innerWidth>f.clientWidth+l)return;this._saveInitialAttribute(f,o);const p=window.getComputedStyle(f).getPropertyValue(o);f.style.setProperty(o,`${s(Number.parseFloat(p))}px`)};this._applyManipulationCallback(n,d)}_saveInitialAttribute(n,o){const s=n.style.getPropertyValue(o);s&&En.setDataAttribute(n,o,s)}_resetElementAttributes(n,o){const s=l=>{const d=En.getDataAttribute(l,o);if(d===null){l.style.removeProperty(o);return}En.removeDataAttribute(l,o),l.style.setProperty(o,d)};this._applyManipulationCallback(n,s)}_applyManipulationCallback(n,o){if(_n(n)){o(n);return}for(const s of re.find(n,this._element))o(s)}}const Cx="modal",Ax="bs.modal",jt=`.${Ax}`,Px=".data-api",Nx="Escape",Dx=`hide${jt}`,Rx=`hidePrevented${jt}`,dy=`hidden${jt}`,fy=`show${jt}`,Lx=`shown${jt}`,Mx=`resize${jt}`,Ix=`click.dismiss${jt}`,zx=`mousedown.dismiss${jt}`,jx=`keydown.dismiss${jt}`,$x=`click${jt}${Px}`,fm="modal-open",Fx="fade",pm="show",uc="modal-static",Ux=".modal.show",Hx=".modal-dialog",Bx=".modal-body",Vx='[data-bs-toggle="modal"]',qx={backdrop:!0,focus:!0,keyboard:!0},Wx={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class It extends Jt{constructor(n,o){super(n,o),this._dialog=re.findOne(Hx,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new jc,this._addEventListeners()}static get Default(){return qx}static get DefaultType(){return Wx}static get NAME(){return Cx}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){this._isShown||this._isTransitioning||F.trigger(this._element,fy,{relatedTarget:n}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(fm),this._adjustDialog(),this._backdrop.show(()=>this._showElement(n)))}hide(){!this._isShown||this._isTransitioning||F.trigger(this._element,Dx).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(pm),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){F.off(window,jt),F.off(this._dialog,jt),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new uy({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new cy({trapElement:this._element})}_showElement(n){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const o=re.findOne(Bx,this._dialog);o&&(o.scrollTop=0),Li(this._element),this._element.classList.add(pm);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,F.trigger(this._element,Lx,{relatedTarget:n})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){F.on(this._element,jx,n=>{if(n.key===Nx){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),F.on(window,Mx,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),F.on(this._element,zx,n=>{F.one(this._element,Ix,o=>{if(!(this._element!==n.target||this._element!==o.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(fm),this._resetAdjustments(),this._scrollBar.reset(),F.trigger(this._element,dy)})}_isAnimated(){return this._element.classList.contains(Fx)}_triggerBackdropTransition(){if(F.trigger(this._element,Rx).defaultPrevented)return;const o=this._element.scrollHeight>document.documentElement.clientHeight,s=this._element.style.overflowY;s==="hidden"||this._element.classList.contains(uc)||(o||(this._element.style.overflowY="hidden"),this._element.classList.add(uc),this._queueCallback(()=>{this._element.classList.remove(uc),this._queueCallback(()=>{this._element.style.overflowY=s},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const n=this._element.scrollHeight>document.documentElement.clientHeight,o=this._scrollBar.getWidth(),s=o>0;if(s&&!n){const l=zt()?"paddingLeft":"paddingRight";this._element.style[l]=`${o}px`}if(!s&&n){const l=zt()?"paddingRight":"paddingLeft";this._element.style[l]=`${o}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(n,o){return this.each(function(){const s=It.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof s[n]>"u")throw new TypeError(`No method named "${n}"`);s[n](o)}})}}F.on(document,$x,Vx,function(r){const n=re.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&r.preventDefault(),F.one(n,fy,l=>{l.defaultPrevented||F.one(n,dy,()=>{_o(this)&&this.focus()})});const o=re.findOne(Ux);o&&It.getInstance(o).hide(),It.getOrCreateInstance(n).toggle(this)});Vs(It);$t(It);const Kx="offcanvas",Yx="bs.offcanvas",Sn=`.${Yx}`,py=".data-api",Qx=`load${Sn}${py}`,Xx="Escape",hm="show",mm="showing",gm="hiding",Gx="offcanvas-backdrop",hy=".offcanvas.show",Jx=`show${Sn}`,Zx=`shown${Sn}`,eS=`hide${Sn}`,ym=`hidePrevented${Sn}`,my=`hidden${Sn}`,tS=`resize${Sn}`,nS=`click${Sn}${py}`,rS=`keydown.dismiss${Sn}`,oS='[data-bs-toggle="offcanvas"]',iS={backdrop:!0,keyboard:!0,scroll:!1},aS={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Xn extends Jt{constructor(n,o){super(n,o),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return iS}static get DefaultType(){return aS}static get NAME(){return Kx}toggle(n){return this._isShown?this.hide():this.show(n)}show(n){if(this._isShown||F.trigger(this._element,Jx,{relatedTarget:n}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new jc().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(mm);const s=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(hm),this._element.classList.remove(mm),F.trigger(this._element,Zx,{relatedTarget:n})};this._queueCallback(s,this._element,!0)}hide(){if(!this._isShown||F.trigger(this._element,eS).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(gm),this._backdrop.hide();const o=()=>{this._element.classList.remove(hm,gm),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new jc().reset(),F.trigger(this._element,my)};this._queueCallback(o,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const n=()=>{if(this._config.backdrop==="static"){F.trigger(this._element,ym);return}this.hide()},o=!!this._config.backdrop;return new uy({className:Gx,isVisible:o,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:o?n:null})}_initializeFocusTrap(){return new cy({trapElement:this._element})}_addEventListeners(){F.on(this._element,rS,n=>{if(n.key===Xx){if(this._config.keyboard){this.hide();return}F.trigger(this._element,ym)}})}static jQueryInterface(n){return this.each(function(){const o=Xn.getOrCreateInstance(this,n);if(typeof n=="string"){if(o[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);o[n](this)}})}}F.on(document,nS,oS,function(r){const n=re.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&r.preventDefault(),Qn(this))return;F.one(n,my,()=>{_o(this)&&this.focus()});const o=re.findOne(hy);o&&o!==n&&Xn.getInstance(o).hide(),Xn.getOrCreateInstance(n).toggle(this)});F.on(window,Qx,()=>{for(const r of re.find(hy))Xn.getOrCreateInstance(r).show()});F.on(window,tS,()=>{for(const r of re.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(r).position!=="fixed"&&Xn.getOrCreateInstance(r).hide()});Vs(Xn);$t(Xn);const sS=/^aria-[\w-]*$/i,gy={"*":["class","dir","id","lang","role",sS],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},lS=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),uS=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,cS=(r,n)=>{const o=r.nodeName.toLowerCase();return n.includes(o)?lS.has(o)?!!uS.test(r.nodeValue):!0:n.filter(s=>s instanceof RegExp).some(s=>s.test(o))};function dS(r,n,o){if(!r.length)return r;if(o&&typeof o=="function")return o(r);const l=new window.DOMParser().parseFromString(r,"text/html"),d=[].concat(...l.body.querySelectorAll("*"));for(const f of d){const p=f.nodeName.toLowerCase();if(!Object.keys(n).includes(p)){f.remove();continue}const g=[].concat(...f.attributes),y=[].concat(n["*"]||[],n[p]||[]);for(const m of g)cS(m,y)||f.removeAttribute(m.nodeName)}return l.body.innerHTML}const fS="TemplateFactory",pS={allowList:gy,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},hS={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},mS={entry:"(string|element|function|null)",selector:"(string|element)"};class gS extends Mi{constructor(n){super(),this._config=this._getConfig(n)}static get Default(){return pS}static get DefaultType(){return hS}static get NAME(){return fS}getContent(){return Object.values(this._config.content).map(n=>this._resolvePossibleFunction(n)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(n){return this._checkContent(n),this._config.content={...this._config.content,...n},this}toHtml(){const n=document.createElement("div");n.innerHTML=this._maybeSanitize(this._config.template);for(const[l,d]of Object.entries(this._config.content))this._setContent(n,d,l);const o=n.children[0],s=this._resolvePossibleFunction(this._config.extraClass);return s&&o.classList.add(...s.split(" ")),o}_typeCheckConfig(n){super._typeCheckConfig(n),this._checkContent(n.content)}_checkContent(n){for(const[o,s]of Object.entries(n))super._typeCheckConfig({selector:o,entry:s},mS)}_setContent(n,o,s){const l=re.findOne(s,n);if(l){if(o=this._resolvePossibleFunction(o),!o){l.remove();return}if(_n(o)){this._putElementInTemplate(Yn(o),l);return}if(this._config.html){l.innerHTML=this._maybeSanitize(o);return}l.textContent=o}}_maybeSanitize(n){return this._config.sanitize?dS(n,this._config.allowList,this._config.sanitizeFn):n}_resolvePossibleFunction(n){return ht(n,[this])}_putElementInTemplate(n,o){if(this._config.html){o.innerHTML="",o.append(n);return}o.textContent=n.textContent}}const yS="tooltip",vS=new Set(["sanitize","allowList","sanitizeFn"]),cc="fade",bS="modal",ss="show",_S=".tooltip-inner",vm=`.${bS}`,bm="hide.bs.modal",yi="hover",dc="focus",ES="click",wS="manual",xS="hide",SS="hidden",kS="show",OS="shown",TS="inserted",CS="click",AS="focusin",PS="focusout",NS="mouseenter",DS="mouseleave",RS={AUTO:"auto",TOP:"top",RIGHT:zt()?"left":"right",BOTTOM:"bottom",LEFT:zt()?"right":"left"},LS={allowList:gy,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},MS={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class wo extends Jt{constructor(n,o){if(typeof Bg>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(n,o),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return LS}static get DefaultType(){return MS}static get NAME(){return yS}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),F.off(this._element.closest(vm),bm,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const n=F.trigger(this._element,this.constructor.eventName(kS)),s=(Wg(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(n.defaultPrevented||!s)return;this._disposePopper();const l=this._getTipElement();this._element.setAttribute("aria-describedby",l.getAttribute("id"));const{container:d}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(d.append(l),F.trigger(this._element,this.constructor.eventName(TS))),this._popper=this._createPopper(l),l.classList.add(ss),"ontouchstart"in document.documentElement)for(const p of[].concat(...document.body.children))F.on(p,"mouseover",ks);const f=()=>{F.trigger(this._element,this.constructor.eventName(OS)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(f,this.tip,this._isAnimated())}hide(){if(!this._isShown()||F.trigger(this._element,this.constructor.eventName(xS)).defaultPrevented)return;if(this._getTipElement().classList.remove(ss),"ontouchstart"in document.documentElement)for(const l of[].concat(...document.body.children))F.off(l,"mouseover",ks);this._activeTrigger[ES]=!1,this._activeTrigger[dc]=!1,this._activeTrigger[yi]=!1,this._isHovered=null;const s=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),F.trigger(this._element,this.constructor.eventName(SS)))};this._queueCallback(s,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(n){const o=this._getTemplateFactory(n).toHtml();if(!o)return null;o.classList.remove(cc,ss),o.classList.add(`bs-${this.constructor.NAME}-auto`);const s=EE(this.constructor.NAME).toString();return o.setAttribute("id",s),this._isAnimated()&&o.classList.add(cc),o}setContent(n){this._newContent=n,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(n){return this._templateFactory?this._templateFactory.changeContent(n):this._templateFactory=new gS({...this._config,content:n,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[_S]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(n){return this.constructor.getOrCreateInstance(n.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(cc)}_isShown(){return this.tip&&this.tip.classList.contains(ss)}_createPopper(n){const o=ht(this._config.placement,[this,n,this._element]),s=RS[o.toUpperCase()];return id(this._element,n,this._getPopperConfig(s))}_getOffset(){const{offset:n}=this._config;return typeof n=="string"?n.split(",").map(o=>Number.parseInt(o,10)):typeof n=="function"?o=>n(o,this._element):n}_resolvePossibleFunction(n){return ht(n,[this._element])}_getPopperConfig(n){const o={placement:n,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:s=>{this._getTipElement().setAttribute("data-popper-placement",s.state.placement)}}]};return{...o,...ht(this._config.popperConfig,[o])}}_setListeners(){const n=this._config.trigger.split(" ");for(const o of n)if(o==="click")F.on(this._element,this.constructor.eventName(CS),this._config.selector,s=>{this._initializeOnDelegatedTarget(s).toggle()});else if(o!==wS){const s=o===yi?this.constructor.eventName(NS):this.constructor.eventName(AS),l=o===yi?this.constructor.eventName(DS):this.constructor.eventName(PS);F.on(this._element,s,this._config.selector,d=>{const f=this._initializeOnDelegatedTarget(d);f._activeTrigger[d.type==="focusin"?dc:yi]=!0,f._enter()}),F.on(this._element,l,this._config.selector,d=>{const f=this._initializeOnDelegatedTarget(d);f._activeTrigger[d.type==="focusout"?dc:yi]=f._element.contains(d.relatedTarget),f._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},F.on(this._element.closest(vm),bm,this._hideModalHandler)}_fixTitle(){const n=this._element.getAttribute("title");n&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",n),this._element.setAttribute("data-bs-original-title",n),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(n,o){clearTimeout(this._timeout),this._timeout=setTimeout(n,o)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(n){const o=En.getDataAttributes(this._element);for(const s of Object.keys(o))vS.has(s)&&delete o[s];return n={...o,...typeof n=="object"&&n?n:{}},n=this._mergeConfigObj(n),n=this._configAfterMerge(n),this._typeCheckConfig(n),n}_configAfterMerge(n){return n.container=n.container===!1?document.body:Yn(n.container),typeof n.delay=="number"&&(n.delay={show:n.delay,hide:n.delay}),typeof n.title=="number"&&(n.title=n.title.toString()),typeof n.content=="number"&&(n.content=n.content.toString()),n}_getDelegateConfig(){const n={};for(const[o,s]of Object.entries(this._config))this.constructor.Default[o]!==s&&(n[o]=s);return n.selector=!1,n.trigger="manual",n}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(n){return this.each(function(){const o=wo.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof o[n]>"u")throw new TypeError(`No method named "${n}"`);o[n]()}})}}$t(wo);const IS="popover",zS=".popover-header",jS=".popover-body",$S={...wo.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},FS={...wo.DefaultType,content:"(null|string|element|function)"};class ud extends wo{static get Default(){return $S}static get DefaultType(){return FS}static get NAME(){return IS}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[zS]:this._getTitle(),[jS]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(n){return this.each(function(){const o=ud.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof o[n]>"u")throw new TypeError(`No method named "${n}"`);o[n]()}})}}$t(ud);const US="scrollspy",HS="bs.scrollspy",cd=`.${HS}`,BS=".data-api",VS=`activate${cd}`,_m=`click${cd}`,qS=`load${cd}${BS}`,WS="dropdown-item",oo="active",KS='[data-bs-spy="scroll"]',fc="[href]",YS=".nav, .list-group",Em=".nav-link",QS=".nav-item",XS=".list-group-item",GS=`${Em}, ${QS} > ${Em}, ${XS}`,JS=".dropdown",ZS=".dropdown-toggle",ek={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},tk={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class Ks extends Jt{constructor(n,o){super(n,o),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return ek}static get DefaultType(){return tk}static get NAME(){return US}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const n of this._observableSections.values())this._observer.observe(n)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(n){return n.target=Yn(n.target)||document.body,n.rootMargin=n.offset?`${n.offset}px 0px -30%`:n.rootMargin,typeof n.threshold=="string"&&(n.threshold=n.threshold.split(",").map(o=>Number.parseFloat(o))),n}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(F.off(this._config.target,_m),F.on(this._config.target,_m,fc,n=>{const o=this._observableSections.get(n.target.hash);if(o){n.preventDefault();const s=this._rootElement||window,l=o.offsetTop-this._element.offsetTop;if(s.scrollTo){s.scrollTo({top:l,behavior:"smooth"});return}s.scrollTop=l}}))}_getNewObserver(){const n={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(o=>this._observerCallback(o),n)}_observerCallback(n){const o=f=>this._targetLinks.get(`#${f.target.id}`),s=f=>{this._previousScrollData.visibleEntryTop=f.target.offsetTop,this._process(o(f))},l=(this._rootElement||document.documentElement).scrollTop,d=l>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=l;for(const f of n){if(!f.isIntersecting){this._activeTarget=null,this._clearActiveClass(o(f));continue}const p=f.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(d&&p){if(s(f),!l)return;continue}!d&&!p&&s(f)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const n=re.find(fc,this._config.target);for(const o of n){if(!o.hash||Qn(o))continue;const s=re.findOne(decodeURI(o.hash),this._element);_o(s)&&(this._targetLinks.set(decodeURI(o.hash),o),this._observableSections.set(o.hash,s))}}_process(n){this._activeTarget!==n&&(this._clearActiveClass(this._config.target),this._activeTarget=n,n.classList.add(oo),this._activateParents(n),F.trigger(this._element,VS,{relatedTarget:n}))}_activateParents(n){if(n.classList.contains(WS)){re.findOne(ZS,n.closest(JS)).classList.add(oo);return}for(const o of re.parents(n,YS))for(const s of re.prev(o,GS))s.classList.add(oo)}_clearActiveClass(n){n.classList.remove(oo);const o=re.find(`${fc}.${oo}`,n);for(const s of o)s.classList.remove(oo)}static jQueryInterface(n){return this.each(function(){const o=Ks.getOrCreateInstance(this,n);if(typeof n=="string"){if(o[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);o[n]()}})}}F.on(window,qS,()=>{for(const r of re.find(KS))Ks.getOrCreateInstance(r)});$t(Ks);const nk="tab",rk="bs.tab",Tr=`.${rk}`,ok=`hide${Tr}`,ik=`hidden${Tr}`,ak=`show${Tr}`,sk=`shown${Tr}`,lk=`click${Tr}`,uk=`keydown${Tr}`,ck=`load${Tr}`,dk="ArrowLeft",wm="ArrowRight",fk="ArrowUp",xm="ArrowDown",pc="Home",Sm="End",vr="active",km="fade",hc="show",pk="dropdown",yy=".dropdown-toggle",hk=".dropdown-menu",mc=`:not(${yy})`,mk='.list-group, .nav, [role="tablist"]',gk=".nav-item, .list-group-item",yk=`.nav-link${mc}, .list-group-item${mc}, [role="tab"]${mc}`,vy='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',gc=`${yk}, ${vy}`,vk=`.${vr}[data-bs-toggle="tab"], .${vr}[data-bs-toggle="pill"], .${vr}[data-bs-toggle="list"]`;class go extends Jt{constructor(n){super(n),this._parent=this._element.closest(mk),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),F.on(this._element,uk,o=>this._keydown(o)))}static get NAME(){return nk}show(){const n=this._element;if(this._elemIsActive(n))return;const o=this._getActiveElem(),s=o?F.trigger(o,ok,{relatedTarget:n}):null;F.trigger(n,ak,{relatedTarget:o}).defaultPrevented||s&&s.defaultPrevented||(this._deactivate(o,n),this._activate(n,o))}_activate(n,o){if(!n)return;n.classList.add(vr),this._activate(re.getElementFromSelector(n));const s=()=>{if(n.getAttribute("role")!=="tab"){n.classList.add(hc);return}n.removeAttribute("tabindex"),n.setAttribute("aria-selected",!0),this._toggleDropDown(n,!0),F.trigger(n,sk,{relatedTarget:o})};this._queueCallback(s,n,n.classList.contains(km))}_deactivate(n,o){if(!n)return;n.classList.remove(vr),n.blur(),this._deactivate(re.getElementFromSelector(n));const s=()=>{if(n.getAttribute("role")!=="tab"){n.classList.remove(hc);return}n.setAttribute("aria-selected",!1),n.setAttribute("tabindex","-1"),this._toggleDropDown(n,!1),F.trigger(n,ik,{relatedTarget:o})};this._queueCallback(s,n,n.classList.contains(km))}_keydown(n){if(![dk,wm,fk,xm,pc,Sm].includes(n.key))return;n.stopPropagation(),n.preventDefault();const o=this._getChildren().filter(l=>!Qn(l));let s;if([pc,Sm].includes(n.key))s=o[n.key===pc?0:o.length-1];else{const l=[wm,xm].includes(n.key);s=ad(o,n.target,l,!0)}s&&(s.focus({preventScroll:!0}),go.getOrCreateInstance(s).show())}_getChildren(){return re.find(gc,this._parent)}_getActiveElem(){return this._getChildren().find(n=>this._elemIsActive(n))||null}_setInitialAttributes(n,o){this._setAttributeIfNotExists(n,"role","tablist");for(const s of o)this._setInitialAttributesOnChild(s)}_setInitialAttributesOnChild(n){n=this._getInnerElement(n);const o=this._elemIsActive(n),s=this._getOuterElement(n);n.setAttribute("aria-selected",o),s!==n&&this._setAttributeIfNotExists(s,"role","presentation"),o||n.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(n,"role","tab"),this._setInitialAttributesOnTargetPanel(n)}_setInitialAttributesOnTargetPanel(n){const o=re.getElementFromSelector(n);o&&(this._setAttributeIfNotExists(o,"role","tabpanel"),n.id&&this._setAttributeIfNotExists(o,"aria-labelledby",`${n.id}`))}_toggleDropDown(n,o){const s=this._getOuterElement(n);if(!s.classList.contains(pk))return;const l=(d,f)=>{const p=re.findOne(d,s);p&&p.classList.toggle(f,o)};l(yy,vr),l(hk,hc),s.setAttribute("aria-expanded",o)}_setAttributeIfNotExists(n,o,s){n.hasAttribute(o)||n.setAttribute(o,s)}_elemIsActive(n){return n.classList.contains(vr)}_getInnerElement(n){return n.matches(gc)?n:re.findOne(gc,n)}_getOuterElement(n){return n.closest(gk)||n}static jQueryInterface(n){return this.each(function(){const o=go.getOrCreateInstance(this);if(typeof n=="string"){if(o[n]===void 0||n.startsWith("_")||n==="constructor")throw new TypeError(`No method named "${n}"`);o[n]()}})}}F.on(document,lk,vy,function(r){["A","AREA"].includes(this.tagName)&&r.preventDefault(),!Qn(this)&&go.getOrCreateInstance(this).show()});F.on(window,ck,()=>{for(const r of re.find(vk))go.getOrCreateInstance(r)});$t(go);const bk="toast",_k="bs.toast",Zn=`.${_k}`,Ek=`mouseover${Zn}`,wk=`mouseout${Zn}`,xk=`focusin${Zn}`,Sk=`focusout${Zn}`,kk=`hide${Zn}`,Ok=`hidden${Zn}`,Tk=`show${Zn}`,Ck=`shown${Zn}`,Ak="fade",Om="hide",ls="show",us="showing",Pk={animation:"boolean",autohide:"boolean",delay:"number"},Nk={animation:!0,autohide:!0,delay:5e3};let Cs=class by extends Jt{constructor(n,o){super(n,o),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return Nk}static get DefaultType(){return Pk}static get NAME(){return bk}show(){if(F.trigger(this._element,Tk).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(Ak);const o=()=>{this._element.classList.remove(us),F.trigger(this._element,Ck),this._maybeScheduleHide()};this._element.classList.remove(Om),Li(this._element),this._element.classList.add(ls,us),this._queueCallback(o,this._element,this._config.animation)}hide(){if(!this.isShown()||F.trigger(this._element,kk).defaultPrevented)return;const o=()=>{this._element.classList.add(Om),this._element.classList.remove(us,ls),F.trigger(this._element,Ok)};this._element.classList.add(us),this._queueCallback(o,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(ls),super.dispose()}isShown(){return this._element.classList.contains(ls)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(n,o){switch(n.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=o;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=o;break}}if(o){this._clearTimeout();return}const s=n.relatedTarget;this._element===s||this._element.contains(s)||this._maybeScheduleHide()}_setListeners(){F.on(this._element,Ek,n=>this._onInteraction(n,!0)),F.on(this._element,wk,n=>this._onInteraction(n,!1)),F.on(this._element,xk,n=>this._onInteraction(n,!0)),F.on(this._element,Sk,n=>this._onInteraction(n,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(n){return this.each(function(){const o=by.getOrCreateInstance(this,n);if(typeof n=="string"){if(typeof o[n]>"u")throw new TypeError(`No method named "${n}"`);o[n](this)}})}};Vs(Cs);$t(Cs);const yc="https://ec-course-api.hexschool.io/v2",vc="companions-choice-product",_y=({modalMode:r,tempProduct:n,isOpen:o,setIsOpen:s,getProducts:l,pageInfo:d})=>{var R,B,W,te,se;const f=Ci(),[p,g]=ge.useState(n);ge.useEffect(()=>{g({...n})},[n]);const y=ge.useRef(null),m=ge.useRef(null);ge.useEffect(()=>{new It(y.current,{backdrop:!1})},[]),ge.useEffect(()=>{var J;o&&(It.getInstance(y.current).show(),(J=m.current)==null||J.focus())},[o]);const E=()=>{It.getInstance(y.current).hide(),s(!1)},T=J=>{const{name:le,value:ye,type:ve,checked:Pe}=J.target;g({...p,[le]:ve==="checkbox"?Pe:ye})},N=(J,le)=>{const{value:ye}=J.target,ve=p!=null&&p.imagesUrl?[...p.imagesUrl]:[""];ve[le]=ye,g({...p,imagesUrl:ve})},w=()=>{const J=[...p.imagesUrl,""];g({...p,imagesUrl:J})},b=()=>{const J=[...p.imagesUrl];J.pop(),g({...p,imagesUrl:J})},S=async()=>{const J=Number(p.discountPercent);if(isNaN(J)){alert("折扣必須是有效數字");return}if(J<0||J>99){alert("折扣必須介於 0-99 之間");return}try{await ke.post(`${yc}/api/${vc}/admin/product/`,{data:{...p,origin_price:Number(p.origin_price),price:Number(p.price),is_enabled:p.is_enabled?1:0,discountPercent:J}}),f(Lt({text:"新增產品成功!!",status:"success"})),E()}catch(le){const{message:ye}=le.response.data;f(Lt({text:ye,status:"failure"}))}},I=async()=>{const J=Number(p.discountPercent);if(isNaN(J)){alert("折扣必須是有效數字");return}if(J<0||J>99){alert("折扣必須介於 0-99 之間");return}try{await ke.put(`${yc}/api/${vc}/admin/product/${p.id}`,{data:{...p,origin_price:Number(p.origin_price),price:Number(p.price),is_enabled:p.is_enabled?1:0,imagesUrl:Array.isArray(p==null?void 0:p.imagesUrl)?p.imagesUrl:[],discountPercent:Number(p.discountPercent)}}),f(Lt({text:"更新產品成功!!",status:"success"})),E()}catch(le){const{message:ye}=le.response.data;f(Lt({text:ye,status:"failure"}))}},H=async()=>{const J=r==="new"?S:I;try{await J(),await l(d.current_page)}catch(le){const{message:ye}=le.response.data;f(Lt({text:ye,status:"failure"}))}},L=ge.useRef(null),z=async J=>{var ve;const le=J.target.files[0],ye=new FormData;ye.append("file-to-upload",le);try{const Pe=await ke.post(`${yc}/api/${vc}/admin/upload`,ye),je=(ve=Pe==null?void 0:Pe.data)==null?void 0:ve.imageUrl;g({...p,imageUrl:je})}catch(Pe){const{message:je}=Pe.response.data;f(Lt({text:je,status:"failure"}))}finally{L.current&&(L.current.value="")}};return A.jsx(A.Fragment,{children:A.jsx("div",{ref:y,id:"productModal",className:"modal fade",role:"dialog","aria-labelledby":"productModalLabel","aria-hidden":!o,style:{backgroundColor:"rgba(0,0,0,0.5)"},children:A.jsx("div",{className:"modal-dialog modal-xl",children:A.jsxs("div",{className:"modal-content border-0 shadow",children:[A.jsxs("div",{className:"modal-header text-white bg-primary",children:[A.jsx("h5",{className:"modal-title fs-4 fw-bold",children:r==="new"?"新增產品":"編輯產品"}),A.jsx("button",{onClick:()=>E(),type:"button",className:"btn-close","aria-label":"Close"})]}),A.jsx("div",{className:"modal-body text-start",children:A.jsxs("div",{className:"row",children:[A.jsxs("div",{className:"col-md-4",children:[A.jsxs("div",{className:"mb-5",children:[A.jsx("label",{htmlFor:"fileInput",className:"form-label",children:"圖片上傳"}),A.jsx("input",{onChange:z,type:"file",accept:".jpg,.jpeg,.png",className:"form-control",id:"fileInput",ref:L})]}),A.jsxs("div",{className:"mb-2",children:[A.jsxs("div",{className:"mb-3",children:[A.jsx("label",{htmlFor:"imageUrl",className:"form-label",children:"主圖"}),A.jsx("input",{onChange:T,value:p.imageUrl||"",name:"imageUrl",type:"text",className:"form-control",placeholder:"請輸入圖片連結"})]}),A.jsx("img",{className:"img-fluid",src:p.imageUrl||"",alt:p.title})]}),A.jsxs("div",{className:"border border-2 border-dashed rounder-3 p-3",children:[(R=p.imagesUrl)==null?void 0:R.map((J,le)=>A.jsxs("div",{className:"mb-2",children:[A.jsxs("label",{htmlFor:`imagesUrl-${le+1}`,className:"form-label",children:["副圖",le+1]}),A.jsx("input",{onChange:ye=>N(ye,le),value:J||"",id:`imagesUrl-${le+1}`,type:"text",placeholder:`圖片網址-${le+1}`,className:"form-control mb-2"}),J&&A.jsx("img",{className:"img-fluid mb-2",src:J,alt:`副圖 ${le+1}`})]},le)),A.jsxs("div",{className:"btn-group w-100",children:[((B=p==null?void 0:p.imagesUrl)==null?void 0:B.length)<5&&(p==null?void 0:p.imagesUrl[((W=p==null?void 0:p.imagesUrl)==null?void 0:W.length)-1])!==""&&(p==null?void 0:p.imagesUrl[(te=p==null?void 0:p.imagesUrl)==null?void 0:te.length])!=="undefined"&&A.jsx("button",{onClick:w,className:"btn btn-outline-primary btn-sm w-100",children:"新增圖片"}),((se=p==null?void 0:p.imagesUrl)==null?void 0:se.length)>1&&A.jsx("button",{onClick:b,className:"btn btn-outline-danger btn-sm w-100",children:"取消圖片"})]})]})]}),A.jsxs("div",{className:"col-md-8",children:[A.jsxs("div",{className:"mb-3",children:[A.jsx("label",{htmlFor:"title",className:"form-label",children:"標題"}),A.jsx("input",{onChange:T,value:p.title||"",name:"title",id:"title",type:"text",className:"form-control",placeholder:"請輸入標題"})]}),A.jsxs("div",{className:"row",children:[A.jsxs("div",{className:"mb-3 col-md-6",children:[A.jsx("label",{htmlFor:"category",className:"form-label",children:"分類"}),A.jsx("input",{onChange:T,value:p.category||"",name:"category",id:"category",type:"text",className:"form-control",placeholder:"請輸入分類"})]}),A.jsxs("div",{className:"mb-3 col-md-6",children:[A.jsx("label",{htmlFor:"unit",className:"form-label",children:"單位"}),A.jsx("input",{onChange:T,value:p.unit||"",name:"unit",id:"unit",type:"text",className:"form-control",placeholder:"請輸入單位"})]})]}),A.jsxs("div",{className:"row",children:[A.jsxs("div",{className:"mb-3 col-md-6",children:[A.jsx("label",{htmlFor:"origin_price",className:"form-label",children:"原價"}),A.jsx("input",{onChange:T,value:p.origin_price||0,name:"origin_price",id:"origin_price",type:"number",min:"0",className:"form-control",placeholder:"請輸入原價"})]}),A.jsxs("div",{className:"mb-3 col-md-6",children:[A.jsx("label",{htmlFor:"price",className:"form-label",children:"售價"}),A.jsx("input",{onChange:T,value:p.price||0,name:"price",id:"price",type:"number",min:"0",className:"form-control",placeholder:"請輸入售價"})]})]}),A.jsx("div",{className:"row",children:A.jsxs("div",{className:"mb-3 col-md-6",children:[A.jsxs("label",{htmlFor:"discountPercent",className:"form-label",children:["限時折扣 ",A.jsx("small",{className:"text-danger",children:"(請輸入0-99)"})]}),A.jsx("input",{onChange:T,value:p.discountPercent||0,name:"discountPercent",id:"discountPercent",type:"number",min:"0",max:"99",step:"1",className:"form-control",placeholder:"請輸入限時折扣"})]})}),A.jsx("hr",{}),A.jsxs("div",{className:"mb-3",children:[A.jsx("label",{htmlFor:"description",className:"form-label",children:"產品描述"}),A.jsx("textarea",{onChange:T,value:p.description||"",name:"description",id:"description",className:"form-control",placeholder:"請輸入產品描述"})]}),A.jsxs("div",{className:"mb-3",children:[A.jsx("label",{htmlFor:"content",className:"form-label",children:"說明內容"}),A.jsx("textarea",{onChange:T,value:p.content||"",name:"content",id:"content",className:"form-control",placeholder:"請輸入說明內容"})]}),A.jsx("div",{className:"mb-3",children:A.jsxs("div",{className:"form-check",children:[A.jsx("input",{onChange:T,checked:p.is_enabled||0,name:"is_enabled",id:"is_enabled",className:"form-check-input",type:"checkbox"}),A.jsx("label",{className:"form-check-label",htmlFor:"is_enabled",children:"是否啟用"})]})})]})]})}),A.jsxs("div",{className:"modal-footer",children:[A.jsx("button",{ref:m,onClick:()=>E(),type:"button",className:"btn btn-outline-secondary","aria-label":"Close",children:"取消"}),A.jsx("button",{onClick:H,type:"button",className:"btn btn-primary",children:"確認"})]})]})})})})};_y.propTypes={modalMode:ae.oneOfType([ae.string,ae.oneOf([null])]),tempProduct:ae.shape({category:ae.string,content:ae.string,description:ae.string,unit:ae.string,title:ae.string,imageUrl:ae.string,price:ae.oneOfType([ae.string,ae.number]),origin_price:ae.oneOfType([ae.string,ae.number]),num:ae.number,imagesUrl:ae.arrayOf(ae.string)}).isRequired,isOpen:ae.bool,setIsOpen:ae.func,getProducts:ae.func.isRequired,pageInfo:ae.object.isRequired};const Dk="https://ec-course-api.hexschool.io/v2",Rk="companions-choice-product",Ey=({tempProduct:r,getProducts:n,isOpen:o,setIsOpen:s})=>{const l=Ci(),d=ge.useRef(null);ge.useEffect(()=>{new It(d.current,{backdrop:!1})},[]),ge.useEffect(()=>{o&&It.getInstance(d.current).show()},[o]);const f=async()=>{try{await ke.delete(`${Dk}/api/${Rk}/admin/product/${r.id}`,{data:{...r,origin_price:Number(r.origin_price),price:Number(r.price),is_enabled:r.is_enabled?1:0,imagesUrl:Array.isArray(r==null?void 0:r.imagesUrl)?r.imagesUrl:[]}}),l(Lt({text:"產品成功刪除",status:"success"}))}catch(y){const{message:m}=y.response.data;l(Lt({text:m,status:"failure"}))}},p=async()=>{try{await f(),n(),g()}catch(y){const{message:m}=y.response.data;l(Lt({text:m,status:"failure"}))}},g=()=>{It.getInstance(d.current).hide(),s(!1)};return A.jsx(A.Fragment,{children:A.jsx("div",{ref:d,className:"modal fade",id:"delProductModal",tabIndex:"-1",style:{backgroundColor:"rgba(0,0,0,0.5)"},children:A.jsx("div",{className:"modal-dialog",children:A.jsxs("div",{className:"modal-content",children:[A.jsxs("div",{className:"modal-header",children:[A.jsx("h1",{className:"modal-title fs-5",children:"刪除產品"}),A.jsx("button",{onClick:g,type:"button",className:"btn-close","aria-label":"Close"})]}),A.jsxs("div",{className:"modal-body",children:["你是否要刪除",A.jsx("span",{className:"text-danger fw-bold",children:r.title})]}),A.jsxs("div",{className:"modal-footer",children:[A.jsx("button",{onClick:g,type:"button",className:"btn btn-secondary",children:"取消"}),A.jsx("button",{onClick:p,type:"button",className:"btn btn-danger",children:"刪除"})]})]})})})})};Ey.propTypes={tempProduct:ae.shape({id:ae.string,category:ae.string,content:ae.string,description:ae.string,title:ae.string,unit:ae.string,num:ae.number,price:ae.oneOfType([ae.string,ae.number]),origin_price:ae.oneOfType([ae.string,ae.number]),is_enabled:ae.number,imageUrl:ae.string,imagesUrl:ae.array}),getProducts:ae.func.isRequired,isOpen:ae.bool.isRequired,setIsOpen:ae.func.isRequired};const Lk=()=>{const r=k1(l=>l.toast.messages),n=Ci(),o=ge.useRef([]);ge.useEffect(()=>{r.forEach(l=>{const d=o.current[l.id];if(d){const f=new Cs(d);setTimeout(()=>{f.show()},300),setTimeout(()=>{n(zh(l.id))},3e3)}})},[r,n]);const s=l=>{const d=o.current[l];d&&(Cs.getInstance(d).hide(),setTimeout(()=>{n(zh(l))},3e3))};return A.jsx("div",{className:"position-fixed top-0 end-0 p-3",style:{zIndex:9999},children:r.map(l=>A.jsxs("div",{ref:d=>o.current[l.id]=d,className:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",children:[A.jsxs("div",{className:`toast-header ${l.status==="success"?"bg-success":"bg-danger"} text-white`,children:[A.jsx("strong",{className:"me-auto",children:l.status==="success"?"成功":"失敗"}),A.jsx("button",{type:"button",className:"btn-close","aria-label":"Close",onClick:()=>s(l.id)})]}),A.jsx("div",{className:"toast-body",children:l.text})]},l.id))})},Mk={imageUrl:"",title:"",category:"",unit:"",origin_price:"",price:"",description:"",content:"",is_enabled:0,imagesUrl:[""],discountPercent:""},Tm="https://ec-course-api.hexschool.io/v2",Ik="companions-choice-product",wy=({setIsAuth:r})=>{const n=Ci(),[o,s]=ge.useState([]),[l,d]=ge.useState(null),[f,p]=ge.useState({}),[g,y]=ge.useState(!1),[m,E]=ge.useState(!1),[T,N]=ge.useState(!1),w=async(R=1)=>{N(!0);try{const B=await ke.get(`${Tm}/api/${Ik}/admin/products?page=${R}`),W=B.data.products;s(Array.isArray(W)?W:[]),H(B.data.pagination)}catch(B){const{message:W}=B.response.data;n(Lt({text:W,status:"failure"})),s([])}finally{N(!1)}};ge.useEffect(()=>{w()},[]);const b=(R,B)=>{d(R==="new"?"new":"edit"),p(R==="new"?{...Mk}:{...B}),y(!0)},S=R=>{if(!R){console.error("Invalid product passed to handleOpenDeleteModal");return}p(R),E(!0)},[I,H]=ge.useState({}),L=(R,B)=>{R.preventDefault(),w(B)},z=async()=>{N(!0);try{const R=await ke.post(`${Tm}/logout`,{});console.log(R.data),ke.defaults.headers.common.Authorization=null,r(!1)}catch(R){console.log(R)}finally{N(!1)}};return A.jsxs(A.Fragment,{children:[A.jsxs("div",{className:"container",children:[A.jsxs("div",{className:"d-flex justify-content-end align-items-center mt-4",children:[A.jsx("button",{onClick:()=>z(),className:"btn btn-danger me-3",type:"button",children:"登出"}),A.jsx("button",{onClick:()=>b("new"),className:"btn btn-primary",children:"建立新的產品"})]}),A.jsxs("table",{className:"table mt-4",children:[A.jsx("thead",{children:A.jsxs("tr",{children:[A.jsx("th",{width:"120",children:"分類"}),A.jsx("th",{children:"產品名稱"}),A.jsx("th",{width:"120",children:"原價"}),A.jsx("th",{width:"120",children:"售價"}),A.jsx("th",{width:"100",children:"是否啟用"}),A.jsx("th",{width:"120",children:"編輯"})]})}),A.jsx("tbody",{children:o.map(R=>A.jsxs("tr",{style:{verticalAlign:"middle"},children:[A.jsx("td",{children:R.category}),A.jsx("td",{children:R.title}),A.jsx("td",{className:"text-center",children:R.origin_price}),A.jsx("td",{className:"text-center",children:R.price}),A.jsx("td",{children:R.is_enabled?A.jsx("span",{className:"text-success",children:"啟用"}):A.jsx("span",{children:"未啟用"})}),A.jsx("td",{children:A.jsxs("div",{className:"btn-group",children:[A.jsx("button",{onClick:()=>b("edit",R),type:"button",className:"btn btn-outline-primary btn-sm",children:"編輯"}),A.jsx("button",{onClick:()=>S(R),type:"button",className:"btn btn-outline-danger btn-sm",children:"刪除"})]})})]},R.id))})]}),I.total_pages>2?A.jsx(vg,{pageInfo:I,handleProductsPageChange:L}):null]}),A.jsx(_y,{modalMode:l,tempProduct:f,getProducts:w,isOpen:g,setIsOpen:y,pageInfo:I}),A.jsx(Ey,{tempProduct:f,getProducts:w,isOpen:m,setIsOpen:E}),A.jsx(Lk,{}),T&&A.jsx("div",{className:"d-flex justify-content-center align-items-center",style:{position:"fixed",inset:0,backgroundColor:"rgba(255,255,255,0.9)",zIndex:999},children:A.jsx(gg,{dense:!0,color:"#1c211c",size:"medium",text:"",textColor:""})})]})};wy.propTypes={setIsAuth:ae.func.isRequired};function zk(){const[r,n]=ge.useState(!1);return A.jsx(A.Fragment,{children:r?A.jsx(wy,{setIsAuth:n}):A.jsx(yg,{setIsAuth:n})})}const jk=X1({reducer:{toast:c_}});O0.createRoot(document.getElementById("root")).render(A.jsx(_1,{store:jk,children:A.jsx(zk,{})}));

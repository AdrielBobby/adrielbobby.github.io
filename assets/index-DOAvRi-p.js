function kE(n,e){for(var t=0;t<e.length;t++){const r=e[t];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in n)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(n,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=t(o);fetch(o.href,a)}})();function Rx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var pd={exports:{}},Na={},md={exports:{}},yt={};var X0;function VE(){if(X0)return yt;X0=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),a=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),v=Symbol.iterator;function g(O){return O===null||typeof O!="object"?null:(O=v&&O[v]||O["@@iterator"],typeof O=="function"?O:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function S(O,Z,Re){this.props=O,this.context=Z,this.refs=E,this.updater=Re||_}S.prototype.isReactComponent={},S.prototype.setState=function(O,Z){if(typeof O!="object"&&typeof O!="function"&&O!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,O,Z,"setState")},S.prototype.forceUpdate=function(O){this.updater.enqueueForceUpdate(this,O,"forceUpdate")};function y(){}y.prototype=S.prototype;function w(O,Z,Re){this.props=O,this.context=Z,this.refs=E,this.updater=Re||_}var b=w.prototype=new y;b.constructor=w,M(b,S.prototype),b.isPureReactComponent=!0;var P=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},V={key:!0,ref:!0,__self:!0,__source:!0};function A(O,Z,Re){var Ve,He={},oe=null,pe=null;if(Z!=null)for(Ve in Z.ref!==void 0&&(pe=Z.ref),Z.key!==void 0&&(oe=""+Z.key),Z)I.call(Z,Ve)&&!V.hasOwnProperty(Ve)&&(He[Ve]=Z[Ve]);var ce=arguments.length-2;if(ce===1)He.children=Re;else if(1<ce){for(var we=Array(ce),De=0;De<ce;De++)we[De]=arguments[De+2];He.children=we}if(O&&O.defaultProps)for(Ve in ce=O.defaultProps,ce)He[Ve]===void 0&&(He[Ve]=ce[Ve]);return{$$typeof:n,type:O,key:oe,ref:pe,props:He,_owner:U.current}}function D(O,Z){return{$$typeof:n,type:O.type,key:Z,ref:O.ref,props:O.props,_owner:O._owner}}function K(O){return typeof O=="object"&&O!==null&&O.$$typeof===n}function B(O){var Z={"=":"=0",":":"=2"};return"$"+O.replace(/[=:]/g,function(Re){return Z[Re]})}var Q=/\/+/g;function J(O,Z){return typeof O=="object"&&O!==null&&O.key!=null?B(""+O.key):Z.toString(36)}function ne(O,Z,Re,Ve,He){var oe=typeof O;(oe==="undefined"||oe==="boolean")&&(O=null);var pe=!1;if(O===null)pe=!0;else switch(oe){case"string":case"number":pe=!0;break;case"object":switch(O.$$typeof){case n:case e:pe=!0}}if(pe)return pe=O,He=He(pe),O=Ve===""?"."+J(pe,0):Ve,P(He)?(Re="",O!=null&&(Re=O.replace(Q,"$&/")+"/"),ne(He,Z,Re,"",function(De){return De})):He!=null&&(K(He)&&(He=D(He,Re+(!He.key||pe&&pe.key===He.key?"":(""+He.key).replace(Q,"$&/")+"/")+O)),Z.push(He)),1;if(pe=0,Ve=Ve===""?".":Ve+":",P(O))for(var ce=0;ce<O.length;ce++){oe=O[ce];var we=Ve+J(oe,ce);pe+=ne(oe,Z,Re,we,He)}else if(we=g(O),typeof we=="function")for(O=we.call(O),ce=0;!(oe=O.next()).done;)oe=oe.value,we=Ve+J(oe,ce++),pe+=ne(oe,Z,Re,we,He);else if(oe==="object")throw Z=String(O),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(O).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return pe}function G(O,Z,Re){if(O==null)return O;var Ve=[],He=0;return ne(O,Ve,"","",function(oe){return Z.call(Re,oe,He++)}),Ve}function H(O){if(O._status===-1){var Z=O._result;Z=Z(),Z.then(function(Re){(O._status===0||O._status===-1)&&(O._status=1,O._result=Re)},function(Re){(O._status===0||O._status===-1)&&(O._status=2,O._result=Re)}),O._status===-1&&(O._status=0,O._result=Z)}if(O._status===1)return O._result.default;throw O._result}var $={current:null},X={transition:null},ee={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:X,ReactCurrentOwner:U};function ae(){throw Error("act(...) is not supported in production builds of React.")}return yt.Children={map:G,forEach:function(O,Z,Re){G(O,function(){Z.apply(this,arguments)},Re)},count:function(O){var Z=0;return G(O,function(){Z++}),Z},toArray:function(O){return G(O,function(Z){return Z})||[]},only:function(O){if(!K(O))throw Error("React.Children.only expected to receive a single React element child.");return O}},yt.Component=S,yt.Fragment=t,yt.Profiler=o,yt.PureComponent=w,yt.StrictMode=r,yt.Suspense=d,yt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ee,yt.act=ae,yt.cloneElement=function(O,Z,Re){if(O==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+O+".");var Ve=M({},O.props),He=O.key,oe=O.ref,pe=O._owner;if(Z!=null){if(Z.ref!==void 0&&(oe=Z.ref,pe=U.current),Z.key!==void 0&&(He=""+Z.key),O.type&&O.type.defaultProps)var ce=O.type.defaultProps;for(we in Z)I.call(Z,we)&&!V.hasOwnProperty(we)&&(Ve[we]=Z[we]===void 0&&ce!==void 0?ce[we]:Z[we])}var we=arguments.length-2;if(we===1)Ve.children=Re;else if(1<we){ce=Array(we);for(var De=0;De<we;De++)ce[De]=arguments[De+2];Ve.children=ce}return{$$typeof:n,type:O.type,key:He,ref:oe,props:Ve,_owner:pe}},yt.createContext=function(O){return O={$$typeof:c,_currentValue:O,_currentValue2:O,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},O.Provider={$$typeof:a,_context:O},O.Consumer=O},yt.createElement=A,yt.createFactory=function(O){var Z=A.bind(null,O);return Z.type=O,Z},yt.createRef=function(){return{current:null}},yt.forwardRef=function(O){return{$$typeof:u,render:O}},yt.isValidElement=K,yt.lazy=function(O){return{$$typeof:p,_payload:{_status:-1,_result:O},_init:H}},yt.memo=function(O,Z){return{$$typeof:h,type:O,compare:Z===void 0?null:Z}},yt.startTransition=function(O){var Z=X.transition;X.transition={};try{O()}finally{X.transition=Z}},yt.unstable_act=ae,yt.useCallback=function(O,Z){return $.current.useCallback(O,Z)},yt.useContext=function(O){return $.current.useContext(O)},yt.useDebugValue=function(){},yt.useDeferredValue=function(O){return $.current.useDeferredValue(O)},yt.useEffect=function(O,Z){return $.current.useEffect(O,Z)},yt.useId=function(){return $.current.useId()},yt.useImperativeHandle=function(O,Z,Re){return $.current.useImperativeHandle(O,Z,Re)},yt.useInsertionEffect=function(O,Z){return $.current.useInsertionEffect(O,Z)},yt.useLayoutEffect=function(O,Z){return $.current.useLayoutEffect(O,Z)},yt.useMemo=function(O,Z){return $.current.useMemo(O,Z)},yt.useReducer=function(O,Z,Re){return $.current.useReducer(O,Z,Re)},yt.useRef=function(O){return $.current.useRef(O)},yt.useState=function(O){return $.current.useState(O)},yt.useSyncExternalStore=function(O,Z,Re){return $.current.useSyncExternalStore(O,Z,Re)},yt.useTransition=function(){return $.current.useTransition()},yt.version="18.3.1",yt}var $0;function kp(){return $0||($0=1,md.exports=VE()),md.exports}var Y0;function zE(){if(Y0)return Na;Y0=1;var n=kp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var p,v={},g=null,_=null;h!==void 0&&(g=""+h),d.key!==void 0&&(g=""+d.key),d.ref!==void 0&&(_=d.ref);for(p in d)r.call(d,p)&&!a.hasOwnProperty(p)&&(v[p]=d[p]);if(u&&u.defaultProps)for(p in d=u.defaultProps,d)v[p]===void 0&&(v[p]=d[p]);return{$$typeof:e,type:u,key:g,ref:_,props:v,_owner:o.current}}return Na.Fragment=t,Na.jsx=c,Na.jsxs=c,Na}var q0;function HE(){return q0||(q0=1,pd.exports=zE()),pd.exports}var N=HE(),ge=kp();const bx=Rx(ge),PI=kE({__proto__:null,default:bx},[ge]);var xc={},gd={exports:{}},Yn={},vd={exports:{}},_d={};var K0;function GE(){return K0||(K0=1,(function(n){function e(X,ee){var ae=X.length;X.push(ee);e:for(;0<ae;){var O=ae-1>>>1,Z=X[O];if(0<o(Z,ee))X[O]=ee,X[ae]=Z,ae=O;else break e}}function t(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var ee=X[0],ae=X.pop();if(ae!==ee){X[0]=ae;e:for(var O=0,Z=X.length,Re=Z>>>1;O<Re;){var Ve=2*(O+1)-1,He=X[Ve],oe=Ve+1,pe=X[oe];if(0>o(He,ae))oe<Z&&0>o(pe,He)?(X[O]=pe,X[oe]=ae,O=oe):(X[O]=He,X[Ve]=ae,O=Ve);else if(oe<Z&&0>o(pe,ae))X[O]=pe,X[oe]=ae,O=oe;else break e}}return ee}function o(X,ee){var ae=X.sortIndex-ee.sortIndex;return ae!==0?ae:X.id-ee.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;n.unstable_now=function(){return a.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],p=1,v=null,g=3,_=!1,M=!1,E=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(X){for(var ee=t(h);ee!==null;){if(ee.callback===null)r(h);else if(ee.startTime<=X)r(h),ee.sortIndex=ee.expirationTime,e(d,ee);else break;ee=t(h)}}function P(X){if(E=!1,b(X),!M)if(t(d)!==null)M=!0,H(I);else{var ee=t(h);ee!==null&&$(P,ee.startTime-X)}}function I(X,ee){M=!1,E&&(E=!1,y(A),A=-1),_=!0;var ae=g;try{for(b(ee),v=t(d);v!==null&&(!(v.expirationTime>ee)||X&&!B());){var O=v.callback;if(typeof O=="function"){v.callback=null,g=v.priorityLevel;var Z=O(v.expirationTime<=ee);ee=n.unstable_now(),typeof Z=="function"?v.callback=Z:v===t(d)&&r(d),b(ee)}else r(d);v=t(d)}if(v!==null)var Re=!0;else{var Ve=t(h);Ve!==null&&$(P,Ve.startTime-ee),Re=!1}return Re}finally{v=null,g=ae,_=!1}}var U=!1,V=null,A=-1,D=5,K=-1;function B(){return!(n.unstable_now()-K<D)}function Q(){if(V!==null){var X=n.unstable_now();K=X;var ee=!0;try{ee=V(!0,X)}finally{ee?J():(U=!1,V=null)}}else U=!1}var J;if(typeof w=="function")J=function(){w(Q)};else if(typeof MessageChannel<"u"){var ne=new MessageChannel,G=ne.port2;ne.port1.onmessage=Q,J=function(){G.postMessage(null)}}else J=function(){S(Q,0)};function H(X){V=X,U||(U=!0,J())}function $(X,ee){A=S(function(){X(n.unstable_now())},ee)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_continueExecution=function(){M||_||(M=!0,H(I))},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return g},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(X){switch(g){case 1:case 2:case 3:var ee=3;break;default:ee=g}var ae=g;g=ee;try{return X()}finally{g=ae}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(X,ee){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var ae=g;g=X;try{return ee()}finally{g=ae}},n.unstable_scheduleCallback=function(X,ee,ae){var O=n.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?O+ae:O):ae=O,X){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=ae+Z,X={id:p++,callback:ee,priorityLevel:X,startTime:ae,expirationTime:Z,sortIndex:-1},ae>O?(X.sortIndex=ae,e(h,X),t(d)===null&&X===t(h)&&(E?(y(A),A=-1):E=!0,$(P,ae-O))):(X.sortIndex=Z,e(d,X),M||_||(M=!0,H(I))),X},n.unstable_shouldYield=B,n.unstable_wrapCallback=function(X){var ee=g;return function(){var ae=g;g=ee;try{return X.apply(this,arguments)}finally{g=ae}}}})(_d)),_d}var Z0;function WE(){return Z0||(Z0=1,vd.exports=GE()),vd.exports}var Q0;function jE(){if(Q0)return Yn;Q0=1;var n=kp(),e=WE();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function a(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(o[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},v={};function g(i){return d.call(v,i)?!0:d.call(p,i)?!1:h.test(i)?v[i]=!0:(p[i]=!0,!1)}function _(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function M(i,s,l,f){if(s===null||typeof s>"u"||_(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function E(i,s,l,f,m,x,C){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=x,this.removeEmptyString=C}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new E(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new E(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new E(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new E(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new E(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new E(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new E(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new E(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new E(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function w(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,w);S[s]=new E(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,w);S[s]=new E(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,w);S[s]=new E(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new E(i,1,!1,i.toLowerCase(),null,!0,!0)});function b(i,s,l,f){var m=S.hasOwnProperty(s)?S[s]:null;(m!==null?m.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(M(s,l,m,f)&&(l=null),f||m===null?g(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):m.mustUseProperty?i[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,f=m.attributeNamespace,l===null?i.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var P=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),V=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),K=Symbol.for("react.provider"),B=Symbol.for("react.context"),Q=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),ne=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),X=Symbol.iterator;function ee(i){return i===null||typeof i!="object"?null:(i=X&&i[X]||i["@@iterator"],typeof i=="function"?i:null)}var ae=Object.assign,O;function Z(i){if(O===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);O=s&&s[1]||""}return`
`+O+i}var Re=!1;function Ve(i,s){if(!i||Re)return"";Re=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(le){var f=le}Reflect.construct(i,[],s)}else{try{s.call()}catch(le){f=le}i.call(s.prototype)}else{try{throw Error()}catch(le){f=le}i()}}catch(le){if(le&&f&&typeof le.stack=="string"){for(var m=le.stack.split(`
`),x=f.stack.split(`
`),C=m.length-1,F=x.length-1;1<=C&&0<=F&&m[C]!==x[F];)F--;for(;1<=C&&0<=F;C--,F--)if(m[C]!==x[F]){if(C!==1||F!==1)do if(C--,F--,0>F||m[C]!==x[F]){var z=`
`+m[C].replace(" at new "," at ");return i.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",i.displayName)),z}while(1<=C&&0<=F);break}}}finally{Re=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?Z(i):""}function He(i){switch(i.tag){case 5:return Z(i.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return i=Ve(i.type,!1),i;case 11:return i=Ve(i.type.render,!1),i;case 1:return i=Ve(i.type,!0),i;default:return""}}function oe(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case V:return"Fragment";case U:return"Portal";case D:return"Profiler";case A:return"StrictMode";case J:return"Suspense";case ne:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case B:return(i.displayName||"Context")+".Consumer";case K:return(i._context.displayName||"Context")+".Provider";case Q:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case G:return s=i.displayName||null,s!==null?s:oe(i.type)||"Memo";case H:s=i._payload,i=i._init;try{return oe(i(s))}catch{}}return null}function pe(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ce(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function we(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function De(i){var s=we(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,x=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return m.call(this)},set:function(C){f=""+C,x.call(this,C)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(C){f=""+C},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function nt(i){i._valueTracker||(i._valueTracker=De(i))}function Vt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=we(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function dt(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function _t(i,s){var l=s.checked;return ae({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function At(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=ce(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function Oe(i,s){s=s.checked,s!=null&&b(i,"checked",s,!1)}function ut(i,s){Oe(i,s);var l=ce(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?xt(i,s.type,l):s.hasOwnProperty("defaultValue")&&xt(i,s.type,ce(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function k(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function xt(i,s,l){(s!=="number"||dt(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var gt=Array.isArray;function Et(i,s,l,f){if(i=i.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<i.length;l++)m=s.hasOwnProperty("$"+i[l].value),i[l].selected!==m&&(i[l].selected=m),m&&f&&(i[l].defaultSelected=!0)}else{for(l=""+ce(l),s=null,m=0;m<i.length;m++){if(i[m].value===l){i[m].selected=!0,f&&(i[m].defaultSelected=!0);return}s!==null||i[m].disabled||(s=i[m])}s!==null&&(s.selected=!0)}}function Ye(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ae({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function L(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(gt(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:ce(l)}}function T(i,s){var l=ce(s.value),f=ce(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function Y(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function me(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ve(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?me(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var de,Ge=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,m){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,m)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(de=de||document.createElement("div"),de.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=de.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function Ce(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Qe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ot=["Webkit","ms","Moz","O"];Object.keys(Qe).forEach(function(i){ot.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Qe[s]=Qe[i]})});function Se(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Qe.hasOwnProperty(i)&&Qe[i]?(""+s).trim():s+"px"}function Ae(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,m=Se(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,m):i[l]=m}}var qe=ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function We(i,s){if(s){if(qe[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ie(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ht=null;function W(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var be=null,Ee=null,Ue=null;function Me(i){if(i=_a(i)){if(typeof be!="function")throw Error(t(280));var s=i.stateNode;s&&(s=Il(s),be(i.stateNode,i.type,s))}}function he(i){Ee?Ue?Ue.push(i):Ue=[i]:Ee=i}function je(){if(Ee){var i=Ee,s=Ue;if(Ue=Ee=null,Me(i),s)for(i=0;i<s.length;i++)Me(s[i])}}function at(i,s){return i(s)}function Ot(){}var Rt=!1;function ai(i,s,l){if(Rt)return i(s,l);Rt=!0;try{return at(i,s,l)}finally{Rt=!1,(Ee!==null||Ue!==null)&&(Ot(),je())}}function Nn(i,s){var l=i.stateNode;if(l===null)return null;var f=Il(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var js=!1;if(u)try{var ir={};Object.defineProperty(ir,"passive",{get:function(){js=!0}}),window.addEventListener("test",ir,ir),window.removeEventListener("test",ir,ir)}catch{js=!1}function Uu(i,s,l,f,m,x,C,F,z){var le=Array.prototype.slice.call(arguments,3);try{s.apply(l,le)}catch(xe){this.onError(xe)}}var wr=!1,cs=null,li=!1,us=null,dl={onError:function(i){wr=!0,cs=i}};function hl(i,s,l,f,m,x,C,F,z){wr=!1,cs=null,Uu.apply(dl,arguments)}function Xs(i,s,l,f,m,x,C,F,z){if(hl.apply(this,arguments),wr){if(wr){var le=cs;wr=!1,cs=null}else throw Error(t(198));li||(li=!0,us=le)}}function ki(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function fs(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ea(i){if(ki(i)!==i)throw Error(t(188))}function pl(i){var s=i.alternate;if(!s){if(s=ki(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var m=l.return;if(m===null)break;var x=m.alternate;if(x===null){if(f=m.return,f!==null){l=f;continue}break}if(m.child===x.child){for(x=m.child;x;){if(x===l)return ea(m),i;if(x===f)return ea(m),s;x=x.sibling}throw Error(t(188))}if(l.return!==f.return)l=m,f=x;else{for(var C=!1,F=m.child;F;){if(F===l){C=!0,l=m,f=x;break}if(F===f){C=!0,f=m,l=x;break}F=F.sibling}if(!C){for(F=x.child;F;){if(F===l){C=!0,l=x,f=m;break}if(F===f){C=!0,f=x,l=m;break}F=F.sibling}if(!C)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function ml(i){return i=pl(i),i!==null?gl(i):null}function gl(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=gl(i);if(s!==null)return s;i=i.sibling}return null}var vl=e.unstable_scheduleCallback,_l=e.unstable_cancelCallback,Fu=e.unstable_shouldYield,Ou=e.unstable_requestPaint,R=e.unstable_now,q=e.unstable_getCurrentPriorityLevel,fe=e.unstable_ImmediatePriority,se=e.unstable_UserBlockingPriority,ie=e.unstable_NormalPriority,Le=e.unstable_LowPriority,ke=e.unstable_IdlePriority,Pe=null,Fe=null;function et(i){if(Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(Pe,i,void 0,(i.current.flags&128)===128)}catch{}}var it=Math.clz32?Math.clz32:Ut,pt=Math.log,tt=Math.LN2;function Ut(i){return i>>>=0,i===0?32:31-(pt(i)/tt|0)|0}var zt=64,kt=4194304;function Ct(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Jt(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,m=i.suspendedLanes,x=i.pingedLanes,C=l&268435455;if(C!==0){var F=C&~m;F!==0?f=Ct(F):(x&=C,x!==0&&(f=Ct(x)))}else C=l&~m,C!==0?f=Ct(C):x!==0&&(f=Ct(x));if(f===0)return 0;if(s!==0&&s!==f&&(s&m)===0&&(m=f&-f,x=s&-s,m>=x||m===16&&(x&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-it(s),m=1<<l,f|=i[l],s&=~m;return f}function Ze(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function In(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,m=i.expirationTimes,x=i.pendingLanes;0<x;){var C=31-it(x),F=1<<C,z=m[C];z===-1?((F&l)===0||(F&f)!==0)&&(m[C]=Ze(F,s)):z<=s&&(i.expiredLanes|=F),x&=~F}}function Mt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function zn(){var i=zt;return zt<<=1,(zt&4194240)===0&&(zt=64),i}function Hn(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Zn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-it(s),i[s]=l}function Ar(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var m=31-it(l),x=1<<m;s[m]=0,f[m]=-1,i[m]=-1,l&=~x}}function It(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-it(l),m=1<<f;m&s|i[f]&s&&(i[f]|=s),l&=~m}}var lt=0;function Si(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var en,ci,rr,ta,Rm,Bu=!1,xl=[],Cr=null,Rr=null,br=null,na=new Map,ia=new Map,Pr=[],aM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bm(i,s){switch(i){case"focusin":case"focusout":Cr=null;break;case"dragenter":case"dragleave":Rr=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":na.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ia.delete(s.pointerId)}}function ra(i,s,l,f,m,x){return i===null||i.nativeEvent!==x?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:x,targetContainers:[m]},s!==null&&(s=_a(s),s!==null&&ci(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),i)}function lM(i,s,l,f,m){switch(s){case"focusin":return Cr=ra(Cr,i,s,l,f,m),!0;case"dragenter":return Rr=ra(Rr,i,s,l,f,m),!0;case"mouseover":return br=ra(br,i,s,l,f,m),!0;case"pointerover":var x=m.pointerId;return na.set(x,ra(na.get(x)||null,i,s,l,f,m)),!0;case"gotpointercapture":return x=m.pointerId,ia.set(x,ra(ia.get(x)||null,i,s,l,f,m)),!0}return!1}function Pm(i){var s=ds(i.target);if(s!==null){var l=ki(s);if(l!==null){if(s=l.tag,s===13){if(s=fs(l),s!==null){i.blockedOn=s,Rm(i.priority,function(){rr(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function yl(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Vu(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);ht=f,l.target.dispatchEvent(f),ht=null}else return s=_a(l),s!==null&&ci(s),i.blockedOn=l,!1;s.shift()}return!0}function Dm(i,s,l){yl(i)&&l.delete(s)}function cM(){Bu=!1,Cr!==null&&yl(Cr)&&(Cr=null),Rr!==null&&yl(Rr)&&(Rr=null),br!==null&&yl(br)&&(br=null),na.forEach(Dm),ia.forEach(Dm)}function sa(i,s){i.blockedOn===s&&(i.blockedOn=null,Bu||(Bu=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,cM)))}function oa(i){function s(m){return sa(m,i)}if(0<xl.length){sa(xl[0],i);for(var l=1;l<xl.length;l++){var f=xl[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Cr!==null&&sa(Cr,i),Rr!==null&&sa(Rr,i),br!==null&&sa(br,i),na.forEach(s),ia.forEach(s),l=0;l<Pr.length;l++)f=Pr[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<Pr.length&&(l=Pr[0],l.blockedOn===null);)Pm(l),l.blockedOn===null&&Pr.shift()}var $s=P.ReactCurrentBatchConfig,Sl=!0;function uM(i,s,l,f){var m=lt,x=$s.transition;$s.transition=null;try{lt=1,ku(i,s,l,f)}finally{lt=m,$s.transition=x}}function fM(i,s,l,f){var m=lt,x=$s.transition;$s.transition=null;try{lt=4,ku(i,s,l,f)}finally{lt=m,$s.transition=x}}function ku(i,s,l,f){if(Sl){var m=Vu(i,s,l,f);if(m===null)rf(i,s,f,Ml,l),bm(i,f);else if(lM(m,i,s,l,f))f.stopPropagation();else if(bm(i,f),s&4&&-1<aM.indexOf(i)){for(;m!==null;){var x=_a(m);if(x!==null&&en(x),x=Vu(i,s,l,f),x===null&&rf(i,s,f,Ml,l),x===m)break;m=x}m!==null&&f.stopPropagation()}else rf(i,s,f,null,l)}}var Ml=null;function Vu(i,s,l,f){if(Ml=null,i=W(f),i=ds(i),i!==null)if(s=ki(i),s===null)i=null;else if(l=s.tag,l===13){if(i=fs(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return Ml=i,null}function Lm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(q()){case fe:return 1;case se:return 4;case ie:case Le:return 16;case ke:return 536870912;default:return 16}default:return 16}}var Dr=null,zu=null,El=null;function Nm(){if(El)return El;var i,s=zu,l=s.length,f,m="value"in Dr?Dr.value:Dr.textContent,x=m.length;for(i=0;i<l&&s[i]===m[i];i++);var C=l-i;for(f=1;f<=C&&s[l-f]===m[x-f];f++);return El=m.slice(i,1<f?1-f:void 0)}function Tl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function wl(){return!0}function Im(){return!1}function Qn(i){function s(l,f,m,x,C){this._reactName=l,this._targetInst=m,this.type=f,this.nativeEvent=x,this.target=C,this.currentTarget=null;for(var F in i)i.hasOwnProperty(F)&&(l=i[F],this[F]=l?l(x):x[F]);return this.isDefaultPrevented=(x.defaultPrevented!=null?x.defaultPrevented:x.returnValue===!1)?wl:Im,this.isPropagationStopped=Im,this}return ae(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),s}var Ys={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=Qn(Ys),aa=ae({},Ys,{view:0,detail:0}),dM=Qn(aa),Gu,Wu,la,Al=ae({},aa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xu,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==la&&(la&&i.type==="mousemove"?(Gu=i.screenX-la.screenX,Wu=i.screenY-la.screenY):Wu=Gu=0,la=i),Gu)},movementY:function(i){return"movementY"in i?i.movementY:Wu}}),Um=Qn(Al),hM=ae({},Al,{dataTransfer:0}),pM=Qn(hM),mM=ae({},aa,{relatedTarget:0}),ju=Qn(mM),gM=ae({},Ys,{animationName:0,elapsedTime:0,pseudoElement:0}),vM=Qn(gM),_M=ae({},Ys,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),xM=Qn(_M),yM=ae({},Ys,{data:0}),Fm=Qn(yM),SM={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MM={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},EM={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function TM(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=EM[i])?!!s[i]:!1}function Xu(){return TM}var wM=ae({},aa,{key:function(i){if(i.key){var s=SM[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Tl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?MM[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xu,charCode:function(i){return i.type==="keypress"?Tl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Tl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),AM=Qn(wM),CM=ae({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Om=Qn(CM),RM=ae({},aa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xu}),bM=Qn(RM),PM=ae({},Ys,{propertyName:0,elapsedTime:0,pseudoElement:0}),DM=Qn(PM),LM=ae({},Al,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),NM=Qn(LM),IM=[9,13,27,32],$u=u&&"CompositionEvent"in window,ca=null;u&&"documentMode"in document&&(ca=document.documentMode);var UM=u&&"TextEvent"in window&&!ca,Bm=u&&(!$u||ca&&8<ca&&11>=ca),km=" ",Vm=!1;function zm(i,s){switch(i){case"keyup":return IM.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var qs=!1;function FM(i,s){switch(i){case"compositionend":return Hm(s);case"keypress":return s.which!==32?null:(Vm=!0,km);case"textInput":return i=s.data,i===km&&Vm?null:i;default:return null}}function OM(i,s){if(qs)return i==="compositionend"||!$u&&zm(i,s)?(i=Nm(),El=zu=Dr=null,qs=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bm&&s.locale!=="ko"?null:s.data;default:return null}}var BM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!BM[i.type]:s==="textarea"}function Wm(i,s,l,f){he(f),s=Dl(s,"onChange"),0<s.length&&(l=new Hu("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var ua=null,fa=null;function kM(i){lg(i,0)}function Cl(i){var s=eo(i);if(Vt(s))return i}function VM(i,s){if(i==="change")return s}var jm=!1;if(u){var Yu;if(u){var qu="oninput"in document;if(!qu){var Xm=document.createElement("div");Xm.setAttribute("oninput","return;"),qu=typeof Xm.oninput=="function"}Yu=qu}else Yu=!1;jm=Yu&&(!document.documentMode||9<document.documentMode)}function $m(){ua&&(ua.detachEvent("onpropertychange",Ym),fa=ua=null)}function Ym(i){if(i.propertyName==="value"&&Cl(fa)){var s=[];Wm(s,fa,i,W(i)),ai(kM,s)}}function zM(i,s,l){i==="focusin"?($m(),ua=s,fa=l,ua.attachEvent("onpropertychange",Ym)):i==="focusout"&&$m()}function HM(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Cl(fa)}function GM(i,s){if(i==="click")return Cl(s)}function WM(i,s){if(i==="input"||i==="change")return Cl(s)}function jM(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Mi=typeof Object.is=="function"?Object.is:jM;function da(i,s){if(Mi(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var m=l[f];if(!d.call(s,m)||!Mi(i[m],s[m]))return!1}return!0}function qm(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function Km(i,s){var l=qm(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=qm(l)}}function Zm(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?Zm(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function Qm(){for(var i=window,s=dt();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=dt(i.document)}return s}function Ku(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function XM(i){var s=Qm(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&Zm(l.ownerDocument.documentElement,l)){if(f!==null&&Ku(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var m=l.textContent.length,x=Math.min(f.start,m);f=f.end===void 0?x:Math.min(f.end,m),!i.extend&&x>f&&(m=f,f=x,x=m),m=Km(l,x);var C=Km(l,f);m&&C&&(i.rangeCount!==1||i.anchorNode!==m.node||i.anchorOffset!==m.offset||i.focusNode!==C.node||i.focusOffset!==C.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),i.removeAllRanges(),x>f?(i.addRange(s),i.extend(C.node,C.offset)):(s.setEnd(C.node,C.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var $M=u&&"documentMode"in document&&11>=document.documentMode,Ks=null,Zu=null,ha=null,Qu=!1;function Jm(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Qu||Ks==null||Ks!==dt(f)||(f=Ks,"selectionStart"in f&&Ku(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),ha&&da(ha,f)||(ha=f,f=Dl(Zu,"onSelect"),0<f.length&&(s=new Hu("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ks)))}function Rl(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var Zs={animationend:Rl("Animation","AnimationEnd"),animationiteration:Rl("Animation","AnimationIteration"),animationstart:Rl("Animation","AnimationStart"),transitionend:Rl("Transition","TransitionEnd")},Ju={},eg={};u&&(eg=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function bl(i){if(Ju[i])return Ju[i];if(!Zs[i])return i;var s=Zs[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in eg)return Ju[i]=s[l];return i}var tg=bl("animationend"),ng=bl("animationiteration"),ig=bl("animationstart"),rg=bl("transitionend"),sg=new Map,og="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Lr(i,s){sg.set(i,s),a(s,[i])}for(var ef=0;ef<og.length;ef++){var tf=og[ef],YM=tf.toLowerCase(),qM=tf[0].toUpperCase()+tf.slice(1);Lr(YM,"on"+qM)}Lr(tg,"onAnimationEnd"),Lr(ng,"onAnimationIteration"),Lr(ig,"onAnimationStart"),Lr("dblclick","onDoubleClick"),Lr("focusin","onFocus"),Lr("focusout","onBlur"),Lr(rg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),a("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),a("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),a("onBeforeInput",["compositionend","keypress","textInput","paste"]),a("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),a("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var pa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),KM=new Set("cancel close invalid load scroll toggle".split(" ").concat(pa));function ag(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,Xs(f,s,void 0,i),i.currentTarget=null}function lg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],m=f.event;f=f.listeners;e:{var x=void 0;if(s)for(var C=f.length-1;0<=C;C--){var F=f[C],z=F.instance,le=F.currentTarget;if(F=F.listener,z!==x&&m.isPropagationStopped())break e;ag(m,F,le),x=z}else for(C=0;C<f.length;C++){if(F=f[C],z=F.instance,le=F.currentTarget,F=F.listener,z!==x&&m.isPropagationStopped())break e;ag(m,F,le),x=z}}}if(li)throw i=us,li=!1,us=null,i}function Wt(i,s){var l=s[uf];l===void 0&&(l=s[uf]=new Set);var f=i+"__bubble";l.has(f)||(cg(s,i,2,!1),l.add(f))}function nf(i,s,l){var f=0;s&&(f|=4),cg(l,i,f,s)}var Pl="_reactListening"+Math.random().toString(36).slice(2);function ma(i){if(!i[Pl]){i[Pl]=!0,r.forEach(function(l){l!=="selectionchange"&&(KM.has(l)||nf(l,!1,i),nf(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[Pl]||(s[Pl]=!0,nf("selectionchange",!1,s))}}function cg(i,s,l,f){switch(Lm(s)){case 1:var m=uM;break;case 4:m=fM;break;default:m=ku}l=m.bind(null,s,l,i),m=void 0,!js||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),f?m!==void 0?i.addEventListener(s,l,{capture:!0,passive:m}):i.addEventListener(s,l,!0):m!==void 0?i.addEventListener(s,l,{passive:m}):i.addEventListener(s,l,!1)}function rf(i,s,l,f,m){var x=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var C=f.tag;if(C===3||C===4){var F=f.stateNode.containerInfo;if(F===m||F.nodeType===8&&F.parentNode===m)break;if(C===4)for(C=f.return;C!==null;){var z=C.tag;if((z===3||z===4)&&(z=C.stateNode.containerInfo,z===m||z.nodeType===8&&z.parentNode===m))return;C=C.return}for(;F!==null;){if(C=ds(F),C===null)return;if(z=C.tag,z===5||z===6){f=x=C;continue e}F=F.parentNode}}f=f.return}ai(function(){var le=x,xe=W(l),ye=[];e:{var _e=sg.get(i);if(_e!==void 0){var Be=Hu,Xe=i;switch(i){case"keypress":if(Tl(l)===0)break e;case"keydown":case"keyup":Be=AM;break;case"focusin":Xe="focus",Be=ju;break;case"focusout":Xe="blur",Be=ju;break;case"beforeblur":case"afterblur":Be=ju;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Um;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=pM;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=bM;break;case tg:case ng:case ig:Be=vM;break;case rg:Be=DM;break;case"scroll":Be=dM;break;case"wheel":Be=NM;break;case"copy":case"cut":case"paste":Be=xM;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Om}var Ke=(s&4)!==0,tn=!Ke&&i==="scroll",te=Ke?_e!==null?_e+"Capture":null:_e;Ke=[];for(var j=le,re;j!==null;){re=j;var Te=re.stateNode;if(re.tag===5&&Te!==null&&(re=Te,te!==null&&(Te=Nn(j,te),Te!=null&&Ke.push(ga(j,Te,re)))),tn)break;j=j.return}0<Ke.length&&(_e=new Be(_e,Xe,null,l,xe),ye.push({event:_e,listeners:Ke}))}}if((s&7)===0){e:{if(_e=i==="mouseover"||i==="pointerover",Be=i==="mouseout"||i==="pointerout",_e&&l!==ht&&(Xe=l.relatedTarget||l.fromElement)&&(ds(Xe)||Xe[sr]))break e;if((Be||_e)&&(_e=xe.window===xe?xe:(_e=xe.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(Xe=l.relatedTarget||l.toElement,Be=le,Xe=Xe?ds(Xe):null,Xe!==null&&(tn=ki(Xe),Xe!==tn||Xe.tag!==5&&Xe.tag!==6)&&(Xe=null)):(Be=null,Xe=le),Be!==Xe)){if(Ke=Um,Te="onMouseLeave",te="onMouseEnter",j="mouse",(i==="pointerout"||i==="pointerover")&&(Ke=Om,Te="onPointerLeave",te="onPointerEnter",j="pointer"),tn=Be==null?_e:eo(Be),re=Xe==null?_e:eo(Xe),_e=new Ke(Te,j+"leave",Be,l,xe),_e.target=tn,_e.relatedTarget=re,Te=null,ds(xe)===le&&(Ke=new Ke(te,j+"enter",Xe,l,xe),Ke.target=re,Ke.relatedTarget=tn,Te=Ke),tn=Te,Be&&Xe)t:{for(Ke=Be,te=Xe,j=0,re=Ke;re;re=Qs(re))j++;for(re=0,Te=te;Te;Te=Qs(Te))re++;for(;0<j-re;)Ke=Qs(Ke),j--;for(;0<re-j;)te=Qs(te),re--;for(;j--;){if(Ke===te||te!==null&&Ke===te.alternate)break t;Ke=Qs(Ke),te=Qs(te)}Ke=null}else Ke=null;Be!==null&&ug(ye,_e,Be,Ke,!1),Xe!==null&&tn!==null&&ug(ye,tn,Xe,Ke,!0)}}e:{if(_e=le?eo(le):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var Je=VM;else if(Gm(_e))if(jm)Je=WM;else{Je=HM;var rt=zM}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=GM);if(Je&&(Je=Je(i,le))){Wm(ye,Je,l,xe);break e}rt&&rt(i,_e,le),i==="focusout"&&(rt=_e._wrapperState)&&rt.controlled&&_e.type==="number"&&xt(_e,"number",_e.value)}switch(rt=le?eo(le):window,i){case"focusin":(Gm(rt)||rt.contentEditable==="true")&&(Ks=rt,Zu=le,ha=null);break;case"focusout":ha=Zu=Ks=null;break;case"mousedown":Qu=!0;break;case"contextmenu":case"mouseup":case"dragend":Qu=!1,Jm(ye,l,xe);break;case"selectionchange":if($M)break;case"keydown":case"keyup":Jm(ye,l,xe)}var st;if($u)e:{switch(i){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else qs?zm(i,l)&&(ct="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(ct="onCompositionStart");ct&&(Bm&&l.locale!=="ko"&&(qs||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&qs&&(st=Nm()):(Dr=xe,zu="value"in Dr?Dr.value:Dr.textContent,qs=!0)),rt=Dl(le,ct),0<rt.length&&(ct=new Fm(ct,i,null,l,xe),ye.push({event:ct,listeners:rt}),st?ct.data=st:(st=Hm(l),st!==null&&(ct.data=st)))),(st=UM?FM(i,l):OM(i,l))&&(le=Dl(le,"onBeforeInput"),0<le.length&&(xe=new Fm("onBeforeInput","beforeinput",null,l,xe),ye.push({event:xe,listeners:le}),xe.data=st))}lg(ye,s)})}function ga(i,s,l){return{instance:i,listener:s,currentTarget:l}}function Dl(i,s){for(var l=s+"Capture",f=[];i!==null;){var m=i,x=m.stateNode;m.tag===5&&x!==null&&(m=x,x=Nn(i,l),x!=null&&f.unshift(ga(i,x,m)),x=Nn(i,s),x!=null&&f.push(ga(i,x,m))),i=i.return}return f}function Qs(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function ug(i,s,l,f,m){for(var x=s._reactName,C=[];l!==null&&l!==f;){var F=l,z=F.alternate,le=F.stateNode;if(z!==null&&z===f)break;F.tag===5&&le!==null&&(F=le,m?(z=Nn(l,x),z!=null&&C.unshift(ga(l,z,F))):m||(z=Nn(l,x),z!=null&&C.push(ga(l,z,F)))),l=l.return}C.length!==0&&i.push({event:s,listeners:C})}var ZM=/\r\n?/g,QM=/\u0000|\uFFFD/g;function fg(i){return(typeof i=="string"?i:""+i).replace(ZM,`
`).replace(QM,"")}function Ll(i,s,l){if(s=fg(s),fg(i)!==s&&l)throw Error(t(425))}function Nl(){}var sf=null,of=null;function af(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var lf=typeof setTimeout=="function"?setTimeout:void 0,JM=typeof clearTimeout=="function"?clearTimeout:void 0,dg=typeof Promise=="function"?Promise:void 0,eE=typeof queueMicrotask=="function"?queueMicrotask:typeof dg<"u"?function(i){return dg.resolve(null).then(i).catch(tE)}:lf;function tE(i){setTimeout(function(){throw i})}function cf(i,s){var l=s,f=0;do{var m=l.nextSibling;if(i.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(f===0){i.removeChild(m),oa(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=m}while(l);oa(s)}function Nr(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function hg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Js=Math.random().toString(36).slice(2),Vi="__reactFiber$"+Js,va="__reactProps$"+Js,sr="__reactContainer$"+Js,uf="__reactEvents$"+Js,nE="__reactListeners$"+Js,iE="__reactHandles$"+Js;function ds(i){var s=i[Vi];if(s)return s;for(var l=i.parentNode;l;){if(s=l[sr]||l[Vi]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=hg(i);i!==null;){if(l=i[Vi])return l;i=hg(i)}return s}i=l,l=i.parentNode}return null}function _a(i){return i=i[Vi]||i[sr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function eo(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function Il(i){return i[va]||null}var ff=[],to=-1;function Ir(i){return{current:i}}function jt(i){0>to||(i.current=ff[to],ff[to]=null,to--)}function Ht(i,s){to++,ff[to]=i.current,i.current=s}var Ur={},An=Ir(Ur),Gn=Ir(!1),hs=Ur;function no(i,s){var l=i.type.contextTypes;if(!l)return Ur;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var m={},x;for(x in l)m[x]=s[x];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=m),m}function Wn(i){return i=i.childContextTypes,i!=null}function Ul(){jt(Gn),jt(An)}function pg(i,s,l){if(An.current!==Ur)throw Error(t(168));Ht(An,s),Ht(Gn,l)}function mg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var m in f)if(!(m in s))throw Error(t(108,pe(i)||"Unknown",m));return ae({},l,f)}function Fl(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||Ur,hs=An.current,Ht(An,i),Ht(Gn,Gn.current),!0}function gg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=mg(i,s,hs),f.__reactInternalMemoizedMergedChildContext=i,jt(Gn),jt(An),Ht(An,i)):jt(Gn),Ht(Gn,l)}var or=null,Ol=!1,df=!1;function vg(i){or===null?or=[i]:or.push(i)}function rE(i){Ol=!0,vg(i)}function Fr(){if(!df&&or!==null){df=!0;var i=0,s=lt;try{var l=or;for(lt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}or=null,Ol=!1}catch(m){throw or!==null&&(or=or.slice(i+1)),vl(fe,Fr),m}finally{lt=s,df=!1}}return null}var io=[],ro=0,Bl=null,kl=0,ui=[],fi=0,ps=null,ar=1,lr="";function ms(i,s){io[ro++]=kl,io[ro++]=Bl,Bl=i,kl=s}function _g(i,s,l){ui[fi++]=ar,ui[fi++]=lr,ui[fi++]=ps,ps=i;var f=ar;i=lr;var m=32-it(f)-1;f&=~(1<<m),l+=1;var x=32-it(s)+m;if(30<x){var C=m-m%5;x=(f&(1<<C)-1).toString(32),f>>=C,m-=C,ar=1<<32-it(s)+m|l<<m|f,lr=x+i}else ar=1<<x|l<<m|f,lr=i}function hf(i){i.return!==null&&(ms(i,1),_g(i,1,0))}function pf(i){for(;i===Bl;)Bl=io[--ro],io[ro]=null,kl=io[--ro],io[ro]=null;for(;i===ps;)ps=ui[--fi],ui[fi]=null,lr=ui[--fi],ui[fi]=null,ar=ui[--fi],ui[fi]=null}var Jn=null,ei=null,Xt=!1,Ei=null;function xg(i,s){var l=mi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function yg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,Jn=i,ei=Nr(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,Jn=i,ei=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=ps!==null?{id:ar,overflow:lr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=mi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,Jn=i,ei=null,!0):!1;default:return!1}}function mf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function gf(i){if(Xt){var s=ei;if(s){var l=s;if(!yg(i,s)){if(mf(i))throw Error(t(418));s=Nr(l.nextSibling);var f=Jn;s&&yg(i,s)?xg(f,l):(i.flags=i.flags&-4097|2,Xt=!1,Jn=i)}}else{if(mf(i))throw Error(t(418));i.flags=i.flags&-4097|2,Xt=!1,Jn=i}}}function Sg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;Jn=i}function Vl(i){if(i!==Jn)return!1;if(!Xt)return Sg(i),Xt=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!af(i.type,i.memoizedProps)),s&&(s=ei)){if(mf(i))throw Mg(),Error(t(418));for(;s;)xg(i,s),s=Nr(s.nextSibling)}if(Sg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){ei=Nr(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}ei=null}}else ei=Jn?Nr(i.stateNode.nextSibling):null;return!0}function Mg(){for(var i=ei;i;)i=Nr(i.nextSibling)}function so(){ei=Jn=null,Xt=!1}function vf(i){Ei===null?Ei=[i]:Ei.push(i)}var sE=P.ReactCurrentBatchConfig;function xa(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var m=f,x=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===x?s.ref:(s=function(C){var F=m.refs;C===null?delete F[x]:F[x]=C},s._stringRef=x,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function zl(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Eg(i){var s=i._init;return s(i._payload)}function Tg(i){function s(te,j){if(i){var re=te.deletions;re===null?(te.deletions=[j],te.flags|=16):re.push(j)}}function l(te,j){if(!i)return null;for(;j!==null;)s(te,j),j=j.sibling;return null}function f(te,j){for(te=new Map;j!==null;)j.key!==null?te.set(j.key,j):te.set(j.index,j),j=j.sibling;return te}function m(te,j){return te=Wr(te,j),te.index=0,te.sibling=null,te}function x(te,j,re){return te.index=re,i?(re=te.alternate,re!==null?(re=re.index,re<j?(te.flags|=2,j):re):(te.flags|=2,j)):(te.flags|=1048576,j)}function C(te){return i&&te.alternate===null&&(te.flags|=2),te}function F(te,j,re,Te){return j===null||j.tag!==6?(j=ld(re,te.mode,Te),j.return=te,j):(j=m(j,re),j.return=te,j)}function z(te,j,re,Te){var Je=re.type;return Je===V?xe(te,j,re.props.children,Te,re.key):j!==null&&(j.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===H&&Eg(Je)===j.type)?(Te=m(j,re.props),Te.ref=xa(te,j,re),Te.return=te,Te):(Te=fc(re.type,re.key,re.props,null,te.mode,Te),Te.ref=xa(te,j,re),Te.return=te,Te)}function le(te,j,re,Te){return j===null||j.tag!==4||j.stateNode.containerInfo!==re.containerInfo||j.stateNode.implementation!==re.implementation?(j=cd(re,te.mode,Te),j.return=te,j):(j=m(j,re.children||[]),j.return=te,j)}function xe(te,j,re,Te,Je){return j===null||j.tag!==7?(j=Es(re,te.mode,Te,Je),j.return=te,j):(j=m(j,re),j.return=te,j)}function ye(te,j,re){if(typeof j=="string"&&j!==""||typeof j=="number")return j=ld(""+j,te.mode,re),j.return=te,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case I:return re=fc(j.type,j.key,j.props,null,te.mode,re),re.ref=xa(te,null,j),re.return=te,re;case U:return j=cd(j,te.mode,re),j.return=te,j;case H:var Te=j._init;return ye(te,Te(j._payload),re)}if(gt(j)||ee(j))return j=Es(j,te.mode,re,null),j.return=te,j;zl(te,j)}return null}function _e(te,j,re,Te){var Je=j!==null?j.key:null;if(typeof re=="string"&&re!==""||typeof re=="number")return Je!==null?null:F(te,j,""+re,Te);if(typeof re=="object"&&re!==null){switch(re.$$typeof){case I:return re.key===Je?z(te,j,re,Te):null;case U:return re.key===Je?le(te,j,re,Te):null;case H:return Je=re._init,_e(te,j,Je(re._payload),Te)}if(gt(re)||ee(re))return Je!==null?null:xe(te,j,re,Te,null);zl(te,re)}return null}function Be(te,j,re,Te,Je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(re)||null,F(j,te,""+Te,Je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case I:return te=te.get(Te.key===null?re:Te.key)||null,z(j,te,Te,Je);case U:return te=te.get(Te.key===null?re:Te.key)||null,le(j,te,Te,Je);case H:var rt=Te._init;return Be(te,j,re,rt(Te._payload),Je)}if(gt(Te)||ee(Te))return te=te.get(re)||null,xe(j,te,Te,Je,null);zl(j,Te)}return null}function Xe(te,j,re,Te){for(var Je=null,rt=null,st=j,ct=j=0,vn=null;st!==null&&ct<re.length;ct++){st.index>ct?(vn=st,st=null):vn=st.sibling;var Dt=_e(te,st,re[ct],Te);if(Dt===null){st===null&&(st=vn);break}i&&st&&Dt.alternate===null&&s(te,st),j=x(Dt,j,ct),rt===null?Je=Dt:rt.sibling=Dt,rt=Dt,st=vn}if(ct===re.length)return l(te,st),Xt&&ms(te,ct),Je;if(st===null){for(;ct<re.length;ct++)st=ye(te,re[ct],Te),st!==null&&(j=x(st,j,ct),rt===null?Je=st:rt.sibling=st,rt=st);return Xt&&ms(te,ct),Je}for(st=f(te,st);ct<re.length;ct++)vn=Be(st,te,ct,re[ct],Te),vn!==null&&(i&&vn.alternate!==null&&st.delete(vn.key===null?ct:vn.key),j=x(vn,j,ct),rt===null?Je=vn:rt.sibling=vn,rt=vn);return i&&st.forEach(function(jr){return s(te,jr)}),Xt&&ms(te,ct),Je}function Ke(te,j,re,Te){var Je=ee(re);if(typeof Je!="function")throw Error(t(150));if(re=Je.call(re),re==null)throw Error(t(151));for(var rt=Je=null,st=j,ct=j=0,vn=null,Dt=re.next();st!==null&&!Dt.done;ct++,Dt=re.next()){st.index>ct?(vn=st,st=null):vn=st.sibling;var jr=_e(te,st,Dt.value,Te);if(jr===null){st===null&&(st=vn);break}i&&st&&jr.alternate===null&&s(te,st),j=x(jr,j,ct),rt===null?Je=jr:rt.sibling=jr,rt=jr,st=vn}if(Dt.done)return l(te,st),Xt&&ms(te,ct),Je;if(st===null){for(;!Dt.done;ct++,Dt=re.next())Dt=ye(te,Dt.value,Te),Dt!==null&&(j=x(Dt,j,ct),rt===null?Je=Dt:rt.sibling=Dt,rt=Dt);return Xt&&ms(te,ct),Je}for(st=f(te,st);!Dt.done;ct++,Dt=re.next())Dt=Be(st,te,ct,Dt.value,Te),Dt!==null&&(i&&Dt.alternate!==null&&st.delete(Dt.key===null?ct:Dt.key),j=x(Dt,j,ct),rt===null?Je=Dt:rt.sibling=Dt,rt=Dt);return i&&st.forEach(function(BE){return s(te,BE)}),Xt&&ms(te,ct),Je}function tn(te,j,re,Te){if(typeof re=="object"&&re!==null&&re.type===V&&re.key===null&&(re=re.props.children),typeof re=="object"&&re!==null){switch(re.$$typeof){case I:e:{for(var Je=re.key,rt=j;rt!==null;){if(rt.key===Je){if(Je=re.type,Je===V){if(rt.tag===7){l(te,rt.sibling),j=m(rt,re.props.children),j.return=te,te=j;break e}}else if(rt.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===H&&Eg(Je)===rt.type){l(te,rt.sibling),j=m(rt,re.props),j.ref=xa(te,rt,re),j.return=te,te=j;break e}l(te,rt);break}else s(te,rt);rt=rt.sibling}re.type===V?(j=Es(re.props.children,te.mode,Te,re.key),j.return=te,te=j):(Te=fc(re.type,re.key,re.props,null,te.mode,Te),Te.ref=xa(te,j,re),Te.return=te,te=Te)}return C(te);case U:e:{for(rt=re.key;j!==null;){if(j.key===rt)if(j.tag===4&&j.stateNode.containerInfo===re.containerInfo&&j.stateNode.implementation===re.implementation){l(te,j.sibling),j=m(j,re.children||[]),j.return=te,te=j;break e}else{l(te,j);break}else s(te,j);j=j.sibling}j=cd(re,te.mode,Te),j.return=te,te=j}return C(te);case H:return rt=re._init,tn(te,j,rt(re._payload),Te)}if(gt(re))return Xe(te,j,re,Te);if(ee(re))return Ke(te,j,re,Te);zl(te,re)}return typeof re=="string"&&re!==""||typeof re=="number"?(re=""+re,j!==null&&j.tag===6?(l(te,j.sibling),j=m(j,re),j.return=te,te=j):(l(te,j),j=ld(re,te.mode,Te),j.return=te,te=j),C(te)):l(te,j)}return tn}var oo=Tg(!0),wg=Tg(!1),Hl=Ir(null),Gl=null,ao=null,_f=null;function xf(){_f=ao=Gl=null}function yf(i){var s=Hl.current;jt(Hl),i._currentValue=s}function Sf(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function lo(i,s){Gl=i,_f=ao=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(jn=!0),i.firstContext=null)}function di(i){var s=i._currentValue;if(_f!==i)if(i={context:i,memoizedValue:s,next:null},ao===null){if(Gl===null)throw Error(t(308));ao=i,Gl.dependencies={lanes:0,firstContext:i}}else ao=ao.next=i;return s}var gs=null;function Mf(i){gs===null?gs=[i]:gs.push(i)}function Ag(i,s,l,f){var m=s.interleaved;return m===null?(l.next=l,Mf(s)):(l.next=m.next,m.next=l),s.interleaved=l,cr(i,f)}function cr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var Or=!1;function Ef(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Cg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function ur(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function Br(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(bt&2)!==0){var m=f.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),f.pending=s,cr(i,l)}return m=f.interleaved,m===null?(s.next=s,Mf(f)):(s.next=m.next,m.next=s),f.interleaved=s,cr(i,l)}function Wl(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,It(i,l)}}function Rg(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var m=null,x=null;if(l=l.firstBaseUpdate,l!==null){do{var C={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};x===null?m=x=C:x=x.next=C,l=l.next}while(l!==null);x===null?m=x=s:x=x.next=s}else m=x=s;l={baseState:f.baseState,firstBaseUpdate:m,lastBaseUpdate:x,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function jl(i,s,l,f){var m=i.updateQueue;Or=!1;var x=m.firstBaseUpdate,C=m.lastBaseUpdate,F=m.shared.pending;if(F!==null){m.shared.pending=null;var z=F,le=z.next;z.next=null,C===null?x=le:C.next=le,C=z;var xe=i.alternate;xe!==null&&(xe=xe.updateQueue,F=xe.lastBaseUpdate,F!==C&&(F===null?xe.firstBaseUpdate=le:F.next=le,xe.lastBaseUpdate=z))}if(x!==null){var ye=m.baseState;C=0,xe=le=z=null,F=x;do{var _e=F.lane,Be=F.eventTime;if((f&_e)===_e){xe!==null&&(xe=xe.next={eventTime:Be,lane:0,tag:F.tag,payload:F.payload,callback:F.callback,next:null});e:{var Xe=i,Ke=F;switch(_e=s,Be=l,Ke.tag){case 1:if(Xe=Ke.payload,typeof Xe=="function"){ye=Xe.call(Be,ye,_e);break e}ye=Xe;break e;case 3:Xe.flags=Xe.flags&-65537|128;case 0:if(Xe=Ke.payload,_e=typeof Xe=="function"?Xe.call(Be,ye,_e):Xe,_e==null)break e;ye=ae({},ye,_e);break e;case 2:Or=!0}}F.callback!==null&&F.lane!==0&&(i.flags|=64,_e=m.effects,_e===null?m.effects=[F]:_e.push(F))}else Be={eventTime:Be,lane:_e,tag:F.tag,payload:F.payload,callback:F.callback,next:null},xe===null?(le=xe=Be,z=ye):xe=xe.next=Be,C|=_e;if(F=F.next,F===null){if(F=m.shared.pending,F===null)break;_e=F,F=_e.next,_e.next=null,m.lastBaseUpdate=_e,m.shared.pending=null}}while(!0);if(xe===null&&(z=ye),m.baseState=z,m.firstBaseUpdate=le,m.lastBaseUpdate=xe,s=m.shared.interleaved,s!==null){m=s;do C|=m.lane,m=m.next;while(m!==s)}else x===null&&(m.shared.lanes=0);xs|=C,i.lanes=C,i.memoizedState=ye}}function bg(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],m=f.callback;if(m!==null){if(f.callback=null,f=l,typeof m!="function")throw Error(t(191,m));m.call(f)}}}var ya={},zi=Ir(ya),Sa=Ir(ya),Ma=Ir(ya);function vs(i){if(i===ya)throw Error(t(174));return i}function Tf(i,s){switch(Ht(Ma,s),Ht(Sa,i),Ht(zi,ya),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:ve(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=ve(s,i)}jt(zi),Ht(zi,s)}function co(){jt(zi),jt(Sa),jt(Ma)}function Pg(i){vs(Ma.current);var s=vs(zi.current),l=ve(s,i.type);s!==l&&(Ht(Sa,i),Ht(zi,l))}function wf(i){Sa.current===i&&(jt(zi),jt(Sa))}var $t=Ir(0);function Xl(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var Af=[];function Cf(){for(var i=0;i<Af.length;i++)Af[i]._workInProgressVersionPrimary=null;Af.length=0}var $l=P.ReactCurrentDispatcher,Rf=P.ReactCurrentBatchConfig,_s=0,Yt=null,un=null,mn=null,Yl=!1,Ea=!1,Ta=0,oE=0;function Cn(){throw Error(t(321))}function bf(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Mi(i[l],s[l]))return!1;return!0}function Pf(i,s,l,f,m,x){if(_s=x,Yt=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,$l.current=i===null||i.memoizedState===null?uE:fE,i=l(f,m),Ea){x=0;do{if(Ea=!1,Ta=0,25<=x)throw Error(t(301));x+=1,mn=un=null,s.updateQueue=null,$l.current=dE,i=l(f,m)}while(Ea)}if($l.current=Zl,s=un!==null&&un.next!==null,_s=0,mn=un=Yt=null,Yl=!1,s)throw Error(t(300));return i}function Df(){var i=Ta!==0;return Ta=0,i}function Hi(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return mn===null?Yt.memoizedState=mn=i:mn=mn.next=i,mn}function hi(){if(un===null){var i=Yt.alternate;i=i!==null?i.memoizedState:null}else i=un.next;var s=mn===null?Yt.memoizedState:mn.next;if(s!==null)mn=s,un=i;else{if(i===null)throw Error(t(310));un=i,i={memoizedState:un.memoizedState,baseState:un.baseState,baseQueue:un.baseQueue,queue:un.queue,next:null},mn===null?Yt.memoizedState=mn=i:mn=mn.next=i}return mn}function wa(i,s){return typeof s=="function"?s(i):s}function Lf(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=un,m=f.baseQueue,x=l.pending;if(x!==null){if(m!==null){var C=m.next;m.next=x.next,x.next=C}f.baseQueue=m=x,l.pending=null}if(m!==null){x=m.next,f=f.baseState;var F=C=null,z=null,le=x;do{var xe=le.lane;if((_s&xe)===xe)z!==null&&(z=z.next={lane:0,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null}),f=le.hasEagerState?le.eagerState:i(f,le.action);else{var ye={lane:xe,action:le.action,hasEagerState:le.hasEagerState,eagerState:le.eagerState,next:null};z===null?(F=z=ye,C=f):z=z.next=ye,Yt.lanes|=xe,xs|=xe}le=le.next}while(le!==null&&le!==x);z===null?C=f:z.next=F,Mi(f,s.memoizedState)||(jn=!0),s.memoizedState=f,s.baseState=C,s.baseQueue=z,l.lastRenderedState=f}if(i=l.interleaved,i!==null){m=i;do x=m.lane,Yt.lanes|=x,xs|=x,m=m.next;while(m!==i)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function Nf(i){var s=hi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,m=l.pending,x=s.memoizedState;if(m!==null){l.pending=null;var C=m=m.next;do x=i(x,C.action),C=C.next;while(C!==m);Mi(x,s.memoizedState)||(jn=!0),s.memoizedState=x,s.baseQueue===null&&(s.baseState=x),l.lastRenderedState=x}return[x,f]}function Dg(){}function Lg(i,s){var l=Yt,f=hi(),m=s(),x=!Mi(f.memoizedState,m);if(x&&(f.memoizedState=m,jn=!0),f=f.queue,If(Ug.bind(null,l,f,i),[i]),f.getSnapshot!==s||x||mn!==null&&mn.memoizedState.tag&1){if(l.flags|=2048,Aa(9,Ig.bind(null,l,f,m,s),void 0,null),gn===null)throw Error(t(349));(_s&30)!==0||Ng(l,s,m)}return m}function Ng(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Ig(i,s,l,f){s.value=l,s.getSnapshot=f,Fg(s)&&Og(i)}function Ug(i,s,l){return l(function(){Fg(s)&&Og(i)})}function Fg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Mi(i,l)}catch{return!0}}function Og(i){var s=cr(i,1);s!==null&&Ci(s,i,1,-1)}function Bg(i){var s=Hi();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:wa,lastRenderedState:i},s.queue=i,i=i.dispatch=cE.bind(null,Yt,i),[s.memoizedState,i]}function Aa(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=Yt.updateQueue,s===null?(s={lastEffect:null,stores:null},Yt.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function kg(){return hi().memoizedState}function ql(i,s,l,f){var m=Hi();Yt.flags|=i,m.memoizedState=Aa(1|s,l,void 0,f===void 0?null:f)}function Kl(i,s,l,f){var m=hi();f=f===void 0?null:f;var x=void 0;if(un!==null){var C=un.memoizedState;if(x=C.destroy,f!==null&&bf(f,C.deps)){m.memoizedState=Aa(s,l,x,f);return}}Yt.flags|=i,m.memoizedState=Aa(1|s,l,x,f)}function Vg(i,s){return ql(8390656,8,i,s)}function If(i,s){return Kl(2048,8,i,s)}function zg(i,s){return Kl(4,2,i,s)}function Hg(i,s){return Kl(4,4,i,s)}function Gg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Wg(i,s,l){return l=l!=null?l.concat([i]):null,Kl(4,4,Gg.bind(null,s,i),l)}function Uf(){}function jg(i,s){var l=hi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function Xg(i,s){var l=hi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&bf(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function $g(i,s,l){return(_s&21)===0?(i.baseState&&(i.baseState=!1,jn=!0),i.memoizedState=l):(Mi(l,s)||(l=zn(),Yt.lanes|=l,xs|=l,i.baseState=!0),s)}function aE(i,s){var l=lt;lt=l!==0&&4>l?l:4,i(!0);var f=Rf.transition;Rf.transition={};try{i(!1),s()}finally{lt=l,Rf.transition=f}}function Yg(){return hi().memoizedState}function lE(i,s,l){var f=Hr(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},qg(i))Kg(s,l);else if(l=Ag(i,s,l,f),l!==null){var m=Fn();Ci(l,i,f,m),Zg(l,s,f)}}function cE(i,s,l){var f=Hr(i),m={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(qg(i))Kg(s,m);else{var x=i.alternate;if(i.lanes===0&&(x===null||x.lanes===0)&&(x=s.lastRenderedReducer,x!==null))try{var C=s.lastRenderedState,F=x(C,l);if(m.hasEagerState=!0,m.eagerState=F,Mi(F,C)){var z=s.interleaved;z===null?(m.next=m,Mf(s)):(m.next=z.next,z.next=m),s.interleaved=m;return}}catch{}l=Ag(i,s,m,f),l!==null&&(m=Fn(),Ci(l,i,f,m),Zg(l,s,f))}}function qg(i){var s=i.alternate;return i===Yt||s!==null&&s===Yt}function Kg(i,s){Ea=Yl=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function Zg(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,It(i,l)}}var Zl={readContext:di,useCallback:Cn,useContext:Cn,useEffect:Cn,useImperativeHandle:Cn,useInsertionEffect:Cn,useLayoutEffect:Cn,useMemo:Cn,useReducer:Cn,useRef:Cn,useState:Cn,useDebugValue:Cn,useDeferredValue:Cn,useTransition:Cn,useMutableSource:Cn,useSyncExternalStore:Cn,useId:Cn,unstable_isNewReconciler:!1},uE={readContext:di,useCallback:function(i,s){return Hi().memoizedState=[i,s===void 0?null:s],i},useContext:di,useEffect:Vg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,ql(4194308,4,Gg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return ql(4194308,4,i,s)},useInsertionEffect:function(i,s){return ql(4,2,i,s)},useMemo:function(i,s){var l=Hi();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=Hi();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=lE.bind(null,Yt,i),[f.memoizedState,i]},useRef:function(i){var s=Hi();return i={current:i},s.memoizedState=i},useState:Bg,useDebugValue:Uf,useDeferredValue:function(i){return Hi().memoizedState=i},useTransition:function(){var i=Bg(!1),s=i[0];return i=aE.bind(null,i[1]),Hi().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=Yt,m=Hi();if(Xt){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),gn===null)throw Error(t(349));(_s&30)!==0||Ng(f,s,l)}m.memoizedState=l;var x={value:l,getSnapshot:s};return m.queue=x,Vg(Ug.bind(null,f,x,i),[i]),f.flags|=2048,Aa(9,Ig.bind(null,f,x,l,s),void 0,null),l},useId:function(){var i=Hi(),s=gn.identifierPrefix;if(Xt){var l=lr,f=ar;l=(f&~(1<<32-it(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=Ta++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=oE++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},fE={readContext:di,useCallback:jg,useContext:di,useEffect:If,useImperativeHandle:Wg,useInsertionEffect:zg,useLayoutEffect:Hg,useMemo:Xg,useReducer:Lf,useRef:kg,useState:function(){return Lf(wa)},useDebugValue:Uf,useDeferredValue:function(i){var s=hi();return $g(s,un.memoizedState,i)},useTransition:function(){var i=Lf(wa)[0],s=hi().memoizedState;return[i,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:Yg,unstable_isNewReconciler:!1},dE={readContext:di,useCallback:jg,useContext:di,useEffect:If,useImperativeHandle:Wg,useInsertionEffect:zg,useLayoutEffect:Hg,useMemo:Xg,useReducer:Nf,useRef:kg,useState:function(){return Nf(wa)},useDebugValue:Uf,useDeferredValue:function(i){var s=hi();return un===null?s.memoizedState=i:$g(s,un.memoizedState,i)},useTransition:function(){var i=Nf(wa)[0],s=hi().memoizedState;return[i,s]},useMutableSource:Dg,useSyncExternalStore:Lg,useId:Yg,unstable_isNewReconciler:!1};function Ti(i,s){if(i&&i.defaultProps){s=ae({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function Ff(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:ae({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Ql={isMounted:function(i){return(i=i._reactInternals)?ki(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=Fn(),m=Hr(i),x=ur(f,m);x.payload=s,l!=null&&(x.callback=l),s=Br(i,x,m),s!==null&&(Ci(s,i,m,f),Wl(s,i,m))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=Fn(),m=Hr(i),x=ur(f,m);x.tag=1,x.payload=s,l!=null&&(x.callback=l),s=Br(i,x,m),s!==null&&(Ci(s,i,m,f),Wl(s,i,m))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=Fn(),f=Hr(i),m=ur(l,f);m.tag=2,s!=null&&(m.callback=s),s=Br(i,m,f),s!==null&&(Ci(s,i,f,l),Wl(s,i,f))}};function Qg(i,s,l,f,m,x,C){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,x,C):s.prototype&&s.prototype.isPureReactComponent?!da(l,f)||!da(m,x):!0}function Jg(i,s,l){var f=!1,m=Ur,x=s.contextType;return typeof x=="object"&&x!==null?x=di(x):(m=Wn(s)?hs:An.current,f=s.contextTypes,x=(f=f!=null)?no(i,m):Ur),s=new s(l,x),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ql,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=m,i.__reactInternalMemoizedMaskedChildContext=x),s}function e0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Ql.enqueueReplaceState(s,s.state,null)}function Of(i,s,l,f){var m=i.stateNode;m.props=l,m.state=i.memoizedState,m.refs={},Ef(i);var x=s.contextType;typeof x=="object"&&x!==null?m.context=di(x):(x=Wn(s)?hs:An.current,m.context=no(i,x)),m.state=i.memoizedState,x=s.getDerivedStateFromProps,typeof x=="function"&&(Ff(i,s,x,l),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&Ql.enqueueReplaceState(m,m.state,null),jl(i,l,m,f),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308)}function uo(i,s){try{var l="",f=s;do l+=He(f),f=f.return;while(f);var m=l}catch(x){m=`
Error generating stack: `+x.message+`
`+x.stack}return{value:i,source:s,stack:m,digest:null}}function Bf(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function kf(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var hE=typeof WeakMap=="function"?WeakMap:Map;function t0(i,s,l){l=ur(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){sc||(sc=!0,ed=f),kf(i,s)},l}function n0(i,s,l){l=ur(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var m=s.value;l.payload=function(){return f(m)},l.callback=function(){kf(i,s)}}var x=i.stateNode;return x!==null&&typeof x.componentDidCatch=="function"&&(l.callback=function(){kf(i,s),typeof f!="function"&&(Vr===null?Vr=new Set([this]):Vr.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})}),l}function i0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new hE;var m=new Set;f.set(s,m)}else m=f.get(s),m===void 0&&(m=new Set,f.set(s,m));m.has(l)||(m.add(l),i=CE.bind(null,i,s,l),s.then(i,i))}function r0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function s0(i,s,l,f,m){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=ur(-1,1),s.tag=2,Br(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=m,i)}var pE=P.ReactCurrentOwner,jn=!1;function Un(i,s,l,f){s.child=i===null?wg(s,null,l,f):oo(s,i.child,l,f)}function o0(i,s,l,f,m){l=l.render;var x=s.ref;return lo(s,m),f=Pf(i,s,l,f,x,m),l=Df(),i!==null&&!jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,fr(i,s,m)):(Xt&&l&&hf(s),s.flags|=1,Un(i,s,f,m),s.child)}function a0(i,s,l,f,m){if(i===null){var x=l.type;return typeof x=="function"&&!ad(x)&&x.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=x,l0(i,s,x,f,m)):(i=fc(l.type,null,f,s,s.mode,m),i.ref=s.ref,i.return=s,s.child=i)}if(x=i.child,(i.lanes&m)===0){var C=x.memoizedProps;if(l=l.compare,l=l!==null?l:da,l(C,f)&&i.ref===s.ref)return fr(i,s,m)}return s.flags|=1,i=Wr(x,f),i.ref=s.ref,i.return=s,s.child=i}function l0(i,s,l,f,m){if(i!==null){var x=i.memoizedProps;if(da(x,f)&&i.ref===s.ref)if(jn=!1,s.pendingProps=f=x,(i.lanes&m)!==0)(i.flags&131072)!==0&&(jn=!0);else return s.lanes=i.lanes,fr(i,s,m)}return Vf(i,s,l,f,m)}function c0(i,s,l){var f=s.pendingProps,m=f.children,x=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ht(ho,ti),ti|=l;else{if((l&1073741824)===0)return i=x!==null?x.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,Ht(ho,ti),ti|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=x!==null?x.baseLanes:l,Ht(ho,ti),ti|=f}else x!==null?(f=x.baseLanes|l,s.memoizedState=null):f=l,Ht(ho,ti),ti|=f;return Un(i,s,m,l),s.child}function u0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function Vf(i,s,l,f,m){var x=Wn(l)?hs:An.current;return x=no(s,x),lo(s,m),l=Pf(i,s,l,f,x,m),f=Df(),i!==null&&!jn?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~m,fr(i,s,m)):(Xt&&f&&hf(s),s.flags|=1,Un(i,s,l,m),s.child)}function f0(i,s,l,f,m){if(Wn(l)){var x=!0;Fl(s)}else x=!1;if(lo(s,m),s.stateNode===null)ec(i,s),Jg(s,l,f),Of(s,l,f,m),f=!0;else if(i===null){var C=s.stateNode,F=s.memoizedProps;C.props=F;var z=C.context,le=l.contextType;typeof le=="object"&&le!==null?le=di(le):(le=Wn(l)?hs:An.current,le=no(s,le));var xe=l.getDerivedStateFromProps,ye=typeof xe=="function"||typeof C.getSnapshotBeforeUpdate=="function";ye||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(F!==f||z!==le)&&e0(s,C,f,le),Or=!1;var _e=s.memoizedState;C.state=_e,jl(s,f,C,m),z=s.memoizedState,F!==f||_e!==z||Gn.current||Or?(typeof xe=="function"&&(Ff(s,l,xe,f),z=s.memoizedState),(F=Or||Qg(s,l,F,f,_e,z,le))?(ye||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(s.flags|=4194308)):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=z),C.props=f,C.state=z,C.context=le,f=F):(typeof C.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{C=s.stateNode,Cg(i,s),F=s.memoizedProps,le=s.type===s.elementType?F:Ti(s.type,F),C.props=le,ye=s.pendingProps,_e=C.context,z=l.contextType,typeof z=="object"&&z!==null?z=di(z):(z=Wn(l)?hs:An.current,z=no(s,z));var Be=l.getDerivedStateFromProps;(xe=typeof Be=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(F!==ye||_e!==z)&&e0(s,C,f,z),Or=!1,_e=s.memoizedState,C.state=_e,jl(s,f,C,m);var Xe=s.memoizedState;F!==ye||_e!==Xe||Gn.current||Or?(typeof Be=="function"&&(Ff(s,l,Be,f),Xe=s.memoizedState),(le=Or||Qg(s,l,le,f,_e,Xe,z)||!1)?(xe||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(f,Xe,z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(f,Xe,z)),typeof C.componentDidUpdate=="function"&&(s.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof C.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=Xe),C.props=f,C.state=Xe,C.context=z,f=le):(typeof C.componentDidUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||F===i.memoizedProps&&_e===i.memoizedState||(s.flags|=1024),f=!1)}return zf(i,s,l,f,x,m)}function zf(i,s,l,f,m,x){u0(i,s);var C=(s.flags&128)!==0;if(!f&&!C)return m&&gg(s,l,!1),fr(i,s,x);f=s.stateNode,pE.current=s;var F=C&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&C?(s.child=oo(s,i.child,null,x),s.child=oo(s,null,F,x)):Un(i,s,F,x),s.memoizedState=f.state,m&&gg(s,l,!0),s.child}function d0(i){var s=i.stateNode;s.pendingContext?pg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&pg(i,s.context,!1),Tf(i,s.containerInfo)}function h0(i,s,l,f,m){return so(),vf(m),s.flags|=256,Un(i,s,l,f),s.child}var Hf={dehydrated:null,treeContext:null,retryLane:0};function Gf(i){return{baseLanes:i,cachePool:null,transitions:null}}function p0(i,s,l){var f=s.pendingProps,m=$t.current,x=!1,C=(s.flags&128)!==0,F;if((F=C)||(F=i!==null&&i.memoizedState===null?!1:(m&2)!==0),F?(x=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(m|=1),Ht($t,m&1),i===null)return gf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(C=f.children,i=f.fallback,x?(f=s.mode,x=s.child,C={mode:"hidden",children:C},(f&1)===0&&x!==null?(x.childLanes=0,x.pendingProps=C):x=dc(C,f,0,null),i=Es(i,f,l,null),x.return=s,i.return=s,x.sibling=i,s.child=x,s.child.memoizedState=Gf(l),s.memoizedState=Hf,i):Wf(s,C));if(m=i.memoizedState,m!==null&&(F=m.dehydrated,F!==null))return mE(i,s,C,f,F,m,l);if(x){x=f.fallback,C=s.mode,m=i.child,F=m.sibling;var z={mode:"hidden",children:f.children};return(C&1)===0&&s.child!==m?(f=s.child,f.childLanes=0,f.pendingProps=z,s.deletions=null):(f=Wr(m,z),f.subtreeFlags=m.subtreeFlags&14680064),F!==null?x=Wr(F,x):(x=Es(x,C,l,null),x.flags|=2),x.return=s,f.return=s,f.sibling=x,s.child=f,f=x,x=s.child,C=i.child.memoizedState,C=C===null?Gf(l):{baseLanes:C.baseLanes|l,cachePool:null,transitions:C.transitions},x.memoizedState=C,x.childLanes=i.childLanes&~l,s.memoizedState=Hf,f}return x=i.child,i=x.sibling,f=Wr(x,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function Wf(i,s){return s=dc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Jl(i,s,l,f){return f!==null&&vf(f),oo(s,i.child,null,l),i=Wf(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function mE(i,s,l,f,m,x,C){if(l)return s.flags&256?(s.flags&=-257,f=Bf(Error(t(422))),Jl(i,s,C,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(x=f.fallback,m=s.mode,f=dc({mode:"visible",children:f.children},m,0,null),x=Es(x,m,C,null),x.flags|=2,f.return=s,x.return=s,f.sibling=x,s.child=f,(s.mode&1)!==0&&oo(s,i.child,null,C),s.child.memoizedState=Gf(C),s.memoizedState=Hf,x);if((s.mode&1)===0)return Jl(i,s,C,null);if(m.data==="$!"){if(f=m.nextSibling&&m.nextSibling.dataset,f)var F=f.dgst;return f=F,x=Error(t(419)),f=Bf(x,f,void 0),Jl(i,s,C,f)}if(F=(C&i.childLanes)!==0,jn||F){if(f=gn,f!==null){switch(C&-C){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=(m&(f.suspendedLanes|C))!==0?0:m,m!==0&&m!==x.retryLane&&(x.retryLane=m,cr(i,m),Ci(f,i,m,-1))}return od(),f=Bf(Error(t(421))),Jl(i,s,C,f)}return m.data==="$?"?(s.flags|=128,s.child=i.child,s=RE.bind(null,i),m._reactRetry=s,null):(i=x.treeContext,ei=Nr(m.nextSibling),Jn=s,Xt=!0,Ei=null,i!==null&&(ui[fi++]=ar,ui[fi++]=lr,ui[fi++]=ps,ar=i.id,lr=i.overflow,ps=s),s=Wf(s,f.children),s.flags|=4096,s)}function m0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),Sf(i.return,s,l)}function jf(i,s,l,f,m){var x=i.memoizedState;x===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:m}:(x.isBackwards=s,x.rendering=null,x.renderingStartTime=0,x.last=f,x.tail=l,x.tailMode=m)}function g0(i,s,l){var f=s.pendingProps,m=f.revealOrder,x=f.tail;if(Un(i,s,f.children,l),f=$t.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&m0(i,l,s);else if(i.tag===19)m0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(Ht($t,f),(s.mode&1)===0)s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)i=l.alternate,i!==null&&Xl(i)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),jf(s,!1,m,l,x);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(i=m.alternate,i!==null&&Xl(i)===null){s.child=m;break}i=m.sibling,m.sibling=l,l=m,m=i}jf(s,!0,l,null,x);break;case"together":jf(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ec(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function fr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),xs|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Wr(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Wr(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function gE(i,s,l){switch(s.tag){case 3:d0(s),so();break;case 5:Pg(s);break;case 1:Wn(s.type)&&Fl(s);break;case 4:Tf(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,m=s.memoizedProps.value;Ht(Hl,f._currentValue),f._currentValue=m;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(Ht($t,$t.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?p0(i,s,l):(Ht($t,$t.current&1),i=fr(i,s,l),i!==null?i.sibling:null);Ht($t,$t.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return g0(i,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),Ht($t,$t.current),f)break;return null;case 22:case 23:return s.lanes=0,c0(i,s,l)}return fr(i,s,l)}var v0,Xf,_0,x0;v0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Xf=function(){},_0=function(i,s,l,f){var m=i.memoizedProps;if(m!==f){i=s.stateNode,vs(zi.current);var x=null;switch(l){case"input":m=_t(i,m),f=_t(i,f),x=[];break;case"select":m=ae({},m,{value:void 0}),f=ae({},f,{value:void 0}),x=[];break;case"textarea":m=Ye(i,m),f=Ye(i,f),x=[];break;default:typeof m.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=Nl)}We(l,f);var C;l=null;for(le in m)if(!f.hasOwnProperty(le)&&m.hasOwnProperty(le)&&m[le]!=null)if(le==="style"){var F=m[le];for(C in F)F.hasOwnProperty(C)&&(l||(l={}),l[C]="")}else le!=="dangerouslySetInnerHTML"&&le!=="children"&&le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&le!=="autoFocus"&&(o.hasOwnProperty(le)?x||(x=[]):(x=x||[]).push(le,null));for(le in f){var z=f[le];if(F=m?.[le],f.hasOwnProperty(le)&&z!==F&&(z!=null||F!=null))if(le==="style")if(F){for(C in F)!F.hasOwnProperty(C)||z&&z.hasOwnProperty(C)||(l||(l={}),l[C]="");for(C in z)z.hasOwnProperty(C)&&F[C]!==z[C]&&(l||(l={}),l[C]=z[C])}else l||(x||(x=[]),x.push(le,l)),l=z;else le==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,F=F?F.__html:void 0,z!=null&&F!==z&&(x=x||[]).push(le,z)):le==="children"?typeof z!="string"&&typeof z!="number"||(x=x||[]).push(le,""+z):le!=="suppressContentEditableWarning"&&le!=="suppressHydrationWarning"&&(o.hasOwnProperty(le)?(z!=null&&le==="onScroll"&&Wt("scroll",i),x||F===z||(x=[])):(x=x||[]).push(le,z))}l&&(x=x||[]).push("style",l);var le=x;(s.updateQueue=le)&&(s.flags|=4)}},x0=function(i,s,l,f){l!==f&&(s.flags|=4)};function Ca(i,s){if(!Xt)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Rn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags&14680064,f|=m.flags&14680064,m.return=i,m=m.sibling;else for(m=i.child;m!==null;)l|=m.lanes|m.childLanes,f|=m.subtreeFlags,f|=m.flags,m.return=i,m=m.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function vE(i,s,l){var f=s.pendingProps;switch(pf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(s),null;case 1:return Wn(s.type)&&Ul(),Rn(s),null;case 3:return f=s.stateNode,co(),jt(Gn),jt(An),Cf(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(Vl(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Ei!==null&&(id(Ei),Ei=null))),Xf(i,s),Rn(s),null;case 5:wf(s);var m=vs(Ma.current);if(l=s.type,i!==null&&s.stateNode!=null)_0(i,s,l,f,m),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Rn(s),null}if(i=vs(zi.current),Vl(s)){f=s.stateNode,l=s.type;var x=s.memoizedProps;switch(f[Vi]=s,f[va]=x,i=(s.mode&1)!==0,l){case"dialog":Wt("cancel",f),Wt("close",f);break;case"iframe":case"object":case"embed":Wt("load",f);break;case"video":case"audio":for(m=0;m<pa.length;m++)Wt(pa[m],f);break;case"source":Wt("error",f);break;case"img":case"image":case"link":Wt("error",f),Wt("load",f);break;case"details":Wt("toggle",f);break;case"input":At(f,x),Wt("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!x.multiple},Wt("invalid",f);break;case"textarea":L(f,x),Wt("invalid",f)}We(l,x),m=null;for(var C in x)if(x.hasOwnProperty(C)){var F=x[C];C==="children"?typeof F=="string"?f.textContent!==F&&(x.suppressHydrationWarning!==!0&&Ll(f.textContent,F,i),m=["children",F]):typeof F=="number"&&f.textContent!==""+F&&(x.suppressHydrationWarning!==!0&&Ll(f.textContent,F,i),m=["children",""+F]):o.hasOwnProperty(C)&&F!=null&&C==="onScroll"&&Wt("scroll",f)}switch(l){case"input":nt(f),k(f,x,!0);break;case"textarea":nt(f),Y(f);break;case"select":case"option":break;default:typeof x.onClick=="function"&&(f.onclick=Nl)}f=m,s.updateQueue=f,f!==null&&(s.flags|=4)}else{C=m.nodeType===9?m:m.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=me(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=C.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=C.createElement(l,{is:f.is}):(i=C.createElement(l),l==="select"&&(C=i,f.multiple?C.multiple=!0:f.size&&(C.size=f.size))):i=C.createElementNS(i,l),i[Vi]=s,i[va]=f,v0(i,s,!1,!1),s.stateNode=i;e:{switch(C=Ie(l,f),l){case"dialog":Wt("cancel",i),Wt("close",i),m=f;break;case"iframe":case"object":case"embed":Wt("load",i),m=f;break;case"video":case"audio":for(m=0;m<pa.length;m++)Wt(pa[m],i);m=f;break;case"source":Wt("error",i),m=f;break;case"img":case"image":case"link":Wt("error",i),Wt("load",i),m=f;break;case"details":Wt("toggle",i),m=f;break;case"input":At(i,f),m=_t(i,f),Wt("invalid",i);break;case"option":m=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},m=ae({},f,{value:void 0}),Wt("invalid",i);break;case"textarea":L(i,f),m=Ye(i,f),Wt("invalid",i);break;default:m=f}We(l,m),F=m;for(x in F)if(F.hasOwnProperty(x)){var z=F[x];x==="style"?Ae(i,z):x==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Ge(i,z)):x==="children"?typeof z=="string"?(l!=="textarea"||z!=="")&&Ce(i,z):typeof z=="number"&&Ce(i,""+z):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?z!=null&&x==="onScroll"&&Wt("scroll",i):z!=null&&b(i,x,z,C))}switch(l){case"input":nt(i),k(i,f,!1);break;case"textarea":nt(i),Y(i);break;case"option":f.value!=null&&i.setAttribute("value",""+ce(f.value));break;case"select":i.multiple=!!f.multiple,x=f.value,x!=null?Et(i,!!f.multiple,x,!1):f.defaultValue!=null&&Et(i,!!f.multiple,f.defaultValue,!0);break;default:typeof m.onClick=="function"&&(i.onclick=Nl)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Rn(s),null;case 6:if(i&&s.stateNode!=null)x0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=vs(Ma.current),vs(zi.current),Vl(s)){if(f=s.stateNode,l=s.memoizedProps,f[Vi]=s,(x=f.nodeValue!==l)&&(i=Jn,i!==null))switch(i.tag){case 3:Ll(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&Ll(f.nodeValue,l,(i.mode&1)!==0)}x&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[Vi]=s,s.stateNode=f}return Rn(s),null;case 13:if(jt($t),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(Xt&&ei!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Mg(),so(),s.flags|=98560,x=!1;else if(x=Vl(s),f!==null&&f.dehydrated!==null){if(i===null){if(!x)throw Error(t(318));if(x=s.memoizedState,x=x!==null?x.dehydrated:null,!x)throw Error(t(317));x[Vi]=s}else so(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Rn(s),x=!1}else Ei!==null&&(id(Ei),Ei=null),x=!0;if(!x)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||($t.current&1)!==0?fn===0&&(fn=3):od())),s.updateQueue!==null&&(s.flags|=4),Rn(s),null);case 4:return co(),Xf(i,s),i===null&&ma(s.stateNode.containerInfo),Rn(s),null;case 10:return yf(s.type._context),Rn(s),null;case 17:return Wn(s.type)&&Ul(),Rn(s),null;case 19:if(jt($t),x=s.memoizedState,x===null)return Rn(s),null;if(f=(s.flags&128)!==0,C=x.rendering,C===null)if(f)Ca(x,!1);else{if(fn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(C=Xl(i),C!==null){for(s.flags|=128,Ca(x,!1),f=C.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)x=l,i=f,x.flags&=14680066,C=x.alternate,C===null?(x.childLanes=0,x.lanes=i,x.child=null,x.subtreeFlags=0,x.memoizedProps=null,x.memoizedState=null,x.updateQueue=null,x.dependencies=null,x.stateNode=null):(x.childLanes=C.childLanes,x.lanes=C.lanes,x.child=C.child,x.subtreeFlags=0,x.deletions=null,x.memoizedProps=C.memoizedProps,x.memoizedState=C.memoizedState,x.updateQueue=C.updateQueue,x.type=C.type,i=C.dependencies,x.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return Ht($t,$t.current&1|2),s.child}i=i.sibling}x.tail!==null&&R()>po&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304)}else{if(!f)if(i=Xl(C),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Ca(x,!0),x.tail===null&&x.tailMode==="hidden"&&!C.alternate&&!Xt)return Rn(s),null}else 2*R()-x.renderingStartTime>po&&l!==1073741824&&(s.flags|=128,f=!0,Ca(x,!1),s.lanes=4194304);x.isBackwards?(C.sibling=s.child,s.child=C):(l=x.last,l!==null?l.sibling=C:s.child=C,x.last=C)}return x.tail!==null?(s=x.tail,x.rendering=s,x.tail=s.sibling,x.renderingStartTime=R(),s.sibling=null,l=$t.current,Ht($t,f?l&1|2:l&1),s):(Rn(s),null);case 22:case 23:return sd(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(ti&1073741824)!==0&&(Rn(s),s.subtreeFlags&6&&(s.flags|=8192)):Rn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function _E(i,s){switch(pf(s),s.tag){case 1:return Wn(s.type)&&Ul(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return co(),jt(Gn),jt(An),Cf(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return wf(s),null;case 13:if(jt($t),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));so()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return jt($t),null;case 4:return co(),null;case 10:return yf(s.type._context),null;case 22:case 23:return sd(),null;case 24:return null;default:return null}}var tc=!1,bn=!1,xE=typeof WeakSet=="function"?WeakSet:Set,ze=null;function fo(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){Kt(i,s,f)}else l.current=null}function $f(i,s,l){try{l()}catch(f){Kt(i,s,f)}}var y0=!1;function yE(i,s){if(sf=Sl,i=Qm(),Ku(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var m=f.anchorOffset,x=f.focusNode;f=f.focusOffset;try{l.nodeType,x.nodeType}catch{l=null;break e}var C=0,F=-1,z=-1,le=0,xe=0,ye=i,_e=null;t:for(;;){for(var Be;ye!==l||m!==0&&ye.nodeType!==3||(F=C+m),ye!==x||f!==0&&ye.nodeType!==3||(z=C+f),ye.nodeType===3&&(C+=ye.nodeValue.length),(Be=ye.firstChild)!==null;)_e=ye,ye=Be;for(;;){if(ye===i)break t;if(_e===l&&++le===m&&(F=C),_e===x&&++xe===f&&(z=C),(Be=ye.nextSibling)!==null)break;ye=_e,_e=ye.parentNode}ye=Be}l=F===-1||z===-1?null:{start:F,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(of={focusedElem:i,selectionRange:l},Sl=!1,ze=s;ze!==null;)if(s=ze,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,ze=i;else for(;ze!==null;){s=ze;try{var Xe=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(Xe!==null){var Ke=Xe.memoizedProps,tn=Xe.memoizedState,te=s.stateNode,j=te.getSnapshotBeforeUpdate(s.elementType===s.type?Ke:Ti(s.type,Ke),tn);te.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var re=s.stateNode.containerInfo;re.nodeType===1?re.textContent="":re.nodeType===9&&re.documentElement&&re.removeChild(re.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Kt(s,s.return,Te)}if(i=s.sibling,i!==null){i.return=s.return,ze=i;break}ze=s.return}return Xe=y0,y0=!1,Xe}function Ra(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var m=f=f.next;do{if((m.tag&i)===i){var x=m.destroy;m.destroy=void 0,x!==void 0&&$f(s,l,x)}m=m.next}while(m!==f)}}function nc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Yf(i){var s=i.ref;if(s!==null){var l=i.stateNode;i.tag,i=l,typeof s=="function"?s(i):s.current=i}}function S0(i){var s=i.alternate;s!==null&&(i.alternate=null,S0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[Vi],delete s[va],delete s[uf],delete s[nE],delete s[iE])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function M0(i){return i.tag===5||i.tag===3||i.tag===4}function E0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||M0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function qf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Nl));else if(f!==4&&(i=i.child,i!==null))for(qf(i,s,l),i=i.sibling;i!==null;)qf(i,s,l),i=i.sibling}function Kf(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Kf(i,s,l),i=i.sibling;i!==null;)Kf(i,s,l),i=i.sibling}var Sn=null,wi=!1;function kr(i,s,l){for(l=l.child;l!==null;)T0(i,s,l),l=l.sibling}function T0(i,s,l){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(Pe,l)}catch{}switch(l.tag){case 5:bn||fo(l,s);case 6:var f=Sn,m=wi;Sn=null,kr(i,s,l),Sn=f,wi=m,Sn!==null&&(wi?(i=Sn,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):Sn.removeChild(l.stateNode));break;case 18:Sn!==null&&(wi?(i=Sn,l=l.stateNode,i.nodeType===8?cf(i.parentNode,l):i.nodeType===1&&cf(i,l),oa(i)):cf(Sn,l.stateNode));break;case 4:f=Sn,m=wi,Sn=l.stateNode.containerInfo,wi=!0,kr(i,s,l),Sn=f,wi=m;break;case 0:case 11:case 14:case 15:if(!bn&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){m=f=f.next;do{var x=m,C=x.destroy;x=x.tag,C!==void 0&&((x&2)!==0||(x&4)!==0)&&$f(l,s,C),m=m.next}while(m!==f)}kr(i,s,l);break;case 1:if(!bn&&(fo(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(F){Kt(l,s,F)}kr(i,s,l);break;case 21:kr(i,s,l);break;case 22:l.mode&1?(bn=(f=bn)||l.memoizedState!==null,kr(i,s,l),bn=f):kr(i,s,l);break;default:kr(i,s,l)}}function w0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new xE),s.forEach(function(f){var m=bE.bind(null,i,f);l.has(f)||(l.add(f),f.then(m,m))})}}function Ai(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var m=l[f];try{var x=i,C=s,F=C;e:for(;F!==null;){switch(F.tag){case 5:Sn=F.stateNode,wi=!1;break e;case 3:Sn=F.stateNode.containerInfo,wi=!0;break e;case 4:Sn=F.stateNode.containerInfo,wi=!0;break e}F=F.return}if(Sn===null)throw Error(t(160));T0(x,C,m),Sn=null,wi=!1;var z=m.alternate;z!==null&&(z.return=null),m.return=null}catch(le){Kt(m,s,le)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)A0(s,i),s=s.sibling}function A0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(Ai(s,i),Gi(i),f&4){try{Ra(3,i,i.return),nc(3,i)}catch(Ke){Kt(i,i.return,Ke)}try{Ra(5,i,i.return)}catch(Ke){Kt(i,i.return,Ke)}}break;case 1:Ai(s,i),Gi(i),f&512&&l!==null&&fo(l,l.return);break;case 5:if(Ai(s,i),Gi(i),f&512&&l!==null&&fo(l,l.return),i.flags&32){var m=i.stateNode;try{Ce(m,"")}catch(Ke){Kt(i,i.return,Ke)}}if(f&4&&(m=i.stateNode,m!=null)){var x=i.memoizedProps,C=l!==null?l.memoizedProps:x,F=i.type,z=i.updateQueue;if(i.updateQueue=null,z!==null)try{F==="input"&&x.type==="radio"&&x.name!=null&&Oe(m,x),Ie(F,C);var le=Ie(F,x);for(C=0;C<z.length;C+=2){var xe=z[C],ye=z[C+1];xe==="style"?Ae(m,ye):xe==="dangerouslySetInnerHTML"?Ge(m,ye):xe==="children"?Ce(m,ye):b(m,xe,ye,le)}switch(F){case"input":ut(m,x);break;case"textarea":T(m,x);break;case"select":var _e=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!x.multiple;var Be=x.value;Be!=null?Et(m,!!x.multiple,Be,!1):_e!==!!x.multiple&&(x.defaultValue!=null?Et(m,!!x.multiple,x.defaultValue,!0):Et(m,!!x.multiple,x.multiple?[]:"",!1))}m[va]=x}catch(Ke){Kt(i,i.return,Ke)}}break;case 6:if(Ai(s,i),Gi(i),f&4){if(i.stateNode===null)throw Error(t(162));m=i.stateNode,x=i.memoizedProps;try{m.nodeValue=x}catch(Ke){Kt(i,i.return,Ke)}}break;case 3:if(Ai(s,i),Gi(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{oa(s.containerInfo)}catch(Ke){Kt(i,i.return,Ke)}break;case 4:Ai(s,i),Gi(i);break;case 13:Ai(s,i),Gi(i),m=i.child,m.flags&8192&&(x=m.memoizedState!==null,m.stateNode.isHidden=x,!x||m.alternate!==null&&m.alternate.memoizedState!==null||(Jf=R())),f&4&&w0(i);break;case 22:if(xe=l!==null&&l.memoizedState!==null,i.mode&1?(bn=(le=bn)||xe,Ai(s,i),bn=le):Ai(s,i),Gi(i),f&8192){if(le=i.memoizedState!==null,(i.stateNode.isHidden=le)&&!xe&&(i.mode&1)!==0)for(ze=i,xe=i.child;xe!==null;){for(ye=ze=xe;ze!==null;){switch(_e=ze,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ra(4,_e,_e.return);break;case 1:fo(_e,_e.return);var Xe=_e.stateNode;if(typeof Xe.componentWillUnmount=="function"){f=_e,l=_e.return;try{s=f,Xe.props=s.memoizedProps,Xe.state=s.memoizedState,Xe.componentWillUnmount()}catch(Ke){Kt(f,l,Ke)}}break;case 5:fo(_e,_e.return);break;case 22:if(_e.memoizedState!==null){b0(ye);continue}}Be!==null?(Be.return=_e,ze=Be):b0(ye)}xe=xe.sibling}e:for(xe=null,ye=i;;){if(ye.tag===5){if(xe===null){xe=ye;try{m=ye.stateNode,le?(x=m.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none"):(F=ye.stateNode,z=ye.memoizedProps.style,C=z!=null&&z.hasOwnProperty("display")?z.display:null,F.style.display=Se("display",C))}catch(Ke){Kt(i,i.return,Ke)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=le?"":ye.memoizedProps}catch(Ke){Kt(i,i.return,Ke)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===i)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===i)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===i)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:Ai(s,i),Gi(i),f&4&&w0(i);break;case 21:break;default:Ai(s,i),Gi(i)}}function Gi(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(M0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var m=f.stateNode;f.flags&32&&(Ce(m,""),f.flags&=-33);var x=E0(i);Kf(i,x,m);break;case 3:case 4:var C=f.stateNode.containerInfo,F=E0(i);qf(i,F,C);break;default:throw Error(t(161))}}catch(z){Kt(i,i.return,z)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function SE(i,s,l){ze=i,C0(i)}function C0(i,s,l){for(var f=(i.mode&1)!==0;ze!==null;){var m=ze,x=m.child;if(m.tag===22&&f){var C=m.memoizedState!==null||tc;if(!C){var F=m.alternate,z=F!==null&&F.memoizedState!==null||bn;F=tc;var le=bn;if(tc=C,(bn=z)&&!le)for(ze=m;ze!==null;)C=ze,z=C.child,C.tag===22&&C.memoizedState!==null?P0(m):z!==null?(z.return=C,ze=z):P0(m);for(;x!==null;)ze=x,C0(x),x=x.sibling;ze=m,tc=F,bn=le}R0(i)}else(m.subtreeFlags&8772)!==0&&x!==null?(x.return=m,ze=x):R0(i)}}function R0(i){for(;ze!==null;){var s=ze;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:bn||nc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!bn)if(l===null)f.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Ti(s.type,l.memoizedProps);f.componentDidUpdate(m,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var x=s.updateQueue;x!==null&&bg(s,x,f);break;case 3:var C=s.updateQueue;if(C!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}bg(s,C,l)}break;case 5:var F=s.stateNode;if(l===null&&s.flags&4){l=F;var z=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&l.focus();break;case"img":z.src&&(l.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var le=s.alternate;if(le!==null){var xe=le.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&oa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}bn||s.flags&512&&Yf(s)}catch(_e){Kt(s,s.return,_e)}}if(s===i){ze=null;break}if(l=s.sibling,l!==null){l.return=s.return,ze=l;break}ze=s.return}}function b0(i){for(;ze!==null;){var s=ze;if(s===i){ze=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ze=l;break}ze=s.return}}function P0(i){for(;ze!==null;){var s=ze;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{nc(4,s)}catch(z){Kt(s,l,z)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var m=s.return;try{f.componentDidMount()}catch(z){Kt(s,m,z)}}var x=s.return;try{Yf(s)}catch(z){Kt(s,x,z)}break;case 5:var C=s.return;try{Yf(s)}catch(z){Kt(s,C,z)}}}catch(z){Kt(s,s.return,z)}if(s===i){ze=null;break}var F=s.sibling;if(F!==null){F.return=s.return,ze=F;break}ze=s.return}}var ME=Math.ceil,ic=P.ReactCurrentDispatcher,Zf=P.ReactCurrentOwner,pi=P.ReactCurrentBatchConfig,bt=0,gn=null,on=null,Mn=0,ti=0,ho=Ir(0),fn=0,ba=null,xs=0,rc=0,Qf=0,Pa=null,Xn=null,Jf=0,po=1/0,dr=null,sc=!1,ed=null,Vr=null,oc=!1,zr=null,ac=0,Da=0,td=null,lc=-1,cc=0;function Fn(){return(bt&6)!==0?R():lc!==-1?lc:lc=R()}function Hr(i){return(i.mode&1)===0?1:(bt&2)!==0&&Mn!==0?Mn&-Mn:sE.transition!==null?(cc===0&&(cc=zn()),cc):(i=lt,i!==0||(i=window.event,i=i===void 0?16:Lm(i.type)),i)}function Ci(i,s,l,f){if(50<Da)throw Da=0,td=null,Error(t(185));Zn(i,l,f),((bt&2)===0||i!==gn)&&(i===gn&&((bt&2)===0&&(rc|=l),fn===4&&Gr(i,Mn)),$n(i,f),l===1&&bt===0&&(s.mode&1)===0&&(po=R()+500,Ol&&Fr()))}function $n(i,s){var l=i.callbackNode;In(i,s);var f=Jt(i,i===gn?Mn:0);if(f===0)l!==null&&_l(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&_l(l),s===1)i.tag===0?rE(L0.bind(null,i)):vg(L0.bind(null,i)),eE(function(){(bt&6)===0&&Fr()}),l=null;else{switch(Si(f)){case 1:l=fe;break;case 4:l=se;break;case 16:l=ie;break;case 536870912:l=ke;break;default:l=ie}l=V0(l,D0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function D0(i,s){if(lc=-1,cc=0,(bt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(mo()&&i.callbackNode!==l)return null;var f=Jt(i,i===gn?Mn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=uc(i,f);else{s=f;var m=bt;bt|=2;var x=I0();(gn!==i||Mn!==s)&&(dr=null,po=R()+500,Ss(i,s));do try{wE();break}catch(F){N0(i,F)}while(!0);xf(),ic.current=x,bt=m,on!==null?s=0:(gn=null,Mn=0,s=fn)}if(s!==0){if(s===2&&(m=Mt(i),m!==0&&(f=m,s=nd(i,m))),s===1)throw l=ba,Ss(i,0),Gr(i,f),$n(i,R()),l;if(s===6)Gr(i,f);else{if(m=i.current.alternate,(f&30)===0&&!EE(m)&&(s=uc(i,f),s===2&&(x=Mt(i),x!==0&&(f=x,s=nd(i,x))),s===1))throw l=ba,Ss(i,0),Gr(i,f),$n(i,R()),l;switch(i.finishedWork=m,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Ms(i,Xn,dr);break;case 3:if(Gr(i,f),(f&130023424)===f&&(s=Jf+500-R(),10<s)){if(Jt(i,0)!==0)break;if(m=i.suspendedLanes,(m&f)!==f){Fn(),i.pingedLanes|=i.suspendedLanes&m;break}i.timeoutHandle=lf(Ms.bind(null,i,Xn,dr),s);break}Ms(i,Xn,dr);break;case 4:if(Gr(i,f),(f&4194240)===f)break;for(s=i.eventTimes,m=-1;0<f;){var C=31-it(f);x=1<<C,C=s[C],C>m&&(m=C),f&=~x}if(f=m,f=R()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*ME(f/1960))-f,10<f){i.timeoutHandle=lf(Ms.bind(null,i,Xn,dr),f);break}Ms(i,Xn,dr);break;case 5:Ms(i,Xn,dr);break;default:throw Error(t(329))}}}return $n(i,R()),i.callbackNode===l?D0.bind(null,i):null}function nd(i,s){var l=Pa;return i.current.memoizedState.isDehydrated&&(Ss(i,s).flags|=256),i=uc(i,s),i!==2&&(s=Xn,Xn=l,s!==null&&id(s)),i}function id(i){Xn===null?Xn=i:Xn.push.apply(Xn,i)}function EE(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var m=l[f],x=m.getSnapshot;m=m.value;try{if(!Mi(x(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Gr(i,s){for(s&=~Qf,s&=~rc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-it(s),f=1<<l;i[l]=-1,s&=~f}}function L0(i){if((bt&6)!==0)throw Error(t(327));mo();var s=Jt(i,0);if((s&1)===0)return $n(i,R()),null;var l=uc(i,s);if(i.tag!==0&&l===2){var f=Mt(i);f!==0&&(s=f,l=nd(i,f))}if(l===1)throw l=ba,Ss(i,0),Gr(i,s),$n(i,R()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Ms(i,Xn,dr),$n(i,R()),null}function rd(i,s){var l=bt;bt|=1;try{return i(s)}finally{bt=l,bt===0&&(po=R()+500,Ol&&Fr())}}function ys(i){zr!==null&&zr.tag===0&&(bt&6)===0&&mo();var s=bt;bt|=1;var l=pi.transition,f=lt;try{if(pi.transition=null,lt=1,i)return i()}finally{lt=f,pi.transition=l,bt=s,(bt&6)===0&&Fr()}}function sd(){ti=ho.current,jt(ho)}function Ss(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,JM(l)),on!==null)for(l=on.return;l!==null;){var f=l;switch(pf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&Ul();break;case 3:co(),jt(Gn),jt(An),Cf();break;case 5:wf(f);break;case 4:co();break;case 13:jt($t);break;case 19:jt($t);break;case 10:yf(f.type._context);break;case 22:case 23:sd()}l=l.return}if(gn=i,on=i=Wr(i.current,null),Mn=ti=s,fn=0,ba=null,Qf=rc=xs=0,Xn=Pa=null,gs!==null){for(s=0;s<gs.length;s++)if(l=gs[s],f=l.interleaved,f!==null){l.interleaved=null;var m=f.next,x=l.pending;if(x!==null){var C=x.next;x.next=m,f.next=C}l.pending=f}gs=null}return i}function N0(i,s){do{var l=on;try{if(xf(),$l.current=Zl,Yl){for(var f=Yt.memoizedState;f!==null;){var m=f.queue;m!==null&&(m.pending=null),f=f.next}Yl=!1}if(_s=0,mn=un=Yt=null,Ea=!1,Ta=0,Zf.current=null,l===null||l.return===null){fn=1,ba=s,on=null;break}e:{var x=i,C=l.return,F=l,z=s;if(s=Mn,F.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var le=z,xe=F,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var _e=xe.alternate;_e?(xe.updateQueue=_e.updateQueue,xe.memoizedState=_e.memoizedState,xe.lanes=_e.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Be=r0(C);if(Be!==null){Be.flags&=-257,s0(Be,C,F,x,s),Be.mode&1&&i0(x,le,s),s=Be,z=le;var Xe=s.updateQueue;if(Xe===null){var Ke=new Set;Ke.add(z),s.updateQueue=Ke}else Xe.add(z);break e}else{if((s&1)===0){i0(x,le,s),od();break e}z=Error(t(426))}}else if(Xt&&F.mode&1){var tn=r0(C);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),s0(tn,C,F,x,s),vf(uo(z,F));break e}}x=z=uo(z,F),fn!==4&&(fn=2),Pa===null?Pa=[x]:Pa.push(x),x=C;do{switch(x.tag){case 3:x.flags|=65536,s&=-s,x.lanes|=s;var te=t0(x,z,s);Rg(x,te);break e;case 1:F=z;var j=x.type,re=x.stateNode;if((x.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||re!==null&&typeof re.componentDidCatch=="function"&&(Vr===null||!Vr.has(re)))){x.flags|=65536,s&=-s,x.lanes|=s;var Te=n0(x,F,s);Rg(x,Te);break e}}x=x.return}while(x!==null)}F0(l)}catch(Je){s=Je,on===l&&l!==null&&(on=l=l.return);continue}break}while(!0)}function I0(){var i=ic.current;return ic.current=Zl,i===null?Zl:i}function od(){(fn===0||fn===3||fn===2)&&(fn=4),gn===null||(xs&268435455)===0&&(rc&268435455)===0||Gr(gn,Mn)}function uc(i,s){var l=bt;bt|=2;var f=I0();(gn!==i||Mn!==s)&&(dr=null,Ss(i,s));do try{TE();break}catch(m){N0(i,m)}while(!0);if(xf(),bt=l,ic.current=f,on!==null)throw Error(t(261));return gn=null,Mn=0,fn}function TE(){for(;on!==null;)U0(on)}function wE(){for(;on!==null&&!Fu();)U0(on)}function U0(i){var s=k0(i.alternate,i,ti);i.memoizedProps=i.pendingProps,s===null?F0(i):on=s,Zf.current=null}function F0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=vE(l,s,ti),l!==null){on=l;return}}else{if(l=_E(l,s),l!==null){l.flags&=32767,on=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{fn=6,on=null;return}}if(s=s.sibling,s!==null){on=s;return}on=s=i}while(s!==null);fn===0&&(fn=5)}function Ms(i,s,l){var f=lt,m=pi.transition;try{pi.transition=null,lt=1,AE(i,s,l,f)}finally{pi.transition=m,lt=f}return null}function AE(i,s,l,f){do mo();while(zr!==null);if((bt&6)!==0)throw Error(t(327));l=i.finishedWork;var m=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var x=l.lanes|l.childLanes;if(Ar(i,x),i===gn&&(on=gn=null,Mn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||oc||(oc=!0,V0(ie,function(){return mo(),null})),x=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||x){x=pi.transition,pi.transition=null;var C=lt;lt=1;var F=bt;bt|=4,Zf.current=null,yE(i,l),A0(l,i),XM(of),Sl=!!sf,of=sf=null,i.current=l,SE(l),Ou(),bt=F,lt=C,pi.transition=x}else i.current=l;if(oc&&(oc=!1,zr=i,ac=m),x=i.pendingLanes,x===0&&(Vr=null),et(l.stateNode),$n(i,R()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)m=s[l],f(m.value,{componentStack:m.stack,digest:m.digest});if(sc)throw sc=!1,i=ed,ed=null,i;return(ac&1)!==0&&i.tag!==0&&mo(),x=i.pendingLanes,(x&1)!==0?i===td?Da++:(Da=0,td=i):Da=0,Fr(),null}function mo(){if(zr!==null){var i=Si(ac),s=pi.transition,l=lt;try{if(pi.transition=null,lt=16>i?16:i,zr===null)var f=!1;else{if(i=zr,zr=null,ac=0,(bt&6)!==0)throw Error(t(331));var m=bt;for(bt|=4,ze=i.current;ze!==null;){var x=ze,C=x.child;if((ze.flags&16)!==0){var F=x.deletions;if(F!==null){for(var z=0;z<F.length;z++){var le=F[z];for(ze=le;ze!==null;){var xe=ze;switch(xe.tag){case 0:case 11:case 15:Ra(8,xe,x)}var ye=xe.child;if(ye!==null)ye.return=xe,ze=ye;else for(;ze!==null;){xe=ze;var _e=xe.sibling,Be=xe.return;if(S0(xe),xe===le){ze=null;break}if(_e!==null){_e.return=Be,ze=_e;break}ze=Be}}}var Xe=x.alternate;if(Xe!==null){var Ke=Xe.child;if(Ke!==null){Xe.child=null;do{var tn=Ke.sibling;Ke.sibling=null,Ke=tn}while(Ke!==null)}}ze=x}}if((x.subtreeFlags&2064)!==0&&C!==null)C.return=x,ze=C;else e:for(;ze!==null;){if(x=ze,(x.flags&2048)!==0)switch(x.tag){case 0:case 11:case 15:Ra(9,x,x.return)}var te=x.sibling;if(te!==null){te.return=x.return,ze=te;break e}ze=x.return}}var j=i.current;for(ze=j;ze!==null;){C=ze;var re=C.child;if((C.subtreeFlags&2064)!==0&&re!==null)re.return=C,ze=re;else e:for(C=j;ze!==null;){if(F=ze,(F.flags&2048)!==0)try{switch(F.tag){case 0:case 11:case 15:nc(9,F)}}catch(Je){Kt(F,F.return,Je)}if(F===C){ze=null;break e}var Te=F.sibling;if(Te!==null){Te.return=F.return,ze=Te;break e}ze=F.return}}if(bt=m,Fr(),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(Pe,i)}catch{}f=!0}return f}finally{lt=l,pi.transition=s}}return!1}function O0(i,s,l){s=uo(l,s),s=t0(i,s,1),i=Br(i,s,1),s=Fn(),i!==null&&(Zn(i,1,s),$n(i,s))}function Kt(i,s,l){if(i.tag===3)O0(i,i,l);else for(;s!==null;){if(s.tag===3){O0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(Vr===null||!Vr.has(f))){i=uo(l,i),i=n0(s,i,1),s=Br(s,i,1),i=Fn(),s!==null&&(Zn(s,1,i),$n(s,i));break}}s=s.return}}function CE(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=Fn(),i.pingedLanes|=i.suspendedLanes&l,gn===i&&(Mn&l)===l&&(fn===4||fn===3&&(Mn&130023424)===Mn&&500>R()-Jf?Ss(i,0):Qf|=l),$n(i,s)}function B0(i,s){s===0&&((i.mode&1)===0?s=1:(s=kt,kt<<=1,(kt&130023424)===0&&(kt=4194304)));var l=Fn();i=cr(i,s),i!==null&&(Zn(i,s,l),$n(i,l))}function RE(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),B0(i,l)}function bE(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,m=i.memoizedState;m!==null&&(l=m.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),B0(i,l)}var k0;k0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||Gn.current)jn=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return jn=!1,gE(i,s,l);jn=(i.flags&131072)!==0}else jn=!1,Xt&&(s.flags&1048576)!==0&&_g(s,kl,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;ec(i,s),i=s.pendingProps;var m=no(s,An.current);lo(s,l),m=Pf(null,s,f,i,m,l);var x=Df();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Wn(f)?(x=!0,Fl(s)):x=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,Ef(s),m.updater=Ql,s.stateNode=m,m._reactInternals=s,Of(s,f,i,l),s=zf(null,s,f,!0,x,l)):(s.tag=0,Xt&&x&&hf(s),Un(null,s,m,l),s=s.child),s;case 16:f=s.elementType;e:{switch(ec(i,s),i=s.pendingProps,m=f._init,f=m(f._payload),s.type=f,m=s.tag=DE(f),i=Ti(f,i),m){case 0:s=Vf(null,s,f,i,l);break e;case 1:s=f0(null,s,f,i,l);break e;case 11:s=o0(null,s,f,i,l);break e;case 14:s=a0(null,s,f,Ti(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ti(f,m),Vf(i,s,f,m,l);case 1:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ti(f,m),f0(i,s,f,m,l);case 3:e:{if(d0(s),i===null)throw Error(t(387));f=s.pendingProps,x=s.memoizedState,m=x.element,Cg(i,s),jl(s,f,null,l);var C=s.memoizedState;if(f=C.element,x.isDehydrated)if(x={element:f,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},s.updateQueue.baseState=x,s.memoizedState=x,s.flags&256){m=uo(Error(t(423)),s),s=h0(i,s,f,l,m);break e}else if(f!==m){m=uo(Error(t(424)),s),s=h0(i,s,f,l,m);break e}else for(ei=Nr(s.stateNode.containerInfo.firstChild),Jn=s,Xt=!0,Ei=null,l=wg(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(so(),f===m){s=fr(i,s,l);break e}Un(i,s,f,l)}s=s.child}return s;case 5:return Pg(s),i===null&&gf(s),f=s.type,m=s.pendingProps,x=i!==null?i.memoizedProps:null,C=m.children,af(f,m)?C=null:x!==null&&af(f,x)&&(s.flags|=32),u0(i,s),Un(i,s,C,l),s.child;case 6:return i===null&&gf(s),null;case 13:return p0(i,s,l);case 4:return Tf(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=oo(s,null,f,l):Un(i,s,f,l),s.child;case 11:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ti(f,m),o0(i,s,f,m,l);case 7:return Un(i,s,s.pendingProps,l),s.child;case 8:return Un(i,s,s.pendingProps.children,l),s.child;case 12:return Un(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,m=s.pendingProps,x=s.memoizedProps,C=m.value,Ht(Hl,f._currentValue),f._currentValue=C,x!==null)if(Mi(x.value,C)){if(x.children===m.children&&!Gn.current){s=fr(i,s,l);break e}}else for(x=s.child,x!==null&&(x.return=s);x!==null;){var F=x.dependencies;if(F!==null){C=x.child;for(var z=F.firstContext;z!==null;){if(z.context===f){if(x.tag===1){z=ur(-1,l&-l),z.tag=2;var le=x.updateQueue;if(le!==null){le=le.shared;var xe=le.pending;xe===null?z.next=z:(z.next=xe.next,xe.next=z),le.pending=z}}x.lanes|=l,z=x.alternate,z!==null&&(z.lanes|=l),Sf(x.return,l,s),F.lanes|=l;break}z=z.next}}else if(x.tag===10)C=x.type===s.type?null:x.child;else if(x.tag===18){if(C=x.return,C===null)throw Error(t(341));C.lanes|=l,F=C.alternate,F!==null&&(F.lanes|=l),Sf(C,l,s),C=x.sibling}else C=x.child;if(C!==null)C.return=x;else for(C=x;C!==null;){if(C===s){C=null;break}if(x=C.sibling,x!==null){x.return=C.return,C=x;break}C=C.return}x=C}Un(i,s,m.children,l),s=s.child}return s;case 9:return m=s.type,f=s.pendingProps.children,lo(s,l),m=di(m),f=f(m),s.flags|=1,Un(i,s,f,l),s.child;case 14:return f=s.type,m=Ti(f,s.pendingProps),m=Ti(f.type,m),a0(i,s,f,m,l);case 15:return l0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,m=s.pendingProps,m=s.elementType===f?m:Ti(f,m),ec(i,s),s.tag=1,Wn(f)?(i=!0,Fl(s)):i=!1,lo(s,l),Jg(s,f,m),Of(s,f,m,l),zf(null,s,f,!0,i,l);case 19:return g0(i,s,l);case 22:return c0(i,s,l)}throw Error(t(156,s.tag))};function V0(i,s){return vl(i,s)}function PE(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(i,s,l,f){return new PE(i,s,l,f)}function ad(i){return i=i.prototype,!(!i||!i.isReactComponent)}function DE(i){if(typeof i=="function")return ad(i)?1:0;if(i!=null){if(i=i.$$typeof,i===Q)return 11;if(i===G)return 14}return 2}function Wr(i,s){var l=i.alternate;return l===null?(l=mi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function fc(i,s,l,f,m,x){var C=2;if(f=i,typeof i=="function")ad(i)&&(C=1);else if(typeof i=="string")C=5;else e:switch(i){case V:return Es(l.children,m,x,s);case A:C=8,m|=8;break;case D:return i=mi(12,l,s,m|2),i.elementType=D,i.lanes=x,i;case J:return i=mi(13,l,s,m),i.elementType=J,i.lanes=x,i;case ne:return i=mi(19,l,s,m),i.elementType=ne,i.lanes=x,i;case $:return dc(l,m,x,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case K:C=10;break e;case B:C=9;break e;case Q:C=11;break e;case G:C=14;break e;case H:C=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=mi(C,l,s,m),s.elementType=i,s.type=f,s.lanes=x,s}function Es(i,s,l,f){return i=mi(7,i,f,s),i.lanes=l,i}function dc(i,s,l,f){return i=mi(22,i,f,s),i.elementType=$,i.lanes=l,i.stateNode={isHidden:!1},i}function ld(i,s,l){return i=mi(6,i,null,s),i.lanes=l,i}function cd(i,s,l){return s=mi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function LE(i,s,l,f,m){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hn(0),this.expirationTimes=Hn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hn(0),this.identifierPrefix=f,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function ud(i,s,l,f,m,x,C,F,z){return i=new LE(i,s,l,F,z),s===1?(s=1,x===!0&&(s|=8)):s=0,x=mi(3,null,null,s),i.current=x,x.stateNode=i,x.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ef(x),i}function NE(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function z0(i){if(!i)return Ur;i=i._reactInternals;e:{if(ki(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Wn(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(Wn(l))return mg(i,l,s)}return s}function H0(i,s,l,f,m,x,C,F,z){return i=ud(l,f,!0,i,m,x,C,F,z),i.context=z0(null),l=i.current,f=Fn(),m=Hr(l),x=ur(f,m),x.callback=s??null,Br(l,x,m),i.current.lanes=m,Zn(i,m,f),$n(i,f),i}function hc(i,s,l,f){var m=s.current,x=Fn(),C=Hr(m);return l=z0(l),s.context===null?s.context=l:s.pendingContext=l,s=ur(x,C),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=Br(m,s,C),i!==null&&(Ci(i,m,C,x),Wl(i,m,C)),C}function pc(i){return i=i.current,i.child?(i.child.tag===5,i.child.stateNode):null}function G0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function fd(i,s){G0(i,s),(i=i.alternate)&&G0(i,s)}function IE(){return null}var W0=typeof reportError=="function"?reportError:function(i){console.error(i)};function dd(i){this._internalRoot=i}mc.prototype.render=dd.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));hc(i,s,null,null)},mc.prototype.unmount=dd.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;ys(function(){hc(null,i,null,null)}),s[sr]=null}};function mc(i){this._internalRoot=i}mc.prototype.unstable_scheduleHydration=function(i){if(i){var s=ta();i={blockedOn:null,target:i,priority:s};for(var l=0;l<Pr.length&&s!==0&&s<Pr[l].priority;l++);Pr.splice(l,0,i),l===0&&Pm(i)}};function hd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function gc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function j0(){}function UE(i,s,l,f,m){if(m){if(typeof f=="function"){var x=f;f=function(){var le=pc(C);x.call(le)}}var C=H0(s,f,i,0,null,!1,!1,"",j0);return i._reactRootContainer=C,i[sr]=C.current,ma(i.nodeType===8?i.parentNode:i),ys(),C}for(;m=i.lastChild;)i.removeChild(m);if(typeof f=="function"){var F=f;f=function(){var le=pc(z);F.call(le)}}var z=ud(i,0,!1,null,null,!1,!1,"",j0);return i._reactRootContainer=z,i[sr]=z.current,ma(i.nodeType===8?i.parentNode:i),ys(function(){hc(s,z,l,f)}),z}function vc(i,s,l,f,m){var x=l._reactRootContainer;if(x){var C=x;if(typeof m=="function"){var F=m;m=function(){var z=pc(C);F.call(z)}}hc(s,C,i,m)}else C=UE(l,s,i,m,f);return pc(C)}en=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ct(s.pendingLanes);l!==0&&(It(s,l|1),$n(s,R()),(bt&6)===0&&(po=R()+500,Fr()))}break;case 13:ys(function(){var f=cr(i,1);if(f!==null){var m=Fn();Ci(f,i,1,m)}}),fd(i,1)}},ci=function(i){if(i.tag===13){var s=cr(i,134217728);if(s!==null){var l=Fn();Ci(s,i,134217728,l)}fd(i,134217728)}},rr=function(i){if(i.tag===13){var s=Hr(i),l=cr(i,s);if(l!==null){var f=Fn();Ci(l,i,s,f)}fd(i,s)}},ta=function(){return lt},Rm=function(i,s){var l=lt;try{return lt=i,s()}finally{lt=l}},be=function(i,s,l){switch(s){case"input":if(ut(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var m=Il(f);if(!m)throw Error(t(90));Vt(f),ut(f,m)}}}break;case"textarea":T(i,l);break;case"select":s=l.value,s!=null&&Et(i,!!l.multiple,s,!1)}},at=rd,Ot=ys;var FE={usingClientEntryPoint:!1,Events:[_a,eo,Il,he,je,rd]},La={findFiberByHostInstance:ds,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},OE={bundleType:La.bundleType,version:La.version,rendererPackageName:La.rendererPackageName,rendererConfig:La.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:P.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=ml(i),i===null?null:i.stateNode},findFiberByHostInstance:La.findFiberByHostInstance||IE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var _c=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!_c.isDisabled&&_c.supportsFiber)try{Pe=_c.inject(OE),Fe=_c}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=FE,Yn.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!hd(s))throw Error(t(200));return NE(i,s,null,l)},Yn.createRoot=function(i,s){if(!hd(i))throw Error(t(299));var l=!1,f="",m=W0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=ud(i,1,!1,null,null,l,!1,f,m),i[sr]=s.current,ma(i.nodeType===8?i.parentNode:i),new dd(s)},Yn.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=ml(s),i=i===null?null:i.stateNode,i},Yn.flushSync=function(i){return ys(i)},Yn.hydrate=function(i,s,l){if(!gc(s))throw Error(t(200));return vc(null,i,s,!0,l)},Yn.hydrateRoot=function(i,s,l){if(!hd(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,m=!1,x="",C=W0;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(x=l.identifierPrefix),l.onRecoverableError!==void 0&&(C=l.onRecoverableError)),s=H0(s,null,i,1,l??null,m,!1,x,C),i[sr]=s.current,ma(i),f)for(i=0;i<f.length;i++)l=f[i],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new mc(s)},Yn.render=function(i,s,l){if(!gc(s))throw Error(t(200));return vc(null,i,s,!1,l)},Yn.unmountComponentAtNode=function(i){if(!gc(i))throw Error(t(40));return i._reactRootContainer?(ys(function(){vc(null,null,i,!1,function(){i._reactRootContainer=null,i[sr]=null})}),!0):!1},Yn.unstable_batchedUpdates=rd,Yn.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!gc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return vc(i,s,l,!1,f)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var J0;function XE(){if(J0)return gd.exports;J0=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),gd.exports=jE(),gd.exports}var ev;function $E(){if(ev)return xc;ev=1;var n=XE();return xc.createRoot=n.createRoot,xc.hydrateRoot=n.hydrateRoot,xc}var YE=$E();const qE=Rx(YE),KE="/assets/kv-face-logo-CNQUgzwT.svg";function ZE(){const[n,e]=ge.useState(!1),t=ge.useRef(null),r=ge.useRef(null),o=ge.useCallback(c=>{const u=r.current;if(!u)return;const d=c.currentTarget;u.style.left=`${d.offsetLeft}px`,u.style.width=`${d.offsetWidth}px`,u.style.opacity="1"},[]),a=ge.useCallback(()=>{r.current&&(r.current.style.opacity="0")},[]);return N.jsxs("nav",{className:"navbar-pill","aria-label":"Main navigation",children:[N.jsxs("div",{className:"navbar-header",children:[N.jsxs("a",{href:"#hero",className:"navbar-brand brand-switch",onClick:()=>e(!1),"aria-label":"Home",children:[N.jsxs("span",{className:"brand-text","aria-hidden":"true",children:[N.jsx("span",{className:"brand-kv",children:"kv"}),N.jsx("span",{className:"brand-cursor cursor-blink",children:"_"})]}),N.jsx("img",{src:KE,alt:"KV face logo",className:"brand-face",width:"64",height:"28",loading:"eager"})]}),N.jsx("button",{className:"navbar-toggle",onClick:()=>e(!n),"aria-label":"Toggle navigation",children:N.jsx("span",{className:`hamburger ${n?"open":""}`})})]}),N.jsxs("div",{ref:t,className:`navbar-links ${n?"open":""}`,role:"list",onMouseLeave:a,children:[N.jsx("span",{className:"navbar-indicator",ref:r,"aria-hidden":"true"}),[["#about","About"],["#certifications","Certifications"],["#projects","Projects"],["#hackathons","Hackathons"],["#leadership","Leadership"],["#contact","Contact"]].map(([c,u])=>N.jsx("a",{href:c,onMouseEnter:o,onClick:()=>e(!1),children:u},c))]})]})}const Px=ge.createContext({});function QE(n){const e=ge.useRef(null);return e.current===null&&(e.current=n()),e.current}const JE=typeof window<"u",eT=JE?ge.useLayoutEffect:ge.useEffect,Vp=ge.createContext(null);function zp(n,e){n.indexOf(e)===-1&&n.push(e)}function fu(n,e){const t=n.indexOf(e);t>-1&&n.splice(t,1)}const Ji=(n,e,t)=>t>e?e:t<n?n:t;let Hp=()=>{};const is={},Dx=n=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(n);function Lx(n){return typeof n=="object"&&n!==null}const Nx=n=>/^0[^.\s]+$/u.test(n);function Ix(n){let e;return()=>(e===void 0&&(e=n()),e)}const xi=n=>n,tT=(n,e)=>t=>e(n(t)),tl=(...n)=>n.reduce(tT),Ka=(n,e,t)=>{const r=e-n;return r===0?1:(t-n)/r};class Gp{constructor(){this.subscriptions=[]}add(e){return zp(this.subscriptions,e),()=>fu(this.subscriptions,e)}notify(e,t,r){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](e,t,r);else for(let a=0;a<o;a++){const c=this.subscriptions[a];c&&c(e,t,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const si=n=>n*1e3,_i=n=>n/1e3;function Ux(n,e){return e?n*(1e3/e):0}const Fx=(n,e,t)=>(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n,nT=1e-7,iT=12;function rT(n,e,t,r,o){let a,c,u=0;do c=e+(t-e)/2,a=Fx(c,r,o)-n,a>0?t=c:e=c;while(Math.abs(a)>nT&&++u<iT);return c}function nl(n,e,t,r){if(n===e&&t===r)return xi;const o=a=>rT(a,0,1,n,t);return a=>a===0||a===1?a:Fx(o(a),e,r)}const Ox=n=>e=>e<=.5?n(2*e)/2:(2-n(2*(1-e)))/2,Bx=n=>e=>1-n(1-e),kx=nl(.33,1.53,.69,.99),Wp=Bx(kx),Vx=Ox(Wp),zx=n=>n>=1?1:(n*=2)<1?.5*Wp(n):.5*(2-Math.pow(2,-10*(n-1))),jp=n=>1-Math.sin(Math.acos(n)),Hx=Bx(jp),Gx=Ox(jp),sT=nl(.42,0,1,1),oT=nl(0,0,.58,1),Wx=nl(.42,0,.58,1),aT=n=>Array.isArray(n)&&typeof n[0]!="number",jx=n=>Array.isArray(n)&&typeof n[0]=="number",lT={linear:xi,easeIn:sT,easeInOut:Wx,easeOut:oT,circIn:jp,circInOut:Gx,circOut:Hx,backIn:Wp,backInOut:Vx,backOut:kx,anticipate:zx},cT=n=>typeof n=="string",tv=n=>{if(jx(n)){Hp(n.length===4);const[e,t,r,o]=n;return nl(e,t,r,o)}else if(cT(n))return lT[n];return n},yc=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function uT(n,e){let t=new Set,r=new Set,o=!1,a=!1;const c=new WeakSet;let u={delta:0,timestamp:0,isProcessing:!1};function d(p){c.has(p)&&(h.schedule(p),n()),p(u)}const h={schedule:(p,v=!1,g=!1)=>{const M=g&&o?t:r;return v&&c.add(p),M.add(p),p},cancel:p=>{r.delete(p),c.delete(p)},process:p=>{if(u=p,o){a=!0;return}o=!0;const v=t;t=r,r=v,t.forEach(d),t.clear(),o=!1,a&&(a=!1,h.process(p))}};return h}const fT=40;function Xx(n,e){let t=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},a=()=>t=!0,c=yc.reduce((b,P)=>(b[P]=uT(a),b),{}),{setup:u,read:d,resolveKeyframes:h,preUpdate:p,update:v,preRender:g,render:_,postRender:M}=c,E=()=>{const b=is.useManualTiming,P=b?o.timestamp:performance.now();t=!1,b||(o.delta=r?1e3/60:Math.max(Math.min(P-o.timestamp,fT),1)),o.timestamp=P,o.isProcessing=!0,u.process(o),d.process(o),h.process(o),p.process(o),v.process(o),g.process(o),_.process(o),M.process(o),o.isProcessing=!1,t&&e&&(r=!1,n(E))},S=()=>{t=!0,r=!0,o.isProcessing||n(E)};return{schedule:yc.reduce((b,P)=>{const I=c[P];return b[P]=(U,V=!1,A=!1)=>(t||S(),I.schedule(U,V,A)),b},{}),cancel:b=>{for(let P=0;P<yc.length;P++)c[yc[P]].cancel(b)},state:o,steps:c}}const{schedule:Gt,cancel:rs,state:En,steps:xd}=Xx(typeof requestAnimationFrame<"u"?requestAnimationFrame:xi,!0);let Zc;function dT(){Zc=void 0}const Bn={now:()=>(Zc===void 0&&Bn.set(En.isProcessing||is.useManualTiming?En.timestamp:performance.now()),Zc),set:n=>{Zc=n,queueMicrotask(dT)}},$x=n=>e=>typeof e=="string"&&e.startsWith(n),Yx=$x("--"),hT=$x("var(--"),Xp=n=>hT(n)?pT.test(n.split("/*")[0].trim()):!1,pT=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function nv(n){return typeof n!="string"?!1:n.split("/*")[0].includes("var(--")}const Yo={test:n=>typeof n=="number",parse:parseFloat,transform:n=>n},Za={...Yo,transform:n=>Ji(0,1,n)},Sc={...Yo,default:1},Xa=n=>Math.round(n*1e5)/1e5,$p=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function mT(n){return n==null}const gT=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Yp=(n,e)=>t=>!!(typeof t=="string"&&gT.test(t)&&t.startsWith(n)||e&&!mT(t)&&Object.prototype.hasOwnProperty.call(t,e)),qx=(n,e,t)=>r=>{if(typeof r!="string")return r;const[o,a,c,u]=r.match($p);return{[n]:parseFloat(o),[e]:parseFloat(a),[t]:parseFloat(c),alpha:u!==void 0?parseFloat(u):1}},vT=n=>Ji(0,255,n),yd={...Yo,transform:n=>Math.round(vT(n))},Bs={test:Yp("rgb","red"),parse:qx("red","green","blue"),transform:({red:n,green:e,blue:t,alpha:r=1})=>"rgba("+yd.transform(n)+", "+yd.transform(e)+", "+yd.transform(t)+", "+Xa(Za.transform(r))+")"};function _T(n){let e="",t="",r="",o="";return n.length>5?(e=n.substring(1,3),t=n.substring(3,5),r=n.substring(5,7),o=n.substring(7,9)):(e=n.substring(1,2),t=n.substring(2,3),r=n.substring(3,4),o=n.substring(4,5),e+=e,t+=t,r+=r,o+=o),{red:parseInt(e,16),green:parseInt(t,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const xh={test:Yp("#"),parse:_T,transform:Bs.transform},il=n=>({test:e=>typeof e=="string"&&e.endsWith(n)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${n}`}),Jr=il("deg"),Ki=il("%"),$e=il("px"),xT=il("vh"),yT=il("vw"),iv={...Ki,parse:n=>Ki.parse(n)/100,transform:n=>Ki.transform(n*100)},Do={test:Yp("hsl","hue"),parse:qx("hue","saturation","lightness"),transform:({hue:n,saturation:e,lightness:t,alpha:r=1})=>"hsla("+Math.round(n)+", "+Ki.transform(Xa(e))+", "+Ki.transform(Xa(t))+", "+Xa(Za.transform(r))+")"},ln={test:n=>Bs.test(n)||xh.test(n)||Do.test(n),parse:n=>Bs.test(n)?Bs.parse(n):Do.test(n)?Do.parse(n):xh.parse(n),transform:n=>typeof n=="string"?n:n.hasOwnProperty("red")?Bs.transform(n):Do.transform(n),getAnimatableNone:n=>{const e=ln.parse(n);return e.alpha=0,ln.transform(e)}},ST=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function MT(n){return isNaN(n)&&typeof n=="string"&&(n.match($p)?.length||0)+(n.match(ST)?.length||0)>0}const Kx="number",Zx="color",ET="var",TT="var(",rv="${}",wT=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Bo(n){const e=n.toString(),t=[],r={color:[],number:[],var:[]},o=[];let a=0;const u=e.replace(wT,d=>(ln.test(d)?(r.color.push(a),o.push(Zx),t.push(ln.parse(d))):d.startsWith(TT)?(r.var.push(a),o.push(ET),t.push(d)):(r.number.push(a),o.push(Kx),t.push(parseFloat(d))),++a,rv)).split(rv);return{values:t,split:u,indexes:r,types:o}}function AT(n){return Bo(n).values}function Qx({split:n,types:e}){const t=n.length;return r=>{let o="";for(let a=0;a<t;a++)if(o+=n[a],r[a]!==void 0){const c=e[a];c===Kx?o+=Xa(r[a]):c===Zx?o+=ln.transform(r[a]):o+=r[a]}return o}}function CT(n){return Qx(Bo(n))}const RT=n=>typeof n=="number"?0:ln.test(n)?ln.getAnimatableNone(n):n,bT=(n,e)=>typeof n=="number"?e?.trim().endsWith("/")?n:0:RT(n);function PT(n){const e=Bo(n);return Qx(e)(e.values.map((r,o)=>bT(r,e.split[o])))}const Fi={test:MT,parse:AT,createTransformer:CT,getAnimatableNone:PT};function Sd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*(2/3-t)*6:n}function DT({hue:n,saturation:e,lightness:t,alpha:r}){n/=360,e/=100,t/=100;let o=0,a=0,c=0;if(!e)o=a=c=t;else{const u=t<.5?t*(1+e):t+e-t*e,d=2*t-u;o=Sd(d,u,n+1/3),a=Sd(d,u,n),c=Sd(d,u,n-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(c*255),alpha:r}}function du(n,e){return t=>t>0?e:n}const qt=(n,e,t)=>n+(e-n)*t,Md=(n,e,t)=>{const r=n*n,o=t*(e*e-r)+r;return o<0?0:Math.sqrt(o)},LT=[xh,Bs,Do],NT=n=>LT.find(e=>e.test(n));function sv(n){const e=NT(n);if(!e)return!1;let t=e.parse(n);return e===Do&&(t=DT(t)),t}const ov=(n,e)=>{const t=sv(n),r=sv(e);if(!t||!r)return du(n,e);const o={...t};return a=>(o.red=Md(t.red,r.red,a),o.green=Md(t.green,r.green,a),o.blue=Md(t.blue,r.blue,a),o.alpha=qt(t.alpha,r.alpha,a),Bs.transform(o))},yh=new Set(["none","hidden"]);function IT(n,e){return yh.has(n)?t=>t<=0?n:e:t=>t>=1?e:n}function UT(n,e){return t=>qt(n,e,t)}function qp(n){return typeof n=="number"?UT:typeof n=="string"?Xp(n)?du:ln.test(n)?ov:BT:Array.isArray(n)?Jx:typeof n=="object"?ln.test(n)?ov:FT:du}function Jx(n,e){const t=[...n],r=t.length,o=n.map((a,c)=>qp(a)(a,e[c]));return a=>{for(let c=0;c<r;c++)t[c]=o[c](a);return t}}function FT(n,e){const t={...n,...e},r={};for(const o in t)n[o]!==void 0&&e[o]!==void 0&&(r[o]=qp(n[o])(n[o],e[o]));return o=>{for(const a in r)t[a]=r[a](o);return t}}function OT(n,e){const t=[],r={color:0,var:0,number:0};for(let o=0;o<e.values.length;o++){const a=e.types[o],c=n.indexes[a][r[a]],u=n.values[c]??0;t[o]=u,r[a]++}return t}const BT=(n,e)=>{const t=Fi.createTransformer(e),r=Bo(n),o=Bo(e);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?yh.has(n)&&!o.values.length||yh.has(e)&&!r.values.length?IT(n,e):tl(Jx(OT(r,o),o.values),t):du(n,e)};function ey(n,e,t){return typeof n=="number"&&typeof e=="number"&&typeof t=="number"?qt(n,e,t):qp(n)(n,e)}const kT=n=>{const e=({timestamp:t})=>n(t);return{start:(t=!0)=>Gt.update(e,t),stop:()=>rs(e),now:()=>En.isProcessing?En.timestamp:Bn.now()}},ty=(n,e,t=10)=>{let r="";const o=Math.max(Math.round(e/t),2);for(let a=0;a<o;a++)r+=Math.round(n(a/(o-1))*1e4)/1e4+", ";return`linear(${r.substring(0,r.length-2)})`},hu=2e4;function Kp(n){let e=0;const t=50;let r=n.next(e);for(;!r.done&&e<hu;)e+=t,r=n.next(e);return e>=hu?1/0:e}function VT(n,e=100,t){const r=t({...n,keyframes:[0,e]}),o=Math.min(Kp(r),hu);return{type:"keyframes",ease:a=>r.next(o*a).value/e,duration:_i(o)}}const Zt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1};function Sh(n,e){return n*Math.sqrt(1-e*e)}const zT=12;function HT(n,e,t){let r=t;for(let o=1;o<zT;o++)r=r-n(r)/e(r);return r}const Ed=.001;function GT({duration:n=Zt.duration,bounce:e=Zt.bounce,velocity:t=Zt.velocity,mass:r=Zt.mass}){let o,a,c=1-e;c=Ji(Zt.minDamping,Zt.maxDamping,c),n=Ji(Zt.minDuration,Zt.maxDuration,_i(n)),c<1?(o=h=>{const p=h*c,v=p*n,g=p-t,_=Sh(h,c),M=Math.exp(-v);return Ed-g/_*M},a=h=>{const v=h*c*n,g=v*t+t,_=Math.pow(c,2)*Math.pow(h,2)*n,M=Math.exp(-v),E=Sh(Math.pow(h,2),c);return(-o(h)+Ed>0?-1:1)*((g-_)*M)/E}):(o=h=>{const p=Math.exp(-h*n),v=(h-t)*n+1;return-Ed+p*v},a=h=>{const p=Math.exp(-h*n),v=(t-h)*(n*n);return p*v});const u=5/n,d=HT(o,a,u);if(n=si(n),isNaN(d))return{stiffness:Zt.stiffness,damping:Zt.damping,duration:n};{const h=Math.pow(d,2)*r;return{stiffness:h,damping:c*2*Math.sqrt(r*h),duration:n}}}const WT=["duration","bounce"],jT=["stiffness","damping","mass"];function av(n,e){return e.some(t=>n[t]!==void 0)}function XT(n){let e={velocity:Zt.velocity,stiffness:Zt.stiffness,damping:Zt.damping,mass:Zt.mass,isResolvedFromDuration:!1,...n};if(!av(n,jT)&&av(n,WT))if(e.velocity=0,n.visualDuration){const t=n.visualDuration,r=2*Math.PI/(t*1.2),o=r*r,a=2*Ji(.05,1,1-(n.bounce||0))*Math.sqrt(o);e={...e,mass:Zt.mass,stiffness:o,damping:a}}else{const t=GT({...n,velocity:0});e={...e,...t,mass:Zt.mass},e.isResolvedFromDuration=!0}return e}function pu(n=Zt.visualDuration,e=Zt.bounce){const t=typeof n!="object"?{visualDuration:n,keyframes:[0,1],bounce:e}:n;let{restSpeed:r,restDelta:o}=t;const a=t.keyframes[0],c=t.keyframes[t.keyframes.length-1],u={done:!1,value:a},{stiffness:d,damping:h,mass:p,duration:v,velocity:g,isResolvedFromDuration:_}=XT({...t,velocity:-_i(t.velocity||0)}),M=g||0,E=h/(2*Math.sqrt(d*p)),S=c-a,y=_i(Math.sqrt(d/p)),w=Math.abs(S)<5;r||(r=w?Zt.restSpeed.granular:Zt.restSpeed.default),o||(o=w?Zt.restDelta.granular:Zt.restDelta.default);let b,P,I,U,V,A;if(E<1)I=Sh(y,E),U=(M+E*y*S)/I,b=K=>{const B=Math.exp(-E*y*K);return c-B*(U*Math.sin(I*K)+S*Math.cos(I*K))},V=E*y*U+S*I,A=E*y*S-U*I,P=K=>Math.exp(-E*y*K)*(V*Math.sin(I*K)+A*Math.cos(I*K));else if(E===1){b=B=>c-Math.exp(-y*B)*(S+(M+y*S)*B);const K=M+y*S;P=B=>Math.exp(-y*B)*(y*K*B-M)}else{const K=y*Math.sqrt(E*E-1);b=ne=>{const G=Math.exp(-E*y*ne),H=Math.min(K*ne,300);return c-G*((M+E*y*S)*Math.sinh(H)+K*S*Math.cosh(H))/K};const B=(M+E*y*S)/K,Q=E*y*B-S*K,J=E*y*S-B*K;P=ne=>{const G=Math.exp(-E*y*ne),H=Math.min(K*ne,300);return G*(Q*Math.sinh(H)+J*Math.cosh(H))}}const D={calculatedDuration:_&&v||null,velocity:K=>si(P(K)),next:K=>{if(!_&&E<1){const Q=Math.exp(-E*y*K),J=Math.sin(I*K),ne=Math.cos(I*K),G=c-Q*(U*J+S*ne),H=si(Q*(V*J+A*ne));return u.done=Math.abs(H)<=r&&Math.abs(c-G)<=o,u.value=u.done?c:G,u}const B=b(K);if(_)u.done=K>=v;else{const Q=si(P(K));u.done=Math.abs(Q)<=r&&Math.abs(c-B)<=o}return u.value=u.done?c:B,u},toString:()=>{const K=Math.min(Kp(D),hu),B=ty(Q=>D.next(K*Q).value,K,30);return K+"ms "+B},toTransition:()=>{}};return D}pu.applyToOptions=n=>{const e=VT(n,100,pu);return n.ease=e.ease,n.duration=si(e.duration),n.type="keyframes",n};const $T=5;function ny(n,e,t){const r=Math.max(e-$T,0);return Ux(t-n(r),e-r)}function Mh({keyframes:n,velocity:e=0,power:t=.8,timeConstant:r=325,bounceDamping:o=10,bounceStiffness:a=500,modifyTarget:c,min:u,max:d,restDelta:h=.5,restSpeed:p}){const v=n[0],g={done:!1,value:v},_=A=>u!==void 0&&A<u||d!==void 0&&A>d,M=A=>u===void 0?d:d===void 0||Math.abs(u-A)<Math.abs(d-A)?u:d;let E=t*e;const S=v+E,y=c===void 0?S:c(S);y!==S&&(E=y-v);const w=A=>-E*Math.exp(-A/r),b=A=>y+w(A),P=A=>{const D=w(A),K=b(A);g.done=Math.abs(D)<=h,g.value=g.done?y:K};let I,U;const V=A=>{_(g.value)&&(I=A,U=pu({keyframes:[g.value,M(g.value)],velocity:ny(b,A,g.value),damping:o,stiffness:a,restDelta:h,restSpeed:p}))};return V(0),{calculatedDuration:null,next:A=>{let D=!1;return!U&&I===void 0&&(D=!0,P(A),V(A)),I!==void 0&&A>=I?U.next(A-I):(!D&&P(A),g)}}}function YT(n,e,t){const r=[],o=t||is.mix||ey,a=n.length-1;for(let c=0;c<a;c++){let u=o(n[c],n[c+1]);if(e){const d=Array.isArray(e)?e[c]||xi:e;u=tl(d,u)}r.push(u)}return r}function qT(n,e,{clamp:t=!0,ease:r,mixer:o}={}){const a=n.length;if(Hp(a===e.length),a===1)return()=>e[0];if(a===2&&e[0]===e[1])return()=>e[1];const c=n[0]===n[1];n[0]>n[a-1]&&(n=[...n].reverse(),e=[...e].reverse());const u=YT(e,r,o),d=u.length,h=p=>{if(c&&p<n[0])return e[0];let v=0;if(d>1)for(;v<n.length-2&&!(p<n[v+1]);v++);const g=Ka(n[v],n[v+1],p);return u[v](g)};return t?p=>h(Ji(n[0],n[a-1],p)):h}function KT(n,e){const t=n[n.length-1];for(let r=1;r<=e;r++){const o=Ka(0,e,r);n.push(qt(t,1,o))}}function ZT(n){const e=[0];return KT(e,n.length-1),e}function QT(n,e){return n.map(t=>t*e)}function JT(n,e){return n.map(()=>e||Wx).splice(0,n.length-1)}function $a({duration:n=300,keyframes:e,times:t,ease:r="easeInOut"}){const o=aT(r)?r.map(tv):tv(r),a={done:!1,value:e[0]},c=QT(t&&t.length===e.length?t:ZT(e),n),u=qT(c,e,{ease:Array.isArray(o)?o:JT(e,o)});return{calculatedDuration:n,next:d=>(a.value=u(d),a.done=d>=n,a)}}const e1=n=>n!==null;function Zp(n,{repeat:e,repeatType:t="loop"},r,o=1){const a=n.filter(e1),u=o<0||e&&t!=="loop"&&e%2===1?0:a.length-1;return!u||r===void 0?a[u]:r}const t1={decay:Mh,inertia:Mh,tween:$a,keyframes:$a,spring:pu};function iy(n){typeof n.type=="string"&&(n.type=t1[n.type])}class Qp{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,t){return this.finished.then(e,t)}}const n1=n=>n/100;class Jp extends Qp{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:t}=this.options;t&&t.updatedAt!==Bn.now()&&this.tick(Bn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;iy(e);const{type:t=$a,repeat:r=0,repeatDelay:o=0,repeatType:a,velocity:c=0}=e;let{keyframes:u}=e;const d=t||$a;d!==$a&&typeof u[0]!="number"&&(this.mixKeyframes=tl(n1,ey(u[0],u[1])),u=[0,100]);const h=d({...e,keyframes:u});a==="mirror"&&(this.mirroredGenerator=d({...e,keyframes:[...u].reverse(),velocity:-c})),h.calculatedDuration===null&&(h.calculatedDuration=Kp(h));const{calculatedDuration:p}=h;this.calculatedDuration=p,this.resolvedDuration=p+o,this.totalDuration=this.resolvedDuration*(r+1)-o,this.generator=h}updateTime(e){const t=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=t}tick(e,t=!1){const{generator:r,totalDuration:o,mixKeyframes:a,mirroredGenerator:c,resolvedDuration:u,calculatedDuration:d}=this;if(this.startTime===null)return r.next(0);const{delay:h=0,keyframes:p,repeat:v,repeatType:g,repeatDelay:_,type:M,onUpdate:E,finalKeyframe:S}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-o/this.speed,this.startTime)),t?this.currentTime=e:this.updateTime(e);const y=this.currentTime-h*(this.playbackSpeed>=0?1:-1),w=this.playbackSpeed>=0?y<0:y>o;this.currentTime=Math.max(y,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let b=this.currentTime,P=r;if(v){const A=Math.min(this.currentTime,o)/u;let D=Math.floor(A),K=A%1;!K&&A>=1&&(K=1),K===1&&D--,D=Math.min(D,v+1),D%2&&(g==="reverse"?(K=1-K,_&&(K-=_/u)):g==="mirror"&&(P=c)),b=Ji(0,1,K)*u}const I=w?{done:!1,value:p[0]}:P.next(b);a&&!w&&(I.value=a(I.value));let{done:U}=I;!w&&d!==null&&(U=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const V=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&U);return V&&M!==Mh&&(I.value=Zp(p,this.options,S,this.speed)),E&&E(I.value),V&&this.finish(),I}then(e,t){return this.finished.then(e,t)}get duration(){return _i(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_i(e)}get time(){return _i(this.currentTime)}set time(e){e=si(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),this.driver?this.driver.start(!1):(this.startTime=0,this.state="paused",this.holdTime=e,this.tick(e))}getGeneratorVelocity(){const e=this.currentTime;if(e<=0)return this.options.velocity||0;if(this.generator.velocity)return this.generator.velocity(e);const t=this.generator.next(e).value;return ny(r=>this.generator.next(r).value,e,t)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;t&&this.driver&&this.updateTime(Bn.now()),this.playbackSpeed=e,t&&this.driver&&(this.time=_i(this.currentTime))}play(){if(this.isStopped)return;const{driver:e=kT,startTime:t}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),this.options.onPlay?.();const r=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=r):this.holdTime!==null?this.startTime=r-this.holdTime:this.startTime||(this.startTime=t??r),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(Bn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),e.observe(this)}}function i1(n){for(let e=1;e<n.length;e++)n[e]??(n[e]=n[e-1])}const ks=n=>n*180/Math.PI,Eh=n=>{const e=ks(Math.atan2(n[1],n[0]));return Th(e)},r1={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:n=>(Math.abs(n[0])+Math.abs(n[3]))/2,rotate:Eh,rotateZ:Eh,skewX:n=>ks(Math.atan(n[1])),skewY:n=>ks(Math.atan(n[2])),skew:n=>(Math.abs(n[1])+Math.abs(n[2]))/2},Th=n=>(n=n%360,n<0&&(n+=360),n),lv=Eh,cv=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]),uv=n=>Math.sqrt(n[4]*n[4]+n[5]*n[5]),s1={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:cv,scaleY:uv,scale:n=>(cv(n)+uv(n))/2,rotateX:n=>Th(ks(Math.atan2(n[6],n[5]))),rotateY:n=>Th(ks(Math.atan2(-n[2],n[0]))),rotateZ:lv,rotate:lv,skewX:n=>ks(Math.atan(n[4])),skewY:n=>ks(Math.atan(n[1])),skew:n=>(Math.abs(n[1])+Math.abs(n[4]))/2};function wh(n){return n.includes("scale")?1:0}function Ah(n,e){if(!n||n==="none")return wh(e);const t=n.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(t)r=s1,o=t;else{const u=n.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=r1,o=u}if(!o)return wh(e);const a=r[e],c=o[1].split(",").map(a1);return typeof a=="function"?a(c):c[a]}const o1=(n,e)=>{const{transform:t="none"}=getComputedStyle(n);return Ah(t,e)};function a1(n){return parseFloat(n.trim())}const qo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Ko=new Set(qo),fv=n=>n===Yo||n===$e,l1=new Set(["x","y","z"]),c1=qo.filter(n=>!l1.has(n));function u1(n){const e=[];return c1.forEach(t=>{const r=n.getValue(t);r!==void 0&&(e.push([t,r.get()]),r.set(t.startsWith("scale")?1:0))}),e}const es={width:({x:n},{paddingLeft:e="0",paddingRight:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},height:({y:n},{paddingTop:e="0",paddingBottom:t="0",boxSizing:r})=>{const o=n.max-n.min;return r==="border-box"?o:o-parseFloat(e)-parseFloat(t)},top:(n,{top:e})=>parseFloat(e),left:(n,{left:e})=>parseFloat(e),bottom:({y:n},{top:e})=>parseFloat(e)+(n.max-n.min),right:({x:n},{left:e})=>parseFloat(e)+(n.max-n.min),x:(n,{transform:e})=>Ah(e,"x"),y:(n,{transform:e})=>Ah(e,"y")};es.translateX=es.x;es.translateY=es.y;const zs=new Set;let Ch=!1,Rh=!1,bh=!1;function ry(){if(Rh){const n=Array.from(zs).filter(r=>r.needsMeasurement),e=new Set(n.map(r=>r.element)),t=new Map;e.forEach(r=>{const o=u1(r);o.length&&(t.set(r,o),r.render())}),n.forEach(r=>r.measureInitialState()),e.forEach(r=>{r.render();const o=t.get(r);o&&o.forEach(([a,c])=>{r.getValue(a)?.set(c)})}),n.forEach(r=>r.measureEndState()),n.forEach(r=>{r.suspendedScrollY!==void 0&&window.scrollTo(0,r.suspendedScrollY)})}Rh=!1,Ch=!1,zs.forEach(n=>n.complete(bh)),zs.clear()}function sy(){zs.forEach(n=>{n.readKeyframes(),n.needsMeasurement&&(Rh=!0)})}function f1(){bh=!0,sy(),ry(),bh=!1}class em{constructor(e,t,r,o,a,c=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=r,this.motionValue=o,this.element=a,this.isAsync=c}scheduleResolve(){this.state="scheduled",this.isAsync?(zs.add(this),Ch||(Ch=!0,Gt.read(sy),Gt.resolveKeyframes(ry))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:r,motionValue:o}=this;if(e[0]===null){const a=o?.get(),c=e[e.length-1];if(a!==void 0)e[0]=a;else if(r&&t){const u=r.readValue(t,c);u!=null&&(e[0]=u)}e[0]===void 0&&(e[0]=c),o&&a===void 0&&o.set(e[0])}i1(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),zs.delete(this)}cancel(){this.state==="scheduled"&&(zs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const d1=n=>n.startsWith("--");function oy(n,e,t){d1(e)?n.style.setProperty(e,t):n.style[e]=t}const h1={};function ay(n,e){const t=Ix(n);return()=>h1[e]??t()}const p1=ay(()=>window.ScrollTimeline!==void 0,"scrollTimeline"),ly=ay(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),Ga=([n,e,t,r])=>`cubic-bezier(${n}, ${e}, ${t}, ${r})`,dv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Ga([0,.65,.55,1]),circOut:Ga([.55,0,1,.45]),backIn:Ga([.31,.01,.66,-.59]),backOut:Ga([.33,1.53,.69,.99])};function cy(n,e){if(n)return typeof n=="function"?ly()?ty(n,e):"ease-out":jx(n)?Ga(n):Array.isArray(n)?n.map(t=>cy(t,e)||dv.easeOut):dv[n]}function m1(n,e,t,{delay:r=0,duration:o=300,repeat:a=0,repeatType:c="loop",ease:u="easeOut",times:d}={},h=void 0){const p={[e]:t};d&&(p.offset=d);const v=cy(u,o);Array.isArray(v)&&(p.easing=v);const g={delay:r,duration:o,easing:Array.isArray(v)?"linear":v,fill:"both",iterations:a+1,direction:c==="reverse"?"alternate":"normal"};return h&&(g.pseudoElement=h),n.animate(p,g)}function uy(n){return typeof n=="function"&&"applyToOptions"in n}function g1({type:n,...e}){return uy(n)&&ly()?n.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class fy extends Qp{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:t,name:r,keyframes:o,pseudoElement:a,allowFlatten:c=!1,finalKeyframe:u,onComplete:d}=e;this.isPseudoElement=!!a,this.allowFlatten=c,this.options=e,Hp(typeof e.type!="string");const h=g1(e);this.animation=m1(t,r,o,h,a),h.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!a){const p=Zp(o,this.options,u,this.speed);this.updateMotionValue&&this.updateMotionValue(p),oy(t,r,p),this.animation.cancel()}d?.(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){this.animation.finish?.()}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){const e=this.options?.element;!this.isPseudoElement&&e?.isConnected&&this.animation.commitStyles?.()}get duration(){const e=this.animation.effect?.getComputedTiming?.().duration||0;return _i(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+_i(e)}get time(){return _i(Number(this.animation.currentTime)||0)}set time(e){const t=this.finishedTime!==null;this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=si(e),t&&this.animation.pause()}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,rangeStart:t,rangeEnd:r,observe:o}){return this.allowFlatten&&this.animation.effect?.updateTiming({easing:"linear"}),this.animation.onfinish=null,e&&p1()?(this.animation.timeline=e,t&&(this.animation.rangeStart=t),r&&(this.animation.rangeEnd=r),xi):o(this)}}const dy={anticipate:zx,backInOut:Vx,circInOut:Gx};function v1(n){return n in dy}function _1(n){typeof n.ease=="string"&&v1(n.ease)&&(n.ease=dy[n.ease])}const Td=10;class x1 extends fy{constructor(e){_1(e),iy(e),super(e),e.startTime!==void 0&&e.autoplay!==!1&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:t,onUpdate:r,onComplete:o,element:a,...c}=this.options;if(!t)return;if(e!==void 0){t.set(e);return}const u=new Jp({...c,autoplay:!1}),d=Math.max(Td,Bn.now()-this.startTime),h=Ji(0,Td,d-Td),p=u.sample(d).value,{name:v}=this.options;a&&v&&oy(a,v,p),t.setWithVelocity(u.sample(Math.max(0,d-h)).value,p,h),u.stop()}}const hv=(n,e)=>e==="zIndex"?!1:!!(typeof n=="number"||Array.isArray(n)||typeof n=="string"&&(Fi.test(n)||n==="0")&&!n.startsWith("url("));function y1(n){const e=n[0];if(n.length===1)return!0;for(let t=0;t<n.length;t++)if(n[t]!==e)return!0}function S1(n,e,t,r){const o=n[0];if(o===null)return!1;if(e==="display"||e==="visibility")return!0;const a=n[n.length-1],c=hv(o,e),u=hv(a,e);return!c||!u?!1:y1(n)||(t==="spring"||uy(t))&&r}function Ph(n){n.duration=0,n.type="keyframes"}const M1=new Set(["opacity","clipPath","filter","transform"]),E1=Ix(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function T1(n){const{motionValue:e,name:t,repeatDelay:r,repeatType:o,damping:a,type:c}=n;if(!(e?.owner?.current instanceof HTMLElement))return!1;const{onUpdate:d,transformTemplate:h}=e.owner.getProps();return E1()&&t&&M1.has(t)&&(t!=="transform"||!h)&&!d&&!r&&o!=="mirror"&&a!==0&&c!=="inertia"}const w1=40;class A1 extends Qp{constructor({autoplay:e=!0,delay:t=0,type:r="keyframes",repeat:o=0,repeatDelay:a=0,repeatType:c="loop",keyframes:u,name:d,motionValue:h,element:p,...v}){super(),this.stop=()=>{this._animation&&(this._animation.stop(),this.stopTimeline?.()),this.keyframeResolver?.cancel()},this.createdAt=Bn.now();const g={autoplay:e,delay:t,type:r,repeat:o,repeatDelay:a,repeatType:c,name:d,motionValue:h,element:p,...v},_=p?.KeyframeResolver||em;this.keyframeResolver=new _(u,(M,E,S)=>this.onKeyframesResolved(M,E,g,!S),d,h,p),this.keyframeResolver?.scheduleResolve()}onKeyframesResolved(e,t,r,o){this.keyframeResolver=void 0;const{name:a,type:c,velocity:u,delay:d,isHandoff:h,onUpdate:p}=r;this.resolvedAt=Bn.now();let v=!0;S1(e,a,c,u)||(v=!1,(is.instantAnimations||!d)&&p?.(Zp(e,r,t)),e[0]=e[e.length-1],Ph(r),r.repeat=0);const _={startTime:o?this.resolvedAt?this.resolvedAt-this.createdAt>w1?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:t,...r,keyframes:e},M=v&&!h&&T1(_),E=_.motionValue?.owner?.current,S=M?new x1({..._,element:E}):new Jp(_);S.finished.then(()=>{this.notifyFinished()}).catch(xi),this.pendingTimeline&&(this.stopTimeline=S.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=S}get finished(){return this._animation?this.animation.finished:this._finished}then(e,t){return this.finished.finally(e).then(()=>{})}get animation(){return this._animation||(this.keyframeResolver?.resume(),f1()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){this._animation&&this.animation.cancel(),this.keyframeResolver?.cancel()}}function hy(n,e,t,r=0,o=1){const a=Array.from(n).sort((h,p)=>h.sortNodePosition(p)).indexOf(e),c=n.size,u=(c-1)*r;return typeof t=="function"?t(a,c):o===1?a*r:u-a*r}const C1=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function R1(n){const e=C1.exec(n);if(!e)return[,];const[,t,r,o]=e;return[`--${t??r}`,o]}function py(n,e,t=1){const[r,o]=R1(n);if(!r)return;const a=window.getComputedStyle(e).getPropertyValue(r);if(a){const c=a.trim();return Dx(c)?parseFloat(c):c}return Xp(o)?py(o,e,t+1):o}const b1={type:"spring",stiffness:500,damping:25,restSpeed:10},P1=n=>({type:"spring",stiffness:550,damping:n===0?2*Math.sqrt(550):30,restSpeed:10}),D1={type:"keyframes",duration:.8},L1={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},N1=(n,{keyframes:e})=>e.length>2?D1:Ko.has(n)?n.startsWith("scale")?P1(e[1]):b1:L1,I1=n=>n!==null;function U1(n,{repeat:e,repeatType:t="loop"},r){const o=n.filter(I1),a=e&&t!=="loop"&&e%2===1?0:o.length-1;return o[a]}function my(n,e){if(n?.inherit&&e){const{inherit:t,...r}=n;return{...e,...r}}return n}function tm(n,e){const t=n?.[e]??n?.default??n;return t!==n?my(t,n):t}function F1({when:n,delay:e,delayChildren:t,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:c,repeatDelay:u,from:d,elapsed:h,...p}){return!!Object.keys(p).length}const nm=(n,e,t,r={},o,a)=>c=>{const u=tm(r,n)||{},d=u.delay||r.delay||0;let{elapsed:h=0}=r;h=h-si(d);const p={keyframes:Array.isArray(t)?t:[null,t],ease:"easeOut",velocity:e.getVelocity(),...u,delay:-h,onUpdate:g=>{e.set(g),u.onUpdate&&u.onUpdate(g)},onComplete:()=>{c(),u.onComplete&&u.onComplete()},name:n,motionValue:e,element:a?void 0:o};F1(u)||Object.assign(p,N1(n,p)),p.duration&&(p.duration=si(p.duration)),p.repeatDelay&&(p.repeatDelay=si(p.repeatDelay)),p.from!==void 0&&(p.keyframes[0]=p.from);let v=!1;if((p.type===!1||p.duration===0&&!p.repeatDelay)&&(Ph(p),p.delay===0&&(v=!0)),(is.instantAnimations||is.skipAnimations||o?.shouldSkipAnimations)&&(v=!0,Ph(p),p.delay=0),p.allowFlatten=!u.type&&!u.ease,v&&!a&&e.get()!==void 0){const g=U1(p.keyframes,u);if(g!==void 0){Gt.update(()=>{p.onUpdate(g),p.onComplete()});return}}return u.isSync?new Jp(p):new A1(p)};function pv(n){const e=[{},{}];return n?.values.forEach((t,r)=>{e[0][r]=t.get(),e[1][r]=t.getVelocity()}),e}function im(n,e,t,r){if(typeof e=="function"){const[o,a]=pv(r);e=e(t!==void 0?t:n.custom,o,a)}if(typeof e=="string"&&(e=n.variants&&n.variants[e]),typeof e=="function"){const[o,a]=pv(r);e=e(t!==void 0?t:n.custom,o,a)}return e}function Hs(n,e,t){const r=n.getProps();return im(r,e,t!==void 0?t:r.custom,n)}const gy=new Set(["width","height","top","left","right","bottom",...qo]),mv=30,O1=n=>!isNaN(parseFloat(n));class B1{constructor(e,t={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=r=>{const o=Bn.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(r),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const a of this.dependents)a.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=t.owner}setCurrent(e){this.current=e,this.updatedAt=Bn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=O1(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Gp);const r=this.events[e].add(t);return e==="change"?()=>{r(),Gt.read(()=>{this.events.change.getSize()||this.stop()})}:r}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,t,r){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-r}jump(e,t=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){const e=Bn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>mv)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,mv);return Ux(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise(t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function ko(n,e){return new B1(n,e)}const Dh=n=>Array.isArray(n);function k1(n,e,t){n.hasValue(e)?n.getValue(e).set(t):n.addValue(e,ko(t))}function V1(n){return Dh(n)?n[n.length-1]||0:n}function z1(n,e){const t=Hs(n,e);let{transitionEnd:r={},transition:o={},...a}=t||{};a={...a,...r};for(const c in a){const u=V1(a[c]);k1(n,c,u)}}const Tn=n=>!!(n&&n.getVelocity);function H1(n){return!!(Tn(n)&&n.add)}function Lh(n,e){const t=n.getValue("willChange");if(H1(t))return t.add(e);if(!t&&is.WillChange){const r=new is.WillChange("auto");n.addValue("willChange",r),r.add(e)}}function rm(n){return n.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const G1="framerAppearId",vy="data-"+rm(G1);function _y(n){return n.props[vy]}function W1({protectedKeys:n,needsAnimating:e},t){const r=n.hasOwnProperty(t)&&e[t]!==!0;return e[t]=!1,r}function xy(n,e,{delay:t=0,transitionOverride:r,type:o}={}){let{transition:a,transitionEnd:c,...u}=e;const d=n.getDefaultTransition();a=a?my(a,d):d;const h=a?.reduceMotion;r&&(a=r);const p=[],v=o&&n.animationState&&n.animationState.getState()[o];for(const g in u){const _=n.getValue(g,n.latestValues[g]??null),M=u[g];if(M===void 0||v&&W1(v,g))continue;const E={delay:t,...tm(a||{},g)},S=_.get();if(S!==void 0&&!_.isAnimating&&!Array.isArray(M)&&M===S&&!E.velocity)continue;let y=!1;if(window.MotionHandoffAnimation){const P=_y(n);if(P){const I=window.MotionHandoffAnimation(P,g,Gt);I!==null&&(E.startTime=I,y=!0)}}Lh(n,g);const w=h??n.shouldReduceMotion;_.start(nm(g,_,M,w&&gy.has(g)?{type:!1}:E,n,y));const b=_.animation;b&&p.push(b)}if(c){const g=()=>Gt.update(()=>{c&&z1(n,c)});p.length?Promise.all(p).then(g):g()}return p}function Nh(n,e,t={}){const r=Hs(n,e,t.type==="exit"?n.presenceContext?.custom:void 0);let{transition:o=n.getDefaultTransition()||{}}=r||{};t.transitionOverride&&(o=t.transitionOverride);const a=r?()=>Promise.all(xy(n,r,t)):()=>Promise.resolve(),c=n.variantChildren&&n.variantChildren.size?(d=0)=>{const{delayChildren:h=0,staggerChildren:p,staggerDirection:v}=o;return j1(n,e,d,h,p,v,t)}:()=>Promise.resolve(),{when:u}=o;if(u){const[d,h]=u==="beforeChildren"?[a,c]:[c,a];return d().then(()=>h())}else return Promise.all([a(),c(t.delay)])}function j1(n,e,t=0,r=0,o=0,a=1,c){const u=[];for(const d of n.variantChildren)d.notify("AnimationStart",e),u.push(Nh(d,e,{...c,delay:t+(typeof r=="function"?0:r)+hy(n.variantChildren,d,r,o,a)}).then(()=>d.notify("AnimationComplete",e)));return Promise.all(u)}function X1(n,e,t={}){n.notify("AnimationStart",e);let r;if(Array.isArray(e)){const o=e.map(a=>Nh(n,a,t));r=Promise.all(o)}else if(typeof e=="string")r=Nh(n,e,t);else{const o=typeof e=="function"?Hs(n,e,t.custom):e;r=Promise.all(xy(n,o,t))}return r.then(()=>{n.notify("AnimationComplete",e)})}const $1={test:n=>n==="auto",parse:n=>n},yy=n=>e=>e.test(n),Sy=[Yo,$e,Ki,Jr,yT,xT,$1],gv=n=>Sy.find(yy(n));function Y1(n){return typeof n=="number"?n===0:n!==null?n==="none"||n==="0"||Nx(n):!0}const q1=new Set(["brightness","contrast","saturate","opacity"]);function K1(n){const[e,t]=n.slice(0,-1).split("(");if(e==="drop-shadow")return n;const[r]=t.match($p)||[];if(!r)return n;const o=t.replace(r,"");let a=q1.has(e)?1:0;return r!==t&&(a*=100),e+"("+a+o+")"}const Z1=/\b([a-z-]*)\(.*?\)/gu,Ih={...Fi,getAnimatableNone:n=>{const e=n.match(Z1);return e?e.map(K1).join(" "):n}},Uh={...Fi,getAnimatableNone:n=>{const e=Fi.parse(n);return Fi.createTransformer(n)(e.map(r=>typeof r=="number"?0:typeof r=="object"?{...r,alpha:1}:r))}},vv={...Yo,transform:Math.round},Q1={rotate:Jr,rotateX:Jr,rotateY:Jr,rotateZ:Jr,scale:Sc,scaleX:Sc,scaleY:Sc,scaleZ:Sc,skew:Jr,skewX:Jr,skewY:Jr,distance:$e,translateX:$e,translateY:$e,translateZ:$e,x:$e,y:$e,z:$e,perspective:$e,transformPerspective:$e,opacity:Za,originX:iv,originY:iv,originZ:$e},sm={borderWidth:$e,borderTopWidth:$e,borderRightWidth:$e,borderBottomWidth:$e,borderLeftWidth:$e,borderRadius:$e,borderTopLeftRadius:$e,borderTopRightRadius:$e,borderBottomRightRadius:$e,borderBottomLeftRadius:$e,width:$e,maxWidth:$e,height:$e,maxHeight:$e,top:$e,right:$e,bottom:$e,left:$e,inset:$e,insetBlock:$e,insetBlockStart:$e,insetBlockEnd:$e,insetInline:$e,insetInlineStart:$e,insetInlineEnd:$e,padding:$e,paddingTop:$e,paddingRight:$e,paddingBottom:$e,paddingLeft:$e,paddingBlock:$e,paddingBlockStart:$e,paddingBlockEnd:$e,paddingInline:$e,paddingInlineStart:$e,paddingInlineEnd:$e,margin:$e,marginTop:$e,marginRight:$e,marginBottom:$e,marginLeft:$e,marginBlock:$e,marginBlockStart:$e,marginBlockEnd:$e,marginInline:$e,marginInlineStart:$e,marginInlineEnd:$e,fontSize:$e,backgroundPositionX:$e,backgroundPositionY:$e,...Q1,zIndex:vv,fillOpacity:Za,strokeOpacity:Za,numOctaves:vv},J1={...sm,color:ln,backgroundColor:ln,outlineColor:ln,fill:ln,stroke:ln,borderColor:ln,borderTopColor:ln,borderRightColor:ln,borderBottomColor:ln,borderLeftColor:ln,filter:Ih,WebkitFilter:Ih,mask:Uh,WebkitMask:Uh},My=n=>J1[n],ew=new Set([Ih,Uh]);function Ey(n,e){let t=My(n);return ew.has(t)||(t=Fi),t.getAnimatableNone?t.getAnimatableNone(e):void 0}const tw=new Set(["auto","none","0"]);function nw(n,e,t){let r=0,o;for(;r<n.length&&!o;){const a=n[r];typeof a=="string"&&!tw.has(a)&&Bo(a).values.length&&(o=n[r]),r++}if(o&&t)for(const a of e)n[a]=Ey(t,o)}class iw extends em{constructor(e,t,r,o,a){super(e,t,r,o,a,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:r}=this;if(!t||!t.current)return;super.readKeyframes();for(let p=0;p<e.length;p++){let v=e[p];if(typeof v=="string"&&(v=v.trim(),Xp(v))){const g=py(v,t.current);g!==void 0&&(e[p]=g),p===e.length-1&&(this.finalKeyframe=v)}}if(this.resolveNoneKeyframes(),!gy.has(r)||e.length!==2)return;const[o,a]=e,c=gv(o),u=gv(a),d=nv(o),h=nv(a);if(d!==h&&es[r]){this.needsMeasurement=!0;return}if(c!==u)if(fv(c)&&fv(u))for(let p=0;p<e.length;p++){const v=e[p];typeof v=="string"&&(e[p]=parseFloat(v))}else es[r]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,r=[];for(let o=0;o<e.length;o++)(e[o]===null||Y1(e[o]))&&r.push(o);r.length&&nw(e,r,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:r}=this;if(!e||!e.current)return;r==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=es[r](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const o=t[t.length-1];o!==void 0&&e.getValue(r,o).jump(o,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:r}=this;if(!e||!e.current)return;const o=e.getValue(t);o&&o.jump(this.measuredOrigin,!1);const a=r.length-1,c=r[a];r[a]=es[t](e.measureViewportBox(),window.getComputedStyle(e.current)),c!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=c),this.removedTransforms?.length&&this.removedTransforms.forEach(([u,d])=>{e.getValue(u).set(d)}),this.resolveNoneKeyframes()}}const rw=new Set(["opacity","clipPath","filter","transform"]);function om(n,e,t){if(n==null)return[];if(n instanceof EventTarget)return[n];if(typeof n=="string"){const o=document.querySelectorAll(n);return o?Array.from(o):[]}return Array.from(n).filter(r=>r!=null)}const Ty=(n,e)=>e&&typeof n=="number"?e.transform(n):n;function sw(n){return Lx(n)&&"offsetHeight"in n&&!("ownerSVGElement"in n)}const{schedule:am}=Xx(queueMicrotask,!1),Li={x:!1,y:!1};function wy(){return Li.x||Li.y}function ow(n){return n==="x"||n==="y"?Li[n]?null:(Li[n]=!0,()=>{Li[n]=!1}):Li.x||Li.y?null:(Li.x=Li.y=!0,()=>{Li.x=Li.y=!1})}function Ay(n,e){const t=om(n),r=new AbortController,o={passive:!0,...e,signal:r.signal};return[t,o,()=>r.abort()]}function aw(n){return!(n.pointerType==="touch"||wy())}function lw(n,e,t={}){const[r,o,a]=Ay(n,t);return r.forEach(c=>{let u=!1,d=!1,h;const p=()=>{c.removeEventListener("pointerleave",M)},v=S=>{h&&(h(S),h=void 0),p()},g=S=>{u=!1,window.removeEventListener("pointerup",g),window.removeEventListener("pointercancel",g),d&&(d=!1,v(S))},_=()=>{u=!0,window.addEventListener("pointerup",g,o),window.addEventListener("pointercancel",g,o)},M=S=>{if(S.pointerType!=="touch"){if(u){d=!0;return}v(S)}},E=S=>{if(!aw(S))return;d=!1;const y=e(c,S);typeof y=="function"&&(h=y,c.addEventListener("pointerleave",M,o))};c.addEventListener("pointerenter",E,o),c.addEventListener("pointerdown",_,o)}),a}const Cy=(n,e)=>e?n===e?!0:Cy(n,e.parentElement):!1,lm=n=>n.pointerType==="mouse"?typeof n.button!="number"||n.button<=0:n.isPrimary!==!1,cw=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function uw(n){return cw.has(n.tagName)||n.isContentEditable===!0}const fw=new Set(["INPUT","SELECT","TEXTAREA"]);function dw(n){return fw.has(n.tagName)||n.isContentEditable===!0}const Qc=new WeakSet;function _v(n){return e=>{e.key==="Enter"&&n(e)}}function wd(n,e){n.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const hw=(n,e)=>{const t=n.currentTarget;if(!t)return;const r=_v(()=>{if(Qc.has(t))return;wd(t,"down");const o=_v(()=>{wd(t,"up")}),a=()=>wd(t,"cancel");t.addEventListener("keyup",o,e),t.addEventListener("blur",a,e)});t.addEventListener("keydown",r,e),t.addEventListener("blur",()=>t.removeEventListener("keydown",r),e)};function xv(n){return lm(n)&&!wy()}const yv=new WeakSet;function pw(n,e,t={}){const[r,o,a]=Ay(n,t),c=u=>{const d=u.currentTarget;if(!xv(u)||yv.has(u))return;Qc.add(d),t.stopPropagation&&yv.add(u);const h=e(d,u),p=(_,M)=>{window.removeEventListener("pointerup",v),window.removeEventListener("pointercancel",g),Qc.has(d)&&Qc.delete(d),xv(_)&&typeof h=="function"&&h(_,{success:M})},v=_=>{p(_,d===window||d===document||t.useGlobalTarget||Cy(d,_.target))},g=_=>{p(_,!1)};window.addEventListener("pointerup",v,o),window.addEventListener("pointercancel",g,o)};return r.forEach(u=>{(t.useGlobalTarget?window:u).addEventListener("pointerdown",c,o),sw(u)&&(u.addEventListener("focus",h=>hw(h,o)),!uw(u)&&!u.hasAttribute("tabindex")&&(u.tabIndex=0))}),a}function cm(n){return Lx(n)&&"ownerSVGElement"in n}const Jc=new WeakMap;let eu;const Ry=(n,e,t)=>(r,o)=>o&&o[0]?o[0][n+"Size"]:cm(r)&&"getBBox"in r?r.getBBox()[e]:r[t],mw=Ry("inline","width","offsetWidth"),gw=Ry("block","height","offsetHeight");function vw({target:n,borderBoxSize:e}){Jc.get(n)?.forEach(t=>{t(n,{get width(){return mw(n,e)},get height(){return gw(n,e)}})})}function _w(n){n.forEach(vw)}function xw(){typeof ResizeObserver>"u"||(eu=new ResizeObserver(_w))}function yw(n,e){eu||xw();const t=om(n);return t.forEach(r=>{let o=Jc.get(r);o||(o=new Set,Jc.set(r,o)),o.add(e),eu?.observe(r)}),()=>{t.forEach(r=>{const o=Jc.get(r);o?.delete(e),o?.size||eu?.unobserve(r)})}}const tu=new Set;let Lo;function Sw(){Lo=()=>{const n={get width(){return window.innerWidth},get height(){return window.innerHeight}};tu.forEach(e=>e(n))},window.addEventListener("resize",Lo)}function Mw(n){return tu.add(n),Lo||Sw(),()=>{tu.delete(n),!tu.size&&typeof Lo=="function"&&(window.removeEventListener("resize",Lo),Lo=void 0)}}function Sv(n,e){return typeof n=="function"?Mw(n):yw(n,e)}function Ew(n){return cm(n)&&n.tagName==="svg"}const Tw=[...Sy,ln,Fi],ww=n=>Tw.find(yy(n)),Mv=()=>({translate:0,scale:1,origin:0,originPoint:0}),No=()=>({x:Mv(),y:Mv()}),Ev=()=>({min:0,max:0}),dn=()=>({x:Ev(),y:Ev()}),Aw=new WeakMap;function Au(n){return n!==null&&typeof n=="object"&&typeof n.start=="function"}function Qa(n){return typeof n=="string"||Array.isArray(n)}const um=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],fm=["initial",...um];function Cu(n){return Au(n.animate)||fm.some(e=>Qa(n[e]))}function by(n){return!!(Cu(n)||n.variants)}function Cw(n,e,t){for(const r in e){const o=e[r],a=t[r];if(Tn(o))n.addValue(r,o);else if(Tn(a))n.addValue(r,ko(o,{owner:n}));else if(a!==o)if(n.hasValue(r)){const c=n.getValue(r);c.liveStyle===!0?c.jump(o):c.hasAnimated||c.set(o)}else{const c=n.getStaticValue(r);n.addValue(r,ko(c!==void 0?c:o,{owner:n}))}}for(const r in t)e[r]===void 0&&n.removeValue(r);return e}const Fh={current:null},Py={current:!1},Rw=typeof window<"u";function bw(){if(Py.current=!0,!!Rw)if(window.matchMedia){const n=window.matchMedia("(prefers-reduced-motion)"),e=()=>Fh.current=n.matches;n.addEventListener("change",e),e()}else Fh.current=!1}const Tv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let mu={};function Dy(n){mu=n}function Pw(){return mu}class Dw{scrapeMotionValuesFromProps(e,t,r){return{}}constructor({parent:e,props:t,presenceContext:r,reducedMotionConfig:o,skipAnimations:a,blockInitialAnimation:c,visualState:u},d={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=em,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const _=Bn.now();this.renderScheduledAt<_&&(this.renderScheduledAt=_,Gt.render(this.render,!1,!0))};const{latestValues:h,renderState:p}=u;this.latestValues=h,this.baseTarget={...h},this.initialValues=t.initial?{...h}:{},this.renderState=p,this.parent=e,this.props=t,this.presenceContext=r,this.depth=e?e.depth+1:0,this.reducedMotionConfig=o,this.skipAnimationsConfig=a,this.options=d,this.blockInitialAnimation=!!c,this.isControllingVariants=Cu(t),this.isVariantNode=by(t),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:v,...g}=this.scrapeMotionValuesFromProps(t,{},this);for(const _ in g){const M=g[_];h[_]!==void 0&&Tn(M)&&M.set(h[_])}}mount(e){if(this.hasBeenMounted)for(const t in this.initialValues)this.values.get(t)?.jump(this.initialValues[t]),this.latestValues[t]=this.initialValues[t];this.current=e,Aw.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((t,r)=>this.bindToMotionValue(r,t)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(Py.current||bw(),this.shouldReduceMotion=Fh.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,this.parent?.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){this.projection&&this.projection.unmount(),rs(this.notifyUpdate),rs(this.render),this.valueSubscriptions.forEach(e=>e()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent?.removeChild(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,t){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),t.accelerate&&rw.has(e)&&this.current instanceof HTMLElement){const{factory:c,keyframes:u,times:d,ease:h,duration:p}=t.accelerate,v=new fy({element:this.current,name:e,keyframes:u,times:d,ease:h,duration:si(p)}),g=c(v);this.valueSubscriptions.set(e,()=>{g(),v.cancel()});return}const r=Ko.has(e);r&&this.onBindTransform&&this.onBindTransform();const o=t.on("change",c=>{this.latestValues[e]=c,this.props.onUpdate&&Gt.preRender(this.notifyUpdate),r&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let a;typeof window<"u"&&window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,()=>{o(),a&&a(),t.owner&&t.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in mu){const t=mu[e];if(!t)continue;const{isEnabled:r,Feature:o}=t;if(!this.features[e]&&o&&r(this.props)&&(this.features[e]=new o(this)),this.features[e]){const a=this.features[e];a.isMounted?a.update():(a.mount(),a.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):dn()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let r=0;r<Tv.length;r++){const o=Tv[r];this.propEventSubscriptions[o]&&(this.propEventSubscriptions[o](),delete this.propEventSubscriptions[o]);const a="on"+o,c=e[a];c&&(this.propEventSubscriptions[o]=this.on(o,c))}this.prevMotionValues=Cw(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const r=this.values.get(e);t!==r&&(r&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let r=this.values.get(e);return r===void 0&&t!==void 0&&(r=ko(t===null?void 0:t,{owner:this}),this.addValue(e,r)),r}readValue(e,t){let r=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return r!=null&&(typeof r=="string"&&(Dx(r)||Nx(r))?r=parseFloat(r):!ww(r)&&Fi.test(t)&&(r=Ey(e,t)),this.setBaseTarget(e,Tn(r)?r.get():r)),Tn(r)?r.get():r}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let r;if(typeof t=="string"||typeof t=="object"){const a=im(this.props,t,this.presenceContext?.custom);a&&(r=a[e])}if(t&&r!==void 0)return r;const o=this.getBaseTargetFromProps(this.props,e);return o!==void 0&&!Tn(o)?o:this.initialValues[e]!==void 0&&r===void 0?void 0:this.baseTarget[e]}on(e,t){return this.events[e]||(this.events[e]=new Gp),this.events[e].add(t)}notify(e,...t){this.events[e]&&this.events[e].notify(...t)}scheduleRenderMicrotask(){am.render(this.render)}}class Ly extends Dw{constructor(){super(...arguments),this.KeyframeResolver=iw}sortInstanceNodePosition(e,t){return e.compareDocumentPosition(t)&2?1:-1}getBaseTargetFromProps(e,t){const r=e.style;return r?r[t]:void 0}removeValueFromRenderState(e,{vars:t,style:r}){delete t[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Tn(e)&&(this.childSubscription=e.on("change",t=>{this.current&&(this.current.textContent=`${t}`)}))}}class os{constructor(e){this.isMounted=!1,this.node=e}update(){}}function Ny({top:n,left:e,right:t,bottom:r}){return{x:{min:e,max:t},y:{min:n,max:r}}}function Lw({x:n,y:e}){return{top:e.min,right:n.max,bottom:e.max,left:n.min}}function Nw(n,e){if(!e)return n;const t=e({x:n.left,y:n.top}),r=e({x:n.right,y:n.bottom});return{top:t.y,left:t.x,bottom:r.y,right:r.x}}function Ad(n){return n===void 0||n===1}function Oh({scale:n,scaleX:e,scaleY:t}){return!Ad(n)||!Ad(e)||!Ad(t)}function Ns(n){return Oh(n)||Iy(n)||n.z||n.rotate||n.rotateX||n.rotateY||n.skewX||n.skewY}function Iy(n){return wv(n.x)||wv(n.y)}function wv(n){return n&&n!=="0%"}function gu(n,e,t){const r=n-t,o=e*r;return t+o}function Av(n,e,t,r,o){return o!==void 0&&(n=gu(n,o,r)),gu(n,t,r)+e}function Bh(n,e=0,t=1,r,o){n.min=Av(n.min,e,t,r,o),n.max=Av(n.max,e,t,r,o)}function Uy(n,{x:e,y:t}){Bh(n.x,e.translate,e.scale,e.originPoint),Bh(n.y,t.translate,t.scale,t.originPoint)}const Cv=.999999999999,Rv=1.0000000000001;function Iw(n,e,t,r=!1){const o=t.length;if(!o)return;e.x=e.y=1;let a,c;for(let u=0;u<o;u++){a=t[u],c=a.projectionDelta;const{visualElement:d}=a.options;d&&d.props.style&&d.props.style.display==="contents"||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Uo(n,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),c&&(e.x*=c.x.scale,e.y*=c.y.scale,Uy(n,c)),r&&Ns(a.latestValues)&&Uo(n,a.latestValues,a.layout?.layoutBox))}e.x<Rv&&e.x>Cv&&(e.x=1),e.y<Rv&&e.y>Cv&&(e.y=1)}function Io(n,e){n.min=n.min+e,n.max=n.max+e}function bv(n,e,t,r,o=.5){const a=qt(n.min,n.max,o);Bh(n,e,t,a,r)}function Pv(n,e){return typeof n=="string"?parseFloat(n)/100*(e.max-e.min):n}function Uo(n,e,t){const r=t??n;bv(n.x,Pv(e.x,r.x),e.scaleX,e.scale,e.originX),bv(n.y,Pv(e.y,r.y),e.scaleY,e.scale,e.originY)}function Fy(n,e){return Ny(Nw(n.getBoundingClientRect(),e))}function Uw(n,e,t){const r=Fy(n,t),{scroll:o}=e;return o&&(Io(r.x,o.offset.x),Io(r.y,o.offset.y)),r}const Fw={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Ow=qo.length;function Bw(n,e,t){let r="",o=!0;for(let a=0;a<Ow;a++){const c=qo[a],u=n[c];if(u===void 0)continue;let d=!0;if(typeof u=="number")d=u===(c.startsWith("scale")?1:0);else{const h=parseFloat(u);d=c.startsWith("scale")?h===1:h===0}if(!d||t){const h=Ty(u,sm[c]);if(!d){o=!1;const p=Fw[c]||c;r+=`${p}(${h}) `}t&&(e[c]=h)}}return r=r.trim(),t?r=t(e,o?"":r):o&&(r="none"),r}function dm(n,e,t){const{style:r,vars:o,transformOrigin:a}=n;let c=!1,u=!1;for(const d in e){const h=e[d];if(Ko.has(d)){c=!0;continue}else if(Yx(d)){o[d]=h;continue}else{const p=Ty(h,sm[d]);d.startsWith("origin")?(u=!0,a[d]=p):r[d]=p}}if(e.transform||(c||t?r.transform=Bw(e,n.transform,t):r.transform&&(r.transform="none")),u){const{originX:d="50%",originY:h="50%",originZ:p=0}=a;r.transformOrigin=`${d} ${h} ${p}`}}function Oy(n,{style:e,vars:t},r,o){const a=n.style;let c;for(c in e)a[c]=e[c];o?.applyProjectionStyles(a,r);for(c in t)a.setProperty(c,t[c])}function Dv(n,e){return e.max===e.min?0:n/(e.max-e.min)*100}const Ia={correct:(n,e)=>{if(!e.target)return n;if(typeof n=="string")if($e.test(n))n=parseFloat(n);else return n;const t=Dv(n,e.target.x),r=Dv(n,e.target.y);return`${t}% ${r}%`}},kw={correct:(n,{treeScale:e,projectionDelta:t})=>{const r=n,o=Fi.parse(n);if(o.length>5)return r;const a=Fi.createTransformer(n),c=typeof o[0]!="number"?1:0,u=t.x.scale*e.x,d=t.y.scale*e.y;o[0+c]/=u,o[1+c]/=d;const h=qt(u,d,.5);return typeof o[2+c]=="number"&&(o[2+c]/=h),typeof o[3+c]=="number"&&(o[3+c]/=h),a(o)}},kh={borderRadius:{...Ia,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ia,borderTopRightRadius:Ia,borderBottomLeftRadius:Ia,borderBottomRightRadius:Ia,boxShadow:kw};function By(n,{layout:e,layoutId:t}){return Ko.has(n)||n.startsWith("origin")||(e||t!==void 0)&&(!!kh[n]||n==="opacity")}function hm(n,e,t){const r=n.style,o=e?.style,a={};if(!r)return a;for(const c in r)(Tn(r[c])||o&&Tn(o[c])||By(c,n)||t?.getValue(c)?.liveStyle!==void 0)&&(a[c]=r[c]);return a}function Vw(n){return window.getComputedStyle(n)}class zw extends Ly{constructor(){super(...arguments),this.type="html",this.renderInstance=Oy}readValueFromInstance(e,t){if(Ko.has(t))return this.projection?.isProjecting?wh(t):o1(e,t);{const r=Vw(e),o=(Yx(t)?r.getPropertyValue(t):r[t])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(e,{transformPagePoint:t}){return Fy(e,t)}build(e,t,r){dm(e,t,r.transformTemplate)}scrapeMotionValuesFromProps(e,t,r){return hm(e,t,r)}}const Hw={offset:"stroke-dashoffset",array:"stroke-dasharray"},Gw={offset:"strokeDashoffset",array:"strokeDasharray"};function Ww(n,e,t=1,r=0,o=!0){n.pathLength=1;const a=o?Hw:Gw;n[a.offset]=`${-r}`,n[a.array]=`${e} ${t}`}const jw=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function ky(n,{attrX:e,attrY:t,attrScale:r,pathLength:o,pathSpacing:a=1,pathOffset:c=0,...u},d,h,p){if(dm(n,u,h),d){n.style.viewBox&&(n.attrs.viewBox=n.style.viewBox);return}n.attrs=n.style,n.style={};const{attrs:v,style:g}=n;v.transform&&(g.transform=v.transform,delete v.transform),(g.transform||v.transformOrigin)&&(g.transformOrigin=v.transformOrigin??"50% 50%",delete v.transformOrigin),g.transform&&(g.transformBox=p?.transformBox??"fill-box",delete v.transformBox);for(const _ of jw)v[_]!==void 0&&(g[_]=v[_],delete v[_]);e!==void 0&&(v.x=e),t!==void 0&&(v.y=t),r!==void 0&&(v.scale=r),o!==void 0&&Ww(v,o,a,c,!1)}const Vy=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),zy=n=>typeof n=="string"&&n.toLowerCase()==="svg";function Xw(n,e,t,r){Oy(n,e,void 0,r);for(const o in e.attrs)n.setAttribute(Vy.has(o)?o:rm(o),e.attrs[o])}function Hy(n,e,t){const r=hm(n,e,t);for(const o in n)if(Tn(n[o])||Tn(e[o])){const a=qo.indexOf(o)!==-1?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o;r[a]=n[o]}return r}class $w extends Ly{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=dn}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Ko.has(t)){const r=My(t);return r&&r.default||0}return t=Vy.has(t)?t:rm(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,r){return Hy(e,t,r)}build(e,t,r){ky(e,t,this.isSVGTag,r.transformTemplate,r.style)}renderInstance(e,t,r,o){Xw(e,t,r,o)}mount(e){this.isSVGTag=zy(e.tagName),super.mount(e)}}const Yw=fm.length;function Gy(n){if(!n)return;if(!n.isControllingVariants){const t=n.parent?Gy(n.parent)||{}:{};return n.props.initial!==void 0&&(t.initial=n.props.initial),t}const e={};for(let t=0;t<Yw;t++){const r=fm[t],o=n.props[r];(Qa(o)||o===!1)&&(e[r]=o)}return e}function Wy(n,e){if(!Array.isArray(e))return!1;const t=e.length;if(t!==n.length)return!1;for(let r=0;r<t;r++)if(e[r]!==n[r])return!1;return!0}const qw=[...um].reverse(),Kw=um.length;function Zw(n){return e=>Promise.all(e.map(({animation:t,options:r})=>X1(n,t,r)))}function Qw(n){let e=Zw(n),t=Lv(),r=!0,o=!1;const a=h=>(p,v)=>{const g=Hs(n,v,h==="exit"?n.presenceContext?.custom:void 0);if(g){const{transition:_,transitionEnd:M,...E}=g;p={...p,...E,...M}}return p};function c(h){e=h(n)}function u(h){const{props:p}=n,v=Gy(n.parent)||{},g=[],_=new Set;let M={},E=1/0;for(let y=0;y<Kw;y++){const w=qw[y],b=t[w],P=p[w]!==void 0?p[w]:v[w],I=Qa(P),U=w===h?b.isActive:null;U===!1&&(E=y);let V=P===v[w]&&P!==p[w]&&I;if(V&&(r||o)&&n.manuallyAnimateOnMount&&(V=!1),b.protectedKeys={...M},!b.isActive&&U===null||!P&&!b.prevProp||Au(P)||typeof P=="boolean")continue;if(w==="exit"&&b.isActive&&U!==!0){b.prevResolvedValues&&(M={...M,...b.prevResolvedValues});continue}const A=Jw(b.prevProp,P);let D=A||w===h&&b.isActive&&!V&&I||y>E&&I,K=!1;const B=Array.isArray(P)?P:[P];let Q=B.reduce(a(w),{});U===!1&&(Q={});const{prevResolvedValues:J={}}=b,ne={...J,...Q},G=X=>{D=!0,_.has(X)&&(K=!0,_.delete(X)),b.needsAnimating[X]=!0;const ee=n.getValue(X);ee&&(ee.liveStyle=!1)};for(const X in ne){const ee=Q[X],ae=J[X];if(M.hasOwnProperty(X))continue;let O=!1;Dh(ee)&&Dh(ae)?O=!Wy(ee,ae):O=ee!==ae,O?ee!=null?G(X):_.add(X):ee!==void 0&&_.has(X)?G(X):b.protectedKeys[X]=!0}b.prevProp=P,b.prevResolvedValues=Q,b.isActive&&(M={...M,...Q}),(r||o)&&n.blockInitialAnimation&&(D=!1);const H=V&&A;D&&(!H||K)&&g.push(...B.map(X=>{const ee={type:w};if(typeof X=="string"&&(r||o)&&!H&&n.manuallyAnimateOnMount&&n.parent){const{parent:ae}=n,O=Hs(ae,X);if(ae.enteringChildren&&O){const{delayChildren:Z}=O.transition||{};ee.delay=hy(ae.enteringChildren,n,Z)}}return{animation:X,options:ee}}))}if(_.size){const y={};if(typeof p.initial!="boolean"){const w=Hs(n,Array.isArray(p.initial)?p.initial[0]:p.initial);w&&w.transition&&(y.transition=w.transition)}_.forEach(w=>{const b=n.getBaseTarget(w),P=n.getValue(w);P&&(P.liveStyle=!0),y[w]=b??null}),g.push({animation:y})}let S=!!g.length;return r&&(p.initial===!1||p.initial===p.animate)&&!n.manuallyAnimateOnMount&&(S=!1),r=!1,o=!1,S?e(g):Promise.resolve()}function d(h,p){if(t[h].isActive===p)return Promise.resolve();n.variantChildren?.forEach(g=>g.animationState?.setActive(h,p)),t[h].isActive=p;const v=u(h);for(const g in t)t[g].protectedKeys={};return v}return{animateChanges:u,setActive:d,setAnimateFunction:c,getState:()=>t,reset:()=>{t=Lv(),o=!0}}}function Jw(n,e){return typeof e=="string"?e!==n:Array.isArray(e)?!Wy(e,n):!1}function Ts(n=!1){return{isActive:n,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function Lv(){return{animate:Ts(!0),whileInView:Ts(),whileHover:Ts(),whileTap:Ts(),whileDrag:Ts(),whileFocus:Ts(),exit:Ts()}}function Vh(n,e){n.min=e.min,n.max=e.max}function Ri(n,e){Vh(n.x,e.x),Vh(n.y,e.y)}function Nv(n,e){n.translate=e.translate,n.scale=e.scale,n.originPoint=e.originPoint,n.origin=e.origin}const jy=1e-4,eA=1-jy,tA=1+jy,Xy=.01,nA=0-Xy,iA=0+Xy;function kn(n){return n.max-n.min}function rA(n,e,t){return Math.abs(n-e)<=t}function Iv(n,e,t,r=.5){n.origin=r,n.originPoint=qt(e.min,e.max,n.origin),n.scale=kn(t)/kn(e),n.translate=qt(t.min,t.max,n.origin)-n.originPoint,(n.scale>=eA&&n.scale<=tA||isNaN(n.scale))&&(n.scale=1),(n.translate>=nA&&n.translate<=iA||isNaN(n.translate))&&(n.translate=0)}function Ya(n,e,t,r){Iv(n.x,e.x,t.x,r?r.originX:void 0),Iv(n.y,e.y,t.y,r?r.originY:void 0)}function Uv(n,e,t){n.min=t.min+e.min,n.max=n.min+kn(e)}function sA(n,e,t){Uv(n.x,e.x,t.x),Uv(n.y,e.y,t.y)}function Fv(n,e,t){n.min=e.min-t.min,n.max=n.min+kn(e)}function vu(n,e,t){Fv(n.x,e.x,t.x),Fv(n.y,e.y,t.y)}function Ov(n,e,t,r,o){return n-=e,n=gu(n,1/t,r),o!==void 0&&(n=gu(n,1/o,r)),n}function oA(n,e=0,t=1,r=.5,o,a=n,c=n){if(Ki.test(e)&&(e=parseFloat(e),e=qt(c.min,c.max,e/100)-c.min),typeof e!="number")return;let u=qt(a.min,a.max,r);n===a&&(u-=e),n.min=Ov(n.min,e,t,u,o),n.max=Ov(n.max,e,t,u,o)}function Bv(n,e,[t,r,o],a,c){oA(n,e[t],e[r],e[o],e.scale,a,c)}const aA=["x","scaleX","originX"],lA=["y","scaleY","originY"];function kv(n,e,t,r){Bv(n.x,e,aA,t?t.x:void 0,r?r.x:void 0),Bv(n.y,e,lA,t?t.y:void 0,r?r.y:void 0)}function Vv(n){return n.translate===0&&n.scale===1}function $y(n){return Vv(n.x)&&Vv(n.y)}function zv(n,e){return n.min===e.min&&n.max===e.max}function cA(n,e){return zv(n.x,e.x)&&zv(n.y,e.y)}function Hv(n,e){return Math.round(n.min)===Math.round(e.min)&&Math.round(n.max)===Math.round(e.max)}function Yy(n,e){return Hv(n.x,e.x)&&Hv(n.y,e.y)}function Gv(n){return kn(n.x)/kn(n.y)}function Wv(n,e){return n.translate===e.translate&&n.scale===e.scale&&n.originPoint===e.originPoint}function Xi(n){return[n("x"),n("y")]}function uA(n,e,t){let r="";const o=n.x.translate/e.x,a=n.y.translate/e.y,c=t?.z||0;if((o||a||c)&&(r=`translate3d(${o}px, ${a}px, ${c}px) `),(e.x!==1||e.y!==1)&&(r+=`scale(${1/e.x}, ${1/e.y}) `),t){const{transformPerspective:h,rotate:p,rotateX:v,rotateY:g,skewX:_,skewY:M}=t;h&&(r=`perspective(${h}px) ${r}`),p&&(r+=`rotate(${p}deg) `),v&&(r+=`rotateX(${v}deg) `),g&&(r+=`rotateY(${g}deg) `),_&&(r+=`skewX(${_}deg) `),M&&(r+=`skewY(${M}deg) `)}const u=n.x.scale*e.x,d=n.y.scale*e.y;return(u!==1||d!==1)&&(r+=`scale(${u}, ${d})`),r||"none"}const qy=["TopLeft","TopRight","BottomLeft","BottomRight"],fA=qy.length,jv=n=>typeof n=="string"?parseFloat(n):n,Xv=n=>typeof n=="number"||$e.test(n);function dA(n,e,t,r,o,a){o?(n.opacity=qt(0,t.opacity??1,hA(r)),n.opacityExit=qt(e.opacity??1,0,pA(r))):a&&(n.opacity=qt(e.opacity??1,t.opacity??1,r));for(let c=0;c<fA;c++){const u=`border${qy[c]}Radius`;let d=$v(e,u),h=$v(t,u);if(d===void 0&&h===void 0)continue;d||(d=0),h||(h=0),d===0||h===0||Xv(d)===Xv(h)?(n[u]=Math.max(qt(jv(d),jv(h),r),0),(Ki.test(h)||Ki.test(d))&&(n[u]+="%")):n[u]=h}(e.rotate||t.rotate)&&(n.rotate=qt(e.rotate||0,t.rotate||0,r))}function $v(n,e){return n[e]!==void 0?n[e]:n.borderRadius}const hA=Ky(0,.5,Hx),pA=Ky(.5,.95,xi);function Ky(n,e,t){return r=>r<n?0:r>e?1:t(Ka(n,e,r))}function mA(n,e,t){const r=Tn(n)?n:ko(n);return r.start(nm("",r,e,t)),r.animation}function Ja(n,e,t,r={passive:!0}){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t)}const gA=(n,e)=>n.depth-e.depth;class vA{constructor(){this.children=[],this.isDirty=!1}add(e){zp(this.children,e),this.isDirty=!0}remove(e){fu(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(gA),this.isDirty=!1,this.children.forEach(e)}}function _A(n,e){const t=Bn.now(),r=({timestamp:o})=>{const a=o-t;a>=e&&(rs(r),n(a-e))};return Gt.setup(r,!0),()=>rs(r)}function nu(n){return Tn(n)?n.get():n}class xA{constructor(){this.members=[]}add(e){zp(this.members,e);for(let t=this.members.length-1;t>=0;t--){const r=this.members[t];if(r===e||r===this.lead||r===this.prevLead)continue;const o=r.instance;(!o||o.isConnected===!1)&&!r.snapshot&&(fu(this.members,r),r.unmount())}e.scheduleRender()}remove(e){if(fu(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const t=this.members[this.members.length-1];t&&this.promote(t)}}relegate(e){for(let t=this.members.indexOf(e)-1;t>=0;t--){const r=this.members[t];if(r.isPresent!==!1&&r.instance?.isConnected!==!1)return this.promote(r),!0}return!1}promote(e,t){const r=this.lead;if(e!==r&&(this.prevLead=r,this.lead=e,e.show(),r)){r.updateSnapshot(),e.scheduleRender();const{layoutDependency:o}=r.options,{layoutDependency:a}=e.options;(o===void 0||o!==a)&&(e.resumeFrom=r,t&&(r.preserveOpacity=!0),r.snapshot&&(e.snapshot=r.snapshot,e.snapshot.latestValues=r.animationValues||r.latestValues),e.root?.isUpdating&&(e.isLayoutDirty=!0)),e.options.crossfade===!1&&r.hide()}}exitAnimationComplete(){this.members.forEach(e=>{e.options.onExitComplete?.(),e.resumingFrom?.options.onExitComplete?.()})}scheduleRender(){this.members.forEach(e=>e.instance&&e.scheduleRender(!1))}removeLeadSnapshot(){this.lead?.snapshot&&(this.lead.snapshot=void 0)}}const iu={hasAnimatedSinceResize:!0,hasEverUpdated:!1},Cd=["","X","Y","Z"],yA=1e3;let SA=0;function Rd(n,e,t,r){const{latestValues:o}=e;o[n]&&(t[n]=o[n],e.setStaticValue(n,0),r&&(r[n]=0))}function Zy(n){if(n.hasCheckedOptimisedAppear=!0,n.root===n)return;const{visualElement:e}=n.options;if(!e)return;const t=_y(e);if(window.MotionHasOptimisedAnimation(t,"transform")){const{layout:o,layoutId:a}=n.options;window.MotionCancelOptimisedAnimation(t,"transform",Gt,!(o||a))}const{parent:r}=n;r&&!r.hasCheckedOptimisedAppear&&Zy(r)}function Qy({attachResizeListener:n,defaultParent:e,measureScroll:t,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(c={},u=e?.()){this.id=SA++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(TA),this.nodes.forEach(RA),this.nodes.forEach(bA),this.nodes.forEach(wA)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=c,this.root=u?u.root||u:this,this.path=u?[...u.path,u]:[],this.parent=u,this.depth=u?u.depth+1:0;for(let d=0;d<this.path.length;d++)this.path[d].shouldResetTransform=!0;this.root===this&&(this.nodes=new vA)}addEventListener(c,u){return this.eventHandlers.has(c)||this.eventHandlers.set(c,new Gp),this.eventHandlers.get(c).add(u)}notifyListeners(c,...u){const d=this.eventHandlers.get(c);d&&d.notify(...u)}hasListeners(c){return this.eventHandlers.has(c)}mount(c){if(this.instance)return;this.isSVG=cm(c)&&!Ew(c),this.instance=c;const{layoutId:u,layout:d,visualElement:h}=this.options;if(h&&!h.current&&h.mount(c),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(d||u)&&(this.isLayoutDirty=!0),n){let p,v=0;const g=()=>this.root.updateBlockedByResize=!1;Gt.read(()=>{v=window.innerWidth}),n(c,()=>{const _=window.innerWidth;_!==v&&(v=_,this.root.updateBlockedByResize=!0,p&&p(),p=_A(g,250),iu.hasAnimatedSinceResize&&(iu.hasAnimatedSinceResize=!1,this.nodes.forEach(Kv)))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&h&&(u||d)&&this.addEventListener("didUpdate",({delta:p,hasLayoutChanged:v,hasRelativeLayoutChanged:g,layout:_})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const M=this.options.transition||h.getDefaultTransition()||IA,{onLayoutAnimationStart:E,onLayoutAnimationComplete:S}=h.getProps(),y=!this.targetLayout||!Yy(this.targetLayout,_),w=!v&&g;if(this.options.layoutRoot||this.resumeFrom||w||v&&(y||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const b={...tm(M,"layout"),onPlay:E,onComplete:S};(h.shouldReduceMotion||this.options.layoutRoot)&&(b.delay=0,b.type=!1),this.startAnimation(b),this.setAnimationOrigin(p,w)}else v||Kv(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=_})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const c=this.getStack();c&&c.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),rs(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(PA),this.animationId++)}getTransformTemplate(){const{visualElement:c}=this.options;return c&&c.getProps().transformTemplate}willUpdate(c=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zy(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const v=this.path[p];v.shouldResetTransform=!0,(typeof v.latestValues.x=="string"||typeof v.latestValues.y=="string")&&(v.isLayoutDirty=!0),v.updateScroll("snapshot"),v.options.layoutRoot&&v.willUpdate(!1)}const{layoutId:u,layout:d}=this.options;if(u===void 0&&!d)return;const h=this.getTransformTemplate();this.prevTransformTemplateValue=h?h(this.latestValues,""):void 0,this.updateSnapshot(),c&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Yv);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(qv);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(CA),this.nodes.forEach(MA),this.nodes.forEach(EA)):this.nodes.forEach(qv),this.clearAllSnapshots();const u=Bn.now();En.delta=Ji(0,1e3/60,u-En.timestamp),En.timestamp=u,En.isProcessing=!0,xd.update.process(En),xd.preRender.process(En),xd.render.process(En),En.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,am.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(AA),this.sharedNodes.forEach(DA)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,Gt.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){Gt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!kn(this.snapshot.measuredBox.x)&&!kn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let d=0;d<this.path.length;d++)this.path[d].updateScroll();const c=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=dn(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:u}=this.options;u&&u.notify("LayoutMeasure",this.layout.layoutBox,c?c.layoutBox:void 0)}updateScroll(c="measure"){let u=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===c&&(u=!1),u&&this.instance){const d=r(this.instance);this.scroll={animationId:this.root.animationId,phase:c,isRoot:d,offset:t(this.instance),wasRoot:this.scroll?this.scroll.isRoot:d}}}resetTransform(){if(!o)return;const c=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,u=this.projectionDelta&&!$y(this.projectionDelta),d=this.getTransformTemplate(),h=d?d(this.latestValues,""):void 0,p=h!==this.prevTransformTemplateValue;c&&this.instance&&(u||Ns(this.latestValues)||p)&&(o(this.instance,h),this.shouldResetTransform=!1,this.scheduleRender())}measure(c=!0){const u=this.measurePageBox();let d=this.removeElementScroll(u);return c&&(d=this.removeTransform(d)),UA(d),{animationId:this.root.animationId,measuredBox:u,layoutBox:d,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:c}=this.options;if(!c)return dn();const u=c.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(FA))){const{scroll:h}=this.root;h&&(Io(u.x,h.offset.x),Io(u.y,h.offset.y))}return u}removeElementScroll(c){const u=dn();if(Ri(u,c),this.scroll?.wasRoot)return u;for(let d=0;d<this.path.length;d++){const h=this.path[d],{scroll:p,options:v}=h;h!==this.root&&p&&v.layoutScroll&&(p.wasRoot&&Ri(u,c),Io(u.x,p.offset.x),Io(u.y,p.offset.y))}return u}applyTransform(c,u=!1){const d=dn();Ri(d,c);for(let h=0;h<this.path.length;h++){const p=this.path[h];!u&&p.options.layoutScroll&&p.scroll&&p!==p.root&&Uo(d,{x:-p.scroll.offset.x,y:-p.scroll.offset.y}),Ns(p.latestValues)&&Uo(d,p.latestValues,p.layout?.layoutBox)}return Ns(this.latestValues)&&Uo(d,this.latestValues,this.layout?.layoutBox),d}removeTransform(c){const u=dn();Ri(u,c);for(let d=0;d<this.path.length;d++){const h=this.path[d];if(!Ns(h.latestValues))continue;let p;h.instance&&(Oh(h.latestValues)&&h.updateSnapshot(),p=dn(),Ri(p,h.measurePageBox())),kv(u,h.latestValues,h.snapshot?.layoutBox,p)}return Ns(this.latestValues)&&kv(u,this.latestValues),u}setTargetDelta(c){this.targetDelta=c,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(c){this.options={...this.options,...c,crossfade:c.crossfade!==void 0?c.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==En.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(c=!1){const u=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=u.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=u.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=u.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==u;if(!(c||d&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:p,layoutId:v}=this.options;if(!this.layout||!(p||v))return;this.resolvedRelativeTargetAt=En.timestamp;const g=this.getClosestProjectingParent();g&&this.linkedParentVersion!==g.layoutVersion&&!g.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(g&&g.layout?this.createRelativeTarget(g,this.layout.layoutBox,g.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=dn(),this.targetWithTransforms=dn()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),sA(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ri(this.target,this.layout.layoutBox),Uy(this.target,this.targetDelta)):Ri(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,g&&!!g.resumingFrom==!!this.resumingFrom&&!g.options.layoutScroll&&g.target&&this.animationProgress!==1?this.createRelativeTarget(g,this.target,g.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||Oh(this.parent.latestValues)||Iy(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(c,u,d){this.relativeParent=c,this.linkedParentVersion=c.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=dn(),this.relativeTargetOrigin=dn(),vu(this.relativeTargetOrigin,u,d),Ri(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){const c=this.getLead(),u=!!this.resumingFrom||this!==c;let d=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(d=!1),u&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===En.timestamp&&(d=!1),d)return;const{layout:h,layoutId:p}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(h||p))return;Ri(this.layoutCorrected,this.layout.layoutBox);const v=this.treeScale.x,g=this.treeScale.y;Iw(this.layoutCorrected,this.treeScale,this.path,u),c.layout&&!c.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(c.target=c.layout.layoutBox,c.targetWithTransforms=dn());const{target:_}=c;if(!_){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Nv(this.prevProjectionDelta.x,this.projectionDelta.x),Nv(this.prevProjectionDelta.y,this.projectionDelta.y)),Ya(this.projectionDelta,this.layoutCorrected,_,this.latestValues),(this.treeScale.x!==v||this.treeScale.y!==g||!Wv(this.projectionDelta.x,this.prevProjectionDelta.x)||!Wv(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",_))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(c=!0){if(this.options.visualElement?.scheduleRender(),c){const u=this.getStack();u&&u.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=No(),this.projectionDelta=No(),this.projectionDeltaWithTransform=No()}setAnimationOrigin(c,u=!1){const d=this.snapshot,h=d?d.latestValues:{},p={...this.latestValues},v=No();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!u;const g=dn(),_=d?d.source:void 0,M=this.layout?this.layout.source:void 0,E=_!==M,S=this.getStack(),y=!S||S.members.length<=1,w=!!(E&&!y&&this.options.crossfade===!0&&!this.path.some(NA));this.animationProgress=0;let b;this.mixTargetDelta=P=>{const I=P/1e3;Zv(v.x,c.x,I),Zv(v.y,c.y,I),this.setTargetDelta(v),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(vu(g,this.layout.layoutBox,this.relativeParent.layout.layoutBox),LA(this.relativeTarget,this.relativeTargetOrigin,g,I),b&&cA(this.relativeTarget,b)&&(this.isProjectionDirty=!1),b||(b=dn()),Ri(b,this.relativeTarget)),E&&(this.animationValues=p,dA(p,h,this.latestValues,I,w,y)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=I},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(c){this.notifyListeners("animationStart"),this.currentAnimation?.stop(),this.resumingFrom?.currentAnimation?.stop(),this.pendingAnimation&&(rs(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Gt.update(()=>{iu.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=ko(0)),this.motionValue.jump(0,!1),this.currentAnimation=mA(this.motionValue,[0,1e3],{...c,velocity:0,isSync:!0,onUpdate:u=>{this.mixTargetDelta(u),c.onUpdate&&c.onUpdate(u)},onStop:()=>{},onComplete:()=>{c.onComplete&&c.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const c=this.getStack();c&&c.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(yA),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const c=this.getLead();let{targetWithTransforms:u,target:d,layout:h,latestValues:p}=c;if(!(!u||!d||!h)){if(this!==c&&this.layout&&h&&Jy(this.options.animationType,this.layout.layoutBox,h.layoutBox)){d=this.target||dn();const v=kn(this.layout.layoutBox.x);d.x.min=c.target.x.min,d.x.max=d.x.min+v;const g=kn(this.layout.layoutBox.y);d.y.min=c.target.y.min,d.y.max=d.y.min+g}Ri(u,d),Uo(u,p),Ya(this.projectionDeltaWithTransform,this.layoutCorrected,u,p)}}registerSharedNode(c,u){this.sharedNodes.has(c)||this.sharedNodes.set(c,new xA),this.sharedNodes.get(c).add(u);const h=u.options.initialPromotionConfig;u.promote({transition:h?h.transition:void 0,preserveFollowOpacity:h&&h.shouldPreserveFollowOpacity?h.shouldPreserveFollowOpacity(u):void 0})}isLead(){const c=this.getStack();return c?c.lead===this:!0}getLead(){const{layoutId:c}=this.options;return c?this.getStack()?.lead||this:this}getPrevLead(){const{layoutId:c}=this.options;return c?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:c}=this.options;if(c)return this.root.sharedNodes.get(c)}promote({needsReset:c,transition:u,preserveFollowOpacity:d}={}){const h=this.getStack();h&&h.promote(this,d),c&&(this.projectionDelta=void 0,this.needsReset=!0),u&&this.setOptions({transition:u})}relegate(){const c=this.getStack();return c?c.relegate(this):!1}resetSkewAndRotation(){const{visualElement:c}=this.options;if(!c)return;let u=!1;const{latestValues:d}=c;if((d.z||d.rotate||d.rotateX||d.rotateY||d.rotateZ||d.skewX||d.skewY)&&(u=!0),!u)return;const h={};d.z&&Rd("z",c,h,this.animationValues);for(let p=0;p<Cd.length;p++)Rd(`rotate${Cd[p]}`,c,h,this.animationValues),Rd(`skew${Cd[p]}`,c,h,this.animationValues);c.render();for(const p in h)c.setStaticValue(p,h[p]),this.animationValues&&(this.animationValues[p]=h[p]);c.scheduleRender()}applyProjectionStyles(c,u){if(!this.instance||this.isSVG)return;if(!this.isVisible){c.visibility="hidden";return}const d=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,c.visibility="",c.opacity="",c.pointerEvents=nu(u?.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none";return}const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){this.options.layoutId&&(c.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,c.pointerEvents=nu(u?.pointerEvents)||""),this.hasProjected&&!Ns(this.latestValues)&&(c.transform=d?d({},""):"none",this.hasProjected=!1);return}c.visibility="";const p=h.animationValues||h.latestValues;this.applyTransformsToTarget();let v=uA(this.projectionDeltaWithTransform,this.treeScale,p);d&&(v=d(p,v)),c.transform=v;const{x:g,y:_}=this.projectionDelta;c.transformOrigin=`${g.origin*100}% ${_.origin*100}% 0`,h.animationValues?c.opacity=h===this?p.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=h===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const M in kh){if(p[M]===void 0)continue;const{correct:E,applyTo:S,isCSSVariable:y}=kh[M],w=v==="none"?p[M]:E(p[M],h);if(S){const b=S.length;for(let P=0;P<b;P++)c[S[P]]=w}else y?this.options.visualElement.renderState.vars[M]=w:c[M]=w}this.options.layoutId&&(c.pointerEvents=h===this?nu(u?.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(c=>c.currentAnimation?.stop()),this.root.nodes.forEach(Yv),this.root.sharedNodes.clear()}}}function MA(n){n.updateLayout()}function EA(n){const e=n.resumeFrom?.snapshot||n.snapshot;if(n.isLead()&&n.layout&&e&&n.hasListeners("didUpdate")){const{layoutBox:t,measuredBox:r}=n.layout,{animationType:o}=n.options,a=e.source!==n.layout.source;if(o==="size")Xi(p=>{const v=a?e.measuredBox[p]:e.layoutBox[p],g=kn(v);v.min=t[p].min,v.max=v.min+g});else if(o==="x"||o==="y"){const p=o==="x"?"y":"x";Vh(a?e.measuredBox[p]:e.layoutBox[p],t[p])}else Jy(o,e.layoutBox,t)&&Xi(p=>{const v=a?e.measuredBox[p]:e.layoutBox[p],g=kn(t[p]);v.max=v.min+g,n.relativeTarget&&!n.currentAnimation&&(n.isProjectionDirty=!0,n.relativeTarget[p].max=n.relativeTarget[p].min+g)});const c=No();Ya(c,t,e.layoutBox);const u=No();a?Ya(u,n.applyTransform(r,!0),e.measuredBox):Ya(u,t,e.layoutBox);const d=!$y(c);let h=!1;if(!n.resumeFrom){const p=n.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:v,layout:g}=p;if(v&&g){const _=dn();vu(_,e.layoutBox,v.layoutBox);const M=dn();vu(M,t,g.layoutBox),Yy(_,M)||(h=!0),p.options.layoutRoot&&(n.relativeTarget=M,n.relativeTargetOrigin=_,n.relativeParent=p)}}}n.notifyListeners("didUpdate",{layout:t,snapshot:e,delta:u,layoutDelta:c,hasLayoutChanged:d,hasRelativeLayoutChanged:h})}else if(n.isLead()){const{onExitComplete:t}=n.options;t&&t()}n.options.transition=void 0}function TA(n){n.parent&&(n.isProjecting()||(n.isProjectionDirty=n.parent.isProjectionDirty),n.isSharedProjectionDirty||(n.isSharedProjectionDirty=!!(n.isProjectionDirty||n.parent.isProjectionDirty||n.parent.isSharedProjectionDirty)),n.isTransformDirty||(n.isTransformDirty=n.parent.isTransformDirty))}function wA(n){n.isProjectionDirty=n.isSharedProjectionDirty=n.isTransformDirty=!1}function AA(n){n.clearSnapshot()}function Yv(n){n.clearMeasurements()}function qv(n){n.isLayoutDirty=!1}function CA(n){const{visualElement:e}=n.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),n.resetTransform()}function Kv(n){n.finishAnimation(),n.targetDelta=n.relativeTarget=n.target=void 0,n.isProjectionDirty=!0}function RA(n){n.resolveTargetDelta()}function bA(n){n.calcProjection()}function PA(n){n.resetSkewAndRotation()}function DA(n){n.removeLeadSnapshot()}function Zv(n,e,t){n.translate=qt(e.translate,0,t),n.scale=qt(e.scale,1,t),n.origin=e.origin,n.originPoint=e.originPoint}function Qv(n,e,t,r){n.min=qt(e.min,t.min,r),n.max=qt(e.max,t.max,r)}function LA(n,e,t,r){Qv(n.x,e.x,t.x,r),Qv(n.y,e.y,t.y,r)}function NA(n){return n.animationValues&&n.animationValues.opacityExit!==void 0}const IA={duration:.45,ease:[.4,0,.1,1]},Jv=n=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(n),e_=Jv("applewebkit/")&&!Jv("chrome/")?Math.round:xi;function t_(n){n.min=e_(n.min),n.max=e_(n.max)}function UA(n){t_(n.x),t_(n.y)}function Jy(n,e,t){return n==="position"||n==="preserve-aspect"&&!rA(Gv(e),Gv(t),.2)}function FA(n){return n!==n.root&&n.scroll?.wasRoot}const OA=Qy({attachResizeListener:(n,e)=>Ja(n,"resize",e),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body?.scrollLeft||0,y:document.documentElement.scrollTop||document.body?.scrollTop||0}),checkIsScrollRoot:()=>!0}),bd={current:void 0},eS=Qy({measureScroll:n=>({x:n.scrollLeft,y:n.scrollTop}),defaultParent:()=>{if(!bd.current){const n=new OA({});n.mount(window),n.setOptions({layoutScroll:!0}),bd.current=n}return bd.current},resetTransform:(n,e)=>{n.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:n=>window.getComputedStyle(n).position==="fixed"}),tS=ge.createContext({transformPagePoint:n=>n,isStatic:!1,reducedMotion:"never"});function BA(n=!0){const e=ge.useContext(Vp);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:r,register:o}=e,a=ge.useId();ge.useEffect(()=>{if(n)return o(a)},[n]);const c=ge.useCallback(()=>n&&r&&r(a),[a,r,n]);return!t&&r?[!1,c]:[!0]}const nS=ge.createContext({strict:!1}),n_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let i_=!1;function kA(){if(i_)return;const n={};for(const e in n_)n[e]={isEnabled:t=>n_[e].some(r=>!!t[r])};Dy(n),i_=!0}function iS(){return kA(),Pw()}function VA(n){const e=iS();for(const t in n)e[t]={...e[t],...n[t]};Dy(e)}const zA=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function _u(n){return n.startsWith("while")||n.startsWith("drag")&&n!=="draggable"||n.startsWith("layout")||n.startsWith("onTap")||n.startsWith("onPan")||n.startsWith("onLayout")||zA.has(n)}let rS=n=>!_u(n);function HA(n){typeof n=="function"&&(rS=e=>e.startsWith("on")?!_u(e):n(e))}try{HA(require("@emotion/is-prop-valid").default)}catch{}function GA(n,e,t){const r={};for(const o in n)o==="values"&&typeof n.values=="object"||Tn(n[o])||(rS(o)||t===!0&&_u(o)||!e&&!_u(o)||n.draggable&&o.startsWith("onDrag"))&&(r[o]=n[o]);return r}const Ru=ge.createContext({});function WA(n,e){if(Cu(n)){const{initial:t,animate:r}=n;return{initial:t===!1||Qa(t)?t:void 0,animate:Qa(r)?r:void 0}}return n.inherit!==!1?e:{}}function jA(n){const{initial:e,animate:t}=WA(n,ge.useContext(Ru));return ge.useMemo(()=>({initial:e,animate:t}),[r_(e),r_(t)])}function r_(n){return Array.isArray(n)?n.join(" "):n}const pm=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function sS(n,e,t){for(const r in e)!Tn(e[r])&&!By(r,t)&&(n[r]=e[r])}function XA({transformTemplate:n},e){return ge.useMemo(()=>{const t=pm();return dm(t,e,n),Object.assign({},t.vars,t.style)},[e])}function $A(n,e){const t=n.style||{},r={};return sS(r,t,n),Object.assign(r,XA(n,e)),r}function YA(n,e){const t={},r=$A(n,e);return n.drag&&n.dragListener!==!1&&(t.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=n.drag===!0?"none":`pan-${n.drag==="x"?"y":"x"}`),n.tabIndex===void 0&&(n.onTap||n.onTapStart||n.whileTap)&&(t.tabIndex=0),t.style=r,t}const oS=()=>({...pm(),attrs:{}});function qA(n,e,t,r){const o=ge.useMemo(()=>{const a=oS();return ky(a,e,zy(r),n.transformTemplate,n.style),{...a.attrs,style:{...a.style}}},[e]);if(n.style){const a={};sS(a,n.style,n),o.style={...a,...o.style}}return o}const KA=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function mm(n){return typeof n!="string"||n.includes("-")?!1:!!(KA.indexOf(n)>-1||/[A-Z]/u.test(n))}function ZA(n,e,t,{latestValues:r},o,a=!1,c){const d=(c??mm(n)?qA:YA)(e,r,o,n),h=GA(e,typeof n=="string",a),p=n!==ge.Fragment?{...h,...d,ref:t}:{},{children:v}=e,g=ge.useMemo(()=>Tn(v)?v.get():v,[v]);return ge.createElement(n,{...p,children:g})}function QA({scrapeMotionValuesFromProps:n,createRenderState:e},t,r,o){return{latestValues:JA(t,r,o,n),renderState:e()}}function JA(n,e,t,r){const o={},a=r(n,{});for(const g in a)o[g]=nu(a[g]);let{initial:c,animate:u}=n;const d=Cu(n),h=by(n);e&&h&&!d&&n.inherit!==!1&&(c===void 0&&(c=e.initial),u===void 0&&(u=e.animate));let p=t?t.initial===!1:!1;p=p||c===!1;const v=p?u:c;if(v&&typeof v!="boolean"&&!Au(v)){const g=Array.isArray(v)?v:[v];for(let _=0;_<g.length;_++){const M=im(n,g[_]);if(M){const{transitionEnd:E,transition:S,...y}=M;for(const w in y){let b=y[w];if(Array.isArray(b)){const P=p?b.length-1:0;b=b[P]}b!==null&&(o[w]=b)}for(const w in E)o[w]=E[w]}}}return o}const aS=n=>(e,t)=>{const r=ge.useContext(Ru),o=ge.useContext(Vp),a=()=>QA(n,e,r,o);return t?a():QE(a)},eC=aS({scrapeMotionValuesFromProps:hm,createRenderState:pm}),tC=aS({scrapeMotionValuesFromProps:Hy,createRenderState:oS}),nC=Symbol.for("motionComponentSymbol");function iC(n,e,t){const r=ge.useRef(t);ge.useInsertionEffect(()=>{r.current=t});const o=ge.useRef(null);return ge.useCallback(a=>{a&&n.onMount?.(a);const c=r.current;if(typeof c=="function")if(a){const u=c(a);typeof u=="function"&&(o.current=u)}else o.current?(o.current(),o.current=null):c(a);else c&&(c.current=a);e&&(a?e.mount(a):e.unmount())},[e])}const lS=ge.createContext({});function Po(n){return n&&typeof n=="object"&&Object.prototype.hasOwnProperty.call(n,"current")}function rC(n,e,t,r,o,a){const{visualElement:c}=ge.useContext(Ru),u=ge.useContext(nS),d=ge.useContext(Vp),h=ge.useContext(tS),p=h.reducedMotion,v=h.skipAnimations,g=ge.useRef(null),_=ge.useRef(!1);r=r||u.renderer,!g.current&&r&&(g.current=r(n,{visualState:e,parent:c,props:t,presenceContext:d,blockInitialAnimation:d?d.initial===!1:!1,reducedMotionConfig:p,skipAnimations:v,isSVG:a}),_.current&&g.current&&(g.current.manuallyAnimateOnMount=!0));const M=g.current,E=ge.useContext(lS);M&&!M.projection&&o&&(M.type==="html"||M.type==="svg")&&sC(g.current,t,o,E);const S=ge.useRef(!1);ge.useInsertionEffect(()=>{M&&S.current&&M.update(t,d)});const y=t[vy],w=ge.useRef(!!y&&typeof window<"u"&&!window.MotionHandoffIsComplete?.(y)&&window.MotionHasOptimisedAnimation?.(y));return eT(()=>{_.current=!0,M&&(S.current=!0,window.MotionIsMounted=!0,M.updateFeatures(),M.scheduleRenderMicrotask(),w.current&&M.animationState&&M.animationState.animateChanges())}),ge.useEffect(()=>{M&&(!w.current&&M.animationState&&M.animationState.animateChanges(),w.current&&(queueMicrotask(()=>{window.MotionHandoffMarkAsComplete?.(y)}),w.current=!1),M.enteringChildren=void 0)}),M}function sC(n,e,t,r){const{layoutId:o,layout:a,drag:c,dragConstraints:u,layoutScroll:d,layoutRoot:h,layoutCrossfade:p}=e;n.projection=new t(n.latestValues,e["data-framer-portal-id"]?void 0:cS(n.parent)),n.projection.setOptions({layoutId:o,layout:a,alwaysMeasureLayout:!!c||u&&Po(u),visualElement:n,animationType:typeof a=="string"?a:"both",initialPromotionConfig:r,crossfade:p,layoutScroll:d,layoutRoot:h})}function cS(n){if(n)return n.options.allowProjection!==!1?n.projection:cS(n.parent)}function Pd(n,{forwardMotionProps:e=!1,type:t}={},r,o){r&&VA(r);const a=t?t==="svg":mm(n),c=a?tC:eC;function u(h,p){let v;const g={...ge.useContext(tS),...h,layoutId:oC(h)},{isStatic:_}=g,M=jA(h),E=c(h,_);if(!_&&typeof window<"u"){aC();const S=lC(g);v=S.MeasureLayout,M.visualElement=rC(n,E,g,o,S.ProjectionNode,a)}return N.jsxs(Ru.Provider,{value:M,children:[v&&M.visualElement?N.jsx(v,{visualElement:M.visualElement,...g}):null,ZA(n,h,iC(E,M.visualElement,p),E,_,e,a)]})}u.displayName=`motion.${typeof n=="string"?n:`create(${n.displayName??n.name??""})`}`;const d=ge.forwardRef(u);return d[nC]=n,d}function oC({layoutId:n}){const e=ge.useContext(Px).id;return e&&n!==void 0?e+"-"+n:n}function aC(n,e){ge.useContext(nS).strict}function lC(n){const e=iS(),{drag:t,layout:r}=e;if(!t&&!r)return{};const o={...t,...r};return{MeasureLayout:t?.isEnabled(n)||r?.isEnabled(n)?o.MeasureLayout:void 0,ProjectionNode:o.ProjectionNode}}function cC(n,e){if(typeof Proxy>"u")return Pd;const t=new Map,r=(a,c)=>Pd(a,c,n,e),o=(a,c)=>r(a,c);return new Proxy(o,{get:(a,c)=>c==="create"?r:(t.has(c)||t.set(c,Pd(c,void 0,n,e)),t.get(c))})}const uC=(n,e)=>e.isSVG??mm(n)?new $w(e):new zw(e,{allowProjection:n!==ge.Fragment});class fC extends os{constructor(e){super(e),e.animationState||(e.animationState=Qw(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Au(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}let dC=0;class hC extends os{constructor(){super(...arguments),this.id=dC++,this.isExitComplete=!1}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===r)return;if(e&&r===!1){if(this.isExitComplete){const{initial:a,custom:c}=this.node.getProps();if(typeof a=="string"){const u=Hs(this.node,a,c);if(u){const{transition:d,transitionEnd:h,...p}=u;for(const v in p)this.node.getValue(v)?.jump(p[v])}}this.node.animationState.reset(),this.node.animationState.animateChanges()}else this.node.animationState.setActive("exit",!1);this.isExitComplete=!1;return}const o=this.node.animationState.setActive("exit",!e);t&&!e&&o.then(()=>{this.isExitComplete=!0,t(this.id)})}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const pC={animation:{Feature:fC},exit:{Feature:hC}};function rl(n){return{point:{x:n.pageX,y:n.pageY}}}const mC=n=>e=>lm(e)&&n(e,rl(e));function qa(n,e,t,r){return Ja(n,e,mC(t),r)}const uS=({current:n})=>n?n.ownerDocument.defaultView:null,s_=(n,e)=>Math.abs(n-e);function gC(n,e){const t=s_(n.x,e.x),r=s_(n.y,e.y);return Math.sqrt(t**2+r**2)}const o_=new Set(["auto","scroll"]);class fS{constructor(e,t,{transformPagePoint:r,contextWindow:o=window,dragSnapToOrigin:a=!1,distanceThreshold:c=3,element:u}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.lastRawMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=_=>{this.handleScroll(_.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;this.lastRawMoveEventInfo&&(this.lastMoveEventInfo=Mc(this.lastRawMoveEventInfo,this.transformPagePoint));const _=Dd(this.lastMoveEventInfo,this.history),M=this.startEvent!==null,E=gC(_.offset,{x:0,y:0})>=this.distanceThreshold;if(!M&&!E)return;const{point:S}=_,{timestamp:y}=En;this.history.push({...S,timestamp:y});const{onStart:w,onMove:b}=this.handlers;M||(w&&w(this.lastMoveEvent,_),this.startEvent=this.lastMoveEvent),b&&b(this.lastMoveEvent,_)},this.handlePointerMove=(_,M)=>{this.lastMoveEvent=_,this.lastRawMoveEventInfo=M,this.lastMoveEventInfo=Mc(M,this.transformPagePoint),Gt.update(this.updatePoint,!0)},this.handlePointerUp=(_,M)=>{this.end();const{onEnd:E,onSessionEnd:S,resumeAnimation:y}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&y&&y(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const w=Dd(_.type==="pointercancel"?this.lastMoveEventInfo:Mc(M,this.transformPagePoint),this.history);this.startEvent&&E&&E(_,w),S&&S(_,w)},!lm(e))return;this.dragSnapToOrigin=a,this.handlers=t,this.transformPagePoint=r,this.distanceThreshold=c,this.contextWindow=o||window;const d=rl(e),h=Mc(d,this.transformPagePoint),{point:p}=h,{timestamp:v}=En;this.history=[{...p,timestamp:v}];const{onSessionStart:g}=t;g&&g(e,Dd(h,this.history)),this.removeListeners=tl(qa(this.contextWindow,"pointermove",this.handlePointerMove),qa(this.contextWindow,"pointerup",this.handlePointerUp),qa(this.contextWindow,"pointercancel",this.handlePointerUp)),u&&this.startScrollTracking(u)}startScrollTracking(e){let t=e.parentElement;for(;t;){const r=getComputedStyle(t);(o_.has(r.overflowX)||o_.has(r.overflowY))&&this.scrollPositions.set(t,{x:t.scrollLeft,y:t.scrollTop}),t=t.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0}),window.addEventListener("scroll",this.onWindowScroll),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const t=this.scrollPositions.get(e);if(!t)return;const r=e===window,o=r?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},a={x:o.x-t.x,y:o.y-t.y};a.x===0&&a.y===0||(r?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=a.x,this.lastMoveEventInfo.point.y+=a.y):this.history.length>0&&(this.history[0].x-=a.x,this.history[0].y-=a.y),this.scrollPositions.set(e,o),Gt.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),rs(this.updatePoint)}}function Mc(n,e){return e?{point:e(n.point)}:n}function a_(n,e){return{x:n.x-e.x,y:n.y-e.y}}function Dd({point:n},e){return{point:n,delta:a_(n,dS(e)),offset:a_(n,vC(e)),velocity:_C(e,.1)}}function vC(n){return n[0]}function dS(n){return n[n.length-1]}function _C(n,e){if(n.length<2)return{x:0,y:0};let t=n.length-1,r=null;const o=dS(n);for(;t>=0&&(r=n[t],!(o.timestamp-r.timestamp>si(e)));)t--;if(!r)return{x:0,y:0};r===n[0]&&n.length>2&&o.timestamp-r.timestamp>si(e)*2&&(r=n[1]);const a=_i(o.timestamp-r.timestamp);if(a===0)return{x:0,y:0};const c={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return c.x===1/0&&(c.x=0),c.y===1/0&&(c.y=0),c}function xC(n,{min:e,max:t},r){return e!==void 0&&n<e?n=r?qt(e,n,r.min):Math.max(n,e):t!==void 0&&n>t&&(n=r?qt(t,n,r.max):Math.min(n,t)),n}function l_(n,e,t){return{min:e!==void 0?n.min+e:void 0,max:t!==void 0?n.max+t-(n.max-n.min):void 0}}function yC(n,{top:e,left:t,bottom:r,right:o}){return{x:l_(n.x,t,o),y:l_(n.y,e,r)}}function c_(n,e){let t=e.min-n.min,r=e.max-n.max;return e.max-e.min<n.max-n.min&&([t,r]=[r,t]),{min:t,max:r}}function SC(n,e){return{x:c_(n.x,e.x),y:c_(n.y,e.y)}}function MC(n,e){let t=.5;const r=kn(n),o=kn(e);return o>r?t=Ka(e.min,e.max-r,n.min):r>o&&(t=Ka(n.min,n.max-o,e.min)),Ji(0,1,t)}function EC(n,e){const t={};return e.min!==void 0&&(t.min=e.min-n.min),e.max!==void 0&&(t.max=e.max-n.min),t}const zh=.35;function TC(n=zh){return n===!1?n=0:n===!0&&(n=zh),{x:u_(n,"left","right"),y:u_(n,"top","bottom")}}function u_(n,e,t){return{min:f_(n,e),max:f_(n,t)}}function f_(n,e){return typeof n=="number"?n:n[e]||0}const wC=new WeakMap;class AC{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=dn(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:t=!1,distanceThreshold:r}={}){const{presenceContext:o}=this.visualElement;if(o&&o.isPresent===!1)return;const a=v=>{t&&this.snapToCursor(rl(v).point),this.stopAnimation()},c=(v,g)=>{const{drag:_,dragPropagation:M,onDragStart:E}=this.getProps();if(_&&!M&&(this.openDragLock&&this.openDragLock(),this.openDragLock=ow(_),!this.openDragLock))return;this.latestPointerEvent=v,this.latestPanInfo=g,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Xi(y=>{let w=this.getAxisMotionValue(y).get()||0;if(Ki.test(w)){const{projection:b}=this.visualElement;if(b&&b.layout){const P=b.layout.layoutBox[y];P&&(w=kn(P)*(parseFloat(w)/100))}}this.originPoint[y]=w}),E&&Gt.update(()=>E(v,g),!1,!0),Lh(this.visualElement,"transform");const{animationState:S}=this.visualElement;S&&S.setActive("whileDrag",!0)},u=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g;const{dragPropagation:_,dragDirectionLock:M,onDirectionLock:E,onDrag:S}=this.getProps();if(!_&&!this.openDragLock)return;const{offset:y}=g;if(M&&this.currentDirection===null){this.currentDirection=RC(y),this.currentDirection!==null&&E&&E(this.currentDirection);return}this.updateAxis("x",g.point,y),this.updateAxis("y",g.point,y),this.visualElement.render(),S&&Gt.update(()=>S(v,g),!1,!0)},d=(v,g)=>{this.latestPointerEvent=v,this.latestPanInfo=g,this.stop(v,g),this.latestPointerEvent=null,this.latestPanInfo=null},h=()=>{const{dragSnapToOrigin:v}=this.getProps();(v||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:p}=this.getProps();this.panSession=new fS(e,{onSessionStart:a,onStart:c,onMove:u,onSessionEnd:d,resumeAnimation:h},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:p,distanceThreshold:r,contextWindow:uS(this.visualElement),element:this.visualElement.current})}stop(e,t){const r=e||this.latestPointerEvent,o=t||this.latestPanInfo,a=this.isDragging;if(this.cancel(),!a||!o||!r)return;const{velocity:c}=o;this.startAnimation(c);const{onDragEnd:u}=this.getProps();u&&Gt.postRender(()=>u(r,o))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:r}=this.getProps();!r&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,t,r){const{drag:o}=this.getProps();if(!r||!Ec(e,o,this.currentDirection))return;const a=this.getAxisMotionValue(e);let c=this.originPoint[e]+r[e];this.constraints&&this.constraints[e]&&(c=xC(c,this.constraints[e],this.elastic[e])),a.set(c)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,o=this.constraints;e&&Po(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&r?this.constraints=yC(r.layoutBox,e):this.constraints=!1,this.elastic=TC(t),o!==this.constraints&&!Po(e)&&r&&this.constraints&&!this.hasMutatedConstraints&&Xi(a=>{this.constraints!==!1&&this.getAxisMotionValue(a)&&(this.constraints[a]=EC(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Po(e))return!1;const r=e.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=Uw(r,o.root,this.visualElement.getTransformPagePoint());let c=SC(o.layout.layoutBox,a);if(t){const u=t(Lw(c));this.hasMutatedConstraints=!!u,u&&(c=Ny(u))}return c}startAnimation(e){const{drag:t,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:c,onDragTransitionEnd:u}=this.getProps(),d=this.constraints||{},h=Xi(p=>{if(!Ec(p,t,this.currentDirection))return;let v=d&&d[p]||{};(c===!0||c===p)&&(v={min:0,max:0});const g=o?200:1e6,_=o?40:1e7,M={type:"inertia",velocity:r?e[p]:0,bounceStiffness:g,bounceDamping:_,timeConstant:750,restDelta:1,restSpeed:10,...a,...v};return this.startAxisValueAnimation(p,M)});return Promise.all(h).then(u)}startAxisValueAnimation(e,t){const r=this.getAxisMotionValue(e);return Lh(this.visualElement,e),r.start(nm(e,r,0,t,this.visualElement,!1))}stopAnimation(){Xi(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,r=this.visualElement.getProps(),o=r[t];return o||this.visualElement.getValue(e,(r.initial?r.initial[e]:void 0)||0)}snapToCursor(e){Xi(t=>{const{drag:r}=this.getProps();if(!Ec(t,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(t);if(o&&o.layout){const{min:c,max:u}=o.layout.layoutBox[t],d=a.get()||0;a.set(e[t]-qt(c,u,.5)+d)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:r}=this.visualElement;if(!Po(t)||!r||!this.constraints)return;this.stopAnimation();const o={x:0,y:0};Xi(c=>{const u=this.getAxisMotionValue(c);if(u&&this.constraints!==!1){const d=u.get();o[c]=MC({min:d,max:d},this.constraints[c])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",r.root&&r.root.updateScroll(),r.updateLayout(),this.constraints=!1,this.resolveConstraints(),Xi(c=>{if(!Ec(c,e,null))return;const u=this.getAxisMotionValue(c),{min:d,max:h}=this.constraints[c];u.set(qt(d,h,o[c]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;wC.set(this.visualElement,this);const e=this.visualElement.current,t=qa(e,"pointerdown",h=>{const{drag:p,dragListener:v=!0}=this.getProps(),g=h.target,_=g!==e&&dw(g);p&&v&&!_&&this.start(h)});let r;const o=()=>{const{dragConstraints:h}=this.getProps();Po(h)&&h.current&&(this.constraints=this.resolveRefConstraints(),r||(r=CC(e,h.current,()=>this.scalePositionWithinConstraints())))},{projection:a}=this.visualElement,c=a.addEventListener("measure",o);a&&!a.layout&&(a.root&&a.root.updateScroll(),a.updateLayout()),Gt.read(o);const u=Ja(window,"resize",()=>this.scalePositionWithinConstraints()),d=a.addEventListener("didUpdate",(({delta:h,hasLayoutChanged:p})=>{this.isDragging&&p&&(Xi(v=>{const g=this.getAxisMotionValue(v);g&&(this.originPoint[v]+=h[v].translate,g.set(g.get()+h[v].translate))}),this.visualElement.render())}));return()=>{u(),t(),c(),d&&d(),r&&r()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:c=zh,dragMomentum:u=!0}=e;return{...e,drag:t,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:c,dragMomentum:u}}}function d_(n){let e=!0;return()=>{if(e){e=!1;return}n()}}function CC(n,e,t){const r=Sv(n,d_(t)),o=Sv(e,d_(t));return()=>{r(),o()}}function Ec(n,e,t){return(e===!0||e===n)&&(t===null||t===n)}function RC(n,e=10){let t=null;return Math.abs(n.y)>e?t="y":Math.abs(n.x)>e&&(t="x"),t}class bC extends os{constructor(e){super(e),this.removeGroupControls=xi,this.removeListeners=xi,this.controls=new AC(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||xi}update(){const{dragControls:e}=this.node.getProps(),{dragControls:t}=this.node.prevProps||{};e!==t&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const Ld=n=>(e,t)=>{n&&Gt.update(()=>n(e,t),!1,!0)};class PC extends os{constructor(){super(...arguments),this.removePointerDownListener=xi}onPointerDown(e){this.session=new fS(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:uS(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:r,onPanEnd:o}=this.node.getProps();return{onSessionStart:Ld(e),onStart:Ld(t),onMove:Ld(r),onEnd:(a,c)=>{delete this.session,o&&Gt.postRender(()=>o(a,c))}}}mount(){this.removePointerDownListener=qa(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let Nd=!1;class DC extends ge.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=e;a&&(t.group&&t.group.add(a),r&&r.register&&o&&r.register(a),Nd&&a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),iu.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:r,drag:o,isPresent:a}=this.props,{projection:c}=r;return c&&(c.isPresent=a,e.layoutDependency!==t&&c.setOptions({...c.options,layoutDependency:t}),Nd=!0,o||e.layoutDependency!==t||t===void 0||e.isPresent!==a?c.willUpdate():this.safeToRemove(),e.isPresent!==a&&(a?c.promote():c.relegate()||Gt.postRender(()=>{const u=c.getStack();(!u||!u.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),am.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:r}=this.props,{projection:o}=e;Nd=!0,o&&(o.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(o),r&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function hS(n){const[e,t]=BA(),r=ge.useContext(Px);return N.jsx(DC,{...n,layoutGroup:r,switchLayoutGroup:ge.useContext(lS),isPresent:e,safeToRemove:t})}const LC={pan:{Feature:PC},drag:{Feature:bC,ProjectionNode:eS,MeasureLayout:hS}};function h_(n,e,t){const{props:r}=n;n.animationState&&r.whileHover&&n.animationState.setActive("whileHover",t==="Start");const o="onHover"+t,a=r[o];a&&Gt.postRender(()=>a(e,rl(e)))}class NC extends os{mount(){const{current:e}=this.node;e&&(this.unmount=lw(e,(t,r)=>(h_(this.node,r,"Start"),o=>h_(this.node,o,"End"))))}unmount(){}}class IC extends os{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tl(Ja(this.node.current,"focus",()=>this.onFocus()),Ja(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function p_(n,e,t){const{props:r}=n;if(n.current instanceof HTMLButtonElement&&n.current.disabled)return;n.animationState&&r.whileTap&&n.animationState.setActive("whileTap",t==="Start");const o="onTap"+(t==="End"?"":t),a=r[o];a&&Gt.postRender(()=>a(e,rl(e)))}class UC extends os{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:t,propagate:r}=this.node.props;this.unmount=pw(e,(o,a)=>(p_(this.node,a,"Start"),(c,{success:u})=>p_(this.node,c,u?"End":"Cancel")),{useGlobalTarget:t,stopPropagation:r?.tap===!1})}unmount(){}}const Hh=new WeakMap,Id=new WeakMap,FC=n=>{const e=Hh.get(n.target);e&&e(n)},OC=n=>{n.forEach(FC)};function BC({root:n,...e}){const t=n||document;Id.has(t)||Id.set(t,{});const r=Id.get(t),o=JSON.stringify(e);return r[o]||(r[o]=new IntersectionObserver(OC,{root:n,...e})),r[o]}function kC(n,e,t){const r=BC(e);return Hh.set(n,t),r.observe(n),()=>{Hh.delete(n),r.unobserve(n)}}const VC={some:0,all:1};class zC extends os{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:r,amount:o="some",once:a}=e,c={root:t?t.current:void 0,rootMargin:r,threshold:typeof o=="number"?o:VC[o]},u=d=>{const{isIntersecting:h}=d;if(this.isInView===h||(this.isInView=h,a&&!h&&this.hasEnteredView))return;h&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",h);const{onViewportEnter:p,onViewportLeave:v}=this.node.getProps(),g=h?p:v;g&&g(d)};return kC(this.node.current,c,u)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:t}=this.node;["amount","margin","root"].some(HC(e,t))&&this.startObserver()}unmount(){}}function HC({viewport:n={}},{viewport:e={}}={}){return t=>n[t]!==e[t]}const GC={inView:{Feature:zC},tap:{Feature:UC},focus:{Feature:IC},hover:{Feature:NC}},WC={layout:{ProjectionNode:eS,MeasureLayout:hS}},jC={...pC,...GC,...LC,...WC},Us=cC(jC,uC),XC={some:0,all:1};function $C(n,e,{root:t,margin:r,amount:o="some"}={}){const a=om(n),c=new WeakMap,u=h=>{h.forEach(p=>{const v=c.get(p.target);if(p.isIntersecting!==!!v)if(p.isIntersecting){const g=e(p.target,p);typeof g=="function"?c.set(p.target,g):d.unobserve(p.target)}else typeof v=="function"&&(v(p),c.delete(p.target))})},d=new IntersectionObserver(u,{root:t,rootMargin:r,threshold:typeof o=="number"?o:XC[o]});return a.forEach(h=>d.observe(h)),()=>d.disconnect()}function gm(n,{root:e,margin:t,amount:r,once:o=!1,initial:a=!1}={}){const[c,u]=ge.useState(a);return ge.useEffect(()=>{if(!n.current||o&&c)return;const d=()=>(u(!0),o?void 0:()=>u(!1)),h={root:e&&e.current||void 0,margin:t,amount:r};return $C(n.current,d,h)},[e,n,t,o,r]),c}const Vo="!@#$%^&*<>{}[]|/\\~`0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";function YC(n){return n.split("").map(e=>e===" "?" ":Vo[Math.floor(Math.random()*Vo.length)]).join("")}function qC(n){return n.map(YC)}function KC(n,e){let t=0;return n.split("").map(r=>r===" "?" ":(t++,t<=e?r:Vo[Math.floor(Math.random()*Vo.length)])).join("")}function ZC({lines:n,speed:e=30,glitchDuration:t=150,className:r="",animate:o=!0}){const[a,c]=ge.useState(()=>qC(n)),[u,d]=ge.useState(!1),[h,p]=ge.useState(!1),v=ge.useRef(null);ge.useEffect(()=>{if(!o||u)return;const M=Math.max(...n.map(y=>y.replace(/ /g,"").length));let E=0;const S=setInterval(()=>{E++,c(n.map(y=>KC(y,E))),E>=M&&(clearInterval(S),c([...n]),d(!0))},e);return()=>clearInterval(S)},[o,u,n,e]);const g=ge.useCallback(()=>{u&&(h||(p(!0),c(n.map(M=>M.split("").map(E=>E===" "?" ":Math.random()<.3?Vo[Math.floor(Math.random()*Vo.length)]:E).join(""))),clearTimeout(v.current),v.current=setTimeout(()=>{c([...n]),p(!1)},t)))},[u,n,t,h]),_=ge.useCallback(()=>{u&&(clearTimeout(v.current),c([...n]),p(!1))},[u,n]);return ge.useEffect(()=>()=>clearTimeout(v.current),[]),N.jsx("pre",{className:`ascii-art ${h?"glitching":""} ${r}`,onMouseEnter:g,onMouseLeave:_,"aria-hidden":"true",children:a.join(`
`)})}const Tc="!@#$%^&*ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";function Zi({text:n,speed:e=40,startDelay:t=0,className:r="",style:o={},animate:a=!0}){const[c,u]=ge.useState(""),[d,h]=ge.useState(!1),p=ge.useRef(null);return ge.useEffect(()=>{const v=p.current;if(!v||!a)return;const g=new IntersectionObserver(([_])=>{_.isIntersecting&&!d&&(h(!0),setTimeout(()=>{u(n.split("").map(S=>S===" "?" ":Tc[Math.floor(Math.random()*Tc.length)]).join(""));let M=0;const E=setInterval(()=>{u(n.split("").map((S,y)=>S===" "?" ":y<M?S:Tc[Math.floor(Math.random()*Tc.length)]).join("")),M+=.5,M>=n.length&&(clearInterval(E),u(n))},e)},t))},{threshold:0});return g.observe(v),()=>g.disconnect()},[n,e,t,a,d]),N.jsx("span",{ref:p,className:r,style:{fontFamily:"monospace",...o},children:c||" "})}const bu="183",QC=0,m_=1,JC=2,ru=1,eR=2,Wa=3,Sr=0,xn=1,ri=2,Oi=0,Fo=1,g_=2,v_=3,__=4,tR=5,Fs=100,nR=101,iR=102,rR=103,sR=104,oR=200,aR=201,lR=202,cR=203,Gh=204,Wh=205,uR=206,fR=207,dR=208,hR=209,pR=210,mR=211,gR=212,vR=213,_R=214,jh=0,xu=1,Xh=2,zo=3,$h=4,Yh=5,qh=6,Kh=7,pS=0,xR=1,yR=2,Qi=0,mS=1,gS=2,vS=3,_S=4,xS=5,yS=6,SS=7,MS=300,Ws=301,Ho=302,Ud=303,Fd=304,Pu=306,Zh=1e3,_r=1001,Qh=1002,wn=1003,SR=1004,wc=1005,Qt=1006,Od=1007,Vs=1008,Ln=1009,ES=1010,TS=1011,el=1012,vm=1013,er=1014,Ii=1015,Mr=1016,_m=1017,xm=1018,Go=1020,wS=35902,AS=35899,CS=1021,RS=1022,Ui=1023,Er=1026,ts=1027,bS=1028,ym=1029,Wo=1030,Sm=1031,Mm=1033,su=33776,ou=33777,au=33778,lu=33779,Jh=35840,ep=35841,tp=35842,np=35843,ip=36196,rp=37492,sp=37496,op=37488,ap=37489,lp=37490,cp=37491,up=37808,fp=37809,dp=37810,hp=37811,pp=37812,mp=37813,gp=37814,vp=37815,_p=37816,xp=37817,yp=37818,Sp=37819,Mp=37820,Ep=37821,Tp=36492,wp=36494,Ap=36495,Cp=36283,Rp=36284,bp=36285,Pp=36286,sl=3200,MR=0,ER=1,Yi="",rn="srgb",ss="srgb-linear",yu="linear",Bt="srgb",go=7680,x_=519,TR=512,wR=513,AR=514,Em=515,CR=516,RR=517,Tm=518,bR=519,y_=35044,Dp="300 es",qi=2e3,Su=2001;function PR(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Mu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function DR(){const n=Mu("canvas");return n.style.display="block",n}const S_={};function M_(...n){const e="THREE."+n.shift();console.log(e,...n)}function PS(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function ft(...n){n=PS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function Lt(...n){n=PS(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function Eu(...n){const e=n.join(" ");e in S_||(S_[e]=!0,ft(...n))}function LR(n,e,t){return new Promise(function(r,o){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:o();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:r()}}setTimeout(a,t)})}const NR={[jh]:xu,[Xh]:qh,[$h]:Kh,[zo]:Yh,[xu]:jh,[qh]:Xh,[Kh]:$h,[Yh]:zo};class as{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const a=o.indexOf(t);a!==-1&&o.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let a=0,c=o.length;a<c;a++)o[a].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bd=Math.PI/180,Lp=180/Math.PI;function ol(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[t&63|128]+Pn[t>>8&255]+"-"+Pn[t>>16&255]+Pn[t>>24&255]+Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]).toLowerCase()}function wt(n,e,t){return Math.max(e,Math.min(t,n))}function IR(n,e){return(n%e+e)%e}function kd(n,e,t){return(1-t)*n+t*e}function Ua(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function qn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class St{constructor(e=0,t=0){St.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),a=this.x-e.x,c=this.y-e.y;return this.x=a*r-c*o+e.x,this.y=a*o+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zo{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,a,c,u){let d=r[o+0],h=r[o+1],p=r[o+2],v=r[o+3],g=a[c+0],_=a[c+1],M=a[c+2],E=a[c+3];if(v!==E||d!==g||h!==_||p!==M){let S=d*g+h*_+p*M+v*E;S<0&&(g=-g,_=-_,M=-M,E=-E,S=-S);let y=1-u;if(S<.9995){const w=Math.acos(S),b=Math.sin(w);y=Math.sin(y*w)/b,u=Math.sin(u*w)/b,d=d*y+g*u,h=h*y+_*u,p=p*y+M*u,v=v*y+E*u}else{d=d*y+g*u,h=h*y+_*u,p=p*y+M*u,v=v*y+E*u;const w=1/Math.sqrt(d*d+h*h+p*p+v*v);d*=w,h*=w,p*=w,v*=w}}e[t]=d,e[t+1]=h,e[t+2]=p,e[t+3]=v}static multiplyQuaternionsFlat(e,t,r,o,a,c){const u=r[o],d=r[o+1],h=r[o+2],p=r[o+3],v=a[c],g=a[c+1],_=a[c+2],M=a[c+3];return e[t]=u*M+p*v+d*_-h*g,e[t+1]=d*M+p*g+h*v-u*_,e[t+2]=h*M+p*_+u*g-d*v,e[t+3]=p*M-u*v-d*g-h*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,a=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),p=u(o/2),v=u(a/2),g=d(r/2),_=d(o/2),M=d(a/2);switch(c){case"XYZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"YXZ":this._x=g*p*v+h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"ZXY":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v-g*_*M;break;case"ZYX":this._x=g*p*v-h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v+g*_*M;break;case"YZX":this._x=g*p*v+h*_*M,this._y=h*_*v+g*p*M,this._z=h*p*M-g*_*v,this._w=h*p*v-g*_*M;break;case"XZY":this._x=g*p*v-h*_*M,this._y=h*_*v-g*p*M,this._z=h*p*M+g*_*v,this._w=h*p*v+g*_*M;break;default:ft("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],a=t[8],c=t[1],u=t[5],d=t[9],h=t[2],p=t[6],v=t[10],g=r+u+v;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(p-d)*_,this._y=(a-h)*_,this._z=(c-o)*_}else if(r>u&&r>v){const _=2*Math.sqrt(1+r-u-v);this._w=(p-d)/_,this._x=.25*_,this._y=(o+c)/_,this._z=(a+h)/_}else if(u>v){const _=2*Math.sqrt(1+u-r-v);this._w=(a-h)/_,this._x=(o+c)/_,this._y=.25*_,this._z=(d+p)/_}else{const _=2*Math.sqrt(1+v-r-u);this._w=(c-o)/_,this._x=(a+h)/_,this._y=(d+p)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,a=e._z,c=e._w,u=t._x,d=t._y,h=t._z,p=t._w;return this._x=r*p+c*u+o*h-a*d,this._y=o*p+c*d+a*u-r*h,this._z=a*p+c*h+r*d-o*u,this._w=c*p-r*u-o*d-a*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,a=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,o=-o,a=-a,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),p=Math.sin(h);d=Math.sin(d*h)/p,t=Math.sin(t*h)/p,this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+o*t,this._z=this._z*d+a*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),a=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ue{constructor(e=0,t=0,r=0){ue.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(E_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(E_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6]*o,this.y=a[1]*t+a[4]*r+a[7]*o,this.z=a[2]*t+a[5]*r+a[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=e.elements,c=1/(a[3]*t+a[7]*r+a[11]*o+a[15]);return this.x=(a[0]*t+a[4]*r+a[8]*o+a[12])*c,this.y=(a[1]*t+a[5]*r+a[9]*o+a[13])*c,this.z=(a[2]*t+a[6]*r+a[10]*o+a[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,a=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*o-u*r),p=2*(u*t-a*o),v=2*(a*r-c*t);return this.x=t+d*h+c*v-u*p,this.y=r+d*p+u*h-a*v,this.z=o+d*v+a*p-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*o,this.y=a[1]*t+a[5]*r+a[9]*o,this.z=a[2]*t+a[6]*r+a[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,a=e.z,c=t.x,u=t.y,d=t.z;return this.x=o*d-a*u,this.y=a*c-r*d,this.z=r*u-o*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Vd.copy(this).projectOnVector(e),this.sub(Vd)}reflect(e){return this.sub(Vd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(wt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vd=new ue,E_=new Zo;class mt{constructor(e,t,r,o,a,c,u,d,h){mt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h)}set(e,t,r,o,a,c,u,d,h){const p=this.elements;return p[0]=e,p[1]=o,p[2]=u,p[3]=t,p[4]=a,p[5]=d,p[6]=r,p[7]=c,p[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],p=r[4],v=r[7],g=r[2],_=r[5],M=r[8],E=o[0],S=o[3],y=o[6],w=o[1],b=o[4],P=o[7],I=o[2],U=o[5],V=o[8];return a[0]=c*E+u*w+d*I,a[3]=c*S+u*b+d*U,a[6]=c*y+u*P+d*V,a[1]=h*E+p*w+v*I,a[4]=h*S+p*b+v*U,a[7]=h*y+p*P+v*V,a[2]=g*E+_*w+M*I,a[5]=g*S+_*b+M*U,a[8]=g*y+_*P+M*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8];return t*c*p-t*u*h-r*a*p+r*u*d+o*a*h-o*c*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=p*c-u*h,g=u*d-p*a,_=h*a-c*d,M=t*v+r*g+o*_;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=v*E,e[1]=(o*h-p*r)*E,e[2]=(u*r-o*c)*E,e[3]=g*E,e[4]=(p*t-o*d)*E,e[5]=(o*a-u*t)*E,e[6]=_*E,e[7]=(r*d-h*t)*E,e[8]=(c*t-r*a)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,a,c,u){const d=Math.cos(a),h=Math.sin(a);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-o*h,o*d,-o*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return this.premultiply(zd.makeScale(e,t)),this}rotate(e){return this.premultiply(zd.makeRotation(-e)),this}translate(e,t){return this.premultiply(zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const zd=new mt,T_=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w_=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function UR(){const n={enabled:!0,workingColorSpace:ss,spaces:{},convert:function(o,a,c){return this.enabled===!1||a===c||!a||!c||(this.spaces[a].transfer===Bt&&(o.r=xr(o.r),o.g=xr(o.g),o.b=xr(o.b)),this.spaces[a].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[a].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Bt&&(o.r=Oo(o.r),o.g=Oo(o.g),o.b=Oo(o.b))),o},workingToColorSpace:function(o,a){return this.convert(o,this.workingColorSpace,a)},colorSpaceToWorking:function(o,a){return this.convert(o,a,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Yi?yu:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,a=this.workingColorSpace){return o.fromArray(this.spaces[a].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,a,c){return o.copy(this.spaces[a].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,a){return Eu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(o,a)},toWorkingColorSpace:function(o,a){return Eu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(o,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[ss]:{primaries:e,whitePoint:r,transfer:yu,toXYZ:T_,fromXYZ:w_,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:rn},outputColorSpaceConfig:{drawingBufferColorSpace:rn}},[rn]:{primaries:e,whitePoint:r,transfer:Bt,toXYZ:T_,fromXYZ:w_,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:rn}}}),n}const Pt=UR();function xr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Oo(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let vo;class FR{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{vo===void 0&&(vo=Mu("canvas")),vo.width=e.width,vo.height=e.height;const o=vo.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=vo}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Mu("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),a=o.data;for(let c=0;c<a.length;c++)a[c]=xr(a[c]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(xr(t[r]/255)*255):t[r]=xr(t[r]);return{data:t,width:e.width,height:e.height}}else return ft("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let OR=0;class wm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:OR++}),this.uuid=ol(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let a;if(Array.isArray(o)){a=[];for(let c=0,u=o.length;c<u;c++)o[c].isDataTexture?a.push(Hd(o[c].image)):a.push(Hd(o[c]))}else a=Hd(o);r.url=a}return t||(e.images[this.uuid]=r),r}}function Hd(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?FR.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(ft("Texture: Unable to serialize Texture."),{})}let BR=0;const Gd=new ue;class yn extends as{constructor(e=yn.DEFAULT_IMAGE,t=yn.DEFAULT_MAPPING,r=_r,o=_r,a=Qt,c=Vs,u=Ui,d=Ln,h=yn.DEFAULT_ANISOTROPY,p=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:BR++}),this.uuid=ol(),this.name="",this.source=new wm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=a,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new St(0,0),this.repeat=new St(1,1),this.center=new St(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Gd).x}get height(){return this.source.getSize(Gd).y}get depth(){return this.source.getSize(Gd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ft(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==MS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zh:e.x=e.x-Math.floor(e.x);break;case _r:e.x=e.x<0?0:1;break;case Qh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zh:e.y=e.y-Math.floor(e.y);break;case _r:e.y=e.y<0?0:1;break;case Qh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}yn.DEFAULT_IMAGE=null;yn.DEFAULT_MAPPING=MS;yn.DEFAULT_ANISOTROPY=1;class sn{constructor(e=0,t=0,r=0,o=1){sn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,a=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*o+c[12]*a,this.y=c[1]*t+c[5]*r+c[9]*o+c[13]*a,this.z=c[2]*t+c[6]*r+c[10]*o+c[14]*a,this.w=c[3]*t+c[7]*r+c[11]*o+c[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,a;const d=e.elements,h=d[0],p=d[4],v=d[8],g=d[1],_=d[5],M=d[9],E=d[2],S=d[6],y=d[10];if(Math.abs(p-g)<.01&&Math.abs(v-E)<.01&&Math.abs(M-S)<.01){if(Math.abs(p+g)<.1&&Math.abs(v+E)<.1&&Math.abs(M+S)<.1&&Math.abs(h+_+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(h+1)/2,P=(_+1)/2,I=(y+1)/2,U=(p+g)/4,V=(v+E)/4,A=(M+S)/4;return b>P&&b>I?b<.01?(r=0,o=.707106781,a=.707106781):(r=Math.sqrt(b),o=U/r,a=V/r):P>I?P<.01?(r=.707106781,o=0,a=.707106781):(o=Math.sqrt(P),r=U/o,a=A/o):I<.01?(r=.707106781,o=.707106781,a=0):(a=Math.sqrt(I),r=V/a,o=A/a),this.set(r,o,a,t),this}let w=Math.sqrt((S-M)*(S-M)+(v-E)*(v-E)+(g-p)*(g-p));return Math.abs(w)<.001&&(w=1),this.x=(S-M)/w,this.y=(v-E)/w,this.z=(g-p)/w,this.w=Math.acos((h+_+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=wt(this.x,e.x,t.x),this.y=wt(this.y,e.y,t.y),this.z=wt(this.z,e.z,t.z),this.w=wt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=wt(this.x,e,t),this.y=wt(this.y,e,t),this.z=wt(this.z,e,t),this.w=wt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(wt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class kR extends as{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},a=new yn(o),c=r.count;for(let u=0;u<c;u++)this.textures[u]=a.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const t={minFilter:Qt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,a=this.textures.length;o<a;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new wm(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Vn extends kR{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class DS extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class VR extends yn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=_r,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class cn{constructor(e,t,r,o,a,c,u,d,h,p,v,g,_,M,E,S){cn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,E,S)}set(e,t,r,o,a,c,u,d,h,p,v,g,_,M,E,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=o,y[1]=a,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=p,y[10]=v,y[14]=g,y[3]=_,y[7]=M,y[11]=E,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new cn().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,r=e.elements,o=1/_o.setFromMatrixColumn(e,0).length(),a=1/_o.setFromMatrixColumn(e,1).length(),c=1/_o.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*a,t[5]=r[5]*a,t[6]=r[6]*a,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,a=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(o),h=Math.sin(o),p=Math.cos(a),v=Math.sin(a);if(e.order==="XYZ"){const g=c*p,_=c*v,M=u*p,E=u*v;t[0]=d*p,t[4]=-d*v,t[8]=h,t[1]=_+M*h,t[5]=g-E*h,t[9]=-u*d,t[2]=E-g*h,t[6]=M+_*h,t[10]=c*d}else if(e.order==="YXZ"){const g=d*p,_=d*v,M=h*p,E=h*v;t[0]=g+E*u,t[4]=M*u-_,t[8]=c*h,t[1]=c*v,t[5]=c*p,t[9]=-u,t[2]=_*u-M,t[6]=E+g*u,t[10]=c*d}else if(e.order==="ZXY"){const g=d*p,_=d*v,M=h*p,E=h*v;t[0]=g-E*u,t[4]=-c*v,t[8]=M+_*u,t[1]=_+M*u,t[5]=c*p,t[9]=E-g*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const g=c*p,_=c*v,M=u*p,E=u*v;t[0]=d*p,t[4]=M*h-_,t[8]=g*h+E,t[1]=d*v,t[5]=E*h+g,t[9]=_*h-M,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const g=c*d,_=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=E-g*v,t[8]=M*v+_,t[1]=v,t[5]=c*p,t[9]=-u*p,t[2]=-h*p,t[6]=_*v+M,t[10]=g-E*v}else if(e.order==="XZY"){const g=c*d,_=c*h,M=u*d,E=u*h;t[0]=d*p,t[4]=-v,t[8]=h*p,t[1]=g*v+E,t[5]=c*p,t[9]=_*v-M,t[2]=M*v-_,t[6]=u*p,t[10]=E*v+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zR,e,HR)}lookAt(e,t,r){const o=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Xr.crossVectors(r,ni),Xr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Xr.crossVectors(r,ni)),Xr.normalize(),Ac.crossVectors(ni,Xr),o[0]=Xr.x,o[4]=Ac.x,o[8]=ni.x,o[1]=Xr.y,o[5]=Ac.y,o[9]=ni.y,o[2]=Xr.z,o[6]=Ac.z,o[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,a=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],p=r[1],v=r[5],g=r[9],_=r[13],M=r[2],E=r[6],S=r[10],y=r[14],w=r[3],b=r[7],P=r[11],I=r[15],U=o[0],V=o[4],A=o[8],D=o[12],K=o[1],B=o[5],Q=o[9],J=o[13],ne=o[2],G=o[6],H=o[10],$=o[14],X=o[3],ee=o[7],ae=o[11],O=o[15];return a[0]=c*U+u*K+d*ne+h*X,a[4]=c*V+u*B+d*G+h*ee,a[8]=c*A+u*Q+d*H+h*ae,a[12]=c*D+u*J+d*$+h*O,a[1]=p*U+v*K+g*ne+_*X,a[5]=p*V+v*B+g*G+_*ee,a[9]=p*A+v*Q+g*H+_*ae,a[13]=p*D+v*J+g*$+_*O,a[2]=M*U+E*K+S*ne+y*X,a[6]=M*V+E*B+S*G+y*ee,a[10]=M*A+E*Q+S*H+y*ae,a[14]=M*D+E*J+S*$+y*O,a[3]=w*U+b*K+P*ne+I*X,a[7]=w*V+b*B+P*G+I*ee,a[11]=w*A+b*Q+P*H+I*ae,a[15]=w*D+b*J+P*$+I*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],a=e[12],c=e[1],u=e[5],d=e[9],h=e[13],p=e[2],v=e[6],g=e[10],_=e[14],M=e[3],E=e[7],S=e[11],y=e[15],w=d*_-h*g,b=u*_-h*v,P=u*g-d*v,I=c*_-h*p,U=c*g-d*p,V=c*v-u*p;return t*(E*w-S*b+y*P)-r*(M*w-S*I+y*U)+o*(M*b-E*I+y*V)-a*(M*P-E*U+S*V)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],a=e[3],c=e[4],u=e[5],d=e[6],h=e[7],p=e[8],v=e[9],g=e[10],_=e[11],M=e[12],E=e[13],S=e[14],y=e[15],w=t*u-r*c,b=t*d-o*c,P=t*h-a*c,I=r*d-o*u,U=r*h-a*u,V=o*h-a*d,A=p*E-v*M,D=p*S-g*M,K=p*y-_*M,B=v*S-g*E,Q=v*y-_*E,J=g*y-_*S,ne=w*J-b*Q+P*B+I*K-U*D+V*A;if(ne===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ne;return e[0]=(u*J-d*Q+h*B)*G,e[1]=(o*Q-r*J-a*B)*G,e[2]=(E*V-S*U+y*I)*G,e[3]=(g*U-v*V-_*I)*G,e[4]=(d*K-c*J-h*D)*G,e[5]=(t*J-o*K+a*D)*G,e[6]=(S*P-M*V-y*b)*G,e[7]=(p*V-g*P+_*b)*G,e[8]=(c*Q-u*K+h*A)*G,e[9]=(r*K-t*Q-a*A)*G,e[10]=(M*U-E*P+y*w)*G,e[11]=(v*P-p*U-_*w)*G,e[12]=(u*D-c*B-d*A)*G,e[13]=(t*B-r*D+o*A)*G,e[14]=(E*b-M*I-S*w)*G,e[15]=(p*I-v*b+g*w)*G,this}scale(e){const t=this.elements,r=e.x,o=e.y,a=e.z;return t[0]*=r,t[4]*=o,t[8]*=a,t[1]*=r,t[5]*=o,t[9]*=a,t[2]*=r,t[6]*=o,t[10]*=a,t[3]*=r,t[7]*=o,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),a=1-r,c=e.x,u=e.y,d=e.z,h=a*c,p=a*u;return this.set(h*c+r,h*u-o*d,h*d+o*u,0,h*u+o*d,p*u+r,p*d-o*c,0,h*d-o*u,p*d+o*c,a*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,a,c){return this.set(1,r,a,0,e,1,c,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,a=t._x,c=t._y,u=t._z,d=t._w,h=a+a,p=c+c,v=u+u,g=a*h,_=a*p,M=a*v,E=c*p,S=c*v,y=u*v,w=d*h,b=d*p,P=d*v,I=r.x,U=r.y,V=r.z;return o[0]=(1-(E+y))*I,o[1]=(_+P)*I,o[2]=(M-b)*I,o[3]=0,o[4]=(_-P)*U,o[5]=(1-(g+y))*U,o[6]=(S+w)*U,o[7]=0,o[8]=(M+b)*V,o[9]=(S-w)*V,o[10]=(1-(g+E))*V,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const a=this.determinant();if(a===0)return r.set(1,1,1),t.identity(),this;let c=_o.set(o[0],o[1],o[2]).length();const u=_o.set(o[4],o[5],o[6]).length(),d=_o.set(o[8],o[9],o[10]).length();a<0&&(c=-c),bi.copy(this);const h=1/c,p=1/u,v=1/d;return bi.elements[0]*=h,bi.elements[1]*=h,bi.elements[2]*=h,bi.elements[4]*=p,bi.elements[5]*=p,bi.elements[6]*=p,bi.elements[8]*=v,bi.elements[9]*=v,bi.elements[10]*=v,t.setFromRotationMatrix(bi),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,o,a,c,u=qi,d=!1){const h=this.elements,p=2*a/(t-e),v=2*a/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let M,E;if(d)M=a/(c-a),E=c*a/(c-a);else if(u===qi)M=-(c+a)/(c-a),E=-2*c*a/(c-a);else if(u===Su)M=-c/(c-a),E=-c*a/(c-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,o,a,c,u=qi,d=!1){const h=this.elements,p=2/(t-e),v=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let M,E;if(d)M=1/(c-a),E=c/(c-a);else if(u===qi)M=-2/(c-a),E=-(c+a)/(c-a);else if(u===Su)M=-1/(c-a),E=-a/(c-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=p,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=v,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=M,h[14]=E,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const _o=new ue,bi=new cn,zR=new ue(0,0,0),HR=new ue(1,1,1),Xr=new ue,Ac=new ue,ni=new ue,A_=new cn,C_=new Zo;class Tr{constructor(e=0,t=0,r=0,o=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,a=o[0],c=o[4],u=o[8],d=o[1],h=o[5],p=o[9],v=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(wt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-p,_),this._z=Math.atan2(-c,a)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(u,_),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-v,a),this._z=0);break;case"ZXY":this._x=Math.asin(wt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-v,_),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,a));break;case"ZYX":this._y=Math.asin(-wt(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(d,a)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-p,h),this._y=Math.atan2(-v,a)):(this._x=0,this._y=Math.atan2(u,_));break;case"XZY":this._z=Math.asin(-wt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(u,a)):(this._x=Math.atan2(-p,_),this._y=0);break;default:ft("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return A_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(A_,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return C_.setFromEuler(this),this.setFromQuaternion(C_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class LS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let GR=0;const R_=new ue,xo=new Zo,hr=new cn,Cc=new ue,Fa=new ue,WR=new ue,jR=new Zo,b_=new ue(1,0,0),P_=new ue(0,1,0),D_=new ue(0,0,1),L_={type:"added"},XR={type:"removed"},yo={type:"childadded",child:null},Wd={type:"childremoved",child:null};class oi extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:GR++}),this.uuid=ol(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DEFAULT_UP.clone();const e=new ue,t=new Tr,r=new Zo,o=new ue(1,1,1);function a(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(a),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new cn},normalMatrix:{value:new mt}}),this.matrix=new cn,this.matrixWorld=new cn,this.matrixAutoUpdate=oi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new LS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.multiply(xo),this}rotateOnWorldAxis(e,t){return xo.setFromAxisAngle(e,t),this.quaternion.premultiply(xo),this}rotateX(e){return this.rotateOnAxis(b_,e)}rotateY(e){return this.rotateOnAxis(P_,e)}rotateZ(e){return this.rotateOnAxis(D_,e)}translateOnAxis(e,t){return R_.copy(e).applyQuaternion(this.quaternion),this.position.add(R_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(b_,e)}translateY(e){return this.translateOnAxis(P_,e)}translateZ(e){return this.translateOnAxis(D_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Cc.copy(e):Cc.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Fa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hr.lookAt(Fa,Cc,this.up):hr.lookAt(Cc,Fa,this.up),this.quaternion.setFromRotationMatrix(hr),o&&(hr.extractRotation(o.matrixWorld),xo.setFromRotationMatrix(hr),this.quaternion.premultiply(xo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Lt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(L_),yo.child=e,this.dispatchEvent(yo),yo.child=null):Lt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(XR),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hr.multiply(e.parent.matrixWorld)),e.applyMatrix4(hr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(L_),yo.child=e,this.dispatchEvent(yo),yo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,e,WR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Fa,jR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,a=this.matrix.elements;a[12]+=t-a[0]*t-a[4]*r-a[8]*o,a[13]+=r-a[1]*t-a[5]*r-a[9]*o,a[14]+=o-a[2]*t-a[6]*r-a[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let a=0,c=o.length;a<c;a++)o[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(u=>({...u})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function a(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=a(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,p=d.length;h<p;h++){const v=d[h];a(e.shapes,v)}else a(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(a(e.materials,this.material[d]));o.material=u}else o.material=a(e.materials,this.material);if(this.children.length>0){o.children=[];for(let u=0;u<this.children.length;u++)o.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];o.animations.push(a(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),p=c(e.images),v=c(e.shapes),g=c(e.skeletons),_=c(e.animations),M=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),p.length>0&&(r.images=p),v.length>0&&(r.shapes=v),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),M.length>0&&(r.nodes=M)}return r.object=o,r;function c(u){const d=[];for(const h in u){const p=u[h];delete p.metadata,d.push(p)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}oi.DEFAULT_UP=new ue(0,1,0);oi.DEFAULT_MATRIX_AUTO_UPDATE=!0;oi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Rc extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $R={type:"move"};class jd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ue,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ue),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ue,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ue),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,a=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const E of e.hand.values()){const S=t.getJointPose(E,r),y=this._getHandJoint(h,E);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const p=h.joints["index-finger-tip"],v=h.joints["thumb-tip"],g=p.position.distanceTo(v.position),_=.02,M=.005;h.inputState.pinching&&g>_+M?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&g<=_-M&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,r),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1));u!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&a!==null&&(o=a),o!==null&&(u.matrix.fromArray(o.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,o.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(o.linearVelocity)):u.hasLinearVelocity=!1,o.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(o.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent($R)))}return u!==null&&(u.visible=o!==null),d!==null&&(d.visible=a!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Rc;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const NS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},bc={h:0,s:0,l:0};function Xd(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Ft{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=IR(e,1),t=wt(t,0,1),r=wt(r,0,1),t===0)this.r=this.g=this.b=r;else{const a=r<=.5?r*(1+t):r+t-r*t,c=2*r-a;this.r=Xd(c,a,e+1/3),this.g=Xd(c,a,e),this.b=Xd(c,a,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=rn){function r(a){a!==void 0&&parseFloat(a)<1&&ft("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const c=o[1],u=o[2];switch(c){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:ft("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=o[1],c=a.length;if(c===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(a,16),t);ft("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rn){const r=NS[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ft("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xr(e.r),this.g=xr(e.g),this.b=xr(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rn){return Pt.workingToColorSpace(Dn.copy(this),e),Math.round(wt(Dn.r*255,0,255))*65536+Math.round(wt(Dn.g*255,0,255))*256+Math.round(wt(Dn.b*255,0,255))}getHexString(e=rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Dn.copy(this),t);const r=Dn.r,o=Dn.g,a=Dn.b,c=Math.max(r,o,a),u=Math.min(r,o,a);let d,h;const p=(u+c)/2;if(u===c)d=0,h=0;else{const v=c-u;switch(h=p<=.5?v/(c+u):v/(2-c-u),c){case r:d=(o-a)/v+(o<a?6:0);break;case o:d=(a-r)/v+2;break;case a:d=(r-o)/v+4;break}d/=6}return e.h=d,e.s=h,e.l=p,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Dn.copy(this),t),e.r=Dn.r,e.g=Dn.g,e.b=Dn.b,e}getStyle(e=rn){Pt.workingToColorSpace(Dn.copy(this),e);const t=Dn.r,r=Dn.g,o=Dn.b;return e!==rn?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL($r),this.setHSL($r.h+e,$r.s+t,$r.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL($r),e.getHSL(bc);const r=kd($r.h,bc.h,t),o=kd($r.s,bc.s,t),a=kd($r.l,bc.l,t);return this.setHSL(r,o,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,a=e.elements;return this.r=a[0]*t+a[3]*r+a[6]*o,this.g=a[1]*t+a[4]*r+a[7]*o,this.b=a[2]*t+a[5]*r+a[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Dn=new Ft;Ft.NAMES=NS;class Np extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tr,this.environmentIntensity=1,this.environmentRotation=new Tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pi=new ue,pr=new ue,$d=new ue,mr=new ue,So=new ue,Mo=new ue,N_=new ue,Yd=new ue,qd=new ue,Kd=new ue,Zd=new sn,Qd=new sn,Jd=new sn;class Ni{constructor(e=new ue,t=new ue,r=new ue){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),Pi.subVectors(e,t),o.cross(Pi);const a=o.lengthSq();return a>0?o.multiplyScalar(1/Math.sqrt(a)):o.set(0,0,0)}static getBarycoord(e,t,r,o,a){Pi.subVectors(o,t),pr.subVectors(r,t),$d.subVectors(e,t);const c=Pi.dot(Pi),u=Pi.dot(pr),d=Pi.dot($d),h=pr.dot(pr),p=pr.dot($d),v=c*h-u*u;if(v===0)return a.set(0,0,0),null;const g=1/v,_=(h*d-u*p)*g,M=(c*p-u*d)*g;return a.set(1-_-M,M,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(e,t,r,o,a,c,u,d){return this.getBarycoord(e,t,r,o,mr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(a,mr.x),d.addScaledVector(c,mr.y),d.addScaledVector(u,mr.z),d)}static getInterpolatedAttribute(e,t,r,o,a,c){return Zd.setScalar(0),Qd.setScalar(0),Jd.setScalar(0),Zd.fromBufferAttribute(e,t),Qd.fromBufferAttribute(e,r),Jd.fromBufferAttribute(e,o),c.setScalar(0),c.addScaledVector(Zd,a.x),c.addScaledVector(Qd,a.y),c.addScaledVector(Jd,a.z),c}static isFrontFacing(e,t,r,o){return Pi.subVectors(r,t),pr.subVectors(e,t),Pi.cross(pr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),Pi.cross(pr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ni.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ni.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,a){return Ni.getInterpolation(e,this.a,this.b,this.c,t,r,o,a)}containsPoint(e){return Ni.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ni.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,a=this.c;let c,u;So.subVectors(o,r),Mo.subVectors(a,r),Yd.subVectors(e,r);const d=So.dot(Yd),h=Mo.dot(Yd);if(d<=0&&h<=0)return t.copy(r);qd.subVectors(e,o);const p=So.dot(qd),v=Mo.dot(qd);if(p>=0&&v<=p)return t.copy(o);const g=d*v-p*h;if(g<=0&&d>=0&&p<=0)return c=d/(d-p),t.copy(r).addScaledVector(So,c);Kd.subVectors(e,a);const _=So.dot(Kd),M=Mo.dot(Kd);if(M>=0&&_<=M)return t.copy(a);const E=_*h-d*M;if(E<=0&&h>=0&&M<=0)return u=h/(h-M),t.copy(r).addScaledVector(Mo,u);const S=p*M-_*v;if(S<=0&&v-p>=0&&_-M>=0)return N_.subVectors(a,o),u=(v-p)/(v-p+(_-M)),t.copy(o).addScaledVector(N_,u);const y=1/(S+E+g);return c=E*y,u=g*y,t.copy(r).addScaledVector(So,c).addScaledVector(Mo,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class al{constructor(e=new ue(1/0,1/0,1/0),t=new ue(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Di.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Di.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Di.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const a=r.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=a.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,Di):Di.fromBufferAttribute(a,c),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Pc.copy(r.boundingBox)),Pc.applyMatrix4(e.matrixWorld),this.union(Pc)}const o=e.children;for(let a=0,c=o.length;a<c;a++)this.expandByObject(o[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Oa),Dc.subVectors(this.max,Oa),Eo.subVectors(e.a,Oa),To.subVectors(e.b,Oa),wo.subVectors(e.c,Oa),Yr.subVectors(To,Eo),qr.subVectors(wo,To),ws.subVectors(Eo,wo);let t=[0,-Yr.z,Yr.y,0,-qr.z,qr.y,0,-ws.z,ws.y,Yr.z,0,-Yr.x,qr.z,0,-qr.x,ws.z,0,-ws.x,-Yr.y,Yr.x,0,-qr.y,qr.x,0,-ws.y,ws.x,0];return!eh(t,Eo,To,wo,Dc)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Eo,To,wo,Dc))?!1:(Lc.crossVectors(Yr,qr),t=[Lc.x,Lc.y,Lc.z],eh(t,Eo,To,wo,Dc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(gr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),gr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),gr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),gr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),gr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),gr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),gr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),gr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(gr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const gr=[new ue,new ue,new ue,new ue,new ue,new ue,new ue,new ue],Di=new ue,Pc=new al,Eo=new ue,To=new ue,wo=new ue,Yr=new ue,qr=new ue,ws=new ue,Oa=new ue,Dc=new ue,Lc=new ue,As=new ue;function eh(n,e,t,r,o){for(let a=0,c=n.length-3;a<=c;a+=3){As.fromArray(n,a);const u=o.x*Math.abs(As.x)+o.y*Math.abs(As.y)+o.z*Math.abs(As.z),d=e.dot(As),h=t.dot(As),p=r.dot(As);if(Math.max(-Math.max(d,h,p),Math.min(d,h,p))>u)return!1}return!0}const an=new ue,Nc=new St;let YR=0;class yi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:YR++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=y_,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,a=this.itemSize;o<a;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Nc.fromBufferAttribute(this,t),Nc.applyMatrix3(e),this.setXY(t,Nc.x,Nc.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix3(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyMatrix4(e),this.setXYZ(t,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.applyNormalMatrix(e),this.setXYZ(t,an.x,an.y,an.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)an.fromBufferAttribute(this,t),an.transformDirection(e),this.setXYZ(t,an.x,an.y,an.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Ua(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=qn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ua(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ua(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ua(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ua(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),r=qn(r,this.array),o=qn(o,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==y_&&(e.usage=this.usage),e}}class IS extends yi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class US extends yi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class yr extends yi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const qR=new al,Ba=new ue,th=new ue;class Am{constructor(e=new ue,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):qR.setFromPoints(e).getCenter(r);let o=0;for(let a=0,c=e.length;a<c;a++)o=Math.max(o,r.distanceToSquared(e[a]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ba.subVectors(e,this.center);const t=Ba.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Ba,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ba.copy(e.center).add(th)),this.expandByPoint(Ba.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let KR=0;const gi=new cn,nh=new oi,Ao=new ue,ii=new al,ka=new al,_n=new ue;class nr extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:KR++}),this.uuid=ol(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(PR(e)?US:IS)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const a=new mt().getNormalMatrix(e);r.applyNormalMatrix(a),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,r){return gi.makeTranslation(e,t,r),this.applyMatrix4(gi),this}scale(e,t,r){return gi.makeScale(e,t,r),this.applyMatrix4(gi),this}lookAt(e){return nh.lookAt(e),nh.updateMatrix(),this.applyMatrix4(nh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ao).negate(),this.translate(Ao.x,Ao.y,Ao.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,a=e.length;o<a;o++){const c=e[o];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new yr(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const a=e[o];t.setXYZ(o,a.x,a.y,a.z||0)}e.length>t.count&&ft("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new al);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ue(-1/0,-1/0,-1/0),new ue(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];ii.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Lt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Am);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Lt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ue,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let a=0,c=t.length;a<c;a++){const u=t[a];ka.setFromBufferAttribute(u),this.morphTargetsRelative?(_n.addVectors(ii.min,ka.min),ii.expandByPoint(_n),_n.addVectors(ii.max,ka.max),ii.expandByPoint(_n)):(ii.expandByPoint(ka.min),ii.expandByPoint(ka.max))}ii.getCenter(r);let o=0;for(let a=0,c=e.count;a<c;a++)_n.fromBufferAttribute(e,a),o=Math.max(o,r.distanceToSquared(_n));if(t)for(let a=0,c=t.length;a<c;a++){const u=t[a],d=this.morphTargetsRelative;for(let h=0,p=u.count;h<p;h++)_n.fromBufferAttribute(u,h),d&&(Ao.fromBufferAttribute(e,h),_n.add(Ao)),o=Math.max(o,r.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Lt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Lt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*r.count),4));const c=this.getAttribute("tangent"),u=[],d=[];for(let A=0;A<r.count;A++)u[A]=new ue,d[A]=new ue;const h=new ue,p=new ue,v=new ue,g=new St,_=new St,M=new St,E=new ue,S=new ue;function y(A,D,K){h.fromBufferAttribute(r,A),p.fromBufferAttribute(r,D),v.fromBufferAttribute(r,K),g.fromBufferAttribute(a,A),_.fromBufferAttribute(a,D),M.fromBufferAttribute(a,K),p.sub(h),v.sub(h),_.sub(g),M.sub(g);const B=1/(_.x*M.y-M.x*_.y);isFinite(B)&&(E.copy(p).multiplyScalar(M.y).addScaledVector(v,-_.y).multiplyScalar(B),S.copy(v).multiplyScalar(_.x).addScaledVector(p,-M.x).multiplyScalar(B),u[A].add(E),u[D].add(E),u[K].add(E),d[A].add(S),d[D].add(S),d[K].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let A=0,D=w.length;A<D;++A){const K=w[A],B=K.start,Q=K.count;for(let J=B,ne=B+Q;J<ne;J+=3)y(e.getX(J+0),e.getX(J+1),e.getX(J+2))}const b=new ue,P=new ue,I=new ue,U=new ue;function V(A){I.fromBufferAttribute(o,A),U.copy(I);const D=u[A];b.copy(D),b.sub(I.multiplyScalar(I.dot(D))).normalize(),P.crossVectors(U,D);const B=P.dot(d[A])<0?-1:1;c.setXYZW(A,b.x,b.y,b.z,B)}for(let A=0,D=w.length;A<D;++A){const K=w[A],B=K.start,Q=K.count;for(let J=B,ne=B+Q;J<ne;J+=3)V(e.getX(J+0)),V(e.getX(J+1)),V(e.getX(J+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new ue,a=new ue,c=new ue,u=new ue,d=new ue,h=new ue,p=new ue,v=new ue;if(e)for(let g=0,_=e.count;g<_;g+=3){const M=e.getX(g+0),E=e.getX(g+1),S=e.getX(g+2);o.fromBufferAttribute(t,M),a.fromBufferAttribute(t,E),c.fromBufferAttribute(t,S),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),u.fromBufferAttribute(r,M),d.fromBufferAttribute(r,E),h.fromBufferAttribute(r,S),u.add(p),d.add(p),h.add(p),r.setXYZ(M,u.x,u.y,u.z),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),a.fromBufferAttribute(t,g+1),c.fromBufferAttribute(t,g+2),p.subVectors(c,a),v.subVectors(o,a),p.cross(v),r.setXYZ(g+0,p.x,p.y,p.z),r.setXYZ(g+1,p.x,p.y,p.z),r.setXYZ(g+2,p.x,p.y,p.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)_n.fromBufferAttribute(e,t),_n.normalize(),e.setXYZ(t,_n.x,_n.y,_n.z)}toNonIndexed(){function e(u,d){const h=u.array,p=u.itemSize,v=u.normalized,g=new h.constructor(d.length*p);let _=0,M=0;for(let E=0,S=d.length;E<S;E++){u.isInterleavedBufferAttribute?_=d[E]*u.data.stride+u.offset:_=d[E]*p;for(let y=0;y<p;y++)g[M++]=h[_++]}return new yi(g,p,v)}if(this.index===null)return ft("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,r=this.index.array,o=this.attributes;for(const u in o){const d=o[u],h=e(d,r);t.setAttribute(u,h)}const a=this.morphAttributes;for(const u in a){const d=[],h=a[u];for(let p=0,v=h.length;p<v;p++){const g=h[p],_=e(g,r);d.push(_)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const o={};let a=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],p=[];for(let v=0,g=h.length;v<g;v++){const _=h[v];p.push(_.toJSON(e.data))}p.length>0&&(o[d]=p,a=!0)}a&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const h in o){const p=o[h];this.setAttribute(h,p.clone(t))}const a=e.morphAttributes;for(const h in a){const p=[],v=a[h];for(let g=0,_=v.length;g<_;g++)p.push(v[g].clone(t));this.morphAttributes[h]=p}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,p=c.length;h<p;h++){const v=c[h];this.addGroup(v.start,v.count,v.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let ZR=0;class Qo extends as{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ZR++}),this.uuid=ol(),this.name="",this.type="Material",this.blending=Fo,this.side=Sr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Gh,this.blendDst=Wh,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=zo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=x_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ft(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ft(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Fo&&(r.blending=this.blending),this.side!==Sr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Gh&&(r.blendSrc=this.blendSrc),this.blendDst!==Wh&&(r.blendDst=this.blendDst),this.blendEquation!==Fs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==zo&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==x_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==go&&(r.stencilFail=this.stencilFail),this.stencilZFail!==go&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==go&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(a){const c=[];for(const u in a){const d=a[u];delete d.metadata,c.push(d)}return c}if(t){const a=o(e.textures),c=o(e.images);a.length>0&&(r.textures=a),c.length>0&&(r.images=c)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let a=0;a!==o;++a)r[a]=t[a].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vr=new ue,ih=new ue,Ic=new ue,Kr=new ue,rh=new ue,Uc=new ue,sh=new ue;class QR{constructor(e=new ue,t=new ue(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,vr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=vr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(vr.copy(this.origin).addScaledVector(this.direction,t),vr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){ih.copy(e).add(t).multiplyScalar(.5),Ic.copy(t).sub(e).normalize(),Kr.copy(this.origin).sub(ih);const a=e.distanceTo(t)*.5,c=-this.direction.dot(Ic),u=Kr.dot(this.direction),d=-Kr.dot(Ic),h=Kr.lengthSq(),p=Math.abs(1-c*c);let v,g,_,M;if(p>0)if(v=c*d-u,g=c*u-d,M=a*p,v>=0)if(g>=-M)if(g<=M){const E=1/p;v*=E,g*=E,_=v*(v+c*g+2*u)+g*(c*v+g+2*d)+h}else g=a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g=-a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;else g<=-M?(v=Math.max(0,-(-c*a+u)),g=v>0?-a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h):g<=M?(v=0,g=Math.min(Math.max(-a,-d),a),_=g*(g+2*d)+h):(v=Math.max(0,-(c*a+u)),g=v>0?a:Math.min(Math.max(-a,-d),a),_=-v*v+g*(g+2*d)+h);else g=c>0?-a:a,v=Math.max(0,-(c*g+u)),_=-v*v+g*(g+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,v),o&&o.copy(ih).addScaledVector(Ic,g),_}intersectSphere(e,t){vr.subVectors(e.center,this.origin);const r=vr.dot(this.direction),o=vr.dot(vr)-r*r,a=e.radius*e.radius;if(o>a)return null;const c=Math.sqrt(a-o),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,a,c,u,d;const h=1/this.direction.x,p=1/this.direction.y,v=1/this.direction.z,g=this.origin;return h>=0?(r=(e.min.x-g.x)*h,o=(e.max.x-g.x)*h):(r=(e.max.x-g.x)*h,o=(e.min.x-g.x)*h),p>=0?(a=(e.min.y-g.y)*p,c=(e.max.y-g.y)*p):(a=(e.max.y-g.y)*p,c=(e.min.y-g.y)*p),r>c||a>o||((a>r||isNaN(r))&&(r=a),(c<o||isNaN(o))&&(o=c),v>=0?(u=(e.min.z-g.z)*v,d=(e.max.z-g.z)*v):(u=(e.max.z-g.z)*v,d=(e.min.z-g.z)*v),r>d||u>o)||((u>r||r!==r)&&(r=u),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,vr)!==null}intersectTriangle(e,t,r,o,a){rh.subVectors(t,e),Uc.subVectors(r,e),sh.crossVectors(rh,Uc);let c=this.direction.dot(sh),u;if(c>0){if(o)return null;u=1}else if(c<0)u=-1,c=-c;else return null;Kr.subVectors(this.origin,e);const d=u*this.direction.dot(Uc.crossVectors(Kr,Uc));if(d<0)return null;const h=u*this.direction.dot(rh.cross(Kr));if(h<0||d+h>c)return null;const p=-u*Kr.dot(sh);return p<0?null:this.at(p/c,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class FS extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tr,this.combine=pS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const I_=new cn,Cs=new QR,Fc=new Am,U_=new ue,Oc=new ue,Bc=new ue,kc=new ue,oh=new ue,Vc=new ue,F_=new ue,zc=new ue;class Bi extends oi{constructor(e=new nr,t=new FS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,c=o.length;a<c;a++){const u=o[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=a}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,a=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const u=this.morphTargetInfluences;if(a&&u){Vc.set(0,0,0);for(let d=0,h=a.length;d<h;d++){const p=u[d],v=a[d];p!==0&&(oh.fromBufferAttribute(v,e),c?Vc.addScaledVector(oh,p):Vc.addScaledVector(oh.sub(t),p))}t.add(Vc)}return t}raycast(e,t){const r=this.geometry,o=this.material,a=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Fc.copy(r.boundingSphere),Fc.applyMatrix4(a),Cs.copy(e.ray).recast(e.near),!(Fc.containsPoint(Cs.origin)===!1&&(Cs.intersectSphere(Fc,U_)===null||Cs.origin.distanceToSquared(U_)>(e.far-e.near)**2))&&(I_.copy(a).invert(),Cs.copy(e.ray).applyMatrix4(I_),!(r.boundingBox!==null&&Cs.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Cs)))}_computeIntersections(e,t,r){let o;const a=this.geometry,c=this.material,u=a.index,d=a.attributes.position,h=a.attributes.uv,p=a.attributes.uv1,v=a.attributes.normal,g=a.groups,_=a.drawRange;if(u!==null)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],w=Math.max(S.start,_.start),b=Math.min(u.count,Math.min(S.start+S.count,_.start+_.count));for(let P=w,I=b;P<I;P+=3){const U=u.getX(P),V=u.getX(P+1),A=u.getX(P+2);o=Hc(this,y,e,r,h,p,v,U,V,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),E=Math.min(u.count,_.start+_.count);for(let S=M,y=E;S<y;S+=3){const w=u.getX(S),b=u.getX(S+1),P=u.getX(S+2);o=Hc(this,c,e,r,h,p,v,w,b,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(c))for(let M=0,E=g.length;M<E;M++){const S=g[M],y=c[S.materialIndex],w=Math.max(S.start,_.start),b=Math.min(d.count,Math.min(S.start+S.count,_.start+_.count));for(let P=w,I=b;P<I;P+=3){const U=P,V=P+1,A=P+2;o=Hc(this,y,e,r,h,p,v,U,V,A),o&&(o.faceIndex=Math.floor(P/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const M=Math.max(0,_.start),E=Math.min(d.count,_.start+_.count);for(let S=M,y=E;S<y;S+=3){const w=S,b=S+1,P=S+2;o=Hc(this,c,e,r,h,p,v,w,b,P),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function JR(n,e,t,r,o,a,c,u){let d;if(e.side===xn?d=r.intersectTriangle(c,a,o,!0,u):d=r.intersectTriangle(o,a,c,e.side===Sr,u),d===null)return null;zc.copy(u),zc.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(zc);return h<t.near||h>t.far?null:{distance:h,point:zc.clone(),object:n}}function Hc(n,e,t,r,o,a,c,u,d,h){n.getVertexPosition(u,Oc),n.getVertexPosition(d,Bc),n.getVertexPosition(h,kc);const p=JR(n,e,t,r,Oc,Bc,kc,F_);if(p){const v=new ue;Ni.getBarycoord(F_,Oc,Bc,kc,v),o&&(p.uv=Ni.getInterpolatedAttribute(o,u,d,h,v,new St)),a&&(p.uv1=Ni.getInterpolatedAttribute(a,u,d,h,v,new St)),c&&(p.normal=Ni.getInterpolatedAttribute(c,u,d,h,v,new ue),p.normal.dot(r.direction)>0&&p.normal.multiplyScalar(-1));const g={a:u,b:d,c:h,normal:new ue,materialIndex:0};Ni.getNormal(Oc,Bc,kc,g.normal),p.face=g,p.barycoord=v}return p}class eb extends yn{constructor(e=null,t=1,r=1,o,a,c,u,d,h=wn,p=wn,v,g){super(null,c,u,d,h,p,o,a,v,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ah=new ue,tb=new ue,nb=new mt;class Is{constructor(e=new ue(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=ah.subVectors(r,t).cross(tb.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(ah),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/o;return a<0||a>1?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||nb.getNormalMatrix(e),o=this.coplanarPoint(ah).applyMatrix4(e),a=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Rs=new Am,ib=new St(.5,.5),Gc=new ue;class OS{constructor(e=new Is,t=new Is,r=new Is,o=new Is,a=new Is,c=new Is){this.planes=[e,t,r,o,a,c]}set(e,t,r,o,a,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(o),u[4].copy(a),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=qi,r=!1){const o=this.planes,a=e.elements,c=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],M=a[8],E=a[9],S=a[10],y=a[11],w=a[12],b=a[13],P=a[14],I=a[15];if(o[0].setComponents(h-c,_-p,y-M,I-w).normalize(),o[1].setComponents(h+c,_+p,y+M,I+w).normalize(),o[2].setComponents(h+u,_+v,y+E,I+b).normalize(),o[3].setComponents(h-u,_-v,y-E,I-b).normalize(),r)o[4].setComponents(d,g,S,P).normalize(),o[5].setComponents(h-d,_-g,y-S,I-P).normalize();else if(o[4].setComponents(h-d,_-g,y-S,I-P).normalize(),t===qi)o[5].setComponents(h+d,_+g,y+S,I+P).normalize();else if(t===Su)o[5].setComponents(d,g,S,P).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rs)}intersectsSprite(e){Rs.center.set(0,0,0);const t=ib.distanceTo(e.center);return Rs.radius=.7071067811865476+t,Rs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Gc.x=o.normal.x>0?e.max.x:e.min.x,Gc.y=o.normal.y>0?e.max.y:e.min.y,Gc.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class BS extends yn{constructor(e=[],t=Ws,r,o,a,c,u,d,h,p){super(e,t,r,o,a,c,u,d,h,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jo extends yn{constructor(e,t,r=er,o,a,c,u=wn,d=wn,h,p=Er,v=1){if(p!==Er&&p!==ts)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:v};super(g,o,a,c,u,d,p,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new wm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class rb extends jo{constructor(e,t=er,r=Ws,o,a,c=wn,u=wn,d,h=Er){const p={width:e,height:e,depth:1},v=[p,p,p,p,p,p];super(e,e,t,r,o,a,c,u,d,h),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kS extends yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ll extends nr{constructor(e=1,t=1,r=1,o=1,a=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:a,depthSegments:c};const u=this;o=Math.floor(o),a=Math.floor(a),c=Math.floor(c);const d=[],h=[],p=[],v=[];let g=0,_=0;M("z","y","x",-1,-1,r,t,e,c,a,0),M("z","y","x",1,-1,r,t,-e,c,a,1),M("x","z","y",1,1,e,r,t,o,c,2),M("x","z","y",1,-1,e,r,-t,o,c,3),M("x","y","z",1,-1,e,t,r,o,a,4),M("x","y","z",-1,-1,e,t,-r,o,a,5),this.setIndex(d),this.setAttribute("position",new yr(h,3)),this.setAttribute("normal",new yr(p,3)),this.setAttribute("uv",new yr(v,2));function M(E,S,y,w,b,P,I,U,V,A,D){const K=P/V,B=I/A,Q=P/2,J=I/2,ne=U/2,G=V+1,H=A+1;let $=0,X=0;const ee=new ue;for(let ae=0;ae<H;ae++){const O=ae*B-J;for(let Z=0;Z<G;Z++){const Re=Z*K-Q;ee[E]=Re*w,ee[S]=O*b,ee[y]=ne,h.push(ee.x,ee.y,ee.z),ee[E]=0,ee[S]=0,ee[y]=U>0?1:-1,p.push(ee.x,ee.y,ee.z),v.push(Z/V),v.push(1-ae/A),$+=1}}for(let ae=0;ae<A;ae++)for(let O=0;O<V;O++){const Z=g+O+G*ae,Re=g+O+G*(ae+1),Ve=g+(O+1)+G*(ae+1),He=g+(O+1)+G*ae;d.push(Z,Re,He),d.push(Re,Ve,He),X+=6}u.addGroup(_,X,D),_+=X,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ll(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class cl extends nr{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const a=e/2,c=t/2,u=Math.floor(r),d=Math.floor(o),h=u+1,p=d+1,v=e/u,g=t/d,_=[],M=[],E=[],S=[];for(let y=0;y<p;y++){const w=y*g-c;for(let b=0;b<h;b++){const P=b*v-a;M.push(P,-w,0),E.push(0,0,1),S.push(b/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let w=0;w<u;w++){const b=w+h*y,P=w+h*(y+1),I=w+1+h*(y+1),U=w+1+h*y;_.push(b,P,U),_.push(P,I,U)}this.setIndex(_),this.setAttribute("position",new yr(M,3)),this.setAttribute("normal",new yr(E,3)),this.setAttribute("uv",new yr(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cl(e.width,e.height,e.widthSegments,e.heightSegments)}}function Xo(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const o=n[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(ft("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function On(n){const e={};for(let t=0;t<n.length;t++){const r=Xo(n[t]);for(const o in r)e[o]=r[o]}return e}function sb(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function VS(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const ob={clone:Xo,merge:On};var ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Kn extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ab,this.fragmentShader=lb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Xo(e.uniforms),this.uniformsGroups=sb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?t.uniforms[o]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[o]={type:"m4",value:c.toArray()}:t.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class cb extends Kn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ub extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fb extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Wc=new ue,jc=new Zo,Wi=new ue;class zS extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new cn,this.projectionMatrix=new cn,this.projectionMatrixInverse=new cn,this.coordinateSystem=qi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Wc,jc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,jc,Wi.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Wc,jc,Wi),Wi.x===1&&Wi.y===1&&Wi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Wc,jc,Wi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Zr=new ue,O_=new St,B_=new St;class vi extends zS{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Bd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lp*2*Math.atan(Math.tan(Bd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,O_,B_),t.subVectors(B_,O_)}setViewOffset(e,t,r,o,a,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Bd*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,a=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;a+=c.offsetX*o/d,t-=c.offsetY*r/h,o*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(a+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Du extends zS{constructor(e=-1,t=1,r=1,o=-1,a=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=a,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,a,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=a,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let a=r-e,c=r+e,u=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=h*this.view.offsetX,c=a+h*this.view.width,u-=p*this.view.offsetY,d=u-p*this.view.height}this.projectionMatrix.makeOrthographic(a,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Co=-90,Ro=1;class db extends oi{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new vi(Co,Ro,e,t);o.layers=this.layers,this.add(o);const a=new vi(Co,Ro,e,t);a.layers=this.layers,this.add(a);const c=new vi(Co,Ro,e,t);c.layers=this.layers,this.add(c);const u=new vi(Co,Ro,e,t);u.layers=this.layers,this.add(u);const d=new vi(Co,Ro,e,t);d.layers=this.layers,this.add(d);const h=new vi(Co,Ro,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,a,c,u,d]=t;for(const h of t)this.remove(h);if(e===qi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Su)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,c,u,d,h,p]=this.children,v=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,1,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,o),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(v,g,_),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class hb extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class nn{constructor(e){this.value=e}clone(){return new nn(this.value.clone===void 0?this.value:this.value.clone())}}class pb{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,ft("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function k_(n,e,t,r){const o=mb(r);switch(t){case CS:return n*e;case bS:return n*e/o.components*o.byteLength;case ym:return n*e/o.components*o.byteLength;case Wo:return n*e*2/o.components*o.byteLength;case Sm:return n*e*2/o.components*o.byteLength;case RS:return n*e*3/o.components*o.byteLength;case Ui:return n*e*4/o.components*o.byteLength;case Mm:return n*e*4/o.components*o.byteLength;case su:case ou:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case au:case lu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case ep:case np:return Math.max(n,16)*Math.max(e,8)/4;case Jh:case tp:return Math.max(n,8)*Math.max(e,8)/2;case ip:case rp:case op:case ap:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case sp:case lp:case cp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case up:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case fp:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case dp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case hp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case pp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case mp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case gp:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case vp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case _p:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case xp:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case yp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Sp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Mp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Ep:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Tp:case wp:case Ap:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Cp:case Rp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case bp:case Pp:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function mb(n){switch(n){case Ln:case ES:return{byteLength:1,components:1};case el:case TS:case Mr:return{byteLength:2,components:1};case _m:case xm:return{byteLength:2,components:4};case er:case vm:case Ii:return{byteLength:4,components:1};case wS:case AS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:bu}}));typeof window<"u"&&(window.__THREE__?ft("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=bu);function HS(){let n=null,e=!1,t=null,r=null;function o(a,c){t(a,c),r=n.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=n.requestAnimationFrame(o),e=!0)},stop:function(){n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function gb(n){const e=new WeakMap;function t(u,d){const h=u.array,p=u.usage,v=h.byteLength,g=n.createBuffer();n.bindBuffer(d,g),n.bufferData(d,h,p),u.onUploadCallback();let _;if(h instanceof Float32Array)_=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?_=n.HALF_FLOAT:_=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=n.SHORT;else if(h instanceof Uint32Array)_=n.UNSIGNED_INT;else if(h instanceof Int32Array)_=n.INT;else if(h instanceof Int8Array)_=n.BYTE;else if(h instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:v}}function r(u,d,h){const p=d.array,v=d.updateRanges;if(n.bindBuffer(h,u),v.length===0)n.bufferSubData(h,0,p);else{v.sort((_,M)=>_.start-M.start);let g=0;for(let _=1;_<v.length;_++){const M=v[g],E=v[_];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++g,v[g]=E)}v.length=g+1;for(let _=0,M=v.length;_<M;_++){const E=v[_];n.bufferSubData(h,E.start*p.BYTES_PER_ELEMENT,p,E.start,E.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const p=e.get(u);(!p||p.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:o,remove:a,update:c}}var vb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_b=`#ifdef USE_ALPHAHASH
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
#endif`,xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,yb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Eb=`#ifdef USE_AOMAP
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
#endif`,Tb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wb=`#ifdef USE_BATCHING
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
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ab=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Pb=`#ifdef USE_IRIDESCENCE
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
#endif`,Db=`#ifdef USE_BUMPMAP
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
#endif`,Lb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ub=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ob=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Bb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,kb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Vb=`#define PI 3.141592653589793
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
} // validated`,zb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Hb=`vec3 transformedNormal = objectNormal;
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
#endif`,Gb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Xb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$b="gl_FragColor = linearToOutputTexel( gl_FragColor );",Yb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
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
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Zb=`#ifdef USE_ENVMAP
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
#endif`,Qb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
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
#endif`,eP=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,tP=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,nP=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iP=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,rP=`#ifdef USE_GRADIENTMAP
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
}`,sP=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oP=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,aP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lP=`uniform bool receiveShadow;
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
#endif`,cP=`#ifdef USE_ENVMAP
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
#endif`,uP=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dP=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hP=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,pP=`PhysicalMaterial material;
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
#endif`,mP=`uniform sampler2D dfgLUT;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
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
}`,gP=`
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
#endif`,vP=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
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
#endif`,_P=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,xP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yP=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,MP=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,EP=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,TP=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wP=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,AP=`#if defined( USE_POINTS_UV )
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
#endif`,CP=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,RP=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bP=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,PP=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,DP=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LP=`#ifdef USE_MORPHTARGETS
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
#endif`,NP=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,IP=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UP=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OP=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,BP=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,kP=`#ifdef USE_NORMALMAP
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
#endif`,VP=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,zP=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,HP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,GP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,WP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jP=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,XP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$P=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,YP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,KP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ZP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,QP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
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
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,JP=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,eD=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,tD=`float getShadowMask() {
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
}`,nD=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iD=`#ifdef USE_SKINNING
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
#endif`,rD=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sD=`#ifdef USE_SKINNING
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
#endif`,oD=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aD=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lD=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cD=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,uD=`#ifdef USE_TRANSMISSION
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
#endif`,fD=`#ifdef USE_TRANSMISSION
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
#endif`,dD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pD=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mD=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gD=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vD=`uniform sampler2D t2D;
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
}`,_D=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xD=`#ifdef ENVMAP_TYPE_CUBE
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
}`,yD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MD=`#include <common>
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
}`,ED=`#if DEPTH_PACKING == 3200
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
}`,TD=`#define DISTANCE
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
}`,wD=`#define DISTANCE
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
}`,AD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,CD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RD=`uniform float scale;
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
}`,bD=`uniform vec3 diffuse;
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
}`,PD=`#include <common>
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
}`,DD=`uniform vec3 diffuse;
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
}`,LD=`#define LAMBERT
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
}`,ND=`#define LAMBERT
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,ID=`#define MATCAP
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
}`,UD=`#define MATCAP
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
}`,FD=`#define NORMAL
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
}`,OD=`#define NORMAL
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
}`,BD=`#define PHONG
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
}`,kD=`#define PHONG
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
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
}`,VD=`#define STANDARD
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
}`,zD=`#define STANDARD
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
}`,HD=`#define TOON
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
}`,GD=`#define TOON
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
}`,WD=`uniform float size;
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
}`,jD=`uniform vec3 diffuse;
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
}`,XD=`#include <common>
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
}`,$D=`uniform vec3 color;
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
	#include <premultiplied_alpha_fragment>
}`,YD=`uniform float rotation;
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
}`,qD=`uniform vec3 diffuse;
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
}`,vt={alphahash_fragment:vb,alphahash_pars_fragment:_b,alphamap_fragment:xb,alphamap_pars_fragment:yb,alphatest_fragment:Sb,alphatest_pars_fragment:Mb,aomap_fragment:Eb,aomap_pars_fragment:Tb,batching_pars_vertex:wb,batching_vertex:Ab,begin_vertex:Cb,beginnormal_vertex:Rb,bsdfs:bb,iridescence_fragment:Pb,bumpmap_pars_fragment:Db,clipping_planes_fragment:Lb,clipping_planes_pars_fragment:Nb,clipping_planes_pars_vertex:Ib,clipping_planes_vertex:Ub,color_fragment:Fb,color_pars_fragment:Ob,color_pars_vertex:Bb,color_vertex:kb,common:Vb,cube_uv_reflection_fragment:zb,defaultnormal_vertex:Hb,displacementmap_pars_vertex:Gb,displacementmap_vertex:Wb,emissivemap_fragment:jb,emissivemap_pars_fragment:Xb,colorspace_fragment:$b,colorspace_pars_fragment:Yb,envmap_fragment:qb,envmap_common_pars_fragment:Kb,envmap_pars_fragment:Zb,envmap_pars_vertex:Qb,envmap_physical_pars_fragment:cP,envmap_vertex:Jb,fog_vertex:eP,fog_pars_vertex:tP,fog_fragment:nP,fog_pars_fragment:iP,gradientmap_pars_fragment:rP,lightmap_pars_fragment:sP,lights_lambert_fragment:oP,lights_lambert_pars_fragment:aP,lights_pars_begin:lP,lights_toon_fragment:uP,lights_toon_pars_fragment:fP,lights_phong_fragment:dP,lights_phong_pars_fragment:hP,lights_physical_fragment:pP,lights_physical_pars_fragment:mP,lights_fragment_begin:gP,lights_fragment_maps:vP,lights_fragment_end:_P,logdepthbuf_fragment:xP,logdepthbuf_pars_fragment:yP,logdepthbuf_pars_vertex:SP,logdepthbuf_vertex:MP,map_fragment:EP,map_pars_fragment:TP,map_particle_fragment:wP,map_particle_pars_fragment:AP,metalnessmap_fragment:CP,metalnessmap_pars_fragment:RP,morphinstance_vertex:bP,morphcolor_vertex:PP,morphnormal_vertex:DP,morphtarget_pars_vertex:LP,morphtarget_vertex:NP,normal_fragment_begin:IP,normal_fragment_maps:UP,normal_pars_fragment:FP,normal_pars_vertex:OP,normal_vertex:BP,normalmap_pars_fragment:kP,clearcoat_normal_fragment_begin:VP,clearcoat_normal_fragment_maps:zP,clearcoat_pars_fragment:HP,iridescence_pars_fragment:GP,opaque_fragment:WP,packing:jP,premultiplied_alpha_fragment:XP,project_vertex:$P,dithering_fragment:YP,dithering_pars_fragment:qP,roughnessmap_fragment:KP,roughnessmap_pars_fragment:ZP,shadowmap_pars_fragment:QP,shadowmap_pars_vertex:JP,shadowmap_vertex:eD,shadowmask_pars_fragment:tD,skinbase_vertex:nD,skinning_pars_vertex:iD,skinning_vertex:rD,skinnormal_vertex:sD,specularmap_fragment:oD,specularmap_pars_fragment:aD,tonemapping_fragment:lD,tonemapping_pars_fragment:cD,transmission_fragment:uD,transmission_pars_fragment:fD,uv_pars_fragment:dD,uv_pars_vertex:hD,uv_vertex:pD,worldpos_vertex:mD,background_vert:gD,background_frag:vD,backgroundCube_vert:_D,backgroundCube_frag:xD,cube_vert:yD,cube_frag:SD,depth_vert:MD,depth_frag:ED,distance_vert:TD,distance_frag:wD,equirect_vert:AD,equirect_frag:CD,linedashed_vert:RD,linedashed_frag:bD,meshbasic_vert:PD,meshbasic_frag:DD,meshlambert_vert:LD,meshlambert_frag:ND,meshmatcap_vert:ID,meshmatcap_frag:UD,meshnormal_vert:FD,meshnormal_frag:OD,meshphong_vert:BD,meshphong_frag:kD,meshphysical_vert:VD,meshphysical_frag:zD,meshtoon_vert:HD,meshtoon_frag:GD,points_vert:WD,points_frag:jD,shadow_vert:XD,shadow_frag:$D,sprite_vert:YD,sprite_frag:qD},Ne={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new St(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new St(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},$i={basic:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.fog]),vertexShader:vt.meshbasic_vert,fragmentShader:vt.meshbasic_frag},lambert:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},envMapIntensity:{value:1}}]),vertexShader:vt.meshlambert_vert,fragmentShader:vt.meshlambert_frag},phong:{uniforms:On([Ne.common,Ne.specularmap,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:vt.meshphong_vert,fragmentShader:vt.meshphong_frag},standard:{uniforms:On([Ne.common,Ne.envmap,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.roughnessmap,Ne.metalnessmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag},toon:{uniforms:On([Ne.common,Ne.aomap,Ne.lightmap,Ne.emissivemap,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.gradientmap,Ne.fog,Ne.lights,{emissive:{value:new Ft(0)}}]),vertexShader:vt.meshtoon_vert,fragmentShader:vt.meshtoon_frag},matcap:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,Ne.fog,{matcap:{value:null}}]),vertexShader:vt.meshmatcap_vert,fragmentShader:vt.meshmatcap_frag},points:{uniforms:On([Ne.points,Ne.fog]),vertexShader:vt.points_vert,fragmentShader:vt.points_frag},dashed:{uniforms:On([Ne.common,Ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:vt.linedashed_vert,fragmentShader:vt.linedashed_frag},depth:{uniforms:On([Ne.common,Ne.displacementmap]),vertexShader:vt.depth_vert,fragmentShader:vt.depth_frag},normal:{uniforms:On([Ne.common,Ne.bumpmap,Ne.normalmap,Ne.displacementmap,{opacity:{value:1}}]),vertexShader:vt.meshnormal_vert,fragmentShader:vt.meshnormal_frag},sprite:{uniforms:On([Ne.sprite,Ne.fog]),vertexShader:vt.sprite_vert,fragmentShader:vt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:vt.background_vert,fragmentShader:vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:vt.backgroundCube_vert,fragmentShader:vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:vt.cube_vert,fragmentShader:vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:vt.equirect_vert,fragmentShader:vt.equirect_frag},distance:{uniforms:On([Ne.common,Ne.displacementmap,{referencePosition:{value:new ue},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:vt.distance_vert,fragmentShader:vt.distance_frag},shadow:{uniforms:On([Ne.lights,Ne.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:vt.shadow_vert,fragmentShader:vt.shadow_frag}};$i.physical={uniforms:On([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new St(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new St},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new St},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:vt.meshphysical_vert,fragmentShader:vt.meshphysical_frag};const Xc={r:0,b:0,g:0},bs=new Tr,KD=new cn;function ZD(n,e,t,r,o,a){const c=new Ft(0);let u=o===!0?0:1,d,h,p=null,v=0,g=null;function _(w){let b=w.isScene===!0?w.background:null;if(b&&b.isTexture){const P=w.backgroundBlurriness>0;b=e.get(b,P)}return b}function M(w){let b=!1;const P=_(w);P===null?S(c,u):P&&P.isColor&&(S(P,1),b=!0);const I=n.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,a):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,a),(n.autoClear||b)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function E(w,b){const P=_(b);P&&(P.isCubeTexture||P.mapping===Pu)?(h===void 0&&(h=new Bi(new ll(1,1,1),new Kn({name:"BackgroundCubeMaterial",uniforms:Xo($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,U,V){this.matrixWorld.copyPosition(V.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),bs.copy(b.backgroundRotation),bs.x*=-1,bs.y*=-1,bs.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(bs.y*=-1,bs.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(KD.makeRotationFromEuler(bs)),h.material.toneMapped=Pt.getTransfer(P.colorSpace)!==Bt,(p!==P||v!==P.version||g!==n.toneMapping)&&(h.material.needsUpdate=!0,p=P,v=P.version,g=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(d===void 0&&(d=new Bi(new cl(2,2),new Kn({name:"BackgroundMaterial",uniforms:Xo($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Sr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=P,d.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,d.material.toneMapped=Pt.getTransfer(P.colorSpace)!==Bt,P.matrixAutoUpdate===!0&&P.updateMatrix(),d.material.uniforms.uvTransform.value.copy(P.matrix),(p!==P||v!==P.version||g!==n.toneMapping)&&(d.material.needsUpdate=!0,p=P,v=P.version,g=n.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function S(w,b){w.getRGB(Xc,VS(n)),t.buffers.color.setClear(Xc.r,Xc.g,Xc.b,b,a)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(w,b=1){c.set(w),u=b,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(w){u=w,S(c,u)},render:M,addToRenderList:E,dispose:y}}function QD(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},o=g(null);let a=o,c=!1;function u(B,Q,J,ne,G){let H=!1;const $=v(B,ne,J,Q);a!==$&&(a=$,h(a.object)),H=_(B,ne,J,G),H&&M(B,ne,J,G),G!==null&&e.update(G,n.ELEMENT_ARRAY_BUFFER),(H||c)&&(c=!1,P(B,Q,J,ne),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function d(){return n.createVertexArray()}function h(B){return n.bindVertexArray(B)}function p(B){return n.deleteVertexArray(B)}function v(B,Q,J,ne){const G=ne.wireframe===!0;let H=r[Q.id];H===void 0&&(H={},r[Q.id]=H);const $=B.isInstancedMesh===!0?B.id:0;let X=H[$];X===void 0&&(X={},H[$]=X);let ee=X[J.id];ee===void 0&&(ee={},X[J.id]=ee);let ae=ee[G];return ae===void 0&&(ae=g(d()),ee[G]=ae),ae}function g(B){const Q=[],J=[],ne=[];for(let G=0;G<t;G++)Q[G]=0,J[G]=0,ne[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Q,enabledAttributes:J,attributeDivisors:ne,object:B,attributes:{},index:null}}function _(B,Q,J,ne){const G=a.attributes,H=Q.attributes;let $=0;const X=J.getAttributes();for(const ee in X)if(X[ee].location>=0){const O=G[ee];let Z=H[ee];if(Z===void 0&&(ee==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),ee==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),O===void 0||O.attribute!==Z||Z&&O.data!==Z.data)return!0;$++}return a.attributesNum!==$||a.index!==ne}function M(B,Q,J,ne){const G={},H=Q.attributes;let $=0;const X=J.getAttributes();for(const ee in X)if(X[ee].location>=0){let O=H[ee];O===void 0&&(ee==="instanceMatrix"&&B.instanceMatrix&&(O=B.instanceMatrix),ee==="instanceColor"&&B.instanceColor&&(O=B.instanceColor));const Z={};Z.attribute=O,O&&O.data&&(Z.data=O.data),G[ee]=Z,$++}a.attributes=G,a.attributesNum=$,a.index=ne}function E(){const B=a.newAttributes;for(let Q=0,J=B.length;Q<J;Q++)B[Q]=0}function S(B){y(B,0)}function y(B,Q){const J=a.newAttributes,ne=a.enabledAttributes,G=a.attributeDivisors;J[B]=1,ne[B]===0&&(n.enableVertexAttribArray(B),ne[B]=1),G[B]!==Q&&(n.vertexAttribDivisor(B,Q),G[B]=Q)}function w(){const B=a.newAttributes,Q=a.enabledAttributes;for(let J=0,ne=Q.length;J<ne;J++)Q[J]!==B[J]&&(n.disableVertexAttribArray(J),Q[J]=0)}function b(B,Q,J,ne,G,H,$){$===!0?n.vertexAttribIPointer(B,Q,J,G,H):n.vertexAttribPointer(B,Q,J,ne,G,H)}function P(B,Q,J,ne){E();const G=ne.attributes,H=J.getAttributes(),$=Q.defaultAttributeValues;for(const X in H){const ee=H[X];if(ee.location>=0){let ae=G[X];if(ae===void 0&&(X==="instanceMatrix"&&B.instanceMatrix&&(ae=B.instanceMatrix),X==="instanceColor"&&B.instanceColor&&(ae=B.instanceColor)),ae!==void 0){const O=ae.normalized,Z=ae.itemSize,Re=e.get(ae);if(Re===void 0)continue;const Ve=Re.buffer,He=Re.type,oe=Re.bytesPerElement,pe=He===n.INT||He===n.UNSIGNED_INT||ae.gpuType===vm;if(ae.isInterleavedBufferAttribute){const ce=ae.data,we=ce.stride,De=ae.offset;if(ce.isInstancedInterleavedBuffer){for(let nt=0;nt<ee.locationSize;nt++)y(ee.location+nt,ce.meshPerAttribute);B.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let nt=0;nt<ee.locationSize;nt++)S(ee.location+nt);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let nt=0;nt<ee.locationSize;nt++)b(ee.location+nt,Z/ee.locationSize,He,O,we*oe,(De+Z/ee.locationSize*nt)*oe,pe)}else{if(ae.isInstancedBufferAttribute){for(let ce=0;ce<ee.locationSize;ce++)y(ee.location+ce,ae.meshPerAttribute);B.isInstancedMesh!==!0&&ne._maxInstanceCount===void 0&&(ne._maxInstanceCount=ae.meshPerAttribute*ae.count)}else for(let ce=0;ce<ee.locationSize;ce++)S(ee.location+ce);n.bindBuffer(n.ARRAY_BUFFER,Ve);for(let ce=0;ce<ee.locationSize;ce++)b(ee.location+ce,Z/ee.locationSize,He,O,Z*oe,Z/ee.locationSize*ce*oe,pe)}}else if($!==void 0){const O=$[X];if(O!==void 0)switch(O.length){case 2:n.vertexAttrib2fv(ee.location,O);break;case 3:n.vertexAttrib3fv(ee.location,O);break;case 4:n.vertexAttrib4fv(ee.location,O);break;default:n.vertexAttrib1fv(ee.location,O)}}}}w()}function I(){D();for(const B in r){const Q=r[B];for(const J in Q){const ne=Q[J];for(const G in ne){const H=ne[G];for(const $ in H)p(H[$].object),delete H[$];delete ne[G]}}delete r[B]}}function U(B){if(r[B.id]===void 0)return;const Q=r[B.id];for(const J in Q){const ne=Q[J];for(const G in ne){const H=ne[G];for(const $ in H)p(H[$].object),delete H[$];delete ne[G]}}delete r[B.id]}function V(B){for(const Q in r){const J=r[Q];for(const ne in J){const G=J[ne];if(G[B.id]===void 0)continue;const H=G[B.id];for(const $ in H)p(H[$].object),delete H[$];delete G[B.id]}}}function A(B){for(const Q in r){const J=r[Q],ne=B.isInstancedMesh===!0?B.id:0,G=J[ne];if(G!==void 0){for(const H in G){const $=G[H];for(const X in $)p($[X].object),delete $[X];delete G[H]}delete J[ne],Object.keys(J).length===0&&delete r[Q]}}}function D(){K(),c=!0,a!==o&&(a=o,h(a.object))}function K(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:u,reset:D,resetDefaultState:K,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:A,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:S,disableUnusedAttributes:w}}function JD(n,e,t){let r;function o(h){r=h}function a(h,p){n.drawArrays(r,h,p),t.update(p,r,1)}function c(h,p,v){v!==0&&(n.drawArraysInstanced(r,h,p,v),t.update(p,r,v))}function u(h,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,r,1)}function d(h,p,v,g){if(v===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let M=0;M<h.length;M++)c(h[M],p[M],g[M]);else{_.multiDrawArraysInstancedWEBGL(r,h,0,p,0,g,0,v);let M=0;for(let E=0;E<v;E++)M+=p[E]*g[E];t.update(M,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function e2(n,e,t,r){let o;function a(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");o=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(V){return!(V!==Ui&&r.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(V){const A=V===Mr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==Ln&&r.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==Ii&&!A)}function d(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const p=d(h);p!==h&&(ft("WebGLRenderer:",h,"not supported, using",p,"instead."),h=p);const v=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),M=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),P=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),I=n.getParameter(n.MAX_SAMPLES),U=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:v,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:w,maxVaryings:b,maxFragmentUniforms:P,maxSamples:I,samples:U}}function t2(n){const e=this;let t=null,r=0,o=!1,a=!1;const c=new Is,u=new mt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(v,g){const _=v.length!==0||g||r!==0||o;return o=g,r=v.length,_},this.beginShadows=function(){a=!0,p(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(v,g){t=p(v,g,0)},this.setState=function(v,g,_){const M=v.clippingPlanes,E=v.clipIntersection,S=v.clipShadows,y=n.get(v);if(!o||M===null||M.length===0||a&&!S)a?p(null):h();else{const w=a?0:r,b=w*4;let P=y.clippingState||null;d.value=P,P=p(M,g,b,_);for(let I=0;I!==b;++I)P[I]=t[I];y.clippingState=P,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=w}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function p(v,g,_,M){const E=v!==null?v.length:0;let S=null;if(E!==0){if(S=d.value,M!==!0||S===null){const y=_+E*4,w=g.matrixWorldInverse;u.getNormalMatrix(w),(S===null||S.length<y)&&(S=new Float32Array(y));for(let b=0,P=_;b!==E;++b,P+=4)c.copy(v[b]).applyMatrix4(w,u),c.normal.toArray(S,P),S[P+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,S}}const ns=4,V_=[.125,.215,.35,.446,.526,.582],Os=20,n2=256,Va=new Du,z_=new Ft;let lh=null,ch=0,uh=0,fh=!1;const i2=new ue;class H_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,a={}){const{size:c=256,position:u=i2}=a;lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,o,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=j_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=W_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lh,ch,uh),this._renderer.xr.enabled=fh,e.scissorTest=!1,bo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ws||e.mapping===Ho?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lh=this._renderer.getRenderTarget(),ch=this._renderer.getActiveCubeFace(),uh=this._renderer.getActiveMipmapLevel(),fh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:Mr,format:Ui,colorSpace:ss,depthBuffer:!1},o=G_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=G_(e,t,r);const{_lodMax:a}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=r2(a)),this._blurMaterial=o2(a,e,t),this._ggxMaterial=s2(a,e,t)}return o}_compileMaterial(e){const t=new Bi(new nr,e);this._renderer.compile(t,Va)}_sceneToCubeUV(e,t,r,o,a){const d=new vi(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(z_),v.toneMapping=Qi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(o),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Bi(new ll,new FS({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,S=E.material;let y=!1;const w=e.background;w?w.isColor&&(S.color.copy(w),e.background=null,y=!0):(S.color.copy(z_),y=!0);for(let b=0;b<6;b++){const P=b%3;P===0?(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x+p[b],a.y,a.z)):P===1?(d.up.set(0,0,h[b]),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y+p[b],a.z)):(d.up.set(0,h[b],0),d.position.set(a.x,a.y,a.z),d.lookAt(a.x,a.y,a.z+p[b]));const I=this._cubeSize;bo(o,P*I,b>2?I:0,I,I),v.setRenderTarget(o),y&&v.render(E,d),v.render(e,d)}v.toneMapping=_,v.autoClear=g,e.background=w}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ws||e.mapping===Ho;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=j_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=W_());const a=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=a;const u=a.uniforms;u.envMap.value=e;const d=this._cubeSize;bo(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,Va)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let a=1;a<o;a++)this._applyGGXFilter(e,a-1,a);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,a=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),p=t/(this._lodMeshes.length-1),v=Math.sqrt(h*h-p*p),g=0+h*1.25,_=v*g,{_lodMax:M}=this,E=this._sizeLods[r],S=3*E*(r>M-ns?r-M+ns:0),y=4*(this._cubeSize-E);d.envMap.value=e.texture,d.roughness.value=_,d.mipInt.value=M-t,bo(a,S,y,3*E,2*E),o.setRenderTarget(a),o.render(u,Va),d.envMap.value=a.texture,d.roughness.value=0,d.mipInt.value=M-r,bo(e,S,y,3*E,2*E),o.setRenderTarget(e),o.render(u,Va)}_blur(e,t,r,o,a){const c=this._pingPongRenderTarget;this._halfBlur(e,c,t,r,o,"latitudinal",a),this._halfBlur(c,e,r,r,o,"longitudinal",a)}_halfBlur(e,t,r,o,a,c,u){const d=this._renderer,h=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Lt("blur direction must be either latitudinal or longitudinal!");const p=3,v=this._lodMeshes[o];v.material=h;const g=h.uniforms,_=this._sizeLods[r]-1,M=isFinite(a)?Math.PI/(2*_):2*Math.PI/(2*Os-1),E=a/M,S=isFinite(a)?1+Math.floor(p*E):Os;S>Os&&ft(`sigmaRadians, ${a}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${Os}`);const y=[];let w=0;for(let V=0;V<Os;++V){const A=V/E,D=Math.exp(-A*A/2);y.push(D),V===0?w+=D:V<S&&(w+=2*D)}for(let V=0;V<y.length;V++)y[V]=y[V]/w;g.envMap.value=e.texture,g.samples.value=S,g.weights.value=y,g.latitudinal.value=c==="latitudinal",u&&(g.poleAxis.value=u);const{_lodMax:b}=this;g.dTheta.value=M,g.mipInt.value=b-r;const P=this._sizeLods[o],I=3*P*(o>b-ns?o-b+ns:0),U=4*(this._cubeSize-P);bo(t,I,U,3*P,2*P),d.setRenderTarget(t),d.render(v,Va)}}function r2(n){const e=[],t=[],r=[];let o=n;const a=n-ns+1+V_.length;for(let c=0;c<a;c++){const u=Math.pow(2,o);e.push(u);let d=1/u;c>n-ns?d=V_[c-n+ns-1]:c===0&&(d=0),t.push(d);const h=1/(u-2),p=-h,v=1+h,g=[p,p,v,p,v,v,p,p,v,v,p,v],_=6,M=6,E=3,S=2,y=1,w=new Float32Array(E*M*_),b=new Float32Array(S*M*_),P=new Float32Array(y*M*_);for(let U=0;U<_;U++){const V=U%3*2/3-1,A=U>2?0:-1,D=[V,A,0,V+2/3,A,0,V+2/3,A+1,0,V,A,0,V+2/3,A+1,0,V,A+1,0];w.set(D,E*M*U),b.set(g,S*M*U);const K=[U,U,U,U,U,U];P.set(K,y*M*U)}const I=new nr;I.setAttribute("position",new yi(w,E)),I.setAttribute("uv",new yi(b,S)),I.setAttribute("faceIndex",new yi(P,y)),r.push(new Bi(I,null)),o>ns&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function G_(n,e,t){const r=new Vn(n,e,t);return r.texture.mapping=Pu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bo(n,e,t,r,o){n.viewport.set(e,t,r,o),n.scissor.set(e,t,r,o)}function s2(n,e,t){return new Kn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:n2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Lu(),fragmentShader:`

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

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function o2(n,e,t){const r=new Float32Array(Os),o=new ue(0,1,0);return new Kn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function W_(){return new Kn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function j_(){return new Kn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Oi,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}class GS extends Vn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new BS(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new ll(5,5,5),a=new Kn({name:"CubemapFromEquirect",uniforms:Xo(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:xn,blending:Oi});a.uniforms.tEquirect.value=t;const c=new Bi(o,a),u=t.minFilter;return t.minFilter===Vs&&(t.minFilter=Qt),new db(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const a=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,o);e.setRenderTarget(a)}}function a2(n){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?c(g):a(g)}function a(g){if(g&&g.isTexture){const _=g.mapping;if(_===Ud||_===Fd)if(e.has(g)){const M=e.get(g).texture;return u(M,g.mapping)}else{const M=g.image;if(M&&M.height>0){const E=new GS(M.height);return E.fromEquirectangularTexture(n,g),e.set(g,E),g.addEventListener("dispose",h),u(E.texture,g.mapping)}else return null}}return g}function c(g){if(g&&g.isTexture){const _=g.mapping,M=_===Ud||_===Fd,E=_===Ws||_===Ho;if(M||E){let S=t.get(g);const y=S!==void 0?S.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==y)return r===null&&(r=new H_(n)),S=M?r.fromEquirectangular(g,S):r.fromCubemap(g,S),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),S.texture;if(S!==void 0)return S.texture;{const w=g.image;return M&&w&&w.height>0||E&&w&&d(w)?(r===null&&(r=new H_(n)),S=M?r.fromEquirectangular(g):r.fromCubemap(g),S.texture.pmremVersion=g.pmremVersion,t.set(g,S),g.addEventListener("dispose",p),S.texture):null}}}return g}function u(g,_){return _===Ud?g.mapping=Ws:_===Fd&&(g.mapping=Ho),g}function d(g){let _=0;const M=6;for(let E=0;E<M;E++)g[E]!==void 0&&_++;return _===M}function h(g){const _=g.target;_.removeEventListener("dispose",h);const M=e.get(_);M!==void 0&&(e.delete(_),M.dispose())}function p(g){const _=g.target;_.removeEventListener("dispose",p);const M=t.get(_);M!==void 0&&(t.delete(_),M.dispose())}function v(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:v}}function l2(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=n.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&Eu("WebGLRenderer: "+r+" extension not supported."),o}}}function c2(n,e,t,r){const o={},a=new WeakMap;function c(v){const g=v.target;g.index!==null&&e.remove(g.index);for(const M in g.attributes)e.remove(g.attributes[M]);g.removeEventListener("dispose",c),delete o[g.id];const _=a.get(g);_&&(e.remove(_),a.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function u(v,g){return o[g.id]===!0||(g.addEventListener("dispose",c),o[g.id]=!0,t.memory.geometries++),g}function d(v){const g=v.attributes;for(const _ in g)e.update(g[_],n.ARRAY_BUFFER)}function h(v){const g=[],_=v.index,M=v.attributes.position;let E=0;if(M===void 0)return;if(_!==null){const w=_.array;E=_.version;for(let b=0,P=w.length;b<P;b+=3){const I=w[b+0],U=w[b+1],V=w[b+2];g.push(I,U,U,V,V,I)}}else{const w=M.array;E=M.version;for(let b=0,P=w.length/3-1;b<P;b+=3){const I=b+0,U=b+1,V=b+2;g.push(I,U,U,V,V,I)}}const S=new(M.count>=65535?US:IS)(g,1);S.version=E;const y=a.get(v);y&&e.remove(y),a.set(v,S)}function p(v){const g=a.get(v);if(g){const _=v.index;_!==null&&g.version<_.version&&h(v)}else h(v);return a.get(v)}return{get:u,update:d,getWireframeAttribute:p}}function u2(n,e,t){let r;function o(g){r=g}let a,c;function u(g){a=g.type,c=g.bytesPerElement}function d(g,_){n.drawElements(r,_,a,g*c),t.update(_,r,1)}function h(g,_,M){M!==0&&(n.drawElementsInstanced(r,_,a,g*c,M),t.update(_,r,M))}function p(g,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,a,g,0,M);let S=0;for(let y=0;y<M;y++)S+=_[y];t.update(S,r,1)}function v(g,_,M,E){if(M===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let y=0;y<g.length;y++)h(g[y]/c,_[y],E[y]);else{S.multiDrawElementsInstancedWEBGL(r,_,0,a,g,0,E,0,M);let y=0;for(let w=0;w<M;w++)y+=_[w]*E[w];t.update(y,r,1)}}this.setMode=o,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=p,this.renderMultiDrawInstances=v}function f2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(a,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(a/3);break;case n.LINES:t.lines+=u*(a/2);break;case n.LINE_STRIP:t.lines+=u*(a-1);break;case n.LINE_LOOP:t.lines+=u*a;break;case n.POINTS:t.points+=u*a;break;default:Lt("WebGLInfo: Unknown draw mode:",c);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function d2(n,e,t){const r=new WeakMap,o=new sn;function a(c,u,d){const h=c.morphTargetInfluences,p=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=p!==void 0?p.length:0;let g=r.get(u);if(g===void 0||g.count!==v){let D=function(){V.dispose(),r.delete(u),u.removeEventListener("dispose",D)};g!==void 0&&g.texture.dispose();const _=u.morphAttributes.position!==void 0,M=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],w=u.morphAttributes.color||[];let b=0;_===!0&&(b=1),M===!0&&(b=2),E===!0&&(b=3);let P=u.attributes.position.count*b,I=1;P>e.maxTextureSize&&(I=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const U=new Float32Array(P*I*4*v),V=new DS(U,P,I,v);V.type=Ii,V.needsUpdate=!0;const A=b*4;for(let K=0;K<v;K++){const B=S[K],Q=y[K],J=w[K],ne=P*I*4*K;for(let G=0;G<B.count;G++){const H=G*A;_===!0&&(o.fromBufferAttribute(B,G),U[ne+H+0]=o.x,U[ne+H+1]=o.y,U[ne+H+2]=o.z,U[ne+H+3]=0),M===!0&&(o.fromBufferAttribute(Q,G),U[ne+H+4]=o.x,U[ne+H+5]=o.y,U[ne+H+6]=o.z,U[ne+H+7]=0),E===!0&&(o.fromBufferAttribute(J,G),U[ne+H+8]=o.x,U[ne+H+9]=o.y,U[ne+H+10]=o.z,U[ne+H+11]=J.itemSize===4?o.w:1)}}g={count:v,texture:V,size:new St(P,I)},r.set(u,g),u.addEventListener("dispose",D)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let _=0;for(let E=0;E<h.length;E++)_+=h[E];const M=u.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",M),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}return{update:a}}function h2(n,e,t,r,o){let a=new WeakMap;function c(h){const p=o.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),r.releaseStatesOfObject(p),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:c,dispose:u}}const p2={[mS]:"LINEAR_TONE_MAPPING",[gS]:"REINHARD_TONE_MAPPING",[vS]:"CINEON_TONE_MAPPING",[_S]:"ACES_FILMIC_TONE_MAPPING",[yS]:"AGX_TONE_MAPPING",[SS]:"NEUTRAL_TONE_MAPPING",[xS]:"CUSTOM_TONE_MAPPING"};function m2(n,e,t,r,o){const a=new Vn(e,t,{type:n,depthBuffer:r,stencilBuffer:o}),c=new Vn(e,t,{type:Mr,depthBuffer:!1,stencilBuffer:!1}),u=new nr;u.setAttribute("position",new yr([-1,3,0,-1,-1,0,3,-1,0],3)),u.setAttribute("uv",new yr([0,2,0,0,2,0],2));const d=new cb({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),h=new Bi(u,d),p=new Du(-1,1,1,-1,0,1);let v=null,g=null,_=!1,M,E=null,S=[],y=!1;this.setSize=function(w,b){a.setSize(w,b),c.setSize(w,b);for(let P=0;P<S.length;P++){const I=S[P];I.setSize&&I.setSize(w,b)}},this.setEffects=function(w){S=w,y=S.length>0&&S[0].isRenderPass===!0;const b=a.width,P=a.height;for(let I=0;I<S.length;I++){const U=S[I];U.setSize&&U.setSize(b,P)}},this.begin=function(w,b){if(_||w.toneMapping===Qi&&S.length===0)return!1;if(E=b,b!==null){const P=b.width,I=b.height;(a.width!==P||a.height!==I)&&this.setSize(P,I)}return y===!1&&w.setRenderTarget(a),M=w.toneMapping,w.toneMapping=Qi,!0},this.hasRenderPass=function(){return y},this.end=function(w,b){w.toneMapping=M,_=!0;let P=a,I=c;for(let U=0;U<S.length;U++){const V=S[U];if(V.enabled!==!1&&(V.render(w,I,P,b),V.needsSwap!==!1)){const A=P;P=I,I=A}}if(v!==w.outputColorSpace||g!==w.toneMapping){v=w.outputColorSpace,g=w.toneMapping,d.defines={},Pt.getTransfer(v)===Bt&&(d.defines.SRGB_TRANSFER="");const U=p2[g];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(E),w.render(h,p),E=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),c.dispose(),u.dispose(),d.dispose()}}const WS=new yn,Ip=new jo(1,1),jS=new DS,XS=new VR,$S=new BS,X_=[],$_=[],Y_=new Float32Array(16),q_=new Float32Array(9),K_=new Float32Array(4);function Jo(n,e,t){const r=n[0];if(r<=0||r>0)return n;const o=e*t;let a=X_[o];if(a===void 0&&(a=new Float32Array(o),X_[o]=a),e!==0){r.toArray(a,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(a,u)}return a}function hn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function pn(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function Nu(n,e){let t=$_[e];t===void 0&&(t=new Int32Array(e),$_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function g2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function v2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2fv(this.addr,e),pn(t,e)}}function _2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;n.uniform3fv(this.addr,e),pn(t,e)}}function x2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4fv(this.addr,e),pn(t,e)}}function y2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;K_.set(r),n.uniformMatrix2fv(this.addr,!1,K_),pn(t,r)}}function S2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;q_.set(r),n.uniformMatrix3fv(this.addr,!1,q_),pn(t,r)}}function M2(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(hn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),pn(t,e)}else{if(hn(t,r))return;Y_.set(r),n.uniformMatrix4fv(this.addr,!1,Y_),pn(t,r)}}function E2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function T2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2iv(this.addr,e),pn(t,e)}}function w2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3iv(this.addr,e),pn(t,e)}}function A2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4iv(this.addr,e),pn(t,e)}}function C2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;n.uniform2uiv(this.addr,e),pn(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;n.uniform3uiv(this.addr,e),pn(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;n.uniform4uiv(this.addr,e),pn(t,e)}}function D2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o);let a;this.type===n.SAMPLER_2D_SHADOW?(Ip.compareFunction=t.isReversedDepthBuffer()?Tm:Em,a=Ip):a=WS,t.setTexture2D(e||a,o)}function L2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||XS,o)}function N2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||$S,o)}function I2(n,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(n.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||jS,o)}function U2(n){switch(n){case 5126:return g2;case 35664:return v2;case 35665:return _2;case 35666:return x2;case 35674:return y2;case 35675:return S2;case 35676:return M2;case 5124:case 35670:return E2;case 35667:case 35671:return T2;case 35668:case 35672:return w2;case 35669:case 35673:return A2;case 5125:return C2;case 36294:return R2;case 36295:return b2;case 36296:return P2;case 35678:case 36198:case 36298:case 36306:case 35682:return D2;case 35679:case 36299:case 36307:return L2;case 35680:case 36300:case 36308:case 36293:return N2;case 36289:case 36303:case 36311:case 36292:return I2}}function F2(n,e){n.uniform1fv(this.addr,e)}function O2(n,e){const t=Jo(e,this.size,2);n.uniform2fv(this.addr,t)}function B2(n,e){const t=Jo(e,this.size,3);n.uniform3fv(this.addr,t)}function k2(n,e){const t=Jo(e,this.size,4);n.uniform4fv(this.addr,t)}function V2(n,e){const t=Jo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function z2(n,e){const t=Jo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function H2(n,e){const t=Jo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function G2(n,e){n.uniform1iv(this.addr,e)}function W2(n,e){n.uniform2iv(this.addr,e)}function j2(n,e){n.uniform3iv(this.addr,e)}function X2(n,e){n.uniform4iv(this.addr,e)}function $2(n,e){n.uniform1uiv(this.addr,e)}function Y2(n,e){n.uniform2uiv(this.addr,e)}function q2(n,e){n.uniform3uiv(this.addr,e)}function K2(n,e){n.uniform4uiv(this.addr,e)}function Z2(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));let c;this.type===n.SAMPLER_2D_SHADOW?c=Ip:c=WS;for(let u=0;u!==o;++u)t.setTexture2D(e[u]||c,a[u])}function Q2(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTexture3D(e[c]||XS,a[c])}function J2(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTextureCube(e[c]||$S,a[c])}function e3(n,e,t){const r=this.cache,o=e.length,a=Nu(t,o);hn(r,a)||(n.uniform1iv(this.addr,a),pn(r,a));for(let c=0;c!==o;++c)t.setTexture2DArray(e[c]||jS,a[c])}function t3(n){switch(n){case 5126:return F2;case 35664:return O2;case 35665:return B2;case 35666:return k2;case 35674:return V2;case 35675:return z2;case 35676:return H2;case 5124:case 35670:return G2;case 35667:case 35671:return W2;case 35668:case 35672:return j2;case 35669:case 35673:return X2;case 5125:return $2;case 36294:return Y2;case 36295:return q2;case 36296:return K2;case 35678:case 36198:case 36298:case 36306:case 35682:return Z2;case 35679:case 36299:case 36307:return Q2;case 35680:case 36300:case 36308:case 36293:return J2;case 36289:case 36303:case 36311:case 36292:return e3}}class n3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=U2(t.type)}}class i3{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=t3(t.type)}}class r3{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let a=0,c=o.length;a!==c;++a){const u=o[a];u.setValue(e,t[u.id],r)}}}const dh=/(\w+)(\])?(\[|\.)?/g;function Z_(n,e){n.seq.push(e),n.map[e.id]=e}function s3(n,e,t){const r=n.name,o=r.length;for(dh.lastIndex=0;;){const a=dh.exec(r),c=dh.lastIndex;let u=a[1];const d=a[2]==="]",h=a[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===o){Z_(t,h===void 0?new n3(u,n,e):new i3(u,n,e));break}else{let v=t.map[u];v===void 0&&(v=new r3(u),Z_(t,v)),t=v}}}class cu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);s3(u,d,this)}const o=[],a=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(c):a.push(c);o.length>0&&(this.seq=o.concat(a))}setValue(e,t,r,o){const a=this.map[t];a!==void 0&&a.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let a=0,c=t.length;a!==c;++a){const u=t[a],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,a=e.length;o!==a;++o){const c=e[o];c.id in t&&r.push(c)}return r}}function Q_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const o3=37297;let a3=0;function l3(n,e){const t=n.split(`
`),r=[],o=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let c=o;c<a;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const J_=new mt;function c3(n){Pt._getMatrix(J_,Pt.workingColorSpace,n);const e=`mat3( ${J_.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(n)){case yu:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return ft("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function ex(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(r&&a==="")return"";const c=/ERROR: 0:(\d+)/.exec(a);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+a+`

`+l3(n.getShaderSource(e),u)}else return a}function u3(n,e){const t=c3(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const f3={[mS]:"Linear",[gS]:"Reinhard",[vS]:"Cineon",[_S]:"ACESFilmic",[yS]:"AgX",[SS]:"Neutral",[xS]:"Custom"};function d3(n,e){const t=f3[e];return t===void 0?(ft("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const $c=new ue;function h3(){Pt.getLuminanceCoefficients($c);const n=$c.x.toFixed(4),e=$c.y.toFixed(4),t=$c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function p3(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function m3(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function g3(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const a=n.getActiveAttrib(e,o),c=a.name;let u=1;a.type===n.FLOAT_MAT2&&(u=2),a.type===n.FLOAT_MAT3&&(u=3),a.type===n.FLOAT_MAT4&&(u=4),t[c]={type:a.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function ja(n){return n!==""}function tx(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function nx(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Up(n){return n.replace(v3,x3)}const _3=new Map;function x3(n,e){let t=vt[e];if(t===void 0){const r=_3.get(e);if(r!==void 0)t=vt[r],ft('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Up(t)}const y3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ix(n){return n.replace(y3,S3)}function S3(n,e,t,r){let o="";for(let a=parseInt(e);a<parseInt(t);a++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return o}function rx(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const M3={[ru]:"SHADOWMAP_TYPE_PCF",[Wa]:"SHADOWMAP_TYPE_VSM"};function E3(n){return M3[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const T3={[Ws]:"ENVMAP_TYPE_CUBE",[Ho]:"ENVMAP_TYPE_CUBE",[Pu]:"ENVMAP_TYPE_CUBE_UV"};function w3(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":T3[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const A3={[Ho]:"ENVMAP_MODE_REFRACTION"};function C3(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":A3[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const R3={[pS]:"ENVMAP_BLENDING_MULTIPLY",[xR]:"ENVMAP_BLENDING_MIX",[yR]:"ENVMAP_BLENDING_ADD"};function b3(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":R3[n.combine]||"ENVMAP_BLENDING_NONE"}function P3(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function D3(n,e,t,r){const o=n.getContext(),a=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=E3(t),h=w3(t),p=C3(t),v=b3(t),g=P3(t),_=p3(t),M=m3(a),E=o.createProgram();let S,y,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(ja).join(`
`),y.length>0&&(y+=`
`)):(S=[rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),y=[rx(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qi?"#define TONE_MAPPING":"",t.toneMapping!==Qi?vt.tonemapping_pars_fragment:"",t.toneMapping!==Qi?d3("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",vt.colorspace_pars_fragment,u3("linearToOutputTexel",t.outputColorSpace),h3(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ja).join(`
`)),c=Up(c),c=tx(c,t),c=nx(c,t),u=Up(u),u=tx(u,t),u=nx(u,t),c=ix(c),u=ix(u),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,S=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===Dp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const b=w+S+c,P=w+y+u,I=Q_(o,o.VERTEX_SHADER,b),U=Q_(o,o.FRAGMENT_SHADER,P);o.attachShader(E,I),o.attachShader(E,U),t.index0AttributeName!==void 0?o.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(E,0,"position"),o.linkProgram(E);function V(B){if(n.debug.checkShaderErrors){const Q=o.getProgramInfoLog(E)||"",J=o.getShaderInfoLog(I)||"",ne=o.getShaderInfoLog(U)||"",G=Q.trim(),H=J.trim(),$=ne.trim();let X=!0,ee=!0;if(o.getProgramParameter(E,o.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(o,E,I,U);else{const ae=ex(o,I,"vertex"),O=ex(o,U,"fragment");Lt("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(E,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+ae+`
`+O)}else G!==""?ft("WebGLProgram: Program Info Log:",G):(H===""||$==="")&&(ee=!1);ee&&(B.diagnostics={runnable:X,programLog:G,vertexShader:{log:H,prefix:S},fragmentShader:{log:$,prefix:y}})}o.deleteShader(I),o.deleteShader(U),A=new cu(o,E),D=g3(o,E)}let A;this.getUniforms=function(){return A===void 0&&V(this),A};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let K=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return K===!1&&(K=o.getProgramParameter(E,o3)),K},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a3++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=I,this.fragmentShader=U,this}let L3=0;class N3{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),a=this._getShaderStage(r),c=this._getShaderCacheForMaterial(e);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(a)===!1&&(c.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new I3(e),t.set(e,r)),r}}class I3{constructor(e){this.id=L3++,this.code=e,this.usedTimes=0}}function U3(n,e,t,r,o,a){const c=new LS,u=new N3,d=new Set,h=[],p=new Map,v=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(A){return d.add(A),A===0?"uv":`uv${A}`}function E(A,D,K,B,Q){const J=B.fog,ne=Q.geometry,G=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,H=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,$=e.get(A.envMap||G,H),X=$&&$.mapping===Pu?$.image.height:null,ee=_[A.type];A.precision!==null&&(g=r.getMaxPrecision(A.precision),g!==A.precision&&ft("WebGLProgram.getParameters:",A.precision,"not supported, using",g,"instead."));const ae=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,O=ae!==void 0?ae.length:0;let Z=0;ne.morphAttributes.position!==void 0&&(Z=1),ne.morphAttributes.normal!==void 0&&(Z=2),ne.morphAttributes.color!==void 0&&(Z=3);let Re,Ve,He,oe;if(ee){const Rt=$i[ee];Re=Rt.vertexShader,Ve=Rt.fragmentShader}else Re=A.vertexShader,Ve=A.fragmentShader,u.update(A),He=u.getVertexShaderID(A),oe=u.getFragmentShaderID(A);const pe=n.getRenderTarget(),ce=n.state.buffers.depth.getReversed(),we=Q.isInstancedMesh===!0,De=Q.isBatchedMesh===!0,nt=!!A.map,Vt=!!A.matcap,dt=!!$,_t=!!A.aoMap,At=!!A.lightMap,Oe=!!A.bumpMap,ut=!!A.normalMap,k=!!A.displacementMap,xt=!!A.emissiveMap,gt=!!A.metalnessMap,Et=!!A.roughnessMap,Ye=A.anisotropy>0,L=A.clearcoat>0,T=A.dispersion>0,Y=A.iridescence>0,me=A.sheen>0,ve=A.transmission>0,de=Ye&&!!A.anisotropyMap,Ge=L&&!!A.clearcoatMap,Ce=L&&!!A.clearcoatNormalMap,Qe=L&&!!A.clearcoatRoughnessMap,ot=Y&&!!A.iridescenceMap,Se=Y&&!!A.iridescenceThicknessMap,Ae=me&&!!A.sheenColorMap,qe=me&&!!A.sheenRoughnessMap,We=!!A.specularMap,Ie=!!A.specularColorMap,ht=!!A.specularIntensityMap,W=ve&&!!A.transmissionMap,be=ve&&!!A.thicknessMap,Ee=!!A.gradientMap,Ue=!!A.alphaMap,Me=A.alphaTest>0,he=!!A.alphaHash,je=!!A.extensions;let at=Qi;A.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(at=n.toneMapping);const Ot={shaderID:ee,shaderType:A.type,shaderName:A.name,vertexShader:Re,fragmentShader:Ve,defines:A.defines,customVertexShaderID:He,customFragmentShaderID:oe,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:g,batching:De,batchingColor:De&&Q._colorsTexture!==null,instancing:we,instancingColor:we&&Q.instanceColor!==null,instancingMorph:we&&Q.morphTexture!==null,outputColorSpace:pe===null?n.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:ss,alphaToCoverage:!!A.alphaToCoverage,map:nt,matcap:Vt,envMap:dt,envMapMode:dt&&$.mapping,envMapCubeUVHeight:X,aoMap:_t,lightMap:At,bumpMap:Oe,normalMap:ut,displacementMap:k,emissiveMap:xt,normalMapObjectSpace:ut&&A.normalMapType===ER,normalMapTangentSpace:ut&&A.normalMapType===MR,metalnessMap:gt,roughnessMap:Et,anisotropy:Ye,anisotropyMap:de,clearcoat:L,clearcoatMap:Ge,clearcoatNormalMap:Ce,clearcoatRoughnessMap:Qe,dispersion:T,iridescence:Y,iridescenceMap:ot,iridescenceThicknessMap:Se,sheen:me,sheenColorMap:Ae,sheenRoughnessMap:qe,specularMap:We,specularColorMap:Ie,specularIntensityMap:ht,transmission:ve,transmissionMap:W,thicknessMap:be,gradientMap:Ee,opaque:A.transparent===!1&&A.blending===Fo&&A.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Me,alphaHash:he,combine:A.combine,mapUv:nt&&M(A.map.channel),aoMapUv:_t&&M(A.aoMap.channel),lightMapUv:At&&M(A.lightMap.channel),bumpMapUv:Oe&&M(A.bumpMap.channel),normalMapUv:ut&&M(A.normalMap.channel),displacementMapUv:k&&M(A.displacementMap.channel),emissiveMapUv:xt&&M(A.emissiveMap.channel),metalnessMapUv:gt&&M(A.metalnessMap.channel),roughnessMapUv:Et&&M(A.roughnessMap.channel),anisotropyMapUv:de&&M(A.anisotropyMap.channel),clearcoatMapUv:Ge&&M(A.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&M(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Qe&&M(A.clearcoatRoughnessMap.channel),iridescenceMapUv:ot&&M(A.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&M(A.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&M(A.sheenColorMap.channel),sheenRoughnessMapUv:qe&&M(A.sheenRoughnessMap.channel),specularMapUv:We&&M(A.specularMap.channel),specularColorMapUv:Ie&&M(A.specularColorMap.channel),specularIntensityMapUv:ht&&M(A.specularIntensityMap.channel),transmissionMapUv:W&&M(A.transmissionMap.channel),thicknessMapUv:be&&M(A.thicknessMap.channel),alphaMapUv:Ue&&M(A.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(ut||Ye),vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!ne.attributes.uv&&(nt||Ue),fog:!!J,useFog:A.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||ne.attributes.normal===void 0&&ut===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:ce,skinning:Q.isSkinnedMesh===!0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:Z,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&K.length>0,shadowMapType:n.shadowMap.type,toneMapping:at,decodeVideoTexture:nt&&A.map.isVideoTexture===!0&&Pt.getTransfer(A.map.colorSpace)===Bt,decodeVideoTextureEmissive:xt&&A.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(A.emissiveMap.colorSpace)===Bt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===ri,flipSided:A.side===xn,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:je&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&A.extensions.multiDraw===!0||De)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ot.vertexUv1s=d.has(1),Ot.vertexUv2s=d.has(2),Ot.vertexUv3s=d.has(3),d.clear(),Ot}function S(A){const D=[];if(A.shaderID?D.push(A.shaderID):(D.push(A.customVertexShaderID),D.push(A.customFragmentShaderID)),A.defines!==void 0)for(const K in A.defines)D.push(K),D.push(A.defines[K]);return A.isRawShaderMaterial===!1&&(y(D,A),w(D,A),D.push(n.outputColorSpace)),D.push(A.customProgramCacheKey),D.join()}function y(A,D){A.push(D.precision),A.push(D.outputColorSpace),A.push(D.envMapMode),A.push(D.envMapCubeUVHeight),A.push(D.mapUv),A.push(D.alphaMapUv),A.push(D.lightMapUv),A.push(D.aoMapUv),A.push(D.bumpMapUv),A.push(D.normalMapUv),A.push(D.displacementMapUv),A.push(D.emissiveMapUv),A.push(D.metalnessMapUv),A.push(D.roughnessMapUv),A.push(D.anisotropyMapUv),A.push(D.clearcoatMapUv),A.push(D.clearcoatNormalMapUv),A.push(D.clearcoatRoughnessMapUv),A.push(D.iridescenceMapUv),A.push(D.iridescenceThicknessMapUv),A.push(D.sheenColorMapUv),A.push(D.sheenRoughnessMapUv),A.push(D.specularMapUv),A.push(D.specularColorMapUv),A.push(D.specularIntensityMapUv),A.push(D.transmissionMapUv),A.push(D.thicknessMapUv),A.push(D.combine),A.push(D.fogExp2),A.push(D.sizeAttenuation),A.push(D.morphTargetsCount),A.push(D.morphAttributeCount),A.push(D.numDirLights),A.push(D.numPointLights),A.push(D.numSpotLights),A.push(D.numSpotLightMaps),A.push(D.numHemiLights),A.push(D.numRectAreaLights),A.push(D.numDirLightShadows),A.push(D.numPointLightShadows),A.push(D.numSpotLightShadows),A.push(D.numSpotLightShadowsWithMaps),A.push(D.numLightProbes),A.push(D.shadowMapType),A.push(D.toneMapping),A.push(D.numClippingPlanes),A.push(D.numClipIntersection),A.push(D.depthPacking)}function w(A,D){c.disableAll(),D.instancing&&c.enable(0),D.instancingColor&&c.enable(1),D.instancingMorph&&c.enable(2),D.matcap&&c.enable(3),D.envMap&&c.enable(4),D.normalMapObjectSpace&&c.enable(5),D.normalMapTangentSpace&&c.enable(6),D.clearcoat&&c.enable(7),D.iridescence&&c.enable(8),D.alphaTest&&c.enable(9),D.vertexColors&&c.enable(10),D.vertexAlphas&&c.enable(11),D.vertexUv1s&&c.enable(12),D.vertexUv2s&&c.enable(13),D.vertexUv3s&&c.enable(14),D.vertexTangents&&c.enable(15),D.anisotropy&&c.enable(16),D.alphaHash&&c.enable(17),D.batching&&c.enable(18),D.dispersion&&c.enable(19),D.batchingColor&&c.enable(20),D.gradientMap&&c.enable(21),A.push(c.mask),c.disableAll(),D.fog&&c.enable(0),D.useFog&&c.enable(1),D.flatShading&&c.enable(2),D.logarithmicDepthBuffer&&c.enable(3),D.reversedDepthBuffer&&c.enable(4),D.skinning&&c.enable(5),D.morphTargets&&c.enable(6),D.morphNormals&&c.enable(7),D.morphColors&&c.enable(8),D.premultipliedAlpha&&c.enable(9),D.shadowMapEnabled&&c.enable(10),D.doubleSided&&c.enable(11),D.flipSided&&c.enable(12),D.useDepthPacking&&c.enable(13),D.dithering&&c.enable(14),D.transmission&&c.enable(15),D.sheen&&c.enable(16),D.opaque&&c.enable(17),D.pointsUvs&&c.enable(18),D.decodeVideoTexture&&c.enable(19),D.decodeVideoTextureEmissive&&c.enable(20),D.alphaToCoverage&&c.enable(21),A.push(c.mask)}function b(A){const D=_[A.type];let K;if(D){const B=$i[D];K=ob.clone(B.uniforms)}else K=A.uniforms;return K}function P(A,D){let K=p.get(D);return K!==void 0?++K.usedTimes:(K=new D3(n,D,A,o),h.push(K),p.set(D,K)),K}function I(A){if(--A.usedTimes===0){const D=h.indexOf(A);h[D]=h[h.length-1],h.pop(),p.delete(A.cacheKey),A.destroy()}}function U(A){u.remove(A)}function V(){u.dispose()}return{getParameters:E,getProgramCacheKey:S,getUniforms:b,acquireProgram:P,releaseProgram:I,releaseShaderCache:U,programs:h,dispose:V}}function F3(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function o(c,u,d){n.get(c)[u]=d}function a(){n=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:a}}function O3(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function sx(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function ox(){const n=[];let e=0;const t=[],r=[],o=[];function a(){e=0,t.length=0,r.length=0,o.length=0}function c(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function u(g,_,M,E,S,y){let w=n[e];return w===void 0?(w={id:g.id,object:g,geometry:_,material:M,materialVariant:c(g),groupOrder:E,renderOrder:g.renderOrder,z:S,group:y},n[e]=w):(w.id=g.id,w.object=g,w.geometry=_,w.material=M,w.materialVariant=c(g),w.groupOrder=E,w.renderOrder=g.renderOrder,w.z=S,w.group=y),e++,w}function d(g,_,M,E,S,y){const w=u(g,_,M,E,S,y);M.transmission>0?r.push(w):M.transparent===!0?o.push(w):t.push(w)}function h(g,_,M,E,S,y){const w=u(g,_,M,E,S,y);M.transmission>0?r.unshift(w):M.transparent===!0?o.unshift(w):t.unshift(w)}function p(g,_){t.length>1&&t.sort(g||O3),r.length>1&&r.sort(_||sx),o.length>1&&o.sort(_||sx)}function v(){for(let g=e,_=n.length;g<_;g++){const M=n[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:r,transparent:o,init:a,push:d,unshift:h,finish:v,sort:p}}function B3(){let n=new WeakMap;function e(r,o){const a=n.get(r);let c;return a===void 0?(c=new ox,n.set(r,[c])):o>=a.length?(c=new ox,a.push(c)):c=a[o],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function k3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ue,color:new Ft};break;case"SpotLight":t={position:new ue,direction:new ue,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ue,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ue,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":t={color:new Ft,position:new ue,halfWidth:new ue,halfHeight:new ue};break}return n[e.id]=t,t}}}function V3(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new St,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let z3=0;function H3(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function G3(n){const e=new k3,t=V3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new ue);const o=new ue,a=new cn,c=new cn;function u(h){let p=0,v=0,g=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let _=0,M=0,E=0,S=0,y=0,w=0,b=0,P=0,I=0,U=0,V=0;h.sort(H3);for(let D=0,K=h.length;D<K;D++){const B=h[D],Q=B.color,J=B.intensity,ne=B.distance;let G=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===Wo?G=B.shadow.map.texture:G=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)p+=Q.r*J,v+=Q.g*J,g+=Q.b*J;else if(B.isLightProbe){for(let H=0;H<9;H++)r.probe[H].addScaledVector(B.sh.coefficients[H],J);V++}else if(B.isDirectionalLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const $=B.shadow,X=t.get(B);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.directionalShadow[_]=X,r.directionalShadowMap[_]=G,r.directionalShadowMatrix[_]=B.shadow.matrix,w++}r.directional[_]=H,_++}else if(B.isSpotLight){const H=e.get(B);H.position.setFromMatrixPosition(B.matrixWorld),H.color.copy(Q).multiplyScalar(J),H.distance=ne,H.coneCos=Math.cos(B.angle),H.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),H.decay=B.decay,r.spot[E]=H;const $=B.shadow;if(B.map&&(r.spotLightMap[I]=B.map,I++,$.updateMatrices(B),B.castShadow&&U++),r.spotLightMatrix[E]=$.matrix,B.castShadow){const X=t.get(B);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.spotShadow[E]=X,r.spotShadowMap[E]=G,P++}E++}else if(B.isRectAreaLight){const H=e.get(B);H.color.copy(Q).multiplyScalar(J),H.halfWidth.set(B.width*.5,0,0),H.halfHeight.set(0,B.height*.5,0),r.rectArea[S]=H,S++}else if(B.isPointLight){const H=e.get(B);if(H.color.copy(B.color).multiplyScalar(B.intensity),H.distance=B.distance,H.decay=B.decay,B.castShadow){const $=B.shadow,X=t.get(B);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,r.pointShadow[M]=X,r.pointShadowMap[M]=G,r.pointShadowMatrix[M]=B.shadow.matrix,b++}r.point[M]=H,M++}else if(B.isHemisphereLight){const H=e.get(B);H.skyColor.copy(B.color).multiplyScalar(J),H.groundColor.copy(B.groundColor).multiplyScalar(J),r.hemi[y]=H,y++}}S>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ne.LTC_FLOAT_1,r.rectAreaLTC2=Ne.LTC_FLOAT_2):(r.rectAreaLTC1=Ne.LTC_HALF_1,r.rectAreaLTC2=Ne.LTC_HALF_2)),r.ambient[0]=p,r.ambient[1]=v,r.ambient[2]=g;const A=r.hash;(A.directionalLength!==_||A.pointLength!==M||A.spotLength!==E||A.rectAreaLength!==S||A.hemiLength!==y||A.numDirectionalShadows!==w||A.numPointShadows!==b||A.numSpotShadows!==P||A.numSpotMaps!==I||A.numLightProbes!==V)&&(r.directional.length=_,r.spot.length=E,r.rectArea.length=S,r.point.length=M,r.hemi.length=y,r.directionalShadow.length=w,r.directionalShadowMap.length=w,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=P,r.spotShadowMap.length=P,r.directionalShadowMatrix.length=w,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=P+I-U,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=V,A.directionalLength=_,A.pointLength=M,A.spotLength=E,A.rectAreaLength=S,A.hemiLength=y,A.numDirectionalShadows=w,A.numPointShadows=b,A.numSpotShadows=P,A.numSpotMaps=I,A.numLightProbes=V,r.version=z3++)}function d(h,p){let v=0,g=0,_=0,M=0,E=0;const S=p.matrixWorldInverse;for(let y=0,w=h.length;y<w;y++){const b=h[y];if(b.isDirectionalLight){const P=r.directional[v];P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),v++}else if(b.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(S),P.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),P.direction.sub(o),P.direction.transformDirection(S),_++}else if(b.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(S),c.identity(),a.copy(b.matrixWorld),a.premultiply(S),c.extractRotation(a),P.halfWidth.set(b.width*.5,0,0),P.halfHeight.set(0,b.height*.5,0),P.halfWidth.applyMatrix4(c),P.halfHeight.applyMatrix4(c),M++}else if(b.isPointLight){const P=r.point[g];P.position.setFromMatrixPosition(b.matrixWorld),P.position.applyMatrix4(S),g++}else if(b.isHemisphereLight){const P=r.hemi[E];P.direction.setFromMatrixPosition(b.matrixWorld),P.direction.transformDirection(S),E++}}}return{setup:u,setupView:d,state:r}}function ax(n){const e=new G3(n),t=[],r=[];function o(p){h.camera=p,t.length=0,r.length=0}function a(p){t.push(p)}function c(p){r.push(p)}function u(){e.setup(t)}function d(p){e.setupView(t,p)}const h={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:h,setupLights:u,setupLightsView:d,pushLight:a,pushShadow:c}}function W3(n){let e=new WeakMap;function t(o,a=0){const c=e.get(o);let u;return c===void 0?(u=new ax(n),e.set(o,[u])):a>=c.length?(u=new ax(n),c.push(u)):u=c[a],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const j3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X3=`uniform sampler2D shadow_pass;
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
}`,$3=[new ue(1,0,0),new ue(-1,0,0),new ue(0,1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1)],Y3=[new ue(0,-1,0),new ue(0,-1,0),new ue(0,0,1),new ue(0,0,-1),new ue(0,-1,0),new ue(0,-1,0)],lx=new cn,za=new ue,hh=new ue;function q3(n,e,t){let r=new OS;const o=new St,a=new St,c=new sn,u=new ub,d=new fb,h={},p=t.maxTextureSize,v={[Sr]:xn,[xn]:Sr,[ri]:ri},g=new Kn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new St},radius:{value:4}},vertexShader:j3,fragmentShader:X3}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const M=new nr;M.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new Bi(M,g),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ru;let y=this.type;this.render=function(U,V,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||U.length===0)return;this.type===eR&&(ft("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ru);const D=n.getRenderTarget(),K=n.getActiveCubeFace(),B=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(Oi),Q.buffers.depth.getReversed()===!0?Q.buffers.color.setClear(0,0,0,0):Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const J=y!==this.type;J&&V.traverse(function(ne){ne.material&&(Array.isArray(ne.material)?ne.material.forEach(G=>G.needsUpdate=!0):ne.material.needsUpdate=!0)});for(let ne=0,G=U.length;ne<G;ne++){const H=U[ne],$=H.shadow;if($===void 0){ft("WebGLShadowMap:",H,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const X=$.getFrameExtents();o.multiply(X),a.copy($.mapSize),(o.x>p||o.y>p)&&(o.x>p&&(a.x=Math.floor(p/X.x),o.x=a.x*X.x,$.mapSize.x=a.x),o.y>p&&(a.y=Math.floor(p/X.y),o.y=a.y*X.y,$.mapSize.y=a.y));const ee=n.state.buffers.depth.getReversed();if($.camera._reversedDepth=ee,$.map===null||J===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===Wa){if(H.isPointLight){ft("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Vn(o.x,o.y,{format:Wo,type:Mr,minFilter:Qt,magFilter:Qt,generateMipmaps:!1}),$.map.texture.name=H.name+".shadowMap",$.map.depthTexture=new jo(o.x,o.y,Ii),$.map.depthTexture.name=H.name+".shadowMapDepth",$.map.depthTexture.format=Er,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn}else H.isPointLight?($.map=new GS(o.x),$.map.depthTexture=new rb(o.x,er)):($.map=new Vn(o.x,o.y),$.map.depthTexture=new jo(o.x,o.y,er)),$.map.depthTexture.name=H.name+".shadowMap",$.map.depthTexture.format=Er,this.type===ru?($.map.depthTexture.compareFunction=ee?Tm:Em,$.map.depthTexture.minFilter=Qt,$.map.depthTexture.magFilter=Qt):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=wn,$.map.depthTexture.magFilter=wn);$.camera.updateProjectionMatrix()}const ae=$.map.isWebGLCubeRenderTarget?6:1;for(let O=0;O<ae;O++){if($.map.isWebGLCubeRenderTarget)n.setRenderTarget($.map,O),n.clear();else{O===0&&(n.setRenderTarget($.map),n.clear());const Z=$.getViewport(O);c.set(a.x*Z.x,a.y*Z.y,a.x*Z.z,a.y*Z.w),Q.viewport(c)}if(H.isPointLight){const Z=$.camera,Re=$.matrix,Ve=H.distance||Z.far;Ve!==Z.far&&(Z.far=Ve,Z.updateProjectionMatrix()),za.setFromMatrixPosition(H.matrixWorld),Z.position.copy(za),hh.copy(Z.position),hh.add($3[O]),Z.up.copy(Y3[O]),Z.lookAt(hh),Z.updateMatrixWorld(),Re.makeTranslation(-za.x,-za.y,-za.z),lx.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),$._frustum.setFromProjectionMatrix(lx,Z.coordinateSystem,Z.reversedDepth)}else $.updateMatrices(H);r=$.getFrustum(),P(V,A,$.camera,H,this.type)}$.isPointLightShadow!==!0&&this.type===Wa&&w($,A),$.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(D,K,B)};function w(U,V){const A=e.update(E);g.defines.VSM_SAMPLES!==U.blurSamples&&(g.defines.VSM_SAMPLES=U.blurSamples,_.defines.VSM_SAMPLES=U.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),U.mapPass===null&&(U.mapPass=new Vn(o.x,o.y,{format:Wo,type:Mr})),g.uniforms.shadow_pass.value=U.map.depthTexture,g.uniforms.resolution.value=U.mapSize,g.uniforms.radius.value=U.radius,n.setRenderTarget(U.mapPass),n.clear(),n.renderBufferDirect(V,null,A,g,E,null),_.uniforms.shadow_pass.value=U.mapPass.texture,_.uniforms.resolution.value=U.mapSize,_.uniforms.radius.value=U.radius,n.setRenderTarget(U.map),n.clear(),n.renderBufferDirect(V,null,A,_,E,null)}function b(U,V,A,D){let K=null;const B=A.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(B!==void 0)K=B;else if(K=A.isPointLight===!0?d:u,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const Q=K.uuid,J=V.uuid;let ne=h[Q];ne===void 0&&(ne={},h[Q]=ne);let G=ne[J];G===void 0&&(G=K.clone(),ne[J]=G,V.addEventListener("dispose",I)),K=G}if(K.visible=V.visible,K.wireframe=V.wireframe,D===Wa?K.side=V.shadowSide!==null?V.shadowSide:V.side:K.side=V.shadowSide!==null?V.shadowSide:v[V.side],K.alphaMap=V.alphaMap,K.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,K.map=V.map,K.clipShadows=V.clipShadows,K.clippingPlanes=V.clippingPlanes,K.clipIntersection=V.clipIntersection,K.displacementMap=V.displacementMap,K.displacementScale=V.displacementScale,K.displacementBias=V.displacementBias,K.wireframeLinewidth=V.wireframeLinewidth,K.linewidth=V.linewidth,A.isPointLight===!0&&K.isMeshDistanceMaterial===!0){const Q=n.properties.get(K);Q.light=A}return K}function P(U,V,A,D,K){if(U.visible===!1)return;if(U.layers.test(V.layers)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&K===Wa)&&(!U.frustumCulled||r.intersectsObject(U))){U.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,U.matrixWorld);const J=e.update(U),ne=U.material;if(Array.isArray(ne)){const G=J.groups;for(let H=0,$=G.length;H<$;H++){const X=G[H],ee=ne[X.materialIndex];if(ee&&ee.visible){const ae=b(U,ee,D,K);U.onBeforeShadow(n,U,V,A,J,ae,X),n.renderBufferDirect(A,null,J,ae,U,X),U.onAfterShadow(n,U,V,A,J,ae,X)}}}else if(ne.visible){const G=b(U,ne,D,K);U.onBeforeShadow(n,U,V,A,J,G,null),n.renderBufferDirect(A,null,J,G,U,null),U.onAfterShadow(n,U,V,A,J,G,null)}}const Q=U.children;for(let J=0,ne=Q.length;J<ne;J++)P(Q[J],V,A,D,K)}function I(U){U.target.removeEventListener("dispose",I);for(const A in h){const D=h[A],K=U.target.uuid;K in D&&(D[K].dispose(),delete D[K])}}}function K3(n,e){function t(){let W=!1;const be=new sn;let Ee=null;const Ue=new sn(0,0,0,0);return{setMask:function(Me){Ee!==Me&&!W&&(n.colorMask(Me,Me,Me,Me),Ee=Me)},setLocked:function(Me){W=Me},setClear:function(Me,he,je,at,Ot){Ot===!0&&(Me*=at,he*=at,je*=at),be.set(Me,he,je,at),Ue.equals(be)===!1&&(n.clearColor(Me,he,je,at),Ue.copy(be))},reset:function(){W=!1,Ee=null,Ue.set(-1,0,0,0)}}}function r(){let W=!1,be=!1,Ee=null,Ue=null,Me=null;return{setReversed:function(he){if(be!==he){const je=e.get("EXT_clip_control");he?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),be=he;const at=Me;Me=null,this.setClear(at)}},getReversed:function(){return be},setTest:function(he){he?pe(n.DEPTH_TEST):ce(n.DEPTH_TEST)},setMask:function(he){Ee!==he&&!W&&(n.depthMask(he),Ee=he)},setFunc:function(he){if(be&&(he=NR[he]),Ue!==he){switch(he){case jh:n.depthFunc(n.NEVER);break;case xu:n.depthFunc(n.ALWAYS);break;case Xh:n.depthFunc(n.LESS);break;case zo:n.depthFunc(n.LEQUAL);break;case $h:n.depthFunc(n.EQUAL);break;case Yh:n.depthFunc(n.GEQUAL);break;case qh:n.depthFunc(n.GREATER);break;case Kh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ue=he}},setLocked:function(he){W=he},setClear:function(he){Me!==he&&(Me=he,be&&(he=1-he),n.clearDepth(he))},reset:function(){W=!1,Ee=null,Ue=null,Me=null,be=!1}}}function o(){let W=!1,be=null,Ee=null,Ue=null,Me=null,he=null,je=null,at=null,Ot=null;return{setTest:function(Rt){W||(Rt?pe(n.STENCIL_TEST):ce(n.STENCIL_TEST))},setMask:function(Rt){be!==Rt&&!W&&(n.stencilMask(Rt),be=Rt)},setFunc:function(Rt,ai,Nn){(Ee!==Rt||Ue!==ai||Me!==Nn)&&(n.stencilFunc(Rt,ai,Nn),Ee=Rt,Ue=ai,Me=Nn)},setOp:function(Rt,ai,Nn){(he!==Rt||je!==ai||at!==Nn)&&(n.stencilOp(Rt,ai,Nn),he=Rt,je=ai,at=Nn)},setLocked:function(Rt){W=Rt},setClear:function(Rt){Ot!==Rt&&(n.clearStencil(Rt),Ot=Rt)},reset:function(){W=!1,be=null,Ee=null,Ue=null,Me=null,he=null,je=null,at=null,Ot=null}}}const a=new t,c=new r,u=new o,d=new WeakMap,h=new WeakMap;let p={},v={},g=new WeakMap,_=[],M=null,E=!1,S=null,y=null,w=null,b=null,P=null,I=null,U=null,V=new Ft(0,0,0),A=0,D=!1,K=null,B=null,Q=null,J=null,ne=null;const G=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,$=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=$>=1):X.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=$>=2);let ee=null,ae={};const O=n.getParameter(n.SCISSOR_BOX),Z=n.getParameter(n.VIEWPORT),Re=new sn().fromArray(O),Ve=new sn().fromArray(Z);function He(W,be,Ee,Ue){const Me=new Uint8Array(4),he=n.createTexture();n.bindTexture(W,he),n.texParameteri(W,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(W,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Ee;je++)W===n.TEXTURE_3D||W===n.TEXTURE_2D_ARRAY?n.texImage3D(be,0,n.RGBA,1,1,Ue,0,n.RGBA,n.UNSIGNED_BYTE,Me):n.texImage2D(be+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Me);return he}const oe={};oe[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),oe[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),oe[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),c.setClear(1),u.setClear(0),pe(n.DEPTH_TEST),c.setFunc(zo),Oe(!1),ut(m_),pe(n.CULL_FACE),_t(Oi);function pe(W){p[W]!==!0&&(n.enable(W),p[W]=!0)}function ce(W){p[W]!==!1&&(n.disable(W),p[W]=!1)}function we(W,be){return v[W]!==be?(n.bindFramebuffer(W,be),v[W]=be,W===n.DRAW_FRAMEBUFFER&&(v[n.FRAMEBUFFER]=be),W===n.FRAMEBUFFER&&(v[n.DRAW_FRAMEBUFFER]=be),!0):!1}function De(W,be){let Ee=_,Ue=!1;if(W){Ee=g.get(be),Ee===void 0&&(Ee=[],g.set(be,Ee));const Me=W.textures;if(Ee.length!==Me.length||Ee[0]!==n.COLOR_ATTACHMENT0){for(let he=0,je=Me.length;he<je;he++)Ee[he]=n.COLOR_ATTACHMENT0+he;Ee.length=Me.length,Ue=!0}}else Ee[0]!==n.BACK&&(Ee[0]=n.BACK,Ue=!0);Ue&&n.drawBuffers(Ee)}function nt(W){return M!==W?(n.useProgram(W),M=W,!0):!1}const Vt={[Fs]:n.FUNC_ADD,[nR]:n.FUNC_SUBTRACT,[iR]:n.FUNC_REVERSE_SUBTRACT};Vt[rR]=n.MIN,Vt[sR]=n.MAX;const dt={[oR]:n.ZERO,[aR]:n.ONE,[lR]:n.SRC_COLOR,[Gh]:n.SRC_ALPHA,[pR]:n.SRC_ALPHA_SATURATE,[dR]:n.DST_COLOR,[uR]:n.DST_ALPHA,[cR]:n.ONE_MINUS_SRC_COLOR,[Wh]:n.ONE_MINUS_SRC_ALPHA,[hR]:n.ONE_MINUS_DST_COLOR,[fR]:n.ONE_MINUS_DST_ALPHA,[mR]:n.CONSTANT_COLOR,[gR]:n.ONE_MINUS_CONSTANT_COLOR,[vR]:n.CONSTANT_ALPHA,[_R]:n.ONE_MINUS_CONSTANT_ALPHA};function _t(W,be,Ee,Ue,Me,he,je,at,Ot,Rt){if(W===Oi){E===!0&&(ce(n.BLEND),E=!1);return}if(E===!1&&(pe(n.BLEND),E=!0),W!==tR){if(W!==S||Rt!==D){if((y!==Fs||P!==Fs)&&(n.blendEquation(n.FUNC_ADD),y=Fs,P=Fs),Rt)switch(W){case Fo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g_:n.blendFunc(n.ONE,n.ONE);break;case v_:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case __:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Lt("WebGLState: Invalid blending: ",W);break}else switch(W){case Fo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case g_:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case v_:Lt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case __:Lt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Lt("WebGLState: Invalid blending: ",W);break}w=null,b=null,I=null,U=null,V.set(0,0,0),A=0,S=W,D=Rt}return}Me=Me||be,he=he||Ee,je=je||Ue,(be!==y||Me!==P)&&(n.blendEquationSeparate(Vt[be],Vt[Me]),y=be,P=Me),(Ee!==w||Ue!==b||he!==I||je!==U)&&(n.blendFuncSeparate(dt[Ee],dt[Ue],dt[he],dt[je]),w=Ee,b=Ue,I=he,U=je),(at.equals(V)===!1||Ot!==A)&&(n.blendColor(at.r,at.g,at.b,Ot),V.copy(at),A=Ot),S=W,D=!1}function At(W,be){W.side===ri?ce(n.CULL_FACE):pe(n.CULL_FACE);let Ee=W.side===xn;be&&(Ee=!Ee),Oe(Ee),W.blending===Fo&&W.transparent===!1?_t(Oi):_t(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),a.setMask(W.colorWrite);const Ue=W.stencilWrite;u.setTest(Ue),Ue&&(u.setMask(W.stencilWriteMask),u.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),u.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),xt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?pe(n.SAMPLE_ALPHA_TO_COVERAGE):ce(n.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(W){K!==W&&(W?n.frontFace(n.CW):n.frontFace(n.CCW),K=W)}function ut(W){W!==QC?(pe(n.CULL_FACE),W!==B&&(W===m_?n.cullFace(n.BACK):W===JC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ce(n.CULL_FACE),B=W}function k(W){W!==Q&&(H&&n.lineWidth(W),Q=W)}function xt(W,be,Ee){W?(pe(n.POLYGON_OFFSET_FILL),(J!==be||ne!==Ee)&&(J=be,ne=Ee,c.getReversed()&&(be=-be),n.polygonOffset(be,Ee))):ce(n.POLYGON_OFFSET_FILL)}function gt(W){W?pe(n.SCISSOR_TEST):ce(n.SCISSOR_TEST)}function Et(W){W===void 0&&(W=n.TEXTURE0+G-1),ee!==W&&(n.activeTexture(W),ee=W)}function Ye(W,be,Ee){Ee===void 0&&(ee===null?Ee=n.TEXTURE0+G-1:Ee=ee);let Ue=ae[Ee];Ue===void 0&&(Ue={type:void 0,texture:void 0},ae[Ee]=Ue),(Ue.type!==W||Ue.texture!==be)&&(ee!==Ee&&(n.activeTexture(Ee),ee=Ee),n.bindTexture(W,be||oe[W]),Ue.type=W,Ue.texture=be)}function L(){const W=ae[ee];W!==void 0&&W.type!==void 0&&(n.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function T(){try{n.compressedTexImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Y(){try{n.compressedTexImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function me(){try{n.texSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ve(){try{n.texSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function de(){try{n.compressedTexSubImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ge(){try{n.compressedTexSubImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ce(){try{n.texStorage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Qe(){try{n.texStorage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function ot(){try{n.texImage2D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Se(){try{n.texImage3D(...arguments)}catch(W){Lt("WebGLState:",W)}}function Ae(W){Re.equals(W)===!1&&(n.scissor(W.x,W.y,W.z,W.w),Re.copy(W))}function qe(W){Ve.equals(W)===!1&&(n.viewport(W.x,W.y,W.z,W.w),Ve.copy(W))}function We(W,be){let Ee=h.get(be);Ee===void 0&&(Ee=new WeakMap,h.set(be,Ee));let Ue=Ee.get(W);Ue===void 0&&(Ue=n.getUniformBlockIndex(be,W.name),Ee.set(W,Ue))}function Ie(W,be){const Ue=h.get(be).get(W);d.get(be)!==Ue&&(n.uniformBlockBinding(be,Ue,W.__bindingPointIndex),d.set(be,Ue))}function ht(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),p={},ee=null,ae={},v={},g=new WeakMap,_=[],M=null,E=!1,S=null,y=null,w=null,b=null,P=null,I=null,U=null,V=new Ft(0,0,0),A=0,D=!1,K=null,B=null,Q=null,J=null,ne=null,Re.set(0,0,n.canvas.width,n.canvas.height),Ve.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),u.reset()}return{buffers:{color:a,depth:c,stencil:u},enable:pe,disable:ce,bindFramebuffer:we,drawBuffers:De,useProgram:nt,setBlending:_t,setMaterial:At,setFlipSided:Oe,setCullFace:ut,setLineWidth:k,setPolygonOffset:xt,setScissorTest:gt,activeTexture:Et,bindTexture:Ye,unbindTexture:L,compressedTexImage2D:T,compressedTexImage3D:Y,texImage2D:ot,texImage3D:Se,updateUBOMapping:We,uniformBlockBinding:Ie,texStorage2D:Ce,texStorage3D:Qe,texSubImage2D:me,texSubImage3D:ve,compressedTexSubImage2D:de,compressedTexSubImage3D:Ge,scissor:Ae,viewport:qe,reset:ht}}function Z3(n,e,t,r,o,a,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new St,p=new WeakMap;let v;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return _?new OffscreenCanvas(L,T):Mu("canvas")}function E(L,T,Y){let me=1;const ve=Ye(L);if((ve.width>Y||ve.height>Y)&&(me=Y/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const de=Math.floor(me*ve.width),Ge=Math.floor(me*ve.height);v===void 0&&(v=M(de,Ge));const Ce=T?M(de,Ge):v;return Ce.width=de,Ce.height=Ge,Ce.getContext("2d").drawImage(L,0,0,de,Ge),ft("WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ge+")."),Ce}else return"data"in L&&ft("WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),L;return L}function S(L){return L.generateMipmaps}function y(L){n.generateMipmap(L)}function w(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,T,Y,me,ve=!1){if(L!==null){if(n[L]!==void 0)return n[L];ft("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let de=T;if(T===n.RED&&(Y===n.FLOAT&&(de=n.R32F),Y===n.HALF_FLOAT&&(de=n.R16F),Y===n.UNSIGNED_BYTE&&(de=n.R8)),T===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.R8UI),Y===n.UNSIGNED_SHORT&&(de=n.R16UI),Y===n.UNSIGNED_INT&&(de=n.R32UI),Y===n.BYTE&&(de=n.R8I),Y===n.SHORT&&(de=n.R16I),Y===n.INT&&(de=n.R32I)),T===n.RG&&(Y===n.FLOAT&&(de=n.RG32F),Y===n.HALF_FLOAT&&(de=n.RG16F),Y===n.UNSIGNED_BYTE&&(de=n.RG8)),T===n.RG_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RG8UI),Y===n.UNSIGNED_SHORT&&(de=n.RG16UI),Y===n.UNSIGNED_INT&&(de=n.RG32UI),Y===n.BYTE&&(de=n.RG8I),Y===n.SHORT&&(de=n.RG16I),Y===n.INT&&(de=n.RG32I)),T===n.RGB_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RGB8UI),Y===n.UNSIGNED_SHORT&&(de=n.RGB16UI),Y===n.UNSIGNED_INT&&(de=n.RGB32UI),Y===n.BYTE&&(de=n.RGB8I),Y===n.SHORT&&(de=n.RGB16I),Y===n.INT&&(de=n.RGB32I)),T===n.RGBA_INTEGER&&(Y===n.UNSIGNED_BYTE&&(de=n.RGBA8UI),Y===n.UNSIGNED_SHORT&&(de=n.RGBA16UI),Y===n.UNSIGNED_INT&&(de=n.RGBA32UI),Y===n.BYTE&&(de=n.RGBA8I),Y===n.SHORT&&(de=n.RGBA16I),Y===n.INT&&(de=n.RGBA32I)),T===n.RGB&&(Y===n.UNSIGNED_INT_5_9_9_9_REV&&(de=n.RGB9_E5),Y===n.UNSIGNED_INT_10F_11F_11F_REV&&(de=n.R11F_G11F_B10F)),T===n.RGBA){const Ge=ve?yu:Pt.getTransfer(me);Y===n.FLOAT&&(de=n.RGBA32F),Y===n.HALF_FLOAT&&(de=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(de=Ge===Bt?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(de=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(de=n.RGB5_A1)}return(de===n.R16F||de===n.R32F||de===n.RG16F||de===n.RG32F||de===n.RGBA16F||de===n.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function P(L,T){let Y;return L?T===null||T===er||T===Go?Y=n.DEPTH24_STENCIL8:T===Ii?Y=n.DEPTH32F_STENCIL8:T===el&&(Y=n.DEPTH24_STENCIL8,ft("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===er||T===Go?Y=n.DEPTH_COMPONENT24:T===Ii?Y=n.DEPTH_COMPONENT32F:T===el&&(Y=n.DEPTH_COMPONENT16),Y}function I(L,T){return S(L)===!0||L.isFramebufferTexture&&L.minFilter!==wn&&L.minFilter!==Qt?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function U(L){const T=L.target;T.removeEventListener("dispose",U),A(T),T.isVideoTexture&&p.delete(T)}function V(L){const T=L.target;T.removeEventListener("dispose",V),K(T)}function A(L){const T=r.get(L);if(T.__webglInit===void 0)return;const Y=L.source,me=g.get(Y);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&D(L),Object.keys(me).length===0&&g.delete(Y)}r.remove(L)}function D(L){const T=r.get(L);n.deleteTexture(T.__webglTexture);const Y=L.source,me=g.get(Y);delete me[T.__cacheKey],c.memory.textures--}function K(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)n.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else n.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)n.deleteFramebuffer(T.__webglFramebuffer[me]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const Y=L.textures;for(let me=0,ve=Y.length;me<ve;me++){const de=r.get(Y[me]);de.__webglTexture&&(n.deleteTexture(de.__webglTexture),c.memory.textures--),r.remove(Y[me])}r.remove(L)}let B=0;function Q(){B=0}function J(){const L=B;return L>=o.maxTextures&&ft("WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),B+=1,L}function ne(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function G(L,T){const Y=r.get(L);if(L.isVideoTexture&&gt(L),L.isRenderTargetTexture===!1&&L.isExternalTexture!==!0&&L.version>0&&Y.__version!==L.version){const me=L.image;if(me===null)ft("WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)ft("WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Y,L,T);return}}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+T)}function H(L,T){const Y=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){oe(Y,L,T);return}else L.isExternalTexture&&(Y.__webglTexture=L.sourceTexture?L.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+T)}function $(L,T){const Y=r.get(L);if(L.isRenderTargetTexture===!1&&L.version>0&&Y.__version!==L.version){oe(Y,L,T);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+T)}function X(L,T){const Y=r.get(L);if(L.isCubeDepthTexture!==!0&&L.version>0&&Y.__version!==L.version){pe(Y,L,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+T)}const ee={[Zh]:n.REPEAT,[_r]:n.CLAMP_TO_EDGE,[Qh]:n.MIRRORED_REPEAT},ae={[wn]:n.NEAREST,[SR]:n.NEAREST_MIPMAP_NEAREST,[wc]:n.NEAREST_MIPMAP_LINEAR,[Qt]:n.LINEAR,[Od]:n.LINEAR_MIPMAP_NEAREST,[Vs]:n.LINEAR_MIPMAP_LINEAR},O={[TR]:n.NEVER,[bR]:n.ALWAYS,[wR]:n.LESS,[Em]:n.LEQUAL,[AR]:n.EQUAL,[Tm]:n.GEQUAL,[CR]:n.GREATER,[RR]:n.NOTEQUAL};function Z(L,T){if(T.type===Ii&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Qt||T.magFilter===Od||T.magFilter===wc||T.magFilter===Vs||T.minFilter===Qt||T.minFilter===Od||T.minFilter===wc||T.minFilter===Vs)&&ft("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ee[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ee[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ee[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ae[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ae[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,O[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===wn||T.minFilter!==wc&&T.minFilter!==Vs||T.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const Y=e.get("EXT_texture_filter_anisotropic");n.texParameterf(L,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Re(L,T){let Y=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",U));const me=T.source;let ve=g.get(me);ve===void 0&&(ve={},g.set(me,ve));const de=ne(T);if(de!==L.__cacheKey){ve[de]===void 0&&(ve[de]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,Y=!0),ve[de].usedTimes++;const Ge=ve[L.__cacheKey];Ge!==void 0&&(ve[L.__cacheKey].usedTimes--,Ge.usedTimes===0&&D(T)),L.__cacheKey=de,L.__webglTexture=ve[de].texture}return Y}function Ve(L,T,Y){return Math.floor(Math.floor(L/Y)/T)}function He(L,T,Y,me){const de=L.updateRanges;if(de.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,T.width,T.height,Y,me,T.data);else{de.sort((Se,Ae)=>Se.start-Ae.start);let Ge=0;for(let Se=1;Se<de.length;Se++){const Ae=de[Ge],qe=de[Se],We=Ae.start+Ae.count,Ie=Ve(qe.start,T.width,4),ht=Ve(Ae.start,T.width,4);qe.start<=We+1&&Ie===ht&&Ve(qe.start+qe.count-1,T.width,4)===Ie?Ae.count=Math.max(Ae.count,qe.start+qe.count-Ae.start):(++Ge,de[Ge]=qe)}de.length=Ge+1;const Ce=n.getParameter(n.UNPACK_ROW_LENGTH),Qe=n.getParameter(n.UNPACK_SKIP_PIXELS),ot=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,T.width);for(let Se=0,Ae=de.length;Se<Ae;Se++){const qe=de[Se],We=Math.floor(qe.start/4),Ie=Math.ceil(qe.count/4),ht=We%T.width,W=Math.floor(We/T.width),be=Ie,Ee=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,ht),n.pixelStorei(n.UNPACK_SKIP_ROWS,W),t.texSubImage2D(n.TEXTURE_2D,0,ht,W,be,Ee,Y,me,T.data)}L.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Ce),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Qe),n.pixelStorei(n.UNPACK_SKIP_ROWS,ot)}}function oe(L,T,Y){let me=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=n.TEXTURE_3D);const ve=Re(L,T),de=T.source;t.bindTexture(me,L.__webglTexture,n.TEXTURE0+Y);const Ge=r.get(de);if(de.version!==Ge.__version||ve===!0){t.activeTexture(n.TEXTURE0+Y);const Ce=Pt.getPrimaries(Pt.workingColorSpace),Qe=T.colorSpace===Yi?null:Pt.getPrimaries(T.colorSpace),ot=T.colorSpace===Yi||Ce===Qe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ot);let Se=E(T.image,!1,o.maxTextureSize);Se=Et(T,Se);const Ae=a.convert(T.format,T.colorSpace),qe=a.convert(T.type);let We=b(T.internalFormat,Ae,qe,T.colorSpace,T.isVideoTexture);Z(me,T);let Ie;const ht=T.mipmaps,W=T.isVideoTexture!==!0,be=Ge.__version===void 0||ve===!0,Ee=de.dataReady,Ue=I(T,Se);if(T.isDepthTexture)We=P(T.format===ts,T.type),be&&(W?t.texStorage2D(n.TEXTURE_2D,1,We,Se.width,Se.height):t.texImage2D(n.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,qe,null));else if(T.isDataTexture)if(ht.length>0){W&&be&&t.texStorage2D(n.TEXTURE_2D,Ue,We,ht[0].width,ht[0].height);for(let Me=0,he=ht.length;Me<he;Me++)Ie=ht[Me],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ae,qe,Ie.data);T.generateMipmaps=!1}else W?(be&&t.texStorage2D(n.TEXTURE_2D,Ue,We,Se.width,Se.height),Ee&&He(T,Se,Ae,qe)):t.texImage2D(n.TEXTURE_2D,0,We,Se.width,Se.height,0,Ae,qe,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){W&&be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,We,ht[0].width,ht[0].height,Se.depth);for(let Me=0,he=ht.length;Me<he;Me++)if(Ie=ht[Me],T.format!==Ui)if(Ae!==null)if(W){if(Ee)if(T.layerUpdates.size>0){const je=k_(Ie.width,Ie.height,T.format,T.type);for(const at of T.layerUpdates){const Ot=Ie.data.subarray(at*je/Ie.data.BYTES_PER_ELEMENT,(at+1)*je/Ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,at,Ie.width,Ie.height,1,Ae,Ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Se.depth,Ae,Ie.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Me,We,Ie.width,Ie.height,Se.depth,0,Ie.data,0,0);else ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?Ee&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Me,0,0,0,Ie.width,Ie.height,Se.depth,Ae,qe,Ie.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Me,We,Ie.width,Ie.height,Se.depth,0,Ae,qe,Ie.data)}else{W&&be&&t.texStorage2D(n.TEXTURE_2D,Ue,We,ht[0].width,ht[0].height);for(let Me=0,he=ht.length;Me<he;Me++)Ie=ht[Me],T.format!==Ui?Ae!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,Ie.data):t.compressedTexImage2D(n.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ie.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ie.width,Ie.height,Ae,qe,Ie.data):t.texImage2D(n.TEXTURE_2D,Me,We,Ie.width,Ie.height,0,Ae,qe,Ie.data)}else if(T.isDataArrayTexture)if(W){if(be&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Ue,We,Se.width,Se.height,Se.depth),Ee)if(T.layerUpdates.size>0){const Me=k_(Se.width,Se.height,T.format,T.type);for(const he of T.layerUpdates){const je=Se.data.subarray(he*Me/Se.data.BYTES_PER_ELEMENT,(he+1)*Me/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,Ae,qe,je)}T.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ae,qe,Se.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,We,Se.width,Se.height,Se.depth,0,Ae,qe,Se.data);else if(T.isData3DTexture)W?(be&&t.texStorage3D(n.TEXTURE_3D,Ue,We,Se.width,Se.height,Se.depth),Ee&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ae,qe,Se.data)):t.texImage3D(n.TEXTURE_3D,0,We,Se.width,Se.height,Se.depth,0,Ae,qe,Se.data);else if(T.isFramebufferTexture){if(be)if(W)t.texStorage2D(n.TEXTURE_2D,Ue,We,Se.width,Se.height);else{let Me=Se.width,he=Se.height;for(let je=0;je<Ue;je++)t.texImage2D(n.TEXTURE_2D,je,We,Me,he,0,Ae,qe,null),Me>>=1,he>>=1}}else if(ht.length>0){if(W&&be){const Me=Ye(ht[0]);t.texStorage2D(n.TEXTURE_2D,Ue,We,Me.width,Me.height)}for(let Me=0,he=ht.length;Me<he;Me++)Ie=ht[Me],W?Ee&&t.texSubImage2D(n.TEXTURE_2D,Me,0,0,Ae,qe,Ie):t.texImage2D(n.TEXTURE_2D,Me,We,Ae,qe,Ie);T.generateMipmaps=!1}else if(W){if(be){const Me=Ye(Se);t.texStorage2D(n.TEXTURE_2D,Ue,We,Me.width,Me.height)}Ee&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,qe,Se)}else t.texImage2D(n.TEXTURE_2D,0,We,Ae,qe,Se);S(T)&&y(me),Ge.__version=de.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function pe(L,T,Y){if(T.image.length!==6)return;const me=Re(L,T),ve=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+Y);const de=r.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(n.TEXTURE0+Y);const Ge=Pt.getPrimaries(Pt.workingColorSpace),Ce=T.colorSpace===Yi?null:Pt.getPrimaries(T.colorSpace),Qe=T.colorSpace===Yi||Ge===Ce?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);const ot=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,Ae=[];for(let he=0;he<6;he++)!ot&&!Se?Ae[he]=E(T.image[he],!0,o.maxCubemapSize):Ae[he]=Se?T.image[he].image:T.image[he],Ae[he]=Et(T,Ae[he]);const qe=Ae[0],We=a.convert(T.format,T.colorSpace),Ie=a.convert(T.type),ht=b(T.internalFormat,We,Ie,T.colorSpace),W=T.isVideoTexture!==!0,be=de.__version===void 0||me===!0,Ee=ve.dataReady;let Ue=I(T,qe);Z(n.TEXTURE_CUBE_MAP,T);let Me;if(ot){W&&be&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ht,qe.width,qe.height);for(let he=0;he<6;he++){Me=Ae[he].mipmaps;for(let je=0;je<Me.length;je++){const at=Me[je];T.format!==Ui?We!==null?W?Ee&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je,0,0,at.width,at.height,We,at.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je,ht,at.width,at.height,0,at.data):ft("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je,0,0,at.width,at.height,We,Ie,at.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je,ht,at.width,at.height,0,We,Ie,at.data)}}}else{if(Me=T.mipmaps,W&&be){Me.length>0&&Ue++;const he=Ye(Ae[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ue,ht,he.width,he.height)}for(let he=0;he<6;he++)if(Se){W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ae[he].width,Ae[he].height,We,Ie,Ae[he].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,Ae[he].width,Ae[he].height,0,We,Ie,Ae[he].data);for(let je=0;je<Me.length;je++){const Ot=Me[je].image[he].image;W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je+1,0,0,Ot.width,Ot.height,We,Ie,Ot.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je+1,ht,Ot.width,Ot.height,0,We,Ie,Ot.data)}}else{W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,We,Ie,Ae[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,ht,We,Ie,Ae[he]);for(let je=0;je<Me.length;je++){const at=Me[je];W?Ee&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je+1,0,0,We,Ie,at.image[he]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+he,je+1,ht,We,Ie,at.image[he])}}}S(T)&&y(n.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function ce(L,T,Y,me,ve,de){const Ge=a.convert(Y.format,Y.colorSpace),Ce=a.convert(Y.type),Qe=b(Y.internalFormat,Ge,Ce,Y.colorSpace),ot=r.get(T),Se=r.get(Y);if(Se.__renderTarget=T,!ot.__hasExternalTextures){const Ae=Math.max(1,T.width>>de),qe=Math.max(1,T.height>>de);ve===n.TEXTURE_3D||ve===n.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Qe,Ae,qe,T.depth,0,Ge,Ce,null):t.texImage2D(ve,de,Qe,Ae,qe,0,Ge,Ce,null)}t.bindFramebuffer(n.FRAMEBUFFER,L),xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,me,ve,Se.__webglTexture,0,k(T)):(ve===n.TEXTURE_2D||ve>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,me,ve,Se.__webglTexture,de),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(L,T,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=P(T.stencilBuffer,ve),Ge=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k(T),de,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,k(T),de,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ge,n.RENDERBUFFER,L)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ge=a.convert(de.format,de.colorSpace),Ce=a.convert(de.type),Qe=b(de.internalFormat,Ge,Ce,de.colorSpace);xt(T)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,k(T),Qe,T.width,T.height):Y?n.renderbufferStorageMultisample(n.RENDERBUFFER,k(T),Qe,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Qe,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(L,T,Y){const me=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ve=r.get(T.depthTexture);if(ve.__renderTarget=T,(!ve.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),me){if(ve.__webglInit===void 0&&(ve.__webglInit=!0,T.depthTexture.addEventListener("dispose",U)),ve.__webglTexture===void 0){ve.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),Z(n.TEXTURE_CUBE_MAP,T.depthTexture);const ot=a.convert(T.depthTexture.format),Se=a.convert(T.depthTexture.type);let Ae;T.depthTexture.format===Er?Ae=n.DEPTH_COMPONENT24:T.depthTexture.format===ts&&(Ae=n.DEPTH24_STENCIL8);for(let qe=0;qe<6;qe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+qe,0,Ae,T.width,T.height,0,ot,Se,null)}}else G(T.depthTexture,0);const de=ve.__webglTexture,Ge=k(T),Ce=me?n.TEXTURE_CUBE_MAP_POSITIVE_X+Y:n.TEXTURE_2D,Qe=T.depthTexture.format===ts?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(T.depthTexture.format===Er)xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Qe,Ce,de,0,Ge):n.framebufferTexture2D(n.FRAMEBUFFER,Qe,Ce,de,0);else if(T.depthTexture.format===ts)xt(T)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Qe,Ce,de,0,Ge):n.framebufferTexture2D(n.FRAMEBUFFER,Qe,Ce,de,0);else throw new Error("Unknown depthTexture format")}function nt(L){const T=r.get(L),Y=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer)if(Y)for(let me=0;me<6;me++)De(T.__webglFramebuffer[me],L,me);else{const me=L.texture.mipmaps;me&&me.length>0?De(T.__webglFramebuffer[0],L,0):De(T.__webglFramebuffer,L,0)}else if(Y){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=n.createRenderbuffer(),we(T.__webglDepthbuffer[me],L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[me];n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,de)}}else{const me=L.texture.mipmaps;if(me&&me.length>0?t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),we(T.__webglDepthbuffer,L,!1);else{const ve=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,de),n.framebufferRenderbuffer(n.FRAMEBUFFER,ve,n.RENDERBUFFER,de)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(L,T,Y){const me=r.get(L);T!==void 0&&ce(me.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&nt(L)}function dt(L){const T=L.texture,Y=r.get(L),me=r.get(T);L.addEventListener("dispose",V);const ve=L.textures,de=L.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=n.createTexture()),me.__version=T.version,c.memory.textures++),de){Y.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[Ce]=[];for(let Qe=0;Qe<T.mipmaps.length;Qe++)Y.__webglFramebuffer[Ce][Qe]=n.createFramebuffer()}else Y.__webglFramebuffer[Ce]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)Y.__webglFramebuffer[Ce]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(Ge)for(let Ce=0,Qe=ve.length;Ce<Qe;Ce++){const ot=r.get(ve[Ce]);ot.__webglTexture===void 0&&(ot.__webglTexture=n.createTexture(),c.memory.textures++)}if(L.samples>0&&xt(L)===!1){Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Qe=ve[Ce];Y.__webglColorRenderbuffer[Ce]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce]);const ot=a.convert(Qe.format,Qe.colorSpace),Se=a.convert(Qe.type),Ae=b(Qe.internalFormat,ot,Se,Qe.colorSpace,L.isXRRenderTarget===!0),qe=k(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,qe,Ae,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Ce,n.RENDERBUFFER,Y.__webglColorRenderbuffer[Ce])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),we(Y.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(de){t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Z(n.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)ce(Y.__webglFramebuffer[Ce][Qe],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Qe);else ce(Y.__webglFramebuffer[Ce],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(T)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Qe=ve.length;Ce<Qe;Ce++){const ot=ve[Ce],Se=r.get(ot);let Ae=n.TEXTURE_2D;(L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ae=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ae,Se.__webglTexture),Z(Ae,ot),ce(Y.__webglFramebuffer,L,ot,n.COLOR_ATTACHMENT0+Ce,Ae,0),S(ot)&&y(Ae)}t.unbindTexture()}else{let Ce=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),Z(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Qe=0;Qe<T.mipmaps.length;Qe++)ce(Y.__webglFramebuffer[Qe],L,T,n.COLOR_ATTACHMENT0,Ce,Qe);else ce(Y.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,Ce,0);S(T)&&y(Ce),t.unbindTexture()}L.depthBuffer&&nt(L)}function _t(L){const T=L.textures;for(let Y=0,me=T.length;Y<me;Y++){const ve=T[Y];if(S(ve)){const de=w(L),Ge=r.get(ve).__webglTexture;t.bindTexture(de,Ge),y(de),t.unbindTexture()}}}const At=[],Oe=[];function ut(L){if(L.samples>0){if(xt(L)===!1){const T=L.textures,Y=L.width,me=L.height;let ve=n.COLOR_BUFFER_BIT;const de=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ge=r.get(L),Ce=T.length>1;if(Ce)for(let ot=0;ot<T.length;ot++)t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer);const Qe=L.texture.mipmaps;Qe&&Qe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let ot=0;ot<T.length;ot++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ve|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ve|=n.STENCIL_BUFFER_BIT)),Ce){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[ot]);const Se=r.get(T[ot]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Se,0)}n.blitFramebuffer(0,0,Y,me,0,0,Y,me,ve,n.NEAREST),d===!0&&(At.length=0,Oe.length=0,At.push(n.COLOR_ATTACHMENT0+ot),L.depthBuffer&&L.resolveDepthBuffer===!1&&(At.push(de),Oe.push(de),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Oe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,At))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Ce)for(let ot=0;ot<T.length;ot++){t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,Ge.__webglColorRenderbuffer[ot]);const Se=r.get(T[ot]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ge.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function k(L){return Math.min(o.maxSamples,L.samples)}function xt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function gt(L){const T=c.render.frame;p.get(L)!==T&&(p.set(L,T),L.update())}function Et(L,T){const Y=L.colorSpace,me=L.format,ve=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||Y!==ss&&Y!==Yi&&(Pt.getTransfer(Y)===Bt?(me!==Ui||ve!==Ln)&&ft("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Lt("WebGLTextures: Unsupported texture color space:",Y)),T}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=J,this.resetTextureUnits=Q,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=$,this.setTextureCube=X,this.rebindTextures=Vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=nt,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Q3(n,e){function t(r,o=Yi){let a;const c=Pt.getTransfer(o);if(r===Ln)return n.UNSIGNED_BYTE;if(r===_m)return n.UNSIGNED_SHORT_4_4_4_4;if(r===xm)return n.UNSIGNED_SHORT_5_5_5_1;if(r===wS)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===AS)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===ES)return n.BYTE;if(r===TS)return n.SHORT;if(r===el)return n.UNSIGNED_SHORT;if(r===vm)return n.INT;if(r===er)return n.UNSIGNED_INT;if(r===Ii)return n.FLOAT;if(r===Mr)return n.HALF_FLOAT;if(r===CS)return n.ALPHA;if(r===RS)return n.RGB;if(r===Ui)return n.RGBA;if(r===Er)return n.DEPTH_COMPONENT;if(r===ts)return n.DEPTH_STENCIL;if(r===bS)return n.RED;if(r===ym)return n.RED_INTEGER;if(r===Wo)return n.RG;if(r===Sm)return n.RG_INTEGER;if(r===Mm)return n.RGBA_INTEGER;if(r===su||r===ou||r===au||r===lu)if(c===Bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===su)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ou)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===au)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===lu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===su)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ou)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===au)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===lu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Jh||r===ep||r===tp||r===np)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Jh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===ep)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tp)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===np)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ip||r===rp||r===sp||r===op||r===ap||r===lp||r===cp)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===ip||r===rp)return c===Bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===sp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC;if(r===op)return a.COMPRESSED_R11_EAC;if(r===ap)return a.COMPRESSED_SIGNED_R11_EAC;if(r===lp)return a.COMPRESSED_RG11_EAC;if(r===cp)return a.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===up||r===fp||r===dp||r===hp||r===pp||r===mp||r===gp||r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===up)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===dp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===hp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===pp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===mp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===gp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===_p)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===xp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===yp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Sp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Mp)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ep)return c===Bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Tp||r===wp||r===Ap)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===Tp)return c===Bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===wp)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ap)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Cp||r===Rp||r===bp||r===Pp)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===Cp)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Rp)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===bp)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Pp)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Go?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const J3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,eL=`
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

}`;class tL{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new kS(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Kn({vertexShader:J3,fragmentShader:eL,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Bi(new cl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class nL extends as{constructor(e,t){super();const r=this;let o=null,a=1,c=null,u="local-floor",d=1,h=null,p=null,v=null,g=null,_=null,M=null;const E=typeof XRWebGLBinding<"u",S=new tL,y={},w=t.getContextAttributes();let b=null,P=null;const I=[],U=[],V=new St;let A=null;const D=new vi;D.viewport=new sn;const K=new vi;K.viewport=new sn;const B=[D,K],Q=new hb;let J=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let pe=I[oe];return pe===void 0&&(pe=new jd,I[oe]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(oe){let pe=I[oe];return pe===void 0&&(pe=new jd,I[oe]=pe),pe.getGripSpace()},this.getHand=function(oe){let pe=I[oe];return pe===void 0&&(pe=new jd,I[oe]=pe),pe.getHandSpace()};function G(oe){const pe=U.indexOf(oe.inputSource);if(pe===-1)return;const ce=I[pe];ce!==void 0&&(ce.update(oe.inputSource,oe.frame,h||c),ce.dispatchEvent({type:oe.type,data:oe.inputSource}))}function H(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",H),o.removeEventListener("inputsourceschange",$);for(let oe=0;oe<I.length;oe++){const pe=U[oe];pe!==null&&(U[oe]=null,I[oe].disconnect(pe))}J=null,ne=null,S.reset();for(const oe in y)delete y[oe];e.setRenderTarget(b),_=null,g=null,v=null,o=null,P=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(V.width,V.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){a=oe,r.isPresenting===!0&&ft("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){u=oe,r.isPresenting===!0&&ft("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(oe){h=oe},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return v===null&&E&&(v=new XRWebGLBinding(o,t)),v},this.getFrame=function(){return M},this.getSession=function(){return o},this.setSession=async function(oe){if(o=oe,o!==null){if(b=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",H),o.addEventListener("inputsourceschange",$),w.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let ce=null,we=null,De=null;w.depth&&(De=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=w.stencil?ts:Er,we=w.stencil?Go:er);const nt={colorFormat:t.RGBA8,depthFormat:De,scaleFactor:a};v=this.getBinding(),g=v.createProjectionLayer(nt),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),P=new Vn(g.textureWidth,g.textureHeight,{format:Ui,type:Ln,depthTexture:new jo(g.textureWidth,g.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const ce={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:a};_=new XRWebGLLayer(o,t,ce),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),P=new Vn(_.framebufferWidth,_.framebufferHeight,{format:Ui,type:Ln,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await o.requestReferenceSpace(u),He.setContext(o),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function $(oe){for(let pe=0;pe<oe.removed.length;pe++){const ce=oe.removed[pe],we=U.indexOf(ce);we>=0&&(U[we]=null,I[we].disconnect(ce))}for(let pe=0;pe<oe.added.length;pe++){const ce=oe.added[pe];let we=U.indexOf(ce);if(we===-1){for(let nt=0;nt<I.length;nt++)if(nt>=U.length){U.push(ce),we=nt;break}else if(U[nt]===null){U[nt]=ce,we=nt;break}if(we===-1)break}const De=I[we];De&&De.connect(ce)}}const X=new ue,ee=new ue;function ae(oe,pe,ce){X.setFromMatrixPosition(pe.matrixWorld),ee.setFromMatrixPosition(ce.matrixWorld);const we=X.distanceTo(ee),De=pe.projectionMatrix.elements,nt=ce.projectionMatrix.elements,Vt=De[14]/(De[10]-1),dt=De[14]/(De[10]+1),_t=(De[9]+1)/De[5],At=(De[9]-1)/De[5],Oe=(De[8]-1)/De[0],ut=(nt[8]+1)/nt[0],k=Vt*Oe,xt=Vt*ut,gt=we/(-Oe+ut),Et=gt*-Oe;if(pe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(Et),oe.translateZ(gt),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),De[10]===-1)oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Ye=Vt+gt,L=dt+gt,T=k-Et,Y=xt+(we-Et),me=_t*dt/L*Ye,ve=At*dt/L*Ye;oe.projectionMatrix.makePerspective(T,Y,me,ve,Ye,L),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function O(oe,pe){pe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(pe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(o===null)return;let pe=oe.near,ce=oe.far;S.texture!==null&&(S.depthNear>0&&(pe=S.depthNear),S.depthFar>0&&(ce=S.depthFar)),Q.near=K.near=D.near=pe,Q.far=K.far=D.far=ce,(J!==Q.near||ne!==Q.far)&&(o.updateRenderState({depthNear:Q.near,depthFar:Q.far}),J=Q.near,ne=Q.far),Q.layers.mask=oe.layers.mask|6,D.layers.mask=Q.layers.mask&-5,K.layers.mask=Q.layers.mask&-3;const we=oe.parent,De=Q.cameras;O(Q,we);for(let nt=0;nt<De.length;nt++)O(De[nt],we);De.length===2?ae(Q,D,K):Q.projectionMatrix.copy(D.projectionMatrix),Z(oe,Q,we)};function Z(oe,pe,ce){ce===null?oe.matrix.copy(pe.matrixWorld):(oe.matrix.copy(ce.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(pe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(pe.projectionMatrix),oe.projectionMatrixInverse.copy(pe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=Lp*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return Q},this.getFoveation=function(){if(!(g===null&&_===null))return d},this.setFoveation=function(oe){d=oe,g!==null&&(g.fixedFoveation=oe),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=oe)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(Q)},this.getCameraTexture=function(oe){return y[oe]};let Re=null;function Ve(oe,pe){if(p=pe.getViewerPose(h||c),M=pe,p!==null){const ce=p.views;_!==null&&(e.setRenderTargetFramebuffer(P,_.framebuffer),e.setRenderTarget(P));let we=!1;ce.length!==Q.cameras.length&&(Q.cameras.length=0,we=!0);for(let dt=0;dt<ce.length;dt++){const _t=ce[dt];let At=null;if(_!==null)At=_.getViewport(_t);else{const ut=v.getViewSubImage(g,_t);At=ut.viewport,dt===0&&(e.setRenderTargetTextures(P,ut.colorTexture,ut.depthStencilTexture),e.setRenderTarget(P))}let Oe=B[dt];Oe===void 0&&(Oe=new vi,Oe.layers.enable(dt),Oe.viewport=new sn,B[dt]=Oe),Oe.matrix.fromArray(_t.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(_t.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set(At.x,At.y,At.width,At.height),dt===0&&(Q.matrix.copy(Oe.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale)),we===!0&&Q.cameras.push(Oe)}const De=o.enabledFeatures;if(De&&De.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&E){v=r.getBinding();const dt=v.getDepthInformation(ce[0]);dt&&dt.isValid&&dt.texture&&S.init(dt,o.renderState)}if(De&&De.includes("camera-access")&&E){e.state.unbindTexture(),v=r.getBinding();for(let dt=0;dt<ce.length;dt++){const _t=ce[dt].camera;if(_t){let At=y[_t];At||(At=new kS,y[_t]=At);const Oe=v.getCameraImage(_t);At.sourceTexture=Oe}}}}for(let ce=0;ce<I.length;ce++){const we=U[ce],De=I[ce];we!==null&&De!==void 0&&De.update(we,pe,h||c)}Re&&Re(oe,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),M=null}const He=new HS;He.setAnimationLoop(Ve),this.setAnimationLoop=function(oe){Re=oe},this.dispose=function(){}}}const Ps=new Tr,iL=new cn;function rL(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,VS(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function o(S,y,w,b,P){y.isMeshBasicMaterial?a(S,y):y.isMeshLambertMaterial?(a(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(a(S,y),v(S,y)):y.isMeshPhongMaterial?(a(S,y),p(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(a(S,y),g(S,y),y.isMeshPhysicalMaterial&&_(S,y,P)):y.isMeshMatcapMaterial?(a(S,y),M(S,y)):y.isMeshDepthMaterial?a(S,y):y.isMeshDistanceMaterial?(a(S,y),E(S,y)):y.isMeshNormalMaterial?a(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,w,b):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function a(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===xn&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===xn&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const w=e.get(y),b=w.envMap,P=w.envMapRotation;b&&(S.envMap.value=b,Ps.copy(P),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),S.envMapRotation.value.setFromMatrix4(iL.makeRotationFromEuler(Ps)),S.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,w,b){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*w,S.scale.value=b*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function p(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function v(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function g(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function _(S,y,w){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===xn&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=w.texture,S.transmissionSamplerSize.value.set(w.width,w.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function M(S,y){y.matcap&&(S.matcap.value=y.matcap)}function E(S,y){const w=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(w.matrixWorld),S.nearDistance.value=w.shadow.camera.near,S.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function sL(n,e,t,r){let o={},a={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,b){const P=b.program;r.uniformBlockBinding(w,P)}function h(w,b){let P=o[w.id];P===void 0&&(M(w),P=p(w),o[w.id]=P,w.addEventListener("dispose",S));const I=b.program;r.updateUBOMapping(w,I);const U=e.render.frame;a[w.id]!==U&&(g(w),a[w.id]=U)}function p(w){const b=v();w.__bindingPointIndex=b;const P=n.createBuffer(),I=w.__size,U=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,I,U),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,P),P}function v(){for(let w=0;w<u;w++)if(c.indexOf(w)===-1)return c.push(w),w;return Lt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(w){const b=o[w.id],P=w.uniforms,I=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let U=0,V=P.length;U<V;U++){const A=Array.isArray(P[U])?P[U]:[P[U]];for(let D=0,K=A.length;D<K;D++){const B=A[D];if(_(B,U,D,I)===!0){const Q=B.__offset,J=Array.isArray(B.value)?B.value:[B.value];let ne=0;for(let G=0;G<J.length;G++){const H=J[G],$=E(H);typeof H=="number"||typeof H=="boolean"?(B.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,Q+ne,B.__data)):H.isMatrix3?(B.__data[0]=H.elements[0],B.__data[1]=H.elements[1],B.__data[2]=H.elements[2],B.__data[3]=0,B.__data[4]=H.elements[3],B.__data[5]=H.elements[4],B.__data[6]=H.elements[5],B.__data[7]=0,B.__data[8]=H.elements[6],B.__data[9]=H.elements[7],B.__data[10]=H.elements[8],B.__data[11]=0):(H.toArray(B.__data,ne),ne+=$.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,B.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function _(w,b,P,I){const U=w.value,V=b+"_"+P;if(I[V]===void 0)return typeof U=="number"||typeof U=="boolean"?I[V]=U:I[V]=U.clone(),!0;{const A=I[V];if(typeof U=="number"||typeof U=="boolean"){if(A!==U)return I[V]=U,!0}else if(A.equals(U)===!1)return A.copy(U),!0}return!1}function M(w){const b=w.uniforms;let P=0;const I=16;for(let V=0,A=b.length;V<A;V++){const D=Array.isArray(b[V])?b[V]:[b[V]];for(let K=0,B=D.length;K<B;K++){const Q=D[K],J=Array.isArray(Q.value)?Q.value:[Q.value];for(let ne=0,G=J.length;ne<G;ne++){const H=J[ne],$=E(H),X=P%I,ee=X%$.boundary,ae=X+ee;P+=ee,ae!==0&&I-ae<$.storage&&(P+=I-ae),Q.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=P,P+=$.storage}}}const U=P%I;return U>0&&(P+=I-U),w.__size=P,w.__cache={},this}function E(w){const b={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(b.boundary=4,b.storage=4):w.isVector2?(b.boundary=8,b.storage=8):w.isVector3||w.isColor?(b.boundary=16,b.storage=12):w.isVector4?(b.boundary=16,b.storage=16):w.isMatrix3?(b.boundary=48,b.storage=48):w.isMatrix4?(b.boundary=64,b.storage=64):w.isTexture?ft("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ft("WebGLRenderer: Unsupported uniform value type.",w),b}function S(w){const b=w.target;b.removeEventListener("dispose",S);const P=c.indexOf(b.__bindingPointIndex);c.splice(P,1),n.deleteBuffer(o[b.id]),delete o[b.id],delete a[b.id]}function y(){for(const w in o)n.deleteBuffer(o[w]);c=[],o={},a={}}return{bind:d,update:h,dispose:y}}const oL=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ji=null;function aL(){return ji===null&&(ji=new eb(oL,16,16,Wo,Mr),ji.name="DFG_LUT",ji.minFilter=Qt,ji.magFilter=Qt,ji.wrapS=_r,ji.wrapT=_r,ji.generateMipmaps=!1,ji.needsUpdate=!0),ji}class lL{constructor(e={}){const{canvas:t=DR(),context:r=null,depth:o=!0,stencil:a=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:g=!1,outputBufferType:_=Ln}=e;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=c;const E=_,S=new Set([Mm,Sm,ym]),y=new Set([Ln,er,el,Go,_m,xm]),w=new Uint32Array(4),b=new Int32Array(4);let P=null,I=null;const U=[],V=[];let A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const D=this;let K=!1;this._outputColorSpace=rn;let B=0,Q=0,J=null,ne=-1,G=null;const H=new sn,$=new sn;let X=null;const ee=new Ft(0);let ae=0,O=t.width,Z=t.height,Re=1,Ve=null,He=null;const oe=new sn(0,0,O,Z),pe=new sn(0,0,O,Z);let ce=!1;const we=new OS;let De=!1,nt=!1;const Vt=new cn,dt=new ue,_t=new sn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Oe=!1;function ut(){return J===null?Re:1}let k=r;function xt(R,q){return t.getContext(R,q)}try{const R={alpha:!0,depth:o,stencil:a,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:p,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${bu}`),t.addEventListener("webglcontextlost",je,!1),t.addEventListener("webglcontextrestored",at,!1),t.addEventListener("webglcontextcreationerror",Ot,!1),k===null){const q="webgl2";if(k=xt(q,R),k===null)throw xt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw Lt("WebGLRenderer: "+R.message),R}let gt,Et,Ye,L,T,Y,me,ve,de,Ge,Ce,Qe,ot,Se,Ae,qe,We,Ie,ht,W,be,Ee,Ue;function Me(){gt=new l2(k),gt.init(),be=new Q3(k,gt),Et=new e2(k,gt,e,be),Ye=new K3(k,gt),Et.reversedDepthBuffer&&g&&Ye.buffers.depth.setReversed(!0),L=new f2(k),T=new F3,Y=new Z3(k,gt,Ye,T,Et,be,L),me=new a2(D),ve=new gb(k),Ee=new QD(k,ve),de=new c2(k,ve,L,Ee),Ge=new h2(k,de,ve,Ee,L),Ie=new d2(k,Et,Y),Ae=new t2(T),Ce=new U3(D,me,gt,Et,Ee,Ae),Qe=new rL(D,T),ot=new B3,Se=new W3(gt),We=new ZD(D,me,Ye,Ge,M,d),qe=new q3(D,Ge,Et),Ue=new sL(k,L,Et,Ye),ht=new JD(k,gt,L),W=new u2(k,gt,L),L.programs=Ce.programs,D.capabilities=Et,D.extensions=gt,D.properties=T,D.renderLists=ot,D.shadowMap=qe,D.state=Ye,D.info=L}Me(),E!==Ln&&(A=new m2(E,t.width,t.height,o,a));const he=new nL(D,k);this.xr=he,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=gt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=gt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Re},this.setPixelRatio=function(R){R!==void 0&&(Re=R,this.setSize(O,Z,!1))},this.getSize=function(R){return R.set(O,Z)},this.setSize=function(R,q,fe=!0){if(he.isPresenting){ft("WebGLRenderer: Can't change size while VR device is presenting.");return}O=R,Z=q,t.width=Math.floor(R*Re),t.height=Math.floor(q*Re),fe===!0&&(t.style.width=R+"px",t.style.height=q+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,R,q)},this.getDrawingBufferSize=function(R){return R.set(O*Re,Z*Re).floor()},this.setDrawingBufferSize=function(R,q,fe){O=R,Z=q,Re=fe,t.width=Math.floor(R*fe),t.height=Math.floor(q*fe),this.setViewport(0,0,R,q)},this.setEffects=function(R){if(E===Ln){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let q=0;q<R.length;q++)if(R[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(H)},this.getViewport=function(R){return R.copy(oe)},this.setViewport=function(R,q,fe,se){R.isVector4?oe.set(R.x,R.y,R.z,R.w):oe.set(R,q,fe,se),Ye.viewport(H.copy(oe).multiplyScalar(Re).round())},this.getScissor=function(R){return R.copy(pe)},this.setScissor=function(R,q,fe,se){R.isVector4?pe.set(R.x,R.y,R.z,R.w):pe.set(R,q,fe,se),Ye.scissor($.copy(pe).multiplyScalar(Re).round())},this.getScissorTest=function(){return ce},this.setScissorTest=function(R){Ye.setScissorTest(ce=R)},this.setOpaqueSort=function(R){Ve=R},this.setTransparentSort=function(R){He=R},this.getClearColor=function(R){return R.copy(We.getClearColor())},this.setClearColor=function(){We.setClearColor(...arguments)},this.getClearAlpha=function(){return We.getClearAlpha()},this.setClearAlpha=function(){We.setClearAlpha(...arguments)},this.clear=function(R=!0,q=!0,fe=!0){let se=0;if(R){let ie=!1;if(J!==null){const Le=J.texture.format;ie=S.has(Le)}if(ie){const Le=J.texture.type,ke=y.has(Le),Pe=We.getClearColor(),Fe=We.getClearAlpha(),et=Pe.r,it=Pe.g,pt=Pe.b;ke?(w[0]=et,w[1]=it,w[2]=pt,w[3]=Fe,k.clearBufferuiv(k.COLOR,0,w)):(b[0]=et,b[1]=it,b[2]=pt,b[3]=Fe,k.clearBufferiv(k.COLOR,0,b))}else se|=k.COLOR_BUFFER_BIT}q&&(se|=k.DEPTH_BUFFER_BIT),fe&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),se!==0&&k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",je,!1),t.removeEventListener("webglcontextrestored",at,!1),t.removeEventListener("webglcontextcreationerror",Ot,!1),We.dispose(),ot.dispose(),Se.dispose(),T.dispose(),me.dispose(),Ge.dispose(),Ee.dispose(),Ue.dispose(),Ce.dispose(),he.dispose(),he.removeEventListener("sessionstart",wr),he.removeEventListener("sessionend",cs),li.stop()};function je(R){R.preventDefault(),M_("WebGLRenderer: Context Lost."),K=!0}function at(){M_("WebGLRenderer: Context Restored."),K=!1;const R=L.autoReset,q=qe.enabled,fe=qe.autoUpdate,se=qe.needsUpdate,ie=qe.type;Me(),L.autoReset=R,qe.enabled=q,qe.autoUpdate=fe,qe.needsUpdate=se,qe.type=ie}function Ot(R){Lt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Rt(R){const q=R.target;q.removeEventListener("dispose",Rt),ai(q)}function ai(R){Nn(R),T.remove(R)}function Nn(R){const q=T.get(R).programs;q!==void 0&&(q.forEach(function(fe){Ce.releaseProgram(fe)}),R.isShaderMaterial&&Ce.releaseShaderCache(R))}this.renderBufferDirect=function(R,q,fe,se,ie,Le){q===null&&(q=At);const ke=ie.isMesh&&ie.matrixWorld.determinant()<0,Pe=ml(R,q,fe,se,ie);Ye.setMaterial(se,ke);let Fe=fe.index,et=1;if(se.wireframe===!0){if(Fe=de.getWireframeAttribute(fe),Fe===void 0)return;et=2}const it=fe.drawRange,pt=fe.attributes.position;let tt=it.start*et,Ut=(it.start+it.count)*et;Le!==null&&(tt=Math.max(tt,Le.start*et),Ut=Math.min(Ut,(Le.start+Le.count)*et)),Fe!==null?(tt=Math.max(tt,0),Ut=Math.min(Ut,Fe.count)):pt!=null&&(tt=Math.max(tt,0),Ut=Math.min(Ut,pt.count));const zt=Ut-tt;if(zt<0||zt===1/0)return;Ee.setup(ie,se,Pe,fe,Fe);let kt,Ct=ht;if(Fe!==null&&(kt=ve.get(Fe),Ct=W,Ct.setIndex(kt)),ie.isMesh)se.wireframe===!0?(Ye.setLineWidth(se.wireframeLinewidth*ut()),Ct.setMode(k.LINES)):Ct.setMode(k.TRIANGLES);else if(ie.isLine){let Jt=se.linewidth;Jt===void 0&&(Jt=1),Ye.setLineWidth(Jt*ut()),ie.isLineSegments?Ct.setMode(k.LINES):ie.isLineLoop?Ct.setMode(k.LINE_LOOP):Ct.setMode(k.LINE_STRIP)}else ie.isPoints?Ct.setMode(k.POINTS):ie.isSprite&&Ct.setMode(k.TRIANGLES);if(ie.isBatchedMesh)if(ie._multiDrawInstances!==null)Eu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ct.renderMultiDrawInstances(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount,ie._multiDrawInstances);else if(gt.get("WEBGL_multi_draw"))Ct.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const Jt=ie._multiDrawStarts,Ze=ie._multiDrawCounts,In=ie._multiDrawCount,Mt=Fe?ve.get(Fe).bytesPerElement:1,zn=T.get(se).currentProgram.getUniforms();for(let Hn=0;Hn<In;Hn++)zn.setValue(k,"_gl_DrawID",Hn),Ct.render(Jt[Hn]/Mt,Ze[Hn])}else if(ie.isInstancedMesh)Ct.renderInstances(tt,zt,ie.count);else if(fe.isInstancedBufferGeometry){const Jt=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ze=Math.min(fe.instanceCount,Jt);Ct.renderInstances(tt,zt,Ze)}else Ct.render(tt,zt)};function js(R,q,fe){R.transparent===!0&&R.side===ri&&R.forceSinglePass===!1?(R.side=xn,R.needsUpdate=!0,fs(R,q,fe),R.side=Sr,R.needsUpdate=!0,fs(R,q,fe),R.side=ri):fs(R,q,fe)}this.compile=function(R,q,fe=null){fe===null&&(fe=R),I=Se.get(fe),I.init(q),V.push(I),fe.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),R!==fe&&R.traverseVisible(function(ie){ie.isLight&&ie.layers.test(q.layers)&&(I.pushLight(ie),ie.castShadow&&I.pushShadow(ie))}),I.setupLights();const se=new Set;return R.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Le=ie.material;if(Le)if(Array.isArray(Le))for(let ke=0;ke<Le.length;ke++){const Pe=Le[ke];js(Pe,fe,ie),se.add(Pe)}else js(Le,fe,ie),se.add(Le)}),I=V.pop(),se},this.compileAsync=function(R,q,fe=null){const se=this.compile(R,q,fe);return new Promise(ie=>{function Le(){if(se.forEach(function(ke){T.get(ke).currentProgram.isReady()&&se.delete(ke)}),se.size===0){ie(R);return}setTimeout(Le,10)}gt.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ir=null;function Uu(R){ir&&ir(R)}function wr(){li.stop()}function cs(){li.start()}const li=new HS;li.setAnimationLoop(Uu),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(R){ir=R,he.setAnimationLoop(R),R===null?li.stop():li.start()},he.addEventListener("sessionstart",wr),he.addEventListener("sessionend",cs),this.render=function(R,q){if(q!==void 0&&q.isCamera!==!0){Lt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(K===!0)return;const fe=he.enabled===!0&&he.isPresenting===!0,se=A!==null&&(J===null||fe)&&A.begin(D,J);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&(he.cameraAutoUpdate===!0&&he.updateCamera(q),q=he.getCamera()),R.isScene===!0&&R.onBeforeRender(D,R,q,J),I=Se.get(R,V.length),I.init(q),V.push(I),Vt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),we.setFromProjectionMatrix(Vt,qi,q.reversedDepth),nt=this.localClippingEnabled,De=Ae.init(this.clippingPlanes,nt),P=ot.get(R,U.length),P.init(),U.push(P),he.enabled===!0&&he.isPresenting===!0){const ke=D.xr.getDepthSensingMesh();ke!==null&&us(ke,q,-1/0,D.sortObjects)}us(R,q,0,D.sortObjects),P.finish(),D.sortObjects===!0&&P.sort(Ve,He),Oe=he.enabled===!1||he.isPresenting===!1||he.hasDepthSensing()===!1,Oe&&We.addToRenderList(P,R),this.info.render.frame++,De===!0&&Ae.beginShadows();const ie=I.state.shadowsArray;if(qe.render(ie,R,q),De===!0&&Ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&A.hasRenderPass())===!1){const ke=P.opaque,Pe=P.transmissive;if(I.setupLights(),q.isArrayCamera){const Fe=q.cameras;if(Pe.length>0)for(let et=0,it=Fe.length;et<it;et++){const pt=Fe[et];hl(ke,Pe,R,pt)}Oe&&We.render(R);for(let et=0,it=Fe.length;et<it;et++){const pt=Fe[et];dl(P,R,pt,pt.viewport)}}else Pe.length>0&&hl(ke,Pe,R,q),Oe&&We.render(R),dl(P,R,q)}J!==null&&Q===0&&(Y.updateMultisampleRenderTarget(J),Y.updateRenderTargetMipmap(J)),se&&A.end(D),R.isScene===!0&&R.onAfterRender(D,R,q),Ee.resetDefaultState(),ne=-1,G=null,V.pop(),V.length>0?(I=V[V.length-1],De===!0&&Ae.setGlobalState(D.clippingPlanes,I.state.camera)):I=null,U.pop(),U.length>0?P=U[U.length-1]:P=null};function us(R,q,fe,se){if(R.visible===!1)return;if(R.layers.test(q.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(q);else if(R.isLight)I.pushLight(R),R.castShadow&&I.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||we.intersectsSprite(R)){se&&_t.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Vt);const ke=Ge.update(R),Pe=R.material;Pe.visible&&P.push(R,ke,Pe,fe,_t.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||we.intersectsObject(R))){const ke=Ge.update(R),Pe=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),_t.copy(R.boundingSphere.center)):(ke.boundingSphere===null&&ke.computeBoundingSphere(),_t.copy(ke.boundingSphere.center)),_t.applyMatrix4(R.matrixWorld).applyMatrix4(Vt)),Array.isArray(Pe)){const Fe=ke.groups;for(let et=0,it=Fe.length;et<it;et++){const pt=Fe[et],tt=Pe[pt.materialIndex];tt&&tt.visible&&P.push(R,ke,tt,fe,_t.z,pt)}}else Pe.visible&&P.push(R,ke,Pe,fe,_t.z,null)}}const Le=R.children;for(let ke=0,Pe=Le.length;ke<Pe;ke++)us(Le[ke],q,fe,se)}function dl(R,q,fe,se){const{opaque:ie,transmissive:Le,transparent:ke}=R;I.setupLightsView(fe),De===!0&&Ae.setGlobalState(D.clippingPlanes,fe),se&&Ye.viewport(H.copy(se)),ie.length>0&&Xs(ie,q,fe),Le.length>0&&Xs(Le,q,fe),ke.length>0&&Xs(ke,q,fe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function hl(R,q,fe,se){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[se.id]===void 0){const tt=gt.has("EXT_color_buffer_half_float")||gt.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[se.id]=new Vn(1,1,{generateMipmaps:!0,type:tt?Mr:Ln,minFilter:Vs,samples:Math.max(4,Et.samples),stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Le=I.state.transmissionRenderTarget[se.id],ke=se.viewport||H;Le.setSize(ke.z*D.transmissionResolutionScale,ke.w*D.transmissionResolutionScale);const Pe=D.getRenderTarget(),Fe=D.getActiveCubeFace(),et=D.getActiveMipmapLevel();D.setRenderTarget(Le),D.getClearColor(ee),ae=D.getClearAlpha(),ae<1&&D.setClearColor(16777215,.5),D.clear(),Oe&&We.render(fe);const it=D.toneMapping;D.toneMapping=Qi;const pt=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),I.setupLightsView(se),De===!0&&Ae.setGlobalState(D.clippingPlanes,se),Xs(R,fe,se),Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le),gt.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let Ut=0,zt=q.length;Ut<zt;Ut++){const kt=q[Ut],{object:Ct,geometry:Jt,material:Ze,group:In}=kt;if(Ze.side===ri&&Ct.layers.test(se.layers)){const Mt=Ze.side;Ze.side=xn,Ze.needsUpdate=!0,ki(Ct,fe,se,Jt,Ze,In),Ze.side=Mt,Ze.needsUpdate=!0,tt=!0}}tt===!0&&(Y.updateMultisampleRenderTarget(Le),Y.updateRenderTargetMipmap(Le))}D.setRenderTarget(Pe,Fe,et),D.setClearColor(ee,ae),pt!==void 0&&(se.viewport=pt),D.toneMapping=it}function Xs(R,q,fe){const se=q.isScene===!0?q.overrideMaterial:null;for(let ie=0,Le=R.length;ie<Le;ie++){const ke=R[ie],{object:Pe,geometry:Fe,group:et}=ke;let it=ke.material;it.allowOverride===!0&&se!==null&&(it=se),Pe.layers.test(fe.layers)&&ki(Pe,q,fe,Fe,it,et)}}function ki(R,q,fe,se,ie,Le){R.onBeforeRender(D,q,fe,se,ie,Le),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ie.onBeforeRender(D,q,fe,se,R,Le),ie.transparent===!0&&ie.side===ri&&ie.forceSinglePass===!1?(ie.side=xn,ie.needsUpdate=!0,D.renderBufferDirect(fe,q,se,ie,R,Le),ie.side=Sr,ie.needsUpdate=!0,D.renderBufferDirect(fe,q,se,ie,R,Le),ie.side=ri):D.renderBufferDirect(fe,q,se,ie,R,Le),R.onAfterRender(D,q,fe,se,ie,Le)}function fs(R,q,fe){q.isScene!==!0&&(q=At);const se=T.get(R),ie=I.state.lights,Le=I.state.shadowsArray,ke=ie.state.version,Pe=Ce.getParameters(R,ie.state,Le,q,fe),Fe=Ce.getProgramCacheKey(Pe);let et=se.programs;se.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?q.environment:null,se.fog=q.fog;const it=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;se.envMap=me.get(R.envMap||se.environment,it),se.envMapRotation=se.environment!==null&&R.envMap===null?q.environmentRotation:R.envMapRotation,et===void 0&&(R.addEventListener("dispose",Rt),et=new Map,se.programs=et);let pt=et.get(Fe);if(pt!==void 0){if(se.currentProgram===pt&&se.lightsStateVersion===ke)return pl(R,Pe),pt}else Pe.uniforms=Ce.getUniforms(R),R.onBeforeCompile(Pe,D),pt=Ce.acquireProgram(Pe,Fe),et.set(Fe,pt),se.uniforms=Pe.uniforms;const tt=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(tt.clippingPlanes=Ae.uniform),pl(R,Pe),se.needsLights=vl(R),se.lightsStateVersion=ke,se.needsLights&&(tt.ambientLightColor.value=ie.state.ambient,tt.lightProbe.value=ie.state.probe,tt.directionalLights.value=ie.state.directional,tt.directionalLightShadows.value=ie.state.directionalShadow,tt.spotLights.value=ie.state.spot,tt.spotLightShadows.value=ie.state.spotShadow,tt.rectAreaLights.value=ie.state.rectArea,tt.ltc_1.value=ie.state.rectAreaLTC1,tt.ltc_2.value=ie.state.rectAreaLTC2,tt.pointLights.value=ie.state.point,tt.pointLightShadows.value=ie.state.pointShadow,tt.hemisphereLights.value=ie.state.hemi,tt.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,tt.spotLightMatrix.value=ie.state.spotLightMatrix,tt.spotLightMap.value=ie.state.spotLightMap,tt.pointShadowMatrix.value=ie.state.pointShadowMatrix),se.currentProgram=pt,se.uniformsList=null,pt}function ea(R){if(R.uniformsList===null){const q=R.currentProgram.getUniforms();R.uniformsList=cu.seqWithValue(q.seq,R.uniforms)}return R.uniformsList}function pl(R,q){const fe=T.get(R);fe.outputColorSpace=q.outputColorSpace,fe.batching=q.batching,fe.batchingColor=q.batchingColor,fe.instancing=q.instancing,fe.instancingColor=q.instancingColor,fe.instancingMorph=q.instancingMorph,fe.skinning=q.skinning,fe.morphTargets=q.morphTargets,fe.morphNormals=q.morphNormals,fe.morphColors=q.morphColors,fe.morphTargetsCount=q.morphTargetsCount,fe.numClippingPlanes=q.numClippingPlanes,fe.numIntersection=q.numClipIntersection,fe.vertexAlphas=q.vertexAlphas,fe.vertexTangents=q.vertexTangents,fe.toneMapping=q.toneMapping}function ml(R,q,fe,se,ie){q.isScene!==!0&&(q=At),Y.resetTextureUnits();const Le=q.fog,ke=se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial?q.environment:null,Pe=J===null?D.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:ss,Fe=se.isMeshStandardMaterial||se.isMeshLambertMaterial&&!se.envMap||se.isMeshPhongMaterial&&!se.envMap,et=me.get(se.envMap||ke,Fe),it=se.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pt=!!fe.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),tt=!!fe.morphAttributes.position,Ut=!!fe.morphAttributes.normal,zt=!!fe.morphAttributes.color;let kt=Qi;se.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(kt=D.toneMapping);const Ct=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Jt=Ct!==void 0?Ct.length:0,Ze=T.get(se),In=I.state.lights;if(De===!0&&(nt===!0||R!==G)){const en=R===G&&se.id===ne;Ae.setState(se,R,en)}let Mt=!1;se.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==In.state.version||Ze.outputColorSpace!==Pe||ie.isBatchedMesh&&Ze.batching===!1||!ie.isBatchedMesh&&Ze.batching===!0||ie.isBatchedMesh&&Ze.batchingColor===!0&&ie.colorTexture===null||ie.isBatchedMesh&&Ze.batchingColor===!1&&ie.colorTexture!==null||ie.isInstancedMesh&&Ze.instancing===!1||!ie.isInstancedMesh&&Ze.instancing===!0||ie.isSkinnedMesh&&Ze.skinning===!1||!ie.isSkinnedMesh&&Ze.skinning===!0||ie.isInstancedMesh&&Ze.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ze.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ze.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ze.instancingMorph===!1&&ie.morphTexture!==null||Ze.envMap!==et||se.fog===!0&&Ze.fog!==Le||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ae.numPlanes||Ze.numIntersection!==Ae.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==pt||Ze.morphTargets!==tt||Ze.morphNormals!==Ut||Ze.morphColors!==zt||Ze.toneMapping!==kt||Ze.morphTargetsCount!==Jt)&&(Mt=!0):(Mt=!0,Ze.__version=se.version);let zn=Ze.currentProgram;Mt===!0&&(zn=fs(se,q,ie));let Hn=!1,Zn=!1,Ar=!1;const It=zn.getUniforms(),lt=Ze.uniforms;if(Ye.useProgram(zn.program)&&(Hn=!0,Zn=!0,Ar=!0),se.id!==ne&&(ne=se.id,Zn=!0),Hn||G!==R){Ye.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),It.setValue(k,"projectionMatrix",R.projectionMatrix),It.setValue(k,"viewMatrix",R.matrixWorldInverse);const ci=It.map.cameraPosition;ci!==void 0&&ci.setValue(k,dt.setFromMatrixPosition(R.matrixWorld)),Et.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&It.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Zn=!0,Ar=!0)}if(Ze.needsLights&&(In.state.directionalShadowMap.length>0&&It.setValue(k,"directionalShadowMap",In.state.directionalShadowMap,Y),In.state.spotShadowMap.length>0&&It.setValue(k,"spotShadowMap",In.state.spotShadowMap,Y),In.state.pointShadowMap.length>0&&It.setValue(k,"pointShadowMap",In.state.pointShadowMap,Y)),ie.isSkinnedMesh){It.setOptional(k,ie,"bindMatrix"),It.setOptional(k,ie,"bindMatrixInverse");const en=ie.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),It.setValue(k,"boneTexture",en.boneTexture,Y))}ie.isBatchedMesh&&(It.setOptional(k,ie,"batchingTexture"),It.setValue(k,"batchingTexture",ie._matricesTexture,Y),It.setOptional(k,ie,"batchingIdTexture"),It.setValue(k,"batchingIdTexture",ie._indirectTexture,Y),It.setOptional(k,ie,"batchingColorTexture"),ie._colorsTexture!==null&&It.setValue(k,"batchingColorTexture",ie._colorsTexture,Y));const Si=fe.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&Ie.update(ie,fe,zn),(Zn||Ze.receiveShadow!==ie.receiveShadow)&&(Ze.receiveShadow=ie.receiveShadow,It.setValue(k,"receiveShadow",ie.receiveShadow)),(se.isMeshStandardMaterial||se.isMeshLambertMaterial||se.isMeshPhongMaterial)&&se.envMap===null&&q.environment!==null&&(lt.envMapIntensity.value=q.environmentIntensity),lt.dfgLUT!==void 0&&(lt.dfgLUT.value=aL()),Zn&&(It.setValue(k,"toneMappingExposure",D.toneMappingExposure),Ze.needsLights&&gl(lt,Ar),Le&&se.fog===!0&&Qe.refreshFogUniforms(lt,Le),Qe.refreshMaterialUniforms(lt,se,Re,Z,I.state.transmissionRenderTarget[R.id]),cu.upload(k,ea(Ze),lt,Y)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(cu.upload(k,ea(Ze),lt,Y),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&It.setValue(k,"center",ie.center),It.setValue(k,"modelViewMatrix",ie.modelViewMatrix),It.setValue(k,"normalMatrix",ie.normalMatrix),It.setValue(k,"modelMatrix",ie.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){const en=se.uniformsGroups;for(let ci=0,rr=en.length;ci<rr;ci++){const ta=en[ci];Ue.update(ta,zn),Ue.bind(ta,zn)}}return zn}function gl(R,q){R.ambientLightColor.needsUpdate=q,R.lightProbe.needsUpdate=q,R.directionalLights.needsUpdate=q,R.directionalLightShadows.needsUpdate=q,R.pointLights.needsUpdate=q,R.pointLightShadows.needsUpdate=q,R.spotLights.needsUpdate=q,R.spotLightShadows.needsUpdate=q,R.rectAreaLights.needsUpdate=q,R.hemisphereLights.needsUpdate=q}function vl(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return Q},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(R,q,fe){const se=T.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=q,T.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:fe,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,q){const fe=T.get(R);fe.__webglFramebuffer=q,fe.__useDefaultFramebuffer=q===void 0};const _l=k.createFramebuffer();this.setRenderTarget=function(R,q=0,fe=0){J=R,B=q,Q=fe;let se=null,ie=!1,Le=!1;if(R){const Pe=T.get(R);if(Pe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(k.FRAMEBUFFER,Pe.__webglFramebuffer),H.copy(R.viewport),$.copy(R.scissor),X=R.scissorTest,Ye.viewport(H),Ye.scissor($),Ye.setScissorTest(X),ne=-1;return}else if(Pe.__webglFramebuffer===void 0)Y.setupRenderTarget(R);else if(Pe.__hasExternalTextures)Y.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const it=R.depthTexture;if(Pe.__boundDepthTexture!==it){if(it!==null&&T.has(it)&&(R.width!==it.image.width||R.height!==it.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Y.setupDepthRenderbuffer(R)}}const Fe=R.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(Le=!0);const et=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(et[q])?se=et[q][fe]:se=et[q],ie=!0):R.samples>0&&Y.useMultisampledRTT(R)===!1?se=T.get(R).__webglMultisampledFramebuffer:Array.isArray(et)?se=et[fe]:se=et,H.copy(R.viewport),$.copy(R.scissor),X=R.scissorTest}else H.copy(oe).multiplyScalar(Re).floor(),$.copy(pe).multiplyScalar(Re).floor(),X=ce;if(fe!==0&&(se=_l),Ye.bindFramebuffer(k.FRAMEBUFFER,se)&&Ye.drawBuffers(R,se),Ye.viewport(H),Ye.scissor($),Ye.setScissorTest(X),ie){const Pe=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+q,Pe.__webglTexture,fe)}else if(Le){const Pe=q;for(let Fe=0;Fe<R.textures.length;Fe++){const et=T.get(R.textures[Fe]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Fe,et.__webglTexture,fe,Pe)}}else if(R!==null&&fe!==0){const Pe=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pe.__webglTexture,fe)}ne=-1},this.readRenderTargetPixels=function(R,q,fe,se,ie,Le,ke,Pe=0){if(!(R&&R.isWebGLRenderTarget)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke]),Fe){Ye.bindFramebuffer(k.FRAMEBUFFER,Fe);try{const et=R.textures[Pe],it=et.format,pt=et.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),!Et.textureFormatReadable(it)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Et.textureTypeReadable(pt)){Lt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=R.width-se&&fe>=0&&fe<=R.height-ie&&k.readPixels(q,fe,se,ie,be.convert(it),be.convert(pt),Le)}finally{const et=J!==null?T.get(J).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(R,q,fe,se,ie,Le,ke,Pe=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ke!==void 0&&(Fe=Fe[ke]),Fe)if(q>=0&&q<=R.width-se&&fe>=0&&fe<=R.height-ie){Ye.bindFramebuffer(k.FRAMEBUFFER,Fe);const et=R.textures[Pe],it=et.format,pt=et.type;if(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Pe),!Et.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Et.textureTypeReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const tt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.bufferData(k.PIXEL_PACK_BUFFER,Le.byteLength,k.STREAM_READ),k.readPixels(q,fe,se,ie,be.convert(it),be.convert(pt),0);const Ut=J!==null?T.get(J).__webglFramebuffer:null;Ye.bindFramebuffer(k.FRAMEBUFFER,Ut);const zt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await LR(k,zt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,tt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Le),k.deleteBuffer(tt),k.deleteSync(zt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,q=null,fe=0){const se=Math.pow(2,-fe),ie=Math.floor(R.image.width*se),Le=Math.floor(R.image.height*se),ke=q!==null?q.x:0,Pe=q!==null?q.y:0;Y.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,fe,0,0,ke,Pe,ie,Le),Ye.unbindTexture()};const Fu=k.createFramebuffer(),Ou=k.createFramebuffer();this.copyTextureToTexture=function(R,q,fe=null,se=null,ie=0,Le=0){let ke,Pe,Fe,et,it,pt,tt,Ut,zt;const kt=R.isCompressedTexture?R.mipmaps[Le]:R.image;if(fe!==null)ke=fe.max.x-fe.min.x,Pe=fe.max.y-fe.min.y,Fe=fe.isBox3?fe.max.z-fe.min.z:1,et=fe.min.x,it=fe.min.y,pt=fe.isBox3?fe.min.z:0;else{const lt=Math.pow(2,-ie);ke=Math.floor(kt.width*lt),Pe=Math.floor(kt.height*lt),R.isDataArrayTexture?Fe=kt.depth:R.isData3DTexture?Fe=Math.floor(kt.depth*lt):Fe=1,et=0,it=0,pt=0}se!==null?(tt=se.x,Ut=se.y,zt=se.z):(tt=0,Ut=0,zt=0);const Ct=be.convert(q.format),Jt=be.convert(q.type);let Ze;q.isData3DTexture?(Y.setTexture3D(q,0),Ze=k.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(Y.setTexture2DArray(q,0),Ze=k.TEXTURE_2D_ARRAY):(Y.setTexture2D(q,0),Ze=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment);const In=k.getParameter(k.UNPACK_ROW_LENGTH),Mt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zn=k.getParameter(k.UNPACK_SKIP_PIXELS),Hn=k.getParameter(k.UNPACK_SKIP_ROWS),Zn=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,kt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,kt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,et),k.pixelStorei(k.UNPACK_SKIP_ROWS,it),k.pixelStorei(k.UNPACK_SKIP_IMAGES,pt);const Ar=R.isDataArrayTexture||R.isData3DTexture,It=q.isDataArrayTexture||q.isData3DTexture;if(R.isDepthTexture){const lt=T.get(R),Si=T.get(q),en=T.get(lt.__renderTarget),ci=T.get(Si.__renderTarget);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,en.__webglFramebuffer),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let rr=0;rr<Fe;rr++)Ar&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(R).__webglTexture,ie,pt+rr),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(q).__webglTexture,Le,zt+rr)),k.blitFramebuffer(et,it,ke,Pe,tt,Ut,ke,Pe,k.DEPTH_BUFFER_BIT,k.NEAREST);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ie!==0||R.isRenderTargetTexture||T.has(R)){const lt=T.get(R),Si=T.get(q);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,Fu),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,Ou);for(let en=0;en<Fe;en++)Ar?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,lt.__webglTexture,ie,pt+en):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,lt.__webglTexture,ie),It?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Si.__webglTexture,Le,zt+en):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Si.__webglTexture,Le),ie!==0?k.blitFramebuffer(et,it,ke,Pe,tt,Ut,ke,Pe,k.COLOR_BUFFER_BIT,k.NEAREST):It?k.copyTexSubImage3D(Ze,Le,tt,Ut,zt+en,et,it,ke,Pe):k.copyTexSubImage2D(Ze,Le,tt,Ut,et,it,ke,Pe);Ye.bindFramebuffer(k.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else It?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ze,Le,tt,Ut,zt,ke,Pe,Fe,Ct,Jt,kt.data):q.isCompressedArrayTexture?k.compressedTexSubImage3D(Ze,Le,tt,Ut,zt,ke,Pe,Fe,Ct,kt.data):k.texSubImage3D(Ze,Le,tt,Ut,zt,ke,Pe,Fe,Ct,Jt,kt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Le,tt,Ut,ke,Pe,Ct,Jt,kt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Le,tt,Ut,kt.width,kt.height,Ct,kt.data):k.texSubImage2D(k.TEXTURE_2D,Le,tt,Ut,ke,Pe,Ct,Jt,kt);k.pixelStorei(k.UNPACK_ROW_LENGTH,In),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Mt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Hn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Zn),Le===0&&q.generateMipmaps&&k.generateMipmap(Ze),Ye.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&Y.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?Y.setTextureCube(R,0):R.isData3DTexture?Y.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Y.setTexture2DArray(R,0):Y.setTexture2D(R,0),Ye.unbindTexture()},this.resetState=function(){B=0,Q=0,J=null,Ye.reset(),Ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}var cL=(()=>{const n=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new nr;return t.setAttribute("position",new yi(n,3)),t.setAttribute("uv",new yi(e,2)),t})(),ls=class Fp{static get fullscreenGeometry(){return cL}constructor(e="Pass",t=new Np,r=new Du){this.name=e,this.renderer=null,this.scene=t,this.camera=r,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthBlit=!1,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Bi(Fp.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Np),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=sl){}render(e,t,r,o,a){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,r){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Vn||t instanceof Qo||t instanceof yn||t instanceof Fp)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},uL=class extends ls{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(n,e,t,r,o){const a=n.state.buffers.stencil;a.setLocked(!1),a.setTest(!1)}},fL=`#ifdef COLOR_WRITE
#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#endif
#ifdef DEPTH_WRITE
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}
#endif
#ifdef USE_WEIGHTS
uniform vec4 channelWeights;
#endif
uniform float opacity;varying vec2 vUv;void main(){
#ifdef COLOR_WRITE
vec4 texel=texture2D(inputBuffer,vUv);
#ifdef USE_WEIGHTS
texel*=channelWeights;
#endif
gl_FragColor=opacity*texel;
#ifdef COLOR_SPACE_CONVERSION
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
#else
gl_FragColor=vec4(0.0);
#endif
#ifdef DEPTH_WRITE
gl_FragDepth=readDepth(vUv);
#endif
}`,dL="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",hL=class extends Kn{constructor(){super({name:"CopyMaterial",defines:{COLOR_SPACE_CONVERSION:"1",DEPTH_PACKING:"0",COLOR_WRITE:"1"},uniforms:{inputBuffer:new nn(null),depthBuffer:new nn(null),channelWeights:new nn(null),opacity:new nn(1)},blending:Oi,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:fL,vertexShader:dL}),this.depthFunc=xu}get inputBuffer(){return this.uniforms.inputBuffer.value}set inputBuffer(n){const e=n!==null;this.colorWrite!==e&&(e?this.defines.COLOR_WRITE=!0:delete this.defines.COLOR_WRITE,this.colorWrite=e,this.needsUpdate=!0),this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){const e=n!==null;this.depthWrite!==e&&(e?this.defines.DEPTH_WRITE=!0:delete this.defines.DEPTH_WRITE,this.depthTest=e,this.depthWrite=e,this.needsUpdate=!0),this.uniforms.depthBuffer.value=n}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}get colorSpaceConversion(){return this.defines.COLOR_SPACE_CONVERSION!==void 0}set colorSpaceConversion(n){this.colorSpaceConversion!==n&&(n?this.defines.COLOR_SPACE_CONVERSION=!0:delete this.defines.COLOR_SPACE_CONVERSION,this.needsUpdate=!0)}get channelWeights(){return this.uniforms.channelWeights.value}set channelWeights(n){n!==null?(this.defines.USE_WEIGHTS="1",this.uniforms.channelWeights.value=n):delete this.defines.USE_WEIGHTS,this.needsUpdate=!0}setInputBuffer(n){this.uniforms.inputBuffer.value=n}getOpacity(n){return this.uniforms.opacity.value}setOpacity(n){this.uniforms.opacity.value=n}},pL=class extends ls{constructor(n,e=!0){super("CopyPass"),this.fullscreenMaterial=new hL,this.needsSwap=!1,this.renderTarget=n,n===void 0&&(this.renderTarget=new Vn(1,1,{minFilter:Qt,magFilter:Qt,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(n){this.autoResize=n}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(n){this.autoResize=n}render(n,e,t,r,o){this.fullscreenMaterial.inputBuffer=e.texture,n.setRenderTarget(this.renderToScreen?null:this.renderTarget),n.render(this.scene,this.camera)}setSize(n,e){this.autoResize&&this.renderTarget.setSize(n,e)}initialize(n,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Ln?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":n!==null&&n.outputColorSpace===rn&&(this.renderTarget.texture.colorSpace=rn))}},cx=new Ft,YS=class extends ls{constructor(n=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=n,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(n,e,t){this.color=n,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(n){this.overrideClearColor=n}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(n){this.overrideClearAlpha=n}render(n,e,t,r,o){const a=this.overrideClearColor,c=this.overrideClearAlpha,u=n.getClearAlpha(),d=a!==null,h=c>=0;d?(n.getClearColor(cx),n.setClearColor(a,h?c:u)):h&&n.setClearAlpha(c),n.setRenderTarget(this.renderToScreen?null:e),n.clear(this.color,this.depth,this.stencil),d?n.setClearColor(cx,u):h&&n.setClearAlpha(u)}},mL=class extends ls{constructor(n,e){super("MaskPass",n,e),this.needsSwap=!1,this.clearPass=new YS(!1,!1,!0),this.inverse=!1}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get inverted(){return this.inverse}set inverted(n){this.inverse=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(n){this.inverted=n}render(n,e,t,r,o){const a=n.getContext(),c=n.state.buffers,u=this.scene,d=this.camera,h=this.clearPass,p=this.inverted?0:1,v=1-p;c.color.setMask(!1),c.depth.setMask(!1),c.color.setLocked(!0),c.depth.setLocked(!0),c.stencil.setTest(!0),c.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),c.stencil.setFunc(a.ALWAYS,p,4294967295),c.stencil.setClear(v),c.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?h.render(n,null):(h.render(n,e),h.render(n,t))),this.renderToScreen?(n.setRenderTarget(null),n.render(u,d)):(n.setRenderTarget(e),n.render(u,d),n.setRenderTarget(t),n.render(u,d)),c.color.setLocked(!1),c.depth.setLocked(!1),c.stencil.setLocked(!1),c.stencil.setFunc(a.EQUAL,1,4294967295),c.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),c.stencil.setLocked(!0)}},ph=1/1e3,gL=1e3,vL=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(n){typeof document<"u"&&document.hidden!==void 0&&(n?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=n)}get delta(){return this._delta*ph}get fixedDelta(){return this._fixedDelta*ph}set fixedDelta(n){this._fixedDelta=n*gL}get elapsed(){return this._elapsed*ph}update(n){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(n!==void 0?n:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(n){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},ux=class{constructor(n=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:r=0,frameBufferType:o}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,o,r),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new pL,this.depthTexture=null,this.depthRenderTarget=null,this.passes=[],this.timer=new vL,this.autoRenderToScreen=!0,this.setRenderer(n)}get multisampling(){return this.inputBuffer.samples}set multisampling(n){const e=this.inputBuffer,t=this.multisampling;t>0&&n>0?(this.inputBuffer.samples=n,this.outputBuffer.samples=n,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==n&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,n),this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(n){if(this.renderer=n,n!==null){const e=n.getSize(new St),t=n.getContext().getContextAttributes().alpha,r=this.inputBuffer.texture.type;r===Ln&&n.outputColorSpace===rn&&(this.inputBuffer.texture.colorSpace=rn,this.outputBuffer.texture.colorSpace=rn,this.inputBuffer.dispose(),this.outputBuffer.dispose()),n.autoClear=!1,this.setSize(e.width,e.height);for(const o of this.passes)o.initialize(n,t,r)}}replaceRenderer(n,e=!0){const t=this.renderer,r=t.domElement.parentNode;return this.setRenderer(n),e&&r!==null&&(r.removeChild(t.domElement),r.appendChild(n.domElement)),t}createDepthTexture(){const n=this.inputBuffer,e=new jo;this.depthTexture=e,n.stencilBuffer?(e.format=ts,e.type=Go):e.type=Ii;const t=e.clone();return t.name="EffectComposer.StableDepth",this.depthRenderTarget=new Vn(n.width,n.height,{depthBuffer:!0,stencilBuffer:n.stencilBuffer,depthTexture:t}),t}blitDepthBuffer(n){const e=this.renderer,t=this.depthRenderTarget,r=e.properties,o=e.getContext();e.setRenderTarget(t);const a=r.get(n).__webglFramebuffer,c=r.get(t).__webglFramebuffer,u=n.stencilBuffer?o.DEPTH_BUFFER_BIT|o.STENCIL_BUFFER_BIT:o.DEPTH_BUFFER_BIT;o.bindFramebuffer(o.READ_FRAMEBUFFER,a),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,c),o.blitFramebuffer(0,0,n.width,n.height,0,0,t.width,t.height,u,o.NEAREST),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),e.setRenderTarget(null)}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.depthRenderTarget.dispose(),this.depthRenderTarget=null,this.inputBuffer.depthTexture=null,this.outputBuffer.depthTexture=null;for(const n of this.passes)n.setDepthTexture(null)}}createBuffer(n,e,t,r){const o=this.renderer,a=o===null?new St:o.getDrawingBufferSize(new St),c={minFilter:Qt,magFilter:Qt,stencilBuffer:e,depthBuffer:n,type:t},u=new Vn(a.width,a.height,c);return r>0&&(u.samples=r),t===Ln&&o!==null&&o.outputColorSpace===rn&&(u.texture.colorSpace=rn),u.texture.name="EffectComposer.Buffer",u.texture.generateMipmaps=!1,u}setMainScene(n){for(const e of this.passes)e.mainScene=n}setMainCamera(n){for(const e of this.passes)e.mainCamera=n}addPass(n,e){const t=this.passes,r=this.renderer,o=r.getDrawingBufferSize(new St),a=r.getContext().getContextAttributes().alpha,c=this.inputBuffer.texture.type;if(n.renderer=r,n.setSize(o.width,o.height),n.initialize(r,a,c),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),n.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,n):t.push(n),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),n.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const u=this.createDepthTexture();for(n of t)n.setDepthTexture(u)}else{const u=this.depthRenderTarget.depthTexture;n.setDepthTexture(u)}}removePass(n){const e=this.passes,t=e.indexOf(n);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const a=(u,d)=>u||d.needsDepthTexture;if(!e.reduce(a,!1)){const u=this.depthRenderTarget.depthTexture;n.getDepthTexture()===u&&n.setDepthTexture(null),this.deleteDepthTexture()}}this.autoRenderToScreen&&t===e.length&&(n.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const n=this.passes;this.deleteDepthTexture(),n.length>0&&(this.autoRenderToScreen&&(n[n.length-1].renderToScreen=!1),this.passes=[])}render(n){const e=this.renderer,t=this.copyPass;let r=this.inputBuffer,o=this.outputBuffer,a,c=!1;n===void 0&&(this.timer.update(),n=this.timer.getDelta());for(const u of this.passes)if(u.enabled){if(r.depthTexture=this.depthTexture,o.depthTexture=null,u.render(e,r,o,n,c),u.needsDepthBlit&&this.depthRenderTarget!==null&&this.blitDepthBuffer(r),u.needsSwap){if(c){t.renderToScreen=u.renderToScreen;const d=e.getContext(),h=e.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),t.render(e,r,o,n,c),h.setFunc(d.EQUAL,1,4294967295)}a=r,r=o,o=a}u instanceof mL?c=!0:u instanceof uL&&(c=!1)}}setSize(n,e,t){const r=this.renderer,o=r.getSize(new St);(n===void 0||e===void 0)&&(n=o.width,e=o.height),(o.width!==n||o.height!==e)&&r.setSize(n,e,t);const a=r.getDrawingBufferSize(new St);this.inputBuffer.setSize(a.width,a.height),this.outputBuffer.setSize(a.width,a.height),this.depthRenderTarget!==null&&this.depthRenderTarget.setSize(a.width,a.height);for(const c of this.passes)c.setSize(a.width,a.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const n of this.passes)n.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),ls.fullscreenGeometry.dispose()}},Gs={NONE:0,DEPTH:1,CONVOLUTION:2},Nt={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},_L=class{constructor(){this.shaderParts=new Map([[Nt.FRAGMENT_HEAD,null],[Nt.FRAGMENT_MAIN_UV,null],[Nt.FRAGMENT_MAIN_IMAGE,null],[Nt.VERTEX_HEAD,null],[Nt.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Gs.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=ss}},mh=!1,fx=class{constructor(n=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(n),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case ri:t=this.materialsFlatShadedDoubleSide;break;case xn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case ri:t=this.materialsDoubleSide;break;case xn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(n){if(!(n instanceof Kn))return n.clone();const e=n.uniforms,t=new Map;for(const o in e){const a=e[o].value;a.isRenderTargetTexture&&(e[o].value=null,t.set(o,a))}const r=n.clone();for(const o of t)e[o[0]].value=o[1],r.uniforms[o[0]].value=o[1];return r}setMaterial(n){if(this.disposeMaterials(),this.material=n,n!==null){const e=this.materials=[this.cloneMaterial(n),this.cloneMaterial(n),this.cloneMaterial(n)];for(const t of e)t.uniforms=Object.assign({},n.uniforms),t.side=Sr;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},n.uniforms),r.side=xn,r}),this.materialsDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},n.uniforms),r.side=ri,r}),this.materialsFlatShaded=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},n.uniforms),r.flatShading=!0,r}),this.materialsFlatShadedBackSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},n.uniforms),r.flatShading=!0,r.side=xn,r}),this.materialsFlatShadedDoubleSide=e.map(t=>{const r=this.cloneMaterial(t);return r.uniforms=Object.assign({},n.uniforms),r.flatShading=!0,r.side=ri,r})}}render(n,e,t){const r=n.shadowMap.enabled;if(n.shadowMap.enabled=!1,mh){const o=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),n.render(e,t);for(const a of o)a[0].material=a[1];this.meshCount!==o.size&&o.clear()}else{const o=e.overrideMaterial;e.overrideMaterial=this.material,n.render(e,t),e.overrideMaterial=o}n.shadowMap.enabled=r}disposeMaterials(){if(this.material!==null){const n=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of n)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return mh}static set workaroundEnabled(n){mh=n}},Tt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},xL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",yL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,src.a*opacity);}",SL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=(dst.rgb+src.rgb)*0.5;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ML="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.xy,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",EL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/max(b,1e-9))),vec3(1.0),step(1.0,a));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",TL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=dst.rgb,b=src.rgb;vec3 c=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",wL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",AL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=abs(dst.rgb-src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",CL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb/max(src.rgb,1e-9);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",RL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-2.0*dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",bL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb,1.0);vec3 b=min(src.rgb,1.0);vec3 c=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",PL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=step(1.0,dst.rgb+src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",DL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(b.x,a.yz));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",LL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",NL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=src.rgb*max(1.0-dst.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",IL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb,src.rgb);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",UL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",FL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=min(dst.rgb+src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",OL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=clamp(2.0*src.rgb+dst.rgb-1.0,0.0,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",BL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.xy,b.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",kL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb*src.rgb;return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",VL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(1.0-abs(1.0-dst.rgb-src.rgb),0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",zL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return mix(dst,src,opacity);}",HL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=2.0*src.rgb*dst.rgb;vec3 b=1.0-2.0*(1.0-src.rgb)*(1.0-dst.rgb);vec3 c=mix(a,b,step(0.5,dst.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",GL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 c=mix(mix(src2,dst.rgb,step(0.5*dst.rgb,src.rgb)),max(src2-1.0,vec3(0.0)),step(dst.rgb,src2-1.0));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",WL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=min(dst.rgb*dst.rgb/max(1.0-src.rgb,1e-9),1.0);vec3 c=mix(a,src.rgb,step(1.0,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",jL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 a=RGBToHSL(dst.rgb);vec3 b=RGBToHSL(src.rgb);vec3 c=HSLToRGB(vec3(a.x,b.y,a.z));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",XL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=dst.rgb+src.rgb-min(dst.rgb*src.rgb,1.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",$L="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 src2=2.0*src.rgb;vec3 d=dst.rgb+(src2-1.0);vec3 w=step(0.5,src.rgb);vec3 a=dst.rgb-(1.0-src2)*dst.rgb*(1.0-dst.rgb);vec3 b=mix(d*(sqrt(dst.rgb)-dst.rgb),d*dst.rgb*((16.0*dst.rgb-12.0)*dst.rgb+3.0),w*(1.0-step(0.25,dst.rgb)));vec3 c=mix(a,b,w);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",YL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){return src;}",qL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=max(dst.rgb-src.rgb,0.0);return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",KL="vec4 blend(const in vec4 dst,const in vec4 src,const in float opacity){vec3 c=mix(max(1.0-min((1.0-dst.rgb)/(2.0*src.rgb),1.0),0.0),min(dst.rgb/(2.0*(1.0-src.rgb)),1.0),step(0.5,src.rgb));return mix(dst,vec4(c,max(dst.a,src.a)),opacity);}",ZL=new Map([[Tt.ADD,xL],[Tt.ALPHA,yL],[Tt.AVERAGE,SL],[Tt.COLOR,ML],[Tt.COLOR_BURN,EL],[Tt.COLOR_DODGE,TL],[Tt.DARKEN,wL],[Tt.DIFFERENCE,AL],[Tt.DIVIDE,CL],[Tt.DST,null],[Tt.EXCLUSION,RL],[Tt.HARD_LIGHT,bL],[Tt.HARD_MIX,PL],[Tt.HUE,DL],[Tt.INVERT,LL],[Tt.INVERT_RGB,NL],[Tt.LIGHTEN,IL],[Tt.LINEAR_BURN,UL],[Tt.LINEAR_DODGE,FL],[Tt.LINEAR_LIGHT,OL],[Tt.LUMINOSITY,BL],[Tt.MULTIPLY,kL],[Tt.NEGATION,VL],[Tt.NORMAL,zL],[Tt.OVERLAY,HL],[Tt.PIN_LIGHT,GL],[Tt.REFLECT,WL],[Tt.SATURATION,jL],[Tt.SCREEN,XL],[Tt.SOFT_LIGHT,$L],[Tt.SRC,YL],[Tt.SUBTRACT,qL],[Tt.VIVID_LIGHT,KL]]),QL=class extends as{constructor(n,e=1){super(),this._blendFunction=n,this.opacity=new nn(e)}getOpacity(){return this.opacity.value}setOpacity(n){this.opacity.value=n}get blendFunction(){return this._blendFunction}set blendFunction(n){this._blendFunction=n,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(n){this.blendFunction=n}getShaderCode(){return ZL.get(this.blendFunction)}},qS=class extends as{constructor(n,e,{attributes:t=Gs.NONE,blendFunction:r=Tt.NORMAL,defines:o=new Map,uniforms:a=new Map,extensions:c=null,vertexShader:u=null}={}){super(),this.name=n,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=u,this.defines=o,this.uniforms=a,this.extensions=c,this.blendMode=new QL(r),this.blendMode.addEventListener("change",d=>this.setChanged()),this._inputColorSpace=ss,this._outputColorSpace=Yi}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(n){this._inputColorSpace=n,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(n){this._outputColorSpace=n,this.setChanged()}set mainScene(n){}set mainCamera(n){}getName(){return this.name}setRenderer(n){this.renderer=n}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(n){this.attributes=n,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(n){this.fragmentShader=n,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(n){this.vertexShader=n,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(n,e=sl){}update(n,e,t){}setSize(n,e){}initialize(n,e,t){}dispose(){for(const n of Object.keys(this)){const e=this[n];(e instanceof Vn||e instanceof Qo||e instanceof yn||e instanceof ls)&&this[n].dispose()}}},dx=class extends ls{constructor(n,e,t=null){super("RenderPass",n,e),this.needsSwap=!1,this.needsDepthBlit=!0,this.clearPass=new YS,this.overrideMaterialManager=t===null?null:new fx(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(n){this.scene=n}set mainCamera(n){this.camera=n}get renderToScreen(){return super.renderToScreen}set renderToScreen(n){super.renderToScreen=n,this.clearPass.renderToScreen=n}get overrideMaterial(){const n=this.overrideMaterialManager;return n!==null?n.material:null}set overrideMaterial(n){const e=this.overrideMaterialManager;n!==null?e!==null?e.setMaterial(n):this.overrideMaterialManager=new fx(n):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(n){this.overrideMaterial=n}get clear(){return this.clearPass.enabled}set clear(n){this.clearPass.enabled=n}getSelection(){return this.selection}setSelection(n){this.selection=n}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(n){this.ignoreBackground=n}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(n){this.skipShadowMapUpdate=n}getClearPass(){return this.clearPass}render(n,e,t,r,o){const a=this.scene,c=this.camera,u=this.selection,d=c.layers.mask,h=a.background,p=n.shadowMap.autoUpdate,v=this.renderToScreen?null:e;u!==null&&c.layers.set(u.getLayer()),this.skipShadowMapUpdate&&(n.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(a.background=null),this.clearPass.enabled&&this.clearPass.render(n,e),n.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(n,a,c):n.render(a,c),c.layers.mask=d,a.background=h,n.shadowMap.autoUpdate=p}},JL=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
float depth=unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
float depth=texture2D(depthBuffer,uv).r;
#endif
#if defined(USE_LOGARITHMIC_DEPTH_BUFFER) || defined(LOG_DEPTH)
float d=pow(2.0,depth*log2(cameraFar+1.0))-1.0;float a=cameraFar/(cameraFar-cameraNear);float b=cameraFar*cameraNear/(cameraNear-cameraFar);depth=a+b/d;
#elif defined(USE_REVERSED_DEPTH_BUFFER)
depth=1.0-depth;
#endif
return depth;}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,eN="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",tN=class extends Kn{constructor(n,e,t,r,o=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:bu.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new nn(null),depthBuffer:new nn(null),resolution:new nn(new St),texelSize:new nn(new St),cameraNear:new nn(.3),cameraFar:new nn(1e3),aspect:new nn(1),time:new nn(0)},blending:Oi,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:o}),n&&this.setShaderParts(n),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(r)}set inputBuffer(n){this.uniforms.inputBuffer.value=n}setInputBuffer(n){this.uniforms.inputBuffer.value=n}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(n){this.uniforms.depthBuffer.value=n}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(n){this.defines.DEPTH_PACKING=n.toFixed(0),this.needsUpdate=!0}setDepthBuffer(n,e=sl){this.depthBuffer=n,this.depthPacking=e}setShaderData(n){this.setShaderParts(n.shaderParts),this.setDefines(n.defines),this.setUniforms(n.uniforms),this.setExtensions(n.extensions)}setShaderParts(n){return this.fragmentShader=JL.replace(Nt.FRAGMENT_HEAD,n.get(Nt.FRAGMENT_HEAD)||"").replace(Nt.FRAGMENT_MAIN_UV,n.get(Nt.FRAGMENT_MAIN_UV)||"").replace(Nt.FRAGMENT_MAIN_IMAGE,n.get(Nt.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=eN.replace(Nt.VERTEX_HEAD,n.get(Nt.VERTEX_HEAD)||"").replace(Nt.VERTEX_MAIN_SUPPORT,n.get(Nt.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(n){for(const e of n.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(n){for(const e of n.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(n){this.extensions={};for(const e of n)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(n){this.encodeOutput!==n&&(n?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(n){return this.encodeOutput}setOutputEncodingEnabled(n){this.encodeOutput=n}get time(){return this.uniforms.time.value}set time(n){this.uniforms.time.value=n}setDeltaTime(n){this.uniforms.time.value+=n}adoptCameraSettings(n){this.copyCameraSettings(n)}copyCameraSettings(n){n&&(this.uniforms.cameraNear.value=n.near,this.uniforms.cameraFar.value=n.far,n instanceof vi?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(n,e){const t=this.uniforms;t.resolution.value.set(n,e),t.texelSize.value.set(1/n,1/e),t.aspect.value=n/e}static get Section(){return Nt}};function hx(n,e,t){for(const r of e){const o="$1"+n+r.charAt(0).toUpperCase()+r.slice(1),a=new RegExp("([^\\.])(\\b"+r+"\\b)","g");for(const c of t.entries())c[1]!==null&&t.set(c[0],c[1].replace(a,o))}}function nN(n,e,t){let r=e.getFragmentShader(),o=e.getVertexShader();const a=r!==void 0&&/mainImage/.test(r),c=r!==void 0&&/mainUv/.test(r);if(t.attributes|=e.getAttributes(),r===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(c&&(t.attributes&Gs.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!a&&!c)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const u=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,d=t.shaderParts;let h=d.get(Nt.FRAGMENT_HEAD)||"",p=d.get(Nt.FRAGMENT_MAIN_UV)||"",v=d.get(Nt.FRAGMENT_MAIN_IMAGE)||"",g=d.get(Nt.VERTEX_HEAD)||"",_=d.get(Nt.VERTEX_MAIN_SUPPORT)||"";const M=new Set,E=new Set;if(c&&(p+=`	${n}MainUv(UV);
`,t.uvTransformation=!0),o!==null&&/mainSupport/.test(o)){const w=/mainSupport *\([\w\s]*?uv\s*?\)/.test(o);_+=`	${n}MainSupport(`,_+=w?`vUv);
`:`);
`;for(const b of o.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const P of b[1].split(/\s*,\s*/))t.varyings.add(P),M.add(P),E.add(P);for(const b of o.matchAll(u))E.add(b[1])}for(const w of r.matchAll(u))E.add(w[1]);for(const w of e.defines.keys())E.add(w.replace(/\([\w\s,]*\)/g,""));for(const w of e.uniforms.keys())E.add(w);E.delete("while"),E.delete("for"),E.delete("if"),e.uniforms.forEach((w,b)=>t.uniforms.set(n+b.charAt(0).toUpperCase()+b.slice(1),w)),e.defines.forEach((w,b)=>t.defines.set(n+b.charAt(0).toUpperCase()+b.slice(1),w));const S=new Map([["fragment",r],["vertex",o]]);hx(n,E,t.defines),hx(n,E,S),r=S.get("fragment"),o=S.get("vertex");const y=e.blendMode;if(t.blendModes.set(y.blendFunction,y),a){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(v+=e.inputColorSpace===rn?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Yi?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const w=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${n}MainImage(color0, UV, `,(t.attributes&Gs.DEPTH)!==0&&w.test(r)&&(v+="depth, ",t.readDepth=!0),v+=`color1);
	`;const b=n+"BlendOpacity";t.uniforms.set(b,y.opacity),v+=`color0 = blend${y.blendFunction}(color0, color1, ${b});

	`,h+=`uniform float ${b};

`}if(h+=r+`
`,o!==null&&(g+=o+`
`),d.set(Nt.FRAGMENT_HEAD,h),d.set(Nt.FRAGMENT_MAIN_UV,p),d.set(Nt.FRAGMENT_MAIN_IMAGE,v),d.set(Nt.VERTEX_HEAD,g),d.set(Nt.VERTEX_MAIN_SUPPORT,_),e.extensions!==null)for(const w of e.extensions)t.extensions.add(w)}}var px=class extends ls{constructor(n,...e){super("EffectPass"),this.fullscreenMaterial=new tN(null,null,null,n),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(n){for(const e of this.effects)e.mainScene=n}set mainCamera(n){this.fullscreenMaterial.copyCameraSettings(n);for(const e of this.effects)e.mainCamera=n}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(n){this.fullscreenMaterial.encodeOutput=n}get dithering(){return this.fullscreenMaterial.dithering}set dithering(n){const e=this.fullscreenMaterial;e.dithering=n,e.needsUpdate=!0}setEffects(n){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=n.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const n=new _L;let e=0;for(const c of this.effects)if(c.blendMode.blendFunction===Tt.DST)n.attributes|=c.getAttributes()&Gs.DEPTH;else{if((n.attributes&c.getAttributes()&Gs.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${c.name})`);nN("e"+e++,c,n)}let t=n.shaderParts.get(Nt.FRAGMENT_HEAD),r=n.shaderParts.get(Nt.FRAGMENT_MAIN_IMAGE),o=n.shaderParts.get(Nt.FRAGMENT_MAIN_UV);const a=/\bblend\b/g;for(const c of n.blendModes.values())t+=c.getShaderCode().replace(a,`blend${c.blendFunction}`)+`
`;(n.attributes&Gs.DEPTH)!==0?(n.readDepth&&(r=`float depth = readDepth(UV);

	`+r),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,n.colorSpace===rn&&(r+=`color0 = sRGBToLinear(color0);
	`),n.uvTransformation?(o=`vec2 transformedUv = vUv;
`+o,n.defines.set("UV","transformedUv")):n.defines.set("UV","vUv"),n.shaderParts.set(Nt.FRAGMENT_HEAD,t),n.shaderParts.set(Nt.FRAGMENT_MAIN_IMAGE,r),n.shaderParts.set(Nt.FRAGMENT_MAIN_UV,o);for(const[c,u]of n.shaderParts)u!==null&&n.shaderParts.set(c,u.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(n)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(n,e=sl){this.fullscreenMaterial.depthBuffer=n,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(n,e)}render(n,e,t,r,o){for(const a of this.effects)a.update(n,e,r);if(!this.skipRendering||this.renderToScreen){const a=this.fullscreenMaterial;a.inputBuffer=e.texture,a.time+=r*this.timeScale,n.setRenderTarget(this.renderToScreen?null:t),n.render(this.scene,this.camera)}}setSize(n,e){this.fullscreenMaterial.setSize(n,e);for(const t of this.effects)t.setSize(n,e)}initialize(n,e,t){this.renderer=n;for(const r of this.effects)r.initialize(n,e,t);this.updateMaterial(),t!==void 0&&t!==Ln&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const n of this.effects)n.removeEventListener("change",this.listener),n.dispose()}handleEvent(n){n.type==="change"&&this.recompile()}};const iN=()=>{const e=document.createElement("canvas");e.width=64,e.height=64;const t=e.getContext("2d");if(!t)throw new Error("2D context not available");t.fillStyle="black",t.fillRect(0,0,e.width,e.height);const r=new yn(e);r.minFilter=Qt,r.magFilter=Qt,r.generateMipmaps=!1;const o=[];let a=null;const c=64;let u=.1*64;const d=1/c,h=()=>{t.fillStyle="black",t.fillRect(0,0,e.width,e.height)},p=_=>{const M={x:_.x*64,y:(1-_.y)*64};let E=1;const S=P=>Math.sin(P*Math.PI/2),y=P=>-P*(P-2);_.age<c*.3?E=S(_.age/(c*.3)):E=y(1-(_.age-c*.3)/(c*.7))||0,E*=_.force;const w=`${(_.vx+1)/2*255}, ${(_.vy+1)/2*255}, ${E*255}`,b=320;t.shadowOffsetX=b,t.shadowOffsetY=b,t.shadowBlur=u,t.shadowColor=`rgba(${w},${.22*E})`,t.beginPath(),t.fillStyle="rgba(255,0,0,1)",t.arc(M.x-b,M.y-b,u,0,Math.PI*2),t.fill()};return{canvas:e,texture:r,addTouch:_=>{let M=0,E=0,S=0;if(a){const y=_.x-a.x,w=_.y-a.y;if(y===0&&w===0)return;const b=y*y+w*w,P=Math.sqrt(b);E=y/(P||1),S=w/(P||1),M=Math.min(b*1e4,1)}a={x:_.x,y:_.y},o.push({x:_.x,y:_.y,age:0,force:M,vx:E,vy:S})},update:()=>{h();for(let _=o.length-1;_>=0;_--){const M=o[_],E=M.force*d*(1-M.age/c);M.x+=M.vx*E,M.y+=M.vy*E,M.age++,M.age>c&&o.splice(_,1)}for(let _=0;_<o.length;_++)p(o[_]);r.needsUpdate=!0},set radiusScale(_){u=.1*64*_},get radiusScale(){return u/(.1*64)},size:64}},rN=(n,e)=>{const t=`
    uniform sampler2D uTexture;
    uniform float uStrength;
    uniform float uTime;
    uniform float uFreq;

    void mainUv(inout vec2 uv) {
      vec4 tex = texture2D(uTexture, uv);
      float vx = tex.r * 2.0 - 1.0;
      float vy = tex.g * 2.0 - 1.0;
      float intensity = tex.b;

      float wave = 0.5 + 0.5 * sin(uTime * uFreq + intensity * 6.2831853);

      float amt = uStrength * intensity * wave;

      uv += vec2(vx, vy) * amt;
    }
    `;return new qS("LiquidEffect",t,{uniforms:new Map([["uTexture",new nn(n)],["uStrength",new nn(e?.strength??.025)],["uTime",new nn(0)],["uFreq",new nn(e?.freq??4.5)]])})},mx={square:0,circle:1,triangle:2,diamond:3},sN=`
void main() {
  gl_Position = vec4(position, 1.0);
}
`,oN=`
precision highp float;

uniform vec3  uColor;
uniform vec2  uResolution;
uniform float uTime;
uniform float uPixelSize;
uniform float uScale;
uniform float uDensity;
uniform float uPixelJitter;
uniform int   uEnableRipples;
uniform float uRippleSpeed;
uniform float uRippleThickness;
uniform float uRippleIntensity;
uniform float uEdgeFade;

uniform int   uShapeType;
const int SHAPE_SQUARE   = 0;
const int SHAPE_CIRCLE   = 1;
const int SHAPE_TRIANGLE = 2;
const int SHAPE_DIAMOND  = 3;

const int   MAX_CLICKS = 10;

uniform vec2  uClickPos  [MAX_CLICKS];
uniform float uClickTimes[MAX_CLICKS];

out vec4 fragColor;

float Bayer2(vec2 a) {
  a = floor(a);
  return fract(a.x / 2. + a.y * a.y * .75);
}
#define Bayer4(a) (Bayer2(.5*(a))*0.25 + Bayer2(a))
#define Bayer8(a) (Bayer4(.5*(a))*0.25 + Bayer2(a))

#define FBM_OCTAVES     5
#define FBM_LACUNARITY  1.25
#define FBM_GAIN        1.0

float hash11(float n){ return fract(sin(n)*43758.5453); }

float vnoise(vec3 p){
  vec3 ip = floor(p);
  vec3 fp = fract(p);
  float n000 = hash11(dot(ip + vec3(0.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n100 = hash11(dot(ip + vec3(1.0,0.0,0.0), vec3(1.0,57.0,113.0)));
  float n010 = hash11(dot(ip + vec3(0.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n110 = hash11(dot(ip + vec3(1.0,1.0,0.0), vec3(1.0,57.0,113.0)));
  float n001 = hash11(dot(ip + vec3(0.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n101 = hash11(dot(ip + vec3(1.0,0.0,1.0), vec3(1.0,57.0,113.0)));
  float n011 = hash11(dot(ip + vec3(0.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  float n111 = hash11(dot(ip + vec3(1.0,1.0,1.0), vec3(1.0,57.0,113.0)));
  vec3 w = fp*fp*fp*(fp*(fp*6.0-15.0)+10.0);
  float x00 = mix(n000, n100, w.x);
  float x10 = mix(n010, n110, w.x);
  float x01 = mix(n001, n101, w.x);
  float x11 = mix(n011, n111, w.x);
  float y0  = mix(x00, x10, w.y);
  float y1  = mix(x01, x11, w.y);
  return mix(y0, y1, w.z) * 2.0 - 1.0;
}

float fbm2(vec2 uv, float t){
  vec3 p = vec3(uv * uScale, t);
  float amp = 1.0;
  float freq = 1.0;
  float sum = 1.0;
  for (int i = 0; i < FBM_OCTAVES; ++i){
    sum  += amp * vnoise(p * freq);
    freq *= FBM_LACUNARITY;
    amp  *= FBM_GAIN;
  }
  return sum * 0.5 + 0.5;
}

float maskCircle(vec2 p, float cov){
  float r = sqrt(cov) * .25;
  float d = length(p - 0.5) - r;
  float aa = 0.5 * fwidth(d);
  return cov * (1.0 - smoothstep(-aa, aa, d * 2.0));
}

float maskTriangle(vec2 p, vec2 id, float cov){
  bool flip = mod(id.x + id.y, 2.0) > 0.5;
  if (flip) p.x = 1.0 - p.x;
  float r = sqrt(cov);
  float d  = p.y - r*(1.0 - p.x);
  float aa = fwidth(d);
  return cov * clamp(0.5 - d/aa, 0.0, 1.0);
}

float maskDiamond(vec2 p, float cov){
  float r = sqrt(cov) * 0.564;
  return step(abs(p.x - 0.49) + abs(p.y - 0.49), r);
}

void main(){
  float pixelSize = uPixelSize;
  vec2 fragCoord = gl_FragCoord.xy - uResolution * .5;
  float aspectRatio = uResolution.x / uResolution.y;

  vec2 pixelId = floor(fragCoord / pixelSize);
  vec2 pixelUV = fract(fragCoord / pixelSize);

  float cellPixelSize = 8.0 * pixelSize;
  vec2 cellId = floor(fragCoord / cellPixelSize);
  vec2 cellCoord = cellId * cellPixelSize;
  vec2 uv = cellCoord / uResolution * vec2(aspectRatio, 1.0);

  float base = fbm2(uv, uTime * 0.05);
  base = base * 0.5 - 0.65;

  float feed = base + (uDensity - 0.5) * 0.3;

  float speed     = uRippleSpeed;
  float thickness = uRippleThickness;
  const float dampT     = 1.0;
  const float dampR     = 10.0;

  if (uEnableRipples == 1) {
    for (int i = 0; i < MAX_CLICKS; ++i){
      vec2 pos = uClickPos[i];
      if (pos.x < 0.0) continue;
      float cellPixelSize = 8.0 * pixelSize;
      vec2 cuv = (((pos - uResolution * .5 - cellPixelSize * .5) / (uResolution))) * vec2(aspectRatio, 1.0);
      float t = max(uTime - uClickTimes[i], 0.0);
      float r = distance(uv, cuv);
      float waveR = speed * t;
      float ring  = exp(-pow((r - waveR) / thickness, 2.0));
      float atten = exp(-dampT * t) * exp(-dampR * r);
      feed = max(feed, ring * atten * uRippleIntensity);
    }
  }

  float bayer = Bayer8(fragCoord / uPixelSize) - 0.5;
  float bw = step(0.5, feed + bayer);

  float h = fract(sin(dot(floor(fragCoord / uPixelSize), vec2(127.1, 311.7))) * 43758.5453);
  float jitterScale = 1.0 + (h - 0.5) * uPixelJitter;
  float coverage = bw * jitterScale;
  float M;
  if      (uShapeType == SHAPE_CIRCLE)   M = maskCircle (pixelUV, coverage);
  else if (uShapeType == SHAPE_TRIANGLE) M = maskTriangle(pixelUV, pixelId, coverage);
  else if (uShapeType == SHAPE_DIAMOND)  M = maskDiamond(pixelUV, coverage);
  else                                   M = coverage;

  if (uEdgeFade > 0.0) {
    vec2 norm = gl_FragCoord.xy / uResolution;
    float edge = min(min(norm.x, norm.y), min(1.0 - norm.x, 1.0 - norm.y));
    float fade = smoothstep(0.0, uEdgeFade, edge);
    M *= fade;
  }

  vec3 color = uColor;

  // sRGB gamma correction - convert linear to sRGB for accurate color output
  vec3 srgbColor = mix(
    color * 12.92,
    1.055 * pow(color, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, color)
  );

  fragColor = vec4(srgbColor, M);
}
`,gh=10,aN=({variant:n="square",pixelSize:e=3,color:t="#B19EEF",className:r,style:o,antialias:a=!0,patternScale:c=2,patternDensity:u=1,liquid:d=!1,liquidStrength:h=.1,liquidRadius:p=1,pixelSizeJitter:v=0,enableRipples:g=!0,rippleIntensityScale:_=1,rippleThickness:M=.1,rippleSpeed:E=.3,liquidWobbleSpeed:S=4.5,autoPauseOffscreen:y=!0,speed:w=.5,transparent:b=!0,edgeFade:P=.5,noiseAmount:I=0})=>{const U=ge.useRef(null),V=ge.useRef({visible:!0}),A=ge.useRef(w),D=ge.useRef(null),K=ge.useRef(null);return ge.useEffect(()=>{const B=U.current;if(!B)return;A.current=w;const Q=["antialias","liquid","noiseAmount"],J={antialias:a,liquid:d,noiseAmount:I};let ne=!1;if(!D.current)ne=!0;else if(K.current){for(const G of Q)if(K.current[G]!==J[G]){ne=!0;break}}if(ne){if(D.current){const Oe=D.current;Oe.resizeObserver?.disconnect(),cancelAnimationFrame(Oe.raf),Oe.quad?.geometry.dispose(),Oe.material.dispose(),Oe.composer?.dispose(),Oe.renderer.dispose(),Oe.renderer.forceContextLoss(),Oe.renderer.domElement.parentElement===B&&B.removeChild(Oe.renderer.domElement),D.current=null}const G=document.createElement("canvas"),H=new lL({canvas:G,antialias:a,alpha:!0,powerPreference:"high-performance"});H.domElement.style.width="100%",H.domElement.style.height="100%",H.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),B.appendChild(H.domElement),b?H.setClearAlpha(0):H.setClearColor(0,1);const $={uResolution:{value:new St(0,0)},uTime:{value:0},uColor:{value:new Ft(t)},uClickPos:{value:Array.from({length:gh},()=>new St(-1,-1))},uClickTimes:{value:new Float32Array(gh)},uShapeType:{value:mx[n]??0},uPixelSize:{value:e*H.getPixelRatio()},uScale:{value:c},uDensity:{value:u},uPixelJitter:{value:v},uEnableRipples:{value:g?1:0},uRippleSpeed:{value:E},uRippleThickness:{value:M},uRippleIntensity:{value:_},uEdgeFade:{value:P}},X=new Np,ee=new Du(-1,1,1,-1,0,1),ae=new Kn({vertexShader:sN,fragmentShader:oN,uniforms:$,transparent:!0,depthTest:!1,depthWrite:!1,glslVersion:Dp}),O=new cl(2,2),Z=new Bi(O,ae);X.add(Z);const Re=new pb,Ve=Oe=>{const ut=B.clientWidth||1,k=B.clientHeight||1;H.setSize(ut,k,!1),$.uResolution.value.set(H.domElement.width,H.domElement.height);const xt=Oe||D.current?.composer;xt&&xt.setSize(H.domElement.width,H.domElement.height),$.uPixelSize.value=e*H.getPixelRatio()},He=new ResizeObserver(()=>Ve());He.observe(B);const pe=(()=>{if(typeof window<"u"&&window.crypto?.getRandomValues){const Oe=new Uint32Array(1);return window.crypto.getRandomValues(Oe),Oe[0]/4294967295}return Math.random()})()*1e3;let ce,we,De;if(d){we=iN(),we.radiusScale=p,ce=new ux(H);const Oe=new dx(X,ee);De=rN(we.texture,{strength:h,freq:S});const ut=new px(ee,De);ut.renderToScreen=!0,ce.addPass(Oe),ce.addPass(ut)}if(I>0){ce||(ce=new ux(H),ce.addPass(new dx(X,ee)));const Oe=new qS("NoiseEffect","uniform float uTime; uniform float uAmount; float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453);} void mainUv(inout vec2 uv){} void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){ float n=hash(floor(uv*vec2(1920.0,1080.0))+floor(uTime*60.0)); float g=(n-0.5)*uAmount; outputColor=inputColor+vec4(vec3(g),0.0);} ",{uniforms:new Map([["uTime",new nn(0)],["uAmount",new nn(I)]])}),ut=new px(ee,Oe);ut.renderToScreen=!0,ce&&ce.passes.length>0&&ce.passes.forEach(k=>k.renderToScreen=!1),ce.addPass(ut)}Ve(ce);const nt=Oe=>{const ut=H.domElement.getBoundingClientRect(),k=H.domElement.width/ut.width,xt=H.domElement.height/ut.height,gt=(Oe.clientX-ut.left)*k,Et=(ut.height-(Oe.clientY-ut.top))*xt;return{fx:gt,fy:Et,w:H.domElement.width,h:H.domElement.height}},Vt=Oe=>{const{fx:ut,fy:k}=nt(Oe),xt=D.current?.clickIx??0;$.uClickPos.value[xt].set(ut,k),$.uClickTimes.value[xt]=$.uTime.value,D.current&&(D.current.clickIx=(xt+1)%gh)},dt=Oe=>{if(!we)return;const{fx:ut,fy:k,w:xt,h:gt}=nt(Oe);we.addTouch({x:ut/xt,y:k/gt})};H.domElement.addEventListener("pointerdown",Vt,{passive:!0}),H.domElement.addEventListener("pointermove",dt,{passive:!0});let _t=0;const At=()=>{if(y&&!V.current.visible){_t=requestAnimationFrame(At);return}$.uTime.value=pe+Re.getElapsedTime()*A.current,De&&(De.uniforms.get("uTime").value=$.uTime.value),ce?(we&&we.update(),ce.passes.forEach(Oe=>{const ut=Oe.effects;ut&&ut.forEach(k=>{const xt=k.uniforms?.get("uTime");xt&&(xt.value=$.uTime.value)})}),ce.render()):H.render(X,ee),_t=requestAnimationFrame(At)};_t=requestAnimationFrame(At),D.current={renderer:H,scene:X,camera:ee,material:ae,clock:Re,clickIx:0,uniforms:$,resizeObserver:He,raf:_t,quad:Z,timeOffset:pe,composer:ce,touch:we,liquidEffect:De}}else{const G=D.current;if(G.uniforms.uShapeType.value=mx[n]??0,G.uniforms.uPixelSize.value=e*G.renderer.getPixelRatio(),G.uniforms.uColor.value.set(t),G.uniforms.uScale.value=c,G.uniforms.uDensity.value=u,G.uniforms.uPixelJitter.value=v,G.uniforms.uEnableRipples.value=g?1:0,G.uniforms.uRippleIntensity.value=_,G.uniforms.uRippleThickness.value=M,G.uniforms.uRippleSpeed.value=E,G.uniforms.uEdgeFade.value=P,b?G.renderer.setClearAlpha(0):G.renderer.setClearColor(0,1),G.liquidEffect){const H=G.liquidEffect;H&&(H.value=h);const $=G.liquidEffect.uniforms.get("uFreq");$&&($.value=S)}G.touch&&(G.touch.radiusScale=p)}return K.current=J,()=>{if(D.current&&ne||!D.current)return;const G=D.current;G.resizeObserver?.disconnect(),cancelAnimationFrame(G.raf),G.quad?.geometry.dispose(),G.material.dispose(),G.composer?.dispose(),G.renderer.dispose(),G.renderer.forceContextLoss(),G.renderer.domElement.parentElement===B&&B.removeChild(G.renderer.domElement),D.current=null}},[a,d,I,e,c,u,g,_,M,E,v,P,b,h,p,S,y,n,t,w]),N.jsx("div",{ref:U,className:`pixel-blast-container ${r??""}`,style:o,"aria-label":"PixelBlast interactive background"})};function lN(){return N.jsx("div",{style:{position:"absolute",inset:0,zIndex:0,pointerEvents:"none"},children:N.jsx(aN,{variant:"circle",color:"#8b5cf6",pixelSize:10,patternScale:1.8,patternDensity:.65,pixelSizeJitter:.15,speed:.18,edgeFade:.3,enableRipples:!1,liquid:!0,transparent:!0,noiseAmount:0,autoPauseOffscreen:!0})})}const cN=["    ___       __     _      __   ____        __    __         ","   /   | ____/ /____(_)__  / /  / __ )____  / /_  / /_  __  __","  / /| |/ __  / ___/ / _ \\/ /  / __  / __ \\/ __ \\/ __ \\/ / / /"," / ___ / /_/ / /  / /  __/ /  / /_/ / /_/ / /_/ / /_/ / /_/ / ","/_/  |_\\__,_/_/  /_/\\___/_/  /_____/\\____/_.___/_.___/\\__, /  ","                                                     /____/   "],gx=["scanning open ports…","hardening attack surface…","deploying honeypots…"],uu=.8,Op=.4,Yc={hidden:{opacity:0,y:15},visible:n=>({opacity:1,y:0,transition:{delay:uu+n*Op,duration:.7,ease:"easeOut"}})};function uN({animateIn:n=!1}){const[e,t]=ge.useState(0);return ge.useEffect(()=>{const r=setInterval(()=>{t(o=>(o+1)%gx.length)},3e3);return()=>clearInterval(r)},[]),N.jsxs("section",{id:"hero",className:`hero${n?" hero-animate-in":""}`,children:[N.jsx(lN,{}),N.jsx("h1",{className:"sr-only",children:"Adriel Bobby"}),N.jsxs("div",{className:"hero-content",children:[N.jsx(ZC,{lines:cN,speed:25,glitchDuration:150,animate:n}),N.jsxs(Us.p,{className:"hero-status",initial:{opacity:0},animate:n?{opacity:1}:{opacity:0},exit:{opacity:0},transition:{duration:.5},children:[N.jsx("span",{className:"hero-status-label",children:"status:"})," ",gx[e]]},e),N.jsx(Us.p,{className:"hero-subtitle",custom:0,variants:Yc,initial:"hidden",animate:n?"visible":"hidden",children:N.jsx(Zi,{text:"Computer Science Engineer",speed:17,startDelay:uu*1e3,animate:n})}),N.jsx(Us.p,{className:"hero-tagline",custom:1,variants:Yc,initial:"hidden",animate:n?"visible":"hidden",children:N.jsx(Zi,{text:"Breaking into cybersecurity one packet at a time.",speed:15,startDelay:(uu+Op)*1e3,animate:n})}),N.jsxs(Us.div,{className:"hero-actions",custom:2,variants:Yc,initial:"hidden",animate:n?"visible":"hidden",children:[N.jsx("a",{href:"#projects",className:"btn btn-primary",children:"View My Work"}),N.jsx("a",{href:"/Resume.pdf",target:"_blank",rel:"noopener noreferrer",className:"btn btn-outline",children:"Resume"})]})]}),N.jsxs(Us.div,{className:"hero-scroll-indicator",custom:3,variants:Yc,initial:"hidden",animate:n?"visible":"hidden",children:[N.jsx("div",{style:{display:"flex",justifyContent:"center"},children:N.jsx(Zi,{text:"SCROLL",speed:20,startDelay:(uu+3*Op)*1e3,animate:n,className:"scroll-label",style:{marginRight:"-0.25em"}})}),N.jsxs("svg",{className:"scroll-arrow-dashed",width:"24",height:"50",viewBox:"0 0 24 60",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[N.jsx("line",{className:"arrow-tail",x1:"12",y1:"0",x2:"12",y2:"52",stroke:"var(--color-primary)",strokeWidth:"2",strokeDasharray:"4 4"}),N.jsx("path",{className:"arrow-head",d:"M6 46 L12 52 L18 46",stroke:"var(--color-primary)",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})]})]})]})}const fN="modulepreload",dN=function(n){return"/"+n},vx={},hN=function(e,t,r){let o=Promise.resolve();if(t&&t.length>0){let d=function(h){return Promise.all(h.map(p=>Promise.resolve(p).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),u=c?.nonce||c?.getAttribute("nonce");o=d(t.map(h=>{if(h=dN(h),h in vx)return;vx[h]=!0;const p=h.endsWith(".css"),v=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${v}`))return;const g=document.createElement("link");if(g.rel=p?"stylesheet":fN,p||(g.as="script"),g.crossOrigin="",g.href=h,u&&g.setAttribute("nonce",u),document.head.appendChild(g),p)return new Promise((_,M)=>{g.addEventListener("load",_),g.addEventListener("error",()=>M(new Error(`Unable to preload CSS for ${h}`)))})}))}function a(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return o.then(c=>{for(const u of c||[])u.status==="rejected"&&a(u.reason);return e().catch(a)})},pN=864e5,KS=6e4,ZS=36e5,_x=Symbol.for("constructDateFrom");function ul(n,e){return typeof n=="function"?n(e):n&&typeof n=="object"&&_x in n?n[_x](e):n instanceof Date?new n.constructor(e):new Date(e)}function tr(n,e){return ul(e||n,n)}function QS(n,e,t){const r=tr(n,t?.in);return isNaN(e)?ul(n,NaN):(e&&r.setDate(r.getDate()+e),r)}function xx(n){const e=tr(n),t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),+n-+t}function JS(n,...e){const t=ul.bind(null,e.find(r=>typeof r=="object"));return e.map(t)}function yx(n,e){const t=tr(n,e?.in);return t.setHours(0,0,0,0),t}function mN(n,e,t){const[r,o]=JS(t?.in,n,e),a=yx(r),c=yx(o),u=+a-xx(a),d=+c-xx(c);return Math.round((u-d)/pN)}function gN(n,e,t){return QS(n,e*7,t)}function vN(n){return n instanceof Date||typeof n=="object"&&Object.prototype.toString.call(n)==="[object Date]"}function _N(n){return!(!vN(n)&&typeof n!="number"||isNaN(+tr(n)))}function xN(n,e){const[t,r]=JS(n,e.start,e.end);return{start:t,end:r}}function eM(n,e){const{start:t,end:r}=xN(e?.in,n);let o=+t>+r;const a=o?+t:+r,c=o?r:t;c.setHours(0,0,0,0);let u=1;const d=[];for(;+c<=a;)d.push(ul(t,c)),c.setDate(c.getDate()+u),c.setHours(0,0,0,0);return o?d.reverse():d}function Qr(n,e){const t=n<0?"-":"",r=Math.abs(n).toString().padStart(e,"0");return t+r}function tM(n,e){const t=tr(n,e?.in);if(isNaN(+t))throw new RangeError("Invalid time value");const r=e?.format??"extended",o=e?.representation??"complete";let a="",c="";const u=r==="extended"?"-":"",d=r==="extended"?":":"";if(o!=="time"){const h=Qr(t.getDate(),2),p=Qr(t.getMonth()+1,2);a=`${Qr(t.getFullYear(),4)}${u}${p}${u}${h}`}if(o!=="date"){const h=t.getTimezoneOffset();if(h!==0){const E=Math.abs(h),S=Qr(Math.trunc(E/60),2),y=Qr(E%60,2);c=`${h<0?"+":"-"}${S}:${y}`}else c="Z";const p=Qr(t.getHours(),2),v=Qr(t.getMinutes(),2),g=Qr(t.getSeconds(),2),_=a===""?"":"T",M=[p,v,g].join(d);a=`${a}${_}${M}${c}`}return a}function nM(n,e){return tr(n,e?.in).getDay()}function yN(n,e){return tr(n,e?.in).getMonth()}function SN(n,e){return tr(n,e?.in).getFullYear()}function MN(n,e,t){let r=e-nM(n,t);return r<=0&&(r+=7),QS(n,r,t)}function $o(n,e){const t=()=>ul(e?.in,NaN),o=AN(n);let a;if(o.date){const h=CN(o.date,2);a=RN(h.restDateString,h.year)}if(!a||isNaN(+a))return t();const c=+a;let u=0,d;if(o.time&&(u=bN(o.time),isNaN(u)))return t();if(o.timezone){if(d=PN(o.timezone),isNaN(d))return t()}else{const h=new Date(c+u),p=tr(0,e?.in);return p.setFullYear(h.getUTCFullYear(),h.getUTCMonth(),h.getUTCDate()),p.setHours(h.getUTCHours(),h.getUTCMinutes(),h.getUTCSeconds(),h.getUTCMilliseconds()),p}return tr(c+u+d,e?.in)}const qc={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},EN=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,TN=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,wN=/^([+-])(\d{2})(?::?(\d{2}))?$/;function AN(n){const e={},t=n.split(qc.dateTimeDelimiter);let r;if(t.length>2)return e;if(/:/.test(t[0])?r=t[0]:(e.date=t[0],r=t[1],qc.timeZoneDelimiter.test(e.date)&&(e.date=n.split(qc.timeZoneDelimiter)[0],r=n.substr(e.date.length,n.length))),r){const o=qc.timezone.exec(r);o?(e.time=r.replace(o[1],""),e.timezone=o[1]):e.time=r}return e}function CN(n,e){const t=new RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+e)+"})|(\\d{2}|[+-]\\d{"+(2+e)+"})$)"),r=n.match(t);if(!r)return{year:NaN,restDateString:""};const o=r[1]?parseInt(r[1]):null,a=r[2]?parseInt(r[2]):null;return{year:a===null?o:a*100,restDateString:n.slice((r[1]||r[2]).length)}}function RN(n,e){if(e===null)return new Date(NaN);const t=n.match(EN);if(!t)return new Date(NaN);const r=!!t[4],o=Ha(t[1]),a=Ha(t[2])-1,c=Ha(t[3]),u=Ha(t[4]),d=Ha(t[5])-1;if(r)return UN(e,u,d)?DN(e,u,d):new Date(NaN);{const h=new Date(0);return!NN(e,a,c)||!IN(e,o)?new Date(NaN):(h.setUTCFullYear(e,a,Math.max(o,c)),h)}}function Ha(n){return n?parseInt(n):1}function bN(n){const e=n.match(TN);if(!e)return NaN;const t=vh(e[1]),r=vh(e[2]),o=vh(e[3]);return FN(t,r,o)?t*ZS+r*KS+o*1e3:NaN}function vh(n){return n&&parseFloat(n.replace(",","."))||0}function PN(n){if(n==="Z")return 0;const e=n.match(wN);if(!e)return 0;const t=e[1]==="+"?-1:1,r=parseInt(e[2]),o=e[3]&&parseInt(e[3])||0;return ON(r,o)?t*(r*ZS+o*KS):NaN}function DN(n,e,t){const r=new Date(0);r.setUTCFullYear(n,0,4);const o=r.getUTCDay()||7,a=(e-1)*7+t+1-o;return r.setUTCDate(r.getUTCDate()+a),r}const LN=[31,null,31,30,31,30,31,31,30,31,30,31];function iM(n){return n%400===0||n%4===0&&n%100!==0}function NN(n,e,t){return e>=0&&e<=11&&t>=1&&t<=(LN[e]||(iM(n)?29:28))}function IN(n,e){return e>=1&&e<=(iM(n)?366:365)}function UN(n,e,t){return e>=1&&e<=53&&t>=0&&t<=6}function FN(n,e,t){return n===24?e===0&&t===0:t>=0&&t<60&&e>=0&&e<60&&n>=0&&n<25}function ON(n,e){return e>=0&&e<=59}function BN(n,e,t){return gN(n,-1,t)}const Cm="react-activity-calendar",_h=8,rM=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],kN={months:rM,weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],totalCount:"{{count}} activities in {{year}}",legend:{less:"Less",more:"More"}},Sx="(prefers-color-scheme: dark)";function VN(){const[n,e]=ge.useState(()=>typeof window>"u"?"light":window.matchMedia(Sx).matches?"dark":"light"),t=r=>{e(r.matches?"dark":"light")};return ge.useEffect(()=>{const r=window.matchMedia(Sx);return e(r.matches?"dark":"light"),r.addEventListener("change",t),()=>{r.removeEventListener("change",t)}},[]),n}const sM=`${Cm}--loading-animation`;function zN(n,e){const[t,r]=ge.useState(!1);return ge.useEffect(()=>{const o=`oklab(from ${n} l a b)`,a=e==="light"?`oklab(from ${n} calc(l * 0.96) a b)`:`oklab(from ${n} calc(l * 1.08) a b)`,c=document.createElement("style");c.innerHTML=`
      @keyframes ${sM} {
        0% {
          fill: ${o};
        }
        50% {
          fill: ${a};
        }
        100% {
          fill: ${o};
        }
      }
    `;const u=()=>{r(!0)};return document.head.appendChild(c),c.addEventListener("load",u),()=>{document.head.removeChild(c),c.removeEventListener("load",u),r(!1)}},[n,e]),t}const Mx="(prefers-reduced-motion: reduce)";function HN(){const[n,e]=ge.useState(()=>typeof window>"u"?!0:window.matchMedia(Mx).matches);return ge.useEffect(()=>{const t=window.matchMedia(Mx);e(t.matches);const r=o=>{e(o.matches)};return t.addEventListener("change",r),()=>{t.removeEventListener("change",r)}},[]),n}function GN(n,e){if(n.length===0)throw new Error("Activity data must not be empty.");for(const{date:t,level:r,count:o}of n){if(!_N($o(t)))throw new Error(`Activity date '${t}' is not a valid ISO 8601 date string.`);if(o<0)throw new RangeError(`Activity count must not be negative, found ${o}.`);if(r<0||r>e)throw new RangeError(`Activity level ${r} for ${t} is out of range. It must be between 0 and ${e}.`)}}function WN(n,e=0){const t=jN(n),r=t[0],o=$o(r.date),a=nM(o)===e?o:BN(MN(o,e)),c=[...Array(mN(o,a)).fill(void 0),...t],u=Math.ceil(c.length/7);return Tu(u).map(d=>c.slice(d*7,d*7+7))}function jN(n){const e=new Map(n.map(o=>[o.date,o])),t=n[0],r=n[n.length-1];return eM({start:$o(t.date),end:$o(r.date)}).map(o=>{const a=tM(o,{representation:"date"});return e.has(a)?e.get(a):{date:a,count:0,level:0}})}function Ds(n){return`${Cm}__${n}`}function Tu(n){return[...Array(n).keys()]}function XN(){const n=new Date().getFullYear();return eM({start:new Date(n,0,1),end:new Date(n,11,31)}).map(t=>({date:tM(t,{representation:"date"}),count:0,level:0}))}function $N(n,e=rM){return n.reduce((t,r,o)=>{const a=r.find(d=>d!==void 0);if(!a)throw new Error(`Unexpected error: Week ${o+1} is empty.`);const c=e[yN($o(a.date))];if(!c){const d=new Date(a.date).toLocaleString("en-US",{month:"short"});throw new Error(`Unexpected error: undefined month label for ${d}.`)}const u=t[t.length-1];return o===0||u?.label!==c?[...t,{weekIndex:o,label:c}]:t},[]).filter(({weekIndex:t},r,o)=>r===0?o[1]&&o[1].weekIndex-t>=3:r===o.length-1?n.slice(t).length>=3:!0)}function YN(n,e,t){if(n.length!==7)throw new Error("Exactly 7 labels, one for each weekday must be passed.");return n.reduce((r,o,a)=>e.byDayIndex(a)?Math.max(r,Math.ceil(qN(o,t).width)):r,0)}function qN(n,e){if(typeof document>"u"||typeof window>"u")return{width:0,height:0};if(e<1)throw new RangeError("fontSize must be positive");if(n.length===0)return{width:0,height:0};const t="http://www.w3.org/2000/svg",r=document.createElementNS(t,"svg");r.style.position="absolute",r.style.visibility="hidden",r.style.fontFamily=window.getComputedStyle(document.body).fontFamily,r.style.fontSize=`${e}px`;const o=document.createElementNS(t,"text");o.textContent=n,r.appendChild(o),document.body.appendChild(r);const a=o.getBBox();return document.body.removeChild(r),{width:a.width,height:a.height}}function KN(n,e){if(!n)return{byDayIndex:()=>!1,shouldShow:!1};if(n===!0)return{byDayIndex:r=>(7+r-e)%7%2!==0,shouldShow:!0};const t=[];for(const r of n){const o=ZN[r.toLowerCase()];t[o]=!0}return{byDayIndex:r=>t[r]??!1,shouldShow:n.length>0}}const ZN={sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};function QN(n,e=5){const t=JN(e);return n?(eI(n,e),n.light=n.light??t.light,n.dark=n.dark??t.dark,{light:Ex(n.light)?wu(n.light,e):n.light,dark:Ex(n.dark)?wu(n.dark,e):n.dark}):t}function JN(n){return{light:wu(["hsl(0, 0%, 92%)","hsl(0, 0%, 26%)"],n),dark:wu(["hsl(0, 0%, 22%)","hsl(0, 0%, 92%)"],n)}}function eI(n,e){const t='The number of colors is controlled by the "maxLevel" property.';if(typeof n!="object"||n.light===void 0&&n.dark===void 0)throw new Error(`The theme object must contain at least one of the fields "light" and "dark" with exactly 2 or ${e} colors respectively. ${t}`);if(n.light){const{length:r}=n.light;if(r!==2&&r!==e)throw new Error(`theme.light must contain exactly 2 or ${e} colors, ${r} passed. ${t}`);for(const o of n.light)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}if(n.dark){const{length:r}=n.dark;if(r!==2&&r!==e)throw new Error(`theme.dark must contain exactly 2 or ${e} colors, ${r} passed. ${t}`);for(const o of n.dark)if(typeof window<"u"&&!CSS.supports("color",o))throw new Error(`Invalid color "${o}" passed. All CSS color formats are accepted.`)}}function wu([n,e],t){return Tu(t).map(r=>{switch(r){case 0:return n;case t-1:return e;default:{const o=r/(t-1)*100;return`color-mix(in oklab, ${e} ${parseFloat(o.toFixed(2))}%, ${n})`}}})}function Ex(n){return n.length===2}const Ls={container:n=>({width:"max-content",maxWidth:"100%",display:"flex",flexDirection:"column",gap:"8px",fontSize:`${n}px`}),scrollContainer:n=>({maxWidth:"100%",overflowX:"auto",overflowY:"hidden",paddingTop:Math.ceil(.1*n)}),calendar:{display:"block",overflow:"visible"},rect:n=>({stroke:n==="light"?"rgba(0, 0, 0, 0.08)":"rgba(255, 255, 255, 0.04)"}),footer:{container:{display:"flex",flexWrap:"wrap",gap:"4px 16px",whiteSpace:"nowrap"},legend:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"3px"}}},Tx=ge.lazy(()=>hN(()=>import("./Tooltip-BAxPWbMb-Bq_aa1Pb.js"),[]).then(n=>({default:n.Tooltip}))),Bp=ge.forwardRef(({data:n,blockMargin:e=4,blockRadius:t=2,blockSize:r=12,className:o,colorScheme:a,fontSize:c=14,labels:u,loading:d=!1,maxLevel:h=4,renderBlock:p,renderColorLegend:v,showColorLegend:g=!0,showMonthLabels:_=!0,showTotalCount:M=!0,showWeekdayLabels:E=!1,style:S={},theme:y,tooltips:w={},weekStart:b=0},P)=>{const[I,U]=ge.useState(!1);ge.useEffect(()=>{U(!0)},[]),h=Math.max(1,h);const V=QN(y,h+1),A=VN(),D=a??A,K=V[D],B=zN(K[0],D),Q=!HN();if(d){if(Q&&!B)return null;n=XN()}GN(n,h);const J=n[0],ne=SN($o(J.date)),G=WN(n,b),H=Object.assign({},kN,u),$=_?c+_h:0,X=KN(E,b),ee=I&&X.shouldShow?YN(H.weekdays,X,c)+_h:void 0;function ae(){return{width:G.length*(r+e)-e,height:$+(r+e)*7-e}}function O(){return G.map((pe,ce)=>pe.map((we,De)=>{if(!we)return null;const nt=d&&Q?{animation:`${sM} 1.75s ease-in-out infinite`,animationDelay:`${ce*20+De*20}ms`}:void 0,Vt=N.jsx("rect",{x:0,y:$+(r+e)*De,width:r,height:r,rx:t,ry:t,fill:K[we.level],"data-date":we.date,"data-level":we.level,style:{...Ls.rect(D),...nt}}),dt=p?p(Vt,we):Vt;return N.jsx(ge.Fragment,{children:w.activity?N.jsx(ge.Suspense,{fallback:dt,children:N.jsx(Tx,{text:w.activity.text(we),colorScheme:D,placement:w.activity.placement??"top",hoverRestMs:w.activity.hoverRestMs,offset:w.activity.offset,transitionStyles:w.activity.transitionStyles,withArrow:w.activity.withArrow,children:dt})}):dt},we.date)})).map((pe,ce)=>N.jsx("g",{transform:`translate(${(r+e)*ce}, 0)`,children:pe},ce))}function Z(){if(!M&&!g)return null;const pe=n.reduce((ce,we)=>ce+we.count,0);return N.jsxs("footer",{className:Ds("footer"),style:{...Ls.footer.container,marginLeft:ee},children:[d&&N.jsx("div",{children:" "}),!d&&M&&N.jsx("div",{className:Ds("count"),children:H.totalCount?H.totalCount.replace("{{count}}",String(pe)).replace("{{year}}",String(ne)):`${pe} activities in ${ne}`}),!d&&g&&N.jsxs("div",{className:Ds("legend-colors"),style:Ls.footer.legend,children:[N.jsx("span",{style:{marginRight:"0.4em"},children:H.legend.less}),Tu(h+1).map(ce=>{const we=N.jsx("svg",{width:r,height:r,children:N.jsx("rect",{width:r,height:r,fill:K[ce],rx:t,ry:t,style:Ls.rect(D)})},ce),De=v?v(we,ce):we;return N.jsx(ge.Fragment,{children:w.colorLegend?N.jsx(ge.Suspense,{fallback:De,children:N.jsx(Tx,{text:w.colorLegend.text(ce),colorScheme:D,placement:w.colorLegend.placement??"bottom",hoverRestMs:w.colorLegend.hoverRestMs,offset:w.colorLegend.offset,transitionStyles:w.colorLegend.transitionStyles,withArrow:w.colorLegend.withArrow,children:De})}):De},ce)}),N.jsx("span",{style:{marginLeft:"0.4em"},children:H.legend.more})]})]})}function Re(){return X.shouldShow?N.jsx("g",{className:Ds("legend-weekday"),children:Tu(7).map(pe=>{const ce=(pe+b)%7;return X.byDayIndex(ce)?N.jsx("text",{x:-_h,y:$+(r+e)*pe+r/2,dominantBaseline:"central",textAnchor:"end",fill:"currentColor",children:H.weekdays[ce]},pe):null})}):null}function Ve(){return _?N.jsx("g",{className:Ds("legend-month"),children:$N(G,H.months).map(({label:pe,weekIndex:ce})=>N.jsx("text",{x:(r+e)*ce,y:0,dominantBaseline:"hanging",fill:"currentColor",children:pe},ce))}):null}const{width:He,height:oe}=ae();return N.jsxs("article",{ref:P,className:`${Cm} ${o??""}`.trim(),style:{...S,...Ls.container(c)},children:[N.jsx("div",{className:Ds("scroll-container"),style:Ls.scrollContainer(c),children:N.jsxs("svg",{width:He,height:oe,viewBox:`0 0 ${He} ${oe}`,className:Ds("calendar"),style:{...Ls.calendar,marginLeft:ee},children:[!d&&Re(),!d&&Ve(),O()]})}),Z()]})});Bp.displayName="ActivityCalendar";const tI={light:["#ebedf0","#9be9a8","#40c463","#30a14e","#216e39"],dark:["#161b22","#0e4429","#006d32","#26a641","#39d353"]},nI=(n,e)=>{if(typeof e!="function")return n;const t=e(n);if(!Array.isArray(t))throw Error("transformData() function must return a list of Activity objects.");for(const r of t){if(!iI(r))throw Error("transformData() must return a list of valid Activity objects.");if(typeof r.count!="number"||r.count<0)throw Error(`Required property "count: number" missing or invalid. Got: ${r.count}`);if(typeof r.date!="string"||!/\d{4}-\d{2}-\d{2}/.test(r.date))throw Error(`Required property "date: YYYY-MM-DD" missing or invalid. Got: ${r.date}`);if(typeof r.level!="number"||r.level<0||r.level>4)throw Error(`Required property "level: 0 | 1 | 2 | 3 | 4" missing or invalid: Got: ${r.level}.`)}return t},iI=n=>Object.prototype.toString.call(n)==="[object Object]";async function rI(n,e){const r=await fetch(`https://github-contributions-api.jogruber.de/v4/${n}?y=${String(e)}`),o=await r.json();if(!r.ok)throw Error(`Fetching GitHub contribution data for "${n}" failed: ${o.error}`);return o}const oM=ge.forwardRef(({username:n,year:e="last",labels:t,transformData:r,throwOnError:o=!1,errorMessage:a=`Error – Fetching GitHub contribution data for "${n}" failed.`,...c},u)=>{const[d,h]=ge.useState(null),[p,v]=ge.useState(!1),[g,_]=ge.useState(null),M=ge.useCallback(()=>{v(!0),_(null),rI(n,e).then(h).catch(y=>{y instanceof Error&&_(y)}).finally(()=>{v(!1)})},[n,e]);if(ge.useEffect(M,[M]),g){if(o)throw g;return N.jsx("div",{children:a})}if(p||!d)return N.jsx(Bp,{...c,data:[],loading:!0});const E=c.theme??tI,S={totalCount:`{{count}} contributions in ${e==="last"?"the last year":"{{year}}"}`};return N.jsx(Bp,{data:nI(d.contributions,r),labels:Object.assign({},S,t),ref:u,...c,theme:E,loading:!!c.loading||p,maxLevel:4})});oM.displayName="GitHubCalendar";const wx=[{category:"languages",items:["C","Python","C++","Java","JavaScript"]},{category:"tools",items:["MySQL","Linux","Nmap","Gobuster","WPScan","Joomscan","SQLMap","Metasploit","Searchsploit","Hydra","John the Ripper","Hashcat","Netcat","Tor","Burp Suite","Steghide","Stegseek"]},{category:"domains",items:["Cybersecurity","Web Application Security","Network Security","Social Media Management"]}],Ax=["CS Engineering student @ RSET","Passionate about ethical hacking & cyber-threat analysis","Curiosity about how things break drives me to protect them","I enjoy setting up labs, hosting websites, exploring vulnerabilities","I value clear communication, continuous learning, hands-on experimentation"];function sI(){const[n,e]=ge.useState({}),[t,r]=ge.useState([]),[o,a]=ge.useState(""),[c,u]=ge.useState(!1),[d,h]=ge.useState(!0),p=ge.useRef(null),v=gm(p,{once:!0,margin:"-80px"});ge.useEffect(()=>{if(!v)return;let _=!1,M,E=0,S=0;u(!0);const y=()=>{if(!_)if(E<Ax.length){const w=Ax[E];S<w.length?(a(w.substring(0,S+1)),S++,M=setTimeout(y,15)):(r(b=>[...b,w]),a(""),E++,S=0,M=setTimeout(y,200))}else u(!1)};return M=setTimeout(y,300),()=>{_=!0,clearTimeout(M)}},[v]),ge.useEffect(()=>{const _=setInterval(()=>{h(M=>!M)},500);return()=>clearInterval(_)},[]);function g(_){e(M=>({...M,[_]:!M[_]}))}return N.jsx("section",{id:"about",ref:p,children:N.jsxs("div",{className:"container",children:[N.jsxs("h2",{className:"section-title",children:[N.jsx("span",{style:{color:"var(--color-primary)"},children:"$ "}),"whoami"]}),N.jsxs("div",{className:"terminal-box",children:[N.jsxs("div",{className:"terminal-topbar",children:[N.jsx("span",{className:"dot red"}),N.jsx("span",{className:"dot yellow"}),N.jsx("span",{className:"dot green"})]}),N.jsxs("div",{className:"terminal-body",children:[N.jsxs("p",{className:"terminal-line",children:[N.jsx("span",{style:{color:"var(--color-primary)"},children:"adriel@portfolio"}),N.jsx("span",{style:{color:"var(--color-text)"},children:":~$ "}),N.jsx("span",{style:{color:"var(--color-green)"},children:"whoami"})]}),t.map((_,M)=>_?N.jsxs("p",{className:"terminal-line terminal-output",children:[N.jsx("span",{style:{color:"var(--color-primary)"},children:"→ "}),_]},M):null),c&&N.jsxs("p",{className:"terminal-line terminal-output",children:[N.jsx("span",{style:{color:"var(--color-primary)"},children:"→ "}),o,N.jsx("span",{className:"terminal-cursor",style:{opacity:d?1:0},children:"█"})]})]})]}),N.jsxs("div",{className:"terminal-box",children:[N.jsxs("div",{className:"terminal-topbar",children:[N.jsx("span",{className:"dot red"}),N.jsx("span",{className:"dot yellow"}),N.jsx("span",{className:"dot green"})]}),N.jsxs("div",{className:"terminal-body",children:[N.jsxs("p",{className:"terminal-line",style:{marginBottom:"0.75rem"},children:[N.jsx("span",{style:{color:"var(--color-primary)"},children:"adriel@portfolio"}),N.jsx("span",{style:{color:"var(--color-text)"},children:":~$ "}),N.jsx("span",{style:{color:"var(--color-green)"},children:"ls skills/"})]}),N.jsxs("div",{className:"tree-root",children:[N.jsx("span",{className:"tree-icon",children:"📁"}),N.jsx("span",{className:"tree-label",children:"skills"})]}),wx.map((_,M)=>{const E=M===wx.length-1,S=n[_.category];return N.jsxs("div",{className:"tree-branch",children:[N.jsxs("div",{className:"tree-folder",onClick:()=>g(_.category),role:"button",tabIndex:0,onKeyDown:y=>(y.key==="Enter"||y.key===" ")&&g(_.category),children:[N.jsx("span",{className:"tree-connector",children:E?"└── ":"├── "}),N.jsx("span",{className:"tree-icon",children:S?"📂":"📁"}),N.jsx("span",{className:"tree-category-label",children:_.category}),N.jsx("span",{className:"tree-arrow",style:{transform:S?"rotate(90deg)":"rotate(0deg)"},children:"▶"})]}),S&&N.jsx("div",{className:"tree-items",children:_.items.map((y,w)=>{const b=w===_.items.length-1;return N.jsxs("div",{className:"tree-item",children:[N.jsx("span",{className:"tree-indent",children:E?"    ":"│   "}),N.jsx("span",{className:"tree-connector",children:b?"└── ":"├── "}),N.jsx("span",{className:"tree-icon",children:"▸"}),N.jsx("span",{className:"tree-item-label",children:y})]},y)})})]},_.category)})]})]}),N.jsxs("div",{className:"github-cal-card base-card glow-card",children:[N.jsxs("div",{className:"github-cal-header",children:[N.jsx("span",{className:"github-cal-title",children:"GitHub Contributions"}),N.jsx("span",{className:"github-cal-sub",children:"Last 12 months"})]}),N.jsx("div",{className:"github-cal-body",children:N.jsx(oM,{username:"AdrielBobby",colorScheme:"dark",theme:{light:["#eee8f4","#c4b5fd","#8b5cf6","#5b2d8e","#2d1b4e"],dark:["#07080d","#2d1b4e","#5b2d8e","#8b5cf6","#c4b5fd"]},blockSize:13,blockMargin:4,fontSize:12})})]})]})})}function Iu({children:n,direction:e="up",delay:t=0,duration:r=.6}){const o=ge.useRef(null),a=gm(o,{once:!0,margin:"-80px"}),c={hidden:{opacity:0,y:e==="up"?50:e==="down"?-50:0,x:e==="left"?50:e==="right"?-50:0},visible:{opacity:1,y:0,x:0,transition:{duration:r,delay:t,ease:"easeOut"}}};return N.jsx(Us.div,{ref:o,variants:c,initial:"hidden",animate:a?"visible":"hidden",children:n})}const fl=ge.forwardRef(function({children:e,className:t="",style:r={},as:o="div",onMouseMove:a,onMouseLeave:c,glowColor:u="258 84 66",backgroundColor:d="var(--color-surface, #050505)",borderRadius:h=8,...p},v){const g=ge.useRef(null),_=M=>{g.current=M,typeof v=="function"?v(M):v&&(v.current=M)};return N.jsx(o,{ref:_,className:`base-card glow-card ${t}`,style:{"--card-bg":d,"--border-radius":`${h}px`,...r},...p,children:N.jsx("div",{className:"border-glow-inner",children:e})})}),oI=[{degree:"B.Tech., Computer Science Engineering",school:"Rajagiri School of Engineering and Technology",location:"Kochi",year:"2024 – 2028",cgpa:"8.0"},{degree:"Class 12, CBSE",school:"Rajagiri Public School",location:"Kalamassery",year:"2022 – 2024",cgpa:"8.9"},{degree:"Class 10, CBSE",school:"The Charter School",location:"Pukattupady",year:"2021 – 2022",cgpa:"8.9"}];function aI(){return N.jsx("section",{id:"education",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:N.jsx(Zi,{text:"Education",speed:35})}),N.jsx("div",{className:"edu-cards",children:oI.map((n,e)=>N.jsx(Iu,{direction:"up",delay:e*.15,children:N.jsxs(fl,{className:"edu-card",children:[N.jsx("h3",{children:n.degree}),N.jsxs("p",{className:"edu-school",children:[n.school,", ",n.location]}),N.jsxs("div",{className:"edu-meta",children:[N.jsx("span",{children:n.year}),N.jsxs("span",{children:["CGPA: ",n.cgpa]})]})]})},n.degree))})]})})}const lI=["Offensive security fundamentals: reconnaissance, exploitation, post-exploitation.","Web application penetration testing: SQLi, XSS, file inclusion.","Network security: port scanning, traffic analysis, firewall evasion.","Practical labs and CTF-style challenges."];function cI(){return N.jsx("section",{id:"certifications",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:N.jsx(Zi,{text:"Certifications",speed:35})}),N.jsx(Iu,{direction:"up",delay:0,children:N.jsxs(fl,{className:"cert-card",children:[N.jsx("h3",{children:"Certified Penetration Tester"}),N.jsx("p",{className:"cert-issuer",children:"RedTeam Academy — May 2025 – Aug 2025"}),N.jsx("ul",{children:lI.map(n=>N.jsx("li",{children:n},n))})]})})]})})}const uI=[{title:"Vaccine Dispatch Tracker",blurb:" A full-stack vaccine inventory and logistics management system featuring a modern GUI, automated order tracking, and real-time data visualization.",tech:["Python","MySQL","Matplotlib","MySQL","CustomTkinter"],url:"https://github.com/AdrielBobby/vaccine-dispatch-project"},{title:"ESP32 Marauder",blurb:"Wi‑Fi/Bluetooth pentesting toolkit built on ESP32 with Marauder firmware for wireless auditing.",tech:["ESP32","Arduino IDE","Marauder Firmware","Wireshark"]},{title:"Homelab for Cybersecurity",blurb:"Self-hosted lab environment with VMs and vulnerable boxes for hands-on penetration testing practice.",tech:["VirtualBox","Ubuntu Server","Kali Linux","pfSense","Docker"]},{title:"PoolDetect AI – High-Speed Satellite Pool Detection",blurb:"End-to-end satellite image pipeline that detects swimming pools using a custom OpenCV morphology approach—sub‑0.1 s per image on CPU.",tech:["Python","OpenCV","NumPy","Nominatim API","Esri World Imagery"],url:"https://github.com/AdrielBobby/ai-swimming-pool-detection"},{title:"MIS-COMMUNICATION-NATER",blurb:"Experimental AI communication system on Raspberry Pi where two models talk to each other instead of answering user queries.",tech:["Raspberry Pi 4B","Raspberry OS Lite","StableLM Zephyr 3B","LEDs","Web UI"]},{title:"Mend Your Heart Game",blurb:"A cozy Valentine’s Day pixel art adventure where players mend a broken heart through meaningful NPC interactions, acts of kindness, and a series of charming minigames.",tech:["Love 2D","Lua","Pixel Art"],url:"https://github.com/AdrielBobby/Mend-your-heart-game"},{title:"Pong Game",blurb:"Face‑powered two‑player Pong game that uses webcam face capture as the in‑game ball and winner animation, built with a custom Tkinter GUI and basic physics.",tech:["Python","tkinter","OpenCV","Pillow","NumPy"]},{title:"Spotify Tracks Data Analysis",blurb:"Exploratory data analysis of a Spotify tracks dataset, cleaning audio‑feature data and generating insight‑driven visualisations on popularity, tempo, genre, and correlations.",tech:["Python","Pandas","NumPy","Matplotlib","Seaborn"]},{title:"Calm-Cockpit",blurb:"An elegant, all-encompassing dashboard for tracking academics, finances, and goals. Features a custom-built responsive sidebar navigation, dark-mode glassmorphism, and secure, encrypted local data storage",tech:["Python","Flask","SQL","JS","CSS Grid"],url:"https://github.com/AdrielBobby/calm-cockpit-multipage-version"},{title:"Gemini Context Monitor",blurb:"A high-performance developer dashboard for real-time tracking, historical analytics, and token optimization of Gemini CLI context windows.",tech:["Python","CustomTkinter","SQLite","Rich","Pydantic"],url:"https://github.com/AdrielBobby/gemini_context_monitor"}];function fI({project:n,index:e}){const t=ge.useRef(null),r=gm(t,{once:!0,margin:"-60px"});return N.jsx(fl,{as:Us.div,ref:t,className:"project-card",initial:{opacity:0,y:40},animate:r?{opacity:1,y:0}:{opacity:0,y:40},transition:{duration:.5,delay:e*.12,ease:"easeOut"},children:N.jsxs("div",{style:{position:"relative",height:"100%",display:"flex",flexDirection:"column",gap:"0.75rem"},children:[n.url&&N.jsx("a",{href:n.url,target:"_blank",rel:"noopener noreferrer",className:"project-github-link","aria-label":`Open ${n.title} on GitHub`,style:{top:"0",right:"0"},children:"↗"}),N.jsx("h3",{children:n.title}),N.jsx("p",{className:"project-blurb",children:n.blurb}),N.jsx("div",{className:"project-tech",children:n.tech.map(o=>N.jsx("span",{children:o},o))})]})})}function dI(){return N.jsx("section",{id:"projects",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:N.jsx(Zi,{text:"Projects",speed:35})}),N.jsx("div",{className:"projects-grid",children:uI.map((n,e)=>N.jsx(fI,{project:n,index:e},n.title))})]})})}const Cx=5,hI=35,pI=["rgba(139,  92, 246, 0.9)","rgba(167, 139, 250, 0.7)","rgba(196, 181, 253, 0.5)","rgba( 91,  45, 142, 0.8)","rgba( 45,  27,  78, 0.9)","rgba( 93, 124, 253, 0.6)"];class mI{constructor({ctx:e,x:t,y:r,color:o,speed:a,delay:c,reverseDelay:u,reducedMotion:d}){this.ctx=e,this.x=t,this.y=r,this.color=o,this.speed=this.rand(.1,.9)*a,this.size=0,this.sizeStep=Math.random()*.6,this.minSize=.5,this.maxSizeInt=2,this.maxSize=this.rand(this.minSize,this.maxSizeInt),this.delay=d?0:c,this.reverseDelay=d?0:u,this.counter=0,this.reverseCounter=0,this.counterStep=Math.random()*4+2,this.isIdle=!1,this.isReverse=!1,this.isShimmer=!1}rand(e,t){return Math.random()*(t-e)+e}draw(){const e=this.maxSizeInt*.5-this.size*.5;this.ctx.fillStyle=this.color,this.ctx.fillRect(Math.round(this.x+e),Math.round(this.y+e),Math.ceil(this.size),Math.ceil(this.size))}appear(){if(this.isIdle=!1,this.reverseCounter=0,this.counter<=this.delay){this.counter+=this.counterStep,this.size>0&&this.draw();return}this.size>=this.maxSize&&(this.isShimmer=!0),this.isShimmer?this.shimmer():this.size+=this.sizeStep,this.draw()}disappear(){if(this.isIdle=!1,this.isShimmer=!1,this.counter=0,this.reverseCounter<=this.reverseDelay){this.reverseCounter+=this.counterStep*2.5,this.size>0&&this.draw();return}if(this.size<=0){this.size=0,this.isIdle=!0;return}this.size-=.3,this.draw()}shimmer(){this.size>=this.maxSize&&(this.isReverse=!0),this.size<=this.minSize&&(this.isReverse=!1),this.size+=this.isReverse?-this.speed:this.speed}}function gI({children:n,className:e="",colors:t=pI}){const r=ge.useRef(null),o=ge.useRef(null),a=ge.useRef([]),c=ge.useRef(null),u=ge.useCallback(()=>{const p=o.current,v=r.current;if(!p||!v)return;const g=v.offsetWidth,_=v.offsetHeight;p.width=g,p.height=_;const M=p.getContext("2d"),E=window.matchMedia("(prefers-reduced-motion: reduce)").matches,S=[],y=Math.sqrt(Math.pow(g/2,2)+Math.pow(_/2,2));for(let w=0;w<g;w+=Cx)for(let b=0;b<_;b+=Cx){const P=w-g/2,I=b-_/2,U=Math.sqrt(P*P+I*I),V=t[Math.floor(Math.random()*t.length)];S.push(new mI({ctx:M,x:w,y:b,color:V,speed:hI*.001,delay:U,reverseDelay:y-U,reducedMotion:E}))}a.current=S},[t]),d=ge.useCallback(p=>{const v=o.current;if(!v)return;v.getContext("2d").clearRect(0,0,v.width,v.height);let _=!1;for(const M of a.current)p==="appear"?(M.appear(),M.isIdle||(_=!0)):(M.disappear(),M.isIdle||(_=!0));_&&(c.current=requestAnimationFrame(()=>d(p)))},[]),h=ge.useCallback(p=>{c.current&&cancelAnimationFrame(c.current);const v=r.current,g=o.current;v&&g&&p==="appear"&&(g.width!==v.offsetWidth||g.height!==v.offsetHeight||a.current.length===0)&&u(),d(p)},[u,d]);return ge.useEffect(()=>(u(),()=>{c.current&&cancelAnimationFrame(c.current)}),[u]),N.jsxs("div",{ref:r,className:`pixel-card-wrapper ${e}`,onMouseEnter:()=>h("appear"),onMouseLeave:()=>h("disappear"),children:[N.jsx("canvas",{ref:o,className:"pixel-card-canvas","aria-hidden":"true"}),N.jsx("div",{className:"pixel-card-content",children:n})]})}const vI=[{title:"High Torque Vertical Axis Wind Turbine Street Lamp",prize:"3rd Prize",bullets:["Development of a High Torque VAWT Street Lamp system.","VAWT converts wind energy into electricity stored in a battery to power an LED streetlight.","Key components: VAWT, generator, battery storage, LDR control system, LED streetlight.","Low starting torque addressed with kickstarter; over-speeding resolved with pitch control."],tech:["VAWT","Generator","Battery","LDR Control","LED"]},{title:"KruizeX Ideathon – Smart Multimodal Transit Queue System",prize:"1st Prize",bullets:["Proposed a digital queue system with lane demarcation for busy jetties.","Unified live-tracking layer bringing Water Metro and feeder buses into Kochi One app."],tech:["Ideathon","Kochi One & KSRTC tracking data","Systems mapping"]}];function _I(n){return n.includes("1st")?"#D4AF37":n.includes("2nd")?"#C0C0C0":n.includes("3rd")?"#CD7F32":"#c4a1ff"}function xI(n){return n.includes("1st")?["rgba(212, 175,  55, 0.95)","rgba(245, 197,  66, 0.75)","rgba(253, 224,  71, 0.55)","rgba(180, 140,  20, 0.85)","rgba(255, 215,   0, 0.65)","rgba(140, 100,  10, 0.70)"]:n.includes("2nd")?["rgba(192, 192, 192, 0.95)","rgba(220, 220, 220, 0.75)","rgba(148, 163, 184, 0.85)","rgba(241, 245, 249, 0.55)","rgba(100, 116, 139, 0.80)","rgba(203, 213, 225, 0.65)"]:n.includes("3rd")?["rgba(205, 127,  50, 0.95)","rgba(230, 150,  60, 0.75)","rgba(180, 100,  35, 0.85)","rgba(245, 160,  50, 0.60)","rgba(140,  80,  25, 0.80)","rgba(210, 130,  45, 0.65)"]:["rgba(139,  92, 246, 0.95)","rgba(167, 139, 250, 0.75)","rgba(196, 181, 253, 0.55)","rgba( 91,  45, 142, 0.85)","rgba( 45,  27,  78, 0.90)","rgba( 93, 124, 253, 0.60)"]}function yI(){return N.jsx("section",{id:"hackathons",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:N.jsx(Zi,{text:"Hackathon Submissions",speed:30})}),N.jsx("div",{className:"edu-cards",children:vI.map((n,e)=>N.jsx(Iu,{direction:"up",delay:e*.15,children:N.jsx(fl,{className:"hackathon-card",children:N.jsxs(gI,{colors:xI(n.prize),children:[N.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"1rem"},children:[N.jsx("h3",{children:n.title}),N.jsx("span",{style:{color:_I(n.prize),fontWeight:"bold",whiteSpace:"nowrap"},children:n.prize})]}),N.jsx("ul",{children:n.bullets.map(t=>N.jsx("li",{children:t},t))}),N.jsx("div",{className:"project-tech",children:n.tech.map(t=>N.jsx("span",{children:t},t))})]})})},n.title))})]})})}const SI=[{title:"Electronic Communications Coordinator",org:"IEEE RSET Student Branch",date:"March 2025 – March 2026",bullets:["Responsible for all official announcements and communication for the Student Branch."]},{title:"Technical Coordinator",org:"IEEE RSET Student Branch",date:"March 2026 – Present",bullets:["Supporting technical side of IEEE RSET SB events — hardware demos, speaker support, hands-on workshops."]}];function MI(){return N.jsx("section",{id:"leadership",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:N.jsx(Zi,{text:"Leadership & Communities",speed:30})}),N.jsx("div",{className:"edu-cards",children:SI.map((n,e)=>N.jsx(Iu,{direction:"up",delay:e*.15,children:N.jsxs(fl,{className:"leadership-card",children:[N.jsx("h3",{children:n.title}),N.jsxs("p",{className:"leadership-org",children:[n.org," — ",n.date]}),N.jsx("ul",{children:n.bullets.map(t=>N.jsx("li",{children:t},t))})]})},n.title))})]})})}const Kc="adrielbobby3@gmail.com",EI="https://github.com/AdrielBobby",TI="https://linkedin.com/in/adrielbobby",wI="https://tinkerhub.org/@adriel_bobby";function AI(){const[n,e]=ge.useState(!1),t=()=>{navigator.clipboard.writeText(Kc).then(()=>{e(!0),setTimeout(()=>e(!1),1500)})};return N.jsx("section",{id:"contact",children:N.jsxs("div",{className:"container",children:[N.jsx("h2",{className:"section-title",children:"Contact"}),N.jsxs("div",{className:"contact-terminal base-card",children:[N.jsxs("div",{className:"contact-terminal-topbar",children:[N.jsx("span",{className:"dot red"}),N.jsx("span",{className:"dot yellow"}),N.jsx("span",{className:"dot green"}),N.jsx("span",{className:"contact-terminal-title",children:"contact.sh"})]}),N.jsxs("div",{className:"contact-terminal-body",children:[N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-prompt",children:"> "}),N.jsx(Zi,{text:"ping adriel",speed:35})]}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-prompt",children:"> "}),N.jsx(Zi,{text:"status:",speed:35,startDelay:600})," ",N.jsx("span",{className:"ct-online",children:"online ●"})]}),N.jsx("div",{className:"ct-spacer"}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-key",children:"email    "}),N.jsx("span",{className:"ct-sep",children:": "}),N.jsx("a",{href:`mailto:${Kc}`,className:"ct-link",children:Kc})]}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-key",children:"github   "}),N.jsx("span",{className:"ct-sep",children:": "}),N.jsx("a",{href:EI,target:"_blank",rel:"noopener noreferrer",className:"ct-link",children:"github.com/AdrielBobby"})]}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-key",children:"linkedin "}),N.jsx("span",{className:"ct-sep",children:": "}),N.jsx("a",{href:TI,target:"_blank",rel:"noopener noreferrer",className:"ct-link",children:"linkedin.com/in/adrielbobby"})]}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-key",children:"tinkerhub"}),N.jsx("span",{className:"ct-sep",children:": "}),N.jsx("a",{href:wI,target:"_blank",rel:"noopener noreferrer",className:"ct-link",children:"@adriel_bobby"})]}),N.jsx("div",{className:"ct-spacer"}),N.jsxs("p",{className:"ct-line",children:[N.jsx("span",{className:"ct-prompt",children:"> "}),"press [enter] to start a conversation",N.jsx("span",{className:"cursor-blink",children:" ▮"})]})]})]}),N.jsxs("div",{className:"contact-actions",children:[N.jsx("a",{href:`mailto:${Kc}`,className:"btn btn-primary",children:"Open Mail Client"}),N.jsx("button",{className:"btn btn-ghost",onClick:t,children:n?"copied! ✓":"Copy Email"})]})]})})}function CI(){return N.jsx("footer",{className:"footer",children:N.jsx("div",{className:"container",children:N.jsx("p",{children:"© 2026 Adriel Bobby"})})})}function RI({onDone:n}){const e=ge.useRef(null),t=ge.useRef(null);return ge.useEffect(()=>{const u=document.getElementById("loader");if(!u||!t.current||!e.current)return;const d=window.innerWidth<=768?20:14,h=Math.ceil(window.innerWidth/d),p=Math.ceil(window.innerHeight/d);u.style.setProperty("--grid-cols",h),u.style.setProperty("--grid-rows",p);const v=h*p,g=document.createDocumentFragment();for(let E=0;E<v;E++){const S=document.createElement("span"),y=Math.random()*600;S.style.setProperty("--delay",`${y}ms`),g.appendChild(S)}t.current.appendChild(g);let _=[];const M=setTimeout(()=>{for(let y=0;y<2;y++){const w=setTimeout(()=>{if(e.current){const b=document.createElement("span");b.textContent="kv"[y],e.current.appendChild(b)}},y*100);_.push(w)}const S=setTimeout(()=>{u.classList.add("dissolving");const y=setTimeout(()=>{n()},1400);_.push(y)},100+250);_.push(S)},250);return _.push(M),()=>{_.forEach(clearTimeout)}},[n]),N.jsxs("div",{id:"loader",children:[N.jsx("div",{className:"pixel-grid",ref:t}),N.jsx("div",{className:"terminal-loader",children:N.jsxs("div",{className:"terminal-line",children:[N.jsx("span",{className:"prompt-path",children:"C:\\Users\\Adriel>"}),N.jsx("span",{className:"loader-typed-text",ref:e}),N.jsx("span",{className:"loader-cursor",children:"▋"})]})})]})}function bI(){const[n,e]=ge.useState(!0),[t,r]=ge.useState(!1);return N.jsxs(N.Fragment,{children:[n&&N.jsx(RI,{onDone:()=>{e(!1),r(!0)}}),N.jsx("header",{children:N.jsx(ZE,{})}),N.jsxs("main",{children:[N.jsx(uN,{animateIn:t}),N.jsx(sI,{}),N.jsx(aI,{}),N.jsx(cI,{}),N.jsx(dI,{}),N.jsx(yI,{}),N.jsx(MI,{}),N.jsx(AI,{})]}),N.jsx(CI,{})]})}qE.createRoot(document.getElementById("root")).render(N.jsx(bx.StrictMode,{children:N.jsx(bI,{})}));export{PI as R,XE as a,Ds as g,N as j,ge as r};

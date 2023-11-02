// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).capitals=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function i(r,t){return null!=r&&o.call(r,t)}var a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";var c=e()?function(r){var t,e,o;if(null==r)return n.call(r);e=r[u],t=i(r,u);try{r[u]=void 0}catch(t){return n.call(r)}return o=n.call(r),t?r[u]=e:delete r[u],o}:function(r){return n.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)},l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function v(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+y(o):y(o)+r,n&&(r="-"+r)),r}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function b(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!p(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=v(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=v(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===d.call(r.specifier)?d.call(e):g.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}function h(r){return"string"==typeof r}var w=Math.abs,m=String.prototype.toLowerCase,A=String.prototype.toUpperCase,j=String.prototype.replace,O=/e\+(\d)$/,E=/e-(\d)$/,S=/^(\d+)$/,I=/^(\d+)e/,_=/\.0$/,k=/\.0*e/,x=/(\..*[^0])0*e/;function F(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":w(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=j.call(e,x,"$1e"),e=j.call(e,k,"e"),e=j.call(e,_,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=j.call(e,O,"e+0$1"),e=j.call(e,E,"e-0$1"),r.alternate&&(e=j.call(e,S,"$1."),e=j.call(e,I,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===A.call(r.specifier)?A.call(e):m.call(e)}function T(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}function U(r,t,e){var n=t-r.length;return n<0?r:r=e?r+T(n):T(n)+r}var P=String.fromCharCode,C=isNaN,V=Array.isArray;function B(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function N(r){var t,e,n,o,i,a,u,c,f;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(h(n=r[c]))a+=n;else{if(t=void 0!==n.precision,!(n=B(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,C(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,C(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!C(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=C(i)?String(n.arg):P(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=F(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=U(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function R(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function L(r){var t,e,n,o;for(e=[],o=0,n=$.exec(r);n;)(t=r.slice(o,$.lastIndex-n[0].length)).length&&e.push(t),e.push(R(n)),o=$.lastIndex,n=$.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function M(r){return"string"==typeof r}function D(r){var t,e,n;if(!M(r))throw new TypeError(D("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=L(r),(e=new Array(arguments.length))[0]=t,n=1;n<e.length;n++)e[n]=arguments[n];return N.apply(null,e)}var G,z=Object.prototype,H=z.toString,W=z.__defineGetter__,X=z.__defineSetter__,Z=z.__lookupGetter__,Y=z.__lookupSetter__;G=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(D("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===H.call(e))throw new TypeError(D("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(Z.call(r,t)||Y.call(r,t)?(n=r.__proto__,r.__proto__=z,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&W&&W.call(r,t,e.get),a&&X&&X.call(r,t,e.set),r};var J=G;function q(r,t,e){J(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function K(r){return"number"==typeof r}var Q=Number,rr=Q.prototype.toString;var tr=e();function er(r){return"object"==typeof r&&(r instanceof Q||(tr?function(r){try{return rr.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function nr(r){return K(r)||er(r)}q(nr,"isPrimitive",K),q(nr,"isObject",er);var or=Number.POSITIVE_INFINITY,ir=Q.NEGATIVE_INFINITY,ar=Math.floor;function ur(r){return ar(r)===r}function cr(r){return r<or&&r>ir&&ur(r)}function fr(r){return K(r)&&cr(r)}function lr(r){return er(r)&&cr(r.valueOf())}function sr(r){return fr(r)||lr(r)}function pr(r){return fr(r)&&r>=0}function yr(r){return lr(r)&&r.valueOf()>=0}function vr(r){return pr(r)||yr(r)}function gr(r){return null!==r&&"object"==typeof r}function dr(r){return gr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}q(sr,"isPrimitive",fr),q(sr,"isObject",lr),q(vr,"isPrimitive",pr),q(vr,"isObject",yr),q(gr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(D("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!f(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(gr));var br=Object,hr=/./;function wr(r){return"boolean"==typeof r}var mr=Boolean,Ar=Boolean.prototype.toString;var jr=e();function Or(r){return"object"==typeof r&&(r instanceof mr||(jr?function(r){try{return Ar.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function Er(r){return wr(r)||Or(r)}function Sr(){return new Function("return this;")()}q(Er,"isPrimitive",wr),q(Er,"isObject",Or);var Ir="object"==typeof self?self:null,_r="object"==typeof window?window:null,kr="object"==typeof global?global:null,xr="object"==typeof globalThis?globalThis:null;var Fr=function(r){if(arguments.length){if(!wr(r))throw new TypeError(D("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return Sr()}if(xr)return xr;if(Ir)return Ir;if(_r)return _r;if(kr)return kr;throw new Error("unexpected error. Unable to resolve global object.")}(),Tr=Fr.document&&Fr.document.childNodes,Ur=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var Cr=/^\s*function\s*([^(]*)/i;function Vr(r){var t,e,n;if(("Object"===(e=c(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Cr.exec(n.toString()))return t[1]}return dr(r)?"Buffer":e}q(Pr,"REGEXP",Cr);var Br="function"==typeof hr||"object"==typeof Ur||"function"==typeof Tr?function(r){return Vr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Vr(r).toLowerCase():t};function Nr(r){return"function"===Br(r)}var $r,Rr=Object.getPrototypeOf;$r=Nr(Object.getPrototypeOf)?Rr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Lr=$r;function Mr(r){return null==r?null:(r=br(r),Lr(r))}function Dr(r){return"string"==typeof r}var Gr=String.prototype.valueOf;var zr=e();function Hr(r){return"object"==typeof r&&(r instanceof String||(zr?function(r){try{return Gr.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function Wr(r){return Dr(r)||Hr(r)}function Xr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Zr(r){return r!=r}function Yr(r){return K(r)&&Zr(r)}function Jr(r){return er(r)&&Zr(r.valueOf())}function qr(r){return Yr(r)||Jr(r)}q(Wr,"isPrimitive",Dr),q(Wr,"isObject",Hr),q(Xr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),q(qr,"isPrimitive",Yr),q(qr,"isObject",Jr);function Kr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=9007199254740991}function Qr(r,t,e){var n,o;if(!Kr(r)&&!Dr(r))throw new TypeError(D("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!fr(e))throw new TypeError(D("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(qr(t)){for(;o<n;o++)if(qr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function rt(r){return Object.keys(Object(r))}var tt,et=void 0!==Object.keys;function nt(r){return"[object Arguments]"===c(r)}tt=function(){return nt(arguments)}();var ot=tt;function it(r){return r!=r}function at(r){return K(r)&&it(r)}function ut(r){return er(r)&&it(r.valueOf())}function ct(r){return at(r)||ut(r)}q(ct,"isPrimitive",at),q(ct,"isObject",ut);var ft=Object.prototype.propertyIsEnumerable;var lt=!ft.call("beep","0");function st(r,t){var e;return null!=r&&(!(e=ft.call(r,t))&&lt&&Wr(r)?!at(t=+t)&&fr(t)&&t>=0&&t<r.length:e)}var pt=4294967295;var yt=ot?nt:function(r){return null!==r&&"object"==typeof r&&!f(r)&&"number"==typeof r.length&&ur(r.length)&&r.length>=0&&r.length<=pt&&i(r,"callee")&&!st(r,"callee")},vt=Array.prototype.slice;var gt=st((function(){}),"prototype"),dt=!st({toString:null},"toString");function bt(r){return r.constructor&&r.constructor.prototype===r}var ht=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wt="undefined"==typeof window?void 0:window;var mt=function(){var r;if("undefined"===Br(wt))return!1;for(r in wt)try{-1===Qr(ht,r)&&i(wt,r)&&null!==wt[r]&&"object"===Br(wt[r])&&bt(wt[r])}catch(r){return!0}return!1}(),At="undefined"!=typeof window;var jt,Ot=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];jt=et?function(){return 2!==(rt(arguments)||"").length}(1,2)?function(r){return yt(r)?rt(vt.call(r)):rt(r)}:rt:function(r){var t,e,n,o,a,u,c;if(o=[],yt(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!i(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!gr(r))return o;e=gt&&n}for(a in r)e&&"prototype"===a||!i(r,a)||o.push(String(a));if(dt)for(t=function(r){if(!1===At&&!mt)return bt(r);try{return bt(r)}catch(r){return!1}}(r),c=0;c<Ot.length;c++)u=Ot[c],t&&"constructor"===u||!i(r,u)||o.push(String(u));return o};var Et=jt,St=void 0!==Object.getOwnPropertyNames,It=br.getOwnPropertyNames;var _t=St?function(r){return It(br(r))}:function(r){return Et(br(r))},kt=void 0!==Object.getOwnPropertyDescriptor,xt=Object.getOwnPropertyDescriptor;var Ft=kt?function(r,t){var e;return null==r||void 0===(e=xt(r,t))?null:e}:function(r,t){return i(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Tt="function"==typeof Buffer?Buffer:null;var Ut,Pt=r.Buffer;Ut=function(){var r,t;if("function"!=typeof Tt)return!1;try{r=dr(t="function"==typeof Tt.from?Tt.from([1,2,3,4]):new Tt([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?Pt:function(){throw new Error("not implemented")};var Ct=Ut;var Vt=Nr(Ct.from)?function(r){if(!dr(r))throw new TypeError(D("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Ct.from(r)}:function(r){if(!dr(r))throw new TypeError(D("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Ct(r)},Bt="function"==typeof Int8Array;var Nt="function"==typeof Int8Array?Int8Array:null;var $t,Rt="function"==typeof Int8Array?Int8Array:void 0;$t=function(){var r,t,e;if("function"!=typeof Nt)return!1;try{t=new Nt([1,3.14,-3.14,128]),e=t,r=(Bt&&e instanceof Int8Array||"[object Int8Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Rt:function(){throw new Error("not implemented")};var Lt=$t,Mt="function"==typeof Uint8Array;var Dt="function"==typeof Uint8Array?Uint8Array:null;var Gt,zt="function"==typeof Uint8Array?Uint8Array:void 0;Gt=function(){var r,t,e;if("function"!=typeof Dt)return!1;try{t=new Dt(t=[1,3.14,-3.14,256,257]),e=t,r=(Mt&&e instanceof Uint8Array||"[object Uint8Array]"===c(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?zt:function(){throw new Error("not implemented")};var Ht=Gt,Wt="function"==typeof Uint8ClampedArray;var Xt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Zt,Yt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Zt=function(){var r,t,e;if("function"!=typeof Xt)return!1;try{t=new Xt([-1,0,1,3.14,4.99,255,256]),e=t,r=(Wt&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Yt:function(){throw new Error("not implemented")};var Jt=Zt,qt="function"==typeof Int16Array;var Kt="function"==typeof Int16Array?Int16Array:null;var Qt,re="function"==typeof Int16Array?Int16Array:void 0;Qt=function(){var r,t,e;if("function"!=typeof Kt)return!1;try{t=new Kt([1,3.14,-3.14,32768]),e=t,r=(qt&&e instanceof Int16Array||"[object Int16Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?re:function(){throw new Error("not implemented")};var te=Qt,ee="function"==typeof Uint16Array;var ne="function"==typeof Uint16Array?Uint16Array:null;var oe,ie="function"==typeof Uint16Array?Uint16Array:void 0;oe=function(){var r,t,e;if("function"!=typeof ne)return!1;try{t=new ne(t=[1,3.14,-3.14,65536,65537]),e=t,r=(ee&&e instanceof Uint16Array||"[object Uint16Array]"===c(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ie:function(){throw new Error("not implemented")};var ae=oe,ue="function"==typeof Int32Array;var ce="function"==typeof Int32Array?Int32Array:null;var fe,le="function"==typeof Int32Array?Int32Array:void 0;fe=function(){var r,t,e;if("function"!=typeof ce)return!1;try{t=new ce([1,3.14,-3.14,2147483648]),e=t,r=(ue&&e instanceof Int32Array||"[object Int32Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?le:function(){throw new Error("not implemented")};var se=fe,pe="function"==typeof Uint32Array;var ye="function"==typeof Uint32Array?Uint32Array:null;var ve,ge="function"==typeof Uint32Array?Uint32Array:void 0;ve=function(){var r,t,e;if("function"!=typeof ye)return!1;try{t=new ye(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(pe&&e instanceof Uint32Array||"[object Uint32Array]"===c(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ge:function(){throw new Error("not implemented")};var de=ve,be="function"==typeof Float32Array;var he="function"==typeof Float32Array?Float32Array:null;var we,me="function"==typeof Float32Array?Float32Array:void 0;we=function(){var r,t,e;if("function"!=typeof he)return!1;try{t=new he([1,3.14,-3.14,5e40]),e=t,r=(be&&e instanceof Float32Array||"[object Float32Array]"===c(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===or}catch(t){r=!1}return r}()?me:function(){throw new Error("not implemented")};var Ae=we,je="function"==typeof Float64Array;var Oe="function"==typeof Float64Array?Float64Array:null;var Ee,Se="function"==typeof Float64Array?Float64Array:void 0;Ee=function(){var r,t,e;if("function"!=typeof Oe)return!1;try{t=new Oe([1,3.14,-3.14,NaN]),e=t,r=(je&&e instanceof Float64Array||"[object Float64Array]"===c(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?Se:function(){throw new Error("not implemented")};var Ie=Ee;function _e(r){return new Lt(r)}function ke(r){return new Ht(r)}function xe(r){return new Jt(r)}function Fe(r){return new te(r)}function Te(r){return new ae(r)}function Ue(r){return new se(r)}function Pe(r){return new de(r)}function Ce(r){return new Ae(r)}function Ve(r){return new Ie(r)}var Be={int8array:_e,uint8array:ke,uint8clampedarray:xe,int16array:Fe,uint16array:Te,int32array:Ue,uint32array:Pe,float32array:Ce,float64array:Ve};function Ne(r,t,e,n,o){var a,u,l,s,p,y,v,g,d,b;if(o-=1,"object"!=typeof r||null===r)return r;if(dr(r))return Vt(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===c(r))return!0;r=Mr(r)}return!1}(r))return function(r){var t,e,n,o,a,u,c=[],l=[];for(a=new r.constructor(r.message),c.push(r),l.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),t=Et(r),u=0;u<t.length;u++)o=t[u],i(e=Ft(r,o),"value")&&(n=f(r[o])?[]:{},e.value=Ne(r[o],n,c,l,-1)),J(a,o,e);return a}(r);if("date"===(l=Br(r)))return new Date(+r);if("regexp"===l)return function(r){if(!Dr(r))throw new TypeError(D("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===l)return new Set(r);if("map"===l)return new Map(r);if("string"===l||"boolean"===l||"number"===l)return r.valueOf();if(p=Be[l])return p(r);if("array"!==l&&"object"!==l)return"function"==typeof Object.freeze?function(r){var t,e,n,o,a,u,c,l;for(t=[],o=[],c=Object.create(Mr(r)),t.push(r),o.push(c),e=_t(r),l=0;l<e.length;l++)n=e[l],i(a=Ft(r,n),"value")&&(u=f(r[n])?[]:{},a.value=Ne(r[n],u,t,o,-1)),J(c,n,a);return Object.isExtensible(r)||Object.preventExtensions(c),Object.isSealed(r)&&Object.seal(c),Object.isFrozen(r)&&Object.freeze(c),c}(r):{};if(u=Et(r),o>0)for(a=l,b=0;b<u.length;b++)g=r[y=u[b]],l=Br(g),"object"!=typeof g||null===g||"array"!==l&&"object"!==l||dr(g)?"object"===a?(i(s=Ft(r,y),"value")&&(s.value=Ne(g)),J(t,y,s)):t[y]=Ne(g):-1===(d=Qr(e,g))?(v=f(g)?new Array(g.length):{},e.push(g),n.push(v),"array"===a?t[y]=Ne(g,v,e,n,o):(i(s=Ft(r,y),"value")&&(s.value=Ne(g,v,e,n,o)),J(t,y,s))):t[y]=n[d];else if("array"===l)for(b=0;b<u.length;b++)t[y=u[b]]=r[y];else for(b=0;b<u.length;b++)y=u[b],s=Ft(r,y),J(t,y,s);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}var $e=["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Hartford","Dover","Tallahassee","Atlanta","Honolulu","Boise","Springfield","Indianapolis","Des Moines","Topeka","Frankfort","Baton Rouge","Augusta","Annapolis","Boston","Lansing","Saint Paul","Jackson","Jefferson City","Helena","Lincoln","Carson City","Concord","Trenton","Santa Fe","Albany","Raleigh","Bismarck","Columbus","Oklahoma City","Salem","Harrisburg","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City","Montpelier","Richmond","Olympia","Charleston","Madison","Cheyenne"];return function(){return function(r,t){var e;if(arguments.length>1){if(!pr(t))throw new TypeError(D("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===t)return r}else t=or;return Ne(r,e=f(r)?new Array(r.length):{},[r],[e],t)}($e)}}));
//# sourceMappingURL=index.js.map

// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).capitals=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function e(){return t&&"symbol"==typeof Symbol.toStringTag}var n=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;function i(r,t){return null!=r&&o.call(r,t)}var a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";var c=e()?function(r){var t,e,o;if(null==r)return n.call(r);e=r[u],t=i(r,u);try{r[u]=void 0}catch(t){return n.call(r)}return o=n.call(r),t?r[u]=e:delete r[u],o}:function(r){return n.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)},l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s=Object.defineProperty;function p(r){return"number"==typeof r}function y(r){var t,e="";for(t=0;t<r;t++)e+="0";return e}function v(r,t,e){var n=!1,o=t-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=e?r+y(o):y(o)+r,n&&(r="-"+r)),r}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function b(r){var t,e,n;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,n=parseInt(e,10),!isFinite(n)){if(!p(e))throw new Error("invalid integer. Value: "+e);n=0}return n<0&&("u"===r.specifier||10!==t)&&(n=4294967295+n+1),n<0?(e=(-n).toString(t),r.precision&&(e=v(e,r.precision,r.padRight)),e="-"+e):(e=n.toString(t),n||r.precision?r.precision&&(e=v(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===d.call(r.specifier)?d.call(e):g.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var h=Math.abs,w=String.prototype.toLowerCase,m=String.prototype.toUpperCase,A=String.prototype.replace,j=/e\+(\d)$/,O=/e-(\d)$/,E=/^(\d+)$/,S=/^(\d+)e/,I=/\.0$/,_=/\.0*e/,k=/(\..*[^0])0*e/;function x(r){var t,e,n=parseFloat(r.arg);if(!isFinite(n)){if(!p(r.arg))throw new Error("invalid floating-point number. Value: "+e);n=r.arg}switch(r.specifier){case"e":case"E":e=n.toExponential(r.precision);break;case"f":case"F":e=n.toFixed(r.precision);break;case"g":case"G":h(n)<1e-4?((t=r.precision)>0&&(t-=1),e=n.toExponential(t)):e=n.toPrecision(r.precision),r.alternate||(e=A.call(e,k,"$1e"),e=A.call(e,_,"e"),e=A.call(e,I,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=A.call(e,j,"e+0$1"),e=A.call(e,O,"e-0$1"),r.alternate&&(e=A.call(e,E,"$1."),e=A.call(e,S,"$1.e")),n>=0&&r.sign&&(e=r.sign+e),e=r.specifier===m.call(r.specifier)?m.call(e):w.call(e)}function F(r){var t,e="";for(t=0;t<r;t++)e+=" ";return e}var T=String.fromCharCode,U=isNaN,P=Array.isArray;function C(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function V(r){var t,e,n,o,i,a,u,c,f,l,s,p,y;if(!P(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(n=r[c],"string"==typeof n)a+=n;else{if(t=void 0!==n.precision,!(n=C(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+n+"`.");for(n.mapping&&(u=n.mapping),e=n.flags,f=0;f<e.length;f++)switch(o=e.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=e.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,U(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(t&&"*"===n.precision){if(n.precision=parseInt(arguments[u],10),u+=1,U(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,t=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(n.padZeros=!1),n.arg=b(n);break;case"s":n.maxWidth=t?n.precision:-1;break;case"c":if(!U(n.arg)){if((i=parseInt(n.arg,10))<0||i>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=U(i)?String(n.arg):T(i)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(n.precision=6),n.arg=x(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=v(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,y=void 0,(y=s-l.length)<0?l:l=p?l+F(y):F(y)+l)),a+=n.arg||"",u+=1}return a}var B=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function N(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function $(r){var t,e,n,o;for(e=[],o=0,n=B.exec(r);n;)(t=r.slice(o,B.lastIndex-n[0].length)).length&&e.push(t),e.push(N(n)),o=B.lastIndex,n=B.exec(r);return(t=r.slice(o)).length&&e.push(t),e}function R(r){var t,e;if("string"!=typeof r)throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[$(r)],e=1;e<arguments.length;e++)t.push(arguments[e]);return V.apply(null,t)}var L,M=Object.prototype,D=M.toString,G=M.__defineGetter__,z=M.__defineSetter__,H=M.__lookupGetter__,W=M.__lookupSetter__;L=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?s:function(r,t,e){var n,o,i,a;if("object"!=typeof r||null===r||"[object Array]"===D.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof e||null===e||"[object Array]"===D.call(e))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",e));if((o="value"in e)&&(H.call(r,t)||W.call(r,t)?(n=r.__proto__,r.__proto__=M,delete r[t],r[t]=e.value,r.__proto__=n):r[t]=e.value),i="get"in e,a="set"in e,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&G&&G.call(r,t,e.get),a&&z&&z.call(r,t,e.set),r};var X=L;function Z(r,t,e){X(r,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}function Y(r){return"number"==typeof r}var J=Number,q=J.prototype.toString;var K=e();function Q(r){return"object"==typeof r&&(r instanceof J||(K?function(r){try{return q.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function rr(r){return Y(r)||Q(r)}Z(rr,"isPrimitive",Y),Z(rr,"isObject",Q);var tr=Number.POSITIVE_INFINITY,er=J.NEGATIVE_INFINITY,nr=Math.floor;function or(r){return nr(r)===r}function ir(r){return r<tr&&r>er&&or(r)}function ar(r){return Y(r)&&ir(r)}function ur(r){return Q(r)&&ir(r.valueOf())}function cr(r){return ar(r)||ur(r)}function fr(r){return ar(r)&&r>=0}function lr(r){return ur(r)&&r.valueOf()>=0}function sr(r){return fr(r)||lr(r)}function pr(r){return null!==r&&"object"==typeof r}function yr(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}Z(cr,"isPrimitive",ar),Z(cr,"isObject",ur),Z(sr,"isPrimitive",fr),Z(sr,"isObject",lr),Z(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(R("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var e,n;if(!f(t))return!1;if(0===(e=t.length))return!1;for(n=0;n<e;n++)if(!1===r(t[n]))return!1;return!0}}(pr));var vr=Object,gr=/./;function dr(r){return"boolean"==typeof r}var br=Boolean,hr=Boolean.prototype.toString;var wr=e();function mr(r){return"object"==typeof r&&(r instanceof br||(wr?function(r){try{return hr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function Ar(r){return dr(r)||mr(r)}Z(Ar,"isPrimitive",dr),Z(Ar,"isObject",mr);var jr="object"==typeof self?self:null,Or="object"==typeof window?window:null,Er="object"==typeof global?global:null,Sr="object"==typeof globalThis?globalThis:null;var Ir=function(r){if(arguments.length){if(!dr(r))throw new TypeError(R("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(Sr)return Sr;if(jr)return jr;if(Or)return Or;if(Er)return Er;throw new Error("unexpected error. Unable to resolve global object.")}(),_r=Ir.document&&Ir.document.childNodes,kr=Int8Array;function xr(){return/^\s*function\s*([^(]*)/i}var Fr=/^\s*function\s*([^(]*)/i;function Tr(r){var t,e,n;if(("Object"===(e=c(r).slice(8,-1))||"Error"===e)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(t=Fr.exec(n.toString()))return t[1]}return yr(r)?"Buffer":e}Z(xr,"REGEXP",Fr);var Ur="function"==typeof gr||"object"==typeof kr||"function"==typeof _r?function(r){return Tr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?Tr(r).toLowerCase():t};function Pr(r){return"function"===Ur(r)}var Cr,Vr=Object.getPrototypeOf;Cr=Pr(Object.getPrototypeOf)?Vr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Br=Cr;function Nr(r){return null==r?null:(r=vr(r),Br(r))}function $r(r){return"string"==typeof r}var Rr=String.prototype.valueOf;var Lr=e();function Mr(r){return"object"==typeof r&&(r instanceof String||(Lr?function(r){try{return Rr.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function Dr(r){return $r(r)||Mr(r)}function Gr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function zr(r){return r!=r}function Hr(r){return Y(r)&&zr(r)}function Wr(r){return Q(r)&&zr(r.valueOf())}function Xr(r){return Hr(r)||Wr(r)}Z(Dr,"isPrimitive",$r),Z(Dr,"isObject",Mr),Z(Gr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),Z(Xr,"isPrimitive",Hr),Z(Xr,"isObject",Wr);var Zr=9007199254740991;function Yr(r,t,e){var n,o,i;if(!(i=r,"object"==typeof i&&null!==i&&"number"==typeof i.length&&or(i.length)&&i.length>=0&&i.length<=Zr||$r(r)))throw new TypeError(R("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!ar(e))throw new TypeError(R("invalid argument. Third argument must be an integer. Value: `%s`.",e));if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(Xr(t)){for(;o<n;o++)if(Xr(r[o]))return o}else for(;o<n;o++)if(r[o]===t)return o;return-1}function Jr(r){return Object.keys(Object(r))}var qr,Kr=void 0!==Object.keys;function Qr(r){return"[object Arguments]"===c(r)}qr=function(){return Qr(arguments)}();var rt=qr,tt=Object.prototype.propertyIsEnumerable;var et=!tt.call("beep","0");function nt(r,t){var e;return null!=r&&(!(e=tt.call(r,t))&&et&&Dr(r)?!Hr(t=+t)&&ar(t)&&t>=0&&t<r.length:e)}var ot=4294967295;var it=rt?Qr:function(r){return null!==r&&"object"==typeof r&&!f(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=ot&&i(r,"callee")&&!nt(r,"callee")},at=Array.prototype.slice;var ut=nt((function(){}),"prototype"),ct=!nt({toString:null},"toString");function ft(r){return r.constructor&&r.constructor.prototype===r}var lt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],st="undefined"==typeof window?void 0:window;var pt=function(){var r;if("undefined"===Ur(st))return!1;for(r in st)try{-1===Yr(lt,r)&&i(st,r)&&null!==st[r]&&"object"===Ur(st[r])&&ft(st[r])}catch(r){return!0}return!1}(),yt="undefined"!=typeof window;var vt,gt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];vt=Kr?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return it(r)?Jr(at.call(r)):Jr(r)}:Jr:function(r){var t,e,n,o,a,u,c;if(o=[],it(r)){for(c=0;c<r.length;c++)o.push(c.toString());return o}if("string"==typeof r){if(r.length>0&&!i(r,"0"))for(c=0;c<r.length;c++)o.push(c.toString())}else{if(!1==(n="function"==typeof r)&&!pr(r))return o;e=ut&&n}for(a in r)e&&"prototype"===a||!i(r,a)||o.push(String(a));if(ct)for(t=function(r){if(!1===yt&&!pt)return ft(r);try{return ft(r)}catch(r){return!1}}(r),c=0;c<gt.length;c++)u=gt[c],t&&"constructor"===u||!i(r,u)||o.push(String(u));return o};var dt=vt,bt=void 0!==Object.getOwnPropertyNames,ht=vr.getOwnPropertyNames;var wt=bt?function(r){return ht(vr(r))}:function(r){return dt(vr(r))},mt=void 0!==Object.getOwnPropertyDescriptor,At=Object.getOwnPropertyDescriptor;var jt=mt?function(r,t){var e;return null==r||void 0===(e=At(r,t))?null:e}:function(r,t){return i(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Ot="function"==typeof Buffer?Buffer:null;var Et,St=r.Buffer;Et=function(){var r,t;if("function"!=typeof Ot)return!1;try{r=yr(t="function"==typeof Ot.from?Ot.from([1,2,3,4]):new Ot([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?St:function(){throw new Error("not implemented")};var It=Et;var _t=Pr(It.from)?function(r){if(!yr(r))throw new TypeError(R("invalid argument. Must provide a Buffer. Value: `%s`.",r));return It.from(r)}:function(r){if(!yr(r))throw new TypeError(R("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new It(r)},kt="function"==typeof Int8Array;var xt="function"==typeof Int8Array?Int8Array:null;var Ft,Tt="function"==typeof Int8Array?Int8Array:void 0;Ft=function(){var r,t,e;if("function"!=typeof xt)return!1;try{t=new xt([1,3.14,-3.14,128]),e=t,r=(kt&&e instanceof Int8Array||"[object Int8Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Tt:function(){throw new Error("not implemented")};var Ut=Ft,Pt="function"==typeof Uint8Array;var Ct="function"==typeof Uint8Array?Uint8Array:null;var Vt,Bt="function"==typeof Uint8Array?Uint8Array:void 0;Vt=function(){var r,t,e;if("function"!=typeof Ct)return!1;try{t=new Ct(t=[1,3.14,-3.14,256,257]),e=t,r=(Pt&&e instanceof Uint8Array||"[object Uint8Array]"===c(e))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Bt:function(){throw new Error("not implemented")};var Nt=Vt,$t="function"==typeof Uint8ClampedArray;var Rt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Lt,Mt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Lt=function(){var r,t,e;if("function"!=typeof Rt)return!1;try{t=new Rt([-1,0,1,3.14,4.99,255,256]),e=t,r=($t&&e instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(e))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Mt:function(){throw new Error("not implemented")};var Dt=Lt,Gt="function"==typeof Int16Array;var zt="function"==typeof Int16Array?Int16Array:null;var Ht,Wt="function"==typeof Int16Array?Int16Array:void 0;Ht=function(){var r,t,e;if("function"!=typeof zt)return!1;try{t=new zt([1,3.14,-3.14,32768]),e=t,r=(Gt&&e instanceof Int16Array||"[object Int16Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Wt:function(){throw new Error("not implemented")};var Xt=Ht,Zt="function"==typeof Uint16Array;var Yt="function"==typeof Uint16Array?Uint16Array:null;var Jt,qt="function"==typeof Uint16Array?Uint16Array:void 0;Jt=function(){var r,t,e;if("function"!=typeof Yt)return!1;try{t=new Yt(t=[1,3.14,-3.14,65536,65537]),e=t,r=(Zt&&e instanceof Uint16Array||"[object Uint16Array]"===c(e))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")};var Kt=Jt,Qt="function"==typeof Int32Array;var re="function"==typeof Int32Array?Int32Array:null;var te,ee="function"==typeof Int32Array?Int32Array:void 0;te=function(){var r,t,e;if("function"!=typeof re)return!1;try{t=new re([1,3.14,-3.14,2147483648]),e=t,r=(Qt&&e instanceof Int32Array||"[object Int32Array]"===c(e))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?ee:function(){throw new Error("not implemented")};var ne=te,oe="function"==typeof Uint32Array;var ie="function"==typeof Uint32Array?Uint32Array:null;var ae,ue="function"==typeof Uint32Array?Uint32Array:void 0;ae=function(){var r,t,e;if("function"!=typeof ie)return!1;try{t=new ie(t=[1,3.14,-3.14,4294967296,4294967297]),e=t,r=(oe&&e instanceof Uint32Array||"[object Uint32Array]"===c(e))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ue:function(){throw new Error("not implemented")};var ce=ae,fe="function"==typeof Float32Array;var le="function"==typeof Float32Array?Float32Array:null;var se,pe="function"==typeof Float32Array?Float32Array:void 0;se=function(){var r,t,e;if("function"!=typeof le)return!1;try{t=new le([1,3.14,-3.14,5e40]),e=t,r=(fe&&e instanceof Float32Array||"[object Float32Array]"===c(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===tr}catch(t){r=!1}return r}()?pe:function(){throw new Error("not implemented")};var ye=se,ve="function"==typeof Float64Array;var ge="function"==typeof Float64Array?Float64Array:null;var de,be="function"==typeof Float64Array?Float64Array:void 0;de=function(){var r,t,e;if("function"!=typeof ge)return!1;try{t=new ge([1,3.14,-3.14,NaN]),e=t,r=(ve&&e instanceof Float64Array||"[object Float64Array]"===c(e))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?be:function(){throw new Error("not implemented")};var he=de;function we(r){return new Ut(r)}function me(r){return new Nt(r)}function Ae(r){return new Dt(r)}function je(r){return new Xt(r)}function Oe(r){return new Kt(r)}function Ee(r){return new ne(r)}function Se(r){return new ce(r)}function Ie(r){return new ye(r)}function _e(r){return new he(r)}var ke={int8array:we,uint8array:me,uint8clampedarray:Ae,int16array:je,uint16array:Oe,int32array:Ee,uint32array:Se,float32array:Ie,float64array:_e};function xe(r,t,e,n,o){var a,u,l,s,p,y,v,g,d,b;if(o-=1,"object"!=typeof r||null===r)return r;if(yr(r))return _t(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===c(r))return!0;r=Nr(r)}return!1}(r))return function(r){var t,e,n,o,a,u,c=[],l=[];for(a=new r.constructor(r.message),c.push(r),l.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),t=dt(r),u=0;u<t.length;u++)o=t[u],i(e=jt(r,o),"value")&&(n=f(r[o])?[]:{},e.value=xe(r[o],n,c,l,-1)),X(a,o,e);return a}(r);if("date"===(l=Ur(r)))return new Date(+r);if("regexp"===l)return function(r){if(!$r(r))throw new TypeError(R("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===l)return new Set(r);if("map"===l)return new Map(r);if("string"===l||"boolean"===l||"number"===l)return r.valueOf();if(p=ke[l])return p(r);if("array"!==l&&"object"!==l)return"function"==typeof Object.freeze?function(r){var t,e,n,o,a,u,c,l;for(t=[],o=[],c=Object.create(Nr(r)),t.push(r),o.push(c),e=wt(r),l=0;l<e.length;l++)n=e[l],i(a=jt(r,n),"value")&&(u=f(r[n])?[]:{},a.value=xe(r[n],u,t,o,-1)),X(c,n,a);return Object.isExtensible(r)||Object.preventExtensions(c),Object.isSealed(r)&&Object.seal(c),Object.isFrozen(r)&&Object.freeze(c),c}(r):{};if(u=dt(r),o>0)for(a=l,b=0;b<u.length;b++)g=r[y=u[b]],l=Ur(g),"object"!=typeof g||null===g||"array"!==l&&"object"!==l||yr(g)?"object"===a?(i(s=jt(r,y),"value")&&(s.value=xe(g)),X(t,y,s)):t[y]=xe(g):-1===(d=Yr(e,g))?(v=f(g)?new Array(g.length):{},e.push(g),n.push(v),"array"===a?t[y]=xe(g,v,e,n,o):(i(s=jt(r,y),"value")&&(s.value=xe(g,v,e,n,o)),X(t,y,s))):t[y]=n[d];else if("array"===l)for(b=0;b<u.length;b++)t[y=u[b]]=r[y];else for(b=0;b<u.length;b++)y=u[b],s=jt(r,y),X(t,y,s);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}var Fe=["Montgomery","Juneau","Phoenix","Little Rock","Sacramento","Denver","Hartford","Dover","Tallahassee","Atlanta","Honolulu","Boise","Springfield","Indianapolis","Des Moines","Topeka","Frankfort","Baton Rouge","Augusta","Annapolis","Boston","Lansing","Saint Paul","Jackson","Jefferson City","Helena","Lincoln","Carson City","Concord","Trenton","Santa Fe","Albany","Raleigh","Bismarck","Columbus","Oklahoma City","Salem","Harrisburg","Providence","Columbia","Pierre","Nashville","Austin","Salt Lake City","Montpelier","Richmond","Olympia","Charleston","Madison","Cheyenne"];return function(){return function(r,t){var e;if(arguments.length>1){if(!fr(t))throw new TypeError(R("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===t)return r}else t=tr;return xe(r,e=f(r)?new Array(r.length):{},[r],[e],t)}(Fe)}}));
//# sourceMappingURL=index.js.map

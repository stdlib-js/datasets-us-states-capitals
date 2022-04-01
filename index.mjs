// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
function e(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var a=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,a.get?a:{enumerable:!0,get:function(){return e[r]}})})),t}var t=require("path").resolve,r=require("@stdlib/fs-read-json").sync,a=t("/home/runner/work/datasets-us-states-capitals/datasets-us-states-capitals/lib","..","data","data.json"),n={encoding:"utf8"};module.exports=function(){var e=r(a,n);if(e instanceof Error)throw e;return e};var o=e(Object.freeze({__proto__:null}));export{o as default};
//# sourceMappingURL=index.mjs.map

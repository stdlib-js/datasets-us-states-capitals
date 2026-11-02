"use strict";var i=function(r,a){return function(){try{return a||r((a={exports:{}}).exports,a),a.exports}catch(s){throw (a=0, s)}};};var t=i(function(p,e){
var n=require("path").resolve,o=require('@stdlib/fs-read-json/dist').sync,u=n(__dirname,"..","data","data.json"),v={encoding:"utf8"};function c(){var r=o(u,v);if(r instanceof Error)throw r;return r}e.exports=c
});var d=t();module.exports=d;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

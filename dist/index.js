"use strict";var s=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var t=s(function(f,e){
var i=require("path").resolve,n=require('@stdlib/fs-read-json/dist').sync,o=i(__dirname,"..","data","data.json"),u={encoding:"utf8"};function v(){var r=n(o,u);if(r instanceof Error)throw r;return r}e.exports=v
});var c=t();module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map

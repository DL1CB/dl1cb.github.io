(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&d.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==o[u]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={0:0},a=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{2:"60262d74",3:"74e26322",4:"8a5d874e"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var c=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var f=c;a.push([0,1]),n()})({0:function(e,t,n){e.exports=n("2f39")},"0047":function(e,t,n){},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"someting",(function(){return g}));var o={};n.r(o),n.d(o,"addEstablishment",(function(){return w})),n.d(o,"updateEstablishments",(function(){return E})),n.d(o,"clearEstablishments",(function(){return j}));var a={};n.r(a),n.d(a,"fetchEstablishments",(function(){return x})),n.d(a,"clearEstablishments",(function(){return _})),n.d(a,"addEstablishment",(function(){return S})),n.d(a,"removeEstablishment",(function(){return T}));n("e6cf"),n("7d6e"),n("e54f"),n("985d"),n("0047");var s=n("2b0e"),i=n("1f91"),u=n("42d2"),c=n("b178");s["a"].use(c["b"],{config:{},lang:i["a"],iconSet:u["a"]});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},f=[],d={name:"App"},p=d,m=n("2877"),h=Object(m["a"])(p,l,f,!1,null,null,null),b=h.exports,v=n("2f62"),y=function(){return{establishments:[]}};function g(){}function w(e,t){e.establishments.push(t)}function E(e,t){e.establishments=t}function j(e){e.establishments=[]}var O=n("af0d");const P=new O["a"]("digireg");function x({commit:e}){P.collection("establishments").orderBy("timestamp","desc").get().then((t=>{e("updateEstablishments",t)}))}function _({commit:e}){P.collection("establishments").delete(),e("clearEstablishments")}function S({commit:e},t){t.timestamp=(new Date).getTime(),console.log("addEstablishment",t),P.collection("establishments").add(t)}function T({commit:e},t){P.collection("establishments").doc(t.timestamp).delete(),P.collection("establishments").orderBy("timestamp","desc").get().then((n=>{e("updateEstablishments",t)}))}var k={namespaced:!0,getters:r,mutations:o,actions:a,state:y};s["a"].use(v["b"]);var M=function(){const e=new v["b"].Store({modules:{establishments:k},strict:!1});return e},q=n("8c4f");const B=[{path:"/",component:()=>n.e(2).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(4).then(n.bind(null,"56b4"))}]},{path:"*",component:()=>n.e(3).then(n.bind(null,"e51e"))}];var A=B;s["a"].use(q["a"]);var C=function(){const e=new q["a"]({scrollBehavior:()=>({x:0,y:0}),routes:A,mode:"hash",base:""});return e},J=async function(){const e="function"===typeof M?await M({Vue:s["a"]}):M,t="function"===typeof C?await C({Vue:s["a"],store:e}):C;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}};async function L(){const{app:e,store:t,router:n}=await J();new s["a"](e)}L()}});
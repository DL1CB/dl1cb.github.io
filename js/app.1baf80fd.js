(function(t){function e(e){for(var r,i,c=e[0],s=e[1],u=e[2],l=0,m=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&m.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(m.length)m.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={0:0},a=[];function i(t){return c.p+"js/"+({}[t]||t)+"."+{2:"ced8c736",3:"74e26322",4:"8c4c90ee"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=i(t);var u=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;u.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",u.name="ChunkLoadError",u.type=r,u.request=a,n[1](u)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;a.push([0,1]),n()})({0:function(t,e,n){t.exports=n("2f39")},"0047":function(t,e,n){},"2f39":function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"encodedPatron",(function(){return E}));var o={};n.r(o),n.d(o,"setDate",(function(){return O})),n.d(o,"setName",(function(){return j})),n.d(o,"setPhone",(function(){return x})),n.d(o,"setEmail",(function(){return S})),n.d(o,"setPatron",(function(){return _})),n.d(o,"clearPatron",(function(){return D}));var a={};n.r(a),n.d(a,"setDate",(function(){return B})),n.d(a,"setName",(function(){return k})),n.d(a,"setPhone",(function(){return J})),n.d(a,"setEmail",(function(){return L})),n.d(a,"fetchLastPatron",(function(){return M})),n.d(a,"saveLatestPatron",(function(){return q})),n.d(a,"clearPatron",(function(){return A}));var i={};n.r(i),n.d(i,"someting",(function(){return $}));var c={};n.r(c),n.d(c,"addEstablishment",(function(){return z})),n.d(c,"updateEstablishments",(function(){return F})),n.d(c,"clearEstablishments",(function(){return G}));var s={};n.r(s),n.d(s,"fetchEstablishments",(function(){return H})),n.d(s,"clearEstablishments",(function(){return I})),n.d(s,"addEstablishment",(function(){return K})),n.d(s,"removeEstablishment",(function(){return Q}));n("e6cf"),n("7d6e"),n("e54f"),n("985d"),n("0047");var u=n("2b0e"),l=n("1f91"),f=n("42d2"),m=n("b178");u["a"].use(m["a"],{config:{},lang:l["a"],iconSet:f["a"]});var d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],h={name:"App"},b=h,v=n("2877"),g=Object(v["a"])(b,d,p,!1,null,null,null),y=g.exports,w=n("2f62"),P=function(){return{date:0,name:"",phone:"",email:""}};function E({date:t,name:e,phone:n,email:r}){return JSON.stringify({date:t,name:e,phone:n,email:r})}function O(t,e){t.date=e}function j(t,e){t.name=e}function x(t,e){t.phone=e}function S(t,e){t.email=e}function _(t,e){t.date=e.date,t.name=e.name,t.phone=e.phone,t.email=e.email}function D(t){t.date="",t.name="",t.phone="",t.email=""}var N=n("af0d");const T=new N["a"]("digireg");function B({commit:t},e){t("setDate",e)}function k({commit:t},e){t("setName",e)}function J({commit:t},e){t("setPhone",e)}function L({commit:t},e){t("setEmail",e)}function M({commit:t}){T.collection("patrons").orderBy("date","desc").limit(1).get().then((e=>{e&&e.length&&(t("setDate",e[0].date),t("setName",e[0].name),t("setPhone",e[0].phone),t("setEmail",e[0].email))}))}function q({commit:t,state:e}){const n={date:e.date,name:e.name,phone:e.phone,email:e.email};T.collection("patrons").add(n)}function A({commit:t}){t("clearPatron")}var C={namespaced:!0,getters:r,mutations:o,actions:a,state:P},V=function(){return{establishments:[]}};function $(){}function z(t,e){t.establishments.push(e)}function F(t,e){t.establishments=e}function G(t){t.establishments=[]}function H({commit:t}){T.collection("establishments").orderBy("timestamp","desc").get().then((e=>{t("updateEstablishments",e)}))}function I({commit:t}){T.collection("establishments").delete(),t("clearEstablishments")}function K({commit:t},e){const n=new TextDecoder("utf-8"),r=n.decode(e);let o=JSON.parse(r);o.timestamp=(new Date).getTime(),T.collection("establishments").add(o).then((()=>{T.collection("establishments").orderBy("timestamp","desc").get().then((e=>{t("updateEstablishments",e)}))}))}function Q({commit:t},e){T.collection("establishments").doc(e.timestamp).delete(),T.collection("establishments").orderBy("timestamp","desc").get().then((n=>{t("updateEstablishments",e)}))}var R={namespaced:!0,getters:i,mutations:c,actions:s,state:V};u["a"].use(w["a"]);var U=function(){const t=new w["a"].Store({modules:{patron:C,establishments:R},strict:!1});return t},W=n("8c4f");const X=[{path:"/",component:()=>n.e(2).then(n.bind(null,"713b")),children:[{path:"",component:()=>n.e(4).then(n.bind(null,"bd8c"))}]},{path:"*",component:()=>n.e(3).then(n.bind(null,"e51e"))}];var Y=X;u["a"].use(W["a"]);var Z=function(){const t=new W["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Y,mode:"hash",base:""});return t},tt=async function(){const t="function"===typeof U?await U({Vue:u["a"]}):U,e="function"===typeof Z?await Z({Vue:u["a"],store:t}):Z;t.$router=e;const n={router:e,store:t,render:t=>t(y),el:"#q-app"};return{app:n,store:t,router:e}};async function et(){const{app:t,store:e,router:n}=await tt();new u["a"](t)}et()}});
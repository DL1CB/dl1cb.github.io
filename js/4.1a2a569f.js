(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{"56b4":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-lg"},[1==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-input",{attrs:{outlined:"",label:"Full Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),a("q-input",{attrs:{outlined:"",label:"Telephone Number"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),a("q-input",{attrs:{outlined:"",label:"Email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1),a("q-card-actions",{attrs:{vertical:""}},[a("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"primary",label:"Register Blue"},on:{click:t.connectDigireg}})],1)],1):t._e(),2==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/bluetooth.svg",basic:""}})],1)],1):t._e(),3==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/encrypt.svg",basic:""}})],1)],1):t._e(),4==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/transfer.svg",basic:""}})],1)],1):t._e(),5==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/success.svg",basic:""}})],1)],1):t._e(),t.establishments.length?a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("q-timeline",{attrs:{color:"secondary"}},t._l(t.establishments,(function(e){return a("q-timeline-entry",{key:e.timestamp,attrs:{title:e.name}},[t._v("\n                  "+t._s(e.street)+" "+t._s(e.city)+" "+t._s(e.zip)),a("br"),t._v("\n                  "+t._s(e.state)+" "+t._s(e.country)),a("br"),t._v("\n                  "+t._s(e.phone)+" "),a("br"),t._v("\n                  "+t._s(e.email)+" "),a("br"),t._v("\n                  "+t._s(e.id)+" "),a("br"),a("div",{staticClass:"row",attrs:{slot:"subtitle"},slot:"subtitle"},[a("div",{staticClass:"col-10 "},[t._v("\n                        "+t._s(t.formatDate(new Date(e.timestamp),"D MMM YYYY - h:mm a"))+"\n                    ")]),a("div",{staticClass:"col-2",on:{click:function(a){return t.removeEstablishment(e)}}},[a("q-icon",{attrs:{size:"md",name:"delete"}})],1)])])})),1)],1)],1):t._e()],1)},i=[],s=(a("fb6a"),a("e6cf"),a("ded3")),o=a.n(s),r=a("b178"),c=a("2f62"),l=(a("4e82"),a("1c35").Buffer);function u(t,e,a){var n=[],i=null;return u._encode(n,t),i=l.concat(n),u.bytes=i.length,l.isBuffer(e)?(i.copy(e,a),e):i}u.bytes=-1,u._floatConversionDetected=!1,u._encode=function(t,e){if(l.isBuffer(e))return t.push(l.from(e.length+":")),void t.push(e);if(null!=e)switch(typeof e){case"string":u.buffer(t,e);break;case"number":u.number(t,e);break;case"object":e.constructor===Array?u.list(t,e):u.dict(t,e);break;case"boolean":u.boolean(t,e);break}};var d=l.from("e"),f=l.from("d"),m=l.from("l");u.buffer=function(t,e){t.push(l.from(l.byteLength(e)+":"+e))},u.number=function(t,e){var a=2147483648,n=e/a<<0,i=e%a<<0,s=n*a+i;t.push(l.from("i"+s+"e")),s===e||u._floatConversionDetected||(u._floatConversionDetected=!0,console.warn('WARNING: Possible data corruption detected with value "'+e+'":','Bencoding only defines support for integers, value was converted to "'+s+'"'),console.trace())},u.boolean=function(t,e){var a=e?1:0;t.push(l.from("j"+a+"e")),1!=e&&0!=e&&(console.warn("WARNING: Possible data corruption detected with value "+e),console.trace())},u.dict=function(t,e){t.push(f);for(var a,n=0,i=Object.keys(e).sort(),s=i.length;n<s;n++)a=i[n],null!=e[a]&&(u.buffer(t,a),u._encode(t,e[a]));t.push(d)},u.list=function(t,e){var a=0,n=e.length;for(t.push(m);a<n;a++)null!=e[a]&&u._encode(t,e[a]);t.push(d)};var p=a("1c35").Buffer;const h=105,b=106,v=58,g=100,w=108,y=101;function _(t,e,a){for(var n=0,i=1,s=e;s<a;s++){var o=t[s];if(o<58&&o>=48)n=10*n+(o-48);else if(s!==e||43!==o){if(s!==e||45!==o){if(46===o)break;throw new Error("not a number: buffer["+s+"] = "+o)}i=-1}}return n*i}function q(t){var e="";function a(a,n){e+=a;try{var i=C(e,n);t(i)}catch(s){}}return a}function C(t,e,a,n){return null==t||0===t.length?null:("number"!==typeof e&&null==n&&(n=e,e=void 0),"number"!==typeof a&&null==n&&(n=a,a=void 0),C.position=0,C.encoding=n||null,C.data=p.isBuffer(t)?t.slice(e,a):new p(t),C.bytes=C.data.length,C.next())}C.bytes=0,C.position=0,C.data=null,C.encoding=null,C.next=function(){switch(C.data[C.position]){case g:return C.dictionary();case w:return C.list();case h:return C.integer();case b:return C.boolean();default:return C.buffer()}},C.find=function(t){var e=C.position,a=C.data.length,n=C.data;while(e<a){if(n[e]===t)return e;e++}throw new Error('Invalid data: Missing delimiter "'+String.fromCharCode(t)+'" [0x'+t.toString(16)+"]")},C.dictionary=function(){C.position++;var t={};while(C.data[C.position]!==y)t[C.buffer()]=C.next();return C.position++,t},C.list=function(){C.position++;var t=[];while(C.data[C.position]!==y)t.push(C.next());return C.position++,t},C.integer=function(){var t=C.find(y),e=_(C.data,C.position+1,t);return C.position+=t+1-C.position,e},C.boolean=function(){var t=C.find(y),e=_(C.data,C.position+1,t);return C.position+=t+1-C.position,1==e||0!=e&&void 0},C.buffer=function(){var t=C.find(v),e=_(C.data,C.position,t),a=++t+e;return C.position=a,C.encoding?C.data.toString(C.encoding,t,a):C.data.slice(t,a)};const k=Object(c["a"])("establishments");var D={name:"DigiReg",mounted:function(){this.fetchEstablishments()},data(){return{step:1,date:(new Date).getTime(),name:"",phone:"",email:"",logs:[]}},computed:o()({},k.mapState(["establishments"])),methods:o()(o()({log(t){console.log(t),this.logs.push(t)}},k.mapActions(["fetchEstablishments","addEstablishment","removeEstablishment"])),{},{formatDate:r["a"].formatDate,async connectDigireg(){const t=this.log;try{const t="6e400001-b5a3-f393-e0a9-e50e24dcca9e",n="6e400002-b5a3-f393-e0a9-e50e24dcca9e",i="6e400003-b5a3-f393-e0a9-e50e24dcca9e";this.step=2;const s=await navigator.bluetooth.requestDevice({filters:[{services:[t]}]});this.step=3;const o=await s.gatt.connect(),r=await o.getPrimaryService(t),c=await r.getCharacteristic(i);var e=q((t=>{console.log(t),this.addEstablishment(t)}));let l=new TextDecoder;await c.startNotifications(),await c.addEventListener("characteristicvaluechanged",(function(t){console.log(t),e(l.decode(t.target.value),"utf-8")}));const d=await r.getCharacteristic(n);this.step=4;const f=u({date:this.date,name:this.name,phone:this.phone,email:this.email});for(var a=0;a<=f.byteLength;a+=20)await d.writeValue(f.slice(a,a+20)),await new Promise((t=>setTimeout(t,100)));await new Promise((t=>setTimeout(t,1e3))),await c.stopNotifications(),this.step=5;await s.gatt.disconnect();await new Promise((t=>setTimeout(t,1e3))),this.step=1}catch(n){t(n),this.step=1}}})},E=D,x=a("2877"),N=Object(x["a"])(E,n,i,!1,null,null,null);e["default"]=N.exports}}]);
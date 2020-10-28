(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[4],{bd8c:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"q-pa-lg"},[1==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-input",{attrs:{outlined:"",label:"Full Name",value:t.name},on:{input:t.setName}}),a("q-input",{attrs:{outlined:"",label:"Telephone Number",value:t.phone},on:{input:t.setPhone}}),a("q-input",{attrs:{outlined:"",label:"Email",value:t.email},on:{input:t.setEmail}})],1),a("q-card-actions",{attrs:{vertical:""}},[a("q-btn",{staticClass:"glossy",attrs:{rounded:"",color:"primary",label:"Register Blue"},on:{click:t.connectDigireg}})],1)],1):t._e(),2==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/bluetooth.svg",basic:""}})],1)],1):t._e(),3==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/encrypt.svg",basic:""}})],1)],1):t._e(),4==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/transfer.svg",basic:""}})],1)],1):t._e(),5==t.step?a("q-card",{staticClass:"my-card"},[a("q-card-section",[a("q-img",{attrs:{src:"/success.svg",basic:""}})],1)],1):t._e(),t.establishments.length?a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[t._v("Registrations ( Last 14 Days)")]),a("q-timeline",{attrs:{color:"secondary"}},t._l(t.establishments,(function(e){return a("q-timeline-entry",{key:e.timestamp,attrs:{title:e.name,subtitle:t.formatDate(new Date(e.timestamp),"D MMM YYYY - h:mm a")}},[t._v("\n              "+t._s(e.street)+" "+t._s(e.city)+" "+t._s(e.zip)),a("br"),t._v("\n              "+t._s(e.state)+" "+t._s(e.country)),a("br"),t._v("\n              "+t._s(e.phone)+" "),a("br"),t._v("\n              "+t._s(e.email)+" "),a("br"),t._v("\n              "+t._s(e.id)+" "),a("br")])})),1)],1)],1):t._e()],1)},i=[],c=(a("e6cf"),a("ded3")),n=a.n(c),r=a("b178"),o=a("2f62");const l=Object(o["a"])("patron"),d=Object(o["a"])("establishments");var m={name:"DigiReg",mounted:function(){this.fetchEstablishments(),this.fetchLastPatron()},data(){return{step:1,logs:[]}},computed:n()(n()({},l.mapState(["date","name","phone","email"])),d.mapState(["establishments"])),methods:n()(n()(n()({log(t){console.log(t),this.logs.push(t)}},l.mapActions(["fetchLastPatron","setName","setPhone","setEmail","saveLatestPatron"])),d.mapActions(["fetchEstablishments","addEstablishment"])),{},{formatDate:r["a"].formatDate,async connectDigireg(){const t=this.log;var e="";try{const a="6e400001-b5a3-f393-e0a9-e50e24dcca9e",s="6e400002-b5a3-f393-e0a9-e50e24dcca9e",i="6e400003-b5a3-f393-e0a9-e50e24dcca9e";t("Requesting Bluetooth Device"),this.step=2;const c=await navigator.bluetooth.requestDevice({filters:[{services:[a]}]});t("Connecting to GATT Server"),this.step=3;const n=await c.gatt.connect();t("Getting Service");const r=await n.getPrimaryService(a);t("Getting TX Characteristic");const o=await r.getCharacteristic(i);t("Start TX Notifications"),await o.startNotifications(),t("TX Characteristic addEventListener"),await o.addEventListener("characteristicvaluechanged",(function(t){const a=new TextDecoder("utf-8"),s=a.decode(t.target.value);e+=s})),t("Getting RX Characteristic");const l=await r.getCharacteristic(s);t("Writing RX Characteristic"),this.step=4;const d=new TextEncoder,m=d.encode(JSON.stringify({date:this.date,name:this.name,phone:this.phone,email:this.email}),"utf-8"),h=await l.writeValue(m);t(h),t("Sleep Before Disconnect"),await new Promise((t=>setTimeout(t,1e3))),t("stop TX Notifications"),await o.stopNotifications(),t(e),this.addEstablishment(e),this.step=5,t("Disconnect");await c.gatt.disconnect();await new Promise((t=>setTimeout(t,1e3))),this.step=1}catch(a){t("error"),t(a)}}})},h=m,u=a("2877"),p=Object(u["a"])(h,s,i,!1,null,null,null);e["default"]=p.exports}}]);
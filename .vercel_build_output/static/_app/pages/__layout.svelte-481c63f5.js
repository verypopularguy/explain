var D=Object.defineProperty;var y=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var g=(i,e,t)=>e in i?D(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,k=(i,e)=>{for(var t in e||(e={}))F.call(e,t)&&g(i,t,e[t]);if(y)for(var t of y(e))E.call(e,t)&&g(i,t,e[t]);return i};import{D as I,S as N,i as $,s as z,l as v,f as w,u as p,w as C,x as d,d as m,E as O,A as B,r as G,F as M,G as Q,H as j,I as H,J as V,K as x,e as K,t as L,c as P,a as X,g as q,L as f,M as J,N as _,O as R,P as S,Q as h,R as T,_ as U,V as Y}from"../chunks/vendor-4d76b2cf.js";import{h as A,u as b}from"../chunks/store-f14bdcfc.js";function Z(){return I({apiKey:"AIzaSyB7XsbhYEd_4DQigc_hfnmdpcwlvzugPOw",databaseURL:"https://feynman-mvp.firebaseio.com",authDomain:"feynman-mvp.firebaseapp.com",projectId:"feynman-mvp",storageBucket:"feynman-mvp.appspot.com",messagingSenderId:"148720897081",appId:"1:148720897081:web:fdf5c605dcc74b56",measurementId:"G-DR4M7QGV7Z"})}function W(i){let e;const t=i[2].default,a=j(t,i,i[1],null);return{c(){a&&a.c()},l(s){a&&a.l(s)},m(s,r){a&&a.m(s,r),e=!0},p(s,r){a&&a.p&&(!e||r&2)&&H(a,t,s,s[1],e?x(t,s[1],r,null):V(s[1]),null)},i(s){e||(d(a,s),e=!0)},o(s){p(a,s),e=!1},d(s){a&&a.d(s)}}}function ee(i){let e,t;return{c(){e=K("h4"),t=L("Fetching your info..."),this.h()},l(a){e=P(a,"H4",{style:!0});var s=X(e);t=q(s,"Fetching your info..."),s.forEach(m),this.h()},h(){f(e,"margin-left","16px"),f(e,"font-family","Roboto, sans-serif"),f(e,"opacity","70%"),f(e,"font-weight","400")},m(a,s){w(a,e,s),J(e,t)},p:_,i:_,o:_,d(a){a&&m(e)}}}function te(i){let e,t,a,s;const r=[ee,W],o=[];function l(n,c){return n[0]?1:0}return e=l(i),t=o[e]=r[e](i),{c(){t.c(),a=v()},l(n){t.l(n),a=v()},m(n,c){o[e].m(n,c),w(n,a,c),s=!0},p(n,[c]){let u=e;e=l(n),e===u?o[e].p(n,c):(G(),p(o[u],1,1,()=>{o[u]=null}),C(),t=o[e],t?t.p(n,c):(t=o[e]=r[e](n),t.c()),d(t,1),t.m(a.parentNode,a))},i(n){s||(d(t),s=!0)},o(n){p(t),s=!1},d(n){o[e].d(n),n&&m(a)}}}function ae(i,e,t){let a;O(i,A,o=>t(0,a=o));let{$$slots:s={},$$scope:r}=e;return B(async()=>{Z(),M(Q(),async o=>{if(A.set(!0),o){b.set({phoneNumber:o.phoneNumber,uid:o.uid,pencilColors:[]});const l=R(S(),"users/"+o.uid);let n=await h(l);if(!n.exists()){const c=R(S(),"metadata/78tDSRCiMHGnf8zcXkQt"),u=await h(c);await T(l,{name:`Beaver #${u.data().numOfUsers}`,uid:o.uid,phoneNumber:o.phoneNumber,pencilColors:["white","#F69637","#A9F8BD","#6EE2EA"],willReceiveText:!0}),U(c,{numOfUsers:Y(1)}),n=await h(l)}b.set(k({id:n.id},n.data()))}else b.set({})})}),i.$$set=o=>{"$$scope"in o&&t(1,r=o.$$scope)},[a,r,s]}class ie extends N{constructor(e){super();$(this,e,ae,te,z,{})}}export{ie as default};
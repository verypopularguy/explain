var Oe=Object.defineProperty;var pe=Object.getOwnPropertySymbols;var Ve=Object.prototype.hasOwnProperty,Fe=Object.prototype.propertyIsEnumerable;var me=(r,e,s)=>e in r?Oe(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,_e=(r,e)=>{for(var s in e||(e={}))Ve.call(e,s)&&me(r,s,e[s]);if(pe)for(var s of pe(e))Fe.call(e,s)&&me(r,s,e[s]);return r};import{S as We,i as He,s as Ke,e as L,j as N,k as q,t as y,c as j,a as B,m as U,n as O,d as m,g as I,K as k,U as $e,f as h,o as A,L as z,a3 as te,a0 as le,aD as Ge,aE as Je,w as H,x as b,u as v,v as P,a4 as he,l as S,D as oe,A as Xe,N as Y,O as K,X as Ye,r as G,$ as Ze,_ as V,aF as xe,aG as et,ai as tt,aj as ot,aH as st,am as rt,al as lt,aI as be,aJ as ke,aK as nt,aL as at,aM as it,Q as ut,aN as ft,Y as ct,h as Z,aO as x,b as F,a8 as ee,a1 as dt,aP as pt,M as ne,ap as mt,aq as _t,ar as $t}from"../../../chunks/vendor-ad2d8e49.js";import{R as ht,T as bt,a as kt,D as gt,B as vt}from"../../../chunks/TextAreaAutoResizing-9ce1aaf0.js";import{f as wt}from"../../../chunks/database-2bb8fd04.js";import{g as Dt}from"../../../chunks/canvas-5b7b0e82.js";import{g as ge,r as ve,k as se,u as yt,c as It,a as Rt}from"../../../chunks/store-eb421977.js";import"../../../chunks/preload-helper-ec9aa979.js";import"../../../chunks/singletons-12a22614.js";function Nt(r,e){let s=document.getElementById(e);return s==null||s.appendChild(r),{destroy(){r.remove()}}}function we(r,e){let s=new IntersectionObserver(o=>{for(const t of o)if(t.isIntersecting){e(),s.unobserve(r);return}},{root:null,threshold:.2,rootMargin:"0px"});s.observe(r)}function De(r,e,s){const o=r.slice();return o[35]=e[s],o}function ye(r){let e,s,o,t,l,n=[],a=new Map,i,u,d,c,f,w,D;s=new Ye({props:{disabled:Q(r[1].name)&&r[1].askerUID&&r[6].uid!==r[1].askerUID,value:r[1].name,class:"room-title",style:`width: ${r[7]}px;`,$$slots:{helper:[Mt]},$$scope:{ctx:r}}}),s.$on("input",r[18]);let M=r[1].blackboards;const E=$=>$[35];for(let $=0;$<M.length;$+=1){let _=De(r,M,$),R=E(_);a.set(R,n[$]=Ue(R,_))}return{c(){e=L("div"),N(s.$$.fragment),o=q(),t=L("div"),l=q();for(let $=0;$<n.length;$+=1)n[$].c();i=q(),u=L("div"),d=y("New blackboard"),this.h()},l($){e=j($,"DIV",{style:!0});var _=B(e);U(s.$$.fragment,_),o=O(_),t=j(_,"DIV",{style:!0}),B(t).forEach(m),l=O(_);for(let J=0;J<n.length;J+=1)n[J].l(_);i=O(_),u=j(_,"DIV",{style:!0});var R=B(u);d=I(R,"New blackboard"),R.forEach(m),_.forEach(m),this.h()},h(){k(t,"margin-bottom","20px"),k(u,"display","flex"),k(u,"justify-content","center"),k(u,"align-items","center"),k(u,"margin-top","40px"),k(u,"background-color","#2e3131"),k(u,"font-family","Roboto, sans-serif"),k(u,"text-transform","uppercase"),k(u,"height","35px"),k(e,"padding","16px"),$e(e,"question",Q(r[1].name))},m($,_){h($,e,_),A(s,e,null),z(e,o),z(e,t),z(e,l);for(let R=0;R<n.length;R+=1)n[R].m(e,null);z(e,i),z(e,u),z(u,d),f=!0,w||(D=[te(u,"click",r[15]),le(c=Nt.call(null,e,"main-content"))],w=!0)},p($,_){const R={};_[0]&66&&(R.disabled=Q($[1].name)&&$[1].askerUID&&$[6].uid!==$[1].askerUID),_[0]&2&&(R.value=$[1].name),_[0]&128&&(R.style=`width: ${$[7]}px;`),_[0]&62|_[1]&65536&&(R.$$scope={dirty:_,ctx:$}),s.$set(R),_[0]&30659|_[1]&63360&&(M=$[1].blackboards,G(),n=Ge(n,_,E,1,$,M,a,e,Je,Ue,i,De),H()),_[0]&2&&$e(e,"question",Q($[1].name))},i($){if(!f){b(s.$$.fragment,$);for(let _=0;_<M.length;_+=1)b(n[_]);f=!0}},o($){v(s.$$.fragment,$);for(let _=0;_<n.length;_+=1)v(n[_]);f=!1},d($){$&&m(e),P(s);for(let _=0;_<n.length;_+=1)n[_].d();w=!1,he(D)}}}function Ut(r){let e,s=r[1].askerName+"",o,t,l=se(r[1].dateAsked)+"",n;return{c(){e=y("Marked as question by "),o=y(s),t=y(" on "),n=y(l)},l(a){e=I(a,"Marked as question by "),o=I(a,s),t=I(a," on "),n=I(a,l)},m(a,i){h(a,e,i),h(a,o,i),h(a,t,i),h(a,n,i)},p(a,i){i[0]&2&&s!==(s=a[1].askerName+"")&&Z(o,s),i[0]&2&&l!==(l=se(a[1].dateAsked)+"")&&Z(n,l)},d(a){a&&m(e),a&&m(o),a&&m(t),a&&m(n)}}}function At(r){let e,s,o;return{c(){e=y("Resolving this question in "),s=y(r[5]),o=y(", cancel by re-adding ?")},l(t){e=I(t,"Resolving this question in "),s=I(t,r[5]),o=I(t,", cancel by re-adding ?")},m(t,l){h(t,e,l),h(t,s,l),h(t,o,l)},p(t,l){l[0]&32&&Z(s,t[5])},d(t){t&&m(e),t&&m(s),t&&m(o)}}}function Pt(r){let e,s,o;return{c(){e=y("Pinging server members in "),s=y(r[3]),o=y(", cancel by backtracking the ?")},l(t){e=I(t,"Pinging server members in "),s=I(t,r[3]),o=I(t,", cancel by backtracking the ?")},m(t,l){h(t,e,l),h(t,s,l),h(t,o,l)},p(t,l){l[0]&8&&Z(s,t[3])},d(t){t&&m(e),t&&m(s),t&&m(o)}}}function Ie(r){let e,s=se(r[1].dateResolved)+"",o;return{c(){e=y(", resolved "),o=y(s)},l(t){e=I(t,", resolved "),o=I(t,s)},m(t,l){h(t,e,l),h(t,o,l)},p(t,l){l[0]&2&&s!==(s=se(t[1].dateResolved)+"")&&Z(o,s)},d(t){t&&m(e),t&&m(o)}}}function St(r){let e,s;function o(a,i){if(a[2])return Pt;if(a[4])return At;if(a[1].askerName&&a[1].askerUID&&a[1].date)return Ut}let t=o(r),l=t&&t(r),n=r[1].dateResolved&&Ie(r);return{c(){l&&l.c(),e=q(),n&&n.c(),s=S()},l(a){l&&l.l(a),e=O(a),n&&n.l(a),s=S()},m(a,i){l&&l.m(a,i),h(a,e,i),n&&n.m(a,i),h(a,s,i)},p(a,i){t===(t=o(a))&&l?l.p(a,i):(l&&l.d(1),l=t&&t(a),l&&(l.c(),l.m(e.parentNode,e))),a[1].dateResolved?n?n.p(a,i):(n=Ie(a),n.c(),n.m(s.parentNode,s)):n&&(n.d(1),n=null)},d(a){l&&l.d(a),a&&m(e),n&&n.d(a),a&&m(s)}}}function Mt(r){let e,s;return e=new Ze({props:{slot:"helper",persistent:!0,$$slots:{default:[St]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),s=!0},p(o,t){const l={};t[0]&62|t[1]&65536&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){s||(b(e.$$.fragment,o),s=!0)},o(o){v(e.$$.fragment,o),s=!1},d(o){P(e,o)}}}function Re(r){let e,s,o,t,l,n;function a(...c){return r[19](r[35],...c)}e=new bt({props:{value:r[38].description||""}}),e.$on("input",a);const i=[Tt,Ct],u=[];function d(c,f){return c[38].audioDownloadURL?0:1}return o=d(r),t=u[o]=i[o](r),{c(){N(e.$$.fragment),s=q(),t.c(),l=S()},l(c){U(e.$$.fragment,c),s=O(c),t.l(c),l=S()},m(c,f){A(e,c,f),h(c,s,f),u[o].m(c,f),h(c,l,f),n=!0},p(c,f){r=c;const w={};f[1]&128&&(w.value=r[38].description||""),e.$set(w);let D=o;o=d(r),o===D?u[o].p(r,f):(G(),v(u[D],1,1,()=>{u[D]=null}),H(),t=u[o],t?t.p(r,f):(t=u[o]=i[o](r),t.c()),b(t,1),t.m(l.parentNode,l))},i(c){n||(b(e.$$.fragment,c),b(t),n=!0)},o(c){v(e.$$.fragment,c),v(t),n=!1},d(c){P(e,c),c&&m(s),u[o].d(c),c&&m(l)}}}function Ct(r){let e,s,o,t,l,n,a;function i(...u){return r[24](r[35],...u)}return s=new kt({props:{$$slots:{default:[Ot,({startRecording:u,stopRecording:d,currentTime:c})=>({44:u,45:d,46:c}),({startRecording:u,stopRecording:d,currentTime:c})=>[0,(u?8192:0)|(d?16384:0)|(c?32768:0)]]},$$scope:{ctx:r}}}),s.$on("record-end",i),{c(){e=L("div"),N(s.$$.fragment),this.h()},l(u){e=j(u,"DIV",{style:!0});var d=B(e);U(s.$$.fragment,d),d.forEach(m),this.h()},h(){F(e,"style",o=`width: ${r[7]}px; height: ${r[8]}px; position: relative`)},m(u,d){h(u,e,d),A(s,e,null),l=!0,n||(a=le(t=we.call(null,e,r[40])),n=!0)},p(u,d){r=u;const c={};d[0]&513|d[1]&128e3&&(c.$$scope={dirty:d,ctx:r}),s.$set(c),(!l||d[0]&384&&o!==(o=`width: ${r[7]}px; height: ${r[8]}px; position: relative`))&&F(e,"style",o),t&&ee(t.update)&&d[1]&512&&t.update.call(null,r[40])},i(u){l||(b(s.$$.fragment,u),l=!0)},o(u){v(s.$$.fragment,u),l=!1},d(u){u&&m(e),P(s),n=!1,a()}}}function Tt(r){let e,s,o,t,l,n,a;return s=new gt({props:{strokesArray:r[41],audioDownloadURL:r[38].audioDownloadURL,$$slots:{default:[Ft]},$$scope:{ctx:r}}}),{c(){e=L("div"),N(s.$$.fragment),this.h()},l(i){e=j(i,"DIV",{style:!0});var u=B(e);U(s.$$.fragment,u),u.forEach(m),this.h()},h(){F(e,"style",o=`width: ${r[7]}px; height: ${r[8]+80}px; position: relative`)},m(i,u){h(i,e,u),A(s,e,null),l=!0,n||(a=le(t=we.call(null,e,r[39])),n=!0)},p(i,u){const d={};u[1]&1024&&(d.strokesArray=i[41]),u[1]&128&&(d.audioDownloadURL=i[38].audioDownloadURL),u[0]&64|u[1]&65664&&(d.$$scope={dirty:u,ctx:i}),s.$set(d),(!l||u[0]&384&&o!==(o=`width: ${i[7]}px; height: ${i[8]+80}px; position: relative`))&&F(e,"style",o),t&&ee(t.update)&&u[1]&256&&t.update.call(null,i[39])},i(i){l||(b(s.$$.fragment,i),l=!0)},o(i){v(s.$$.fragment,i),l=!1},d(i){i&&m(e),P(s),n=!1,a()}}}function Lt(r){let e,s,o;return s=new pt({props:{class:"my-four-colors",style:"height: 32px; width: 32px;",indeterminate:!0,fourColor:!0}}),{c(){e=L("div"),N(s.$$.fragment),this.h()},l(t){e=j(t,"DIV",{style:!0});var l=B(e);U(s.$$.fragment,l),l.forEach(m),this.h()},h(){k(e,"display","flex"),k(e,"justify-content","center"),k(e,"margin-left","20px"),k(e,"margin-right","20px")},m(t,l){h(t,e,l),A(s,e,null),o=!0},p:ne,i(t){o||(b(s.$$.fragment,t),o=!0)},o(t){v(s.$$.fragment,t),o=!1},d(t){t&&m(e),P(s)}}}function jt(r){let e,s,o,t;return{c(){e=L("span"),s=y("stop_circle"),this.h()},l(l){e=j(l,"SPAN",{class:!0,style:!0});var n=B(e);s=I(n,"stop_circle"),n.forEach(m),this.h()},h(){F(e,"class","material-icons"),k(e,"font-size","2.5rem"),k(e,"color","cyan"),k(e,"margin-left","24px"),k(e,"margin-right","20px")},m(l,n){h(l,e,n),z(e,s),o||(t=te(e,"click",function(){ee(r[45])&&r[45].apply(this,arguments)}),o=!0)},p(l,n){r=l},i:ne,o:ne,d(l){l&&m(e),o=!1,t()}}}function Bt(r){let e,s,o,t,l,n,a,i,u,d,c={style:"left: 100px; top: 50px; width: 300px",$$slots:{default:[Et]},$$scope:{ctx:r}};return a=new mt({props:c}),r[22](a),{c(){e=L("span"),s=y("radio_button_checked"),o=q(),t=L("span"),l=y("more_horiz"),n=q(),N(a.$$.fragment),this.h()},l(f){e=j(f,"SPAN",{class:!0,style:!0});var w=B(e);s=I(w,"radio_button_checked"),w.forEach(m),o=O(f),t=j(f,"SPAN",{class:!0,style:!0});var D=B(t);l=I(D,"more_horiz"),D.forEach(m),n=O(f),U(a.$$.fragment,f),this.h()},h(){F(e,"class","material-icons"),k(e,"font-size","2.5rem"),k(e,"color","cyan"),k(e,"margin-left","24px"),k(e,"margin-right","20px"),F(t,"class","material-icons"),k(t,"margin-right","10px"),k(t,"color","white"),k(t,"font-size","2rem")},m(f,w){h(f,e,w),z(e,s),h(f,o,w),h(f,t,w),z(t,l),h(f,n,w),A(a,f,w),i=!0,u||(d=[te(e,"click",function(){ee(r[44])&&r[44].apply(this,arguments)}),te(t,"click",r[21])],u=!0)},p(f,w){r=f;const D={};w[1]&69632&&(D.$$scope={dirty:w,ctx:r}),a.$set(D)},i(f){i||(b(a.$$.fragment,f),i=!0)},o(f){v(a.$$.fragment,f),i=!1},d(f){f&&m(e),f&&m(o),f&&m(t),f&&m(n),r[22](null),P(a,f),u=!1,he(d)}}}function zt(r){let e;return{c(){e=y("Wipe board")},l(s){e=I(s,"Wipe board")},m(s,o){h(s,e,o)},d(s){s&&m(e)}}}function Qt(r){let e,s;return e=new $t({props:{$$slots:{default:[zt]},$$scope:{ctx:r}}}),e.$on("SMUI:action",function(){ee(r[43])&&r[43].apply(this,arguments)}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),s=!0},p(o,t){r=o;const l={};t[1]&65536&&(l.$$scope={dirty:t,ctx:r}),e.$set(l)},i(o){s||(b(e.$$.fragment,o),s=!0)},o(o){v(e.$$.fragment,o),s=!1},d(o){P(e,o)}}}function Et(r){let e,s;return e=new _t({props:{$$slots:{default:[Qt]},$$scope:{ctx:r}}}),{c(){N(e.$$.fragment)},l(o){U(e.$$.fragment,o)},m(o,t){A(e,o,t),s=!0},p(o,t){const l={};t[1]&69632&&(l.$$scope={dirty:t,ctx:o}),e.$set(l)},i(o){s||(b(e.$$.fragment,o),s=!0)},o(o){v(e.$$.fragment,o),s=!1},d(o){P(e,o)}}}function qt(r){let e,s,o,t;const l=[Bt,jt,Lt],n=[];function a(i,u){return i[9]==="pre_record"?0:i[9]==="mid_record"?1:2}return e=a(r),s=n[e]=l[e](r),{c(){s.c(),o=S()},l(i){s.l(i),o=S()},m(i,u){n[e].m(i,u),h(i,o,u),t=!0},p(i,u){let d=e;e=a(i),e===d?n[e].p(i,u):(G(),v(n[d],1,1,()=>{n[d]=null}),H(),s=n[e],s?s.p(i,u):(s=n[e]=l[e](i),s.c()),b(s,1),s.m(o.parentNode,o))},i(i){t||(b(s),t=!0)},o(i){v(s),t=!1},d(i){n[e].d(i),i&&m(o)}}}function Ot(r){let e,s;function o(...t){return r[23](r[42],...t)}return e=new vt({props:{strokesArray:r[41],currentTime:r[46],$$slots:{default:[qt]},$$scope:{ctx:r}}}),e.$on("stroke-drawn",o),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){r=t;const n={};l[1]&1024&&(n.strokesArray=r[41]),l[1]&32768&&(n.currentTime=r[46]),l[0]&513|l[1]&94208&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Ne(r){let e,s;function o(){return r[20](r[38],r[43])}return e=new dt({props:{color:"primary",$$slots:{default:[Vt]},$$scope:{ctx:r}}}),e.$on("click",o),{c(){N(e.$$.fragment)},l(t){U(e.$$.fragment,t)},m(t,l){A(e,t,l),s=!0},p(t,l){r=t;const n={};l[1]&65536&&(n.$$scope={dirty:l,ctx:r}),e.$set(n)},i(t){s||(b(e.$$.fragment,t),s=!0)},o(t){v(e.$$.fragment,t),s=!1},d(t){P(e,t)}}}function Vt(r){let e;return{c(){e=y("Delete video")},l(s){e=I(s,"Delete video")},m(s,o){h(s,e,o)},d(s){s&&m(e)}}}function Ft(r){let e,s,o=r[6].uid===r[38].creatorUID&&Ne(r);return{c(){o&&o.c(),e=S()},l(t){o&&o.l(t),e=S()},m(t,l){o&&o.m(t,l),h(t,e,l),s=!0},p(t,l){t[6].uid===t[38].creatorUID?o?(o.p(t,l),l[0]&64|l[1]&128&&b(o,1)):(o=Ne(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(G(),v(o,1,1,()=>{o=null}),H())},i(t){s||(b(o),s=!0)},o(t){v(o),s=!1},d(t){o&&o.d(t),t&&m(e)}}}function Wt(r){let e,s,o=r[38]&&Re(r);return{c(){o&&o.c(),e=q()},l(t){o&&o.l(t),e=O(t)},m(t,l){o&&o.m(t,l),h(t,e,l),s=!0},p(t,l){t[38]?o?(o.p(t,l),l[1]&128&&b(o,1)):(o=Re(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(G(),v(o,1,1,()=>{o=null}),H())},i(t){s||(b(o),s=!0)},o(t){v(o),s=!1},d(t){o&&o.d(t),t&&m(e)}}}function Ue(r,e){let s,o,t;return o=new ht({props:{dbPath:e[10]+e[35],$$slots:{default:[Wt,({boardDoc:l,fetchStrokes:n,listenToStrokes:a,strokesArray:i,handleNewlyDrawnStroke:u,deleteAllStrokesFromDb:d})=>({38:l,39:n,40:a,41:i,42:u,43:d}),({boardDoc:l,fetchStrokes:n,listenToStrokes:a,strokesArray:i,handleNewlyDrawnStroke:u,deleteAllStrokesFromDb:d})=>[0,(l?128:0)|(n?256:0)|(a?512:0)|(i?1024:0)|(u?2048:0)|(d?4096:0)]]},$$scope:{ctx:e}}}),{key:r,first:null,c(){s=S(),N(o.$$.fragment),this.h()},l(l){s=S(),U(o.$$.fragment,l),this.h()},h(){this.first=s},m(l,n){h(l,s,n),A(o,l,n),t=!0},p(l,n){e=l;const a={};n[0]&2&&(a.dbPath=e[10]+e[35]),n[0]&963|n[1]&71552&&(a.$$scope={dirty:n,ctx:e}),o.$set(a)},i(l){t||(b(o.$$.fragment,l),t=!0)},o(l){v(o.$$.fragment,l),t=!1},d(l){l&&m(s),P(o,l)}}}function Ht(r){let e,s,o=r[1]&&ye(r);return{c(){o&&o.c(),e=S()},l(t){o&&o.l(t),e=S()},m(t,l){o&&o.m(t,l),h(t,e,l),s=!0},p(t,l){t[1]?o?(o.p(t,l),l[0]&2&&b(o,1)):(o=ye(t),o.c(),b(o,1),o.m(e.parentNode,e)):o&&(G(),v(o,1,1,()=>{o=null}),H())},i(t){s||(b(o),s=!0)},o(t){v(o),s=!1},d(t){o&&o.d(t),t&&m(e)}}}async function oo({page:r}){return{props:{classID:r.params.class,roomID:r.params.room}}}function Q(r){return r.charAt(r.length-1)==="?"}function ae(r){return r.askerName&&r.dateAsked&&r.askerUID}function Kt(r,e,s){let o,t,l,n,a;oe(r,yt,p=>s(6,t=p)),oe(r,It,p=>s(7,l=p)),oe(r,Rt,p=>s(8,n=p)),oe(r,ve,p=>s(9,a=p));let{classID:i}=e,{roomID:u}=e,d,c;const f=`classes/${i}/blackboards/`,w=`classes/${i}/rooms/`;let D="",M=5,E,$=5;t.uid||Dt("/");async function _({srcElement:p}){const{value:g}=p,T={name:g};!Q(c.name)&&Q(g)&&!ae(c)?R():D&&!Q(g)?ie():!Q(g)&&ae(c)?J():E&&Q(g)&&ae(c)&&Pe(),await V(o,T)}function R(){s(3,M=5),s(2,D=setInterval(()=>{s(3,M-=1),M===0&&(Se(),Me(),ie())},1e3))}function J(){s(5,$=5),s(4,E=setInterval(()=>{s(5,$-=1),$===0&&Ae()},1e3))}function Ae(){V(o,{dateResolved:new Date().toISOString()})}function Pe(){clearTimeout(E),s(4,E="")}function ie(){clearTimeout(D),s(2,D="")}function Se(){V(o,{askerName:t.name||"Beaver #999",askerUID:t.uid,dateAsked:new Date().toISOString()})}async function Me(){const p=[],g=xe(),T=et(g,"sendTextMessage"),C=tt(K(),"users"),X=ot(C,st("willReceiveText","==",!0)),W=await rt(X);if(W.docs)for(const re of W.docs){console.log("phoneNumber =",re.data().phoneNumber);try{re.id!==t.uid&&p.push(T({content:`${t.name} asked: "${c.name||"Fake question here"}"`,toWho:re.data().phoneNumber}))}catch(qe){alert(qe)}}await Promise.all(p),console.log("success, sent all texts.")}async function ue({detail:p},g){const T=Y(K(),f+g);await V(T,{description:p})}Xe(async()=>{lt(o,p=>{s(1,c=_e({id:p.id},p.data()))})});async function fe(){s(1,c=await wt(w+u))}async function ce(p,g){const T=be(),C=ke(T,`audio/${ge()}`);await nt(C,p);const X=await at(C),W=Y(K(),f+g);await V(W,{creatorUID:t.uid,creatorPhoneNumber:t.phoneNumber,date:new Date().toISOString(),audioDownloadURL:X,audioRefFullPath:C.fullPath}),ve.set("pre_record")}async function de({id:p,audioRefFullPath:g},T){const C=[],X=Y(K(),f+p);if(g){const W=ke(be(),g);C.push(it(W))}C.push(V(X,{creator:x(),creatorPhoneNumber:x(),date:x(),audioDownloadURL:x(),audioRefFullPath:x()})),C.push(T()),await Promise.all(C)}async function Ce(){const p=ge(),g=Y(K(),f+p);await Promise.all([ut(g,{}),V(o,{blackboards:ft(p)})]),fe()}const Te=p=>_(p),Le=(p,g)=>ue(g,p),je=(p,g)=>de(p,g),Be=()=>d.setOpen(!0);function ze(p){ct[p?"unshift":"push"](()=>{d=p,s(0,d)})}const Qe=(p,g)=>p(g.detail.newStroke),Ee=(p,g)=>ce(g.detail.audioBlob,p);return r.$$set=p=>{"classID"in p&&s(16,i=p.classID),"roomID"in p&&s(17,u=p.roomID)},r.$$.update=()=>{r.$$.dirty[0]&131072&&(o=Y(K(),w+u)),r.$$.dirty[0]&131072&&fe()},[d,c,D,M,E,$,t,l,n,a,f,_,ue,ce,de,Ce,i,u,Te,Le,je,Be,ze,Qe,Ee]}class so extends We{constructor(e){super();He(this,e,Kt,Ht,Ke,{classID:16,roomID:17},null,[-1,-1])}}export{so as default,oo as load};
import{d as R,a as Se}from"./customParseFormat-CHUSihUt.js";import{c as Te,u as _e,d as Q,f as De,g as Ae,t as Pe,T as Ce,h as Re,C as we}from"./panel-time-pick-DnX1biW6.js";import{b as Vn,D as In,i as Fn,j as Mn,a as Ln,e as Nn,k as yn,m as Un,p as Hn,r as Bn,l as Kn,v as jn}from"./panel-time-pick-DnX1biW6.js";import{d as xe,A as Ee,C as Oe,_ as Ve,G as Z,aF as Ie,H as W,o as Fe,l as T,n as J,N as Me,O as Le,ab as k,Q as b,s as r,a9 as E,Y as V,aa as Ne,D as U,aL as ye,I as Ue,am as He}from"./index-COVHiMFl.js";import{b as Be}from"./_baseFlatten-DV-rYLNs.js";import{i as Ke}from"./identity-DKeuBCMA.js";import{s as je,o as qe}from"./_overRest-BEbh0HKy.js";import{s as X,S as Ge,c as Ye}from"./isEqual-GH6HTxyw.js";import{b as $e}from"./_baseFindIndex-D7XfJLKM.js";import{i as ze,S as H}from"./index-BwuHP0ia.js";import"./index-0XH3uRVP.js";import"./index-eB_komf_.js";import"./event-BB_Ol6Sd.js";import"./index-BNbjQPiS.js";import"./util-B2mB0_6C.js";import"./index-BGHKBa7m.js";import"./debounce-BSN_QTG9.js";function Qe(){}function We(t){return t!==t}function Ze(t,s,o){for(var i=o-1,p=t.length;++i<p;)if(t[i]===s)return i;return-1}function Je(t,s,o){return s===s?Ze(t,s,o):$e(t,We,o)}function Xe(t,s){var o=t==null?0:t.length;return!!o&&Je(t,s,0)>-1}function en(t,s){return je(qe(t,s,Ke),t+"")}function nn(t){return xe(t)&&ze(t)}function tn(t,s,o){for(var i=-1,p=t==null?0:t.length;++i<p;)if(o(s,t[i]))return!0;return!1}var an=1/0,sn=H&&1/X(new H([,-0]))[1]==an?function(t){return new H(t)}:Qe,on=200;function rn(t,s,o){var i=-1,p=Xe,v=t.length,a=!0,c=[],f=c;if(o)a=!1,p=tn;else if(v>=on){var _=s?null:sn(t);if(_)return X(_);a=!1,p=Ye,f=new Ge}else f=s?[]:c;e:for(;++i<v;){var g=t[i],S=s?s(g):g;if(g=o||g!==0?g:0,a&&S===S){for(var w=f.length;w--;)if(f[w]===S)continue e;s&&f.push(S),c.push(g)}else p(f,S,o)||(f!==c&&f.push(S),c.push(g))}return c}var B=en(function(t){return rn(Be(t,1,nn,!0))});const ln=Ee({...Te,parsedValue:{type:Oe(Array)}}),cn=["disabled"],un=Z({__name:"panel-time-range",props:ln,emits:["pick","select-range","set-picker-option"],setup(t,{emit:s}){const o=t,i=(e,n)=>{const l=[];for(let u=e;u<=n;u++)l.push(u);return l},{t:p,lang:v}=Ie(),a=W("time"),c=W("picker"),f=Fe("EP_PICKER_BASE"),{arrowControl:_,disabledHours:g,disabledMinutes:S,disabledSeconds:w,defaultValue:I}=f.props,ee=T(()=>[a.be("range-picker","body"),a.be("panel","content"),a.is("arrow",_),P.value?"has-seconds":""]),ne=T(()=>[a.be("range-picker","body"),a.be("panel","content"),a.is("arrow",_),P.value?"has-seconds":""]),D=T(()=>o.parsedValue[0]),A=T(()=>o.parsedValue[1]),te=_e(o),ae=()=>{s("pick",te.value,!1)},P=T(()=>o.format.includes("ss")),K=T(()=>o.format.includes("A")?"A":o.format.includes("a")?"a":""),se=(e=!1)=>{s("pick",[D.value,A.value],e)},oe=e=>{j(e.millisecond(0),A.value)},re=e=>{j(D.value,e.millisecond(0))},le=e=>{const n=e.map(u=>R(u).locale(v.value)),l=G(n);return n[0].isSame(l[0])&&n[1].isSame(l[1])},j=(e,n)=>{s("pick",[e,n],!0)},ie=T(()=>D.value>A.value),x=J([0,2]),ce=(e,n)=>{s("select-range",e,n,"min"),x.value=[e,n]},q=T(()=>P.value?11:8),ue=(e,n)=>{s("select-range",e,n,"max");const l=r(q);x.value=[e+l,n+l]},pe=e=>{const n=P.value?[0,3,6,11,14,17]:[0,3,8,11],l=["hours","minutes"].concat(P.value?["seconds"]:[]),d=(n.indexOf(x.value[0])+e+n.length)%n.length,m=n.length/2;d<m?N.start_emitSelectRange(l[d]):N.end_emitSelectRange(l[d-m])},de=e=>{const n=e.code,{left:l,right:u,up:d,down:m}=ye;if([l,u].includes(n)){pe(n===l?-1:1),e.preventDefault();return}if([d,m].includes(n)){const h=n===d?-1:1,C=x.value[0]<q.value?"start":"end";N[`${C}_scrollDown`](h),e.preventDefault();return}},F=(e,n)=>{const l=g?g(e):[],u=e==="start",m=(n||(u?A.value:D.value)).hour(),h=u?i(m+1,23):i(0,m-1);return B(l,h)},M=(e,n,l)=>{const u=S?S(e,n):[],d=n==="start",m=l||(d?A.value:D.value),h=m.hour();if(e!==h)return u;const C=m.minute(),y=d?i(C+1,59):i(0,C-1);return B(u,y)},L=(e,n,l,u)=>{const d=w?w(e,n,l):[],m=l==="start",h=u||(m?A.value:D.value),C=h.hour(),y=h.minute();if(e!==C||n!==y)return d;const z=h.second(),ke=m?i(z+1,59):i(0,z-1);return B(d,ke)},G=([e,n])=>[Y(e,"start",!0,n),Y(n,"end",!1,e)],{getAvailableHours:me,getAvailableMinutes:fe,getAvailableSeconds:be}=Ae(F,M,L),{timePickerOptions:N,getAvailableTime:Y,onSetOption:$}=De({getAvailableHours:me,getAvailableMinutes:fe,getAvailableSeconds:be}),ve=e=>e?U(e)?e.map(n=>R(n,o.format).locale(v.value)):R(e,o.format).locale(v.value):null,ge=e=>e?U(e)?e.map(n=>n.format(o.format)):e.format(o.format):null,he=()=>{if(U(I))return I.map(n=>R(n).locale(v.value));const e=R(I).locale(v.value);return[e,e.add(60,"m")]};return s("set-picker-option",["formatToString",ge]),s("set-picker-option",["parseUserInput",ve]),s("set-picker-option",["isValidValue",le]),s("set-picker-option",["handleKeydownInput",de]),s("set-picker-option",["getDefaultValue",he]),s("set-picker-option",["getRangeAvailableTime",G]),(e,n)=>e.actualVisible?(Me(),Le("div",{key:0,class:b([r(a).b("range-picker"),r(c).b("panel")])},[k("div",{class:b(r(a).be("range-picker","content"))},[k("div",{class:b(r(a).be("range-picker","cell"))},[k("div",{class:b(r(a).be("range-picker","header"))},E(r(p)("el.datepicker.startTime")),3),k("div",{class:b(r(ee))},[V(Q,{ref:"minSpinner",role:"start","show-seconds":r(P),"am-pm-mode":r(K),"arrow-control":r(_),"spinner-date":r(D),"disabled-hours":F,"disabled-minutes":M,"disabled-seconds":L,onChange:oe,onSetOption:r($),onSelectRange:ce},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2),k("div",{class:b(r(a).be("range-picker","cell"))},[k("div",{class:b(r(a).be("range-picker","header"))},E(r(p)("el.datepicker.endTime")),3),k("div",{class:b(r(ne))},[V(Q,{ref:"maxSpinner",role:"end","show-seconds":r(P),"am-pm-mode":r(K),"arrow-control":r(_),"spinner-date":r(A),"disabled-hours":F,"disabled-minutes":M,"disabled-seconds":L,onChange:re,onSetOption:r($),onSelectRange:ue},null,8,["show-seconds","am-pm-mode","arrow-control","spinner-date","onSetOption"])],2)],2)],2),k("div",{class:b(r(a).be("panel","footer"))},[k("button",{type:"button",class:b([r(a).be("panel","btn"),"cancel"]),onClick:n[0]||(n[0]=l=>ae())},E(r(p)("el.datepicker.cancel")),3),k("button",{type:"button",class:b([r(a).be("panel","btn"),"confirm"]),disabled:r(ie),onClick:n[1]||(n[1]=l=>se())},E(r(p)("el.datepicker.confirm")),11,cn)],2)],2)):Ne("v-if",!0)}});var pn=Ve(un,[["__file","panel-time-range.vue"]]);R.extend(Se);var dn=Z({name:"ElTimePicker",install:null,props:{...Pe,isRange:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(t,s){const o=J(),[i,p]=t.isRange?["timerange",pn]:["time",Ce],v=a=>s.emit("update:modelValue",a);return Ue("ElPopperOptions",t.popperOptions),s.expose({focus:a=>{var c;(c=o.value)==null||c.handleFocusInput(a)},blur:a=>{var c;(c=o.value)==null||c.handleBlurInput(a)},handleOpen:()=>{var a;(a=o.value)==null||a.handleOpen()},handleClose:()=>{var a;(a=o.value)==null||a.handleClose()}}),()=>{var a;const c=(a=t.format)!=null?a:Re;return V(we,He(t,{ref:o,type:i,format:c,"onUpdate:modelValue":v}),{default:f=>V(p,f,null)})}}});const O=dn;O.install=t=>{t.component(O.name,O)};const xn=O;export{we as CommonPicker,Vn as DEFAULT_FORMATS_DATE,In as DEFAULT_FORMATS_DATEPICKER,Re as DEFAULT_FORMATS_TIME,xn as ElTimePicker,Ce as TimePickPanel,Fn as buildTimeList,Mn as dateEquals,O as default,Ln as extractDateFormat,Nn as extractTimeFormat,yn as formatter,Un as makeList,Hn as parseDate,Bn as rangeArr,Pe as timePickerDefaultProps,Kn as timeUnits,jn as valueEquals};

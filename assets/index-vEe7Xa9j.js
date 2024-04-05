import{h as ie,aI as p,aA as y,n as Q,p as ce,r as de,s as me,c as V,al as E,w as pe,o as fe,F as be,x as f,y as D,at as L,u as t,A as z,ac as _,z as R,H as M,N as X,O as S,av as ve,aX as Ne,a9 as Z,T as j,aY as Ve,aZ as he,ad as K,_ as ye,D as Ie,l as ge,B as q,W as we}from"./index-CQXB1C3t.js";import{E as Ee}from"./index-DQ_kKzU_.js";import{a as _e,c as Se,d as Ae,u as Fe}from"./index-4das4cVd.js";import{C as ee,I as A,U as h}from"./event-BB_Ol6Sd.js";import{u as Pe}from"./index-C-6OfDDU.js";import{v as J}from"./index-B8l9tfGL.js";import"./index-BgPp_mYL.js";const Ce=ie({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,readonly:Boolean,disabled:Boolean,size:_e,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:l=>l===null||p(l)||["min","max"].includes(l),default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:l=>l>=0&&l===Number.parseInt(`${l}`,10)},validateEvent:{type:Boolean,default:!0}}),ke={[ee]:(l,F)=>F!==l,blur:l=>l instanceof FocusEvent,focus:l=>l instanceof FocusEvent,[A]:l=>p(l)||y(l),[h]:l=>p(l)||y(l)},Be=["aria-label","onKeydown"],Te=["aria-label","onKeydown"],xe=Q({name:"ElInputNumber"}),De=Q({...xe,props:Ce,emits:ke,setup(l,{expose:F,emit:c}){const a=l,{t:O}=Pe(),d=ce("input-number"),v=de(),u=me({currentValue:a.modelValue,userInput:null}),{formItem:b}=Se(),U=V(()=>p(a.modelValue)&&a.modelValue<=a.min),$=V(()=>p(a.modelValue)&&a.modelValue>=a.max),ne=V(()=>{const e=Y(a.step);return E(a.precision)?Math.max(Y(a.modelValue),e):(e>a.precision,a.precision)}),P=V(()=>a.controls&&a.controlsPosition==="right"),W=Ae(),N=Fe(),C=V(()=>{if(u.userInput!==null)return u.userInput;let e=u.currentValue;if(y(e))return"";if(p(e)){if(Number.isNaN(e))return"";E(a.precision)||(e=e.toFixed(a.precision))}return e}),k=(e,n)=>{if(E(n)&&(n=ne.value),n===0)return Math.round(e);let r=String(e);const s=r.indexOf(".");if(s===-1||!r.replace(".","").split("")[s+n])return e;const g=r.length;return r.charAt(g-1)==="5"&&(r=`${r.slice(0,Math.max(0,g-1))}6`),Number.parseFloat(Number(r).toFixed(n))},Y=e=>{if(y(e))return 0;const n=e.toString(),r=n.indexOf(".");let s=0;return r!==-1&&(s=n.length-r-1),s},G=(e,n=1)=>p(e)?k(e+a.step*n):u.currentValue,B=()=>{if(a.readonly||N.value||$.value)return;const e=Number(C.value)||0,n=G(e);I(n),c(A,u.currentValue),x()},T=()=>{if(a.readonly||N.value||U.value)return;const e=Number(C.value)||0,n=G(e,-1);I(n),c(A,u.currentValue),x()},H=(e,n)=>{const{max:r,min:s,step:o,precision:m,stepStrictly:g,valueOnClear:w}=a;r<s&&Ie("InputNumber","min should not be greater than max.");let i=Number(e);if(y(e)||Number.isNaN(i))return null;if(e===""){if(w===null)return null;i=ge(w)?{min:s,max:r}[w]:w}return g&&(i=k(Math.round(i/o)*o,m)),E(m)||(i=k(i,m)),(i>r||i<s)&&(i=i>r?r:s,n&&c(h,i)),i},I=(e,n=!0)=>{var r;const s=u.currentValue,o=H(e);if(!n){c(h,o);return}s===o&&e||(u.userInput=null,c(h,o),s!==o&&c(ee,o,s),a.validateEvent&&((r=b==null?void 0:b.validate)==null||r.call(b,"change").catch(m=>q())),u.currentValue=o)},te=e=>{u.userInput=e;const n=e===""?null:Number(e);c(A,n),I(n,!1)},re=e=>{const n=e!==""?Number(e):"";(p(n)&&!Number.isNaN(n)||e==="")&&I(n),x(),u.userInput=null},ae=()=>{var e,n;(n=(e=v.value)==null?void 0:e.focus)==null||n.call(e)},le=()=>{var e,n;(n=(e=v.value)==null?void 0:e.blur)==null||n.call(e)},ue=e=>{c("focus",e)},se=e=>{var n;u.userInput=null,c("blur",e),a.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"blur").catch(r=>q()))},x=()=>{u.currentValue!==a.modelValue&&(u.currentValue=a.modelValue)},oe=e=>{document.activeElement===e.target&&e.preventDefault()};return pe(()=>a.modelValue,(e,n)=>{const r=H(e,!0);u.userInput===null&&r!==n&&(u.currentValue=r)},{immediate:!0}),fe(()=>{var e;const{min:n,max:r,modelValue:s}=a,o=(e=v.value)==null?void 0:e.input;if(o.setAttribute("role","spinbutton"),Number.isFinite(r)?o.setAttribute("aria-valuemax",String(r)):o.removeAttribute("aria-valuemax"),Number.isFinite(n)?o.setAttribute("aria-valuemin",String(n)):o.removeAttribute("aria-valuemin"),o.setAttribute("aria-valuenow",u.currentValue||u.currentValue===0?String(u.currentValue):""),o.setAttribute("aria-disabled",String(N.value)),!p(s)&&s!=null){let m=Number(s);Number.isNaN(m)&&(m=null),c(h,m)}}),be(()=>{var e,n;const r=(e=v.value)==null?void 0:e.input;r==null||r.setAttribute("aria-valuenow",`${(n=u.currentValue)!=null?n:""}`)}),F({focus:ae,blur:le}),(e,n)=>(f(),D("div",{class:z([t(d).b(),t(d).m(t(W)),t(d).is("disabled",t(N)),t(d).is("without-controls",!e.controls),t(d).is("controls-right",t(P))]),onDragstart:n[0]||(n[0]=K(()=>{},["prevent"]))},[e.controls?L((f(),D("span",{key:0,role:"button","aria-label":t(O)("el.inputNumber.decrease"),class:z([t(d).e("decrease"),t(d).is("disabled",t(U))]),onKeydown:_(T,["enter"])},[R(e.$slots,"decrease-icon",{},()=>[M(t(Z),null,{default:X(()=>[t(P)?(f(),S(t(ve),{key:0})):(f(),S(t(Ne),{key:1}))]),_:1})])],42,Be)),[[t(J),T]]):j("v-if",!0),e.controls?L((f(),D("span",{key:1,role:"button","aria-label":t(O)("el.inputNumber.increase"),class:z([t(d).e("increase"),t(d).is("disabled",t($))]),onKeydown:_(B,["enter"])},[R(e.$slots,"increase-icon",{},()=>[M(t(Z),null,{default:X(()=>[t(P)?(f(),S(t(Ve),{key:0})):(f(),S(t(he),{key:1}))]),_:1})])],42,Te)),[[t(J),B]]):j("v-if",!0),M(t(Ee),{id:e.id,ref_key:"input",ref:v,type:"number",step:e.step,"model-value":t(C),placeholder:e.placeholder,readonly:e.readonly,disabled:t(N),size:t(W),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onWheel:oe,onKeydown:[_(K(B,["prevent"]),["up"]),_(K(T,["prevent"]),["down"])],onBlur:se,onFocus:ue,onInput:te,onChange:re},null,8,["id","step","model-value","placeholder","readonly","disabled","size","max","min","name","label","onKeydown"])],34))}});var ze=ye(De,[["__file","input-number.vue"]]);const Ge=we(ze);export{Ge as ElInputNumber,Ge as default,ke as inputNumberEmits,Ce as inputNumberProps};

import{B as J,A as X,b8 as g,C as Z,F as w,E as V,b3 as S,G as U,H as x,l as d,n as T,a2 as ee,w as K,T as ae,v as ie,N as i,O as v,ab as C,s as a,Q as u,ay as te,a5 as c,a4 as p,a6 as y,aw as h,aa as r,a9 as E,Y as ne,ax as se,P as O,a7 as oe,az as le,_ as ce,$ as re,aP as M,U as ue,ad as de}from"./index-BVUmbTYK.js";import{U as N,C as P,I as B}from"./event-BB_Ol6Sd.js";import{a as ve,c as fe,d as pe,u as he}from"./index-BAWx_WKd.js";const me=o=>["",...J].includes(o),ye=X({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:me},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:g},activeActionIcon:{type:g},activeIcon:{type:g},inactiveIcon:{type:g},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:Z(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}}),be={[N]:o=>w(o)||V(o)||S(o),[P]:o=>w(o)||V(o)||S(o),[B]:o=>w(o)||V(o)||S(o)},Ie=["onClick"],ke=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],ge=["aria-hidden"],we=["aria-hidden"],Ve=["aria-hidden"],_="ElSwitch",Se=U({name:_}),Te=U({...Se,props:ye,emits:be,setup(o,{expose:$,emit:f}){const n=o,{formItem:b}=ve(),G=fe(),t=x("switch"),{inputId:H}=pe(n,{formItemContext:b}),I=he(d(()=>n.loading)),A=T(n.modelValue!==!1),m=T(),L=T(),Q=d(()=>[t.b(),t.m(G.value),t.is("disabled",I.value),t.is("checked",s.value)]),R=d(()=>[t.e("label"),t.em("label","left"),t.is("active",!s.value)]),W=d(()=>[t.e("label"),t.em("label","right"),t.is("active",s.value)]),Y=d(()=>({width:ee(n.width)}));K(()=>n.modelValue,()=>{A.value=!0});const z=d(()=>A.value?n.modelValue:!1),s=d(()=>z.value===n.activeValue);[n.activeValue,n.inactiveValue].includes(z.value)||(f(N,n.inactiveValue),f(P,n.inactiveValue),f(B,n.inactiveValue)),K(s,e=>{var l;m.value.checked=e,n.validateEvent&&((l=b==null?void 0:b.validate)==null||l.call(b,"change").catch(q=>ae()))});const k=()=>{const e=s.value?n.inactiveValue:n.activeValue;f(N,e),f(P,e),f(B,e),re(()=>{m.value.checked=s.value})},D=()=>{if(I.value)return;const{beforeChange:e}=n;if(!e){k();return}const l=e();[M(l),w(l)].includes(!0)||ue(_,"beforeChange must return type `Promise<boolean>` or `boolean`"),M(l)?l.then(F=>{F&&k()}).catch(F=>{}):l&&k()},j=()=>{var e,l;(l=(e=m.value)==null?void 0:e.focus)==null||l.call(e)};return ie(()=>{m.value.checked=s.value}),$({focus:j,checked:s}),(e,l)=>(i(),v("div",{class:u(a(Q)),onClick:le(D,["prevent"])},[C("input",{id:a(H),ref_key:"input",ref:m,class:u(a(t).e("input")),type:"checkbox",role:"switch","aria-checked":a(s),"aria-disabled":a(I),"aria-label":e.label,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(I),tabindex:e.tabindex,onChange:k,onKeydown:te(D,["enter"])},null,42,ke),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(i(),v("span",{key:0,class:u(a(R))},[e.inactiveIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.inactiveIcon)))]),_:1})):r("v-if",!0),!e.inactiveIcon&&e.inactiveText?(i(),v("span",{key:1,"aria-hidden":a(s)},E(e.inactiveText),9,ge)):r("v-if",!0)],2)):r("v-if",!0),C("span",{ref_key:"core",ref:L,class:u(a(t).e("core")),style:oe(a(Y))},[e.inlinePrompt?(i(),v("div",{key:0,class:u(a(t).e("inner"))},[e.activeIcon||e.inactiveIcon?(i(),c(a(h),{key:0,class:u(a(t).is("icon"))},{default:p(()=>[(i(),c(y(a(s)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(i(),v("span",{key:1,class:u(a(t).is("text")),"aria-hidden":!a(s)},E(a(s)?e.activeText:e.inactiveText),11,we)):r("v-if",!0)],2)):r("v-if",!0),C("div",{class:u(a(t).e("action"))},[e.loading?(i(),c(a(h),{key:0,class:u(a(t).is("loading"))},{default:p(()=>[ne(a(se))]),_:1},8,["class"])):a(s)?O(e.$slots,"active-action",{key:1},()=>[e.activeActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.activeActionIcon)))]),_:1})):r("v-if",!0)]):a(s)?r("v-if",!0):O(e.$slots,"inactive-action",{key:2},()=>[e.inactiveActionIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.inactiveActionIcon)))]),_:1})):r("v-if",!0)])],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(i(),v("span",{key:1,class:u(a(W))},[e.activeIcon?(i(),c(a(h),{key:0},{default:p(()=>[(i(),c(y(e.activeIcon)))]),_:1})):r("v-if",!0),!e.activeIcon&&e.activeText?(i(),v("span",{key:1,"aria-hidden":!a(s)},E(e.activeText),9,Ve)):r("v-if",!0)],2)):r("v-if",!0)],10,Ie))}});var Ce=ce(Te,[["__file","switch.vue"]]);const Be=de(Ce);export{Be as ElSwitch,Be as default,be as switchEmits,ye as switchProps};
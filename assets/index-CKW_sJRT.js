import{h as x,_ as W,n as B,i as V,p as F,D as Q,r as u,c as T,E as Z,aW as L,t as $,x as P,O as M,N as X,at as ee,U as O,A as R,u as b,Q as A,ay as te,b2 as ae,ao as le,y as Y,H as K,I as se,j as oe,aI as N,M as U,w as I,G as re,J as q,q as ne,s as ie,o as ue,F as ce,z as ve,P as fe,T as me,a6 as de,W as pe}from"./index-CQXB1C3t.js";import{B as he,r as be,G as H}from"./util-B2mB0_6C.js";const D=Symbol("scrollbarContextKey"),ye=x({vertical:Boolean,size:String,move:Number,ratio:{type:Number,required:!0},always:Boolean}),ge="Thumb",Se=B({__name:"thumb",props:ye,setup(w){const f=w,i=V(D),l=F("scrollbar");i||Q(ge,"can not inject scrollbar context");const o=u(),c=u(),d=u({}),p=u(!1);let a=!1,h=!1,y=le?document.onselectstart:null;const t=T(()=>he[f.vertical?"vertical":"horizontal"]),s=T(()=>be({size:f.size,move:f.move,bar:t.value})),v=T(()=>o.value[t.value.offset]**2/i.wrapElement[t.value.scrollSize]/f.ratio/c.value[t.value.offset]),m=n=>{var S;if(n.stopPropagation(),n.ctrlKey||[1,2].includes(n.button))return;(S=window.getSelection())==null||S.removeAllRanges(),_(n);const E=n.currentTarget;E&&(d.value[t.value.axis]=E[t.value.offset]-(n[t.value.client]-E.getBoundingClientRect()[t.value.direction]))},z=n=>{if(!c.value||!o.value||!i.wrapElement)return;const S=Math.abs(n.target.getBoundingClientRect()[t.value.direction]-n[t.value.client]),E=c.value[t.value.offset]/2,k=(S-E)*100*v.value/o.value[t.value.offset];i.wrapElement[t.value.scroll]=k*i.wrapElement[t.value.scrollSize]/100},_=n=>{n.stopImmediatePropagation(),a=!0,document.addEventListener("mousemove",g),document.addEventListener("mouseup",r),y=document.onselectstart,document.onselectstart=()=>!1},g=n=>{if(!o.value||!c.value||a===!1)return;const S=d.value[t.value.axis];if(!S)return;const E=(o.value.getBoundingClientRect()[t.value.direction]-n[t.value.client])*-1,k=c.value[t.value.offset]-S,J=(E-k)*100*v.value/o.value[t.value.offset];i.wrapElement[t.value.scroll]=J*i.wrapElement[t.value.scrollSize]/100},r=()=>{a=!1,d.value[t.value.axis]=0,document.removeEventListener("mousemove",g),document.removeEventListener("mouseup",r),j(),h&&(p.value=!1)},e=()=>{h=!1,p.value=!!f.size},C=()=>{h=!0,p.value=a};Z(()=>{j(),document.removeEventListener("mouseup",r)});const j=()=>{document.onselectstart!==y&&(document.onselectstart=y)};return L($(i,"scrollbarElement"),"mousemove",e),L($(i,"scrollbarElement"),"mouseleave",C),(n,S)=>(P(),M(ae,{name:b(l).b("fade"),persisted:""},{default:X(()=>[ee(O("div",{ref_key:"instance",ref:o,class:R([b(l).e("bar"),b(l).is(b(t).key)]),onMousedown:z},[O("div",{ref_key:"thumb",ref:c,class:R(b(l).e("thumb")),style:A(b(s)),onMousedown:m},null,38)],34),[[te,n.always||p.value]])]),_:1},8,["name"]))}});var G=W(Se,[["__file","thumb.vue"]]);const we=x({always:{type:Boolean,default:!0},minSize:{type:Number,required:!0}}),ze=B({__name:"bar",props:we,setup(w,{expose:f}){const i=w,l=V(D),o=u(0),c=u(0),d=u(""),p=u(""),a=u(1),h=u(1);return f({handleScroll:s=>{if(s){const v=s.offsetHeight-H,m=s.offsetWidth-H;c.value=s.scrollTop*100/v*a.value,o.value=s.scrollLeft*100/m*h.value}},update:()=>{const s=l==null?void 0:l.wrapElement;if(!s)return;const v=s.offsetHeight-H,m=s.offsetWidth-H,z=v**2/s.scrollHeight,_=m**2/s.scrollWidth,g=Math.max(z,i.minSize),r=Math.max(_,i.minSize);a.value=z/(v-z)/(g/(v-g)),h.value=_/(m-_)/(r/(m-r)),p.value=g+H<v?`${g}px`:"",d.value=r+H<m?`${r}px`:""}}),(s,v)=>(P(),Y(se,null,[K(G,{move:o.value,ratio:h.value,size:d.value,always:s.always},null,8,["move","ratio","size","always"]),K(G,{move:c.value,ratio:a.value,size:p.value,vertical:"",always:s.always},null,8,["move","ratio","size","always"])],64))}});var _e=W(ze,[["__file","bar.vue"]]);const Ee=x({height:{type:[String,Number],default:""},maxHeight:{type:[String,Number],default:""},native:{type:Boolean,default:!1},wrapStyle:{type:oe([String,Object,Array]),default:""},wrapClass:{type:[String,Array],default:""},viewClass:{type:[String,Array],default:""},viewStyle:{type:[String,Array,Object],default:""},noresize:Boolean,tag:{type:String,default:"div"},always:Boolean,minSize:{type:Number,default:20},id:String,role:String,ariaLabel:String,ariaOrientation:{type:String,values:["horizontal","vertical"]}}),He={scroll:({scrollTop:w,scrollLeft:f})=>[w,f].every(N)},Te="ElScrollbar",Ce=B({name:Te}),Ne=B({...Ce,props:Ee,emits:He,setup(w,{expose:f,emit:i}){const l=w,o=F("scrollbar");let c,d;const p=u(),a=u(),h=u(),y=u(),t=T(()=>{const e={};return l.height&&(e.height=U(l.height)),l.maxHeight&&(e.maxHeight=U(l.maxHeight)),[l.wrapStyle,e]}),s=T(()=>[l.wrapClass,o.e("wrap"),{[o.em("wrap","hidden-default")]:!l.native}]),v=T(()=>[o.e("view"),l.viewClass]),m=()=>{var e;a.value&&((e=y.value)==null||e.handleScroll(a.value),i("scroll",{scrollTop:a.value.scrollTop,scrollLeft:a.value.scrollLeft}))};function z(e,C){de(e)?a.value.scrollTo(e):N(e)&&N(C)&&a.value.scrollTo(e,C)}const _=e=>{N(e)&&(a.value.scrollTop=e)},g=e=>{N(e)&&(a.value.scrollLeft=e)},r=()=>{var e;(e=y.value)==null||e.update()};return I(()=>l.noresize,e=>{e?(c==null||c(),d==null||d()):({stop:c}=re(h,r),d=L("resize",r))},{immediate:!0}),I(()=>[l.maxHeight,l.height],()=>{l.native||q(()=>{var e;r(),a.value&&((e=y.value)==null||e.handleScroll(a.value))})}),ne(D,ie({scrollbarElement:p,wrapElement:a})),ue(()=>{l.native||q(()=>{r()})}),ce(()=>r()),f({wrapRef:a,update:r,scrollTo:z,setScrollTop:_,setScrollLeft:g,handleScroll:m}),(e,C)=>(P(),Y("div",{ref_key:"scrollbarRef",ref:p,class:R(b(o).b())},[O("div",{ref_key:"wrapRef",ref:a,class:R(b(s)),style:A(b(t)),onScroll:m},[(P(),M(fe(e.tag),{id:e.id,ref_key:"resizeRef",ref:h,class:R(b(v)),style:A(e.viewStyle),role:e.role,"aria-label":e.ariaLabel,"aria-orientation":e.ariaOrientation},{default:X(()=>[ve(e.$slots,"default")]),_:3},8,["id","class","style","role","aria-label","aria-orientation"]))],38),e.native?me("v-if",!0):(P(),M(_e,{key:0,ref_key:"barRef",ref:y,always:e.always,"min-size":e.minSize},null,8,["always","min-size"]))],2))}});var Pe=W(Ne,[["__file","scrollbar.vue"]]);const ke=pe(Pe);export{ke as E};

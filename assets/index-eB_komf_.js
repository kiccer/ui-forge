import{aK as v,ag as g,n as w,w as F,bj as h,R as C,m}from"./index-COVHiMFl.js";const A=()=>v&&/firefox/i.test(window.navigator.userAgent),b=n=>/([\uAC00-\uD7AF\u3130-\u318F])+/gi.test(n);function R(n,{afterFocus:t,beforeBlur:i,afterBlur:l}={}){const r=m(),{emit:o}=r,a=g(),e=w(!1),c=s=>{e.value||(e.value=!0,o("focus",s),t==null||t())},f=s=>{var u;C(i)&&i(s)||s.relatedTarget&&((u=a.value)!=null&&u.contains(s.relatedTarget))||(e.value=!1,o("blur",s),l==null||l())},d=()=>{var s;(s=n.value)==null||s.focus()};return F(a,s=>{s&&s.setAttribute("tabindex","-1")}),h(a,"click",d),{wrapperRef:a,isFocused:e,handleFocus:c,handleBlur:f}}export{A as a,b as i,R as u};

import{bG as l}from"./index-CL6XICGL.js";import{i as v}from"./identity-DKeuBCMA.js";function f(n,e,r){switch(r.length){case 0:return n.call(e);case 1:return n.call(e,r[0]);case 2:return n.call(e,r[0],r[1]);case 3:return n.call(e,r[0],r[1],r[2])}return n.apply(e,r)}var m=800,p=16,s=Date.now;function d(n){var e=0,r=0;return function(){var a=s(),t=p-(a-r);if(r=a,t>0){if(++e>=m)return arguments[0]}else e=0;return n.apply(void 0,arguments)}}function y(n){return function(){return n}}var h=l?function(n,e){return l(n,"toString",{configurable:!0,enumerable:!1,value:y(e),writable:!0})}:v;const S=h;var T=d(S),c=Math.max;function g(n,e,r){return e=c(e===void 0?n.length-1:e,0),function(){for(var a=arguments,t=-1,o=c(a.length-e,0),u=Array(o);++t<o;)u[t]=a[e+t];t=-1;for(var i=Array(e+1);++t<e;)i[t]=a[t];return i[e]=r(u),f(n,this,i)}}export{g as o,T as s};
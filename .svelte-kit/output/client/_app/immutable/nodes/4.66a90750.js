import{d as k}from"../chunks/environment.9aa685ef.js";import{S as A,i as D,s as F,k as r,a as _,q as d,M as G,l as p,h as s,c as f,m as g,r as u,n as B,F as e,b as T,G as C,o as H,N as I}from"../chunks/index.054d6729.js";const J=k,V=!0,W=Object.freeze(Object.defineProperty({__proto__:null,csr:J,prerender:V},Symbol.toStringTag,{value:"Module"})),{document:L}=I;function w(z){let a,n,t,m,b,E,S,x,o,M,y,j,P,$,N,h,q;return{c(){a=r("meta"),n=_(),t=r("div"),m=r("h1"),b=d("Esercizio 2"),E=_(),S=d(z[0]),x=_(),o=r("p"),M=d(`Se r = 0 la popolazione rimarrà costante(ovvero uguale alla popolazione iniziale).
		`),y=r("br"),j=d(`
		Se r è positivo la popolazione aumenterà.
		`),P=r("br"),$=d(`
		Se r è negativo la popolazione è destinata a estinguersi.`),N=_(),h=r("p"),q=d("La popolazione iniziale è un moltiplicatore del risultato dell'esponenziale."),this.h()},l(l){const v=G("svelte-fiy0vz",L.head);a=p(v,"META",{name:!0,content:!0}),v.forEach(s),n=f(l),t=p(l,"DIV",{class:!0});var i=g(t);m=p(i,"H1",{});var O=g(m);b=u(O,"Esercizio 2"),O.forEach(s),E=f(i),S=u(i,z[0]),x=f(i),o=p(i,"P",{});var c=g(o);M=u(c,`Se r = 0 la popolazione rimarrà costante(ovvero uguale alla popolazione iniziale).
		`),y=p(c,"BR",{}),j=u(c,`
		Se r è positivo la popolazione aumenterà.
		`),P=p(c,"BR",{}),$=u(c,`
		Se r è negativo la popolazione è destinata a estinguersi.`),c.forEach(s),N=f(i),h=p(i,"P",{});var R=g(h);q=u(R,"La popolazione iniziale è un moltiplicatore del risultato dell'esponenziale."),R.forEach(s),i.forEach(s),this.h()},h(){L.title="Esercizio 2",B(a,"name","description"),B(a,"content","Esercizio 2"),B(t,"class","text-column")},m(l,v){e(L.head,a),T(l,n,v),T(l,t,v),e(t,m),e(m,b),e(t,E),e(t,S),e(t,x),e(t,o),e(o,M),e(o,y),e(o,j),e(o,P),e(o,$),e(t,N),e(t,h),e(h,q)},p:C,i:C,o:C,d(l){s(a),l&&s(n),l&&s(t)}}}function K(z){let a=`
		\\begin{align}
		\\ N(t) = N_0 * e ^ {r * t} \\\\
		\\end{align}`;return H(()=>{let n=document.createElement("script");n.src="./mathjax.js",document.head.append(n),n.onload=()=>{MathJax={tex:{inlineMath:[["$","$"],["\\(","\\)"]]},svg:{fontCache:"global"}}}}),[a]}class X extends A{constructor(a){super(),D(this,a,K,w,F,{})}}export{X as component,W as universal};

(this["webpackJsonpburger-queen-lab"]=this["webpackJsonpburger-queen-lab"]||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/logo.424fb1ed.png"},32:function(e,t,a){e.exports=a.p+"static/media/chef.daaa92ce.png"},33:function(e,t,a){e.exports=a.p+"static/media/hall.49b4572c.png"},35:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAkCAYAAAAtmaJzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACySURBVHgB7dc9CkIxEATg2YB9Su08gpYexxvoSTyCV3jewM5G0CNYWqZXiLtgod175SzzQUJIN+QHxuAucyxnhqMvVz4quA2vjv3miYd9g93AH+pX84Dr4sEOyBUs1LiJdl2gI6dWYkJONcLdkZBfx1Pxh7dFvtNr745diS8zfhbfGMCv+ZGdI0/kgoiIjGAxqRVwUStgplZASa2AjFqBiMhkagWE1AqYqRVQUisg89cKPrb0ckZP3/6sAAAAAElFTkSuQmCC"},36:function(e,t,a){e.exports=a.p+"static/media/exit.b5e107e5.png"},38:function(e,t,a){e.exports=a(59)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},49:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),i=a.n(r),l=(a(43),a(44),a(3)),o=(a(45),function(e){var t=e.type,a=e.onClick,n=e.id,r=e.className,i=e.name;return c.a.createElement("button",{type:t,onClick:a,id:n,className:r},i)}),u=function(e){var t=e.type,a=e.name,n=e.checked,r=e.onChange,i=e.id,l=e.className,o=e.value,u=e.placeholder;return c.a.createElement("input",{type:t,name:a,checked:n,onChange:r,id:i,className:l,value:o,placeholder:u})},s=function(e){return c.a.createElement("img",{src:e.src,alt:e.alt,className:e.class})},m=a(16),d=a.n(m),f=(a(46),function(e){var t=e.id,a=void 0===t?"modal":t,n=e.onClose,r=void 0===n?function(){}:n,i=e.children;return c.a.createElement("div",{id:a,className:"modal",onClick:function(e){e.target.id===a&&r()}},c.a.createElement("div",{className:"container"},c.a.createElement("button",{className:"close",onClick:r}),c.a.createElement("div",{className:"content"},i)))}),p=a(2),h=a(8),g=a.n(h),E=a(32),b=a.n(E),v=a(33),A=a.n(v),j=a(23),O=a.n(j);O.a.initializeApp({apiKey:"AIzaSyDPrl1Wy18D6rej3zpQEnlOBwUASe_IszI",authDomain:"burger-queen-lab-d4315.firebaseapp.com",databaseURL:"https://burger-queen-lab-d4315.firebaseio.com",projectId:"burger-queen-lab-d4315",storageBucket:"burger-queen-lab-d4315.appspot.com",messagingSenderId:"966507845552",appId:"1:966507845552:web:5ceaacd782f0a4a5b96875",measurementId:"G-MPDMRW3N0P"});var k=O.a,N=(a(14),a(22),a(49),{"auth/user-not-found":"Usu\xe1rio n\xe3o encontrado","auth/wrong-password":"Senha inv\xe1lida","auth/invalid-email":"Email inv\xe1lido","auth/weak-password":"Senha deve conter no m\xednino 6 caracteres","auth/email-already-in-use":"Usu\xe1rio j\xe1 cadastrado","auth/invalid-credential":"Dados inv\xe1lidos","auth/user-disabled":"Conta desativada. Refa\xe7a o seu cadastro!","auth/account-exists-with-different-credential":"Dados utilizados por outro usu\xe1rio"}),w=a(17),C=a(18),y=function(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),d=m[0],f=m[1],h=Object(n.useState)(""),E=Object(l.a)(h,2),v=E[0],j=E[1],O=Object(n.useState)(""),y=Object(l.a)(O,2),S=y[0],x=y[1],R=Object(p.f)(),q=Object(n.useState)(!1),P=Object(l.a)(q,2),B=P[0],U=P[1],I=c.a.createElement(w.a,{icon:C.a});return c.a.createElement("form",{className:"form-register"},c.a.createElement(u,{type:"name",id:"name",className:"input-text",value:a,onChange:function(e){return r(e.target.value)},placeholder:"Nome e Sobrenome"}),c.a.createElement(u,{type:"email",id:"email",className:"input-text",value:d,onChange:function(e){return f(e.target.value)},placeholder:"Digite seu email"}),c.a.createElement(u,{type:B?"text":"password",id:"password",className:"input-text",value:S,onChange:function(e){return x(e.target.value)},placeholder:"Digite sua senha"}),c.a.createElement("i",{className:"eye1 eyes",onClick:function(){return U(!B)}},I),c.a.createElement("div",{className:"select-type"},c.a.createElement(s,{src:b.a,alt:"img-chef",class:"chef-kitchen"}),c.a.createElement("label",{htmlFor:"cozinha",className:"label-kitchen"},"COZINHA"),c.a.createElement(u,{type:"radio",className:"btn-radio-kitchen",name:"job",value:"kitchen",onChange:function(e){return j(e.target.value)},id:"kitchen"})),c.a.createElement("div",{className:"select-type-two"},c.a.createElement(s,{src:A.a,alt:"img-hall",class:"img-hall"}),c.a.createElement("label",{htmlFor:"salao",className:"label-hall"},"SAL\xc3O"),c.a.createElement(u,{type:"radio",className:"btn-radio-hall",name:"job",value:"hall",onChange:function(e){return j(e.target.value)},id:"hall"})),c.a.createElement(o,{id:"register",className:"btn-register",type:"submit",onClick:function(e){e.preventDefault(),a&&d&&v&&S?k.auth().createUserWithEmailAndPassword(d,S).then((function(){"hall"===v?R.push("/newRequest"):R.push("/ordersReceived")})).then((function(){var e=k.auth().currentUser.uid;k.firestore().collection("users").doc(e).set({name:a,job:v,uid:k.auth().currentUser.uid,email:d}).then(k.auth().currentUser.updateProfile({displayName:a}))})).catch((function(e){N[e.code]?g.a.fire({text:N[e.code],icon:"warning"}):g.a.fire({text:e,icon:"warning"})})):g.a.fire({text:"Preencha os campos em branco",icon:"warning"})},name:"Registrar"}))},S=(a(56),function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)(""),m=Object(l.a)(i,2),h=m[0],E=m[1],b=Object(n.useState)(""),v=Object(l.a)(b,2),A=v[0],j=v[1],O=Object(n.useState)(!1),S=Object(l.a)(O,2),x=S[0],R=S[1],q=Object(p.f)(),P=c.a.createElement(w.a,{icon:C.a});return c.a.createElement("div",{className:"div"},c.a.createElement("figure",null,c.a.createElement(s,{src:d.a,alt:"logo",class:"logo-login"})),c.a.createElement("div",{className:"select-form"},c.a.createElement("form",{className:"form-login"},c.a.createElement(u,{type:"email",id:"email",className:"input-login",value:h,onChange:function(e){return E(e.target.value)},placeholder:"Digite seu email"}),c.a.createElement(u,{type:x?"text":"password",id:"password",className:"input-login",value:A,onChange:function(e){return j(e.target.value)},placeholder:"Digite sua senha"}),c.a.createElement("i",{className:"eye",onClick:function(){return R(!x)}},P),c.a.createElement(o,{id:"login",className:"button-loggin",name:"Entrar",onClick:function(e){e.preventDefault(),h?A?k.auth().signInWithEmailAndPassword(h,A).then((function(e){k.firestore().collection("users").doc(e.user.uid).get().then((function(e){"hall"===e.data().job?q.push("/newRequest"):q.push("/ordersReceived")}))})).catch((function(e){N[e.code]?g.a.fire({text:N[e.code],icon:"warning"}):g.a.fire({text:e,icon:"warning"})})):g.a.fire({text:'Prencha o campo de "senha"',icon:"warning"}):g.a.fire({text:'Prencha o campo de "email"',icon:"warning"})}}),c.a.createElement("p",{onClick:function(){return r(!0)}},"Ainda n\xe3o tem cadastro? Registre-se aqui!")),a?c.a.createElement(f,{onClose:function(){return r(!1)}},c.a.createElement(y,null)):null))}),x=a(11),R=a(35),q=a.n(R),P=a(36),B=a.n(P),U=(a(57),function(){return c.a.createElement("nav",{className:"menu-buguer"},c.a.createElement("div",null,c.a.createElement(s,{src:q.a,alt:"menu",class:"menu-hamburguer"})),c.a.createElement("div",null,c.a.createElement(s,{src:d.a,alt:"logo-nav",class:"logo-nav"})),c.a.createElement("div",null,c.a.createElement(x.b,{to:"/"},c.a.createElement("button",{id:"exit",className:"btn-exit",onClick:function(){return k.auth().signOut()}},c.a.createElement(s,{src:B.a,alt:"exit",class:"exit-login"})))))}),I=function(){return c.a.createElement("div",{link:"/ordersReceived"},c.a.createElement(U,null,"Cozinha"))},D=a(37);a(58);var z=function(e){return c.a.createElement("button",{className:e.class,onClick:e.onClick,key:e.value},c.a.createElement("div",null,c.a.createElement("img",{src:e.src,alt:e.alt,className:"imagem"})),c.a.createElement("div",{className:"name"}," ",e.name," "),c.a.createElement("div",{className:"price"}," ",e.price," "))},M=a(12),W=function(){return Promise.all([new Promise((function(e){k.firestore().collection("breakfast").orderBy("item","asc").get().then((function(t){var a=t.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));e(a)}))})),new Promise((function(e){k.firestore().collection("hamburger").get().then((function(t){var a=t.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));e(a)}))})),new Promise((function(e){k.firestore().collection("side-dishes").orderBy("item","asc").get().then((function(t){var a=t.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));e(a)}))})),new Promise((function(e){k.firestore().collection("drinks").orderBy("item","desc").get().then((function(t){var a=t.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));e(a)}))})),new Promise((function(e){k.firestore().collection("additional").get().then((function(t){var a=t.docs.map((function(e){return Object(M.a)({id:e.id},e.data())}));e(a)}))}))])},Y=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],i=Object(n.useState)([]),u=Object(l.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)([]),p=Object(l.a)(d,2),h=p[0],g=p[1],E=Object(n.useState)([]),b=Object(l.a)(E,2),v=b[0],A=b[1],j=Object(n.useState)([]),O=Object(l.a)(j,2),k=O[0],N=O[1],w=Object(n.useState)([]),C=Object(l.a)(w,2),y=C[0],S=C[1],x=Object(n.useState)(!1),R=Object(l.a)(x,2),q=R[0],P=R[1];Object(n.useEffect)((function(){W().then((function(e){var t=Object(l.a)(e,5),a=t[0],n=t[1],c=t[2],i=t[3],o=t[4];r(a),m(n),g(c),A(i),N(o)}))}),[]);var B=function(e){var t,a=e.target.value,n=e.target.name;t={item:n,quantity:1,price:a},S([].concat(Object(D.a)(y),[t]))};return c.a.createElement("main",null,c.a.createElement("div",{link:"/newRequest"},c.a.createElement(U,null)),c.a.createElement("section",null,c.a.createElement("div",null,"MENU"),c.a.createElement("div",null,"Caf\xe9 da Manh\xe3")," ",a.map((function(e){return c.a.createElement(z,{name:"".concat(e.item," "),price:"R$".concat(e.price),value:e.id,key:e.id,src:e.icon,className:"image",onClick:function(e){return B(e)}})}))," "),c.a.createElement("section",null,c.a.createElement("div",null,"Hamburgers"),c.a.createElement("div",{onClick:function(){return P(!0)}},s.map((function(e){return c.a.createElement(z,{name:"".concat(e.item," "),price:"R$".concat(e.price),value:e.id,key:e.id,src:e.icon})})))),q?c.a.createElement(f,{onClose:function(){return P(!1)}},c.a.createElement("section",null,c.a.createElement("div",null,"OP\xc7\xd5ES"),c.a.createElement("div",null,c.a.createElement(o,{name:"Bovino"}),c.a.createElement(o,{name:"Frango"}),c.a.createElement(o,{name:"Vegetariano"})),k.map((function(e){return c.a.createElement(z,{name:"".concat(e.item," "),price:"R$".concat(e.price),value:e.id,key:e.id,src:e.icon,className:"image"})}))," ")):null,c.a.createElement("section",null,c.a.createElement("div",null,"Acompanhamentos")," ",h.map((function(e){return c.a.createElement(z,{name:"".concat(e.item," "),price:"R$".concat(e.price),value:e.id,key:e.id,src:e.icon,onClick:function(e){return B(e)}})}))," "),c.a.createElement("section",null,c.a.createElement("div",null,"Bebidas")," ",v.map((function(e){return c.a.createElement(z,{name:"".concat(e.item," "),price:"R$".concat(e.price),value:e.id,key:e.id,src:e.icon,onClick:function(e){return B(e)}})}))," "))};function Q(){return c.a.createElement(x.a,null,c.a.createElement(p.c,null,c.a.createElement(p.a,{path:"/login",component:S}),c.a.createElement(p.a,{path:"/ordersReceived",component:I}),c.a.createElement(p.a,{path:"/newRequest",component:Y}),c.a.createElement(p.a,{exact:!0,path:"/",component:S})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.abd8ba50.chunk.js.map
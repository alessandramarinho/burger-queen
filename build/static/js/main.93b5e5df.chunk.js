(this["webpackJsonpburger-queen-lab"]=this["webpackJsonpburger-queen-lab"]||[]).push([[0],{24:function(e,a,t){e.exports=t.p+"static/media/logo.424fb1ed.png"},25:function(e,a,t){e.exports=t.p+"static/media/chef.daaa92ce.png"},26:function(e,a,t){e.exports=t.p+"static/media/hall.49b4572c.png"},28:function(e,a,t){e.exports=t(46)},33:function(e,a,t){},34:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},40:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),l=t.n(c),i=(t(33),t(34),t(8)),o=(t(35),function(e){return r.a.createElement("button",{type:e.type,onClick:e.onClick,id:e.id,className:e.class},e.name)}),s=function(e){return r.a.createElement("input",{type:e.type,name:e.name,checked:e.checked,onChange:e.onChange,id:e.id,className:e.class,value:e.value,placeholder:e.placeholder})},u=function(e){return r.a.createElement("img",{src:e.src,alt:e.alt,className:e.class})},m=t(24),d=t.n(m),h=(t(36),function(e){var a=e.id,t=void 0===a?"modal":a,n=e.onClose,c=void 0===n?function(){}:n,l=e.children;return r.a.createElement("div",{id:t,className:"modal",onClick:function(e){e.target.id===t&&c()}},r.a.createElement("div",{className:"container"},r.a.createElement("button",{className:"close",onClick:c}),r.a.createElement("div",{className:"content"},l)))}),p=t(1),g=t(5),f=t.n(g),b=t(25),E=t.n(b),v=t(26),w=t.n(v),j=t(17),C=t.n(j);C.a.initializeApp({apiKey:"AIzaSyDPrl1Wy18D6rej3zpQEnlOBwUASe_IszI",authDomain:"burger-queen-lab-d4315.firebaseapp.com",databaseURL:"https://burger-queen-lab-d4315.firebaseio.com",projectId:"burger-queen-lab-d4315",storageBucket:"burger-queen-lab-d4315.appspot.com",messagingSenderId:"966507845552",appId:"1:966507845552:web:5ceaacd782f0a4a5b96875",measurementId:"G-MPDMRW3N0P"});var k=C.a,O=(t(12),t(13),t(40),function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),d=m[0],h=m[1],g=Object(n.useState)(""),b=Object(i.a)(g,2),v=b[0],j=b[1],C=Object(n.useState)(""),O=Object(i.a)(C,2),y=O[0],N=O[1],S=Object(n.useState)(""),x=Object(i.a)(S,2),R=x[0],P=x[1],I=Object(p.f)();return r.a.createElement("div",{className:"form-register"},r.a.createElement(s,{type:"name",id:"name",class:"input-text",value:t,onChange:function(e){return c(e.target.value)},placeholder:"Nome e Sobrenome"}),r.a.createElement(s,{type:"email",id:"email",class:"input-text",value:d,onChange:function(e){return h(e.target.value)},placeholder:"Digite seu email"}),r.a.createElement(s,{type:"password",id:"password",class:"input-text",value:y,onChange:function(e){return N(e.target.value)},placeholder:"Digite sua senha"}),r.a.createElement(s,{type:"password",id:"passwordConfirm",class:"input-text",value:R,onChange:function(e){return P(e.target.value)},placeholder:"Confirme a sua senha"}),r.a.createElement(o,{id:"register",class:"btn-register",type:"submit",onClick:function(e){e.preventDefault(),t&&d&&v&&y?y!==R?f.a.fire({text:"Senhas n\xe3o conferem",icon:"warning"}):k.auth().createUserWithEmailAndPassword(d,y).then((function(){"hall"===v?I.push("/newRequest"):I.push("/ordersReceived")})).then((function(){var e=k.auth().currentUser.uid;k.firestore().collection("users").doc(e).set({name:t,job:v,uid:k.auth().currentUser.uid,email:d}).then(k.auth().currentUser.updateProfile({displayName:t}))})).catch((function(e){"auth/invalid-email"===e.code?f.a.fire({text:"Email inv\xe1lido",icon:"warning"}):"auth/weak-password"===e.code?f.a.fire({text:"Senha deve conter no m\xednino 6 caracteres",icon:"warning"}):"auth/email-already-in-use"===e.code&&f.a.fire({text:"Usu\xe1rio j\xe1 cadastrado",icon:"warning"})})):f.a.fire({text:"Preencha os campos em branco",icon:"warning"})},name:"Registrar"}),r.a.createElement("div",{className:"select-type"},r.a.createElement(u,{src:E.a,alt:"img-chef",class:"chef-kitchen"}),r.a.createElement("label",{htmlFor:"cozinha",className:"label-kitchen"},"COZINHA"),r.a.createElement(s,{type:"radio",class:"btn-radio-kitchen",name:"job",value:"kitchen",onChange:function(e){return j(e.target.value)},id:"kitchen"})),r.a.createElement("div",{className:"select-type-two"},r.a.createElement(u,{src:w.a,alt:"img-hall",class:"img-hall"}),r.a.createElement("label",{htmlFor:"salao",className:"label-hall"},"SAL\xc3O"),r.a.createElement(s,{type:"radio",class:"btn-radio-hall",name:"job",value:"hall",onChange:function(e){return j(e.target.value)},id:"hall"})))}),y=(t(45),function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(i.a)(l,2),g=m[0],b=m[1],E=Object(n.useState)(""),v=Object(i.a)(E,2),w=v[0],j=v[1],C=Object(p.f)();return r.a.createElement("div",{className:"div"},r.a.createElement("figure",null,r.a.createElement(u,{src:d.a,alt:"logo",class:"logo-login"})),r.a.createElement("div",{className:"select-form"},r.a.createElement("form",{className:"form-login"},r.a.createElement(s,{type:"email",id:"email",class:"input-login",value:g,onChange:function(e){return b(e.target.value)},placeholder:"Digite seu email"}),r.a.createElement(s,{type:"password",id:"password",class:"input-login",value:w,onChange:function(e){return j(e.target.value)},placeholder:"Digite sua senha"}),r.a.createElement(o,{id:"login",class:"button-loggin",name:"Entrar",onClick:function(e){e.preventDefault(),g?w?k.auth().signInWithEmailAndPassword(g,w).then((function(e){k.firestore().collection("users").doc(e.user.uid).get().then((function(e){"hall"===e.data().job?C.push("/newRequest"):C.push("/ordersReceived")}))})).catch((function(e){"auth/user-not-found"===e.code?f.a.fire({text:"Usu\xe1rio n\xe3o encontrado",icon:"warning"}):"auth/wrong-password"===e.code?f.a.fire({text:"Senha inv\xe1lida",icon:"warning"}):f.a.fire({text:e,icon:"warning"})})):f.a.fire({text:'Prencha o campo de "senha"',icon:"warning"}):f.a.fire({text:'Prencha o campo de "email"',icon:"warning"})}}),r.a.createElement("p",{onClick:function(){return c(!0)}},"Ainda n\xe3o tem cadastro? Registre-se aqui!"),t?r.a.createElement(h,{onClose:function(){return c(!1)}},r.a.createElement(O,null)):null)))}),N=t(7),S=function(){return r.a.createElement("div",{link:"/ordersReceived"},r.a.createElement(N.b,{to:"/ordersReceived"},"Pedidos Recebidos"),r.a.createElement("div",null,"P\xe1gina da Cozinha"),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/"},r.a.createElement(o,{name:"SAIR",handleClick:function(){return k.auth().signOut()}}))))},x=function(){return r.a.createElement("div",{link:"/newRequest"},r.a.createElement(N.b,null,"Novo Pedido"),r.a.createElement("div",null,"P\xe1gina do Sal\xe3o"),r.a.createElement("div",null,r.a.createElement(N.b,{to:"/"},r.a.createElement(o,{name:"SAIR",handleClick:function(){return k.auth().signOut()}}))))};function R(){return r.a.createElement(N.a,null,r.a.createElement(p.c,null,r.a.createElement(p.a,{path:"/login",component:y}),r.a.createElement(p.a,{path:"/ordersReceived",component:S}),r.a.createElement(p.a,{path:"/newRequest",component:x}),r.a.createElement(p.a,{exact:!0,path:"/",component:y})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.93b5e5df.chunk.js.map
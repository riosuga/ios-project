(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{29:function(e,a,t){e.exports=t(41)},34:function(e,a,t){},35:function(e,a,t){},41:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(25),u=t.n(l),c=t(26),s=t(1),i=(t(34),t(35),t(8)),o=t.n(i),m=t(11),g=t(28),h=t(12),d=t(9);function p(e){return b.apply(this,arguments)}function b(){return(b=Object(m.a)(o.a.mark(function e(a){var t,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.username,n=a.password,e.abrupt("return",new Promise(function(e,a){setTimeout(function(){"riosuga"===t&&"sayario02"===n?e():a()},1e3)}));case 2:case"end":return e.stop()}},e)}))).apply(this,arguments)}var f={username:"",password:"",isLoading:!1,isLoggedIn:!1,error:""};function E(e,a){switch(a.type){case"field":return Object(d.a)({},e,Object(h.a)({},a.fieldName,a.payload));case"login":return Object(d.a)({},e,{error:"",isLoading:!0,isFocused:!0});case"success":return Object(d.a)({},e,{isLoggedIn:!0,isLoading:!1});case"error":return Object(d.a)({},e,{error:"Incorrect username or password entered",isLoggedIn:!1,isLoading:!1,username:"",password:"",isFocused:!0});case"logout":return Object(d.a)({},e,{isLoggedIn:!1,username:"",password:"",error:""});default:return e}}function v(){var e=Object(n.useReducer)(E,f),a=Object(g.a)(e,2),t=a[0],l=a[1],u=t.username,c=t.password,s=t.isLoading,i=t.isLoggedIn,h=t.error,d=t.isFocused,b=Object(n.useRef)(null),v=function(){var e=Object(m.a)(o.a.mark(function e(a){return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),l({type:p}),e.prev=2,e.next=5,p({username:u,password:c});case 5:l({type:"success"}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),l({type:"error"});case 11:case"end":return e.stop()}},e,null,[[2,8]])}));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)(function(){d&&b.current.focus()},[d]),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login-container"},i?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Welcome ",u,"!"),r.a.createElement("h2",null,r.a.createElement("a",{href:"/segitiga"},"Menu Segitiga")),r.a.createElement("h2",null,r.a.createElement("a",{href:"/persegi"},"Menu Persegi")),r.a.createElement("button",{onClick:function(){return l({type:"logout"})}},"Log Out")):r.a.createElement("form",{className:"form",onSubmit:v},h&&r.a.createElement("p",{className:"error"},h," "),r.a.createElement("p",null,"Please Login!"),r.a.createElement("input",{type:"text",ref:b,placeholder:"Enter username",value:u,autoFocus:!0,onChange:function(e){return l({type:"field",fieldName:"username",payload:e.currentTarget.value})}}),r.a.createElement("input",{type:"password",placeholder:"Enter password",value:c,onChange:function(e){return l({type:"field",fieldName:"password",payload:e.currentTarget.value})}}),r.a.createElement("button",{className:"submit",type:"submit",disabled:s},s?"Logging In.....":"Log In"))))}var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(v,null))},y=t(13),O=t(14),j=t(16),C=t(15),w=t(6),I=t(17),N=function(e){function a(e){var t;return Object(y.a)(this,a),(t=Object(j.a)(this,Object(C.a)(a).call(this,e))).state={angka1:0,angka2:0,hasil:0},t.handleChange=t.handleChange.bind(Object(w.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(I.a)(a,e),Object(O.a)(a,[{key:"handleChange",value:function(e){this.setState({angka1:e.target.angka1,angka2:e.target.angka2,hasil:e.target.hasil})}},{key:"handleSubmit",value:function(e){var a=document.getElementById("angka1").value,t=document.getElementById("angka2").value,n=2*(parseInt(a)+parseInt(t));document.getElementById("hasil").value=n,e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("p",null,"Form Persegi Panjang"),r.a.createElement("label",null,"Angka 1",r.a.createElement("input",{type:"number",placeholder:"angka 1",autoFocus:!0,id:"angka1",value:this.state.angka1,onChange:this.handleChange})),r.a.createElement("label",null,"Angka 2",r.a.createElement("input",{type:"number",placeholder:"angka2",id:"angka2",value:this.state.angka2,onChange:this.handleChange})),r.a.createElement("label",null,"Hasil",r.a.createElement("input",{type:"number",placeholder:"hasil",id:"hasil",readOnly:!0,value:this.state.hasil,onChange:this.handleChange})),r.a.createElement("button",{className:"hitung",type:"submit"},"Hitung")),r.a.createElement("h2",null,r.a.createElement("a",{href:"/"},"Kembali"))))}}]),a}(r.a.Component),S=function(e){function a(e){var t;return Object(y.a)(this,a),(t=Object(j.a)(this,Object(C.a)(a).call(this,e))).state={angka1:0,angka2:0,hasil:0},t.handleChange=t.handleChange.bind(Object(w.a)(t)),t.handleSubmit=t.handleSubmit.bind(Object(w.a)(t)),t}return Object(I.a)(a,e),Object(O.a)(a,[{key:"handleChange",value:function(e){this.setState({angka1:e.target.angka1,angka2:e.target.angka2,hasil:e.target.hasil})}},{key:"handleSubmit",value:function(e){var a=document.getElementById("angka1").value,t=document.getElementById("angka2").value,n=parseInt(a)*parseInt(t)*.5;document.getElementById("hasil").value=n,e.preventDefault()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"login-container"},r.a.createElement("form",{className:"form",onSubmit:this.handleSubmit},r.a.createElement("p",null,"Form Segitiga"),r.a.createElement("label",null,"Angka 1",r.a.createElement("input",{type:"number",placeholder:"angka 1",autoFocus:!0,id:"angka1",value:this.state.angka1,onChange:this.handleChange})),r.a.createElement("label",null,"Angka 2",r.a.createElement("input",{type:"number",placeholder:"angka2",id:"angka2",value:this.state.angka2,onChange:this.handleChange})),r.a.createElement("label",null,"Hasil",r.a.createElement("input",{type:"number",placeholder:"hasil",id:"hasil",readOnly:!0,value:this.state.hasil,onChange:this.handleChange})),r.a.createElement("button",{className:"hitung",type:"submit"},"Hitung")),r.a.createElement("h2",null,r.a.createElement("a",{href:"/"},"Kembali"))))}}]),a}(r.a.Component),L=document.getElementById("root");u.a.render(r.a.createElement(c.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:k}),r.a.createElement(s.a,{path:"/persegi",component:N}),r.a.createElement(s.a,{path:"/segitiga",component:S}))),L)}},[[29,1,2]]]);
//# sourceMappingURL=main.a820cf7d.chunk.js.map
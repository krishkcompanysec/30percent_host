(this.webpackJsonpmesh_30p=this.webpackJsonpmesh_30p||[]).push([[0],{35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n(1),c=n.n(s),i=n(28),o=n.n(i);n(35),n.p,n(36),n(37),n(38);var r=function(){return Object(a.jsx)("div",{className:"container-fluid text-white",id:"ft",children:"FOOTER"})},l=(n(39),n(13));n(40);var j=function(){return Object(a.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(a.jsx)("a",{className:"navbar-brand",href:"#",children:"Mesh"}),Object(a.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(a.jsx)("span",{className:"navbar-toggler-icon"})}),Object(a.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(a.jsxs)("ul",{className:"navbar-nav",children:[Object(a.jsx)("li",{className:"nav-item active",children:Object(a.jsx)(l.b,{to:"/",className:"nav-link",children:"Home"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/login",className:"nav-link",children:"Login/Signup"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)(l.b,{to:"/tasks",className:"nav-link",children:"Tasks"})}),Object(a.jsx)("li",{className:"nav-item",children:Object(a.jsx)("a",{className:"nav-link disabled",href:"#",children:"Disabled"})})]})})]})};var b=function(){return Object(a.jsxs)("div",{className:"Home",children:[Object(a.jsx)(j,{}),Object(a.jsxs)("div",{className:"body",children:[Object(a.jsx)("h4",{id:"home_h",children:"MESH"}),Object(a.jsx)("p",{id:"quote",children:"Arrange! Assign! Analyze!"}),Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("img",{src:"https://res.cloudinary.com/krishtrial/image/upload/v1610374792/todo_concept_iphonex_60fps_q8hes8.webp",alt:"Responsive image",className:"img-fluid center-block d-block mx-auto",id:"imgh",width:"800px"})}),Object(a.jsx)("div",{id:"space"})]}),Object(a.jsx)(r,{})]})};var d=n(9),u=n(8),p=n(11),m=n(10),O=n.n(m);n(64);var h=function(){var e=Object(s.useState)({email:"",password:""}),t=Object(p.a)(e,2),n=t[0],c=t[1],i=function(e){var t=e.target,n=t.id,a=t.value;c((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},n,a))}))};return Object(a.jsx)("div",{className:"Login",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Login"}),Object(a.jsx)("div",{className:"form-group",id:"form_login",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(console.log(n),n.email.length&&n.password.length){console.log("sending");var e={email:n.email,password:n.password};O.a.post("https://reqres.in/api/login",e).then((function(e){switch(console.log(e),e.status){case 200:console.log(e.data),alert("logged in");break;default:alert("User Doesnt Exist")}}))}else console.log(n.email.length),console.log("Error!"),alert("Enter Valid password!")}(),console.log("logging")},children:[Object(a.jsx)("input",{type:"email",className:"form-control",id:"email",placeholder:"Enter email",autoComplete:"on",defaultValue:"",onChange:i})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password",placeholder:"Enter Password",autoComplete:"on",defaultValue:"",onChange:i})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(a.jsx)("input",{type:"button",onClick:function(){console.log("hi")}})]})})};var x=function(e){var t=Object(s.useState)({nickname_signup:"",email_signup:"",password_signup:""}),n=Object(p.a)(t,2),c=n[0],i=n[1],o=function(e){var t=e.target,n=t.id,a=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},n,a))}))};return Object(a.jsx)("div",{className:"Signup",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"SIgnup"}),Object(a.jsx)("div",{className:"form-group",id:"form_signup",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(c.email_signup.length&&c.password_signup.length){console.log("sending"),alert("Signed up");var e={nickname:c.nickname_signup,email:c.email_signup,password:c.password_signup};O.a.post("https://5ff9d9b217386d0017b5226b.mockapi.io/register",e)}else console.log("Error!"),alert("Error!")}()},children:[Object(a.jsx)("input",{type:"text",className:"form-control",id:"nickname_signup",placeholder:"Enter Name",autoComplete:"on",defaultValue:"",onChange:o})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"email",className:"form-control",id:"email_signup",placeholder:"Enter email",autoComplete:"on",defaultValue:"",onChange:o})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"password",className:"form-control",id:"password_signup",placeholder:"Enter Password",autoComplete:"on",defaultValue:"",onChange:o})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(a.jsx)("input",{type:"button",onClick:function(){console.log({state:c})}})]})})};var g=function(e){var t=Object(s.useState)({task:"",description:""}),n=Object(p.a)(t,2),c=n[0],i=n[1],o=function(e){var t=e.target,n=t.id,a=t.value;i((function(e){return Object(u.a)(Object(u.a)({},e),{},Object(d.a)({},n,a))}))};return Object(a.jsx)("div",{className:"Addtask",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"Addtask"}),Object(a.jsx)("div",{className:"form-group",id:"Addtask",children:Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),function(){if(c.task.length&&c.description.length){console.log("sending"),alert("Task Added!");var e={task:c.task,description:c.description};O.a.post("https://5ff9d9b217386d0017b5226b.mockapi.io/task",e)}else console.log("Scene aanu")}()},children:[Object(a.jsx)("input",{type:"text",className:"form-control",id:"task",placeholder:"Task",autoComplete:"on",defaultValue:"",onChange:o})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"text",className:"form-control",id:"description",placeholder:"Description",autoComplete:"on",defaultValue:"",onChange:o})," ",Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"submit",value:"Submit"})]})}),Object(a.jsx)("input",{type:"button",onClick:function(){console.log("task")}})]})})};var f=function(){var e=Object(s.useState)(""),t=Object(p.a)(e,2),n=(t[0],t[1]);return Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)("h2",{children:"List Tasks"}),Object(a.jsx)("button",{onClick:function(){console.log("Hello"),alert("Listed in console"),O()({method:"get",url:"https://5ff9d9b217386d0017b5226b.mockapi.io/task"}).then((function(e){n(e),console.log(e.data)})).catch((function(e){return console.error(e)}))},children:"List tasks in console"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{})]})},v=n(2);o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsxs)(l.a,{basename:"/30percent_host",children:[Object(a.jsx)(v.a,{exact:!0,path:"/",render:function(){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)(b,{})})}}),Object(a.jsx)(v.a,{path:"/contact",render:function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(r,{})]})}}),Object(a.jsx)(v.a,{path:"/login",render:function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(h,{}),Object(a.jsx)(x,{})]})}}),Object(a.jsx)(v.a,{path:"/tasks",render:function(){return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)(j,{}),Object(a.jsx)(g,{}),Object(a.jsx)(f,{})]})}})]})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.c0648386.chunk.js.map
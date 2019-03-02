(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(62)},36:function(e,t,a){},62:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(26),o=a.n(c),l=(a(36),a(3)),s=a(4),i=a(6),m=a(5),u=a(7),p=a(64),h=a(66),d=a(65),f=a(8),b=a.n(f),v=a(12),E=a(29),y=a(17),C=a(13),j=a.n(C),N=r.a.createContext(),g=function(e,t){switch(t.type){case"DELETE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.filter(function(e){return e.id!==t.payload})});case"ADD_CONTACT":return Object(y.a)({},e,{contacts:[t.payload].concat(Object(E.a)(e.contacts))});case"UPDATE_CONTACT":return Object(y.a)({},e,{contacts:e.contacts.map(function(e){return e.id===t.payload.id?e=t.payload:e})});default:return e}},O=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[],dispatch:function(e){a.setState(function(t){return g(t,e)})}},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.get("https://jsonplaceholder.typicode.com/users");case 2:t=e.sent,this.setState({contacts:t.data});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return r.a.createElement(N.Provider,{value:this.state},this.props.children)}}]),t}(n.Component),k=N.Consumer,w=O,x=(a(58),a(63)),S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={showContactInfo:!1},a.onShowClick=function(){a.setState(function(e){return{showContactInfo:!e.showContactInfo}})},a.onItemDelete=function(){var e=Object(v.a)(b.a.mark(function e(t,a){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.a.delete("https://jsonplaceholder.typicode.com/users/".concat(t));case 2:a({type:"DELETE_CONTACT",payload:t});case 3:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a.onDropDownClick=function(e,t){console.log(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data,a=t.id,n=t.name,c=t.email,o=t.phone,l=this.state.showContactInfo;return r.a.createElement(k,null,function(t){var s=t.dispatch;return r.a.createElement("div",{className:"card card-body mb-3"},r.a.createElement("h4",{style:{display:"flex",justifyContent:"space-between"}},n,r.a.createElement("i",{onClick:e.onShowClick,className:"fas fa-chevron-down",style:{cursor:"pointer",marginLeft:5,color:"#0078F9",marginRight:"auto"}}),r.a.createElement(x.a,{to:"/contact/edit/".concat(a)},r.a.createElement("i",{className:"far fa-edit text-success",style:{marginRight:"0.6rem"}})),r.a.createElement("i",{onClick:e.onItemDelete.bind(e,a,s),className:"fas fa-times",style:{cursor:"pointer",color:"darkred"}})),l?r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Email: ",c),r.a.createElement("li",{className:"list-group-item"},"Phone: ",o)):null)})}}]),t}(r.a.Component),A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(k,null,function(e){var t=e.contacts;return r.a.createElement(n.Fragment,null,r.a.createElement("h1",{className:"display-4 mb-2"},r.a.createElement("span",{className:"text-primary"},"Contact")," List"),t.map(function(e){return r.a.createElement(S,{key:e.id,data:e})}))})}}]),t}(n.Component),D=function(e){var t=e.appName;return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0"},r.a.createElement("div",{className:"container"},r.a.createElement(x.a,{to:"/react-playground-form",className:"navbar-brand"},t),r.a.createElement("div",null,r.a.createElement("ul",{className:"navbar-nav mr-auto"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/",className:"nav-link"},r.a.createElement("i",{className:"fas fa-home"}),"  Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/contact/add",className:"nav-link"},r.a.createElement("i",{className:"fas fa-plus"})," Add")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(x.a,{to:"/about",className:"nav-link"},r.a.createElement("i",{className:"fas fa-question"}),"  About"))))))};D.defaultProps={appName:"Contact handler"};var T=D,I=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-5"},"About Contact Handler"),r.a.createElement("p",{className:"lead"},"Simple app for managing your contacts list"),r.a.createElement("p",{className:"text-secondary"},"Software version 7.0"))},F=a(14),P=a(27),_=a.n(P),L=function(e){var t=e.label,a=e.name,n=e.value,c=e.placeholder,o=e.type,l=e.onChange,s=e.error;return r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:a},t),r.a.createElement("input",{className:_()("form-control",{"is-invalid":s}),onChange:l,type:o,name:a,value:n,placeholder:c}),s&&r.a.createElement("div",{className:"invalid-feedback"},s))},M=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onInputChange=function(e){a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onFormSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"please, provide a name"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"please, provide an e-mail"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"please, provide a phone no."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},e.next=14,j.a.post("https://jsonplaceholder.typicode.com/users",s);case 14:i=e.sent,t({type:"ADD_CONTACT",payload:i.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 18:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Add Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(L,{name:"name",label:"Name",onChange:e.onInputChange,type:"text",value:a,placeholder:"Enter name",error:o.name}),r.a.createElement(L,{name:"email",label:"E-mail",onChange:e.onInputChange,type:"email",value:n,placeholder:"Enter email",error:o.email}),r.a.createElement(L,{name:"phone",label:"Phone",onChange:e.onInputChange,type:"text",value:c,placeholder:"Enter phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Add Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),U=function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"display-4"},r.a.createElement("span",{className:"text-danger"},"404")," Page Not Found"),r.a.createElement("p",{className:"lead"},"The page you're trying to reach to does not exist"))},B=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",username:""},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/todos/1").then(function(e){return e.json()}).then(function(t){return e.setState({name:t.userId,username:t.title})})}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.username;return r.a.createElement("div",null,r.a.createElement("p",null,t," ",a))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",email:"",phone:"",errors:{}},a.onInputChange=function(e){a.setState(Object(F.a)({},e.target.name,e.target.value))},a.onFormSubmit=function(){var e=Object(v.a)(b.a.mark(function e(t,n){var r,c,o,l,s,i,m;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),r=a.state,c=r.name,o=r.email,l=r.phone,""!==c){e.next=5;break}return a.setState({errors:{name:"please, provide a name"}}),e.abrupt("return");case 5:if(""!==o){e.next=8;break}return a.setState({errors:{email:"please, provide an e-mail"}}),e.abrupt("return");case 8:if(""!==l){e.next=11;break}return a.setState({errors:{phone:"please, provide a phone no."}}),e.abrupt("return");case 11:return s={name:c,email:o,phone:l},i=a.props.match.params.id,e.next=15,j.a.put("https://jsonplaceholder.typicode.com/users/".concat(i),s);case 15:m=e.sent,t({type:"UPDATE_CONTACT",payload:m.data}),a.setState({name:"",email:"",phone:"",errors:{}}),a.props.history.push("/");case 19:case"end":return e.stop()}},e,this)}));return function(t,a){return e.apply(this,arguments)}}(),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=Object(v.a)(b.a.mark(function e(){var t,a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,j.a.get("https://jsonplaceholder.typicode.com/users/".concat(t));case 3:a=e.sent,n=a.data,this.setState({name:n.name,email:n.email,phone:n.phone});case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.name,n=t.email,c=t.phone,o=t.errors;return r.a.createElement(k,null,function(t){var l=t.dispatch;return r.a.createElement("div",{className:"card mb-3"},r.a.createElement("div",{className:"card-header"},"Edit Contact"),r.a.createElement("div",{className:"card-body"},r.a.createElement("form",{onSubmit:e.onFormSubmit.bind(e,l)},r.a.createElement(L,{name:"name",label:"Name",onChange:e.onInputChange,type:"text",value:a,placeholder:"Enter name",error:o.name}),r.a.createElement(L,{name:"email",label:"E-mail",onChange:e.onInputChange,type:"email",value:n,placeholder:"Enter email",error:o.email}),r.a.createElement(L,{name:"phone",label:"Phone",onChange:e.onInputChange,type:"text",value:c,placeholder:"Enter phone",error:o.phone}),r.a.createElement("input",{type:"submit",value:"Update Contact",className:"btn btn-light btn-block"}))))})}}]),t}(n.Component),J=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(w,null,r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(T,{appName:"Contact handler"}),r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(d.a,{exact:!0,path:"/",component:A}),r.a.createElement(d.a,{exact:!0,path:"/contact/add",component:M}),r.a.createElement(d.a,{exact:!0,path:"/contact/edit/:id",component:H}),r.a.createElement(d.a,{exact:!0,path:"/about",component:I}),r.a.createElement(d.a,{exact:!0,path:"/test",component:B}),r.a.createElement(d.a,{component:U})))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.f2a9f86b.chunk.js.map
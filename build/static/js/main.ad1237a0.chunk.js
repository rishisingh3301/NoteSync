(this.webpackJsonpNoteSync=this.webpackJsonpNoteSync||[]).push([[0],{11:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),c=n(2);var r=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"NoteSync"))};var o=function(){const e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Copyright \u24d2 ",e))};var u=function(e){return l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),l.a.createElement("button",{onClick:function(){e.ondelete(e.id)}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"},l.a.createElement("path",{d:"M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"}))))};var i=function(e){const[t,n]=Object(a.useState)({title:"",content:""});function c(e){const{name:t,value:a}=e.target;n(e=>({...e,[t]:a}))}return l.a.createElement("div",null,l.a.createElement("form",{className:"create-note"},l.a.createElement("input",{onChange:c,value:t.title,name:"title",placeholder:"Title"}),l.a.createElement("textarea",{onChange:c,value:t.content,name:"content",placeholder:"Take a note...",rows:"3"}),l.a.createElement("button",{onClick:function(a){e.onadd(t),a.preventDefault(),n({title:"",content:""})}},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"24px",height:"24px","fill-rule":"evenodd"},l.a.createElement("path",{"fill-rule":"evenodd",d:"M 11 2 L 11 11 L 2 11 L 2 13 L 11 13 L 11 22 L 13 22 L 13 13 L 22 13 L 22 11 L 13 11 L 13 2 Z"})))))};var m=function(){const[e,t]=Object(a.useState)([]);function n(e){var n=e;t(e=>e.filter((e,t)=>t!==n))}return l.a.createElement("div",null,l.a.createElement(r,null),l.a.createElement(i,{onadd:function(e){t(t=>[...t,e])}}),e.map((e,t)=>l.a.createElement(u,{key:t,id:t,title:e.title,content:e.content,ondelete:n})),l.a.createElement(o,null))};n.n(c).a.render(l.a.createElement(m,null),document.getElementById("root"))},3:function(e,t,n){e.exports=n(11)}},[[3,1,2]]]);
//# sourceMappingURL=main.ad1237a0.chunk.js.map
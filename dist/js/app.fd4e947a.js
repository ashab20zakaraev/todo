(function(t){function e(e){for(var r,a,o=e[0],s=e[1],u=e[2],l=0,d=[];l<o.length;l++)a=o[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&d.push(c[a][0]),c[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==c[o]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},c={app:0},i=[];function o(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-86e921fc":"c5e0c007","chunk-c687a464":"653b4ba9"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-86e921fc":1,"chunk-c687a464":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-86e921fc":"da7c2f06","chunk-c687a464":"94d03a5d"}[t]+".css",c=s.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===c))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){u=d[o],l=u.getAttribute("data-href");if(l===r||l===c)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||c,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[t]=0})));var r=c[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=c[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=o(t);var d=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=c[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}c[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var d=0;d<u.length;d++)e(u[d]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"20aa":function(t,e,n){"use strict";n("c098")},"384c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={id:"app"},c={class:"container"};function i(t,e,n,i,o,s){var u=Object(r["x"])("navbar"),l=Object(r["x"])("router-view");return Object(r["q"])(),Object(r["e"])("div",a,[Object(r["h"])(u),Object(r["f"])("div",c,[Object(r["h"])(l)])])}var o={class:"light-blue darken-3"},s={class:"nav-wrapper"},u=Object(r["g"])("Todos"),l={id:"nav-mobile",class:"right hide-on-med-and-down"},d=Object(r["g"])("Создать задачу"),f=Object(r["g"])("Список задач");function p(t,e,n,a,c,i){var p=Object(r["x"])("router-link");return Object(r["q"])(),Object(r["e"])("nav",o,[Object(r["f"])("div",s,[Object(r["h"])(p,{to:"/",class:"brand-logo"},{default:Object(r["E"])((function(){return[u]})),_:1}),Object(r["f"])("ul",l,[Object(r["f"])("li",null,[Object(r["h"])(p,{to:"/"},{default:Object(r["E"])((function(){return[d]})),_:1})]),Object(r["f"])("li",null,[Object(r["h"])(p,{to:"/list"},{default:Object(r["E"])((function(){return[f]})),_:1})])])])])}var b={},h=(n("cbda"),n("6b0d")),m=n.n(h);const O=m()(b,[["render",p],["__scopeId","data-v-14fc8034"]]);var v=O,j={components:{Navbar:v}};n("20aa");const k=m()(j,[["render",i]]);var g=k,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w=(n("a4d3"),n("e01a"),{class:"row"}),T={class:"col s6 offset-s3"},S=Object(r["f"])("h1",null,"Создать задачу",-1),x={class:"input-field"},_=Object(r["f"])("label",{for:"title"},"Заголовок",-1),D={class:"input-field"},C=Object(r["f"])("label",{for:"description"},"Описание",-1),E={class:"character-counter",style:{float:"right","font-size":"12px"}},N=Object(r["f"])("button",{type:"submit",class:"btn"},"Добавить",-1);function I(t,e,n,a,c,i){return Object(r["q"])(),Object(r["e"])("div",w,[Object(r["f"])("div",T,[S,Object(r["f"])("form",{onSubmit:e[3]||(e[3]=Object(r["G"])((function(){return i.submitHandler&&i.submitHandler.apply(i,arguments)}),["prevent"]))},[Object(r["f"])("div",x,[Object(r["F"])(Object(r["f"])("input",{id:"title",type:"text",class:"validate",autocomplete:"off","onUpdate:modelValue":e[0]||(e[0]=function(e){return t.title=e})},null,512),[[r["C"],t.title]]),_]),Object(r["f"])("div",D,[Object(r["F"])(Object(r["f"])("textarea",{id:"description",class:"materialize-textarea","onUpdate:modelValue":e[1]||(e[1]=function(e){return t.description=e})},null,512),[[r["C"],t.description]]),C,Object(r["f"])("span",E,Object(r["z"])(t.description.length)+"/2048",1)]),Object(r["F"])(Object(r["f"])("input",{type:"text",ref:"datepicker",class:"datepicker",placeholder:"Добавить дату","onUpdate:modelValue":e[2]||(e[2]=function(e){return t.date=e})},null,512),[[r["C"],t.date]]),N],32)])])}n("498a");var P={name:"Create",data:function(){return{title:"",description:"",date:null}},methods:{submitHandler:function(){if(""===this.title)alert("Поле Заголовок не может быть пустым");else if(""===this.description)alert("Поле Описание не может быть пустым");else{var t={id:Date.now(),title:this.title.trim(),description:this.description.trim(),date:this.date.date,status:"активна"};this.$store.dispatch("createTask",t),this.title=this.description=""}}},mounted:function(){this.date=M.Datepicker.init(this.$refs.datepicker,{format:"dd.mm.yyyy",defaultDate:new Date,setDefaultDate:!0})},destroyed:function(){this.date&&this.date.destroy&&this.date.destroy()}};const J=m()(P,[["render",I]]);var A=J,L=[{path:"/",name:"Create",component:A},{path:"/list",name:"List",component:function(){return n.e("chunk-c687a464").then(n.bind(null,"1a33"))}},{path:"/task/:id",name:"Task",component:function(){return n.e("chunk-86e921fc").then(n.bind(null,"1d21"))}}],q=Object(y["a"])({history:Object(y["b"])("/"),routes:L}),B=q,F=n("5530"),H=(n("d81d"),n("e9c4"),n("99af"),n("c740"),n("4de4"),n("7db0"),n("5502")),U=Object(H["a"])({state:{tasks:JSON.parse(localStorage.getItem("tasks")||"[]").map((function(t){return new Date(t.date)<new Date&&(t.status="просрочена"),t}))},mutations:{createTask:function(t,e){t.tasks.push(e),localStorage.setItem("tasks",JSON.stringify(t.tasks))},updateTask:function(t,e){var n=e.id,r=e.description,a=e.date,c=t.tasks.concat(),i=c.findIndex((function(t){return t.id===n})),o=c[i],s=new Date(a)>new Date?"активна":"просрочена";c[i]=Object(F["a"])(Object(F["a"])({},o),{},{date:a,description:r,status:s}),t.tasks=c,localStorage.setItem("tasks",JSON.stringify(t.tasks))},compliteTask:function(t,e){var n=t.tasks.findIndex((function(t){return t.id===e}));t.tasks[n].status="завершена",localStorage.setItem("tasks",JSON.stringify(t.tasks))},deleteTask:function(t,e){t.tasks=t.tasks.filter((function(t){return t.id!==e})),localStorage.setItem("tasks",JSON.stringify(t.tasks))}},actions:{createTask:function(t,e){var n=t.commit;n("createTask",e)},updateTask:function(t,e){var n=t.commit;n("updateTask",e)},compliteTask:function(t,e){var n=t.commit;n("compliteTask",e)},deleteTask:function(t,e){var n=t.commit;n("deleteTask",e)}},getters:{tasks:function(t){return t.tasks},taskByID:function(t){return function(e){return t.tasks.find((function(t){return t.id===e}))}}}});n("6885");Object(r["c"])(g).use(U).use(B).mount("#app")},c098:function(t,e,n){},cbda:function(t,e,n){"use strict";n("384c")}});
//# sourceMappingURL=app.fd4e947a.js.map
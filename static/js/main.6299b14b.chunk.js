(this.webpackJsonpmoochub=this.webpackJsonpmoochub||[]).push([[0],{104:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),l=a(24),i=a(16),m=a(28),s=a(29),d=a(30),u=a(20),p=a(33),f=a(82),h=a(169),E=(a(98),a(68)),v=a(151),b=a(155),g=a(105),y=a(154),w=a(42);function j(e){var t=e.folder,a=e.mdWidth;return r.a.createElement(v.a,{item:!0,xs:12,md:a,key:t.id},t.hasNestedFolder?r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(w.a,{variant:"h6",align:"center",gutterBottom:!0},t.name),r.a.createElement(v.a,{item:!0,container:!0,spacing:4},void 0!==t.nestedFolder.files&&t.nestedFolder.files.map((function(e){return r.a.createElement(v.a,{key:e.id,item:!0,xs:!0,container:!0},r.a.createElement(g.a,{size:"small",component:u.b,to:"/subject/".concat(e.name,"/").concat(e.id),fullWidth:!0,variant:"contained",color:"primary"},e.name))}))))):r.a.createElement(y.a,null,r.a.createElement(b.a,null,r.a.createElement(g.a,{size:"medium",component:u.b,to:"/subject/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",color:"primary"},t.name))))}function O(e){return"".concat('"'+e+'" in parents')}var S=function(e,t){return new Promise((function(a,n){var r;"folder"===t?r=O(e)+" and mimeType = 'application/vnd.google-apps.folder'":"pdf"===t?r=O(e)+" and mimeType = 'application/pdf'":"_"===t&&(r=O(e)+" and name contains '_' "),window.gapi.client.drive.files.list({q:r,orderBy:"createdTime",spaces:"drive",fields:"files(name ,id)"}).then((function(e){a(e.result)})).catch((function(e){console.error(e)}))}))},C=function(){var e=document.createElement("script");return e.src="https://apis.google.com/js/client.js",new Promise((function(t,a){e.addEventListener("load",(function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0"),window.gapi.client.load("drive","v3",(function(){t()}))}))})),document.body.appendChild(e)}))},x=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",id:"",content:[]},a.nestedItems=[],a.loadSubjects=function(e){console.log("subjects",e);var t=[];e.map((function(e,n){"_"===e.name[0]?(e.name=e.name.substr(1),e.hasNestedFolder=!0,e.nestedFolder=[],t.push(e),a.nestedItems.push(Object(E.a)({},e,{index:n}))):t.push(e)})),a.setState({content:t}),a.latelood(a.nestedItems)},a.latelood=function(e){e.map((function(e){a.subFolderLoader(e)}))},a.subFolderLoader=function(e){S(e.id,"folder").then((function(t){var n=[a.state.content][0];n[e.index].nestedFolder=t,a.setState({content:n})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.subjectName,a=this.props.match.params.subjectId;this.setState({name:t,id:a}),C().then((function(){return S(a,"folder").then((function(t){e.loadSubjects(t.files)}))})),console.log(this.props)}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(v.a,{container:!0,justify:"center",spacing:3},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"h4",align:"center"},this.state.name)),r.a.createElement(v.a,{container:!0,item:!0,xs:11,md:10,spacing:4},e.map((function(t,a){return r.a.createElement(j,{folder:t,key:t.id||a,mdWidth:e.length%2===1&&a===e.length-1?12:6})}))))}}]),t}(n.Component),k=a(7),T=a(25),I=a(171),N=a(107),F=a(157),P=a(156),z=a(71),B=a.n(z),A=a(72),W=a.n(A),q=a(108),D=a(159),H=a(158),L=a(74),_=a.n(L),M=a(75),R=a.n(M),J=a(73),K=a.n(J);function U(e){var t=e.open,a=e.closefn,n=e.todo,o=e.removeFromTodo,c=Object(T.a)(),l=t;return r.a.createElement("div",null,r.a.createElement(I.a,{variant:"persistent",anchor:"left",open:l},r.a.createElement("div",null,r.a.createElement(P.a,{onClick:a},"ltr"===c.direction?r.a.createElement(B.a,null):r.a.createElement(W.a,null))),r.a.createElement(F.a,null),r.a.createElement(N.a,null,r.a.createElement(w.a,{variant:"h6",align:"center",color:"primary"},"study List ",r.a.createElement(K.a,null)),n.map((function(e,t){return r.a.createElement(q.a,{key:e.id},r.a.createElement(H.a,{href:"#".concat(e.id)},r.a.createElement(_.a,null)),r.a.createElement(D.a,{primary:"".concat(t+1,") ").concat(e.name)}),r.a.createElement(R.a,{color:"primary",onClick:function(){return o(e)}}))}))),r.a.createElement(F.a,null)),r.a.createElement("main",null,r.a.createElement("div",null)))}var V=a(160),Y=a(161),Z=a(162),G=a(164),X=a(163),$=a(165),Q=a(166),ee=a(76),te=a.n(ee),ae=a(83),ne=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={drawerOpen:!1,menuOpen:!1},a.popref=r.a.createRef(),a.handleToggle=function(){a.setState({menuOpen:!a.state.menuOpen})},a.handleClose=function(){a.setState({menuOpen:!1})},a.handleSelect=function(e){a.handleClose(),window.localStorage.setItem("community","/".concat(e.name,"/").concat(e.id)),console.log(a.props)},a.handleDrawerOpen=function(){a.setState({drawerOpen:!0})},a.handleDrawerClose=function(){a.setState({drawerOpen:!1})},a.toggleDrawer=function(){a.setState({drawerOpen:!a.state.drawerOpen})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e,t,a,n=this;return r.a.createElement("div",null,r.a.createElement(V.a,{position:"fixed"},r.a.createElement(Y.a,null,r.a.createElement(P.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return n.toggleDrawer()}},r.a.createElement(te.a,null)),r.a.createElement("div",{className:"nav-container"},r.a.createElement(g.a,(e={color:"inherit",component:u.b,to:"/",variant:"outlined"},Object(k.a)(e,"color","secondary"),Object(k.a)(e,"style",{margin:"0 6px 0 0"}),Object(k.a)(e,"size","small"),e),"      home     "),r.a.createElement(g.a,(t={color:"inherit",component:u.b,to:"/de7",variant:"outlined"},Object(k.a)(t,"color","secondary"),Object(k.a)(t,"style",{margin:"0 3px"}),Object(k.a)(t,"size","small"),t),"  Nerds Room   "),r.a.createElement(g.a,(a={color:"inherit",variant:"outlined"},Object(k.a)(a,"color","secondary"),Object(k.a)(a,"style",{margin:"0  0 0 6px"}),Object(k.a)(a,"aria-haspopup","true"),Object(k.a)(a,"onClick",(function(){return n.handleToggle()})),Object(k.a)(a,"ref",this.popref),Object(k.a)(a,"size","small"),a),"departments")))),r.a.createElement(U,{open:this.state.drawerOpen,closefn:this.handleDrawerClose,todo:this.props.todo,removeFromTodo:this.props.removeFromTodo}),r.a.createElement(Z.a,{className:"updowm",anchorEl:this.popref.current,placement:"bottom-start",open:this.state.menuOpen,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return r.a.createElement(X.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(ae.a,null,r.a.createElement(G.a,{onClickAway:function(){return n.handleClose()}},r.a.createElement($.a,{id:"menu-list-grow"},n.props.communities.map((function(e){return r.a.createElement(Q.a,{component:u.b,to:"/",key:e.id,onClick:function(){return n.handleSelect(e)}},e.name)}))))))})))}}]),t}(n.Component);function re(e){var t=e.community,a=e.mdWidth;return r.a.createElement(v.a,{item:!0,xs:12,md:a,key:t.id},r.a.createElement(g.a,{onClick:function(){window.localStorage.setItem("community","/".concat(t.name,"/").concat(t.id))},size:"medium",component:u.b,to:"/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",color:"secondary"},t.name))}function oe(e){var t=e.communities;return window.localStorage.getItem("community")?r.a.createElement(p.a,{to:window.localStorage.getItem("community")}):r.a.createElement(v.a,{container:!0,justify:"center",spacing:3},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(w.a,{variant:"h4",align:"center",color:"primary"},"Faculty Of Engineering"),r.a.createElement(w.a,{variant:"h6",align:"center"},"Ain Shams University")),r.a.createElement(v.a,{container:!0,item:!0,xs:8,md:10,spacing:5},t.map((function(e,a){return r.a.createElement(re,{community:e,key:e.id||a,mdWidth:t.length%2===1&&a===t.length-1?12:6})}))))}var ce=a(170),le=a(167),ie=a(4);var me=Object(ie.a)({topmargin:{margin:"20px 0 0 0"}})((function(e){var t=e.content,a=e.classes,n=e.handleClick,o=e.selectedIndex;return r.a.createElement(ae.a,{elevation:2},r.a.createElement(ce.a,{className:a.topmargin,value:o,variant:"scrollable",textColor:"inherit",scrollButtons:"on",indicatorColor:"primary"},t.map((function(e,t){return r.a.createElement(le.a,{value:t,key:t,label:"_"===e.name[0]?e.name.substr(1):e.name,onClick:function(){return n(t)}})}))))}));var se=Object(ie.a)({topmargin:{margin:"20px 0 0 0"},center:{margin:"auto"}})((function(e){var t,a=e.parentName,n=e.content,o=e.classes,c=e.handleClick,l=e.selectedIndex;return t="_"===a[0]?a.substr(1,4):a.substr(0,3),console.log(a),r.a.createElement(V.a,{position:"static",centered:"true",color:"primary",className:"addmargin"},r.a.createElement(ce.a,{value:l,textColor:"inherit",variant:"scrollable",scrollButtons:"on"},n.map((function(e,a){return r.a.createElement(le.a,{className:o.center,value:a,key:a,label:"".concat(t," ").concat(a+1),onClick:function(){return c(a)}})}))))})),de=a(168),ue=a(79),pe=a.n(ue),fe=a(59),he=a.n(fe),Ee=a(60),ve=a.n(Ee),be=a(78),ge=a.n(be);var ye=Object(ie.a)({fullwidth:{width:"98vw",height:"99vh"},center:{margin:"auto",textAlign:"center"}})((function(e){var t,a=e.file,n=e.classes,o=e.addToTodo,c=e.removeFromTodo,l=e.display,i=(t=a.id,{displayPdf:"https://drive.google.com/file/d/".concat(t,"/preview"),downloadPdf:"https://drive.google.com/uc?authuser=0&id=".concat(t,"&export=download")});return r.a.createElement("div",{className:n.center},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(H.a,{href:"#".concat(a.id)},r.a.createElement(ge.a,{fontSize:"large",color:"primary"})),!0===a.existInTodo?r.a.createElement(g.a,{size:"small",onClick:function(){return c(a)}},r.a.createElement(he.a,{color:"primary"})):r.a.createElement(g.a,{size:"small",onClick:function(){return o(a)}},r.a.createElement(ve.a,{color:"primary"})),r.a.createElement("iframe",{id:a.id,title:"lecture",className:n.fullwidth,frameBorder:"0",src:i.displayPdf})):r.a.createElement(r.a.Fragment,null,r.a.createElement(w.a,{variant:"h6"},a.name),r.a.createElement(de.a,{size:"small",variant:"contained",color:"secondary","aria-label":"contained primary button group"},r.a.createElement(g.a,{size:"small"},r.a.createElement(H.a,{href:i.downloadPdf},r.a.createElement(pe.a,{color:"primary"}))),!0===a.existInTodo?r.a.createElement(g.a,{size:"small",onClick:function(){return c(a)}},r.a.createElement(he.a,{color:"primary"})):r.a.createElement(g.a,{size:"small",onClick:function(){return o(a)}},r.a.createElement(ve.a,{color:"primary"})))))}));function we(e){var t=e.name;return r.a.createElement(w.a,{variant:"h5",align:"center"},t)}var je=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={subjectName:"",folderid:!1,content:!1,PrimarySliderSelectedIndex:!1,SecondarySliderSelectedIndex:!1},a.loadSubjects=function(e){var t=[];e.map((function(e){return t.push(e)})),a.setState({content:t})},a.handlePrimeTabClick=function(e){!1===a.state.content[e].actualContent&&S(a.state.content[e].id,"pdf").then((function(t){var n=[a.state.content][0];n[e].actualContent=t.files,a.setState({content:n})})),a.setState({PrimarySliderSelectedIndex:e,SecondarySliderSelectedIndex:!1})},a.handleSecondaryTabClick=function(e){a.setState({SecondarySliderSelectedIndex:e})},a.loadContent=function(e){var t=e.files.map((function(e){return{name:e.name,id:e.id,actualContent:!1}}));a.setState({content:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.subjectName,a=this.props.match.params.subjectId;this.setState({subjectName:t,folderid:a}),C().then((function(){return S(a,"folder").then((function(t){e.loadContent(t)}))}))}},{key:"render",value:function(){var e=this.state,t=e.content,a=e.subjectName,n=e.PrimarySliderSelectedIndex,o=e.SecondarySliderSelectedIndex;return r.a.createElement(v.a,{container:!0,alignContent:"center",justify:"center"},r.a.createElement(v.a,{item:!0,xs:12},r.a.createElement(we,{name:a})),!1!==this.state.content&&r.a.createElement(v.a,{item:!0,xs:12,md:"auto"},r.a.createElement(me,{content:t,selectedIndex:n,handleClick:this.handlePrimeTabClick})),r.a.createElement(v.a,{item:!0,xs:12},!1!==n&&!1!==t[n].actualContent&&r.a.createElement(se,{parentName:t[n].name,content:t[n].actualContent,handleClick:this.handleSecondaryTabClick,selectedIndex:o})),!1!==o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ye,{display:!1,removeFromTodo:this.props.removeFromTodo,addToTodo:this.props.addToTodo,file:t[this.state.PrimarySliderSelectedIndex].actualContent[o]})))}}]),t}(n.Component),Oe=a(81),Se=a.n(Oe),Ce=a(80),xe=a.n(Ce);var ke=Object(ie.a)({absolute:{position:"fixed",opacity:"0.3",bottom:"1vh",right:"1vw"},border:{border:"1px solid #88b",borderRadius:"50%",cursor:"pointer",display:"block",margin:"4px",zIndex:"10000"}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.absolute},r.a.createElement("div",null,r.a.createElement(xe.a,{color:"primary",className:"".concat(t.border," updowm"),onClick:function(){return window.scrollBy({top:-window.innerHeight-25,left:0})}}),r.a.createElement(Se.a,{color:"primary",className:"".concat(t.border," updowm"),onClick:function(){return window.scrollBy({top:window.innerHeight+25,left:0})}})))})),Te=Object(f.a)({palette:{primary:{main:"#1769aa"},secondary:{light:"#0066ff",main:"#e2f3f5",contrastText:"#222244s"}}}),Ie=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={communities:[{name:"1st Electrical",id:"1PRU8pyKz4lBlEm1HHkcoHOqnZBnH-6_n"},{name:"2nd Electrical",id:"1WOLqo0cqKsXaBOu6NiZ2qOqNHnVgJPpe"},{name:"2nd Mechanical",id:"1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7"}],todo:[],collapse:!0},a.addToTodo=function(e){var t=[a.state.todo][0];-1===t.indexOf(e)&&(e.existInTodo=!0,t.push(e),a.setState({todo:t}))},a.removeFromTodo=function(e){e.existInTodo=!1;var t=a.state.todo.filter((function(t){return t.id!==e.id}));a.setState({todo:t})},a.handleCollapse=function(){a.setState({collapse:!a.state.collapse})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("LS",window.localStorage.getItem("community")),r.a.createElement(h.a,{theme:Te},r.a.createElement("div",{className:"App"},r.a.createElement(ke,null),r.a.createElement(u.a,null,r.a.createElement(ne,{communities:this.state.communities,todo:this.state.todo,removeFromTodo:this.removeFromTodo,handleCollapse:this.handleCollapse}),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(oe,Object.assign({},t,{content:e.state.content,communities:e.state.communities,getContent:e.getContent}))}}),r.a.createElement(p.b,{exact:!0,path:"/subject/:subjectName/:subjectId",render:function(t){return r.a.createElement(je,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo}))}}),r.a.createElement(p.b,{exact:!0,path:"/:subjectName/:subjectId",render:function(t){return r.a.createElement(x,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo,communities:e.state.communities}))}}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Ie,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},93:function(e,t,a){e.exports=a(104)},98:function(e,t,a){}},[[93,1,2]]]);
//# sourceMappingURL=main.6299b14b.chunk.js.map
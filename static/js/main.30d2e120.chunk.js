(this.webpackJsonpmoochub=this.webpackJsonpmoochub||[]).push([[0],{102:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(19),i=a(14),s=a(22),m=a(23),d=a(25),u=a(26),p=a(35),h=a(86),f=a(171),E=(a(102),a(69)),b=a(149),g=a(153),v=a(109),y=a(152),j=a(43);function w(e){var t=e.folder,a=e.mdWidth;return r.a.createElement(b.a,{item:!0,xs:12,md:a,key:t.id},t.hasNestedFolder?r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement(j.a,{variant:"h6",align:"center",gutterBottom:!0},t.name),r.a.createElement(b.a,{item:!0,container:!0,spacing:4},void 0!==t.nestedFolder.files&&t.nestedFolder.files.map((function(e){return r.a.createElement(b.a,{key:e.id,item:!0,xs:!0,container:!0},r.a.createElement(v.a,{size:"small",component:u.b,to:"/subject/".concat(e.name,"/").concat(e.id),fullWidth:!0,variant:"contained",color:"primary"},e.name))}))))):r.a.createElement(y.a,null,r.a.createElement(g.a,null,r.a.createElement(v.a,{size:"medium",component:u.b,to:"/subject/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",color:"primary"},t.name))))}function O(e){return"".concat('"'+e+'" in parents')}var x=function(e,t){return new Promise((function(a,n){var r;"folder"===t?r=O(e)+" and mimeType = 'application/vnd.google-apps.folder'":"pdf"===t?r=O(e)+" and mimeType = 'application/pdf'":"_"===t&&(r=O(e)+" and name contains '_' "),window.gapi.client.drive.files.list({q:r,orderBy:"createdTime",spaces:"drive",fields:"files(name ,id)"}).then((function(e){a(e.result)})).catch((function(e){console.error(e)}))}))},C=function(){var e=document.createElement("script");return e.src="https://apis.google.com/js/client.js",new Promise((function(t,a){e.addEventListener("load",(function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0"),window.gapi.client.load("drive","v3",(function(){t()}))}))})),document.body.appendChild(e)}))},S=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",id:"",content:[]},a.nestedItems=[],a.loadSubjects=function(e){console.log("subjects",e);var t=[];e.map((function(e,n){"_"===e.name[0]?(e.name=e.name.substr(1),e.hasNestedFolder=!0,e.nestedFolder=[],t.push(e),a.nestedItems.push(Object(E.a)({},e,{index:n}))):t.push(e)})),a.setState({content:t}),a.latelood(a.nestedItems)},a.latelood=function(e){e.map((function(e){a.subFolderLoader(e)}))},a.subFolderLoader=function(e){x(e.id,"folder").then((function(t){var n=[a.state.content][0];n[e.index].nestedFolder=t,a.setState({content:n})}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.subjectName,a=this.props.match.params.subjectId;this.setState({name:t,id:a}),C().then((function(){return x(a,"folder").then((function(t){e.loadSubjects(t.files)}))})),console.log(this.props)}},{key:"render",value:function(){var e=this.state.content;return r.a.createElement(b.a,{container:!0,justify:"center",spacing:3},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(j.a,{variant:"h4",align:"center"},this.state.name)),r.a.createElement(b.a,{container:!0,item:!0,xs:9,md:10,spacing:4},e.map((function(t,a){return r.a.createElement(w,{folder:t,key:t.id||a,mdWidth:e.length%2===1&&a===e.length-1?12:6})}))))}}]),t}(n.Component),k=a(154),T=a(155),I=a(157),F=a(156),N=a(174),P=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.a,{justify:"center",container:!0,spacing:"2"},r.a.createElement(b.a,{item:!0}),r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(N.a,{value:12,"aria-labelledby":"continuous-slider",color:"secondary"}))),r.a.createElement(k.a,{cellHeight:400,cols:4,spacing:0},r.a.createElement(T.a,{key:"Subheader",cols:4,style:{height:"auto"}},r.a.createElement(F.a,null,"December")),r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"ass"}),r.a.createElement(I.a,{title:"Title",subtitle:"subtitle"})),r.a.createElement(T.a,{cols:1,rows:1},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"ass"}))," ",r.a.createElement(T.a,{cols:2},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",alt:"ass"}))," ",r.a.createElement(T.a,{cols:3},r.a.createElement("img",{src:"https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",alt:"ass"}))," ",r.a.createElement(T.a,{cols:4},r.a.createElement("img",{src:"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"ass"}))," ",r.a.createElement(T.a,{cols:1},r.a.createElement("img",{src:"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://images.unsplash.com/photo-1541233349642-6e425fe6190e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",alt:"ass"}))," ",r.a.createElement(T.a,null,r.a.createElement("img",{src:"https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",alt:"ass"}))))}}]),t}(n.Component),W=(n.Component,a(8)),_=a(24),B=a(173),D=a(111),q=a(159),z=a(158),J=a(74),A=a.n(J),H=a(75),M=a.n(H),Q=a(112),K=a(161),L=a(160),R=a(77),U=a.n(R),V=a(78),Z=a.n(V),G=a(76),Y=a.n(G);function X(e){var t=e.open,a=e.closefn,n=e.todo,o=e.removeFromTodo,c=Object(_.a)(),l=t;return r.a.createElement("div",null,r.a.createElement(B.a,{variant:"persistent",anchor:"left",open:l},r.a.createElement("div",null,r.a.createElement(z.a,{onClick:a},"ltr"===c.direction?r.a.createElement(A.a,null):r.a.createElement(M.a,null))),r.a.createElement(q.a,null),r.a.createElement(D.a,null,r.a.createElement(j.a,{variant:"h6",align:"center",color:"primary"},"study List ",r.a.createElement(Y.a,null)),n.map((function(e,t){return r.a.createElement(Q.a,{key:e.id},r.a.createElement(L.a,{href:"#".concat(e.id)},r.a.createElement(U.a,null)),r.a.createElement(K.a,{primary:"".concat(t+1,") ").concat(e.name)}),r.a.createElement(Z.a,{color:"primary",onClick:function(){return o(e)}}))}))),r.a.createElement(q.a,null)),r.a.createElement("main",null,r.a.createElement("div",null)))}var $=a(162),ee=a(163),te=a(164),ae=a(166),ne=a(165),re=a(167),oe=a(168),ce=a(79),le=a.n(ce),ie=a(80),se=a.n(ie),me=a(87),de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={drawerOpen:!1,menuOpen:!1},a.popref=r.a.createRef(),a.handleToggle=function(){a.setState({menuOpen:!a.state.menuOpen})},a.handleClose=function(){a.setState({menuOpen:!1})},a.handleSelect=function(e){a.handleClose(),window.localStorage.setItem("community","/".concat(e.name,"/").concat(e.id)),console.log(a.props)},a.handleDrawerOpen=function(){a.setState({drawerOpen:!0})},a.handleDrawerClose=function(){a.setState({drawerOpen:!1})},a.toggleDrawer=function(){a.setState({drawerOpen:!a.state.drawerOpen})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props)}},{key:"render",value:function(){var e,t,a,n=this;return r.a.createElement("div",null,r.a.createElement($.a,{position:"static"},r.a.createElement(ee.a,null,r.a.createElement(z.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return n.toggleDrawer()}},r.a.createElement(le.a,null)),r.a.createElement("div",{className:"nav-container"},r.a.createElement(v.a,(e={color:"inherit",component:u.b,to:"/",variant:"outlined"},Object(W.a)(e,"color","secondary"),Object(W.a)(e,"style",{margin:"0 5px"}),e),"      home      "),r.a.createElement(v.a,(t={color:"inherit",component:u.b,to:"/de7",variant:"outlined"},Object(W.a)(t,"color","secondary"),Object(W.a)(t,"style",{margin:"0 7px"}),t),"  Nerds Room  "),r.a.createElement(v.a,(a={color:"inherit",variant:"outlined"},Object(W.a)(a,"color","secondary"),Object(W.a)(a,"aria-haspopup","true"),Object(W.a)(a,"onClick",(function(){return n.handleToggle()})),Object(W.a)(a,"ref",this.popref),a),"departments"),r.a.createElement(v.a,{color:"inherit",onClick:function(){return n.props.handleCollapse()}},"  ",r.a.createElement(se.a,null))))),r.a.createElement(X,{open:this.state.drawerOpen,closefn:this.handleDrawerClose,todo:this.props.todo,removeFromTodo:this.props.removeFromTodo}),r.a.createElement(te.a,{anchorEl:this.popref.current,placement:"right-start",open:this.state.menuOpen,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,a=e.placement;return r.a.createElement(ne.a,Object.assign({},t,{style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(me.a,null,r.a.createElement(ae.a,{onClickAway:function(){return n.handleClose()}},r.a.createElement(re.a,{id:"menu-list-grow"},n.props.communities.map((function(e){return r.a.createElement(oe.a,{component:u.b,to:"/",key:e.id,onClick:function(){return n.handleSelect(e)}},e.name)}))))))})))}}]),t}(n.Component);function ue(e){var t=e.community,a=e.mdWidth;return r.a.createElement(b.a,{item:!0,xs:12,md:a,key:t.id},r.a.createElement(v.a,{onClick:function(){window.localStorage.setItem("community","/".concat(t.name,"/").concat(t.id))},size:"medium",component:u.b,to:"/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",color:"secondary"},t.name))}function pe(e){var t=e.communities;return window.localStorage.getItem("community")?r.a.createElement(p.a,{to:window.localStorage.getItem("community")}):r.a.createElement(b.a,{container:!0,justify:"center",spacing:3},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(j.a,{variant:"h4",align:"center",color:"primary"},"Faculty Of Engineering"),r.a.createElement(j.a,{variant:"h6",align:"center"},"Ain Shams University")),r.a.createElement(b.a,{container:!0,item:!0,xs:8,md:10,spacing:5},t.map((function(e,a){return r.a.createElement(ue,{community:e,key:e.id||a,mdWidth:t.length%2===1&&a===t.length-1?12:6})}))))}var he=a(172),fe=a(169),Ee=a(4);var be=Object(Ee.a)({topmargin:{margin:"20px 0 0 0"}})((function(e){var t=e.content,a=e.classes,n=e.handleClick,o=e.selectedIndex;return r.a.createElement(me.a,{elevation:2},r.a.createElement(he.a,{className:a.topmargin,value:o,variant:"scrollable",textColor:"inherit",scrollButtons:"on",indicatorColor:"primary"},t.map((function(e,t){return r.a.createElement(fe.a,{value:t,key:t,label:"_"===e.name[0]?e.name.substr(1):e.name,onClick:function(){return n(t)}})}))))}));var ge=Object(Ee.a)({topmargin:{margin:"20px 0 0 0"},center:{margin:"auto"}})((function(e){var t,a=e.parentName,n=e.content,o=e.classes,c=e.handleClick,l=e.selectedIndex;return t="_"===a[0]?a.substr(1,4):a.substr(0,3),console.log(a),r.a.createElement($.a,{position:"static",centered:"true",color:"primary",className:"addmargin"},r.a.createElement(he.a,{value:l,textColor:"inherit",variant:"scrollable",scrollButtons:"on"},n.map((function(e,a){return r.a.createElement(fe.a,{className:o.center,value:a,key:a,label:"".concat(t," ").concat(a+1),onClick:function(){return c(a)}})}))))})),ve=a(170),ye=a(83),je=a.n(ye),we=a(61),Oe=a.n(we),xe=a(62),Ce=a.n(xe),Se=a(82),ke=a.n(Se);var Te=Object(Ee.a)({fullwidth:{width:"98vw",height:"99vh"},center:{margin:"auto",textAlign:"center"}})((function(e){var t,a=e.file,n=e.classes,o=e.addToTodo,c=e.removeFromTodo,l=e.display,i=(t=a.id,{displayPdf:"https://drive.google.com/file/d/".concat(t,"/preview"),downloadPdf:"https://drive.google.com/uc?authuser=0&id=".concat(t,"&export=download")});return r.a.createElement("div",{className:n.center},l?r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{href:"#".concat(a.id)},r.a.createElement(ke.a,{fontSize:"large",color:"primary"})),!0===a.existInTodo?r.a.createElement(v.a,{size:"small",onClick:function(){return c(a)}},r.a.createElement(Oe.a,{color:"primary"})):r.a.createElement(v.a,{size:"small",onClick:function(){return o(a)}},r.a.createElement(Ce.a,{color:"primary"})),r.a.createElement("iframe",{id:a.id,title:"lecture",className:n.fullwidth,frameBorder:"0",src:i.displayPdf})):r.a.createElement(r.a.Fragment,null,r.a.createElement(j.a,{variant:"h6"},a.name),r.a.createElement(ve.a,{size:"small",variant:"contained",color:"secondary","aria-label":"contained primary button group"},r.a.createElement(v.a,{size:"small"},r.a.createElement(L.a,{href:i.downloadPdf},r.a.createElement(je.a,{color:"primary"}))),!0===a.existInTodo?r.a.createElement(v.a,{size:"small",onClick:function(){return c(a)}},r.a.createElement(Oe.a,{color:"primary"})):r.a.createElement(v.a,{size:"small",onClick:function(){return o(a)}},r.a.createElement(Ce.a,{color:"primary"})))))}));function Ie(e){var t=e.name;return r.a.createElement(j.a,{variant:"h5",align:"center"},t)}var Fe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={subjectName:"",folderid:!1,content:!1,PrimarySliderSelectedIndex:!1,SecondarySliderSelectedIndex:!1},a.loadSubjects=function(e){var t=[];e.map((function(e){return t.push(e)})),a.setState({content:t})},a.handlePrimeTabClick=function(e){!1===a.state.content[e].actualContent&&x(a.state.content[e].id,"pdf").then((function(t){var n=[a.state.content][0];n[e].actualContent=t.files,a.setState({content:n})})),a.setState({PrimarySliderSelectedIndex:e,SecondarySliderSelectedIndex:!1})},a.handleSecondaryTabClick=function(e){a.setState({SecondarySliderSelectedIndex:e})},a.loadContent=function(e){var t=e.files.map((function(e){return{name:e.name,id:e.id,actualContent:!1}}));a.setState({content:t})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.subjectName,a=this.props.match.params.subjectId;this.setState({subjectName:t,folderid:a}),C().then((function(){return x(a,"folder").then((function(t){e.loadContent(t)}))}))}},{key:"render",value:function(){var e=this.state,t=e.content,a=e.subjectName,n=e.PrimarySliderSelectedIndex,o=e.SecondarySliderSelectedIndex;return r.a.createElement(b.a,{container:!0,alignContent:"center",justify:"center"},r.a.createElement(b.a,{item:!0,xs:12},r.a.createElement(Ie,{name:a})),!1!==this.state.content&&r.a.createElement(b.a,{item:!0,xs:12,md:"auto"},r.a.createElement(be,{content:t,selectedIndex:n,handleClick:this.handlePrimeTabClick})),r.a.createElement(b.a,{item:!0,xs:12},!1!==n&&!1!==t[n].actualContent&&r.a.createElement(ge,{parentName:t[n].name,content:t[n].actualContent,handleClick:this.handleSecondaryTabClick,selectedIndex:o})),!1!==o&&r.a.createElement(r.a.Fragment,null,r.a.createElement(Te,{display:!1,removeFromTodo:this.props.removeFromTodo,addToTodo:this.props.addToTodo,file:t[this.state.PrimarySliderSelectedIndex].actualContent[o]})))}}]),t}(n.Component),Ne=a(85),Pe=a.n(Ne),We=a(84),_e=a.n(We);var Be=Object(Ee.a)({absolute:{position:"fixed",opacity:"0.3",bottom:"1vh",right:"1vw"},border:{border:"1px solid #88b",borderRadius:"50%",cursor:"pointer",display:"block",margin:"4px",zIndex:"10000"}})((function(e){var t=e.classes;return r.a.createElement("div",{className:t.absolute},r.a.createElement("div",null,r.a.createElement(_e.a,{color:"primary",className:"".concat(t.border," updowm"),onClick:function(){return window.scrollBy({top:-window.innerHeight-25,left:0})}}),r.a.createElement(Pe.a,{color:"primary",className:"".concat(t.border," updowm"),onClick:function(){return window.scrollBy({top:window.innerHeight+25,left:0})}})))})),De=Object(h.a)({palette:{primary:{main:"#1769aa"},secondary:{light:"#0066ff",main:"#e2f3f5",contrastText:"#222244s"}}}),qe=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={communities:[{name:"1st Electrical",id:"1PRU8pyKz4lBlEm1HHkcoHOqnZBnH-6_n"},{name:"2nd Electrical",id:"1WOLqo0cqKsXaBOu6NiZ2qOqNHnVgJPpe"},{name:"2nd Mechanical",id:"1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7"}],todo:[],collapse:!0},a.addToTodo=function(e){var t=[a.state.todo][0];-1===t.indexOf(e)&&(e.existInTodo=!0,t.push(e),a.setState({todo:t}))},a.removeFromTodo=function(e){e.existInTodo=!1;var t=a.state.todo.filter((function(t){return t.id!==e.id}));a.setState({todo:t})},a.handleCollapse=function(){a.setState({collapse:!a.state.collapse})},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return console.log("LS",window.localStorage.getItem("community")),r.a.createElement(f.a,{theme:De},r.a.createElement("div",{className:"App"},r.a.createElement(Be,null),r.a.createElement(u.a,null,r.a.createElement(de,{communities:this.state.communities,todo:this.state.todo,removeFromTodo:this.removeFromTodo,handleCollapse:this.handleCollapse}),r.a.createElement("div",{className:"container"},r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(t){return r.a.createElement(pe,Object.assign({},t,{content:e.state.content,communities:e.state.communities,getContent:e.getContent}))}}),r.a.createElement(p.b,{exact:!0,path:"/login",component:P}),r.a.createElement(p.b,{exact:!0,path:"/subject/:subjectName/:subjectId",render:function(t){return r.a.createElement(Fe,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo}))}}),r.a.createElement(p.b,{exact:!0,path:"/:subjectName/:subjectId",render:function(t){return r.a.createElement(S,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo,communities:e.state.communities}))}}))))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(qe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},97:function(e,t,a){e.exports=a(108)}},[[97,1,2]]]);
//# sourceMappingURL=main.30d2e120.chunk.js.map
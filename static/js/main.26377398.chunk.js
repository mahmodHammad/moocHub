(this.webpackJsonpmoochub=this.webpackJsonpmoochub||[]).push([[0],{101:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(8),c=n.n(r),i=n(66),l=n(27),m=n(19),d=n(35),s=n(36),u=n(39),f=n(22),p=n(31),h=(n(99),n(80)),v=n(152),E=n(153);function g(e){return"".concat('"'+e+'" in parents')}var b=function(e,t){return new Promise((function(n,a){var o;"folder"===t?o=g(e)+" and mimeType = 'application/vnd.google-apps.folder'":"pdf"===t?o=g(e)+" and mimeType = 'application/pdf'":"_"===t&&(o=g(e)+" and name contains '_' "),window.gapi.client.drive.files.list({q:o,orderBy:"createdTime",spaces:"drive",fields:"files(name ,id)"}).then((function(e){n(e.result)})).catch((function(e){console.error(e)}))}))},y=function(){var e=document.createElement("script");return e.src="https://apis.google.com/js/client.js",new Promise((function(t,n){e.addEventListener("load",(function(){window.gapi.load("client",(function(){window.gapi.client.setApiKey("AIzaSyBaYqW1LaG3Oua5aT40u6AqmaasNVPkwe0"),window.gapi.client.load("drive","v3",(function(){t()}))}))})),document.body.appendChild(e)}))},w=n(28),T=n(7),j=n(69),x=n(144),C=n(145),S=n(146),k=n(109),O=n(41),N=n(74),F=n.n(N),I=n(56),W=Object(I.a)((function(e){return{logo:{flexGrow:1,justifyContent:"left",fontWeight:"bold"},logo1:{},study:{padding:" 2px 9px",fontSize:"0.7125rem"},root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},contact:Object(T.a)({position:"relative","&:hover":{color:"green"},marginLeft:10,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),contactbtn:{fontSize:"0.7rem"}}}));function P(e){var t=e.todo,n=e.removeFromTodo,r=(e.communities,Object(a.useState)(!1)),c=Object(w.a)(r,2),i=c[0],l=c[1],m=W();return o.a.createElement("div",null,o.a.createElement(x.a,{position:"sticky"},o.a.createElement(C.a,{variant:"dense"},o.a.createElement(k.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:function(){return l(!i)}},o.a.createElement(F.a,null)),o.a.createElement("div",{className:m.logo},o.a.createElement(S.a,{color:"inherit",component:f.b,to:"/",size:"large",className:m.logo1},o.a.createElement(O.a,{align:"left",color:"inherit"},"Asu"),o.a.createElement(O.a,{color:"secondary"},"Engineer "))),o.a.createElement("div",null,o.a.createElement(S.a,{size:"small",className:m.study,variant:"outlined",color:"secondary",component:f.b,to:"/nerds"},"Study Room")))),o.a.createElement(j.a,{open:i,setopen:l,todo:t,removeFromTodo:n}))}var B=n(147),z=n(149),A=n(148);function L(e){var t=e.folder,n=e.mdWidth;return o.a.createElement(B.a,{item:!0,xs:12,md:n,key:t.id},t.hasNestedFolder?o.a.createElement(A.a,null,o.a.createElement(z.a,null,o.a.createElement(O.a,{variant:"h6",align:"center",color:"primary",gutterBottom:!0},t.name),o.a.createElement(B.a,{item:!0,container:!0,spacing:4},void 0!==t.nestedFolder.files&&t.nestedFolder.files.map((function(e){return o.a.createElement(B.a,{key:e.id,item:!0,xs:!0,container:!0},o.a.createElement(S.a,{size:"small",component:f.b,to:"/subject/".concat(e.name,"/").concat(e.id),fullWidth:!0,variant:"contained",color:"primary"},o.a.createElement(O.a,{color:"inherit",variant:"inherit"},e.name)))}))))):o.a.createElement(A.a,null,o.a.createElement(z.a,null,o.a.createElement(S.a,{size:"medium",component:f.b,to:"/subject/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",color:"primary"},o.a.createElement(O.a,{color:"inherit",variant:"inherit"},t.name)))))}var H=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.match.params.subjectName,t=this.props.content;return o.a.createElement(B.a,{container:!0,justify:"center"},o.a.createElement(B.a,{item:!0,xs:12},o.a.createElement(O.a,{variant:"h5",color:"primary",align:"center",style:{margin:"5px 0 40px  0"}},e)),o.a.createElement(B.a,{container:!0,item:!0,xs:11,md:10,spacing:4,className:"cardContent"},t.map((function(e,n){return o.a.createElement(L,{folder:e,key:e.id||n,mdWidth:t.length%2===1&&n===t.length-1?12:6})}))))}}]),t}(a.Component);function R(e){var t=e.community,n=e.mdWidth,a=e.ChooseCommumity;return o.a.createElement(B.a,{item:!0,xs:12,md:n,key:t.id},o.a.createElement(S.a,{onClick:function(){a(t)},size:"medium",component:f.b,to:"/".concat(t.name,"/").concat(t.id),fullWidth:!0,variant:"contained",className:"bcol1"},t.name))}function q(e){var t=e.communities,n=e.ChooseCommumity;return window.localStorage.getItem("community")?o.a.createElement(p.a,{to:window.localStorage.getItem("community")}):o.a.createElement(B.a,{container:!0,justify:"center",spacing:3},o.a.createElement(B.a,{item:!0,xs:12},o.a.createElement(O.a,{variant:"h4",align:"center",color:"primary"},"Faculty Of Engineering"),o.a.createElement(O.a,{variant:"h6",align:"center",color:"secondary"},"Ain Shams University")),o.a.createElement(B.a,{container:!0,item:!0,xs:8,md:10,spacing:5},t.map((function(e,a){return o.a.createElement(R,{ChooseCommumity:n,community:e,key:e.id||a,mdWidth:t.length%2===1&&a===t.length-1?12:6})}))))}var _=n(82),G=n(154),U=n(150),D=n(4);var J=Object(D.a)({topmargin:{margin:"20px 0 0 0"}})((function(e){var t=e.content,n=e.classes,a=e.handleClick,r=e.selectedIndex;return o.a.createElement(_.a,{elevation:2},o.a.createElement(G.a,{className:n.topmargin,value:r,variant:"scrollable",textColor:"inherit",scrollButtons:"on",indicatorColor:"secondary"},t.map((function(e,t){return o.a.createElement(U.a,{value:t,key:t,label:"_"===e.name[0]?e.name.substr(1):e.name,onClick:function(){return a(t)}})}))))})),M=n(83),Z=n(76),K=n.n(Z),V=n(77),Y=n.n(V);var Q=Object(D.a)({op:{opacity:"0.75"},container:{display:"flex",flexDirection:"row",justifyContent:" center"},cardText:{flexGrow:"20"},add:{flexGrow:"1",float:"right",alignSelf:"center"},margin:{margin:"2vh 2vw"}})((function(e){var t=e.content,n=e.classes,r=e.addToTodo,c=e.removeFromTodo,i=e.todo,l=Object(a.useState)(!0),m=Object(w.a)(l,2),d=m[0],s=m[1];return o.a.createElement(B.a,{item:!0,xs:9,md:5,className:(n.op,n.margin)},o.a.createElement(A.a,null,o.a.createElement(z.a,{className:n.container},o.a.createElement(M.a,{href:"#",className:n.cardText},t.name),!1===function(e,t){var n=!1;return e.forEach((function(e){e.id===t.id&&(n=!0)})),n}(i,t)?o.a.createElement(K.a,{className:"".concat(n.add),size:"large",color:"primary",onClick:function(){r(t),s(!d)}}):o.a.createElement(Y.a,{className:"".concat(n.add," col3"),size:"large",onClick:function(){c(t),s(!d)}}))))}));var X=Object(D.a)({topmargin:{margin:"20px 0 0 0"},center:{margin:"auto"},op:{opacity:"0.86"},inline:{display:"inline"},container:{display:"flex",flexDirection:"row",justifyContent:" center"},cardText:{flexGrow:"48"},add:{flexGrow:"1",float:"right",alignSelf:"center"}})((function(e){var t=e.content,n=e.classes,a=e.removeFromTodo,r=e.addToTodo,c=e.todo;return o.a.createElement(B.a,{container:!0,className:n.topmargin,justify:"center"},t.map((function(e,t){return o.a.createElement(Q,{key:e.id,content:e,todo:c,addToTodo:r,removeFromTodo:a})})))}));function $(e){var t=e.name;return o.a.createElement(O.a,{variant:"h5",align:"center"},t)}var ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={subjectName:"",folderid:!1,content:!1,PrimarySliderSelectedIndex:!1,SecondarySliderSelectedIndex:!1},n.handlePrimeTabClick=function(e){!1===n.state.content[e].actualContent&&b(n.state.content[e].id,"pdf").then((function(t){var a=[n.state.content][0];a[e].actualContent=t.files,n.setState({content:a})})),n.setState({PrimarySliderSelectedIndex:e,SecondarySliderSelectedIndex:!1})},n.handleSecondaryTabClick=function(e){n.setState({SecondarySliderSelectedIndex:e})},n.loadContent=function(e){var t=e.files.map((function(e){return{name:e.name,id:e.id,actualContent:!1}}));n.setState({content:t})},n}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.match.params.subjectName,n=this.props.match.params.subjectId;this.setState({subjectName:t,folderid:n}),y().then((function(){return b(n,"folder").then((function(t){e.loadContent(t)}))}))}},{key:"render",value:function(){var e=this.state,t=e.content,n=e.subjectName,a=e.PrimarySliderSelectedIndex;return o.a.createElement(B.a,{container:!0,justify:"center"},o.a.createElement(B.a,{item:!0,xs:12},o.a.createElement($,{name:n})),!1!==this.state.content&&o.a.createElement(B.a,{item:!0,xs:12,md:"auto"},o.a.createElement(J,{content:t,selectedIndex:a,handleClick:this.handlePrimeTabClick})),o.a.createElement(B.a,{item:!0,xs:12},!1!==a&&!1!==t[a].actualContent&&o.a.createElement(X,{parentName:t[a].name,content:t[a].actualContent,removeFromTodo:this.props.removeFromTodo,addToTodo:this.props.addToTodo,todo:this.props.todo})))}}]),t}(a.Component),te=n(79),ne=n.n(te),ae=n(78),oe=n.n(ae);var re=Object(D.a)({absolute:{position:"fixed",opacity:"0.3",bottom:"1vh",right:"0.5vw",zIndex:"100"},border:{border:"1px solid #f07b3f",borderRadius:"50%",cursor:"pointer",display:"block",margin:"4px",zIndex:"10000"}})((function(e){var t=e.classes;return o.a.createElement("div",{className:t.absolute},o.a.createElement("div",null,o.a.createElement(oe.a,{className:"".concat(t.border," updowm col2"),onClick:function(){return window.scrollBy({top:-window.innerHeight-55,left:0})}}),o.a.createElement(ne.a,{className:"".concat(t.border," updowm col2"),onClick:function(){return window.scrollBy({top:window.innerHeight+55,left:0})}})))})),ce=n(51),ie=n.n(ce),le=n(115),me=n(112),de=n(59),se=n(151);var ue=Object(D.a)({fullwidth:{width:"98vw",height:"99vh"},center:{margin:"auto",textAlign:"center"}})((function(e){var t,n=e.file,r=e.classes,c=e.removeFromTodo,i=(t=n.id,{displayPdf:"https://drive.google.com/file/d/".concat(t,"/preview"),downloadPdf:"https://drive.google.com/uc?authuser=0&id=".concat(t,"&export=download")}),l=Object(a.useState)(!1),m=Object(w.a)(l,2),d=m[0],s=m[1];return o.a.createElement("div",{key:n.id,className:r.center,id:n.id},o.a.createElement(se.a,{maxWidth:"lg"},o.a.createElement(le.a,{className:"NerdsListItem"},o.a.createElement(me.a,null,o.a.createElement(O.a,{variant:"h6",component:"span",color:"primary",onClick:function(){s(!d)}},n.name)),o.a.createElement(ie.a,{fontSize:"small",className:"col3 todoRemove",onClick:function(){return c(n)}}))),d&&o.a.createElement("iframe",{title:"lecture",className:r.fullwidth,frameBorder:"0",src:i.displayPdf}),o.a.createElement(de.a,null))})),fe=n(110);function pe(e){var t=e.todo,n=e.removeFromTodo;e.collapse;return o.a.createElement("div",null,0!==t.length&&t.map((function(e){return o.a.createElement("div",{key:e.id},o.a.createElement(fe.a,{className:"Zindex"},o.a.createElement(ue,{file:e,removeFromTodo:n})))})))}function he(e){var t=e.todo,n=e.addToTodo,a=e.removeFromTodo;return o.a.createElement("div",null,o.a.createElement(re,null),t.length?o.a.createElement(pe,{todo:t,addToTodo:n,removeFromTodo:a}):o.a.createElement("p",{className:"warning"},"you should add content first then come here again to see it"," "))}var ve=Object(h.a)({palette:{primary:{main:"#333"},secondary:{light:"#fff",main:"#d72323",contrastText:"#000"},error:{light:"#fff",main:"#ff0400",contrastText:"#000"},success:{light:"#4ff",main:"#00ff60",contrastText:"#000"},background:{default:"#f0f0f0"}}}),Ee=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={communities:[{name:"1st Electrical",id:"1PRU8pyKz4lBlEm1HHkcoHOqnZBnH-6_n"},{name:"2nd Electrical",id:"1WOLqo0cqKsXaBOu6NiZ2qOqNHnVgJPpe"},{name:"2nd Mechanical",id:"1DyV0e0I0bhsMdU2eiAiPhY_MqkB9r1F7"},{name:"3rd Computer 1",id:"0B0OtL1j7jam_bWR3THZhd1RnbEE"},{name:"3rd Computer 2",id:"0B0OtL1j7jam_WEl2WEQzWlFRalU"}],todo:[],content:[],collapse:!0},n.addToTodo=function(e){var t=[n.state.todo][0];if(-1===t.indexOf(e)){e.existInTodo=!0,t.push(e),n.setState({todo:t});var a=JSON.stringify(t);window.localStorage.setItem("todo",a)}},n.removeFromTodo=function(e){e.existInTodo=!1;var t=n.state.todo.filter((function(t){return t.id!==e.id}));window.localStorage.setItem("todo",JSON.stringify(t)),n.setState({todo:t})},n.nestedItems=[],n.loadSubjects=function(e){var t=[];e.map((function(e,a){return"_"===e.name[0]?(e.name=e.name.substr(1),e.hasNestedFolder=!0,e.nestedFolder=[],t.push(e),n.nestedItems.push(Object(i.a)({},e,{index:a}))):t.push(e)})),n.setState({content:t}),n.latelood(n.nestedItems)},n.latelood=function(e){e.map((function(e){return n.subFolderLoader(e)}))},n.subFolderLoader=function(e){b(e.id,"folder").then((function(t){var a=[n.state.content][0];a[e.index].nestedFolder=t,n.setState({content:a})}))},n.load=function(e){y().then((function(){return b(e,"folder").then((function(e){n.loadSubjects(e.files)}))}))},n.ChooseCommumity=function(e){var t=e.id,a=e.name;n.load(t),window.localStorage.setItem("community","/".concat(a,"/").concat(t))},n.getCommunity=function(){var e,t=window.localStorage.getItem("community");t&&(e=t.split("/")[2],n.load(e))},n}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.getCommunity();var e=window.localStorage.getItem("todo");if(e){var t=JSON.parse(e);this.setState({todo:t})}}},{key:"render",value:function(){var e=this;return o.a.createElement(v.a,{theme:ve},o.a.createElement(E.a,null),o.a.createElement("div",{className:"App"},o.a.createElement(f.a,{basename:"/moocHub"},o.a.createElement(P,{communities:this.state.communities,todo:this.state.todo,removeFromTodo:this.removeFromTodo,getCommunity:this.getCommunity}),o.a.createElement("div",{className:"container"},o.a.createElement(p.d,null,o.a.createElement(p.b,{exact:!0,path:"/",render:function(t){return o.a.createElement(q,Object.assign({},t,{communities:e.state.communities,ChooseCommumity:e.ChooseCommumity}))}}),o.a.createElement(p.b,{exact:!0,path:"/:subjectName/:subjectId",render:function(t){return o.a.createElement(H,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo,communities:e.state.communities,content:e.state.content}))}}),o.a.createElement(p.b,{exact:!0,path:"/subject/:subjectName/:subjectId",render:function(t){return o.a.createElement(ee,Object.assign({},t,{addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo,todo:e.state.todo}))}}),o.a.createElement(p.b,{exact:!0,path:"/nerds",render:function(t){return o.a.createElement(he,Object.assign({},t,{todo:e.state.todo,addToTodo:e.addToTodo,removeFromTodo:e.removeFromTodo,communities:e.state.communities,content:e.state.content}))}}))))))}}]),t}(a.Component),ge=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function be(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement(Ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/moocHub",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/moocHub","/service-worker.js");ge?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):be(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):be(t,e)}))}}()},69:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return C}));var a=n(28),o=n(0),r=n.n(o),c=n(110),i=n(111),l=n(59),m=n(109),d=n(115),s=n(41),u=n(83),f=n(114),p=n(112),h=n(56),v=(n(101),n(71)),E=n.n(v),g=n(51),b=n.n(g),y=n(72),w=n.n(y),T=n(73),j=n.n(T),x=Object(h.a)({list:{width:290},fullList:{width:"auto"}});function C(t){var n=t.open,h=t.setopen,v=t.todo,g=t.removeFromTodo,y=x(),T=e.browser&&/iPad|iPhone|iPod/.test(navigator.userAgent),C=Object(o.useState)(!0),S=Object(a.a)(C,2),k=S[0],O=S[1];return r.a.createElement("div",null,r.a.createElement(f.a,{disableBackdropTransition:!T,disableDiscovery:T,anchor:"left",onOpen:function(){return h(!0)},onClose:function(){return h(!1)},open:n},r.a.createElement("div",{className:y.list},r.a.createElement(m.a,{onClick:function(){return h(!1)}},r.a.createElement(E.a,null)),r.a.createElement(l.a,null),r.a.createElement(c.a,null,r.a.createElement(s.a,{variant:"h6",component:"div",align:"center",color:"secondary",onClick:function(){O(!k)}},"Study List",k?r.a.createElement(w.a,null):r.a.createElement(j.a,null)),r.a.createElement(i.a,{in:k,timeout:"auto"},v.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(d.a,null,r.a.createElement(p.a,{component:u.a,href:"".concat("/moocHub","/nerds/#").concat(e.id)},r.a.createElement(u.a,{color:"primary",href:"".concat("/moocHub","/nerds/#").concat(e.id)},e.name)),r.a.createElement(b.a,{fontSize:"small",className:"col3 todoRemove",onClick:function(){return g(e)}}),r.a.createElement(l.a,null)),r.a.createElement(l.a,null))})))))),r.a.createElement("main",null,r.a.createElement("div",null)))}}).call(this,n(100))},94:function(e,t,n){e.exports=n(108)},99:function(e,t,n){}},[[94,1,2]]]);
//# sourceMappingURL=main.26377398.chunk.js.map
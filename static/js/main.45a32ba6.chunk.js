(this["webpackJsonpvk-ma-boilerplate"]=this["webpackJsonpvk-ma-boilerplate"]||[]).push([[0],{107:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(26),c=a.n(r),i=a(25),l=a(40),s=a(17),u=a(8),p=a(6),d=a(29),m=a(20),h=a.n(m),v={appID:7282836,vkAPI:"5.92",startStory:"home",startView:"home",startPanel:"base",basePanel:"base",routes:[{path:"home/home/base",pretty:""},{path:"more/modal/filters",pretty:"modal"}]},b=function(e){return{type:"SET_ACCESS_TOKEN",payload:e}},y=function(){h.a.send("VKWebAppClose",{status:"success"})},O=function(){h.a.send("VKWebAppEnableSwipeBack",{})},f=function(){h.a.send("VKWebAppDisableSwipeBack",{})},E=function(e,t){return t.access_token=Ee.getState().vkui.accessToken,t.v=void 0===t.v?v.vkAPI:t.v,h.a.sendPromise("VKWebAppCallAPIMethod",{method:e,params:t}).then((function(e){return e.data.response})).catch((function(e){return e}))},j=function e(){var t=document.documentElement.scrollTop||document.body.scrollTop;t>30||t>0&&(window.requestAnimationFrame(e),window.scrollTo(0,t-t/8))},g=function(e,t,a){var n={pretty:[e,t,a].join("/")};return["#",(v.routes.find((function(e){return e.path===n.pretty}))||n).pretty].join("/")},S={activeStory:null,activeView:null,activePanel:null,storiesHistory:[],viewsHistory:[],panelsHistory:[],activeModals:[],modalHistory:[],popouts:[],scrollPosition:[]},k={accessToken:void 0,colorScheme:"client_light",activeTab:[],componentScroll:[]},w={forms:[]},T=Object(i.combineReducers)({vkui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_COLOR_SCHEME":return Object(p.a)({},e,{colorScheme:t.payload});case"SET_ACCESS_TOKEN":return Object(p.a)({},e,{accessToken:t.payload});case"SET_ACTIVE_TAB":return Object(p.a)({},e,{activeTab:Object(p.a)({},e.activeTab,Object(u.a)({},t.payload.component,t.payload.tab))});case"SET_SCROLL_POSITION":return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:t.payload.x,y:t.payload.y}))});case"SET_SCROLL_POSITION_BY_ID":var a=document.getElementById(t.payload.component).getElementsByClassName("HorizontalScroll__in")[0],n=a.scrollLeft,o=a.scrollTop;return Object(p.a)({},e,{componentScroll:Object(p.a)({},e.componentScroll,Object(u.a)({},t.payload.component,{x:n,y:o}))});default:return e}},router:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_PAGE":var a=t.payload.view,n=t.payload.panel,o=e.panelsHistory[a]||[],r=e.viewsHistory[e.activeStory]||[],c=r.indexOf(a);return-1!==c&&r.splice(c,1),-1===o.indexOf(n)&&(o=[].concat(Object(d.a)(o),[n])),o.length>1&&O(),window.history.pushState(null,null,g(e.activeStory,a,n)),Object(p.a)({},e,{activeView:a,activePanel:n,panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},a,o)),viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeStory,[].concat(Object(d.a)(r),[a]))),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"SET_STORY":var i=e.viewsHistory[t.payload.story]||[t.payload.story],l=e.storiesHistory,s=i[i.length-1],m=e.panelsHistory[s]||[t.payload.initial_panel],h=m[m.length-1];if(t.payload.story===e.activeStory)if(m.length>1){var b=m.shift();h=(m=[b])[m.length-1]}else if(i.length>1){var E=i.shift();s=(i=[E])[i.length-1],h=(m=e.panelsHistory[s])[m.length-1]}t.payload.story===e.activeStory&&1===m.length&&window.pageYOffset>0&&(window.scrollTo(0,30),j());var k=l.indexOf(t.payload.story);return(-1===k||l[0]===t.payload.story&&l[l.length-1]!==t.payload.story)&&(l=[].concat(Object(d.a)(l),[t.payload.story])),window.history.pushState(null,null,g(t.payload.story,s,h)),Object(p.a)({},e,{activeStory:t.payload.story,activeView:s,activePanel:h,storiesHistory:l,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},s,i)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},s,m)),scrollPosition:Object(p.a)({},e.scrollPosition,Object(u.a)({},e.activeStory+"_"+e.activeView+"_"+e.activePanel,window.pageYOffset))});case"GO_BACK":var w=e.activeView,T=e.activePanel,P=e.activeStory,_=e.popouts;if(_[w])return _[w]=null,Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,{popoutsData:_})});var A=e.modalHistory[w];if(void 0!==A&&0!==A.length){var C=A[A.length-2]||null;return null===C?A=[]:-1!==A.indexOf(C)?A=A.splice(0,A.indexOf(C)+1):A.push(C),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},w,C)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},w,A))})}var H=e.panelsHistory[w]||[],V=e.viewsHistory[e.activeStory]||[],I=e.storiesHistory;if(H.length>1)H.pop(),T=H[H.length-1];else if(V.length>1){V.pop(),w=V[V.length-1];var D=e.panelsHistory[w]||v.basePanel;T=D[D.length-1]}else if(I.length>1&&"Android"===t.payload.from){I.pop(),P=I[I.length-1]||v.startStory,w=e.viewsHistory[P][e.viewsHistory[P].length-1]||v.startView;var M=e.panelsHistory[w];T=M.length>1?M[M.length-1]:M[0]}else 1===H.length?T="base":y();return 1===H.length&&"iOS"===t.payload.from&&f(),window.history.pushState(null,null,g(P,w,T)),Object(p.a)({},e,{activeView:w,activePanel:T,activeStory:P,viewsHistory:Object(p.a)({},e.viewsHistory,Object(u.a)({},e.activeView,V)),panelsHistory:Object(p.a)({},e.panelsHistory,Object(u.a)({},e.activeView,H))});case"OPEN_POPOUT":return window.history.pushState(null,null),Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,t.payload.popout))});case"CLOSE_POPOUT":return Object(p.a)({},e,{popouts:Object(p.a)({},e.popouts,Object(u.a)({},e.activeView,null))});case"OPEN_MODAL":window.history.pushState(null,null);var B=t.payload.id||null,x=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===B?x=[]:-1!==x.indexOf(B)?x=x.splice(0,x.indexOf(B)+1):x.push(B),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,B)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,x))});case"CLOSE_MODAL":var L=e.modalHistory[e.activeView][e.modalHistory[e.activeView].length-2]||null,G=e.modalHistory[e.activeView]?Object(d.a)(e.modalHistory[e.activeView]):[];return null===L?G=[]:-1!==G.indexOf(L)?G=G.splice(0,G.indexOf(L)+1):G.push(L),Object(p.a)({},e,{activeModals:Object(p.a)({},e.activeModals,Object(u.a)({},e.activeView,L)),modalHistory:Object(p.a)({},e.modalHistory,Object(u.a)({},e.activeView,G))});default:return e}},formData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_FORM_DATA":return Object(p.a)({},e,{forms:Object(p.a)({},e.forms,Object(u.a)({},t.payload.form,t.payload.data))});default:return e}}}),P=a(42),_=function(e,t){return{type:"SET_STORY",payload:{story:e,initial_panel:t}}},A=function(e,t){return{type:"SET_PAGE",payload:{view:e,panel:t}}},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"iOS";return{type:"GO_BACK",payload:{from:e}}},H=function(e){return{type:"OPEN_POPOUT",payload:{popout:e}}},V=function(){return{type:"CLOSE_POPOUT"}},I=function(e){return{type:"OPEN_MODAL",payload:{id:e}}},D=function(){return{type:"CLOSE_MODAL"}},M=(a(95),a(96),a(14)),B=a(15),x=a(18),L=a(16),G=a(19),N=a(2),z=a(53),F=a.n(z),K=a(54),W=a.n(K),R=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(o)))).state={showImg:!1},a.showImg=function(){a.setState({showImg:!0})},a}return Object(G.a)(t,e),Object(B.a)(t,[{key:"openPopout",value:function(){var e=this;this.props.openPopout(o.a.createElement(N.a,{actions:[{title:"\u041d\u0435\u0442",autoclose:!0,style:"cancel"},{title:"\u0414\u0430",autoclose:!0,action:this.showImg}],onClose:function(){return e.props.closePopout()}},o.a.createElement("h2",null,"\u0412\u043e\u043f\u0440\u043e\u0441 \u0437\u043d\u0430\u0447\u0438\u0442"),o.a.createElement("p",null,"\u0412\u0430\u0441 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435?")))}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage,r=t.withoutEpic;return o.a.createElement(N.w,{id:a},o.a.createElement(N.x,null,"\u041f\u0440\u0438\u043c\u0435\u0440\u044b"),o.a.createElement(N.m,null,o.a.createElement(N.h,null,o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return n("home","groups")}},"\u0421\u043f\u0438\u0441\u043e\u043a \u043c\u043e\u0438\u0445 \u0433\u0440\u0443\u043f\u043f")),o.a.createElement(N.h,null,o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return e.openPopout()}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u0430\u043b\u0435\u0440\u0442")),o.a.createElement(N.h,null,o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return e.props.openModal("MODAL_PAGE_BOTS_LIST")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u0443\u044e \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443")),r&&o.a.createElement(N.h,null,o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e")),this.state.showImg&&o.a.createElement(N.h,{className:"div-center"},o.a.createElement("img",{src:"https://vk.com/sticker/1-12676-256",alt:"\u0421\u0442\u0438\u043a\u0435\u0440 VK"}))))}}]),t}(o.a.Component),U={setPage:A,goBack:C,openPopout:H,closePopout:V,openModal:I},Y=Object(s.b)(null,U)(R),q=a(38),J=a.n(q),X=function(e){function t(){return Object(M.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.props,t=e.description,a=e.photo,n=e.name,r=t.length>0?t:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442";return o.a.createElement(N.d,{description:r,before:o.a.createElement(N.b,{size:40,src:a})},n)}}]),t}(n.PureComponent),Z=function(e){var t=null;return void 0!==e&&null!==e&&0!==e.length&&(t=e.map((function(e){return o.a.createElement(X,{key:e.id,description:e.description,photo:e.photo_100,name:e.name})}))),t},Q=function(e){function t(){var e,a;Object(M.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(x.a)(this,(e=Object(L.a)(t)).call.apply(e,[this].concat(o)))).state={groups:{admined:[],other:[]},loading:!0,errorGetAuthToken:!1},a}return Object(G.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){void 0===this.props.accessToken?this.getAuthToken():this.getGroupsList()}},{key:"getAuthToken",value:function(){var e;this.props.dispatch((e=["groups"],function(t){h.a.sendPromise("VKWebAppGetAuthToken",{app_id:v.appID,scope:e.join(",")}).then((function(e){t(b(e.data.access_token))})).catch((function(){t(b(null))}))}))}},{key:"componentDidUpdate",value:function(e,t,a){this.props!==e&&(null===this.props.accessToken?this.setState({loading:!1,errorGetAuthToken:!0}):(this.setState({loading:!0,errorGetAuthToken:!1}),this.getGroupsList()))}},{key:"getGroupsList",value:function(){var e,t,a;return J.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(!localStorage.getItem("userGroupsAdmined")||!localStorage.getItem("userGroupsOther")){n.next=3;break}return this.setState({groups:{admined:JSON.parse(localStorage.getItem("userGroupsAdmined")),other:JSON.parse(localStorage.getItem("userGroupsOther"))},loading:!1}),n.abrupt("return");case 3:return n.next=5,J.a.awrap(E("groups.get",{extended:"1",fields:"description",count:"100"}));case 5:e=n.sent,t=e.items.filter((function(e){return 1===e.is_admin})),a=e.items.filter((function(e){return 0===e.is_admin})),localStorage.setItem("userGroupsAdmined",JSON.stringify(t)),localStorage.setItem("userGroupsOther",JSON.stringify(a)),this.setState({groups:{admined:t,other:a},loading:!1});case 11:case"end":return n.stop()}}),null,this)}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.goBack,r=Z(this.state.groups.admined),c=Z(this.state.groups.other);return o.a.createElement(N.w,{id:a},o.a.createElement(N.x,{left:o.a.createElement(N.y,{onClick:function(){return n()}})},"\u0413\u0440\u0443\u043f\u043f\u044b"),this.state.loading&&o.a.createElement(N.z,null),!this.state.loading&&this.state.errorGetAuthToken&&o.a.createElement(N.m,null,o.a.createElement(N.h,null,"\u0412\u043e\u0437\u043d\u0438\u043a\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0438 \u0434\u0430\u043d\u043d\u044b\u0445, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u0412\u044b \u043d\u0435 \u0432\u044b\u0434\u0430\u043b\u0438 \u043f\u0440\u0430\u0432\u0430 \u043d\u0430 \u0441\u043f\u0438\u0441\u043e\u043a \u0433\u0440\u0443\u043f\u043f."),o.a.createElement(N.h,null,o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return e.getAuthToken()}},"\u0417\u0430\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043f\u043e\u0432\u0442\u043e\u0440\u043d\u043e"))),!this.state.loading&&!this.state.errorGetAuthToken&&r&&o.a.createElement(N.m,{title:"\u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0435\u043c\u044b\u0435"},o.a.createElement(N.s,null,r)),!this.state.loading&&!this.state.errorGetAuthToken&&c&&o.a.createElement(N.m,{title:"\u041e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435"},o.a.createElement(N.s,null,c)))}}]),t}(o.a.Component);var $=Object(s.b)((function(e){return{accessToken:e.vkui.accessToken}}),(function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({goBack:C,openPopout:H,closePopout:V,openModal:I},e))}))(Q),ee=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(x.a)(this,Object(L.a)(t).call(this,e))).state={activeTab:e.activeTab.EXAMPLE||"modal"},a}return Object(G.a)(t,e),Object(B.a)(t,[{key:"setTab",value:function(e){this.setState({activeTab:e})}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.setScrollPositionByID;(0,e.setActiveTab)("EXAMPLE",this.state.activeTab),t("EXAMPLE_TABS_LIST")}},{key:"componentDidMount",value:function(){!function(){var e=Ee.getState().vkui.componentScroll;Object.keys(e).forEach((function(t){var a=e[t],n=document.getElementById(t);n&&((n=n.getElementsByClassName("HorizontalScroll__in")[0]).scrollLeft=a.x,n.scrollTop=a.y)}))}()}},{key:"render",value:function(){var e=this,t=this.props,a=t.id,n=t.setPage;return o.a.createElement(N.w,{id:a},o.a.createElement(N.x,{noShadow:!0},"Examples 2"),o.a.createElement(N.j,{vertical:"top"},o.a.createElement(N.D,{theme:"header",type:"buttons"},o.a.createElement(N.o,{id:"EXAMPLE_TABS_LIST"},o.a.createElement(N.E,{onClick:function(){return e.setTab("modal")},selected:"modal"===this.state.activeTab},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(N.E,{onClick:function(){return e.setTab("test")},selected:"test"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430"),o.a.createElement(N.E,{onClick:function(){return e.setTab("test2")},selected:"test2"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 2"),o.a.createElement(N.E,{onClick:function(){return e.setTab("test3")},selected:"test3"===this.state.activeTab},"\u0414\u043b\u044f \u0442\u0435\u0441\u0442\u0430 3")))),o.a.createElement(N.m,{style:{marginTop:56}},"modal"===this.state.activeTab&&o.a.createElement(N.e,{onClick:function(){return n("modal","filters")}},"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),"modal"!==this.state.activeTab&&o.a.createElement(N.h,null,this.state.activeTab)))}}]),t}(o.a.Component),te={setPage:A,setActiveTab:function(e,t){return{type:"SET_ACTIVE_TAB",payload:{component:e,tab:t}}},setScrollPositionByID:function(e){return{type:"SET_SCROLL_POSITION_BY_ID",payload:{component:e}}}},ae=Object(s.b)((function(e){return{activeTab:e.vkui.activeTab}}),te)(ee),ne=function(e){function t(e){var a;Object(M.a)(this,t),a=Object(x.a)(this,Object(L.a)(t).call(this,e));var n={workplace:"",workposition:"",checkboxPhoto:0,checkboxOnline:0};return a.state={inputData:e.inputData.example_form||n},a.handleInput=function(e){var t=e.currentTarget.value;"checkbox"===e.currentTarget.type&&(t=e.currentTarget.checked),a.setState({inputData:Object(p.a)({},a.state.inputData,Object(u.a)({},e.currentTarget.name,t))})},a.clearForm=function(){a.setState({inputData:n})},a}return Object(G.a)(t,e),Object(B.a)(t,[{key:"componentWillUnmount",value:function(){this.props.setFormData("example_form",this.state.inputData)}},{key:"render",value:function(){var e=this.props,t=e.id,a=e.goBack;return o.a.createElement(N.w,{id:t},o.a.createElement(N.x,{left:o.a.createElement(N.y,{onClick:function(){return a()}})},"\u041c\u043e\u0434\u0430\u043b\u044c\u043d\u043e\u0435 \u043e\u043a\u043d\u043e"),o.a.createElement(N.m,null,o.a.createElement(N.k,null,o.a.createElement(N.l,{top:"\u0420\u0430\u0431\u043e\u0442\u0430"},o.a.createElement(N.r,{value:this.state.inputData.workplace,onChange:this.handleInput,name:"workplace",placeholder:"\u041c\u0435\u0441\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u044b",autoComplete:"off"}),o.a.createElement(N.r,{value:this.state.inputData.workposition,onChange:this.handleInput,name:"workposition",placeholder:"\u0414\u043e\u043b\u0436\u043d\u043e\u0441\u0442\u044c",autoComplete:"off"})),o.a.createElement(N.l,{top:"\u0414\u043e\u043f\u043e\u043b\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u043e"},o.a.createElement(N.f,{checked:this.state.inputData.checkboxPhoto,onChange:this.handleInput,name:"checkboxPhoto"},"\u0421 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0435\u0439"),o.a.createElement(N.f,{checked:this.state.inputData.checkboxOnline,onChange:this.handleInput,name:"checkboxOnline"},"\u0421\u0435\u0439\u0447\u0430\u0441 \u043d\u0430 \u0441\u0430\u0439\u0442\u0435"))),o.a.createElement(N.h,{className:"buttons-group"},o.a.createElement(N.c,{size:"l",stretched:!0,onClick:function(){return a()}},"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),o.a.createElement(N.c,{size:"l",stretched:!0,onClick:this.clearForm},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c"))))}}]),t}(o.a.Component),oe={setFormData:function(e,t){return{type:"SAVE_FORM_DATA",payload:{form:e,data:t}}},goBack:C},re=Object(s.b)((function(e){return{inputData:e.formData.forms}}),oe)(ne),ce=a(32),ie=a.n(ce),le=a(28),se=a.n(le),ue=a(31),pe=a.n(ue),de=[{name:"VKS",avatar:"https://pp.userapi.com/c851520/v851520442/48ce/Sik7V4c58qw.jpg",desc:"\u041d\u0435\u0442, \u043c\u0435\u043d\u044f \u043d\u0435 \u0440\u043e\u043d\u044f\u043b\u0438 \u0432 \u0434\u0435\u0442\u0441\u0442\u0432\u0435"},{name:"\u041d\u0435\u0434\u043e\u0431\u043e\u0442",avatar:"https://pp.userapi.com/c854420/v854420431/da51/X8ohw4-4Fk4.jpg",desc:"\u042f \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0438\u043b \u043a\u043e\u043a\u043e\u0441\u043e\u0432\u043e\u0435 \u043c\u043e\u043b\u043e\u043a\u043e"},{name:"Callback API \u0411\u043e\u0442",avatar:"https://pp.userapi.com/c846523/v846523036/1e69b7/UxWZ1yAqY7I.jpg",desc:"\u0414\u0430\u0436\u0435 \u043d\u0435 \u0441\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0439"}],me=function(e){function t(){return Object(M.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose,n=e.openModal;return o.a.createElement(N.t,{id:t,header:o.a.createElement(N.u,{left:!N.p&&o.a.createElement(N.n,{onClick:a},o.a.createElement(se.a,null)),right:N.p&&o.a.createElement(N.n,{onClick:a},o.a.createElement(ie.a,null))},"/appbots \u043d\u0430 \u043c\u0438\u043d\u0438\u043c\u0430\u043b\u043a\u0430\u0445"),onClose:a,settlingHeight:80},o.a.createElement(N.s,null,de.map((function(e,t){return o.a.createElement(N.d,{key:t,description:e.desc,before:o.a.createElement(N.b,{size:40,src:e.avatar}),onClick:function(){return n("MODAL_PAGE_BOT_INFO")},asideContent:o.a.createElement(pe.a,{fill:"#528bcc"})},e.name)}))))}}]),t}(o.a.Component),he={openModal:I},ve=Object(s.b)(null,he)(me),be=function(e){function t(){return Object(M.a)(this,t),Object(x.a)(this,Object(L.a)(t).apply(this,arguments))}return Object(G.a)(t,e),Object(B.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.onClose;return o.a.createElement(N.t,{id:t,header:o.a.createElement(N.u,{left:!N.p&&o.a.createElement(N.n,{onClick:a},o.a.createElement(se.a,null)),right:N.p&&o.a.createElement(N.n,{onClick:a},o.a.createElement(ie.a,null))},"\u0418\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f \u043e \u0431\u043e\u0442\u0435"),onClose:a,settlingHeight:80},o.a.createElement(N.d,{description:"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435",before:o.a.createElement(N.b,{size:40,src:"https://vk.com/images/community_100.png?ava=1"})},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),o.a.createElement(N.s,null,o.a.createElement(N.d,null,o.a.createElement(N.q,{title:"\u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"},"8800")),o.a.createElement(N.d,null,o.a.createElement(N.q,{title:"\u0417\u0430\u043f\u0438\u0441\u0435\u0439"},"555")),o.a.createElement(N.d,null,o.a.createElement(N.q,{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433"},"3535"))))}}]),t}(o.a.Component),ye=Object(s.b)()(be),Oe=function(e){function t(e){var a;return Object(M.a)(this,t),(a=Object(x.a)(this,Object(L.a)(t).call(this,e))).lastAndroidBackAction=0,a}return Object(G.a)(t,e),Object(B.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.goBack;(0,t.dispatch)((function(e){h.a.subscribe((function t(a){"VKWebAppUpdateConfig"===a.detail.type&&(h.a.unsubscribe(t),e({type:"SET_COLOR_SCHEME",payload:a.detail.data.scheme}))})),h.a.send("VKWebAppInit",{})})),window.onpopstate=function(){var t=+new Date;t-e.lastAndroidBackAction>500?(e.lastAndroidBackAction=t,a("Android")):window.history.pushState(null,null)}}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,o=n.activeView,r=n.activeStory,c=n.activePanel,i=n.scrollPosition;if(e.activeView!==o||e.activePanel!==c||e.activeStory!==r){var l=i[r+"_"+o+"_"+c]||0;window.scroll(0,l)}}},{key:"render",value:function(){var e=this.props,t=e.goBack,a=e.setStory,n=e.closeModal,r=e.popouts,c=e.activeView,i=e.activeStory,l=e.activePanel,s=e.activeModals,u=e.panelsHistory,p=e.colorScheme,d=void 0===u[c]?[c]:u[c],m=void 0===r[c]?null:r[c],h=void 0===s[c]?null:s[c],v=o.a.createElement(N.v,{activeModal:h},o.a.createElement(ve,{id:"MODAL_PAGE_BOTS_LIST",onClose:function(){return n()}}),o.a.createElement(ye,{id:"MODAL_PAGE_BOT_INFO",onClose:function(){return n()}}));return o.a.createElement(N.g,{isWebView:!0,scheme:p},o.a.createElement(N.i,{activeStory:i,tabbar:o.a.createElement(N.B,null,o.a.createElement(N.C,{onClick:function(){return a("home","base")},selected:"home"===i},o.a.createElement(F.a,null)),o.a.createElement(N.C,{onClick:function(){return a("more","base")},selected:"more"===i},o.a.createElement(W.a,null)))},o.a.createElement(N.A,{id:"home",activeView:c,popout:m},o.a.createElement(N.F,{id:"home",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(Y,{id:"base",withoutEpic:!1}),o.a.createElement($,{id:"groups"}))),o.a.createElement(N.A,{id:"more",activeView:c,popout:m},o.a.createElement(N.F,{id:"more",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(ae,{id:"base"})),o.a.createElement(N.F,{id:"modal",modal:v,activePanel:l,history:d,onSwipeBack:function(){return t()}},o.a.createElement(re,{id:"filters"})))))}}]),t}(o.a.Component);var fe=Object(s.b)((function(e){return{activeView:e.router.activeView,activePanel:e.router.activePanel,activeStory:e.router.activeStory,panelsHistory:e.router.panelsHistory,activeModals:e.router.activeModals,popouts:e.router.popouts,scrollPosition:e.router.scrollPosition,colorScheme:e.vkui.colorScheme}}),(function(e){return Object(p.a)({dispatch:e},Object(i.bindActionCreators)({setStory:_,goBack:C,closeModal:D},e))}))(Oe);a.d(t,"store",(function(){return Ee}));var Ee=Object(i.createStore)(T,Object(P.composeWithDevTools)(Object(i.applyMiddleware)(l.a))),je=function(e){var t={path:e.hash.substr(2)},a=(v.routes.find((function(e){return e.pretty===t.path}))||t).path.split("/");return{activeStory:a[0]||v.startStory,activeView:a[1]||v.startView,activePanel:a[2]||v.startPanel}}(window.location),ge=je.activeStory,Se=je.activeView,ke=je.activePanel;Ee.dispatch(_(ge,ge===Se?ke:v.basePanel)),ge!==Se&&Ee.dispatch(A(Se,ke)),c.a.render(o.a.createElement(s.a,{store:Ee},o.a.createElement(fe,null)),document.getElementById("root"))},86:function(e,t,a){e.exports=a(107)},96:function(e,t,a){}},[[86,1,2]]]);
//# sourceMappingURL=main.45a32ba6.chunk.js.map
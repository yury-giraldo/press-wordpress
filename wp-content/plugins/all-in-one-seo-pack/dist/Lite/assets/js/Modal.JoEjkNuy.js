import{t as b}from"./postSlug.CqYKoIBF.js";import{_ as D}from"./ScoreButton.CYslBSvp.js";import{A as $}from"./App.CXV-yEZw.js";import{S}from"./Caret.iRBf3wcH.js";import{o as n,c as l,q as m,d as c,x as i,l as g,m as w,a as s,H as M,G as A,t as C,C as _}from"./vue.esm-bundler.CWQFYt9y.js";import{_ as f}from"./_plugin-vue_export-helper.BN1snXvA.js";const k={props:{completelyDraggable:{type:Boolean,default(){return!0}}},data(){return{position1:0,position2:0,position3:0,position4:0}},methods:{dragMouseDown(e){e=e||window.event,e.preventDefault(),this.position3=e.clientX,this.position4=e.clientY,document.onmousemove=this.elementDrag,document.onmouseup=this.closeDragElement},elementDrag(e){e=e||window.event,e.preventDefault(),this.position1=this.position3-e.clientX,this.position2=this.position4-e.clientY,this.position3=e.clientX,this.position4=e.clientY,this.$el.style.top=this.$el.offsetTop-this.position2+"px",this.$el.style.left=this.$el.offsetLeft-this.position1+"px"},closeDragElement(){document.onmouseup=null,document.onmousemove=null}}},x={class:"aioseo-draggable"},B={key:1};function O(e,o,t,u,d,a){return n(),l("div",x,[t.completelyDraggable?(n(),l("div",{key:0,"on:dragMouseDown":o[0]||(o[0]=(...r)=>a.dragMouseDown&&a.dragMouseDown(...r))},[m(e.$slots,"default")],32)):c("",!0),t.completelyDraggable?c("",!0):(n(),l("div",B,[m(e.$slots,"default")]))])}const E=f(k,[["render",O]]),N={setup(){return{truSeoShouldAnalyze:b}},emits:["update:is-open"],components:{CoreScoreButton:D,PostSettings:$,SvgClose:S,UtilDraggable:E},props:{isOpen:{type:Boolean,default:!1},score:{type:Number,default:0}},data(){return{strings:{header:this.$t.sprintf(this.$t.__("%1$s Settings",this.$td),"AIOSEO")}}},methods:{toggleModal(){this.isOpen=!this.isOpen}}},P={class:"aioseo-pagebuilder-modal-header-title"},z={class:"aioseo-pagebuilder-modal-body edit-post-sidebar"};function L(e,o,t,u,d,a){const r=i("core-score-button"),h=i("svg-close"),y=i("PostSettings"),v=i("util-draggable");return n(),g(v,{ref:"modal-container",completelyDraggable:!1},{default:w(()=>[s("div",{class:M(["aioseo-pagebuilder-modal",{"aioseo-pagebuilder-modal-is-closed":!t.isOpen}])},[s("div",{class:"aioseo-pagebuilder-modal-header",onMousedown:o[1]||(o[1]=A(p=>e.$refs["modal-container"].dragMouseDown(p),["prevent"]))},[s("div",P,C(d.strings.header),1),t.score&&u.truSeoShouldAnalyze()?(n(),g(r,{key:0,score:t.score,class:"aioseo-score-button--active"},null,8,["score"])):c("",!0),s("div",{class:"aioseo-pagebuilder-modal-header-close",onClick:o[0]||(o[0]=p=>e.$emit("update:is-open",!1))},[_(h)])],32),s("div",z,[_(y)])],2)]),_:1},512)}const G=f(N,[["render",L],["__scopeId","data-v-6505cd39"]]);export{G as M};

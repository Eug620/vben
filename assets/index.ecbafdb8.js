import{V as n,$ as s,P as a,Q as e,b2 as o,R as t,a1 as c,k as i,aV as l,be as r,aT as f,a2 as u,a7 as h,a3 as d,S as p,bh as b,T as g,U as m,bi as v,bj as x,bk as y,bl as w,a8 as C}from"./index.12c9c6d9.js";function P(n,s,a){return s in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a,n}var A={success:p,info:b,error:g,warning:m},T={success:v,info:x,error:y,warning:w},j={name:"AAlert",props:{type:n.oneOf(["success","info","warning","error"]),closable:n.bool,closeText:n.any,message:n.any,description:n.any,afterClose:n.func.def((function(){})),showIcon:n.bool,prefixCls:n.string,banner:n.bool,icon:n.any,onClose:n.func},mixins:[s],setup:function(){return{configProvider:a("configProvider",e)}},data:function(){return{closing:!1,closed:!1}},methods:{handleClose:function(n){n.preventDefault();var s=o(this);s.style.height="".concat(s.offsetHeight,"px"),s.style.height="".concat(s.offsetHeight,"px"),this.setState({closing:!0}),this.$emit("close",n)},animationEnd:function(){this.setState({closing:!1,closed:!0}),this.afterClose()}},render:function(){var n,s=this.prefixCls,a=this.banner,e=this.closing,o=this.closed,p=(0,this.configProvider.getPrefixCls)("alert",s),b=this.closable,g=this.type,m=this.showIcon,v=t(this,"closeText"),x=t(this,"description"),y=t(this,"message"),w=t(this,"icon");m=!(!a||void 0!==m)||m;var j=(x?T:A)[g=a&&void 0===g?"warning":g||"info"]||null;v&&(b=!0);var k=c(p,(P(n={},"".concat(p,"-").concat(g),!0),P(n,"".concat(p,"-closing"),e),P(n,"".concat(p,"-with-description"),!!x),P(n,"".concat(p,"-no-icon"),!m),P(n,"".concat(p,"-banner"),!!a),P(n,"".concat(p,"-closable"),b),n)),S=b?i("a",{type:"button",onClick:this.handleClose,class:"".concat(p,"-close-icon"),tabindex:0},[v?i("span",{class:"".concat(p,"-close-text")},[v]):i(l,null,null)]):null,E=w&&(r(w)?f(w,{class:"".concat(p,"-icon")}):i("span",{class:"".concat(p,"-icon")},[w]))||i(j,{class:"".concat(p,"-icon")},null),H=u("".concat(p,"-slide-up"),{appear:!1,onAfterLeave:this.animationEnd});return o?null:i(d,H,{default:function(){return[h(i("div",{class:k,"data-show":!e},[m?E:null,i("span",{class:"".concat(p,"-message")},[y]),i("span",{class:"".concat(p,"-description")},[x]),S]),[[C,!e]])]}})},install:function(n){n.component(j.name,j)}};export{j as A};

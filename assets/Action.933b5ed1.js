let s=document.createElement("style");s.innerHTML=".scroll-wrap[data-v-6aa17979]{width:50%;height:300px;background:#fff}",document.head.appendChild(s);import{d as l,r as o,u as a,p as t,h as r,i as e,o as c,j as n,k as i,ad as d,F as p,l as m,w as f,n as u}from"./index.12c9c6d9.js";import"./BasicTitle.a1ecdb29.js";import{A as b}from"./index.ecbafdb8.js";import"./domUtils.0cbdb707.js";import{b as j,s as C}from"./LazyContainer.8b895cd0.js";import"./RightOutlined.b9f0697b.js";import"./tsxHelper.629ff8d8.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";var v=l({components:{CollapseContainer:j,ScrollContainer:C,Alert:b},setup(){const s=o(null),l=()=>{const l=a(s);if(!l)throw new Error("scroll is Null");return l};return{scrollTo:function(s){l().scrollTo(s)},scrollRef:s,scrollBottom:function(){l().scrollBottom()}}}});const h=f("data-v-6aa17979");t("data-v-6aa17979");const x={class:"p-4"},k={class:"my-4"},w=u("滚动到100px位置"),T=u("滚动到800px位置"),_=u("滚动到顶部"),g=u("滚动到底部"),y={class:"scroll-wrap"},R={class:"p-3"};r();const B=h((function(s,l,o,a,t,r){const f=e("Alert"),u=e("a-button"),b=e("ScrollContainer");return c(),n("div",x,[i(f,{message:"抽取el-scrollbar，并对其进行扩展,滚动条美化,适用于各个浏览器",type:"info"}),i("div",k,[i(u,{onClick:l[1]||(l[1]=l=>s.scrollTo(100)),class:"mr-2"},{default:h((()=>[w])),_:1}),i(u,{onClick:l[2]||(l[2]=l=>s.scrollTo(800)),class:"mr-2"},{default:h((()=>[T])),_:1}),i(u,{onClick:l[3]||(l[3]=l=>s.scrollTo(0)),class:"mr-2"},{default:h((()=>[_])),_:1}),i(u,{onClick:l[4]||(l[4]=l=>s.scrollBottom()),class:"mr-2"},{default:h((()=>[g])),_:1})]),i("div",y,[i(b,{class:"mt-4",ref:"scrollRef"},{default:h((()=>[i("ul",R,[(c(),n(d,null,p(100,(s=>i("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])}));v.render=B,v.__scopeId="data-v-6aa17979";export default v;

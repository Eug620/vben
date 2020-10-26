import{cU as e,y as t,d as r,i,o as a,j as o,G as s,H as n,k as l,cV as d,r as c,q as u,aI as m,b3 as p,aE as f,ad as j,F as b,a7 as g,n as x,a8 as E}from"./index.12c9c6d9.js";import"./SettingOutlined.6fe36f24.js";import{T as w}from"./index.9ea1671f.js";import"./BasicTitle.a1ecdb29.js";import"./warning.3d104fc3.js";import"./CheckOutlined.fc7064a8.js";import"./LeftOutlined.7ad0938f.js";import"./BasicForm.9ddc1ce5.js";import"./openAnimation.66a3bb9f.js";import"./UpOutlined.1f668769.js";import"./index.2ca7384a.js";import"./DownOutlined.4d5bd59b.js";import"./domUtils.0cbdb707.js";import"./index.804035b7.js";import"./index.1dca91a5.js";import{s as R,T as h}from"./EditTableHeaderIcon.0fc12d80.js";import"./CaretDownFilled.801e78c8.js";import"./LazyContainer.8b895cd0.js";import{D as I,u as C}from"./useDescription.563b7285.js";import"./CheckOutlined.50516744.js";import"./CloseOutlined.37d2ceb1.js";import"./FullscreenOutlined.5c776816.js";import"./LeftOutlined.71b4f895.js";import"./RightOutlined.b9f0697b.js";import"./index.6748a653.js";import"./tsxHelper.629ff8d8.js";import"./useFullScreen.f7fa195f.js";import{B as k,a as y}from"./useModal.2524d42a.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";import"./useWindowSize.8d67cb61.js";import"./uuid.51fc09fb.js";import"./index.4994a32d.js";import"./useForm.873e3e73.js";import"./functional.5214b2c7.js";import"./index.f03933e0.js";import{u as D}from"./useTable.9042e3b3.js";function O(){return[{dataIndex:"type",title:"类型",width:80,customRender:({text:r})=>{const i=r===e.VUE?"green":r===e.RESOURCE?"cyan":r===e.PROMISE?"blue":e.AJAX?"red":"purple";return t(w,{color:i},(()=>r))}},{dataIndex:"url",title:"地址",width:200},{dataIndex:"time",title:"时间",width:160},{dataIndex:"file",title:"文件",width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:"错误信息",width:300},{dataIndex:"stack",title:"stack信息",width:300}]}var T,M=r({name:"ErrorLogDetailModal",components:{BasicModal:k,Description:I},props:{info:{type:Object,default:null}},setup(){const[e]=C({column:2,schema:O().map((e=>({field:e.dataIndex,label:e.title})))});return{register:e}}});M.render=function(e,t,r,d,c,u){const m=i("Description"),p=i("BasicModal");return a(),o(p,s({width:800,title:"错误详情"},e.$attrs),{default:n((()=>[l(m,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16)},(T||(T={})).Error="/error";var v=r({name:"ErrorHandler",components:{DetailModal:M,BasicTable:R,TableAction:h},setup(){const e=c(),t=c([]),[r,{setTableData:i}]=D({titleHelpMessage:"只在`/src/settings/projectSetting.ts` 内的useErrorHandle=true时生效！",title:"错误日志列表",columns:O(),actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}}),[a,{openModal:o}]=y();return u((()=>f.getErrorInfoState),(e=>{m((()=>{i(p(e))}))}),{immediate:!0}),{register:r,registerModal:a,handleDetail:function(t){e.value=t,o(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){t.value.push((new Date).getTime()+".png")},fireAjaxError:async function(){await d.request({url:T.Error,method:"GET"})},imgListRef:t,rowInfoRef:e}}});const A={class:"p-4"},B=x(" 点击触发vue错误 "),S=x(" 点击触发resource错误 "),F=x(" 点击触发ajax错误 ");v.render=function(e,t,r,s,d,c){const u=i("DetailModal"),m=i("a-button"),p=i("TableAction"),f=i("BasicTable");return a(),o("div",A,[(a(!0),o(j,null,b(e.imgListRef,(e=>g((a(),o("img",{key:e,src:e},null,8,["src"])),[[E,!1]]))),128)),l(u,{info:e.rowInfoRef,onRegister:e.registerModal},null,8,["info","onRegister"]),l(f,{onRegister:e.register,class:"error-handle-table"},{toolbar:n((()=>[l(m,{onClick:e.fireVueError,type:"primary"},{default:n((()=>[B])),_:1},8,["onClick"]),l(m,{onClick:e.fireResourceError,type:"primary"},{default:n((()=>[S])),_:1},8,["onClick"]),l(m,{onClick:e.fireAjaxError,type:"primary"},{default:n((()=>[F])),_:1},8,["onClick"])])),action:n((({record:t})=>[l(p,{actions:[{label:"详情",onClick:e.handleDetail.bind(null,t)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default v;

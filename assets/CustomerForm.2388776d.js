import{d as e,cX as s,bn as t,g as i,i as o,o as r,j as n,k as a,H as l}from"./index.12c9c6d9.js";import"./index.9ea1671f.js";import"./BasicTitle.a1ecdb29.js";import"./warning.3d104fc3.js";import"./CheckOutlined.fc7064a8.js";import"./LeftOutlined.7ad0938f.js";import{s as d}from"./BasicForm.9ddc1ce5.js";import"./UpOutlined.1f668769.js";import"./index.2ca7384a.js";import"./DownOutlined.4d5bd59b.js";import"./domUtils.0cbdb707.js";import{b as m}from"./LazyContainer.8b895cd0.js";import"./RightOutlined.b9f0697b.js";import"./tsxHelper.629ff8d8.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";import"./index.4994a32d.js";import{u as p}from"./useForm.873e3e73.js";const c=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:i})=>s(t,{placeholder:"请输入",value:e[i],onChange:s=>{e[i]=s.target.value}})},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})}];var u=e({components:{BasicForm:d,CollapseContainer:m},setup(){const{createMessage:e}=i(),[s,{setProps:t}]=p({labelWidth:120,schemas:c,actionColOptions:{span:24}});return{register:s,schemas:c,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps:t}}});const f={class:"m-4"},j=a("div",{class:"mb-4"},null,-1);u.render=function(e,s,t,i,d,m){const p=o("BasicForm"),c=o("CollapseContainer");return r(),n("div",f,[j,a(c,{title:"自定义表单"},{default:l((()=>[a(p,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])};export default u;

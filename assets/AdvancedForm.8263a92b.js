import{d as e,i as o,o as l,j as t,k as n,H as s}from"./index.12c9c6d9.js";import"./index.9ea1671f.js";import"./BasicTitle.a1ecdb29.js";import"./warning.3d104fc3.js";import"./CheckOutlined.fc7064a8.js";import"./LeftOutlined.7ad0938f.js";import{s as i}from"./BasicForm.9ddc1ce5.js";import"./UpOutlined.1f668769.js";import"./index.2ca7384a.js";import"./DownOutlined.4d5bd59b.js";import"./domUtils.0cbdb707.js";import{b as a}from"./LazyContainer.8b895cd0.js";import"./RightOutlined.b9f0697b.js";import"./tsxHelper.629ff8d8.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";import"./index.4994a32d.js";import{u as p}from"./useForm.873e3e73.js";const r=()=>[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{console.log(e)}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var c=e({components:{BasicForm:i,CollapseContainer:a},setup(){const[e]=p({labelWidth:120,schemas:r(),actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=p({labelWidth:120,schemas:[...r(),{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const d={class:"m-4"};c.render=function(e,i,a,p,r,c){const m=o("BasicForm"),f=o("CollapseContainer");return l(),t("div",d,[n(f,{title:"基础收缩示例"},{default:s((()=>[n(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),n(f,{title:"超过3行自动收起",class:"mt-4"},{default:s((()=>[n(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default c;

import{d as e,i as o,o as t,j as i,k as s,H as r,n as a}from"./index.12c9c6d9.js";import"./SettingOutlined.6fe36f24.js";import"./index.9ea1671f.js";import"./BasicTitle.a1ecdb29.js";import"./warning.3d104fc3.js";import"./CheckOutlined.fc7064a8.js";import"./LeftOutlined.7ad0938f.js";import"./BasicForm.9ddc1ce5.js";import"./openAnimation.66a3bb9f.js";import"./UpOutlined.1f668769.js";import"./index.2ca7384a.js";import"./DownOutlined.4d5bd59b.js";import"./domUtils.0cbdb707.js";import"./index.804035b7.js";import"./index.1dca91a5.js";import{s as d}from"./EditTableHeaderIcon.0fc12d80.js";import"./CaretDownFilled.801e78c8.js";import"./LazyContainer.8b895cd0.js";import"./CheckOutlined.50516744.js";import"./CloseOutlined.37d2ceb1.js";import"./FullscreenOutlined.5c776816.js";import"./LeftOutlined.71b4f895.js";import"./RightOutlined.b9f0697b.js";import"./index.6748a653.js";import"./tsxHelper.629ff8d8.js";import"./useFullScreen.f7fa195f.js";import{a as n}from"./useModal.2524d42a.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";import"./useWindowSize.8d67cb61.js";import"./uuid.51fc09fb.js";import"./index.4994a32d.js";import"./useForm.873e3e73.js";import"./functional.5214b2c7.js";import"./index.f03933e0.js";import{s as c}from"./ExportExcelModel.3acc7af4.js";import{c as m,d as l,j as p}from"./data.8e4c1ff1.js";var f=e({components:{BasicTable:d,ExportExcelModel:c},setup(){const[e,{openModal:o}]=n();return{defaultHeader:function({filename:e,bookType:o}){p({data:l,filename:e,write2excelOpts:{bookType:o}})},columns:m,data:l,register:e,openModal:o}}});const j={class:"m-4"},u=a("导出");f.render=function(e,a,d,n,c,m){const l=o("a-button"),p=o("BasicTable"),f=o("ExportExcelModel");return t(),i("div",j,[s(p,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:r((()=>[s(l,{onClick:e.openModal},{default:r((()=>[u])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"]),s(f,{onRegister:e.register,onSuccess:e.defaultHeader},null,8,["onRegister","onSuccess"])])};export default f;

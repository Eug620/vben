import{d as e,r as t,g as a,u as n,i as s,o as l,j as c,k as d,H as o,n as i}from"./index.12c9c6d9.js";import"./BasicTitle.a1ecdb29.js";import"./warning.3d104fc3.js";import"./openAnimation.66a3bb9f.js";import"./DownOutlined.4d5bd59b.js";import"./domUtils.0cbdb707.js";import"./CaretDownFilled.801e78c8.js";import{B as r,t as u}from"./data.68c7a996.js";import{b as p}from"./LazyContainer.8b895cd0.js";import"./RightOutlined.b9f0697b.js";import"./index.6748a653.js";import"./tsxHelper.629ff8d8.js";import"./useRaf.e461562f.js";import"./triggerWindowResizeEvent.3d263439.js";import"./useContextMenu.90ddb538.js";var f=e({components:{BasicTree:r,CollapseContainer:p},setup(){const e=t(null),{createMessage:s}=a();function l(){const t=n(e);if(!t)throw new Error("tree is null!");return t.$}return{treeData:u,treeRef:e,handleLevel:function(e){l().filterByLevel(e)},handleSetCheckData:function(){l().setCheckedKeys(["0-0"])},handleGetCheckData:function(){const e=l().getCheckedKeys();s.success(JSON.stringify(e))},handleSetSelectData:function(){l().setSelectedKeys(["0-0"])},handleGetSelectData:function(){const e=l().getSelectedKeys();s.success(JSON.stringify(e))},handleSetExpandData:function(){l().setExpandedKeys(["0-0"])},handleGetExpandData:function(){const e=l().getExpandedKeys();s.success(JSON.stringify(e))},appendNodeByKey:function(e=null){l().insertNodeByKey({parentKey:e,node:{title:"新增节点",key:"2-2-2"},push:"push"})},deleteNodeByKey:function(e){l().deleteNodeByKey(e)},updateNodeByKey:function(e){l().updateNodeByKey(e,{title:"parent2-new"})}}}});const m={class:"p-4"},y={class:"mb-4"},C=i("显示到第2级"),h=i("显示到第1级"),k=i("设置勾选数据"),D=i("获取勾选数据"),K=i("设置选中数据"),b=i("获取选中数据"),j=i("设置展开数据"),B=i("获取展开数据"),S={class:"mb-4"},N=i("添加根节点"),_=i("添加在parent3内添加节点"),g=i("删除parent3节点"),x=i("更新parent2节点");f.render=function(e,t,a,n,i,r){const u=s("a-button"),p=s("BasicTree"),f=s("CollapseContainer");return l(),c("div",m,[d("div",y,[d(u,{onClick:t[1]||(t[1]=t=>e.handleLevel(2)),class:"mr-2"},{default:o((()=>[C])),_:1}),d(u,{onClick:t[2]||(t[2]=t=>e.handleLevel(1)),class:"mr-2"},{default:o((()=>[h])),_:1}),d(u,{onClick:e.handleSetCheckData,class:"mr-2"},{default:o((()=>[k])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetCheckData,class:"mr-2"},{default:o((()=>[D])),_:1},8,["onClick"]),d(u,{onClick:e.handleSetSelectData,class:"mr-2"},{default:o((()=>[K])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetSelectData,class:"mr-2"},{default:o((()=>[b])),_:1},8,["onClick"]),d(u,{onClick:e.handleSetExpandData,class:"mr-2"},{default:o((()=>[j])),_:1},8,["onClick"]),d(u,{onClick:e.handleGetExpandData,class:"mr-2"},{default:o((()=>[B])),_:1},8,["onClick"])]),d("div",S,[d(u,{onClick:t[3]||(t[3]=t=>e.appendNodeByKey(null)),class:"mr-2"},{default:o((()=>[N])),_:1}),d(u,{onClick:t[4]||(t[4]=t=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[_])),_:1}),d(u,{onClick:t[5]||(t[5]=t=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:o((()=>[g])),_:1}),d(u,{onClick:t[6]||(t[6]=t=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:o((()=>[x])),_:1})]),d(f,{title:"函数操作",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:o((()=>[d(p,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])])),_:1})])};export default f;

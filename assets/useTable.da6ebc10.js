import{cW as e,r as t,bW as a,e as o,cX as n,d8 as s,aT as l,cR as i}from"./index.8d47259d.js";function g(g){e();const c=t(null),r=t(!1),u=t(null);function d(){const e=o(c);return e||i("The table instance has not been obtained yet, please make sure the table is presented when performing the table operation!"),e}return[function(e,t){a((()=>{c.value=null,r.value=null})),o(r)&&n()&&e===o(c)||(c.value=e,u.value=t,g&&e.setProps(s(g)),r.value=!0,l((()=>g),(()=>{g&&e.setProps(s(g))}),{immediate:!0,deep:!0}))},{reload:async e=>{d().reload(e)},setProps:e=>{d().setProps(e)},redoHeight:()=>{d().redoHeight()},setLoading:e=>{d().setLoading(e)},getDataSource:()=>d().getDataSource(),getColumns:({ignoreIndex:e=!1}={})=>d().getColumns({ignoreIndex:e})||[],setColumns:e=>{d().setColumns(e)},setTableData:e=>d().setTableData(e),setPagination:e=>d().setPagination(e),deleteSelectRowByKey:e=>{d().deleteSelectRowByKey(e)},getSelectRowKeys:()=>d().getSelectRowKeys(),getSelectRows:()=>d().getSelectRows(),clearSelectedRowKeys:()=>{d().clearSelectedRowKeys()},setSelectedRowKeys:e=>{d().setSelectedRowKeys(e)},getPaginationRef:()=>d().getPaginationRef(),getSize:()=>d().getSize(),updateTableData:(e,t,a)=>d().updateTableData(e,t,a),getRowSelection:()=>d().getRowSelection(),getCacheColumns:()=>d().getCacheColumns(),getForm:()=>o(u),setShowPagination:async e=>{d().setShowPagination(e)},getShowPagination:()=>d().getShowPagination()}]}export{g as u};

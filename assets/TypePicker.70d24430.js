import{d as e,b1 as t,aK as s,cp as a,cq as i,h as l,o as n,i as p,aL as r,aM as c,j as d,bw as o}from"./index.8d47259d.js";/* empty css              */import"./vendor.3b1829c7.js";var f=e({name:"MenuTypePicker",components:{Tooltip:t},props:{menuTypeList:{type:Array,defualt:()=>[]},handler:{type:Function,default:()=>{}},def:{type:String,default:""}},setup(){const{prefixCls:e}=s("setting-menu-type-picker");return{prefixCls:e}}});const m=o("data-v-c5cf2698");a("data-v-c5cf2698");const u=d("div",{class:"mix-sidebar"},null,-1);i();const y=m(((e,t,s,a,i,o)=>{const f=l("Tooltip");return n(),p("div",{class:e.prefixCls},[(n(!0),p(r,null,c(e.menuTypeList||[],(t=>(n(),p(f,{key:t.title,title:t.title,placement:"bottom"},{default:m((()=>[d("div",{onClick:s=>e.handler(t),class:[`${e.prefixCls}__item`,`${e.prefixCls}__item--${t.type}`,{[`${e.prefixCls}__item--active`]:e.def===t.type}]},[u],10,["onClick"])])),_:2},1032,["title"])))),128))],2)}));f.render=y,f.__scopeId="data-v-c5cf2698";export default f;

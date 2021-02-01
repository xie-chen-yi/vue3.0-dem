import{d as e,aV as a,aW as l,aK as t,K as s,h as r,o as n,i,w as o,l as d,k as p,aL as u,m as c}from"./index.8d47259d.js";import"./vendor.3b1829c7.js";var m=e({name:"TableHeaderCell",components:{EditTableHeaderCell:a((()=>l((()=>import("./index.b9a839fb.js").then((function(e){return e.E}))),["/assets/index.b9a839fb.js","/assets/index.9209d209.css","/assets/index.20066e29.css","/assets/index.8d47259d.js","/assets/index.8ded3aef.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.b469a9ef.js","/assets/index.b7c86965.css","/assets/SearchOutlined.d8605098.js","/assets/CheckOutlined.6d03f126.js","/assets/DownOutlined.9a820ce4.js","/assets/index.504f71eb.js","/assets/index.8b08ebc9.css","/assets/index.a58d597a.js","/assets/index.1398ca0b.css","/assets/index.536a9ea9.js","/assets/index.0edc9df2.css","/assets/responsiveObserve.c545f1cc.js","/assets/findIndex.33bd45d6.js","/assets/isEqual.ffb3460c.js","/assets/_baseProperty.74f89655.js","/assets/toInteger.27c519d9.js","/assets/index.7f13caf3.js","/assets/index.3961b9e0.js","/assets/index.7539d1cb.css","/assets/EyeOutlined.9a4d07ec.js","/assets/index.c9ca5f2c.js","/assets/index.5beb69af.css","/assets/colors.dd4ad3f2.js","/assets/index.ec9c374a.js","/assets/index.d51c3be5.css","/assets/UpOutlined.95ad411b.js","/assets/index.f5c06edb.js","/assets/index.ade313ee.css","/assets/RightOutlined.23eff149.js","/assets/RedoOutlined.b6b87535.js","/assets/index.2acdbd5b.js","/assets/index.07a41ec6.css","/assets/EllipsisOutlined.ac143bad.js","/assets/types.0ac09200.js","/assets/Tree.b4631d72.js","/assets/util.1b616812.js","/assets/useAttrs.34eee9f3.js","/assets/uuid.0a03c18e.js","/assets/uuid.7f4ed3d7.css","/assets/index.e5edd96c.js","/assets/index.372f1347.css","/assets/DeleteOutlined.a59dead9.js","/assets/index.01cab755.js","/assets/index.7b8671b1.css","/assets/index.8ced19a3.js","/assets/index.4d45b084.css","/assets/useTimeout.b2057379.js","/assets/useWindowSizeFn.3ba76d97.js","/assets/index.f0041cf8.js","/assets/index.aa7ae4c0.css","/assets/index.be6382ea.js","/assets/index.121e7eba.css","/assets/domUtils.958d292f.js","/assets/_stringToArray.60f5614b.js","/assets/useScrollTo.c394ad0f.js","/assets/animation.8dadcc24.js","/assets/FullscreenOutlined.937dc91b.js","/assets/index.481b27de.js","/assets/index.2b38113f.css","/assets/index.e522e81d.js","/assets/index.cf2978a3.js","/assets/index.5e8b94d8.css","/assets/LeftOutlined.4109bee3.js","/assets/download.a4b42605.js","/assets/index.61a494b6.js","/assets/index.1fd40226.css","/assets/DoubleLeftOutlined.46581461.js","/assets/DoubleRightOutlined.b467a1b1.js","/assets/zh_CN.8094f4d6.js","/assets/scrollTo.c1e0f75f.js","/assets/transButton.aa4c77a9.js","/assets/CaretDownFilled.11b38519.js","/assets/clickOutside.b82a3ad8.js","/assets/useSortable.e8cd0a53.js","/assets/SettingOutlined.4d5b6906.js","/assets/useExpose.baa75a2d.js","/assets/useForm.ae3bffc7.js"]))),BasicHelp:a((()=>l((()=>import("./BasicHelp.22a9e44a.js")),["/assets/BasicHelp.22a9e44a.js","/assets/index.20066e29.css","/assets/index.f0041cf8.js","/assets/index.aa7ae4c0.css","/assets/index.8d47259d.js","/assets/index.8ded3aef.css","/assets/vendor.3b1829c7.js","/assets/vendor.4a5fa02d.css","/assets/index.be6382ea.js","/assets/index.121e7eba.css","/assets/domUtils.958d292f.js","/assets/_stringToArray.60f5614b.js","/assets/RightOutlined.23eff149.js","/assets/useTimeout.b2057379.js","/assets/useScrollTo.c394ad0f.js","/assets/animation.8dadcc24.js"])))},props:{column:{type:Object,default:{}}},setup(e){const{prefixCls:a}=t("basic-table-header-cell");return{prefixCls:a,getIsEdit:s((()=>{var a;return!!(null==(a=e.column)?void 0:a.edit)})),getTitle:s((()=>{var a;return null==(a=e.column)?void 0:a.customTitle})),getHelpMessage:s((()=>{var a;return null==(a=e.column)?void 0:a.helpMessage}))}}});const _={key:1};m.render=function(e,a,l,t,s,m){const g=r("EditTableHeaderCell"),f=r("BasicHelp");return n(),i(u,null,[e.getIsEdit?(n(),i(g,{key:0},{default:o((()=>[c(d(e.getTitle),1)])),_:1})):(n(),i("span",_,d(e.getTitle),1)),e.getHelpMessage?(n(),i(f,{key:2,text:e.getHelpMessage,class:`${e.prefixCls}__help`},null,8,["text","class"])):p("",!0)],64)};export default m;

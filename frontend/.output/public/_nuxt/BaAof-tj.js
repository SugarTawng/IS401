import{s as r}from"./BvNob-ru.js";import{W as i,o as s,c as n,a4 as a,a3 as p}from"./DaYTUSRu.js";var c={root:function(t){var o=t.props;return["p-icon-field",{"p-icon-field-right":o.iconPosition==="right","p-icon-field-left":o.iconPosition==="left"}]}},l=i.extend({name:"iconfield",classes:c}),d={name:"BaseIconField",extends:r,props:{iconPosition:{type:String,default:"right"}},style:l,provide:function(){return{$parentInstance:this}}},f={name:"IconField",extends:d,inheritAttrs:!1};function m(e,t,o,u,v,$){return s(),n("div",p({class:e.cx("root")},e.ptmi("root")),[a(e.$slots,"default")],16)}f.render=m;export{f as default};

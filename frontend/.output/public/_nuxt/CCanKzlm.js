import{O as K}from"./DgsDTnHf.js";import{s as T}from"./o9EcI8hj.js";import{W as D,X as z,a3 as l,a1 as H,m as F,o as r,c as u,a as O,k as V,g as b,A as B,a5 as L,l as f,t as A,Y as C,Z as g,$ as o,a0 as R,a2 as x,w,b as N,a6 as U,a4 as I,F as h,B as S,d as Z}from"./DaYTUSRu.js";import{s as E}from"./BvNob-ru.js";var W={root:function(e){var i=e.instance,s=e.props;return["p-menu p-component",{"p-menu-overlay":s.popup,"p-ripple-disabled":i.$primevue.config.ripple===!1}]},start:"p-menu-start",menu:"p-menu-list p-reset",submenuHeader:"p-submenu-header",separator:"p-menuitem-separator",end:"p-menu-end",menuitem:function(e){var i=e.instance;return["p-menuitem",{"p-focus":i.id===i.focusedOptionId,"p-disabled":i.disabled()}]},content:"p-menuitem-content",action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},j=D.extend({name:"menu",classes:W}),q={name:"BaseMenu",extends:E,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:j,provide:function(){return{$parentInstance:this}}},P={name:"Menuitem",hostName:"Menu",extends:E,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,i){return e&&e.item?z.getItemValue(e.item[i]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var i=this.getItemProp(this.item,"command");i&&i({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:l({class:this.cx("action"),tabindex:"-1","aria-hidden":!0},this.getPTOptions("action")),icon:l({class:[this.cx("icon"),e.icon]},this.getPTOptions("icon")),label:l({class:this.cx("label")},this.getPTOptions("label"))}}},directives:{ripple:H}},X=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled"],Y=["href","target"];function G(t,e,i,s,d,n){var y=F("ripple");return n.visible()?(r(),u("li",l({key:0,id:i.id,class:[t.cx("menuitem"),i.item.class],role:"menuitem",style:i.item.style,"aria-label":n.label(),"aria-disabled":n.disabled()},n.getPTOptions("menuitem"),{"data-p-focused":n.isItemFocused(),"data-p-disabled":n.disabled()||!1}),[O("div",l({class:t.cx("content"),onClick:e[0]||(e[0]=function(p){return n.onItemClick(p)}),onMousemove:e[1]||(e[1]=function(p){return n.onItemMouseMove(p)})},n.getPTOptions("content")),[i.templates.item?i.templates.item?(r(),b(L(i.templates.item),{key:1,item:i.item,label:n.label(),props:n.getMenuItemProps(i.item)},null,8,["item","label","props"])):f("",!0):V((r(),u("a",l({key:0,href:i.item.url,class:t.cx("action"),target:i.item.target,tabindex:"-1","aria-hidden":"true"},n.getPTOptions("action")),[i.templates.itemicon?(r(),b(L(i.templates.itemicon),{key:0,item:i.item,class:B(t.cx("icon"))},null,8,["item","class"])):i.item.icon?(r(),u("span",l({key:1,class:[t.cx("icon"),i.item.icon]},n.getPTOptions("icon")),null,16)):f("",!0),O("span",l({class:t.cx("label")},n.getPTOptions("label")),A(n.label()),17)],16,Y)),[[y]])],16)],16,X)):f("",!0)}P.render=G;function M(t){return $(t)||_(t)||Q(t)||J()}function J(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Q(t,e){if(t){if(typeof t=="string")return k(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);if(i==="Object"&&t.constructor&&(i=t.constructor.name),i==="Map"||i==="Set")return Array.from(t);if(i==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return k(t,e)}}function _(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function $(t){if(Array.isArray(t))return k(t)}function k(t,e){(e==null||e>t.length)&&(e=t.length);for(var i=0,s=new Array(e);i<e;i++)s[i]=t[i];return s}var ee={name:"Menu",extends:q,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{id:this.$attrs.id,overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},watch:{"$attrs.id":function(e){this.id=e||C()}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.id=this.id||C(),this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&g.clear(this.container),this.container=null},methods:{itemClick:function(e){var i=e.item;this.disabled(i)||(i.command&&i.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(o.focus(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var i=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)o.focus(this.target),this.hide(),e.preventDefault();else{var i=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(i),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(o.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var i=o.findSingle(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=i&&o.findSingle(i,'a[data-pc-section="action"]');this.popup&&o.focus(this.target),s?s.click():i&&i.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var i=o.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=M(i).findIndex(function(d){return d.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var i=o.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=M(i).findIndex(function(d){return d.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var i=o.find(this.container,'li[data-pc-section="menuitem"][data-p-disabled="false"]'),s=e>=i.length?i.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=i[s].getAttribute("id"))},toggle:function(e){this.overlayVisible?this.hide():this.show(e)},show:function(e){this.overlayVisible=!0,this.target=e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){o.addStyles(e,{position:"absolute",top:"0",left:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&g.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&o.focus(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&g.clear(e)},alignOverlay:function(){o.absolutePosition(this.container,this.target);var e=o.getOuterWidth(this.target);e>o.getOuterWidth(this.container)&&(this.container.style.minWidth=o.getOuterWidth(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var s=e.container&&!e.container.contains(i.target),d=!(e.target&&(e.target===i.target||e.target.contains(i.target)));e.overlayVisible&&s&&d?e.hide():!e.popup&&s&&d&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new R(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!o.isTouchDevice()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){K.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null}},components:{PVMenuitem:P,Portal:T}},te=["id"],ie=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],ne=["id"];function se(t,e,i,s,d,n){var y=x("PVMenuitem"),p=x("Portal");return r(),b(p,{appendTo:t.appendTo,disabled:!t.popup},{default:w(function(){return[N(U,l({name:"p-connected-overlay",onEnter:n.onEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},t.ptm("transition")),{default:w(function(){return[!t.popup||d.overlayVisible?(r(),u("div",l({key:0,ref:n.containerRef,id:d.id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},t.ptmi("root")),[t.$slots.start?(r(),u("div",l({key:0,class:t.cx("start")},t.ptm("start")),[I(t.$slots,"start")],16)):f("",!0),O("ul",l({ref:n.listRef,id:d.id+"_list",class:t.cx("menu"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":d.focused?n.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return n.onListFocus&&n.onListFocus.apply(n,arguments)}),onBlur:e[1]||(e[1]=function(){return n.onListBlur&&n.onListBlur.apply(n,arguments)}),onKeydown:e[2]||(e[2]=function(){return n.onListKeyDown&&n.onListKeyDown.apply(n,arguments)})},t.ptm("menu")),[(r(!0),u(h,null,S(t.model,function(a,c){return r(),u(h,{key:n.label(a)+c.toString()},[a.items&&n.visible(a)&&!a.separator?(r(),u(h,{key:0},[a.items?(r(),u("li",l({key:0,id:d.id+"_"+c,class:[t.cx("submenuHeader"),a.class],style:a.style,role:"none"},t.ptm("submenuHeader")),[I(t.$slots,"submenuheader",{item:a},function(){return[Z(A(n.label(a)),1)]})],16,ne)):f("",!0),(r(!0),u(h,null,S(a.items,function(m,v){return r(),u(h,{key:m.label+c+"_"+v},[n.visible(m)&&!m.separator?(r(),b(y,{key:0,id:d.id+"_"+c+"_"+v,item:m,templates:t.$slots,focusedOptionId:n.focusedOptionId,unstyled:t.unstyled,onItemClick:n.itemClick,onItemMousemove:n.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):n.visible(m)&&m.separator?(r(),u("li",l({key:"separator"+c+v,class:[t.cx("separator"),a.class],style:m.style,role:"separator"},t.ptm("separator")),null,16)):f("",!0)],64)}),128))],64)):n.visible(a)&&a.separator?(r(),u("li",l({key:"separator"+c.toString(),class:[t.cx("separator"),a.class],style:a.style,role:"separator"},t.ptm("separator")),null,16)):(r(),b(y,{key:n.label(a)+c.toString(),id:d.id+"_"+c,item:a,index:c,templates:t.$slots,focusedOptionId:n.focusedOptionId,unstyled:t.unstyled,onItemClick:n.itemClick,onItemMousemove:n.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,ie),t.$slots.end?(r(),u("div",l({key:1,class:t.cx("end")},t.ptm("end")),[I(t.$slots,"end")],16)):f("",!0)],16,te)):f("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ee.render=se;export{ee as default};

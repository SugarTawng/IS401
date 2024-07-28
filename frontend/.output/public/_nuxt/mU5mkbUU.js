import G from"./C0LKiM39.js";import J from"./CLsrxzl_.js";import K from"./UEL7mprB.js";import O from"./Dw3xtoWV.js";import{s as I,f as Q,r as o,o as W,g as X,w as $,b as n,a as e,h as l,i as c,t as k,y as Z,u as ee}from"./DaYTUSRu.js";import{u as H}from"./kVCPm6zo.js";import{u as M}from"./WSTKsw6M.js";import{c as E,a as A}from"./CBeCEV4t.js";const le=e("div",{class:"inline-flex items-center justify-center gap-2"},[e("span",{class:"font-bold text-xl"},"Customer Details")],-1),te={class:"flex flex-col gap-3"},ae={class:"flex flex-row gap-3"},oe={class:"flex flex-1 flex-col gap-2"},se=e("label",{for:"firstName"},"First Name",-1),ie={class:"flex flex-1 flex-col gap-2"},ne=e("label",{for:"lastName"},"Last Name",-1),de={class:"flex flex-row gap-3"},ue={class:"flex flex-1 flex-col gap-2"},re=e("label",{for:"phone"},"Phone Number",-1),ce={class:"flex flex-1 flex-col gap-2"},me=e("label",{for:"email"},"Email",-1),pe={class:"flex flex-1 flex-col gap-2"},ve=e("label",{for:"projectID"},"Project",-1),fe={class:"flex flex-row gap-3"},_e={class:"flex flex-1 flex-col gap-2"},xe=e("label",{for:"contacted"},"Contacted",-1),be={class:"flex flex-1 flex-col gap-2"},Ve=e("label",{for:"Potential"},"Potential",-1),he={class:"flex flex-row gap-3 justify-between"},ge={class:"text-xs text-gray-400"},ye={class:"text-xs text-gray-400"},Ze={__name:"ViewDetailsCustomerDialog",props:["visible"],async setup(B){var h,g,y,P;let j,w;const{visible:R}=B,{currentCustomer:t}=I(H()),{projectsDropdown:N}=I(M()),{getProjects:C}=M();[j,w]=Q(()=>C()),await j,w();const x=o(R);o(t.value.social_id);const T=o(t.value.phone),u=o(t.value.first_name),b=o(t.value.last_name),m=o(t.value.email),U=o({name:E(t.value.contacted),value:t.value.contacted}),v=o({name:E(t.value.potential),value:t.value.potential}),p=o({name:(g=(h=N.value.filter(r=>r.value==t.value.project_id))==null?void 0:h[0])==null?void 0:g.name,value:(P=(y=N.value.filter(r=>r.value==t.value.project_id))==null?void 0:y[0])==null?void 0:P.value}),f=o(t.value.created_at),V=o(t.value.updated_at);return(r,i)=>{const _=G,D=J,F=K,L=O;return W(),X(L,{visible:l(x),"onUpdate:visible":i[8]||(i[8]=a=>c(x)?x.value=a:null),modal:"",maximizable:"",header:"Header",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{header:$(()=>[le]),footer:$(()=>[n(F,{type:"button",label:"Close",onClick:i[7]||(i[7]=a=>x.value=!1)})]),default:$(()=>[e("template",te,[e("div",ae,[e("div",oe,[se,n(_,{id:"firstName",placeholder:"First Name",modelValue:l(u),"onUpdate:modelValue":i[0]||(i[0]=a=>c(u)?u.value=a:null),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])]),e("div",ie,[ne,n(_,{id:"lastName",placeholder:"Last Name",modelValue:l(b),"onUpdate:modelValue":i[1]||(i[1]=a=>c(b)?b.value=a:null),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])])]),e("div",de,[e("div",ue,[re,n(_,{id:"phone",placeholder:"+84 9698 886 660",modelValue:l(T),"onUpdate:modelValue":i[2]||(i[2]=a=>c(T)?T.value=a:null),modelModifiers:{trim:!0},integeronly:"",disabled:""},null,8,["modelValue"])]),e("div",ce,[me,n(_,{id:"email",placeholder:"example@gmail.com",modelValue:l(m),"onUpdate:modelValue":i[3]||(i[3]=a=>c(m)?m.value=a:null),modelModifiers:{trim:!0},disabled:""},null,8,["modelValue"])])]),e("div",pe,[ve,n(D,{id:"projectID",placeholder:"Select Project",modelValue:l(p).value,"onUpdate:modelValue":i[4]||(i[4]=a=>l(p).value=a),options:l(N),optionLabel:"name",optionValue:"value",disabled:""},null,8,["modelValue","options"])]),e("div",fe,[e("div",_e,[xe,n(D,{id:"contacted",placeholder:"True or False",modelValue:l(U).value,"onUpdate:modelValue":i[5]||(i[5]=a=>l(U).value=a),options:[{name:"True",value:"true"},{name:"False",value:"false"}],optionLabel:"name",optionValue:"value",disabled:""},null,8,["modelValue"])]),e("div",be,[Ve,n(D,{id:"Potential",placeholder:"True or False",modelValue:l(v).value,"onUpdate:modelValue":i[6]||(i[6]=a=>l(v).value=a),options:[{name:"True",value:"true"},{name:"False",value:"false"}],optionLabel:"name",optionValue:"value",disabled:""},null,8,["modelValue"])])]),e("div",he,[e("span",ge," Created at: "+k(("convertDateTime"in r?r.convertDateTime:l(A))(l(f))),1),e("span",ye," Updated at: "+k(("convertDateTime"in r?r.convertDateTime:l(A))(l(V))),1)])])]),_:1},8,["visible"])}}},De=e("div",{class:"inline-flex items-center justify-center gap-2"},[e("span",{class:"font-bold text-xl"},"Customer Details")],-1),$e={class:"flex flex-col gap-3"},je={class:"flex flex-row gap-3"},we={class:"flex flex-1 flex-col gap-2"},Ne=e("label",{for:"firstName"},"First Name",-1),Ce={class:"flex flex-1 flex-col gap-2"},Te=e("label",{for:"lastName"},"Last Name",-1),Ue={class:"flex flex-row gap-3"},Pe={class:"flex flex-1 flex-col gap-2"},Fe=e("label",{for:"phone"},"Phone Number",-1),Le={class:"flex flex-1 flex-col gap-2"},Se=e("label",{for:"email"},"Email",-1),Ie={class:"flex flex-1 flex-col gap-2"},ke=e("label",{for:"projectID"},"Project",-1),Me={class:"flex flex-row gap-3"},Ee={class:"flex flex-1 flex-col gap-2"},Ae=e("label",{for:"contacted"},"Contacted",-1),Be={class:"flex flex-1 flex-col gap-2"},Re=e("label",{for:"Potential"},"Potential",-1),ze={class:"flex flex-row gap-3 justify-between"},He={class:"text-xs text-gray-400"},qe={class:"text-xs text-gray-400"},el={__name:"EditCustomerDialog",props:["visible"],async setup(B){var _,D,F,L;let j,w;const{visible:R}=B,{currentCustomer:t}=I(H()),{editCustomer:N}=H(),{projectsDropdown:C}=I(M()),{getProjects:x}=M(),u=Z().currentRoute.value,b=ee();[j,w]=Q(()=>x()),await j,w();const m=o(R),U=o(t.value.social_id),v=o(t.value.phone),p=o(t.value.first_name),f=o(t.value.last_name),V=o(t.value.email),h=o({name:E(t.value.contacted),value:t.value.contacted}),g=o({name:E(t.value.potential),value:t.value.potential}),y=o({name:(D=(_=C.value.filter(a=>a.value==t.value.project_id))==null?void 0:_[0])==null?void 0:D.name,value:(L=(F=C.value.filter(a=>a.value==t.value.project_id))==null?void 0:F[0])==null?void 0:L.value}),P=o(t.value.created_at),r=o(t.value.updated_at),i=async()=>{const a={...t.value,social_id:U.value,phone:v.value,first_name:p.value,last_name:f.value,display_name:`${p.value} ${f.value}`,email:V.value,contacted:h.value.value,potential:g.value.value,project_id:y.value.value,updated_at:new Date().toLocaleString()},s=await N(a);m.value=!1,s!=null&&s.result=="ok"?b.add({severity:"success",summary:"Success",detail:"Edit Customer Successfully!",group:"bl",life:3e3}):b.add({severity:"danger",summary:"Error",detail:"Failed to Edit Customer",group:"bl",life:3e3})};return(a,s)=>{const S=G,z=J,q=K,Y=O;return W(),X(Y,{visible:l(m),"onUpdate:visible":s[8]||(s[8]=d=>c(m)?m.value=d:null),modal:"",maximizable:"",header:"Header",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{header:$(()=>[De]),footer:$(()=>[n(q,{type:"button",label:"Cancel",text:"",severity:"secondary",onClick:s[7]||(s[7]=d=>m.value=!1)}),n(q,{type:"submit",label:"Save",onClick:i})]),default:$(()=>[e("template",$e,[e("div",je,[e("div",we,[Ne,n(S,{id:"firstName",placeholder:"First Name",modelValue:l(p),"onUpdate:modelValue":s[0]||(s[0]=d=>c(p)?p.value=d:null),modelModifiers:{trim:!0},disabled:!!l(u).path.includes("project_details")},null,8,["modelValue","disabled"])]),e("div",Ce,[Te,n(S,{id:"lastName",placeholder:"Last Name",modelValue:l(f),"onUpdate:modelValue":s[1]||(s[1]=d=>c(f)?f.value=d:null),modelModifiers:{trim:!0},disabled:!!l(u).path.includes("project_details")},null,8,["modelValue","disabled"])])]),e("div",Ue,[e("div",Pe,[Fe,n(S,{id:"phone",placeholder:"+84 9698 886 660",modelValue:l(v),"onUpdate:modelValue":s[2]||(s[2]=d=>c(v)?v.value=d:null),modelModifiers:{trim:!0},integeronly:"",disabled:!!l(u).path.includes("project_details")},null,8,["modelValue","disabled"])]),e("div",Le,[Se,n(S,{id:"email",placeholder:"example@gmail.com",modelValue:l(V),"onUpdate:modelValue":s[3]||(s[3]=d=>c(V)?V.value=d:null),modelModifiers:{trim:!0},disabled:!!l(u).path.includes("project_details")},null,8,["modelValue","disabled"])])]),e("div",Ie,[ke,n(z,{id:"projectID",placeholder:"Select Project",modelValue:l(y).value,"onUpdate:modelValue":s[4]||(s[4]=d=>l(y).value=d),options:l(C),optionLabel:"name",optionValue:"value",disabled:!!l(u).path.includes("project_details")},null,8,["modelValue","options","disabled"])]),e("div",Me,[e("div",Ee,[Ae,n(z,{id:"contacted",placeholder:"True or False",modelValue:l(h).value,"onUpdate:modelValue":s[5]||(s[5]=d=>l(h).value=d),options:[{name:"True",value:"true"},{name:"False",value:"false"}],optionLabel:"name",optionValue:"value",disabled:!!l(u).path.includes("admin")},null,8,["modelValue","disabled"])]),e("div",Be,[Re,n(z,{id:"Potential",placeholder:"True or False",modelValue:l(g).value,"onUpdate:modelValue":s[6]||(s[6]=d=>l(g).value=d),options:[{name:"True",value:"true"},{name:"False",value:"false"}],optionLabel:"name",optionValue:"value",disabled:!!l(u).path.includes("admin")},null,8,["modelValue","disabled"])])]),e("div",ze,[e("span",He," Created at: "+k(("convertDateTime"in a?a.convertDateTime:l(A))(l(P))),1),e("span",qe," Updated at: "+k(("convertDateTime"in a?a.convertDateTime:l(A))(l(r))),1)])])]),_:1},8,["visible"])}}};export{Ze as _,el as a};

import{_ as l,p as u,k as p,l as m,A as t,L as c,u as _,q as f,x as v}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const b={name:"DeviceSolarView",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(n,e=void 0){this.$emit("update:configuration",{value:n,object:e})}}},g={class:"device-solar-view"},w={class:"small"};function x(n,e,i,V,C,a){const s=u("openwb-base-heading"),r=u("openwb-base-text-input"),d=u("openwb-base-number-input");return p(),m("div",g,[t(s,null,{default:c(()=>[_(" Einstellungen für SolarView "),f("span",w,"(Modul: "+v(n.$options.name)+")",1)]),_:1}),t(r,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=o=>a.updateConfiguration(o,"configuration.ip_address"))},null,8,["model-value"]),t(d,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=o=>a.updateConfiguration(o,"configuration.port"))},null,8,["model-value"]),t(d,{title:"Timeout",required:"","model-value":i.configuration.timeout,"onUpdate:modelValue":e[2]||(e[2]=o=>a.updateConfiguration(o,"configuration.timeout"))},null,8,["model-value"])])}const h=l(b,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_view/device.vue"]]);export{h as default};

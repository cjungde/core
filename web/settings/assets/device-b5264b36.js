import{_ as u,p as n,k as p,l as c,A as o,L as l,u as _,q as m,x as f}from"./vendor-9bfbb89c.js";import"./vendor-sortablejs-8518b3e5.js";const b={name:"DeviceJanitza",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},g={class:"device-janitza"},v={class:"small"};function h(t,e,a,x,w,s){const i=n("openwb-base-heading"),d=n("openwb-base-text-input");return p(),c("div",g,[o(i,null,{default:l(()=>[_(" Einstellungen für Janitza "),m("span",v,"(Modul: "+f(t.$options.name)+")",1)]),_:1}),o(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>s.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const z=u(b,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/janitza/device.vue"]]);export{z as default};
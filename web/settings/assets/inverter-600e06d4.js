import{_ as u,p as n,k as p,l as d,A as o,L as c,u as v,q as _,x as m}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const f={name:"DeviceOpenwbPvkitInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},b={class:"device-openwb-pvkit-inverter"},g={class:"small"};function h(t,e,i,w,x,a){const s=n("openwb-base-heading"),r=n("openwb-base-select-input");return p(),d("div",b,[o(s,null,{default:c(()=>[v(" Einstellungen für openWB PV-Kit Wechselrichter "),_("span",g,"(Modul: "+m(t.$options.name)+")",1)]),_:1}),o(r,{title:"Zählermodell",notSelected:"Bitte auswählen",options:[{value:0,text:"MPM3PM"},{value:1,text:"Lovato"},{value:2,text:"SDM630"}],"model-value":i.configuration.version,"onUpdate:modelValue":e[0]||(e[0]=l=>a.updateConfiguration(l,"configuration.version"))},null,8,["model-value"])])}const M=u(f,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/openwb_pv_kit/inverter.vue"]]);export{M as default};

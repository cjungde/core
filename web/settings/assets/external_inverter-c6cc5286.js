import{_ as c,p as n,k as p,l as d,A as o,L as a,u as r,q as l,x as u}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const _={name:"DeviceBatterXExternalInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-batterx-external-inverter"},m={class:"small"};function b(e,t,v,x,g,h){const s=n("openwb-base-heading"),i=n("openwb-base-alert");return p(),d("div",f,[o(s,null,{default:a(()=>[r(" Einstellungen für externen BatterX Wechselrichter "),l("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:a(()=>[r(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(_,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/batterx/external_inverter.vue"]]);export{$ as default};

import{_ as c,q as n,k as d,l as p,B as o,M as s,x as a,u as l,y as u}from"./vendor-c0ce7727.js";import"./vendor-sortablejs-4bc62cd6.js";const _={name:"DeviceSolarwattInverter",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,t=void 0){this.$emit("update:configuration",{value:e,object:t})}}},f={class:"device-solarwatt-inverter"},m={class:"small"};function v(e,t,b,g,h,w){const r=n("openwb-base-heading"),i=n("openwb-base-alert");return d(),p("div",f,[o(r,null,{default:s(()=>[a(" Einstellungen für Solarwatt/My Reserve Wechselrichter "),l("span",m,"(Modul: "+u(e.$options.name)+")",1)]),_:1}),o(i,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const y=c(_,[["render",v],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_watt/inverter.vue"]]);export{y as default};
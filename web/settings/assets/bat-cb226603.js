import{_ as c,p as t,k as p,l as u,A as o,L as s,u as a,q as d,x as _}from"./vendor-94ac8c48.js";import"./vendor-sortablejs-dbc23470.js";const l={name:"DeviceSunnyBoyBat",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0},componentId:{required:!0}},methods:{updateConfiguration(e,n=void 0){this.$emit("update:configuration",{value:e,object:n})}}},b={class:"device-sunnyboy-bat"},f={class:"small"};function m(e,n,g,y,h,v){const i=t("openwb-base-heading"),r=t("openwb-base-alert");return p(),u("div",b,[o(i,null,{default:s(()=>[a(" Einstellungen für SMA Sunny Boy/Tripower Batteriespeicher "),d("span",f,"(Modul: "+_(e.$options.name)+")",1)]),_:1}),o(r,{subtype:"info"},{default:s(()=>[a(" Diese Komponente benötigt keine Einstellungen. ")]),_:1})])}const $=c(l,[["render",m],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sma_sunny_boy/bat.vue"]]);export{$ as default};

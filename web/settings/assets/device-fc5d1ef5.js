import{_ as l,p as t,k as p,l as c,A as a,L as m,u as _,q as f,x as b}from"./vendor-93bd3532.js";import"./vendor-sortablejs-b80cade1.js";const g={name:"DeviceSolarmax",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solarmax"},x={class:"small"};function w(o,e,i,h,C,s){const d=t("openwb-base-heading"),u=t("openwb-base-text-input"),r=t("openwb-base-number-input");return p(),c("div",v,[a(d,null,{default:m(()=>[_(" Einstellungen für Solarmax "),f("span",x,"(Modul: "+b(o.$options.name)+")",1)]),_:1}),a(u,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>s.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),a(r,{title:"Modbus ID","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[1]||(e[1]=n=>s.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"])])}const k=l(g,[["render",w],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/device.vue"]]);export{k as default};

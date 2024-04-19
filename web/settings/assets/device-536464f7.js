import{_ as b,q as o,k as g,l as _,B as t,M as r,x as l,u as f,y as v}from"./vendor-f0f38b48.js";import"./vendor-sortablejs-cbf37f8f.js";const w={name:"DeviceSungrow",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},componentId:{required:!0}},methods:{updateConfiguration(u,e=void 0){this.$emit("update:configuration",{value:u,object:e})}}},S={class:"device-sungrow"},h={class:"small"};function x(u,e,i,D,W,a){const d=o("openwb-base-heading"),p=o("openwb-base-alert"),m=o("openwb-base-text-input"),s=o("openwb-base-number-input"),c=o("openwb-base-select-input");return g(),_("div",S,[t(d,null,{default:r(()=>[l(" Einstellungen für Sungrow "),f("span",h,"(Modul: "+v(u.$options.name)+")",1)]),_:1}),t(p,{subtype:"info"},{default:r(()=>[l(" Bitte zur Fehlervermeidung die Firmware des Sungrow Wechselrichters und WiNet-S Dongles aktuell halten. ")]),_:1}),t(m,{title:"IP oder Hostname",subtype:"host",required:"","model-value":i.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=n=>a.updateConfiguration(n,"configuration.ip_address"))},null,8,["model-value"]),t(s,{title:"Port",required:"",min:1,max:65535,"model-value":i.configuration.port,"onUpdate:modelValue":e[1]||(e[1]=n=>a.updateConfiguration(n,"configuration.port"))},null,8,["model-value"]),t(s,{title:"Modbus ID",required:"","model-value":i.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[2]||(e[2]=n=>a.updateConfiguration(n,"configuration.modbus_id"))},null,8,["model-value"]),t(c,{title:"Version",options:[{value:0,text:"SH (Hybrid)"},{value:3,text:"SH (Hybrid) über WiNet-S Dongle"},{value:1,text:"SG (kein Hybrid)"},{value:2,text:"SG (kein Hybrid) über WiNet-S Dongle"}],"model-value":i.configuration.version,"onUpdate:modelValue":e[3]||(e[3]=n=>a.updateConfiguration(n,"configuration.version"))},{help:r(()=>[l(" Die Variante SH sollte möglichst über den internen LAN-Port genutzt werden (befindet sich am Wechselrichter hinter dem WiNet-S Dongle), da nur hier alle Werte vollständig ausgelesen werden können. Den WiNet-S Dongle zusätzlich ins Heimnetz (per Lan oder Wlan) einbinden, um iSolarCloud nutzen zu können. ")]),_:1},8,["options","model-value"])])}const N=b(w,[["render",x],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/sungrow/device.vue"]]);export{N as default};

import{C as a}from"./HardwareInstallation-70f156e6.js";import{_ as m,u as n,k as p,l,D as t,N as u,y as d}from"./vendor-a21b3a62.js";import"./vendor-fortawesome-41164876.js";import"./index-f9fda857.js";import"./vendor-bootstrap-d0c3645c.js";import"./vendor-jquery-a5dbbab1.js";import"./vendor-axios-0e6de98a.js";import"./vendor-sortablejs-3016fed8.js";import"./dynamic-import-helper-be004503.js";const c={name:"DeviceSolarmaxInverter",mixins:[a]},_={class:"device-solarmax-inverter"};function b(o,e,f,v,x,g){const r=n("openwb-base-heading"),i=n("openwb-base-number-input");return p(),l("div",_,[t(r,null,{default:u(()=>e[1]||(e[1]=[d(" Einstellungen für Solarmax Wechselrichter ")])),_:1}),t(i,{title:"Modbus ID",required:"","model-value":o.component.configuration.modbus_id,min:"1",max:"255","onUpdate:modelValue":e[0]||(e[0]=s=>o.updateConfiguration(s,"configuration.modbus_id"))},null,8,["model-value"])])}const E=m(c,[["render",b],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solarmax/solarmax/inverter.vue"]]);export{E as default};
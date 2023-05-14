import{_ as u,q as i,l as _,m as h,A as n,K as o,v as t,u as e,x as l}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const m={name:"VehicleSocMqtt",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},vehicleId:{required:!0}},data(){return{}},methods:{updateConfiguration(s,a=void 0){this.$emit("update:configuration",{value:s,object:a})}}},f={class:"vehicle-soc-mqtt"},b={class:"small"},v=e("br",null,null,-1),g=e("br",null,null,-1),w=e("span",{class:"text-info"},"89.5",-1),k=e("br",null,null,-1),x=e("br",null,null,-1),B=e("br",null,null,-1),q=e("span",{class:"text-info"},"356.5",-1);function z(s,a,c,C,T,y){const d=i("openwb-base-heading"),r=i("openwb-base-copy-to-clipboard"),p=i("openwb-base-alert");return _(),h("div",f,[n(d,null,{default:o(()=>[t(" Einstellungen für MQTT SoC "),e("span",b,"(Modul: "+l(s.$options.name)+")",1)]),_:1}),n(p,{subtype:"info"},{default:o(()=>[t(" Die Daten werden immer dann aktualisiert, wenn das Topic veröffentlicht wird. Die Abfrageintervalle werden nicht berücksichtigt, da das Intervall vom sendenden Client festgelegt wird. "),e("ul",null,[e("li",null,[n(r,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/vehicle/"+l(c.vehicleId)+"/get/soc",1)]),_:1}),v,t(" Fahrzeug-SoC mit Nachkommastellen (Float) oder Ganzzahl"),g,t(" Beispiel: "),w]),e("li",null,[n(r,{class:"text-info",tooltip:"Topic kopieren"},{default:o(()=>[t("openWB/set/vehicle/"+l(c.vehicleId)+"/get/range",1)]),_:1}),k,t(" Reichweite des Fahrzeugs in km mit Nachkommastellen (Float) oder Ganzzahl"),x,t(" Diese Info ist optional."),B,t(" Beispiel: "),q])])]),_:1})])}const N=u(m,[["render",z],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/vehicles/mqtt/vehicle.vue"]]);export{N as default};

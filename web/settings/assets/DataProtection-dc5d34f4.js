import{C as c}from"./index-3872039d.js";import{_ as d,q as t,l as m,m as _,u as s,A as o,K as a,v as b}from"./vendor-b78ff8c0.js";import"./vendor-fortawesome-12414438.js";import"./vendor-bootstrap-760bc08d.js";import"./vendor-jquery-41669b5b.js";import"./vendor-axios-a6fb860e.js";import"./vendor-sortablejs-116030fd.js";const g={name:"OpenwbDataProtection",mixins:[c],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/system/dataprotection_acknowledged"]}}},w={class:"dataProtection"},f={name:"dataProtectionForm"},h=s("iframe",{src:"dataprotection.html",width:"100%",height:"400px",class:"bg-light"},null,-1),v=s("hr",null,null,-1);function k(n,e,B,x,V,W){const i=t("openwb-base-button-group-input"),p=t("openwb-base-alert"),u=t("openwb-base-submit-buttons"),l=t("openwb-base-card");return m(),_("div",w,[s("form",f,[o(l,{title:"Datenschutzerklärung"},{footer:a(()=>[o(u,{formName:"dataProtectionForm",hideReset:!0,hideDefaults:!0,onSave:e[1]||(e[1]=r=>n.$emit("save"))})]),default:a(()=>[h,v,o(i,{title:"Akzeptieren",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],"model-value":n.$store.state.mqtt["openWB/system/dataprotection_acknowledged"],"onUpdate:modelValue":e[0]||(e[0]=r=>n.updateState("openWB/system/dataprotection_acknowledged",r))},null,8,["model-value"]),o(p,{subtype:"warning"},{default:a(()=>[b(" Wenn sie nicht einwilligen wird eine ggf. konfigurierte Cloud Anbindung gelöscht. Die openWB arbeitet autark wie gewohnt weiter. Fernzugriff und Remote Support sind dann nicht mehr möglich! ")]),_:1})]),_:1})])])}const q=d(g,[["render",k],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/DataProtection.vue"]]);export{q as default};

import{_ as i,q as r,l as p,m as c,A as d,K as l,v as u}from"./vendor-b78ff8c0.js";import"./vendor-sortablejs-116030fd.js";const g={name:"ChargePointCommandsOpenwbPro",props:{configuration:{type:Object,required:!0},chargePointId:{default:void 0}},methods:{async triggerUpdate(){let s=new FormData;s.append("command","update"),s.append("data",'{"ip_address":"'+this.configuration.ip_address+'"}');const o="Die Aktualisierung der openWB Pro wird gestartet...";this.$root.postClientMessage(o,"info"),console.log(location),this.axios.post(location.protocol+"//"+location.host+"/openWB/web/settings/modules/charge_points/openwb_pro/commands.php",s,{timeout:5e3}).then(e=>{console.log("POST response",e.data);const t="Die Aktualisierung der openWB Pro wurde erfolgreich gestartet.";this.$root.postClientMessage(t,"success")}).catch(e=>{var t="Aktualisierung fehlgeschlagen!<br />";e.response?(console.log(e.response.status,e.response.data),t+=e.response.status+": "+e.response.data):e.request?(console.log(e.request),t+="Es wurde keine Antwort vom Server empfangen."):(console.log("Error",e.message),t+="Es ist ein unbekannter Fehler aufgetreten."),this.$root.postClientMessage(t,"danger")})}}},m={class:"charge-point-commands-openwbpro"};function h(s,o,e,t,_,n){const a=r("openwb-base-button-input");return p(),c("div",m,[d(a,{title:"Ladepunkt aktualisieren",buttonText:"Update anfordern",subtype:"success",disabled:e.configuration.ip_address==null,onButtonClicked:n.triggerUpdate},{help:l(()=>[u(" Mit diesem Befehl können Sie die Aktualisierung der openWB Pro anstoßen. Bitte beachten Sie, dass kein Fahrzeug angesteckt ist. ")]),_:1},8,["disabled","onButtonClicked"])])}const k=i(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/charge_points/openwb_pro/commands.vue"]]);export{k as default};

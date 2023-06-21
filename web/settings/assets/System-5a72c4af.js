import{l as A,Y as $,p as T,Z as O,O as U,_ as j,$ as E,a0 as z,a1 as I,a2 as L,F as N}from"./vendor-fortawesome-d70ae91e.js";import{_ as P,C as M}from"./index-a88e9d31.js";import{_ as H}from"./dynamic-import-helper-be004503.js";import{_ as q,p as r,k as b,l as w,A as n,L as a,u as i,x as v,q as s,a0 as R,y as W,a1 as Z,z as S,n as k,G as J,I as G,Q as K,R as Q}from"./vendor-8521f8a3.js";import"./vendor-bootstrap-1e832c7e.js";import"./vendor-jquery-0e339578.js";import"./vendor-axios-e2840f20.js";import"./vendor-sortablejs-5d1612dc.js";const Y={name:"BackupCloudConfigFallback",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},backupCloudType:String},methods:{updateConfiguration(t,e=void 0){this.$emit("update:configuration",{value:t,object:e})}}},X={class:"backup-cloud-fallback"};function ee(t,e,u,g,d,l){const _=r("openwb-base-alert"),c=r("openwb-base-textarea");return b(),w("div",X,[n(_,{subtype:"warning"},{default:a(()=>[i(' Es wurde keine Konfigurationsseite für die Backup-Cloud "'+v(u.backupCloudType)+'" gefunden. Die Einstellungen können als JSON direkt bearbeitet werden. ',1)]),_:1}),n(c,{title:"Konfiguration",subtype:"json","model-value":u.configuration,"onUpdate:modelValue":e[0]||(e[0]=h=>l.updateConfiguration(h,"configuration"))},{help:a(()=>[i(" Bitte prüfen Sie, ob die Eingaben richtig interpretiert werden. ")]),_:1},8,["model-value"]),n(_,{subtype:"info"},{default:a(()=>[s("pre",null,v(JSON.stringify(u.configuration,void 0,2)),1)]),_:1})])}const te=q(Y,[["render",ee],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudConfigFallback.vue"]]),ne={name:"OpenwbBackupCloudProxy",emits:["update:configuration"],props:{backupCloudType:{type:String,required:!0},configuration:{type:Object,required:!0}},computed:{myComponent(){return console.debug(`loading backup cloud: ${this.backupCloudType}`),R({loader:()=>H(Object.assign({"./nextcloud/backup_cloud.vue":()=>P(()=>import("./backup_cloud-ccc606aa.js"),["assets/backup_cloud-ccc606aa.js","assets/vendor-8521f8a3.js","assets/vendor-sortablejs-5d1612dc.js","assets/vendor-7b9e30aa.css"])}),`./${this.backupCloudType}/backup_cloud.vue`),errorComponent:te})}},methods:{updateConfiguration(t){this.$emit("update:configuration",t)}}};function se(t,e,u,g,d,l){return b(),W(Z(l.myComponent),{configuration:u.configuration,backupCloudType:u.backupCloudType,"onUpdate:configuration":e[0]||(e[0]=_=>l.updateConfiguration(_))},null,40,["configuration","backupCloudType"])}const oe=q(ne,[["render",se],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/backup_clouds/OpenwbBackupCloudProxy.vue"]]);A.add($,T,O,U,j,E,z,I,L);const ae={name:"OpenwbSystem",mixins:[M],emits:["sendCommand"],components:{FontAwesomeIcon:N,OpenwbBackupCloudProxy:oe},data(){return{mqttTopicsToSubscribe:["openWB/system/configurable/backup_clouds","openWB/system/current_commit","openWB/system/current_branch_commit","openWB/system/current_missing_commits","openWB/system/available_branches","openWB/system/current_branch","openWB/system/backup_cloud/config"],warningAcknowledged:!1,selectedTag:"*HEAD*",selectedFile:void 0,restoreUploadDone:!1}},computed:{backupCloudList:{get(){return this.$store.state.mqtt["openWB/system/configurable/backup_clouds"]}},updateAvailable(){return this.$store.state.mqtt["openWB/system/current_branch_commit"]&&this.$store.state.mqtt["openWB/system/current_branch_commit"]!=this.$store.state.mqtt["openWB/system/current_commit"]},releaseChangeValid(){return this.$store.state.mqtt["openWB/system/current_branch"]in this.$store.state.mqtt["openWB/system/available_branches"]&&"tags"in this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]]&&(this.selectedTag in this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]].tags||this.selectedTag=="*HEAD*")}},methods:{getBackupCloudDefaultConfiguration(t){const e=this.backupCloudList.find(u=>u.value==t);return Object.prototype.hasOwnProperty.call(e,"defaults")?{...e.defaults}:(console.warn("no default configuration found for backup cloud type!",t),{})},sendSystemCommand(t,e={}){this.$emit("sendCommand",{command:t,data:e})},getBranchOptions(){var t=this.$store.state.mqtt["openWB/system/available_branches"],e=[];if(t!==void 0)for(const[u,g]of Object.entries(t))e.push({value:u,text:u+" ("+g.commit+")"});return e},getBranchTagOptions(){if(!(this.$store.state.mqtt["openWB/system/current_branch"]in this.$store.state.mqtt["openWB/system/available_branches"]))return[];var t=this.$store.state.mqtt["openWB/system/available_branches"][this.$store.state.mqtt["openWB/system/current_branch"]].tags,e=[];if(t!==void 0)for(const[u,g]of Object.entries(t))e.unshift({value:u,text:g});return e.unshift({value:"*HEAD*",text:"Aktuellster Stand"}),e},updateConfiguration(t,e){console.debug("updateConfiguration",t,e),this.updateState(t,e.value,e.object)},updateSelectedBackupCloud(t){this.updateState("openWB/system/backup_cloud/config",t,"type"),this.updateState("openWB/system/backup_cloud/config",this.getBackupCloudDefaultConfiguration(t))},updateSelectedFile(t){this.selectedFile=t.target.files[0],console.log("selectedFile",this.selectedFile)},uploadFile(){if(this.selectedFile!==void 0){let t=new FormData;t.append("backupFile",this.selectedFile),this.axios.post(location.protocol+"//"+location.host+"/openWB/web/settings/uploadBackup.php",t,{headers:{"Content-Type":"multipart/form-data"}}).then(e=>{console.log("POST response",e.data);const u="Die Sicherungsdatei wurde erfolgreich hochgeladen. Sie können die Wiederherstellung jetzt starten.";this.$root.postClientMessage(u,"success"),this.restoreUploadDone=!0}).catch(e=>{var u="Hochladen der Datei fehlgeschlagen!<br />";e.response?(console.log(e.response.status,e.response.data),u+=e.response.status+": "+e.response.data):e.request?(console.log(e.request),u+="Es wurde keine Antwort vom Server empfangen."):(console.log("Error",e.message),u+="Es ist ein unbekannter Fehler aufgetreten."),this.$root.postClientMessage(u,"danger"),this.restoreUploadDone=!1})}else console.error("no file selected for upload")}}},m=t=>(K("data-v-059847f6"),t=t(),Q(),t),le={class:"system"},ie=m(()=>s("h2",null,"Achtung!",-1)),ue=m(()=>s("p",null," Vor allen Aktionen auf dieser Seite ist sicherzustellen, dass kein Ladevorgang aktiv ist! Zur Sicherheit bitte zusätzlich alle Fahrzeuge von der Ladestation / den Ladestationen abstecken! ",-1)),re={key:0},de={name:"versionInfoForm"},ce={class:"missing-commits"},pe={class:"row justify-content-center"},me={class:"col-md-4 d-flex py-1 justify-content-center"},be={class:"col-md-4 d-flex py-1 justify-content-center"},fe={name:"backupRestoreForm"},ge=m(()=>s("a",{href:"/openWB/data/backup/",target:"_blank"},"hier",-1)),_e={class:"row justify-content-center"},he={class:"col-md-4 d-flex py-1 justify-content-center"},ye=m(()=>s("hr",null,null,-1)),ke={name:"systemCloudBackupForm"},we=m(()=>s("hr",null,null,-1)),ve=m(()=>s("br",null,null,-1)),Be=m(()=>s("br",null,null,-1)),Ce={class:"input-group"},Se={class:"input-group-prepend"},We={class:"input-group-text"},qe={class:"custom-file"},Fe={id:"input-file-label",class:"custom-file-label",for:"input-file","data-browse":"Suchen"},Ve={class:"input-group-append"},xe=["disabled"],De={class:"row justify-content-center"},Ae={class:"col-md-4 d-flex py-1 justify-content-center"},$e={name:"powerForm"},Te={class:"row justify-content-center"},Oe={class:"col-md-4 d-flex py-1 justify-content-center"},Ue={class:"col-md-4 d-flex py-1 justify-content-center"},je={name:"releaseChangeForm"},Ee=m(()=>s("br",null,null,-1)),ze=m(()=>s("ul",null,[s("li",null,"do not allow downgrade")],-1)),Ie={class:"row justify-content-center"},Le={class:"col-md-4 d-flex py-1 justify-content-center"};function Ne(t,e,u,g,d,l){const _=r("openwb-base-button-group-input"),c=r("openwb-base-alert"),h=r("openwb-base-text-input"),y=r("openwb-base-card"),p=r("font-awesome-icon"),f=r("openwb-base-click-button"),B=r("openwb-base-heading"),C=r("openwb-base-select-input"),F=r("openwb-backup-cloud-proxy"),V=r("openwb-base-submit-buttons"),x=r("openwb-base-button-input");return b(),w("div",le,[n(c,{subtype:"danger"},{default:a(()=>[ie,ue,n(_,{title:"Ich habe die Warnung verstanden",buttons:[{buttonValue:!1,text:"Nein",class:"btn-outline-danger"},{buttonValue:!0,text:"Ja",class:"btn-outline-success"}],modelValue:this.warningAcknowledged,"onUpdate:modelValue":e[0]||(e[0]=o=>this.warningAcknowledged=o)},null,8,["modelValue"])]),_:1}),d.warningAcknowledged?(b(),w("div",re,[s("form",de,[n(y,{title:"Versions-Informationen / Aktualisierung",subtype:"success",collapsible:!0,collapsed:!0},{footer:a(()=>[s("div",pe,[s("div",me,[n(f,{class:"btn-info",onButtonClicked:e[4]||(e[4]=o=>l.sendSystemCommand("systemFetchVersions"))},{default:a(()=>[i(" Informationen aktualisieren "),n(p,{"fixed-width":"",icon:["fas","download"]})]),_:1})]),s("div",be,[n(f,{class:k(l.updateAvailable?"btn-success clickable":"btn-outline-success"),disabled:!l.updateAvailable,onButtonClicked:e[5]||(e[5]=o=>l.sendSystemCommand("systemUpdate",{}))},{default:a(()=>[i(" Update "),n(p,{"fixed-width":"",icon:["fas","arrow-alt-circle-up"]})]),_:1},8,["class","disabled"])])])]),default:a(()=>[n(h,{title:"Entwicklungszweig",readonly:"",modelValue:t.$store.state.mqtt["openWB/system/current_branch"],"onUpdate:modelValue":e[1]||(e[1]=o=>t.$store.state.mqtt["openWB/system/current_branch"]=o)},null,8,["modelValue"]),n(h,{title:"installierte Version",readonly:"",class:k(l.updateAvailable?"text-danger":"text-success"),modelValue:t.$store.state.mqtt["openWB/system/current_commit"],"onUpdate:modelValue":e[2]||(e[2]=o=>t.$store.state.mqtt["openWB/system/current_commit"]=o)},null,8,["class","modelValue"]),n(h,{title:"aktuellste Version",readonly:"",modelValue:t.$store.state.mqtt["openWB/system/current_branch_commit"],"onUpdate:modelValue":e[3]||(e[3]=o=>t.$store.state.mqtt["openWB/system/current_branch_commit"]=o)},null,8,["modelValue"]),l.updateAvailable?(b(),W(y,{key:0,title:"Änderungen",subtype:"info",collapsible:!0,collapsed:!0},{default:a(()=>[s("ul",ce,[(b(!0),w(J,null,G(t.$store.state.mqtt["openWB/system/current_missing_commits"],(o,D)=>(b(),w("li",{key:D},v(o),1))),128))])]),_:1})):S("v-if",!0),n(c,{subtype:"danger"},{default:a(()=>[i(" Nach einem Update wird die Ladestation direkt neu gestartet! Es werden alle eventuell vorhandenen lokalen Änderungen am Programmcode mit dem Update verworfen! ")]),_:1})]),_:1})]),s("form",fe,[n(y,{title:"Sicherung / Wiederherstellung",subtype:"success",collapsible:!0,collapsed:!0},{footer:a(()=>[]),default:a(()=>[n(B,null,{default:a(()=>[i("Sicherung")]),_:1}),n(c,{subtype:"danger"},{default:a(()=>[i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master" oder "Beta" erstellt wurden! ')]),_:1}),n(c,{subtype:"info"},{default:a(()=>[i(" Nachdem die Sicherung abgeschlossen ist, kann die erstellte Datei über den Link in der Benachrichtigung oder "),ge,i(" heruntergeladen werden. ")]),_:1}),s("div",_e,[s("div",he,[n(f,{class:"btn-success clickable",onButtonClicked:e[6]||(e[6]=o=>l.sendSystemCommand("createBackup",{use_extended_filename:!0}))},{default:a(()=>[i(" Sicherung erstellen "),n(p,{"fixed-width":"",icon:["fas","archive"]})]),_:1})])]),ye,s("form",ke,[n(B,null,{default:a(()=>[i("Automatische Sicherung in einen Cloud-Dienst")]),_:1}),n(c,{subtype:"info"},{default:a(()=>[i(" Zwischen Mitternacht und 5:00 Uhr wird automatisch eine Sicherung erstellt und in den angegebenen Cloud-Dienst (nicht openWB Cloud!) hochgeladen. Ist kein Cloud-Dienst konfiguriert, wird keine automatische Sicherung erstellt. Die automatische Sicherung kann unabhängig von der openWB Cloud genutzt werden. ")]),_:1}),n(C,{class:"mb-2",title:"Backup-Cloud",options:l.backupCloudList,"model-value":t.$store.state.mqtt["openWB/system/backup_cloud/config"].type,"onUpdate:modelValue":e[7]||(e[7]=o=>l.updateSelectedBackupCloud(o))},null,8,["options","model-value"]),t.$store.state.mqtt["openWB/system/backup_cloud/config"].type?(b(),W(F,{key:0,backupCloudType:t.$store.state.mqtt["openWB/system/backup_cloud/config"].type,configuration:t.$store.state.mqtt["openWB/system/backup_cloud/config"].configuration,"onUpdate:configuration":e[8]||(e[8]=o=>l.updateConfiguration("openWB/system/backup_cloud/config",o))},null,8,["backupCloudType","configuration"])):S("v-if",!0),n(V,{formName:"systemCloudBackupForm",onSave:e[9]||(e[9]=o=>t.$emit("save")),onReset:e[10]||(e[10]=o=>t.$emit("reset")),onDefaults:e[11]||(e[11]=o=>t.$emit("defaults"))})]),n(x,{title:"Manuelle Cloud-Sicherung",buttonText:"Sicherung erzeugen und hochladen",subtype:"success",onButtonClicked:e[12]||(e[12]=o=>l.sendSystemCommand("createCloudBackup",{}))}),we,n(B,null,{default:a(()=>[i("Wiederherstellung")]),_:1}),n(c,{subtype:"danger"},{default:a(()=>[i(" Diese Funktion ist noch in Entwicklung! Es kann potentiell das System unbrauchbar werden. Nach Möglichkeit vorher ein Image der Installation erstellen!"),ve,i(" Für die Wiederherstellung wird eine aktive Internetverbindung benötigt."),Be,i(' Aktuell können nur Sicherungen wiederhergestellt werden, die in den Entwicklungszweigen "master" oder "Beta" erstellt wurden! ')]),_:1}),s("div",Ce,[s("div",Se,[s("div",We,[n(p,{"fixed-width":"",icon:["fas","file-archive"]})])]),s("div",qe,[s("input",{id:"input-file",type:"file",class:"custom-file-input",accept:".tar.gz,application/gzip,application/tar+gzip",onChange:e[13]||(e[13]=o=>l.updateSelectedFile(o))},null,32),s("label",Fe,v(d.selectedFile?d.selectedFile.name:"Bitte eine Datei auswählen"),1)]),s("div",Ve,[s("button",{class:k(["btn",d.selectedFile?"btn-success clickable":"btn-outline-success"]),disabled:!d.selectedFile,type:"button",onClick:e[14]||(e[14]=o=>l.uploadFile())},[i(" Hochladen "),n(p,{"fixed-width":"",icon:["fas","upload"]})],10,xe)])]),s("div",De,[s("div",Ae,[n(f,{class:k(d.restoreUploadDone?"btn-success clickable":"btn-outline-success"),disabled:!d.restoreUploadDone,onButtonClicked:e[15]||(e[15]=o=>l.sendSystemCommand("restoreBackup"))},{default:a(()=>[i(" Wiederherstellung starten "),n(p,{"fixed-width":"",icon:["fas","box-open"]})]),_:1},8,["class","disabled"])])])]),_:1})]),s("form",$e,[n(y,{title:"Betrieb",collapsible:!0,collapsed:!0},{footer:a(()=>[s("div",Te,[s("div",Oe,[n(f,{class:"btn-warning",onButtonClicked:e[16]||(e[16]=o=>l.sendSystemCommand("systemReboot"))},{default:a(()=>[i(" Neustart "),n(p,{"fixed-width":"",icon:["fas","undo"]})]),_:1})]),s("div",Ue,[n(f,{class:"btn-danger",onButtonClicked:e[17]||(e[17]=o=>l.sendSystemCommand("systemShutdown"))},{default:a(()=>[i(" Ausschalten "),n(p,{"fixed-width":"",icon:["fas","power-off"]})]),_:1})])])]),default:a(()=>[n(c,{subtype:"danger"},{default:a(()=>[i(" Wenn die Ladestation ausgeschaltet wird, muss sie komplett spannungsfrei geschaltet werden. Erst beim erneuten Zuschalten der Spannung fährt das System wieder hoch. ")]),_:1})]),_:1})]),s("form",je,[n(y,{title:"Entwicklungszweig",subtype:"danger",collapsible:!0,collapsed:!0},{footer:a(()=>[s("div",Ie,[s("div",Le,[n(f,{class:k(l.releaseChangeValid?"btn-danger clickable":"btn-outline-danger"),disabled:!l.releaseChangeValid,onButtonClicked:e[20]||(e[20]=o=>l.sendSystemCommand("systemUpdate",{branch:t.$store.state.mqtt["openWB/system/current_branch"],tag:d.selectedTag}))},{default:a(()=>[n(p,{"fixed-width":"",icon:["fas","skull-crossbones"]}),i(" Branch und Tag wechseln "),n(p,{"fixed-width":"",icon:["fas","skull-crossbones"]})]),_:1},8,["class","disabled"])])])]),default:a(()=>[n(c,{subtype:"danger"},{default:a(()=>[i(" Nach einem Wechsel wird die Ladestation direkt neu gestartet! Es werden alle lokalen Änderungen mit dem Wechsel verworfen! ")]),_:1}),n(c,{subtype:"warning"},{default:a(()=>[i(" Das ist eine experimentelle Option! Verwendung auf eigene Gefahr. Im schlimmsten Fall muss das system neu installiert werden!"),Ee,i(" ToDo: "),ze]),_:1}),n(C,{title:"Entwicklungszweig",options:l.getBranchOptions(),"model-value":t.$store.state.mqtt["openWB/system/current_branch"],"onUpdate:modelValue":e[18]||(e[18]=o=>t.updateState("openWB/system/current_branch",o))},null,8,["options","model-value"]),n(C,{title:"Tag",options:l.getBranchTagOptions(),modelValue:d.selectedTag,"onUpdate:modelValue":e[19]||(e[19]=o=>d.selectedTag=o)},null,8,["options","modelValue"])]),_:1})])])):S("v-if",!0)])}const Qe=q(ae,[["render",Ne],["__scopeId","data-v-059847f6"],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/System.vue"]]);export{Qe as default};
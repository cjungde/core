import{C as w}from"./index-3872039d.js";import{_ as W,q as g,l as r,m as d,u as s,A as i,K as l,v as a,y as v,z as _}from"./vendor-b78ff8c0.js";import"./vendor-fortawesome-12414438.js";import"./vendor-bootstrap-760bc08d.js";import"./vendor-jquery-41669b5b.js";import"./vendor-axios-a6fb860e.js";import"./vendor-sortablejs-116030fd.js";const B={name:"OpenwbPVChargeConfig",mixins:[w],data(){return{mqttTopicsToSubscribe:["openWB/general/extern","openWB/general/chargemode_config/pv_charging/control_range","openWB/general/chargemode_config/pv_charging/feed_in_yield","openWB/general/chargemode_config/pv_charging/switch_on_threshold","openWB/general/chargemode_config/pv_charging/switch_on_delay","openWB/general/chargemode_config/pv_charging/switch_off_threshold","openWB/general/chargemode_config/pv_charging/switch_off_delay","openWB/general/chargemode_config/pv_charging/phases_to_use","openWB/general/chargemode_config/pv_charging/phase_switch_delay","openWB/general/chargemode_config/pv_charging/bat_prio","openWB/general/chargemode_config/pv_charging/switch_on_soc","openWB/general/chargemode_config/pv_charging/switch_off_soc","openWB/general/chargemode_config/pv_charging/charging_power_reserve","openWB/general/chargemode_config/pv_charging/rundown_power","openWB/general/chargemode_config/pv_charging/rundown_soc"]}},methods:{calculateControlMode(){const e="openWB/general/chargemode_config/pv_charging/control_range";let n=this.$store.state.mqtt[e];if(typeof n<"u")return n[0]===-230&&n[1]===0?"export":n[0]===0&&n[1]===230?"import":"individual"},setControlMode(e){const n="openWB/general/chargemode_config/pv_charging/control_range";switch(console.debug("set controlMode",e),e){case"export":this.updateState(n,[-230,0]);break;case"import":this.updateState(n,[0,230]);break;case"individual":this.updateState(n,[-230,230]);break}},updateBatterySwitchOnSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e),e<=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",Math.max(0,e-5))},updateBatterySwitchOffSoc(e){this.updateState("openWB/general/chargemode_config/pv_charging/switch_off_soc",e),e>=this.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"]&&this.updateState("openWB/general/chargemode_config/pv_charging/switch_on_soc",e+5)}}},S={class:"pvChargeConfig"},k={name:"pvChargeConfigForm"},V={key:0},z={key:1},L=s("br",null,null,-1),C=s("hr",null,null,-1),M=s("br",null,null,-1),E=s("hr",null,null,-1),y=s("br",null,null,-1),$={key:0},q={key:1},A={key:0},U={key:1},P=s("br",null,null,-1),R=s("hr",null,null,-1);function D(e,n,N,I,O,u){const p=g("openwb-base-alert"),c=g("openwb-base-button-group-input"),o=g("openwb-base-number-input"),m=g("openwb-base-card"),h=g("openwb-base-range-input"),b=g("openwb-base-heading"),f=g("openwb-base-submit-buttons");return r(),d("div",S,[s("form",k,[i(m,{title:"Regelparameter"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(r(),d("div",V,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(r(),d("div",z,[i(c,{title:"Regelmodus",buttons:[{buttonValue:"export",text:"Einspeisung"},{buttonValue:"import",text:"Bezug"},{buttonValue:"individual",text:"Individuell"}],"model-value":u.calculateControlMode(),"onUpdate:modelValue":n[0]||(n[0]=t=>u.setControlMode(t))},{help:l(()=>[a(' Mit dieser Einstellung wird der angestrebte Regelbereich festgelegt. "Einspeisung" und "Bezug" definieren einen Bereich mit minimaler Einspeisung (-230W, 0W) bzw. minimalem Netzbezug (0W, 230W). Mit der Auswahl "individuell" kann ein eigener Regelbereich definiert werden. ')]),_:1},8,["model-value"]),u.calculateControlMode()==="individual"?(r(),v(o,{key:0,title:"Minimum",step:.01,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][0]/1e3,"onUpdate:modelValue":n[1]||(n[1]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"0"))},{help:l(()=>[a(" Untere Grenze des Regelbereichs. ")]),_:1},8,["step","model-value"])):_("v-if",!0),u.calculateControlMode()==="individual"?(r(),v(o,{key:1,title:"Maximum",step:.01,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/control_range"][1]/1e3,"onUpdate:modelValue":n[2]||(n[2]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/control_range",t*1e3,"1"))},{help:l(()=>[a("Obere Grenze des Regelbereichs.")]),_:1},8,["step","model-value"])):_("v-if",!0),i(o,{title:"Regelpunkt Einspeisegrenze",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/feed_in_yield"]/1e3,"onUpdate:modelValue":n[3]||(n[3]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/feed_in_yield",t*1e3))},{help:l(()=>[a(' Hier ist die vorgeschriebene Einspeisegrenze anzugeben. Wird die Option "Einspeisegrenze beachten" für ein Ladeprofil eingeschaltet, dann wird der Regelpunkt auf diesen Wert verschoben. Die Ladung startet demnach erst, wenn der hier hinterlegte Wert an Einspeisung erreicht wird. Der hier eingetragene Wert sollte zur optimalen Eigenverbrauchssteuerung einige hundert Watt unter der im Wechselrichter hinterlegten Einspeisegrenze liegen, damit openWB die Ladung freigibt, bevor der Wechselrichter begrenzt wird.'),L,a(" Die Nutzung dieser Option ergibt nur Sinn, wenn ein Wechselrichter mit Smart-Meter verbaut ist, welches eine dynamische Begrenzung der Einspeiseleistung bietet. ")]),_:1},8,["step","model-value"]),C,i(o,{title:"Einschaltschwelle",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_threshold"]/1e3,"onUpdate:modelValue":n[4]||(n[4]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_threshold",t*1e3))},{help:l(()=>[a(" Ist in Abhängigkeit von dem gesetzten Regelbereich mehr als die hier hinterlegte Leistung (pro Phase) verfügbar, dann wird der Ladevorgang gestartet. ")]),_:1},8,["step","model-value"]),i(o,{title:"Einschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_delay"],"onUpdate:modelValue":n[5]||(n[5]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_on_delay",t))},{help:l(()=>[a(" Die Einschaltschwelle muss für die hier angegebene Zeit dauerhaft überschritten werden, bevor ein Ladevorgang gestartet wird."),M,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird weiter geladen, wenn die Abschaltschwelle nicht unterschritten wird. ")]),_:1},8,["model-value"]),E,i(o,{title:"Abschaltschwelle",min:0,step:.05,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_threshold"]/1e3,"onUpdate:modelValue":n[6]||(n[6]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_threshold",t*1e3))},{help:l(()=>[a(" Wird der Regelbereich um diese Leistung unterschritten, so wird der Ladevorgang beendet oder (falls möglich) auf eine einphasige Ladung umgeschaltet. ")]),_:1},8,["step","model-value"]),i(o,{title:"Abschaltverzögerung",min:0,step:1,unit:"s","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_delay"],"onUpdate:modelValue":n[7]||(n[7]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/switch_off_delay",t))},{help:l(()=>[a(" Die Abschaltschwelle muss für die hier angegebene Zeit dauerhaft unterschritten werden, bevor ein Ladevorgang beendet wird."),y,a(" Wenn ein Ladevorgang aktiv ist und auf PV-Laden umgeschaltet wird, wird die Ladung sofort beendet, wenn die Abschaltschwelle unterschritten wird. ")]),_:1},8,["model-value"])]))]),_:1}),i(m,{title:"Phasenumschaltung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(r(),d("div",$,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(r(),d("div",q,[i(c,{title:"Anzahl Phasen",buttons:[{buttonValue:1,text:"1"},{buttonValue:3,text:"Maximum"},{buttonValue:0,text:"Automatik"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"],"onUpdate:modelValue":n[8]||(n[8]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phases_to_use",t))},{help:l(()=>[a(' Hier kann eingestellt werden, ob Ladevorgänge im Modus "PV-Laden" mit nur einer Phase oder dem möglichen Maximum in Abhängigkeit vom Ladepunkt und Fahrzeug durchgeführt werden. Im Modus "Automatik" entscheidet die Regelung, welche Einstellung genutzt wird, um den verfügbaren Überschuss in die Fahrzeuge zu laden. ')]),_:1},8,["model-value"]),e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phases_to_use"]==0?(r(),v(h,{key:0,title:"Verzögerung automat. Phasenumschaltung",min:1,max:15,step:1,unit:"Min.","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/phase_switch_delay"],"onUpdate:modelValue":n[9]||(n[9]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/phase_switch_delay",t))},{help:l(()=>[a(" Um zu viele Umschaltungen zu vermeiden, wird Anhand dieses Wertes definiert, wann die Umschaltung erfolgen soll. Ist für durchgehend x Minuten die Maximalstromstärke erreicht, wird auf mehrphasige Ladung umgestellt. Ist die Ladung nur für ein Intervall unterhalb der Maximalstromstärke, beginnt das Intervall für die Umschaltung erneut. Ist die Ladung im mehrphasigen Modus für 16 - x Minuten auf der Minimalstromstärke, wird wieder auf einphasige Ladung gewechselt. ")]),_:1},8,["model-value"])):_("v-if",!0)]))]),_:1}),i(m,{title:"Speicher-Beachtung"},{default:l(()=>[e.$store.state.mqtt["openWB/general/extern"]===!0?(r(),d("div",A,[i(p,{subtype:"info"},{default:l(()=>[a(' Diese Einstellungen sind nicht verfügbar, solange sich diese openWB im Modus "Nur Ladepunkt" befindet. ')]),_:1})])):(r(),d("div",U,[i(c,{title:"Priorisierung",buttons:[{buttonValue:!1,text:"Fahrzeuge"},{buttonValue:!0,text:"Speicher"}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/bat_prio"],"onUpdate:modelValue":n[10]||(n[10]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/bat_prio",t))},{help:l(()=>[a(' Bei der Auswahl "Fahrzeuge" wird auch eventuell vorhandene Ladeleistung eines Speichers für die verfügbare Ladeleistung berücksichtigt. Im Modus "Speicher" hingegen wird dieser nicht in seiner Ladeleistung begrenzt.'),P,a(" Beide Modi lassen sich mit den zusätzlichen Einstellungen an die eigenen Bedürfnisse anpassen, sodass auch ein Mischbetrieb möglich ist. ")]),_:1},8,["model-value"]),i(o,{title:"Reservierte Ladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/charging_power_reserve"]/1e3,"onUpdate:modelValue":n[11]||(n[11]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/charging_power_reserve",t*1e3))},{help:l(()=>[a("Diese Speicher-Leistung wird von der Regelung auch bei EV-Vorrang nicht zum Laden verwendet und bleibt immer dem Speicher vorbehalten.")]),_:1},8,["step","model-value"]),i(o,{title:"Erlaubte Entladeleistung",min:0,step:.1,unit:"kW","model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_power"]/1e3,"onUpdate:modelValue":n[12]||(n[12]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_power",t*1e3))},{help:l(()=>[a("Die erlaubte Entladeleistung wird von der Regelung bei Speicher-Vorrang zum Laden der Fahrzeuge verwendet, solange der Speicher-Soc über dem minimalen Entlade-SoC liegt.")]),_:1},8,["step","model-value"]),i(h,{title:"Minimaler Entlade-SoC",min:0,max:20,step:1,unit:"%",labels:[{label:0,value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95},{label:"Aus",value:100}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/rundown_soc"],"onUpdate:modelValue":n[13]||(n[13]=t=>e.updateState("openWB/general/chargemode_config/pv_charging/rundown_soc",t))},{help:l(()=>[a(" Ein vorhandener Speicher wird im Modus PV-Laden mit der erlaubten Entladeleistung höchstens bis zu dem hier eingestellten Ladestand entladen. ")]),_:1},8,["model-value"]),R,i(b,null,{default:l(()=>[a(" Laden mit Mindeststrom ")]),_:1}),i(h,{title:"Einschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90},{label:95,value:95}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_on_soc"],"onUpdate:modelValue":n[14]||(n[14]=t=>u.updateBatterySwitchOnSoc(t))},{help:l(()=>[a("Wenn der Speicher den Einschalt-SoC erreicht, wird dieser im Modus PV-Laden bei aktiviertem Mindeststrom bis zum Ausschalt-SoC entladen, auch wenn kein Überschuss vorhanden ist. Der Einschalt-SoC muss größer oder gleich dem Ausschalt-SoC sein.")]),_:1},8,["model-value"]),i(h,{title:"Ausschalt-SoC",min:0,max:18,step:1,unit:"%",labels:[{label:"Aus",value:0},{label:5,value:5},{label:10,value:10},{label:15,value:15},{label:20,value:20},{label:25,value:25},{label:30,value:30},{label:35,value:35},{label:40,value:40},{label:45,value:45},{label:50,value:50},{label:55,value:55},{label:60,value:60},{label:65,value:65},{label:70,value:70},{label:75,value:75},{label:80,value:80},{label:85,value:85},{label:90,value:90}],"model-value":e.$store.state.mqtt["openWB/general/chargemode_config/pv_charging/switch_off_soc"],"onUpdate:modelValue":n[15]||(n[15]=t=>u.updateBatterySwitchOffSoc(t))},{help:l(()=>[a("Wenn der Speicher den Einschalt-SoC erreicht, wird dieser im Modus PV-Laden bis zum Ausschalt-SoC entladen. Der Einschalt-SoC muss größer oder gleich dem Ausschalt-SoC sein.")]),_:1},8,["model-value"])]))]),_:1}),i(f,{formName:"pvChargeConfigForm",onSave:n[16]||(n[16]=t=>e.$emit("save")),onReset:n[17]||(n[17]=t=>e.$emit("reset")),onDefaults:n[18]||(n[18]=t=>e.$emit("defaults"))})])])}const J=W(B,[["render",D],["__file","/opt/openWB-dev/openwb-ui-settings/src/views/PVChargeConfig.vue"]]);export{J as default};

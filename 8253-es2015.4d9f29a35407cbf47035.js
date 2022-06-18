(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[8253],{8253:function(t,i,e){"use strict";e.r(i),e.d(i,{BotSetupPageModule:function(){return P}});var o=e(1116),n=e(1462),s=e(6611),r=e(2782),c=e(4762),h=e(8619),a=e(6907),l=e(2693),u=e(1779),g=e(8993);function d(t,i){if(1&t){const t=h.EpF();h.TgZ(0,"div",5),h.TgZ(1,"ion-icon",6),h.NdJ("click",function(i){return h.CHM(t),h.oxw().onDeleteBot(i)}),h.qZA(),h.qZA()}}function m(t,i){if(1&t&&(h.TgZ(0,"ion-row"),h.TgZ(1,"ion-col"),h._uU(2),h.ALo(3,"date"),h.qZA(),h.TgZ(4,"ion-col"),h._uU(5),h.qZA(),h.TgZ(6,"ion-col"),h._uU(7),h.qZA(),h.qZA()),2&t){const t=i.$implicit,e=h.oxw(2);h.xp6(2),h.Oqu(h.xi3(3,3,t.D,"dd/MM HH:mm")),h.xp6(3),h.Oqu(e.shortNumberDisplay(t.Q,1,3)),h.xp6(2),h.Oqu(t.P)}}function v(t,i){if(1&t){const t=h.EpF();h.TgZ(0,"div"),h.TgZ(1,"ion-item",7),h.TgZ(2,"span",0),h.TgZ(3,"ion-chip",8),h.NdJ("click",function(i){return h.CHM(t),h.oxw().onShowOutput(i)}),h._UZ(4,"ion-icon",9),h.TgZ(5,"ion-label"),h._uU(6,"transactions "),h.qZA(),h._UZ(7,"ion-icon",10),h.qZA(),h.qZA(),h.TgZ(8,"span",5),h.TgZ(9,"ion-chip",8),h.NdJ("click",function(i){return h.CHM(t),h.oxw().onDeleteOutput(i)}),h._UZ(10,"ion-icon",11),h.TgZ(11,"ion-label"),h._uU(12,"init bot "),h.qZA(),h._UZ(13,"ion-icon",10),h.qZA(),h.qZA(),h.qZA(),h.TgZ(14,"ion-item"),h.TgZ(15,"p"),h._uU(16),h.qZA(),h.qZA(),h.TgZ(17,"ion-grid",12),h.TgZ(18,"ion-row"),h.TgZ(19,"ion-col"),h._uU(20,"Date"),h.qZA(),h.TgZ(21,"ion-col"),h._uU(22,"Qty"),h.qZA(),h.TgZ(23,"ion-col"),h._uU(24,"Price"),h.qZA(),h.qZA(),h.YNc(25,m,8,6,"ion-row",13),h.qZA(),h.qZA()}if(2&t){const t=h.oxw();h.xp6(16),h.xDo("Q ",t.shortNumberDisplay(t.dNetQuantity,1,3),", $ ",t.dNetInvestment.toFixed(2),", Avg ",t.dAvgPrice.toFixed(7),", Avg ",t.d3PctPrice.toFixed(7),", Avg ",t.d5PctPrice.toFixed(7),""),h.xp6(9),h.Q6J("ngForOf",t.oT)}}const f=["","K","M","B","T","Q"],p=[{path:"",component:(()=>{class t{constructor(t,i,e,o,n){this.oLocation=t,this.oAPIService=i,this.http=e,this.router=o,this.oStorage=n,this.sExchange="<notSet>",this.sStrategy="<notSet>",this.sKey=void 0,this.sTitle=void 0,this.bLoaded=!1,this.bNew=!0,this.oT=[],this.dNetInvestment=0,this.dNetQuantity=0,this.dAvgPrice=0,this.d3PctPrice=0,this.d5PctPrice=0;var s=this.oLocation.getState();console.log(s),this.bNew=s.isNew,null==s||s.isNew||(this.sStrategy=s.Strategy,this.sExchange=s.Exchange,this.sKey=this.getKey(s),console.log(this.sKey),this.oP=s,this.updateValues(s)),null!=s&&s.isNew&&(this.sStrategy=s.Strategy,this.sExchange=s.Exchange,console.log("New Bot Configuration:",this.sStrategy)),this.sTitle=this.getTitle(s)}onBack(){return(0,c.mG)(this,void 0,void 0,function*(){this.oLocation.back()})}getKey(t){return this.sExchange+"_"+this.sStrategy+"_"+t.A+t.B}getTitle(t){return this.sExchange+"_"+this.sStrategy}shortNumberDisplay(t,i,e){if(0===t)return t;const o=Math.floor(Math.log10(Math.abs(t))/3),n=f[o];return(t/Math.pow(10,3*o)).toLocaleString(void 0,{minimumFractionDigits:i,maximumFractionDigits:e})+n}readParameters(t){return(0,c.mG)(this,void 0,void 0,function*(){this.oP=yield this.oStorage.get(t),this.updateValues(this.oP)})}ngOnInit(){this.http.get("/assets/strategy-"+this.sStrategy+".json").subscribe(t=>(0,c.mG)(this,void 0,void 0,function*(){this.formData=t,this.updateValues(this.oP)}))}updateValues(t){if(void 0===t||null==t||null==this.formData)return;if(this.bLoaded)return;this.bLoaded=!0,console.log(this.oP);let i=this.formData.controls.length,e=Object.keys(t);for(var o=0;o<e.length;o++){let n=e[o];for(let e=0;e<i;e++)this.formData.controls[e].name==n&&(this.formData.controls[e].value=t[n])}console.log(this.formData.controls)}onDeleteBot(t){return(0,c.mG)(this,void 0,void 0,function*(){yield this.oAPIService.send2ServerPDelete("bot-config/"+this.getKey(this.oP)).then(t=>(0,c.mG)(this,void 0,void 0,function*(){void 0!==this.sKey&&(yield this.oStorage.remove(this.sKey)),yield this.router.navigateByUrl("bot-list")}))})}onDeleteOutput(t){return(0,c.mG)(this,void 0,void 0,function*(){console.log(t),yield this.oAPIService.send2ServerPDelete("output/"+this.getKey(this.oP))})}getDecimalPlaces(t){const i=String(t);return i.includes(".")?i.split(".")[1].length:0}onShowOutput(t){return(0,c.mG)(this,void 0,void 0,function*(){this.oT=[],yield this.oAPIService.send2ServerP("output/"+this.getKey(this.oP)).then(t=>(0,c.mG)(this,void 0,void 0,function*(){if(void 0===t||void 0===t.T)return;let i=t.T.length;this.dNetInvestment=0,this.dNetQuantity=0;for(var e=0;e<i;e++){if("FILLED"!=t.T[e].Status)continue;let i=t.T[e].D,o=this.getDecimalPlaces(t.T[e].Q),n=this.getDecimalPlaces(t.T[e].P);o=n<3?Math.min(o+n,7):Math.min(o,0),"S"==t.T[e].Dir&&(t.T[e].Q=-1*t.T[e].Q),this.dNetInvestment+=t.T[e].P*t.T[e].Q,this.dNetQuantity+=t.T[e].Q,this.oT.push({D:i,Q:t.T[e].Q.toFixed(o),P:t.T[e].P.toFixed(Math.min(n,8)),$:Number(t.T[e].Q)*Number(t.T[e].P)})}console.log("Total $",this.dNetInvestment),console.log("Total Qty",this.dNetQuantity),0!=this.dNetQuantity&&(this.dAvgPrice=this.dNetInvestment/this.dNetQuantity),console.log("Avg $",this.dAvgPrice),this.dNetQuantity<0?(this.d3PctPrice=.97*this.dAvgPrice,this.d5PctPrice=.95*this.dAvgPrice):(this.d3PctPrice=1.03*this.dAvgPrice,this.d5PctPrice=1.05*this.dAvgPrice)}))})}onFormSubmit(t){return(0,c.mG)(this,void 0,void 0,function*(){this.bNew&&(t.Exchange=this.sExchange),console.log(t.Exchange,this.sExchange),this.sKey=this.getKey(t),console.log(this.sKey),this.oStorage.set(this.sKey,t),console.log(t),yield this.oAPIService.send2ServerP("bot-config",!0,t),yield this.router.navigateByUrl("bot-list")})}}return t.\u0275fac=function(i){return new(i||t)(h.Y36(o.Ye),h.Y36(a.D),h.Y36(l.eN),h.Y36(r.F0),h.Y36(u.V))},t.\u0275cmp=h.Xpm({type:t,selectors:[["app-bot-setup"]],decls:11,vars:4,consts:[["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding"],[3,"jsonFormData","formSubmission"],[4,"ngIf"],["slot","end"],["name","trash",3,"click"],["item-end",""],[3,"click"],["name","albums","color","primary"],["color","primary"],["name","close","color","primary"],[1,"ion-margin"],[4,"ngFor","ngForOf"]],template:function(t,i){1&t&&(h.TgZ(0,"ion-header"),h.TgZ(1,"ion-toolbar"),h.TgZ(2,"ion-title"),h._uU(3),h.qZA(),h.TgZ(4,"ion-buttons",0),h._UZ(5,"ion-back-button"),h.qZA(),h.YNc(6,d,2,0,"div",1),h.qZA(),h.qZA(),h.TgZ(7,"ion-content",2),h.TgZ(8,"div"),h.TgZ(9,"app-json-form",3),h.NdJ("formSubmission",function(t){return i.onFormSubmit(t)}),h.qZA(),h.qZA(),h.YNc(10,v,26,6,"div",4),h.qZA()),2&t&&(h.xp6(3),h.Oqu(i.sTitle),h.xp6(3),h.Q6J("ngIf",void 0!==i.sKey),h.xp6(3),h.Q6J("jsonFormData",i.formData),h.xp6(1),h.Q6J("ngIf",void 0!==i.sKey))},directives:[s.Gu,s.sr,s.wd,s.Sm,s.oU,s.cs,o.O5,s.W2,g.u,s.gu,s.Ie,s.hM,s.Q$,s.jY,s.Nd,s.wI,o.sg],pipes:[o.uU],styles:["ion-col[_ngcontent-%COMP%]{text-align:right}ion-icon[_ngcontent-%COMP%]{margin:10px;font-size:large}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[r.Bz.forChild(p)],r.Bz]}),t})();var y=e(6737);let P=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[[o.ez,n.UX,s.Pc,Z,l.JF,y.G]]}),t})()}}]);
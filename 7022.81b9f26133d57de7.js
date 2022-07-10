"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7022],{7022:(U,p,h)=>{h.r(p),h.d(p,{BotSetupPageModule:()=>b});var d=h(9808),S=h(4182),c=h(7181),f=h(333),a=h(655),t=h(2096),y=h(3),P=h(520),T=h(6955),Z=h(5449);function x(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div",5)(1,"ion-icon",6),t.NdJ("click",function(l){return t.CHM(e),t.oxw().onDeleteBot(l)}),t.qZA()()}}function _(o,u){if(1&o&&(t.TgZ(0,"ion-col"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.hij("Price 10^",e.leadingZeros," ")}}function A(o,u){1&o&&(t.TgZ(0,"ion-col"),t._uU(1,"Price "),t.qZA())}function N(o,u){if(1&o&&(t.TgZ(0,"ion-row")(1,"ion-col"),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"ion-col"),t._uU(5),t.qZA(),t.TgZ(6,"ion-col"),t._uU(7),t.qZA()()),2&o){const e=u.$implicit,i=t.oxw(2);t.xp6(2),t.Oqu(t.xi3(3,3,e.D,"dd/MM HH:mm")),t.xp6(3),t.Oqu(i.shortNumberDisplay(e.Q,1,3)),t.xp6(2),t.Oqu(i.shortAmount(e.P))}}function B(o,u){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"ion-item",7)(2,"span",0)(3,"ion-chip",8),t.NdJ("click",function(l){return t.CHM(e),t.oxw().onShowOutput(l)}),t._UZ(4,"ion-icon",9),t.TgZ(5,"ion-label"),t._uU(6,"transactions "),t.qZA(),t._UZ(7,"ion-icon",10),t.qZA()(),t.TgZ(8,"span",5)(9,"ion-chip",8),t.NdJ("click",function(l){return t.CHM(e),t.oxw().onDeleteOutput(l)}),t._UZ(10,"ion-icon",11),t.TgZ(11,"ion-label"),t._uU(12,"init bot "),t.qZA(),t._UZ(13,"ion-icon",10),t.qZA()()(),t.TgZ(14,"ion-item")(15,"p"),t._uU(16),t.qZA()(),t.TgZ(17,"ion-grid",12)(18,"ion-row")(19,"ion-col"),t._uU(20,"Date"),t.qZA(),t.TgZ(21,"ion-col"),t._uU(22,"Qty"),t.qZA(),t.YNc(23,_,2,1,"ion-col",4),t.YNc(24,A,2,0,"ion-col",4),t.qZA(),t.YNc(25,N,8,6,"ion-row",13),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(16),t.xDo("Q ",e.shortNumberDisplay(e.dNetQuantity,1,3),", $ ",e.dNetInvestment.toFixed(2),", Avg ",e.dAvgPrice.toFixed(11),", 3% ",e.d3PctPrice.toFixed(11),", 5% ",e.d5PctPrice.toFixed(11),""),t.xp6(7),t.Q6J("ngIf",e.leadingZeros>0),t.xp6(1),t.Q6J("ngIf",e.leadingZeros<=0),t.xp6(1),t.Q6J("ngForOf",e.oT)}}const M=["","K","M","B","T","Q"],D=[{path:"",component:(()=>{class o{constructor(e,i,l,r,n){this.oLocation=e,this.oAPIService=i,this.http=l,this.router=r,this.oStorage=n,this.sExchange="<notSet>",this.sStrategy="<notSet>",this.sKey=void 0,this.sTitle=void 0,this.bLoaded=!1,this.bNew=!0,this.oT=[],this.dNetInvestment=0,this.dNetQuantity=0,this.dAvgPrice=0,this.d3PctPrice=0,this.d5PctPrice=0,this.dMinPrice=0,this.leadingZeros=0;var s=this.oLocation.getState();console.log(s),this.bNew=s.isNew,null!=s&&!s.isNew&&(this.sStrategy=s.Strategy,this.sExchange=s.Exchange,this.sKey=this.getKey(s),console.log(this.sKey),this.oP=s,this.updateValues(s)),null!=s&&s.isNew&&(this.sStrategy=s.Strategy,this.sExchange=s.Exchange,console.log("New Bot Configuration:",this.sStrategy)),this.sTitle=this.getTitle(s)}onBack(){return(0,a.mG)(this,void 0,void 0,function*(){this.oLocation.back()})}getKey(e){return this.sExchange+"_"+this.sStrategy+"_"+e.A+e.B}getTitle(e){return this.sExchange+"_"+this.sStrategy}shortAmount(e){return this.leadingZeros<=0?e.toFixed(7).replace(/\.?0+$/,""):(e*Math.pow(10,this.leadingZeros)).toFixed(this.leadingZeros+1)}shortNumberDisplay(e,i,l){if(0===e)return e;const r=Math.floor(Math.log10(Math.abs(e))/3),n=M[r];return(e/Math.pow(10,3*r)).toLocaleString(void 0,{minimumFractionDigits:i,maximumFractionDigits:l})+n}readParameters(e){return(0,a.mG)(this,void 0,void 0,function*(){this.oP=yield this.oStorage.get(e),this.updateValues(this.oP)})}ngOnInit(){this.http.get("/assets/strategy-"+this.sStrategy+".json").subscribe(e=>(0,a.mG)(this,void 0,void 0,function*(){this.formData=e,this.updateValues(this.oP)}))}updateValues(e){if(void 0===e||null==e||null==this.formData||this.bLoaded)return;this.bLoaded=!0,console.log(this.oP);let i=this.formData.controls.length,l=Object.keys(e);for(var r=0;r<l.length;r++){let n=l[r];for(let s=0;s<i;s++)this.formData.controls[s].name==n&&(this.formData.controls[s].value=e[n])}console.log(this.formData.controls)}onDeleteBot(e){return(0,a.mG)(this,void 0,void 0,function*(){yield this.oAPIService.send2ServerPDelete("bot-config/"+this.getKey(this.oP)).then(i=>(0,a.mG)(this,void 0,void 0,function*(){void 0!==this.sKey&&(yield this.oStorage.remove(this.sKey)),yield this.router.navigateByUrl("bot-list")}))})}onDeleteOutput(e){return(0,a.mG)(this,void 0,void 0,function*(){console.log(e),yield this.oAPIService.send2ServerPDelete("output/"+this.getKey(this.oP))})}getDecimalPlaces(e){const i=String(e);return i.includes(".")?i.split(".")[1].length:0}onShowOutput(e){return(0,a.mG)(this,void 0,void 0,function*(){this.oT=[],this.dMinPrice=Number.MAX_VALUE,yield this.oAPIService.send2ServerP("output/"+this.getKey(this.oP)).then(i=>(0,a.mG)(this,void 0,void 0,function*(){if(void 0===i||void 0===i.T)return;let l=i.T.length;this.dNetInvestment=0,this.dNetQuantity=0;for(var n=0;n<l;n++){if("FILLED"!=i.T[n].Status)continue;let I=i.T[n].D,g=this.getDecimalPlaces(i.T[n].Q),v=this.getDecimalPlaces(i.T[n].P);g=v<3?Math.min(g+v,7):Math.min(g,0),this.dMinPrice=Math.min(i.T[n].P),"S"==i.T[n].Dir?(i.T[n].Q=-1*i.T[n].Q,this.dNetInvestment+=i.T[n].P*i.T[n].Q*.998):this.dNetInvestment+=i.T[n].P*i.T[n].Q*1.002,this.dNetQuantity+=i.T[n].Q,this.oT.push({D:I,Q:i.T[n].Q.toFixed(g),P:i.T[n].P,$:Number(i.T[n].Q)*Number(i.T[n].P)})}if((""+this.dMinPrice).split("."),this.dMinPrice>=1e-4)this.leadingZeros=0;else{var m=this.dMinPrice.toFixed(18).replace(/\.?0+$/,"");this.leadingZeros=m.substring(0,m.lastIndexOf("0")+1).length-2,this.leadingZeros<3?this.leadingZeros=0:this.leadingZeros-=2}0!=this.dNetQuantity&&(this.dAvgPrice=this.dNetInvestment/this.dNetQuantity),this.dNetQuantity<0?(this.d3PctPrice=.97*this.dAvgPrice,this.d5PctPrice=.95*this.dAvgPrice):(this.d3PctPrice=1.03*this.dAvgPrice,this.d5PctPrice=1.05*this.dAvgPrice)}))})}onFormSubmit(e){return(0,a.mG)(this,void 0,void 0,function*(){this.bNew&&(e.Exchange=this.sExchange),console.log(e.Exchange,this.sExchange),this.sKey=this.getKey(e),console.log(this.sKey),this.oStorage.set(this.sKey,e),console.log(e),yield this.oAPIService.send2ServerP("bot-config",!0,e),yield this.router.navigateByUrl("bot-list")})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.Ye),t.Y36(y.D),t.Y36(P.eN),t.Y36(f.F0),t.Y36(T.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-bot-setup"]],decls:11,vars:4,consts:[["slot","start"],["slot","end",4,"ngIf"],[1,"ion-padding"],[3,"jsonFormData","formSubmission"],[4,"ngIf"],["slot","end"],["name","trash",3,"click"],["item-end",""],[3,"click"],["name","albums","color","primary"],["color","primary"],["name","close","color","primary"],[1,"ion-margin"],[4,"ngFor","ngForOf"]],template:function(e,i){1&e&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),t._uU(3),t.qZA(),t.TgZ(4,"ion-buttons",0),t._UZ(5,"ion-back-button"),t.qZA(),t.YNc(6,x,2,0,"div",1),t.qZA()(),t.TgZ(7,"ion-content",2)(8,"div")(9,"app-json-form",3),t.NdJ("formSubmission",function(r){return i.onFormSubmit(r)}),t.qZA()(),t.YNc(10,B,26,8,"div",4),t.qZA()),2&e&&(t.xp6(3),t.Oqu(i.sTitle),t.xp6(3),t.Q6J("ngIf",void 0!==i.sKey),t.xp6(3),t.Q6J("jsonFormData",i.formData),t.xp6(1),t.Q6J("ngIf",void 0!==i.sKey))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.oU,c.cs,d.O5,c.gu,c.W2,Z.u,c.Ie,c.hM,c.Q$,c.jY,c.Nd,c.wI,d.sg],pipes:[d.uU],styles:["ion-col[_ngcontent-%COMP%]{text-align:right}ion-icon[_ngcontent-%COMP%]{margin:10px;font-size:large}"]}),o})()}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[f.Bz.forChild(D)],f.Bz]}),o})();var F=h(5441);let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,S.UX,c.Pc,Q,P.JF,F.G]]}),o})()}}]);
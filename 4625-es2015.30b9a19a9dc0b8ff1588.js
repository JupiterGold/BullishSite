(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[4625],{14625:function(t,o,i){"use strict";i.r(o),i.d(o,{BotListPageModule:function(){return f}});var n=i(61116),e=i(11462),s=i(42693),c=i(96611),r=i(2782),g=i(64762),a=i(8619),u=i(6907),l=i(91779),d=i(63750);function h(t,o){if(1&t){const t=a.EpF();a.TgZ(0,"ion-col",6),a.TgZ(1,"ion-card",7),a.TgZ(2,"ion-card-header"),a.TgZ(3,"ion-card-subtitle"),a._UZ(4,"img",8),a.TgZ(5,"ion-toggle",9),a.NdJ("click",function(){const o=a.CHM(t).$implicit,i=a.oxw();return o.Enabled=!o.Enabled,i.onEnableDisableBot(o)}),a.qZA(),a.qZA(),a.qZA(),a.TgZ(6,"ion-card"),a.TgZ(7,"ion-card-content"),a.TgZ(8,"ion-row",3),a.NdJ("click",function(){const o=a.CHM(t).$implicit;return a.oxw().onEditBot(o)}),a.TgZ(9,"ion-col"),a._uU(10),a.qZA(),a.TgZ(11,"ion-col",10),a._uU(12),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()}if(2&t){const t=o.$implicit,i=a.oxw();a.Q6J("size",12),a.xp6(4),a.Q6J("src",i.getLogo(t),a.LSH),a.xp6(1),a.s9C("checked",t.Enabled),a.xp6(5),a.lnq("",t.A,"/",t.B," [",t.Strategy,"]"),a.xp6(2),a.hij(" Invest ",t.$," ")}}const Z=[{path:"",component:(()=>{class t{constructor(t,o,i,n,e){this.http=t,this.oAPIService=o,this.router=i,this.oStorage=n,this.auth=e,this.oBotList=[],this.bRemote=!0}ngOnInit(){}onLogout(){return(0,g.mG)(this,void 0,void 0,function*(){this.auth.logout(),yield this.router.navigateByUrl("")})}onCreateBot(){return(0,g.mG)(this,void 0,void 0,function*(){yield this.router.navigateByUrl("bot-strategy")})}onEditBot(t){return(0,g.mG)(this,void 0,void 0,function*(){yield this.router.navigateByUrl("bot-setup",{state:t})})}onEnableDisableBot(t){return(0,g.mG)(this,void 0,void 0,function*(){this.oStorage.set(t.Exchange+"_"+t.Strategy+"_"+t.A+t.B,t),this.bRemote&&(yield this.oAPIService.send2ServerP("bot-config",!0,t)),this.ionViewWillEnter()})}ionViewWillEnter(){this.bRemote?this.oAPIService.send2ServerP("bot-config",!1).then(t=>(0,g.mG)(this,void 0,void 0,function*(){this.oBotList=t})):this.oStorage.getBots().then(t=>{this.oBotList=t})}getLogo(t){let o=t.Exchange;return"aax"==o?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-cjwYdOQkpnvfr2gygRlocp8Od5R1LzmFRe3FSiW7u4VTppf":"kucoin"==o?"https://assets.staticimg.com/cms/media/1lB3PkckFDyfxz6VudCEACBeRRBi6sQQ7DDjz0yWM.svg":"lbank"==o?"https://www.lbank.info/fstatic/img/logo-03.svg":""}}return t.\u0275fac=function(o){return new(o||t)(a.Y36(s.eN),a.Y36(u.D),a.Y36(r.F0),a.Y36(l.V),a.Y36(d.$))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-bot-list"]],decls:13,vars:1,consts:[["color","dark"],[1,"ion-text-capitalize"],["slot","end"],[3,"click"],["fixed",""],["size-sm","6","size-md","4","size-lg","4",3,"size",4,"ngFor","ngForOf"],["size-sm","6","size-md","4","size-lg","4",3,"size"],["mode","ios"],[1,"card-img",3,"src"],[2,"float","right",3,"checked","click"],["ion-align-items-end",""]],template:function(t,o){1&t&&(a.TgZ(0,"ion-header",0),a.TgZ(1,"ion-toolbar"),a.TgZ(2,"ion-title",1),a._uU(3,"Botsv1.0"),a.qZA(),a.TgZ(4,"ion-buttons",2),a.TgZ(5,"ion-button",3),a.NdJ("click",function(){return o.onCreateBot()}),a._uU(6,"New Bot"),a.qZA(),a.TgZ(7,"ion-button",3),a.NdJ("click",function(){return o.onLogout()}),a._uU(8,"Logout"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.TgZ(9,"ion-content",0),a.TgZ(10,"ion-grid",4),a.TgZ(11,"ion-row"),a.YNc(12,h,13,7,"ion-col",5),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.xp6(12),a.Q6J("ngForOf",o.oBotList))},directives:[c.Gu,c.sr,c.wd,c.Sm,c.YG,c.W2,c.jY,c.Nd,n.sg,c.wI,c.PM,c.Zi,c.tO,c.ho,c.w,c.FN],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[r.Bz.forChild(Z)],r.Bz]}),t})(),f=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[n.ez,e.UX,c.Pc,m,s.JF]]}),t})()}}]);
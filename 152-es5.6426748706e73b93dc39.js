!function(){function n(n,t,e,r,o,i,u){try{var c=n[i](u),s=c.value}catch(a){return void e(a)}c.done?t(s):Promise.resolve(s).then(r,o)}function t(t){return function(){var e=this,r=arguments;return new Promise(function(o,i){var u=t.apply(e,r);function c(t){n(u,o,i,c,s,"next",t)}function s(t){n(u,o,i,c,s,"throw",t)}c(void 0)})}}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[152],{40152:function(n,e,r){"use strict";r.r(e),r.d(e,{startStatusTap:function(){return u}});var o=r(52322),i=r(71843),u=function(){var n=window;n.addEventListener("statusTap",function(){(0,o.f)(function(){var e=document.elementFromPoint(n.innerWidth/2,n.innerHeight/2);if(e){var r=e.closest("ion-content");r&&new Promise(function(n){return(0,i.c)(r,n)}).then(function(){(0,o.c)(t(regeneratorRuntime.mark(function n(){return regeneratorRuntime.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return r.style.setProperty("--overflow","hidden"),n.next=3,r.scrollToTop(300);case 3:r.style.removeProperty("--overflow");case 4:case"end":return n.stop()}},n)})))})}})})}}}])}();
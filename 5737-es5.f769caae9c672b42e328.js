!function(){function e(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function r(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(self.webpackChunkjson_bot_ui=self.webpackChunkjson_bot_ui||[]).push([[5737],{15737:function(t,n,i){"use strict";i.r(n),i.d(n,{ion_spinner:function(){return c}});var s=i(52322),a=i(47505),o=i(44843),l=i(29926),c=function(){function t(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,t),(0,s.r)(this,e),this.paused=!1}var n,i,c;return n=t,(i=[{key:"getName",value:function(){var e=this.name||a.c.get("spinner"),r=(0,a.b)(this);return e||("ios"===r?"lines":"circular")}},{key:"render",value:function(){var r,t=(0,a.b)(this),n=this.getName(),i=l.S[n]||l.S.lines,c="number"==typeof this.duration&&this.duration>10?this.duration:i.dur,u=[];if(void 0!==i.circles)for(var m=0;m<i.circles;m++)u.push(f(i,c,m,i.circles));else if(void 0!==i.lines)for(var k=0;k<i.lines;k++)u.push(p(i,c,k,i.lines));return(0,s.h)(s.H,{class:(0,o.c)(this.color,(r={},e(r,t,!0),e(r,"spinner-".concat(n),!0),e(r,"spinner-paused",!!this.paused||a.c.getBoolean("_testing")),r)),role:"progressbar",style:i.elmDuration?{animationDuration:c+"ms"}:{}},u)}}])&&r(n.prototype,i),c&&r(n,c),Object.defineProperty(n,"prototype",{writable:!1}),t}(),f=function(e,r,t,n){var i=e.fn(r,t,n);return i.style["animation-duration"]=r+"ms",(0,s.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,s.h)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:e.elmDuration?{animationDuration:r+"ms"}:{}}))},p=function(e,r,t,n){var i=e.fn(r,t,n);return i.style["animation-duration"]=r+"ms",(0,s.h)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},(0,s.h)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};c.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"}}])}();
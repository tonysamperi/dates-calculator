(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"1z14":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));const c=["years","months","weeks","days","hours","minutes","seconds","milliseconds"]},"2c9M":function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"d",(function(){return s})),n.d(e,"e",(function(){return a}));const c={getEngine(){const t=window;return t.TapticEngine||t.Capacitor&&t.Capacitor.isPluginAvailable("Haptics")&&t.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.impact({style:n})},notification(t){const e=this.getEngine();if(!e)return;const n=this.isCapacitor()?t.style.toUpperCase():t.style;e.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionStart():t.gestureSelectionStart())},selectionChanged(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionChanged():t.gestureSelectionChanged())},selectionEnd(){const t=this.getEngine();t&&(this.isCapacitor()?t.selectionEnd():t.gestureSelectionEnd())}},r=()=>{c.selection()},i=()=>{c.selectionStart()},o=()=>{c.selectionChanged()},a=()=>{c.selectionEnd()},s=t=>{c.impact(t)}},"6i10":function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));const c={bubbles:{dur:1e3,circles:9,fn:(t,e,n)=>{const c=`${t*e/n-t}ms`,r=2*Math.PI*e/n;return{r:5,style:{top:`${9*Math.sin(r)}px`,left:`${9*Math.cos(r)}px`,"animation-delay":c}}}},circles:{dur:1e3,circles:8,fn:(t,e,n)=>{const c=e/n,r=`${t*c-t}ms`,i=2*Math.PI*c;return{r:5,style:{top:`${9*Math.sin(i)}px`,left:`${9*Math.cos(i)}px`,"animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(t,e)=>({r:6,style:{left:`${9-9*e}px`,"animation-delay":-110*e+"ms"}})},lines:{dur:1e3,lines:12,fn:(t,e,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(t,e,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*e+(e<6?180:-180)}deg)`,"animation-delay":`${t*e/n-t}ms`}})}}},DlXg:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var c=n("QX1p"),r=n("ItpF"),i=n("2c9M");const o=(t,e)=>{let n;const o=(t,c,r)=>{if("undefined"==typeof document)return;const i=document.elementFromPoint(t,c);i&&e(i)?i!==n&&(s(),a(i,r)):s()},a=(t,e)=>{n=t;const r=n;Object(c.n)(()=>r.classList.add("ion-activated")),e()},s=(t=!1)=>{if(!n)return;const e=n;Object(c.n)(()=>e.classList.remove("ion-activated")),t&&n.click(),n=void 0};return Object(r.createGesture)({el:t,gestureName:"buttonActiveDrag",threshold:0,onStart:t=>o(t.currentX,t.currentY,i.a),onMove:t=>o(t.currentX,t.currentY,i.b),onEnd:()=>{s(!0),Object(i.e)()}})}},NqGI:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return r}));const c=async(t,e,n,c,r)=>{if(t)return t.attachViewToDom(e,n,r,c);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const i="string"==typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n;return c&&c.forEach(t=>i.classList.add(t)),r&&Object.assign(i,r),e.appendChild(i),i.componentOnReady&&await i.componentOnReady(),i},r=(t,e)=>{if(e){if(t)return t.removeViewFromDom(e.parentElement,e);e.remove()}return Promise.resolve()}},d2mR:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var c=n("ofXK"),r=n("u47x"),i=n("akP4"),o=n("zbGt"),a=n("sYmb"),s=n("3Pt+"),l=n("PqUb"),d=n("fXoL");let u=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[r.a,a.b],c.c,s.e,l.b,o.m,o.n,i.a,o.r,o.v,a.b]}),t})()},fiUE:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c=n("FKr1"),r=n("zbGt"),i=n("wd/R"),o=n("XNiG"),a=n("1G5W"),s=n("fXoL"),l=n("u47x"),d=n("sYmb");const u=["*"];let b=(()=>{class t extends r.c{constructor(t,e,n,c,r){super(t,e,n,c,r),this.isTodaySelected=this._isTodaySelected(this.calendar.selected),this._destroyed=new o.a,this.calendar.selectedChange.pipe(Object(a.a)(this._destroyed)).subscribe(t=>{this.isTodaySelected=this._isTodaySelected(t)})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}setToday(){this.calendar.selected=this._dateAdapter.today(),this.calendar.activeDate=this._dateAdapter.today(),this.calendar._dateSelected({value:this.calendar.activeDate,event:void 0})}_isTodaySelected(t){return t instanceof r.a?Object(i.parseZone)(t.start).isSame(Object(i.parseZone)(),"days"):Object(i.parseZone)(t).isSame(Object(i.parseZone)(),"days")}}return t.\u0275fac=function(e){return new(e||t)(s.Ob(r.d),s.Ob(r.b),s.Ob(c.a),s.Ob(c.c),s.Ob(s.h))},t.\u0275cmp=s.Ib({type:t,selectors:[["smp-picker-custom-header"]],features:[s.zb],ngContentSelectors:u,decls:15,vars:12,consts:[[1,"mat-calendar-header","smp-picker-custom-header"],[1,"mat-calendar-controls"],["mat-button","","type","button","cdkAriaLive","polite",1,"mat-calendar-period-button",3,"click"],[1,"mat-calendar-arrow"],[1,"mat-calendar-spacer"],["mat-icon-button","","type","button",1,"mat-calendar-previous-button",3,"disabled","click"],["mat-icon-button","","type","button",1,"mat-calendar-next-button",3,"disabled","click"],[1,"header-bottom"],[1,"header-bottom-controls"],["mat-button","","color","primary",1,"d-block",3,"disabled","click"],[1,"smp-capitalize-first"]],template:function(t,e){1&t&&(s.nc(),s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"button",2),s.cc("click",(function(){return e.currentPeriodClicked()})),s.Ic(3),s.Pb(4,"div",3),s.Tb(),s.Pb(5,"div",4),s.mc(6),s.Ub(7,"button",5),s.cc("click",(function(){return e.previousClicked()})),s.Tb(),s.Ub(8,"button",6),s.cc("click",(function(){return e.nextClicked()})),s.Tb(),s.Tb(),s.Tb(),s.Ub(9,"div",7),s.Ub(10,"div",8),s.Ub(11,"button",9),s.cc("click",(function(){return e.setToday()})),s.Ub(12,"span",10),s.Ic(13),s.hc(14,"translate"),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&t&&(s.Cb(2),s.Db("aria-label",e.periodButtonLabel),s.Cb(1),s.Kc(" ",e.periodButtonText," "),s.Cb(1),s.Fb("mat-calendar-invert","month"!=e.calendar.currentView),s.Cb(3),s.oc("disabled",!e.previousEnabled()),s.Db("aria-label",e.prevButtonLabel),s.Cb(1),s.oc("disabled",!e.nextEnabled()),s.Db("aria-label",e.nextButtonLabel),s.Cb(3),s.oc("disabled",e.isTodaySelected),s.Cb(2),s.Jc(s.ic(14,10,"calculator.setToday")))},directives:[l.d],pipes:[d.c],styles:[".smp-picker-custom-header[_ngcontent-%COMP%]{padding-top:0}.smp-picker-custom-header[_ngcontent-%COMP%] > .mat-calendar-controls[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}.header-bottom[_ngcontent-%COMP%]{padding:0 8px}.header-bottom[_ngcontent-%COMP%] > div.header-bottom-controls[_ngcontent-%COMP%]{margin:0 calc(4.71429% - 16px) 8px}"],changeDetection:0}),t})()},hcCc:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"d",(function(){return a}));const c=(t,e)=>null!==e.closest(t),r=t=>"string"==typeof t&&t.length>0?{"ion-color":!0,[`ion-color-${t}`]:!0}:void 0,i=t=>{const e={};return(t=>void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter(t=>null!=t).map(t=>t.trim()).filter(t=>""!==t):[])(t).forEach(t=>e[t]=!0),e},o=/^[a-z][a-z0-9+\-.]*:/,a=async(t,e,n,c)=>{if(null!=t&&"#"!==t[0]&&!o.test(t)){const r=document.querySelector("ion-router");if(r)return null!=e&&e.preventDefault(),r.push(t,n,c)}return!1}},kPQm:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return r}));var c=function(t){return t.ADD="ADD",t.SUBTRACT="SUBTRACT",t}({});const r=[{symbol:"+",label:"calculator.add",key:c.ADD},{symbol:"-",label:"calculator.subtract",key:c.SUBTRACT}];n("6NwN"),n("1z14")},lsgU:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));var c=n("1z14"),r=n("LvDl");class i{static get timeUnitsComboOptions(){return[{value:void 0,description:""},...Object(r.map)(c.a,t=>({value:t,description:`units.${t}`}))]}}}}]);
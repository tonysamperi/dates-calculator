(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{jSCx:function(t,e,n){"use strict";n.r(e),n.d(e,"SmpBirthdayPageModule",(function(){return G}));var a=n("d2mR"),c=n("tyNb"),i=n("zbGt"),r=n("LvDl"),s=n("wd/R"),o=n("XNiG"),b=n("fXoL"),l=n("3Pt+"),d=n("kmnG"),p=n("qFsG"),m=n("n48n"),u=n("0wqj"),h=n("IU19"),f=n("bTqV"),y=n("ofXK"),g=n("sYmb");let T=(()=>{class t{transform(t,e){return t?Object(s.parseZone)(t).format(e):""}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=b.Nb({name:"smpDate",type:t,pure:!1}),t})();function C(t,e){if(1&t&&(b.Ub(0,"span"),b.Ic(1),b.hc(2,"translate"),b.hc(3,"handleSingular"),b.Tb()),2&t){const t=b.gc().$implicit;b.Cb(1),b.Lc("",t.years," ",b.ic(2,2,b.jc(3,4,"units.years",t.years)),"")}}function U(t,e){1&t&&(b.Ub(0,"span"),b.Ic(1,","),b.Tb())}function w(t,e){if(1&t&&(b.Ub(0,"span"),b.Gc(1,U,2,0,"span",17),b.Ic(2),b.hc(3,"translate"),b.hc(4,"handleSingular"),b.Tb()),2&t){const t=b.gc().$implicit;b.Cb(1),b.oc("ngIf",t.years>0),b.Cb(1),b.Lc(" ",t.months," ",b.ic(3,3,b.jc(4,5,"units.months",t.months)),"")}}function I(t,e){if(1&t&&(b.Ub(0,"span"),b.Ic(1),b.hc(2,"translate"),b.hc(3,"handleSingular"),b.Tb()),2&t){const t=b.gc().$implicit;b.Cb(1),b.Lc(", ",t.weeks," ",b.ic(2,2,b.jc(3,4,"units.weeks",t.weeks)),"")}}function k(t,e){if(1&t&&(b.Ub(0,"span"),b.Ic(1),b.hc(2,"translate"),b.hc(3,"translate"),b.hc(4,"handleSingular"),b.Tb()),2&t){const t=b.gc().$implicit;b.Cb(1),b.Mc(" ",b.ic(2,3,"generalDictionary.and")," ",t.days," ",b.ic(3,5,b.jc(4,7,"units.days",t.days)),"")}}function O(t,e){if(1&t&&(b.Gc(0,C,4,7,"span",17),b.Gc(1,w,5,8,"span",17),b.Gc(2,I,4,7,"span",17),b.Gc(3,k,5,10,"span",17)),2&t){const t=e.$implicit;b.oc("ngIf",t.years>0),b.Cb(1),b.oc("ngIf",t.months>0),b.Cb(1),b.oc("ngIf",t.weeks>0),b.Cb(1),b.oc("ngIf",t.days>0)}}const x=function(t){return{$implicit:t}};function j(t,e){if(1&t&&(b.Ub(0,"div",18),b.Ub(1,"h2",19),b.Ic(2),b.hc(3,"translate"),b.Tb(),b.Ub(4,"p",19),b.Ub(5,"strong"),b.Ic(6),b.hc(7,"translate"),b.Tb(),b.Tb(),b.Ub(8,"p"),b.Qb(9,20),b.Tb(),b.Ub(10,"p",19),b.Ub(11,"strong"),b.Ic(12),b.hc(13,"translate"),b.Tb(),b.Tb(),b.Ub(14,"p",19),b.Ic(15),b.hc(16,"translate"),b.hc(17,"smpDate"),b.Tb(),b.Ub(18,"p",19),b.Ub(19,"strong"),b.Ic(20),b.hc(21,"translate"),b.Tb(),b.Tb(),b.Ub(22,"p"),b.Qb(23,20),b.Tb(),b.Tb()),2&t){const t=b.gc(),e=b.wc(1);b.oc("@inOutAnimation",void 0),b.Cb(2),b.Jc(b.ic(3,11,"generalDictionary.info")),b.Cb(4),b.Jc(b.ic(7,13,"birthday.yourAge")),b.Cb(3),b.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",b.tc(24,x,t.result.age)),b.Cb(3),b.Jc(b.ic(13,15,"birthday.birthDayOfWeek")),b.Cb(3),b.Lc("",b.ic(16,17,"birthday.youWereBornOn")," ",b.jc(17,19,t.birthday,"dddd"),""),b.Cb(5),b.Jc(b.ic(21,22,"birthday.nextBirthday")),b.Cb(3),b.oc("ngTemplateOutlet",e)("ngTemplateOutletContext",b.tc(26,x,t.result.toNextBirthday))}}var v=function(t){return t.years="years",t.months="months",t.weeks="weeks",t.days="days",t}({});const _=[{path:"",component:(()=>{class t{constructor(){this.today=new Date,this._destroy$=new o.a,this._intervals=[v.years,v.months,v.weeks,v.days]}birthdayChanged(t){this.result=void 0,this.birthday=t}calcResult(){const t=Object(s.parseZone)(),e=Object(s.parseZone)(this.birthday),n=Object(s.parseZone)(e).set({year:t.get("year")});n.isAfter(Object(s.parseZone)())||n.add(1,"year"),this.result={age:this._getDiff(t,e),nextBirthday:n.toDate(),toNextBirthday:this._getDiff(n,t)}}ngOnDestroy(){this._destroy$.next()}_getDiff(t,e){const n=Object(s.parseZone)(t),a=Object(s.parseZone)(e),c={};return Object(r.forEach)(this._intervals,t=>{const e=n.diff(a,t);a.add(e,t),c[t]=e}),c}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=b.Ib({type:t,selectors:[["smp-leap-year"]],decls:25,vars:18,consts:[["diffTpl",""],[1,"container","smp-margin-top-3x"],[1,"row"],[1,"col-12"],[1,"route-animations-elements","smp-capitalize-first"],[1,"route-animations-elements","smp-capitalize-first",3,"innerHTML"],[1,"route-animations-elements"],[1,"d-flex","flex-column","align-items-center","smp-margin-bottom-2x"],["birthdayForm","ngForm"],["for","smp_brt_date",1,"d-none"],["matInput","","id","smp_brt_date","name","smp_brt_date","required","",3,"matDatepicker","ngModel","max","placeholder","ngModelChange"],["matSuffix","",3,"for"],["touchUi","","startView","multi-year"],["picker",""],[1,"smp-margin-top-2x"],["mat-button","","mat-raised-button","","color","primary","type","submit",1,"smp-capitalize",3,"disabled","click"],["id","smp_result","class","alert alert-success",4,"ngIf"],[4,"ngIf"],["id","smp_result",1,"alert","alert-success"],[1,"smp-capitalize-first"],[3,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(t,e){if(1&t&&(b.Gc(0,O,4,4,"ng-template",null,0,b.Hc),b.Ub(2,"div",1),b.Ub(3,"div",2),b.Ub(4,"div",3),b.Ub(5,"h1",4),b.Ic(6),b.hc(7,"translate"),b.Tb(),b.Pb(8,"p",5),b.hc(9,"translate"),b.Ub(10,"div",6),b.Ub(11,"form",7,8),b.Ub(13,"mat-form-field"),b.Pb(14,"label",9),b.Ub(15,"input",10),b.cc("ngModelChange",(function(t){return e.birthdayChanged(t)})),b.hc(16,"translate"),b.Tb(),b.Pb(17,"mat-datepicker-toggle",11),b.Pb(18,"mat-datepicker",12,13),b.Tb(),b.Ub(20,"div",14),b.Ub(21,"button",15),b.cc("click",(function(){return e.calcResult()})),b.Ic(22),b.hc(23,"translate"),b.Tb(),b.Tb(),b.Tb(),b.Gc(24,j,24,28,"div",16),b.Tb(),b.Tb(),b.Tb(),b.Tb()),2&t){const t=b.wc(12),n=b.wc(19);b.Cb(6),b.Jc(b.ic(7,10,"birthday.title")),b.Cb(2),b.oc("innerHTML",b.ic(9,12,"birthday.intro"),b.Ac),b.Cb(7),b.pc("placeholder",b.ic(16,14,"birthday.dateOfBirth")),b.oc("matDatepicker",n)("ngModel",e.birthday)("max",e.today),b.Cb(2),b.oc("for",n),b.Cb(4),b.oc("disabled",t.invalid),b.Cb(1),b.Kc(" ",b.ic(23,16,"generalDictionary.calculate")," "),b.Cb(2),b.oc("ngIf",e.result)}},directives:[l.r,l.k,l.l,d.c,p.b,m.a,l.c,l.p,l.j,l.m,u.a,d.h,h.a,f.b,y.l,y.q],pipes:[g.c,i.q,T],styles:["ul[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}"],data:{animation:i.f}}),t})(),data:{title:"routes.birthday"}}];let D=(()=>{class t{}return t.\u0275mod=b.Mb({type:t}),t.\u0275inj=b.Lb({factory:function(e){return new(e||t)},imports:[[c.k.forChild(_)],c.k]}),t})(),G=(()=>{class t{}return t.\u0275mod=b.Mb({type:t}),t.\u0275inj=b.Lb({factory:function(e){return new(e||t)},imports:[[a.a,D]]}),t})()}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ISv1:function(t,e,n){"use strict";n.r(e),n.d(e,"SmpCalculatorAddModule",(function(){return K}));var o=n("vKZX"),a=n("d2mR"),c=n("tyNb"),i=n("zbGt"),l=n("kPQm"),r=n("LvDl"),s=n("wd/R"),m=n("FKr1"),p=n("XNiG"),f=n("1G5W"),d=n("fXoL"),g=n("u47x"),b=n("sYmb");const u=["*"];let C=(()=>{class t extends i.c{constructor(t,e,n,o,a){super(t,e,n,o,a),this.isTodaySelected=this._isTodaySelected(this.calendar.selected),this._destroyed=new p.a,this.calendar.selectedChange.pipe(Object(f.a)(this._destroyed)).subscribe(t=>{this.isTodaySelected=this._isTodaySelected(t)})}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete()}setToday(){this.calendar.selected=this._dateAdapter.today(),this.calendar.activeDate=this._dateAdapter.today(),this.calendar._dateSelected({value:this.calendar.activeDate,event:void 0})}_isTodaySelected(t){return t instanceof i.a?Object(s.parseZone)(t.start).isSame(Object(s.parseZone)(),"days"):Object(s.parseZone)(t).isSame(Object(s.parseZone)(),"days")}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(i.d),d.Ob(i.b),d.Ob(m.a),d.Ob(m.c),d.Ob(d.h))},t.\u0275cmp=d.Ib({type:t,selectors:[["smp-picker-custom-header"]],features:[d.zb],ngContentSelectors:u,decls:15,vars:12,consts:[[1,"mat-calendar-header","smp-picker-custom-header"],[1,"mat-calendar-controls"],["mat-button","","type","button","cdkAriaLive","polite",1,"mat-calendar-period-button",3,"click"],[1,"mat-calendar-arrow"],[1,"mat-calendar-spacer"],["mat-icon-button","","type","button",1,"mat-calendar-previous-button",3,"disabled","click"],["mat-icon-button","","type","button",1,"mat-calendar-next-button",3,"disabled","click"],[1,"header-bottom"],[1,"header-bottom-controls"],["mat-button","","color","primary",1,"d-block",3,"disabled","click"],[1,"smp-capitalize-first"]],template:function(t,e){1&t&&(d.nc(),d.Ub(0,"div",0),d.Ub(1,"div",1),d.Ub(2,"button",2),d.cc("click",(function(){return e.currentPeriodClicked()})),d.Ic(3),d.Pb(4,"div",3),d.Tb(),d.Pb(5,"div",4),d.mc(6),d.Ub(7,"button",5),d.cc("click",(function(){return e.previousClicked()})),d.Tb(),d.Ub(8,"button",6),d.cc("click",(function(){return e.nextClicked()})),d.Tb(),d.Tb(),d.Tb(),d.Ub(9,"div",7),d.Ub(10,"div",8),d.Ub(11,"button",9),d.cc("click",(function(){return e.setToday()})),d.Ub(12,"span",10),d.Ic(13),d.hc(14,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Tb()),2&t&&(d.Cb(2),d.Db("aria-label",e.periodButtonLabel),d.Cb(1),d.Kc(" ",e.periodButtonText," "),d.Cb(1),d.Fb("mat-calendar-invert","month"!=e.calendar.currentView),d.Cb(3),d.oc("disabled",!e.previousEnabled()),d.Db("aria-label",e.prevButtonLabel),d.Cb(1),d.oc("disabled",!e.nextEnabled()),d.Db("aria-label",e.nextButtonLabel),d.Cb(3),d.oc("disabled",e.isTodaySelected),d.Cb(2),d.Jc(d.ic(14,10,"calculator.setToday")))},directives:[g.d],pipes:[b.c],styles:[".smp-picker-custom-header[_ngcontent-%COMP%]{padding-top:0}.smp-picker-custom-header[_ngcontent-%COMP%] > .mat-calendar-controls[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}.header-bottom[_ngcontent-%COMP%]{padding:0 8px}.header-bottom[_ngcontent-%COMP%] > div.header-bottom-controls[_ngcontent-%COMP%]{margin:0 calc(4.71429% - 16px) 8px}"],changeDetection:0}),t})();var _=n("lsgU"),M=n("3Pt+"),O=n("kmnG"),P=n("qFsG"),h=n("n48n"),x=n("0wqj"),y=n("IU19"),v=n("ofXK"),k=n("PqUb"),w=n("bTqV"),z=n("1jcm"),T=n("d3UM");function U(t,e){1&t&&(d.Ub(0,"mat-error"),d.Ic(1),d.hc(2,"translate"),d.Tb()),2&t&&(d.Cb(1),d.Jc(d.ic(2,1,"calculator.errors.timeRequired")))}function H(t,e){if(1&t){const t=d.Vb();d.Ub(0,"mat-form-field"),d.Pb(1,"label",21),d.Ub(2,"input",22,23),d.cc("ngModelChange",(function(e){return d.zc(t),d.gc().formGroup.startHour=e})),d.hc(4,"translate"),d.Tb(),d.Ub(5,"i",24),d.cc("click",(function(){return d.zc(t),d.gc(),d.wc(15).open()})),d.Tb(),d.Gc(6,U,3,3,"mat-error",10),d.Tb()}if(2&t){const t=d.wc(3),e=d.gc(),n=d.wc(15);d.Cb(2),d.pc("placeholder",d.ic(4,4,"calculator.pickHour")),d.oc("ngxMatTimepicker",n)("ngModel",e.formGroup.startHour),d.Cb(4),d.oc("ngIf",t.touched&&(null==t.errors?null:t.errors.required))}}function R(t,e){if(1&t&&(d.Pb(0,"i",29),d.hc(1,"translate")),2&t){const t=d.gc().$implicit;d.pc("popper",d.ic(1,1,t.info))}}const N=function(t){return{"smp-margin-top-2x":t}};function I(t,e){if(1&t){const t=d.Vb();d.Ub(0,"div",25),d.Ub(1,"mat-slide-toggle",26),d.cc("ngModelChange",(function(n){d.zc(t);const o=e.$implicit;return d.gc().formGroup[o.value]=n})),d.Ub(2,"span",27),d.Ic(3),d.hc(4,"translate"),d.Tb(),d.Tb(),d.Gc(5,R,2,3,"i",28),d.Tb()}if(2&t){const t=e.$implicit,n=e.first,o=d.gc();d.Cb(1),d.qc("name","smp_clc_skip_",t.value,""),d.oc("ngModel",o.formGroup[t.value])("ngClass",d.tc(7,N,!n)),d.Cb(2),d.Jc(d.ic(4,5,t.description)),d.Cb(2),d.oc("ngIf",t.info)}}function G(t,e){if(1&t&&(d.Ub(0,"mat-option",42),d.Ub(1,"span",43),d.Ic(2),d.hc(3,"translate"),d.Tb(),d.Tb()),2&t){const t=e.$implicit;d.oc("value",t.value),d.Cb(2),d.Jc(d.ic(3,2,t.description))}}const D=function(t){return{selected:t}};function F(t,e){if(1&t){const t=d.Vb();d.Ub(0,"button",44),d.cc("click",(function(){d.zc(t);const n=e.$implicit;return d.gc().$implicit.operator=n.key})),d.Ic(1),d.Tb()}if(2&t){const t=e.$implicit,n=d.gc().$implicit;d.oc("ngClass",d.tc(2,D,n.operator===t.key)),d.Cb(1),d.Kc(" ",t.symbol," ")}}const j=function(t){return{"has-selection":t}};function q(t,e){if(1&t){const t=d.Vb();d.Ub(0,"div",30),d.Ub(1,"i",31),d.cc("click",(function(){d.zc(t);const n=e.index;return d.gc().removeBlock(n)})),d.Tb(),d.Ub(2,"div",32),d.Ub(3,"div",33),d.Ub(4,"mat-form-field"),d.Pb(5,"label",34),d.Ub(6,"input",35),d.cc("ngModelChange",(function(n){return d.zc(t),e.$implicit.amount=n})),d.hc(7,"translate"),d.hc(8,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Ub(9,"div",33),d.Ub(10,"mat-form-field"),d.Ub(11,"mat-select",36),d.cc("ngModelChange",(function(n){return d.zc(t),e.$implicit.timeUnit=n})),d.hc(12,"translate"),d.Gc(13,G,4,4,"mat-option",37),d.Tb(),d.Tb(),d.Tb(),d.Ub(14,"div",38),d.Ub(15,"label",39),d.Ic(16),d.hc(17,"translate"),d.Tb(),d.Ub(18,"div",40),d.Gc(19,F,2,4,"button",41),d.Tb(),d.Tb(),d.Tb(),d.Tb()}if(2&t){const t=e.$implicit,n=e.index,o=d.gc();d.Cb(5),d.qc("for","smp_clc_amount_",n,""),d.Cb(1),d.qc("id","smp_clc_amount_",n,""),d.qc("name","amount_",n,""),d.rc("placeholder","",d.ic(7,13,"units."+t.timeUnit)," ",d.ic(8,15,"calculator.toAdd"),""),d.oc("ngModel",t.amount),d.Cb(5),d.qc("name","time_unit_",n,""),d.pc("placeholder",d.ic(12,17,"calculator.units")),d.oc("ngModel",t.timeUnit),d.Cb(2),d.oc("ngForOf",o.timeUnits),d.Cb(3),d.Kc(" ",d.ic(17,19,"calculator.operation")," "),d.Cb(2),d.oc("ngClass",d.tc(21,j,t.operator)),d.Cb(1),d.oc("ngForOf",o.operators)}}function S(t,e){if(1&t){const t=d.Vb();d.Ub(0,"div",45),d.cc("click",(function(){return d.zc(t),d.gc().addBlock()})),d.Pb(1,"i",46),d.Ub(2,"p",47),d.Ic(3),d.hc(4,"translate"),d.Tb(),d.Tb()}2&t&&(d.Cb(3),d.Jc(d.ic(4,1,"calculator.addBlock")))}function Y(t,e){if(1&t){const t=d.Vb();d.Ub(0,"div",48),d.Ub(1,"h2",27),d.Ic(2),d.hc(3,"translate"),d.Tb(),d.Ub(4,"p"),d.Ic(5),d.hc(6,"translate"),d.hc(7,"date"),d.Pb(8,"br"),d.Ic(9),d.hc(10,"translate"),d.Ub(11,"strong"),d.Ic(12),d.hc(13,"date"),d.Tb(),d.Tb(),d.Ub(14,"div",49),d.Ub(15,"button",50),d.cc("click",(function(){d.zc(t);const e=d.gc(),n=d.wc(2);return e.resetForm(n)})),d.Ic(16),d.hc(17,"translate"),d.Tb(),d.Ub(18,"button",51),d.cc("click",(function(){return d.zc(t),d.gc().setResultAsInitial()})),d.Ic(19),d.hc(20,"translate"),d.Tb(),d.Tb(),d.Tb()}if(2&t){const t=d.gc();d.oc("@inOutAnimation",void 0),d.Cb(2),d.Jc(d.ic(3,9,"calculator.result")),d.Cb(3),d.Lc("",d.ic(6,11,"calculator.startingFrom")," ",d.jc(7,13,t.formGroup.startDate,t.resultDateFormat)," "),d.Cb(4),d.Kc(" ",d.ic(10,16,"calculator.theResultIs")," "),d.Cb(3),d.Jc(d.jc(13,18,t.result,t.resultDateFormat)),d.Cb(4),d.Kc(" ",d.ic(17,21,"calculator.startOver")," "),d.Cb(2),d.oc("disabled",!t.result),d.Cb(1),d.Kc(" ",d.ic(20,23,"calculator.setInitial")," ")}}const A=[{path:"",component:(()=>{class t{constructor(t,e){this._dateAdapter=t,this._translateSrv=e,this.operators=l.a,this.options=[{description:"calculator.skipWeekends",value:"skipWeekends",info:"calculator.skipWeekendsInfo"},{description:"calculator.includeTime",value:"includeTime"}],this.pickerCustomHeaderType=C,this.result=void 0,this.timeUnits=_.a.timeUnitsComboOptions,this._defaultAmount="30",this.initForm()}get resultDateFormat(){return this._dateAdapter.display.dateInput+(this.formGroup.includeTime?" HH:mm":"")}addBlock(){this.formGroup.blocks.length<5&&this.formGroup.blocks.push({amount:this._defaultAmount,operator:l.b.ADD,timeUnit:"days"})}calcFinalDate(){const t=Object(s.parseZone)(this.formGroup.startDate);if(this.formGroup.includeTime&&this.formGroup.startHour){const e=this.formGroup.startHour.split(":");t.hours(+e[0]),t.minutes(+e[1])}this.formGroup.startDate=t.toDate();const e=Object(r.reduce)(this.formGroup.blocks,(t,e)=>t[e.operator.toLowerCase()+("days"===e.timeUnit&&this.formGroup.skipWeekends?"Business":"")](e.amount,e.timeUnit),t);this.result=e.toDate(),setTimeout(()=>{i.r.handleScrollBottom("#calculator_add_result")},100)}initForm(){this.formGroup={blocks:[],includeTime:!1,skipWeekends:!1,startDate:new Date,startHour:Object(s.parseZone)().format("HH:mm")},this.addBlock()}removeBlock(t){this.formGroup.blocks.splice(t,1)}resetForm(t){t.reset(),this.initForm()}setResultAsInitial(){this.formGroup.startDate=this.result&&!isNaN(+new Date(this.result))?this.result:new Date,this.result=void 0}startDateChanged(t=this.formGroup.startDate){this.result=void 0,this.formGroup.startDate=t}}return t.\u0275fac=function(e){return new(e||t)(d.Ob(m.a),d.Ob(b.d))},t.\u0275cmp=d.Ib({type:t,selectors:[["smp-calculator-add"]],decls:32,vars:23,consts:[[1,"smp-clc-main-wrap"],["calculatorForm","ngForm"],[1,"d-flex","justify-content-center","align-items-center","flex-column","flex-sm-column","flex-md-row","flex-lg-row","flex-xl-row","smp-margin-bottom-2x","route-animations-elements"],[1,"d-flex","flex-column","justify-content-between","align-content-center"],["for","smp_clc_start_date",1,"d-none"],["matInput","","id","smp_clc_start_date","name","start_date","required","",3,"matDatepicker","ngModel","placeholder","ngModelChange"],["startDateInput","ngModel"],["matSuffix","",3,"for"],["touchUi","",3,"calendarHeaderComponent"],["picker",""],[4,"ngIf"],["color","primary"],["timePicker",""],[1,"smp-clc-add-options"],[1,"d-block","smp-font-12","smp-capitalize-first"],["class","text-left",4,"ngFor","ngForOf"],["class","smp-clc-block d-flex align-items-start justify-content-center route-animations-elements",4,"ngFor","ngForOf"],["class","smp-clc-add-block-wrap d-flex flex-column justify-content-center align-content-center smp-color-grey-dark route-animations-elements",3,"click",4,"ngIf"],[1,"d-flex","justify-content-between","smp-margin-top-2x","smp-margin-bottom-2x","route-animations-elements"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize",3,"disabled","click"],["id","calculator_add_result","class","alert alert-success",4,"ngIf"],["for","smp_clc_start_time",1,"d-none"],["format","24","matInput","","id","smp_clc_start_time","name","smp_clc_start_time","readonly","","required","",3,"ngxMatTimepicker","ngModel","placeholder","ngModelChange"],["time","ngModel"],["matSuffix","",1,"fas","fa-clock",3,"click"],[1,"text-left"],["color","primary",1,"smp-margin-left-2x",3,"name","ngModel","ngClass","ngModelChange"],[1,"smp-capitalize-first"],["class","fas fa-info-circle smp-color-primary","popperTrigger","click","popperPlacement","top",3,"popper",4,"ngIf"],["popperTrigger","click","popperPlacement","top",1,"fas","fa-info-circle","smp-color-primary",3,"popper"],[1,"smp-clc-block","d-flex","align-items-start","justify-content-center","route-animations-elements"],[1,"fas","fa-times","fa-2x",3,"click"],[1,"row","flex-column","flex-sm-column","flex-md-row","flex-lg-row","flex-xl-row"],[1,"col"],[1,"d-none",3,"for"],["matInput","","pattern","\\d{1,5}","required","",3,"id","name","ngModel","placeholder","ngModelChange"],["required","",3,"name","placeholder","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col","d-flex","align-items-center"],[1,"smp-margin-right-1x","smp-font-12","smp-color-grey-dark"],[1,"smp-clc-operators-wrap","d-flex","justify-content-center",3,"ngClass"],["mat-icon-button","","mat-raised-button","","color","primary",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"value"],[1,"smp-capitalize"],["mat-icon-button","","mat-raised-button","","color","primary",3,"ngClass","click"],[1,"smp-clc-add-block-wrap","d-flex","flex-column","justify-content-center","align-content-center","smp-color-grey-dark","route-animations-elements",3,"click"],[1,"fas","fa-2x","fa-plus-circle"],[1,"smp-capitalize-first","smp-no-margin"],["id","calculator_add_result",1,"alert","alert-success"],[1,"d-flex","justify-content-between","flex-column","flex-sm-row","flex-md-row","flex-lg-row"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize-first","mb-2",3,"click"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize-first",3,"disabled","click"]],template:function(t,e){if(1&t){const t=d.Vb();d.Ub(0,"div",0),d.Ub(1,"form",null,1),d.Ub(3,"div",2),d.Ub(4,"div",3),d.Ub(5,"mat-form-field"),d.Pb(6,"label",4),d.Ub(7,"input",5,6),d.cc("ngModelChange",(function(t){return e.startDateChanged(t)})),d.hc(9,"translate"),d.Tb(),d.Pb(10,"mat-datepicker-toggle",7),d.Pb(11,"mat-datepicker",8,9),d.Tb(),d.Gc(13,H,7,6,"mat-form-field",10),d.Pb(14,"ngx-mat-timepicker",11,12),d.Tb(),d.Ub(16,"div",13),d.Ub(17,"span",14),d.Ic(18),d.hc(19,"translate"),d.Tb(),d.Gc(20,I,6,9,"div",15),d.Tb(),d.Tb(),d.Gc(21,q,20,23,"div",16),d.Gc(22,S,5,3,"div",17),d.Ub(23,"div",18),d.Ub(24,"button",19),d.cc("click",(function(){d.zc(t);const n=d.wc(2);return e.resetForm(n)})),d.Ic(25),d.hc(26,"translate"),d.Tb(),d.Ub(27,"button",19),d.cc("click",(function(){return e.calcFinalDate()})),d.Ic(28),d.hc(29,"translate"),d.Tb(),d.Tb(),d.Tb(),d.Gc(30,Y,21,25,"div",20),d.Tb(),d.Pb(31,"hr")}if(2&t){const t=d.wc(2),n=d.wc(12);d.Cb(7),d.pc("placeholder",d.ic(9,15,"calculator.startDate")),d.oc("matDatepicker",n)("ngModel",e.formGroup.startDate),d.Cb(3),d.oc("for",n),d.Cb(1),d.oc("calendarHeaderComponent",e.pickerCustomHeaderType),d.Cb(2),d.oc("ngIf",e.formGroup.includeTime),d.Cb(5),d.Jc(d.ic(19,17,"calculator.options")),d.Cb(2),d.oc("ngForOf",e.options),d.Cb(1),d.oc("ngForOf",e.formGroup.blocks),d.Cb(1),d.oc("ngIf",e.formGroup.blocks.length<5),d.Cb(2),d.oc("disabled",!t.dirty),d.Cb(1),d.Kc(" ",d.ic(26,19,"calculator.clear")," "),d.Cb(2),d.oc("disabled",t.invalid||!e.formGroup.blocks.length),d.Cb(1),d.Kc(" ",d.ic(29,21,"calculator.submit")," "),d.Cb(2),d.oc("ngIf",!!e.result)}},directives:[M.q,M.k,M.l,O.c,P.b,h.a,M.c,M.o,M.j,M.m,x.a,O.h,y.a,v.l,k.c,v.k,w.b,k.a,O.b,z.a,v.j,o.a,M.n,T.a,m.l],pipes:[b.c,v.e],styles:[".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2[_ngcontent-%COMP%], .mat-body-strong[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-caption[_ngcontent-%COMP%], .mat-small[_ngcontent-%COMP%]{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(.75);width:133.33333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(.75);width:133.33334333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.66666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.54166667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59374em) scale(.75);width:133.33334333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(.75);width:133.33334333%}.mat-grid-tile-footer[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%], .mat-select[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%], .mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:400}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%], .mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%], .mat-list-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node[_ngcontent-%COMP%], .mat-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-pane[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{\n  }@keyframes cdk-text-field-autofill-start{\n  }@-webkit-keyframes cdk-text-field-autofill-end{\n  }@keyframes cdk-text-field-autofill-end{\n  }.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}div.smp-clc-add-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:8px;line-height:24px;vertical-align:top;cursor:pointer}div.smp-clc-add-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{line-height:24px}div.smp-clc-operators-wrap.has-selection[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){opacity:.75}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){transform:scale(.75)}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(odd){margin-right:8px}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-bottom:8px}"],data:{animation:i.f}}),t})(),data:{title:"calculator.titleAdd"}}];let B=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[c.k.forChild(A)],c.k]}),t})(),K=(()=>{class t{}return t.\u0275mod=d.Mb({type:t}),t.\u0275inj=d.Lb({factory:function(e){return new(e||t)},imports:[[o.b,a.a,B]]}),t})()}}]);
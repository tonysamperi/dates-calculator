function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function _createSuper(t){var e=_isNativeReflectConstruct();return function(){var n,o=_getPrototypeOf(t);if(e){var a=_getPrototypeOf(this).constructor;n=Reflect.construct(o,arguments,a)}else n=o.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?_assertThisInitialized(t):e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{ISv1:function(t,e,n){"use strict";n.r(e),n.d(e,"SmpCalculatorAddModule",(function(){return L}));var o,a=n("vKZX"),i=n("d2mR"),c=n("tyNb"),r=n("zbGt"),l=n("kPQm"),s=n("LvDl"),m=n("wd/R"),f=n("FKr1"),p=n("XNiG"),d=n("1G5W"),g=n("fXoL"),b=n("u47x"),u=n("sYmb"),C=["*"],_=((o=function(t){_inherits(n,t);var e=_createSuper(n);function n(t,o,a,i,c){var r;return _classCallCheck(this,n),(r=e.call(this,t,o,a,i,c)).isTodaySelected=r._isTodaySelected(r.calendar.selected),r._destroyed=new p.a,r.calendar.selectedChange.pipe(Object(d.a)(r._destroyed)).subscribe((function(t){r.isTodaySelected=r._isTodaySelected(t)})),r}return _createClass(n,[{key:"ngOnDestroy",value:function(){this._destroyed.next(),this._destroyed.complete()}},{key:"setToday",value:function(){this.calendar.selected=this._dateAdapter.today(),this.calendar.activeDate=this._dateAdapter.today(),this.calendar._dateSelected({value:this.calendar.activeDate,event:void 0})}},{key:"_isTodaySelected",value:function(t){return t instanceof r.a?Object(m.parseZone)(t.start).isSame(Object(m.parseZone)(),"days"):Object(m.parseZone)(t).isSame(Object(m.parseZone)(),"days")}}]),n}(r.c)).\u0275fac=function(t){return new(t||o)(g.Ob(r.d),g.Ob(r.b),g.Ob(f.a),g.Ob(f.c),g.Ob(g.h))},o.\u0275cmp=g.Ib({type:o,selectors:[["smp-picker-custom-header"]],features:[g.zb],ngContentSelectors:C,decls:15,vars:12,consts:[[1,"mat-calendar-header","smp-picker-custom-header"],[1,"mat-calendar-controls"],["mat-button","","type","button","cdkAriaLive","polite",1,"mat-calendar-period-button",3,"click"],[1,"mat-calendar-arrow"],[1,"mat-calendar-spacer"],["mat-icon-button","","type","button",1,"mat-calendar-previous-button",3,"disabled","click"],["mat-icon-button","","type","button",1,"mat-calendar-next-button",3,"disabled","click"],[1,"header-bottom"],[1,"header-bottom-controls"],["mat-button","","color","primary",1,"d-block",3,"disabled","click"],[1,"smp-capitalize-first"]],template:function(t,e){1&t&&(g.nc(),g.Ub(0,"div",0),g.Ub(1,"div",1),g.Ub(2,"button",2),g.cc("click",(function(){return e.currentPeriodClicked()})),g.Ic(3),g.Pb(4,"div",3),g.Tb(),g.Pb(5,"div",4),g.mc(6),g.Ub(7,"button",5),g.cc("click",(function(){return e.previousClicked()})),g.Tb(),g.Ub(8,"button",6),g.cc("click",(function(){return e.nextClicked()})),g.Tb(),g.Tb(),g.Tb(),g.Ub(9,"div",7),g.Ub(10,"div",8),g.Ub(11,"button",9),g.cc("click",(function(){return e.setToday()})),g.Ub(12,"span",10),g.Ic(13),g.hc(14,"translate"),g.Tb(),g.Tb(),g.Tb(),g.Tb()),2&t&&(g.Cb(2),g.Db("aria-label",e.periodButtonLabel),g.Cb(1),g.Kc(" ",e.periodButtonText," "),g.Cb(1),g.Fb("mat-calendar-invert","month"!=e.calendar.currentView),g.Cb(3),g.oc("disabled",!e.previousEnabled()),g.Db("aria-label",e.prevButtonLabel),g.Cb(1),g.oc("disabled",!e.nextEnabled()),g.Db("aria-label",e.nextButtonLabel),g.Cb(3),g.oc("disabled",e.isTodaySelected),g.Cb(2),g.Jc(g.ic(14,10,"calculator.setToday")))},directives:[b.d],pipes:[u.c],styles:[".smp-picker-custom-header[_ngcontent-%COMP%]{padding-top:0}.smp-picker-custom-header[_ngcontent-%COMP%] > .mat-calendar-controls[_ngcontent-%COMP%]{margin-top:8px;margin-bottom:0}.header-bottom[_ngcontent-%COMP%]{padding:0 8px}.header-bottom[_ngcontent-%COMP%] > div.header-bottom-controls[_ngcontent-%COMP%]{margin:0 calc(4.71429% - 16px) 8px}"],changeDetection:0}),o),O=n("lsgU"),P=n("3Pt+"),M=n("kmnG"),h=n("qFsG"),x=n("n48n"),y=n("0wqj"),v=n("IU19"),k=n("ofXK"),w=n("PqUb"),z=n("bTqV"),T=n("1jcm"),U=n("d3UM");function R(t,e){1&t&&(g.Ub(0,"mat-error"),g.Ic(1),g.hc(2,"translate"),g.Tb()),2&t&&(g.Cb(1),g.Jc(g.ic(2,1,"calculator.errors.timeRequired")))}function H(t,e){if(1&t){var n=g.Vb();g.Ub(0,"mat-form-field"),g.Pb(1,"label",23),g.Ub(2,"input",24,25),g.cc("ngModelChange",(function(t){return g.zc(n),g.gc().formGroup.startHour=t})),g.hc(4,"translate"),g.Tb(),g.Ub(5,"i",26),g.cc("click",(function(){return g.zc(n),g.gc(),g.wc(15).open()})),g.Tb(),g.Gc(6,R,3,3,"mat-error",11),g.Tb()}if(2&t){var o=g.wc(3),a=g.gc(),i=g.wc(15);g.Cb(2),g.pc("placeholder",g.ic(4,4,"calculator.pickHour")),g.oc("ngxMatTimepicker",i)("ngModel",a.formGroup.startHour),g.Cb(4),g.oc("ngIf",o.touched&&(null==o.errors?null:o.errors.required))}}function N(t,e){if(1&t&&(g.Pb(0,"i",31),g.hc(1,"translate")),2&t){var n=g.gc().$implicit;g.pc("popper",g.ic(1,1,n.info))}}var I=function(t){return{"smp-margin-top-2x":t}};function G(t,e){if(1&t){var n=g.Vb();g.Ub(0,"div",27),g.Ub(1,"mat-slide-toggle",28),g.cc("ngModelChange",(function(t){g.zc(n);var o=e.$implicit;return g.gc().formGroup[o.value]=t})),g.Ub(2,"span",29),g.Ic(3),g.hc(4,"translate"),g.Tb(),g.Tb(),g.Gc(5,N,2,3,"i",30),g.Tb()}if(2&t){var o=e.$implicit,a=e.first,i=g.gc();g.Cb(1),g.qc("name","smp_clc_skip_",o.value,""),g.oc("ngModel",i.formGroup[o.value])("ngClass",g.tc(7,I,!a)),g.Cb(2),g.Jc(g.ic(4,5,o.description)),g.Cb(2),g.oc("ngIf",o.info)}}function D(t,e){if(1&t&&(g.Ub(0,"mat-option",44),g.Ub(1,"span",45),g.Ic(2),g.hc(3,"translate"),g.Tb(),g.Tb()),2&t){var n=e.$implicit;g.oc("value",n.value),g.Cb(2),g.Jc(g.ic(3,2,n.description))}}var j=function(t){return{selected:t}};function F(t,e){if(1&t){var n=g.Vb();g.Ub(0,"button",46),g.cc("click",(function(){g.zc(n);var t=e.$implicit;return g.gc().$implicit.operator=t.key})),g.Ic(1),g.Tb()}if(2&t){var o=e.$implicit,a=g.gc().$implicit;g.oc("ngClass",g.tc(2,j,a.operator===o.key)),g.Cb(1),g.Kc(" ",o.symbol," ")}}var S=function(t){return{"has-selection":t}};function Y(t,e){if(1&t){var n=g.Vb();g.Ub(0,"div",32),g.Ub(1,"i",33),g.cc("click",(function(){g.zc(n);var t=e.index;return g.gc().removeBlock(t)})),g.Tb(),g.Ub(2,"div",34),g.Ub(3,"div",35),g.Ub(4,"mat-form-field"),g.Pb(5,"label",36),g.Ub(6,"input",37),g.cc("ngModelChange",(function(t){return g.zc(n),e.$implicit.amount=t})),g.hc(7,"translate"),g.hc(8,"translate"),g.Tb(),g.Tb(),g.Tb(),g.Ub(9,"div",35),g.Ub(10,"mat-form-field"),g.Ub(11,"mat-select",38),g.cc("ngModelChange",(function(t){return g.zc(n),e.$implicit.timeUnit=t})),g.hc(12,"translate"),g.Gc(13,D,4,4,"mat-option",39),g.Tb(),g.Tb(),g.Tb(),g.Ub(14,"div",40),g.Ub(15,"label",41),g.Ic(16),g.hc(17,"translate"),g.Tb(),g.Ub(18,"div",42),g.Gc(19,F,2,4,"button",43),g.Tb(),g.Tb(),g.Tb(),g.Tb()}if(2&t){var o=e.$implicit,a=e.index,i=g.gc();g.Cb(5),g.qc("for","smp_clc_amount_",a,""),g.Cb(1),g.qc("id","smp_clc_amount_",a,""),g.qc("name","amount_",a,""),g.rc("placeholder","",g.ic(7,13,"units."+o.timeUnit)," ",g.ic(8,15,"calculator.toAdd"),""),g.oc("ngModel",o.amount),g.Cb(5),g.qc("name","time_unit_",a,""),g.pc("placeholder",g.ic(12,17,"calculator.units")),g.oc("ngModel",o.timeUnit),g.Cb(2),g.oc("ngForOf",i.timeUnits),g.Cb(3),g.Kc(" ",g.ic(17,19,"calculator.operation")," "),g.Cb(2),g.oc("ngClass",g.tc(21,S,o.operator)),g.Cb(1),g.oc("ngForOf",i.operators)}}function q(t,e){if(1&t){var n=g.Vb();g.Ub(0,"div",47),g.cc("click",(function(){return g.zc(n),g.gc().addBlock()})),g.Pb(1,"i",48),g.Ub(2,"p",49),g.Ic(3),g.hc(4,"translate"),g.Tb(),g.Tb()}2&t&&(g.Cb(3),g.Jc(g.ic(4,1,"calculator.addBlock")))}function A(t,e){if(1&t){var n=g.Vb();g.Ub(0,"div",50),g.Ub(1,"h2",29),g.Ic(2),g.hc(3,"translate"),g.Tb(),g.Ub(4,"p"),g.Ic(5),g.hc(6,"translate"),g.hc(7,"date"),g.Pb(8,"br"),g.Ic(9),g.hc(10,"translate"),g.Ub(11,"strong"),g.Ic(12),g.hc(13,"date"),g.Tb(),g.Tb(),g.Ub(14,"div",51),g.Ub(15,"button",52),g.cc("click",(function(){g.zc(n);var t=g.gc(),e=g.wc(2);return t.resetForm(e)})),g.Ic(16),g.hc(17,"translate"),g.Tb(),g.Ub(18,"button",53),g.cc("click",(function(){return g.zc(n),g.gc().setResultAsInitial()})),g.Ic(19),g.hc(20,"translate"),g.Tb(),g.Tb(),g.Tb()}if(2&t){var o=g.gc();g.oc("@inOutAnimation",void 0),g.Cb(2),g.Jc(g.ic(3,9,"calculator.result")),g.Cb(3),g.Lc("",g.ic(6,11,"calculator.startingFrom")," ",g.jc(7,13,o.formGroup.startDate,o.resultDateFormat)," "),g.Cb(4),g.Kc(" ",g.ic(10,16,"calculator.theResultIs")," "),g.Cb(3),g.Jc(g.jc(13,18,o.result,o.resultDateFormat)),g.Cb(4),g.Kc(" ",g.ic(17,21,"calculator.startOver")," "),g.Cb(2),g.oc("disabled",!o.result),g.Cb(1),g.Kc(" ",g.ic(20,23,"calculator.setInitial")," ")}}var B,K,Z,$=[{path:"",component:(B=function(){function t(e,n){_classCallCheck(this,t),this._dateAdapter=e,this._translateSrv=n,this.operators=l.a,this.options=[{description:"calculator.skipWeekends",value:"skipWeekends",info:"calculator.skipWeekendsInfo"},{description:"calculator.includeTime",value:"includeTime"}],this.pickerCustomHeaderType=_,this.result=void 0,this.timeUnits=O.a.timeUnitsComboOptions,this._defaultAmount="30",this.initForm()}return _createClass(t,[{key:"addBlock",value:function(){this.formGroup.blocks.length<5&&this.formGroup.blocks.push({amount:this._defaultAmount,operator:l.b.ADD,timeUnit:"days"})}},{key:"calcFinalDate",value:function(){var t=this,e=Object(m.parseZone)(this.formGroup.startDate);if(this.formGroup.includeTime&&this.formGroup.startHour){var n=this.formGroup.startHour.split(":");e.hours(+n[0]),e.minutes(+n[1])}this.formGroup.startDate=e.toDate();var o=Object(s.reduce)(this.formGroup.blocks,(function(e,n){return e[n.operator.toLowerCase()+("days"===n.timeUnit&&t.formGroup.skipWeekends?"Business":"")](n.amount,n.timeUnit)}),e);this.result=o.toDate(),setTimeout((function(){r.v.handleScrollBottom("#calculator_add_result")}),100)}},{key:"initForm",value:function(){this.formGroup={blocks:[],includeTime:!1,skipWeekends:!1,startDate:new Date,startHour:Object(m.parseZone)().format("HH:mm")},this.addBlock()}},{key:"removeBlock",value:function(t){this.formGroup.blocks.splice(t,1)}},{key:"resetForm",value:function(t){t.reset(),this.initForm()}},{key:"setResultAsInitial",value:function(){this.formGroup.startDate=this.result&&!isNaN(+new Date(this.result))?this.result:new Date,this.result=void 0}},{key:"startDateChanged",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.formGroup.startDate;this.result=void 0,this.formGroup.startDate=t}},{key:"resultDateFormat",get:function(){return this._dateAdapter.display.dateInput+(this.formGroup.includeTime?" HH:mm":"")}}]),t}(),B.\u0275fac=function(t){return new(t||B)(g.Ob(f.a),g.Ob(u.d))},B.\u0275cmp=g.Ib({type:B,selectors:[["smp-calculator-add"]],decls:32,vars:23,consts:[[1,"smp-clc-main-wrap"],[3,"ngSubmit"],["calculatorForm","ngForm"],[1,"d-flex","justify-content-center","align-items-center","flex-column","flex-sm-column","flex-md-row","flex-lg-row","flex-xl-row","smp-margin-bottom-2x","route-animations-elements"],[1,"d-flex","flex-column","justify-content-between","align-content-center"],["for","smp_clc_start_date",1,"d-none"],["matInput","","id","smp_clc_start_date","name","start_date","required","",3,"matDatepicker","ngModel","placeholder","ngModelChange"],["startDateInput","ngModel"],["matSuffix","",3,"for"],["touchUi","",3,"calendarHeaderComponent"],["picker",""],[4,"ngIf"],["color","primary"],["timePicker",""],[1,"smp-clc-add-options"],[1,"d-block","smp-font-12","smp-capitalize-first"],["class","text-left",4,"ngFor","ngForOf"],["class","smp-clc-block d-flex align-items-start justify-content-center route-animations-elements",4,"ngFor","ngForOf"],["class","smp-clc-add-block-wrap d-flex flex-column justify-content-center align-content-center smp-color-grey-dark route-animations-elements",3,"click",4,"ngIf"],[1,"d-flex","justify-content-between","smp-margin-top-2x","smp-margin-bottom-2x","route-animations-elements"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize",3,"disabled","click"],["mat-button","","mat-raised-button","","color","primary","type","submit",1,"smp-capitalize",3,"disabled","click"],["id","calculator_add_result","class","alert alert-success",4,"ngIf"],["for","smp_clc_start_time",1,"d-none"],["format","24","matInput","","id","smp_clc_start_time","name","smp_clc_start_time","readonly","","required","",3,"ngxMatTimepicker","ngModel","placeholder","ngModelChange"],["time","ngModel"],["matSuffix","",1,"fas","fa-clock",3,"click"],[1,"text-left"],["color","primary",1,"smp-margin-left-2x",3,"name","ngModel","ngClass","ngModelChange"],[1,"smp-capitalize-first"],["class","fas fa-info-circle smp-color-primary","popperTrigger","click","popperPlacement","top",3,"popper",4,"ngIf"],["popperTrigger","click","popperPlacement","top",1,"fas","fa-info-circle","smp-color-primary",3,"popper"],[1,"smp-clc-block","d-flex","align-items-start","justify-content-center","route-animations-elements"],[1,"fas","fa-times","fa-2x",3,"click"],[1,"row","flex-column","flex-sm-column","flex-md-row","flex-lg-row","flex-xl-row"],[1,"col"],[1,"d-none",3,"for"],["matInput","","type","number","pattern","\\d{1,5}","required","",3,"id","name","ngModel","placeholder","ngModelChange"],["required","",3,"name","placeholder","ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],[1,"col","d-flex","align-items-center"],[1,"smp-margin-right-1x","smp-font-12","smp-color-grey-dark"],[1,"smp-clc-operators-wrap","d-flex","justify-content-center",3,"ngClass"],["mat-icon-button","","mat-raised-button","","color","primary",3,"ngClass","click",4,"ngFor","ngForOf"],[3,"value"],[1,"smp-capitalize"],["mat-icon-button","","mat-raised-button","","color","primary",3,"ngClass","click"],[1,"smp-clc-add-block-wrap","d-flex","flex-column","justify-content-center","align-content-center","smp-color-grey-dark","route-animations-elements",3,"click"],[1,"fas","fa-2x","fa-plus-circle"],[1,"smp-capitalize-first","smp-no-margin"],["id","calculator_add_result",1,"alert","alert-success"],[1,"d-flex","justify-content-between","flex-column","flex-sm-row","flex-md-row","flex-lg-row"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize-first","mb-2",3,"click"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize-first",3,"disabled","click"]],template:function(t,e){if(1&t){var n=g.Vb();g.Ub(0,"div",0),g.Ub(1,"form",1,2),g.cc("ngSubmit",(function(){return e.calcFinalDate()})),g.Ub(3,"div",3),g.Ub(4,"div",4),g.Ub(5,"mat-form-field"),g.Pb(6,"label",5),g.Ub(7,"input",6,7),g.cc("ngModelChange",(function(t){return e.startDateChanged(t)})),g.hc(9,"translate"),g.Tb(),g.Pb(10,"mat-datepicker-toggle",8),g.Pb(11,"mat-datepicker",9,10),g.Tb(),g.Gc(13,H,7,6,"mat-form-field",11),g.Pb(14,"ngx-mat-timepicker",12,13),g.Tb(),g.Ub(16,"div",14),g.Ub(17,"span",15),g.Ic(18),g.hc(19,"translate"),g.Tb(),g.Gc(20,G,6,9,"div",16),g.Tb(),g.Tb(),g.Gc(21,Y,20,23,"div",17),g.Gc(22,q,5,3,"div",18),g.Ub(23,"div",19),g.Ub(24,"button",20),g.cc("click",(function(){g.zc(n);var t=g.wc(2);return e.resetForm(t)})),g.Ic(25),g.hc(26,"translate"),g.Tb(),g.Ub(27,"button",21),g.cc("click",(function(){return e.calcFinalDate()})),g.Ic(28),g.hc(29,"translate"),g.Tb(),g.Tb(),g.Tb(),g.Gc(30,A,21,25,"div",22),g.Tb(),g.Pb(31,"hr")}if(2&t){var o=g.wc(2),a=g.wc(12);g.Cb(7),g.pc("placeholder",g.ic(9,15,"calculator.startDate")),g.oc("matDatepicker",a)("ngModel",e.formGroup.startDate),g.Cb(3),g.oc("for",a),g.Cb(1),g.oc("calendarHeaderComponent",e.pickerCustomHeaderType),g.Cb(2),g.oc("ngIf",e.formGroup.includeTime),g.Cb(5),g.Jc(g.ic(19,17,"calculator.options")),g.Cb(2),g.oc("ngForOf",e.options),g.Cb(1),g.oc("ngForOf",e.formGroup.blocks),g.Cb(1),g.oc("ngIf",e.formGroup.blocks.length<5),g.Cb(2),g.oc("disabled",!o.dirty),g.Cb(1),g.Kc(" ",g.ic(26,19,"calculator.clear")," "),g.Cb(2),g.oc("disabled",o.invalid||!e.formGroup.blocks.length),g.Cb(1),g.Kc(" ",g.ic(29,21,"calculator.submit")," "),g.Cb(2),g.oc("ngIf",!!e.result)}},directives:[P.r,P.k,P.l,M.c,h.b,x.a,P.c,P.p,P.j,P.m,y.a,M.h,v.a,k.l,w.c,k.k,z.b,w.a,M.b,T.a,k.j,a.a,P.n,P.o,U.a,f.l],pipes:[u.c,k.e],styles:[".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2[_ngcontent-%COMP%], .mat-body-strong[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-caption[_ngcontent-%COMP%], .mat-small[_ngcontent-%COMP%]{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(.75);width:133.33333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(.75);width:133.33334333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.66666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.54166667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59374em) scale(.75);width:133.33334333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(.75);width:133.33334333%}.mat-grid-tile-footer[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%], .mat-select[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%], .mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:400}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%], .mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%], .mat-list-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node[_ngcontent-%COMP%], .mat-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-pane[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{\n  }@keyframes cdk-text-field-autofill-start{\n  }@-webkit-keyframes cdk-text-field-autofill-end{\n  }@keyframes cdk-text-field-autofill-end{\n  }.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}div.smp-clc-add-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{margin-left:8px;line-height:24px;vertical-align:top;cursor:pointer}div.smp-clc-add-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:before{line-height:24px}div.smp-clc-operators-wrap.has-selection[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){opacity:.75}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){transform:scale(.75)}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(odd){margin-right:8px}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-bottom:8px}"],data:{animation:r.f}}),B),data:{title:"calculator.titleAdd"}}],J=((Z=function t(){_classCallCheck(this,t)}).\u0275mod=g.Mb({type:Z}),Z.\u0275inj=g.Lb({factory:function(t){return new(t||Z)},imports:[[c.k.forChild($)],c.k]}),Z),L=((K=function t(){_classCallCheck(this,t)}).\u0275mod=g.Mb({type:K}),K.\u0275inj=g.Lb({factory:function(t){return new(t||K)},imports:[[a.b,i.a,J]]}),K)}}]);
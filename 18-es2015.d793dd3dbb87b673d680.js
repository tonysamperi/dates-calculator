(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{tNk0:function(t,n,e){"use strict";e.r(n),e.d(n,"SmpCalculatorRangeModule",(function(){return D}));var o=e("d2mR"),a=e("tyNb"),i=e("zbGt"),c=e("kPQm"),l=e("LvDl"),r=e("wd/R"),m=e("lsgU"),s=e("fXoL"),f=e("FKr1"),g=e("sYmb"),p=e("3Pt+"),d=e("kmnG"),b=e("d3UM"),C=e("ofXK"),_=e("bTqV"),M=e("ZgVr"),O=e("0C3N"),P=e("pLHH"),u=e("0wqj"),h=e("LpcS");let x=(()=>{class t{transform(t,n){return 1===n?t.slice(0,-1):t}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275pipe=s.Nb({name:"handleSingular",type:t,pure:!0}),t})();const y=["calculatorForm"];function v(t,n){if(1&t&&(s.Ub(0,"mat-option",11),s.Ub(1,"span",12),s.Ic(2),s.hc(3,"translate"),s.Tb(),s.Tb()),2&t){const t=n.$implicit;s.oc("value",t.value),s.Cb(2),s.Jc(s.ic(3,2,t.description))}}function w(t,n){1&t&&(s.Ub(0,"mat-error"),s.Ic(1,"Invalid start date"),s.Tb())}function k(t,n){1&t&&(s.Ub(0,"mat-error"),s.Ic(1,"Invalid end date"),s.Tb())}function z(t,n){if(1&t){const t=s.Vb();s.Ub(0,"div",13),s.Ub(1,"i",14),s.cc("click",(function(){s.zc(t);const e=n.index;return s.gc().removeBlock(e)})),s.Tb(),s.Ub(2,"div",15),s.Ub(3,"div",3),s.Ub(4,"mat-form-field"),s.Ub(5,"mat-label"),s.Ic(6,"Enter a date range"),s.Tb(),s.Ub(7,"mat-date-range-input",16),s.Pb(8,"label",17),s.Ub(9,"input",18,19),s.cc("ngModelChange",(function(e){return s.zc(t),n.$implicit.startDate=e})),s.hc(11,"translate"),s.Tb(),s.Pb(12,"label",17),s.Ub(13,"input",20,21),s.cc("ngModelChange",(function(e){return s.zc(t),n.$implicit.endDate=e})),s.hc(15,"translate"),s.Tb(),s.Tb(),s.Pb(16,"mat-datepicker-toggle",22),s.Pb(17,"mat-date-range-picker",23,24),s.Gc(19,w,2,0,"mat-error",25),s.Gc(20,k,2,0,"mat-error",25),s.Tb(),s.Tb(),s.Tb(),s.Tb()}if(2&t){const t=n.$implicit,e=n.index,o=s.wc(10),a=s.wc(14),i=s.wc(18),c=s.gc();s.Cb(1),s.oc("smpHide",c.formGroup.blocks.length<2),s.Cb(6),s.oc("rangePicker",i)("min",e>0?c.formGroup.blocks[e-1].endDate:""),s.Cb(1),s.qc("for","calendar_range_start_",t.id,""),s.Cb(1),s.qc("id","calendar_range_start_",t.id,""),s.qc("name","calendar_range_start_",t.id,""),s.pc("placeholder",s.ic(11,16,"calculator.startDate")),s.oc("ngModel",t.startDate),s.Cb(3),s.qc("for","calendar_range_end_",t.id,""),s.Cb(1),s.qc("id","calendar_range_end_",t.id,""),s.qc("name","calendar_range_end_",t.id,""),s.pc("placeholder",s.ic(15,18,"calculator.endDate")),s.oc("ngModel",t.endDate),s.Cb(3),s.oc("for",i),s.Cb(3),s.oc("ngIf",o.hasError("matStartDateInvalid")),s.Cb(1),s.oc("ngIf",a.hasError("matEndDateInvalid"))}}function R(t,n){if(1&t){const t=s.Vb();s.Ub(0,"div",26),s.cc("click",(function(){return s.zc(t),s.gc().addBlock()})),s.Pb(1,"i",27),s.Ub(2,"p",28),s.Ic(3),s.hc(4,"translate"),s.Tb(),s.Tb()}2&t&&(s.Cb(3),s.Jc(s.ic(4,1,"calculator.addBlock")))}function N(t,n){if(1&t&&(s.Ub(0,"p"),s.Ub(1,"span",30),s.Ic(2),s.hc(3,"translate"),s.Tb(),s.Ic(4," \xa0"),s.Ub(5,"strong"),s.Ic(6),s.Tb(),s.Ic(7),s.hc(8,"translate"),s.hc(9,"handleSingular"),s.hc(10,"translate"),s.hc(11,"date"),s.hc(12,"translate"),s.hc(13,"date"),s.Tb()),2&t){const t=n.$implicit,e=s.gc(2);s.Cb(2),s.Jc(s.ic(3,7,1===t.diff?"generalDictionary.thereIs":"generalDictionary.thereAre")),s.Cb(4),s.Jc(t.diff),s.Cb(1),s.Nc(" ",s.ic(8,9,s.jc(9,11,"units."+e.formGroup.timeUnit,t.diff))," ",s.ic(10,14,"generalDictionary.between")," ",s.jc(11,16,t.startDate,e.dateFormat)," ",s.ic(12,19,"generalDictionary.and")," ",s.jc(13,21,t.endDate,e.dateFormat)," ")}}function U(t,n){if(1&t&&(s.Ub(0,"p",30),s.Ic(1),s.hc(2,"translate"),s.Ub(3,"strong"),s.Ic(4),s.hc(5,"translate"),s.Tb(),s.Tb()),2&t){const t=s.gc(2);s.Cb(1),s.Kc(" ",s.ic(2,3,"calculator.totalIs")," "),s.Cb(3),s.Lc("",t.result.totalDiff," ",s.ic(5,5,"units."+t.formGroup.timeUnit),"")}}function H(t,n){if(1&t){const t=s.Vb();s.Ub(0,"div",29),s.Ub(1,"h2",30),s.Ic(2),s.hc(3,"translate"),s.Tb(),s.Gc(4,N,14,24,"p",31),s.Gc(5,U,6,7,"p",32),s.Ub(6,"div",33),s.Ub(7,"button",34),s.cc("click",(function(){return s.zc(t),s.gc().resetForm()})),s.Ic(8),s.hc(9,"translate"),s.Tb(),s.Tb(),s.Tb()}if(2&t){const t=s.gc(),n=s.wc(2);s.oc("@inOutAnimation",void 0),s.Cb(2),s.Jc(s.ic(3,6,"calculator.result")),s.Cb(2),s.oc("ngForOf",t.result.rows),s.Cb(1),s.oc("ngIf",t.result.rows.length>1),s.Cb(2),s.oc("disabled",n.pristine),s.Cb(1),s.Kc(" ",s.ic(9,8,"calculator.startOver")," ")}}const T=[{path:"",component:(()=>{class t{constructor(t,n){this._dateAdapter=t,this._translateSrv=n,this.operators=c.a,this.timeUnits=m.a.timeUnitsComboOptions,this.initForm()}get dateFormat(){return this._dateAdapter.display.dateInput}addBlock(){if(this.formGroup.blocks.length<5){const t=(Object(l.last)(this.formGroup.blocks)||{}).endDate||new Date;this.formGroup.blocks.push({id:i.v.rndNumericString(10),startDate:t,endDate:Object(r.parseZone)(t).add(1,"days").toDate()})}}calcResults(){let t=0;this.result={rows:Object(l.map)(this.formGroup.blocks,n=>{const e=Object(r.parseZone)(n.endDate).diff(n.startDate,this.formGroup.timeUnit);return t+=e,{diff:e,endDate:n.endDate,startDate:n.startDate}}),totalDiff:t},setTimeout(()=>{i.v.handleScrollBottom("#calculator_range_result")},100)}initForm(){this.formGroup={blocks:[],timeUnit:"days"},this.addBlock()}removeBlock(t){this.formGroup.blocks.splice(t,1)}resetForm(){this.result=void 0,this.initForm()}}return t.\u0275fac=function(n){return new(n||t)(s.Ob(f.a),s.Ob(g.d))},t.\u0275cmp=s.Ib({type:t,selectors:[["smp-calculator-range"]],viewQuery:function(t,n){var e;1&t&&s.Pc(y,!0),2&t&&s.vc(e=s.dc())&&(n.calculatorForm=e.first)},decls:19,vars:16,consts:[[1,"smp-clc-main-wrap"],[3,"ngSubmit"],["calculatorForm","ngForm"],[1,"col"],["required","","name","time_unit",3,"placeholder","ngModel","selectionChange","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","smp-clc-block d-flex align-items-start justify-content-center route-animations-elements",4,"ngFor","ngForOf"],["class","smp-clc-add-block-wrap d-flex flex-column justify-content-center align-content-center smp-color-grey-dark route-animations-elements",3,"click",4,"ngIf"],[1,"d-flex","justify-content-between","smp-margin-top-2x","smp-margin-bottom-2x","route-animations-elements"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize",3,"disabled","click"],["id","calculator_range_result","class","alert alert-success",4,"ngIf"],[3,"value"],[1,"smp-capitalize"],[1,"smp-clc-block","d-flex","align-items-start","justify-content-center","route-animations-elements"],[1,"fas","fa-times","fa-2x",3,"smpHide","click"],[1,"row","flex-column","flex-sm-column","flex-md-row","flex-lg-row","flex-xl-row"],[3,"rangePicker","min"],[1,"d-none",3,"for"],["matStartDate","","required","",3,"id","name","ngModel","placeholder","ngModelChange"],["rangeStart","ngModel"],["matEndDate","","required","",3,"id","name","ngModel","placeholder","ngModelChange"],["rangeEnd","ngModel"],["matSuffix","",3,"for"],["touchUi",""],["rangePicker",""],[4,"ngIf"],[1,"smp-clc-add-block-wrap","d-flex","flex-column","justify-content-center","align-content-center","smp-color-grey-dark","route-animations-elements",3,"click"],[1,"fas","fa-2x","fa-plus-circle"],[1,"smp-capitalize-first","smp-no-margin"],["id","calculator_range_result",1,"alert","alert-success"],[1,"smp-capitalize-first"],[4,"ngFor","ngForOf"],["class","smp-capitalize-first",4,"ngIf"],[1,"d-flex","justify-content-center","flex-column","flex-sm-row","flex-md-row","flex-lg-row"],["mat-button","","mat-raised-button","","color","primary",1,"smp-capitalize-first",3,"disabled","click"]],template:function(t,n){if(1&t&&(s.Ub(0,"div",0),s.Ub(1,"form",1,2),s.cc("ngSubmit",(function(){return n.calcResults()})),s.Ub(3,"div",3),s.Ub(4,"mat-form-field"),s.Ub(5,"mat-select",4),s.cc("selectionChange",(function(){return n.result&&n.calcResults()}))("ngModelChange",(function(t){return n.formGroup.timeUnit=t})),s.hc(6,"translate"),s.Gc(7,v,4,4,"mat-option",5),s.Tb(),s.Tb(),s.Tb(),s.Gc(8,z,21,20,"div",6),s.Gc(9,R,5,3,"div",7),s.Ub(10,"div",8),s.Ub(11,"button",9),s.cc("click",(function(){return n.resetForm()})),s.Ic(12),s.hc(13,"translate"),s.Tb(),s.Ub(14,"button",9),s.cc("click",(function(){return n.calcResults()})),s.Ic(15),s.hc(16,"translate"),s.Tb(),s.Tb(),s.Tb(),s.Gc(17,H,10,10,"div",10),s.Tb(),s.Pb(18,"hr")),2&t){const t=s.wc(2);s.Cb(5),s.pc("placeholder",s.ic(6,10,"calculator.units")),s.oc("ngModel",n.formGroup.timeUnit),s.Cb(2),s.oc("ngForOf",n.timeUnits),s.Cb(1),s.oc("ngForOf",n.formGroup.blocks),s.Cb(1),s.oc("ngIf",n.formGroup.blocks.length<5),s.Cb(2),s.oc("disabled",t.pristine),s.Cb(1),s.Kc(" ",s.ic(13,12,"calculator.clear")," "),s.Cb(2),s.oc("disabled",t.invalid),s.Cb(1),s.Kc(" ",s.ic(16,14,"calculator.submit")," "),s.Cb(2),s.oc("ngIf",!!n.result)}},directives:[p.r,p.k,p.l,d.c,b.a,p.p,p.j,p.m,C.k,C.l,_.b,f.l,M.a,d.f,O.a,P.c,p.c,P.b,u.a,d.h,h.a,d.b],pipes:[g.c,x,C.e],styles:[".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2[_ngcontent-%COMP%], .mat-body-strong[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-caption[_ngcontent-%COMP%], .mat-small[_ngcontent-%COMP%]{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(.75);width:133.33333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(.75);width:133.33334333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.66666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.54166667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59374em) scale(.75);width:133.33334333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(.75);width:133.33334333%}.mat-grid-tile-footer[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%], .mat-select[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%], .mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:400}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%], .mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%], .mat-list-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node[_ngcontent-%COMP%], .mat-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-pane[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{\n  }@keyframes cdk-text-field-autofill-start{\n  }@-webkit-keyframes cdk-text-field-autofill-end{\n  }@keyframes cdk-text-field-autofill-end{\n  }.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}div.smp-clc-operators-wrap.has-selection[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){opacity:.75}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:not(.selected){transform:scale(.75)}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:nth-child(odd){margin-right:8px}div.smp-clc-operators-wrap[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:first-child{margin-bottom:8px}"],data:{animation:i.f}}),t})(),data:{title:"calculator.titleRange"}}];let I=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(n){return new(n||t)},imports:[[a.k.forChild(T)],a.k]}),t})(),D=(()=>{class t{}return t.\u0275mod=s.Mb({type:t}),t.\u0275inj=s.Lb({factory:function(n){return new(n||t)},imports:[[o.a,I]]}),t})()}}]);
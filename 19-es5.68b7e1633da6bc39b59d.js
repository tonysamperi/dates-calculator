function _classCallCheck(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,n){for(var e=0;e<n.length;e++){var o=n[e];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _createClass(t,n,e){return n&&_defineProperties(t.prototype,n),e&&_defineProperties(t,e),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{VMV7:function(t,n,e){"use strict";e.r(n),e.d(n,"SmpSettingsPageModule",(function(){return k}));var o=e("d2mR"),a=e("tyNb"),i=e("zbGt"),c=e("LvDl"),l=e("PqYM"),r=e("fXoL"),s=e("sYmb"),m=e("ofXK"),g=e("kmnG"),f=e("d3UM"),p=e("3Pt+"),d=e("1jcm"),b=e("bTqV"),C=e("FKr1");function P(t,n){if(1&t&&(r.Ub(0,"mat-option",26),r.Ic(1),r.Tb()),2&t){var e=n.$implicit;r.oc("value",e.value),r.Cb(1),r.Kc(" ",e.description," ")}}function _(t,n){if(1&t&&(r.Ub(0,"mat-option",26),r.Ic(1),r.Tb()),2&t){var e=n.$implicit;r.oc("value",e.value),r.Cb(1),r.Kc(" ",e.description," ")}}function M(t,n){1&t&&r.Pb(0,"mat-slide-toggle",27)}function O(t,n){if(1&t){var e=r.Vb();r.Ub(0,"mat-slide-toggle",12),r.cc("change",(function(t){return r.zc(e),r.gc(2).onPageAnimationsToggle(t)})),r.Tb()}if(2&t){var o=r.gc().ngIf;r.oc("checked",o.pageAnimations)}}function h(t,n){if(1&t){var e=r.Vb();r.Sb(0),r.Ub(1,"div",1),r.Ub(2,"div",5),r.Ub(3,"h2",3),r.Ic(4),r.hc(5,"translate"),r.Tb(),r.Ub(6,"div",6),r.Pb(7,"i",7),r.Ub(8,"mat-form-field"),r.Ub(9,"mat-select",8),r.cc("ngModelChange",(function(t){return r.zc(e),n.ngIf.language=t}))("selectionChange",(function(t){return r.zc(e),r.gc().onLanguageSelect(t)})),r.hc(10,"titlecase"),r.hc(11,"translate"),r.Gc(12,P,2,2,"mat-option",9),r.Tb(),r.Tb(),r.Tb(),r.Ub(13,"div",6),r.Pb(14,"i",10),r.Ub(15,"mat-placeholder",11),r.Ic(16),r.hc(17,"translate"),r.Tb(),r.Ub(18,"mat-slide-toggle",12),r.cc("change",(function(t){return r.zc(e),r.gc().onStickyHeaderToggle(t)})),r.Tb(),r.Tb(),r.Tb(),r.Ub(19,"div",5),r.Ub(20,"h2",3),r.Ic(21),r.hc(22,"translate"),r.Tb(),r.Ub(23,"p",11),r.Ic(24),r.hc(25,"translate"),r.Tb(),r.Ub(26,"div",13),r.Ub(27,"a",14),r.cc("click",(function(){return r.zc(e),r.gc().clearPreferences()})),r.Pb(28,"i",15),r.Ub(29,"span",16),r.Ic(30),r.hc(31,"translate"),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Ub(32,"div",1),r.Ub(33,"div",5),r.Ub(34,"h2"),r.Ic(35),r.hc(36,"translate"),r.Tb(),r.Ub(37,"div",6),r.Pb(38,"i",17),r.Ub(39,"mat-form-field"),r.Ub(40,"mat-select",18),r.cc("selectionChange",(function(t){return r.zc(e),r.gc().onThemeSelect(t)})),r.hc(41,"titlecase"),r.hc(42,"translate"),r.Gc(43,_,2,2,"mat-option",9),r.Tb(),r.Tb(),r.Tb(),r.Ub(44,"div",6),r.Pb(45,"i",19),r.Ub(46,"div",20),r.Ub(47,"mat-placeholder",21),r.Ic(48),r.hc(49,"translate"),r.Tb(),r.Ub(50,"mat-placeholder",21),r.Ic(51),r.hc(52,"translate"),r.Tb(),r.Tb(),r.Ub(53,"mat-slide-toggle",12),r.cc("change",(function(t){return r.zc(e),r.gc().onAutoNightModeToggle(t)})),r.Tb(),r.Tb(),r.Tb(),r.Ub(54,"div",5),r.Ub(55,"h2",3),r.Ic(56),r.hc(57,"translate"),r.Tb(),r.Ub(58,"div",6),r.Pb(59,"i",22),r.Ub(60,"mat-placeholder"),r.Ic(61),r.hc(62,"translate"),r.Tb(),r.Gc(63,M,1,0,"mat-slide-toggle",23),r.Gc(64,O,1,1,"mat-slide-toggle",24),r.Tb(),r.Ub(65,"div",6),r.Pb(66,"i",25),r.Ub(67,"mat-placeholder"),r.Ic(68),r.hc(69,"translate"),r.Tb(),r.Ub(70,"mat-slide-toggle",12),r.cc("change",(function(t){return r.zc(e),r.gc().onElementsAnimationsToggle(t)})),r.Tb(),r.Tb(),r.Tb(),r.Tb(),r.Rb()}if(2&t){var o=n.ngIf,a=r.gc();r.Cb(2),r.oc("ngClass",a.routeAnimationsElements),r.Cb(2),r.Jc(r.ic(5,26,"settingsPage.general.title")),r.Cb(5),r.oc("placeholder",r.ic(10,28,r.ic(11,30,"settingsPage.general.placeholder")))("ngModel",o.language),r.Cb(3),r.oc("ngForOf",a.languages),r.Cb(4),r.Kc("",r.ic(17,32,"settingsPage.theme.stickyHeader")," "),r.Cb(2),r.oc("checked",o.stickyHeader),r.Cb(1),r.oc("ngClass",a.routeAnimationsElements),r.Cb(2),r.Jc(r.ic(22,34,"settingsPage.reset.title")),r.Cb(3),r.Jc(r.ic(25,36,"settingsPage.reset.description")),r.Cb(6),r.Jc(r.ic(31,38,"settingsPage.reset.resetButton")),r.Cb(3),r.oc("ngClass",a.routeAnimationsElements),r.Cb(2),r.Jc(r.ic(36,40,"settingsPage.theme.title")),r.Cb(5),r.oc("placeholder",r.ic(41,42,r.ic(42,44,"settingsPage.theme.placeholder")))("ngModel",o.desiredTheme),r.Cb(3),r.oc("ngForOf",a.themes),r.Cb(5),r.Jc(r.ic(49,46,"settingsPage.theme.autoNightMode")),r.Cb(3),r.Jc(r.ic(52,48,"settingsPage.theme.autoNightModeHours")),r.Cb(2),r.oc("checked",o.autoNightMode),r.Cb(1),r.oc("ngClass",a.routeAnimationsElements),r.Cb(2),r.Jc(r.ic(57,50,"settingsPage.animations.title")),r.Cb(5),r.Kc("",r.ic(62,52,"settingsPage.animations.page")," "),r.Cb(2),r.oc("ngIf",o.pageAnimationsDisabled),r.Cb(1),r.oc("ngIf",!o.pageAnimationsDisabled),r.Cb(4),r.Kc("",r.ic(69,54,"settingsPage.animations.elements")," "),r.Cb(2),r.oc("checked",o.elementsAnimations)}}var u,x,v,y=[{path:"",component:(u=function(){function t(n,e,o,a){var c=this;_classCallCheck(this,t),this._ngZone=n,this._dialogSrv=e,this._settingsSrv=o,this._translateSrv=a,this.routeAnimationsElements=i.i,this.settings$=this._settingsSrv.settings$,this.themes=[{description:"Light",value:i.u.light},{description:"Dark",value:i.u.dark}],this._hour=0,this._translateSrv.onLangChange.subscribe((function(){return c.ngOnInit()}))}return _createClass(t,[{key:"clearPreferences",value:function(){var t=this;this._dialogSrv.openAlertDialog({title:"",dialogContent:this._translateSrv.instant("settingsPage.reset.confirm"),type:i.k.question}).subscribe((function(n){n===i.j.confirm&&t._settingsSrv.clearPreferences()}))}},{key:"ngOnInit",value:function(){var t=this;this.languages=Object(c.map)(this._translateSrv.getLangs(),(function(n){return{value:n,description:t._translateSrv.instant("settingsPage.general.language."+n).capitalize()}})),this._watchHour()}},{key:"onAutoNightModeToggle",value:function(t){var n=t.checked;this._settingsSrv.updateSettings({autoNightMode:n})}},{key:"onElementsAnimationsToggle",value:function(t){var n=t.checked;this._settingsSrv.updateSettings({elementsAnimations:n})}},{key:"onLanguageSelect",value:function(t){var n=t.value;this._settingsSrv.updateSettings({language:n})}},{key:"onPageAnimationsToggle",value:function(t){var n=t.checked;this._settingsSrv.updateSettings({pageAnimations:n})}},{key:"onStickyHeaderToggle",value:function(t){var n=t.checked;this._settingsSrv.updateSettings({stickyHeader:n})}},{key:"onThemeSelect",value:function(t){var n=t.value;this._settingsSrv.updateSettings({desiredTheme:n})}},{key:"_watchHour",value:function(){var t=this;this._ngZone.runOutsideAngular((function(){return Object(l.a)(0,6e4).subscribe((function(){var n=(new Date).getHours();n!==t._hour&&(t._hour=n,t._ngZone.run((function(){return t._settingsSrv.updateSettings({hour:n})})))}))}))}}]),t}(),u.\u0275fac=function(t){return new(t||u)(r.Ob(r.A),r.Ob(i.n),r.Ob(i.s),r.Ob(s.d))},u.\u0275cmp=r.Ib({type:u,selectors:[["smp-settings"]],decls:9,vars:6,consts:[[1,"container","smp-margin-top-3x"],[1,"row"],[1,"col-sm-12"],[1,"smp-capitalize"],[4,"ngIf"],[1,"col-md-6","group",3,"ngClass"],[1,"icon-form-field"],[1,"smp-color-primary","fas","fa-language"],["name","language",3,"placeholder","ngModel","ngModelChange","selectionChange"],[3,"value",4,"ngFor","ngForOf"],[1,"smp-color-primary","fas","fa-bars"],[1,"smp-capitalize-first"],[3,"checked","change"],[1,"d-flex","justify-content-center"],["mat-raised-button","","color","warn",3,"click"],[1,"fas","fa-history"],[1,"d-inline-block","smp-capitalize"],[1,"smp-color-primary","fas","fa-paint-brush"],["name","theme",3,"placeholder","ngModel","selectionChange"],[1,"smp-color-primary","fas","fa-lightbulb"],[1,"smp-capitalize-first-children"],[1,"d-block"],[1,"smp-color-primary","fas","fa-window-maximize"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled","",4,"ngIf"],[3,"checked","change",4,"ngIf"],[1,"smp-color-primary","fas","fa-stream"],[3,"value"],["matTooltip","Sorry, this feature is disabled in IE, EDGE and Safari","matTooltipPosition","before","disabled",""]],template:function(t,n){1&t&&(r.Ub(0,"div",0),r.Ub(1,"div",1),r.Ub(2,"div",2),r.Ub(3,"h1",3),r.Ic(4),r.hc(5,"translate"),r.Tb(),r.Tb(),r.Tb(),r.Pb(6,"br"),r.Gc(7,h,71,56,"ng-container",4),r.hc(8,"async"),r.Tb()),2&t&&(r.Cb(4),r.Kc(" ",r.ic(5,2,"settingsPage.title")," "),r.Cb(3),r.oc("ngIf",r.ic(8,4,n.settings$)))},directives:[m.l,m.j,g.c,f.a,p.j,p.m,m.k,g.g,d.a,b.a,C.l],pipes:[s.c,m.b,m.u],styles:[".mat-badge-content[_ngcontent-%COMP%]{font-weight:600;font-size:12px;font-family:Roboto,Helvetica Neue,sans-serif}.mat-badge-small[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:9px}.mat-badge-large[_ngcontent-%COMP%]   .mat-badge-content[_ngcontent-%COMP%]{font-size:24px}.mat-h1[_ngcontent-%COMP%], .mat-headline[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2[_ngcontent-%COMP%], .mat-title[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3[_ngcontent-%COMP%], .mat-subheading-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4[_ngcontent-%COMP%], .mat-subheading-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2[_ngcontent-%COMP%], .mat-body-strong[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body[_ngcontent-%COMP%], .mat-body-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:0 0 12px}.mat-caption[_ngcontent-%COMP%], .mat-small[_ngcontent-%COMP%]{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-4[_ngcontent-%COMP%]{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-3[_ngcontent-%COMP%]{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-2[_ngcontent-%COMP%]{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1[_ngcontent-%COMP%], .mat-typography[_ngcontent-%COMP%]   .mat-display-1[_ngcontent-%COMP%]{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button[_ngcontent-%COMP%], .mat-fab[_ngcontent-%COMP%], .mat-flat-button[_ngcontent-%COMP%], .mat-icon-button[_ngcontent-%COMP%], .mat-mini-fab[_ngcontent-%COMP%], .mat-raised-button[_ngcontent-%COMP%], .mat-stroked-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle[_ngcontent-%COMP%], .mat-card[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title[_ngcontent-%COMP%]{font-size:24px;font-weight:500}.mat-card-header[_ngcontent-%COMP%]   .mat-card-title[_ngcontent-%COMP%]{font-size:20px}.mat-card-content[_ngcontent-%COMP%], .mat-card-subtitle[_ngcontent-%COMP%]{font-size:14px}.mat-checkbox[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout[_ngcontent-%COMP%]   .mat-checkbox-label[_ngcontent-%COMP%]{line-height:24px}.mat-chip[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-chip[_ngcontent-%COMP%]   .mat-chip-remove.mat-icon[_ngcontent-%COMP%], .mat-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon.mat-icon[_ngcontent-%COMP%]{font-size:18px}.mat-table[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-cell[_ngcontent-%COMP%], .mat-footer-cell[_ngcontent-%COMP%]{font-size:14px}.mat-calendar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body[_ngcontent-%COMP%]{font-size:13px}.mat-calendar-body-label[_ngcontent-%COMP%], .mat-calendar-period-button[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-calendar-table-header[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:11px;font-weight:400}.mat-dialog-title[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content[_ngcontent-%COMP%]{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field[_ngcontent-%COMP%]{font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.34375em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{font-size:150%;line-height:1.125}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]{height:1.5em;width:1.5em}.mat-form-field-prefix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]   .mat-icon-button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{height:1.125em;line-height:1.125}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid transparent}.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34375em) scale(.75);width:133.33333333%}.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.34374em) scale(.75);width:133.33334333%}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-label[_ngcontent-%COMP%]{top:1.34375em}.mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.34375em}.mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{font-size:75%;margin-top:.66666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);-ms-transform:translateY(-1.28125em) scale(.75);width:133.33333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);-ms-transform:translateY(-1.28124em) scale(.75);width:133.33334333%}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);-ms-transform:translateY(-1.28123em) scale(.75);width:133.33335333%}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.28125em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-subscript-wrapper[_ngcontent-%COMP%]{margin-top:.54166667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-form-field-autofill-control[_ngcontent-%COMP%]:-webkit-autofill + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.25em 0 .75em}.mat-form-field-appearance-fill[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.09375em;margin-top:-.5em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-fill.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-.59374em) scale(.75);width:133.33334333%}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:1em 0}.mat-form-field-appearance-outline[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{top:1.84375em;margin-top:-.25em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%], .mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[_ngcontent-%COMP%]:focus + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59375em) scale(.75);width:133.33333333%}.mat-form-field-appearance-outline.mat-form-field-can-float[_ngcontent-%COMP%]   .mat-input-server[label][_ngcontent-%COMP%]:not(:label-shown) + .mat-form-field-label-wrapper[_ngcontent-%COMP%]   .mat-form-field-label[_ngcontent-%COMP%]{transform:translateY(-1.59374em) scale(.75);width:133.33334333%}.mat-grid-tile-footer[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]{font-size:14px}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%], .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-grid-tile-footer[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-grid-tile-header[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}input.mat-input-element[_ngcontent-%COMP%]{margin-top:-.0625em}.mat-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator[_ngcontent-%COMP%], .mat-paginator-page-size[_ngcontent-%COMP%]   .mat-select-trigger[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button[_ngcontent-%COMP%], .mat-select[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger[_ngcontent-%COMP%]{height:1.125em}.mat-slide-toggle-content[_ngcontent-%COMP%], .mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text[_ngcontent-%COMP%]{font-size:12px;font-weight:500}.mat-stepper-horizontal[_ngcontent-%COMP%], .mat-stepper-vertical[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label[_ngcontent-%COMP%]{font-size:14px;font-weight:400}.mat-step-sub-label-error[_ngcontent-%COMP%]{font-weight:400}.mat-step-label-error[_ngcontent-%COMP%]{font-size:14px}.mat-step-label-selected[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-tab-group[_ngcontent-%COMP%], .mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label[_ngcontent-%COMP%], .mat-tab-link[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.mat-toolbar[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%], .mat-toolbar[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-top:6px;padding-bottom:6px}.mat-tooltip-handset[_ngcontent-%COMP%]{font-size:14px;padding-top:8px;padding-bottom:8px}.mat-list-item[_ngcontent-%COMP%], .mat-list-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:16px}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:14px}.mat-list-base[_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-item[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2), .mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]{font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:block;box-sizing:border-box}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-list-option[_ngcontent-%COMP%]   .mat-line[_ngcontent-%COMP%]:nth-child(n+2){font-size:12px}.mat-list-base[dense][_ngcontent-%COMP%]   .mat-subheader[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label[_ngcontent-%COMP%]{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action[_ngcontent-%COMP%]{line-height:1;font-family:inherit;font-size:inherit;font-weight:500}.mat-tree[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node[_ngcontent-%COMP%], .mat-tree-node[_ngcontent-%COMP%]{font-weight:400;font-size:14px}.mat-ripple[_ngcontent-%COMP%]{overflow:hidden;position:relative}.mat-ripple[_ngcontent-%COMP%]:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded[_ngcontent-%COMP%]{overflow:visible}.mat-ripple-element[_ngcontent-%COMP%]{position:absolute;border-radius:50%;pointer-events:none;transition:opacity,transform 0ms cubic-bezier(0,0,.2,1);transform:scale(0)}.cdk-high-contrast-active[_ngcontent-%COMP%]   .mat-ripple-element[_ngcontent-%COMP%]{display:none}.cdk-visually-hidden[_ngcontent-%COMP%]{border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;outline:0;-webkit-appearance:none;-moz-appearance:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-container[_ngcontent-%COMP%]{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container[_ngcontent-%COMP%]{position:fixed;z-index:1000}.cdk-overlay-container[_ngcontent-%COMP%]:empty{display:none}.cdk-global-overlay-wrapper[_ngcontent-%COMP%], .cdk-overlay-pane[_ngcontent-%COMP%]{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane[_ngcontent-%COMP%]{pointer-events:auto;box-sizing:border-box;max-width:100%;max-height:100%}.cdk-overlay-backdrop[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:.6}}.cdk-overlay-dark-backdrop[_ngcontent-%COMP%]{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop[_ngcontent-%COMP%], .cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing[_ngcontent-%COMP%]{opacity:0}.cdk-overlay-connected-position-bounding-box[_ngcontent-%COMP%]{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock[_ngcontent-%COMP%]{position:fixed;width:100%;overflow-y:scroll}@-webkit-keyframes cdk-text-field-autofill-start{\n  }@keyframes cdk-text-field-autofill-start{\n  }@-webkit-keyframes cdk-text-field-autofill-end{\n  }@keyframes cdk-text-field-autofill-end{\n  }.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:-webkit-autofill{-webkit-animation:cdk-text-field-autofill-start 0s 1ms;animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored[_ngcontent-%COMP%]:not(:-webkit-autofill){-webkit-animation:cdk-text-field-autofill-end 0s 1ms;animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize[_ngcontent-%COMP%]{resize:none}textarea.cdk-textarea-autosize-measuring[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:auto!important;overflow:hidden!important}textarea.cdk-textarea-autosize-measuring-firefox[_ngcontent-%COMP%]{padding:2px 0!important;box-sizing:content-box!important;height:0!important}h1[_ngcontent-%COMP%]{margin:0 0 20px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%]{text-transform:uppercase}h2[_ngcontent-%COMP%]{margin:0 0 10px}.group[_ngcontent-%COMP%]{margin:0 0 40px}.icon-form-field[_ngcontent-%COMP%]{position:relative;display:flex;height:65.5px;align-items:center}.icon-form-field[_ngcontent-%COMP%] > i[_ngcontent-%COMP%] + *[_ngcontent-%COMP%]{flex:2 1 auto}i.fas[_ngcontent-%COMP%]{margin-right:8px;font-size:20px}mat-form-field[_ngcontent-%COMP%]{flex:1 0 auto}"],changeDetection:0}),u),data:{title:"routes.settings"}}],w=((v=function t(){_classCallCheck(this,t)}).\u0275mod=r.Mb({type:v}),v.\u0275inj=r.Lb({factory:function(t){return new(t||v)},imports:[[a.k.forChild(y)],a.k]}),v),k=((x=function t(){_classCallCheck(this,t)}).\u0275mod=r.Mb({type:x}),x.\u0275inj=r.Lb({factory:function(t){return new(t||x)},imports:[[o.a,w]]}),x)}}]);
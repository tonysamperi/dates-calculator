function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,a){return t&&_defineProperties(e.prototype,t),a&&_defineProperties(e,a),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{HlaJ:function(e,t,a){"use strict";a.r(t),a.d(t,"SmpLeapYearPageModule",(function(){return k}));var n=a("d2mR"),i=a("tyNb"),r=a("zbGt"),c=a("wd/R"),s=a("fXoL"),o=a("3Pt+"),l=a("kmnG"),p=a("qFsG"),u=a("bTqV"),b=a("ofXK"),m=a("sYmb");function d(e,t){if(1&e&&(s.Ub(0,"div",17),s.Ub(1,"h2",18),s.Ic(2),s.hc(3,"translate"),s.Tb(),s.Ub(4,"p",18),s.Ic(5),s.hc(6,"translate"),s.hc(7,"translate"),s.hc(8,"translate"),s.Tb(),s.Tb()),2&e){var a=s.gc();s.oc("@inOutAnimation",void 0),s.Cb(2),s.Jc(s.ic(3,6,"calculator.result")),s.Cb(3),s.Nc(" ",s.ic(6,8,"leapYear.selectedYear")," ",a.year," ",s.ic(7,10,a.result?"generalDictionary.is":"generalDictionary.isNot")," ",s.ic(8,12,"leapYear.leap")," ")}}function f(e,t){if(1&e&&(s.Ub(0,"li",19),s.Ic(1),s.Tb()),2&e){var a=t.$implicit;s.Fb("smp-bg-background-darkened",t.even),s.Cb(1),s.Kc(" ",a," ")}}var g,h,y,v=[{path:"",component:(g=function(){function e(){_classCallCheck(this,e),this.upcomingLeapYears=this._getUpcomingLeapYears(),this.init()}return _createClass(e,[{key:"init",value:function(){this.result=void 0,this.year=(new Date).getFullYear()}},{key:"outputResult",value:function(){this.result=Object(c.parseZone)([this.year]).isLeapYear()}},{key:"yearChanged",value:function(e){this.result=void 0,this.year=e}},{key:"_getUpcomingLeapYears",value:function(){for(var e=[],t=(new Date).getFullYear();e.length<5;)Object(c.parseZone)([++t]).isLeapYear()&&e.push(t);return e}}]),e}(),g.\u0275fac=function(e){return new(e||g)},g.\u0275cmp=s.Ib({type:g,selectors:[["smp-leap-year"]],decls:26,vars:19,consts:[[1,"container","smp-margin-top-3x"],[1,"row"],[1,"col-12","col-sm-8"],[1,"route-animations-elements","smp-capitalize-first"],[1,"route-animations-elements",3,"innerHTML"],[1,"route-animations-elements"],[1,"d-flex","flex-column","align-items-center","smp-margin-bottom-2x"],["leapYearForm","ngForm"],["for","smp_lpe_year",1,"d-none"],["matInput","","type","number","id","smp_lpe_year","name","smp_lpe_year","pattern","\\d{1,5}","required","",3,"ngModel","placeholder","ngModelChange"],[1,"smp-margin-top-2x"],["mat-button","","mat-raised-button","","color","primary","type","submit",1,"smp-capitalize",3,"disabled","click"],["id","smp_result","class","alert alert-success",4,"ngIf"],[1,"col-12","col-sm-4"],[1,"smp-capitalize-first","route-animations-elements"],[1,"list-group","text-center"],["class","list-group-item route-animations-elements",3,"smp-bg-background-darkened",4,"ngFor","ngForOf"],["id","smp_result",1,"alert","alert-success"],[1,"smp-capitalize-first"],[1,"list-group-item","route-animations-elements"]],template:function(e,t){if(1&e&&(s.Ub(0,"div",0),s.Ub(1,"div",1),s.Ub(2,"div",2),s.Ub(3,"h1",3),s.Ic(4),s.hc(5,"translate"),s.Tb(),s.Pb(6,"p",4),s.hc(7,"translate"),s.Ub(8,"div",5),s.Ub(9,"form",6,7),s.Ub(11,"mat-form-field"),s.Pb(12,"label",8),s.Ub(13,"input",9),s.cc("ngModelChange",(function(e){return t.yearChanged(e)})),s.hc(14,"translate"),s.Tb(),s.Tb(),s.Ub(15,"div",10),s.Ub(16,"button",11),s.cc("click",(function(){return t.outputResult()})),s.Ic(17),s.hc(18,"translate"),s.Tb(),s.Tb(),s.Tb(),s.Gc(19,d,9,14,"div",12),s.Tb(),s.Tb(),s.Ub(20,"div",13),s.Ub(21,"h2",14),s.Ic(22),s.hc(23,"translate"),s.Tb(),s.Ub(24,"ul",15),s.Gc(25,f,2,3,"li",16),s.Tb(),s.Tb(),s.Tb(),s.Tb()),2&e){var a=s.wc(10);s.Cb(4),s.Jc(s.ic(5,9,"leapYear.title")),s.Cb(2),s.oc("innerHTML",s.ic(7,11,"leapYear.intro"),s.Ac),s.Cb(7),s.pc("placeholder",s.ic(14,13,"units.year")),s.oc("ngModel",t.year),s.Cb(3),s.oc("disabled",a.invalid),s.Cb(1),s.Kc(" ",s.ic(18,15,"generalDictionary.check")," "),s.Cb(2),s.oc("ngIf",!0===t.result||!1===t.result),s.Cb(3),s.Jc(s.ic(23,17,"leapYear.upcomingLeapYears")),s.Cb(3),s.oc("ngForOf",t.upcomingLeapYears)}},directives:[o.r,o.k,o.l,l.c,p.b,o.n,o.c,o.o,o.p,o.j,o.m,u.b,b.l,b.k],pipes:[m.c],styles:["ul[_ngcontent-%COMP%]{max-width:400px;margin:0 auto}"],data:{animation:r.f}}),g),data:{title:"routes.leapYear"}}],C=((y=function e(){_classCallCheck(this,e)}).\u0275mod=s.Mb({type:y}),y.\u0275inj=s.Lb({factory:function(e){return new(e||y)},imports:[[i.k.forChild(v)],i.k]}),y),k=((h=function e(){_classCallCheck(this,e)}).\u0275mod=s.Mb({type:h}),h.\u0275inj=s.Lb({factory:function(e){return new(e||h)},imports:[[n.a,C]]}),h)}}]);
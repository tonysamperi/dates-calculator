(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"76iM":function(a,t,e){"use strict";e.r(t),e.d(t,"SmpTabsPageModule",(function(){return h}));var n=e("d2mR"),i=e("tyNb"),l=e("zbGt"),r=e("6NwN"),o=e("fXoL"),c=e("wZkO"),s=e("ofXK"),d=e("sYmb");function u(a,t){if(1&a&&(o.Ub(0,"a",4,5),o.Ic(2),o.hc(3,"translate"),o.Tb()),2&a){const a=t.$implicit,e=o.wc(1);o.oc("routerLink",a.path)("active",e.isActive),o.Cb(2),o.Kc(" ",o.ic(3,3,a.label)," ")}}const b=[{path:"",component:(()=>{class a{constructor(){this.navLinks=[{label:"tabs.add",path:r.a.add},{label:"tabs.range",path:r.a.range},{label:"tabs.birthday",path:r.a.birthday},{label:"tabs.leapYear",path:r.a.leapYear}]}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=o.Ib({type:a,selectors:[["smp-tabs"]],decls:5,vars:2,consts:[["mat-tab-nav-bar",""],["mat-tab-link","","class","smp-capitalize","routerLinkActive","",3,"routerLink","active",4,"ngFor","ngForOf"],[1,"content"],["o","outlet"],["mat-tab-link","","routerLinkActive","",1,"smp-capitalize",3,"routerLink","active"],["rla","routerLinkActive"]],template:function(a,t){if(1&a&&(o.Ub(0,"nav",0),o.Gc(1,u,4,5,"a",1),o.Tb(),o.Ub(2,"div",2),o.Pb(3,"router-outlet",null,3),o.Tb()),2&a){const a=o.wc(4);o.Cb(1),o.oc("ngForOf",t.navLinks),o.Cb(1),o.oc("@smpRouteAnimations",a.isActivated&&a.activatedRoute.routeConfig.data&&a.activatedRoute.routeConfig.data.title)}},directives:[c.b,s.k,i.l,i.j,c.a,i.i],pipes:[d.c],styles:[""],data:{animation:[l.h]}}),a})(),data:{title:"Calculator Tabs"},children:[{path:r.a.add,loadChildren:()=>Promise.all([e.e(0),e.e(18)]).then(e.bind(null,"ISv1")).then(a=>a.SmpCalculatorAddModule)},{path:r.a.range,loadChildren:()=>Promise.all([e.e(0),e.e(19)]).then(e.bind(null,"tNk0")).then(a=>a.SmpCalculatorRangeModule)},{path:r.a.birthday,loadChildren:()=>Promise.all([e.e(0),e.e(17)]).then(e.bind(null,"jSCx")).then(a=>a.SmpBirthdayPageModule)},{path:r.a.leapYear,loadChildren:()=>e.e(20).then(e.bind(null,"HlaJ")).then(a=>a.SmpLeapYearPageModule)},{path:"",redirectTo:`/${r.a.calculator}/${r.a.add}`,pathMatch:"full"}]}];let p=(()=>{class a{}return a.\u0275mod=o.Mb({type:a}),a.\u0275inj=o.Lb({factory:function(t){return new(t||a)},imports:[[i.k.forChild(b)],i.k]}),a})(),h=(()=>{class a{}return a.\u0275mod=o.Mb({type:a}),a.\u0275inj=o.Lb({factory:function(t){return new(t||a)},imports:[[n.a,p]]}),a})()}}]);
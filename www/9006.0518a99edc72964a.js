"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9006],{9006:(U,p,l)=>{l.r(p),l.d(p,{ChargingSessionPageModule:()=>E});var d=l(177),v=l(9417),o=l(9465),m=l(7625),c=l(467),S=l(6944),C=l(6539),h=l(9136),P=l(2678),_=l(3588),f=l(8833),n=l(4438),R=l(9777),F=l(4842);const I=s=>({$implicit:s});function M(s,g){1&s&&(n.j41(0,"div",14),n.nrm(1,"img",15),n.j41(2,"div",16),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&s&&(n.R7$(3),n.JRh(n.bMT(4,1,"NoChargingSession")))}function j(s,g){if(1&s&&(n.qex(0),n.j41(1,"div",17),n.eu8(2,18),n.k0s(),n.bVm()),2&s){const r=g.$implicit;n.XpG();const t=n.sdS(35);n.R7$(2),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(2,I,r))}}function T(s,g){if(1&s){const r=n.RV6();n.j41(0,"ion-infinite-scroll",19),n.bIt("ionInfinite",function(i){n.eBV(r);const e=n.XpG();return n.Njj(e.onIonInfinite(i))}),n.nrm(1,"ion-infinite-scroll-content"),n.k0s()}}function V(s,g){if(1&s){const r=n.RV6();n.j41(0,"div",20),n.bIt("click",function(i){const e=n.eBV(r).$implicit,a=n.XpG();return n.Njj(a.openDetail(i,e))}),n.j41(1,"div",21)(2,"div",22)(3,"h6",23)(4,"b"),n.EFF(5),n.k0s()(),n.j41(6,"div")(7,"small",24),n.EFF(8),n.k0s()()(),n.j41(9,"div")(10,"ion-chip",25),n.EFF(11),n.k0s()()(),n.j41(12,"div",26)(13,"div",27)(14,"div",28)(15,"small"),n.EFF(16),n.nI1(17,"translate"),n.k0s()(),n.j41(18,"div",29)(19,"ion-chip",30),n.nrm(20,"ion-icon",31),n.k0s(),n.j41(21,"strong",24),n.EFF(22),n.k0s()()(),n.j41(23,"div",27)(24,"div",28)(25,"small"),n.EFF(26),n.nI1(27,"translate"),n.k0s()(),n.j41(28,"div",29)(29,"ion-chip",30),n.nrm(30,"ion-icon",32),n.k0s(),n.j41(31,"strong",24),n.EFF(32),n.k0s()()(),n.j41(33,"div",27)(34,"div",28)(35,"small"),n.EFF(36,"% PIN"),n.k0s()(),n.j41(37,"div",29)(38,"ion-chip",30),n.nrm(39,"ion-icon",33),n.k0s(),n.j41(40,"strong",24),n.EFF(41),n.k0s()()(),n.j41(42,"div",27)(43,"div",28)(44,"small"),n.EFF(45),n.nI1(46,"translate"),n.k0s()(),n.j41(47,"div",29)(48,"ion-chip",30),n.nrm(49,"ion-icon",34),n.k0s(),n.j41(50,"strong",24),n.EFF(51),n.nI1(52,"translate"),n.k0s()()()()()}if(2&s){let r,t,i;const e=g.$implicit,a=n.XpG();n.R7$(5),n.Lme("",e.ServiceName," (",e.CustomerFullName,")"),n.R7$(3),n.JRh(a.APP_FUNC_FormatDate(e.CreatedDate)),n.R7$(2),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(e.VSessionStatus)),n.R7$(),n.JRh(e.VSessionStatusName),n.R7$(5),n.JRh(n.bMT(17,19,"ElectricUsed")),n.R7$(3),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(e.VSessionStatus)),n.R7$(3),n.Lme("",a.APP_FUNC_RoundNumber(null!==(r=e.ElectricUsed)&&void 0!==r?r:0),"",null!==(r=e.Unit)&&void 0!==r?r:"kWh",""),n.R7$(4),n.JRh(n.bMT(27,21,"ChargingPackage")),n.R7$(3),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(e.VSessionStatus)),n.R7$(3),n.Lme("",null!==(t=e.MaxElectricUsed)&&void 0!==t?t:0,"",null!==(t=e.Unit)&&void 0!==t?t:"kWh",""),n.R7$(6),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(e.VSessionStatus)),n.R7$(3),n.SpI("",null!==(i=e.BatteryPercent)&&void 0!==i?i:0," %"),n.R7$(4),n.JRh(n.bMT(46,23,"Time")),n.R7$(3),n.Y8G("color",a.APP_FUNC_GetColor_VSessionStatus(e.VSessionStatus)),n.R7$(3),n.Lme("",a.getTimeCharging(e.ChargingStart,e.ChargingEnd)," ",n.bMT(52,25,"Minute"),"")}}const $=[{path:"",component:(()=>{var s;class g{constructor(t,i,e,a,u){this.router=t,this.activatedRoute=i,this.modalController=e,this.toastController=a,this.loadingController=u,this.APP_ROUTE=f._,this.APP_FUNC_FormatDate=h.Rv,this.APP_FUNC_DivDateTime=h.Wv,this.APP_FUNC_RoundNumber=h.Rw,this.APP_FUNC_GetColor_VSessionStatus=h.kH,this.v_session_status=_.jT,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.dataForm={},this.chargingSessions=[],this.limitLoad=0}ngOnInit(){var t=this;this.IsOnInit=!0;let i=this.activatedRoute.snapshot.queryParamMap.get("vss")||"";i&&(this.filter.VSessionStatus=parseInt(i)||void 0);let e=this.activatedRoute.snapshot.queryParamMap.get("vssm")||"";e&&(this.filter.VSessionStatusMulti=e||void 0),(0,c.A)(function*(){(yield(0,C.kU)())&&t.refreshData()})()}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(t){this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.chargingSessions.length=0),this.chargingSessions=this.chargingSessions.concat(t)}refreshData(t){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(t)}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,i){this.paging.sortfield=t||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{vss:this.filter.VSessionStatus,vssm:this.filter.VSessionStatusMulti},queryParamsHandling:"merge",replaceUrl:!0}),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var i=this;return(0,c.A)(function*(){if(i.limitLoad>0)return void(t&&t());i.limitLoad=300;let e=setInterval(()=>{i.limitLoad-=100,i.limitLoad<=0&&(clearInterval(e),i.loadData_Paging(t))},100)})()}loadData_Paging(t){var i=this;return(0,c.A)(function*(){i.paging.loading=!0,(0,S.UV)({loadingController:i.loadingController,params:{VSessionStatus:i.filter.VSessionStatus,VSessionStatusMulti:i.filter.VSessionStatusMulti,PageNumber:i.paging.page,PageSize:i.paging.limit},callback:e=>{var a;i.response=e,null!=e&&e.Succeeded?i.pushData(null!==(a=e.Data)&&void 0!==a?a:[]):(0,P.cX)(i.toastController,{},e).then(u=>u.present()),i.paging.loading=!1,i.paging.active=!(null==e||!e.HasNextPage),t&&t()}})})()}filterDate(t){var i=this;return(0,c.A)(function*(){i.dataForm.filterDate=t})()}changeVSessionStatus(t){this.filter.VSessionStatus=t.detail.value||void 0,this.filterChange()}changeVSessionStatusMulti(t){this.filter.VSessionStatusMulti=t.detail.value||void 0,this.filterChange()}getTimeCharging(t,i){return(0,h.Wv)(t,t?null!=i?i:new Date:null)}openDetail(t,i){var e=this;return(0,c.A)(function*(){var a,u;e.router.navigateByUrl(f._.CHARGING_SESSION_DETAIL.replace(":id",null!==(a=null===(u=i.ChargeSessionId)||void 0===u?void 0:u.toString())&&void 0!==a?a:""))})()}}return(s=g).\u0275fac=function(t){return new(t||s)(n.rXU(m.Ix),n.rXU(m.nX),n.rXU(o.W3),n.rXU(o.K_),n.rXU(o.Xi))},s.\u0275cmp=n.VBU({type:s,selectors:[["app-charging-session"]],decls:36,vars:28,consts:[["templateChargingSession",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],[3,"fullscreen"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container","pt-3","pb-4"],[1,"row"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"ionInfinite"],[1,"card-day","rounded","bg-white","p-3","cursor-pointer",3,"click"],[1,"d-flex","align-items-start"],[1,"flex-grow-1"],[1,"my-0"],[1,"text-muted"],[1,"no-opacity","text-nowrap",3,"color"],[1,"row","mt-3"],[1,"col-6","mb-2"],[1,"mb-1"],[1,"d-flex","align-items-center"],[1,"ion-chip-icon",3,"color"],["src","../../../assets/icon/ion-icon/electric-2.svg"],["src","../../../assets/icon/ion-icon/changing-package-2.svg"],["src","../../../assets/icon/ion-icon/battery-3.svg"],["src","../../../assets/icon/ion-icon/time-2.svg"]],template:function(t,i){if(1&t){const e=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),n.nrm(3,"ion-back-button",2),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content",3)(8,"ion-refresher",4),n.bIt("ionRefresh",function(u){return n.eBV(e),n.Njj(i.onIonRefresher(u))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.j41(10,"div",5)(11,"ion-segment",6),n.bIt("ionChange",function(u){return n.eBV(e),n.Njj(i.changeVSessionStatusMulti(u))}),n.j41(12,"ion-segment-button",7)(13,"ion-label"),n.EFF(14),n.nI1(15,"translate"),n.k0s()(),n.j41(16,"ion-segment-button",8)(17,"ion-label"),n.EFF(18),n.nI1(19,"translate"),n.k0s()(),n.j41(20,"ion-segment-button",8)(21,"ion-label"),n.EFF(22),n.nI1(23,"translate"),n.k0s()(),n.j41(24,"ion-segment-button",8)(25,"ion-label"),n.EFF(26),n.nI1(27,"translate"),n.k0s()()()(),n.DNE(28,M,5,3,"div",9),n.j41(29,"div",10)(30,"div",11),n.DNE(31,j,3,4,"ng-container",12),n.k0s()(),n.DNE(32,T,2,0,"ion-infinite-scroll",13),n.k0s(),n.nrm(33,"app-footer-tabs"),n.DNE(34,V,53,27,"ng-template",null,0,n.C5r)}if(2&t){let e;n.R7$(3),n.Y8G("defaultHref",i.APP_ROUTE.DEFAULT),n.R7$(2),n.JRh(n.bMT(6,18,"ChargingSessionHistory")),n.R7$(2),n.Y8G("fullscreen",!0),n.R7$(4),n.Y8G("value",null!==(e=i.filter.VSessionStatusMulti)&&void 0!==e?e:""),n.R7$(3),n.JRh(n.bMT(15,20,"All")),n.R7$(2),n.FS9("value",i.v_session_status.DangSac),n.R7$(2),n.JRh(n.bMT(19,22,"Charging")),n.R7$(2),n.FCK("value","",i.v_session_status.DaSac,",",i.v_session_status.HoanTat,""),n.R7$(2),n.JRh(n.bMT(23,24,"Completed")),n.R7$(2),n.FCK("value","",i.v_session_status.HuyPhienSac,",",i.v_session_status.Loi,""),n.R7$(2),n.JRh(n.bMT(27,26,"Error")),n.R7$(2),n.Y8G("ngIf",i.response&&!i.chargingSessions.length),n.R7$(3),n.Y8G("ngForOf",i.chargingSessions),n.R7$(),n.Y8G("ngIf",i.paging.active)}},dependencies:[d.Sq,d.bT,d.T3,o.QW,o.ZB,o.W9,o.eU,o.iq,o.Ax,o.Hp,o.he,o.To,o.Ki,o.Gp,o.eP,o.BC,o.ai,o.Je,o.el,R.x,F.D9],styles:[".card-day.rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem;margin-right:.25rem}.filter[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--padding-start: 1rem;--padding-end: 1rem;margin:.75rem .5rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.2rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ion-chip-icon[_ngcontent-%COMP%]{margin:0 .5rem 0 0;padding:.25rem}.ion-chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}"]}),g})()}];let D=(()=>{var s;class g{}return(s=g).\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[m.iI.forChild($),m.iI]}),g})();var N=l(3664);let E=(()=>{var s;class g{}return(s=g).\u0275fac=function(t){return new(t||s)},s.\u0275mod=n.$C({type:s}),s.\u0275inj=n.G2t({imports:[d.MD,v.YN,o.bv,D,N.x]}),g})()}}]);
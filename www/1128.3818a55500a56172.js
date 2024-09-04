"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1128],{5454:(N,k,c)=>{c.d(k,{K5:()=>F,X1:()=>u,c5:()=>P,cj:()=>M,fy:()=>T,ke:()=>A,nY:()=>q,nj:()=>j,wP:()=>E});var m=c(467),p=c(5972);const u=function(){var g=(0,m.A)(function*(e){var t,n,a,s,f,h,C,b,D,$,I;e.params=e.params||{},(0,p.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(t=e.params.ServiceId)&&void 0!==t?t:null,ChargePackageId:null!==(n=e.params.ChargePackageId)&&void 0!==n?n:null,RequestAddress:null!==(a=e.params.RequestAddress)&&void 0!==a?a:null,RequestLat:null!==(s=e.params.RequestLat)&&void 0!==s?s:null,RequestLong:null!==(f=e.params.RequestLong)&&void 0!==f?f:null,DestAddress:null!==(h=e.params.DestAddress)&&void 0!==h?h:null,DestLat:null!==(C=e.params.DestLat)&&void 0!==C?C:null,DestLong:null!==(b=e.params.DestLong)&&void 0!==b?b:null,ExecutionDateAsString:null!==(D=e.params.ExecutionDate)&&void 0!==D?D:null,ExecutionTimeAsString:null!==($=e.params.ExecutionTime)&&void 0!==$?$:null,Notes:null!==(I=e.params.Notes)&&void 0!==I?I:null},success:_=>{"function"==typeof e.callback&&e.callback(_.data||null)},error:_=>{var y;"function"==typeof e.callback&&e.callback(null==_||null===(y=_.response)||void 0===y?void 0:y.data),console.error(_)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),q=function(){var g=(0,m.A)(function*(e){var t,n;e.params=e.params||{},(0,p.Ll)({url:"api/RequestService/cancel",params:{RequestServiceId:null!==(t=e.params.RequestServiceId)&&void 0!==t?t:null,CancelReason:null!==(n=e.params.CancelReason)&&void 0!==n?n:null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),T=function(){var g=(0,m.A)(function*(e){var t,n,a,s;e.params=e.params||{},(0,p.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(t=e.params.VRequestStatus)&&void 0!==t?t:null,VRequestStatusMulti:null!==(n=e.params.VRequestStatusMulti)&&void 0!==n?n:null,PageNumber:null!==(a=e.params.PageNumber)&&void 0!==a?a:1,PageSize:null!==(s=e.params.PageSize)&&void 0!==s?s:10},success:f=>{"function"==typeof e.callback&&e.callback(f.data||null)},error:f=>{var h;"function"==typeof e.callback&&e.callback(null==f||null===(h=f.response)||void 0===h?void 0:h.data),console.error(f)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),F=function(){var g=(0,m.A)(function*(e){var t;e.params=e.params||{},(0,p.hm)({url:`api/RequestService/get-detail/${e.params.RequestServiceId}`,params:{RequestServiceId:null!==(t=e.params.RequestServiceId)&&void 0!==t?t:null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var a;"function"==typeof e.callback&&e.callback(null==n||null===(a=n.response)||void 0===a?void 0:a.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),M=function(){var g=(0,m.A)(function*(e){var t,n;e.params=e.params||{},(0,p.hm)({url:"api/RequestService/get-requesting",params:{PageNumber:null!==(t=e.params.PageNumber)&&void 0!==t?t:1,PageSize:null!==(n=e.params.PageSize)&&void 0!==n?n:10},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),A=function(){var g=(0,m.A)(function*(e){var t,n;e.params=e.params||{},(0,p.hm)({url:"api/RequestService/get-waitconfirm",params:{PageNumber:null!==(t=e.params.PageNumber)&&void 0!==t?t:1,PageSize:null!==(n=e.params.PageSize)&&void 0!==n?n:10},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),P=function(){var g=(0,m.A)(function*(e){var t;e.params=e.params||{},(0,p.Ll)({url:"api/RequestService/wait-confirm",params:{RequestServiceId:null!==(t=e.params.RequestServiceId)&&void 0!==t?t:null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var a;"function"==typeof e.callback&&e.callback(null==n||null===(a=n.response)||void 0===a?void 0:a.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),E=function(){var g=(0,m.A)(function*(e){var t,n;e.params=e.params||{},(0,p.Ll)({url:"api/RequestService/assign",params:{RequestServiceId:null!==(t=e.params.RequestServiceId)&&void 0!==t?t:null,StaffUserId:null!==(n=e.params.StaffUserId)&&void 0!==n?n:null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}(),j=function(){var g=(0,m.A)(function*(e){var t,n;e.params=e.params||{},(0,p.Ll)({url:"api/RequestService/decline",params:{RequestServiceId:null!==(t=e.params.RequestServiceId)&&void 0!==t?t:null,Reason:null!==(n=e.params.Reason)&&void 0!==n?n:null},success:a=>{"function"==typeof e.callback&&e.callback(a.data||null)},error:a=>{var s;"function"==typeof e.callback&&e.callback(null==a||null===(s=a.response)||void 0===s?void 0:s.data),console.error(a)},loading:e.loading,loadingController:e.loadingController})});return function(t){return g.apply(this,arguments)}}()},1128:(N,k,c)=>{c.r(k),c.d(k,{RequestServicePageModule:()=>y});var m=c(177),p=c(9417),u=c(9465),q=c(7625),T=c(467),F=c(5312),M=c(5454),A=c(6539),P=c(8517),E=c(2021),j=c(3588),g=c(8833),e=c(4438),t=c(3656),n=c(4842);const a=r=>({$implicit:r});function s(r,v){if(1&r&&(e.qex(0),e.j41(1,"div",12),e.eu8(2,13),e.k0s(),e.bVm()),2&r){const d=v.$implicit;e.XpG(2);const l=e.sdS(32);e.R7$(2),e.Y8G("ngTemplateOutlet",l)("ngTemplateOutletContext",e.eq3(2,a,d))}}function f(r,v){if(1&r&&(e.j41(0,"div",8)(1,"div",10),e.DNE(2,s,3,4,"ng-container",11),e.k0s()()),2&r){const d=e.XpG();e.R7$(2),e.Y8G("ngForOf",d.requestServices)}}function h(r,v){1&r&&(e.j41(0,"div",14),e.nrm(1,"img",15),e.j41(2,"div",16),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function C(r,v){if(1&r){const d=e.RV6();e.j41(0,"ion-infinite-scroll",17),e.bIt("ionInfinite",function(i){e.eBV(d);const o=e.XpG();return e.Njj(o.onIonInfinite(i))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}function b(r,v){if(1&r){const d=e.RV6();e.j41(0,"div",18),e.bIt("click",function(){let i;const o=e.eBV(d).$implicit,R=e.XpG();return e.Njj(R.navigateByUrl(R.APP_ROUTE.REQUEST_SERVICE_DETAIL.replace(":id",null!==(i=null==o.RequestServiceId?null:o.RequestServiceId.toString())&&void 0!==i?i:"")))}),e.j41(1,"div",19)(2,"b"),e.EFF(3),e.k0s(),e.j41(4,"ion-chip")(5,"ion-label"),e.EFF(6),e.k0s()()(),e.j41(7,"div",20)(8,"small",21),e.EFF(9),e.k0s(),e.j41(10,"ion-text",22)(11,"small")(12,"b"),e.EFF(13),e.k0s()()()()()}if(2&r){let d;const l=v.$implicit,i=e.XpG();e.R7$(3),e.JRh(l.ServiceName),e.R7$(3),e.SpI("",i.APP_FUNC_FormatMoney(null!==(d=l.PayValue)&&void 0!==d?d:0),"\u0111"),e.R7$(3),e.JRh(i.APP_FUNC_FormatDate(l.RequestDate)),e.R7$(),e.Y8G("color",i.APP_FUNC_GetColor_VRequestStatus(l.VRequestStatus)),e.R7$(3),e.JRh(l.VRequestStatusName)}}const $=[{path:"",component:(()=>{var r;class v{constructor(l,i,o,R,S,V){this.router=l,this.platform=i,this.modalController=o,this.animationController=R,this.toastController=S,this.loadingController=V,this.APP_ROUTE=g._,this.APP_FUNC_FormatMoney=P.xi,this.APP_FUNC_FormatDate=P.Rv,this.APP_FUNC_GetColor_VRequestStatus=P.rZ,this.v_request_status=j.Gz,this.readfile_url=F.c.readfile_url,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.requestServices=[]}ngOnInit(){this.IsOnInit=!0,(0,A.kU)().then(l=>{l&&this.refreshData()})}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(l){this.filter={},this.refreshData(()=>{l.target.complete()})}onIonInfinite(l){this.loadMore(()=>{l.target.complete()})}onIonSegmentChange(l){this.filter.VRequestStatusMulti=l.detail.value,this.filterChange()}pushData(l){1==this.paging.page&&(this.requestServices.length=0),this.requestServices=this.requestServices.concat(l)}refreshData(l){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging(l)}loadMore(l){this.paging.page+=1,this.loadData_Paging(l)}searchChange(l){this.filter.search=l.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}sortChange(l,i){this.paging.sortfield=l||null,this.paging.sorttype=i||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging()}loadData_Paging(l){var i=this;return(0,T.A)(function*(){i.paging.loading=!0,(0,M.fy)({loadingController:i.loadingController,params:{VRequestStatusMulti:i.filter.VRequestStatusMulti,PageNumber:i.paging.page,PageSize:i.paging.limit},callback:o=>{var R;i.response=o,null!=o&&o.Succeeded?i.pushData(null!==(R=o.Data)&&void 0!==R?R:[]):(0,E.cX)(i.toastController,{},o).then(S=>S.present()),i.paging.loading=!1,i.paging.active=!(null==o||!o.HasNextPage),l&&l()}})})()}navigateByUrl(l){this.router.navigateByUrl(l)}}return(r=v).\u0275fac=function(l){return new(l||r)(e.rXU(q.Ix),e.rXU(t.OD),e.rXU(u.W3),e.rXU(u.Hx),e.rXU(u.K_),e.rXU(u.Xi))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-request-service"]],decls:33,vars:28,consts:[["templateRequestService",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"container","px-0"],["mode","md",3,"ionChange","value"],["value",""],[3,"value"],[1,"container","pt-3","pb-4"],[3,"ionInfinite",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-12","col-lg-6","mb-3"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[3,"ionInfinite"],[1,"card-order","cursor-pointer",3,"click"],[1,"d-flex","align-items-start","justify-content-between"],[1,"d-flex","align-items-end","justify-content-between","mt-2"],[1,"text-muted"],[3,"color"]],template:function(l,i){if(1&l){const o=e.RV6();e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.j41(7,"ion-content")(8,"ion-refresher",3),e.bIt("ionRefresh",function(S){return e.eBV(o),e.Njj(i.onIonRefresher(S))}),e.nrm(9,"ion-refresher-content"),e.k0s(),e.j41(10,"div",4)(11,"ion-segment",5),e.bIt("ionChange",function(S){return e.eBV(o),e.Njj(i.onIonSegmentChange(S))}),e.j41(12,"ion-segment-button",6)(13,"ion-label"),e.EFF(14),e.nI1(15,"translate"),e.k0s()(),e.j41(16,"ion-segment-button",7)(17,"ion-label"),e.EFF(18),e.nI1(19,"translate"),e.k0s()(),e.j41(20,"ion-segment-button",7)(21,"ion-label"),e.EFF(22),e.nI1(23,"translate"),e.k0s()(),e.j41(24,"ion-segment-button",7)(25,"ion-label"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()(),e.DNE(28,f,3,1,"div",8)(29,h,5,3)(30,C,2,0,"ion-infinite-scroll",9),e.k0s(),e.DNE(31,b,14,5,"ng-template",null,0,e.C5r)}if(2&l){let o;e.R7$(3),e.Y8G("defaultHref",i.APP_ROUTE.TABS_DEFAULT),e.R7$(2),e.JRh(e.bMT(6,18,"ServiceHistory")),e.R7$(6),e.Y8G("value",null!==(o=i.filter.VRequestStatusMulti)&&void 0!==o?o:""),e.R7$(3),e.JRh(e.bMT(15,20,"All")),e.R7$(2),e.yjJ("value","",i.v_request_status.YeuCauDichVu,",",i.v_request_status.NhanVienDangDiDen,",",i.v_request_status.DangPhucVu,""),e.R7$(2),e.JRh(e.bMT(19,22,"Processing")),e.R7$(2),e.FS9("value",i.v_request_status.HoanTat),e.R7$(2),e.JRh(e.bMT(23,24,"Completed")),e.R7$(2),e.yjJ("value","",i.v_request_status.KhachHangHuy,",",i.v_request_status.TuChoiPhucVu,",",i.v_request_status.Loi,""),e.R7$(2),e.JRh(e.bMT(27,26,"Error")),e.R7$(2),e.vxM(28,i.requestServices.length?28:i.response?29:-1),e.R7$(2),e.Y8G("ngIf",i.paging.active)}},dependencies:[m.Sq,m.bT,m.T3,u.QW,u.ZB,u.W9,u.eU,u.Ax,u.Hp,u.he,u.To,u.Ki,u.Gp,u.eP,u.IO,u.BC,u.ai,u.Je,u.el,n.D9],styles:[".card-order[_ngcontent-%COMP%]{padding:1rem;border-radius:1rem;background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]{min-height:1.25rem;padding-top:.25rem;padding-bottom:.25rem;background:transparent}.card-order[_ngcontent-%COMP%]   ion-chip[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:1.25rem;height:1.25rem;line-height:0;border:1px solid var(--ion-color-medium-tint)}"]}),v})()}];let I=(()=>{var r;class v{}return(r=v).\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[q.iI.forChild($),q.iI]}),v})();var _=c(3890);let y=(()=>{var r;class v{}return(r=v).\u0275fac=function(l){return new(l||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[m.MD,p.YN,u.bv,I,_.x]}),v})()}}]);
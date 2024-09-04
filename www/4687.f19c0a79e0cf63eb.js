"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4687],{5454:(z,x,s)=>{s.d(x,{K5:()=>T,X1:()=>c,c5:()=>$,cj:()=>L,fy:()=>b,ke:()=>I,nY:()=>E,nj:()=>C,wP:()=>U});var h=s(467),S=s(5972);const c=function(){var d=(0,h.A)(function*(t){var l,e,n,u,f,P,D,A,k,F,M;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(l=t.params.ServiceId)&&void 0!==l?l:null,ChargePackageId:null!==(e=t.params.ChargePackageId)&&void 0!==e?e:null,RequestAddress:null!==(n=t.params.RequestAddress)&&void 0!==n?n:null,RequestLat:null!==(u=t.params.RequestLat)&&void 0!==u?u:null,RequestLong:null!==(f=t.params.RequestLong)&&void 0!==f?f:null,DestAddress:null!==(P=t.params.DestAddress)&&void 0!==P?P:null,DestLat:null!==(D=t.params.DestLat)&&void 0!==D?D:null,DestLong:null!==(A=t.params.DestLong)&&void 0!==A?A:null,ExecutionDateAsString:null!==(k=t.params.ExecutionDate)&&void 0!==k?k:null,ExecutionTimeAsString:null!==(F=t.params.ExecutionTime)&&void 0!==F?F:null,Notes:null!==(M=t.params.Notes)&&void 0!==M?M:null},success:y=>{"function"==typeof t.callback&&t.callback(y.data||null)},error:y=>{var r;"function"==typeof t.callback&&t.callback(null==y||null===(r=y.response)||void 0===r?void 0:r.data),console.error(y)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),E=function(){var d=(0,h.A)(function*(t){var l,e;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/cancel",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null,CancelReason:null!==(e=t.params.CancelReason)&&void 0!==e?e:null},success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{var u;"function"==typeof t.callback&&t.callback(null==n||null===(u=n.response)||void 0===u?void 0:u.data),console.error(n)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),b=function(){var d=(0,h.A)(function*(t){var l,e,n,u;t.params=t.params||{},(0,S.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(l=t.params.VRequestStatus)&&void 0!==l?l:null,VRequestStatusMulti:null!==(e=t.params.VRequestStatusMulti)&&void 0!==e?e:null,PageNumber:null!==(n=t.params.PageNumber)&&void 0!==n?n:1,PageSize:null!==(u=t.params.PageSize)&&void 0!==u?u:10},success:f=>{"function"==typeof t.callback&&t.callback(f.data||null)},error:f=>{var P;"function"==typeof t.callback&&t.callback(null==f||null===(P=f.response)||void 0===P?void 0:P.data),console.error(f)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),T=function(){var d=(0,h.A)(function*(t){var l;t.params=t.params||{},(0,S.hm)({url:`api/RequestService/get-detail/${t.params.RequestServiceId}`,params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null},success:e=>{"function"==typeof t.callback&&t.callback(e.data||null)},error:e=>{var n;"function"==typeof t.callback&&t.callback(null==e||null===(n=e.response)||void 0===n?void 0:n.data),console.error(e)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),L=function(){var d=(0,h.A)(function*(t){var l,e;t.params=t.params||{},(0,S.hm)({url:"api/RequestService/get-requesting",params:{PageNumber:null!==(l=t.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(e=t.params.PageSize)&&void 0!==e?e:10},success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{var u;"function"==typeof t.callback&&t.callback(null==n||null===(u=n.response)||void 0===u?void 0:u.data),console.error(n)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),I=function(){var d=(0,h.A)(function*(t){var l,e;t.params=t.params||{},(0,S.hm)({url:"api/RequestService/get-waitconfirm",params:{PageNumber:null!==(l=t.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(e=t.params.PageSize)&&void 0!==e?e:10},success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{var u;"function"==typeof t.callback&&t.callback(null==n||null===(u=n.response)||void 0===u?void 0:u.data),console.error(n)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),$=function(){var d=(0,h.A)(function*(t){var l;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/wait-confirm",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null},success:e=>{"function"==typeof t.callback&&t.callback(e.data||null)},error:e=>{var n;"function"==typeof t.callback&&t.callback(null==e||null===(n=e.response)||void 0===n?void 0:n.data),console.error(e)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),U=function(){var d=(0,h.A)(function*(t){var l,e;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/assign",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null,StaffUserId:null!==(e=t.params.StaffUserId)&&void 0!==e?e:null},success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{var u;"function"==typeof t.callback&&t.callback(null==n||null===(u=n.response)||void 0===u?void 0:u.data),console.error(n)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}(),C=function(){var d=(0,h.A)(function*(t){var l,e;t.params=t.params||{},(0,S.Ll)({url:"api/RequestService/decline",params:{RequestServiceId:null!==(l=t.params.RequestServiceId)&&void 0!==l?l:null,Reason:null!==(e=t.params.Reason)&&void 0!==e?e:null},success:n=>{"function"==typeof t.callback&&t.callback(n.data||null)},error:n=>{var u;"function"==typeof t.callback&&t.callback(null==n||null===(u=n.response)||void 0===u?void 0:u.data),console.error(n)},loading:t.loading,loadingController:t.loadingController})});return function(l){return d.apply(this,arguments)}}()},4687:(z,x,s)=>{s.r(x),s.d(x,{RequestServiceDetailPageModule:()=>y});var h=s(177),S=s(9417),c=s(9465),E=s(7625),b=s(467),T=s(7762),L=s(5312),I=s(3801),$=s(5454),U=s(6539),C=s(8517),d=s(2021),t=s(3588),l=s(8833),e=s(4438),n=s(4842);function u(r,R){1&r&&(e.j41(0,"div",17)(1,"div",40)(2,"div",41),e.nrm(3,"div",42),e.k0s()()())}function f(r,R){if(1&r){const g=e.RV6();e.j41(0,"div",43),e.nrm(1,"ion-spinner",44),e.j41(2,"ion-label",45),e.EFF(3,"\u0110ang t\xecm nh\xe2n vi\xean ti\u1ebfp nh\u1eadn d\u1ecbch v\u1ee5 ..."),e.k0s()(),e.j41(4,"ion-button",46),e.bIt("click",function(){e.eBV(g);const o=e.XpG(2);return e.Njj(o.cancelService())}),e.j41(5,"ion-label"),e.EFF(6),e.nI1(7,"translate"),e.k0s()()}2&r&&(e.R7$(6),e.JRh(e.bMT(7,1,"CancelService")))}function P(r,R){1&r&&(e.j41(0,"ion-button",47)(1,"ion-label"),e.EFF(2),e.nI1(3,"translate"),e.k0s()()),2&r&&(e.R7$(2),e.JRh(e.bMT(3,1,"GoToChargingSession")))}function D(r,R){if(1&r){const g=e.RV6();e.j41(0,"ion-content")(1,"ion-refresher",3),e.bIt("ionRefresh",function(o){e.eBV(g);const v=e.XpG();return e.Njj(v.onIonRefresher(o))}),e.nrm(2,"ion-refresher-content"),e.k0s(),e.j41(3,"div",4)(4,"div",5)(5,"div",6)(6,"div",7)(7,"h4",8)(8,"span"),e.EFF(9),e.k0s()(),e.j41(10,"div",9)(11,"small"),e.EFF(12),e.k0s()(),e.nrm(13,"hr",10),e.j41(14,"div",11)(15,"span",12)(16,"small"),e.EFF(17),e.nI1(18,"translate"),e.j41(19,"b"),e.EFF(20),e.k0s()()(),e.j41(21,"span",13)(22,"small"),e.EFF(23),e.nI1(24,"translate"),e.j41(25,"b"),e.EFF(26),e.nI1(27,"translate"),e.k0s()()()()(),e.nrm(28,"div",14),e.k0s()()(),e.j41(29,"div",15)(30,"div",16),e.DNE(31,u,4,0,"div",17),e.j41(32,"div",18)(33,"div",19)(34,"div",20)(35,"div",21)(36,"div",22)(37,"ion-chip",23),e.nrm(38,"ion-icon",24),e.j41(39,"ion-label"),e.EFF(40),e.k0s()()()()(),e.j41(41,"div",25)(42,"div",26)(43,"div",27)(44,"div"),e.nrm(45,"ion-img",28),e.k0s(),e.j41(46,"div",29)(47,"div",30),e.EFF(48),e.nI1(49,"translate"),e.k0s(),e.j41(50,"div")(51,"strong"),e.EFF(52),e.k0s(),e.j41(53,"small"),e.EFF(54),e.k0s()()()()(),e.j41(55,"div",31)(56,"h6",32)(57,"b"),e.EFF(58,"Th\u1eddi gian \u0111\u1eb7t l\u1ecbch"),e.k0s()(),e.nrm(59,"hr",33),e.j41(60,"div")(61,"b",34),e.EFF(62),e.k0s()()(),e.j41(63,"div",31)(64,"h6",32)(65,"b"),e.EFF(66,"Th\u1eddi gian th\u1ef1c hi\u1ec7n (d\u1ef1 ki\u1ebfn)"),e.k0s()(),e.nrm(67,"hr",33),e.j41(68,"div")(69,"b",34),e.EFF(70),e.k0s()()()()()()()(),e.j41(71,"div",35)(72,"div",6)(73,"div",36)(74,"div",37)(75,"h6",32)(76,"b"),e.EFF(77,"G\u1eedi y\xeau c\u1ea7u b\u1edfi"),e.k0s()(),e.nrm(78,"hr",33),e.j41(79,"div")(80,"b",34),e.EFF(81),e.k0s()()()(),e.j41(82,"div",36)(83,"div",37)(84,"h6",32)(85,"b"),e.EFF(86,"Nh\xe2n vi\xean th\u1ef1c hi\u1ec7n"),e.k0s()(),e.nrm(87,"hr",33),e.j41(88,"div")(89,"b",34),e.EFF(90,"Middle Kien"),e.k0s()()()()()()(),e.j41(91,"ion-footer",38)(92,"div",39),e.DNE(93,f,8,3)(94,P,4,3),e.k0s()()}if(2&r){let g,i,o,v;const a=e.XpG();e.R7$(9),e.JRh(null==a.requestService?null:a.requestService.ServiceName),e.R7$(3),e.JRh(null==a.requestService?null:a.requestService.RequestAddress),e.R7$(5),e.SpI("",e.bMT(18,20,"YourWay")," "),e.R7$(3),e.SpI("",a.getDistance2CL()," km"),e.R7$(3),e.SpI("",e.bMT(24,22,"EstimatedTime")," "),e.R7$(3),e.Lme("",a.getTime2CL()," ",e.bMT(27,24,"Minute"),""),e.R7$(5),e.vxM(31,(null==a.requestService?null:a.requestService.VRequestStatus)==a.v_request_status.YeuCauDichVu||(null==a.requestService?null:a.requestService.VRequestStatus)==a.v_request_status.NhanVienDangDiDen?31:-1),e.R7$(2),e.HbH("border-"+a.APP_FUNC_GetColor_VRequestStatus(null==a.requestService?null:a.requestService.VRequestStatus)),e.R7$(4),e.Y8G("color",a.APP_FUNC_GetColor_VRequestStatus(null==a.requestService?null:a.requestService.VRequestStatus)),e.R7$(3),e.JRh(null==a.requestService?null:a.requestService.VRequestStatusName),e.R7$(8),e.JRh(null!==(g=null==a.requestService?null:a.requestService.ChargePackageName)&&void 0!==g?g:e.bMT(49,26,"ChargingPackage")),e.R7$(4),e.SpI("",a.APP_FUNC_FormatMoney(null!==(i=null==a.requestService?null:a.requestService.PayValue)&&void 0!==i?i:0),"\u0111"),e.R7$(2),e.Lme(" /",null==a.requestService?null:a.requestService.PowerValue,"",null!==(o=null==a.requestService?null:a.requestService.Unit)&&void 0!==o?o:"kWh",""),e.R7$(8),e.JRh(a.APP_FUNC_FormatDate(null==a.requestService?null:a.requestService.RequestDate)),e.R7$(8),e.JRh(a.APP_FUNC_FormatDate((null==a.requestService?null:a.requestService.ExecutionDate)+" "+(null==a.requestService?null:a.requestService.ExecutionTime))),e.R7$(11),e.JRh(null==a.requestService?null:a.requestService.CustomerFullname),e.R7$(12),e.vxM(93,(v=null==a.requestService?null:a.requestService.VRequestStatus)===a.v_request_status.YeuCauDichVu?93:v===(a.v_request_status.DangPhucVu||a.v_request_status.HoanTat)?94:-1)}}const k=[{path:"",component:(()=>{var r;class R{constructor(i,o,v,a,m,q){var _;this.router=i,this.activatedRoute=o,this.modalController=v,this.animationController=a,this.toastController=m,this.loadingController=q,this.APP_ROUTE=l._,this.APP_FUNC_FormatDate=C.Rv,this.APP_FUNC_FormatMoney=C.xi,this.APP_FUNC_GetColor_VRequestStatus=C.rZ,this.v_request_status=t.Gz;let p=null!==(_=o.snapshot.params.id)&&void 0!==_?_:"";p&&(this.RequestServiceId=parseFloat(p))}ngOnInit(){var i=this;this.IsOnInit=!0,(0,b.A)(function*(){(yield(0,U.kU)())&&i.refreshData(()=>{i.initMap()})})()}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.refreshData()}onIonRefresher(i){this.refreshData(()=>{i.target.complete()})}refreshData(i){var o=this;return(0,b.A)(function*(){(0,$.K5)({params:{RequestServiceId:o.RequestServiceId},callback:v=>{var a,m,q,_,p;o.response=v,null!=v&&v.Succeeded?(o.requestService=null!==(a=v.Data)&&void 0!==a?a:{},o.customerPosition={lat:null!==(m=null===(q=o.requestService)||void 0===q?void 0:q.RequestLat)&&void 0!==m?m:0,lng:null!==(_=null===(p=o.requestService)||void 0===p?void 0:p.RequestLong)&&void 0!==_?_:0}):(0,d.cX)(o.toastController,{},v).then(j=>{j.onDidDismiss().then(V=>{o.router.navigateByUrl(l._.REQUEST_SERVICE)}),j.present()}),i&&i()}})})()}initMap(){var i=this;const o=function(){var a=(0,b.A)(function*(){let m,q,p=window.google.maps;const{Map:j}=yield p.importLibrary("maps"),{AdvancedMarkerElement:V}=yield p.importLibrary("marker");let N=new j(document.getElementById("map"),{zoom:12,center:i.customerPosition,disableDefaultUI:!0,mapId:"DEMO_MAP_ID"});i.customerPosition&&(m=new V({map:N,position:i.customerPosition,title:"V\u1ecb tr\xed kh\xe1ch h\xe0ng \u0111\u1eb7t l\u1ecbch"})),i.employePosition&&(q=new V({map:N,position:i.employePosition,title:"V\u1ecb tr\xed nh\xe2n vi\xean iSAC"})),i.customerPosition&&i.employePosition&&setTimeout(()=>{var O,G,B,w,J=p.DirectionsService(),X=p.DirectionsRenderer();X.setMap(N),J.route({origin:p.LatLng(null===(O=i.employePosition)||void 0===O?void 0:O.lat,null===(G=i.employePosition)||void 0===G?void 0:G.lng),destination:p.LatLng(null===(B=i.customerPosition)||void 0===B?void 0:B.lat,null===(w=i.customerPosition)||void 0===w?void 0:w.lng),travelMode:"DRIVING"},function(W,K){"OK"==K&&X.setDirections(W)})},1e3)});return function(){return a.apply(this,arguments)}}();window.initMap=o;let v=document.createElement("script");v.async=!0,v.src=`https://maps.google.com/maps/api/js?key=${L.c.apiKey}&libraries=places,marker,routes&callback=initMap&loading=async`,document.head.append(v)}refreshCurrentPosition(i){var o=this;return(0,b.A)(function*(){let v=()=>{(0,I.Xz)().then(a=>{o.employePosition=a,i&&i()})};T.L.getCurrentPosition({enableHighAccuracy:!0}).then(function(){var a=(0,b.A)(function*(m){if(m.coords){var q={lat:m.coords.latitude,lng:m.coords.longitude};yield(0,I.fj)({params:q})}v()});return function(m){return a.apply(this,arguments)}}()).catch(()=>{v()})})()}navigateByUrl(i){this.router.navigateByUrl(i)}getDistance2CL(){return this.employePosition&&this.customerPosition?(0,C.Rw)((0,C.GH)(this.employePosition,this.customerPosition),10):0}getTime2CL(){return this.employePosition&&this.customerPosition?(0,C.Rw)(3*(0,C.GH)(this.employePosition,this.customerPosition),1):0}cancelService(){var i=this;return(0,b.A)(function*(){var o;(0,d.Yy)(i.modalController,i.animationController,{selectedId:null===(o=i.requestService)||void 0===o?void 0:o.RequestServiceId,message:{TitleConfirm:"CancelService",TextConfirm:"Confirm"},fnConfirm:v=>{(0,$.nY)({loadingController:i.loadingController,params:{RequestServiceId:v},callback:a=>{null!=a&&a.Succeeded?(0,d.cX)(i.toastController,{},a).then(m=>{m.onDidDismiss().then(q=>{i.router.navigateByUrl(l._.REQUEST_SERVICE)}),m.present()}):(0,d.cX)(i.toastController,{},a).then(m=>m.present())}})}})})()}}return(r=R).\u0275fac=function(i){return new(i||r)(e.rXU(E.Ix),e.rXU(E.nX),e.rXU(c.W3),e.rXU(c.Hx),e.rXU(c.K_),e.rXU(c.Xi))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-request-service-detail"]],decls:8,vars:5,consts:[["color","primary"],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],[1,"bg-primary"],[1,"container","card-location","text-white","pb-2"],[1,"row"],[1,"col-auto"],[1,"d-flex","align-items-center","my-0"],[1,"d-flex","align-items-center","mt-1"],[1,"border-gray","mt-2","mb-1"],[1,"text-right","text-nowrap"],[1,"mr-4"],[1,"d-inline-block"],[1,"col","p-0"],[1,"container"],[1,"row","align-items-stretch"],[1,"col-12","col-lg-6","px-0","p-lg-3"],[1,"col-12","col-lg-6","mt-3","mb-4","d-flex","flex-column"],[1,"flex-grow-1","card-day","d-flex","flex-column","rounded","bg-white","border","mt-3"],[1,"flex-grow-1"],[1,"d-flex","justify-content-center"],[1,"card-status"],[1,"no-opacity",3,"color"],["src","../../../assets/icon/tabs/service.svg"],[1,"p-2"],[1,"card-package","rounded","border","d-flex","align-items-stretch","p-2"],[1,"d-flex","align-items-center"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"align-self-stretch","pl-2","d-flex","flex-column","justify-content-between"],[1,"text-muted","fs-3"],[1,"card-day","bg-white","p-2","mt-3"],[1,"m-0"],[1,"border-dashed","mt-2","mb-3"],[1,"text-medium"],[1,"container","mb-3"],[1,"col-12","col-lg-6","mb-3"],[1,"card-day","rounded","bg-white","p-3"],[1,"ion-padding-vertical"],[1,"container","d-flex","align-items-center","justify-content-between"],[1,"embed-responsive","embed-responsive-16by9"],[1,"embed-responsive-item"],["id","map"],[1,"mr-3","d-flex","align-items-center"],["name","lines"],[1,"fs-14","ml-2"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],["color","danger","shape","round","expand","block"]],template:function(i,o){1&i&&(e.j41(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),e.nrm(3,"ion-back-button",2),e.k0s(),e.j41(4,"ion-title"),e.EFF(5),e.nI1(6,"translate"),e.k0s()()(),e.DNE(7,D,95,28)),2&i&&(e.R7$(3),e.Y8G("defaultHref",o.APP_ROUTE.TABS_DEFAULT),e.R7$(2),e.JRh(e.bMT(6,3,"ServiceDetail")),e.R7$(2),e.vxM(7,o.response?7:-1))},dependencies:[c.Jm,c.QW,c.ZB,c.W9,c.M0,c.eU,c.iq,c.KW,c.he,c.To,c.Ki,c.w2,c.BC,c.ai,c.el,n.D9],styles:[".card-location[_ngcontent-%COMP%]{position:relative;z-index:1;background-image:url(bg-charging-location.24bf138423cec5f5.svg);background-repeat:no-repeat;background-position:top center;background-size:auto 100%}.card-location.rounded[_ngcontent-%COMP%]{border-top-left-radius:1.5rem!important;border-top-right-radius:1.5rem!important}.card-location[_ngcontent-%COMP%]   ion-thumbnail[_ngcontent-%COMP%]{--size: 5rem;--border-radius: .5rem;border:1px solid var(--ion-color-light)}.card-location[_ngcontent-%COMP%]   .icon-w24[_ngcontent-%COMP%]{display:inline-block;width:24px}.card-location[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}#map[_ngcontent-%COMP%]{width:100%;height:100%}.card-day.rounded[_ngcontent-%COMP%], .card-day.rounded[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%]{margin-top:-1rem}.card-day[_ngcontent-%COMP%]   .card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}"]}),R})()}];let F=(()=>{var r;class R{}return(r=R).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[E.iI.forChild(k),E.iI]}),R})();var M=s(3890);let y=(()=>{var r;class R{}return(r=R).\u0275fac=function(i){return new(i||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[h.MD,S.YN,c.bv,F,M.x]}),R})()}}]);
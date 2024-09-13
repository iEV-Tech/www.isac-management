"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1900],{6043:(E,b,g)=>{g.d(b,{V:()=>P,j:()=>l});var v=g(467),O=g(5972);const l=function(){var u=(0,v.A)(function*(c){c.params=c.params||{},(0,O.hm)({url:`api/ChargingConnector/get-byqr/${c.params.QrCode}`,success:h=>{"function"==typeof c.callback&&c.callback(h.data||null)},error:h=>{var p;"function"==typeof c.callback&&c.callback(null==h||null===(p=h.response)||void 0===p?void 0:p.data),console.error(h)},loading:c.loading,loadingController:c.loadingController})});return function(h){return u.apply(this,arguments)}}(),P=function(){var u=(0,v.A)(function*(c){c.params=c.params||{},(0,O.hm)({url:`api/ChargingConnector/get-byid/${c.params.ChargeConnectorId}`,success:h=>{"function"==typeof c.callback&&c.callback(h.data||null)},error:h=>{var p;"function"==typeof c.callback&&c.callback(null==h||null===(p=h.response)||void 0===p?void 0:p.data),console.error(h)},loading:c.loading,loadingController:c.loadingController})});return function(h){return u.apply(this,arguments)}}()},1900:(E,b,g)=>{g.r(b),g.d(b,{ChargingSessionDetailPageModule:()=>q});var v=g(177),O=g(9417),l=g(9465),P=g(7625),u=g(467),c=g(9051),h=g(6116),p=g(6043),R=g(6944),j=g(6539),y=g(2313),_=g(8517),S=g(2021),m=g(3588),k=g(8833),n=g(4438),D=g(4842);const $=r=>({$implicit:r});function I(r,a){1&r&&(n.j41(0,"div",10),n.nrm(1,"img",11),n.j41(2,"div",12),n.EFF(3),n.nI1(4,"translate"),n.k0s()()),2&r&&(n.R7$(3),n.JRh(n.bMT(4,1,"DataNotFound")))}function x(r,a){1&r&&(n.j41(0,"div",6)(1,"div",13),n.nrm(2,"ion-spinner",14),n.j41(3,"div",15)(4,"ion-chip",16),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()()),2&r&&(n.R7$(5),n.JRh(n.bMT(6,1,"WaitingForConnectChargingConnector")))}function V(r,a){if(1&r&&(n.j41(0,"div",51)(1,"h6",54)(2,"b"),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.nrm(5,"hr",55),n.j41(6,"div")(7,"b",59),n.EFF(8),n.k0s()()()),2&r){const s=n.XpG(2);n.R7$(3),n.JRh(n.bMT(4,2,"EstimateChargeTime")),n.R7$(5),n.JRh(null==s.monitor?null:s.monitor.EstimateChargeTime)}}function G(r,a){if(1&r&&(n.j41(0,"div",60)(1,"table",61)(2,"tr")(3,"td"),n.EFF(4,"D\u1ecbch v\u1ee5"),n.k0s(),n.j41(5,"td")(6,"b",62),n.EFF(7),n.k0s()()(),n.j41(8,"tr")(9,"td"),n.EFF(10,"Ng\u01b0\u1eddi y\xeau c\u1ea7u"),n.k0s(),n.j41(11,"td")(12,"b"),n.EFF(13),n.k0s()()(),n.j41(14,"tr")(15,"td"),n.EFF(16,"Nh\xe2n vi\xean th\u1ef1c hi\u1ec7n"),n.k0s(),n.j41(17,"td")(18,"b"),n.EFF(19),n.k0s()()(),n.j41(20,"tr")(21,"td"),n.EFF(22,"Xe d\u1ecbch v\u1ee5"),n.k0s(),n.j41(23,"td")(24,"b"),n.EFF(25),n.k0s()()()()()),2&r){const s=n.XpG(3);n.R7$(7),n.JRh(s.chargingSession.ServiceName),n.R7$(6),n.JRh(s.chargingSession.CustomerFullName),n.R7$(6),n.JRh(s.chargingSession.StaffFullName),n.R7$(6),n.JRh(s.chargingSession.VehicleNumber)}}function A(r,a){if(1&r&&(n.j41(0,"div",52)(1,"div",53)(2,"h6",54)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.nrm(6,"hr",55),n.DNE(7,G,26,4,"div",60),n.k0s()()),2&r){const s=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,2,"ServiceDetail")),n.R7$(3),n.vxM(7,s.chargingSession?7:-1)}}function U(r,a){if(1&r&&(n.j41(0,"h5",63),n.nrm(1,"ion-icon",64),n.j41(2,"span",65),n.EFF(3),n.nI1(4,"translate"),n.k0s()(),n.j41(5,"div",57)(6,"div",66),n.eu8(7,67),n.k0s(),n.j41(8,"div",68),n.eu8(9,67),n.k0s()()),2&r){const s=n.XpG(2),t=n.sdS(20),e=n.sdS(22);n.R7$(3),n.JRh(null!=s.chargingStation&&s.chargingStation.IsMobileStation?n.bMT(4,5,"MobileStation"):null==s.chargingLocation?null:s.chargingLocation.LocName),n.R7$(4),n.Y8G("ngTemplateOutlet",t)("ngTemplateOutletContext",n.eq3(7,$,s.chargingStation)),n.R7$(2),n.Y8G("ngTemplateOutlet",e)("ngTemplateOutletContext",n.eq3(9,$,s.chargingConnector))}}function w(r,a){if(1&r&&(n.j41(0,"div",69)(1,"div",70)(2,"h6",54)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.nrm(6,"hr",55),n.j41(7,"div")(8,"b",59),n.EFF(9),n.k0s()()()()),2&r){let s;const t=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,2,"ChargingStartTime")),n.R7$(5),n.JRh(t.APP_FUNC_FormatDate(null!==(s=null==t.monitor?null:t.monitor.StartTime)&&void 0!==s?s:t.chargingSession.ChargingStart))}}function N(r,a){if(1&r&&(n.j41(0,"div",69)(1,"div",70)(2,"h6",54)(3,"b"),n.EFF(4),n.nI1(5,"translate"),n.k0s()(),n.nrm(6,"hr",55),n.j41(7,"div")(8,"b",59),n.EFF(9),n.k0s()()()()),2&r){let s;const t=n.XpG(2);n.R7$(4),n.JRh(n.bMT(5,2,"ChargingEndTime")),n.R7$(5),n.JRh(t.APP_FUNC_FormatDate(null!==(s=null==t.monitor?null:t.monitor.StopTime)&&void 0!==s?s:t.chargingSession.ChargingEnd))}}function B(r,a){if(1&r&&(n.j41(0,"div",7)(1,"div",17)(2,"div",18)(3,"div",19)(4,"div",20)(5,"div",21)(6,"div",22)(7,"ion-chip",23),n.nrm(8,"ion-icon",24),n.j41(9,"ion-label"),n.EFF(10),n.k0s()()()(),n.j41(11,"div",25)(12,"div",26)(13,"div",27),n.EFF(14),n.nI1(15,"translate"),n.k0s(),n.j41(16,"div")(17,"span",28),n.nrm(18,"span",29),n.k0s(),n.j41(19,"span",30),n.nrm(20,"span",29),n.k0s(),n.j41(21,"div",31)(22,"div",32)(23,"div",33),n.nrm(24,"ion-icon",34)(25,"br"),n.j41(26,"ion-text",35),n.EFF(27),n.k0s()()()()(),n.j41(28,"div",36)(29,"div",27),n.EFF(30),n.nI1(31,"translate"),n.k0s(),n.j41(32,"div",37),n.EFF(33),n.k0s()()(),n.j41(34,"div",38)(35,"div",39)(36,"div",27),n.EFF(37),n.nI1(38,"translate"),n.k0s(),n.j41(39,"div",40)(40,"ion-chip",41),n.nrm(41,"ion-icon",42),n.k0s(),n.j41(42,"span")(43,"b"),n.EFF(44),n.k0s(),n.EFF(45," %"),n.k0s()()(),n.nrm(46,"hr",43),n.j41(47,"div",39)(48,"div",27),n.EFF(49),n.nI1(50,"translate"),n.k0s(),n.j41(51,"div",40)(52,"ion-chip",41),n.nrm(53,"ion-icon",44),n.k0s(),n.j41(54,"span")(55,"b"),n.EFF(56),n.k0s(),n.EFF(57),n.nI1(58,"translate"),n.k0s()()()()()(),n.j41(59,"div",45)(60,"div",46)(61,"div",47)(62,"div"),n.nrm(63,"ion-img",48),n.k0s(),n.j41(64,"div",49)(65,"div",27),n.EFF(66),n.nI1(67,"translate"),n.k0s(),n.j41(68,"div")(69,"strong"),n.EFF(70),n.k0s(),n.j41(71,"small"),n.EFF(72),n.k0s()()()(),n.j41(73,"div",50)(74,"div",27),n.EFF(75),n.nI1(76,"translate"),n.k0s(),n.j41(77,"div")(78,"strong"),n.EFF(79),n.k0s(),n.j41(80,"small"),n.EFF(81),n.k0s()()()()()(),n.DNE(82,V,9,4,"div",51),n.k0s(),n.DNE(83,A,8,4,"div",52),n.j41(84,"div",52)(85,"div",53)(86,"h6",54)(87,"b"),n.EFF(88),n.nI1(89,"translate"),n.k0s()(),n.nrm(90,"hr",55),n.DNE(91,U,10,11),n.k0s()(),n.j41(92,"div",56)(93,"div",57),n.DNE(94,w,10,4,"div",58)(95,N,10,4,"div",58),n.k0s()()()()),2&r){let s,t,e,i;const o=n.XpG();n.R7$(3),n.HbH("border-"+o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(4),n.Y8G("color",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(3),n.JRh(o.chargingSession.VSessionStatusName),n.R7$(4),n.SpI("% ",n.bMT(15,36,"VehicleBattery"),""),n.R7$(2),n.STu("mx-auto mt-2 progress progress-",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)," progress-",o.getBatteryLevel(),""),n.R7$(8),n.Y8G("color",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(2),n.Y8G("color",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(),n.SpI("",o.getBatteryPercent(),"%"),n.R7$(3),n.JRh(n.bMT(31,38,"ElectricUsed")),n.R7$(3),n.Lme("",o.getMeter(),"",null!==(s=o.chargingSession.Unit)&&void 0!==s?s:"kWh",""),n.R7$(4),n.JRh(n.bMT(38,40,"ChargedPowerOnPackage")),n.R7$(3),n.Y8G("color",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(4),n.JRh(o.getMeterPercent()),n.R7$(5),n.JRh(n.bMT(50,42,"ChargedTime")),n.R7$(3),n.Y8G("color",o.APP_FUNC_GetColor_VSessionStatus(o.chargingSession.VSessionStatus)),n.R7$(4),n.JRh(o.getTimeCharging()),n.R7$(),n.SpI(" ",n.bMT(58,44,"Minute"),""),n.R7$(9),n.JRh(n.bMT(67,46,"ChargingPackage")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(null!==(t=o.chargingSession.PayValue)&&void 0!==t?t:0),"\u0111"),n.R7$(2),n.Lme(" /",o.chargingSession.MaxElectricUsed,"",null!==(e=o.chargingSession.Unit)&&void 0!==e?e:"kWh",""),n.R7$(3),n.JRh(n.bMT(76,48,"Used")),n.R7$(4),n.SpI("",o.APP_FUNC_FormatMoney(o.getMoney()),"\u0111"),n.R7$(2),n.Lme(" /",o.getMeter(),"",null!==(i=o.chargingSession.Unit)&&void 0!==i?i:"kWh",""),n.R7$(),n.vxM(82,o.chargingSession.VSessionStatus==o.v_session_status.DangSac&&null!=o.monitor&&o.monitor.EstimateChargeTime?82:-1),n.R7$(),n.vxM(83,o.chargingSession.StaffUserId?83:-1),n.R7$(5),n.JRh(n.bMT(89,50,"ChargingStation")),n.R7$(3),n.vxM(91,o.chargingConnector?91:-1),n.R7$(3),n.Y8G("ngIf",o.chargingSession.ChargingStart),n.R7$(),n.Y8G("ngIf",o.chargingSession.ChargingEnd)}}function J(r,a){if(1&r){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",72),n.bIt("click",function(e){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalConfirm_ChargingSession_Stop(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&r&&(n.R7$(5),n.JRh(n.bMT(6,1,"ChargingStop")))}function X(r,a){if(1&r){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",73),n.bIt("click",function(e){n.eBV(s);const i=n.XpG();return n.Njj(i.createBill(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&r&&(n.R7$(5),n.JRh(n.bMT(6,1,"ChargingComplete")))}function L(r,a){if(1&r){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"div",74)(4,"div",75)(5,"ion-chip",76),n.bIt("click",function(){n.eBV(s);const e=n.XpG();return n.Njj(e.navigateByUrl(e.APP_ROUTE.DEFAULT))}),n.nrm(6,"ion-icon",77),n.j41(7,"ion-label"),n.EFF(8),n.nI1(9,"translate"),n.k0s()()(),n.nrm(10,"div",20),n.k0s()()(),n.bVm()}2&r&&(n.R7$(8),n.JRh(n.bMT(9,1,"Home")))}function Y(r,a){if(1&r){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",78),n.bIt("click",function(e){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalAddFeedback(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&r&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function W(r,a){if(1&r){const s=n.RV6();n.qex(0),n.j41(1,"ion-footer")(2,"div",71)(3,"ion-button",78),n.bIt("click",function(e){n.eBV(s);const i=n.XpG();return n.Njj(i.presentModalAddFeedback(e))}),n.j41(4,"ion-label"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()()(),n.bVm()}2&r&&(n.R7$(5),n.JRh(n.bMT(6,1,"SendFeedback")))}function H(r,a){if(1&r&&(n.j41(0,"div",79)(1,"div",80),n.nrm(2,"img",81),n.k0s(),n.j41(3,"div",82)(4,"div")(5,"b"),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div"),n.EFF(9),n.k0s()()()),2&r){const s=a.$implicit,t=n.XpG();n.R7$(2),n.Y8G("src",t.APP_FUNC_GetLocImage(t.chargingLocation,"assets/image/default/ev-station.png"),n.B4B),n.R7$(4),n.Lme("",n.bMT(7,4,"ChargingStation")," ",null!=s&&s.IsAC?"AC":"DC",""),n.R7$(3),n.SpI("ID: ",null==s?null:s.StationCode,"")}}function K(r,a){if(1&r&&(n.j41(0,"div",79)(1,"div",80),n.nrm(2,"img",83),n.k0s(),n.j41(3,"div",82)(4,"div")(5,"b"),n.EFF(6),n.nI1(7,"translate"),n.k0s()(),n.j41(8,"div"),n.EFF(9),n.k0s()()()),2&r){const s=a.$implicit,t=n.XpG();n.R7$(2),n.Y8G("src",t.getCoverConnector(s),n.B4B),n.R7$(4),n.Lme("",n.bMT(7,4,"Connector")," ",null==s?null:s.ConnectorType,""),n.R7$(3),n.SpI("ID: ",null==s?null:s.ConnectorId,"")}}const z=[{path:"",component:(()=>{var r;class a{constructor(t,e,i,o,d,C){var f;this.router=t,this.activatedRoute=e,this.loadingController=i,this.toastController=o,this.modalController=d,this.animationController=C,this.APP_ROUTE=k._,this.APP_FUNC_FormatDate=_.Rv,this.APP_FUNC_DivDateTime=_.Wv,this.APP_FUNC_FormatMoney=_.xi,this.APP_FUNC_GetColor_VSessionStatus=_.kH,this.APP_FUNC_GetLocImage=_.Zn,this.v_session_status=m.jT,this.VSessionStatus=0;let M=null!==(f=e.snapshot.params.id)&&void 0!==f?f:"";M&&(this.ChargeSessionId=parseFloat(M))}ngOnInit(){var t=this;this.IsOnInit=!0,(0,u.A)(function*(){(yield(0,j.kU)())&&t.refreshData(()=>{t.loadChargingConnector()})})()}ionViewDidEnter(){this.IsOnInit?this.IsOnInit=!1:this.ngOnInit()}ionViewDidLeave(){this.destroyTimeout()}onIonRefresher(t){this.refreshData(()=>{this.loadChargingConnector(),t.target.complete()})}refreshTimeoutSession(){clearTimeout(this.timeoutSession);let t=1e4;if(this.VSessionStatus==m.jT.KhoiTaoPhienSac)t=3e3;else if(this.VSessionStatus==m.jT.DangSac)t=11e3;else{if(this.VSessionStatus!=m.jT.DaSac)return;t=3e3}this.timeoutSession=setTimeout(()=>{[m.jT.KhoiTaoPhienSac,m.jT.DangSac,m.jT.DaSac].includes(this.VSessionStatus)&&this.refreshSession()},t)}refreshTimeoutMonitor(){clearTimeout(this.timeoutMonitor);let t=1e4;this.VSessionStatus==m.jT.DangSac&&(t=11e3*2.2,this.timeoutMonitor=setTimeout(()=>{[m.jT.DangSac].includes(this.VSessionStatus)&&this.refreshMonitor()},t))}destroyTimeout(){clearTimeout(this.timeoutSession),clearTimeout(this.timeoutMonitor)}refreshData(t){var e=this;return(0,u.A)(function*(){e.refreshSession(()=>{e.VSessionStatus==m.jT.DangSac&&e.refreshMonitor(),t&&t()})})()}refreshSession(t){var e=this;return(0,u.A)(function*(){(0,R.w0)({params:{ChargeSessionId:e.ChargeSessionId},callback:i=>{var o,d;e.response=i,null!=i&&i.Succeeded?(e.chargingSession=i.Data,e.VSessionStatus=null!==(o=null===(d=e.chargingSession)||void 0===d?void 0:d.VSessionStatus)&&void 0!==o?o:0,[m.jT.DaSac,m.jT.HoanTat].includes(e.VSessionStatus)&&(e.monitor=void 0),e.refreshTimeoutSession()):(0,S.cX)(e.toastController,{duration:5e3},i).then(C=>C.present()),t&&t()}})})()}refreshMonitor(){var t,e;(0,R.eu)({params:{StationCode:null===(t=this.chargingSession)||void 0===t?void 0:t.StationCode,ConnectorId:null===(e=this.chargingSession)||void 0===e?void 0:e.ConnectorId},callback:i=>{null!=i&&i.Succeeded?this.monitor=i.Data:(0,S.cX)(this.toastController,{},i).then(o=>o.present()),this.refreshTimeoutMonitor()}})}loadChargingConnector(){var t=this;return(0,u.A)(function*(){var e,i;null!==(e=t.chargingSession)&&void 0!==e&&e.ChargeConnectorId&&(0,p.V)({loadingController:t.loadingController,params:{ChargeConnectorId:null===(i=t.chargingSession)||void 0===i?void 0:i.ChargeConnectorId},callback:o=>{t.response=o,null!=o&&o.Succeeded?t.chargingConnector=o.Data:(0,S.cX)(t.toastController,{},o).then(d=>d.present())}})})()}get chargingLocation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingLocation}get chargingStation(){var t;return null===(t=this.chargingConnector)||void 0===t?void 0:t.ChargingStation}getCoverConnector(t){var e;return`assets/image/connector/${null==t||null===(e=t.ConnectorType)||void 0===e?void 0:e.replace(/[^a-zA-Z0-9]/g,"-")}.png`}navigateByUrl(t){var e=this;return(0,u.A)(function*(){e.router.navigateByUrl(t)})()}getTimeCharging(){var t,e,i,o,d,C,f,M,F,T;return(0,_.Wv)(null!==(t=null===(e=this.monitor)||void 0===e?void 0:e.StartTime)&&void 0!==t?t:null===(i=this.chargingSession)||void 0===i?void 0:i.ChargingStart,(null!==(o=null===(d=this.monitor)||void 0===d?void 0:d.StartTime)&&void 0!==o?o:null!==(C=this.chargingSession)&&void 0!==C&&C.ChargingStart)?null!==(f=null!==(M=null===(F=this.monitor)||void 0===F?void 0:F.StopTime)&&void 0!==M?M:null===(T=this.chargingSession)||void 0===T?void 0:T.ChargingEnd)&&void 0!==f?f:new Date:null)}getBatteryLevel(){var t,e,i,o;return(0,_.Rw)(Math.floor((null!==(t=null!==(e=null===(i=this.monitor)||void 0===i?void 0:i.SoC)&&void 0!==e?e:null===(o=this.chargingSession)||void 0===o?void 0:o.BatteryPercent)&&void 0!==t?t:0)/10),100)}getBatteryPercent(){var t,e,i,o;return(0,_.Rw)(null!==(t=null!==(e=null===(i=this.monitor)||void 0===i?void 0:i.SoC)&&void 0!==e?e:null===(o=this.chargingSession)||void 0===o?void 0:o.BatteryPercent)&&void 0!==t?t:0,100)}getBatteryColor(){let t=this.getBatteryPercent();return t<=10?"danger":t<=30?"warning":"primary"}getMeter(){var t,e,i,o,d,C;return(0,_.Rw)(this.monitor?(null!==(t=null===(e=this.monitor)||void 0===e?void 0:e.LastMeter)&&void 0!==t?t:0)-(null!==(i=null===(o=this.monitor)||void 0===o?void 0:o.MeterStart)&&void 0!==i?i:0):null!==(d=null===(C=this.chargingSession)||void 0===C?void 0:C.ElectricUsed)&&void 0!==d?d:0,100)}getMeterPercent(){var t,e;return null!==(t=this.chargingSession)&&void 0!==t&&t.PayValue&&null!==(e=this.chargingSession)&&void 0!==e&&e.MaxElectricUsed?(0,_.Rw)(this.getMeter()/this.chargingSession.MaxElectricUsed*100,1):0}getMoney(){var t,e,i;return null!==(t=this.chargingSession)&&void 0!==t&&t.PayValue&&null!==(e=this.chargingSession)&&void 0!==e&&e.MaxElectricUsed?(0,_.Rw)((null===(i=this.chargingSession)||void 0===i?void 0:i.PayValue)*this.getMeter()/this.chargingSession.MaxElectricUsed,1):0}chargingStart(t){var e=this;return(0,u.A)(function*(){(0,R.wm)({loadingController:e.loadingController,params:{ChargeSessionId:e.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?e.refreshData():(0,S.cX)(e.toastController,{duration:7e3},i).then(o=>o.present())}})})()}chargingStop(t){var e=this;return(0,u.A)(function*(){(0,R._$)({loadingController:e.loadingController,params:{ChargeSessionId:e.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?e.refreshData():(0,S.cX)(e.toastController,{duration:7e3},i).then(o=>o.present())}})})()}createBill(t){var e=this;return(0,u.A)(function*(){(0,h.MN)({params:{ChargeSessionId:e.ChargeSessionId},callback:i=>{null!=i&&i.Succeeded?e.refreshData(()=>{}):(0,S.cX)(e.toastController,{duration:7e3},i).then(o=>o.present())}})})()}openDetailRequestProcessed(t){var e=this;return(0,u.A)(function*(){var i,o;e.router.navigateByUrl(k._.REQUEST_PROCESSED_DETAIL.replace(":id",null!==(i=null===(o=e.chargingSession)||void 0===o||null===(o=o.RequestProcessedId)||void 0===o?void 0:o.toString())&&void 0!==i?i:""))})()}presentModalAddFeedback(t){var e=this;return(0,u.A)(function*(){var i;let o=yield e.modalController.create({component:c.l,componentProps:{feedback:{DocType:y.vK.CHARGING_SESSION,DocId:null===(i=e.chargingSession)||void 0===i?void 0:i.ChargeSessionId}},cssClass:"ion-modal-breakpoint",breakpoints:[0,.5,1],initialBreakpoint:1});o.onDidDismiss().then(d=>{"success"==d.role&&e.refreshData()}),o.present()})()}presentModalConfirm_ChargingSession_Stop(t){var e=this;return(0,u.A)(function*(){(0,S.Yy)(e.modalController,e.animationController,{selectedId:e.ChargeSessionId,message:{TitleConfirm:"AreYouSureYouWantToStopCharging",Img:"/assets/image/stop-changing.svg",TextConfirm:"ChargingStop",TextCancel:"Close"},fnConfirm:()=>{e.chargingStop()}})})()}}return(r=a).\u0275fac=function(t){return new(t||r)(n.rXU(P.Ix),n.rXU(P.nX),n.rXU(l.Xi),n.rXU(l.K_),n.rXU(l.W3),n.rXU(l.Hx))},r.\u0275cmp=n.VBU({type:r,selectors:[["app-charging-session-detail"]],decls:23,vars:13,consts:[["templateChargingStation",""],["templateChargingConnector",""],["slot","start"],["icon","../../../assets/icon/ion-icon/arrow-left.svg","text","",3,"defaultHref"],["slot","fixed",3,"ionRefresh"],["class","container py-5 text-center",4,"ngIf"],[1,"container","text-center","line-height-0","mt-2","mb-3"],[1,"container","mt-3"],[3,"ngSwitch"],[4,"ngSwitchCase"],[1,"container","py-5","text-center"],["src","../../../assets/image/default/no-info.svg"],[1,"text-muted","mt-4"],[1,"card-day","rounded","bg-white","px-3","py-4"],["color","primary","name","crescent"],[1,"text-center","mt-4"],["color","primary"],[1,"row","align-items-stretch"],[1,"col-12","col-lg-6","mb-4","d-flex","flex-column"],[1,"flex-grow-1","card-day","d-flex","flex-column","rounded","bg-white","border"],[1,"flex-grow-1"],[1,"d-flex","justify-content-center"],[1,"card-status"],[1,"no-opacity",3,"color"],["src","../../../assets/icon/ion-icon/battery.svg"],[1,"d-flex","mt-3"],[1,"col-6","px-0","text-center"],[1,"text-muted","fs-3"],[1,"progress-left"],[1,"progress-bar"],[1,"progress-right"],[1,"progress-value"],[1,"d-flex","w-100","h-100","align-items-center","justify-content-center","text-center"],[1,"line-height-1"],["src","../../../assets/icon/ion-icon/battery-2.svg",3,"color"],[3,"color"],[1,"status-item","mt-3","mb-3"],[1,"font-weight-medium"],[1,"col-6","px-0"],[1,"status-item","mb-3"],[1,"mt-2"],[1,"ion-chip-icon",3,"color"],["src","../../../assets/icon/ion-icon/electric-2.svg"],[1,"my-3","mr-2"],["src","../../../assets/icon/ion-icon/time-2.svg"],[1,"p-2"],[1,"card-package","rounded","border","d-flex","align-items-stretch","p-2"],[1,"col-7","pl-0","d-flex","align-items-center","pr-2","border-right"],["src","../../../assets/icon/ion-img/charge-package.svg"],[1,"align-self-stretch","pl-2","d-flex","flex-column","justify-content-between"],[1,"col-5","pl-2","pr-0","flex-grow-1","d-flex","flex-column","justify-content-between"],[1,"card-day","rounded","bg-white","p-3","mt-3"],[1,"col-12","col-lg-6","mb-4"],[1,"card-day","h-100","rounded","bg-white","p-3"],[1,"m-0"],[1,"border-dashed","mt-2","mb-3"],[1,"col-12","col-lg-6"],[1,"row"],["class","col-12 mb-4",4,"ngIf"],[1,"text-medium"],[1,"d-flex","align-items-start"],[1,"table","table-borderless","m-0"],[1,"text-primary"],[1,"mt-0","mb-3","text-primary","d-flex","align-items-center"],["src","../../../assets/icon/ion-icon/changing-station.svg"],[1,"ml-2"],[1,"col-6","pr-2"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"col-6","pl-2"],[1,"col-12","mb-4"],[1,"card-day","rounded","bg-white","p-3"],[1,"container","py-3"],["color","danger","shape","round","expand","block",3,"click"],["color","primary","shape","round","expand","block",3,"click"],[1,"d-flex","align-items-center"],[1,"pr-3"],["color","primary",3,"click"],["name","home-outline",1,"fs-24"],["color","medium","shape","round","fill","outline","expand","block",3,"click"],[1,"rounded","border","p-2"],[1,"embed-responsive","embed-responsive-1by1"],["onError","this.src='assets/image/default/ev-station.png'",1,"embed-responsive-item","rounded",3,"src"],[1,"mt-2","text-center"],[1,"embed-responsive-item","rounded",3,"src"]],template:function(t,e){if(1&t){const i=n.RV6();n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",2),n.nrm(3,"ion-back-button",3),n.k0s(),n.j41(4,"ion-title"),n.EFF(5),n.nI1(6,"translate"),n.k0s()()(),n.j41(7,"ion-content")(8,"ion-refresher",4),n.bIt("ionRefresh",function(d){return n.eBV(i),n.Njj(e.onIonRefresher(d))}),n.nrm(9,"ion-refresher-content"),n.k0s(),n.DNE(10,I,5,3,"div",5)(11,x,7,3,"div",6)(12,B,96,52,"div",7),n.k0s(),n.qex(13,8),n.DNE(14,J,7,3,"ng-container",9)(15,X,7,3,"ng-container",9)(16,L,11,3,"ng-container",9)(17,Y,7,3,"ng-container",9)(18,W,7,3,"ng-container",9),n.bVm(),n.DNE(19,H,10,6,"ng-template",null,0,n.C5r)(21,K,10,6,"ng-template",null,1,n.C5r)}2&t&&(n.R7$(3),n.Y8G("defaultHref",e.APP_ROUTE.CHARGING_SESSION),n.R7$(2),n.JRh(n.bMT(6,11,"Charger")),n.R7$(5),n.Y8G("ngIf",e.response&&!e.chargingSession),n.R7$(),n.vxM(11,(null==e.chargingSession?null:e.chargingSession.VSessionStatus)==e.v_session_status.KhoiTaoPhienSac?11:-1),n.R7$(),n.vxM(12,e.chargingSession?12:-1),n.R7$(),n.Y8G("ngSwitch",null==e.chargingSession?null:e.chargingSession.VSessionStatus),n.R7$(),n.Y8G("ngSwitchCase",e.v_session_status.DangSac),n.R7$(),n.Y8G("ngSwitchCase",e.v_session_status.DaSac),n.R7$(),n.Y8G("ngSwitchCase",e.v_session_status.HoanTat),n.R7$(),n.Y8G("ngSwitchCase",e.v_session_status.HuyPhienSac),n.R7$(),n.Y8G("ngSwitchCase",e.v_session_status.Loi))},dependencies:[v.bT,v.T3,v.ux,v.e1,l.Jm,l.QW,l.ZB,l.W9,l.M0,l.eU,l.iq,l.KW,l.he,l.To,l.Ki,l.w2,l.IO,l.BC,l.ai,l.el,D.D9],styles:['.card-day.rounded[_ngcontent-%COMP%], .card-day.rounded[_ngcontent-%COMP%]   .rounded[_ngcontent-%COMP%]{border-radius:1rem!important}.card-day[_ngcontent-%COMP%]   .card-status[_ngcontent-%COMP%]{margin-top:-1rem}.card-day[_ngcontent-%COMP%]   .card-package[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:3rem}.status-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:.5rem;vertical-align:middle;font-size:1.5rem}.status-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;vertical-align:middle}.ion-chip-icon[_ngcontent-%COMP%]{margin:0 .5rem 0 0;padding:.25rem}.ion-chip-icon[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin:0;font-size:1.5rem}ion-spinner[_ngcontent-%COMP%]{width:3rem;height:3rem}.progress[_ngcontent-%COMP%]{width:5rem;height:5rem;line-height:5rem;background:none;margin:0;box-shadow:none;position:relative}.progress[_ngcontent-%COMP%]:after{content:"";width:100%;height:100%;border-radius:50%;border:.3125rem solid var(--ion-color-medium-tint);position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%] > span[_ngcontent-%COMP%]{width:50%;height:100%;overflow:hidden;position:absolute;top:0;z-index:1}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]{left:0}.progress[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{width:100%;height:100%;background:none;border-width:.4rem;border-style:solid;position:absolute;top:0}.progress[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:100%;border-top-right-radius:5rem;border-bottom-right-radius:5rem;border-left:0;transform-origin:center left}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]{right:0}.progress[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{left:-100%;border-top-left-radius:5rem;border-bottom-left-radius:5rem;border-right:0;transform-origin:center right}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:50%;font-size:1rem;text-align:center;position:absolute;top:0;left:0}.progress[_ngcontent-%COMP%]   .progress-value[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:1.5rem}.progress-tertiary[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-tertiary)}.progress-success[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-success)}.progress-warning[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-warning)}.progress-danger[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{border-color:var(--ion-color-danger)}.progress-1[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.8s linear forwards}.progress-2[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.8s linear forwards}.progress-3[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.8s linear forwards}.progress-4[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.8s linear forwards}.progress-5[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%], .progress-6[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-6[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-2 1.5s linear forwards 1.8s}.progress-7[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-7[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-4 1.5s linear forwards 1.8s}.progress-8[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-8[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-6 1.5s linear forwards 1.8s}.progress-9[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-9[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-8 1.5s linear forwards 1.8s}.progress-10[_ngcontent-%COMP%]   .progress-right[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.8s linear forwards}.progress-10[_ngcontent-%COMP%]   .progress-left[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_loading-10 1.5s linear forwards 1.8s}@keyframes _ngcontent-%COMP%_loading-1{0%{transform:rotate(0)}to{transform:rotate(18deg)}}@keyframes _ngcontent-%COMP%_loading-2{0%{transform:rotate(0)}to{transform:rotate(36deg)}}@keyframes _ngcontent-%COMP%_loading-3{0%{transform:rotate(0)}to{transform:rotate(54deg)}}@keyframes _ngcontent-%COMP%_loading-4{0%{transform:rotate(0)}to{transform:rotate(72deg)}}@keyframes _ngcontent-%COMP%_loading-5{0%{transform:rotate(0)}to{transform:rotate(90deg)}}@keyframes _ngcontent-%COMP%_loading-6{0%{transform:rotate(0)}to{transform:rotate(108deg)}}@keyframes _ngcontent-%COMP%_loading-7{0%{transform:rotate(0)}to{transform:rotate(126deg)}}@keyframes _ngcontent-%COMP%_loading-8{0%{transform:rotate(0)}to{transform:rotate(144deg)}}@keyframes _ngcontent-%COMP%_loading-9{0%{transform:rotate(0)}to{transform:rotate(162deg)}}@keyframes _ngcontent-%COMP%_loading-10{0%{transform:rotate(0)}to{transform:rotate(180deg)}}']}),a})()}];let Q=(()=>{var r;class a{}return(r=a).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[P.iI.forChild(z),P.iI]}),a})();var Z=g(3664);let q=(()=>{var r;class a{}return(r=a).\u0275fac=function(t){return new(t||r)},r.\u0275mod=n.$C({type:r}),r.\u0275inj=n.G2t({imports:[v.MD,O.YN,l.bv,Q,Z.x]}),a})()}}]);
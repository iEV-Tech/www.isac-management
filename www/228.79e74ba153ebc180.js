"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[228],{7392:(L,k,g)=>{g.d(k,{P:()=>e});const e=(0,g(5083).F3)("Browser",{web:()=>g.e(4786).then(g.bind(g,4786)).then(v=>new v.BrowserWeb)})},7762:(L,k,g)=>{g.d(k,{L:()=>e});const e=(0,g(5083).F3)("Geolocation",{web:()=>g.e(2920).then(g.bind(g,2920)).then(v=>new v.GeolocationWeb)})},3801:(L,k,g)=>{g.d(k,{RR:()=>M,Xz:()=>n,fA:()=>T,fj:()=>h});var b=g(467),e=g(369),v=g(5312);const m=new e.w({name:"_asDB",driverOrder:[e.C.IndexedDB,e.C.LocalStorage]}),n=function(){var a=(0,b.A)(function*(c){yield m.create();try{var p=(yield m.get("geolocation"))||{};if("function"==typeof(null==c?void 0:c.callback)&&c.callback(Object.assign({},p||{})),p.lat&&p.lng)return p}catch(_){"function"==typeof(null==c?void 0:c.callback)&&c.callback(),console.error(_)}return v.c.app_default.geolocation.pos});return function(p){return a.apply(this,arguments)}}(),h=function(){var a=(0,b.A)(function*(c){yield m.create(),c.params=c.params||{};try{var p=Object.assign({},c.params);yield m.set("geolocation",p),"function"==typeof c.callback&&c.callback(Object.assign({},p||{}))}catch(_){"function"==typeof c.callback&&c.callback(),console.error(_)}});return function(p){return a.apply(this,arguments)}}(),T=function(){var a=(0,b.A)(function*(c){yield m.create();try{var p=(yield m.get("address"))||{};return"function"==typeof(null==c?void 0:c.callback)&&c.callback(Object.assign({},p||{})),p}catch(_){"function"==typeof(null==c?void 0:c.callback)&&c.callback(),console.error(_)}return{currentAddress:null}});return function(p){return a.apply(this,arguments)}}(),M=function(){var a=(0,b.A)(function*(c){yield m.create(),c.params=c.params||{};try{var p=Object.assign({},c.params);yield m.set("address",p),"function"==typeof c.callback&&c.callback(Object.assign({},p||{}))}catch(_){"function"==typeof c.callback&&c.callback(),console.error(_)}});return function(p){return a.apply(this,arguments)}}()},6841:(L,k,g)=>{g.d(k,{Bc:()=>v,YW:()=>T,Zd:()=>n,tC:()=>m});var b=g(467),e=g(5972);const v=function(){var M=(0,b.A)(function*(a){var c,p,_,f,y,s;a.params=a.params||{},(0,e.hm)({url:"api/ChargingLocation/get-inarea",params:{TopLeftLat:null!==(c=a.params.TopLeftLat)&&void 0!==c?c:null,TopLeftLong:null!==(p=a.params.TopLeftLong)&&void 0!==p?p:null,RightBottomLat:null!==(_=a.params.RightBottomLat)&&void 0!==_?_:null,RightBottomLong:null!==(f=a.params.RightBottomLong)&&void 0!==f?f:null,PageNumber:null!==(y=a.params.PageNumber)&&void 0!==y?y:1,PageSize:null!==(s=a.params.PageSize)&&void 0!==s?s:10},success:d=>{"function"==typeof a.callback&&a.callback(d.data||null)},error:d=>{var S;"function"==typeof a.callback&&a.callback(null==d||null===(S=d.response)||void 0===S?void 0:S.data),console.error(d)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),m=function(){var M=(0,b.A)(function*(a){var c,p,_;a.params=a.params||{},(0,e.hm)({url:"api/ChargingLocation/search",params:{Search:null!==(c=a.params.Search)&&void 0!==c?c:null,PageNumber:null!==(p=a.params.PageNumber)&&void 0!==p?p:1,PageSize:null!==(_=a.params.PageSize)&&void 0!==_?_:10},success:f=>{"function"==typeof a.callback&&a.callback(f.data||null)},error:f=>{var y;"function"==typeof a.callback&&a.callback(null==f||null===(y=f.response)||void 0===y?void 0:y.data),console.error(f)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),n=function(){var M=(0,b.A)(function*(a){var c,p,_,f,y,s;a.params=a.params||{},(0,e.hm)({url:"api/ChargingLocation/filter-bycondition",params:{ElectricTypeFilter:null!==(c=a.params.ElectricTypeFilter)&&void 0!==c?c:null,ConnectorTypeFilter:null!==(p=a.params.ConnectorTypeFilter)&&void 0!==p?p:null,VConnectorStatusFilter:null!==(_=a.params.VConnectorStatusFilter)&&void 0!==_?_:null,VChargeSpeed:null!==(f=a.params.VChargeSpeed)&&void 0!==f?f:null,PageNumber:null!==(y=a.params.PageNumber)&&void 0!==y?y:1,PageSize:null!==(s=a.params.PageSize)&&void 0!==s?s:10},success:d=>{"function"==typeof a.callback&&a.callback(d.data||null)},error:d=>{var S;"function"==typeof a.callback&&a.callback(null==d||null===(S=d.response)||void 0===S?void 0:S.data),console.error(d)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),T=function(){var M=(0,b.A)(function*(a){a.params=a.params||{},(0,e.hm)({url:`api/ChargingLocation/get-detail/${a.params.ChargeLocationId}`,success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{var p;"function"==typeof a.callback&&a.callback(null==c||null===(p=c.response)||void 0===p?void 0:p.data),console.error(c)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}()},4470:(L,k,g)=>{g.d(k,{S:()=>m});var b=g(467),e=g(5312),v=g(5972);const m=function(){var n=(0,b.A)(function*(h){h.params=h.params||{},(0,v.hm)({api_url:`https://maps.googleapis.com/maps/api/geocode/json?key=${e.c.apiKey}&latlng=${h.params.lat},${h.params.lng}&sensor=true`,headers:{},success:T=>{"function"==typeof h.callback&&h.callback(T.data||null)},error:T=>{var M;"function"==typeof h.callback&&h.callback(null==T||null===(M=T.response)||void 0===M?void 0:M.data),console.error(T)},loading:h.loading,loadingController:h.loadingController})});return function(T){return n.apply(this,arguments)}}()},7168:(L,k,g)=>{g.d(k,{Ag:()=>T,fp:()=>m,hd:()=>h,kM:()=>v,yb:()=>n});var b=g(467),e=g(5972);const v=function(){var M=(0,b.A)(function*(a){a.params=a.params||{},(0,e.hm)({url:"api/Notify/get-summary",success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{var p;"function"==typeof a.callback&&a.callback(null==c||null===(p=c.response)||void 0===p?void 0:p.data),console.error(c)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),m=function(){var M=(0,b.A)(function*(a){var c,p,_;a.params=a.params||{},(0,e.hm)({url:"api/Notify/get-mynotifies",params:{IsSender:null!==(c=a.params.IsSender)&&void 0!==c?c:null,PageNumber:null!==(p=a.params.PageNumber)&&void 0!==p?p:1,PageSize:null!==(_=a.params.PageSize)&&void 0!==_?_:10},success:f=>{"function"==typeof a.callback&&a.callback(f.data||null)},error:f=>{var y;"function"==typeof a.callback&&a.callback(null==f||null===(y=f.response)||void 0===y?void 0:y.data),console.error(f)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),n=function(){var M=(0,b.A)(function*(a){a.params=a.params||{},(0,e.hm)({url:`api/Notify/get-byid/${a.params.NotifyId}`,success:c=>{"function"==typeof a.callback&&a.callback(c.data||null)},error:c=>{var p;"function"==typeof a.callback&&a.callback(null==c||null===(p=c.response)||void 0===p?void 0:p.data),console.error(c)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),h=function(){var M=(0,b.A)(function*(a){var c,p;a.params=a.params||{},(0,e.IH)({url:"api/Notify/update-isread",params:{NotifyId:null!==(c=a.params.NotifyId)&&void 0!==c?c:null,IsRead:null===(p=a.params.IsRead)||void 0===p||p},success:_=>{"function"==typeof a.callback&&a.callback(_.data||null)},error:_=>{var f;"function"==typeof a.callback&&a.callback(null==_||null===(f=_.response)||void 0===f?void 0:f.data),console.error(_)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}(),T=function(){var M=(0,b.A)(function*(a){var c;a.params=a.params||{},(0,e.IH)({url:"api/Notify/update-all-isread",params:{IsRead:null===(c=a.params.IsRead)||void 0===c||c},success:p=>{"function"==typeof a.callback&&a.callback(p.data||null)},error:p=>{var _;"function"==typeof a.callback&&a.callback(null==p||null===(_=p.response)||void 0===_?void 0:_.data),console.error(p)},loading:a.loading,loadingController:a.loadingController})});return function(c){return M.apply(this,arguments)}}()},5354:(L,k,g)=>{g.d(k,{G:()=>m,U:()=>v});var b=g(467),e=g(5972);const v=function(){var n=(0,b.A)(function*(h){var T,M,a;h.params=h.params||{},(0,e.hm)({url:"api/Reflookup/get-byname",params:{ObjectName:null!==(T=h.params.ObjectName)&&void 0!==T?T:null,PageNumber:null!==(M=h.params.PageNumber)&&void 0!==M?M:1,PageSize:null!==(a=h.params.PageSize)&&void 0!==a?a:10},success:c=>{"function"==typeof h.callback&&h.callback(c.data||null)},error:c=>{var p;"function"==typeof h.callback&&h.callback(null==c||null===(p=c.response)||void 0===p?void 0:p.data),console.error(c)},loading:h.loading,loadingController:h.loadingController})});return function(T){return n.apply(this,arguments)}}(),m=function(){var n=(0,b.A)(function*(h){h.params=h.params||{},(0,e.hm)({url:`api/Reflookup/get/${h.params.LookupId}`,success:T=>{"function"==typeof h.callback&&h.callback(T.data||null)},error:T=>{var M;"function"==typeof h.callback&&h.callback(null==T||null===(M=T.response)||void 0===M?void 0:M.data),console.error(T)},loading:h.loading,loadingController:h.loadingController})});return function(T){return n.apply(this,arguments)}}()},2385:(L,k,g)=>{g.d(k,{T:()=>p});var b=g(467),e=g(5972);const v=function(){var _=(0,b.A)(function*(f){var y;f.params=f.params||{},(0,e.hm)({url:`api/Connector/gets/${null!==(y=f.params.isac)&&void 0!==y?y:3}`,params:{},success:s=>{"function"==typeof f.callback&&f.callback(s.data||null)},error:s=>{var d;"function"==typeof f.callback&&f.callback(null==s||null===(d=s.response)||void 0===d?void 0:d.data),console.error(s)},loading:f.loading,loadingController:f.loadingController})});return function(y){return _.apply(this,arguments)}}();var m=g(5354),n=g(4438),h=g(9465),T=g(177),M=g(4842);function a(_,f){if(1&_){const y=n.RV6();n.qex(0),n.j41(1,"ion-checkbox",13),n.bIt("ionChange",function(d){n.eBV(y);const S=n.XpG();return n.Njj(S.changeConnectorTypeFilter(d))}),n.EFF(2),n.k0s(),n.nrm(3,"br"),n.bVm()}if(2&_){let y;const s=f.$implicit,d=n.XpG();n.R7$(),n.Y8G("value",s.ConnectorType)("checked",d.ConnectorTypeFilters.includes(null!==(y=s.ConnectorType)&&void 0!==y?y:"")),n.R7$(),n.Lme("",s.ConnectorType," (",s.ConnectorDesc,")")}}function c(_,f){if(1&_&&(n.j41(0,"ion-radio",6),n.EFF(1),n.k0s(),n.nrm(2,"br")),2&_){const y=f.$implicit;n.Y8G("value",y.LookupId),n.R7$(),n.JRh(y.Objectvalue)}}let p=(()=>{var _;class f{constructor(s){this.modalController=s,this.filter={},this.ConnectorTypeFilters=[],this.connectors=[],this.chargeSpeeds=[]}ngOnInit(){var s,d;this.ConnectorTypeFilters=null!==(s=null===(d=this.filter.ConnectorTypeFilter)||void 0===d||null===(d=d.split(";"))||void 0===d||null===(d=d.map(S=>S.trim()))||void 0===d?void 0:d.filter(S=>!!S))&&void 0!==s?s:[],v({params:{},callback:S=>{var P;null!=S&&S.Succeeded&&(this.connectors=null!==(P=S.Data)&&void 0!==P?P:[])}}),(0,m.U)({params:{ObjectName:"v_charge_speed",PageNumber:1,PageSize:1e3},callback:S=>{null!=S&&S.Succeeded&&(this.chargeSpeeds=S.Data)}})}cancel(s){var d=this;return(0,b.A)(function*(){d.modalController.dismiss(null,"cancel")})()}clear(s){var d=this;return(0,b.A)(function*(){d.modalController.dismiss(null,"clear")})()}submit(s){var d=this;return(0,b.A)(function*(){d.filter.ConnectorTypeFilter=d.ConnectorTypeFilters.map(S=>S.trim()).filter(S=>!!S).join(";"),d.modalController.dismiss(d.filter,"submit")})()}changeElectricTypeFilter(s){var d=this;return(0,b.A)(function*(){d.filter.ElectricTypeFilter=s.detail.value})()}changeVConnectorStatusFilter(s){var d=this;return(0,b.A)(function*(){d.filter.VConnectorStatusFilter=s.detail.value})()}changeConnectorTypeFilter(s){var d=this;return(0,b.A)(function*(){s.detail.checked?d.ConnectorTypeFilters.includes(s.detail.value)||d.ConnectorTypeFilters.push(s.detail.value):d.ConnectorTypeFilters=d.ConnectorTypeFilters.filter(S=>S!=s.detail.value)})()}changeVChargeSpeedFilter(s){var d=this;return(0,b.A)(function*(){d.filter.VChargeSpeed=s.detail.value})()}}return(_=f).\u0275fac=function(s){return new(s||_)(n.rXU(h.W3))},_.\u0275cmp=n.VBU({type:_,selectors:[["app-modal-filter-charging-location"]],inputs:{filter:"filter"},decls:58,vars:39,consts:[["slot","end"],["color","dark","shape","clear",3,"click"],["name","close-outline"],[1,"container"],[1,"mb-4"],["mode","md",3,"ionChange","value"],["label-placement","end",3,"value"],[4,"ngFor","ngForOf"],[1,"d-flex","py-3"],[1,"col-6","pr-2"],["color","primary","expand","block","shape","round","fill","outline",3,"click"],[1,"col-6","pl-2"],["color","primary","expand","block","shape","round",3,"click"],["label-placement","end",3,"ionChange","value","checked"]],template:function(s,d){1&s&&(n.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),n.EFF(3),n.nI1(4,"translate"),n.k0s(),n.j41(5,"ion-buttons",0)(6,"ion-button",1),n.bIt("click",function(P){return d.cancel(P)}),n.nrm(7,"ion-icon",2),n.k0s()()()(),n.j41(8,"ion-content")(9,"div",3)(10,"h5"),n.EFF(11),n.nI1(12,"translate"),n.k0s(),n.j41(13,"div",4)(14,"ion-radio-group",5),n.bIt("ionChange",function(P){return d.changeElectricTypeFilter(P)}),n.j41(15,"ion-radio",6),n.EFF(16),n.nI1(17,"translate"),n.k0s(),n.nrm(18,"br"),n.j41(19,"ion-radio",6),n.EFF(20,"AC"),n.k0s(),n.nrm(21,"br"),n.j41(22,"ion-radio",6),n.EFF(23,"DC"),n.k0s()()(),n.j41(24,"h5"),n.EFF(25),n.nI1(26,"translate"),n.k0s(),n.j41(27,"div",4),n.DNE(28,a,4,4,"ng-container",7),n.k0s(),n.j41(29,"h5"),n.EFF(30),n.nI1(31,"translate"),n.k0s(),n.j41(32,"div",4)(33,"ion-radio-group",5),n.bIt("ionChange",function(P){return d.changeVConnectorStatusFilter(P)}),n.j41(34,"ion-radio",6),n.EFF(35),n.nI1(36,"translate"),n.k0s(),n.nrm(37,"br"),n.j41(38,"ion-radio",6),n.EFF(39),n.nI1(40,"translate"),n.k0s()()(),n.j41(41,"h5"),n.EFF(42),n.nI1(43,"translate"),n.k0s(),n.j41(44,"div",4)(45,"ion-radio-group",5),n.bIt("ionChange",function(P){return d.changeVChargeSpeedFilter(P)}),n.Z7z(46,c,3,2,null,null,n.fX1),n.k0s()()()(),n.j41(48,"ion-footer")(49,"div",8)(50,"div",9)(51,"ion-button",10),n.bIt("click",function(P){return d.clear(P)}),n.EFF(52),n.nI1(53,"translate"),n.k0s()(),n.j41(54,"div",11)(55,"ion-button",12),n.bIt("click",function(P){return d.submit(P)}),n.EFF(56),n.nI1(57,"translate"),n.k0s()()()()),2&s&&(n.R7$(3),n.JRh(n.bMT(4,19,"Filter")),n.R7$(8),n.JRh(n.bMT(12,21,"Electric")),n.R7$(3),n.Y8G("value",d.filter.ElectricTypeFilter),n.R7$(),n.Y8G("value",3),n.R7$(),n.JRh(n.bMT(17,23,"All")),n.R7$(3),n.Y8G("value",1),n.R7$(3),n.Y8G("value",2),n.R7$(3),n.JRh(n.bMT(26,25,"ConnectorType")),n.R7$(3),n.Y8G("ngForOf",d.connectors),n.R7$(2),n.JRh(n.bMT(31,27,"Status")),n.R7$(3),n.Y8G("value",d.filter.VConnectorStatusFilter),n.R7$(),n.Y8G("value",2599),n.R7$(),n.JRh(n.bMT(36,29,"All")),n.R7$(3),n.Y8G("value",2500),n.R7$(),n.JRh(n.bMT(40,31,"ReadyCharge")),n.R7$(3),n.JRh(n.bMT(43,33,"ChargeSpeed")),n.R7$(3),n.Y8G("value",d.filter.VChargeSpeed),n.R7$(),n.Dyx(d.chargeSpeeds),n.R7$(6),n.JRh(n.bMT(53,35,"Reset")),n.R7$(4),n.JRh(n.bMT(57,37,"Apply")))},dependencies:[T.Sq,h.Jm,h.QW,h.eY,h.W9,h.M0,h.eU,h.iq,h.KO,h.f0,h.BC,h.ai,h.hB,h.Je,M.D9],styles:["ion-radio[_ngcontent-%COMP%]{margin-right:3rem;margin-bottom:.25rem}ion-checkbox[_ngcontent-%COMP%]{--size: 1.5rem;--checkbox-background-checked: var(--ion-color-primary);margin-right:3rem;margin-bottom:.25rem}ion-checkbox[_ngcontent-%COMP%]::part(container){border-radius:.25rem;border:2px solid var(--ion-color-primary)}"]}),f})()},2021:(L,k,g)=>{g.d(k,{l9:()=>I,Ip:()=>X,Yy:()=>z,He:()=>W,cX:()=>E,CV:()=>A});var b=g(467),e=g(4438),v=g(9465),m=g(177),n=g(4842);function h(r,u){if(1&r&&(e.qex(0),e.j41(1,"div")(2,"ion-thumbnail"),e.nrm(3,"img",9),e.k0s()(),e.bVm()),2&r){const i=e.XpG();e.R7$(3),e.Y8G("src",null==i.message?null:i.message.Img,e.B4B)}}function T(r,u){if(1&r&&(e.qex(0),e.j41(1,"div",10),e.nrm(2,"ion-icon",11),e.k0s(),e.bVm()),2&r){let i;const t=e.XpG();e.R7$(2),e.Y8G("color",null!==(i=null==t.message?null:t.message.Color)&&void 0!==i?i:"danger")}}let M=(()=>{var r;class u{constructor(t){this.modalController=t}ngOnInit(){}cancel(){this.modalController.dismiss(this.selectedId,"cancel")}confirm(){this.modalController.dismiss(this.selectedId,"confirm")}}return(r=u).\u0275fac=function(t){return new(t||r)(e.rXU(v.W3))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-modal-confirm"]],inputs:{selectedId:"selectedId",message:"message"},decls:17,vars:12,consts:[[1,"d-flex","justify-content-center","pt-5","pb-4"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"px-3","my-0","text-center"],[1,"w-100","d-flex","flex-column","p-4"],["mode","ios","expand","block",3,"click","color"],[1,"mt-3"],["mode","ios","color","medium","expand","block","fill","outline",3,"click"],[3,"src"],[1,"text-center"],["name","help-circle-outline",3,"color"]],template:function(t,o){if(1&t&&(e.j41(0,"div",0)(1,"div"),e.qex(2,1),e.DNE(3,h,4,1,"ng-container",2)(4,T,3,1,"ng-container",3),e.bVm(),e.j41(5,"h6",4),e.EFF(6),e.nI1(7,"translate"),e.k0s()()(),e.j41(8,"div",5)(9,"div")(10,"ion-button",6),e.bIt("click",function(){return o.confirm()}),e.EFF(11),e.nI1(12,"translate"),e.k0s()(),e.j41(13,"div",7)(14,"ion-button",8),e.bIt("click",function(){return o.cancel()}),e.EFF(15),e.nI1(16,"translate"),e.k0s()()()),2&t){let l,C,x,R;e.R7$(2),e.Y8G("ngSwitch",null!=o.message&&o.message.Img?1:0),e.R7$(),e.Y8G("ngSwitchCase",1),e.R7$(3),e.JRh(e.bMT(7,6,null!==(l=null==o.message?null:o.message.TitleConfirm)&&void 0!==l?l:"AreYouSure")),e.R7$(4),e.Y8G("color",null!==(C=null==o.message?null:o.message.Color)&&void 0!==C?C:"danger"),e.R7$(),e.JRh(e.bMT(12,8,null!==(x=null==o.message?null:o.message.TextConfirm)&&void 0!==x?x:"Confirm")),e.R7$(4),e.JRh(e.bMT(16,10,null!==(R=null==o.message?null:o.message.TextCancel)&&void 0!==R?R:"Cancel"))}},dependencies:[m.ux,m.e1,m.fG,v.Jm,v.iq,v.Zx,n.D9],styles:["ion-icon[_ngcontent-%COMP%]{font-size:10rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 6rem;margin:0 auto 1rem}ion-button[_ngcontent-%COMP%]{--border-radius: .5rem}"]}),u})();var a=g(7168),c=g(6539),p=g(8517),_=g(3588),f=g(8833),y=g(7625);function s(r,u){if(1&r){const i=e.RV6();e.j41(0,"ion-buttons",10)(1,"ion-button",1),e.bIt("click",function(o){e.eBV(i);const l=e.XpG();return e.Njj(l.readAll(o))}),e.nrm(2,"ion-icon",11),e.k0s()()}}function d(r,u){1&r&&(e.j41(0,"div",12),e.nrm(1,"ion-img",13),e.j41(2,"div",14),e.EFF(3),e.nI1(4,"translate"),e.k0s()()),2&r&&(e.R7$(3),e.JRh(e.bMT(4,1,"DataNotFound")))}function S(r,u){if(1&r){const i=e.RV6();e.qex(0),e.j41(1,"div",15),e.bIt("click",function(o){const l=e.eBV(i).$implicit,C=e.XpG();return e.Njj(C.openDetail(o,l))}),e.j41(2,"div",16)(3,"b",17),e.EFF(4),e.nI1(5,"translate"),e.k0s(),e.j41(6,"small",18),e.EFF(7),e.k0s()(),e.nrm(8,"div",19),e.k0s(),e.nrm(9,"hr"),e.bVm()}if(2&r){let i;const t=u.$implicit,o=e.XpG();e.R7$(),e.HbH(t.IsRead?"item-color-light":"item-color-secondary"),e.R7$(3),e.JRh(null!==(i=t.Title)&&void 0!==i?i:e.bMT(5,5,"Notify")),e.R7$(3),e.JRh(o.APP_FUNC_FormatDate(t.SentTime,"HH:mm, DD/MM/YYYY")),e.R7$(),e.Y8G("innerHTML",o.APP_FUNC_RenderNotify(t),e.npT)}}function P(r,u){if(1&r){const i=e.RV6();e.j41(0,"ion-infinite-scroll",20),e.bIt("ionInfinite",function(o){e.eBV(i);const l=e.XpG();return e.Njj(l.onIonInfinite(o))}),e.nrm(1,"ion-infinite-scroll-content"),e.k0s()}}let $=(()=>{var r;class u{constructor(t,o,l,C){this.router=t,this.modalController=o,this.loadingController=l,this.toastController=C,this.APP_ROUTE=f._,this.APP_FUNC_FormatMoney=p.xi,this.APP_FUNC_FormatDate=p.Rv,this.APP_FUNC_RenderNotify=p.xG,this.v_notifytype=_.XU,this.paging={sortfield:null,sorttype:null,page:1,limit:10,loading:!1,active:!0},this.filter={},this.notifys=[],this.limitLoad=0}onClose(t){var o=this;return(0,b.A)(function*(){o.modalController.dismiss(null,"cancel")})()}ngOnInit(){var t=this;(0,b.A)(function*(){(yield(0,c.kU)())&&t.refreshData()})()}onIonRefresher(t){this.filter={},this.refreshData(()=>{t.target.complete()})}onIonInfinite(t){this.loadMore(()=>{t.target.complete()})}pushData(t){1==this.paging.page&&(this.notifys.length=0),this.notifys=this.notifys.concat(t)}refreshData(t){this.filter={},this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit(t),(0,a.kM)({callback:o=>{null!=o&&o.Succeeded&&(this.notifySumary=o.Data)}})}loadMore(t){this.paging.page+=1,this.loadData_Paging_Limit(t)}searchChange(t){this.filter.search=t.target.value.replace(/\s+/g," ").trim(),this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}sortChange(t,o){this.paging.sortfield=t||null,this.paging.sorttype=o||null,this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}filterChange(){this.paging.page=1,this.paging.active=!0,this.loadData_Paging_Limit()}loadData_Paging_Limit(t){var o=this;return(0,b.A)(function*(){if(o.limitLoad>0)return void(t&&t());o.limitLoad=300;let l=setInterval(()=>{o.limitLoad-=100,o.limitLoad<=0&&(clearInterval(l),o.loadData_Paging(t))},100)})()}loadData_Paging(t){var o=this;return(0,b.A)(function*(){o.paging.loading=!0,(0,a.fp)({loadingController:o.loadingController,params:{PageNumber:o.paging.page,PageSize:o.paging.limit},callback:l=>{var C;o.response=l,null!=l&&l.Succeeded?o.pushData(null!==(C=null==l?void 0:l.Data)&&void 0!==C?C:[]):E(o.toastController,{},l).then(x=>x.present()),o.paging.loading=!1,o.paging.active=!(null==l||!l.HasNextPage),t&&t()}})})()}readAll(t){var o=this;return(0,b.A)(function*(){(0,a.Ag)({loadingController:o.loadingController,params:{IsRead:!0},callback:l=>{null!=l&&l.Succeeded?o.refreshData():E(o.toastController,{},l).then(C=>C.present())}})})()}get totalNotifyUnread(){var t,o;return null!==(t=null===(o=this.notifySumary)||void 0===o?void 0:o.TotalUnread)&&void 0!==t?t:0}openDetail(t,o){var l=this;return(0,b.A)(function*(){o.IsRead||(0,a.hd)({params:{NotifyId:o.NotifyId},callback:C=>{null!=C&&C.Succeeded&&l.notifys.filter(x=>x.NotifyId==o.NotifyId).forEach(x=>x.IsRead=!0)}}),o.DocType&&(l.modalController.dismiss(),(0,p.vb)(l.router,{doctype:o.DocType,docid:o.DocId}))})()}}return(r=u).\u0275fac=function(t){return new(t||r)(e.rXU(y.Ix),e.rXU(v.W3),e.rXU(v.Xi),e.rXU(v.K_))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-modal-notify"]],decls:17,vars:7,consts:[["slot","start"],[3,"click"],["src","../../../assets/icon/ion-icon/arrow-left.svg"],["slot","end",4,"ngIf"],["slot","fixed",3,"ionRefresh"],["class","container container-loading py-5 text-center",4,"ngIf"],[1,"container","p-0"],[1,"card-notify"],[4,"ngFor","ngForOf"],[3,"ionInfinite",4,"ngIf"],["slot","end"],["name","checkmark-done-outline"],[1,"container","container-loading","py-5","text-center"],["src","../../../assets/icon/ion-img/no-data.svg"],[1,"text-muted","mt-4"],[1,"notify-item",3,"click"],[1,"d-flex","align-items-start","justify-content-between","notify-header"],[1,"notify-title"],[1,"notify-time","font-condensed","text-nowrap","mt-1"],[1,"mt-2","notify-body",3,"innerHTML"],[3,"ionInfinite"]],template:function(t,o){1&t&&(e.j41(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),e.bIt("click",function(C){return o.onClose(C)}),e.nrm(4,"ion-icon",2),e.k0s()(),e.j41(5,"ion-title"),e.EFF(6),e.nI1(7,"translate"),e.k0s(),e.DNE(8,s,3,0,"ion-buttons",3),e.k0s()(),e.j41(9,"ion-content")(10,"ion-refresher",4),e.bIt("ionRefresh",function(C){return o.onIonRefresher(C)}),e.nrm(11,"ion-refresher-content"),e.k0s(),e.DNE(12,d,5,3,"div",5),e.j41(13,"div",6)(14,"div",7),e.DNE(15,S,10,7,"ng-container",8),e.k0s()(),e.DNE(16,P,2,0,"ion-infinite-scroll",9),e.k0s()),2&t&&(e.R7$(6),e.JRh(e.bMT(7,5,"Notify")),e.R7$(2),e.Y8G("ngIf",o.totalNotifyUnread),e.R7$(4),e.Y8G("ngIf",o.response&&!o.notifys.length),e.R7$(3),e.Y8G("ngForOf",o.notifys),e.R7$(),e.Y8G("ngIf",o.paging.active))},dependencies:[m.Sq,m.bT,v.Jm,v.QW,v.W9,v.eU,v.iq,v.KW,v.Ax,v.Hp,v.To,v.Ki,v.BC,v.ai,n.D9],styles:["ion-content[_ngcontent-%COMP%]{--background: var(--ion-background-color-primary) !important}.card-notify[_ngcontent-%COMP%]{overflow:hidden;border-top-left-radius:1.5rem;border-top-right-radius:1.5rem}.card-notify[_ngcontent-%COMP%]   .notify-item[_ngcontent-%COMP%]{padding:1rem}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-light[_ngcontent-%COMP%]{background-color:var(--ion-color-light);color:var(--ion-color-light-contrast)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-light[_ngcontent-%COMP%]   .notify-title[_ngcontent-%COMP%]{color:var(--ion-color-dark)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-light[_ngcontent-%COMP%]   .notify-time[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-light[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]{border-color:var(--ion-color-light-shade)!important}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-secondary[_ngcontent-%COMP%]{background-color:var(--ion-color-secondary);color:var(--ion-color-secondary-contrast)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-secondary[_ngcontent-%COMP%]   .notify-title[_ngcontent-%COMP%]{color:var(--ion-color-primary)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-secondary[_ngcontent-%COMP%]   .notify-time[_ngcontent-%COMP%]{color:var(--ion-color-medium)}.card-notify[_ngcontent-%COMP%]   .notify-item.item-color-secondary[_ngcontent-%COMP%] + hr[_ngcontent-%COMP%]{border-color:var(--ion-color-secondary-shade)!important}.card-notify[_ngcontent-%COMP%]   .notify-item[_ngcontent-%COMP%]   .notify-body[_ngcontent-%COMP%]{font-size:.875rem;color:var(--ion-color-medium)}.card-notify[_ngcontent-%COMP%]   hr[_ngcontent-%COMP%]{margin:0}"]}),u})();function w(r,u){if(1&r&&(e.qex(0),e.j41(1,"div")(2,"ion-thumbnail"),e.nrm(3,"img",9),e.k0s()(),e.bVm()),2&r){const i=e.XpG(2);e.R7$(3),e.Y8G("src",i.message.Img,e.B4B)}}function U(r,u){1&r&&(e.qex(0),e.j41(1,"div",10),e.nrm(2,"ion-icon",11),e.k0s(),e.bVm())}function Y(r,u){if(1&r){const i=e.RV6();e.qex(0),e.j41(1,"div",1)(2,"div"),e.qex(3,2),e.DNE(4,w,4,1,"ng-container",3)(5,U,3,0,"ng-container",4),e.bVm(),e.j41(6,"h5",5),e.EFF(7),e.nI1(8,"translate"),e.k0s(),e.nrm(9,"p",6),e.k0s()(),e.j41(10,"div",7)(11,"div")(12,"ion-button",8),e.bIt("click",function(){e.eBV(i);const o=e.XpG();return e.Njj(o.close())}),e.EFF(13),e.nI1(14,"translate"),e.k0s()()(),e.bVm()}if(2&r){let i,t;const o=e.XpG();e.R7$(3),e.Y8G("ngSwitch",o.message.Img?1:0),e.R7$(),e.Y8G("ngSwitchCase",1),e.R7$(3),e.JRh(e.bMT(8,5,null!==(i=o.message.Title)&&void 0!==i?i:"Notice")),e.R7$(2),e.Y8G("innerHTML",o.message.Description,e.npT),e.R7$(4),e.JRh(e.bMT(14,7,null!==(t=o.message.TextClose)&&void 0!==t?t:"Close"))}}g(2385),g(7392),g(5083),g(7762),g(5312),g(3801),g(6841),g(4470),g(3731);let J=(()=>{var r;class u{constructor(t){this.modalController=t}ngOnInit(){}close(){this.modalController.dismiss()}}return(r=u).\u0275fac=function(t){return new(t||r)(e.rXU(v.W3))},r.\u0275cmp=e.VBU({type:r,selectors:[["app-modal-alert"]],inputs:{message:"message"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"d-flex","justify-content-center","px-4","pt-4"],[3,"ngSwitch"],[4,"ngSwitchCase"],[4,"ngSwitchDefault"],[1,"px-3","mt-0","mb-3","text-center"],[1,"my-0","text-center",3,"innerHTML"],[1,"w-100","d-flex","flex-column","p-4"],["color","primary","expand","block","shape","round",3,"click"],[3,"src"],[1,"text-center"],["name","help-outline","color","tertiary"]],template:function(t,o){1&t&&e.DNE(0,Y,15,9,"ng-container",0),2&t&&e.Y8G("ngIf",o.message)},dependencies:[m.bT,m.ux,m.e1,m.fG,v.Jm,v.iq,v.Zx,n.D9],styles:["ion-icon[_ngcontent-%COMP%]{font-size:10rem}ion-thumbnail[_ngcontent-%COMP%]{--size: 6rem;margin:0 auto 1rem}"]}),u})();const E=function(){var r=(0,b.A)(function*(u,i,t){var o,l,C;return!i.message&&t&&(i.message=null!==(C=null==t?void 0:t.Message)&&void 0!==C?C:null!=t&&t.Succeeded?"Th\xe0nh c\xf4ng!":null!=t&&t.StatusCode?`L\u1ed7i: #${null==t?void 0:t.StatusCode}`:"H\u1ec7 th\u1ed1ng kh\xf4ng c\xf3 ph\u1ea3n h\u1ed3i!",i.icon||(i.icon=null!=t&&t.Succeeded?"checkmark-circle-sharp":"alert-circle-outline"),i.color||(i.color=null!=t&&t.Succeeded?"success":"warning")),i.position||(i.position="bottom"),i.icon||(i.icon="bulb-outline"),i.color||(i.color="secondary"),i.duration=null!==(o=i.duration)&&void 0!==o?o:3e3,i.animated=null===(l=i.animated)||void 0===l||l,i.buttons=[{icon:"close-outline",side:"end",role:"cancel"}],yield u.create(i)});return function(i,t,o){return r.apply(this,arguments)}}(),X=function(){var r=(0,b.A)(function*(u,i,t){let o=yield u.create({component:J,componentProps:{selectedId:t.selectedId,message:t.message},cssClass:"ion-modal-small",backdropDismiss:!0,keyboardClose:!0,enterAnimation:l=>I(i,l),leaveAnimation:l=>A(i,l)});o.onDidDismiss().then(l=>{t.fnClose&&t.fnClose(l.data)}),o.present()});return function(i,t,o){return r.apply(this,arguments)}}(),z=function(){var r=(0,b.A)(function*(u,i,t){let o=yield u.create({component:M,componentProps:{selectedId:t.selectedId,message:t.message},cssClass:"ion-modal-small",backdropDismiss:!0,keyboardClose:!0,enterAnimation:l=>I(i,l),leaveAnimation:l=>A(i,l)});o.onDidDismiss().then(l=>{"confirm"==l.role?t.fnConfirm&&t.fnConfirm(l.data):"cancel"==l.role&&t.fnCancel&&t.fnCancel(l.data)}),o.present()});return function(i,t,o){return r.apply(this,arguments)}}(),W=function(){var r=(0,b.A)(function*(u,i,t){let o=yield u.create({component:$,mode:"ios",cssClass:"ion-modal-menu ion-modal-right",backdropDismiss:!0,keyboardClose:!0,enterAnimation:l=>F(i,l),leaveAnimation:l=>K(i,l)});o.onDidDismiss().then(l=>{"confirm"==l.role?null!=t&&t.fnConfirm&&t.fnConfirm(l.data):"cancel"==l.role?null!=t&&t.fnCancel&&t.fnCancel(l.data):"redirect"==l.role&&null!=t&&t.router&&l.data&&(0,p.vb)(null==t?void 0:t.router,l.data),null!=t&&t.fnDismiss&&t.fnDismiss(l)}),o.present()});return function(i,t,o){return r.apply(this,arguments)}}(),F=(r,u)=>{const i=u.shadowRoot,t=r.create().addElement(null==i?void 0:i.querySelector("ion-backdrop")).fromTo("opacity","0.01","var(--backdrop-opacity)"),o=r.create().addElement(null==i?void 0:i.querySelector(".modal-wrapper")).keyframes([{offset:0,transform:"translateX(100%)"},{offset:1,transform:"translateX(0%)"}]);return r.create().addElement(u).easing("ease-out").duration(300).addAnimation([t,o])},K=(r,u)=>F(r,u).direction("reverse"),I=(r,u)=>{const i=u.shadowRoot,t=r.create().addElement(null==i?void 0:i.querySelector("ion-backdrop")).fromTo("opacity","0.01","var(--backdrop-opacity)"),o=r.create().addElement(null==i?void 0:i.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:"0",transform:"scale(0)"},{offset:1,opacity:"0.99",transform:"scale(1)"}]);return r.create().addElement(u).easing("ease-out").duration(300).addAnimation([t,o])},A=(r,u)=>I(r,u).direction("reverse")},3731:(L,k,g)=>{g.d(k,{b:()=>p});var b=g(467);const v=(0,g(5083).F3)("SpeechRecognition",{web:()=>g.e(6852).then(g.bind(g,6852)).then(_=>new _.SpeechRecognitionWeb)});var m=g(4438),n=g(9465),h=g(4842);let T=(()=>{var _;class f{constructor(s,d){this.changeDetectorRef=s,this.modalController=d,this.timeoutSubmit=3e3}ngOnInit(){this.srRegister()}ngAfterViewInit(){this.srStart()}ngOnDestroy(){this.srStop()}submit(){this.issubmit||(this.issubmit=!0,this.modalController.dismiss(this.message,"success")),this.srStop()}srRegister(){var s=this;return(0,b.A)(function*(){v.removeAllListeners().then(()=>{v.addListener("partialResults",d=>{var S;console.log("partialResults",d.matches),null!==(S=d.matches)&&void 0!==S&&S.length&&(s.message=d.matches[0],s.timeoutSubmit=3e3,s.changeDetectorRef.detectChanges())}),v.addListener("listeningState",d=>{console.log("listeningState",d.status),"stoped"==d.status&&(s.issubmit||(s.message?s.submit():s.modalController.dismiss()))})})})()}srStart(){var s=this;return(0,b.A)(function*(){v.start({language:"vi-VN",maxResults:2,prompt:"G\u1ee3i \xfd\nH\xe3y n\xf3i \u0111\u1ecba ch\u1ec9 ho\u1eb7c tr\u1ea1m s\u1ea1c b\u1ea1n mu\u1ed1n t\xecm",partialResults:!0,popup:!1}).then(S=>{console.log(S),s.isrunning=!0,clearInterval(s.intervalTimeoutSubmit),s.intervalTimeoutSubmit=setInterval(()=>{s.timeoutSubmit-=100,s.timeoutSubmit<=0&&(s.submit(),clearInterval(s.intervalTimeoutSubmit))},100)}).catch(S=>{s.srStop()})})()}srStop(){var s=this;return(0,b.A)(function*(){s.isrunning&&(yield v.removeAllListeners(),yield v.stop())})()}srAvailable(){v.available().then(s=>{console.log("available",s),s&&this.srCheck()})}srCheck(){v.checkPermissions().then(s=>{console.log("checkPermissions",s),"prompt"==s.speechRecognition?this.srRequest():"granted"==s.speechRecognition&&this.srStart()})}srRequest(){v.requestPermissions().then(s=>{console.log("requestPermissions",s),"prompt"==s.speechRecognition?this.srRequest():"granted"==s.speechRecognition&&this.srStart()})}}return(_=f).\u0275fac=function(s){return new(s||_)(m.rXU(m.gRc),m.rXU(n.W3))},_.\u0275cmp=m.VBU({type:_,selectors:[["app-modal-voice"]],decls:25,vars:18,consts:[[1,"px-3","py-4"],[1,"text-center"],["src","../../../assets/gif/voice.gif"],[1,"text-primary"],[1,"text-center","mt-4"],["mode","ios","color","primary","size","small","shape","round",3,"click"],[3,"innerHTML"]],template:function(s,d){1&s&&(m.j41(0,"div",0)(1,"div",1)(2,"b"),m.EFF(3),m.nI1(4,"translate"),m.k0s()(),m.j41(5,"div",1)(6,"div"),m.nrm(7,"ion-img",2),m.k0s(),m.j41(8,"div",3)(9,"b"),m.EFF(10),m.k0s()(),m.j41(11,"div",4)(12,"ion-button",5),m.bIt("click",function(){return d.submit()}),m.EFF(13),m.nI1(14,"translate"),m.k0s()()(),m.j41(15,"div",4)(16,"b"),m.EFF(17),m.nI1(18,"translate"),m.k0s(),m.nrm(19,"br")(20,"small",6),m.nI1(21,"translate"),m.nrm(22,"br")(23,"small",6),m.nI1(24,"translate"),m.k0s()()),2&s&&(m.R7$(3),m.JRh(m.bMT(4,8,"SearchByVoice")),m.R7$(2),m.Aen(d.isrunning?"visibility:visible":"visibility:hidden"),m.R7$(5),m.JRh(d.message),m.R7$(3),m.JRh(m.bMT(14,10,"Stop")),m.R7$(4),m.JRh(m.bMT(18,12,"SearchByVoiceSuggest")),m.R7$(3),m.Y8G("innerHTML",m.bMT(21,14,"SearchByVoiceSuggest1"),m.npT),m.R7$(3),m.Y8G("innerHTML",m.bMT(24,16,"SearchByVoiceSuggest2"),m.npT))},dependencies:[n.Jm,n.KW,h.D9],styles:["ion-img[_ngcontent-%COMP%]{width:12rem;margin:auto}"]}),f})();var M=g(2021);const c=function(){var _=(0,b.A)(function*(f){let y=yield f.modalController.create({component:T,backdropDismiss:!0,keyboardClose:!0,cssClass:"ion-modal-auto ion-modal-bottom"});y.onDidDismiss().then(s=>{"success"==s.role?null!=f&&f.fnSuccess&&f.fnSuccess(s.data):null!=f&&f.fnError&&f.fnError(s.data)}),y.present()});return function(y){return _.apply(this,arguments)}}(),p=function(){var _=(0,b.A)(function*(f){(_=>{v.available().then(f=>{f.available?v.checkPermissions().then(y=>{"granted"==y.speechRecognition?_.success():"denied"==y.speechRecognition?_.error("B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!"):("prompt"==y.speechRecognition||"prompt-with-rationale"==y.speechRecognition)&&v.requestPermissions().then(s=>{"granted"==s.speechRecognition?_.success():_.error("denied"==s.speechRecognition?"B\u1ea1n \u0111\xe3 t\u1eeb ch\u1ed1i \u1ee9ng d\u1ee5ng truy c\u1eadp ch\u1ee9c n\u0103ng n\xe0y, h\xe3y b\u1eadt l\u1ea1i n\xf3 trong ph\u1ea7n c\xe0i \u0111\u1eb7t \u1ee9ng d\u1ee5ng tr\xean thi\u1ebft b\u1ecb!":"C\xf3 g\xec \u0111\xf3 kh\xf4ng \u0111\xfang! [#1]")}).catch(s=>{_.error("C\xf3 g\xec \u0111\xf3 kh\xf4ng \u0111\xfang! [#2]")})}).catch(y=>{_.error("C\xf3 g\xec \u0111\xf3 kh\xf4ng \u0111\xfang! [#4]")}):_.error("Thi\u1ebft b\u1ecb kh\xf4ng h\u1ed7 tr\u1ee3 SpeechRecognition, vui l\xf2ng ki\u1ec3m tra l\u1ea1i trong c\u1ea5u h\xecnh c\xe0i \u0111\u1eb7t thi\u1ebft b\u1ecb.")})})({success:()=>{c({modalController:f.modalController,fnSuccess:f.fnSuccess,fnError:f.fnError})},error:y=>{(0,M.cX)(f.toastController,{color:"medium",message:y,duration:1e4}).then(s=>s.present())},warning:y=>{(0,M.cX)(f.toastController,{color:"warning",message:y}).then(s=>{s.onDidDismiss().then(d=>{c({modalController:f.modalController,fnSuccess:f.fnSuccess,fnError:f.fnError})}),s.present()})}})});return function(y){return _.apply(this,arguments)}}()}}]);
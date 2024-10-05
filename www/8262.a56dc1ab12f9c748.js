"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8262],{5454:(P,$,_)=>{_.d($,{K5:()=>c,X1:()=>R,c5:()=>m,cj:()=>o,fy:()=>f,ke:()=>u,nj:()=>e,wP:()=>s});var p=_(467),d=_(5972);const R=function(){var i=(0,p.A)(function*(a){var l,n,r,t,g,v,S,C,b,y,V;a.params=a.params||{},(0,d.Ll)({url:"api/RequestService/create",params:{ServiceId:null!==(l=a.params.ServiceId)&&void 0!==l?l:null,ChargePackageId:null!==(n=a.params.ChargePackageId)&&void 0!==n?n:null,RequestAddress:null!==(r=a.params.RequestAddress)&&void 0!==r?r:null,RequestLat:null!==(t=a.params.RequestLat)&&void 0!==t?t:null,RequestLong:null!==(g=a.params.RequestLong)&&void 0!==g?g:null,DestAddress:null!==(v=a.params.DestAddress)&&void 0!==v?v:null,DestLat:null!==(S=a.params.DestLat)&&void 0!==S?S:null,DestLong:null!==(C=a.params.DestLong)&&void 0!==C?C:null,ExecutionDateAsString:null!==(b=a.params.ExecutionDate)&&void 0!==b?b:null,ExecutionTimeAsString:null!==(y=a.params.ExecutionTime)&&void 0!==y?y:null,Notes:null!==(V=a.params.Notes)&&void 0!==V?V:null},success:k=>{"function"==typeof a.callback&&a.callback(k.data||null)},error:k=>{var q;"function"==typeof a.callback&&a.callback(null==k||null===(q=k.response)||void 0===q?void 0:q.data),console.error(k)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),f=function(){var i=(0,p.A)(function*(a){var l,n,r,t;a.params=a.params||{},(0,d.hm)({url:"api/RequestService/get-myhistory",params:{VRequestStatus:null!==(l=a.params.VRequestStatus)&&void 0!==l?l:null,VRequestStatusMulti:null!==(n=a.params.VRequestStatusMulti)&&void 0!==n?n:null,PageNumber:null!==(r=a.params.PageNumber)&&void 0!==r?r:1,PageSize:null!==(t=a.params.PageSize)&&void 0!==t?t:10},success:g=>{"function"==typeof a.callback&&a.callback(g.data||null)},error:g=>{var v;"function"==typeof a.callback&&a.callback(null==g||null===(v=g.response)||void 0===v?void 0:v.data),console.error(g)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),c=function(){var i=(0,p.A)(function*(a){var l;a.params=a.params||{},(0,d.hm)({url:`api/RequestService/get-detail/${a.params.RequestServiceId}`,params:{RequestServiceId:null!==(l=a.params.RequestServiceId)&&void 0!==l?l:null},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var r;"function"==typeof a.callback&&a.callback(null==n||null===(r=n.response)||void 0===r?void 0:r.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),o=function(){var i=(0,p.A)(function*(a){var l,n;a.params=a.params||{},(0,d.hm)({url:"api/RequestService/get-requesting",params:{PageNumber:null!==(l=a.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(n=a.params.PageSize)&&void 0!==n?n:10},success:r=>{"function"==typeof a.callback&&a.callback(r.data||null)},error:r=>{var t;"function"==typeof a.callback&&a.callback(null==r||null===(t=r.response)||void 0===t?void 0:t.data),console.error(r)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),u=function(){var i=(0,p.A)(function*(a){var l,n;a.params=a.params||{},(0,d.hm)({url:"api/RequestService/get-waitconfirm",params:{PageNumber:null!==(l=a.params.PageNumber)&&void 0!==l?l:1,PageSize:null!==(n=a.params.PageSize)&&void 0!==n?n:10},success:r=>{"function"==typeof a.callback&&a.callback(r.data||null)},error:r=>{var t;"function"==typeof a.callback&&a.callback(null==r||null===(t=r.response)||void 0===t?void 0:t.data),console.error(r)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),m=function(){var i=(0,p.A)(function*(a){var l;a.params=a.params||{},(0,d.Ll)({url:"api/RequestService/wait-confirm",params:{RequestServiceId:null!==(l=a.params.RequestServiceId)&&void 0!==l?l:null},success:n=>{"function"==typeof a.callback&&a.callback(n.data||null)},error:n=>{var r;"function"==typeof a.callback&&a.callback(null==n||null===(r=n.response)||void 0===r?void 0:r.data),console.error(n)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),s=function(){var i=(0,p.A)(function*(a){var l,n;a.params=a.params||{},(0,d.Ll)({url:"api/RequestService/assign",params:{RequestServiceId:null!==(l=a.params.RequestServiceId)&&void 0!==l?l:null,StaffUserId:null!==(n=a.params.StaffUserId)&&void 0!==n?n:null},success:r=>{"function"==typeof a.callback&&a.callback(r.data||null)},error:r=>{var t;"function"==typeof a.callback&&a.callback(null==r||null===(t=r.response)||void 0===t?void 0:t.data),console.error(r)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}(),e=function(){var i=(0,p.A)(function*(a){var l,n;a.params=a.params||{},(0,d.Ll)({url:"api/RequestService/decline",params:{RequestServiceId:null!==(l=a.params.RequestServiceId)&&void 0!==l?l:null,Reason:null!==(n=a.params.Reason)&&void 0!==n?n:null},success:r=>{"function"==typeof a.callback&&a.callback(r.data||null)},error:r=>{var t;"function"==typeof a.callback&&a.callback(null==r||null===(t=r.response)||void 0===t?void 0:t.data),console.error(r)},loading:a.loading,loadingController:a.loadingController})});return function(l){return i.apply(this,arguments)}}()},6471:(P,$,_)=>{_.d($,{z:()=>R});var p=_(467),d=_(5972);const R=function(){var f=(0,p.A)(function*(c){var o,u,m,s;c.params=c.params||{},(0,d.hm)({url:"api/RequestServiceCancelReason/get-list",params:{ServiceId:null!==(o=c.params.ServiceId)&&void 0!==o?o:null,IsReasonForCustomer:null!==(u=c.params.IsReasonForCustomer)&&void 0!==u?u:null,PageNumber:null!==(m=c.params.PageNumber)&&void 0!==m?m:1,PageSize:null!==(s=c.params.PageSize)&&void 0!==s?s:10},success:e=>{"function"==typeof c.callback&&c.callback(e.data||null)},error:e=>{var i;"function"==typeof c.callback&&c.callback(null==e||null===(i=e.response)||void 0===i?void 0:i.data),console.error(e)},loading:c.loading,loadingController:c.loadingController})});return function(o){return f.apply(this,arguments)}}()},9946:(P,$,_)=>{_.d($,{ks:()=>h,sh:()=>f,z:()=>R});var p=_(467),d=_(5972);const R=function(){var c=(0,p.A)(function*(o){o.params=o.params||{},(0,d.hm)({url:"api/User/get-user",params:{},success:u=>{"function"==typeof o.callback&&o.callback(u.data||null)},error:u=>{var m;"function"==typeof o.callback&&o.callback(null==u||null===(m=u.response)||void 0===m?void 0:m.data),console.error(u)},loading:o.loading,loadingController:o.loadingController})});return function(u){return c.apply(this,arguments)}}(),h=function(){var c=(0,p.A)(function*(o){var u,m,s,e,i,a;o.params=o.params||{},(0,d.IH)({url:"api/User/update-user",params:{FullName:null!==(u=o.params.FullName)&&void 0!==u?u:null,PersonEmail:null!==(m=o.params.Email)&&void 0!==m?m:null,Phone:null!==(s=o.params.Phone)&&void 0!==s?s:null,Address:null!==(e=o.params.Address)&&void 0!==e?e:null,Gender:null!==(i=o.params.Gender)&&void 0!==i?i:null,Birthday:null!==(a=o.params.Birthday)&&void 0!==a?a:null},success:l=>{"function"==typeof o.callback&&o.callback(l.data||null)},error:l=>{var n;"function"==typeof o.callback&&o.callback(null==l||null===(n=l.response)||void 0===n?void 0:n.data),console.error(l)},loading:o.loading,loadingController:o.loadingController})});return function(u){return c.apply(this,arguments)}}(),f=function(){var c=(0,p.A)(function*(o){var u,m;o.params=o.params||{},(0,d.IH)({url:"api/User/update-avatar",params:{UserId:null!==(u=o.params.UserId)&&void 0!==u?u:null,Avatar:null!==(m=o.params.Avatar)&&void 0!==m?m:null},success:s=>{"function"==typeof o.callback&&o.callback(s.data||null)},error:s=>{var e;"function"==typeof o.callback&&o.callback(null==s||null===(e=s.response)||void 0===e?void 0:e.data),console.error(s)},loading:o.loading,loadingController:o.loadingController})});return function(u){return c.apply(this,arguments)}}()},6431:(P,$,_)=>{_.d($,{$Y:()=>h,FJ:()=>m,Ix:()=>R,LH:()=>f,P6:()=>c});var p=_(467),d=_(5972);const R=function(){var s=(0,p.A)(function*(e){var i,a,l,n,r,t;e.params=e.params||{},(0,d.Ll)({url:"api/VehicleChargingWorking/start-working",params:{VehicleChargingId:null!==(i=e.params.VehicleChargingId)&&void 0!==i?i:null,StartLat:null!==(a=e.params.StartLat)&&void 0!==a?a:null,StartLong:null!==(l=e.params.StartLong)&&void 0!==l?l:null,StartLocation:null!==(n=e.params.StartLocation)&&void 0!==n?n:null,RemainPowerCapacity:null!==(r=e.params.RemainPowerCapacity)&&void 0!==r?r:null,RemainPowerPercent:null!==(t=e.params.RemainPowerPercent)&&void 0!==t?t:null},success:g=>{"function"==typeof e.callback&&e.callback(g.data||null)},error:g=>{var v;"function"==typeof e.callback&&e.callback(null==g||null===(v=g.response)||void 0===v?void 0:v.data),console.error(g)},loading:e.loading,loadingController:e.loadingController})});return function(i){return s.apply(this,arguments)}}(),h=function(){var s=(0,p.A)(function*(e){var i,a,l,n;e.params=e.params||{},(0,d.Ll)({url:"api/VehicleChargingWorking/end-working",params:{VehicleChargingWorkingId:null!==(i=e.params.VehicleChargingWorkingId)&&void 0!==i?i:null,EndLat:null!==(a=e.params.EndLat)&&void 0!==a?a:null,EndLong:null!==(l=e.params.EndLong)&&void 0!==l?l:null,EndLocation:null!==(n=e.params.EndLocation)&&void 0!==n?n:null},success:r=>{"function"==typeof e.callback&&e.callback(r.data||null)},error:r=>{var t;"function"==typeof e.callback&&e.callback(null==r||null===(t=r.response)||void 0===t?void 0:t.data),console.error(r)},loading:e.loading,loadingController:e.loadingController})});return function(i){return s.apply(this,arguments)}}(),f=function(){var s=(0,p.A)(function*(e){var i,a;e.params=e.params||{},(0,d.hm)({url:"api/VehicleChargingWorking/get-myactive-paging",params:{PageNumber:null!==(i=e.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(a=e.params.PageSize)&&void 0!==a?a:10},success:l=>{"function"==typeof e.callback&&e.callback(l.data||null)},error:l=>{var n;"function"==typeof e.callback&&e.callback(null==l||null===(n=l.response)||void 0===n?void 0:n.data),console.error(l)},loading:e.loading,loadingController:e.loadingController})});return function(i){return s.apply(this,arguments)}}(),c=function(){var s=(0,p.A)(function*(e){var i,a;e.params=e.params||{},(0,d.hm)({url:"api/VehicleChargingWorking/get-active-paging",params:{PageNumber:null!==(i=e.params.PageNumber)&&void 0!==i?i:1,PageSize:null!==(a=e.params.PageSize)&&void 0!==a?a:10},success:l=>{"function"==typeof e.callback&&e.callback(l.data||null)},error:l=>{var n;"function"==typeof e.callback&&e.callback(null==l||null===(n=l.response)||void 0===n?void 0:n.data),console.error(l)},loading:e.loading,loadingController:e.loadingController})});return function(i){return s.apply(this,arguments)}}(),m=function(){var s=(0,p.A)(function*(e){var i,a,l;e.params=e.params||{},(0,d.IH)({url:"api/VehicleChargingWorking/update-power",params:{VehicleChargingWorkingId:null!==(i=e.params.VehicleChargingWorkingId)&&void 0!==i?i:null,RemainPowerCapacity:null!==(a=e.params.RemainPowerCapacity)&&void 0!==a?a:null,RemainPowerPercent:null!==(l=e.params.RemainPowerPercent)&&void 0!==l?l:null},success:n=>{"function"==typeof e.callback&&e.callback(n.data||null)},error:n=>{var r;"function"==typeof e.callback&&e.callback(null==n||null===(r=n.response)||void 0===r?void 0:r.data),console.error(n)},loading:e.loading,loadingController:e.loadingController})});return function(i){return s.apply(this,arguments)}}()}}]);
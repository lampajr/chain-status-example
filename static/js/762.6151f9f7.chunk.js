"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[762,243],{6285:function(e,t,n){var l=n(1935),o=n(3102),r=n(6835),i=n(1050),s=(n(969),n(1089)),c=n(7574);t.Z=function(e){var t,n,a,u,d,f,p,h,j,v,x,m=null!==(t=null!==(n=null===(a=e.check)||void 0===a?void 0:a.conclusion)&&void 0!==n?n:e.conclusion)&&void 0!==t?t:"",Z=null!==(u=null!==(d=null===(f=e.check)||void 0===f?void 0:f.status)&&void 0!==d?d:e.status)&&void 0!==u?u:"";switch(m){case s.B_.CONCLUSION.SUCCESS:return(0,c.jsx)(l.Z,{style:{fontSize:null!==(p=e.size)&&void 0!==p?p:14,color:"#70cf41"}});case s.B_.CONCLUSION.FAILURE:return(0,c.jsx)(o.Z,{style:{fontSize:null!==(h=e.size)&&void 0!==h?h:14,color:"#ff6b6d"}});case s.B_.CONCLUSION.CANCELLED:case s.B_.CONCLUSION.SKIPPED:return(0,c.jsx)(r.Z,{style:{fontSize:null!==(j=e.size)&&void 0!==j?j:14,color:"#faad14"}});case s.B_.CONCLUSION.PENDING:return(0,c.jsx)(i.Z,{style:{fontSize:null!==(v=e.size)&&void 0!==v?v:14,color:"#42a5ff"},spin:!0});default:switch(Z){case s.B_.STATUS.IN_PROGRESS:case s.B_.STATUS.QUEUED:return(0,c.jsx)(i.Z,{style:{fontSize:null!==(x=e.size)&&void 0!==x?x:14,color:"#42a5ff"},spin:!0});default:return null}}}},5762:function(e,t,n){n.r(t),n.d(t,{ListItem:function(){return W},default:function(){return K}});var l=n(4157),o=n(3712),r=n(7099),i=n(4419),s=n(4071),c=n(4066),a=n(969),u=n(9369),d=n(4616),f=n(1089),p=n(4280),h=n(8584),j=n(1308),v=n(5243),x=n(9629),m=n(7798),Z=n(3679),S=n(6234),g=n(7574),y=a.lazy((function(){return n.e(447).then(n.bind(n,8447))})),C=function(e){var t=(0,a.useState)(!0),n=(0,S.Z)(t,2),l=n[0],r=n[1],i=(0,u.v9)((function(e){return e.layout.sectionsShown}));return(0,a.useEffect)((function(){e.project.name&&i.includes((0,h.fE)(e.project))&&r(!1)}),[e.pullRequests,i,i.length,e.project]),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(o.ZP,{header:(0,g.jsx)("h3",{children:"Pull Request List"}),loading:!0}),children:(0,g.jsx)(o.ZP,{header:(0,g.jsx)("h3",{children:"Pull Request List"}),className:"demo-loadmore-list",itemLayout:"vertical",dataSource:e.pullRequests,renderItem:function(t){return(0,g.jsx)(y,{pullRequest:t,project:e.project,loading:l,hideUserAvatar:!1},t.number)}})})},N=n(3028),R=n(5267),b=n(6602),E=n(9717),_=n(7207),O=n(7896),k=n(6666),q=n(5667),U=n.n(q),L=n(33),I=function(e,t){var n={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(l=Object.getOwnPropertySymbols(e);o<l.length;o++)t.indexOf(l[o])<0&&Object.prototype.propertyIsEnumerable.call(e,l[o])&&(n[l[o]]=e[l[o]])}return n},T=function(e){var t,n=a.useContext(L.E_),l=n.getPrefixCls,o=n.direction,r=e.prefixCls,i=e.type,s=void 0===i?"horizontal":i,c=e.orientation,u=void 0===c?"center":c,d=e.orientationMargin,f=e.className,p=e.children,h=e.dashed,j=e.plain,v=I(e,["prefixCls","type","orientation","orientationMargin","className","children","dashed","plain"]),x=l("divider",r),m=u.length>0?"-".concat(u):u,Z=!!p,S="left"===u&&null!=d,g="right"===u&&null!=d,y=U()(x,"".concat(x,"-").concat(s),(t={},(0,k.Z)(t,"".concat(x,"-with-text"),Z),(0,k.Z)(t,"".concat(x,"-with-text").concat(m),Z),(0,k.Z)(t,"".concat(x,"-dashed"),!!h),(0,k.Z)(t,"".concat(x,"-plain"),!!j),(0,k.Z)(t,"".concat(x,"-rtl"),"rtl"===o),(0,k.Z)(t,"".concat(x,"-no-default-orientation-margin-left"),S),(0,k.Z)(t,"".concat(x,"-no-default-orientation-margin-right"),g),t),f),C=(0,O.Z)((0,O.Z)({},S&&{marginLeft:d}),g&&{marginRight:d});return a.createElement("div",(0,O.Z)({className:y},v,{role:"separator"}),p&&a.createElement("span",{className:"".concat(x,"-inner-text"),style:C},p))},w=n(6829),D=n(7347),M=n(2426),A=n.n(M),P=n(9870),z=n(9047),B=function(e,t){return e&&t?new Date(t).getTime()-new Date(e).getTime():0},F=a.lazy((function(){return n.e(536).then(n.bind(n,536))})),G=function(e){var t,n,o=(0,a.useState)(void 0),r=(0,S.Z)(o,2),i=r[0],s=r[1],u=(0,a.useState)(void 0),d=(0,S.Z)(u,2),p=d[0],h=d[1];return(0,a.useEffect)((function(){var t,n;if((null===(t=e.project)||void 0===t||null===(n=t.pullRequests)||void 0===n?void 0:n.length)>0){var l=e.project.pullRequests.flatMap((function(e){return e.checks})),o=l.filter((function(e){return e.conclusion!==f.B_.CONCLUSION.SUCCESS&&e.started_at&&e.completed_at})).map((function(e){return B(e.started_at,e.completed_at)})).filter((function(e){return e>0})),r=l.filter((function(e){return e.conclusion===f.B_.CONCLUSION.SUCCESS&&e.started_at&&e.completed_at})).map((function(e){return B(e.started_at,e.completed_at)})).filter((function(e){return e>0}));h((0,z.j)(o)),s((0,z.j)(r))}}),[e.project]),(0,g.jsx)(b.Z,{className:"site-page-header",title:(0,g.jsx)(E.Z,{type:"link",href:e.project.html_url,target:"_blank",icon:(0,g.jsx)(R.Z,{}),style:(0,N.Z)((0,N.Z)({padding:0},f.AR),{},{fontWeight:"bold"}),children:null!==(t=e.project.name)&&void 0!==t?t:e.project.key}),subTitle:e.project.description,extra:[],children:(0,g.jsxs)(m.Z,{gutter:16,children:[(0,g.jsx)(Z.Z,{children:(0,g.jsx)(_.Z,{title:"Number of Pull Requests",prefix:(0,g.jsx)(l.Z,{}),value:e.project.pullRequests.length,valueStyle:f.AR,suffix:(0,g.jsx)(E.Z,{type:"link",href:e.project.html_url,target:"_blank",icon:(0,g.jsx)(R.Z,{}),style:{padding:0}})})}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)(D.Z,{title:"Error Index",pullRequests:e.project.pullRequests,placement:"right",popoverContent:null!==(n=e.project.pullRequests)&&void 0!==n&&n.length?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(x.Z,{}),children:(0,g.jsx)(F,{project:e.project})}):null})}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)(P.Z,{title:"Average SUCCESS",placement:"right",value:i,popoverContent:void 0===i?"There are no SUCCESS checks to calculation average duration":"The average duration for the success checks",color:"#70cf41"})}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)(P.Z,{title:"Average NO SUCCESS",placement:"right",value:p,popoverContent:void 0===p?"There are no ERROR checks to calculation average duration":"The average duration for the Non Success checks",color:"#ff6b6d"})}),(0,g.jsx)(Z.Z,{children:(0,g.jsx)(T,{type:"vertical",style:{height:"100%"}})}),(0,g.jsxs)(Z.Z,{children:[(0,g.jsx)(_.Z,{title:"Language",valueStyle:(0,N.Z)((0,N.Z)({},f.AR),{},{display:"none"})}),(0,g.jsx)(c.Z,{style:{marginTop:5},children:e.project.language})]}),(0,g.jsxs)(Z.Z,{children:[(0,g.jsx)(_.Z,{title:"Default Branch",valueStyle:(0,N.Z)((0,N.Z)({},f.AR),{},{display:"none"})}),(0,g.jsx)(c.Z,{style:{marginTop:5},children:e.project.default_branch})]}),(0,g.jsx)(Z.Z,{children:e.project.updated_at?(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(x.Z,{style:{fontSize:16}}),children:(0,g.jsx)(w.Z,{date:A()(new Date(Date.parse(e.project.updated_at))).format(f.sR),text:"Since Last Updating",tooltipTitle:"The last time the project was updated"})}):null})]})})},H=function(e){return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(m.Z,{children:(0,g.jsx)(Z.Z,{span:24,children:(0,g.jsx)(G,{project:e.project})})}),(0,g.jsx)(m.Z,{children:(0,g.jsx)(Z.Z,{span:24,style:{padding:24},children:(0,g.jsx)(C,{pullRequests:e.project.pullRequests,project:e.project})})})]})},W=function(e){var t=(0,u.I0)(),n=(0,u.v9)((function(e){return e.pullrequestFilter.filter}));return(0,a.useEffect)((function(){return e.project&&t(d.am((0,h.fE)(e.project))),function(){t(d.el((0,h.fE)(e.project)))}}),[t,n,e.project]),(0,g.jsx)(o.ZP.Item,{id:(0,h.fE)(e.project),style:{marginTop:0,marginBottom:8,padding:0,scrollMarginTop:f.GS},children:(0,g.jsx)(r.Z,{title:(0,g.jsxs)(i.Z.Title,{level:4,children:[(0,g.jsx)(j.Z,{title:"Number of pull requests",value:e.project.pullRequests.length,color:"default",icon:(0,g.jsx)(l.Z,{}),showZero:!0}),e.project.key]}),extra:[(0,g.jsx)(s.Z,{title:"Affected Branches",children:Array.from(new Set(e.project.pullRequests.map((function(e){var t;return null===(t=e.base)||void 0===t?void 0:t.ref})))).filter((function(e){return e})).sort(p.$).map((function(e){return(0,g.jsx)(c.Z,{children:e},e)}))},"affected-branches-tooltip"),(0,g.jsx)(a.Suspense,{fallback:(0,g.jsx)(x.Z,{style:{fontSize:16}}),children:(0,g.jsx)(v.default,{pullRequests:e.project.pullRequests})},"affected-branches-statistics")],style:{width:"100%",marginTop:0,paddingTop:0,marginBottom:0},children:(0,g.jsx)(H,{project:e.project})},e.project.key)})},K=W},1308:function(e,t,n){var l=n(4071),o=n(4066),r=(n(969),n(7574));t.Z=function(e){return e.showZero||e.value>0?e.title?(0,r.jsx)(l.Z,{placement:"top",title:e.title,children:(0,r.jsx)(o.Z,{color:e.color,icon:e.icon,children:e.value})}):(0,r.jsx)(o.Z,{color:e.color,icon:e.icon,children:e.value}):null}},5243:function(e,t,n){n.r(t),n.d(t,{PullRequestStatistics:function(){return v}});var l=n(3028),o=n(6234),r=n(2993),i=n(4071),s=n(9717),c=n(4454),a=n(969),u=n(9369),d=n(4616),f=n(1089),p=n(6285),h=n(1308),j=n(7574),v=function(e){var t=(0,u.I0)(),n=(0,a.useState)([]),v=(0,o.Z)(n,2),x=v[0],m=v[1],Z=(0,a.useState)([]),S=(0,o.Z)(Z,2),g=S[0],y=S[1],C=(0,a.useState)([]),N=(0,o.Z)(C,2),R=N[0],b=N[1],E=(0,a.useState)([]),_=(0,o.Z)(E,2),O=_[0],k=_[1],q=(0,a.useState)(!0),U=(0,o.Z)(q,2),L=U[0],I=U[1],T=function(e,t){return e.reduce((function(e,n){var o=(0,l.Z)({},n);return o.checks=n.checks.filter(t),o.checks.length&&e.push(o),e}),[])};(0,a.useEffect)((function(){I(!0),e.pullRequests.length&&(m(T(e.pullRequests,(function(e){return e.conclusion===f.B_.CONCLUSION.SUCCESS}))),y(T(e.pullRequests,(function(e){return e.conclusion===f.B_.CONCLUSION.FAILURE}))),b(T(e.pullRequests,(function(e){return void 0!==e.status&&[f.B_.STATUS.IN_PROGRESS,f.B_.STATUS.QUEUED].includes(e.status)}))),k(T(e.pullRequests,(function(e){return void 0!==e.conclusion&&[f.B_.CONCLUSION.SKIPPED,f.B_.CONCLUSION.CANCELLED].includes(e.conclusion)})))),I(!1)}),[e.pullRequests]);var w=function(e){return(0,j.jsx)(i.Z,{title:"".concat(e.titlePreffix," Get Check Details (").concat(e.pullRequests.flatMap((function(e){return e.checks})).length,")"),children:(0,j.jsx)(s.Z,{type:"link",style:{padding:0,margin:0},onClick:function(){return n=e.pullRequests,t(d.OA(n));var n},children:e.children})})};return L?(0,j.jsx)(c.Z.Input,{style:{width:150}}):(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(w,{pullRequests:x,titlePreffix:"Number of success checks. ",children:(0,j.jsx)(h.Z,{value:x.flatMap((function(e){return e.checks})).length,color:"success",icon:(0,j.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.SUCCESS})})}),(0,j.jsx)(w,{pullRequests:g,titlePreffix:"Number of failure checks. ",children:(0,j.jsx)(h.Z,{value:g.flatMap((function(e){return e.checks})).length,color:"error",icon:(0,j.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.FAILURE})})}),(0,j.jsx)(w,{pullRequests:R,titlePreffix:"Number of running/queued checks. ",children:(0,j.jsx)(h.Z,{value:R.flatMap((function(e){return e.checks})).length,color:"processing",icon:(0,j.jsx)(p.Z,{status:f.B_.STATUS.IN_PROGRESS})})}),(0,j.jsx)(w,{pullRequests:O,titlePreffix:"Number of skipped/aborted checks. ",children:(0,j.jsx)(h.Z,{value:O.flatMap((function(e){return e.checks})).length,color:"warning",icon:(0,j.jsx)(p.Z,{conclusion:f.B_.CONCLUSION.CANCELLED})})}),e.pullRequests.flatMap((function(e){return e.checks})).length?(0,j.jsx)(w,{pullRequests:e.pullRequests,titlePreffix:"",children:(0,j.jsx)(r.Z,{})}):null]})};t.default=v},7347:function(e,t,n){var l=n(3028),o=n(6234),r=n(3275),i=n(7207),s=n(4071),c=n(7471),a=n(969),u=n(1089),d=n(6946),f=n(7574);t.Z=function(e){var t=(0,a.useState)(void 0),n=(0,o.Z)(t,2),p=n[0],h=n[1],j=(0,a.useState)(u.po.GREEN),v=(0,o.Z)(j,2),x=v[0],m=v[1],Z=e.size?{fontSize:e.size}:u.AR;return(0,a.useEffect)((function(){var t;if(null!==(t=e.pullRequests)&&void 0!==t&&t.length){var n=(0,d.a)(e.pullRequests);h(n),m(n<=20?u.po.GREEN:u.po.RED)}else h(void 0),m(u.po.GREEN)}),[e.pullRequests]),e.popoverContent?(0,f.jsx)(r.Z,{content:e.popoverContent,placement:e.placement,children:(0,f.jsx)(i.Z,{prefix:(0,f.jsx)(s.Z,{title:"This index is calculated by n_failures/n_checks",children:(0,f.jsx)(c.Z,{style:{fontSize:12}})}),title:e.title,value:p,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},Z),{},{color:x,fontWeight:"bold"}),suffix:"%"})}):(0,f.jsx)(i.Z,{title:e.title,value:p,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},Z),{},{color:x,fontWeight:"bold"}),suffix:"%"})}},6829:function(e,t,n){var l=n(4071),o=n(7207),r=(n(969),n(1089)),i=n(7574);t.Z=function(e){return e.tooltipTitle?(0,i.jsx)(l.Z,{title:e.tooltipTitle,children:(0,i.jsx)(o.Z,{title:e.text,loading:!e.date,valueStyle:r.AR,value:e.date?e.date.toLocaleString():void 0})}):(0,i.jsx)(o.Z,{title:e.text,loading:!e.date,valueStyle:r.AR,value:e.date?e.date.toLocaleString():void 0})}},9870:function(e,t,n){var l=n(6234),o=n(8833),r=n(3275),i=n(7207),s=n(3043),c=n.n(s),a=n(969),u=n(1089),d=n(7574);t.Z=function(e){var t=(0,a.useState)(void 0),n=(0,l.Z)(t,2),s=n[0],f=n[1];(0,a.useEffect)((function(){e.value&&f(c()(e.value))}),[e.value]);var p=e.size?{fontSize:e.size}:u.AR;return(0,d.jsx)(r.Z,{content:e.popoverContent,placement:e.placement,children:(0,d.jsx)(i.Z,{title:e.title,prefix:void 0===e.value?null:(0,d.jsx)(o.Z,{style:{color:e.color?e.color:"black"}}),value:void 0===e.value?"No info":s,valueStyle:p})})}},9047:function(e,t,n){n.d(t,{j:function(){return l}});var l=function(e){return e.length>0?e.reduce((function(e,t){return e+t}),0)/e.length:void 0}},4157:function(e,t,n){n.d(t,{Z:function(){return c}});var l=n(3028),o=n(969),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M952 612c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H298a95.92 95.92 0 00-89-60c-53 0-96 43-96 96s43 96 96 96c40.3 0 74.8-24.8 89-60h150.3v152c0 55.2 44.8 100 100 100H952c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H548.3c-15.5 0-28-12.5-28-28V612H952zM451.7 313.7l172.5 136.2c6.3 5.1 15.8.5 15.8-7.7V344h264c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8H640v-98.2c0-8.1-9.4-12.8-15.8-7.7L451.7 298.3a9.9 9.9 0 000 15.4z"}}]},name:"node-collapse",theme:"outlined"},i=n(2717),s=function(e,t){return o.createElement(i.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:r}))};s.displayName="NodeCollapseOutlined";var c=o.forwardRef(s)},5819:function(e){e.exports=function(e){if("number"!==typeof e)throw new TypeError("Expected a number");var t=e>0?Math.floor:Math.ceil;return{days:t(e/864e5),hours:t(e/36e5)%24,minutes:t(e/6e4)%60,seconds:t(e/1e3)%60,milliseconds:t(e)%1e3,microseconds:t(1e3*e)%1e3,nanoseconds:t(1e6*e)%1e3}}},3043:function(e,t,n){var l=n(5819),o=function(e,t){return 1===t?e:"".concat(e,"s")};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!Number.isFinite(e))throw new TypeError("Expected a finite number");t.colonNotation&&(t.compact=!1,t.formatSubMilliseconds=!1,t.separateMilliseconds=!1,t.verbose=!1),t.compact&&(t.secondsDecimalDigits=0,t.millisecondsDecimalDigits=0);var n=[],r=function(e,t){var n=Math.floor(e*Math.pow(10,t)+1e-7);return(Math.round(n)/Math.pow(10,t)).toFixed(t)},i=function(e,l,r,i){if(0!==n.length&&t.colonNotation||0!==e||t.colonNotation&&"m"===r){var s,c;if(i=(i||e||"0").toString(),t.colonNotation){s=n.length>0?":":"",c="";var a=i.includes(".")?i.split(".")[0].length:i.length,u=n.length>0?2:1;i="0".repeat(Math.max(0,u-a))+i}else s="",c=t.verbose?" "+o(l,e):r;n.push(s+i+c)}},s=l(e);if(i(Math.trunc(s.days/365),"year","y"),i(s.days%365,"day","d"),i(s.hours,"hour","h"),i(s.minutes,"minute","m"),t.separateMilliseconds||t.formatSubMilliseconds||!t.colonNotation&&e<1e3)if(i(s.seconds,"second","s"),t.formatSubMilliseconds)i(s.milliseconds,"millisecond","ms"),i(s.microseconds,"microsecond","\xb5s"),i(s.nanoseconds,"nanosecond","ns");else{var c=s.milliseconds+s.microseconds/1e3+s.nanoseconds/1e6,a="number"===typeof t.millisecondsDecimalDigits?t.millisecondsDecimalDigits:0,u=c>=1?Math.round(c):Math.ceil(c),d=a?c.toFixed(a):u;i(Number.parseFloat(d,10),"millisecond","ms",d)}else{var f=e/1e3%60,p="number"===typeof t.secondsDecimalDigits?t.secondsDecimalDigits:1,h=r(f,p),j=t.keepDecimalsOnWholeSeconds?h:h.replace(/\.0+$/,"");i(Number.parseFloat(j,10),"second","s",j)}if(0===n.length)return"0"+(t.verbose?" milliseconds":"ms");if(t.compact)return n[0];if("number"===typeof t.unitCount){var v=t.colonNotation?"":" ";return n.slice(0,Math.max(t.unitCount,1)).join(v)}return t.colonNotation?n.join(""):n.join(" ")}}}]);
//# sourceMappingURL=762.6151f9f7.chunk.js.map
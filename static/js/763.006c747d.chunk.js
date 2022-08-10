"use strict";(self.webpackChunk_kie_chain_status_webpage=self.webpackChunk_kie_chain_status_webpage||[]).push([[763],{4763:function(e,t,n){n.r(t),n.d(t,{Header:function(){return N},default:function(){return W}});var l=n(3028),i=n(6234),a=n(969),s={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 736c0-111.6-65.4-208-160-252.9V317.3c0-15.1-5.3-29.7-15.1-41.2L536.5 95.4C530.1 87.8 521 84 512 84s-18.1 3.8-24.5 11.4L335.1 276.1a63.97 63.97 0 00-15.1 41.2v165.8C225.4 528 160 624.4 160 736h156.5c-2.3 7.2-3.5 15-3.5 23.8 0 22.1 7.6 43.7 21.4 60.8a97.2 97.2 0 0043.1 30.6c23.1 54 75.6 88.8 134.5 88.8 29.1 0 57.3-8.6 81.4-24.8 23.6-15.8 41.9-37.9 53-64a97 97 0 0043.1-30.5 97.52 97.52 0 0021.4-60.8c0-8.4-1.1-16.4-3.1-23.8H864zM762.3 621.4c9.4 14.6 17 30.3 22.5 46.6H700V558.7a211.6 211.6 0 0162.3 62.7zM388 483.1V318.8l124-147 124 147V668H388V483.1zM239.2 668c5.5-16.3 13.1-32 22.5-46.6 16.3-25.2 37.5-46.5 62.3-62.7V668h-84.8zm388.9 116.2c-5.2 3-11.2 4.2-17.1 3.4l-19.5-2.4-2.8 19.4c-5.4 37.9-38.4 66.5-76.7 66.5-38.3 0-71.3-28.6-76.7-66.5l-2.8-19.5-19.5 2.5a27.7 27.7 0 01-17.1-3.5c-8.7-5-14.1-14.3-14.1-24.4 0-10.6 5.9-19.4 14.6-23.8h231.3c8.8 4.5 14.6 13.3 14.6 23.8-.1 10.2-5.5 19.6-14.2 24.5zM464 400a48 48 0 1096 0 48 48 0 10-96 0z"}}]},name:"rocket",theme:"outlined"},o=n(2717),r=function(e,t){return a.createElement(o.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:s}))};r.displayName="RocketOutlined";var c=a.forwardRef(r),d=n(7471),u=n(5267),x=n(2931),f=n(2363),j=n(4454),Z=n(7099),h=n(6602),v=n(4419),p=n(4071),b=n(9717),m=n(7798),g=n(3679),y=n(7207),S=n(3275),z=n(2426),k=n.n(z),R=n(9369),w=n(570),_=n(1089),C=n(1183),E=n(1265),A=n(7574),M=function(e){return(0,A.jsx)(A.Fragment,{children:e.jobs.map((function(t){return(0,A.jsxs)(m.Z,{gutter:[16,16],children:[(0,A.jsx)(g.Z,{flex:"none",children:(0,A.jsx)(v.Z.Text,{ellipsis:!0,style:{fontWeight:"bold"},children:(0,A.jsx)(E.Z,{job:t})})}),(0,A.jsx)(g.Z,{flex:"auto",style:{textAlign:"end"},children:(0,A.jsx)(C.Z,{builds:t.builds,size:12,placement:e.placement})})]},t.id)}))})},T=n(9629),V=function(e){var t=e.size?{fontSize:e.size}:_.AR;return(0,A.jsx)(A.Fragment,{children:e.jobs.map((function(e){return(0,A.jsxs)(m.Z,{gutter:[16,16],children:[(0,A.jsx)(g.Z,{flex:"none",children:(0,A.jsx)(v.Z.Text,{ellipsis:!0,style:{fontWeight:"bold"},children:(0,A.jsx)(E.Z,{job:e})})}),(0,A.jsx)(g.Z,{flex:"auto",style:{textAlign:"end"},children:(0,A.jsx)(y.Z,{prefix:(0,A.jsx)(c,{}),value:e.builds.length,valueStyle:t})})]},e.id)}))})},B=n(6829),D=a.lazy((function(){return n.e(116).then(n.bind(n,4116))})),L=a.lazy((function(){return Promise.all([n.e(53),n.e(489)]).then(n.bind(n,2489))})),N=function(e){var t,n,s,o,r,z,E,N,W,H=(0,R.I0)(),I=(0,R.v9)((function(e){return e.jobFilter.filteredData})),G=(0,R.v9)((function(e){return e.data.loading})),F=(0,a.useState)(new Date),O=(0,i.Z)(F,2),P=O[0],U=O[1],J=(0,a.useState)([]),q=(0,i.Z)(J,2),K=q[0],Q=q[1],X=(0,R.v9)((function(e){return e.product.selectedProduct}));(0,a.useEffect)((function(){null!==I&&void 0!==I&&I.jobs?(U(new Date),Q(I.jobs.flatMap((function(e){return e.builds})))):Q([])}),[I]);return(0,A.jsx)(Z.Z,{style:{margin:24,marginTop:10},children:(0,A.jsx)(h.Z,{title:null!==(t=I.metadata)&&void 0!==t&&t.title?(0,A.jsx)(v.Z.Title,{level:2,style:{marginBottom:18},children:null===(n=I.metadata)||void 0===n?void 0:n.title}):(0,A.jsx)(j.Z.Input,{style:{width:200,marginBottom:15}}),subTitle:null!==(s=null===(o=I.metadata)||void 0===o?void 0:o.subtitle)&&void 0!==s?s:(0,A.jsx)(j.Z.Input,{style:{width:400}}),style:{padding:0},extra:[(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(j.Z.Input,{style:{width:100}}),children:(0,A.jsx)(D,{reloadAction:function(){null!==X&&void 0!==X&&X.folder&&H(w.mu("".concat(null===X||void 0===X?void 0:X.folder,"/latest.json")))},loading:G})},"header_reload_button"),(0,A.jsx)(p.Z,{title:"Show project status information",children:(0,A.jsx)(b.Z,{type:"text",shape:"circle",icon:(0,A.jsx)(d.Z,{}),onClick:function(){return f.Z.info({content:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(j.Z,{}),children:(0,A.jsx)(L,{})}),onOk:function(){},width:1e3,centered:!0})}},"info")},"header_info")],children:(0,A.jsxs)(m.Z,{gutter:16,children:[(0,A.jsx)(g.Z,{children:(0,A.jsx)(y.Z,{title:"Generated By",value:null===(r=I.metadata)||void 0===r?void 0:r.createdBy,valueStyle:_.AR,suffix:null!==(z=I.metadata)&&void 0!==z&&z.createdUrl?(0,A.jsx)(p.Z,{title:"Visit job generating the report",children:(0,A.jsx)(b.Z,{type:"link",href:null===(E=I.metadata)||void 0===E?void 0:E.createdUrl,target:"_blank",icon:(0,A.jsx)(u.Z,{}),style:(0,l.Z)((0,l.Z)({padding:0},_.AR),{},{fontWeight:"bold"})})}):null})}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(S.Z,{content:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(T.Z,{}),children:(0,A.jsx)(V,{jobs:I.jobs,size:12})}),placement:"bottom",children:(0,A.jsx)(y.Z,{title:"Number of Jobs",prefix:(0,A.jsx)(c,{}),value:I.jobs.length,valueStyle:(0,l.Z)((0,l.Z)({},_.AR),{},{fontWeight:"bold"})})})}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(S.Z,{content:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(T.Z,{}),children:(0,A.jsx)(V,{jobs:I.jobs,size:12})}),placement:"bottom",children:(0,A.jsx)(y.Z,{title:"Number of Builds",prefix:(0,A.jsx)(x.Z,{}),value:K.length,valueStyle:_.AR})})}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(C.Z,{title:"Error Index",builds:K,placement:"bottom",popoverContent:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(T.Z,{}),children:(0,A.jsx)(M,{jobs:I.jobs})})})}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(T.Z,{style:{fontSize:16}}),children:(0,A.jsx)(B.Z,{date:null!==(N=I.metadata)&&void 0!==N&&N.date?k()(new Date(Date.parse(null===(W=I.metadata)||void 0===W?void 0:W.date))).format(_.sR):void 0,text:"Creation Date"})})}),(0,A.jsx)(g.Z,{children:(0,A.jsx)(a.Suspense,{fallback:(0,A.jsx)(T.Z,{style:{fontSize:16}}),children:(0,A.jsx)(B.Z,{date:k()(P).format(_.sR),text:"Latest Load"})})})]})})})},W=N},1183:function(e,t,n){var l=n(3028),i=n(6234),a=n(7471),s=n(3275),o=n(7207),r=n(4071),c=n(969),d=n(1089),u=n(4490),x=n(7574);t.Z=function(e){var t=(0,c.useState)(void 0),n=(0,i.Z)(t,2),f=n[0],j=n[1],Z=(0,c.useState)(d.po.GREEN),h=(0,i.Z)(Z,2),v=h[0],p=h[1],b=e.size?{fontSize:e.size}:d.AR;return(0,c.useEffect)((function(){var t;if(null!==(t=e.builds)&&void 0!==t&&t.length){var n=(0,u.aT)(e.builds);j(n),p(n<=20?d.po.GREEN:d.po.RED)}else j(void 0),p(d.po.GREEN)}),[e.builds]),e.popoverContent?(0,x.jsx)(s.Z,{content:e.popoverContent,placement:e.placement,children:(0,x.jsx)(o.Z,{prefix:(0,x.jsx)(r.Z,{title:"This index is calculated by n_failures/n_checks",children:(0,x.jsx)(a.Z,{style:{fontSize:12}})}),title:e.title,value:f,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},b),{},{color:v,fontWeight:"bold"}),suffix:"%"})}):(0,x.jsx)(o.Z,{title:e.title,value:f,precision:2,valueStyle:(0,l.Z)((0,l.Z)({},b),{},{color:v,fontWeight:"bold"}),suffix:"%"})}},6829:function(e,t,n){var l=n(4071),i=n(7207),a=(n(969),n(1089)),s=n(7574);t.Z=function(e){return e.tooltipTitle?(0,s.jsx)(l.Z,{title:e.tooltipTitle,children:(0,s.jsx)(i.Z,{title:e.text,loading:!e.date,valueStyle:a.AR,value:e.date?e.date.toLocaleString():void 0})}):(0,s.jsx)(i.Z,{title:e.text,loading:!e.date,valueStyle:a.AR,value:e.date?e.date.toLocaleString():void 0})}},2931:function(e,t,n){n.d(t,{Z:function(){return r}});var l=n(3028),i=n(969),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M811.4 368.9C765.6 248 648.9 162 512.2 162S258.8 247.9 213 368.8C126.9 391.5 63.5 470.2 64 563.6 64.6 668 145.6 752.9 247.6 762c4.7.4 8.7-3.3 8.7-8v-60.4c0-4-3-7.4-7-7.9-27-3.4-52.5-15.2-72.1-34.5-24-23.5-37.2-55.1-37.2-88.6 0-28 9.1-54.4 26.2-76.4 16.7-21.4 40.2-36.9 66.1-43.7l37.9-10 13.9-36.7c8.6-22.8 20.6-44.2 35.7-63.5 14.9-19.2 32.6-36 52.4-50 41.1-28.9 89.5-44.2 140-44.2s98.9 15.3 140 44.3c19.9 14 37.5 30.8 52.4 50 15.1 19.3 27.1 40.7 35.7 63.5l13.8 36.6 37.8 10c54.2 14.4 92.1 63.7 92.1 120 0 33.6-13.2 65.1-37.2 88.6-19.5 19.2-44.9 31.1-71.9 34.5-4 .5-6.9 3.9-6.9 7.9V754c0 4.7 4.1 8.4 8.8 8 101.7-9.2 182.5-94 183.2-198.2.6-93.4-62.7-172.1-148.6-194.9z"}},{tag:"path",attrs:{d:"M376.9 656.4c1.8-33.5 15.7-64.7 39.5-88.6 25.4-25.5 60-39.8 96-39.8 36.2 0 70.3 14.1 96 39.8 1.4 1.4 2.7 2.8 4.1 4.3l-25 19.6a8 8 0 003 14.1l98.2 24c5 1.2 9.9-2.6 9.9-7.7l.5-101.3c0-6.7-7.6-10.5-12.9-6.3L663 532.7c-36.6-42-90.4-68.6-150.5-68.6-107.4 0-195 85.1-199.4 191.7-.2 4.5 3.4 8.3 8 8.3H369c4.2-.1 7.7-3.4 7.9-7.7zM703 664h-47.9c-4.2 0-7.7 3.3-8 7.6-1.8 33.5-15.7 64.7-39.5 88.6-25.4 25.5-60 39.8-96 39.8-36.2 0-70.3-14.1-96-39.8-1.4-1.4-2.7-2.8-4.1-4.3l25-19.6a8 8 0 00-3-14.1l-98.2-24c-5-1.2-9.9 2.6-9.9 7.7l-.4 101.4c0 6.7 7.6 10.5 12.9 6.3l23.2-18.2c36.6 42 90.4 68.6 150.5 68.6 107.4 0 195-85.1 199.4-191.7.2-4.5-3.4-8.3-8-8.3z"}}]},name:"cloud-sync",theme:"outlined"},s=n(2717),o=function(e,t){return i.createElement(s.Z,(0,l.Z)((0,l.Z)({},e),{},{ref:t,icon:a}))};o.displayName="CloudSyncOutlined";var r=i.forwardRef(o)}}]);
//# sourceMappingURL=763.006c747d.chunk.js.map
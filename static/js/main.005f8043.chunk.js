(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{116:function(e,t,a){},117:function(e,t,a){},126:function(e,t,a){},135:function(e,t,a){"use strict";a.r(t);var r=a(0),O=a.n(r),C=a(13),i=a.n(C),n=(a(116),a(5)),E=(a(117),a(37)),S=a(44),c=a.n(S),o=a(54),R=a(46),l=a(182),s=(a(126),a(16)),T=Object(R.a)({typography:{fontFamily:["fot-seurat-pron","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],fontWeight:600,fontSize:15},palette:{type:"dark"}}),d=[{field:"id",headerName:"Order",sortable:!1,hide:!0},{field:"TASK",headerName:"TASK",flex:5,sortable:!1},{field:"FIRST",headerName:"4-12",flex:2,sortable:!1,editable:!0},{field:"SECOND",headerName:"12-4",flex:2,sortable:!1,editable:!0}];function N(){return Object(s.jsxs)(o.b,{children:[Object(s.jsx)(o.e,{}),Object(s.jsx)(o.c,{}),Object(s.jsx)(o.d,{})]})}var A=function(e){var t=e.tasklist;return Object(s.jsx)(l.a,{theme:T,children:Object(s.jsxs)("div",{style:{display:"flex",height:"100%"},children:[Object(s.jsx)("div",{style:{flexGrow:1}}),Object(s.jsx)("div",{style:{flexGrow:3},children:Object(s.jsx)(o.a,{disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:!0,rows:t,columns:d,hideFooter:!0,rowHeight:38,sortModel:[{field:"id",sort:"asc"}],components:{Toolbar:N}})}),Object(s.jsx)("div",{style:{flexGrow:1}})]})})};function f(e,t){var a,r=Object(E.a)(t);try{for(r.s();!(a=r.n()).done;){var O=a.value;if(O.QUAL.find((function(t){return t===e}))&&""===O.CURRENT)return O.CURRENT=e,O}}catch(C){r.e(C)}finally{r.f()}}function u(e,t){var a,r=Object(E.a)(t);try{for(r.s();!(a=r.n()).done;){var O=a.value;if(O.QUAL.find((function(t){return t===e}))&&""===O.CURRENT&&O.PREV!==e)if("4O"===O.PREV&&"5O"===e);else if("5O"!==O.PREV||"4O"!==e)return O.CURRENT=e,O}}catch(C){r.e(C)}finally{r.f()}}function D(e,t){var a,r=Object(E.a)(t);try{for(r.s();!(a=r.n()).done;){var O=a.value;if(""===O.CURRENT&&O.PREV!==e)return O.CURRENT=e,O}}catch(C){r.e(C)}finally{r.f()}}function b(e,t){!function(e,t){var a,r=Object(E.a)(e);try{for(r.s();!(a=r.n()).done;){var O=a.value;switch(O.CODE){case"AD":O.FIRST="NC";break;case"2L":O.FIRST="TT";break;case"1L":O.FIRST="SB";break;case"5L":O.FIRST="MLS";break;default:var C=f(O.CODE,t);if(void 0===C)break;O.FIRST=C.NAME}}}catch(c){r.e(c)}finally{r.f()}var i,n=Object(E.a)(t);try{for(n.s();!(i=n.n()).done;){var S=i.value;S.PREV=S.CURRENT,S.CURRENT=""}}catch(c){n.e(c)}finally{n.f()}console.log(e)}(e,t);var a=c()(e,7,-1),r=c()(a,8,-1);a=c()(r,7,-1),r=c()(a,-2,12),a=c()(r,-5,13),function(e,t){console.log(e);var a,r=Object(E.a)(e);try{for(r.s();!(a=r.n()).done;){var O=a.value;switch(O.CODE){case"AD":case"2L":case"1L":case"5L":O.SECOND=O.FIRST;break;case"1P":var C=D(O.CODE,t);if(void 0===C)break;O.SECOND=C.NAME;break;default:var i=u(O.CODE,t);if(void 0===i)break;O.SECOND=i.NAME}}}catch(o){r.e(o)}finally{r.f()}var n,S=Object(E.a)(t);try{for(S.s();!(n=S.n()).done;){var c=n.value;c.PREV=c.CURRENT,c.CURRENT=""}}catch(o){S.e(o)}finally{S.f()}}(r=c()(a,19,-1),t)}var P=function(e){var t=e.tasks,a=e.techs,r=e.theme;return b(t,a),Object(s.jsx)("div",{style:{flexGrow:1},children:Object(s.jsx)(A,{tasklist:t,theme:r})})},h=[{id:"02",TASK:"Assessment Lead",CODE:"2L",FIRST:"",SECOND:""},{id:"09",TASK:"PSP Lead",CODE:"1L",FIRST:"",SECOND:""},{id:"18",TASK:"Cutting Lead",CODE:"5L",FIRST:"",SECOND:""},{id:"01",TASK:"Admin",CODE:"AD",FIRST:"",SECOND:""},{id:"07",TASK:"Exurco Operator A",CODE:"4O",FIRST:"",SECOND:""},{id:"08",TASK:"Exurco Operator B",CODE:"4O",FIRST:"",SECOND:""},{id:"06",TASK:"Exurco Circulator",CODE:"4C",FIRST:"",SECOND:""},{id:"04",TASK:"Scalpel Operator A",CODE:"2O",FIRST:"",SECOND:""},{id:"03",TASK:"Scalpel Circulator",CODE:"2C",FIRST:"",SECOND:""},{id:"19",TASK:"Cutting Circulator A",CODE:"5C",FIRST:"",SECOND:""},{id:"20",TASK:"Cutting Operator A",CODE:"5O",FIRST:"",SECOND:""},{id:"21",TASK:"Cutting Operator B",CODE:"5O",FIRST:"",SECOND:""},{id:"22",TASK:"Cutting Circulator B",CODE:"5C",FIRST:"",SECOND:""},{id:"23",TASK:"Cutting Operator C",CODE:"5O",FIRST:"",SECOND:""},{id:"11",TASK:"Snapping Operator A",CODE:"1S",FIRST:"",SECOND:""},{id:"12",TASK:"Snapping Operator B",CODE:"1S",FIRST:"",SECOND:""},{id:"13",TASK:"Snapping Operator C",CODE:"1S",FIRST:"",SECOND:""},{id:"10",TASK:"Snapping Circulator",CODE:"1S",FIRST:"",SECOND:""},{id:"14",TASK:"Plucking Operator A",CODE:"1P",FIRST:"",SECOND:""},{id:"15",TASK:"Plucking Operator B",CODE:"1P",FIRST:"",SECOND:""},{id:"05",TASK:"Scalpel Operator B",CODE:"2O",FIRST:"",SECOND:""},{id:"24",TASK:"Cutting Operator D",CODE:"5O",FIRST:"",SECOND:""},{id:"16",TASK:"Plucking Operator C",CODE:"1P",FIRST:"",SECOND:""},{id:"17",TASK:"Plucking Operator D",CODE:"1P",FIRST:"",SECOND:""}];var j=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e}([{NAME:"AML",QUAL:["2O","2C","4O","4C","1P","AD"],PREV:"",CURRENT:""},{NAME:"CRB",QUAL:["5O","1P","1S"],PREV:"",CURRENT:""},{NAME:"GS",QUAL:["5O","5C","1P","1S"],PREV:"",CURRENT:""},{NAME:"JSM",QUAL:["2O","2C","4O","4C"],PREV:"",CURRENT:""},{NAME:"JBL",QUAL:["2O","2C","4O","4C","1P","5O"],PREV:"",CURRENT:""},{NAME:"JMA",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""},{NAME:"MPP",QUAL:["5O","5C","1P","1S"],PREV:"",CURRENT:""},{NAME:"RPR",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""},{NAME:"SSM",QUAL:["1P","1S"],PREV:"",CURRENT:""}]);var v=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e}([{NAME:"JPR",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"JJ",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"JS",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"JV",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","2L"],PREV:"",CURRENT:""},{NAME:"KTP",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","1L","2L","5L"],PREV:"",CURRENT:""},{NAME:"M3",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"NM",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"TO",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","1L","5L"],PREV:"",CURRENT:""}]),U=j.concat(v),p=a(185),L=Object(R.a)({palette:{type:"dark"}});var F=function(){var e=Object(r.useState)(h),t=Object(n.a)(e,2),a=t[0],O=t[1],C=Object(r.useState)(U),i=Object(n.a)(C,2),E=i[0],S=i[1];return Object(s.jsxs)(l.a,{theme:L,children:[Object(s.jsx)(p.a,{}),Object(s.jsx)("div",{className:"App",style:{display:"flex",height:"100%"},children:Object(s.jsx)(P,{tasks:a,techs:E,setTasks:O,setTechs:S})})]})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,187)).then((function(t){var a=t.getCLS,r=t.getFID,O=t.getFCP,C=t.getLCP,i=t.getTTFB;a(e),r(e),O(e),C(e),i(e)}))};i.a.render(Object(s.jsx)(O.a.StrictMode,{children:Object(s.jsx)(F,{})}),document.getElementById("root")),I()}},[[135,1,2]]]);
//# sourceMappingURL=main.005f8043.chunk.js.map
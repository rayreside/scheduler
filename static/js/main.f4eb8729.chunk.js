(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{125:function(e,t,a){},126:function(e,t,a){},135:function(e,t,a){},144:function(e,t,a){"use strict";a.r(t);var r=a(0),i=a.n(r),O=a(13),n=a.n(O),o=(a(125),a(126),a(44)),l=a(45),C=a.n(l),c=a(55),S=a(47),d=a(188),s=(a(135),a(191)),f=a(17),A=Object(S.a)({typography:{fontFamily:["fot-seurat-pron","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],fontWeight:600,fontSize:15}}),E=[{field:"id",headerName:"Order",sortable:!1,hide:!0},{field:"TASK",headerName:"task",flex:4,sortable:!1},{field:"1",headerName:"1-a",flex:1,sortable:!1,editable:!0},{field:"2",headerName:"1-b",flex:1,sortable:!1,editable:!0},{field:"3",headerName:"2-a",flex:1,sortable:!1,editable:!0},{field:"4",headerName:"2-b",flex:1,sortable:!1,editable:!0},{field:"5",headerName:"3-a",flex:1,sortable:!1,editable:!0},{field:"6",headerName:"3-b",flex:1,sortable:!1,editable:!0},{field:"7",headerName:"4-a",flex:1,sortable:!1,editable:!0},{field:"8",headerName:"4-b",flex:1,sortable:!1,editable:!0}];function u(){return Object(f.jsxs)(c.b,{children:[Object(f.jsx)(c.e,{}),Object(f.jsx)(c.c,{}),Object(f.jsx)(c.d,{})]})}var b=function(e){var t=e.tasklist;return Object(f.jsx)(d.a,{theme:A,children:Object(f.jsxs)(s.a,{py:4,style:{display:"flex"},children:[Object(f.jsx)("div",{style:{flexGrow:1}}),Object(f.jsx)("div",{style:{flexGrow:5},children:Object(f.jsx)(c.a,{disableColumnMenu:!0,disableSelectionOnClick:!0,autoHeight:!0,rows:t,columns:E,hideFooter:!0,rowHeight:38,sortModel:[{field:"id",sort:"asc"}],components:{Toolbar:u}})}),Object(f.jsx)("div",{style:{flexGrow:1}})]})})};function D(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),r=[e[a],e[t]];e[t]=r[0],e[a]=r[1]}return e}function N(e,t,a,r){var i,O=Object(o.a)(a);try{for(O.s();!(i=O.n()).done;){var n=i.value;if(n.NAME===t)n[r]=e}}catch(l){O.e(l)}finally{O.f()}}function T(e,t,a){var r,i=Object(o.a)(t);try{for(i.s();!(r=i.n()).done;){var O=r.value;if(O.QUAL.find((function(t){return t===e}))&&void 0===O[a])return O}}catch(n){i.e(n)}finally{i.f()}}function h(e,t,a){var r,i=Object(o.a)(t);try{for(i.s();!(r=i.n()).done;){var O=r.value;if(O.QUAL.find((function(t){return t===e}))&&void 0===O[a]&&O[a-1]!==e)if("4O"===O[a-1]&&"5O"===e);else if("5O"!==O[a-1]||"4O"!==e)return O}}catch(n){i.e(n)}finally{i.f()}}function p(e,t){var a,r=Object(o.a)(e);try{for(r.s();!(a=r.n()).done;){var i=a.value;if(void 0===i[t]&&"1P"!==i[t-1])return i}}catch(O){r.e(O)}finally{r.f()}}function v(e,t,a){!function(e,t,a){var r,i=Object(o.a)(e);try{for(i.s();!(r=i.n()).done;){var O=r.value;switch(O.CODE){case"AD":O[a]="NC";break;case"2L":O[a]="TT";break;case"1L":O[a]="SB";break;case"5L":O[a]="MLS";break;default:var n=T(O.CODE,t,a);if(void 0===n)break;O[a]=n.NAME,N(O.CODE,n.NAME,t,a)}}}catch(l){i.e(l)}finally{i.f()}}(e,t,a);var r=C()(e,7,-1),i=C()(r,8,-1);r=C()(i,7,-1),i=C()(r,-2,12),r=C()(i,-5,13),function(e,t,a){var r,i=Object(o.a)(e);try{for(i.s();!(r=i.n()).done;){var O=r.value;switch(O.CODE){case"AD":case"2L":case"1L":case"5L":O[a]=O[a-1];break;case"1P":var n=p(t,a);if(void 0===n)break;O[a]=n.NAME,N(O.CODE,n.NAME,t,a);break;default:var l=h(O.CODE,t,a);if(void 0===l)break;O[a]=l.NAME,N(O.CODE,l.NAME,t,a)}}}catch(C){i.e(C)}finally{i.f()}}(i=C()(r,19,-1),t,a+1)}var L=function(e){for(var t=e.tasks,a=e.techf,r=e.techp,i=D(a),O=D(r).concat(i),n=1;n<8;n+=2){v(t,O,n);var o=D(O.slice(-8)),l=D(O.slice(0,9));O=l.concat(o),console.log(O)}return Object(f.jsx)("div",{style:{flexGrow:1},children:Object(f.jsx)(b,{tasklist:t})})},j=[{id:"02",TASK:"Assessment Lead",CODE:"2L",FIRST:"",SECOND:""},{id:"09",TASK:"PSP Lead",CODE:"1L",FIRST:"",SECOND:""},{id:"18",TASK:"Cutting Lead",CODE:"5L",FIRST:"",SECOND:""},{id:"01",TASK:"Admin",CODE:"AD",FIRST:"",SECOND:""},{id:"07",TASK:"Exurco Operator A",CODE:"4O",FIRST:"",SECOND:""},{id:"08",TASK:"Exurco Operator B",CODE:"4O",FIRST:"",SECOND:""},{id:"06",TASK:"Exurco Circulator",CODE:"4C",FIRST:"",SECOND:""},{id:"04",TASK:"Scalpel Operator A",CODE:"2O",FIRST:"",SECOND:""},{id:"03",TASK:"Scalpel Circulator",CODE:"2C",FIRST:"",SECOND:""},{id:"19",TASK:"Cutting Circulator A",CODE:"5C",FIRST:"",SECOND:""},{id:"20",TASK:"Cutting Operator A",CODE:"5O",FIRST:"",SECOND:""},{id:"21",TASK:"Cutting Operator B",CODE:"5O",FIRST:"",SECOND:""},{id:"22",TASK:"Cutting Circulator B",CODE:"5C",FIRST:"",SECOND:""},{id:"23",TASK:"Cutting Operator C",CODE:"5O",FIRST:"",SECOND:""},{id:"11",TASK:"Snapping Operator A",CODE:"1S",FIRST:"",SECOND:""},{id:"12",TASK:"Snapping Operator B",CODE:"1S",FIRST:"",SECOND:""},{id:"13",TASK:"Snapping Operator C",CODE:"1S",FIRST:"",SECOND:""},{id:"10",TASK:"Snapping Circulator",CODE:"1S",FIRST:"",SECOND:""},{id:"14",TASK:"Plucking Operator A",CODE:"1P",FIRST:"",SECOND:""},{id:"15",TASK:"Plucking Operator B",CODE:"1P",FIRST:"",SECOND:""},{id:"05",TASK:"Scalpel Operator B",CODE:"2O",FIRST:"",SECOND:""},{id:"24",TASK:"Cutting Operator D",CODE:"5O",FIRST:"",SECOND:""},{id:"16",TASK:"Plucking Operator C",CODE:"1P",FIRST:"",SECOND:""},{id:"17",TASK:"Plucking Operator D",CODE:"1P",FIRST:"",SECOND:""}],M=[{NAME:"JPR",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"]},{NAME:"JJ",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"]},{NAME:"JS",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"]},{NAME:"JV",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","2L"]},{NAME:"KTP",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","1L","2L","5L"]},{NAME:"M3",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"]},{NAME:"NM",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"]},{NAME:"TO",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C","1L","5L"]}],x=[{NAME:"AML",QUAL:["2O","2C","4O","4C","1P","AD"]},{NAME:"CRB",QUAL:["5O","1P","1S"]},{NAME:"GS",QUAL:["5O","5C","1P","1S"]},{NAME:"JSM",QUAL:["2O","2C","4O","4C"]},{NAME:"JBL",QUAL:["2O","2C","4O","4C","1P","5O"]},{NAME:"JMA",QUAL:["2O","2C","4O","4C","5O"]},{NAME:"MPP",QUAL:["5O","5C","1P","1S"]},{NAME:"RPR",QUAL:["2O","2C","4O","4C","5O"]},{NAME:"SSM",QUAL:["1P","1S"]}];var P=function(){return Object(f.jsx)("div",{className:"App",children:Object(f.jsx)(L,{tasks:j,techf:M,techp:x})})},F=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,194)).then((function(t){var a=t.getCLS,r=t.getFID,i=t.getFCP,O=t.getLCP,n=t.getTTFB;a(e),r(e),i(e),O(e),n(e)}))};n.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(P,{})}),document.getElementById("root")),F()}},[[144,1,2]]]);
//# sourceMappingURL=main.f4eb8729.chunk.js.map
(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{113:function(e,t,r){},114:function(e,t,r){},115:function(e,t,r){},124:function(e,t,r){"use strict";r.r(t);var a=r(0),C=r.n(a),E=r(13),O=r.n(E),n=(r(113),r(5)),S=(r(114),r(64)),i=r(86),c=r(44),o=r(168),A=(r(115),r(25)),N=Object(c.a)({typography:{fontFamily:["fot-seurat-pron","-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],fontWeight:600,fontSize:20}}),T=[{field:"id",headerName:"Order",width:130},{field:"TASK",headerName:"Task",width:300,sortable:"false"},{field:"ASSIGNED",headerName:"Assigned",width:300,sortable:"false"}],s=function(e){var t=e.tasklist;return Object(A.jsx)(o.a,{theme:N,children:Object(A.jsx)(i.a,{disableColumnMenu:!0,autoHeight:!0,rows:t,columns:T,sortModel:[{field:"id",sort:"asc"}]})})};function R(e,t){var r,a=Object(S.a)(t);try{for(a.s();!(r=a.n()).done;){var C=r.value;if(C.QUAL.find((function(t){return t===e}))&&""===C.CURRENT)return C.CURRENT=e,C}}catch(E){a.e(E)}finally{a.f()}}var l=function(e){var t=e.tasks,r=e.techs;e.setTasks;return function(e,t){var r,a=Object(S.a)(e);try{for(a.s();!(r=a.n()).done;){var C=r.value,E=R(C.CODE,t);if(void 0===E)break;C.ASSIGNED=E.NAME}}catch(c){a.e(c)}finally{a.f()}var O,n=Object(S.a)(t);try{for(n.s();!(O=n.n()).done;){var i=O.value;i.PREV=i.CURRENT,i.CURRENT=""}}catch(c){n.e(c)}finally{n.f()}}(t,r),Object(A.jsx)("div",{children:Object(A.jsx)(s,{tasklist:t})})},u=[{id:"04",TASK:"Exurco Operator A",CODE:"4O",ASSIGNED:""},{id:"05",TASK:"Exurco Operator B",CODE:"4O",ASSIGNED:""},{id:"06",TASK:"Exurco Circulator",CODE:"4C",ASSIGNED:""},{id:"07",TASK:"Snapping Operator A",CODE:"1S",ASSIGNED:""},{id:"08",TASK:"Snapping Operator B",CODE:"1S",ASSIGNED:""},{id:"09",TASK:"Snapping Operator C",CODE:"1S",ASSIGNED:""},{id:"14",TASK:"Cutting Operator A",CODE:"5O",ASSIGNED:""},{id:"15",TASK:"Cutting Operator B",CODE:"5O",ASSIGNED:""},{id:"17",TASK:"Cutting Operator C",CODE:"5O",ASSIGNED:""},{id:"18",TASK:"Cutting Operator D",CODE:"5O",ASSIGNED:""},{id:"16",TASK:"Cutting Circulator A",CODE:"5C",ASSIGNED:""},{id:"19",TASK:"Cutting Circulator B",CODE:"5C",ASSIGNED:""},{id:"10",TASK:"Plucking Operator A",CODE:"1P",ASSIGNED:""},{id:"11",TASK:"Plucking Operator B",CODE:"1P",ASSIGNED:""},{id:"12",TASK:"Plucking Operator C",CODE:"1P",ASSIGNED:""},{id:"13",TASK:"Plucking Operator D",CODE:"1P",ASSIGNED:""},{id:"01",TASK:"Scalpel Operator A",CODE:"2O",ASSIGNED:""},{id:"03",TASK:"Scalpel Circulator",CODE:"2C",ASSIGNED:""},{id:"02",TASK:"Scalpel Operator B",CODE:"2O",ASSIGNED:""}];var d=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}return e}([{NAME:"Tech1",QUAL:["2O","2C","4O","4C","1P","1S"],PREV:"",CURRENT:""},{NAME:"Tech2",QUAL:["2O","2C","4O","4C","1P","1S"],PREV:"",CURRENT:""},{NAME:"Tech3",QUAL:["2O","2C","4O","4C","1P"],PREV:"",CURRENT:""},{NAME:"Tech4",QUAL:["1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech5",QUAL:["1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech6",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""},{NAME:"Tech7",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""}]);var h=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),a=[e[r],e[t]];e[t]=a[0],e[r]=a[1]}return e}([{NAME:"Tech8",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech9",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech10",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech11",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech12",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech13",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech14",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech15",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech16",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech17",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""}]),D=d.concat(h);var P=function(){var e=Object(a.useState)(u),t=Object(n.a)(e,2),r=t[0],C=t[1],E=Object(a.useState)(D),O=Object(n.a)(E,2),S=O[0];return O[1],Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(l,{tasks:r,techs:S,setTasks:C})})},f=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,174)).then((function(t){var r=t.getCLS,a=t.getFID,C=t.getFCP,E=t.getLCP,O=t.getTTFB;r(e),a(e),C(e),E(e),O(e)}))};O.a.render(Object(A.jsx)(C.a.StrictMode,{children:Object(A.jsx)(P,{})}),document.getElementById("root")),f()}},[[124,1,2]]]);
//# sourceMappingURL=main.aea584f0.chunk.js.map
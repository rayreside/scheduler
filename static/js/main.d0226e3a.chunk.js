(this.webpackJsonpscheduler=this.webpackJsonpscheduler||[]).push([[0],{113:function(e,t,r){},114:function(e,t,r){},115:function(e,t,r){},124:function(e,t,r){"use strict";r.r(t);var C=r(0),E=r.n(C),O=r(13),a=r.n(O),S=(r(113),r(5)),n=(r(114),r(64)),A=r(85),c=(r(115),r(26)),i=[{field:"id",headerName:"Order",hide:"true"},{field:"TASK",headerName:"Task",width:300},{field:"ASSIGNED",headerName:"Assigned",width:300}],o=function(e){var t=e.tasklist;return Object(c.jsx)(A.a,{autoHeight:!0,rows:t,columns:i,sortModel:[{field:"id",sort:"asc"}]})};function N(e,t){var r,C=Object(n.a)(t);try{for(C.s();!(r=C.n()).done;){var E=r.value;if(E.QUAL.find((function(t){return t===e}))&&""===E.CURRENT)return E.CURRENT=e,E}}catch(O){C.e(O)}finally{C.f()}}var T=function(e){var t=e.tasks,r=e.techs;e.setTasks;return function(e,t){var r,C=Object(n.a)(e);try{for(C.s();!(r=C.n()).done;){var E=r.value,O=N(E.CODE,t);if(void 0===O)break;E.ASSIGNED=O.NAME}}catch(c){C.e(c)}finally{C.f()}var a,S=Object(n.a)(t);try{for(S.s();!(a=S.n()).done;){var A=a.value;A.PREV=A.CURRENT,A.CURRENT=""}}catch(c){S.e(c)}finally{S.f()}}(t,r),Object(c.jsx)("div",{children:Object(c.jsx)(o,{tasklist:t})})},R=[{id:"04",TASK:"Exurco Operator A",CODE:"4O",ASSIGNED:""},{id:"05",TASK:"Exurco Operator B",CODE:"4O",ASSIGNED:""},{id:"06",TASK:"Exurco Circulator",CODE:"4C",ASSIGNED:""},{id:"07",TASK:"Snapping Operator A",CODE:"1S",ASSIGNED:""},{id:"08",TASK:"Snapping Operator B",CODE:"1S",ASSIGNED:""},{id:"09",TASK:"Snapping Operator C",CODE:"1S",ASSIGNED:""},{id:"14",TASK:"Cutting Operator A",CODE:"5O",ASSIGNED:""},{id:"15",TASK:"Cutting Operator B",CODE:"5O",ASSIGNED:""},{id:"17",TASK:"Cutting Operator C",CODE:"5O",ASSIGNED:""},{id:"18",TASK:"Cutting Operator D",CODE:"5O",ASSIGNED:""},{id:"16",TASK:"Cutting Circulator A",CODE:"5C",ASSIGNED:""},{id:"19",TASK:"Cutting Circulator B",CODE:"5C",ASSIGNED:""},{id:"10",TASK:"Plucking Operator A",CODE:"1P",ASSIGNED:""},{id:"11",TASK:"Plucking Operator B",CODE:"1P",ASSIGNED:""},{id:"12",TASK:"Plucking Operator C",CODE:"1P",ASSIGNED:""},{id:"13",TASK:"Plucking Operator D",CODE:"1P",ASSIGNED:""},{id:"01",TASK:"Scalpel Operator A",CODE:"2O",ASSIGNED:""},{id:"03",TASK:"Scalpel Circulator",CODE:"2C",ASSIGNED:""},{id:"02",TASK:"Scalpel Operator B",CODE:"2O",ASSIGNED:""}];var d=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),C=[e[r],e[t]];e[t]=C[0],e[r]=C[1]}return e}([{NAME:"Tech1",QUAL:["2O","2C","4O","4C","1P","1S"],PREV:"",CURRENT:""},{NAME:"Tech2",QUAL:["2O","2C","4O","4C","1P","1S"],PREV:"",CURRENT:""},{NAME:"Tech3",QUAL:["2O","2C","4O","4C","1P"],PREV:"",CURRENT:""},{NAME:"Tech4",QUAL:["1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech5",QUAL:["1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech6",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""},{NAME:"Tech7",QUAL:["2O","2C","4O","4C","5O"],PREV:"",CURRENT:""}]);var u=function(e){for(var t=e.length-1;t>0;t--){var r=Math.floor(Math.random()*(t+1)),C=[e[r],e[t]];e[t]=C[0],e[r]=C[1]}return e}([{NAME:"Tech8",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech9",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech10",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech11",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech12",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech13",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech14",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech15",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech16",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""},{NAME:"Tech17",QUAL:["2O","2C","4O","4C","1P","1S","5O","5C"],PREV:"",CURRENT:""}]),s=d.concat(u);var h=function(){var e=Object(C.useState)(R),t=Object(S.a)(e,2),r=t[0],E=t[1],O=Object(C.useState)(s),a=Object(S.a)(O,2),n=a[0];return a[1],Object(c.jsx)("div",{className:"App",children:Object(c.jsx)(T,{tasks:r,techs:n,setTasks:E})})},l=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,173)).then((function(t){var r=t.getCLS,C=t.getFID,E=t.getFCP,O=t.getLCP,a=t.getTTFB;r(e),C(e),E(e),O(e),a(e)}))};a.a.render(Object(c.jsx)(E.a.StrictMode,{children:Object(c.jsx)(h,{})}),document.getElementById("root")),l()}},[[124,1,2]]]);
//# sourceMappingURL=main.d0226e3a.chunk.js.map
(this["webpackJsonpbudget-app-v2"]=this["webpackJsonpbudget-app-v2"]||[]).push([[6],{56:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"fetchBudget",(function(){return u})),t.d(r,"fetchBudgetedCategories",(function(){return l})),t.d(r,"addTransaction",(function(){return s}));var a={};t.r(a),t.d(a,"fetchAllCategories",(function(){return p}));var c=t(19),o=t.n(c),i=t(26),u=function(){var e=Object(i.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://my-json-server.typicode.com/dawidrynkal/budgetAppData","/budgets/1/?_embed=transactions"));case 2:return n=e.sent,console.log("https://my-json-server.typicode.com/dawidrynkal/budgetAppData"),e.next=6,n.json();case 6:return t=e.sent,e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),l=function(){var e=Object(i.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://my-json-server.typicode.com/dawidrynkal/budgetAppData","/budgets/1/budgetCategories"));case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,e.abrupt("return",t);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),s=function(){var e=Object(i.a)(o.a.mark((function e(n){var t,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.budgetId,r=n.values,e.next=3,fetch("".concat("https://my-json-server.typicode.com/dawidrynkal/budgetAppData","/budgets/").concat(t,"/transactions"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});case 3:return a=e.sent,e.abrupt("return",a.json());case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=Object(i.a)(o.a.mark((function e(){var n,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://my-json-server.typicode.com/dawidrynkal/budgetAppData","/categories/?_expand=parentCategory"));case 2:return n=e.sent,t=n.json(),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n.a={budget:r,common:a}},64:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return E}));var r=t(16),a=t(0),c=t.n(a),o=t(27),i=t(56),u=t(60),l=t(58),s=t(4),p=t(2);function d(){var e=Object(s.a)(["\n  font-family: sans-serif;\n\n  h1 {\n    text-align: center;\n    color: #222;\n  }\n\n  & > div {\n    text-align: center;\n  }\n\n  a {\n    display: block;\n    text-align: center;\n    color: #222;\n  }\n\n  form {\n    max-width: 500px;\n    margin: 10px auto;\n    border: 1px solid #ccc;\n    padding: 20px;\n    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);\n    border-radius: 3px;\n\n    & > div {\n      display: flex;\n      flex-flow: row nowrap;\n      line-height: 2em;\n      margin: 5px;\n      & > label {\n        color: #333;\n        width: 110px;\n        font-size: 1em;\n        line-height: 32px;\n      }\n      & > input,\n      & > select,\n      & > textarea {\n        flex: 1;\n        padding: 3px 5px;\n        font-size: 1em;\n        margin-left: 15px;\n        border: 1px solid #ccc;\n        border-radius: 3px;\n      }\n      & > input[type='checkbox'] {\n        margin-top: 7px;\n      }\n      & > div {\n        margin-left: 16px;\n        & > label {\n          display: block;\n          & > input {\n            margin-right: 3px;\n          }\n        }\n      }\n    }\n    & > .buttons {\n      display: flex;\n      flex-flow: row nowrap;\n      justify-content: center;\n      margin-top: 15px;\n    }\n    button {\n      margin: 0 10px;\n      &[type='submit'] {\n        ",";\n      }\n      &[type='button'] {\n        ",";\n      }\n    }\n    pre {\n      border: 1px solid #ccc;\n      background: rgba(0, 0, 0, 0.1);\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n      padding: 20px;\n    }\n  }\n"]);return d=function(){return e},e}function m(){var e=Object(s.a)(["\n  "," color: #555;\n"]);return m=function(){return e},e}function b(){var e=Object(s.a)(["\n  white-space: nowrap;\n  display: inline-block;\n  border-radius: 5px;\n  padding: 5px 15px;\n  font-size: 16px;\n  color: white;\n  &:visited {\n    color: white;\n  }\n  background-image: linear-gradient(",", ",");\n  border: 1px solid ",";\n  &:hover {\n    background-image: linear-gradient(",", ",");\n    &[disabled] {\n      background-image: linear-gradient(",", ",");\n    }\n  }\n  &:visited {\n    color: black;\n  }\n  &[disabled] {\n    opacity: 0.6;\n    cursor: not-allowed;\n  }\n"]);return b=function(){return e},e}var f=function(e,n){return Object(p.css)(b(),e,n,n,e,n,e,n)},g=Object(p.css)(m(),f("#ffffff","#d5d5d5")),v=f("#4f93ce","#285f8f"),x=p.default.div(d(),v,g),h=function(e){return e?void 0:"Required"};var y=function(e){var n=e.onSubmit,t=void 0===n?l.noop:n,o=e.categories,i=e.groupCategoriesBy,s=i?Object(l.groupBy)(o,i):null,p=Object(a.useMemo)((function(){return s?Object.entries(s).map((function(e){var n=Object(r.a)(e,2),t=n[0],a=n[1];return c.a.createElement("optgroup",{key:t,label:t},a.map((function(e){return c.a.createElement("option",{key:e.id,value:e.id},e.name)})))})):o.map((function(e){return c.a.createElement("option",{value:e.id},e.name)}))}),[s,o]);return c.a.createElement(x,null,c.a.createElement(u.b,{onSubmit:t,render:function(e){var n=e.handleSubmit,t=e.form,r=e.submitting,a=e.pristine,o=e.values;return c.a.createElement("form",{onSubmit:n},c.a.createElement(u.a,{name:"description",validate:h},(function(e){var n=e.input,t=e.meta;return c.a.createElement("div",null,c.a.createElement("label",null,"Description "),c.a.createElement("input",Object.assign({},n,{type:"text",placeholder:"Description"})),t.error&&t.touched&&c.a.createElement("span",null,t.error))})),c.a.createElement(u.a,{name:"amount",validate:h,parse:function(e){return parseFloat(e,10)}},(function(e){var n=e.input,t=e.meta;return c.a.createElement("div",null,c.a.createElement("label",null,"Amount"),c.a.createElement("input",Object.assign({},n,{type:"number",placeholder:"Amount",step:"0.01"})),t.error&&t.touched&&c.a.createElement("span",null,t.error))})),c.a.createElement(u.a,{name:"categoryId",validate:h},(function(e){var n=e.input,t=e.meta;return c.a.createElement("div",null,c.a.createElement("label",null,"Category"),c.a.createElement("select",Object.assign({},n,{type:"text",placeholder:"Category"}),p),t.error&&t.touched&&c.a.createElement("span",null,t.error))})),c.a.createElement(u.a,{name:"date",validate:h},(function(e){var n=e.input,t=e.meta;return c.a.createElement("div",null,c.a.createElement("label",null,"Date"),c.a.createElement("input",Object.assign({},n,{type:"date",placeholder:"Date"})),t.error&&t.touched&&c.a.createElement("span",null,t.error))})),c.a.createElement("div",{className:"buttons"},c.a.createElement("button",{type:"submit",disabled:r},"Submit"),c.a.createElement("button",{type:"button",onClick:t.reset,disabled:r||a},"Reset")),c.a.createElement("pre",null,JSON.stringify(o,0,2)))}}))},j=t(3);var E=function(){var e=Object(o.c)("budget",i.a.budget.fetchBudget),n=e.data,t=e.refetch,a=Object(o.c)("allCategories",i.a.common.fetchAllCategories).data,u=Object(o.b)(i.a.budget.addTransaction),l=Object(r.a)(u,1)[0],s=Object(j.f)();return c.a.createElement(y,{categories:a,groupCategoriesBy:"parentCategory.name",onSubmit:function(e){l({budgetId:n.id,values:e}).then((function(){return t()})).then((function(){return s.goBack()}))}})}}}]);
//# sourceMappingURL=6.3d44442a.chunk.js.map
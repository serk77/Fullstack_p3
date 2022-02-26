(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{41:function(e,n,t){"use strict";t.r(n);var c=t(17),a=t.n(c),i=t(8),o=t(3),r=t(1),u=t(0),s=function(e){return Object(u.jsxs)("div",{children:["filter: ",Object(u.jsx)("input",{onChange:e.handleFilter,value:e.filter})]})},d=function(e){return Object(u.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(u.jsxs)("div",{children:["name: ",Object(u.jsx)("input",{onChange:e.handleNameChange,value:e.newName})]}),Object(u.jsxs)("div",{children:["number: ",Object(u.jsx)("input",{onChange:e.handlePhoneChange,value:e.phone})]}),Object(u.jsx)("div",{children:Object(u.jsx)("button",{type:"submit",children:"add"})})]})},h=function(e){return Object(u.jsx)("div",{children:e.filter?e.persons.filter((function(n){return n.name.includes(e.filter)})).map((function(e){return Object(u.jsxs)("p",{children:[e.name," ",e.phone]},e.id)})):e.persons.map((function(n){return Object(u.jsxs)("p",{children:[n.name," ",n.phone," ",Object(u.jsx)("button",{onClick:function(){return e.deletePerson(n.id,n.name)},children:"Delete"})]},n.id)}))})},j=t(4),l=t.n(j),f="http://localhost:3001/api/persons",b=function(){return l.a.get(f).then((function(e){return e.data}))},m=function(e){return console.log(e),l.a.post(f,e).then((function(e){return e.data}))},O=function(e){return l.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},p=function(e,n){return l.a.put("".concat(f).concat(e),n).then((function(e){return e.data}))},x=function(e){return Object(u.jsxs)("div",{className:e.style,children:[e.text," ",e.name]})},v=function(){var e=Object(r.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(""),j=Object(o.a)(a,2),l=j[0],f=j[1],v=Object(r.useState)(""),w=Object(o.a)(v,2),g=w[0],S=w[1],y=Object(r.useState)(""),C=Object(o.a)(y,2),T=C[0],k=C[1],N=Object(r.useState)(!1),P=Object(o.a)(N,2),D=P[0],A=P[1],E=Object(r.useState)(""),F=Object(o.a)(E,2),J=F[0],B=F[1],I=Object(r.useState)(),U=Object(o.a)(I,2),q=U[0],z=U[1],G=Object(r.useState)("notification"),H=Object(o.a)(G,2),K=H[0],L=H[1];Object(r.useEffect)((function(){b().then((function(e){c(e)}))}),[]);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h2",{children:"Phonebook"}),D&&Object(u.jsx)(x,{text:J,name:q,style:K}),Object(u.jsx)(s,{handleFilter:function(e){k(e.target.value)},filter:T}),Object(u.jsx)("h2",{children:"Add a new number"}),Object(u.jsx)(d,{handleSubmit:function(e){e.preventDefault();var n={name:l,phone:g},a=t.some((function(e){return e.name===l})),o=t.find((function(e){return e.name===l})),r=Object(i.a)(Object(i.a)({},o),{},{phone:g});a?window.confirm("".concat(l," ia already added to phonebook, replace the old number with a new one?"))&&p(o.id,r).then((function(e){c(t.map((function(n){return n.id!==o.id?n:e}))),L("notification"),B("Updated "),z(o.name),A(!D),setTimeout((function(){A(!1)}),5e3)})).catch((function(e){406===e.response.status?(L("warning"),B("".concat(e.response.data.error)),z(" "),A(!D),setTimeout((function(){A(!1)}),5e3)):(L("warning"),B("This number was already deleted from the phonebook: "),z(o.name),A(!D),setTimeout((function(){A(!1)}),5e3))})):m(n).then((function(e){c(t.concat(e)),L("notification"),B("Added "),z(e.name),A(!D),setTimeout((function(){A(!1)}),5e3)})).catch((function(e){L("warning"),B("".concat(e.response.data.error)),z(" "),A(!D),setTimeout((function(){A(!1)}),5e3)})),f(""),S("")},handleNameChange:function(e){f(e.target.value)},handlePhoneChange:function(e){S(e.target.value)},newName:l,phone:g}),Object(u.jsx)("h2",{children:"Numbers"}),Object(u.jsx)(h,{filter:T,persons:t,deletePerson:function(e,n){window.confirm("Delete ".concat(n,"?"))&&O(e).then((function(){var a=t.filter((function(n){return n.id!==e}));c(a),L("notification"),B("Succesfully deleted "),z(n),A(!D),setTimeout((function(){A(!1)}),5e3)})).catch((function(){L("warning"),B("Number is already deleted from the phonebook: "),z(n),A(!D),setTimeout((function(){A(!1)}),5e3)}))}})]})};a.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.8f4bc37c.chunk.js.map
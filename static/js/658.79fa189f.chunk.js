"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[658],{5658:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var a,r,s=t(4942),c=t(1413),i=t(885),l=t(2791),u=t(9676),o=t(184),m=function(){var e=(0,u.wY)().data,n=(0,l.useState)({name:"",number:""}),t=(0,i.Z)(n,2),a=t[0],r=t[1],m=(0,u.Tn)(),d=(0,i.Z)(m,1)[0],f=function(e){var n=e.currentTarget,t=n.name,a=n.value;r((function(e){return(0,c.Z)((0,c.Z)({},e),{},(0,s.Z)({},t,a))}))};return(0,o.jsxs)("form",{className:"contacts-form",onSubmit:function(n){n.preventDefault(),e.some((function(e){return e.name===a.name}))?alert("".concat(a.name," is already in contact list")):(d(a),r({name:"",number:""}))},children:["Name",(0,o.jsx)("label",{className:"contacts-form__name-label",children:(0,o.jsx)("input",{className:"contacts-form__input",type:"text",name:"name",value:a.name,onChange:f,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})}),(0,o.jsxs)("label",{className:"contacts-form__name-label",children:["Number",(0,o.jsx)("input",{className:"contacts-form__input",type:"tel",name:"number",value:a.number,onChange:f,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,o.jsx)("button",{className:"new-contact-btn",type:"submit",children:"Add contact"})]})},d="Filter_filterContainer__8G57N",f="Filter_filterInput__1Cysk",h=t(8535),p=t(3661),x=function(){var e=(0,h.v9)((function(e){return e.filterValue.value})),n=(0,h.I0)();return(0,o.jsxs)("div",{className:d,children:[(0,o.jsx)("p",{children:"Find contacts by name"}),(0,o.jsx)("input",{className:f,name:"filter",value:e,onChange:function(e){n((0,p.Qt)(e.currentTarget.value))}})]})},b=t(2982),_=t(168),j=t(3299),v=j.Z.section(a||(a=(0,_.Z)(["\n  list-style-type: square;\n\n  margin-left: auto;\n  margin-right: 0px;\n  max-width: 400px;\n  width: 400px;\n"]))),N=j.Z.h2(r||(r=(0,_.Z)(["\n  text-align: center;\n  font-size: 40px;\n"])));var g=function(){var e=(0,u.wY)().data,n=(0,u.Nt)(),t=(0,i.Z)(n,2),a=t[0],r=t[1].isFetching,s=(0,h.v9)((function(e){return e.filterValue.value}));return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(v,{className:"contacts",children:[(0,o.jsx)(N,{className:"contacts__title",children:"Contacts"}),(0,o.jsx)("ul",{className:"contacts",children:e&&function(){if(e)return(0,b.Z)(e).filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase())}))}().map((function(e){var n=e.name,t=e.number,s=e.id;return(0,o.jsxs)("li",{className:"contacts__item",children:[(0,o.jsxs)("p",{children:["\u2022 ",n," : ",t]}),(0,o.jsx)("button",{type:"button",className:"contacts__del-btn",onClick:function(){return a(s)},disabled:r,children:"Delete"})]},s)}))})]})})},Z=function(){return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h1",{children:"Add new contact"}),(0,o.jsx)(m,{}),(0,o.jsx)(x,{}),(0,o.jsx)(g,{})]})}}}]);
//# sourceMappingURL=658.79fa189f.chunk.js.map
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[559],{2559:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=n(4420),c="ContactListItem_contact-list-item__xfxDY",s="ContactListItem_contact-del-btn__ayQlY",r=n(184),l=function(e){var t=e.contact,n=e.handleDeleteContact,a=t.id,l=t.name,o=t.number;return(0,r.jsxs)("li",{className:c,children:[(0,r.jsxs)("span",{children:[l,":"]}),(0,r.jsx)("span",{children:o}),(0,r.jsx)("button",{type:"button",onClick:function(){return n(a)},className:s,children:"Delete"})]})},o=n(3634),i=n(3553),u=function(e){return e.contactsGroup},m=(0,i.P1)(u,(function(e){return e.items})),d=(0,i.P1)(u,(function(e){return e.filter})),f=(0,i.P1)([m,d],(function(e,t){return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(t.trim().toLowerCase())}))})),h=n(2791),_="ContactList_contact-list__GnW-D",x=function(){var e=(0,a.I0)(),t=(0,a.v9)(f);(0,h.useEffect)((function(){e((0,o.yF)())}),[e]);var n=function(t){var n=(0,o.GK)(t);e(n)};return(0,r.jsx)("ul",{className:_,children:null===t||void 0===t?void 0:t.map((function(e){return(0,r.jsx)(l,{contact:e,handleDeleteContact:n},e.id)}))})},p="Filter_filter-label__memAx",j="Filter_filter-label-text__+jugc",v="Filter_filter-input__dFgnI",C=n(1538),b=function(){var e=(0,a.I0)(),t=(0,a.v9)(d);return(0,r.jsx)("div",{children:(0,r.jsxs)("label",{className:p,children:[(0,r.jsx)("span",{className:j,children:"Find contacts by name"}),(0,r.jsx)("input",{className:v,type:"text",name:"keywords",onChange:function(t){var n=t.target.value,a=(0,C.T)(n);e(a)},value:t,placeholder:"Search..."})]})})},N=n(9439),F="FormAddContacts_contact-form__FtNV5",k="FormAddContacts_contact-form-label__kamQo",w="FormAddContacts_label-text__qkSDO",y="FormAddContacts_contact-form-input__HoNYX",g="FormAddContacts_contact-form-btn__WF9aE",A=n(2564),D=function(){var e=(0,h.useState)(""),t=(0,N.Z)(e,2),n=t[0],c=t[1],s=(0,h.useState)(""),l=(0,N.Z)(s,2),i=l[0],u=l[1],d=(0,a.I0)(),f=(0,a.v9)(m),_=function(){c(""),u("")};return(0,r.jsxs)("form",{className:F,onSubmit:function(e){if(e.preventDefault(),f.some((function(e){return e.name.toLowerCase()===n.toLowerCase()})))A.Am.warning("A contact with this name already exists!");else{var t={name:n,number:i},a=(0,o.uK)(t);d(a),A.Am.success("Contact ".concat(n," successfully added")),_()}},children:[(0,r.jsxs)("label",{className:k,children:[(0,r.jsx)("span",{className:w,children:"Name"}),(0,r.jsx)("input",{className:y,type:"text",name:"name",value:n,onChange:function(e){c(e.target.value)},placeholder:"Enter name",required:!0})]}),(0,r.jsxs)("label",{className:k,children:[(0,r.jsx)("span",{className:w,children:"Phone number"}),(0,r.jsx)("input",{className:y,type:"tel",name:"phone",value:i,onChange:function(e){u(e.target.value)},placeholder:"000-00-00",required:!0})]}),(0,r.jsx)("button",{className:g,type:"submit",children:"Add contact"})]})},L=n(4270),I=function(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(L.q,{children:(0,r.jsx)("title",{children:"Contacts"})}),(0,r.jsx)("h1",{className:"page-title",children:"Phonebook"}),(0,r.jsx)(D,{}),(0,r.jsx)("h2",{className:"contact-title",children:"Contacts"}),(0,r.jsx)(b,{}),(0,r.jsx)(x,{})]})}}}]);
//# sourceMappingURL=559.ba89c83a.chunk.js.map
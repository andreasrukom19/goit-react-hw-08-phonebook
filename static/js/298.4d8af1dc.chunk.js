"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[298],{6298:function(t,e,n){n.r(e),n.d(e,{default:function(){return L}});var a=n(4420),r="ContactListItem_contact-list-item__xfxDY",c="ContactListItem_contact-del-btn__ayQlY",s=n(184),o=function(t){var e=t.contact,n=t.handleDeleteContact,a=e.id,o=e.name,l=e.phone;return(0,s.jsxs)("li",{className:r,children:[(0,s.jsxs)("span",{children:[o,":"]}),(0,s.jsx)("span",{children:l}),(0,s.jsx)("button",{type:"button",onClick:function(){return n(a)},className:c,children:"Delete"})]})},l=n(3634),i="ContactList_contact-list__GnW-D",u=n(3553),m=function(t){return t.contactsGroup},d=(0,u.P1)(m,(function(t){return t.items})),f=(0,u.P1)(m,(function(t){return t.filter})),h=(0,u.P1)([d,f],(function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.trim().toLowerCase())}))})),_=n(2791),p=function(){var t=(0,a.I0)(),e=(0,a.v9)(h);(0,_.useEffect)((function(){t((0,l.yF)())}),[t]);var n=function(e){var n=(0,l.GK)(e);t(n)};return(0,s.jsx)("ul",{className:i,children:e.map((function(t){return(0,s.jsx)(o,{contact:t,handleDeleteContact:n},t.id)}))})},x="Filter_filter-label__memAx",j="Filter_filter-label-text__+jugc",v="Filter_filter-input__dFgnI",C=n(1538),b=function(){var t=(0,a.I0)(),e=(0,a.v9)(f);return(0,s.jsx)("div",{children:(0,s.jsxs)("label",{className:x,children:[(0,s.jsx)("span",{className:j,children:"Find contacts by name"}),(0,s.jsx)("input",{className:v,type:"text",name:"keywords",onChange:function(e){var n=e.target.value,a=(0,C.T)(n);t(a)},value:e,placeholder:"Search..."})]})})},N=n(9439),g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(t)).reduce((function(t,e){return t+=(e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_"}),"")},F="FormAddContacts_contact-form__FtNV5",y="FormAddContacts_contact-form-label__kamQo",k="FormAddContacts_label-text__qkSDO",w="FormAddContacts_contact-form-input__HoNYX",A="FormAddContacts_contact-form-btn__WF9aE",D=function(){var t=(0,_.useState)(""),e=(0,N.Z)(t,2),n=e[0],r=e[1],c=(0,_.useState)(""),o=(0,N.Z)(c,2),i=o[0],u=o[1],m=(0,a.I0)(),f=(0,a.v9)(d),h=function(){r(""),u("")};return(0,s.jsxs)("form",{className:F,onSubmit:function(t){if(t.preventDefault(),f.some((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("A contact with this name already exists!");else{var e={id:g(),name:n,phone:i},a=(0,l.uK)(e);m(a),h()}},children:[(0,s.jsxs)("label",{className:y,children:[(0,s.jsx)("span",{className:k,children:"Name"}),(0,s.jsx)("input",{className:w,type:"text",name:"name",value:n,onChange:function(t){r(t.target.value)},placeholder:"Enter name",id:g(),required:!0})]}),(0,s.jsxs)("label",{className:y,children:[(0,s.jsx)("span",{className:k,children:"Phone number"}),(0,s.jsx)("input",{className:w,type:"tel",name:"phone",value:i,onChange:function(t){u(t.target.value)},placeholder:"000-00-00",required:!0})]}),(0,s.jsx)("button",{className:A,type:"submit",children:"Add contact"})]})},L=function(){return(0,s.jsxs)("div",{children:[(0,s.jsx)("h1",{className:"page-title",children:"Phonebook"}),(0,s.jsx)(D,{}),(0,s.jsx)("h2",{className:"contact-title",children:"Contacts"}),(0,s.jsx)(b,{}),(0,s.jsx)(p,{})]})}}}]);
//# sourceMappingURL=298.4d8af1dc.chunk.js.map
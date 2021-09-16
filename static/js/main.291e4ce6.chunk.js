(this["webpackJsonpfeefo-ui-assessment"]=this["webpackJsonpfeefo-ui-assessment"]||[]).push([[0],{24:function(n,e,r){},30:function(n,e,r){"use strict";r.r(e);var t=r(0),a=r(1),i=r.n(a),c=r(14),o=r.n(c),s=(r(24),r(3)),l=r(4),d=r(18),u=Object(a.createContext)(),m=r(5),f=r(6);function j(){var n=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  width: 16.1rem;\n  margin-left: 0.7rem;\n  & h3 {\n    font-size: 0.8rem;\n    color: #3f3c3d;\n  }\n  .icon,\n  a {\n    color: #555;\n  }\n  .contacts {\n    display: flex;\n    flex-wrap: wrap;\n    & a {\n      margin: 0 0.6rem 0 0.3rem;\n      font-size: 0.8rem;\n      &:hover,\n      &:focus {\n        color: #00a152;\n      }\n    }\n    & a:last-child {\n      margin-left: auto;\n    }\n  }\n  @media (max-width: 360px) {\n    .contacts {\n      & a:last-child {\n        margin: 0;\n        display: block;\n      }\n    }\n  }\n"]);return j=function(){return n},n}var b=l.a.div(j());function x(n){var e=n.email,r=n.name,a=n.number;return Object(t.jsxs)(b,{children:[Object(t.jsx)("h3",{children:r}),Object(t.jsxs)("div",{className:"contacts",children:[Object(t.jsx)(m.a,{className:"icon",icon:f.a}),Object(t.jsx)("a",{rel:"noopener noreferrer",href:"mailto:".concat(e),children:e}),Object(t.jsx)("a",{rel:"noopener noreferrer",href:"tel:".concat(a.split(" ").join("")),children:a})]})]})}x.defaultProps={name:"Support",email:"",number:""};var p=x;function h(){var n=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: bolder;\n  font-size: 0.9rem;\n  height: 2.5rem;\n  min-width: 2.5rem;\n  border-radius: 0.5rem;\n  background-color: #ffc732;\n"]);return h=function(){return n},n}var v=l.a.aside(h());function O(n){var e=n.name,r=e.split(" "),a=r[0][0]+(r.length>1?r[r.length-1][0]:"");return Object(t.jsx)(v,{children:e&&a})}O.defaultProps={name:"Support"};var g=O;function w(){var n=Object(s.a)(["\n  flex: 4;\n  & h2 {\n    font-size: 0.85rem;\n    margin-bottom: 0.65rem;\n    color: #706b6b;\n  }\n  .card {\n    display: flex;\n  }\n  @media (max-width: 599px) {\n    margin: 0;\n  }\n  @media (min-width: 600px) {\n    margin: auto;\n  }\n"]);return w=function(){return n},n}var y=l.a.section(w());var P=function(){var n=Object(a.useContext)(u).supportContact;return Object(t.jsxs)(y,{children:[Object(t.jsx)("h2",{children:"YOUR FEEFO SUPPORT CONTACT"}),Object(t.jsxs)("div",{className:"card",children:[Object(t.jsx)(g,{name:n.name}),Object(t.jsx)(p,Object(d.a)({"aria-label":"feefo support contact information"},n))]})]})};function A(){var n=Object(s.a)(["\n  display: flex;\n  & h1 {\n    flex: 3;\n    font-weight: normal;\n    color: #3f3c3d;\n  }\n  @media (max-width: 599px) {\n    flex-direction: column;\n    margin: 0rem 1rem 2rem;\n    & h1 {\n      margin-bottom: 1.7rem;\n    }\n  }\n  @media (min-width: 600px) {\n    align-items: center;\n    margin-bottom: 2.35rem;\n  }\n"]);return A=function(){return n},n}var N=l.a.div(A());var S=function(){return Object(t.jsxs)(N,{children:[Object(t.jsx)("h1",{children:"Account Overview"}),Object(t.jsx)(P,{})]})};function z(){var n=Object(s.a)(["\n  flex: 1;\n  padding: 1rem 1.15rem 1.2rem;\n  background-color: #fdfdfd;\n  border-top: 1px solid #e7e7e7;\n  .percent {\n    font-weight: bolder;\n    font-size: 2rem;\n    color: #00a152;\n  }\n  .label {\n    font-weight: bolder;\n    font-size: 0.845rem;\n    line-height: 0.45rem;\n    color: #757070;\n  }\n"]);return z=function(){return n},n}var C=l.a.div(z());function k(n){var e=n.percent,r=n.text;return Object(t.jsxs)(C,{children:[Object(t.jsxs)("p",{className:"percent",children:[e,"%"]}),Object(t.jsx)("p",{className:"label",children:r.toUpperCase()})]})}k.defaultProps={percent:0,text:""};var U=k;function T(){var n=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.35rem;\n  & h2 {\n    font-size: 1rem;\n    margin-left: 0.5rem;\n    color: #2d2d2d;\n  }\n  .upload {\n    color: #00a9e4;\n  }\n  .info {\n    margin-left: auto;\n    color: #b7b2b3;\n    &:hover,\n    &:focus {\n      cursor: pointer;\n      color: #959091;\n    }\n  }\n"]);return T=function(){return n},n}function E(){var n=Object(s.a)(["\n  padding: 0.8rem 1.15rem 1.3rem;\n  .salesText {\n    font-size: 0.85rem;\n    color: #555;\n  }\n"]);return E=function(){return n},n}var J=l.a.div(E()),F=l.a.div(T());function I(n){var e=n.uploadsAdded,r=n.linesAdded;return Object(t.jsxs)(J,{children:[Object(t.jsxs)(F,{children:[Object(t.jsx)(m.a,{className:"upload",icon:f.c}),Object(t.jsx)("h2",{children:"Sales"}),Object(t.jsx)(m.a,{"aria-hidden":"false","aria-label":"information circle icon",tabIndex:"0",className:"info",icon:f.b})]}),Object(t.jsxs)("p",{className:"salesText",children:["You had ",Object(t.jsxs)("strong",{children:[e," uploads"]})," and"," ",Object(t.jsx)("strong",{children:r})," lines added."]})]})}I.defaultProps={uploadsAdded:0,linesAdded:0};var M=I;function R(){var n=Object(s.a)(["\n  @media (max-width: 599px) {\n    flex-direction: column;\n    & div:last-child {\n      border-radius: 0 0 7px 7px;\n    }\n  }\n  @media (min-width: 600px) {\n    display: flex;\n    justify-content: space-between;\n    & div:first-child {\n      border-right: 1px solid #e7e7e7;\n      border-radius: 0 0 0 7px;\n    }\n    & div:last-child {\n      border-radius: 0 0 7px 0;\n    }\n  }\n"]);return R=function(){return n},n}function Y(){var n=Object(s.a)(["\n  box-shadow: 3px 3px 12px #eee;\n  border-radius: 7px;\n  background-color: white;\n"]);return Y=function(){return n},n}var B=l.a.div(Y()),D=l.a.div(R());var q=function(){var n=Object(a.useContext)(u).salesOverview,e=n.uploads,r=n.successfulUploads,i=n.linesAttempted,c=n.linesSaved,o=function(n,e){return Math.floor(100*e/n)};return Object(t.jsxs)(B,{children:[Object(t.jsx)(M,{uploadsAdded:r,linesAdded:c,"aria-label":"Sales Panel containing sales overview"}),Object(t.jsxs)(D,{children:[Object(t.jsx)(U,{percent:o(e,r),text:"upload success","aria-label":"Percentage Panel containing successful uploads"}),Object(t.jsx)(U,{percent:o(i,c),text:"lines saved","aria-label":"Percentage Panel containing saved lines"})]})]})};function G(){var n=Object(s.a)(["\n  max-width: min(100%, 41.2rem);\n  background-color: #f2f2f2;\n  @media (max-width: 599px) {\n    padding: 1.4rem 3% 2.4rem;\n    margin: 0 auto;\n  }\n  @media (min-width: 600px) {\n    padding: 1.4rem 2.2rem 2.4rem 2.65rem;\n    margin: 2rem auto;\n  }\n"]);return G=function(){return n},n}var H=l.a.section(G()),K=function(){return Object(t.jsxs)(H,{children:[Object(t.jsx)(S,{}),Object(t.jsx)(q,{"aria-label":"Account Panel"})]})};var L=function(){return Object(t.jsx)(u.Provider,{value:{supportContact:{name:"John Smith",email:"john.smith@feefo.com",number:"020 3362 4208"},salesOverview:{uploads:8,successfulUploads:3,linesAttempted:20,linesSaved:4,lastUploadDate:1605001226079}},children:Object(t.jsx)(K,{})})};o.a.render(Object(t.jsx)(i.a.StrictMode,{children:Object(t.jsx)(L,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.291e4ce6.chunk.js.map
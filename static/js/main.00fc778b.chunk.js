(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(n,e,t){n.exports=t(28)},21:function(n,e,t){},28:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(4),c=t.n(o),u=(t(21),t(5)),i=t(11),l=t(3),d=t(1),f=t(12),s=t.n(f),m=t(2);function b(){var n=Object(d.a)(["\n  background-color: green;\n  display: block;\n  min-width: 200px;\n  max-width: 400px;\n  padding: 10px;\n  border: none;\n  box-shadow: 0 10px 6px -6px #777;\n"]);return b=function(){return n},n}var p=m.a.button(b()),v=function(n){var e=n.onButtonClicked,t=n.link;return a.a.createElement(p,{href:t||null,onClick:function(){e&&e()}},n.children)};function g(){var n=Object(d.a)(["\n  :hover {\n    background-color: red;\n    opacity: 0.7;\n  }\n"]);return g=function(){return n},n}function k(){var n=Object(d.a)(["\n  background-color: light-red;\n"]);return k=function(){return n},n}var h=m.a.ul(k()),j=m.a.li(g()),y=function(n){var e=n.listItems,t=n.deleteHandler;return a.a.createElement(h,null,Object.entries(e).map(function(n,e){return a.a.createElement(j,{key:e,onClick:function(){t(n[0])}},a.a.createElement("p",null,n[0],"=",n[1]))}))};function E(){var n=Object(d.a)(["\n  flex-grow: 2;\n  background-color: lightblue;\n"]);return E=function(){return n},n}function x(){var n=Object(d.a)(["\n  background-color: grey;\n  padding: 40px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n"]);return x=function(){return n},n}function O(){var n=Object(d.a)(["\n  grid-column: span 2;\n  background-color: orange;\n"]);return O=function(){return n},n}function w(){var n=Object(d.a)(["\n  background: lightgrey;\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(250px, 1fr));\n  grid-template-rows: 20% auto;\n  grid-gap: 40px;\n  padding: 0 40px;\n"]);return w=function(){return n},n}var C=/([\w|\d]+)(?:\s)*(?:=){1}(?:\s)*([\w|\d]+)/,S=m.a.div(w()),B=m.a.div(O()),A=m.a.div(x()),I=m.a.div(E()),J=function(){var n=Object(r.useState)({key:"value",secondKey:"secondValue"}),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(""),d=Object(l.a)(c,2),f=d[0],m=d[1],b=Object(r.useState)(""),p=Object(l.a)(b,2),g=p[0],k=p[1];Object(r.useEffect)(function(){k("export.jsontext/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t)))},[t]);var h=function(n){return C.test(n)},j=function(n){return C.exec(n)};return a.a.createElement(S,null,a.a.createElement(B,null,a.a.createElement("form",{onSubmit:function(n){if(n.preventDefault(),h(f)){var e=j(f),r=Object(l.a)(e,3),a=(r[0],r[1]),c=r[2];if(t[a])return void alert("a unique <key> is required");var d=Object(i.a)(Object(u.a)({},a,c),t);o(d),m("")}else alert("Must submit in a <key>=<value> format. Alphanumerics only")}},a.a.createElement("label",null,a.a.createElement("textarea",{value:f,onChange:function(n){m(n.target.value)}})),a.a.createElement(v,{type:"submit",value:"Submit"},"Submit"))),a.a.createElement(A,null,a.a.createElement(v,{link:g},"Export to JSON"),a.a.createElement(v,{onButtonClicked:function(){var n={};Object.keys(t).sort(function(n,e){return t[n].localeCompare(t[e])}).forEach(function(e){n[e]=t[e]}),o(n)}},"Sort Values Alphabetically"),a.a.createElement(v,{onButtonClicked:function(){var n={};Object.keys(t).sort().forEach(function(e){n[e]=t[e]}),o(n)}},"Sort keys Alphabetically"),a.a.createElement(v,{onButtonClicked:function(){o({}),m("")}},"Clear All")),a.a.createElement(I,null,a.a.createElement(y,{listItems:t,deleteHandler:function(n){var e=s.a.omit(t,n);o(e)}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.00fc778b.chunk.js.map
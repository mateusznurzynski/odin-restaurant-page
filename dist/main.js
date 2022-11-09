(()=>{"use strict";var t,e,n,r,o,a,i,c,s,l,p,u,d,f,h={426:(t,e,n)=>{n.d(e,{Z:()=>d});var r=n(81),o=n.n(r),a=n(645),i=n.n(a),c=n(667),s=n.n(c),l=new URL(n(559),n.b),p=i()(o()),u=s()(l);p.push([t.id,"html {\n\tbox-sizing: border-box;\n}\n*,\n*::after,\n*::before {\n\tbox-sizing: inherit;\n\tmargin: 0;\n\tpadding: 0;\n}\n:root {\n\t--font-color: black;\n\t--placeholder-color: greenyellow;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\na {\n\ttext-decoration: none;\n\tcolor: var(--font-color);\n}\n\nnav {\n\theight: 50px;\n\tbackground-color: var(--placeholder-color);\n\tdisplay: flex;\n\tjustify-content: space-between;\n\talign-items: center;\n\twidth: 100%;\n\tgap: 20px;\n}\n\n.nav-item {\n\tpadding: 20px;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tgap: 50px;\n}\n\n.tabs {\n\tdisplay: flex;\n\tgap: 25px;\n}\n\n.icons {\n\tdisplay: flex;\n\tgap: 5px;\n}\n\n.heading {\n\tdisplay: flex;\n\tbackground-image: url("+u+");\n\theight: 200px;\n\twidth: 100%;\n}\n",""]);const d=p},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<t.length;l++){var p=[].concat(t[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],c=0;c<t.length;c++){var s=t[c],l=r.base?s[0]+r.base:s[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var h=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:h,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var c=n(a[i]);e[c].references--}for(var s=r(t,o),l=0;l<a.length;l++){var p=n(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},559:(t,e,n)=>{t.exports=n.p+"601bc249762124499396.jpg"}},v={};function g(t){var e=v[t];if(void 0!==e)return e.exports;var n=v[t]={id:t,exports:{}};return h[t](n,n.exports,g),n.exports}g.m=h,g.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return g.d(e,{a:e}),e},g.d=(t,e)=>{for(var n in e)g.o(e,n)&&!g.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},g.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),g.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;g.g.importScripts&&(t=g.g.location+"");var e=g.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var n=e.getElementsByTagName("script");n.length&&(t=n[n.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),g.p=t})(),g.b=document.baseURI||self.location.href,g.nc=void 0,t=g(379),e=g.n(t),n=g(795),r=g.n(n),o=g(569),a=g.n(o),i=g(565),c=g.n(i),s=g(216),l=g.n(s),p=g(589),u=g.n(p),d=g(426),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=l(),e()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,console.log("Test!")})();
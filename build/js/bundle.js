function scrollNav(){document.querySelectorAll(".header__navegacion-principal a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();document.querySelector(e.target.attributes.href.nodeValue).scrollIntoView({behavior:"smooth"})}))}))}function navegacionFija(){const e=document.querySelector(".header");new IntersectionObserver((function(n){n[0].isIntersecting?e.classList.remove("fijo"):e.classList.add("fijo")})).observe(document.querySelector(".video"))}function crearGaleria(){const e=document.querySelector(".galeria__imagenes");for(let n=1;n<=12;n++){const t=document.createElement("IMG");t.src=`build/img/thumb/${n}.webp`,t.dataset.imagenId=n,t.onclick=mostrarImagen;const o=document.createElement("LI");o.appendChild(t),e.appendChild(o)}}function mostrarImagen(e){const n=parseInt(e.target.dataset.imagenId),t=document.createElement("IMG");t.src=`build/img/grande/${n}.webp`;const o=document.createElement("DIV");o.appendChild(t),o.classList.add("overlay"),o.onclick=()=>{o.remove(),i.classList.remove("fijar-body")};const a=document.createElement("P");a.textContent="X",a.classList.add("btn-cerrar"),a.onclick=()=>{o.remove(),i.classList.remove("fijar-body")},o.appendChild(a);const i=document.querySelector("body");i.appendChild(o),i.classList.add("fijar-body")}
/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/document.addEventListener("DOMContentLoaded",(function(){scrollNav(),navegacionFija()})),document.addEventListener("DOMContentLoaded",(function(){crearGaleria()})),function(e,n,t){function o(e,n){return typeof e===n}function a(e){var n=d.className,t=c._config.classPrefix||"";if(u&&(n=n.baseVal),c._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}c._config.enableClasses&&(n+=" "+t+e.join(" "+t),u?d.className.baseVal=n:d.className=n)}function i(e,n){if("object"==typeof e)for(var t in e)l(e,t)&&i(t,e[t]);else{var o=(e=e.toLowerCase()).split("."),A=c[o[0]];if(2==o.length&&(A=A[o[1]]),void 0!==A)return c;n="function"==typeof n?n():n,1==o.length?c[o[0]]=n:(!c[o[0]]||c[o[0]]instanceof Boolean||(c[o[0]]=new Boolean(c[o[0]])),c[o[0]][o[1]]=n),a([(n&&0!=n?"":"no-")+o.join("-")]),c._trigger(e,n)}return c}var A=[],s=[],r={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout((function(){n(t[e])}),0)},addTest:function(e,n,t){s.push({name:e,fn:n,options:t})},addAsyncTest:function(e){s.push({name:null,fn:e})}},c=function(){};c.prototype=r,c=new c;var l,d=n.documentElement,u="svg"===d.nodeName.toLowerCase();!function(){var e={}.hasOwnProperty;l=o(e,"undefined")||o(e.call,"undefined")?function(e,n){return n in e&&o(e.constructor.prototype[n],"undefined")}:function(n,t){return e.call(n,t)}}(),r._l={},r.on=function(e,n){this._l[e]||(this._l[e]=[]),this._l[e].push(n),c.hasOwnProperty(e)&&setTimeout((function(){c._trigger(e,c[e])}),0)},r._trigger=function(e,n){if(this._l[e]){var t=this._l[e];setTimeout((function(){var e;for(e=0;e<t.length;e++)(0,t[e])(n)}),0),delete this._l[e]}},c._q.push((function(){r.addTest=i})),c.addAsyncTest((function(){function e(e,n,t){function o(n){var o=!(!n||"load"!==n.type)&&1==a.width;i(e,"webp"===e&&o?new Boolean(o):o),t&&t(n)}var a=new Image;a.onerror=o,a.onload=o,a.src=n}var n=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=n.shift();e(t.name,t.uri,(function(t){if(t&&"load"===t.type)for(var o=0;o<n.length;o++)e(n[o].name,n[o].uri)}))})),function(){var e,n,t,a,i,r;for(var l in s)if(s.hasOwnProperty(l)){if(e=[],(n=s[l]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(a=o(n.fn,"function")?n.fn():n.fn,i=0;i<e.length;i++)1===(r=e[i].split(".")).length?c[r[0]]=a:(!c[r[0]]||c[r[0]]instanceof Boolean||(c[r[0]]=new Boolean(c[r[0]])),c[r[0]][r[1]]=a),A.push((a?"":"no-")+r.join("-"))}}(),a(A),delete r.addTest,delete r.addAsyncTest;for(var f=0;f<c._q.length;f++)c._q[f]();e.Modernizr=c}(window,document);
//# sourceMappingURL=bundle.js.map

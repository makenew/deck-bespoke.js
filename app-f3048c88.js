!function(){"use strict";var e="undefined"==typeof window?global:window;if("function"!=typeof e.require){var t={},n={},i={},r={}.hasOwnProperty,o="components/",a=function(e,t){var n=0;t&&(0===t.indexOf(o)&&(n=o.length),t.indexOf("/",n)>0&&(t=t.substring(n,t.indexOf("/",n))));var r=i[e+"/index.js"]||i[t+"/deps/"+e+"/index.js"];return r?o+r.substring(0,r.length-".js".length):e},s=/^\.\.?(\/|$)/,p=function(e,t){for(var n,i=[],r=(s.test(t)?e+"/"+t:t).split("/"),o=0,a=r.length;a>o;o++)n=r[o],".."===n?i.pop():"."!==n&&""!==n&&i.push(n);return i.join("/")},c=function(e){return e.split("/").slice(0,-1).join("/")},l=function(t){return function(n){var i=p(c(t),n);return e.require(i,t)}},f=function(e,t){var i={id:e,exports:{}};return n[e]=i,t(i.exports,l(e),i),i.exports},u=function(e,i){var o=p(e,".");if(null==i&&(i="/"),o=a(e,i),r.call(n,o))return n[o].exports;if(r.call(t,o))return f(o,t[o]);var s=p(o,"./index");if(r.call(n,s))return n[s].exports;if(r.call(t,s))return f(s,t[s]);throw new Error('Cannot find module "'+e+'" from "'+i+'"')};u.alias=function(e,t){i[t]=e},u.register=u.define=function(e,n){if("object"==typeof e)for(var i in e)r.call(e,i)&&(t[i]=e[i]);else t[e]=n},u.list=function(){var e=[];for(var n in t)r.call(t,n)&&e.push(n);return e},u.brunch=!0,u._cache=n,e.require=u}}(),function(){var e=window,t=function(e,t,n){var i={},r=function(t,n){var o;try{return o=e(n+"/node_modules/"+t)}catch(a){if(-1===a.toString().indexOf("Cannot find module"))throw a;if(-1!==n.indexOf("node_modules")){var s=n.split("/"),p=s.lastIndexOf("node_modules"),c=s.slice(0,p).join("/");return r(t,c)}}return i};return function(o){if(void 0!==t[o]&&(o=t[o]),o=o.replace(".js",""),"."!==o[0]&&n){var a=r(o,n);if(a!==i)return a}return e(o)}};require.register("bespoke-keys",function(e,n,i){var r=t(function(e){return n(e.replace("./","bespoke-keys//lib/"))},{},"bespoke-keys");!function(e,t,n){n.exports=function(e){return function(t){var n="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which&&!e.shiftKey||n&&39==e.which||!n&&40==e.which)&&t.next(),(33==e.which||32==e.which&&e.shiftKey||n&&37==e.which||!n&&38==e.which)&&t.prev()})}}}(e,r,i)}),require.register("bespoke-theme-cube",function(n,i,r){var o=t(function(e){return i(e.replace("./","bespoke-theme-cube//dist/"))},{},"bespoke-theme-cube");!function(t,n,i){!function(n){if("object"==typeof t)i.exports=n();else if("function"==typeof define&&define.amd)define(n);else{var r;"undefined"!=typeof window?r=window:"undefined"!=typeof e?r=e:"undefined"!=typeof self&&(r=self);var o=r;o=o.bespoke||(o.bespoke={}),o=o.themes||(o.themes={}),o.cube=n()}}(function(){return function e(t,i,r){function o(s,p){if(!i[s]){if(!t[s]){var c="function"==typeof n&&n;if(!p&&c)return c(s,!0);if(a)return a(s,!0);throw new Error("Cannot find module '"+s+"'")}var l=i[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return o(n?n:e)},l,l.exports,e,t,i,r)}return i[s].exports}for(var a="function"==typeof n&&n,s=0;s<r.length;s++)o(r[s]);return o}({1:[function(e,t,n){var i=e("bespoke-classes"),r=e("insert-css");t.exports=function(){var e="*{-moz-box-sizing:border-box;box-sizing:border-box;margin:0;padding:0}@media print{*{-webkit-print-color-adjust:exact}}@page{size:landscape;margin:0}.bespoke-parent{-webkit-transition:background .6s ease;transition:background .6s ease;position:absolute;top:0;bottom:0;left:0;right:0;overflow:hidden}@media print{.bespoke-parent{overflow:visible;position:static}}.bespoke-theme-cube-slide-parent{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-perspective:600px;perspective:600px;pointer-events:none}.bespoke-slide{pointer-events:auto;-webkit-transition:-webkit-transform .6s ease,opacity .6s ease,background .6s ease;transition:transform .6s ease,opacity .6s ease,background .6s ease;-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;text-align:center;width:640px;height:480px;position:absolute;top:50%;margin-top:-240px;left:50%;margin-left:-320px;background:#eaeaea;padding:40px;border-radius:0}@media print{.bespoke-slide{zoom:1!important;height:743px;width:100%;page-break-before:always;position:static;margin:0;-webkit-transition:none;transition:none}}.bespoke-before{-webkit-transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px);transform:translateX(100px)translateX(-320px)rotateY(-90deg)translateX(-320px)}@media print{.bespoke-before{-webkit-transform:none;transform:none}}.bespoke-after{-webkit-transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px);transform:translateX(-100px)translateX(320px)rotateY(90deg)translateX(320px)}@media print{.bespoke-after{-webkit-transform:none;transform:none}}.bespoke-inactive{opacity:0;pointer-events:none}@media print{.bespoke-inactive{opacity:1}}.bespoke-active{opacity:1}.bespoke-bullet{-webkit-transition:all .3s ease;transition:all .3s ease}@media print{.bespoke-bullet{-webkit-transition:none;transition:none}}.bespoke-bullet-inactive{opacity:0}li.bespoke-bullet-inactive{-webkit-transform:translateX(16px);transform:translateX(16px)}@media print{li.bespoke-bullet-inactive{-webkit-transform:none;transform:none}}@media print{.bespoke-bullet-inactive{opacity:1}}.bespoke-bullet-active{opacity:1}.bespoke-scale-parent{-webkit-perspective:600px;perspective:600px;position:absolute;top:0;left:0;right:0;bottom:0;pointer-events:none}.bespoke-scale-parent .bespoke-active{pointer-events:auto}@media print{.bespoke-scale-parent{-webkit-transform:none!important;transform:none!important}}.bespoke-progress-parent{position:absolute;top:0;left:0;right:0;height:2px}@media only screen and (min-width:1366px){.bespoke-progress-parent{height:4px}}@media print{.bespoke-progress-parent{display:none}}.bespoke-progress-bar{-webkit-transition:width .6s ease;transition:width .6s ease;position:absolute;height:100%;background:#0089f3;border-radius:0 4px 4px 0}.emphatic{background:#eaeaea}.bespoke-backdrop{position:absolute;top:0;left:0;right:0;bottom:0;-webkit-transform:translateZ(0);transform:translateZ(0);-webkit-transition:opacity .6s ease;transition:opacity .6s ease;opacity:0;z-index:-1}.bespoke-backdrop-active{opacity:1}pre{padding:26px!important;border-radius:8px}body{font-family:helvetica,arial,sans-serif;font-size:18px;color:#404040}h1{font-size:72px;line-height:82px;letter-spacing:-2px;margin-bottom:16px}h2{font-size:42px;letter-spacing:-1px;margin-bottom:8px}h3{font-size:24px;font-weight:400;margin-bottom:24px;color:#606060}hr{visibility:hidden;height:20px}ul{list-style:none}li{margin-bottom:12px}p{margin:0 100px 12px;line-height:22px}a{color:#0089f3;text-decoration:none}";return r(e,{prepend:!0}),function(e){i()(e);var t=function(e){var t=document.createElement("div");t.className="bespoke-theme-cube-slide-parent",e.parentNode.insertBefore(t,e),t.appendChild(e)};e.slides.forEach(t)}}},{"bespoke-classes":2,"insert-css":3}],2:[function(e,t,n){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},i=function(i,r){var o=e.slides[e.slide()],a=r-e.slide(),s=a>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,i)),i!==o&&["inactive",s,s+"-"+Math.abs(a)].map(t.bind(null,i))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(r){e.slides.map(i),t(r.slide,"active"),n(r.slide,"inactive")})}}},{}],3:[function(e,t,n){var i={};t.exports=function(e,t){if(!i[e]){i[e]=!0;var n=document.createElement("style");n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e;var r=document.getElementsByTagName("head")[0];t&&t.prepend?r.insertBefore(n,r.childNodes[0]):r.appendChild(n)}}},{}]},{},[1])(1)})}(n,o,r)}),require.register("bespoke",function(e,n,i){var r=t(function(e){return n(e.replace("./","bespoke//lib/"))},{},"bespoke");!function(e,t,n){var i=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),i=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),r=i[0],o={},a=function(e,t){i[e]&&(f("deactivate",u(r,t)),r=i[e],f("activate",u(r,t)))},s=function(e,t){return arguments.length?void(f("slide",u(i[e],t))&&a(e,t)):i.indexOf(r)},p=function(e,t){var n=i.indexOf(r)+e;f(e>0?"next":"prev",u(r,t))&&a(n,t)},c=function(e,t){return(o[e]||(o[e]=[])).push(t),l.bind(null,e,t)},l=function(e,t){o[e]=(o[e]||[]).filter(function(e){return e!==t})},f=function(e,t){return(o[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},u=function(e,t){return t=t||{},t.index=i.indexOf(e),t.slide=e,t},d={on:c,off:l,fire:f,slide:s,next:p.bind(null,1),prev:p.bind(null,-1),parent:n,slides:i};return(t||[]).forEach(function(e){e(d)}),a(0),d};n.exports={from:i}}(e,r,i)})}(),require.register("index",function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=t("./modules/deck"),o=i(r);e["default"]=function(){(0,o["default"])("#deck")}}),require.register("modules/deck",function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(e,"__esModule",{value:!0});var r=t("bespoke"),o=i(r),a=t("bespoke-keys"),s=i(a),p=t("bespoke-theme-cube"),c=i(p),l=[(0,s["default"])(),(0,c["default"])()];e["default"]=function(e){o["default"].from(e,l)}});
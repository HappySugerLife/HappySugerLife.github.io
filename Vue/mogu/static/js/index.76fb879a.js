(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={index:0},i=[];function o(e){return u.p+"static/js/"+({"pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail":"pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail","pages-cart-cart":"pages-cart-cart","pages-cate-cate":"pages-cate-cate","pages-pdetail-pdetail":"pages-pdetail-pdetail","pages-index-index":"pages-index-index","pages-me-me":"pages-me-me"}[e]||e)+"."+{"pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail":"63e844c5","pages-cart-cart":"893af562","pages-cate-cate":"d793506f","pages-pdetail-pdetail":"b2ff31fd","pages-index-index":"77408ff4","pages-me-me":"504e5c50"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=a[e]=[t,r]}));t.push(n[2]=r);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,u.nc&&c.setAttribute("nonce",u.nc),c.src=o(e);var s=new Error;i=function(t){c.onerror=c.onload=null,clearTimeout(l);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",s.name="ChunkLoadError",s.type=r,s.request=i,n[1](s)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="./",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var f=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("394f")},"02e5":function(e,t,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("78af"));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(e=(0,a.default)(e),"object"!==typeof e||"object"!==typeof t)return!1;for(var n in t)t.hasOwnProperty(n)&&(n in e?"object"!==typeof e[n]||"object"!==typeof t[n]?e[n]=t[n]:e[n].concat&&t[n].concat?e[n]=e[n].concat(t[n]):e[n]=i(e[n],t[n]):e[n]=t[n]);return e}var o=i;t.default=o},"05ab":function(e,t,n){"use strict";var r=n("4ea4");n("99af"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var a=r(n("9f5b"));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"auto",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rpx";return e=String(e),a.default.number(e)?"".concat(e).concat(t):e}},"0c6e":function(e,t,n){"use strict";n.r(t);var r=n("7713"),a=n("9a26");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("57a2");var o,u=n("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},1331:function(e,t,n){"use strict";var r;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];n?r||(r=!0,"function"===typeof e&&e(),setTimeout((function(){r=!1}),t)):r||(r=!0,setTimeout((function(){r=!1,"function"===typeof e&&e()}),t))}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a;t.default=i},1626:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={onLaunch:function(){e.log("App Launch")},onShow:function(){e.log("App Show")},onHide:function(){e.log("App Hide")}};t.default=n}).call(this,n("5a52")["default"])},"283c":function(e,t,n){"use strict";function r(e,t){var n=this.$parent;while(n)if(n.$options.name!==e)n=n.$parent;else{var r=function(){var e={};if(Array.isArray(t))t.map((function(t){e[t]=n[t]?n[t]:""}));else for(var r in t)Array.isArray(t[r])?t[r].length?e[r]=t[r]:e[r]=n[r]:t[r].constructor===Object?Object.keys(t[r]).length?e[r]=t[r]:e[r]=n[r]:e[r]=t[r]||!1===t[r]?t[r]:n[r];return{v:e}}();if("object"===typeof r)return r.v}return{}}n("d81d"),n("b64b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},"394f":function(e,t,n){"use strict";var r=n("4ea4"),a=r(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("faa8"),n("06b9");var i=r(n("0c6e")),o=r(n("8a91")),u=r(n("e143"));u.default.use(o.default),u.default.config.productionTip=!1,i.default.mpType="app";var c=new u.default((0,a.default)({},i.default));c.$mount()},"3a36":function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"success",t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];-1==["primary","info","error","warning","success"].indexOf(e)&&(e="success");var n="";switch(e){case"primary":n="info-circle";break;case"info":n="info-circle";break;case"error":n="close-circle";break;case"warning":n="error-circle";break;case"success":n="checkmark-circle";break;default:n="checkmark-circle"}return t&&(n+="-fill"),n}n("c975"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},4158:function(e,t,n){"use strict";var r=n("4ea4");n("a9e3"),n("d3b7"),n("e25e"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("fd24"));function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd";e||(e=Number(new Date)),10==e.toString().length&&(e*=1e3);var n=+new Date(Number(e)),r=(Number(new Date)-n)/1e3,i="";switch(!0){case r<300:i="刚刚";break;case r>=300&&r<3600:i=parseInt(r/60)+"分钟前";break;case r>=3600&&r<86400:i=parseInt(r/3600)+"小时前";break;case r>=86400&&r<2592e3:i=parseInt(r/86400)+"天前";break;default:i=!1===t?r>=2592e3&&r<31536e3?parseInt(r/2592e3)+"个月前":parseInt(r/31536e3)+"年前":(0,a.default)(n,t)}return i}var o=i;t.default=o},"4b98":function(e,t,n){"use strict";var r=n("4ea4");n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("96cf");var a=r(n("1da1")),i=r(n("d4ec")),o=r(n("bee2")),u=function(){function e(){(0,i.default)(this,e),this.config={type:"navigateTo",url:"",delta:1,params:{},animationType:"pop-in",animationDuration:300,intercept:!1},this.route=this.route.bind(this)}return(0,o.default)(e,[{key:"addRootPath",value:function(e){return"/"===e[0]?e:"/".concat(e)}},{key:"mixinParam",value:function(e,t){e=e&&this.addRootPath(e);var n="";return/.*\/.*\?.*=.*/.test(e)?(n=uni.$u.queryParams(t,!1),e+"&"+n):(n=uni.$u.queryParams(t),e+n)}},{key:"route",value:function(){var e=(0,a.default)(regeneratorRuntime.mark((function e(){var t,n,r,a,i=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:{},n=i.length>1&&void 0!==i[1]?i[1]:{},r={},"string"===typeof t?(r.url=this.mixinParam(t,n),r.type="navigateTo"):(r=uni.$u.deepClone(t,this.config),r.url=this.mixinParam(t.url,t.params)),n.intercept&&(this.config.intercept=n.intercept),r.params=n,r=uni.$u.deepMerge(this.config,r),"function"!==typeof uni.$u.routeIntercept){e.next=14;break}return e.next=10,new Promise((function(e,t){uni.$u.routeIntercept(r,e)}));case 10:a=e.sent,a&&this.openPage(r),e.next=15;break;case 14:this.openPage(r);case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"openPage",value:function(e){var t=e.url,n=(e.type,e.delta),r=e.animationType,a=e.animationDuration;"navigateTo"!=e.type&&"to"!=e.type||uni.navigateTo({url:t,animationType:r,animationDuration:a}),"redirectTo"!=e.type&&"redirect"!=e.type||uni.redirectTo({url:t}),"switchTab"!=e.type&&"tab"!=e.type||uni.switchTab({url:t}),"reLaunch"!=e.type&&"launch"!=e.type||uni.reLaunch({url:t}),"navigateBack"!=e.type&&"back"!=e.type||uni.navigateBack({delta:n})}}]),e}(),c=(new u).route;t.default=c},"4fd8":function(e,t,n){"use strict";function r(e,t){if(e>=0&&t>0&&t>=e){var n=t-e+1;return Math.floor(Math.random()*n+e)}return 0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},"57a2":function(e,t,n){"use strict";var r=n("5950"),a=n.n(r);a.a},5950:function(e,t,n){var r=n("9838");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var a=n("4f06").default;a("20de5ce0",r,!0,{sourceMap:!1,shadowMode:!1})},"5c47":function(e,t,n){"use strict";var r=n("4ea4");n("c975"),n("d3b7"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("d4ec")),i=r(n("bee2")),o=r(n("02e5")),u=r(n("9f5b")),c=function(){function e(){var t=this;(0,a.default)(this,e),this.config={baseUrl:"",header:{},method:"POST",dataType:"json",responseType:"text",showLoading:!0,loadingText:"请求中...",loadingTime:800,timer:null,originalData:!1,loadingMask:!0},this.interceptor={request:null,response:null},this.get=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({method:"GET",url:e,header:r,data:n})},this.post=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({url:e,method:"POST",header:r,data:n})},this.put=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({url:e,method:"PUT",header:r,data:n})},this.delete=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return t.request({url:e,method:"DELETE",header:r,data:n})}}return(0,i.default)(e,[{key:"setConfig",value:function(e){this.config=(0,o.default)(this.config,e)}},{key:"request",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this.interceptor.request&&"function"===typeof this.interceptor.request){var n=this.interceptor.request(t);if(!1===n)return new Promise((function(){}));this.options=n}return t.dataType=t.dataType||this.config.dataType,t.responseType=t.responseType||this.config.responseType,t.url=t.url||"",t.params=t.params||{},t.header=Object.assign({},this.config.header,t.header),t.method=t.method||this.config.method,new Promise((function(n,r){t.complete=function(t){if(uni.hideLoading(),clearTimeout(e.config.timer),e.config.timer=null,e.config.originalData)if(e.interceptor.response&&"function"===typeof e.interceptor.response){var a=e.interceptor.response(t);!1!==a?n(a):r(t)}else n(t);else if(200==t.statusCode)if(e.interceptor.response&&"function"===typeof e.interceptor.response){var i=e.interceptor.response(t.data);!1!==i?n(i):r(t.data)}else n(t.data);else r(t)},t.url=u.default.url(t.url)?t.url:e.config.baseUrl+(0==t.url.indexOf("/")?t.url:"/"+t.url),e.config.showLoading&&!e.config.timer&&(e.config.timer=setTimeout((function(){uni.showLoading({title:e.config.loadingText,mask:e.config.loadingMask}),e.config.timer=null}),e.config.loadingTime)),uni.request(t)}))}}]),e}(),s=new c;t.default=s},"5d98":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="1.8.4",a={v:r,version:r,type:["primary","success","info","error","warning"]};t.default=a},7407:function(e,t,n){"use strict";function r(){return uni.getSystemInfoSync().platform}function a(){return uni.getSystemInfoSync()}Object.defineProperty(t,"__esModule",{value:!0}),t.os=r,t.sys=a},"74a8":function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"both";return"both"==t?e.replace(/^\s+|\s+$/g,""):"left"==t?e.replace(/^\s*/,""):"right"==t?e.replace(/(\s*$)/g,""):"all"==t?e.replace(/\s+/g,""):e}n("ac1f"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},7713:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},i=[]},"78af":function(e,t,n){"use strict";function r(e){return"[object Array]"===Object.prototype.toString.call(e)}function a(e){if([null,void 0,NaN,!1].includes(e))return e;if("object"!==typeof e&&"function"!==typeof e)return e;var t=r(e)?[]:{};for(var n in e)e.hasOwnProperty(n)&&(t[n]="object"===typeof e[n]?a(e[n]):e[n]);return t}n("caad"),n("d3b7"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a;t.default=i},8174:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={toast:10090,noNetwork:10080,popup:10075,mask:10070,navbar:980,topTips:975,sticky:970,indexListSticky:965};t.default=r},"8a91":function(e,t,n){"use strict";var r=n("4ea4");n("4de4"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(n("b371")),i=r(n("5c47")),o=r(n("e3b1")),u=r(n("4b98")),c=r(n("fd24")),s=r(n("4158")),l=r(n("f69c")),f=r(n("ffa4")),d=r(n("97e5")),p=r(n("3a36")),g=r(n("e56c")),h=r(n("78af")),v=r(n("02e5")),m=r(n("05ab")),y=r(n("9f5b")),b=r(n("4fd8")),_=r(n("74a8")),P=r(n("8d6e")),w=r(n("283c")),x=r(n("e77e")),T=n("7407"),j=r(n("b768")),S=r(n("1331")),C=r(n("5d98")),k=r(n("8174"));function O(e){0}var A={queryParams:o.default,route:u.default,timeFormat:c.default,date:c.default,timeFrom:s.default,colorGradient:l.default.colorGradient,colorToRgba:l.default.colorToRgba,guid:f.default,color:d.default,sys:T.sys,os:T.os,type2icon:p.default,randomArray:g.default,wranning:O,get:i.default.get,post:i.default.post,put:i.default.put,delete:i.default.delete,hexToRgb:l.default.hexToRgb,rgbToHex:l.default.rgbToHex,test:y.default,random:b.default,deepClone:h.default,deepMerge:v.default,getParent:w.default,$parent:x.default,addUnit:m.default,trim:_.default,type:["primary","success","error","warning","info"],http:i.default,toast:P.default,config:C.default,zIndex:k.default,debounce:j.default,throttle:S.default};uni.$u=A;var $=function(e){e.mixin(a.default),e.prototype.openShare&&e.mixin(mpShare),e.filter("timeFormat",(function(e,t){return(0,c.default)(e,t)})),e.filter("date",(function(e,t){return(0,c.default)(e,t)})),e.filter("timeFrom",(function(e,t){return(0,s.default)(e,t)})),e.prototype.$u=A},M={install:$};t.default=M},"8d6e":function(e,t,n){"use strict";function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1500;uni.showToast({title:e,icon:"none",duration:t})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},"97e5":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={primary:"#2979ff",primaryDark:"#2b85e4",primaryDisabled:"#a0cfff",primaryLight:"#ecf5ff",bgColor:"#f3f4f6",info:"#909399",infoDark:"#82848a",infoDisabled:"#c8c9cc",infoLight:"#f4f4f5",warning:"#ff9900",warningDark:"#f29100",warningDisabled:"#fcbd71",warningLight:"#fdf6ec",error:"#fa3534",errorDark:"#dd6161",errorDisabled:"#fab6b6",errorLight:"#fef0f0",success:"#19be6b",successDark:"#18b566",successDisabled:"#71d5a1",successLight:"#dbf1e1",mainColor:"#303133",contentColor:"#606266",tipsColor:"#909399",lightColor:"#c0c4cc",borderColor:"#e4e7ed"},a=r;t.default=a},9838:function(e,t,n){var r=n("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/*每个页面公共css */',""]),e.exports=t},"9a26":function(e,t,n){"use strict";n.r(t);var r=n("1626"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"9f5b":function(e,t,n){"use strict";function r(e){return/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(e)}function a(e){return/^1[3-9]\d{9}$/.test(e)}function i(e){return/http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(e)}function o(e){return!/Invalid|NaN/.test(new Date(e).toString())}function u(e){return/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)}function c(e){return/^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)}function s(e){return/^\d+$/.test(e)}function l(e){return/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(e)}function f(e){var t=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/,n=/^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;return 7===e.length?n.test(e):8===e.length&&t.test(e)}function d(e){return/^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(e)}function p(e){var t=/^[\u4e00-\u9fa5]+$/gi;return t.test(e)}function g(e){return/^[a-zA-Z]*$/.test(e)}function h(e){var t=/^[0-9a-zA-Z]*$/g;return t.test(e)}function v(e,t){return e.indexOf(t)>=0}function m(e,t){return e>=t[0]&&e<=t[1]}function y(e,t){return e.length>=t[0]&&e.length<=t[1]}function b(e){var t=/^\d{3,4}-\d{7,8}(-\d{3,4})?$/;return t.test(e)}function _(e){switch(typeof e){case"undefined":return!0;case"string":if(0==e.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g,"").length)return!0;break;case"boolean":if(!e)return!0;break;case"number":if(0===e||isNaN(e))return!0;break;case"object":if(null===e||0===e.length)return!0;for(var t in e)return!1;return!0}return!1}function P(e){if("string"==typeof e)try{var t=JSON.parse(e);return!("object"!=typeof t||!t)}catch(n){return!1}return!1}function w(e){return"function"===typeof Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}function x(e){return"[object Object]"===Object.prototype.toString.call(e)}function T(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return new RegExp("^\\d{".concat(t,"}$")).test(e)}n("c975"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var j={email:r,mobile:a,url:i,date:o,dateISO:u,number:c,digits:s,idCard:l,carNo:f,amount:d,chinese:p,letter:g,enOrNum:h,contains:v,range:m,rangeLength:y,empty:_,isEmpty:_,jsonString:P,landline:b,object:x,array:w,code:T};t.default=j},b371:function(e,t,n){n("d81d"),n("a434"),n("b64b"),n("d3b7"),n("ac1f"),e.exports={data:function(){return{}},onLoad:function(){this.$u.getRect=this.$uGetRect},methods:{$uGetRect:function(e,t){var n=this;return new Promise((function(r){uni.createSelectorQuery().in(n)[t?"selectAll":"select"](e).boundingClientRect((function(e){t&&Array.isArray(e)&&e.length&&r(e),!t&&e&&r(e)})).exec()}))},getParentData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.parent||(this.parent=!1),this.parent=this.$u.$parent.call(this,t),this.parent&&Object.keys(this.parentData).map((function(t){e.parentData[t]=e.parent[t]}))},preventEvent:function(e){e&&e.stopPropagation&&e.stopPropagation()}},onReachBottom:function(){uni.$emit("uOnReachBottom")},beforeDestroy:function(){var e=this;if(this.parent&&uni.$u.test.array(this.parent.children)){var t=this.parent.children;t.map((function(n,r){n===e&&t.splice(r,1)}))}}}},b768:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=null;function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(null!==r&&clearTimeout(r),n){var a=!r;r=setTimeout((function(){r=null}),t),a&&"function"===typeof e&&e()}else r=setTimeout((function(){"function"===typeof e&&e()}),t)}var i=a;t.default=i},e3b1:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"brackets",r=t?"?":"",a=[];-1==["indices","brackets","repeat","comma"].indexOf(n)&&(n="brackets");var i=function(t){var r=e[t];if(["",void 0,null].indexOf(r)>=0)return"continue";if(r.constructor===Array)switch(n){case"indices":for(var i=0;i<r.length;i++)a.push(t+"["+i+"]="+r[i]);break;case"brackets":r.forEach((function(e){a.push(t+"[]="+e)}));break;case"repeat":r.forEach((function(e){a.push(t+"="+e)}));break;case"comma":var o="";r.forEach((function(e){o+=(o?",":"")+e})),a.push(t+"="+o);break;default:r.forEach((function(e){a.push(t+"[]="+e)}))}else a.push(t+"="+r)};for(var o in e)i(o);return a.length?r+a.join("&"):""}n("4160"),n("c975"),n("a15b"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},e56c:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.sort((function(){return Math.random()-.5}))}n("4e82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a},e77e:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0,t=this.$parent;while(t){if(!t.$options||t.$options.name===e)return t;t=t.$parent}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r},f69c:function(e,t,n){"use strict";function r(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rgb(0, 0, 0)",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"rgb(255, 255, 255)",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r=a(e,!1),o=r[0],u=r[1],c=r[2],s=a(t,!1),l=s[0],f=s[1],d=s[2],p=(l-o)/n,g=(f-u)/n,h=(d-c)/n,v=[],m=0;m<n;m++){var y=i("rgb("+Math.round(p*m+o)+","+Math.round(g*m+u)+","+Math.round(h*m+c)+")");v.push(y)}return v}function a(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(e=e.toLowerCase(),e&&n.test(e)){if(4===e.length){for(var r="#",a=1;a<4;a+=1)r+=e.slice(a,a+1).concat(e.slice(a,a+1));e=r}for(var i=[],o=1;o<7;o+=2)i.push(parseInt("0x"+e.slice(o,o+2)));return t?"rgb(".concat(i[0],",").concat(i[1],",").concat(i[2],")"):i}if(/^(rgb|RGB)/.test(e)){var u=e.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(",");return u.map((function(e){return Number(e)}))}return e}function i(e){var t=e,n=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;if(/^(rgb|RGB)/.test(t)){for(var r=t.replace(/(?:\(|\)|rgb|RGB)*/g,"").split(","),a="#",i=0;i<r.length;i++){var o=Number(r[i]).toString(16);o=1==String(o).length?"0"+o:o,"0"===o&&(o+=o),a+=o}return 7!==a.length&&(a=t),a}if(!n.test(t))return t;var u=t.replace(/#/,"").split("");if(6===u.length)return t;if(3===u.length){for(var c="#",s=0;s<u.length;s+=1)c+=u[s]+u[s];return c}}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.3;e=i(e);var n=/^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,r=e.toLowerCase();if(r&&n.test(r)){if(4===r.length){for(var a="#",o=1;o<4;o+=1)a+=r.slice(o,o+1).concat(r.slice(o,o+1));r=a}for(var u=[],c=1;c<7;c+=2)u.push(parseInt("0x"+r.slice(c,c+2)));return"rgba("+u.join(",")+","+t+")"}return r}n("99af"),n("a15b"),n("d81d"),n("fb6a"),n("a9e3"),n("d3b7"),n("e25e"),n("ac1f"),n("25f0"),n("5319"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={colorGradient:r,hexToRgb:a,rgbToHex:i,colorToRgba:o};t.default=u},faa8:function(e,t,n){"use strict";(function(e){var t=n("4ea4"),r=t(n("e143"));e["____99D5902____"]=!0,delete e["____99D5902____"],e.__uniConfig={easycom:{"^u-(.*)":"@/uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"white",navigationBarTitleText:"蘑菇街",navigationBarBackgroundColor:"#ff5777",backgroundColor:"#F8F8F8",background:"#efeff4"},tabBar:{list:[{text:"首页",pagePath:"pages/index/index",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"分类",pagePath:"pages/cate/cate",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"购物车",pagePath:"pages/cart/cart",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{text:"我的",pagePath:"pages/me/me",iconPath:"",selectedIconPath:"",redDot:!1,badge:""}],color:"#999",selectedColor:"#007aff",backgroundColor:"",borderStyle:"black"}},e.__uniConfig.compilerVersion="3.2.3",e.__uniConfig.router={mode:"hash",base:"./"},e.__uniConfig.publicPath="./",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey="XVXBZ-NDMC4-JOGUS-XGIEE-QVHDZ-AMFV2",e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,r.default.component("pages-index-index",(function(e){var t={component:n.e("pages-index-index").then(function(){return e(n("ab4a"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),r.default.component("pages-cate-cate",(function(e){var t={component:Promise.all([n.e("pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail"),n.e("pages-cate-cate")]).then(function(){return e(n("cc1c"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),r.default.component("pages-me-me",(function(e){var t={component:n.e("pages-me-me").then(function(){return e(n("177f"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),r.default.component("pages-cart-cart",(function(e){var t={component:Promise.all([n.e("pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail"),n.e("pages-cart-cart")]).then(function(){return e(n("2e34"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),r.default.component("pages-pdetail-pdetail",(function(e){var t={component:Promise.all([n.e("pages-cart-cart~pages-cate-cate~pages-pdetail-pdetail"),n.e("pages-pdetail-pdetail")]).then(function(){return e(n("6371"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(t.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(t.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),t})),e.__uniRoutes=[{path:"/",alias:"/pages/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationBarTitleText:"首页"})},[e("pages-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/index/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:44}},{path:"/pages/cate/cate",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarTitleText:"分类列表",enablePullDownRefresh:!1})},[e("pages-cate-cate",{slot:"page"})])}},meta:{id:2,name:"pages-cate-cate",isNVue:!1,maxWidth:0,pagePath:"pages/cate/cate",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/me/me",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:3},__uniConfig.globalStyle,{navigationBarTitleText:"我的",enablePullDownRefresh:!1})},[e("pages-me-me",{slot:"page"})])}},meta:{id:3,name:"pages-me-me",isNVue:!1,maxWidth:0,pagePath:"pages/me/me",isQuit:!0,isTabBar:!0,tabBarIndex:3,windowTop:44}},{path:"/pages/cart/cart",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationBarTitleText:"购物车",enablePullDownRefresh:!1})},[e("pages-cart-cart",{slot:"page"})])}},meta:{id:4,name:"pages-cart-cart",isNVue:!1,maxWidth:0,pagePath:"pages/cart/cart",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:44}},{path:"/pages/pdetail/pdetail",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarTitleText:"商品详情",enablePullDownRefresh:!1})},[e("pages-pdetail-pdetail",{slot:"page"})])}},meta:{name:"pages-pdetail-pdetail",isNVue:!1,maxWidth:0,pagePath:"pages/pdetail/pdetail",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},fd24:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd";e||(e=Number(new Date)),10==e.toString().length&&(e*=1e3);var n,r=new Date(e),a={"y+":r.getFullYear().toString(),"m+":(r.getMonth()+1).toString(),"d+":r.getDate().toString(),"h+":r.getHours().toString(),"M+":r.getMinutes().toString(),"s+":r.getSeconds().toString()};for(var i in a)n=new RegExp("("+i+")").exec(t),n&&(t=t.replace(n[1],1==n[1].length?a[i]:a[i].padStart(n[1].length,"0")));return t}n("fb6a"),n("a9e3"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("4d90"),n("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,String.prototype.padStart||(String.prototype.padStart=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";if("[object String]"!==Object.prototype.toString.call(t))throw new TypeError("fillString must be String");var n=this;if(n.length>=e)return String(n);var r=e-n.length,a=Math.ceil(r/t.length);while(a>>=1)t+=t,1===a&&(t+=t);return t.slice(0,r)+n});var a=r;t.default=a},ffa4:function(e,t,n){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32,t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),a=[];if(n=n||r.length,e)for(var i=0;i<e;i++)a[i]=r[0|Math.random()*n];else{var o;a[8]=a[13]=a[18]=a[23]="-",a[14]="4";for(var u=0;u<36;u++)a[u]||(o=0|16*Math.random(),a[u]=r[19==u?3&o|8:o])}return t?(a.shift(),"u"+a.join("")):a.join("")}n("a15b"),n("ac1f"),n("1276"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r;t.default=a}});
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"085a":function(e,t,n){"use strict";n.r(t);var a=n("ddd1"),i=n("1e85");for(var u in i)"default"!==u&&function(e){n.d(t,e,(function(){return i[e]}))}(u);n("5c46");var o,r=n("f0c5"),c=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"10f63986",null,!1,a["a"],o);t["default"]=c.exports},"1e85":function(e,t,n){"use strict";n.r(t);var a=n("90f0"),i=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,(function(){return a[e]}))}(u);t["default"]=i.a},2909:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=c;var a=r(n("6005")),i=r(n("db90")),u=r(n("06c5")),o=r(n("3427"));function r(e){return e&&e.__esModule?e:{default:e}}function c(e){return(0,a.default)(e)||(0,i.default)(e)||(0,u.default)(e)||(0,o.default)()}},3427:function(e,t,n){"use strict";function a(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},"369d":function(e,t,n){var a=n("4346");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("4f06").default;i("407fdb5e",a,!0,{sourceMap:!1,shadowMode:!1})},4346:function(e,t,n){var a=n("24fb");t=a(!1),t.push([e.i,".img[data-v-10f63986]{width:%?100?%;height:%?100?%}",""]),e.exports=t},"5c46":function(e,t,n){"use strict";var a=n("369d"),i=n.n(a);i.a},6005:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=u;var a=i(n("6b75"));function i(e){return e&&e.__esModule?e:{default:e}}function u(e){if(Array.isArray(e))return(0,a.default)(e)}},"90f0":function(e,t,n){"use strict";var a=n("4ea4");n("4160"),n("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("2909")),u={data:function(){return{list:[]}},onLoad:function(){},methods:{onset:function(e){uni.setClipboardData({data:e,success:function(){console.log("success")}})},inductionUpload:function(e){var t=this;uni.chooseImage({sizeType:["original","compressed"],sourceType:["album","camera"],success:function(e){console.log(e.tempFilePaths);var n=e.tempFilePaths,a=(0,i.default)(t.list);n.forEach((function(e,n){uni.uploadFile({filePath:e,name:"file",url:"https://api.96009.com/api/services/app/File/UploadFile",success:function(e){var n=JSON.parse(e.data),i="https://api.96009.com/"+n.result[0].fileUrl;a.push(i),console.log(a),t.list=a}})}))}})}}};t.default=u},db90:function(e,t,n){"use strict";function a(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=a},ddd1:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return u})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-button",{staticStyle:{"background-color":"#00A0E9"},attrs:{type:"primary",size:"default"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.inductionUpload.apply(void 0,arguments)}}},[e._v("上传")]),e._l(e.list,(function(t,a){return n("v-uni-view",{staticClass:"text-area"},[n("v-uni-image",{staticClass:"img",attrs:{src:t,mode:""}}),n("v-uni-view",{on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onset(t)}}},[e._v(e._s(t))])],1)}))],2)},u=[]}}]);
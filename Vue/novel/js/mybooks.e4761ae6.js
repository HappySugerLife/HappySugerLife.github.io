(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["mybooks"],{3496:function(t,e,s){},8558:function(t,e,s){"use strict";s("3496")},f114:function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mybooks"},[s("BookTitle",[t._v("我的书架")]),s("ul",t._l(t.mybooks,(function(e,n){return s("van-swipe-cell",{key:e._id,attrs:{"right-width":"100"},scopedSlots:t._u([{key:"right",fn:function(){return[s("van-button",{staticClass:"delete-button",attrs:{square:"",text:"删除",type:"danger"},on:{click:function(s){return t.removeMybooks(e._id)}}})]},proxy:!0}],null,!0)},[s("div",{staticClass:"selectContainer"},[s("div",{staticClass:"cover"},[s("van-image",{attrs:{width:"60",height:"80",src:t._f("parseImageUrl")(e.cover)}})],1),s("div",{staticClass:"right"},[s("h4",{staticClass:"name"},[t._v(t._s(e.title))]),s("p",[t._v("阅读到第"+t._s(1+n++)+"章")])]),s("div",{staticClass:"toDetail",on:{click:function(s){return t.$router.push("/detail?id="+e._id)}}})])])})),1)],1)},o=[],i=s("5530"),a=(s("ac1f"),s("5319"),s("5301")),c=s("2f62"),r={components:{BookTitle:a["a"]},data:function(){return{}},filters:{parseImageUrl:function(t){return decodeURIComponent(t.replace(/\/agent\//gi,""))}},computed:Object(i["a"])({},Object(c["c"])(["mybooks"])),methods:Object(i["a"])({},Object(c["b"])(["removeMybooks"]))},l=r,u=(s("8558"),s("2877")),d=Object(u["a"])(l,n,o,!1,null,"2d90ca73",null);e["default"]=d.exports}}]);
//# sourceMappingURL=mybooks.e4761ae6.js.map
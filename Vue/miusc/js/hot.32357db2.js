(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["hot"],{"0b70":function(t,n,s){"use strict";s.r(n);var e=function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"hot"},[s("div",{staticClass:"hotop"},[s("div",{staticClass:"hotopct"},[s("div",{staticClass:"u-hmsprt hoticon"}),s("div",{staticClass:"hottime"},[t._v("更新日期："+t._s(t.timeTier()))])])]),s("ul",{staticClass:"hot-songlist"},t._l(t.hotsongs,(function(n,e){return s("SongListItem",{key:n.id,class:{lt3:e<3},attrs:{item:n,currentSongId:t.currentSongId,playing:t.playing},on:{"change-current-song":function(n){t.$emit("change-current-song",n),t.$emit("change-current-play-list",t.hotsongs)}}},[t._v(t._s((e+1).toString().padStart(2,"0")))])})),1)])},o=[],i=(s("a9e3"),s("a15b"),s("16a2")),a={props:{currentSongId:{type:Number},playing:Boolean},components:{SongListItem:i["a"]},data:function(){return{hotsongs:null}},methods:{timeTier:function(){var t=new Date,n=t.getMonth()+1+"月",s=t.getDate()+"日";return[n,s].join("")}},created:function(){var t=this;this.axios.get("https://apis.netstart.cn/music/artist/top/song?id=12279635").then((function(n){t.hotsongs=n.data.songs}))}},c=a,r=(s("9169"),s("2877")),u=Object(r["a"])(c,e,o,!1,null,"9f516ace",null);n["default"]=u.exports},9169:function(t,n,s){"use strict";s("edec")},edec:function(t,n,s){}}]);
//# sourceMappingURL=hot.32357db2.js.map
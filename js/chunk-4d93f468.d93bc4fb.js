(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4d93f468"],{1550:function(t,s,e){},"29b7":function(t,s,e){"use strict";var a=e("1550"),i=e.n(a);i.a},"87ef":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("Modal",{attrs:{width:t.width,"class-name":"modal-center",scrollable:!0,"footer-hide":!0,"mask-closable":!1,closable:!1},model:{value:t.show,callback:function(s){t.show=s},expression:"show"}},[e("div",{staticClass:"title"},[e("a",{staticClass:"danger"}),e("span",{staticClass:"tit"},[t._v(t._s(t.title))]),e("span",{staticClass:"close",on:{click:t.handleClose}},[e("i",{staticClass:"iconfont icon-error"})])]),e("div",{staticClass:"content"},[e("section",{staticClass:"list-warp"},[t._t("tips",[e("p",{staticClass:"top-tips"},[t._v(t._s(t.tips))])]),e("div",{staticClass:"box"},t._l(t.couponList,(function(s,a){return e("div",{key:a,staticClass:"coupon-wrap"},[e("div",{staticClass:"coupon",class:{all:s.typeAll,amount:s.typeAmount,kg:s.typeKg,dis:s.typeDis}},[e("div",{staticClass:"left"},[e("div",{staticClass:"num"},[e("span",{staticClass:"count",class:{disabled:0===s.status||-1===s.status}},[t._v(t._s(s.amount))]),t._v(t._s(3===s.type?"KG":"元")+"\n              ")]),0===s.type?e("div",{staticClass:"tips"},[t._v(t._s("满"+s.fullAmount+"元使用"))]):1===s.type||3===s.type?e("div",{staticClass:"tips"},[t._v(t._s("满"+s.fullAmount+"KG使用"))]):e("div",{staticClass:"tips"},[t._v(t._s("无门槛"))])]),e("div",{staticClass:"right",class:{useless:-1===s.status,used:0===s.status,due:-2===s.status}},[e("div",{staticClass:"name"},[t._v(t._s(s.name))]),3===s.type?e("div",{staticClass:"limit",attrs:{title:"单笔订单内"+s.amount+"kg,"+s.discountPrice+"元/kg活动优惠"}},[t._v(t._s("单笔订单内"+s.amount+"kg,"+s.discountPrice+"元/kg活动优惠"))]):t._e(),e("div",{staticClass:"limit",attrs:{title:s.useAbleChannelType&&s.useAbleChannelType.length>0?"仅限"+s.useAbleChannelType.join("、")+"使用":""}},[t._v(t._s(s.useAbleChannelType&&s.useAbleChannelType.length>0?"仅限"+s.useAbleChannelType.join("、")+"使用":"所有运输类型均可使用"))]),3!==s.type?e("div",{staticClass:"limit",attrs:{title:s.useAbleCountry&&s.useAbleCountry.length>0?"仅限"+s.useAbleCountry.join("、")+"使用":""}},[t._v(t._s(s.useAbleCountry&&s.useAbleCountry.length>0?"仅限"+s.useAbleCountry.join("、")+"使用":"所有目的国家均可使用"))]):t._e(),e("div",{staticClass:"date"},[t._v(t._s("有效期："+t.formatDate(s.startTime,"yyyy-MM-dd")+"至"+t.formatDate(s.endTime,"yyyy-MM-dd")))])])])])})),0)],2),e("div",{staticClass:"btm"},[e("Button",{staticClass:"btn sure",class:{cancel:"1"===t.type},on:{click:t.handleClose}},[t._v(t._s(1===t.type?"关闭":"知道了"))]),e("Button",{staticClass:"btn sure",on:{click:t.handleLook}},[t._v("查看优惠券")])],1)])])},i=[],n=e("75fc"),l=(e("c5f6"),{name:"v-coupon-modal",props:{value:Boolean,title:{type:String,default:"红包到账"},tips:{type:String,default:"滴！价值200元的无门槛红包已到账~详情可前往个人中心-我的优惠券查看哦"},width:{type:[String,Number],default:"426"},type:{type:String,default:"1"},coupon:{type:Array,default:function(){return[]}}},data:function(){return{}},computed:{show:{get:function(){return this.$validator.reset(),this.value},set:function(t){this.$emit("input",t)}},couponList:function(){var t=Object(n["a"])(this.coupon);return t.map((function(t){t.typeAll=0!==t.status&&-1!==t.status&&2===t.type,t.typeAmount=0!==t.status&&-1!==t.status&&(0===t.type||3===t.type),t.typeKg=0!==t.status&&-1!==t.status&&1===t.type,t.typeDis=0===t.status||-1===t.status})),t}},methods:{initData:function(){this.getCoupon()},handleClose:function(){this.$emit("input",!1),this.$emit("close")},formatDate:function(t){var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-MM-dd hh:mm:ss";return t?this.$wj.util.formatDate(t,s):void 0},handleLook:function(){this.handleClose(),this.$router.push("/my-center/coupon")}}}),o=l,u=(e("29b7"),e("2877")),c=Object(u["a"])(o,a,i,!1,null,"50acba51",null);s["a"]=c.exports}}]);
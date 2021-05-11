(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a9e7157"],{"1b43":function(e,t,r){"use strict";var a=r("4025"),s=r.n(a);s.a},"23f8":function(e,t,r){"use strict";var a=r("9ad7"),s=r.n(a);s.a},4025:function(e,t,r){},5060:function(e,t,r){},"7f8c":function(e,t,r){},"8df1":function(e,t,r){"use strict";var a=r("5060"),s=r.n(a);s.a},"9ad7":function(e,t,r){},c74a:function(e,t,r){"use strict";var a=r("7f8c"),s=r.n(a);s.a},edb4:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{width:e.width,"class-name":"modal-center","mask-closable":!1,closable:!1,scrollable:!0,"footer-hide":!0,transfer:!1},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}},[r("div",{staticClass:"header"},[r("div",{staticClass:"tab-box"},["forget"!==e.loginType?[r("div",{staticClass:"tab-item",class:{active:"login"===e.loginType},on:{click:function(t){return e.handleTab("login")}}},[e._v("登录")]),e.onlyLogin?e._e():r("div",{staticClass:"tab-item",class:{active:"reg"===e.loginType},on:{click:function(t){return e.handleTab("reg")}}},[e._v("注册")])]:r("div",{staticClass:"tab-item",class:{active:"forget"===e.loginType}},[e._v("忘记密码")])],2),r("div",{staticClass:"close",on:{click:e.handleClose}},[r("i",{staticClass:"iconfont icon-close"})])]),r("div",{staticClass:"content"},["login"===e.loginType?r("LoginForm",{attrs:{show:e.show,"can-password-login":e.canPasswordLogin,"validate-phone-number":e.validatePhoneNumber,"request-data":e.requestData,"default-link":e.defaultLink},on:{forget:e.handleForget,success:e.loginSuccess}}):e._e(),"reg"===e.loginType?r("RegForm",{on:{show:e.handleShowReg}}):e._e(),"forget"===e.loginType?r("ForgetForm",{on:{login:e.handleBackLogin}}):e._e()],1)])},s=[],n=(r("8e6e"),r("ac6a"),r("456d"),r("bd86")),o=(r("c5f6"),r("2f62")),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login-form"},[r("div",{staticClass:"login-wrap"},[r("form",{directives:[{name:"show",rawName:"v-show",value:"1"===e.formData.type,expression:"formData.type === '1'"}],staticClass:"login",attrs:{"data-vv-scope":"login-code"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin("1")}}},[r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.phone,expression:"formData.phone",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{type:"hidden",name:"mobile","data-vv-as":"手机号"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("Input",{staticClass:"input",attrs:{placeholder:"手机号"},on:{"on-blur":function(t){return e.handleBlur("login-code.mobile")},"on-change":function(t){return e.handleChange("login-code.mobile")}},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"===typeof t?t.trim():t)},expression:"formData.phone"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("login-code.mobile")&&!e.showErr,expression:"errors.has('login-code.mobile') && !showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("login-code.mobile")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errMsg))])],1),r("div",{staticClass:"form-item code"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.code,expression:"formData.code",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden",name:"code","data-vv-as":"验证码"},domProps:{value:e.formData.code},on:{input:function(t){t.target.composing||e.$set(e.formData,"code",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("Input",{staticClass:"input",attrs:{placeholder:"验证码"},on:{"on-blur":function(t){return e.handleBlur("login-code.code")}},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code","string"===typeof t?t.trim():t)},expression:"formData.code"}}),r("Button",{staticClass:"sendBtn",class:{dis:!e.canSend},attrs:{disabled:!e.canSend},on:{click:e.handleSendCode}},[e._v(e._s(e.btnTxt))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("login-code.code"),expression:"errors.has('login-code.code')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("login-code.code")))])],1),e.canPasswordLogin?r("div",{staticClass:"tips"},[r("a",{on:{click:e.handlePwd}},[e._v("密码登录")])]):e._e(),r("div",{staticClass:"btm"},[r("Button",{staticClass:"know",attrs:{loading:e.codeLoading},on:{click:function(t){return e.handleLogin("1")}}},[e._v("登录")])],1)]),r("form",{directives:[{name:"show",rawName:"v-show",value:"2"===e.formData.type,expression:"formData.type === '2'"}],staticClass:"login",attrs:{"data-vv-scope":"login-pwd"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin("2")}}},[r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.phone,expression:"formData.phone",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{type:"hidden",name:"phone","data-vv-as":"手机号"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("Input",{staticClass:"input",attrs:{placeholder:"手机号"},on:{"on-blur":function(t){return e.handleBlur("login-pwd.phone")}},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"===typeof t?t.trim():t)},expression:"formData.phone"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("login-pwd.phone")&&!e.showErr,expression:"errors.has('login-pwd.phone') && !showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("login-pwd.phone")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errMsg))])],1),r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden","data-vv-as":"密码",name:"password"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{autocomplete:"new-password",type:"password",placeholder:"密码"},on:{"on-blur":function(t){return e.handleBlur("login-pwd.password")}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("login-pwd.password")&&!e.pwdErr,expression:"errors.has('login-pwd.password') && !pwdErr"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("login-pwd.password")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.pwdErr,expression:"pwdErr"}],staticClass:"err-msg"},[e._v(e._s(e.pwdErrMsg))])],1),r("div",{staticClass:"tips two"},[r("a",{on:{click:e.handleCodeLogin}},[e._v("验证码登录")]),r("a",{staticClass:"forget",on:{click:e.handleForget}},[e._v("忘记密码")])]),r("div",{staticClass:"btm"},[r("Button",{staticClass:"know",attrs:{loading:e.loginLoading},on:{click:function(t){return e.handleLogin("2")}}},[e._v("登录")]),r("div",{staticClass:"radio-box",on:{click:e.handleSelect}},[r("span",{staticClass:"radio",class:{checked:e.auto}}),r("span",[e._v("七天自动登录")])])],1)])])])},c=[],d=(r("96cf"),r("3b8d")),l=r("8237"),u=r.n(l),p={destroyed:function(){this.$Message.destroy(),clearInterval(this.timer)},data:function(){return{canSend:!1,sendOver:!0,btnTxt:"发送验证码"}},methods:{getMsgcode:function(e){var t=this;this.canSend=!1,"tips"===e&&this.$Message.success("验证码已发送到您手机，请注意查收");var r=60;this.btnTxt="重新发送(".concat(r,"s)"),this.timer=setInterval((function(){if(r--,t.sendOver=!1,r<=0)return clearInterval(t.timer),t.btnTxt="重新获取",t.canSend=!0,void(t.sendOver=!0);t.btnTxt="重新发送(".concat(r,"s)")}),1e3)}}};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"login-form",mixins:[p],props:{value:Boolean,show:Boolean,width:{type:Number,default:350},title:{type:String,default:"登录"},type:{type:String,default:"login"},canPasswordLogin:{type:Boolean,default:!0},requestData:{type:Object,defaule:function(){return{}}},defaultLink:{type:Boolean,default:!0}},data:function(){return{formData:{type:"1"},showImgCode:!1,auto:!1,showErr:!1,errMsg:"手机号未注册",pwdErr:!1,pwdErrMsg:"密码错误",codeLoading:!1,loginLoading:!1}},watch:{show:function(e){e&&(this.$validator.reset("login-code"),this.$validator.reset("login-pwd"))}},destroyed:function(){clearInterval(this.timer)},methods:m(m(m(m({},Object(o["b"])("app",["getWaitPayOrders"])),Object(o["b"])("user",["getUserInfo","getUserGuideInfo"])),Object(o["c"])("app",["setShowLogin","setBillInfo","setShowInviteRedpackage","setToken"])),{},{handleTest:function(){this.$validator.reset("login-code")},handleChange:function(e){var t=this.formData.phone;this.showErr=!1,/^1[3-9]\d{9}$/.test(t)?(this.$validator.reset(e),this.sendOver&&(this.canSend=!0)):this.canSend=!1,this.$validator.validate(e)},handlePwd:function(){this.formData.type="2"},handleCodeLogin:function(){this.formData.type="1"},handleForget:function(){this.$emit("forget","forget")},handleSelect:function(){this.auto=!0},validate:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll(t);case 2:if(a=e.sent,!a){e.next=8;break}if("1"!==r){e.next=7;break}return this.appLogin(),e.abrupt("return");case 7:this.login();case 8:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),handleBlur:function(e){this.showErr=!1,this.pwdErr=!1,this.$validator.validate(e)},handleLogin:function(e){"1"===e?this.validate("login-code",e):this.validate("login-pwd",e)},handleSendCode:function(){this.verifyPhone(this.formData.phone)},verifyPhone:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.validatePhoneNumber){e.next=7;break}return e.next=3,this.$api.verifyRegister({phoneNumber:t});case 3:if(r=e.sent,!r.success){e.next=7;break}return this.showErr=!0,e.abrupt("return");case 7:this.getAppMsgCode(this.formData.phone),this.getMsgcode();case 9:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),getAppMsgCode:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.sendOver=!1,e.next=3,this.$api.getAppMsgCode({phone:t});case 3:r=e.sent,r.code+""==="200"?this.$Message.success("验证码已发送到您手机，请注意查收"):this.$Message.error(r.msg||"发送失败");case 5:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),verifyRegister:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.verifyRegister({phoneNumber:t});case 2:if(r=e.sent,r.success){e.next=6;break}return this.show=!0,e.abrupt("return");case 6:this.sendOver=!0,this.sendOver2=!0,this.getAppMsgCode(this.info.mobile),this.handleMsgCode();case 10:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),appLogin:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a,s,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!this.validatePhoneNumber){e.next=8;break}return e.next=3,this.$api.verifyRegister({phoneNumber:this.formData.phone});case 3:if(t=e.sent,!t.success){e.next=8;break}return this.showErr=!0,this.errMsg="手机号未注册",e.abrupt("return");case 8:return this.codeLoading=!0,r=this.formData,e.next=12,this.$api.appLogin(m(m({},this.requestData),{},{"user-type":"2",phoneNumber:r.phone,verificationCode:r.code}));case 12:a=e.sent,this.codeLoading=!1,a.code+""==="200"?(s=a.data.Token,n={username:r.phone,token:s,expires:30},this.setToken(s),this.$wj.setLoginCookie(n),this.setShowLogin(!1),this.getWaitPayOrders(),this.formData={type:"1"},o=sessionStorage.getItem("loginPath")||"/",i=sessionStorage.getItem("loginQuery"),this.defaultLink&&this.$router.push({path:o,query:i}),this.checkBillStatus(),this.$istat.report("跨个境-登录页：登录成功"),this.getUserInfo(this),this.getUserGuideInfo(this),this.canShowRedBag(),this.$wj.cookie("inviteCode",""),this.$emit("success")):(this.$Message.error(a.msg||"登录失败"),this.$istat.report("跨个境-登录页：登录失败"));case 15:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a,s,n,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.verifyRegister({phoneNumber:this.formData.phone});case 2:if(t=e.sent,!t.success){e.next=7;break}return this.showErr=!0,this.errMsg="手机号未注册",e.abrupt("return");case 7:return this.loginLoading=!0,r=this.formData,e.next=11,this.$api.login({username:r.phone,password:u()(r.password),cache:this.auto});case 11:a=e.sent,this.loginLoading=!1,a.success?(s=a.data.Token,n={username:r.phone,token:s,expires:this.auto?7:30},this.setToken(s),this.$wj.setLoginCookie(n),this.setShowLogin(!1),this.getWaitPayOrders(),this.formData={type:"1"},o=sessionStorage.getItem("loginPath")||this.$route.path,i=JSON.parse(sessionStorage.getItem("loginQuery")),this.defaultLink&&this.$router.push({path:o,query:i}),this.checkBillStatus(),this.$istat.report("跨个境-登录页：登陆成功"),this.getUserInfo(this),this.getUserGuideInfo(this),this.canShowRedBag(),this.$wj.cookie("inviteCode",""),this.$emit("success")):(this.$istat.report("跨个境-登录页：登陆失败"),this.pwdErr=!0,this.pwdErrMsg=a.message,this.$Message.error(a.message||"登录失败"));case 14:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkBillStatus:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.checkBillStatus();case 2:t=e.sent,200===t.code?(r=t.data||{},this.setBillInfo(r)):this.$Message.error(t.msg||"请求失败");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),canShowRedBag:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.canShowRedBag();case 2:t=e.sent,"200"===t.code?(r=t.data,r&&this.setShowInviteRedpackage(!0)):this.$Message.error(t.msg||"请求失败");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},v=f,g=(r("c74a"),r("2877")),w=Object(g["a"])(v,i,c,!1,null,"31f41851",null),b=w.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"reg-form"},[r("div",{staticClass:"content"},[r("div",{staticClass:"reg-wrap"},[r("form",{staticClass:"login"},[r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.phone,expression:"formData.phone",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{type:"hidden",name:"phone","data-vv-as":"手机号"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("Input",{staticClass:"input",attrs:{placeholder:"手机号"},on:{"on-blur":function(t){return e.handleBlur("phone")},"on-change":function(t){return e.handleChange("phone")}},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"===typeof t?t.trim():t)},expression:"formData.phone"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("phone")&&!e.showErr,expression:"errors.has('phone') && !showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("phone")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errMsg))])],1),r("div",{staticClass:"form-item code"},[r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.formData.code,expression:"formData.code",modifiers:{trim:!0}},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden","data-vv-as":"验证码",name:"code"},domProps:{value:e.formData.code},on:{input:function(t){t.target.composing||e.$set(e.formData,"code",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),r("Input",{staticClass:"input",attrs:{placeholder:"验证码"},on:{"on-blur":function(t){return e.handleBlur("code")}},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code","string"===typeof t?t.trim():t)},expression:"formData.code"}}),r("Button",{staticClass:"sendBtn",class:{dis:!e.canSend},attrs:{disabled:!e.canSend},on:{click:e.handleSendCode}},[e._v(e._s(e.btnTxt))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("code"),expression:"errors.has('code')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("code")))])],1),r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"},{name:"validate",rawName:"v-validate",value:"required|password",expression:"'required|password'"}],attrs:{type:"hidden",name:"passwordR","data-vv-as":"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{type:"password",autocomplete:"new-password",placeholder:"设置密码"},on:{"on-blur":function(t){return e.handleBlur("passwordR")}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("passwordR"),expression:"errors.has('passwordR')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("passwordR")))])],1),r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.confirmPassword,expression:"formData.confirmPassword"},{name:"validate",rawName:"v-validate",value:"required|confirmed:passwordR",expression:"'required|confirmed:passwordR'"}],attrs:{type:"hidden","data-vv-as":"确认密码",name:"confirmPassword"},domProps:{value:e.formData.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.formData,"confirmPassword",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{type:"password",autocomplete:"new-password",placeholder:"确认密码"},on:{"on-blur":function(t){return e.handleBlur("confirmPassword")}},model:{value:e.formData.confirmPassword,callback:function(t){e.$set(e.formData,"confirmPassword",t)},expression:"formData.confirmPassword"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("confirmPassword"),expression:"errors.has('confirmPassword')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("confirmPassword")))])],1),r("div",{staticClass:"btm"},[r("Button",{staticClass:"know",on:{click:e.handleRegister}},[e._v("注册")])],1)])])]),r("ModalTips",{attrs:{mobile:e.formData.phone},on:{valiate:e.handleValidate},model:{value:e.showImgCode,callback:function(t){e.showImgCode=t},expression:"showImgCode"}})],1)},x=[],D=r("17b7");function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O={name:"reg-form",mixins:[p],components:{ModalTips:D["a"]},props:{value:Boolean,width:{type:Number,default:350},title:{type:String,default:"登录"},type:{type:String,default:"login"}},data:function(){return{formData:{},showImgCode:!1,showErr:!1,errMsg:"手机号已注册"}},computed:{show:{get:function(){return this.value},set:function(e){this.$emit("input",!1)}}},destroyed:function(){clearInterval(this.timer)},methods:k(k(k({},Object(o["b"])("user",["getUserInfo"])),Object(o["c"])("app",["setShowLogin","setBillInfo"])),{},{handleChange:function(e){var t=this.formData.phone;this.showErr=!1,/^1[3-9]\d{9}$/.test(t)?(this.$validator.reset(e),this.sendOver&&(this.canSend=!0)):this.canSend=!1,this.$validator.validate(e)},handleBlur:function(e){this.$validator.validate(e)},handleRegister:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll();case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:this._register();case 6:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),handleSendCode:function(){this.verifyPhone(this.formData.phone)},handleValidate:function(){this.getMsgcode("tips")},verifyPhone:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.verifyRegister({phoneNumber:t});case 2:if(r=e.sent,r.success){e.next=6;break}return this.showErr=!0,e.abrupt("return");case 6:this.showImgCode=!0;case 7:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}(),_register:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r,a,s,n,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=this.$wj.getParam("channelId")||this.$wj.session("channelid")||"",r=this.$wj.cookie("inviteCode"),a=this.formData,s={phoneNumber:a.phone,verificationCode:a.code,password:u()(a.password),confirmPassword:u()(a.confirmPassword),channelId:t},r&&(s.inviteCode=r),e.next=7,this.$api.register(s);case 7:n=e.sent,n.success?(o=n.data.Token,this.loginState={username:this.formData.phone,token:o,expires:30},this.$wj.logout(),this.$wj.setLoginCookie(this.loginState),this.setShowLogin(!1),this.checkBillStatus(),this.$emit("show"),this.getUserInfo(this),this.getUserGuideInfo(this),this.$wj.cookie("inviteCode","")):this.$Message.error(n.message||"注册失败"),this.$istat.report("跨个境-注册页：注册".concat(n.success?"成功":"失败"));case 10:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),checkBillStatus:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.checkBillStatus();case 2:t=e.sent,200===t.code?(r=t.data||{},this.setBillInfo(r)):this.$Message.error(t.msg||"请求失败");case 4:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},$=O,P=(r("1b43"),Object(g["a"])($,y,x,!1,null,"0e302254",null)),j=P.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"forget-form"},[r("div",{staticClass:"content"},[r("div",{directives:[{name:"show",rawName:"v-show",value:!e.isSuccess,expression:"!isSuccess"}],staticClass:"wrap"},[r("form",{directives:[{name:"show",rawName:"v-show",value:"1"===e.formData.step,expression:"formData.step === '1'"}],staticClass:"login",attrs:{"data-vv-scope":"forget-step1"}},[r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.phone,expression:"formData.phone"},{name:"validate",rawName:"v-validate",value:"required|mobile",expression:"'required|mobile'"}],attrs:{type:"hidden",name:"phone"},domProps:{value:e.formData.phone},on:{input:function(t){t.target.composing||e.$set(e.formData,"phone",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{placeholder:"手机号"},on:{"on-blur":function(t){return e.handleBlur("forget-step1.phone")},"on-change":function(t){return e.handleChange("forget-step1.phone")}},model:{value:e.formData.phone,callback:function(t){e.$set(e.formData,"phone","string"===typeof t?t.trim():t)},expression:"formData.phone"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("forget-step1.phone")&&!e.showErr,expression:"errors.has('forget-step1.phone') && !showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("forget-step1.phone")))]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.showErr,expression:"showErr"}],staticClass:"err-msg"},[e._v(e._s(e.errMsg))])],1),r("div",{staticClass:"form-item code"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.code,expression:"formData.code"},{name:"validate",rawName:"v-validate",value:"required",expression:"'required'"}],attrs:{type:"hidden","data-vv-as":"验证码",name:"code"},domProps:{value:e.formData.code},on:{input:function(t){t.target.composing||e.$set(e.formData,"code",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{placeholder:"验证码"},on:{"on-blur":function(t){return e.handleBlur("forget-step1.code")}},model:{value:e.formData.code,callback:function(t){e.$set(e.formData,"code",t)},expression:"formData.code"}}),r("Button",{staticClass:"sendBtn",class:{dis:!e.canSend},attrs:{disabled:!e.canSend,loading:e.loadingSend},on:{click:e.handleSendCode}},[e._v("\n            "+e._s(e.btnTxt)+"\n          ")]),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("forget-step1.code"),expression:"errors.has('forget-step1.code')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("forget-step1.code")))])],1),r("div",{staticClass:"tips"},[r("a",{on:{click:e.handleBackLogin}},[e._v("返回登录")])]),r("div",{staticClass:"btm"},[r("Button",{staticClass:"know",attrs:{loading:e.loading1},on:{click:function(t){return e.handleNext("1")}}},[e._v("下一步")])],1)]),r("form",{directives:[{name:"show",rawName:"v-show",value:"2"===e.formData.step,expression:"formData.step === '2'"}],staticClass:"login",attrs:{"data-vv-scope":"forget-step2"}},[r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.password,expression:"formData.password"},{name:"validate",rawName:"v-validate",value:"required|password",expression:"'required|password'"}],attrs:{type:"hidden",name:"passwordF","data-vv-as":"密码"},domProps:{value:e.formData.password},on:{input:function(t){t.target.composing||e.$set(e.formData,"password",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{type:"password",autocomplete:"new-password",placeholder:"设置密码"},on:{"on-blur":function(t){return e.handleBlur("forget-step2.passwordF")}},model:{value:e.formData.password,callback:function(t){e.$set(e.formData,"password",t)},expression:"formData.password"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("forget-step2.passwordF"),expression:"errors.has('forget-step2.passwordF')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("forget-step2.passwordF")))])],1),r("div",{staticClass:"form-item"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.formData.confirmPassword,expression:"formData.confirmPassword"},{name:"validate",rawName:"v-validate",value:"required|confirmed:passwordF",expression:"'required|confirmed:passwordF'"}],attrs:{type:"hidden","data-vv-as":"确认密码",name:"confirmPassword"},domProps:{value:e.formData.confirmPassword},on:{input:function(t){t.target.composing||e.$set(e.formData,"confirmPassword",t.target.value)}}}),r("Input",{staticClass:"input",attrs:{type:"password",autocomplete:"new-password",placeholder:"确认密码"},on:{"on-blur":function(t){return e.handleBlur("forget-step2.confirmPassword")}},model:{value:e.formData.confirmPassword,callback:function(t){e.$set(e.formData,"confirmPassword",t)},expression:"formData.confirmPassword"}}),r("p",{directives:[{name:"show",rawName:"v-show",value:e.errors.has("forget-step2.confirmPassword"),expression:"errors.has('forget-step2.confirmPassword')"}],staticClass:"err-msg"},[e._v(e._s(e.errors.first("forget-step2.confirmPassword")))])],1),r("div",{staticClass:"tips"},[r("a",{on:{click:e.handleBackLogin}},[e._v("返回登录")])]),r("div",{staticClass:"btm"},[r("Button",{staticClass:"know",attrs:{loading:e.loading2},on:{click:function(t){return e.handleNext("2")}}},[e._v("下一步")])],1)])]),r("div",{directives:[{name:"show",rawName:"v-show",value:e.isSuccess,expression:"isSuccess"}],staticClass:"success-box"},[e._m(0),r("p",{staticClass:"tips"},[e._v("您已成功设置密码,请使用新密码登陆")]),r("div",{staticClass:"btnBox"},[r("Button",{staticClass:"btn",on:{click:e.handleBackLogin}},[e._v("马上登录")])],1)])])])},_=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"iconWrap"},[r("i",{staticClass:"iconfont icon-sure"})])}];function N(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function B(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?N(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var R={name:"forget-form",mixins:[p],props:{value:Boolean,width:{type:Number,default:350},title:{type:String,default:"登录"},type:{type:String,default:"login"}},data:function(){return{time:"",formData:{step:"1"},showImgCode:!1,auto:!1,showErr:!1,errMsg:"手机号未注册",loadingSend:!1,loading1:!1,loading2:!1,isSuccess:!1}},computed:{show:{get:function(){return this.value},set:function(e){this.$emit("input",!1)}}},destroyed:function(){clearInterval(this.timer)},methods:B(B({},Object(o["c"])("app",["setShowLogin"])),{},{handleChange:function(e){var t=this.formData.phone;this.showErr=!1,/^1[3-9]\d{9}$/.test(t)?(this.$validator.reset(e),this.sendOver&&(this.canSend=!0)):this.canSend=!1,this.$validator.validate(e)},handleBackLogin:function(){this.$emit("login","login")},validateForget:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t,r){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll(t);case 2:if(a=e.sent,a){e.next=5;break}return e.abrupt("return");case 5:if("1"!==r){e.next=8;break}return this.findPassword(),e.abrupt("return");case 8:this.setNewPassword();case 9:case"end":return e.stop()}}),e,this)})));function t(t,r){return e.apply(this,arguments)}return t}(),handleNext:function(e){"1"===e?this.validateForget("forget-step1",e):this.validateForget("forget-step2",e)},handleBlur:function(e){this.$validator.validate(e)},handleSendCode:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$api.verifyRegister({phoneNumber:this.formData.phone});case 2:if(t=e.sent,!t.success){e.next=6;break}return this.showErr=!0,e.abrupt("return");case 6:return this.showErr=!1,this.loadingSend=!0,e.next=10,this.$api.findPasswordGetMsgCode(this.formData.phone);case 10:r=e.sent,this.loadingSend=!1,r.success?this.getMsgcode("tips"):this.$Message.error(r.message||"发送失败");case 13:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),findPassword:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll("validate-mobile");case 2:if(t=e.sent,t&&!this.showErr){e.next=5;break}return e.abrupt("return");case 5:return this.loading1=!0,e.next=8,this.$api.findPassword({phoneNumber:this.formData.phone,code:this.formData.code});case 8:r=e.sent,this.loading1=!1,r.success?this.formData.step="2":this.$Message.error(r.message||"请求失败");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}(),setNewPassword:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$validator.validateAll("forget-step2");case 2:if(t=e.sent,t){e.next=5;break}return e.abrupt("return");case 5:return this.loading2=!0,e.next=8,this.$api.findPasswordSetPwd({password:u()(this.formData.password),phoneNumber:this.formData.phone});case 8:r=e.sent,this.loading2=!1,r.success?this.isSuccess=!0:this.$Message.error(r.message||"设置失败");case 11:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()})},E=R,L=(r("23f8"),Object(g["a"])(E,S,_,!1,null,"3fd266de",null)),I=L.exports;function M(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?M(Object(r),!0).forEach((function(t){Object(n["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var q={name:"login-modal",components:{LoginForm:b,RegForm:j,ForgetForm:I},props:{value:Boolean,width:{type:Number,default:350},title:{type:String,default:"登录"},onlyLogin:{type:Boolean,defaule:!1},canPasswordLogin:{type:Boolean,defaule:!0},validatePhoneNumber:{type:Boolean,defaule:!0},requestData:{type:Object,defaule:function(){return{}}},defaultLink:{type:Boolean,default:!0}},data:function(){return{time:""}},computed:T(T({},Object(o["d"])("app",["loginType"])),{},{show:{get:function(){return this.value},set:function(e){this.$emit("input",!1)}}}),methods:T(T({},Object(o["c"])("app",["setShowLogin","setLoginType"])),{},{handleClose:function(){this.setShowLogin(!1);var e=this.$route;e.meta.needAuth&&this.$router.push("/"),this.setLoginType("login"),this.$emit("close")},handleTab:function(e){this.setLoginType(e)},handleForget:function(){this.setLoginType("forget")},handleBackLogin:function(){this.setLoginType("login")},handleShowReg:function(){this.setLoginType("login")},loginSuccess:function(){this.$emit("success")}})},F=q,U=(r("8df1"),Object(g["a"])(F,a,s,!1,null,"71f7f041",null));t["a"]=U.exports}}]);
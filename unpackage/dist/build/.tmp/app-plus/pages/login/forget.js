(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/forget"],{"25c5":function(t,e,s){"use strict";(function(t){var s,n;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{phoneno:"",second:0,code:"",showPassword:!1,password:""}},onLoad:function(){s=this},computed:{yanzhengma:function(){return 0==this.second?"获取验证码":this.second<10?"重新获取0"+this.second:"重新获取"+this.second}},methods:{display:function(){this.showPassword=!this.showPassword},getcode:function(){this.second>0||t.request({url:"http://***/getcode.html",data:{phoneno:this.phoneno,code_type:"reg"},method:"POST",dataType:"json",success:function(e){200!=e.data.code?(t.showToast({title:e.data.msg,icon:"none"}),s.second=0):(t.showToast({title:e.data.msg}),s.second=60,n=setInterval(function(){s.second--,0==s.second&&clearInterval(n)},1e3))}})},bindLogin:function(){11==this.phoneno.length?this.password.length<6?t.showToast({icon:"none",title:"密码不正确"}):4==this.code.length?t.request({url:"http://***/forget.html",data:{phoneno:this.phoneno,password:this.password,code:this.code},method:"POST",dataType:"json",success:function(e){200!=e.data.code?t.showToast({title:e.data.msg,icon:"none"}):(t.showToast({title:e.data.msg}),setTimeout(function(){t.navigateBack()},1500))}}):t.showToast({icon:"none",title:"验证码不正确"}):t.showToast({icon:"none",title:"手机号不正确"})}}};e.default=o}).call(this,s("649d")["default"])},"48cd":function(t,e,s){"use strict";s("34d8");var n=a(s("b0ce")),o=a(s("d037"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(o.default))},"600f":function(t,e,s){},"698e":function(t,e,s){"use strict";s.r(e);var n=s("25c5"),o=s.n(n);for(var a in n)"default"!==a&&function(t){s.d(e,t,function(){return n[t]})}(a);e["default"]=o.a},af5d:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[s("view",{staticClass:"list"},[s("view",{staticClass:"tishi"},[t._v("若您忘记了密码，可在此重新设置新密码。")]),s("view",{staticClass:"list-call"},[s("image",{staticClass:"img",attrs:{src:"/static/shilu-login/1.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneno,expression:"phoneno"}],staticClass:"biaoti",attrs:{type:"number",maxlength:"11",placeholder:"请输入手机号",eventid:"89081e3e-0"},domProps:{value:t.phoneno},on:{input:function(e){e.target.composing||(t.phoneno=e.target.value)}}})]),s("view",{staticClass:"list-call"},[s("image",{staticClass:"img",attrs:{src:"/static/shilu-login/2.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"biaoti",attrs:{type:"text",maxlength:"32",placeholder:"请输入新密码",password:!t.showPassword,eventid:"89081e3e-1"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),s("image",{staticClass:"img",attrs:{src:t.showPassword?"/static/shilu-login/op.png":"/static/shilu-login/cl.png",eventid:"89081e3e-2"},on:{tap:t.display}})]),s("view",{staticClass:"list-call"},[s("image",{staticClass:"img",attrs:{src:"/static/shilu-login/3.png"}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.code,expression:"code"}],staticClass:"biaoti",attrs:{type:"number",maxlength:"4",placeholder:"验证码",eventid:"89081e3e-3"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value)}}}),s("view",{staticClass:"yzm",class:{yzms:t.second>0},attrs:{eventid:"89081e3e-4"},on:{tap:t.getcode}},[t._v(t._s(t.yanzhengma))])])]),s("view",{staticClass:"dlbutton",attrs:{"hover-class":"dlbutton-hover",eventid:"89081e3e-5"},on:{tap:function(e){t.bindLogin()}}},[s("text",[t._v("修改密码")])])])},o=[];s.d(e,"a",function(){return n}),s.d(e,"b",function(){return o})},d037:function(t,e,s){"use strict";s.r(e);var n=s("af5d"),o=s("698e");for(var a in o)"default"!==a&&function(t){s.d(e,t,function(){return o[t]})}(a);s("e153");var i=s("2877"),c=Object(i["a"])(o["default"],n["a"],n["b"],!1,null,null,null);e["default"]=c.exports},e153:function(t,e,s){"use strict";var n=s("600f"),o=s.n(n);o.a}},[["48cd","common/runtime","common/vendor"]]]);
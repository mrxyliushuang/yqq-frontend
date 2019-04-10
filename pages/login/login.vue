<template>
	<view class="content">
		<view class="header">
			<image src="../../static/shilu-login/ren.png"></image>
		</view>

		<view class="list">
			<view class="list-call">
				<image class="img" src="/static/shilu-login/1.png"></image>
				<input class="biaoti" v-model="username" type="number" maxlength="11" placeholder="输入用户名" />
			</view>
			<view class="list-call">
				<image class="img" src="/static/shilu-login/2.png"></image>
				<input class="biaoti" v-model="userpwd" type="text" maxlength="32" placeholder="输入密码" password="true" />
			</view>

		</view>

		<view class="dlbutton" hover-class="dlbutton-hover" @tap="bindLogin()">
			<text>登录</text>
		</view>
		<view class="opts">
			<checkbox-group style="width: auto">
				<label>
					<checkbox value="remember" :checked='rememberPsw' @tap="rememberPsw =! rememberPsw" />记住密码</label>
			</checkbox-group>
			<navigator url="reg" open-type="navigate">注册账户</navigator>

		</view>
		<!-- 		<view class="xieyi">
			 <navigator url="forget" open-type="navigate">忘记密码</navigator>
			<text>|</text> -->

	</view>
	</view>
</template>

<script>

	export default {
		onLoad() {
			var thison = this;
			const userName = uni.getStorageSync('userName');
			const userPsw = uni.getStorageSync('userPsw');
			if (userName && userPsw) {
				thison.username = userName;
				thison.userpwd = userPsw;
				setTimeout(function() {
					var autologin = uni.getStorageSync('autologin');
					if (autologin) { //勾选自动登陆
						thison.login()
					}
				}, 1000)

			} else {
				thison.username = "";
				thison.userpwd = "";
			}
		},
		data() {
			return {
				username: '',
				userpwd: '',
				rememberPsw: true,
			};
		},
		methods: {
			//...mapMutations(['login']),
			bindLogin() {
				console.log('username:' + this.username + ',pwd:' + this.userpwd);
				let loginData = {};
				loginData.username = this.username;
				loginData.password = this.userpwd;
				var that = this;
				console.log(loginData);

				uni.request({
					url: this.$serverUrl + '/login' + '?username=' + loginData.username +'&password=' + loginData.password,
					data: loginData,
					method: 'POST',
					success: (ret) => {
						if (ret.data.msg != 'success') {
							console.log("login访问不成功")
							console.log(JSON.stringify(ret))
						} else {
							console.log("login访问成功")
							if (that.rememberPsw) { //用户勾选“记住密码”
								uni.setStorageSync('userName', that.username);
								uni.setStorageSync('userPsw', that.userpwd);
							} else { //用户没有勾选“记住密码”
								uni.removeStorageSync('userName');
								uni.removeStorageSync('userPsw');
								that.username = "";
								that.userpwd = "";
							}
							uni.switchTab({
								url: '../tabbar/home/home',
							});
						}
					},
					fail: (res) => {
						console.log("login访问失败", res)
					}
				});

			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}

	.header {
		width: 200upx;
		height: 200upx;
		/* background: rgba(63, 205, 235, 1); */
		/* box-shadow: 0upx 12upx 13upx 0upx rgba(63, 205, 235, 0.47); */
		border-radius: 50%;
		margin-top: 30upx;
		margin-left: auto;
		margin-right: auto;
	}

	.header image {
		width: 161upx;
		height: 161upx;
		border-radius: 50%;
	}

	.list {
		display: flex;
		flex-direction: column;
		padding-top: 50upx;
		padding-left: 70upx;
		padding-right: 70upx;
	}

	.list-call {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		color: #333333;
		border-bottom: 1upx solid rgba(230, 230, 230, 1);
	}

	.list-call .img {
		width: 40upx;
		height: 40upx;
	}

	.list-call .biaoti {
		flex: 1;
		text-align: left;
		font-size: 32upx;
		line-height: 100upx;
		margin-left: 16upx;
	}

	.dlbutton {
		color: #FFFFFF;
		font-size: 34upx;
		width: 470upx;
		height: 100upx;
		/* 	background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1)); */
		background: #ED1C24;
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		border-radius: 50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}

	.dlbutton-hover {
		/* 	background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9)); */
	}

	.xieyi {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		font-size: 30upx;
		margin-top: 80upx;
		color: #FFA800;
		text-align: center;
		height: 40upx;
		line-height: 40upx;
	}

	.xieyi text {
		font-size: 24upx;
		margin-left: 15upx;
		margin-right: 15upx;
	}
	
	.opts {
		margin-top: 15px;
		margin-left: 25px;
		margin-right: 25px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		color: #000;
	}
</style>

<template>
	<view>
		<view class="mybg">
			<view class="mymsg">{{rulePublish.ruleTitle}}</view>
			<view class="mytime">{{rulePublishDatetime.ruleDatetimeStart|formatDate}}-{{rulePublishDatetime.ruleDatetimeEnd|formatDate}}</view>

		</view>
		<view class="classcontent">
			<text>{{rulePublish.ruleContent}}</text>
		</view>
		<form>
			<view class="cu-form-group ">
				<view class="title">渠道类型</view>
				<input :placeholder="rulePublish.ruleType" disabled></input>
			</view>
			<!-- 	<view class="cu-form-group ">
				<view class="title">抢单角色</view>
				  <input v-if="rulePublish.roleId==0" disabled>营业员</input>
				  <input v-if="rulePublish.roleId==1" disabled>渠道经理</input>
				  <input v-if="rulePublish.roleId==2" disabled>管理员</input>
				  <input v-if="rulePublish.roleId==3" disabled>客户经理</input>
			</view> -->
			<view class="cu-form-group ">
				<view class="title">可抢个数</view>
				<input :placeholder="rulePublishDatetime.ruleNum" disabled></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">抢单号码</view>
				<input placeholder="请输入抢单号码" name="input" v-model="snatchMobileNumber"></input>
			</view>
			<view>
				<button @click="handleSubmit">提交并分享</button>
			</view>

		</form>
		<!-- <view class="handle">
			<v-form @submit="handleSubmit" :formDefinition="formDefinition" :data="data" />
		</view> -->
	</view>

</template>

<script>
	import {formatDate} from 'common/common'
	export default {
		filters: {
		    formatDate(time) {
		        var date = new Date(time);
		        return formatDate(date, 'yyyy-MM-dd');
		    }
		},
		data() {
			
			return {
				snatchMobileNumber: '',
				rulePublish: {},
				rulePublishDatetime: {},
				ruleContent: '',

			};
		},
		onLoad: function(option) {
			this.rulePublishId = option.rulePublishId; //上个页面传递的参数。
			this.getData(); //加载人员信息数据

		},
		onShow() { //返回显示页面状态函数

		},
		methods: {
			handleSubmit() {
				var that = this;
				let addData = {};
				addData.snatchMobileNumber = this.snatchMobileNumber;
				addData.rulePublishId = this.rulePublishId;
				if (this.snatchMobileNumber != null && this.snatchMobileNumber != "") {
					uni.request({
						url: this.$serverUrl + '/snatchinfo/insert',
						data: addData,
						method: 'POST',
						success: (res) => {
							console.log(res);
							if (res.statusCode == 200) {
								uni.showToast({
									title: '提交成功',
									icon: 'success',
									duration: 1000
								});

								uni.share({
									provider: "weixin",
									scene: "WXSceneSession",
									type: 1,
									summary: '抢单成功：'+that.rulePublish.ruleTitle+','+that.rulePublish.ruleContent+',抢单号：'+that.snatchMobileNumber,
									success: function(res) {
										console.log("success:" + JSON.stringify(res));
									},
									fail: function(err) {
										console.log("fail:" + JSON.stringify(err));
									}
								});

							} else {
								uni.showToast({
									title: '提交失败',
									icon: 'none',
									duration: 1000
								});
							}
						}
					});
					uni.share({
						provider: "weixin",
						scene: "WXSceneSession",
						type: 1,
						summary: that.ruleTitle + that.ruleContent,
						success: function(res) {
							console.log("success:" + JSON.stringify(res));
						},
						fail: function(err) {
							console.log("fail:" + JSON.stringify(err));
						}
					});
				}else{
					uni.showToast({
						title: '请输入抢单号码',
						icon: 'none',
						duration: 1500
					});
				}
			},
			//更新人员明细数据
			getData(e) {
				uni.request({
					url: this.$serverUrl + '/publish/selectPublishById' + '?rulePublishId=' + this.rulePublishId,
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败", ret)
						} else {
							console.log(ret.data.rows);
							this.rulePublish = ret.data.rows;
							this.rulePublishDatetime = this.rulePublish.rulePublishDatetime;
							console.log(this.rulePublish);
						}
					}
				});
			},

		},
		components: {

		}
	}
</script>
<style>
	.mybg {
		/* background-color:#BBBBBB; */
	/* 	background-color: #c5d7f1; */
		height: 90px;
		width: 100%;
		align-items: center;
		justify-content: center;
		border-bottom:1upx solid;
		border-top:1upx solid

	}

	.mymsg {
		text-align: center;
		font-size: 20px;
		padding-top: 20px;
	}

	.mytime {
		text-align: center;
		font-size: 12px;
		/* 	padding-right: 10px; */
	}

	.classcontent {
		/* 	margin-top: 20px; */
		padding: 0 5px;
		/* margin-top: 20px; */
		text-align: center;
		font-size: 15px;
		letter-spacing: 2px;
		text-indent: 25px;
		font-family: '微软雅黑';
		background-color: #FFFFFF;
		border-bottom:1upx solid;
	}

	.handle {
		margin-top: 50px;
	}

	.ref {
		width: 100%;
	}

	.refpopup {
		height: 150px;
	}

	.grabs {
		text-align: left;
	}

	.number {
		text-align: left;
	}
</style>

<template>
	<!-- <view style="background-color: #FFFFFF;background-size:100% 100%;"> -->
	<view>
		<view class="mybg">
			<view class="mymsg">{{rulePublish.ruleTitle}}</view>
			<view class="mytime">{{rulePublishDatetime.ruleDatetimeStart|formatDate}}-{{rulePublishDatetime.ruleDatetimeEnd|formatDate}}</view>
		
		</view>
		<view class="classcontent">
			<text>{{rulePublish.ruleContent}}</text>
		</view>
		<view>
			<form  >
				
				
					<view class="cu-form-group ">
						<view class="title">抢单号码</view>
						<input :placeholder="rulePublish.snatchMobileNumber"  disabled></input>
					</view>
					<view class="cu-form-group">
						<view class="title">抢单门店</view>
						<input :placeholder="rulePublish.storeName"  disabled></input>
					</view>
					<view class="cu-form-group">
						<view class="title">审核时间</view>
						<input :placeholder="rulePublish.auditDatetime|formatDate" disabled></input>
					</view>
					<view class="cu-form-group">
						<view class="title">审核状态</view>
						<input v-if="rulePublish.isAudit==0" placeholder="未审核"  disabled></input>
						<input v-if="rulePublish.isAudit==1" placeholder="审核成功"  disabled></input>
						<input v-if="rulePublish.isAudit==2" placeholder="审核失败"  disabled></input>
					</view>
					
			</form>
		</view>
		

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
				rulePublishId: '',
				ruleTitle: '',
				rulePublish: {},
				rulePublishDatetime: {},
				ruleContent: '',
				
			};
		},
		onLoad: function(option) {
			this.snatchMobileNumber = option.snatchMobileNumber; //上个页面传递的参数。
			this.getData(); //加载人员信息数据

		},
		onShow() { //返回显示页面状态函数

		},
		methods: {

			 
			//更新人员明细数据
			getData(e) {
				console.log(this.snatchMobileNumber);
				uni.request({
					url: this.$serverUrl + '/snatchinfo/mySnatchDetail' + '?snatchMobileNumber=' + this.snatchMobileNumber,
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败", ret)
						} else {
							console.log(ret);
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
	

	


</style>

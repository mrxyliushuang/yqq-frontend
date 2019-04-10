<template>
	<view class="content">
		<view class="header uni-column">
			<view ><image src="../../../static/shilu-login/ren.png"></image></view>
			<view>翼起抢 1.0.0</view>
		</view>
		<view class="itemlist">

			<view class="uni-card">
				<view class="uni-card-header">功能介绍</view>
				<view class="uni-card-content">
					<view class="uni-card-content-inner">
						实现自动记录报单信息，并获取审核和抢单记录。首先能进行抢单且能够分享至聊天群形成氛围，并能查询是否抢单成功，最后能够批量审批报单号码能够对抢单历史数据进行统计分析。
					</view>
				</view>
				<!-- <view class="uni-card-footer">页脚</view> -->
			</view>
			<view class="group">

				<text>开发团队</text>
				</br>
				<text>熊彬含，刘爽，罗勇，朱春花</text>
				</br>
				<text>Copyright 2019-2029 Tecent. </text>
				</br>
				<text>All Rights Reserved </text>
			</view>

		</view>

	</view>




	</view>
</template>

<script>
	export default {
		onLoad() {
			// that = this;
		},
		data() {

			return {
				phoneno: '',
				password: '',
				text: '',

			};
		},
		methods: {

		},
		components: {

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
		width: 100%;
		height: 100px;
		/* background: rgba(63, 205, 235, 1); */
		/* box-shadow: 0upx 12upx 13upx 0upx rgba(63, 205, 235, 0.47); */
		border-radius: 50%;
		margin-top: 50upx;
		margin-left: auto;
		margin-right: auto;
		align-items: center;
		justify-content: center;
		display: flex;
	}
	.header view{
		display: flex;
		align-items: center;
		justify-content: center;
		
	}
	.header image {
		width: 180upx;
		height: 180upx;
		border-radius: 50%;
	}

	.header text {
		margin: 20px ;
		font-size: 15px;
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
		background: linear-gradient(-90deg, rgba(63, 205, 235, 1), rgba(188, 226, 158, 1));
		box-shadow: 0upx 0upx 13upx 0upx rgba(164, 217, 228, 0.2);
		border-radius: 50upx;
		line-height: 100upx;
		text-align: center;
		margin-left: auto;
		margin-right: auto;
		margin-top: 100upx;
	}

	.dlbutton-hover {
		background: linear-gradient(-90deg, rgba(63, 205, 235, 0.9), rgba(188, 226, 158, 0.9));
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

	.itemlist {
		margin-top: 35px;
	}

	.text-box {
		margin-bottom: 40upx;
		padding: 40upx 0;
		display: flex;
		min-height: 300upx;
		background-color: #FFFFFF;
		justify-content: center;
		align-items: center;
		text-align: center;
		font-size: 30upx;
		color: #353535;
		line-height: 1.8;
		padding: 0 4px;
	}

	.group {
		font-size: 30upx;
		color: #353535;
		font-size: 30upx;
		text-align: center;
		margin-top: 170px;
	}
</style>

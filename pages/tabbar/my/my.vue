<template>
	<view>
		<view class="header" v-bind:class="{}">
			<view class="userinfo">
				<view class="face">
					<image :src="userinfo.face"></image>
				</view>
				<view class="info">
					<view class="username">{{people.userName}}</view>
					<view class="integral">号码:{{people.userId}}</view>
				</view>
			</view>
			<view class="setting">
				<image src="../../../static/HM-PersonalCenter/setting.png"></image>
			</view>
		</view>
		<!-- <view class="list" v-for="(list,list_i) in severList" :key="list_i"> -->
		<view class="list">
			<view class="li" v-for="(item,index) in severList" @tap="toPage(index)" v-bind:class="{'noborder':index==severList.length-1}"
			 hover-class="hover" :key="item.name" v-if="item.name!='我的发布'&&item.name!='发布'||(user.roleId=='00A'||user.roleId=='00B'||user.roleId=='00C')">
				<view class="icon">
					<image :src="'../../../static/HM-PersonalCenter/sever/'+item.icon"></image>
				</view>
				<view class="text">{{item.name}}</view>
				<image class="to" src="../../../static/HM-PersonalCenter/to.png"></image>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				//#ifdef APP-PLUS
				isH5Plus: true,
				//#endif
				//#ifndef APP-PLUS

				//#endif
				people: {},
				userinfo: {},
				user:{},
				severList: [{
						name: '发布',
						icon: 'choujiang.png'
					},{
						name: '我的发布',
						icon: 'bank.png'
					},
					{
						name: '我的抢单',
						icon: 'mingxi.png'
					},
					{
						name: '关于',
						icon: 'point.png'
					},
					{
						name: '退出',
						icon: 'quan.png'
					},
				],
			}

		},
		onLoad() {
			//加载
			this.init();
			this.getPeople();
			this.user = uni.getStorageSync('user');
		},
		methods: {
			getPeople() {
				uni.request({
					url: this.$serverUrl + '/common/getMyInfo',

					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败", ret)
						} else {
							this.people = ret.data.data;
							console.log(this.people);
						}
					}
				})
			},
			init() {
				//用户信息
				this.userinfo = {
					face: '../../../static/HM-PersonalCenter/face.jpeg',
				}
			},
			//用户点击订单类型
			toOrderType(index) {
				uni.showToast({
					title: this.orderTypeLise[index].name
				});
			},
			//用户点击列表项
			toPage(index) {
				if (index == 0) {
					console.log(index);
					uni.navigateTo({
						url: '../issue/issue',
					});
				} else if (index == 1) {
					console.log(index);
					uni.navigateTo({
						url: 'mypublish',
					});
				} else if (index == 2) {
					uni.navigateTo({
						url: 'mygrab',
					});
				} else if (index == 3) {

					console.log(index);
					uni.navigateTo({
						url: 'about',
					});

				} else if (index == 4) {
					uni.showActionSheet({
						itemList: ['确定注销'],
						success: (e) => {
							uni.request({
								url: this.$serverUrl + '/logout',

								success: (ret) => {
									if (ret.data.message != "成功注销！") {
										console.log("请求失败", ret)
									} else {

										uni.reLaunch({
											url: '../../login/login'
										})
									}
								}
							})
						}
					})

				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff
	}

	.header {
		&.status {
			padding-top: var(--status-bar-height);
		}

		background-color:#ff6364;
		width:100%;
		height:30vw;
		padding:0 4%;
		display:flex;
		align-items:center;

		.userinfo {
			width: 100%;
			display: flex;

			.face {
				flex-shrink: 0;
				width: 15vw;
				height: 15vw;

				image {
					width: 100%;
					height: 100%;
					border-radius: 100%
				}
			}

			.info {
				display: flex;
				flex-flow: wrap;
				padding-left: 30upx;

				.username {
					width: 100%;
					color: #fff;
					font-size: 40upx
				}

				.integral {
					display: flex;
					align-items: center;
					padding: 0 20upx;
					height: 40upx;
					color: #fff;
					background-color: rgba(0, 0, 0, 0.1);
					border-radius: 20upx;
					font-size: 24upx
				}
			}
		}

		.setting {
			flex-shrink: 0;
			width: 6vw;
			height: 6vw;

			image {
				width: 100%;
				height: 100%
			}
		}
	}

	.hover {
		background-color: #eee
	}

	.orders {
		background-color: #ff6364;
		width: 100%;
		height: 11vw;
		padding: 0 4%;
		margin-bottom: calc(11vw + 40upx);
		display: flex;
		align-items: flex-start;
		border-radius: 0 0 100% 100%;
		margin-top: -1upx;

		.box {
			width: 100%;
			padding: 0 1%;
			height: 22vw;
			background-color: #fefefe;
			border-radius: 24upx;
			box-shadow: 0 0 20upx rgba(0, 0, 0, 0.15);
			margin-bottom: 40upx;
			display: flex;
			align-items: center;
			justify-content: center;

			.label {
				display: flex;
				align-items: center;
				justify-content: center;
				flex-flow: wrap;
				width: 100%;
				height: 16vw;
				color: #666666;
				font-size: 26upx;

				.icon {
					position: relative;
					width: 7vw;
					height: 7vw;
					margin: 0 1vw;

					.badge {
						position: absolute;
						width: 4vw;
						height: 4vw;
						background-color: #ec6d2c;
						top: -1vw;
						right: -1vw;
						border-radius: 100%;
						font-size: 20upx;
						color: #fff;
						display: flex;
						align-items: center;
						justify-content: center;
						z-index: 10;
					}

					image {
						width: 7vw;
						height: 7vw;
						z-index: 9;
					}
				}
			}
		}
	}

	.list {
		width: 100%;
		border-bottom: solid 2upx #f1f1f1;

		.li {
			width: 100%;
			height: 100upx;
			padding: 0 4%;
			border-bottom: solid 1upx #e7e7e7;
			display: flex;
			align-items: center;

			&.noborder {
				border-bottom: 0
			}

			.icon {
				flex-shrink: 0;
				width: 50upx;
				height: 50upx;

				image {
					width: 50upx;
					height: 50upx
				}
			}

			.text {
				padding-left: 20upx;
				width: 100%;
				color: #666
			}

			.to {
				flex-shrink: 0;
				width: 40upx;
				height: 40upx
			}
		}
	}
</style>

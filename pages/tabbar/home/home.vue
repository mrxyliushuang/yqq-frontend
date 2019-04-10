<!--
首页
-->
<template>
	<view>
		<view>
			
			<swiper class="swiper-image" autoplay="true" indicator-dots="true" interval="5000" duration="300" circular="true">
				<swiper-item v-for="(item,index) in imageList" :key="index">
					<image :src="item" style="width: 100%; height: 100%;"></image>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<uni-notice-bar show-icon="true" scrollable="true" single="true" :text="nartitle.storeName+'提交'+nartitle.ruleTitle+'活动成功'">
			</uni-notice-bar>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in reslutList" v-if='index<=2'
			 :key="index" @tap="jumpDetail(item.rulePublishId)">
				<view class="uni-media-list">
					<view class="uni-media-list-body">
						<view class="uni-media-list-text-top">{{item.ruleTitle}} </view>
						<view class="uni-media-list-text-bottom opts">
							截止时间:{{item.rulePublishDatetime.ruleDatetimeEnd|formatDate}}
							<span v-if='item.isAlive==1'>抢单中</span>
							<span v-else>抢单结束</span>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>


</template>

<script>
	import uniNoticeBar from "@/components/uni-notice-bar/uni-notice-bar.vue"
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
				imageList: [
					"../../../static/image/index01.png",
					"../../../static/image/index02.png",
					"../../../static/image/index03.png"
				],

				reslutList: [],
				nartitle: [],

			}
		},
		onLoad() {
			console.log('-----home----onload')
			getUser(this);
			getData(this);
			init(this);

		},
		onShow() {
			console.log('----home---show')
		},
		components: {
			uniNoticeBar,

		},
		methods: {


			jumpDetail(rulePublishId) {
				console.log('-----home--jump')
				uni.navigateTo({
					url: 'homeDetail' + '?rulePublishId=' + rulePublishId,
				})
			}
		},

	}

	function getUser(that) {
		uni.request({
			url: that.$serverUrl + '/common/selectAllDetails',
			data: {},
			method: 'GET',
			success: (ret) => {
				if (ret.data.msg != 'ok') {
					console.log("user访问不成功")
					console.log(JSON.stringify(ret))
				} else {
					console.log("user访问成功")
					console.log(JSON.stringify(ret))
					uni.setStorageSync('user', ret.data.data);
				}
			},
			fail: (res) => {
				console.log("user访问失败", res)
				console.log(JSON.stringify(res))
			}
		})
	};

	function init(that) { //滚动条
		console.log("成功");

		uni.request({
			url: that.$serverUrl + '/snatchinfo/snatchLatest',
			success: function(ret) {
				if (ret.statusCode !== 200) {
					console.log("home---init请求失败", JSON.stringify(ret))
				} else {
					that.nartitle = ret.data.rows;
					console.log("home---init请求成功");
					console.log(JSON.stringify(ret.data));
				}
			},
			fail: function(res) {
				console.log("home---init访问失败", JSON.stringify(res));
			}
		})
	};

	function getData(that) { //列表

		uni.request({
			url: that.$serverUrl + '/publish/dyPublishList',

			success: function(ret) {
				if (ret.statusCode !== 200) {
					console.log("home---getdata请求失败", JSON.stringify(ret))
				} else {
					console.log("home---getdata请求成功", JSON.stringify(ret))
					that.reslutList = ret.data.data;
				}
			},
			fail: function(res) {
				console.log("home---getdata访问失败", JSON.stringify(res))
			}
		})
	};
</script>

<style>
	.opts {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;

	}
</style>

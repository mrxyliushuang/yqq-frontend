<template>
	<view>
		<view class="mybg">
			<view class="mymsg">{{rulePublish.ruleTitle}}</view>
			<view class="mytime">{{rulePublishDatetime.ruleDatetimeStart|formatDate}}-{{rulePublishDatetime.ruleDatetimeEnd|formatDate}}</view>
		
		</view>
		<view class="classcontent">
			<text>{{rulePublish.ruleContent}}</text>
		</view>
		<!-- <view style="margin-top: 100upx;"> -->
		<view>
			<scroll-view scroll-x class="bg-white nav">
				<view class="flex text-center">
					<view class="cu-item flex-sub" :class="index==TabCur?'text-orange cur':''" v-for="(item,index) in 2" :key="index"
					 @tap="tabSelect" :data-id="index">
						<p v-if="index==0">累计</p>
						<p v-if="index==1">今日</p>
					</view>
							<view class="grab">	 

					</view>
					
				</view>
			</scroll-view>
	
			<view class="uni-list">
				<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" 
				 :key="index" >
					<view class="uni-media-list">
						<view class="uni-media-list-body">
							<view class="uni-media-list-text-top">{{item.snatchMobileNumber}} </view>
							<view class="uni-media-list-text-bottom opts">
								门店:{{item.storeName}}
								<span v-if='item.isAudit==0'>未审核</span>
								<span v-if='item.isAudit==1'>审核成功</span>
								<span v-if='item.isAudit==2'>审核失败</span>
							</view>
						</view>
					</view>
				</view>
			</view>	
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
				TabCur: 0,
				scrollLeft: 0,
				rulePublishId: '',
				ruleTitle: '',
				rulePublish: {},
				rulePublishDatetime: {},
				ruleContent: '',
				list:[],


			};
		},
		onLoad: function(option) {
			this.rulePublishId = option.rulePublishId; //上个页面传递的参数。
			this.getData(); //加载人员信息数据
			this.getlist();

		},
		onShow() { //返回显示页面状态函数

		},
		methods: {
			
			tabSelect(e) {
				this.TabCur = e.currentTarget.dataset.id;
				console.log(this.TabCur);
				this.scrollLeft = (e.currentTarget.dataset.id - 1) * 60;
				if(this.TabCur==0){
					uni.request({
						url: this.$serverUrl + '/publish/myOnePublishListById' + '?rulePublishId=' + this.rulePublishId,
						method: 'GET',
						data: {},
						success: res => {
							this.list=res.data.rows
						},
						fail: () => {} 
					});
				}
				if(this.TabCur==1){
					
					uni.request({
						url: this.$serverUrl + '/publish/myOneDayPublishList' + '?rulePublishId=' + this.rulePublishId,
						method: 'GET',
						data: {},
						success: res => {
							this.list=res.data.rows
						},
						fail: () => {} 
						 
					});
				}
 			},
		getlist(e) {
					uni.request({
						url: this.$serverUrl + '/publish/myOnePublishListById' + '?rulePublishId=' + this.rulePublishId,
						method: 'GET',
						data: {},
						success: res => {
							this.list=res.data.rows
						},
						fail: () => {} 
					});
		
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
		border-top:1upx solid;
	
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
		border-bottom:1upx solid
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
	.opts {
	
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	
	}
</style>


<template>
	<view>
	
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in reslutList" 
			 :key="index" @click="jumpDetail(item.rulePublishId)">
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
				reslutList: [],
					
			}
		},
		onLoad() {
			this.getData();
			

		},
		components: {

		},
		methods: {
			getData(e) {
				uni.request({
					url: this.$serverUrl + '/publish/myPublish',
					
					success: (ret) => {
						if (ret.statusCode !== 200) {
							console.log("请求失败", ret)
						} else {
							this.reslutList = ret.data.rows ;
							console.log(this.reslutList);
						}
					}
				})
			},
			jumpDetail(rulePublishId){
				console.log("=============");
				uni.navigateTo({
					url:'mypublishtails'+'?rulePublishId='+rulePublishId,
				})
			}
		},
		 

	}
</script>

<style>
	.opts {

		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	
	}
</style>


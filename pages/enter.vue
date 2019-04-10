<template>
	<view class="content">
		<view class="header uni-column">
			<view ><image src="../../../static/shilu-login/ren.png"></image></view>
			<view>翼起抢 </view>
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
		margin-top: 300px; 
		
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
	
	
	
	
	

	
	
	
</style>

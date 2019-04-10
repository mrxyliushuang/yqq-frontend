<template>
		<view>
		<view>
			<view>
				<form  >
							<view class="cu-form-group ">
								<view class="title">抢单标题</view>
								<input placeholder="请输入抢单标题" name="input" v-model="ruleTitle"></input>
							</view>
							<view class="cu-form-group " @click="check" >
								<view class="title">抢单区域</view>
								<input placeholder="请输入抢单区域" disabled="false" name="input"  v-model="regionId"></input>
							</view>
							
							<view class="cu-form-group ">
								<view class="title">渠道类型</view>
								<picker @change="PickerChange" :value="index" :range="picker" v-model='ruleType'>
									<view class="picker">
										{{index>-1?picker[index]:'请选择抢单类型'}}
									</view>
								</picker>
							</view>
								<view class="cu-form-group ">
								<view class="title">抢单角色</view>
								<picker @change="PickerChange1" :value="index1" :range="picker1" v-model='role'>
									<view class="picker">
										{{index1>-1?picker1[index1]:'请选择抢单角色'}}
									</view>
								</picker>
							</view>
							<view class="cu-form-group">
								<view class="title">开始时间</view>
								<picker mode="date" :value="date" start="2019-01-01" end="2030-09-01" @change="DateChange" >
									<view class="picker">
										{{date}}
									</view>
								</picker>
							</view>
							<view class="cu-form-group">
								<view class="title">结束时间</view>
								<picker mode="date" :value="finishdate" start="2019-01-01" end="2030-09-01" @change="FinishDateChange" >
									<view class="picker">
										{{finishdate}}
									</view>
								</picker>
							</view>
							
							
							<view class="cu-form-group">
								<view class="title">抢单金额</view>
								<input placeholder="请输入抢单金额" name="input" v-model='ruleMoney'></input>
							</view>
							<view class="cu-form-group">
								<view class="title">抢单数量</view>
								<input placeholder="请输入抢单数量" name="input" v-model='ruleNum'></input>
							</view>
							<view class="cu-form-group top">
								<view class="title">抢单规则</view>
								<textarea placeholder="请输入抢单" name="input" v-model='ruleContent'></textarea>
							</view>
							<button @click="logPub">提交</button>
				</form>
			</view>
			
		</view>
		<view>

			<uni-popup :show="type" style="width: 600upx;" position="middle" mode="fixed" msg="选择地市">
				<view >
					<view class="uni-list"  value="cb" >
						<checkbox-group class="block" @change="CheckboxChange">
							<view class="cu-form-group margin-top">
								<view class="title">全市</view>
								<checkbox class='round' :class="checkbox[0].checked?'checked':''" :checked="checkbox[0].checked?true:false" value="00" ></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">郊区</view>
								<checkbox class='round' :class="checkbox[1].checked?'checked':''" :checked="checkbox[1].checked?true:false" value="01"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">东安</view>
								<checkbox class='round ' :class="checkbox[2].checked?'checked':''" :checked="checkbox[2].checked?true:false" value="02"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">祁阳</view>
								<checkbox class='round' :class="checkbox[3].checked?'checked':''" :checked="checkbox[3].checked?true:false" value="03"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">零陵</view>
								<checkbox class='round ' :class="checkbox[4].checked?'checked':''" :checked="checkbox[4].checked?true:false" value="04"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">江华</view>
								<checkbox class='round' :class="checkbox[5].checked?'checked':''" :checked="checkbox[5].checked?true:false" value="05"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">宁远</view>
								<checkbox class='round ' :class="checkbox[6].checked?'checked':''" :checked="checkbox[6].checked?true:false" value="06"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">蓝山</view>
								<checkbox class='round' :class="checkbox[7].checked?'checked':''" :checked="checkbox[7].checked?true:false" value="07"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">新田</view>
								<checkbox class='round ' :class="checkbox[8].checked?'checked':''" :checked="checkbox[8].checked?true:false" value="08"></checkbox>
							</view>
								<view class="cu-form-group">
								<view class="title">双牌</view>
								<checkbox class='round' :class="checkbox[9].checked?'checked':''" :checked="checkbox[9].checked?true:false" value="09"></checkbox>
							</view>
					
								<view class="cu-form-group">
								<view class="title">道县</view>
								<checkbox class='round' :class="checkbox[10].checked?'checked':''" :checked="checkbox[10].checked?true:false" value="10"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">江永</view>
								<checkbox class='round ' :class="checkbox[11].checked?'checked':''" :checked="checkbox[11].checked?true:false" value="11"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">河西</view>
								<checkbox class='round' :class="checkbox[12].checked?'checked':''" :checked="checkbox[12].checked?true:false" value="12"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">河东</view>
								<checkbox class='round ' :class="checkbox[13].checked?'checked':''" :checked="checkbox[13].checked?true:false" value="13"></checkbox>
							</view>
								<view class="cu-form-group">
								<view class="title">政企</view>
								<checkbox class='round' :class="checkbox[14].checked?'checked':''" :checked="checkbox[14].checked?true:false" value="14"></checkbox>
							</view>
							<view class="cu-form-group">
								<view class="title">商客</view>
								<checkbox class='round ' :class="checkbox[15].checked?'checked':''" :checked="checkbox[15].checked?true:false" value="15"></checkbox>
							</view>
							
						</checkbox-group>
					</view> 
				</view>
				<view style="display: flex;flex-direction:row;justify-content:space-around; margin-top: 50upx;">
					<text @click="handleClose()" style="margin-right: 100upx;">取消
					</text>

					<text @click="checkSubmit()" style="margin-left: 100upx;">确定
					</text>
				</view>
			</uni-popup>
		</view>
		</view>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	export default{
		data(){
			return{
				checkbox: [{
					value: '00',
					checked: true
				}, {
					value: '01',
					checked: false
				}, {
					value: '02',
					checked: false
				},
				{
					value: '03',
					checked: false
				},
				{
					value: '04',
					checked: false
				},
				{
					value: '05',
					checked: false
				},
				{
					value: '06',
					checked: false
				},
				{
					value: '07',
					checked: false
				},
				{
					value: '08',
					checked: false
				},
				{
					value: '09',
					checked: false
				},
				{
					value: '10',
					checked: false
				},
				{
					value: '11',
					checked: false
				},
				{
					value: '12',
					checked: false
				},
				{
					value: '13',
					checked: false
				},
				{
					value: '14',
					checked: false
				},
				{
					value: '15',
					checked: false
				}
				],
				index: -1,
				picker: ['商圈', '社区', '自营','支局','商客'],
				index1: -1,
				picker1: ['客户经理', '渠道经理', '营业员'],
				date: '2019-2-25',
				finishdate:'2019-3-28',
				textareaBValue: '',
				modalName:null,
				ruleTitle:'',
				regionId:'',
				regionIdRaw:'',
				ruleType:'',
				role:'',
				ruleDatetimeStart:'',
				ruleDatetimeEnd:'',
				ruleMoney:"",
				ruleNum:"",
				ruleContent:'',
				type:false,

			};
			
		},
		components:{
			uniPopup
		},
		methods:{
			//多选弹框
			check() {
				console.log("=========");
				this.type = true;

			},
				handleClose(){ 				this.type = false;  },
			    checkSubmit(){ 				this.type = false;  },
				//提交信息
				logPub() {
			    for ( var i = 0; i <this.regionIdRaw.length; i++){
			    this.regionId+=this.regionIdRaw[i]+"&";
				}
					
				let addData={};
				var seperator2 = ":";
				addData.ruleTitle=this.ruleTitle;
				// addData.regionId=this.regionId;
				if(this.regionId=='00'){
					addData.regionId = '843074600000000';
				}
				else{
					addData.regionId = '843074605'+this.regionId+'0000';
				}
				// addData.regionId='843074600000000';
				addData.cityId='843074600000000';
				addData.ruleType=this.picker[this.index];
				addData.userTypeId=this.index;
				if(this.index1==0){
					addData.roleId='00D';
					
				}
				else if(this.index1==1){
					addData.roleId='00E';
					
				}
				else if(this.index1==2){
					addData.roleId='00F';
					
				}
				// addData.roleId=this.index1;
				let rulePublishDatetime={};
				rulePublishDatetime.ruleDatetimeStart=this.date+" " +"00" + seperator2 +  "00" +seperator2 +"00";
				rulePublishDatetime.ruleDatetimeEnd=this.finishdate+ " " +"00" + seperator2 +  "00" +seperator2 +"00";
				rulePublishDatetime.ruleMoney=this.ruleMoney;
				rulePublishDatetime.ruleNum=this.ruleNum;
				addData.rulePublishDatetime=rulePublishDatetime;
				addData.ruleContent=this.ruleContent;				
				console.log(addData);
					uni.request({
						url: this.$serverUrl + '/publish/insertPublish',
						data: addData,
						method: 'POST',
						success: (res) => {
							console.log(res);
							if(res.statusCode==405){
							uni.showToast({
								title: '提交失败',
								icon: 'none',
								duration: 1000
							});
								
							}else{
							uni.showToast({
								title: '提交成功',
								icon: 'success',
								duration: 1000
							});
								
							}
								
// 							uni.navigateBack({ //提交后返回上一个页面
// 								delta: 1,
// 							})
			
						},
						
			
					});

				
			},
			PickerChange(e) {
				this.index = e.detail.value;
				
	
			},
			PickerChange1(d) {
				this.index1 = d.detail.value
			},
			DateChange(e) {
				this.date = e.detail.value
			},
			FinishDateChange(e) {
				this.finishdate = e.detail.value
			},
			CheckboxChange(e) {
				var items = this.checkbox,
					values = e.detail.value;
					console.log("-------------e.detail:",e.detail);
					console.log(values);
					this.regionId=values;
				for (var i = 0, lenI = items.length; i < lenI; ++i) {
					items[i].checked = false;
					for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
						if (items[i].value == values[j]) {
							items[i].checked = true;
							break
						}
					}
				}
			},

		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>

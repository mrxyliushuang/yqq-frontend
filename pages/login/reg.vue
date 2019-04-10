<template>
	<view>
		<form>
			<view class="cu-form-group ">
				<view class="title">姓名</view>
				<input placeholder="请输入个人姓名" name="input" v-model="username"></input>
			</view>
			<view class="cu-form-group " @click="check">
				<view class="title">手机号码</view>
				<input placeholder="请输入手机号码" name="input" v-model="phone"></input>
			</view>

			<view class="cu-form-group " @click="check">
				<view class="title">揽机工号</view>
				<input placeholder="请输入揽机工号" name="input" v-model="job"></input>
			</view>
			<view class="cu-form-group " @click="check">
				<view class="title">密码</view>
				<input placeholder="请设置密码" name="input" v-model="password"></input>
			</view>
			<view class="cu-form-group ">
				<view class="title">地市</view>
				<picker @change="PickerChange" :value="index" :range="picker" v-model='ruleType'>
					<view class="picker">
						{{index>-1?picker[index]:'请选择地市'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group ">
				<view class="title">县区</view>
				<picker @change="qyChange" :value="qyindex" :range="qypicker" v-model='role'>
					<view class="picker">
						{{qyindex>-1?qypicker[qyindex]:'请选择县区'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group ">
				<view class="title">渠道类型</view>
				<picker @change="qdChange" :value="qdindex" :range="qdpicker" v-model='role'>
					<view class="picker">
						{{qdindex>-1?qdpicker[qdindex]:'请选择渠道'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group ">
				<view class="title">角色</view>
				<picker @change="jxChange" :value="jxindex" :range="jxpicker" v-model='role'>
					<view class="picker">
						{{jxindex>-1?jxpicker[jxindex]:'请选择角色'}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group " v-if='iskhjl'>
				<view class="title">门店</view>
				<picker @change="mdChange" :value="mdindex" :range="mdpicker" v-model='role' @click="mdClick">
					<view class="picker">
						{{mdindex>0?mdpicker[mdindex]:'请选择门店'}}
					</view>
				</picker>
			</view>
			<button @click="logPub">提交</button>
		</form>
	</view>
</template>

<script>
	const region = {
		"河西": 74601,
		"政企": 74601,
		"郊区": 74601,
		"河东": 74601,
		"商客": 74601,
		"零陵": 74602,
		"祁阳": 74603,
		"东安": 74604,
		"道县": 74605,
		"宁远": 74606,
		"江华": 74607,
		"江永": 74608,
		"蓝山": 74609,
		"双牌": 74610,
		"新田": 74611,
	}
	import {
		getMdpicker
	} from '@/common/public.js'

	export default {
		data() {
			return {
				index:-1,
				qyindex: -1,
				qdindex: -1,
				jxindex: -1,
				mdindex: 0,
				picker: ['长沙', '湘潭', '株洲','岳阳','衡阳','郴州', '常德', '益阳','娄底','邵阳', '吉首', '张家界','怀化','永州'],
				qypicker: ["郊区", "东安", "祁阳", "零陵", "江华", "宁远", "蓝山", "新田", "双牌", "道县", "江永", "河西", "河东", "政企", "商客"],
				qdpicker: ['支局', '商圈', '社区', '自营', '商客'],
				jxpicker: ['客户经理', '渠道经理', '营业员'],
				mdpicker: [],
				iskhjl: false, //用来标记是否需要显示门店栏
				date: '2019-2-25',
				finishdate: '2019-3-28',
				textareaBValue: '',
				modalName: null,
				ruleTitle: '',
				regionId: '',
				regionIdRaw: '',
				ruleType: '',
				role: '',
				ruleDatetimeStart: '',
				ruleDatetimeEnd: '',
				ruleMoney: '',
				ruleNum: '',
				ruleContent: '',
				type: false,
				username: '',
				phone: '',
				card: '',
				job: '',
				password: '',
				qindex:'',

			};

		},
		components: {},
		methods: {
			PickerChange(e) {
				this.index = e.detail.value;
				
			},
			check() {
				console.log("=========");
				this.type = true;
			},
			handleClose() {
				this.type = false;
			},
			checkSubmit() {
				this.type = false;
			},
			logPub() {
				let addData = {};
				var seperator2 = ":";
				addData.userName = this.username;
				addData.userId = this.phone;
				addData.staffId = this.job;
				addData.passWord = this.password;
				let userGroupRel={};
				let userRoleRel={};
				userRoleRel.userId=this.phone;
				userRoleRel.description='01';
				userGroupRel.userId=this.phone;
				userGroupRel.description='01';
				addData.createTime='2019-2-2 00:00:00';
				addData.modifyTime='2019-2-2 00:00:00';
				addData.userState='01';
				addData.isDel='01';
				addData.cityName = this.picker[this.index];
				addData.regionName = this.qypicker[this.qyindex];
				if(this.qyindex<=9){
					addData.regionId = '8430746050'+this.qyindex+'0000';
				}
				else{
					addData.regionId = '843074605'+this.qyindex+'0000';
				}
				
				addData.userType = this.qdpicker[this.qdindex];
				addData.userTypeId=this.qdindex;
				addData.roleName = this.jxpicker[this.jxindex];
				if(this.jxindex==0){
					addData.roleId='00D';
					userRoleRel.roleId='00D';
				}
				else if(this.jxindex==1){
					addData.roleId='00E';
					userRoleRel.roleId='00E';
				}
				else if(this.jxindex==2){
					addData.roleId='00F';
					userRoleRel.roleId='00F';
				}
				
				if(this.jxpicker[this.jxindex]=='营业员'){
				addData.storeName = this.mdpicker[this.mdindex];
				if(this.qyindex<=9){
					this.qindex = '8430746050'+this.qyindex;
				}
				else{
					this.qindex = '843074605'+this.qyindex;
				}
				if(this.mdindex<=9){
					addData.storeId = this.qindex+this.qdindex+'00'+this.mdindex;
				}
				else{
					addData.storeId =this.qindex+this.qdindex+'0'+this.mdindex;
				}
				
				// addData.storeId = '843074605'+this.qyindex+this.qdindex+this.mdindex;
				userGroupRel.groupId=addData.storeId;
				addData.groupId=addData.storeId;
		
				}
				else{
				addData.storeName = addData.regionId+'1';
				addData.storeId = addData.regionId+'1';
				userGroupRel.groupId=addData.regionId;
				addData.groupId=addData.regionId;
				}
				addData.userRoleRel=userRoleRel;
				addData.userGroupRel=userGroupRel;
				console.log(addData);
				uni.request({
					url: this.$serverUrl + '/register/registerUserInfo',
					data: addData,
					method: 'POST',
					success: (res) => {
						console.log(res);
						if (res.statusCode == 200) {
							if(res.data.msg=='用户名已经存在！')
							{
								uni.showToast({
									title: '用户已存在',
									icon: 'none',
									duration: 1000
								});
							}
							else{
								uni.showToast({
									title: '提交成功',
									icon: 'success',
									duration: 1000
								});
								
							}
							

						} else {
							uni.showToast({
								title: '提交失败',
								icon: 'none',
								duration: 1000
							});

						}

						// 							uni.navigateBack({ //提交后返回上一个页面
						// 								delta: 1,
						// 							})

					},


				});
			},
			qyChange(e) {
				this.qyindex = e.detail.value;
				if (e.detail.value == 4) { //当为商客时，角色只能是客户经理
					this.jxpicker.splice(1, 2)
					this.jxindex = 0
				} else if (this.jxpicker.length == 1) {
					this.jxpicker.push('渠道经理', '营业员')
				}
				if (this.jxindex == 2) {
					console.log('qyChange,jx==2')
					if (this.qyindex != -1 && this.qdindex != -1) {
						var qd = this.qdpicker[this.qdindex]
						var qy = this.qypicker[this.qyindex]
						this.mdpicker.splice(0, this.mdpicker.length)
						this.mdpicker = this.mdpicker.concat(getMdpicker(qy, qd))
					}
				}
				this.mdindex = 0
			},
			qdChange(e) {
				this.qdindex = e.detail.value;
				if (this.jxindex == 2) {
					console.log('qdChange,jx==2')
					if (this.qyindex != -1 && this.qdindex != -1) {
						var qd = this.qdpicker[this.qdindex]
						var qy = this.qypicker[this.qyindex]
						this.mdpicker.splice(0, this.mdpicker.length)
						this.mdpicker = this.mdpicker.concat(getMdpicker(qy, qd))
					}
				}
				this.mdindex = 0
			},
			mdClick() {
				console.log('-mdclick-')
				if (this.qdindex == -1 || this.qyindex == -1) {
					uni.showToast({
						title: '请选择区域、渠道类型',
						icon: 'none',
						duration: 2000
					});
				}
				// 				else{
				// 					console.log('mdclick---else')
				// 					console.log(this.qdindex)
				// 					console.log(this.qyindex)
				// 					var qd	= this.qdpicker[this.qdindex]
				// 					var qy = this.qypicker[this.qyindex]
				// 					this.mdpicker = getMdpicker(qy,qd)
				// 					
				// 					console.log(this.mdpicker)
				// 				}
			},
			mdChange(e) {
				this.mdindex = e.detail.value;
			},
			jxChange(e) {
				this.jxindex = e.detail.value
				console.log(this.qdindex)
				console.log(this.mdindex)
				console.log(e.detail.value)
				if (e.detail.value == 2) {
					this.iskhjl = true;
				} else {
					this.iskhjl = false;
				}
				if (this.jxindex == 2) {
					console.log('jxChange,jx==2')
					if (this.qyindex != -1 && this.qdindex != -1) {
						var qd = this.qdpicker[this.qdindex]
						var qy = this.qypicker[this.qyindex]
						this.mdpicker.splice(0, this.mdpicker.length)
						this.mdpicker = this.mdpicker.concat(getMdpicker(qy, qd))
					}
				}
				this.mdindex = 0
			}

		}
	}
</script>

<style>

</style>

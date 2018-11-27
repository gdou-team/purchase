<template>
	<div class="main">
		<div class="user_info">
			<div class="head_img">
				<img class="avatar" src="../assets/avatar.jpg" />
			</div>
			<div class="nickname">
				<p class="username">Vanni辉</p>
				<p class="usermoney">我的余额：￥<span class="money">0</span></p>
			</div>
			<div class="setting">
				<div @click="setUserInfo">个人信息设置 ></div>
				<div @click="goBack">返回</div>
			</div>
		</div>
		<el-tabs :stretch="true" class='my_tabs' v-model="activeName" @tab-click="handleClick">
			<el-tab-pane label="全部订单" name="first">
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
				<orderlist class="order-list"/>
			</el-tab-pane>
			<el-tab-pane label="待付款" name="second">代付款</el-tab-pane>
			<el-tab-pane label="待使用" name="third">待使用</el-tab-pane>
			<el-tab-pane label="待评价" name="fourth">待评价</el-tab-pane>
			<el-tab-pane label="退款/售后" name="fifth">退款/售后</el-tab-pane>
		</el-tabs>
		<el-dialog
			title="修改用户信息"
			:visible.sync="dialogVisible"
			width="70%"
			top='10px'
			>
			<user-info />
			<span slot="footer" class="dialog-footer">
				<el-button @click="dialogVisible = false">关 闭</el-button>
				<!-- <el-button type="primary" @click="dialogVisible = false">确 定</el-button> -->
			</span>
		</el-dialog>
	 </div>
</template>

<script>
	export default {
	    data() {
	      return {
			activeName: 'first',
			dialogVisible:false
	      };
	    },
	    methods: {
	      handleClick(tab, event) {
	        //console.log(tab, event);
		  },
		  setUserInfo(){
			  this.dialogVisible = true;
		  },
		  goBack(){
			  this.$router.back()
		  }
	    }
	  };
</script>

<style scoped>
.order-list{
	background-color: white;
	padding: 10px 20px;
}
	/*个人信息*/
	.main{
		width: 90%;
		margin: 0 auto;
		font-family: "-apple-system",BlinkMacSystemFont,Roboto,"Helvetica Neue","MIcrosoft YaHei",sans-serif!important;
	}
	.user_info{
		height: 209px;
		background: linear-gradient(to right, rgb(255,160,47),rgb(255,110,0)); 
		border-radius: 4px 4px 0 0;
		
	}
	/*用户头像*/
	.head_img{
		width: 110px;
	    height: 110px;
	    border: 10px solid #fac67d;
	    border-radius: 100%;
	    position: relative;
	    float: left;
	    top: 38px;
	    left: 30px;
	}
	.avatar{
		height: 100%;
	    width: 100%;
	    border-radius: 100%;
	    box-shadow: 0 3px 7px 0 rgba(204,161,100,.4);
	    border: 0;
	}
	/*用户名称*/
	.nickname{
		float: left;
	    color: #fff;
	    position: relative;
	    left: 51px;
	    top: 70px;
	    font-weight: 500;
	}
	.username{
		font-size: 26px;
	}
	.usermoney{
		margin-top: 10px;
	}
	/*个人设置*/
	.setting{
		color: #fff;
	    float: right;
	    font-size: 14px;
	    position: relative;
	    left: -30px;
	    top: 90px;
		cursor: pointer;
	}
	.setting div:nth-child(2){
		margin-top: 20px;
	}
	/*订单列表*/
	.list_item:first-child{
		border-top: 0;
	}
	.list_item{
		overflow: hidden;
		border-top: 1px solid #E5E5E5;
	}
	
	

</style>
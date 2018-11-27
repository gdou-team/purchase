<template>
	<div class="setting_container">
		<div class="setting_content">
			<div class="head">
				<p class="title">个人信息</p>
				<p class="des">账号设置</p>
			</div>
			<div class="item clearfix">
				<div class="field_name">头像</div>
				<div class="field_value"><img class="head_img" src="../assets/avatar.jpg"></div>
				<button class="btn_change" @click="upload">修改</button>
				<input ref='input' type="file" name="avater" class="user_avater">
			</div>
			<div class="item clearfix">
				<div class="field_name">昵称</div>
				<div class="field_value">Vanni辉</div>
				<button class="btn_change" @click="changeName">修改</button>
			</div>
			<div class="item clearfix">
				<div class="field_name">解绑手机</div>
				<div class="field_value">137****9839</div>
				<button class="btn_change" @click="changeMobile">换绑</button>
			</div>
			<div class="item clearfix">
				<div class="field_name">登录密码</div>
				<div class="field_value">
					<span class="value">安全强度：弱</span>
				</div>
				<button class="btn_change" @click="changePass">修改</button>
			</div>
		</div>

		<div class="dialogs">
			<!-- 修改昵称 -->
			<div :class="{fadeIn : show_name_tag}" class="dialog-container fadeOut">
				<div class="dialog-box">
					<div class="dialog-head clearfix">
						<p class="dialog-name">修改昵称</p>
						<p class="dialog-close" @click="close">
							<img src="../assets/close.png" alt="">
						</p>
					</div>
					<div class="dialog-body">
						<div class="row">
							<label class="field-name">当前昵称</label>
							<span class="field-value">Vanni辉</span>
						</div>
						<div class="row">
							<label class="field-name">新昵称</label>
							<div :class="{'input-error': name_success,'input-success':!name_success}" class="field-input input-normal">
								<input v-model='username' @keyup="changeName()" type="text">

								<img  v-if="username" :class="{show:!name_success}" src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/fail-ico.png" class="icon icon-fail" alt="">
								
								<img :class="{show: name_success}" src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/succ-ico.png" class="icon icon-success" alt="">
								<p class="error-msg"></p>
								<p v-if="!username" class="tip-msg">以中文或英文字母开头，限4-16个字符，一个汉字为两个字符
								</p>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button class="btn btn-ok btn-disabled">确认修改</button>
						<button class="btn btn-cancel" @click="close">取消</button>
					</div>
				</div>
			</div>
			<!-- 修改密码 -->
			<div :class="{fadeIn : show_pass_tag}" class="dialog-container fadeOut">
				<div class="dialog-box">
					<div class="dialog-head clearfix">
						<p class="dialog-name">设置密码</p>
						<p class="dialog-close" @click="close">
							<img src="//s0.meituan.net/bs/fe-web-meituan/64a089b/img/form/close.png" alt="">
						</p>
					</div>
					<div class="dialog-body">
						<div class="row">
							<label class="field-name">当前密码</label>
							<div class="field-input input-normal">
								<input v-model="password_old" type="password" @keyup="changePass">
								<img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/fail-ico.png" class="icon icon-fail" alt=""><img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/succ-ico.png" class="icon icon-success" alt=""><p class="error-msg"></p>
							</div>
						</div>
						<div class="row clearfix">
							<label class="field-name">密码</label>
							<div class="field-input input-normal">
								<input v-model="password_new" @keyup="changePass" type="password">
								<img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/fail-ico.png" class="icon icon-fail" alt="">
								<img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/succ-ico.png" class="icon icon-success" alt="">
							</div>
							
							<div class="field-input input-normal" style="float:right;margin-right:106px">
								<p class="error-msg"></p>
							</div>
						</div>
						<div class="row">
							<label class="field-name">确认密码</label>
							<div class="field-input input-normal">
								<input v-model="password_second" type="password" @keyup="changePass">
								<img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/fail-ico.png" class="icon icon-fail" alt="">
								<img src="//s1.meituan.net/bs/fe-web-meituan/64a089b/img/form/succ-ico.png" class="icon icon-success" alt="">
								<p class="error-msg"></p>
							</div>
						</div>
					</div>
					<div class="btn-group">
						<button class="btn btn-ok btn-disabled">确认修改</button>
						<button class="btn btn-cancel" @click="close">取消</button>
					</div>
				</div>
			</div>
		</div>


	</div>


</template>

<script>
	import {get} from '@/util'
	export default {
	    data(){
	        return{
	            name_tip_flag:true,
	            name_success:false,
	            show_name_tag:false,
	            show_pass_tag:false,

	            username:'',
	            password_old:'',
	            password_new:'',
	            password_second:'',
	            
	        }
	    },
	    methods:{
	        upload(){
	        	//上传头像
				this.$refs.input.click()
	        },
	        async changeName(){
	        	this.show_name_tag = true;
	        	//修改用户名
	        	/*判断是否合法*/
	        	/*以中文或英文字母开头，限4-16个字符，一个汉字为两个字符*/
	        	let reg = /^([A-Za-z]){1}[\w+]{3,13}$/
	        	var res = reg.test(this.username)
	        	if(!res){
	        		//显示错误提示
	        		this.name_success = false;
	        		return ;
	        	}
	        	
	        	/*验证昵称是否重复*/
	        	try{
	        		//const result = await get('/v1',{username:this.username})
	        		var result = true;
	        		if(result == true){
	        			this.name_success = true;
	        		}else{
	        			this.name_success = false;
	        		}
	        	}catch(e){

	        	}
	        },
	        changeMobile(){
	        	//页面跳转
	        	this.$emit('changeMobile')
	        },
	        changePass(){
	        	//验证密码
	        	this.show_pass_tag = true;
	        	
	        	var reg = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
	        	const res = reg.test(this.password)



	        },
	        close(){
	        	//关闭对话框
	        	this.show_name_tag = false;
	        	this.show_pass_tag = false;
	        }
	    }
	}

</script>


<style>
	.setting_container{
		font-family: "-apple-system",BlinkMacSystemFont,Roboto,"Helvetica Neue","MIcrosoft YaHei",sans-serif!important;
	}
	.setting_content{
		width: 90%;
		margin: 0 auto 20px;
		border: 1px solid #E5E5E5;
	    border-radius: 4px;
	    min-height: 200px;
	    background: #fff;
	    padding: 30px 30px 0;
	}
	.clearfix{
		clear: both;
	}
	/*上方表格*/
	.head .title{
		font-size: 20px;
	    color: #333;
	    line-height: 26px;
	    font-weight: 500;
	}
	.head .des{
		font-size: 14px;
	    color: #666;
	    line-height: 40px;
	    margin-bottom: 20px;
	}
	.setting_content .item{
		border-top: 1px solid #E5E5E5;
    	padding: 30px 0;
    	overflow: hidden;
	}
	.item .field_name{
		width: 95px;
	    border-right: 1px solid #e5e5e5;
	    text-align: right;
	    padding-right: 30px;
	    float: left;
	}
	.item .field_name span{
		font-size: 18px;
	    color: #333;
	    line-height: 34px;
	}
	.item .field_value{
		float: left;
	    text-align: right;
	    padding-left: 30px;
	    height: 40px;
	}
	.item .field_value .head_img{
		width: 48px;
	    height: 48px;
	    border-radius: 48px;
	    transform: translateY(-5px);
	}
	.item .btn_change{
		background: #FFF;
	    border: 1px solid #E5E5E5;
	    border-radius: 100px;
	    font-size: 14px;
	    color: #666;
	    float: right;
	    height: 40px;
	    width: 82px;
	    cursor: pointer;
	    margin: 0 15px;
	    line-height: 40px;
	    text-align: center;
	    -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
            -webkit-user-select: none;
            -moz-user-focus: none;
            -moz-user-select: none;
            -webkit-appearance:none;
            outline: none;

	}
	.user_avater{
		display: none;
	}
	
	/*提示框*/
	.fadeOut{
		visibility: hidden;
		opacity: 0;
	}
	.fadeIn{
		visibility: visible;
		opacity: 1;

	}
	.fadeIn,.fadeOut{
		transition: all .2s;
	}
	.dialog-container {
	    position: fixed;
	    z-index: 9999;
	    width: 100%;
	    height: 100%;
	    background: rgba(0,0,0,.8);
	    top: 0;
	    left: 0;
	}
	.dialog-container .dialog-box {
	    background: #FFF;
	    border-radius: 10px;
	    width: 480px;
	    margin: 0 auto;
	    position: relative;
	    top: 18%;
	}
	.dialog-container .dialog-box .dialog-head {
	    width: 100%;
	    background-color: #f7f7f7;
	    border-radius: 10px;
	    height: 50px;
	}
	.dialog-name{
		font-size: 14px;
	    font-weight: 500;
	    line-height: 50px;
	    padding-left: 20px;
	    color: #333;
	    float: left;
	}
	.dialog-close{
		font-size: 14px;
	    padding-right: 20px;
	    color: #333;
	    float: right;
	    margin: 12px auto;
	    cursor: pointer;
	}
	.dialog-container .dialog-box .dialog-head .dialog-close img {
	    width: 24px;
	    height: 24px;
	}
	.dialog-body{
		margin: 20px auto;
   		min-height: 10px;
	}
	.row{
		margin: 15px auto;
	}
	.row .field-name{
		width: 36%;
	    text-align: right;
	    font-size: 14px;
	    color: #666;
	    line-height: 40px;
	    display: block;
	    float: left;
	    margin-right: 20px;
	}
	.row .field-value{
		font-size: 14px;
	    color: #666;
	    line-height: 40px;
	    font-weight: 500;
	}
	.field-input{
		display: inline-block;
	    position: relative;
	    width: 180px;
	}
	.dialog-container .row .field-input input {
	    width: 148px;
	    padding: 0 20px 0 10px;
	    font-size: 14px;
	    color: #333;
	    border: 1px solid #E5E5E5;
	    height: 32px;
	    border-radius: 2px;
	}
	/*昵称非法*/
	.dialog-container .row .input-error input {
	    border: 1px solid #F67;
	    box-shadow: 0 0 1px 1px rgba(225,102,119,.3);
	}
	/*提示用小图标*/
	.dialog-container .row .field-input .icon {
	    display: none;
	    position: absolute;
	    top: 9px;
	    right: 5px;
	    height: 16px;
	    width: 16px;
	}
	.dialog-container .row .field-input .show{
		display: block;
	}

	/*提示用语*/
	.dialog-container .row .error-msg {
	    display: none;
	    font-size: 12px;
	    color: #F67;
	    line-height: 1.2;
	    margin: 10px 0;
	}
	.dialog-container .row .tip-msg {
	    display: block;
	    font-size: 12px;
	    color: #999;
	    line-height: 1.2;
	    margin: 10px 0;
	}
	/*下方按钮*/
	.dialog-container .btn-group {
	    text-align: center;
	    padding: 0 0 25px;
	}
	.dialog-container .btn-group .btn {
	    height: 40px;
	    width: 120px;
	    border-radius: 100px;
	    border: 0;
	    font-size: 14px;
	    color: #FFF;
	    cursor: pointer;
	    font-weight: 500;
	}
	.dialog-container .btn-group .btn-ok {
	    background: #13D1BE;
	    margin-right: 10px;
	}
	.dialog-container .btn-group .btn-cancel {
	    background: #fff;
	    color: #666;
	    border: 1px solid #e5e5e5;
	    margin-left: 10px;
	}

</style>
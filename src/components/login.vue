<template>
  <div class='input'>
    <div><h2>Welcome~</h2></div>
    <div>
      <el-input v-model="form.phone" placeholder="请输入手机号码"/>
      <p v-if="isError.phone" class="p fontsize12">手机号码格式有误</p>
    </div>
    <div>
      <el-input v-model="form.password" placeholder="请输入密码"/>
      <p v-if="isError.password" class="p fontsize12">密码错误</p>
    </div>
    <div>
      <el-button @click='login' type="primary" style='width:100%;' :disabled='disabled'>
        登录
      </el-button>
    </div>
    <div style="text-align:right;">
      <router-link class="my-regist fontsize14" :to='{name:"register"}'>注册</router-link>
      <span @click="goBack" class="my-regist fontsize14">返回</span>
      <span @click="goToHome" class="my-regist fontsize14">游客</span>
    </div>
  </div>
</template>

<script>
import {checkPhone} from '@/util'
  // 登录表单
  export default {
    data() {
      return {
        disabled:false,
        form: {
          phone: "",
          password: ""
        },
        isError:{
            phone:false,
            password:false
          }
      };
    },
    methods: {
      login() {
        this.isError.phone = false
        this.isError.password = false
        const result = checkPhone(this.form.phone)
        if(!result){
          this.isError.phone = true
          return
        }
      },
      goBack() {
        this.$router.back()
      },
      goToHome(){
        this.$router.push({name:'homeContent'})
      }
    },
  };
</script>


<style lang="less" scoped>
  .input {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 100%;
    width: 50%;
    .my-regist {
      line-height: 20px;
      color: blue;
      padding: 10px;
      cursor: pointer;
      text-decoration: none;
    }
  }

  .input > div {
    padding: 10px 50px;
    width: 80%;
    text-align: center;
  }

  .input > div > h2 {
    color: #409eff;
  }
</style>

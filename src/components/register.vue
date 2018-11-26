<template>

  <div class='input'>
    <div><h2>Welcome~</h2></div>
    <div>
      <el-input v-model="form.phone" placeholder="请输入手机号码"/>
      <p v-if="isError.phone" class="p">手机号码格式有误</p>
    </div>
    <div>
      <el-input v-model="form.password" placeholder="请输入密码"/>
    </div>
    <div>
      <div class="flexrow">
      <el-input v-model="form.code" placeholder="请输入验证码"/>
      <el-button @click="getCode">获取手机验证码</el-button>
    </div>
    <p v-if="isError.code" class="p">验证码错误</p>
    </div>
    <div>
      <el-button @click='register' type="primary" style='width:100%;'>注册</el-button>
    </div>
    <div class="fontsize14 my-regist" @click="goBack">返回</div>
  </div>
</template>

<script>
  // 注册表单
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
          code: ''
        },
        isError:{
          phone:false,
          code:false
        }
      }
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      getCode() {
      },
      register() {
      }
    }
  }
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
      text-align: right;
      color: blue;
      padding: 10px;
      cursor: pointer;
    }

  }

  .input > div {
    padding: 10px 50px;
    width: 80%;
    text-align: center;
  }

  .input > div > h2 {
    color: #409EFF;
  }
</style>

<template>

      <div class='input'>
          <div><h2>Welcome~</h2></div>
          <div><el-input placeholder="请输入手机号码" /></div>
          <div><el-input placeholder="请输入密码" /></div>
          <div class="flexrow"><el-input placeholder="请输入验证码" /> <el-button>获取手机验证码</el-button></div>
          <div><el-button type="primary" style='width:100%;'>注册</el-button></div>
          <div class="fontsize14 my-regist" @click="goBack">返回</div>
      </div>
</template>

<script>
export default {
    methods:{
        goBack(){
            this.$router.back()
        }
    }
}
</script>


<style lang="less" scoped>
.input{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 100%;
    width: 50%;
    .my-regist{
        line-height: 20px;
        text-align: right;
        color: blue;
        padding: 10px;
        cursor: pointer;
    }
    
}

.input>div{
    padding: 10px 50px;
    width: 80%;
    text-align: center;
}

.input>div>h2{
    color: #409EFF;
}
</style>

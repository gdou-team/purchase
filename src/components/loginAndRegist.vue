<template>
    <el-container style="height:100%;">
  <el-header class="my-el-header flexrow">
    <img src="../assets/login-logo.png" alt="">
    <div class="my-login flexrow">
      <i style="font-size:22px;margin-right:15px;" class="el-icon-location-outline
"/>
<span>请先登录</span>
    </div>
  </el-header>
  <el-main style='padding:0;position: relative;'>
    <div class="my-bg"></div>
    <div class="my-login-item">
      <div class='bg'></div>
      <div class='input'>
          <div><h2>Welcome~</h2></div>
          <div><el-input placeholder="请输入账号" /></div>
          <div><el-input placeholder="请输入密码" /></div>
          <div><el-button type="primary" style='width:100%;'>登录</el-button></div>
      </div>
  </div>
  </el-main>
  <el-footer class="my-footer" height='30px'>Copyright Connected Health, Inc. 2018-NowDay</el-footer>
</el-container>
</template>

<style lang="less" scoped>
.my-el-header {
  background-color: #12203e;
  align-items: center;
  justify-content: space-between;
  .my-login {
    font-size: 16px;
    color: #C3C7CE;
  }
}
.my-footer{
  background-color: #12203e;
  text-align: center;
  line-height: 30px;
  color: #000000;
}
.my-bg{
  background: url("../assets/bg.jpg") no-repeat center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;;
    opacity: .4;
    width: 100%;
    height: 100%;
}
 .bg{
    width: 50%;
    height: 100%;
    background: url("../assets/login.png") no-repeat center center;
    background-size: cover;
}
.input{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 100%;
    width: 50%;
}

.input>div{
    padding: 10px 50px;
    width: 80%;
    text-align: center;
}

.input>div>h2{
    color: #409EFF;
}

.my-login-item{
  width:710px;
    height:470px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: row;
    align-items: center;
}
</style>


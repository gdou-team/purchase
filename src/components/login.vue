<template>
      <div class='input'>
          <div><h2>Welcome~</h2></div>
          <div><el-input placeholder="请输入手机号码" /></div>
          <div><el-input placeholder="请输入密码" /></div>
          <div><el-button type="primary" style='width:100%;'>登录</el-button></div>
          <div style="text-align:right;">
              <router-link class="my-regist" :to='{name:"register"}'>注册</router-link>
          </div>      
      </div> 
</template>

<script>
// 登录表单
export default {
    
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
        color: blue;
        padding: 10px;
        cursor: pointer;
        text-decoration: none;
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

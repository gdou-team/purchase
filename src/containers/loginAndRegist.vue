<template>
  <el-container class="my-container">
    <el-header class="my-el-header flexrow">
     <!--  <img src="../assets/login-logo.png" alt=""> -->
     <h3 class="head_title">团购网</h3>
      <div class="my-login flexrow">
        <i style="font-size:22px;margin-right:15px;" class="el-icon-location-outline
"/>
        <span>{{title}}</span>
      </div>
    </el-header>
    <el-main style='padding:0;position: relative;'>
      <div class="my-bg"></div>
      <div class="my-login-item">
        <div class='bg'></div>

        <transition name="router" mode="out-in">
          <!-- <keep-alive> -->
          <router-view/>
          <!-- </keep-alive> -->
        </transition>

      </div>
    </el-main>
    <el-footer class="my-footer" height='30px'>
      2018软酷网广东海洋大学实训项目
    </el-footer>
  </el-container>
</template>

<script>
  // 登录注册
  import {get} from '@/util'

  export default {
    data() {
      return {
        title: '登录'
      }
    },
    created() {
      if (this.$route.name == 'login') {
        this.title = '登录'
      } else {
        this.title = '注册'
      }
    },
    watch: {
      $route() {
        if (this.$route.name == 'login') {
          this.title = '登录'
        } else {
          this.title = '注册'
        }
      }
    }
  }
</script>


<style lang="less" scoped>
  .my-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .head_title{
    margin-left: 3%;
    font-size: 28px;
    color: #fff;
  }
  .my-login-item {
    width: 710px;
    height: 470px;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .bg {
    width: 50%;
    height: 100%;
    background: url("../assets/login.jpg") no-repeat center center;
    background-size: cover;
  }

  .my-el-header {
    background-color: #12203e;
    align-items: center;
    justify-content: space-between;
    .my-login {
      font-size: 16px;
      color: #C3C7CE;
    }
  }

  .my-footer {
    background-color: #12203e;
    text-align: center;
    line-height: 30px;
    color: #ffffff;
  }

  .my-bg {
    background: url("../assets/bg.jpg") no-repeat center center;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;;
    opacity: .4;
    width: 100%;
    height: 100%;
  }
</style>


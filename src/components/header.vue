<template>
  <div class="my-header">
    <div class="my-left fontsize14">
      <ul>
        <li><a href="http://www.lashou.com/faq.php" target="_blank">帮助</a></li>
        <li><a href="http://www.lashou.com/feedback.php" target="_blank">反馈</a></li>
      </ul>
    </div>
    <div class="my-right fontsize14">
      <ul>
        <!-- <li>团购购物车(0)</li> -->
        <li @click="handelClick('orderList')">我的</li>
        <!-- <li>更多</li> -->
        <li v-if="userInfo.id">12345678</li>
        <li v-if="userInfo.id" class="my-item">退出</li>
        <li v-if="!userInfo.id" class="my-item" @click="login">[登录]</li>
        <li v-if="!userInfo.id" class="my-item" @click="register">[注册]</li>
      </ul>
    </div>
  </div>
</template>

<script>
  // 头部
  import {mapGetters} from 'vuex'

  export default {
    methods: {
      register() {
        this.$emit('register')
      },
      login() {
        this.$emit('login')
      },
      handelClick(str){
        this.$emit('goTo',{
          name:str
        })
      }
    },
    computed: {
      ...mapGetters(['userInfo'])
    }
  }
</script>


<style lang="less" scoped>
  .my-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      li {
        padding: 0 20px 0 0;
        cursor: pointer;
        &.my-item {
          color: #506EAA;
        }
        >a{
          display: block;
          text-decoration: none;
          color: black;
        }
      }
    }
  }
</style>


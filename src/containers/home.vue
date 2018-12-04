<template>
  <div>
    <div class="my-header">
      <my-header
        @register='register'
        @login='login'
        @goTo='goTo'
        class="my-container my-center"/>
    </div>
    <div class="my-bg">
      <my-search
        @search='search'
        @selectCity='selectCity'
        @goTo='goTo'
        class="my-search my-container my-center"/>
      <transition name="router" mode="out-in">
        <div class="SelectCity" v-if="isShowSelectCity">
          <SelectCity/>
        </div>
      </transition>
      <Nav @goTo='goTo'/>
    </div>
    <div>
      <div class="my-container my-center">
        <transition name="router" mode="out-in">
          <keep-alive>
          <router-view/>
          </keep-alive>
        </transition>
      </div>
    </div>
    <div>
      <pagefooter/>
    </div>
  </div>
</template>

<script>
import {get} from '@/util'
  // 首页
  export default {
    data() {
      return {
        isShowSelectCity: false
      };
    },
    methods: {
      register() {
        this.$router.push({
          name: "register"
        });
      },
      login() {
        this.$router.push({
          name: "login"
        });
      },
      selectCity(flag) {
        this.isShowSelectCity = !flag;
      },
      search(obj) {
        this.$router.push({
          name: "goodList",
          query:{
            keyWord:obj.keyWord
          }
        });
      },
      goTo(obj) {
        this.$router.push({
          name: obj.name,
          query: {
            keyWord: obj.keyWord
          }
        });
      }
    }
  };
</script>


<style lang="less" scoped>
  .my-search {
    padding: 10px 0;
  }

  .my-header {
    background-color: #f8f8f8;
  }

  .my-bg {
    background-color: white;
    position: relative;
    .SelectCity {
      position: absolute;
      left: 0;
      top: 100%;
      background-color: white;
      width: 100%;
      z-index: 1;
    }
  }
</style>


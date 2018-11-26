<template>
  <div>
    <div class="my-header">
      <my-header
        @register='register'
        @login='login'
        class="my-container my-center"/>
    </div>
    <div class="my-bg">
      <my-search
      @search='search'
        @selectCity='selectCity'
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
        <Loading v-if="false" />
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
    search() {
      this.$router.push({
        name: "goodList"
      });
    },
    goTo(name) {
      this.$router.push({ name });
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


<template>
<div>
    <div class="my-header">
        <my-header
         @register='register' 
         @login='login'
         class="my-container my-center" />
    </div>
    <div class="my-bg">
        <my-search
        @selectCity='selectCity'
         class="my-search my-container my-center" />
    </div>
    <div>
        <transition name="router" mode="out-in">
        <keep-alive>
        <router-view />
        </keep-alive>
        </transition>
    </div>
</div>
</template>

<script>
// 首页
export default {
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
    selectCity(name) {
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
}
</style>


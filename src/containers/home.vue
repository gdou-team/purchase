<template>
<div>
    <div class="my-header">
        <my-header class="my-container my-center" />
    </div>
    <div class="my-bg">
        <my-search class="my-search my-container my-center" />
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

<style lang="less" scoped>
.my-search {
  padding: 10px 0;
}
.my-header {
  background-color: #f8f8f8;
}
.my-bg{
    background-color: white;
}
</style>


<template>
  <div class="my-nav">
    <ul class="my-item my-center my-container fontsize14">
      <li class="all">全部商品分类</li>
      <li @click="handelClick('homeContent')">首页</li>
      <li @click="handelClick('map')">周边地图</li>
      <li @click="handelClick('goodList','new')">今日新单</li>
      <li @click="handelClick('goodList','food')">美食</li>
      <li @click="handelClick('goodList','movie')">电影</li>
      <li @click="handelClick('goodList','Tourism')">旅游</li>
      <li @click="handelClick('goodList','ticket')">特价机票</li>
    </ul>
  </div>
</template>

<script>
  export default {
    methods: {
      handelClick(str, keyWord) {
        this.$emit('goTo', {
          name: str,
          keyWord
        })
      }
    }
  }
</script>


<style lang="less" scoped>
  .my-nav {
    background-color: #FF7E00;
  }

  .my-item {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    color: white;
    font-weight: bold;
    li {
      padding: 0 20px 0;
      line-height: 40px;
      cursor: pointer;
      &:not(.all):hover {
        background-color: #EF6452;
      }
    }
    .all {
      background-color: white;
      width: 200px;
      color: #000000;
      text-align: center;
      padding: 0;
      line-height: 36px;
      border: 2px solid #FF7E00;
    }
  }
</style>

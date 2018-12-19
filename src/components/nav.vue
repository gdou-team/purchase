<template>
  <div class="my-nav">
    <ul class="my-item my-center my-container fontsize14">
      <li class="all">全部商品分类</li>
      <li :class="{'my-active':title=='首页'}" @click="handelClick('homeContent','首页')">首页</li>
      <li :class="{'my-active':title=='地图'}" @click="handelClick('map','地图')">周边地图</li>
      <li :class="{'my-active':title=='酒店'}" @click="handelClick('goodList','酒店')">酒店</li>
      <li :class="{'my-active':title=='美食'}" @click="handelClick('goodList','美食')">美食</li>
      <li :class="{'my-active':title=='电影'}" @click="handelClick('goodList','电影')">电影</li>
      <li :class="{'my-active':title=='旅游'}" @click="handelClick('goodList','旅游')">旅游</li>
      <li :class="{'my-active':title=='特价机票'}" @click="handelClick('goodList','特价机票')">特价机票</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return{
      title: "首页"
    }
  },
  methods: {
    handelClick(str, keyWord) {
      this.title = keyWord;
      if (keyWord == "地图" || keyWord == "首页") {
        this.$emit("goTo", {
          name: str
        });
        return;
      }
      this.$emit("goTo", {
        name: str,
        keyWord
      });
    }
  }
};
</script>


<style lang="less" scoped>
.my-active {
  background-color: white;
  color: #ff7e00;
}
.my-nav {
  background-color: #ff7e00;
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
      background-color: #ef6452;
    }
  }
  .all {
    background-color: white;
    width: 200px;
    color: #000000;
    text-align: center;
    padding: 0;
    line-height: 36px;
    border: 2px solid #ff7e00;
  }
}
</style>

<template>
  <div class="flexrow my-item">
    <span class="title">{{title}}</span>
    <ul class="flexrow">
      <li v-for="(item,index) in itemList" :key="index">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '热门'
      },
      itemList: {
        type: Array,
        default: []
      }
    }
  }
</script>


<style lang="less" scoped>
  .my-item {
    padding: 10px;
    background-color: white;
    border-bottom: 1px solid #E5E5E5;
    line-height: 30px;
    .title {
      font-size: 12px;
      color: #A3A3A3;
    }
    ul {
      li {
        font-size: 12px;
        padding: 0 10px;
        cursor: pointer;
      }
      li:nth-child(1) {
        margin-left: 20px;
      }
    }
  }
</style>


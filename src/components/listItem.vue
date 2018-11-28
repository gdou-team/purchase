<template>
  <div>
    <p class="my-title">{{title}}</p>
    <ul class="my-list">
      <li v-for="(item,index) in list" :key="index" @click="handelClick(item)">{{item}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list-item",
    props: {
      title: {
        type: String,
        default: '美食'
      },
      list: {
        type: Array,
        default: []
      }
    },
    methods: {
      handelClick(keyWord) {
        this.$emit('goTo', {
          name: 'goodList',
          keyWord
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .my-title {
    font-size: 16px;
    color: #222222;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .my-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      padding: 10px;
      cursor: pointer;
      font-size: 12px;
      color: #999999;
    }
  }
</style>

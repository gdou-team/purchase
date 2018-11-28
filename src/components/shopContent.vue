<template>
  <div>
    <h2 class="h2">{{title}}</h2>
    <ul class="big-good-list">
      <li>
        <biggoods @biggoods='goToDetail(17)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(27)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(37)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(47)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(57)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(67)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(77)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(87)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(97)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(117)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(227)' infoBgColor='white' width='250px'/>
      </li>
      <li>
        <biggoods @biggoods='goToDetail(7)' infoBgColor='white' width='250px'/>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: '美食'
      }
    },
    methods: {
      goToDetail(id) {
        this.$emit('goToDetail', id)
      }
    }
  }
</script>

<style lang="less" scoped>
  .h2 {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
    color: #3d3d3d;
  }

  .big-good-list {
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin-left: -25px;
    li {
      margin: 25px 0px 0px 25px;
    }
  }
</style>


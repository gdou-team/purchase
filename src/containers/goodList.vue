<template>
  <ul>
    <li @click="goToDetail(11)">
      <goodslist class="my-container"/>
    </li>
    <li @click="goToDetail(12)">
      <goodslist class="my-container"/>
    </li>
    <li @click="goToDetail(13)">
      <goodslist class="my-container"/>
    </li>
    <li @click="goToDetail(14)">
      <goodslist class="my-container"/>
    </li>
    <li @click="goToDetail(15)">
      <goodslist class="my-container"/>
    </li>
  </ul>
</template>

<script>
  export default {
    created() {
      console.log(this.$route.query.keyWord);
    },
    methods: {
      goToDetail(id) {
        this.$router.push({
          name: "goodDetail",
          params: {
            id
          }
        });
      }
    },
    watch: {
      $route() {
        console.log(this.$route.query.keyWord);
      }
    }
  };
</script>


<style lang="less" scoped>
  ul {
    > li {
      background-color: white;
      padding: 0px 30px;
      &:hover {
        background-color: #dddddd;
      }
    }
  }
</style>


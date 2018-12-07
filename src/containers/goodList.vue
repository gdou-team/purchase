<template>
  <div>
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
  <div class="page" v-if="totalPage>pageSize">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :background='true'
      :total="totalPage">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import {get} from '@/util'
  export default {
    data(){
      return {
        pageSize:5,
        totalPage:1000,
        list:[]
      }
    },
    created() {
      console.log(this.$route.query.keyWord);
    },
    methods: {
      handleCurrentChange(e){
        console.log(e)
      },
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
  .page{
    text-align: center;
    padding-top: 20px;
  }
</style>


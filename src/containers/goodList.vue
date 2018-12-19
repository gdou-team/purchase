<template>
  <div>
    <ul v-loading='loading' style="min-height:200px;">
      <li v-if="list.length == 0" style="text-align:center;padding:50px 0">暂无数据</li>
    <li @click="goToDetail(item.id)" v-for="(item,index) in list" :key="index">
      <goodslist class="my-container" :listDetail='item'/>
    </li>
  </ul>
  <!-- <div class="page" v-if="totalPage>pageSize">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :background='true'
      :total="totalPage">
    </el-pagination>
  </div> -->
  </div>
</template>

<script>
import {get} from '@/util'
  export default {
    data(){
      return {
        pageSize:5,
        totalPage:1000,
        list:[],
        loading:false
      }
    },
    created() {
      // console.log(this.$route.query.keyWord);
      this.getList()
    },
    methods: {
      goToDetail(id) {
        this.$router.push({
          name: "goodDetail",
          params: {
            id
          }
        });
      },
      async getList(){
        try {
          this.loading = true
          const result = await get('/xiaojian/findByShopNameOrGoodsTitle',{goodsTitle:this.$route.query.keyWord})
          this.list  = result.data
        } catch (error) {
          this.$message.error('网络错误')
        }finally{
          this.loading = false
        }
      }
    },
    // activated(){
    //   this.getList()
    // },
    watch: {
      $route() {
        // console.log(this.$route.query.keyWord);
        this.getList()
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


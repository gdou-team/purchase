<template>
  <div>
    <ul v-loading='loading' style="min-height:200px;">
      <li v-if="list.length == 0" style="text-align:center;padding:50px 0">暂无数据</li>
    <li @click="goToDetail(item.id)" v-for="(item,index) in list" :key="index" style="padding-bottom:20px;">
      <goodslist class="my-container" :listDetail='item'/>
    </li>
  </ul>
  <div class="page" v-if="totalPage>pageSize">
    <el-pagination
      @current-change="handleCurrentChange"
      :page-size="pageSize"
      layout="prev, pager, next, jumper"
      :background='true'
      :current-page='num'
      :total="totalPage">
    </el-pagination>
  </div>
  </div>
</template>

<script>
import {get} from '@/util'
import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        pageSize:5,
        totalPage:0,
        list:[],
        loading:false,
        num:1
      }
    },
    created() {
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
      handleCurrentChange(e){
        this.num = e
        this.getList()
      },
      async getList(){
        try {
          this.loading = true
          const result = await get('/xiaojian/serachByOption',{
            searchOption:this.$route.query.keyWord,
            num:this.num,
            size:this.pageSize,
            city:this.location
            })
          this.list  = result.result.resultGoods
          this.totalPage = result.result.total
        } catch (error) {
          this.$message.error('服务器或者网络出现问题')
        }finally{
          this.loading = false
        }
      }
    },
    computed:{
      ...mapGetters(['location'])
    },
    watch: {
      $route() {
        this.num = 1
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


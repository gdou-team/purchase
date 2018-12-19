<template>
  <div class="my-container my-detail my-center">
    <goodsdetail/>
    <div class="my-comment" v-loading='commentLoading' style="min-height:200px;background-color:white">
      <h3>评价</h3>
      <p v-if="commentList.length == 0" style="text-align:center;padding:20px 0;">暂无评论</p>
      <ul>
        <li v-for="(item,index) in commentList" :key="index">
          <Comment :comment='item'/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { get, post } from "../util";
export default {
  data(){
    return{
      commentLoading: false,
      commentList:[]
    }
  },
  created(){
    this.getComment()
  },
  activated(){
    this.getComment()
  },
  deactivated(){
    this.commentList = []
  },
  methods:{
    async getComment() {
      try {
        this.commentLoading = true;
        const result = await get("/xiaojian/getCommentByGoodsId", {
          goodsId: this.$route.params.id
        });
        if (result.status == "success") {
          console.log(result.comment)
          this.commentList = result.comment;
        } else {
          this.$message.error("获取商品评论失败");
        }
      } catch (error) {
        this.$message.error("服务器或者网络出现问题");
      } finally {
        this.commentLoading = false;
      }
    }
  }
}
</script>


<style lang="less" scoped>
  .my-detail {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .my-comment {
      width: 100%;
      margin-top: 10px;
      border: 1px solid #cccccc;
      ul {
        li {
          border-top: 1px solid #cccccc;
        }
      }
      h3 {
        background-color: white;
        line-height: 20px;
        padding: 30px;
      }
    }
  }
</style>

<template>
  <div class="my-container1">
    <div class="my-user flexrow">
      <img v-lazy='comment.userDetail.userImageUrl'>
      <div class="rate">
        <p>{{comment.userDetail.nickName}}</p>
        <el-rate
          v-model="value5"
          disabled
          show-score
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
      </div>
    </div>
    <p class="content">
      {{comment.resultComment.commentDesc}}
    </p>
  </div>
</template>

<script>
  export default {
    props:{
      comment:{
        type:Object
      }
    },
    data() {
      return {
        value5: 3.7
      };
    },
    created(){
      this.value5 = this.comment.resultComment.commentStars
    }
  };
</script>

<style lang="less" scoped>
  .my-container1 {
    background-color: white;
    padding: 30px;
    // width: 1200px;
    // min-width: 1200px;
    box-sizing: border-box;
    width: 100%;
  }

  .my-user {
    > img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    > .rate {
      margin-left: 10px;
      > p {
        margin-bottom: 5px;
      }
    }
  }

  .content {
    margin-top: 10px;
  }
</style>


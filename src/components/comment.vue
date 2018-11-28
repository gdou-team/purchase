<template>
    <div class="my-container1">
        <div class="my-user flexrow">
            <img src="@/assets/default.png">
            <div class="rate">
                <p>1234567</p>
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
            这里第一眼看上去很满意，房东人很好的，很好相处好说话，卫生很干净，地理位置比较好找，性价比挺高的
            这里第一眼看上去很满意，房东人很好的，很好相处好说话，卫生很干净，地理位置比较好找，性价比挺高的
            这里第一眼看上去很满意，房东人很好的，很好相处好说话，卫生很干净，地理位置比较好找，性价比挺高的
            </p>
    </div>
</template>

<script>
export default {
  data() {
    return {
      value5: 3.7
    };
  }
};
</script>

<style lang="less" scoped>
.my-container1{
    background-color: white;
    padding: 30px;
    // width: 1200px;
    // min-width: 1200px;
    box-sizing: border-box;
    width: 100%;
}
.my-user{
    >img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    >.rate{
        margin-left: 10px;
        >p{
            margin-bottom: 5px;
        }
    }
}
.content{
    margin-top: 10px;
}
</style>


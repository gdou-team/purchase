<template>
    <ul>
        <li><goodslist  class="my-container"/></li>
        <li><goodslist  class="my-container"/></li>
        <li><goodslist  class="my-container"/></li>
        <li><goodslist  class="my-container"/></li>
        <li><goodslist  class="my-container"/></li>
    </ul>
</template>

<script>
export default {
    created(){
        console.log(this.$route.query.keyWord)
    },
    watch:{
        $route(){
            console.log(this.$route.query.keyWord)
        }
    }
}
</script>


<style lang="less" scoped>
ul{
    >li{
        background-color: white;
        padding: 0px 30px;
        &:hover{
            background-color: #dddddd;
        }
    }
}
</style>


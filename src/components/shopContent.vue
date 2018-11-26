<template>
    <div>
        <h2 class="h2">{{title}}</h2>
        <ul class="big-good-list">
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
            <li><biggoods infoBgColor='white' width='250px' /></li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        title:{
            type:String,
            default:'美食'
        }
    }
}
</script>

<style lang="less" scoped>
.h2{
    border-bottom: 1px solid #cccccc;
    padding-bottom: 10px;
    color: #3d3d3d;
}
.big-good-list{
    display: flex;
    flex-direction: row;
    // justify-content: space-between;
    flex-wrap: wrap;
    margin-left:-25px;
    li{
        margin: 25px 0px 0px 25px;
    }
}
</style>


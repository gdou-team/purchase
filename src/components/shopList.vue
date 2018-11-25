<template>
    <div class="my-shop-list">
        <ul>
            <li>美食</li>
            <li>电影 | 在线选座</li>
            <li>门票</li>
            <li>团购</li>
            <li>DIY</li>
            <li>休闲娱乐</li>
            <li>生活服务</li>
            <li>教育培训</li>
            <li>服装</li>
            <li>教育培训</li>
        </ul>
    </div>
</template>

<style lang="less" scoped>
.my-shop-list{
    border: 2px solid #FF7E00;
    border-top: none;
    width: 200px;
    background-color: white;
    ul{
        li{
            text-align: center;
            line-height: 49px;
            cursor: pointer;
            font-weight: bold;
            font-size: 14px;
        }
        li+li{
            border-top: 1px solid #E5E5E5;
        }
    }
}
</style>

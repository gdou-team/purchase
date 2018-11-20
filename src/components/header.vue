<template>
    <div class="container">
        <div class="left">
            <ul>
                <li>帮助</li>
                <li>反馈</li>
            </ul>
        </div>
        <div class="right">
            <ul>
                <li>团购购物车(0)</li>
                <li>我的</li>
                <li>更多</li>
                <li>[登录]</li>
                <li>[注册]</li>
            </ul>
        </div>
    </div>
</template>


<style lang="less" scoped>
.container{
    width: 100%;
    padding: 10px 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    .left{
        ul{
            display: flex;
            flex-direction: row;
        }
    }
}
</style>


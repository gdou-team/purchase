<template>
    <div class="my-container my-detail my-center">
        <goodsdetail/>
        <div class="my-comment">
            <h3>评价</h3>
            <ul>
                <li><Comment/></li>
                <li><Comment/></li>
                <li><Comment/></li>
                <li><Comment/></li>
                <li><Comment/></li>
            </ul>
        </div>
    </div>
</template>

<style lang="less" scoped>
.my-detail{
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .my-comment{
        margin-top: 10px;
        border: 1px solid #cccccc;
        ul{
            li{
                border-top: 1px solid #cccccc;
            }
        }
        h3{
            background-color: white;
            line-height: 20px;
            padding:30px; 
        }
    }
}
</style>

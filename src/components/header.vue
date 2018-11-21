<template>
        <div class="my-header">
        <div class="my-left fontsize14">
            <ul>
                <li>帮助</li>
                <li>反馈</li>
            </ul>
        </div>
        <div class="my-right fontsize14">
            <ul>
                <li>团购购物车(0)</li>
                <li>我的</li>
                <li>更多</li>
                <li class="my-item">[登录]</li>
                <li class="my-item">[注册]</li>
            </ul>
        </div>
    </div>
</template>


<style lang="less" scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    li{
        padding: 0 20px 0 0;
        cursor: pointer;
        &.my-item{
            color: #506EAA;
        }
    }
  }
}
</style>


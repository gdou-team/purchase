<template>
    <div class="my-search">
        <div class="my-city fontsize14">
            <span class="city">北京</span>
            <span>切换城市</span>
        </div>
        <div class="demo">
            <div class="my-input flexrowcenter">
            <input type="text">
            <span>搜索</span>
            </div>
            <ul class="my-list flexrow fontsize12">
                <li>水乐园</li>
                <li>自助餐</li>
                <li>美食</li>
            </ul>
        </div>
        <div class="my-bg"></div>
    </div>
</template>

<script>
export default {
    data(){
        return{}
    }
}
</script>


<style lang="less" scoped>
.my-search{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.my-city {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  .city {
    font-weight: bold;
    padding-right: 10px;
  }
  span:nth-child(2){
      cursor: pointer;
  }
}
.my-input {
 input:nth-child(1){
     border: 2px solid #FF971B;
     width: 474px;
     height: 38px;
 }
 span{
     width: 99px;
     height: 42px;
     background-color: #FF971B;
     line-height: 42px;
     text-align: center;
     color: white;
     font-weight: bold;
     font-size: 16px;
 }
}
.my-list {
    position: absolute;
    bottom:0;
    left: 0;
  li{
      padding: 5px 10px 5px 0;
  }
}
.my-bg{
    background: url('../assets/commitment.png') no-repeat center center;
    width: 187px;
    height: 45px;
}
.demo{
    position: relative;
}
</style>

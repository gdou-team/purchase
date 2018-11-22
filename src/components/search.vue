<template>
    <div class="my-search">
        <div class="my-city fontsize14">
            <span class="city">北京</span>
            <span @click="goTo">切换城市</span>
        </div>
        <div class="demo">
            <div class="my-input flexrowcenter">
            <input type="text" placeholder="请输入关键字">
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
// 搜索
export default {
    data(){
        return{
            isShow:false
        }
    },
    methods:{
        goTo(){
            if(this.isShow==false){
                this.isShow=true
                this.$router.push({name:'selectCity'})
                return
            }else{
                this.$router.push({name:'home'})
                this.isShow=false;
            }
        }
    }
}
</script>


<style lang="less" scoped>
.my-search{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
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
     -webkit-tap-highlight-color: rgba(255, 255, 255, 0); 
    -webkit-user-select: none;
    -moz-user-focus: none;
    -moz-user-select: none;
    -webkit-appearance:none;
    outline: none;
     border: 2px solid #FF971B;
     width: 474px;
     height: 28px;
     padding: 5px 10px 5px 20px;
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
    bottom:-30px;
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

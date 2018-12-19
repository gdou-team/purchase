<template>
  <div class="citylist">
    <ul>
      <span>{{title}}</span>
      <li>
        <a v-for="(item,index) in city" :key='index' @click.prevent='handelClick(item)' href="javascript:;">{{item}}</a>
      </li>
    </ul>
  </div>

</template>

<script>
import {mapMutations} from 'vuex'
  // 城市列表
  export default {
    props: {
      city:{
      	type:Array,
      	default:[]
      },
      title:{
      	type:String,
      	default:''
      }
    },
    methods:{
      ...mapMutations(['setLocation','setIsShowSelectCity']),
      handelClick(item){
        this.setLocation(item)
        this.setIsShowSelectCity(false)
      }
    }
  }
</script>

<style>
  .citylist {
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    padding: 10px 0 10px 25px;
  }

  .citylist ul {
    border-top: 1px solid #FFF;
    border-bottom: 1px solid #FFF;
    padding: 10px 0 10px 25px;
  }

  .citylist span {
    width: 29px;
    height: 29px;
    background-color: #F5F5F5;
    border: 1px solid #EAEAEA;
    text-align: center;
    float: left;
    font: 15px/29px Arial;
    color: #3D3D3D;
  }

  .citylist li {
    margin-left: 50px;
    padding-top: 4px;
    font-size: 0;
  }
  .citylist ul:hover{
    background-color: #FAFBFB;
    border-color: #F0F3F5;
  }
  .citylist ul:hover span{
    background-color: #6586CB;
    border-color: #6586CB;
    color: #fff;
  }
  .citylist a {
    display: inline-block;
    height: 22px;
    margin: 0 25px 5px 0;
    padding: 0 8px;
    font: 14px/22px Microsoft Yahei;
    color: #565656;
    text-decoration: none;
  }
  .citylist a:hover{
      border-color: #6586CB;
      background-color: #6586CB;
      color: #FFF;
      font-weight: bolder;
  }


</style>

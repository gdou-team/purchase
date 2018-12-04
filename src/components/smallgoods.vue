<template>
  <div class="small_goods noml" @click="smallGoods">
    <a @click.prevent class="small_goods_img" href="javascritp:;">
      <img class="dynload" v-lazy='goodDetail.imageUrl' :alt="goodDetail.goodsDesc" width="198" height="126">
    </a>
    <h4>
      <a @click.prevent class="small_goods_name" href="javascritp:;">{{goodDetail.goodsTitle}}</a>
      <a @click.prevent class="small_goods_text" href="javascritp:;">{{goodDetail.goodsDesc}}</a>
    </h4>
    <div class="small_goods_info">
      <span class="price"><em>¥</em>{{goodDetail.discountPrice}}</span>
      <span class="money">¥<del>{{goodDetail.oringinalPrice}}</del></span>
    </div>
  </div>
</template>

<script>
  export default {
    props:{
      goodDetail:{
        type:Object,
        default:function(){
          return {}
        }
      }
    },
    methods: {
      smallGoods() {
        this.$emit('smallGoods')
      }
    }
  }
</script>


<style>
  .noml {
    margin-left: 0;
    border: 1px solid transparent;
  }

  .noml:hover {
    border: 1px solid #FF7E00;
  }

  .small_goods {
    width: 198px;
    font-family: '\5b8b\4f53';
    float: left;
  }

  .small_goods_img {
    display: block;
    width: 100%;
    height: 126px;
    position: relative;
  }

  .small_goods_img img {
    border: 0;
    vertical-align: top;
  }

  .small_goods h4 {
    width: 100%;
    height: 40px;
    font-weight: 400;
    padding-top: 10px;
    overflow: hidden;
    padding: 5px 10px;
  }

  .small_goods h4 a {
    display: block;
    width: 100%;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-decoration: none;
    cursor: pointer;
    outline: 0;
  }

  .small_goods_name {
    font-size: 14px;
    color: #3d3d3d;
    /* text-indent: -7px; */
    font-family: Microsoft Yahei;
  }

  .small_goods_text {
    font-size: 12px;
    color: #727272;
  }

  .small_goods_info {
    width: 100%;
    color: #b0b0b0;
    height: 24px;
    padding-top: 4px;
    overflow: hidden;
    font-family: arial;
    padding: 5px 10px;
  }

  .small_goods_info span.price {
    display: inline-block;
    font-size: 20px;
    line-height: 24px;
    color: #FF7E00;
    padding-right: 15px;
    float: left;
    vertical-align: top;
    font-weight: 700;
  }

  .small_goods_info em {
    display: inline-block;
    font-size: 16px;
    line-height: 20px;
    vertical-align: top;
    padding: 3px 2px 0 0;
    font-weight: 400;
  }

  .small_goods_info span.money {
    display: inline-block;
    height: 16px;
    line-height: 16px;
    padding-top: 6px;
    vertical-align: top;
    float: left;
    font-size: 12px;
  }

  .small_goods_info del {
    font-family: '\5b8b\4f53';
    padding-left: 2px;
  }

</style>

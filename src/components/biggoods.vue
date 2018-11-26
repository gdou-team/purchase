<template>
	<div @click="handelClick" class="big_goods" :style="{'width':width}">
		<a class="big_goods_img" @click.prevent href="http://beijing.lashou.com/deal/13313092.html" target="_blank">
			<img class="dynload" src="../assets/biggoods.jpg" alt="【西红门】5_6人餐  ，交通便利">
		</a>
		<div class="big_goods_info" 
		:style="{'background-color':infoBgColor}"
		>
			<h3>
				<span class="ti">
					<a @click.prevent class="big_goods_name" href="http://beijing.lashou.com/deal/13313092.html" target="_blank">【西红门】儒家餐厅</a>
				</span>
				<span>
					<a @click.prevent class="big_goods_text" target="_blank" href="http://beijing.lashou.com/deal/13313092.html">5_6人餐  ，交通便利</a>
				</span>
			</h3>
			<div class="big_goods_price">
				<span class="price"><em>¥</em>1000</span>
		        <span class="money">¥<del>1020</del></span>
		        <span class="number">已售<span>110</span></span>
		    </div>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		width:{
			type:String,
			default:'100%'
		},
		infoBgColor:{
			type:String,
			default:'#f4f4f4'
		}
	},
	methods:{
		handelClick(){
			this.$emit('biggoods')
		}
	}
}
</script>


<style scoped>
	.big_goods{
		width: 100%;
    	font-family: Microsoft Yahei;
    	float: left;
    	text-decoration: none;
		border: 1px solid transparent;
	}
	.big_goods:hover{
		border: 1px solid #FF7E00;
	}
	.big_goods_img{
		width: 100%;
    	font-family: Microsoft Yahei;
	}
	.dynload{
		border: 0;
		vertical-align: top;
		width: 100%;
		height: auto;
	}
	.big_goods_info {
	    /* width: 309px; */
	    border: 1px solid #e9e9e9;
	    border-top: 0;
	    padding: 0 15px;
	    height: 80px;
	    /* background-color: #f4f4f4; */
	}
	.big_goods_info h3{
		width: 100%;
    	padding-top: 5px;
    	height: 46px;
	}
	.big_goods_info h3 .ti{
		text-indent: -8px;
	}
	.big_goods_info h3 span{
		display: block;
	    width: 100%;
	    overflow: hidden;
	    font-size: 12px;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	}
	.big_goods_info h3 span a{
		text-decoration: none;
	}
	.big_goods_name{
		font-size: 16px;
	    color: #3d3d3d;
	    line-height: 24px;
	}
	.big_goods_text{
		color: #727272;
	    font-weight: 400;
	    line-height: 22px;
	    font-family: '\5b8b\4f53';
	}
	.big_goods_price{
		width: 100%;
	    height: 24px;
	    font-family: arial;
	    color: #727272;
	}
	.big_goods_price em{
		display: inline-block;
	    font-size: 16px;
	    line-height: 20px;
	    vertical-align: top;
	    padding: 3px 2px 0 0;
	    font-weight: 400;
	}
	.price{
		display: inline-block;
	    font-size: 20px;
	    line-height: 24px;
	    color: #FF7E00;
	    padding-right: 15px;
	    float: left;
	    vertical-align: top;
	    font-weight: 700;
	}
	.money{
		display: inline-block;
	    height: 16px;
	    line-height: 16px;
	    padding-top: 6px;
	    vertical-align: top;
	    float: left;
	}
	.big_goods_price del{
		padding-left: 12px;
		font-size: 8px;
	}
	.number{
		font-family: '\5b8b\4f53';
	    display: inline-block;
	    height: 16px;
	    line-height: 16px;
	    padding-top: 5px;
	    vertical-align: top;
	    float: right;
	}
	.number span{
		display: inline-block;
	    color: #ec361e;
	    padding-left: 2px;
	    vertical-align: top;
	    font-size: 14px;
	}
</style>
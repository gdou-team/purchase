<template>
	<div class="list_item">
		<div class="order_item clearfix">
			<div class="order_img">
				<a href="javascript:;" class="link" target="_blank">
					<div>
						<img src="../assets/order_list.png" class="image">
					</div>
				</a>
			</div>
			<div class="order_info">
				<div class="info_box">
					<a href="javascript:;" class="link" target="_blank">
						<p class="order_title">Dream  cake  蛋糕屋[东站店]双层儿童生日蛋糕</p>
					</a>
					<p class="info">数量：1</p>
				</div>
			</div>
			<div class="order_price">总价：¥188.00</div>
			<div v-if="!isComment" class="order_status">去付款</div>
			<div v-else class="order_status" @click="comment">去评论</div>
			<div class="order_btn"></div>
		</div>
	</div>
	
</template>

<script>
	export default{
		props:{
			isComment:{
				type:Boolean,
				default:false
			}
		},
		methods:{
			comment(){
				this.$emit('comment')
			}
		}
	}
</script>

<style scoped>
	a{
		text-decoration: none;
	}
	p{
		margin-top: 0;
		margin-bottom: 0;
	}
	.order_item{
		overflow: hidden;
    	padding: 20px 0;
	}
	/*订单图片*/
	.order_item .order_img{
		float: left;
	}
	.order_item .order_img div{
		width: 90px;
	    height: 90px;
	    background-image: url(../assets/order_list.png);
	    background-position: 50%;
	    background-size: cover;
	    background-repeat: no-repeat;
	}
	.order_item .order_img img{
		width: 90px;
    	height: 90px;
    	border-radius: 4px;
	}
	.image{
		border: 0;
	}
	/*订单信息*/
	.order_item .order_info{
		float: left;
	    height: 90px;
	    width: 400px;
	    position: relative;
	}
	.order_item .order_info .info_box{
		position: absolute;
	    top: 50%;
	    transform: translateY(-50%);
	}
	.order_item .order_info .info_box .order_title{
		font-size: 16px;
	    color: #222;
	    margin: 10px 0 10px 15px;
	    font-weight: 500;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	    max-width: 300px;
	}
	.order_item .order_info .info_box .info{
		font-size: 12px;
	    color: #666;
	    margin-left: 15px;
	    height: 18px;
	}
	/*总价*/
	.order_item .order_price{
		float: left;
    	font-size: 12px;
	    color: #666;
	    line-height: 90px;
	    text-align: center;
	    width: 200px;
	    margin-left: 20%;
	}
	.order_item .order_status{
		float: left;
	    font-size: 12px;
	    color: #333;
	    line-height: 90px;
	    text-align: center;
	    width: 100px;
		margin-left: 10%;
		cursor: pointer;
	}
	

</style>
<template>
	<div class="main">
		<div class="shop_header" >
			<a href="javascript:;">
				{{title}}
			</a>
		</div>
	</div>

</template>

<script>
export default {
	props:{
		title:{
			type:String,
			default:'商家中心'
		}
	}
}
</script>


<style scoped>
	.main{
		width: 100%;
		background-color: skyblue;
		font-family:PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	}
	.shop_header{
		margin: 0 auto;
		width: 70%;
		height: 55px;
		line-height: 55px;
	}
	.shop_header a{
		outline: none;
		text-decoration: none;
		color: #fff;
		font-size: 26px;
		font-weight: 800;
	}
</style>
<template>
	<div class="citylist">
		<ul>
			<span>A</span>
			<li>
				<a href="javascript:;">安庆</a>
				<a href="javascript:;">安阳</a>
				<a href="javascript:;">鞍山</a>
				<a href="javascript:;">阿拉善盟</a>
				<a href="javascript:;">安达</a>
				<a href="javascript:;">安顺</a>
				<a href="javascript:;">阿克苏</a>
				<a href="javascript:;">阿勒泰</a>
				<a href="javascript:;">阿坝州</a>
				<a href="javascript:;">安康</a>
			</li>
		</ul>
	</div>

</template>

<script>
	// 城市列表
	export default{
		props:{
			city:{
				type:Array,
				default:[]
			},
			title:{
				type:String,
				default:''
			}
		}
	}
</script>

<style>
	.citylist{
		border-top: 1px solid #FFF;
    	border-bottom: 1px solid #FFF;
    	padding: 10px 0 10px 25px;
	}
	.citylist ul{
		border-top: 1px solid #FFF;
    	border-bottom: 1px solid #FFF;
    	padding: 10px 0 10px 25px;
	}
	.citylist span{
		width: 29px;
	    height: 29px;
	    background-color: #F5F5F5;
	    border: 1px solid #EAEAEA;
	    text-align: center;
	    float: left;
	    font: 15px/29px Arial;
	    color: #3D3D3D;
	}
	.citylist li{
		margin-left: 50px;
    	padding-top: 4px;
    	font-size: 0;
	}
	.citylist a{
		display: inline-block;
	    height: 22px;
	    margin: 0 25px 5px 0;
	    padding: 0 8px;
	    font: 14px/22px Microsoft Yahei;
	    color: #565656;
	    text-decoration: none;
	}

</style>
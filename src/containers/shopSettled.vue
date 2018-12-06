<template>
    <div class="main">
    	<ShopHeader />
		<div class="content">
			<h2>
				请选择您的合作行业
			</h2>
			<ul>
				<li>
					<a href="javascript:;" class="choose_service">
						<span class="service_logo food"></span>
					</a>
					<div class="desc">
						<strong >美食</strong>
						<p>海量流量、精准营销、深度分析，助力您的餐厅销量口碑双丰收</p>
					</div>
				</li>
				<li>
					<a href="javascript:;" class="choose_service">
						<span class="service_logo service"></span>
					</a>
					<div class="desc">
						<strong >服务</strong>
						<p>索取介绍,功夫老道,热忱为本,永续经营</p>
					</div>
				</li>
				<li>
					<a href="javascript:;" class="choose_service">
						<span class="service_logo hotel"></span>
					</a>
					<div class="desc">
						<strong >酒店</strong>
						<p>新美大双平台，轻松助力酒店实现销售、口碑双增长</p>
					</div>
				</li>
				<li>
					<a href="javascript:;" class="choose_service">
						<span class="service_logo travel"></span>
					</a>
					<div class="desc">
						<strong >旅游</strong>
						<p>海量流量、精准营销、深度分析，境内度假助您票量大卖，名利双收</p>
					</div>
				</li>
				<li>
					<a href="javascript:;" class="choose_service">
						<span class="service_logo other"></span>
					</a>
					<div class="desc">
						<strong >其他</strong>
						<p>新机遇、新挑战、新市场；服务只有起点，满意没有终点</p>
					</div>
				</li>
			</ul>
		</div>
		<ShopFooter />
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
	.main{
		background-color: green;
		font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
	}
	.content{
		background-color: #f7f7f7;
	    text-align: center;
	    padding: 100px 0;
	}
	.content h2{
		margin: 0;
    	padding: 0;
		font-family: FZLTXHKM;
		font-size: 32px;
		color: #666;
		font-weight: normal;
	    letter-spacing: 2px;
	    line-height: 1em;
	    margin-bottom: 78px;
	}
	.content ul{
		margin: 0;
	    padding: 0;
	    list-style: none;
	}
	.content ul li{
		display: inline-block;
	    width: 152px;
	    vertical-align: top;
	    margin: 0 25px;
	}
	.content ul a{
		display: block;
	    text-align: center;
	    line-height: 152px;
	    height: 152px;
	    margin-bottom: 26px;
	    font-size: 0;
	    background-color: #777;
	    border-radius: 50%;
	    background-position: -2px -2px;
	    text-decoration: none;
	}
	.content ul a .service_logo{
		background-image: url('../assets/shop_service.png');
		background-repeat: no-repeat;
		display: inline-block;
		vertical-align: middle;
		transform: scale3d(0.8, 0.8, 0.8);
		transition: 0.3s ease-in-out;
		width: 100px;
    	height: 100px;
	}
	.food{
    	background-position: -2px -158px;
	}
	.service{
		background-position: -2px -470px
	}
	.hotel{
		background-position: -2px -262px;
	}
	.travel{
	    background-position: -2px -574px;
	}
	.other{
		background-position: -2px -366px;
	}
	.content ul a:hover .service_logo{
		transform: scale3d(1, 1, 1);
	}
	.content .desc strong{
		font-size: 18px;
	    line-height: 1em;
	    color: #333;
	    white-space: nowrap;
	}
	.content .desc p{
		font-size: 12px;
	    line-height: 18px;
	    text-align: center;
	    color: #666;
	    margin: 4px 0 0;
	}
	
</style>



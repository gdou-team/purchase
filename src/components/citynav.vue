<template>
    <div class="city_nav">
		<div class="city_nav_left">
			<h2>
				进入
				<a class="current_city" href="javascript:;">佛山</a>
			</h2>
			
		</div>
		<div class="city_nav_right">
			<div class="shortcut">
				<form id="cityChange">
					<span class="tips">按省份选择：</span>
					<!-- 二级联动选择当前城市 -->
					<el-dropdown id="province"> 
						<span class="el-dropdown-link"> 
							省份
							<i class="el-icon-arrow-down el-icon--right"></i> 
						</span> 
						<el-dropdown-menu slot="dropdown"> 
							<el-dropdown-item>广东</el-dropdown-item> 
							<el-dropdown-item>湖南</el-dropdown-item> 
							<el-dropdown-item>海南</el-dropdown-item>
						</el-dropdown-menu> 
					</el-dropdown>
					<el-dropdown id="city"> 
						<span class="el-dropdown-link"> 
							城市
							<i class="el-icon-arrow-down el-icon--right"></i> 
						</span> 
						<el-dropdown-menu slot="dropdown"> 
							<el-dropdown-item>广州</el-dropdown-item> 
							<el-dropdown-item>佛山</el-dropdown-item> 
							<el-dropdown-item>湛江</el-dropdown-item>
						</el-dropdown-menu> 
					</el-dropdown>
					<input type="submit" value="确 定" class="button">
				</form>
			</div>
			<div>
				<form id="search_city">
					<span class="tips">直接输入</span>
					<input type="text" name="cityname" class="text" placeholder="请输入城市的名称">
					<input type="submit" value="确 定" class="button">
				</form>
			</div>
		</div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>
	.city_nav{
		height: 45px;
		padding: 18px 25px;
		border-bottom: 1px solid #EBEBEB;
		background-color: #f7f7f7;
		color: #565656;
	}
	.city_nav h2{
		display: inline-block;
	    height: 45px;
	    padding-right: 40px;
	    font: 18px/45px Microsoft Yahei;
	    color: #3D3D3D;
	    border-right: 1px solid #E0E0E0;
	    float: left;
	}
	.current_city{
		margin-left: 10px;
		font-size: 28px;
		color: pink;
		text-decoration: none;
	}
	.shortcut {
	    float: left;
	    height: 27px;
	    padding: 9px 0 9px 25px;
	    border-left: 1px solid #FFF;
	    display: flex;
	}
	.tips{
		display: inline-block;
	    line-height: 27px;
	    float: left;
	    font-size: 15px;
	    font-family: Microsoft Yahei;
	}
	#province{
		float: left;
	    width: 95px;
	    height: 27px;
	    line-height: 27px;
	    margin-right: 10px;
	    font-size: 14px;
	    font-family: Microsoft Yahei;
	    cursor: default;
	    position: relative;
	}
	#city{
		float: left;
	    width: 95px;
	    height: 27px;
	    line-height: 27px;
	    font-size: 14px;
	    font-family: Microsoft Yahei;
	    cursor: default;
	    position: relative;
	}
	#cityChange .button{
		float: left;
	    width: 59px;
	    height: 27px;
	    line-height: 27px;
	    border: 0;
	    cursor: pointer;
	    font-size: 12px;
	    color: #FFF;
	    overflow: hidden;
	}
	#search_city{
		float: left;
	    height: 27px;
	    padding: 9px 0 9px 25px;
	    font-size: 14px;
	    position: relative;
	    z-index: 1;
	}
	#search_city .text{
		width: 160px;
	    height: 21px;
	    line-height: 21px;
	    border: 1px solid #C6C6C6;
	    float: left;
	    margin-right: 10px;
	    margin-left: 10px;
	    font-size: 14px;
	    padding: 2px 5px 2px 8px;
	}
	#search_city .button{
		float: left;
	    width: 59px;
	    height: 27px;
	    line-height: 27px;
	    border: 0;
	    cursor: pointer;
	    font-size: 12px;
	    color: #FFF;
	    overflow: hidden;
	}
</style>

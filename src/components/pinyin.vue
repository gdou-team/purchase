<template>
	<div class="pinyin">
		<span>按拼音首字母选择</span>
		<a href="javascript:;" @click.stop.prevent="handlerClick($event)" v-for="(item,index) in letter_list" :key="index" :data-title="item">{{item}}</a>
	</div>
</template>

<script>
	export default{
		name: 'pinyin',
		data(){
			return {
				letter_list:['A','B','C','D','E','F','G','H','J','K','L','M','N','O','P','Q','R','S','T','W','X','Y','Z']
			}
		},
		methods:{
			handlerClick(e){
				this.$emit("nav", e.target.dataset.title);
				//console.log(e.target.dataset.title);
			},
		}
	}

</script>

<style scoped>
	
	.pinyin{
		padding: 20px 25px;
	    height: 20px;
	    font: 15px/20px Microsoft Yahei;
	}
	.pinyin a{
		margin: 0 3px;
	    padding: 1px 5px;
	    text-decoration: none;
	    font-size: 15px;
	    font-family: arial;
	    color: #565656;
	}
	.pinyin a:hover{
		border-color: #6586CB;
    	background-color: #6586CB;
    	color: #FFF;
	}
</style>
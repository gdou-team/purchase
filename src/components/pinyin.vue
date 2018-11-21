<template>
	<div class="pinyin">
		<span>按拼音首字母选择</span>
		<a href="javascript:;" @click=letter() v-for="(item,index) in letter_list" :key="index">{{item}}</a>
	</div>
</template>

<script>
	export default{
		name: 'pinyin',
		data(){
			return {
				letter_list:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
			}
		},
		methods:{
			letter(){

			}
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

</style>
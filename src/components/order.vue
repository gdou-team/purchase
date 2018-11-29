<template>
	<div class="main">
	    <el-table
	      :data="tableData"
	      :cell-style="{'text-align':'center'}"
	      :header-cell-style="{'text-align':'center'}"
	      style="width: 100%">
	      <el-table-column
	        prop="name"
	        label="项目"
	        width="360">
	      </el-table-column>
	      <el-table-column
	        label="单价"
	        width="180">
	         <template slot-scope="scope">
				<span>￥</span>
		      	<span class="single_price">{{scope.row.single_price}}</span>
		      </template>
	      </el-table-column>
	      <el-table-column
	        label="数量">
	        <template slot-scope="scope">
	        	<el-input-number ref="input" v-model='tableData[scope.$index].count' @change="handleChange(scope.$index)" :min="1" :max="10"></el-input-number>
	        </template>
	      </el-table-column>
	      <el-table-column
	        label="总价">
	        <template slot-scope="scope">
				<span>￥</span>
		      	<span class="total">{{scope.row.total}}</span>
	      	</template>
	      </el-table-column>
	    </el-table>
		<h3 class="total_price">
			<span>应付金额￥</span>
			<span class="total_price_num">{{total_price_num}}</span>
		</h3>
		<el-button type="primary" class="submit_order" @click="goBack" style="margin-left:20px;">返回</el-button>
		<el-button type="primary" class="submit_order" @click="submit_order">提交订单</el-button>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				tableData:[{
					name:'大汉风下午茶',
					count:1,
					single_price:42,
					total:42
				}],
				total_price_num:0
			}
		},
		methods:{
			handleChange(index){
				this.tableData[index].total =  this.tableData[index].count * this.tableData[index].single_price;
				this.total_price_num = this.tableData[index].total
				// this.tableData.forEach( (element, index)=> {
				// 	this.total_price_num += element.total
				// });
			},
			submit_order(){
				this.$router.push({name:'orderPay',params:{
					id:101
				}})
			},
			goBack(){
				this.$router.back()
			}
		},
		mounted(){
			this.tableData.forEach( (element, index)=> {
				this.total_price_num += element.total
			});
		}
	}

</script>

<style scoped>
	.main{
		width: 90%;
		margin: 0 auto;
		margin-top: 20px;
	}
	.total_price{
		margin-top: 20px;
		padding: 20px;
		border-top: 1px #333 solid;
		border-bottom: 1px #333 solid;
		box-sizing: border-box;
		text-align: right;
	}
	.total_price_num{
		font-size: 20px;
	}
	.submit_order{
		margin-top: 20px;
		float: right;
	}
</style>
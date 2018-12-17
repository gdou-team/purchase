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
import { mapGetters, mapMutations } from "vuex";
import { post } from "@/util";
export default {
  data() {
    return {
      tableData: [
        {
          name: "大汉风下午茶",
          count: 1,
          single_price: 42,
          total: 42
        }
      ],
      total_price_num: 0
    };
  },
  methods: {
    ...mapMutations(["setOrderDetail",'setOrderPayDetail']),
    handleChange(index) {
      let total =
        this.tableData[index].count * this.orderDetail["single_price"];
      this.setOrderDetail({
        name: this.orderDetail.name,
        count: this.tableData[index].count,
        single_price: this.orderDetail["single_price"],
        total
      });
      this.tableData[index].total = total;
      this.total_price_num = this.tableData[index].total;
      // this.tableData.forEach( (element, index)=> {
      // 	this.total_price_num += element.total
      // });
    },
    async submit_order() {
      try {
        const formDate = new FormData();
        formDate.append("goodsId", this.orderDetail.goodsId);
        formDate.append("count", this.orderDetail.count);
        const result = await post("/tjsanshao/order/create", formDate);
        if (result.status == "success") {
          this.setOrderPayDetail(result)
          this.$router.push({
            name: "orderPay"
          });
        }else{
          this.$message.error('提交失败')
        }
      } catch (error) {
        this.$message.error('网络错误')
      }
      // this.$router.push({
      //   name: "orderPay",
      //   params: {
      //     id: 101
      //   }
      // });
    },
    goBack() {
      this.$router.back();
    }
  },
  created() {
    this.tableData[0] = JSON.parse(JSON.stringify(this.orderDetail));
    this.tableData.forEach((element, index) => {
      this.total_price_num += element.total;
    });
  },
  computed: {
    ...mapGetters(["orderDetail"])
  }
};
</script>

<style scoped>
.main {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
}
.total_price {
  margin-top: 20px;
  padding: 20px;
  border-top: 1px #333 solid;
  border-bottom: 1px #333 solid;
  box-sizing: border-box;
  text-align: right;
}
.total_price_num {
  font-size: 20px;
}
.submit_order {
  margin-top: 20px;
  float: right;
}
</style>
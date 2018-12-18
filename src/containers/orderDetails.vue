<template>
  <div class="main">
    <div class="head" v-if="orderDetail.sellStatus == '待评价'">
      <p class="title">待评价</p>
      <el-rate
        v-model="rate"
        show-text>
      </el-rate>
      <el-input
        class='comment'
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
      <button class="btn order_again commit" @click="commit">提交评论</button>
    </div>
    <div class="item">
      <h3 class="title">订单信息</h3>
      <div class="order_info">
        <div class="field_item">
          <div class="field_name">单价</div>
          <div class="field_value">￥{{orderDetail.goods.discountPrice}}</div>
        </div>
        <div class="field_item">
          <div class="field_name">下单时间</div>
          <div class="field_value">{{orderDetail.order.orderCreateTime | formateDate}}</div>
        </div>
        <div class="field_item">
          <div class="field_name">订单总价</div>
          <div class="field_value">{{orderDetail.order.total}}</div>
        </div>
      </div>
      <!-- 右侧按钮 -->
      <div class="btn_group">
        <button @click="againOrder" class="btn order_again">再次预定</button>
        <button @click='deleteOrder' class="btn">删除订单</button>
      </div>
    </div>
    <div class="item">
      <h3 class="title">商家信息</h3>
      <div class="shop_name">{{orderDetail.goods.goodsTitle}}</div>
      <div class="info">{{orderDetail.goods.goodsCategory}}</div>
      <div class="info">0759-2383111</div>
    </div>
    <!-- <div class="item">
      <h3 class="title">标准大床房</h3>
      <div class="info">华南地区最奢华的享受</div>
      <div class="info">wifi</div>
      <div class="info">空调/热水</div>

    </div> -->
    <div class="item">
      <h3 class="title">预定信息</h3>
      <div class="user_info">
        <div class="field_item">
          <div class="field_name">预订人</div>
          <div class="field_value">{{userDetail.nickName}}</div>
        </div>
        <div class="field_item">
          <div class="field_name">联系电话</div>
          <div class="field_value">{{userInfo.mobile}}</div>
        </div>
        <div class="field_item">
          <div class="field_name">使用说明</div>
          <div class="field_value desc">在当天14:00前使用，逾期自动退款</div>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="btn_group">
        <button class="btn" @click="goBack">返回</button>
      </div>
    </div>
  </div>
</template>


<script>
import { get, formateDate } from "@/util";
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      rate: null,
      textarea: null
    };
  },
  filters: {
    formateDate
  },
  props: {
    orderDetail: {
      type: Object
    }
  },
  methods: {
    commit() {
      //const res = await post('addr',{rate:this.rate,comment:this.textarea});
      var res = true;
      if (res) {
        this.$message({
          message: "评论成功",
          type: "success"
        });
      } else {
        this.$message({
          message: "评论失败",
          type: "warning"
        });
      }
    },
    deleteOrder(){
      this.$emit('deleteOrder')
    },
    goBack() {
      this.$emit("goBack");
    },
    againOrder(){
      this.$emit('againOrder')
    }
  },
  computed:{
    ...mapGetters(['userInfo','userDetail'])
  }
};
</script>

<style scoped>
.main {
  font-family: "-apple-system", BlinkMacSystemFont, Roboto, "Helvetica Neue",
    "MIcrosoft YaHei", sans-serif !important;
  width: 95%;
  /* margin: 0 auto 20px; */
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  min-height: 200px;
  background: #fff;
  padding: 30px 30px 0;
  margin: 10px auto 0;
}

.head {
  margin-bottom: 20px;
}

.head .title {
  font-size: 20px;
  color: #333;
  line-height: 26px;
  font-weight: 500;
  margin-bottom: 10px;
}

.head .comment {
  width: 400px;
  margin-top: 20px;
}

.head .commit {
  float: right;
}

.item {
  border-top: 1px solid #e5e5e5;
  padding: 30px 0;
  overflow: hidden;
}

.item .title {
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
}

.item .order_info,
.item .user_info {
  float: left;
}

.item .field_item {
  margin-top: 5px;
  font-size: 14px;
}

.item .field_name {
  width: 95px;
  border-right: 1px solid #e5e5e5;
  text-align: right;
  padding-right: 30px;
  float: left;
}

.item .field_value {
  float: left;
  text-align: left;
  padding-left: 30px;
  height: 40px;
  width: 500px;
}

.btn_group {
  float: right;
  margin-top: 20px;
}

.btn {
  background: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 100px;
  font-size: 12px;
  color: #666;
  height: 40px;
  width: 82px;
  cursor: pointer;
  margin: 0 15px;
  line-height: 40px;
  text-align: center;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-user-select: none;
  -moz-user-focus: none;
  -moz-user-select: none;
  -webkit-appearance: none;
  outline: none;
}

.order_again {
  background: rgb(64, 158, 255);
  color: #fff;
}

.shop_name {
  font-size: 14px;
  color: rgb(84, 191, 230);
  margin-left: 20px;
  font-weight: 500;
}

.info {
  margin-left: 20px;
  font-size: 12px;
  color: #333;
  padding-top: 20px;
}
</style>

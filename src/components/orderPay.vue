<template>
    <div class="pay-container" ref="payContainer">
        <div class="title">
            请在<span>{{time}}</span>内完成支付，超时会自动取消订单
        </div>
        <div class="detail">
            <div>项目 ：{{orderPayDetail.goods.goodsTitle}}</div>
            <div>应付金额 ： ￥<span>{{orderPayDetail.order.total}}</span></div>
        </div>
        <div class="pay">
            <el-radio class="radio" v-model="pay" label="1" size='medium'>支付宝支付</el-radio>
            <div class="num">支付 ￥<span>{{orderPayDetail.order.total}}</span></div>
            <div class="gopay">
                <div @click="goBack">返回修改订单</div>
                <el-button :disabled="isOverdue" type="primary" @click='goToPay'>去付款</el-button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import { post } from "../util";
export default {
  data() {
    return {
      pay: "1",
      time: "00:00:00",
      isOverdue: false
    };
  },
  methods: {
    setTime() {
      this.timer = setInterval(() => {
        let latest = new Date(this.orderPayDetail.expire);
        let now = Date.now();
        let time = latest.getTime() - now;
        let s = parseInt((time / 1000) % 60);
        let m = parseInt((time / 1000 / 60) % 60);
        let h = parseInt(time / 1000 / 60 / 60);
        if (s < 0 || m < 0 || h < 0) {
          clearInterval(this.timer);
          this.time = `00:00:00`;
          this.isOverdue = true;
          this.$router.replace({
            name: "orderList"
          });
          return;
        }
        if (h < 10) {
          h = `0${h}`;
        }
        if (m < 10) {
          m = `0${m}`;
        }
        if (m == 0) {
          m = "00";
        }
        if (s < 10) {
          s = `0${s}`;
        }
        this.time = `${h}:${m}:${s}`;
      }, 1000);
    },
    async goBack() {
      try {
        const formData = new FormData();
        formData.append("id", this.orderPayDetail.order.id);
        const result = await post("/tjsanshao/user/deleteOrder", formData);
        this.$router.back();
      } catch (error) {
        this.$message.error('服务器或者网络出错了')
      }
    },
    async goToPay() {
      try {
        const formData = new FormData();
        formData.append("orderId", this.orderPayDetail.order.id);
        const result = await post("/tjsanshao/order/pay", formData);
        const div = document.createElement("div");
        div.innerHTML = result; //此处form就是后台返回接收到的数据
        document.body.appendChild(div);
        document.forms[0].submit();
      } catch (error) {}
    }
  },
  mounted() {
    this.timer = null;
    this.setTime();
  },
  computed: {
    ...mapGetters(["orderPayDetail"])
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>


<style lang="less" scoped>
.pay-container {
  background-color: #f8f8f8;
  margin-top: 20px;
}
.title {
  width: 100%;
  line-height: 42px;
  text-align: center;
  background-color: #ffffff;
  span {
    color: #ff6600;
  }
}
.detail {
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #ffffff;
  div:nth-child(1) {
    font-size: 20px;
  }
  div:nth-child(2) {
    color: #ff6600;
    span {
      font-size: 40px;
    }
  }
}
.pay {
  margin-top: 10px;
  background-color: #ffffff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  > .num {
    align-self: flex-end;
    margin-top: 20px;
    font-size: 16px;
    color: #ff6600;
    span {
      font-size: 40px;
    }
  }
}
.gopay {
  margin-top: 20px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
  div:nth-child(1) {
    color: #747474;
    margin-right: 20px;
    cursor: pointer;
    font-size: 14px;
  }
}
</style>


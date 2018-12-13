<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="验证方式"></el-step>
      <el-step title="验证"></el-step>
      <el-step title="修改"></el-step>
      <el-step title="完成"></el-step>
    </el-steps>

    <el-tabs v-model="activeName">
      <el-tab-pane name="first">
        <div class="first">
          <i class="el-icon-setting"></i>
          <div>
            <p>通过手机号和密码</p>
            <p>需填写绑定手机号</p>
          </div>
          <el-button type="success" @click="next('second')">去修改</el-button>
        </div>
      </el-tab-pane>
      <el-tab-pane name="second">
        <div class="second">
          <p>请填写您曾使用过的相关信息</p>
          <p>我们将依据此信息核对您的身份</p>
          <div class="phone">
            <div class="flexrow" style="align-items: center;">
              <label>手机号</label>
              <el-input v-model="phone.oldPhone" placeholder="请输入手机号码"></el-input>
            </div>
            <p v-if="isError.oldPhone" class="p fontsize12" style="color:red;">手机格式有误</p>
          </div>
          <div class="phone">
            <div class="flexrow" style="align-items: center;">
              <label>密码</label>
              <el-input v-model="phone.oldPassword" type="password" placeholder="请输入手机密码"></el-input>
            </div>
          </div>
          <div class="btn">
            <el-button type="success" @click="nextThird('third')">下一步</el-button>
            <span @click="pre('first')">上一步</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="third">
        <div class="second">
          <p>您的验证已经成功通过，请立即修改您的绑定手机</p>
          <div class="phone">
            <div class="flexrow" style="align-items: center;">
              <label>新手机号</label>
              <el-input v-model="phone.newPhone" placeholder="请输入新手机号码"></el-input>
            </div>
            <p v-if="isError.newPhone" class="p fontsize12" style="color:red;">手机格式有误</p>
          </div>
          <div class="phone">
            <div>
              <div class="flexrow" style="align-items: center;">
                <label>短信动态码</label>
              <el-input v-model="phone.code" placeholder="短信动态码"></el-input>
              </div>
              <div style="text-align: right;margin-top:20px">
                <el-button :disabled='getcode' @click='getCode'>获取手机验证码</el-button>
                <p v-if="getcode" class="fontsize12 send">{{second}}s后可以重新发送</p>
              </div>
            </div>
            <p v-if="isError.code" class="p fontsize12" style="color:red;">短信动态码错误</p>
          </div>
          <div class="btn">
            <el-button type="success" @click="nextForth('forth')">下一步</el-button>
            <span @click="pre('second')">上一步</span>
          </div>
        </div>
      </el-tab-pane>
      <el-tab-pane name="forth">
        <h1 class="h1">恭喜完成修改</h1>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { checkPhone, get, post } from "@/util";
import { mapMutations } from "vuex";

export default {
  props: {
    dialogVisiblePhone: {
      type: Boolean
    }
  },
  data() {
    return {
      second: 60,
      getcode: false,
      active: 0,
      activeName: "first",
      phone: {
        oldPhone: "13427491053",
        newPhone: "17607591628",
        code: "082324",
        oldPassword: ""
      },
      isError: {
        oldPhone: false,
        newPhone: false,
        code: false
      }
    };
  },

  mounted() {
    this.timer = null;
  },

  methods: {
    next(str) {
      this.active++;
      this.activeName = str;
    },
    async nextThird(str) {
      this.isError.oldPhone = false;
      if (!checkPhone(this.phone.oldPhone)) {
        this.isError.oldPhone = true;
        return;
      }
      try {
        let formData = new FormData();
        formData.append("mobile", this.phone.oldPhone);
        formData.append("password", this.phone.oldPassword);
        const result = await post("/tjsanshao/user/verifyMobile", formData);
        if (result.status == "success") {
          this.active++;
          this.activeName = str;
        } else {
          this.$message.error("验证失败");
        }
      } catch (error) {
        this.$message.error("网络错误");
      }
    },
    async nextForth(str) {
      this.isError.newPhone = false;
      this.isError.code = false;
      if (!checkPhone(this.phone.newPhone)) {
        this.isError.newPhone = true;
        return;
      }
      if (!this.phone.code) {
        this.isError.code = true;
        return;
      }
      try {
        const result = await get("/tjsanshao/user/mobile", {
          mobile: this.phone.newPhone,
          code: this.phone.code
        });
        if (result.status == "success") {
          this.setUser(result.user);
          this.active = this.active + 1;
          this.activeName = str;
        }else{
          this.$message.error('解绑失败')
        }
      } catch (error) {
        this.$message.error('网络错误')
      }
    },
    pre(str) {
      this.active--;
      this.activeName = str;
      this.isError.oldPhone = false;
      this.isError.newPhone = false;
      this.isError.code = false;
    },
    async getCode() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.getcode = true;
      this.timer = setInterval(() => {
        this.second--;
        if (this.second == 0) {
          clearInterval(this.timer);
          this.getcode = false;
          this.second = 60;
        }
      }, 1000);
      try {
        const result = await get("/tjsanshao/user/sendMsgCode", {
          mobileNumber: this.phone.newPhone
        });
        if(result.status == 'success'){
          this.$message.success('发送成功')
        }else{
          this.$message.error('发送失败')
        }
      } catch (error) {
        this.$message.error('网络错误')
      }
    }
  },
  watch: {
    dialogVisiblePhone(newVal) {
      if (!newVal) {
        this.activeName = "first";
      }
    }
  },
  computed: {
    ...mapMutations(["setUser"])
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>


<style lang="less" scoped>
.first {
  border: 1px solid #cccccc;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px;
  i {
    font-size: 30px;
  }
  > div {
    margin: 0px 90px 0 40px;
    p:nth-child(1) {
      font-weight: bold;
    }
    p:nth-child(2) {
      color: #ccc;
      font-size: 12px;
    }
  }
}

.second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #cccccc;
  padding: 50px;
  p {
    &:nth-child(1) {
      font-size: 18px;
      color: #333;
    }
    &:nth-child(2) {
      font-size: 12px;
      color: #999;
      margin-top: 10px;
    }
  }
  .btn {
    margin-top: 20px;
    span {
      color: #2bb8aa;
      margin-left: 10px;
      cursor: pointer;
    }
  }
}

.phone {
  margin-top: 20px;
  align-items: center;
  label {
    width: 100px;
    color: #333;
    font-size: 14px;
  }
}

.h1 {
  text-align: center;
  padding: 50px;
}
</style>


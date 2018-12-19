<template>

  <div class='input'>
    <div><h2>Welcome~</h2></div>
    <div>
      <el-input v-model="form.phone" placeholder="请输入手机号码"/>
      <p v-if="isError.phone" class="p fontsize12">手机号码格式有误</p>
    </div>
    <div>
      <el-input type="password" v-model="form.password" placeholder="请输入密码"/>
    </div>
    <div>
      <div class="flexrow">
        <el-input v-model="form.code" placeholder="请输入验证码"/>
        <el-button :disabled='getcode' @click="getCode">获取验证码</el-button>
      </div>
      <p v-if="getcode" class="fontsize12 send">{{second}}s后可以重新发送</p>
      <p v-if="isError.code" class="p fontsize12">验证码错误</p>
    </div>
    <div>
      <el-button @click='register' type="primary" style='width:100%;' :disabled='disabled'>{{title}}</el-button>
    </div>
    <div style="text-align:right;">
      <router-link class="my-regist fontsize14" :to='{name:"login"}'>登陆</router-link>
      <span class="fontsize14 my-regist" @click="goBack">返回</span>
      <span @click="goToHome" class="my-regist fontsize14">游客</span>
    </div>
  </div>
</template>

<script>
import { checkPhone, get ,post} from "@/util";
import {mapMutations} from 'vuex'
// 注册表单
export default {
  data() {
    return {
      second: 60,
      getcode: false,
      disabled: false,
      title:'注册',
      form: {
        phone: "",
        password: "",
        code: ""
      },
      isError: {
        phone: false,
        code: false
      }
    };
  },
  mounted() {
    this.timer = null;
  },
  methods: {
    ...mapMutations(['setUserInfo']),
    goBack() {
      this.$router.back();
    },
    async getCode() {
      if (this.timer) {
        clearInterval(this.timer);
      }
      this.isError.phone = false;
      this.isError.code = false;
      if (!checkPhone(this.form.phone)) {
        this.isError.phone = true;
        return;
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
        const res = await get("/tjsanshao/user/sendMsgCode", {
          mobileNumber: this.form.phone
        });
        if (res.status == "success") {
          this.$message.success("发送成功");
        } else {
          this.$message.error("发送失败");
        }
      } catch (e) {
        this.$message.error("网络错误");
      }
    },
    async register() {
      if (!checkPhone(this.form.phone)) {
        this.$message.error("请检查手机号码是否正确");
        return;
      }
      if (!this.form.code) {
        this.$message.error("请填写手机验证码");
        return;
      }
      try {
        this.disabled = true
        let formData = new FormData()
        formData.append('username',this.form.phone)
        formData.append('password',this.form.password)
        formData.append('code',this.form.code)
        formData.append('mobile',this.form.phone)
        this.title = '注册中...'
        const res = await post("/tjsanshao/user/register", formData);
        if(res.status == 'success'){
          this.setUserInfo(res)
          this.$router.push({ name: "homeContent" });
        }else{
          this.$message.error('注册失败')
        }
      } catch (e) {
        this.$message.error("网络错误");
      }finally{
        this.title = '注册'
        this.disabled = false
      }
    },
    goToHome() {
      this.$router.push({ name: "homeContent" });
    }
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
};
</script>


<style lang="less" scoped>
.input {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  height: 100%;
  width: 50%;
  .my-regist {
    line-height: 20px;
    text-align: right;
    color: blue;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
  }
}

.input > div {
  padding: 10px 50px;
  width: 80%;
  text-align: center;
}

.input > div > h2 {
  color: #409eff;
}

.send {
  margin-top: 5px;
  text-align: left;
}
</style>

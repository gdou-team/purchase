<template>
    <div class="settlesIn">
      <ShopHeader title="商家入驻" />
        <div class="my-center" style="width:70%;">
            <el-steps :active="active" simple style="height:60px">
            <el-step title="注册账户" icon="el-icon-edit"></el-step>
            <el-step title="店铺信息" icon="el-icon-upload"></el-step>
            <el-step title="身份认证" icon="el-icon-picture"></el-step>
            </el-steps>
        </div>
        <div v-if="active==1" class="my-center item" style="width:360px;">
            <div>
                <el-input v-model="registerMessage.phone" placeholder="手机号码" />
                <p v-if="registerError.phone" class="p" style="font-size:12px;">手机格式不正确</p>
            </div>
            <div>
                <el-input v-model="registerMessage.password" placeholder="密码" />
                <p v-if="registerError.password" class="p" style="font-size:12px;">密码不能为空</p>
            </div>
            <div class="flexrow">
                <el-input placeholder="手机验证码" v-model="registerMessage.code"/>
                <el-button :disabled="getcode" @click="getCode">获取验证码</el-button>
            </div>
            <p v-if="registerError.code" class="p" style="font-size:12px;">注册码不能为空</p>
            <p v-if="getcode" style="font-size:12px;margin-top:5px;">{{second}}s后可以重新发送</p>
            <div>
                <el-button
                 @click="register" 
                 type="primary" 
                 style="width:100%"
                 :disabled="!registerMessage.phone || !registerMessage.password || !registerMessage.code"
                 >
                 注册
                 </el-button>
            </div>
        </div>
        <div v-if="active==2" class="my-center item" style="width:360px;">
            <div>
                <span class="star">*</span>
                <el-input v-model="shopMessage.name" placeholder="店铺名称" />
            </div>
            <div>
              <span class="star">*</span>
                <el-input v-model="shopMessage.location" placeholder="店铺位置" />
            </div>
            <div>
              <span class="star">*</span>
                <el-input v-model="shopMessage.desc" placeholder="店铺描述" />
            </div>
            <div class="fontsize12"><span style="color:red;">*</span>是必填信息</div>
            <div>
                <el-button 
                :disabled="!shopMessage.name || !shopMessage.location || !shopMessage.desc" 
                @click="submit" 
                type="primary" 
                style="width:100%">提交</el-button>
                <p class="back" @click="back">返回</p>
            </div>
        </div>
        <div v-if="active==3" class="my-center item" style="width:360px;">
            <div>
              <span class="star">*</span>
              <el-input v-model="userInfo.name" placeholder="姓名" />
            </div>
            <div>
              <span class="star">*</span>
              <el-input placeholder="身份证" v-model="userInfo.num" />
              <p v-if="userInfoError.num" class="p" style="font-size:12px;">身份证格式不正确</p>
            </div>
            <div class="fontsize12"><span style="color:red;">*</span>是必填信息</div>
            <div>
                <el-button 
                :disabled="!userInfo.name || !userInfo.num"
                @click="authentication" 
                type="primary" 
                style="width:100%">认证</el-button>
                <p class="back" @click="back">返回</p>
            </div>
        </div>
        <ShopFooter/>
    </div>
</template>

<script>
import { checkPhone } from "@/util";
export default {
  data() {
    return {
      active: 1,
      registerMessage: {
        phone: 13427491053,
        password: null,
        code: null
      },
      shopMessage: {
        name: null,
        location: null,
        desc: null
      },
      userInfo: {
        name: null,
        num: null
      },
      registerError: {
        phone: false,
        password: false,
        code: false
      },
      userInfoError: {
        name: false,
        num: false
      },
      getcode: false,
      second: 60
    };
  },
  mounted() {
    this.timer = null;
  },
  methods: {
    register() {
      this.registerError = {
        phone: false,
        password: false,
        code: false
      };
      if (!checkPhone(this.registerMessage.phone)) {
        this.registerError.phone = true;
        return;
      }
      this.active++;
      if (this.timer) {
        clearInterval(this.timer);
      }
    },
    submit() {
      this.active++;
    },
    authentication() {
      this.userInfoError.num = false;
      let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
      if (reg.test(this.userInfo.num) === false) {
        this.userInfoError.num = true;
        return;
      }
    },
    back() {
      this.active--;
    },
    getCode() {
      this.registerError = {
        phone: false,
        password: false,
        code: false
      };
      if (this.timer) {
        clearInterval(this.timer);
      }
      if (!checkPhone(this.registerMessage.phone)) {
        this.registerError.phone = true;
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
.settlesIn{
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.item {
  margin-top: 10px;
  > div {
    margin-top: 10px;
    position: relative;
    .star {
      position: absolute;
      left: -20px;
      top: 50%;
      transform: translateY(-50%);
      color: red;
      font-size: 16px;
    }
  }
}
.back {
  text-align: right;
  margin-top: 10px;
  color: #409eff;
  cursor: pointer;
}
</style>


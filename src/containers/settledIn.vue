<template>
    <div>
        <div class="my-center" style="width:70%;">
            <el-steps :active="active" simple style="height:60px">
            <el-step title="注册账户" icon="el-icon-edit"></el-step>
            <el-step title="店铺信息" icon="el-icon-upload"></el-step>
            <el-step title="身份认证" icon="el-icon-picture"></el-step>
            </el-steps>
        </div>
        <div v-if="active==1" class="my-center item" style="width:360px;">
            <div><el-input placeholder="手机号码" /></div>
            <div><el-input placeholder="密码" /></div>
            <div class="flexrow">
                <el-input placeholder="手机验证码"/>
                <el-button>获取验证码</el-button>
            </div>
            <div>
                <el-button @click="register" type="primary" style="width:100%">注册</el-button>
            </div>
        </div>
        <div v-if="active==2" class="my-center item" style="width:360px;">
            <div><el-input placeholder="店铺名称" /></div>
            <div><el-input placeholder="店铺位置" /></div>
            <div>
                <el-button @click="submit" type="primary" style="width:100%">提交</el-button>
            </div>
        </div>
        <div v-if="active==3" class="my-center item" style="width:360px;">
            <div><el-input placeholder="姓名" /></div>
            <div><el-input placeholder="身份证" /></div>
            <div>
                <el-button @click="submit" type="primary" style="width:100%">提交</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1
    };
  },
  methods:{
      register(){
          this.active++
      },
      submit(){
          this.active++
      }
  }
};
</script>


<style lang="less" scoped>
.item {
  margin-top: 10px;
  > div {
    margin-top: 10px;
  }
}
</style>


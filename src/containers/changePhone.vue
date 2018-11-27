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
                <p>通过手机号</p>
                <p>自需填写绑定手机号</p>
            </div>
             <el-button type="success" @click="next('second')">去修改</el-button>
        </div>
    </el-tab-pane>
    <el-tab-pane name="second">
        <div class="second">
            <p>请填写您曾使用过的相关信息</p>
            <p>我们将依据此信息核对您的身份</p>
            <div class="phone flexrow">
                <label>手机号</label>
                <el-input placeholder="请输入手机号码"></el-input>
            </div>
            <div class="btn">
                <el-button type="success" @click="next('third')">下一步</el-button>
                <span @click="pre('first')">上一步</span>
            </div>
        </div>
    </el-tab-pane>
    <el-tab-pane name="third">
        <div class="second">
            <p>您的验证已经成功通过，请立即修改您的绑定手机</p>
            <div class="phone flexrow">
                <label>新手机号</label>
                <el-input placeholder="请输入新手机号码"></el-input>
            </div>
            <div class="phone flexrow">
                <label>短信动态码</label>
                <el-input placeholder="短信动态码"></el-input>
            </div>
            <div class="btn">
                <el-button type="success" @click="next('forth',2)">下一步</el-button>
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
export default {
  data() {
    return {
      active: 0,
      activeName: "first"
    };
  },

  methods: {
    next(str,num=1) {
      this.active=this.active+num;
      this.activeName = str;
    },
    pre(str){
        this.active--;
      this.activeName = str;
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
  .btn{
      margin-top: 20px;
      span{
              color: #2bb8aa;
              margin-left: 10px;
              cursor: pointer;
      }
  }
}
.phone{
      margin-top: 20px;
      align-items: center;
      label{
          width: 100px;
              color: #333;
              font-size: 14px;
      }
  }
  .h1{
      text-align: center;
      padding: 50px;
  }
</style>


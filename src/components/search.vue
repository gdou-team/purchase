<template>
  <div class="my-search">
    <div class="my-city fontsize14">
      <span class="city">{{location}}</span>
      <span @click="selectCity">切换城市</span>
    </div>
    <div class="demo">
      <div class="my-input flexrowcenter">
        <input type="text" placeholder="请输入关键字">
        <span @click="handelClick">搜索</span>
      </div>
      <ul class="my-list flexrow fontsize12">
        <li @click='goTo("水上乐园")'>水乐园</li>
        <li @click='goTo("自助餐")'>自助餐</li>
        <li @click='goTo("美食")'>美食</li>
      </ul>
    </div>
    <div class="my-bg"></div>
  </div>
</template>

<script>
  import {mapGetters} from "vuex";
  // 搜索
  export default {
    data() {
      return {
        isShow: false
      };
    },
    computed: {
      ...mapGetters(["location"])
    },
    methods: {
      selectCity() {
        if (this.isShow == false) {
          this.$emit("selectCity", false);
          this.isShow = true;
          return;
        } else {
          this.$emit("selectCity", true);
          this.isShow = false;
        }
      },
      handelClick() {
        this.$emit("search");
      },
      goTo(keyWord) {
        this.$emit('goTo', {
          name: 'goodList',
          keyWord
        });
      }
    }
  };
</script>


<style lang="less" scoped>
  .my-search {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0;
  }

  .my-city {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .city {
      font-weight: bold;
      padding-right: 10px;
    }
    span:nth-child(2) {
      cursor: pointer;
    }
  }

  .demo {
    width: 50%;
  }

  .my-input {
    input:nth-child(1) {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      -webkit-user-select: none;
      -moz-user-focus: none;
      -moz-user-select: none;
      -webkit-appearance: none;
      outline: none;
      border: 2px solid #ff971b;
      width: 80%;
      height: 28px;
      padding: 5px 10px 5px 20px;
    }
    span {
      width: 99px;
      height: 42px;
      background-color: #ff971b;
      line-height: 42px;
      text-align: center;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
    }
  }

  .my-list {
    position: absolute;
    bottom: -30px;
    left: 0;
    li {
      padding: 5px 10px 5px 0;
      cursor: pointer;
    }
  }

  .my-bg {
    background: url("../assets/commitment.png") no-repeat center center;
    width: 187px;
    height: 45px;
  }

  .demo {
    position: relative;
  }
</style>

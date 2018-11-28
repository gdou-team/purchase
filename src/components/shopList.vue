<template>
  <div class="my-shop-list">
    <ul>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem 
          title="美食"
          @goTo='goTo'
          :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']"/>
          <el-button class="my-btn" slot="reference">美食</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem 
          @goTo='goTo'
          title="酒店" 
          :list="['经济型','舒适/三星','高档/四星','豪华/五星']"/>
          <el-button class="my-btn" slot="reference">酒店</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem 
          @goTo='goTo'
          title="休闲娱乐"
          :list="['足疗按摩','洗浴/汗蒸','酒吧','密室逃脱','轰趴馆','茶馆','私人影院','DIY','手工坊','采摘/农家乐','网吧','网咖游乐','游艺VR','桌面游戏','真人CS','棋牌室','其他玩乐']"/>
          <el-button class="my-btn" slot="reference">休闲娱乐</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="生活服务"
          :list="['衣物/皮具','洗护','家政搬家','运输','送水','充值缴费','服饰/鞋包','养护','开锁','换锁','居家维修','管道疏通','家电维修清洗','电脑维修','手机维修','证件照/肖像','摄影照片','冲印/图文','文印商务','服务/法律','服务','文化','传媒机构成','人用品/情趣用品']"/>
          <el-button class="my-btn" slot="reference">生活服务</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="电影 / 在线选座"
          :list="['无敌破坏王2：大闹互联网','无名之辈','毒液：致命守护者','憨豆特工3','神奇动物：格林德沃之罪','中国蓝盔','亡命救赎','克隆人','摘金奇缘','名侦探柯南：零的执行人']"/>
          <el-button class="my-btn" slot="reference">电影 / 在线选座</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="机票 / 火车票"
          :list="['国内机票','国际/港澳台机票','火车票']"/>
          <el-button class="my-btn" slot="reference">机票 / 火车票</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="亲子 / 儿童乐园 / 幼教"
          :list="['婴儿游泳','早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育','儿童摄影','孕妇写真']"/>
          <el-button class="my-btn" slot="reference">亲子 / 儿童乐园 / 幼教</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="丽人 / 美发 / 医学美容"
          :list="['美发','美甲','美睫','美容','美体','医学美容','瑜伽','舞蹈','瘦身纤体','韩式定妆','祛痘','纹身','化妆品']"/>
          <el-button class="my-btn" slot="reference">丽人 / 美发 / 医学美容</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="结婚 / 婚纱摄影 / 婚宴"
          :list="['婚纱','摄影旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制','婚戒','首饰','婚车','租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼','小礼品','更多婚礼服务',]"/>
          <el-button class="my-btn" slot="reference">结婚 / 婚纱摄影 / 婚宴</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem
          @goTo='goTo'
          title="教育培训"
          :list="['英语','日语','韩语','法语','德语','汉语','俄语','西班牙语','其他外语']"/>
          <el-button class="my-btn" slot="reference">教育培训</el-button>
        </el-popover>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods:{
    goTo(obj){
      this.$emit('goTo',obj)
    }
  }
}
</script>


<style lang="less" scoped>
  .my-shop-list {
    border: 2px solid #ff7e00;
    border-top: none;
    width: 200px;
    background-color: white;
    .my-btn {
      border: none;
      width: 100%;
      line-height: 49px;
      font-weight: bold;
      font-size: 14px;
      padding: 0;
      margin: 0;
      display: block;
      &:hover {
        background-color: #eee;
        color: black;
      }
    }
    ul {
      li {
        text-align: center;
        cursor: pointer;
        font-weight: bold;
        font-size: 14px;
        > span {
          display: block;
          width: 100%;
          height: 100%;
        }
      }
      li + li {
        border-top: 1px solid #e5e5e5;
      }
    }
  }
</style>

<template>
  <div class="my-shop-list">
    <ul>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="美食" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">美食</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="电影 | 在线选座" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">电影 | 在线选座</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="门票" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">门票</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="团购" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">团购</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="DIY" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">DIY</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="休闲娱乐" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">休闲娱乐</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="生活服务" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">生活服务</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="教育培训" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">教育培训</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="服装" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">服装</el-button>
        </el-popover>
      </li>
      <li>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <ListItem title="教育培训" :list="['代金券','甜点','饮品','火锅','小吃','快餐','日韩料理','西餐','聚餐','烧烤','宴请','烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤','酒吧']" />
          <el-button class="my-btn" slot="reference">教育培训</el-button>
        </el-popover>
      </li>
    </ul>
  </div>
</template>

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

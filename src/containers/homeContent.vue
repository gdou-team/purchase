<template>
    <div>
        <div class="flexrow home-content-top">
        <div style="width:200px;">
            <ShopList />
        </div>
        <div class="item">
            <Item title='热门团购' :itemList='["电影","自助餐","门票","旅游"]' />
            <Item title='全部区域' :itemList='["越秀","番禺","天河","荔湾","花都","黄埔"]' />
            <Item title='热门商圈' :itemList='["大学城","环市东路路线","赤岗","芳村","中华广场"]' />
            <div class="food">
            <p>美食</p>
            <div class="good-food">
            <biggoods />
            <biggoods />
            </div>
            </div>
        </div>
        <div class="right" style="width:200px;background-color:white;">
            <div class="smallgoods">
                <smallgoods />
            </div>
            <div>
                <smallgoods />
            </div>
        </div>
    </div>
    <div class="home-content-hot">
        <div class="flexrow title">
            <span>今日新单</span>
            <span>一周热卖</span>
        </div>
        <div class="flexrow food">
            <smallgoods />
            <smallgoods />
            <smallgoods />
            <smallgoods />
            <smallgoods />
        </div>
    </div>
    </div>
</template>


<style lang="less" scoped>
.item {
  flex: 1;
  margin: 0 20px;
  border: 1px solid #cccccc;
  padding: 0 20px 20px;
  background-color: white;
}

.home-content-top {
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: auto;
    padding: 0 10px;
  }
}
.food {
  p {
    font-size: 15px;
    padding: 10px 20px 10px 0px;
    font-weight: bold;
  }
  .good-food {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
}

.home-content-hot{
    margin-top: 10px;
    padding: 20px;
    background-color: white;
    border: 1px solid #cccccc;
    .title{
        margin-bottom: 10px;
        span{
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 14px;
        }
        span:nth-child(1){
            background-color: #FF7E00;
            color: white;
            font-weight: bold;
            margin-right: 30px;
        }
    }
    .food{
        justify-content: space-between;
    }
}
</style>

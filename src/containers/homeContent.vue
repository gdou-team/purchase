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
    <div class="home-content-hot my-ref" ref="hot" data-title='hot'>
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
    <div class="shop-item my-ref" ref='food' data-title='food'>
        <shopContent title="美食"/>
    </div>
    <div class="shop-item my-ref" ref='entertainment' data-title='entertainment'>
        <shopContent title="休闲娱乐"/>
    </div>
    <div class="shop-item my-ref" ref='movie' data-title='movie'>
        <shopContent title="电影"/>
    </div>
    <div class="shop-item my-ref" ref='hotel'  data-title='hotel'>
        <shopContent title="酒店"/>
    </div>
    <div class="shop-item my-ref" ref='tourism' data-title='tourism'>
        <shopContent title="旅游"/>
    </div>
    <transition name="router" mode="out-in">
    <div class="navigation-elevator" v-if="isShowNav">
        <NavigationElevator :title='title' @nav='goToNav' />
    </div>
    </transition>
    </div>
</template>

<script>
export default {
  data() {
    return {
      offsetTop: 0,
      title:'hot',
      isShowNav:false
    };
  },
  mounted() {
    const hot = this.$refs.hot;
    this.timer = null;
    const myRef = document.getElementsByClassName('my-ref')
    window.addEventListener("scroll", e => {
      if (!hot) {
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
          for(let j =0;j<myRef.length;j++){
              let domTop = myRef[j].getBoundingClientRect().top
              let domHeight = myRef[j].getBoundingClientRect().height
              if(domTop <= 60 && (myRef[j].offsetTop + domHeight-60) > this.scroll().top){
                  let title = myRef[j].dataset.title
                  this.title = title
              }
          }
          if(hot.getBoundingClientRect().top < 60){
              this.isShowNav=true
          }else{
              this.isShowNav=false
          }
        this.offsetTop = parseInt(hot.getBoundingClientRect().top);
      }, 500);
    });
  },
  methods: {
    goToNav(ref) {
      const dom = this.$refs[ref];
      const top = dom.getBoundingClientRect().top + this.scroll().top;
      window.scrollTo(0, top);
    },
    scroll() {
      if (window.pageXOffset != null) {
        //最新的浏览器
        return {
          left: window.pageXOffset,
          top: window.pageYOffset
        };
      } else if (document.compatMode == "CSS1Compat") {
        //有文档声明的
        return {
          left: document.documentElement.scrollLeft,
          top: document.documentElement.scrollTop
        };
      }
      return {
        //没有文档声明的
        left: document.body.scrollLeft,
        top: document.body.scrollTop
      };
    }
  },
  beforeDestroy(){
      if(this.timer){
          clearTimeout(this.timer)
      }
  }
};
</script>



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

.home-content-hot {
  margin-top: 20px;
  padding: 20px;
  background-color: white;
  border: 1px solid #cccccc;
  .title {
    margin-bottom: 10px;
    span {
      padding: 5px 10px;
      border-radius: 4px;
      font-size: 14px;
    }
    span:nth-child(1) {
      background-color: #ff7e00;
      color: white;
      font-weight: bold;
      margin-right: 30px;
    }
  }
  .food {
    justify-content: space-between;
  }
}

.shop-item {
  margin-top: 20px;
}

.navigation-elevator {
  position: fixed;
  right: 5px;
  bottom: 50%;
}
</style>

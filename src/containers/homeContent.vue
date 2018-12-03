<template>
  <div>
    <div class="flexrow home-content-top">
      <div style="width:200px;">
        <ShopList @goTo='goTo'/>
      </div>
      <div class="item">
        <Item @goTo='goTo' title='热门团购' :itemList='["电影","自助餐","门票","旅游"]'/>
        <Item @goTo='goTo' title='全部区域' :itemList='["越秀","番禺","天河","荔湾","花都","黄埔"]'/>
        <Item @goTo='goTo' title='热门商圈' :itemList='["大学城","环市东路路线","赤岗","芳村","中华广场"]'/>
        <div class="food">
          <p>美食</p>
          <div
            @mouseenter='mouseenter'
            @mouseleave='mouseleave'
            @transitionend='transitionend'
            class="slider-container clearfix"
            ref="slider">
            <div class="good-food">
              <div>
                <biggoods @biggoods='goToDetail(1)'/>
              </div>
              <div>
                <biggoods @biggoods='goToDetail(2)'/>
              </div>
            </div>
            <div class="good-food">
              <div>
                <biggoods @biggoods='goToDetail(3)'/>
              </div>
              <div>
                <biggoods @biggoods='goToDetail(4)'/>
              </div>
            </div>
            <div class="good-food">
              <div>
                <biggoods @biggoods='goToDetail(5)'/>
              </div>
              <div>
                <biggoods @biggoods='goToDetail(6)'/>
              </div>
            </div>
            <div class="good-food">
              <div>
                <biggoods @biggoods='goToDetail(7)'/>
              </div>
              <div>
                <biggoods @biggoods='goToDetail(8)'/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="right" style="width:200px;background-color:white;">
        <div class="smallgoods">
          <smallgoods @smallGoods='goToDetail(13)'/>
        </div>
        <div>
          <smallgoods @smallGoods='goToDetail(13)'/>
        </div>
      </div>
    </div>
    <div class="home-content-hot my-ref" ref="hot" data-title='hot'>
      <div class="flexrow title">
        <span>今日新单</span>
        <span>一周热卖</span>
      </div>
      <div class="flexrow food">
        <smallgoods @smallGoods='goToDetail(9)'/>
        <smallgoods @smallGoods='goToDetail(10)'/>
        <smallgoods @smallGoods='goToDetail(11)'/>
        <smallgoods @smallGoods='goToDetail(12)'/>
        <smallgoods @smallGoods='goToDetail(13)'/>
      </div>
    </div>
    <div class="shop-item my-ref" ref='food' data-title='food'>
      <shopContent @goToDetail='goToDetail' title="美食"/>
    </div>
    <div class="shop-item my-ref" ref='entertainment' data-title='entertainment'>
      <shopContent @goToDetail='goToDetail' title="休闲娱乐"/>
    </div>
    <div class="shop-item my-ref" ref='movie' data-title='movie'>
      <shopContent @goToDetail='goToDetail' title="电影"/>
    </div>
    <div class="shop-item my-ref" ref='hotel' data-title='hotel'>
      <shopContent @goToDetail='goToDetail' title="酒店"/>
    </div>
    <div class="shop-item my-ref" ref='tourism' data-title='tourism'>
      <shopContent @goToDetail='goToDetail' title="旅游"/>
    </div>
    <transition name="router" mode="out-in">
      <div class="navigation-elevator" v-if="isShowNav">
        <NavigationElevator :title='title' @nav='goToNav'/>
      </div>
    </transition>
  </div>
</template>

<script>
import { get } from "@/util";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "hot",
      isShowNav: false,
      num: 0,
      sliderNum: 0,
      loadingHotFood:true
    };
  },
  created() {
    // this.getHotGoods();
    // this.getNewGoods();
  },
  mounted() {
    this.hot = this.$refs.hot;
    this.slider = this.$refs.slider;
    this.timer = null;
    this.navTimer = null;
    this.sliderTimer = null;
    this.leader = 0;
    this.myRef = document.getElementsByClassName("my-ref");
    window.addEventListener("scroll", this.addEvent);
    this.initSlider();
  },
  methods: {
    goTo(obj) {
      this.$router.push({
        name: obj.name,
        query: {
          keyWord: obj.keyWord
        }
      });
    },
    goToNav(ref) {
      const dom = this.$refs[ref];
      const top = dom.getBoundingClientRect().top + this.scroll().top;
      // window.scrollTo(0, top);
      clearInterval(this.navTimer);
      let leader = this.leader;
      let target = top;
      this.navTimer = setInterval(() => {
        leader = leader + (target - leader) / 10;
        if (Math.round(leader) == target) {
          leader = target;
          clearInterval(this.navTimer);
        }
        this.leader = leader;
        window.scrollTo(0, leader);
      }, 10);
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
    },
    addEvent() {
      if (!this.hot) {
        return;
      }
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        this.leader = this.scroll().top;
        for (let j = 0; j < this.myRef.length; j++) {
          let domTop = this.myRef[j].getBoundingClientRect().top;
          let domHeight = this.myRef[j].getBoundingClientRect().height;
          if (
            domTop <= 100 &&
            this.myRef[j].offsetTop + domHeight - 100 > this.scroll().top
          ) {
            let title = this.myRef[j].dataset.title;
            this.title = title;
          }
        }
        if (this.hot.getBoundingClientRect().top < 60) {
          this.isShowNav = true;
        } else {
          this.isShowNav = false;
        }
      }, 100);
    },
    goToDetail(id) {
      this.$router.push({
        name: "goodDetail",
        params: {
          id
        }
      });
    },
    transitionend() {
      if (!this.slider) {
        return;
      }
      if (this.sliderNum >= 3) {
        this.sliderNum = 0;
        this.slider.style.transition = "transform 0s";
        this.slider.style.transform = `translateX(0)`;
      }
    },
    Interval() {
      if (!this.slider) {
        return;
      }
      this.sliderNum++;
      this.slider.style.transition = "transform 2s";
      this.slider.style.transform = `translateX(${this.sliderNum * -25}%)`;
    },
    initSlider() {
      this.sliderTimer = setInterval(this.Interval, 3000);
    },
    mouseenter() {
      if (this.sliderTimer) {
        clearInterval(this.sliderTimer);
      }
    },
    mouseleave() {
      this.sliderTimer = setInterval(this.Interval, 3000);
    },
    async getHotGoods() {
      try {
        const res = await get("/xiaojian/hotGoods", {
          city: this.location
        });
        console.log(res);
      } catch (e) {}
    },
    async getNewGoods() {
      try {
        const res = await get("/xiaojian/newGoods", {
          city: this.location
        });
        console.log(res);
      } catch (e) {}
    }
  },
  computed: {
    ...mapGetters(["location"])
  },
  beforeDestroy() {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    if (this.navTimer) {
      clearInterval(this.navTimer);
    }
    if (this.sliderTimer) {
      clearInterval(this.sliderTimer);
    }
    if (this.hot) {
      this.hot = null;
    }
    if (this.slider) {
      this.slider = null;
    }
    window.removeEventListener("scroll", this.addEvent, false);
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
  width: auto;
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
  flex-wrap: wrap;
  overflow: hidden;
  width: 100%;
  p {
    font-size: 15px;
    padding: 10px 20px 10px 0px;
    font-weight: bold;
  }
  .good-food {
    float: left;
    width: 25%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;
    > div {
      width: 47%;
    }
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

.slider-container {
  width: 400%;
  transition: transform 2s;
}
</style>

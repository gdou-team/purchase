<template>
    <div class="map">
      <div id="map" ref="map"></div>
    <div class="input">
        <el-input
  placeholder="请输入地名"
  v-model="searchKey"
  @change="search"
  clearable>
</el-input>
<el-button style="margin-left:10px;" type="primary" plain @click="search">搜索</el-button>
<el-button type="primary" plain @click="reset">重置</el-button>
      </div>
    </div>
</template>

<script>
import { mapGetters,mapMutations } from "vuex";
export default {
  data(){
    return {
      searchKey:''
    }
  },
  props:{
    shopLocation:{
      type:String,
      default:null
    }
  },
  mounted() {
    this.initMap();
  },
  computed: {
    ...mapGetters(["location"])
  },
  methods: {
    ...mapMutations(['setLocation']),
    search(){
      this.map.centerAndZoom(this.searchKey, 15);
    },
    reset(){
      this.map.centerAndZoom(this.location, 15);
      this.searchKey =''
    },
    initMap() {
      let location = this.shopLocation || this.location
      // 百度地图API功能
      this.map = new BMap.Map(this.$refs.map); // 创建Map实例
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      this.map.centerAndZoom(location, 15);
      this.map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
      this.map.enableScrollWheelZoom(true);
      this.map.addEventListener("click", (e)=>{
        var geoc = new BMap.Geocoder();
        var pt = e.point;
        // 获取地理位置
        geoc.getLocation(pt, (rs)=>{
          if(rs.surroundingPois[0].address){
            this.setLocation(rs.surroundingPois[0].address)
            this.map.centerAndZoom(rs.surroundingPois[0].address, 15);
          }
        });
      });
    }
  },
  beforeDestroy(){
    if(this.map){
      this.map=null;
    }
  }
};
</script>

<style lang="less" scoped>
#map {
  height: 600px;
  margin-top: 10px;
}
.map{
  position: relative;
  .input{
    position: absolute;
    top: 10px;
    left: 10px;
    display: flex;
    flex-direction: row;
  }
}
</style>



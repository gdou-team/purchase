<template>
    <div id="map" ref="map"></div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  mounted() {
    this.initMap();
  },
  computed:{
      ...mapGetters(['location'])
  },
  methods: {
    initMap() {
      // 百度地图API功能
      var map = new BMap.Map(this.$refs.map); // 创建Map实例
      // map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
      map.centerAndZoom(this.location, 15);
      map.addControl(
        new BMap.MapTypeControl({
          mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
        })
      );
    //   map.setCurrentCity("湛江市");
      map.enableScrollWheelZoom(true);
      var geoc = new BMap.Geocoder();
      map.addEventListener("click", function(e) {
        var pt = e.point;
        geoc.getLocation(pt, function(rs) {
          var addComp = rs.addressComponents;
          const str = `${addComp.province}${addComp.city}${addComp.district}${
            addComp.street
          }${addComp.streetNumber}`;
        //   console.log(str);
          map.centerAndZoom(str, 15);
        });
      });
    }
  }
};
</script>

<style lang="less" scoped>
#map {
  height: 600px;
  margin-top: 10px;
}
</style>



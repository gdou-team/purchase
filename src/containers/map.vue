<template>
    <div id="map" ref="map"></div>
</template>

<script>
export default {
    mounted(){
	// 百度地图API功能
	var map = new BMap.Map(this.$refs.map);    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 11);  // 初始化地图,设置中心点坐标和地图级别
    map.addControl(new BMap.MapTypeControl({
        mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]
    }))
    map.setCurrentCity("北京");
    map.enableScrollWheelZoom(true);
    }
}
</script>

<style lang="less" scoped>
#map{
    height: 600px;
    margin-top: 10px;
}
</style>



<template>
  <div id="app">
    <transition name="router" mode="out-in">
    <keep-alive>
    <router-view/>
    </keep-alive>
    </transition>
  </div>
</template>

<script>
import {mapMutations} from 'vuex'
export default {
  name: 'App',
  methods:{
    ...mapMutations(['setLocation']),
    getLocation() {
      var myCity = new BMap.LocalCity();
      myCity.get((result)=>{
        var cityName = result.name;
        console.log("当前定位城市:" + cityName);
        this.setLocation(cityName)
      });
    }
  },
  created() {
    this.getLocation();
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
</style>

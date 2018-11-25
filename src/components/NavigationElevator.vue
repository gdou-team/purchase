<template>
    <div>
        <ul ref="ul" @click.stop.prevent="handlerClick($event)" class="my-list fontsize12">
            <li ref="hot" data-title='hot'>热卖</li>
            <li ref="food" data-title='food'>美食</li>
            <li ref="entertainment" data-title='entertainment'>娱乐</li>
            <li ref="movie" data-title='movie'>电影</li>
            <li ref="hotel" data-title='hotel'>酒店</li>
            <li ref="tourism" data-title='tourism'>旅游</li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "hot"
    }
  },
  methods: {
    handlerClick(e) {
      this.$emit("nav", e.target.dataset.title);
      this.doSomething(e.currentTarget.children, e.target);
    },
    doSomething(children, target) {
      for (let i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "";
        children[i].style.color = "";
      }
      target.style.backgroundColor = "#DA6CB3";
      target.style.color = "white";
    }
  },
  watch: {
    title: {
      immediate: true,
      handler: function(newval) {
        this.$nextTick(()=>{
            this.doSomething(this.$refs.ul.children, this.$refs[newval]);
        })
      }
    }
  }
};
</script>


<style lang="less" scoped>
.my-list {
  background-color: white;
  li {
    width: 51px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    cursor: pointer;
    &:hover {
      background-color: #a566d9;
      color: white;
    }
  }
}
</style>


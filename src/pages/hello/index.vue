<template>
  <div :class="$style.test">
    <scroll class="list-scroll">
      <div>
        <div :class="$style.box1">111</div>
        <div :class="$style.box2">222</div>
        <div :class="$style.box3">333</div>
      </div>
    </scroll>
  </div>
</template>

<script>
import Scroll from "../../components/scroll/scroll.vue";

export default {
  name: "index",
  components: {
    Scroll,
  },
};
</script>


<style lang="scss" module>
.test {
  width: 100%;
  height: 100%;
  background-color: pink;
  .box1 {
    width: 100%;
    height: 1000px;
    background-color: lightyellow;
  }
  .box2 {
    width: 100%;
    height: 1000px;
    background-color: lightblue;
  }
  .box3 {
    width: 100%;
    height: 1000px;
    background-color: lightcoral;
  }
}
</style>

<style lang="scss">
.list-scroll {
  height: 100%;
  overflow: hidden;
  .list-inner {
    padding: 20px 30px;
  }
}
</style>
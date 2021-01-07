
<template>
  <div class="app-container" :class="{ 'app-transition': headerHiden }">
    <HeaderMenu></HeaderMenu>
    <router-view></router-view>
    <BottomView></BottomView>
  </div>
</template>

<script>
import HeaderMenu from "../../components/header-menu/index";
import BottomView from "../../components/bottom-view/index";
export default {
  name: "Layout",
  data() {
    return {
      headerHiden: true,
    };
  },
  components: { HeaderMenu, BottomView },
  // computed: {
  //   headerHiden() {
  //     return this.$store.state.menu.headerHiden;
  //   },
  // },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent, false);
  },
  methods: {
    scrollEvent() {
      // scrollHeight（文档内容实际高度，包括超出视窗的溢出部分）、
      // scrollTop（滚动条滚动距离）、
      // clientHeight（窗口可视范围高度）。
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      // 设备屏幕高度
      const scrollTop = window.pageYOffset; // div 到头部的距离
      const scrollHeight = document.body.scrollHeight; // 滚动条的总高度
      //滚动条到底部的条件
      if (scrollTop > 100) {
        this.headerHiden = false;
      } else {
        this.headerHiden = true;
      }
    },
  },
};
</script>
<style>
.app-container {
  width: 100%;
  height: 100%;
  color: #fff;
  text-align: center;
  position: relative;
}
/* .app-transition .header-menu {
  transition: transform 0.2s ease-in-out;
  transform: translate(0, -100px);
}
.app-container .header-menu { 
  transition: transform 0.2s ease-in-out;
  transform: translate(0, 0);
} */
</style>

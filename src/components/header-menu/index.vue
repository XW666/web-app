<template>
  <div class="header-menu">
    <div
      class="menu-tab"
      :class="{ 'menu-tab-active': headerIndex == index }"
      v-for="(item, index) in bottomItems"
      :key="item.text"
      @click="handleChange(item)"
    >
      <span
        :style="{
          'border-color':
            headerIndex == index ? backgroundColor : 'transparent',
        }"
        >{{ item.text }}</span
      >
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      backgroundColor: "#2E98FF",
      bottomItems: [
        {
          text: "欢迎页",
          index: 0,
          path: "/",
        },
        {
          text: "自主入职",
          index: 1,
          path: "/user",
        },
        {
          text: "企业介绍",
          index: 2,
          path: "/company",
        },
      ],
    };
  },
  computed: {
    headerIndex() {
      return this.$store.state.menu.headerId;
    },
  },
  methods: {
    handleChange(item) {
      this.$router.push(item.path);
      this.$store.commit("menu/headerId", item.index);
    },
  },
};
</script>
<style lang="scss" scoped>
.header-menu {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 50px;
  background-color: #fff;
  color: #141614;
  display: flex;
  border-bottom: 1px solid #e8e8e8;
}
.menu-tab {
  flex: 1;
  text-align: center;
  span {
    display: inline-table;
    line-height: 47px;
    border-bottom: 3px solid;
  }
}
</style>
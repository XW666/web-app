<template>
  <div class="wrapper">
    <div class="user-con">
      <div class="user-dom" v-for="(item, index) in list" :key="index">
        <div class="user-item">
          <div class="uesr-tit">
            <svg class="closeImg" aria-hidden="true">
              <use :xlink:href="'#' + item.icon" />
            </svg>
            {{ item.text }}
          </div>
          <div class="uesr-icon">
            <span
              class="iconfont"
              :class="item.data === '' ? 'icon-xiangzuo' : 'icon-biji'"
              @click="spanClick(item.path, item.type)"
            ></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        {
          text: "基本信息",
          type: "basic",
          icon: "icon-jibenxinxi",
          path: "/basic", //跳转的页面
          data: "", //添加后的信息
        },
        {
          text: "工资卡信息",
          type: "wages",
          icon: "icon-gongzikaxinxi",
          path: "", //跳转的页面
          data: "", //添加后的信息
        },
        {
          text: "工作经历",
          type: "work",
          icon: "icon-gongzuojingli",
          path: "", //跳转的页面
          data: "", //添加后的信息
        },
      ],
    };
  },
  created() {},
  mounted() {},
  methods: {
    spanClick(path, type) {
      //页面跳转
      this.$router.push(path);
    },
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  padding-left: 15px;
  padding-right: 15px;
}
.user-con {
  margin-top: 10px;
}
.user-dom {
  border-radius: 6px;
  margin-bottom: 10px;
  padding: 0 12px;
  box-sizing: border-box;
  background-color: #fff;
}
.user-item {
  width: 100%;
  display: flex;
  line-height: 50px;
  color: #141614;
  border-bottom: 1px solid #e8e8e8;
}
.uesr-tit {
  flex: 1;
  text-align: left;
}
.uesr-icon {
  flex: 1;
  text-align: right;
}
</style>
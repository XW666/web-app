<template>
  <div class="wrapper" :style="{ 'background-color': backgroundColor }">
    <div class="dom1">
      <span class="icon1 iconfont icon-huanyingye-xiaoxi"></span>
      <span class="icon2 iconfont icon-huanyingye-wenjian"></span>
      <span class="icon3 iconfont icon-huanyingye-zhuzhuangtu"></span>
      <span class="icon4 iconfont icon-huanyingye-xiaolian"></span>
      <span class="icon5 iconfont icon-huanyingye-quxiantu"></span>
      <span class="icon6 iconfont icon-huanyingye-wenjianjia"></span>
      <div class="load load1"></div>
      <div class="load load2"></div>
      <div class="load load3"></div>
      <div class="load4">
        <img src="../../assets/image/fenlei3.png" />
      </div>
    </div>
    <div class="dom2">
      <div class="tit1">“ HELLO 你好 ”</div>
      <div class="tit2">
        欢迎加入乾通互连, 为方便HR给您办理入
        职手续，请尽可能完整的填写入职登记表，并
        确保您所填写的信息准确、真实、有效。
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgroundColor: "#2E98FF",
    };
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.wrapper {
  .dom1 {
    display: inline-block;
    position: relative;
    width: 160px;
    height: 160px;
    margin-top: 100px;
  }
  .dom2 {
    color: #fff;
    padding: 50px 60px 0 60px;
    box-sizing: border-box;
  }
  .iconfont {
    position: absolute;
    font-size: 16px;
    opacity: 0.4;
  }
  .icon1 {
    left: 36px;
    top: -6px;
  }
  .icon2 {
    left: 150px;
    top: 20px;
  }
  .icon3 {
    left: 160px;
    top: 90px;
  }
  .icon4 {
    right: 24px;
    bottom: -17px;
  }
  .icon5 {
    left: 4px;
    bottom: -5px;
  }
  .icon6 {
    left: -24px;
    top: 68px;
  }
  .load4 {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    text-align: center;
    position: absolute;
    margin: 0 auto;
    right: 0;
    bottom: 0;
    left: 0;
    top: 30%;
    display: inline-block;
    background-color: #fff;
    padding: 4px;
    box-sizing: border-box;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
    }
  }
  .load {
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: absolute;
    margin: 0 auto;
    right: 0;
    bottom: 0;
  }
  .load1 {
    width: 140px;
    height: 140px;
    left: 0;
    top: 11%;
    animation: clippath1 3s linear infinite;
    &::before {
      content: "";
      position: absolute;
      left: 46px;
      top: 0;
      background: #fff;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
  .load2 {
    width: 110px;
    height: 110px;
    left: 0;
    top: 20%;
    animation: clippath2 5s linear 0.4s infinite;

    &::before {
      content: "";
      position: absolute;
      left: 34px;
      top: 0;
      background: #fff;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
  .load3 {
    width: 100px;
    height: 100px;
    left: 0;
    top: 23%;
    animation: clippath3 8s linear 0.6s infinite;
    &::before {
      content: "";
      position: absolute;
      left: 30px;
      top: 0;
      background: #fff;
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
  .tit1 {
    font-size: 18px;
  }
  .tit2 {
    font-size: 14px;
    line-height: 18px;
    text-indent: 28px;
    margin-top: 60px;
    text-align: left;
  }
}
@keyframes clippath3 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes clippath2 {
  0% {
    transform: rotate(0eg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes clippath1 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
<template>
  <div class="bottom-view">
    <div class="tit1">
      <div class="hr"></div>
      <div class="tit-log">
        <img src="../../assets/image/logo.png" />
      </div>
      <div class="hr"></div>
    </div>
    <div class="tit2">乾薪通技术支持 版权所有</div>
  </div>
</template>
<style lang="scss" scoped>
.bottom-view {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  padding: 10px 0;
  text-align: center;
  .tit1 {
    display: flex;
    padding: 0 70px;
    align-items: center;

    .hr {
      flex: 1;
      height: 2px;
      background-color: #d9d9d9;
    }
  }
  .tit-log {
    width: 33px;
    padding: 0 6px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .tit2 {
    font-size: 10px;
    color: #d9d9d9;
  }
}
</style>
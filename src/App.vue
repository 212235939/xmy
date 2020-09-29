<template>
  <div id="app">
    <router-view />

    <van-tabbar v-model="active" route active-color="#FF7F16">
      <van-tabbar-item name="1" to="/">
        <div class="biwqfoqwo">
          <span class="dqwdwqdwqwq iconfont iconren"></span>
          <span>首页</span>
        </div>
      </van-tabbar-item>
      <van-tabbar-item name="2" to="/Course">
        <div class="biwqfoqwo">
          <span class="dqwdwqdwqwq iconfont iconrenzheng"></span>
          <span>课程</span>
        </div>
      </van-tabbar-item>
      <van-tabbar-item name="3" to="/Lesson">
        <div class="biwqfoqwo">
          <span class="dqwdwqdwqwq iconfont iconshuben"></span>
          <span>约课记录</span>
        </div>
      </van-tabbar-item>
      <van-tabbar-item name="4" to="/Practice">
        <div class="biwqfoqwo">
          <span class="dqwdwqdwqwq iconfont iconboshimao"></span>
          <span>练习</span>
        </div>
      </van-tabbar-item>
      <van-tabbar-item name="5" to="/My">
        <div class="biwqfoqwo">
          <span class="dqwdwqdwqwq iconfont iconwode"></span>
          <span>我的</span>
        </div>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
    };
  },
 
};
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  font-size: 0.27rem;
}
.biwqfoqwo {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* width: 1rem; */
  height: 0.8rem;
  align-items: center;
}
.dqwdwqdwqwq {
  font-size: 0.46rem;
}
</style>

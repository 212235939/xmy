<template>
  <div id="app">
    <router-view />
    <div class="addas" v-show="this.$route.meta.showtab"></div>
    <div v-show="this.$route.meta.showtab">
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

    <div id="quanjujj" @touchmove.prevent="move" @click="add('/feedback')">
      <span class="qwwqwq iconfont icon-duanxin"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "1",
    };
  },
  methods: {
    add(path){
      this.$router.push({path})
    },
    move(event) {
      var ss = document.querySelector("#quanjujj");
      var x = event.targetTouches[0].clientX;
      var y = event.targetTouches[0].clientY;
      var clientW = document.documentElement.clientWidth;
      var clientH = document.documentElement.clientHeight;
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px"; // 检测碰撞
      if (x < 25) {
        x = 25;
      } else if (x > clientW - 25) {
        x = clientW - 25;
      }

      if (y < 25) {
        y = 25;
      } else if (y > clientH - 25) {
        y = clientH - 25;
      }
      ss.style.left = x - 25 + "px";
      ss.style.top = y - 25 + "px";
    },
  },
};
</script>

<style >
.van-nav-bar .van-icon {
    color: #000000;
}
.van-nav-bar{
  height: 39px;
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

body {
  margin: 0px;
  padding: 0px;
  font-size: 0.27rem;
  list-style: none;
}

.qwwqwq {
  color: #fff;
  font-size: 0.66rem;
}
.boxs {
  width: 100%;
  height: 10vh;
}
.addas{
  height: 10vh;
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
#quanjujj {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0.5rem;
  bottom: 50px;
  width: 1.5rem;
  z-index: 999999999999999999999;
  height: 1.5rem;
  border-radius: 50%;
  background: rgb(91, 91, 255);
}
</style>

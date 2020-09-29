<template>
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
  <div class="body">
    <!-- 导航 -->
    <van-nav-bar title="练习" />
    <!-- 宫格 -->
    <div class="grid">
      <!-- 上宫格 -->
      <div class="grid_top">
        <div>
          <div class="g-img">
            <img src="/practice-img/01.png" @click="G1('/G1')" />
          </div>
          <span>考点专练</span>
        </div>

        <div>
          <div class="g-img">
            <img src="/practice-img/02.png" @click="G1('/G2')" />
          </div>
          <span>套卷练习</span>
        </div>

        <div>
          <div class="g-img">
            <img src="/practice-img/03.png" @click="G1('/G3')" />
          </div>
          <span>仿真模考</span>
        </div>

        <div>
          <div class="g-img">
            <img src="/practice-img/04.png" @click="G1('/G4')" />
          </div>
          <span>错题练习</span>
        </div>
      </div>
      <!-- 下宫格 -->
      <div class="grid_bottom">
        <div>
          <div class="g-img">
            <img src="/practice-img/05.png" @click="G1('/G5')" />
          </div>
          <span>测评记录</span>
        </div>

        <div>
          <div class="g-img">
            <img src="/practice-img/06.png" @click="G1('/G6')" />
          </div>
          <span>习题收藏</span>
        </div>

        <div>
          <div></div>
          <span></span>
        </div>

        <div>
          <div></div>
          <span></span>
        </div>
      </div>
    </div>
    <!-- 近期模考 -->
    <div class="near">
      <p>近期模考</p>
      <div class="near_nav">
        <div style="color:#eb6100">默认排序</div>
        <div>时间</div>
      </div>
      <div class="near_img">
        <img src="/practice-img/07.png" alt="" />
        <p>暂无模考安排，敬请期待</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    G1(path) {
      this.$router.push(path);
    },
    
  },
};
<<<<<<< HEAD
</script>

<style scoped>
.body {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
/* 宫格 */
.grid {
  width: 95%;
  height: 28vh;
  background-color: #fff;
  border-radius: 0.2rem;
  margin: 0.2rem auto;
}
/* 上宫格 */
.grid_top {
  width: 100%;
  height: 14vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.1rem;
  align-items: center;
}
.grid_top div {
  width: 22%;
  height: 79%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grid_top div .g-img {
  width: 60%;
  height: 70%;
  border: 0.02rem solid #eee;
  border-radius: 10rem;
  box-shadow: 0.01rem 0.01rem 0.08rem #eeeeee;
  display: flex;
  align-items: center;
}
.g-img img {
  width: 50%;
  height: 50%;
}
.grid_top div span {
  font-size: 0.04rem;
}
/* 下宫格 */
.grid_bottom {
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.1rem;
}
.grid_bottom div {
  width: 22%;
  height: 79%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grid_bottom div .g-img {
  width: 60%;
  height: 70%;
  border: 0.02rem solid #eee;
  border-radius: 10rem;
  box-shadow: 0.01rem 0.01rem 0.08rem #eeeeee;
  display: flex;
  align-items: center;
}
.g-img img {
  width: 50%;
  height: 50%;
}
.grid_bottom div span {
  font-size: 0.04rem;
}
/* 近期模考 */
.near {
  width: 100%;
  height: 35vh;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.01rem 0.25rem;
}
.near p {
  color: gray;
}
.near_nav {
  width: 98%;
  display: flex;
  justify-content: space-between;
}
.near_img {
  width: 100%;
  height: 24vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.near_img img {
  width: 25%;
  height: 70%;
}
=======
</script>

<style scoped>
.body {
  width: 100%;
  height: 100vh;
  background-color: #f0f2f5;
}
/* 宫格 */
.grid {
  width: 95%;
  height: 28vh;
  background-color: #fff;
  border-radius: 0.2rem;
  margin: 0.2rem auto;
}
/* 上宫格 */
.grid_top {
  width: 100%;
  height: 14vh;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.1rem;
  align-items: center;
}
.grid_top div {
  width: 22%;
  height: 79%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grid_top div .g-img {
  width: 60%;
  height: 70%;
  border: 0.02rem solid #eee;
  border-radius: 10rem;
  box-shadow: 0.01rem 0.01rem 0.08rem #eeeeee;
  display: flex;
  align-items: center;
}
.g-img img {
  width: 50%;
  height: 50%;
}
.grid_top div span {
  font-size: 0.04rem;
}
/* 下宫格 */
.grid_bottom {
  width: 100%;
  height: 14vh;
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  padding: 0.1rem;
}
.grid_bottom div {
  width: 22%;
  height: 79%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.grid_bottom div .g-img {
  width: 60%;
  height: 70%;
  border: 0.02rem solid #eee;
  border-radius: 10rem;
  box-shadow: 0.01rem 0.01rem 0.08rem #eeeeee;
  display: flex;
  align-items: center;
}
.g-img img {
  width: 50%;
  height: 50%;
}
.grid_bottom div span {
  font-size: 0.04rem;
}
/* 近期模考 */
.near {
  width: 100%;
  height: 35vh;
  background-color: #fff;
  box-sizing: border-box;
  padding: 0.01rem 0.25rem;
}
.near p {
  color: gray;
}
.near_nav {
  width: 98%;
  display: flex;
  justify-content: space-between;
}
.near_img {
  width: 100%;
  height: 24vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.near_img img {
  width: 25%;
  height: 70%;
}
=======
  <div>练习</div>
</template>

<script>
export default {};
</script>

<style>
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
>>>>>>> ace817ad0630028158a956f287cf3b56d773be9c
</style>
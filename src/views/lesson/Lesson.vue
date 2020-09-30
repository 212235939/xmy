<template>
  <div>
    <!-- 头部导航 -->
    <div class="div_header">
      <div class="iconfont icon-zuojiantou"></div>
      <div class="div_header_title">约课记录</div>
    </div> 

    <!-- 可选区域的内容 -->
    <van-tabs
      v-model="active"
      title-active-color="orange"
      line-width="20"
      color="orange"
    >
      <van-tab title="待上课">
        <div class="div_tab1">
          <img src="../../images/为空显示.png" class="div_tab_img1" />
          <div class="div_tab_title">还没有待上课记录哦</div>
          <div>
            <button class="div_tab_btn" @click="Immediately">立即约课</button>
          </div>
        </div>
      </van-tab>
      <van-tab title="已上课">
        <div class="div_tab1">
          <img src="../../images/为空显示.png" class="div_tab_img1" />
          <div class="div_tab_title">还没有上课记录哦</div>
          <div><button class="div_tab_btn" @click="Immediately">立即约课</button></div>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <div class="div_tab1">
          <img src="../../images/为空显示.png" class="div_tab_img1" />
          <div class="div_tab_title">还没有取消上课记录哦</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import "../../toolkit/rem.js";

export default {
 
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    Immediately() {
      // console.log('1111');
      this.$router.push("/onetutoring");
    },
  },
  mounted() {},
};
</script>

<style scoped>
.div_header {
  width: 59%;
  /* background-color: red; */
  /* border:1px solid red; */
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_header_title {
  font-size: 0.4rem;
}
.div_tab1 {
  width: 100%;
  height: 10rem;
  background-color: rgb(238, 245, 245);
  /* border: 1px solid red; */
  text-align: center;
}
.div_tab_img1 {
  margin-top: 1rem;
}
.div_tab_title {
  margin-top: 0.2rem;
  color: rgb(196, 184, 184);
}
.div_tab_btn {
  width: 1.8rem;
  height: 0.5rem;
  margin-top: 0.5rem;
  background-color: rgb(255, 123, 0);
  color: white;
  border: 1px solid rgb(255, 123, 0);
}
</style>
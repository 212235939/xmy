<template>
  <div>
    <div class="div_header">
      <div class="div_header_left">
        <van-icon name="arrow-left" size="20" @click="left" />
      </div>
      <div class="div_header_right">{{ lists }}</div>
    </div>
    <div class="div_ddd"></div>
    <div class="div_body">
      <div class="div_body1" @click="tiku">
        <van-icon name="coupon" size="18" class="icons" color="gray" />
      </div>
      <div class="div_body2">题库选择</div>
      <div class="div_body3"></div>
      <div class="div_body4" @click="cludel">
        <van-icon name="setting-o" size="16" />
      </div>
    </div>
    <div class="div_footer">
      <div class="div_footer1">
        <div class="div_jian">-</div>
      </div>
      <div class="div_footer2">{{ lists }}</div>
      <div class="div_footer3">0/14</div>
      <div class="div_footer4"><van-icon name="arrow" size="12" /></div>
    </div>
    <div class="div_xian"></div>
    <van-popup
      v-model="show"
      position="bottom"
      :style="{ height: '30%' }"
      closeable
      round
    >
      <div class="dic_lian1">考点专练设置</div>
      <div class="div_title">设置专点专练出题数量</div>
      <div class="div_checkbox">
        <div>
          <van-checkbox icon-size="10" v-model="sss">随机15道题</van-checkbox>
        </div>
        <div>
          <van-checkbox icon-size="10" v-model="aaa">按顺序做题</van-checkbox>
        </div>
      </div>
      <div class="div_ding">
        <div style="margin-top: 0.3rem">确定</div>
      </div>
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: "",
      show: false,
      sss: false,
      aaa: false,
    };
  },
  created() {
    var list = this.$route.query.items.title;
    console.log(list);
    this.lists = list;
  },
  methods: {
    left() {
      this.$router.push("/Practice");
    },
    tiku() {
      this.$router.push("/point");
    },
    cludel() {
      this.show = true;
    },
  },
};
</script>

<style scoped>
.div_header {
  width: 60%;
  height: 1rem;
  /* border: 1px solid black; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.37rem;
  font-family: "宋体";
}
.div_ddd {
  width: 100%;
  height: 0.2rem;
  background-color: rgb(227, 228, 225);
}
.div_body {
  width: 100%;
  height: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body1 {
  width: 10%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
}
.icons {
  margin-left: 0.2rem;
}
.div_body2 {
  width: 20%;
  height: 100%;
  /* background-color: blue; */
  display: flex;
  align-items: center;
}
.div_body3 {
  width: 59%;
  height: 100%;
  /* background-color: chartreuse; */
  display: flex;
  align-items: center;
}
.div_body4 {
  width: 11%;
  height: 100%;
  /* background-color: cornsilk; */
  display: flex;
  align-items: center;
}
.div_footer {
  width: 90%;
  height: 1.2rem;
  border: 1px solid gainsboro;
  border-radius: 6px;
  margin-left: 0.34rem;
  margin-top: 0.2rem;
  display: flex;
  /* justify-content: space-between; */
}
.div_jian {
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  background-color: gainsboro;
  color: white;
  text-align: center;
  font-weight: bold;
}
.div_footer1 {
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.div_footer2 {
  margin-top: 0.26rem;
  margin-left: 0.2rem;
}
.div_footer3 {
  margin-left: 2rem;
  margin-top: 0.29rem;
  color: gray;
}
.div_footer4 {
  margin-left: 1.7rem;
  margin-top: 0.4rem;
  color: gray;
}
.div_xian {
  width: 70%;
  height: 0.06rem;
  background-color: rgb(243, 243, 237);
  border-radius: 10px;
  position: relative;
  top: -0.4rem;
  left: 0.8rem;
}
.dic_lian1 {
  width: 100%;
  height: 0.7rem;
  /* border:1px solid red; */
  font-size: 0.36rem;
  /* font-family: "宋体"; */
  text-align: center;
  margin-top: 0.3rem;
  border-bottom: 1px solid rgb(221, 217, 217);
}
.div_title {
  color: gray;
  font-size: 0.28rem;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.check {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.div_checkbox {
  width: 70%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.4rem;
  margin-left: 0.2rem;
  font-size: 0.29rem;
}
.div_ding {
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0;
  background-color: rgb(228, 91, 37);
  color: white;
  font-size: 0.33rem;
  text-align: center;
}
</style>
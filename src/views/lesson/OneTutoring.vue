<template>
  <div>
    <van-nav-bar title="一对一辅导" left-text="返回" left-arrow @click-left="onClickLeft">
      <template #right>
        <van-icon name="search" size="20" @click="gosearch" />
      </template>
    </van-nav-bar>
    <div class="div_header_nav">
      <div class="Size iconfont icon-zuojiantou" @click="back"></div>
      <div style="color: black;font-size:18px">一对一辅导</div>
      <div class="Size iconfont icon-icon-search"></div>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="div_body_hidden">
      <div class="div_body_box" v-for="index in 15" :key="index">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4">
          <button @click="Teacher">预约</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 }
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" }
      ]
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    Teacher() {
      this.$router.push("/bookdetails");
    },
    onClickLeft() {
      this.$router.go(-1);
    },
    gosearch(){
      this.$router.push("/search");
    }
  }
};
</script>

<style scoped>
.div_header_nav {
  width: 99%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  position: fixed;
  top: 0rem;
  background-color: white;
  /* color:gainsboro; */
}
.Size {
  font-size: 0.5rem;
}
.div_body_box {
  width: 100%;
  height: 1.4rem;
  background-color: white;
  margin: 10px 10px 0px 0px;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.div_body_box:hover {
  width: 100%;
  box-shadow: 0 5px 15px rgba(1, 1, 1, 1);
}
.div_body_box2 {
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body_box2 img {
  width: 50%;
  height: 70%;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.div_body_box3 {
  width: 40%;
  height: 100%;
}
.div_body_box4 {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
}
.div_body_box4 button {
  width: 1.3rem;
  height: 0.7rem;
  border-radius: 1rem;
  background-color: gainsboro;
  border: 1px solid gainsboro;
  color: red;
}
.div_body_hidden {
  width: 100%;
  height: 24.5rem;
  background-color: #f0f2f5;
}
.div_body_box3_div1 {
  width: 100%;
  height: 60%;
  font-size: 0.34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div_body_box3_div2 {
  width: 100%;
  height: 40%;
  /* background-color: salmon; */
  color: rgb(192, 178, 178);
}
</style>
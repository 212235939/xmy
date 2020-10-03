<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="仿真模考" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="gray" size="18" />
      </template>
      <template #right>
        <van-icon name="search" color="gray" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
      <van-dropdown-item v-model="value3" :options="option3" />
    </van-dropdown-menu>
    <!-- 图片 -->
    <div class="imgs">
      <img
        src="http://localhost:8080/%E5%A5%97%E5%8D%B7%E7%BB%83%E4%B9%A0.png"
      />
      <p>请稍候，套卷正在赶来的路上啦</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      value3: "A",
      option1: [
        { text: "考试类型", value: 0 },
        { text: "全部", value: 1 },
        { text: "模拟考试", value: 2 },
        { text: "正式考试", value: 2 },

      ],
      option2: [
        { text: "考试状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "未开始", value: "c" },
        { text: "进行中", value: "d" },
        { text: "已结束", value: "e" },


      ],
      option3: [
        { text: "参考状态", value: "A" },
        { text: "全部", value: "B" },
        { text: "已做", value: "C" },
        { text: "未做", value: "D" },
      ],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.imgs {
  width: 70%;
  height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
}
.imgs img {
  width: 58%;
  height: 60%;
}
</style>
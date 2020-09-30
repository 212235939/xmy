<template>
  <div>
    <div class="box">
      <van-nav-bar title="测评记录" left-arrow @click-left="onlist()">
        <template #right>
          <van-icon name="search" size="20" @click="a"/>
        </template>
      </van-nav-bar>

      <div class="sel">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
          <van-dropdown-item v-model="value2" :options="option2" />
        </van-dropdown-menu>
      </div>

      <div class="acbox">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
          alt
        />
        <p>该时段您没有留下测评记录哦</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
     onlist() {
      this.$router.go(-1);
    },
    a(){
      this.$router.push("/search")
    }
  },
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "考点专练", value: 4 }
      ],
      option2: [
        { text: "时间", value: "a" },
        { text: "全部", value: "b" },
        { text: "今天", value: "c" },
        { text: "7天", value: "d" }
      ]
    };
  }
};
</script>

<style scoped>
bady {
  background: rgb(39, 39, 39);
}
.box {
  min-height: 100vh;
  background: white;
  box-sizing: border-box;
}
.acbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.3rem;
  font-size: 0.3rem;
}
.acbox img {
  width: 47%;
  height: 2.5rem;
}
</style>
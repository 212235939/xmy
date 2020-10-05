<template>
  <div>
    <div class="box">
      <van-nav-bar title="习题收藏" left-arrow @click-left="onlist()">
        <template #right>
          <van-icon name="search" size="20" @click="a" />
        </template>
        <template #left>
          <van-icon name="van-icon van-icon-arrow-left" size="20" @click="onlist" />
        </template>
      </van-nav-bar>

      <van-dropdown-menu active-color="rgb(235, 97, 0)">
        <van-dropdown-item title="题目类型" ref="asdf">
          <template #default>
            <div v-for="(item,index) in option1" :key="index" class="asd" @click="hide">{{item.text}}</div>
          </template>
        </van-dropdown-item>
      </van-dropdown-menu>

      <div class="acbox">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
          alt
        />
        <p>暂无收藏</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: "0",
      option1: [
        { text: "单选", value: 0 },
        { text: "多选", value: 1 },
        { text: "判断", value: 2 },
        { text: "连线", value: 3 }
      ]
    };
  },
  methods: {
    onlist() {
      this.$router.push('/Practice');
    },
    a() {
      this.$router.push("/search");
    },
    hide(){
      this.$refs.asdf.toggle()
    }
  }
};
</script>

<style scoped>
.asd {
  width: 100%;
  height: 1.2rem;
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.van-ellipsis {
  font-size: 12px;
}
bady {
  background: rgb(39, 39, 39);
}
.box {
  min-height: 100vh;
  background: #f0f2f5;
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
.van-nav-bar .van-icon {
  color: black;
}
.van-nav-bar__left {
  color: black !important;
}
</style>
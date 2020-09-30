<template>
  <div>
    <div class="box">
      <van-nav-bar title="错题记录" left-arrow @click-left="onlist()">
        <template #right>
          <van-icon name="search" size="20" @click="a"/>
        </template>
      </van-nav-bar>

      <div class="sel">
        <div class="a">
          <van-dropdown-menu>
            <van-dropdown-item v-model="value1" :options="option1" />
          </van-dropdown-menu>
        </div>
        <div class="b"><van-icon name="todo-list-o" />巩固全部错题</div>
        <div class="c"><van-icon name="video-o" />移除错题</div>
      </div>

      <div class="acbox">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
          alt
        />
        <p>暂无错题记录</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
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
      value2: 0,
      value3: 0,
      option1: [
        { text: "类型不限", value: 0 },
        { text: "全部", value: 1 },
        { text: "套卷练习", value: 2 },
        { text: "仿真模考", value: 3 },
        { text: "考点专练", value: 4 }
      ]
    };
  }
};
</script>

<style scoped>
bady {
  background: rgb(39, 39, 39);
}
.sel{
  display: flex;
}
.a{
  width: 33%;
}
.b,.c{
  width: 33%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  padding-top: 0.1rem;
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
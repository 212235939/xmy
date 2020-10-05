<template>
  <div class="root">
    <van-nav-bar title="名师" left-arrow @click-left="onClickLeft" />
    <div class="tab">
      <div class="t_left">
        <div
          v-for="(item,index) in list"
          :key="index"
          :class="['',{'active':index==ind}]"
          @click="change(index)"
        >{{item.title}}</div>
      </div>
      <div class="t_right" @click="select">
        <span class="iconfont iconshaixuan"></span>筛选
      </div>
    </div>
    <div class="vantselect">
        <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    </div>



  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {},
    change(i) {
      this.ind = i;
    },
    select() {}
  },
  data() {
    return {
      list: [
        {
          title: "全部"
        },
        {
          title: "语文"
        },
        {
          title: "数学"
        },
        {
          title: "英语"
        },
        {
          title: "政治"
        }
      ],
      ind: 0,
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
  }
};
</script>

<style scoped>
.active {
  color: orange;
}
.root {
  width: 100%;
  height: 8rem;
  border: 1px solid red;
}
.vantselect{
    margin: 0 auto;
}
.tab {
  width: 100%;
  height: 1rem;
  border: 1px solid red;
  display: flex;
}
.t_left {
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.t_left > div {
  width: 15%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.t_right {
  width: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.t_right > div {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
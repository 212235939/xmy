<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="套卷练习" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="gray" size="18" />
      </template>
      <template #right>
        <van-icon name="search" color="gray" size="18" />
      </template>
    </van-nav-bar>
    <!-- 下拉菜单 -->
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1">
        <div class="row">
          <div class="row_left">
            <van-sidebar v-model="activeKey" class="sider" @change="cate">
              <van-sidebar-item
                v-for="(item, index) in list"
                :key="index"
                :title="item.title"
              />
            </van-sidebar>
          </div>
          <div class="row_right">
            <span v-for="(item, index) in list1" :key="index">{{item.title}}</span>
          </div>
        </div>
      </van-dropdown-item>
      <van-dropdown-item v-model="value2" :options="option2" />
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
      activeKey: 0,
      value1: 0,
      value2: "a",
      option1: [{ text: "套卷分类", value: 0 }],
      option2: [
        { text: "套卷状态", value: "a" },
        { text: "全部", value: "b" },
        { text: "已做", value: "c" },
        { text: "未做", value: "d" },
      ],
      list: [],
      list1: [],
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    cate(id){
      this.list1=this.list[id].children
    }
  },
  created() {
    this.$axios.get("http://localhost:8080/paper-package.json").then((res) => {
      this.list = res.data.data;
      this.list1 = res.data.data.children;
    });
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
/* 侧边导航 */
.row {
  width: 100%;
  height: 75vh;
  display: flex;
  justify-content: space-between;
}
.row_left {
  width: 30%;
  height: 100%;
  font-size: 0.2rem;
}
.row_left .sider {
  height: 100%;
}
.sider van-sidebar-item {
  height: 0.5rem;
}
.row_right {
  width: 70%;
  box-sizing: border-box;
  padding: 0.2rem;
  font-size: 0.4rem;
}

</style>
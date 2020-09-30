<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="题库选择" left-arrow @click-left="onClickLeft">
      <template #left
        ><van-icon name="arrow-left" color="gray" size="18"
      /></template>
    </van-nav-bar>
    <!-- 搜索 -->
    <van-search
      v-model="value"
      shape="round"
      placeholder="请输入题库名称关键词"
    />
    <!-- 侧边导航 -->
    <div class="row">
      <div class="row_left">
        <van-sidebar v-model="activeKey" class="sider" @change="cate">
          <van-sidebar-item
            v-for="(item, index) in oneList"
            :key="index"
            :title="item.title"
          />
        </van-sidebar>
      </div>
      <div class="row_right">
        <span v-for="(item, index) in twoList" :key="index">{{
          item.title
        }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      activeKey: 0,
      oneList: [],
      twoList: [],
    };
  },
  created() {
    this.$axios.get("http://localhost:8080/point.json").then((res) => {
      this.oneList = res.data.data;
      this.twoList = res.data.data[0].children;
    });
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    cate(id) {
      this.twoList = this.oneList[id].children;
    },
  },
};
</script>

<style scoped>
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
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.3rem;
}
.row_right span {
  margin: 0.3rem 0rem;
}
</style>
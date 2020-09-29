<template>
  <div>
    <div>
      <van-nav-bar title="特色课" @click-right="onSss">
        <template #right >
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>
    </div>
    <div>
      <van-dropdown-menu :overlay="false">
        <van-dropdown-item title="分类" @open="aaa"></van-dropdown-item>
        <van-dropdown-item title="排序" @open="bbb" />
        <van-dropdown-item title="筛选" @open="ccc" />
      </van-dropdown-menu>

      <div class="box-top">
        <van-popup
      
          v-model="aaaa"
          overlay-class="set"
          close-icon="close"
          position="top"
          :style="{ height: '60%' }"
        >
          <van-cell-group>
            <van-cell title="年纪" />
            <van-button
              type="primary"
              color="#F5F5F5"
              size="small"
              v-for="(item,index) in list"
              :key="index"
            >
              <span style="color:black">{{item}}</span>
            </van-button>
          </van-cell-group>
        </van-popup>
      </div>
      <div class="box-top">
        <van-popup  v-model="bbbb" close-icon="close" position="top" :style="{ height: '60%' }"></van-popup>
      </div>
      <div class="box-top">
        <van-popup v-model="cccc" close-icon="close" position="top" :style="{ height: '60%' }"></van-popup>
      </div>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aaaa: false,
      bbbb: false,
      cccc: false,
      list: ["初一", "初二", "初三", "高一", "高二"],
    };
  },
  methods: {
    aaa() {
      this.aaaa = true;
    },
    bbb() {
      this.bbbb = true;
    },
    ccc() {
      this.cccc = true;
    },
    onSss(){
      this.$router.push({
        path:'/search'
      })
    }
  },
};
</script>

<style scoped>
.van-popup--top {
  margin-top: 100px;
  height: 400px;
}
.van-button--small {
  margin-left: 30px;
  margin-top: 5px;
}
.set {
  width: 200px;
  height: 5rem;
  background: red;
}
</style>
<template>
  <div>
    <div class="boxs">
      <van-nav-bar title="我的余额" left-arrow @click-left="onlist()">
        <template #right>
          <span style="font-size: 0.25rem">余额明细</span>
        </template>
      </van-nav-bar>

      <div class="yus">
        <span>我的余额</span>
        <span style="margin-left: 0.3rem; color: red">0学习币</span>
      </div>
      <ul class="uul">
        <li
          v-for="(item, index) in yues"
          :key="index"
          :class="['ad', index == active ? 'active' : '']"
          @click="set(index)"
        >
          <span>{{ item.xxb }}学习币</span>
          <span style="color: red">￥{{ item.jgx }}</span>
        </li>
      </ul>
    </div>

    <h3>充值说明</h3>
    <div>
      1、学习币是网校中专有的一种虚拟货币，大家可以用学习币购买网校内的任何虚拟商品，比如课程、辅导答疑。
      2、充值后没有使用期限,但无法提现,退款和转赠他人。
      3、如遇到无法充值、充值失败等问题,请联系客服。
    </div>

    <van-tabbar v-if="active == -1">
      <div class="ljx" style="background: rgb(218, 218, 218)">立即充值</div>
    </van-tabbar>

    <van-tabbar v-else z-index="99999999">
      <div class="ljx" @click="show = true">立即充值</div>
    </van-tabbar>

    <van-popup v-model="show" position="bottom" :style="{ height: '30%' }" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      yues: [
        {
          xxb: 30000,
          jgx: 30000,
        },
        {
          xxb: 20000,
          jgx: 20000,
        },
        {
          xxb: 10000,
          jgx: 10000,
        },
        {
          xxb: 8000,
          jgx: 8000,
        },
        {
          xxb: 5000,
          jgx: 5000,
        },
        {
          xxb: 0.1,
          jgx: 0.1,
        },
        {
          xxb: 100,
          jgx: 100,
        },
      ],
      active: -1,
    };
  },
  methods: {
    onlist() {
      this.$router.go(-1);
    },
    set(index) {
      this.active = index;
    },
  },
};
</script>

<style scoped>
.boxs {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
}
.yus {
  font-size: 0.3rem;
  width: 100%;
  height: 1rem;
  box-sizing: border-box;
  padding: 0px 0.4rem;
  line-height: 1rem;
  margin: 0 auto;
  background: #fff;
}
.uul {
  width: 100%;
  box-sizing: border-box;
  padding: 10px 0.3rem;
}
.ad {
  display: flex;
  margin-bottom: 0.3rem;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 17px;
  width: 100%;
  font-size: 0.28rem;
  height: 1.3rem;
  align-items: center;
  border-radius: 7px;
  background: #fff;
}

.ljx {
  width: 100%;
  height: 100%;
  background: orangered;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.33rem;
  color: #fff;
}
.active {
  background: #fcede2;
  border: 0.02667rem solid #eb6100;
  border: 0.26667vw solid #eb6100;
  box-shadow: 0 0.06667rem 0.06667rem 0 rgba(235, 97, 0, 0.75);
  box-shadow: 0 0.66667vw 0.66667vw 0 rgba(235, 97, 0, 0.75);
  border-radius: 0.21333rem;
  border-radius: 2.13333vw;
}
</style>
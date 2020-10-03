<template>
  <div>
    <van-nav-bar
      title="我的学习卡"
      right-text="学习卡兑换"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <van-empty
      image="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
      description="暂无订单"
      v-if="$route.query.val != 1"
    >
    </van-empty>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
        window.history.back()
    },
    onClickRight() {
        this.$router.push({
            path:"/exchange"
        })
    },
  },
};
</script>

<style>
</style>
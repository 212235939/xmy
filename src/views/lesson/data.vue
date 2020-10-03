<template>
  <div>
    <van-nav-bar title="学习日历" left-arrow @click-left="onClickLeft" />
    <van-calendar :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
</style>
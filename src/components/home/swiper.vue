<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in BannerList" :key="index">
        <img :src="image.banner_img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  //用props来接收父组件传过来的数组
  props: {
    BannerList: {
      type: Array,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 3rem;
}
.swiper img {
  width: 100%;
  height: 4rem;
}
</style>
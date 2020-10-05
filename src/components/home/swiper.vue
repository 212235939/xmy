<template>
  <div class="swiper">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
    data() {
    return {
      images: [
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20193KAjU2cB6h1569839562.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20197Cxc53hktC1569839552.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019LnKumseuhw1569839569.jpg',
        'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019MGNW3BtiS91569839576.jpg'
      ],
    };
  },
};
</script>

<style scoped>
.swiper{
  width: 100%;
  height: 3rem;
}
.swiper img{
  width: 100%;
  height: 4rem;
}
</style>
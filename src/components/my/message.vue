<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="消息通知" left-arrow @click-left="onClickLeft" >
      <template #left>
        <van-icon name="arrow-left" size="18" color="gray" />
      </template>
    </van-nav-bar>
    <!-- 通知 -->
    <van-cell title="课程通知" icon="http://localhost:8080/server-images/m1.png"  label="暂无消息" @click="jump('/m1')" />
    <van-cell title="系统通知" icon="http://localhost:8080/server-images/m2.png" label="暂无消息" @click="jump('/m2')"/>
    <van-cell title="订单通知" icon="http://localhost:8080/server-images/m3.png" label="暂无消息" @click="jump('/m3')"/>
    <van-cell title="约课通知" icon="http://localhost:8080/server-images/m4.png" label="暂无消息" @click="jump('/m4')"/>
    <van-cell title="考试通知" icon="http://localhost:8080/server-images/m5.png" label="暂无消息" @click="jump('/m5')"/>
  </div>
</template>

<script>
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
    jump(path){
      this.$router.push(path)
    }
  },
};
</script>

<style>
.van-cell__left-icon, .van-cell__right-icon {
    min-width: 1em;
    height: 24px;
    font-size: 42px;
    line-height: 24px;
}
</style>
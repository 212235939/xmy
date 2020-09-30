<template>
  <div>
    <!-- 导航 -->
    <van-nav-bar title="找回密码" left-arrow @click-left="onClickLeft">
      <template #left>
        <van-icon name="arrow-left" color="gray" size="18" />
      </template>
    </van-nav-bar>
    <!-- 密码验证 -->
    <div class="from">
      <van-form>
        <van-field v-model="tel" placeholder="请输入手机号" />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入验证码"
        />
        <van-field
          v-model="password"
          type="password"
          placeholder="请输入密码"
        />
        <div style="margin: 16px">
          <van-button round block class="btn"> 确定 </van-button>
        </div>
      </van-form>
    </div>
    <!-- 获取验证码 -->
    <span class="yzm" @click="yzm">获取验证码</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: "",
      password: "",
    };
  },
  methods: {
    onClickLeft() {
      window.history.back();
    },
    yzm() {
      if (this.tel == "") {
        this.$toast('手机号码格式不正确');
      }
    },
  },
};
</script>

<style scoped>
/* 确定按钮 */
.btn {
  background-color: #fd6d1c;
  color: #fff;
  height: 0.85rem;
  width: 6.4rem;
  margin: 0 auto;
}
/* 表单 */
.from {
  font-size: 0.8rem;
}
/* 获取验证码 */
.yzm {
  position: absolute;
  margin-top: -4.45rem;
  margin-left: 5.5rem;
  color: #eb6100;
}
</style>
<template>
  <div>
    <div class="body">
      <!-- User-logo -->
      <div class="user-logo">
        <img src="http://localhost:8080/User-logo.png" alt="" />
      </div>
      <div class="login">
        <!-- 表单 -->
        <div class="from">
          <van-form @click="name">
            <van-field
              v-model="tel"
              placeholder="请输入手机号"
              class="active"
            />
            <van-field
              v-model="password"
              type="password"
              placeholder="请输入短信验证码"
            />
            <!-- 验证 -->
            <div class="proving">
              <span>*未注册的手机号将自动注册</span>
              <span @click="toLogin">使用密码登录</span>
            </div>
            <div style="margin: 16px">
              <van-button round block @click="submit" class="btn"
                >登录</van-button
              >
            </div>
            <!-- 获取验证码 -->
            <span class="yzm" @click="yzm">获取验证码</span>
          </van-form>
        </div>
      </div>
    </div>
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
    name() {},
    submit() {},
    // 注册
    toRegister() {
      this.$router.push({ path: "/sms-login" });
    },
    // 获取验证码
    yzm() {
      if (this.tel == "") {
        this.$toast("手机号码格式不正确");
      }
    },
    // 用密码登录
    toLogin(){
      this.$router.push({path:'/login'})
    }
  },
};
</script>

<style>
</style>




<style scoped>
.body {
  width: 100%;
}
/* user-logo */
.user-logo {
  width: 100%;
  height: 25vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.user-logo img {
  width: 65%;
}
/* 登录 注册 */
.login {
  width: 100%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 0.5rem;
}
/* 表单 */
.from {
  font-size: 0.9rem;
}
/* 验证 */
.proving {
  width: 89%;
  height: 8vh;
  line-height: 8vh;
  margin: 0 auto;
  font-size: 0.2rem;
  display: flex;
  justify-content: space-between;
  color: #999999;
}
/* 提交按钮 */
.btn {
  background-color: #fd6d1c;
  color: #fff;
  height: 0.8rem;
  color: 0.02rem;
}
/* 点击激活 */
.active {
  border-bottom: #fd6d1c;
}
/* 获取验证码 */
.yzm {
  position: absolute;
  margin-top: -4.45rem;
  margin-left: 4.8rem;
  color: #eb6100;
  font-size: 0.2rem;
}
</style>


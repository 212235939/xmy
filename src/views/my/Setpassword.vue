<template>
  <div>
    <van-nav-bar title="设置密码" left-arrow @click-left="onClickLeft" />
    <div class="div_input1">
      <input type="password" v-model="password" placeholder="请输入密码" />
    </div>
    <div class="div_input2">
      <input type="password" v-model="passwords" placeholder="请再次确认密码" />
    </div>
    <div class="div_btn">
      <van-button plain hairline type="primary" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
import { mypar } from "../api/api.js";
export default {
  data() {
    return {
      password: "",
      passwords: "",
    };
  },
  mounted() {},
  methods: {
    onClickLeft() {},
    async login() {
      if (this.password != this.passwords) {
        this.$toast("两次输入的密码不一致");
      } else {
    
        var a = await mypar({
          password: this.password,
          mobile: this.$route.query.mobile,
          sms_code: this.$route.query.verification,
        });
        this.$toast("设置密码成功")
        this.$router.push('/My')
        console.log(a);
      }
    },
  },
};
</script>

<style scoped>
.div_input1 {
  width: 90%;
  height: 1rem;
  font-size: 0.33rem;
}
.div_input1 > input {
  width: 100%;
  height: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
}
.div_input2 {
  width: 90%;
  height: 1rem;
  font-size: 0.33rem;
  margin-top: 0.2rem;
}
.div_input2 > input {
  width: 100%;
  height: 70%;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid black;
}
.div_btn {
  width: 100%;
  text-align: center;
  margin-top: 1rem;
}
.div_btn > .van-button {
  width: 2rem;
  background-color: red;
  color: white;
  border: none;
}
</style>
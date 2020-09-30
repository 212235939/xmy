<template>
  <div>
    <van-nav-bar title="找回密码" left-text="返回" left-arrow @click-left="onClickLeft" />
    <div class="boxs">
      <div class="qsdw">
        <input type="text" placeholder="请输入手机号" />
        <span class="huo">获取验证码</span>
      </div>
      <div class="qsdw">
        <input type="text" placeholder="请输入验证码" />
      </div>
      <div class="qsdw">
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>

    <div class="deng">确定</div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    onClickLeft() {
      this.$router.push({
        path: "/about"
      });
    }
  }
};
</script>

<style scoped>
.qsdw {
  height: 13.33333vw;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
}
.boxs {
  padding: 0px 0.4rem;
  height: 3.9rem;
  box-sizing: border-box;
}
input {
  box-sizing: border-box;
  padding: 0.4rem 0;
  border: 0;
  height: 100%;
  font-size: 4vw;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  line-height: 5.33333vw;
  float: left;
  outline: none;
}
.huo {
  height: 6.66667vw;
  margin-top: 0.33333rem;
  margin-right: 1.33333vw;
  color: #eb6100;
  border-radius: 0.04rem;
  float: right;
  padding: 0;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  line-height: 0.66667rem;
}
.deng {
  width: 5.8rem;
  border-radius: 20px;
  height: 7vh;
  line-height: 7vh;
  color: #fff;
  font-size: 0.3rem;
  text-align: center;
  background: orangered;
  margin: auto;
}
</style>
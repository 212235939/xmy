<template>
  <div>
    <van-nav-bar title="修改密码" @click-left="onClickLeft" />
    <div class="boxs">
      <div class="qsdw">
        <input type="text" v-model="sj" placeholder="请输入手机号" />
        <span class="huo" @click="huoq">{{ content }}</span>
      </div>
      <div class="qsdw">
        <input type="text" v-model="yzm" placeholder="请输入验证码" />
      </div>
      <div class="qsdw">
        <input type="text" v-model="pard" placeholder="请输入密码" />
      </div>
    </div>

    <div class="deng" @click="deng">确定</div>
  </div>
</template>

<script>
import { smsCode, mypar } from "../api/api";

export default {
  data() {
    return {
      sj: "",
      yzm: "",
      pard: "",
      content: "请输入验证码",
      totalTime: 60, //记录具体倒计时时间
      canClick: true, //添加canClick
    };
  },
  methods: {
    async huoq() {
      if (this.sj.length != 11) {
        this.$toast("请输入手机号和密码");
        return false;
      } else {
        let a = await smsCode({
          mobile: this.sj,
          sms_type: "getPassword",
        });

        console.log(a);
        console.log(a.data);

        if (!this.canClick) return; //改动的是这两行代码
        this.canClick = false;
        this.content = this.totalTime + "s后重新发送";
        let clock = window.setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + "s后重新发送";
          if (this.totalTime < 0) {
            window.clearInterval(clock);
            this.content = "重新发送验证码";
            this.totalTime = 60;
            this.canClick = true; //这里重新开启
          }
        }, 1000);
      }
    },

    async deng() {
      let b = await mypar({
        mobile: this.sj,
        password: this.pard,
        sms_code: this.yzm,
      });

      console.log(b);
      console.log(b.data);
      this.$toast("修改密码成功");
      this.$router.push("/my");
    },

    onClickLeft() {},
  },
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
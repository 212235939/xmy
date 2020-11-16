<template>
  <div>
    <div class="div_imgs">
      <img
        src="http://120.53.31.103:84/uploads/image/2020-05-27/sDSSCsWo1oSMRqHp7QqUSDzTeqn2f76nDH4SgAk1.jpeg"
        alt=""
      />
    </div>
    <div class="boxs">
      <div class="qsdw">
        <div>
          <input
            type="text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phone.mobile"
            @blur="test"
          />
        </div>

        <div v-show="hintShow" class="div_cang">{{ hint }}</div>
        <!-- <div v-show="hidden" class="div_cang">{{ namehidden }}</div> -->
        <div class="huo" @click="Vercation">{{ content }}</div>
      </div>
      <div class="qsdw">
        <input type="password" placeholder="请输入验证码" v-model.trim="mm" />
      </div>
    </div>
    <div class="div_login">
      <div>*未注册的手机号将自动注册</div>
      <div @click="logins">使用密码登录</div>
    </div>

    <div class="deng" @click="login">登录</div>
    <div></div>
  </div>
</template>

<script>
import { smsCode, myLogin } from "../api/api.js";
export default {
  data() {
    return {
      mm: "",
      hintShow: false,
      hint: "手机号码格式错误",
      namehidden: "手机码不能为空",
      phone: {
        mobile: "",
        err: false,
        pass: false,
      },
      content: "发送验证码", // 按钮里显示的内容
      totalTime: 60, //记录具体倒计时时间
      canClick: true, //添加canClick
    };
  },
  methods: {
    //当input框失去焦点时进行的事件
    test: function () {
      if (this.phone.mobile == "") {
      }

      console.log("1111");
      const reg = /^1([35789]\d|5[0-35-9]|7[3678])\d{8}$/;
      if (
        this.phone.mobile == "" ||
        this.phone.mobile.length <= 10 ||
        !reg.test(this.phone.mobile)
      ) {
        this.hintShow = true;
        this.hint = "手机号码格式错误";
        this.err = true;
        return false;
      } else {
        this.hintShow = false;
        this.hint = "手机号码正确";
        this.err = false;
        return true;
      }
    },
    //点击获取验证码
    Vercation() {
      var reg = /^1([35789]\d|5[0-35-9]|7[3678])\d{8}$/;
      var regmolie = reg.test(this.phone.mobile);
      if (regmolie) {
        let obj = {
          mobile: this.phone.mobile,
          sms_type: "login", //业务类型
        };
        smsCode(obj);
      } else {
        this.$toast("手机号格式错误");
        return false;
      }

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
      // this.content = this.totalTime + "s后重新发送";
      // setInterval(() => {
      // this.totalTime--;
      //   this.content = this.totalTime + "后重新发送";
      //   console.log(this.totalTime);
      // }, 1000);
    },
    //点击登录
    async login() {
      if (this.phone.mobile.length == 11 && this.mm.length == 6) {
        let date = {
          client: 1,
          mobile: this.phone.mobile,
          sms_code: this.mm,
          type: 2,
        };
        var a = await myLogin(date);
        console.log(a);
        if (a.code == 200) {
          //当is_new的值为1是新用户，跳到find页面去设置页面
          //当is_new的值为2是新用户，跳到my我的页面
          if (a.data.is_new === 1) {
            sessionStorage.mobile = this.phone.mobile;
            sessionStorage.pass = this.mm;
            this.$toast("你是新用户,要设置密码");
            this.$router.push({
              path: "/setpassword",
              query: {
                mobile: this.phone.mobile,
                verification: this.mm,
              },
            });
          } else {
            this.$toast("登录成功");
            this.$router.push("/My");
          }
        }
      } else {
        this.$toast("手机号或验证码输入不正确");
        return false;
      }

      console.log(a.data.remember_token);
      var token1 = a.data.remember_token;
      var token = "Bearer " + token1;
      sessionStorage.token = token;

      //通过判断有没有token来跳页面
      if (sessionStorage.getItem("token")) {
        this.$router.push("/my");
      } else {
        this.$router.push("/register");
      }
    },

    logins() {
      this.$router.push("/sms_login");
    },
  },
};
</script>

<style scoped>
.qsdw {
  width: 100%;
  height: 13.33333vw;
  background-color: #fff;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  /* justify-content: space-between; */
}
.chzc_mi {
  font-size: 0.23rem;
  color: rgb(172, 172, 172);
}
.chzc {
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.boxs {
  padding: 0px 0.4rem;
  height: 2rem;
  box-sizing: border-box;
  margin-top: 1.4rem;
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
  margin-top: 0.14333rem;
  margin-left: 5.2rem;
  /* color: #eb6100; */
  border-radius: 0.04rem;
  position: fixed;
  float: right;
  padding: 0;
  text-align: center;
  font-family: PingFangSC-Regular;
  font-weight: 400;
  line-height: 0.66667rem;
}
.deng {
  width: 5.6rem;
  /* border-radius: 20px; */
  height: 7.5vh;
  line-height: 7.5vh;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  background-image: linear-gradient(
    to right,
    rgb(243, 170, 174),
    rgb(240, 20, 31)
  );
  margin: 1rem auto;
}
.div_cang {
  /* width: 40%; */
  position: relative;
  top: 0.3rem;
  left: -0.3rem;
  color: red;
}
.div_imgs {
  width: 100%;
  height: 5rem;
}

.div_imgs img {
  width: 100%;
  height: 100%;
}
.div_login {
  width: 100%;
  display: flex;
  /* justify-content: space-betweens; */
  /* margin-left: 0.02rem;  */
  margin-top: 0.3rem;
}
.div_login div {
  margin: 0rem 0.4rem;
  color: gray;
}
</style>
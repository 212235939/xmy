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
            oninput="value=value.replace(/[^\d]/g,'')"
          />
        </div>

        <div v-show="hintShow" class="div_cang">{{ hint }}</div>
      </div>
      <div class="qsdw">
        <input type="password" placeholder="请输入密码" v-model.trim="mm" />
      </div>
    </div>
    <div class="div_login">
      <div @click="pass">找回密码</div>
      <div @click="logins">注册/验证码登录</div>
    </div>

    <div class="deng" @click="login">登录</div>
    <div></div>
  </div>
</template>

<script>
import { myLogin } from "../api/api.js";
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
    };
  },
  methods: {
    //当input框失去焦点时进行的事件
    test: function () {
      console.log("1111");
      const reg = /^1([38]\d|5[0-35-9]|7[3678])\d{8}$/;
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
    Vercation() {},
    //点击登录
    async login() {
      // if (this.phone.mobile == 18937715713 && this.mm == "yqb5211314") {
      let date = {
        mobile: this.phone.mobile,
        password: this.mm,
        type: 1,
      };
      var a = await myLogin(date);
      console.log(a);
      if (a.code == 200) {
        var token1 = a.data.remember_token;
        var token = "Bearer " + token1;
        sessionStorage.token = token;
        this.$toast("登录成功");
        setTimeout(() => {
          this.$router.push("/my"); 
        });
      } else {
        this.$toast(a.msg);
      }
      // } else {
      //   this.$toast("请输入正确的手机号或密码");
      // }

      // } else {
      //   this.$toast("用户不存在,请先注册");
      //   this.$router.push("/register");
      // }
    },

    logins() {
      this.$router.push("/register");
    },
    pass() {
      this.$router.push("/find");
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
  justify-content: space-betweens;
  margin-left: -0.6rem;
  margin-top: 0.3rem;
}
.div_login div {
  margin: 0rem 1.1rem;
  color: gray;
}
</style>
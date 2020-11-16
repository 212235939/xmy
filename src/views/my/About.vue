<template>
  <div>
    <div class="box">
      <div class="body">
        <!-- User-logo -->
        <div class="user-logo">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019pILfAg7Avr1567732916.png"
            alt=""
          />
        </div>
        <div class="login">
          <!-- 表单 -->
          <div class="from">
            <!-- <van-form> -->
              <van-field
                v-model="mobile"
                placeholder="请输入用户名"
                class="active"
              />
              <van-field v-model="sms_code" placeholder="请输入验证码" />
              <div @click="getCode" ref="cod" class="chong_xin">
                {{ content }}
              </div>
              <!-- <van-count-down :time="time" format="ss 秒" /> -->
              <!-- 验证 -->
              <div class="proving">
                <span @click="find">找回密码</span>
                <span @click="add('/Register')">注册/验证码登录</span>
              </div>
              <div style="margin: 16px">
                <van-button round block @click="login" class="btn"
                  >登录</van-button
                >
              </div>
            <!-- </van-form> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { getSmsCode, getLongin } from "./api/api";
import { Toast } from "vant";
export default {
  data() {
    return {
      mobile: "", //用户名
      sms_code: "", //验证码
      neckname: [],
      content: "点击发送验证码",
      totalTime: 60,
      btnBool: false,
      // time: 60 * 1000,
    };
  },
  created() {
    var neckname = localStorage.neckname;
    if (neckname) {
      this.neckname = JSON.parse(neckname);
    }
  },
  mounted() {
    // console.log(this.totalTime);
    // this.$refs.cod.innerHTML = this.content;
  },
  methods: {
    find() {
      this.$router.push({ path: "/find" });
    },

    add(path) {
      if (this.mobile == localStorage.token) {
        this.$router.push({
          path,
          query: {
            mobile: this.mobile,
          },
        });
      }
    },
    getCode() {
      // 正则验证手机号1231231134343
      var regMobile = /^1[35789][0-9]{9}$/;
      var regMobileRes = regMobile.test(this.mobile);
      if (regMobileRes) {
        let data = {
          // client:1, 	//1	学生端	2	老师端
          mobile: this.mobile,
          sms_type: "login", //业务类型 登录
          // type:2, //type 是	int	1账号密码登录	2短信验证码登录
        };
        this.content = this.totalTime + "s后重新发送";
        setInterval(() => {
          this.totalTime--;
          this.content = this.totalTime + "s后重新发送";
          console.log(this.content);
        }, 1000);
      } else {
        Toast({
          message: "请输入正确的手机号",
        });
      }

      // console.log(obj);

      // console.log(this.$refs.cod);
    },
    async login() {
      //点击登录事件
      let datas = {
        mobile: this.mobile,
        type: 2,
        client: 1,
        sms_code: this.sms_code,
      };

      var obj = await getLongin(datas);
      console.log(obj.data.nickname);
      var name = obj.data.nickname;
      this.neckname.push(name);
      localStorage.neckname = JSON.stringify(this.neckname);
      // localStorage.neckname=neckname;
      this.$router.push({ path: "/My" });
    },
  },
};
</script>
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
  height: 0.9rem;
}
/* 点击激活 */
.active {
  border-bottom: #fd6d1c;
}
.box {
  position: relative;
}
.chong_xin {
  position: absolute;
  width: 1.8rem;
  /* border: 1px solid #000; */
  top: 4.1rem;
  left: 5.6rem;
  font-size: 0.25rem;
  color: #999999;
}
</style>



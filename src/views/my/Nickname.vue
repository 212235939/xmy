<template>
  <div>
    <div class="div_header">
      <div @click="icon"><van-icon name="arrow-left" size="20" /></div>
      <div>修改个人信息</div>
      <div @click="bao">保存</div>
    </div>
    <div class="div_sty2"></div>
    <div class="div_sty">
      <input type="text" class="input" v-model="username" />
    </div>
  </div>
</template>

<script>
import { MyMy, MySex } from "../../views/api/api.js";
export default {
  data() {
    return {
      username: "",
    };
  },
  methods: {
    icon() {
      this.$router.push("/pim");
    },
    bao() {
      MySex({ nickname: this.username }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push("/pim");
          this.$toast("昵称更新成功");
        }
      });
    },
  },
  mounted() {
    //请求数据来获取登录后的用户名
    MyMy().then((res) => {
      console.log(res);
      if (res.data.code == 200) {
        this.username = res.data.data.nickname;
        console.log(this.username);
      } else {
        this.$toast(res.data.msg);
      }
    });
  },
};
</script>

<style scoped>
.div_header {
  width: 95%;
  height: 1rem;
  /* background-color: floralwhite; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.34rem;
  color: gray;
}

.div_sty {
  width: 100%;
  height: 12rem;
  background-color: rgb(233, 233, 240);
}
.div_sty2 {
  width: 100%;
  height: 0.2rem;
  background-color: rgb(245, 241, 241);
}
.input {
  width: 98%;
  height: 0.8rem;
  border: 1px solid white;
}
</style>
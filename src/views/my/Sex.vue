<template>
  <div>
    <div v-for="(item, index) in sex" :key="index" @click="add(item)">
      <div class="box1">
        <div>{{ item.title }}</div>
        <div :class="['ccc', { cll: index == ind }]">{{ item.hao }}</div>
      </div>

      <van-goods-action>
        <van-goods-action-button
          type="danger"
          text="立即修改"
          @click="onClickButton(item)"
        />
      </van-goods-action>
    </div>
  </div>
</template>

<script>
import { MySex } from "../api/api.js";
export default {
  data() {
    return {
      ind: 0,
      innn: "",
      sex: [
        { title: "男", hao: "✔", index: "0", indexxx: "0" },
        { title: "女", hao: "✔", index: "1", indexxx: "1" },
        { title: "保密", hao: "✔", index: "2", indexxx: "3" },
      ],
    };
  },
  methods: {
    add(item) {
      this.ind = item.index;
      this.innn = item.indexxx;
    },
    //点击立即购买
    onClickButton() {
      console.log("36", this.innn);
      MySex({ sex: this.innn }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          this.$router.push('/pim')
          this.$toast("性别数据更新成功")
        } else {
          this.$toast(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped>
.box1 {
  display: flex;
  justify-content: space-between;
  border-bottom: 0.01rem solid rgb(226, 224, 224);
  margin-top: 0.2rem;
}
.box1 div {
  width: 2rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
}
.ccc {
  display: none;
}
.cll {
  color: red;
  display: block;
}
</style>
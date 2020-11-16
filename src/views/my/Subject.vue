<template>
  <div>
    <div class="div_header">
      <div @click="icon"><van-icon name="arrow-left" size="20" /></div>
      <div>修改个人信息</div>
      <div @click="baocun">保存</div>
    </div>
    <div class="div_sty2"></div>
    <div class="div_sty">
      <div class="div_input" v-for="(item, index) in list" :key="index">
        <input type="checkbox" name="" id="check" @click="checkbox(item)" />
        <div class="div_title">{{ item }}</div>
      </div>
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        "语文",
        "数学",
        "物理",
        "英语",
        "化学",
        "生物",
        "政治",
        "信息技术",
      ],
      Regislist: [],
      item: "",
    };
  },
  methods: {
    icon() {
      this.$router.push("/pim");
    },
    checkbox(item, index) {
      console.log(item);
      console.log(event.target.checked);
      //判断checkbox框选中不选中返回的true和false值
      if (event.target.checked) {
        this.Regislist.push(item);
        console.log(this.Regislist);
      } else {
        console.log("222");
        this.Regislist.splice(item, 1);
        console.log(this.Regislist);
      }
      var items = this.Regislist;
      console.log(items);
      this.item = items.join("  ,");//把数组转为字符串
    },
    baocun() {},
  },
  created() {},
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
#check {
  width: 0.5rem;
  height: 0.5rem;
  margin-top: 0.2rem;
  margin-left: 0.4rem;
}
.div_input {
  width: 100%;
  height: 1rem;
  background-color: white;
  /* border:1px solid black; */
  border-bottom: 1px solid gainsboro;
  /* text-align: center; */
}
.div_title {
  width: 20%;
  position: relative;
  top: -0.5rem;
  left: 1.2rem;
  font-size: 0.31rem;
  font-family: "宋体";
}
.div_sty2 {
  width: 100%;
  height: 0.2rem;
  background-color: rgb(245, 241, 241);
}
</style>
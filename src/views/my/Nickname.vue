<template>
  <div>
    <div class="div_header">
      <div @click="icon"><van-icon name="arrow-left" size="20" /></div>
      <div>修改个人信息</div>
      <div>保存</div>
    </div>
    <div class="div_sty2"></div>
    <div class="div_sty">
      <input type="text" class="input" ref="inputs" placeholder="1893****713"/>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    icon() {
      this.$router.push("/pim");
    },
  },
  created() {
    // this.$refs.inputs.innertext = "18937715713";
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
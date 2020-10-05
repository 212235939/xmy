<template>
  <div>
    <div class="div_header">
      <div @click="icon"><van-icon name="arrow-left" size="20" /></div>
      <div>修改个人信息</div>
      <div>保存</div>
    </div>
    <div class="div_sty2"></div>
    <div class="div_sty">
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">语文</div>
      </div>

      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">数学</div>
      </div>

      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">物理</div>
      </div>
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">英语</div>
      </div>
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">化学</div>
      </div>
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">生物</div>
      </div>
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">政治</div>
      </div>
      <div class="div_input">
        <input type="checkbox" name="" id="check" />
        <div class="div_title">信息技术</div>
      </div>
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
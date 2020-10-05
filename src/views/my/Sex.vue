<template>
  <div>
    <div class="div_header">
      <div @click="icon"><van-icon name="arrow-left" size="20" /></div>
      <div>修改个人信息</div>
      <div>保存</div>
    </div>
    <div class="div_body">
      <div class="div_foter" v-for="(item, index) in lists" :key="index">
        <div class="div_boy" @click="sss(index)">
          <div class="div_boy2">{{ item.title }}</div>
          <div class="div_foter_icon">
            <van-icon name="success" color="orange" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [{ title: "男" }, { title: "女" }],
    };
  },
  methods: {
    icon() {
      this.$router.push("/pim");
    },
    sss(index) {
      console.log(index);
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
.div_body {
  width: 100%;
  height: 12.3rem;
  background-color: rgb(223, 223, 223);
}
.div_foter {
  width: 100%;
  height: 1rem;
  background-color: white;
  position: relative;
  top: 0.2rem;
  border-bottom: 1px solid rgb(223, 223, 223);
}
.div_boy {
  width: 100%;
  height: 100%;
  /* background-color: violet;  */
  font-size: 0.3rem;
}
/* .div_sex {
  width: 100%;
  height: 50%;
  /* background-color: yellow; */
/* font-size: 0.3rem;
} */
.div_boy2 {
  position: relative;
  top: 0.2rem;
  /* left: 0.2rem; */
  margin-left: 0.3rem;
}

.div_foter_icon {
  margin-left: 6.4rem;
}
</style>
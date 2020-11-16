<template>
  <div>
    <div class="div_tab">
      <div
        v-for="(item, index) in ListItem"
        :key="item.type"
        :class="defultIndex == index ? 'active' : ''"
        @click="IndexClick(index)"
      >
        <div>{{ item.name }}({{ Num.length }})</div>
      </div>
    </div>
    <div class="div_box1" v-show="show" v-for="index in 5" :key="index"></div>

    <div class="div_box2" v-show="tabshow"></div>
  </div>
</template>

<script>
import { Mystouy } from "../../views/api/api.js";
export default {
  data() {
    return {
      ListItem: [],
      defultIndex: 0,
      show: true,
      tabshow: false,
      Num: "",
    };
  },
  async mounted() {
    var a = await Mystouy();
    console.log(a.data.data.courseList.length);
    this.Num = a.data.data.courseList;
    this.ListItem = a.data.data.typeNum;
  },
  methods: {
    IndexClick(index) {
      console.log(index);
      this.defultIndex = index;
      if (index == 0) {
        this.show = true;
        this.tabshow = false;
      } else if (index == 1) {
        this.show = false;
        this.tabshow = true;
      }
    },
  },
};
</script>

<style scoped>
.div_tab {
  width: 100%;
  height: 1rem;
  /* background-color: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.37rem;
  color: gray;
  font-family: "宋体";
}
.active {
  color: red;
  border-bottom: 2px solid red;
}
.div_box1 {
  width: 90%;
  height: 2rem;
  background-color: blueviolet;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 0.3rem;
}
.div_box2 {
  width: 90%;
  height: 2rem;
  background-color: chartreuse;
  box-sizing: border-box;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 0.3rem;
}
</style>
<template>
  <div>
    <div class="div_header_nav">
      <div class="Size iconfont icon-zuojiantou" @click="back"></div>
      <div style="color: red">一对一辅导</div>
      <div class="Size iconfont icon-icon-search"></div>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item title="选择上课时间">
        <div class="div_van_item">
          <div class="div_prop_absolut">
            <div>日期</div>
            <div class="div_dates">
              <div>周一</div>
              <div>周二</div>
              <div>周三</div>
              <div>周四</div>
              <div>周五</div>
              <div>周六</div>
              <div>周日</div>
            </div>
            <div class="div_div_index">
              <div
                v-for="(item, index) in dateList"
                :key="index"
                class="div_indexs"
                @click="DateIndex(index)"
                :class="DateIndexs === index ? 'dateactive' : ''"
              >
                {{ item }}
              </div>
            </div>
          </div>
          <div class="div_pupo_footer">
            <div class="div_pupo_footer_div1">
              <div style="margin-top: 0.3rem">重置</div>
            </div>
            <div class="div_pupo_footer_div2">
              <div style="margin-top: 0.3rem">确认</div>
            </div>
          </div>
        </div>
      </van-dropdown-item>
      <van-dropdown-item title="选择老师条件">
        <div style="margin-top: 0.2rem; font-size: 0.3rem">老师类型</div>
        <div class="div_box_open" style="margin-top: 0.2rem">
          <div class="div_box1">
            <div
              v-for="(item, index) in SizeList"
              :key="index"
              class="div_open"
              :class="defultIndex === index ? 'active' : ''"
              @click="defult(index)"
            >
              {{ item.title }}
            </div>
          </div>

          <p>只看</p>
          <div class="div_checkbox">
            <van-checkbox v-model="boy">已关注</van-checkbox>
            <van-checkbox v-model="fiy">上过课的</van-checkbox>
          </div>
          <p>性别:</p>
          <div class="div_class_sex">
            <div v-for="(item, index) in sexList" :key="index" class="div_sex">
              <div
                :class="seleIndex == index ? 'sexactive' : ''"
                @click="SexClick(index)"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div class="div_pupo_footer">
            <div class="div_pupo_footer_div1">
              <div style="margin-top: 0.3rem">重置</div>
            </div>
            <div class="div_pupo_footer_div2">
              <div style="margin-top: 0.3rem">确认</div>
            </div>
          </div>
          <div style="margin-top: 0.2rem; font-size: 0.3rem">年级</div>

          <div class="div_box2">
            <div
              v-for="(item, index) in comeslist"
              :key="index"
              class="div_open1"
              :class="defultIndex === index ? 'active' : ''"
              @click="defult(index)"
            >
              {{ item.title }}
            </div>
          </div>
          <div>学科</div>
          <div class="div_box3">
            <div
              v-for="(item, index) in SubjectList"
              :key="index"
              class="div_open1"
              :class="Index === index ? 'active' : ''"
              @click="OnIndex(index)"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>
    <div class="div_body_hidden">
      <div class="div_body_box" v-for="index in 15" :key="index">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button @click="Teacher">预约</button></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [{ text: "全部商品", value: 0 }],
      option2: [{ text: "默认排序", value: "a" }],
      boy: false,
      fiy: false,
      SizeList: [
        { title: "M1" },
        { title: "M2" },
        { title: "M3" },
        { title: "M4" },
        { title: "M5" },
        { title: "M6" },
        { title: "M7" },
        { title: "M8" },
        { title: "M9" },
        { title: "M10" },
        { title: "M11" },
        { title: "M12" },
        { title: "M13" },
        { title: "M14" },
        { title: "M15" },
        { title: "M16" },
        { title: "M17" },
        { title: "M18" },
        { title: "M19" },
        { title: "M20" },
      ],
      comeslist: [
        { title: "小学一年级" },
        { title: "小学二年级" },
        { title: "小学三年级" },
        { title: "小学四年级" },
        { title: "小学五年级" },
        { title: "小学六年级" },
        { title: "初一" },
        { title: "初二" },
        { title: "初三" },
        { title: "高一" },
        { title: "高二" },
        { title: "高三" },
      ],
      SubjectList: ["语文", "数学", "英语", "物理", "化学", "生物", "信息技术"],
      defultIndex: 0,
      seleIndex: 0,
      Index: 0,
      sexList: ["男", "女"],
      dateList: [
        "28",
        "29",
        "30",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
      ],
      DateIndexs: 0,
    };
  },
  methods: {
    back() {
      window.history.back();
    },
    Teacher() {
      this.$router.push("/bookdetails");
    },
    defult(index) {
      this.defultIndex = index;
    },
    SexClick(index) {
      console.log(index);
      this.seleIndex = index;
    },
    OnIndex(index) {
      this.Index = index;
    },
    DateIndex(index) {
      console.log(index);
      this.DateIndexs = index;
    },
  },
};
</script>

<style scoped>
.div_header_nav {
  width: 99%;
  height: 1rem;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  position: fixed;
  top: 0rem;
  background-color: white;
  /* color:gainsboro; */
}
.Size {
  font-size: 0.5rem;
}
.div_body_box {
  width: 100%;
  height: 1.4rem;
  background-color: white;
  margin: 10px 10px 0px 0px;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.div_body_box:hover {
  width: 100%;
  box-shadow: 0 5px 15px rgba(1, 1, 1, 1);
}
.div_body_box2 {
  width: 30%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body_box2 img {
  width: 50%;
  height: 70%;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.div_body_box3 {
  width: 40%;
  height: 100%;
  /* background-color: yellow; */
}
.div_body_box4 {
  width: 30%;
  height: 100%;
  /* background-color: yellowgreen; */
  /* text-align: center; */
  display: flex;
  align-items: center;
}
.div_body_box4 button {
  width: 1.3rem;
  height: 0.7rem;
  border-radius: 1rem;
  background-color: gainsboro;
  border: 1px solid gainsboro;
  color: red;
}
.div_body_hidden {
  width: 100%;
  height: 22rem;
  background-color: rgb(238, 233, 211);
}
.div_body_box3_div1 {
  width: 100%;
  height: 60%;
  /* background-color: violet; */
  font-size: 0.34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div_body_box3_div2 {
  width: 100%;
  height: 40%;
  /* background-color: salmon; */
  color: rgb(192, 178, 178);
}
.teacher {
  width: 100%;
  height: 1rem;
  background-color: white;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
}
.teacher div {
  width: 50%;
  height: 100%;
  /* border:1px solid black; */
  font-size: 0.35rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 0.6rem;
  color: orange;
}
.div_open {
  width: 1.1rem;
  height: 0.6rem;
  line-height: 0.6rem;
  /* border: 1px solid red; */
  background-color: rgb(247, 240, 240);
  margin: 0rem 0.57rem 0.2rem 0.2rem;
  text-align: center;
  color: rgb(134, 147, 155);
}
.div_open1 {
  width: 1.7rem;
  height: 0.6rem;
  line-height: 0.6rem;
  /* border: 1px solid red; */
  background-color: rgb(247, 240, 240);
  margin: 0rem 0.16rem 0rem 0rem;
  text-align: center;
  color: rgb(134, 147, 155);
}
.div_box_open {
  width: 100%;
  height: 14rem;
}
.div_box1 {
  width: 100%;
  height: 5rem;
  display: flex;
  flex-wrap: wrap;
}
.div_box2 {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
}
.div_box3 {
  width: 100%;
  height: 2rem;
  display: flex;
  flex-wrap: wrap;
}
.active {
  color: red;
  background: gainsboro;
}
.div_checkbox {
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.div_class_sex {
  width: 60%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
}
.div_sex {
  width: 1.4rem;
  height: 0.6rem;
  background-color: rgb(214, 247, 174);
  margin: 0rem 0.3rem;
  font-size: 0.33rem;
  text-align: center;
}
.sexactive {
  color: red;
  background-color: gainsboro;
  height: 100%;
  font-weight: bold;
}
.div_pupo_footer {
  width: 100%;
  height: 1.2rem;
  background-color: gold;
  position: fixed;
  bottom: 0rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_pupo_footer_div1 {
  width: 50%;
  height: 100%;
  background-color: whitesmoke;
  font-size: 0.4rem;
  color: orange;
  text-align: center;
}
.div_pupo_footer_div2 {
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: orange;
  font-size: 0.4rem;
  color: white;
}
.div_dates {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_prop_absolut {
  width: 95%;
  height: 4rem;
  /* border: 1px solid black; */
  background-color: white;
  margin-left: 0.14rem;
  position: relative;
  top: 0.3rem;
  border-radius: 0.2rem;
}
.div_van_item {
  width: 100%;
  height: 5rem;
  background-color: rgb(238, 234, 234);
}
.div_indexs {
  width: 0.6rem;
  height: 0.5rem;
  /* background-color: violet; */
  margin: 0rem 0.18rem;
  margin-top: 0.4rem;
}
.div_div_index {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.34rem;
  text-align: center;
}
.dateactive {
  /* height: 0.6rem; */
  width: 0.5rem;
  height: 0.5rem;
  align-items: center;
  background: red;
  border-radius: 50%;
  color: white;
}
</style>
<template>
  <div>
    <div class="div_book_header">
      <van-icon name="arrow-left" @click="back" style="margin-top: 0.3rem" />
      <div class="div_book_title">预约课程</div>
    </div>

    <div class="div_body_box">
      <div class="div_body_box2">
        <img
          src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
          alt=""
        />
      </div>
      <div class="div_body_box3">
        <div class="div_body_box3_div1">李凡</div>
        <div class="div_body_box3_div2">男 10年教龄</div>
      </div>
      <div class="div_body_box4">
        <button @click="gun">查看详情</button>
      </div>
    </div>
    <div class="div_book_date">选择时间(北京时间)</div>

    <div class="div_book_contenter">
      <div class="div_book_wrapper">
        <div
          v-for="(item, index) in DateList"
          :key="index"
          class="div_book_boxs"
          @click="DeleIndex(index)"
          :class="SeleteIndex === index ? 'active' : ''"
        >
          <div class="div_book_b1">{{ item.Several }}</div>
          <div class="div_book_b2">{{ item.date }}</div>
        </div>
      </div>
    </div>

    <div class="div_imgs">
      <img src="../../images/老师详情.png" alt="" />
    </div>
    <div class="div_book_footer" @click="yu_yue">
      <div style="margin-top:0.17rem">立即预约</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      SeleteIndex: 0,
      DateList: [
        {
          Several: "周一",
          date: "09/28",
        },
        {
          Several: "周二",
          date: "09/29",
        },
        {
          Several: "周三",
          date: "09/30",
        },
        {
          Several: "周四",
          date: "10/01",
        },
        {
          Several: "周五",
          date: "10/02",
        },
        {
          Several: "周六",
          date: "10/03",
        },
        {
          Several: "周日",
          date: "10/04",
        },

        {
          Several: "周一",
          date: "10/05",
        },
        {
          Several: "周二",
          date: "10/06",
        },
        {
          Several: "周三",
          date: "10/07",
        },
        {
          Several: "周四",
          date: "10/08",
        },
        {
          Several: "周五",
          date: "10/09",
        },
        {
          Several: "周六",
          date: "10/10",
        },
        {
          Several: "周日",
          date: "10/11",
        },
      ],
    };
  },
  methods: {
    DeleIndex(index) {
      console.log(index);
      this.SeleteIndex = index;
    },
    back() {
      this.$router.push("/onetutoring");
    },
    gun() {
      this.$router.push("/teacher_details");
    },
    yu_yue() {
      this.$toast("请先选择预约时间");
    },
  },
};
</script>

<style scoped>
.div_book_header {
  width: 100%;
  height: 2rem;
  background-color: rgb(56, 147, 233);
  font-size: 0.4rem;
  display: flex;
  justify-content: space-between;
  /* align-items: center; */
  color: white;
}
.Size {
  font-size: 0.6rem;
  margin-top: 0.2rem;
}
.div_book_title {
  position: relative;
  left: -3rem;
  margin-top: 0.2rem;
}

.div_body_box {
  width: 95%;
  height: 1.6rem;
  background-color: white;
  margin: 10px 10px 0px 0px;
  border-radius: 0.1rem;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-left: 0.2rem;
  margin-top: -1rem;
}

.div_body_box2 {
  width: 20%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body_box2 img {
  width: 50%;
  height: 50%;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.div_body_box3 {
  width: 50%;
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
  width: 1.5rem;
  height: 0.6rem;
  border-radius: 0.6rem;
  border: 1px solid orange;
  background-color: white;
  color: red;
}
.div_body_hidden {
  width: 100%;
  height: 25rem;
  background-color: rgb(238, 233, 211);
}
.div_body_box3_div1 {
  width: 100%;
  height: 60%;
  /* background-color: violet; */
  font-size: 0.3rem;
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
.div_book_date {
  margin-top: 0.2rem;
  margin-left: 0.4rem;
  color: gray;
  font-size: 0.34rem;
}
.div_book_contenter {
  width: 93%;
  height: 1.4rem;
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  /* white-space: nowrap; */
  /* border: 1px solid red; */
  margin-top: 0.2rem;
  margin-left: 0.3rem;
  background-color: rgb(248, 244, 244);
  text-align: center;
}
.div_book_wrapper {
  height: 1.4rem;
  display: flex;
  overflow: scroll;
}
.div_book_wrapper::-webkit-scrollbar {
  display: none;
}
.div_book_boxs {
  /* width: 3rem; */
  height: 0.7rem;
  /* border: 1px solid red; */
  margin: 0px 0.2rem;
  text-align: center;
}
.div_book_b1 {
  font-weight: 100;
  margin-top: 0.19rem;
}
.div_book_b2 {
  margin-top: 0.1rem;
}
.active {
  color: orange;
  height: 1.1rem;
  border-radius: 0.06rem;
  border-bottom: 3px solid blue;
}
.div_imgs {
  width: 100%;
  height: 7.7rem;
  /* border: 1px solid black; */
  text-align: center;
  background-color: rgb(238, 238, 247);
}
.div_imgs img {
  width: 4rem;
  height: 4rem;
}
.div_book_footer {
  width: 100%;
  height: 0.8rem;
  background-color: rgb(231, 93, 28);
  position: fixed;
  bottom: 0rem;
  font-size: 0.34rem;
  color: white;
  text-align: center;
}
</style>
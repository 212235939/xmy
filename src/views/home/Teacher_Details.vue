<template>
  <div>
    <div class="box">
      <div class="div_details">
        <div class="div_icon2">
          <van-icon name="arrow-left" size="20" color="white" @click="asd" />
        </div>
        <div class="div_title2">讲师详情</div>
      </div>
      <div class="div_top3"></div>

      <div class="teacher">
        <div class="teacher_img">
          <img :src="imgs" class="img1" alt />
        </div>
        <div class="teacher_con">
          <div class="teacher_con_div1">
            {{ names }}
            <span class="span1" style="font-size: 10px">M20</span>
          </div>
          <div class="teacher_con_div2">男 30年教龄</div>
        </div>

        <div class="teacher_btn">
          <van-button round type="info" class="guan_zhu" @click="guan">{{
            title
          }}</van-button>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="contents">
        <van-tabs v-model="active" title-active-color="rgb(238,97,82)">
          <van-tab title="讲师介绍" class="jie_shao">
            <div v-show="this.SpeakerList == ''" class="div_xianshi">
              <div class="div_names">暂时没有任何介绍幺</div>
              <img
                src="https://img95.699pic.com/photo/50166/7784.jpg_wh860.jpg!/both/590x400"
                alt=""
              />
            </div>

            <div class="div_course">
              {{ Course }}
            </div>

            <van-button type="warning" class="yu_yue" color="rgb(235,97,0)"
              >立即预约</van-button
            >
          </van-tab>
          <van-tab title="主要课程" class="ke_cheng">
            <div v-show="this.SpeakerList == ''" class="div_xianshi">
              <div class="div_names">现在暂时没有课程</div>
              <img
                src="https://tse2-mm.cn.bing.net/th/id/OIP.F57ksHlKRmnM6mBeOLKNPQHaKe?w=129&h=182&c=7&o=5&dpr=1.25&pid=1.7"
                alt=""
              />
            </div>
            <div
              v-for="(item, index) in SpeakerList"
              :key="index"
              class="div_space"
            >
              <div class="div_space2">
                <img :src="item.cover_img" alt="" />
              </div>
              <div class="div_space3">
                <div class="div_spaces2">
                  <div class="div_ttt">{{ item.title }}</div>
                </div>
                <div class="div_spaces3">
                  <div class="divs_space">
                    <div class="div_ttt2">{{ item.sales_num }}人已报名</div>
                  </div>
                  <div class="divs2_space">
                    <div class="div_ttt2">免费</div>
                  </div>
                </div>
              </div>
            </div>

            <van-button type="warning" class="yu_yue2" color="rgb(235,97,0)"
              >立即预约</van-button
            >
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
import { Indexinfo, Indexteacher, Indexspeaker } from "../api/api.js";
export default {
  data() {
    return {
      Course: "",
      active: 0,
      title: "关注",
      t: "已关注",
      names: "",
      imgs: "",
      SpeakerList: [],
    };
  },
  methods: {
    asd() {
      this.$router.go(-1);
    },
    guan() {
      this.$toast("已关注");
      this.title = "已关注";
    },
  },

  async mounted() {
    var taeid = this.$route.query.id;
    console.log(taeid);
    var a = await Indexinfo(taeid);
    console.log(a.data.data.intro);
    this.Course = a.data.data.intro;

    //讲师表头信图片以及名字
    var teacher = await Indexteacher(taeid);
    console.log(teacher.data.data.teacher);
    this.imgs = teacher.data.data.teacher.avatar;
    this.names = teacher.data.data.teacher.real_name;

    //请求讲师主讲课程数据
    var speaker = await Indexspeaker({ page: 1, limit: 10, teacher_id: taeid });
    console.log(speaker.data.list);
    this.SpeakerList = speaker.data.list;
  },
};
</script>
<style scoped>
.a {
  margin-left: 0.2rem;
  font-size: 11px;
  color: rgb(140, 140, 140);
}
.t_one {
  width: 94%;
  height: 42%;
  margin: 0 auto;
  line-height: 0.5rem;
}
.t_two {
  height: 30%;
  display: flex;
  align-items: center;
  width: 90%;
  border-bottom: 1px solid #f5f5f5;
  margin: 0 auto;
}
.t_three {
  width: 100%;
  height: 26%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.t_three > div {
  width: 2rem;
  display: flex;
  justify-content: space-around;
}
.imgqwe {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-left: -0.1rem;
}
.t {
  width: 100%;
  height: 3.8rem;
  margin-top: 0.45rem;
  padding-top: 0.3rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-content: space-around;
}
.div_top3 {
  width: 100%;
  /* justify-self: 1rem; */
  height: 1rem;
  background-color: rgb(247, 242, 242);
}
.r_one {
  font-size: 12px;
  color: rgb(140, 140, 140);
}
.div_icon2 {
  position: relative;
  left: 0.4rem;
  top: 0.2rem;
}
.teacher_con_div2 {
  margin-top: 0.1rem;
  color: gray;
}
.div_title2 {
  position: relative;
  left: -3rem;
  font-size: 0.37rem;
  /* font-family: "宋体"; */
  color: white;
  top: 0.2rem;
}
.teacher_con_div1 {
  margin-top: 0.4rem;
}
.div_details {
  width: 100%;
  height: 2rem;
  background-color: rgb(95, 175, 250);
  display: flex;
  justify-content: space-between;
}
.box {
  width: 100%;
  height: 3rem;
}

.img1 {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50px;
  margin-top: 0.4rem;
  margin-left: 0.4rem;
}
.img2 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50px;
}
.teacher {
  display: flex;
  justify-content: space-around;
  width: 95%;
  height: 1.8rem;
  background-color: #fff;
  border-radius: 5px;
  margin: 5px auto;
  /* border: 1px solid red; */
  position: relative;
  top: -2.2rem;
  z-index: 6666666;
}
.teacher_img {
  width: 20%;
  height: 70%;
}
.teacher_con {
  width: 50%;
  height: 70%;
}
.teacher_btn {
  width: 23%;
  height: 70%;
  /* position: relative; */
  /* top: 0.5rem;
  left: 0.4rem; */
  line-height: 1.5rem;
}
.guan_zhu {
  background: rgba(235, 238, 254);
  color: rgb(235, 97, 82);
  border: none;
  width: 22.53335vw;
  height: 8.46667vw;
  font-family: "楷书";
}
.span1 {
  color: orange;
  font-size: 10px;
}
.p2 {
  color: grey;
}

.van-tab {
  font-size: 15px;
}

.yu_yue {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 1rem;
}
.jie_shao {
  position: relative;
}
.yu_yue2 {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 1rem;
}

.yu_yue3 {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 1rem;
}
/* p {
  margin-top: 0.5rem;
} */
.content {
  width: 100%;
  /* height: 100%; */
  /* border: 1px solid red; */
}
.contents {
  width: 100%;
  /* overflow: scroll; */
}
.div_course {
  font-size: 0.34rem;
  width: 70%;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
  color: gray;
}
.div_space {
  width: 94%;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  height: 2.3rem;
  /* background-color: green; */
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.div_space2 {
  width: 40%;
  height: 100%;
  /* background-color: hotpink; */
}
.div_space2 img {
  width: 90%;
  height: 90%;
  border-radius: 0.2rem;
}
.div_space3 {
  width: 60%;
  height: 100%;
  /* background-color: skyblue; */
}
.div_spaces2 {
  width: 100%;
  height: 50%;
  /* background-color: violet; */
  font-size: 0.32rem;
}
.div_spaces3 {
  width: 94%;
  height: 50%;
  /* background-color: tomato; */
  display: flex;
  justify-content: space-between;
}
.div_ttt {
  position: relative;
  top: 0.5rem;
}
.div_ttt2 {
  position: relative;
  top: 0.4rem;
}
.divs_space {
  color: gray;
}
.divs2_space {
  font-size: 0.32rem;
  color: green;
}
.div_xianshi {
  width: 100%;
  height: 8rem;
  text-align: center;
}
.div_xianshi img {
  width: 90%;
  height: 90%;
  border-radius: 30px;
}
.div_names {
  position: relative;
  top: 0.6rem;
  color: red;
  font-size: 0.34rem;
  font-family: "宋体";
}
</style>
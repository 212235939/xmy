<template>
  <div>
    <div class="box">
      <div class="box_top">
        <van-nav-bar title="讲师详情" @click-left="onClickLeft">
          <template #left>
            <van-icon name="arrow-left" color="white" />
          </template>
        </van-nav-bar>
        <div class="teacher">
          <div class="teacher_img">
            <img src="../../assets/tou_xiang.jpg" class="img1" alt="" />
          </div>
          <div class="teacher_con">
            <p>杨德胜<span class="span1">m20</span></p>
            <p class="p2">男 30年教龄</p>
          </div>
          <div class="teacher_btn">
            <van-button round type="info" class="guan_zhu" @click="guan">{{
              title
            }}</van-button>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <van-tabs v-model="active">
        <van-tab title="讲师介绍" class="jie_shao">
          <p class="age">教学年龄<span class="s_age">30年</span></p>
          <p class="price">授课价格<span class="s_price">400学习币</span></p>
          <div class="jian_jie">
            <div class="left">老师简介</div>
            <div class="right">
              杨老师，特级教师，多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学核竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次，获全国高中联赛有数百人此获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。特别是今年大学生实行自主招生，有很多同学通过上他的辅导课进入清华大学，北京大学，上个还交通大学等。
            </div>
          </div>
          <van-button type="warning" class="yu_yue">立即预约</van-button>
        </van-tab>
        <van-tab title="主要课程" class="ke_cheng">
          <div class="main" v-for="(item, index) in 10" :key="index">
            <p class="main_p">
              每时每刻特级教师——自主招生冲刺讲座10-二次函数4--存在性问题
            </p>
            <span class="ke_shi">共一课时</span>
            <div class="ming_zi">
              <img src="../../assets/tou_xiang.jpg" alt="" class="img2" /><span
                class="ming"
                >杨德胜</span
              >
            </div>
            <hr />
            <div class="bao_ming">
              <span class="s_bao_ming">61人已报名</span>
              <span class="s_mian_fei">免费</span>
            </div>
          </div>
          <van-button type="warning" class="yu_yue2">立即预约</van-button>
        </van-tab>
        <van-tab title="学员评价" class="ping_jia">
          <div class="picture">
            <img
              src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
              alt=""
              class="picture_wu"
            />
            <p class="zan_wu">暂无评论</p>
          </div>
          <van-button type="warning" class="yu_yue3">立即预约</van-button>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      active: 0,
      title: "关注",
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    guan() {
      this.$toast("好啦 已经关注了");
      this.title = "已关注";
    },
  },
};
</script>
<style spoced>
.box {
  width: 100%;
  height: 3rem;
}
.box_top {
  width: 100%;
  height: 2rem;
  background-color: skyblue;
}
.van-nav-bar {
  background-color: skyblue;
  color: white;
}
.img1 {
  width: 1rem;
  height: 1rem;
  border-radius: 50px;
  margin-top: 0.3rem;
}
.img2 {
  width: 0.6rem;
  height: 0.6rem;
  border-radius: 50px;
}
.teacher {
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 1.8rem;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}
.guan_zhu {
  background: rgba(0, 0, 0, 0.105);
  color: orange;
  border: none;
  height: 0.6rem;
  font-family: "华文行楷";
}
.span1 {
  color: orange;
  font-size: 10px;
}
.p2 {
  color: grey;
}
.teacher_btn {
  display: flex;
  align-items: center;
}
.van-tab {
  font-size: 15px;
}
.age {
  color: grey;
  font-size: 0.3rem;
  margin-left: 0.5rem;
}
.s_age {
  margin-left: 0.5rem;
}
.price {
  color: grey;
  font-size: 0.3rem;
  margin-left: 0.5rem;
}
.s_price {
  margin-left: 0.5rem;
}
.jian_jie {
  color: grey;
  display: flex;
  justify-content: space-around;
  width: 90%;
  font-size: 0.3rem;
  height: 5rem;
  /* border: 1px solid #000; */
  margin-left: 3%;
  /* margin-left: -0.1rem; */
}
.left {
  width: 28%;
  height: 100%;
  /* border: 1px solid #000; */
  text-align: center;
}
.right {
  width: 80%;
}
.s_jian_jie {
  margin-left: 0.5rem;
}
.main {
  width: 90%;
  height: 3.5rem;
  border: 1px solid rgba(0, 0, 0, 0.048);
  margin-left: 2%;
  padding: 0.2rem;
  margin-top: 0.2rem;
  /* border: 1px solid #000; */
}
.ke_shi {
  color: rgba(0, 0, 0, 0.805);
}
.ming_zi {
  width: 100%;
  height: 1rem;
  /* border: 1px solid #000; */
  display: flex;
  align-items: center;
}
.ming {
  margin-left: 0.2rem;
  color: grey;
}
.bao_ming {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
}
.s_bao_ming {
  color: grey;
  font-size: 15px;
}
.s_mian_fei {
  color: green;
  font-size: 17px;
}
.picture {
  width: 100%;
  height: 4rem;
  background-color: #fff;
}
.picture_wu {
  width: 50%;
  height: 90%;
  margin-left: 25%;
}
.zan_wu {
  text-align: center;
  color: grey;
}
.yu_yue {
  width: 100%;
  position: fixed;
  bottom: 1rem;
  height: 1rem;
}
.jie_shao {
  position: relative;
}
.yu_yue2 {
  width: 100%;
  position: fixed;
  bottom: 1rem;
  height: 1rem;
}
.ping_jia {
  position: relative;
}
.yu_yue3 {
  width: 100%;
  position: fixed;
  bottom: 0rem;
  height: 1rem;
}
</style>
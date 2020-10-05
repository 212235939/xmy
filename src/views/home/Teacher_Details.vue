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
          <img src="../../assets/tou_xiang.jpg" class="img1" alt />
        </div>

        <div class="teacher_con">
          <div class="teacher_con_div1">
            李凡
            <span class="span1" style="font-size: 10px">M20</span>
          </div>
          <div class="teacher_con_div2">男 30年教龄</div>
        </div>

        <div class="teacher_btn">
          <van-button round type="info" class="guan_zhu" @click="guan">{{title}}</van-button>
        </div>
      </div>
    </div>
    <!-- <div class="div_title4">
      <div>幽默风趣</div>
      <div>分析到位</div>
      <div>亲和力强</div>
      <div>讲解专业</div>
    </div>-->
    <div class="content">
      <div class="contents">
        <van-tabs v-model="active" title-active-color="rgb(238,97,82)">
          <van-tab title="讲师介绍" class="jie_shao">
            <div class="age">
              教学年龄
              <span class="s_age">30年</span>
            </div>
            <div class="price">
              授课价格
              <span class="s_price">400学习币</span>
            </div>
            <div class="jian_jie">
              <div class="left">老师简介</div>
              <div
                class="right"
              >杨老师，特级教师，多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学核竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次，获全国高中联赛有数百人此获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。特别是今年大学生实行自主招生，有很多同学通过上他的辅导课进入清华大学，北京大学，上个还交通大学等。</div>
            </div>
            <van-button type="warning" class="yu_yue" color="rgb(235,97,0)">立即预约</van-button>
          </van-tab>
          <van-tab title="主要课程" class="ke_cheng">

            <div class="t" v-for="(item,index) in list" :key="index" @click="f(item)">
              <div class="t_one">
                {{item.title}}
                <p class="p2">{{item.title_p}}</p>
              </div>
              <div class="t_two">
                <img :src="item.img" class="imgqwe" />
                <div class="a">{{item.name}}</div>
              </div>
              <div class="t_three">
                <div class="r_one">{{item.num}}</div>
                <div class="r_two">{{item.price}}</div>
              </div>
            </div>

            <van-button type="warning" class="yu_yue2" color="rgb(235,97,0)">立即预约</van-button>
          </van-tab>
          <van-tab title="学员评价" class="ping_jia">
            <div class="asd">
              <div class="picture">
              <img
                src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
                alt
                class="picture_wu"
              />
              <p class="zan_wu">暂无评价</p>
            </div>
            </div>
            <van-button type="warning" class="yu_yue3" color="rgb(235,97,0)">立即预约</van-button>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0,
      title: "关注",
      t:'已关注',
       list:[
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共1课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'奥利给',
          num:'138人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共2课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给爷冲',
          num:'145人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共3课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给里奥',
          num:'186人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共4课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给爷冲',
          num:'112人已报名',
          price:'免费'
        },
      ]
    };
  },
  methods: {
    asd() {
      this.$router.go(-1);
    },
    guan() {
      this.$toast("已关注");
      this.title =this.t;
    }
  }
};
</script>
<style scoped>
.a{
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
.t_three>div{
    width: 2rem;
    display: flex;
    justify-content: space-around;
}
.imgqwe{
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
.div_title4 {
  width: 80%;
  height: 10%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: -0.8rem;
  left: 0.7rem;
  z-index: 6666666666666666666666;
}
.div_title4 div {
  width: 1.3rem;
  height: 0.43rem;
  border-radius: 20px;
  background-color: rgb(253, 218, 175);
  color: red;
  text-align: center;
}
.div_top3 {
  width: 100%;
  /* justify-self: 1rem; */
  height: 1rem;
  background-color: rgb(247, 242, 242);
}
.r_two{
  font-size: 15px;
  color: rgb(83, 164, 38);
}
.r_one{
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
.box_top {
  width: 100%;
  height: 3rem;
  background-color: rgb(8, 236, 236);
}
.van-nav-bar {
  height: 1.3rem;
  background-color: rgb(6, 203, 252);
  color: white;
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
  background: rgba(235,238,254);
  color: rgb(235, 97, 82);
  border: none;
  width: 22.53335vw;
  height:7.46667vw;
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
.age {
  color: grey;
  font-size: 0.3rem;
  margin-left: 0.5rem;
  margin-top: 0.4rem;
}
.s_age {
  margin-left: 0.5rem;
}
.price {
  color: grey;
  font-size: 0.3rem;
  margin-left: 0.5rem;
  margin-top: 0.5rem;
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
  margin-top: 0.5rem;
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
  line-height: 0.6rem;
  font-size: 11px;
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
.asd{
  width: 100%;
  height: 60vh;
  background-color: rgb(240, 242, 245);
}
.picture {
  width: 100%;
  height: 4rem;
  
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
.ping_jia {
  position: relative;
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
</style>
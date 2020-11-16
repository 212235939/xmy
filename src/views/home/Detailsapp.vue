<template>
  <div>
    <!-- 头部导航 -->
    <van-nav-bar title="课程详情" left-arrow @click-left="onClickLeft">
      <template #right>
        <div @click="share">
          <img
            src="data:image/png;base64,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"
            class="div-imgs"
          />
        </div>
      </template>
    </van-nav-bar>

    <van-tabs v-model="active" scrollspy sticky>
      <div class="div_white">
        <div class="div_flex">
          <div class="div_tab_title">
            {{
              pationlist.title
            }}初中重点几何知识点——第三讲：平行四边形与矩形、菱形、正方形的关系
          </div>
          <div>
            <van-icon
              name="star-o"
              size="20"
              v-show="!starli"
              @click="onclick"
            />
            <van-icon
              name="star"
              size="20"
              color="red"
              v-show="starli"
              @click="onclick2"
            />
          </div>
        </div>
        <div class="div_mian">免费</div>
        <div class="div_num">
          <div>共{{ pationlist.is_free }}课时</div>
          |
          <div>{{ pationlist.sales_num }}人已报名</div>
        </div>
        <div
          style="width: 100%; height: 10px; background: rgb(231, 227, 227)"
        ></div>
        <div class="div_white3">
          <div>教学团队</div>
          <div><img :src="imgs.teacher_avatar" alt="" /></div>
          <div style="margin-left: 0.1rem; font-size: 0.32rem; color: gray">
            {{ name.teacher_name }}
          </div>
        </div>
      </div>
      <van-tab title="课程介绍" class="tabs">
        <div class="div_gray">
          <div
            style="width: 100%; height: 10px; background: rgb(231, 227, 227)"
          ></div>
          <div class="div_white2">
            <div class="div_bold">课程介绍</div>
            <div v-html="this.data.course_details" class="div_bold_deta"></div>
          </div>
        </div>
      </van-tab>
      <van-tab title="课程大纲" class="tabs">
        <div class="div_boxs">
          <div class="div_bold">课程大纲</div>
          <div
            class="div_gang"
            v-for="(item, index) in CourseList"
            :key="index"
          >
            <div class="div_gangs">
              <div>
                <div class="div_dian"></div>
              </div>
              <div>
                <button>回放</button>
              </div>
              <div>{{ item.periods_title }}</div>
            </div>
            <div class="div_gangs3">
              <div>{{ teachername[0].teacher_name }}</div>
              <div>{{ mindate }}-{{ maxdate }}</div>
            </div>
          </div>
        </div>
      </van-tab>
      <van-tab title="课程评价" class="tabs">
        <div class="div_boxs">
          <div class="div_bold">课程评论</div>
          <div class="div_img" v-show="this.CommentList == ''">
            <div class="div_lun">暂时没有评论</div>
            <img
              src="https://img.tukuppt.com//png_preview/00/00/03/iuRSLbzXK1.jpg!/fw/780"
              alt=""
            />
          </div>
          <div
            v-for="(item, index) in CommentList"
            :key="index"
            class="div_pinglun"
          >
            <div class="div_pinglun2">
              <div class="div_p2">
                <img :src="item.avatar" alt="" />
              </div>
              <div class="div_p3">{{ item.nickname }}</div>
              <div class="div_p4"><van-rate v-model="value" size="11" /></div>
              <div class="div_p5">{{ item.created_at | formatDate }}</div>
            </div>
            <div class="div_pinglun3">{{ item.content }}</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
    <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <div class="block">
          <p style="margin-left: 2.3rem; font-size: 0.34rem">分享</p>
          <img :src="imgURL" class="URLimg" />
        </div>
        <div class="DIV_XX" @click="deletes">X</div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
import { IndexCurreview, Indexiption, IndexCourse } from "../api/api.js";
import { formatDate } from "../../utaicl/util.js";
import QRCode from "qrcode";
export default {
  data() {
    return {
      active: 0,
      value: 3,
      pationlist: [],
      starli: false,
      imgs: [],
      name: [],
      data: [],
      CommentList: [],
      CourseList: [],
      teachername: "",
      mindate: "",
      maxdate: "",
      show: false,
      imgURL: "",
    };
  },
  //过滤器 转换时间戳
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },

  //$router操作路由
  // $toute读取路由
  async mounted() {
    QRCode.toDataURL("I am a pony!")
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });
    //获取评论的所有数据
    var ids = this.$route.query.item;
    var deta = await IndexCurreview({ id: ids });
    console.log(deta.data.list);
    this.CommentList = deta.data.list;
    console.log(this.CommentList);

    //获取课程大纲里面的数据 要把所对应的id传过去 从而返回相对应的数据
    var Course = await IndexCourse({ id: ids });
    console.log(Course.data[0].total_end_play);
    console.log(Course.data[0].total_start_play);
    this.mindate = Course.data[0].total_start_play;
    this.maxdate = Course.data[0].total_end_play;
    this.teachername = Course.data[0].teachers;
    this.CourseList = Course.data;

    //课程介绍请求的数据
    var pation = await Indexiption(ids);
    console.log(pation.data.data.teachers[0].teacher_name);
    console.log(pation.data.data.teachers[0].teacher_avatar);
    this.imgs = pation.data.data.teachers[0];
    this.name = pation.data.data.teachers[0];
    this.pationlist = pation.data.data.info;
    this.data = pation.data.data.info;
    console.log(this.data);
    // console.log(this.pationlist);
    console.log(pation.data.data.info);
  },
  methods: {
    onClickLeft() {
      this.$router.push("/");
    },
    onclick() {
      this.$toast("已收藏");
      this.starli = true;
    },
    onclick2() {
      this.$toast("已取消收藏");
      this.starli = false;
    },
    share() {
      //点击显示遮罩层
      this.show = true;
      //获取当前地址栏的地址
      let url = location.href;
      console.log(url);
      //把当前地址栏的路径放到toDataURL后面，就会生成二维码
      QRCode.toDataURL(url)
        .then((img) => {
          console.log(img);
          //把生成的二维码赋值给上面定义好的imgUrl
          this.imgURL = img;
        })
        //错误返回信息
        .catch((err) => {
          console.error(err);
        });
    },
    deletes() {
      this.show = false;
    },
  },
};
</script>

<style scoped>
.div_tab_title {
  width: 90%;
  height: 1rem;
  /* background-color: white; */
  flex-wrap: wrap;
  font-size: 0.34rem;
  margin-left: 0.2rem;
  font-family: "宋体";
  margin-top: 0.2rem;
}
.div_flex {
  width: 100%;
  display: flex;

  justify-content: space-between;
}
.div_white {
  width: 100%;
  background-color: white;
}
.div_gray {
  width: 100%;
  /* height: 1.5rem; */
  background-color: rgb(236, 231, 231);
}
.div_mian {
  width: 90%;
  height: 0.5rem;
  color: orange;
  font-size: 0.34rem;
  margin-left: 0.2rem;
}
.div_num {
  width: 48%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.34rem;
  color: gray;
  margin-left: 0.2rem;
}
.div_white2 {
  width: 100%;
  /* height: 2rem; */
  background-color: white;
  /* margin-left: 0.2rem; */
}
.div_white3 {
  width: 97%;
  /* height: 2rem; */
  background-color: white;
  margin-left: 0.2rem;
}
.div_white3 img {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
}
.div_boxs {
  width: 100%;
  background-color: white;
}
.div_pinglun {
  width: 96%;
  height: 1.2rem;
  /* background-color: red; */
  margin-top: 0.2rem;
  margin-left: 0.14rem;
}
.div_pinglun2 {
  width: 100%;
  height: 70%;
  /* background: violet; */
  display: flex;
  justify-content: space-betweens;
}
.div_pinglun2 img {
  width: 90%;
  height: 80%;
  border-radius: 50%;
}

.div_pinglun3 {
  width: 70%;
  height: 30%;
  margin-left: 0.7rem;
  margin-top: -0.3rem;
  color: gray;
  /* background-color: yellow; */
}
.div_p2 {
  width: 10%;
  height: 100%;
  /* background-color: yellowgreen; */
}

.div_p3 {
  width: 25%;
  height: 100%;
  /* background-color: blue; */
  font-size: 0.31rem;
}
.div_p4 {
  width: 30%;
  height: 100%;
  /* background-color: black; */
}

.div_p5 {
  width: 35%;
  height: 100%;
  /* background-color: gray; */
}
.div_img {
  width: 100%;
}
.div_img img {
  width: 99%;
  border-radius: 10px;
  /* border: 1px solid red; */
}
.div_lun {
  width: 30%;
  position: relative;
  top: 1rem;
  left: 2.4rem;
  font-size: 0.37rem;
  font-family: "华文彩云";
  color: red;
}
.div_bold {
  width: 90%;
  margin-left: 0.2rem;
  font-size: 0.36rem;
  color: gray;
}
.div_gang {
  width: 90%;
  height: 1.5rem;
  /* background-color: red; */
  margin-left: 0.3rem;
  margin-top: 0.3rem;
}
.div_gangs {
  width: 60%;
  height: 50%;
  /* background-color: blueviolet; */
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.div_gangs > div {
  margin: 0rem 0.1rem;
}
.div_gangs button {
  width: 0.8rem;
  height: 0.4rem;
  background-color: orange;
  font-size: 0.23rem;
  border: none;
  color: whitesmoke;
}
.div_gangs3 {
  width: 90%;
  height: 50%;
  /* background-color: chartreuse; */
  display: flex;
  align-items: center;
}
.div_gangs3 > div {
  margin: 0rem 0.1rem;
  color: gray;
}
.div_dian {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background-color: red;
}
.div_bold_deta {
  width: 90%;
  margin-left: 0.2rem;
}
.div-imgs {
  position: relative;
  top: 0.1rem;
  width: 0.5rem;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  border-radius: 10%;
  width: 300px;
}

.block {
  width: 228px;
  height: 220px;
  border-radius: 10%;
  background-color: #fff;
}
.DIV_XX {
  position: relative;
  top: -2rem;
  left: -0.6rem;
  font-size: 0.34rem;
}
.URLimg {
  width: 180px;
  height: 180px;
  position: relative;
  top: -0.2rem;
  left: 0.6rem;
}
</style>
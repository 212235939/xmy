 <template>
  <div>
    <div class="div_header">
      <div><van-icon name="arrow-left" size="20" color="gray" @click="back"/></div>
      <div>课程详情</div>
      <div @click="share">
        <img
          src="data:image/png;base64,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"
          class="div-imgs"
        />
      </div>
    </div>
    <div class="div_imgs">
      <img :src="images" alt="" />
    </div>
    <div class="div_div">
      <div class="div_title" style="width: 90%">{{ title }}</div>
      <div class="div_icon" @click="Starsclick" v-show="starshow">
        <van-icon name="star-o" size="20" />
      </div>
      <div v-show="isshow" class="div_icon" @click="Stars">
        <van-icon name="star" size="20" color="red" />
      </div>
    </div>
    <div class="div_boxs2">
      <div>共{{ totalnum }}几课时</div>
      <div>{{ books }}人已报名</div>
    </div>
    <div class="div_boxs3">
      <div>开课时间:</div>
      <div style="font-size: 0.26rem; margin-top: 0.06rem">
        {{ date_num | formatDate }}-
      </div>
      <div style="font-size: 0.28rem; margin-top: 0.06rem">
        {{ create_num | formatDate }}
      </div>
    </div>
    <div class="fei">免费</div>
    <div class="div_body">
      <div style="height: 0.3rem; background: #eee"></div>
      <div class="div_box">
        <div class="div_tuan">教学团队</div>
        <div class="div_box_imgs" style="margin-left: 0.2rem">
          <img :src="imgs" alt="" />
        </div>
        <div style="width: 2rem; margin-left: 0.2rem">{{ name }}</div>
      </div>
    </div>
    <van-tabs scrollspy sticky>
      <van-tab title="课程介绍">
        <div class="div_jie">
          <div>课程介绍</div>
          <div v-html="details"></div>
        </div>
        <div style="height: 0.1rem; background: #eee"></div>
      </van-tab>
      <!-- 课程大纲 -->
      <van-tab title="课程大纲">
        <div class="div_boxs">
          <div class="div_bold">课程大纲</div>
          <div
            class="div_gang"
            v-for="(item, index) in course_list"
            :key="index"
          >
            <div class="div_gangs">
              <div>
                <div class="div_dian"></div>
              </div>
              <div>
                <button>回放</button>
              </div>
              <div>{{ item.title }}</div>
            </div>
            <div class="div_gangs3">
              <img :src="item.cover_img" alt="" />
              <div>{{ name }}</div>
              <!-- <div>{{ mindate }}-{{ maxdate }}</div> -->
            </div>
          </div>
        </div>
      </van-tab>
      <!-- 课程评价 -->
      <van-tab title="课程评价">
        <div class="div_boxssss">
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
    <div style="height: 1rem"></div>
    <div class="div_footer">
      <button class="div_footer_btn" @click="Apply" v-show="isNew">
        立即报名
      </button>
      <button class="div_footer_btn" v-show="isShow" @click="xue">
        立即学习
      </button>
    </div>
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
import {
  Mycourse,
  IndexCurreview,
  MyApply,
  myLogin,
  Mystsrs,
  MyId,
} from "../api/api.js";
import { formatDate } from "../../utaicl/util.js";
import QRCode from "qrcode";
export default {
  data() {
    return {
      images: "",
      title: "",
      totalnum: "",
      books: "",
      create_num: "",
      date_num: "",
      imgs: "",
      name: "",
      details: "",
      course_list: [],
      CommentList: [],
      value: 2,
      isShow: false,
      isNew: true,
      show: false,
      imgURL: "",
      isshow: false,
      starshow: true,
      info: "",
      datas: "",
    };
  },
  filters: {
    //转换时间戳
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy/MM/dd mm:ss");
    },
  },
  async mounted() {
    QRCode.toDataURL("I am a pony!")
      .then((url) => {
        console.log(url);
      })
      .catch((err) => {
        console.error(err);
      });

    var id = this.$route.query.ids;
    console.log(id);
    //获取评论的接口 从而获取到数据
    var d = await IndexCurreview({ id: id });
    console.log(d);
    this.CommentList = d.data.list; //用一个数组进行赋值

    var inof = await Mycourse(id);
    console.log("info", inof.data.data.info);
    this.coll = inof.data.data.info;
    // var id = inof.data.data.info.id;
    this.course_list = inof.data.data.recommendCourse;
    this.images = inof.data.data.info.cover_img; //获取上边的图片
    this.title = inof.data.data.info.title; //获取标题
    this.totalnum = inof.data.data.info.total_periods;
    this.books = inof.data.data.info.sales_num;
    this.create_num = inof.data.data.info.end_play_date;
    this.date_num = inof.data.data.info.start_play_date;
    this.imgs = inof.data.data.teachers[0].avatar; //教学团队的图片
    this.name = inof.data.data.teachers[0].teacher_name; //教学团队的老师名字
    this.details = inof.data.data.info.course_details; //讲师介绍可以直接用v-html渲染
  },
  methods: {
    //点击立即报名 获取对应的接口
    async Apply() {
      console.log(this.$route.query.ids);
      console.log(this.$route.query.courseType);

      var a = await MyApply({
        shop_id: this.$route.query.ids, //把必要的id传过去
        type: this.$route.query.courseType,
      });
      console.log("A", a);
      //判断code值为200时，给表头的名字和价格进行本地存储
      if (a.code == 200) {
        var name = a.data.shop_name;
        var price = a.data.order_price;
        localStorage.name = name;
        localStorage.price = price;
        //然后跳转页面
        this.$router.push({
          path: "/purchase",
          query: {},
        });
      } else {
        //如果code值不为200是提示已经报过名；让立即学习显示，立即报名隐藏
        this.$toast(a.msg);
        this.isNew = false;
        this.isShow = true;
      }
      console.log(a.code);
      console.log(a);
    },
    //点击立即学习进行路由跳转并传递一个id过去
    xue() {
      this.$router.push({
        path: "/learndetails",
        query: {
          id: this.$route.query.ids,
        },
      });
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
    //点击星星进行收藏
    async Starsclick() {
      var a = await Mystsrs({
        course_basis_id: this.$route.query.ids,
        type: 1,
      });
      console.log(a.data);
      this.datas = a.data;

      if (a.code == 200) {
        this.coll.is_collect = 1;
        console.log(this.coll);
        if (this.coll.is_collect == 1) {
          this.isshow = true;
          this.starshow = false;
          this.$toast("已收藏");
        } else {
          this.$toast("网络不太好呀");
        }
      }
    },
    //取消收藏
    async Stars() {
      var a = await MyId(this.datas);
      console.log(a.data);
      if (a.data.code == 200) {
        this.coll.is_collect = 0;
        console.log(this.coll.is_collect);
        if (this.coll.is_collect == 0) {
          this.$toast("已取消收藏");
          this.isshow = false;
          this.starshow = true;
        }
      }
    },
    back(){
      this.$router.push('/course')
    }
  },
};
</script>
 
 <style scoped>
.div_imgs {
  width: 100%;
  height: 4.5rem;
  /* margin-top:1.1rem; */
}
.div_imgs img {
  width: 100%;
  height: 100%;
}
.div_div {
  width: 60%;
  height: 0.5rem;
  display: flex;
  /* background-color: red; */
}
/* .div_div div {
  width: 100%;
} */
.div_boxs2 {
  width: 60%;
  height: 0.6rem;
  /* background-color: yellow; */
  display: flex;
  margin-top: 0.2rem;
}
.div_boxs2 div {
  margin: 0rem 0.1rem;
  font-size: 0.32rem;
  color: gray;
  position: relative;
  top: 0.08rem;
  left: 0.1rem;
}
.div_boxs3 {
  width: 98%;
  height: 0.7rem;
  /* background-color: darkblue; */
  display: flex;
  margin-top: 0.2rem;
}
.div_boxs3 div {
  position: relative;
  top: 0.14rem;
  left: 0.1rem;
  margin: 0rem 0.1rem;
  font-size: 0.31rem;
  color: gray;
}
.div_title {
  /* margin-top:0.2rem; */
  width: 90%;
  position: relative;
  top: 0.1rem;
  left: 0.2rem;
  font-size: 0.34rem;
}
.fei {
  width: 20%;
  font-size: 0.34rem;
  color: red;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}
.div_body {
  width: 100%;
  background-color: rgb(253, 245, 245);
}
.div_box {
  width: 86%;
  height: 2rem;
  background: white;
}
.div_tuan {
  width: 30%;
  margin-left: 0.2rem;
  font-size: 0.32rem;
}
.div_box_imgs {
  width: 0.8rem;
  height: 0.8rem;
}
.div_box_imgs img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.div_jie {
  width: 90%;
  /* height: 2rem; */
  background: white;
  margin-left: 0.2rem;
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
  height: 40%;
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
  height: 60%;
  /* background-color: chartreuse; */
  display: flex;
  align-items: center;
}
.div_gangs3 > div {
  margin: 0rem 0.3rem;
  color: gray;
}
.div_gangs3 > img {
  width: 10%;
  height: 80%;
  border-radius: 50%;
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

.div_boxssss {
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
.div_footer {
  width: 100%;
  text-align: center;
  height: 1rem;
  background-color: white;
  position: fixed;
  bottom: 0rem;
}
.div_footer_btn {
  width: 90%;
  height: 0.8rem;
  border: none;
  background-color: red;
  color: white;
  border-radius: 20px;
  margin-top: 0.1rem;
}
.div-imgs {
  width: 0.5rem;
}
/* .div-imgs {
  position: relative;
  top: 0.1rem;
  width: 0.5rem;
} */

.URLimg {
  width: 180px;
  height: 180px;
  position: relative;
  top: -0.2rem;
  left: 0.6rem;
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
.div_header {
  width: 100%;
  height: 1rem;
  background-color: white;
  /* position: fixed;
  top: 0rem; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 6666666666;
  font-size: 0.34rem;
}
.div_icon {
  width: 30%;
  position: relative;
  left: 3rem;
}
</style>
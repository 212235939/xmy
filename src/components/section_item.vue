<template>
  <div>
    <!-- 明星讲师 和讲师阵容的数据渲染-->
    <div
      v-for="item in course"
      :key="item.teacher_id"
      class="div_Boxs"
      v-show="dataType === 3"
      @click="teacher(item.teacher_id)"
    >
      <div class="div_imgs"><img :src="item.teacher_avatar" alt="" /></div>
      <div class="div_title">
        <div class="div_title2"></div>
        <div class="div_title3">{{ item.teacher_name }}</div>
        <div class="div_title4">
          　杨岭老师,特级教师.多次被中国数学会评为全国高中数学竞联赛优秀教练员。长期从事名校理科班的数学教学和数学竞赛辅导工作。辅导学生参加全国高中数学联赛有数百人次获全国高中数学联赛一、二、三等奖，数十人被免试保送到清华大学、北京大学等名牌大学学习。十多人获CMO获一、二、三等奖，一人获IMO金牌。
          　　特别是近年来大学试行自主招生，有很多同学通过上他的竞赛辅导课进入清华大学、北京大学、上海交通大学等。
        </div>
      </div>
    </div>

    <!-- 精品课程和推荐课程数据的渲染 -->
    <div
      v-for="(items, index) in course"
      :key="index"
      class="div_Boxss"
      v-show="dataType === 1"
      @click="details(items)"
    >
      <div class="div_Boxss_items">
        <div class="div_Boxss_itemsss">
          <b style="color: red">{{ items.title }}</b
          >初中重点几何知识点——第三讲：平行四边形与矩形、菱形、正方形的关系
        </div>
      </div>
      <div class="div_Boxss_items2">共{{ items.course_type }}课时</div>
      <div class="div_Boxss_items3">
        <div class="div_images"><img :src="items.cover_img" alt="" /></div>
        <div class="div_yang">杨洋</div>
      </div>
      <div class="div_Boxss_items4">
        <div>{{ items.sales_base }}人已报名</div>
        <div>
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
            alt=""
          />
          1.00
        </div>
      </div>
    </div>

    <!-- 热门资讯数据 -->
    <div
      v-for="items in course"
      :key="items.id"
      class="div_Boxsss"
      v-show="dataType === 6"
      @click="information(items.id)"
    >
      <div class="div_boxsss_img"><img :src="items.thumb_img" alt="" /></div>
      <div class="div_boxsss_title">
        <div class="div_boxsss_title2">{{ items.title }}</div>
        <div class="div_boxsss_title3">{{ items.description }}</div>
        <div class="div_boxsss_title4">
          <div>{{ items.click_rate }}</div>
          <div>{{ items.created_at | formatDate }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "../utaicl/util.js";
export default {
  data() {
    return {
      lists: [],
    };
  },
  props: {
    course: {
      type: Array,
    },
    dataType: Number,
  },
  //过滤器 转换时间戳
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
  mounted() {
    console.log(this.course);
  },
  created() {},
  methods: {
    teacher(item) {
      this.$emit("TeacherClick", item);
    },
    details(item) {
      // console.log(item);
      this.$router.push({
        path: "/detailsapp",
        query: {
          item: item.id,
        },
      });
    },
    information(items) {
      // console.log(items);
      this.$router.push({
        path:'/ationdetails',
        query:{
          items
        }
      })
    },
  },
};
</script>

<style scoped>
.div_Boxs {
  width: 96%;
  height: 1.5rem;
  background-color: white;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  box-shadow: 3px 3px 4px 5px #e7e4e4;
}
.div_Boxs img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}
.div_imgs {
  width: 20%;
  height: 100%;
  /* background-color: red; */
}
.div_title {
  width: 80%;
  height: 100%;
  /* background-color: forestgreen; */
}
.div_title2 {
  width: 100%;
  height: 20%;
  /* background-color: gainsboro; */
}
.div_title3 {
  width: 100%;
  height: 40%;
  /* background-color: skyblue; */
  font-size: 0.32rem;
  font-family: "宋体";
}
.div_title4 {
  width: 100%;
  height: 40%;
  /* background-color: springgreen; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
}

.div_Boxss {
  width: 96%;
  height: 3.6rem;
  background-color: white;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  border-radius: 10px;
  color: gray;
  box-shadow: 3px 3px 4px 5px #e7e4e4;
}
.div_Boxss img {
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
}
.div_Boxsss {
  width: 96%;
  height: 2rem;
  background: white;
  margin-top: 0.2rem;
  border-radius: 10px;
  margin-left: 0.2rem;
  /* box-shadow: honeydew; */
  box-shadow: 3px 3px 4px 5px #e7e4e4;
  display: flex;
  justify-content: space-between;
}
.div_Boxsss img {
  width: 2.5rem;
  height: 1.5rem;
  /* border-radius: 50%; */
  border-radius: 10px;
  margin-top: 0.25rem;
  margin-left: 0.1rem;
}
.div_Boxss_items {
  width: 96%;
  height: 30%;
  /* background-color: violet; */
  font-size: 0.33rem;
  font-family: "宋体";
  margin-left: 0.2rem;
  /* box-shadow: 3px 3px 4px 5px #e7e4e4; */
}
.div_Boxss_itemsss {
  position: relative;
  top: 0.2rem;
}
.div_Boxss_items2 {
  width: 100%;
  height: 20%;
  /* background-color: tomato; */
  color: gray;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.div_Boxss_items3 {
  width: 100%;
  height: 26%;
  /* background-color: turquoise; */
  display: flex;
  /* justify-content: space-between; */
  margin-left: 0.2rem;
}
/* .div_Boxss_items4 {
  width: 100%;
  height: 20%;
  background-color: yellowgreen;
} */
.div_images {
  width: 20%;
  height: 100%;
}
.div_yang {
  width: 30%;
  height: 100%;
  font-size: 0.32rem;
  position: relative;
  top: 0.2rem;
  left: -0.3rem;
  color: gray;
}

.div_Boxss_items4 {
  width: 90%;
  height: 20%;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  margin-left: 0.2rem;
}
.div_Boxss_items4 img {
  width: 0.3rem;
  height: 0.3rem;
}
.div_boxsss_img {
  width: 40%;
  height: 100%;
  /* background-color: hotpink; */
}
.div_boxsss_title {
  width: 60%;
  height: 100%;
  /* background-color: indigo; */
  box-shadow: 3px 3px 4px 5px #e7e4e4;
}
.div_boxsss_title2 {
  width: 100%;
  height: 30%;
  /* background-color: whitesmoke; */
  /* margin-top:0.2rem; */
  position: relative;
  top: 0.2rem;
}
.div_boxsss_title3 {
  width: 100%;
  height: 40%;
  /* background-color: yellowgreen; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
  position: relative;
  top: 0.2rem;
}
.div_boxsss_title4 {
  width: 90%;
  height: 30%;
  /* background-color: violet; */
  display: flex;
  justify-content: space-between;
  color: gray;
}
</style>
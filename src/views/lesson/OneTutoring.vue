<template>
  <div>
    <div class="div_header_nav">
      <div @click="back"><van-icon name="arrow-left" /></div>
      <div style="color: gray; font-size: 15px">一对一辅导</div>
      <div><van-icon name="search" /></div>
    </div>
    <van-dropdown-menu class="div_menu" :overlay="false">
      <van-dropdown-item title="选择上课时间" @open="fff" @close="ddd">
        <div class="div_van_item" v-show="isTab">
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
          <div class="div_absolute_body">
            <div class="shi">时段</div>
            <div class="div_body_dates">
              <div class="div_body_dates1" @click="kaishi">
                <div class="div_titles">开始时间</div>
                <div class="div_icons"><van-icon name="clock-o" /></div>
              </div>
              <div style="margin-top: 0.5rem">-</div>
              <div class="div_body_dates2" @click="jie">
                <div class="div_titles">结束时间</div>
                <div class="div_icons"><van-icon name="clock-o" /></div>
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

    <div class="div_body_hidden" v-show="isShow">
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">李凡</div>
          <div class="div_body_box3_div2">男 10年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">齐语</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">田瑞莲</div>
          <div class="div_body_box3_div2">女 6年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019i1uOVfFisI1568012749.png"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">D2张老师</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">马学斌</div>
          <div class="div_body_box3_div2">男 25年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1" @click="Teacher">彭超峰</div>
          <div class="div_body_box3_div2">男 10年教龄</div>
        </div>

        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019gJDVo9Rptm1571983715.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">张伟威老师</div>
          <div class="div_body_box3_div2">男 31年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">张老师</div>
          <div class="div_body_box3_div2">男 9年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">李婷婷老师</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">杨传思</div>
          <div class="div_body_box3_div2">男 32年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20199pIxx6OzV51566615814.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">李凡</div>
          <div class="div_body_box3_div2">男 10年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191q20gY29bo1566617207.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">齐语</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">田瑞莲</div>
          <div class="div_body_box3_div2">女 6年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019i1uOVfFisI1568012749.png"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">D2张老师</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">马学斌</div>
          <div class="div_body_box3_div2">男 25年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1" @click="Teacher">彭超峰</div>
          <div class="div_body_box3_div2">男 10年教龄</div>
        </div>

        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019gJDVo9Rptm1571983715.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">张伟威老师</div>
          <div class="div_body_box3_div2">男 31年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>

      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">张老师</div>
          <div class="div_body_box3_div2">男 9年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">李婷婷老师</div>
          <div class="div_body_box3_div2">女 8年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img
            src="https://baijiayun-wangxiao.oss-cn-beijing.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </div>
        <div class="div_body_box3" @click="Teacher">
          <div class="div_body_box3_div1">杨传思</div>
          <div class="div_body_box3_div2">男 32年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_genduo">没有更多了</div>
    </div>
    <!-- <div class="ads">

      </div> -->
    <van-popup v-model="show" position="bottom" :style="{ height: '40%' }">
      <div class="sss">
        <div>取消</div>
        <div>确认</div>
      </div>
      <van-area title="标题" :area-list="areaList" class="pop_area" />
    </van-popup>

    <van-popup v-model="shows" position="bottom" :style="{ height: '40%' }">
      <div class="sss">
        <div>取消</div>
        <div>确认</div>
      </div>
      <van-area title="标题" :area-list="areaList" class="pop_area" />
    </van-popup>
  </div>
</template>

<script>
import { myOneTutoring, MyTeacher } from "../api/api.js";
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
      isShow: true,
      isTab: false,
      show: false,
      shows: false,
      areaList: {
        province_list: {
          110000: "01",
          120000: "02",
          130000: "03",
          140000: "04",
          150000: "05",
          160000: "06",
          170000: "07",
          180000: "08",
          190000: "09",
          200000: "10",
          210000: "11",
          220000: "12",
          230000: "13",
          240000: "14",
          250000: "15",
          260000: "16",
          270000: "17",
          280000: "18",
          290000: "19",
          300000: "20",
          310000: "21",
          320000: "22",
          330000: "24",
        },
        county_list: {
          110101: "01",
          110102: "02",
          110103: "03",
          110104: "04",
          110105: "05",
          110106: "06",
          110107: "07",
          110108: "08",
          110109: "09",
          110110: "04",
          110111: "05",
          110112: "06",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
          // ....
        },
      },
    };
  },
  async mounted() {
    // var a = await myOneTutoring({ page: 1, limit: 10 });
    // console.log(a);

    var a = await MyTeacher({
      page: 1,
      limit: 10,
      attr_val_id: 6,
    });
    console.log(a);
  },
  methods: {
    back() {
      this.$router.push("/lesson");
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
    fff() {
      console.log("111");
      this.isShow = false;
      this.isTab = true;
    },
    ddd() {
      this.isShow = true;
      this.isTab = false;
    },
    kaishi() {
      this.show = true;
    },
    jie() {
      this.shows = true;
    },
  },
};
</script>

<style scoped>
.ads {
  width: 100%;
  height: 10rem;
  background: red;
}
.van-dropdown-item__content {
  max-height: 100% !important;
}
.van-popup--top {
  max-height: 100% !important;
}

.van-popup {
  max-height: 100% !important;
}
/* .div_van_item{
  height: 11rem;
} */
.div_header_nav {
  width: 99%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  position: fixed;
  top: 0rem;
  background-color: white;
  z-index: 6666;
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
.div_body_box2 {
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body_box2 img {
  width: 55%;
  height: 60%;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.div_body_box3 {
  width: 50%;
  height: 100%;
}
.div_body_box4 {
  width: 30%;
  height: 100%;
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
  height: 33rem;
  background-color: rgb(236, 235, 231);
}
.div_body_box3_div1 {
  width: 100%;
  height: 60%;
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
  /* background-color:rgb(0, 0,0, 0.2); */
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
  background-color: rgb(247, 240, 240);
  margin: 0rem 0.3rem;
  font-size: 0.33rem;
  text-align: center;
}
.sexactive {
  color: red;
  font-weight: 500 !important;
  background-color: gainsboro;
  height: 100%;
  font-weight: bold;
}
.div_pupo_footer {
  width: 100%;
  height: 1.1rem;
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
  height: 3.7rem;
  /* border: 1px solid black; */
  background-color: white;
  margin-left: 0.14rem;
  position: relative;
  top: 0.3rem;
  border-radius: 0.2rem;
}
.div_van_item {
  width: 100%;
  height: 10rem;
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
  height: 0.45rem;
  /* line-height: 0.5rem; */
  /* align-items: center; */
  text-align: center;
  background: orange;
  border-radius: 50%;
  color: white;
}
.div_menu {
  width: 100%;
  margin-top: 0.8rem;
  color: gray;
}
.div_genduo {
  width: 100%;
  height: 0.3rem;
  text-align: center;
  margin-top: 0.1rem;
  color: gray;
}
.div_absolute_body {
  width: 95%;
  border-radius: 10px;
  height: 2rem;
  background-color: white;
  margin-left: 0.14rem;
  margin-top: 0.5rem;
}
.div_body_dates {
  width: 100%;
  height: 0.6rem;
  display: flex;
  /* justify-content: space-between; */
}
.div_body_dates div {
  margin: 0px 0.2rem;
  margin-top: 0.4rem;
}
.div_body_dates1 {
  width: 45%;
  height: 100%;
  /* background-color: red; */
  border-radius: 5px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
}
.div_body_dates2 {
  width: 45%;
  height: 100%;
  /* background-color: darkorchid; */
  border-radius: 5px;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
}
.shi {
  position: relative;
  top: 0.2rem;
  left: 0.3rem;
}
.div_titles {
  position: relative;
  top: -0.26rem;
}
.div_icons {
  position: relative;
  top: -0.26rem;
}
.pop_area {
  position: relative;
  top: -3rem;
}
.sss {
  width: 96%;
  margin-left: 0.2rem;
  position: relative;
  top: 0.2rem;
  z-index: 999999999999999999999999999999999999;
  display: flex;
  justify-content: space-between;
  color: orange;
}
</style>
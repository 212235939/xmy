<template>
  <div class="body">
    //表头
    <div class="topp">
      <van-nav-bar title="特色课" @click-right="onSss">
        <template #right>
          <van-icon name="search" color="black" class="search-icon" />
        </template>
      </van-nav-bar>

      <van-dropdown-menu :overlay="false">
        <van-dropdown-item title="分类" @open="aaa" ref="asd">
          <div class="box-top">
            <van-cell-group>
              <van-cell title="年纪" />
              <div class="box-one">
                <div
                  :class="['box-smill', { 'box-sm': index == ind }]"
                  v-for="(item, index) in list"
                  :key="index"
                  @click="onSm(index)"
                >
                  <span>{{ item }}</span>
                </div>
              </div>

              <van-cell title="学科" />
              <div class="box-one">
                <div
                  :class="['box-smill', { 'box-sm': index == inxk }]"
                  v-for="(item, index) in listss"
                  :key="index"
                  @click="onSmm(index)"
                >
                  <span>{{ item }}</span>
                </div>
              </div>

              <div class="box-two">
                <button class="box-cz" @click="asddd">重置</button>
                <button class="box-qd" @click="asdd">确定</button>
              </div>
            </van-cell-group>
          </div>
        </van-dropdown-item>
        <!-- 排序 -->
        <van-dropdown-item title="排序" @open="bbb" ref="mmp">
          <div class="box-top">
            <ul class="box-ul">
              <li
                :class="['', { 'box-ui-li': index == liIndex }]"
                v-for="(item, index) in pxList"
                :key="index"
                @click="onPx(index)"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </van-dropdown-item>
        <!-- 筛选 -->
         <van-dropdown-item title="筛选" @open="ccc" ref="llk">
                    
          <div class="box-to">
            <div class="box-one">
                            
              <div
                :class="['box-smill', { 'box-sm': index == indbb }]"
                v-for="(item, index) in courselist"
                :key="index"
                @click="onSmmm(item.id)"
              >
                <span>{{ item.name }}</span>               
              </div>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div class="div_Body" ref="scorll">
      <div class="div_Body2">
        <div
          v-for="(item, index) in SpkList"
          :key="index"
          class="div_space"
          @click="course(item)"
        >
          <div class="div_space2">
            <img :src="item.cover_img" alt="" />
          </div>
          <div class="div_space3">
            <div class="div_spaces2">
              <div class="div_ttt">{{ item.title }}</div>
              <div class="div_quan" v-show="serial[index].has_buy == 1">
                <div class="div_quan2">
                  <div class="div_num">已报名</div>
                </div>
              </div>
            </div>
            <div class="div_spaces3">
              <div class="divs_space">
                <div class="div_ttt2">
                  <div>{{ item.sales_num }}人已报名</div>
                </div>
              </div>
              <div class="divs2_space">
                <div class="div_ttt2">免费</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div style="height: 1rem"></div> -->
      <div v-show="tab" style="text-align: center">正在加载...</div>
    </div>
  </div>
</template>

<script>
import { Indexbooks, Mygrade, Myscreen } from "../api/api.js";
export default {
  data() {
    return {
      ind: 0,
      inxk: 0,
      liIndex: 0,
      indbb: 0,
      aaaa: false,
      bbbb: false,
      cccc: false,
      list: ["初一", "初二", "初三", "高一", "高二"],
      listss: ["语文", "数学", "英语", "物理", "化学"],
      pxList: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到底"],
      SpkList: [],
      courselist: [],
      tab: false,
      serial: "",
    };
  },
  async mounted() {
    //当页面滑动到底部是，会在最下面不断的加载数据
    // this.$refs.scorll.addEventListener("scroll", () => {
    //   console.log(document.documentElement.scrollTop);
    //   console.log(document.documentElement.clientHeight);
    //   console.log(document.documentElement.scrollHeight);
    //   var scrollTop = document.documentElement.scrollTop;
    //   var clienHeight = document.documentElement.clientHeight;
    //   var ScrollHeight = document.documentElement.scrollHeight;

    //   if (ScrollHeight - clienHeight - scrollTop === 0) {
    //     //当为0时请求数据
    //     console.log("000000000");
    //     this.tab = true;
    //     window.setTimeout(() => {
    //       Indexbooks().then((res) => {
    //         console.log(res.data.data.list);
    //         this.SpkList = [...this.SpkList, ...res.data.data.list];
    //       });
    //       this.tab = false;
    //     }, 2000);
    //   }
    // });
    //请求课程的8条数据
    var a = await Indexbooks({});
    console.log(a.data.data.list[0].has_buy);
    this.serial = a.data.data.list; //给已报名赋一个值 当值得has_buy等于1时,让已报名显示出来
    console.log(this.serial);
    this.SpkList = a.data.data.list;

    //获取筛选遮挡层里面的四条数据  例:大班课,面授课
    var a = await Mygrade();
    console.log(a.data.data);
    this.courselist = a.data.data.appCourseType;
    console.log(this.courselist);
  },
  methods: {
    onDetail() {
      this.$router.push({ path: "/coursedetails" });
    },
    aaa() {
      this.aaaa = true;
    },
    bbb() {
      this.bbbb = true;
    },
    ccc() {
      this.cccc = true;
    },
    onSss() {
      this.$router.push({
        path: "/search",
      });
    },
    onSm(index) {
      this.ind = index;
    },
    onSmm(index) {
      this.inxk = index;
    },
    //点击进行筛选，通过传入的course_type来返回数据
    async onSmmm(index) {
      this.indbb = index;
      this.$refs.llk.toggle();
      var b = await Myscreen({
        page: 1,
        limit: 10,
        course_type: index, //课程类型
        is_vip: 0,
      });
      console.log(b.data.data.list);
      this.SpkList = b.data.data.list;
      // console.log(this.SpkList);
    },
    async onPx(index) {
      this.liIndex = index;
      this.$refs.mmp.toggle();
      console.log(index);
      var obj = await Myscreen({
        page: 1,
        limit: 10,
        course_type: 0,
        order_by: index,
        is_vip: 0,
      });
      this.SpkList = obj.data.data.list;
      console.log(obj);
    },
    asdd() {
      this.$refs.asd.toggle();
    },
    asddd() {
      this.$refs.asd.toggle();
      this.ind = 0;
      this.inxk = 0;
    },
    course(item) {
      console.log(item.id);
      this.$router.push({
        path: "coursedetails",
        query: {
          ids: item.id,
          courseType: item.course_type,
        },
      });
    },
  },
};
</script>

<style scoped>
.ad {
  display: flex;
  justify-content: left;
  align-items: center;
}
.body {
  background: #f5f5f5;
}
.van-popup--top {
  margin-top: 100px;
}
.aset {
  margin-top: 0.43rem;
}
.box-smill {
  width: 1.5rem;
  height: 0.7rem;
  background: #f5f5f5;
  text-align: center;
  line-height: 0.7rem;
  margin-left: 0.3rem;
  margin-top: 0.2rem;
}
.box-sm {
  background: #ebeefe;
  color: red;
}
.box-one {
  display: flex;

  flex-wrap: wrap;
  /* height: rem; */
}
.box-to {
  height: 1.3rem;
}
.van-button--small {
  margin-left: 30px;
  margin-top: 5px;
}
.set {
  width: 200px;
  height: 5rem;
  background: red;
}
.box-two {
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.box-cz {
  width: 3.5rem;
  border-radius: 0.1rem;
  height: 0.7rem;
  background: white;
  border: 0.01rem solid black;
}
.box-qd {
  width: 3.5rem;
  border-radius: 0.1rem;
  height: 0.7rem;
  background: orangered;
  border: none;
  color: white;
}

.box-ul li {
  height: 1rem;
  border-bottom: 1px solid rgb(245, 245, 245);
  text-align: center;
  line-height: 1rem;
}
.box-ui-li {
  color: red;
}
.box-content {
  border-radius: 5%;
  width: 7rem;
  height: 3.7rem;
  margin: auto;
  margin-top: 0.4rem;
  background: white;
}
.im1 {
  width: 0.5rem;

  border-radius: 50%;
  background: gray;
}
.search-icon {
  font-size: 0.6rem;
  line-height: inherit;
}
.topp {
  position: fixed;
  top: 0rem;
  width: 100%;
  background-color: white;
  z-index: 6666666666666666666666;
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
.div_Body {
  width: 100%;
  height: 10rem;
  overflow: scroll;
  position: relative;
  top: 2.2rem;
}
.div_Body2 {
  width: 100%;
}
.div_quan {
  width: 23%;
  height: 60%;
  flex-wrap: nowrap;
  display: flex;
  align-items: center;
  border: 1px solid red;
  border-radius: 50%;
  position: relative;
  left: 3rem;
  font-style: italic;
}
.div_quan2 {
  width: 100%;
  height: 40%;

  border-radius: 50%;
  position: relative;
  border: 1px solid red;
}
.div_num {
  width: 1.2rem;
  text-align: center;
  height: 0.4rem;
  background-color: rgba(219, 159, 159, 0.6);
  position: relative;
  top: -0.1rem;
  color: red;
  left: -0.2rem;
  transform: rotate(-16.5deg);
  -o-transform: rotate(-16.5deg);
  -webkit-transform: rotate(-16.5deg);
  -moz-transform: rotate(-16.5deg);
}
</style>
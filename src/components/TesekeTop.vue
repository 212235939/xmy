<template>
  <div class="body">
    <div class="topp">
      <van-nav-bar title="特色课" @click-right="onSss">
        <template #right>
          <van-icon name="search" size="18" />
        </template>
      </van-nav-bar>

      <van-dropdown-menu overlay>
        <van-dropdown-item title="分类" @open="aaa">
          <div class="box-top">
            <van-cell-group>
              <van-cell title="年纪" />
              <div class="box-one">
                <div
                  :class="['box-smill',{'box-sm':index == ind}]"
                  v-for="(item,index) in list"
                  :key="index"
                  @click="onSm(index)"
                >
                  <span>{{item}}</span>
                </div>
              </div>

              <van-cell title="学科" />
              <div class="box-one">
                <div
                  :class="['box-smill',{'box-sm':index == inxk}]"
                  v-for="(item,index) in listss"
                  :key="index"
                  @click="onSmm(index)"
                >
                  <span>{{item}}</span>
                </div>
              </div>

              <div class="box-two">
                <button class="box-cz">重置</button>
                <button class="box-qd">确定</button>
              </div>
            </van-cell-group>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="排序" @open="bbb">
          <div class="box-top">
            <ul class="box-ul">
              <li
                :class="['',{'box-ui-li':index==liIndex}]"
                v-for="(item,index) in pxList"
                :key="index"
                @click="onPx(index)"
              >{{item}}</li>
            </ul>
          </div>
        </van-dropdown-item>
        <van-dropdown-item title="筛选" @open="ccc">
          <div class="box-top">
            <div class="box-one">
              <div
                :class="['box-smill',{'box-sm':index == ind}]"
                v-for="(item,index) in sxList"
                :key="index"
                @click="onSm(index)"
              >
                <span>{{item}}</span>
              </div>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <div></div>
    <div class="box-content" v-for="i in 10" :key="i" @click="onDetail(i)">
      <div style="margin-left: 0.3rem;margin-top: 0.3rem;height:3.5rem">
        <br />

        <p style="font-size: 0.3rem;">李老师16号到22号地理大课堂开课啦</p>
        <p>
          <van-icon name="clock-o" />03月16日 18:30 ~ 03月22日 15:00 | 共8课时
        </p>
        <br />
        <p>
          <img class="im1" src="/favicon.ico" alt />
          <span>李青</span>
        </p>
      </div>
      <van-cell title="119人已报名">
        <template #right-icon>
          <span style="color:green;font-size: 0.4rem;">免费</span>
        </template>
      </van-cell>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ind: 0,
      inxk: 0,
      liIndex: 0,
      aaaa: false,
      bbbb: false,
      cccc: false,
      list: ["初一", "初二", "初三", "高一", "高二"],
      listss: ["语文", "数学", "英语", "物理", "化学"],
      pxList: ["综合排序", "最新", "最热", "价格从低到高", "价格从高到底"],
      sxList: [
        "全部",
        "大课班",
        "小课班",
        "公开课",
        "点播课",
        "面授课",
        "音频课",
        "系统课",
        "图文课",
        "会员课",
      ],
    };
  },
  methods: {
    onDetail(i) {
      this.$emit("onDetail", i);
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
    onPx(index){
      this.liIndex = index
    }
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
}
.van-popup--top {
  margin-top: 100px;
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
  height: 1.5rem;
  border-bottom: 1px solid rgb(245, 245, 245);
  text-align: center;
  line-height: 1.5rem;
}
.box-ui-li {
  color: red;
}
.box-content {
  border-radius: 5%;
  width: 6.5rem;
  height: 4.5rem;
  margin-left: 0.5rem;
  margin-top: 0.4rem;
  background: white;
}
.im1 {
  border-radius: 50%;
  background: gray;
}
</style>
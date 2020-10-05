<template>
  <div class="body">
    <div class="topp">
      <van-nav-bar title="特色课" @click-right="onSss">
        <template #right>
          <van-icon name="search" color="black" class="search-icon" />
        </template>
      </van-nav-bar>

      <van-dropdown-menu overlay>
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
                <button class="box-cz"  @click="asddd">重置</button>
                <button class="box-qd" @click="asdd">确定</button>
              </div>
            </van-cell-group>
          </div>
        </van-dropdown-item>
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
         <van-dropdown-item title="筛选" @open="ccc" ref="llk">
                    
          <div class="box-to">
                        
            <div class="box-one">
                            
              <div
                :class="['box-smill', { 'box-sm': index == indbb }]"
                v-for="(item, index) in sxList"
                :key="index"
                @click="onSmmm(index)"
              >
                                <span>{{ item }}</span>               
              </div>
                          
            </div>
                      
          </div>
                  </van-dropdown-item
        >
      </van-dropdown-menu>
    </div>
    <div style="height: 2rem"></div>
    <div class="box-content" v-for="i in 10" :key="i" @click="onDetail()">
      <div
        style="
          margin-left: 0.3rem;
          margin-top: 0.3rem;
          height: 2.7rem;
          border-bottom: 0.01rem solid #f5f5f5;
        "
      >
        <br />

        <p style="font-size: 0.3rem">李老师16号到22号地理大课堂开课啦</p>
        <p class="ad" style="font-size: 0.1rem">
          <img src="../../assets/1.png" alt="" /> 03月16日 18:30 ~ 03月22日
          15:00 | 共8课时
        </p>

        <p class="ad">
          <img class="im1" src="/favicon.ico" alt />&nbsp;
          <span style="margin-left: 0.1rem; color: rgba(0, 0, 0, 0.45)"
            >李青</span
          >
        </p>
        <div class="aset" style="display: flex">
          <div style="width: 5rem; color: gray">79人报名</div>
          <div style="color: green">免费</div>
        </div>
      </div>
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
      indbb:0,
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
        onSmmm(index) {
      this.indbb = index;
      this.$refs.llk.toggle()
    },
    onPx(index) {
      this.liIndex = index;
       this.$refs.mmp.toggle()
    },
       asdd(){
      this.$refs.asd.toggle()
    },
     asddd(){
      this.$refs.asd.toggle()
      this.ind = 0;
      this.inxk = 0
    }
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
  height: 3.5rem;
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
  width: 100%;
  background-color: white;
}
</style>
<template>
  <div class="body">
    <div class="box-top">
      <van-nav-bar title="课程详情" left-arrow @click-left="onLeft">
        <template #left>
          <van-icon name="arrow-left" size="18" color="black" />
        </template>
        <template #right>
          <van-cell @click="showPopup">
            <!-- <van-icon name="share-o" class="black"/> -->
            <!-- <span class="iconfont iconfenxiang"></span> -->
            <span class="iconfont iconfenxiang"></span>
          </van-cell>
        </template>
      </van-nav-bar>
    </div>
    <van-popup v-model="show">
      <img src="../../assets/mz.png" alt />
    </van-popup>
    <div style="margin-top: -0.8rem">
      <van-tabs
        ref="tabs"
        color="white"
        background="white"
        v-model="active"
        scrollspy
        sticky
        line-height="0px"
        @change="onon(index)"
      >
        <div class="top">
          <van-cell title="李老师16号到22号地理大课堂开课啦">
            <template #right-icon>
              <div>
                <van-icon
                  name="star-o"
                  size="20"
                  v-show="!star"
                  @click="iconclick"
                />
                <van-icon
                  name="star"
                  size="20"
                  color="red"
                  v-show="star"
                  @click="iconclickss"
                />
              </div>
            </template>
          </van-cell>
          <div style="margin-left: 0.5rem">
            <span style="font-size: 20px; color: orange">免费</span>
            <p style="font-size: 0.2rem">共8课时 | 119人已报名</p>
            <p style="font-size: 0.2rem">
              开课时间：2020.03.16 18:30 - 2020.03.22 15:00
            </p>
            <br />
          </div>
        </div>
        <div
          style="
            width: 7.5rem;
            height: 3rem;
            margin-top: 0.3rem;
            background: white;
          "
        >
          <p style="margin-left: 0.3rem; margin-top: 0.3rem">教学团队</p>
          <div style="margin-left: 0.5rem">
            <br />

            <img class="im1" src="/favicon.ico" alt />
            <br />
            <span>李青</span>
          </div>
        </div>

        <van-tab v-if="gun" title="课程介绍">
          <div class="box1">
            <div style="margin-left: 0.3rem">
              <p>课程介绍</p>
              <span>求阴影部分的面积</span>
            </div>
          </div>
        </van-tab>
        <van-tab v-if="gun" title="课程大纲">
          <div class="box2">
            <p style="margin-left: 0.3rem; margin-top: 0.3rem">课程大纲</p>
            <div style="margin-left: 0.5rem">
              <div v-for="i in 5" :key="i">
                <van-icon name="stop" color="orange" />
                <van-button type="primary" color="orange" size="mini"
                  >回放</van-button
                >
                <span>第一讲第一课时</span>
                <p>李青 03月16日 18：30-19：30</p>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab v-if="gun" title="课程评价">
          <div class="box3">
            <p style="margin-left: 0.3rem; margin-top: 0.3rem">课程评价</p>
            <div>
              <div
                style="margin-left: 0.3rem; height: 1rem; display: flex"
                v-for="i in 9"
                :key="i"
              >
                <!-- <div> -->
                <img class="im2" src="/favicon.ico" alt />
                <div>
                  <span>159456613</span>
                  <br />
                  <span>哇擦</span>
                </div>
                <div style="margin-top: -0.4rem">
                  <van-field name="rate">
                    <template #input>
                      <van-rate v-model="rate" color="orange" size="10" />
                    </template>
                  </van-field>
                </div>
                <div>2020-04-26 20:56</div>

                <!-- </div> -->
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

    <div class="box1" v-if="!gun">
      <div style="margin-left: 0.3rem">
        <p>课程介绍</p>
        <span>求阴影部分的面积</span>
      </div>
    </div>

    <div class="box2" v-if="!gun">
      <p style="margin-left: 0.3rem; margin-top: 0.3rem">课程大纲</p>
      <div style="margin-left: 0.5rem">
        <div v-for="i in 5" :key="i">
          <van-icon name="stop" color="orange" />
          <van-button type="primary" color="orange" size="mini"
            >回放</van-button
          >
          <span>第一讲第一课时</span>
          <p>李青 03月16日 18：30-19：30</p>
        </div>
      </div>
    </div>

    <!-- <van-submit-bar button-text="立即报名" @submit="onButton" /> -->
    <div class="bottom" @click="onButton">
      <span>立即报名</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // aa:false,
      show: false,
      rate: 3,
      gun: false,
      active: "8",

      star: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.jt, true);
  },
  methods: {
    onon() {
      console.log();
      //     if(index == 0){

      //     }
      console.log(this.refs.tabs);
    },

    jt(e) {
      if (e.target.documentElement.scrollTop >= 50) {
        this.gun = true;
        console.log(this.active);
      } else {
        this.gun = false;
      }
    },

    onLeft() {
      this.$router.go(-1);
    },
    onButton() {
      this.$router.push("/apply");
    },
    showPopup() {
      this.show = true;
    },
    iconclick() {
      this.star = true;
      this.$toast("已收藏");
    },
    iconclickss() {
      this.star = false;
      this.$toast("已取消");
    },
  },
};
</script>

<style scoped>
.body {
  background: #f5f5f5;
}
.im1 {
  border-radius: 50%;
  background: gray;
}
.im2 {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: gray;
}
.top {
  background: white;
}
.box1 {
  background: white;

  width: 100%;
  height: 2rem;
  margin-top: 0.5rem;
  /* margin-left: 0.3rem; */
  /* border: 1px solid red; */
}
.box2 {
  background: white;

  width: 100%;
  height: 8rem;
  margin-top: 0.5rem;
  /* border: 1px solid red; */
}
.box3 {
  background: white;

  width: 100%;
  height: 13rem;
  margin-top: 0.5rem;
  /* border: 1px solid red; */
}

.van-submit-bar__button {
  width: 7.5rem;
  border-radius: 0%;
}
.bottom {
  width: 7.5rem;
  height: 1rem;
  background-color: orangered;
  position: fixed;
  bottom: 0rem;
  text-align: center;
  line-height: 1rem;
  font-size: 0.4rem;
  color: white;
}
.mmmp {
  font-size: 0.5rem;
}
/* .van-tab{
    font-size: 0.6rem !important;
}
.ellipsis{
    font-size: 0.4rem !important;
}
.van-tabs__line{
     font-size: 0.4rem !important;
} */
.van-tab--active {
  font-weight: 900;
  font-size: 0.5rem;
  font-size: 0.5rem;
}
</style>
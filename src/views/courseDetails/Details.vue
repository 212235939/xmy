<template>
  <div class="body">
    <div class="box-top">
      <van-nav-bar title="课程详情" left-arrow @click-left="onLeft">
        <template #left>
          <van-icon name="arrow-left" size="18" />
        </template>
        <template #right>
            <van-cell @click="showPopup"
            ><van-icon name="share-o" /></van-cell>
        </template>
      </van-nav-bar>
    </div>
    <van-popup v-model="show"
      ><img src="../../assets/mz.png" alt=""
    /></van-popup>
    <van-tabs
      v-model="active"
      scrollspy
      sticky
      line-height="0px"
      title-active-color="red"
    >
      <div class="top">
        <van-cell title="李老师16号到22号地理大课堂开课啦">
          <template #right-icon>
            <div >
              <van-icon name="star-o" size="20" v-show="!star" @click="iconclick"/>
              <van-icon name="star" size="20" color="red" v-show="star" @click="iconclickss"/>
            </div>
          </template>
        </van-cell>
        <div style="margin-left: 0.5rem">
          <span style="font-size: 20px; color: orange">免费</span>
          <p>共8课时 | 119人已报名</p>
          <p>开课时间：2020.03.16 18:30 - 2020.03.22 15:00</p>
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
        <p>教学团队</p>
        <div style="margin-left: 0.5rem" @click="tiao">
          <br />

          <img class="im1" src="/favicon.ico" alt />
          <br />
          <span>李青</span>
        </div>
      </div>

      <van-tab title="课程介绍">
        <div class="box1">
          <p>课程介绍</p>
        </div>
      </van-tab>
      <van-tab title="课程大纲">
        <div class="box2">
          <p>课程大纲</p>
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
      <van-tab title="课程评价">
        <div class="box3">
          <p>课程评价</p>
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

    <van-submit-bar button-text="立即报名" @submit="onButton" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      rate: 3,
      active: "1",
      list: ["课程介绍", "课程大纲", "课程评价"],
      star: false,
    };
  },
  methods: {
    onLeft() {
      this.$router.go(-1);
    },
    onButton() {
      this.$router.push("/courses");
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
    tiao(){
      this.$router.push('/teacher_details')
    }
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
  height: 12rem;
  margin-top: 0.5rem;
  /* border: 1px solid red; */
}

.van-submit-bar__button {
  width: 7.5rem;
  border-radius: 0%;
}
</style>
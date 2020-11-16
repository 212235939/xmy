<template>
  <div>
    <van-nav-bar :title="title" left-arrow @click-left="onlist()" />
    <van-tabs v-model="active">
      <van-tab title="全部完成">
        <div
          class="btox"
          v-for="(item, index) in list"
          :key="index"
          v-show="val == 1"
        >
          <div class="btox_top">
            <span>{{ item.dbh }}</span>
            <span style="color: #ea7a2f">交易完成</span>
          </div>

          <div class="conts">
            <p>{{ item.title }}</p>
            <p>{{ item.sj }}</p>
            <p>
              <span>实付款：</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span>{{ item.jgx }}</span>
            </p>
            <!-- <p style="height:3vh"><van-button style=" float: right;" round  color="#7232dd" plain size="mini">{{item.but}}</van-button></p> -->
          </div>
        </div>

        <div class="acbox" v-if="val == 3 || val == 2">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
            alt=""
          />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <van-tab title="待支付">
        <div class="acbox">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
            alt=""
          />
          <p>暂无订单</p>
        </div>
      </van-tab>
      <van-tab title="已完成">
        <div
          class="btox"
          v-for="(item, index) in list"
          :key="index"
          v-show="item.jgx == 1"
        >
          <div class="btox_top">
            <span>{{ item.dbh }}</span>
            <span style="color: #ea7a2f">交易完成</span>
          </div>

          <div class="conts">
            <p>{{ item.title }}</p>
            <p>{{ item.sj }}</p>
            <p>
              <span>实付款：</span>
              <img
                src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20191HHDExgz0u1567065946.png"
                alt=""
              />
              <span>{{ item.jgx }}</span>
            </p>
            <!-- <p style="height:3vh"><van-button style=" float: right;" round  color="#7232dd" plain size="mini">{{item.but}}</van-button></p> -->
          </div>
        </div>
      </van-tab>
      <van-tab title="已取消">
        <div class="acbox">
          <img
            src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
            alt=""
          />
          <p>暂无订单</p>
        </div>
      </van-tab>
    </van-tabs>
    <!-- <p  style="width:100%; text-align: center;">没有更多了</p> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
      title: "课程订单",
      val: 0,

      list: [
        {
          dbh: "订单编号：2020092915543981554",
          title: "每时每课特级教师-自主招生冲刺讲座-1代数式求值1",
          sj: "时间：2020.09.29 15:54",
          jgx: 0,
        },
        {
          dbh: "订单编号：2020092915543981554",
          title:
            "自主每时每课特级教师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题",
          sj: "时间：2020.09.29 15:54",
          jgx: 1,
          but: "加入完成",
        },
      ],
    };
  },
  mounted() {
    let val = this.$route.query.val;
    this.val = val;
    switch (val) {
      case val == 1:
        this.title = "课程订单";
        break;
      case val == 2:
        this.title = "会员订单";
        break;
      case val == 3:
        this.title = "约课订单";
        break;

      default:
        break;
    }
  },
  methods: {
    onlist() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.btox {
  width: 97%;
  margin: 10px auto;
  background-color: #fff;
  box-sizing: border-box;
  border-radius: 0.13333rem;
  padding: 0.2rem 0.37333rem;
  margin-bottom: 0.4rem;
  position: relative;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
}
.btox_top {
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f5f5f5;
}
.btox img {
  width: 3.2vw;
}
.acbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.3rem;
  font-size: 0.3rem;
}
.acbox img {
  width: 47%;
  height: 2.5rem;
}
.van-nav-bar .van-icon {
  color: #000000;
}
</style>
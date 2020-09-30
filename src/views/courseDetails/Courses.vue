<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="标题"
        left-text="返回"
        right-text="按钮"
        left-arrow
        @click-left="a"
        @click-right="onClickRight"
      >
        <template #right>
          <van-icon name="calendar-o" size="21" />
        </template>
      </van-nav-bar>
    </div>

    <div class="jindu">
      <div>共一课时</div>
      <div class="aa">
        <van-progress inactive :percentage="0" />
      </div>
      <div>已学习0%</div>
    </div>

    <div class="bottom">
      <div class="content">
        <div class="dian"></div>
        <div class="text">
          自主招生冲刺6-多元方程组与可转化为多元方程组
          <br />
          <br />问题
        </div>
      </div>
    </div>

    <div class="wer">
      <div @click="comment">
        <span class="iconfont iconbi"></span>写评论
      </div>
      <div @click="onKe">
        <span  class="iconfont icongengduo-2"></span>课程详情
      </div>
      <div>
        <span class="iconfont iconlajifenlei"></span>列表移除
      </div>
    </div>


<van-popup v-model="show">
    
  <div class="tan">
      <div class="t_top">星级：<van-rate icon="like" void-icon="like-o" v-model="ping"/></div>
      <div class="t_c">内容：<textarea id="" cols="30" rows="7" v-model="text"></textarea></div>
      <div class="t_b"><van-button type="primary" hairline plain size="normal" @click="submit">提交</van-button></div>
  </div>

</van-popup>


  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            ping:2,
            text:''
        }
    },
  methods: {
    a() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/datedate");
    },
    comment(){
        this.show = true
    },
    submit(){
        console.log(this.ping+`星`,this.text)
        this.show = false
    },
    onKe(){
      this.$router.go('-1');
    }
  }
};
</script>

<style scoped>
.tan{
    width: 95vw;
    height: 4.5rem;
    border: 1px solid white;
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.t_c{
    display: flex;
}
.t_b{
    width: 100%;
    display: flex;
    justify-content: center;
}
.wer {
  width: 100%;
  height: 0.7rem;
  position: fixed;
  bottom: 0px;
  left: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.wer > div {
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top {
  width: 100%;
  height: 1rem;
}
.aa {
  width: 50%;
  /* border: 1px solid red; */
}
.jindu {
  width: 100%;
  height: 1rem;
  /* padding-top: 0.5rem; */
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.bottom {
  margin-top: 0.5rem;
  width: 100%;
  height: 3rem;
}
.dian {
  width: 0.1rem;
  height: 0.1rem;
  border: 1px solid orange;
  background: orange;
  border-radius: 50%;
}
.text {
  margin-left: 0.2rem;
}
.content {
  margin: 0 auto;
  width: 88%;
  height: 100%;
  border: 0.53333vw solid #e9e9e9;
  display: flex;
  align-items: center;
}
</style>
<template>
  <div>
    <div class="top">
      <van-nav-bar
        title="李老师16号到22号地理大课堂开课啦"
        
        @click-left="a"
        @click-right="onClickRight"
        
      >
       <template #left>
          <van-icon name="arrow-left" size="18" color="black"/>
        </template>
        <template #right>
          <van-icon name="calendar-o" size="21" color="black"/>
        </template>
      </van-nav-bar>
    </div>
<div style="height:1.3rem">
  
</div>
    <div class="jindu">
      <div>共一课时</div>
      <div class="aa">
        <van-progress inactive :percentage="0" :show-pivot="false"/>
      </div>
      <div>已学习0%</div>
    </div>

    <div class="bottom" v-for="inf in 10" :key="inf">
      <div class="content">
        <div style="margin-left:0.5rem;margin-top:0.4rem;width:6rem;height:2.5rem">
           <div class="dian"></div>
           <span style="color:orange">[回放]</span>&nbsp; <span>第一讲第一课时</span><br>
           <span style="font-size:0.25rem;color:gray">李青</span> &nbsp;<span style="font-size:0.25rem;color:gray">03月16日 18:30 - 19:30</span>
        <div class="text">
           <div class="jinduu">
     
      <div class="aaa">
        <van-progress inactive :percentage="0" :show-pivot="false"/>
      </div>
      <div>已学习0%</div>
    </div>
         
        </div>
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
    <div class="kl" @click="submit">x</div>
      <div class="t_top">星级：<van-rate icon="star-o" void-icon="star" v-model="ping"/></div>
      <div class="t_c">内容：<textarea id="" cols="30" rows="5" v-model="text"></textarea></div>
      <div class="t_b"><van-button  color="orange" size="normal" @click="submit">提交</van-button></div>
  </div>

</van-popup>


  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false,
            ping:0,
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
    },
  }
};
</script>

<style scoped>
.tan{
    width: 95vw;
    height: 5.5rem;
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
  background: white;
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
  position: fixed;
  z-index: 999999;
}
.aa {
  width: 50%;
  /* border: 1px solid red; */
}
.aaa {
  width: 70%;
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
  margin-top: 0.3rem;
  width: 100%;
  height: 3rem;
}
.dian {
  margin-top: 0.2rem;
  margin-left: -0.3rem;
  float: left;
  width: 0.1rem;
  height: 0.1rem;
  border: 1px solid orange;
  background: orange;
  border-radius: 50%;
 
}
.text {
  margin-left: 0rem;
  margin-top: 0.5rem;
  /* display: flex; */
  width: 100%;
}
.content {
  margin: 0 auto;
  width: 85%;
  height: 85%;
  border: 0.53333vw solid #e9e9e9;
  display: flex;
  /* align-items: center; */
  
}
.jinduu {
  margin-left: -0.3rem;
  width: 95%;
  height: 0.1rem;
  /* padding-top: 0.5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.kl{
  margin-left: 6.5rem;
}
</style>
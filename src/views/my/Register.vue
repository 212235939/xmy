<template>
  <div>
      <van-nav-bar
  title="注册"
/>
  <div class="boxs">
     <div class="qsdw">
    <input type="text" placeholder="请输入手机号" v-model.trim="sjh">
    <span class="huo">获取验证码</span>
  </div>
   <div class="qsdw">
    <input type="password" placeholder="请输入验证码" v-model.trim="mm">
  </div>
   <div class="qsdw">
    <input type="password" placeholder="请输入密码">
  </div>
    <div class="chzc">
      <span></span>
      <span class="chzc_mi" @click="onClickLeft">使用密码登录</span>
    </div>
  </div>

        <div class="deng" @click="zc">确定</div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      sjh:"",
      mm:""
    }
  },
  methods:{
     onClickLeft(){
        this.$router.push({
          path:"/about"
        })
      },
      zc(){
        if(this.sjh==""&&this.mm==""){
          return
        }else{
          localStorage.token=this.sjh
          this.$router.push({
            path:"/about"
          })

          

        }


      }
  }
}
</script>

<style scoped>
.qsdw{
  height: 13.33333vw;
    background-color: #fff;
    border-bottom: 1px solid #f1f1f1
}
.chzc_mi{
  font-size: 0.23rem;
  color: rgb(172, 172, 172);
}
.chzc{
  margin-top: 0.2rem;
  display: flex;
  justify-content: space-between;

}
.boxs{
  padding: 0px 0.4rem ;
  height: 3.9rem;
  box-sizing: border-box;
}
input{
  box-sizing: border-box;
    padding: .4rem 0;
    border: 0;
    height: 100%;
    font-size: 4vw;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    line-height: 5.33333vw;
    float: left;
    outline: none;
}
.huo{
  height: 6.66667vw;
    margin-top: .33333rem;
    margin-right: 1.33333vw;
    color: #eb6100;
    border-radius: .04rem;
    float: right;
    padding: 0;
    text-align: center;
    font-family: PingFangSC-Regular;
    font-weight: 400;
    line-height: .66667rem;
}
.deng{
  
  width: 5.8rem;
  border-radius: 20px ;
  height: 7vh;
  line-height: 7vh;
  color: #fff;
  font-size: 0.3rem;
  text-align: center;
  background-image: linear-gradient(to right, rgb(255, 140, 87) , rgb(255, 87, 45));
  margin: 1rem  auto;
}
</style>
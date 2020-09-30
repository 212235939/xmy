<template>
  <div>
    <div class="div_header">
      <div class="Size iconfont icon-zuojiantou" @click="back"></div>
      <div>我的学习</div>
      <div class="Size iconfont icon-rili1"></div>
    </div>
    <div class="div_contnter">
      <div class="div_wrapper">
        <div v-for="(item,index) in list" :key="index">{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:["直播课(1)","点播课(4)","音频课(0)","图文课(0)","面授课(0)","会员课(0)"]
        }
    }
};
</script>

<style scoped>
.div_header {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.4rem;
  margin-top: 0.2rem;
  color: gray;
}
.Size {
  font-size: 0.5rem;
}
.div_contnter{
    width: 100%;
    height: 2rem;

}
.div_wrapper{
    height: 2rem;
    overflow: scroll;
}
</style>
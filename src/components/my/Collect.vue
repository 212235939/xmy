<template>
<div>
  <div class="box">
      
    <van-nav-bar
  title="我的收藏"
  left-arrow
  @click-left="onlist()"
/>
    <div class="acbox">
        <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg" alt="">
        <p>暂无收藏</p>
    </div>
</div>
  </div>
</template>

<script>
export default {
    methods:{
       onlist(){
           this.$router.go(-1)
       }
    }
}
</script>

<style scoped>
bady{
  background: rgb(39, 39, 39);
}
.box{
    min-height: 100vh;
    background: #f0f2f5;
    box-sizing: border-box
}
.acbox{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.3rem;
  font-size: 0.3rem;
}
.acbox img{
    width: 47%;
    height: 2.5rem;
}

</style>
<template>
  <div>
    首页
  
  </div>

</template>

<script>
import swiper from "@/components/home/swiper.vue";
import teacher from "@/components/home/teacher.vue";
import course from "@/components/home/course.vue";
import star from "@/components/home/star.vue";
import mteacher from "@/components/home/mteacher.vue";
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    this.$axios.post("http://xx.com/api/public/img").then(res=>{
      console.log(res.data)
    })
  }
}
</script>

<style scoped>


.iconshuben,.icontushu,.iconxinxi{
  font-size: 25px;
}
.threee{
  width: 100%;
  height: 10vh;
}
.swipers{
  width: 100%;
  height: 4rem;
}
.swipers img{
  width: 100%;
  height: 4rem;
}
.content{
  width: 100%;
  /* height: 10rem; */
  background: rgb(240, 242, 245);
  position: relative;
  margin: 0 auto;
}
.content>div{
  width: 95%;
  margin: 0 auto;
}
.three{
  /* width: 100%; */
  /* height: 3rem; */
  /* background: red; */
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -0.5rem;
}
.three>div{
  width: 25%;
  height: 2rem;
  border-radius: 5px;
  background: white;
  column-rule: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
</style>
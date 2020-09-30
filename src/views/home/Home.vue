<template>
<<<<<<< HEAD
  <div>
=======


    <div>
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
    <!-- 轮播图 -->
    <div class="swipers">
      <swiper></swiper>
    </div>
    <!-- 轮播图下 -->
    <div class="content">
      <!-- 三个小格子 -->
      <div class="three">
        <div @click="goke">
          <span class="iconfont iconshuben"></span>特色课
        </div>
        <div @click="goone">
          <span class="iconfont icontushu"></span>一对一辅导
        </div>
        <div @click="godate">
          <span class="iconfont iconxinxi"></span>学习日历
        </div>
      </div>
      <!-- 名师阵容 -->
      <div class="teacher">
        <teacher @click="teacher"></teacher>
      </div>
      <!-- 名师课程 -->
      <div class="course">
        <course @click="course"></course>
      </div>
      <!-- 明星讲师 -->
      <div class="star">
        <star @click="star"></star>
      </div>
    </div>
<<<<<<< HEAD
=======


 

>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  </div>

</template>

<script>
import swiper from "@/components/home/swiper.vue";
import teacher from "@/components/home/teacher.vue";
import course from "@/components/home/course.vue";
import star from "@/components/home/star.vue";
import mteacher from "@/components/home/mteacher.vue";
export default {
  components: {
    swiper,
    teacher,
    course,
    star,
    mteacher
<<<<<<< HEAD
=======

  },
  data(){
    return{
      list:[]
    }
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  },
  methods: {
    goone() {
      this.$router.push({
        path: "/oneoneone"
      });
    },
    godate(){
      this.$router.push({
        path: "/datedate"
      });
    },
    goke(){
      this.$router.push({
        path: "/Course"
      });
    },
    teacher(obj){
      console.log(obj)
    },
    course(obj){
      console.log(obj)
    },
    star(obj){
      console.log(obj)
    }
  }
};
</script>

<style scoped>
<<<<<<< HEAD
.iconshuben,
.icontushu,
.iconxinxi {
=======


.iconshuben,.icontushu,.iconxinxi{
>>>>>>> 581c8dcd467d62f9cc5f5a5997b2490ae3c7c11a
  font-size: 25px;
}
.threee {
  width: 100%;
  height: 10vh;
}
.swipers {
  width: 100%;
  height: 4rem;
}
.swipers img {
  width: 100%;
  height: 4rem;
}
.content {
  width: 100%;
  background: rgb(240, 242, 245);
  position: relative;
  margin: 0 auto;
}
.content > div {
  width: 95%;
  margin: 0 auto;
}
.three {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -0.5rem;
}
.three > div {
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
<template>
  <div class="sta">
    <p class="p1">明星讲师</p>
    <div class="t" v-for="(item,index) in list" :key="index" @click="f(item)"> 
      <img :src="item.img" class="img" />
      <div class="right">
        <div class="r_top">{{item.title}}</div>
        <div class="r_tot">{{item.detail}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "白老师",
          detail: "从事宅男行业多年，是在下无敌了",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        },
        {
          title: "郭老师",
          detail: "从事宅男行业多年，是在下无敌了",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        },
        {
          title: "付老师",
          detail: "从事宅男行业多年，是在下无敌了",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        },
        {
          title: "马老师",
          detail: "从事宅男行业多年，是在下无敌了",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        },
        {
          title: "赵某人",
          detail: "从事宅男行业多年，是在下无敌了",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png"
        }
      ]
    };
  },
  methods:{
      f(item){
          this.$emit("click",item)
      }
  }
};
</script>

<style scoped>
.sta {
}
.r_tot{
  color: gray;
}
.p1 {
  /* width: 90%; */
  border-left: 2px solid rgb(235, 97, 0);
  font-size: 13px;
  padding-left: 0.2rem;
}
.t {
  width: 100%;
  height: 1.2rem;
  margin-top: 0.25rem;
  padding-top: 0.3rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
}
.img {
  width: 0.9rem;
  height: 0.9rem;
  border-radius: 50%;
  margin-left: 0.4rem;
}
.right {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 0.3rem;
}
.right > div {
  height: 0.6rem;
}
</style>
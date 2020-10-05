<template>
  <div class="teacher">
    <p class="p1">名师阵容</p>
    <div class="t" v-for="(item,index) in list" :key="index"  @click="f(item)">
      <div class="img">
        <img :src="item.img" class="img1" />
      </div>
      <div class="right">
        <div class="t_top">{{item.title}}</div>
        <div class="t_bottom">{{item.detail}}</div>
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
          title: "付举",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          detail: "付举从事装X行业多年，至今仍未遇到对手"
        },
        {
          title: "鑫鹏",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          detail: "鑫鹏从事真带呀行业多年，至今仍未遇到对手"
        },
        {
          title: "海洋",
          img:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png",
          detail: "1108文艺青年，他称第二没人称第一"
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
.teacher {
  
}
.t_top{
  font-size: 0.3rem;
}
.t_bottom{
  color: rgb(183, 183, 183);
  margin-top: 0.07rem;
}
.t {
  display: flex;
  width: 100%;
  height: 1.2rem;
  margin-top: 0.25rem;
  padding-top: 0.3rem;
  background-color: white;
  border-radius: 5px;
}
.p1 {
  /* width: 90%; */
  border-left: 2px solid rgb(235, 97, 0);
  font-size: 13px;
  padding-left: 0.2rem;
}
.img {
  width: 12%;
  height: 0.8rem;
  border-radius: 50%;
  margin-left: 0.4rem;
}
.img1 {
  width: 100%;
  border-radius: 50%;
}
.right {
  display: flex;
  flex-direction: column;
  margin-left: 0.2rem;
  margin-top: 0.06rem;
}
</style>
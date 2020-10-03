<template>
  <div class="teacher">
    <p class="p1">精品课堂</p>
    <div class="t" v-for="(item,index) in list" :key="index" @click="f(item)">
      <div class="t_one">{{item.title}}<p>{{item.title_p}}</p></div>
      <div class="t_two"><img :src="item.img" class="img"><div class="a">{{item.name}}</div></div>
      <div class="t_three"><div>{{item.num}}</div><div>{{item.price}}</div></div>
    </div> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共1课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'奥利给',
          num:'138人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共2课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给爷冲',
          num:'145人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共3课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给里奥',
          num:'186人已报名',
          price:'免费'
        },
        {
          title:'每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题',
          title_p:'共4课时',
          img:'https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/2019X3gWvILU7J1571983543.png',
          name:'给爷冲',
          num:'112人已报名',
          price:'免费'
        },
      ]
    }
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
.a{
  margin-left: 0.2rem;
}
.t_one {
  width: 94%;
  height: 42%;
  margin: 0 auto;
}
.t_two {
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
}
.t_three {
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
}
.t_three>div{
    width: 2rem;
    display: flex;
    justify-content: space-around;
}
.t {
  width: 100%;
  height: 3.8rem;
  margin-top: 0.1rem;
  padding-top: 0.3rem;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}
.img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    margin-left: 0.4rem;
}
.t>div{
    font-size: 13px;
}
.p1 {
  /* width: 90%; */
  border-left: 2px solid slateblue;
  font-size: 15px;
  padding-left: 0.2rem;
}
</style>
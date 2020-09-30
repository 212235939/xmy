<template>
  <div class="teacher">
    <p class="p1">精品课堂</p>
    <div class="t">
      <div class="t_one">每时每刻特辑讲师-自主招生冲刺讲座6-多元方程组与可转化为多元方程组问题<p>共1课时</p></div>
      <div class="t_two"><img src="../../assets/logo.png" class="img">标题提</div>
      <div class="t_three"><div>138人已报名</div><div>免费</div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teacher {
}
.t_one {
  width: 100%;
  height: 42%;
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
  background-color: gainsboro;
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
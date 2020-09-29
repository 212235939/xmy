<template>
  <div class="teacher">
    <p class="p1">名师阵容</p>
    <div class="t">
      <div class="img">
        <img src="../../assets/logo.png" class="img1" />
      </div>
      <div class="right">
          <div class="t_top">标题</div>
          <div class="t_bottom">下边</div>
      </div>
    </div>
     
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.teacher {
  /* width: 95%; */
 
  
}
.t{
    display: flex;
    width: 100%;
    height: 1.2rem;
    margin-top: 0.1rem;
    padding-top: 0.3rem;
    background-color: gainsboro;
    border-radius: 5px;
    
}
.p1 {
  /* width: 90%; */
  border-left: 2px solid slateblue;
  font-size: 15px;
  padding-left: 0.2rem;
}
.img {
  width: 12%;
  height: 0.8rem;
  border-radius: 50%;
  border: 1px solid blue;
  margin-left: 0.4rem;
}
.img1 {
  width: 100%;
  border-radius: 50%;
}
.right{
    display: flex ;
    flex-direction: column;
}
</style>
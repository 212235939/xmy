<template>
  <div class="sta">
      <p class="p1">精品课堂</p>
      <div class="t">
          <img src="../../assets/logo.png" class="img">
          <div class="right">
              <div class="r_top">shang</div>
              <div class="r_tot">xai</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.sta{

}
.p1 {
  /* width: 90%; */
  border-left: 2px solid slateblue;
  font-size: 15px;
  padding-left: 0.2rem;
}
.t {
  width: 100%;
  height: 1.2rem;
  margin-top: 0.1rem;
  padding-top: 0.3rem;
  background-color: gainsboro;
  border-radius: 5px;
  display: flex;
}
.img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    border: 1px solid red;
    margin-left: 0.4rem;
}
.right{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 0.3rem;
}
.right>div{
    height: 0.6rem;
}
</style>
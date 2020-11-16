<template>
  <div>
    <div class="div_body">
      <div class="div_boxs">
        <div class="div_rem">
          <div><button class="div_boxs_btn">面授课</button></div>
          <div>{{ name }}</div>
        </div>
        <div class="div_price">{{ price }}</div>
        <div class="div_ke">共{{ section_num }}课时</div>
      </div>
      <div class="div_boxs2">
        <div class="div_discount">优惠券</div>
        <div class="div_yong">无可用</div>
      </div>
      <div class="div_boxs3">
        <div class="div_boxs_div2">
          <div>商品金额</div>
          <div>{{ price }}</div>
        </div>
        <div class="div_boxs_div3">
          <div>优惠卷金额</div>
          <div>-{{ price }}</div>
        </div>
        <div class="div_boxs_div3">
          <div>合计</div>
          <div style="color: red">{{ price }}</div>
        </div>
      </div>
    </div>
    <div class="div_footer">
      <div class="div_footer_box2"></div>
      <div class="div_footer_box3">
        <div style="font-size: 0.32rem">实付价格:</div>
        <div style="font-size: 0.32rem; color: red">0</div>
        <div>
          <button class="btn">提交订单</button>
        </div>
      </div>
    </div>
 
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      name: "",
      price: "",
      section_num: "",
    };
  },
  created() {
    this.name = localStorage.name;
    this.price = localStorage.price;
    console.log(this.name);
  },
   
};
</script>

<style scoped>
.div_body {
  width: 100%;
  height: 12.2rem;
  background-color: rgb(247, 245, 245);
  position: absolute;
}
.div_boxs {
  width: 94%;
  height: 1.7rem;
  border-radius: 10px;
  background-color: white;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.div_boxs2 {
  width: 94%;
  height: 1rem;
  border-radius: 10px;
  background-color: white;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.32rem;
}
.div_boxs3 {
  width: 94%;
  height: 1.8rem;
  border-radius: 10px;
  background-color: white;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.div_footer {
  width: 100%;
  height: 1.1rem;
  background-color: white;
  position: fixed;
  bottom: 0rem;
  display: flex;
}
.div_footer_box2 {
  width: 45%;
  height: 100%;
  /* background-color: violet; */
}
.div_footer_box3 {
  width: 55%;
  height: 100%;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.btn {
  width: 2.3rem;
  height: 0.8rem;
  background-color: red;
  color: white;
  border: none;
  border-radius: 20px;
}
.div_yong {
  position: relative;
  left: -0.2rem;
  color: gray;
}
.div_discount {
  position: relative;
  left: 0.2rem;
}
.div_boxs_btn {
  width: 1.2rem;
  height: 0.4rem;
  background-color: rgb(247, 245, 219);
  color: orange;
  border: none;
}
.div_rem {
  width: 50%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0.3rem;
  left: 0.3rem;
}
.div_price {
  width: 10px;
  position: relative;
  left: 90%;
  z-index: 666666666666666;
  font-size: 0.34rem;
  color: red;
  top: -0.2rem;
}
.div_boxs_div2 {
  width: 94%;
  display: flex;
  justify-content: space-between;
  position: relative;
  top: 0.1rem;
  left: 0.2rem;
  color: gray;
}
.div_boxs_div3 {
  width: 94%;
  display: flex;
  justify-content: space-between;
  margin-top: 0.23rem;
  margin-left: 0.2rem;
  color: gray;
}
.div_ke {
  width: 30%;
  position: relative;
  top: 0.2rem;
  left: 0.4rem;
  font-size: 0.32rem;
  color: gray;
}
 
</style>
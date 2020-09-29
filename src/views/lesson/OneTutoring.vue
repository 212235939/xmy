<template>
  <div>
    <div class="div_header_nav">
      <div class="Size iconfont icon-zuojiantou" @click="back"></div>
      <div style="color: red">一对一辅导</div>
      <div class="Size iconfont icon-icon-search"></div>
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value1" :options="option1" />
      <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
    <div class="div_body_hidden">
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
      <div class="div_body_box">
        <div class="div_body_box2">
          <img src="../../images/timg.jpg" alt="" />
        </div>
        <div class="div_body_box3">
          <div class="div_body_box3_div1">杨德胜</div>
          <div class="div_body_box3_div2">男 30年教龄</div>
        </div>
        <div class="div_body_box4"><button>预约</button></div>
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 0,
      value2: "a",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  methods: {
    back() {
      window.history.back();
    },
  },
};
</script>

<style scoped>
.div_header_nav {
  width: 99%;
  height: 1rem;
  /* border: 1px solid blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  /* color:gainsboro; */
}
.Size {
  font-size: 0.5rem;
}
.div_body_box {
  width: 100%;
  height: 1.4rem;
  background-color: white;
  margin: 10px 10px 0px 0px;
  border-radius: 0.2rem;
  display: flex;
  justify-content: space-between;
}
.div_body_box2 {
  width: 30%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_body_box2 img {
  width: 50%;
  height: 70%;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.div_body_box3 {
  width: 40%;
  height: 100%;
  /* background-color: yellow; */
}
.div_body_box4 {
  width: 30%;
  height: 100%;
  /* background-color: yellowgreen; */
  /* text-align: center; */
  display: flex;
  align-items: center;
}
.div_body_box4 button {
  width: 1.3rem;
  height: 0.7rem;
  border-radius: 30%;
  background-color: gainsboro;
  border: 1px solid gainsboro;
  color: red;
}
.div_body_hidden {
  width: 100%;
  height: 25rem;
  background-color: rgb(238, 233, 211);
}
.div_body_box3_div1 {
  width: 100%;
  height: 60%;
  /* background-color: violet; */
  font-size: 0.34rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.div_body_box3_div2 {
  width: 100%;
  height: 40%;
  /* background-color: salmon; */
  color: gray;
}
</style>
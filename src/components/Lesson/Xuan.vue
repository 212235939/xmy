<template>
  <div id="customer">
    <!-- 悬浮的HTML -->
    <div
      v-if="!isShow"
      class="xuanfu"
      id="moveDiv"
      @mousedown="down"
      @touchstart="down"
      @touchmove="move"
      @touchend="end"
    >
      <!-- <div class="yuanqiu"></div> -->
      <div class="yuanqiu iconfont icon-duanxin"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flags: false,
      isShow: false,
      position: {
        x: 0,
        y: 0,
      },
      nx: "",
      ny: "",
      dx: "",
      dy: "",
      xPum: "",
      yPum: "",
    };
  },
  methods: {
    // 实现移动端拖拽
    down() {
      this.flags = true;
      var touch;
      if (event.touches) {
        touch = event.touches[0];
      } else {
        touch = event;
      }
      this.position.x = touch.clientX;
      this.position.y = touch.clientY;
      this.dx = moveDiv.offsetLeft;
      this.dy = moveDiv.offsetTop;
    },
    move() {
      if (this.flags) {
        var touch;
        if (event.touches) {
          touch = event.touches[0];
        } else {
          touch = event;
        }
        this.nx = touch.clientX - this.position.x;
        this.ny = touch.clientY - this.position.y;
        this.xPum = this.dx + this.nx;
        this.yPum = this.dy + this.ny;
        moveDiv.style.left = this.xPum + "px";
        moveDiv.style.top = this.yPum + "px";
        //阻止页面的滑动默认事件
        document.addEventListener(
          "touchmove",
          function () {
            event.preventDefault();
          },
          false
        );
      }
    },
    //鼠标释放时候的函数
    end() {
      this.flags = false;
    },
  },
};
</script>

<style>
.xuanfu {
  height: 1rem;
  width: 1rem;
  z-index: 990;
  position: fixed;
  top: 7.6rem;
  right: 0.5rem;
  border-radius: 50%;
  background-color: rgb(46, 46, 216);
}
.yuanqiu {
  height: 0.5rem;
  width: 0.5rem;
  /* border: 0.2rem solid rgba(140, 136, 136, 0.5); */
  margin: 0.35rem auto;
  color: #000000;
  font-size: 0.6rem;
  line-height: 0.8rem;
  text-align: center;
  border-radius: 100%;
  /* background-color: #ffffff; */
  position: relative;
  top: -0.24rem;
  left: -0.08rem;
  color: white;
}
</style>
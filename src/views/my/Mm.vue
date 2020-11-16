<template>
  <div>
    <div class="nav">
      <ul>
        <li :class="{'active':active=='tro'}" @click="myScrollTo('tro')">课程介绍</li>
        <li :class="{'active':active=='list'}" @click="myScrollTo('list')">课程大纲</li>
        <li :class="{'active':active=='com'}" @click="myScrollTo('com')">课程评价</li>
      </ul>
    </div>

    <div class="content">
      <div id="tro">
        <span>课程介绍</span>
      </div>
      <div id="list">
        <span>课程大纲</span>
      </div>
      <div id="com">
        <span>课程评价</span>
      </div>
    </div>
  </div>
</template>
<script>
// import $_jq from "jquery";
export default {
  data() {
    return {
      active:'tro'
    };
  },
  methods: {
    handleScroll() {
      // 1 、判断滚动条滚动距离 top 超过 导航头的高度45  切换样式
      this.top =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageXOffset;
      // 2、 根据滚动的高度 来切换  小导航 里选中样式

      let tro_h = $_jq("#tro").offset().top;  //0
      let list_h = $_jq("#list").offset().top; // 盒子的高度
      let com_h = $_jq("#com").offset().top;

      console.log(this.top);
      if(this.top>=0&&this.top<=list_h){  //显示第一个模块的标题
        this.active = "tro";
      }
      if(this.top>list_h&&this.top<=com_h){ //显示第二个标题
        this.active = "list";
      }
       if(this.top>com_h){ //显示第三个标题
        this.active = "com";
      }
    },
    myScrollTo(name) {
      // tro  list com
      this.active = name;
      // 把对应的盒子 滚动 这个盒子的  offsetTop  高度
      let top = $_jq("#" + name).offset().top - 45;
      $_jq("html").animate({ scrollTop: top }, 500);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
<style lang="css">
ul > li {
  width: 33%;
  height: 45px;
  font-size: 0.5rem;

  text-align: center;
  float: left;
    color: darkgray;
}
.content div > span {
  /* float: left; */
  font-size: 0.5rem;
  margin-top: 45px;

}
.content > div {
  height: 800px;
}
.nav{
    height: 1.17333rem;
    height: 11.73333vw;
    width: 100%;
    box-sizing: border-box;
    position: fixed;
    z-index: 9;
    background: #fff;
}
 .active {
        color: #333;
        font-weight: 500;
        font-size: 0.5rem;
      }
</style>


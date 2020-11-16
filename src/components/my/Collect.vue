<template>
  <div>
    <div class="box">
      <van-nav-bar title="我的收藏" left-arrow @click-left="onlist()" />
      <!-- <div class="acbox">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
          alt=""
        />
        <p>暂无收藏</p>
      </div> -->
      <div v-for="(item, index) in CollectList" :key="index" class="div_box">
        <div class="div_children_box2">{{ item.title }}</div>
        <div class="div_children_box3">
          <div>{{ item.start_play_date | formatDate }}</div>
          <div>{{ item.end_play_date | formatDate }}</div>
          <div>共{{ item.sales_num }}课时</div>
        </div>
        <div class="div_children_box4">
          <div class="div_imgs">
            <img :src="item.teachersAvatar" alt="" />
          </div>
          <div>{{ item.teachers }}</div>
        </div>
        <div class="div_children_box5">
          <div>{{ item.sales_num }}已报名</div>
          <div></div>
        </div>
      </div>
        <div class="div_geng">没有更多了</div>
    </div>
   
  </div>
</template>

<script>
import { MyCollect } from "../../../src/views/api/api.js";
import { formatDate } from "../../utaicl/util";
export default {
  data() {
    return {
      CollectList: [],
    };
  },
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "MM月dd日 hh:mm");
    },
  },
  methods: {
    onlist() {
      this.$router.go(-1);
    },
  },
  async mounted() {
    var obj = await MyCollect({
      page: 1,
      limit: 10,
      type: 1,
    });

    console.log(obj.data.data.list);
    if (obj.data.code == 200) {
      this.CollectList = obj.data.data.list;
    }
  },
};
</script>

<style scoped>
bady {
  background: rgb(39, 39, 39);
}
.box {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
}
.acbox {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.3rem;
  font-size: 0.3rem;
}
.acbox img {
  width: 47%;
  height: 2.5rem;
}
.van-nav-bar .van-icon {
  color: #000000;
}
.div_box {
  width: 93%;
  height: 3rem;
  background-color: white;
  border-radius: 10px;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
}
.div_children_box2 {
  width: 90%;
  height: 19%;
  /* background-color: wheat; */
  margin-left: 0.2rem;
  font-size: 0.34rem;
}

.div_children_box3 {
  width: 80%;
  height: 15%;
  /* background-color: rgb(13, 238, 81); */
  margin-left: 0.2rem;
  display: flex;
  justify-content: space-between;
  color: gray;
}
.div_children_box4 {
  width: 40%;
  height: 40%;
  /* background-color: rgb(213, 238, 81); */
  margin-left: 0.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_children_box4 img {
  width: 90%;
  height: 30%;
  border-radius: 50%;
}
.div_children_box5 {
  width: 90%;
  height: 26%;
  /* background-color: rgb(213, 38, 81); */
  margin-left: 0.2rem;
  display: flex;
  align-items: center;
}
.div_imgs {
  width: 30%;
}
.div_geng{
  width: 100%;
  height: 0.3rem;
  text-align: center;
  color:gray;
}
</style>
<template>
  <div>
    <div class="box">
      <van-nav-bar title="我的关注" left-arrow @click-left="onlist()" />
      <div v-if="list.length == 0" class="acbox">
        <img
          src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2165691866,2570924737&fm=26&gp=0.jpg"
          alt=""
        />
        <p>暂无关注</p>
      </div>

      <div v-else class="asd" v-for="(item, index) in list" :key="index">
        <img :src="item.im" alt="" />
        <div>
          <p>
            <span>{{ item.name }}</span>
            <span>M20</span>
          </p>
          <p class="aset">{{ item.jxs }}</p>
        </div>
        <van-button
          type="primary"
          @click="add(index)"
          round
          color="#7232dd"
          size="mini"
          ><span class="qqq">取消关注</span></van-button
        >
      </div>
      <p v-if="list.length > 0" style="text-align: center; color: #969799">
        没有更多了
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          im:
            "https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/image/20192TSKKmyNso1572684453.png",
          name: "名字",
          jxs:
            "马学斌老师，从2004年起，专注中考数学压轴题15年，专著《挑战中考数学压轴题》近几年每年服务读者30万。海面授学生听众累计超过5000人，",
        },
      ],
    };
  },
  methods: {
    onlist() {
      this.$router.go(-1);
    },
    add(i) {
      console.log(i);
      this.list.splice(i, 1);
    },
  },
};
</script>

<style scoped>
bady {
  background: rgb(39, 39, 39);
}
.qqq {
  margin: 0px 5px;
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
.asd {
  width: 95%;
  border-radius: 4px;
  /* height: 1rem; */
  margin: 0.5rem auto;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
 
.asd img {
  margin-right: 0.3rem;
  width: 0.9rem;
  height: 0.9rem;
}
.van-nav-bar .van-icon {
  color: #000000;
}
.aset {
  font-size: 3.2vw;
  color: #b7b7b7;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 53.33333vw;
}
</style>
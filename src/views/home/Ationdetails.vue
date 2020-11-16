<template>
  <div>
    <div class="div_imgs">
      <img :src="images" alt="" />
    </div>
    <div>
      <div class="div_title">{{ title }}</div>
      <div class="div_lun">
        <div>{{ nums }}次预览</div>
        <div>{{ careate | formatDate }}</div>
      </div>
      <div class="div_names">{{ datetitle }}</div>
      <div v-html="lists.content" class="div_iii"></div>
    </div>
  </div>
</template>




<script>
import { Indexaction } from "../api/api.js";
import { formatDate } from "../../utaicl/util.js";
export default {
  data() {
    return {
      images: "",
      title: "",
      nums: "",
      careate: "",
      datetitle: "",
      lists: [],
    };
  },
  filters: {
    formatDate(time) {
      time = time * 1000;
      let date = new Date(time);
      return formatDate(date, "MM-dd");
    },
  },
  async mounted() {
    var id = this.$route.query.items;
    var data = await Indexaction({ information_id: id });
    console.log(data.data);
    this.images = data.data.thumb_img;
    this.title = data.data.title;
    this.nums = data.data.click_rate;
    this.careate = data.data.created_at;
    this.datetitle = data.data.description;
    this.lists = data.data;
  },
};
</script>

<style scoped>
.div_imgs {
  width: 100%;
  height: 4.3rem;
}
.div_imgs img {
  width: 100%;
  height: 100%;
}
.div_title {
  width: 80%;
  height: 1rem;
  font-size: 0.5rem;
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
.div_lun {
  width: 90%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  color: gray;
  margin-left: 0.2rem;
  font-size: 0.32rem;
}
.div_names {
  width: 80%;
  height: 4rem;
  flex-wrap: wrap;
  /* border:1px solid red; */
  margin: 0 auto;
  font-size: 0.35rem;
  color: gray;
  /* margin-top:-0.4rem; */
  position: relative;
  top: -1rem;
}
.div_iii{
    width: 90%;
    margin-left:0.3rem;
    position: relative;
    top:-2rem;
}
</style>
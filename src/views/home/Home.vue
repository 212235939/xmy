<template>
  <div>
    <div>
      <!-- 轮播图 -->
      <div class="swipers">
        <swiper :BannerList="BannerList"></swiper>
      </div>
      <!-- 轮播图下 -->
      <div class="content">
        <!-- 三个小格子 -->
        <div class="three">
          <div
            @click="goke(index)"
            v-for="(item, index) in One_To_OneList"
            :key="index"
          >
            <img class="img1" :src="item.imgs" />
            <div class="text">{{ item.titleobj }}</div>
          </div>
        </div>

        <div>
          <section v-for="(item, index) in datalist" :key="index">
            <!-- 上面的头信息 -->
            <p class="div_p">{{ item.channel_info.name }}</p>
            <section_item
              :course="item.list"
              :dataType="item.channel_info.type"
              @TeacherClick="TeacherClick"
            ></section_item>
            
            <!-- 在父组件中传给子组件一个type类型，然后在子组件中通过type的值来判断数据的渲染-->
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indexlist, Indexbanner } from "../api/api.js";
import section_item from "../../components/section_item.vue";
import swiper from "@/components/home/swiper.vue";
import mteacher from "@/components/home/mteacher.vue";
export default {
  data() {
    return {
      datalist: [], //精品课程
      BannerList: [],
      One_To_OneList: [
        {
          imgs:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAA8CAYAAADSfGxZAAAFZUlEQVRoQ+1bW2xUVRRd68xMeZPaFESeBkuLhkekk6IfxDEEMQqUmWGMwcQPE5FEo9GYGONP/TIh8UH88BsNwTDObR0CGsUImGDAGVEQIn1JIBYqBSwtr5m5Z5tbaDLYoXPb28d8nPs1ybl7n7PXXWedk8leRN6zfv3pSr/f9wypN4uwlhAheJKQvVnNfblc2fkLFy72ptPBbH5cqf0OhcQ/ZcqJaWVl02dRsmtJrtPQywmQwG+AfJG1M98mk0s7+9dO50dDg6jjx5vrofE2qFYC4htYnPQC6gREpwl1BD5/KpF48DRAKQ0ghNFoexVsvVKAWlCCAJYDmDZwfbQBSYPqo2XLHoo3NFD3AbEp3FKvIZ8CmFesKBE4hfcQuASgTSi7/f7pTfH4AxeLxY7G+MaNV8qV6opSEBVIjQgqSU4FRBWbTwSdCmproqmqibG1Jyv05EBCgFCxwHuNk8hCuF+RO5Dhz7dU9koyWXMNoB5uzsJxomKxi5Ntu7tcCR63oV8g1NOATPAwz8GcrTczGm2Lira/BOD3kOxOaN82+UegjwE4qrRKZcVOJ5OLO7zk3rCh/X6lsisUVJ1QgnSoD84CpI/RHp8ciJcZibRaEB32mGxAuAhyJLodYEB1REQn/P7Md/H4koybuUKhH/0VFfNDgH4eIo8BmCki95EcgQ/2/xWovYyEW/4GZLabxXl/hx0UvHnmXHfjvU6eWEx8OtuyUYhtABZ6n9NNBl5gJNx8tbCyukkwrHe6QLXFsqoaC0WHw+1riNxOADOGlX14Qb0OI256FJuhT00esqxFTxQGonk/gdVDT+op4ta4AEHiWsKqnlpo6ZFwcw+AgmOeSh00mOMFBHXCWlTg0gZEIy22SPE7wMiCYoDoP/YNI24jYRhhGHG3xhhGGEYYRhQ8d83WMFvDbA2zNQa7lBuNMBphNMJohNEIF39dGLE0YmnE0oilEUsjli4QMGJpxNKIpRFLF1JhbpZGLI1YGrE0YmnE0gUC+WI55j1UIEuuUaTHaSY7BeBh9+h5f7MEgWhmJNKyGyIx7+W5zzAYEJFws9OtOxKNpO4XBCQZibRththOO9+YPSXHCGIrY+va5tsB+zCAOWOFRCkBIYIOZfMphkJ/Tawoz34G4kUARTvaRwKsUgHCcRoQ2JHT+vXbNoX69lVa5XaNFStKBQgAl0GELav6UB8QfQ3g5XNfA+XjkfjixXKUChCK8l7X5Y5tBw48mbtLnaPh5u0CbAEwsVgxXsZL4NS4CeJzy6p+pb+Ou4CIxQ5PyuUq3yL4BiCj1hQ+zoz4F4IPc1pvTyYXO+3Ofc+A89oBQzIzH9VKPgBk1Wic6eMEhGOqOQLiHZ9v0i/x+Lwb+ay+58XF8U3YduuzFHlVgKUQTAc5yY1Xqti2GQsg7pwI10H2CORPQH9y9mzNvnSaBR2Krm5wkcipBSKBOooESdQKuAKQ8uGyZRSBcL56twC/UyRFqKOiJGVZ1e1FP06xF/LHa2tTgTlzJlQEAhNna40QgSggdQACQ8kDoNdqrC5gQwSGaVPIkvhVNCz6yr6/caP3fGfnzUtD8ae6YsRgRcZirVW2Lc9BY5NAHLvkNBKDue4cw+QPVlP1mkJ5I+HT3wBcOzjbJCPCq1ToANhIqp2JxMJWLx5Uz0D0F+O4b2eUn1liq1wQIkEI60A8MsAdRLQqW1766uuanwoBEY22BSF6l4hU5Y87ZjkQfxBMQUuKwqNqwq2Tbs1yxRg7YkDkT+ScPJnMzMoyxQU29DpA6gHMFeCYz+d7v6vr7EHnElN4caLC4ZbVhLwL0HH1ngO4F0BSa7ZrPfnSnj2zrxcrbKjj/wFPducAYoibwgAAAABJRU5ErkJggg==",
          titleobj: "特色课",
        },
        {
          imgs:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD8AAAA8CAYAAADRy2JxAAAEDElEQVRoQ+2aTWhUVxTH/+fNRyYmE78WirTQFgwiXSjFjWDRlR+k0CIOlJiaVk1VNGrGmBZaOy24EXSmlBqk2inUyaRZKM3MFFxoNt1VQXEhiogSSKwL48ckMTNz7yk3VQntTN7Me2HezJv3tveee+7vnnP+9773LgFAaGjIPZ4eeVsCX4KwCZKXgEhTbRX3EP4mxiXp1b46tfHjYTPzIwX+/PloO4i/AfCGmcHKZcsAa6ALYnKiIxzY9dioX+pOxJZL4Eq1gM8AfeRyy/dPbG67bRg+mIxFwWg3OoBldkTMLFaf+qDthtE5UDDRNwrwUqMDWGnHkKvMwQ/GBAiVKW46K2sePhFjK6NnxrcDb67mncibyT7LbJ20d9LeWPJR0KZq352KLmX2vguX5n+9NDmAmB7kXqTvh7ftHLMlfFeqv5lYXARjZZ6cEAD+AmG/LeGDidhBAJFCxaBejEAYtCV8VzL2NTG+m1UJCE9rFx6AA29so7DeqtAhp6i0dyJvw33eibye2jtp76S99cptZAaO2ud5pXUEzxG82YvJOd4aEZtKsHEEr0YFb0oKXhP+cPvN/2ZhLaj9XUHYGGlpvVcz8OoTFAETID7pn/AeDwUCmfLAT/8Wxp9EuE7M2XKLHhMxMacl+NaLSW/qdCCQzjeHuU97IgbzOZGRx0T92OOp4TpZbvhlzc0cWr9B/VWe9efqnMIzIEAUnwR39ra0jpUbulR/cwf/b8TPC4/siWxqGy11Ilb0nxt4VWPA2Vx26mjko0+fWAFixKdpeJXqBPSJXKazmsCnr9WNj/wiGa16C5f/bK+T6ocuRhdoLs8KaFSv56Cc7STIzRqvJaJOMC/S8/1/eAUO/klkMz35In7093N+ofl6AV4PaC49B2VtZ3U9D00gqgOritV7q0vGnoAxX3UrJtW/+CO+OivkNfX9T2/wSm+nI6l4J0vZw0ATgfpFRhyLbC2s6l2D51uIKFHpYMXMj7YNDHjfdE++xW6PJ+eWwz9s2f5sNkNbwRezQjP7dCV/20Ccu2yLtC8V/lAy9o6LoWp+Qam2lda/ZNHqSJyZ59caf4ZEoNqjXzK8it7h5K/rNNbOMrCcqlj1DcGrPfTwYP97mov3QvJmAEuq8f6uMfiXxbtv4MdGX8PiZaRhviayPstqmqlegrYQcIBR/CVqU/CWwRZwfCQR382QYQDzitEjW8F3XD3jaRpp3AtCiIGFesGxFbyCDQ1FfemJuh2QfFqvBGwH/yrawVTfLkiEAW4oVAK2hVcl4H/o30PM3xYqAdvCqwxoH4r6Fo97PyFGb74SsDX8qxLoTsY/E1J+D0LDjEOZrAn46V1gtPFzxvSV1Je7AN2pCfjXJZCu3wqSx8H8yEXo+Qf3I4hni2PDwwAAAABJRU5ErkJggg==",
          titleobj: "一对一辅导",
        },
        {
          imgs:
            "data:image/png;base64,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",
          titleobj: "学习日历",
        },
      ],
    };
  },
  components: {
    swiper,
    mteacher,
    section_item,
  },
  //用async,await语法写 ，它们两个都是同步的写法
  async mounted() {
    var res = await Indexlist();
    console.log(res.data.data);
    this.datalist = res.data.data;
    // this.name = res.data.data[1].list;
    // this.list = res.data.data[4].list; //名师阵容
    // this.datalist = res.data.data[1].list; //精品课程

    //获取轮播图数据
    var banner = await Indexbanner();
    // console.log(banner.data.data);
    this.BannerList = [...banner.data.data];
  },
  methods: {
    //通过index下标来判断跳转哪个页面
    goke(index) {
      console.log(index);
      if (index == 0) {
        this.$router.push("/Course");
      } else if (index == 1) {
        this.$router.push("/onetutoring");
      } else if (index == 2) {
        this.$router.push("/datedate");
      }
    },
    //点击名师阵容带着自身内容跳转
    TeacherClick(id) {
      console.log(id);
      this.$router.push({
        path: "/teacherdetail",
        query: {
          id,
        },
      });
    },
  },
};
</script>

<style scoped>
.text {
  margin-top: -0.7rem;
}
.img1 {
  width: 0.5rem;
  height: 0.5rem;
}
.threee {
  width: 100%;
  height: 10vh;
}
.swipers {
  width: 100%;
  height: 4rem;
}
.swipers img {
  width: 100%;
  height: 4rem;
}
.content {
  width: 100%;
  background: rgb(240, 242, 245);
  position: relative;
  margin: -8px auto;
}
.content > div {
  width: 95%;
  margin: 0 auto;
}
.three {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  top: -0.3rem;
}
.three > div {
  width: 25%;
  height: 1.8rem;
  border-radius: 5px;
  background: white;
  column-rule: black;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.div_ming {
  width: 23%;
  text-align: center;
  border-left: 2px solid red;
  font-size: 0.33rem;
  color: gray;
  margin-top: 0.2rem;
}
.div_boxs {
  width: 100%;
  height: 1.6rem;
  background-color: white;
  margin-top: 0.3rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
}
.div_boxs_img {
  width: 20%;
  height: 100%;
  /* background-color: red; */
  text-align: center;
}
.div_boxs_img img {
  width: 60%;
  height: 50%;
  border-radius: 50%;
  margin-top: 0.3rem;
}
.div_boxs_title {
  width: 80%;
  height: 100%;
  /* background-color: black; */
}
.div_boxs_title2 {
  width: 100%;
  height: 20%;
  /* background: burlywood; */
}
.div_boxs_title3 {
  width: 100%;
  height: 40%;
  /* background-color: skyblue; */
  font-size: 0.34rem;
  font-family: "宋体";
}
.div_boxs_title4 {
  width: 100%;
  height: 40%;
  /* background-color: gold; */
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: gray;
}
.div_jing {
  width: 95%;
  height: 4rem;
  background-color: white;
  margin-top: 0.2rem;
  border-radius: 10px;
  margin-left: 0.2rem;
}
.div_jing2 {
  width: 90%;
  height: 30%;
  /* background-color: red; */
  font-size: 0.32rem;
  flex-wrap: wrap;
  display: flex;
  align-items: center;
  color: gray;
  margin-left: 0.2rem;
}
.div_jing3 {
  width: 100%;
  height: 20%;
  /* background-color: violet; */
  color: rgb(216, 202, 230);
  font-size: 0.32rem;
  margin-left: 0.2rem;
}
.div_jing4 {
  width: 100%;
  height: 30%;
  /* background-color: blue; */
  margin-left: 0.2rem;
}
.div_jing4 img {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
}
.div_jing5 {
  width: 90%;
  height: 20%;
  /* background-color: yellowgreen; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: gray;
  margin-left: 0.2rem;
}
.div_jing5 img {
  width: 0.3rem;
  height: 0.3rem;
}
.div_jing4_imgs {
  margin-left: 0.2rem;
}
.div_yang {
  font-size: 0.36rem;
  font-family: "宋体";
  position: relative;
  top: -0.7rem;
  margin-left: 1.4rem;
}
.div_yang2 {
  font-size: 0.26rem;
  font-family: "宋体";
  position: relative;
  top: -0.7rem;
  margin-left: 1.4rem;
}
.div_b {
  color: orange;
  font-size: 0.27rem;
  margin-left: 0.1rem;
}
.div_p {
  border-left: 2px solid red;
  margin-left: 0.2rem;
  width: 1.7rem;
  text-align: center;
  font-size: 0.36rem;
  font-family: "宋体";
}
</style>
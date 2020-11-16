<template>
  <div>
    <div>
      <van-search
        v-model="value"
        show-action
        shape="round"
        placeholder="请输入关键字"
        @search="onSearch"
        @input="onqqq"
      >
        <template #left>
          <div>
            <van-icon name="arrow-left" size="20" @click="onFan" />
          </div>
        </template>
        <template #action>
          <div style="font-size: 0.3rem" v-show="!star">取消</div>
          <div style="font-size: 0.3rem" @click="onCa" v-show="star">搜索</div>
        </template>
      </van-search>
    </div>

    <div v-show="this.DownList == ''">
      <div>
        <van-cell>
          <template #title>
            <span class="custom-title">历史记录</span>
          </template>
          <template #right-icon>
            <van-icon name="delete" class="search-icon" @click="onDelete" />
          </template>
        </van-cell>
      </div>
      <div style="margin-left: 25px">
        <van-button
          round
          type="default"
          color="#F7F7F7"
          size="mini"
          v-for="(item, index) in history"
          :key="index"
          @click="onClick(item)"
        >
          <span style="color: black">{{ item }}</span>
        </van-button>
      </div>
    </div>

    <div class="div_Body">
      <div
        v-for="(item, index) in DownList"
        :key="index"
        class="div_space"
        @click="course(item)"
      >
        <div class="div_space2">
          <img :src="item.cover_img" alt="" />
        </div>
        <div class="div_space3">
          <div class="div_spaces2">
            <div class="div_ttt">{{ item.title }}</div>
          </div>
          <div class="div_spaces3">
            <div class="divs_space">
              <div class="div_ttt2">{{ item.sales_num }}人已报名</div>
            </div>
            <div class="divs2_space">
              <div class="div_ttt2">免费</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Indexbooks } from "../api/api.js";
export default {
  data() {
    return {
      value: "",
      history: [],
      isss: true,
      star: false,
      courselist: [],
      DownList: [],
    };
  },
  created() {
    let history = localStorage.history;
    if (history) {
      this.history = JSON.parse(history);
    }
  },
  mounted() {},
  methods: {
    async onqqq(val) {
      console.log("1");
      if (this.value != "") {
        this.isss = false;
        this.star = true;
      } else {
        this.isss = true;
        this.star = false;
      }
      var a = await Indexbooks({
        limit: 10,
        page: 1,
        course_type: 0,
        keywords: this.value,//把输入的关键字传入
      });
      console.log(a.data);
      //判断当code值为200时再给数组进行赋值
      if (a.data.code == 200) {
        this.DownList = a.data.data.list;
      }
    },
    course(item) {
      console.log(item.id);
      this.$router.push({
        path: "coursedetails",
        query: {
          ids: item.id,
        },
      });
    },
    onCa() {
      this.isss = true;
      this.history.unshift(this.value);
      console.log(this.value);
      localStorage.history = JSON.stringify(this.history);
      this.value = "";
    },
    onSearch(val) {
      this.save(val);
      this.isss = true;
      this.value = "";
      console.log("11");
    },
    onClick(item) {
      this.save(item);

      this.isss = false;
      this.star = true;
    },
    save(item) {
      this.value = item;
      var index = this.history.findIndex((element) => {
        return element == item;
      });
      if (index !== -1) {
        this.history.splice(index, 1);
      }
      this.history.unshift(item);
      localStorage.history = JSON.stringify(this.history);
      if (this.history.length > 4) {
        this.history.pop();
      }
    },
    onDelete() {
      this.history = [];
      localStorage.history = JSON.stringify(this.history);
    },
    onFan() {
      this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.search-icon {
  font-size: 18px;
  line-height: inherit;
  font-weight: 500;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
  font-weight: 600;
}
.div_content {
  width: 100%;
  height: 2rem;
  background-color: blueviolet;
}
/* .div_Body {
  position: relative;
  top: 2.2rem;
} */
.div_space {
  width: 94%;
  margin-left: 0.2rem;
  border-radius: 0.2rem;
  height: 2.3rem;
  /* background-color: green; */
  margin-top: 0.3rem;
  display: flex;
  justify-content: space-between;
}
.div_space2 {
  width: 40%;
  height: 100%;
  /* background-color: hotpink; */
}
.div_space2 img {
  width: 90%;
  height: 90%;
  border-radius: 0.2rem;
}
.div_space3 {
  width: 60%;
  height: 100%;
  /* background-color: skyblue; */
}
.div_spaces2 {
  width: 100%;
  height: 50%;
  /* background-color: violet; */
  font-size: 0.32rem;
}
.div_spaces3 {
  width: 94%;
  height: 50%;
  /* background-color: tomato; */
  display: flex;
  justify-content: space-between;
}
.div_ttt {
  position: relative;
  top: 0.5rem;
}
.div_ttt2 {
  position: relative;
  top: 0.4rem;
}
.divs_space {
  color: gray;
}
.divs2_space {
  font-size: 0.32rem;
  color: green;
}
</style>
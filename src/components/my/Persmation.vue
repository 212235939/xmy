<template>
  <div>
    <div class="div_header">
      <div class="div_icon">
        <van-icon name="arrow-left" size="20" @click="icon" />
      </div>
      <div class="div_title">个人消息</div>
    </div>

    <div class="div_body">
      <div class="div_ttt"></div>
      <div class="div_touxiang">
        <div class="div_touxiang_title">头像</div>
        <div class="div_touxiang_icon" @click="tou">
          <van-icon name="arrow" size="18" color="gray" />
        </div>
      </div>

      <div class="div_touxiang">
        <div class="div_touxiang_title">昵称</div>
        <div class="div_touxiang_icon">
          <div class="div_b22">{{ molie }}</div>
          <van-icon
            name="arrow"
            size="18"
            color="gray"
            class="aaaa"
            @click="nickname"
          />
        </div>
      </div>

      <div class="div_touxiang">
        <div class="div_touxiang_title">手机号</div>
        <div class="div_touxiang_icon">
          <div class="div_b2">18937715713</div>
        </div>
      </div>

      <div class="div_touxiang">
        <div class="div_touxiang_title">性别</div>
        <div class="div_touxiang_icon">
          <b class="div_b">保密</b>
          <van-icon name="arrow" size="18" color="gray" />
        </div>
      </div>

      <div class="div_touxiang">
        <div class="div_touxiang_title">出生日期</div>
        <div class="div_touxiang_icon">
          <div class="div_b4">2008-10-03</div>
          <van-icon name="arrow" size="18" color="gray" class="div_B4_icon" />
        </div>
      </div>
      <div class="div_touxiang">
        <div class="div_touxiang_title">所在城市</div>
        <div class="div_touxiang_icon">
          <div class="div_b3">北京,北京市,昌平区</div>
          <van-icon
            name="arrow"
            size="18"
            color="gray"
            class="name_icon"
            @click="cheng"
          />
        </div>
      </div>

      <div class="div_touxiang">
        <div class="div_touxiang_title">学科</div>
        <div class="div_touxiang_icon">
          <b class="div_b">语文 数学 物理 生物 政治</b>
          <van-icon name="arrow" size="18" color="gray" @click="subject" />
        </div>
      </div>
      <div class="div_touxiang">
        <div class="div_touxiang_title">年级</div>
        <div class="div_touxiang_icon" @click="icon8">
          <div class="div_b3">初一</div>
          <van-icon name="arrow" size="18" color="gray" class="dd2" />
        </div>
      </div>
    </div>
    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="areaList" />
    </van-popup>
    <van-popup v-model="shows" position="bottom" :style="{ height: '30%' }">
      <div class="div_item">拍照</div>
      <div class="div_item1">从手机相册选择</div>
      <div class="div_item" @click="xiao">取消</div>
      <!-- <div>{{ molie }}</div> -->
    </van-popup>

    <van-popup v-model="show3" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="List" class="div_area" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      shows: false,
      show3: false,
      molie: 0,
      columns: ["河南省", "河北省", "湖北省"],
      List: {
        province_list: {
          110000: "小学一年级",
          120000: "小学二年级",
          130000: "小学三年级",
          140000: "小学四年级",
          150000: "小学五年级",
          160000: "小学六年级",
          170000: "初一",
          180000: "初二",
          190000: "初三",
          200000: "高一",
          210000: "高二",
          220000: "高三",
        },
      },
      areaList: {
        province_list: {
          110000: "北京市",
          120000: "天津市",
        },
        city_list: {
          110100: "北京市",
          110200: "县",
          120100: "天津市",
          120200: "县",
        },
        county_list: {
          110101: "东城区",
          110102: "西城区",
          110105: "朝阳区",
          110106: "丰台区",
          120101: "和平区",
          120102: "河东区",
          120103: "河西区",
          120104: "南开区",
          120105: "河北区",
        },
      },
    };
  },
  methods: {
    icon() {
      this.$router.push("/my");
    },
    cheng() {
      this.show = true;
    },
    subject() {
      console.log("11111");
      this.$router.push("/subject");
    },
    tou() {
      this.shows = true;
    },
    xiao() {
      this.shows = false;
    },
    nickname() {
      this.$router.push("/nickname");
    },
    icon8() {
      this.show3 = true;
    },
  },
  mounted() {
    var mobile = "15620978384";
    var pattern = /(\d{3})(\d{4})(\d{4})/;
    mobile = mobile.replace(pattern, "$1" + "****" + "$3");
    // console.log(mobile);
    this.molie = mobile;
    console.log(this.molie);
  },
};
</script>

<style scoped>
.div_header {
  width: 100%;
  height: 1rem;
  background-color: white;
  /* border: 1px solid black; */
  display: flex;
  /* justify-content: space-between; */
}
.div_title {
  margin-left: 2.3rem;
  margin-top: 0.2rem;
  font-size: 0.39rem;
  font-family: "宋体";
}
.div_icon {
  margin-top: 0.2rem;
  margin-left: 0.3rem;
}
.div_body {
  width: 100%;
  height: 12.3rem;
  background-color: rgb(236, 241, 241);
  position: relative;
  top: 0.3rem;
}
.div_touxiang {
  height: 1rem;
  background: white;
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  /* margin-top: 0.2rem; */
  text-align: center;
  border-bottom: 1px solid rgb(184, 182, 182);
}
.div_touxiang_title {
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  /* color: gray; */
  font-size: 0.32rem;
  font-family: "宋体";
}
.div_touxiang_icon {
  margin-top: 0.27rem;
}
.div_ttt {
  width: 100%;
  height: 0.3rem;
  margin-top: -0.3rem;
}
.div_b {
  position: relative;
  top: -0.1rem;
  font-size: 0.28rem;
  color: gray;
  left: -0.3rem;
}
.div_b2 {
  color: gray;
  font-size: 0.3rem;
  position: relative;
  left: -0.3rem;
}
.div_b22 {
  color: gray;
  font-size: 0.3rem;
  position: relative;
  left: -0.7rem;
  top: 0.1rem;
}
.div_b3 {
  color: gray;
  font-size: 0.3rem;
  position: relative;
  left: -0.7rem;
}

.div_b4 {
  color: gray;
  font-size: 0.3rem;
  position: relative;
  left: -0.8rem;
  top: 0.1rem;
}
.div_B4_icon {
  position: relative;
  top: -0.3rem;
  left: 0.5rem;
}
.name_icon {
  position: relative;
  top: -0.4rem;
  left: 1.1rem;
}
.aaaa {
  position: relative;
  left: 0.6rem;
  top: -0.3rem;
}
.div_item {
  width: 100%;
  height: 1rem;
  /* text-align: center; */
  /* display: flex;
  justify-content: space-betweens; */
  align-items: center;
  /* position: relative;
  left: 2rem; */
  font-size: 0.35rem;
  font-family: "宋体";
  /* background-color: gold; */
  text-align: center;
  margin-top: 0.2rem;
}
.div_item1 {
  width: 100%;
  height: 1rem;
  /* text-align: center; */
  /* display: flex; */
  /* justify-content: space-betweens; */
  /* align-items: center; */
  /* margin-left: 33%; */
  font-size: 0.35rem;
  text-align: center;
  font-family: "宋体";
}
.div_area{
  position: relative;
  left: 2.7rem;
  top: -2rem;
}
.dd2 {
  position: relative;
  top: -0.34rem;
}
</style>
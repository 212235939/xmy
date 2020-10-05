<template>
  <div>
    <div class="boxss">
      <van-nav-bar title="个人信息" left-arrow @click-left="onlist()" />
      <br />
      <van-cell title="头像" is-link value="" @click="van_cells">
        <template #default>
          <img
            style="width: 0.7rem; height: 0.7rem"
            src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg"
            alt=""
          />
        </template>
      </van-cell>
      <van-cell title="昵称" is-link value="付???" @click="van_cell2" />
      <van-cell title="手机号" value="15237918356" />
      <van-cell title="性别" is-link value="男" @click="van_cell6" />
      <van-cell title="出生日期" is-link value="???-6-66" />
      <van-cell title="所在城市" is-link value="宇宙-???" @click="van_cell3" />
      <van-cell title="学科" is-link value="修仙" @click="van_cell4" />
      <van-cell title="年级" is-link value="?????" @click="van_cell5" />
    </div>
    <van-popup v-model="shows" position="bottom" :style="{ height: '30%' }">
      <div class="div_item">拍照</div>
      <div class="div_item1">从手机相册选择</div>
      <div class="div_item" @click="xiao">取消</div>
      <!-- <div>{{ molie }}</div> -->
    </van-popup>

    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="areaList" />
    </van-popup>

    <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }">
      <div class="div_footer">
        <div style="margin-top: 0.2rem; margin-left: 0.2rem">取消</div>
        <div>确认</div>
      </div>
      <van-area :area-list="List" class="div_area" />
    </van-popup>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shows: false,
      show: false,
      show2: false,
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
    };
  },
  methods: {
    onlist() {
      this.$router.go(-1);
    },
    van_cells() {
      console.log("11111");
      this.shows = true;
    },
    van_cell2() {
      this.$router.push("/nickname");
    },
    van_cell3() {
      this.show = true;
    },
    xiao() {
      this.shows = false;
    },
    van_cell4() {
      this.$router.push("/subject");
    },
    van_cell5() {
      this.show2 = true;
    },
    van_cell6() {
      this.$router.push("/sex");
    },
  },
};
</script>

<style scoped>
.boxss {
  min-height: 100vh;
  background: #f0f2f5;
  box-sizing: border-box;
}
.div_item {
  width: 100%;
  height: 1rem;
  align-items: center;
  font-size: 0.35rem;
  font-family: "宋体";
  text-align: center;
  margin-top: 0.2rem;
}
.div_item1 {
  width: 100%;
  height: 1rem;
  font-size: 0.35rem;
  text-align: center;
  font-family: "宋体";
}
.div_area {
  width: 90%;
  height: 3rem;
  position: relative;
  left: 2.7rem;
  top: -2rem;
}
.div_footer {
  width: 60%;
  height: 1px;
  display: flex;
  justify-content: space-between;
  z-index: 99999999999999999999999999999999999;
  color: orange;
}
</style>
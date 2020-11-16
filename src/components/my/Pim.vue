<template>
  <div>
    <div class="boxss">
      <van-nav-bar title="个人信息" left-arrow @click-left="onlist()" />
      <br />
      <van-cell
        title="头像"
        is-link
        value=""
        @click="van_cells"
        :after-read="afterRead"
      >
        <template #default>
          <img :src="imgs" class="imgss" />
        </template>
      </van-cell>
      <van-cell title="昵称" is-link :value="nickname" @click="van_cell2" />
      <van-cell title="手机号" :value="username" />
      <van-cell
        title="性别"
        is-link
        :value="userInfo.sex | sexs"
        @click="van_cell6"
      />
      <van-cell
        title="出生日期"
        is-link
        :value="Mdates"
        @click="dates"
        v-show="this.Mdates"
      />
      <van-cell
        title="出生日期"
        is-link
        value="请选择"
        @click="dates"
        v-show="!this.Mdates"
      />
      <van-cell title="所在城市" is-link @click="van_cell3"
        >{{ userInfo.province_name }},{{ userInfo.city_name }},{{
          userInfo.district_name
        }}</van-cell
      >
      <van-cell title="学科" is-link value="请选择" @click="van_cell4" />
      <van-cell title="年级" is-link value="请选择" @click="van_cell5" />
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }">
      <van-area :area-list="areaList" @confirm="ren" />
    </van-popup>

    <van-popup v-model="show2" position="bottom" :style="{ height: '40%' }">
      <!-- <div class="div_footer">
        <div style="margin-top: 0.2rem; margin-left: 0.2rem">取消</div>
        <div>确认</div>
      </div> -->
      <van-area :area-list="List" class="div_area" />
    </van-popup>

    <van-popup v-model="tabdates" position="bottom" :style="{ height: '40%' }">
      <van-datetime-picker
        v-model="currentDate"
        type="date"
        title="选择年月日"
        :min-date="minDate"
        :max-date="maxDate"
        @confirm="queren"
      />
    </van-popup>

    <van-action-sheet v-model="shows">
      <div class="div_box2">
        <van-uploader :after-read="afterRead">拍照</van-uploader>
      </div>
      <div class="div_box2">
        <van-uploader :after-read="afterRead">从手机相册选择</van-uploader>
      </div>
      <div class="div_box2" @click="Qx">取消</div>
    </van-action-sheet>
  </div>
</template>

<script>
import { MyMy, MyImg, MySex } from "../../views/api/api.js";
import Provinces from "../../utaicl/Provinces.js";
export default {
  //用过滤器来判断
  filters: {
    sexs(val) {
      if (val == 0) {
        return "男";
      }
      if (val == 1) {
        return "女";
      }
      if (val == 3) {
        return "保密";
      }
    },
  },
  data() {
    return {
      shows: false,
      show: false,
      show2: false,
      areaList: {}, //省默认的对象
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
      imgs: "",
      nickname: "",
      username: "",
      file: "",
      imgURL: "",
      userInfo: [],
      minDate: new Date(1990, 1, 1),
      maxDate: new Date(2020, 10, 1),
      currentDate: new Date(),
      tabdates: false,
      Mdates: "",
    };
  },
  methods: {
    onlist() {
      this.$router.push("/My");
    },
    Qx() {
      this.shows = false;
    },
    dates() {
      this.tabdates = true;
    },
    ren(e) {
      console.log(e);
      console.log("222");
      //获取省区市的id并传到接口当中
      MySex({
        city_id: e[0].code, //省
        district_id: e[2].code, //区
        province_id: e[1].code, //市
      }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          MyMy().then((res) => {
            this.userInfo = res.data.data;
            this.$toast(res.data.msg);
          });
        }
      });
      this.show = false;
    },
    //点击vant组件中上传头像的事件
    async afterRead(event) {
      console.log(event); //打印出当前文件图片
      let fd = new FormData(); //创建一个承载文件类型的变量
      fd.append("file", event.file);
      //通过图片接口来改变图片
      var a = await MyImg(fd);
      console.log(a);
      if (a.code == 200) {
        this.shows = false;
        this.$toast(a.msg);
        this.imgs = a.data.path;
        //当它请求成功再通过user接口更新数据 传入avatar要用的参数，然后进行更新
        MySex({ avatar: a.data.path }).then((res) => {
          console.log(res);
          if (res.data.code == 200) {
            // this.$toast("更新头像成功");
            var a = window.setInterval(() => {
              this.$toast("头像正在上传中");
            }, 2000); //给它一个延时提示的操作

            setTimeout(() => {
              clearInterval(a); //清除计时器
            }, 7000);
          }
        });
      } else {
        this.$toast(a.msg);
      }
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
    queren(e) {
      console.log(e);
      var a = new Date(e); //获取本地当前标准时间
      var Years = a.getFullYear();
      var Mouth = a.getMonth() + 1;
      var Day = a.getDate();
      Mouth = Mouth < 10 ? "0" + Mouth : Mouth;
      Day = Day < 10 ? "0" + Day : Day; //当日期不足两位数时进行补零操作
      var obj = `${Years}-${Mouth}-${Day}`;
      console.log(obj);
      this.userInfo.birthday = obj;
      console.log(obj);
      MySex({ birthday: obj }).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          MyMy().then((res) => {
            if (res.data.code == 200) {
              this.$toast("日期更新成功");
              console.log(res.data.data.birthday);
              this.Mdates = res.data.data.birthday;
            }
          });
        } else {
          this.$toast(res.data.msg);
        }
      });
      this.tabdates = false;
    },
  },
  mounted() {
    //请求更新数据
    MyMy().then((res) => {
      console.log(res);
      if (res.data.code == 200) {
        this.userInfo = res.data.data;
        console.log(this.userInfo);
        this.imgs = res.data.data.avatar;
        this.nickname = res.data.data.nickname;
        this.username = res.data.data.mobile;
      } else {
        this.$toast(res.data.msg);
      }
    });
    this.areaList = Provinces; //在刚进入页面就给省市区的对象进行赋值
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
.div_box2 {
  width: 100%;
  height: 1rem;
  text-align: center;
  font-size: 0.34rem;
  margin-top: 0.2rem;
}
.imgss {
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
}
</style>
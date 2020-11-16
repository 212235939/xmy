<template>
  <div>
    <div class="div_header" v-show="!user.chapter">
      <div>
        <van-icon name="arrow-left" size="20" color="gray" @click="back" />
      </div>
      <div>{{ title }}</div>
      <div>
        <van-icon name="notes-o" size="20" color="gray" />
      </div>
    </div>
    <!-- <div>{{num_class}}</div> -->
    <div class="div_header_box2" v-show="!user.chapter">  
      <div class="div_boxs1">共{{ num_class }}课时</div>
      <div class="div_boxs2"></div>
      <div class="div_boxs3">已学习0%</div>
    </div>

    <div
      v-for="(item, index) in RegList"
      :key="index"
      class="div_bodys"
      v-show="!user.chapter"
    >
      <div class="div_reg">
        <div class="div_dian"></div>
        <div style="color: rgb(200, 16, 16)">[回放]</div>
        <div style="color: gray">第一课时第一讲</div>
      </div>
      <div class="div_reg2">
        <div>{{ item.periods_title }}</div>
        <div>{{ item.start_play }}</div>
        <div>-</div>
        <div style="margin-top: 0.1rem">{{ item.end_play }}</div>
      </div>
      <div class="div_reg3">
        <div class="div_reg_border"></div>
        <div>已观看0%</div>
      </div>
    </div>
    <!-- 下拉菜单 -->
    <van-dropdown-menu
      :overlay="false"
      v-for="(item, index) in list"
      :key="index"
      v-show="user.chapter"
      class="div_bodyss"
    >
      <!-- 先把下拉菜单的两个表头渲染出来 -->
      <van-dropdown-item :title="item.title" class="item_div">
        <div v-for="index in item.child" :key="index" class="div_bbb">
          <div class="div_reg">
            <div class="div_dian"></div>
            <div style="color: rgb(200, 16, 16)">[已结束]</div>
            <div style="color: gray">{{ item.child[0].periods_title }}</div>
          </div>
          <div class="div_ddd">
            <div>{{ item.child[0].teachers[0].teacher_name }}</div>
            <div>{{ item.child[0].start_play }}</div>
            <div>{{ item.child[0].end_play }}</div>
          </div>
        </div>
      </van-dropdown-item>
    </van-dropdown-menu>

    <!-- <div
      v-for="(item, index) in list"
      :key="index"
      class="div_bodys"
      v-show="user.chapter"
    >
      {{ item.title }}
      <div v-for="iii in item.child" :key="iii">
        <div>{{ item.child[0].start_play }}</div>
        <div>{{ item.child[0].end_play }}</div>
      </div>
    </div> -->
    <div class="div_footer">
      <div class="div_footer_div1">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAhCAYAAACxzQkrAAAE30lEQVRYR7WYXYwTVRTH/+e22x2g0yVoVh9IRGNCiIkPCEGjxkQe/ODFlzUQMDyoaNiklum0sismoyjJMjOdZj8wRCNqDApVNCEGkn3QIMFoEBXF+KIh6wcmfC2702W77dxjLtndlNpu26Xc13s+fnPuOeeeO4SbtCzLiui6voKZtwN4EEBARMeFEN6VK1dOW5ZVquaabgaPZVmarutJZk4AuHXGBxExM/8thOgfGxvzqkHdFCDXdV9n5m0AojU+OE9EO5LJZLZyv+VAjuNsAPA+gLa5os/M50Oh0FrDMH4ul2sZUH9/f7vv+zFN03wppcobY44IKYYiEW1LJpNDLQeyLCus6/oeAAsKhUJC07QJKeUOZjaISKsRKQngVdM0d7UUyPO8xVLKAWbeNG34YKlU2jI5OXlV13WbmV8A0F4JxcyTALamUql9LQMaHBy8pVAoZKWUTxNRpMzwESnlSx0dHWfHx8dVcvcAWFwB9X0kEnkqHo//1RIg27YXAfiIiB4DUA6j7AcAjkopn9M07XKhUFBH9woApaPWBSHEOsMwvmtJlQ0NDd0+MTGxj4gen6uSiGi4vb19Q2dn5+jIyIilckoI8U8oFNqUSCS+bUlj7OvrWxoKhfYw8xNEFK7XWInoaynl1nw+/2s0Gt0opfwjlUqdUE3yhoGy2extpVLpEwD3A6gLoxwysySiY+FweHMikfhzGqIqjNpruA9lMpm7pJT7AaypF5WKfeX8jBBivWEYZ+rpNgTU19e3XAixl4geAhCqZ7R8n5lPEdGLpmmeVAGrp1sXKJPJ3C2lPATgHgCinsHrSpjoZBAE69Pp9O+N6s0FRK7r3qtKm5lXNGpwWk514RPhcHhjIpEYaUa3JpDjOKsBvAVgZTO5Nu18GEDcNM3fmoGpmdTZbHZNEAT7mfnOecAcllJuSafT/zYLUxXIcZz7AHwK4I4mDarufHhqampLb2/v+SZ1Z8X/d2Se560MgmAQwAONGp2eBD8mopeTyeRMr2lU/Tq564Bs296Uz+f3x2KxZcx8gJlXNWBVlfLeYrHY29PTc7kB+TlFZoEymcwqKeUxAKbv++8sXLhwiRDic2ZeTURVy52ZS0T0biQSScXj8bEbhSnPIVXibzPzswAuAnB833disdgKKaUHYG0VZwpG3Wk7TdO80AqYWSDP85YFQXAUwPJpw2oI3xuNRrfn8/lOKeUHAB4tc6rGz51Sykwqlcq3CmYWyHGcZwCoRI7NGGfmKeVUCOHGYrEFo6OjOQCPAFDvKVcI8YZhGFdbCXMNSD3ootHoAIDnq/QcH8AeXddf831/KTO/SUSnNU3zuru71V7LF2UymSXM/AUzq5Gi2ioQ0QE10xSLRe3cuXP+wMBAoVLQtu11RKSeQE3dd2V21JhykBzHUQ3wJwAdFU5UOZeYeUwI8UsQBIl0Ov1jrZC4rqtGC/V0rnth17BxbUwh27bVgH6gQmiciL4BMMzMX/q+/4NlWerCrLl27979ZDgcflhKOe8IMfNxFaH3AGwGoEJ2ipk/UyCRSOTspUuXLtYDKSfs6uoKdXV1zSuvcrkccrlcoIByau5ta2s7VPkkqZIni4ho9ufBvDzPoVQsFseaOm/XdXcxc6rZqbFBcJVDXzUL1M3M6o9FQwN+gyAzYiplPvwPh2MJ5xnUb/8AAAAASUVORK5CYII="
            class="div_footer_img"
          />
        </div>
        <div>写评论</div>
      </div>
      <div class="div_footer_div2" @click="coursedetails">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAACi0lEQVRYR+1Yv4sTURD+Ztc1WbN7igimEsFC8aorhPSCxXGFIIk/GuUUm5w27xASVLaxSG436J6oEfUfSKeFfSoRbSzEKld6FuYsRJOV3ZEniZx4Sd7eu4ND3G553zf7zbw3M2+WgiA4CeAxMx8GYGD08x3Ac9u2r5TL5a9DmO/7x4noFDNnx3BVlhIArygIgpWBGBUSiEgIIRoSHIZhJoqiRwAuKZEng76Q7/tSGU3G/kYsLy4uXpdvnuftcV33GTOfTcEfC5WCOI0xIrovhLgmOY1Gw2bmJwDOM3Map0Z98oeWIM/zDMdxThPRGWbelcaxDbBsGMY7LUHSaLFYNKenp3PZbFY7Qp1O55u2IM2o/EXXFiQjNDMzs8+yLFNHXCaT4W63u6YlSJ6hXC63QERXAWgJks4Q0ZvUaU9Ey0KIbU37VQAHVcNNRDeFEHe2rQ4FQTDPzHcBuAqi3tq2PVcul6UTw0r9AMC8AlcF0v2Vqs1mc2+/3z9gmubI1I3juJfP5z+WSqV4vWXf948R0exW9DIiamvXDhW302D+C5oUrZ0ZoTAMp+I43s/MIy9olmX12u32p1ar9cehnuRx2nVaWlq6YBjGQ2aeUiC/jqJotlqtfh7UIcN13QVmvgVA68ZIRAkzv5CVWqswOo7zFMA5BWdUIMmObB2bvjHKO3W/378H4CIR6SaI1NHV6vZyD2q12lHTNAsALJU9GYVhZinovbYgHREbcf89QfV6/QgRnSAi7S1LkuSDVoQ8z9vtOE59MCiOm3pVdlaeodXUaQ9g2wfFFQByrld61o/ScnLd8sIYBMGc9JqZD4372cDMPcMwXkZRdLlSqawNZ7JCoXCDmW/rtg4AibT/E2rjPaJgEXouAAAAAElFTkSuQmCC"
            class="div_footer_img"
          />
        </div>
        <div>课程详情</div>
      </div>
      <div class="div_footer_div3">
        <div>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAeCAYAAADdGWXmAAADAUlEQVRIS+2WTWgTQRTH/y9pajWV4geIHsxBUUE96EEUFQ96EvHrUJEq4kFKrZQmO6tCUVcFRXd2EgJVgigi+EFA9KAeRBBF0CIVBLUF8VAselAQ29RYTebJlE1pobXbNsfuaffte++3Mzsz/z8h4CWlnAvgGhFtY2YiItZaPyWiPUKI70HaUJAkk5NMJtcXi8UsgAWlGmb+QUTbhRAvgvShTCYzI5fLrQMwbYyCKDM3ANg0MCxmBtBGREkAfWPU9kcikdfked4TZt4c5MsmmfOcXNdtJ6LVk2wUpPwtKaUWM/OGANMYpOFoOf3M/CrwApkMqVQ7CMtms+Gurq4q8yIWi/2ura0tThQwWq9BmOu6W/yVBSI6ZlnWo4nClFIbtdaXTH04HD4ej8cfmvtBmJRyN4C7JsjMdbZt3yrB0un0tEKhsEZr/U0I0VmKm/8NYH5PT0+74zi/SnHP87Yy8wAAwD4hxM3AMKXULq31bQA/ASw3J4ZSarbW+h2AOUR0yLKsG2WBSSmPArhgmoVCoRWJROJ9KpVaWigUSqM8I4Q4VS7YcQDn/Sleadv2OynlMgAdfuysbdsnp2D432qUUk5N48AamdQ+m5rGsuwzpZSttb7ou4EVQogPnuctAdBpzA8zn7Zt2ykLTEppxPU6EX2pqqra2tjYmPO9ywNmXhgKhQ4nEonHZYEZferu7o7l8/l8S0vL11LTVCo1T2sdjUajn+vr6/8Ghrmuu4OI7g9IAdGBoaf4eHVNSrkTwD3/3Nxr2/adYRLjed4qZn7jN74uhDg4XsiQkV3ybR8qKirWNjc3tw2DZTKZSG9v70fjCowPZOZ4X1/fVcdxdFCo4zihmpqaumKxaFS6GkB3Lpdb5DjOn2Ew8yCl3A/giu+0jAfpYOZPRBTEj4QAGOU20lMBoJ+I4pZlXS597DB3pZSazswnmPkIgJlBRzRCXp6I0pFI5FxTU1PPiDATbG1trc7n8+uJqMH3k7OMQAcAGzv+A8DLcDh8ubKy8pnZIkPr/gEjO6imaFb4ZAAAAABJRU5ErkJggg=="
            class="div_footer_img"
          />
        </div>
        <div>移除列表</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Mystudy } from "../api/api.js";
export default {
  data() {
    return {
      title: "",
      num_class: "",
      RegList: [],
      list: [],
      user: "",
    };
  },
  async mounted() {
    console.log(this.$route.query.id);
    // 接收上个页面传过来的数据
    var id = this.$route.query.id;
    var a = await Mystudy(id);
    console.log(a);
    console.log(a.data.data);
    this.user = a.data.data; //通过设置user来判断数据里有没有里面chapter
    this.list = a.data.data.chapter;
    console.log(this.list);
    //判断code值为200时在进行赋值
    if (a.data.code == 200) {
      this.title = a.data.data.course.title;
      this.num_class = a.data.data.course.section_num; 
      this.RegList = a.data.data.periods;
    } else {
      this.$toast("网络状态不太好呀 再次刷新页面试试");
    }
  },
  methods: {
    back() {
      this.$router.push("/coursedetails");
    },
    coursedetails() {
      this.$router.push("/coursedetails");
    },
  },
};
</script>

<style scoped>
.div_header {
  width: 90%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.4rem;
  font-family: "宋体";
  margin-left: 0.2rem;
}
.div_header_box2 {
  width: 100%;
  height: 1.3rem;
  /* background-color: blue; */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.div_boxs1 {
  width: 15%;
  height: 37%;
  /* background-color: burlywood; */
  margin-left: 0.1rem;
}
.div_boxs2 {
  width: 60%;
  height: 7%;
  background-color: rgb(240, 236, 235);
  border-radius: 10px;
}
.div_boxs3 {
  width: 18%;
  height: 37%;
  margin-left: 0.1rem;
}
.div_bodys {
  width: 90%;
  height: 2rem;
  border: 1.1px solid gray;
  box-shadow: red;
  border-radius: 5px;
  margin-top: 0.2rem;
  margin-left: 0.4rem;
}
.div_bodyss {
  width: 99%;
  height: 2rem;
  /* border: 1.1px solid gray; */
  box-shadow: red;
  border-radius: 5px;
  margin-top: 0.5rem;
  /* margin-left: 0.4rem; */
}
.div_reg {
  width: 60%;
  height: 30%;
  /* border: 1px solid firebrick; */
  margin-top: 0.3rem;
  margin-left: 0.2rem;
  display: flex;
}
.div_reg div {
  margin: 0rem 0.1rem;
}
.div_dian {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
  background-color: red;
  /* margin-top:0.2rem; */
  position: relative;
  top: 0.15rem;
}
.div_reg2 {
  width: 80%;
  height: 0.5rem;
  /* background-color: gold; */
  margin-left: 0.6rem;
  display: flex;
  align-items: center;
}
.div_reg2 div {
  margin: 0rem 0.03rem;
  color: gray;
}
.div_reg3 {
  width: 90%;
  height: 0.5rem;
  /* background-color: gold; */
  margin-left: 0.3rem;
  display: flex;
  align-items: center;
}
.div_reg3 div {
  margin: 0rem 0.14rem;
  color: gray;
}
.div_reg_border {
  width: 70%;
  height: 10%;
  /* background-color: red; */
  background-color: rgb(240, 236, 235);
  border-radius: 10px;
}
.div_footer {
  width: 100%;
  height: 1rem;
  background-color: white;
  position: fixed;
  bottom: 0rem;
  display: flex;
  justify-content: space-between;
  color: grey;
}
.div_footer_div1 {
  width: 33%;
  height: 100%;
  /* background-color: red; */
  display: flex;
  align-items: center;
  position: relative;
  left: 0.4rem;
}
.div_footer_div2 {
  width: 33%;
  height: 100%;
  /* background-color: hotpink; */
  display: flex;
  align-items: center;
  position: relative;
  left: 0.4rem;
}
.div_footer_div3 {
  width: 33%;
  height: 100%;
  display: flex;
  /* background-color: lawngreen; */
  align-items: center;
  position: relative;
  left: 0.4rem;
}
.div_footer_img {
  width: 0.3rem;
  height: 0.25rem;
}
.van-dropdown-menu__item {
  width: 50%;
  float: left;
}
.div_bbb {
  width: 90%;
  border: 1.5px solid gainsboro;
  border-radius: 5px;
  height: 1.7rem;
  margin-left: 0.4rem;
}
.div_ddd {
  width: 90%;
  display: flex;
  /* justify-content: space-between; */
  margin-left: 0.2rem;
}
.div_ddd div {
  margin: 0rem 0.1rem;
  color: gray;
}
</style>
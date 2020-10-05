<template>
  <div>
    <div>
      <van-search v-model="value" show-action shape="round" placeholder="请输入关键字" @search="onSearch" @input="onqqq" >
        <template #left>
          <div>
            <van-icon name="arrow-left" size="20" @click="onFan" />
          </div>
        </template>
        <template #action>
          <div style="font-size:0.3rem" v-show="!star">取消</div>
          <div style="font-size:0.3rem" @click="onCa" v-show="star">搜索</div>
        </template>
      </van-search>
    </div>

<div v-show="isss">
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
    <div style="margin-left:25px">
      <van-button
        round
        type="default"
        color="#F7F7F7"
        size="mini"
        v-for="(item,index) in history"
        :key="index"
        @click="onClick(item)"
      >
        <span style="color:black">{{item}}</span>
      </van-button>
    </div>
</div>
  
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
      history: [],
      isss:true,
      star: false,  

    };
  },
  created() {
    let history = localStorage.history;
    if (history) {
      this.history = JSON.parse(history);
    }

   
  },
  mounted(){
   
  },
  methods: {
    onqqq(){
      
        if(this.value!=""){
      this.isss = false
      this.star = true;
    }else{
      this.isss = true
      this.star = false;

    }
          
    },

    onCa(){
         this.isss = true
         this.history.unshift(this.value);
         console.log(this.value)
          localStorage.history = JSON.stringify(this.history);
          this.value=""
        
    },
    onSearch(val) {
      this.save(val);
      this.isss = true
      this.value=""
    },
    onClick(item) {
      this.save(item);

      this.isss = false
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
</style>
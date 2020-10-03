<template>
  <div>
      <div class="boxss">

            <van-nav-bar
    title="个人信息"
    left-arrow
    @click-left="onlist()"
    />
    <br>
    <van-cell title="头像" is-link value="" >
        <template #default>
            <img style="width:0.7rem;height:0.7rem" src="https://msmk2019.oss-cn-shanghai.aliyuncs.com/uploads/avatar.jpg" alt="">
        </template>
    </van-cell>
    <van-cell title="昵称" is-link value="付???" />
    <van-cell title="手机号"  value="15237918356" />
    <van-cell title="性别" is-link value="男" />
    <van-cell title="出生日期" is-link value="???-6-66" />
    <van-cell title="所在城市" is-link value="宇宙-???" />
    <van-cell title="学科" is-link value="修仙" />
    <van-cell title="年级" is-link value="?????" />


    
      </div>
  </div>
</template>

<script>
export default {
     methods:{
       onlist(){
           this.$router.go(-1)
       }
    }
}
</script>

<style scoped>
.boxss{
        min-height: 100vh;
    background: #f0f2f5;
    box-sizing: border-box
}
</style>
<template>
  <div>
    首页
  
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[]
    }
  },
  mounted(){
    this.$axios.post("http://xx.com/api/public/img").then(res=>{
      console.log(res.data)
    })
  }
}
</script>

<style scoped>

</style>
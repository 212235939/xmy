<template>
  <div>
    首页
<<<<<<< HEAD
=======
  
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd
  </div>
</template>

<script>
export default {
<<<<<<< HEAD

}
</script>

<style>
=======
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
>>>>>>> ace02d7ec64eb2c67149612ad05c5f1d93e2f7dd

</style>
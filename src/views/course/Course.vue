<template>
  <div>
      <TesekeTop @onDetail="onDetail"></TesekeTop>

  </div>
</template>

<script>
import TesekeTop from '../../components/TesekeTop'
export default {
  components:{
     TesekeTop
  },
  methods:{
    onDetail(index){
      console.log(index)
      this.$router.push({path:'/details'})
    }
  }
}
</script>

<style>

</style>
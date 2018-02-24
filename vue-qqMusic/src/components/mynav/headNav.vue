<template>
    <div class="topNavx">
      <div @click="back()" class="goBack">
        <img src="../../assets/image/goback_1.png" alt=""  />
      </div>
      <div class="song_name sizeSname">
        <p>dddsdsdsadsadas</p>
      </div>
    </div>
</template>

<script>
  export default{
    methods :{
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style>
  .topNavx{
    width: 100%;
    height: 3.85rem;
    background:transparent;
    position: fixed;
    top:0rem;
    background: red;
    
  }
</style>
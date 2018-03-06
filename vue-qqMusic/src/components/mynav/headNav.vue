<template>
    <div id="topNavx" v-show='headDis'>
      <div @click="back()" class="goBackq">
        <img src="../../assets/image/goback_1.png" alt=""  />
      </div>
      <div class="song-name sizeSname">
        <p>{{ info }}</p>
      </div>
    </div>
</template>

<script>
  import {mapState} from 'vuex' 
  export default{
    methods :{
      back(){
        this.$router.back()
        this.$store.commit('sethead',false)
      },
      onscroll (){
       var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        if(scrollTop>199){
          var topNavx = document.getElementById('topNavx')
          topNavx.style.background = 'rgba(0,0,0,.7)'
        }else{
          var topNavx = document.getElementById('topNavx')
          topNavx.style.background = 'transparent'
        }
      }
    },
    mounted () {
      window.addEventListener('scroll',this.onscroll)
    },
    computed :{
      info (){
        return this.$store.state.headInfo
      },
      ...mapState(['headDis'])
    }
  }
</script>

<style>
  #topNavx{
    width: 100%;
    height: 3.85rem;
    background:transparent;
    position: fixed;
    top:6.07rem;
    color: red;
    z-index: 1000000;
    line-height: 3.85rem;
    font-size: 1.14rem;
    transition:all .6s ease;
  }
  .goBackq{
    float: left;
  }
  #topNavx .goBackq img{
    
    width: 1.14rem;
    height: 1.57rem;
    margin-left: 7px;
    vertical-align: middle;
  }
  .song-name p{
    text-align: center;
    color: #fff;
  }
</style>
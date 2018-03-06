<template>
  <div id="rangInfo">
    <div id="Title" class="bTitle" :style="{backgroundImage: `url(${imgUrl})`}">
	      
    </div>
    <div>
      <mt-cell v-for='(item,index) in songList' :key='index' :title="item.filename" @click.native='playAudio(index)'>
        <img src="../../assets/image/er.png" width="20" height="20">
      </mt-cell>
    </div>
    <div class="padd_bot" v-show='pb'></div>
  </div>
	  

</template>

<script>
  import { Indicator } from 'mint-ui'
  import { mapGetters } from 'vuex'
  import { PLAYAUDIO } from '@/play'
  export default{
    mixins:[PLAYAUDIO],
    data() {
      return {
        songList: [],
        imgUrl :'',
        specialname:''
      }
    },
    mounted() {
      this.getList()
      window.addEventListener('scroll',this.onscroll)
    },
    computed : {
      ...mapGetters (['audio','pb'])
    },
    methods :{
    //   onscroll (){
    //   	var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
  		// console.log(scrollTop)
    //   },
      back() {
        this.$router.back()
      },
      
      getList () {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        var infoID = this.$route.params.id
        this.$http.get(`https://bird.ioliu.cn/v1/?url=http://m.kugou.com/plist/list/${infoID}?json=true`).then(({data}) => {
          Indicator.close()
          const info = data.info.list
          const list = data.list.list.info
          this.songList = list
          this.specialname = info.specialname
          this.imgUrl = info.imgurl.replace('{size}', '400')
//        this.desp = info.intro
//        console.log(this.songList)
		  this.$store.commit('setheadInfo',this.specialname)
        });
      }
    }
  }
</script>

<style>
  #rangInfo .bTitle{
    width: 26.78rem;
    height: 16.07rem;
    background-position: 0 -5.57rem;
    background-size: 26.78rem 26.78rem;
    box-shadow: 0 13px 85px rgba(0,0,0,.7) inset;
  }

  #rangInfo{
    width: 100%;
    /*position: relative;*/
    /*height: 1000px;*/
    /*overflow: hidden;*/
    /*position:absolute;
    top:3rem;*/
   /*margin-top:-3rem;*/
  }
  /*#z-i{
    position: relative;
    z-index: 10;
  }*/
  #rangInfo .sizeSname{
    height: 3.57rem;
    line-height: 3.75rem;
    font-size: 19px;
  }
  #rangInfo .goBack{
   margin-top:1rem; 
  }
  .endExplain{
    width: 100%;
    height: 2.14rem;
    background: red;
  }
  #rangInfo .mint-cell-title{
    font-size: 1.21rem;
    
  }
  #rangInfo .padd_bot{
    width: 100%;
    height: 6.64rem;
  }

</style>
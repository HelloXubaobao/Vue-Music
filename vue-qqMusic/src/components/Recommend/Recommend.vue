<template>
  <div>
    <mt-swipe :auto="3000" class="swipe-auto">
      <mt-swipe-item v-for='(banner,index) in banners' :key='index'>
          <img :src="banner.imgurl" alt="" />
      </mt-swipe-item>
    </mt-swipe>
    <mt-cell v-for='(song,index) in songList' :title="song.filename" @click.native="playAudio(index)" :key='index'> 
      
    </mt-cell>
    <div class="padd_bot" v-show='pb'></div>
  </div>
 
</template>

<script>
  import { Indicator } from 'mint-ui'
  import { PLAYAUDIO } from '@/play'
  import { mapGetters } from 'vuex'
  export default{
    mixins:[PLAYAUDIO],
    data() {
      return{
        banners:[],
        songList:[],
        playaudio:'' 
      }
    },
    created() {
      this.getRecommend()
    },
    computed:{
      ...mapGetters(['audio','pb'])
      
    },
    methods: {
      getRecommend(){
        Indicator.open({
          text:'加载中',
          spinnerType: 'snake'
        })
         this.$http.get('https://bird.ioliu.cn/v1/?url=http://m.kugou.com?json=true').then(({data}) => {
//        console.log(data.data)
         this.banners = data.banner
         this.songList = data.data
        }).then(() => {
          Indicator.close()
        })
      }
    }
    
  }
</script>

<style scoped>
  @import '../../assets/css/recommend.css'
</style>
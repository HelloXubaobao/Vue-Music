<template>
  <div class="playConsole" id="bot_dis" v-show='display'>
    <div v-show='!isbot'>
      <audio id="playAudioAuto" :src="audio.songUrl" autoplay @ended='next()' @timeupdate="change()"></audio>
      <div class="playConsole_c">
        <img :src="audio.imgUrl" alt="" class="singer"  @click='toggleDetails()'/>
      </div>
      <div class="playConsole_c p_length" @click='toggleDetails()'>
        <p class="songName name_public">{{ audio.title }}</p>
        <span class="singerName name_public" v-for='(item,index) in audio.singer'>{{ item.author_name }}</span>
      </div>
      <div class="playConsole_c control">
        <img v-show='!isplay' src="../assets/image/play_icon.png" alt="" @click='toggleStatus()' />
        <img v-show='isplay' src="../assets/image/pause_icon.png" alt="" @click='toggleStatus()' />
        <img src="../assets/image/next_icon.png" alt="" @click='next()'/>
      </div>
    </div> 
    <div class="pos_bot" @click='bot_dis'>
        <img id="transf" src="../assets/image/bot.png" alt=""/>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    methods: {
      next(){
        this.$store.dispatch('next')
      },
      bot_dis() {
        var bot = document.getElementById('bot_dis')
        var transf = document.getElementById('transf')
        if(!this.isbot){
          bot.style.bottom = '-4rem'
          transf.style.transform = 'rotateZ(180deg)'
        }else{
          bot.style.bottom = '0'
          transf.style.transform = 'rotateZ(0deg)'
        }
        
        
        this.$store.commit('setIsBot',!this.isbot)
      },
      toggleStatus() {
        var myAudio = document.getElementById('playAudioAuto')
        if(this.isplay){  
          myAudio.pause()
        }else{
          myAudio.play()
        }
        this.$store.commit('setIsPlay',!this.isplay)
      },
      toggleDetails () {
        var bd = document.documentElement
        bd.style.overflow = 'hidden'
        this.$store.commit('setDetails',!this.details)
      },
      change () {
        var time = document.getElementById('playAudioAuto').currentTime
        if (this.audio.currentFlag) {
          document.getElementById('playAudioAuto').currentTime = this.audio.currentLength;
          this.$store.commit('setCurrent', false);
        } else {
          this.$store.commit('setAudioTime', time);
        }
      }
    },
    computed: {
      ...mapGetters(['audio','isplay','display','isbot','details'])
    }
  }
</script>

<style>
  @import '../assets/css/playAudio.css'
</style>
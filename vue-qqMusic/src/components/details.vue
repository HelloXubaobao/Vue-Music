<template>
  <div id='detailsPlay' v-show='details'> 
    <div class="details_play" :style="{backgroundImage:`url(${audio.imgUrl})`}"></div>
    <div class="details_play" :style="{backgroundImage:`url(${audio.imgUrl})`,filter: 'blur(7px)', '-webkit-filter':'blur(7px)'}"></div>
    <div class="content">
      <div id="Title">
        <div @click="back()" class="goBack">
          <img src="../assets/image/goback_1.png" alt=""  />
        </div>
        <div class="song_name">
          <p>{{ audio.title }}</p>
        </div>
      </div>
      <div class="singerSD">
        <span class="singerName name_public" v-for='(item,index) in audio.singer'>{{ item.author_name }}</span>
      </div>
      <div class="songImg">
        <img :src="audio.imgUrl" alt="" />
      </div>
      <div id="Lyric">
        <div class="lrc-content" :style="{marginTop:contentOffSet +'px'}">
          <p v-for="(content,index) in ww" :class="{isCurrentLrc:content.sec >= audio.currentLength}">{{ content.info }}</p>
        </div>
        <!--<div class="colorZ"></div>-->
      </div>
      <div class="ControlBar">
        <span>{{ audio.currentLength | maxTime }}</span>
        <mt-range
          v-model="audio.currentLength"
          :min = '0'
          :max = 'audio.songLength'
          :bar-height="2"
          >
        </mt-range>
        <span class="maxT">{{ audio.songLength | maxTime }}</span>
      </div>
      <div class="playAudios">
        <img src="../assets/image/play_prev.png" alt="" class="prevS" @click="prev()" />
        <img src="../assets/image/play_play.png" alt="" class="toggleS" v-show="!isplay" @click="toggleStatus()"/>
        <img src="../assets/image/play_pause.png" alt="" class="toggleS" v-show="isplay" @click="toggleStatus()"/>
        <img src="../assets/image/play_next.png" alt="" class="nextS" @click="next()"/>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    created() {
      
    },
    filters: {
      maxTime (value) {
        var minute = Math.floor(value/60)
        if(minute<10){
          minute = '0' +minute
        }
        var second = Math.floor(parseInt(value)) % 60
        if(second <10){
          second = '0' + second
        }
        return minute + ':' + second
      }
    },
    methods: {
      back() {
        this.$store.commit('setDetails',!this.details)
        var bd = document.documentElement
        bd.style.overflow = 'visible'

      },
      toggleStatus () {
        var myAudio = document.getElementById('playAudioAuto')
        if(this.isplay){  
          myAudio.pause()
        }else{
          myAudio.play()
        }
        this.$store.commit('setIsPlay',!this.isplay)
      },
      next () {
        this.$store.dispatch('next')
      },
      prev () {
        this.$store.dispatch('prev')
      },
      
    },
    computed :{
      ...mapGetters(['audio','details','isplay']),
      ww() {
        var lrc = this.audio.lrc.split('\r\n')
        lrc = lrc.splice(0,lrc.length - 1)
        lrc = lrc.map((value) => {
          var time = value.substr(1,5)
          var sec = parseInt(time.split(':')[0])*60 +parseInt(time.split(':')[1])
//        console.log(sec)
          var info = value.substr(10)
//        console.log(info)
          return {
            sec,
            info
          }
          
        })
//      console.log(lrc)
        return lrc
      },
      contentOffSet () {
        if(this.ww){
          var offSetTop = (this.ww.length - document.querySelectorAll('.isCurrentLrc').length - 2) * (-24.5)
//        console.log(this.ww.length)
//        console.log(offSetTop)
          return this.audio.currentLength + offSetTop - this.audio.currentLength
        }
       
      }
    } 
  }
</script>

<style>
  @import '../assets/css/details.css'
</style>
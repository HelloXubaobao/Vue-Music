module.exports = {
  'PLAYAUDIO':{
    methods:{
      playAudio(index){
        
        var hash = this.songList[index].hash
        var content = {
          songList:this.songList,
          index:index
        }
//      console.log(content)
        this.$store.dispatch('getSongInfo',hash)
        this.$store.commit('setSongList',content)
        this.$store.commit('setpd',true)
        this.$store.commit('setDisPlay', true)
      }
    }
  }
}

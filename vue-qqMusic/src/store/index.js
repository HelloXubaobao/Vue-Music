import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import { Indicator } from 'mint-ui'
Vue.use(Vuex)
const store = new Vuex.Store({
	//state数据存储的位置
	state:{
		audio:{
		  songUrl : '',
		  imgUrl : 'http://m.kugou.com/v3/static/images/index/logo_kugou.png',
		  title : '',
		  songLength :0,
		  singer : '',
		  currentLength : 0,
		  lrc : '',
		  currentFlag:false
		},
		isplay:true,
		pb:false,
		display:false,
		isbot:false,
		details:false,
		songListInfo:{
		  list:[],
		  songIndex:0
		},
		headInfo:'',
		headDis:false
	},
	getters: {
	  audio: state => state.audio,
	  pb: state => state.pb,
	  isplay: state => state.isplay,
	  display: state => state.display,
	  isbot: state => state.isbot,
	  details: state => state.details

	},
	//改变数据的方法
	mutations: {
		setAudio :(state,audio) =>{
			state.audio = {...(state.audio),...audio}
		},
		setpd:(state,sign) =>{
		  state.pb = sign
//		  console.log(state.pb)
		},
		setSongList :(state,{songList,index}) =>{
		  state.songListInfo.list = songList
		  state.songListInfo.songIndex = index
		},
		setIsPlay: (state,sign) =>{
		  state.isplay = sign
//		  consoel.log()
		},
		setDisPlay: (state,sign) =>{
		  state.display = sign
		},
		setIsBot: (state,sign) => {
		  state.isbot = sign
		},
		setHeadStyle(state, style){
     		state.head.style = style
   		},
		setCurrent:(state, flag) =>{
        	state.audio.currentFlag = flag
   		},
		setDetails: (state,sign) => {
		  state.details = sign
		},
		setAudioTime: (state,time) => {
		  state.audio.currentLength = time
		},
		setheadInfo: (state,headInfo) => {
			state.headInfo = headInfo
			
		},
		sethead: (state,head) => {
			state.headDis = head
			console.log(head)
		}
	},
	actions:{
	  getSongInfo ({commit,state},hash){
	    Indicator.open({
	      text:'加载中',
        spinnerType: 'snake'
	    })
	    axios.get(`https://bird.ioliu.cn/v1/?url=http://www.kugou.com/yy/index.php?r=play/getdata&hash=${hash}`).then((data)=>{
	      Indicator.close()
//	      console.log(data)
	      var data = data.data.data
//	      console.log(data)
	      const songUrl = data.play_url
        const imgUrl = data.img
        const title = data.song_name
        const songLength = data.timelength / 1000
        const singer = data.authors
        const currentLength = 0
        const lrc = data.lyrics
        const audio = {songUrl,imgUrl,title,songLength,singer,currentLength,lrc}
//      console.log(songUrl)
        commit('setAudio',audio)
        commit('setIsPlay',!state.isPlay)
	    })
	  },
	  next ({dispatch,state}){
	    state.songListInfo.songIndex++
	    if(state.songListInfo.songIndex == state.songListInfo.list.length){
	      state.songListInfo.songIndex = 0
	    }
	    
	    var hash = state.songListInfo.list[state.songListInfo.songIndex].hash
	    dispatch('getSongInfo',hash)
	    // console.log(state.songListInfo.songIndex,hash)
	  },
	  prev ({dispatch,state}) {
	    state.songListInfo.songIndex--
	    if(state.songListInfo.songIndex == -1){
	      state.songListInfo.songIndex = state.songListInfo.list.length-1
	    }
	    var hash = state.songListInfo.list[state.songListInfo.songIndex].hash
	    dispatch('getSongInfo',hash)
	  }
	}
})
//向外到处
export default store
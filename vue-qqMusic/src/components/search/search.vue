<template>
  <div>
    <div id="searchConsole">
      <div class="search_input">
        <img src="../../assets/image/search.png" alt="" class="searchImg"/>
        <input type="text" class="w" @keydown.enter="search()" v-model="keyword" placeholder="搜索歌曲、歌单、专辑"/>
        <div class="btn-search" @click="search()">搜索</div>
      </div>
      
    </div>
    <div class="hotKey" v-show='switchSearch'>
      <p class="search_hot">热门搜索</p>
      <ul class="hotkey-wrap">
        <li class="hot_Key" v-for='(item,index) in hotList' :key='index'>{{ item.keyword }}</li>
      </ul>
      
    </div>
    
    <div v-show='!searchw'>
      <mt-cell v-for='(item,index) in songList' :key='index' :title="item.filename" @click.native="playAudio(index)">
        <img src="../../assets/image/m.png" alt="" />
      </mt-cell>
    </div>
  </div>
</template>

<script>
  import jsonp from 'jsonp'
  import { Indicator } from 'mint-ui'
  import { PLAYAUDIO } from '@/play'
  export default{
    mixins:[PLAYAUDIO],
    data() {
      return{
        keyword:'',
        songList: [],
        searchw:true,
        hotList:[],
        switchSearch:true
      }
    },
    created() {
      this.hotKey()
    },
    methods: {     
      search() {
        this.switchSearch = false
        this.searchw = false
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        })
        this.$http.get('https://bird.ioliu.cn/v1/?url=http://mobilecdn.kugou.com/api/v3/search/song?format=json&keyword='+this.keyword+'&page=1&pagesize=30&showtype=1').then((data)=>{
          
          this.songList = data.data.data.info
//        console.log(data)
          Indicator.close();
        })
      },
      hotKey() {
        this.$http.get('https://bird.ioliu.cn/v1/?url=http://mobilecdn.kugou.com/api/v3/search/hot?format=json&plat=0&count=30').then((data) => {
//        console.log(data.data.data.info)
          this.hotList = data.data.data.info
        })
      }
    }
  }
</script>

<style>
  #searchConsole{
    width: 25.35rem;
    height: 2.57rem;
    padding:0.71rem;
    background: #F4F4F4;
  }
  .search_input{
    width:21rem;
    height: 1.42rem;
    padding:0.57rem 0.85rem 0.57rem 3.5rem;
    background: #fff;
    position:relative;
  }
  .search_input input{
    width: 82%;
    height: 1.42rem;
    border:0;
    outline:none;
    position: relative;
    top:-0.15rem;
  }
  .hotKey{
    width: 24.64rem;
    height:auto ;
    overflow: hidden;
    padding:10px 1.07rem
  }
  .searchImg{
    position: absolute;
    left:0.5rem;
    top:0.35rem;
    width: 1.78rem;
    height: 1.78rem;
  }
  input::-webkit-input-placeholder {  
    font-size:1rem;
  } 
  input:-moz-placeholder { 
    font-size:1rem; 
  } 
  input::-moz-placeholder { 
    font-size:1rem;
  } 
  input:-ms-input-placeholder {
    font-size:1rem;
  }
  .search_hot{
    font-size: 1.14rem;
  }
  .hotkey-wrap{
    margin-top:0.71rem;
  }
  .hot_Key{
    padding:3px 0.52rem;
    border:1px solid #8A8A8A;
    border-radius:1.42rem;
    float: left;   
  }
  .hot_Key~li{
    margin-left:1.07rem
  }
  .btn-search{
    float: right;
    width: 3.57rem;
    height: 2.05rem;
    background: #31C27C;
    text-align: center;
    line-height: 2.05rem;
    color: #fff;
    border-radius: 0.35rem;
    margin-top:-0.3rem;
    
  }
</style>
<template>
  <div id="app">
    <my-nav></my-nav>
    <div class="main">
        <router-view class="animated bounceInLeft"/> 
    </div>   
    <play-audio></play-audio>
    <details-play></details-play>
  </div>
</template>

<script>
import myNav from './components/mynav/maynav.vue'
import playAudio from './components/playAudio'
import detailsPlay from './components/details'
import '../static/js/rem.js'

import { mapState } from 'vuex'
import { Indicator } from 'mint-ui'
export default{
	components: {
		myNav,
		playAudio,
		detailsPlay
	},
	methods: {
		
	},
	computed: {
		
	}
}
</script>

<style>
	@import './assets/css/reset.css';
</style>

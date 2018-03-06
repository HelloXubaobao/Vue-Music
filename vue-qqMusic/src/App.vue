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
	mounted() {
		window.onresize = function () {
			var clientWidth = 375;		/* 标准视口宽度 */
			var fontSize = 14;			/* 标准HTML元素大小 */

			// // 当前设备下的视口宽度
			// window.onload = function(){
			// 	// 获取html元素
				let html = document.documentElement;
				// console.log(html)

			// 	// 当前设备可视窗口宽度
				let nowClientWidth = html.clientWidth;
				// console.log(nowClientWidth)

			// 	// 计算出当前设备下html元素的font-size
			// 	//fontSize/clientWidth = newFontSize/nowClientWidth
				var newFontSize = nowClientWidth*fontSize/clientWidth;

				// console.log(newFontSize);

			// 	// 设置html元素的fontSize
				html.style.fontSize = newFontSize+'px';
			// }
			console.log('gaibianle')
		}
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

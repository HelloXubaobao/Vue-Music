<template>
	<!-- <h3>我是轮播图 {{ lun }}</h3> -->
	<div class="myNav">
		<div class="header">
		  <img src="../../assets/image/logo.png" alt="" />
		  <div class="btn_download">
		    下载APP
		  </div>
		</div>
		<div class="typeNav">
		    <router-link to='/Recommend'>推荐</router-link>
		    <router-link to='/Ranking'>推荐歌单</router-link>
		    <router-link to='/search'>搜索</router-link>
		</div>
	</div>

</template>
<script>
	export default{
		computed: {
			
		}
	}
</script>
<style scoped>
  .myNav{
    position: fixed;
    top:0;
    z-index: 1000000;
  }
	.header{
		width:26.785714rem;
		height:1.71rem;
		background:#31C27C;
		padding:10px 0;
	}
	.header img{
	  width: 6.42rem;
	  height: 1.78rem;
	  margin-left:10px;
	}
	.header .btn_download{
	  width: 5.71rem;
	  height: 1.9rem;
	  float: right;
	  background: #149C5A;
	  border-radius:1.42rem;
	  color:#fff;
	  margin-right:15px;
	  text-align: center;
	  line-height:1.8rem;
	  font-size:1rem;
	}
	.typeNav{
	  width: 26.785714rem;
	  height: 2.85rem;
	  display: flex;
	  line-height: 2.85rem;
	  justify-content: space-between;
	  font-size:1.07rem;
	  color:#3c3c3c;
	  background:#fff;
	}
	a{
	  text-align: center;
	   width: 8.92rem;
	 }
	.router-link-active{
	  
	  color:#31C27C;
	  border-bottom:2px solid #31C27C;
	}
</style>

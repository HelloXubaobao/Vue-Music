<template>
  <div id="ranking">
    <mt-cell id="rangT" :to='`/Ranking/rankInfo/${item.specialid}`'  v-for='(item,index) in Ranklist' :title='item.specialname' :label="String(item.playcount)" :key='index'>
      <img class="rIMg" slot="icon" :src="item.imgurl.replace('{size}','400')" width="60" height="60">
    </mt-cell>
  </div>
</template>

<script>
  import { Indicator } from 'mint-ui'
  export default{
    data () {
      return {
        Ranklist :[]
      }
    },
    created () {
      this.getRank()
    },
    methods: {
      getRank() {
        Indicator.open({
          text: '加载中...',
          spinnerType: 'snake'
        });
        this.$http.get('https://bird.ioliu.cn/v1/?url=http://m.kugou.com/plist/index&json=true').then(({data}) => {
          Indicator.close()
          this.Ranklist = data.plist.list.info
//        console.log(this.Ranklist)
        })
      }
    }
  }
</script>

<style>
  #rangT .mint-cell-text{
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
    /*color: red;*/
    position: absolute;
    top:1.72rem;
    left: 6.71rem;
    display: inline-block;
    width: 17.85rem;
  }
  #rangT .mint-cell-label{
    position: absolute;
    top:3.5rem;
    left:6.71rem;
  }
  #rangT .mint-cell-wrapper{
    padding-top:0.85rem;
  }
  .rIMg{
    margin-top:0.85rem;
  }
  #rangT .mint-cell-label:before{
    content: '';
    display: inline-block;
    width: 0.85rem;
    height: 0.85rem;
    background: url(../../assets/image/er2.png) no-repeat center;
    background-size: 100%;
    padding-right:0.1rem;
  }
</style>
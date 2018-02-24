import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import mynav from '@/components/mynav/maynav'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/Recommend',
      // name: 'HelloWorld',
      components: require('../components/Recommend/Recommend.vue'),
      alias: '/'
    },
    {
      path: '/Ranking',
      components: require('../components/Ranking/Ranking.vue')
    },
    {
      path: '/search',
      components: require('../components/search/search.vue')
    },
    {
      path: '/Ranking/rankInfo/:id',
      components: require('../components/Ranking/rankInfo.vue')
    }
  ]
})
export default router
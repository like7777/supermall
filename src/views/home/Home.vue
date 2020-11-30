<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="centen">购物街</div></nav-bar>
    <home-swiper :banners="banners"/>
    <home-recommended-view :recommends="recommends"/>
  </div>
  
</template>

<script>
  import NavBar from '../../components/common/navbar/NavBar'
  import {getHomeMultidata} from '../../network/home.js'
  import HomeSwiper from './childComps/HomeSwiper.vue'
  import HomeRecommendedView from './childComps/HomeRecommendedView'
  
  export default {
    name:'Home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendedView
    },
    data() {
      return {
        banners : [],
        dKeywords : [],
        keywords : [],
        recommends : []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        console.log(res)
        this.banners = res.data.banner.list
        this.dKeywords = res.data.dKeyword.list
        this.keywords = res.data.keywords.list
        this.recommends = res.data.recommend.list
      })
    }
  }
</script>

<style>
  .home-nav {
    background: pink;
  }
</style>

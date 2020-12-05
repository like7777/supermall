<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav" @titleClick="titlesClick" ref="nav"/>
    
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-goods-info  :detail-info="detailInfo" @imageLoad="imageLoad"/>
      <detail-param-info ref='params' :param-info="paramInfo"/>
      <detail-commengt-info ref='commengt' :commengt-info="commentInfo"/>
      <goods-list ref='recommend' :goods="recommend"/>
    </scroll>
    <detail-bottom-bar  @addCart="addToCart" @service="service" @store="store" @collection="collection" @buy="buy" />
  </div>
</template>

<script>
  import DetailNavBar from './ChildComps/DetailNavBar'
  import {getdetail, Goods, Shop, GoodsParam, getRecommend} from '../../network/detail'
  import DetailSwiper from './ChildComps/DetailSwiper'
  import DetailBaseInfo from './ChildComps/DetailBaseInfo'
  import DetailShop from './ChildComps/DetailShop'
  import Scroll from '../../components/common/scroll/Scroll'
  import DetailGoodsInfo from './ChildComps/DetailGoodsInfo'
  import DetailParamInfo from './ChildComps/DetailParamInfo'
  import DetailCommengtInfo from './ChildComps/DetailCommengtInfo'
  import GoodsList from '../../components/content/goods/GoodsList'
  import {deBounce} from '../../common/utils.js'
  import DetailBottomBar from './ChildComps/DetailBottomBar.vue'
  
  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo,
      DetailCommengtInfo,
      GoodsList,
      DetailBottomBar
    },
    data(){
      return{
        iid : null,
        topImages : [],
        goods : {},
        shop : {},
        detailInfo : {},
        paramInfo : {},
        commentInfo : {},
        recommend : [],
        themeTopYs : null
      }
    },
    created(){
      //存id
      this.iid = this.$route.params.iid
      //请求数据
      getdetail(this.iid).then(res => {
        const data = res.result
        console.log(res)
        //轮播
        this.topImages = data.itemInfo.topImages
        //信息
        this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services) 
        //商家
        this.shop = new Shop(data.shopInfo)
        //详情
        this.detailInfo = data.detailInfo
        //参数
        this.paramInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
        //评论
        if(data.rate.cRate !== 0) {
          this.commentInfo = data.rate.list[0]
        }
      }),
      //请求推荐数据
      getRecommend().then(res => {
        console.log(res)
        this.recommend = res.data.list
      })
      //存值 getThemeTop
      this.getThemeTopY = deBounce(() => {
        console.log(111)
       this.themeTopYs = []
       this.themeTopYs.push(0);
       this.themeTopYs.push(this.$refs.params.$el.offsetTop);
       this.themeTopYs.push(this.$refs.commengt.$el.offsetTop);
       this.themeTopYs.push(this.$refs.recommend.$el.offsetTop);
       
        
      },100 )
    },
    methods: {
      imageLoad(){
        
          this.$refs.scroll.refresh();
       
        
      },
      titlesClick(index) {
        
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
      },
      addToCart(){
        console.log('加入购物车')
        //获取信息
        const product = {}
        product.image ='https:' + this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid
        console.log(product.image)
        //加入购物车
        this.$store.commit('addCart', product)
      },
      service(){
        console.log('点击了客服')
      },
      store(){
        console.log('点击了店铺')
      },
      collection(){
        console.log('点击了收藏')
      },
      buy(){
        console.log('点击了购买')
      },
      
    },
    
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .detail-nav {
    position: relative;
    z-index: 12;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
   
  }
   
</style>

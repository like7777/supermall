<template>
  <div class="detail">
    <detail-nav-bar class="detail-nav"/>
    <scroll class="content" ref="scroll">
      <detail-swiper :top-images="topImages"/>
      <detail-base-info :goods="goods"/>
      <detail-shop :shop="shop"/>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad()"/>
      <detail-param-info :param-info="paramInfo"/>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from './ChildComps/DetailNavBar'
  import {getdetail, Goods, Shop, GoodsParam} from '../../network/detail'
  import DetailSwiper from './ChildComps/DetailSwiper'
  import DetailBaseInfo from './ChildComps/DetailBaseInfo'
  import DetailShop from './ChildComps/DetailShop'
  import Scroll from '../../components/common/scroll/Scroll'
  import DetailGoodsInfo from './ChildComps/DetailGoodsInfo'
  import DetailParamInfo from './ChildComps/DetailParamInfo'
  
  export default {
    name:'Detail',
    components:{
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShop,
      Scroll,
      DetailGoodsInfo,
      DetailParamInfo
    },
    data(){
      return{
        iid : null,
        topImages : [],
        goods : {},
        shop : {},
        detailInfo : {},
        paramInfo : {}
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
        this.ParamInfo = new GoodsParam(data.itemParams.info, data.itemParams.rule)
      })
    },
    methods: {
      imageLoad(){
        this.$refs.scroll.refresh()
      }
    }
  }
</script>

<style scoped>
  .detail {
    position: relative;
    z-index: 11;
    background-color: #fff;
    height: 100vh;
  }
  .nnn {
    position: relative;
    z-index: 12;
    background-color: #fff;
  }
  .content {
    height: calc(100% - 44px);
   
  }
   
</style>

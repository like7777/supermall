<template>
  <div id="app">
    </router-view>
    <tab-bar>
     <tab-bar-item path="/home">
        <img slot="item-icon" src="~assets/img/首页.png" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="category">
        <img slot="item-icon" src="~assets/img/分类.png" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="cart" >
        <img slot="item-icon" src="~assets/img/购物车.png" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="profile">
        <img slot="item-icon" src="~assets/img/我的.png" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from '@/components/common/tabbar/TabBar'
import TabBarItem from '@/components/common/tabbar/TabBarItem'
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style>
@import url("../../assets/css/base.css");
</style>

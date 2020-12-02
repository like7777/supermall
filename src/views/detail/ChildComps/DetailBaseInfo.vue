<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{goods.title}}</div>
    <div class="info-price">
      <span class="n-price">{{goods.newPrice}}</span>
      <span class="o-price">{{goods.oldPrice}}</span>
      <span v-if="goods.discount" class="discount">{{goods.discount}}</span>
    </div>
    <div class="info-other">
      <span class="info-other-left">{{goods.columns[0]}}</span>
      <span class="info-other-centen">{{goods.columns[1]}}</span>
      <span class="info-other-right">{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1" :key="index">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </span>
    </div>
  </div>
</template>

<script>
    import {getdetail, Goods} from '../../../network/detail.js'
    import Detail from '../Detail.vue'
  
  export default {
    name:'DetailBaseInfo',
    props:{
      goods:{
        type:Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style>
  .info-title {
    font-size: 16px;
    font-weight: bold;
    padding: 5px;
    margin-top: 5px;
  }
  .info-price {
    
    padding: 5px;
  }
  .n-price {
    font-size: 24px;
    color: #ea8b9c;
  }
  .o-price {
    font-size: 14px;
    color: #968787;
    text-decoration: line-through;
  }
  .discount {
    background: red;
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
    color: var(--color-background);
  }
  .info-other {
    display: flex;
    margin-top: 15px;
    font-size: 12px;
    color: #9b9b9b;
    padding: 5px;
    border-bottom: 1px solid #cccccc61;
  }
  .info-other span {
    flex: 1;
  }
  .info-other-centen {
    text-align: center;
  }
  .info-other-right {
    text-align: right;
  }
  .info-service {
    font-size: 12px;
    margin-top: 15px;
    padding: 5px;
    display: flex;
  }
  .info-service-item {
    flex: 1;
  }
  .info-service-item img{
    width: 12px;
  }
</style>

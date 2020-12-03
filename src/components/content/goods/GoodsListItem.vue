<template>
  <div class="goods-item" @click="ItemClick">    
      <img :src="showImage" alt="">   
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
        <span class="price">{{goodsItem.price}}</span>
        <span class="cfav">{{goodsItem.cfav}}</span>      
    </div>
  </div>
</template>

<script>
  export default{
    name:'GoodsListItem',
    props:{
      goodsItem:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    computed:{
      showImage(){
        return this.goodsItem.image || this.goodsItem.show.img
      }
    },
    methods:{
      ItemClick(){
        this.$router.push('/detail/' + this.goodsItem.iid)
      }
    }
  }
</script>

<style>
  .goods-item {
    
    position: relative;
    width: 48%;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info {
    font-size: 12px;
    position: relative;
    
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }
  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .goods-info .price {
    color: #ccc;
    margin-right: 20px;
  }
  .goods-info .cfav {
    position: relative;
  }
  .goods-info .cfav::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url(../../../assets/img/collect.svg) 0 0/14px 14px;
  }
</style>

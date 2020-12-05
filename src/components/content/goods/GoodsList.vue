<template>
  <div class="goods"  @click="ItemClick()">
    <goods-list-item v-for="item in goods" :goods-item="item" />
  </div>
</template>


<script>
  import GoodsListItem from './GoodsListItem'
  export default{
    name:'GoodsList',
    components:{
      GoodsListItem
    },
    methods:{
      ItemClick(){
        // this.$router.push('/detail/' + this.goods.item_id)
        console.log(this)
      }
    },
    props:{
      goods:{
        type:Array,
        default(){
          return []
        }
      }     
    }
  }
</script>

<style>
  .goods {
    margin-top: 5px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-bottom: 49px;
  }
</style>

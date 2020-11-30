<template>
  <div class="recommend">
    <div v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name:"HomeRecommendedView",
    props:{
      recommends : {
        type: Array,
        default(){
          return []
        }
      }
    },
  }
</script>

<style>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 10px solid #eee;
    justify-content:center;
  }
  .recommend div {
    margin-right: 5%;
  }
  .recommend div:first-child{
    margin-left: 5%;
  }
  .recommend-item{
    flex: 1;
  }
  .recommend img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>

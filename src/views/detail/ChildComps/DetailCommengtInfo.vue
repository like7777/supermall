<template>
  
    <div v-if="Object.keys(commengtInfo).length !== 0" class="comment-info">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more" @click="more()">
          更多
          <i class="arrow-right"></i>
        </div>
      </div>
      <div class="info-user">
        <img :src="commengtInfo.user.avatar" alt="">
        <span>{{commengtInfo.user.uname}}</span>
      </div>
      <div class="info-detail">
        <p>{{commengtInfo.content}}</p>
        <div class="info-other">
          <span class="date">{{commengtInfo.created | showDate}}</span>
          <span>{{commengtInfo.style}}</span>
        </div>
        <div class="info-imgs">
          <img :src="item" v-for="(item, index) in commengtInfo.images" :key="index" alt="">
        </div>
      </div>
    </div>
  
</template>

<script>
  import {formatDate} from '../../../common/utils.js'
  
  export default {
    name:'DetailCommengtInfo',
    props:{
      commengtInfo:{
        type:Object,
        default(){
          return {}
        }
      }
    },
    filters: {
      showDate(value){
        const date = new Date(value * 1000)
        return formatDate(date, "yyyy-MM-dd");
      }
    },
    methods:{
      more(){
        console.log('点击了更多')
      }
    }
  }
</script>

<style>
  .comment-info {
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-header {
    height: 50px;
    line-height: 50px;
    border-bottom: 1ox solid rgba(0,0,0,.1);
  }
  .header-title {
    float: left;
    font-size: 15px;
  }
  .header-more {
    float: right;
    margin-right: 10px;
    font-size: 13px;
  }
  .info-user {
    padding: 10px 0 5px;
  }
  .info-user img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
  }
  .info-user span {
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
  }
  .info-detail {
    padding: 0 5px 15px;
  }
  .info-detail p {
    font-size: 14px;
    color: #777;
    line-height: 1.5;
  }
  .info-detail .info-other {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
  }
  .info-other .date{
    margin-right: 8px;
  }
  .info-imgs {
    margin-top: 10px;
  }
  .info-imgs img {
    width: 70px;
    height: 70px;
    margin-right: 5px;
  }
</style>

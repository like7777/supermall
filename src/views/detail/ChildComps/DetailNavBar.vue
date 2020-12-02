<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="../../../assets/img/back.svg" alt="">
      </div>
      <div slot="centen" class="titles">
        <div :class="{active:index === currentIndex}" v-for="(item,index) in titles" class="titles-item" @click="titlesClick(index)">{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from '../../../components/common/navbar/NavBar'
  export default{
    name:"DetailNavBar",
    components:{
      NavBar
    },
    data(){
      return{
        titles:['商品', '参数', '详情', '推荐'],
        currentIndex : 0
      }
    },
    methods:{
      titlesClick(index){
        this.currentIndex = index
      },
      backClick(){
        this.$router.back()
      }
    }
  }
</script>

<style>
  .titles {
    display: flex;
  }
  .titles-item {
    flex: 1;
    font-size: 14px;
    color: #545454;
  }
  .titles .active {
    color: red;
  }
  .back img{
    margin-top: 18%;
  }
</style>

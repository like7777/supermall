<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" class="tab-control-item" :class="{active : index === currentIndex}" @click="ItemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name:'TabControle',
    props:{
      title:{
        type : Array,
        default(){
          return []
        }
      }
    },
    data(){
      return{
        currentIndex : 0
      }
    },
    methods:{
      ItemClick(index){
        this.currentIndex = index
        this.$emit('TabClick',index)
      }
    }
  }
</script>

<style>
  .tab-control {
    display: flex;
    text-align: center;
    background: #fff;
  }
  .tab-control-item {
    flex: 1;
  }
  .active {
    color: pink;
  }
  .active span {
    border-bottom: 3px solid pink;
    padding: 5px;
  }
</style>

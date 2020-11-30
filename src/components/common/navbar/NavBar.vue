<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="centen"><slot name="centen"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name:'NarBar'
  }
</script>

<style>
  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    color: #ffffffd1;
    font-size: 20px;
  }
  .left,
  .right {
    width: 60px;
   
  }
  .centen {
    flex: 1;
    
  }
</style>

<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot name="item-icon"></slot>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  props: {
    path: String
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  }
}
</script>

<style>
 .tab-bar-item {
   flex: 1;
   text-align: center;
 }
 .tab-bar-item img {
   width: 24px;
   height: 24px;
 }
 .active {
   color: red;
 }
</style>

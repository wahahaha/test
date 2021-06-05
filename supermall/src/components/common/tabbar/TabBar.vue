<template>
  <div id='tabbar'>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TabBar',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  /* @import 'assets/css/base.css'; */

  #tabbar {
    display: flex;
    background-color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0px -2px 2px rgba(50, 50, 50, .1) ;
  }
</style>

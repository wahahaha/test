<template>
  <div class="navbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
  .navbar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0px 2px 2px rgba(50, 50, 50, .1) ;
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>
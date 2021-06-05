<template>
  <div>
    <nav-bar class="cart">
      <div slot="center">购物车</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'

export default {
  name: 'cart',
  components: { 
    NavBar,
  }
}
</script>

<style scoped>
  .cart {
    background-color:#FF1493;
    color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }
</style>
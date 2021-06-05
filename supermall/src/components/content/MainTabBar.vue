<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="item-icon" src="@/assets/img/tabbar/biaoqianA01_shouye-266.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/biaoqianA01_shouye-266_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path='/catagory'>
        <img slot="item-icon" src="@/assets/img/tabbar/fenlei.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/fenlei_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img slot="item-icon" src="@/assets/img/tabbar/shop.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/shop_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="item-icon" src="@/assets/img/tabbar/yiliaohangyedeICON-.svg" alt="">
        <img slot="item-icon-active" src="@/assets/img/tabbar/yiliaohangyedeICON-_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'
// import axios from 'axios'
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata'
// }).then(res => {
//   console.log(res)
// })
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>
</style>

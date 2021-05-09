<template>
    <div id='tabbar'>
        <div class="tabbar-item">
          <!-- <img src="..\..\assets\img\tabbar\biaoqianA01_shouye-266.svg" alt=""> -->
          首页
        </div>
        <div class="tabbar-item">
          <!-- <img src="..\..\assets\img\tabbar\fenlei.svg" alt=""> -->
          分类
        </div>
        <div class="tabbar-item">
          <!-- <img src="..\..\assets\img\tabbar\shop.svg" alt=""> -->
          购物车
        </div>
        <div class="tabbar-item">
          <!-- <img src="..\..\assets\img\tabbar\yiliaohangyedeICON-.svg" alt=""> -->
          我的
        </div>
    </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'home'
    }
  }
}
</script>

<style scoped>
  /* @import '../../assets/css/base.css'; */

  #tabbar {
      display: flex;
      background-color: #f6f6f6;

      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      box-shadow: 0px -2px 2px rgba(50, 50, 50, .1) ;
  }

  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
  }

  /* img {
    width: 40px;
    height: 40px;
  } */
</style>

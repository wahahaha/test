<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-icon type="shop" class="logo" :style="{fontSize:'30px', width: '80px'}"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['3']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          <router-link to="/">
              首页
          </router-link>
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/shopping-cart">
            购物车
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          个人中心
        </a-menu-item>
      </a-menu>
    </a-layout-header>
      <a-layout style="padding: 24px 224px 24px">
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          <a href="#" id='haha'><img id="pic" src="../assets/logo.jpg" alt="" style="width:190px;height:190px"></a>
        </a-layout-content>
      </a-layout>
    </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false
    }
  }
}
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  margin: 16px 78px 16px 0;
  float: left;
}
#haha {
  border-radius:50%;
  width:150px;
  height:150px;
  box-shadow: 2px 5px 5px #888888;
  position: absolute;
  left: 50%;
  top: 15%;
  margin-left: -75px;
  overflow: hidden;
  animation: rotation 8s linear infinite;
  /* -webkit-animation:rotation 8s infinite */
}
@-webkit-keyframes rotation {
    from {
        -webkit-transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
    }
}
#haha:hover {
  animation-play-state:paused;
}
</style>

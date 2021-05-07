<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <a-icon type="shop" class="logo" :style="{fontSize:'30px', width: '80px'}"/>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['1']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          首页
        </a-menu-item>
        <a-menu-item key="2">
          <router-link to="/shopping-cart">
            购物车
          </router-link>
        </a-menu-item>
        <a-menu-item key="3">
          <router-link to="/home">
            个人中心
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-sub-menu key="sub1">
            <span slot="title"><a-icon type="skin" />男女服饰</span>
            <a-menu-item :key="clothe" v-for="clothe of clothes">
              {{clothe}}
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub2">
            <span slot="title"><a-icon type="laptop" />电子设备</span>
            <a-menu-item :key="item" v-for="item in electric">
              {{item}}
            </a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="sub3">
            <span slot="title"><a-icon type="book" />学习资料</span>
            <a-menu-item key="9">
              课外读物
            </a-menu-item>
            <a-menu-item key="10">
              教辅书
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }"
        >
          Content
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data () {
    return {
      collapsed: false,
      clothes: ['上衣', '裤子', '鞋子', '内衣'],
      electric: ['平板', '电脑', '手机', '冰箱']
    }
  }
}
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  margin: 16px 78px 16px 0;
  float: left;
}
</style>

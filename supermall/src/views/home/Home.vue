<template>
  <div class="home">
    <nav-bar class="home-center">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control class="tabcontrol" style="z-index:1000" :titles="['流行','新款','精选']" @tabclick='tabclick' v-show="position.y <= -671"></tab-control>
    <scroll class="homescroll" ref="scroll" :probeType='3'>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
      <home-feature></home-feature>
      <tab-control class="tabcontrol" :titles="['流行','新款','精选']" @tabclick='tabclick'></tab-control>
      <goods-list :tabnum='tabnum' @imgload='imgload'/>
    </scroll>
    <back-top @click.native="backtop" v-show="position.y < 0"></back-top>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import HomeSwiper from './childcomponents/HomeSwiper.vue'
import HomeRecommend from './childcomponents/HomeRecommend.vue'
import HomeFeature from './childcomponents/HomeFeature.vue'
import TabControl from 'components/content/TabControl.vue'
import GoodsList from 'components/content/goodsList/GoodsList.vue'
import Scroll from 'components/common/scroll/Scroll.vue'
import BackTop from 'components/content/backTop/BackTop.vue'

import {getHomeMultidata} from 'network/home.js'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeature,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      tabnum: 0,
      position: 0
    }
  },
  created() {
    getHomeMultidata().then( res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })
  },
  mounted() {
    this.$refs.scroll.bs.on('scroll', position => {
      this.position = position
    })
  },
  methods: {
    tabclick(index) {
      this.tabnum = index
    },
    imgload() {
      this.$refs.scroll.refresh();
    },
    backtop() {
      this.$refs.scroll.bs.scrollTo(0,0,600)
    }
  }
}
</script>

<style scoped>
  .home {
    height: 100vh;
    /* position: relative; */
  }
  
  .home-center {
    background-color: #FF1493;
    color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 999;
  }

  .tabcontrol {
    position: sticky;
    top: 43px;
    background-color: #fff;
  }

  .homescroll {
    /* overflow: auto;
    position: absolute;
    top: 44px;
    bottom: 56px;
    left: 0px;
    right: 0px; */
    overflow: hidden;
    margin-top: 44px;
    height: calc( 100% - 94px );
  }

</style>
<template>
  <div>
    <nav-bar class="profile">
      <div slot="center">个人信息</div>
    </nav-bar>
    <scroll class="profilescroll">
      <profile-header></profile-header>
      <profile-middle></profile-middle>
    </scroll>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar.vue'
import ProfileHeader from './childcomponents/ProfileHeader.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import ProfileMiddle from './childcomponents/ProfileMiddle.vue'
export default {
  name: 'profile',
  components: { 
    NavBar,
    ProfileHeader,
    Scroll,
    ProfileMiddle 
  },
}
</script>

<style scoped>
  .profile {
    background-color: #FF1493;
    color: #fff;
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    z-index: 999;
  }

  .profilescroll {
    height: 100vh;
    padding-top: 43px;
  }
</style>
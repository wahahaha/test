<template>
  <div class="block">
    <el-carousel height="150px">
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link"><img :src="item.image" alt=""></a>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'homeswiper',
  props: {
    banners: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

  img {
    width: 100%;
    height: 100%;
  }
</style>
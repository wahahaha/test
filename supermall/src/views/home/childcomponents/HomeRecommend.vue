<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommenditem">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'homerecommend',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 10px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
  }

  .recommenditem {
    flex: 1;
    padding: 5px;
  }

  img {
    margin-bottom: 5px;
  }

</style>
<template>
  <div class="goodslistitem">
    <img :src="good.imgurl" alt="" @load="imgload">
    <div>
      <p>商品假数据商品假数据商品假数据商品假数据</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'goodslistitem',
  props: {
    good: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    imgload() {
      this.$emit('imgload')
    }
  }
}
</script>

<style scoped>
  .goodslistitem {
    width: 100%;
  }

  .goodslistitem img {
    width: 100%;
    border-radius: 5%;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
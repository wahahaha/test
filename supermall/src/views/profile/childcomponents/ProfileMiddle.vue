<template>
  <div class="profilemiddle">
    <div class="pmitem">
      <img src="~assets/img/profile/daifukuan.svg" alt="">
      <span>待付款</span>
    </div>
    <div class="pmitem">
      <img src="~assets/img/profile/daifahuo.svg" alt="">
      <span>待发货</span>
    </div>
    <div class="pmitem">
      <img src="~assets/img/profile/daishouhuo.svg" alt="">
      <span>待收货</span>
    </div>
    <div class="pmitem">
      <img src="~assets/img/profile/daipingjia.svg" alt="">
      <span>待评价</span>
    </div>
    <div class="pmitem">
      <img src="~assets/img/profile/shouhou.svg" alt="">
      <span>售后</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profilemiddle'
}
</script>

<style scoped>
  .profilemiddle {
    display: flex;
    padding: 20px 10px 20px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }

  .pmitem {
    flex: 1;
    font-size: 12px;
  }

  img {
    display: block;
    width: 30px;
    height: 30px;
    padding-bottom: 5px;
  }
</style>

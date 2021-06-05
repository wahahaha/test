<template>
  <div class="backtop">
    <img src="~assets/img/direction-up.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'backtop'
}
</script>

<style scoped>
  .backtop {
    position: fixed;
    right: 10px;
    bottom: 60px;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  .backtop img {
    width: 40px;
    height: 36px;
  }
</style>
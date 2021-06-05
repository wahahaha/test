<template>
  <div class="tabbar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-icon"></slot>
    <slot v-else name="item-icon-active"></slot>
    <div :style="activeStyle">
    <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarItem',
  data () {
    return {
    }
  },
  props: {
    path: String,
    activecolor: {
      type: String,
      default: 'red'
    }
  },
  methods: {
    itemClick () {
      this.$router.replace(this.path)
    }
  },
  computed: {
    isActive () {
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle () {
      return this.isActive ? {color: this.activecolor} : {}
    }
  }
}
</script>

<style scoped>
  .tabbar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 13px;
    margin-bottom: 2px;
  }

  .tabbar-item img {
    width: 28px;
    height: 28px;
    margin-top: 3px;
    vertical-align: middle;
  }

</style>

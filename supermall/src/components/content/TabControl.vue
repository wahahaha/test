<template>
  <div class="tabcontrol">
    <div v-for="(item,index) in titles" :key="index" class="tabcontrol-item" :class="{active: index===currentindex}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabcontrol',
  props: {
    titles: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentindex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentindex = index
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style scoped>
  .tabcontrol {
    display: flex;
    text-align: center;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
  }
  
  .tabcontrol-item {
    flex: 1;
  }

  .tabcontrol-item span {
    padding: 5px;
  }

  .active {
    color: #FFB6C1;
  }

  .active span {
    border-bottom: 3px solid #FFB6C1;
  }
</style>
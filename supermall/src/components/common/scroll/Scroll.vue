<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data() {
    return {
      bs: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted() {  
    this.bs = new BScroll(this.$refs.wrapper,{
      probeType: this.probeType,
      // pullUpLoad: true,
      click: true,
      mouseWheel: true
    })
 
    // this.bs.on('scroll', position => {
    //   console.log(position);
    // })
    // bscroll.on('pullingUp', () => {
    //   console.log('上拉加载');
    // })
  },
  methods: {
    refresh() {
      this.bs && this.bs.refresh()
    }
  }
}
</script>
<template>
  <div class="demo-myclock">
    <h1>测试使用 MyClock功能组件!</h1>
    <my-clock></my-clock>
  </div>
</template>

<script>
import MyClock from '@/components/function/MyClock'
export default {
  name: 'demo-myclock',
  data () {
    return {
    }
  },
  components: {
    MyClock
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .demo-myclock {
  }
</style>

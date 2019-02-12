<template>
  <div class="page1">
    <h1>This is page1!</h1>
    <my-clock></my-clock>
  </div>
</template>

<script>
import MyClock from '@/components/function/MyClock'
export default {
  name: 'page1',
  data () {
    return {
      currentTime: ''
    }
  },
  components: {
    MyClock
  },
  methods: {
    nowTime () {
      let hh = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours()
      let mm = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes()
      let ss = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds()
      this.currentTime = hh + ':' + mm + ':' + ss
    }
  },
  mounted () {
    setInterval(this.nowTime, 1000)
  }
}
</script>

<style lang="less" scoped>
  .page1 {
    background: @page1Color;
    height: 100%;
    width: 100%;
    .white {
      color: white;
    }
    h1 {
      color: white;
      font-family: Karate;
    }
    h2 {
      font-size: 63px;
    }
    .led1 {
      font-family: LED1;
    }
    .led2 {
      font-family: LED2;
    }
    .led3 {
      font-family: LED3;
    }
    .led4 {
      font-family: LED4;
    }
    .led5 {
      font-family: LED5;
      color: white;
    }
  }
</style>

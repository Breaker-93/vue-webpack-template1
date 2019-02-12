<template>
  <div class="my-clock">
    <span class="led4">{{currentTime}}</span>
  </div>
</template>

<script>
export default {
  name: 'page1',
  data () {
    return {
      currentTime: ''
    }
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
.my-clock {
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

<template>
  <div class="page1">
    <h1>This is page1!</h1>
    <a class="btn" @click="toPage2">点击进入容器组件page2</a>
    <h2>{{globalConstant.module1.profile.content}}</h2>
    <my-clock></my-clock>
    <module1></module1>
    ----------------------------
    <module2></module2>
  </div>
</template>

<script>
import MyClock from '@/components/function/MyClock'
import module1 from '@/components/subPage/module1'
import module2 from '@/components/subPage/module2'
export default {
  name: 'page1',
  data () {
    return {
      currentTime: ''
    }
  },
  components: {
    MyClock,
    module1,
    module2
  },
  methods: {
    toPage2 () {
      console.log("You clicked it!")
      this.$router.push("/page2");
    }
  }
}
</script>

<style lang="less" scoped>
  .page1 {
    background: @page1Color;
    height: 100%;
    width: 100%;
    .btn {
      display: inline-block;
      color: white;
      background-color: #900b09;
      border-radius: 2px;
      box-shadow: 0 0 2px 0 rgba(0,0,0,0.12), 0 2px 2px 0 rgba(0,0,0,0.24);
      cursor: pointer;
      padding: 0 15px;
      height: 39px;
      line-height: 39px;
    }
  }
</style>

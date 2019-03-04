<template>
  <div class="page2">
    <h1>This is page2!</h1>
    <a class="btn" @click="toPage1">点击进入容器组件page1</a>
  </div>
</template>

<script>
export default {
  name: 'page2',
  data () {
    return {
      currentTime: ''
    }
  },
  methods: {
    toPage1 () {
      this.$router.push("/page1");
    }
  },
  mounted () {
    console.log("page2")
    this.globalUtil.ajax.get(this.globalApi.module1.getMobule1Info, {}, (res) => {
      console.log(res)
    }, (error) => {
      console.log(error)
    })
  }
}
</script>

<style lang="less" scoped>
  .page2 {
    background: @page2Color;
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

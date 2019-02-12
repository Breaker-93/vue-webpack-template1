<template>
  <div class="hello">
    <h1>Hello,{{globalConstant.AUTHOR.name}}!</h1>
    <a class="btn" @click="toPage1">点击进入容器组件page1</a>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    toPage1 () {
      console.log("You clicked it!")
      this.$router.push("/page1");
    }
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .hello {
    text-align: center;
    h1 {
      font-family: Karate;
      margin: 50px 0;
    }
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

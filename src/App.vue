<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
  /* 根组件中引入初始化样式文件 */
  @import './assets/css/reset.css';
  /* 根组件中引入自定义字体文件 */
  @import './assets/css/font.css';
  html, body, #app {
    height: 100%;
    width: 100%;
  }
</style>

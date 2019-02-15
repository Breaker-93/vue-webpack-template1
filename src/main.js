// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入并挂载全局“常量文件”
const globalConstant = require('@/assets/js/constant')
Vue.prototype.globalConstant = globalConstant

// 引入并挂载全局“函数文件”
const globalUtil = require('@/assets/js/util')
Vue.prototype.globalUtil = globalUtil

// 引入并挂载全局“网络请求配置文件”
const globalUrl = require('@/assets/js/url')
Vue.prototype.globalUrl = globalUrl

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

/**
 * Created by Breaker-93 on 2018/1/23.
  */
'use strict'
// 全局URL配置
const devUrl = require('./dev.url'); // 当存在多份开发url配置时，可根据需要在此处修改加载；
const prodUrl = require('./prod.url'); // 当存在多份生产url配置时，可根据需要在此处修改加载；
const url = process.env.NODE_ENV === 'production' ? prodUrl : devUrl;
module.exports = {
  serverUrl: "http://" + url.apiIP, // API服务访问的IP地址
  interfaceUrl: "http://" + url.apiIP + ":" + url.apiPORT + url.apiPrefix, // API服务访问的URL
  assetsUrl: "http://" + url.assetsIP + ":" + url.assetsPORT + url.assetsPath // 静态资源访问的URL
}

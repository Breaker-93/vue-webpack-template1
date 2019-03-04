/**
 * Created by Breaker-93 on 2018/8/13.
 */
const axios = require('axios')
const preUrl = require('../url')
var token = sessionStorage.getItem("token")
if (token) {
  axios.defaults.headers.common['Authorization'] = token
}
var formData = function (data) {
  let _formData = new FormData()
  for (var i in data) {
    _formData.append(i, data[i])
  }
  return _formData;
}
module.exports = {
  /**
   * @description: 对axios的POST请求方法的封装
   * @param: api  -> String
   * @param: param  -> 形如{param1:"",param2:""}
   * @param: thenFun  -> 请求响应的回调函数
   * @param: exeFun  -> 异常捕获的回调函数
   * @return
   * @author: Breaker-93
   * @date: create on 2017-12-18 15:45:09
   */
  post (api, param, thenFun, exeFun) {
    var _formData = formData(param);
    axios.post(preUrl.interfaceUrl + api, _formData).then(function (res) {
      thenFun.call(this, res.data);
    }).catch(function (error) {
      exeFun.call(this, error);
    });
  },
  /**
   * @description: 对axios的GET请求方法的封装
   * @param: api  -> String
   * @param: param  -> 形如{param1:"",param2:""}
   * @param: thenFun  -> 请求响应的回调函数
   * @param: exeFun  -> 异常捕获的回调函数
   * @return
   * @author: Breaker-93
   * @date: create on 2017-12-18 15:48:35
   */
  get (api, param, thenFun, exeFun) {
    axios({
      method: 'get',
      url: preUrl.interfaceUrl + api,
      params: param
    }).then(function (res) {
      thenFun.call(this, res.data);
    }).catch(function (error) {
      exeFun.call(this, error);
    });
  },
  /**
   * @description: 对axios的DELETE请求方法的封装
   * @param: api  -> String
   * @param: param  -> 形如{param1:"",param2:""}
   * @param: thenFun  -> 请求响应的回调函数
   * @param: exeFun  -> 异常捕获的回调函数
   * @return
   * @author: Breaker-93
   * @date: create on 2017-12-18 15:48:35
   */
  delete (api, param, thenFun, exeFun) {
    axios({
      method: 'delete',
      url: preUrl.interfaceUrl + api,
      params: param
    }).then(function (res) {
      thenFun.call(this, res.data);
    }).catch(function (error) {
      exeFun.call(this, error);
    });
  },
  /**
   * @description: 对axios的PUT请求方法的封装（已加header）
   * @param: api  -> String
   * @param: param  -> 形如{param1:"",param2:""}
   * @param: thenFun  -> 请求响应的回调函数
   * @param: exeFun  -> 异常捕获的回调函数
   * @return
   * @author: Breaker-93
   * @date: create on 2017-12-18 15:48:35
   */
  put (api, param, thenFun, exeFun) {
    axios({
      method: 'put',
      url: preUrl.interfaceUrl + api,
      params: param
    }).then(function (res) {
      thenFun.call(this, res.data);
    }).catch(function (error) {
      exeFun.call(this, error);
    });
  }
}

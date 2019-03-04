/**
 * Created by Breaker-93 on 2018/8/13.
 */
const module1 = require('./module1')
const res = {
  toLogin: "/loginApi",
  getUserInfo: "/user/info"
}
res.module1 = module1
module.exports = res

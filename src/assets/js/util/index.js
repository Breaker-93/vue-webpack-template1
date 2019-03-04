/**
 * Created by Breaker-93 on 2018/8/13.
 */
const ajax = require('./ajax')
const res = {
  /**
   * @description: 将时间戳转换为日期字符串(转换两种)
   * @param: timestamp[String] 时间戳
   * @param: type [Number] 1:年/月/日  2:年/月/日 上下午 时分秒
   * @return: [Sting]
   * @author: Breaker-93
   * @date: create on 2017-12-18 15:36:49
   */
  transTimestamp (timestamp, type) {
    var newDate = new Date();
    newDate.setTime(timestamp);
    if (type === 1) {
      // yyyy/MM/dd 例如：2019/1/26
      return newDate.toLocaleDateString();
    }
    if (type === 2) {
      // yyyy/MM/dd am hh:mm:ss 例如：2019/1/26 上午11:28:51
      return newDate.toLocaleString();
    }
  }
}
res.ajax = ajax
module.exports = res

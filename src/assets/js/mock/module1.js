/**
 * Created by Breaker-93 on 2018/8/13.
 */
const Mock = require('mockjs')
const Api = require("../api")
// const util = require("../util")

// 发布职位
Mock.mock(new RegExp(Api.module1.getMobule1Info), "get", (req) => {
  let res = {
    "code": 200,
    "message": "操作成功",
    "data": {
      'list|1-10': [
        {
          'id|+1': 1
        }
      ]
    }
  }
  return res
})

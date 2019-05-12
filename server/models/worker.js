
'use strict'
// import isodate from 'isodate'
import lastModified from './plugins'
import mongoose from './db'
var moment = require('moment')
const workerSchema = new mongoose.Schema({
  name: String,
  work_id: {
    type: Number,
    min: 0,
    max: 9999
  },
  job: [{
    type: String
  }],
  rights: [{
    type: String
  }],
  add_time: {
    type: String,
    // default: isodate(new Date())
    default: moment().format()// 这个时间一直是第一时区的时间
    // default: '2017-10-15'
  },
  admin: {
    type: Boolean,
    default: false
  },
  isStudent: {
    type: Number,
    dafault: 0
  }
})
// console.log(moment().format())
// 使用插件
workerSchema.plugin(lastModified)

// 默认导出模型
export default mongoose.model('worker', workerSchema)

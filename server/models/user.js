
'use strict'
// import isodate from 'isodate'
import lastModified from './plugins'
import mongoose from './db'
var moment = require('moment')
const userSchema = new mongoose.Schema({
  name: String,
  age: {
    type: Number,
    min: 18,
    max: 100
  },
  job: [{
    type: String
  }],
  add_time: {
    type: String,
    // default: isodate(new Date())
    default: moment().format()// 这个时间一直是第一时区的时间
    // default: '2017-10-15'
  }
})
// console.log(moment().format())
// 使用插件
userSchema.plugin(lastModified)

// 默认导出模型
export default mongoose.model('user', userSchema)

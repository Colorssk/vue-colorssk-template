
'use strict'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017/test')
var db = mongoose.connection
db.on('error', () => {
  console.log('连接错误')
})
db.once('open', () => {
  console.log('mongoose已经打开')
})

export default mongoose

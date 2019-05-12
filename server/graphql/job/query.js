
'use strict'

import {
  GraphQLString,
  GraphQLNonNull,
  GraphQLList
} from 'graphql'

import {
  jobType
} from './model'

// 引入数据模型
import jobModel from './../../models/job'

const Jobs = {
  type: new GraphQLList(jobType), // 返回是一个数组
  args: {},
  async resolve (root, params, options) {
    const result = jobModel.find().exec()
    console.log(result)
    result.then(res => {
      console.log('query')
      console.log(res)
    })
    return result
  }
}

const Job = {
  type: new GraphQLList(jobType),
  args: {
    job_name: {
      name: 'job_name',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve (root, params, options) {
    const result = jobModel.find({job_name: params.job_name}).exec()
    return result
  }
}
export default {
  Jobs: Jobs,
  Job: Job
}

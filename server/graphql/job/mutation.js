
'use strict'
import {
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql'
import {
  jobInput,
  jobUpdateInput,
  CreateType
} from './model'

// 引入job的数据模型
import JobModel from './../../models/job'
const JobCreate = {
  type: CreateType,
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(jobInput) // 使用模型
    }
  },
  async resolve (root, params, options) {
    console.log('数据==>', params.data)
    const result = new JobModel({job_name: params.data.job_name})
    // const result =jobModel.create({job_name:params.data.job_name})
    let data = await result.save()
    return data
  }
}
const JobUpdate = {
  type: GraphQLBoolean, // 更新成功与否返回boolean值
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(jobUpdateInput) // 使用模型
    }
  },
  async resolve (root, params, options) {
    // 经过测试update可行
    console.log('数据==>', params.data)
    // const result = new jobModel({job_name:params.data.job_name})
    const result = JobModel.update({job_name: params.data.pre_job_name}, {job_name: params.data.job_name})
    // let data = await result.save();
    console.log('修改的数据', result)
    return result
  }
}
// const JobDelete = {
//   type: GraphQLBoolean,

// }
export default {
  JobCreate: JobCreate,
  JobUpdate: JobUpdate
}

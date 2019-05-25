
'use strict'
import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLBoolean,
  GraphQLString
} from 'graphql'
import {workerUpdateInput, WorkerResult, workerInput} from './model'

// 导入数据模型
import workerModel from './../../models/worker'

const WorkerUpdate = {
  type: GraphQLBoolean, // 更新成功与否返回boolean值
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(workerUpdateInput) // 使用模型
    }
  },
  async resolve (root, params, options) {
    // 经过测试update可行
    console.log('数据==>', params.data)
    // const result = new jobModel({job_name:params.data.job_name})
    const res = await workerModel.update({name: params.data.pre_name}, {rights: params.data.rights})
    // let data = await result.save();
    // console.log('修改的数据', result)
    // console.log(res.n + res.nModified + res.ok)
    return !!(res.n && res.nModified)
  }
}
const WorkerCreate = {
  type: new GraphQLList(WorkerResult), // 定义一个返回数组对象的类型
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(workerInput) // 传递参数的类型
    }
  },
  async resolve (root, params, options) {
    // 存储到数据库
    let result = await workerModel.create(params.data)
    return [result]
  }
}
const workerDelete = {
  type: GraphQLBoolean,
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString) // 传递参数的类型
    }
  },
  async resolve (root, params, options) {
    // 存储到数据库
    let res = await workerModel.deleteOne({ name: params.name })
    console.log(res.deletedCount)
    return res.deletedCount >= 1
  }
}

export default {
  WorkerCreate: WorkerCreate,
  WorkerUpdate: WorkerUpdate,
  workerDelete: workerDelete
}

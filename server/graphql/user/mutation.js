
'use strict'
import {
  GraphQLNonNull,
  GraphQLList
} from 'graphql'
import {InputResult, userInput} from './model'

// 导入数据模型
import userModel from './../../models/user'

const UserCreate = {
  type: new GraphQLList(InputResult), // 定义一个返回数组对象的类型
  args: {
    data: {
      name: 'data',
      type: new GraphQLNonNull(userInput) // 传递参数的类型
    }
  },
  async resolve (root, params, options) {
    // 存储到数据库
    let result = await userModel.create(params.data)
    return [result]
  }
}

export default {
  UserCreate: UserCreate
}

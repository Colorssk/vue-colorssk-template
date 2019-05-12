
'use strict'
import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLID
} from 'graphql'

export const jobType = new GraphQLObjectType({
  name: 'consumer',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    password: {
      type: GraphQLString
    }
  }
})

// 定义输入的的模型
export let jobInput = new GraphQLInputObjectType({
  name: 'jobInput',
  fields: {
    job_name: {
      type: GraphQLString
    }
  }
})
// 定义修改的参数
export let jobUpdateInput = new GraphQLInputObjectType({
  name: 'jobUpdateInput',
  fields: {
    pre_job_name: {
      type: GraphQLString
    },
    job_name: {
      type: GraphQLString
    }
  }
})
// 定义创建成功的返回值
export const CreateType = new GraphQLObjectType({// 加上input表示是请求参数用的，不加表示返回用的
  name: 'Create',
  fields:
    {
      _id: {
        type: GraphQLID
      },
      job_name: {
        type: GraphQLString
      }
    }

})

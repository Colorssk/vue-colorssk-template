
'use strict'
import {
  GraphQLObjectType,
  GraphQLSchema
} from 'graphql'

// 引入job的查询与操作
import JobQueries from './job/query'
import JobMutations from './job/mutation'

// 引入user
import UserQueries from './user/query'
import UserMutations from './user/mutation'

// 引入worker
import WorkerQueries from './worker/query'
import WorkerMutations from './worker/mutation'

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: Object.assign(
      JobQueries,
      UserQueries,
      WorkerQueries
    )
  }),
  mutation: new GraphQLObjectType({
    name: 'Mutations',
    fields: Object.assign(
      JobMutations,
      UserMutations,
      WorkerMutations
    )
  })
})

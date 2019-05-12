
'use strict'
import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLString
} from 'graphql'
import {workerType, workersearch} from './model'
import workerModel from './../../models/worker'

const workers = {
  type: new GraphQLList(workerType),
  args: {},
  async resolve (root, params, options) {
    const result = workerModel.find().exec()
    return result
  }
}
const worker = {
  type: new GraphQLList(workersearch),
  args: {
    name: {
      name: 'name',
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  async resolve (root, params, options) {
    const result = workerModel.find({name: params.name}).exec()
    return result
  }
}

export default {
  workers: workers,
  worker: worker
}

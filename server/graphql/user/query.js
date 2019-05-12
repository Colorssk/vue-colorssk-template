
'use strict'
import {
  GraphQLList
} from 'graphql'
import {userType} from './model'
import userModel from './../../models/user'

const users = {
  type: new GraphQLList(userType),
  args: {},
  async resolve (root, params, options) {
    const result = userModel.find().exec()
    return result
  }
}

export default {
  users: users
}


'use strict'
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType
} from 'graphql'
import GraphQLDate from 'graphql-date'

export const userType = new GraphQLObjectType({
  name: 'userType',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    job: {
      type: new GraphQLList(GraphQLString)
    },
    add_time: {
      type: GraphQLDate
    }
  }
})

export const userInput = new GraphQLInputObjectType({
  name: 'userInput',
  fields: {
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    job: {
      type: new GraphQLList(GraphQLString)
    }
  }
})

export const InputResult = new GraphQLObjectType({
  name: 'InputResult',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    },
    add_time: {
      // type: GraphQLDate
      type: GraphQLString
    },
    lastMod: {
      type: GraphQLDate
    }
  }
})

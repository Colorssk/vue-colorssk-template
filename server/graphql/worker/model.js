
'use strict'
import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLInputObjectType,
  GraphQLBoolean
} from 'graphql'
import GraphQLDate from 'graphql-date'

export const workerType = new GraphQLObjectType({
  name: 'workerType',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    work_id: {
      type: GraphQLInt
    },
    job: {
      type: new GraphQLList(GraphQLString)
    },
    add_time: {
      type: GraphQLDate
    },
    rights: {
      type: new GraphQLList(GraphQLString)
    },
    admin: {
      type: GraphQLBoolean
    },
    isStudent: {
      type: GraphQLInt
    }
  }
})

export const workerInput = new GraphQLInputObjectType({
  name: 'workerInput',
  fields: {
    name: {
      type: GraphQLString
    },
    work_id: {
      type: GraphQLInt
    },
    job: {
      type: new GraphQLList(GraphQLString)
    },
    rights: {
      type: new GraphQLList(GraphQLString)
    },
    admin: {
      type: GraphQLBoolean
    },
    isStudent: {
      type: GraphQLInt
    }
  }
})

export const WorkerResult = new GraphQLObjectType({
  name: 'WorkerResult',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    work_id: {
      type: GraphQLInt
    },
    job: {
      type: new GraphQLList(GraphQLString)
    },
    add_time: {
      type: GraphQLDate
      // type: GraphQLString
    },
    rights: {
      type: new GraphQLList(GraphQLString)
    },
    lastMod: {
      type: GraphQLDate
    },
    admin: {
      type: GraphQLBoolean
    },
    isStudent: {
      type: GraphQLInt
    }
  }
})

export let workerUpdateInput = new GraphQLInputObjectType({
  name: 'workerUpdateInput',
  fields: {
    pre_name: {
      type: GraphQLString
    },
    rights: {
      type: new GraphQLList(GraphQLString)
    }
  }
})
export const workersearch = new GraphQLObjectType({
  name: 'workersearch',
  fields: {
    _id: {
      type: GraphQLID
    },
    name: {
      type: GraphQLString
    },
    work_id: {
      type: GraphQLInt
    },
    admin: {
      type: GraphQLBoolean
    },
    rights: {
      type: new GraphQLList(GraphQLString)
    },
    isStudent: {
      type: GraphQLInt
    }
  }
})


'use strict'
import Router from 'koa-router'
import {graphiqlKoa, graphqlKoa} from 'graphql-server-koa'
import schema from '../graphql/schema'

const router = new Router()

router.get('/graphql', async (ctx, next) => {
  const result = await graphqlKoa({
    schema: schema
  })(ctx, next)
  console.log(result)
  ctx.body = result
})

router.post('/graphql', async (ctx, next) => {
  await graphqlKoa({
    schema: schema
  })(ctx, next)
})

// 这个仅仅是在方便在浏览器上查看的,项目上线后可以删除
router.get('/graphiql', async (ctx, next) => {
  await graphiqlKoa({
    endpointURL: '/graphql'
  })(ctx, next)
})
module.exports = router.routes()

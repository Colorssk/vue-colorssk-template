
'use strict'
import Router from 'koa-router'
import workerModel from './../models/worker'

const router = new Router()
router.get('/query_worker', async (ctx) => {
  let result = await workerModel.find().exec()
  ctx.body = result
})
router.post('/create_worker', async (ctx) => {
  let {name, workId, job} = ctx.request.body
  let result = await workerModel.create({
    name,
    workId,
    job
  })
  // let data = await result.save();
  ctx.body = {
    result,
    success: 'ok'
  }
})
module.exports = router.routes()


'use strict'
import Router from 'koa-router'
import JobModel from './../models/job'

const router = new Router()

router.get('/query_job', async ctx => {
  let result = await JobModel.find().exec()
  ctx.body = result
})

router.post('/create_job', async (ctx) => {
  let result = new JobModel({job_name: ctx.request.body.job_name})
  let data = await result.save()
  ctx.body = data
})

router.post('/remove_job', async (ctx) => {
  let result = await JobModel.findById(ctx.request.body._id).remove().exec()
  ctx.body = result
})

router.post('/update_job', async (ctx) => {
  let result = await JobModel.findById(ctx.request.body._id).update({job_name: ctx.request.body.job_name}).exec()
  ctx.body = result
})

module.exports = router.routes()

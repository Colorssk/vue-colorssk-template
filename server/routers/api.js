const Router = require('koa-router')
const apiRouter = new Router({ prefix: '/api' })

// const validateUser = async (ctx, next) => {
//   if (!ctx.session.user) {
//     ctx.status = 401
//     ctx.body = 'need login'
//   } else {
//     await next()
//   }
// }
// apiRouter.use(validateUser)

// const successResponse = (data) => {
//   return {
//     success: true,
//     data
//   }
// }
apiRouter
  .get('/getMenuInfo', async (ctx) => {
    ctx.body = 'test'
  })
module.exports = apiRouter

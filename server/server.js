
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from 'koa2-cors'
const apiRouter = require('./routers/api')
const app = new Koa()
app.use(apiRouter.routes()).use(apiRouter.allowedMethods())
// 使用koa-bodyparser中间件
app.use(bodyParser())
// 设置跨域访问
app.use(cors({
  origin: function (ctx) {
    if (ctx.url === '/test') {
      return false
    }
    return '*'
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept']
}))
// 引入用户视图
app.use(require('./routers/user'))
// 引入工作视图
app.use(require('./routers/job'))

app.use(require('./routers/worker'))

// 引入graphql
app.use(require('./routers/graphql'))

app.listen(4000, () => {
  console.log('服务已启动:localhost:4000')
})

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
// import { ApolloLink } from 'apollo-link' // 用来中间件请求头的
import Vue from 'vue'

const httpLink = new HttpLink({
  uri: '/grahpql', // 请求路径
  '/graphql': {
    target: 'http://localhost:8010/grahpql',
    changeOrigin: true,
    pathRewrite: {
      '^/graphql': ''
    }
  }
})

// const middlewareLink = new ApolloLink((operation, forward) => {
//   const token = sessionStorage.getItem('access_token')
//   operation.setContext({
//     headers: {
//       Authorization: `Bearer ${token}` || null
//     }
//   })
//   return forward(operation)
// })

// 创建连接
const apiClient = new ApolloClient({
  link: httpLink, // middlewareLlink.concat(httpLink)
  cache: new InMemoryCache(),
  connectToDevTools: true
})

Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  client: {
    api: apiClient
    // base: baseClient
  },
  defaultClient: apiClient// 默认请求路径
})
export default apolloProvider

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
const httpLink = new HttpLink({
  uri: 'http://localhost:4000/graphql/',
  credentials: 'same-origin'
  /* 这个属性的意思是在同源的情况下携带cookie,因为vue-apollo本身发送的是一个fetch请求，所以在发送请求时不会自动携带cookie，所以我们需要加上此属性 */
})
const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true
})
export default new VueApollo({
  defaultClient: apolloClient,
  clients: { default: apolloClient }
})

import Vue from 'vue'
import VueGraphQL from 'vue-graphql'

Vue.use(VueGraphQL)

const graphqlApi = 'http://localhost:4000/graphql/'

const client = new VueGraphQL.Client(graphqlApi)

export default client

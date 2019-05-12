import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
// import VueApollo from 'vue-apollo'
// import apolloProvider from './apollo'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/sidebar.scss'
import '@/styles/index.scss' // global css
import axios from 'axios'
import { mergeRequest, http } from './api/http'
import api from './api/api'
import graohqlApi from './api/graphqlsql'
import Message from './components/message'
import { permission } from './permission'
import Notification from './components/notification'
// import Dialog from './components/dialog'
import Config from '@/api/config'

import '@/mock'
import createStore from './store'
import createRouter from './router'
import ymdialog from 'ym-dialog'
import graphql from './graphql'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Message)
Vue.use(ElementUI)
Vue.use(Notification)
// Vue.use(VueApollo)
// Vue.use(Dialog)
Vue.use(ymdialog)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.prototype.$graohqlApi = graohqlApi// graphql Api
Vue.prototype.$http = http
Vue.prototype.$mergeRequest = mergeRequest
Vue.prototype.$config = new Config('t', 'http://train.t.17usoft.net', 'http://train.17usoft.net')
Vue.prototype.$flag = true
/* eslint-disable no-new */
const store = createStore()
const router = createRouter()
// store.watch((state) => { console.log(state); return state.app.sliderShow }, (newCount) => {
//   console.log('update', newCount)
// })
permission(router, store)
new Vue({
  el: '#app',
  router,
  graphql,
  // provide: apolloProvider.provide(),
  store,
  render: h => h(App)
})

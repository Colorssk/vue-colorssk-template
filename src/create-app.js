import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/sidebar.scss'
import '@/styles/index.scss' // global css
import axios from 'axios'
import { mergeRequest, http } from './api/http'
import api from './api/api'
import Message from './components/message'
// import apolloProvider from '@/plugins/vueapollo/ApolloClient'
import { permission } from './permission'
import Notification from './components/notification'
import Dialog from './components/dialog'
import '@/mock'
import createStore from './store'
import createRouter from './router'
Vue.use(Vuex)
Vue.use(VueRouter)
Vue.use(Message)
Vue.use(ElementUI)
Vue.use(Notification)
Vue.use(Dialog)
Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$api = api
Vue.prototype.$http = http
Vue.prototype.$mergeRequest = mergeRequest

export default () => {
  const store = createStore()
  const router = createRouter()
  permission(router, store)
  const app = new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
  })
  return { app, router, store }
}

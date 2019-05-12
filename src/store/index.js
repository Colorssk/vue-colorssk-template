import Vuex from 'vuex'
import app from './modules/app'
import getters from './getters'

const isDev = process.env.NODE_ENV === 'development'
// 重构之后的vuex适用于服务端渲染，防止内存溢出
export default () => {
  const store = new Vuex.Store({
    strict: isDev,
    modules: {
      app
    },
    getters
  })
  // 加入热加载功能
  if (module.hot) {
    module.hot.accept([
      // './state/state',
      // './mutations/mutations',
      // './actions/actions', // 这些模块之后要加上
      './getters',
      './modules/app'
    ], () => {
      // const newState = require('./state/state').default
      // const newMutations = require('./mutations/mutations').default
      // const newActions = require('./actions/actions').default
      const newGetters = require('./getters').default
      const newModulesApp = require('./modules/app').default

      store.hotUpdate({
        // state: newState,
        // mutations: newMutations,
        getters: newGetters,
        modules: {
          app: newModulesApp
        }
        // actions: newActions
      })
    })
  }
  return store
}
// const store = new Vuex.Store({
//   modules: {
//     app
//   },
//   getters
// })

// export default store

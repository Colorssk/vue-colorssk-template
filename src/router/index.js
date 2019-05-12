import Router from 'vue-router'
import { constantRouterMap } from './routes'
export default () => {
  return new Router({
    routes: constantRouterMap,
    mode: 'history',
    // base: '/base/',//http中就不需要手动添加
    scrollBehavior (to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return {x: 0, y: 0}
      }
    }
  })
// const asyncRouterMap = [
// ]
}

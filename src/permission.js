import NProgress from 'nprogress'
import { getCookie, sortMenus } from '@/utils/util'
import 'nprogress/nprogress.css'
import { http } from '@/api/http.js'
import api from '@/api/api.js'
// const whiteList = ['/', '/auth-redirect']// no redirect whitelist
export const permission = (router, store) => {
  router.beforeEach((to, from, next) => {
    // 获取权限，统一到/root,后端需要指定回调路由
    if (to.path === '/root') {
      next()
    } else {
      // 访问其他路由的时候
      if (store.getters.menuArr.length <= 0) {
        // 公司：线上拉取数据令牌，浏览器写入cookie，假设令牌是access_token
        // 表示现在没有加载到路由
        if (!getCookie('access_token')) {
          // 在获取menu之前还需要一个登陆接口
          http({ url: api.getAsyncMenu(), method: 'get', Mock: true })()().then(res => {
            if (Number(res.data.msgCode) === 100) {
              // 获取到动态路由
              var tempMenus = res.data.data
              tempMenus = sortMenus(tempMenus)
              if (tempMenus) store.dispatch('setMenu', tempMenus)// 写入根据权限给他开的menu
            }
          })
        } else {

        }
      }
      next()
    }
  })
  router.afterEach(() => {
    NProgress.done()
  })
}

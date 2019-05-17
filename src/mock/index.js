import Mock from 'mockjs'
import test from './menu'
// 修复在使用 MockJS 情况下，设置 withCredentials = true，且未被拦截的跨域请求丢失 Cookies 的问题
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send
Mock.XHR.prototype.send = function () {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false
  }
  this.proxy_send(...arguments)
}
// Mock.mock(/\/api\/menu\/list/, 'get', test.list)
Mock.mock('http://localhost:4000/api/getMenuInfo', 'get', test.list)
export default Mock

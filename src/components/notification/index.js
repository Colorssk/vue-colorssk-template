import Notification from './notification.vue'
import notify from './function'

export default (Vue) => {
  Vue.component(Notification.name, Notification)// 声明基础组件
  Vue.prototype.$notify = notify// 拓展过得组件，作为方法抛出
}

import Dialogcom from './dialog.vue'
import dialog from './function'

export default (Vue) => {
  Vue.component(Dialogcom.name, Dialogcom)
  Vue.prototype.$dialog = dialog
}

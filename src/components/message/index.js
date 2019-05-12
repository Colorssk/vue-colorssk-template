import Vue from 'vue'
import Message from './Message.vue'

Vue.prototype.$my_message = function (options) {
  if (options === undefined || options === null) {
    options = {
      content: ''
    }
  } else if (typeof options === 'string' || typeof options === 'number') {
    options = {
      content: options
    }
  }
  var Mymessage = Vue.extend(Message)
  var component = new Mymessage({
    data: options
  }).$mount()
  document.body.appendChild(component.$el)// 这个component完整了，可以直接.fn查找vue页面内的方法或者属性
  // console.log(component.type)// 这一步走得通说明上面的结论成立
  Vue.nextTick(() => {
    component.visible = true
  })
}

Message.install = function (Vue) {
  Vue.component(Message.name, Message)
}
export default Message

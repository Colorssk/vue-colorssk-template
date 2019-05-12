import Vue from 'vue'
import Component from './func-notification'

const NotificationConstructor = Vue.extend(Component)

const instances = []// 存储是生成了多少个组件
let seed = 1// 记录组件id的

const removeInstance = (instance) => { // 删除节点（组件）的方法
  if (!instance) return
  const len = instances.length
  const index = instances.findIndex(inst => instance.id === inst.id)

  instances.splice(index, 1)

  if (len <= 1) return// 下面是调整instance的高度
  const removeHeight = instance.vm.height// 相当于组件的this.height.注意可以直接访问
  for (let i = index; i < len - 1; i++) { // 删除组件的上面组件集合
    instances[i].verticalOffset =
      parseInt(instances[i].verticalOffset) - removeHeight - 16 // 每一个组件实例，都可以操作
  }
}

const notify = (options) => {
  if (Vue.prototype.$isServer) return // 如果是服务端操作就直接返回不做任何操作

  const {
    autoClose,
    ...rest
  } = options
  const instance = new NotificationConstructor({// new 出来组件之后把它插进dom里面
    propsData: {// new 组建的时候同时也可以覆盖
      ...rest
    },
    data: {
      autoClose: autoClose === undefined ? 3000 : autoClose
    }
  })

  const id = `notification_${seed++}` // 这样每个组件都有自己的id且不会重复
  instance.id = id
  instance.vm = instance.$mount()// 生成含$el的vue对象，div标签已经有了，但是还未真正插入dom当中去，
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true// 触发transition（this.visible = true）

  let verticalOffset = 0
  instances.forEach(item => {
    verticalOffset += item.$el.offsetHeight + 16
  })
  verticalOffset += 16
  instance.verticalOffset = verticalOffset// 组件特性，计算出应该出现的位置
  instances.push(instance)
  instance.vm.$on('closed', () => { // 既然是继承没那么获取组价实例之后就可以监听这个组件
    removeInstance(instance)// 这个是栈里面的数据删除
    document.body.removeChild(instance.vm.$el)// 删除节点（）
    instance.vm.$destroy()// 组价自动销毁，释放内存，这里删除的是对象，不会删除dom节点
  })
  instance.vm.$on('close', () => { // 手动删除
    instance.vm.visible = false// 隐藏，等待销毁
  })
  return instance.vm
}

export default notify// 抛出这个方法，传参可以获取这个组件

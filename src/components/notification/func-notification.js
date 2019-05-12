import Notification from './notification.vue'
// 这里写一些用于拓展的功能，继承了基础的notification组件
export default {
  extends: Notification, // 在此基础上就有了可拓展的功能
  computed: {// 申明之后，这里可以覆盖基础组件
    style () {
      return {
        position: 'fixed',
        right: '20px',
        bottom: `${this.verticalOffset}px`
      }
    }
  },
  mounted () {
    this.createTimer()
  },
  methods: {
    createTimer () {
      if (this.autoClose) {
        this.timer = setTimeout(() => {
          this.visible = false// 因为继承所以可以拿到这个属性
        }, this.autoClose)
      }
    },
    clearTimer () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
    },
    afterEnter () {
      this.height = this.$el.offsetHeight// 本组件直接this可以访问$el，记得看一下$el下面有什么常用的属性
    }
  },
  beforeDestory () {
    this.clearTimer()
  },
  data () {
    return {
      verticalOffset: 0,
      autoClose: 3000,
      height: 0,
      visible: false // 设置默认为false才能一开始显示的时候触发transition
    }
  }
}

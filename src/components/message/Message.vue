<template>
<transition name="fade">
    <div class="message" :style="{'background': background}" :class="messagePosition" v-show="visible">
      <i transiton="fade" class="icon" :class="'el-icon-'+type" ></i>
      <div transiton="fade" class="content" :style="{color: fontColor}">
        {{content}}
        <i v-if="hasClose" class="btn-close iconfont icon-close" @click="visible=false"></i>
      </div>
    </div>
</transition>

</template>

<script>
export default {
  name: 'MyMessage',
  data () {
    return {
      content: '',
      time: 3000,
      visible: false,
      type: 'info', // ‘success‘,‘info‘,‘error‘
      hasClose: false,
      position: 'center', // top,bottom
      backgroundColor: {'warning': '#FDF6EC', 'success': '#F0F9EB', 'error': '#FEF0F0', 'info': '#EDF2FC'},
      infoColor: {'success': '#7BCA54', 'warning': '#EBB565', 'info': '#AAADB5', 'error': '#FCCCCC'},
      mesPosition: {'top': 'top-position', 'center': 'center-position', 'bottom': 'bottom-position'}
    }
  },
  computed: {
    background: function (newvalue, oldvalue) {
      return this.backgroundColor[this.type]
    },
    fontColor: function (newvalue, oldvalue) {
      return this.infoColor[this.type]
    },
    messagePosition: function (newvalue, oldvalue) {
      return this.mesPosition[this.position]
    }
  },
  mounted () {
    this.visible = true
    this.close()
  },
  methods: {
    close () {
      window.setTimeout(() => {
        this.visible = false
      }, this.time)
    }
  }
}
</script>
<style scoped>

.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all .8s cubic-bezier(.33, 0.8, 0.99, .15);
}
.fade-enter, .fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateY(-15px);
  opacity: 0;
}
.message{
  position: absolute;
  z-index: 2004;
  padding-left: 40px;
  padding-right: 40px;
  left:45%;
  height: 40px;
  line-height:40px;
  text-align: center;
  font-size: 18px;
  border-radius: 0.3rem;
  background:  #FDF6EC;
  display: flex;
}
.message>>>.icon{
  position: relative;
  line-height: 40px;
  margin-right: 3px;
}
.center-position{
  top: 50%;
}
.top-position{
  top:5px;
}
.bottom-position{
  top: 90%;
}

</style>

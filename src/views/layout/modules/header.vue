<template>
   <div :class="cheader">
     <div id="bgColor" :class="cbgColor">
      <div id="image" @click="isShowMenu"></div>
     </div>
     <div class="loginout" @click="loginOut">
       退出
     </div>
   </div>
</template>

<script type="text/ecmascript-6">
import {changeStyle} from '@/utils/util'
export default {
  name: '',
  prop: {
  },
  data () {
    return {
      cheader: 'header',
      cbgColor: 'bgColor'
    }
  },
  watch: {
    '$store.getters.sliderShow': function (value) {
      changeStyle('image', value, 'backgroundPosition', ['0px 0px', '0px -30px'])
      this.cheader = value ? 'header' : 'header2'
      this.cbgColor = value ? 'bgColor2' : 'bgColor'
    }
  },
  mounted () {
    changeStyle('image', true, 'backgroundPosition', ['0px 0px', '0px -32px'])
  },
  methods: {
    loginOut () {
      this.$router.replace({path: '/root'})
    },
    isShowMenu () {
      this.$store.dispatch('changeSliderShow', !this.$store.getters.sliderShow)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
#image{
    width: 62px;
    height: 32px;
    top: 15px;
    left: 0;
    position: relative;
    background-image: url('../../../assets/switch04.png');
    background-repeat: no-repeat;
    background-position: 0px 0px; //-32px
     background-color:#545C64;
}
.bgColor{
    position: relative;
    width: calc(100% - 65px);
    height: 58px;
    background-color:#545C64;
}
.bgColor2{
  position: relative;
  height: 58px;
  background-color:#545C64;
  width: calc(100% - 65px);
}
.loginout{
  position: fixed;
  right: 20px;
  top: 10px;
  font-size: 20px;
  color:white;
}
.header{
  display: inline-block;
  width: calc(100% - 65px) !important;
}
.header2{
  display: inline-block;
  width: calc(100% - 180px) !important;
  height: 58px !important;
}
</style>

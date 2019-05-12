<template>
   <div class="">
      <el-scrollbar id="scrollbar"  wrap-class="scrollbar-wrapper" style="height: 100%; width:65px;">
        <el-menu
        :default-active="$route.path"
        router
        mode="vertical"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        collapse-transition
        active-text-color="#ffd04b"
        :collapse="isCollapse">
        <img v-show="isCollapse==false" class="logo-space" src="../../../assets/logo.png" />
        <div v-show="isCollapse==true" class="logo-space-use" ></div>
        <div v-for="(menu,index) in menuList" :key="index">
          <template v-if="menu.children.length>0">
            <el-submenu :index="`${index+1}`">
                <template slot="title">
                  <i :class="menu.icon"></i>
                  <span v-if="!isCollapse" slot="title" class="menu-info">{{menu.showname}}</span>
                </template>
                <div v-for="(child, inde) in menu.children" :key="inde+1">
                  <template v-if="child.children.length>0">
                    <el-submenu :index="`${index+1+'-'+inde+1}`">
                        <template slot="title">{{child.showname}}</template>
                          <div v-for="(cchild, ind) in child.children" :key="ind">
                            <el-menu-item :index="`/${cchild}/`">{{cchild}}</el-menu-item>
                          </div>
                    </el-submenu>
                  </template>
                  <template v-if="child.children.length==0">
                    <!-- <el-menu-item slot="title" :index="`${index+1+'-'+inde+1}`">{{child.name}}</el-menu-item> -->
                    <el-menu-item slot="title" :index="`/${child.name}/`">
                     {{child.showname}}
                    </el-menu-item>
                  </template>
                </div>
            </el-submenu>
          </template>
          <template v-if="menu.children.length==0">
              <el-menu-item :index="`/${menu.name}/`">
                <i class="el-icon-setting"></i>
                <span v-if="!isCollapse" slot="title" class="menu-info">{{menu.showname}}</span>
              </el-menu-item>
          </template>
        </div>
      </el-menu>
    </el-scrollbar>
   </div>
</template>

<script type="text/ecmascript-6">
import {changeStyle} from '@/utils/util'
export default {
  name: 'slidebar',
  watch: {
    '$store.getters.sliderShow': function (value) {
      changeStyle('scrollbar', value, 'width', ['65px', '180px'])
      this.isCollapse = value
    }
  },
  data () {
    return {
      isCollapse: true,
      menuList: [],
      onRoutes: 'HelloWorld'
    }
  },
  created () {
    this.$store.dispatch('changeSliderShow', this.isCollapse)
  },
  mounted () {
    changeStyle('scrollbar', true, 'width', ['65px', '180px'])
    this.menuList = this.$store.getters.menuArr
    var failData = [
      {
        children: [],
        icon: 'el-icon-menu',
        name: 'echarts',
        showname: '曲线图'
      },
      {
        children: [],
        icon: 'el-icon-menu',
        name: 'mix_echarts',
        showname: '复合曲线'
      }
    ]
    if (window.localStorage.getItem('flag') === 'false') {
      failData.map((item, index) => {
        if (item.name === 'permision') {
          failData.splice(index, 1)
        }
      })
    }
    var temparr = []
    failData.forEach(item => {
      if (JSON.parse(window.localStorage.getItem('rights')).some(it => it === item.name)) {
        temparr.push(item)
      }
    })
    failData = temparr
    if (window.localStorage.getItem('flag') === 'true') {
      failData = failData.concat([{
        children: [],
        icon: 'el-icon-menu',
        name: 'permision',
        showname: '权限'
      }])
    }
    this.menuList = failData.concat(this.menuList)
  },
  components: {},
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-submenu__title>>>.menu-info{
  font-size: 22px !important
}
</style>

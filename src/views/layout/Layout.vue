<template>
    <div class="app-wrapper">
        <!-- 组件下面需要判断 -->
        <slidebar id="sidebarContainer" class="sidebar-container" ></slidebar>
        <m-header id="head"></m-header>
        <div class="main-container" id="mainContainer" style="margin-left: 65px;margin-top: -58px;">
          <router-view :key="$route.fullPath"/>
        <!-- <navbar/>
        <tags-view/>
        <app-main/> -->
      </div>
  </div>
</template>

<script type="text/ecmascript-6">
import slidebar from './modules/slidebar'
import mHeader from './modules/header'
import {changeStyle} from '@/utils/util'
// import { constants } from 'fs'
export default {
  name: 'layout',
  data () {
    return {
      sidebarContainer: 'sideCollapse'
    }
  },
  watch: {
    '$store.getters.sliderShow': function (value) {
      changeStyle('head', value, 'margin-left', ['65px', '180px'])
      changeStyle('mainContainer', value, 'marginLeft', ['65px', '180px'])
      changeStyle('sidebarContainer', value, 'width', ['65px', '180px'])
    }
  },
  created () {
    // var path = require('path')// 能够改变文件目录，或者改变文件名字以达到改变文件名的作用
  },
  mounted () {
    changeStyle('head', true, 'margin-left', ['65px', '180px'])
    changeStyle('mainContainer', true, 'marginLeft', ['65px', '180px'])
    changeStyle('sidebarContainer', true, 'width', ['65px', '180px'])
  },
  methods: {
  },
  components: {
    slidebar,
    mHeader
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "src/styles/mixin.scss";
@import "src/styles/sidebar.scss";
.app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    background: #545c64;
  }
.main-container {
    min-height: calc(100%-58px);
    position: relative;
    transition: margin-left .28s;
    margin-left: 65px;
    top: 58px;
    position: relative;
}
</style>

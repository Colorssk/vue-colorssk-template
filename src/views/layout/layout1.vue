<template>
<div>
<el-menu
  :default-active="$route.path"
  router
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="/studentInfo/">新的导航</el-menu-item>
  <el-menu-item index="/test/">测试用路由</el-menu-item>
</el-menu>
<div class="main-container" id="mainContainer" style="margin-top: 0px;">
          <router-view :key="$route.fullPath"/>
        <!-- <navbar/>
        <tags-view/>
        <app-main/> -->
      </div>
</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped>
.main-container {
    min-height: calc(100%-58px);
    position: relative;
    top: 58px;
}
</style>

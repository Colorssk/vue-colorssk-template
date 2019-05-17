<template>
   <div class="root">
    <el-card class="root-card">
      <el-form ref="loginForm" :model="loginForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button @click="login">
        登录
      </el-button>
    </el-card>
      <span>by-Colorssk</span>
   </div>
</template>

<script type="text/ecmascript-6">
// import { getCookie } from '@/utils/util.js'
export default {
  name: '',
  data () {
    return {
      loginForm: {
        name: '',
        password: ''
      }
    }
  },
  mounted () {
    // if (!getCookie('access_token')) {
    // // 统一登陆地址
    //   this.$post(this.$api.getauthToken(), {}).then(response => {
    //     window.location.href = response.data.data
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }
  },
  methods: {
    login () {
      let isStudentOptions = [false, true]
      this.$graphql.request(`
          query{
            worker(name:"${this.loginForm.name}"){
              name,
              work_id,
              admin,
              rights,
              isStudent
            }
          }
        `).then(result => {
        if (result.worker[0] === undefined) {
          // 登录失败
          this.$message('登录失败')
        } else {
          if (Number(result.worker[0].work_id) !== Number(this.loginForm.password)) {
            this.$message('登录失败')
          } else {
            // this.$store.dispatch('setRights', result.worker[0].rights)
            window.localStorage.setItem('rights', JSON.stringify(result.worker[0].rights))
            if (!result.worker[0].admin) {
              // 无权限
              // this.$store.dispatch('setFlag', false)
              window.localStorage.setItem('flag', false)
              // this.$router.options.routes.map((item, index) => {
              //   if (item.component.path === '/permision') {
              //     this.$router.options.routes.splice(index, 1)
              //   }
              // })
              // 如果不是管理员并且是教师
              // 添加教师的动态路由(添加标志位)
              if (isStudentOptions[result.worker[0].isStudent]) {
                this.$router.push({path: 'studentInfo', query: {isStudent: isStudentOptions[result.worker[0].isStudent], flag: false, name: result.worker[0].name}})
              } else {
                this.$router.push({path: 'hello', query: {isStudent: isStudentOptions[result.worker[0].isStudent], flag: false}})
              }
            } else {
              window.localStorage.setItem('flag', true)
              // this.$store.dispatch('setFlag', true)
              this.$router.push({path: 'permision', query: {isStudent: false, flag: true}})
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.root{
  width: 100%;
  height: 100%100%;
  font-size: 50px;
  color: blueviolet;
}
.root-card{
  position: relative;
  width: 45%;
  height: 30%;
  margin-left: 27.5%;
  margin-top: 5%;
}
</style>

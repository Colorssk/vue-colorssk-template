<template>
    <el-card class="box-card">
        <el-button @click="show = !show">学生个人详情</el-button>
        <transition name="el-zoom-in-center">
            <div v-show="show" class="transition-box">
                <div>
                    姓名：  {{info.name}}
                </div>
                <div>
                    学号：    {{info.work_id}}
                </div>
                <div>
                    绩点：    {{info.point}}
                </div>
                <div>
                    权限：    {{info.rights}}
                </div>
            </div>
        </transition>
    </el-card>
</template>
<script>
export default {
  data () {
    return {
      show: false,
      info: {
        name: '',
        work_id: '',
        point: '',
        rights: []
      },
      name: null
    }
  },
  mounted () {
    if (this.$route.query.name) {
      this.name = this.$route.query.name
      window.localStorage.setItem('name', this.$route.query.name)
    } else {
      this.name = window.localStorage.getItem('name')
    }
    this.$graphql.request(`
          query{
            worker(name:"${this.name}"){
              name,
              work_id,
              point,
              rights,
            }
          }
        `).then(result => {
      this.info = result.worker[0]
    })
  }
}
</script>
<style scoped>
.box-card{
    position: relative;
    top: 0px !important;
}
</style>

<template>
    <el-card class="box-card">
        <div slot="header" class="students">
            <span>旗下所有学生</span>
            <div  class="search">
                <el-select v-model="searchValue" filterable clearable placeholder="检索">
                    <el-option
                    v-for="item in students"
                    :key="item"
                    :label="item"
                    :value="item">
                    </el-option>
                </el-select>
            </div>
        </div>
         <el-table
            :data="studentsData"
            stripe
            style="width: 100%">
            <el-table-column
            prop="name"
            label="姓名"
            width="180">
            </el-table-column>
            <el-table-column
            prop="work_id"
            label="学号"
            width="180">
            </el-table-column>
            <el-table-column
            prop="point"
            label="绩点">
            </el-table-column>
            <el-table-column
            label="操作">
            <template slot-scope="scope">
                <el-button @click="handleEdit(scope.$index, scope.row)">展示</el-button>
            </template>
            </el-table-column>
        </el-table>
        <el-dialog
            :title="Info.title"
            :visible.sync="dialogInfoVisible"
            width="30%"
            >
            <div>学生姓名： {{Info.name}}</div>
            <div>学号： {{Info.work_id}}</div>
            <div>绩点:  {{Info.point}}</div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogInfoVisible = false">确 定</el-button>
            </span>
            </el-dialog>
    </el-card>
</template>

<script>
export default {
  data () {
    return {
      searchValue: '',
      studentsData: [],
      students: [],
      cacheTableData: [],
      title: '',
      dialogInfoVisible: false,
      Info: {
        name: '',
        work_id: '',
        point: ''
      }
    }
  },
  watch: {
    searchValue: {

      handler (newName, oldName) {
        if (newName !== '') {
          this.cacheTableData.forEach(item => {
            if (item.name === newName) {
              this.studentsData = [item]
            }
          })
        } else {
          this.studentsData = this.cacheTableData
        }
      },
      immediate: true
    }
  },
  mounted () {
    this.$graphql.request(`
          query{
            workers{
              name,
              work_id,
              admin,
              isStudent,
              point
            }
          }
        `).then(result => {
      let tempArr = result.workers
      let searchArr = []
      let resultArr = []
      tempArr.map((item, index) => {
        if (!item.admin && item.isStudent === 1) {
          resultArr.push({name: `${item.name}`, work_id: item.work_id, point: item.point})
          searchArr.push(item.name)
        }
      })
      this.studentsData = resultArr
      this.cacheTableData = resultArr
      this.students = searchArr
    })
  },
  methods: {
    handleEdit (index, row) {
      let title = '第' + `${index + 1}` + '条数据'

      this.dialogInfoVisible = true
      this.Info = Object.assign({title}, row)
      console.log(this.Info)
    }
  }
}
</script>

<style scoped>
.search{
    float: right;
}
.students{
    margin-right: 60px;
    font-size: 32px;
}
</style>

<template>
  <div class="hello">
    <!-- <canvas id="canvas"> -->

    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>最高权限</span>
        <el-button style="float: right; padding: 3px 0" type="text" @click="dialogTeacherVisible=true">添加教师</el-button>
      </div>
      <div class="main-container">
        <template>
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
              label="Name"
              prop="name">
            </el-table-column>
            <el-table-column
              label="Work_id"
              prop="work_id">
            </el-table-column>
            <el-table-column
              label="Rights"
              prop="rights">
            </el-table-column>
            <el-table-column
              label="Job"
              prop="job">
            </el-table-column>
            <el-table-column
              label="职位"
              prop="isStudent">
            </el-table-column>
            <el-table-column
              align="right">
              <template slot="header" >
                <el-input
                  v-model="search"
                  size="mini"
                  placeholder="输入关键字搜索"/>
              </template>
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
              </template>
            </el-table-column>
          </el-table>
        </template>

      </div>
    </el-card>
          <el-dialog title="权限控制" :visible.sync="dialogFormVisible">
          <el-form :model="form">
              <el-form-item label="用户权限">
                <el-select v-model="form.right" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="confirm">确 定</el-button>
            </div>
          </el-dialog>
          <el-dialog title="添加教师" :visible.sync="dialogTeacherVisible">
          <el-form :rules="rules" :model="formTeacher" label-position="left" label-width="80px">
              <el-form-item label="名字" prop="name">
                <el-input
                  prefix-icon="el-icon-search"
                  placeholder="请输入姓名"
                  v-model="formTeacher.name"
                  clearable>
                </el-input>
              </el-form-item>
              <el-form-item label="工号" prop="work_id">
                <el-input
                  placeholder="请输入工号"
                  v-model="formTeacher.work_id"
                  clearable>
                </el-input>
              </el-form-item>
              <el-form-item label="岗位" align="left" prop="job">
                <el-select v-model="formTeacher.job" multiple placeholder="请选择">
                  <el-option
                    v-for="item in jobs"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="用户权限" align="left">
                <el-select v-model="formTeacher.right" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item"
                    :label="item"
                    :value="item">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="标识" align="left">
                 <el-radio-group v-model="formTeacher.radio">
                  <el-radio :label="0">教师</el-radio>
                  <el-radio :label="1">学生</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogTeacherVisible = false">取 消</el-button>
              <el-button type="primary" @click="addConfirm">确 定</el-button>
            </div>
          </el-dialog>
          <!-- </canvas> -->
  </div>
</template>

<script>
// import gql from 'graphql-tag'
export default {
  name: 'permision',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      cutwidth: 65,
      tableData: [],
      search: '',
      dialogFormVisible: false,
      dialogTeacherVisible: false,
      options: [
        'echarts',
        'mix_echarts'
      ],
      form: {
        right: []
      },
      formTeacher: {
        right: [],
        radio: 0,
        name: '',
        work_id: null,
        job: []
      },
      editName: '',
      radio: 0,
      radioArr: ['教师', '学生'],
      jobs: ['数学', '英语', '语文', '物理', '化学', '政治', '历史'],
      rules: {
        name: [
          {required: true, message: '请输入姓名', trigger: 'blur'}
        ],
        work_id: [
          {required: true, message: '请输入工号', trigger: 'blur'}
        ],
        job: [
          {require: true, message: '请输入岗位', trigger: 'blur'}
        ]
      }
    }
  },
  watch: {
    '$store.getters.sliderShow': function (value) {
      this.cutwidth = value ? 65 : 180
    }
  },
  mounted () {
    this.tableData = []
    this.$graphql.request(`
          query{
            workers{
              name,
              work_id,
              rights,
              job,
              isStudent
            }
          }
        `).then(result => {
      this.tableData = this.workersFilter(result.workers)
    })
    // this.cavasAni()
  },
  methods: {
    graphqlArrTrans (arr) {
      var tranarr = ''
      arr.forEach((item, index) => {
        if (index !== arr.length) {
          tranarr += '"' + item + '",'
        } else {
          tranarr += '"' + item + '"'
        }
      })
      return tranarr
    },
    addConfirm () {
      this.$graphql.request(`
        mutation{
            WorkerCreate(data:{
              name: "${this.formTeacher.name}",
              work_id: ${this.formTeacher.work_id},
              job:[${this.graphqlArrTrans(this.formTeacher.job)}],
              rights:[${this.graphqlArrTrans(this.formTeacher.right)}],
              admin: false,
              isStudent: ${this.formTeacher.radio}
            }){
                name,
                work_id,
                isStudent
              }
                    }
        `).then(result => {
        console.log(result)
      })
      this.dialogTeacherVisible = false
    },
    workersFilter (arr) {
      arr.map(item => {
        item.isStudent = this.radioArr[item.isStudent]
      })
      return arr
    },
    confirm () {
      // var tranarr = ''
      // this.form.right.forEach((item, index) => {
      //   if (index !== this.form.right.length) {
      //     tranarr += '"' + item + '",'
      //   } else {
      //     tranarr += '"' + item + '"'
      //   }
      // })
      var tranarr = this.graphqlArrTrans(this.form.right)
      this.$graphql.request(`
       mutation{
            WorkerUpdate(data:{
              pre_name: "${this.editName}",
              rights: [${tranarr}]
            })
          }
        `).then(result => {
        if (result.WorkerUpdate === true) {
          window.localStorage.setItem('rights', JSON.stringify(this.form.right))
          this.$forceUpdate()
          this.$graphql.request(`
          query{
            workers{
              name,
              work_id,
              rights,
              job
            }
          }
        `).then(result => {
            this.tableData = result.workers
          })
        }
        console.log(result)
      })
      this.dialogFormVisible = false
      // 修改权限
    },

    handleEdit (index, row) {
      this.editName = row.name
      this.dialogFormVisible = true
      this.form.right = row.rights
      console.log(index, row)
    },
    handleDelete (index, row) {
      console.log(index, row)
    },
    cavasAni () {
      var canvas = document.getElementById('canvas')
      var ctx = canvas.getContext('2d')

      var centerX, centerY
      var partNum = 2000

      var mousedown = false
      var X, Y
      /* =========================================================================== */

      /* =========================================================================== */
      var P = []
      var Part = function (x, y, vx, vy, r, red, green, blue, alpha, col) {
        this.x = x
        this.y = y
        this.vx = vx
        this.vy = vy
        this.r = r
        this.red = red
        this.green = green
        this.blue = blue
        this.alpha = alpha
        this.col = col
      }

      function rand (min, max) {
        return Math.random() * (max - min) + min
      }

      // function dist (dx, dy) {
      //   return Math.sqrt(dx * dx + dy * dy)
      // }

      function size () {
        canvas.width = window.innerWidth
        canvas.height = window.innerHeight

        centerX = (canvas.width) / 2
        centerY = (canvas.height) / 2
      }
      size()
      X = centerX
      Y = centerY

      function init () {
        var x, y, vx, vy, r, red, green, blue, alpha, col
        for (var i = 0; i < partNum; i++) {
          x = rand(0, canvas.width)
          y = rand(0, canvas.height)
          vx = rand(-1, 1)
          vy = rand(-1, 1)
          r = rand(1, 3)
          red = Math.round(rand(150, 200))
          green = Math.round(rand(100, 255))
          blue = Math.round(rand(180, 255))
          alpha = 1
          col = 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')'

          P.push(new Part(x, y, vx, vy, r, red, green, blue, alpha, col))
        }
      }

      function bg () {
        ctx.fillStyle = 'rgba(25,25,30,1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      function bounce (b) {
        if (b.x < b.r) {
          b.x = b.r
          b.vx *= -1
        }
        if (b.x > canvas.width - b.r) {
          b.x = canvas.width - b.r
          b.vx *= -1
        }

        if (b.y - b.r < 0) {
          b.y = b.r
          b.vy *= -1
        }
        if (b.y > canvas.height - b.r) {
          b.y = canvas.height - b.r
          b.vy *= -1
        }
      }

      function attract (p) {
        var dx = (p.x - X)
        var dy = (p.y - Y)
        var dist = Math.sqrt(dx * dx + dy * dy)
        var angle = Math.atan2(dy, dx)

        if (dist > 10 && dist < 300) {
          if (!mousedown) {
            p.vx -= (20 / (p.r * dist)) * Math.cos(angle)
            p.vy -= (20 / (p.r * dist)) * Math.sin(angle)
          } else if (mousedown) {
            p.vx += (250 / (p.r * dist)) * Math.cos(angle)
            p.vy += (250 / (p.r * dist)) * Math.sin(angle)
          }
        }
      }

      function draw () {
        var p
        for (var i = 0; i < P.length; i++) {
          p = P[i]

          if (mouseover) attract(p)
          bounce(p)

          p.x += p.vx
          p.y += p.vy

          p.vx *= 0.975
          p.vy *= 0.975

          ctx.fillStyle = p.col
          ctx.fillRect(p.x, p.y, p.r, p.r)
          // ctx.beginPath();
          // ctx.fillStyle = p.col;
          // ctx.arc(p.x, p.y, p.r, 0, 2 * pi);
          // ctx.fill();
        }
        ctx.strokeStyle = (!mousedown) ? 'rgba(255,255,255,1)' : 'rgba(255,0,0,1)'

        ctx.beginPath()
        ctx.moveTo(X, Y - 10)
        ctx.lineTo(X, Y + 10)
        ctx.moveTo(X - 10, Y)
        ctx.lineTo(X + 10, Y)
        ctx.stroke()
      }

      function loop () {
        bg()
        draw()

        window.requestAnimationFrame(loop)
      }

      window.onresize = size
      window.onmousemove = (e) => { // 这里鼠标移动解决bug指针不匹配问题
        console.log(this.cutwidth)
        X = e.clientX - Number(this.cutwidth)
        Y = e.clientY - 58
      }

      window.onmousedown = function () {
        mousedown = true
      }

      window.onmouseup = function () {
        mousedown = false
      }

      var mouseover = false

      window.onmouseover = function () {
        mouseover = true
      }

      window.onmouseout = function () {
        mouseover = false
      }

      init()
      loop()
    }
  }

//     --------------------
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
  background: white;
}
/* .main-container{
  width:100%;
  height:100%;

} */
/* .main-container{
  position: absolute;
  z-index: 1;
} */
h1, h2 {
  font-weight: normal;
}
/* * {
    margin: 0;
    padding: 0;
} */
/* html {
    overflow: hidden;
} */
/* canvas {
    cursor: default;
    margin-top: -58px;
    position: relative;
    z-index: -1;
} */
</style>

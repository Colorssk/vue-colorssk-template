<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
// import util from 'utils/util.js'
import { setTimeout } from 'timers'
// import { getCookie } from '@/utils/util'
export default {
  name: 'App',
  data () {
    return {
      code: '1'
    }
  },
  created () {
    // document.cookie = 'access_token=1444c7c466d8ab5c2978ad07afdcecd4'
    // document.cookie = 'user_info=%7b%22username%22%3a%22%e6%9c%b1%e7%9b%8a%e4%bf%8a%22%2c%22department%22%3a%22%e5%89%8d%e7%ab%af%e6%b8%a0%e9%81%93%e5%b0%8f%e7%bb%84%22%2c%22userId%22%3a%2216960%22%2c%22workId%22%3a%2213171%22%2c%22newWorkId%22%3a%221013171%22%2c%22departmentId%22%3a%2211305%22%2c%22gender%22%3a%221%22%2c%22email%22%3a%22zyj13171%40ly.com%22%2c%22deptLevelId%22%3a%227321%2c3791%2c4993%2c3907%2c3796%2c11305%22%2c%22deptLevelName%22%3a%22%e5%90%8c%e7%a8%8b%e8%89%ba%e9%be%99%2c%e4%ba%a4%e9%80%9a%e4%ba%8b%e4%b8%9a%e7%be%a4%2c%e7%81%ab%e8%bd%a6%e7%a5%a8%e4%ba%8b%e4%b8%9a%e9%83%a8%2c%e4%ba%a4%e9%80%9a%e7%b3%bb%e7%bb%9f%e7%a0%94%e5%8f%91%e9%83%a8%2c%e4%ba%a4%e9%80%9a%e7%a0%94%e5%8f%91%e5%89%8d%e7%ab%af%e7%a0%94%e5%8f%91%e7%bb%84%2c%e5%89%8d%e7%ab%af%e6%b8%a0%e9%81%93%e5%b0%8f%e7%bb%84%22%2c%22phoneNumber%22%3a%22%22%2c%22MTID%22%3a%220583d%22%2c%22CTIDS%22%3a%220583d%22%2c%22GID%22%3a%22GIDRBCNH8%22%2c%22mobile%22%3a%2213625280486%22%2c%22isVirtual%22%3a0%2c%22TID%22%3a%220583d%22%7d'
    // console.log(JSON.parse(decodeURIComponent(util.getCookie('user_info'))))
    // util.setCookie('test', '哈哈', '259200')
    // console.log(util.getCookie('test'))
    // console.log(document.cookie)
  },
  mounted () {
    console.log(window.Vue)
    // if (!getCookie('access_token')) {
    // // 统一登陆地址
    //   this.$post(this.$api.getauthToken(), {}).then(response => {
    //     window.location.href = response.data.data
    //   }).catch(error => {
    //     console.log(error)
    //   })
    // }
    // this.$notify({
    //   content: 'test $notify',
    //   btn: 'close',
    //   autoClose: 3000
    // })
    setTimeout(() => {
      // this.$my_message({
      //   content: 'chenggong',
      //   time: 3000000,
      //   type: 'success',
      //   hasClose: true,
      //   position: 'bottom'
      // })
      // this.$dialog({
      //   title: 'test dialog',
      //   width: '50%',
      //   data: [
      //     {type: 'input', label: '姓', placeholder: '请输入姓', id: '1', required: true},
      //     {type: 'select', placeholder: '请选择', id: '1', required: false, options: [{label: '男', value: '1'}, {label: '女', value: '2'}]},
      //     {type: 'input', label: '名', placeholder: '请输入名', id: '2'},
      //     {type: 'radio', label: '选择', placeholder: '请选择', id: '1', options: ['male', 'female']},
      //     {type: 'upload', id: 1, label: '文件上传'}
      //   ]
      // }, (data) => { console.log(data) })
      // this.$dialog({
      //   title: 'test dialog',
      //   width: '50%',
      //   data: [
      //     {type: 'input', label: '姓', placeholder: '请输入姓', id: '1', required: true},
      //     {type: 'select', placeholder: '请选择', id: '1', required: false, options: [{label: '男', value: '1'}, {label: '女', value: '2'}]},
      //     {type: 'input', label: '名', placeholder: '请输入名', id: '2'},
      //     {type: 'radio', label: '选择', placeholder: '请选择', id: '1', options: ['male', 'female']},
      //     {type: 'upload', id: 1, label: '文件上传'}
      //   ]
      // }, (data) => { console.log(data) })
    }, 500)

    // this.$graphql.request(`
    //       query{
    //         Jobs{
    //           _id,
    //           job_name
    //         }
    //       }
    //     `).then(result => {
    //   console.log('分界线')
    //   console.log(result)
    // })
  }

}
</script>

<style >
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

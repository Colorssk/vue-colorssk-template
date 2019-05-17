/*eslint-disable*/
import axios from 'axios'
import { getCookie } from '@/utils/util.js'
const qs = require('qs')
// import Vue from 'vue'
// url, method = 'get', params, encodeFlag = false, proxy = {}, auth = {}, stopfun = () => false 以上为旧参数
export default function request () {
  let url, method
  if (this.length < 2) return Promise.reject(new Error('参数异常,请求地址和参数请务必填入'))
  // 必传参数
  if (Object.prototype.hasOwnProperty.call(this, 'url') && Object.prototype.hasOwnProperty.call(this, 'method')){
  // if (process.env.NODE_ENV === 'development') {
  //   url = `${this.$stroe.getters}` + url // 具体配什么前缀有后台确定，这里可以考虑扔到页面然后
    if (Object.prototype.hasOwnProperty.call(this,'Mock')&&this.Mock == true){
      url = this.url
    } else {
      url = process.env.baseUrl + this.url
    }
  // }
  // var CancelToken = axios.CancelToken
  // var cancel
  var instance = axios.create()
  instance.defaults.url = url.trim()
  instance.defaults.method = this.method.toLowerCase()
  instance.defaults.timeout = 25000
  instance.defaults.withCredentials = true
  instance.defaults.validateStatus = status => {
      return 200<= status < 400; // 状态码在此区间才会resolve
  }
    if (Object.prototype.hasOwnProperty.call(this,'auth')) { instance.defaults.auth = this.auth }
    if (Object.prototype.hasOwnProperty.call(this, 'proxy')) { instance.defaults.proxy = this.proxy }
  // instance.defaults.cancelToken = new CancelToken(function executor(c) {
  //   cancel = c
  // })
  // if (stopfun) { cancel() } // 手动提交参数决定是否终止
  
  
  
  if (method === 'get') {
    instance.defaults.params = this.params || {}
    // return new Promise((resolve, reject) => {
      
      // instance.defaults.headers.common['Authorization'] = AUTH_TOKEN // 默认配置
      // instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
      // proxy: {
      //   host: '127.0.0.1',
      //     port: 9000,
      //       auth: : {
      //     username: 'mikeymike',
      //       password: 'rapunz3l'
      //   }
      // auth: {   //如果有登陆页面时候使用Authorization
      //   username: 'janedoe',
      //     password: 's00pers3cret'
      // }
      // })
      // stopfun是一个方法返回取消与否的条件
      
      //请求前调用拦截器
      // 拦截器处理并终止
      if(process.env.NODE_ENV == 'production'){
          instance.interceptors.request.use(config => {
          if(!config.params){
            config.params = {}
          } else {
            // 传过去的参数需要编码
            if(encodeFlag){
              let encodePara = encodeURI(qs.stringify(config.params))
              let tempUrl = config.url 
              tempUrl = tempUrl + '?' + encodePara
              config.url = tempUrl.trim() 
              config.params = {}
            }
          }
        })
        // 添加响应拦截器
        instance.interceptors.response.use( response => {
          return response.data
        }, function (error) {
          return Promise.reject(error)
        })
      }
   
  } else if (method === 'post') {
    if (process.env.NODE_ENV == 'production') {
      instance.interceptors.request.use(config => {
        // 在post请求中如果没有令牌(后端拿过来的)那么就直接取消发送的接口
        // if (getCookie('access_token')) {
        //   cancel()
        // }
        config.data = params//需要加上语句确保语义转化*******************************
        return config
      })
      instance.interceptors.response.use(response => {
        return response.data
      }, function (error) {
        return Promise.reject(error)
      })
      }
    
    }
   return instance
  }
}
export const mergeRequest = function (requestArr,callback) {
  axios.all(requestArr)
    .then(axios.spread(callback()))
}
// export const get = (url, params, encodeFlag, stopfun, proxy, auth) => request(url,'get', params, encodeFlag, proxy, auth, stopfun )
export const http = (obj) => request.bind(obj)
// export const post = (url, params, encodeFlag, stopfun, proxy, auth) => request(url, 'post', params, encodeFlag, proxy , auth , stopfun )

//调用request this.$get(this.$api...(),{},false,()=> a>0 ,......).then(res=>{}) // 这里方法取消
//调用merge  let merge1 = this.$get(this.$api...(),{},false,()=> a>0 ,......)
            // let merge2 = this.$get(this.$api...(), {}, false, () => a > 0, ......)
            // let arr = [merge1,merge2]
            // this.$mergeRequest(arr,(res1,res2)=>{})
// 文档里面需要提供一下请求参数
// 本地Mock环境填写的数据调用方式：this.$get('',{})({url: ''}).then(res=>{})
//重写之后调用方式：http({ url: 'http://localhost:4000/getMenuInfo', method: 'get', Mock: true })(//这里是执行request,无需传参因为方法体内未接受)(//这里是执行insatnce对象ps：axios.create()之后返回的是个方法需要执行).then(res => {
// 因为axios默认返回是会包一层data的所以获取后端数据的时候默认res.data})
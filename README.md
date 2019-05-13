# vuemultiplex

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


graphql请求方式：
this.$apollo.query({
query: q_user,
variables: {
id: 1,
},
}).then(res => {
console.log(res)
}).catch(err => {
console.log(err)
})
统一登陆，另做，permission.js另起

后端获得登陆权限后：可以访问公共路由
1：然后传进来动态路由，动态路由获取接口参数携带cookie（access_token）：获取动态路由然后匹配本地动态动态路由名字然后加载进入
2：或者传进来的动态路由如果有roles那么就进入判断=》leader进入以后可以访问特定的权限路由，在权限路由里面：在列表里面显示所有用户权限，管理功能弹窗上添加提交用户权限路由数据(分装起来)：弹窗添加和管理是一套分装的插件

3: 上面要有更改：实际时传入menu数组表示左侧导航栏权限，根据这个导入路由


1.addroute已经成功了，所以可以跳转到新增的路由页。
2.渲染menu不应该遍历路由去生成，因为addroutes后，路由虽然增加了，但路由不是响应数据（未观察，且未订阅），是不会对你的视图触发变化的。

建议解决方案：()
使用vuex，对路由信息进行状态管理，把初始的路由数据存到store里，menu依靠store进行渲染及更新，addroutes后再把新增路由push进store存储的路由数组中，即可以触发menu更新

beforeRouter分装起来，计划做预加载，实行中

axios请求分装： 未完成语义化判断(安全性), 请求测试完成，拦截和合并请求尚未测试
（类似immutable.js的理念去处理）

message小插件分装

缓存方面待定，预计用indexdb，缓存主要后端需要配置一下，前端主要工作是查看请求，然后实时更新本地localStorage

service-worker做离线功能，并作为优化方案

指令池： 具体哪些自定义指令待定

mock-data：分装本地json库，完成

模块化vuex存储：完成

可换式边框： 完成（待测定）

导入menu JSON格式：看mockjs中的数据，数据获取和处理已经完成，后期有些第三方组件库要放在const menu（vuex中读取）: 之所以直接获取后端的menu():以此做权限控制是因为如果前端admin控制还是要把结果传给后端，还不如直接交给后端来判断权限

后期尽量使用lodash工具包,调用常规数据操作的方法的时候避免this指针问题


vuex重构完成：适应服务端渲染：遇到的问题：store工厂方法加工之后js文件获取不到对象，如果像重构之前直接拉取会重复申明store对象，造成内存不必要的浪费（已解决）

抽离式监听(取消)没必要

mode：history模式，现在问题： 加入要用需要重构构建多页面，解决方向，摒弃多页面，
单页面额外的seo优化

缓存机制：页面数据收入缓存，后端的cache-control作为缓存有效期，到期直接请求，未到期，不去拿，有变化才去拿（主要后端）

全局，在路由上，挂载方法，当路由切换的时候清除settimeout，这里要做的解决内存泄露，方案待考订

构建防抖指令，优化请求，节省开支


较复杂的逻辑抽出一个js文件运用webaeesmbly优化

第三方组件弹窗基本实现：调用格式：
    this.$dialog({
      title: 'test dialog',
      width: '50%',
      data: [
        {type: 'input', label: '姓', placeholder: '请输入姓', id: '1', required: true},
        {type: 'select', placeholder: '请选择', id: '1', required: false, options: [{label: '男', value: '1'}, {label: '女', value: '2'}]},
        {type: 'input', label: '名', placeholder: '请输入名', id: '2'}
      ]
    }, (data) => { console.log(data) })

    // 必须传参数type,id,和data(小组件所需要的参数)，方法是接口 ，data就是表单数据
radio支持：['1','2','3']或者[1,2,3]
或者[{label:'',value: ''},{label:'',value:''}]

预发和正式域名的调用：Vue.prototype.$config.nowurl



mongose的api:
https://mongoosejs.com/docs/api.html#schema_Schema
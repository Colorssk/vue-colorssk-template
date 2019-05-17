let url
export default {
  // 获取同意权限接口
  getauthToken () {
    url = 'oauth/applyfortoken'
    return url
  },
  getAsyncMenu () {
    url = 'http://localhost:4000/api/getMenuInfo'
    return url
  }
}

// //统一登录权限接口
// // debugger
// this.axios.post('universe/oauth/applyfortoken')
//   .then(function (response) {
//     console.log('没有cookie')
//     console.log(response)
//     window.location.href = response.data.data
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

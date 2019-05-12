export const changeStyle = (id, flag, style, value) => {
  let did = '#' + id
  let element = document.querySelector(did)
  if (flag) {
    element.style[style] = value[0]
  } else {
    element.style[style] = value[1]
  }
}
export const getCookie = name => {
  var arr
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  arr = document.cookie.match(reg)
  if (arr) { return unescape(arr[2]) } else { return null }
}
export const setCookie = (name, value) => { // 需要设置过期时间

}
// 还要兼容公司后端直接根据登陆权限传动态路由的情况
export const judgePermission = (roles, permissionRoles) => {
  if (roles.indexOf('leader') > 0) return true
  if (!permissionRoles) return true // 无需权限的页面
  return roles.some(role => permissionRoles.indexOf(role) > 0)
}
//
export const filterMenus = menus => {
  if (Array.isArray(menus)) {
    return sortMenus(menus)
  } else {
    return false
  }
}
// 这里不能根据对象(作用域)分离出去的原因是对象之间有嵌套
export const sortMenus = (menuarr) => {
  var tempmenu = menuarr
  tempmenu = tempmenu.sort(sortByKey('name'))
  tempmenu.forEach(item => {
    if (item.hasOwnProperty('children')) {
      item.children = item.children.sort(sortByKey('name'))
      item.children.forEach(cchildren => {
        if (cchildren.hasOwnProperty('children')) {
          cchildren.children = cchildren.children.sort((a, b) => a.localeCompare(b))
        }
      })
    }
  })
  return tempmenu
}
function sortByKey (key) {
  return function (a, b) {
    var value1 = a[key]
    var value2 = b[key]
    return value1.localeCompare(value2)
  }

  // return function (a, b) {
  //   var value1 = a[key]
  //   var value2 = b[key]
  //   return value1 - value2
  // }
}

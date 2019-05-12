// 主要区分线上地址和预发地址，主需要在这里更改
import _ from 'lodash'
const urlparse = require('url')
class url {
  constructor (baseurl, preurl, officialurl) { // 这里的地址不是请求用的，比如用作window.location.href
    this.baseurl = baseurl // 用来区分预发和正式的
    this.preurl = preurl
    this.officialurl = officialurl
    if (urlparse.parse(location.href, true).hostname !== 'localhost' && urlparse.parse(location.href, true).hostname !== '127.0.0.1') {
      if (_.indexOf(urlparse.parse(location.href, true).hostname.split('.'), baseurl) > -1) {
        // 预发环境
        this.nowurl = this.preurl
      } else {
        this.nowurl = this.officialurl
      }
    } else {
      // 本地环境,默认是预发地址
      this.nowurl = this.preurl
    }
  }
}
export default url

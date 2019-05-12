import Mock from 'mockjs'
var list = {}
var count = 1
for (var i = 0; i < count; i++) {
  list = (Mock.mock({
    'data|1-30': [
      {
        'name': '@title(1)',
        'icon': /el-icon-(document|menu|share|setting|date|printer|message|goodsmore)/,
        'showname': '@title(1)',
        'children|1-10': [
          {
            'name': '@title(1)',
            'children|0-3': [
              '@title(1)'
            ]
          }
        ]
      }
    ],
    'msgCode': 100
  }))
}
export default {
  list
}

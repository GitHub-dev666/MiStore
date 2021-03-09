/**使用mockJS模拟数据接口 */
import Mock from 'mockjs'
// 创建模拟数据，接口地址也可用正则来匹配
Mock.mock('/api/user/login', {
  status: 0,
  'dataList|3-10': [{
    id: '@natural( 10001, 11000 )',
    name: '@cname',
    age: '@natural( 20, 65 )',
    date: '@date( yyyy-MM-dd )',
    addr: '@county(true)',
    script: '@cparagraph( 1, 3 )'
  }]
})

/** 使用mockJS模拟数据接口 */
import Mock from 'mockjs'
// 创建模拟数据，接口地址也可用正则来匹配
Mock.mock('/api/user', {
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
Mock.mock('/api/user/login', {
  status: 200,
  userList: [
    {
      id: '1001',
      name: 'jack',
      password: '123456',
      age: '@natural( 20, 65 )'
    },
    {
      id: '1002',
      name: 'rose',
      password: '123456',
      age: '@natural( 20, 65 )'
    }
  ]
})

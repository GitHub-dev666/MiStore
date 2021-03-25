import axios from 'axios'
export default {
  login (context, fn) {
    if (!context.state.password || !context.state.username) {
      alert('请输入用户名/密码')
    } else {
      axios.post('/user/login', {
        username: context.state.username,
        password: context.state.password
      }).then((res) => {
        console.log('success login：' + res.username)
        context.commit('user', res)
        fn()
      }).catch((err) => {
        console.log('错误信息：' + err.msg || err)
      })
    }
  },
  getUserInfo (context) {
    axios.get('/user').then((res) => {
      console.log('getUserInfo：' + res.username)
      context.commit('userInfo', res)
    })
  }
}

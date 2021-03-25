export default {
  nameChang (state, value) {
    state.username = value
  },
  passwordChang (state, value) {
    state.password = value
  },
  user (state, res) {
    state.user = res
    console.log(state.user)
  },
  userInfo (state, res) {
    state.user = res
    state.username = res.username
  }
}

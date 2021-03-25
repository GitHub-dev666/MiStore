<template>
    <div class="login">
        <div class="login-wraper">
            <!--顶部栏-->
            <div class="header">
                <a href="javascript:;">
                    <div class="logo"></div>
                </a>
            </div>
            <!--登入区域-->
            <div class="content">
                <div class="content-wraper">
                    <div class="login-box">
                        <!--标题-->
                        <div class="login-header">
                            <span>登入账号</span>
                        </div>
                        <!--输入框-->
                        <div class="login-content">
                            <div class="input-box">
                                <input type="text" placeholder="账号：jack" v-model="username">
                            </div>
                            <div class="input-box">
                                <input type="password" placeholder="密码：jack" v-model="password">
                            </div>
                            <button class="commit-buttom" @click="login">登入</button>
                        </div>
                        <!--注册-->
                        <div class="login-footer">
                            <div class="register">
                                <span class="register-mess">手机短信登入</span>
                                <div class="register-other">
                                    <span>立即注册</span>
                                    <span class="mindle">|</span>
                                    <span v-text="this.$store.state.user.id || '忘记密码?'"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!--底部栏-->
            <div class="footer">
                <div class="scripts">
                    <span class="script">简体</span>
                    <span class="line">|</span>
                    <span class="script">繁体</span>
                    <span class="line">|</span>
                    <span class="script">English</span>
                    <span class="line">|</span>
                    <span class="script">常见问题</span>
                    <span class="line">|</span>
                    <span class="script">隐私政策</span>
                    <div class="scr">
                        <span>小米公司版权所有-京公网安备11010802020134号-京ICP备10046444-京ICP证110507号</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    username: {
      get () {
        return this.$store.state.username
      },
      set (value) {
        this.$store.commit('nameChang', value)
      }
    },
    password: {
      get () {
        return this.$store.state.password
      },
      set (value) {
        this.$store.commit('passwordChang', value)
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.setCookie)
    },
    setCookie () {
      this.$cookie.set('userId', this.$store.state.user.id, { expirse: 1 })
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
.login {
    .login-wraper {
        // 顶部栏样式
        .header {
            margin: 0 auto;
            width: 1226px;
            a {
                .logo{
                    width: 200px;
                    height: 98px;
                    background: url(https://account.xiaomi.com/static/res/7f6f2f5/account-static/respassport/acc-2014/img/mistore_logo.png) no-repeat;
                }
            }
        }
        // 登入区域样式
        .content {
            height: 558px;
            background: url("https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/72644d9b8031286de3cc74e151aefd90.jpg") no-repeat -560px;
            .content-wraper{
                margin: 0 auto;
                width: 1226px;
                display: flex;
                justify-content: flex-end;
                .login-box {
                    margin-top: 30px;
                    padding-bottom: 20px;
                    width: 410px;
                    height: 528px;
                    background-color: white;
                     // 标题
                    .login-header {
                        text-align: center;
                        height: 83px;
                        line-height: 83px;
                        font-size: 24px;
                        color: #f56600;
                    }
                    // 输入框区域
                    .login-content {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        // 输入框div包裹
                        .input-box {
                            box-sizing: border-box;
                            padding: 0 20px;
                            width: 346px;
                            height: 48px;
                            border: 1px solid #e0e0e0;
                            margin-bottom: 10px;
                            // input输入框
                            input {
                                width: 100%;
                                height: 100%;
                                border: none;
                                &::placeholder {
                                    color: #b4b4b4;
                                    font-size: 14px;
                                }
                            }
                        }
                        // 确认按钮
                        .commit-buttom {
                            width: 346px;
                            height: 48px;
                            color: #fff;
                            font-size: 16px;
                            background-color: #f56600;
                            border: none;
                            margin-top: 20px;
                        }
                    }
                    // 底部注册区域
                    .login-footer {
                        .register {
                            margin-top: 10px;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            font-size: 14px;
                            .register-mess {
                                color: #f56600;
                            }
                            .register-other {
                                margin-top: 30px;
                                font-size: 16px;
                                color: #999;
                                .mindle {
                                    margin: 0 3px;
                                }
                            }
                        }
                    }
                }
            }
        }
        // 底部栏样式
        .footer {
            margin-top: 100px;
            .scripts {
                text-align: center;
                font-size: 14px;
                color: #757575;
                .line {
                    margin: 0 10px;
                }
                .scr {
                    margin-top: 30px;
                }
            }
        }
    }
}
</style>

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
                        <div class="login-header">
                            <span>账号登入</span>
                        </div>
                        <div class="login-content">
                            <div class="input-box">
                                <input id="name" type="text" placeholder="邮箱/手机号码/小米ID">
                            </div>
                            <div class="input-box">
                                <input type="text" placeholder="密码">
                            </div>
                            <button class="commit-buttom">登入</button>
                        </div>
                        <div class="login-footer">
                            <div class="register">
                                <span class="register-mess">手机短信登入</span>
                                <div class="register-other">
                                    <span>立即注册</span>
                                    <span class="mindle">|</span>
                                    <span>忘记密码?</span>
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
                    .login-header {
                        text-align: center;
                        height: 83px;
                        line-height: 83px;
                        font-size: 24px;
                        color: #f56600;
                    }
                    .login-content {
                        display: flex;
                        flex-wrap: wrap;
                        justify-content: center;
                        .input-box {
                            box-sizing: border-box;
                            padding: 0 20px;
                            width: 346px;
                            height: 48px;
                            border: 1px solid #e0e0e0;
                            margin-bottom: 10px;
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
                        .commit-buttom {
                            width: 346px;
                            height: 48px;
                            color: #fff;
                            background-color: #f56600;
                            border: none;
                            margin-top: 20px;
                        }
                    }
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

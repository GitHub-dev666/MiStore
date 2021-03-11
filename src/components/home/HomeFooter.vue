<!--主页头部-->
<template>
    <div class="footer">
      <!--底部售后栏-->
      <div class="footer-topBar">
        <div class="Content">
          <a href="javascript:;">
            <span class="iconfont icon-banshou"></span>
            <span class="scr">预约维修服务</span>
          </a>
        </div>
        <div class="Content">
          <a href="javascript:;">
            <span class="iconfont icon-7tiantuihuan"></span>
            <span class="scr">7天无理由退货</span>
          </a>
        </div>
        <div class="Content">
          <a href="javascript:;">
            <span class="iconfont icon-15tianwuliyoutuihuo"></span>
            <span class="scr">15天免费换货</span>
          </a>
        </div>
        <div class="Content">
          <a href="javascript:;">
            <span class="iconfont icon-liwu"></span>
            <span class="scr">满99元包邮</span>
          </a>
        </div>
        <div class="Content">
          <a href="javascript:;" class="lastContent">
            <span class="iconfont icon-location"></span>
            <span class="scr">520余家售后网点</span>
          </a>
        </div>
      </div>
      <!--底部公司状态栏-->
      <div class="footer-bottom">
        <div class="wraper">
          <a href="javascript:;" class="tubiao">
            <img src="//s02.mifile.cn/assets/static/image/logo-footer.png" alt="小米商城">
            <p>小米商城</p>
          </a>
          <div class="script">
            <a href="javascript:;">政企服务</a>
            <span>|</span>
            <a href="javascript:;">小米天猫店</a>
            <span>|</span>
            <a href="javascript:;">小米商城隐私政策</a>
            <span>|</span>
            <a href="javascript:;">小米集团隐私政策</a>
          </div>
          <a href="javascript:;" class="last-a">京公网安备11010802020134号 京网文[2020]0276-042号</a>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  name: 'HomeFooter'
}
</script>
<style lang="less" scoped>
.footer {
  // 底部售后栏
  .footer-topBar {
    margin: 0 auto;
    width: 1226px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
    .Content {
      width: 19.999%;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      .lastContent{
        border: none;
      }
      a {
        height: 30px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #757575;
        font-size: 16px;
        border-right: 1px solid #e0e0e0;
        &:hover {
          color: #ff6700;
        }
        .iconfont {
          font-size: 24px;
          margin-right: 3px;
        }
      }
    }
  }
  // 底部公司状态栏
  .footer-bottom {
    border-top: 4px solid #ff6700;
    background-color: rgb(44,44,44);
    .wraper {
      margin: 0 auto;
      width: 1226px;
      height: 200px;
      color: #e0e0e0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .tubiao {
        color: #e0e0e0;
        margin-top: 50px;
        p {
          margin:3px 0px 10px;
          text-align: center;
        }
      }
      .script {
        a {
          color: #e0e0e0;
        }
        span {
          margin: 0px 10px;
        }
      }
      .last-a {
        color: #e0e0e0;
        margin-top: 3px;
      }
    }
  }
}
</style>

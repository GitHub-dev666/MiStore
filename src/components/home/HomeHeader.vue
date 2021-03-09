<!--主页顶部栏-->
<template>
    <div class="wraper">
      <div class="navTop">
        <div class="content">
          <div class="content-left">
            <a href="javascript:;">小米商城</a>
            <span class="spe">|</span>
            <a href="javascript:;">MIUI</a>
            <span class="spe">|</span>
            <a href="javascript:;">云服务</a>
            <span class="spe">|</span>
            <a href="javascript:;">智能生活</a>
          </div>
          <div class="content-right">
            <a href="javascript:;">登录</a>
            <span class="spe">|</span>
            <a href="javascript:;">注册</a>
            <span class="spe">|</span>
            <a href="javascript:;">消息通知</a>
            <div class="car-wraper">
              <span class="iconfont icon-gouwuchekong"></span>
              <a href="javascript:;" class="car">购物车(0)</a>
            </div>
          </div>
        </div>
      </div>
      <div class="navHeader"></div>
    </div>
</template>
<script>
export default {
  name: 'HomeHeader'
}
</script>
<style lang="scss" scoped>
.wraper {
  .navTop {
    height: 40px;
    background-color: rgb(51,51,51);
    .content {
      width: 1226px;
      height: 40px;
      font-size: 12px;
      color:#b0b0b0;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .content-left {
        a{
          color:#b0b0b0;
          line-height: 40px;
        }
        .spe{
          margin: 0 8px;
          color: #424242;
        }
      }
      .content-right {
        display: flex;
        justify-content: end;
        align-items: center;
        .car-wraper {
          width:100px;
          text-align: center;
          padding-right: 10px;
          margin-left: 10px;
          background-color:rgb(61, 61, 61);
          .iconfont{
            padding-right: 6px;
          }
          &:hover {
            color:#FF6600;
            background-color: rgb(235, 235, 234);
            a{
              color: #FF6600;
            }
          }
        }
        a{
          color:#b0b0b0;
          line-height: 40px;
        }
        .spe{
          margin: 0 8px;
          color: #424242;
        }
      }
    }
  }
  .navHeader {
    width: 1226px;
    height: 150px;
    background-color: beige;
    margin: 0 auto;
  }
}
</style>

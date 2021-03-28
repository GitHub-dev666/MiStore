<!--主页顶部栏-->
<template>
    <div class="wraper">
      <!--顶部导航栏-->
      <div class="navTop">
        <!--顶部包含块-->
        <div class="content">
          <!--左侧导航栏-->
          <div class="content-left">
            <a href="javascript:;">小米商城</a>
            <span class="spe">|</span>
            <a href="javascript:;">MIUI</a>
            <span class="spe">|</span>
            <a href="javascript:;">云服务</a>
            <span class="spe">|</span>
            <a href="javascript:;">智能生活</a>
          </div>
          <!--右侧导航栏-->
          <div class="content-right">
            <a href="javascript:;" @click="login" v-if="!username">登录</a>
            <a href="javascript:;" v-else v-text="username"></a>
            <span class="spe">|</span>
            <a href="javascript:;">消息通知</a>
            <div class="car-wraper">
              <span class="iconfont icon-gouwuchekong"></span>
              <a href="javascript:;" class="car" @click="car">购物车(0)</a>
            </div>
          </div>
        </div>
      </div>
      <!--头部-->
      <div class="navHeader">
        <!--小米LOGO-->
        <div class="header-logo" @click="toIndex">
          <a href="javascript:;"></a>
        </div>
        <!--菜单-->
        <div class="header-memu">
          <div class="memu">
            <span class="memu-text">小米手机</span>
            <!--小米隐藏商品页-->
            <div class="phone-show">
              <ul class="phone-wraper">
                <li class="phone-li" v-for="item in proList" :key="item.id">
                  <img v-lazy="item.mainImage">
                  <div class="text-name">{{item.name}}</div>
                  <div class="text-price">{{item.price}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="memu">
            <span class="memu-text">Redmi手机</span>
            <!--红米隐藏商品页-->
            <div class="phone-show">
              <ul class="phone-wraper">
                <li class="phone-li" v-for="item in remiList" :key="item.id">
                  <img v-lazy="item.mainImage">
                  <div class="text-name">{{item.name}}</div>
                  <div class="text-price">{{item.price}}</div>
                </li>
              </ul>
            </div>
          </div>
          <div class="memu">
            <span class="memu-text">电视</span>
          </div>
        </div>
        <!--搜索栏-->
        <div class="header-search">
          <input class="search" type="text"/>
          <a class="icon" href="javascript:;"><span class="iconfont icon-search"></span></a>
        </div>
      </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  data () {
    return {
      proList: [],
      remiList: []
    }
  },
  computed: {
    ...mapState(['username'])
  },
  methods: {
    login () {
      this.$router.push('/login')
    },
    car () {
      this.$router.push('/car')
    },
    toIndex () {
      this.$router.push('/')
    }
  },
  mounted () {
    // 请求产品信息列表
    this.axios.get('/products', {
      params: {
        categoryId: '100012'
      }
    }).then((res) => {
      if (res.list.length > 6) {
        this.proList = res.list.slice(0, 6)
        this.remiList = res.list.slice(4)
      } else {
        this.proList = res.list
        this.remiList = res.list
      }
    }
    )
  }
}
</script>
<style lang="scss" scoped>
.wraper {
  // 顶部导航栏样式
  .navTop {
    height: 40px;
    background-color: rgb(51,51,51);
    // 内容包含块
    .content {
      width: 1226px;
      height: 40px;
      font-size: 12px;
      color:#b0b0b0;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      // 内容包含块左侧导航栏
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
      // 内容包含块右侧导航栏
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
  // 头部样式
  .navHeader {
    width: 1226px;
    height: 112px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    position: relative;
    // 小米LOGO样式
    .header-logo {
      width: 55px;
      height: 55px;
      background-color:#FF6600 ;
      overflow: hidden;
      a {
        display: flex;
        width: 110px;
        height: 55px;
        transition: all 0.3s;
        &:hover {
          margin-left: -55px;
        }
        &:before {
          display: block;
          content: " ";
          width: 55px;
          height: 55px;
          background: url(//s02.mifile.cn/assets/static/image/mi-logo.png) no-repeat 50% 50%;
        }
        &:after{
          display: block;
          content: " ";
          width: 55px;
          height: 55px;
          background:url(//s02.mifile.cn/assets/static/image/mi-home.png) no-repeat 50% 50%;
        }
      }
    }
    // 菜单栏设计
    .header-memu {
      margin-left: 209px;
      color: #333333;
      width: 670px;
      font-size: 16px;
      display: flex;
      justify-content: start;
      align-items: center;
      .memu {
        height: 112px;
        line-height: 112px;
        cursor: pointer;
        margin-right: 20px;
        &:hover {
          .memu-text {
            color: #FF6600;
          }
          .phone-show {
            opacity: 1;
            height: 201px;
            border-top: 1px solid #e0e0e0;
          }
        }
        // 隐藏商品页
        .phone-show {
          z-index: 99; // 防止swipe遮盖
          transition:all 0.5s;
          opacity: 0;// 隐藏元素
          height: 0;// 隐藏元素
          overflow:hidden; //隐藏元素子元素
          position: absolute;
          background-color: #fff;
          top: 112px;
          left: 0px;
          font-size: 12px;
          font-weight: bold;
          box-shadow: 0px 7px 6px 0px rgba(0, 0, 0,0.11);
          .phone-wraper {
            width: 1226px;
            height: 201px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            // 隐藏商品详细样式
            .phone-li {
              position: relative;
              cursor: pointer;
              width: 16.666%;
              height:100%;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: center;
              img{
                margin-top: 24px;
                height: 110px;
              }
              .text-name {
                height: 20px;
                line-height: 20px;
                margin-top: 16px;
              }
              .text-price {
                height: 20px;
                line-height: 20px;
                color: #ff6700;
              }
              // 中间竖线
              &::after {
                content: '';
                position: absolute;
                height: 100px;
                top: 24px;
                right: 0px;
                border-right: 1px solid #d8d8d8;
              }
              &:last-child:after{
                display: none;
              }
            }
          }
        }
      }
    }
    // 搜索栏样式
    .header-search {
      height: 50px;
      border: 1px solid #e0e0e0;
      display: flex;
      align-items: center;
      .search {
        height: 50px;
        width: 245px;
        border: none;
        box-sizing: border-box;
        padding: 0px 10px;
        border-right: 1px solid #e0e0e0;
      }
      // 搜索图标样式
      .icon {
        display: block;
        width: 52px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        &:hover {
          background-color: #FF6600;
          .iconfont {
            color: #fff;
          }
        }
        .iconfont {
          color: #616161;
          font-size: 24px;
          font-weight: bold;
        }
      }
    }
  }
}
</style>

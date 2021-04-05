<template>
    <div class="shop">
        <Header/>
        <top-bar></top-bar>
        <div class="content">
            <!--左侧轮播图-->
            <div class="content-left">
                <swiper ref="mySwiper" :options="swiperOptions" class="swiper-wraper">
                    <swiper-slide class="swiper-slide">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589855374.71192668.jpg">
                    </swiper-slide >
                    <swiper-slide class="swiper-slide">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589855374.62169568.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589855374.61427305.jpg">
                    </swiper-slide>
                    <swiper-slide class="swiper-slide">
                        <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1589855374.61316540.jpg">
                    </swiper-slide>
                    <div class="swiper-button-prev swiper-button" slot="button-prev"></div>
                    <div class="swiper-button-next swiper-button" slot="button-next"></div>
                    <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
            </div>
            <!--右侧轮产品信息-->
            <div class="content-right">
                <div class="head">
                        <span class="title">全面屏电视E43K</span>
                        <span class="script">全面屏设计/无边视野/世界精彩一览无余</span>
                        <span class="price">2399元</span>
                </div>
                <div class="mindle">
                    <div class="title">选择颜色</div>
                    <div class="color">深锖色</div>
                    <div class="title">选择尺寸</div>
                    <div class="size">86寸</div>
                </div>
                <div class="foot">
                    <button class="buy">立即购买</button>
                    <div class="foot-detail">
                        <i class="el-icon-circle-check">小米自营</i>
                        <i class="el-icon-circle-check">小米发货</i>
                        <i class="el-icon-circle-check">7天无理由退货</i>
                        <i class="el-icon-circle-check">企业信息</i>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>
<script>
// 引入页头
import Footer from './../components/home/HomeFooter'
// 引入页脚
import Header from './../components/home/HomeHeader'
// 引入标题栏
import TopBar from './../components/detail/topBar'
// 引入Swiper
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  data () {
    return {
      swiperOptions: {
        autoplay: true,
        loop: true,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  },
  components: {
    Header,
    Footer,
    TopBar,
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    this.swiper.slideTo(1, 1000, false)
  }
}
</script>
<style lang="scss" scoped>
// 轮播图底部分页器
.shop /deep/ .swiper-pagination {
    .swiper-pagination-bullet {
        width: 50px;
        height: 2px;
        border-radius: 0;
    }
    // 分页器激活样式
    .swiper-pagination-bullet-active {
        background-color: rgb(156, 156, 156);
    }
}
.shop {
    .content {
        display: flex;
        justify-content: space-between;
        width: 1226px;
        margin: 0 auto;
        // 轮播图
        .content-left {
            margin-top: 10px;
            width: 560px;
            height: 560px;
            .swiper-wraper {
                .swiper-slide {
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  img {
                    width: 90%;
                  }
                }
                // 轮播图左右箭头
                .swiper-button {
                    color: rgb(196, 196, 196);
                    &:hover {
                        color:white;
                        background-color: rgba(0, 0, 0, 0.3);
                    }
                    &::after {
                        font-size: 32px;
                    }
                }
            }
        }
        // 右侧轮产品信息
        .content-right {
            width: 600px;
            margin-top: 50px;
            .head {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                border-bottom: 1px solid #cecdcd;
                .title {
                    font-size: 28px;
                }
                .script {
                    margin: 14px 0;
                    font-size: 14px;
                    color: #b0b0b0;
                }
                .price {
                    font-size: 23px;
                    color: #f60;
                    margin-bottom: 14px;
                }
            }
            .mindle {
                font-size: 18px;
                .title {
                    font-size: 18px;
                    margin: 20px 0;
                }
                .color {
                    width: 300px;
                    height: 50px;
                    color: #f60;
                    text-align: center;
                    line-height: 50px;
                    border: 1px solid #f60;
                }
                .size {
                    width: 300px;
                    height: 50px;
                    text-align: center;
                    line-height: 50px;
                    color: #f60;
                    border: 1px solid #f60;
                }
            }
            .foot {
                margin-top: 30px;
                color: #b0b0b0;
                font-size: 16px;
                .buy {
                    width: 300px;
                    height: 50px;
                    border: none;
                    color: #fff;
                    background-color: #f60;
                }
                .foot-detail {
                    margin-top: 20px;
                    .el-icon-circle-check {
                        margin-right: 20px;
                    }
                }
            }
        }
    }
}
</style>

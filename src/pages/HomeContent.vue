<!--主页内容页-->
<template>
    <div class="wrapper">
      <!--轮播图-->
      <Swiper class="swiper-container" ref="mySwiper" :options="swiperOptions">
          <swiper-slide class="swiper-wrapper" v-for="item in swiperList" :key="item.id">
            <a href="javascript:;" class="img-wrap">
              <img :src="item.imgUrl">
            </a>
          </swiper-slide>
          <!--轮播图分页器-->
          <div class="swiper-pagination" slot="pagination"></div>
          <!--轮播图箭头-->
          <div class="swiper-button-prev iconfont icon-arrow-left-circle" slot="button-prev"></div>
          <div class="swiper-button-next iconfont icon-arrow-right-circle" slot="button-next"></div>
      </Swiper>
      <!--轮播图左侧浮动菜单-->
      <div class="swiperOrder">
          <!--商品列表-->
          <a class="swiperOrder-wraper" href="javascript:;" v-for="item in memuList" :key="item.id">
            <span class="test">{{item.name}}</span>
            <span class="iconfont icon-arrow-right-bold"></span>
            <!--商品展开列表-->
            <div class="wraper">
              <div class="detail-content" v-for="item in orderList" :key="item.id">
                <img v-lazy="item.imgUrl" >
                <span class="text">{{item.name}}</span>
              </div>
            </div>
          </a>
      </div>
      <!--广告栏-->
      <div class="ad">
        <div class="top">
          <img :src="item.imgUrl" class="content" v-for="item in adList" :key="item.id">
        </div>
        <div class="bottom">
          <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/431e5fd6bfd1b67d096928248be18303.jpg?thumb=1&w=1533&h=150&f=webp&q=90" alt="">
        </div>
      </div>
      <!--手机参数展示-->
      <div class="iphoneParam">
        <!--顶部区域-->
        <div class="header">
          <span class="tltie">手机</span>
          <a href="javascript:;">
            <span class="more">查看全部</span>
            <span class="iconfont icon-arrow-right-bold"></span>
          </a>
        </div>
        <!--图片参数展示区域-->
        <div class="param-wraper">
          <!--左部大图-->
          <div class="mianShow">
            <img src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb1bd61ad71c45a4f67f09b075463944.jpeg?thumb=1&w=293&h=768&f=webp&q=90" alt="">
          </div>
          <!--右侧小图-->
          <div class="otherShow">
            <a class="wraper" v-for="item in paramShowList" :key="item.id" @click="showDetail(item.id)">
              <img v-lazy="item.imgUrl">
              <span class="name" v-text="item.name"></span>
              <span class="script" v-text="item.script"></span>
              <div>
                <span class="price" v-text="item.price"></span>
                <span class="iconfont icon-gouwuchekong" @click.stop="car(item.id, item.name)"></span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'HomeContent',
  data () {
    return {
      // Swiper轮播图配置
      swiperOptions: {
        loop: true,
        speed: 1000,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            let text = ''
            switch (index) {
              case 0:text = '壹'
                break
              case 1:text = '贰'
                break
              case 2:text = '叁'
                break
              case 3:text = '肆'
                break
              case 4:text = '伍'
                break
            }
            return '<span class="' + className + '">' + text + '</span>'
          }
        }
      },
      // 轮播图数据列表
      swiperList: '',
      List: [
        {
          id: '10001',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0f5c49925f3a7d5157b8ac7f4f66b34b.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          id: '10002',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/aebcb8f7d8c6ddaa754bfbb701a38cbf.jpeg?thumb=1&w=1533&h=575&f=webp&q=90'
        },
        {
          id: '10003',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/c7fd00fa846cefaaa73572ea55832854.jpg?w=2452&h=920'
        },
        {
          id: '10004',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e023dd94c146d0f27f7ae8e98213abff.jpg?thumb=1&w=1533&h=575&f=webp&q=90'
        }
      ],
      // 轮播图左侧浮动菜单数据
      memuList: [
        {
          id: '0001',
          name: '手机 电话卡'
        },
        {
          id: '0002',
          name: '电视 盒子'
        },
        {
          id: '0003',
          name: '笔记本 显示器'
        },
        {
          id: '0004',
          name: '耳机 音响'
        },
        {
          id: '0005',
          name: '家电 插线板'
        },
        {
          id: '0006',
          name: '出行 穿戴'
        },
        {
          id: '0007',
          name: '智能 路由'
        },
        {
          id: '0008',
          name: '健康 儿童'
        },
        {
          id: '0009',
          name: '生活 箱包'
        }
      ],
      // 商品展开列表数据
      orderList: [
        {
          id: '0001',
          name: '小米10S',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c89e7b3a3495acaa0a4df271d9da59ea.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0002',
          name: 'K40 Pro 系列',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0003',
          name: 'Redmi Note 9 Pro',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/76378ce289a36fcfa29f704ba90b4155.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0004',
          name: 'Redmi 9',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0cadc8b00dbe3b5615bd6ab657715baf.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0005',
          name: '小米11',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a51c1afa4db8e47e62fad1f6fa4a8970.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0006',
          name: 'Redmi K40',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/92fdd051100722d25323e9bd188befc5.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0007',
          name: 'Redmi Note 9 5G',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/970c6b287eb89620f5ee8e2b347f6f3d.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0008',
          name: '小米10',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4a7a4f24061860901f724b6ba6d75fd9.png?thumb=1&w=50&h=50&f=webp&q=90'
        },
        {
          id: '0009',
          name: '腾讯黑鲨游戏手机',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f382e29367ad5852fc1adfdae1332d5c.png?thumb=1&w=50&h=50&f=webp&q=90'
        }
      ],
      // 广告栏数据
      adList: [
        {
          id: '0001',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d4298059889417157e8492750328492.jpg?w=632&h=340'
        },
        {
          id: '0002',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8a43378b96501d7e227a9018fe2668c5.jpg?w=632&h=340'
        },
        {
          id: '0003',
          imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/793913688bfaee26b755a0b0cc8575fd.jpg?w=632&h=340'
        },
        {
          id: '0004',
          imgUrl: '//i8.mifile.cn/v1/a1/6fbc14b8-aa4c-c49e-de33-d8efb0fcc484.jpg'
        }
      ],
      // 手机参数展示栏数据
      paramShowList: [
        {
          id: '0001',
          name: '小米10S',
          script: '骁龙870 | 对称式双扬立体声',
          price: '3299元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b3553083a4975325eab6470d94465548.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0002',
          name: 'Redmi  K40 Pro 系列',
          script: '骁龙870，新一代 E4 AMOLED旗舰直屏',
          price: '2799元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/68217751d12b1bfd2f9766e458b5e2dd.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0003',
          name: 'Redmi  K40',
          script: '骁龙870 | 对称式双扬立体声',
          price: '1999元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/73617424da6ff6b64f9c630387bca874.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0004',
          name: '小米11',
          script: '骁龙888 | 2K四曲面屏',
          price: '3999元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5a260090e0e08770b0bd865845a4b4ab.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0005',
          name: '小米10',
          script: '骁龙865/1亿像素相机',
          price: '3399元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0099822e42b4428cb25c4cdebc6ca53d.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0006',
          name: 'Note 9 Pro',
          script: '一亿像素夜景相机，120Hz六档变速高刷屏',
          price: '1599元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4e75e528fb468aee107f551179aa0799.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0007',
          name: 'Note 9',
          script: '天玑 800U处理器，5000mAh电池，',
          price: '1299元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/de2f71a797a74e1ca70f1fb4570bc026.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        },
        {
          id: '0008',
          name: 'Note 8S',
          script: '6000mAh长续航',
          price: '999元起',
          imgUrl: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/13f10e47913f9dc82e6c6a6199f413cd.jpg?thumb=1&w=250&h=250&f=webp&q=90'
        }
      ]
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted () {
    // 切换到第3个slide，速度为0秒
    this.swiper.slideTo(3, 0, false)
    // 仿照发送Ajax请求返回数据
    setTimeout(() => {
      this.swiperList = this.List
    }, 500)
    this.getProductList()
  },
  methods: {
    car (n, p) {
      this.bus.$emit('changShow', n, p)
    },
    showDetail (id) {
      this.$router.push({ name: 'detail', params: { id } })
    },
    getProductList () {
      this.$store.dispatch('getProductList')
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper {
  width: 1226px;
  margin: 0 auto;
  position: relative;
  // 轮播图样式
  .swiper-container {
    // 定高防止页面塌陷
    height: 460px;
    // pagination分页器样式自定义
    /deep/ .swiper-pagination {
      display: flex;
      justify-content: flex-end;
      left: -20px; // 覆盖原有样式
      .swiper-pagination-bullet {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20px;
        height: 20px;
        margin: 3px;
        background-color: rgba(0,0,0,.4);
      }
      .swiper-pagination-bullet-active {
        background-color:hsla(0,0%,100%,.4); // 覆盖上面样式
      }
    }
    .swiper-button-prev , .swiper-button-next {
      width: 41px;
      height: 69px;
      right: 10px;
      font-size: 50px;
      color: rgba(0, 0, 0, 0.1);
      &:hover{
        color:rgba(255, 255, 255, 0.8);
      }
    }
    .swiper-button-prev {
      left: 244px;
    }
    .swiper-button-prev::after,.swiper-button-next::after {
      content: '';
    }
     // 轮播图样式自定义
    .swiper-wrapper {
      a {
        img {
          width: 1226px;
        }
      }
    }
  }
  // 轮播图菜单
  .swiperOrder {
    width: 234px;
    height: 460px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9;
    background-color: rgba(0,0,0,.4);
    box-sizing: border-box;
    padding: 20px 0;
    // 菜单列表样式
    .swiperOrder-wraper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: rgb(255, 255, 255);
      font-size: 16px;
      width: 100%;
      height: 11.1110%;
      .test {
        padding-left:20px;
      }
      .iconfont {
        padding-right: 20px;
      }
      &:hover{
        background-color:#f60;
        .wraper {
          width: 992px;
          border: 1px solid #e0e0e0;
          box-shadow: 1px 3px 10px rgba(150, 149, 149, 0.253);
        }
      }
      // 商品展开列表样式
      .wraper {
        position: absolute;
        top: 0;
        left: 234px;
        width: 0px;
        height: 458px;
        overflow: hidden;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-content: space-around;
        background-color:#fff;
        .detail-content {
          display: flex;
          align-items: center;
          color: #333;
          width: 24.99%;
          height: 33.332%;
          img {
            width: 50px;
            height: 50px;
            padding: 0 15px;
          }
          &:hover {
            color: #f60;
          }
        }
      }
    }
  }
  // 广告栏
  .ad {
    width: 1226px;
    .top {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      img{
        width: 23%;
      }
    }
    .bottom {
      height: 120px;
      margin-top: 20px;
      img{
        width: 100%;
      }
    }
  }
  // 手机参数展示区域样式
  .iphoneParam {
    margin-top: 20px;
    // 顶部区域样式
    .header {
      width: 100%;
      height: 58px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .tltie {
        color: #333;
        font-weight: 200;
        font-size: 22px;
      }
      a {
        line-height: 58px;
        color: #424242;
        font-size: 16px;
        .iconfont {
          padding: 0 8px;
        }
        &:hover{
          color: #f60;
        }
      }
    }
    // 图片展示区域样式
    .param-wraper {
      width: 1226px;
      height: 614px;
      margin: 0 auto;
      display: flex;
      background: #f5f5f5;
      .mianShow {
        img {
          height: 614px;
        }
      }
      .otherShow {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 992px;
        flex-wrap: wrap;
        .wraper {
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 234px;
          height: 260px;
          padding: 20px 0;
          background-color: #fff;
          transition: all 0.3s;
          img {
            width: 160px;
          }
          .name {
            font-size: 14px;
            font-weight: 400;
            color: #333;
            margin: 18px 0 2px 0;
          }
          .script {
            font-size: 12px;
            text-align: center;
            width: 214px;
            color: #b0b0b0;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-bottom: 10px;
          }
          div{
            .price {
              font-size: 14px;
              color: #f60;
            }
            .iconfont {
              display: inline-block;
              margin-left: 20px;
              font-size: 16px;
              color: #f60;
              transition: all 0.3s;
              &:hover {
                color: rgb(0, 195, 255);
                transform: rotate(-8deg) scale(1.3);
              }
            }
          }
          &:hover {
            transform: translate(0, -3px);
            box-shadow:  0 15px 30px rgba(0,0, 0, 0.10);
          }
        }
      }
    }
  }
}
</style>

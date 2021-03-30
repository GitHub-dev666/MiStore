<template>
    <!--产品详页-->
    <div class="detail">
        <div class="wraper">
            <!--头部公共组件-->
            <Header/>
            <!--产品弹性导航头-->
            <top-bar></top-bar>
            <!--产品详细信息区-->
            <div class="content">
              <!--第一张展示图-->
              <div class="sessionOne"></div>
              <!--视频及介绍-->
              <div class="sessionTwo">
                <!--视频-->
                <div class="videoWraper">
                  <div class="defa" :class="{slideDowm: showDowm, slideUp: showUp}">
                    <div class="close" v-show="showDowm">
                      <span class="iconfont icon-error" @click="close"></span>
                    </div>
                    <div class="videoBox">
                      <video autoplay="autoplay" muted="muted" loop="loop" :src=videoUrl :controls=showDowm></video>
                    </div>
                  </div>
                  <!--视频变化按钮-->
                  <div class="videoPlay">
                    <span class="script">观看产品视频</span>
                    <span class="iconfont icon-arrow-right-circle" @click="videoPlay"></span>
                  </div>
                </div>
                <!--介绍-->
                <div class="detail-script-wrap">
                  <div class="detail-script-head">
                    <span>好轻，好薄，一块好屏</span>
                  </div>
                  <div class="detail-script-contnet">
                    <span>方方面面的新突破，开启了 2021 年高端旗舰的新标准。</span><br/>
                    <span>它轻薄、出彩 - 带来一块创下 13 项纪录的高端屏幕。</span><br/>
                    <span>更快的速度、更强大的影像系统，以及全面飞跃的视听体验。</span><br/>
                    <span>种种突破，共同成就了这款 2021 年小米高端代表作，助你轻装上阵，一往无前。</span>
                  </div>
                  <div class="detail-script-foot">
                    <span>全新骁龙888，突破性的 5 纳米芯片工艺，</span><br/>
                    <span>性能、渲染、AI 算力突飞猛进。</span><br/>
                    <div class="bottom-line"></div>
                    <span>2K AMOLED 四曲面柔性屏，10 亿色原色屏，</span><br/>
                    <span>获 DisplayMate A+ 权威认证。</span><br/>
                    <div class="bottom-line"></div>
                    <span>轻薄机身大电量，</span><br/>
                    <span>4600mAh + 55W 有线闪充。</span><br/>
                  </div>
                </div>
              </div>
            </div>
            <!--尾部公共组件-->
            <Footer/>
        </div>
    </div>
</template>
<script>
// 引入页头
import Footer from './../components/home/HomeFooter'
// 引入页脚
import Header from './../components/home/HomeHeader'
// 引入标题栏
import TopBar from './../components/detail/topBar'
export default {
  data () {
    return {
      showDowm: false, // 下拉
      showUp: false, // 上拉
      videoUrl: '', // 视频地址
      videoOneUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11/section2-1.mp4',
      videoTwoUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11/section2-2.mp4'
    }
  },
  components: {
    TopBar,
    Header,
    Footer
  },
  methods: {
    videoPlay () {
      this.showDowm = true
      this.videoUrl = this.videoTwoUrl
      this.style.controls = 'controls'
    },
    close () {
      this.showUp = true
      this.showDowm = false // 变换样式，实现过度动画
      setTimeout(() => {
        this.showUp = false // 变换完成，返回初始样式
        this.videoUrl = this.videoOneUrl // 变换完成，返回初始视频
      }, 500)
    }
  },
  mounted () {
    this.videoUrl = this.videoOneUrl
  }
}
</script>
<style lang="scss" scoped>
.detail {
  .wraper {
    // 产品详细信息区
    .content {
      width: 100%;
      // 第一张展示图
      .sessionOne {
        height: 712px;
        background-image: url(https://cdn.cnbj1.fds.api.mi-img.com/product-images/mi11/section1-1.jpg);
        background-repeat: no-repeat;
        background-size: 100%;
      }
      // 视频及介绍
      .sessionTwo {
        height: 1790px;
        background-color: black;
        // 视频
        .videoWraper {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 609px;
          .defa {
            top: -800px;
          }
          // 视频下拉浮动样式
          .slideDowm {
            transition: top 1s;
            position: fixed;
            z-index: 99;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            left: 0;
            top: 0;
            // 视频包裹浮动样式
            .videoBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              // 视频样式
              video{
                width: 70%;
                outline: none;
              }
            }
            // 视频浮动关闭按钮样式
            .close {
              position: fixed;
              top: 20px;
              right: 30px;
              .iconfont {
                color: white;
                font-size: 42px;
                &:hover {
                  color: #f60;
                }
              }
            }
          }
          // 视频浮动上拉样式
          .slideUp {
            position: fixed;
            z-index: 99;
            transition: top 1s;
            top: -800px;
            // 视频包裹浮动样式
            .videoBox {
              display: flex;
              justify-content: center;
              align-items: center;
              width: 100%;
              height: 100%;
              // 视频样式
              video{
                width: 70%;
                outline: none;
              }
            }
          }
          // 视频样式
          .videoBox {
            width: 706px;
            height: 323px;
            video{
              width: 98%;
              height: 98%;
            }
          }
          // 视频变化按钮
          .videoPlay {
            display: flex;
            justify-content: center;
            position: absolute;
            color: #fff;
            font-size: 24px;
            .iconfont {
              margin-left: 10px;
              font-size: 32px;
              cursor: pointer;
              transition: all 0.3s;
              &:hover {
                color: coral;
                transform: scale(1.2);
              }
            }
          }
        }
        // 介绍
        .detail-script-wrap {
          width: 100%;
          text-align: center;
          .detail-script-head {
            font-size: 35px;
            color: #fff
          }
          .detail-script-contnet {
            margin-top: 50px;
            color: #aaa;
            font-size: 18px;
          }
          .detail-script-foot {
            margin-top: 200px;
            color: #85a7d6;
            font-size: 26px;
            display: flex;
            flex-direction: column;
            align-items: center;
            .bottom-line {
              width: 550px;
              border-bottom: 2px solid  #85a7d6;
              margin-bottom: 50px;
              margin-top: 10px;
            }
          }
        }
      }
    }
  }
}
</style>

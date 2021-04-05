<template>
    <div>
        <!--标题栏-->
        <div class='topBar' :class="{positionFlex: show}">
          <div class="wraper">
            <!--标题栏左侧-->
            <div class='wraper-inner-left' v-text="productMessage.name || name"></div>
            <!--标题栏右侧-->
            <div class="wraper-inner-right">
                <a href="javascript:;">概述页</a>
                <span class="separator">|</span>
                <a href="javascript:;">参数页</a>
                <span class="separator">|</span>
                <a href="javascript:;">用户评价</a>
                <slot name="button"></slot>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      name: '小米11',
      show: false
    }
  },
  computed: {
    ...mapState(['productMessage'])
  },
  methods: {
    scrollChang () {
      const top = document.body.offsetTop || document.documentElement.scrollTop || window.pageYOffset
      if (top >= 233) {
        this.show = true
      } else {
        this.show = false
      }
      console.log(top)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollChang)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollChang)
  }
}
</script>
<style lang="scss" scoped>
.topBar {
  height: 71px;
  width: 100%;
  top: -71px;
  transition: top 0.6s;
  border-top: 1px solid #e0e0e0;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.07);
  .wraper {
      width: 1226px;
      height: 71px;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .wraper-inner-left {
          font-size: 18px;
          color: #424242;
      }
      .wraper-inner-right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          a {
              font-size: 14px;
              color: #616161;
          }
          .separator {
              margin: 0 10px;
          }
          .buy {
              margin-left: 10px;
              border: none;
              color: #fff;
              background: #ff6700;
              font-size: 12px;
              width: 118px;
              height: 28px;
              line-height: 28px;
              &:hover {
                  background-color: #e45c02;;
              }
          }
      }
  }
}
.positionFlex {
  position: fixed;
  top: 0px;
  z-index: 99;
  background-color: #fff;
}
</style>

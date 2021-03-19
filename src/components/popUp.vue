<template>
    <Opacity>
        <div class="pop" @click.self="changShow" v-show="show">
            <div class="wraper">
                <div class="header">
                    <span class="left" >提示信息</span>
                    <span @click="changShow" class="right  iconfont icon-error"></span>
                </div>
                <div class="content">
                    <slot :phname='name'></slot>
                </div>
                <div class="footer">
                    <button class="commit">确认</button>
                    <button class="cancel">取消</button>
                </div>
            </div>
        </div>
    </Opacity>
</template>
<script>
import Opacity from './../components/animation/opacity'
export default {
  name: 'PopUp',
  data () {
    return {
      show: false,
      name: ''
    }
  },
  components: {
    Opacity
  },
  mounted () {
    this.bus.$on('changShow', this.changShow)
  },
  methods: {
    changShow (n, p) {
      this.show = !this.show
      if (this.show) {
        this.name = p
        console.log(n, p)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.pop {
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    z-index: 99;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.3);
    .wraper {
        background-color: rgb(230, 230, 230);
        position: relative;
        margin-top: 200px;
        width: 450px;
        height: 300px;
        .header {
            height: 40px;
            font-size: 14px;
            display:flex;
            justify-content: space-between;
            align-items: center;
            color: gray;
            background-color: white;
            .left {
                margin-left: 20px;
            }
            .right {
                font-size: 23px;
                transition: all 0.3s;
                margin-right: 20px;
                &:hover {
                    transform: scale(1.5) rotate(360deg);
                    color: #f60;
                }
            }
        }
        .footer {
            background-color: white;
            position: absolute;
            bottom: 0;
            left: 0;
            height: 50px;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            button {
                height: 35px;
                width: 95px;
                border: none;
                border-radius: 3px;
                margin: 0 20px;
            }
            .commit {
                color: honeydew;
                background-color: #f60;
            }
        }
    }
}
</style>

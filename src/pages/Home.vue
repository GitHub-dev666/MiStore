<template>
    <div class="home">
        <Header/>
        <router-view></router-view>
        <Footer/>
        <pop-up>
          <template v-slot='props'>
            <div class="wrap">添加 {{props.phname}} 到购物车？</div>
          </template>
        </pop-up>
    </div>
</template>
<script>
// 引入页头
import Footer from './../components/home/HomeFooter'
// 引入页脚
import Header from './../components/home/HomeHeader'
// 引入弹窗
import PopUp from './../components/popUp'

export default {
  name: 'Home',
  components: {
    Header,
    Footer,
    PopUp
  }
}
</script>
<style lang="less" scoped>
.home {
  .wrap {
    text-align: center;
    font-size: 21px;
    line-height: 150px;
    color: rgb(19, 19, 19);
  }
}
</style>

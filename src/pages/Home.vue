<template>
    <div>
        <Header/>
        <router-view></router-view>
        <Footer/>
    </div>
</template>
<script>
// 引入页头
import Footer from './../components/home/HomeFooter'
// 引入页脚
import Header from './../components/home/HomeHeader'

export default {
  name: 'Home',
  components: {
    Header,
    Footer
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>

</style>

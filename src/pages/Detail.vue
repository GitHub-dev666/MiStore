<template>
    <div class="detail">
        <div class="wraper">
            <Header/>
            <top-bar></top-bar>
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
  components: {
    TopBar,
    Header,
    Footer
  }
}
</script>

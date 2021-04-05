<template>
    <div class="car">
        <Header/>
        <Footer/>
    </div>
</template>
<script>
// 引入页头
import Footer from './../components/home/HomeFooter'
// 引入页脚
import Header from './../components/home/HomeHeader'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

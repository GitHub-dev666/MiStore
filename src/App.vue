<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  mounted () {
    this.$store.dispatch('getUserInfo')
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
</style>

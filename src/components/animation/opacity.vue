<template>
    <transition name="opac">
        <slot></slot>
    </transition>
</template>
<script>
export default {
  name: 'Opacity'
}
</script>
<style lang="scss" scoped>
.opac-enter, .opac-leave-to{
    opacity: 0;
}
.opac-enter-active, .opac-leave-active{
    transition: all 0.6s;
}
</style>

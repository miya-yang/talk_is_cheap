<template>
  <div class="message-page">
    <sub-nav class="sub-nav"></sub-nav>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
export default {
  name: 'message-page',
  components: {
    SubNav
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-page {
  width: 100%;
  height: 100%;

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }
}
</style>


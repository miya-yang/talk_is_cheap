<template>
  <div class="circle-page">
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
export default {
  name: 'circle-page',
  components: {
    SubNav
  },
  props: {
    router: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.circle-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }
}
</style>


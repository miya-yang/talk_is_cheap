<template>
  <div class="circle-page">
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <router-view class="panel-page remove-titlebar-content"></router-view>
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

  .panel-page {
    position: absolute;
    margin: auto;
    left: 320px;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }
}
</style>


<template>
  <div class="message-page">
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <router-view class="message-panel"></router-view>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
export default {
  name: 'message-page',
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
.message-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .message-panel {
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


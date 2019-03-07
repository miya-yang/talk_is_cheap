<template>
  <div class="message-page">
    <sub-nav class="sub-nav"></sub-nav>
    <message-panel class="message-panel" />
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
import MessagePanel from '@/components/MessagePanel'
export default {
  name: 'message-page',
  components: {
    SubNav,
    MessagePanel
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }

  .message-panel {
    position: absolute;
    margin: auto;
    left: 320px;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>


<template>
  <div class="message-page">
    <message-panel class="message-panel" />
  </div>
</template>

<script>
import MessagePanel from '@/components/MessagePanel'
export default {
  name: 'message-page',
  components: {
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


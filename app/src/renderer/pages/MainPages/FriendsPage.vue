<template>
  <div class="friends-page">
    <friends-panel class="friends-panel" />
  </div>
</template>

<script>
import FriendsPanel from '@/components/FriendsPanel'
export default {
  name: 'friends-page',
  components: {
    FriendsPanel
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.friends-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .friends-panel {
    position: absolute;
    margin: auto;
    left: 320px;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>

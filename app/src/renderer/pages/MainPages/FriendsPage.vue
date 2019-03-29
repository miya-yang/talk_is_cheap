<template>
  <div class="friends-page">
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <router-view class="panel-page remove-titlebar-content"></router-view>
  </div>
</template>

<script>
import FriendsPanel from '@/components/FriendsPanel'
import SubNav from '@/components/SubNav'
export default {
  name: 'friends-page',
  components: {
    FriendsPanel,
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

<template>
  <div class="base-frame panel">
    <title-bar></title-bar>
    <div class="remove-titlebar-content">
      <router-view></router-view>
    </div>
    <left-nav class="left-nav" />
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import LeftNav from '@/components/LeftNav'
import SubNav from '@/components/SubNav'

export default {
  name: 'base-frame',
  components: {
    TitleBar,
    LeftNav,
    SubNav
  },
  data () {
    return {
      router: 'message-page'
    }
  },
  watch: {
    $route () {
      this.router = this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.base-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  .left-nav {
    position: absolute;
    left: 0;
    top: 0;
  }

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }
}

</style>

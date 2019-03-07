<template>
  <div class="base-frame panel">
    <title-bar></title-bar>
    <div class="remove-titlebar-content">
      <router-view></router-view>
    </div>
    <left-nav class="left-nav"></left-nav>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import LeftNav from '@/components/LeftNav'

export default {
  name: 'base-frame',
  components: {
    TitleBar,
    LeftNav
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.base-frame {
  width: 100%;
  height: 100%;

  .left-nav {
    position: absolute;
    left: 0;
    top: 0;
  }
}

</style>

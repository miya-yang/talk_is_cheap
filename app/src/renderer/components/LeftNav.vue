<template>
  <div class="left-nav remove-titlebar-content">
    <portrait class="portrait no-drag" />
    <nav-list class="nav-list no-drag"></nav-list>
  </div>
</template>

<script>
import Portrait from '@/components/MainPages/LeftNav/Portrait'
import NavList from '@/components/MainPages/LeftNav/NavList'
export default {
  name: 'left-nav',
  components: {
    Portrait,
    NavList
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.left-nav {
  width: $left-nav-width;
  height: 100%;
  background: #000;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  .portrait {
    margin: 0 auto;
  }

  .nav-list {
    margin-top: 50px;
  }
}
</style>


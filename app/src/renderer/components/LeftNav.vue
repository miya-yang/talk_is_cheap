<template>
  <div class="left-nav remove-titlebar-content">
    <portrait 
      class="portrait no-drag" 
      :title="this.$store.getters.userNickname" 
      :portrait="userPortrait"
    />
    <nav-list class="no-drag" />
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
  },
  computed: {
    userPortrait () {
      return this.$store.state.UserInfo._portrait
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.left-nav {
  width: $left-nav-width;
  height: 100%;
  background: $left-nav-background;
  -webkit-user-select: none;
  -webkit-app-region: drag;

  .portrait {
    margin: 0 auto;
  }
}
</style>


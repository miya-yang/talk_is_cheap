<template>
  <div class="base-frame panel">
    <title-bar 
      :isColorDefault="isLoginPage"
    />
    <div class="remove-titlebar-content">
      <router-view :router="router"></router-view>
    </div>
    <left-nav class="left-nav" />
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
  },
  mounted () {
    this.listenRoute()
  },
  data () {
    return {
      isLoginPage: true,
      router: 'message-page'
    }
  },
  methods: {
    listenRoute () {
      this.isLoginPage = this.$route.name === 'login-page'
      this.router = this.$route.path
    }
  },
  watch: {
    $route () {
      this.listenRoute()
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
}
</style>

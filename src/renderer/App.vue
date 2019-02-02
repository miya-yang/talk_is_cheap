<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'talk_is_cheap',
  components: {
    TitleBar
  }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>


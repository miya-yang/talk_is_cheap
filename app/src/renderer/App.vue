<template>
  <div id="app">
    <title-bar
      v-if="false"
    >
    </title-bar>
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
@import '@/scss/common.scss';

#app {
  width: 100%;
  height: 100%;
  background: $loginPanel-background;
  overflow: hidden;
  border: 1px solid #ccc;
  position: absolute;
}
</style>


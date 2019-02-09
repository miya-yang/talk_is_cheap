<template>
  <div class="register-panel">
    <title-bar
      :hasScaleBtn="false"
    >
    </title-bar>
    <img class="register-background" src="../../assets/skin/login-background.jpg">
    <div class="register-inputs"></div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'Register',
  components: {
    TitleBar
  }
}
</script>


<style lang="scss" scoped>
.register-panel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-app-region: drag;
  position: absolute;

  .register-background {
    width: 100%;
    height: 100%;
  }
}
</style>

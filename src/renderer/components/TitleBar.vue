<template>
  <header>
    <div class="control-buttons">
      <control-button @click.native="this.handleClick"></control-button>
    </div>
  </header>
</template>

<script>
import ControlButton from '@/components/TitleBar/ControlButton'
export default {
  name: 'TitleBar',
  components: {
    ControlButton
  },
  methods: {
    handleClick () {
      alert('我被点击了')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

header {
  width: 100%;
  height: $titlebar-height;
  background: $titlebar-bgcolor;
  -webkit-app-region: drag;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;

  .control-buttons {
    float: right;
  }
}
</style>



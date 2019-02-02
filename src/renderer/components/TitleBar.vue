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
header {
  width: 100%;
  height: 25px;
  background: red;
  -webkit-app-region: drag;

  .control-buttons {
    float: right;
  }
}
</style>



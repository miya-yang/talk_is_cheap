<template>
  <header>
    <div class="control-buttons">
      <control-button
        iconName="md-remove"
        hoverTitle="最小化"
        @click="handleClick"
        v-if="hasMinimumBtn"
      ></control-button>
      <control-button
        iconName="md-browsers"
        @click="handleClick"
        v-if="hasScaleBtn"
      ></control-button>
      <control-button
        hoverType="warning"
        iconName="md-close"
        hoverTitle="关闭"
        @click="handleClick"
        v-if="hasCloseBtn"
      ></control-button>
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
  },
  props: {
    hasMinimumBtn: {
      type: Boolean,
      default: true
    },
    hasScaleBtn: {
      type: Boolean,
      default: true
    },
    hasCloseBtn: {
      type: Boolean,
      default: true
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
  -webkit-user-select: none;
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



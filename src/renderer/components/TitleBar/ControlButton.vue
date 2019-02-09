<template>
  <a 
    class="control-button" 
    @click="handleClickEvent"
    :class="{ 'default-hover': hoverType === 'default', 'warning-hover': hoverType === 'warning' }"
    :title="hoverTitle"
  >
    <Icon 
      class="control-button-icon" 
      :type="iconName" 
      :color="iconColor" 
    />
  </a>
</template>

<script>
export default {
  name: 'ControlButton',
  data () {
    return {

    }
  },
  props: {
    iconName: {
      type: String,
      default: ''
    },
    iconColor: {
      type: String,
      default: '#fff'
    },
    hoverType: {
      type: String,
      default: 'default'
    },
    hoverTitle: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClickEvent () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

.control-button {
  width: 40px;
  height: $titlebar-height;
  position: relative;
  display: inline-block;
  background: inherit;
  -webkit-app-region: no-drag;

  .control-button-icon {
    position: absolute;
    margin: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.default-hover:hover {
  background: $default-hover-background;
}

.warning-hover:hover {
  background: $warning-hover-background;
}
</style>

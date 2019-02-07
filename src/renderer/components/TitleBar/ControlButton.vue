<template>
  <a class="control-button" @click="handle">
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
      default: 'md-close'
    },
    iconColor: {
      type: String,
      default: '#fff'
    }
  },
  methods: {
    handle () {
      alert('hhhh')
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
  display: block;
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

.control-button:hover {
  background: #ff0000;
}
</style>

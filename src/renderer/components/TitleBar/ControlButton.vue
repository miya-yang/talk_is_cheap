<template>
  <a class="control-button" href="javascript:alert('123');">
    <Icon class="control-button-icon" type="md-close" />
  </a>
</template>

<script>
export default {
  name: 'ControlButton',
  methods: {
    handle () {
      alert('hhhh')
    }
  }
}
</script>

<style lang="scss" scoped>
.control-button {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  cursor: pointer;
  .control-button-icon {
    cursor: pointer;
  }
}
</style>

<template>
  <div class="shade" v-if="isShow">
    <Spin class="spin" />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      isShow: false
    }
  }
}
</script>

<style lang="scss" scoped>
.shade {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 28px;
  z-index: 1000;
  background: rgba(255, 255, 255, .35);

  .spin {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 1001;
  }
}
</style>


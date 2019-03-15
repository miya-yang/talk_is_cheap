<template>
  <a class="portrait-component" href="javascript:;" @click="hOpenUserInfoWindow">
    <img class="portrait-img" :src="portrait" alt="">
  </a>
</template>

<script>
import events from '../../../events.js'
export default {
  name: 'portrait',
  props: {
    portrait: {
      type: String,
      default: ''
    }
  },
  methods: {
    hOpenUserInfoWindow () {
      events.hCreateWindow('UserInfoWindow')
    }
  }
}
</script>

<style lang="scss" scoped>
.portrait-component {
  display: block;
  width: 40px;
  height: 40px;

  .portrait-img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }
}

</style>

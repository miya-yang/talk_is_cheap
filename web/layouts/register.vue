<template>
  <div class="register-page">
    <m-carousel class="left-carousel" />
    <div class="right-panel">
      <nuxt class="content" />
      <div class="copyright">
        Copyright © 2015-2019 Tianjin University of Technology All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import mCarousel from '@/components/m-carousel'
export default {
  name: 'layout-register',
  components: {
    mCarousel
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  width: 100%;
  height: 100%;
  color: #000;

  .left-carousel {
    width: 480px;
    height: 100%;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 1000px) {
    .left-carousel {
      display: none;
    }

    .right-panel {
      margin-left: 0 !important;
    }
  }

  .right-panel {
    min-height: 100%;
    margin-left: 480px;
    padding-top: 100px;
    position: relative;
    transition: all .2s;

    .content {
      padding-bottom: 100px;
    }

    .copyright {
      color: #aaa;
      position: absolute;
      margin: auto;
      left: 50%;
      transform: translate(-50%, 0);
      bottom: 20px;
    }
  }
}
</style>

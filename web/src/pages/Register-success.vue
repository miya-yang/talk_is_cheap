<template>
  <div class="register-success-page">
    <m-carousel class="left-carousel"></m-carousel>
    <div class="right-panel">
      <h2>您的 TIC 账号为 <span class="account-number">511287680</span></h2>
      <h4>感谢您的注册，您可以使用 <span class="account-number">TIC 账号</span> 或者 <span class="account-number">邮箱账号</span> 登录</h4>
      <h5>:)</h5>
      <div class="copyright">
        Copyright © 2015-2019 Tianjin University of Technology All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import mCarousel from '@/components/m-carousel'
export default {
  name: 'register-success-page',
  components: {
    mCarousel
  }
}
</script>

<style lang="scss" scoped>
.register-success-page {
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
    padding-top: 200px;
    height: 100%;
    margin-left: 480px;
    transition: all .2s;

    .copyright {
      color: #aaa;
      margin: 200px auto 20px auto;
    }
  }
}

.account-number {
  font-family: 'Microsoft Yahei';
  color: #ff0000;
}

</style>

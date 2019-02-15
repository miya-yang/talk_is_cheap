<template>
  <div class="register-page">
    <div class="left-carousel"></div>
    <div class="right-panel">
      <div class="content">
        <h1>欢迎注册Talk Is Cheap</h1>
        <h4>使用TIC，简单你的沟通。</h4>
        <div class="user-infos">
          <m-input
            class="inputs"
            placeholder="昵称"
            :maxLength="10"
          ></m-input>
          <m-input
            class="inputs"
            placeholder="密码"
            type="password"
          ></m-input>
          <m-input
            class="inputs"
            placeholder="邮箱"
            type="email"
            tip="可通过该邮箱找回密码"
          ></m-input>
          <m-button></m-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'
export default {
  name: 'register-page',
  components: {
    mInput,
    mButton
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
    background: #ccc;
    float: left;
  }

  .right-panel {
    height: 100%;
    margin-left: 480px;
    padding-top: 100px;

    .content {
      width: 500px;
      display: block;
      margin: 0 auto;
      text-align: left;

      .user-infos {
        margin-top: 50px;

        .inputs {
          margin: 30px auto;
        }
      }
    }
  }
}

</style>

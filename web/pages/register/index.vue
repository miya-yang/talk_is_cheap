<template>
  <div>
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
        <div class="block">
          <m-input
            class="left"
            placeholder="邮箱验证码"
            type="text"
            width="80%"
          ></m-input>
          <m-button
            class="register-btn"
            width="55%"
            fontSize="18px"
            display="inline-block"
          >发送短信验证码</m-button>
        </div>
        <m-button
          class="register-btn"
          height="60px"
        >立即注册</m-button>
      </div>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'

export default {
  name: 'register-page',
  layout: 'register',
  components: {
    mInput,
    mButton
  },
}
</script>

<style lang="scss" scoped>
.content {
  width: 500px;
  display: block;
  margin: 0 auto;
  text-align: left;

  .user-infos {
    margin-top: 50px;
    .inputs {
      margin: 15px auto;
    }
    .register-btn {
      margin-top: 30px;
    }
  }
}
</style>

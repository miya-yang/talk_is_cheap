<template>
  <div class="forget-content">
    <h1>验证邮箱</h1>
    <div class="form">
      <m-input
        class="inputs"
        placeholder="请输入TIC账号绑定的邮箱"
        :value="ticNumber"
      />
      <div class="block">
        <m-input
          class="left"
          placeholder="邮箱验证码"
          type="text"
          width="80%"
        ></m-input>
        <m-button
          class="register-btn"
          width="51%"
          fontSize="18px"
          display="inline-block"
        >发送短信验证码</m-button>
      </div>
      <m-button class="next-step-btn">
        下一步
      </m-button>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'
export default {
  name: 'forget-page-2',
  components: {
    mInput,
    mButton
  },
  data () {
    return {
      ticNumber: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.forget-content {
  width: 80%;
  height: 100%;
  margin: 50px auto 0 auto;

  h1 {
    font-size: 32px;
  }

  .form {
    margin-top: 50px;
    width: 450px;
  }

  .next-step-btn {
    margin-top: 20px;
    clear: both;
  }
}
</style>

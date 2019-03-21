<template>
  <div class="forget-content">
    <h1>重置密码</h1>
    <div class="form">
      <m-input
        class="inputs"
        placeholder="请输入新的密码"
        :value="ticNumber"
        type="password"
      />
      <m-input
        class="inputs"
        placeholder="请再次输入密码"
        :value="ticNumber"
        type="password"
      />
      <m-button>
        下一步
      </m-button>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'
export default {
  name: 'forget-page-3',
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
}
</style>

<template>
  <div class="forget-content">
    <h1>重置密码</h1>
    <div class="form">
      <m-input
        class="inputs"
        placeholder="请输入TIC账号绑定的邮箱"
        v-model.trim="email"
        :disabled="true"
      />
      <div class="block">
        <m-input
          class="left"
          placeholder="邮箱验证码"
          type="text"
          width="80%"
          v-model.trim="code"
          :maxLength="6"
        ></m-input>
        <m-button
          class="register-btn"
          width="51%"
          fontSize="18px"
          display="inline-block"
          :disabled="sendCodeBtnDisabled"
          @click="sendEmail"
        >{{ sendCodeBtnText }}</m-button>
      </div>
      <m-input
        class="inputs"
        placeholder="请输入新的密码"
        v-model.trim="password"
        type="password"
      />
      <m-input
        class="inputs"
        v-model.trim="repassword"
        placeholder="请再次输入密码"
        type="password"
      />
      <m-button
        @click="handleNextStep"
        :disabled="nextStepBtnDisabled"
      >
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
  methods: {
    sendEmail () {
      // 验证email格式
      if (!/^\w+@\w+.[a-zA-Z]+$/.test(this.email)) {
        this.$Message.error('邮箱格式有误')
        return false
      }
      this.sendCodeBtnDisabled = true
      this.$http.post(`?m=user&c=user&a=verify`, {
        mailto: this.email,
        type: 2
      }).then(res => {
        this.sendCodeBtnText = 60
        let sendCodeInterval = setInterval(() => {
          this.sendCodeBtnText--
          if (this.sendCodeBtnText === 0) {
            this.sendCodeBtnText = '发送邮箱验证码'
            this.sendCodeBtnDisabled = false
            clearInterval(sendCodeInterval)
          }
        }, 1000)
      }).catch(() => {
        this.sendCodeBtnDisabled = false
      })
    },
    verifyData () {
      let account = this.$route.query.account
      let email = this.$route.query.email
      if (!account || !email) {
        this.$router.push({ name: 'forget-step1' })
        return false
      }
      this.email = email
      this.ticNumber = account
    },
    handleNextStep () {
      // 验证数据
      if (!/^\w+@\w+.[a-zA-Z]+$/.test(this.email)) {
        this.$Message.error('邮箱格式有误')
        return false
      }
      if (!this.code) {
        this.$Message.error('请输入邮箱验证码')
        return false
      }
      if (!this.password || !this.repassword) {
        this.$Message.error('请输入新的密码')
        return false
      }
      if (this.password !== this.repassword) {
        this.$Message.error('两次密码不一致')
        return false
      }
      if (this.password.length < 6) {
        this.$Message.error('密码长度不得小于6位')
        return false
      }
      if (!this.ticNumber) {
        this.$Message.error('TIC账号有误')
        return false
      }
      this.nextStepBtnDisabled = true
      this.$http.post(`?m=user&c=user&a=change_password`, {
        email: this.email,
        account: this.ticNumber,
        password: this.password,
        code: this.code
      }).then(res => {
        this.nextStepBtnDisabled = false
        this.$router.push({ name: 'forget-step4' })
      }).catch(() => {
        this.nextStepBtnDisabled = false
      })
    }
  },
  data () {
    return {
      ticNumber: '',
      email: '',
      code: '',
      password: '',
      repassword: '',
      sendCodeBtnText: '发送邮箱验证码',
      sendCodeBtnDisabled: false,
      nextStepBtnDisabled: false
    }
  },
  mounted () {
    this.verifyData()
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

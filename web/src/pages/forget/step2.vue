<template>
  <div class="forget-content">
    <h1>验证邮箱</h1>
    <div class="form">
      <m-input
        class="inputs"
        placeholder="请输入TIC账号绑定的邮箱"
        v-model.trim="email"
      />
      <m-button
        class="next-step-btn"
        :disabled="nextStepBtnDisabled"
        @click="handleNextStep"
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
  name: 'forget-page-2',
  components: {
    mInput,
    mButton
  },
  data () {
    return {
      email: '',
      nextStepBtnDisabled: false
    }
  },
  methods: {
    verifyQuery () {
      let account = this.$route.query.account
      if (!account) {
        this.$router.push({ name: 'forget-step1' })
      }
    },
    handleNextStep () {
      // 验证数据格式
      if (this.code && !/^\w+@\w+.[a-zA-Z]+$/.test(this.email)) {
        this.$Message.error('请检查邮箱及验证码')
        return false
      }
      this.nextStepBtnDisabled = true
      this.$http.post(`?m=user&c=user&a=verify_email`, {
        email: this.email
      }).then(res => {
        this.nextStepBtnDisabled = false
        this.$router.push({ name: 'forget-step3', query: { account: this.$route.query.account, email: this.email } })
      }).catch(() => {
        this.nextStepBtnDisabled = false
      })
    }
  },
  mounted () {
    this.verifyQuery()
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

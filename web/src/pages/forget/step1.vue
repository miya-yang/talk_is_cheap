<template>
  <div class="forget-content">
    <h1>验证TIC账号</h1>
    <div class="form">
      <m-input
        class="inputs"
        placeholder="请输入TIC账号"
        v-model.trim="ticNumber"
        :maxLength="20"
      />
      <m-button
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
  name: 'forget-page-1',
  components: {
    mInput,
    mButton
  },
  data () {
    return {
      ticNumber: ''
    }
  },
  methods: {
    handleNextStep () {
      if (this.ticNumber === '') {
        this.$Message.error('请输入TIC账号')
      } else {
        this.$router.push({ name: 'forget-step2', query: { account: this.ticNumber } })
      }
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

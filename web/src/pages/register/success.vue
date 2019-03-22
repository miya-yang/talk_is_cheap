<template>
  <div class="success">
    <h2>您的 TIC 账号为 <span class="account-number">{{ ticNumber }}</span></h2>
    <h4>感谢注册，您可以使用 <span class="account-number">TIC 账号</span> 或者 <span class="account-number">邮箱账号</span> 登录</h4>
    <h5>:)</h5>
  </div>
</template>

<script>
export default {
  name: 'register-success',
  data () {
    return {
      ticNumber: ''
    }
  },
  methods: {
    getRegisterInfo () {
      let registerInfo = sessionStorage.getItem('register_info')
      if (registerInfo) {
        registerInfo = JSON.parse(registerInfo)
        this.ticNumber = registerInfo.account
      } else {
        this.$router.push({ name: 'register-index' })
      }
    }
  },
  mounted () {
    this.getRegisterInfo()
  }
}
</script>

<style lang="scss" scoped>
.success {
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .account-number {
    font-family: 'Microsoft Yahei';
    color: #ff0000;
  }
}
</style>

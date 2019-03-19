<template>
  <div class="login-panel panel">
    <title-bar
      :hasScaleBtn="false"
    >
    </title-bar>
    <img class="login-background" src="../../assets/skin/login-background.jpg">
    <div class="userinfo-inputs login-pages-content">
      <Input class="input no-drag" autofocus v-model.trim="users.username" placeholder="TIC账号 / 邮箱" :maxlength="50" clearable />
      <Input class="input no-drag" type="password" v-model.trim="users.password" placeholder="密码" :maxlength="50" clearable @keyup.enter.native="hLoginBtn" />
      <Button class="login-btn no-drag" type="success" :loading="isLoading" long @click="hLoginBtn">登录</Button>
    </div>
    <div class="bottom-menubar login-pages-content">
      <a class="menu-item no-drag" href="javascript:;">注册账号</a>
      <a class="menu-item no-drag" href="javascript:;">找回密码</a>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import events from '@/events'

export default {
  name: 'login',
  components: {
    TitleBar
  },
  data () {
    return {
      isLoading: false,
      users: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    hLoginBtn () {
      // 验证数据
      if (this.users.username === '' || this.users.password === '') {
        this.$Message.error('请输入账号或密码')
        return false
      }
      this.isLoading = true
      this.$http.post('?m=user&c=user&a=login', {
        username: this.users.username,
        password: this.users.password
      }).then(res => {
        // 登录成功
        this.isLoading = false
        this.$store.dispatch('setUserNickname', res.data.nickname)
        this.$store.dispatch('setUserAccount', res.data.account)
        this.$store.dispatch('setUserId', res.data.id)
        this.$store.dispatch('setUserPortrait', res.data.portrait)
        this.$router.push({ name: 'message-page' })
        events.hLoginEvent()
      }).catch(res => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.login-panel {
  overflow: hidden;
  -webkit-app-region: drag;
  position: absolute;

  .login-background {
    width: 100%;
    height: 185px;
  }

  .userinfo-inputs {
    .input {
      margin-top: 5px;
    }

    .login-btn {
      letter-spacing: 15px;
      text-indent: 15px;
      margin-top: 10px;
    }
  }

  .bottom-menubar {
    text-align: center;
    line-height: 25px;

    .menu-item {
      margin: 0 5px;
    }
  }
}
</style>

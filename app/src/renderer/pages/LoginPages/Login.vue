<template>
  <div class="login-panel panel">
    <title-bar
      :hasScaleBtn="false"
    >
    </title-bar>
    <img class="login-background" src="../../assets/skin/login-background.jpg">
    <div class="userinfo-inputs login-pages-content">
      <Input class="input no-drag" autofocus v-model.trim="users.username" placeholder="账号" clearable />
      <Input class="input no-drag" type="password" v-model.trim="users.password" placeholder="密码" clearable />
      <Button class="login-btn no-drag" type="success" long @click="hLoginBtn">登录</Button>
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
      users: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    hLoginBtn () {
      this.$router.push({ name: 'message-page' })
      events.hLoginEvent()
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

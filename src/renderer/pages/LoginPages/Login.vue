<template>
  <div class="login-panel">
    <title-bar
      :hasScaleBtn="false"
    >
    </title-bar>
    <img class="login-background" src="../../assets/skin/login-background.jpg">
    <div class="userinfo-inputs content">
      <Input class="input no-drag" autofocus v-model.trim="users.username" placeholder="账号" clearable />
      <Input class="input no-drag" type="password" v-model.trim="users.password" placeholder="密码" clearable />
      <Button class="login-btn no-drag" type="success" long>登录</Button>
    </div>
    <div class="bottom-menubar content">
      <router-link class="menu-item no-drag" :to="{ name: 'register-page' }">注册账号</router-link>
      <a class="menu-item no-drag" href="javascript:;">找回密码</a>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
export default {
  name: 'Login',
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
  }
}
</script>

<style lang="scss" scoped>
.login-panel {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-app-region: drag;
  position: absolute;

  .login-background {
    width: 100%;
    height: 185px;
  }

  .content {
    display: block;
    width: 60%;
    margin: 0 auto;
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

.no-drag {
  -webkit-app-region: no-drag;
}
</style>

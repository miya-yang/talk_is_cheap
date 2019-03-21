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
          v-model.trim="nickname.value"
          :tip="nickname.tip"
          @blur="handleBlur('nickname')"
        ></m-input>
        <m-input
          class="inputs"
          placeholder="密码"
          type="password"
          v-model.trim="password.value"
          :tip="password.tip"
          :maxLength="20"
          @blur="handleBlur('password')"
        ></m-input>
        <m-input
          class="inputs"
          placeholder="邮箱"
          type="email"
          v-model.trim="email.value"
          :tip="email.tip"
          :maxLength="50"
          @blur="handleBlur('email')"
        ></m-input>
        <div class="block">
          <m-input
            class="left"
            placeholder="邮箱验证码"
            type="text"
            width="80%"
            :maxLength="6"
            v-model.trim="code.value"
            @blur="handleBlur('code')"
          ></m-input>
          <m-button
            class="register-btn"
            width="55%"
            fontSize="18px"
            display="inline-block"
            @click="handleSendCode"
            :disabled="sendCodeBtnDisabled"
          >{{ sendCodeBtnText }}</m-button>
        </div>
        <m-button
          class="register-btn"
          height="60px"
          @click="handleRegister"
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
  data () {
    return {
      nickname: {
        value: '',
        tip: ''
      },
      password: {
        value: '',
        tip: ''
      },
      email: {
        value: '',
        tip: '可通过该邮箱找回密码'
      },
      code: {
        value: '',
        tip: ''
      },
      dataVerify: [false, false, false, false],
      verifyCodeList: {
        nickname: 0,
        password: 1,
        email: 2,
        code: 3
      },
      sendCodeBtnText: '发送短信验证码',
      sendCodeBtnDisabled: false
    }
  },
  components: {
    mInput,
    mButton
  },
  methods: {
    handleBlur (type) {
      if (this[type].value === '') {
        this.dataVerify[this.verifyCodeList[type]] = false
        switch (type) {
          case 'nickname':
            this[type].tip = '请输入用户昵称'
            break
          case 'password':
            this[type].tip = '请输入密码'
            break
          case 'email':
            this[type].tip = '请输入邮箱'
            break
          case 'code':
            this[type].tip = '请输入邮箱验证码'
            break
        }
      } else if (type === 'email' && !/^\w+@\w+.[a-zA-Z]+$/.test(this[type].value)) {
        this.dataVerify[this.verifyCodeList[type]] = false
        this[type].tip = '邮箱格式有误'
      } else {
        if (type === 'email') {
          this[type].tip = '可通过该邮箱找回密码'
        } else {
          this[type].tip = ''
        }
        this.dataVerify[this.verifyCodeList[type]] = true
      }
    },
    handleSendCode () {
      if (!this.dataVerify[this.verifyCodeList.email]) {
        this.$Message.error('请输入正确的邮箱')
      } else {
        // 调用发送邮箱验证码接口
        this.$http.post(`/api?m=user&c=user&a=verify`, {
          mailto: this.email.value,
          type: 1
        }).then(res => {
          console.log(res)
          this.sendCodeBtnText = 60
          this.sendCodeBtnDisabled = true
          let sendCodeInterval = setInterval(() => {
            this.sendCodeBtnText--
            if (this.sendCodeBtnText === 0) {
              this.sendCodeBtnText = '发送短信验证码'
              this.sendCodeBtnDisabled = false
              clearInterval(sendCodeInterval)
            }
          }, 1000)
        })
      }
    },
    handleRegister () {
      // 验证数据
      let verify = this.dataVerify.every((item, index) => {
        return item
      })
      if (!verify) {
        this.$Message.error('请确认注册信息')
        return false
      }
      this.$http.post(`/api?m=user&c=user&a=register`, {
        email: this.email.value,
        nickname: this.nickname.value,
        password: this.password.value,
        code: this.code.value
      }).then(res => {
        console.log(res)
        this.$Message.success('注册成功')
      })
    }
  }
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

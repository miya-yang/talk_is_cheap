<template>
  <div class="register-page">
    <div class="left-carousel" ref="leftCarousel"></div>
    <div class="right-panel">
      <div class="content">
        <h1>欢迎注册Talk Is Cheap</h1>
        <h4>使用TIC，简单你的沟通。</h4>
        <div class="user-infos">
          <m-input
            class="inputs"
            placeholder="昵称"
            :maxLength="10"
          ></m-input>
          <m-input
            class="inputs"
            placeholder="密码"
            type="password"
          ></m-input>
          <m-input
            class="inputs"
            placeholder="邮箱"
            type="email"
            tip="可通过该邮箱找回密码"
          ></m-input>
          <div class="block">
            <m-input
              class="left"
              placeholder="邮箱验证码"
              type="text"
              width="80%"
            ></m-input>
            <m-button
              class="register-btn"
              width="55%"
              fontSize="18px"
              display="inline-block"
            >发送短信验证码</m-button>
          </div>
          <m-button
            class="register-btn"
            height="60px"
          >立即注册</m-button>
        </div>
      </div>
      <div class="copyright">
        Copyright © 2015-2019 Tianjin University of Technology All Rights Reserved
      </div>
    </div>
  </div>
</template>

<script>
import mInput from '@/components/m-Input'
import mButton from '@/components/m-Button'
export default {
  name: 'register-page',
  components: {
    mInput,
    mButton
  },
  data () {
    return {
      imagesArr: [
        '/static/img/register-left-banner-1.jpg',
        '/static/img/register-left-banner-2.jpg',
        '/static/img/register-left-banner-3.jpg',
        '/static/img/register-left-banner-4.jpg'
      ]
    }
  },
  mounted () {
    this.toggleImages()
  },
  methods: {
    toggleImages () {
      let index = 0
      setInterval(() => {
        if (index === this.imagesArr.length - 1) {
          index = 0
        } else {
          index++
        }
        this.$refs.leftCarousel.style.background = `url(${this.imagesArr[index]})`
        this.$refs.leftCarousel.style.backgroundPosition = 'center center'
      }, 5000)
    }
  }
}
</script>

<style lang="scss" scoped>
.register-page {
  width: 100%;
  height: 100%;
  color: #000;

  .left-carousel {
    width: 480px;
    height: 100%;
    background: url('/static/img/register-left-banner-1.jpg');
    background-position: center center;
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    transition: all 1s;
  }

  @media screen and (max-width: 1000px) {
    .left-carousel {
      display: none;
      width: 0;
    }

    .right-panel {
      margin-left: 0 !important;
    }
  }

  .right-panel {
    height: 100%;
    margin-left: 480px;
    padding-top: 100px;
    transition: all .2s;

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

    .copyright {
      color: #aaa;
      margin: 100px auto 20px auto;
    }
  }
}

</style>

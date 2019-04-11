<template>
  <div class="match-result-page scroll">
    <Spin fix v-if="isLoading">
      <Icon type="ios-loading" size=18 class="spin-icon-load"></Icon>
      <div>正在匹配中...</div>
    </Spin>
    <div class="match-panel" v-else>
      <h1 class="match-tips">系统为您匹配到了如下用户</h1>
      <img :src="user.portrait" class="portrait">
      <p class="nickname">{{ user.nickname }}</p>
      <p class="intro">
        {{ call }}是个90后 <br>
        来自 <span style="color: #2b85e4;">{{ user.province }} {{ user.city }}</span> <br>
        是 <span style="color: #ff9900;">{{ user.zodiac }}</span> 呢 <br>
        想了解更多吗？ <br>
        快加好友聊天吧！
      </p>
      <div class="btns">
        <Button type="primary" size="large">加好友</Button>
        <Button type="warning" size="large">换一换</Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'match-result-page',
  data () {
    return {
      isLoading: true,
      user: {
        portrait: 'http://tic.codergzw.com/Public/img/portraits/5c8f529e83992.jpg',
        nickname: 'Miyang',
        sex: '女',
        birth: '2019.10.10',
        province: '北京市',
        city: '石景山区',
        zodiac: '狮子座'
      }
    }
  },
  computed: {
    call () {
      return this.user.sex === '男' ? '他' : '她'
    },
    age () {
      return this.user.birth.getFullYear().charAt(2)
    }
  },
  mounted () {
    this.matchLoading()
  },
  methods: {
    matchLoading () {
      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.match-result-page {
  height: 100%;
  overflow-y: auto;

  .match-panel {
    margin-top:20px;

    .match-tips {
      text-align: center;
      font-size: 14px;
      font-weight: 300;
      line-height: 28px;
    }
    .portrait {
      display: block;
      width: 200px;
      height: 200px;
      border-radius: 50%;
      margin: 0 auto;
    }
    .nickname {
      text-align: center;
      font-size: 26px;
      line-height: 52px;
    }
    .intro {
      width: 80%;
      margin: 0 auto;
    }
    .btns {
      margin: 20px auto;
      text-align: center;
    }
  }
}
.spin-icon-load{
  animation: ani-demo-spin 1s linear infinite;
}
@keyframes ani-demo-spin {
  from { transform: rotate(0deg); }
  50%  { transform: rotate(180deg); }
  to   { transform: rotate(360deg); }
}
</style>

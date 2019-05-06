<template>
  <div class="match-result-page scroll">
    <div class="match-panel">
      <Spin fix v-if="isLoading">
        <Icon type="ios-loading" size=18 class="spin-icon-load"></Icon>
        <div>正在匹配中...</div>
      </Spin>
      <div v-else-if="user.id">
        <h1 class="match-tips">系统为您匹配到了如下用户</h1>
        <img :src="user.portrait" class="portrait">
        <p class="nickname">{{ user.nickname }}</p>
        <p class="intro">
          你们的匹配度是<span>{{ user.matchscore }}</span> <br>
          {{ call }}是个{{ times }}后 <br>
          来自 <span style="color: #2b85e4;">{{ user.province }} {{ user.city }}</span> <br>
          是 <span style="color: #ff9900;">{{ user.zodiac }}</span> 呢 <br>
          想了解更多吗？ <br>
          快加好友聊天吧！
        </p>
      </div>
      <p class="no-match" style="text-align: center;" v-else>啊哦，暂时没有匹配到用户</p>
      <div class="btns" v-if="!isLoading">
        <Button
          type="primary"
          size="large"
          :disabled="disabled"
          @click="addFriends"
          v-if="user.id"
        >
        {{ addBtnText }}
        </Button>
        <Button type="warning" size="large" @click="matchLoading">换一换</Button>
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
        id: '',
        portrait: '',
        nickname: '',
        sex: '',
        birth: '',
        province: '',
        city: '',
        zodiac: '',
        matchscore: ''
      },
      addBtnText: '加好友',
      disabled: false
    }
  },
  computed: {
    call () {
      return this.user.sex === '男' ? '他' : '她'
    },
    age () {
      return this.user.birth.getFullYear().charAt(2)
    },
    times () {
      return `${this.user.birth.split('-')[0].substr(2, 1)}0`
    }
  },
  mounted () {
    this.matchLoading()
  },
  methods: {
    // 匹配用户
    matchLoading () {
      this.isLoading = true
      this.addBtnText = '加好友'
      this.disabled = false
      this.$http.post(`?m=matchuser&c=matchuser&a=system_match`).then(res => {
        let data = res.data
        if (data) {
          this.user.id = data.id
          this.user.portrait = data.portrait
          this.user.nickname = data.nickname
          this.user.sex = data.sex
          this.user.birth = data.birthday
          this.user.province = data.province
          this.user.city = data.city
          this.user.zodiac = data.constellation
          this.user.matchscore = data.matchscore
          setTimeout(() => {
            this.isLoading = false
          }, 2000)
        } else {
          this.user = {
            id: '',
            portrait: '',
            nickname: '',
            sex: '',
            birth: '',
            province: '',
            city: '',
            zodiac: '',
            matchscore: ''
          }
        }
      })
    },
    // 添加好友
    addFriends () {
      this.$http.post(`?m=friend&c=friend&a=add_approval`, {
        touserid: this.user.id
      }).then(res => {
        this.addBtnText = '已发送申请'
        this.disabled = true
        this.$Message.success(res.message)
      }).catch(() => {
        this.addBtnText = '已是好友'
        this.disabled = true
      })
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

<template>
  <div class="fans-item">
    <Avatar
      shape="square"
      icon="ios-person"
      size="large"
      :src="portrait"
      :title="nickname"
      style="margin: 0 auto;display: block;"
    />
    <Button
      type="primary"
      size="small"
      style="display: block; margin: 5px 0;"
      :disabled="followBtnDisabled"
      v-if="type === 'fans'"
      @click="handleFollow"
    >
    {{ followBtnTitle }}
    </Button>
  </div>
</template>

<script>
export default {
  name: 'fans-item',
  data () {
    return {
      followBtnTitle: '关注',
      followBtnDisabled: false
    }
  },
  props: {
    userId: {
      type: String,
      default: ''
    },
    nickname: {
      type: String,
      default: ''
    },
    portrait: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'follow'
    },
    isFans: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.initBtnStatus()
  },
  methods: {
    // 初始化按钮样式
    initBtnStatus () {
      if (this.isFans) {
        this.followBtnTitle = '已关注'
        this.followBtnDisabled = true
      }
    },
    handleFollow () {
      this.$http.post(`?m=fans&c=fans&a=become_fans`, {
        touserid: this.userId
      }).then(res => {
        this.followBtnTitle = '已关注'
        this.followBtnDisabled = true
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.fans-item {
  width: 52px;
}
</style>

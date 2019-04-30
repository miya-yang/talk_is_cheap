<template>
  <div class="circle-item">
    <img
      :src="portrait"
      :title="title"
      class="portrait"
    >
    <div class="infos">
      <h2 class="title single-line">{{ title }}</h2>
      <p class="users single-line">共发布了 <span style="color: #2db7f5;">{{ circleCount }}</span> 个帖子</p>
      <p class="users single-line">有 <span style="color: #ed4014;">{{ userCount }}</span> 个用户活跃</p>
    </div>
    <div class="btns">
      <Button
        type="info"
        :disabled="joinBtnDisabled"
        v-if="type === 'join'"
        @click="handleJoinCircle"
      >
      {{ joinBtnTitle }}
      </Button>
      <Button
        type="error"
        v-else
        @click="handleQuitCircle"
      >
      退出
      </Button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circle-item',
  data () {
    return {
      joinBtnTitle: '加入',
      joinBtnDisabled: false
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    portrait: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    circleCount: {
      type: Number,
      default: 0
    },
    userCount: {
      type: Number,
      default: 0
    },
    type: {
      type: String,
      default: 'join'
    }
  },
  methods: {
    // 加入某个圈子
    handleJoinCircle () {
      this.$http.post(`?m=circle&c=circle&a=join_circle`, {
        circleid: this.id
      }).then(res => {
        this.$Message.success(`加入 ${this.title} 圈子成功！`)
        this.joinBtnDisabled = true
        this.joinBtnTitle = '加入成功'
      }).catch(() => {
        this.joinBtnTitle = '已加入'
        this.joinBtnDisabled = true
      })
    },
    // 退出某个圈子
    handleQuitCircle () {
      this.$http.post(`?m=circle&c=circle&a=out_circle`, {
        circleid: this.id
      }).then(res => {
        this.$Message.success(`退出 ${this.title} 圈子成功！`)
        this.$emit('refreshHasJoin')
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.circle-item {
  width: 150px;
  .portrait {
    width: 150px;
    height: 150px;
    border-radius: 10px;
    margin: 0 auto;
    display: block;
  }
  .title {
    text-align: center;
    font-weight: 300;
    font-size: 14px;
  }
  .users {
    text-align: center;
    line-height: 20px;
    color: #aaa;
  }
  .btns {
    text-align: center;
  }
}
</style>

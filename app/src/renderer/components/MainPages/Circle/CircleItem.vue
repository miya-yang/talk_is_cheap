<template>
  <div class="circle-item">
    <img
      :src="portrait"
      :title="title"
      class="portrait"
      :class="{ pointer: this.type !== 'join' }"
      @click="handleShowContent"
    >
    <div class="infos">
      <h2 class="title single-line" v-if="this.type === 'join'">{{ title }}</h2>
      <a
        class="title single-line"
        href="javascript:;"
        @click="handleShowContent"
        v-else
      >
      {{ title }}
      </a>
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
    <!-- circle-content-begin -->
    <Modal
      v-model="circleContentVisible"
      fullscreen
      footer-hide
      :title="circleContentTitle"
    >
      <div class="scroll">
        <p v-if="circleContentList.length === 0" style="text-align: center;">啊哦，这个圈子还没有人发过帖子呢</p>
        <circle-content-item
          v-for="item of circleContentList"
          :key="item.id"
          :time="item.createtimes"
          :img="item.pictures"
          :content="item.content"
          :nickname="item.nickname"
          :portrait="item.portrait"
          :isFans="item.isfans"
          :userId="item.userid"
          :isLike="item.islike"
          :likeList="item.likes"
          :id="item.id"
          :commentList="item.remarks"
          @handleRefreshList="handleShowContent"
        />
      </div>
    </Modal>
    <!-- circle-content-end -->
  </div>
</template>

<script>
import circleContentItem from '@/components/MainPages/Circle/CircleContentItem'
export default {
  name: 'circle-item',
  components: {
    circleContentItem
  },
  data () {
    return {
      joinBtnTitle: '加入',
      joinBtnDisabled: false,
      circleContentVisible: false,
      circleContentList: []
    }
  },
  computed: {
    circleContentTitle () {
      return `${this.title}圈儿`
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
    },
    // 显示全部帖子内容
    handleShowContent () {
      // 仅在加入圈子后才能看到内容
      if (this.type !== 'join') {
        this.circleContentVisible = true
        // 获取全部帖子内容
        this.$http.post(`?m=circle&c=circle&a=get_circle`, {
          circleid: this.id
        }).then(res => {
          this.circleContentList = res.data
        })
      }
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
    display: block;
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
  .pointer {
    cursor: pointer;
  }
}
</style>

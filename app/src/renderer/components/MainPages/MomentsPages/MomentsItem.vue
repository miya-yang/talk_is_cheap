<template>
  <div class="moments-item">
    <div class="userinfo">
      <Avatar :src="portrait" />
      <span
        class="nickname"
        :title="id"
      >
      {{ nickname }}
      </span>
      <span class="time">{{ time }}</span>
    </div>
    <div class="content">{{ content }}</div>
    <img
      class="img"
      v-if="img !== ''"
      :src="img"
    >
    <div class="operator">
      <Icon
        :size="20"
        class="operator-btn"
        :type="isLike ? 'ios-thumbs-up' : 'ios-thumbs-up-outline'"
        title="赞"
        @click="handleStarBtn"
      />
      <Icon
        :size="20"
        class="operator-btn"
        :type="isShowCommentInput ? 'ios-chatboxes' : 'ios-chatboxes-outline'"
        title="评论"
        @click="isShowCommentInput = !isShowCommentInput"
      />
    </div>
    <Input
      v-if="isShowCommentInput"
      class="comment-input"
      v-model.trim="commentValue"
      placeholder="请输入评论内容 按回车键发送"
      @keydown.enter.native="handleComment"
      ref="commentInput"
    />
    <div
      v-if="formatStarList !== ''"
      class="star-list"
    >
      {{ formatStarList }} 点了赞
    </div>
    <div
      v-else
      class="star-list"
    >
      还没有人赞
    </div>
    <div
      v-if="commentList"
      class="comment-list"
    >
      <div
        class="comment-item"
        v-for="item of commentList"
        :key="item.remarkid"
      >
        <Icon
          v-if="item.userid === userid"
          class="del-comment-btn"
          type="ios-trash"
          :size="16"
          @click="handleDeleteComment(item.remarkid)"
        />
        {{ item.nickname }}: {{ item.content }}
      </div>
    </div>
    <Modal
      :width="150"
      v-model="isShowDeleteComment"
      title="删除确认"
      @on-ok="handleCommitDeleteComment"
      @on-cancel="handleCancelDeleteComment">
      <p>确认删除该评论吗？</p>
    </Modal>
  </div>
</template>

<script>
export default {
  name: 'moments-item',
  data () {
    return {
      isShowCommentInput: false,
      commentValue: '',
      isShowDeleteComment: false,
      remarkid: '',
      userid: this.$store.getters.userId
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
    nickname: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    },
    isLike: {
      type: Boolean,
      default: ''
    },
    likeList: {
      default: ''
    },
    commentList: {
      default: ''
    }
  },
  computed: {
    formatStarList () {
      let starArr = []
      for (let item in this.likeList) {
        starArr.push(this.likeList[item].nickname)
      }
      return starArr.join(', ')
    }
  },
  methods: {
    // 点赞和取消点赞功能
    handleStarBtn () {
      const url = this.isLike ? '?m=moments&c=moments&a=unlike_moments' : '?m=moments&c=moments&a=like_moments'
      this.$http.post(url, {
        momentsid: this.id
      }).then(res => {
        this.$Message.success(res.message)
        this.$emit('handleRefreshList')
      })
    },
    // 评论功能
    handleComment () {
      if (this.commentValue === '') {
        this.$Message.error('请先输入评论内容')
        return false
      }
      this.$http.post(`?m=moments&c=moments&a=remark_moments`, {
        momentsid: this.id,
        content: this.commentValue
      }).then(res => {
        this.$Message.success(res.message)
        this.commentValue = ''
        this.$emit('handleRefreshList')
      })
    },
    // 删除评论功能
    handleDeleteComment (id) {
      this.isShowDeleteComment = true
      this.remarkid = id
    },
    // 确认删除评论
    handleCommitDeleteComment () {
      this.$http.post(`?m=moments&c=moments&a=delremark`, {
        remarkid: this.remarkid
      }).then(res => {
        this.$Message.success('删除成功')
        this.$emit('handleRefreshList')
      })
    },
    // 取消删除评论
    handleCancelDeleteComment () {
      this.isShowDeleteComment = false
      this.remarkid = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.moments-item {
  padding: 10px 0;
  margin: 10px;
  border-bottom: 1px solid #efefef;

  .userinfo {
    line-height: 35px;
    .nickname {
      margin-left: 5px;
    }
    .time {
      float: right;
      color: #aaa;
    }
  }
  .content {
    margin: 10px;
  }
  .img {
    display: block;
    width: 60%;
    margin: 0 auto;
  }
  .operator {
    text-align: right;
    margin-right: 10px;
    margin-top: 10px;
    .operator-btn {
      margin-left: 10px;
      cursor: pointer;
    }
  }
  .star-list {
    color: #ff9900;
  }
  .comment-input {
    margin: 10px 0;
  }
  .comment-list {
    padding: 10px 0;
    border-top: 1px solid #eaeaea;
  }
  .del-comment-btn {
    cursor: pointer;
  }
}
</style>

<template>
  <div class="friends-panel remove-titlebar-content">
    <header>
      <div class="info">
        <h2 class="title">
          {{ this.$route.params.isGroup ? group.name : title }}
          <Icon type="md-female" color="pink" v-if="sex === 'female'" />
          <Icon type="md-male" color="blue" v-else-if="sex === 'male'" />
        </h2>
        <p class="intro">
          {{ intro }}
        </p>
        <Button
          class="delete-friends-btn"
          type="error"
          @click="handleClickDeleteBtn"
        >
        {{ this.$route.params.isGroup ? '退出群聊' : '删除该好友' }}
        </Button>
      </div>
      <img :src="portrait" class="avatar" />
    </header>
    <div class="content">
      <Form :label-width="80" v-if="!this.$route.params.isGroup">
        <FormItem label="地区">
          {{ address }}
        </FormItem>
        <FormItem label="TIC账号">
          {{ tic }}
        </FormItem>
        <FormItem label="星座">
          {{ zodiac }}
        </FormItem>
      </Form>
      <Form :label-width="80" v-else>
        <FormItem label="人数">
          {{ group.count }}
        </FormItem>
        <FormItem label="创建时间">
          {{ group.createtimes }}
        </FormItem>
        <FormItem label="成员列表">
          <Avatar
            v-for="(item, index) of group.members"
            :key="index"
            shape="square"
            :src="item.portrait"
            :title="item.nickname"
            icon="ios-person"
            class="member-item"
          />
        </FormItem>
      </Form>
    </div>
    <Button
      class="send-message-btn"
      type="success"
      @click="handleSendMessage"
    >
    发消息
    </Button>
  </div>
</template>

<script>
export default {
  name: 'friends-info-page',
  data () {
    return {
      userId: '',
      title: '',
      sex: '',
      intro: '',
      portrait: '',
      address: '',
      tic: '',
      zodiac: '',
      group: {
        name: '',
        count: 0,
        createtimes: '',
        members: []
      }
    }
  },
  watch: {
    '$route' () {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      this.userId = ''
      this.title = ''
      this.sex = ''
      this.intro = ''
      this.portrait = ''
      this.address = ''
      this.tic = ''
      this.zodiac = ''
      this.group = {
        name: '',
        count: 0,
        createtimes: '',
        members: []
      }
      if (this.$route.params.isGroup) {
        this.initGroup()
      } else {
        this.initUserId()
      }
    },
    // 初始化用户信息
    initUserId () {
      this.userId = this.$route.params.id
      this.$http.post(`?m=user&c=user&a=get_userinfo_byid`, {
        userid: this.userId
      }).then(res => {
        this.title = res.data.nickname
        this.sex = res.data.sex
        this.intro = res.data.describe
        this.portrait = res.data.portrait
        this.address = `${res.data.province} ${res.data.city}`
        this.tic = res.data.account
        this.zodiac = res.data.constellation
      })
    },
    // 初始化群组信息
    initGroup () {
      this.userId = this.$route.params.id
      this.$http.post(`?m=chat&c=chat&a=get_groupinfo`, {
        groupid: this.userId
      }).then(res => {
        this.portrait = 'static/group-portrait.png'
        this.group = {
          name: res.data.group_name,
          count: res.data.users.length,
          createtimes: res.data.createtimes,
          members: res.data.users
        }
      })
    },
    // 点击发送消息按钮
    handleSendMessage () {
      let params = {
        action: 2,
        touserid: this.userId,
        type: this.$route.params.isGroup ? 2 : 1 // 如果是群 则传递 2 / 1 为私聊
      }
      this.$http.post(`?m=chat&c=chat&a=update_chatList`, params).then(res => {
        this.$router.push({ name: 'message-chat-page', params: { id: this.userId } })
      })
    },
    // 退出群聊 / 删除好友按钮
    handleClickDeleteBtn () {
      // 如果是群聊
      if (this.$route.params.isGroup) {
        this.$Modal.confirm({
          title: '删除提示',
          content: '<p>确认要退出该群组吗？</p>',
          onOk: () => {
            this.$http.post(`?m=chat&c=chat&a=out_group`, {
              groupid: this.userId
            }).then(res => {
              this.$Message.success(res.message)
              this.$router.push({ name: 'friends-page' })
            })
          },
          onCancel: () => {}
        })
      } else {}
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.friends-panel {
  background: #eee;
  position: relative;
  overflow: hidden;
  padding: 60px 20px;

  header {
    display: flex;
    padding-top: 100px;
    padding-bottom: 30px;

    .info {
      flex: 1;

      .title {
        font-weight: 400;
      }

      .intro {
        margin-top: 5px;
        font-size: 14px;
        color: #aaa;
      }
    }

    .avatar {
      width: 80px;
      height: 80px;
      border-radius: 5px;
      margin-left: 5px;
      -webkit-user-select: none;
    }
  }

  .content {
    padding-top: 30px;
    padding-bottom: 30px;
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
  }

  .delete-friends-btn {
    margin-top: 10px;
  }

  .send-message-btn {
    display: block;
    padding: 5px 50px;
    margin: 30px auto;
  }
  .member-item {
    margin: 5px;
  }
}

.ivu-form-item {
  margin-bottom: 0 !important;
}
</style>

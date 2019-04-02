<template>
  <div class="friends-panel remove-titlebar-content">
    <header>
      <div class="info">
        <h2 class="title">
          {{ title }}
          <Icon type="md-female" color="pink" v-if="sex === 'female'" />
          <Icon type="md-male" color="blue" v-else-if="sex === 'male'" />
        </h2>
        <p class="intro">
          {{ intro }}
        </p>
        <Button class="delete-friends-btn" type="error">删除该好友</Button>
      </div>
      <img :src="portrait" class="avatar" />
    </header>
    <div class="content">
      <Form :label-width="80">
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
    </div>
    <Button class="send-message-btn" type="success">发消息</Button>
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
      zodiac: ''
    }
  },
  watch: {
    '$route' () {
      this.initUserId()
    }
  },
  mounted () {
    this.initUserId()
  },
  methods: {
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
}

.ivu-form-item {
  margin-bottom: 0 !important;
}
</style>

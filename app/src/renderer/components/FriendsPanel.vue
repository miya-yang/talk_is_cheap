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
  name: 'friends-info-panel',
  props: {
    title: {
      type: String,
      default: '测试名称'
    },
    sex: {
      type: String,
      default: 'male'
    },
    intro: {
      type: String,
      default: '别的我不会，什么我都不会。'
    },
    portrait: {
      type: String,
      default: 'imgs/portrait--test.png'
    },
    address: {
      type: String,
      default: '北京 石景山'
    },
    tic: {
      type: String,
      default: '511287680'
    },
    zodiac: {
      type: String,
      default: '狮子座'
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

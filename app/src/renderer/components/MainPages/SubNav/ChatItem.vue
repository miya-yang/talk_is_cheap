<template>
  <li class="chat-item" :class="{ 'chat-active': isActive }">
    <Avatar :src="portrait" class="avatar" icon="ios-person" size="large" shape="square" />
    <div class="chat-info">
      <span class="chat-title single-line">{{ title }}</span>
      <span class="chat-message single-line">{{ message }}</span>
      <span class="chat-time single-line">{{ time }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'chat-item',
  props: {
    portrait: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: '123'
    },
    time: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.chat-item {
  list-style: none;
  width: 100%;
  height: 65px;
  padding: 12.5px 20px;
  cursor: default;
  -webkit-user-select: none;

  .avatar {
    float: left;
  }

  .chat-info {
    display: block;
    width: 100%;
    padding-left: 50px;
    position: relative;

    .chat-title {
      display: block;
      width: 100px;
      font-size: 14px;
      color: #000;
    }

    .chat-message {
      display: block;
      width: 155px;
      line-height: 22px;
      color: #aaa;
    }

    .chat-time {
      position: absolute;
      right: 0;
      top: 0;
      color: #aaa;
    }
  }
}

.chat-item:hover {
  background: #eaeaea;
}

.chat-active {
  background: #d3d3d3 !important;
}
</style>

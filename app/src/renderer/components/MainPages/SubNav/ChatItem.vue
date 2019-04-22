<template>
  <router-link :to="{ name: linkName, params: { isGroup: isGroup, id: chatId } }">
    <li id="chat-item" class="chat-item" :class="{ 'chat-active': isActive, 'top-active': isTop }" :chat-id="chatId" :isGroup="isGroup" :is-top="isTop">
      <Badge :dot="!isRead && !isGroup">
        <Avatar
          :src="portrait"
          class="avatar"
          :icon="icon"
          size="large"
          shape="square"
        />
      </Badge>
      <div class="chat-info">
        <span class="chat-title single-line">{{ title }}</span>
        <span class="chat-message single-line">{{ message }}</span>
        <span class="chat-time single-line">{{ time }}</span>
      </div>
    </li>
  </router-link>
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
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    isActive: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: 'ios-person'
    },
    chatId: {
      type: String,
      default: ''
    },
    linkName: {
      type: String,
      default: 'chat-page'
    },
    isTop: {
      type: Boolean,
      default: false
    },
    isGroup: {
      type: Boolean,
      default: false
    },
    isRead: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.chat-item {
  display: flex;
  list-style: none;
  width: 100%;
  height: 65px;
  padding: 12.5px 10px;
  cursor: default;
  -webkit-user-select: none;

  .chat-info {
    flex: 1;
    margin-left: 10px;
    position: relative;

    .chat-title {
      display: block;
      width: 120px;
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

.top-active {
  background: #c3c3c3 !important;
}

.chat-active {
  background: #d3d3d3 !important;
}
</style>

<template>
  <li id="chat-item" class="chat-item" :class="{ 'chat-active': isActive }" @contextmenu="hcRightChatItem" :chat-id="chatId">
    <Avatar :src="portrait" class="avatar" :icon="icon" size="large" shape="square" />
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
    }
  },
  methods: {
    hcRightChatItem (e) {
      let mouseX = `${e.clientX}px`
      let mouseY = `${e.clientY}px`
      this.$store.dispatch('showChatRightHandMenu', { mouseX, mouseY })
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

.chat-active {
  background: #d3d3d3 !important;
}
</style>

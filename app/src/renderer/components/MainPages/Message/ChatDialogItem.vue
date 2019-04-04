<template>
  <li class="chat-dialog-item" v-if="userId && message">
    <div class="top-message">
      <span class="time">
        {{ time }}
      </span>
      <span class="username single-line" v-if="!isReverse">
        {{ username }}
      </span>
    </div>

    <div class="flex" :class="{ 'flex-reverse': isReverse }">
      <Avatar class="portrait" :src="portrait" />
      <div class="dialog" :class="{ 'flex-item-reverse': isReverse, 'dialog-margin': isReverse === false, 'dialog-margin-reverse': isReverse }">
        <div class="message" v-html="message"></div>
        <span class="triangle-base" :class="{ 'triangle': isReverse === false, 'triangle-reverse': isReverse }"></span>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  name: 'chat-dialog-item',
  props: {
    userId: {
      type: String,
      default: ''
    },
    username: {
      type: String,
      default: ''
    },
    portrait: {
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
    }
  },
  computed: {
    isReverse () {
      return this.userId === 'abc'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.chat-dialog-item {
  display: inline-block;
  font-size: 14px;
  width: 100%;
  margin-bottom: 10px;

  .top-message {
    position: relative;
    text-align: center;
    color: #bbb;
    font-size: 12px;
    margin-bottom: 5px;

    .username {
      text-align: left;
      width: 100px;
      position: absolute;
      left: 0;
      color: #aaa;
    }
  }

  .flex {
    display: flex;
  }
  
  .portrait {
    -webkit-user-select: none;
  }

  .dialog {
    flex: 1;
    position: relative;

    .message {
      text-align: left;
      display: inline-block;
      background: #fff;
      padding: 10px;
      border-radius: 5px;
    }

    .triangle-base {
      position: absolute;
      width: 0;
      height: 0;
      top: 15px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
    }

    .triangle {
      left: -10px;
      border-right: 5px solid #fff;
      border-left: 5px solid transparent;
    }

    .triangle-reverse {
      right: -10px;
      border-left: 5px solid #fff;
      border-right: 5px solid transparent;
    }
  }
}

.flex-reverse {
  flex-direction: row-reverse;
}

.flex-item-reverse {
  text-align: right;
}

.dialog:hover .message {
  background: #f8f8f8;
}
.dialog:hover .triangle {
  border-right-color: #f8f8f8;
}

.dialog-margin-reverse {
  margin-right: 15px;
}

.dialog-margin {
  margin-left: 15px;
}
</style>

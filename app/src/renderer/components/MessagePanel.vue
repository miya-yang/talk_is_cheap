<template>
  <div class="message-panel remove-titlebar-content">
    <div class="chat-title-panel">
      <h2 class="chat-title single-line">2019届华信软件学院2019届华信软件学院</h2>
      <span class="chat-group-count">（256）</span>
    </div>
    <Split
      v-model="system.panel.split" 
      :min="system.panel.min" 
      :max="system.panel.max"
      mode="vertical"
    >
      <div class="chat-dialog scroll" slot="top">
        <ul>
          <chat-dialog-item 
            v-for="(item) of chatList"
            :key="item.id"
            :userId="item.userId"
            :portrait="item.portrait"
            :message="item.message"
            :time="item.time"
            :username="item.username"
          />
        </ul>
      </div>
      <div class="chat-input-panel" slot="bottom">
        <div class="chat-input-panel-menu">
          <ul>
            <li 
              class="menu-list"
              v-for="(item, index) of system.chatMenu"
              :key="index"
            >
              <a 
                href="javascript:;"
                @click="handleListenCall(item.handleMethods)"
              >
                <Icon 
                  class="menu-item" 
                  :type="item.icon" 
                  :title="item.title"
                />
              </a>
            </li>
          </ul>
          <Button class="send-message-btn" size="small" type="primary" title="发送消息">发送</Button>
        </div>
        <textarea class="chat-input-panel-textarea scroll"></textarea>
      </div>
    </Split>
  </div>
</template>

<script>
import ChatDialogItem from '@/components/MainPages/Message/ChatDialogItem'
export default {
  name: 'message-panel',
  components: {
    ChatDialogItem
  },
  data () {
    return {
      system: {
        panel: {
          split: 0.65,
          min: '50px',
          max: '200px'
        },
        chatMenu: [
          {
            title: '表情',
            icon: 'ios-outlet-outline',
            handleMethods: ''
          },
          {
            title: '历史记录',
            icon: 'ios-chatboxes-outline',
            handleMethods: ''
          }
        ]
      },
      chatList: [
        {
          id: 1,
          userId: 'abc',
          portrait: 'imgs/portrait--test.png',
          message: '晚上吃饭吗？',
          time: '03.11 18:10'
        },
        {
          id: 2,
          userId: 'cba',
          portrait: 'imgs/portrait--test.png',
          message: '你是饭桶吗？',
          time: '03.11 18:10'
        },
        {
          id: 3,
          userId: 'abc',
          portrait: 'imgs/portrait--test.png',
          message: '吃什么呢',
          time: '03.11 18:10'
        },
        {
          id: 4,
          userId: 'abc',
          portrait: 'imgs/portrait--test.png',
          message: '吃什么呢',
          time: '03.11 18:10'
        },
        {
          id: 5,
          userId: 'abc',
          portrait: 'imgs/portrait--test.png',
          message: '吃什么呢',
          time: '03.11 18:10'
        }
      ]
    }
  },
  methods: {
    handleListenCall (methods) {
      if (typeof methods === 'string' && methods !== '') {
        this[methods]()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-panel {
  display: flex;
  flex-direction: column;
  background: #eee;
  position: relative;
  overflow: hidden;

  .chat-title-panel {
    height: 53px;
    border-bottom: 1px solid #ccc;
    box-shadow: 0 1px 0 #ddd;
    display: flex;

    .chat-group-count {
      -webkit-user-select: none;
      cursor: default;
    }

    .chat-title {
      font-size: 24px;
      font-weight: 300;
      max-width: 80%;
      padding: 8px 0 8px 30px;
      font-family: 'Microsoft YaHei';
      cursor: pointer;
    }
  }
  .chat-dialog {
    flex: 1;
    padding: 20px;
    height: 100%;
    overflow: auto;
  }
  .chat-input-panel {
    display: flex;
    flex-direction: column;
    background: #fff;
    height: 100%;
    bottom: 0;
    left: 0;
    right: 0;
    padding-top: 6px;

    .chat-input-panel-menu {
      width: 100%;
      height: 40px;
      padding: 5px 0;
      display: flex;
      justify-content: space-between;

      .send-message-btn {
        margin-right: 10px;
        padding: 0 20px;
      }

      .menu-list {
        float: left;
        list-style: none;
        margin-left: 15px;

        .menu-item {
          font-size: 30px;
          width: 30px;
          height: 30px;
          color: #333;
        }
      }
    }

    .chat-input-panel-textarea {
      flex: 1;
      border: none;
      outline: none;
      width: 100%;
      overflow: auto;
      padding: 5px 20px 0 20px;
      font-size: 16px;
      resize: none;
    }
  }

  .chat-group-count {
    font-size: 14px;
    line-height: 60px;
    margin-left: 10px;
  }

}
</style>


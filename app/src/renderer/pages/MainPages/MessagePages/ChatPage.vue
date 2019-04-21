<template>
  <div class="message-chat-page remove-titlebar-content">
    <div class="chat-title-panel">
      <h2 class="chat-title single-line">{{ targetInfo.username }}</h2>
      <span
        class="chat-group-count"
        v-if="this.$route.params.isGroup"
      >
      （{{ targetInfo.count }}）
      </span>
    </div>
    <Split
      v-model="system.panel.split" 
      :min="system.panel.min" 
      :max="system.panel.max"
      mode="vertical"
    >
      <div class="chat-dialog scroll" slot="top" ref="messageBox">
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
                @click="hListenCall(item.hMethods)"
              >
                <Icon 
                  class="menu-item" 
                  :type="item.icon" 
                  :title="item.title"
                />
              </a>
            </li>
          </ul>
          <sticker-panel
            class="sticker-panel"
            v-if="isShowStickerPanel"
            @handleAddSticker="handleAddSticker"
          />
          <Button
            class="send-message-btn"
            size="small"
            type="primary"
            title="发送消息"
            @click="handleSendMessage"
          >发送</Button>
        </div>
        <textarea
          class="chat-input-panel-textarea scroll"
          v-model.trim="message"
        ></textarea>
      </div>
    </Split>
  </div>
</template>

<script>
import ChatDialogItem from '@/components/MainPages/Message/ChatDialogItem'
import StickerPanel from '@/components/MainPages/Message/StickerPanel'
import stickerList from '@/data/sticker-list.js'
export default {
  name: 'message-chat-page',
  components: {
    ChatDialogItem,
    StickerPanel
  },
  data () {
    return {
      isShowStickerPanel: false,
      historyCount: 10,
      targetInfo: {
        username: '',
        count: 0
      },
      message: '',
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
            hMethods: 'handleOpenStickerPanel'
          },
          {
            title: '历史记录',
            icon: 'ios-chatboxes-outline',
            hMethods: ''
          }
        ]
      },
      chatList: [
        // {
        //   id: 1,
        //   userId: 'abc',
        //   portrait: 'imgs/portrait--test.png',
        //   message: '晚上吃饭吗？',
        //   time: '03.11 18:10'
        // }
      ]
    }
  },
  computed: {
    targetId () {
      return this.$route.params.id
    }
  },
  watch: {
    $route () {
      console.log('watch route running...')
      this.init()
      // 获取聊天记录
      this.handleGetChatHistory(this.historyCount)
    }
  },
  mounted () {
    window.bus.$on('getHistory', this.handleGetChatHistory)
    // 初始化用户信息
    console.log('mounted targetId running...')
    this.init()
    // 获取聊天记录
    this.handleGetChatHistory(this.historyCount)
  },
  methods: {
    // 根据对方id进行初始化信息
    init () {
      // 如果是群聊
      if (this.$route.params.isGroup) {
        this.$http.post(`?m=chat&c=chat&a=get_groupinfo`, {
          groupid: this.$route.params.id
        }).then(res => {
          this.targetInfo.username = res.data.group_name
          this.targetInfo.count = res.data.users.length
          console.log('群组信息', res)
        })
      } else {
        // 如果是单聊
        this.$http.post(`?m=user&c=user&a=get_userinfo_byid`, {
          userid: this.$route.params.id
        }).then(res => {
          this.targetInfo.username = res.data.nickname
          console.log('对方用户信息：', res)
        })
      }
    },
    hListenCall (methods) {
      if (typeof methods === 'string' && methods !== '') {
        this[methods]()
      }
    },
    // 打开表情面板
    handleOpenStickerPanel () {
      this.isShowStickerPanel = !this.isShowStickerPanel
    },
    // 添加表情
    handleAddSticker (text) {
      this.isShowStickerPanel = false
      this.message += text
    },
    // 获取聊天记录
    handleGetChatHistory (count = -1) {
      this.chatList = []
      this.$http.post(`?m=chat&c=chat&a=get_chathistory`, {
        otheruserid: this.$route.params.id
      }).then(res => {
        // 获取所有记录
        if (count < 0) {
          for (let item of res.data) {
            let chatItem = {
              id: item.historyid,
              userId: item.send_user,
              username: item.send_nickname,
              portrait: item.portrait,
              message: item.message,
              time: item.createtimes
            }
            this.chatList.push(chatItem)
          }
        } else {
          // 获取 count 条记录
          let getLens = res.data.length > count ? count : res.data.length
          for (let i = res.data.length - getLens; i < res.data.length; i++) {
            let item = res.data[i]
            let chatItem = {
              id: item.historyid,
              userId: item.send_user,
              username: item.send_nickname,
              portrait: item.portrait,
              message: item.message,
              time: item.createtimes
            }
            this.chatList.push(chatItem)
          }
        }
        setTimeout(() => {
          this.handleControllScroll()
        }, 50)
        // 对聊天内容进行过滤
        for (let item of this.chatList) {
          this.listenMessageWithSticker(item)
        }
      })
    },
    // 发送信息
    handleSendMessage () {
      if (this.message.length === 0) {
        this.$Message.error('消息不得为空')
        return false
      }
      window.bus.$emit('sendMessage', {
        toId: this.$route.params.id,
        fromId: this.$store.getters.userId,
        msg: this.message,
        type: this.$route.params.isGroup ? 2 : 1
      })
      // this.chatList.push({
      //   id: Math.random(),
      //   userId: 'abc',
      //   message: this.message,
      //   time: '03.11 18:10'
      // })
      this.message = ''
      // 获取聊天记录
      this.handleGetChatHistory(this.historyCount)
    },
    // 控制滚动条位于底部
    handleControllScroll () {
      this.$refs.messageBox.scrollTop = this.$refs.messageBox.scrollHeight
    },
    // 监听聊天内容中是否存在表情
    listenMessageWithSticker (item) {
      // 过滤 HTML 标签
      item.message = item.message.replace(/&/g, '&amp')
      item.message = item.message.replace(/</g, '&lt')
      item.message = item.message.replace(/>/g, '&gt')
      item.message = item.message.replace(/\r\n/g, '<br/>')
      item.message = item.message.replace(/\n/g, '<br/>')
      item.message = item.message.replace(/\s/g, ' ')
      for (let stickerItem of stickerList) {
        if (item.message.indexOf(stickerItem.name) > -1) {
          let reg = `${stickerItem.name}`
          item.message = item.message.replace(new RegExp(reg, 'g'), `<img src="static/stickers/default/${stickerItem.file}" />`)
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-chat-page {
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
      position: relative;

      .send-message-btn {
        margin-right: 10px;
        padding: 0 20px;
      }

      .sticker-panel {
        position: absolute;
        top: -160px;
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

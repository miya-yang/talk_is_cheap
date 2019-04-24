<template>
  <div class="base-frame panel">
    <title-bar 
      :isColorDefault="isLoginPage"
    />
    <div class="remove-titlebar-content">
      <router-view :router="router"></router-view>
    </div>
    <left-nav class="left-nav" />
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import LeftNav from '@/components/LeftNav'
import events from '@/events'

export default {
  name: 'base-frame',
  components: {
    TitleBar,
    LeftNav
  },
  data () {
    return {
      isLoginPage: true,
      router: 'message-page'
    }
  },
  watch: {
    $route () {
      this.listenRoute()
    }
  },
  mounted () {
    this.listenRoute()
    this.initWebSocket()
    this.initEmit()
  },
  methods: {
    // 初始化bus监听事件
    initEmit () {
      window.bus.$on('sendMessage', this.websocketOnSendMessage)
      window.bus.$on('chuoYiChuo', this.websocketOnChuoYiChuo)
    },
    // 初始化weosocket
    initWebSocket () {
      const wsuri = `ws://tic.codergzw.com:7272`
      this.websock = new WebSocket(wsuri)
      this.websock.onmessage = this.websocketonmessage
      this.websock.onopen = this.websocketonopen
      this.websock.onerror = this.websocketonerror
      this.websock.onclose = this.websocketclose
    },
    // 连接建立之后执行send方法发送数据
    websocketonopen () {
      // 注册该用户
      console.log('userid:', this.$store.getters.userId)
      this.websocketsend(JSON.stringify({
        type: 'login',
        userid: this.$store.getters.userId
      }))
      console.log('init Websocket Open.')
    },
    // 发送消息请求
    websocketOnSendMessage (data) {
      this.websocketsend(JSON.stringify({
        type: 'say',
        touserid: data.toId,
        fromuser: data.fromId,
        msg: data.msg
      }))
      this.$http.post(`?m=chat&c=chat&a=update_chatList`, {
        action: 1,
        touserid: data.toId,
        type: data.type
      }).then(res => {
        // 获取列表
        window.bus.$emit('refreshMessageList')
      })
    },
    // 戳一戳
    websocketOnChuoYiChuo (data) {
      this.websocketsend(JSON.stringify({
        type: 'cyc',
        touserid: data.toId,
        fromuser: data.fromId
      }))
    },
    // 连接建立失败重连
    websocketonerror () {
      this.initWebSocket()
      console.log('init Websocket Error.')
    },
    // 监听连接
    websocketonmessage (e) {
      // 监听消息类型
      const data = JSON.parse(e.data)
      const type = JSON.parse(e.data).msgtype
      // 登录后websocket注册成功
      if (type === 1) {
        // 获取列表
        window.bus.$emit('refreshMessageList')
        console.log('用户注册成功')
      } else if (type === 2) {
        // 收到新消息
        window.bus.$emit('readMessage')
        console.log(`收到一条来自${data.fromuser}的消息，内容是${data.msg}`)
      } else if (type === 3) {
        // 戳一戳
        events.poke()
      } else if (type === 4) {
        // 消息发送失败
        this.$Message.error(data.msg)
      }
      console.log('消息类型：', e)
      // console.log('websocket连接成功：', JSON.parse(e.data).type)
    },
    // 数据发送
    websocketsend (Data) {
      this.websock.send(Data)
    },
    // 关闭
    websocketclose (e) {
      console.log('断开连接', e)
    },
    // 路由监听
    listenRoute () {
      this.isLoginPage = this.$route.name === 'login-page'
      this.router = this.$route.name
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.base-frame {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  .left-nav {
    position: absolute;
    left: 0;
    top: 0;
  }
}
</style>

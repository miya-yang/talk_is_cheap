<template>
  <div class="message-page">
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <router-view class="message-panel"></router-view>
  </div>
</template>

<script>
import SubNav from '@/components/SubNav'
export default {
  name: 'message-page',
  components: {
    SubNav
  },
  props: {
    router: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.initWebSocket()
  },
  methods: {
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
      this.websocketsend(this.user)
    },
    // 连接建立失败重连
    websocketonerror () {
      this.initWebSocket()
    },
    // 监听连接
    websocketonmessage (e) {
      console.log('websocket连接成功：', JSON.parse(e.data).type)
    },
    // 数据发送
    websocketsend (Data) {
      this.websock.send(Data)
    },
    // 关闭
    websocketclose (e) {
      console.log('断开连接', e)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.message-page {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .message-panel {
    position: absolute;
    margin: auto;
    left: 320px;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }
}
</style>


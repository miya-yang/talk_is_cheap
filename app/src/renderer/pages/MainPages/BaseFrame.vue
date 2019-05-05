<template>
  <div class="base-frame panel">
    <audio ref="seMessage">
      <source src="../../assets/sounds/message.mp3" type="audio/mpeg" />
    </audio>
    <audio ref="sePoke">
      <source src="../../assets/sounds/poke.mp3" type="audio/mpeg" />
    </audio>
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
      router: 'message-page',
      lastPokeTime: ''
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
    this.getInformation()
  },
  methods: {
    // 初始化bus监听事件
    initEmit () {
      window.bus.$on('sendMessage', this.websocketOnSendMessage)
      window.bus.$on('poke', this.websocketOnPoke)
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
    websocketOnPoke (data) {
      // 每10s只能poke一次
      if (this.lastPokeTime === '') {
        this.lastPokeTime = new Date().getTime()
      } else if (new Date().getTime() - this.lastPokeTime <= 10000) {
        this.$Message.warning('每10秒只能戳一次哦')
        return false
      } else {
        this.lastPokeTime = new Date().getTime()
      }
      this.$Message.info('你刚刚戳了对方一下')
      this.websocketsend(JSON.stringify({
        type: 'cyc',
        touserid: data.toId,
        fromuser: data.fromId
      }))
      this.$http.post(`?m=chat&c=chat&a=update_chatList`, {
        action: 1,
        touserid: data.toId,
        type: 1
      }).then(res => {
        // 获取列表
        window.bus.$emit('refreshMessageList')
      })
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
        this.$refs.seMessage.play()
        window.bus.$emit('readMessage')
        console.log(`收到一条来自${data.fromuser}的消息，内容是${data.msg}`)
      } else if (type === 3) {
        // 戳一戳
        this.$refs.sePoke.play()
        this.$router.push({ name: 'message-chat-page', params: { id: data.fromuser, isGroup: false } })
        events.poke()
        this.$Message.info('滴滴滴...有人戳了你一下~')
        // 更新列表
        window.bus.$emit('refreshMessageList')
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
    // 获取资讯
    getInformation () {
      let infos = []
      let index = 0
      this.$http.post(`?m=information&c=information&a=get_information`).then(res => {
        infos = res.data
        this.$Notice.warning({
          title: '系统提示',
          desc: infos[index].content,
          duration: 10000
        })
        index++
        setInterval(() => {
          this.$Notice.warning({
            title: '系统提示',
            desc: infos[index].content,
            duration: 10000
          })
          index++
          if (index >= infos.length) {
            index = 0
          }
        }, 1000 * 60 * 5)
      })
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

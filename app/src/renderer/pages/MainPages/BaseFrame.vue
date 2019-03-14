<template>
  <div class="base-frame panel">
    <title-bar 
      :isColorDefault="isLoginPage"
    />
    <div class="remove-titlebar-content">
      <router-view></router-view>
    </div>
    <left-nav class="left-nav" />
    <sub-nav 
      class="sub-nav"
      :router="router"
    />
    <!-- more-menu start -->
    <div
      id="more-menu"
      class="more-menu"
      v-if="isShowMoreMenu"
    >
      <CellGroup>
        <Cell class="item" title="举报" @click.native="hcMoreMenuReport" />
      </CellGroup>
    </div>
    <!-- more-menu end -->
    <!-- chat-right-hand-menu start -->
    <div 
      id="chat-right-hand-menu"
      class="chat-right-hand-menu"
      v-if="showChatRightHandMenu.display"
      :style="{ top: showChatRightHandMenu.mouseY, left: showChatRightHandMenu.mouseX }"
    >
      <CellGroup>
        <Cell class="item" title="置顶聊天" @click.native="hcChatRightHandMenuStick" />
        <Cell class="item" title="删除聊天" @click.native="hcChatRightHandMenuDelete" />
      </CellGroup>
    </div>
    <!-- chat-right-hand-menu end -->
  </div>
</template>

<script>
import TitleBar from '@/components/TitleBar'
import LeftNav from '@/components/LeftNav'
import SubNav from '@/components/SubNav'
import events from '../../events.js'

export default {
  name: 'base-frame',
  components: {
    TitleBar,
    LeftNav,
    SubNav
  },
  created () {
    this.hHideMoreMenu()
    this.hShowChatRightHandMenu()
  },
  mounted () {
    this.listenRoute()
  },
  data () {
    return {
      router: 'message-page',
      isLoginPage: true
    }
  },
  methods: {
    hcMoreMenuReport () {
      events.hCreateWindow('ReportWindow')
    },
    hHideMoreMenu () {
      let body = document.querySelector('body')
      body.addEventListener('click', (e) => {
        if (e.target.id !== 'more-item' && e.target.id !== 'more-menu') {
          this.$store.dispatch('hideMoreMenu')
        }
      }, false)
    },
    hShowChatRightHandMenu () {
      let body = document.querySelector('body')
      body.addEventListener('click', (e) => {
        if (e.target.id !== 'chat-item') {
          this.$store.dispatch('hideChatRightHandMenu')
        }
      }, false)
    },
    hcChatRightHandMenuStick () {
      alert('聊天已置顶')
    },
    hcChatRightHandMenuDelete () {
      alert('聊天已删除')
    },
    listenRoute () {
      this.router = this.$route.name
      this.isLoginPage = this.router === 'login-page'
    }
  },
  computed: {
    isShowMoreMenu () {
      return this.$store.state.ShowMenu.MoreMenu
    },
    showChatRightHandMenu () {
      return this.$store.state.ShowMenu.ChatRightHandMenu
    }
  },
  watch: {
    $route () {
      this.listenRoute()
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

  .sub-nav {
    position: absolute;
    left: $left-nav-width;
    top: 0;
  }

  .more-menu {
    width: 120px;
    position: absolute;
    top: 415px;
    left: 70px;
    background: #1A2D27;

    .item {
      color: #fff;
    }
    .item:hover {
      background: #333;
    }
  }

  .chat-right-hand-menu {
    width: 120px;
    position: absolute;
    background: #fff;
    z-index: 999;
  }
}
</style>

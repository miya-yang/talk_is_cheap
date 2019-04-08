<template>
  <div>
    <ul class="nav-list">
      <li 
        v-for="(item, index) of system.menuList"
        :key="index"
      >
        <router-link
          v-if="item.type !== 'function'"
          class="nav-item" 
          :to="{ name: item.linkName }" 
          :title="item.title"
          @click.native="hToggleIcon(index)"
        >
          <Icon
            class="icon"
            :type="item.active ? item.activeIcon : item.icon"
            :size="30"
            :ref="item.name"
          />
        </router-link>
        <a
          v-else
          class="nav-item" 
          :to="{ name: item.linkName }" 
          :title="item.title"
          @click.stop="hListenCall(item.function)"
          :id="item.name"
        >
          <Icon
            class="icon"
            :type="item.active ? item.activeIcon : item.icon"
            :size="30"
            :ref="item.name"
          />
        </a>
      </li>
    </ul>
    <!-- more-menu start -->
    <div
      id="more-menu"
      class="more-menu"
      v-if="showMoreMenu"
    >
      <CellGroup>
        <Cell class="item" title="举报" @click.native="hcMoreMenuReport" />
      </CellGroup>
    </div>
    <!-- more-menu end -->
  </div>
</template>


<script>
import events from '../../../events.js'
export default {
  name: 'nav-list',
  data () {
    return {
      showMoreMenu: false,
      system: {
        menuList: [
          {
            title: '聊天',
            name: 'chat-item',
            icon: 'ios-chatbubbles-outline',
            activeIcon: 'ios-chatbubbles',
            linkName: 'message-page',
            active: true
          },
          {
            title: '好友',
            name: 'friends-item',
            icon: 'ios-contacts-outline',
            activeIcon: 'ios-contacts',
            linkName: 'friends-page',
            active: false
          },
          {
            title: '动态',
            name: 'moments-item',
            icon: 'ios-aperture-outline',
            activeIcon: 'ios-aperture',
            linkName: 'moments-page',
            active: false
          },
          {
            title: '活动',
            name: 'activity-item',
            icon: 'ios-basketball-outline',
            activeIcon: 'ios-basketball',
            linkName: 'activity-page',
            active: false
          },
          {
            title: '圈子',
            name: 'circle-item',
            icon: 'ios-bulb-outline',
            activeIcon: 'ios-bulb',
            linkName: 'circle-page',
            active: false
          },
          {
            title: '匹配',
            name: 'match-item',
            icon: 'ios-color-filter-outline',
            activeIcon: 'ios-color-filter',
            linkName: 'match-page',
            active: false
          },
          {
            title: '排行榜',
            name: 'ranking-item',
            icon: 'ios-trophy-outline',
            activeIcon: 'ios-trophy',
            linkName: 'ranking-page',
            active: false
          },
          {
            title: '更多',
            type: 'function',
            name: 'more-item',
            icon: 'md-list',
            activeIcon: 'md-list',
            function: 'hShowMoreMenu',
            active: false
          }
        ]
      }
    }
  },
  mounted () {
    this.hHideMoreMenu()
  },
  watch: {
    '$route' () {
      // 解决激活选项与路由页面不符的问题
      let route = this.$route.name
      if (route.indexOf('message') > -1) {
        this.hToggleIcon(0)
      } else if (route.indexOf('friends') > -1) {
        this.hToggleIcon(1)
      } else if (route.indexOf('moments') > -1) {
        this.hToggleIcon(2)
      } else if (route.indexOf('activity') > -1) {
        this.hToggleIcon(3)
      } else if (route.indexOf('circle') > -1) {
        this.hToggleIcon(4)
      } else if (route.indexOf('match') > -1) {
        this.hToggleIcon(5)
      } else if (route.indexOf('ranking') > -1) {
        this.hToggleIcon(6)
      }
    }
  },
  methods: {
    hToggleIcon (index) {
      for (let i = 0; i < this.system.menuList.length; i++) {
        let obj = this.system.menuList[i]
        if (i === index) {
          obj.active = true
          this.$set(this.system.menuList, i, obj)
        } else {
          obj.active = false
          this.$set(this.system.menuList, i, obj)
        }
      }
    },
    hListenCall (methods) {
      if (typeof methods === 'string' && methods !== '') {
        this[methods]()
      }
    },
    hShowMoreMenu () {
      this.showMoreMenu = !this.showMoreMenu
    },
    hcMoreMenuReport () {
      events.hCreateWindow('ReportWindow')
    },
    hHideMoreMenu () {
      let app = document.querySelector('#app')
      app.addEventListener('click', (e) => {
        this.showMoreMenu = false
      }, false)
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  li {
    .nav-item {
      display: flex;
      justify-content: center;
      color: #fff;
    }
  }
}
.more-menu {
  width: 120px;
  position: fixed;
  z-index: 999;
  top: 420px;
  left: 70px;
  background: #1A2D27;
  
  .item {
    color: #fff;
  }
  .item:hover {
    background: #333;
  }
}
</style>

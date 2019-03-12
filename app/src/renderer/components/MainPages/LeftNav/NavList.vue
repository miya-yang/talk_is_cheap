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
          @click.native="handleToggleIcon(index)"
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
          @click.stop="handleListenCall(item.function)"
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
  </div>
</template>


<script>
export default {
  name: 'nav-list',
  data () {
    return {
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
            function: 'handleShowMoreMenu',
            active: false
          }
        ]
      }
    }
  },
  methods: {
    handleToggleIcon (index) {
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
    handleListenCall (methods) {
      if (typeof methods === 'string' && methods !== '') {
        this[methods]()
      }
    },
    handleShowMoreMenu () {
      this.$store.getters.MoreMenu ? this.$store.dispatch('hideMoreMenu') : this.$store.dispatch('showMoreMenu')
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
</style>

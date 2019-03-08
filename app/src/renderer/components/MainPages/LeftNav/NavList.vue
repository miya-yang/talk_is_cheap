<template>
  <ul class="nav-list">
    <li>
      <router-link
        v-for="(item, index) of system.menuList"
        :key="index"
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
    </li>
  </ul>
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
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-list {
  li {
    margin: 20px auto;

    .nav-item {
      display: block;
      color: #fff;
      margin: 20px 0;
      
      .icon {
        display: block;
        width: 30px;
        height: 30px;
        margin: 0 auto;
      }
    }
  }
}
</style>


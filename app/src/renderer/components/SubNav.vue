<template>
  <div class="sub-nav">
    <!-- message-page start -->
    <ul class="sub-lists scroll" v-if="router.indexOf('message') > -1">
      <chat-item
        v-for="item of chatList"
        :key="item.id"
        :chatId="item.id"
        :portrait="item.portrait"
        :title="item.title"
        :time="item.time"
        :message="item.message"
        :isActive="item.isActive"
        :linkName="item.linkName"
        :isTop="item.isTop"
        @contextmenu.native="hcRightChatItem"
        @click.native="hcActiveList(item, 'chatList')"
      />
    </ul>
    <!-- message-page end -->
    <!-- friends-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('friends') > -1">
      <template v-for="(item) of friendsList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item
          v-for="item2 of item.list"
          :key="item2.id"
          :portrait="item2.portrait"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          :linkName="item2.linkName"
          :linkParams="item2.linkParams"
          :redCount="item2.redCount"
          @click.native="hcActiveList(item2, 'friendsList')"
        />
      </template>
    </ul>
    <!-- friends-page end -->
    <!-- moments-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('moments') > -1">
      <template v-for="(item) of momentsList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item 
          v-for="item2 of item.list"
          :key="item2.id"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          :linkName="item2.linkName"
          @click.native="hcActiveList(item2, 'momentsList')"
        />
      </template>
    </ul>
    <!-- moments-page end -->
    <!-- activity-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('activity') > -1">
      <template v-for="(item) of activityList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item 
          v-for="item2 of item.list"
          :key="item2.id"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          @click.native="hcActiveList(item2, 'activityList')"
        />
      </template>
    </ul>
    <!-- activity-page end -->
    <!-- circle-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('circle') > -1">
      <template v-for="(item) of circleList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item 
          v-for="(item2) of item.list"
          :key="item2.id"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          @click.native="hcActiveList(item2, 'circleList')"
        />
      </template>
    </ul>
    <!-- circle-page end -->
    <!-- match-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('match') > -1">
      <template v-for="(item) of matchList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item 
          v-for="(item2) of item.list"
          :key="item2.id"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          @click.native="hcActiveList(item2, 'matchList')"
        />
      </template>
    </ul>
    <!-- match-page end -->
    <!-- ranking-page start -->
    <ul class="sub-lists scroll" v-else-if="router.indexOf('ranking') > -1">
      <template v-for="(item) of rankingList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <lists-item 
          v-for="(item2) of item.list"
          :key="item2.id"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
          @click.native="hcActiveList(item2, 'rankingList')"
        />
      </template>
    </ul>
    <!-- ranking-page end -->
    <!-- chat-right-hand-menu start -->
    <div 
      id="chat-right-hand-menu"
      class="chat-right-hand-menu"
      v-if="chatRightMenu.display"
      :style="{ top: chatRightMenu.y, left: chatRightMenu.x }"
    >
      <CellGroup>
        <Cell class="item" :title="topTitle" @click.native="hcChatRightHandMenuStick" />
        <Cell class="item" title="删除聊天" @click.native="hcChatRightHandMenuDelete" />
      </CellGroup>
    </div>
    <!-- chat-right-hand-menu end -->
  </div>
</template>

<script>
import ChatItem from '@/components/MainPages/SubNav/ChatItem'
import ListsItem from '@/components/MainPages/SubNav/ListsItem'
import SubTitle from '@/components/MainPages/SubNav/SubTitle'
export default {
  name: 'sub-nav',
  components: {
    ChatItem,
    ListsItem,
    SubTitle
  },
  props: {
    router: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      topTitle: '置顶聊天',
      chatRightMenu: {
        x: 0,
        y: 0,
        display: false,
        ele: '',
        id: '',
        isTop: false
      },
      chatList: [
        // {
        //   id: 'chat-1',
        //   portrait: 'imgs/portrait--test.png',
        //   title: '58同城58同城58同城58同城58同城58同城58同城',
        //   time: '16:40',
        //   message: '您有一条新消息',
        //   linkName: 'message-chat-page'
        // }
      ],
      friendsList: [
        {
          id: 'friend-1',
          subTitle: '新的好友',
          list: [
            {
              id: '1-1',
              icon: 'md-person-add',
              title: '添加好友',
              linkName: 'add-friends-page'
            },
            {
              id: '1-2',
              icon: 'md-person',
              title: '好友请求',
              linkName: 'application-friends-page'
            },
            {
              id: '1-3',
              icon: 'md-contacts',
              title: '创建群聊',
              linkName: 'friends-create-group-page'
            }
          ]
        },
        {
          id: 'friend-2',
          subTitle: '好友列表',
          list: [
            // {
            //   id: '2-1',
            //   portrait: 'imgs/portrait--test.png',
            //   title: '58 测试名称 前端58 测试名称 前端'
            // }
          ]
        },
        {
          id: 'friend-3',
          subTitle: '群组列表',
          list: [
            {
              id: '3-1',
              portrait: 'imgs/portrait--test.png',
              title: '58 商业产品技术部前端'
            }
          ]
        }
      ],
      momentsList: [
        {
          id: '4',
          subTitle: '我的',
          list: [
            {
              id: '4-1',
              icon: 'ios-send',
              title: '发布动态',
              linkName: 'new-moments-page'
            }
            // {
            //   id: '4-2',
            //   icon: 'md-text',
            //   title: '新的提醒'
            // }
          ]
        },
        {
          id: '5',
          subTitle: '好友',
          list: [
            {
              id: '5-1',
              icon: 'ios-quote',
              title: '最新动态',
              linkName: 'moments-list-page'
            }
          ]
        }
      ],
      activityList: [
        {
          id: '6',
          subTitle: '我的',
          list: [
            {
              id: '6-1',
              icon: 'ios-share',
              title: '发起活动'
            },
            {
              id: '6-2',
              icon: 'ios-wifi',
              title: '我发起的'
            },
            {
              id: '6-3',
              icon: 'ios-stats',
              title: '我参与的'
            }
          ]
        },
        {
          id: '7',
          subTitle: '所有',
          list: [
            {
              id: '7-1',
              icon: 'ios-walk',
              title: '所有活动'
            }
          ]
        }
      ],
      circleList: [
        {
          id: '8',
          subTitle: '我的',
          list: [
            {
              id: '8-1',
              icon: 'ios-share',
              title: '我发布的'
            },
            {
              id: '8-2',
              icon: 'md-text',
              title: '新的回复'
            },
            {
              id: '8-3',
              icon: 'md-contacts',
              title: '我的关注'
            },
            {
              id: '8-4',
              icon: 'ios-people',
              title: '我的粉丝'
            }
          ]
        },
        {
          id: '9',
          subTitle: '所有',
          list: [
            {
              id: '9-1',
              icon: 'logo-chrome',
              title: '所有圈子'
            }
          ]
        }
      ],
      matchList: [
        {
          id: '10',
          subTitle: '匹配',
          list: [
            {
              id: '10-1',
              icon: 'ios-heart',
              title: '猜你喜欢'
            }
          ]
        }
      ],
      rankingList: [
        {
          id: '11',
          subTitle: '排行榜',
          list: [
            {
              id: '11-1',
              icon: 'ios-trending-up',
              title: '积分排行榜'
            },
            {
              id: '11-2',
              icon: 'ios-trending-up',
              title: '圈子排行榜'
            },
            {
              id: '11-3',
              icon: 'ios-trending-up',
              title: '动态排行榜'
            },
            {
              id: '11-4',
              icon: 'ios-trending-up',
              title: '活动排行榜'
            }
          ]
        }
      ]
    }
  },
  mounted () {
    this.hHideChatRightHandMenu()
    this.listenRouter()
  },
  watch: {
    '$route.path' (val, oldval) {
      this.listenRouter(oldval)
    }
  },
  methods: {
    // 监听路由，根据模块进行不同操作
    listenRouter (oldval) {
      let route = this.$route
      // 好友模块
      if (route.name.indexOf('friends') > -1 && route.name !== 'friends-info-page') {
        this.friendsGetUnreadCount()
        this.friendsGetFriendsList()
        this.friendsGetGroupList()
      } else if (route.name.indexOf('message') > -1 && oldval !== '/message') {
        this.messageGetMessageList()
      }
    },
    // 绑定右键点击聊天对象选项
    hcRightChatItem (e) {
      let mouseX = `${e.clientX}px`
      let mouseY = `${e.clientY}px`
      this.chatRightMenu.x = mouseX
      this.chatRightMenu.y = mouseY
      this.chatRightMenu.display = true
      this.chatRightMenu.id = e.currentTarget.firstChild.getAttribute('chat-id')
      this.chatRightMenu.isTop = e.currentTarget.firstChild.getAttribute('is-top')
      this.topTitle = this.chatRightMenu.isTop ? '取消置顶' : '置顶聊天'
    },
    hHideChatRightHandMenu () {
      let app = document.querySelector('#app')
      app.addEventListener('click', (e) => {
        this.chatRightMenu.display = false
      }, false)
    },
    // 绑定选项点击效果
    hcActiveList (item, listName) {
      this.$nextTick(() => {
        this[listName].forEach((i) => {
          if (i.list) {
            i.list.forEach((i2) => {
              this.$set(i2, 'isActive', false)
            })
          } else {
            this.$set(i, 'isActive', false)
          }
        })
        this.$set(item, 'isActive', true)
      })
    },
    // 好友模块：获取未读好友申请数量
    friendsGetUnreadCount () {
      this.$http.post(`?m=friend&c=friend&a=noRead`).then(res => {
        this.$set(this.friendsList[0].list[1], 'redCount', res.data)
      }).catch(() => {})
    },
    // 好友模块：获取好友列表
    friendsGetFriendsList () {
      this.$http.post(`?m=friend&c=friend&a=get_friendList`).then(res => {
        let list = []
        for (let item of res.data) {
          list.push({
            id: item.id,
            title: item.nickname,
            portrait: item.portrait,
            linkName: `friends-info-page`,
            linkParams: {
              id: item.id
            }
          })
        }
        this.$set(this.friendsList[1], 'list', list)
      })
    },
    // 好友模块：获取群组列表
    friendsGetGroupList () {
      this.$http.post(`?m=chat&c=chat&a=get_grouplist`).then(res => {
        console.log(res)
      })
    },
    // 聊天模块：获取聊天列表
    messageGetMessageList () {
      this.$http.post(`?m=chat&c=chat&a=get_chatList`).then(res => {
        this.chatList = []
        for (let item of res.data) {
          let specialObj = {}
          if (Number(item.type) === 1) {
            specialObj = {
              id: item.userid,
              title: item.username
            }
          } else {
            specialObj = {
              id: item.roomid,
              title: item.roomname
            }
          }
          this.chatList.push(Object.assign(specialObj, {
            type: item.type,
            portrait: item.picture,
            time: item.lasttime ? item.lasttime : '',
            message: item.lastmessage ? item.lastmessage : '',
            isTop: item.top,
            linkName: 'message-chat-page'
          }))
          if (this.$route.params.id) {
            this.fixedCurrentTarget(this.$route.params.id)
          }
        }
      })
    },
    // 修复当前选中对象
    fixedCurrentTarget (id) {
      let index = 0
      for (let i = 0; i < this.chatList.length; i++) {
        if (this.chatList[i].id === id) {
          index = i
          break
        }
      }
      this.hcActiveList(this.chatList[index], 'chatList')
    },
    // 置顶聊天
    hcChatRightHandMenuStick () {
      let params = {
        touserid: this.chatRightMenu.id,
        type: 1 // TODO...群聊为2
      }
      if (this.chatRightMenu.isTop) {
        params.action = 4
      } else {
        params.action = 3
      }
      this.$http.post(`?m=chat&c=chat&a=update_chatList`, params).then(res => {
        this.messageGetMessageList()
      })
    },
    // 删除聊天
    hcChatRightHandMenuDelete () {
      this.$http.post(`?m=chat&c=chat&a=update_chatList`, {
        action: 5,
        touserid: this.chatRightMenu.id,
        type: 1 // TODO...群聊为2
      }).then(res => {
        this.messageGetMessageList()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";

.sub-nav {
  width: $sub-nav-width;
  height: 100%;
  background: #f2efe6;
  padding-bottom: 80px;
  padding-left: calc(100vw - 100%);

  .sub-lists {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    margin-top: 76px;
  }
}
.chat-right-hand-menu {
  width: 120px;
  position: fixed;
  background: #fff;
  z-index: 999;
}
</style>


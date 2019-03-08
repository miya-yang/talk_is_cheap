<template>
  <div class="sub-nav">
    <ul class="chat-lists scroll" v-if="router === 'message-page'">
      <chat-item
        v-for="(item) of chatList"
        :key="item.id"
        :portrait="item.portrait"
        :title="item.title"
        :time="item.time"
        :message="item.message"
        :isActive="item.isActive"
      />
    </ul>
    <ul class="friends-lists scroll" v-else-if="router === 'friends-page'">
      <sub-nav
      />
      <friends-item
        v-for="(item) of friendsList"
        :key="item.id"
      />
    </ul>
  </div>
</template>

<script>
import ChatItem from '@/components/MainPages/SubNav/ChatItem'
import FriendsItem from '@/components/MainPages/SubNav/FriendsItem'
import SubTitle from '@/components/MainPages/SubNav/SubTitle'
export default {
  name: 'sub-nav',
  components: {
    ChatItem,
    FriendsItem,
    SubTitle
  },
  data () {
    return {
      chatList: [
        {
          id: 1,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '16:40',
          message: '您有一条新消息',
          isActive: true
        },
        {
          id: 2,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 3,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 4,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 5,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 6,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 7,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 8,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 9,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        },
        {
          id: 10,
          portrait: 'imgs/portrait--test.png',
          title: '58同城',
          time: '14:40',
          message: '您的offer已经发送到您的邮箱中了'
        }
      ],
      friendsList: [
        {
          id: 1
        }
      ],
      router: 'message-page'
    }
  },
  watch: {
    $route () {
      this.router = this.$route.name
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
  padding-top: 80px;
  padding-left: calc(100vw - 100%);

  .chat-lists {
    height: 100%;
    overflow-y: auto;
  }
}
</style>


<template>
  <div class="sub-nav">
    <carousel 
      class="carousel" 
      content="这里显示轮播消息"
      type="danger"
    />
    <ul class="sub-lists scroll" v-if="router === 'message-page'">
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
    <ul class="sub-lists scroll" v-else-if="router === 'friends-page'">
      <template v-for="(item) of friendsList">
        <sub-title 
          :key="item.id"
          :title="item.subTitle"
        />
        <friends-item
          v-for="(item2) of item.list"
          :key="item2.id"
          :portrait="item2.portrait"
          :icon="item2.icon"
          :title="item2.title"
          :isActive="item2.isActive"
        />
      </template>
    </ul>
  </div>
</template>

<script>
import ChatItem from '@/components/MainPages/SubNav/ChatItem'
import FriendsItem from '@/components/MainPages/SubNav/FriendsItem'
import SubTitle from '@/components/MainPages/SubNav/SubTitle'
import Carousel from '@/components/MainPages/SubNav/Carousel'
export default {
  name: 'sub-nav',
  components: {
    ChatItem,
    FriendsItem,
    SubTitle,
    Carousel
  },
  data () {
    return {
      chatList: [
        {
          id: 1,
          portrait: 'imgs/portrait--test.png',
          title: '58同城58同城58同城58同城58同城58同城58同城',
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
          id: 1,
          subTitle: '新的好友',
          list: [
            {
              id: 1,
              icon: 'md-person-add',
              title: '新的好友'
            }
          ]
        },
        {
          id: 2,
          subTitle: '好友列表',
          list: [
            {
              id: 2,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端58 测试名称 前端',
              isActive: true
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            },
            {
              id: 3,
              portrait: 'imgs/portrait--test.png',
              title: '58 测试名称 前端'
            }
          ]
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
  padding-bottom: 80px;
  padding-left: calc(100vw - 100%);

  .carousel {
    padding: 27px;
  }

  .sub-lists {
    height: 100%;
    width: 100%;
    overflow-y: auto;
  }
}
</style>


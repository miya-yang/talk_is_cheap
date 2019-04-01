<template>
  <div class="moments-item">
    <div class="userinfo">
      <Avatar :src="portrait" />
      <span class="nickname">{{ nickname }}</span>
      <span class="time">{{ time }}</span>
    </div>
    <div class="content">{{ content }}</div>
    <img
      class="img"
      v-if="img !== ''"
      :src="img"
    >
  </div>
</template>

<script>
export default {
  name: 'moments-item',
  props: {
    portrait: {
      type: String,
      default: ''
    },
    nickname: {
      type: String,
      default: ''
    },
    time: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.moments-item {
  padding: 10px 0;
  margin: 10px;
  border-bottom: 1px solid #efefef;

  .userinfo {
    line-height: 35px;
    .nickname {
      margin-left: 5px;
    }
    .time {
      float: right;
      color: #aaa;
    }
  }
  .content {
    margin: 10px;
  }
  .img {
    display: block;
    width: 60%;
    margin: 0 auto;
  }
}
</style>

<template>
  <li class="search-friends-item" :title="intro">
    <img class="avatar" :src="portrait">
    <div class="list-info">
      <p class="account">{{ account }} <Icon :color="this.sex === '男' ? 'blue' : 'pink'" :type="this.sex === '男' ? 'ios-female' : 'ios-female'" /></p>
      <h2 class="nickname">{{ nickname }}</h2>
    </div>
    <div class="operator-btns">
      <Button @click="hcSendAddMessage" :loading="isLoading" :disabled="disabled" class="add-friends-btn">{{ addBtnText }}</Button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'search-friends-item',
  data () {
    return {
      isLoading: false,
      addBtnText: '添加好友',
      disabled: false
    }
  },
  props: {
    id: {
      type: String,
      default: ''
    },
    portrait: {
      type: String,
      default: ''
    },
    nickname: {
      type: String,
      default: ''
    },
    account: {
      type: String,
      default: ''
    },
    intro: {
      type: String,
      default: ''
    },
    sex: {
      type: String,
      default: ''
    }
  },
  methods: {
    hcSendAddMessage () {
      this.isLoading = true
      this.$http.post(`?m=friend&c=friend&a=add_approval`, {
        myid: this.$store.getters.userId,
        touserid: this.id
      }).then(res => {
        this.isLoading = false
        this.addBtnText = '已发送申请'
        this.disabled = true
        this.$Message.success(res.message)
      }).catch(() => {
        this.isLoading = false
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.search-friends-item {
  display: flex;
  flex-flow: row nowrap;
  list-style: none;
  width: 100%;
  height: 75px;
  cursor: default;
  -webkit-user-select: none;
  background: #f8f8f8;
  padding: 5px 20px;

  .avatar {
    height: 100%;
  }

  .list-info {
    flex-grow: 1;
    margin-left: 10px;
    margin-top: 5px;
    
    .account {
      color: #999;
      font-size: 14px;
      line-height: 28px;
    }

    .nickname {
      font-weight: 400;
      color: #666;
      letter-spacing: 1px;
    }
  }

  .operator-btns {
    width: 100px;
    
    .add-friends-btn {
      margin-top: 17.5px;
      float: right;
    }
  }
}

.search-friends-item:hover {
  background: #f1f1f1;
}
</style>


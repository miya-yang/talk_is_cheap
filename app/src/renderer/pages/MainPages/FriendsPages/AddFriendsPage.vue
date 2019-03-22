<template>
  <div class="add-friends-page">
    <div class="add-input-panel">
      <Input class="inputAccount" @on-enter="hcSearchUser" clearable v-model.trim="inputAccount" size="large" placeholder="请输入TIC账号或昵称" :maxlength="20" />
      <Button class="inputBtn" @click="hcSearchUser" type="primary">搜索</Button>
    </div>
    <div class="friends-list scroll">
      <search-friends-item
        v-for="(item) of searchList"
        :key="item.id"
        :portrait="item.portrait"
        :nickname="item.nickname"
        :account="item.account"
        :intro="item.describe"
        :id="item.id"
        :sex="item.sex"
      />
    </div>
  </div>
</template>

<script>
import SearchFriendsItem from '@/components/MainPages/FriendsPages/SearchFriendsItem'
export default {
  name: 'add-friends-page',
  components: {
    SearchFriendsItem
  },
  data () {
    return {
      inputAccount: '',
      searchList: []
    }
  },
  methods: {
    hcSearchUser () {
      if (this.inputAccount === '') {
        this.searchList.splice(0, this.searchList.length)
      } else {
        this.$http.post(`?m=friend&c=friend&a=search_user`, {
          userid: this.$store.getters.userId,
          search: this.inputAccount
        }).then(res => {
          this.searchList = res.data
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';

.add-friends-page {
  display: flex;
  flex-direction: column;
  .add-input-panel {
    width: 60%;
    margin: 20px auto;
    display: flex;

    .inputAccount {
      flex: 1;
    }
    .inputBtn {
      margin-left: 10px;
    }
  }

  .friends-list {
    flex: 1;
    overflow: auto;
  }
}
</style>

<template>
  <div class="application-friends-page">
    <div class="list scroll">
      <search-friends-item
        v-for="(item) of dataList"
        :key="item.userid"
        :portrait="item.portrait"
        :nickname="item.nickname"
        :account="item.account"
        :intro="item.describe"
        :id="item.userid"
        :sex="item.sex"
        :requestId="item.apprvoalid"
        type="request"
      />
    </div>
  </div>
</template>

<script>
import SearchFriendsItem from '@/components/MainPages/FriendsPages/SearchFriendsItem'
export default {
  name: 'application-friends-page',
  components: {
    SearchFriendsItem
  },
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.$http.post(`?m=friend&c=friend&a=get_approval_list`).then(res => {
        // TODO: 判断这条记录是否已经完成操作，若完成 不让其显示同意按钮
        this.dataList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/common.scss";
.application-friends-page {
  height: 100%;
  .list {
    height: inherit;
    overflow-y: auto;
  }
}
</style>

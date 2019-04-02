<template>
  <div class="moments-list-page scroll">
    <moments-item
      v-for="item of this.dataList"
      :key="item.id"
      :time="item.createtimes"
      :img="item.pictures"
      :content="item.content"
      :nickname="item.nickname"
      :portrait="item.portrait"
      :isLike="item.islike"
      :likeList="item.likes"
      :id="item.id"
      :commentList="item.remarks"
      @handleRefreshList="getList"
    />
  </div>
</template>

<script>
import MomentsItem from '@/components/MainPages/MomentsPages/MomentsItem'
export default {
  name: 'moments-list-page',
  components: {
    MomentsItem
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
    // 获取朋友圈内容
    getList () {
      this.$http.post(`?m=moments&c=moments&a=get_moments`).then(res => {
        console.log(res.data)
        this.dataList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.moments-list-page {
  height: 100%;
  overflow-y: auto;
}
</style>

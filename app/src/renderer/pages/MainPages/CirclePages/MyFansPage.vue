<template>
  <div class="my-fans-page scroll">
    <h1 class="title">我的粉丝<span v-if="dataList.length !== 0">({{ dataList.length }})</span></h1>
    <p class="no-data" v-if="dataList.length === 0">
      啊哦，好像还没有人关注你呀~
    </p>
    <div class="fans-content" v-else>
      <fans-item
        v-for="item of dataList"
        :key="item.id"
        :userId="item.id"
        :nickname="item.nickname"
        :portrait="item.portrait"
        :isFans="item.isfans"
        class="fans-item"
        type="fans"
      />
    </div>
  </div>
</template>

<script>
import FansItem from '@/components/MainPages/Circle/FansItem'
export default {
  name: 'my-follow-page',
  components: {
    FansItem
  },
  data () {
    return {
      dataList: []
    }
  },
  mounted () {
    this.initList()
  },
  methods: {
    // 初始化列表
    initList () {
      this.$http.post(`?m=fans&c=fans&a=get_fans_list`).then(res => {
        this.dataList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.my-fans-page {
  height: 100%;
  overflow-y: auto;
  padding: 40px;
  .title {
    border-bottom: 1px solid #ccc;
    font-weight: 300;
  }
  .no-data {
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
  .fans-content {
    display: flex;
    flex-wrap: wrap;
    .fans-item {
      margin-top: 10px;
      margin-left: 6px;
    }
  }
}
</style>

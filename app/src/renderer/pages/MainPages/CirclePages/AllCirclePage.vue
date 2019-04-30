<template>
  <div class="all-circle-page scroll">
    <Tabs value="tabs-1" @on-click="init">
      <TabPane label="推荐" name="tabs-1">
        <h2 class="title">猜你喜欢</h2>
        <circle-item
          class="recommend-circle-item"
          :id="recommend.id"
          :title="recommend.circleName"
          :portrait="recommend.circlePicture"
          :circleCount="recommend.circleCount"
          :userCount="recommend.userCount"
        />
        <h2 class="title">更多圈子</h2>
        <div class="flex-circle">
          <circle-item
            class="flex-circle-item"
            v-for="item of allCircle"
            :key="item.id"
            :id="item.id"
            :title="item.circleName"
            :portrait="item.circlePicture"
            :circleCount="item.circleCount"
            :userCount="item.userCount"
          />
        </div>
      </TabPane>
      <TabPane label="我的" name="tabs-2">
        <h2 class="title">已加入的圈子</h2>
        <p
          v-if="hasJoined.length === 0"
          style="text-align: center; line-height: 40px;"
        >
        暂时没有加入任何圈子哦
        </p>
        <div class="flex-circle">
          <circle-item
            class="flex-circle-item"
            v-for="item of hasJoined"
            :key="item.id"
            :id="item.id"
            :title="item.circleName"
            :portrait="item.circlePicture"
            :circleCount="item.circleCount"
            :userCount="item.userCount"
            type="quit"
            @refreshHasJoin="initHasJoinedRecommend"
          />
        </div>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
import circleItem from '@/components/MainPages/Circle/CircleItem'
export default {
  name: 'all-circle-page',
  components: {
    circleItem
  },
  data () {
    return {
      recommend: {
        id: '',
        circleName: '',
        circlePicture: '',
        circleCount: 0,
        userCount: 0
      },
      allCircle: [],
      hasJoined: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.initRecommend()
      this.initAllRecommend()
      this.initHasJoinedRecommend()
    },
    // 初始化推荐圈子
    initRecommend () {
      this.$http.post(`?m=circle&c=circle&a=get_recommend_circle`).then(res => {
        let data = res.data
        this.recommend = {
          id: data.id,
          circleName: data.circle_name,
          circlePicture: data.circle_picture,
          circleCount: Number(data.circlecount),
          userCount: Number(data.circleusercount)
        }
      })
    },
    // 初始化所有圈子
    initAllRecommend () {
      this.$http.post(`?m=circle&c=circle&a=get_allCircle`).then(res => {
        this.allCircle = []
        for (let item of res.data) {
          this.allCircle.push({
            id: item.id,
            circleName: item.circle_name,
            circlePicture: item.circle_picture,
            circleCount: Number(item.circlecount),
            userCount: Number(item.circleusercount)
          })
        }
      })
    },
    // 初始化已加入的圈子
    initHasJoinedRecommend () {
      this.$http.post(`?m=circle&c=circle&a=get_my_circle`).then(res => {
        this.hasJoined = []
        for (let item of res.data) {
          this.hasJoined.push({
            id: item.id,
            circleName: item.circle_name,
            circlePicture: item.circle_picture,
            circleCount: Number(item.circlecount),
            userCount: Number(item.circleusercount)
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.all-circle-page {
  height: 100%;
  overflow-y: auto;
  .title {
    font-size: 20px;
    font-weight: 300;
    margin: 0 10px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ececec;
  }
  .recommend-circle-item {
    margin: 10px auto;
  }
  .flex-circle {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .flex-circle-item {
      margin: 10px 0;
      flex: 1;
    }
  }
}
</style>

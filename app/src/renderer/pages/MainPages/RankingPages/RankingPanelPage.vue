<template>
  <div class="ranking-panel-page scroll">
    <h1 class="ranking-title">{{ title }}</h1>
    <ul class="ranking-list">
      <li
        v-for="(item, index) of rankingData"
        :key="index"
        class="ranking-item"
      >
        <div class="ranking-level">{{ index + 1 }}</div>
        <div class="ranking-user">
          <span class="nickname">
            {{ item.nickname }}
          </span>
          <span class="desc">
            {{ desc }}{{ item.data }}
          </span>
          <span class="account">
            {{ item.account }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ranking-panel-page',
  data () {
    return {
      title: '',
      desc: '',
      rankingData: [
        {
          account: '511287680',
          nickname: '如果昵称长一点的话会怎么样呢',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        },
        {
          account: '511287680',
          nickname: 'Miyang',
          data: 35
        }
      ]
    }
  },
  watch: {
    '$route' () {
      this.init()
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      let type = this.$route.params.type
      switch (type) {
        case 'score':
          this.title = '积分排行榜'
          this.desc = '总积分：'
          break
        case 'circle':
          this.title = '圈子排行榜'
          this.desc = '粉丝总数：'
          break
        case 'moments':
          this.title = '动态排行榜'
          this.desc = '动态活跃总数：'
          break
        case 'activity':
          this.title = '活动排行榜'
          this.desc = '参与活动总数：'
          break
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/scss/common.scss';
.ranking-panel-page {
  height: 100%;
  overflow-y: auto;

  h1.ranking-title {
    text-align: center;
    margin-top: 30px;
    font-weight: 400;
  }
  .ranking-list {
    width: 300px;
    margin: 10px auto;
    .ranking-item {
      list-style: none;
      width: 100%;
      display: flex;

      .ranking-level {
        width: 50px;
        font-size: 40px;
        text-align: center;
      }
      .ranking-user {
        flex: 1;
        position: relative;

        .nickname {
          font-size: 24px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          width: 165px;
          display: block;
        }
        .account {
          color: #808695;
          position: absolute;
          top: 0;
          right: 0;
          font-size: 10px;
        }
        .desc {
          font-size: 14px;
          color: #aaa;
        }
      }
    }
    .ranking-item:nth-child(1) .ranking-level {
      color: #ed4014;
    }
    .ranking-item:nth-child(2) .ranking-level {
      color: #ff9900;
    }
    .ranking-item:nth-child(3) .ranking-level {
      color: #19be6b;
    }
    .ranking-item .ranking-level {
      color: #2db7f5;
    }
  }
}
</style>

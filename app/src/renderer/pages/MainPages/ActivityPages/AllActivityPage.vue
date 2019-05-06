<template>
  <div class="all-activity-page">
    <h2 class="title">所有活动</h2>
    <Table :columns="tableHeader" :data="tableData"></Table>
  </div>
</template>

<script>
export default {
  name: 'all-activity-page',
  data () {
    return {
      tableHeader: [
        {
          title: '标题',
          key: 'title'
        },
        {
          title: '类型',
          key: 'type'
        },
        {
          title: '描述',
          key: 'content'
        },
        {
          title: '悬赏',
          key: 'score'
        },
        {
          title: '发起者',
          key: 'nickname'
        },
        {
          title: '人数',
          key: 'count'
        }
      ],
      tableData: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      this.$http.post(`?m=activity&c=activity&a=get_activity_list`).then(res => {
        for (let item of res.data) {
          let type = ''
          switch (Number(item.type)) {
            case 1:
              type = '娱乐'
              break
            case 2:
              type = '学习'
              break
            case 3:
              type = '其他'
              break
          }
          this.tableData.push({
            title: item.title,
            type: type,
            content: item.content,
            score: item.score,
            nickname: item.ownuserinfo.nickname,
            count: `${item.users.length}/${item.maxuser}`
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.all-activity-page {
  padding-left: 20px;
  padding-right: 20px;

  h2.title {
    font-weight: 300;
    line-height: 50px;
    display: inline-block;
  }
}
</style>

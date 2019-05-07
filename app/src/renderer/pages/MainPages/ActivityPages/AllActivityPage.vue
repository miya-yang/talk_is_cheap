<template>
  <div class="all-activity-page">
    <h2 class="title">所有活动</h2>
    <Tabs value="type1" @on-click="handleToggleTabs">
      <TabPane label="娱乐" name="type1">
        <Table :columns="tableHeader" :data="tableData"></Table>
      </TabPane>
      <TabPane label="学习" name="type2">
        <Table :columns="tableHeader" :data="tableData"></Table>
      </TabPane>
      <TabPane label="其他" name="type3">
        <Table :columns="tableHeader" :data="tableData"></Table>
      </TabPane>
    </Tabs>
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
        },
        {
          title: '活动状态',
          key: 'state'
        },
        {
          title: '截止日期',
          key: 'createtimes'
        },
        {
          title: '操作',
          key: 'operator',
          render: (h, params) => {
            // 未开始的活动显示该按钮
            if (params.row.stage === 1 && params.row.joinuser.indexOf(this.$store.getters.userId) < 0) {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  on: {
                    // 参加活动
                    click: () => {
                      this.$http.post(`?m=activity&c=activity&a=join_activity`, {
                        activityid: params.row.id
                      }).then(res => {
                        this.$Message.success('活动报名成功')
                        this.init()
                      })
                    }
                  }
                }, '参加活动')
              ])
            } else if (params.row.stage === 1) {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small',
                    disabled: true
                  },
                  on: {
                    // 参加活动
                    click: () => {
                      this.$http.post(`?m=activity&c=activity&a=join_activity`, {
                        activityid: params.row.id
                      }).then(res => {
                        this.$Message.success('活动报名成功')
                        this.init()
                      })
                    }
                  }
                }, '已经报名')
              ])
            }
          }
        }
      ],
      tableData: [],
      type1Data: [],
      type2Data: [],
      type3Data: []
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化
    init () {
      this.tableData = []
      this.type1Data = []
      this.type2Data = []
      this.type3Data = []
      this.$http.post(`?m=activity&c=activity&a=get_activity_list`).then(res => {
        for (let item of res.data) {
          let tempItem = {
            id: item.id,
            title: item.title,
            content: item.content,
            score: item.score,
            createtimes: item.createtimes,
            stage: Number(item.stage),
            joinuser: item.joinuser,
            nickname: item.ownuserinfo.nickname,
            count: `${item.users.length}/${item.maxuser}`
          }
          switch (Number(item.stage)) {
            case 1:
              tempItem.state = '未开始'
              break
            case 2:
              tempItem.state = '已开始'
              break
            case 3:
              tempItem.state = '已结束'
              break
            case 4:
              tempItem.state = '已废弃'
              break
          }
          switch (Number(item.type)) {
            case 1:
              tempItem.type = '娱乐'
              this.type1Data.push(tempItem)
              break
            case 2:
              tempItem.type = '学习'
              this.type2Data.push(tempItem)
              break
            case 3:
              tempItem.type = '其他'
              this.type3Data.push(tempItem)
              break
          }
        }
        this.tableData = this.type1Data
      })
    },
    // 切换tab事件
    handleToggleTabs (name) {
      switch (name) {
        case 'type1':
          this.tableData = this.type1Data
          break
        case 'type2':
          this.tableData = this.type2Data
          break
        case 'type3':
          this.tableData = this.type3Data
          break
      }
      console.log(name)
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
